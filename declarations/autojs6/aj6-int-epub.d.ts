// Type definitions for AutoJs6 internal module epub
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Sep 21, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/epub/Epub.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/epub/EpubBookNativeObject.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/epub/EpubReaderSession.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/epub/EpubJsErrors.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/epub/EpubScriptArguments.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/epub/EpubScriptValues.kt
 * @Source %AutoJs6%/plugin-api/epub-api/src/main/java/org/autojs/plugin/epub/api/EpubContract.kt
 * @Source %AutoJs6%/plugin-api/epub-api/src/main/java/org/autojs/plugin/epub/api/EpubErrorCodes.kt
 */

declare namespace Internal {

    /**
     * The global `epub` object (also `$epub`), available since AutoJs6 6.8.0 through the external
     * Readium EPUB Reader plugin (AutoJs6-Plugin-Readium-EPUB-Reader). Every method throws (or
     * rejects with) an `EpubError` whose `code` is `PLUGIN_UNAVAILABLE`, `PLUGIN_DISABLED` or
     * `PLUGIN_INCOMPATIBLE` while the plugin is missing, disabled or incompatible;
     * {@link isAvailable} probes without throwing.
     *
     * Books are named by file paths (relative paths resolve against the script working directory,
     * URIs are not accepted). {@link open} keeps a book open in the plugin process until its
     * `close()` or the script exits; the convenience methods ({@link metadata}, {@link toc},
     * {@link readingOrder}, {@link text}, {@link cover}, {@link search}, {@link annotations}) open and close the book
     * around one call; {@link read} starts the plugin's reader and returns a session whose events
     * arrive on the script thread.
     *
     * Every method has a synchronous form `x(...)` and an `xAsync(...)` form with the same
     * arguments and result; the synchronous form blocks the script thread (stopping the script
     * cancels the call), the `Async` form returns a Promise settled on the script thread.
     *
     * @see https://docs.autojs6.com/#/epub
     */
    interface Epub {

        /**
         * Opens a book in the plugin process and returns it; it stays open until `close()` or
         * script exit. At most 8 books per plugin process (`LIMIT_EXCEEDED`); a book idle for
         * 5 minutes is closed by the plugin (`SESSION_CLOSED` afterwards).
         * @since 6.8.0
         * @example
         * let book = epub.open('/sdcard/Books/moby-dick.epub');
         * console.log(book.metadata.title, book.positions);
         * book.close();
         */
        open(source: Epub.Source): Epub.Book;

        /** @since 6.8.0 */
        openAsync(source: Epub.Source): Promise<Epub.Book>;

        /**
         * Opens the book, reads its metadata and closes it.
         * @since 6.8.0
         */
        metadata(source: Epub.Source): Epub.Metadata;

        /** @since 6.8.0 */
        metadataAsync(source: Epub.Source): Promise<Epub.Metadata>;

        /**
         * Opens the book, reads its table of contents and closes it.
         * @since 6.8.0
         */
        toc(source: Epub.Source): Epub.TocEntry[];

        /** @since 6.8.0 */
        tocAsync(source: Epub.Source): Promise<Epub.TocEntry[]>;

        /**
         * Opens the book, reads its reading order (spine) and closes it.
         * @since 6.8.0
         */
        readingOrder(source: Epub.Source): Epub.ReadingOrderEntry[];

        /** @since 6.8.0 */
        readingOrderAsync(source: Epub.Source): Promise<Epub.ReadingOrderEntry[]>;

        /**
         * Opens the book, extracts the text of one resource (`target`) or of the whole book
         * (no target) and closes it. See {@link Epub.Book.text}.
         * @since 6.8.0
         * @example
         * let first = epub.text('./books/moby-dick.epub', 0, { maxChars: 2000 });
         * let whole = epub.text('./books/moby-dick.epub');
         */
        text(source: Epub.Source, target?: Epub.TextTarget | null, options?: Epub.TextOptions): string;

        /** @since 6.8.0 */
        textAsync(source: Epub.Source, target?: Epub.TextTarget | null, options?: Epub.TextOptions): Promise<string>;

        /**
         * Opens the book, decodes its cover image and closes it. `RESOURCE_NOT_FOUND` when the
         * book has no cover, `PARSE_FAILED` when it cannot be decoded; recycle the image when done.
         * @since 6.8.0
         */
        cover(source: Epub.Source): ImageWrapper;

        /**
         * Opens the book, saves the cover resource as is to `outputPath` (a file path, or an
         * existing directory that receives the resource's own file name) and closes it. Returns
         * the saved path. An existing target fails with `INVALID_ARGUMENT` unless `overwrite`.
         * @since 6.8.0
         */
        cover(source: Epub.Source, outputPath: string, options?: Epub.ExportOptions): string;

        /** @since 6.8.0 */
        coverAsync(source: Epub.Source): Promise<ImageWrapper>;

        /** @since 6.8.0 */
        coverAsync(source: Epub.Source, outputPath: string, options?: Epub.ExportOptions): Promise<string>;

        /**
         * Opens the book, runs a full-text search and closes it. See {@link Epub.Book.search}.
         * @since 6.8.0
         */
        search(source: Epub.Source, query: string, options?: Epub.SearchOptions): Epub.SearchHit[];

        /** @since 6.8.0 */
        searchAsync(source: Epub.Source, query: string, options?: Epub.SearchOptions): Promise<Epub.SearchHit[]>;

        /**
         * Opens the book, reads the reader's highlights and notes and closes it. See
         * {@link Epub.Book.annotations}. Readium EPUB Reader plugin 1.1.0 (EPUB contract
         * version 2); `PLUGIN_INCOMPATIBLE` with plugin 1.0.0.
         * @since 6.8.0
         */
        annotations(source: Epub.Source): Epub.Annotation[];

        /** @since 6.8.0 */
        annotationsAsync(source: Epub.Source): Promise<Epub.Annotation[]>;

        /**
         * Creates a reader session in the plugin process, starts the plugin's reader Activity and
         * returns the session at once; `open` fires when the reader shows the start position,
         * then page turns, jumps, bookmark and highlight changes arrive as events until `close`. At most one
         * of `href`, `progression` and `locator` names the start position (the last reading
         * position otherwise). The script keeps running while the session is open; a script exit
         * ends the session and leaves the reader to the user.
         * @since 6.8.0
         * @example
         * let session = epub.read('./books/moby-dick.epub', { href: 'OPS/chapter_003.xhtml' });
         * session.on('progress', e => console.log(e.totalProgression, e.chapterTitle));
         * session.on('close', e => console.log('closed:', e.reason));
         */
        read(source: Epub.Source, options?: Epub.ReadOptions): Epub.ReaderSession;

        /** Settles once the session exists and the reader launch was requested (before `open`). @since 6.8.0 */
        readAsync(source: Epub.Source, options?: Epub.ReadOptions): Promise<Epub.ReaderSession>;

        /**
         * Whether a compatible, enabled EPUB plugin is installed. Never throws.
         * @since 6.8.0
         */
        isAvailable(): boolean;

        /** @since 6.8.0 */
        isAvailableAsync(): Promise<boolean>;

        /** The error class of the module; `e instanceof epub.EpubError`. @since 6.8.0 */
        readonly EpubError: Epub.EpubErrorConstructor;
    }

    namespace Epub {

        type ErrorCode =
            | 'PLUGIN_UNAVAILABLE'
            | 'PLUGIN_DISABLED'
            | 'PLUGIN_INCOMPATIBLE'
            | 'FILE_NOT_FOUND'
            | 'FILE_UNREADABLE'
            | 'NOT_EPUB'
            | 'PARSE_FAILED'
            | 'ENCRYPTED'
            | 'RESOURCE_NOT_FOUND'
            | 'LIMIT_EXCEEDED'
            | 'INVALID_ARGUMENT'
            | 'SESSION_CLOSED'
            | 'SESSION_REPLACED'
            | 'READER_NOT_VISIBLE'
            | 'UNSUPPORTED_PREFERENCE'
            | 'CANCELLED'
            | 'TIMEOUT'
            | 'IO'
            | 'INTERNAL';

        /** `name` is `'EpubError'`; `toString()` yields `EpubError [CODE]: message`; `message` is not enumerable. */
        interface EpubError extends Error {
            readonly name: 'EpubError';
            readonly code: ErrorCode | string;
        }

        interface EpubErrorConstructor {
            new(message: string, code?: ErrorCode | string): EpubError;
            readonly prototype: EpubError;
        }

        interface OpenOptions {
            /** EPUB file path; relative paths resolve against the script working directory. */
            path: string;
            /** The name the plugin displays for the book (file name by default). */
            displayName?: string;
        }

        /** A file path or an options object naming the book. */
        type Source = string | OpenOptions;

        /** @see https://docs.autojs6.com/#/epubBookType */
        interface Metadata {
            title: string;
            authors: string[];
            language?: string;
            identifier?: string;
            publisher?: string;
            published?: string;
            modified?: string;
            /** At most 65536 characters. */
            description?: string;
            subjects: string[];
            layout: 'reflowable' | 'fixed';
            readingProgression: 'ltr' | 'rtl' | 'auto';
            /** The href of the cover resource, exportable through {@link Book.resource}. */
            cover?: string;
            /** Synthetic position count of the book (an approximate page count). */
            positions: number;
        }

        interface TocEntry {
            title: string;
            href: string;
            /** Always an array, possibly empty. */
            children: TocEntry[];
        }

        interface ReadingOrderEntry {
            href: string;
            /** Media type, empty when unknown. */
            type: string;
            title?: string;
        }

        /** A Readium locator (its JSON form). @see https://docs.autojs6.com/#/epubLocatorType */
        interface Locator {
            /** Publication-relative resource href, the same strings as in the toc, reading order and search hits. */
            href: string;
            /** Media type of the resource. */
            type: string;
            title?: string;
            locations?: LocatorLocations;
            text?: LocatorText;
        }

        interface LocatorLocations {
            fragments?: string[];
            /** Progression within the resource, 0 to 1. */
            progression?: number;
            /** Progression within the book, 0 to 1. */
            totalProgression?: number;
            /** Synthetic position, counted from 1. */
            position?: number;
            cssSelector?: string;
        }

        interface LocatorText {
            before?: string;
            highlight?: string;
            after?: string;
        }

        /** A resource href, a reading-order index (from 0), or an object with an `href` (toc entry, reading-order entry or locator). */
        type TextTarget = string | number | { href: string };

        type TextFormat = 'text' | 'markdown';

        interface TextOptions {
            /** Characters to skip at the start of the resource; single resource only. */
            offset?: number;
            /** Maximum characters returned; defaults to 4194304. */
            maxChars?: number;
            /** `'text'` (default) drops images, `'markdown'` keeps headings, images and quotations. */
            format?: TextFormat;
        }

        interface TextAllOptions {
            /** Maximum characters returned in total; defaults to 4194304. */
            maxChars?: number;
            format?: TextFormat;
        }

        interface ExportOptions {
            /** Replace an existing target file; defaults to false (`INVALID_ARGUMENT` then). */
            overwrite?: boolean;
        }

        interface SearchOptions {
            /** Defaults to 0. */
            offset?: number;
            /** 1 to 500, defaults to 50; `offset + limit` at most 500. */
            limit?: number;
        }

        interface SearchHit {
            href: string;
            /** Chapter title when known. */
            title?: string;
            /** The hit position; accepted by {@link ReaderSession.goTo} and {@link ReadOptions.locator}. */
            locator: Locator;
            text: {
                before: string;
                highlight: string;
                after: string;
            };
        }

        /**
         * A book opened by {@link Epub.open}. `metadata`, `toc`, `readingOrder` and `positions`
         * are read from the plugin on first access and cached. Every method fails with
         * `SESSION_CLOSED` once the book is closed.
         * @see https://docs.autojs6.com/#/epubBookType
         */
        interface Book {
            readonly path: string;
            readonly isClosed: boolean;
            readonly metadata: Metadata;
            /** At most 5000 nodes. */
            readonly toc: TocEntry[];
            /** At most 5000 entries; the index is the reading-order index accepted by {@link text}. */
            readonly readingOrder: ReadingOrderEntry[];
            /** Synthetic position count (an approximate page count). */
            readonly positions: number;

            /**
             * Extracts the text of one resource (`target`) or of the whole book (no target: the
             * resources joined in reading order with blank lines, `maxChars` applying to the
             * total). Unknown hrefs and out-of-range indices fail with `RESOURCE_NOT_FOUND`, a
             * resource above 64 MiB with `LIMIT_EXCEEDED`.
             */
            text(target?: TextTarget | null, options?: TextOptions): string;

            textAsync(target?: TextTarget | null, options?: TextOptions): Promise<string>;

            /** The whole book in reading order; `offset` is not available here. */
            textAll(options?: TextAllOptions): string;

            textAllAsync(options?: TextAllOptions): Promise<string>;

            /** Decodes the cover (`RESOURCE_NOT_FOUND` without one, `PARSE_FAILED` when undecodable); recycle it when done. */
            cover(): ImageWrapper;

            /** Saves the cover resource as is; `outputPath` is a file path or an existing directory. Returns the saved path. */
            cover(outputPath: string, options?: ExportOptions): string;

            coverAsync(): Promise<ImageWrapper>;

            coverAsync(outputPath: string, options?: ExportOptions): Promise<string>;

            /**
             * Saves any manifest resource (image, style, font, chapter) as is; `outputPath` is a
             * file path or an existing directory. `RESOURCE_NOT_FOUND` for hrefs outside the
             * manifest, `LIMIT_EXCEEDED` above 64 MiB. Returns the saved path.
             */
            resource(href: string, outputPath: string, options?: ExportOptions): string;

            resourceAsync(href: string, outputPath: string, options?: ExportOptions): Promise<string>;

            /**
             * Full-text search by the Readium search service; `query` is 1 to 256 characters
             * after trimming and whitespace folding, at most 500 hits per query.
             */
            search(query: string, options?: SearchOptions): SearchHit[];

            searchAsync(query: string, options?: SearchOptions): Promise<SearchHit[]>;

            /**
             * The reader's highlights and notes of this book in reading order (at most 2000),
             * read from the plugin on every call (the reader may change them while the book is
             * open). Readium EPUB Reader plugin 1.1.0 (EPUB contract version 2):
             * `PLUGIN_INCOMPATIBLE` with plugin 1.0.0. Read-only; changes arrive as the
             * `highlight` events of a {@link ReaderSession}.
             */
            annotations(): Annotation[];

            annotationsAsync(): Promise<Annotation[]>;

            /** Closes the book; idempotent. Unclosed books close on script exit. */
            close(): void;

            /** `EpubBook { path: ... }`, with `, closed` once closed. */
            toString(): string;
        }

        type Theme = 'light' | 'sepia' | 'dark';

        type ColumnCount = 'auto' | '1' | '2';

        type TextAlign = 'start' | 'end' | 'left' | 'right' | 'justify' | 'center';

        /**
         * Reading preferences; every key is optional, `null` resets a key to the reader's default.
         * Types and ranges are strict (`INVALID_ARGUMENT`, nothing is clamped); unknown keys are
         * reported through one `error` event with `UNSUPPORTED_PREFERENCE` while the known part
         * applies. Applied preferences become the reader's global defaults.
         * @see https://docs.autojs6.com/#/epubReaderSessionType
         */
        interface Preferences {
            /** 0.5 to 3.0, relative font size. */
            fontSize?: number | null;
            /** Font name of at most 120 characters. */
            fontFamily?: string | null;
            /** 1.0 to 2.0. */
            lineHeight?: number | null;
            /** 0.0 to 4.0. */
            pageMargins?: number | null;
            theme?: Theme | null;
            /** Scroll mode instead of paginated mode. */
            scroll?: boolean | null;
            columnCount?: ColumnCount | null;
            verticalText?: boolean | null;
            textAlign?: TextAlign | null;
            hyphens?: boolean | null;
            /** Keep the publisher styles; turned off when `lineHeight`, `textAlign` or `hyphens` is set without it. */
            publisherStyles?: boolean | null;
        }

        interface ReadOptions {
            /** Start at a resource (`#fragment` allowed). */
            href?: string;
            /** Start at a total progression, 0 to 1. */
            progression?: number;
            /** Start at a locator (at most 16 KiB) from an earlier event or search hit. */
            locator?: Locator;
            /** Preferences applied before the reader shows. */
            preferences?: Preferences;
        }

        interface CloseOptions {
            /** Also finish the reader Activity; defaults to false (the reader stays for the user). */
            finish?: boolean;
        }

        interface Bookmark {
            locator: Locator;
            /** UTC milliseconds. */
            createdAt: number;
            /** Chapter title when the reader recorded one. */
            title?: string;
            /** Excerpt when the reader recorded one. */
            text?: string;
        }

        type AnnotationStyle = 'highlight' | 'underline' | string;

        /**
         * A highlight or note the reader keeps for a book (Readium EPUB Reader plugin 1.1.0,
         * EPUB contract version 2), as listed by {@link Book.annotations}.
         */
        interface Annotation {
            /** The reader's own id, stable while the highlight exists. */
            id: number;
            style: AnnotationStyle;
            /** `#RRGGBB`. */
            color: string;
            /** The user's note; absent when the highlight has none. */
            note?: string;
            /** The selected text. */
            quote?: string;
            /** Chapter title when the reader recorded one. */
            title?: string;
            /** The selection; accepted by {@link ReaderSession.goTo} and {@link ReadOptions.locator}. */
            locator: Locator;
            /** UTC milliseconds. */
            createdAt: number;
            /** UTC milliseconds; equals `createdAt` until the first edit. */
            updatedAt: number;
        }

        /**
         * `user` (the user left the reader), `host` (the script called `close`), `replaced`
         * (a newer session took over), `timeout` (the reader did not show within 60 s), `error`
         * (the plugin side failed), `overflow` (the script did not drain the events: more than
         * 512 queued actions or 8 MiB), `script-exit` (never emitted: the script is already gone).
         */
        type CloseReason = 'user' | 'host' | 'replaced' | 'timeout' | 'error' | 'overflow' | 'script-exit' | string;

        type SessionState = 'pending' | 'open' | 'closed';

        interface OpenEvent {
            locator: Locator | null;
            /** Book title. */
            title: string | null;
            href: string | null;
            /** Synthetic position count. */
            positions: number;
        }

        interface ProgressEvent {
            locator: Locator | null;
            /** Total progression, 0 to 1. */
            totalProgression: number | null;
            chapterTitle: string | null;
            href: string | null;
        }

        interface BookmarkEvent {
            action: 'added' | 'removed' | string;
            locator: Locator | null;
            /** UTC milliseconds. */
            createdAt: number | null;
            title: string | null;
            text: string | null;
        }

        /**
         * A highlight or note added, edited or removed in the reader (Readium EPUB Reader
         * plugin 1.1.0, EPUB contract version 2); the fields of {@link Annotation} with `null`
         * for the absent ones.
         */
        interface HighlightEvent {
            action: 'added' | 'updated' | 'removed' | string;
            id: number;
            style: AnnotationStyle;
            color: string;
            note: string | null;
            quote: string | null;
            title: string | null;
            locator: Locator | null;
            /** UTC milliseconds. */
            createdAt: number | null;
            updatedAt: number | null;
        }

        interface CloseEvent {
            reason: CloseReason;
        }

        /**
         * The event emitter returned by {@link Epub.read}. The script keeps running while the
         * session is open; `close` is the terminal event. Control methods run synchronously and
         * throw `EpubError` (`SESSION_CLOSED` once closed, `READER_NOT_VISIBLE` before `open`).
         * @see https://docs.autojs6.com/#/epubReaderSessionType
         */
        interface ReaderSession extends EventEmitter$ {
            readonly path: string;
            readonly state: SessionState;
            readonly isOpen: boolean;
            readonly isClosed: boolean;
            /** The last reported position (`open` / `progress`), null before the first report. */
            readonly locator: Locator | null;
            /** The last reported total progression, 0 to 1; -1 until a `progress` event carried one (the `open` locator usually has none yet). */
            readonly progress: number;
            /** Book title from the `open` event. */
            readonly title: string | null;
            /** Chapter title of the last `progress` event. */
            readonly chapterTitle: string | null;
            /** The last reported resource href. */
            readonly href: string | null;
            /** Synthetic position count from the `open` event; 0 before it. */
            readonly positions: number;
            /** Close reason, null while open. */
            readonly reason: CloseReason | null;

            /**
             * Jumps to an href (`#fragment` allowed), a total progression (0 to 1) or a locator
             * (at most 16 KiB); a `progress` event reports the new position. `INVALID_ARGUMENT`
             * for other shapes, `RESOURCE_NOT_FOUND` for targets outside the book.
             */
            goTo(target: string | number | Locator): this;

            /** Next page (next screen in scroll mode). */
            next(): this;

            /** Previous page. */
            prev(): this;

            /** Start of the next reading-order resource. */
            nextChapter(): this;

            /** Start of the previous reading-order resource. */
            prevChapter(): this;

            /** Applies part of the preferences (at most 16 KiB); see {@link Preferences}. */
            setPreferences(partial: Preferences): this;

            /** The reader's bookmarks for this book (at most 500). */
            bookmarks(): Bookmark[];

            /** Ends the session (`close` follows with reason `'host'`); the reader stays unless `finish`. Idempotent. */
            close(options?: CloseOptions): this;

            /** `EpubReaderSession { path: ..., state: ... }` with the href, progress and reason when known. */
            toString(): string;

            on(eventName: 'open', listener: (event: OpenEvent) => void): this;
            on(eventName: 'progress', listener: (event: ProgressEvent) => void): this;
            on(eventName: 'bookmark', listener: (event: BookmarkEvent) => void): this;
            on(eventName: 'highlight', listener: (event: HighlightEvent) => void): this;
            on(eventName: 'error', listener: (error: EpubError) => void): this;
            on(eventName: 'close', listener: (event: CloseEvent) => void): this;
            on(eventName: string, listener: (...args: any[]) => void): this;

            once(eventName: 'open', listener: (event: OpenEvent) => void): this;
            once(eventName: 'progress', listener: (event: ProgressEvent) => void): this;
            once(eventName: 'bookmark', listener: (event: BookmarkEvent) => void): this;
            once(eventName: 'highlight', listener: (event: HighlightEvent) => void): this;
            once(eventName: 'error', listener: (error: EpubError) => void): this;
            once(eventName: 'close', listener: (event: CloseEvent) => void): this;
            once(eventName: string, listener: (...args: any[]) => void): this;
        }
    }
}
