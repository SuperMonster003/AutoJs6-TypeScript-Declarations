// Type definitions for AutoJs6 internal module compose
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
// Last modified: Oct 7, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/compose/Compose.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/compose/ComposeNodeGraph.kt
 * @Source %AutoJs6%/plugin-api/compose-ui-api/src/main/java/org/autojs/plugin/compose/api/catalog/V1Catalog.kt
 */
declare namespace Internal {
    /** Effective script names include the separately negotiated F2 interop extension. */
    type ComposeNodeName = ComposeCatalogNodeName | ComposeInteropNodeName;
    interface ComposeScriptCatalog extends ComposeCatalogProps, ComposeInteropCatalogProps {}

    /**
     * Compose UI plugin API, available since AutoJs6 6.8.0. mount requires "ui" mode;
     * floaty also supports non-UI scripts and requires the host's overlay permission.
     * Nodes, state, render functions and ordinary events belong to the creating script dispatcher.
     * Synchronous AndroidView factories are prepared on the Android main thread.
     * Workers may use post to schedule mutations. Nested mounts from render are rejected.
     * @see https://docs.autojs6.com/#/compose
     */
    interface Compose extends ComposeFactories {
        (root: ComposeNode | (() => ComposeNode), options?: ComposeMountOptions | null): ComposeSession;
        /** null when the plugin is unavailable, disabled, unauthorized or incompatible. */
        readonly version: { plugin: string; contract: number; compose: string } | null;
        /** Snapshot of open sessions, including the sessions owned by floating windows. */
        readonly sessions: ReadonlyArray<ComposeSession>;
        readonly ComposeError: ComposeErrorConstructor;
        isAvailable(): boolean;
        createElement<N extends ComposeNodeName>(type: N, ...args: ComposeFactoryArguments<N>): ComposeNode<N>;
        modifier(): ComposeModifier;
        state<T>(initial: T): ComposeState<T>;
        ref<T extends ComposeNode = ComposeNode>(): ComposeRef<T>;
        /** Synchronous transaction; returns the callback result, not a Promise. */
        batch<T>(callback: () => T): T;
        /** Replaces this script's previous UI mount after validating the new tree. */
        mount(root: ComposeNode | (() => ComposeNode), options?: ComposeMountOptions | null): ComposeSession;
        /**
         * Attaches to this script's XML <compose> container, found through ui/window ID lookup.
         * A successful attachment replaces only that container's previous session. Ordinary Views,
         * containers from another script and already closed resources are checked at runtime.
         */
        attach(container: ComposeNativeView, root: ComposeNode | (() => ComposeNode), options?: ComposeMountOptions | null): ComposeSession;
        floaty(root: ComposeNode | (() => ComposeNode), options?: ComposeFloatyOptions | null): ComposeFloatyWindow;
        /** Queues once on the owning script dispatcher; delay is an integer in 0..2147483647 ms. */
        post(callback: () => void, delay?: number): void;
        /** Returns a fresh copy; {} before the first explicit theme call. */
        theme(): ComposeThemeSnapshot;
        /** Replaces module defaults and updates the last open session; does not merge prior input. */
        theme(theme: ComposeTheme | null | undefined): ComposeThemeSnapshot;
    }

    /**
     * Optional native groups leave object values opaque, without widening to primitives.
     * Boxing and mapping the public members also contain TypeScript's unresolved-type error-any.
     */
    type ComposeExternalObject<T extends { value: unknown }> = object & { [K in keyof T['value']]: T['value'][K] };
    /** Native groups may be disabled; function/Promise objects are never native View inputs. */
    type ComposeNativeView = ComposeExternalObject<{ value: android.view.View }> & {
        readonly call?: never; readonly apply?: never; readonly then?: never;
    };
    type ComposeViewContext = ComposeExternalObject<{ value: android.content.Context }>;
    /** Called synchronously on the Android main thread while preparing create/set, not recomposition. */
    type ComposeViewFactory = (this: void, context: ComposeViewContext) => ComposeNativeView;
    type ComposeViewInput = ComposeNativeView | ComposeViewFactory;

    type ComposeColorInput = ColorHex | ColorInt | ColorName | Internal.Color |
        ComposeExternalObject<{ value: org.autojs.autojs.theme.ThemeColor }>;
    /** Bare numbers are dp; strings require a dp suffix. Runtime checks finite/range constraints. */
    type ComposeDpInput = number | `${number}dp`;
    /** Bare numbers are sp; strings require an sp suffix. */
    type ComposeSpInput = number | `${number}sp`;
    type ComposeBitmap = ComposeExternalObject<{ value: android.graphics.Bitmap }>;
    type ComposeImageInput = ComposeExternalObject<{ value: ImageWrapper }> | ComposeBitmap | string;
    /** icons-core names are case-insensitive; an omitted style means Filled. */
    type ComposeIconNameInput = string;
    type ComposeShapeInput = 'rectangle' | 'rounded' | 'circle' | {
        shape: 'rectangle' | 'rounded' | 'circle'; radius?: ComposeDpInput;
    };
    interface ComposeShapeValue { shape: 'rectangle' | 'rounded' | 'circle'; radius: number; }
    interface ComposeTextStyleInput {
        fontFamily?: string; fontSize?: ComposeSpInput; fontWeight?: number; italic?: boolean;
        lineHeight?: ComposeSpInput; letterSpacing?: ComposeSpInput;
    }
    interface ComposeTextStyleValue {
        fontFamily?: string; fontSize?: number; fontWeight?: number; italic?: boolean;
        lineHeight?: number; letterSpacing?: number;
    }
    type ComposeValueInput = string | number | boolean | null | ComposeColorInput | ComposeTextStyleInput |
        ComposeImageInput | ComposeShapeInput | ReadonlyArray<ComposeValueInput>;
    /** Strings create Text children; null, undefined and false are ignored. */
    type ComposeChild = ComposeNode | string | null | undefined | false | ReadonlyArray<ComposeChild>;
    /** A slot must expand to at most one node; longer nested arrays are rejected at runtime. */
    type ComposeSlotInput = ComposeNode | string | null | undefined | false | readonly [ComposeSlotInput?];
    type ComposeRequiredSlotInput = ComposeNode | string | readonly [ComposeRequiredSlotInput];
    type ComposePaddingInput = ComposeDpInput | readonly [ComposeDpInput] |
        readonly [ComposeDpInput, ComposeDpInput] |
        readonly [ComposeDpInput, ComposeDpInput, ComposeDpInput, ComposeDpInput];
    type ComposeBoxAlignment = 'topStart' | 'topCenter' | 'topEnd' | 'centerStart' | 'center' |
        'centerEnd' | 'bottomStart' | 'bottomCenter' | 'bottomEnd';

    interface ComposeState<T> { value: T; }
    interface ComposeRef<T extends ComposeNode = ComposeNode> {
        /** Assigned after frame acceptance; null before attachment and after removal/close. */
        readonly current: T | null;
    }
    interface ComposeSelection { start: number; end: number; }
    type ComposeEdit = { text: string; selection?: ComposeSelection | readonly [number, number] } |
        { text?: string; selection: ComposeSelection | readonly [number, number] };
    type ComposeScrollTarget = number | { index: number; offset?: number } | { index?: never; offset: number };

    /** Every method returns a new immutable, ordered chain. Numeric dimensions are dp. */
    interface ComposeModifier {
        padding(all: ComposeDpInput): ComposeModifier;
        padding(horizontal: ComposeDpInput, vertical: ComposeDpInput): ComposeModifier;
        padding(start: ComposeDpInput, top: ComposeDpInput, end: ComposeDpInput, bottom: ComposeDpInput): ComposeModifier;
        size(size: ComposeDpInput): ComposeModifier;
        size(width: ComposeDpInput, height: ComposeDpInput): ComposeModifier;
        width(width: ComposeDpInput): ComposeModifier;
        height(height: ComposeDpInput): ComposeModifier;
        fillMaxWidth(fraction?: number): ComposeModifier;
        fillMaxHeight(fraction?: number): ComposeModifier;
        fillMaxSize(fraction?: number): ComposeModifier;
        /** Requires a Column/Row parent. */
        weight(weight: number, fill?: boolean): ComposeModifier;
        /** Requires a Box parent. */
        align(alignment: ComposeBoxAlignment): ComposeModifier;
        background(color: ComposeColorInput, shape?: ComposeShapeInput): ComposeModifier;
        border(width: ComposeDpInput, color: ComposeColorInput, shape?: ComposeShapeInput): ComposeModifier;
        clip(shape: ComposeShapeInput): ComposeModifier;
        alpha(alpha: number): ComposeModifier;
        clickable(callback: (this: ComposeNode) => void, enabled?: boolean): ComposeModifier;
        verticalScroll(enabled?: boolean): ComposeModifier;
        horizontalScroll(enabled?: boolean): ComposeModifier;
        offset(x: ComposeDpInput, y: ComposeDpInput): ComposeModifier;
        aspectRatio(ratio: number): ComposeModifier;
        testTag(tag: string): ComposeModifier;
        semantics(contentDescription: string | null): ComposeModifier;
    }
    interface ComposeShortcutProps {
        w?: ComposeDpInput; h?: ComposeDpInput; padding?: ComposePaddingInput; bg?: ComposeColorInput;
        weight?: number; alpha?: number; testTag?: string; contentDescription?: string | null;
    }
    interface ComposeNodeShortcuts {
        get w(): number | undefined; set w(value: ComposeDpInput);
        get h(): number | undefined; set h(value: ComposeDpInput);
        get padding(): number | number[] | undefined; set padding(value: ComposePaddingInput);
        get bg(): number | undefined; set bg(value: ComposeColorInput);
        get weight(): number | undefined; set weight(value: number);
        get alpha(): number | undefined; set alpha(value: number);
        get testTag(): string | undefined; set testTag(value: string);
        get contentDescription(): string | null | undefined; set contentDescription(value: string | null);
        get modifier(): ComposeModifier | undefined; set modifier(value: ComposeModifier | null | undefined);
    }
    type ComposeFieldName = 'TextField' | 'OutlinedTextField';
    type ComposeToggleName = 'Checkbox' | 'RadioButton' | 'Switch';
    type ComposeManyChildrenName = 'Box' | 'Column' | 'Row' | 'Card' | 'Button' | 'ElevatedButton' |
        'FilledTonalButton' | 'OutlinedButton' | 'TextButton' | 'IconButton' | 'LazyColumn' | 'LazyRow';
    type ComposeSingleChildName = 'Scaffold' | 'Surface';
    type ComposeChildrenArguments<N extends ComposeNodeName> = N extends ComposeManyChildrenName ? ComposeChild[] :
        N extends ComposeSingleChildName ? [child?: ComposeSlotInput] : [];
    type ComposeFactoryArguments<N extends ComposeNodeName> = N extends 'Icon' | 'Image' | 'AlertDialog' | 'AndroidView' ?
        [props: ComposeProps<N>, ...children: ComposeChildrenArguments<N>] :
        [props?: ComposeProps<N> | null | undefined, ...children: ComposeChildrenArguments<N>] | ComposeChildrenArguments<N>;
    type ComposeFactories = { readonly [N in ComposeNodeName]: (...args: ComposeFactoryArguments<N>) => ComposeNode<N>; };

    interface ComposeBaseEvents<N extends ComposeNodeName> {
        click: (this: ComposeNode<N>) => void;
        longClick: (this: ComposeNode<N>) => void;
        focusChange: (this: ComposeNode<N>, focused: boolean) => void;
        /** firstVisibleIndex is null for ordinary scroll modifiers; offset is in physical pixels. */
        scroll: (this: ComposeNode<N>, firstVisibleIndex: number | null, offset: number) => void;
    }
    type ComposeNodeEvents<N extends ComposeNodeName> = ComposeBaseEvents<N> &
        (N extends ComposeFieldName ? { valueChange: (this: ComposeNode<N>, text: string, selection: ComposeSelection, editSeq: number) => void } : {}) &
        (N extends ComposeToggleName ? { checkedChange: (this: ComposeNode<N>, checked: boolean) => void } : {}) &
        (N extends 'Slider' ? { valueChange: (this: ComposeNode<N>, value: number) => void; valueChangeFinished: (this: ComposeNode<N>) => void } : {}) &
        (N extends 'AlertDialog' ? { dismissRequest: (this: ComposeNode<N>) => void } : {});
    type ComposeEventProps<N extends ComposeNodeName> = {
        [K in keyof ComposeNodeEvents<N> as K extends string ? `on${Capitalize<K>}` : never]?: ComposeNodeEvents<N>[K] | null;
    };
    type ComposeEventNames<N extends ComposeNodeName> = keyof ComposeNodeEvents<N> & string;
    type ComposeEventInputName<N extends ComposeNodeName> = ComposeEventNames<N> | `on${Capitalize<ComposeEventNames<N>>}`;
    type ComposeCanonicalEvent<K extends string> = K extends `on${infer E}` ? Uncapitalize<E> : K;
    type ComposeEventListener<N extends ComposeNodeName, K extends ComposeEventInputName<N>> =
        ComposeNodeEvents<N>[ComposeCanonicalEvent<K> & keyof ComposeNodeEvents<N>];
    type ComposeSlotName<N extends ComposeNodeName> =
        N extends ComposeFieldName ? 'label' | 'leadingIcon' | 'placeholder' | 'supportingText' | 'trailingIcon' :
        N extends 'AlertDialog' ? 'confirm' | 'dismiss' | 'icon' | 'text' | 'title' :
        N extends 'Scaffold' ? 'content' | 'snackbarHost' | 'topBar' :
        N extends 'TopAppBar' ? 'actions' | 'navigationIcon' | 'title' :
        N extends Exclude<ComposeManyChildrenName, 'LazyColumn' | 'LazyRow'> | 'Surface' ? 'content' : never;
    type ComposeSlots<N extends ComposeNodeName> = { [S in ComposeSlotName<N>]?: ComposeSlotInput; };
    type ComposeScriptCatalogProps<N extends ComposeNodeName> = N extends 'LazyColumn' | 'LazyRow' ?
        Omit<ComposeScriptCatalog[N], 'contentPadding'> & { contentPadding?: ComposePaddingInput } : ComposeScriptCatalog[N];
    type ComposeMutableProps<N extends ComposeNodeName> = object & Partial<ComposeScriptCatalogProps<N>> & ComposeShortcutProps &
        ComposeEventProps<N> & ComposeSlots<N> & { modifier?: ComposeModifier | null; ref?: ComposeRef | null; slots?: ComposeSlots<N> | null; };
    type ComposeProps<N extends ComposeNodeName> = ComposeScriptCatalogProps<N> & ComposeMutableProps<N> & {
        key?: string | number | null;
        children?: N extends ComposeManyChildrenName ? ComposeChild : N extends ComposeSingleChildName ? ComposeSlotInput : never;
    } & (N extends 'AlertDialog' ?
        ({ confirm: ComposeRequiredSlotInput } | { slots: ComposeSlots<N> & { confirm: ComposeRequiredSlotInput } }) : {});

    /** Long-lived handle. key is string-normalized; nodeId is -1 while detached. */
    interface ComposeNodeHandle<N extends ComposeNodeName> {
        readonly type: N;
        readonly key: string | null;
        readonly nodeId: number;
        readonly parent: ComposeNode | null;
        readonly children: ReadonlyArray<ComposeNode>;
        /** null/undefined are empty updates; the argument must still be supplied. */
        set(properties: ComposeMutableProps<N> | null | undefined): this;
        get<K extends keyof ComposeNodePropertyValues[N]>(name: K): ComposeNodePropertyValues[N][K];
        get<K extends keyof ComposeNodeShortcuts>(name: K): ComposeNodeShortcuts[K];
        append(child: ComposeChild): this;
        insert(index: number, child: ComposeChild): this;
        remove(child: ComposeNode | number): this;
        replace(children: ComposeChild): this;
        clear(): this;
        slot(name: ComposeSlotName<N>, child: ComposeSlotInput): this;
        on<K extends ComposeEventInputName<N>>(name: K, callback: ComposeEventListener<N, K>): this;
        off<K extends ComposeEventInputName<N>>(name: K, callback?: ComposeEventListener<N, K> | null): this;
        /** Requires a mounted focusable component or clickable modifier. */
        focus(): this;
        blur(): this;
        /** A number is a lazy-list index. Ordinary scroll modifiers require {offset: px}. */
        scrollTo(target: ComposeScrollTarget): this;
        toString(): string;
    }
    type ComposeNode<N extends ComposeNodeName = ComposeNodeName> = N extends ComposeNodeName ?
        ComposeNodeHandle<N> & ComposeNodeShortcuts & ComposeNodeProperties[N] &
        (N extends ComposeFieldName ? { edit(edit: ComposeEdit): ComposeNode<N> } : {}) : never;

    interface ComposeMountOptions {
        /** Omitted/null inherits module defaults; explicit undefined supplies empty overrides. */
        theme?: ComposeTheme | null | undefined;
    }
    interface ComposeFloatyOptions extends ComposeMountOptions {
        raw?: boolean; x?: number; y?: number;
        /** Physical integer pixels, MATCH_PARENT=-1, WRAP_CONTENT=-2. */
        width?: number; height?: number; touchable?: boolean; focusable?: boolean;
    }
    type ComposeSnackbarOptions = Omit<ComposeCatalogProps['Snackbar'], 'message' | 'duration' | 'actionLabel'> & {
        actionLabel?: string | null | undefined;
        /** null selects short; an explicitly present undefined is rejected at runtime. */
        duration?: Exclude<ComposeCatalogProps['Snackbar']['duration'], undefined> | null;
        onAction?: ((this: ComposeSession) => void) | null | undefined;
        onDismiss?: ((this: ComposeSession) => void) | null | undefined;
    };
    interface ComposeSession {
        readonly root: ComposeNode | null;
        isClosed(): boolean;
        update<T>(callback: () => T): T;
        /** Pending callbacks are cancelled when this session closes. */
        post(callback: () => void, delay?: number): void;
        close(): void;
        on(event: 'close', callback: (this: ComposeSession) => void): this;
        /** Requires a Scaffold in the accepted tree; one terminal action/dismiss callback. */
        showSnackbar(message: string, options?: ComposeSnackbarOptions | null): this;
    }
    interface ComposeFloatyWindow {
        readonly session: ComposeSession;
        readonly root: ComposeNode | null;
        isClosed(): boolean;
        update<T>(callback: () => T): T;
        post(callback: () => void, delay?: number): void;
        close(): void;
        /** These forwarded methods return the underlying session. */
        on(event: 'close', callback: (this: ComposeSession) => void): ComposeSession;
        showSnackbar(message: string, options?: ComposeSnackbarOptions | null): ComposeSession;
        setPosition(x: number, y: number): this;
        setSize(width: number, height: number): this;
        getX(): number; getY(): number; getWidth(): number; getHeight(): number;
        requestFocus(): this;
        disableFocus(): this;
        setTouchable(touchable: boolean): this;
        /** Rejected on raw windows, whose native chrome has no adjustment controls. */
        setAdjustEnabled(enabled: boolean): this;
    }

    interface ComposeTheme {
        seed?: ComposeColorInput | null;
        colors?: Partial<Record<ComposeThemeColorRole, ComposeColorInput>> | null;
        dark?: boolean | 'system' | null;
        dynamicColor?: boolean | null;
        typography?: { fontFamily?: string | null; scale?: number | null } | null;
    }
    /** Initially empty. After theme(input), fields contain the normalized explicit overrides. */
    interface ComposeThemeSnapshot {
        seed?: number | null;
        colors?: Partial<Record<ComposeThemeColorRole, number>>;
        dark?: boolean | null;
        dynamicColor?: boolean;
        typography?: { fontFamily: string | null; scale: number | null };
    }
    type ComposeThemeColorRole = 'primary' | 'onPrimary' | 'primaryContainer' | 'onPrimaryContainer' | 'inversePrimary' |
        'secondary' | 'onSecondary' | 'secondaryContainer' | 'onSecondaryContainer' |
        'tertiary' | 'onTertiary' | 'tertiaryContainer' | 'onTertiaryContainer' |
        'background' | 'onBackground' | 'surface' | 'onSurface' | 'surfaceVariant' | 'onSurfaceVariant' |
        'surfaceTint' | 'inverseSurface' | 'inverseOnSurface' | 'error' | 'onError' | 'errorContainer' | 'onErrorContainer' |
        'outline' | 'outlineVariant' | 'scrim' | 'surfaceBright' | 'surfaceDim' | 'surfaceContainer' |
        'surfaceContainerHigh' | 'surfaceContainerHighest' | 'surfaceContainerLow' | 'surfaceContainerLowest' |
        'primaryFixed' | 'primaryFixedDim' | 'onPrimaryFixed' | 'onPrimaryFixedVariant' |
        'secondaryFixed' | 'secondaryFixedDim' | 'onSecondaryFixed' | 'onSecondaryFixedVariant' |
        'tertiaryFixed' | 'tertiaryFixedDim' | 'onTertiaryFixed' | 'onTertiaryFixedVariant';
    type ComposeErrorCode = 'PLUGIN_UNAVAILABLE' | 'PLUGIN_DISABLED' | 'PLUGIN_UNAUTHORIZED' | 'PLUGIN_INCOMPATIBLE' |
        'UI_MODE_REQUIRED' | 'PERMISSION_REQUIRED' | 'INVALID_ARGUMENT' | 'UNKNOWN_COMPONENT' | 'UNKNOWN_PROP' |
        'INVALID_MODIFIER' | 'SCOPE_MISMATCH' | 'DUPLICATE_KEY' | 'LIMIT_EXCEEDED' | 'RENDER_FAILED' |
        'SESSION_CLOSED' | 'NODE_DETACHED' | 'RENDERER_FAILED' | 'INTERNAL';
    interface ComposeError extends Error {
        readonly name: 'ComposeError';
        code: ComposeErrorCode | (string & {});
        nodeId: number | null;
        prop: string | null;
        cause: unknown;
        retryable: boolean;
    }
    interface ComposeErrorConstructor {
        new(message?: string, code?: ComposeErrorCode | string, nodeId?: number | null, prop?: string | null, cause?: unknown): ComposeError;
        (message?: string, code?: ComposeErrorCode | string, nodeId?: number | null, prop?: string | null, cause?: unknown): ComposeError;
        readonly prototype: ComposeError;
    }

    namespace Compose {
        type ComponentName = ComposeNodeName;
        type Node<N extends ComponentName = ComponentName> = ComposeNode<N>;
        type Props<N extends ComponentName> = ComposeProps<N>;
        type Child = ComposeChild;
        type NativeView = ComposeNativeView;
        type ViewInput = ComposeViewInput;
        type ViewFactory = ComposeViewFactory;
        type ViewContext = ComposeViewContext;
        type State<T> = ComposeState<T>;
        type Ref<T extends ComposeNode = ComposeNode> = ComposeRef<T>;
        type Modifier = ComposeModifier;
        type Session = ComposeSession;
        type FloatyWindow = ComposeFloatyWindow;
        type MountOptions = ComposeMountOptions;
        type FloatyOptions = ComposeFloatyOptions;
        type Theme = ComposeTheme;
        type ThemeSnapshot = ComposeThemeSnapshot;
        type Selection = ComposeSelection;
        type Edit = ComposeEdit;
        type SnackbarOptions = ComposeSnackbarOptions;
        type Error = ComposeError;
        type ErrorCode = ComposeErrorCode;
    }
}

// Catalog property accessors: reads expose normalized values; writes accept script inputs.
declare namespace Internal {
    interface ComposeNodeProperties {
        "AndroidView": {
            get "view"(): ComposeNativeView;
            set "view"(value: ComposeViewInput);
        };
        "AlertDialog": {
            get "containerColor"(): number | null | undefined;
            set "containerColor"(value: ComposeColorInput | null);
            get "open"(): boolean;
            set "open"(value: boolean);
            get "shape"(): ComposeShapeValue | undefined;
            set "shape"(value: ComposeShapeInput);
        };
        "Box": {
            get "alignment"(): "bottomCenter" | "bottomEnd" | "bottomStart" | "center" | "centerEnd" | "centerStart" | "topCenter" | "topEnd" | "topStart";
            set "alignment"(value: "bottomCenter" | "bottomEnd" | "bottomStart" | "center" | "centerEnd" | "centerStart" | "topCenter" | "topEnd" | "topStart");
            get "contentAlignment"(): "bottomCenter" | "bottomEnd" | "bottomStart" | "center" | "centerEnd" | "centerStart" | "topCenter" | "topEnd" | "topStart";
            set "contentAlignment"(value: "bottomCenter" | "bottomEnd" | "bottomStart" | "center" | "centerEnd" | "centerStart" | "topCenter" | "topEnd" | "topStart");
        };
        "Button": {
            get "containerColor"(): number | null | undefined;
            set "containerColor"(value: ComposeColorInput | null);
            get "contentColor"(): number | null | undefined;
            set "contentColor"(value: ComposeColorInput | null);
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
            get "shape"(): ComposeShapeValue | undefined;
            set "shape"(value: ComposeShapeInput);
        };
        "Card": {
            get "color"(): number | null | undefined;
            set "color"(value: ComposeColorInput | null);
            get "contentColor"(): number | null | undefined;
            set "contentColor"(value: ComposeColorInput | null);
            get "elevation"(): number | undefined;
            set "elevation"(value: ComposeDpInput);
            get "shape"(): ComposeShapeValue | undefined;
            set "shape"(value: ComposeShapeInput);
        };
        "Checkbox": {
            get "checked"(): boolean;
            set "checked"(value: boolean);
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
        };
        "CircularProgressIndicator": {
            get "color"(): number | null | undefined;
            set "color"(value: ComposeColorInput | null);
            get "progress"(): null | number;
            set "progress"(value: null | number);
            get "trackColor"(): number | null | undefined;
            set "trackColor"(value: ComposeColorInput | null);
        };
        "Column": {
            get "alignment"(): "center" | "end" | "start";
            set "alignment"(value: "center" | "end" | "start");
            get "horizontalAlignment"(): "center" | "end" | "start";
            set "horizontalAlignment"(value: "center" | "end" | "start");
            get "arrangement"(): "bottom" | "center" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "top";
            set "arrangement"(value: "bottom" | "center" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "top");
            get "verticalArrangement"(): "bottom" | "center" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "top";
            set "verticalArrangement"(value: "bottom" | "center" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "top");
            get "spacing"(): number;
            set "spacing"(value: ComposeDpInput);
        };
        "ElevatedButton": {
            get "containerColor"(): number | null | undefined;
            set "containerColor"(value: ComposeColorInput | null);
            get "contentColor"(): number | null | undefined;
            set "contentColor"(value: ComposeColorInput | null);
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
            get "shape"(): ComposeShapeValue | undefined;
            set "shape"(value: ComposeShapeInput);
        };
        "FilledTonalButton": {
            get "containerColor"(): number | null | undefined;
            set "containerColor"(value: ComposeColorInput | null);
            get "contentColor"(): number | null | undefined;
            set "contentColor"(value: ComposeColorInput | null);
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
            get "shape"(): ComposeShapeValue | undefined;
            set "shape"(value: ComposeShapeInput);
        };
        "HorizontalDivider": {
            get "color"(): number | null | undefined;
            set "color"(value: ComposeColorInput | null);
            get "thickness"(): number;
            set "thickness"(value: ComposeDpInput);
        };
        "Icon": {
            get "name"(): ComposeIconNameInput;
            set "name"(value: ComposeIconNameInput);
            get "tint"(): number | null | undefined;
            set "tint"(value: ComposeColorInput | null);
        };
        "IconButton": {
            get "containerColor"(): number | null | undefined;
            set "containerColor"(value: ComposeColorInput | null);
            get "contentColor"(): number | null | undefined;
            set "contentColor"(value: ComposeColorInput | null);
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
            get "shape"(): ComposeShapeValue | undefined;
            set "shape"(value: ComposeShapeInput);
        };
        "Image": {
            get "contentScale"(): "crop" | "fillBounds" | "fillHeight" | "fillWidth" | "fit" | "inside" | "none";
            set "contentScale"(value: "crop" | "fillBounds" | "fillHeight" | "fillWidth" | "fit" | "inside" | "none");
            get "src"(): ComposeBitmap | null;
            set "src"(value: ComposeImageInput);
        };
        "LazyColumn": {
            get "alignment"(): "center" | "end" | "start";
            set "alignment"(value: "center" | "end" | "start");
            get "horizontalAlignment"(): "center" | "end" | "start";
            set "horizontalAlignment"(value: "center" | "end" | "start");
            get "arrangement"(): "bottom" | "center" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "top";
            set "arrangement"(value: "bottom" | "center" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "top");
            get "verticalArrangement"(): "bottom" | "center" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "top";
            set "verticalArrangement"(value: "bottom" | "center" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "top");
            get "contentPadding"(): number | Array<number>;
            set "contentPadding"(value: ComposePaddingInput);
            get "reverseLayout"(): boolean;
            set "reverseLayout"(value: boolean);
            get "spacing"(): number;
            set "spacing"(value: ComposeDpInput);
            get "userScrollEnabled"(): boolean;
            set "userScrollEnabled"(value: boolean);
        };
        "LazyRow": {
            get "alignment"(): "bottom" | "center" | "top";
            set "alignment"(value: "bottom" | "center" | "top");
            get "verticalAlignment"(): "bottom" | "center" | "top";
            set "verticalAlignment"(value: "bottom" | "center" | "top");
            get "arrangement"(): "center" | "end" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "start";
            set "arrangement"(value: "center" | "end" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "start");
            get "horizontalArrangement"(): "center" | "end" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "start";
            set "horizontalArrangement"(value: "center" | "end" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "start");
            get "contentPadding"(): number | Array<number>;
            set "contentPadding"(value: ComposePaddingInput);
            get "reverseLayout"(): boolean;
            set "reverseLayout"(value: boolean);
            get "spacing"(): number;
            set "spacing"(value: ComposeDpInput);
            get "userScrollEnabled"(): boolean;
            set "userScrollEnabled"(value: boolean);
        };
        "LinearProgressIndicator": {
            get "color"(): number | null | undefined;
            set "color"(value: ComposeColorInput | null);
            get "progress"(): null | number;
            set "progress"(value: null | number);
            get "trackColor"(): number | null | undefined;
            set "trackColor"(value: ComposeColorInput | null);
        };
        "OutlinedButton": {
            get "containerColor"(): number | null | undefined;
            set "containerColor"(value: ComposeColorInput | null);
            get "contentColor"(): number | null | undefined;
            set "contentColor"(value: ComposeColorInput | null);
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
            get "shape"(): ComposeShapeValue | undefined;
            set "shape"(value: ComposeShapeInput);
        };
        "OutlinedTextField": {
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
            get "imeAction"(): "default" | "done" | "go" | "next" | "none" | "previous" | "search" | "send";
            set "imeAction"(value: "default" | "done" | "go" | "next" | "none" | "previous" | "search" | "send");
            get "isError"(): boolean;
            set "isError"(value: boolean);
            get "keyboardType"(): "ascii" | "decimal" | "email" | "number" | "numberPassword" | "password" | "phone" | "text" | "uri";
            set "keyboardType"(value: "ascii" | "decimal" | "email" | "number" | "numberPassword" | "password" | "phone" | "text" | "uri");
            get "maxLines"(): number;
            set "maxLines"(value: number);
            get "minLines"(): number;
            set "minLines"(value: number);
            get "readOnly"(): boolean;
            set "readOnly"(value: boolean);
            get "singleLine"(): boolean;
            set "singleLine"(value: boolean);
            get "style"(): "bodyLarge" | "bodyMedium" | "bodySmall" | "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "titleLarge" | "titleMedium" | "titleSmall" | ComposeTextStyleValue | undefined;
            set "style"(value: "bodyLarge" | "bodyMedium" | "bodySmall" | "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "titleLarge" | "titleMedium" | "titleSmall" | ComposeTextStyleInput);
            get "text"(): string;
            set "text"(value: string);
            get "value"(): string;
            set "value"(value: string);
            get "visualTransformation"(): "none" | "password";
            set "visualTransformation"(value: "none" | "password");
        };
        "RadioButton": {
            get "checked"(): boolean;
            set "checked"(value: boolean);
            get "selected"(): boolean;
            set "selected"(value: boolean);
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
        };
        "Row": {
            get "alignment"(): "bottom" | "center" | "top";
            set "alignment"(value: "bottom" | "center" | "top");
            get "verticalAlignment"(): "bottom" | "center" | "top";
            set "verticalAlignment"(value: "bottom" | "center" | "top");
            get "arrangement"(): "center" | "end" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "start";
            set "arrangement"(value: "center" | "end" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "start");
            get "horizontalArrangement"(): "center" | "end" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "start";
            set "horizontalArrangement"(value: "center" | "end" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "start");
            get "spacing"(): number;
            set "spacing"(value: ComposeDpInput);
        };
        "Scaffold": {
            get "containerColor"(): number | null | undefined;
            set "containerColor"(value: ComposeColorInput | null);
            get "contentColor"(): number | null | undefined;
            set "contentColor"(value: ComposeColorInput | null);
        };
        "Slider": {
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
            get "range"(): [number, number];
            set "range"(value: readonly [number, number]);
            get "steps"(): number;
            set "steps"(value: number);
            get "value"(): number;
            set "value"(value: number);
        };
        "Spacer": {
        };
        "Surface": {
            get "color"(): number | null | undefined;
            set "color"(value: ComposeColorInput | null);
            get "contentColor"(): number | null | undefined;
            set "contentColor"(value: ComposeColorInput | null);
            get "shape"(): ComposeShapeValue;
            set "shape"(value: ComposeShapeInput);
            get "tonalElevation"(): number;
            set "tonalElevation"(value: ComposeDpInput);
        };
        "Switch": {
            get "checked"(): boolean;
            set "checked"(value: boolean);
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
        };
        "Text": {
            get "color"(): number | null | undefined;
            set "color"(value: ComposeColorInput | null);
            get "fontSize"(): number | undefined;
            set "fontSize"(value: ComposeSpInput);
            get "fontWeight"(): number | undefined;
            set "fontWeight"(value: number);
            get "maxLines"(): number;
            set "maxLines"(value: number);
            get "overflow"(): "clip" | "ellipsis" | "visible";
            set "overflow"(value: "clip" | "ellipsis" | "visible");
            get "selectable"(): boolean;
            set "selectable"(value: boolean);
            get "style"(): "bodyLarge" | "bodyMedium" | "bodySmall" | "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "titleLarge" | "titleMedium" | "titleSmall" | ComposeTextStyleValue | undefined;
            set "style"(value: "bodyLarge" | "bodyMedium" | "bodySmall" | "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "titleLarge" | "titleMedium" | "titleSmall" | ComposeTextStyleInput);
            get "text"(): string;
            set "text"(value: string);
            get "textAlign"(): "center" | "end" | "justify" | "left" | "right" | "start";
            set "textAlign"(value: "center" | "end" | "justify" | "left" | "right" | "start");
        };
        "TextButton": {
            get "containerColor"(): number | null | undefined;
            set "containerColor"(value: ComposeColorInput | null);
            get "contentColor"(): number | null | undefined;
            set "contentColor"(value: ComposeColorInput | null);
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
            get "shape"(): ComposeShapeValue | undefined;
            set "shape"(value: ComposeShapeInput);
        };
        "TextField": {
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
            get "imeAction"(): "default" | "done" | "go" | "next" | "none" | "previous" | "search" | "send";
            set "imeAction"(value: "default" | "done" | "go" | "next" | "none" | "previous" | "search" | "send");
            get "isError"(): boolean;
            set "isError"(value: boolean);
            get "keyboardType"(): "ascii" | "decimal" | "email" | "number" | "numberPassword" | "password" | "phone" | "text" | "uri";
            set "keyboardType"(value: "ascii" | "decimal" | "email" | "number" | "numberPassword" | "password" | "phone" | "text" | "uri");
            get "maxLines"(): number;
            set "maxLines"(value: number);
            get "minLines"(): number;
            set "minLines"(value: number);
            get "readOnly"(): boolean;
            set "readOnly"(value: boolean);
            get "singleLine"(): boolean;
            set "singleLine"(value: boolean);
            get "style"(): "bodyLarge" | "bodyMedium" | "bodySmall" | "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "titleLarge" | "titleMedium" | "titleSmall" | ComposeTextStyleValue | undefined;
            set "style"(value: "bodyLarge" | "bodyMedium" | "bodySmall" | "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "titleLarge" | "titleMedium" | "titleSmall" | ComposeTextStyleInput);
            get "text"(): string;
            set "text"(value: string);
            get "value"(): string;
            set "value"(value: string);
            get "visualTransformation"(): "none" | "password";
            set "visualTransformation"(value: "none" | "password");
        };
        "TopAppBar": {
            get "containerColor"(): number | null | undefined;
            set "containerColor"(value: ComposeColorInput | null);
            get "contentColor"(): number | null | undefined;
            set "contentColor"(value: ComposeColorInput | null);
        };
    }
    interface ComposeNodePropertyValues {
        "AndroidView": { "view": ComposeNativeView; };
        "AlertDialog": {
            "containerColor": number | null | undefined;
            "open": boolean;
            "shape": ComposeShapeValue | undefined;
        };
        "Box": {
            "alignment": "bottomCenter" | "bottomEnd" | "bottomStart" | "center" | "centerEnd" | "centerStart" | "topCenter" | "topEnd" | "topStart";
            "contentAlignment": "bottomCenter" | "bottomEnd" | "bottomStart" | "center" | "centerEnd" | "centerStart" | "topCenter" | "topEnd" | "topStart";
        };
        "Button": {
            "containerColor": number | null | undefined;
            "contentColor": number | null | undefined;
            "enabled": boolean;
            "shape": ComposeShapeValue | undefined;
        };
        "Card": {
            "color": number | null | undefined;
            "contentColor": number | null | undefined;
            "elevation": number | undefined;
            "shape": ComposeShapeValue | undefined;
        };
        "Checkbox": {
            "checked": boolean;
            "enabled": boolean;
        };
        "CircularProgressIndicator": {
            "color": number | null | undefined;
            "progress": null | number;
            "trackColor": number | null | undefined;
        };
        "Column": {
            "alignment": "center" | "end" | "start";
            "horizontalAlignment": "center" | "end" | "start";
            "arrangement": "bottom" | "center" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "top";
            "verticalArrangement": "bottom" | "center" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "top";
            "spacing": number;
        };
        "ElevatedButton": {
            "containerColor": number | null | undefined;
            "contentColor": number | null | undefined;
            "enabled": boolean;
            "shape": ComposeShapeValue | undefined;
        };
        "FilledTonalButton": {
            "containerColor": number | null | undefined;
            "contentColor": number | null | undefined;
            "enabled": boolean;
            "shape": ComposeShapeValue | undefined;
        };
        "HorizontalDivider": {
            "color": number | null | undefined;
            "thickness": number;
        };
        "Icon": {
            "name": ComposeIconNameInput;
            "tint": number | null | undefined;
        };
        "IconButton": {
            "containerColor": number | null | undefined;
            "contentColor": number | null | undefined;
            "enabled": boolean;
            "shape": ComposeShapeValue | undefined;
        };
        "Image": {
            "contentScale": "crop" | "fillBounds" | "fillHeight" | "fillWidth" | "fit" | "inside" | "none";
            "src": ComposeBitmap | null;
        };
        "LazyColumn": {
            "alignment": "center" | "end" | "start";
            "horizontalAlignment": "center" | "end" | "start";
            "arrangement": "bottom" | "center" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "top";
            "verticalArrangement": "bottom" | "center" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "top";
            "contentPadding": number | Array<number>;
            "reverseLayout": boolean;
            "spacing": number;
            "userScrollEnabled": boolean;
        };
        "LazyRow": {
            "alignment": "bottom" | "center" | "top";
            "verticalAlignment": "bottom" | "center" | "top";
            "arrangement": "center" | "end" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "start";
            "horizontalArrangement": "center" | "end" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "start";
            "contentPadding": number | Array<number>;
            "reverseLayout": boolean;
            "spacing": number;
            "userScrollEnabled": boolean;
        };
        "LinearProgressIndicator": {
            "color": number | null | undefined;
            "progress": null | number;
            "trackColor": number | null | undefined;
        };
        "OutlinedButton": {
            "containerColor": number | null | undefined;
            "contentColor": number | null | undefined;
            "enabled": boolean;
            "shape": ComposeShapeValue | undefined;
        };
        "OutlinedTextField": {
            "enabled": boolean;
            "imeAction": "default" | "done" | "go" | "next" | "none" | "previous" | "search" | "send";
            "isError": boolean;
            "keyboardType": "ascii" | "decimal" | "email" | "number" | "numberPassword" | "password" | "phone" | "text" | "uri";
            "maxLines": number;
            "minLines": number;
            "readOnly": boolean;
            "singleLine": boolean;
            "style": "bodyLarge" | "bodyMedium" | "bodySmall" | "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "titleLarge" | "titleMedium" | "titleSmall" | ComposeTextStyleValue | undefined;
            "text": string;
            "value": string;
            "visualTransformation": "none" | "password";
        };
        "RadioButton": {
            "checked": boolean;
            "selected": boolean;
            "enabled": boolean;
        };
        "Row": {
            "alignment": "bottom" | "center" | "top";
            "verticalAlignment": "bottom" | "center" | "top";
            "arrangement": "center" | "end" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "start";
            "horizontalArrangement": "center" | "end" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "start";
            "spacing": number;
        };
        "Scaffold": {
            "containerColor": number | null | undefined;
            "contentColor": number | null | undefined;
        };
        "Slider": {
            "enabled": boolean;
            "range": [number, number];
            "steps": number;
            "value": number;
        };
        "Spacer": {
        };
        "Surface": {
            "color": number | null | undefined;
            "contentColor": number | null | undefined;
            "shape": ComposeShapeValue;
            "tonalElevation": number;
        };
        "Switch": {
            "checked": boolean;
            "enabled": boolean;
        };
        "Text": {
            "color": number | null | undefined;
            "fontSize": number | undefined;
            "fontWeight": number | undefined;
            "maxLines": number;
            "overflow": "clip" | "ellipsis" | "visible";
            "selectable": boolean;
            "style": "bodyLarge" | "bodyMedium" | "bodySmall" | "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "titleLarge" | "titleMedium" | "titleSmall" | ComposeTextStyleValue | undefined;
            "text": string;
            "textAlign": "center" | "end" | "justify" | "left" | "right" | "start";
        };
        "TextButton": {
            "containerColor": number | null | undefined;
            "contentColor": number | null | undefined;
            "enabled": boolean;
            "shape": ComposeShapeValue | undefined;
        };
        "TextField": {
            "enabled": boolean;
            "imeAction": "default" | "done" | "go" | "next" | "none" | "previous" | "search" | "send";
            "isError": boolean;
            "keyboardType": "ascii" | "decimal" | "email" | "number" | "numberPassword" | "password" | "phone" | "text" | "uri";
            "maxLines": number;
            "minLines": number;
            "readOnly": boolean;
            "singleLine": boolean;
            "style": "bodyLarge" | "bodyMedium" | "bodySmall" | "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "titleLarge" | "titleMedium" | "titleSmall" | ComposeTextStyleValue | undefined;
            "text": string;
            "value": string;
            "visualTransformation": "none" | "password";
        };
        "TopAppBar": {
            "containerColor": number | null | undefined;
            "contentColor": number | null | undefined;
        };
    }
}

// <autojs6-compose-catalog:v1>
// Generated from org.autojs.plugin.compose.api.catalog.ComponentCatalog.V1; schema=1; contract=1; sha256=573d91aa8ca860dcc79c688765eb1d6f9a0f59dc81094d1fa2834efd83376fed.
// Input helper types are defined by the surrounding P6 declaration file.
declare namespace Internal {
    interface ComposeCatalogProps {
        /** @invocation NODE @children NONE @scope ANY */
        "AlertDialog": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "open"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "shape"?: ComposeShapeInput;
        };
        /** @invocation NODE @children MANY @scope BOX */
        "Box": {
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"topStart"},"update":"SET_PROPS"} */
            "alignment"?: "bottomCenter" | "bottomEnd" | "bottomStart" | "center" | "centerEnd" | "centerStart" | "topCenter" | "topEnd" | "topStart";
            /** @aliasFor alignment */
            "contentAlignment"?: "bottomCenter" | "bottomEnd" | "bottomStart" | "center" | "centerEnd" | "centerStart" | "topCenter" | "topEnd" | "topStart";
        };
        /** @invocation NODE @children MANY @scope ANY */
        "Button": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "shape"?: ComposeShapeInput;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "Card": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "color"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{"minimum":0.0},"default":null,"update":"SET_PROPS"} */
            "elevation"?: ComposeDpInput;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "shape"?: ComposeShapeInput;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "Checkbox": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "checked"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "CircularProgressIndicator": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "color"?: ComposeColorInput | null;
            /** @catalog {"constraints":{"maximum":1.0,"minimum":0.0},"default":{"kind":"NULL","value":null},"update":"SET_PROPS"} */
            "progress"?: null | number;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "trackColor"?: ComposeColorInput | null;
        };
        /** @invocation NODE @children MANY @scope COLUMN_ROW */
        "Column": {
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"start"},"update":"SET_PROPS"} */
            "alignment"?: "center" | "end" | "start";
            /** @aliasFor alignment */
            "horizontalAlignment"?: "center" | "end" | "start";
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"top"},"update":"SET_PROPS"} */
            "arrangement"?: "bottom" | "center" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "top";
            /** @aliasFor arrangement */
            "verticalArrangement"?: "bottom" | "center" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "top";
            /** @catalog {"constraints":{"minimum":0.0},"default":{"kind":"DP","value":0.0},"update":"SET_PROPS"} */
            "spacing"?: ComposeDpInput;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "ElevatedButton": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "shape"?: ComposeShapeInput;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "FilledTonalButton": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "shape"?: ComposeShapeInput;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "HorizontalDivider": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "color"?: ComposeColorInput | null;
            /** @catalog {"constraints":{"minimum":0.0},"default":{"kind":"DP","value":1.0},"update":"SET_PROPS"} */
            "thickness"?: ComposeDpInput;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "Icon": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "name": ComposeIconNameInput;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "tint"?: ComposeColorInput | null;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "IconButton": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "shape"?: ComposeShapeInput;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "Image": {
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"fit"},"update":"SET_PROPS"} */
            "contentScale"?: "crop" | "fillBounds" | "fillHeight" | "fillWidth" | "fit" | "inside" | "none";
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "src": ComposeImageInput;
        };
        /** @invocation NODE @children LAZY_ITEMS @scope ANY */
        "LazyColumn": {
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"start"},"update":"SET_PROPS"} */
            "alignment"?: "center" | "end" | "start";
            /** @aliasFor alignment */
            "horizontalAlignment"?: "center" | "end" | "start";
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"top"},"update":"SET_PROPS"} */
            "arrangement"?: "bottom" | "center" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "top";
            /** @aliasFor arrangement */
            "verticalArrangement"?: "bottom" | "center" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "top";
            /** @catalog {"constraints":{"listKinds":["DP"],"listMaximum":4,"listMinimum":1},"default":{"kind":"DP","value":0.0},"update":"SET_PROPS"} */
            "contentPadding"?: ComposeDpInput | ReadonlyArray<ComposeDpInput>;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "reverseLayout"?: boolean;
            /** @catalog {"constraints":{"minimum":0.0},"default":{"kind":"DP","value":0.0},"update":"SET_PROPS"} */
            "spacing"?: ComposeDpInput;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "userScrollEnabled"?: boolean;
        };
        /** @invocation NODE @children LAZY_ITEMS @scope ANY */
        "LazyRow": {
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"top"},"update":"SET_PROPS"} */
            "alignment"?: "bottom" | "center" | "top";
            /** @aliasFor alignment */
            "verticalAlignment"?: "bottom" | "center" | "top";
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"start"},"update":"SET_PROPS"} */
            "arrangement"?: "center" | "end" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "start";
            /** @aliasFor arrangement */
            "horizontalArrangement"?: "center" | "end" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "start";
            /** @catalog {"constraints":{"listKinds":["DP"],"listMaximum":4,"listMinimum":1},"default":{"kind":"DP","value":0.0},"update":"SET_PROPS"} */
            "contentPadding"?: ComposeDpInput | ReadonlyArray<ComposeDpInput>;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "reverseLayout"?: boolean;
            /** @catalog {"constraints":{"minimum":0.0},"default":{"kind":"DP","value":0.0},"update":"SET_PROPS"} */
            "spacing"?: ComposeDpInput;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "userScrollEnabled"?: boolean;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "LinearProgressIndicator": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "color"?: ComposeColorInput | null;
            /** @catalog {"constraints":{"maximum":1.0,"minimum":0.0},"default":{"kind":"NULL","value":null},"update":"SET_PROPS"} */
            "progress"?: null | number;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "trackColor"?: ComposeColorInput | null;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "OutlinedButton": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "shape"?: ComposeShapeInput;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "OutlinedTextField": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"default"},"update":"SET_PROPS"} */
            "imeAction"?: "default" | "done" | "go" | "next" | "none" | "previous" | "search" | "send";
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "isError"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"text"},"update":"SET_PROPS"} */
            "keyboardType"?: "ascii" | "decimal" | "email" | "number" | "numberPassword" | "password" | "phone" | "text" | "uri";
            /** @catalog {"constraints":{"integral":true,"maximum":2147483647.0,"minimum":1.0},"default":{"kind":"NUMBER","value":2147483647.0},"update":"SET_PROPS"} */
            "maxLines"?: number;
            /** @catalog {"constraints":{"integral":true,"maximum":2147483647.0,"minimum":1.0},"default":{"kind":"NUMBER","value":1.0},"update":"SET_PROPS"} */
            "minLines"?: number;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "readOnly"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "singleLine"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "style"?: "bodyLarge" | "bodyMedium" | "bodySmall" | "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "titleLarge" | "titleMedium" | "titleSmall" | ComposeTextStyleInput;
            /** @catalog {"constraints":{},"default":{"kind":"STRING","value":""},"update":"EDIT_COMMAND"} */
            "text"?: string;
            /** @aliasFor text */
            "value"?: string;
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"none"},"update":"SET_PROPS"} */
            "visualTransformation"?: "none" | "password";
        };
        /** @invocation NODE @children NONE @scope ANY */
        "RadioButton": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "checked"?: boolean;
            /** @aliasFor checked */
            "selected"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
        };
        /** @invocation NODE @children MANY @scope COLUMN_ROW */
        "Row": {
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"top"},"update":"SET_PROPS"} */
            "alignment"?: "bottom" | "center" | "top";
            /** @aliasFor alignment */
            "verticalAlignment"?: "bottom" | "center" | "top";
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"start"},"update":"SET_PROPS"} */
            "arrangement"?: "center" | "end" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "start";
            /** @aliasFor arrangement */
            "horizontalArrangement"?: "center" | "end" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "start";
            /** @catalog {"constraints":{"minimum":0.0},"default":{"kind":"DP","value":0.0},"update":"SET_PROPS"} */
            "spacing"?: ComposeDpInput;
        };
        /** @invocation NODE @children SINGLE @scope ANY */
        "Scaffold": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "Slider": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{"listKinds":["NUMBER"],"listMaximum":2,"listMinimum":2},"default":{"kind":"LIST","value":[{"kind":"NUMBER","value":0.0},{"kind":"NUMBER","value":1.0}]},"update":"SET_PROPS"} */
            "range"?: readonly [number, number];
            /** @catalog {"constraints":{"integral":true,"maximum":2147483647.0,"minimum":0.0},"default":{"kind":"NUMBER","value":0.0},"update":"SET_PROPS"} */
            "steps"?: number;
            /** @catalog {"constraints":{"maximum":3.4028234663852886e+38,"minimum":-3.4028234663852886e+38},"default":{"kind":"NUMBER","value":0.0},"update":"SET_PROPS"} */
            "value"?: number;
        };
        /** @invocation COMMAND @children NONE @scope ANY */
        "Snackbar": {
            /** @catalog {"constraints":{},"default":{"kind":"NULL","value":null},"update":"SET_PROPS"} */
            "actionLabel"?: null | string;
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"short"},"update":"SET_PROPS"} */
            "duration"?: "indefinite" | "long" | "short";
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "message": string;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "Spacer": {
        };
        /** @invocation NODE @children SINGLE @scope ANY */
        "Surface": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "color"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":{"kind":"SHAPE","value":{"radius":0.0,"shape":"RECTANGLE"}},"update":"SET_PROPS"} */
            "shape"?: ComposeShapeInput;
            /** @catalog {"constraints":{"minimum":0.0},"default":{"kind":"DP","value":0.0},"update":"SET_PROPS"} */
            "tonalElevation"?: ComposeDpInput;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "Switch": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "checked"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "Text": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "color"?: ComposeColorInput | null;
            /** @catalog {"constraints":{"minimum":0.0,"minimumExclusive":true},"default":null,"update":"SET_PROPS"} */
            "fontSize"?: ComposeSpInput;
            /** @catalog {"constraints":{"integral":true,"maximum":1000.0,"minimum":1.0},"default":null,"update":"SET_PROPS"} */
            "fontWeight"?: number;
            /** @catalog {"constraints":{"integral":true,"maximum":2147483647.0,"minimum":1.0},"default":{"kind":"NUMBER","value":2147483647.0},"update":"SET_PROPS"} */
            "maxLines"?: number;
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"clip"},"update":"SET_PROPS"} */
            "overflow"?: "clip" | "ellipsis" | "visible";
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "selectable"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "style"?: "bodyLarge" | "bodyMedium" | "bodySmall" | "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "titleLarge" | "titleMedium" | "titleSmall" | ComposeTextStyleInput;
            /** @catalog {"constraints":{},"default":{"kind":"STRING","value":""},"update":"SET_PROPS"} */
            "text"?: string;
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"start"},"update":"SET_PROPS"} */
            "textAlign"?: "center" | "end" | "justify" | "left" | "right" | "start";
        };
        /** @invocation NODE @children MANY @scope ANY */
        "TextButton": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "shape"?: ComposeShapeInput;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "TextField": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"default"},"update":"SET_PROPS"} */
            "imeAction"?: "default" | "done" | "go" | "next" | "none" | "previous" | "search" | "send";
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "isError"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"text"},"update":"SET_PROPS"} */
            "keyboardType"?: "ascii" | "decimal" | "email" | "number" | "numberPassword" | "password" | "phone" | "text" | "uri";
            /** @catalog {"constraints":{"integral":true,"maximum":2147483647.0,"minimum":1.0},"default":{"kind":"NUMBER","value":2147483647.0},"update":"SET_PROPS"} */
            "maxLines"?: number;
            /** @catalog {"constraints":{"integral":true,"maximum":2147483647.0,"minimum":1.0},"default":{"kind":"NUMBER","value":1.0},"update":"SET_PROPS"} */
            "minLines"?: number;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "readOnly"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "singleLine"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "style"?: "bodyLarge" | "bodyMedium" | "bodySmall" | "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "titleLarge" | "titleMedium" | "titleSmall" | ComposeTextStyleInput;
            /** @catalog {"constraints":{},"default":{"kind":"STRING","value":""},"update":"EDIT_COMMAND"} */
            "text"?: string;
            /** @aliasFor text */
            "value"?: string;
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"none"},"update":"SET_PROPS"} */
            "visualTransformation"?: "none" | "password";
        };
        /** @invocation NODE @children NONE @scope ANY */
        "TopAppBar": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
        };
    }
    type ComposeCatalogNodeName = "AlertDialog" | "Box" | "Button" | "Card" | "Checkbox" | "CircularProgressIndicator" | "Column" | "ElevatedButton" | "FilledTonalButton" | "HorizontalDivider" | "Icon" | "IconButton" | "Image" | "LazyColumn" | "LazyRow" | "LinearProgressIndicator" | "OutlinedButton" | "OutlinedTextField" | "RadioButton" | "Row" | "Scaffold" | "Slider" | "Spacer" | "Surface" | "Switch" | "Text" | "TextButton" | "TextField" | "TopAppBar";
    type ComposeCatalogCommandName = "Snackbar";
}
// </autojs6-compose-catalog:v1>

// <autojs6-compose-interop:f2>
// Generated from org.autojs.plugin.compose.api.interop.AndroidViewInteropV1; schema=1; contract=1; extension=1; feature=android-view-interop-v1; sha256=cbee120589a49e97f8bf5ea546b508f0a1f8b77b685e8affd8b03da67b838a37.
// Script View inputs remain outside the frozen V1 wire value inventory.
declare namespace Internal {
    interface ComposeInteropCatalogProps {
        "AndroidView": { "view": ComposeViewInput; };
    }
    type ComposeInteropNodeName = "AndroidView";
}
// </autojs6-compose-interop:f2>
