// Type definitions for AutoJs6 internal module http
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.8.4
//
// Last modified: Mar 18, 2023

/// <reference path="../autojs6.d.ts" />

/**
 * @Source %AutoJs6Assets%/modules/__ocr__.js
 */

declare namespace Internal {

    interface Ocr {

        (img: ImageWrapper, options?: { region?: Images.Options.Region }): string[];

        recognizeText(img: ImageWrapper, options?: { region?: Images.Options.Region }): string[];
        recognizeText(imgPath: string, options?: { region?: Images.Options.Region }): string[];

        detect(img: ImageWrapper, options?: { region?: Images.Options.Region }): org.autojs.autojs.runtime.api.OcrResult[];
        detect(imgPath: string, options?: { region?: Images.Options.Region }): org.autojs.autojs.runtime.api.OcrResult[];

    }

}