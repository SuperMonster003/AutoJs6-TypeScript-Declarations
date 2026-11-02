// Type definitions for AutoJs6 internal module imgui
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
// Last modified: Nov 2, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/modules/imgui/ImguiModule.kt
 * @Source %AutoJs6-Plugin-ImGui%/app/src/main/assets/types/imgui.d.ts
 * @Source %AutoJs6-Plugin-ImGui%/app/src/main/assets/plugin/index.js
 */
/**
 * Dear ImGui facade exposed by AutoJs6 Plugin ImGui.
 *
 * The plugin is needed at run time, and the module exists in Rhino scripts only: Node.js and Bun scripts reach it through
 * engines.execScript. Paths such as docs/THREADING.md are in the repository of the plugin (AutoJs6-Plugin-ImGui).
 *
 * Conventions of this file:
 * - Units: Android window geometry (createWindow options, Session fields and event payloads) is dp; coordinates and sizes
 *   inside a frame (positions, draw lists, widget sizes) are px, and ui.dp converts. A member with another unit says so.
 * - Threads: every callback runs on the script thread that called createWindow (docs/THREADING.md). The members of
 *   {@link ImGui.ApiCore} must be called inside a frame, that is from the render callback on that thread, and throw
 *   otherwise, unless their comment says "Any time" (no session needed) or "While a session runs" (no frame needed).
 *   A worker thread must not call any of them.
 * - Errors: a value of the wrong type, NaN or out of range throws TypeError or RangeError naming the function and the
 *   argument.
 *
 * @example
 * const enabled = imgui.bool(true);
 * imgui.createWindow(() => {
 *     imgui.begin("Typed window");
 *     imgui.checkbox("Enabled", enabled);
 *     imgui.end();
 * });
 */
declare namespace ImGui {
    /** Anything String() accepts: what a text function shows, converted with String(). */
    type Stringifiable = string | number | boolean | object | null | undefined;
    /** What JSON.stringify accepts: copied as JSON text. */
    type JsonSerializable = string | number | boolean | object | null;
    /** A Java object: android.view.View and so on. Its members come from the Java class. */
    type JavaObject = object;
    /** What a script threw: usually an Error, but a throw statement takes any value. */
    type Thrown = Stringifiable;
    /** A mutable reference: imgui.ref(...) ({value}) or imgui.bool / int / float / string (a one-element Java array). */
    type MutableValue<T> = ValueRef<T> | IndexedRef<T>;
    /** A mutable number array: imgui.floats([...]) / imgui.ints([...]) or {value: [...]}. */
    type NumberArrayValue = ValueRef<number[]> | NativeArray<number>;
    /** A position or a size: [x, y], {x, y}, or what getWindowPos and the like return. */
    type Point = readonly [number, number] | { x: number; y: number } | Vec2;
    /**
     * A color in one of four forms:
     * - a packed 32-bit integer in Dear ImGui order 0xAABBGGRR, as returned by imgui.colorU32;
     * - an array [r, g, b] or [r, g, b, a];
     * - an object {r, g, b, a?};
     * - a string "#rgb", "#rgba", "#rrggbb" or "#rrggbbaa".
     *
     * Array and object components are 0..1; a component above 1 is read as 0..255. Alpha defaults to 1. Functions that
     * take a color also accept the components positionally (r, g, b, a). An invalid color throws TypeError or
     * RangeError naming the function and the argument.
     */
    type Color =
        | number
        | string
        | readonly number[]
        | { r: number; g: number; b: number; a?: number };
    /** A value of {@link ApiCore.Themes}. */
    type ThemeName =
        | "dark"
        | "light"
        | "classic"
        | "pink"
        | "blue"
        | "modern-dark"
        | "cyan-dusk"
        | "orange-dark"
        | "crystal-clear"
        | "vibrant-night"
        | "purple-dream";
    /** The name of a {@link ApiCore.StyleVar} value. */
    type StyleVarName = "Alpha" | "DisabledAlpha" | "WindowPadding" | "WindowRounding" | "WindowBorderSize" | "WindowMinSize" | "WindowTitleAlign" | "ChildRounding" | "ChildBorderSize" | "PopupRounding" | "PopupBorderSize" | "FramePadding" | "FrameRounding" | "FrameBorderSize" | "ItemSpacing" | "ItemInnerSpacing" | "IndentSpacing" | "CellPadding" | "ScrollbarSize" | "ScrollbarRounding" | "ScrollbarPadding" | "GrabMinSize" | "GrabRounding" | "ImageRounding" | "ImageBorderSize" | "TabRounding" | "TabBorderSize" | "TabMinWidthBase" | "TabMinWidthShrink" | "TabBarBorderSize" | "TabBarOverlineSize" | "TableAngledHeadersAngle" | "TableAngledHeadersTextAlign" | "TreeLinesSize" | "TreeLinesRounding" | "MenuItemRounding" | "SelectableRounding" | "DragDropTargetRounding" | "ButtonTextAlign" | "SelectableTextAlign" | "SeparatorSize" | "SeparatorTextBorderSize" | "SeparatorTextAlign" | "SeparatorTextPadding";
    /** The name of a {@link ApiCore.Col} value. */
    type ColName = "Text" | "TextDisabled" | "WindowBg" | "ChildBg" | "PopupBg" | "Border" | "BorderShadow" | "FrameBg" | "FrameBgHovered" | "FrameBgActive" | "TitleBg" | "TitleBgActive" | "TitleBgCollapsed" | "MenuBarBg" | "ScrollbarBg" | "ScrollbarGrab" | "ScrollbarGrabHovered" | "ScrollbarGrabActive" | "CheckMark" | "CheckboxSelectedBg" | "SliderGrab" | "SliderGrabActive" | "Button" | "ButtonHovered" | "ButtonActive" | "Header" | "HeaderHovered" | "HeaderActive" | "Separator" | "SeparatorHovered" | "SeparatorActive" | "ResizeGrip" | "ResizeGripHovered" | "ResizeGripActive" | "InputTextCursor" | "TabHovered" | "Tab" | "TabSelected" | "TabSelectedOverline" | "TabDimmed" | "TabDimmedSelected" | "TabDimmedSelectedOverline" | "PlotLines" | "PlotLinesHovered" | "PlotHistogram" | "PlotHistogramHovered" | "TableHeaderBg" | "TableBorderStrong" | "TableBorderLight" | "TableRowBg" | "TableRowBgAlt" | "TextLink" | "TextSelectedBg" | "TreeLines" | "DragDropTarget" | "DragDropTargetBg" | "UnsavedMarker" | "NavCursor" | "NavWindowingHighlight" | "NavWindowingDimBg" | "ModalWindowDimBg";
    /** A value of {@link ApiCore.Appearance}. */
    type AppearanceName = "flat" | "rounded" | "card";
    /** Which touches the overlay takes: all, none, or those on root windows ("auto"). */
    type TouchMode = "touchable" | "passthrough" | "auto";
    /** Where a session draws: a floaty overlay, an AutoJs6 Activity, or a privileged layer. */
    type WindowMode = "overlay" | "activity" | "privileged";
    /** The launcher of a privileged session; "auto" prefers an operational Shizuku service. */
    type PrivilegedBackend = "auto" | "shizuku" | "root";
    /** The launcher a privileged session ended up with. */
    type ActivePrivilegedBackend = Exclude<PrivilegedBackend, "auto">;
    /** How far a backend is usable. */
    type BackendStatus = "available" | "experimental" | "unavailable" | "deferred";
    /** Severity of a log entry or a toast. */
    type LogLevel = "log" | "debug" | "info" | "warn" | "error";
    /** Corner, edge or center of the surface that a component is anchored to. */
    type ToastPosition =
        | "top-left"
        | "top-center"
        | "top-right"
        | "center"
        | "bottom-left"
        | "bottom-center"
        | "bottom-right";
    /** A constant group of numbers, such as WindowFlags. */
    type NumericConstants<K extends string> = Readonly<Record<K, number>>;
    /** A constant group of strings, such as Icons. */
    type StringConstants<K extends string> = Readonly<Record<K, string>>;
    /** The body of a with* scope; it runs on the script thread, inside the frame. */
    type FrameBody = () => void;
    /**
     * Draws one frame; it runs on the script thread. ui is the API object (the same as imgui), session the window.
     * Do not block here: see docs/THREADING.md.
     */
    type RenderCallback = (ui: Api, session: Session) => void;
    /**
     * A file path (relative paths resolve with files.path), encoded image bytes (number[], Java byte[], ArrayBuffer or
     * a typed array, ByteBuffer, InputStream), an android.graphics.Bitmap or an AutoJs6 Image (images.read,
     * images.captureScreen, ...).
     */
    type TextureSource = string | readonly number[] | ArrayBuffer | ArrayBufferView | object;

    /** A plain mutable reference, as imgui.ref returns. */
    interface ValueRef<T> {
        /** The current value. Widgets read it and write it back. */
        value: T;
    }

    /** A one-element Java array returned by bool/int/float/string. */
    interface IndexedRef<T> {
        /** The current value. Widgets read it and write it back. */
        0: T;
        /** Always 1. */
        readonly length: 1;
    }

    interface BackendCapabilities {
        /** Version of this structure. */
        readonly schemaVersion: number;
        /** Android SDK level of the device. */
        readonly sdk: number;
        /** Overlay and Activity windows. */
        readonly window: Readonly<{
            /** How far it is usable. */
            status: BackendStatus;
            /** Whether it is meant for production use. */
            productionReady: boolean;
            /** Whether overlay windows need the overlay permission on this device. */
            requiresOverlayPermission: boolean;
        }>;
        /** Splitting one touch between the window and the app below. */
        readonly splitTouch: Readonly<{
            /** How far it is usable. */
            status: BackendStatus;
            /** Whether it is meant for production use. */
            productionReady: boolean;
        }>;
        /** The privileged renderer. */
        readonly privileged: Readonly<{
            /** How far it is usable. */
            status: BackendStatus;
            /** Whether it is meant for production use. */
            productionReady: boolean;
            /** Version of the Binder protocol of the renderer. */
            protocolVersion: number;
            /** Version of the former socket protocol. */
            legacySocketProtocolVersion: number;
            /** How the script talks to the renderer. */
            transport: string;
            /** How the renderer process starts. */
            rendererProcess: string;
            /** Length of the session token in bits. */
            tokenBits: number;
            /** Whether the APK has the entry point of the renderer. */
            processEntrypoint: boolean;
            /** Whether the SurfaceControl API is available. */
            surfaceControlApi: boolean;
            /** Whether a launcher is worth trying on this device. */
            launcherCandidate: boolean;
            /** Whether the host offers its privilege bridge. */
            hostBridgeAvailable: boolean;
            /** Whether the host offers its root bridge. */
            rootBridgeAvailable: boolean;
            /** The root mode of the host. */
            rootMode: string;
            /** Whether a su binary was found. */
            rootBinaryPresent: boolean;
            /** Whether root is worth trying. */
            rootCandidate: boolean;
            /** Why root is not usable, empty otherwise. */
            rootError: string;
            /** Whether the host offers its Shizuku bridge. */
            shizukuBridgeAvailable: boolean;
            /** Whether Shizuku is installed. */
            shizukuInstalled: boolean;
            /** Whether the Shizuku service runs. */
            shizukuRunning: boolean;
            /** Whether AutoJs6 has the Shizuku permission. */
            shizukuPermission: boolean;
            /** Whether the Shizuku user service of the host is bound. */
            shizukuService: boolean;
            /** Whether Shizuku can start the renderer now. */
            shizukuOperational: boolean;
            /** Why Shizuku is not usable, empty otherwise. */
            shizukuError: string;
            /** Why it has this status, empty when nothing is wrong. */
            reason: string;
        }>;
        /** Reading touches from the input device, for privileged windows. */
        readonly directInput: Readonly<{
            /** How far it is usable. */
            status: BackendStatus;
            /** Whether it is meant for production use. */
            productionReady: boolean;
            /** Whether this build has the reader. */
            readerImplemented: boolean;
            /** Whether the app process can read the device itself. */
            appProcessReadable: boolean;
            /** Whether only a try at runtime can tell. */
            runtimeProbeRequired: boolean;
            /** How a touch is shared with the app below. */
            routingPolicy: string;
            /** Why it has this status, empty when nothing is wrong. */
            reason: string;
        }>;
        /** Dear ImGui docking. */
        readonly docking: Readonly<{
            /** How far it is usable. */
            status: BackendStatus;
            /** Whether it is meant for production use. */
            productionReady: boolean;
        }>;
        /** Dear ImGui multi-viewport. */
        readonly multiViewport: Readonly<{
            /** How far it is usable. */
            status: BackendStatus;
            /** Whether it is meant for production use. */
            productionReady: boolean;
        }>;
    }

    /** A Java primitive/object array returned by floats/bytes/strings. */
    interface NativeArray<T> {
        /** An element. */
        [index: number]: T;
        /** The number of elements. */
        readonly length: number;
    }

    /** Two numbers in a Java float array, as getWindowPos and the like return; px unless the function says otherwise. */
    interface Vec2 extends NativeArray<number> {
        /** x or width. */
        0: number;
        /** y or height. */
        1: number;
        /** Always 2. */
        readonly length: 2;
    }

    interface PlotOptions {
        /** Index of the plotted sample the plot starts at (it wraps around), 0 by default. */
        valuesOffset?: number;
        /** @deprecated Name read by 1.10.0 and earlier, used when valuesOffset is absent. */
        offset?: number;
        /** Text over the plot. */
        overlay?: string;
        /** Bottom of the plot; the smallest value by default. */
        scaleMin?: number;
        /** Top of the plot; the largest value by default. */
        scaleMax?: number;
        /** Width in px; 0 fits the item width. */
        width?: number;
        /** Height in px; 0 is one frame height. */
        height?: number;
        /** Plots every stride-th value (values[0], values[stride], ...), 1 by default. Counts values, not bytes. */
        stride?: number;
    }

    interface ListClipperOptions {
        /** Row height in px (frame coordinates). Omitted: measured from the first row. Must be > 0 when given. */
        itemHeight?: number;
        /** Row indices that are always submitted (for example a selected or focused row); indices outside 0..itemCount - 1 are ignored. */
        includeItems?: readonly number[];
    }

    /** One change of the selection, to apply to the selected ids. selectionStorage().apply does it for you. */
    interface SelectionRequest {
        /** "setAll": clear the selection, or select every item when selected is true. "setRange": set rangeFirstItem to rangeLastItem. */
        readonly type: "setAll" | "setRange";
        /** The state to give the items. */
        readonly selected: boolean;
        /** First id of the range; -1 for "setAll". Never greater than rangeLastItem. */
        readonly rangeFirstItem: number;
        /** Last id of the range, inclusive; -1 for "setAll". */
        readonly rangeLastItem: number;
        /** 1 when the range was selected from rangeFirstItem to rangeLastItem, -1 when backwards, 0 for "setAll". */
        readonly rangeDirection: number;
    }

    /** What beginMultiSelect and endMultiSelect return (a copy, ImGuiMultiSelectIO in C++). */
    interface MultiSelectIO {
        /** Apply them to the selection in this order. In beginMultiSelect the result has only "setAll" requests. */
        readonly requests: readonly SelectionRequest[];
        /** The anchor of a Shift range, -1 for none. With listClipper it must stay submitted: pass it in includeItems. */
        readonly rangeSrcItem: number;
        /** The id of the focused item if it was submitted, -1 for none. Pass it in includeItems as well. */
        readonly navIdItem: number;
        /** The focused item was selected. */
        readonly navIdSelected: boolean;
        /** The itemsCount given to beginMultiSelect, -1 if it was omitted. */
        readonly itemsCount: number;
    }

    /** The selected ids of one list (ImGuiSelectionBasicStorage in C++), kept in a JavaScript Set. */
    interface SelectionStorage {
        /** Number of selected ids. */
        readonly size: number;
        /**
         * Applies what beginMultiSelect or endMultiSelect returned, or a requests array. A "setAll" request that selects
         * needs the number of items, which comes from the first argument or from itemsCount; ids are then 0 to itemsCount - 1.
         * @returns This storage.
         */
        apply(requests: MultiSelectIO | readonly SelectionRequest[], itemsCount?: number): this;
        /** Whether an id is selected. */
        has(id: number): boolean;
        /** Selects or unselects one id from the script. */
        setItemSelected(id: number, selected: boolean): this;
        /** Unselects everything. */
        clear(): this;
        /** The selected ids in ascending order. */
        toArray(): number[];
    }

    interface TextureOptions {
        /** TextureFlags. */
        flags?: number;
        /** Same as TextureFlags.Nearest. */
        nearest?: boolean;
        /** Same as TextureFlags.Repeat. */
        repeat?: boolean;
        /** Same as TextureFlags.Mipmaps. */
        mipmaps?: boolean;
    }

    interface ImageOptions {
        /** Width in px; the texture width by default. */
        width?: number;
        /** Height in px; the texture height by default. */
        height?: number;
        /** Texture coordinates of the upper left corner, 0..1. */
        uv0?: Point;
        /** Texture coordinates of the lower right corner, 0..1. */
        uv1?: Point;
        /** Color behind the image. */
        background?: Color;
        /** Alias of background. */
        bg?: Color;
        /** Color the image is multiplied by. */
        tint?: Color;
    }

    interface DrawTextOptions {
        /** A Fonts value or the name of a font of WindowOptions.fonts. */
        font?: number | string;
        /** Font size in px; the current size by default. */
        size?: number;
        /** Wraps at this width in px; off by default. */
        wrapWidth?: number;
    }

    interface DrawPolylineOptions {
        /** Line width in px, default 1. */
        thickness?: number;
        /** Joins the last point to the first. */
        closed?: boolean | number;
        /** DrawFlags. */
        flags?: number;
    }

    interface DrawImageOptions {
        /** Texture coordinates of the upper left corner, 0..1. */
        uv0?: Point;
        /** Texture coordinates of the lower right corner, 0..1. */
        uv1?: Point;
        /** Color the image is multiplied by. */
        tint?: Color;
    }

    /** Texture coordinates of the four corners, in the order of the corner arguments of addImageQuad. */
    interface DrawImageQuadOptions {
        /** Texture coordinates of the first corner, 0..1. */
        uv1?: Point;
        /** Texture coordinates of the second corner. */
        uv2?: Point;
        /** Texture coordinates of the third corner. */
        uv3?: Point;
        /** Texture coordinates of the fourth corner. */
        uv4?: Point;
        /** Color the image is multiplied by. */
        tint?: Color;
    }

    interface DrawImageRoundedOptions extends DrawImageOptions {
        /** Which corners are rounded: DrawFlags.RoundCorners*; all by default. */
        flags?: number;
    }

    /** What acceptDragDropPayload and getDragDropPayload return. */
    interface DragDropPayload<Data = any> {
        /** The type given to setDragDropPayload, or a Dear ImGui type such as "_COL4F". */
        readonly type: string;
        /** A copy of the data, as JSON.parse(JSON.stringify(data)). A color from a color widget is [r, g, b] or [r, g, b, a]; null for other Dear ImGui types. */
        readonly data: Data;
        /** The target is hovered (only seen with DragDropFlags.AcceptBeforeDelivery). */
        readonly preview: boolean;
        /** The pointer was released over the target. */
        readonly delivery: boolean;
    }

    interface Texture {
        /** The Dear ImGui texture id. */
        readonly handle: number;
        /** Width in px; changes when update() loads an image of another size. */
        readonly width: number;
        /** Height in px; changes when update() loads an image of another size. */
        readonly height: number;
        /**
         * Replaces the pixels with a new image from the same kinds of source as createTexture. The same size reuses
         * the GL storage (glTexSubImage2D); another size reallocates it. The handle stays the same either way.
         */
        update(source: TextureSource): this;
        /** Whether dispose ran, or the session that owns the texture closed. */
        isDisposed(): boolean;
        /** Frees the GL texture; returns false when it was freed already. Any time on the script thread. */
        dispose(): boolean;
        /** Same as dispose. */
        close(): boolean;
        /** A short description for logs. */
        toString(): string;
    }

    interface DrawList {
        /** A DrawListLayer value. */
        readonly layer: number;
        /** Draws a line; coordinates, thickness and sizes of a draw list are px. */
        addLine(first: Point, second: Point, color: Color, thickness?: number): DrawList;
        /** Draws the outline of a rectangle. flags are DrawFlags. */
        addRect(
            minimum: Point,
            maximum: Point,
            color: Color,
            rounding?: number,
            thickness?: number,
            flags?: number,
        ): DrawList;
        /** Draws a filled rectangle. flags are DrawFlags. */
        addRectFilled(
            minimum: Point,
            maximum: Point,
            color: Color,
            rounding?: number,
            flags?: number,
        ): DrawList;
        /** Draws the outline of a circle; 0 segments picks a count from the radius. */
        addCircle(
            center: Point,
            radius: number,
            color: Color,
            segments?: number,
            thickness?: number,
        ): DrawList;
        /** Draws a filled circle; 0 segments picks a count from the radius. */
        addCircleFilled(center: Point, radius: number, color: Color, segments?: number): DrawList;
        /** Draws the outline of a triangle. */
        addTriangle(
            first: Point,
            second: Point,
            third: Point,
            color: Color,
            thickness?: number,
        ): DrawList;
        /** Draws a filled triangle. */
        addTriangleFilled(first: Point, second: Point, third: Point, color: Color): DrawList;
        /** Draws text at a position, without moving the layout cursor. */
        addText(position: Point, color: Color, text: Stringifiable, options?: DrawTextOptions): DrawList;
        /** Draws connected lines through up to 4096 points. */
        addPolyline(
            points: readonly Point[],
            color: Color,
            thickness?: number | DrawPolylineOptions,
            closed?: boolean | number,
        ): DrawList;
        /** Draws a cubic Bezier curve; 0 segments picks a count. */
        addBezierCubic(
            first: Point,
            second: Point,
            third: Point,
            fourth: Point,
            color: Color,
            thickness?: number,
            segments?: number,
        ): DrawList;
        /** Draws a texture in a rectangle. */
        addImage(texture: Texture, minimum: Point, maximum: Point, options?: DrawImageOptions): DrawList;
        /** Draws a quadratic Bezier curve; 0 segments picks a count. */
        addBezierQuadratic(
            first: Point,
            second: Point,
            third: Point,
            color: Color,
            thickness?: number,
            segments?: number,
        ): DrawList;
        /** Draws the outline of a quadrilateral. */
        addQuad(first: Point, second: Point, third: Point, fourth: Point, color: Color, thickness?: number): DrawList;
        /** Draws a filled quadrilateral. */
        addQuadFilled(first: Point, second: Point, third: Point, fourth: Point, color: Color): DrawList;
        /** @param segments The number of sides, 3 to 512. */
        addNgon(center: Point, radius: number, color: Color, segments: number, thickness?: number): DrawList;
        /** @param segments The number of sides, 3 to 512. */
        addNgonFilled(center: Point, radius: number, color: Color, segments: number): DrawList;
        /**
         * @param radius The radii along the two axes, in px.
         * @param rotation Radians.
         * @param segments 0 to 512; 0 picks a count from the radius.
         */
        addEllipse(
            center: Point,
            radius: Point,
            color: Color,
            rotation?: number,
            segments?: number,
            thickness?: number,
        ): DrawList;
        /** Draws a filled ellipse; see addEllipse. */
        addEllipseFilled(center: Point, radius: Point, color: Color, rotation?: number, segments?: number): DrawList;
        /** Draws a rectangle with a color in each corner, blended between them. */
        addRectFilledMultiColor(
            minimum: Point,
            maximum: Point,
            colorUpperLeft: Color,
            colorUpperRight: Color,
            colorBottomRight: Color,
            colorBottomLeft: Color,
        ): DrawList;
        /** @param points 3 to 4096 points of a convex polygon, in clockwise order for anti-aliasing. */
        addConvexPolyFilled(points: readonly Point[], color: Color): DrawList;
        /** @param points 3 to 4096 points of a simple polygon; slower than addConvexPolyFilled. */
        addConcavePolyFilled(points: readonly Point[], color: Color): DrawList;
        /** Draws a texture in a quadrilateral. */
        addImageQuad(
            texture: Texture,
            first: Point,
            second: Point,
            third: Point,
            fourth: Point,
            options?: DrawImageQuadOptions,
        ): DrawList;
        /** Draws a texture in a rectangle with rounded corners. */
        addImageRounded(
            texture: Texture,
            minimum: Point,
            maximum: Point,
            rounding: number,
            options?: DrawImageRoundedOptions,
        ): DrawList;

        // Path: add points, then finish with pathStroke, pathFillConvex or pathFillConcave, which clear the path.
        /** Starts a new path. */
        pathClear(): DrawList;
        /** Adds a point to the path. */
        pathLineTo(position: Point): DrawList;
        /**
         * @param angleMin Radians; 0 points right, angles grow clockwise.
         * @param angleMax Radians, at most 16 turns away from angleMin.
         * @param segments 0 to 512; 0 picks a count from the radius.
         */
        pathArcTo(center: Point, radius: number, angleMin: number, angleMax: number, segments?: number): DrawList;
        /**
         * An arc on the 12 steps of a clock, faster than pathArcTo: 0 points right, 3 down, 6 left, 9 up.
         * @param maxOf12 From minOf12 to minOf12 + 192.
         */
        pathArcToFast(center: Point, radius: number, minOf12: number, maxOf12: number): DrawList;
        /** Adds a cubic Bezier curve from the last point; 0 segments picks a count. */
        pathBezierCubicCurveTo(second: Point, third: Point, fourth: Point, segments?: number): DrawList;
        /** Adds a quadratic Bezier curve from the last point; 0 segments picks a count. */
        pathBezierQuadraticCurveTo(second: Point, third: Point, segments?: number): DrawList;
        /** Adds a rectangle to the path. flags are DrawFlags. */
        pathRect(minimum: Point, maximum: Point, rounding?: number, flags?: number): DrawList;
        /** @param flags DrawFlags.Closed joins the last point to the first. */
        pathStroke(color: Color, thickness?: number, flags?: number): DrawList;
        /** Fills the path as a convex polygon and clears it. */
        pathFillConvex(color: Color): DrawList;
        /** Fills the path as a simple polygon and clears it; slower than pathFillConvex. */
        pathFillConcave(color: Color): DrawList;

        /**
         * Clips what this draw list draws until popClipRect, in the same frame. It does not affect widgets and their
         * hit testing: use ui.pushClipRect for that.
         * @param intersectWithCurrent Also apply the current clip rectangle; false by default.
         */
        pushClipRect(minimum: Point, maximum: Point, intersectWithCurrent?: boolean): DrawList;
        /** Throws an Error without a matching pushClipRect in this frame. */
        popClipRect(): DrawList;

        /** Same as {@link DrawList.addLine}. */
        readonly AddLine: DrawList["addLine"];
        /** Same as {@link DrawList.addRect}. */
        readonly AddRect: DrawList["addRect"];
        /** Same as {@link DrawList.addRectFilled}. */
        readonly AddRectFilled: DrawList["addRectFilled"];
        /** Same as {@link DrawList.addCircle}. */
        readonly AddCircle: DrawList["addCircle"];
        /** Same as {@link DrawList.addCircleFilled}. */
        readonly AddCircleFilled: DrawList["addCircleFilled"];
        /** Same as {@link DrawList.addTriangle}. */
        readonly AddTriangle: DrawList["addTriangle"];
        /** Same as {@link DrawList.addTriangleFilled}. */
        readonly AddTriangleFilled: DrawList["addTriangleFilled"];
        /** Same as {@link DrawList.addText}. */
        readonly AddText: DrawList["addText"];
        /** Same as {@link DrawList.addPolyline}. */
        readonly AddPolyline: DrawList["addPolyline"];
        /** Same as {@link DrawList.addBezierCubic}. */
        readonly AddBezierCubic: DrawList["addBezierCubic"];
        /** Same as {@link DrawList.addImage}. */
        readonly AddImage: DrawList["addImage"];
        /** Same as {@link DrawList.addBezierQuadratic}. */
        readonly AddBezierQuadratic: DrawList["addBezierQuadratic"];
        /** Same as {@link DrawList.addQuad}. */
        readonly AddQuad: DrawList["addQuad"];
        /** Same as {@link DrawList.addQuadFilled}. */
        readonly AddQuadFilled: DrawList["addQuadFilled"];
        /** Same as {@link DrawList.addNgon}. */
        readonly AddNgon: DrawList["addNgon"];
        /** Same as {@link DrawList.addNgonFilled}. */
        readonly AddNgonFilled: DrawList["addNgonFilled"];
        /** Same as {@link DrawList.addEllipse}. */
        readonly AddEllipse: DrawList["addEllipse"];
        /** Same as {@link DrawList.addEllipseFilled}. */
        readonly AddEllipseFilled: DrawList["addEllipseFilled"];
        /** Same as {@link DrawList.addRectFilledMultiColor}. */
        readonly AddRectFilledMultiColor: DrawList["addRectFilledMultiColor"];
        /** Same as {@link DrawList.addConvexPolyFilled}. */
        readonly AddConvexPolyFilled: DrawList["addConvexPolyFilled"];
        /** Same as {@link DrawList.addConcavePolyFilled}. */
        readonly AddConcavePolyFilled: DrawList["addConcavePolyFilled"];
        /** Same as {@link DrawList.addImageQuad}. */
        readonly AddImageQuad: DrawList["addImageQuad"];
        /** Same as {@link DrawList.addImageRounded}. */
        readonly AddImageRounded: DrawList["addImageRounded"];
        /** Same as {@link DrawList.pathClear}. */
        readonly PathClear: DrawList["pathClear"];
        /** Same as {@link DrawList.pathLineTo}. */
        readonly PathLineTo: DrawList["pathLineTo"];
        /** Same as {@link DrawList.pathArcTo}. */
        readonly PathArcTo: DrawList["pathArcTo"];
        /** Same as {@link DrawList.pathArcToFast}. */
        readonly PathArcToFast: DrawList["pathArcToFast"];
        /** Same as {@link DrawList.pathBezierCubicCurveTo}. */
        readonly PathBezierCubicCurveTo: DrawList["pathBezierCubicCurveTo"];
        /** Same as {@link DrawList.pathBezierQuadraticCurveTo}. */
        readonly PathBezierQuadraticCurveTo: DrawList["pathBezierQuadraticCurveTo"];
        /** Same as {@link DrawList.pathRect}. */
        readonly PathRect: DrawList["pathRect"];
        /** Same as {@link DrawList.pathStroke}. */
        readonly PathStroke: DrawList["pathStroke"];
        /** Same as {@link DrawList.pathFillConvex}. */
        readonly PathFillConvex: DrawList["pathFillConvex"];
        /** Same as {@link DrawList.pathFillConcave}. */
        readonly PathFillConcave: DrawList["pathFillConcave"];
        /** Same as {@link DrawList.pushClipRect}. */
        readonly PushClipRect: DrawList["pushClipRect"];
        /** Same as {@link DrawList.popClipRect}. */
        readonly PopClipRect: DrawList["popClipRect"];
    }

    interface FontDefinition {
        /** The name for Session.fonts, pushFont and the like. */
        id?: string;
        /** Used when id is absent; font1, font2, ... by default. */
        name?: string;
        /** A file path. */
        path?: string;
        /** A path inside the assets of the plugin APK, instead of path. */
        asset?: string;
        /** Size in dp, 8..128; the default font size by default. */
        size?: number;
    }

    /**
     * Options of a floating Android button. Sizes and positions are dp; values out of range throw RangeError.
     */
    interface FloatingButtonOptions {
        /** Width and height in dp when width or height is omitted, default 56. */
        size?: number;
        /** Width in dp. */
        width?: number;
        /** Height in dp. */
        height?: number;
        /** Left edge in dp, clamped to the display. */
        x?: number;
        /** Top edge in dp, clamped to the display. */
        y?: number;
        /** Opacity 0..1. */
        alpha?: number;
        /** Background color. */
        backgroundColor?: Color;
        /** Border color. */
        borderColor?: Color;
        /** Border width in dp. */
        borderWidth?: number;
        /** Corner radius in dp, half the smaller side by default. */
        rounding?: number;
        /** Label color, white by default. */
        textColor?: Color;
        /** Label size in sp, default 16. */
        textSize?: number;
        /** Shadow elevation in dp, default 8. */
        elevation?: number;
        /** Whether the user can drag it, default true. */
        draggable?: boolean;
        /** Whether it takes touches, default true. */
        touchable?: boolean;
        /** Lets the touch reach the app below as well; the setting of the session by default. */
        moreTouch?: boolean;
        /** Whether it starts visible, default true. */
        visible?: boolean;
        /** true starts it hidden. */
        hidden?: boolean;
        /** FLAG_SECURE on the button; the setting of the session by default. */
        secure?: boolean;
        /** Runs on the script thread. */
        onClick?: (button: FloatingButton) => void;
        /** Runs on the script thread after the button moved. */
        onMoved?: (event: {
            readonly button: FloatingButton;
            readonly session: Session;
            /** New left edge in dp. */
            readonly x: number;
            /** New top edge in dp. */
            readonly y: number;
            /** "drag" when the user dragged the button, "api" for setPosition, "configuration" after a display change. */
            readonly source: string;
        }) => void;
    }

    /** A floating Android button. Fields are read-only; change them with the setters. */
    interface FloatingButton {
        /** The floaty window of the button. */
        readonly window: JavaObject;
        /** The Android view of the button. */
        readonly view: JavaObject;
        /** The session it belongs to. */
        readonly session: Session;
        /** The label. */
        readonly text: string;
        /** Left edge in dp. */
        readonly x: number;
        /** Top edge in dp. */
        readonly y: number;
        /** Width in dp. */
        readonly width: number;
        /** Height in dp. */
        readonly height: number;
        /** Opacity 0..1. */
        readonly alpha: number;
        /** Whether FLAG_SECURE is on. */
        readonly secure: boolean;
        /** Whether the touch reaches the app below as well. */
        readonly moreTouch: boolean;
        /** Whether it is shown. */
        readonly visible: boolean;
        /** Whether it takes touches. */
        readonly touchable: boolean;
        /** Whether close ran. */
        readonly closed: boolean;
        /** Changes the label. */
        setText(text: Stringifiable): FloatingButton;
        /** Moves the button to (x, y) in dp, clamped to the display; null keeps that coordinate. */
        setPosition(x: number | null, y: number | null): FloatingButton;
        /** Opacity 0..1. */
        setAlpha(alpha: number): FloatingButton;
        /** Switches FLAG_SECURE. */
        setSecure(secure: boolean): FloatingButton;
        /** Lets the touch reach the app below as well. */
        setMoreTouch(enabled: boolean): FloatingButton;
        /** Switches whether it takes touches. */
        setTouchable(touchable: boolean): FloatingButton;
        /** Shows or hides it. */
        setVisible(visible: boolean): FloatingButton;
        /** Shows it. */
        show(): FloatingButton;
        /** Hides it. */
        hide(): FloatingButton;
        /** Removes it. */
        close(): void;
    }

    /**
     * Options of imgui.createWindow. Sizes and positions of the Android window are dp (1 dp = imgui.density px);
     * coordinates inside a frame (setNextWindowPos, drawing, ...) stay px. A value of the wrong type, NaN or out of
     * range throws TypeError or RangeError naming the option.
     */
    interface WindowOptions extends StyleSizes {
        /** Where the session draws, "overlay" by default. */
        mode?: WindowMode;
        /** Privileged launcher selection. Auto prefers an operational host Shizuku service. */
        backend?: PrivilegedBackend;
        /** Alias of backend, used only when mode is privileged. */
        privilegedBackend?: PrivilegedBackend;
        /** Privileged child startup deadline in milliseconds, 1..15000, default 10000. */
        startupTimeout?: number;
        /** Touch-coordinate rotation in degrees; inferred from the display when omitted. */
        rotation?: 0 | 90 | 180 | 270;
        /** Overlay width in dp, at least 1, default 360; limited to the display. */
        width?: number;
        /** Alias of width. */
        w?: number;
        /** Overlay height in dp, at least 1, default 420; limited to the display. */
        height?: number;
        /** Alias of height. */
        h?: number;
        /** Left edge in dp, clamped to the display; 12 dp from the right edge by default. */
        x?: number;
        /** Top edge in dp, clamped to the display; 72 dp above the bottom edge by default. */
        y?: number;
        /** Frame rate while expanded, 15..120, default 60. */
        fps?: number;
        /** Frame rate while collapsed, 1..15, default 5. */
        collapsedFps?: number;
        /**
         * Frame rate after idleDelay ms without touch, IME or wheel input, 0..120, default 10; 0 keeps the full rate.
         * Any input returns to fps at once. Frame-driven animations need 0 (or Session.setIdleFps(0) while they run).
         */
        idleFps?: number;
        /** Milliseconds without input before the idle frame rate applies, 100..3600000, default 3000. */
        idleDelay?: number;
        /** Lets a touch on an empty part of an overlay move it (TouchMode.Touchable), default true. */
        movable?: boolean;
        /** Font file for the default font; the bundled fonts by default. */
        fontPath?: string;
        /** Default font size in dp, 8..64, default 16. */
        fontSize?: number;
        /** Additional fonts, at most 16; FontDefinition.size is dp, 8..128. */
        fonts?: readonly (string | FontDefinition)[];
        /**
         * Lets Android draw the CJK characters that fontPath and each entry of fonts lack, from the system fonts, for
         * characters outside the bundled subset (docs/LIMITS.md lists its coverage), default false. Each glyph is drawn
         * when first used and no font file stays in memory. A device without CJK system fonts keeps the bundled subset.
         */
        systemCjkFont?: boolean;
        /**
         * Lets two fingers change the font scale of the session, default false: a change of 24 dp in their distance
         * turns the two-finger scroll into a pinch until they lift. Read the result from Session.fontScale or the
         * "fontScaleChanged" event. Not available in privileged windows, whose direct input tracks one finger.
         */
        pinchZoom?: boolean;
        /** Where window positions are kept: a path, or true for ./imgui.ini; off by default. */
        iniPath?: string | boolean | null;
        /**
         * Text input, default true. Overlay and Activity windows connect inputText to the system IME. A privileged window
         * has no view for the IME: an active text field opens a temporary floaty text box instead (needs the overlay
         * permission of AutoJs6), and the layer is hidden until the box closes, because it covers the box and the
         * keyboard. The done key, the OK button or a touch outside the box insert the text at the cursor of the field.
         * false disables both.
         */
        ime?: boolean;
        /** Lets a flick keep scrolling, default true. */
        fling?: boolean;
        /** Fling deceleration, 0.5..30, default 5.5. */
        flingFriction?: number;
        /** Slowest fling in dp per second, default 80. */
        flingMinVelocity?: number;
        /** Fastest fling in dp per second, default 8000. */
        flingMaxVelocity?: number;
        /** Distance in dp a touch must move before it drags, default 10. */
        dragThreshold?: number;
        /** Turns a long press into a right click, default true. */
        longPressAsRightClick?: boolean;
        /** Long-press delay in milliseconds, 250..2000; the system long-press timeout by default. */
        longPressDuration?: number;
        /** Distance in dp a long press may move, default 10. */
        longPressSlop?: number;
        /** Lets a touch on a window reach the app below as well, default false. */
        moreTouch?: boolean;
        /** Which touches an overlay takes; true is Touchable, false Passthrough, and an overlay defaults to Auto. */
        touchMode?: TouchMode | boolean;
        /** Used when touchMode is absent. */
        touchable?: TouchMode | boolean;
        /** Window opacity 0..1, default 1. */
        alpha?: number;
        /** FLAG_SECURE: keeps the window out of screenshots, default false. */
        secure?: boolean;
        /** Hides the system bars in Activity mode, default true. */
        immersive?: boolean;
        /** Follows display size changes, default true. */
        responsive?: boolean;
        /** Resizes an overlay to its AlwaysAutoResize root windows, default true. */
        contentAutoResize?: boolean;
        /** false also turns contentAutoResize off. */
        autoResize?: boolean;
        /** Padding in dp added around the content when contentAutoResize is on, default 8. */
        contentPadding?: number;
        /** Smallest auto-resized width in dp, default 48. */
        contentMinWidth?: number;
        /** Smallest auto-resized height in dp, default 48. */
        contentMinHeight?: number;
        /** Largest auto-resized width in dp; the display width by default. */
        contentMaxWidth?: number;
        /** Largest auto-resized height in dp; the display height by default. */
        contentMaxHeight?: number;
        /** The theme to start with; "dark" by default. */
        theme?: ThemeName;
        /** A preset of rounding, borders and shadow. */
        appearance?: AppearanceName;
        /** Rounding of windows, frames, popups, ... in dp. */
        rounding?: number;
        /** Border size of windows, frames and popups in dp. */
        borderSize?: number;
        /** Style sizes and colors to start with. */
        style?: StyleProperties;
        /** Applied after style. */
        styleProperties?: StyleProperties;
        /** Window shadow: a boolean, an opacity 0..1 or a color. */
        shadow?: boolean | number | Color;
        /** Shadow color; goes before shadow. */
        shadowColor?: Color;
        /** The floating button that collapse shows, on by default except in privileged windows. */
        collapseButton?: boolean | FloatingButtonOptions;
        /** Label of that button, "IM" by default. */
        collapseLabel?: string;
        /**
         * Debug mode: usage errors Dear ImGui recovers from (for example begin without end) and failed assertions are
         * printed with console.warn and logged to logcat, and the Metrics and Debug Log windows are shown. Use a window
         * large enough for them. A render callback that runs longer than 250 ms also prints a console.warn, at most
         * once every 10 seconds (docs/THREADING.md).
         */
        debug?: boolean;
        /** Session event listeners; like Session.on, they run on the script thread. */
        events?: { [Name in SessionEventName]?: SessionEventListener<Name> };
        /** Listener of the "error" event, see {@link SessionErrorEvent}. */
        onError?: SessionEventListener<"error">;
        /** Listener of the "moved" event. */
        onMoved?: SessionEventListener<"moved">;
        /** Listener of the "resized" event. */
        onResized?: SessionEventListener<"resized">;
        /** Listener of the "ready" event. */
        onReady?: SessionEventListener<"ready">;
        /** Listener of the "surfaceRestored" event. */
        onSurfaceRestored?: SessionEventListener<"surfaceRestored">;
        /** Listener of the "collapsed" event. */
        onCollapsed?: SessionEventListener<"collapsed">;
        /** Listener of the "expanded" event. */
        onExpanded?: SessionEventListener<"expanded">;
        /** Listener of the "closed" event. */
        onClosed?: SessionEventListener<"closed">;
        /** Listener of the "configurationChanged" event. */
        onConfigurationChanged?: SessionEventListener<"configurationChanged">;
        /** Listener of the "touchableChanged" event. */
        onTouchableChanged?: SessionEventListener<"touchableChanged">;
        /** Listener of the "moreTouchChanged" event. */
        onMoreTouchChanged?: SessionEventListener<"moreTouchChanged">;
        /** Listener of the "alphaChanged" event. */
        onAlphaChanged?: SessionEventListener<"alphaChanged">;
        /** Listener of the "secureChanged" event. */
        onSecureChanged?: SessionEventListener<"secureChanged">;
        /** Listener of the "idle" event. */
        onIdle?: SessionEventListener<"idle">;
        /** Listener of the "active" event. */
        onActive?: SessionEventListener<"active">;
        /** Listener of the "back" event (Activity mode), see {@link SessionBackEvent}. */
        onBack?: SessionEventListener<"back">;
        /** Listener of the "fontScaleChanged" event. */
        onFontScaleChanged?: SessionEventListener<"fontScaleChanged">;
    }

    /** Session.capture. */
    interface CaptureOptions {
        /**
         * The part of the window to capture, in dp from its top left corner, cut off at the edges of the window; the
         * whole window by default. x and y default to 0, width and height to the rest of the window.
         */
        region?: {x?: number; y?: number; width?: number; height?: number};
    }

    /**
     * Style sizes by the camelCase name of a {@link ApiCore.StyleVar} value: a number, or a Point for a two-component
     * variable (a number sets both components). Lengths are dp; Alpha, DisabledAlpha and the alignments are ratios.
     */
    type StyleSizes = { [Name in Uncapitalize<StyleVarName>]?: number | Point };

    /** What setStyleProperties and WindowOptions.style take. */
    interface StyleProperties extends StyleSizes {
        /** Style colors by the name of a {@link ApiCore.Col} value, in either case of the first letter. */
        colors?: { [Name in ColName | Uncapitalize<ColName>]?: Color };
    }

    /** The name of a session event, for Session.on, once and off. */
    type SessionEventName = keyof SessionEventMap;

    /**
     * What a session event carries. Listeners run on the script thread, the thread of the render callback, one after
     * another, so they may change the render state without locks; do not block in them (see docs/THREADING.md).
     * Positions and sizes in the payload are dp.
     */
    interface SessionEvent<Name extends string = string> {
        /** The name of the event. */
        readonly type: Name;
        /** The session that raised it. */
        readonly session: Session;
        /** Date.now() when it was raised. */
        readonly timestamp: number;
    }

    /** The overlay moved. */
    interface SessionMovedEvent extends SessionEvent<"moved"> {
        /** New left edge in dp. */
        readonly x: number;
        /** New top edge in dp. */
        readonly y: number;
        /** Previous left edge in dp. */
        readonly oldX: number;
        /** Previous top edge in dp. */
        readonly oldY: number;
        /** What moved it: "drag", "api", "configuration", ... */
        readonly source: string;
    }

    /** The overlay changed size. */
    interface SessionResizedEvent extends SessionEvent<"resized"> {
        /** New width in dp. */
        readonly width: number;
        /** New height in dp. */
        readonly height: number;
        /** Previous width in dp. */
        readonly oldWidth: number;
        /** Previous height in dp. */
        readonly oldHeight: number;
        /** What resized it: "api", "content", "configuration", ... */
        readonly source: string;
    }

    /** The surface is ready to draw: "ready" the first time, "surfaceRestored" when it came back. */
    interface SessionReadyEvent<Name extends "ready" | "surfaceRestored" = "ready"> extends SessionEvent<Name> {
        /** Whether the surface came back after it was lost. */
        readonly restored: boolean;
        /** The window mode. */
        readonly mode: WindowMode;
        /** The backend asked for by a privileged session, otherwise null. */
        readonly backend: PrivilegedBackend | null;
        /** Window width in dp. */
        readonly width: number;
        /** Window height in dp. */
        readonly height: number;
    }

    /**
     * The display changed. After a density change the window keeps its size and position in dp, and fonts and style
     * sizes follow; a change of the system font scale scales the fonts only. A window of imgui.launch closes with reason
     * "configuration-changed" instead, because Android recreates its Activity.
     */
    interface SessionConfigurationEvent extends SessionEvent<"configurationChanged"> {
        /** Display width in dp. */
        readonly width: number;
        /** Display height in dp. */
        readonly height: number;
        /** Previous display width in dp. */
        readonly oldWidth: number;
        /** Previous display height in dp. */
        readonly oldHeight: number;
        /** The orientation of the display. */
        readonly orientation: "landscape" | "portrait";
        /** Display density, px per dp. */
        readonly density: number;
        /** Previous display density. */
        readonly oldDensity: number;
        /** The system font scale. */
        readonly fontScale: number;
        /** Previous system font scale. */
        readonly oldFontScale: number;
    }

    /** The font scale of the session changed. */
    interface SessionFontScaleEvent extends SessionEvent<"fontScaleChanged"> {
        /** The new scale, 0.5..3. */
        readonly scale: number;
        /** The previous scale. */
        readonly oldScale: number;
        /** What changed it. */
        readonly source: "pinch" | "api";
    }

    /** The session was collapsed behind its floating button. */
    interface SessionCollapsedEvent extends SessionEvent<"collapsed"> {
        /** The floating button shown instead, null without one. */
        readonly button: FloatingButton | null;
        /** The frame rate while collapsed. */
        readonly fps: number;
    }

    /** The session came back from its floating button. */
    interface SessionExpandedEvent extends SessionEvent<"expanded"> {
        /** Left edge in dp. */
        readonly x: number;
        /** Top edge in dp. */
        readonly y: number;
        /** Width in dp. */
        readonly width: number;
        /** Height in dp. */
        readonly height: number;
    }

    /** The session closed. */
    interface SessionClosedEvent extends SessionEvent<"closed"> {
        /** The value of Session.closeReason. */
        readonly reason: string;
    }

    /** The touch mode or the touchable regions changed. */
    interface SessionTouchableEvent extends SessionEvent<"touchableChanged"> {
        /** The touch mode. */
        readonly mode: TouchMode;
        /** Whether the surface takes touches. */
        readonly touchable: boolean;
        /** The number of touchable rectangles in TouchMode.Auto. */
        readonly interactiveRegionCount: number;
    }

    /** Session.setMoreTouch took effect. */
    interface SessionMoreTouchEvent extends SessionEvent<"moreTouchChanged"> {
        /** The new state. */
        readonly enabled: boolean;
    }

    /** The window opacity changed. */
    interface SessionAlphaEvent extends SessionEvent<"alphaChanged"> {
        /** The new opacity, 0..1. */
        readonly alpha: number;
    }

    /** The secure flag of the window changed. */
    interface SessionSecureEvent extends SessionEvent<"secureChanged"> {
        /** The new state. */
        readonly secure: boolean;
    }

    /** The frame loop went to the idle rate. */
    interface SessionIdleEvent extends SessionEvent<"idle"> {
        /** The idle frame rate. */
        readonly fps: number;
        /** The delay that passed without input, in ms. */
        readonly idleDelay: number;
    }

    /** The frame loop is back at the full rate. */
    interface SessionActiveEvent extends SessionEvent<"active"> {
        /** The full frame rate. */
        readonly fps: number;
        /** What ended the idle state. */
        readonly reason: "input" | "screen" | "api";
    }

    /**
     * The back key of an Activity-mode session (imgui.launch). Unless a listener calls preventDefault(), the session
     * closes with closeReason "back" after the listeners ran. A shown soft keyboard takes the back key first and hides.
     * Overlay windows (imgui.launchFloaty) get no back event: Android sends the key to an overlay only while its text
     * input has focus, and then it hides the keyboard as before.
     */
    interface SessionBackEvent extends SessionEvent<"back"> {
        /** Whether a listener called preventDefault(). */
        readonly defaultPrevented: boolean;
        /** Keeps the session open. */
        preventDefault(): void;
    }

    /**
     * An exception thrown by the render callback (phase "render") or by an event callback (phase "event"). The error is
     * also printed with console.error, a run of the same error only once. Without an "error" listener a render error
     * closes the session (closeReason "render-error"); with one the rest of the frame is skipped and the session goes
     * on (call session.close() in the listener to stop it). A failed high-level component render closes only that
     * component. An exception thrown by an "error" listener is printed only.
     */
    interface SessionErrorEvent extends SessionEvent<"error"> {
        /** The value that was thrown. */
        readonly error: Thrown;
        /** Where it was thrown. */
        readonly phase: "render" | "event";
        /** Number of frames presented before the error. */
        readonly frame: number;
        /** error.message, or the error converted to a string. */
        readonly message: string;
        /** Event whose listener threw (phase "event"), "buttonClick" for a floating button callback. */
        readonly event?: string;
        /** High-level component whose render threw (phase "render"). */
        readonly component?: Component;
        /** Floating button whose callback threw (event "buttonClick"). */
        readonly button?: FloatingButton;
    }

    /** The events of a session, by name. */
    interface SessionEventMap {
        /** The overlay moved. */
        moved: SessionMovedEvent;
        /** The overlay changed size. */
        resized: SessionResizedEvent;
        /** The first frame can be drawn. A listener added later gets it too: see {@link Session.on}. */
        ready: SessionReadyEvent;
        /** The surface came back after it was lost. */
        surfaceRestored: SessionReadyEvent<"surfaceRestored">;
        /** The session was collapsed behind its button. */
        collapsed: SessionCollapsedEvent;
        /** The session came back from its button. */
        expanded: SessionExpandedEvent;
        /** The session closed. */
        closed: SessionClosedEvent;
        /** The display changed. */
        configurationChanged: SessionConfigurationEvent;
        /** The touch mode or the touchable regions changed. */
        touchableChanged: SessionTouchableEvent;
        /** setMoreTouch took effect. */
        moreTouchChanged: SessionMoreTouchEvent;
        /** The window opacity changed. */
        alphaChanged: SessionAlphaEvent;
        /** The secure flag changed. */
        secureChanged: SessionSecureEvent;
        /** The frame loop went to the idle rate. */
        idle: SessionIdleEvent;
        /** The frame loop is back at the full rate. */
        active: SessionActiveEvent;
        /** The back key of an Activity-mode session. */
        back: SessionBackEvent;
        /** The font scale of the session changed. */
        fontScaleChanged: SessionFontScaleEvent;
        /** A callback threw. */
        error: SessionErrorEvent;
    }

    /** A listener of one session event; it runs on the script thread. */
    type SessionEventListener<Name extends SessionEventName = SessionEventName> =
        (event: SessionEventMap[Name], session: Session) => void;

    /** Options every high-level component reads. */
    interface ComponentOptions {
        /** Whether it starts visible, default true. */
        visible?: boolean;
    }

    /** A high-level component of a session: drawn inside the frame, after the render callback. */
    interface Component<Options extends object = object> {
        /** "logWindow", "toast", "dialog", "statsOverlay" or "dataTable". */
        readonly type: string;
        /** The id, unique among the components of its type. */
        readonly id: string;
        /** The session it belongs to. */
        readonly session: Session;
        /** The options it was created with. */
        readonly options: Options;
        /** Whether it is drawn; setting it is the same as show() and hide(). */
        visible: boolean;
        /** Whether it was closed. */
        readonly closed: boolean;
        /** The reason given to close, null while open. */
        readonly closeReason: string | null;
        /** Starts drawing it again. */
        show(): this;
        /** Stops drawing it, and keeps it. */
        hide(): this;
        /** Switches between show and hide. */
        toggle(): this;
        /** Removes it from the session. */
        close(reason?: string): this;
    }

    /** One line of a log window. */
    interface LogEntry {
        /** Date.now() when it was added. */
        readonly timestamp: number;
        /** Its severity. */
        readonly level: LogLevel;
        /** The text. */
        readonly text: string;
    }

    /** Options of logWindow. Sizes are dp; callbacks run on the script thread. */
    interface LogWindowOptions extends ComponentOptions {
        /** Window title; the id by default. */
        title?: string;
        /** Whether the window starts open, default true. */
        open?: boolean;
        /** Scrolls to a new entry, default true. */
        autoScroll?: boolean;
        /** Entries kept, at least 1, default 1000; the oldest go first. */
        maxEntries?: number;
        /** Entries to start with: text, or {level, text}. */
        entries?: readonly (Stringifiable | { level?: LogLevel | string; text: Stringifiable })[];
        /** Anchor of the first position; without it Dear ImGui places the window. */
        position?: ToastPosition;
        /** Distance from the anchor in dp, default 12. */
        margin?: number;
        /** First width in dp, default 380. */
        width?: number;
        /** First height in dp, default 260. */
        height?: number;
        /** WindowFlags. */
        flags?: number;
        /** Label of the Clear button. */
        clearLabel?: string;
        /** Label of the Export button. */
        exportLabel?: string;
        /** Called after each new entry. */
        onAppend?: (entry: LogEntry, component: LogWindow) => void;
        /** Called after clear. */
        onClear?: (component: LogWindow) => void;
        /** Called by the Export button and export(), with the text of exportText() and a copy of the entries. */
        onExport?: (text: string, entries: LogEntry[], component: LogWindow) => void;
        /** Called when it closes. */
        onClose?: (reason: string, component: LogWindow) => void;
    }

    /** A window of log lines, from logWindow. */
    interface LogWindow extends Component<LogWindowOptions> {
        /** The entries, oldest first. */
        entries: LogEntry[];
        /** Whether a new entry scrolls into view. */
        autoScroll: boolean;
        /** Entries kept; takes effect with the next entry. */
        maxEntries: number;
        /** The close button of the window: false closes the component in the next frame. */
        open: ValueRef<boolean>;
        /** Adds an entry. An unrecognized level counts as "log". */
        append(level: LogLevel | string, text: Stringifiable): this;
        /** Adds an entry, with the level first or second. */
        appendLog(text: Stringifiable, level?: LogLevel | string): this;
        appendLog(level: LogLevel | string, text: Stringifiable): this;
        /** Adds an entry of level "log". */
        log(text: Stringifiable): this;
        /** Adds an entry of level "debug". */
        debug(text: Stringifiable): this;
        /** Adds an entry of level "info". */
        info(text: Stringifiable): this;
        /** Adds an entry of level "warn". */
        warn(text: Stringifiable): this;
        /** Adds an entry of level "error". */
        error(text: Stringifiable): this;
        /** Removes all entries. */
        clear(): this;
        /** The entries as text, one "[time] [LEVEL] text" per line. */
        exportText(): string;
        /** Does what the Export button does: calls onExport and returns the text. */
        export(): string;
        /** Draws the window now, inside a frame, in addition to the automatic drawing. */
        render(): this;
    }

    /** Options of toast. Sizes are dp, durations ms; callbacks run on the script thread. */
    interface ToastOptions extends ComponentOptions {
        /** Reusing the id of a shown toast updates it; generated by default. */
        id?: string;
        /** Display time in ms, 2500 by default, 0 until closed; the duration argument goes first. */
        duration?: number;
        /** Severity, which picks the text color, "info" by default. */
        level?: LogLevel | string;
        /** Alias of level. */
        type?: LogLevel | string;
        /** Anchor, "top-right" by default. */
        position?: ToastPosition;
        /** Text color, instead of the color of the level. */
        color?: Color;
        /** Fade-out time in ms, default 250. */
        fadeDuration?: number;
        /** Distance from the anchor in dp, default 12. */
        margin?: number;
        /** Distance between stacked toasts in dp, default 54. */
        stackStep?: number;
        /** Background opacity 0..1, default 0.92. */
        backgroundAlpha?: number;
        /** Lets the toast take touches, default false. */
        interactive?: boolean;
        /** Starts the text with the level, default false. */
        showLevel?: boolean;
        /** More WindowFlags. */
        flags?: number;
        /** Called when it closes: "expired", or the reason given to close. */
        onClose?: (reason: string, component: Toast) => void;
    }

    /** A short message over the windows, from toast. */
    interface Toast extends Component<ToastOptions> {
        /** The shown text. */
        readonly text: string;
        /** Its severity. */
        readonly level: LogLevel;
        /** Its anchor. */
        readonly position: ToastPosition;
        /** Date.now() when it was created or last updated. */
        readonly createdAt: number;
        /** Display time in ms; 0 until closed. */
        readonly duration: number;
        /** Date.now() value at which it expires; Infinity with duration 0. */
        readonly expiresAt: number;
        /** Changes the text and shows it for a full duration again. */
        update(text: Stringifiable, duration?: number, options?: ToastOptions): this;
    }

    /** Options of alert and confirm, and the base of the choice dialogs. Sizes are dp; callbacks run on the script thread. */
    interface DialogOptions<Result = boolean> extends ComponentOptions {
        /** Part of the popup id; generated by default. */
        id?: string;
        /** Title bar text; the title argument goes first. */
        title?: string;
        /** Text above the buttons; the message argument goes first. */
        message?: string;
        /** Width in dp, default 320. */
        width?: number;
        /** More WindowFlags. */
        flags?: number;
        /** Label of the OK button. */
        okLabel?: string;
        /** Label of the Cancel button (confirm and the choice dialogs). */
        cancelLabel?: string;
        /** Called with the result before the promise resolves; reason is "accepted", "cancelled" or "dismissed". */
        onResult?: (value: Result, reason: string, dialog: Dialog<Result>) => void;
        /** Called when the dialog closes. */
        onClose?: (reason: string, dialog: Dialog<Result>) => void;
    }

    /** Options of singleChoice. */
    interface SingleChoiceOptions extends DialogOptions<number> {
        /** The index selected at first, -1 for none (default); the selected argument goes first. */
        selected?: number;
        /** Accepts as soon as a row is tapped, default false. */
        autoAccept?: boolean;
        /** Called when a row is tapped. */
        onChoice?: (index: number, item: Stringifiable, dialog: Dialog<number>) => void;
    }

    /** Options of multiChoice. */
    interface MultiChoiceOptions extends DialogOptions<number[] | null> {
        /** Indices selected at first, or one boolean per item; the selected argument goes first. */
        selected?: readonly number[] | readonly boolean[];
        /** Called when a row is toggled. */
        onChoice?: (index: number, checked: boolean, item: Stringifiable, dialog: Dialog<number[] | null>) => void;
    }

    /** A modal dialog of a session, the `controller` of the promise that alert and the like return. */
    interface Dialog<Result = boolean> extends Component<DialogOptions<Result>> {
        /** The function that opened it. */
        readonly dialogType: "alert" | "confirm" | "singleChoice" | "multiChoice";
        /** Title bar text. */
        title: string;
        /** Text above the buttons. */
        message: string;
        /** The close button: false dismisses the dialog with the cancel value. */
        open: ValueRef<boolean>;
        /** The promise of the result. */
        readonly promise: DialogPromise<Result>;
        /** The result when it is cancelled or dismissed. */
        readonly cancelValue: Result;
        /** Closes it with the cancel value, in the next frame or at once from inside it. */
        cancel(): this;
        /** Closes it as the OK button does. */
        accept(): this;
    }

    /** What alert and the like return; it resolves on the script thread, in the frame that closes the dialog. */
    interface DialogPromise<Result> extends Promise<Result> {
        /** The dialog. */
        readonly controller: Dialog<Result>;
        /** Closes the dialog with the cancel value. */
        cancel(): this;
        /** Closes the dialog as the OK button does. */
        accept(): this;
    }

    /** The dialogs, on imgui (for the active session) and on a Session. Any time while a session runs; they open in the next frame. */
    interface DialogMethods {
        /**
         * Opens a modal message with an OK button.
         * @returns true for OK, false when the dialog was dismissed.
         */
        alert(title: string, message: string, options?: DialogOptions): DialogPromise<boolean>;
        alert(message: Stringifiable, options?: DialogOptions): DialogPromise<boolean>;
        /**
         * Opens a modal question with OK and Cancel.
         * @returns true for OK, false for Cancel or when the dialog was dismissed.
         */
        confirm(title: string, message: string, options?: DialogOptions): DialogPromise<boolean>;
        confirm(message: Stringifiable, options?: DialogOptions): DialogPromise<boolean>;
        /**
         * Opens a modal list to pick one row. An item is shown with String(), or by its `label` property.
         * @returns The index of the row, -1 for Cancel or when the dialog was dismissed.
         */
        singleChoice(title: string, items: ArrayLike<Stringifiable>, selected?: number | null, options?: SingleChoiceOptions): DialogPromise<number>;
        singleChoice(items: ArrayLike<Stringifiable>, selected?: number | null, options?: SingleChoiceOptions): DialogPromise<number>;
        singleChoice(items: ArrayLike<Stringifiable>, options: SingleChoiceOptions): DialogPromise<number>;
        /**
         * Opens a modal list of checkboxes. An item is shown with String(), or by its `label` property.
         * @param selected Indices selected at first, or one boolean per item.
         * @returns The indices of the checked rows, null for Cancel or when the dialog was dismissed.
         */
        multiChoice(title: string, items: ArrayLike<Stringifiable>, selected?: readonly number[] | readonly boolean[] | null, options?: MultiChoiceOptions): DialogPromise<number[] | null>;
        multiChoice(items: ArrayLike<Stringifiable>, selected?: readonly number[] | readonly boolean[] | null, options?: MultiChoiceOptions): DialogPromise<number[] | null>;
        multiChoice(items: ArrayLike<Stringifiable>, options: MultiChoiceOptions): DialogPromise<number[] | null>;
    }

    /** Options of statsOverlay. Sizes are dp, times ms. */
    interface StatsOverlayOptions extends ComponentOptions {
        /** Reusing the id returns the existing overlay; "default" by default. */
        id?: string;
        /** Anchor, "top-left" by default. */
        position?: ToastPosition;
        /** Distance from the anchor in dp, default 12. */
        margin?: number;
        /** Background opacity 0..1, default 0.78. */
        backgroundAlpha?: number;
        /** Lets the overlay take touches, default false. */
        interactive?: boolean;
        /** More WindowFlags. */
        flags?: number;
        /** Frame interval in ms from which the text is orange, default 16.7. */
        warningMs?: number;
        /** Frame interval in ms from which the text is red, default 33.3. */
        criticalMs?: number;
        /** Frame intervals kept for the plot, at least 10, default 120. */
        historySize?: number;
        /** Shows the plot, default true. */
        showPlot?: boolean;
        /** Text over the plot, "Frame time" by default. */
        overlay?: string;
        /** Top of the plot in ms, at least 1.5 x criticalMs. */
        scaleMax?: number;
        /** Plot width in dp, default 190. */
        plotWidth?: number;
        /** Plot height in dp, default 48. */
        plotHeight?: number;
        /** Called when it closes. */
        onClose?: (reason: string, overlay: StatsOverlay) => void;
    }

    /** An overlay with the frame rate, from statsOverlay. */
    interface StatsOverlay extends Component<StatsOverlayOptions> {
        /** The last frame intervals in ms, oldest first. */
        readonly frameTimes: number[];
        /** The number of intervals kept. */
        readonly historySize: number;
        /** Frames per second, Dear ImGui's running average. */
        readonly fps: number;
        /** Interval between the last two frames in ms. */
        readonly frameTime: number;
        /** Time the previous frame spent in the render callback and components in ms, without presentation. */
        readonly workTime: number;
        /** A copy of the readings. */
        snapshot(): {
            /** Frames per second. */
            readonly fps: number;
            /** Frame interval in ms. */
            readonly frameTime: number;
            /** Work time of the previous frame in ms. */
            readonly workTime: number;
            /** A copy of frameTimes. */
            readonly history: number[];
        };
    }

    /** One column of the sort order of a table. */
    interface TableColumnSortSpecs {
        /** Index of the column. */
        readonly columnIndex: number;
        /** The userId given to tableSetupColumn, 0 by default. */
        readonly columnUserId: number;
        /** SortDirection.Ascending or SortDirection.Descending. */
        readonly sortDirection: number;
        /** Position of this spec when sorting on several columns (TableFlags.SortMulti), 0 for the first. */
        readonly sortOrder: number;
    }

    /** What tableGetSortSpecs returns. */
    interface TableSortSpecs {
        /** Whether the specs changed since the last read; sort the rows when true. */
        readonly specsDirty: boolean;
        /** Usually one spec; more with TableFlags.SortMulti, none with TableFlags.SortTristate. */
        readonly specs: readonly TableColumnSortSpecs[];
    }

    /** A value of Row with a cell in it: an element of an array row, a field of an object row, or the row itself. */
    type CellValue<Row> = 0 extends (1 & Row)
        ? any
        : Row extends readonly (infer Cell)[]
            ? Cell | undefined
            : Row extends object ? Row[keyof Row] | undefined : Row | undefined;

    /** The key of a row, as DataTableOptions.rowKey gives it. */
    type RowKey = string | number;

    /** A column of a dataTable. */
    interface DataTableHeader<Row = any> {
        /** Header text; the key by default. */
        label?: string;
        /** The field of an object row; the column index of an array row by default. */
        key?: (keyof Row & string) | number;
        /** Fixed width or weight of the column, as tableSetupColumn takes it. */
        width?: number;
        /** Used when width is omitted. */
        weight?: number;
        /** TableColumnFlags. */
        flags?: number;
        /**
         * Draws a cell of this column, on the script thread inside the frame, instead of its text. value is the raw cell.
         * Not called for the first column while rows are selectable, whose text is the row's selectable label.
         */
        render?: (value: CellValue<Row>, row: Row, rowIndex: number, table: DataTable<Row>) => void;
        /**
         * Order of two cell values of this column in a sortable table, negative, 0 or positive as for Array.sort; by
         * default numbers compare by value, other values as strings, and empty cells come last in either direction.
         */
        compare?: (a: CellValue<Row>, b: CellValue<Row>, rowA: Row, rowB: Row) => number;
    }

    /** A column as text (label and key) or as an object. */
    type DataTableHeaderLike<Row = any> = string | DataTableHeader<Row>;

    /** Options of dataTable. Sizes are dp unless they say otherwise; callbacks run on the script thread. */
    interface DataTableOptions<Row = any> extends ComponentOptions {
        /** Window title; the id by default. */
        title?: string;
        /** Whether the window starts open, default true. */
        open?: boolean;
        /** Keeps the selection when another row is tapped, default false. */
        multiSelect?: boolean;
        /** TableFlags, replacing the default Resizable | RowBg | Borders | ScrollY. */
        tableFlags?: number;
        /**
         * Adds TableFlags.Sortable: a click on a header sorts the rows by that column (TableFlags.SortMulti and
         * SortTristate in tableFlags, TableColumnFlags.DefaultSort / NoSort / PreferSortDescending in a header's flags
         * apply). The sort is stable; rows added or changed are sorted again in the next frame, and onRowsChanged
         * gets the action "sort".
         */
        sortable?: boolean;
        /** Identifies a row for the target of updateRow and the like: a field name, or a function; row.id by default. */
        rowKey?: (keyof Row & string) | ((row: Row, index: number) => RowKey);
        /** Table height in dp, 0 to fill the window (default). */
        tableHeight?: number;
        /** Smallest row height in px, default 0. */
        rowHeight?: number;
        /** Rows are selectable through their first column, default true. */
        selectable?: boolean;
        /** More SelectableFlags for the first column. */
        selectableFlags?: number;
        /** Shows the Add / Remove / Clear toolbar, default true. */
        toolbar?: boolean;
        /** Labels of the toolbar buttons. */
        labels?: { add?: string; remove?: string; edit?: string; clear?: string };
        /** Keeps the header row in view, default true. */
        freezeHeader?: boolean;
        /** Shows the header row, default true. */
        showHeaders?: boolean;
        /** Shown when there are no rows, "No rows" by default. */
        emptyText?: string;
        /** Anchor of the first position; without it Dear ImGui places the window. */
        position?: ToastPosition;
        /** Distance from the anchor in dp, default 12. */
        margin?: number;
        /** First window width in dp, default 520. */
        width?: number;
        /** First window height in dp, default 340. */
        height?: number;
        /** WindowFlags. */
        flags?: number;
        /** Turns a cell into its text; null and undefined show nothing. */
        formatCell?: (value: CellValue<Row>, row: Row, header: DataTableHeader<Row>, columnIndex: number, table: DataTable<Row>) => Stringifiable;
        /** Draws a cell after formatCell, for columns without render; return true when it drew the cell. */
        renderCell?: (value: string, row: Row, header: DataTableHeader<Row>, rowIndex: number, columnIndex: number, table: DataTable<Row>) => boolean | void;
        /** The Add button: returns the new row, false or undefined to add none. */
        onAdd?: (table: DataTable<Row>) => Row | false | void;
        /** Makes a row for the Add button when onAdd is absent. */
        createRow?: (table: DataTable<Row>) => Row | false | void;
        /** Adds an Edit button for one selected row: returns the change for updateRow, false or undefined for none. */
        onEdit?: (row: Row, index: number, table: DataTable<Row>) => Row | Partial<Row> | false | void;
        /** Called when a row is tapped. */
        onRowClick?: (row: Row, index: number, table: DataTable<Row>) => void;
        /** Called when a row is double-tapped. */
        onRowDoubleClick?: (row: Row, index: number, table: DataTable<Row>) => void;
        /**
         * Called after the rows changed.
         * @param rows A copy of the rows.
         * @param action "set", "add", "update", "remove", "removeSelected", "clear" or "sort".
         * @param row The row concerned, the removed rows for "removeSelected", null for the others.
         * @param index Its index, -1 when there is none.
         */
        onRowsChanged?: (rows: Row[], action: string, row: Row | Row[] | null, index: number, table: DataTable<Row>) => void;
        /** Called after the selection changed. */
        onSelectionChanged?: (rows: Row[], indices: number[], table: DataTable<Row>) => void;
        /** Called when it closes. */
        onClose?: (reason: string, table: DataTable<Row>) => void;
    }

    /** A window with a table of rows, from dataTable. Change the rows with the methods, not the arrays. */
    interface DataTable<Row = any> extends Component<DataTableOptions<Row>> {
        /** The columns, in the form they were read. */
        headers: DataTableHeader<Row>[];
        /** The rows in display order. */
        rows: Row[];
        /** The close button of the window: false closes the component in the next frame. */
        open: ValueRef<boolean>;
        /** Whether tapping a row keeps the others selected. */
        multiSelect: boolean;
        /** Whether a click on a header sorts. */
        readonly sortable: boolean;
        /** Replaces all rows and clears the selection. */
        setRows(rows: readonly Row[]): this;
        /** A copy of the rows. */
        getRows(): Row[];
        /** Adds a row at index, at the end by default, and returns its index. */
        addRow(row: Row, index?: number): number;
        /**
         * Changes a row and returns it, or null if there is none. target is an index, a row or a key (rowKey). An object
         * is merged into an object row; a function returns the new row or the change.
         */
        updateRow(target: number | RowKey | Row, update: Row | Partial<Row> | ((row: Row, index: number, table: DataTable<Row>) => Row | Partial<Row> | null | void)): Row | null;
        /** Removes a row and returns it, or null if there is none. */
        removeRow(target: number | RowKey | Row): Row | null;
        /** Same as removeRow. */
        deleteRow(target: number | RowKey | Row): Row | null;
        /** Removes all rows. */
        clearRows(): this;
        /** Same as clearRows. */
        clear(): this;
        /** Whether a row is selected. */
        isSelected(target: number | RowKey | Row): boolean;
        /** Selects or unselects a row; toggles it without the second argument. */
        selectRow(target: number | RowKey | Row, selected?: boolean): this;
        /** Unselects all rows. */
        clearSelection(): this;
        /** The indices of the selected rows, ascending. */
        selectedIndices(): number[];
        /** The selected rows. */
        selectedRows(): Row[];
        /** Removes the selected rows and returns them. */
        removeSelected(): Row[];
        /** Draws the toolbar and the table in the current window, inside a frame. */
        renderTable(): this;
    }

    /**
     * A running ImGui window. Fields are read-only (writing one throws TypeError in strict mode); change them with the
     * setters. Positions and sizes are dp; multiply by density for px.
     */
    interface Session extends DialogMethods {
        /** Where the session draws. */
        readonly mode: WindowMode;
        /** Root/Shizuku backend selected for a privileged session, otherwise null. */
        readonly privilegedBackend: ActivePrivilegedBackend | null;
        /** Binder-transferred Android Surface for privileged mode, otherwise null. */
        readonly surface: JavaObject | null;
        /** The floaty or Activity window that holds the surface. */
        readonly window: JavaObject;
        /** The Android view that shows the frames. */
        readonly surfaceView: JavaObject;
        /**
         * The hidden text field that receives IME input, or null when ime is false. In a privileged window, the EditText
         * of the temporary text box while it is open, otherwise null.
         */
        readonly imeView: JavaObject | null;
        /** Display density, px per dp; changes with the display (configurationChanged). */
        readonly density: number;
        /**
         * Font scale of the session, 0.5..3, default 1, from setFontScale or a pinch (WindowOptions.pinchZoom). It
         * multiplies the size of every font and leaves the style sizes alone.
         */
        readonly fontScale: number;
        /** Display width in dp. */
        readonly displayWidth: number;
        /** Display height in dp. */
        readonly displayHeight: number;
        /** Window width in dp. */
        readonly width: number;
        /** Window height in dp. */
        readonly height: number;
        /** Left edge of the window in dp. */
        readonly x: number;
        /** Top edge of the window in dp. */
        readonly y: number;
        /** Window opacity 0..1. */
        readonly alpha: number;
        /** Whether FLAG_SECURE is on. */
        readonly secure: boolean;
        /** Whether a touch on a window reaches the app below as well. */
        readonly moreTouch: boolean;
        /** Which touches the overlay takes. */
        readonly touchMode: TouchMode;
        /** Whether the surface takes touches now. */
        readonly touchable: boolean;
        /** The number of touchable rectangles in TouchMode.Auto. */
        readonly interactiveRegionCount: number;
        /** Whether the session is collapsed behind its button. */
        readonly collapsed: boolean;
        /** Whether the session renders at idleFps because no input arrived for idleDelay ms. */
        readonly idle: boolean;
        /** Whether the frame loop is paused because the screen is off or locked. */
        readonly paused: boolean;
        /** Frame rate while expanded and active; see setFps. */
        readonly fps: number;
        /** Frame rate while collapsed. */
        readonly collapsedFps: number;
        /** Idle frame rate, 0 when power saving is off; see setIdleFps. */
        readonly idleFps: number;
        /** Milliseconds without input before idleFps applies. */
        readonly idleDelay: number;
        /** How frames are timed. */
        readonly frameScheduler: "deadline-timer";
        /** The resolved settings file, null when off. */
        readonly iniPath: string | null;
        /** Whether the session runs in debug mode (WindowOptions.debug). */
        readonly debug: boolean;
        /** Whether the surface can draw. */
        readonly ready: boolean;
        /** Whether the session closed. */
        readonly closed: boolean;
        /** Why it closed, null while open. */
        readonly closeReason: string | null;
        /** Current theme, including a change made with imgui.setTheme. */
        readonly theme: ThemeName;
        /** The appearance preset, null without one. */
        readonly appearance: AppearanceName | null;
        /** The font handles by name. */
        readonly fonts: Readonly<Record<string, number>>;
        /** The textures of this session. */
        readonly textures: Texture[];
        /** The floating buttons of this session. */
        readonly buttons: FloatingButton[];
        /** The high-level components of this session. */
        readonly components: Component[];
        /** Same as {@link ApiCore.createTexture}, and the session closes it. */
        createTexture(source: TextureSource, options?: TextureOptions | number): Texture;
        /** Frees a texture; returns false when it was freed already. */
        destroyTexture(texture: Texture): boolean;
        /** Live backend/UID/PID/Surface/direct-input diagnostics. */
        getBackendInfo(): string;
        /**
         * Adds a listener; it runs on the script thread. "ready" comes only once, usually before createWindow returns: a
         * listener added after it gets that same event once, posted to the script thread, so after on returned. off
         * cancels that, and a closed session does not send it.
         */
        on<Name extends SessionEventName>(eventName: Name, listener: SessionEventListener<Name>): this;
        /** Adds a listener that runs once, on the script thread. A late "ready" listener runs as with {@link Session.on}. */
        once<Name extends SessionEventName>(eventName: Name, listener: SessionEventListener<Name>): this;
        /** Removes a listener, or all listeners of the event without the second argument. */
        off<Name extends SessionEventName>(eventName: Name, listener?: SessionEventListener<Name> | null): this;
        /** Moves the window to (x, y) in dp, clamped to the display; null keeps that coordinate. */
        setPosition(x: number | null, y: number | null): this;
        /** Resizes the window to width x height in dp, limited to the display; null keeps that side. */
        setSize(width: number | null, height: number | null): this;
        /** Changes which touches the overlay takes. */
        setTouchable(mode: TouchMode | boolean): this;
        /** Lets a touch on a window reach the app below as well. */
        setMoreTouch(enabled: boolean): this;
        /** Window opacity 0..1. */
        setAlpha(alpha: number): this;
        /** Switches FLAG_SECURE. */
        setSecure(secure: boolean): this;
        /** Hides the surface, all root windows included, behind a small button. Throws in a privileged window. */
        collapse(): this;
        /** Brings the surface back. */
        expand(): this;
        /** Switches between collapse and expand. */
        toggleCollapsed(): this;
        /** Sets the frame rate while expanded and active, 15..120. */
        setFps(fps: number): this;
        /**
         * Sets the idle frame rate, 0..120 (0 turns power saving off), and optionally the delay in ms before it
         * applies, 100..3600000.
         */
        setIdleFps(idleFps: number, idleDelay?: number): this;
        /** Current target frame rate: 0 while paused, collapsedFps while collapsed, the idle or the full rate. */
        getFps(): number;
        /** Sets fontScale, 0.5..3; it takes effect in the next frame. */
        setFontScale(scale: number): this;
        /**
         * Returns the last presented frame of the window as an Image of the images module, in px (window size x density,
         * or the region), and transparent where nothing is drawn. Overlay and Activity windows read it with PixelCopy,
         * also from a render callback. A privileged window reads it with glReadPixels and only between two frames, so
         * call it from an event or a timer there. Throws Error while the window is collapsed, closed or has no frame yet.
         * Recycle the image when done; the end of the script releases the rest.
         */
        capture(options?: CaptureOptions): ImageWrapper;
        /** Adds a floating Android button; callback runs on the script thread. */
        addButtonEx(label: Stringifiable, callback: () => void, options?: FloatingButtonOptions): FloatingButton;
        /** Returns the log window with this id ("default" by default), and creates it the first time. */
        logWindow(id?: string, options?: LogWindowOptions): LogWindow;
        /** Shows a short message; the duration is in ms, 2500 by default, and 0 keeps it until closed. */
        toast(text: Stringifiable, duration?: number | ToastOptions, options?: ToastOptions): Toast;
        /** Returns the frame rate overlay with this id, and creates it the first time. */
        statsOverlay(id?: string | StatsOverlayOptions, options?: StatsOverlayOptions): StatsOverlay;
        /** Returns the table window with this id, and creates it the first time. */
        dataTable<Row = any>(
            id: string,
            headers: readonly DataTableHeaderLike<Row>[],
            rows: readonly Row[],
            options?: DataTableOptions<Row>,
        ): DataTable<Row>;
        /** The component of that type and id, null without one. */
        getComponent(type: string, id: string): Component | null;
        /** Closes the session, with an optional reason for closeReason. */
        close(reason?: string): void;
    }

    /** Options of runExample that the bundled examples read. */
    interface ExampleOptions {
        /** Opens the example with imgui.launch instead of imgui.launchFloaty. */
        activity?: boolean;
        /** Surface width in dp. */
        width?: number;
        /** Surface height in dp. */
        height?: number;
        /** Left edge in dp. */
        x?: number;
        /** Top edge in dp. */
        y?: number;
        /** Frame rate. */
        fps?: number;
        /** The theme to start with. */
        theme?: ThemeName;
        /** Closes the example after this many ms; 0 or absent keeps it open. */
        autoCloseMs?: number;
        /** error-handling: debug mode, default true. */
        debug?: boolean;
        /** background-task: starts the task at once. */
        autoStart?: boolean;
        /** large-list: starts in multi-select mode. */
        multiSelect?: boolean;
    }

    /** The factory of a bundled example, which is what runExample runs. */
    type ExampleRunner = (imgui: Api, options: ExampleOptions) => Session;

    interface ApiCore extends DialogMethods {
        /** Any time. A mutable boolean in a one-element Java array, false by default. */
        bool(value?: boolean): IndexedRef<boolean>;
        /** Any time. A mutable float in a one-element Java array, 0 by default. */
        float(value?: number): IndexedRef<number>;
        /** Any time. A mutable integer in a one-element Java array, 0 by default. */
        int(value?: number): IndexedRef<number>;
        /** Any time. A mutable string in a one-element Java array, empty by default. */
        string(value?: Stringifiable): IndexedRef<string>;
        /** Any time. A plain mutable reference {value}. */
        ref<T>(value: T): ValueRef<T>;
        /** Any time. A Java float array, for plotLines and the multi-component widgets. */
        floats(values?: readonly number[]): NativeArray<number>;
        /** Any time. A Java int array, for dragInt2 .. 4, sliderInt2 .. 4 and inputInt2 .. 4; values are rounded. */
        ints(values?: readonly number[]): NativeArray<number>;
        /** Any time. A Java byte array. */
        bytes(values?: readonly number[]): NativeArray<number>;
        /** Any time. A Java String array. */
        strings(values?: readonly Stringifiable[]): NativeArray<string>;
        /** Any time. The version of Dear ImGui. */
        version(): string;

        /**
         * Any time. Display density, px per dp: the active session's density, otherwise the display's. Window options, Session
         * geometry and event payloads are dp; coordinates inside a frame are px.
         */
        readonly density: number;
        /**
         * Any time. Converts dp to px, for example ui.setNextWindowSize(ui.dp(320), ui.dp(240)).
         * @param value length in dp
         * @returns length in px
         */
        dp(value: number): number;
        /**
         * Any time. Converts px to dp.
         * @param value length in px
         * @returns length in dp
         */
        px(value: number): number;

        /** The fixed limits, see docs/LIMITS.md. */
        readonly Limits: Readonly<{
            /** Largest capacity of a text field in bytes. */
            InputTextMaxBytes: 65536;
            /** Most items of combo and listBox. */
            SelectionMaxItems: 512;
            /** Events the input queue holds before it drops the oldest. */
            InputQueueCapacity: 2048;
            /** Largest drag-and-drop payload, in bytes of JSON. */
            DragDropPayloadMaxBytes: 65536;
        }>;
        /** The values of {@link ImGui.BackendStatus}. */
        readonly BackendStatus: Readonly<{
            /** It works and is supported. */
            Available: "available";
            /** It works, but may change. */
            Experimental: "experimental";
            /** It cannot be used on this device. */
            Unavailable: "unavailable";
            /** It is not implemented yet. */
            Deferred: "deferred";
        }>;
        /** When setNextWindowPos and the like apply: Always (None), Once, FirstUseEver, Appearing. */
        readonly Cond: NumericConstants<"None" | "Always" | "Once" | "FirstUseEver" | "Appearing">;
        /** Flags of begin and withWindow. */
        readonly WindowFlags: NumericConstants<"None" | "NoTitleBar" | "NoResize" | "NoMove" | "NoScrollbar" | "NoScrollWithMouse" | "NoCollapse" | "AlwaysAutoResize" | "NoBackground" | "NoSavedSettings" | "NoMouseInputs" | "MenuBar" | "HorizontalScrollbar" | "NoFocusOnAppearing" | "NoBringToFrontOnFocus" | "AlwaysVerticalScrollbar" | "AlwaysHorizontalScrollbar" | "NoNavInputs" | "NoNavFocus" | "UnsavedDocument" | "NoNav" | "NoDecoration" | "NoInputs">;
        /** Flags of inputText and the like. */
        readonly InputTextFlags: NumericConstants<"None" | "CharsDecimal" | "CharsHexadecimal" | "CharsScientific" | "CharsUppercase" | "CharsNoBlank" | "AllowTabInput" | "EnterReturnsTrue" | "EscapeClearsAll" | "CtrlEnterForNewLine" | "ReadOnly" | "Password" | "AlwaysOverwrite" | "AutoSelectAll" | "NoHorizontalScroll" | "NoUndoRedo" | "ElideLeft" | "WordWrap">;
        /** Flags of the sliders and drags. */
        readonly SliderFlags: NumericConstants<"None" | "Logarithmic" | "NoRoundToFormat" | "NoInput" | "WrapAround" | "ClampOnInput" | "ClampZeroRange" | "NoSpeedTweaks" | "ColorMarkers" | "AlwaysClamp">;
        /** Flags of treeNodeEx and collapsingHeader. */
        readonly TreeNodeFlags: NumericConstants<"None" | "Selected" | "Framed" | "AllowOverlap" | "NoTreePushOnOpen" | "NoAutoOpenOnLog" | "DefaultOpen" | "OpenOnDoubleClick" | "OpenOnArrow" | "Leaf" | "Bullet" | "FramePadding" | "SpanAvailWidth" | "SpanFullWidth" | "SpanLabelWidth" | "SpanAllColumns" | "LabelSpanAllColumns" | "NavLeftJumpsToParent" | "CollapsingHeader">;
        /** Flags of selectable. */
        readonly SelectableFlags: NumericConstants<"None" | "NoAutoClosePopups" | "SpanAllColumns" | "AllowDoubleClick" | "Disabled" | "AllowOverlap" | "Highlight" | "SelectOnNav">;
        /** Flags of beginTabBar. */
        readonly TabBarFlags: NumericConstants<"None" | "Reorderable" | "AutoSelectNewTabs" | "TabListPopupButton" | "NoCloseWithMiddleMouseButton" | "NoTabListScrollingButtons" | "NoTooltip" | "DrawSelectedOverline" | "FittingPolicyMixed" | "FittingPolicyShrink" | "FittingPolicyScroll">;
        /** Flags of beginTabItem. */
        readonly TabItemFlags: NumericConstants<"None" | "UnsavedDocument" | "SetSelected" | "NoCloseWithMiddleMouseButton" | "NoPushId" | "NoTooltip" | "NoReorder" | "Leading" | "Trailing" | "NoAssumedClosure">;
        /** Pointer buttons; a touch is Left, a long press Right. */
        readonly MouseButton: NumericConstants<"Left" | "Right" | "Middle">;
        /** Flags of beginChild. */
        readonly ChildFlags: NumericConstants<"None" | "Borders" | "AlwaysUseWindowPadding" | "ResizeX" | "ResizeY" | "AutoResizeX" | "AutoResizeY" | "AlwaysAutoResize" | "FrameStyle" | "NavFlattened">;
        /** Flags of beginCombo. */
        readonly ComboFlags: NumericConstants<"None" | "PopupAlignLeft" | "HeightSmall" | "HeightRegular" | "HeightLarge" | "HeightLargest" | "NoArrowButton" | "NoPreview" | "WidthFitPreview">;
        /** Flags of the popup functions. */
        readonly PopupFlags: NumericConstants<"None" | "MouseButtonLeft" | "MouseButtonRight" | "MouseButtonMiddle" | "NoReopen" | "NoOpenOverExistingPopup" | "NoOpenOverItems" | "AnyPopupId" | "AnyPopupLevel" | "AnyPopup">;
        /** Flags of isItemHovered and isWindowHovered. */
        readonly HoveredFlags: NumericConstants<"None" | "ChildWindows" | "RootWindow" | "AnyWindow" | "NoPopupHierarchy" | "AllowWhenBlockedByPopup" | "AllowWhenBlockedByActiveItem" | "AllowWhenOverlappedByItem" | "AllowWhenOverlappedByWindow" | "AllowWhenDisabled" | "NoNavOverride" | "AllowWhenOverlapped" | "RectOnly" | "RootAndChildWindows" | "ForTooltip" | "Stationary" | "DelayNone" | "DelayShort" | "DelayNormal" | "NoSharedDelay">;
        /** Flags of isWindowFocused. */
        readonly FocusedFlags: NumericConstants<"None" | "ChildWindows" | "RootWindow" | "AnyWindow" | "NoPopupHierarchy" | "RootAndChildWindows">;
        /** Flags of the color widgets. */
        readonly ColorEditFlags: NumericConstants<"None" | "NoAlpha" | "NoPicker" | "NoOptions" | "NoSmallPreview" | "NoInputs" | "NoTooltip" | "NoLabel" | "NoSidePreview" | "NoDragDrop" | "NoBorder" | "NoColorMarkers" | "AlphaOpaque" | "AlphaNoBg" | "AlphaPreviewHalf" | "AlphaBar" | "HDR" | "DisplayRGB" | "DisplayHSV" | "DisplayHex" | "Uint8" | "Float" | "PickerHueBar" | "PickerHueWheel" | "PickerNoRotate" | "InputRGB" | "InputHSV">;
        /** Flags of beginTable. */
        readonly TableFlags: NumericConstants<"None" | "Resizable" | "Reorderable" | "Hideable" | "Sortable" | "NoSavedSettings" | "ContextMenuInBody" | "RowBg" | "BordersInnerH" | "BordersOuterH" | "BordersInnerV" | "BordersOuterV" | "BordersH" | "BordersV" | "BordersInner" | "BordersOuter" | "Borders" | "NoBordersInBody" | "NoBordersInBodyUntilResize" | "SizingFixedFit" | "SizingFixedSame" | "SizingStretchProp" | "SizingStretchSame" | "NoHostExtendX" | "NoHostExtendY" | "NoKeepColumnsVisible" | "PreciseWidths" | "NoClip" | "PadOuterX" | "NoPadOuterX" | "NoPadInnerX" | "ScrollX" | "ScrollY" | "SortMulti" | "SortTristate" | "HighlightHoveredColumn">;
        /** Flags of tableSetupColumn. */
        readonly TableColumnFlags: NumericConstants<"None" | "Disabled" | "DefaultHide" | "DefaultSort" | "WidthStretch" | "WidthFixed" | "NoResize" | "NoReorder" | "NoHide" | "NoClip" | "NoSort" | "NoSortAscending" | "NoSortDescending" | "NoHeaderLabel" | "NoHeaderWidth" | "PreferSortAscending" | "PreferSortDescending" | "IndentEnable" | "IndentDisable" | "AngledHeader" | "IsEnabled" | "IsVisible" | "IsSorted" | "IsHovered">;
        /** Flags of tableNextRow. */
        readonly TableRowFlags: NumericConstants<"None" | "Headers">;
        /** Targets of tableSetBgColor. */
        readonly TableBgTarget: NumericConstants<"None" | "RowBg0" | "RowBg1" | "CellBg">;
        /** sortDirection of a {@link TableColumnSortSpecs}. */
        readonly SortDirection: NumericConstants<"None" | "Ascending" | "Descending">;
        /** Style colors, for pushStyleColor and setStyleColor. */
        readonly Col: NumericConstants<ColName>;
        /** Style variables, for pushStyleVar and setStyleProperties. */
        readonly StyleVar: NumericConstants<StyleVarName>;
        /** The names of the themes. */
        readonly Themes: Readonly<{ Dark: "dark"; Light: "light"; Classic: "classic"; Pink: "pink"; Blue: "blue"; ModernDark: "modern-dark"; CyanDusk: "cyan-dusk"; OrangeDark: "orange-dark"; CrystalClear: "crystal-clear"; VibrantNight: "vibrant-night"; PurpleDream: "purple-dream" }>;
        /** The names of the appearance presets. */
        readonly Appearance: Readonly<{ Flat: "flat"; Rounded: "rounded"; Card: "card" }>;
        /** The fonts every session has. */
        readonly Fonts: NumericConstants<"Default" | "CjkFallback" | "Icons">;
        /** Flags of createTexture. */
        readonly TextureFlags: NumericConstants<"None" | "Nearest" | "Repeat" | "Mipmaps">;
        /** The layers of a draw list. */
        readonly DrawListLayer: NumericConstants<"Window" | "Foreground" | "Background">;
        /** Flags of the draw list functions. */
        readonly DrawFlags: NumericConstants<"None" | "RoundCornersTopLeft" | "RoundCornersTopRight" | "RoundCornersBottomLeft" | "RoundCornersBottomRight" | "RoundCornersNone" | "RoundCornersAll" | "RoundCornersTop" | "RoundCornersBottom" | "RoundCornersLeft" | "RoundCornersRight" | "Closed">;
        /** The values of {@link ImGui.TouchMode}. */
        readonly TouchMode: Readonly<{ Touchable: "touchable"; Passthrough: "passthrough"; Auto: "auto" }>;
        /** The values of {@link ImGui.WindowMode}. */
        readonly WindowMode: Readonly<{ Overlay: "overlay"; Activity: "activity"; Privileged: "privileged" }>;
        /** The values of {@link ImGui.LogLevel}. */
        readonly LogLevel: Readonly<{ Log: "log"; Debug: "debug"; Info: "info"; Warn: "warn"; Error: "error" }>;
        /** The values of {@link ImGui.ToastPosition}. */
        readonly ToastPosition: Readonly<{ TopLeft: "top-left"; TopCenter: "top-center"; TopRight: "top-right"; Center: "center"; BottomLeft: "bottom-left"; BottomCenter: "bottom-center"; BottomRight: "bottom-right" }>;
        /** Material icons by name, as text for the Icons font; see icon. */
        readonly Icons: StringConstants<"Error" | "Warning" | "Pause" | "Play" | "Stop" | "Add" | "Copy" | "Save" | "Download" | "Upload" | "Edit" | "ArrowBack" | "ArrowForward" | "Check" | "ChevronLeft" | "ChevronRight" | "Close" | "ExpandLess" | "ExpandMore" | "Menu" | "MoreHoriz" | "MoreVert" | "Refresh" | "Person" | "Star" | "BugReport" | "Code" | "Delete" | "DoneAll" | "Favorite" | "Home" | "Info" | "Lock" | "LockOpen" | "Search" | "Settings" | "Visibility" | "VisibilityOff">;
        /** Directions, for arrowButton. */
        readonly Dir: NumericConstants<"None" | "Left" | "Right" | "Up" | "Down">;
        /** Flags of invisibleButton. */
        readonly ButtonFlags: NumericConstants<"None" | "MouseButtonLeft" | "MouseButtonRight" | "MouseButtonMiddle" | "EnableNav">;
        /** Keyboard keys; the keys 0 to 9 are Digit0 to Digit9. ModCtrl and so on equal Mod.Ctrl and so on. */
        readonly Key: NumericConstants<"None" | "Tab" | "LeftArrow" | "RightArrow" | "UpArrow" | "DownArrow" | "PageUp" | "PageDown" | "Home" | "End" | "Insert" | "Delete" | "Backspace" | "Space" | "Enter" | "Escape" | "LeftCtrl" | "LeftShift" | "LeftAlt" | "LeftSuper" | "RightCtrl" | "RightShift" | "RightAlt" | "RightSuper" | "Menu" | "Digit0" | "Digit1" | "Digit2" | "Digit3" | "Digit4" | "Digit5" | "Digit6" | "Digit7" | "Digit8" | "Digit9" | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z" | "F1" | "F2" | "F3" | "F4" | "F5" | "F6" | "F7" | "F8" | "F9" | "F10" | "F11" | "F12" | "F13" | "F14" | "F15" | "F16" | "F17" | "F18" | "F19" | "F20" | "F21" | "F22" | "F23" | "F24" | "Apostrophe" | "Comma" | "Minus" | "Period" | "Slash" | "Semicolon" | "Equal" | "LeftBracket" | "Backslash" | "RightBracket" | "GraveAccent" | "CapsLock" | "ScrollLock" | "NumLock" | "PrintScreen" | "Pause" | "Keypad0" | "Keypad1" | "Keypad2" | "Keypad3" | "Keypad4" | "Keypad5" | "Keypad6" | "Keypad7" | "Keypad8" | "Keypad9" | "KeypadDecimal" | "KeypadDivide" | "KeypadMultiply" | "KeypadSubtract" | "KeypadAdd" | "KeypadEnter" | "KeypadEqual" | "AppBack" | "AppForward" | "Oem102" | "ModCtrl" | "ModShift" | "ModAlt" | "ModSuper">;
        /** Modifier bits, combined with a key by | in a key chord: ui.Mod.Ctrl | ui.Key.S. */
        readonly Mod: NumericConstants<"None" | "Ctrl" | "Shift" | "Alt" | "Super">;
        /** Flags of shortcut and setNextItemShortcut. */
        readonly InputFlags: NumericConstants<"None" | "Repeat" | "RouteActive" | "RouteFocused" | "RouteGlobal" | "RouteAlways" | "RouteOverFocused" | "RouteOverActive" | "RouteUnlessBgFocused" | "RouteFromRootWindow" | "Tooltip">;
        /** Flags of the drag-and-drop functions. */
        readonly DragDropFlags: NumericConstants<"None" | "SourceNoPreviewTooltip" | "SourceNoDisableHover" | "SourceNoHoldToOpenOthers" | "SourceAllowNullID" | "SourceExtern" | "PayloadAutoExpire" | "PayloadNoCrossContext" | "PayloadNoCrossProcess" | "AcceptBeforeDelivery" | "AcceptNoDrawDefaultRect" | "AcceptNoPreviewTooltip" | "AcceptDrawAsHovered" | "AcceptPeekOnly">;
        /** Flags of beginMultiSelect. Ctrl+A selects all unless NoSelectAll is set; ClearOnEscape and the BoxSelect flags are off by default. */
        readonly MultiSelectFlags: NumericConstants<"None" | "SingleSelect" | "NoSelectAll" | "NoRangeSelect" | "NoAutoSelect" | "NoAutoClear" | "NoAutoClearOnReselect" | "BoxSelect1d" | "BoxSelect2d" | "BoxSelectNoScroll" | "ClearOnEscape" | "ClearOnClickVoid" | "ScopeWindow" | "ScopeRect" | "SelectOnAuto" | "SelectOnClickAlways" | "SelectOnClickRelease" | "NavWrapX" | "NoSelectOnRightClick">;

        /** Any time. What this device supports, without opening a window. */
        getBackendCapabilities(): BackendCapabilities;
        /** Any time. The names of the bundled examples. */
        listExamples(): string[];
        /** Any time. The source of a bundled example. */
        getExampleSource(name: string): string;
        /** On the script thread, outside a frame: runs a bundled example and returns its session. */
        runExample(name: string, options?: ExampleOptions): Session;
        /** Any time. Packs a color into the 0xAABBGGRR integer of Dear ImGui. */
        colorU32(red: number | Color, green?: number, blue?: number, alpha?: number): number;
        /** Any time. The text of an icon, followed by label; show it with the Icons font. */
        icon(name: string, label?: Stringifiable): string;
        /** Sets the position of the next window in px, relative to the surface. pivot is 0..1 inside the window. */
        setNextWindowPos(x: number, y: number, condition?: number, pivotX?: number, pivotY?: number): void;
        /** Sets the size of the next window in px; 0 fits that side to the content. */
        setNextWindowSize(width: number, height: number, condition?: number): void;
        /** Limits the size of the next window in px; -1 keeps the current size of that side. */
        setNextWindowSizeConstraints(minWidth: number, minHeight: number, maxWidth: number, maxHeight: number): void;
        /** Sets the background opacity 0..1 of the next window. */
        setNextWindowBgAlpha(alpha: number): void;
        /**
         * Gives the next root window of this frame (begin or withWindow) the focus and brings it to the front. Applies once:
         * calling it every frame keeps taking the focus from the user. Dear ImGui ImGui::SetNextWindowFocus.
         */
        setNextWindowFocus(): void;
        /**
         * Collapses or expands the next root window of this frame to its title bar.
         * @param condition Cond: Always (0, the default) applies at each call, so a call in every frame overrules the
         * arrow in the title bar; Once applies once per session, Appearing each time the window appears, FirstUseEver
         * only to a window without saved settings.
         */
        setNextWindowCollapsed(collapsed: boolean, condition?: number): void;
        /** Gives the keyboard focus to the next item, or to the one offset items on. */
        setKeyboardFocusHere(offset?: number): void;
        /** Opens a root window; end must follow even when it returns false (collapsed or clipped). open adds a close button. */
        begin(name: string, open?: MutableValue<boolean> | null, flags?: number): boolean;
        /** Closes the window of begin. */
        end(): void;
        /** Opens a child window, sizes in px with 0 filling the rest; endChild must follow. borders takes a boolean or ChildFlags. */
        beginChild(id: string, width?: number, height?: number, borders?: boolean | number, flags?: number): boolean;
        /** Closes the window of beginChild. */
        endChild(): void;
        /** The position of the current window in px. */
        getWindowPos(): Vec2;
        /** The size of the current window in px. */
        getWindowSize(): Vec2;
        /** The space left in the current window in px. */
        getContentRegionAvail(): Vec2;
        /** The layout cursor in px, relative to the window. */
        getCursorPos(): Vec2;
        /** Moves the layout cursor, in px relative to the window. */
        setCursorPos(x: number, y: number): void;
        /** Draws text, converted with String(). */
        text(value: Stringifiable): void;
        /** Draws text that wraps at the end of the window. */
        textWrapped(value: Stringifiable): void;
        /** Draws text in a color. */
        textColored(color: Color, value: Stringifiable): void;
        /** Draws text in a color. */
        textColored(red: number, green: number, blue: number, alpha: number, value: Stringifiable): void;
        /** Draws a button and returns true when it was tapped. Sizes are px; 0 fits the label. */
        button(label: string, width?: number, height?: number): boolean;
        /** Draws a button without frame padding and returns true when it was tapped. */
        smallButton(label: string): boolean;
        /** Draws a checkbox and returns true when it changed value. */
        checkbox(label: string, value: MutableValue<boolean>): boolean;
        /** Draws a radio button that sets value to buttonValue; returns true when tapped. */
        radioButton(label: string, value: MutableValue<number>, buttonValue: number): boolean;
        /** Draws a slider and returns true when it changed value. format is printf-style; flags are SliderFlags. */
        sliderFloat(label: string, value: MutableValue<number>, min: number, max: number, format?: string, flags?: number): boolean;
        /** Draws an integer slider and returns true when it changed value. */
        sliderInt(label: string, value: MutableValue<number>, min: number, max: number, format?: string, flags?: number): boolean;
        /** Draws a field changed by dragging; returns true when it changed value. min equal to max (default) means no limit. */
        dragFloat(label: string, value: MutableValue<number>, speed?: number, min?: number, max?: number, format?: string, flags?: number): boolean;
        /** Draws an integer field changed by dragging; returns true when it changed value. */
        dragInt(label: string, value: MutableValue<number>, speed?: number, min?: number, max?: number, format?: string, flags?: number): boolean;
        /** Draws a text field and returns true when it changed value. maxLength is in bytes, with the terminator; flags are InputTextFlags. */
        inputText(label: string, value: MutableValue<string>, maxLength?: number, flags?: number): boolean;
        /** Draws an RGB editor; value holds 3 numbers, 0..1. Returns true when it changed value. */
        colorEdit3(label: string, value: MutableValue<readonly number[]> | NativeArray<number>, flags?: number): boolean;
        /** Draws an RGBA editor; value holds 4 numbers, 0..1. Returns true when it changed value. */
        colorEdit4(label: string, value: MutableValue<readonly number[]> | NativeArray<number>, flags?: number): boolean;
        /** Draws a progress bar, fraction 0..1. Sizes are px: width -1 fills, height 0 is the frame height. */
        progressBar(fraction: number, width?: number, height?: number, overlay?: string): void;
        /** Draws a combo box of up to Limits.SelectionMaxItems items; returns true when the selection changed. */
        combo(label: string, currentItem: MutableValue<number>, items: readonly Stringifiable[], popupHeight?: number): boolean;
        /** Draws a selectable row and returns true when it was tapped. Sizes are px. */
        selectable(label: string, selected?: boolean, flags?: number, width?: number, height?: number): boolean;
        /** Draws a header that folds what follows; returns true while open. */
        collapsingHeader(label: string, flags?: number): boolean;
        /** Draws a tree node; while it returns true, treePop must follow. */
        treeNode(label: string): boolean;
        /** Closes the tree node. */
        treePop(): void;
        /** Opens a tab bar; while it returns true, endTabBar must follow. */
        beginTabBar(id: string, flags?: number): boolean;
        /** Closes the tab bar. */
        endTabBar(): void;
        /** Opens a tab; while it returns true, endTabItem must follow. open adds a close button. */
        beginTabItem(label: string, open?: MutableValue<boolean> | null, flags?: number): boolean;
        /** Closes the tab. */
        endTabItem(): void;
        /** Keeps the next item on this line. Offsets are px. */
        sameLine(offsetFromStartX?: number, spacing?: number): void;
        /** Draws a separator line. */
        separator(): void;
        /** Adds a vertical gap. */
        spacing(): void;
        /** Ends the line, or adds an empty one. */
        newLine(): void;
        /** Reserves an empty item, sizes in px. */
        dummy(width: number, height: number): void;
        /** Sets the width of the next item in px; negative leaves that much room at the right. */
        setNextItemWidth(width: number): void;
        /** Sets the width of the following items in px, until popItemWidth. */
        pushItemWidth(width: number): void;
        /** Undoes pushItemWidth. */
        popItemWidth(): void;
        /** Whether the last item was clicked in this frame. */
        isItemClicked(mouseButton?: number): boolean;
        /** Whether the pointer is over the last item. flags are HoveredFlags. */
        isItemHovered(flags?: number): boolean;
        /** While a session runs. Whether Dear ImGui uses the pointer now. */
        wantCaptureMouse(): boolean;
        /** While a session runs. Whether the pointer is over an item. */
        isAnyItemHovered(): boolean;
        /** While a session runs. Whether an item is being held or edited. */
        isAnyItemActive(): boolean;
        /** While a session runs. Applies the dark colors of Dear ImGui. */
        styleColorsDark(): void;
        /** While a session runs. Applies the light colors of Dear ImGui. */
        styleColorsLight(): void;
        /** While a session runs. Applies the classic colors of Dear ImGui. */
        styleColorsClassic(): void;
        /** Draws the Dear ImGui demo window. */
        showDemoWindow(open?: MutableValue<boolean> | null): void;
        /**
         * The debug and information windows of Dear ImGui. Each call draws the window, as showDemoWindow does; with an
         * open reference the window gets a close button that sets it to false, so call it while the reference is true.
         * showStyleEditor and showUserGuide put the upstream block in a window of its own ("Dear ImGui Style Editor",
         * "Dear ImGui User Guide"). createWindow({debug: true}) shows the Metrics and Debug Log windows itself.
         */
        showMetricsWindow(open?: MutableValue<boolean> | null): void;
        /** Draws the Debug Log window; see showMetricsWindow. */
        showDebugLogWindow(open?: MutableValue<boolean> | null): void;
        /** Draws the ID Stack Tool window; see showMetricsWindow. */
        showIdStackToolWindow(open?: MutableValue<boolean> | null): void;
        /** Draws the style editor; see showMetricsWindow. */
        showStyleEditor(open?: MutableValue<boolean> | null): void;
        /** Draws the About window; see showMetricsWindow. */
        showAboutWindow(open?: MutableValue<boolean> | null): void;
        /** Draws the user guide; see showMetricsWindow. */
        showUserGuide(open?: MutableValue<boolean> | null): void;
        /** Draws a separator with text in it. */
        separatorText(label: string): void;
        /** Draws a bullet point; the next item stays on this line. */
        bullet(): void;
        /** Draws text after a bullet point. */
        bulletText(text: Stringifiable): void;
        /** Draws text with a label beside it, in the layout of a widget. */
        labelText(label: string, text: Stringifiable): void;
        /** Draws text in the disabled color. */
        textDisabled(text: Stringifiable): void;
        /** Draws a square button with an arrow, direction a Dir value; returns true when tapped. */
        arrowButton(id: string, direction: number): boolean;
        /** Reserves a touchable area, sizes in px and above 0; returns true when tapped. flags are ButtonFlags. */
        invisibleButton(id: string, width: number, height: number, flags?: number): boolean;
        /** Draws an integer field with step buttons; returns true when it changed value. */
        inputInt(label: string, value: MutableValue<number>, step?: number, stepFast?: number, flags?: number): boolean;
        /** Draws a number field; returns true when it changed value. Steps of 0 hide the buttons. */
        inputFloat(label: string, value: MutableValue<number>, step?: number, stepFast?: number, format?: string, flags?: number): boolean;
        /** Draws a multi-line text field, sizes in px; returns true when it changed value. */
        inputTextMultiline(label: string, value: MutableValue<string>, maxLength?: number, width?: number, height?: number, flags?: number): boolean;
        /** Opens a list box, sizes in px; while it returns true, endListBox must follow. */
        beginListBox(label: string, width?: number, height?: number): boolean;
        /** Closes the list box. */
        endListBox(): void;
        /** Draws a list of up to Limits.SelectionMaxItems items; returns true when the selection changed. */
        listBox(label: string, currentItem: MutableValue<number>, items: readonly Stringifiable[], heightInItems?: number): boolean;
        /** Draws an RGB picker; returns true when it changed value. */
        colorPicker3(label: string, value: MutableValue<readonly number[]> | NativeArray<number>, flags?: number): boolean;
        /** Draws an RGBA picker; returns true when it changed value. */
        colorPicker4(label: string, value: MutableValue<readonly number[]> | NativeArray<number>, flags?: number): boolean;
        /** Draws a color swatch and returns true when tapped. Sizes are px; flags are ColorEditFlags. */
        colorButton(id: string, color: Color, flags?: number, width?: number, height?: number): boolean;
        /** Draws a color swatch and returns true when tapped. Sizes are px; flags are ColorEditFlags. */
        colorButton(id: string, color: Color, options: { flags?: number; width?: number; height?: number }): boolean;
        /** Draws a color swatch and returns true when tapped. Sizes are px; flags are ColorEditFlags. */
        colorButton(id: string, red: number, green: number, blue: number, alpha?: number, flags?: number, width?: number, height?: number): boolean;
        /** Draws values as a line plot. */
        plotLines(label: string, values: readonly number[] | NativeArray<number>, options?: PlotOptions): void;
        /** Draws values as bars. */
        plotHistogram(label: string, values: readonly number[] | NativeArray<number>, options?: PlotOptions): void;
        /** Draws a tree node with TreeNodeFlags; while it returns true, treePop must follow. */
        treeNodeEx(label: string, flags?: number): boolean;
        /**
         * Multi-component widgets: value is imgui.floats([...]) / imgui.ints([...]) or {value: [...]} with at least as
         * many numbers as the widget has components (2, 3 or 4), written back when the user edits them. The other
         * arguments are those of the one-component form; inputFloat2 .. 4 and inputInt2 .. 4 have no steps, as in
         * Dear ImGui. For the drags, min equal to max (the default) means no limit.
         */
        dragFloat2(label: string, value: NumberArrayValue, speed?: number, min?: number, max?: number, format?: string, flags?: number): boolean;
        /** See dragFloat2. */
        dragFloat3(label: string, value: NumberArrayValue, speed?: number, min?: number, max?: number, format?: string, flags?: number): boolean;
        /** See dragFloat2. */
        dragFloat4(label: string, value: NumberArrayValue, speed?: number, min?: number, max?: number, format?: string, flags?: number): boolean;
        /** See dragFloat2. */
        dragInt2(label: string, value: NumberArrayValue, speed?: number, min?: number, max?: number, format?: string, flags?: number): boolean;
        /** See dragFloat2. */
        dragInt3(label: string, value: NumberArrayValue, speed?: number, min?: number, max?: number, format?: string, flags?: number): boolean;
        /** See dragFloat2. */
        dragInt4(label: string, value: NumberArrayValue, speed?: number, min?: number, max?: number, format?: string, flags?: number): boolean;
        /** See dragFloat2. */
        sliderFloat2(label: string, value: NumberArrayValue, min?: number, max?: number, format?: string, flags?: number): boolean;
        /** See dragFloat2. */
        sliderFloat3(label: string, value: NumberArrayValue, min?: number, max?: number, format?: string, flags?: number): boolean;
        /** See dragFloat2. */
        sliderFloat4(label: string, value: NumberArrayValue, min?: number, max?: number, format?: string, flags?: number): boolean;
        /** See dragFloat2. */
        sliderInt2(label: string, value: NumberArrayValue, min?: number, max?: number, format?: string, flags?: number): boolean;
        /** See dragFloat2. */
        sliderInt3(label: string, value: NumberArrayValue, min?: number, max?: number, format?: string, flags?: number): boolean;
        /** See dragFloat2. */
        sliderInt4(label: string, value: NumberArrayValue, min?: number, max?: number, format?: string, flags?: number): boolean;
        /** See dragFloat2. */
        inputFloat2(label: string, value: NumberArrayValue, format?: string, flags?: number): boolean;
        /** See dragFloat2. */
        inputFloat3(label: string, value: NumberArrayValue, format?: string, flags?: number): boolean;
        /** See dragFloat2. */
        inputFloat4(label: string, value: NumberArrayValue, format?: string, flags?: number): boolean;
        /** See dragFloat2. */
        inputInt2(label: string, value: NumberArrayValue, flags?: number): boolean;
        /** See dragFloat2. */
        inputInt3(label: string, value: NumberArrayValue, flags?: number): boolean;
        /** See dragFloat2. */
        inputInt4(label: string, value: NumberArrayValue, flags?: number): boolean;
        /** Two mutable values, the lower and the upper end; formatMax (for the upper end) defaults to format. */
        dragFloatRange2(label: string, currentMin: MutableValue<number>, currentMax: MutableValue<number>, speed?: number, min?: number, max?: number, format?: string, formatMax?: string | null, flags?: number): boolean;
        /** Integer form of dragFloatRange2. */
        dragIntRange2(label: string, currentMin: MutableValue<number>, currentMax: MutableValue<number>, speed?: number, min?: number, max?: number, format?: string, formatMax?: string | null, flags?: number): boolean;
        /** value is in radians; degreesMin (-360), degreesMax (360) and the shown value ("%.0f deg") are in degrees. */
        sliderAngle(label: string, value: MutableValue<number>, degreesMin?: number, degreesMax?: number, format?: string, flags?: number): boolean;
        /** Draws a vertical slider, sizes in px. */
        vSliderFloat(label: string, width: number, height: number, value: MutableValue<number>, min: number, max: number, format?: string, flags?: number): boolean;
        /** Draws a vertical integer slider, sizes in px. */
        vSliderInt(label: string, width: number, height: number, value: MutableValue<number>, min: number, max: number, format?: string, flags?: number): boolean;
        /** Draws a switch and returns true when it changed value. */
        toggle(label: string, value: MutableValue<boolean>): boolean;
        /** Same as toggle. */
        toggleSwitch(label: string, value: MutableValue<boolean>): boolean;
        /** Opens a combo box with any content; while it returns true, endCombo must follow. */
        beginCombo(label: string, preview?: Stringifiable, flags?: number): boolean;
        /** Closes the combo box. */
        endCombo(): void;
        /**
         * Submits only the visible rows of a long list (Dear ImGui ListClipper). The callback runs once per visible
         * range and draws rows start <= i < end; the clipper ends even when the callback throws. Use it inside
         * beginCombo / beginListBox / beginChild for lists longer than Limits.SelectionMaxItems.
         */
        listClipper(itemCount: number, callback: (start: number, end: number) => void): void;
        listClipper(itemCount: number, options: ListClipperOptions | null | undefined, callback: (start: number, end: number) => void): void;
        /**
         * Starts a multi-select scope: Ctrl and Shift selection, select all, range selection across rows that are not
         * submitted. Dear ImGui does not keep the selection: apply the `requests` of this result before submitting the
         * rows and those of endMultiSelect after them, for example with selectionStorage(). Inside, call
         * setNextItemSelectionUserData(id) before each selectable or checkbox. With listClipper pass
         * `includeItems: [io.rangeSrcItem, io.navIdItem]`. Two scopes in one window need different ids (pushId).
         * @param flags MultiSelectFlags.
         * @param selectionSize The number of selected items, or -1 if not known (default). ClearOnEscape leaves the Escape key alone at 0.
         * @param itemsCount The number of items, or -1 if not known (default). Needed to select all with selectionStorage().
         */
        beginMultiSelect(flags?: number, selectionSize?: number, itemsCount?: number): MultiSelectIO;
        /**
         * Ends the scope in the window of its beginMultiSelect; otherwise throws IllegalStateException.
         * @param rangeSrcReset Forget the Shift anchor, after deleting selected items (`RangeSrcReset` in C++).
         */
        endMultiSelect(rangeSrcReset?: boolean): MultiSelectIO;
        /** Gives the next item its id in the scope: usually the row index, so that ranges can be walked. An integer from 0 to 2^53 - 1. */
        setNextItemSelectionUserData(id: number): void;
        /** Inside a multi-select scope: the selection state of the last item changed in this frame. Throws IllegalStateException outside. */
        isItemToggledSelection(): boolean;
        /** Any time. Creates an empty selection; it needs no session, so it can outlive a window. */
        selectionStorage(): SelectionStorage;
        /** Opens the popup with this id, from the next beginPopup on. */
        openPopup(id: string, flags?: number): void;
        /** Draws a popup while it is open; then endPopup must follow. */
        beginPopup(id: string, flags?: number): boolean;
        /** Draws a modal popup while it is open; then endPopup must follow. open adds a close button. */
        beginPopupModal(name: string, open?: MutableValue<boolean> | null, flags?: number): boolean;
        /** Opens a popup by a long press on the last item; while it returns true, endPopup must follow. */
        beginPopupContextItem(id?: string | null, flags?: number): boolean;
        /** Opens a popup by a long press on the window; while it returns true, endPopup must follow. */
        beginPopupContextWindow(id?: string | null, flags?: number): boolean;
        /** Closes a popup of beginPopup and the like. */
        endPopup(): void;
        /** Closes the popup this code runs in. */
        closeCurrentPopup(): void;
        /** Whether the popup is open. flags are PopupFlags. */
        isPopupOpen(id: string, flags?: number): boolean;
        /** Opens the menu bar of a window with WindowFlags.MenuBar; while it returns true, endMenuBar must follow. */
        beginMenuBar(): boolean;
        /** Closes the menu bar. */
        endMenuBar(): void;
        /** Opens a menu; while it returns true, endMenu must follow. */
        beginMenu(label: string, enabled?: boolean): boolean;
        /** Closes the menu. */
        endMenu(): void;
        /** Draws a menu entry and returns true when tapped. selected adds a check mark, and a reference follows it. */
        menuItem(label: string, shortcut?: string | null, selected?: MutableValue<boolean> | boolean, enabled?: boolean): boolean;
        /** Shows a tooltip for this frame. */
        setTooltip(text: Stringifiable): void;
        /** Shows a tooltip while the pointer is over the last item. */
        setItemTooltip(text: Stringifiable): void;
        /** Opens a tooltip with any content; endTooltip must follow when it returns true. */
        beginTooltip(): boolean;
        /** Opens a tooltip while the pointer is over the last item; then endTooltip must follow. */
        beginItemTooltip(): boolean;
        /** Closes the tooltip. */
        endTooltip(): void;
        /** Opens a table, sizes in px; while it returns true, endTable must follow. flags are TableFlags. */
        beginTable(id: string, columns: number, flags?: number, outerWidth?: number, outerHeight?: number): boolean;
        /** Closes the table. */
        endTable(): void;
        /** Starts a row; minRowHeight is in px. */
        tableNextRow(rowFlags?: number, minRowHeight?: number): void;
        /** Moves to the next cell; returns whether it is visible. */
        tableNextColumn(): boolean;
        /** Moves to a cell of this row; returns whether it is visible. */
        tableSetColumnIndex(columnIndex: number): boolean;
        /** userId (0 by default) comes back as columnUserId in {@link tableGetSortSpecs}. */
        tableSetupColumn(label: string, flags?: number, initWidthOrWeight?: number, userId?: number): void;
        /**
         * Sort specs of the current table, null when it was begun without TableFlags.Sortable. Call it after the
         * tableSetupColumn calls; when specsDirty is true, sort the rows. Reading the specs clears specsDirty, so it is
         * true in the frame the user clicked a header (and in the first frame).
         */
        tableGetSortSpecs(): TableSortSpecs | null;
        /** Keeps that many columns and rows in view while scrolling. */
        tableSetupScrollFreeze(columns: number, rows: number): void;
        /** Draws the header row from the tableSetupColumn calls. */
        tableHeadersRow(): void;
        /** Colors a row or a cell; target is a TableBgTarget value. */
        tableSetBgColor(target: number, color: Color, columnIndex?: number): void;
        /** Colors a row or a cell; target is a TableBgTarget value. */
        tableSetBgColor(target: number, red: number, green: number, blue: number, alpha?: number, columnIndex?: number): void;
        /** index is an imgui.Col value or name. */
        pushStyleColor(index: number | string, color: Color): void;
        pushStyleColor(index: number | string, red: number, green: number, blue: number, alpha?: number): void;
        /** Undoes count pushStyleColor calls, 1 by default. */
        popStyleColor(count?: number): void;
        /** index is an imgui.Col value or name. */
        setStyleColor(index: number | string, color: Color): Api;
        setStyleColor(index: number | string, red: number, green: number, blue: number, alpha?: number): Api;
        /** While a session runs. Sets style sizes and colors, and returns the API object. */
        setStyleProperties(properties: StyleProperties): Api;
        /** While a session runs. Applies a theme by name and returns its canonical name. */
        setTheme(name: ThemeName | string): ThemeName;
        /** Changes a style variable until popStyleVar. index is a StyleVar value or name; lengths are px. */
        pushStyleVar(index: number | string, x: number | Point, y?: number): void;
        /** Undoes count pushStyleVar calls, 1 by default. */
        popStyleVar(count?: number): void;
        /** Scales the text of the current window. */
        setWindowFontScale(scale: number): void;
        /** Uses a font until popFont: a Fonts value or the name of a font of WindowOptions.fonts. fontSize is px, 0 keeps it. */
        pushFont(font: number | string, fontSize?: number): number;
        /** Undoes pushFont. */
        popFont(): void;
        /** Runs body with a font; returns what body returns. */
        withFont<T>(font: number | string, fontSize: number | null | undefined, body: () => T): T | undefined;
        /** Runs body with a font; returns what body returns. */
        withFont<T>(font: number | string, body: () => T): T | undefined;
        /** While a session runs, on the script thread: loads an image into a texture, which the session frees when it closes. */
        createTexture(source: TextureSource, options?: TextureOptions | number): Texture;
        /** On the script thread: frees a texture; returns false when it was freed already. */
        destroyTexture(texture: Texture): boolean;
        /** Draws a texture. Sizes are px; see ImageOptions. */
        image(texture: Texture, width?: number | ImageOptions, height?: number, options?: ImageOptions): void;
        /** Draws a texture as a button and returns true when tapped. */
        imageButton(id: string, texture: Texture, width?: number | ImageOptions, height?: number, options?: ImageOptions): boolean;
        /** The draw list of the current window; px, drawn over its items. */
        getWindowDrawList(): DrawList;
        /** The draw list above all windows; px. */
        getForegroundDrawList(): DrawList;
        /** The draw list below all windows; px. */
        getBackgroundDrawList(): DrawList;
        /**
         * Clips the current window's drawing, hit testing and widget culling until popClipRect, in the same frame.
         * Coordinates are frame px, like the draw lists.
         * @param intersectWithCurrent Also apply the current clip rectangle; true by default (the DrawList form: false).
         */
        pushClipRect(minimum: Point, maximum: Point, intersectWithCurrent?: boolean): void;
        /** Throws an Error without a matching pushClipRect on the current window in this frame. */
        popClipRect(): void;
        /** Adds to the id of the following items, until popId. */
        pushId(id: string | number): void;
        /** Undoes pushId. */
        popId(): void;
        /** Starts treating the following items as one, until endGroup. */
        beginGroup(): void;
        /** Ends the group. */
        endGroup(): void;
        /** Moves the following items right, in px; 0 is the style indent. */
        indent(width?: number): void;
        /** Undoes indent. */
        unindent(width?: number): void;
        /** Aligns the text of this line with framed widgets. */
        alignTextToFramePadding(): void;
        /** Grays out and locks the following items, until endDisabled. */
        beginDisabled(disabled?: boolean): void;
        /** Undoes beginDisabled. */
        endDisabled(): void;
        /** Horizontal scroll of the current window in px. */
        getScrollX(): number;
        /** Vertical scroll of the current window in px. */
        getScrollY(): number;
        /** Largest horizontal scroll in px. */
        getScrollMaxX(): number;
        /** Largest vertical scroll in px. */
        getScrollMaxY(): number;
        /** Sets the horizontal scroll in px. */
        setScrollX(value: number): void;
        /** Sets the vertical scroll in px. */
        setScrollY(value: number): void;
        /** Scrolls the cursor to a position in the window, 0 left to 1 right, 0.5 by default. */
        setScrollHereX(centerRatio?: number): void;
        /** Scrolls the cursor to a position in the window, 0 top to 1 bottom, 0.5 by default. */
        setScrollHereY(centerRatio?: number): void;
        /** Whether the last item is being held or edited. */
        isItemActive(): boolean;
        /** Whether the last item changed its value in this frame. */
        isItemEdited(): boolean;
        /** Whether the last item became active in this frame. */
        isItemActivated(): boolean;
        /** Whether the last item stopped being active in this frame. */
        isItemDeactivated(): boolean;
        /** Same, and it changed value while active. */
        isItemDeactivatedAfterEdit(): boolean;
        /** Whether the last item has the keyboard focus. */
        isItemFocused(): boolean;
        /** Whether the last item is not clipped. */
        isItemVisible(): boolean;
        /** Whether the pointer is over the current window. flags are HoveredFlags. */
        isWindowHovered(flags?: number): boolean;
        /** Whether the current window has the focus. flags are FocusedFlags. */
        isWindowFocused(flags?: number): boolean;
        /** Whether the current window is collapsed to its title bar. */
        isWindowCollapsed(): boolean;
        /** Whether the current window appears in this frame. */
        isWindowAppearing(): boolean;
        /** While a session runs. The pointer position in px. */
        getMousePos(): Vec2;
        /** While a session runs. Whether a pointer button is held. button is a MouseButton value, Left by default. */
        isMouseDown(button?: number): boolean;
        /** While a session runs. Whether a pointer button went down in this frame. */
        isMouseClicked(button?: number, repeat?: boolean): boolean;
        /** While a session runs. Whether a pointer button was double-clicked in this frame. */
        isMouseDoubleClicked(button?: number): boolean;
        /** While a session runs. Whether a pointer button went up in this frame. */
        isMouseReleased(button?: number): boolean;
        /** While a session runs. Whether a pointer button drags. lockThreshold is px, -1 for the default. */
        isMouseDragging(button?: number, lockThreshold?: number): boolean;
        /** While a session runs. The distance of the drag in px. */
        getMouseDragDelta(button?: number, lockThreshold?: number): Vec2;
        /** While a session runs. Starts the drag distance from the current position. */
        resetMouseDragDelta(button?: number): void;
        /** The size of text in px with the current font. wrapWidth is px, -1 for none. */
        calcTextSize(text: Stringifiable, wrapWidth?: number): Vec2;
        /** Height of a framed widget in px. */
        getFrameHeight(): number;
        /** The same with the spacing to the next line. */
        getFrameHeightWithSpacing(): number;
        /** Height of a line of text in px. */
        getTextLineHeight(): number;
        /** The same with the spacing to the next line. */
        getTextLineHeightWithSpacing(): number;
        /** While a session runs. Frames per second, Dear ImGui's running average. */
        framerate(): number;
        /** While a session runs. Queues text as typed input for the focused text field. */
        addInputCharacters(text: Stringifiable): void;
        /** While a session runs. Queues a key change. key is a Key value. */
        addKeyEvent(key: number, down: boolean): void;
        /** While a session runs. Queues a key press and release. */
        sendKey(key: number): void;
        /** While a session runs. Queues wheel steps. */
        addMouseWheel(wheelX?: number, wheelY?: number): void;
        /**
         * While a session runs. Injects a pointer position, in frame px like getMousePos (not dp), for the next frame. It counts as touch
         * input. A position and a button change apart take effect in separate frames, in the order of the calls.
         */
        addMousePosEvent(x: number, y: number): void;
        /**
         * While a session runs. Injects a pointer button change for the next frame; see addMousePosEvent.
         * @param button MouseButton: 0 left, 1 right, 2 middle, up to 4.
         */
        addMouseButtonEvent(button: number, down: boolean): void;
        /** While a session runs. Whether a text field has the focus. */
        wantTextInput(): boolean;

        // Key queries, while a session runs: key is a Key or Mod value, keyChord a Key value combined with Mod values, such
        // as Mod.Ctrl | Key.S. A value that is neither throws a RangeError.
        /** While a session runs. Whether a key is held. */
        isKeyDown(key: number): boolean;
        /** @param repeat Also true on the repeats while the key stays down (io.KeyRepeatDelay, io.KeyRepeatRate); true by default. */
        isKeyPressed(key: number, repeat?: boolean): boolean;
        /** While a session runs. Whether a key went up in this frame. */
        isKeyReleased(key: number): boolean;
        /** How many times a key held down would have repeated in this frame, for the given delay and rate in seconds. */
        getKeyPressedAmount(key: number, repeatDelay: number, rate: number): number;
        /** English name of a key, "None" for Key.None. For display and debugging: do not save it. */
        getKeyName(key: number): string;
        /** Whether the chord was pressed, without any focus check; prefer shortcut. */
        isKeyChordPressed(keyChord: number): boolean;
        /**
         * Whether the chord was pressed and this code may act on it: by default the key goes to the focused window.
         * @param flags InputFlags: Repeat, and one route such as RouteGlobal.
         */
        shortcut(keyChord: number, flags?: number): boolean;
        /** Makes the next item react to a chord as if it were activated. @param flags InputFlags, also Tooltip. */
        setNextItemShortcut(keyChord: number, flags?: number): void;

        /**
         * Any time. The text of the Android clipboard, the one the host's getClip reads, also outside a window session. Empty when
         * there is no text. From Android 10 the system gives an empty or old value unless the host or a plugin window
         * has the input focus; see docs/LIMITS.md.
         */
        getClipboardText(): string;
        /** Any time. Sets the Android clipboard, the one the host's setClip writes. */
        setClipboardText(text: Stringifiable): void;

        /**
         * Call after an item: true while it is dragged. Then call setDragDropPayload and endDragDropSource (or use
         * withDragDropSource); what you draw in between shows in the preview tooltip.
         * @param flags DragDropFlags; items without an id, such as text, need SourceAllowNullID.
         */
        beginDragDropSource(flags?: number): boolean;
        /**
         * @param type Identifies the kind of data for the target: 1 to 32 UTF-8 bytes, not starting with "_".
         * @param data A string, a number or anything JSON.stringify accepts: at most Limits.DragDropPayloadMaxBytes as JSON.
         * @param condition Cond.Always (default, updates the data each frame) or Cond.Once.
         * @returns Whether a target accepted the payload in the previous frame.
         */
        setDragDropPayload(type: string, data: JsonSerializable, condition?: number): boolean;
        /** Closes the source of beginDragDropSource. */
        endDragDropSource(): void;
        /** Call after an item: true while a payload hovers it. Then call acceptDragDropPayload and endDragDropTarget. */
        beginDragDropTarget(): boolean;
        /**
         * The payload when one of this type was dropped here, otherwise null. "_COL3F" and "_COL4F" accept colors dragged
         * from color widgets.
         * @param flags DragDropFlags; AcceptBeforeDelivery also returns it before the release (see `delivery`).
         */
        acceptDragDropPayload<Data = any>(type: string, flags?: number): DragDropPayload<Data> | null;
        /** Closes the target of beginDragDropTarget. */
        endDragDropTarget(): void;
        /** While a session runs. The payload of the drag in progress, or null. */
        getDragDropPayload<Data = any>(): DragDropPayload<Data> | null;
        /** Runs body in a root window between begin and end; returns whether it ran. flags are WindowFlags. */
        withWindow(name: string, open: MutableValue<boolean> | null | undefined, flags: number | undefined, body: FrameBody): boolean;
        /** Runs body in a child window; returns whether it ran. */
        withChild(id: string, width: number | undefined, height: number | undefined, borders: boolean | number | undefined, flags: number | undefined, body: FrameBody): boolean;
        /** Runs body while the tree node is open; returns whether it ran. */
        withTreeNode(label: string, body: FrameBody): boolean;
        /** Runs body in a tab bar; returns whether it ran. */
        withTabBar(id: string, flags: number | undefined, body: FrameBody): boolean;
        /** Runs body while the tab is selected; returns whether it ran. */
        withTabItem(label: string, open: MutableValue<boolean> | null | undefined, flags: number | undefined, body: FrameBody): boolean;
        /** Runs body in a table; returns whether it ran. */
        withTable(id: string, columns: number, flags: number | undefined, outerWidth: number | undefined, outerHeight: number | undefined, body: FrameBody): boolean;
        /** Runs body while the popup is open; returns whether it ran. */
        withPopup(id: string, flags: number | undefined, body: FrameBody): boolean;
        /** Runs body while the modal popup is open; returns whether it ran. */
        withPopupModal(name: string, open: MutableValue<boolean> | null | undefined, flags: number | undefined, body: FrameBody): boolean;
        /** Runs body in the popup that a long press on the last item opens; returns whether it ran. */
        withContextItem(id: string | null, flags: number | undefined, body: FrameBody): boolean;
        /** Runs body in the popup that a long press on the last item opens; returns whether it ran. */
        withContextItem(id: string | null, body: FrameBody): boolean;
        /** Runs body in the popup that a long press on the last item opens; returns whether it ran. */
        withContextItem(body: FrameBody): boolean;
        /** Runs body in the popup that a long press on the window opens; returns whether it ran. */
        withContextWindow(id: string | null, flags: number | undefined, body: FrameBody): boolean;
        /** Runs body in the popup that a long press on the window opens; returns whether it ran. */
        withContextWindow(id: string | null, body: FrameBody): boolean;
        /** Runs body in the popup that a long press on the window opens; returns whether it ran. */
        withContextWindow(body: FrameBody): boolean;
        /** Runs body in a tooltip; returns whether it ran. */
        withTooltip(body: FrameBody): boolean;
        /** Runs body in a tooltip while the pointer is over the last item; returns whether it ran. */
        withItemTooltip(body: FrameBody): boolean;
        /** Runs body in the menu bar; returns whether it ran. */
        withMenuBar(body: FrameBody): boolean;
        /** Runs body while the menu is open; returns whether it ran. */
        withMenu(label: string, enabled: boolean | undefined, body: FrameBody): boolean;
        /** Runs body in a list box; returns whether it ran. */
        withListBox(label: string, width: number | undefined, height: number | undefined, body: FrameBody): boolean;
        /** Runs body while the combo box is open; returns whether it ran. */
        withCombo(label: string, preview: Stringifiable, flags: number | undefined, body: FrameBody): boolean;
        /** Calls body while the last item is dragged, inside beginDragDropSource / endDragDropSource. */
        withDragDropSource(flags: number | undefined, body: FrameBody): boolean;
        withDragDropSource(body: FrameBody): boolean;
        /** Calls body while a payload hovers the last item, inside beginDragDropTarget / endDragDropTarget. */
        withDragDropTarget(body: FrameBody): boolean;
        /** Runs body in a group. */
        withGroup(body: FrameBody): void;
        /** Runs body with its items disabled when the first argument is true. */
        withDisabled(disabled: boolean, body: FrameBody): void;
        /** Runs body with an id pushed. */
        withId(id: string | number, body: FrameBody): void;
        /** While a session runs. Same as {@link Session.logWindow}, on the active session. */
        logWindow(id?: string, options?: LogWindowOptions): LogWindow;
        /** While a session runs. Same as {@link Session.toast}, on the active session. */
        toast(text: Stringifiable, duration?: number | ToastOptions, options?: ToastOptions): Toast;
        /** While a session runs. Same as {@link Session.statsOverlay}, on the active session. */
        statsOverlay(id?: string | StatsOverlayOptions, options?: StatsOverlayOptions): StatsOverlay;
        /** While a session runs. Same as {@link Session.dataTable}, on the active session. */
        dataTable<Row = any>(id: string, headers: readonly DataTableHeaderLike<Row>[], rows: readonly Row[], options?: DataTableOptions<Row>): DataTable<Row>;
        /** On the script thread, outside a frame: opens a window session. One session per script engine: a new session closes the previous one. */
        createWindow(renderCallback: RenderCallback, options?: WindowOptions): Session;
        /** Any time. Closes the active session; does nothing without one. */
        closeWindow(): void;
        /** createWindow with the mode "overlay". */
        launchFloaty(renderCallback: RenderCallback, options?: WindowOptions): Session;
        /** createWindow with the mode "activity". */
        launch(renderCallback: RenderCallback, options?: WindowOptions): Session;
        /** createWindow with the mode "privileged". */
        launchPrivileged(renderCallback: RenderCallback, options?: WindowOptions): Session;
        /** Acts on the active session. @throws Error "imgui.addButtonEx: no active session" without one. */
        addButtonEx(label: Stringifiable, callback: () => void, options?: FloatingButtonOptions): FloatingButton;
        /** Acts on the active session. @throws Error "imgui.setTouchable: no active session" without one. */
        setTouchable(touchMode: TouchMode | boolean): Session;
        /** Acts on the active session. @throws Error "imgui.setMoreTouch: no active session" without one. */
        setMoreTouch(enabled: boolean): Session;
        /** Acts on the active session. @throws Error "imgui.setGlobalAlpha: no active session" without one. */
        setGlobalAlpha(alpha: number): Session;
        /** Acts on the active session. @throws Error "imgui.setSecure: no active session" without one. */
        setSecure(secure: boolean): Session;
        /** Acts on the active session. @throws Error "imgui.collapseWindow: no active session" without one. */
        collapseWindow(): Session;
        /** Acts on the active session. @throws Error "imgui.expandWindow: no active session" without one. */
        expandWindow(): Session;
        /**
         * Component of the active session, null when it has none of that type and id.
         * @throws Error "imgui.getComponent: no active session" without an active session.
         */
        getComponent(type: string, id: string): Component | null;
    }

    interface ApiAliases {
        /** Same as {@link ApiCore.ref}. */
        readonly Ref: ApiCore["ref"];
        /** Same as {@link ApiCore.dp}. */
        readonly Dp: ApiCore["dp"];
        /** Same as {@link ApiCore.px}. */
        readonly Px: ApiCore["px"];
        /** Same as {@link ApiCore.getBackendCapabilities}. */
        readonly GetBackendCapabilities: ApiCore["getBackendCapabilities"];
        /** Same as {@link ApiCore.listExamples}. */
        readonly ListExamples: ApiCore["listExamples"];
        /** Same as {@link ApiCore.getExampleSource}. */
        readonly GetExampleSource: ApiCore["getExampleSource"];
        /** Same as {@link ApiCore.runExample}. */
        readonly RunExample: ApiCore["runExample"];
        /** Same as {@link ApiCore.logWindow}. */
        readonly LogWindow: ApiCore["logWindow"];
        /** Same as {@link ApiCore.toast}. */
        readonly Toast: ApiCore["toast"];
        /** Same as {@link ApiCore.alert}. */
        readonly Alert: ApiCore["alert"];
        /** Same as {@link ApiCore.confirm}. */
        readonly Confirm: ApiCore["confirm"];
        /** Same as {@link ApiCore.singleChoice}. */
        readonly SingleChoice: ApiCore["singleChoice"];
        /** Same as {@link ApiCore.multiChoice}. */
        readonly MultiChoice: ApiCore["multiChoice"];
        /** Same as {@link ApiCore.statsOverlay}. */
        readonly StatsOverlay: ApiCore["statsOverlay"];
        /** Same as {@link ApiCore.dataTable}. */
        readonly DataTable: ApiCore["dataTable"];
        /** Same as {@link ApiCore.getComponent}. */
        readonly GetComponent: ApiCore["getComponent"];
        /** Same as {@link ApiCore.createWindow}. */
        readonly CreateWindow: ApiCore["createWindow"];
        /** Same as {@link ApiCore.closeWindow}. */
        readonly CloseWindow: ApiCore["closeWindow"];
        /** Same as {@link ApiCore.launchFloaty}. */
        readonly LaunchFloaty: ApiCore["launchFloaty"];
        /** Same as {@link ApiCore.launch}. */
        readonly Launch: ApiCore["launch"];
        /** Same as {@link ApiCore.launchPrivileged}. */
        readonly LaunchPrivileged: ApiCore["launchPrivileged"];
        /** Same as {@link ApiCore.addButtonEx}. */
        readonly AddButtonEx: ApiCore["addButtonEx"];
        /** Same as {@link ApiCore.setTouchable}. */
        readonly SetTouchable: ApiCore["setTouchable"];
        /** Same as {@link ApiCore.setMoreTouch}. */
        readonly SetMoreTouch: ApiCore["setMoreTouch"];
        /** Same as {@link ApiCore.setGlobalAlpha}. */
        readonly SetGlobalAlpha: ApiCore["setGlobalAlpha"];
        /** Same as {@link ApiCore.setSecure}. */
        readonly SetSecure: ApiCore["setSecure"];
        /** Same as {@link ApiCore.collapseWindow}. */
        readonly CollapseWindow: ApiCore["collapseWindow"];
        /** Same as {@link ApiCore.expandWindow}. */
        readonly ExpandWindow: ApiCore["expandWindow"];
        /** Same as {@link ApiCore.setNextWindowPos}. */
        readonly SetNextWindowPos: ApiCore["setNextWindowPos"];
        /** Same as {@link ApiCore.setNextWindowSize}. */
        readonly SetNextWindowSize: ApiCore["setNextWindowSize"];
        /** Same as {@link ApiCore.setNextWindowSizeConstraints}. */
        readonly SetNextWindowSizeConstraints: ApiCore["setNextWindowSizeConstraints"];
        /** Same as {@link ApiCore.setNextWindowBgAlpha}. */
        readonly SetNextWindowBgAlpha: ApiCore["setNextWindowBgAlpha"];
        /** Same as {@link ApiCore.setNextWindowFocus}. */
        readonly SetNextWindowFocus: ApiCore["setNextWindowFocus"];
        /** Same as {@link ApiCore.setNextWindowCollapsed}. */
        readonly SetNextWindowCollapsed: ApiCore["setNextWindowCollapsed"];
        /** Same as {@link ApiCore.setKeyboardFocusHere}. */
        readonly SetKeyboardFocusHere: ApiCore["setKeyboardFocusHere"];
        /** Same as {@link ApiCore.begin}. */
        readonly Begin: ApiCore["begin"];
        /** Same as {@link ApiCore.end}. */
        readonly End: ApiCore["end"];
        /** Same as {@link ApiCore.beginChild}. */
        readonly BeginChild: ApiCore["beginChild"];
        /** Same as {@link ApiCore.endChild}. */
        readonly EndChild: ApiCore["endChild"];
        /** Same as {@link ApiCore.getWindowPos}. */
        readonly GetWindowPos: ApiCore["getWindowPos"];
        /** Same as {@link ApiCore.getWindowSize}. */
        readonly GetWindowSize: ApiCore["getWindowSize"];
        /** Same as {@link ApiCore.getContentRegionAvail}. */
        readonly GetContentRegionAvail: ApiCore["getContentRegionAvail"];
        /** Same as {@link ApiCore.getCursorPos}. */
        readonly GetCursorPos: ApiCore["getCursorPos"];
        /** Same as {@link ApiCore.setCursorPos}. */
        readonly SetCursorPos: ApiCore["setCursorPos"];
        /** Same as {@link ApiCore.text}. */
        readonly Text: ApiCore["text"];
        /** Same as {@link ApiCore.textWrapped}. */
        readonly TextWrapped: ApiCore["textWrapped"];
        /** Same as {@link ApiCore.textColored}. */
        readonly TextColored: ApiCore["textColored"];
        /** Same as {@link ApiCore.button}. */
        readonly Button: ApiCore["button"];
        /** Same as {@link ApiCore.smallButton}. */
        readonly SmallButton: ApiCore["smallButton"];
        /** Same as {@link ApiCore.checkbox}. */
        readonly Checkbox: ApiCore["checkbox"];
        /** Same as {@link ApiCore.radioButton}. */
        readonly RadioButton: ApiCore["radioButton"];
        /** Same as {@link ApiCore.sliderFloat}. */
        readonly SliderFloat: ApiCore["sliderFloat"];
        /** Same as {@link ApiCore.sliderInt}. */
        readonly SliderInt: ApiCore["sliderInt"];
        /** Same as {@link ApiCore.dragFloat}. */
        readonly DragFloat: ApiCore["dragFloat"];
        /** Same as {@link ApiCore.dragInt}. */
        readonly DragInt: ApiCore["dragInt"];
        /** Same as {@link ApiCore.inputText}. */
        readonly InputText: ApiCore["inputText"];
        /** Same as {@link ApiCore.colorEdit3}. */
        readonly ColorEdit3: ApiCore["colorEdit3"];
        /** Same as {@link ApiCore.colorEdit4}. */
        readonly ColorEdit4: ApiCore["colorEdit4"];
        /** Same as {@link ApiCore.progressBar}. */
        readonly ProgressBar: ApiCore["progressBar"];
        /** Same as {@link ApiCore.combo}. */
        readonly Combo: ApiCore["combo"];
        /** Same as {@link ApiCore.selectable}. */
        readonly Selectable: ApiCore["selectable"];
        /** Same as {@link ApiCore.collapsingHeader}. */
        readonly CollapsingHeader: ApiCore["collapsingHeader"];
        /** Same as {@link ApiCore.treeNode}. */
        readonly TreeNode: ApiCore["treeNode"];
        /** Same as {@link ApiCore.treePop}. */
        readonly TreePop: ApiCore["treePop"];
        /** Same as {@link ApiCore.beginTabBar}. */
        readonly BeginTabBar: ApiCore["beginTabBar"];
        /** Same as {@link ApiCore.endTabBar}. */
        readonly EndTabBar: ApiCore["endTabBar"];
        /** Same as {@link ApiCore.beginTabItem}. */
        readonly BeginTabItem: ApiCore["beginTabItem"];
        /** Same as {@link ApiCore.endTabItem}. */
        readonly EndTabItem: ApiCore["endTabItem"];
        /** Same as {@link ApiCore.sameLine}. */
        readonly SameLine: ApiCore["sameLine"];
        /** Same as {@link ApiCore.separator}. */
        readonly Separator: ApiCore["separator"];
        /** Same as {@link ApiCore.spacing}. */
        readonly Spacing: ApiCore["spacing"];
        /** Same as {@link ApiCore.newLine}. */
        readonly NewLine: ApiCore["newLine"];
        /** Same as {@link ApiCore.dummy}. */
        readonly Dummy: ApiCore["dummy"];
        /** Same as {@link ApiCore.setNextItemWidth}. */
        readonly SetNextItemWidth: ApiCore["setNextItemWidth"];
        /** Same as {@link ApiCore.pushItemWidth}. */
        readonly PushItemWidth: ApiCore["pushItemWidth"];
        /** Same as {@link ApiCore.popItemWidth}. */
        readonly PopItemWidth: ApiCore["popItemWidth"];
        /** Same as {@link ApiCore.isItemClicked}. */
        readonly IsItemClicked: ApiCore["isItemClicked"];
        /** Same as {@link ApiCore.isItemHovered}. */
        readonly IsItemHovered: ApiCore["isItemHovered"];
        /** Same as {@link ApiCore.isAnyItemHovered}. */
        readonly IsAnyItemHovered: ApiCore["isAnyItemHovered"];
        /** Same as {@link ApiCore.isAnyItemActive}. */
        readonly IsAnyItemActive: ApiCore["isAnyItemActive"];
        /** Same as {@link ApiCore.showDemoWindow}. */
        readonly ShowDemoWindow: ApiCore["showDemoWindow"];
        /** Same as {@link ApiCore.showMetricsWindow}. */
        readonly ShowMetricsWindow: ApiCore["showMetricsWindow"];
        /** Same as {@link ApiCore.showDebugLogWindow}. */
        readonly ShowDebugLogWindow: ApiCore["showDebugLogWindow"];
        /** Same as {@link ApiCore.showIdStackToolWindow}. */
        readonly ShowIDStackToolWindow: ApiCore["showIdStackToolWindow"];
        /** Same as {@link ApiCore.showStyleEditor}. */
        readonly ShowStyleEditor: ApiCore["showStyleEditor"];
        /** Same as {@link ApiCore.showAboutWindow}. */
        readonly ShowAboutWindow: ApiCore["showAboutWindow"];
        /** Same as {@link ApiCore.showUserGuide}. */
        readonly ShowUserGuide: ApiCore["showUserGuide"];
        /** Same as {@link ApiCore.styleColorsDark}. */
        readonly StyleColorsDark: ApiCore["styleColorsDark"];
        /** Same as {@link ApiCore.styleColorsLight}. */
        readonly StyleColorsLight: ApiCore["styleColorsLight"];
        /** Same as {@link ApiCore.styleColorsClassic}. */
        readonly StyleColorsClassic: ApiCore["styleColorsClassic"];
        /** Same as {@link ApiCore.wantCaptureMouse}. */
        readonly WantCaptureMouse: ApiCore["wantCaptureMouse"];
        /** Same as {@link ApiCore.separatorText}. */
        readonly SeparatorText: ApiCore["separatorText"];
        /** Same as {@link ApiCore.bullet}. */
        readonly Bullet: ApiCore["bullet"];
        /** Same as {@link ApiCore.bulletText}. */
        readonly BulletText: ApiCore["bulletText"];
        /** Same as {@link ApiCore.labelText}. */
        readonly LabelText: ApiCore["labelText"];
        /** Same as {@link ApiCore.textDisabled}. */
        readonly TextDisabled: ApiCore["textDisabled"];
        /** Same as {@link ApiCore.arrowButton}. */
        readonly ArrowButton: ApiCore["arrowButton"];
        /** Same as {@link ApiCore.invisibleButton}. */
        readonly InvisibleButton: ApiCore["invisibleButton"];
        /** Same as {@link ApiCore.inputInt}. */
        readonly InputInt: ApiCore["inputInt"];
        /** Same as {@link ApiCore.inputFloat}. */
        readonly InputFloat: ApiCore["inputFloat"];
        /** Same as {@link ApiCore.inputTextMultiline}. */
        readonly InputTextMultiline: ApiCore["inputTextMultiline"];
        /** Same as {@link ApiCore.beginListBox}. */
        readonly BeginListBox: ApiCore["beginListBox"];
        /** Same as {@link ApiCore.endListBox}. */
        readonly EndListBox: ApiCore["endListBox"];
        /** Same as {@link ApiCore.listBox}. */
        readonly ListBox: ApiCore["listBox"];
        /** Same as {@link ApiCore.colorPicker3}. */
        readonly ColorPicker3: ApiCore["colorPicker3"];
        /** Same as {@link ApiCore.colorPicker4}. */
        readonly ColorPicker4: ApiCore["colorPicker4"];
        /** Same as {@link ApiCore.colorButton}. */
        readonly ColorButton: ApiCore["colorButton"];
        /** Same as {@link ApiCore.plotLines}. */
        readonly PlotLines: ApiCore["plotLines"];
        /** Same as {@link ApiCore.plotHistogram}. */
        readonly PlotHistogram: ApiCore["plotHistogram"];
        /** Same as {@link ApiCore.treeNodeEx}. */
        readonly TreeNodeEx: ApiCore["treeNodeEx"];
        /** Same as {@link ApiCore.vSliderFloat}. */
        readonly VSliderFloat: ApiCore["vSliderFloat"];
        /** Same as {@link ApiCore.vSliderInt}. */
        readonly VSliderInt: ApiCore["vSliderInt"];
        /** Same as {@link ApiCore.dragFloat2}. */
        readonly DragFloat2: ApiCore["dragFloat2"];
        /** Same as {@link ApiCore.dragFloat3}. */
        readonly DragFloat3: ApiCore["dragFloat3"];
        /** Same as {@link ApiCore.dragFloat4}. */
        readonly DragFloat4: ApiCore["dragFloat4"];
        /** Same as {@link ApiCore.dragInt2}. */
        readonly DragInt2: ApiCore["dragInt2"];
        /** Same as {@link ApiCore.dragInt3}. */
        readonly DragInt3: ApiCore["dragInt3"];
        /** Same as {@link ApiCore.dragInt4}. */
        readonly DragInt4: ApiCore["dragInt4"];
        /** Same as {@link ApiCore.sliderFloat2}. */
        readonly SliderFloat2: ApiCore["sliderFloat2"];
        /** Same as {@link ApiCore.sliderFloat3}. */
        readonly SliderFloat3: ApiCore["sliderFloat3"];
        /** Same as {@link ApiCore.sliderFloat4}. */
        readonly SliderFloat4: ApiCore["sliderFloat4"];
        /** Same as {@link ApiCore.sliderInt2}. */
        readonly SliderInt2: ApiCore["sliderInt2"];
        /** Same as {@link ApiCore.sliderInt3}. */
        readonly SliderInt3: ApiCore["sliderInt3"];
        /** Same as {@link ApiCore.sliderInt4}. */
        readonly SliderInt4: ApiCore["sliderInt4"];
        /** Same as {@link ApiCore.inputFloat2}. */
        readonly InputFloat2: ApiCore["inputFloat2"];
        /** Same as {@link ApiCore.inputFloat3}. */
        readonly InputFloat3: ApiCore["inputFloat3"];
        /** Same as {@link ApiCore.inputFloat4}. */
        readonly InputFloat4: ApiCore["inputFloat4"];
        /** Same as {@link ApiCore.inputInt2}. */
        readonly InputInt2: ApiCore["inputInt2"];
        /** Same as {@link ApiCore.inputInt3}. */
        readonly InputInt3: ApiCore["inputInt3"];
        /** Same as {@link ApiCore.inputInt4}. */
        readonly InputInt4: ApiCore["inputInt4"];
        /** Same as {@link ApiCore.dragFloatRange2}. */
        readonly DragFloatRange2: ApiCore["dragFloatRange2"];
        /** Same as {@link ApiCore.dragIntRange2}. */
        readonly DragIntRange2: ApiCore["dragIntRange2"];
        /** Same as {@link ApiCore.sliderAngle}. */
        readonly SliderAngle: ApiCore["sliderAngle"];
        /** Same as {@link ApiCore.toggle}. */
        readonly Toggle: ApiCore["toggle"];
        /** Same as {@link ApiCore.toggle}. */
        readonly ToggleSwitch: ApiCore["toggle"];
        /** Same as {@link ApiCore.beginCombo}. */
        readonly BeginCombo: ApiCore["beginCombo"];
        /** Same as {@link ApiCore.endCombo}. */
        readonly EndCombo: ApiCore["endCombo"];
        /** Same as {@link ApiCore.listClipper}. */
        readonly ListClipper: ApiCore["listClipper"];
        /** Same as {@link ApiCore.beginMultiSelect}. */
        readonly BeginMultiSelect: ApiCore["beginMultiSelect"];
        /** Same as {@link ApiCore.endMultiSelect}. */
        readonly EndMultiSelect: ApiCore["endMultiSelect"];
        /** Same as {@link ApiCore.setNextItemSelectionUserData}. */
        readonly SetNextItemSelectionUserData: ApiCore["setNextItemSelectionUserData"];
        /** Same as {@link ApiCore.isItemToggledSelection}. */
        readonly IsItemToggledSelection: ApiCore["isItemToggledSelection"];
        /** Same as {@link ApiCore.selectionStorage}. */
        readonly SelectionStorage: ApiCore["selectionStorage"];
        /** Same as {@link ApiCore.openPopup}. */
        readonly OpenPopup: ApiCore["openPopup"];
        /** Same as {@link ApiCore.beginPopup}. */
        readonly BeginPopup: ApiCore["beginPopup"];
        /** Same as {@link ApiCore.beginPopupModal}. */
        readonly BeginPopupModal: ApiCore["beginPopupModal"];
        /** Same as {@link ApiCore.beginPopupContextItem}. */
        readonly BeginPopupContextItem: ApiCore["beginPopupContextItem"];
        /** Same as {@link ApiCore.beginPopupContextWindow}. */
        readonly BeginPopupContextWindow: ApiCore["beginPopupContextWindow"];
        /** Same as {@link ApiCore.endPopup}. */
        readonly EndPopup: ApiCore["endPopup"];
        /** Same as {@link ApiCore.closeCurrentPopup}. */
        readonly CloseCurrentPopup: ApiCore["closeCurrentPopup"];
        /** Same as {@link ApiCore.isPopupOpen}. */
        readonly IsPopupOpen: ApiCore["isPopupOpen"];
        /** Same as {@link ApiCore.beginMenuBar}. */
        readonly BeginMenuBar: ApiCore["beginMenuBar"];
        /** Same as {@link ApiCore.endMenuBar}. */
        readonly EndMenuBar: ApiCore["endMenuBar"];
        /** Same as {@link ApiCore.beginMenu}. */
        readonly BeginMenu: ApiCore["beginMenu"];
        /** Same as {@link ApiCore.endMenu}. */
        readonly EndMenu: ApiCore["endMenu"];
        /** Same as {@link ApiCore.menuItem}. */
        readonly MenuItem: ApiCore["menuItem"];
        /** Same as {@link ApiCore.setTooltip}. */
        readonly SetTooltip: ApiCore["setTooltip"];
        /** Same as {@link ApiCore.setItemTooltip}. */
        readonly SetItemTooltip: ApiCore["setItemTooltip"];
        /** Same as {@link ApiCore.beginTooltip}. */
        readonly BeginTooltip: ApiCore["beginTooltip"];
        /** Same as {@link ApiCore.beginItemTooltip}. */
        readonly BeginItemTooltip: ApiCore["beginItemTooltip"];
        /** Same as {@link ApiCore.endTooltip}. */
        readonly EndTooltip: ApiCore["endTooltip"];
        /** Same as {@link ApiCore.beginTable}. */
        readonly BeginTable: ApiCore["beginTable"];
        /** Same as {@link ApiCore.endTable}. */
        readonly EndTable: ApiCore["endTable"];
        /** Same as {@link ApiCore.tableNextRow}. */
        readonly TableNextRow: ApiCore["tableNextRow"];
        /** Same as {@link ApiCore.tableNextColumn}. */
        readonly TableNextColumn: ApiCore["tableNextColumn"];
        /** Same as {@link ApiCore.tableSetColumnIndex}. */
        readonly TableSetColumnIndex: ApiCore["tableSetColumnIndex"];
        /** Same as {@link ApiCore.tableSetupColumn}. */
        readonly TableSetupColumn: ApiCore["tableSetupColumn"];
        /** Same as {@link ApiCore.tableGetSortSpecs}. */
        readonly TableGetSortSpecs: ApiCore["tableGetSortSpecs"];
        /** Same as {@link ApiCore.tableSetupScrollFreeze}. */
        readonly TableSetupScrollFreeze: ApiCore["tableSetupScrollFreeze"];
        /** Same as {@link ApiCore.tableHeadersRow}. */
        readonly TableHeadersRow: ApiCore["tableHeadersRow"];
        /** Same as {@link ApiCore.tableSetBgColor}. */
        readonly TableSetBgColor: ApiCore["tableSetBgColor"];
        /** Same as {@link ApiCore.pushStyleColor}. */
        readonly PushStyleColor: ApiCore["pushStyleColor"];
        /** Same as {@link ApiCore.popStyleColor}. */
        readonly PopStyleColor: ApiCore["popStyleColor"];
        /** Same as {@link ApiCore.setStyleColor}. */
        readonly SetStyleColor: ApiCore["setStyleColor"];
        /** Same as {@link ApiCore.setStyleProperties}. */
        readonly SetStyleProperties: ApiCore["setStyleProperties"];
        /** Same as {@link ApiCore.setTheme}. */
        readonly SetTheme: ApiCore["setTheme"];
        /** Same as {@link ApiCore.pushStyleVar}. */
        readonly PushStyleVar: ApiCore["pushStyleVar"];
        /** Same as {@link ApiCore.popStyleVar}. */
        readonly PopStyleVar: ApiCore["popStyleVar"];
        /** Same as {@link ApiCore.setWindowFontScale}. */
        readonly SetWindowFontScale: ApiCore["setWindowFontScale"];
        /** Same as {@link ApiCore.pushFont}. */
        readonly PushFont: ApiCore["pushFont"];
        /** Same as {@link ApiCore.popFont}. */
        readonly PopFont: ApiCore["popFont"];
        /** Same as {@link ApiCore.withFont}. */
        readonly WithFont: ApiCore["withFont"];
        /** Same as {@link ApiCore.icon}. */
        readonly Icon: ApiCore["icon"];
        /** Same as {@link ApiCore.colorU32}. */
        readonly ColorU32: ApiCore["colorU32"];
        /** Same as {@link ApiCore.createTexture}. */
        readonly CreateTexture: ApiCore["createTexture"];
        /** Same as {@link ApiCore.destroyTexture}. */
        readonly DestroyTexture: ApiCore["destroyTexture"];
        /** Same as {@link ApiCore.image}. */
        readonly Image: ApiCore["image"];
        /** Same as {@link ApiCore.imageButton}. */
        readonly ImageButton: ApiCore["imageButton"];
        /** Same as {@link ApiCore.getWindowDrawList}. */
        readonly GetWindowDrawList: ApiCore["getWindowDrawList"];
        /** Same as {@link ApiCore.getForegroundDrawList}. */
        readonly GetForegroundDrawList: ApiCore["getForegroundDrawList"];
        /** Same as {@link ApiCore.getBackgroundDrawList}. */
        readonly GetBackgroundDrawList: ApiCore["getBackgroundDrawList"];
        /** Same as {@link ApiCore.pushId}. */
        readonly PushID: ApiCore["pushId"];
        /** Same as {@link ApiCore.popId}. */
        readonly PopID: ApiCore["popId"];
        /** Same as {@link ApiCore.beginGroup}. */
        readonly BeginGroup: ApiCore["beginGroup"];
        /** Same as {@link ApiCore.endGroup}. */
        readonly EndGroup: ApiCore["endGroup"];
        /** Same as {@link ApiCore.indent}. */
        readonly Indent: ApiCore["indent"];
        /** Same as {@link ApiCore.unindent}. */
        readonly Unindent: ApiCore["unindent"];
        /** Same as {@link ApiCore.alignTextToFramePadding}. */
        readonly AlignTextToFramePadding: ApiCore["alignTextToFramePadding"];
        /** Same as {@link ApiCore.beginDisabled}. */
        readonly BeginDisabled: ApiCore["beginDisabled"];
        /** Same as {@link ApiCore.endDisabled}. */
        readonly EndDisabled: ApiCore["endDisabled"];
        /** Same as {@link ApiCore.getScrollX}. */
        readonly GetScrollX: ApiCore["getScrollX"];
        /** Same as {@link ApiCore.getScrollY}. */
        readonly GetScrollY: ApiCore["getScrollY"];
        /** Same as {@link ApiCore.getScrollMaxX}. */
        readonly GetScrollMaxX: ApiCore["getScrollMaxX"];
        /** Same as {@link ApiCore.getScrollMaxY}. */
        readonly GetScrollMaxY: ApiCore["getScrollMaxY"];
        /** Same as {@link ApiCore.setScrollX}. */
        readonly SetScrollX: ApiCore["setScrollX"];
        /** Same as {@link ApiCore.setScrollY}. */
        readonly SetScrollY: ApiCore["setScrollY"];
        /** Same as {@link ApiCore.setScrollHereX}. */
        readonly SetScrollHereX: ApiCore["setScrollHereX"];
        /** Same as {@link ApiCore.setScrollHereY}. */
        readonly SetScrollHereY: ApiCore["setScrollHereY"];
        /** Same as {@link ApiCore.isItemActive}. */
        readonly IsItemActive: ApiCore["isItemActive"];
        /** Same as {@link ApiCore.isItemEdited}. */
        readonly IsItemEdited: ApiCore["isItemEdited"];
        /** Same as {@link ApiCore.isItemActivated}. */
        readonly IsItemActivated: ApiCore["isItemActivated"];
        /** Same as {@link ApiCore.isItemDeactivated}. */
        readonly IsItemDeactivated: ApiCore["isItemDeactivated"];
        /** Same as {@link ApiCore.isItemDeactivatedAfterEdit}. */
        readonly IsItemDeactivatedAfterEdit: ApiCore["isItemDeactivatedAfterEdit"];
        /** Same as {@link ApiCore.isItemFocused}. */
        readonly IsItemFocused: ApiCore["isItemFocused"];
        /** Same as {@link ApiCore.isItemVisible}. */
        readonly IsItemVisible: ApiCore["isItemVisible"];
        /** Same as {@link ApiCore.isWindowHovered}. */
        readonly IsWindowHovered: ApiCore["isWindowHovered"];
        /** Same as {@link ApiCore.isWindowFocused}. */
        readonly IsWindowFocused: ApiCore["isWindowFocused"];
        /** Same as {@link ApiCore.isWindowCollapsed}. */
        readonly IsWindowCollapsed: ApiCore["isWindowCollapsed"];
        /** Same as {@link ApiCore.isWindowAppearing}. */
        readonly IsWindowAppearing: ApiCore["isWindowAppearing"];
        /** Same as {@link ApiCore.getMousePos}. */
        readonly GetMousePos: ApiCore["getMousePos"];
        /** Same as {@link ApiCore.isMouseDown}. */
        readonly IsMouseDown: ApiCore["isMouseDown"];
        /** Same as {@link ApiCore.isMouseClicked}. */
        readonly IsMouseClicked: ApiCore["isMouseClicked"];
        /** Same as {@link ApiCore.isMouseDoubleClicked}. */
        readonly IsMouseDoubleClicked: ApiCore["isMouseDoubleClicked"];
        /** Same as {@link ApiCore.isMouseReleased}. */
        readonly IsMouseReleased: ApiCore["isMouseReleased"];
        /** Same as {@link ApiCore.isMouseDragging}. */
        readonly IsMouseDragging: ApiCore["isMouseDragging"];
        /** Same as {@link ApiCore.getMouseDragDelta}. */
        readonly GetMouseDragDelta: ApiCore["getMouseDragDelta"];
        /** Same as {@link ApiCore.resetMouseDragDelta}. */
        readonly ResetMouseDragDelta: ApiCore["resetMouseDragDelta"];
        /** Same as {@link ApiCore.calcTextSize}. */
        readonly CalcTextSize: ApiCore["calcTextSize"];
        /** Same as {@link ApiCore.getFrameHeight}. */
        readonly GetFrameHeight: ApiCore["getFrameHeight"];
        /** Same as {@link ApiCore.getFrameHeightWithSpacing}. */
        readonly GetFrameHeightWithSpacing: ApiCore["getFrameHeightWithSpacing"];
        /** Same as {@link ApiCore.getTextLineHeight}. */
        readonly GetTextLineHeight: ApiCore["getTextLineHeight"];
        /** Same as {@link ApiCore.getTextLineHeightWithSpacing}. */
        readonly GetTextLineHeightWithSpacing: ApiCore["getTextLineHeightWithSpacing"];
        /** Same as {@link ApiCore.isKeyDown}. */
        readonly IsKeyDown: ApiCore["isKeyDown"];
        /** Same as {@link ApiCore.isKeyPressed}. */
        readonly IsKeyPressed: ApiCore["isKeyPressed"];
        /** Same as {@link ApiCore.isKeyReleased}. */
        readonly IsKeyReleased: ApiCore["isKeyReleased"];
        /** Same as {@link ApiCore.getKeyPressedAmount}. */
        readonly GetKeyPressedAmount: ApiCore["getKeyPressedAmount"];
        /** Same as {@link ApiCore.getKeyName}. */
        readonly GetKeyName: ApiCore["getKeyName"];
        /** Same as {@link ApiCore.isKeyChordPressed}. */
        readonly IsKeyChordPressed: ApiCore["isKeyChordPressed"];
        /** Same as {@link ApiCore.shortcut}. */
        readonly Shortcut: ApiCore["shortcut"];
        /** Same as {@link ApiCore.setNextItemShortcut}. */
        readonly SetNextItemShortcut: ApiCore["setNextItemShortcut"];
        /** Same as {@link ApiCore.getClipboardText}. */
        readonly GetClipboardText: ApiCore["getClipboardText"];
        /** Same as {@link ApiCore.setClipboardText}. */
        readonly SetClipboardText: ApiCore["setClipboardText"];
        /** Same as {@link ApiCore.beginDragDropSource}. */
        readonly BeginDragDropSource: ApiCore["beginDragDropSource"];
        /** Same as {@link ApiCore.setDragDropPayload}. */
        readonly SetDragDropPayload: ApiCore["setDragDropPayload"];
        /** Same as {@link ApiCore.endDragDropSource}. */
        readonly EndDragDropSource: ApiCore["endDragDropSource"];
        /** Same as {@link ApiCore.beginDragDropTarget}. */
        readonly BeginDragDropTarget: ApiCore["beginDragDropTarget"];
        /** Same as {@link ApiCore.acceptDragDropPayload}. */
        readonly AcceptDragDropPayload: ApiCore["acceptDragDropPayload"];
        /** Same as {@link ApiCore.endDragDropTarget}. */
        readonly EndDragDropTarget: ApiCore["endDragDropTarget"];
        /** Same as {@link ApiCore.getDragDropPayload}. */
        readonly GetDragDropPayload: ApiCore["getDragDropPayload"];
        /** Same as {@link ApiCore.withDragDropSource}. */
        readonly WithDragDropSource: ApiCore["withDragDropSource"];
        /** Same as {@link ApiCore.withDragDropTarget}. */
        readonly WithDragDropTarget: ApiCore["withDragDropTarget"];
        /** Same as {@link ApiCore.pushClipRect}. */
        readonly PushClipRect: ApiCore["pushClipRect"];
        /** Same as {@link ApiCore.popClipRect}. */
        readonly PopClipRect: ApiCore["popClipRect"];
        /** Same as {@link ApiCore.addMousePosEvent}. */
        readonly AddMousePosEvent: ApiCore["addMousePosEvent"];
        /** Same as {@link ApiCore.addMouseButtonEvent}. */
        readonly AddMouseButtonEvent: ApiCore["addMouseButtonEvent"];
    }

    type Api = ApiCore & ApiAliases;
}
