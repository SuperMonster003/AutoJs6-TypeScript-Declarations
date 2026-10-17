import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const ts = require(process.argv[2] ? resolve(process.argv[2]) : 'typescript');
const manifest = JSON.parse(readFileSync(resolve(root, 'declarations/runtime-declarations.json'), 'utf8'));
for (const [name, expected] of Object.entries(manifest.files)) {
    const text = readFileSync(resolve(root, 'declarations', name), 'utf8').replace(/\r\n?/g, '\n');
    assert.equal(createHash('sha256').update(text).digest('hex'), expected, `Stale runtime declaration: ${name}`);
}
const result = [];
const rhinoOpencc = ts.createSourceFile('aj6-int-opencc.d.ts',
    readFileSync(resolve(root, 'declarations/autojs6/aj6-int-opencc.d.ts'), 'utf8'), ts.ScriptTarget.Latest, true);
let openccNames = [];
function collectOpencc(node) {
    if (ts.isInterfaceDeclaration(node) && node.name.text === 'OpenCC') {
        openccNames = node.members.filter(ts.isMethodSignature).map(member => member.name.getText(rhinoOpencc));
    }
    ts.forEachChild(node, collectOpencc);
}
collectOpencc(rhinoOpencc);
assert(openccNames.includes('convert') && openccNames.length >= 33, 'Canonical Rhino OpenCC methods are missing');

function verifyRuntimeTypes(program, runtime) {
    const checker = program.getTypeChecker();
    function ambient(name) {
        const symbol = checker.getAmbientModules().find(symbol => symbol.name === JSON.stringify(name));
        assert(symbol, `${runtime}: missing module ${name}`);
        return symbol;
    }
    function exportedValue(name) {
        const symbol = ambient(name);
        const assignment = symbol.declarations.flatMap(declaration => declaration.body?.statements || [])
            .find(ts.isExportAssignment);
        assert(assignment, `${name}: export assignment missing`);
        return checker.getTypeAtLocation(assignment.expression);
    }
    function property(type, name) {
        const symbol = checker.getPropertyOfType(type, name);
        assert(symbol, `${runtime}: missing member ${name}`);
        return checker.getTypeOfSymbolAtLocation(symbol,
            symbol.valueDeclaration || symbol.declarations?.[0] || program.getSourceFiles()[0]);
    }
    function returns(type, label, expectedPromise = true) {
        const signatures = checker.getSignaturesOfType(type, ts.SignatureKind.Call);
        assert(signatures.length, `${runtime}: ${label} is not callable`);
        return signatures.map(signature => {
            const value = checker.getReturnTypeOfSignature(signature);
            assert(!(value.flags & (ts.TypeFlags.Any | ts.TypeFlags.Never | ts.TypeFlags.Unknown)),
                `${runtime}: ${label} returns an unusable ${checker.typeToString(value)}`);
            if (!expectedPromise) return value;
            assert.equal(value.getSymbol()?.name, 'Promise', `${runtime}: ${label} must return Promise`);
            const awaited = checker.getAwaitedType(value);
            assert(awaited && !(awaited.flags & (ts.TypeFlags.Any | ts.TypeFlags.Never | ts.TypeFlags.Unknown)),
                `${runtime}: ${label} lost its resolved result type`);
            return awaited;
        });
    }
    let opencc, images;
    if (runtime === 'node') {
        opencc = exportedValue('opencc');
        images = exportedValue('images');
        returns(exportedValue('autojs6:opencc'), 'autojs6:opencc').forEach(value =>
            assert(value.flags & ts.TypeFlags.String, 'Qualified OpenCC result is not string'));
    } else {
        const client = checker.getExportsOfModule(ambient('autojs6:bun-host')).find(symbol => symbol.name === 'HostClient');
        assert(client, 'Bun HostClient is missing');
        const hostClient = checker.getDeclaredTypeOfSymbol(client);
        opencc = property(hostClient, 'opencc');
        images = property(hostClient, 'images');
    }
    for (const name of ['()', ...openccNames]) {
        returns(name === '()' ? opencc : property(opencc, name), `opencc.${name}`).forEach(value =>
            assert(value.flags & ts.TypeFlags.String, `${runtime}: opencc.${name} must resolve to string`));
    }
    const handleMethods = new Set(['fromBase64', 'fromBytes', 'readImage', 'copy', 'clip', 'resize', 'scale',
        'rotate', 'flip', 'grayscale', 'threshold', 'blur', 'gaussianBlur', 'medianBlur', 'invert', 'captureScreen', 'read']);
    const pointMethods = new Set(['findImage', 'findColor', 'findMultiColors', 'findColorEquals', 'findPointByColor', 'findPointByColors']);
    const pointArrayMethods = new Set(['matchTemplate', 'findAllPointsForColor', 'findPointsByColor']);
    const booleanMethods = new Set(['detectsColor', 'detectColor', 'requestScreenCapture', 'stopScreenCapture', 'save', 'isRecycled']);
    const voidMethods = new Set(['saveImage', 'recycle']);
    const expectedCommon = ['fromBase64', 'fromBytes', 'readImage', 'saveImage', 'toBase64', 'toBytes', 'pixel', 'readPixels',
        'getSize', 'copy', 'clip', 'resize', 'scale', 'rotate', 'flip', 'grayscale', 'threshold', 'blur', 'gaussianBlur',
        'medianBlur', 'invert', 'findImage', 'matchTemplate', 'findColor', 'findMultiColors', 'detectsColor',
        'findAllPointsForColor', 'recycle'];
    for (const name of expectedCommon) property(images, name);
    function numericFields(value, fields, label) {
        for (const name of fields) assert(property(value, name).flags & ts.TypeFlags.Number,
            `${runtime}: ${label}.${name} must be a number`);
    }
    let imageMethods = 0;
    for (const symbol of checker.getPropertiesOfType(images)) {
        const name = symbol.name, member = property(images, name);
        if (!checker.getSignaturesOfType(member, ts.SignatureKind.Call).length) continue;
        imageMethods++;
        for (const value of returns(member, `images.${name}`, !['getSize', 'getWidth', 'getHeight', 'isRecycled'].includes(name))) {
            if (handleMethods.has(name)) {
                assert(property(value, 'id').flags & ts.TypeFlags.String, `${runtime}: ${name} must return a handle id`);
                numericFields(value, ['width', 'height'], name);
            } else if (pointMethods.has(name)) {
                assert(value.isUnion() && value.types.some(type => type.flags & ts.TypeFlags.Null), `${name} must preserve the no-match null result`);
                numericFields(checker.getNonNullableType(value), ['x', 'y'], name);
            } else if (pointArrayMethods.has(name)) {
                const item = checker.getIndexTypeOfType(value, ts.IndexKind.Number);
                assert(item, `${name} must resolve to an array`);
                numericFields(item, ['x', 'y'], name);
                if (name === 'matchTemplate') assert(checker.getNonNullableType(property(item, 'score')).flags & ts.TypeFlags.Number);
            } else if (booleanMethods.has(name)) {
                assert(value.flags & ts.TypeFlags.BooleanLike, `${name} must resolve to boolean`);
            } else if (voidMethods.has(name)) {
                assert(value.flags & ts.TypeFlags.Void, `${name} must resolve to void`);
            } else if (name === 'getSize') {
                numericFields(value, ['width', 'height'], name);
            } else if (name === 'readPixels') {
                numericFields(value, ['width', 'height'], name);
                const pixel = checker.getIndexTypeOfType(property(value, 'data'), ts.IndexKind.Number);
                assert(pixel && pixel.flags & ts.TypeFlags.Number, `${name}.data must contain ARGB32 numbers`);
            } else if (['pixel', 'getWidth', 'getHeight'].includes(name)) {
                assert(value.flags & ts.TypeFlags.Number, `${name} must resolve to an ARGB32 number`);
            } else if (name === 'toBase64') {
                assert(value.flags & ts.TypeFlags.String, `${name} must resolve to a string`);
            } else if (name === 'toBytes') {
                assert.equal(value.getSymbol()?.name, 'Uint8Array', 'Without native Node types, image bytes must retain Uint8Array methods');
            } else {
                assert.fail(`${runtime}: review the return contract of the new image method ${name}`);
            }
        }
    }
    if (runtime === 'bun') assert(!checker.getPropertyOfType(images, 'captureScreen'), 'Bun must not declare Node capture support');
    return { openccMethods: openccNames.length, callableOpencc: true, imageMethods, anyOrNeverImageResults: 0 };
}
for (const runtime of ['node', 'bun']) {
    const options = { noEmit: true, strict: true, skipLibCheck: false, types: [],
        target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS,
        lib: runtime === 'bun' ? ['lib.es2022.d.ts', 'lib.dom.d.ts'] : ['lib.es2022.d.ts'] };
    if (Number(ts.version.split('.')[0]) >= 6) options.ignoreDeprecations = '6.0';
    const program = ts.createProgram([
        resolve(root, `declarations/autojs6-${runtime}/index.d.ts`),
        resolve(root, `docs/smoke/${runtime}-runtime-smoke.ts`),
    ], options);
    const diagnostics = ts.getPreEmitDiagnostics(program);
    assert.equal(diagnostics.length, 0, diagnostics.map(d => {
        const location = d.file && d.start !== undefined ? `${d.file.fileName}:${d.file.getLineAndCharacterOfPosition(d.start).line + 1}: ` : '';
        return location + ts.flattenDiagnosticMessageText(d.messageText, '\n');
    }).join('\n'));
    if (runtime === 'node') {
        assert(program.getSourceFiles().some(file => file.fileName.endsWith('/input_observer.d.ts')),
            'input_observer must be reachable from the public index');
    }
    result.push({ runtime, diagnostics: diagnostics.length, ...verifyRuntimeTypes(program, runtime) });
}
console.log(JSON.stringify({ typescript: ts.version, checkedAssets: Object.keys(manifest.files).length, results: result }, null, 2));
