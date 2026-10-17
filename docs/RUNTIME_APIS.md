# Runtime API declarations

Choose one AutoJs6 execution environment for each TypeScript project. The package's default
entry remains `declarations/autojs6/index.d.ts` for Rhino. The new optional entries are:

| Runtime | Entry |
| --- | --- |
| Node.js Runtime plugin | `declarations/autojs6-node/index.d.ts` |
| Bun Runtime host client | `declarations/autojs6-bun/index.d.ts` |

The Node declarations are copied from the runtime plugin's `docs/nodejs/types/autojs6-node`.
The Bun declaration is copied from its `host-client.d.mts`, with a type-only ambient alias.
The source files and SHA-256 digests are recorded in `declarations/runtime-declarations.json`.
They describe host APIs, not all native Node or Bun standard libraries. Use the matching
native runtime types as well when a project needs them.

For a Node project installed through npm, a `tsconfig.json` can select the runtime entry:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "typeRoots": [
      "./node_modules/@sm003/autojs6-dts/declarations",
      "./node_modules/@types"
    ],
    "types": ["autojs6-node", "node"]
  },
  "include": ["src/**/*"]
}
```

Do not include every `declarations/**/*.d.ts` in one project. In particular, mixing Rhino,
Node and Bun entry points can invent unavailable globals and conflicting signatures. The
provided Rhino `jsconfig.json` explicitly selects `autojs6` and excludes local runtime copies.
Editors that index every declaration directory need equivalent exclusions.

Node examples use real module imports:

```typescript
import pinyin from 'pinyin';
import screen from 'screen_metrics';
import console from 'console';

const text: string = await pinyin.simple('北京上海');
const x: number = await screen.cX(360, 720);
await console.show();
```

The SDK path in Bun is supplied by the plugin. The ambient name is for types only and is
not a runtime-resolvable package:

```typescript
const sdk: typeof import('autojs6:bun-host') =
    await import(process.env.AUTOJS6_HOST_CLIENT_MODULE!);
const host = await sdk.createHostClient();
const text: string = await host.pinyin.simple('北京上海');
const x: number = await host.coordinates.cX(360, 720);
```

In JavaScript, put `/** @type {typeof import('autojs6:bun-host')} */` immediately before
the `sdk` variable declaration. Ace recognizes this annotation without injecting Rhino APIs.

Pinyin and window controls are asynchronous. Do not treat them as strings or chain them as
synchronous console objects. Coordinate methods query the current screen on each call; custom
bases are scoped to the execution. Rhino JSOX global/prototype opt-ins do not apply to Node/Bun.

OpenCC exposes a callable converter, `convert` and all 32 named conversions as
`Promise<string>` in both runtimes. Use `autojs6:opencc` in Node to avoid an installed
npm package shadowing the bare module name. Bun uses `host.opencc` and the `text.opencc` grant.

Images use execution-owned handles. `pixel` returns signed ARGB32 and `readPixels`
returns `{data, width, height}`. Node byte APIs use Buffer/PFD transport, including raw
RGBA output; Bun uses encoded bytes through Base64 JSON, with 64 KiB request and 256 KiB
response limits. Bun pixel regions are limited to 16,384 pixels. Both runtimes reject
color searches exceeding 4,096 results. Bun `image.files` is opt-in and separate from
`image.process`. Bun screenshot methods require the separate opt-in `screen.capture` grant
and Android consent. `requestScreenCapture`/`stopScreenCapture` return Promise<boolean>,
and `captureScreen` returns a Promise<ImageHandle>. Generated runtime declarations keep
these differences visible instead of advertising the full Rhino image surface.

Node Workers expose OpenCC and image modules with the same declarations as the main
thread, including canonical `autojs6:image` and `autojs6:images` aliases. Asynchronous
operations execute through the parent; bytes are copied into Worker-owned Buffers.
Image handles belong to the execution and may be passed between threads. Recycle
bookkeeping is local to each thread, so coordinate shared-handle cleanup explicitly.
`cX()` and `cY()` have explicit zero-argument overloads. Passing `undefined` as the first
argument is rejected; numeric strings are accepted as coordinate values. Omitting a later
base argument with `undefined` remains valid when supplying the explicit ratio mode.

Update the copies from sibling source checkouts and optionally synchronize Ace:

```shell
node tools/sync-runtime-declarations.mjs --ace ../AutoJs6-Plugin-Ace-Editor
node tools/sync-runtime-declarations.mjs --ace ../AutoJs6-Plugin-Ace-Editor --check
node tools/verify-runtime-declarations.mjs
```

`--node` and `--bun` override source checkout locations. `--check` is read-only. Synchronization
does not publish an npm package or install a plugin. The tests check both declaration bodies,
public-index reachability, asynchronous types, isolation from Rhino globals and copied hashes.

Workers additionally expose pinyin/pinyin4j, console and screen_metrics with canonical
autojs6: aliases. Pinyin constants and callable conversion results retain their types,
including the result array's asynchronous compact(). Coordinate bases belong to the
whole execution. Worker console output remains native; host controls are asynchronous.

Bun host.screenRecorder start/stop/cancel/getStatus requires screen.record and
screen.capture plus actual Android consent. It encodes H.264 MP4 to host paths,
with fixed dimensions per recording, and supports screenshots while recording.
Only explicit successful stop publishes the file. Existing files are not replaced;
exit, cancellation and projection revocation discard partial recordings. Results
include typed size/duration/dimensions, audio/audioSource and nullable AAC metadata; idle stop returns null.

The optional audio source is none (also false), microphone, playback or mixed.
Audio is AAC-LC, 48 kHz mono at 128 kbit/s. Microphone and playback have independent
opt-in grants, and both require Android RECORD_AUDIO. The microphone also needs
the platform foreground-service prerequisites. Playback capture respects source
policy. An audio track can contain silence when the platform blocks its source;
audio:true is not a claim that the input was audible. Parallel screenshots retain
capture-session dimensions while video resolution stays fixed.

## Native View interop and packaged applications (2026-10-18)

Host build 5562, Node 1.8.0 and Bun 0.2.7 add ui.context/inflate/createView/findView/view,
native handle get/set/findView/dispose/on/once/off, AndroidView and compose.attach.
XML strings use the supported layout widgets plus a Compose container. Java objects,
arbitrary Android classes and Rhino E4X syntax are not transported. Context factories
run in JavaScript and return a native token asynchronously, not a Java Context.

View handles belong to the execution; only roots can be disposed. Children are aliases.
Compose borrows Views, rejects duplicate/parented/foreign/disposed handles and cycles,
and releases claims on close. Dispose borrowing sessions before their View roots.
Closing/disposal of a container closes its composition, even before it is displayed.
Rotation retains native identity and reconnects lifecycle owners. A successful attach
replaces the previous composition in that container; close it first to reuse its View.
Worker structuredClone transports the identity; ui.view restores local methods.
Only one thread may drain a View event queue. Worker exit closes its sessions but
delivered View handles remain execution-owned. Undelivered creations are disposed.

XML showLayout owns its inflated root. showLayout(handle) borrows the caller's root.
AndroidView factories cache by component identity; new component objects create new
Views, so use an existing handle or memo for stable identity. Factory context exposes
inflate/createView returning raw tokens, which ui.view may wrap. All effects are Promises.

Packaged apps use installed external runtime/Compose plugins and a matching APK Builder
Runtime Kit. Application versionCode 1 is independent from runtimeVersionCode 5562.
Node declares node.permissions:["ui"]. Bun declares bun.hostCapabilities explicitly,
e.g. ["ui.layout","ui.compose"], in project.json; omitted capabilities are not offered.
AndroidView factories and XML attachments need both Bun grants. Bundle host-client.mjs
with the Bun project and import it relatively. The packaged Bun entry uses a separate
normal-permission service; host-only services retain their signature permission, and
execution/cancellation keys include the calling UID. Runtime scripts remain trusted
code under the plugin UID. No native Bun payload or AIDL transaction changed.
