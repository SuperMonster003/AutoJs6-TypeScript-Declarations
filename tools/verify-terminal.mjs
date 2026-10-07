import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {readFileSync} from 'node:fs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const compilers = process.argv.slice(2);
assert(compilers.length, 'Supply paths to the actual TypeScript compiler modules');
const source = resolve(root, 'docs/smoke/terminal-smoke.ts');
for (const compiler of compilers) {
    const ts = require(resolve(compiler));
    const options = {strict: true, exactOptionalPropertyTypes: true, skipLibCheck: true,
        noEmit: true, target: ts.ScriptTarget.ES2020, lib: ['lib.es2020.d.ts'], types: []};
    if (Number(ts.versionMajorMinor.split('.')[0]) >= 6) options.ignoreDeprecations = '6.0';
    const program = ts.createProgram([source], options);
    const diagnostics = ts.getPreEmitDiagnostics(program);
    assert.equal(diagnostics.length, 0, diagnostics.map(d =>
        `${d.file?.fileName}:${d.start} ${ts.flattenDiagnosticMessageText(d.messageText, ' ')}`).join('\n'));
    const checker = program.getTypeChecker();
    const file = program.getSourceFile(source);
    for (const statement of file.statements.filter(ts.isVariableStatement)) {
        for (const declaration of statement.declarationList.declarations) {
            if (['session', 'nullableSession', 'state', 'result', 'error'].includes(declaration.name.getText(file))) {
                assert(!(checker.getTypeAtLocation(declaration.name).flags & ts.TypeFlags.Any), 'API type degraded to any');
            }
        }
    }
    process.stdout.write(JSON.stringify({typescript: ts.version, diagnostics: diagnostics.length,
        expectedErrors: (readFileSync(source, 'utf8').match(/@ts-expect-error/g) || []).length}) + '\n');
}
