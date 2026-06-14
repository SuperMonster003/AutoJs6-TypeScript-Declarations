/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module com {
	export module benjaminwan {
		export module ocrlibrary {
			export class OcrEngine extends java.lang.Object {
				public static class: java.lang.Class<com.benjaminwan.ocrlibrary.OcrEngine>;
				public static numThread: number;
				public getUnClipRatio(): number;
				public constructor(context: android.content.Context);
				public init(param0: android.content.res.AssetManager, param1: number, param2: string, param3: string, param4: string, param5: string): boolean;
				public getBoxThresh(): number;
				public setDoAngle(_set_: boolean): void;
				public setBoxScoreThresh(_set_: number): void;
				public detect(input: android.graphics.Bitmap, output: android.graphics.Bitmap, maxSideLen: number): com.benjaminwan.ocrlibrary.OcrResult;
				public detect(param0: android.graphics.Bitmap, param1: android.graphics.Bitmap, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean, param8: boolean): com.benjaminwan.ocrlibrary.OcrResult;
				public setUnClipRatio(_set_: number): void;
				public setBoxThresh(_set_: number): void;
				public getBoxScoreThresh(): number;
				public getMostAngle(): boolean;
				public getDoAngle(): boolean;
				public setMostAngle(_set_: boolean): void;
				public benchmark(param0: android.graphics.Bitmap, param1: number): number;
				public getPadding(): number;
				public setPadding(_set_: number): void;
			}
			export module OcrEngine {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<com.benjaminwan.ocrlibrary.OcrEngine.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module benjaminwan {
		export module ocrlibrary {
			export class OcrFailed extends com.benjaminwan.ocrlibrary.OcrOutput {
				public static class: java.lang.Class<com.benjaminwan.ocrlibrary.OcrFailed>;
				public static INSTANCE: com.benjaminwan.ocrlibrary.OcrFailed;
			}
		}
	}
}

declare module com {
	export module benjaminwan {
		export module ocrlibrary {
			export class OcrOutput extends java.lang.Object {
				public static class: java.lang.Class<com.benjaminwan.ocrlibrary.OcrOutput>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module benjaminwan {
		export module ocrlibrary {
			export class OcrResult extends com.benjaminwan.ocrlibrary.OcrOutput implements android.os.Parcelable {
				public static class: java.lang.Class<com.benjaminwan.ocrlibrary.OcrResult>;
				public static CREATOR: android.os.Parcelable.Creator<com.benjaminwan.ocrlibrary.OcrResult>;
				public component4(): number;
				public writeToParcel(dest: android.os.Parcel, flags: number): void;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public component1(): number;
				public setDetectTime(_set_: number): void;
				public constructor(dbNetTime: number, param1: java.util.ArrayList<com.benjaminwan.ocrlibrary.TextBlock>, textBlocks: android.graphics.Bitmap, boxImg: number, detectTime: string);
				public getStrRes(): string;
				public copy(dbNetTime: number, param1: java.util.ArrayList<com.benjaminwan.ocrlibrary.TextBlock>, textBlocks: android.graphics.Bitmap, boxImg: number, detectTime: string): com.benjaminwan.ocrlibrary.OcrResult;
				public component3(): android.graphics.Bitmap;
				public toString(): string;
				public getBoxImg(): android.graphics.Bitmap;
				public setBoxImg(_set_: android.graphics.Bitmap): void;
				public constructor();
				public component2(): java.util.ArrayList<com.benjaminwan.ocrlibrary.TextBlock>;
				public setStrRes(_set_: string): void;
				public getDetectTime(): number;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public hashCode(): number;
				public getDbNetTime(): number;
				public component5(): string;
				public describeContents(): number;
				public getTextBlocks(): java.util.ArrayList<com.benjaminwan.ocrlibrary.TextBlock>;
			}
			export module OcrResult {
				export class Creator extends android.os.Parcelable.Creator<com.benjaminwan.ocrlibrary.OcrResult> {
					public static class: java.lang.Class<com.benjaminwan.ocrlibrary.OcrResult.Creator>;
					public constructor();
					public createFromParcel(parcel: android.os.Parcel): com.benjaminwan.ocrlibrary.OcrResult;
					public createFromParcel(param0: android.os.Parcel): any;
					public newArray(param0: number): any[];
					public newArray(size: number): com.benjaminwan.ocrlibrary.OcrResult[];
				}
			}
		}
	}
}

declare module com {
	export module benjaminwan {
		export module ocrlibrary {
			export class OcrStop extends com.benjaminwan.ocrlibrary.OcrOutput {
				public static class: java.lang.Class<com.benjaminwan.ocrlibrary.OcrStop>;
				public static INSTANCE: com.benjaminwan.ocrlibrary.OcrStop;
			}
		}
	}
}

declare module com {
	export module benjaminwan {
		export module ocrlibrary {
			export class Point extends java.lang.Object implements android.os.Parcelable {
				public static class: java.lang.Class<com.benjaminwan.ocrlibrary.Point>;
				public static CREATOR: android.os.Parcelable.Creator<com.benjaminwan.ocrlibrary.Point>;
				public constructor(x: number, y: number);
				public writeToParcel(dest: android.os.Parcel, flags: number): void;
				public component2(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public getY(): number;
				public setX(_set_: number): void;
				public component1(): number;
				public copy(x: number, y: number): com.benjaminwan.ocrlibrary.Point;
				public toString(): string;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public getX(): number;
				public hashCode(): number;
				public setY(_set_: number): void;
				public describeContents(): number;
			}
			export module Point {
				export class Creator extends android.os.Parcelable.Creator<com.benjaminwan.ocrlibrary.Point> {
					public static class: java.lang.Class<com.benjaminwan.ocrlibrary.Point.Creator>;
					public newArray(size: number): com.benjaminwan.ocrlibrary.Point[];
					public createFromParcel(parcel: android.os.Parcel): com.benjaminwan.ocrlibrary.Point;
					public constructor();
					public createFromParcel(param0: android.os.Parcel): any;
					public newArray(param0: number): any[];
				}
			}
		}
	}
}

declare module com {
	export module benjaminwan {
		export module ocrlibrary {
			export class TextBlock extends java.lang.Object implements android.os.Parcelable {
				public static class: java.lang.Class<com.benjaminwan.ocrlibrary.TextBlock>;
				public static CREATOR: android.os.Parcelable.Creator<com.benjaminwan.ocrlibrary.TextBlock>;
				public getAngleScore(): number;
				public component4(): number;
				public component6(): string;
				public getAngleIndex(): number;
				public getBoxPoint(): java.util.ArrayList<com.benjaminwan.ocrlibrary.Point>;
				public getBoxScore(): number;
				public component3(): number;
				public getAngleTime(): number;
				public equals(other: any): boolean;
				public component7(): number[];
				public hashCode(): number;
				public setBoxScore(_set_: number): void;
				public getCrnnTime(): number;
				public component1(): java.util.ArrayList<com.benjaminwan.ocrlibrary.Point>;
				public constructor(boxPoint: java.util.ArrayList<com.benjaminwan.ocrlibrary.Point>, boxScore: number, angleIndex: number, angleScore: number, angleTime: number, param5: string, text: number[], charScores: number, crnnTime: number);
				public writeToParcel(dest: android.os.Parcel, flags: number): void;
				public component2(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public getCharScores(): number[];
				public toString(): string;
				public component9(): number;
				public getText(): string;
				public equals(obj: any): boolean;
				public component5(): number;
				public getBlockTime(): number;
				public copy(boxPoint: java.util.ArrayList<com.benjaminwan.ocrlibrary.Point>, boxScore: number, angleIndex: number, angleScore: number, angleTime: number, param5: string, text: number[], charScores: number, crnnTime: number): com.benjaminwan.ocrlibrary.TextBlock;
				public describeContents(): number;
				public component8(): number;
			}
			export module TextBlock {
				export class Creator extends android.os.Parcelable.Creator<com.benjaminwan.ocrlibrary.TextBlock> {
					public static class: java.lang.Class<com.benjaminwan.ocrlibrary.TextBlock.Creator>;
					public createFromParcel(parcel: android.os.Parcel): com.benjaminwan.ocrlibrary.TextBlock;
					public constructor();
					public newArray(size: number): com.benjaminwan.ocrlibrary.TextBlock[];
					public createFromParcel(param0: android.os.Parcel): any;
					public newArray(param0: number): any[];
				}
			}
		}
	}
}

//Generics information:

