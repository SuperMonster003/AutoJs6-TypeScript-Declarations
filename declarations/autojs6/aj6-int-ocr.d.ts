// Type definitions for AutoJs6 internal module http
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.8.4
//
// Last modified: Mar 18, 2023

/// <reference path="../index.d.ts" />

/**
 * @Source %AutoJs6Assets%/modules/__ocr__.js
 */

declare namespace Internal {

    import ModeName = Internal.Ocr.ModeName;
    import DetectOptionsMLKit = Internal.Ocr.DetectOptionsMLKit;
    import DetectOptionsPaddle = Internal.Ocr.DetectOptionsPaddle;
    import RecognizeTextMethod = Internal.Ocr.RecognizeTextMethod;
    import DetectMethod = Internal.Ocr.DetectMethod;
    import Mode = Internal.Ocr.Mode;

    interface OcrMLKit {

        recognizeTextMethodCreator(options: DetectOptionsMLKit): RecognizeTextMethod;

        detectMethodCreator(options: DetectOptionsMLKit): DetectMethod;

    }

    interface OcrPaddle {

        recognizeTextMethodCreator(options: DetectOptionsPaddle): RecognizeTextMethod;

        detectMethodCreator(options: DetectOptionsPaddle): DetectMethod;

    }

    interface Ocr {

        paddle: OcrPaddle;
        mlkit: OcrMLKit;

        (options?: DetectOptionsMLKit | DetectOptionsPaddle): string[];
        (region: OmniRegion): string[];
        (img: ImageWrapper | string, options?: DetectOptionsMLKit | DetectOptionsPaddle): string[];
        (img: ImageWrapper | string, region: OmniRegion): string[];

        recognizeText(options?: DetectOptionsMLKit | DetectOptionsPaddle): string[];
        recognizeText(region: OmniRegion): string[];
        recognizeText(img: ImageWrapper | string, options?: DetectOptionsMLKit | DetectOptionsPaddle): string[];
        recognizeText(img: ImageWrapper | string, region: OmniRegion): string[];

        detect(options?: DetectOptionsMLKit | DetectOptionsPaddle): org.autojs.autojs.runtime.api.OcrResult[];
        detect(region: OmniRegion): org.autojs.autojs.runtime.api.OcrResult[];
        detect(img: ImageWrapper | string, options?: DetectOptionsMLKit | DetectOptionsPaddle): org.autojs.autojs.runtime.api.OcrResult[];
        detect(img: ImageWrapper | string, region: OmniRegion): org.autojs.autojs.runtime.api.OcrResult[];

        get mode(): ModeName;
        set mode(mode: Mode);

        tap(mode: Mode): void;

        summary(): string;

    }

    namespace Ocr {

        type Mode = OcrPaddle | OcrMLKit | 'paddle' | 'mlkit' | string;
        type ModeName = 'unknown' | 'mlkit' | 'paddle' | string;

        type RecognizeTextMethod = (img: ImageWrapper) => string[];
        type DetectMethod = (img: ImageWrapper) => org.autojs.autojs.runtime.api.OcrResult[];

        interface DetectOptions {
            region?: OmniRegion;
        }

        interface DetectOptionsMLKit extends DetectOptions {
            /* Empty body. */
        }

        interface DetectOptionsPaddle extends DetectOptions {

            /**
             * 是否使用轻量化模型.
             * @default true
             */
            useSlim?: boolean;

            /**
             * CPU 线程数.
             * @default 4
             */
            cpuThreadNum?: number;

        }

    }

}
