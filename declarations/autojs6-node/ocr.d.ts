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

    export interface OcrResult {
      readonly text: string;
      readonly confidence: number | null;
      readonly bounds?: AutoJs6Node.Bounds;
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
