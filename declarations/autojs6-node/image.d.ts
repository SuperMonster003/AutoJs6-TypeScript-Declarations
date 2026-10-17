/** @remarks 捕获需 Android 录屏授权; 图像分析复用宿主 OpenCV 插件。参见 docs/HOST-API.md。 */
/** Main-thread and Worker modules. Workers forward asynchronous calls through their parent. */
declare module "image" {
  namespace image {
    export type ColorInput = number | string;
    export type ImageInput = AutoJs6Node.ImageHandleLike | string;
    export type EncodedImageFormat = "png" | "jpg" | "jpeg" | "webp";
    export type ImageByteInput = ArrayBuffer | ArrayBufferView | readonly number[];
    export type ImageRegion = readonly [number, number, number, number];
    export type KernelSize = number | readonly [number, number];
    export type InterpolationName = "nearest" | "linear" | "area" | "cubic" | "lanczos4" | "linear_exact" | "nearest_exact";
    export type Interpolation = InterpolationName | Uppercase<InterpolationName> | `INTER_${Uppercase<InterpolationName>}` | 0 | 1 | 2 | 3 | 4 | 5 | 6;
    export type FlipDirection = "horizontal" | "vertical" | "both" | "none" | "h" | "v" | "x" | "y" | "xy" | "yx" | "all";
    /** Native Node Buffer when @types/node is present; byte-array methods are always available. */
    export type ImageBytes = typeof globalThis extends { Buffer: { prototype: infer NativeBuffer } } ? NativeBuffer : Uint8Array;
    export type MultiColorPointInput = readonly [number, number, ColorInput] | MultiColorPoint;

    export interface ImageSize {
      readonly width: number;
      readonly height: number;
    }

    export interface ImageMatch extends AutoJs6Node.Point {
      readonly score: number | null;
    }

    export interface MultiColorPoint {
      readonly x: number;
      readonly y: number;
      readonly color: ColorInput;
    }

    export interface CaptureScreenOptions extends AutoJs6Node.BridgeCallOptions {
      orientation?: "portrait" | "landscape" | "auto";
      requireExistingPermission?: boolean;
    }

    export interface SaveImageOptions extends AutoJs6Node.BridgeCallOptions {
      format?: EncodedImageFormat;
      quality?: number;
    }

    export interface ImageBytesOptions extends AutoJs6Node.BridgeCallOptions {
      /** PNG by default; rgba is tightly packed, straight-alpha sRGB RGBA8. */
      format?: EncodedImageFormat | "rgba";
      /** Encoding quality in 0..100; raw rgba has no compression quality. */
      quality?: number;
      region?: ImageRegion;
    }

    export interface ReadPixelsOptions extends AutoJs6Node.BridgeCallOptions {
      region?: ImageRegion;
    }

    export interface ImagePixels {
      /** Row-major signed ARGB32 values, independent of the source bitmap. */
      readonly data: number[];
      readonly width: number;
      readonly height: number;
    }

    export interface RotateOptions extends AutoJs6Node.BridgeCallOptions {
      centerX?: number;
      centerY?: number;
      filter?: boolean;
    }

    export interface ScaleOptions extends AutoJs6Node.BridgeCallOptions {
      interpolation?: Interpolation;
    }

    export interface FlipOptions extends AutoJs6Node.BridgeCallOptions {
      direction?: FlipDirection;
    }

    export interface GaussianBlurOptions extends AutoJs6Node.BridgeCallOptions {
      sigmaX?: number;
      sigmaY?: number;
    }

    export interface FindImageOptions extends AutoJs6Node.BridgeCallOptions {
      threshold?: number;
      region?: readonly [number, number, number, number];
    }

    export interface MatchTemplateOptions extends FindImageOptions {
      limit?: number;
      max?: number;
    }

    export interface ThresholdOptions extends AutoJs6Node.BridgeCallOptions {
      threshold?: number;
      maxValue?: number;
      type?: "binary" | "binary_inv" | "trunc" | "tozero" | "tozero_inv";
    }

    export interface FindColorOptions extends AutoJs6Node.BridgeCallOptions {
      threshold?: number;
      region?: readonly [number, number, number, number];
    }

    export interface DetectColorOptions extends AutoJs6Node.BridgeCallOptions {
      threshold?: number;
      algorithm?: "diff" | "rgb" | "rgb+" | "hs" | "h" | "equal" | "oklab";
    }

    export interface ImageModule {
      requestScreenCapture(options?: CaptureScreenOptions & { width?: number; height?: number }): Promise<boolean>;
      stopScreenCapture(options?: AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      captureScreen(options?: CaptureScreenOptions): Promise<AutoJs6Node.ImageHandle>;
      /** Absolute or working-directory-relative file path; Android file access applies with the updated host. */
      readImage(path: string, options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.ImageHandle>;
      /** Main thread: PFD-backed Buffer. Worker: an independent Buffer copied through structured clone.
       * Bytes remain valid after the image handle is recycled. */
      toBytes(image: ImageInput, options?: ImageBytesOptions | ImageBytesOptions["format"], qualityOrOptions?: number | AutoJs6Node.BridgeCallOptions): Promise<ImageBytes>;
      /** Encoded images use descriptor uploads; no raw RGBA input is implied. */
      fromBytes(bytes: ImageByteInput, options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.ImageHandle>;
      fromBase64(encoded: string, options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.ImageHandle>;
      toBase64(image: ImageInput, formatOrOptions?: EncodedImageFormat | SaveImageOptions, qualityOrOptions?: number | AutoJs6Node.BridgeCallOptions): Promise<string>;
      pixel(image: ImageInput, x: number, y: number, options?: AutoJs6Node.BridgeCallOptions): Promise<number>;
      readPixels(image: ImageInput, options?: ReadPixelsOptions): Promise<ImagePixels>;
      /** Derived images own new handles; the source stays usable. */
      copy(image: ImageInput, options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.ImageHandle>;
      rotate(image: ImageInput, degrees: number, options?: RotateOptions): Promise<AutoJs6Node.ImageHandle>;
      rotate(image: ImageInput, degrees: number, centerX: number, centerY?: number, options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.ImageHandle>;
      scale(image: ImageInput, fx: number, options?: ScaleOptions): Promise<AutoJs6Node.ImageHandle>;
      scale(image: ImageInput, fx: number, fy?: number, options?: ScaleOptions): Promise<AutoJs6Node.ImageHandle>;
      flip(image: ImageInput, directionOrOptions?: FlipDirection | FlipOptions, options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.ImageHandle>;
      flip(image: ImageInput, horizontal: boolean, verticalOrOptions?: boolean | AutoJs6Node.BridgeCallOptions, options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.ImageHandle>;
      blur(image: ImageInput, size: KernelSize, options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.ImageHandle>;
      gaussianBlur(image: ImageInput, size: KernelSize, options?: GaussianBlurOptions): Promise<AutoJs6Node.ImageHandle>;
      gaussianBlur(image: ImageInput, size: KernelSize, sigmaX?: number, sigmaY?: number, options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.ImageHandle>;
      medianBlur(image: ImageInput, size: KernelSize, options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.ImageHandle>;
      invert(image: ImageInput, options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.ImageHandle>;
      detectColor(image: ImageInput, color: ColorInput, x: number, y: number, thresholdOrOptions?: number | DetectColorOptions): Promise<boolean>;
      detectsColor(image: ImageInput, color: ColorInput, x: number, y: number, thresholdOrOptions?: number | DetectColorOptions): Promise<boolean>;
      findPointsByColor(image: ImageInput, color: ColorInput, options?: FindColorOptions): Promise<readonly AutoJs6Node.Point[]>;
      findAllPointsForColor(image: ImageInput, color: ColorInput, options?: FindColorOptions): Promise<readonly AutoJs6Node.Point[]>;
      findColorEquals(image: ImageInput, color: ColorInput, options?: Omit<FindColorOptions, "threshold">): Promise<AutoJs6Node.Point | null>;
      findPointByColor(image: AutoJs6Node.ImageHandleLike, color: ColorInput, options?: FindColorOptions): Promise<AutoJs6Node.Point | null>;
      findPointByColors(image: AutoJs6Node.ImageHandleLike, color: ColorInput, points: readonly MultiColorPointInput[], options?: FindColorOptions): Promise<AutoJs6Node.Point | null>;
      read(path: string, options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.ImageHandle>;
      save(image: ImageInput, path: string, formatOrOptions?: EncodedImageFormat | SaveImageOptions, qualityOrOptions?: number | AutoJs6Node.BridgeCallOptions): Promise<boolean>;
      saveImage(image: AutoJs6Node.ImageHandleLike, path: string, options?: SaveImageOptions): Promise<void>;
      saveImage(image: AutoJs6Node.ImageHandleLike, path: string, format: SaveImageOptions["format"], options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
      clip(image: AutoJs6Node.ImageHandleLike, x: number, y: number, width: number, height: number, options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.ImageHandle>;
      resize(image: AutoJs6Node.ImageHandleLike, width: number, height: number, options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.ImageHandle>;
      grayscale(image: ImageInput, options?: AutoJs6Node.BridgeCallOptions): Promise<AutoJs6Node.ImageHandle>;
      threshold(image: ImageInput, options?: ThresholdOptions): Promise<AutoJs6Node.ImageHandle>;
      findImage(image: AutoJs6Node.ImageHandleLike, template: AutoJs6Node.ImageHandleLike, options?: FindImageOptions): Promise<AutoJs6Node.Point | null>;
      matchTemplate(image: AutoJs6Node.ImageHandleLike, template: AutoJs6Node.ImageHandleLike, options?: MatchTemplateOptions): Promise<readonly ImageMatch[]>;
      findColor(image: AutoJs6Node.ImageHandleLike, color: ColorInput, options?: FindColorOptions): Promise<AutoJs6Node.Point | null>;
      findMultiColors(image: AutoJs6Node.ImageHandleLike, color: ColorInput, points: readonly MultiColorPointInput[], options?: FindColorOptions): Promise<AutoJs6Node.Point | null>;
      getSize(image: AutoJs6Node.ImageHandleLike): ImageSize;
      getWidth(image: AutoJs6Node.ImageHandleLike): number;
      getHeight(image: AutoJs6Node.ImageHandleLike): number;
      /** Local bookkeeping shared by image/images in this thread. Other threads and raw-bridge recycling are not tracked. */
      isRecycled(image: AutoJs6Node.ImageHandleLike): boolean;
      recycle(image: AutoJs6Node.ImageHandleLike, options?: AutoJs6Node.BridgeCallOptions): Promise<void>;
    }
  }

  const image: image.ImageModule;
  export = image;
}
