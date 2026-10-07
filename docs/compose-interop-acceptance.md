# Compose interop declaration acceptance

Date: 2026-10-07. Declaration package 4.33.0 adds F2 for the matching AutoJs6
6.8.0/build 5320 host and a Compose UI renderer with the AndroidView interop
extension. This task prepares local declarations; it does not publish an npm
package or push a repository.

The source baseline is declarations commit
`2a27cdf`, including the current perceptual color functions, `colors.theme` and
terminal API. Those handwritten declarations and their previous changelog entries
are retained. The new API includes `compose.attach`, AndroidView factories and
TSX tags, synchronous `(context) => View` input, an actual View getter, and an
empty XML `<compose>` container. XML TSX `onClick` now receives the clicked
NativeView with the native EventEmitter as its receiver. This does not make
function attributes available in ordinary XML strings or E4X.

The original V1 declaration, Markdown and JSX regions remain byte-identical:
30 catalog entries, 114 canonical properties and 29 node tags. The separate
`AndroidViewInteropV1` export generates the F2 marked regions. Its wire lease ID
is never exposed as the script `view` input. The combined catalog gate checks
the actual exporter output, including View/factory projection, and its 19 Python
regressions pass. The public API does not declare `update` or `onRelease` props,
ordinary children or named slots for AndroidView.

The normal `aj6dts -Publish` workflow completed against the committed host
`d54f21b1ea408dfcb66e58f663d71d2f10fade8a`, using Android d.ts Generator 4.0.0
at `525bebdaa157087b1295d80cef0dae861152eda5`, appDebug and the ace profile.
The ignored `declarations/.generated/autojs6-dts-appDebug-ace.json` records that
exact host commit and successful TypeScript validation. Its schema records a
commit but has no dirty-state field; the source checkout was independently
checked at that commit with an empty Git status. Machine paths and temporary
staging inputs are not copied into this record.

| Generated input | Selected classes | Input classes | Published SHA-256 |
| --- | ---: | ---: | --- |
| Main | 488 | 10,769 | `71fbf095ea90f249fbe06ebf02b5125ffdf52e5b35bc3a28d62594fdc295a41c` |
| Resources | 20 | 20 | `33df4837b2f6ab5d36be3beb8ede9cc886825f46146932bec7b0d42f96b04a0f` |
| Libraries | 788 | 27,239 | `7f30c4c626b7c449de54ddbbd36a35515653303a340b47d563d5e6a797d9e8f8` |

The three published files match those hashes and the isolated Ace mirror
byte-for-byte. Generated changes follow the actual host API closure and resolved
lifecycle/savedstate dependencies. The old generated
`ScriptExecuteActivity.execute` entry is absent because this host uses the
pre-registered execution `start` path; it was not manually reintroduced as an
unsupported method. The copied `android/org.nativescript.widgets.d.ts` is identical
to the source and Ace's existing Git blob, so it adds no semantic change.

The final published graph was tested with real TypeScript 5.1.3 and Ace's bundled
6.0.3, using `tools/verify-compose-tsx.mjs` and the existing P6 fixtures:

| Check | TypeScript 5.1.3 | TypeScript 6.0.3 |
| --- | --- | --- |
| F1 TSX positives and 25 expected errors | Pass | Pass |
| F2 positives and 31 expected errors | Pass | Pass |
| P6 API smoke, normal strict mode | 0 diagnostics | 0 diagnostics |
| P6 API and nullish smoke, exact optional properties | 0 diagnostics | 0 diagnostics |
| Targeted Compose declaration body, skipLibCheck=false | 0 semantic diagnostics | 0 semantic diagnostics |

The F2 corpus includes native View/Context compatibility, `createElement`, both
Compose tag forms, aliases, getters, refs, container mounting, and
`factory(context) => ui.inflate(<button onClick={...} />)`. It rejects primitive
Views, wire numbers, Promise objects, async or invalid-return factories, invalid
receivers, unsupported props/slots/children, and invalid XML listeners.

To repeat the real compiler checks, supply actual compiler module files:

```text
node tools/verify-compose-tsx.mjs --typescript <typescript-5.1.3/lib/typescript.js> --typescript <ace-typescript/typescript.js>
```

The ordinary P6 fixture includes its strict compiler command; the additional
nullish fixture uses `exactOptionalPropertyTypes`. The TSX runner also preserves
the recorded strict/exact leaf-child distinction and verifies classic emit.

The historical global JSX expression result remains implicit `any`: the host
still checks XML/Compose domain mixing and fragment cardinality. When native
editor groups are absent, native objects remain opaque, but `call`, `apply` and
`then` exclusions prevent functions and Promises from bypassing View factory
checks. The actual default/full-group Ace verifier validates those rejections.
Runtime ownership, parent occupancy and actual container identity remain runtime
checks; declaration acceptance does not substitute for Android device evidence.
