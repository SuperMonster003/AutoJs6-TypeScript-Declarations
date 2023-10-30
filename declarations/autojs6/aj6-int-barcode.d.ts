// Type definitions for AutoJs6 internal module http
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Oct 11, 2023

/// <reference path="../index.d.ts" />

/**
 * @Source %AutoJs6Assets%/modules/__barcode__.js
 */

declare namespace Internal {

    import DetectOptions = Internal.Barcode.DetectOptions;
    import DetectOptionsWithoutIsAll = Internal.Barcode.DetectOptionsWithoutIsAll;
    import MLKitBarcode = com.google.mlkit.vision.barcode.common.Barcode;

    interface Barcode {

        (options?: DetectOptions): string | string[] | null;
        (isAll: boolean): string | string[] | null;
        (img: ImageWrapper | string, options?: DetectOptions): string | string[] | null;
        (img: ImageWrapper | string, isAll: boolean): string | string[] | null;

        detect(options?: DetectOptions): Barcode.Result | Barcode.Result[] | null;
        detect(isAll: boolean): Barcode.Result | Barcode.Result[] | null;
        detect(img: ImageWrapper | string, options?: DetectOptions): Barcode.Result | Barcode.Result[] | null;
        detect(img: ImageWrapper | string, isAll: boolean): Barcode.Result | Barcode.Result[] | null;

        detectAll(options?: DetectOptionsWithoutIsAll): Barcode.Result[];
        detectAll(img: ImageWrapper | string, options?: DetectOptionsWithoutIsAll): Barcode.Result[];

        recognizeText(options?: DetectOptions): string | string[] | null;
        recognizeText(isAll: boolean): string | string[] | null;
        recognizeText(img: ImageWrapper | string, options?: DetectOptions): string | string[] | null;
        recognizeText(img: ImageWrapper | string, isAll: boolean): string | string[] | null;

        recognizeTexts(options?: DetectOptionsWithoutIsAll): string[];
        recognizeTexts(img: ImageWrapper | string, options?: DetectOptionsWithoutIsAll): string[];

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

        interface DetectOptions extends DetectOptionsWithoutIsAll {
            /** @default false */
            isAll?: boolean;
        }

        interface DetectOptionsWithoutIsAll {
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

        class Result extends org.autojs.autojs.runtime.api.WrappedBarcode {

            boundingBox: Android.Rect | null;
            calendarEvent: MLKitBarcode.CalendarEvent | null;
            contactInfo: MLKitBarcode.ContactInfo | null;
            cornerPoints: android.graphics.Point[] | null;
            displayValue: string | null;
            driverLicense: MLKitBarcode.DriverLicense | null;
            email: MLKitBarcode.Email | null;
            format: number;
            formatName: string;
            geoPoint: MLKitBarcode.GeoPoint | null;
            phone: MLKitBarcode.Phone | null;
            rawBytes: number[] | null;
            rawValue: string | null;
            sms: MLKitBarcode.Sms | null;
            type: number;
            typeName: string;
            url: MLKitBarcode.UrlBookmark | null;
            valueType: number;
            valueTypeName: string;
            wifi: MLKitBarcode.WiFi | null;

        }

    }

}
