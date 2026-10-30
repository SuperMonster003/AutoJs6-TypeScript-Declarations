// Type definitions for AutoJs6 internal module ocr
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 4.8.4
//
// Last modified: Oct 29, 2026

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

        detect(options?: DetectOptionsMLKit): Ocr.Result[];
        detect(region: OmniRegion): Ocr.Result[];
        detect(img: ImageWrapper | string, options?: DetectOptionsMLKit): Ocr.Result[];
        detect(img: ImageWrapper | string, region: OmniRegion): Ocr.Result[];

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

        detect(options?: DetectOptionsPaddle): Ocr.Result[];
        detect(region: OmniRegion): Ocr.Result[];
        detect(img: ImageWrapper | string, options?: DetectOptionsPaddle): Ocr.Result[];
        detect(img: ImageWrapper | string, region: OmniRegion): Ocr.Result[];

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

        detect(options?: DetectOptionsRapid): Ocr.Result[];
        detect(region: OmniRegion): Ocr.Result[];
        detect(img: ImageWrapper | string, options?: DetectOptionsRapid): Ocr.Result[];
        detect(img: ImageWrapper | string, region: OmniRegion): Ocr.Result[];

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

        detect(options?: DetectOptionsAny): Ocr.Result[];
        detect(region: OmniRegion): Ocr.Result[];
        detect(img: ImageWrapper | string, options?: DetectOptionsAny): Ocr.Result[];
        detect(img: ImageWrapper | string, region: OmniRegion): Ocr.Result[];

        /** Resolved engine; auto selection returns an empty string when no enabled plugin is available. */
        get mode(): ModeName;
        /** Fix an engine, or use auto, an empty string, null or undefined to restore live auto selection. */
        set mode(mode: Mode);

        tap(mode: Mode): void;

        summary(): string;

    }

    interface OcrDetector {

        recognizeText(options?: Ocr.DetectOptions): string[];
        recognizeText(region: OmniRegion): string[];
        recognizeText(img: ImageWrapper | string, options?: Ocr.DetectOptions): string[];
        recognizeText(img: ImageWrapper | string, region: OmniRegion): string[];

        detect(options?: Ocr.DetectOptions): Ocr.Result[];
        detect(region: OmniRegion): Ocr.Result[];
        detect(img: ImageWrapper | string, options?: Ocr.DetectOptions): Ocr.Result[];
        detect(img: ImageWrapper | string, region: OmniRegion): Ocr.Result[];

    }

    namespace Ocr {

        type Mode = OcrPaddle | OcrMLKit | OcrRapid | 'auto' | '' | 'paddle' | 'mlkit' | 'rapid' | string | null | undefined;
        type ModeName = '' | 'mlkit' | 'paddle' | 'rapid';
        type DetectOptionsAny = DetectOptionsMLKit | DetectOptionsPaddle | DetectOptionsRapid;

        /**
         * One recognized text region; ocr.detect and the detect method of each engine return an array of them.
         * @see https://docs.autojs6.com/#/dataTypes?id=ocrresult
         */
        class Result extends org.autojs.autojs.runtime.api.OcrResult {
            /** The recognized text. */
            readonly text: string;
            /** Same as text. */
            readonly label: string;
            /** Recognition confidence, from 0 to 1. */
            readonly confidence: number;
            /** The bounding rectangle of the recognized text. */
            readonly bounds: Android.Rect;
            /** What the engine attaches to this result; an empty object when it attaches nothing. */
            readonly extras: ResultExtras;
            /**
             * Reading order: negative when this result comes first, positive when it comes after, 0 at the same position.
             * Results whose vertical centers differ by less than half the taller height are on one line (left to right),
             * otherwise they are ordered by their bottom edges (top to bottom).
             */
            compareTo(other: org.autojs.autojs.runtime.api.OcrResult): number;
            toString(): string;
        }

        /**
         * Extras of an engine result. The keys depend on the engine and plugin. Booleans and strings stay as they are,
         * numbers become JS numbers, arrays and collections become arrays, nested bundles and maps become objects,
         * and other values are dropped. Results merged by mergeLine keep only the keys equal in every part.
         * @see https://docs.autojs6.com/#/dataTypes?id=p-extras
         */
        interface ResultExtras {
            /** Vertices of the text quadrilateral as [x1, y1, x2, y2, ...], in the same coordinates as bounds. */
            quad?: number[];
            /** The execution provider that actually ran (PP-OCRv3 ONNX Runtime). */
            executionProvider?: 'cpu' | 'nnapi' | string;
            [key: string]: unknown;
        }

        type RecognizeTextMethod = (img: ImageWrapper) => string[];
        type DetectMethod = (img: ImageWrapper) => Ocr.Result[];

        interface DetectOptions {
            region?: OmniRegion;
            /** Per-call selection. Omission follows ocr.mode; explicit nullish values request auto selection. */
            mode?: Mode;
        }

        interface PluginOptions extends DetectOptions {
            useRaw?: boolean;
            raw?: boolean;
            imageQuality?: number;
            imageFormat?: Images.Format | string;
            engineId?: string;
            engine?: string;
            /**
             * Engine variant. PP-OCRv3 of Paddle OCR has "v3" (ONNX Runtime) and "v3-paddle-lite" (Paddle Lite).
             * Without engineId, variant and profile, the highest version number wins, then the plugin declared as
             * the mobile default (the ONNX Runtime Chinese pack for PP-OCRv3), then the package name.
             */
            variant?: string;
            /**
             * Plugin profile, which takes part in plugin matching: only plugins declaring the same profile match.
             * PP-OCRv3 language packs: "zh", "en", "zh-hant", "ja", "ko".
             */
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
             * PP-OCRv3 的 ONNX Runtime 版使用 int8 量化模型, Paddle Lite 版使用官方 slim 模型.
             * @default true
             */
            useSlim?: boolean;

            /**
             * Run the text direction classifier before recognition, which corrects upside-down text and takes about
             * 5-10% more time. Only plugins with a classifier use it; left unset, the plugin keeps its own default.
             * @default false
             */
            useCls?: boolean;

            /**
             * CPU 线程数.
             * @default 4
             */
            cpuThreadNum?: number;

            /**
             * Whether to enable OpenCL in Paddle OCR. PP-OCRv3 ONNX Runtime maps it to the NNAPI execution provider
             * and falls back to the CPU below API 27 or when NNAPI fails; see extras.executionProvider of the results.
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
