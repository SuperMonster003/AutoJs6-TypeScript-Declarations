declare module moe {
	export module shizuku {
		export module api {
			export class BinderContainer extends java.lang.Object implements android.os.Parcelable {
				public static class: java.lang.Class<moe.shizuku.api.BinderContainer>;
				public binder: android.os.IBinder;
				public static CREATOR: android.os.Parcelable.Creator<moe.shizuku.api.BinderContainer>;
				public constructor(_in_: android.os.Parcel);
				public writeToParcel(dest: android.os.Parcel, flags: number): void;
				public constructor(binder: android.os.IBinder);
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
			}
		}
	}
}

declare module rikka {
	export module shizuku {
		export class ShizukuProvider extends android.content.ContentProvider {
			public static class: java.lang.Class<rikka.shizuku.ShizukuProvider>;
			public static METHOD_SEND_BINDER: string;
			public static METHOD_GET_BINDER: string;
			public static ACTION_BINDER_RECEIVED: string;
			public static PERMISSION: string;
			public static MANAGER_APPLICATION_ID: string;
			public query(param0: android.net.Uri, param1: string[], param2: string, param3: string[], param4: string): android.database.Cursor;
			public delete(param0: android.net.Uri, param1: string, param2: string[]): number;
			public attachInfo(context: android.content.Context, info: android.content.pm.ProviderInfo): void;
			public query(uri: android.net.Uri, projection: string[], selection: string, selectionArgs: string[], sortOrder: string): android.database.Cursor;
			public update(param0: android.net.Uri, param1: android.content.ContentValues, param2: string, param3: string[]): number;
			public static requestBinderForNonProviderProcess(context: android.content.Context): void;
			public update(uri: android.net.Uri, values: android.content.ContentValues, selection: string, selectionArgs: string[]): number;
			public static enableMultiProcessSupport(isProviderProcess: boolean): void;
			public constructor();
			public insert(param0: android.net.Uri, param1: android.content.ContentValues): android.net.Uri;
			public getType(uri: android.net.Uri): string;
			public getType(param0: android.net.Uri): string;
			public onCreate(): boolean;
			public query(uri: android.net.Uri, projection: string[], selection: string, selectionArgs: string[], sortOrder: string, cancellationSignal: android.os.CancellationSignal): android.database.Cursor;
			public onTrimMemory(param0: number): void;
			public static setIsProviderProcess(isProviderProcess: boolean): void;
			public onTrimMemory(level: number): void;
			public delete(uri: android.net.Uri, selection: string, selectionArgs: string[]): number;
			public call(method: string, arg: string, extras: android.os.Bundle): android.os.Bundle;
			public static disableAutomaticSuiInitialization(): void;
			public insert(uri: android.net.Uri, values: android.content.ContentValues): android.net.Uri;
		}
	}
}

//Generics information:

