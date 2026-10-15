// Type definitions for AutoJs6 internal module gallery
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Oct 15, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/gallery/Gallery.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/gallery/GalleryViewSession.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/gallery/GalleryJsErrors.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/gallery/GalleryScriptArguments.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/gallery/GalleryScriptValues.kt
 * @Source %AutoJs6%/plugin-api/gallery-api/src/main/java/org/autojs/plugin/gallery/api/GalleryContract.kt
 * @Source %AutoJs6%/plugin-api/gallery-api/src/main/java/org/autojs/plugin/gallery/api/GalleryErrorCodes.kt
 */

declare namespace Internal {

    /**
     * The global `gallery` object (also `$gallery`), available since AutoJs6 6.8.0 through the
     * external 3-Maple Image plugin (3.4.0 or later): the plugin's picker, viewer, editor and
     * converter. Every method throws (or rejects with) a `GalleryError` whose `code` is
     * `PLUGIN_UNAVAILABLE`, `PLUGIN_DISABLED` or `PLUGIN_INCOMPATIBLE` while the plugin is
     * missing, disabled or incompatible; {@link isAvailable} probes without throwing.
     *
     * Images are named by file paths (relative paths resolve against the script working
     * directory, URIs are not accepted). AutoJs6 opens the sources read-only and writes the
     * outputs itself (staged next to the target, read back, then published), so a script reaches
     * nothing through the plugin that it could not open itself.
     *
     * Every method has a synchronous form `x(...)` and an `xAsync(...)` form with the same
     * arguments and result. The synchronous {@link pick}, {@link edit} and {@link convert} may
     * wait long and refuse the UI thread (`INVALID_ARGUMENT`); use their `Async` forms there.
     *
     * @see https://docs.autojs6.com/#/gallery
     */
    interface Gallery {

        /**
         * Opens the plugin's picker and waits for the user: the chosen images, or null when the
         * user left without choosing. Without photo access the picker asks first; a refusal
         * fails with `PERMISSION_REQUIRED`. Only images the script can read are kept.
         * @since 6.8.0
         * @example
         * let images = gallery.pick({ multiple: true, maxCount: 3 });
         * if (images) images.forEach(image => console.log(image.path));
         */
        pick(options?: Gallery.PickOptions): Gallery.PickedImage[] | null;

        /** @since 6.8.0 */
        pickAsync(options?: Gallery.PickOptions): Promise<Gallery.PickedImage[] | null>;

        /**
         * Shows 1 to 128 images in the plugin's viewer and returns the session at once; the
         * script keeps running until its `close` event. Script exit leaves the viewer open.
         * @since 6.8.0
         * @example
         * gallery.view(['./out/a.jpg', './out/b.jpg']).on('page', page => console.log(page.index, page.path));
         */
        view(paths: string | string[], options?: Gallery.ViewOptions): Gallery.ViewSession;

        /** Settles once the viewer is shown (its `open` event). @since 6.8.0 */
        viewAsync(paths: string | string[], options?: Gallery.ViewOptions): Promise<Gallery.ViewSession>;

        /**
         * Opens the image in the plugin's editor and waits for the user: the absolute path of the
         * saved output (next to the source as `name_edited.ext` unless `output` / `overwrite` say
         * otherwise), or null when the user left without saving.
         * @since 6.8.0
         */
        edit(path: string, options?: Gallery.EditOptions): string | null;

        /** @since 6.8.0 */
        editAsync(path: string, options?: Gallery.EditOptions): Promise<string | null>;

        /**
         * Converts the image without UI (at most 180 s) and answers the written image (next to
         * the source as `name_converted.ext` unless `output` / `overwrite` say otherwise).
         * @since 6.8.0
         * @example
         * let written = gallery.convert('./photos/cat.png', { format: 'webp', longEdge: 1080 });
         * console.log(written.path, written.width, written.height, written.size);
         */
        convert(path: string, options?: Gallery.ConvertOptions): Gallery.WrittenImage;

        /** @since 6.8.0 */
        convertAsync(path: string, options?: Gallery.ConvertOptions): Promise<Gallery.WrittenImage>;

        /** Whether a compatible, enabled gallery plugin answers; never throws. @since 6.8.0 */
        isAvailable(): boolean;

        /** @since 6.8.0 */
        isAvailableAsync(): Promise<boolean>;

        /** The error class of the module; `e instanceof gallery.GalleryError`. @since 6.8.0 */
        readonly GalleryError: Gallery.GalleryErrorConstructor;
    }

    namespace Gallery {

        type ErrorCode =
            | 'PLUGIN_UNAVAILABLE'
            | 'PLUGIN_DISABLED'
            | 'PLUGIN_INCOMPATIBLE'
            | 'FILE_NOT_FOUND'
            | 'FILE_UNREADABLE'
            | 'UNSUPPORTED_FORMAT'
            | 'DECODE_FAILED'
            | 'LIMIT_EXCEEDED'
            | 'INVALID_ARGUMENT'
            | 'PERMISSION_REQUIRED'
            | 'ACCESS_DENIED'
            | 'OUTPUT_EXISTS'
            | 'SESSION_CLOSED'
            | 'SESSION_REPLACED'
            | 'CANCELLED'
            | 'TIMEOUT'
            | 'IO'
            | 'INTERNAL';

        /** `name` is `'GalleryError'`; `toString()` yields `GalleryError [CODE]: message`; `message` is not enumerable. */
        interface GalleryError extends Error {
            readonly name: 'GalleryError';
            readonly code: ErrorCode | string;
        }

        interface GalleryErrorConstructor {
            new(message: string, code?: ErrorCode | string): GalleryError;
            readonly prototype: GalleryError;
        }

        /** Output formats; `'jpg'` is accepted as `'jpeg'`. */
        type Format = 'jpeg' | 'jpg' | 'png' | 'webp';

        type SizeMode = 'original' | 'percent' | 'longEdge' | 'custom';

        interface PickOptions {
            /** Multiple selection with a confirm bar; default false (a tap answers). */
            multiple?: boolean;
            /** Multiple selection only, 1 to 200; default 200. */
            maxCount?: number;
            /** Image types such as `'image/png'`, at most 16; `'image/*'` lists every image. */
            mimeTypes?: string | string[];
            /** Picker title, at most 200 characters. */
            title?: string;
        }

        interface PickedImage {
            /** Absolute path of the image file. */
            path: string;
            name: string;
            mimeType: string;
            /** Pixels, 0 when unknown. */
            width: number;
            /** Pixels, 0 when unknown. */
            height: number;
            /** Bytes. */
            size: number;
            /** Capture time in UTC milliseconds, the modification time without one. */
            dateTaken: number;
        }

        interface ViewOptions {
            /** Start page; default 0. */
            index?: number;
        }

        interface OutputOptions {
            /** Output path (relative to the working directory); missing folders are created. */
            output?: string;
            /** Replace an existing `output`; without `output`, replace the source. Default false. */
            overwrite?: boolean;
            format?: Format;
            /** 1 to 100; default 92. */
            quality?: number;
            /** Keep the capture details of the source; default false. */
            keepExif?: boolean;
            /** With `keepExif`, keep the location too; default false. */
            keepLocation?: boolean;
        }

        /** For the editor, `format`, `quality`, `keepExif` and `keepLocation` seed the save dialog. */
        interface EditOptions extends OutputOptions {
        }

        interface ConvertOptions extends OutputOptions {
            /** WebP only; lossy below Android 11. */
            lossless?: boolean;
            /** Largest file size in bytes; JPEG and lossy WebP only, not with `quality`. */
            targetBytes?: number;
            /** Inferred from `percent`, `longEdge` or `width` / `height` when absent; default `'original'`. */
            sizeMode?: SizeMode;
            /** 1 to 1000. */
            percent?: number;
            /** 1 to 16384; smaller images are not enlarged. */
            longEdge?: number;
            /** 1 to 16384. */
            width?: number;
            /** 1 to 16384. */
            height?: number;
            /** Custom size only; false stretches to `width` x `height`. Default true. */
            keepAspectRatio?: boolean;
            /** JPEG fill of transparent pixels: an ARGB number or `'#RGB'`, `'#RRGGBB'`, `'#AARRGGBB'`; default white. */
            background?: number | string;
        }

        interface WrittenImage {
            /** Absolute path of the written file. */
            path: string;
            name: string;
            mimeType: string;
            width: number;
            height: number;
            /** Bytes. */
            size: number;
        }

        type SessionState = 'pending' | 'open' | 'closed';

        type CloseReason = 'user' | 'host' | 'replaced' | 'timeout' | 'error' | 'overflow' | 'script-exit' | string;

        interface CloseOptions {
            /** Close the viewer too; default true. */
            finish?: boolean;
        }

        interface OpenEvent {
            count: number;
        }

        interface PageEvent {
            index: number;
            path: string;
        }

        interface CloseEvent {
            reason: CloseReason;
        }

        /**
         * The event emitter returned by {@link Gallery.view}. The script keeps running while the
         * session is open; `close` is the terminal event.
         * @see https://docs.autojs6.com/#/galleryViewSessionType
         */
        interface ViewSession extends EventEmitter$ {
            /** Absolute image paths in page order. */
            readonly paths: string[];
            readonly count: number;
            /** The page shown, -1 before the first `page` event. */
            readonly index: number;
            /** The path of the page shown, null before the first `page` event. */
            readonly path: string | null;
            readonly state: SessionState;
            readonly isOpen: boolean;
            readonly isClosed: boolean;
            /** Close reason, null while open. */
            readonly reason: CloseReason | null;

            /** Ends the session (`close` follows with reason `'host'`) and closes the viewer unless `finish` is false. Idempotent. */
            close(options?: CloseOptions): this;

            /** `GalleryViewSession { count: ..., state: ... }` with the index and reason when known. */
            toString(): string;

            on(eventName: 'open', listener: (event: OpenEvent) => void): this;
            on(eventName: 'page', listener: (event: PageEvent) => void): this;
            on(eventName: 'error', listener: (error: GalleryError) => void): this;
            on(eventName: 'close', listener: (event: CloseEvent) => void): this;
            on(eventName: string, listener: (...args: any[]) => void): this;

            once(eventName: 'open', listener: (event: OpenEvent) => void): this;
            once(eventName: 'page', listener: (event: PageEvent) => void): this;
            once(eventName: 'error', listener: (error: GalleryError) => void): this;
            once(eventName: 'close', listener: (event: CloseEvent) => void): this;
            once(eventName: string, listener: (...args: any[]) => void): this;
        }
    }
}
