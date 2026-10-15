import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const requested = process.argv.slice(2);
const paths = [];
for (let i = 0; i < requested.length; i += 2) {
    assert.equal(requested[i], '--typescript', 'Use --typescript <typescript.js> for each compiler');
    assert(requested[i + 1], 'Compiler path required');
    paths.push(resolve(requested[i + 1]));
}
if (!paths.length) paths.push(require.resolve('typescript'));

const index = resolve(root, 'declarations/autojs6/index.d.ts');
const reports = [];
for (const compiler of paths) {
    const ts = require(compiler);
    const options = {
        noEmit: true, strict: true, skipLibCheck: true,
        target: ts.ScriptTarget.ES2020, lib: ['lib.es2020.d.ts'], types: [],
    };
    if (Number(ts.version.split('.')[0]) >= 6) options.ignoreDeprecations = '6.0';
    const describe = diagnostics => diagnostics.map(d => {
        const at = d.file && d.start !== undefined ? `${d.file.fileName}:${d.file.getLineAndCharacterOfPosition(d.start).line + 1}: ` : '';
        return at + ts.flattenDiagnosticMessageText(d.messageText, '\n');
    }).join('\n');
    // Separate programs are essential: an opt-in declaration must not affect the default fixture.
    const fixtureReports = [];
    for (const fixture of ['api-coverage-smoke.ts', 'jsox-extensions-smoke.ts']) {
        const program = ts.createProgram([index, resolve(root, 'docs/smoke', fixture)], options);
        const diagnostics = ts.getPreEmitDiagnostics(program);
        assert.equal(diagnostics.length, 0, describe(diagnostics));
        fixtureReports.push({ fixture, diagnostics: diagnostics.length });
    }
    const bodyProgram = ts.createProgram([index], { ...options, strict: false, skipLibCheck: false });
    let bodyCount = 0;
    for (const source of bodyProgram.getSourceFiles().filter(file => /[/\\]aj6-int-[^/\\]+\.d\.ts$/.test(file.fileName))) {
        const diagnostics = bodyProgram.getSemanticDiagnostics(source);
        assert.equal(diagnostics.length, 0, describe(diagnostics));
        bodyCount++;
    }
    // A nominal marker must not invent properties in ordinary script completion.
    // Public computed symbol keys also need this check: TS may suggest an
    // enclosing namespace as a computed-property insertion for such a key.
    const completionFile = resolve(root, '__pinyin_completion_probe__.ts');
    const completionSource = 'pinyin.MODE_NORMAL. /*mode*/;\npinyin.STYLE_TONE. /*style*/;';
    const completionHost = {
        getCompilationSettings: () => options,
        getScriptFileNames: () => [index, completionFile],
        getScriptVersion: () => '1',
        getScriptSnapshot: file => {
            const text = resolve(file) === completionFile ? completionSource : ts.sys.readFile(file);
            return text === undefined ? undefined : ts.ScriptSnapshot.fromString(text);
        },
        getCurrentDirectory: () => root,
        getDefaultLibFileName: settings => ts.getDefaultLibFilePath(settings),
        fileExists: file => resolve(file) === completionFile || ts.sys.fileExists(file),
        readFile: file => resolve(file) === completionFile ? completionSource : ts.sys.readFile(file),
        readDirectory: ts.sys.readDirectory,
    };
    const languageService = ts.createLanguageService(completionHost);
    const enumCompletionMembers = {};
    for (const [name, marker] of [['mode', ' /*mode*/'], ['style', ' /*style*/']]) {
        const completions = languageService.getCompletionsAtPosition(completionFile,
            completionSource.indexOf(marker), { includeCompletionsWithInsertText: true });
        const names = completions?.entries.map(entry => entry.name).sort();
        assert.deepEqual(names, ['getValue', 'name', 'ordinal', 'value'], `${name} enum exposes a phantom completion`);
        enumCompletionMembers[name] = names;
    }
    languageService.dispose();
    // Each per-module opt-in must enable only that module, including the host radix overload.
    for (const module of ['array', 'number', 'math']) {
        const probe = resolve(root, `__api_coverage_${module}.ts`);
        const statements = {
            array: '[1, 2].distinct();\n// @ts-expect-error Number was not enabled\nNumber.ICU;\n// @ts-expect-error Math was not enabled\nMath.random(1, 2);',
            number: "Number.ICU; Number.parseFloat('ff', 16); parseFloat('ff', 16);\n// @ts-expect-error Array was not enabled\n[1].distinct();\n// @ts-expect-error Math was not enabled\nMath.random(1, 2);",
            math: 'Math.sum(1, 2); Math.random(1, 2);\n// @ts-expect-error Number was not enabled\nNumber.ICU;\n// @ts-expect-error Array was not enabled\n[1].distinct();',
        };
        const host = ts.createCompilerHost(options);
        const read = host.readFile.bind(host), exists = host.fileExists.bind(host);
        host.readFile = file => resolve(file) === probe ? statements[module] : read(file);
        host.fileExists = file => resolve(file) === probe || exists(file);
        const declaration = resolve(root, `declarations/autojs6/aj6-jsox-${module}-extensions.d.ts`);
        const program = ts.createProgram([index, declaration, probe], options, host);
        const diagnostics = ts.getPreEmitDiagnostics(program);
        assert.equal(diagnostics.length, 0, describe(diagnostics));
        const source = program.getSourceFile(declaration);
        const declarationProgram = ts.createProgram([index, declaration], { ...options, skipLibCheck: false, strict: false });
        assert(source);
        const bodyDiagnostics = declarationProgram.getSemanticDiagnostics(declarationProgram.getSourceFile(declaration));
        assert.equal(bodyDiagnostics.length, 0, describe(bodyDiagnostics));
    }
    reports.push({ typescript: ts.version, fixtures: fixtureReports, checkedDeclarationBodies: bodyCount,
        isolatedJsoxModules: 3, defaultExtensionsDisabled: true, enumCompletionMembers });
}
process.stdout.write(JSON.stringify({ reports }, null, 2) + '\n');
