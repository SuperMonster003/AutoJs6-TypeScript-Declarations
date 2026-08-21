// Type definitions for AutoJs6 internal module yolo
//
// Definitions by: SuperMonster003 <https://github.com/SuperMonster003>
// TypeScript Version: 5.1.3
//
// Last modified: Aug 21, 2026

/// <reference path="./index.d.ts" />

/**
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/yolo/Yolo.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/yolo/YoloDetectorNativeObject.kt
 * @Source %AutoJs6%/app/src/main/java/org/autojs/autojs/runtime/api/augment/yolo/YoloScriptException.kt
 */

declare namespace Internal {

    interface Yolo {

        /**
         * Opens a detector session through the exact Android provider component.
         * The model directory must contain model.json, model.ncnn.param, and model.ncnn.bin.
         */
        load(modelDir: string, options: Yolo.LoadOptions): Yolo.Detector;

    }

    namespace Yolo {

        type Device = 'cpu';

        type ErrorCode =
            | 'YOLO_COMPONENT_REQUIRED'
            | 'YOLO_INVALID_ARGUMENT'
            | 'YOLO_MODEL_INVALID'
            | 'YOLO_MODEL_REJECTED'
            | 'YOLO_UNSUPPORTED_CAPABILITY'
            | 'YOLO_PROVIDER_UNAVAILABLE'
            | 'YOLO_SESSION_OPEN_FAILED'
            | 'YOLO_DETECT_FAILED'
            | 'YOLO_SESSION_CLOSED';

        interface LoadOptions {

            /** Flattened Android service component in package/class form. */
            component: string;

            /** @default 'cpu' */
            device?: Device;

            /** Integer in the range 1..64. @default 4 */
            threads?: number;

            /** @default 'ultralytics-detect' */
            decoderId?: string;

            /** Integer milliseconds in the range 1..600000. @default 120000 */
            timeoutMillis?: number;

        }

        interface DetectOptions {

            /** Finite number in the range 0..1. @default 0.25 */
            confidence?: number;

            /** Finite number in the range 0..1. @default 0.45 */
            iouThreshold?: number;

            /** Integer in the range 1..400. @default 100 */
            maxDetections?: number;

            /** Integer milliseconds in the range 1..600000. @default 30000 */
            timeoutMillis?: number;

        }

        interface Detection {
            classId: number;
            label: string;
            confidence: number;
            bounds: android.graphics.RectF;
        }

        interface Detector {

            /** Runs one synchronous detection without recycling the input image. */
            detect(image: ImageWrapper, options?: DetectOptions): Detection[];

            /** Closes the remote provider session. Repeated calls have no additional effect. */
            close(): void;

        }

        interface ScriptException {
            readonly name: string;
            readonly message: string;
            readonly code: ErrorCode;
            readonly stack?: string;
        }

    }

}
