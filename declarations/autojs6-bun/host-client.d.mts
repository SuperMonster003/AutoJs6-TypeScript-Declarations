/** Types for the explicit SDK module at process.env.AUTOJS6_HOST_CLIENT_MODULE. */
export declare const SDK_VERSION: 1;
export type HostCapability = "screen.record.microphone" | "screen.record.playback" | "ui.toast" | "device.info" | "text.pinyin" | "text.pinyin4j" | "text.opencc" | "image.process" | "image.files" | "screen.capture" | "screen.record" | "screen.metrics" | "console.control";
export type JsonValue = null | boolean | number | string | readonly JsonValue[] | { readonly [key: string]: JsonValue };
export declare class HostCallError extends Error {
  readonly code: string;
  readonly capability: string | null;
  readonly status: number;
  constructor(code: string, message: string, capability?: string | null, status?: number);
}
export declare const HOST_API_METHODS: Readonly<Record<"text.pinyin" | "text.pinyin4j" | "text.opencc" | "image.process" | "image.files" | "screen.capture" | "screen.record" | "screen.metrics" | "console.control", readonly string[]>>;
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
export type ImageHandleLike = (
  | { readonly id: string; readonly __autojs6ImageHandle?: string }
  | { readonly id?: string; readonly __autojs6ImageHandle: string }
) & { readonly __autojs6MatHandle?: never; readonly __autojs6ImageFeaturesHandle?: never };
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
export interface ScreenCaptureOptions {
  /** Consent wait budget in 1..120000 ms. Default 120000; each transport call still has its normal limit. */
  readonly timeoutMs?: number;
  readonly width?: number;
  readonly height?: number;
  readonly orientation?: "auto" | "portrait" | "landscape";
  /** Fail without opening a dialog when this execution has no active authorization. */
  readonly requireExistingPermission?: boolean;
}
export type ScreenRecordingAudioSource = "none" | "microphone" | "playback" | "mixed";
export interface ScreenRecordingOptions {
  /** Specify both even dimensions, 2..8192. Omitted dimensions use the capture size. The encoder must support them. */
  readonly width?: number;
  readonly height?: number;
  /** Integer 1..120, default 30, subject to the Android encoder. */
  readonly frameRate?: number;
  /** Positive integer bits per second, default 8000000, subject to the Android encoder. */
  readonly bitRate?: number;
  /** Default none. Audio uses AAC-LC, 48 kHz mono, 128 kbit/s. Requires the separate audio grant(s) and Android RECORD_AUDIO permission. */
  readonly audio?: ScreenRecordingAudioSource | false;
}
export interface ScreenRecordingActive {
  readonly state: "recording" | "failed";
  readonly id: string;
  readonly path: string;
  readonly width: number;
  readonly height: number;
  readonly frameRate: number;
  readonly bitRate: number;
  readonly elapsedMs: number;
  readonly audio: boolean;
  readonly audioSource: ScreenRecordingAudioSource;
  readonly error: string | null;
}
export type ScreenRecordingStatus = { readonly state: "idle" } | ScreenRecordingActive;
export interface ScreenRecordingResult {
  readonly id: string;
  readonly path: string;
  readonly size: number;
  readonly durationMs: number;
  readonly width: number;
  readonly height: number;
  readonly mimeType: "video/mp4";
  readonly videoCodec: "h264";
  /** Whether the MP4 has an audio track; Android capture policy or privacy controls can still silence its contents. */
  readonly audio: boolean;
  readonly audioSource: ScreenRecordingAudioSource;
  readonly audioCodec: "aac" | null;
  readonly audioSampleRate: 48000 | null;
  readonly audioChannels: 1 | null;
}
/** Requires screen.capture, screen.record and existing Android capture consent. Screenshots remain available during recording. */
export interface ScreenRecorderApi {
  /** Host path, relative to the script working directory. Existing output files are never replaced. */
  start(path: string, options?: ScreenRecordingOptions): Promise<ScreenRecordingActive>;
  /** Finalize a playable MP4 and return its metadata, or null when idle. */
  stop(): Promise<ScreenRecordingResult | null>;
  /** Discard an unfinished recording, retaining the screenshot session; false when idle. */
  cancel(): Promise<boolean>;
  getStatus(): Promise<ScreenRecordingStatus>;
}
/** JSON transport remains limited to 64 KiB requests / 256 KiB results. Large images use host file paths. */
export type ImageInput = ImageHandleLike | string;

export interface MatHandle {
  readonly id: string; readonly __autojs6MatHandle: string;
  readonly width: number; readonly height: number; readonly channels: number; readonly depth: number;
}
export interface ImageRegionBounds { readonly x: number; readonly y: number; readonly width: number; readonly height: number }
export interface ImageFeaturesHandle {
  readonly id: string; readonly __autojs6ImageFeaturesHandle: string;
  readonly count: number; readonly method: "SIFT" | "ORB"; readonly scale: number; readonly region: ImageRegionBounds;
}
export type ImageResourceHandle = ImageHandleLike | MatHandle | ImageFeaturesHandle;
export interface ObjectFrame {
  readonly topLeft: ImagePoint; readonly topRight: ImagePoint; readonly bottomLeft: ImagePoint; readonly bottomRight: ImagePoint;
  readonly center: ImagePoint; readonly centerX: number; readonly centerY: number;
  readonly width: number; readonly height: number; readonly angle: number;
  readonly bounds: ImageRegionBounds; readonly matches: number; readonly inliers: number; readonly points: readonly ImagePoint[];
  summary(): string; toString(): string;
}
export interface FeatureOptions  {
  region?: ImageRegion; method?: "SIFT" | "ORB" | "sift" | "orb"; scale?: number; maxFeatures?: number;
  /** Accepted for compatibility. SIFT and ORB always detect intensity features. */
  grayscale?: boolean;
}
export interface FeatureMatchOptions extends FeatureOptions {
  matcher?: string | number; threshold?: number; ransacThreshold?: number; minInliers?: number;
  /** Output JPEG path; Bun additionally requires image.files. */
  drawMatches?: string;
}
export interface QuantizationOptions  {
  quality?: number; maxColors?: number; speed?: number; minQuality?: number; maxQuality?: number;
  ditheringLevel?: number; posterizeBits?: number; preserveAlpha?: boolean;
  maxPixels?: number; maxMemoryBytes?: number;
}
export interface QuantizationResult {
  readonly bytes: Uint8Array; readonly size: number; readonly quality: number;
  readonly quantizationError: number; readonly peakWorkingMemoryBytes: number;
}
export interface QuantizationFileResult extends Omit<QuantizationResult, "bytes"> { readonly path: string }
export interface ImageCompressionOptions  {
  format?: ImageFormat; quality?: number; quantization?: QuantizationOptions;
}
export interface AdaptiveThresholdOptions  {
  maxValue?: number; adaptiveMethod?: "MEAN_C" | "GAUSSIAN_C" | "mean_c" | "gaussian_c" | number;
  type?: "BINARY" | "BINARY_INV" | "binary" | "binary_inv" | number; blockSize?: number; C?: number;
}
export interface BilateralFilterOptions  { d?: number; sigmaColor?: number; sigmaSpace?: number; borderType?: string | number }
export interface FindCirclesOptions  {
  region?: ImageRegion; dp?: number; minDst?: number; param1?: number; param2?: number; minRadius?: number; maxRadius?: number;
}
export interface ImageCircle extends ImagePoint { readonly radius: number }
export interface ImageSimilarityOptions  { metric?: "psnr" | "pnsr" | "ssim" | "mssim" | "hist" | "mse" | "ncc"; type?: "psnr" | "pnsr" | "ssim" | "mssim" | "hist" | "mse" | "ncc" }

export interface ImagesApi {
  getSize(mat: MatHandle): { width: number; height: number };
  getWidth(mat: MatHandle): number;
  getHeight(mat: MatHandle): number;

  readonly ObjectFrame: { new(topLeft: ImagePoint, topRight: ImagePoint, bottomLeft: ImagePoint, bottomRight: ImagePoint, matches?: number, inliers?: number, points?: readonly ImagePoint[]): ObjectFrame };
  initOpenCvIfNeeded(): Promise<void>;
  /** HTTP(S) or file URL. Node requires image + network; Bun requires image.files. Invalid image data resolves to null. */
  load(url: string): Promise<ImageHandle | null>;
  loadAsync(url: string): Promise<ImageHandle | null>;
  /** Opaque native BGR Mat, released through recycle. matToImage makes an independent RGB image. */
  imread(path: string): Promise<MatHandle>;
  matToImage(mat: MatHandle): Promise<ImageHandle>;
  getScreenCaptureOptions(): Promise<{ readonly width: number; readonly height: number; readonly orientation: "auto" | "portrait" | "landscape" } | null>;
  requestScreenCaptureAsync(options?: ScreenCaptureOptions): Promise<boolean>;
  isGrayscale(image: ImageInput): Promise<boolean>;
  inRange(image: ImageInput, lower: ImageColor, upper: ImageColor): Promise<ImageHandle>;
  interval(image: ImageInput, color: ImageColor, threshold: number): Promise<ImageHandle>;
  adaptiveThreshold(image: ImageInput, options?: AdaptiveThresholdOptions): Promise<ImageHandle>;
  adaptiveThreshold(image: ImageInput, maxValue: number, adaptiveMethod: string | number, type: string | number, blockSize: number, C: number): Promise<ImageHandle>;
  bilateralFilter(image: ImageInput, options?: BilateralFilterOptions): Promise<ImageHandle>;
  bilateralFilter(image: ImageInput, d?: number, sigmaColor?: number, sigmaSpace?: number, borderType?: string | number): Promise<ImageHandle>;
  cvtColor(image: ImageInput, code: string | number, dstCn?: number): Promise<ImageHandle>;
  findCircles(image: ImageInput, options?: FindCirclesOptions): Promise<readonly ImageCircle[]>;
  concat(image: ImageInput, other: ImageInput, direction?: "left" | "right" | "start" | "end" | "top" | "bottom"): Promise<ImageHandle>;
  detectMultiColors(image: ImageInput, color: ImageColor, points: readonly ImageMultiColorPoint[], x: number, y: number, options?: ImageDetectOptions): Promise<boolean>;
  detectsMultiColors(image: ImageInput, color: ImageColor, points: readonly ImageMultiColorPoint[], x: number, y: number, options?: ImageDetectOptions): Promise<boolean>;
  findPointsByColors(image: ImageInput, color: ImageColor, points: readonly ImageMultiColorPoint[], options?: ImageColorOptions): Promise<readonly ImagePoint[]>;
  findPointByColorExactly(image: ImageInput, color: ImageColor, options?: Omit<ImageColorOptions, "threshold">): Promise<ImagePoint | null>;
  findColorInRegion(image: ImageInput, color: ImageColor, x?: number, y?: number, width?: number, height?: number, threshold?: number): Promise<ImagePoint | null>;
  findPointByImage(image: ImageHandleLike, template: ImageHandleLike, options?: ImageMatchOptions): Promise<ImagePoint | null>;
  findImageInRegion(image: ImageInput, template: ImageInput, x?: number, y?: number, width?: number, height?: number, threshold?: number): Promise<ImagePoint | null>;
  countPointsByColor(image: ImageInput, color: ImageColor, options?: ImageColorOptions): Promise<number>;
  getMeanColor(image: ImageInput, options?: ImagePixelOptions): Promise<number>;
  detectAndComputeFeatures(image: ImageInput, options?: FeatureOptions): Promise<ImageFeaturesHandle>;
  matchFeatures(scene: ImageInput | ImageFeaturesHandle, object: ImageInput | ImageFeaturesHandle, options?: FeatureMatchOptions): Promise<ObjectFrame | null>;
  quantize(image: ImageInput, options?: QuantizationOptions): Promise<QuantizationResult>;
  quantizeToFile(image: ImageInput, path: string, options?: QuantizationOptions): Promise<QuantizationFileResult>;
  compress(image: ImageInput, options?: ImageCompressionOptions): Promise<ImageHandle>;
  compress(image: ImageInput, format: ImageFormat, quality?: number | QuantizationOptions): Promise<ImageHandle>;
  compressToBytes(image: ImageInput, options?: ImageCompressionOptions): Promise<Uint8Array>;
  compressToBytes(image: ImageInput, format: ImageFormat, quality?: number | QuantizationOptions): Promise<Uint8Array>;
  downsample(source: ImageInput | ArrayBuffer | ArrayBufferView | readonly number[], width: number, height: number, withAlpha?: boolean): Promise<ImageHandle>;
  buildRegion(image: ImageHandleLike | MatHandle, region?: readonly (number | null | undefined)[] | ImageRegionBounds): ImageRegionBounds;
  __buildRegion(region?: readonly (number | null | undefined)[] | ImageRegionBounds | null, width?: number, height?: number): ImageRegionBounds | null;
  psnr(a: ImageInput, b: ImageInput): Promise<number>;
  ssim(a: ImageInput, b: ImageInput): Promise<number>;
  mssim(a: ImageInput, b: ImageInput): Promise<number>;
  hist(a: ImageInput, b: ImageInput): Promise<number>;
  mse(a: ImageInput, b: ImageInput): Promise<number>;
  ncc(a: ImageInput, b: ImageInput): Promise<number>;
  isEqual(a: ImageInput, b: ImageInput): Promise<boolean>;
  getSimilarity(a: ImageInput, b: ImageInput, options?: ImageSimilarityOptions): Promise<number>;
  isRecycled(...images: (ImageResourceHandle | readonly ImageResourceHandle[])[]): boolean;
  recycle(...images: (ImageResourceHandle | readonly ImageResourceHandle[])[]): Promise<void>;
  read(path: string): Promise<ImageHandle>;
  save(image: ImageHandleLike, path: string, formatOrOptions?: ImageFormat | ImageEncodingOptions, quality?: number): Promise<boolean>;
  getWidth(image: ImageHandle): number;
  getHeight(image: ImageHandle): number;
  findPointByColor(image: ImageHandleLike, color: ImageColor, options?: ImageColorOptions): Promise<ImagePoint | null>;
  findPointByColors(image: ImageHandleLike, color: ImageColor, points: readonly ImageMultiColorPoint[], options?: ImageColorOptions): Promise<ImagePoint | null>;
  findColorEquals(image: ImageInput, color: ImageColor, options?: Omit<ImageColorOptions, "threshold">): Promise<ImagePoint | null>;

  /** Requires the opt-in screen.capture grant and Android consent. Denial rejects the Promise. */
  requestScreenCapture(options?: ScreenCaptureOptions): Promise<boolean>;
  /** Captures the authorized display into an execution-owned image handle. */
  captureScreen(): Promise<ImageHandle>;
  /** Stops capture or cancels pending consent. False means no request/session was owned. */
  stopScreenCapture(): Promise<boolean>;
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
  readonly screenRecorder: ScreenRecorderApi;
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
