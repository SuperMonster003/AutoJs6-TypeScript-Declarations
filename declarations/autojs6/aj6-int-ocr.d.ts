// Type definitions for AutoJs6 internal module ocr
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.8.4
//
// Last modified: Jul 27, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/ocr/Ocr.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/ocr/OcrMLKit.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/ocr/OcrPaddle.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/ocr/OcrRapid.kt
 */

declare namespace Internal {

    import ModeName = Internal.Ocr.ModeName;
    import DetectOptionsMLKit = Internal.Ocr.DetectOptionsMLKit;
    import DetectOptionsPaddle = Internal.Ocr.DetectOptionsPaddle;
    import DetectOptionsRapid = Internal.Ocr.DetectOptionsRapid;
    import DetectOptionsAny = Internal.Ocr.DetectOptionsAny;
    import Mode = Internal.Ocr.Mode;

    interface OcrMLKit extends OcrDetector {

        (options?: DetectOptionsMLKit): string[];
        (region: OmniRegion): string[];
        (img: ImageWrapper | string, options?: DetectOptionsMLKit): string[];
        (img: ImageWrapper | string, region: OmniRegion): string[];

        recognizeText(options?: DetectOptionsMLKit): string[];
        recognizeText(region: OmniRegion): string[];
        recognizeText(img: ImageWrapper | string, options?: DetectOptionsMLKit): string[];
        recognizeText(img: ImageWrapper | string, region: OmniRegion): string[];

        detect(options?: DetectOptionsMLKit): org.autojs.autojs.runtime.api.OcrResult[];
        detect(region: OmniRegion): org.autojs.autojs.runtime.api.OcrResult[];
        detect(img: ImageWrapper | string, options?: DetectOptionsMLKit): org.autojs.autojs.runtime.api.OcrResult[];
        detect(img: ImageWrapper | string, region: OmniRegion): org.autojs.autojs.runtime.api.OcrResult[];

    }

    interface OcrPaddle extends OcrDetector {

        (options?: DetectOptionsPaddle): string[];
        (region: OmniRegion): string[];
        (img: ImageWrapper | string, options?: DetectOptionsPaddle): string[];
        (img: ImageWrapper | string, region: OmniRegion): string[];

        recognizeText(options?: DetectOptionsPaddle): string[];
        recognizeText(region: OmniRegion): string[];
        recognizeText(img: ImageWrapper | string, options?: DetectOptionsPaddle): string[];
        recognizeText(img: ImageWrapper | string, region: OmniRegion): string[];

        detect(options?: DetectOptionsPaddle): org.autojs.autojs.runtime.api.OcrResult[];
        detect(region: OmniRegion): org.autojs.autojs.runtime.api.OcrResult[];
        detect(img: ImageWrapper | string, options?: DetectOptionsPaddle): org.autojs.autojs.runtime.api.OcrResult[];
        detect(img: ImageWrapper | string, region: OmniRegion): org.autojs.autojs.runtime.api.OcrResult[];

    }

    interface OcrRapid extends OcrDetector {

        (options?: DetectOptionsRapid): string[];
        (region: OmniRegion): string[];
        (img: ImageWrapper | string, options?: DetectOptionsRapid): string[];
        (img: ImageWrapper | string, region: OmniRegion): string[];

        recognizeText(options?: DetectOptionsRapid): string[];
        recognizeText(region: OmniRegion): string[];
        recognizeText(img: ImageWrapper | string, options?: DetectOptionsRapid): string[];
        recognizeText(img: ImageWrapper | string, region: OmniRegion): string[];

        detect(options?: DetectOptionsRapid): org.autojs.autojs.runtime.api.OcrResult[];
        detect(region: OmniRegion): org.autojs.autojs.runtime.api.OcrResult[];
        detect(img: ImageWrapper | string, options?: DetectOptionsRapid): org.autojs.autojs.runtime.api.OcrResult[];
        detect(img: ImageWrapper | string, region: OmniRegion): org.autojs.autojs.runtime.api.OcrResult[];

    }

    interface Ocr extends OcrDetector {

        paddle: OcrPaddle;
        mlkit: OcrMLKit;
        rapid: OcrRapid;

        (options?: DetectOptionsAny): string[];
        (region: OmniRegion): string[];
        (img: ImageWrapper | string, options?: DetectOptionsAny): string[];
        (img: ImageWrapper | string, region: OmniRegion): string[];

        recognizeText(options?: DetectOptionsAny): string[];
        recognizeText(region: OmniRegion): string[];
        recognizeText(img: ImageWrapper | string, options?: DetectOptionsAny): string[];
        recognizeText(img: ImageWrapper | string, region: OmniRegion): string[];

        detect(options?: DetectOptionsAny): org.autojs.autojs.runtime.api.OcrResult[];
        detect(region: OmniRegion): org.autojs.autojs.runtime.api.OcrResult[];
        detect(img: ImageWrapper | string, options?: DetectOptionsAny): org.autojs.autojs.runtime.api.OcrResult[];
        detect(img: ImageWrapper | string, region: OmniRegion): org.autojs.autojs.runtime.api.OcrResult[];

        get mode(): ModeName;
        set mode(mode: Mode);

        tap(mode: Mode): void;

        summary(): string;

    }

    interface OcrDetector {

        recognizeText(options?: Ocr.DetectOptions): string[];
        recognizeText(region: OmniRegion): string[];
        recognizeText(img: ImageWrapper | string, options?: Ocr.DetectOptions): string[];
        recognizeText(img: ImageWrapper | string, region: OmniRegion): string[];

        detect(options?: Ocr.DetectOptions): org.autojs.autojs.runtime.api.OcrResult[];
        detect(region: OmniRegion): org.autojs.autojs.runtime.api.OcrResult[];
        detect(img: ImageWrapper | string, options?: Ocr.DetectOptions): org.autojs.autojs.runtime.api.OcrResult[];
        detect(img: ImageWrapper | string, region: OmniRegion): org.autojs.autojs.runtime.api.OcrResult[];

    }

    namespace Ocr {

        type Mode = OcrPaddle | OcrMLKit | OcrRapid | 'paddle' | 'mlkit' | 'rapid' | string;
        type ModeName = 'unknown' | 'mlkit' | 'paddle' | 'rapid' | string;
        type DetectOptionsAny = DetectOptionsMLKit | DetectOptionsPaddle | DetectOptionsRapid;

        type RecognizeTextMethod = (img: ImageWrapper) => string[];
        type DetectMethod = (img: ImageWrapper) => org.autojs.autojs.runtime.api.OcrResult[];

        interface DetectOptions {
            region?: OmniRegion;
            mode?: ModeName;
        }

        interface PluginOptions extends DetectOptions {
            useRaw?: boolean;
            raw?: boolean;
            imageQuality?: number;
            imageFormat?: Images.Format | string;
            engineId?: string;
            engine?: string;
            variant?: string;
            profile?: string;
        }

        interface DetectOptionsMLKit extends PluginOptions {
            /* Empty body. */
        }

        interface DetectOptionsRapid extends PluginOptions {
            detLongSize?: number;
            maxSideLen?: number;
            boxScoreThresh?: number;
            scoreThreshold?: number;
        }

        interface DetectOptionsPaddle extends PluginOptions {

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

            /**
             * Whether to enable OpenCL in Paddle OCR.
             * @default false
             */
            useOpenCL?: boolean;

            /**
             * Detection long side size. A non-positive value keeps the engine default.
             * @default 0
             */
            detLongSize?: number;

            /** Detection side limit passed to the Paddle OCR plugin. */
            detLimitSideLen?: number;

            /**
             * Detection score threshold. A negative value keeps the engine default.
             * @default -1
             */
            scoreThreshold?: number;

            /**
             * Merge adjacent recognition boxes on the same visual line.
             * Ignored when word segmentation is enabled.
             * @default false
             */
            mergeLine?: boolean;

            /** @default false */
            splitWords?: boolean;

            /** @default false */
            useWordSegmentation?: boolean;

        }

    }

}
