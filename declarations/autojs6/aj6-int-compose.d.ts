// Type definitions for AutoJs6 internal module compose
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
// Last modified: Oct 8, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/compose/Compose.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/compose/ComposeNodeGraph.kt
 * @Source %AutoJs6%/plugin-api/compose-ui-api/src/main/java/org/autojs/plugin/compose/api/catalog/V1Catalog.kt
 * @Source %AutoJs6%/plugin-api/compose-ui-api/src/main/java/org/autojs/plugin/compose/api/v2/ComposeUiV2.kt
 */
declare namespace Internal {
    /** V2 nodes require contract 2; F2 AndroidView remains a separately negotiated extension. */
    type ComposeNodeName = ComposeCatalogNodeName | ComposeInteropNodeName | ComposeV2NodeName;
    interface ComposeScriptCatalog extends ComposeCatalogProps, ComposeInteropCatalogProps, ComposeV2CatalogProps {}

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
        /** Snapshot of open UI, container, floating-window and dialog sessions. */
        readonly sessions: ReadonlyArray<ComposeSession>;
        readonly ComposeError: ComposeErrorConstructor;
        isAvailable(): boolean;
        createElement<N extends ComposeNodeName>(type: N, ...args: ComposeFactoryArguments<N>): ComposeNode<N>;
        modifier(): ComposeModifier;
        state<T>(initial: T): ComposeState<T>;
        ref<T extends ComposeNode = ComposeNode>(): ComposeRef<T>;
        /** Synchronous transaction; returns the callback result, not a Promise. */
        batch<T>(callback: () => T): T;
        /**
         * Reuses a render fragment instead of rebuilding its nodes. Valid only while a render
         * function runs (host 6.8.0 / 5323). The previous node returns while every dependency is
         * unchanged (Object.is for primitives, identity for objects), no compose.state read by
         * build has been written since, and the node is still in the previous tree. Slots match by
         * options.key or call order within the render or enclosing memo, and by function literal.
         * build must list closure values in deps; at most 256 entries, 5000 fragments per render.
         */
        memo<T extends ComposeNode>(build: () => T, deps: ReadonlyArray<unknown>, options?: ComposeMemoOptions | null): T;
        /** Replaces this script's previous UI mount after validating the new tree. */
        mount(root: ComposeNode | (() => ComposeNode), options?: ComposeMountOptions | null): ComposeSession;
        /**
         * Attaches to this script's XML <compose> container, found through ui/window ID lookup.
         * A successful attachment replaces only that container's previous session. Ordinary Views,
         * containers from another script and already closed resources are checked at runtime.
         */
        attach(container: ComposeNativeView, root: ComposeNode | (() => ComposeNode), options?: ComposeMountOptions | null): ComposeSession;
        floaty(root: ComposeNode | (() => ComposeNode), options?: ComposeFloatyOptions | null): ComposeFloatyWindow;
        /**
         * Opens an independent dialog session. UI scripts use their own Activity window;
         * non-UI scripts require existing overlay permission, which is never requested here.
         * Requires a renderer advertising dialog-v1. Opening another dialog replaces no session.
         */
        dialog(root: ComposeNode | (() => ComposeNode), options?: ComposeDialogOptions | null): ComposeSession;
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
        'FilledTonalButton' | 'OutlinedButton' | 'TextButton' | 'IconButton' | 'LazyColumn' | 'LazyRow' | ComposeV2ManyChildrenName;
    type ComposeSingleChildName = 'Scaffold' | 'Surface' | ComposeV2SingleChildName;
    /** Item containers reject text and unrelated nodes; nonempty counts remain runtime checks. */
    type ComposeItemChild<N extends ComposeNodeName> = ComposeNode<N> | null | undefined | false | ReadonlyArray<ComposeItemChild<N>>;
    type ComposeChildrenInput<N extends ComposeNodeName> =
        N extends 'NavigationBar' ? ComposeItemChild<'NavigationBarItem'> :
        N extends 'NavigationRail' ? ComposeItemChild<'NavigationRailItem'> :
        N extends 'TabRow' ? ComposeItemChild<'Tab'> :
        N extends 'SegmentedButton' ? ComposeItemChild<'SegmentedButtonItem'> :
        N extends ComposeManyChildrenName ? ComposeChild : N extends ComposeSingleChildName ? ComposeSlotInput : never;
    type ComposeChildrenArguments<N extends ComposeNodeName> = N extends ComposeManyChildrenName ? ComposeChildrenInput<N>[] :
        N extends ComposeSingleChildName ? [child?: ComposeSlotInput] : [];
    type ComposeFactoryArguments<N extends ComposeNodeName> = N extends 'Icon' | 'Image' | 'AlertDialog' | 'AndroidView' | ComposeV2RequiredPropsName ?
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
        (N extends 'AlertDialog' ? { dismissRequest: (this: ComposeNode<N>) => void } : {}) &
        (N extends ComposeV2NodeName ? ComposeV2NodeEvents[N] : {});
    type ComposeEventProps<N extends ComposeNodeName> = {
        [K in keyof ComposeNodeEvents<N> as K extends string ? `on${Capitalize<K>}` : never]?: ComposeNodeEvents<N>[K] | null;
    };
    type ComposeEventNames<N extends ComposeNodeName> = keyof ComposeNodeEvents<N> & string;
    type ComposeEventInputName<N extends ComposeNodeName> = ComposeEventNames<N> | `on${Capitalize<ComposeEventNames<N>>}`;
    type ComposeCanonicalEvent<K extends string> = K extends `on${infer E}` ? Uncapitalize<E> : K;
    type ComposeEventListener<N extends ComposeNodeName, K extends ComposeEventInputName<N>> =
        ComposeNodeEvents<N>[ComposeCanonicalEvent<K> & keyof ComposeNodeEvents<N>];
    type ComposeSlotName<N extends ComposeNodeName> =
        N extends ComposeV2NodeName ? ComposeV2SlotNames[N] :
        N extends ComposeFieldName ? 'label' | 'leadingIcon' | 'placeholder' | 'supportingText' | 'trailingIcon' :
        N extends 'AlertDialog' ? 'confirm' | 'dismiss' | 'icon' | 'text' | 'title' :
        N extends 'Scaffold' ? 'content' | 'snackbarHost' | 'topBar' :
        N extends 'TopAppBar' ? 'actions' | 'navigationIcon' | 'title' :
        N extends Exclude<ComposeManyChildrenName, 'LazyColumn' | 'LazyRow'> | 'Surface' ? 'content' : never;
    type ComposeSlotFields<N extends ComposeNodeName> = { [S in ComposeSlotName<N>]?: ComposeSlotInput; };
    type ComposeSlots<N extends ComposeNodeName> = [ComposeSlotName<N>] extends [never] ? Readonly<Record<string, never>> : ComposeSlotFields<N>;
    type ComposeScriptCatalogProps<N extends ComposeNodeName> = N extends 'LazyColumn' | 'LazyRow' | 'LazyVerticalGrid' ?
        Omit<ComposeScriptCatalog[N], 'contentPadding'> & { contentPadding?: ComposePaddingInput } : ComposeScriptCatalog[N];
    type ComposeMutableProps<N extends ComposeNodeName> = object & Partial<ComposeScriptCatalogProps<N>> & ComposeShortcutProps &
        ComposeEventProps<N> & ComposeSlotFields<N> & { modifier?: ComposeModifier | null; ref?: ComposeRef | null; slots?: ComposeSlots<N> | null; };
    type ComposeProps<N extends ComposeNodeName> = ComposeScriptCatalogProps<N> & ComposeMutableProps<N> & {
        key?: string | number | null;
        children?: ComposeChildrenInput<N>;
    } & (N extends 'AlertDialog' ?
        ({ confirm: ComposeRequiredSlotInput } | { slots: ComposeSlots<N> & { confirm: ComposeRequiredSlotInput } }) : {}) &
        (N extends ComposeV2NodeName ? [ComposeV2RequiredSlots[N]] extends [never] ? {} :
            ({ [S in ComposeV2RequiredSlots[N]]: ComposeRequiredSlotInput } |
                { slots: ComposeSlots<N> & { [S in ComposeV2RequiredSlots[N]]: ComposeRequiredSlotInput } }) : {});

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
        /** A number is a lazy-list/grid item or pager page index. Offsets use physical pixels. */
        scrollTo(target: ComposeScrollTarget): this;
        toString(): string;
    }
    type ComposeNode<N extends ComposeNodeName = ComposeNodeName> = N extends ComposeNodeName ?
        ComposeNodeHandle<N> & ComposeNodeShortcuts & ComposeNodeProperties[N] &
        (N extends ComposeFieldName ? { edit(edit: ComposeEdit): ComposeNode<N> } : {}) : never;

    interface ComposeMemoOptions {
        /** Stable slot identity within one scope, such as a list row key; duplicates are rejected. */
        key?: string | number | null;
    }
    interface ComposeMountOptions {
        /** Omitted/null inherits module defaults; explicit undefined supplies empty overrides. */
        theme?: ComposeTheme | null | undefined;
    }
    interface ComposeFloatyOptions extends ComposeMountOptions {
        raw?: boolean; x?: number; y?: number;
        /** Physical integer pixels, MATCH_PARENT=-1, WRAP_CONTENT=-2. */
        width?: number; height?: number; touchable?: boolean; focusable?: boolean;
    }
    type ComposeDialogType = 'alert' | 'bottomSheet';
    interface ComposeDialogOptions extends ComposeMountOptions {
        /** Omitted means alert; explicit null/undefined are invalid at runtime. */
        type?: ComposeDialogType;
        /** Omitted means true. false disables back/outside/swipe dismissal; close() still works. */
        cancelable?: boolean;
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
        type DialogOptions = ComposeDialogOptions;
        type DialogType = ComposeDialogType;
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

// <autojs6-compose-catalog:v2>
// Generated from org.autojs.plugin.compose.api.v2.ComposeUiV2.catalog; schema=1; contract=2; sha256=f46009f6ca2c69cfcbfcfa8f829ec678ffe81e647eb48812db6ee2b2f087f712.
// Input helper types are defined by the surrounding P6 declaration file.
declare namespace Internal {
    interface ComposeV2CatalogProps {
        /** @invocation NODE @children NONE @scope ANY */
        "AssistChip": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
        };
        /** @invocation NODE @children SINGLE @scope ANY */
        "Badge": {
            /** @catalog {"constraints":{},"default":{"kind":"STRING","value":""},"update":"SET_PROPS"} */
            "text"?: string;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "visible"?: boolean;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "DatePicker": {
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"picker"},"update":"SET_PROPS"} */
            "displayMode"?: "input" | "picker";
            /** @catalog {"constraints":{"integral":true,"maximum":253402214400000.0,"minimum":-12212553600000.0},"default":{"kind":"NULL","value":null},"update":"SET_PROPS"} */
            "selectedDateMillis"?: null | number;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "showModeToggle"?: boolean;
            /** @catalog {"constraints":{"integral":true,"maximum":9999.0,"minimum":1583.0},"default":{"kind":"NUMBER","value":2100.0},"update":"SET_PROPS"} */
            "yearEnd"?: number;
            /** @catalog {"constraints":{"integral":true,"maximum":9999.0,"minimum":1583.0},"default":{"kind":"NUMBER","value":1900.0},"update":"SET_PROPS"} */
            "yearStart"?: number;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "DropdownMenu": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "open"?: boolean;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "DropdownMenuItem": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "FilterChip": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "selected"?: boolean;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "FloatingActionButton": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "shape"?: ComposeShapeInput;
        };
        /** @invocation NODE @children LAZY_ITEMS @scope ANY */
        "HorizontalPager": {
            /** @catalog {"constraints":{"integral":true,"maximum":2147483647.0,"minimum":0.0},"default":{"kind":"NUMBER","value":0.0},"update":"SET_PROPS"} */
            "page"?: number;
            /** @catalog {"constraints":{"minimum":0.0},"default":{"kind":"DP","value":0.0},"update":"SET_PROPS"} */
            "pageSpacing"?: ComposeDpInput;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "userScrollEnabled"?: boolean;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "InputChip": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "selected"?: boolean;
        };
        /** @invocation NODE @children LAZY_ITEMS @scope ANY */
        "LazyVerticalGrid": {
            /** @catalog {"constraints":{"integral":true,"maximum":64.0,"minimum":1.0},"default":{"kind":"NUMBER","value":2.0},"update":"SET_PROPS"} */
            "columns"?: number;
            /** @catalog {"constraints":{"listKinds":["DP"],"listMaximum":4,"listMinimum":1},"default":{"kind":"DP","value":0.0},"update":"SET_PROPS"} */
            "contentPadding"?: ComposeDpInput | ReadonlyArray<ComposeDpInput>;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "reverseLayout"?: boolean;
            /** @catalog {"constraints":{"minimum":0.0},"default":{"kind":"DP","value":0.0},"update":"SET_PROPS"} */
            "spacing"?: ComposeDpInput;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "userScrollEnabled"?: boolean;
        };
        /** @invocation NODE @children SINGLE @scope ANY */
        "ModalBottomSheet": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "cancelable"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "open"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "shape"?: ComposeShapeInput;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "NavigationBar": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "NavigationBarItem": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "alwaysShowLabel"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "selected"?: boolean;
        };
        /** @invocation NODE @children SINGLE @scope ANY */
        "NavigationDrawer": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "gesturesEnabled"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "open"?: boolean;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "NavigationDrawerItem": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "selected"?: boolean;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "NavigationRail": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "NavigationRailItem": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "alwaysShowLabel"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "selected"?: boolean;
        };
        /** @invocation NODE @children SINGLE @scope ANY */
        "PullToRefresh": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "refreshing"?: boolean;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "SearchBar": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "expanded"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"STRING","value":""},"update":"SET_PROPS"} */
            "query"?: string;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "SegmentedButton": {
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"single"},"update":"SET_PROPS"} */
            "mode"?: "multi" | "single";
        };
        /** @invocation NODE @children NONE @scope ANY */
        "SegmentedButtonItem": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "selected"?: boolean;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "Tab": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "TabRow": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "scrollable"?: boolean;
            /** @catalog {"constraints":{"integral":true,"maximum":2147483647.0,"minimum":0.0},"default":{"kind":"NUMBER","value":0.0},"update":"SET_PROPS"} */
            "selectedIndex"?: number;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "TimePicker": {
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"picker"},"update":"SET_PROPS"} */
            "displayMode"?: "input" | "picker";
            /** @catalog {"constraints":{"integral":true,"maximum":23.0,"minimum":0.0},"default":{"kind":"NUMBER","value":0.0},"update":"SET_PROPS"} */
            "hour"?: number;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "is24Hour"?: boolean;
            /** @catalog {"constraints":{"integral":true,"maximum":59.0,"minimum":0.0},"default":{"kind":"NUMBER","value":0.0},"update":"SET_PROPS"} */
            "minute"?: number;
        };
        /** @invocation NODE @children SINGLE @scope ANY */
        "Tooltip": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "open"?: boolean;
        };
    }
    type ComposeV2NodeName = "AssistChip" | "Badge" | "DatePicker" | "DropdownMenu" | "DropdownMenuItem" | "FilterChip" | "FloatingActionButton" | "HorizontalPager" | "InputChip" | "LazyVerticalGrid" | "ModalBottomSheet" | "NavigationBar" | "NavigationBarItem" | "NavigationDrawer" | "NavigationDrawerItem" | "NavigationRail" | "NavigationRailItem" | "PullToRefresh" | "SearchBar" | "SegmentedButton" | "SegmentedButtonItem" | "Tab" | "TabRow" | "TimePicker" | "Tooltip";
    type ComposeV2CommandName = never;
    type ComposeV2ManyChildrenName = "DropdownMenu" | "FloatingActionButton" | "HorizontalPager" | "LazyVerticalGrid" | "NavigationBar" | "NavigationRail" | "SearchBar" | "SegmentedButton" | "TabRow";
    type ComposeV2SingleChildName = "Badge" | "ModalBottomSheet" | "NavigationDrawer" | "PullToRefresh" | "Tooltip";
    type ComposeV2RequiredPropsName = "AssistChip" | "DropdownMenu" | "DropdownMenuItem" | "FilterChip" | "InputChip" | "NavigationBarItem" | "NavigationDrawer" | "NavigationDrawerItem" | "NavigationRailItem" | "SegmentedButtonItem" | "Tooltip";
    interface ComposeV2SlotNames {
        "AssistChip": "label" | "leadingIcon" | "trailingIcon";
        "Badge": "content";
        "DatePicker": never;
        "DropdownMenu": "anchor";
        "DropdownMenuItem": "leadingIcon" | "text" | "trailingIcon";
        "FilterChip": "label" | "leadingIcon" | "trailingIcon";
        "FloatingActionButton": "content";
        "HorizontalPager": never;
        "InputChip": "label" | "leadingIcon" | "trailingIcon";
        "LazyVerticalGrid": never;
        "ModalBottomSheet": "content";
        "NavigationBar": never;
        "NavigationBarItem": "icon" | "label";
        "NavigationDrawer": "content" | "drawerContent";
        "NavigationDrawerItem": "badge" | "icon" | "label";
        "NavigationRail": "header";
        "NavigationRailItem": "icon" | "label";
        "PullToRefresh": "content";
        "SearchBar": "content" | "leadingIcon" | "placeholder" | "trailingIcon";
        "SegmentedButton": never;
        "SegmentedButtonItem": "icon" | "label";
        "Tab": "icon" | "text";
        "TabRow": never;
        "TimePicker": never;
        "Tooltip": "content" | "tooltip";
    }
    interface ComposeV2RequiredSlots {
        "AssistChip": "label";
        "Badge": never;
        "DatePicker": never;
        "DropdownMenu": "anchor";
        "DropdownMenuItem": "text";
        "FilterChip": "label";
        "FloatingActionButton": never;
        "HorizontalPager": never;
        "InputChip": "label";
        "LazyVerticalGrid": never;
        "ModalBottomSheet": never;
        "NavigationBar": never;
        "NavigationBarItem": "icon";
        "NavigationDrawer": "drawerContent";
        "NavigationDrawerItem": "label";
        "NavigationRail": never;
        "NavigationRailItem": "icon";
        "PullToRefresh": never;
        "SearchBar": never;
        "SegmentedButton": never;
        "SegmentedButtonItem": "label";
        "Tab": never;
        "TabRow": never;
        "TimePicker": never;
        "Tooltip": "tooltip";
    }
    interface ComposeV2NodeEvents {
        "AssistChip": {
        };
        "Badge": {
        };
        "DatePicker": {
            "dateChange": (this: ComposeNode<"DatePicker">, selectedDateMillis: number | null) => void;
            "displayModeChange": (this: ComposeNode<"DatePicker">, displayMode: "input" | "picker") => void;
        };
        "DropdownMenu": {
            "dismissRequest": (this: ComposeNode<"DropdownMenu">) => void;
        };
        "DropdownMenuItem": {
        };
        "FilterChip": {
            "selectedChange": (this: ComposeNode<"FilterChip">, selected: boolean) => void;
        };
        "FloatingActionButton": {
        };
        "HorizontalPager": {
            "pageChange": (this: ComposeNode<"HorizontalPager">, page: number) => void;
        };
        "InputChip": {
            "selectedChange": (this: ComposeNode<"InputChip">, selected: boolean) => void;
        };
        "LazyVerticalGrid": {
        };
        "ModalBottomSheet": {
            "dismissRequest": (this: ComposeNode<"ModalBottomSheet">) => void;
        };
        "NavigationBar": {
        };
        "NavigationBarItem": {
        };
        "NavigationDrawer": {
            "openChange": (this: ComposeNode<"NavigationDrawer">, open: boolean) => void;
        };
        "NavigationDrawerItem": {
        };
        "NavigationRail": {
        };
        "NavigationRailItem": {
        };
        "PullToRefresh": {
            "refresh": (this: ComposeNode<"PullToRefresh">) => void;
        };
        "SearchBar": {
            "expandedChange": (this: ComposeNode<"SearchBar">, expanded: boolean) => void;
            "queryChange": (this: ComposeNode<"SearchBar">, text: string) => void;
            "search": (this: ComposeNode<"SearchBar">, text: string) => void;
        };
        "SegmentedButton": {
        };
        "SegmentedButtonItem": {
            "selectedChange": (this: ComposeNode<"SegmentedButtonItem">, selected: boolean) => void;
        };
        "Tab": {
        };
        "TabRow": {
        };
        "TimePicker": {
            "timeChange": (this: ComposeNode<"TimePicker">, hour: number, minute: number) => void;
        };
        "Tooltip": {
            "openChange": (this: ComposeNode<"Tooltip">, open: boolean) => void;
        };
    }
    interface ComposeNodeProperties {
        "AssistChip": {
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
        };
        "Badge": {
            get "text"(): string;
            set "text"(value: string);
            get "visible"(): boolean;
            set "visible"(value: boolean);
        };
        "DatePicker": {
            get "displayMode"(): "input" | "picker";
            set "displayMode"(value: "input" | "picker");
            get "selectedDateMillis"(): null | number;
            set "selectedDateMillis"(value: null | number);
            get "showModeToggle"(): boolean;
            set "showModeToggle"(value: boolean);
            get "yearEnd"(): number;
            set "yearEnd"(value: number);
            get "yearStart"(): number;
            set "yearStart"(value: number);
        };
        "DropdownMenu": {
            get "open"(): boolean;
            set "open"(value: boolean);
        };
        "DropdownMenuItem": {
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
        };
        "FilterChip": {
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
            get "selected"(): boolean;
            set "selected"(value: boolean);
        };
        "FloatingActionButton": {
            get "containerColor"(): number | null | undefined;
            set "containerColor"(value: ComposeColorInput | null);
            get "contentColor"(): number | null | undefined;
            set "contentColor"(value: ComposeColorInput | null);
            get "shape"(): ComposeShapeValue | undefined;
            set "shape"(value: ComposeShapeInput);
        };
        "HorizontalPager": {
            get "page"(): number;
            set "page"(value: number);
            get "pageSpacing"(): number;
            set "pageSpacing"(value: ComposeDpInput);
            get "userScrollEnabled"(): boolean;
            set "userScrollEnabled"(value: boolean);
        };
        "InputChip": {
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
            get "selected"(): boolean;
            set "selected"(value: boolean);
        };
        "LazyVerticalGrid": {
            get "columns"(): number;
            set "columns"(value: number);
            get "contentPadding"(): number | Array<number>;
            set "contentPadding"(value: ComposePaddingInput);
            get "reverseLayout"(): boolean;
            set "reverseLayout"(value: boolean);
            get "spacing"(): number;
            set "spacing"(value: ComposeDpInput);
            get "userScrollEnabled"(): boolean;
            set "userScrollEnabled"(value: boolean);
        };
        "ModalBottomSheet": {
            get "cancelable"(): boolean;
            set "cancelable"(value: boolean);
            get "containerColor"(): number | null | undefined;
            set "containerColor"(value: ComposeColorInput | null);
            get "contentColor"(): number | null | undefined;
            set "contentColor"(value: ComposeColorInput | null);
            get "open"(): boolean;
            set "open"(value: boolean);
            get "shape"(): ComposeShapeValue | undefined;
            set "shape"(value: ComposeShapeInput);
        };
        "NavigationBar": {
            get "containerColor"(): number | null | undefined;
            set "containerColor"(value: ComposeColorInput | null);
            get "contentColor"(): number | null | undefined;
            set "contentColor"(value: ComposeColorInput | null);
        };
        "NavigationBarItem": {
            get "alwaysShowLabel"(): boolean;
            set "alwaysShowLabel"(value: boolean);
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
            get "selected"(): boolean;
            set "selected"(value: boolean);
        };
        "NavigationDrawer": {
            get "gesturesEnabled"(): boolean;
            set "gesturesEnabled"(value: boolean);
            get "open"(): boolean;
            set "open"(value: boolean);
        };
        "NavigationDrawerItem": {
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
            get "selected"(): boolean;
            set "selected"(value: boolean);
        };
        "NavigationRail": {
            get "containerColor"(): number | null | undefined;
            set "containerColor"(value: ComposeColorInput | null);
            get "contentColor"(): number | null | undefined;
            set "contentColor"(value: ComposeColorInput | null);
        };
        "NavigationRailItem": {
            get "alwaysShowLabel"(): boolean;
            set "alwaysShowLabel"(value: boolean);
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
            get "selected"(): boolean;
            set "selected"(value: boolean);
        };
        "PullToRefresh": {
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
            get "refreshing"(): boolean;
            set "refreshing"(value: boolean);
        };
        "SearchBar": {
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
            get "expanded"(): boolean;
            set "expanded"(value: boolean);
            get "query"(): string;
            set "query"(value: string);
        };
        "SegmentedButton": {
            get "mode"(): "multi" | "single";
            set "mode"(value: "multi" | "single");
        };
        "SegmentedButtonItem": {
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
            get "selected"(): boolean;
            set "selected"(value: boolean);
        };
        "Tab": {
            get "enabled"(): boolean;
            set "enabled"(value: boolean);
        };
        "TabRow": {
            get "containerColor"(): number | null | undefined;
            set "containerColor"(value: ComposeColorInput | null);
            get "contentColor"(): number | null | undefined;
            set "contentColor"(value: ComposeColorInput | null);
            get "scrollable"(): boolean;
            set "scrollable"(value: boolean);
            get "selectedIndex"(): number;
            set "selectedIndex"(value: number);
        };
        "TimePicker": {
            get "displayMode"(): "input" | "picker";
            set "displayMode"(value: "input" | "picker");
            get "hour"(): number;
            set "hour"(value: number);
            get "is24Hour"(): boolean;
            set "is24Hour"(value: boolean);
            get "minute"(): number;
            set "minute"(value: number);
        };
        "Tooltip": {
            get "open"(): boolean;
            set "open"(value: boolean);
        };
    }
    interface ComposeNodePropertyValues {
        "AssistChip": {
            "enabled": boolean;
        };
        "Badge": {
            "text": string;
            "visible": boolean;
        };
        "DatePicker": {
            "displayMode": "input" | "picker";
            "selectedDateMillis": null | number;
            "showModeToggle": boolean;
            "yearEnd": number;
            "yearStart": number;
        };
        "DropdownMenu": {
            "open": boolean;
        };
        "DropdownMenuItem": {
            "enabled": boolean;
        };
        "FilterChip": {
            "enabled": boolean;
            "selected": boolean;
        };
        "FloatingActionButton": {
            "containerColor": number | null | undefined;
            "contentColor": number | null | undefined;
            "shape": ComposeShapeValue | undefined;
        };
        "HorizontalPager": {
            "page": number;
            "pageSpacing": number;
            "userScrollEnabled": boolean;
        };
        "InputChip": {
            "enabled": boolean;
            "selected": boolean;
        };
        "LazyVerticalGrid": {
            "columns": number;
            "contentPadding": number | Array<number>;
            "reverseLayout": boolean;
            "spacing": number;
            "userScrollEnabled": boolean;
        };
        "ModalBottomSheet": {
            "cancelable": boolean;
            "containerColor": number | null | undefined;
            "contentColor": number | null | undefined;
            "open": boolean;
            "shape": ComposeShapeValue | undefined;
        };
        "NavigationBar": {
            "containerColor": number | null | undefined;
            "contentColor": number | null | undefined;
        };
        "NavigationBarItem": {
            "alwaysShowLabel": boolean;
            "enabled": boolean;
            "selected": boolean;
        };
        "NavigationDrawer": {
            "gesturesEnabled": boolean;
            "open": boolean;
        };
        "NavigationDrawerItem": {
            "enabled": boolean;
            "selected": boolean;
        };
        "NavigationRail": {
            "containerColor": number | null | undefined;
            "contentColor": number | null | undefined;
        };
        "NavigationRailItem": {
            "alwaysShowLabel": boolean;
            "enabled": boolean;
            "selected": boolean;
        };
        "PullToRefresh": {
            "enabled": boolean;
            "refreshing": boolean;
        };
        "SearchBar": {
            "enabled": boolean;
            "expanded": boolean;
            "query": string;
        };
        "SegmentedButton": {
            "mode": "multi" | "single";
        };
        "SegmentedButtonItem": {
            "enabled": boolean;
            "selected": boolean;
        };
        "Tab": {
            "enabled": boolean;
        };
        "TabRow": {
            "containerColor": number | null | undefined;
            "contentColor": number | null | undefined;
            "scrollable": boolean;
            "selectedIndex": number;
        };
        "TimePicker": {
            "displayMode": "input" | "picker";
            "hour": number;
            "is24Hour": boolean;
            "minute": number;
        };
        "Tooltip": {
            "open": boolean;
        };
    }
}
// </autojs6-compose-catalog:v2>
