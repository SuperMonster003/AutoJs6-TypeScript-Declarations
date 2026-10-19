/** Types for the explicit SDK module at process.env.AUTOJS6_HOST_CLIENT_MODULE. */
export declare const SDK_VERSION: 1;
export type HostCapability = "android.objects" | "tasks.control" | "device.control" | "device.power" | "device.audio" | "dialogs.control" | "events.observe" | "events.notification" | "events.toast" | "events.key" | "notifications.post" | "notifications.settings" | "database.control" | "shell.control" | "shell.root" | "shell.shizuku" | "sensors.control" | "files.control" | "storage.control" | "app.control" | "accessibility.control" | "accessibility.gesture" | "clipboard.control" | "ui.layout" | "ui.compose" | "screen.record.microphone" | "screen.record.playback" | "ui.toast" | "device.info" | "text.pinyin" | "text.pinyin4j" | "text.opencc" | "image.process" | "image.files" | "screen.capture" | "screen.record" | "screen.metrics" | "console.control";
export type JsonValue = null | boolean | number | string | readonly JsonValue[] | { readonly [key: string]: JsonValue };
export declare class HostCallError extends Error {
  readonly code: string;
  readonly capability: string | null;
  readonly status: number;
  constructor(code: string, message: string, capability?: string | null, status?: number);
}
export declare const HOST_API_METHODS: Readonly<Record<"android.objects" | "tasks.control" | "device.control" | "device.audio" | "dialogs.control" | "events.observe" | "notifications.post" | "database.control" | "shell.control" | "sensors.control" | "files.control" | "storage.control" | "app.control" | "accessibility.control" | "clipboard.control" | "text.pinyin" | "text.pinyin4j" | "text.opencc" | "image.process" | "image.files" | "screen.capture" | "screen.record" | "screen.metrics" | "console.control", readonly string[]>>;
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
// BEGIN GENERATED AUTOMATION TYPES
export interface AutomationCallOptions { readonly timeoutMs?: number; readonly signal?: AbortSignal }
export interface AutomationBounds { readonly left: number; readonly top: number; readonly right: number; readonly bottom: number }
export namespace RuntimeApp {
    export type IntentExtraValue =
      | null | boolean | number | string
      | readonly string[]
      | readonly number[]
      | readonly boolean[];

    export interface IntentExtras {
      readonly [key: string]: IntentExtraValue;
    }

    export interface IntentRequest {
      action?: string;
      data?: string;
      url?: string;
      type?: string;
      packageName?: string;
      package?: string;
      className?: string;
      component?: string;
      category?: string | readonly string[];
      categories?: string | readonly string[];
      flags?: number | readonly number[];
      extras?: IntentExtras;
      readonly root?: never;
      readonly shizuku?: never;
      readonly dual?: never;
    }

    export interface IntentDescriptor {
      readonly action?: string;
      readonly data?: string;
      readonly type?: string;
      readonly packageName?: string;
      readonly className?: string;
      readonly component?: string;
      readonly categories?: readonly string[];
      readonly flags?: number;
      readonly extras?: IntentExtras;
    }

    export interface UriDescriptor {
      readonly schema: "autojs6-node-app-uri-descriptor-v1";
      readonly value: string;
      readonly scheme?: string;
      readonly authority?: string;
      readonly userInfo?: string;
      readonly host?: string;
      readonly port?: number;
      readonly path?: string;
      readonly query?: string;
      readonly fragment?: string;
    }

    export type StartActivityRequest = IntentRequest | string;

    export type EmailAddressList = string | readonly string[];

    export interface PackageInfo {
      readonly packageName: string;
      readonly appName: string;
      readonly versionName: string;
      readonly versionCode: number;
      readonly system: boolean;
      readonly enabled: boolean;
      readonly firstInstallTime: number;
      readonly lastUpdateTime: number;
    }

    export interface SendEmailRequest {
      readonly to?: EmailAddressList;
      readonly email?: EmailAddressList;
      readonly address?: EmailAddressList;
      readonly cc?: EmailAddressList;
      readonly bcc?: EmailAddressList;
      readonly subject?: string;
      readonly text?: string;
      readonly body?: string;
    }

    export interface AppModule {
      readonly packageName: string;
      readonly versionName: string;
      readonly versionCode: number;
      intent(request: IntentRequest): IntentDescriptor;
      parseUri(uri: string | null | undefined): UriDescriptor | null;
      getUriForFile(path: string, options?: AutomationCallOptions): Promise<RuntimeAndroid.UriSnapshot>;
      intentToShell(request: IntentRequest | IntentDescriptor): string;
      openUrl(url: string, options?: AutomationCallOptions): Promise<void>;
      openDualUrl(url: string, options?: AutomationCallOptions): Promise<never>;
      sendEmail(request: SendEmailRequest | EmailAddressList, options?: AutomationCallOptions & Partial<SendEmailRequest>): Promise<void>;
      uninstall(packageName: string, options?: AutomationCallOptions): Promise<void>;
      uninstallDual(packageName: string, options?: AutomationCallOptions): Promise<never>;
      getPackageName(appName: string, options?: AutomationCallOptions): Promise<string | null>;
      getAppName(packageName: string, options?: AutomationCallOptions): Promise<string | null>;
      isInstalled(packageName: string, options?: AutomationCallOptions): Promise<boolean>;
      isDualInstalled(packageName: string, options?: AutomationCallOptions): Promise<never>;
      viewFile(path: string, options?: AutomationCallOptions): Promise<boolean>;
      editFile(path: string, options?: AutomationCallOptions): Promise<boolean>;
      launch(packageName: string, options?: AutomationCallOptions): Promise<boolean>;
      launchDual(packageName: string, options?: AutomationCallOptions): Promise<never>;
      launchPackage(packageName: string, options?: AutomationCallOptions): Promise<boolean>;
      launchDualPackage(packageName: string, options?: AutomationCallOptions): Promise<never>;
      launchApp(appName: string, options?: AutomationCallOptions): Promise<boolean>;
      launchDualApp(appName: string, options?: AutomationCallOptions): Promise<never>;
      openAppSetting(options?: AutomationCallOptions): Promise<void>;
      openAppSetting(packageName?: string, options?: AutomationCallOptions): Promise<void>;
      openAppSettings(options?: AutomationCallOptions): Promise<void>;
      openAppSettings(packageName?: string, options?: AutomationCallOptions): Promise<void>;
      openDualAppSetting(options?: AutomationCallOptions): Promise<never>;
      openDualAppSetting(packageName?: string, options?: AutomationCallOptions): Promise<never>;
      openDualAppSettings(options?: AutomationCallOptions): Promise<never>;
      openDualAppSettings(packageName?: string, options?: AutomationCallOptions): Promise<never>;
      launchSettings(options?: AutomationCallOptions): Promise<void>;
      launchSettings(packageName?: string, options?: AutomationCallOptions): Promise<void>;
      launchDualSettings(options?: AutomationCallOptions): Promise<never>;
      launchDualSettings(packageName?: string, options?: AutomationCallOptions): Promise<never>;
      launchAppDetailsSettings(options?: AutomationCallOptions): Promise<void>;
      launchAppDetailsSettings(packageName?: string, options?: AutomationCallOptions): Promise<void>;
      launchDualAppDetailsSettings(options?: AutomationCallOptions): Promise<never>;
      launchDualAppDetailsSettings(packageName?: string, options?: AutomationCallOptions): Promise<never>;
      startActivity(request: IntentRequest, options?: AutomationCallOptions): Promise<void>;
      startActivity(url: string, options?: AutomationCallOptions): Promise<void>;
      startDualActivity(request: IntentRequest | string, options?: AutomationCallOptions): Promise<never>;
      /** Sends through Android as the host app; a string is an action name. */
      sendBroadcast(request: IntentRequest | string, options?: AutomationCallOptions): Promise<void>;
      /** Starts a regular Android service, subject to Android background-start restrictions. */
      startService(request: IntentRequest, options?: AutomationCallOptions): Promise<string | null>;
      /** Returns packages visible to Android's package manager. */
      getInstalledApps(filter?: { readonly includeSystem?: boolean }, options?: AutomationCallOptions): Promise<readonly PackageInfo[]>;
      getPackageInfo(packageName: string, options?: AutomationCallOptions): Promise<PackageInfo | null>;
      kill(packageName: string, options?: AutomationCallOptions): Promise<never>;
      killDual(packageName: string, options?: AutomationCallOptions): Promise<never>;
    }
  }
export namespace RuntimeAccessibility {
    export type SelectorField =
      | "text"
      | "desc"
      | "id"
      | "className"
      | "textContains"
      | "descContains"
      | "textMatches"
      | "descMatches"
      | "idMatches"
      | "classNameMatches"
      | "clickable"
      | "enabled"
      | "scrollable"
      | "depth"
      | "boundsInside"
      | "boundsContains";

    export type SelectorPatternInput = string | RegExp | SelectorPattern;

    export interface SelectorPattern {
      readonly pattern: string;
      readonly flags?: string;
    }

    export interface SelectorDescriptor {
      readonly type: "autojs6.accessibility.selector";
      readonly version: 1;
      readonly text?: string;
      readonly desc?: string;
      readonly id?: string;
      readonly className?: string;
      readonly textContains?: string;
      readonly descContains?: string;
      readonly textMatches?: SelectorPattern;
      readonly descMatches?: SelectorPattern;
      readonly idMatches?: SelectorPattern;
      readonly classNameMatches?: SelectorPattern;
      readonly clickable?: boolean;
      readonly enabled?: boolean;
      readonly scrollable?: boolean;
      readonly depth?: number;
      readonly boundsInside?: AutomationBounds;
      readonly boundsContains?: AutomationBounds;
    }

    export interface UiNodeSnapshot {
      readonly text?: string;
      readonly desc?: string;
      readonly id?: string;
      readonly className?: string;
      readonly bounds: AutomationBounds;
      readonly clickable?: boolean;
      readonly enabled?: boolean;
    }

    export interface EnsureEnabledOptions extends AutomationCallOptions {
      prompt?: boolean;
    }

    export interface AccessibilityModule {
      isEnabled(options?: AutomationCallOptions): Promise<boolean>;
      ensureEnabled(options?: EnsureEnabledOptions): Promise<boolean>;
      click(x: number, y: number, options?: AutomationCallOptions): Promise<boolean>;
      click(selector: SelectorDescriptor, options?: AutomationCallOptions): Promise<boolean>;
      swipe(x1: number, y1: number, x2: number, y2: number, durationMs?: number, options?: AutomationCallOptions): Promise<boolean>;
      gesture(durationMs: number, points: readonly (readonly [number, number])[], options?: AutomationCallOptions): Promise<boolean>;
      back(options?: AutomationCallOptions): Promise<boolean>;
      home(options?: AutomationCallOptions): Promise<boolean>;
      recentApps(options?: AutomationCallOptions): Promise<boolean>;
      findByText(text: string, options?: AutomationCallOptions): Promise<UiNodeSnapshot | null>;
      clickText(text: string, options?: AutomationCallOptions): Promise<boolean>;
      findOne(selector: SelectorDescriptor, options?: AutomationCallOptions): Promise<UiNodeSnapshot | null>;
      findAll(selector: SelectorDescriptor, options?: AutomationCallOptions): Promise<readonly UiNodeSnapshot[]>;
      longClick(selector: SelectorDescriptor, options?: AutomationCallOptions): Promise<boolean>;
      setText(selector: SelectorDescriptor, text: string, options?: AutomationCallOptions): Promise<boolean>;
      scrollForward(selector: SelectorDescriptor, options?: AutomationCallOptions): Promise<boolean>;
      scrollBackward(selector: SelectorDescriptor, options?: AutomationCallOptions): Promise<boolean>;
      text(value: string): SelectorDescriptor;
      desc(value: string): SelectorDescriptor;
      id(value: string): SelectorDescriptor;
      className(value: string): SelectorDescriptor;
      textContains(value: string): SelectorDescriptor;
      descContains(value: string): SelectorDescriptor;
      textMatches(value: SelectorPatternInput): SelectorDescriptor;
      descMatches(value: SelectorPatternInput): SelectorDescriptor;
      idMatches(value: SelectorPatternInput): SelectorDescriptor;
      classNameMatches(value: SelectorPatternInput): SelectorDescriptor;
      clickable(value?: boolean): SelectorDescriptor;
      enabled(value?: boolean): SelectorDescriptor;
      scrollable(value?: boolean): SelectorDescriptor;
      depth(value: number): SelectorDescriptor;
      boundsInside(bounds: AutomationBounds): SelectorDescriptor;
      boundsInside(left: number, top: number, right: number, bottom: number): SelectorDescriptor;
      boundsContains(bounds: AutomationBounds): SelectorDescriptor;
      boundsContains(left: number, top: number, right: number, bottom: number): SelectorDescriptor;
    }
  }
export namespace RuntimeClipboard {
    export interface ClipboardModule {
      getText(options?: AutomationCallOptions): Promise<string>;
      setText(text: string, options?: AutomationCallOptions): Promise<void>;
      hasText(options?: AutomationCallOptions): Promise<boolean>;
    }
  }
// END GENERATED AUTOMATION TYPES

// BEGIN GENERATED STORAGE TYPES
export type StorageJsonValue = null | boolean | number | string | StorageJsonValue[] | { [key: string]: StorageJsonValue };
export namespace RuntimeStorage {
    export type StorageValue = StorageJsonValue;

    export interface StorageStore {
      readonly name: string;
      get<T extends StorageValue = StorageValue>(key: string, defaultValue: T, options?: AutomationCallOptions): Promise<StorageValue | T>;
      get<T extends StorageValue = StorageValue>(key: string, defaultValue?: T, options?: AutomationCallOptions): Promise<StorageValue | T | undefined>;
      put(key: string, value: StorageValue, options?: AutomationCallOptions): Promise<void>;
      putSync(key: string, value: StorageValue, options?: AutomationCallOptions): Promise<void>;
      remove(key: string, options?: AutomationCallOptions): Promise<void>;
      removeSync(key: string, options?: AutomationCallOptions): Promise<void>;
      clear(options?: AutomationCallOptions): Promise<void>;
      clearSync(options?: AutomationCallOptions): Promise<void>;
      keys(options?: AutomationCallOptions): Promise<readonly string[]>;
      contains(key: string, options?: AutomationCallOptions): Promise<boolean>;
      selfRemove(options?: AutomationCallOptions): Promise<void>;
      selfRemoveSync(options?: AutomationCallOptions): Promise<void>;
    }

    export interface StorageModule {
      create(name: string): StorageStore;
      open(name: string): StorageStore;
      remove(name: string, options?: AutomationCallOptions): Promise<void>;
      removeSync(name: string, options?: AutomationCallOptions): Promise<void>;
      names(): never;
      all(): never;
    }
  }
// END GENERATED STORAGE TYPES

// BEGIN GENERATED FILE TYPES
export namespace RuntimeFiles {
    export type TextEncoding = string;
    export type ListDirFilter = (name: string) => boolean | null | undefined;

    export interface FilesModule {
      path(path?: string | null): Promise<string | null>;
      join(parent: string, ...children: string[]): string;
      read(path?: string | null, encoding?: TextEncoding | null): Promise<string>;
      write(path: string, text: unknown, encoding?: TextEncoding | null): Promise<void>;
      append(path: string, text: unknown, encoding?: TextEncoding | null): Promise<void>;
      exists(path?: string | null): Promise<boolean>;
      listDir(path?: string | null, filter?: ListDirFilter | null): Promise<string[]>;
      remove(path?: string | null): Promise<boolean>;
      copy(pathFrom: string, pathTo: string): Promise<boolean>;
      move(path: string, newPath: string): Promise<boolean>;
      ensureDir(path: string): Promise<boolean>;
      isFile(path?: string | null): Promise<boolean>;
      isDir(path?: string | null): Promise<boolean>;
      getName(filePath: string): string;
      getExtension(fileName: string): string;
      open(path?: string | null, mode?: string | null, encoding?: TextEncoding | null, bufferSize?: number | null): never;
      toFile(path: string): never;
    }
  }
// END GENERATED FILE TYPES

// BEGIN GENERATED DATABASE TYPES
export namespace RuntimeDatabase {
    export type SqlParam = string | number | boolean | null;

    export interface OpenOptions extends AutomationCallOptions {
      readonly name: string;
    }

    export interface RunResult {
      readonly rowsAffected: number | null;
      readonly insertId: number | null;
    }

    export type Row = Readonly<Record<string, JsonValue>>;

    export interface TransactionOperation {
      readonly type: "exec" | "run" | "get" | "all";
      readonly sql: string;
      readonly params?: readonly SqlParam[];
    }

    export type TransactionResult = undefined | RunResult | Row | readonly Row[] | null;

    export interface DatabaseHandle {
      readonly id: string;
      readonly name: string;
      exec(sql: string, params?: readonly SqlParam[], options?: AutomationCallOptions): Promise<void>;
      run(sql: string, params?: readonly SqlParam[], options?: AutomationCallOptions): Promise<RunResult>;
      get(sql: string, params?: readonly SqlParam[], options?: AutomationCallOptions): Promise<Row | null>;
      all(sql: string, params?: readonly SqlParam[], options?: AutomationCallOptions): Promise<readonly Row[]>;
      transaction(operations: readonly TransactionOperation[], options?: AutomationCallOptions): Promise<readonly TransactionResult[]>;
      close(options?: AutomationCallOptions): Promise<boolean>;
    }

    export interface DatabaseModule {
      open(name: string, options?: AutomationCallOptions): Promise<DatabaseHandle>;
      open(options: OpenOptions): Promise<DatabaseHandle>;
    }
  }
export namespace RuntimeSqlite {
    export interface SQLiteModule {
      (name: string, options?: AutomationCallOptions): Promise<RuntimeDatabase.DatabaseHandle>;
      (options: RuntimeDatabase.OpenOptions): Promise<RuntimeDatabase.DatabaseHandle>;
      open(name: string, options?: AutomationCallOptions): Promise<RuntimeDatabase.DatabaseHandle>;
      open(options: RuntimeDatabase.OpenOptions): Promise<RuntimeDatabase.DatabaseHandle>;
    }
  }
// END GENERATED DATABASE TYPES

// BEGIN GENERATED SENSORS TYPES
export namespace RuntimeSensors {
    export type SensorType = "accelerometer" | "gyroscope" | "light";

    export interface SensorInfo {
      readonly type: SensorType;
      readonly name: string;
      readonly vendor?: string;
      readonly version?: number;
      readonly resolution?: number;
      readonly power?: number;
      readonly minDelayUs?: number;
      readonly maxDelayUs?: number;
    }

    export interface SensorEvent {
      readonly type: SensorType;
      readonly timestamp: number;
      readonly accuracy: number;
      readonly values: readonly number[];
    }

    export interface SensorOptions extends AutomationCallOptions {
      samplingIntervalMs?: number;
      intervalMs?: number;
      maxQueueSize?: number;
      drainIntervalMs?: number;
    }

    export interface SensorSubscription {
      /** Present when the host negotiated pushed events. */
      readonly subscriptionId?: string;
      on(event: "event", listener: (event: SensorEvent) => void): this;
      once(event: "event", listener: (event: SensorEvent) => void): this;
      off(event: "event", listener: (event: SensorEvent) => void): this;
      on(event: "close" | "accuracy" | "error", listener: (event: unknown) => void): this;
      once(event: "close" | "accuracy" | "error", listener: (event: unknown) => void): this;
      off(event: "close" | "accuracy" | "error", listener: (event: unknown) => void): this;
      readonly id: string;
      readonly type: SensorType;
      readonly closed: boolean;
      /** Resolves after native registration. AbortSignal remains active until close. */
      readonly ready: Promise<void>;
      close(options?: AutomationCallOptions): Promise<void>;
    }

    export interface SensorsModule {
      readonly policy: {
        readonly maxSubscriptions: number;
        readonly minSamplingIntervalMs: number;
        readonly defaultSamplingIntervalMs: number;
        readonly maxSamplingIntervalMs: number;
        readonly defaultTimeoutMs: number;
        readonly drainIntervalMs: number;
        readonly defaultMaxQueueSize: number;
        readonly hardMaxQueueSize: number;
      };

      getAvailableSensors(options?: AutomationCallOptions): Promise<readonly SensorInfo[]>;
      /** Uses a temporary subscription; releases it on sample, timeout or abort. */
      once(type: SensorType, options?: SensorOptions): Promise<SensorEvent>;
      subscribe(type: SensorType, callback?: (event: SensorEvent) => void, options?: SensorOptions): SensorSubscription;
    }
  }
// END GENERATED SENSORS TYPES

// BEGIN GENERATED SHELL TYPES
export namespace RuntimeShell {
    interface ShellExecOptions extends AutomationCallOptions {
      root?: boolean;
      shizuku?: boolean;
      /** Alias of shizuku. */
      adb?: boolean;
      pty?: boolean;
      /** Host-app path; relative paths use the host script working directory. */
      cwd?: string;
      env?: Readonly<Record<string, string>>;
      /** Client-side capture bound for exec; further bytes are drained and marked truncated. */
      maxOutputBytes?: number;
    }
    interface ShellSpawnOptions extends ShellExecOptions {
      /** Process lifetime; 0 or omitted means until exit, explicit close or execution shutdown. */
      timeoutMs?: number;
      drainIntervalMs?: number;
    }
    interface ShellOpenOptions extends ShellSpawnOptions { cmd?: string; }
    interface ShellAccessOptions { root?: boolean; shizuku?: boolean; adb?: boolean; }
    interface ShellAccessReport {
      readonly shell: boolean; readonly root: boolean; readonly shizuku: boolean;
      readonly missingCapabilities: readonly string[];
    }
    interface ShellAccessState {
      readonly shell: boolean; readonly rootAvailable: boolean;
      readonly shizukuRunning: boolean; readonly shizukuGranted: boolean; readonly shizuku: boolean;
      readonly uid: number; readonly missingCapabilities: readonly string[];
    }
    interface ShellResult {
      readonly code: number; readonly stdout: string; readonly stderr: string;
      readonly timedOut: boolean; readonly truncated: boolean;
    }
    interface OutputChunk extends Uint8Array { toString(encoding?: string, start?: number, end?: number): string; }
    /** Real node:stream objects; this portable declaration covers their common streaming operations. */
    interface OutputStream<T = OutputChunk> extends AsyncIterable<T> {
      on(event: 'data', listener: (data: T) => void): this;
      on(event: 'end' | 'close' | 'readable', listener: () => void): this;
      on(event: 'error', listener: (error: Error) => void): this;
      once(event: 'data', listener: (data: T) => void): this;
      once(event: 'end' | 'close' | 'readable', listener: () => void): this;
      once(event: 'error', listener: (error: Error) => void): this;
      setEncoding(encoding: string): OutputStream<string>;
      read(size?: number): T | null;
      pause(): this; resume(): this;
      pipe<U extends InputStream>(destination: U): U;
      destroy(error?: Error): this;
      readonly readableEnded: boolean; readonly readableLength: number; readonly readableHighWaterMark: number;
    }
    interface InputStream {
      write(data: string | Uint8Array, callback?: (error?: Error | null) => void): boolean;
      end(callback?: (error?: Error | null) => void): this;
      end(data: string | Uint8Array, callback?: (error?: Error | null) => void): this;
      on(event: 'drain' | 'finish' | 'close', listener: () => void): this;
      on(event: 'error', listener: (error: Error) => void): this;
      destroy(error?: Error): this;
      readonly writableFinished: boolean;
    }
    interface ShellProcess {
      readonly id: string; readonly pid: number; readonly command: string;
      readonly mode: 'sh' | 'root' | 'adb' | 'adb+root';
      readonly closed: boolean; readonly killed: boolean; readonly exitCode: number | null;
      readonly timedOut: boolean;
      readonly ready: Promise<void>; readonly exited: Promise<number>;
      readonly stdin: InputStream; readonly stdout: OutputStream; readonly stderr: OutputStream;
      readLine(): Promise<string | null>; readErrorLine(): Promise<string | null>;
      write(data: string | Uint8Array): Promise<ShellProcess>;
      writeLine(text: string): Promise<ShellProcess>; closeInput(): Promise<ShellProcess>;
      waitFor(): Promise<number>; waitFor(timeoutMs: number): Promise<number | null>;
      /** Terminates the process tree; consume output to receive remaining data and exit. */
      kill(): Promise<boolean>;
      /** Releases the process and discards undrained host output; safe to repeat. */
      close(): Promise<boolean>;
      on(event: 'output' | 'errorOutput', listener: (line: string) => void): this;
      on(event: 'exit' | 'close', listener: (code: number | null) => void): this;
      on(event: 'error', listener: (error: Error) => void): this;
      once(event: 'output' | 'errorOutput', listener: (line: string) => void): this;
      once(event: 'exit' | 'close', listener: (code: number | null) => void): this;
      once(event: 'error', listener: (error: Error) => void): this;
      off(event: string, listener: (...args: any[]) => void): this;
      removeAllListeners(event?: string): this;
    }
    interface ShellModule {
      exec(command: string, options?: ShellExecOptions): Promise<ShellResult>;
      execRoot(command: string, options?: ShellExecOptions): Promise<ShellResult>;
      execShizuku(command: string, options?: ShellExecOptions): Promise<ShellResult>;
      execFile(path: string, args?: readonly string[], options?: ShellExecOptions): Promise<ShellResult>;
      /** Synchronous project grant report; use getAccess for Android service/permission state. */
      checkAccess(options?: ShellAccessOptions): ShellAccessReport;
      getAccess(options?: AutomationCallOptions): Promise<ShellAccessState>;
      requestShizukuPermission(options?: AutomationCallOptions): Promise<boolean>;
      setDefaultTimeout(ms: number): number;
      spawn(command: string, options?: ShellSpawnOptions): ShellProcess;
      open(options?: ShellOpenOptions): ShellProcess;
    }
    interface ShizukuModule {
      (command: string, options?: ShellExecOptions): Promise<ShellResult>;
      exec(command: string, options?: ShellExecOptions): Promise<ShellResult>;
      spawn(command: string, options?: ShellSpawnOptions): ShellProcess;
      open(options?: ShellOpenOptions): ShellProcess;
      checkAccess(options?: ShellAccessOptions): ShellAccessReport;
      getAccess(options?: AutomationCallOptions): Promise<ShellAccessState>;
      requestPermission(options?: AutomationCallOptions): Promise<boolean>;
    }
  }
// END GENERATED SHELL TYPES

// BEGIN GENERATED EVENT TYPES
export namespace RuntimeEvents {
    export interface EventBase { readonly type: string; readonly time: number; readonly source: string; }
    export interface NotificationEvent extends EventBase {
      readonly type: "notification";
      readonly id: number;
      readonly key: string;
      readonly packageName: string;
      readonly tag: string | null;
      readonly title: string;
      readonly text: string;
      readonly postTime: number;
    }
    export interface ToastEvent extends EventBase {
      readonly type: "toast";
      readonly packageName: string;
      readonly text: string;
    }
    export interface KeyEvent extends EventBase {
      readonly type: "key";
      readonly key: string;
      readonly keyCode: number;
      readonly action: "up" | "down";
      readonly repeatCount: number;
      readonly eventTime: number;
    }
    export interface BatteryEvent extends EventBase {
      readonly type: "battery_changed";
      readonly level: number;
      readonly scale: number;
      readonly percent: number;
      readonly isCharging: boolean;
    }
    export interface ObserveOptions extends AutomationCallOptions {
      /** Polling interval for Bun/Workers, default 100 ms, in 25..60000. */
      drainIntervalMs?: number;
    }
    export interface OverflowEvent extends EventBase { readonly type: "overflow"; readonly dropped: number; }
    export interface CloseEvent extends EventBase { readonly type: "close"; readonly reason: string; }
    export type Event = NotificationEvent | ToastEvent | KeyEvent | BatteryEvent | OverflowEvent | CloseEvent | EventBase;
    export interface EventMap {
      notification: NotificationEvent;
      toast: ToastEvent;
      key: KeyEvent;
      battery_changed: BatteryEvent;
      screen_on: EventBase;
      screen_off: EventBase;
      close: CloseEvent;
      overflow: OverflowEvent;
      error: Error;
      event: Event;
    }
    export interface Listeners {
      on<K extends keyof EventMap>(event: K, listener: (event: EventMap[K]) => void): this;
      once<K extends keyof EventMap>(event: K, listener: (event: EventMap[K]) => void): this;
      off<K extends keyof EventMap>(event: K, listener: (event: EventMap[K]) => void): this;
    }
    export interface Subscription extends Listeners {
      readonly id: string;
      readonly source: "notification" | "toast" | "key" | "broadcast";
      readonly closed: boolean;
      drainEvents(options?: AutomationCallOptions): Promise<readonly Event[]>;
      close(options?: AutomationCallOptions): Promise<boolean>;
    }
    export interface EventsModule extends Listeners {
      /** Requires events + events.notification and Android notification-listener access. */
      observeNotification(options?: ObserveOptions): Promise<Subscription>;
      /** Requires events + events.toast and accessibility. Observes external apps' Toast messages. */
      observeToast(options?: ObserveOptions): Promise<Subscription>;
      /** Requires events + events.key and accessibility. Never intercepts hardware keys. */
      observeKey(options?: ObserveOptions): Promise<Subscription>;
      /** Requires events. on/once for screen or battery also starts this subscription. */
      observeBroadcasts(options?: ObserveOptions): Promise<Subscription>;
      /** Closes this client's sources and removes module listeners. Script termination also releases sources. */
      close(options?: AutomationCallOptions): Promise<void>;
    }
  }
export namespace RuntimeNotifications {
    export type NotificationId = number;
    export type NotificationPriority = "min" | "low" | "default" | "high" | "max" | -2 | -1 | 0 | 1 | 2;

    export interface NotifyOptions {
      id?: NotificationId;
      title?: string;
      text?: string;
      channel?: string;
      channelName?: string;
      ongoing?: boolean;
      priority?: NotificationPriority;
    }

    export interface NotificationSettingsOptions extends AutomationCallOptions {
      dryRun?: boolean;
    }

    export interface NotificationPermissionStatus {
      readonly schema: "autojs6-node-notification-permission-status-v1";
      readonly sdkInt: number;
      readonly notificationsEnabled: boolean;
      readonly postNotificationsPermissionRequired: boolean;
      readonly postNotificationsPermissionGranted: boolean;
      readonly canOpenSettings: boolean;
    }

    export interface NotificationSettingsResult extends NotificationPermissionStatus {
      readonly opened: boolean;
      readonly dryRun: boolean;
      readonly action: string;
      readonly reason: string;
    }

    export interface NotificationsModule {
      notify(options: NotifyOptions, callOptions?: AutomationCallOptions): Promise<NotificationId>;
      cancel(id: NotificationId, options?: AutomationCallOptions): Promise<void>;
      cancelAll(options?: AutomationCallOptions): Promise<void>;
      getPermissionStatus(options?: AutomationCallOptions): Promise<NotificationPermissionStatus>;
      openSettings(options?: NotificationSettingsOptions): Promise<NotificationSettingsResult>;
      openNotificationSettings(options?: NotificationSettingsOptions): Promise<NotificationSettingsResult>;
    }
  }
// END GENERATED EVENT TYPES

// BEGIN GENERATED DEVICE DIALOG TYPES
export namespace RuntimeDevice {
    export interface DeviceModule {
      readonly sdkInt: number;
      readonly width: number;
      readonly height: number;
      readonly density: number;
      readonly densityDpi: number;
      readonly release: string;
      readonly model: string;
      readonly brand: string;
      readonly product: string;
      readonly board: string;
      readonly bootloader: string;
      readonly hardware: string;
      readonly fingerprint: string;
      readonly buildId: string;
      /** Live host snapshot. Synchronous properties above describe script startup. */
      info(options?: AutomationCallOptions): Promise<DeviceInfo>;
      /** Full live snapshot, also available in Bun without changing its legacy info() format. */
      getInfo(options?: AutomationCallOptions): Promise<DeviceInfo>;
      getWidth(options?: AutomationCallOptions): Promise<number>;
      getHeight(options?: AutomationCallOptions): Promise<number>;
      getDensity(options?: AutomationCallOptions): Promise<number>;
      getDensityDpi(options?: AutomationCallOptions): Promise<number>;
      getBrightness(options?: AutomationCallOptions): Promise<number>;
      getBrightnessMode(options?: AutomationCallOptions): Promise<number>;
      getBattery(options?: AutomationCallOptions): Promise<number>;
      isCharging(options?: AutomationCallOptions): Promise<boolean>;
      getSdkInt(options?: AutomationCallOptions): Promise<number>;
      getRelease(options?: AutomationCallOptions): Promise<string>;
      getModel(options?: AutomationCallOptions): Promise<string>;
      getBrand(options?: AutomationCallOptions): Promise<string>;
      getProduct(options?: AutomationCallOptions): Promise<string>;
      getBoard(options?: AutomationCallOptions): Promise<string>;
      getBootloader(options?: AutomationCallOptions): Promise<string>;
      getHardware(options?: AutomationCallOptions): Promise<string>;
      getFingerprint(options?: AutomationCallOptions): Promise<string>;
      getBuildId(options?: AutomationCallOptions): Promise<string>;
      getTotalMem(options?: AutomationCallOptions): Promise<number>;
      getAvailMem(options?: AutomationCallOptions): Promise<number>;
      /** Requires device.power and Android's modify-system-settings permission; value 0..255. */
      setBrightness(value: number, options?: AutomationCallOptions): Promise<void>;
      setBrightnessMode(mode: 0 | 1, options?: AutomationCallOptions): Promise<void>;
      /** Requires device.power. Positive timeout; script exit also releases the wake lock. */
      keepScreenOn(timeoutMs: number, options?: AutomationCallOptions): Promise<void>;
      cancelKeepingAwake(options?: AutomationCallOptions): Promise<void>;
      /** Audio helpers delegate to media and require media + media.audio. */
      getMusicVolume(options?: AutomationCallOptions): Promise<number>;
      getMusicMaxVolume(options?: AutomationCallOptions): Promise<number>;
      setMusicVolume(value: number, options?: AutomationCallOptions): Promise<void>;
      getNotificationVolume(options?: AutomationCallOptions): Promise<number>;
      getNotificationMaxVolume(options?: AutomationCallOptions): Promise<number>;
      setNotificationVolume(value: number, options?: AutomationCallOptions): Promise<void>;
      getAlarmVolume(options?: AutomationCallOptions): Promise<number>;
      getAlarmMaxVolume(options?: AutomationCallOptions): Promise<number>;
      setAlarmVolume(value: number, options?: AutomationCallOptions): Promise<void>;
      isScreenOn(options?: AutomationCallOptions): Promise<boolean>;
      wakeUp(options?: AutomationCallOptions): Promise<void>;
      vibrate(durationMs: number, options?: AutomationCallOptions): Promise<void>;
      isIgnoringBatteryOptimizations(options?: AutomationCallOptions): Promise<boolean>;
      openBatteryOptimizationSettings(options?: DevicePowerSettingsOptions): Promise<DevicePowerSettingsResult>;
    }

    export interface DeviceInfo {
      readonly schema: "autojs6-bridge-device-info-v1";
      readonly build: {
        readonly sdkInt: number;
        readonly release: string;
        readonly model: string;
        readonly brand: string;
        readonly product: string;
        readonly board: string;
        readonly bootloader: string;
        readonly hardware: string;
        readonly fingerprint: string;
        readonly buildId: string;
        readonly [key: string]: unknown;
      };
      readonly screen: {
        readonly width: number;
        readonly height: number;
        readonly density: number;
        readonly densityDpi: number;
        /** -1 if Android does not expose the setting. */
        readonly brightness: number;
        readonly brightnessMode: number;
        readonly canWriteSettings: boolean;
        readonly orientation: "portrait" | "landscape";
        readonly rotation: number;
        readonly rotationDegrees: number;
      } | { readonly error: string };
      readonly battery: {
        readonly available: boolean;
        readonly percent?: number;
        readonly isCharging?: boolean;
        readonly status?: string;
        readonly plugged?: string;
        readonly temperatureCelsius?: number | null;
      } | { readonly error: string };
      readonly memory: { readonly totalMem: number; readonly availMem: number } | { readonly error: string };
      readonly screenOn: boolean;
      readonly locale: string;
      readonly timeZone: string;
      readonly uptimeMs: number;
      readonly now: number;
      readonly [key: string]: unknown;
    }

    export interface DevicePowerSettingsOptions extends AutomationCallOptions {
      dryRun?: boolean;
    }

    export interface DevicePowerSettingsResult {
      readonly schema: "autojs6-node-battery-optimization-settings-v1";
      readonly sdkInt: number;
      readonly ignoringBatteryOptimizations: boolean;
      readonly canOpenSettings: boolean;
      readonly opened: boolean;
      readonly dryRun: boolean;
      readonly action: string;
      readonly reason: string;
    }
  }
export namespace RuntimeDialogs {
    export interface DialogOptions extends AutomationCallOptions {
      positive?: string;
      negative?: string;
      /** A neutral button returns the same value as cancellation. */
      neutral?: string;
    }

    export type SelectItem = string | number | boolean;

    export interface ProgressOptions {
      readonly title?: string;
      readonly message?: string;
      readonly max?: number;
      readonly value?: number;
      readonly indeterminate?: boolean;
    }
    export interface ProgressState extends ProgressOptions {
      readonly id: string;
      readonly shown: boolean;
      readonly max: number;
      readonly value: number;
      readonly indeterminate: boolean;
    }
    export interface ProgressHandle extends ProgressState {
      update(patch: ProgressOptions, options?: AutomationCallOptions): Promise<ProgressState>;
      dismiss(options?: AutomationCallOptions): Promise<boolean>;
    }

    export interface DialogsModule {
      alert(title: string, message?: string, options?: DialogOptions): Promise<void>;
      alert(title: string, options?: DialogOptions): Promise<void>;
      confirm(title: string, message?: string, options?: DialogOptions): Promise<boolean>;
      confirm(title: string, options?: DialogOptions): Promise<boolean>;
      input(title: string, prefill?: string, options?: DialogOptions): Promise<string | null>;
      input(title: string, options?: DialogOptions): Promise<string | null>;
      prompt(title: string, prefill?: string, options?: DialogOptions): Promise<string | null>;
      prompt(title: string, options?: DialogOptions): Promise<string | null>;
      select(title: string, items: readonly SelectItem[], options?: DialogOptions): Promise<number>;
      /** Returns entered text, with no JavaScript evaluation; cancellation returns null. */
      rawInput(title: string, prefill?: string, options?: DialogOptions): Promise<string | null>;
      rawInput(title: string, options?: DialogOptions): Promise<string | null>;
      singleChoice(title: string, items: readonly SelectItem[], selected?: number, options?: DialogOptions): Promise<number>;
      multiChoice(title: string, items: readonly SelectItem[], selected?: readonly number[], options?: DialogOptions): Promise<readonly number[]>;
      /** Activity-backed dialogs; timeout, abort and Worker/execution exit dismiss owned windows. */
      readonly progress: {
        show(descriptor?: ProgressOptions, options?: AutomationCallOptions): Promise<ProgressHandle>;
        update(id: string, patch: ProgressOptions, options?: AutomationCallOptions): Promise<ProgressState>;
        dismiss(id: string, options?: AutomationCallOptions): Promise<boolean>;
      };
    }
  }
// END GENERATED DEVICE DIALOG TYPES

// BEGIN GENERATED ANDROID TASK TYPES
export namespace RuntimeAndroid {
    export type ColorInput = RuntimeColors.ColorInput;
    export type StateName = "enabled" | "pressed" | "focused" | "checked" | "selected" | "activated" | "window_focused";
    export type State = number | StateName | `!${StateName}`;
    export interface PaintOptions { color?: ColorInput; antiAlias?: boolean; strokeWidth?: number; textSize?: number; style?: "fill" | "stroke" | "fill_and_stroke"; }
    export interface PaintInfo { readonly id: string; readonly __autojs6AndroidObject: "paint"; readonly color: number; readonly antiAlias: boolean; readonly strokeWidth: number; readonly textSize: number; readonly style: "fill" | "stroke" | "fill_and_stroke"; }
    export interface PaintHandle extends PaintInfo {
      toJSON(): PaintInfo;
      getInfo(options?: AutomationCallOptions): Promise<PaintInfo>;
      setColor(color: ColorInput, options?: AutomationCallOptions): Promise<void>;
      measureText(text: string, options?: AutomationCallOptions): Promise<number>;
      close(options?: AutomationCallOptions): Promise<boolean>;
    }
    export interface ColorStateListOptions { readonly states: readonly (readonly State[])[]; readonly colors: readonly ColorInput[]; }
    /** JSON state/color data can be passed as a native TextView textColor. Methods require a live execution. */
    export interface ColorStateListSnapshot {
      readonly id: string;
      readonly __autojs6AndroidObject: "colorStateList";
      readonly states: readonly (readonly State[])[];
      readonly colors: readonly number[];
      readonly defaultColor: number;
      readonly stateful: boolean;
    }
    export interface ColorStateListHandle extends ColorStateListSnapshot {
      toJSON(): ColorStateListSnapshot;
      getColorForState(states?: readonly State[], fallback?: ColorInput, options?: AutomationCallOptions): Promise<number>;
      close(options?: AutomationCallOptions): Promise<boolean>;
    }
    export interface ThemeColor { readonly colorPrimary: number; readonly colorPrimaryDark: number; readonly colorAccent: number; }
    export interface UriSnapshot {
      readonly schema: "autojs6-node-app-uri-descriptor-v1";
      readonly value: string; readonly scheme: string | null; readonly authority: string | null; readonly host: string | null;
      readonly port: number; readonly path: string | null; readonly query: string | null; readonly fragment: string | null;
    }
    export interface AndroidModule {
      createPaint(options?: PaintOptions, control?: AutomationCallOptions): Promise<PaintHandle>;
      createColorStateList(descriptor: ColorStateListOptions, options?: AutomationCallOptions): Promise<ColorStateListHandle>;
      setPaintColor(paint: PaintHandle, color: ColorInput, options?: AutomationCallOptions): Promise<void>;
      getThemeColor(options?: AutomationCallOptions): Promise<ThemeColor>;
      getUriForFile(path: string, options?: AutomationCallOptions): Promise<UriSnapshot>;
      parseUri(uri: string | null | undefined, options?: AutomationCallOptions): Promise<UriSnapshot | null>;
    }
  }
export namespace RuntimeTasks {
    export type RepeatMode = "disposable" | "once" | "daily" | "weekly" | "monthly" | "yearly" | "countdown" | 0 | 1 | 2 | 3 | 4 | 5;
    export type DateInput = Date | number | string;
    export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";
    export interface TimedTaskOptions extends AutomationCallOptions {
      path?: string; scriptPath?: string; entry?: string;
      repeatMode?: RepeatMode;
      date?: DateInput;
      /** Local HH:mm[:ss[.SSS]], Date or epoch milliseconds. */
      time?: DateInput;
      delayMs?: number;
      daysOfWeek?: readonly Weekday[];
      dayOfMonth?: number; monthOfYear?: number;
      endMode?: "forever" | "count" | "until_date" | "date";
      times?: number; untilDate?: string;
      delay?: number; interval?: number; loopTimes?: number;
    }
    export interface IntentTaskOptions extends AutomationCallOptions {
      path?: string; scriptPath?: string; entry?: string;
      action: string; category?: string | null; dataType?: string | null; local?: boolean; isLocal?: boolean;
    }
    export interface TimedTask {
      readonly id: number; readonly kind: "timed"; readonly path: string;
      readonly repeatMode: Exclude<RepeatMode, number | "once">;
      readonly millis: number; readonly timeFlag: number; readonly nextTime: number; readonly scheduled: boolean;
      readonly finishedTimes: number; readonly sourceKind: string | null; readonly projectRoot: string | null;
      readonly options: Readonly<TimedTaskOptions>;
    }
    export interface TriggerIntent {
      readonly action: string | null; readonly data: string | null; readonly type: string | null;
      readonly packageName: string | null; readonly flags: number; readonly categories: readonly string[];
      readonly extras: Readonly<Record<string, JsonValue>>; readonly receivedAt: number;
    }
    export interface IntentTask {
      readonly id: number; readonly kind: "intent"; readonly path: string; readonly action: string;
      readonly category: string | null; readonly dataType: string | null; readonly local: boolean;
      readonly options: Readonly<IntentTaskOptions>; readonly lastIntent: TriggerIntent | null;
    }
    export type Task = TimedTask | IntentTask;
    export interface QueryOptions extends AutomationCallOptions { path?: string; scriptPath?: string; repeatMode?: RepeatMode; action?: string; }
    export interface LocalIntent {
      action: string; category?: string | null; categories?: readonly string[]; type?: string | null; data?: string | null;
      extras?: Readonly<Record<string, string | number | boolean | null>>;
    }
    export interface TasksModule {
      addTask(options: TimedTaskOptions | IntentTaskOptions): Promise<Task>;
      addTimedTask(options: TimedTaskOptions & { repeatMode: RepeatMode }): Promise<TimedTask>;
      addDailyTask(options: TimedTaskOptions): Promise<TimedTask>;
      addWeeklyTask(options: TimedTaskOptions & { daysOfWeek: readonly Weekday[] }): Promise<TimedTask>;
      addMonthlyTask(options: TimedTaskOptions & { dayOfMonth: number }): Promise<TimedTask>;
      addYearlyTask(options: TimedTaskOptions & { dayOfMonth: number; monthOfYear: number }): Promise<TimedTask>;
      addDisposableTask(options: TimedTaskOptions): Promise<TimedTask>;
      addCountdownTask(options: TimedTaskOptions & { delayMs: number }): Promise<TimedTask>;
      addIntentTask(options: IntentTaskOptions): Promise<IntentTask>;
      addBroadcastIntentTask(options: IntentTaskOptions): Promise<IntentTask>;
      queryTasks(options?: QueryOptions): Promise<readonly Task[]>;
      queryTimedTasks(options?: QueryOptions): Promise<readonly TimedTask[]>;
      queryIntentTasks(options?: QueryOptions): Promise<readonly IntentTask[]>;
      getTimedTask(id: number | string | TimedTask, options?: AutomationCallOptions): Promise<TimedTask | null>;
      getIntentTask(id: number | string | IntentTask, options?: AutomationCallOptions): Promise<IntentTask | null>;
      removeTask(task: Task | number | string, options?: AutomationCallOptions): Promise<boolean>;
      removeTimedTask(id: number | string | TimedTask, options?: AutomationCallOptions): Promise<boolean>;
      removeIntentTask(id: number | string | IntentTask, options?: AutomationCallOptions): Promise<boolean>;
      updateTask(task: TimedTask, patch?: TimedTaskOptions): Promise<TimedTask | null>;
      updateTask(task: IntentTask, patch?: Partial<IntentTaskOptions>): Promise<IntentTask | null>;
      updateTask(task: Task, patch?: TimedTaskOptions | Partial<IntentTaskOptions>): Promise<Task | null>;
      sendLocalBroadcastSync(action: string | LocalIntent, options?: AutomationCallOptions): Promise<boolean>;
      daysToTimeFlag(days: readonly (0 | 1 | 2 | 3 | 4 | 5 | 6)[]): number;
      timeFlagToDays(flag: number): readonly number[];
    }
  }
export namespace RuntimeColors {
    export type ColorInput =
      | number
      | bigint
      | string
      | {
          readonly color?: number;
          readonly colorPrimary?: number;
          readonly a?: number;
          readonly r?: number;
          readonly g?: number;
          readonly b?: number;
        };

    export interface ComponentOptions {
      readonly max?: 1 | 255;
    }

    export interface AlphaStringOptions {
      readonly keepTrailingZeroForFullAlpha?: boolean;
    }

    export interface ColorsModule {
      readonly all: Readonly<Record<string, number>>;
      /** Live asynchronous host theme; getThemeColor() accepts call options. */
      readonly themeColor: Promise<RuntimeAndroid.ThemeColor>;
      toInt(color: ColorInput): number;
      toHex(color: ColorInput, alphaOrLength?: boolean | number | null): string;
      toFullHex(color: ColorInput): string;
      toString(color: ColorInput, alphaOrLength?: boolean | number | null): string;
      alpha(color: ColorInput, options?: ComponentOptions | null): number;
      getAlpha(color: ColorInput, options?: ComponentOptions | null): number;
      alphaDouble(color: ColorInput): number;
      getAlphaDouble(color: ColorInput): number;
      setAlpha(color: ColorInput, alpha: number): number;
      setAlphaRelative(color: ColorInput, percentage: number): number;
      removeAlpha(color: ColorInput): number;
      red(color: ColorInput, options?: ComponentOptions | null): number;
      getRed(color: ColorInput, options?: ComponentOptions | null): number;
      redDouble(color: ColorInput): number;
      getRedDouble(color: ColorInput): number;
      setRed(color: ColorInput, red: number): number;
      setRedRelative(color: ColorInput, percentage: number): number;
      removeRed(color: ColorInput): number;
      green(color: ColorInput, options?: ComponentOptions | null): number;
      getGreen(color: ColorInput, options?: ComponentOptions | null): number;
      greenDouble(color: ColorInput): number;
      getGreenDouble(color: ColorInput): number;
      setGreen(color: ColorInput, green: number): number;
      setGreenRelative(color: ColorInput, percentage: number): number;
      removeGreen(color: ColorInput): number;
      blue(color: ColorInput, options?: ComponentOptions | null): number;
      getBlue(color: ColorInput, options?: ComponentOptions | null): number;
      blueDouble(color: ColorInput): number;
      getBlueDouble(color: ColorInput): number;
      setBlue(color: ColorInput, blue: number): number;
      setBlueRelative(color: ColorInput, percentage: number): number;
      removeBlue(color: ColorInput): number;
      argb(alpha: number, red: number, green: number, blue: number): number;
      rgb(red: number, green: number, blue: number): number;
      rgba(red: number, green: number, blue: number, alpha?: number): number;
      hsv(hue: number, saturation: number, value: number): number;
      hsva(hue: number, saturation: number, value: number, alpha?: number): number;
      hsl(hue: number, saturation: number, lightness: number): number;
      hsla(hue: number, saturation: number, lightness: number, alpha?: number): number;
      toRgb(color: ColorInput): readonly [number, number, number];
      toRgba(color: ColorInput): readonly [number, number, number, number];
      toArgb(color: ColorInput): readonly [number, number, number, number];
      toHsv(color: ColorInput): readonly [number, number, number];
      toHsva(color: ColorInput): readonly [number, number, number, number];
      toHsl(color: ColorInput): readonly [number, number, number];
      toHsla(color: ColorInput): readonly [number, number, number, number];
      toRgbString(color: ColorInput): string;
      toRgbaString(color: ColorInput, options?: AlphaStringOptions | null): string;
      toArgbString(color: ColorInput, options?: AlphaStringOptions | null): string;
      toHsvString(color: ColorInput): string;
      toHsvaString(color: ColorInput): string;
      toHslString(color: ColorInput): string;
      toHslaString(color: ColorInput): string;
      isEqual(left: ColorInput, right: ColorInput): boolean;
      isSimilar(left: ColorInput, right: ColorInput, threshold?: number | null): boolean;
      luminance(color: ColorInput): number;
      build(alpha?: number, red?: number, green?: number, blue?: number): number;
      summary(color: ColorInput): string;
      toColorStateList(color: ColorInput, ...colors: readonly ColorInput[]): Promise<RuntimeAndroid.ColorStateListHandle>;
      createColorStateList(descriptor: RuntimeAndroid.ColorStateListOptions, options?: AutomationCallOptions): Promise<RuntimeAndroid.ColorStateListHandle>;
      createPaint(options?: RuntimeAndroid.PaintOptions, control?: AutomationCallOptions): Promise<RuntimeAndroid.PaintHandle>;
      getThemeColor(options?: AutomationCallOptions): Promise<RuntimeAndroid.ThemeColor>;
      setPaintColor(paint: RuntimeAndroid.PaintHandle, color: ColorInput, options?: AutomationCallOptions): Promise<void>;
    }
  }
// END GENERATED ANDROID TASK TYPES

export interface HostClient {
  readonly android: RuntimeAndroid.AndroidModule;
  readonly colors: RuntimeColors.ColorsModule;
  readonly tasks: RuntimeTasks.TasksModule;
  readonly events: RuntimeEvents.EventsModule;
  readonly notifications: RuntimeNotifications.NotificationsModule;
  readonly shell: RuntimeShell.ShellModule;
  readonly shizuku: RuntimeShell.ShizukuModule;
  readonly sensors: RuntimeSensors.SensorsModule;
  readonly database: RuntimeDatabase.DatabaseModule;
  readonly sqlite: RuntimeSqlite.SQLiteModule;
  readonly files: RuntimeFiles.FilesModule;
  readonly storage: RuntimeStorage.StorageModule;
  readonly storages: RuntimeStorage.StorageModule;
  readonly app: RuntimeApp.AppModule;
  readonly accessibility: RuntimeAccessibility.AccessibilityModule;
  readonly clipboard: RuntimeClipboard.ClipboardModule;
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
  /** Async device methods; info() preserves the original small snapshot, getInfo() returns the full live snapshot. */
  readonly device: Omit<RuntimeDevice.DeviceModule, "info" | "sdkInt" | "width" | "height" | "density" | "densityDpi" | "release" | "model" | "brand" | "product" | "board" | "bootloader" | "hardware" | "fingerprint" | "buildId"> & { info(): Promise<DeviceInfo> };
  readonly dialogs: RuntimeDialogs.DialogsModule;
  readonly ui: RuntimeUi.UiModule;
  readonly compose: RuntimeCompose.Api;
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

export namespace RuntimeUi {
    export interface UiBridgeCallOptions { timeoutMs?: number; signal?: AbortSignal }
    export type XmlTagName = "vertical" | "horizontal" | "frame" | "compose" | "text" | "button" | "input" | "img" | "image" | "scroll" | "list" | "switch" | "checkbox" | "progressbar" | "tabs" | "tab" | "linear" | "hscroll" | "space" | "relative" | "card" | "spinner" | "seekbar" | "ratingbar" | "radiogroup" | "radio" | "toggle" | "checkedtext" | "numberpicker" | "webview" | "drawer" | "toolbar" | "viewpager";
    export type XmlAttributeName = "text" | "hint" | "textSize" | "textColor" | "textStyle" | "singleLine" | "maxLines" | "inputType" | "checked" | "enabled" | "visible" | "visibility" | "alpha" | "contentDescription" | "clickable" | "focusable" | "width" | "height" | "padding" | "margin" | "backgroundColor" | "gravity" | "layoutGravity" | "weight" | "orientation" | "min" | "max" | "progress" | "indeterminate" | "rating" | "numStars" | "stepSize" | "isIndicator" | "items" | "selectedIndex" | "checkedId" | "textOn" | "textOff" | "value" | "wrapSelectorWheel" | "displayedValues" | "cardCornerRadius" | "cardElevation" | "src" | "scaleType" | "adjustViewBounds" | "id" | "w" | "h" | "bg" | "entries" | "checkedButton" | "layout_width" | "layout_height" | "layout_weight" | "layout_gravity" | "layout_margin" | "below" | "above" | "toLeftOf" | "toRightOf" | "toStartOf" | "toEndOf" | "alignTop" | "alignBottom" | "alignStart" | "alignEnd" | "alignParentTop" | "alignParentBottom" | "alignParentStart" | "alignParentEnd" | "centerInParent" | "centerHorizontal" | "centerVertical" | "url" | "html" | "javaScriptEnabled" | "domStorageEnabled" | "title" | "subtitle" | "navigationIcon" | "navigationContentDescription" | "menu" | "drawerLockMode" | "currentItem" | "offscreenPageLimit";

    export type LayoutType =
      | "WebView" | "Drawer" | "DrawerLayout" | "Toolbar" | "ViewPager" | "webview" | "drawer" | "toolbar" | "viewpager"
      | "HorizontalScrollView" | "Space" | "RelativeLayout" | "Card" | "Spinner" | "SeekBar" | "RatingBar" | "RadioGroup" | "RadioButton" | "ToggleButton" | "CheckedTextView" | "NumberPicker" | "vertical" | "horizontal" | "frame" | "compose" | "text" | "button" | "input" | "img" | "image" | "scroll" | "list" | "switch" | "checkbox" | "progressbar" | "tabs" | "tab" | "linear" | "hscroll" | "space" | "relative" | "card" | "spinner" | "seekbar" | "ratingbar" | "radiogroup" | "radio" | "toggle" | "checkedtext" | "numberpicker"
      | "Text" | "Button" | "Input" | "Image" | "ScrollView" | "List" | "Switch" | "Checkbox" | "CheckBox" | "Progress" | "ProgressBar" | "Tabs" | "Tab"
      | "Frame" | "FrameLayout" | "Compose" | "TextView" | "EditText"
      | "LinearLayout" | "Vertical" | "Horizontal" | "Column" | "Row"
      | "text" | "button" | "input" | "image" | "scrollView" | "list" | "switch" | "checkbox" | "checkBox" | "progress" | "progressBar" | "tabs" | "tab"
      | "linearLayout" | "vertical" | "horizontal" | "column" | "row";

    export interface Binding<T extends JsonValue = JsonValue> {
      readonly __autojs6UiBinding?: string;
    }

    export type BindableValue<T extends JsonValue = JsonValue> = T | Binding<T>;

    export interface UiState<T extends Record<string, JsonValue> = Record<string, JsonValue>> {
      get<K extends keyof T & string>(key: K): T[K] | undefined;
      set<K extends keyof T & string>(key: K, value: T[K]): this;
      update(values: Partial<T>): this;
      snapshot(): Readonly<T>;
      subscribe(callback: (event: { readonly keys: readonly string[]; readonly snapshot: Readonly<T> }) => void): () => void;
    }

    export interface LayoutNode {
      readonly type: LayoutType | string;
      readonly id?: string;
      readonly text?: BindableValue<string>;
      readonly hint?: BindableValue<string>;
      readonly value?: BindableValue;
      readonly checked?: BindableValue<boolean>;
      readonly enabled?: BindableValue<boolean>;
      readonly progress?: BindableValue<number>;
      readonly max?: BindableValue<number>;
      readonly selectedIndex?: BindableValue<number>;
      readonly items?: readonly JsonValue[];
      readonly tabs?: readonly LayoutNode[];
      readonly content?: LayoutNode;
      readonly children?: readonly LayoutNode[];
      readonly [key: string]: JsonValue | Binding | readonly JsonValue[] | readonly LayoutNode[] | LayoutNode | undefined;
    }

    export type LayoutDescriptor = LayoutNode;

    export interface LayoutPatch {
      readonly id?: string;
      readonly [key: string]: JsonValue | undefined;
    }

    export interface UiShowOptions extends UiBridgeCallOptions {
      drainIntervalMs?: number;
    }

    export interface UiEventOptions extends UiBridgeCallOptions {
      drainIntervalMs?: number;
    }

    export interface UiEvent {
      readonly type: string;
      readonly id?: string;
      readonly value?: JsonValue;
      readonly text?: string;
      readonly checked?: boolean;
      readonly index?: number;
      readonly selectedIndex?: number;
      readonly tabId?: string;
      readonly handleId?: string;
      readonly progress?: number;
      readonly rating?: number;
      readonly fromUser?: boolean;
      readonly checkedId?: string | null;
      readonly oldValue?: number;
      readonly message?: string;
      readonly url?: string; readonly title?: string; readonly mainFrame?: boolean;
      readonly errorCode?: number; readonly statusCode?: number; readonly didCrash?: boolean;
      readonly itemId?: string; readonly drawerId?: string | null; readonly side?: 'start' | 'end';
      readonly position?: number; readonly pageId?: string | null; readonly offset?: number; readonly offsetPixels?: number; readonly state?: number;
      readonly [key: string]: JsonValue | undefined;
    }

    export interface UiHandle {
      readonly closed: boolean;
      readonly subscriptionId?: string;
      readonly id: string;
      on(event: string, callback: (event: UiEvent) => void, options?: UiEventOptions): () => void;
      once(event: string, callback: (event: UiEvent) => void, options?: UiEventOptions): () => void;
      off(event: string, callback: (event: UiEvent) => void): void;
      update(patch: LayoutPatch, options?: UiBridgeCallOptions): Promise<void>;
      batchUpdate(patches: readonly LayoutPatch[], options?: UiBridgeCallOptions): Promise<void>;
      close(options?: UiBridgeCallOptions): Promise<void>;
    }

    /** Serializable identity. Rehydrate a structured-cloned token with ui.view(). */
    export interface NativeViewToken { readonly __autojs6ViewHandle: string }
    export interface UiContextToken {
      readonly __autojs6UiContext: string;
      readonly density: number; readonly scaledDensity: number;
      readonly packageName: string; readonly runtimeVersionCode: number; readonly applicationVersionCode: number;
    }
    export interface UiContext extends UiContextToken {
      inflate(layout: string | LayoutDescriptor): Promise<NativeViewHandle>;
      createView(type: LayoutType | (string & {}), props?: NativeViewCreateOptions): Promise<NativeViewHandle>;
    }
    /** Layout values default to dp; native geometry and inset snapshots are physical pixels. */
    export type NativeDimension = number | `${number}dp` | `${number}px` | '*' | 'match_parent' | 'wrap_content' | 'auto';
    export type NativeInsets = NativeDimension | readonly [NativeDimension, NativeDimension] | readonly [NativeDimension, NativeDimension, NativeDimension, NativeDimension];
    export type NativeImageSource = {readonly __autojs6ImageHandle: string} | `@drawable/${string}` | `@android:drawable/${string}`;
    export type NativeDrawable = `@drawable/${string}` | `@android:drawable/${string}`;
    export interface ToolbarMenuItem {
      readonly id: string; readonly title: string; readonly icon?: NativeDrawable;
      readonly showAsAction?: 'never' | 'ifRoom' | 'always'; readonly enabled?: boolean; readonly visible?: boolean;
    }
    /** Widget-specific attributes reject unsupported widgets at runtime. */
    export interface NativeViewPatch {
      text?: string;
      hint?: string;
      textSize?: number | `${number}sp` | `${number}px`;
      textColor?: string | number | RuntimeAndroid.ColorStateListSnapshot;
      textStyle?: 'normal' | 'bold' | 'italic' | 'bold|italic';
      singleLine?: boolean;
      maxLines?: number;
      inputType?: number | 'text' | 'textPassword' | 'number' | 'numberDecimal' | 'phone' | 'textEmailAddress';
      checked?: boolean;
      enabled?: boolean;
      visible?: boolean;
      visibility?: 'visible' | 'invisible' | 'gone';
      alpha?: number;
      contentDescription?: string | null;
      clickable?: boolean;
      focusable?: boolean;
      width?: NativeDimension;
      height?: NativeDimension;
      padding?: NativeInsets;
      margin?: NativeInsets;
      backgroundColor?: number | string;
      gravity?: number | string;
      layoutGravity?: number | string;
      weight?: number;
      orientation?: 'horizontal' | 'vertical';
      min?: number;
      max?: number;
      progress?: number;
      indeterminate?: boolean;
      rating?: number;
      numStars?: number;
      stepSize?: number;
      isIndicator?: boolean;
      items?: readonly JsonValue[] | string;
      selectedIndex?: number;
      checkedId?: string | null;
      textOn?: string;
      textOff?: string;
      value?: JsonValue;
      wrapSelectorWheel?: boolean;
      displayedValues?: readonly string[] | null;
      cardCornerRadius?: NativeDimension;
      cardElevation?: NativeDimension;
      src?: NativeImageSource | null;
      scaleType?: 'matrix' | 'fitXY' | 'fitStart' | 'fitCenter' | 'fitEnd' | 'center' | 'centerCrop' | 'centerInside' | 'MATRIX' | 'FIT_XY' | 'FIT_START' | 'FIT_CENTER' | 'FIT_END' | 'CENTER' | 'CENTER_CROP' | 'CENTER_INSIDE';
      adjustViewBounds?: boolean;
      url?: string;
      html?: string;
      javaScriptEnabled?: boolean;
      domStorageEnabled?: boolean;
      title?: string;
      subtitle?: string;
      navigationIcon?: NativeDrawable | null;
      navigationContentDescription?: string;
      menu?: readonly ToolbarMenuItem[];
      drawerLockMode?: 'unlocked' | 'lockedClosed' | 'lockedOpen';
      currentItem?: number;
      offscreenPageLimit?: number;
    }

    /** Child trees are accepted during creation; set() only changes scalar/component properties. */
    export interface NativeViewCreateOptions extends NativeViewPatch {
      id?: string;
      children?: readonly LayoutDescriptor[];
      tabs?: readonly LayoutDescriptor[];
      content?: LayoutDescriptor;
    }

    export interface NativeViewSnapshot {
      readonly id: string | null; readonly type: string; readonly width: number; readonly height: number;
      readonly enabled: boolean; readonly visible: boolean; readonly attached: boolean;
      readonly contentDescription: string | null; readonly text?: string; readonly checked?: boolean;
      readonly hint?: string;
      readonly textSize?: number;
      readonly textColor?: number;
      readonly textStyle?: 'normal' | 'bold' | 'italic' | 'bold|italic';
      readonly singleLine?: boolean;
      readonly maxLines?: number;
      readonly inputType?: number;
      readonly visibility?: 'visible' | 'invisible' | 'gone';
      readonly alpha?: number;
      readonly clickable?: boolean;
      readonly focusable?: boolean;
      readonly padding?: readonly [number, number, number, number];
      readonly margin?: readonly [number, number, number, number];
      readonly backgroundColor?: number | null;
      readonly gravity?: number;
      readonly layoutGravity?: number;
      readonly weight?: number;
      readonly orientation?: 'horizontal' | 'vertical';
      readonly min?: number;
      readonly max?: number;
      readonly progress?: number;
      readonly indeterminate?: boolean;
      readonly rating?: number;
      readonly numStars?: number;
      readonly stepSize?: number;
      readonly isIndicator?: boolean;
      readonly items?: readonly JsonValue[];
      readonly selectedIndex?: number;
      readonly checkedId?: string | null;
      readonly textOn?: string;
      readonly textOff?: string;
      readonly value?: JsonValue;
      readonly wrapSelectorWheel?: boolean;
      readonly displayedValues?: readonly string[] | null;
      readonly cardCornerRadius?: number;
      readonly cardElevation?: number;
      readonly src?: NativeImageSource | null;
      readonly scaleType?: string;
      readonly adjustViewBounds?: boolean;
      readonly layoutWidth?: number;
      readonly layoutHeight?: number;
      readonly drawableWidth?: number;
      readonly drawableHeight?: number;
      readonly url?: string | null;
      readonly html?: string | null;
      readonly javaScriptEnabled?: boolean;
      readonly domStorageEnabled?: boolean;
      readonly title?: string | null;
      readonly subtitle?: string;
      readonly navigationIcon?: NativeDrawable | null;
      readonly navigationContentDescription?: string;
      readonly menu?: readonly ToolbarMenuItem[];
      readonly drawerLockMode?: 'unlocked' | 'lockedClosed' | 'lockedOpen';
      readonly currentItem?: number;
      readonly offscreenPageLimit?: number;
      readonly canGoBack?: boolean;
      readonly canGoForward?: boolean;
      readonly drawerOpenStart?: boolean;
      readonly drawerOpenEnd?: boolean;
      readonly pageCount?: number;
    }
    export type WebCallback<T, R = void> = (this: NativeViewHandle, event: Readonly<T>) => R | Promise<R>;
    export interface WebPageEvent { url: string | null; title?: string | null; message?: string | null }
    export interface WebRequest {
      url: string; method: string; mainFrame: boolean; hasGesture: boolean; redirect: boolean;
      headers: Readonly<Record<string, string>>;
    }
    export type WebRequestMatch = ({url: string; urlPrefix?: string} | {url?: string; urlPrefix: string}) & {method?: string; mainFrame?: boolean};
    export type WebNavigationRule = WebRequestMatch & {action: 'allow' | 'block'};
    export interface WebResourceResponse {
      mimeType?: string; encoding?: string; statusCode?: number; reasonPhrase?: string;
      headers?: Readonly<Record<string, string>>;
      /** Use body or bodyBase64, not both. Rules are published before requests run. */
      body?: string; bodyBase64?: string;
    }
    export type WebResourceRule = WebRequestMatch & {response: WebResourceResponse};
    /** Native evaluation deadline, 100..120000 ms; default 30000. Result delivery uses short event reads. */
    export interface WebEvaluationOptions { timeoutMs?: number }
    export interface WebViewClientOptions {
      callbackTimeoutMs?: number;
      navigationRules?: readonly WebNavigationRule[];
      resourceRules?: readonly WebResourceRule[];
      blockedKeyCodes?: readonly number[];
    }
    export interface WebViewClient {
      onPageStarted?: WebCallback<WebPageEvent>;
      onPageFinished?: WebCallback<WebPageEvent>;
      onPageCommitVisible?: WebCallback<WebPageEvent>;
      onLoadResource?: WebCallback<WebPageEvent>;
      doUpdateVisitedHistory?: WebCallback<WebPageEvent & {reload: boolean}>;
      onScaleChanged?: WebCallback<{oldScale: number; newScale: number}>;
      onReceivedError?: WebCallback<WebRequest & {errorCode: number; message: string}>;
      onReceivedHttpError?: WebCallback<WebRequest & {statusCode: number; reasonPhrase: string; mimeType: string; responseHeaders: Readonly<Record<string,string>>}>;
      onReceivedLoginRequest?: WebCallback<{realm?: string; account?: string; args?: string}>;
      /** Notification of the decision from navigationRules; returning a decision is rejected. */
      shouldOverrideUrlLoading?: WebCallback<WebRequest & {blocked: boolean}>;
      /** Notification of resourceRules; returning a resource from this callback is rejected. */
      shouldInterceptRequest?: WebCallback<WebRequest & {intercepted: boolean}>;
      /** Notification of blockedKeyCodes; Android's main thread never waits for a script response. */
      shouldOverrideKeyEvent?: WebCallback<{keyCode: number; action: number; blocked: boolean}>;
      onUnhandledKeyEvent?: WebCallback<{keyCode: number; action: number}>;
      onFormResubmission?: WebCallback<WebPageEvent, boolean | null>;
      onReceivedHttpAuthRequest?: WebCallback<{host: string; realm: string}, {username: string; password: string} | null>;
      /** Defaults to cancellation. Only an explicit 'proceed' changes that decision. */
      onReceivedSslError?: WebCallback<WebPageEvent & {primaryError: number}, 'cancel' | 'proceed' | null>;
      onReceivedClientCertRequest?: WebCallback<{host: string; port: number; keyTypes: readonly string[]; principals: readonly string[]}, {alias: string} | 'ignore' | 'cancel' | null>;
      onSafeBrowsingHit?: WebCallback<WebRequest & {threatType: number}, 'backToSafety' | 'proceed' | 'showInterstitial' | null>;
      /** Notification; the host always releases the exited renderer's WebView. */
      onRenderProcessGone?: WebCallback<{didCrash: boolean; rendererPriorityAtExit: number}>;
    }
    export interface WebFileChooserOptions {
      acceptTypes?: readonly string[]; multiple?: boolean;
      mode?: 'open' | 'multiple' | 'directory' | 'save' | 0 | 1 | 2 | 3;
      /** Capture image/video with the system camera or audio as a foreground AAC/M4A recording. */
      captureEnabled?: boolean;
      /** Override an ambiguous acceptTypes family when captureEnabled is true. */
      captureKind?: 'image' | 'video' | 'audio';
      /** System-camera hint: 0 low quality, 1 high quality. Only applies to video. */
      videoQuality?: 0 | 1;
      /** Positive integer seconds, up to 2147483. Camera hint; enforced by the native audio recorder. */
      durationLimitSeconds?: number;
      /** Positive safe-integer byte limit. Camera hint; audio may finish after the final encoded frame. */
      sizeLimitBytes?: number;
      /** Chooser wait, 100..2147483647 ms; default 120000. Execution and callback budgets also apply. */
      timeoutMs?: number;
      /** Save filename; Android creates a new document instead of overwriting an existing one. */
      fileName?: string;
      /** Defaults to true for directory/save. Save always needs write access. */
      writable?: boolean;
      /** Android API 37+ native chooser permission mode: 0 read, 1 read/write. */
      permissionMode?: 0 | 1;
      /** Android API 26+ document-picker starting location. */
      initialUri?: string;
    }
    export interface WebFileChooserRequest extends WebFileChooserOptions {
      acceptTypes: readonly string[]; multiple: boolean; mode: 0 | 1 | 2 | 3;
      captureEnabled: boolean; title: string | null; filenameHint: string | null;
    }
    export interface WebDialogRequest {url: string | null; title: string | null; message: string; defaultValue: string | null}
    export interface WebPermissionRequest {origin: string; resources: readonly string[]}
    export interface WebBackgroundRecordingOptions {
      /** Native Android camera ID takes precedence over facing. Default facing is back. */
      cameraId?: string; facing?: 'back' | 'front';
      /** Preferred size/rate; actual supported values are returned. Defaults 1280 x 720, 30 fps. */
      width?: number; height?: number; frameRate?: number; bitRate?: number;
      /** Record microphone AAC, default false. */
      audio?: boolean;
      durationLimitSeconds?: number; sizeLimitBytes?: number; timeoutMs?: number;
    }
    export interface WebBackgroundRecordingActive {
      id: string; state: 'recording'; cameraId: string; width: number; height: number; frameRate: number; audio: boolean;
    }
    export interface WebBackgroundRecordingResult extends Omit<WebBackgroundRecordingActive, 'state'> {
      state: 'stopped'; reason: 'stopped' | 'limit' | 'notification-stop';
      /** Temporary content URI owned by this View. Read/copy it before disposal. */
      uri: string; mimeType: 'video/mp4'; durationMs: number; size: number;
    }
    export type WebBackgroundRecordingStatus = WebBackgroundRecordingActive | WebBackgroundRecordingResult | {state: 'idle' | 'starting' | 'cancelled' | 'failed'; id?: string; reason?: string; error?: string};
    export interface WebDisplayCaptureOptions {
      /** Exact trusted HTTP(S) origin of the loaded page. Secure context and visible-page user activation are required. */
      origin: string;
      /** Maximum encoded dimensions, default 1280 x 720. Aspect ratio is preserved. */
      maxWidth?: number; maxHeight?: number;
      /** Maximum frame rate, integer 1..60, default 5. Actual rate depends on device load. */
      frameRate?: number;
      /** Android consent timeout, 100..120000 ms; default 120000. */
      timeoutMs?: number;
    }
    export interface WebDisplayCaptureRegistration { readonly id: string; readonly installed: true; readonly source: "android-media-projection"; readonly audio: false }
    export interface WebPermissionResponse {
      /** Explicit subset of this request's resources, selected after checking its origin. */
      resources: readonly string[];
      /** Request missing CAMERA/RECORD_AUDIO permissions through Android. Default false. Declare them in the app manifest; Chromium audio also requires the normal MODIFY_AUDIO_SETTINGS permission. */
      requestAndroidPermissions?: boolean;
      /** Explicit foreground-service lease started while visible, requiring matching manifest permissions. WebView may still mute hidden camera tracks; use startBackgroundRecording for native camera files. Navigation/window close/stopMediaCapture releases this lease. */
      backgroundCapture?: boolean;
    }
    export interface WebChromeClientOptions {
      /** 100..2147483647 ms. Default 15000, or 120000 for file selection, including its default native picker. */
      callbackTimeoutMs?: number;
      consumeConsoleMessages?: boolean;
      fullscreen?: boolean;
      allowAutomaticWindows?: boolean;
    }
    export interface WebChromeClient {
      onProgressChanged?: WebCallback<{progress: number}>;
      onReceivedTitle?: WebCallback<{title: string | null}>;
      /** PNG thumbnail, at most 64x64, not an Android Bitmap reference. */
      onReceivedIcon?: WebCallback<{width?: number; height?: number; pngBase64?: string}>;
      onReceivedTouchIconUrl?: WebCallback<WebPageEvent & {precomposed: boolean}>;
      /** Notification; use consumeConsoleMessages to set Android's synchronous return value. */
      onConsoleMessage?: WebCallback<{message: string; sourceId: string; lineNumber: number; level: 'tip' | 'log' | 'warning' | 'error' | 'debug'}>;
      onJsAlert?: WebCallback<WebDialogRequest, boolean | null>;
      onJsConfirm?: WebCallback<WebDialogRequest, boolean | null>;
      onJsPrompt?: WebCallback<WebDialogRequest, string | null>;
      onJsBeforeUnload?: WebCallback<WebDialogRequest, boolean | null>;
      /** Select requested resources after checking origin. Arrays require existing Android permissions; object replies may explicitly request missing media permissions. */
      onPermissionRequest?: WebCallback<WebPermissionRequest, readonly string[] | WebPermissionResponse | null>;
      onPermissionRequestCanceled?: WebCallback<WebPermissionRequest>;
      onGeolocationPermissionsShowPrompt?: WebCallback<{origin: string}, boolean | {allow: boolean; retain?: boolean} | null>;
      onGeolocationPermissionsHidePrompt?: WebCallback<Record<string, never>>;
      /** Return readable document content URIs or null. this.chooseFiles(event) opens the system picker. */
      onShowFileChooser?: WebCallback<WebFileChooserRequest, readonly string[] | null>;
      /** Return a different execution-owned WebView that has not navigated, or null to cancel. */
      onCreateWindow?: WebCallback<WebPageEvent & {dialog: boolean; userGesture: boolean}, NativeViewToken | null>;
      onCloseWindow?: WebCallback<Record<string, never>>;
      onRequestFocus?: WebCallback<Record<string, never>>;
      onShowCustomView?: WebCallback<Record<string, never>>;
      onHideCustomView?: WebCallback<Record<string, never>>;
      getVisitedHistory?: WebCallback<Record<string, never>, readonly string[] | null>;
    }
    export interface WebDownloadEvent {
      url: string; userAgent?: string; contentDisposition?: string; mimeType?: string;
      contentLength: number; suggestedFileName: string;
    }
    export type WebDownloadId = number | `web:${string}`;
    export interface WebDownloadOptions {
      /** HTTP(S), data:, same-page blob:, or a readable selected content: URI. */
      url: string; fileName?: string; title?: string; mimeType?: string; contentDisposition?: string;
      userAgent?: string; includeCookies?: boolean; headers?: Readonly<Record<string, string>>;
      /** An empty writable document from chooseFiles({mode:'save'}); mutually exclusive with directoryUri. */
      destinationUri?: string;
      /** A writable tree from chooseFiles({mode:'directory'}); creates a child named fileName. */
      directoryUri?: string;
      /** Local/page/SAF transfers only. Default 120000; 100..2147483647 ms. */
      timeoutMs?: number;
    }
    export interface WebDownload {id: WebDownloadId; url: string; fileName: string}
    export interface WebDownloadState {
      id: WebDownloadId; url: string; status: 'pending' | 'running' | 'paused' | 'successful' | 'failed';
      reason: number; bytesDownloaded: number; totalBytes: number;
      localUri: string | null; contentUri: string | null; mimeType: string | null;
      /** Local transfers report details on failure. */
      error?: string; fileName?: string;
      /** False for explicitly chosen SAF outputs: removing a completed job preserves the user's document. */
      managed?: boolean;
    }

    export interface NativeViewHandle extends NativeViewToken {
      readonly id: string; readonly type: string; readonly context: UiContext;
      // Property reads return Promises. Assignment effects are ordered; await a read or flush().
      get text(): Promise<string>;
      set text(value: string);
      get hint(): Promise<string>;
      set hint(value: string);
      get textSize(): Promise<number>;
      set textSize(value: number | `${number}sp` | `${number}px`);
      get textColor(): Promise<number>;
      set textColor(value: string | number | RuntimeAndroid.ColorStateListSnapshot);
      get textStyle(): Promise<'normal' | 'bold' | 'italic' | 'bold|italic'>;
      set textStyle(value: 'normal' | 'bold' | 'italic' | 'bold|italic');
      get singleLine(): Promise<boolean>;
      set singleLine(value: boolean);
      get maxLines(): Promise<number>;
      set maxLines(value: number);
      get inputType(): Promise<number>;
      set inputType(value: number | 'text' | 'textPassword' | 'number' | 'numberDecimal' | 'phone' | 'textEmailAddress');
      get checked(): Promise<boolean>;
      set checked(value: boolean);
      get enabled(): Promise<boolean>;
      set enabled(value: boolean);
      get visible(): Promise<boolean>;
      set visible(value: boolean);
      get visibility(): Promise<'visible' | 'invisible' | 'gone'>;
      set visibility(value: 'visible' | 'invisible' | 'gone');
      get alpha(): Promise<number>;
      set alpha(value: number);
      get contentDescription(): Promise<string | null>;
      set contentDescription(value: string | null);
      get clickable(): Promise<boolean>;
      set clickable(value: boolean);
      get focusable(): Promise<boolean>;
      set focusable(value: boolean);
      get width(): Promise<number>;
      set width(value: NativeDimension);
      get height(): Promise<number>;
      set height(value: NativeDimension);
      get padding(): Promise<readonly [number, number, number, number]>;
      set padding(value: NativeInsets);
      get margin(): Promise<readonly [number, number, number, number]>;
      set margin(value: NativeInsets);
      get backgroundColor(): Promise<number | null>;
      set backgroundColor(value: number | string);
      get gravity(): Promise<number>;
      set gravity(value: number | string);
      get layoutGravity(): Promise<number>;
      set layoutGravity(value: number | string);
      get weight(): Promise<number>;
      set weight(value: number);
      get orientation(): Promise<'horizontal' | 'vertical'>;
      set orientation(value: 'horizontal' | 'vertical');
      get min(): Promise<number>;
      set min(value: number);
      get max(): Promise<number>;
      set max(value: number);
      get progress(): Promise<number>;
      set progress(value: number);
      get indeterminate(): Promise<boolean>;
      set indeterminate(value: boolean);
      get rating(): Promise<number>;
      set rating(value: number);
      get numStars(): Promise<number>;
      set numStars(value: number);
      get stepSize(): Promise<number>;
      set stepSize(value: number);
      get isIndicator(): Promise<boolean>;
      set isIndicator(value: boolean);
      get items(): Promise<readonly JsonValue[]>;
      set items(value: readonly JsonValue[] | string);
      get selectedIndex(): Promise<number>;
      set selectedIndex(value: number);
      get checkedId(): Promise<string | null>;
      set checkedId(value: string | null);
      get textOn(): Promise<string>;
      set textOn(value: string);
      get textOff(): Promise<string>;
      set textOff(value: string);
      get value(): Promise<JsonValue>;
      set value(value: JsonValue);
      get wrapSelectorWheel(): Promise<boolean>;
      set wrapSelectorWheel(value: boolean);
      get displayedValues(): Promise<readonly string[] | null>;
      set displayedValues(value: readonly string[] | null);
      get cardCornerRadius(): Promise<number>;
      set cardCornerRadius(value: NativeDimension);
      get cardElevation(): Promise<number>;
      set cardElevation(value: NativeDimension);
      get src(): Promise<NativeImageSource | null>;
      set src(value: NativeImageSource | null);
      get scaleType(): Promise<string>;
      set scaleType(value: 'matrix' | 'fitXY' | 'fitStart' | 'fitCenter' | 'fitEnd' | 'center' | 'centerCrop' | 'centerInside' | 'MATRIX' | 'FIT_XY' | 'FIT_START' | 'FIT_CENTER' | 'FIT_END' | 'CENTER' | 'CENTER_CROP' | 'CENTER_INSIDE');
      get adjustViewBounds(): Promise<boolean>;
      set adjustViewBounds(value: boolean);
      readonly attached: Promise<boolean>;
      readonly layoutWidth: Promise<number>;
      readonly layoutHeight: Promise<number>;
      readonly drawableWidth: Promise<number>;
      readonly drawableHeight: Promise<number>;
      readonly xmlId: Promise<string | null>;
      get url(): Promise<string | null>;
      set url(value: string);
      get html(): Promise<string | null>;
      set html(value: string);
      get javaScriptEnabled(): Promise<boolean>;
      set javaScriptEnabled(value: boolean);
      get domStorageEnabled(): Promise<boolean>;
      set domStorageEnabled(value: boolean);
      get title(): Promise<string | null>;
      set title(value: string);
      get subtitle(): Promise<string>;
      set subtitle(value: string);
      get navigationIcon(): Promise<NativeDrawable | null>;
      set navigationIcon(value: NativeDrawable | null);
      get navigationContentDescription(): Promise<string>;
      set navigationContentDescription(value: string);
      get menu(): Promise<readonly ToolbarMenuItem[]>;
      set menu(value: readonly ToolbarMenuItem[]);
      get drawerLockMode(): Promise<'unlocked' | 'lockedClosed' | 'lockedOpen'>;
      set drawerLockMode(value: 'unlocked' | 'lockedClosed' | 'lockedOpen');
      get currentItem(): Promise<number>;
      set currentItem(value: number);
      get offscreenPageLimit(): Promise<number>;
      set offscreenPageLimit(value: number);
      readonly canGoBack: Promise<boolean>;
      readonly canGoForward: Promise<boolean>;
      readonly drawerOpenStart: Promise<boolean>;
      readonly drawerOpenEnd: Promise<boolean>;
      readonly pageCount: Promise<number>;
      /** Commands and assignments run in call order. Loading resolves when requested; observe pageFinished for completion. */
      loadUrl(url: string): Promise<void>;
      loadHtml(html: string, baseUrl?: string | null): Promise<void>;
      /** Requires javaScriptEnabled. Returns decoded JSON. UI operations may continue after submission while a dialog is pending. */
      evaluateJavascript(source: string, options?: WebEvaluationOptions): Promise<JsonValue>;
      /** Await a page expression/Promise and return its JSON result. DOM objects stay in the page. Default timeout 30000 ms, range 100..2147483647. Rejection, navigation, disposal and Worker exit reject the task. Timeout does not abort arbitrary page code. */
      evaluateJavascriptAsync(source: string, options?: WebEvaluationOptions): Promise<JsonValue>;
      /** Install an opt-in getDisplayMedia adapter in this page when the native method is absent. Produces real canvas MediaStream video backed by MediaProjection. Screen audio is unavailable. */
      enableDisplayCapture(options: WebDisplayCaptureOptions): Promise<WebDisplayCaptureRegistration>;
      /** Stop pending/active sharing and remove this page adapter. An optional registration ID prevents clearing a replacement. */
      disableDisplayCapture(id?: string): Promise<boolean>;
      /** End page media, foreground leases and display sharing, then navigate to about:blank. Reload before reuse. */
      stopMediaCapture(): Promise<boolean>;
      /** Native Camera2/MediaRecorder file capture, independent of WebView camera-track visibility. Start while visible; explicitly requests declared Android camera/microphone permissions and a foreground service. */
      startBackgroundRecording(options?: WebBackgroundRecordingOptions): Promise<WebBackgroundRecordingActive>;
      getBackgroundRecording(): Promise<WebBackgroundRecordingStatus>;
      stopBackgroundRecording(): Promise<WebBackgroundRecordingResult>;
      cancelBackgroundRecording(id?: string): Promise<boolean>;

      goBack(): Promise<void>; goForward(): Promise<void>; reload(): Promise<void>; stopLoading(): Promise<void>;
      openDrawer(side?: 'start' | 'end', animate?: boolean): Promise<void>;
      closeDrawer(side?: 'start' | 'end', animate?: boolean): Promise<void>;
      setCurrentItem(index: number, smoothScroll?: boolean): Promise<void>;
      showOverflowMenu(): Promise<boolean>; hideOverflowMenu(): Promise<boolean>;
      /** Installs local callbacks plus precomputed synchronous policies. Null resets that client. */
      setWebViewClient(client: WebViewClient | null, options?: WebViewClientOptions): Promise<void>;
      setWebChromeClient(client: WebChromeClient | null, options?: WebChromeClientOptions): Promise<void>;
      setDownloadListener(listener: ((this: NativeViewHandle, event: Readonly<WebDownloadEvent>) => unknown) | null): Promise<void>;
      /** Uses SAF open/multiple/save/tree selection, system photo/video capture or foreground audio recording. Resolves null on cancellation. */
      chooseFiles(options?: WebFileChooserOptions): Promise<readonly string[] | null>;
      cancelFileChooser(): Promise<void>;
      exitFullscreen(): Promise<boolean>;
      /** Starts an HTTP(S) DownloadManager task or a staged blob/data/content/SAF transfer. */
      download(options: WebDownloadOptions): Promise<WebDownload>;
      getDownload(id: WebDownloadId): Promise<WebDownloadState | null>;
      /** Cancels/removes a job. Completed explicit SAF output remains the user's document. */
      cancelDownload(id: WebDownloadId): Promise<boolean>;
      /** Reads a completed download, at most 32768 bytes per call. */
      readDownload(id: WebDownloadId, offset?: number, length?: number): Promise<Uint8Array>;
      /** Read up to 32768 bytes from a granted document or this View's temporary media capture. */
      readDocument(uri: string, offset?: number, length?: number): Promise<Uint8Array>;
      get(): Promise<NativeViewSnapshot>;
      get<K extends keyof NativeViewSnapshot>(name: K): Promise<NativeViewSnapshot[K]>;
      set(patch: NativeViewPatch): Promise<NativeViewSnapshot>;
      /** Waits for preceding assignments and rejects deferred native write errors. */
      flush(): Promise<void>;
      findView(id: string): Promise<NativeViewHandle | null>;
      /** Only the inflated root may be disposed, after all borrowing sessions close. */
      dispose(): Promise<void>;
      on(event: string, callback: (this: NativeViewHandle, event: UiEvent) => void): () => void;
      once(event: string, callback: (this: NativeViewHandle, event: UiEvent) => void): () => void;
      off(event: string, callback: (this: NativeViewHandle, event: UiEvent) => void): void;
    }
    export interface NativeUiHandle extends UiHandle {
      readonly rootView: NativeViewHandle;
      findView(id: string): Promise<NativeViewHandle | null>;
    }

    export interface UiModule {
      context(): Promise<UiContext>;
      inflate(layout: string | LayoutDescriptor, context?: UiContextToken): Promise<NativeViewHandle>;
      createView(type: LayoutType | (string & {}), props?: NativeViewCreateOptions, context?: UiContextToken): Promise<NativeViewHandle>;
      view(token: NativeViewToken): NativeViewHandle;
      findView(root: NativeViewToken | string, id: string): Promise<NativeViewHandle | null>;
      showLayout(layout: string | NativeViewToken, options?: UiShowOptions): Promise<NativeUiHandle>;
      showLayout(layoutJson: LayoutDescriptor, options?: UiShowOptions): Promise<UiHandle>;
      state<T extends Record<string, JsonValue>>(initial: T): UiState<T>;
      bind<T extends Record<string, JsonValue>, K extends keyof T & string>(state: UiState<T>, key: K): Binding<T[K]>;
    }
}

export namespace RuntimeCompose {
    type ComposeColorInput = string | number;
    type ComposeDpInput = number | `${number}dp`;
    type ComposeSpInput = number | `${number}sp`;
    type ComposeImageInput = { readonly __autojs6ImageHandle: string } | `@drawable/${string}`;
    type ComposeIconNameInput = string;
    type ComposeShapeInput = 'rectangle' | 'rounded' | 'circle' | { shape: 'rectangle' | 'rounded' | 'circle'; radius?: ComposeDpInput };
    interface ComposeTextStyleInput { fontFamily?: string; fontSize?: ComposeSpInput; fontWeight?: number; italic?: boolean; lineHeight?: ComposeSpInput; letterSpacing?: ComposeSpInput }
    type ComposePaddingInput = ComposeDpInput | readonly ComposeDpInput[];
    type ComposeBoxAlignment = 'topStart' | 'topCenter' | 'topEnd' | 'centerStart' | 'center' | 'centerEnd' | 'bottomStart' | 'bottomCenter' | 'bottomEnd';
    type NativeViewToken = RuntimeUi.NativeViewToken;
    interface ViewFactoryContext extends importContext {
        inflate(layout: string | RuntimeUi.LayoutDescriptor): Promise<NativeViewToken>;
        createView(type: string, props?: RuntimeUi.LayoutPatch): Promise<NativeViewToken>;
    }
    type importContext = RuntimeUi.UiContextToken;
    type ComponentName = ComposeCatalogNodeName | ComposeV2NodeName | "AndroidView";
    interface Catalog extends ComposeCatalogProps, ComposeV2CatalogProps {
        AndroidView: { view: NativeViewToken | ((context: ViewFactoryContext) => NativeViewToken | Promise<NativeViewToken>) };
    }
    interface Event { readonly type: string; readonly text?: string; readonly value?: number; readonly checked?: boolean; readonly editSeq?: number; readonly message?: string; readonly [key: string]: string | number | boolean | null | undefined }
    type Listener = (this: Node, event: Event) => void;
    type Child = Node | string | null | undefined | false | readonly Child[];
    interface Ref { current: Node | null }
    interface State<T> { value: T }
    interface SharedProps {
        key?: string | number; ref?: Ref; modifier?: Modifier; children?: Child;
        slots?: Readonly<Record<string, Child>>;
        w?: ComposeDpInput; h?: ComposeDpInput; padding?: ComposePaddingInput; bg?: ComposeColorInput;
        weight?: number; alpha?: number; testTag?: string; contentDescription?: string | null;
        [event: `on${string}`]: Listener | undefined;
    }
    type Props<N extends ComponentName> = Catalog[N] & SharedProps;
    interface Node<N extends ComponentName = ComponentName> {
        set(value: Partial<Props<N>>): this;
        get<K extends keyof Props<N>>(name: K): Props<N>[K];
        append(value: Child): this; insert(index: number, value: Child): this; remove(value: Node | number): this;
        replace(value: Child): this; clear(): this; slot(name: string, value: Child): this;
        on(name: string, callback: Listener): this; off(name: string, callback?: Listener): this;
        focus(): Promise<void>; blur(): Promise<void>;
        scrollTo(target: number | { index?: number; offset?: number }): Promise<void>;
        edit(value: { text?: string; selection?: { start: number; end: number } }): Promise<void>;
    }
    interface Theme { seed?: ComposeColorInput; colors?: Readonly<Record<string, ComposeColorInput>>; dark?: boolean | 'system'; dynamicColor?: boolean; typography?: { fontFamily?: string; scale?: number } }
    interface Options { theme?: Theme }
    interface DialogOptions extends Options { type?: 'alert' | 'bottomSheet'; cancelable?: boolean }
    /** Floating dimensions/position use physical pixels; -1/-2 select match/wrap content. */
    interface FloatyOptions extends Options { width?: number; height?: number; x?: number; y?: number; focusable?: boolean; touchable?: boolean }
    interface Session {
        readonly id: string; readonly root: Node | null; isClosed(): boolean;
        update<T>(callback: () => T): T; flush(): Promise<void>;
        render(root: Node | (() => Node)): Promise<void>; setTheme(theme: Theme): Promise<void>;
        post(callback: () => void, delay?: number): void;
        on(event: string, callback: (event: Event) => void): this; off(event: string, callback: (event: Event) => void): this;
        close(): Promise<void>;
        /** Requires a Scaffold with the default snackbar host; delivers one terminal callback. */
        showSnackbar(message: string, options?: { actionLabel?: string; duration?: 'short' | 'long' | 'indefinite'; onAction?: () => void; onDismiss?: () => void }): Promise<void>;
    }
    interface FloatySession extends Session {
        readonly session: Session;
        setPosition(x: number, y: number): Promise<void>; setSize(width: number, height: number): Promise<void>;
        requestFocus(): Promise<void>; disableFocus(): Promise<void>; setTouchable(touchable: boolean): Promise<void>;
        getX(): Promise<number>; getY(): Promise<number>; getWidth(): Promise<number>; getHeight(): Promise<number>;
    }
    interface Modifier {
        padding(all: ComposeDpInput): Modifier;
        padding(horizontal: ComposeDpInput, vertical: ComposeDpInput): Modifier;
        padding(start: ComposeDpInput, top: ComposeDpInput, end: ComposeDpInput, bottom: ComposeDpInput): Modifier;
        size(size: ComposeDpInput): Modifier;
        size(width: ComposeDpInput, height: ComposeDpInput): Modifier;
        width(width: ComposeDpInput): Modifier;
        height(height: ComposeDpInput): Modifier;
        fillMaxWidth(fraction?: number): Modifier;
        fillMaxHeight(fraction?: number): Modifier;
        fillMaxSize(fraction?: number): Modifier;
        /** Requires a Column/Row parent. */
        weight(weight: number, fill?: boolean): Modifier;
        /** Requires a Box parent. */
        align(alignment: ComposeBoxAlignment): Modifier;
        background(color: ComposeColorInput, shape?: ComposeShapeInput): Modifier;
        border(width: ComposeDpInput, color: ComposeColorInput, shape?: ComposeShapeInput): Modifier;
        clip(shape: ComposeShapeInput): Modifier;
        alpha(alpha: number): Modifier;
        clickable(callback: Listener, enabled?: boolean): Modifier;
        verticalScroll(enabled?: boolean): Modifier;
        horizontalScroll(enabled?: boolean): Modifier;
        offset(x: ComposeDpInput, y: ComposeDpInput): Modifier;
        aspectRatio(ratio: number): Modifier;
        testTag(tag: string): Modifier;
        semantics(contentDescription: string | null): Modifier;
    }
    interface ComposeCatalogProps {
        /** @invocation NODE @children NONE @scope ANY */
        "AlertDialog": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "open"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "shape"?: ComposeShapeInput;
        };
        /** @invocation NODE @children MANY @scope BOX */
        "Box": {
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"topStart"},"update":"SET_PROPS"} */
            "alignment"?: "bottomCenter" | "bottomEnd" | "bottomStart" | "center" | "centerEnd" | "centerStart" | "topCenter" | "topEnd" | "topStart";
            /** @aliasFor alignment */
            "contentAlignment"?: "bottomCenter" | "bottomEnd" | "bottomStart" | "center" | "centerEnd" | "centerStart" | "topCenter" | "topEnd" | "topStart";
        };
        /** @invocation NODE @children MANY @scope ANY */
        "Button": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "shape"?: ComposeShapeInput;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "Card": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "color"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{"minimum":0.0},"default":null,"update":"SET_PROPS"} */
            "elevation"?: ComposeDpInput;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "shape"?: ComposeShapeInput;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "Checkbox": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "checked"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "CircularProgressIndicator": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "color"?: ComposeColorInput | null;
            /** @catalog {"constraints":{"maximum":1.0,"minimum":0.0},"default":{"kind":"NULL","value":null},"update":"SET_PROPS"} */
            "progress"?: null | number;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "trackColor"?: ComposeColorInput | null;
        };
        /** @invocation NODE @children MANY @scope COLUMN_ROW */
        "Column": {
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"start"},"update":"SET_PROPS"} */
            "alignment"?: "center" | "end" | "start";
            /** @aliasFor alignment */
            "horizontalAlignment"?: "center" | "end" | "start";
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"top"},"update":"SET_PROPS"} */
            "arrangement"?: "bottom" | "center" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "top";
            /** @aliasFor arrangement */
            "verticalArrangement"?: "bottom" | "center" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "top";
            /** @catalog {"constraints":{"minimum":0.0},"default":{"kind":"DP","value":0.0},"update":"SET_PROPS"} */
            "spacing"?: ComposeDpInput;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "ElevatedButton": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "shape"?: ComposeShapeInput;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "FilledTonalButton": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "shape"?: ComposeShapeInput;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "HorizontalDivider": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "color"?: ComposeColorInput | null;
            /** @catalog {"constraints":{"minimum":0.0},"default":{"kind":"DP","value":1.0},"update":"SET_PROPS"} */
            "thickness"?: ComposeDpInput;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "Icon": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "name": ComposeIconNameInput;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "tint"?: ComposeColorInput | null;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "IconButton": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "shape"?: ComposeShapeInput;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "Image": {
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"fit"},"update":"SET_PROPS"} */
            "contentScale"?: "crop" | "fillBounds" | "fillHeight" | "fillWidth" | "fit" | "inside" | "none";
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "src": ComposeImageInput;
        };
        /** @invocation NODE @children LAZY_ITEMS @scope ANY */
        "LazyColumn": {
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"start"},"update":"SET_PROPS"} */
            "alignment"?: "center" | "end" | "start";
            /** @aliasFor alignment */
            "horizontalAlignment"?: "center" | "end" | "start";
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"top"},"update":"SET_PROPS"} */
            "arrangement"?: "bottom" | "center" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "top";
            /** @aliasFor arrangement */
            "verticalArrangement"?: "bottom" | "center" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "top";
            /** @catalog {"constraints":{"listKinds":["DP"],"listMaximum":4,"listMinimum":1},"default":{"kind":"DP","value":0.0},"update":"SET_PROPS"} */
            "contentPadding"?: ComposeDpInput | ReadonlyArray<ComposeDpInput>;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "reverseLayout"?: boolean;
            /** @catalog {"constraints":{"minimum":0.0},"default":{"kind":"DP","value":0.0},"update":"SET_PROPS"} */
            "spacing"?: ComposeDpInput;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "userScrollEnabled"?: boolean;
        };
        /** @invocation NODE @children LAZY_ITEMS @scope ANY */
        "LazyRow": {
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"top"},"update":"SET_PROPS"} */
            "alignment"?: "bottom" | "center" | "top";
            /** @aliasFor alignment */
            "verticalAlignment"?: "bottom" | "center" | "top";
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"start"},"update":"SET_PROPS"} */
            "arrangement"?: "center" | "end" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "start";
            /** @aliasFor arrangement */
            "horizontalArrangement"?: "center" | "end" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "start";
            /** @catalog {"constraints":{"listKinds":["DP"],"listMaximum":4,"listMinimum":1},"default":{"kind":"DP","value":0.0},"update":"SET_PROPS"} */
            "contentPadding"?: ComposeDpInput | ReadonlyArray<ComposeDpInput>;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "reverseLayout"?: boolean;
            /** @catalog {"constraints":{"minimum":0.0},"default":{"kind":"DP","value":0.0},"update":"SET_PROPS"} */
            "spacing"?: ComposeDpInput;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "userScrollEnabled"?: boolean;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "LinearProgressIndicator": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "color"?: ComposeColorInput | null;
            /** @catalog {"constraints":{"maximum":1.0,"minimum":0.0},"default":{"kind":"NULL","value":null},"update":"SET_PROPS"} */
            "progress"?: null | number;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "trackColor"?: ComposeColorInput | null;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "OutlinedButton": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "shape"?: ComposeShapeInput;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "OutlinedTextField": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"default"},"update":"SET_PROPS"} */
            "imeAction"?: "default" | "done" | "go" | "next" | "none" | "previous" | "search" | "send";
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "isError"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"text"},"update":"SET_PROPS"} */
            "keyboardType"?: "ascii" | "decimal" | "email" | "number" | "numberPassword" | "password" | "phone" | "text" | "uri";
            /** @catalog {"constraints":{"integral":true,"maximum":2147483647.0,"minimum":1.0},"default":{"kind":"NUMBER","value":2147483647.0},"update":"SET_PROPS"} */
            "maxLines"?: number;
            /** @catalog {"constraints":{"integral":true,"maximum":2147483647.0,"minimum":1.0},"default":{"kind":"NUMBER","value":1.0},"update":"SET_PROPS"} */
            "minLines"?: number;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "readOnly"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "singleLine"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "style"?: "bodyLarge" | "bodyMedium" | "bodySmall" | "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "titleLarge" | "titleMedium" | "titleSmall" | ComposeTextStyleInput;
            /** @catalog {"constraints":{},"default":{"kind":"STRING","value":""},"update":"EDIT_COMMAND"} */
            "text"?: string;
            /** @aliasFor text */
            "value"?: string;
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"none"},"update":"SET_PROPS"} */
            "visualTransformation"?: "none" | "password";
        };
        /** @invocation NODE @children NONE @scope ANY */
        "RadioButton": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "checked"?: boolean;
            /** @aliasFor checked */
            "selected"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
        };
        /** @invocation NODE @children MANY @scope COLUMN_ROW */
        "Row": {
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"top"},"update":"SET_PROPS"} */
            "alignment"?: "bottom" | "center" | "top";
            /** @aliasFor alignment */
            "verticalAlignment"?: "bottom" | "center" | "top";
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"start"},"update":"SET_PROPS"} */
            "arrangement"?: "center" | "end" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "start";
            /** @aliasFor arrangement */
            "horizontalArrangement"?: "center" | "end" | "spaceAround" | "spaceBetween" | "spaceEvenly" | "start";
            /** @catalog {"constraints":{"minimum":0.0},"default":{"kind":"DP","value":0.0},"update":"SET_PROPS"} */
            "spacing"?: ComposeDpInput;
        };
        /** @invocation NODE @children SINGLE @scope ANY */
        "Scaffold": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "Slider": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{"listKinds":["NUMBER"],"listMaximum":2,"listMinimum":2},"default":{"kind":"LIST","value":[{"kind":"NUMBER","value":0.0},{"kind":"NUMBER","value":1.0}]},"update":"SET_PROPS"} */
            "range"?: readonly [number, number];
            /** @catalog {"constraints":{"integral":true,"maximum":2147483647.0,"minimum":0.0},"default":{"kind":"NUMBER","value":0.0},"update":"SET_PROPS"} */
            "steps"?: number;
            /** @catalog {"constraints":{"maximum":3.4028234663852886e+38,"minimum":-3.4028234663852886e+38},"default":{"kind":"NUMBER","value":0.0},"update":"SET_PROPS"} */
            "value"?: number;
        };
        /** @invocation COMMAND @children NONE @scope ANY */
        "Snackbar": {
            /** @catalog {"constraints":{},"default":{"kind":"NULL","value":null},"update":"SET_PROPS"} */
            "actionLabel"?: null | string;
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"short"},"update":"SET_PROPS"} */
            "duration"?: "indefinite" | "long" | "short";
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "message": string;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "Spacer": {
        };
        /** @invocation NODE @children SINGLE @scope ANY */
        "Surface": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "color"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":{"kind":"SHAPE","value":{"radius":0.0,"shape":"RECTANGLE"}},"update":"SET_PROPS"} */
            "shape"?: ComposeShapeInput;
            /** @catalog {"constraints":{"minimum":0.0},"default":{"kind":"DP","value":0.0},"update":"SET_PROPS"} */
            "tonalElevation"?: ComposeDpInput;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "Switch": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "checked"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "Text": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "color"?: ComposeColorInput | null;
            /** @catalog {"constraints":{"minimum":0.0,"minimumExclusive":true},"default":null,"update":"SET_PROPS"} */
            "fontSize"?: ComposeSpInput;
            /** @catalog {"constraints":{"integral":true,"maximum":1000.0,"minimum":1.0},"default":null,"update":"SET_PROPS"} */
            "fontWeight"?: number;
            /** @catalog {"constraints":{"integral":true,"maximum":2147483647.0,"minimum":1.0},"default":{"kind":"NUMBER","value":2147483647.0},"update":"SET_PROPS"} */
            "maxLines"?: number;
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"clip"},"update":"SET_PROPS"} */
            "overflow"?: "clip" | "ellipsis" | "visible";
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "selectable"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "style"?: "bodyLarge" | "bodyMedium" | "bodySmall" | "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "titleLarge" | "titleMedium" | "titleSmall" | ComposeTextStyleInput;
            /** @catalog {"constraints":{},"default":{"kind":"STRING","value":""},"update":"SET_PROPS"} */
            "text"?: string;
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"start"},"update":"SET_PROPS"} */
            "textAlign"?: "center" | "end" | "justify" | "left" | "right" | "start";
        };
        /** @invocation NODE @children MANY @scope ANY */
        "TextButton": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "shape"?: ComposeShapeInput;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "TextField": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"default"},"update":"SET_PROPS"} */
            "imeAction"?: "default" | "done" | "go" | "next" | "none" | "previous" | "search" | "send";
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "isError"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"text"},"update":"SET_PROPS"} */
            "keyboardType"?: "ascii" | "decimal" | "email" | "number" | "numberPassword" | "password" | "phone" | "text" | "uri";
            /** @catalog {"constraints":{"integral":true,"maximum":2147483647.0,"minimum":1.0},"default":{"kind":"NUMBER","value":2147483647.0},"update":"SET_PROPS"} */
            "maxLines"?: number;
            /** @catalog {"constraints":{"integral":true,"maximum":2147483647.0,"minimum":1.0},"default":{"kind":"NUMBER","value":1.0},"update":"SET_PROPS"} */
            "minLines"?: number;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "readOnly"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "singleLine"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "style"?: "bodyLarge" | "bodyMedium" | "bodySmall" | "displayLarge" | "displayMedium" | "displaySmall" | "headlineLarge" | "headlineMedium" | "headlineSmall" | "labelLarge" | "labelMedium" | "labelSmall" | "titleLarge" | "titleMedium" | "titleSmall" | ComposeTextStyleInput;
            /** @catalog {"constraints":{},"default":{"kind":"STRING","value":""},"update":"EDIT_COMMAND"} */
            "text"?: string;
            /** @aliasFor text */
            "value"?: string;
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"none"},"update":"SET_PROPS"} */
            "visualTransformation"?: "none" | "password";
        };
        /** @invocation NODE @children NONE @scope ANY */
        "TopAppBar": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
        };
    }
    interface ComposeV2CatalogProps {
        /** @invocation NODE @children NONE @scope ANY */
        "AssistChip": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
        };
        /** @invocation NODE @children SINGLE @scope ANY */
        "Badge": {
            /** @catalog {"constraints":{},"default":{"kind":"STRING","value":""},"update":"SET_PROPS"} */
            "text"?: string;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "visible"?: boolean;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "DatePicker": {
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"picker"},"update":"SET_PROPS"} */
            "displayMode"?: "input" | "picker";
            /** @catalog {"constraints":{"integral":true,"maximum":253402214400000.0,"minimum":-12212553600000.0},"default":{"kind":"NULL","value":null},"update":"SET_PROPS"} */
            "selectedDateMillis"?: null | number;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "showModeToggle"?: boolean;
            /** @catalog {"constraints":{"integral":true,"maximum":9999.0,"minimum":1583.0},"default":{"kind":"NUMBER","value":2100.0},"update":"SET_PROPS"} */
            "yearEnd"?: number;
            /** @catalog {"constraints":{"integral":true,"maximum":9999.0,"minimum":1583.0},"default":{"kind":"NUMBER","value":1900.0},"update":"SET_PROPS"} */
            "yearStart"?: number;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "DropdownMenu": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "open"?: boolean;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "DropdownMenuItem": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "FilterChip": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "selected"?: boolean;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "FloatingActionButton": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "shape"?: ComposeShapeInput;
        };
        /** @invocation NODE @children LAZY_ITEMS @scope ANY */
        "HorizontalPager": {
            /** @catalog {"constraints":{"integral":true,"maximum":2147483647.0,"minimum":0.0},"default":{"kind":"NUMBER","value":0.0},"update":"SET_PROPS"} */
            "page"?: number;
            /** @catalog {"constraints":{"minimum":0.0},"default":{"kind":"DP","value":0.0},"update":"SET_PROPS"} */
            "pageSpacing"?: ComposeDpInput;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "userScrollEnabled"?: boolean;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "InputChip": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "selected"?: boolean;
        };
        /** @invocation NODE @children LAZY_ITEMS @scope ANY */
        "LazyVerticalGrid": {
            /** @catalog {"constraints":{"integral":true,"maximum":64.0,"minimum":1.0},"default":{"kind":"NUMBER","value":2.0},"update":"SET_PROPS"} */
            "columns"?: number;
            /** @catalog {"constraints":{"listKinds":["DP"],"listMaximum":4,"listMinimum":1},"default":{"kind":"DP","value":0.0},"update":"SET_PROPS"} */
            "contentPadding"?: ComposeDpInput | ReadonlyArray<ComposeDpInput>;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "reverseLayout"?: boolean;
            /** @catalog {"constraints":{"minimum":0.0},"default":{"kind":"DP","value":0.0},"update":"SET_PROPS"} */
            "spacing"?: ComposeDpInput;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "userScrollEnabled"?: boolean;
        };
        /** @invocation NODE @children SINGLE @scope ANY */
        "ModalBottomSheet": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "cancelable"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "open"?: boolean;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "shape"?: ComposeShapeInput;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "NavigationBar": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "NavigationBarItem": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "alwaysShowLabel"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "selected"?: boolean;
        };
        /** @invocation NODE @children SINGLE @scope ANY */
        "NavigationDrawer": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "gesturesEnabled"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "open"?: boolean;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "NavigationDrawerItem": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "selected"?: boolean;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "NavigationRail": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "NavigationRailItem": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "alwaysShowLabel"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "selected"?: boolean;
        };
        /** @invocation NODE @children SINGLE @scope ANY */
        "PullToRefresh": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "refreshing"?: boolean;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "SearchBar": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "expanded"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"STRING","value":""},"update":"SET_PROPS"} */
            "query"?: string;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "SegmentedButton": {
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"single"},"update":"SET_PROPS"} */
            "mode"?: "multi" | "single";
        };
        /** @invocation NODE @children NONE @scope ANY */
        "SegmentedButtonItem": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "selected"?: boolean;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "Tab": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "enabled"?: boolean;
        };
        /** @invocation NODE @children MANY @scope ANY */
        "TabRow": {
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "containerColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":null,"update":"SET_PROPS"} */
            "contentColor"?: ComposeColorInput | null;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "scrollable"?: boolean;
            /** @catalog {"constraints":{"integral":true,"maximum":2147483647.0,"minimum":0.0},"default":{"kind":"NUMBER","value":0.0},"update":"SET_PROPS"} */
            "selectedIndex"?: number;
        };
        /** @invocation NODE @children NONE @scope ANY */
        "TimePicker": {
            /** @catalog {"constraints":{},"default":{"kind":"ENUM","value":"picker"},"update":"SET_PROPS"} */
            "displayMode"?: "input" | "picker";
            /** @catalog {"constraints":{"integral":true,"maximum":23.0,"minimum":0.0},"default":{"kind":"NUMBER","value":0.0},"update":"SET_PROPS"} */
            "hour"?: number;
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":true},"update":"SET_PROPS"} */
            "is24Hour"?: boolean;
            /** @catalog {"constraints":{"integral":true,"maximum":59.0,"minimum":0.0},"default":{"kind":"NUMBER","value":0.0},"update":"SET_PROPS"} */
            "minute"?: number;
        };
        /** @invocation NODE @children SINGLE @scope ANY */
        "Tooltip": {
            /** @catalog {"constraints":{},"default":{"kind":"BOOLEAN","value":false},"update":"SET_PROPS"} */
            "open"?: boolean;
        };
    }
    type ComposeCatalogNodeName = "AlertDialog" | "Box" | "Button" | "Card" | "Checkbox" | "CircularProgressIndicator" | "Column" | "ElevatedButton" | "FilledTonalButton" | "HorizontalDivider" | "Icon" | "IconButton" | "Image" | "LazyColumn" | "LazyRow" | "LinearProgressIndicator" | "OutlinedButton" | "OutlinedTextField" | "RadioButton" | "Row" | "Scaffold" | "Slider" | "Spacer" | "Surface" | "Switch" | "Text" | "TextButton" | "TextField" | "TopAppBar";
    type ComposeV2NodeName = "AssistChip" | "Badge" | "DatePicker" | "DropdownMenu" | "DropdownMenuItem" | "FilterChip" | "FloatingActionButton" | "HorizontalPager" | "InputChip" | "LazyVerticalGrid" | "ModalBottomSheet" | "NavigationBar" | "NavigationBarItem" | "NavigationDrawer" | "NavigationDrawerItem" | "NavigationRail" | "NavigationRailItem" | "PullToRefresh" | "SearchBar" | "SegmentedButton" | "SegmentedButtonItem" | "Tab" | "TabRow" | "TimePicker" | "Tooltip";

    interface Core {
        (root: Node | (() => Node), options?: Options): Promise<Session>;
        createElement<N extends ComponentName>(type: N, props?: Props<N> | null, ...children: Child[]): Node<N>;
        state<T>(initial: T): State<T>; ref(): Ref; modifier(): Modifier;
        batch<T>(callback: () => T): T;
        memo<T extends Node>(build: () => T, dependencies: readonly unknown[], options?: { key?: string | number }): T;
        post(callback: () => void, delay?: number): unknown;
        mount(root: Node | (() => Node), options?: Options): Promise<Session>;
        attach(container: NativeViewToken, root: Node | (() => Node), options?: Options): Promise<Session>;
        dialog(root: Node | (() => Node), options?: DialogOptions): Promise<Session>;
        floaty(root: Node | (() => Node), options?: FloatyOptions): Promise<FloatySession>;
        isAvailable(): Promise<boolean>;
        version(): Promise<{ plugin: number; contract: number; compose: string }>;
        theme(): Theme | undefined; theme(value: Theme): Theme;
        readonly sessions: readonly Session[];
    }
    type Api = Core & { readonly [N in ComponentName]: (props?: Props<N> | null, ...children: Child[]) => Node<N> };
}
