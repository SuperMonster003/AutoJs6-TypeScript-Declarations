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

## Common XML widgets and native properties (2026-10-18)

Host 5563 and the Node 1.9.0/Bun 0.2.8 clients add 12 native widgets: HorizontalScrollView,
Space, RelativeLayout, CardView, Spinner, SeekBar, RatingBar, RadioGroup, RadioButton,
ToggleButton, CheckedTextView and NumberPicker. XML aliases include hscroll/relative/card/
spinner/seekbar/ratingbar/radiogroup/radio/toggle/checkedtext/numberpicker; img and linear
also map to the existing renderer. Child width, height, margins and weight are retained.
Relative rules accept layout_ aliases and refer to unique sibling XML IDs.

Native View handles expose 46 typed property accessors. Reads return Promises; assignments
queue in order per local wrapper. Await a read or flush() to observe completion and deferred
errors. A reported error does not poison later writes. Values are copied at assignment.
dispose() drains writes and still attempts cleanup after an assignment failure. Non-JSON
values reject synchronously. set(patch) remains explicitly awaitable. Native validation
rejects unknown/read-only properties and unsupported widget/property combinations.

The six read-only accessors are attached, layoutWidth, layoutHeight, drawableWidth,
drawableHeight and xmlId. id/type/context remain synchronous identity metadata. Dimensions
write dp by default or explicit px; geometry/inset/card reads return pixels. textSize reads
sp. flush() confirms submission, not a completed Android layout/draw. Cross-thread callers
coordinate shared handles and event consumption. Image src accepts execution-owned image
handles (copied pixels), host/framework drawable resources or null, without implicit file/URL
access. Limits and widget-specific fields are documented in runtimeApis and the declarations.

Ace offers the async property signatures and XML tag/attribute completion inside typed
ui.inflate literal strings. This remains a finite native widget/property contract, not
arbitrary Java reflection or complete Rhino XML expression binding.
The host report docs/dev/runtime-xml-views-2026-10-18.md records actual device and packaged
application validation, including the matched 6.8.0+5563 Runtime Kit.

## WebView, Drawer, Toolbar and ViewPager (2026-10-18)

Host 6.8.0+5564 with Node.js Runtime 1.10.0 / Bun Runtime 0.2.9 adds four native
components through ui.inflate/createView and XML aliases webview/drawer/toolbar/viewpager.
The same handle wrappers run in Node main, CJS/ESM/nested Workers and Bun host.ui.
Native assignments and the 12 component commands share one ordered queue per wrapper.
The property surface now has 58 writable names and 11 read-only async accessors.

WebView supports loadUrl/loadHtml, evaluateJavascript (decoded JSON), goBack/goForward,
reload/stopLoading and native page/title/progress/error events. JavaScript and DOM storage
start disabled; set javaScriptEnabled before evaluation. Loading resolves on submission;
observe pageFinished for completion. Android permissions, network security and WebView
policies apply. There is no injected Java interface, implicit web permission grant or SSL
bypass. The next section documents the portable WebView client and file APIs.
Destroying an execution/root releases WebViews, including offscreen ViewPager pages.

Drawer accepts one content child and at most one start/end panel using layout_gravity;
openDrawer/closeDrawer accept side (start/end, default start) and animate (default true).
Toolbar exposes title/subtitle, navigationIcon/navigationContentDescription and a menu
array of unique id/title entries with optional icon, enabled, visible and showAsAction.
Navigation/menu clicks return JSON events. showOverflowMenu/hideOverflowMenu return
Android's boolean result; the Toolbar is not automatically an Activity ActionBar.

ViewPager owns the fixed child page list, exposes currentItem/offscreenPageLimit/pageCount
and setCurrentItem(index,smoothScroll=true). Indexes are checked. Native selection/scroll
events and lookup of offscreen descendants are supported. Managed XML/handle windows
retain Views and WebView DOM across Activity recreation. Shared handles remain owned by
the whole execution after the creating Worker exits; close borrowing sessions/windows
before disposing a root. Arbitrary Java reflection and Rhino expression binding remain
outside this contract. See runtimeApis and host docs/dev/runtime-view-components-2026-10-18.md.

## WebView downloads, file selection and clients (2026-10-18)

Host 6.8.0+5565, Node.js Runtime 1.11.0 and Bun Runtime 0.2.10 add the same
WebView facade in Node main, CJS/ESM/nested Workers and Bun host.ui. This adds
19 WebViewClient callbacks, 20 WebChromeClient callbacks and onDownloadStart.
setWebViewClient(client, options), setWebChromeClient(client, options) and
setDownloadListener(callback) accept null to remove the corresponding handlers.
Handlers receive typed JSON data; their this value is the local NativeViewHandle.
The declarations enumerate the supported callbacks and request/reply shapes.

Navigation, resource interception and key decisions must be synchronous in Android.
Submit navigationRules, resourceRules and blockedKeyCodes before loading a page.
Rules match url/urlPrefix, optionally method and mainFrame, in order; the first
match wins. A resource response supplies MIME/encoding/status/headers and body or
bodyBase64. shouldOverrideUrlLoading, shouldInterceptRequest and shouldOverrideKeyEvent
are notifications of the applied decision, not JavaScript return-value hooks.
consumeConsoleMessages is a native option; onConsoleMessage is also a notification.
The bridge never cancels navigation merely to replay loadUrl from an async callback.

Dialog, file, HTTP-auth, SSL, client-certificate, safe-browsing, permission,
geolocation, visited-history and popup requests support Promise-returning handlers.
Unknown, failed, expired and replaced requests cancel or deny by default. Handler
timeouts default to 15 seconds, or 120 seconds for onShowFileChooser; callbackTimeoutMs
accepts 100..2147483647 from host 5567. SSL proceeds only on an explicit 'proceed' reply. Android camera,
microphone and location permissions are still required for an allowed web request.
onCreateWindow may return a new, empty, execution-owned WebView or null; close its
borrowed window before disposing it. Fullscreen uses a private Activity, can be
disabled with fullscreen:false, and can be closed with exitFullscreen().

Without custom handlers, attached WebViews show native JavaScript dialogs and the
system document picker. chooseFiles({acceptTypes, multiple, initialUri}) returns
Promise<string[] | null>; cancelFileChooser() cancels the current selection.
Only readable content URIs from other providers are accepted. The SDK retains new
persistable read grants until View disposal and preserves pre-existing user grants.
Temporary grants from custom handlers keep their Android-defined lifetime.
Open/multiple selection is available from host 5565; camera/save/directory modes
are added by the next section. Arbitrary filesystem paths are not accepted.

setDownloadListener receives URL, agent, disposition, MIME, length and Android's
suggested filename. download(options) explicitly enqueues an HTTP(S) DownloadManager
job in public Downloads and returns {id,url,fileName}; no listener auto-downloads.
getDownload(id) returns its state or null. readDownload(id,offset=0,length=32768)
returns Uint8Array, up to 32768 bytes per read. cancelDownload removes the job/file.
Jobs survive WebView closure. Packaged projects must retain android.permission.INTERNET
in their Android permissions array for network pages/downloads; runtime-plugin
permissions do not replace the packaged app permission. Cookies are included only with includeCookies:true;
custom headers are optional. blob:/data: transfers are added by the next section.

evaluateJavascript(source,{timeoutMs}) now submits an asynchronous native task;
its result does not hold a Bun RPC open while a person answers a dialog. timeoutMs
defaults to 30000 and accepts 100..120000. Callback handlers can read the View or
open chooseFiles without blocking behind the pending evaluation. Android's JSON
result semantics remain unchanged; webpage Promises are not automatically awaited.
The Node project execution budget is independent: interactive project.json files
should explicitly set node.timeoutMs, e.g. 120000, alongside node.permissions:["ui"].
A WebView evaluation/callback timeout does not extend that project-wide budget.

Window/session closure cancels pending native UI requests. View disposal additionally
releases file grants. Worker exit clears only its own client registrations and tasks;
it cannot erase a newer client installed by another thread. A shared View still has
one event-queue reader, so transfer ownership of event consumption explicitly.
Callbacks returning raw Java objects/Bitmaps/Views, obsolete database/quota hooks and
arbitrary Java WebViewClient subclassing remain outside this portable contract.
Ace exposes typed callback names, event fields and Promise results under default
runtime settings. No JSOX prototype extension is required.

## WebView camera, SAF and page downloads (2026-10-18)

Host 6.8.0+5566, Node 1.12.0 and Bun 0.2.11 extend the same main/Worker WebView
facades. chooseFiles accepts mode open/multiple/directory/save or Android values
0/1/2/3. Save creates a new document with fileName; directory returns one tree URI.
writable defaults to true for directory/save and can be disabled for directory.
initialUri is a provider-dependent location hint. Android's restricted directory
rules remain in force. A page's native folder/save requests depend on its WebView
version; explicit chooseFiles uses SAF independently of the page API version.

captureEnabled prefers a full-size system camera image for image acceptTypes.
Host 5567 adds video/audio capture as described below. The image camera receives an output
content URI for a new temporary JPEG, not a thumbnail request. An app declaring
CAMERA must grant that permission; an undeclared delegated camera intent follows
Android's normal rules. Denial/cancellation returns null. The captured file stays
valid until its selected View and active transfers release it. It is not implicitly
published to the gallery. Only these registered capture URIs are admitted from the
app's private provider. Existing user document grants remain intact.

readDocument(uri,offset=0,length=32768) returns Promise<Uint8Array> for a readable
granted document or retained camera result. Reads return up to the requested count;
continue by the actual count until an empty result. Save/tree choices request the
needed read/write grants, which are reference counted with active transfers.

download now also accepts data:, same-page blob: and readable content: URLs.
HTTP(S) with the default destination continues to use DownloadManager. Other
sources, or destinationUri/directoryUri targets, use native staged transfers.
Blob bytes are pulled from the originating JavaScript-enabled WebView in at most
32 KiB chunks with backpressure and no addJavascriptInterface. data URLs preserve
percent-encoded binary bytes, literal plus signs and base64. Large inline data URLs
still obey the runtime request-size limit; use page blob URLs for large data.

destinationUri must be an empty writable document, normally obtained from save
mode. directoryUri creates a new child with fileName. They are mutually exclusive.
Existing contents are rejected and remain unchanged. cancelDownload removes a
running job and incomplete output; a completed explicitly selected SAF document
is user-owned and preserved. managed:false in the local job state describes this
behavior. Completed default Downloads output is managed and removed on cancellation.
SAF reads after View disposal still require a valid Android grant.

Download IDs are opaque: numeric IDs for DownloadManager, web: UUID strings for
native transfers. Pass the returned ID to getDownload/readDownload/cancelDownload.
Local failed states include error; reason remains numeric. Local/page/SAF timeoutMs
defaults to 120000 and accepts 100..2147483647. A source-page navigation/closure
cancels unfinished blob reads. Completed default downloads survive View disposal.
Local transfers do not resume after process termination; interrupted records are
reported as failed. The Node project execution budget is still independent.

Workers use the same APIs and structured-cloned IDs/bytes. Native transfers do not
depend on the creating JavaScript thread remaining alive, but unfinished blobs
still require their source page. A Worker-owned window closes on Worker exit.
Video/audio capture is described below. Arbitrary filesystem access and exhaustive
cloud-provider compatibility are not implied by these additions. See runtimeApis and the host
report docs/dev/runtime-webview-files-2026-10-18.md for accepted device evidence.

Bun projects can set bun.timeoutMs in project.json (default 60000 ms, clamped to 1..600000 ms). Explicit bun.timeoutMillis execution arguments take precedence. This also applies to packaged applications; a WebView wait or download timeout does not extend the whole execution budget.

## WebView video and audio capture (host 5567)

The paired Node 1.13.0/Bun 0.2.12 declarations extend chooseFiles for main-thread
and Worker callers. With captureEnabled:true, a single image/video/audio MIME
family selects its capture flow. captureKind:'image'|'video'|'audio' can select
one family explicitly for mixed or wildcard acceptTypes. Save/tree modes still
use SAF. Returned URI arrays/null and readDocument/download remain unchanged.

Video uses Android ACTION_VIDEO_CAPTURE with a private output URI. videoQuality
is 0 (low) or 1 (high); durationLimitSeconds (1..2147483) and sizeLimitBytes
(positive safe integer) are camera hints, not a promise that every camera honors
them. If a camera returns a separate readable content URI, its media is copied
into the temporary capture; the external application's original is not deleted.

Audio uses an explicit foreground recorder with Start, Stop, Use and Cancel
controls, and AAC in M4A (audio/mp4, 48 kHz mono). acceptTypes does not select a different audio codec. It does not depend on an installed
RECORD_SOUND intent handler. RECORD_AUDIO must be declared in a packaged project's
Android permissions and granted by the user. The microphone opens only after
Start; leaving the foreground stops recording, while rotation reattaches its UI.
Duration/size limits stop the audio recorder, allowing the user to confirm the
result; container/frame overhead can exceed the requested byte limit slightly.

chooseFiles.timeoutMs is 100..2147483647 ms, default 120000. For HTML file inputs,
WebChromeClientOptions.callbackTimeoutMs controls the chooser callback and default
picker wait; e.timeoutMs carries that value into this.chooseFiles(e). The callback
range now also reaches 2147483647. The overall Node/Bun execution deadline still
applies independently. Nothing records automatically or continues as a hidden
background audio service. Cancellation, navigation, window/Worker shutdown and
View disposal close the capture and release owned temporary files. Confirmed
files remain available while the View or a copying download holds them.


Bun Runtime 0.4.0 / host 5579: host.files exposes the 15 usable Node file functions, with asynchronous host I/O and synchronous POSIX name helpers. files.control and storage.control are separate default-off grants. host.storage/host.storages reproduce the Node facade, including Promise-returning Sync aliases, and share its package/working-directory persistence backend. Host files persist independently of the Bun workspace snapshot. JSON/base64 transport budgets, Android file permissions and existing Node storage-name normalization still apply. Details: docs/host-api.md; validation: host docs/dev/bun-storage-2026-10-19.md.


## Host databases and Worker facades (2026-10-19)

Host 5580, Node Runtime 1.16.0 and Bun Runtime 0.5.0 share the public database/sqlite factory. Bun uses a separate default-off database.control grant; Node main/CJS/ESM/nested Workers use database/sqlite and their autojs6: aliases. Object open options preserve timeoutMs/signal and reject missing names. Typed query parameters preserve NULL/numbers, multirow INSERT reports its actual count, and owner-thread cleanup rolls back unfinished manual transactions. Worker exit and unclaimed cancelled Bun opens release their handles. Host scope/SQL budgets remain separate from native node:sqlite and Bun SQLite. Verification: host docs/dev/bun-database-2026-10-19.md.


## Sensors in Bun and Node Workers (2026-10-19)

Host 5581, Node Runtime 1.17.0 and Bun Runtime 0.6.0 share sensors.getAvailableSensors/once/subscribe and subscription lifecycle. Bun uses the default-off sensors.control grant; Node uses sensors, including autojs6:sensors in CommonJS/ESM/nested Workers. Only actual accelerometer/gyroscope/light hardware is exposed. Sampling intervals are hints. once uses a temporary subscription and counts toward the shared four-subscription limit. Abort, timeout, Worker termination and abandoned registration clean up listeners. Main threads preserve pushed events; Workers and Bun poll bounded queues. Bun retains its 1024-call execution budget, so continuous polling is not an unlimited streaming channel. See host docs/dev/bun-sensors-2026-10-19.md for device and packaged verification.


## Host Shell streams and Shizuku (2026-10-19)

Host 5583, Node Runtime 1.18.0 and Bun Runtime 0.7.0 share shell/shizuku facades in main threads and CJS/ESM/nested Workers. Bun adds independent shell.control/shell.root/shell.shizuku grants. Native streams, line readers, stdin, PTY, explicit Shizuku permission requests and cancellation use execution-owned processes. checkAccess remains a synchronous grant report; getAccess queries Android state. Host paths follow Android permissions. Worker exit, abandoned creation and Bun quota exhaustion release owned shells. Bun retains its bounded transport budget. See host docs/dev/runtime-shell-2026-10-19.md for real-device/package evidence and limitations.


## Host events and notifications (2026-10-19)

Host 5584, Node Runtime 1.19.0 and Bun Runtime 0.8.0 share event and notification facades across main threads and CJS/ESM/nested Workers. Bun has six independent default-off grants. Observers use immutable snapshots, lifecycle cancellation and bounded queues with overflow reports; notification IDs are scoped to their execution and client. Worker exit and late creation cleanup preserve parent resources. Native Node events remains EventEmitter. Android accessibility, notification-listener access and posting permission are separate prerequisites; Bun retains its existing bounded transport budget. Validation is recorded in host docs/dev/runtime-events-2026-10-19.md.
