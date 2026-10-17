/** Portable Compose data API. Effects return Promises; callbacks stay in the calling JS runtime. */
declare namespace RuntimeCompose {
    type ComposeColorInput = string | number;
    type ComposeDpInput = number | `${number}dp`;
    type ComposeSpInput = number | `${number}sp`;
    type ComposeImageInput = { readonly __autojs6ImageHandle: string } | `@drawable/${string}`;
    type ComposeIconNameInput = string;
    type ComposeShapeInput = 'rectangle' | 'rounded' | 'circle' | { shape: 'rectangle' | 'rounded' | 'circle'; radius?: ComposeDpInput };
    interface ComposeTextStyleInput { fontFamily?: string; fontSize?: ComposeSpInput; fontWeight?: number; italic?: boolean; lineHeight?: ComposeSpInput; letterSpacing?: ComposeSpInput }
    type ComposePaddingInput = ComposeDpInput | readonly ComposeDpInput[];
    type ComposeBoxAlignment = 'topStart' | 'topCenter' | 'topEnd' | 'centerStart' | 'center' | 'centerEnd' | 'bottomStart' | 'bottomCenter' | 'bottomEnd';
    type ComponentName = ComposeCatalogNodeName | ComposeV2NodeName;
    interface Catalog extends ComposeCatalogProps, ComposeV2CatalogProps {}
    interface Event { readonly type: string; readonly text?: string; readonly value?: number; readonly checked?: boolean; readonly editSeq?: number; readonly message?: string; readonly [key: string]: string | number | boolean | null | undefined }
    type Listener = (this: Node, event: Event) => void;
    type Child = Node | string | null | undefined | false | readonly Child[];
    interface Ref { current: Node | null }
    interface State<T> { value: T }
    interface SharedProps {
        key?: string | number; ref?: Ref; modifier?: Modifier; children?: Child;
        slots?: Readonly<Record<string, Child>>;
        w?: ComposeDpInput; h?: ComposeDpInput; padding?: ComposePaddingInput; bg?: ComposeColorInput;
        weight?: number; alpha?: number; testTag?: string; contentDescription?: string | null;
        [event: `on${string}`]: Listener | undefined;
    }
    type Props<N extends ComponentName> = Catalog[N] & SharedProps;
    interface Node<N extends ComponentName = ComponentName> {
        set(value: Partial<Props<N>>): this;
        get<K extends keyof Props<N>>(name: K): Props<N>[K];
        append(value: Child): this; insert(index: number, value: Child): this; remove(value: Node | number): this;
        replace(value: Child): this; clear(): this; slot(name: string, value: Child): this;
        on(name: string, callback: Listener): this; off(name: string, callback?: Listener): this;
        focus(): Promise<void>; blur(): Promise<void>;
        scrollTo(target: number | { index?: number; offset?: number }): Promise<void>;
        edit(value: { text?: string; selection?: { start: number; end: number } }): Promise<void>;
    }
    interface Theme { seed?: ComposeColorInput; colors?: Readonly<Record<string, ComposeColorInput>>; dark?: boolean | 'system'; dynamicColor?: boolean; typography?: { fontFamily?: string; scale?: number } }
    interface Options { theme?: Theme }
    interface DialogOptions extends Options { type?: 'alert' | 'bottomSheet'; cancelable?: boolean }
    /** Floating dimensions/position use physical pixels; -1/-2 select match/wrap content. */
    interface FloatyOptions extends Options { width?: number; height?: number; x?: number; y?: number; focusable?: boolean; touchable?: boolean }
    interface Session {
        readonly id: string; readonly root: Node | null; isClosed(): boolean;
        update<T>(callback: () => T): T; flush(): Promise<void>;
        render(root: Node | (() => Node)): Promise<void>; setTheme(theme: Theme): Promise<void>;
        post(callback: () => void, delay?: number): void;
        on(event: string, callback: (event: Event) => void): this; off(event: string, callback: (event: Event) => void): this;
        close(): Promise<void>;
        /** Requires a Scaffold with the default snackbar host; delivers one terminal callback. */
        showSnackbar(message: string, options?: { actionLabel?: string; duration?: 'short' | 'long' | 'indefinite'; onAction?: () => void; onDismiss?: () => void }): Promise<void>;
    }
    interface FloatySession extends Session {
        readonly session: Session;
        setPosition(x: number, y: number): Promise<void>; setSize(width: number, height: number): Promise<void>;
        requestFocus(): Promise<void>; disableFocus(): Promise<void>; setTouchable(touchable: boolean): Promise<void>;
        getX(): Promise<number>; getY(): Promise<number>; getWidth(): Promise<number>; getHeight(): Promise<number>;
    }
    interface Modifier {
        padding(all: ComposeDpInput): Modifier;
        padding(horizontal: ComposeDpInput, vertical: ComposeDpInput): Modifier;
        padding(start: ComposeDpInput, top: ComposeDpInput, end: ComposeDpInput, bottom: ComposeDpInput): Modifier;
        size(size: ComposeDpInput): Modifier;
        size(width: ComposeDpInput, height: ComposeDpInput): Modifier;
        width(width: ComposeDpInput): Modifier;
        height(height: ComposeDpInput): Modifier;
        fillMaxWidth(fraction?: number): Modifier;
        fillMaxHeight(fraction?: number): Modifier;
        fillMaxSize(fraction?: number): Modifier;
        /** Requires a Column/Row parent. */
        weight(weight: number, fill?: boolean): Modifier;
        /** Requires a Box parent. */
        align(alignment: ComposeBoxAlignment): Modifier;
        background(color: ComposeColorInput, shape?: ComposeShapeInput): Modifier;
        border(width: ComposeDpInput, color: ComposeColorInput, shape?: ComposeShapeInput): Modifier;
        clip(shape: ComposeShapeInput): Modifier;
        alpha(alpha: number): Modifier;
        clickable(callback: Listener, enabled?: boolean): Modifier;
        verticalScroll(enabled?: boolean): Modifier;
        horizontalScroll(enabled?: boolean): Modifier;
        offset(x: ComposeDpInput, y: ComposeDpInput): Modifier;
        aspectRatio(ratio: number): Modifier;
        testTag(tag: string): Modifier;
        semantics(contentDescription: string | null): Modifier;
    }
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
    type ComposeCatalogNodeName = "AlertDialog" | "Box" | "Button" | "Card" | "Checkbox" | "CircularProgressIndicator" | "Column" | "ElevatedButton" | "FilledTonalButton" | "HorizontalDivider" | "Icon" | "IconButton" | "Image" | "LazyColumn" | "LazyRow" | "LinearProgressIndicator" | "OutlinedButton" | "OutlinedTextField" | "RadioButton" | "Row" | "Scaffold" | "Slider" | "Spacer" | "Surface" | "Switch" | "Text" | "TextButton" | "TextField" | "TopAppBar";
    type ComposeV2NodeName = "AssistChip" | "Badge" | "DatePicker" | "DropdownMenu" | "DropdownMenuItem" | "FilterChip" | "FloatingActionButton" | "HorizontalPager" | "InputChip" | "LazyVerticalGrid" | "ModalBottomSheet" | "NavigationBar" | "NavigationBarItem" | "NavigationDrawer" | "NavigationDrawerItem" | "NavigationRail" | "NavigationRailItem" | "PullToRefresh" | "SearchBar" | "SegmentedButton" | "SegmentedButtonItem" | "Tab" | "TabRow" | "TimePicker" | "Tooltip";

    interface Core {
        (root: Node | (() => Node), options?: Options): Promise<Session>;
        createElement<N extends ComponentName>(type: N, props?: Props<N> | null, ...children: Child[]): Node<N>;
        state<T>(initial: T): State<T>; ref(): Ref; modifier(): Modifier;
        batch<T>(callback: () => T): T;
        memo<T extends Node>(build: () => T, dependencies: readonly unknown[], options?: { key?: string | number }): T;
        post(callback: () => void, delay?: number): unknown;
        mount(root: Node | (() => Node), options?: Options): Promise<Session>;
        dialog(root: Node | (() => Node), options?: DialogOptions): Promise<Session>;
        floaty(root: Node | (() => Node), options?: FloatyOptions): Promise<FloatySession>;
        isAvailable(): Promise<boolean>;
        version(): Promise<{ plugin: number; contract: number; compose: string }>;
        theme(): Theme | undefined; theme(value: Theme): Theme;
        readonly sessions: readonly Session[];
    }
    type Api = Core & { readonly [N in ComponentName]: (props?: Props<N> | null, ...children: Child[]) => Node<N> };
}
declare module "compose" {
    namespace compose {
        type Node<N extends RuntimeCompose.ComponentName = RuntimeCompose.ComponentName> = RuntimeCompose.Node<N>;
        type Session = RuntimeCompose.Session;
        type Event = RuntimeCompose.Event;
        type Theme = RuntimeCompose.Theme;
    }
    const compose: RuntimeCompose.Api;
    export = compose;
}
declare module "autojs6:compose" {
    import compose = require("compose");
    export = compose;
}
