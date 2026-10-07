import assert from "node:assert/strict";
import {createRequire} from "node:module";
import {readFileSync} from "node:fs";
import {dirname, resolve} from "node:path";
import {fileURLToPath} from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const runtimePaths = [];
for (let i = 2; i < process.argv.length; i += 2) {
    assert.equal(process.argv[i], "--typescript", "Use --typescript <typescript.js> once for each real compiler");
    assert(process.argv[i + 1], "Compiler path required");
    runtimePaths.push(resolve(process.argv[i + 1]));
}
assert(runtimePaths.length > 0, "Supply at least one actual TypeScript compiler module");
const index = resolve(root, "declarations/autojs6/index.d.ts");
const fixture = resolve(root, "docs/smoke/compose-tsx-smoke.tsx");
const text = readFileSync(fixture, "utf8");
const interopFixture = resolve(root, "docs/smoke/compose-interop-smoke.tsx");
const interopText = readFileSync(interopFixture, "utf8");
const oldProjectionSource = [
    "declare namespace AutoJs6Tsx { interface Element { readonly __xmlElementBrand: unique symbol; } }",
    "declare namespace JSX { type Element = AutoJs6Tsx.Element; }",
].join("\n");
const projectionProbe = [
    "const composeValue = <compose.Column><compose.Text text='Value'/></compose.Column>;",
    "const composeNamespace = <compose:Column><compose:Text text='Namespace'/></compose:Column>;",
    "compose.mount(composeNamespace);",
    "const legacyXml = <vertical><text text='XML'/></vertical>;",
].join("\n");

function createProgram(ts, options, source, extra = "") {
    const virtualSource = resolve(root, "__compose_tsx_probe__.tsx");
    const virtualExtra = resolve(root, "__compose_tsx_projection__.d.ts");
    const host = ts.createCompilerHost(options);
    const read = host.readFile.bind(host), exists = host.fileExists.bind(host);
    host.fileExists = (name) => [virtualSource, virtualExtra].includes(resolve(name)) || exists(name);
    host.readFile = (name) => resolve(name) === virtualSource ? source : resolve(name) === virtualExtra ? extra : read(name);
    return {program: ts.createProgram([index, virtualSource, virtualExtra], options, host), virtualSource};
}

const reports = [];
for (const runtime of runtimePaths) {
    const ts = require(runtime);
    const options = {
        strict: true, exactOptionalPropertyTypes: true, skipLibCheck: true, noEmit: true,
        target: ts.ScriptTarget.ES2018, module: ts.ModuleKind.CommonJS, lib: ["lib.es2018.d.ts"], types: [],
        jsx: ts.JsxEmit.React, jsxFactory: "__autojs6Tsx", jsxFragmentFactory: "__autojs6TsxFragment",
    };
    if (Number(ts.versionMajorMinor.split(".")[0]) >= 6) options.ignoreDeprecations = "6.0";
    const program = ts.createProgram([index, fixture, interopFixture], options);
    const diagnostics = ts.getPreEmitDiagnostics(program);
    assert.equal(diagnostics.length, 0, diagnostics.map((d) => `${d.file?.fileName}:${d.start}: ${ts.flattenDiagnosticMessageText(d.messageText, " ")}`).join("\n"));
    const checker = program.getTypeChecker();
    const source = program.getSourceFile(fixture);
    const expressionTypes = {};
    source.forEachChild((node) => {
        if (!ts.isVariableStatement(node)) return;
        for (const declaration of node.declarationList.declarations) {
            const name = declaration.name.getText(source);
            if (["legacyExpression", "composeExpression", "namespaceExpression", "singleRootFragment"].includes(name)) {
                const type = checker.getTypeAtLocation(declaration.name);
                assert(type.flags & ts.TypeFlags.Any, `${name} changed the shared historical JSX expression type`);
                expressionTypes[name] = checker.typeToString(type);
            }
        }
    });
    assert.equal(Object.keys(expressionTypes).length, 4);

    const lowered = ts.transpileModule(projectionProbe + "\nconst fragment = <><compose.Text text='x'/></>;\nconst Alias=compose.Column; const alias=<Alias/>;", {
        compilerOptions: {...options, noEmit: false}, fileName: "real-classic-emit.tsx",
    }).outputText;
    assert(lowered.includes("__autojs6Tsx(compose.Column,"));
    assert(lowered.includes('__autojs6Tsx("compose:Column",'));
    assert(lowered.includes('__autojs6Tsx("vertical",'));
    assert(lowered.includes("__autojs6Tsx(__autojs6TsxFragment, null,"));
    assert(lowered.includes("__autojs6Tsx(Alias, null)"));

    const old = createProgram(ts, options, projectionProbe, oldProjectionSource);
    const oldDiagnostics = ts.getPreEmitDiagnostics(old.program)
        .filter((d) => d.file && resolve(d.file.fileName) === old.virtualSource);
    assert(oldDiagnostics.some((d) => d.code === 2786), "The old XML-only JSX.Element must reject Compose value tags");
    assert(oldDiagnostics.some((d) => d.code === 2345), "The old projection must misclassify Compose intrinsic results as XML");
    const unified = createProgram(ts, options, projectionProbe);
    assert.equal(ts.getPreEmitDiagnostics(unified.program).length, 0, "Removing only the global XML Element alias must restore dual-domain JSX typing");
    const leafSource = "const leaf = <compose.Text text='x'><compose.Text text='y'/></compose.Text>;";
    const looseLeaf = createProgram(ts, {...options, exactOptionalPropertyTypes: false}, leafSource);
    const strictLeaf = createProgram(ts, options, leafSource);
    assert.equal(ts.getPreEmitDiagnostics(looseLeaf.program).length, 0, "Record the existing implicit-any JSX leaf-child limit under normal strict mode");
    assert(ts.getPreEmitDiagnostics(strictLeaf.program).some((d) => d.code === 2322), "Exact optional props should reject a supplied never-typed leaf child");
    reports.push({typescriptVersion: ts.version, expectedErrors: (text.match(/@ts-expect-error/g) || []).length,
        interopExpectedErrors: (interopText.match(/@ts-expect-error/g) || []).length,
        diagnosticCount: diagnostics.length, expressionTypes, classicEmitChecked: true,
        oldXmlOnlyProjectionDiagnosticCodes: [...new Set(oldDiagnostics.map((d) => d.code))],
        leafElementRejectedOnlyWithExactOptionalProperties: true,
        ordinaryFactorySignaturesPreserved: true});
}
process.stdout.write(JSON.stringify({reports}, null, 2) + "\n");
