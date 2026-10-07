# Compose F3 dialog declaration acceptance

Date: 2026-10-07. Package 4.34.0 adds `compose.dialog` on top of the committed
4.33.0/F2 source `26dcf6cd6d4d175c179b49474d9b9ffc28939690`. The existing colors,
terminal, AndroidView and XML/Compose declarations remain in place. This record
describes local source acceptance, not npm publication or a public release.

`compose.dialog(nodeOrRender, options?)` returns the existing `ComposeSession`.
Its exact options are `type?: 'alert' | 'bottomSheet'`, `cancelable?: boolean`
and the existing theme input. The default type is alert and cancellation is
enabled by default. Whole options may be nullish; explicit null/undefined for
`type` or `cancelable` is invalid at runtime. Theme keeps the existing mount
inheritance/replacement rules. No native window token/type, Promise result,
floating-window controls or new component factory is declared.

The source contract requires matching host build 5321 and renderer dialog
support; TSX uses the matching TypeScript Engine 0.6.6 declaration supply. UI
dialogs belong to the calling runtime's Activity. Non-UI dialogs require existing
overlay permission and own their keep-alive reference. New dialogs coexist with
other mounts under the shared eight-session limit. Runtime ownership, permission,
cancel behavior and Android rendering remain covered by the coordinated host and
renderer acceptance rather than being inferred from type checking.

The normal `aj6dts -Publish` workflow completed from host commit
`8cba2ce0e3aad5835879b0b91604caec9cb719b1`, appDebug/ace profile, with Android d.ts
Generator 4.0.0 at `525bebdaa157087b1295d80cef0dae861152eda5`. The ignored
`declarations/.generated/autojs6-dts-appDebug-ace.json` records that exact commit,
the isolated Ace destination and successful TypeScript validation. Its schema
has no dirty flag; the host checkout was independently checked at that commit
with an empty Git status. Local machine paths and staging files are not included
in this record.

| Generated input | Selected classes | Input classes | SHA-256 |
| --- | ---: | ---: | --- |
| Main | 489 | 10,834 | `007e64911ca55de38e7d69aa437ca462a85fce12ccf321863d924309ae558e18` |
| Resources | 20 | 20 | `c107a607a964fde7298b100221a4a59fd17881a7bedd6337595dc21d997ac0e9` |
| Libraries | 788 | 27,242 | `7f30c4c626b7c449de54ddbbd36a35515653303a340b47d563d5e6a797d9e8f8` |

The three files match their provenance hashes and isolated Ace copies
byte-for-byte. The main delta follows dialog options/platform/session and the
host's raw-floaty parameter configuration. Resource additions reflect the actual
host, including retained smart-hint and codegen resources. The selected library
output is unchanged from F2. No generated declaration was selectively rewritten
to conceal the source graph. The Android reference graph and current
colors/terminal handwritten contents remain preserved.

| Final published graph check | TypeScript 5.1.3 | TypeScript 6.0.3 |
| --- | --- | --- |
| F1 TSX positives and 25 expected errors | Pass | Pass |
| F2 positives and 31 expected errors | Pass | Pass |
| F3 positives and 22 expected errors | Pass | Pass |
| P6 API smoke, normal strict mode | 0 diagnostics | 0 diagnostics |
| P6 API and nullish smoke, exact optional properties | 0 diagnostics | 0 diagnostics |
| Targeted Compose declaration body, skipLibCheck=false | 0 semantic diagnostics | 0 semantic diagnostics |

`docs/smoke/compose-dialog-smoke.tsx` covers Session update/post/close/close-event
and Snackbar typing, both dialog types, nullish option containers, theme inputs,
TSX fragments and AndroidView content. It rejects invalid roots, async renders,
unsupported types, wrong booleans, native window fields, invalid theme values,
Promise assumptions and floating-window methods. The final two negative cases
require exact optional properties; the ordinary editor profile's acceptance of
explicit undefined remains a documented static limitation.

Repeat the real compiler corpus with actual module paths:

```text
node tools/verify-compose-tsx.mjs --typescript <typescript-5.1.3/lib/typescript.js> --typescript <ace-typescript/typescript.js>
```

The V1 30-entry/114-property catalog and 29 JSX tags, plus the F2 interop regions,
remain unchanged and pass the actual catalog gate. F3 is a mount API, so it adds
no catalog entry or JSX tag. The historical JSX expression/domain precision
boundary is retained; runtime mixed-tree and fragment checks are still required.
