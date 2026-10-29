declare module "util" {
  namespace util {
    export interface InspectOptions {
      readonly showHidden?: boolean;
      readonly depth?: number | null;
      readonly colors?: boolean;
      readonly customInspect?: boolean;
      readonly compact?: boolean | number;
      readonly breakLength?: number;
      readonly sorted?: boolean | ((a: string, b: string) => number);
    }

    export interface UtilModule {
      format(format?: unknown, ...args: readonly unknown[]): string;
      inspect(object: unknown, options?: InspectOptions | boolean | null): string;
      inspect(object: unknown, showHidden?: boolean, depth?: number | null, colors?: boolean): string;
    }
  }

  const util: util.UtilModule;
  export = util;
}

declare module "node:util" {
  import util = require("util");
  export = util;
}

/**
 * The util module of AutoJs6 Rhino scripts (not node:util, which the bare name "util" keeps): type predicates, argument
 * guards, the legacy Inspector of util.inspect / util.format, display unit conversions and the util.java,
 * util.morseCode, util.version and util.versionCodes submodules. Same argument counts, conversions and errors as Rhino.
 * util.java.*, util.morseCode.vibrate and MorseCode#vibrate use the Java facade (java_interop) and return Promises.
 */
declare module "autojs6:util" {
  namespace util {
    type JavaHandle = import("java").ObjectHandle;
    type JavaClass = string | import("java").ClassDescriptor | JavaHandle;

    export interface InspectOptions {
      readonly showHidden?: boolean;
      readonly depth?: number | null;
      readonly colors?: boolean;
      readonly customInspect?: boolean;
      readonly maxArrayItems?: number;
      readonly maxStringLength?: number;
      readonly maxObjectKeys?: number;
    }

    export interface Inspect {
      (object: unknown, options?: InspectOptions | boolean | null, depth?: number | null, colors?: boolean): string;
      readonly colors: { readonly [name: string]: readonly [number, number] };
      readonly styles: { readonly [style: string]: string };
    }

    export interface MorseCode {
      readonly code: string;
      readonly pattern: number[];
      getCode(): string;
      getPattern(): number[];
      vibrate(delay?: number): Promise<void>;
      toString(): string;
    }

    export interface MorseCodeModule {
      /** A dot is 1 unit, a dash 3, the gap within a character 1, between characters 3, between words 7 (unit timeSpan, 100 ms). */
      (source: unknown, timeSpan?: number): MorseCode;
      getCode(source: unknown, timeSpan?: number): string;
      getPattern(source: unknown, timeSpan?: number): number[];
      vibrate(source: unknown, delay?: number): Promise<void>;
    }

    export interface VersionCodeInfo {
      readonly versionCode: string;
      readonly apiLevel: number;
      readonly releaseName: string;
      readonly platformVersion: string;
      readonly internalCodename: string;
      readonly releaseDate: string;
      /** Local midnight of the release date (milliseconds). */
      readonly releaseTimestamp: number;
      valueOf(): number;
    }

    export interface VersionCodesModule {
      /** The version code constants (CUPCAKE ... CINNAMON_BUN) are on the prototype. */
      readonly [versionCode: string]: unknown;
      search(query: string | number | Date): VersionCodeInfo | null;
      searchAll(query: string | number | Date): VersionCodeInfo[];
      summary(isInDetail?: boolean): string;
      toString(isInDetail?: boolean): string;
    }

    export interface JavaModule {
      instanceof(obj: unknown, clazz: JavaClass | null | undefined): Promise<boolean>;
      instanceOf(obj: unknown, clazz: JavaClass | null | undefined): Promise<boolean>;
      /** A Java array of a class (name, descriptor or Class handle) or string / int / long / double / char / byte / float / short / boolean. */
      array(componentType: JavaClass, dimension: number, ...dimensions: number[]): Promise<JavaHandle>;
      toJsArray(list: JavaHandle | readonly unknown[] | null | undefined, nullListToEmptyArray?: boolean): Promise<unknown[] | null>;
      objectToMap(o: object | null | undefined): Promise<JavaHandle | null>;
      mapToObject(map: JavaHandle | object | null | undefined): Promise<{ [key: string]: unknown } | null>;
    }

    export interface UtilModule {
      isArray(o: unknown): o is unknown[];
      isBoolean(o: unknown): o is boolean;
      isNull(o: unknown): o is null;
      isNullOrUndefined(o: unknown): o is null | undefined;
      isNumber(o: unknown): o is number;
      isString(o: unknown): o is string;
      isSymbol(o: unknown): o is symbol;
      isUndefined(o: unknown): o is undefined;
      isRegExp(o: unknown): o is RegExp;
      isObject(o: unknown): o is object;
      isDate(o: unknown): o is Date;
      isError(o: unknown): o is Error;
      isFunction(o: unknown): o is (...args: unknown[]) => unknown;
      isBigInt(o: unknown): o is bigint;
      /** A Java object handle of the Java facade (not a java.type() descriptor). */
      isJavaObject(o: unknown): boolean;
      /** A Java array handle. */
      isJavaArray(o: unknown): boolean;
      isInteger(o: unknown): boolean;
      isPrimitive(o: unknown): boolean;
      isReference(o: unknown): boolean;
      isEmptyObject(o: unknown): boolean;
      extend(d: Function, b: Function | { readonly prototype: unknown } | null): void;
      format(...args: unknown[]): string;
      readonly inspect: Inspect;
      deprecate(...args: unknown[]): void;
      debuglog(...args: unknown[]): void;
      log(...args: unknown[]): void;
      checkStringParam(src: unknown, pattern: string | RegExp): boolean;
      checkStringArgument(src: unknown, pattern: string | RegExp): boolean;
      assureStringStartsWith(s: unknown, start: unknown): string;
      assureStringEndsWith(s: unknown, end: unknown): string;
      assureStringSurroundsWith(s: unknown, start: unknown, end?: unknown): string;
      ensureType(o: unknown, type: string): void;
      ensureStringType(...values: unknown[]): void;
      ensureNumberType(...values: unknown[]): void;
      ensureUndefinedType(...values: unknown[]): void;
      ensureBooleanType(...values: unknown[]): void;
      ensureSymbolType(...values: unknown[]): void;
      ensureBigIntType(...values: unknown[]): void;
      ensureBigintType(...values: unknown[]): void;
      ensureObjectType(...values: unknown[]): void;
      ensureFunctionType(...values: unknown[]): void;
      ensureNonNullObjectType(...values: unknown[]): void;
      ensureArrayType(...values: unknown[]): void;
      toRegular<T extends Function>(f: T): T;
      /** Obsolete in AutoJs6 (throws, as in Rhino). */
      toRegularAndCall(...args: unknown[]): never;
      /** Obsolete in AutoJs6 (throws, as in Rhino). */
      toRegularAndApply(...args: unknown[]): never;
      /** Pixels of a dp value, with the screen density of the device (float math as the host). */
      dpToPx(dp: number | string): number;
      /** Pixels of an sp value; linear with the scaled density (api-coverage Q60). */
      spToPx(sp: number | string): number;
      pxToDp(px: number | string): number;
      pxToSp(px: number | string): number;
      readonly java: JavaModule;
      readonly version: { readonly sdkInt: number };
      readonly versionCodes: VersionCodesModule;
      readonly morseCode: MorseCodeModule;
      __assignFunctions__(src: object, target: object, funcNames: readonly string[]): void;
    }
  }

  const util: util.UtilModule;
  export = util;
}
