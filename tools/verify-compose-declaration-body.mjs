import assert from "node:assert/strict";
import {createRequire} from "node:module";
import {dirname, resolve} from "node:path";
import {fileURLToPath} from "node:url";

assert.equal(process.argv.length, 4, "Use --typescript <typescript.js>");
assert.equal(process.argv[2], "--typescript");
const require = createRequire(import.meta.url);
const ts = require(resolve(process.argv[3]));
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const declaration = resolve(root, "declarations/autojs6/aj6-int-compose.d.ts");
const options = {strict: true, exactOptionalPropertyTypes: true, skipLibCheck: false, noEmit: true,
    target: ts.ScriptTarget.ES2018, types: [], lib: ["lib.es2018.d.ts"]};
if (Number(ts.versionMajorMinor.split(".")[0]) >= 6) options.ignoreDeprecations = "6.0";
const program = ts.createProgram([declaration], options);
// A referenced file can have '/' paths on Windows. Never pass undefined to the API:
// getSemanticDiagnostics(undefined) would check all unrelated native bodies instead.
const source = program.getSourceFiles().find((file) => resolve(file.fileName) === declaration);
assert(source, "The actual Compose declaration body must be present in the source graph");
const diagnostics = program.getSemanticDiagnostics(source);
assert.equal(diagnostics.length, 0,
    diagnostics.map((d) => `${d.start}: ${ts.flattenDiagnosticMessageText(d.messageText, " ")}`).join("\n"));
process.stdout.write(JSON.stringify({typescriptVersion: ts.version, diagnosticCount: diagnostics.length,
    heapMiB: Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}) + "\n");
