declare module "autojs6:global" {
  namespace global {
    /**
     * The global data functions of AutoJs6 Rhino scripts as a module (a Node script has no Rhino global object). Same
     * argument counts, conversions and errors as Rhino; randomInt / randomFloat are jsox.mathx's.
     */
    export interface GlobalModule {
      /** A random number in [0, 1), or in [min, max] (NaN when only one bound is given). */
      random(min?: number | null, max?: number | null): number;
      randomInt(...values: readonly unknown[]): number;
      randomFloat(...values: readonly unknown[]): number;
      isInteger(o: unknown): boolean;
      isPrimitive(o: unknown): boolean;
      /** species.isObject: a plain script object (not an array, function or Java handle). */
      isObject(o: unknown): boolean;
      isReference(o: unknown): boolean;
      isBigInt(o: unknown): o is bigint;
      isEmptyObject(o: unknown): boolean;
      /** typeof o is "object" and o is not null. */
      isObjectSpecies(o: unknown): boolean;
      /** The axios module of this runtime; in Workers the requests run through the main thread and diagnostics() returns a Promise. */
      readonly axios: typeof import("axios");
      /** Rhino's bundled libraries (the host's builds, shipped with the runtime), compiled on first access in each thread. */
      readonly dayjs: Dayjs;
      readonly pangu: Pangu;
      readonly cheerio: Cheerio;
      /** Rhino's i18n: banana-i18n with the messages of ./i18n (or ./assets/i18n) of the working directory loaded. */
      readonly i18n: I18n;
      /** Rhino's global open: files.open. */
      open: import("files").FilesModule["open"];
      /** Rhino's global Color (built with colors on first use). */
      readonly Color: import("colors").ColorConstructor;
    }
    /** dayjs (MIT); see the dayjs documentation for the API. */
    export interface Dayjs {
      (date?: unknown, format?: string | readonly string[], locale?: string | boolean, strict?: boolean): any;
      readonly [member: string]: any;
    }
    /** pangu.js 10 (MIT): spacing between CJK and half-width characters. */
    export interface Pangu {
      readonly version: string;
      spaceText(text: string): string;
      hasProperSpacing(text: string): boolean;
      readonly [member: string]: any;
    }
    /** cheerio (MIT); see the cheerio documentation for the API. */
    export interface Cheerio {
      load(content: string | Uint8Array, options?: object | null, isDocument?: boolean): any;
      readonly [member: string]: any;
    }
    export interface I18n {
      (key: string, ...parameters: unknown[]): string;
      readonly banana: any;
      setPath(relativePath: string): void;
      setLocale(locale: string): void;
      getFallbackLocales(): string[];
      getParser(): any;
      getPath(): string;
      getLocale(): string;
      getFinalFallback(): string;
      load(messageSource: string | object, locale?: string): any;
      loadAll(): void;
    }
  }

  const global: global.GlobalModule;
  export = global;
}
