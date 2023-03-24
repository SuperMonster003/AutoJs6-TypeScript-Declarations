declare module com {
	export module jaredrummler {
		export module android {
			export module device {
				export class BuildConfig extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.android.device.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module android {
			export module device {
				export class DeviceDatabase extends android.database.sqlite.SQLiteOpenHelper {
					public static class: java.lang.Class<com.jaredrummler.android.device.DeviceDatabase>;
					public constructor(context: android.content.Context, name: string, factory: android.database.sqlite.SQLiteDatabase.CursorFactory, version: number);
					public onCreate(db: android.database.sqlite.SQLiteDatabase): void;
					public onUpgrade(db: android.database.sqlite.SQLiteDatabase, oldVersion: number, newVersion: number): void;
					public constructor(context: android.content.Context);
					public onCreate(param0: android.database.sqlite.SQLiteDatabase): void;
					public constructor(context: android.content.Context, name: string, factory: android.database.sqlite.SQLiteDatabase.CursorFactory, version: number, errorHandler: android.database.DatabaseErrorHandler);
					public onUpgrade(param0: android.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
					public query(codename: string, model: string): string;
					public queryToDevice(codename: string, model: string): com.jaredrummler.android.device.DeviceName.DeviceInfo;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module android {
			export module device {
				export class DeviceName extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.android.device.DeviceName>;
					public static with(context: android.content.Context): com.jaredrummler.android.device.DeviceName.Request;
					public static getDeviceName(): string;
					public static getDeviceName(codename: string, fallback: string): string;
					public static getDeviceInfo(context: android.content.Context, codename: string): com.jaredrummler.android.device.DeviceName.DeviceInfo;
					public constructor();
					public static getDeviceName(codename: string, model: string, fallback: string): string;
					public static getDeviceInfo(context: android.content.Context, codename: string, model: string): com.jaredrummler.android.device.DeviceName.DeviceInfo;
					public static getDeviceInfo(context: android.content.Context): com.jaredrummler.android.device.DeviceName.DeviceInfo;
					public static init(context: android.content.Context): void;
				}
				export module DeviceName {
					export class Callback extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.android.device.DeviceName.Callback>;
						/**
						 * Constructs a new instance of the com.jaredrummler.android.device.DeviceName$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFinished(param0: com.jaredrummler.android.device.DeviceName.DeviceInfo, param1: java.lang.Exception): void;
						});
						public constructor();
						public onFinished(param0: com.jaredrummler.android.device.DeviceName.DeviceInfo, param1: java.lang.Exception): void;
					}
					export class DeviceInfo extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.android.device.DeviceName.DeviceInfo>;
						public manufacturer: string;
						public marketName: string;
						public codename: string;
						public model: string;
						public constructor(marketName: string, codename: string, model: string);
						public getName(): string;
						public constructor(manufacturer: string, marketName: string, codename: string, model: string);
					}
					export class Request extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.android.device.DeviceName.Request>;
						public setModel(model: string): com.jaredrummler.android.device.DeviceName.Request;
						public request(callback: com.jaredrummler.android.device.DeviceName.Callback): void;
						public setCodename(codename: string): com.jaredrummler.android.device.DeviceName.Request;
					}
					export module Request {
						export class GetDeviceRunnable extends java.lang.Object implements java.lang.Runnable {
							public static class: java.lang.Class<com.jaredrummler.android.device.DeviceName.Request.GetDeviceRunnable>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

//Generics information:

