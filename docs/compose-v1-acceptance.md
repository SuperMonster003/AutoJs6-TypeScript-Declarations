# Compose UI V1 declaration acceptance

Date: 2026-10-03. Declaration package4.30.0 targets the matching local AutoJs6
6.8.0 / 5317 integration and Compose UI1.0.0. The published host input commit is
d29eb477822c566b84b6ede02edef8477bdd4085; the generator is
525bebdaa157087b1295d80cef0dae861152eda5 (Android d.ts Generator4.0.0).
Publication here means local file generation and mirroring, not npm/Git publication.

The hand-maintained module covers the callable compose/$compose globals,
ComposeError, 29 node factories/createElement, typed node properties and events,
state/ref/batch/post, 20 ordered modifiers, themes, sessions and floating windows.
Snackbar is a session command. Required image/icon inputs and dialog confirmation,
callback receivers, normalized getters versus input setters, meaningful nullish
container handling and scroll target requirements match the real runtime.

The exact generated catalog region has30 entries and114 canonical properties.
Both copies match the freshly exported frozen host catalog and the committed
documentation Components page. Handwritten declarations are mirrored byte-for-byte
into Ace; Ace retains its curated index instead of importing the entire Java graph
by default. The final Compose file SHA-256 is
b71832f8b4a62a386934555c2aa3f8dadc118b36bad50b7553b804ed98ac5d6a.

The required aj6dts.bat -Publish flow used an explicit task-host root and appDebug
ace profile. It exported real classes/resources/dependencies, generated the main,
resource and libraries declarations, performed TypeScript validation and mirrored
the outputs to Ace. The selected input counts were459/10096 main classes,20/20
resource classes and775/27236 dependency classes. The host build number/time were
not incremented. Machine-local configuration and full workflow provenance remain
ignored generated inputs; no machine path or staging directory is committed here.

Validation:

- TypeScript5.1.3 strict + exactOptionalPropertyTypes: full API positive examples
  and39 @ts-expect-error cases in docs/smoke/compose-smoke.ts passed.
- The separate exact-nullish fixture adds2 cases distinguishing a missing optional
  property from an explicitly undefined value. Node.set still requires an argument.
- The new declaration file has zero semantic diagnostics in the actual full
  declaration graph with skipLibCheck=false for that file.
- The actual Ace TypeScript6.0.3 runtime/core bundle and browser language service
  were tested in default and fully enabled declaration configurations. Factories,
  properties and TextField callback signatures are available in both modes.
- Missing optional native declarations originally contaminated image/color inputs
  with error-any. Boxed public-member projection now keeps those native branches
  object-shaped, rejects primitive misuse and preserves full native assignability
  when the optional declarations are loaded. A missing-namespace fixture protects
  this distinction from ordinary any, which alone did not reproduce the problem.
- Ace's regular verify-runtime.mjs now permanently checks the default/full-group
  Compose behavior, including seven invalid-input categories and callback this.

The default editor still does not load complete native member declarations.
Precise native members require the existing optional groups. TypeScript's static
distinction for duration:undefined depends on exactOptionalPropertyTypes; runtime
validation is unchanged. No TSX/JSX bridge, mixed content or compose.dialog API is
advertised by this version.
