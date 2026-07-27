# AutoJs6 Declaration Sync Roadmap

Last updated: 2026-07-27

This roadmap tracks the work needed to synchronize this repository with the AutoJs6 runtime APIs under:

```text
app/src/main/java/org/autojs/autojs/runtime/api/augment
```

The current cycle synchronizes declarations with AutoJs6 `6.8.0 Alpha7` at source commit `fe4340faee934c7189e5d5d776f67ab7a636b4dd`. Hand-authored declarations are retained unless a source audit proves that an API is unreachable. Generator-owned shards may be consolidated when the regenerated bundle supersedes them.

## Source Of Truth

Use these sources in order when updating declarations:

1. `ScriptRuntime.kt` `augment(target)` registrations for real global names and `$` aliases.
2. Each `Augmentable` implementation for `key`, `selfAssignmentFunctions`, `globalAssignmentFunctions`, `selfAssignmentProperties`, `selfAssignmentGetters`, Java classes, callability, and constructability.
3. `NativeObject` implementations for dynamic instance methods and properties.
4. Prototype objects passed into `augment(...)`, including legacy Java API objects.
5. Existing declaration style in this repository.
6. Assets modules only for modules still implemented outside Kotlin `augment`.

## General Rules

- Keep `docs/CHANGELOG.md` as release history. Add entries there only when preparing a release.
- Prefer adding or correcting declarations over deleting legacy declarations.
- Separate owned Kotlin `augment` APIs from legacy prototype APIs in comments and structure.
- Global constructor names are case-sensitive. `Canvas`, `Color`, `WebSocket`, and `RootAutomator` are constructor globals, not lowercase module globals.
- Lowercase module globals that use `$` aliases must declare both forms, for example `zip` and `$zip`.
- Every new module declaration must be referenced by `declarations/autojs6/index.d.ts`.
- Every runtime global must be declared in `aj6-int-init.d.ts` or in a module file that is already referenced by `index.d.ts`.

## Phase 0: Baseline Inventory And Validation

Status: completed

Goals:

- Build a module matrix from `ScriptRuntime.kt`.
- Record each runtime global name, `$` alias, source file, call/construct behavior, and declaration file.
- Decide the validation command for this repository, since `package.json` currently has no real test script.

Tasks:

- [ ] Create or maintain a local API sync matrix for all `augment` registrations.
- [ ] Mark modules as `current`, `partial`, `missing`, or `legacy/assets`.
- [ ] Add representative TypeScript smoke files or a compile-only validation workflow.
- [x] Check whether generated Java declarations such as `aj6-main-app.d.ts` need a full regeneration later.

Acceptance:

- There is a clear list of missing globals and missing declaration files.
- A TypeScript check command is documented or added.
- Existing user-authored declarations are not removed during inventory.

## Phase 1: Runtime Entry Points

Status: completed

Goals:

- Make the global declarations match `ScriptRuntime.kt` before deep module work.
- Ensure new or existing module files are loaded by `index.d.ts`.

Required updates:

- [x] Add `aj6-int-pinyin.d.ts` to `index.d.ts`; the file exists but is not currently referenced.
- [x] Add global aliases for `keys` and `$keys`.
- [x] Add `jsox` and `$jsox`.
- [x] Add `cvt` and `$cvt`.
- [x] Add `fmt` and `$fmt`.
- [x] Add `sysprops` and `$sysprops`.
- [x] Add `zip` and `$zip`.
- [x] Add `nanoid` and `$nanoid`.
- [x] Add `pinyin4j` and `$pinyin4j`.
- [x] Add `mediainfo` and `$mediainfo`.
- [x] Recheck constructor globals: `Canvas`, `Color`, `WebSocket`, `RootAutomator`.
- [x] Avoid declaring nonexistent lowercase constructor aliases such as `canvas` or `$canvas`.

Acceptance:

- Every runtime global registered in `ScriptRuntime.kt` has a declaration.
- Every `$` alias enabled by `augment(..., withDollarPrefix = true)` has a declaration.
- Constructor globals expose construct signatures, not just Java class inheritance.

## Phase 2: Colors And Color

Status: completed

Scope:

- `declarations/autojs6/aj6-int-colors.d.ts`
- `augment/colors/Colors.kt`
- `augment/colors/Color.kt`
- `augment/colors/ColorNativeObject.kt`
- `core/image/ColorTable.kt`

Required updates:

- [x] Fix the file header: module name should be `colors`, and source should point to Kotlin `augment`.
- [x] Add `colors.all` and `colors.themeColor`.
- [x] Add static methods: `toRgbString`, `toRgbaString`, `toArgbString`, `toHsvString`, `toHsvaString`, `toHslString`, `toHslaString`.
- [x] Add matching `Color` instance methods where `ColorNativeObject` proxies to `Colors`.
- [x] Add missing color constants and names: `BLUE_GRAY`, `BLUE_GRAY_50..900`, `GRAY_50..900`.
- [x] Add lowercase `ColorName` string forms for the new aliases.
- [x] Correct component double return types from `ColorInt` to `number`.
- [x] Recheck `FloatArray` container types for `toHsv`, `toHsva`, and `toHsl`.
- [x] Keep `parseColor`, `equals`, `RGBToHSV`, `colorToHSV`, and `HSVToColor` as legacy/prototype APIs where reachable.
- [x] Keep `ConversionCodes` in place for now after confirming the current Kotlin `colors` augment does not consume it.

Acceptance:

- The declared `colors.*` owned methods match `Colors.selfAssignmentFunctions`.
- Legacy prototype methods are explicitly marked and do not hide newer APIs.
- Color constants match `ColorTable.kt`.
- `Color()` and `new Color()` signatures match the Kotlin `Versatile` behavior.

## Phase 3: Missing Standalone Modules

Status: completed

Note: Phase 1 created first-pass declaration files for these missing modules so runtime entry points resolve. Phase 3 remains open for detailed source audits, option objects, result wrappers, and edge-case overloads.

Create or complete declaration files for modules that are present in runtime but absent from the declaration set.

Modules:

- [x] `aj6-int-converter.d.ts`: `cvt`, `cvt.bytes`, `cvt.bytes.strict`, `cvt.bytes.loose`, byte units/constants.
- [x] `aj6-int-formatter.d.ts`: `fmt`, `fmt.bytes`, `fmt.bytes.strict`, `fmt.bytes.loose`, byte formatting options.
- [x] `aj6-int-sysprops.d.ts`: callable `sysprops`, `get`, `getInt`, `getBoolean`, `getAll`, filters.
- [x] `aj6-int-zip.d.ts`: callable `zip`, `open`, `zipFile`, `zipDir`, `zipFiles`, `unzip`, `ZipNativeObject`.
- [x] `aj6-int-nanoid.d.ts`: callable `nanoid(size?)`.
- [x] `aj6-int-mediainfo.d.ts`: callable `mediainfo(path)`, `read(path)`, media info result object.
- [x] `aj6-int-pinyin4j.d.ts`: callable `pinyin4j`, `of`, `as`, option aliases.
- [x] `aj6-int-jsox.d.ts`: callable `jsox`, `extend`, `extendAll`.
- [x] Keep Canvas constructor declarations in `aj6-int-init.d.ts`; no separate `aj6-int-canvas.d.ts` is needed for this pass.

Acceptance:

- Each file has a Kotlin source pointer.
- Each file is referenced by `index.d.ts`.
- Each global and `$` alias is wired in `aj6-int-init.d.ts` where applicable.
- Callable objects use callable interfaces instead of plain classes.

## Phase 4: Existing Kotlin-Augment Modules

Status: completed

Progress:

- 2026-06-14: `pinyin` reconciled with Kotlin `Pinyin.kt`, `PinyinCore.kt`, `Dict.kt`, and `Util.kt`.
- 2026-06-14: `base64`, `crypto`, `s13n`, `opencc`, and `mime` checked against Kotlin augment sources; callable behavior, source pointers, and missing helpers refreshed.
- 2026-06-14: `http`, `web`, and global `WebSocket` refreshed for Kotlin request builders, async request methods, response body wrappers, and constructor constants.
- 2026-06-14: `images`, `barcode`, `qrcode`, and `ocr` refreshed for Kotlin source pointers, image feature wrappers, matching/object-frame result types, screen capture overloads, barcode `isAll` options, and OCR `rapid` mode.
- 2026-06-14: `notice` refreshed for Kotlin source pointers, callable notification overloads, `builder` getter, partial config reset semantics, and channel API nullability.
- 2026-06-14: `files`, `storages`, `sqlite`, and `tasks` refreshed for Kotlin source pointers, storage native object methods, SQLite callback/cursor wrappers, and task async/callback result semantics.
- 2026-06-14: `media`, `recorder`, and `mediainfo` refreshed for Kotlin/runtime source pointers, recorder callable shortcut return types, media runtime prototype alignment, and MediaInfo stream accessors.

Update existing declarations that still cite old assets modules but now have Kotlin `augment` implementations.

Priority order:

- [x] `pinyin`: reconcile the newer declaration with `Pinyin.kt`, `PinyinCore.kt`, and `Dict.kt`.
- [x] `base64`, `crypto`, `s13n`, `opencc`, `mime`: check callable behavior and option objects.
- [x] `http` and `web`: update request/response wrappers and `WebSocket` constructor behavior.
- [x] `images`, `barcode`, `qrcode`, `ocr`: refresh image wrappers, matching results, object frame, and OCR mode submodules.
- [x] `notice`: update notification channel APIs and getters.
- [x] `files`, `storages`, `sqlite`, `tasks`: refresh persistence and filesystem APIs.
- [x] `media`, `recorder`, `mediainfo`: align media APIs as a group.

Acceptance:

- Source comments no longer point to obsolete assets files for Kotlin modules.
- Function overloads follow argument guards in Kotlin.
- Return types reflect Kotlin/Rhino conversions, not old JavaScript wrappers.

## Phase 5: Automation, Runtime, UI, And Globals

Status: completed

Scope:

- `auto`, `automator`, `RootAutomator`, `selector`
- `events`, `keys`
- `threads`, `timers`, `shell`
- `device`, `sensors`, `shizuku`
- `ui`, `floaty`, `dialogs`, `console`, `toast`
- `global`, `species`, `isNullish`, legacy globals

Progress:

- 2026-06-14: `auto`, `automator`, `RootAutomator`, and `selector` refreshed for Kotlin source pointers, `$selector`, Auto accessibility state/event helpers, global automator overloads, and text input return types.
- 2026-06-14: `events` and `keys` refreshed for Kotlin/runtime source pointers, `events.__asEmitter__` overloads, notification/toast observer methods, EventEmitter helper methods, and current key constant aliases.
- 2026-06-14: `threads`, `timers`, and `shell` refreshed for Kotlin source pointers, thread pools/disposables, global timer helpers, callable shell command arguments, and root shell helper methods.
- 2026-06-14: `device`, `sensors`, and `shizuku` refreshed for Kotlin/runtime source pointers, device orientation/network/pointer helpers, sensor runtime prototype alignment, and Shizuku state/current-task helpers.
- 2026-06-14: `ui`, `floaty`, `dialogs`, `console`, and `toast` refreshed for Kotlin/runtime source pointers, UI system bar helpers, floaty permission/clipboard helpers, dialog build properties, console proxy chaining, and toast parser argument badges.
- 2026-06-15: `global`, `species`, `isNullish`, and legacy globals refreshed for Kotlin source pointers, toast severity aliases, component fetch modes, scale-base helpers, species `JavaClass`, variadic nullish checks, and GlobalClasses proxy coverage.

Required checks:

- [x] Confirm global functions from `globalAssignmentFunctions`, such as selector helpers and timer/thread helpers.
- [x] Confirm `$` aliases and readonly flags.
- [x] Reconcile old asset-style global functions with Kotlin `global` augment implementations.
- [x] Check dynamic/native objects such as thread handles, root automator instances, dialogs, and console proxy behavior.

Acceptance:

- All global functions registered through `globalAssignmentFunctions` are declared.
- Constructors and callable modules are not modeled as plain objects.
- Existing script compatibility helpers remain available unless proven unreachable.

## Phase 6: Java, Android, And Dependency Declarations

Status: completed

Scope:

- `aj6-main-app.d.ts`
- Android framework declarations
- Bundled library declarations
- Plugin and third-party module declarations

Tasks:

- [x] Compare generated Java declarations against the current AutoJs6 build output if a generator is available.
- [x] Refresh external library versions only after confirming local AutoJs6 dependency versions.
- [x] Keep non-augment modules such as `i18n`, `jvm-npm`, observe polyfills, plugins, and custom mods unless a separate audit changes their status.

Generation notes:

- `aj6-main-app.d.ts` is generated from AutoJs6 compile output with `dts-generator.jar`; it is preserved as an IDE-completion source rather than a hand-maintained TypeScript-clean declaration.
- Generated Java declarations are validated as a bundle. Semantic Java shape conflicts may require `skipLibCheck`, but parser failures are not accepted as expected output.
- Regeneration currently also refreshes `declarations/android.d.ts`, `declarations/libraries.d.ts`, and generated resource declarations such as `aj6-resources.d.ts`.
- Syntax validation includes `aj6-main-app.d.ts` together with the generated support files.

Progress:

- 2026-06-15: Confirmed the local `dts-generator.jar` pipeline and current AutoJs6 compile JAR are available; current `aj6-main-app.d.ts` is newer than the local `classes.jar` output and is treated as generated.
- 2026-06-15: Ran a scoped syntax check for generated support declarations excluding `aj6-main-app.d.ts`: `android.d.ts`, `libraries.d.ts`, `aj6-resources.d.ts`, `aj6-gradle-wrapper.d.ts`, `aj6-int-jvm-npm.d.ts`, and `aj6-declarations.d.ts`.
- 2026-07-27: Regenerated declarations were consolidated into `android.d.ts`, `libraries.d.ts`, `aj6-main-app.d.ts`, and `aj6-resources.d.ts`; the canonical declaration entry now passes the compile-only syntax gate with `skipLibCheck`.

Acceptance:

- Java/Kotlin class declarations are not mixed with runtime module declarations unless intentionally exposed globally.
- Dependency version changes are recorded in `CHANGELOG.md` only at release time.
- `aj6-main-app.d.ts` is regenerated, not manually patched for generator syntax issues.

## Phase 7: Verification And Release Preparation

Status: in_progress

Verification:

- [x] Run the chosen TypeScript validation command, excluding `aj6-main-app.d.ts` unless generator fixes are in scope.
- [x] Add smoke samples for key globals: `colors`, `Color`, `Canvas`, `zip`, `sysprops`, `nanoid`, `pinyin4j`, `cvt`, `fmt`, `jsox`.
- [x] Check that `index.d.ts` can be consumed from a fresh project.
- [ ] Check that WebStorm/TypeScript completion sees newly added globals.

Progress:

- 2026-06-15: Added `docs/smoke/key-globals-smoke.ts` covering the key globals listed above.
- 2026-06-15: Ran the smoke validation command with explicit declaration inputs and without `aj6-main-app.d.ts`.
- 2026-06-15: Attempted a fresh TypeScript project under `.test/fresh-index-consumption` that references `declarations/autojs6/index.d.ts`; TypeScript 5.1.3 currently stops on parser errors from generated declarations (`aj6-main-app.d.ts` and generated library shards), so index-level CLI consumption remains blocked by generated artifacts and should be treated as an IDE/manual completion check unless generator output is repaired or a clean CLI bundle is introduced.
- 2026-06-15: Chose `v3.0.0` for the release because the sync spans new modules, existing module contracts, entry points, and regenerated Android/library declarations; updated `package.json`, README version history, and `docs/CHANGELOG.md`.
- 2026-06-15: Verified npm package contents with `npm pack --dry-run --json`; package resolves as `@sm003/autojs6-dts@3.0.0`, includes core declarations and release docs, and excludes internal roadmap/smoke artifacts.
- 2026-07-27: The regenerated bundle removed the previous parser blockers. The canonical `declarations/autojs6/index.d.ts` entry and the latest augment smoke sample now compile together with TypeScript 5.1.3 and `skipLibCheck`.

Validation command:

```shell
cmd /c tsc --noEmit --pretty false --skipLibCheck true --target ES2020 --lib ES2020 declarations/autojs6/index.d.ts docs/smoke/key-globals-smoke.ts docs/smoke/latest-augment-smoke.ts
```

Fresh project probe used during verification; the temporary project directory was removed after the check:

```shell
cmd /c tsc -p .test\fresh-index-consumption --pretty false
```

Release preparation:

- [x] Decide whether this is `v2.2.0` or a larger `v3.0.0` compatibility release.
- [x] Update `package.json` version.
- [x] Add `docs/CHANGELOG.md` release entry.
- [x] Package and verify npm contents.

## Phase 8: AutoJs6 6.8.0 Alpha7 Augment Sync

Status: completed

Source range:

- Audit baseline: `ac47387b8a9245a2ea07adff76cd0f37be0388dd`.
- Augment audit source: `fe4340faee934c7189e5d5d776f67ab7a636b4dd`.
- Generated declaration source: `1d74c57aee7d4f6e300acedee395da6110fc8954`.
- Runtime version: `6.8.0 Alpha7`.

Completed declaration work:

- [x] Audit all 78 runtime augment registrations, 124 top-level mount names, 58 `$` aliases, and 12 nested mounts.
- [x] Add callable `ai` and `tts` modules, including promises, stream/task event emitters, options, status, metadata, and result objects.
- [x] Add `powerManager`, `power_manager`, `settings`, and `workManager` modules with all runtime aliases.
- [x] Refresh task recurrence, countdown, repeat-end, callback, async, timer facade, and WorkManager contracts.
- [x] Refresh app, automation, storage, plugins, web, OCR, image, and global entry-point contracts changed since the audit baseline.
- [x] Correct callable and constructable modeling for plugins, OCR engines, `Numberx`, and `Color`.
- [x] Add `docs/smoke/latest-augment-smoke.ts`.

Verification:

- [x] Compile the canonical declaration entry and both smoke samples.
- [x] Confirm every triple-slash reference resolves to an existing file.
- [x] Verify the npm package contains the new declarations and regenerated resource file.
- [x] Run `git diff --check` and review the final working tree.

Validation results:

- The source scanner found 78 registrations, 136 mount names, 58 `$` aliases, 12 nested mounts, and 0 unresolved registrations.
- The source delta from the generated declaration source to the augment audit source only changes Ace editor declaration groups and does not modify `augment` or `ScriptRuntime` APIs.
- All 120 non-assignment top-level mount names have matching declarations.
- Both smoke samples and the canonical declaration entry compile with TypeScript 5.1.3 and `skipLibCheck`.
- All 148 triple-slash references resolve to existing files.
- `npm pack --dry-run --json` reports 80 package files for `@sm003/autojs6-dts@4.0.0`, including all new modules, the canonical type entry, and `aj6-resources.d.ts`.

Release note:

- This source sync is prepared as `v4.0.0`, named "AutoJs6 6.8.0 Alpha7 声明同步与生成声明整合".
- The major version records the removal of legacy declaration entry points and generated dependency shards. The canonical package entry is `declarations/autojs6/index.d.ts`.

## Per-Module Update Template

For each module, capture:

- Runtime global name and `$` alias.
- Kotlin source files.
- Whether it is callable, constructable, both, or plain object.
- `selfAssignmentFunctions`.
- `globalAssignmentFunctions`.
- `selfAssignmentProperties`.
- `selfAssignmentGetters`.
- Dynamic instance methods/properties.
- Legacy prototype APIs.
- Option object shapes.
- Return types and Rhino conversion behavior.
- Smoke examples.

## Recommended Work Order

1. Phase 1: fix entry points and index references.
2. Phase 2: update `colors` and `Color`, because it is large, widely used, and already partially modernized.
3. Phase 3: add missing standalone modules.
4. Phase 4 and Phase 5: update existing modules in functional groups.
5. Phase 6 and Phase 7: refresh generated declarations, validate, and release.
