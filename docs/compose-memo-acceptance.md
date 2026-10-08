# Compose F6 compose.memo declaration acceptance

Date: 2026-10-08. Package 4.36.0 adds `compose.memo` and `ComposeMemoOptions` to the
committed 4.35.0 source at `de51858b59ec88f75c56d94bcf4af600c54ff34f`. This describes
local development acceptance, not npm publication.

The host implementation is AutoJs6 6.8.0 / 5323, spike branch commit
`1adc2b8639`. `memo(build, deps, options?)` returns the node type produced by `build`.
`deps` is a readonly array of any values; `options.key` accepts a string, a number or
null. The renderer contract, component catalog and JSX projection are unchanged.

TypeScript cannot prove that memo runs inside a render function, that a dependency
array lists every captured value, that it has at most 256 entries, or that keys are
unique within one scope. The host checks these at runtime and reports
`INVALID_ARGUMENT`, `LIMIT_EXCEEDED` or `DUPLICATE_KEY`.

`docs/smoke/compose-smoke.ts` adds keyed list rows, a typed header fragment, a
null-options call and a numeric key, plus five expected errors: a missing dependency
array, a non-array dependency value, a non-node fragment result, a boolean key and an
unknown option.

| Source check | TypeScript 5.1.3 | TypeScript 6.0.3 |
| --- | --- | --- |
| P6 API smoke, strict and exact optional modes, memo cases included | 0 diagnostics | 0 diagnostics |
| F1 / F2 / F3 / F4 TSX corpora, 25 / 31 / 22 / 42 expected errors | Pass | Pass |
| Actual Compose declaration body, skipLibCheck=false | 0 diagnostics | 0 diagnostics |

The normal local `aj6dts -Publish` workflow ran from the clean host commit above,
appDebug/ace profile, Android d.ts Generator 4.0.0 at
`525bebdaa157087b1295d80cef0dae861152eda5`, and published to the isolated Ace
worktree. Resources and libraries are byte-identical to 4.35.0. The main output
selects 494 of 10,845 classes; the five new classes are the host's memo cache types,
reached through the existing exported internal members of the Compose module, in the
same way as the existing node graph and reactive runtime classes. No generated
declaration was selectively removed or rewritten.

| Generated input | Selected classes | SHA-256 |
| --- | ---: | --- |
| Main | 494 / 10,845 | `f0aa0b3b713426ef2b38f306447dc09ba73db8a03dae1d2ef5adbe8d6c598413` |
| Resources | 20 / 20 | `c107a607a964fde7298b100221a4a59fd17881a7bedd6337595dc21d997ac0e9` |
| Libraries | 789 / 27,248 | `1176e09b0b026968534641af306ccdff8131f6ad05b2d36154a5657924a65456` |

Logs are `declarations/.generated/compose-f6-publish.log`, `compose-f6-final-ts.log`
and `compose-f6-final-p6.log` in the ignored generated directory.
