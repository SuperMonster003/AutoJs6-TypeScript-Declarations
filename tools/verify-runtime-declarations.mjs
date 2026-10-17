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
    result.push({ runtime, diagnostics: diagnostics.length });
}
console.log(JSON.stringify({ typescript: ts.version, checkedAssets: Object.keys(manifest.files).length, results: result }, null, 2));
