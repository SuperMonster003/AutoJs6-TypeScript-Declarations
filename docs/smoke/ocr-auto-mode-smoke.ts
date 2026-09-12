/// <reference path="../../declarations/autojs6/index.d.ts" />

// Run with tsc --noEmit --strictNullChecks --skipLibCheck --target ES2020 --lib ES2020.
ocr.mode = 'auto';
ocr.mode = '';
ocr.mode = null;
ocr.mode = undefined;
ocr.mode = ocr.paddle;
ocr.tap('auto');
ocr.tap('');
ocr.tap(null);
ocr.tap(undefined);
ocr.tap(ocr.rapid);

let resolvedOcrMode: '' | 'mlkit' | 'paddle' | 'rapid' = ocr.mode;
let automaticallyRecognized: string[] = ocr({mode: null});
let automaticallyDetected: org.autojs.autojs.runtime.api.OcrResult[] = ocr.detect({mode: undefined});
let filteredRecognition: string[] = ocr({mode: 'auto', engine: 'paddle-ocr', variant: 'v4'});

// @ts-expect-error A getter exposes a concrete engine or empty string, never the auto selector.
let unresolvedOcrMode: 'auto' = ocr.mode;
// @ts-expect-error Booleans are not valid mode selectors.
ocr.mode = false;
// @ts-expect-error An explicit undefined argument is required to reset through tap.
ocr.tap();
