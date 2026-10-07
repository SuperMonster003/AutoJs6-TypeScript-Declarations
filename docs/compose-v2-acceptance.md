# Compose F4 contract V2 declaration acceptance

Date: 2026-10-08. Package 4.35.0 adds the F4 wide-component catalog to the
committed 4.34.0 source at `4512f0ef4a051c8286bd7a19cd3cd7f2d8cf50e6`.
This describes local development acceptance, not npm publication.

The actual JVM export `ComposeUiV2.catalog` contains the complete union of
55 entries: all 30 frozen V1 entries and 25 appended node components covering
the 19 roadmap families and six supporting item types. Its 62 new canonical
properties use the existing frozen value kinds. `AndroidView` remains the
separately negotiated F2 extension. Matching host build 5322 and a contract V2
renderer are required for the appended nodes; declarations do not make an old
renderer support them.

The Python catalog gate verifies every V1 component remains identical before
generating the V2-only property, normalized accessor, event, required-slot,
children-policy and JSX projections. V1 and F2 marked regions are retained
unchanged. Date callbacks expose `number | null`, time callbacks take hour and
minute separately, and display-mode callbacks retain the validated enum.
Date bounds start at Gregorian year 1583 so the same UTC value has consistent
calendar meaning on the supported API 24/25 and newer Android versions.
Item container factories reject unrelated nodes and string children. Leaf
components reject named slots even when supplied through a `slots` object.
Required slot aliases accept either a direct property or the `slots` object.
The final V2 catalog also advertises focus/blur for its 11 native interactive
controls. Existing node-handle methods remain available because a clickable
modifier can provide a focus target on other components; native command support
and mounted ownership are checked at runtime.

TypeScript still cannot prove arbitrary numeric ranges, live parent ownership,
nonempty item counts, selection across siblings or validity of UTC timestamps.
The historical global JSX expression type stays `any`; this continues to limit
static proof of JSX child domains and fragment cardinality. Runtime checks
remain authoritative. Native optional declaration groups and the existing
View/Context compatibility behavior are preserved.

`docs/smoke/compose-v2-smoke.tsx` covers all 25 additions with ordinary factories,
the two JSX forms, required slots, callbacks, normalized getters/setters, refs,
keys, grid padding and indexed scrolling. It contains 42 expected negative
cases. The shared real compiler driver also retains the F1/F2/F3 corpora and
checks the actual Compose declaration body with `skipLibCheck=false`.

| Source check | TypeScript 5.1.3 | TypeScript 6.0.3 |
| --- | --- | --- |
| F1 / F2 / F3 positives and 25 / 31 / 22 expected errors | Pass | Pass |
| F4 positives and 42 expected errors | Pass | Pass |
| Actual Compose declaration body, skipLibCheck=false | 0 diagnostics | 0 diagnostics |
| P6 API smoke in normal strict and exact optional modes | 0 diagnostics | 0 diagnostics |
| Global JSX expression boundary and classic emit | Preserved | Preserved |

The driver uses a fresh process for each compiler and for each targeted body
check. This releases the large native declaration graph between comparisons;
the final body checks used 545 MiB and 608 MiB respectively. Source lookup is
normalized and asserted before calling the compiler API, so Windows path
separators cannot accidentally turn a targeted check into an unrelated full
native-graph check. No compiler check is skipped to reduce memory use.

Repeat with actual compiler module paths:

```text
node tools/verify-compose-tsx.mjs --typescript <typescript-5.1.3/lib/typescript.js> --typescript <ace-typescript/typescript.js>
```

The normal local `aj6dts -Publish` workflow completed from clean host commit
`6a166c38415e7299ba034cd062dcc4c51a4b543a`, appDebug/ace profile, using Android
d.ts Generator 4.0.0 at `525bebdaa157087b1295d80cef0dae861152eda5`. The host used
the independently upgraded platform 1.9.0, Gradle 9.7.1, AGP 9.4.1 and Kotlin
2.4.0. The generated workflow provenance records the exact host, the isolated
Ace destination and successful TypeScript validation. It has no dirty-state
field; an empty host Git status was checked before and after the workflow.

| Generated input | Selected classes | Input classes | SHA-256 |
| --- | ---: | ---: | --- |
| Main | 489 | 10,839 | `007e64911ca55de38e7d69aa437ca462a85fce12ccf321863d924309ae558e18` |
| Resources | 20 | 20 | `c107a607a964fde7298b100221a4a59fd17881a7bedd6337595dc21d997ac0e9` |
| Libraries | 789 | 27,248 | `1176e09b0b026968534641af306ccdff8131f6ad05b2d36154a5657924a65456` |

Main and resource output bytes match the prior F3 publication. The library
delta is the newly referenced `ComposeUiV2` class; no generated declaration was
selectively removed or rewritten. All three outputs match their provenance
hashes and the generated Ace copies. The complete Android reference graph was
also copied by the actual workflow. The compiler checks above ran again against
these final generated inputs. Local logs are
`declarations/.generated/compose-f4-publish.log`, `compose-f4-final-ts.log` and
`compose-f4-final-p6.log` in that same ignored directory.

The isolated Ace verifier adds default-group and full-native-group language
service checks for all 25 factories, 34 negative categories and DatePicker /
SearchBar attribute completion. The handwritten declaration modules are copied
from the committed package after the generated-input workflow. Ace records that
exact source commit, retained editor-owned assets, browser verification and
build acceptance in its own F4 integration evidence.
