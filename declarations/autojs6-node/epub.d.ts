/** Portable EPUB APIs for Node main threads and Workers. No Rhino globals are injected. */
declare module "epub" {
  namespace epub {
    /** Default operation deadline: 60000 ms. A reader signal also cancels its active session. */
    type CallOptions = Pick<AutoJs6Node.BridgeCallOptions, "signal" | "timeoutMs">;
  interface API {
    readonly EpubError: EpubErrorConstructor;
    open(source: Source, callOptions?: CallOptions): Promise<Book>;
    openAsync(source: Source, callOptions?: CallOptions): Promise<Book>;
    metadata(source: Source, callOptions?: CallOptions): Promise<Metadata>;
    metadataAsync(source: Source, callOptions?: CallOptions): Promise<Metadata>;
    toc(source: Source, callOptions?: CallOptions): Promise<TocEntry[]>;
    tocAsync(source: Source, callOptions?: CallOptions): Promise<TocEntry[]>;
    readingOrder(source: Source, callOptions?: CallOptions): Promise<ReadingOrderEntry[]>;
    readingOrderAsync(source: Source, callOptions?: CallOptions): Promise<ReadingOrderEntry[]>;
    text(source: Source, target?: TextTarget | null, options?: TextOptions | null, callOptions?: CallOptions): Promise<string>;
    textAsync(source: Source, target?: TextTarget | null, options?: TextOptions | null, callOptions?: CallOptions): Promise<string>;
    cover(source: Source, outputPath?: null, options?: ExportOptions | null, callOptions?: CallOptions): Promise<Uint8Array>;
    coverAsync(source: Source, outputPath?: null, options?: ExportOptions | null, callOptions?: CallOptions): Promise<Uint8Array>;
    cover(source: Source, outputPath: string, options?: ExportOptions | null, callOptions?: CallOptions): Promise<string>;
    coverAsync(source: Source, outputPath: string, options?: ExportOptions | null, callOptions?: CallOptions): Promise<string>;
    search(source: Source, query: string, options?: SearchOptions | null, callOptions?: CallOptions): Promise<SearchHit[]>;
    searchAsync(source: Source, query: string, options?: SearchOptions | null, callOptions?: CallOptions): Promise<SearchHit[]>;
    annotations(source: Source, callOptions?: CallOptions): Promise<Annotation[]>;
    annotationsAsync(source: Source, callOptions?: CallOptions): Promise<Annotation[]>;
    read(source: Source, options?: ReadOptions | null, callOptions?: CallOptions): Promise<ReaderSession>;
    readAsync(source: Source, options?: ReadOptions | null, callOptions?: CallOptions): Promise<ReaderSession>;
    isAvailable(callOptions?: CallOptions): Promise<boolean>;
    isAvailableAsync(callOptions?: CallOptions): Promise<boolean>;
    /** Releases this client. Future calls create a new client. */
    close(): Promise<void>;
  }

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
            (message?: string, code?: ErrorCode | string): EpubError;
            new(message?: string, code?: ErrorCode | string): EpubError;
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
         * A highlight or note the reader keeps for a book (3-Folio EPUB with contract version 2,
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
         * 1024 pending reader events), `script-exit` (never emitted: the script is already gone).
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


  /** Metadata properties are ready when open() resolves. Remote methods are asynchronous. */
  interface Book {
    readonly path: string;
    readonly isClosed: boolean;
    readonly metadata: Metadata;
    readonly toc: TocEntry[];
    readonly readingOrder: ReadingOrderEntry[];
    readonly positions: number;
    text(target?: TextTarget | null, options?: TextOptions | null, callOptions?: CallOptions): Promise<string>;
    textAsync(target?: TextTarget | null, options?: TextOptions | null, callOptions?: CallOptions): Promise<string>;
    textAll(options?: TextAllOptions | null, callOptions?: CallOptions): Promise<string>;
    textAllAsync(options?: TextAllOptions | null, callOptions?: CallOptions): Promise<string>;
    /** Original encoded cover bytes; use images.fromBytes() to decode them. */
    cover(outputPath?: null, options?: ExportOptions | null, callOptions?: CallOptions): Promise<Uint8Array>;
    coverAsync(outputPath?: null, options?: ExportOptions | null, callOptions?: CallOptions): Promise<Uint8Array>;
    cover(outputPath: string, options?: ExportOptions | null, callOptions?: CallOptions): Promise<string>;
    coverAsync(outputPath: string, options?: ExportOptions | null, callOptions?: CallOptions): Promise<string>;
    resource(href: string, outputPath: string, options?: ExportOptions | null, callOptions?: CallOptions): Promise<string>;
    resourceAsync(href: string, outputPath: string, options?: ExportOptions | null, callOptions?: CallOptions): Promise<string>;
    search(query: string, options?: SearchOptions | null, callOptions?: CallOptions): Promise<SearchHit[]>;
    searchAsync(query: string, options?: SearchOptions | null, callOptions?: CallOptions): Promise<SearchHit[]>;
    annotations(callOptions?: CallOptions): Promise<Annotation[]>;
    annotationsAsync(callOptions?: CallOptions): Promise<Annotation[]>;
    close(callOptions?: CallOptions): Promise<void>;
  }
  interface EventMap {
    open: OpenEvent;
    progress: ProgressEvent;
    bookmark: BookmarkEvent;
    highlight: HighlightEvent;
    error: EpubError;
    close: CloseEvent;
  }
  /** Live local snapshots, async remote controls and callbacks on this runtime's JS thread. */
  interface ReaderSession {
    readonly path: string;
    readonly state: SessionState;
    readonly isOpen: boolean;
    readonly isClosed: boolean;
    readonly locator: Locator | null;
    readonly progress: number;
    readonly title: string | null;
    readonly chapterTitle: string | null;
    readonly href: string | null;
    readonly positions: number;
    readonly reason: CloseReason | null;
    goTo(target: string | number | Locator, callOptions?: CallOptions): Promise<this>;
    next(callOptions?: CallOptions): Promise<this>;
    prev(callOptions?: CallOptions): Promise<this>;
    nextChapter(callOptions?: CallOptions): Promise<this>;
    prevChapter(callOptions?: CallOptions): Promise<this>;
    setPreferences(partial: Preferences, callOptions?: CallOptions): Promise<this>;
    bookmarks(callOptions?: CallOptions): Promise<Bookmark[]>;
    close(options?: CloseOptions | null, callOptions?: CallOptions): Promise<this>;
    on<K extends keyof EventMap>(name: K, listener: (event: EventMap[K]) => void): this;
    once<K extends keyof EventMap>(name: K, listener: (event: EventMap[K]) => void): this;
    addListener<K extends keyof EventMap>(name: K, listener: (event: EventMap[K]) => void): this;
    off<K extends keyof EventMap>(name: K, listener: (event: EventMap[K]) => void): this;
    removeListener<K extends keyof EventMap>(name: K, listener: (event: EventMap[K]) => void): this;
    removeAllListeners(name?: keyof EventMap): this;
    listenerCount(name: keyof EventMap): number;
  }
  }
  const epub: epub.API;
  export = epub;
}
declare module "autojs6:epub" { import epub = require("epub"); export = epub; }
