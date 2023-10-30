declare module com {
	export module baidu {
		export module paddle {
			export module lite {
				export module ocr {
					export class OCRPredictorNative extends java.lang.Object {
						public static class: java.lang.Class<com.baidu.paddle.lite.ocr.OCRPredictorNative>;
						public constructor(config: com.baidu.paddle.lite.ocr.OCRPredictorNative.Config);
						public runImage(originalImage: android.graphics.Bitmap, max_size_len: number, run_det: number, run_cls: number, run_rec: number): java.util.ArrayList<com.baidu.paddle.lite.ocr.OcrResultModel>;
						public forward(param0: number, param1: android.graphics.Bitmap, param2: number, param3: number, param4: number, param5: number): number[];
						public release(param0: number): void;
						public destroy(): void;
						public init(param0: string, param1: string, param2: string, param3: number, param4: number, param5: string): number;
						public static loadLibrary(): void;
						public finalize(): void;
					}
					export module OCRPredictorNative {
						export class Config extends java.lang.Object {
							public static class: java.lang.Class<com.baidu.paddle.lite.ocr.OCRPredictorNative.Config>;
							public useOpencl: number;
							public cpuThreadNum: number;
							public cpuPower: string;
							public detModelFilename: string;
							public recModelFilename: string;
							public clsModelFilename: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module baidu {
		export module paddle {
			export module lite {
				export module ocr {
					export class OcrResult extends java.lang.Comparable<com.baidu.paddle.lite.ocr.OcrResult> {
						public static class: java.lang.Class<com.baidu.paddle.lite.ocr.OcrResult>;
						public getConfidence(): number;
						public constructor();
						public constructor(resultModel: com.baidu.paddle.lite.ocr.OcrResultModel);
						public getLocation(): com.baidu.paddle.lite.ocr.OcrResult.RectLocation;
						public getLabel(): string;
						public addElements(element: com.baidu.paddle.lite.ocr.OcrResult): void;
						public constructor(label: string, confidence: number, bounds: android.graphics.Rect);
						public toString(): string;
						public setBounds(bounds: android.graphics.Rect): void;
						public compareTo(o: com.baidu.paddle.lite.ocr.OcrResult): number;
						public getElements(): java.util.List<com.baidu.paddle.lite.ocr.OcrResult>;
						public getBounds(): android.graphics.Rect;
						public getWords(): string;
						public setConfidence(confidence: number): void;
						public setLabel(label: string): void;
					}
					export module OcrResult {
						export class RectLocation extends java.lang.Object {
							public static class: java.lang.Class<com.baidu.paddle.lite.ocr.OcrResult.RectLocation>;
							public left: number;
							public top: number;
							public width: number;
							public height: number;
							public constructor();
							public constructor(left: number, top: number, width: number, height: number);
							public constructor(rect: android.graphics.Rect);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module baidu {
		export module paddle {
			export module lite {
				export module ocr {
					export class OcrResultModel extends java.lang.Object {
						public static class: java.lang.Class<com.baidu.paddle.lite.ocr.OcrResultModel>;
						public getConfidence(): number;
						public getWordIndex(): java.util.List<java.lang.Integer>;
						public constructor();
						public setClsIdx(idx: number): void;
						public getPoints(): java.util.List<android.graphics.Point>;
						public setClsLabel(label: string): void;
						public getClsLabel(): string;
						public getLabel(): string;
						public getClsConfidence(): number;
						public setClsConfidence(confidence: number): void;
						public toString(): string;
						public addWordIndex(index: number): void;
						public getClsIdx(): number;
						public addPoints(x: number, y: number): void;
						public setConfidence(confidence: number): void;
						public setLabel(label: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module baidu {
		export module paddle {
			export module lite {
				export module ocr {
					export class Predictor extends java.lang.Object {
						public static class: java.lang.Class<com.baidu.paddle.lite.ocr.Predictor>;
						public warmupIterNum: number;
						public inferIterNum: number;
						public paddlePredictor: com.baidu.paddle.lite.ocr.OCRPredictorNative;
						public wordLabels: java.util.Vector<string>;
						public detLongSize: number;
						public scoreThreshold: number;
						public useSlim: boolean;
						public useOpencl: boolean;
						public checkModelLoaded: boolean;
						public runCls: boolean;
						public runDet: boolean;
						public runRec: boolean;
						public detModelFilename: string;
						public recModelFilename: string;
						public clsModelFilename: string;
						public constructor();
						public releaseModel(): void;
						public modelName(): string;
						public loadModel(appCtx: android.content.Context, modelPath: string, cpuThreadNum: number, cpuPowerMode: string): boolean;
						public preprocessTime(): number;
						public getDefaultModelPathSlim(): string;
						public init(appCtx: android.content.Context): boolean;
						public getDefaultModelPath(): string;
						public modelPath(): string;
						public getDefaultLabelPath(): string;
						public init(appCtx: android.content.Context, modelPath: string, labelPath: string): boolean;
						public init(appCtx: android.content.Context, modelPath: string, labelPath: string, cpuThreadNum: number, cpuPowerMode: string, detLongSize: number, scoreThreshold: number): boolean;
						public inferenceTime(): number;
						public inputImage(): android.graphics.Bitmap;
						public cpuThreadNum(): number;
						public setInputImage(image: android.graphics.Bitmap): void;
						public cpuPowerMode(): string;
						public isUseSlim(): boolean;
						public init(appCtx: android.content.Context, useSlim: boolean): boolean;
						public loadLabel(appCtx: android.content.Context, labelPath: string): boolean;
						public init(appCtx: android.content.Context, modelPath: string, labelPath: string, cpuThreadNum: number, cpuPowerMode: string): boolean;
						public runOcr(inputImage: android.graphics.Bitmap): java.util.List<com.baidu.paddle.lite.ocr.OcrResult>;
						public isLoaded(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module baidu {
		export module paddle {
			export module lite {
				export module ocr {
					export class Utils extends java.lang.Object {
						public static class: java.lang.Class<com.baidu.paddle.lite.ocr.Utils>;
						public constructor();
						public static copyFileFromAssets(appCtx: android.content.Context, srcPath: string, dstPath: string): void;
						public static copyDirectoryFromAssetsIfNeeded(appCtx: android.content.Context, srcDir: string, dstDir: string): void;
						public static parseFloatsFromString(string: string, delimiter: string): number[];
						public static isSupportedNPU(): boolean;
						public static resizeWithStep(bitmap: android.graphics.Bitmap, maxLength: number, step: number): android.graphics.Bitmap;
						public static copyDirectoryFromAssets(appCtx: android.content.Context, srcDir: string, dstDir: string): void;
						public static parseLongsFromString(string: string, delimiter: string): number[];
						public static getSDCardDirectory(): string;
						public static rotateBitmap(bitmap: android.graphics.Bitmap, orientation: number): android.graphics.Bitmap;
					}
				}
			}
		}
	}
}

declare module paddleocr {
	export class BuildConfig extends java.lang.Object {
		public static class: java.lang.Class<paddleocr.BuildConfig>;
		public static DEBUG: boolean;
		public static LIBRARY_PACKAGE_NAME: string;
		public static BUILD_TYPE: string;
		public constructor();
	}
}

declare module paddleocr {
	export class R extends java.lang.Object {
		public static class: java.lang.Class<paddleocr.R>;
	}
}

//Generics information:

