// Type definitions for AutoJs6 internal module http
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Oct 11, 2023

/// <reference path="../index.d.ts" />

/**
 * @Source %AutoJs6Assets%/modules/__qrcode__.js
 */

declare namespace Internal {

    import DetectOptions = Internal.QrCode.DetectOptions;
    import DetectOptionsWithoutIsAll = Internal.QrCode.DetectOptionsWithoutIsAll;

    interface QrCode {

        (options?: DetectOptions): string | string[] | null;
        (isAll: boolean): string | string[] | null;
        (img: ImageWrapper | string, options?: DetectOptions): string | string[] | null;
        (img: ImageWrapper | string, isAll: boolean): string | string[] | null;

        detect(options?: DetectOptions): QrCode.Result | QrCode.Result[] | null;
        detect(isAll: boolean): QrCode.Result | QrCode.Result[] | null;
        detect(img: ImageWrapper | string, options?: DetectOptions): QrCode.Result | QrCode.Result[] | null;
        detect(img: ImageWrapper | string, isAll: boolean): QrCode.Result | QrCode.Result[] | null;

        detectAll(options?: DetectOptionsWithoutIsAll): QrCode.Result[];
        detectAll(img: ImageWrapper | string, options?: DetectOptionsWithoutIsAll): QrCode.Result[];

        recognizeText(options?: DetectOptions): string | string[] | null;
        recognizeText(isAll: boolean): string | string[] | null;
        recognizeText(img: ImageWrapper | string, options?: DetectOptions): string | string[] | null;
        recognizeText(img: ImageWrapper | string, isAll: boolean): string | string[] | null;

        recognizeTexts(options?: DetectOptionsWithoutIsAll): string[];
        recognizeTexts(img: ImageWrapper | string, options?: DetectOptionsWithoutIsAll): string[];

    }

    namespace QrCode {

        interface DetectOptions extends DetectOptionsWithoutIsAll {
            /** @default false */
            isAll?: boolean;
        }

        interface DetectOptionsWithoutIsAll {
            /** @default false */
            enableAllPotentialBarcodes?: boolean;
        }

        class Result extends Internal.Barcode.Result {
            /* Empty body. */
        }

    }

}
