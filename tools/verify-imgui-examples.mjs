import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Type-checks the bundled examples of AutoJs6-Plugin-ImGui against aj6-int-imgui.d.ts with strict.
// node tools/verify-imgui-examples.mjs [--plugin <AutoJs6-Plugin-ImGui>]
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const pluginAt = args.indexOf('--plugin');
assert(pluginAt < 0 || args[pluginAt + 1], '--plugin requires a directory');
const plugin = resolve(pluginAt < 0 ? resolve(root, '../AutoJs6-Plugin-ImGui') : args[pluginAt + 1]);
const examples = resolve(plugin, 'app/src/main/assets/examples');
const files = readdirSync(examples).filter(name => name.endsWith('.js')).map(name => resolve(examples, name));
assert(files.length, `No examples under ${examples}`);
const ts = createRequire(import.meta.url)('typescript');
const options = {
    noEmit: true, strict: true, skipLibCheck: true, allowJs: true, checkJs: true,
    target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS, lib: ['lib.es2020.d.ts'], types: [],
};
const program = ts.createProgram([
    resolve(root, 'declarations/autojs6/index.d.ts'), resolve(root, 'docs/smoke/imgui-examples-env.d.ts'), ...files], options);
const diagnostics = ts.getPreEmitDiagnostics(program);
const lines = diagnostics.map(d => {
    const at = d.file && d.start !== undefined ? `${d.file.fileName}:${d.file.getLineAndCharacterOfPosition(d.start).line + 1}: ` : '';
    return at + ts.flattenDiagnosticMessageText(d.messageText, '\n');
});
assert.equal(lines.length, 0, lines.join('\n'));
console.log(JSON.stringify({ typescript: ts.version, examples: files.length, diagnostics: lines.length }));
