/** Types for the explicit SDK module at process.env.AUTOJS6_HOST_CLIENT_MODULE. */
export declare const SDK_VERSION: 1;
export type HostCapability = "ui.toast" | "device.info" | "text.pinyin" | "text.pinyin4j" | "text.opencc" | "image.process" | "image.files" | "screen.metrics" | "console.control";
export type JsonValue = null | boolean | number | string | readonly JsonValue[] | { readonly [key: string]: JsonValue };
export declare class HostCallError extends Error {
  readonly code: string;
  readonly capability: string | null;
  readonly status: number;
  constructor(code: string, message: string, capability?: string | null, status?: number);
}
export declare const HOST_API_METHODS: Readonly<Record<"text.pinyin" | "text.pinyin4j" | "text.opencc" | "image.process" | "image.files" | "screen.metrics" | "console.control", readonly string[]>>;
export declare const OPENCC_CONVERSION_TYPES: readonly [
  "hk2s", "hk2t", "jp2t", "s2hk", "s2t", "s2tw", "s2twp", "t2hk", "t2s", "t2tw", "t2jp", "tw2s", "tw2t", "tw2sp",
  "s2twi", "twi2s", "s2jp", "t2twi", "hk2tw", "hk2twi", "hk2jp", "tw2hk", "tw2twi", "tw2jp",
  "twi2t", "twi2hk", "twi2tw", "twi2jp", "jp2s", "jp2hk", "jp2tw", "jp2twi",
];
export type OpenccConversionType = typeof OPENCC_CONVERSION_TYPES[number];
export type OpenccText = NonNullable<unknown>;
/** Uses the enabled 3-Hanzi CC provider, including the host's composite conversion plans. */
export type OpenccApi = {
  (text: OpenccText, type: OpenccConversionType | Uppercase<OpenccConversionType>): Promise<string>;
  convert(text: OpenccText, type: OpenccConversionType | Uppercase<OpenccConversionType>): Promise<string>;
} & { readonly [T in OpenccConversionType]: (text: OpenccText) => Promise<string> };
/** A frozen value referring to a host-owned bitmap, valid only within its execution. */
export interface ImageHandle {
  readonly id: string;
  readonly __autojs6ImageHandle: string;
  readonly width: number;
  readonly height: number;
}
export type ImageHandleLike =
  | { readonly id: string; readonly __autojs6ImageHandle?: string }
  | { readonly id?: string; readonly __autojs6ImageHandle: string };
export type ImageFormat = "png" | "jpg" | "jpeg" | "webp";
export interface ImageEncodingOptions { readonly format?: ImageFormat; readonly quality?: number }
export type ImageRegion = readonly [x: number, y: number, width: number, height: number];
export interface ImagePoint { readonly x: number; readonly y: number }
export interface ImageMatch extends ImagePoint { readonly score: number }
/** Row-major signed ARGB32 colors; these are not RGBA byte arrays. */
export interface ImagePixels { readonly data: readonly number[]; readonly width: number; readonly height: number }
export interface ImagePixelOptions { readonly region?: ImageRegion }
export interface ImageColorOptions extends ImagePixelOptions { readonly threshold?: number }
export interface ImageMatchOptions extends ImageColorOptions { readonly limit?: number; readonly max?: number }
export type ImageInterpolationName = "nearest" | "linear" | "cubic" | "area" | "lanczos4" | "linear_exact" | "nearest_exact";
export type ImageInterpolation = ImageInterpolationName | Uppercase<ImageInterpolationName> | `INTER_${Uppercase<ImageInterpolationName>}` | 0 | 1 | 2 | 3 | 4 | 5 | 6;
export interface ImageDetectOptions { readonly threshold?: number; readonly algorithm?: "diff" | "rgb" | "rgb+" | "hs" | "h" | "equal" | "oklab" }
export interface ImageScaleOptions { readonly interpolation?: ImageInterpolation }
export interface ImageRotateOptions { readonly centerX?: number; readonly centerY?: number; readonly filter?: boolean }
export interface ImageThresholdOptions {
  readonly threshold?: number; readonly maxValue?: number;
  readonly type?: "binary" | "binary_inv" | "trunc" | "tozero" | "tozero_inv";
}
export type ImageBlurSize = number | readonly [width: number, height: number];
export type ImageColor = number | string;
export type ImageMultiColorPoint = readonly [x: number, y: number, color: ImageColor] | (ImagePoint & { readonly color: ImageColor });
/** JSON transport remains limited to 64 KiB requests / 256 KiB results. Large images use host file paths. */
export interface ImagesApi {
  fromBase64(base64: string): Promise<ImageHandle>;
  /** Encoded PNG/JPEG/WebP bytes, sent as base64; no PFD upload or raw RGBA input. */
  fromBytes(bytes: ArrayBuffer | ArrayBufferView | readonly number[]): Promise<ImageHandle>;
  /** Requires image.files; paths resolve in the host's working directory and Android UID. */
  readImage(path: string): Promise<ImageHandle>;
  saveImage(image: ImageHandleLike, path: string, formatOrOptions?: ImageFormat | ImageEncodingOptions, quality?: number): Promise<void>;
  toBase64(image: ImageHandleLike, formatOrOptions?: ImageFormat | ImageEncodingOptions, quality?: number): Promise<string>;
  /** Encoded image bytes copied from base64, valid after recycle. Bun does not support the Node rgba/PFD overload. */
  toBytes(image: ImageHandleLike, formatOrOptions?: ImageFormat | ImageEncodingOptions, quality?: number): Promise<Uint8Array>;
  pixel(image: ImageHandleLike, x: number, y: number): Promise<number>;
  readPixels(image: ImageHandleLike, options?: ImagePixelOptions): Promise<ImagePixels>;
  getSize(image: ImageHandle): { width: number; height: number };
  copy(image: ImageHandleLike): Promise<ImageHandle>;
  clip(image: ImageHandleLike, x: number, y: number, width: number, height: number): Promise<ImageHandle>;
  resize(image: ImageHandleLike, width: number, height: number, options?: ImageScaleOptions): Promise<ImageHandle>;
  scale(image: ImageHandleLike, fx: number, fy?: number, options?: ImageScaleOptions): Promise<ImageHandle>;
  scale(image: ImageHandleLike, fx: number, options: ImageScaleOptions): Promise<ImageHandle>;
  rotate(image: ImageHandleLike, degrees: number, options?: ImageRotateOptions): Promise<ImageHandle>;
  rotate(image: ImageHandleLike, degrees: number, centerX: number, centerY?: number): Promise<ImageHandle>;
  flip(image: ImageHandleLike, direction?: "horizontal" | "vertical" | "both" | "none" | { readonly direction?: "horizontal" | "vertical" | "both" | "none" }): Promise<ImageHandle>;
  flip(image: ImageHandleLike, horizontal: boolean, vertical?: boolean): Promise<ImageHandle>;
  grayscale(image: ImageHandleLike): Promise<ImageHandle>;
  threshold(image: ImageHandleLike, options?: ImageThresholdOptions): Promise<ImageHandle>;
  blur(image: ImageHandleLike, size: ImageBlurSize): Promise<ImageHandle>;
  gaussianBlur(image: ImageHandleLike, size: ImageBlurSize, sigmaX?: number, sigmaY?: number): Promise<ImageHandle>;
  gaussianBlur(image: ImageHandleLike, size: ImageBlurSize, options: { readonly sigmaX?: number; readonly sigmaY?: number }): Promise<ImageHandle>;
  medianBlur(image: ImageHandleLike, size: number): Promise<ImageHandle>;
  invert(image: ImageHandleLike): Promise<ImageHandle>;
  findImage(image: ImageHandleLike, template: ImageHandleLike, options?: ImageColorOptions): Promise<ImagePoint | null>;
  matchTemplate(image: ImageHandleLike, template: ImageHandleLike, options?: ImageMatchOptions): Promise<readonly ImageMatch[]>;
  findColor(image: ImageHandleLike, color: ImageColor, options?: ImageColorOptions): Promise<ImagePoint | null>;
  findMultiColors(image: ImageHandleLike, color: ImageColor, points: readonly ImageMultiColorPoint[], options?: ImageColorOptions): Promise<ImagePoint | null>;
  detectsColor(image: ImageHandleLike, color: ImageColor, x: number, y: number, thresholdOrOptions?: number | ImageDetectOptions): Promise<boolean>;
  detectColor(image: ImageHandleLike, color: ImageColor, x: number, y: number, thresholdOrOptions?: number | ImageDetectOptions): Promise<boolean>;
  findAllPointsForColor(image: ImageHandleLike, color: ImageColor, options?: ImageColorOptions): Promise<readonly ImagePoint[]>;
  findPointsByColor(image: ImageHandleLike, color: ImageColor, options?: ImageColorOptions): Promise<readonly ImagePoint[]>;
  /** Releases the underlying bitmap; every handle from this execution is also released when the run ends. */
  recycle(image: ImageHandleLike): Promise<void>;
}
export interface PinyinOptions {
  readonly style?: number | "NORMAL" | "TONE" | "TONE2" | "TO3NE" | "INITIALS" | "FIRST_LETTER";
  readonly mode?: number | "NORMAL" | "SURNAME" | "PLACE_NAME" | "PLACENAME";
  readonly heteronym?: boolean;
  readonly group?: boolean;
  readonly segment?: boolean;
  readonly customDictionary?: Readonly<Record<string, readonly (readonly string[])[]>>;
}
export interface PinyinApi {
  convert(text: string, options?: PinyinOptions | null): Promise<string[][]>;
  simple(text: string, enableNumericTone?: boolean, enableSegment?: boolean): Promise<string>;
  compare(left: string, right: string): Promise<number>;
  compact(rows: readonly (readonly string[])[]): Promise<string[][]>;
  fromCodePoint(codePoint: number): Promise<string | null>;
  fromPhrase(phrase: string): Promise<string[][]>;
}
export interface Pinyin4jOptions {
  readonly separator?: string;
  readonly sep?: string;
  readonly case?: string | number | boolean;
  readonly caseType?: string | number | boolean;
  readonly tone?: string | number | boolean;
  readonly toneType?: string | number | boolean;
  readonly v?: string | number | boolean;
  readonly vChar?: string | number | boolean;
  readonly vCharType?: string | number | boolean;
}
export interface Pinyin4jReadingsOptions extends Pinyin4jOptions {
  readonly romanization?: string;
  readonly system?: string;
}
export interface Pinyin4jApi {
  of(text: string, options?: Pinyin4jOptions | string | null): Promise<string>;
  as(text: string): Promise<string>;
  readings(text: string, options?: Pinyin4jReadingsOptions | null): Promise<string[][]>;
}
export interface ScreenInfo {
  readonly width: number;
  readonly height: number;
  readonly rotation: number;
  readonly baseX: number;
  readonly baseY: number;
}
export interface CoordinateApi {
  /** Uses current display dimensions; fraction / pixel / base overloads follow AutoJs6 Scale. */
  cX(): Promise<number>;
  cX(value: number | string, base?: number | null, ratio?: boolean | "auto"): Promise<number>;
  cX(value: number | string, ratio: boolean | "auto"): Promise<number>;
  cY(): Promise<number>;
  cY(value: number | string, base?: number | null, ratio?: boolean | "auto"): Promise<number>;
  cY(value: number | string, ratio: boolean | "auto"): Promise<number>;
  cXy(value: number | string, baseOrAspectRatio?: number | `${number}:${number}` | null, ratio?: boolean | "auto"): Promise<number>;
  cXy(value: number | string, ratio: boolean | "auto"): Promise<number>;
  cYx(value: number | string, baseOrAspectRatio?: number | `${number}:${number}` | null, ratio?: boolean | "auto"): Promise<number>;
  cYx(value: number | string, ratio: boolean | "auto"): Promise<number>;
  getInfo(): Promise<ScreenInfo>;
  getScaleBaseX(): Promise<number>;
  getScaleBaseY(): Promise<number>;
  getScaleBases(): Promise<{ x: number; y: number }>;
  /** A custom base may be assigned once per axis, within this execution. */
  setScaleBaseX(base: number): Promise<void>;
  setScaleBaseY(base: number): Promise<void>;
  setScaleBases(x: number, y: number): Promise<void>;
}
export type ConsoleColor = string | number;
export type ConsoleColorMap = Partial<Record<"verbose" | "log" | "info" | "warn" | "error" | "assert", ConsoleColor | null>>;
export type ConsoleColorArgs = [
  ConsoleColor | null, ConsoleColor | null, (ConsoleColor | null)?,
  (ConsoleColor | null)?, (ConsoleColor | null)?, (ConsoleColor | null)?,
];
export type ConsoleColorList = readonly [
  (ConsoleColor | null)?, (ConsoleColor | null)?, (ConsoleColor | null)?,
  (ConsoleColor | null)?, (ConsoleColor | null)?, (ConsoleColor | null)?,
];
/** Explicit asynchronous window controls; ordinary Bun console output remains native. */
export interface ConsoleApi {
  show(reset?: boolean): Promise<void>;
  hide(): Promise<void>;
  reset(): Promise<void>;
  expand(): Promise<void>;
  collapse(): Promise<void>;
  launch(): Promise<void>;
  clear(): Promise<void>;
  setSize(width: number, height: number): Promise<void>;
  setPosition(x: number, y: number): Promise<void>;
  setTitle(title?: string): Promise<void>;
  setTitleTextSize(size: number): Promise<void>;
  setTitleTextColor(color: ConsoleColor): Promise<void>;
  setTitleBackgroundColor(color: ConsoleColor): Promise<void>;
  setTitleBackgroundTint(color?: ConsoleColor | null): Promise<void>;
  setTitleBackgroundAlpha(alpha: number): Promise<void>;
  setTitleIconsTint(color?: ConsoleColor | null): Promise<void>;
  setContentTextSize(size: number): Promise<void>;
  setContentTextColor(): Promise<void>;
  setContentTextColor(color: ConsoleColor | ConsoleColorList | ConsoleColorMap): Promise<void>;
  setContentTextColor(...colors: ConsoleColorArgs): Promise<void>;
  setContentTextColors(): Promise<void>;
  setContentTextColors(color: ConsoleColor | ConsoleColorList | ConsoleColorMap): Promise<void>;
  setContentTextColors(...colors: ConsoleColorArgs): Promise<void>;
  setContentBackgroundColor(color: ConsoleColor): Promise<void>;
  setContentBackgroundTint(color?: ConsoleColor | null): Promise<void>;
  setContentBackgroundAlpha(alpha: number): Promise<void>;
  setTextSize(size: number): Promise<void>;
  setTextColor(color: ConsoleColor): Promise<void>;
  setBackgroundColor(color: ConsoleColor): Promise<void>;
  setBackgroundTint(color?: ConsoleColor | null): Promise<void>;
  setBackgroundAlpha(alpha: number): Promise<void>;
  setExitOnClose(enabledOrTimeout?: boolean | number): Promise<void>;
  setTouchable(touchable?: boolean): Promise<void>;
  setGlobalLogConfig(config: { readonly [key: string]: JsonValue }): Promise<void>;
  resetGlobalLogConfig(): Promise<void>;
}
export interface DeviceInfo {
  readonly brand: string;
  readonly manufacturer: string;
  readonly model: string;
  readonly device: string;
  readonly product: string;
  readonly sdkInt: number;
  readonly release: string;
  readonly supportedAbis: readonly string[];
}
export interface HostClient {
  readonly sdkVersion: 1;
  readonly bridgeVersion: 1;
  readonly capabilities: readonly string[];
  readonly limits: Readonly<{
    maxRequestBytes: number; maxResultBytes: number; maxCallsPerExecution: number;
    maxConcurrentCalls: number; callTimeoutMillis: number;
  }>;
  hasCapability(capability: string): boolean;
  /** Raw calls still obey the same host grants and method validation. No generic Node bridge is exposed. */
  call(capability: string, payload?: { readonly [key: string]: JsonValue }): Promise<{ [key: string]: JsonValue }>;
  toast(text: string, duration?: "short" | "long"): Promise<{ shown: boolean }>;
  readonly device: { info(): Promise<DeviceInfo> };
  readonly pinyin: PinyinApi;
  readonly pinyin4j: Pinyin4jApi;
  readonly opencc: OpenccApi;
  readonly images: ImagesApi;
  readonly coordinates: CoordinateApi;
  readonly console: ConsoleApi;
}
export interface HostClientOptions {
  readonly socket?: string;
  /** A Bun-compatible fetch, including its unix option; useful for transport adapters. */
  readonly fetch?: (url: string, init: {
    unix: string; signal: AbortSignal; method?: string; headers?: { "Content-Type": string }; body?: string;
  }) => Promise<{ ok: boolean; status: number; json(): Promise<unknown> }>;
}
export declare function createHostClient(options?: HostClientOptions): Promise<HostClient>;
