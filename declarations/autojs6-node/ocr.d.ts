declare module "ocr" {
  namespace ocr {
    export interface RegionObject {
      readonly x: number;
      readonly y: number;
      readonly width: number;
      readonly height: number;
    }

    export type Region = readonly [number, number, number, number] | RegionObject;

    export interface OcrOptions extends AutoJs6Node.BridgeCallOptions {
      /** Select an installed host OCR plugin; unavailable selections return category "unavailable". */
      engineId?: string;
      engine?: string;
      variant?: string;
      lang?: string;
      region?: Region;
      /** PP-OCRv3 on ONNX Runtime: run on NNAPI, falling back to the CPU; extras.executionProvider tells which ran. */
      useOpenCL?: boolean;
      /** Paddle OCR: CPU threads, 4 by default. */
      cpuThreadNum?: number;
      /** Paddle OCR: use the slim models, true by default. */
      useSlim?: boolean;
      /** Paddle OCR: run the text direction classifier; the plugin decides when this is not set. */
      useCls?: boolean;
      /** Paddle OCR: limit of the detection side, passed on when above 0 and preferred to detLongSize. */
      detLimitSideLen?: number;
      /** Paddle OCR: join the results of a text line (extras keeps the keys all parts agree on); recognizeText does not merge. */
      mergeLine?: boolean;
      /** Long side of the detection input: 0 by default on Paddle OCR, the fallback of maxSideLen on Rapid OCR. */
      detLongSize?: number;
      /** Confidence threshold: -1 by default on Paddle OCR (the plugin decides), boxScoreThresh on Rapid OCR. */
      scoreThreshold?: number;
      /** Rapid OCR: long side of the detection input, detLongSize by default; 1024 when neither is above 0. */
      maxSideLen?: number;
      /** Rapid OCR: the default of scoreThreshold, 0.5 by default. */
      boxScoreThresh?: number;
      /** Rhino's mode for this call: auto, mlkit, paddle or rapid (an engine is then chosen unless engine / engineId is set). */
      mode?: OcrMode;
    }

    /** auto leaves the engine to the host; mlkit / paddle / rapid select mlkit-ocr / paddle-ocr / rapid-ocr. */
    export type OcrMode = "auto" | "mlkit" | "paddle" | "rapid";

    /** ocr.mlkit / paddle / rapid: the module with a fixed engine. */
    export interface FixedEngineOcr {
      recognize(image: AutoJs6Node.ImageHandleLike, options?: OcrOptions): Promise<readonly OcrResult[]>;
      recognizeText(image: AutoJs6Node.ImageHandleLike, options?: OcrOptions): Promise<string>;
      detect(image: AutoJs6Node.ImageHandleLike, options?: OcrOptions): Promise<readonly OcrResult[]>;
      toString(): string;
    }

    /**
     * What the engine attaches to a result (Rhino's OcrResult.extras), frozen. The keys depend on the engine and plugin.
     * Booleans and strings stay as they are, numbers become JS numbers (NaN and infinities become null), arrays and
     * collections become arrays, nested bundles and maps become objects, and other values are dropped.
     */
    export interface OcrResultExtras {
      /** Vertices of the text quadrilateral as [x1, y1, x2, y2, ...], in the same coordinates as bounds. */
      readonly quad?: readonly number[];
      /** The execution provider that actually ran (PP-OCRv3 on ONNX Runtime). */
      readonly executionProvider?: "cpu" | "nnapi" | string;
      readonly [key: string]: unknown;
    }

    export interface OcrResult {
      readonly text: string;
      readonly confidence: number | null;
      readonly bounds?: AutoJs6Node.Bounds;
      /** An empty object when the engine attaches nothing or the host is older than AutoJs6 6.8.0. */
      readonly extras: OcrResultExtras;
    }

    export interface OcrModule {
      recognize(image: AutoJs6Node.ImageHandleLike, options?: OcrOptions): Promise<readonly OcrResult[]>;
      recognizeText(image: AutoJs6Node.ImageHandleLike, options?: OcrOptions): Promise<string>;
      detectTextBounds(image: AutoJs6Node.ImageHandleLike, options?: OcrOptions): Promise<readonly OcrResult[]>;
      /** Rhino's detect: detectTextBounds. Node's recognizeText resolves one string (Rhino's returns lines). */
      detect(image: AutoJs6Node.ImageHandleLike, options?: OcrOptions): Promise<readonly OcrResult[]>;
      /** The mode of this thread (api-coverage P3.4); assigning "" or null restores auto. */
      mode: OcrMode;
      tap(mode: OcrMode | Capitalize<OcrMode>): void;
      summary(): string;
      toString(): string;
      readonly mlkit: FixedEngineOcr;
      readonly paddle: FixedEngineOcr;
      readonly rapid: FixedEngineOcr;
    }
  }

  const ocr: ocr.OcrModule;
  export = ocr;
}
