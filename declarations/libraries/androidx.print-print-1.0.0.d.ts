declare module androidx {
	export module print {
		export class PrintHelper extends java.lang.Object {
			public static class: java.lang.Class<androidx.print.PrintHelper>;
			public static SCALE_MODE_FIT: number;
			public static SCALE_MODE_FILL: number;
			public static COLOR_MODE_MONOCHROME: number;
			public static COLOR_MODE_COLOR: number;
			public static ORIENTATION_LANDSCAPE: number;
			public static ORIENTATION_PORTRAIT: number;
			public getScaleMode(): number;
			public printBitmap(jobName: string, bitmap: android.graphics.Bitmap): void;
			public static systemSupportsPrint(): boolean;
			public constructor(context: android.content.Context);
			public printBitmap(jobName: string, imageFile: android.net.Uri): void;
			public setScaleMode(scaleMode: number): void;
			public setColorMode(colorMode: number): void;
			public printBitmap(jobName: string, bitmap: android.graphics.Bitmap, callback: androidx.print.PrintHelper.OnPrintFinishCallback): void;
			public printBitmap(jobName: string, imageFile: android.net.Uri, callback: androidx.print.PrintHelper.OnPrintFinishCallback): void;
			public setOrientation(orientation: number): void;
			public getColorMode(): number;
			public getOrientation(): number;
		}
		export module PrintHelper {
			export class OnPrintFinishCallback extends java.lang.Object {
				public static class: java.lang.Class<androidx.print.PrintHelper.OnPrintFinishCallback>;
				/**
				 * Constructs a new instance of the androidx.print.PrintHelper$OnPrintFinishCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onFinish(): void;
				});
				public constructor();
				public onFinish(): void;
			}
			export class PrintBitmapAdapter extends java.lang.Object {
				public static class: java.lang.Class<androidx.print.PrintHelper.PrintBitmapAdapter>;
				public onLayout(oldPrintAttributes: any, newPrintAttributes: any, cancellationSignal: android.os.CancellationSignal, layoutResultCallback: any, bundle: android.os.Bundle): void;
				public onWrite(pageRanges: any[], fileDescriptor: android.os.ParcelFileDescriptor, cancellationSignal: android.os.CancellationSignal, writeResultCallback: any): void;
				public onFinish(): void;
				public onLayout(param0: any, param1: any, param2: android.os.CancellationSignal, param3: any, param4: android.os.Bundle): void;
				public onWrite(param0: any[], param1: android.os.ParcelFileDescriptor, param2: android.os.CancellationSignal, param3: any): void;
			}
			export class PrintUriAdapter extends java.lang.Object {
				public static class: java.lang.Class<androidx.print.PrintHelper.PrintUriAdapter>;
				public onLayout(oldPrintAttributes: any, newPrintAttributes: any, cancellationSignal: android.os.CancellationSignal, layoutResultCallback: any, bundle: android.os.Bundle): void;
				public onWrite(pageRanges: any[], fileDescriptor: android.os.ParcelFileDescriptor, cancellationSignal: android.os.CancellationSignal, writeResultCallback: any): void;
				public onFinish(): void;
				public onLayout(param0: any, param1: any, param2: android.os.CancellationSignal, param3: any, param4: android.os.Bundle): void;
				public onWrite(param0: any[], param1: android.os.ParcelFileDescriptor, param2: android.os.CancellationSignal, param3: any): void;
			}
		}
	}
}

//Generics information:

