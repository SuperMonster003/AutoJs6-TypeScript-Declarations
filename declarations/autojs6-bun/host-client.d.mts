/** Types for the explicit SDK module at process.env.AUTOJS6_HOST_CLIENT_MODULE. */
export declare const SDK_VERSION: 1;
export type HostCapability = "agent.control" | "ai.control" | "flow.control" | "mail.control" | "epub.control" | "speech.control" | "tts.control" | "java.interop" | "android.objects" | "tasks.control" | "device.control" | "device.power" | "device.audio" | "dialogs.control" | "events.observe" | "events.notification" | "events.toast" | "events.key" | "notifications.post" | "notifications.settings" | "database.control" | "shell.control" | "shell.root" | "shell.shizuku" | "sensors.control" | "files.control" | "storage.control" | "app.control" | "accessibility.control" | "accessibility.gesture" | "clipboard.control" | "ui.layout" | "ui.compose" | "screen.record.microphone" | "screen.record.playback" | "ui.toast" | "device.info" | "text.pinyin" | "text.pinyin4j" | "text.opencc" | "image.process" | "image.files" | "screen.capture" | "screen.record" | "screen.metrics" | "console.control";
export type JsonValue = null | boolean | number | string | readonly JsonValue[] | { readonly [key: string]: JsonValue };
export declare class HostCallError extends Error {
  readonly code: string;
  readonly capability: string | null;
  readonly status: number;
  constructor(code: string, message: string, capability?: string | null, status?: number);
}
export declare const HOST_API_METHODS: Readonly<Record<"agent.control" | "ai.control" | "flow.control" | "mail.control" | "epub.control" | "speech.control" | "tts.control" | "java.interop" | "android.objects" | "tasks.control" | "device.control" | "device.audio" | "dialogs.control" | "events.observe" | "notifications.post" | "database.control" | "shell.control" | "sensors.control" | "files.control" | "storage.control" | "app.control" | "accessibility.control" | "clipboard.control" | "text.pinyin" | "text.pinyin4j" | "text.opencc" | "image.process" | "image.files" | "screen.capture" | "screen.record" | "screen.metrics" | "console.control", readonly string[]>>;
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

// BEGIN GENERATED JAVA TYPES
export namespace RuntimeJava {
    interface CallOptions extends AutomationCallOptions {
      /** Exact JVM parameter names, e.g. ["int", "java.lang.String", "byte[]"]. Varargs use an explicit array. */
      parameterTypes?: readonly string[];
      /** Use main for Android Views and other APIs requiring the main Looper. */
      thread?: "default" | "main";
    }
    type Argument = null | undefined | string | number | boolean | bigint | HandleSnapshot | TypedValue | readonly Argument[] | ArrayBufferView;
    interface TypedValue { readonly __autojs6JavaType: string; readonly value: Argument; }
    interface HandleSnapshot {
      readonly __autojs6JavaHandle: string;
      readonly className: string;
      /** Creation-time field snapshot. Read live values using getField. */
      readonly value?: Readonly<Record<string, unknown>>;
    }
    type Target = string | HandleSnapshot;
    interface ObjectHandle extends HandleSnapshot {
      /** Keep a separate reference to a borrowed callback argument beyond its invocation. */
      retain(options?: CallOptions): Promise<ObjectHandle>;
      call<T = unknown>(method: string, args?: readonly Argument[], options?: CallOptions): Promise<T>;
      callInstance<T = unknown>(method: string, args?: readonly Argument[], options?: CallOptions): Promise<T>;
      getField<T = unknown>(field: string, options?: CallOptions): Promise<T>;
      setField(field: string, value: Argument, options?: CallOptions): Promise<boolean>;
      getClassName(options?: CallOptions): Promise<string>;
      instanceOf(className: string | ClassDescriptor, options?: CallOptions): Promise<boolean>;
      arrayLength(options?: CallOptions): Promise<number>;
      getArrayItem<T = unknown>(index: number, options?: CallOptions): Promise<T>;
      setArrayItem(index: number, value: Argument, options?: CallOptions): Promise<boolean>;
      toArray<T = unknown>(options?: CallOptions): Promise<readonly T[]>;
      /** Drops this reference only; call close/recycle explicitly for native resources. */
      release(options?: CallOptions): Promise<boolean>;
      dispose(options?: CallOptions): Promise<boolean>;
      toJSON(): HandleSnapshot;
    }
    interface ClassSpec {
      readonly className: string;
      readonly explicit: boolean;
      readonly constructable: boolean;
      readonly staticMethods: readonly string[];
      readonly instanceMethods: readonly string[];
      readonly staticFields: readonly string[];
      readonly instanceFields: readonly string[];
      readonly fields: readonly string[];
      readonly constructors?: readonly string[];
      readonly methods?: readonly string[];
    }
    interface Policy {
      readonly enabled: boolean;
      readonly limitsEnforcedBy: "host_provider";
      readonly published: boolean;
      /** Current hosts use public members; old hosts can still publish an allowlist. */
      readonly access?: "public";
      readonly allowedClasses: readonly string[];
      readonly deniedClassPrefixes: readonly string[];
      readonly classes: Readonly<Record<string, ClassSpec>>;
    }
    interface ClassDescriptor {
      readonly className: string;
      readonly name: string;
      readonly loader?: string;
      callStatic<T = unknown>(method: string, args?: readonly Argument[], options?: CallOptions): Promise<T>;
      "new"(args?: readonly Argument[], options?: CallOptions): Promise<ObjectHandle>;
      create(args?: readonly Argument[], options?: CallOptions): Promise<ObjectHandle>;
      getStatic<T = unknown>(field: string, options?: CallOptions): Promise<T>;
      setStatic(field: string, value: Argument, options?: CallOptions): Promise<boolean>;
      describe(options?: CallOptions): Promise<ClassSpec>;
    }
    interface CallbackContext {
      readonly java: API;
      /** Borrowed until this callback settles. Use retain to keep it. */
      readonly receiver: ObjectHandle;
      readonly method: string;
      readonly signature: string;
      /** Call the concrete superclass implementation for the current override. */
      callSuper<T = unknown>(...args: Argument[]): Promise<T>;
    }
    type Callback = (this: CallbackContext, ...args: any[]) => Argument | void | Promise<Argument | void>;
    type Implementation = Readonly<Record<string, Callback>> & ThisType<CallbackContext>;
    interface CallbackOptions extends Omit<CallOptions, "thread" | "parameterTypes"> {
      /** Java waits for this duration; default 5000 ms, range 1..120000. */
      callbackTimeoutMs?: number;
      /** Local error notification. Synchronous bridge calls also reject on callback failure. */
      onError?: (error: unknown, invocation: unknown) => void;
    }
    interface ClassDefinition {
      /** Omit for a unique generated class name. */
      name?: string;
      extends?: string | ClassDescriptor;
      interfaces?: readonly (string | ClassDescriptor)[];
      /** Method name or exact signature such as compare(java.lang.Object,java.lang.Object). */
      methods?: Implementation;
    }
    interface GeneratedClass extends ClassDescriptor, ObjectHandle {}
    interface ClassLoaderHandle extends ObjectHandle {
      readonly paths: readonly string[];
      type(className: string): ClassDescriptor;
      findClass(className: string): ClassDescriptor;
    }
    interface API {
      readonly policy: Policy;
      /** Local descriptor; describe performs class lookup in the host. */
      type(className: string): ClassDescriptor;
      findClass(className: string): ClassDescriptor;
      cast(type: string | ClassDescriptor, value: Argument): TypedValue;
      callStatic<T = unknown>(type: string | ClassDescriptor, method: string, args?: readonly Argument[], options?: CallOptions): Promise<T>;
      "new"(type: string | ClassDescriptor, args?: readonly Argument[], options?: CallOptions): Promise<ObjectHandle>;
      create(type: string | ClassDescriptor, args?: readonly Argument[], options?: CallOptions): Promise<ObjectHandle>;
      call<T = unknown>(target: Target, method: string, args?: readonly Argument[], options?: CallOptions): Promise<T>;
      callInstance<T = unknown>(target: Target, method: string, args?: readonly Argument[], options?: CallOptions): Promise<T>;
      getField<T = unknown>(target: Target, field: string, options?: CallOptions): Promise<T>;
      setField(target: Target, field: string, value: Argument, options?: CallOptions): Promise<boolean>;
      getStatic<T = unknown>(type: string | ClassDescriptor, field: string, options?: CallOptions): Promise<T>;
      setStatic(type: string | ClassDescriptor, field: string, value: Argument, options?: CallOptions): Promise<boolean>;
      describe(type: string | ClassDescriptor, options?: CallOptions): Promise<ClassSpec>;
      /** The application Context of the host or generated app, never an Activity. Release after use. */
      getContext(options?: CallOptions): Promise<ObjectHandle>;
      newArray(componentType: string | ClassDescriptor, lengthOrValues: number | readonly Argument[] | ArrayBufferView, options?: CallOptions): Promise<ObjectHandle>;
      arrayLength(target: Target, options?: CallOptions): Promise<number>;
      getArrayItem<T = unknown>(target: Target, index: number, options?: CallOptions): Promise<T>;
      setArrayItem(target: Target, index: number, value: Argument, options?: CallOptions): Promise<boolean>;
      toArray<T = unknown>(target: Target, options?: CallOptions): Promise<readonly T[]>;
      getClassName(target: Target, options?: CallOptions): Promise<string>;
      instanceOf(target: Target, type: string | ClassDescriptor, options?: CallOptions): Promise<boolean>;
      release(target: Target, options?: CallOptions): Promise<boolean>;
      dispose(target: Target, options?: CallOptions): Promise<boolean>;
      retain(target: Target, options?: CallOptions): Promise<ObjectHandle>;
      /** Creates a generated implementation of public interfaces, including inherited default methods. */
      proxy(interfaces: string | ClassDescriptor | readonly (string | ClassDescriptor)[], implementation: Implementation | Callback, options?: CallbackOptions): Promise<ObjectHandle>;
      defineClass(definition: ClassDefinition, options?: CallbackOptions): Promise<GeneratedClass>;
      /** Host paths, relative to the execution directory. Code is copied into private read-only storage. */
      loadDex(paths: string | readonly string[], options?: CallOptions): Promise<ClassLoaderHandle>;
      /** Compiles Java class files in JARs with the host's local dexer. Default timeout 120000 ms. */
      loadJar(paths: string | readonly string[], options?: CallOptions): Promise<ClassLoaderHandle>;
      wrap(callback: Callback, interfaceName?: string, options?: CallbackOptions): Promise<ObjectHandle>;
      /** Stops this facade's callback registrations and its event pump. */
      closeCallbacks(): Promise<void>;
    }
  }
// END GENERATED JAVA TYPES

// BEGIN GENERATED TTS TYPES
export namespace RuntimeTts {
    interface API {

        (text: string, options?: SpeechOptions, callOptions?: AutomationCallOptions): Promise<Result>;

        readonly maxInputLength: 3999;
        readonly maxSynthesisFileSize: 536870912;
        readonly QUEUE_FLUSH: 'flush';
        readonly QUEUE_ADD: 'add';

        speak(text: string, options?: SpeechOptions, callOptions?: AutomationCallOptions): Promise<Result>;
        enqueue(text: string, options?: SpeechOptions, callOptions?: AutomationCallOptions): Promise<Result>;

        utterance(text: string, options?: SpeechOptions, callOptions?: AutomationCallOptions): Promise<Utterance>;
        speakTask(text: string, options?: SpeechOptions, callOptions?: AutomationCallOptions): Promise<Utterance>;
        enqueueUtterance(text: string, options?: SpeechOptions, callOptions?: AutomationCallOptions): Promise<Utterance>;
        enqueueTask(text: string, options?: SpeechOptions, callOptions?: AutomationCallOptions): Promise<Utterance>;

        synthesize(text: string, path: string, options?: SynthesisOptions, callOptions?: AutomationCallOptions): Promise<Result>;
        synthesizeToFile(text: string, path: string, options?: SynthesisOptions, callOptions?: AutomationCallOptions): Promise<Result>;
        synthesis(text: string, path: string, options?: SynthesisOptions, callOptions?: AutomationCallOptions): Promise<Utterance>;
        synthesizeTask(text: string, path: string, options?: SynthesisOptions, callOptions?: AutomationCallOptions): Promise<Utterance>;
        synthesisTask(text: string, path: string, options?: SynthesisOptions, callOptions?: AutomationCallOptions): Promise<Utterance>;

        silence(duration: number, options?: SpeechOptions, callOptions?: AutomationCallOptions): Promise<Result>;
        silenceTask(duration: number, options?: SpeechOptions, callOptions?: AutomationCallOptions): Promise<Utterance>;

        ready(engine?: EngineQuery, callOptions?: AutomationCallOptions): Promise<ReadyInfo>;
        engines(engine?: EngineQuery, callOptions?: AutomationCallOptions): Promise<EngineInfo[]>;
        voices(filter?: EngineQuery | VoiceFilter, callOptions?: AutomationCallOptions): Promise<VoiceInfo[]>;
        languages(engine?: EngineQuery, callOptions?: AutomationCallOptions): Promise<string[]>;
        isLanguageAvailable(locale: string, engine?: EngineQuery, callOptions?: AutomationCallOptions): Promise<boolean>;
        languageAvailability(locale: string, engine?: EngineQuery, callOptions?: AutomationCallOptions): Promise<LanguageAvailability>;

        stop(callOptions?: AutomationCallOptions): Promise<number>;
        stopAll(callOptions?: AutomationCallOptions): Promise<number>;
        reset(callOptions?: AutomationCallOptions): Promise<number>;
        isSpeaking(callOptions?: AutomationCallOptions): Promise<boolean>;
        isBusy(callOptions?: AutomationCallOptions): Promise<boolean>;
        status(callOptions?: AutomationCallOptions): Promise<Status>;
        defaults(callOptions?: AutomationCallOptions): Promise<Defaults>;
        config(callOptions?: AutomationCallOptions): Promise<Defaults>;
        configure(options: SpeechOptions, callOptions?: AutomationCallOptions): Promise<Defaults>;
        getMaxInputLength(): 3999;
        openSettings(callOptions?: AutomationCallOptions): Promise<boolean>;
        installData(engine?: EngineQuery, callOptions?: AutomationCallOptions): Promise<boolean>;

        close(): Promise<boolean>;
        on<K extends keyof EventMap>(event: K, listener: (event: {id: string; value: EventMap[K]}) => void): this;
        once<K extends keyof EventMap>(event: K, listener: (event: {id: string; value: EventMap[K]}) => void): this;
        off<K extends keyof EventMap>(event: K, listener: (event: {id: string; value: EventMap[K]}) => void): this;
        removeAllListeners(event?: keyof EventMap): this;
    }
        type Operation = 'speech' | 'silence' | 'file';
        type QueueMode = 'flush' | 'replace' | 'add' | 'enqueue' | 'append' | 0 | 1;
        type Usage = 'media' | 'accessibility' | 'assistant' | 'navigation' | 'alarm'
            | 'notification' | 'voiceCommunication';
        type EngineQuery = string | null | { engine?: string | null };
        type ParameterValue = string | boolean | number;

        interface SpeechOptions {
            engine?: string | null;
            locale?: string | null;
            language?: string | null;
            lang?: string | null;
            voice?: string | null;
            rate?: number;
            speechRate?: number;
            pitch?: number;
            volume?: number;
            pan?: number;
            queue?: QueueMode;
            autoSplit?: boolean;
            split?: boolean;
            offlineOnly?: boolean;
            offline?: boolean;
            audioEvents?: boolean;
            emitAudio?: boolean;
            usage?: Usage | null;
            audioUsage?: Usage | null;
            timeout?: number | null | 'auto';
            timeoutMillis?: number | null | 'auto';
            timeoutMs?: number | null | 'auto';
            parameters?: Record<string, ParameterValue> | null;
            params?: Record<string, ParameterValue> | null;
        }

        interface SynthesisOptions extends SpeechOptions {
            overwrite?: boolean;
            createDirectories?: boolean;
            mkdirs?: boolean;
        }

        interface VoiceFilter {
            engine?: string | null;
            locale?: string | null;
            language?: string | null;
            lang?: string | null;
            offlineOnly?: boolean | null;
            offline?: boolean | null;
            installedOnly?: boolean | null;
            installed?: boolean | null;
        }

        interface Defaults {
            engine: string | null;
            locale: string | null;
            voice: string | null;
            rate: number;
            pitch: number;
            volume: number;
            pan: number;
            queue: 'flush' | 'add';
            autoSplit: boolean;
            offlineOnly: boolean;
            audioEvents: boolean;
            usage: Usage;
            timeout: number | 'auto';
            parameters: Record<string, ParameterValue>;
        }

        interface Result {
            id: string;
            operation: Operation;
            status: 'done';
            engine: string | null;
            requestedEngine: string | null;
            voice: string | null;
            locale: string | null;
            usage: Usage | null;
            chunks: number;
            characters: number;
            duration: number;
            path: string | null;
        }

        interface Status {
            state: 'idle' | 'initializing' | 'working' | 'ready' | 'failed' | 'closed';
            engine: string | null;
            requestedEngine: string | null;
            activeId: string | null;
            operation: Operation | null;
            queued: number;
            isSpeaking: boolean;
            isBusy: boolean;
        }

        interface ReadyInfo {
            state: 'ready';
            engine: string | null;
            requestedEngine: string | null;
            defaultEngine: string | null;
            voice: VoiceInfo | null;
            locale: string | null;
        }

        interface EngineInfo {
            name: string;
            label: string;
            default: boolean;
            requested: boolean;
        }

        interface VoiceInfo {
            name: string;
            locale: string;
            quality: number;
            latency: number;
            networkRequired: boolean;
            offline: boolean;
            notInstalled: boolean;
            features: string[];
        }

        interface LanguageAvailability {
            locale: string;
            available: boolean;
            support: 'language'
                | 'language_and_country'
                | 'language_country_and_variant'
                | 'missing_data'
                | 'not_supported'
                | 'unknown';
            statusCode: number;
        }

        interface QueuedInfo {
            id: string;
            operation: Operation;
            queue: 'flush' | 'add';
            chunks: number;
        }

        interface StartInfo {
            id: string;
            operation: Operation;
            voice: string | null;
            locale: string | null;
            chunks: number;
        }

        interface ChunkInfo {
            id: string;
            index: number;
            count: number;
            start: number;
            end: number;
        }

        interface RangeInfo {
            id: string;
            start: number;
            end: number;
            frame: number;
            chunk: number;
        }

        interface SynthesisInfo {
            id: string;
            sampleRate: number;
            encoding: 'pcm_8_bit' | 'pcm_16_bit' | 'pcm_float' | 'unknown';
            channels: number;
            chunk: number;
        }

        interface AudioInfo {
            id: string;
            data: Uint8Array;
            chunk: number;
        }

        interface StopInfo {
            id: string;
            operation: Operation;
            status: 'stopped';
            reason: string;
        }

        interface Failure extends Error {
            readonly code: string;
            readonly errorCode: number | null;
        }

        interface EventMap {
            queued: QueuedInfo; start: StartInfo; chunk: ChunkInfo; range: RangeInfo;
            synthesis: SynthesisInfo; audio: AudioInfo; done: Result;
            stop: StopInfo; cancelled: StopInfo; error: Failure;
        }
        interface Utterance {
            readonly id: string;
            readonly operation: Operation;
            readonly text: string | null;
            readonly result: Promise<Result>;
            readonly state: 'created' | 'queued' | 'running' | 'done' | 'stopped' | 'error' | 'cancelled';
            readonly isDone: boolean;
            on<K extends keyof EventMap>(event: K, listener: (value: EventMap[K]) => void): this;
            once<K extends keyof EventMap>(event: K, listener: (value: EventMap[K]) => void): this;
            off<K extends keyof EventMap>(event: K, listener: (value: EventMap[K]) => void): this;
            removeAllListeners(event?: keyof EventMap): this;
            stop(): Promise<this>;
            cancel(): Promise<this>;
        }
  }
// END GENERATED TTS TYPES

// BEGIN GENERATED SPEECH TYPES
export namespace RuntimeSpeech {
    /** Optional whole-operation deadline and cancellation. Ordinary calls have no added runtime deadline. */
    type CallOptions = Pick<AutomationCallOptions, "signal" | "timeoutMs">;
    interface API {
        readonly SpeechError: ErrorConstructor;
        readonly models: Models;
        isAvailable(callOptions?: CallOptions): Promise<boolean>;
        capabilities(callOptions?: CallOptions): Promise<Capabilities>;
        /** Returns a pending session. Attach ready/error/end listeners before feeding audio. */
        listen(options?: ListenOptions | null, callOptions?: CallOptions): Promise<Session>;
        recognize(source: AudioSource, options?: RecognizeOptions | null, callOptions?: CallOptions): Promise<Recognition>;
        recognizeAsync(source: AudioSource, options?: RecognizeOptions | null, callOptions?: CallOptions): Promise<Recognition>;
        detectVoice(source: AudioSource, options?: VadOptions | null, callOptions?: CallOptions): Promise<VadResult>;
        wake(keywords: KeywordInput | readonly KeywordInput[], options?: WakeOptions | null, callOptions?: CallOptions): Promise<WakeSession>;
        synthesize(text: string, path: string, options?: SynthesisOptions | null, callOptions?: CallOptions): Promise<SynthesisResult>;
        synthesizeAsync(text: string, path: string, options?: SynthesisOptions | null, callOptions?: CallOptions): Promise<SynthesisResult>;
        speak(text: string, options?: SpeakOptions | null, callOptions?: CallOptions): Promise<RuntimeTts.Result>;
        /** Cancels this facade's operations/sessions and releases resources. A later call opens a new client. */
        close(): Promise<boolean>;
    }


        type ErrorCode =
            | 'PLUGIN_UNAVAILABLE'
            | 'PLUGIN_DISABLED'
            | 'PLUGIN_INCOMPATIBLE'
            | 'PERMISSION_DENIED'
            | 'MODEL_MISSING'
            | 'MODEL_DOWNLOAD_FAILED'
            | 'MODEL_CHECKSUM_MISMATCH'
            | 'MODEL_LICENSE_NOT_ACCEPTED'
            | 'INVALID_OPTIONS'
            | 'UNSUPPORTED_FORMAT'
            | 'LIMIT_EXCEEDED'
            | 'SESSION_BUSY'
            | 'SESSION_CLOSED'
            | 'SESSION_CANCELLED'
            | 'ENGINE_FAILED'
            | 'IO_FAILED'
            | 'TIMEOUT'
            | 'INTERNAL';

        /** What the plugin implements; a call whose feature is missing fails with `PLUGIN_INCOMPATIBLE`. */
        type Feature = 'asr' | 'asrStreaming' | 'vad' | 'kws' | 'tts' | 'ttsSystemEngine' | 'models';

        /** Model kinds: recognition, synthesis, keyword spotting (wake words) and voice activity detection. */
        type Kind = 'asr' | 'tts' | 'kws' | 'vad';

        /** `pending` until `ready`, then `active`, then `ended`. */
        type State = 'pending' | 'active' | 'ended';

        /**
         * Why a session ended: `stop()`, `timeoutMillis` or `maxDurationMillis` (audio time),
         * `cancel()`, an `error` event, or `overflow` when the script did not drain the events
         * (`error` with `LIMIT_EXCEEDED` first).
         */
        type EndReason = 'stopped' | 'timeout' | 'maxDuration' | 'cancelled' | 'error' | 'overflow';

        /** `'mic'` records the plugin's microphone; `'external'` recognizes PCM given to `feed`. */
        type Source = 'mic' | 'external';

        /** Mono PCM16 LE. Buffer and offset typed array views preserve exactly their visible bytes. */
        type Pcm = ArrayBuffer | ArrayBufferView;

        /** A WAV file path or PCM. */
        type AudioSource = string | Pcm;

        /** A warning (the call or session went on) as `{ code, message }`. */
        interface Problem {
            readonly code: ErrorCode | (string & {});
            readonly message: string;
        }

        /** Speech failures preserve the plugin error code and are instances of SpeechError. */
        interface SpeechError extends Error {
            readonly name: 'SpeechError';
            code: ErrorCode | (string & {});
        }

        /** Callable with or without `new`; `message` and `code` become strings, by default `''` and `'INTERNAL'`. */
        interface ErrorConstructor {
            new(message?: unknown, code?: ErrorCode | (string & {}) | null): SpeechError;
            (message?: unknown, code?: ErrorCode | (string & {}) | null): SpeechError;
            readonly prototype: SpeechError;
        }

        interface Capabilities {
            /** Speech contract version, 1. */
            readonly contractVersion: number;
            readonly features: (Feature | (string & {}))[];
            /** Version of the plugin's model catalog. */
            readonly catalogVersion: number;
            /** The speech runtime, `'sherpa-onnx'` for 3-Macaw Speech; null when not reported. */
            readonly engineName: string | null;
            readonly engineVersion: string | null;
            /** Package of the plugin's system TTS engine (feature `ttsSystemEngine`), null without one. */
            readonly ttsEnginePackage: string | null;
            /** Whether the plugin holds the microphone permission right now; null when not reported. */
            readonly microphoneGranted: boolean | null;
            readonly packageName: string;
            readonly versionName: string | null;
            readonly versionCode: number;
        }

        interface RecognizeOptions {
            /** Recognition model id; default the default `asr` model. */
            model?: string;
            /** Language hint such as `'zh'`, `'en'`, `'ja'`, `'ko'` or `'yue'`; bilingual models ignore it. */
            language?: string;
            /** Hotwords of transducer models, at most 200 of at most 128 characters; other models answer a warning. */
            hotwords?: string[];
            /** Keep the punctuation the model emits; default true. */
            punctuation?: boolean;
            /** Voice activity segmentation (files and PCM) or gating (microphone); default true. */
            vad?: boolean;
            /** PCM only: input sample rate, 8000 to 192000; default 16000. WAV files carry their own rate. */
            sampleRate?: number;
        }

        interface ListenOptions extends Omit<RecognizeOptions, 'sampleRate'> {
            /** Default `'mic'`. */
            source?: Source;
            /** Only 16000: external PCM is 16 kHz mono PCM16 LE. */
            sampleRate?: 16000;
            /** Silence that ends an utterance, 1 to 60000; default 1200. */
            silenceEndMillis?: number;
            /** Session length in audio time, at most 1800000 (`LIMIT_EXCEEDED` beyond); default 300000. */
            maxDurationMillis?: number;
            /** Ends the session when neither speech nor new text comes within it (audio time), 0 to 1800000, 0 never; default 15000. */
            timeoutMillis?: number;
        }

        /** Dictation options of the rounds that follow wake word hits; they always record the microphone. */
        interface RoundOptions extends Omit<ListenOptions, 'source'> {
            source?: 'mic';
        }

        interface VadOptions {
            /** Voice activity model id; default the default `vad` model. */
            model?: string;
            /** Speech probability threshold, 0 to 1; default of the model. */
            threshold?: number;
            /** 0 to 1800000; default of the model. */
            minSpeechMillis?: number;
            /** 0 to 1800000; default of the model. */
            minSilenceMillis?: number;
            /** PCM only: input sample rate, 8000 to 192000; default 16000. */
            sampleRate?: number;
        }

        interface Keyword {
            /** At most 128 characters. */
            keyword: string;
            /** -100 to 100. */
            boost?: number;
            /** Trigger threshold, 0 to 1; default of the model. */
            threshold?: number;
        }

        type KeywordInput = string | Keyword;

        interface WakeOptions {
            /** Keyword spotting model id; default the default `kws` model. */
            model?: string;
            /** Least time between two hits, 0 to 600000; default 1500. */
            minIntervalMillis?: number;
            /** `true` or dictation options: each hit is followed by one dictation round, the `listen` of the `wake` event. */
            thenListen?: boolean | RoundOptions;
        }

        interface SynthesisOptions {
            /** TTS model id; default the default `tts` model. */
            model?: string;
            /**
             * Speaker id (an integer from 0) or name (such as `'SSB0005'` of AISHELL-3); default the
             * model's default speaker. A model with a single speaker ignores it and says so in
             * `warnings` (`INVALID_OPTIONS`).
             */
            speaker?: string | number;
            /** 0.5 to 2.0; default 1.0. */
            speed?: number;
            /** Only `'wav'`. */
            format?: 'wav';
        }

        /**
         * The options of `tts` except `engine`, `voice`, `rate` and `speechRate`, which are
         * refused. With `model`, `locale` / `language` / `lang` only choose the model's speaker and
         * do not reach `tts`.
         */
        interface SpeakOptions extends Omit<RuntimeTts.SpeechOptions, 'engine' | 'voice' | 'rate' | 'speechRate'> {
            /** TTS model id; without it the engine's voice for the language is used. */
            model?: string;
            /** Speaker id or name without `/`; needs `model`. */
            speaker?: string | number;
            /** 0.5 to 2.0, the speech rate. */
            speed?: number;
        }

        interface Tags {
            readonly emotion?: string;
            readonly event?: string;
        }

        interface Segment {
            readonly startMillis: number;
            readonly endMillis: number;
            /** Empty when the result had to leave the segment texts out (a `LIMIT_EXCEEDED` warning says so). */
            readonly text: string;
            readonly language?: string;
            readonly tags?: Tags;
        }

        /** @see https://docs.autojs6.com/#/speechRecognitionResultType */
        interface Recognition {
            /** The whole text. */
            readonly text: string;
            readonly segments: Segment[];
            /** Language of the audio when the model reports one. */
            readonly language?: string;
            readonly durationMillis: number;
            readonly modelId: string;
            readonly warnings: Problem[];
        }

        interface VadSegment {
            readonly startMillis: number;
            readonly endMillis: number;
        }

        interface VadResult {
            readonly segments: VadSegment[];
            readonly durationMillis: number;
        }

        interface SynthesisResult {
            /** The written file, resolved against the working directory. */
            readonly path: string;
            readonly sampleRate: number;
            readonly durationMillis: number;
            readonly modelId: string;
            readonly speakerId: number;
            readonly sizeBytes: number;
            /** Empty unless the plugin adjusted the request. */
            readonly warnings: Problem[];
        }

        interface ReadyEvent {
            readonly sessionId: string;
            readonly modelId: string;
        }

        interface PartialEvent {
            /** The current utterance so far. */
            readonly text: string;
            readonly segmentIndex: number;
        }

        interface FinalEvent {
            readonly text: string;
            readonly segmentIndex: number;
            readonly startMillis: number;
            readonly endMillis: number;
            readonly language?: string;
            readonly tags?: Tags;
        }

        interface VadEvent {
            readonly active: boolean;
        }

        interface EndEvent {
            readonly reason: EndReason | 'script-exit';
            /** The text of the whole session. */
            readonly text: string;
        }

        /** `endpoint` closes an utterance after its `final`; `warning` leaves the session running; `error` is followed by `end`. */
        interface SessionEvents {
            ready: ReadyEvent;
            partial: PartialEvent;
            final: FinalEvent;
            endpoint: undefined;
            vad: VadEvent;
            warning: Problem;
            error: SpeechError;
            end: EndEvent;
        }

        /**
         * The dictation session of {@link API.listen}, or a dictation round of a wake session.
         * `end` is the terminal event of a `listen` session.
         * @see https://docs.autojs6.com/#/speechSessionType
         */
        interface Session {
            /** The plugin's session id from `ready`, null before it. */
            readonly id: string | null;
            /** The model serving the session, from `ready`, null before it. */
            readonly modelId: string | null;
            /** Epoch milliseconds when the session was requested. */
            readonly startedAt: number;
            readonly state: State;
            /** The `end` reason once ended (`'script-exit'` after a silent cancel at script exit), null before. */
            readonly reason: EndReason | 'script-exit' | null;
            readonly isEnded: boolean;
            readonly source: Source;
            /** The dictation round of a wake session (from 0), -1 for a session of `listen`. */
            readonly round: number;

            /** Whether the session is still pending or active. */
            isActive(): boolean;
            /** The text so far: the joined `final` texts, the whole session text once ended. */
            result(): string;
            /** Flushes the recognizer and ends the session (`end` with `'stopped'`); for a wake round, ends the round only. Idempotent. */
            stop(): Promise<this>;
            /** Ends without a last result (`end` with `'cancelled'`); for a wake round, ends the round only. Idempotent. */
            cancel(): Promise<this>;
            /** Only `source: 'external'`: 16 kHz mono PCM16 LE, at most 1 MiB per call. */
            feed(pcm: Pcm): Promise<this>;
            /** `SpeechSession { source: ..., state: ... }` with the round, model and reason when known. */
            toString(): string;

            on<K extends keyof SessionEvents>(name: K, listener: (event: SessionEvents[K]) => void): this;
            once<K extends keyof SessionEvents>(name: K, listener: (event: SessionEvents[K]) => void): this;
            off<K extends keyof SessionEvents>(name: K, listener: (event: SessionEvents[K]) => void): this;
            removeListener<K extends keyof SessionEvents>(name: K, listener: (event: SessionEvents[K]) => void): this;
            removeAllListeners(name?: keyof SessionEvents): this;
        }

        interface WakeEvent {
            /** The keyword as the script wrote it. */
            readonly keyword: string;
            /** The trigger threshold of the keyword with 3-Macaw Speech (the runtime reports no confidence); null when not reported. */
            readonly score: number | null;
            /** Epoch milliseconds of the hit. */
            readonly timestampMillis: number;
            /** With `thenListen`: the dictation round that follows the hit. */
            readonly listen?: Session;
        }

        interface WakeEndEvent {
            readonly reason: EndReason | 'script-exit';
        }

        interface WakeEvents {
            ready: ReadyEvent;
            wake: WakeEvent;
            warning: Problem;
            error: SpeechError;
            end: WakeEndEvent;
        }

        /**
         * The wake word session of {@link API.wake}; `end` is its terminal event.
         * @see https://docs.autojs6.com/#/speechWakeSessionType
         */
        interface WakeSession {
            /** The keywords as the script wrote them. */
            readonly keywords: string[];
            readonly id: string | null;
            readonly modelId: string | null;
            /** Epoch milliseconds when the session was requested. */
            readonly startedAt: number;
            readonly state: State;
            readonly reason: EndReason | 'script-exit' | null;
            readonly isEnded: boolean;

            /** Ends the wake session and a running round (`end` with `'stopped'`). Idempotent. */
            stop(): Promise<this>;
            isActive(): boolean;
            /** `SpeechWakeSession { keywords: [...], state: ... }` with the reason when known. */
            toString(): string;

            on<K extends keyof WakeEvents>(name: K, listener: (event: WakeEvents[K]) => void): this;
            once<K extends keyof WakeEvents>(name: K, listener: (event: WakeEvents[K]) => void): this;
            off<K extends keyof WakeEvents>(name: K, listener: (event: WakeEvents[K]) => void): this;
            removeListener<K extends keyof WakeEvents>(name: K, listener: (event: WakeEvents[K]) => void): this;
            removeAllListeners(name?: keyof WakeEvents): this;
        }

        interface License {
            /** SPDX identifier, `'LicenseRef-UserImported'` for an imported model without one. */
            readonly spdx: string;
            /** False also when the license does not say; such models need `acceptLicense`. */
            readonly commercialUse: boolean;
            readonly noticeUrl?: string;
        }

        /** @see https://docs.autojs6.com/#/speechModelInfoType */
        interface ModelInfo {
            readonly id: string;
            readonly kind: Kind;
            readonly modelType: string;
            readonly name: string;
            readonly languages: string[];
            /** Download size in bytes, 0 for an imported model. */
            readonly sizeBytes: number;
            /** Bytes on disk, installed models only. */
            readonly installedBytes?: number;
            readonly installed: boolean;
            readonly isDefault: boolean;
            readonly recommended: boolean;
            readonly version: number;
            readonly source: 'catalog' | 'imported';
            readonly license: License;
            /** TTS models: number of speakers. */
            readonly speakers?: number;
            /** TTS models: output sample rate. */
            readonly sampleRate?: number;
        }

        interface ModelFilter {
            kind?: Kind;
            language?: string;
            installed?: boolean;
        }

        interface InstallOptions {
            /** Accept a license that does not allow commercial use (`MODEL_LICENSE_NOT_ACCEPTED` otherwise); default false. */
            acceptLicense?: boolean;
            /** Bytes done and total (0 when unknown), called on the script thread. */
            onProgress?: (done: number, total: number) => void;
        }

        interface ImportOptions extends InstallOptions {
            /** Model id of a model outside the catalog. */
            id?: string;
            kind?: Kind;
            modelType?: string;
            /** At most 128 characters. */
            name?: string;
            languages?: string[];
        }

        interface Models {
            /** Reads the plugin catalog and imported models without installing or accepting licenses. */
            list(filter?: ModelFilter | null, callOptions?: CallOptions): Promise<ModelInfo[]>;
            /** Explicitly downloads a catalog model. onProgress runs on this runtime's JS thread. */
            install(id: string, options?: InstallOptions | null, callOptions?: CallOptions): Promise<ModelInfo>;
            installAsync(id: string, options?: InstallOptions | null, callOptions?: CallOptions): Promise<ModelInfo>;
            /** Imports a host-readable tar.bz2 or zip archive. */
            importFile(path: string, options?: ImportOptions | null, callOptions?: CallOptions): Promise<ModelInfo>;
            /** Refused with SESSION_BUSY while the model is in use. */
            remove(id: string, callOptions?: CallOptions): Promise<boolean>;
            setDefault(kind: Kind, id: string, callOptions?: CallOptions): Promise<ModelInfo>;
            getDefault(kind: Kind, callOptions?: CallOptions): Promise<ModelInfo | null>;
            refreshCatalog(callOptions?: CallOptions): Promise<{ version: number; updated: boolean }>;
        }
  }
// END GENERATED SPEECH TYPES

// BEGIN GENERATED EPUB TYPES
export namespace RuntimeEpub {
    /** Default operation deadline: 60000 ms. A reader signal also cancels its active session. */
    type CallOptions = Pick<AutomationCallOptions, "signal" | "timeoutMs">;
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
// END GENERATED EPUB TYPES

// BEGIN GENERATED MAIL TYPES
export namespace RuntimeMail {
    /** Whole-operation deadline (60000 ms by default); a watch signal also cancels its active watch. */
    type CallOptions = Pick<AutomationCallOptions, "signal" | "timeoutMs">;
    interface API extends Operations {
      readonly MailError: MailErrorConstructor;
      /** Saved aliases require the signed host; packaged apps supply their own inline credentials. */
      connect(options: AccountOptions | string, callOptions?: CallOptions): Promise<Client>;
      connectAsync(options: AccountOptions | string, callOptions?: CallOptions): Promise<Client>;
      setDefault(client: Client | AccountOptions | string, callOptions?: CallOptions): Promise<Client>;
      readonly default: Client | null;
      /** Closes only the default account. */
      close(callOptions?: CallOptions): Promise<void>;
      /** Releases all accounts and watches owned by this facade. Future calls may reopen it. */
      dispose(): Promise<void>;
      readonly providers: Providers;
      /** Plugin-saved accounts are accessible only through the original signed-host route. */
      readonly accounts: Accounts;
    }


        /** An IMAP UID (number) or a POP3 UIDL (string). */
        type Uid = number | string;

        /** A bare UID or an object carrying `uid` (and optionally `folder`), such as a {@link Message}. */
        type MessageRef = Uid | { uid: Uid; folder?: string };

        /** One reference or an array of them; the folder of the first object rides along. */
        type MessageRefs = MessageRef | MessageRef[];

        /** A `Date`, UTC milliseconds, or an ISO-8601 string such as `'2026-09-01'`. */
        type DateLike = Date | number | string;

        /** `'a@b.c'`, `'Name <a@b.c>'`, a comma separated list of those, or `{ name, address }`. */
        type AddressLike = string | { name?: string | null; address: string };

        /** One address form or an array of them. */
        type AddressList = AddressLike | AddressLike[];

        type TlsMode = 'ssl' | 'starttls' | 'none';

        type AuthMethod = 'password' | 'xoauth2';

        type ReceiveProtocol = 'imap' | 'pop3';

        type ProviderId = 'gmail' | 'outlook' | 'office365' | 'qq' | '163' | '126' | 'icloud' | 'yahoo' | 'sina' | 'aliyun';

        type ErrorCode =
            | 'INVALID_ARGUMENT'
            | 'NO_DEFAULT_ACCOUNT'
            | 'ACCOUNT_NOT_FOUND'
            | 'PROVIDER_UNKNOWN'
            | 'AUTH_FAILED'
            | 'AUTH_MECHANISM_UNSUPPORTED'
            | 'CONNECT_FAILED'
            | 'TLS_FAILED'
            | 'TIMEOUT'
            | 'CANCELLED'
            | 'FOLDER_NOT_FOUND'
            | 'MESSAGE_NOT_FOUND'
            | 'ATTACHMENT_NOT_FOUND'
            | 'UNSUPPORTED_OPERATION'
            | 'LIMIT_EXCEEDED'
            | 'IO_FAILED'
            | 'SESSION_CLOSED'
            | 'WATCH_CLOSED'
            | 'SEND_REJECTED'
            | 'SERVER_ERROR'
            | 'PLUGIN_UNAVAILABLE'
            | 'INTERNAL';

        /** The five system flags by name, or any IMAP keyword. */
        type FlagName = 'seen' | 'flagged' | 'answered' | 'draft' | 'deleted' | (string & {});

        type FlagMode = 'add' | 'remove' | 'set';

        type SpecialUse = 'inbox' | 'sent' | 'drafts' | 'trash' | 'junk' | 'archive' | 'all' | 'flagged' | 'important';

        /** A server endpoint; `host` may be omitted when a provider preset supplies it. */
        interface Endpoint {
            host?: string;
            /** 1..65535; defaults by protocol and `tls` (IMAP 993 / 143, POP3 995 / 110, SMTP 465 / 587 / 25). */
            port?: number;
            /** Defaults to `'ssl'`. */
            tls?: TlsMode;
        }

        /** @see https://docs.autojs6.com/#/mailAccountOptionsType */
        interface AccountOptions {
            /** Provider preset; explicit fields override it. Not inferred from `address`. */
            provider?: ProviderId | string;
            /** Required. Also the default login name and sender address. */
            address: string;
            /** Login name, defaults to `address`. */
            user?: string;
            /** Display name used in `From`. */
            name?: string;
            /** Defaults by credential: `password` -> `'password'`, `accessToken` / `tokenProvider` -> `'xoauth2'`. */
            auth?: AuthMethod;
            /** Authorization code or app password; exclusive with `accessToken`. */
            password?: string;
            /** OAuth 2.0 access token (XOAUTH2); exclusive with `password`. */
            accessToken?: string;
            /**
             * Returns a fresh access token on the owning JS thread; Promises are awaited; called before the first login when
             * `accessToken` is absent and again (with one retry) when the server answers `AUTH_FAILED`.
             */
            tokenProvider?: () => string | Promise<string>;
            /** Defaults to `'imap'` unless only a POP3 endpoint exists. */
            receive?: ReceiveProtocol;
            imap?: Endpoint;
            pop3?: Endpoint;
            smtp?: Endpoint;
            /** Milliseconds; `connect` defaults to 15000, `read` to 60000, `write` to `read`; at most 10 minutes each. */
            timeout?: { connect?: number; read?: number; write?: number };
            /** `trustAll: true` skips certificate validation (debugging only). */
            tls?: { trustAll?: boolean };
            /** Prints a redacted protocol summary to `console.verbose`. */
            debug?: boolean;
            /** Fields of the IMAP `ID` command; sent automatically for presets that require it (163 / 126). */
            clientId?: { name?: string; version?: string };
        }

        /** `client.account`: the options without secrets (`auth: 'xoauth2'` added for token accounts), or `{ alias }`. */
        type AccountSnapshot = Partial<Omit<AccountOptions, 'password' | 'accessToken' | 'tokenProvider'>> & { alias?: string };

        interface ProviderEndpoint {
            host: string;
            port: number;
            tls: TlsMode;
        }

        interface Provider {
            id: ProviderId | string;
            name: string;
            domains: string[];
            imap: ProviderEndpoint | null;
            pop3: ProviderEndpoint | null;
            smtp: ProviderEndpoint | null;
            auth: AuthMethod[];
            authHint: string | null;
            /** The server files its own copy of sent mail, so `send` appends none. */
            autoSavesSent: boolean;
            sentFolder: string | null;
            requiresClientId: boolean;
            /** Whether IMAP IDLE really pushes new mail; null when unverified. */
            idlePush: boolean | null;
            /** Whether the POP3 server takes `AUTH XOAUTH2` only in the two-line form (Outlook.com, Microsoft 365). */
            pop3Xoauth2TwoLine: boolean;
            docsUrl: string | null;
            notes: string | null;
        }

        interface Providers {
            list(callOptions?: CallOptions): Promise<Provider[]>;
            get(id: string, callOptions?: CallOptions): Promise<Provider | null>;
            /** The preset whose `domains` contain the domain of `address`. */
            resolve(address: string, callOptions?: CallOptions): Promise<Provider | null>;
        }

        interface SavedAccount {
            alias: string;
            address?: string;
            user?: string;
            name?: string;
            provider?: string;
            auth?: AuthMethod;
            /**
             * Present when the account was signed in through the browser on the plugin's settings page
             * (Angus Mail 1.2.0): `auth` is then `xoauth2` and the plugin renews the access token itself.
             * The tokens never appear here.
             */
            oauth?: SavedAccountOAuth;
            receive?: ReceiveProtocol;
            imap?: ProviderEndpoint;
            pop3?: ProviderEndpoint;
            smtp?: ProviderEndpoint;
            default?: boolean;
            /** UTC milliseconds. */
            updatedAt?: number;
            /** Present (with the other fields absent) when the saved data cannot be parsed. */
            error?: string;
        }

        interface SavedAccountOAuth {
            /** The identity provider of the sign-in. */
            provider: 'google' | 'microsoft';
            /** UTC milliseconds of the sign-in; 0 when unknown. */
            authorizedAt: number;
            /** UTC milliseconds after which the current access token expires; the plugin renews it before a session. */
            expiresAt: number;
            /** True when a refresh was refused: sessions fail with AUTH_FAILED until the user signs in again in the plugin settings. */
            needsReauth: boolean;
        }

        interface Accounts {
            list(callOptions?: CallOptions): Promise<SavedAccount[]>;
            has(alias: string, callOptions?: CallOptions): Promise<boolean>;
        }

        /** `name` is `'MailError'`; `toString()` yields `MailError [CODE]: message`. */
        interface MailError extends Error {
            readonly name: 'MailError';
            readonly code: ErrorCode | string;
            readonly details: Record<string, unknown> | unknown[] | string | null;
            /** Worth retrying as is (network hiccup, timeout, closed session). */
            readonly retryable: boolean;
        }

        interface MailErrorConstructor {
            new(message: string, code?: ErrorCode | string, details?: Record<string, unknown> | unknown[] | string | null, retryable?: boolean): MailError;
            readonly prototype: MailError;
        }

        interface Address {
            name: string | null;
            address: string;
            /** `Name <address>` or `address`. */
            toString(): string;
        }

        /** @see https://docs.autojs6.com/#/mailMessageType */
        interface Attachment {
            /** MIME part number such as `'2'` or `'1.2'`. */
            partId: string;
            fileName: string;
            mimeType: string;
            /** Encoded part size in bytes, -1 when unknown. */
            size: number;
            contentId: string | null;
            inline: boolean;
            /** The owning message. */
            uid: Uid;
            folder: string;
            /** `client.download(attachment, target, options)`; returns the file path. */
            download(target?: string, options?: DownloadAsyncOptions, callOptions?: CallOptions): Promise<string>;
            downloadAsync(target?: string, options?: DownloadAsyncOptions, callOptions?: CallOptions): Promise<string>;
        }

        /** @see https://docs.autojs6.com/#/mailMessageType */
        interface Message {
            uid: Uid;
            folder: string;
            messageId: string | null;
            inReplyTo: string | null;
            references: string[];
            subject: string;
            from: Address | null;
            sender: Address | null;
            replyTo: Address[];
            to: Address[];
            cc: Address[];
            bcc: Address[];
            date: Date | null;
            receivedDate: Date | null;
            size: number;
            flags: string[];
            seen: boolean;
            flagged: boolean;
            answered: boolean;
            draft: boolean;
            deleted: boolean;
            hasAttachments: boolean;
            /** False for `fetch` / `search` envelopes; true after `get` / `load`. */
            bodyLoaded: boolean;
            text: string | null;
            html: string | null;
            /** Header name -> values, as returned by the server. */
            headers: { [name: string]: string[] };
            attachments: Attachment[];
            /** The inline body exceeded 256 KiB; the parts left out are in `bodyParts`. */
            bodyTruncated: boolean;
            bodyParts: Attachment[];
            /** RFC 822 source (ISO-8859-1 mapped), only with `includeRaw`. */
            raw: string | null;
            rawTruncated: boolean;
            /** `client.get(message, options)` on the client that produced this object. */
            load(options?: GetOptions, callOptions?: CallOptions): Promise<Message>;
            loadAsync(options?: GetOptions, callOptions?: CallOptions): Promise<Message>;
        }

        interface OutgoingAttachment {
            path: string;
            fileName?: string;
            mimeType?: string;
            contentId?: string;
            inline?: boolean;
        }

        /** The message of `send` and `append`; `subject` and at least one recipient are required. */
        interface SendMessage {
            /** A single address; defaults to the account address and `name`. */
            from?: AddressLike;
            to?: AddressList;
            cc?: AddressList;
            bcc?: AddressList;
            replyTo?: AddressList;
            subject: string;
            text?: string;
            html?: string;
            /** File paths or objects; at most 64, 200 MiB each. */
            attachments?: (string | OutgoingAttachment)[];
            /** At most 32 custom headers; the headers the plugin composes are refused. */
            headers?: { [name: string]: string | string[] };
            priority?: 'high' | 'normal' | 'low';
            inReplyTo?: string;
            references?: string | string[];
            date?: DateLike;
        }

        interface SendOptions {
            /** Append a copy to the sent folder; defaults to the preset's `autoSavesSent` being false. */
            saveToSent?: boolean;
        }

        interface SendResult {
            messageId: string;
            accepted: string[];
            rejected: string[];
            savedToSent: boolean;
            sentCopy: 'server' | 'appended' | 'failed' | 'none';
            sentFolder: string | null;
            saveError: string | null;
            elapsedMs: number;
        }

        interface FoldersOptions {
            subscribedOnly?: boolean;
            /** Also read `messages` / `unseen` of every folder (one round trip each). */
            status?: boolean;
        }

        interface Folder {
            name: string;
            path: string;
            delimiter: string | null;
            specialUse: SpecialUse | null;
            selectable: boolean;
            subscribed: boolean;
            messages: number | null;
            unseen: number | null;
            children: Folder[];
        }

        interface FolderStatus {
            name: string;
            path: string;
            messages: number;
            unseen: number;
            recent: number | null;
            uidNext: number | null;
            uidValidity: number | null;
        }

        /** `client.folder(path)`: a path bound to the client, no network until a method runs. */
        interface ClientFolder {
            readonly path: string;
            readonly name: string;
            status(callOptions?: CallOptions): Promise<FolderStatus>;
            statusAsync(callOptions?: CallOptions): Promise<FolderStatus>;
            create(callOptions?: CallOptions): Promise<Folder>;
            createAsync(callOptions?: CallOptions): Promise<Folder>;
            delete(callOptions?: CallOptions): Promise<boolean>;
            deleteAsync(callOptions?: CallOptions): Promise<boolean>;
            rename(newPath: string, callOptions?: CallOptions): Promise<Folder>;
            renameAsync(newPath: string, callOptions?: CallOptions): Promise<Folder>;
            toString(): string;
        }

        interface FetchOptions {
            /** Defaults to `'INBOX'`. */
            folder?: string;
            /** Defaults to 50, at most 1000. */
            limit?: number;
            /** UID cursor: only messages with a smaller UID (older pages). */
            before?: Uid;
            /** UID cursor: only messages with a greater UID (increments). */
            after?: Uid;
            /** `'desc'` (default) newest first. */
            order?: 'desc' | 'asc';
            /** IMAP only. */
            unseenOnly?: boolean;
        }

        /** @see https://docs.autojs6.com/#/mailSearchQueryType */
        interface SearchQuery {
            from?: string;
            to?: string;
            cc?: string;
            bcc?: string;
            subject?: string;
            body?: string;
            /** Subject, body, from or to. */
            text?: string;
            since?: DateLike;
            before?: DateLike;
            sentSince?: DateLike;
            sentBefore?: DateLike;
            seen?: boolean;
            flagged?: boolean;
            answered?: boolean;
            draft?: boolean;
            deleted?: boolean;
            /** Bytes. */
            larger?: number;
            smaller?: number;
            /** Header name -> substring. */
            header?: { [name: string]: string };
            messageId?: string;
            /** Top level only: `4711`, `'1:50'`, `'100:*'`, `'1,5,9:12'` or an array of those. */
            uid?: number | string | (number | string)[];
            and?: SearchQuery[];
            or?: SearchQuery[];
            not?: SearchQuery;
        }

        interface SearchOptions {
            folder?: string;
            limit?: number;
            before?: Uid;
            /** `'client'` (default): filter on the client when the server refuses; `'none'`; `'always'`. */
            fallback?: 'client' | 'none' | 'always';
        }

        /** The matches, newest first, plus a non-enumerable `fallback` telling which path answered. */
        interface SearchResult extends Array<Message> {
            readonly fallback: 'server' | 'client';
        }

        interface GetOptions {
            folder?: string;
            /** Do not mark the message seen; defaults to true. */
            peek?: boolean;
            includeRaw?: boolean;
        }

        /** An attachment object or `{ uid, partId }`. */
        type AttachmentRef = Attachment | { uid: Uid; partId: string; folder?: string; fileName?: string };

        interface DownloadOptions {
            folder?: string;
            /** Overwrite an existing file; otherwise a numbered name is used. */
            overwrite?: boolean;
        }

        interface DownloadAsyncOptions extends DownloadOptions {
            /** `total` is null when the size is unknown. */
            onProgress?: (transferred: number, total: number | null) => void;
        }

        interface FolderOptions {
            folder?: string;
        }

        interface TransferOptions {
            /** Source folder, defaults to `'INBOX'`. */
            from?: string;
            folder?: string;
        }

        interface DeleteOptions {
            folder?: string;
            /** IMAP: expunge right away; defaults to false. */
            expunge?: boolean;
        }

        interface WatchOptions {
            /** Defaults to `'INBOX'`. */
            folder?: string;
            /** `'auto'` (default) uses IDLE when the server pushes, else polling. */
            mode?: 'auto' | 'idle' | 'poll';
            /** Defaults to 60000, at least 15000. */
            pollIntervalMs?: number;
            /** Deliver `message` events with the body loaded. */
            fetchBody?: boolean;
            /** Reconnect and keep watching after a connection loss; defaults to true. */
            reconnect?: boolean;
        }

        type WatchCloseReason = 'stopped' | 'error' | 'closed' | 'script-exit' | 'plugin-died' | 'overflow' | string;

        /** The event emitter returned by `watch`. @see https://docs.autojs6.com/#/mailClientType */
        interface WatchEventMap {
            message: [message: Message, watch: Watch];
            mode: [mode: 'idle' | 'poll'];
            resync: [reason: string];
            error: [error: MailError];
            close: [reason: WatchCloseReason];
        }
        interface Watch {
            readonly folder: string;
            readonly mode: 'idle' | 'poll' | null;
            readonly generation: number;
            readonly isActive: boolean;
            readonly isClosed: boolean;
            readonly state: 'active' | 'closed';
            readonly reason: WatchCloseReason | null;
            stop(callOptions?: CallOptions): Promise<this>;
            on<K extends keyof WatchEventMap>(name: K, listener: (...args: WatchEventMap[K]) => void): this;
            once<K extends keyof WatchEventMap>(name: K, listener: (...args: WatchEventMap[K]) => void): this;
            addListener<K extends keyof WatchEventMap>(name: K, listener: (...args: WatchEventMap[K]) => void): this;
            off<K extends keyof WatchEventMap>(name: K, listener: (...args: WatchEventMap[K]) => void): this;
            removeListener<K extends keyof WatchEventMap>(name: K, listener: (...args: WatchEventMap[K]) => void): this;
            removeAllListeners(name?: keyof WatchEventMap): this;
            listenerCount(name: keyof WatchEventMap): number;
        }

        interface EndpointReport {
            protocol: 'imap' | 'pop3' | 'smtp';
            host: string;
            port: number;
            tls: TlsMode;
            ok: boolean;
            elapsedMs: number;
            /** Advertised capabilities or extensions, such as `'IDLE'`, `'UIDPLUS'`, `'SIZE'`. */
            capabilities: string[];
            error: { code: ErrorCode | string; message: string; details: string | null; retryable: boolean } | null;
        }

        interface SessionTestResult {
            ok: boolean;
            /** The normalized account without secrets. */
            account: {
                address: string;
                user: string;
                name: string | null;
                auth: AuthMethod;
                receive: ReceiveProtocol;
                provider: string | null;
                imap: ProviderEndpoint | null;
                pop3: ProviderEndpoint | null;
                smtp: ProviderEndpoint | null;
                insecure: boolean;
                debug: boolean;
            };
            imap: EndpointReport | null;
            pop3: EndpointReport | null;
            smtp: EndpointReport | null;
            elapsedMs: number;
        }

        /**
         * The network methods shared by Client and the module return Promises. Async names are aliases.
         * folder creates a local helper; watch returns a Promise of its live event handle.
         */
        interface Operations {

            /** Probes the receive endpoint and SMTP; endpoint failures land in the report, not as exceptions. */
            test(callOptions?: CallOptions): Promise<SessionTestResult>;
            testAsync(callOptions?: CallOptions): Promise<SessionTestResult>;

            /** Sends through SMTP; `SEND_REJECTED` when the server refuses the message or every recipient. */
            send(message: SendMessage, options?: SendOptions, callOptions?: CallOptions): Promise<SendResult>;
            sendAsync(message: SendMessage, options?: SendOptions, callOptions?: CallOptions): Promise<SendResult>;

            /** The folder tree (POP3: `INBOX` only). */
            folders(options?: FoldersOptions, callOptions?: CallOptions): Promise<Folder[]>;
            foldersAsync(options?: FoldersOptions, callOptions?: CallOptions): Promise<Folder[]>;

            /** A path bound to the client; no network access. */
            folder(path: string): ClientFolder;

            /** IMAP only. */
            folderStatus(path: string, callOptions?: CallOptions): Promise<FolderStatus>;
            folderStatusAsync(path: string, callOptions?: CallOptions): Promise<FolderStatus>;

            /** IMAP only. */
            createFolder(path: string, callOptions?: CallOptions): Promise<Folder>;
            createFolderAsync(path: string, callOptions?: CallOptions): Promise<Folder>;

            /** IMAP only; always true. */
            deleteFolder(path: string, callOptions?: CallOptions): Promise<boolean>;
            deleteFolderAsync(path: string, callOptions?: CallOptions): Promise<boolean>;

            /** IMAP only. */
            renameFolder(path: string, newPath: string, callOptions?: CallOptions): Promise<Folder>;
            renameFolderAsync(path: string, newPath: string, callOptions?: CallOptions): Promise<Folder>;

            /** Envelopes (no body), newest first by default. */
            fetch(options?: FetchOptions, callOptions?: CallOptions): Promise<Message[]>;
            fetchAsync(options?: FetchOptions, callOptions?: CallOptions): Promise<Message[]>;

            /** Envelopes matching `query`; the array carries `fallback`. */
            search(query: SearchQuery, options?: SearchOptions, callOptions?: CallOptions): Promise<SearchResult>;
            searchAsync(query: SearchQuery, options?: SearchOptions, callOptions?: CallOptions): Promise<SearchResult>;

            /** The message with body, headers and attachment metadata. */
            get(uid: MessageRef, options?: GetOptions, callOptions?: CallOptions): Promise<Message>;
            getAsync(uid: MessageRef, options?: GetOptions, callOptions?: CallOptions): Promise<Message>;

            /** Alias of `get`. */
            fetchBody(uid: MessageRef, options?: GetOptions, callOptions?: CallOptions): Promise<Message>;
            fetchBodyAsync(uid: MessageRef, options?: GetOptions, callOptions?: CallOptions): Promise<Message>;

            /** Streams an attachment into `target` (directory or file path, default cwd); returns the file path. */
            download(attachment: AttachmentRef, target?: string, options?: DownloadAsyncOptions, callOptions?: CallOptions): Promise<string>;
            downloadAsync(attachment: AttachmentRef, target?: string, options?: DownloadAsyncOptions, callOptions?: CallOptions): Promise<string>;

            /** Writes the RFC 822 source to `target` (directory: `<uid>.eml`); returns the file path. */
            raw(uid: MessageRef, target?: string, options?: DownloadAsyncOptions, callOptions?: CallOptions): Promise<string>;
            rawAsync(uid: MessageRef, target?: string, options?: DownloadAsyncOptions, callOptions?: CallOptions): Promise<string>;

            /** IMAP only; returns the affected UIDs. */
            setFlags(uids: MessageRefs, flags: FlagName | FlagName[], mode?: FlagMode, options?: FolderOptions, callOptions?: CallOptions): Promise<Uid[]>;
            setFlagsAsync(uids: MessageRefs, flags: FlagName | FlagName[], mode?: FlagMode, options?: FolderOptions, callOptions?: CallOptions): Promise<Uid[]>;

            /** `setFlags(uids, 'seen', 'add')`. */
            markRead(uids: MessageRefs, options?: FolderOptions, callOptions?: CallOptions): Promise<Uid[]>;
            markReadAsync(uids: MessageRefs, options?: FolderOptions, callOptions?: CallOptions): Promise<Uid[]>;

            /** `setFlags(uids, 'seen', 'remove')`. */
            markUnread(uids: MessageRefs, options?: FolderOptions, callOptions?: CallOptions): Promise<Uid[]>;
            markUnreadAsync(uids: MessageRefs, options?: FolderOptions, callOptions?: CallOptions): Promise<Uid[]>;

            /** `setFlags(uids, 'flagged', 'add')`. */
            flag(uids: MessageRefs, options?: FolderOptions, callOptions?: CallOptions): Promise<Uid[]>;
            flagAsync(uids: MessageRefs, options?: FolderOptions, callOptions?: CallOptions): Promise<Uid[]>;

            /** `setFlags(uids, 'flagged', 'remove')`. */
            unflag(uids: MessageRefs, options?: FolderOptions, callOptions?: CallOptions): Promise<Uid[]>;
            unflagAsync(uids: MessageRefs, options?: FolderOptions, callOptions?: CallOptions): Promise<Uid[]>;

            /** IMAP only; the new UIDs when the server reports them (UIDPLUS), else true. */
            move(uids: MessageRefs, folder: string, options?: TransferOptions, callOptions?: CallOptions): Promise<number[] | true>;
            moveAsync(uids: MessageRefs, folder: string, options?: TransferOptions, callOptions?: CallOptions): Promise<number[] | true>;

            /** IMAP only; like `move` but keeps the source. */
            copy(uids: MessageRefs, folder: string, options?: TransferOptions, callOptions?: CallOptions): Promise<number[] | true>;
            copyAsync(uids: MessageRefs, folder: string, options?: TransferOptions, callOptions?: CallOptions): Promise<number[] | true>;

            /** IMAP: marks `deleted` (expunge on request); POP3: `DELE`, committed when the call ends. */
            delete(uids: MessageRefs, options?: DeleteOptions, callOptions?: CallOptions): Promise<Uid[]>;
            deleteAsync(uids: MessageRefs, options?: DeleteOptions, callOptions?: CallOptions): Promise<Uid[]>;

            /** IMAP only; the number of messages removed. */
            expunge(folder?: string, callOptions?: CallOptions): Promise<number>;
            expungeAsync(folder?: string, callOptions?: CallOptions): Promise<number>;

            /** IMAP only; the new UID when the server reports it (APPENDUID), else null. */
            append(folder: string, message: SendMessage, flags?: FlagName | FlagName[], callOptions?: CallOptions): Promise<number | null>;
            appendAsync(folder: string, message: SendMessage, flags?: FlagName | FlagName[], callOptions?: CallOptions): Promise<number | null>;

            /** Starts watching `folder` (default `'INBOX'`) for new mail; at most 4 watches per client. */
            watch(folder?: string, options?: WatchOptions, callOptions?: CallOptions): Promise<Watch>;
            watch(options: WatchOptions, callOptions?: CallOptions): Promise<Watch>;

        }

        /**
         * The session object returned by {@link connect}.
         * @see https://docs.autojs6.com/#/mailClientType
         */
        interface Client extends Operations {

            /** The connect options without secrets, or `{ alias }`. */
            readonly account: AccountSnapshot;

            /** Whether the plugin session is currently usable (reopened automatically by the next call). */
            readonly isConnected: boolean;

            readonly isClosed: boolean;

            /** Stops every watch and closes the connections; later calls fail with `SESSION_CLOSED`. */
            close(callOptions?: CallOptions): Promise<void>;

            /** `MailClient { provider=qq, address=user@qq.com }`. */
            toString(): string;

        }

  }
// END GENERATED MAIL TYPES

// BEGIN GENERATED FLOW TYPES
export namespace RuntimeFlow {
    interface FlowError extends Error {
      readonly code: "TIMEOUT" | "ACTION_FAILED" | "CANCELLED" | "A11Y_UNAVAILABLE" | "INVALID_TARGET";
      readonly step: string;
      readonly selector: string | null;
      readonly elapsed: number;
      readonly attempts: number;
      readonly reason: string | null;
    }
    interface FlowErrorConstructor {
      new(code: FlowError["code"], step: string, selector?: string | null, elapsed?: number, attempts?: number, reason?: string | null): FlowError;
      (code: FlowError["code"], step: string, selector?: string | null, elapsed?: number, attempts?: number, reason?: string | null): FlowError;
      readonly prototype: FlowError;
    }
    interface Bounds { left: number; top: number; right: number; bottom: number; }
    type Pattern = string | RegExp | {pattern: string; flags?: string};
    /** Exact IDs/class names; regexes use whole-value Android matching with i/m/s flags. */
    interface Selector {
      text?: string; textContains?: string; textMatches?: Pattern;
      desc?: string; descContains?: string; descMatches?: Pattern;
      id?: string; idMatches?: Pattern; className?: string; classNameMatches?: Pattern;
      content?: string; contentMatches?: Pattern;
      clickable?: boolean; enabled?: boolean; scrollable?: boolean; visibleToUser?: boolean;
      checkable?: boolean; checked?: boolean; editable?: boolean; focused?: boolean; selected?: boolean;
      depth?: number; boundsInside?: Bounds; boundsContains?: Bounds;
    }
    /** Immutable-in-origin JSON data. Actions relocate a unique matching node in the same window; stale snapshots reject. */
    interface NodeSnapshot {
      text: string; desc: string | null; id: string | null; className: string | null;
      bounds: Bounds; clickable: boolean; enabled: boolean; visibleToUser: boolean;
      scrollable: boolean; checked: boolean; selected: boolean; packageName: string;
      windowId: number; depth: number; indexInParent: number;
      checkable: boolean; editable: boolean; focused: boolean;
    }
    type Point = readonly [x: number, y: number];
    interface PointValue { x: number; y: number; }
    type Stroke = readonly [duration: number, first: Point, ...points: Point[]] | readonly [start: number, duration: number, first: Point, ...points: Point[]];
    type WidgetResult = "#" | "w" | "widget";
    type WidgetsResult = "[]" | "ws" | "widgets" | "{}" | "wc" | "collection" | "list" | "##" | "#[]" | "[#]" | "w[]" | "[w]" | "#{}" | "{#}" | "w{}" | "{w}";
    type ContentResult = "$" | "txt" | "content";
    type ContentsResult = "contents" | "$$" | "$[]" | "[$]" | "txt[]" | "[txt]" | "content[]" | "[content]";
    type PointResult = "." | "pt" | "point";
    type PointsResult = "points" | "pts" | ".." | ".[]" | "[.]" | "point[]" | "[point]" | "pt[]" | "[pt]";
    type NumericProjection = "childCount" | "width" | "height" | "centerX" | "centerY" | "left" | "top" | "right" | "bottom";
    type Projection = NodeProperty | NumericProjection | "parent" | "point" | "content";
    type ResultType = WidgetResult | WidgetsResult | ContentResult | ContentsResult | PointResult | PointsResult | "?" | "exists" | "@" | "selector" | "sel" | Projection | "" |
      readonly [] | readonly [Projection | WidgetResult | ContentResult | PointResult] | readonly ["child", number] | readonly ["compass", string];
    /** Collections are JSON arrays; projections expose documented data and navigation, never Java reflection. */
    type ResultOf<R> = R extends readonly ["child", number] | readonly ["compass", string] ? NodeSnapshot :
      R extends readonly [] | readonly [WidgetResult] ? NodeSnapshot[] :
      R extends readonly ["$" | "txt"] ? string[] : R extends readonly ["." | "pt"] ? PointValue[] :
      R extends readonly [infer P] ? ResultOf<P> : R extends NodeProperty ? NodeSnapshot[R] :
      R extends NumericProjection ? number : R extends "parent" | WidgetResult ? NodeSnapshot :
      R extends WidgetsResult ? NodeSnapshot[] : R extends ContentResult ? string : R extends ContentsResult ? string[] :
      R extends PointResult ? PointValue : R extends PointsResult ? PointValue[] :
      R extends "?" | "exists" ? true : R extends "@" | "selector" | "sel" ? Selector : never;
    interface ScopeOptions {
      /** A fresh snapshot. Non-null fields override inherited scope; null/undefined keep it. */
      root?: NodeSnapshot | null; compass?: string | null; resultType?: ResultType | null;
    }
    type Condition<T> = (() => T | PromiseLike<T>) | PromiseLike<T>;
    interface Humanize { offset?: number | [number, number]; delay?: number | [number, number]; }
    interface Defaults { timeout: number; interval: number; stableFor: number; recoverService: boolean; trace: boolean; strictActions: boolean; humanize: Humanize | false; }
    interface WaitOptions<T = unknown> extends ScopeOptions {
      /** Milliseconds, 10000 by default; Infinity is unbounded, 0 performs one probe. */
      timeout?: number;
      /** Milliseconds, 200 by default. */
      interval?: number;
      /** Maximum probes, a positive integer or Infinity. */
      times?: number;
      /** Milliseconds of continuous stability, 100 by default. */
      stableFor?: number;
      compare?: "fingerprint" | "bounds" | "content" | ((previous: T, next: T) => boolean | PromiseLike<boolean>);
      /** An acyclic projection copied after each sample. Mutually exclusive with compare. */
      snapshot?: (value: T) => unknown | PromiseLike<unknown>;
      missing?: "reset" | "fail";
      /** Wait quietly through service outages; this does not grant permissions or open Settings. */
      recoverService?: boolean;
    }
    interface Wait<S = NodeSnapshot> {
      (node: NodeSnapshot, options?: WaitOptions<NodeSnapshot>): Flow<NodeSnapshot, S>;
      <R extends ResultType>(selector: Selector | string | RegExp, options: WaitOptions<ResultOf<R>> & {resultType: R}): Flow<ResultOf<R>, S>;
      <R extends ResultType, U = ResultOf<R>>(selector: Selector | string | RegExp, options: WaitOptions<ResultOf<R>> & {resultType: R}, onOk: Success<ResultOf<R>, U> | null, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      <T>(condition: Condition<T>, options?: WaitOptions<T>): Flow<T, S>;
      <T>(condition: Condition<T>, timeout?: number, interval?: number): Flow<T, S>;
      (selector: Selector | string | RegExp, options?: WaitOptions<S>): Flow<S, S>;
      (selector: Selector | string | RegExp, timeout?: number, interval?: number): Flow<S, S>;
      <T, U = T>(condition: Condition<T>, options: WaitOptions<T>, onOk?: Success<T, U> | null, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      <U = S>(selector: Selector | string | RegExp, options: WaitOptions<S>, onOk?: Success<S, U> | null, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
    }
    interface BooleanWait<S = NodeSnapshot> {
      (condition: Condition<unknown> | NodeSnapshot | Selector | string | RegExp, options?: WaitOptions): Flow<boolean, S>;
      (condition: Condition<unknown> | NodeSnapshot | Selector | string | RegExp, timeout?: number, interval?: number): Flow<boolean, S>;
    }
    interface ComponentWait<S = NodeSnapshot> {
      (name: string, options?: WaitOptions<boolean>): Flow<boolean, S>;
      (name: string, timeout?: number, interval?: number): Flow<boolean, S>;
    }
    type OptionalOptions = Pick<WaitOptions, "timeout" | "interval" | "times" | "recoverService" | "root" | "compass" | "resultType">;
    interface RepeatOptions extends ScopeOptions {
      timeout?: number; interval?: number;
      /** Maximum actions; 0 is unlimited within the finite timeout. */
      maxAttempts?: number;
      retryOn?: (error: unknown, attempt: number) => boolean | PromiseLike<boolean>;
    }
    interface Waits<S = NodeSnapshot> {
      readonly wait: Wait<S>; readonly waitUntil: Wait<S>; readonly waitWhile: BooleanWait<S>;
      readonly waitForStable: Wait<S>; readonly waitForVisible: Wait<S>;
      readonly waitForHidden: BooleanWait<S>; readonly waitForGone: BooleanWait<S>;
      readonly waitForActivity: ComponentWait<S>; readonly waitForPackage: ComponentWait<S>;
    }
    type Target = Selector | string | RegExp | NodeSnapshot | (() => NodeSnapshot | null | PromiseLike<NodeSnapshot | null>);
    type Probe = Target | (() => unknown) | boolean | number;
    interface ToolOptions {
      /** Bounds the whole portable operation, including callbacks. Infinity is unbounded. With 0, locate once under the captured default operation budget. */
      timeout?: number; interval?: number; root?: Target; humanize?: Humanize | boolean;
    }
    interface SmartClickOptions extends ToolOptions {
      climb?: boolean; maxClimb?: number;
      /** True by default and requires the gesture grant before the first click. */
      gestureFallback?: boolean;
      verify?: Probe; verifyTimeout?: number; verifyInterval?: number; offset?: number | [number, number];
    }
    type BoundsClickOptions = Omit<SmartClickOptions, "climb" | "maxClimb" | "gestureFallback">;
    interface ClickResult { ok: true; method: "node" | "ancestor" | "gesture"; target: NodeSnapshot; verified: unknown; }
    interface Found { index: number; target: Target; node: NodeSnapshot; }
    interface Clicked extends Found { method: ClickResult["method"]; verified: unknown; }
    type Dismissed = Clicked;
    interface ScrollOptions extends ToolOptions {
      container?: Target; direction?: "up" | "down" | "left" | "right"; maxSteps?: number;
      method?: "action" | "gesture"; stopAtEnd?: boolean; settle?: number; gestureDuration?: number;
    }
    interface TypeIntoOptions extends ToolOptions { clear?: boolean; submit?: boolean; verify?: boolean; verifyTimeout?: number; verifyInterval?: number; }
    interface PopupOptions extends ToolOptions {
      once?: boolean;
      /** Flow supports finite dismissal passes; persistent watch belongs to the Rhino synchronous API. */
      watch?: false;
      settle?: number; maxRounds?: number; debounce?: number; click?: SmartClickOptions;
    }
    type NodeProperty = "text" | "desc" | "id" | "className" | "packageName" | "bounds" | "depth" | "indexInParent" | "clickable" | "enabled" | "scrollable" | "visibleToUser" | "checked" | "checkable" | "editable" | "focused" | "selected";
    interface CollectOptions<T = string> extends Omit<ScrollOptions, "container" | "stopAtEnd"> {
      resultType?: "$" | "#" | NodeProperty | ((node: NodeSnapshot) => T | PromiseLike<T>);
      dedupe?: boolean; until?: (item: T) => unknown; maxItems?: number;
    }
    interface LaunchOptions { timeout?: number; interval?: number; bringToFront?: boolean; }
    interface LaunchResult { packageName: string; launched: boolean; elapsed: number; attempts: number; }
    interface BackOptions extends ToolOptions { maxTimes?: number; delay?: number; }
    interface ToggleOptions extends ToolOptions { verifyTimeout?: number; verifyInterval?: number; click?: SmartClickOptions; }
    interface ToggleResult { node: NodeSnapshot; changed: boolean; checked: boolean; method: ClickResult["method"] | null; }
    type Success<T, U> = (value: T) => U | PromiseLike<U>;
    interface ToolCall<A extends unknown[], O, R, S = NodeSnapshot> {
      (...args: [...positional: A, options?: O]): Flow<R, S>;
      <U = R>(...args: [...positional: A, options: O | undefined, onOk: Success<R, U> | null, onError?: (error: unknown) => U | PromiseLike<U>]): Flow<U, S>;
      <U = R>(...args: [...positional: A, onOk: Success<R, U>, onError?: (error: unknown) => U | PromiseLike<U>]): Flow<U, S>;
    }
    interface CollectRoot<S = NodeSnapshot> {
      (container: Target | null, item: Target, options?: Omit<CollectOptions<string>, "resultType"> & {resultType?: "$"}): Flow<string[], S>;
      (container: Target | null, item: Target, options: CollectOptions<NodeSnapshot> & {resultType: "#"}): Flow<NodeSnapshot[], S>;
      <K extends NodeProperty>(container: Target | null, item: Target, options: CollectOptions<NodeSnapshot[K]> & {resultType: K}): Flow<NodeSnapshot[K][], S>;
      <T>(container: Target | null, item: Target, options: CollectOptions<T> & {resultType: (node: NodeSnapshot) => T | PromiseLike<T>}): Flow<T[], S>;
    }
    interface CollectChain<S = NodeSnapshot> {
      (item: Target, options?: Omit<CollectOptions<string>, "resultType"> & {resultType?: "$"}): Flow<string[], S>;
      (item: Target, options: CollectOptions<NodeSnapshot> & {resultType: "#"}): Flow<NodeSnapshot[], S>;
      <K extends NodeProperty>(item: Target, options: CollectOptions<NodeSnapshot[K]> & {resultType: K}): Flow<NodeSnapshot[K][], S>;
      <T>(item: Target, options: CollectOptions<T> & {resultType: (node: NodeSnapshot) => T | PromiseLike<T>}): Flow<T[], S>;
    }
    interface SharedTools<S = NodeSnapshot> {
      readonly clickIfExists: ToolCall<[target: Target], SmartClickOptions | number, boolean, S>;
      readonly clickBoundsIfExists: ToolCall<[target: Target], BoundsClickOptions | number, boolean, S>;
      readonly clickAny: ToolCall<[targets: readonly Target[]], SmartClickOptions | number, Clicked | null, S>;
      readonly clickBoundsAny: ToolCall<[targets: readonly Target[]], BoundsClickOptions | number, Clicked | null, S>;
      readonly findAny: ToolCall<[targets: readonly Target[]], ToolOptions | number, Found | null, S>;
      /** On a chain, the incoming value supplies container when options.container is absent. */
      readonly scrollUntil: ToolCall<[target: Target], ScrollOptions, NodeSnapshot, S>;
      readonly launchAndWait: ToolCall<[app: string], LaunchOptions | number, LaunchResult, S>;
      readonly backUntil: ToolCall<[condition: Probe], BackOptions | number, unknown, S>;
      readonly backToApp: ToolCall<[app: string], BackOptions | number, string, S>;
    }
    interface ClickWaitOptions extends WaitOptions<NodeSnapshot> { strict?: boolean; delay?: number | [number, number]; }
    interface ClickWait<S = NodeSnapshot> {
      (target: Selector | string | RegExp | NodeSnapshot | Condition<NodeSnapshot>, options?: ClickWaitOptions): Flow<NodeSnapshot, S>;
      (target: Selector | string | RegExp | NodeSnapshot | Condition<NodeSnapshot>, timeout?: number, interval?: number): Flow<NodeSnapshot, S>;
      <T = NodeSnapshot>(target: Selector | string | RegExp | NodeSnapshot | Condition<NodeSnapshot>, options: ClickWaitOptions, onOk: Success<NodeSnapshot, T> | null, onError?: (error: unknown) => T | PromiseLike<T>): Flow<T, S>;
    }
    interface ClickWaitAfter<S = NodeSnapshot> {
      (target: Selector | string | RegExp | NodeSnapshot | Condition<NodeSnapshot>, options: ClickWaitOptions & {delay: number | [number, number]}): Flow<NodeSnapshot, S>;
      (target: Selector | string | RegExp | NodeSnapshot | Condition<NodeSnapshot>, timeout: number, interval: number, delayMin: number, delayMax?: number): Flow<NodeSnapshot, S>;
    }
    interface ClickWaits<S = NodeSnapshot> {
      readonly waitThenClick: ClickWait<S>; readonly clickWait: ClickWait<S>;
      readonly waitThenClickBounds: ClickWait<S>; readonly clickBoundsWait: ClickWait<S>; readonly waitThenLongClick: ClickWait<S>;
      readonly waitForStableThenClick: ClickWait<S>; readonly clickWhenStable: ClickWait<S>;
      readonly waitForStableThenClickBounds: ClickWait<S>; readonly clickBoundsWhenStable: ClickWait<S>;
      readonly clickWhenStableAfter: ClickWaitAfter<S>; readonly clickBoundsWhenStableAfter: ClickWaitAfter<S>;
    }
    interface EventFlow<T, S = NodeSnapshot> extends Flow<T, S> {
      /** Resolves after the actual listener is installed. Rejects if installation or the wait fails first. */
      readonly ready: Promise<void>;
    }
    type EventTypes = string | number | readonly (string | number)[] | null;
    interface IdleOptions { quietFor?: number; timeout?: number; eventTypes?: EventTypes; }
    interface IdleResult { quietFor: number; elapsed: number; events: number; }
    interface AccessibilityEventSnapshot { type: string; eventType: number; packageName: string; className: string; text: string; contentDescription: string; eventTime: number; windowId: number; contentChangeTypes: number; }
    interface ToastSnapshot { type: "toast"; packageName: string; text: string; }
    interface NotificationSnapshot { type: "notification"; packageName: string; title: string; text: string; }
    type EventFilter = {packageName?: Pattern; className?: Pattern; text?: Pattern} | ((event: AccessibilityEventSnapshot) => unknown);
    type ToastFilter = Pattern | {packageName?: Pattern; text?: Pattern} | ((toast: ToastSnapshot) => unknown);
    type NotificationFilter = Pattern | {packageName?: Pattern; title?: Pattern; text?: Pattern} | ((notification: NotificationSnapshot) => unknown);
    interface EventWaits<T, S = NodeSnapshot> {
      waitForIdle(options?: IdleOptions | number): EventFlow<T, S>;
      waitForEvent(types?: EventTypes, filter?: EventFilter | null, timeout?: number): EventFlow<AccessibilityEventSnapshot, S>;
      waitForEvent(types: EventTypes, timeout: number): EventFlow<AccessibilityEventSnapshot, S>;
      waitForToast(filter?: ToastFilter | null, timeout?: number): EventFlow<ToastSnapshot, S>;
      waitForToast(timeout: number): EventFlow<ToastSnapshot, S>;
      waitForNotification(filter?: NotificationFilter | null, timeout?: number): EventFlow<NotificationSnapshot, S>;
      waitForNotification(timeout: number): EventFlow<NotificationSnapshot, S>;
    }
    interface ActionCall<A extends unknown[], T = NodeSnapshot, S = NodeSnapshot> {
      (...args: A): Flow<T | false, S>;
      <U = T | false>(...args: [...positional: A, onOk: Success<T | false, U>, onError?: (error: unknown) => U | PromiseLike<U>]): Flow<U, S>;
    }
    interface NodeActions<T = NodeSnapshot, S = NodeSnapshot> {
      readonly click: ActionCall<[], T, S>; readonly longClick: ActionCall<[], T, S>; readonly clickBounds: ActionCall<[offsetX?: number, offsetY?: number], T, S>;
      readonly setText: ActionCall<[text: string], T, S>; readonly appendText: ActionCall<[text: string], T, S>;
      readonly clear: ActionCall<[], T, S>; readonly paste: ActionCall<[], T, S>; readonly copy: ActionCall<[], T, S>; readonly cut: ActionCall<[], T, S>;
      readonly select: ActionCall<[], T, S>; readonly focus: ActionCall<[], T, S>; readonly clearFocus: ActionCall<[], T, S>;
      readonly scrollForward: ActionCall<[], T, S>; readonly scrollBackward: ActionCall<[], T, S>; readonly scrollUp: ActionCall<[], T, S>; readonly scrollDown: ActionCall<[], T, S>; readonly scrollLeft: ActionCall<[], T, S>; readonly scrollRight: ActionCall<[], T, S>;
      readonly expand: ActionCall<[], T, S>; readonly collapse: ActionCall<[], T, S>; readonly dismiss: ActionCall<[], T, S>; readonly show: ActionCall<[], T, S>; readonly contextClick: ActionCall<[], T, S>; readonly imeEnter: ActionCall<[], T, S>;
      readonly performAction: ActionCall<[action: number, arguments?: Record<string, string | number | boolean>], T, S>;
      clickAfter(min: number, max?: number): Flow<T | false, S>; clickBoundsAfter(min: number, max?: number): Flow<T | false, S>; longClickAfter(min: number, max?: number): Flow<T | false, S>;
    }
    interface Flow<T, S = NodeSnapshot> extends PromiseLike<T>, Waits<S>, SharedTools<S>, ClickWaits<S>, EventWaits<T, S>, NodeActions<T, S> {
      /** Set the root for following waits/tools. A non-node result rejects INVALID_TARGET. */
      within(condition: Selector | string | RegExp | NodeSnapshot | Condition<NodeSnapshot>, options?: WaitOptions<NodeSnapshot>): Flow<NodeSnapshot, S>;
      within(condition: Selector | string | RegExp | NodeSnapshot | Condition<NodeSnapshot>, timeout?: number, interval?: number): Flow<NodeSnapshot, S>;
      within<U = NodeSnapshot>(condition: Selector | string | RegExp | NodeSnapshot | Condition<NodeSnapshot>, options: WaitOptions<NodeSnapshot>, onOk: Success<NodeSnapshot, U> | null, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      within<U = NodeSnapshot>(condition: Selector | string | RegExp | NodeSnapshot | Condition<NodeSnapshot>, onOk: Success<NodeSnapshot, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      within<U = NodeSnapshot>(condition: Selector | string | RegExp | NodeSnapshot | Condition<NodeSnapshot>, timeout: number | undefined, interval: number | undefined, onOk: Success<NodeSnapshot, U> | null, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      scope<R extends ResultType>(options: ScopeOptions & {resultType: R}): Flow<T, ResultOf<R>>;
      scope(options: Omit<ScopeOptions, "resultType"> & {resultType?: null}): Flow<T, S>;
      scope(options: ScopeOptions): Flow<T, unknown>;
      /** Global gestures preserve T. Coordinates are pixels; omitted press duration uses Android's tap timeout. */
      press(point: Point, duration?: number): Flow<T, S>;
      press(x: number, y: number, duration?: number): Flow<T, S>;
      press(duration: number, point: Point): Flow<T, S>;
      press<U = T>(point: Point, onOk: Success<T, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      press<U = T>(point: Point, duration: number, onOk: Success<T, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      press<U = T>(x: number, y: number, onOk: Success<T, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      press<U = T>(x: number, y: number, duration: number, onOk: Success<T, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      press<U = T>(duration: number, point: Point, onOk: Success<T, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      swipe(x1: number, y1: number, x2: number, y2: number, duration: number): Flow<T, S>;
      swipe(pointA: Point, pointB: Point, duration: number): Flow<T, S>;
      swipe(points: readonly [Point, Point] | readonly [number, number, number, number], duration: number): Flow<T, S>;
      swipe(duration: number, pointA: Point, pointB: Point): Flow<T, S>;
      swipe(duration: number, points: readonly [Point, Point] | readonly [number, number, number, number]): Flow<T, S>;
      swipe<U = T>(x1: number, y1: number, x2: number, y2: number, duration: number, onOk: Success<T, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      swipe<U = T>(pointA: Point, pointB: Point, duration: number, onOk: Success<T, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      swipe<U = T>(points: readonly [Point, Point] | readonly [number, number, number, number], duration: number, onOk: Success<T, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      swipe<U = T>(duration: number, pointA: Point, pointB: Point, onOk: Success<T, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      swipe<U = T>(duration: number, points: readonly [Point, Point] | readonly [number, number, number, number], onOk: Success<T, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      gesture(duration: number, first: Point, ...points: Point[]): Flow<T, S>;
      gesture(duration: number, points: readonly Point[] | readonly number[]): Flow<T, S>;
      gesture<U = T>(duration: number, first: Point, ...rest: [...points: Point[], onOk: Success<T, U>]): Flow<U, S>;
      gesture<U = T>(duration: number, first: Point, ...rest: [...points: Point[], onOk: Success<T, U>, onError: (error: unknown) => U | PromiseLike<U>]): Flow<U, S>;
      gesture<U = T>(duration: number, points: readonly Point[] | readonly number[], onOk: Success<T, U>, onError?: (error: unknown) => U | PromiseLike<U>): Flow<U, S>;
      gestures(first: Stroke, ...strokes: Stroke[]): Flow<T, S>;
      gestures<U = T>(first: Stroke, ...rest: [...strokes: Stroke[], onOk: Success<T, U>]): Flow<U, S>;
      gestures<U = T>(first: Stroke, ...rest: [...strokes: Stroke[], onOk: Success<T, U>, onError: (error: unknown) => U | PromiseLike<U>]): Flow<U, S>;
      readonly smartClick: ToolCall<[], SmartClickOptions, ClickResult, S>;
      readonly smartClickBounds: ToolCall<[], BoundsClickOptions, ClickResult, S>;
      readonly typeInto: ToolCall<[text: string], TypeIntoOptions, NodeSnapshot, S>;
      readonly collectList: CollectChain<S>;
      readonly dismissPopups: ToolCall<[targets: readonly Target[]], PopupOptions | number, T, S>;
      readonly toggle: ToolCall<[checked: boolean], ToggleOptions, ToggleResult, S>;
      back(): Flow<T, S>; home(): Flow<T, S>; recents(): Flow<T, S>; notifications(): Flow<T, S>; quickSettings(): Flow<T, S>;
      powerDialog(): Flow<T, S>; splitScreen(): Flow<T, S>; lockScreen(): Flow<T, S>; takeScreenshot(): Flow<T, S>; dismissNotificationShade(): Flow<T, S>;
      readonly state: "pending" | "fulfilled" | "rejected" | "cancelled";
      readonly step: string; readonly value: T | undefined; readonly error: unknown;
      then<U = T, V = never>(onOk?: ((value: T) => U | PromiseLike<U>) | null, onError?: ((error: any) => V | PromiseLike<V>) | null): Flow<U | V, S>;
      catch<U = never>(onError: (error: any) => U | PromiseLike<U>): Flow<T | U, S>;
      else<U = never>(onError: (error: any) => U | PromiseLike<U>): Flow<T | U, S>;
      finally(callback: () => unknown): Flow<T, S>;
      map<U>(callback: (value: T) => U | PromiseLike<U>): Flow<U, S>;
      run<U>(callback: (value: T) => U | PromiseLike<U>): Flow<U, S>;
      peek(callback: (value: T) => unknown): Flow<T, S>;
      filter(callback: (value: T) => unknown): Flow<T, S>;
      sleep(min: number, max?: number): Flow<T, S>;
      delay(min: number, max?: number): Flow<T, S>;
      /** Sets a deadline for steps appended after this one, starting when this step runs. */
      timeout(milliseconds: number): Flow<T, S>;
      /** Reruns only the preceding failed step; never reruns a cancelled step or adopted Promise. */
      retry(times?: number, delay?: number): Flow<T, S>;
      whenPresent<U>(condition: Condition<U>, handler: (value: U) => unknown, options?: OptionalOptions): Flow<T, S>;
      whenPresent(node: NodeSnapshot, handler: (value: NodeSnapshot) => unknown, options?: OptionalOptions): Flow<T, S>;
      whenPresent<R extends ResultType>(selector: Selector | string | RegExp, handler: (value: ResultOf<R>) => unknown, options: OptionalOptions & {resultType: R}): Flow<T, S>;
      whenPresent(selector: Selector | string | RegExp, handler: (value: S) => unknown, options?: OptionalOptions): Flow<T, S>;
      repeatUntil<U>(action: (attempt: number) => unknown, condition: Condition<U>, options?: RepeatOptions): Flow<U, S>;
      repeatUntil(action: (attempt: number) => unknown, node: NodeSnapshot, options?: RepeatOptions): Flow<NodeSnapshot, S>;
      repeatUntil<R extends ResultType>(action: (attempt: number) => unknown, selector: Selector | string | RegExp, options: RepeatOptions & {resultType: R}): Flow<ResultOf<R>, S>;
      repeatUntil(action: (attempt: number) => unknown, selector: Selector | string | RegExp, options?: RepeatOptions): Flow<S, S>;
      cancel(): boolean;
      toPromise(): Promise<T>;
      toString(): string;
    }
    interface FlowConstructor {
      <T>(value: T | PromiseLike<T>): Flow<T>;
      new<T>(value: T | PromiseLike<T>): Flow<T>;
      (): Flow<undefined>; new(): Flow<undefined>;
    }
    type Source<T> = Condition<T> | NodeSnapshot | Selector | string | RegExp;
    interface API extends Waits, Wait, SharedTools, ClickWaits, EventWaits<IdleResult> {
      readonly smartClick: ToolCall<[target: Target], SmartClickOptions, ClickResult>;
      readonly smartClickBounds: ToolCall<[target: Target], BoundsClickOptions, ClickResult>;
      readonly typeInto: ToolCall<[target: Target | number | null, text: string], TypeIntoOptions, NodeSnapshot>;
      readonly collectList: CollectRoot;
      readonly dismissPopups: ToolCall<[targets: readonly Target[]], PopupOptions | number, Dismissed | Dismissed[] | null>;
      readonly toggle: ToolCall<[target: Target, checked: boolean], ToggleOptions, ToggleResult>;
      /** Cancel pending work, close this facade's native client and reject subsequent native tool calls. */
      dispose(): Promise<void>;
      readonly Flow: FlowConstructor; readonly FlowError: FlowErrorConstructor;
      readonly waitAsync: Wait;
      readonly pending: number;
      /** Number of this facade's pending native tool/event operations; local chains do not add workers. */
      readonly workers: number;
      of<T>(value: T | PromiseLike<T>): Flow<T>; of(): Flow<undefined>;
      run<T>(callback: () => T | PromiseLike<T>): Flow<T>;
      sleep(min: number, max?: number): Flow<undefined>; delay(min: number, max?: number): Flow<undefined>;
      all<T>(sources: readonly Source<T>[]): Flow<Array<T | NodeSnapshot>>;
      all<T>(...sources: Source<T>[]): Flow<Array<T | NodeSnapshot>>;
      race<T>(sources: readonly Source<T>[]): Flow<T | NodeSnapshot>; race<T>(...sources: Source<T>[]): Flow<T | NodeSnapshot>;
      any<T>(sources: readonly Source<T>[]): Flow<T | NodeSnapshot>; any<T>(...sources: Source<T>[]): Flow<T | NodeSnapshot>;
      whenPresent<T>(condition: Condition<T>, handler: (value: T) => unknown, options?: OptionalOptions): Flow<undefined>;
      whenPresent(node: NodeSnapshot, handler: (value: NodeSnapshot) => unknown, options?: OptionalOptions): Flow<undefined>;
      whenPresent<R extends ResultType>(selector: Selector | string | RegExp, handler: (value: ResultOf<R>) => unknown, options: OptionalOptions & {resultType: R}): Flow<undefined>;
      whenPresent(selector: Selector | string | RegExp, handler: (value: NodeSnapshot) => unknown, options?: OptionalOptions): Flow<undefined>;
      repeatUntil<T>(action: (attempt: number) => unknown, condition: Condition<T>, options?: RepeatOptions): Flow<T>;
      repeatUntil(action: (attempt: number) => unknown, node: NodeSnapshot, options?: RepeatOptions): Flow<NodeSnapshot>;
      repeatUntil<R extends ResultType>(action: (attempt: number) => unknown, selector: Selector | string | RegExp, options: RepeatOptions & {resultType: R}): Flow<ResultOf<R>>;
      repeatUntil(action: (attempt: number) => unknown, selector: Selector | string | RegExp, options?: RepeatOptions): Flow<NodeSnapshot>;
      cancelAll(): number; defaults(options?: Partial<Defaults>): Defaults; trace(enabled?: boolean): boolean;
    }
  }
// END GENERATED FLOW TYPES

// BEGIN GENERATED AI TYPES
export namespace RuntimeAi {
    type JsonPrimitive = string | number | boolean | null;
    type JsonValue = JsonPrimitive | JsonObject | JsonValue[];
    type JsonObject = { [key: string]: JsonValue };
    type CallOptions = Pick<AutomationCallOptions, "signal" | "timeoutMs">;
    interface AiError extends Error { readonly route: "plugin"; code: ErrorCode | (string & {}); }
    /** Task execution stays in 3-Stove Agent with the installed AutoJs6 host's model/device brokers. */
    interface AgentAPI {
      readonly AgentError: { new(message: string, code?: string, hint?: string): AgentError };
      run(goal: string, options?: AgentRunOptions, callOptions?: CallOptions): Promise<AgentRun>;
      /** Creates a reusable JSON snapshot. Effective overrides cannot widen its tools, roots or budgets. */
      create(options: AgentRunOptions): AgentAssistant;
      get(id: string, callOptions?: CallOptions): Promise<AgentRun | null>;
      list(filter?: AgentListFilter, callOptions?: CallOptions): Promise<AgentRunSummary[]>;
      catalog(query?: string, callOptions?: CallOptions): Promise<AgentScriptEntry[]>;
      presets(callOptions?: CallOptions): Promise<string[]>;
      /** Does not connect. A delegated application sees only its own active task IDs and queue count. */
      status(callOptions?: CallOptions): Promise<AgentLinkStatus>;
      /** Returns null outside registered execution; Workers share their execution's context. */
      context(): Promise<AgentExecutionContext | null>;
      /** Last JSON report wins until registered execution ends; returns false outside it. */
      result(value: JsonValue): Promise<boolean>;
      hasAccess(): Promise<boolean>;
      /** Generated applications require explicit consent in the installed AutoJs6 host. */
      requestAccess(): Promise<boolean>;
      /** Releases this facade's observers and cancels its owned non-detached tasks. */
      close(): Promise<boolean>;
    }
        interface AgentAssistant {
            /** Each access returns an independent JSON snapshot. */
            readonly options: AgentRunOptions;
            run(goal: string, overrides?: AgentRunOptions, callOptions?: CallOptions): Promise<AgentRun>;
        }

        /** script_dynamic requires AI Agent 1.1.0 and a compatible host. It starts disabled and confirms each source separately. */
        type AgentToolGroup = 'observe' | 'act' | 'ocr' | 'gesture' | 'script' | 'script_dynamic' | 'files' | 'shell' | 'memory' | 'user' | 'mcp';
        type AgentTerminalState = 'completed' | 'partial' | 'failed' | 'blocked' | 'cancelled';
        type AgentState = 'queued' | 'running' | 'waiting_input' | 'waiting_confirmation' | 'cancelling' | AgentTerminalState;

        interface AgentBudget {
            /** Initial default 40; positive integer, protocol maximum 200. */
            maxSteps?: number;
            /** Initial default 60; positive integer, protocol maximum 300. */
            maxModelCalls?: number;
            /** Initial default 600000 (detached: 1800000); maximum 1800000 (detached: 3600000). */
            maxDurationMs?: number;
            /** Initial default 300000; positive integer, protocol maximum 1000000. */
            maxTotalTokens?: number;
        }

        interface AgentRunOptions {
            /** Omission uses the plugin's selected default preset. Settings are snapshotted on enqueue. */
            preset?: string;
            /** Exact model target. Omission uses the preset, then an available local or first available target. */
            target?: TargetId;
            /** Narrows global permissions and the preset; cannot enable a globally disabled tool group.
             * gesture, script_dynamic, files, shell and mcp start disabled. Generated scripts always require individual confirmation.
             * mcp requires AI Agent 1.2.0 and a compatible host. Configure servers, allowed tools and per-server risk in the plugin. */
            tools?: AgentToolGroup[] | { enable?: AgentToolGroup[]; disable?: AgentToolGroup[] };
            /** Positive integers within both host hard ceilings and the plugin's configured budget. */
            budget?: AgentBudget;
            /** Cannot relax cautious mode set globally or by the preset. */
            confirm?: 'default' | 'cautious';
            interaction?: 'plugin' | 'script';
            detached?: boolean;
            context?: string;
            parameters?: JsonObject;
            /** False disables automatic injection only. Disable the memory tool group to forbid queries/proposals.
             * True cannot widen the preset's memory scope or re-enable disabled injection. */
            memory?: boolean;
            scriptRoots?: string[];
            locale?: string;
            /** Plan mode: the model first proposes 1 to 8 steps, reviewed through an input event of kind plan before the first tool runs.
             * Omission follows the preset's plan mode switch. */
            plan?: boolean;
        }

        interface AgentRun {
            readonly id: string;
            readonly state: AgentState;
            readonly goal: string;
            readonly startedAt: number;
            readonly detached: boolean;
            /** Control/link failure only; task failures appear in AgentResult.error. */
            readonly error: AgentError | null;
            /** Resolves every task terminal status. Rejects on control/link failures. */
            readonly result: Promise<AgentResult>;
            on<K extends keyof AgentEventMap>(event: K, listener: (event: AgentEventMap[K]) => void): this;
            off<K extends keyof AgentEventMap>(event: K, listener: (event: AgentEventMap[K]) => void): this;
            once<K extends keyof AgentEventMap>(event: K, listener: (event: AgentEventMap[K]) => void): this;
            /** text/choice take a string, confirm a boolean, plan an array of 1 to 8 non-blank steps (at most 200 characters each). */
            respond(requestId: string, value: string | boolean | string[], callOptions?: CallOptions): Promise<boolean>;
            confirm(requestId: string, allowed: boolean, scope?: 'once' | 'run', callOptions?: CallOptions): Promise<boolean>;
            /** Requests cancellation; already completed external actions are not undone. */
            cancel(reason?: string, callOptions?: CallOptions): Promise<this>;
            /** Asynchronous wait. JOIN_TIMEOUT leaves the task running. */
            join(timeoutMs?: number): Promise<AgentResult>;
        }

        interface AgentError extends Error {
            code: string;
            message: string;
            hint?: string;
        }

        interface AgentUsage {
            modelCalls: number;
            inputTokens?: number;
            outputTokens?: number;
            totalTokens?: number;
            estimated: boolean;
        }

        interface AgentResult {
            id: string;
            status: AgentTerminalState;
            /** Legacy interrupted history can contain only id/status/error. */
            summary?: string;
            evidence?: string[];
            unfinished?: string[];
            steps?: number;
            toolCalls?: number;
            usage?: AgentUsage;
            durationMs?: number;
            script?: { id: string; path: string; executionId: number; result?: JsonValue; resultTruncated?: boolean };
            orderStatus?: 'none' | 'cart' | 'pending_payment' | 'submitted' | 'paid';
            error?: AgentError;
            truncated?: boolean;
        }

        interface AgentRunSummary {
            id: string;
            goal: string;
            state: AgentState;
            startedAt: number;
            detached: boolean;
            preset: string;
        }

        interface AgentListFilter {
            state?: AgentState | AgentState[];
            preset?: string;
            since?: number;
            until?: number;
            /** Inclusive range 1..50, default 50. */
            limit?: number;
        }

        interface AgentLinkStatus {
            state: string;
            queuedCount: number;
            runningRunId?: string;
            errorCode?: string;
        }

        interface AgentScriptEntry {
            id: string;
            path: string;
            kind: 'project' | 'file';
            description: string;
            parameters: JsonObject;
            result?: JsonObject;
            risk: 'readonly' | 'normal' | 'sensitive';
            confirm: 'never' | 'before-run';
            timeoutMs: number;
            examples: string[];
            tags: string[];
            updatedAt: number;
        }

        interface AgentInputEvent {
            requestId: string;
            kind: 'text' | 'choice' | 'confirm' | 'plan';
            question: string;
            choices: string[];
            /** Present for kind plan: the proposed steps, which may be edited before they are sent back with respond. */
            steps?: string[];
            memoryKey?: string;
            timeoutMs: number;
            readOnly: boolean;
        }

        interface AgentConfirmationEvent {
            requestId: string;
            tool: string;
            description: string;
            risk: 'normal' | 'sensitive';
            arguments: JsonObject;
            allowRunScope: boolean;
            timeoutMs: number;
            readOnly: boolean;
        }

        interface AgentProgressEvent {
            step: number;
            message: string;
            budget: { steps: number; modelCalls: number; durationMs: number; tokens: number };
        }

        interface AgentStepEvent {
            index: number;
            kind: string;
            decision: JsonObject;
            tool?: string;
            arguments?: JsonObject;
            confirmation?: 'allowed' | 'denied' | 'auto';
            observation?: string;
            elapsedMs: number;
            usage?: AgentUsage;
            error?: string;
            truncated?: boolean;
        }

        interface AgentEventMap {
            state: { from: AgentState; to: AgentState };
            progress: AgentProgressEvent;
            step: AgentStepEvent;
            input: AgentInputEvent;
            confirmation: AgentConfirmationEvent;
            done: AgentResult;
            error: AgentError;
        }

        type AgentEvent = AgentEventMap[keyof AgentEventMap];

        interface AgentExecutionContext {
            runId: string;
            parameters: { [key: string]: JsonPrimitive };
            presetName: string | null;
        }

    interface API {
      (input: Input, options?: Options | null, callOptions?: CallOptions): Promise<string>;
      readonly agent: AgentAPI;
      readonly AiError: { new(message?: string, code?: string): AiError };
      ask(input: Input, options?: Options | null, callOptions?: CallOptions): Promise<string>;
      chat(input: Input, options?: Options | null, callOptions?: CallOptions): Promise<Response>;
      stream(input: Input, options?: Options | null, callOptions?: CallOptions): Stream;
      session(options?: SessionOptions | null, callOptions?: CallOptions): Promise<Session>;
      catalog(options?: CatalogOptions | null, callOptions?: CallOptions): Promise<TargetCatalog>;
      /** The host uses its signature entry. Packaged apps need explicit consent in 3-Stone AI. */
      hasAccess(callOptions?: CallOptions): Promise<boolean>;
      /** Opens 3-Stone AI confirmation for local models and configured online accounts. */
      requestAccess(callOptions?: CallOptions): Promise<boolean>;
      /** Cancels this facade's AI work, sessions and owned non-detached Agent tasks. Subsequent calls create a fresh client. */
      close(): Promise<boolean>;
    }
        interface Message {
            role: 'system' | 'user' | 'assistant';
            content: string;
        }

        interface UserMessage extends Message {
            role: 'user';
        }

        type MessageList = [...Message[], UserMessage];

        interface Request extends Options {
            messages: MessageList;
        }

        type Input = string | UserMessage | MessageList | Request;

        interface PluginComponent {
            packageName: string;
            className: string;
        }

        /** Selects an exact third-party plugin component and provider. */
        interface PluginSelection {
            component: PluginComponent;
            providerId: string;
        }

        /** Selects the official 3-Stone AI plugin when component is omitted. */
        interface OfficialPluginSelection {
            component?: never;
            providerId?: string | null;
        }

        type PluginSelector = true | OfficialPluginSelection | PluginSelection;

        /** Stable catalog target ID, for example `local:model-id` or `profile:profile-id`. */
        type TargetId = string;

        /** Explicit inference backend profile when the selected target exposes one. */
        type Backend = 'cpu' | 'gpu' | 'npu';

        interface GenerationOptions {
            /** Finite, non-negative sampling temperature. */
            temperature?: number | null;
            /** Positive-integer top-K sampling limit. */
            topK?: number | null;
            /** Finite top-P sampling threshold in the inclusive range 0 through 1. */
            topP?: number | null;
            /** Provider-enforced output-token ceiling from 1 through 2,147,483,647. */
            maxTokens?: number | null;
            /** Unavailable profiles are rejected without fallback. */
            backend?: Backend | null;
            /** Requests reasoning output and requires the target's `reasoning` capability. */
            reasoning?: boolean | null;
            /** Enables native JSON Schema constrained decoding; defaults to false. */
            structuredJson?: boolean | null;
            /** JSON Schema object; providing it also enables structured JSON output. */
            responseSchema?: JsonObject | null;
            /** Absolute request timeout in milliseconds. */
            timeout?: number | null;
        }

        /**
         * Selects one plugin target. Omitting both selectors uses the official
         * 3-Stone AI plugin and its declared default target.
         */
        interface Options extends GenerationOptions {
            plugin?: PluginSelector;
            target?: TargetId | null;
        }

        /** Fixed configuration for one persistent plugin-target Conversation. */
        interface SessionOptions extends Options {
            /** Optional system preface sent only when the Conversation is created. */
            system?: string;
        }

        /** Options for {@link API.catalog}; the official plugin is the default. */
        interface CatalogOptions {
            plugin?: PluginSelector;
            timeout?: number | null;
        }

        interface Usage {
            inputTokens: number | null;
            outputTokens: number | null;
            totalTokens: number | null;
            reasoningTokens: number | null;
            cachedInputTokens: number | null;
            durationMillis: number | null;
            raw: null;
        }

        type FinishReason =
            | 'stop'
            | 'length'
            | 'tool_calls'
            | 'content_filter'
            | 'error'
            | 'other';

        interface PluginIdentity {
            provider: string;
            component: PluginComponent;
        }

        interface TargetProfileMetadata {
            id: string;
            provider: string;
            model: string;
            target: TargetId;
        }

        interface Response {
            text: string;
            reasoning: string;
            toolCalls: [];
            usage: Usage;
            finishReason: FinishReason;
            message: null;
            error: null;
            raw: null;
            profile: TargetProfileMetadata | null;
            target: Target;
            plugin: PluginIdentity;
            route: 'plugin';
            provider: string;
            model: string;
        }

        interface StreamMetadata {
            route: 'plugin';
            provider: string;
            model: string;
            target: Target;
            profile: TargetProfileMetadata | null;
            plugin: PluginIdentity;
        }

        interface StreamChunk {
            text: string;
            reasoning: string;
            toolCalls: [];
            usage: null;
            finishReason: null;
            done: false;
            raw: null;
        }

        type TargetCapability =
            | 'vision'
            | 'streaming'
            | 'reasoning'
            | 'tools'
            | 'structured-json'
            | 'usage'
            | 'persistent-session';

        type TargetControl =
            | 'maximum-output-tokens'
            | 'temperature'
            | 'top-k'
            | 'top-p'
            | 'response-json-schema'
            | 'backend-profile';

        interface TargetLimits {
            maximumContextBytes: number;
            maximumOutputBytes: number;
        }

        interface Target {
            id: TargetId;
            displayName: string;
            provider: string;
            profile: string | null;
            model: string;
            locality: 'local' | 'remote' | 'hybrid';
            credentialMode: 'none' | 'plugin-managed';
            configured: boolean;
            available: boolean;
            availability: 'available' | 'unavailable';
            isDefault: boolean;
            capabilities: TargetCapability[];
            supportedControls: TargetControl[];
            limits: TargetLimits;
            origins: string[];
            backendProfiles: BackendProfile[];
        }

        interface TargetCatalog {
            generation: string;
            plugin: PluginIdentity;
            defaultTarget: TargetId | null;
            targets: Target[];
        }

        interface AvailableBackendProfile {
            id: Backend;
            availability: 'available';
            unavailableReason?: never;
        }

        interface UnavailableBackendProfile {
            id: Backend;
            availability: 'unavailable';
            unavailableReason:
                | 'abi-unsupported'
                | 'opencl-library-unavailable'
                | 'npu-runtime-not-packaged';
        }

        type BackendProfile = AvailableBackendProfile | UnavailableBackendProfile;

        interface Session {
            readonly provider: string;
            readonly model: string;
            readonly target: TargetId;
            readonly profile: string | null;
            readonly backend: Backend | null;
            readonly state: 'ready' | 'closed';
            readonly isClosed: boolean;

            /** Sends only this new user prompt while retaining native Conversation context. */
            ask(prompt: string, callOptions?: CallOptions): Promise<string>;

            /** Sends only this new user prompt and returns the complete response. */
            chat(prompt: string, callOptions?: CallOptions): Promise<Response>;

            /** Streams one new user turn. Cancelling it also closes this session. */
            stream(prompt: string, callOptions?: CallOptions): Stream;

            /** Idempotently closes the persistent Conversation and any active turn. */
            close(): Promise<void>;
        }

        interface PublicError {
            name: string;
            message: string;
            route: 'plugin';
            code: ErrorCode;
        }

        type ErrorCode =
            | 'INVALID_REQUEST'
            | 'AI_PROVIDER_UNAVAILABLE'
            | 'AI_PROVIDER_DISABLED'
            | 'AI_PROVIDER_REJECTED'
            | 'BUSY'
            | 'FUSED'
            | 'CANCELLED'
            | 'TIMED_OUT'
            | 'BINDER_DIED'
            | 'TARGET_NOT_FOUND'
            | 'TARGET_NOT_CONFIGURED'
            | 'TARGET_UNAVAILABLE'
            | 'TARGET_CAPABILITY_MISMATCH'
            | 'BACKEND_UNAVAILABLE'
            | 'SESSION_CLOSED'
            | 'SESSION_REJECTED'
            | 'PROVIDER_FAILED'
            | 'INTERNAL_FAILURE' | 'PERMISSION_DENIED' | 'TIMEOUT' | 'BACKPRESSURE';

    interface EventArguments {
      open: [metadata: StreamMetadata]; delta: [text: string, chunk: StreamChunk]; chunk: [chunk: StreamChunk];
      usage: [usage: Usage]; done: [response: Response]; error: [error: AiError]; cancelled: [];
    }
    interface Stream {
      readonly state: 'created' | 'open' | 'done' | 'error' | 'cancelled'; readonly isDone: boolean;
      readonly ready: Promise<Stream>; readonly result: Promise<Response>;
      on<K extends keyof EventArguments>(name: K, listener: (...args: EventArguments[K]) => void): this;
      once<K extends keyof EventArguments>(name: K, listener: (...args: EventArguments[K]) => void): this;
      addListener<K extends keyof EventArguments>(name: K, listener: (...args: EventArguments[K]) => void): this;
      off<K extends keyof EventArguments>(name: K, listener: (...args: EventArguments[K]) => void): this;
      removeListener<K extends keyof EventArguments>(name: K, listener: (...args: EventArguments[K]) => void): this;
      removeAllListeners(name?: keyof EventArguments): this;
      listenerCount(name: keyof EventArguments): number;
      cancel(): this;
    }
  }
// END GENERATED AI TYPES

export interface HostClient {
  readonly ai: RuntimeAi.API;
  readonly flow: RuntimeFlow.API;
  readonly mail: RuntimeMail.API;
  readonly epub: RuntimeEpub.API;
  readonly speech: RuntimeSpeech.API;
  readonly tts: RuntimeTts.API;
  readonly java: RuntimeJava.API;
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
