declare module "ui" {
  namespace ui {
    export type XmlTagName = "vertical" | "horizontal" | "frame" | "compose" | "text" | "button" | "input" | "img" | "image" | "scroll" | "list" | "switch" | "checkbox" | "progressbar" | "tabs" | "tab" | "linear" | "hscroll" | "space" | "relative" | "card" | "spinner" | "seekbar" | "ratingbar" | "radiogroup" | "radio" | "toggle" | "checkedtext" | "numberpicker" | "webview" | "drawer" | "toolbar" | "viewpager";
    export type XmlAttributeName = "text" | "hint" | "textSize" | "textColor" | "textStyle" | "singleLine" | "maxLines" | "inputType" | "checked" | "enabled" | "visible" | "visibility" | "alpha" | "contentDescription" | "clickable" | "focusable" | "width" | "height" | "padding" | "margin" | "backgroundColor" | "gravity" | "layoutGravity" | "weight" | "orientation" | "min" | "max" | "progress" | "indeterminate" | "rating" | "numStars" | "stepSize" | "isIndicator" | "items" | "selectedIndex" | "checkedId" | "textOn" | "textOff" | "value" | "wrapSelectorWheel" | "displayedValues" | "cardCornerRadius" | "cardElevation" | "src" | "scaleType" | "adjustViewBounds" | "id" | "w" | "h" | "bg" | "entries" | "checkedButton" | "layout_width" | "layout_height" | "layout_weight" | "layout_gravity" | "layout_margin" | "below" | "above" | "toLeftOf" | "toRightOf" | "toStartOf" | "toEndOf" | "alignTop" | "alignBottom" | "alignStart" | "alignEnd" | "alignParentTop" | "alignParentBottom" | "alignParentStart" | "alignParentEnd" | "centerInParent" | "centerHorizontal" | "centerVertical" | "url" | "html" | "javaScriptEnabled" | "domStorageEnabled" | "title" | "subtitle" | "navigationIcon" | "navigationContentDescription" | "menu" | "drawerLockMode" | "currentItem" | "offscreenPageLimit";

    export type LayoutType =
      | "WebView" | "Drawer" | "DrawerLayout" | "Toolbar" | "ViewPager" | "webview" | "drawer" | "toolbar" | "viewpager"
      | "HorizontalScrollView" | "Space" | "RelativeLayout" | "Card" | "Spinner" | "SeekBar" | "RatingBar" | "RadioGroup" | "RadioButton" | "ToggleButton" | "CheckedTextView" | "NumberPicker" | "vertical" | "horizontal" | "frame" | "compose" | "text" | "button" | "input" | "img" | "image" | "scroll" | "list" | "switch" | "checkbox" | "progressbar" | "tabs" | "tab" | "linear" | "hscroll" | "space" | "relative" | "card" | "spinner" | "seekbar" | "ratingbar" | "radiogroup" | "radio" | "toggle" | "checkedtext" | "numberpicker"
      | "Text" | "Button" | "Input" | "Image" | "ScrollView" | "List" | "Switch" | "Checkbox" | "CheckBox" | "Progress" | "ProgressBar" | "Tabs" | "Tab"
      | "Frame" | "FrameLayout" | "Compose" | "TextView" | "EditText"
      | "LinearLayout" | "Vertical" | "Horizontal" | "Column" | "Row"
      | "text" | "button" | "input" | "image" | "scrollView" | "list" | "switch" | "checkbox" | "checkBox" | "progress" | "progressBar" | "tabs" | "tab"
      | "linearLayout" | "vertical" | "horizontal" | "column" | "row";

    export interface Binding<T extends AutoJs6Node.JsonValue = AutoJs6Node.JsonValue> {
      readonly __autojs6UiBinding?: string;
    }

    export type BindableValue<T extends AutoJs6Node.JsonValue = AutoJs6Node.JsonValue> = T | Binding<T>;

    export interface UiState<T extends Record<string, AutoJs6Node.JsonValue> = Record<string, AutoJs6Node.JsonValue>> {
      get<K extends keyof T & string>(key: K): T[K] | undefined;
      set<K extends keyof T & string>(key: K, value: T[K]): this;
      update(values: Partial<T>): this;
      snapshot(): Readonly<T>;
      subscribe(callback: (event: { readonly keys: readonly string[]; readonly snapshot: Readonly<T> }) => void): () => void;
    }

    export interface LayoutNode {
      readonly type: LayoutType | string;
      readonly id?: string;
      readonly text?: BindableValue<string>;
      readonly hint?: BindableValue<string>;
      readonly value?: BindableValue;
      readonly checked?: BindableValue<boolean>;
      readonly enabled?: BindableValue<boolean>;
      readonly progress?: BindableValue<number>;
      readonly max?: BindableValue<number>;
      readonly selectedIndex?: BindableValue<number>;
      readonly items?: readonly AutoJs6Node.JsonValue[];
      readonly tabs?: readonly LayoutNode[];
      readonly content?: LayoutNode;
      readonly children?: readonly LayoutNode[];
      readonly [key: string]: AutoJs6Node.JsonValue | Binding | readonly AutoJs6Node.JsonValue[] | readonly LayoutNode[] | LayoutNode | undefined;
    }

    export type LayoutDescriptor = LayoutNode;

    export interface LayoutPatch {
      readonly id?: string;
      readonly [key: string]: AutoJs6Node.JsonValue | undefined;
    }

    export interface UiShowOptions extends AutoJs6Node.BridgeCallOptions {
      drainIntervalMs?: number;
    }

    export interface UiEventOptions extends AutoJs6Node.BridgeCallOptions {
      drainIntervalMs?: number;
    }

    export interface UiEvent {
      readonly type: string;
      readonly id?: string;
      readonly value?: AutoJs6Node.JsonValue;
      readonly text?: string;
      readonly checked?: boolean;
      readonly index?: number;
      readonly selectedIndex?: number;
      readonly tabId?: string;
      readonly handleId?: string;
      readonly progress?: number;
      readonly rating?: number;
      readonly fromUser?: boolean;
      readonly checkedId?: string | null;
      readonly oldValue?: number;
      readonly message?: string;
      readonly url?: string; readonly title?: string; readonly mainFrame?: boolean;
      readonly errorCode?: number; readonly statusCode?: number; readonly didCrash?: boolean;
      readonly itemId?: string; readonly drawerId?: string | null; readonly side?: 'start' | 'end';
      readonly position?: number; readonly pageId?: string | null; readonly offset?: number; readonly offsetPixels?: number; readonly state?: number;
      readonly [key: string]: AutoJs6Node.JsonValue | undefined;
    }

    export interface UiHandle {
      readonly closed: boolean;
      readonly subscriptionId?: string;
      readonly id: string;
      on(event: string, callback: (event: UiEvent) => void, options?: UiEventOptions): () => void;
      once(event: string, callback: (event: UiEvent) => void, options?: UiEventOptions): () => void;
      off(event: string, callback: (event: UiEvent) => void): void;
      update(patch: LayoutPatch, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      batchUpdate(patches: readonly LayoutPatch[], options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      close(options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
    }

    /** Serializable identity. Rehydrate a structured-cloned token with ui.view(). */
    export interface NativeViewToken { readonly __autojs6ViewHandle: string }
    export interface UiContextToken {
      readonly __autojs6UiContext: string;
      readonly density: number; readonly scaledDensity: number;
      readonly packageName: string; readonly runtimeVersionCode: number; readonly applicationVersionCode: number;
    }
    export interface UiContext extends UiContextToken {
      inflate(layout: string | LayoutDescriptor): Promise<NativeViewHandle>;
      createView(type: LayoutType | (string & {}), props?: NativeViewCreateOptions): Promise<NativeViewHandle>;
    }
    /** Layout values default to dp; native geometry and inset snapshots are physical pixels. */
    export type NativeDimension = number | `${number}dp` | `${number}px` | '*' | 'match_parent' | 'wrap_content' | 'auto';
    export type NativeInsets = NativeDimension | readonly [NativeDimension, NativeDimension] | readonly [NativeDimension, NativeDimension, NativeDimension, NativeDimension];
    export type NativeImageSource = {readonly __autojs6ImageHandle: string} | `@drawable/${string}` | `@android:drawable/${string}`;
    export type NativeDrawable = `@drawable/${string}` | `@android:drawable/${string}`;
    export interface ToolbarMenuItem {
      readonly id: string; readonly title: string; readonly icon?: NativeDrawable;
      readonly showAsAction?: 'never' | 'ifRoom' | 'always'; readonly enabled?: boolean; readonly visible?: boolean;
    }
    /** Widget-specific attributes reject unsupported widgets at runtime. */
    export interface NativeViewPatch {
      text?: string;
      hint?: string;
      textSize?: number | `${number}sp` | `${number}px`;
      textColor?: string | number;
      textStyle?: 'normal' | 'bold' | 'italic' | 'bold|italic';
      singleLine?: boolean;
      maxLines?: number;
      inputType?: number | 'text' | 'textPassword' | 'number' | 'numberDecimal' | 'phone' | 'textEmailAddress';
      checked?: boolean;
      enabled?: boolean;
      visible?: boolean;
      visibility?: 'visible' | 'invisible' | 'gone';
      alpha?: number;
      contentDescription?: string | null;
      clickable?: boolean;
      focusable?: boolean;
      width?: NativeDimension;
      height?: NativeDimension;
      padding?: NativeInsets;
      margin?: NativeInsets;
      backgroundColor?: number | string;
      gravity?: number | string;
      layoutGravity?: number | string;
      weight?: number;
      orientation?: 'horizontal' | 'vertical';
      min?: number;
      max?: number;
      progress?: number;
      indeterminate?: boolean;
      rating?: number;
      numStars?: number;
      stepSize?: number;
      isIndicator?: boolean;
      items?: readonly AutoJs6Node.JsonValue[] | string;
      selectedIndex?: number;
      checkedId?: string | null;
      textOn?: string;
      textOff?: string;
      value?: AutoJs6Node.JsonValue;
      wrapSelectorWheel?: boolean;
      displayedValues?: readonly string[] | null;
      cardCornerRadius?: NativeDimension;
      cardElevation?: NativeDimension;
      src?: NativeImageSource | null;
      scaleType?: 'matrix' | 'fitXY' | 'fitStart' | 'fitCenter' | 'fitEnd' | 'center' | 'centerCrop' | 'centerInside' | 'MATRIX' | 'FIT_XY' | 'FIT_START' | 'FIT_CENTER' | 'FIT_END' | 'CENTER' | 'CENTER_CROP' | 'CENTER_INSIDE';
      adjustViewBounds?: boolean;
      url?: string;
      html?: string;
      javaScriptEnabled?: boolean;
      domStorageEnabled?: boolean;
      title?: string;
      subtitle?: string;
      navigationIcon?: NativeDrawable | null;
      navigationContentDescription?: string;
      menu?: readonly ToolbarMenuItem[];
      drawerLockMode?: 'unlocked' | 'lockedClosed' | 'lockedOpen';
      currentItem?: number;
      offscreenPageLimit?: number;
    }

    /** Child trees are accepted during creation; set() only changes scalar/component properties. */
    export interface NativeViewCreateOptions extends NativeViewPatch {
      id?: string;
      children?: readonly LayoutDescriptor[];
      tabs?: readonly LayoutDescriptor[];
      content?: LayoutDescriptor;
    }

    export interface NativeViewSnapshot {
      readonly id: string | null; readonly type: string; readonly width: number; readonly height: number;
      readonly enabled: boolean; readonly visible: boolean; readonly attached: boolean;
      readonly contentDescription: string | null; readonly text?: string; readonly checked?: boolean;
      readonly hint?: string;
      readonly textSize?: number;
      readonly textColor?: number;
      readonly textStyle?: 'normal' | 'bold' | 'italic' | 'bold|italic';
      readonly singleLine?: boolean;
      readonly maxLines?: number;
      readonly inputType?: number;
      readonly visibility?: 'visible' | 'invisible' | 'gone';
      readonly alpha?: number;
      readonly clickable?: boolean;
      readonly focusable?: boolean;
      readonly padding?: readonly [number, number, number, number];
      readonly margin?: readonly [number, number, number, number];
      readonly backgroundColor?: number | null;
      readonly gravity?: number;
      readonly layoutGravity?: number;
      readonly weight?: number;
      readonly orientation?: 'horizontal' | 'vertical';
      readonly min?: number;
      readonly max?: number;
      readonly progress?: number;
      readonly indeterminate?: boolean;
      readonly rating?: number;
      readonly numStars?: number;
      readonly stepSize?: number;
      readonly isIndicator?: boolean;
      readonly items?: readonly AutoJs6Node.JsonValue[];
      readonly selectedIndex?: number;
      readonly checkedId?: string | null;
      readonly textOn?: string;
      readonly textOff?: string;
      readonly value?: AutoJs6Node.JsonValue;
      readonly wrapSelectorWheel?: boolean;
      readonly displayedValues?: readonly string[] | null;
      readonly cardCornerRadius?: number;
      readonly cardElevation?: number;
      readonly src?: NativeImageSource | null;
      readonly scaleType?: string;
      readonly adjustViewBounds?: boolean;
      readonly layoutWidth?: number;
      readonly layoutHeight?: number;
      readonly drawableWidth?: number;
      readonly drawableHeight?: number;
      readonly url?: string | null;
      readonly html?: string | null;
      readonly javaScriptEnabled?: boolean;
      readonly domStorageEnabled?: boolean;
      readonly title?: string | null;
      readonly subtitle?: string;
      readonly navigationIcon?: NativeDrawable | null;
      readonly navigationContentDescription?: string;
      readonly menu?: readonly ToolbarMenuItem[];
      readonly drawerLockMode?: 'unlocked' | 'lockedClosed' | 'lockedOpen';
      readonly currentItem?: number;
      readonly offscreenPageLimit?: number;
      readonly canGoBack?: boolean;
      readonly canGoForward?: boolean;
      readonly drawerOpenStart?: boolean;
      readonly drawerOpenEnd?: boolean;
      readonly pageCount?: number;
    }
    export type WebCallback<T, R = void> = (this: NativeViewHandle, event: Readonly<T>) => R | Promise<R>;
    export interface WebPageEvent { url: string | null; title?: string | null; message?: string | null }
    export interface WebRequest {
      url: string; method: string; mainFrame: boolean; hasGesture: boolean; redirect: boolean;
      headers: Readonly<Record<string, string>>;
    }
    export type WebRequestMatch = ({url: string; urlPrefix?: string} | {url?: string; urlPrefix: string}) & {method?: string; mainFrame?: boolean};
    export type WebNavigationRule = WebRequestMatch & {action: 'allow' | 'block'};
    export interface WebResourceResponse {
      mimeType?: string; encoding?: string; statusCode?: number; reasonPhrase?: string;
      headers?: Readonly<Record<string, string>>;
      /** Use body or bodyBase64, not both. Rules are published before requests run. */
      body?: string; bodyBase64?: string;
    }
    export type WebResourceRule = WebRequestMatch & {response: WebResourceResponse};
    /** Native evaluation deadline, 100..120000 ms; default 30000. Result delivery uses short event reads. */
    export interface WebEvaluationOptions { timeoutMs?: number }
    export interface WebViewClientOptions {
      callbackTimeoutMs?: number;
      navigationRules?: readonly WebNavigationRule[];
      resourceRules?: readonly WebResourceRule[];
      blockedKeyCodes?: readonly number[];
    }
    export interface WebViewClient {
      onPageStarted?: WebCallback<WebPageEvent>;
      onPageFinished?: WebCallback<WebPageEvent>;
      onPageCommitVisible?: WebCallback<WebPageEvent>;
      onLoadResource?: WebCallback<WebPageEvent>;
      doUpdateVisitedHistory?: WebCallback<WebPageEvent & {reload: boolean}>;
      onScaleChanged?: WebCallback<{oldScale: number; newScale: number}>;
      onReceivedError?: WebCallback<WebRequest & {errorCode: number; message: string}>;
      onReceivedHttpError?: WebCallback<WebRequest & {statusCode: number; reasonPhrase: string; mimeType: string; responseHeaders: Readonly<Record<string,string>>}>;
      onReceivedLoginRequest?: WebCallback<{realm?: string; account?: string; args?: string}>;
      /** Notification of the decision from navigationRules; returning a decision is rejected. */
      shouldOverrideUrlLoading?: WebCallback<WebRequest & {blocked: boolean}>;
      /** Notification of resourceRules; returning a resource from this callback is rejected. */
      shouldInterceptRequest?: WebCallback<WebRequest & {intercepted: boolean}>;
      /** Notification of blockedKeyCodes; Android's main thread never waits for a script response. */
      shouldOverrideKeyEvent?: WebCallback<{keyCode: number; action: number; blocked: boolean}>;
      onUnhandledKeyEvent?: WebCallback<{keyCode: number; action: number}>;
      onFormResubmission?: WebCallback<WebPageEvent, boolean | null>;
      onReceivedHttpAuthRequest?: WebCallback<{host: string; realm: string}, {username: string; password: string} | null>;
      /** Defaults to cancellation. Only an explicit 'proceed' changes that decision. */
      onReceivedSslError?: WebCallback<WebPageEvent & {primaryError: number}, 'cancel' | 'proceed' | null>;
      onReceivedClientCertRequest?: WebCallback<{host: string; port: number; keyTypes: readonly string[]; principals: readonly string[]}, {alias: string} | 'ignore' | 'cancel' | null>;
      onSafeBrowsingHit?: WebCallback<WebRequest & {threatType: number}, 'backToSafety' | 'proceed' | 'showInterstitial' | null>;
      /** Notification; the host always releases the exited renderer's WebView. */
      onRenderProcessGone?: WebCallback<{didCrash: boolean; rendererPriorityAtExit: number}>;
    }
    export interface WebFileChooserOptions {
      acceptTypes?: readonly string[]; multiple?: boolean;
      mode?: 'open' | 'multiple' | 'directory' | 'save' | 0 | 1 | 2 | 3;
      /** Capture image/video with the system camera or audio as a foreground AAC/M4A recording. */
      captureEnabled?: boolean;
      /** Override an ambiguous acceptTypes family when captureEnabled is true. */
      captureKind?: 'image' | 'video' | 'audio';
      /** System-camera hint: 0 low quality, 1 high quality. Only applies to video. */
      videoQuality?: 0 | 1;
      /** Positive integer seconds, up to 2147483. Camera hint; enforced by the native audio recorder. */
      durationLimitSeconds?: number;
      /** Positive safe-integer byte limit. Camera hint; audio may finish after the final encoded frame. */
      sizeLimitBytes?: number;
      /** Chooser wait, 100..2147483647 ms; default 120000. Execution and callback budgets also apply. */
      timeoutMs?: number;
      /** Save filename; Android creates a new document instead of overwriting an existing one. */
      fileName?: string;
      /** Defaults to true for directory/save. Save always needs write access. */
      writable?: boolean;
      /** Android API 37+ native chooser permission mode: 0 read, 1 read/write. */
      permissionMode?: 0 | 1;
      /** Android API 26+ document-picker starting location. */
      initialUri?: string;
    }
    export interface WebFileChooserRequest extends WebFileChooserOptions {
      acceptTypes: readonly string[]; multiple: boolean; mode: 0 | 1 | 2 | 3;
      captureEnabled: boolean; title: string | null; filenameHint: string | null;
    }
    export interface WebDialogRequest {url: string | null; title: string | null; message: string; defaultValue: string | null}
    export interface WebPermissionRequest {origin: string; resources: readonly string[]}
    export interface WebChromeClientOptions {
      /** 100..2147483647 ms. Default 15000, or 120000 for file selection, including its default native picker. */
      callbackTimeoutMs?: number;
      consumeConsoleMessages?: boolean;
      fullscreen?: boolean;
      allowAutomaticWindows?: boolean;
    }
    export interface WebChromeClient {
      onProgressChanged?: WebCallback<{progress: number}>;
      onReceivedTitle?: WebCallback<{title: string | null}>;
      /** PNG thumbnail, at most 64x64, not an Android Bitmap reference. */
      onReceivedIcon?: WebCallback<{width?: number; height?: number; pngBase64?: string}>;
      onReceivedTouchIconUrl?: WebCallback<WebPageEvent & {precomposed: boolean}>;
      /** Notification; use consumeConsoleMessages to set Android's synchronous return value. */
      onConsoleMessage?: WebCallback<{message: string; sourceId: string; lineNumber: number; level: 'tip' | 'log' | 'warning' | 'error' | 'debug'}>;
      onJsAlert?: WebCallback<WebDialogRequest, boolean | null>;
      onJsConfirm?: WebCallback<WebDialogRequest, boolean | null>;
      onJsPrompt?: WebCallback<WebDialogRequest, string | null>;
      onJsBeforeUnload?: WebCallback<WebDialogRequest, boolean | null>;
      /** Return only requested resources; existing Android camera/microphone permissions are still required. */
      onPermissionRequest?: WebCallback<WebPermissionRequest, readonly string[] | null>;
      onPermissionRequestCanceled?: WebCallback<WebPermissionRequest>;
      onGeolocationPermissionsShowPrompt?: WebCallback<{origin: string}, boolean | {allow: boolean; retain?: boolean} | null>;
      onGeolocationPermissionsHidePrompt?: WebCallback<Record<string, never>>;
      /** Return readable document content URIs or null. this.chooseFiles(event) opens the system picker. */
      onShowFileChooser?: WebCallback<WebFileChooserRequest, readonly string[] | null>;
      /** Return a different execution-owned WebView that has not navigated, or null to cancel. */
      onCreateWindow?: WebCallback<WebPageEvent & {dialog: boolean; userGesture: boolean}, NativeViewToken | null>;
      onCloseWindow?: WebCallback<Record<string, never>>;
      onRequestFocus?: WebCallback<Record<string, never>>;
      onShowCustomView?: WebCallback<Record<string, never>>;
      onHideCustomView?: WebCallback<Record<string, never>>;
      getVisitedHistory?: WebCallback<Record<string, never>, readonly string[] | null>;
    }
    export interface WebDownloadEvent {
      url: string; userAgent?: string; contentDisposition?: string; mimeType?: string;
      contentLength: number; suggestedFileName: string;
    }
    export type WebDownloadId = number | `web:${string}`;
    export interface WebDownloadOptions {
      /** HTTP(S), data:, same-page blob:, or a readable selected content: URI. */
      url: string; fileName?: string; title?: string; mimeType?: string; contentDisposition?: string;
      userAgent?: string; includeCookies?: boolean; headers?: Readonly<Record<string, string>>;
      /** An empty writable document from chooseFiles({mode:'save'}); mutually exclusive with directoryUri. */
      destinationUri?: string;
      /** A writable tree from chooseFiles({mode:'directory'}); creates a child named fileName. */
      directoryUri?: string;
      /** Local/page/SAF transfers only. Default 120000; 100..2147483647 ms. */
      timeoutMs?: number;
    }
    export interface WebDownload {id: WebDownloadId; url: string; fileName: string}
    export interface WebDownloadState {
      id: WebDownloadId; url: string; status: 'pending' | 'running' | 'paused' | 'successful' | 'failed';
      reason: number; bytesDownloaded: number; totalBytes: number;
      localUri: string | null; contentUri: string | null; mimeType: string | null;
      /** Local transfers report details on failure. */
      error?: string; fileName?: string;
      /** False for explicitly chosen SAF outputs: removing a completed job preserves the user's document. */
      managed?: boolean;
    }

    export interface NativeViewHandle extends NativeViewToken {
      readonly id: string; readonly type: string; readonly context: UiContext;
      // Property reads return Promises. Assignment effects are ordered; await a read or flush().
      get text(): Promise<string>;
      set text(value: string);
      get hint(): Promise<string>;
      set hint(value: string);
      get textSize(): Promise<number>;
      set textSize(value: number | `${number}sp` | `${number}px`);
      get textColor(): Promise<number>;
      set textColor(value: string | number);
      get textStyle(): Promise<'normal' | 'bold' | 'italic' | 'bold|italic'>;
      set textStyle(value: 'normal' | 'bold' | 'italic' | 'bold|italic');
      get singleLine(): Promise<boolean>;
      set singleLine(value: boolean);
      get maxLines(): Promise<number>;
      set maxLines(value: number);
      get inputType(): Promise<number>;
      set inputType(value: number | 'text' | 'textPassword' | 'number' | 'numberDecimal' | 'phone' | 'textEmailAddress');
      get checked(): Promise<boolean>;
      set checked(value: boolean);
      get enabled(): Promise<boolean>;
      set enabled(value: boolean);
      get visible(): Promise<boolean>;
      set visible(value: boolean);
      get visibility(): Promise<'visible' | 'invisible' | 'gone'>;
      set visibility(value: 'visible' | 'invisible' | 'gone');
      get alpha(): Promise<number>;
      set alpha(value: number);
      get contentDescription(): Promise<string | null>;
      set contentDescription(value: string | null);
      get clickable(): Promise<boolean>;
      set clickable(value: boolean);
      get focusable(): Promise<boolean>;
      set focusable(value: boolean);
      get width(): Promise<number>;
      set width(value: NativeDimension);
      get height(): Promise<number>;
      set height(value: NativeDimension);
      get padding(): Promise<readonly [number, number, number, number]>;
      set padding(value: NativeInsets);
      get margin(): Promise<readonly [number, number, number, number]>;
      set margin(value: NativeInsets);
      get backgroundColor(): Promise<number | null>;
      set backgroundColor(value: number | string);
      get gravity(): Promise<number>;
      set gravity(value: number | string);
      get layoutGravity(): Promise<number>;
      set layoutGravity(value: number | string);
      get weight(): Promise<number>;
      set weight(value: number);
      get orientation(): Promise<'horizontal' | 'vertical'>;
      set orientation(value: 'horizontal' | 'vertical');
      get min(): Promise<number>;
      set min(value: number);
      get max(): Promise<number>;
      set max(value: number);
      get progress(): Promise<number>;
      set progress(value: number);
      get indeterminate(): Promise<boolean>;
      set indeterminate(value: boolean);
      get rating(): Promise<number>;
      set rating(value: number);
      get numStars(): Promise<number>;
      set numStars(value: number);
      get stepSize(): Promise<number>;
      set stepSize(value: number);
      get isIndicator(): Promise<boolean>;
      set isIndicator(value: boolean);
      get items(): Promise<readonly AutoJs6Node.JsonValue[]>;
      set items(value: readonly AutoJs6Node.JsonValue[] | string);
      get selectedIndex(): Promise<number>;
      set selectedIndex(value: number);
      get checkedId(): Promise<string | null>;
      set checkedId(value: string | null);
      get textOn(): Promise<string>;
      set textOn(value: string);
      get textOff(): Promise<string>;
      set textOff(value: string);
      get value(): Promise<AutoJs6Node.JsonValue>;
      set value(value: AutoJs6Node.JsonValue);
      get wrapSelectorWheel(): Promise<boolean>;
      set wrapSelectorWheel(value: boolean);
      get displayedValues(): Promise<readonly string[] | null>;
      set displayedValues(value: readonly string[] | null);
      get cardCornerRadius(): Promise<number>;
      set cardCornerRadius(value: NativeDimension);
      get cardElevation(): Promise<number>;
      set cardElevation(value: NativeDimension);
      get src(): Promise<NativeImageSource | null>;
      set src(value: NativeImageSource | null);
      get scaleType(): Promise<string>;
      set scaleType(value: 'matrix' | 'fitXY' | 'fitStart' | 'fitCenter' | 'fitEnd' | 'center' | 'centerCrop' | 'centerInside' | 'MATRIX' | 'FIT_XY' | 'FIT_START' | 'FIT_CENTER' | 'FIT_END' | 'CENTER' | 'CENTER_CROP' | 'CENTER_INSIDE');
      get adjustViewBounds(): Promise<boolean>;
      set adjustViewBounds(value: boolean);
      readonly attached: Promise<boolean>;
      readonly layoutWidth: Promise<number>;
      readonly layoutHeight: Promise<number>;
      readonly drawableWidth: Promise<number>;
      readonly drawableHeight: Promise<number>;
      readonly xmlId: Promise<string | null>;
      get url(): Promise<string | null>;
      set url(value: string);
      get html(): Promise<string | null>;
      set html(value: string);
      get javaScriptEnabled(): Promise<boolean>;
      set javaScriptEnabled(value: boolean);
      get domStorageEnabled(): Promise<boolean>;
      set domStorageEnabled(value: boolean);
      get title(): Promise<string | null>;
      set title(value: string);
      get subtitle(): Promise<string>;
      set subtitle(value: string);
      get navigationIcon(): Promise<NativeDrawable | null>;
      set navigationIcon(value: NativeDrawable | null);
      get navigationContentDescription(): Promise<string>;
      set navigationContentDescription(value: string);
      get menu(): Promise<readonly ToolbarMenuItem[]>;
      set menu(value: readonly ToolbarMenuItem[]);
      get drawerLockMode(): Promise<'unlocked' | 'lockedClosed' | 'lockedOpen'>;
      set drawerLockMode(value: 'unlocked' | 'lockedClosed' | 'lockedOpen');
      get currentItem(): Promise<number>;
      set currentItem(value: number);
      get offscreenPageLimit(): Promise<number>;
      set offscreenPageLimit(value: number);
      readonly canGoBack: Promise<boolean>;
      readonly canGoForward: Promise<boolean>;
      readonly drawerOpenStart: Promise<boolean>;
      readonly drawerOpenEnd: Promise<boolean>;
      readonly pageCount: Promise<number>;
      /** Commands and assignments run in call order. Loading resolves when requested; observe pageFinished for completion. */
      loadUrl(url: string): Promise<void>;
      loadHtml(html: string, baseUrl?: string | null): Promise<void>;
      /** Requires javaScriptEnabled. Returns decoded JSON. UI operations may continue after submission while a dialog is pending. */
      evaluateJavascript(source: string, options?: WebEvaluationOptions): Promise<AutoJs6Node.JsonValue>;
      goBack(): Promise<void>; goForward(): Promise<void>; reload(): Promise<void>; stopLoading(): Promise<void>;
      openDrawer(side?: 'start' | 'end', animate?: boolean): Promise<void>;
      closeDrawer(side?: 'start' | 'end', animate?: boolean): Promise<void>;
      setCurrentItem(index: number, smoothScroll?: boolean): Promise<void>;
      showOverflowMenu(): Promise<boolean>; hideOverflowMenu(): Promise<boolean>;
      /** Installs local callbacks plus precomputed synchronous policies. Null resets that client. */
      setWebViewClient(client: WebViewClient | null, options?: WebViewClientOptions): Promise<void>;
      setWebChromeClient(client: WebChromeClient | null, options?: WebChromeClientOptions): Promise<void>;
      setDownloadListener(listener: ((this: NativeViewHandle, event: Readonly<WebDownloadEvent>) => unknown) | null): Promise<void>;
      /** Uses SAF open/multiple/save/tree selection, system photo/video capture or foreground audio recording. Resolves null on cancellation. */
      chooseFiles(options?: WebFileChooserOptions): Promise<readonly string[] | null>;
      cancelFileChooser(): Promise<void>;
      exitFullscreen(): Promise<boolean>;
      /** Starts an HTTP(S) DownloadManager task or a staged blob/data/content/SAF transfer. */
      download(options: WebDownloadOptions): Promise<WebDownload>;
      getDownload(id: WebDownloadId): Promise<WebDownloadState | null>;
      /** Cancels/removes a job. Completed explicit SAF output remains the user's document. */
      cancelDownload(id: WebDownloadId): Promise<boolean>;
      /** Reads a completed download, at most 32768 bytes per call. */
      readDownload(id: WebDownloadId, offset?: number, length?: number): Promise<Uint8Array>;
      /** Read up to 32768 bytes from a granted document or this View's temporary media capture. */
      readDocument(uri: string, offset?: number, length?: number): Promise<Uint8Array>;
      get(): Promise<NativeViewSnapshot>;
      get<K extends keyof NativeViewSnapshot>(name: K): Promise<NativeViewSnapshot[K]>;
      set(patch: NativeViewPatch): Promise<NativeViewSnapshot>;
      /** Waits for preceding assignments and rejects deferred native write errors. */
      flush(): Promise<void>;
      findView(id: string): Promise<NativeViewHandle | null>;
      /** Only the inflated root may be disposed, after all borrowing sessions close. */
      dispose(): Promise<void>;
      on(event: string, callback: (this: NativeViewHandle, event: UiEvent) => void): () => void;
      once(event: string, callback: (this: NativeViewHandle, event: UiEvent) => void): () => void;
      off(event: string, callback: (this: NativeViewHandle, event: UiEvent) => void): void;
    }
    export interface NativeUiHandle extends UiHandle {
      readonly rootView: NativeViewHandle;
      findView(id: string): Promise<NativeViewHandle | null>;
    }

    export interface UiModule {
      context(): Promise<UiContext>;
      inflate(layout: string | LayoutDescriptor, context?: UiContextToken): Promise<NativeViewHandle>;
      createView(type: LayoutType | (string & {}), props?: NativeViewCreateOptions, context?: UiContextToken): Promise<NativeViewHandle>;
      view(token: NativeViewToken): NativeViewHandle;
      findView(root: NativeViewToken | string, id: string): Promise<NativeViewHandle | null>;
      showLayout(layout: string | NativeViewToken, options?: UiShowOptions): Promise<NativeUiHandle>;
      showLayout(layoutJson: LayoutDescriptor, options?: UiShowOptions): Promise<UiHandle>;
      state<T extends Record<string, AutoJs6Node.JsonValue>>(initial: T): UiState<T>;
      bind<T extends Record<string, AutoJs6Node.JsonValue>, K extends keyof T & string>(state: UiState<T>, key: K): Binding<T[K]>;
    }
  }

  const ui: ui.UiModule;
  export = ui;
}
declare module "autojs6:ui" {
  import ui = require("ui");
  export = ui;
}
