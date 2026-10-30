/** Rhino's gallery module for Node main threads and Workers, through the external 3-Maple Image plugin (capability gallery). */
declare module "gallery" {
  namespace gallery {
    /** No deadline by default: the picker and the editor wait for the user, convert ends within the host's 180 s. A signal also ends an active viewer. */
    type CallOptions = Pick<AutoJs6Node.BridgeCallOptions, "signal" | "timeoutMs">;
    /** Every member returns a Promise; `x` and `xAsync` differ only for the viewer, which `viewAsync` waits to be shown. */
    interface API {
        readonly GalleryError: GalleryErrorConstructor;
        pick(options?: PickOptions | null, callOptions?: CallOptions): Promise<PickedImage[] | null>;
        pickAsync(options?: PickOptions | null, callOptions?: CallOptions): Promise<PickedImage[] | null>;
        /** Answers once the plugin accepted the viewer; the execution keeps running until the session's `close` event. */
        view(paths: string | string[], options?: ViewOptions | null, callOptions?: CallOptions): Promise<ViewSession>;
        viewAsync(paths: string | string[], options?: ViewOptions | null, callOptions?: CallOptions): Promise<ViewSession>;
        edit(path: string, options?: EditOptions | null, callOptions?: CallOptions): Promise<string | null>;
        editAsync(path: string, options?: EditOptions | null, callOptions?: CallOptions): Promise<string | null>;
        convert(path: string, options?: ConvertOptions | null, callOptions?: CallOptions): Promise<WrittenImage>;
        convertAsync(path: string, options?: ConvertOptions | null, callOptions?: CallOptions): Promise<WrittenImage>;
        isAvailable(callOptions?: CallOptions): Promise<boolean>;
        isAvailableAsync(callOptions?: CallOptions): Promise<boolean>;
    }


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
            (message?: string, code?: ErrorCode | string): GalleryError;
            new(message?: string, code?: ErrorCode | string): GalleryError;
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
         * The event emitter returned by {@link API.view}. The script keeps running while the
         * session is open; `close` is the terminal event.
         * @see https://docs.autojs6.com/#/galleryViewSessionType
         */
        interface ViewSession {
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
            close(options?: CloseOptions): Promise<this>;

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

            off(eventName: string, listener: (...args: any[]) => void): this;
            removeListener(eventName: string, listener: (...args: any[]) => void): this;
            removeAllListeners(eventName?: string): this;
            listenerCount(eventName: string): number;
        }
  }
  const gallery: gallery.API;
  export = gallery;
}
declare module "autojs6:gallery" { import gallery = require("gallery"); export = gallery; }
