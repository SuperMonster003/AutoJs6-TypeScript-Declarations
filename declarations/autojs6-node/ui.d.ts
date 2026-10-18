declare module "ui" {
  namespace ui {
    export type XmlTagName = "vertical" | "horizontal" | "frame" | "compose" | "text" | "button" | "input" | "img" | "image" | "scroll" | "list" | "switch" | "checkbox" | "progressbar" | "tabs" | "tab" | "linear" | "hscroll" | "space" | "relative" | "card" | "spinner" | "seekbar" | "ratingbar" | "radiogroup" | "radio" | "toggle" | "checkedtext" | "numberpicker";
    export type XmlAttributeName = "text" | "hint" | "textSize" | "textColor" | "textStyle" | "singleLine" | "maxLines" | "inputType" | "checked" | "enabled" | "visible" | "visibility" | "alpha" | "contentDescription" | "clickable" | "focusable" | "width" | "height" | "padding" | "margin" | "backgroundColor" | "gravity" | "layoutGravity" | "weight" | "orientation" | "min" | "max" | "progress" | "indeterminate" | "rating" | "numStars" | "stepSize" | "isIndicator" | "items" | "selectedIndex" | "checkedId" | "textOn" | "textOff" | "value" | "wrapSelectorWheel" | "displayedValues" | "cardCornerRadius" | "cardElevation" | "src" | "scaleType" | "adjustViewBounds" | "id" | "w" | "h" | "bg" | "entries" | "checkedButton" | "layout_width" | "layout_height" | "layout_weight" | "layout_gravity" | "layout_margin" | "below" | "above" | "toLeftOf" | "toRightOf" | "toStartOf" | "toEndOf" | "alignTop" | "alignBottom" | "alignStart" | "alignEnd" | "alignParentTop" | "alignParentBottom" | "alignParentStart" | "alignParentEnd" | "centerInParent" | "centerHorizontal" | "centerVertical";

    export type LayoutType =
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
      createView(type: LayoutType | (string & {}), props?: NativeViewPatch & {id?: string}): Promise<NativeViewHandle>;
    }
    /** Layout values default to dp; native geometry and inset snapshots are physical pixels. */
    export type NativeDimension = number | `${number}dp` | `${number}px` | '*' | 'match_parent' | 'wrap_content' | 'auto';
    export type NativeInsets = NativeDimension | readonly [NativeDimension, NativeDimension] | readonly [NativeDimension, NativeDimension, NativeDimension, NativeDimension];
    export type NativeImageSource = {readonly __autojs6ImageHandle: string} | `@drawable/${string}` | `@android:drawable/${string}`;
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
      createView(type: LayoutType | (string & {}), props?: NativeViewPatch & {id?: string}, context?: UiContextToken): Promise<NativeViewHandle>;
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
