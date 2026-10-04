# Compose TSX declaration acceptance

Date: 2026-10-04. Declaration package 4.31.0 adds the F.1 JSX declarations for
the matching local AutoJs6 build 5319, Compose UI 1.1.0 and Rhino TypeScript
execution profile. These are local integration results, not an npm or Git release.

The required local `aj6dts.bat -Publish` workflow used the dedicated host source
commit `b67d668f485494f246d557c51c7f06833fb0b53c` and Android d.ts Generator 4.0.0
commit `525bebdaa157087b1295d80cef0dae861152eda5`. The appDebug / ace export selected
487 of 10100 host classes, 20 of 20 resource classes and 786 of 27236 dependency
classes. The new host bridge makes the Compose implementation types reachable in
the generated Java declarations. Generation, actual TypeScript validation and
local Ace mirroring completed; the host stayed clean and its version stayed 5319.
Machine-specific arguments and full provenance remain in ignored generated data.

`<compose.Column>` uses the existing, precise factory signature. Aliases of that
factory and `$compose` use the same types. The generated `compose:Column`
intrinsic entry refers to `Internal.ComposeProps<"Column">`. All 29 node factories
have an intrinsic entry; Snackbar remains a session command. The P6 ordinary
factory, child, slot, event and callback receiver declarations are unchanged.
No props or child types were replaced with `any` to admit JSX.

The separate generated region in `aj6-jsx-element-extension.d.ts` uses these
markers:

```text
// <autojs6-compose-jsx:v1>
// </autojs6-compose-jsx:v1>
```

The host catalog tool produces this region from the frozen component catalog,
alongside the existing 30-component / 114-property API and Markdown projections.
Its explicit `check --jsx` mode checks missing, extra and changed entries. The
16 pure Python tests pass, including rejection of missing tags and a widened
`any` property map. Both handwritten declaration mirrors have SHA-256
`440744713f67fa1c4a5329a13992b657692e95115ae3c8be53447ad04ceb661f`.

`tools/verify-compose-tsx.mjs` reads the actual declaration index and the actual
compiler supplied on its command line. It does not substitute a small test-only
Compose declaration. Run it from this repository, supplying installed compiler
module paths:

```text
node tools/verify-compose-tsx.mjs --typescript <typescript-5.1.3/lib/typescript.js> --typescript <ace-bundled-typescript/lib/typescript.js>
```

| Check | TypeScript 5.1.3 | Ace TypeScript 6.0.3 |
| --- | --- | --- |
| Full declaration graph, TSX positive cases and 25 expected errors | Pass | Pass |
| Value tags, aliases, namespace tags, fragments and legacy XML classic emit | Pass | Pass |
| Ordinary P6 smoke with normal strict options | 0 diagnostics | 0 diagnostics |
| Ordinary P6 smoke and exact-nullish smoke with exact optional properties | 0 diagnostics | 0 diagnostics |
| Old XML-only global `JSX.Element` probe | Rejects Compose with 2322 / 2786 / 2345 | Rejects Compose with 2322 / 2786 / 2345 |
| Same probe after removing only that global alias | 0 diagnostics | 0 diagnostics |

The TSX fixture uses `strict` and `exactOptionalPropertyTypes` for its negative
corpus. The runner additionally compares normal strict and exact optional modes;
it does not require a new editor setting or change runtime accepted inputs. The
ordinary API regressions also pass in both modes. `skipLibCheck` skips unrelated
native declaration internals in the complete graph, not the script fixture.

Classic emit preserves the distinction needed by the host dispatcher:

```tsx
<compose.Text text="Value"/>  // __autojs6Tsx(compose.Text, { text: "Value" })
<compose:Text text="Name"/>   // __autojs6Tsx("compose:Text", { text: "Name" })
<text text="XML"/>           // __autojs6Tsx("text", { text: "XML" })
<><compose.Text text="One"/></> // __autojs6Tsx(__autojs6TsxFragment, null, ...)
```

The public package historically omitted global `JSX.Element`, giving JSX
expressions an implicit `any` result. This boundary is preserved because XML
values and Compose nodes have different runtime representations. Defining that
single global type as either domain would misclassify the other. Nested children
are checked using `ElementChildrenAttribute`; legacy XML keeps an opaque child
carrier, which does not introduce a native XML attribute. Plain numeric or `true`
Compose children, plain text inside a Text leaf and multiple direct Surface
children produce diagnostics. A single child JSX expression can still bypass a
leaf's optional `never` property under normal strict mode; exact optional mode
rejects that case. The runner records this limitation explicitly.

The compiler cannot distinguish mixed XML/Compose expressions or count roots in
an opaque fragment. Matching-host runtime checks own those cases, as well as
rejecting unregistered function tags. Passing type checking is not permission to
mix the two trees. Runtime/device execution evidence belongs to the host F.1
tests and is separate from these compiler results.

In Ace's actual Rhino `.tsx` language-service profile, both default and fully
enabled optional declaration groups pass positive examples, preserve all 36
legacy XML tags and reject 17 invalid-input categories. `<compose.TextField>`
provides the expected property completion. TypeScript 6.0.3 currently returns
global symbols at the attribute position in `<compose:TextField>` instead of
those property candidates. The same behavior was reproduced with the raw
TypeScript language service; both forms still receive accurate type diagnostics
and classic emit. Recommend the value-tag form for editing. No bundled compiler
patch or completion heuristic is used to disguise this limitation.
