// Type definitions for AutoJs6 internal module qrcode
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Jul 27, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/barcode/QrCode.kt
 */

declare namespace Internal {

    import DetectOptions = Internal.QrCode.DetectOptions;

    interface QrCode {

        (options: QrCode.DetectAllOptions): string[];
        (options: DetectOptions, isAll: true): string[];
        (isAll: true): string[];
        (img: ImageWrapper | string, options: QrCode.DetectAllOptions): string[];
        (img: ImageWrapper | string, isAll: true): string[];
        (img: ImageWrapper | string, options: DetectOptions, isAll: true): string[];
        (options?: DetectOptions): string | string[] | null;
        (options: DetectOptions, isAll: boolean): string | string[] | null;
        (isAll: false): string | null;
        (isAll: boolean): string | string[] | null;
        (img: ImageWrapper | string, options?: DetectOptions): string | string[] | null;
        (img: ImageWrapper | string, isAll: boolean): string | string[] | null;
        (img: ImageWrapper | string, options: DetectOptions, isAll: boolean): string | string[] | null;

        detect(options: QrCode.DetectAllOptions): QrCode.Result[];
        detect(options: DetectOptions, isAll: true): QrCode.Result[];
        detect(isAll: true): QrCode.Result[];
        detect(img: ImageWrapper | string, options: QrCode.DetectAllOptions): QrCode.Result[];
        detect(img: ImageWrapper | string, isAll: true): QrCode.Result[];
        detect(img: ImageWrapper | string, options: DetectOptions, isAll: true): QrCode.Result[];
        detect(options?: DetectOptions): QrCode.Result | QrCode.Result[] | null;
        detect(options: DetectOptions, isAll: boolean): QrCode.Result | QrCode.Result[] | null;
        detect(isAll: false): QrCode.Result | null;
        detect(isAll: boolean): QrCode.Result | QrCode.Result[] | null;
        detect(img: ImageWrapper | string, options?: DetectOptions): QrCode.Result | QrCode.Result[] | null;
        detect(img: ImageWrapper | string, isAll: boolean): QrCode.Result | QrCode.Result[] | null;
        detect(img: ImageWrapper | string, options: DetectOptions, isAll: boolean): QrCode.Result | QrCode.Result[] | null;

        detectAll(options?: DetectOptions): QrCode.Result[];
        detectAll(img: ImageWrapper | string, options?: DetectOptions): QrCode.Result[];

        recognizeText(options: QrCode.DetectAllOptions): string[];
        recognizeText(options: DetectOptions, isAll: true): string[];
        recognizeText(isAll: true): string[];
        recognizeText(img: ImageWrapper | string, options: QrCode.DetectAllOptions): string[];
        recognizeText(img: ImageWrapper | string, isAll: true): string[];
        recognizeText(img: ImageWrapper | string, options: DetectOptions, isAll: true): string[];
        recognizeText(options?: DetectOptions): string | string[] | null;
        recognizeText(options: DetectOptions, isAll: boolean): string | string[] | null;
        recognizeText(isAll: false): string | null;
        recognizeText(isAll: boolean): string | string[] | null;
        recognizeText(img: ImageWrapper | string, options?: DetectOptions): string | string[] | null;
        recognizeText(img: ImageWrapper | string, isAll: boolean): string | string[] | null;
        recognizeText(img: ImageWrapper | string, options: DetectOptions, isAll: boolean): string | string[] | null;

        recognizeTexts(options?: DetectOptions): string[];
        recognizeTexts(img: ImageWrapper | string, options?: DetectOptions): string[];

    }

    namespace QrCode {

        interface DetectOptions {
            /** @default false */
            isAll?: boolean;
            /** @default false */
            enableAllPotentialQrCodes?: boolean;
            /** Compatibility alias accepted by the shared barcode parser. */
            enableAllPotentialBarcodes?: boolean;
        }

        interface DetectAllOptions extends DetectOptions {
            isAll: true;
        }

        class Result extends Internal.Barcode.Result {
            /* Empty body. */
        }

    }

}
