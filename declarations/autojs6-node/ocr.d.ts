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
    }
  }

  const ocr: ocr.OcrModule;
  export = ocr;
}
