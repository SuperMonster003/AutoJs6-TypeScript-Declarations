/// <reference path="./index.d.ts" />

/** Script-facing interfaces for the libraries bundled in assets/modules.
 * These describe the bundled core APIs; optional Dayjs plugins and the Axios
 * browser implementation's private fields are not implicitly enabled.
 */
declare namespace BundledLibraries {
    interface AxiosConfig<D = unknown> {
        url?: string;
        method?: string;
        baseURL?: string;
        headers?: Record<string, string | number | boolean | string[]>;
        params?: Record<string, unknown>;
        data?: D;
        timeout?: number;
        timeoutErrorMessage?: string;
        responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
        responseEncoding?: string;
        auth?: { username: string; password: string };
        withCredentials?: boolean;
        validateStatus?: ((status: number) => boolean) | null;
        transformRequest?: ((data: D, headers: Record<string, unknown>) => unknown)[];
        transformResponse?: ((data: unknown) => unknown)[];
        cancelToken?: AxiosCancelToken;
        onUploadProgress?: (event: { loaded: number; total?: number; lengthComputable: boolean }) => void;
        onDownloadProgress?: (event: { loaded: number; total?: number; lengthComputable: boolean }) => void;
    }
    interface AxiosResponse<T = unknown, D = unknown> {
        data: T;
        status: number;
        statusText: string;
        headers: Record<string, string>;
        config: AxiosConfig<D>;
        request?: unknown;
    }
    interface AxiosError<T = unknown, D = unknown> extends Error {
        config: AxiosConfig<D>;
        code?: string;
        request?: unknown;
        response?: AxiosResponse<T, D>;
        isAxiosError: boolean;
        toJSON(): object;
    }
    interface AxiosCancelToken {
        readonly promise: Promise<{ message?: string }>;
        throwIfRequested(): void;
    }
    interface InterceptorManager<T> {
        use(onFulfilled?: (value: T) => T | Promise<T>, onRejected?: (error: unknown) => unknown): number;
        eject(id: number): void;
    }
    interface AxiosInstance {
        <T = unknown, D = unknown>(config: AxiosConfig<D>): Promise<AxiosResponse<T, D>>;
        <T = unknown, D = unknown>(url: string, config?: AxiosConfig<D>): Promise<AxiosResponse<T, D>>;
        defaults: AxiosConfig;
        interceptors: { request: InterceptorManager<AxiosConfig>; response: InterceptorManager<AxiosResponse> };
        request<T = unknown, D = unknown>(config: AxiosConfig<D>): Promise<AxiosResponse<T, D>>;
        get<T = unknown>(url: string, config?: AxiosConfig): Promise<AxiosResponse<T>>;
        delete<T = unknown>(url: string, config?: AxiosConfig): Promise<AxiosResponse<T>>;
        head<T = unknown>(url: string, config?: AxiosConfig): Promise<AxiosResponse<T>>;
        options<T = unknown>(url: string, config?: AxiosConfig): Promise<AxiosResponse<T>>;
        post<T = unknown, D = unknown>(url: string, data?: D, config?: AxiosConfig<D>): Promise<AxiosResponse<T, D>>;
        put<T = unknown, D = unknown>(url: string, data?: D, config?: AxiosConfig<D>): Promise<AxiosResponse<T, D>>;
        patch<T = unknown, D = unknown>(url: string, data?: D, config?: AxiosConfig<D>): Promise<AxiosResponse<T, D>>;
        getUri(config?: AxiosConfig): string;
    }
    interface Axios extends AxiosInstance {
        create(config?: AxiosConfig): AxiosInstance;
        isAxiosError<T = unknown, D = unknown>(error: unknown): error is AxiosError<T, D>;
        isCancel(value: unknown): boolean;
        all<T>(values: (T | Promise<T>)[]): Promise<T[]>;
        spread<T, R>(callback: (...values: T[]) => R): (values: T[]) => R;
        CancelToken: {
            new(executor: (cancel: (message?: string) => void) => void): AxiosCancelToken;
            source(): { token: AxiosCancelToken; cancel(message?: string): void };
        };
        /** Host browser adapters; implementation-specific constructors remain explicit unknowns. */
        browser: {
            Object: ObjectConstructor;
            window: object;
            FormData: unknown;
            XMLHttpRequest: unknown;
            Blob: unknown;
            EventTarget: unknown;
            Event: unknown;
            setTimeout(callback: () => void, delay?: number): unknown;
        };
        utils: {
            openFile(path: string): HostBlob;
            saveBlobToFile(blob: HostBlob, path: string): Promise<void>;
            copyInputStream(input: java.io.InputStream, output: java.io.OutputStream, bufferSize?: number): void;
            ThreadPool: {
                run<T>(callback: () => T): Promise<T>;
                create_thread(): { run<T>(callback: () => T): Promise<T>; close(): void };
                setPrintError(enabled: boolean): void;
            };
        };
    }
    interface HostBlob {
        readonly size: number;
        readonly type: string;
        readonly name?: string;
        readonly lastModified?: number;
        /** The bundled adapter currently leaves these methods unimplemented. */
        slice(start?: number, end?: number, contentType?: string): void;
        arrayBuffer(): void;
    }

    type DayjsInput = string | number | Date | Dayjs | null | undefined;
    type DayjsUnit = 'millisecond' | 'milliseconds' | 'ms' | 'second' | 'seconds' | 's' | 'minute' | 'minutes' | 'm' |
        'hour' | 'hours' | 'h' | 'day' | 'days' | 'd' | 'week' | 'weeks' | 'w' | 'month' | 'months' | 'M' |
        'year' | 'years' | 'y' | 'date' | 'dates' | 'D';
    interface Dayjs {
        clone(): Dayjs;
        isValid(): boolean;
        year(): number;
        year(value: number): Dayjs;
        month(): number;
        month(value: number): Dayjs;
        date(): number;
        date(value: number): Dayjs;
        day(): number;
        day(value: number): Dayjs;
        hour(): number;
        hour(value: number): Dayjs;
        minute(): number;
        minute(value: number): Dayjs;
        second(): number;
        second(value: number): Dayjs;
        millisecond(): number;
        millisecond(value: number): Dayjs;
        get(unit: DayjsUnit): number;
        set(unit: DayjsUnit, value: number): Dayjs;
        add(value: number, unit?: DayjsUnit): Dayjs;
        subtract(value: number, unit?: DayjsUnit): Dayjs;
        startOf(unit: DayjsUnit): Dayjs;
        endOf(unit: DayjsUnit): Dayjs;
        format(template?: string): string;
        diff(date?: DayjsInput, unit?: DayjsUnit, float?: boolean): number;
        valueOf(): number;
        unix(): number;
        daysInMonth(): number;
        toDate(): Date;
        toJSON(): string;
        toISOString(): string;
        toString(): string;
        isBefore(date?: DayjsInput, unit?: DayjsUnit): boolean;
        isSame(date?: DayjsInput, unit?: DayjsUnit): boolean;
        isAfter(date?: DayjsInput, unit?: DayjsUnit): boolean;
        locale(): string;
        locale(preset: string, object?: object): Dayjs;
        utcOffset(): number;
    }
    interface DayjsFactory {
        (date?: DayjsInput): Dayjs;
        unix(seconds: number): Dayjs;
        isDayjs(value: unknown): value is Dayjs;
        locale(preset?: string | object, object?: object, isLocal?: boolean): string;
        extend<T>(plugin: (option: T | undefined, dayjsClass: { new(...args: unknown[]): Dayjs }, factory: DayjsFactory) => void, option?: T): DayjsFactory;
    }

    interface HtmlNode {
        type: string;
        name?: string;
        data?: string;
        attribs?: Record<string, string>;
        children?: HtmlNode[];
        parent: HtmlNode | null;
        prev: HtmlNode | null;
        next: HtmlNode | null;
    }
    interface CheerioOptions {
        xmlMode?: boolean;
        decodeEntities?: boolean;
        lowerCaseTags?: boolean;
        lowerCaseAttributeNames?: boolean;
        recognizeSelfClosing?: boolean;
        recognizeCDATA?: boolean;
        scriptingEnabled?: boolean;
    }
    type CheerioContent = string | HtmlNode | HtmlNode[] | Cheerio;
    interface Cheerio extends ArrayLike<HtmlNode> {
        attr(name: string): string | undefined;
        attr(): Record<string, string> | undefined;
        attr(name: string, value: string | number | null | ((index: number, value: string) => string | null)): this;
        attr(values: Record<string, string | number | null>): this;
        prop(name: string): unknown;
        prop(name: string, value: unknown): this;
        data(): Record<string, unknown>;
        data(name: string): unknown;
        data(name: string, value: unknown): this;
        val(): string | string[] | undefined;
        val(value: string | string[]): this;
        text(): string;
        text(value: string | ((index: number, text: string) => string)): this;
        html(): string | null;
        html(content: CheerioContent): this;
        toString(): string;
        find(selector: string | HtmlNode | Cheerio): Cheerio;
        filter(selector: string | ((index: number, node: HtmlNode) => boolean)): Cheerio;
        not(selector: string | HtmlNode | Cheerio): Cheerio;
        is(selector: string | ((index: number, node: HtmlNode) => boolean)): boolean;
        has(selector: string | HtmlNode): Cheerio;
        eq(index: number): Cheerio;
        first(): Cheerio;
        last(): Cheerio;
        slice(start?: number, end?: number): Cheerio;
        children(selector?: string): Cheerio;
        contents(): Cheerio;
        parent(selector?: string): Cheerio;
        parents(selector?: string): Cheerio;
        parentsUntil(selector?: string, filter?: string): Cheerio;
        closest(selector: string): Cheerio;
        next(selector?: string): Cheerio;
        nextAll(selector?: string): Cheerio;
        nextUntil(selector?: string, filter?: string): Cheerio;
        prev(selector?: string): Cheerio;
        prevAll(selector?: string): Cheerio;
        prevUntil(selector?: string, filter?: string): Cheerio;
        siblings(selector?: string): Cheerio;
        each(callback: (index: number, node: HtmlNode) => void | boolean): this;
        map<T>(callback: (index: number, node: HtmlNode) => T | T[] | null | undefined): ArrayLike<T> & { get(): T[]; toArray(): T[] };
        get(): HtmlNode[];
        get(index: number): HtmlNode | undefined;
        toArray(): HtmlNode[];
        index(selector?: string | HtmlNode | Cheerio): number;
        add(content: CheerioContent, context?: CheerioContent): Cheerio;
        addBack(selector?: string): Cheerio;
        end(): Cheerio;
        clone(): Cheerio;
        append(...contents: CheerioContent[]): this;
        prepend(...contents: CheerioContent[]): this;
        before(...contents: CheerioContent[]): this;
        after(...contents: CheerioContent[]): this;
        appendTo(target: CheerioContent): this;
        prependTo(target: CheerioContent): this;
        insertAfter(target: CheerioContent): this;
        insertBefore(target: CheerioContent): this;
        replaceWith(content: CheerioContent): this;
        remove(selector?: string): this;
        empty(): this;
        wrap(content: CheerioContent): this;
        wrapAll(content: CheerioContent): this;
        wrapInner(content: CheerioContent): this;
        unwrap(selector?: string): this;
        hasClass(className: string): boolean;
        addClass(className: string): this;
        removeClass(className?: string): this;
        toggleClass(className: string, state?: boolean): this;
        removeAttr(name: string): this;
        css(name: string): string | undefined;
        css(name: string, value: string | number): this;
        css(values: Record<string, string | number>): this;
        serialize(): string;
        serializeArray(): { name: string; value: string }[];
    }
    interface CheerioStatic extends Omit<CheerioAPI, never> {
        default: CheerioAPI;
        merge<T extends ArrayLike<HtmlNode> & { length: number }>(first: T, second: ArrayLike<HtmlNode>): T;
    }
    interface CheerioAPI {
        (selector?: CheerioContent, context?: CheerioContent, root?: CheerioContent, options?: CheerioOptions): Cheerio;
        html(options?: CheerioOptions): string;
        html(content: CheerioContent, options?: CheerioOptions): string;
        xml(content?: CheerioContent): string;
        text(content?: ArrayLike<HtmlNode>): string;
        root(): Cheerio;
        contains(container: HtmlNode, contained: HtmlNode): boolean;
        parseHTML(data: string, keepScripts?: boolean): HtmlNode[] | null;
        load(content: CheerioContent, options?: CheerioOptions | null, isDocument?: boolean): CheerioAPI;
    }
}
