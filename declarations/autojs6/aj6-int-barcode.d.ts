// Type definitions for AutoJs6 internal module barcode
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Jul 27, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/barcode/Barcode.kt
 */

declare namespace Internal {

    import DetectOptions = Internal.Barcode.DetectOptions;
    interface Barcode {

        (options: Barcode.DetectAllOptions): string[];
        (options: DetectOptions, isAll: true): string[];
        (isAll: true): string[];
        (img: ImageWrapper | string, options: Barcode.DetectAllOptions): string[];
        (img: ImageWrapper | string, isAll: true): string[];
        (img: ImageWrapper | string, options: DetectOptions, isAll: true): string[];
        (options?: DetectOptions): string | string[] | null;
        (options: DetectOptions, isAll: boolean): string | string[] | null;
        (isAll: false): string | null;
        (isAll: boolean): string | string[] | null;
        (img: ImageWrapper | string, options?: DetectOptions): string | string[] | null;
        (img: ImageWrapper | string, isAll: boolean): string | string[] | null;
        (img: ImageWrapper | string, options: DetectOptions, isAll: boolean): string | string[] | null;

        detect(options: Barcode.DetectAllOptions): Barcode.Result[];
        detect(options: DetectOptions, isAll: true): Barcode.Result[];
        detect(isAll: true): Barcode.Result[];
        detect(img: ImageWrapper | string, options: Barcode.DetectAllOptions): Barcode.Result[];
        detect(img: ImageWrapper | string, isAll: true): Barcode.Result[];
        detect(img: ImageWrapper | string, options: DetectOptions, isAll: true): Barcode.Result[];
        detect(options?: DetectOptions): Barcode.Result | Barcode.Result[] | null;
        detect(options: DetectOptions, isAll: boolean): Barcode.Result | Barcode.Result[] | null;
        detect(isAll: false): Barcode.Result | null;
        detect(isAll: boolean): Barcode.Result | Barcode.Result[] | null;
        detect(img: ImageWrapper | string, options?: DetectOptions): Barcode.Result | Barcode.Result[] | null;
        detect(img: ImageWrapper | string, isAll: boolean): Barcode.Result | Barcode.Result[] | null;
        detect(img: ImageWrapper | string, options: DetectOptions, isAll: boolean): Barcode.Result | Barcode.Result[] | null;

        detectAll(options?: DetectOptions): Barcode.Result[];
        detectAll(img: ImageWrapper | string, options?: DetectOptions): Barcode.Result[];

        recognizeText(options: Barcode.DetectAllOptions): string[];
        recognizeText(options: DetectOptions, isAll: true): string[];
        recognizeText(isAll: true): string[];
        recognizeText(img: ImageWrapper | string, options: Barcode.DetectAllOptions): string[];
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

    namespace Barcode {

        type FormatUppercaseShort =
            'CODE_128' | 'CODE_39' | 'CODE_93' | 'CODABAR' | 'EAN_13' |
            'EAN_8' | 'ITF' | 'UPC_A' | 'UPC_E' | 'QR_CODE' |
            'PDF417' | 'AZTEC' | 'DATA_MATRIX' | 'QRCODE'

        type FormatLowercaseShort = 'code-128' | 'code-39' | 'code-93' | 'codabar' | 'ean-13' |
            'ean-8' | 'itf' | 'upc-a' | 'upc-e' | 'qr-code' |
            'pdf417' | 'aztec' | 'data-matrix' | 'qrcode';

        type FormatUppercaseLong = `FORMAT_${FormatUppercaseShort}`;

        type FormatLowercaseLong = `FORMAT_${FormatLowercaseShort}`;

        type Format = FormatUppercaseLong | FormatUppercaseShort | FormatLowercaseLong | FormatLowercaseShort;

        interface DetectOptions {
            /** @default false */
            isAll?: boolean;
            /** @default false */
            enableAllPotentialBarcodes?: boolean;
            /**
             * @default 0
             * @example
             * com.google.mlkit.vision.barcode.common.Barcode.FORMAT_QR_CODE;
             * "qr-code";
             * "QR_CODE";
             * "qrcode"; // specially adaptation
             * "QRCODE"; // specially adaptation
             */
            format?: number | number[] | Format | Format[];
        }

        interface DetectAllOptions extends DetectOptions {
            isAll: true;
        }

        class Result extends org.autojs.autojs.runtime.api.WrappedBarcode {

            boundingBox: Android.Rect | null;
            calendarEvent: any | null;
            contactInfo: any | null;
            cornerPoints: android.graphics.Point[] | null;
            displayValue: string | null;
            driverLicense: any | null;
            email: any | null;
            format: number;
            formatName: string;
            geoPoint: any | null;
            phone: any | null;
            rawBytes: number[] | null;
            rawValue: string | null;
            sms: any | null;
            type: number;
            typeName: string;
            url: any | null;
            valueType: number;
            valueTypeName: string;
            wifi: any | null;

        }

    }

}
