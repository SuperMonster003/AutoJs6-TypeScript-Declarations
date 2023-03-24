declare module com {
	export module tencent {
		export module bugly {
			export class Bugly extends java.lang.Object {
				public static class: java.lang.Class<com.tencent.bugly.Bugly>;
				public static enable: boolean;
				public static applicationContext: android.content.Context;
				public static SDK_IS_DEV: string;
				public static getAppChannel(): string;
				public static isDev(): boolean;
				public static init(param0: android.content.Context, param1: string, param2: boolean): void;
				public static init(param0: android.content.Context, param1: string, param2: boolean, param3: com.tencent.bugly.BuglyStrategy): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export class BuglyStrategy extends java.lang.Object {
				public static class: java.lang.Class<com.tencent.bugly.BuglyStrategy>;
				public a: number;
				public b: boolean;
				public getAppChannel(): string;
				public setAppChannel(param0: string): com.tencent.bugly.BuglyStrategy;
				public isEnableRecordAnrMainStack(): boolean;
				public isEnableUserInfo(): boolean;
				public recordUserInfoOnceADay(): boolean;
				public setDeviceID(param0: string): com.tencent.bugly.BuglyStrategy;
				public getDeviceModel(): string;
				public setAppPackageName(param0: string): com.tencent.bugly.BuglyStrategy;
				public setEnableNativeCrashMonitor(param0: boolean): com.tencent.bugly.BuglyStrategy;
				public setEnableRecordAnrMainStack(param0: boolean): void;
				public setUploadProcess(param0: boolean): com.tencent.bugly.BuglyStrategy;
				public setUploadSpotCrash(param0: boolean): void;
				public constructor();
				public setEnableANRCrashMonitor(param0: boolean): com.tencent.bugly.BuglyStrategy;
				public getAppPackageName(): string;
				public setCrashHandleCallback(param0: com.tencent.bugly.BuglyStrategy.a): com.tencent.bugly.BuglyStrategy;
				/** @deprecated */
				public setMerged(param0: boolean): void;
				public getUserInfoActivity(): java.lang.Class<any>;
				public setRecordUserInfoOnceADay(param0: boolean): com.tencent.bugly.BuglyStrategy;
				public isUploadSpotCrash(): boolean;
				public setBuglyLogUpload(param0: boolean): com.tencent.bugly.BuglyStrategy;
				public getAppReportDelay(): number;
				public getLibBuglySOFilePath(): string;
				public getCloseErrorCallback(): boolean;
				public setCloseErrorCallback(param0: boolean): void;
				public setDeviceModel(param0: string): com.tencent.bugly.BuglyStrategy;
				public isEnableCatchAnrTrace(): boolean;
				public getCallBackType(): number;
				public setUserInfoActivity(param0: java.lang.Class<any>): com.tencent.bugly.BuglyStrategy;
				public isMerged(): boolean;
				public setAppReportDelay(param0: number): com.tencent.bugly.BuglyStrategy;
				public isReplaceOldChannel(): boolean;
				public isEnableNativeCrashMonitor(): boolean;
				public setCallBackType(param0: number): void;
				public getAppVersion(): string;
				public isUploadProcess(): boolean;
				public setReplaceOldChannel(param0: boolean): void;
				public isBuglyLogUpload(): boolean;
				public setLibBuglySOFilePath(param0: string): com.tencent.bugly.BuglyStrategy;
				public getDeviceID(): string;
				public isEnableANRCrashMonitor(): boolean;
				public getCrashHandleCallback(): com.tencent.bugly.BuglyStrategy.a;
				public setAppVersion(param0: string): com.tencent.bugly.BuglyStrategy;
				public setEnableUserInfo(param0: boolean): com.tencent.bugly.BuglyStrategy;
				public setEnableCatchAnrTrace(param0: boolean): void;
			}
			export module BuglyStrategy {
				export class a extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.BuglyStrategy.a>;
					public static MAX_USERDATA_KEY_LENGTH: number;
					public static MAX_USERDATA_VALUE_LENGTH: number;
					public static CRASHTYPE_JAVA_CRASH: number;
					public static CRASHTYPE_JAVA_CATCH: number;
					public static CRASHTYPE_NATIVE: number;
					public static CRASHTYPE_U3D: number;
					public static CRASHTYPE_ANR: number;
					public static CRASHTYPE_COCOS2DX_JS: number;
					public static CRASHTYPE_COCOS2DX_LUA: number;
					public static CRASHTYPE_BLOCK: number;
					public constructor();
					public onCrashHandleStart(param0: number, param1: string, param2: string, param3: string): java.util.Map<string,string>;
					public onCrashHandleStart2GetExtraDatas(param0: number, param1: string, param2: string, param3: string): number[];
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export class CrashModule extends com.tencent.bugly.a {
				public static class: java.lang.Class<com.tencent.bugly.CrashModule>;
				public static MODULE_ID: number;
				public init(param0: android.content.Context, param1: boolean, param2: com.tencent.bugly.BuglyStrategy): void;
				public static getInstance(): com.tencent.bugly.CrashModule;
				public onServerStrategyChanged(param0: com.tencent.bugly.crashreport.common.strategy.StrategyBean): void;
				public getTables(): string[];
				public hasInitialized(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export abstract class a extends java.lang.Object {
				public static class: java.lang.Class<com.tencent.bugly.a>;
				public id: number;
				public moduleName: string;
				public versionKey: string;
				public version: string;
				public init(param0: android.content.Context, param1: boolean, param2: com.tencent.bugly.BuglyStrategy): void;
				public onDbUpgrade(param0: android.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
				public onDbDowngrade(param0: android.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
				public onServerStrategyChanged(param0: com.tencent.bugly.crashreport.common.strategy.StrategyBean): void;
				public getTables(): string[];
				public constructor();
				public onDbCreate(param0: android.database.sqlite.SQLiteDatabase): void;
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export class b extends java.lang.Object {
				public static class: java.lang.Class<com.tencent.bugly.b>;
				public static b: java.util.List<com.tencent.bugly.a>;
				public static c: boolean;
				public static a(param0: android.content.Context, param1: string, param2: boolean, param3: com.tencent.bugly.BuglyStrategy): void;
				public static a(param0: android.content.Context, param1: com.tencent.bugly.BuglyStrategy): void;
				public static a(param0: android.content.Context): void;
				public static a(param0: com.tencent.bugly.a): void;
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export class BuglyHintException extends java.lang.RuntimeException {
					public static class: java.lang.Class<com.tencent.bugly.crashreport.BuglyHintException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor(param0: string);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export class BuglyLog extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.crashreport.BuglyLog>;
					public static i(param0: string, param1: string): void;
					public static e(param0: string, param1: string, param2: java.lang.Throwable): void;
					public constructor();
					public static setCache(param0: number): void;
					public static e(param0: string, param1: string): void;
					public static d(param0: string, param1: string): void;
					public static v(param0: string, param1: string): void;
					public static w(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export class CrashReport extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.crashreport.CrashReport>;
					public static uploadUserInfo(): void;
					public static setUserId(param0: string): void;
					public static setHttpProxy(param0: java.net.InetAddress, param1: number): void;
					public static closeNativeReport(): void;
					public static setUserSceneTag(param0: android.content.Context, param1: number): void;
					public static setAppPackage(param0: android.content.Context, param1: string): void;
					public static setJavascriptMonitor(param0: com.tencent.bugly.crashreport.CrashReport.WebViewInterface, param1: boolean, param2: boolean): boolean;
					public static setCrashRegularFilter(param0: string): void;
					public static isLastSessionCrash(): boolean;
					public static getSdkExtraData(param0: android.content.Context): java.util.Map<string,string>;
					public static setSessionIntervalMills(param0: number): void;
					public static postException(param0: java.lang.Thread, param1: number, param2: string, param3: string, param4: string, param5: java.util.Map<string,string>): void;
					public static testNativeCrash(): void;
					public static getDeviceID(param0: android.content.Context): string;
					public static setAppVersion(param0: android.content.Context, param1: string): void;
					public static getContext(): android.content.Context;
					public constructor();
					public static setBuglyDbName(param0: string): void;
					public static getBuglyVersion(param0: android.content.Context): string;
					public static setDeviceId(param0: android.content.Context, param1: string): void;
					public static postCatchedException(param0: java.lang.Throwable, param1: java.lang.Thread): void;
					public static testNativeCrash(param0: boolean, param1: boolean, param2: boolean): void;
					public static setSdkExtraData(param0: android.content.Context, param1: string, param2: string): void;
					public static initCrashReport(param0: android.content.Context, param1: string, param2: boolean, param3: com.tencent.bugly.crashreport.CrashReport.UserStrategy): void;
					public static initCrashReport(param0: android.content.Context, param1: com.tencent.bugly.crashreport.CrashReport.UserStrategy): void;
					public static setJavascriptMonitor(param0: android.webkit.WebView, param1: boolean, param2: boolean): boolean;
					public static setUserId(param0: android.content.Context, param1: string): void;
					/** @deprecated */
					public static enableObtainId(param0: android.content.Context, param1: boolean): void;
					public static getUserData(param0: android.content.Context, param1: string): string;
					public static getSdkExtraData(): java.util.Map<string,string>;
					public static removeUserData(param0: android.content.Context, param1: string): string;
					public static setIsDevelopmentDevice(param0: android.content.Context, param1: boolean): void;
					public static enableBugly(param0: boolean): void;
					public static getUserSceneTagId(param0: android.content.Context): number;
					public static setServerUrl(param0: string): void;
					public static getHttpProxy(): java.net.Proxy;
					public static postCatchedException(param0: java.lang.Throwable): void;
					public static getUserId(): string;
					public static setDeviceModel(param0: android.content.Context, param1: string): void;
					public static startCrashReport(): void;
					/** @deprecated */
					public static setIsAppForeground(param0: android.content.Context, param1: boolean): void;
					public static closeBugly(): void;
					public static postCatchedException(param0: java.lang.Throwable, param1: java.lang.Thread, param2: boolean): void;
					public static setHttpProxy(param0: string, param1: number): void;
					public static putUserData(param0: android.content.Context, param1: string, param2: string): void;
					public static setHandleNativeCrashInJava(param0: boolean): void;
					public static initCrashReport(param0: android.content.Context): void;
					public static getAppID(): string;
					public static setAppChannel(param0: android.content.Context, param1: string): void;
					public static testANRCrash(): void;
					public static setAllThreadStackEnable(param0: android.content.Context, param1: boolean, param2: boolean): void;
					public static getUserDatasSize(param0: android.content.Context): number;
					public static getAllUserDataKeys(param0: android.content.Context): java.util.Set<string>;
					public static closeCrashReport(): void;
					public static testJavaCrash(): void;
					public static setJavascriptMonitor(param0: com.tencent.bugly.crashreport.CrashReport.WebViewInterface, param1: boolean): boolean;
					public static postException(param0: number, param1: string, param2: string, param3: string, param4: java.util.Map<string,string>): void;
					public static setContext(param0: android.content.Context): void;
					public static setCollectPrivacyInfo(param0: android.content.Context, param1: boolean): void;
					public static setJavascriptMonitor(param0: android.webkit.WebView, param1: boolean): boolean;
					public static setCrashFilter(param0: string): void;
					public static getAppVer(): string;
					public static getAppChannel(): string;
					public static initCrashReport(param0: android.content.Context, param1: string, param2: boolean): void;
				}
				export module CrashReport {
					export class CrashHandleCallback extends com.tencent.bugly.BuglyStrategy.a {
						public static class: java.lang.Class<com.tencent.bugly.crashreport.CrashReport.CrashHandleCallback>;
						public constructor();
					}
					export class UserStrategy extends com.tencent.bugly.BuglyStrategy {
						public static class: java.lang.Class<com.tencent.bugly.crashreport.CrashReport.UserStrategy>;
						public setCrashHandleCallback(param0: com.tencent.bugly.BuglyStrategy.a): com.tencent.bugly.BuglyStrategy;
						public getCrashHandleCallback(): com.tencent.bugly.crashreport.CrashReport.CrashHandleCallback;
						public constructor();
						public getCloseErrorCallback(): boolean;
						public getCrashHandleCallback(): com.tencent.bugly.BuglyStrategy.a;
						public getCallBackType(): number;
						public setCallBackType(param0: number): void;
						public setCloseErrorCallback(param0: boolean): void;
						public constructor(param0: android.content.Context);
						public setCrashHandleCallback(param0: com.tencent.bugly.crashreport.CrashReport.CrashHandleCallback): void;
					}
					export class WebViewInterface extends java.lang.Object {
						public static class: java.lang.Class<com.tencent.bugly.crashreport.CrashReport.WebViewInterface>;
						/**
						 * Constructs a new instance of the com.tencent.bugly.crashreport.CrashReport$WebViewInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getUrl(): string;
							setJavaScriptEnabled(param0: boolean): void;
							loadUrl(param0: string): void;
							addJavascriptInterface(param0: com.tencent.bugly.crashreport.crash.h5.H5JavaScriptInterface, param1: string): void;
							getContentDescription(): string;
						});
						public constructor();
						public loadUrl(param0: string): void;
						public setJavaScriptEnabled(param0: boolean): void;
						public addJavascriptInterface(param0: com.tencent.bugly.crashreport.crash.h5.H5JavaScriptInterface, param1: string): void;
						public getUrl(): string;
						public getContentDescription(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export class a extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.crashreport.a>;
					/**
					 * Constructs a new instance of the com.tencent.bugly.crashreport.a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setNativeIsAppForeground(param0: boolean): boolean;
					});
					public constructor();
					public setNativeIsAppForeground(param0: boolean): boolean;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module biz {
					export class UserInfoBean extends java.lang.Object implements android.os.Parcelable {
						public static class: java.lang.Class<com.tencent.bugly.crashreport.biz.UserInfoBean>;
						public a: number;
						public b: number;
						public c: string;
						public d: string;
						public e: number;
						public f: number;
						public g: number;
						public h: number;
						public i: number;
						public j: string;
						public k: number;
						public l: boolean;
						public m: string;
						public n: string;
						public o: number;
						public p: number;
						public q: number;
						public r: java.util.Map<string,string>;
						public s: java.util.Map<string,string>;
						public static CREATOR: android.os.Parcelable.Creator<com.tencent.bugly.crashreport.biz.UserInfoBean>;
						public constructor();
						public describeContents(): number;
						public constructor(param0: android.os.Parcel);
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module biz {
					export class a extends java.lang.Object {
						public static class: java.lang.Class<com.tencent.bugly.crashreport.biz.a>;
						public a(): void;
						public constructor(param0: android.content.Context, param1: boolean);
						public b(): void;
						public a(param0: string): java.util.List<com.tencent.bugly.crashreport.biz.UserInfoBean>;
						public a(param0: number, param1: boolean, param2: number): void;
					}
					export module a {
						export class a extends java.lang.Object implements java.lang.Runnable {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.biz.a.a>;
							public constructor(param0: com.tencent.bugly.crashreport.biz.a, param1: com.tencent.bugly.crashreport.biz.UserInfoBean, param2: boolean);
							public run(): void;
						}
						export class b extends java.lang.Object implements java.lang.Runnable {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.biz.a.b>;
							public run(): void;
						}
						export class c extends java.lang.Object implements java.lang.Runnable {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.biz.a.c>;
							public constructor(param0: com.tencent.bugly.crashreport.biz.a, param1: number);
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module biz {
					export class b extends java.lang.Object {
						public static class: java.lang.Class<com.tencent.bugly.crashreport.biz.b>;
						public static a(): void;
						public constructor();
						public static a(param0: android.content.Context): void;
						public static a(param0: android.content.Context, param1: com.tencent.bugly.BuglyStrategy): void;
						public static a(param0: com.tencent.bugly.crashreport.common.strategy.StrategyBean, param1: boolean): void;
						public static a(param0: number): void;
					}
					export module b {
						export class a extends java.lang.Object implements android.app.Application.ActivityLifecycleCallbacks {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.biz.b.a>;
							public onActivityStopped(param0: android.app.Activity): void;
							public onActivityDestroyed(param0: android.app.Activity): void;
							public onActivityCreated(param0: android.app.Activity, param1: android.os.Bundle): void;
							public onActivityResumed(param0: android.app.Activity): void;
							public onActivitySaveInstanceState(param0: android.app.Activity, param1: android.os.Bundle): void;
							public onActivityStarted(param0: android.app.Activity): void;
							public onActivityPaused(param0: android.app.Activity): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module common {
					export module info {
						export class AppInfo extends java.lang.Object {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.common.info.AppInfo>;
							public constructor();
							public static d(param0: android.content.Context): java.util.Map<string,string>;
							public static c(param0: android.content.Context): string;
							public static b(param0: android.content.Context): android.content.pm.PackageInfo;
							public static a(param0: android.content.Context): string;
							public static a(param0: java.util.Map<string,string>): java.util.List<string>;
							public static a(param0: number): string;
							public static e(param0: android.content.Context): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module common {
					export module info {
						export class PlugInBean extends java.lang.Object implements android.os.Parcelable {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.common.info.PlugInBean>;
							public a: string;
							public b: string;
							public c: string;
							public static CREATOR: android.os.Parcelable.Creator<com.tencent.bugly.crashreport.common.info.PlugInBean>;
							public describeContents(): number;
							public constructor(param0: string, param1: string, param2: string);
							public toString(): string;
							public writeToParcel(param0: android.os.Parcel, param1: number): void;
							public constructor(param0: android.os.Parcel);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module common {
					export module info {
						export class a extends java.lang.Object {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.common.info.a>;
							public g(): string;
							public a(param0: boolean): void;
							public h(): boolean;
							/** @deprecated */
							public static r(): string;
							public i(param0: string): string;
							public d(param0: string): void;
							public static G(): number;
							public t(): java.util.Map<string,com.tencent.bugly.crashreport.common.info.PlugInBean>;
							public j(): boolean;
							public x(): java.util.Map<string,string>;
							public p(): number;
							/** @deprecated */
							public static I(): boolean;
							public b(param0: number): void;
							public i(): boolean;
							public a(param0: number, param1: boolean): void;
							public A(): java.util.Set<string>;
							public s(): string;
							public a(param0: boolean, param1: boolean): void;
							public c(param0: string): void;
							public F(): java.util.Map<string,com.tencent.bugly.crashreport.common.info.PlugInBean>;
							public g(param0: string): void;
							public n(): number;
							public q(): string;
							public b(param0: boolean): void;
							public a(param0: number): void;
							public v(): java.lang.Boolean;
							public static a(param0: android.content.Context): com.tencent.bugly.crashreport.common.info.a;
							public o(): number;
							public b(param0: string): void;
							public c(): string;
							public k(): string;
							public f(param0: string): void;
							public C(): java.util.Map<string,string>;
							public w(): string;
							public h(param0: string): string;
							public B(): java.util.Map<string,string>;
							public d(): void;
							/** @deprecated */
							public static H(): boolean;
							public y(): void;
							public a(param0: string, param1: string): void;
							public l(): string;
							public E(): number;
							public static b(): com.tencent.bugly.crashreport.common.info.a;
							public e(): string;
							public a(param0: string): void;
							public e(param0: string): void;
							public f(): string;
							public m(): string;
							public c(param0: string, param1: string): void;
							public D(): number;
							public z(): number;
							public b(param0: string, param1: string): void;
							public u(): string;
							public a(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module common {
					export module info {
						export class b extends java.lang.Object {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.common.info.b>;
							public static c(): number;
							public static h(): number;
							public static e(): number;
							public static f(): number;
							public static l(): number;
							public static n(): boolean;
							public static b(): string;
							public static m(): string;
							public static j(): number;
							public static e(param0: android.content.Context): boolean;
							public static i(): number;
							public static d(param0: android.content.Context): boolean;
							public static d(): number;
							public static o(): boolean;
							public static a(param0: android.content.Context, param1: boolean): string;
							public static c(param0: android.content.Context): string;
							public static b(param0: android.content.Context): string;
							public static a(): string;
							public static a(param0: android.content.Context): string;
							public static g(): number;
							public static k(): number;
						}
						export module b {
							export abstract class a extends java.lang.Object {
								public static class: java.lang.Class<com.tencent.bugly.crashreport.common.info.b.a>;
								public a(param0: android.content.Context): string;
							}
							export class b extends com.tencent.bugly.crashreport.common.info.b.a {
								public static class: java.lang.Class<com.tencent.bugly.crashreport.common.info.b.b>;
								public a(param0: android.content.Context): string;
							}
							export class c extends com.tencent.bugly.crashreport.common.info.b.a {
								public static class: java.lang.Class<com.tencent.bugly.crashreport.common.info.b.c>;
								public a(param0: android.content.Context): string;
							}
							export class d extends com.tencent.bugly.crashreport.common.info.b.a {
								public static class: java.lang.Class<com.tencent.bugly.crashreport.common.info.b.d>;
								public a(param0: android.content.Context): string;
							}
							export class e extends com.tencent.bugly.crashreport.common.info.b.a {
								public static class: java.lang.Class<com.tencent.bugly.crashreport.common.info.b.e>;
								public a(param0: android.content.Context): string;
							}
							export class f extends com.tencent.bugly.crashreport.common.info.b.a {
								public static class: java.lang.Class<com.tencent.bugly.crashreport.common.info.b.f>;
								public a(param0: android.content.Context): string;
							}
							export class g extends com.tencent.bugly.crashreport.common.info.b.a {
								public static class: java.lang.Class<com.tencent.bugly.crashreport.common.info.b.g>;
								public a(param0: android.content.Context): string;
							}
							export class h extends com.tencent.bugly.crashreport.common.info.b.a {
								public static class: java.lang.Class<com.tencent.bugly.crashreport.common.info.b.h>;
								public a(param0: android.content.Context): string;
							}
							export class i extends com.tencent.bugly.crashreport.common.info.b.a {
								public static class: java.lang.Class<com.tencent.bugly.crashreport.common.info.b.i>;
								public a(param0: android.content.Context): string;
							}
							export class j extends com.tencent.bugly.crashreport.common.info.b.a {
								public static class: java.lang.Class<com.tencent.bugly.crashreport.common.info.b.j>;
								public a(param0: android.content.Context): string;
							}
							export class k extends com.tencent.bugly.crashreport.common.info.b.a {
								public static class: java.lang.Class<com.tencent.bugly.crashreport.common.info.b.k>;
								public a(param0: android.content.Context): string;
							}
							export class l extends com.tencent.bugly.crashreport.common.info.b.a {
								public static class: java.lang.Class<com.tencent.bugly.crashreport.common.info.b.l>;
								public a(param0: android.content.Context): string;
							}
							export class m extends com.tencent.bugly.crashreport.common.info.b.a {
								public static class: java.lang.Class<com.tencent.bugly.crashreport.common.info.b.m>;
								public a(param0: android.content.Context): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module common {
					export module strategy {
						export class StrategyBean extends java.lang.Object implements android.os.Parcelable {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.common.strategy.StrategyBean>;
							public static a: string;
							public static b: string;
							public c: number;
							public d: number;
							public e: boolean;
							public f: boolean;
							public g: boolean;
							public h: boolean;
							public i: boolean;
							public j: boolean;
							public k: boolean;
							public l: boolean;
							public m: boolean;
							public n: number;
							public o: number;
							public p: string;
							public q: string;
							public r: string;
							public s: java.util.Map<string,string>;
							public t: number;
							public u: number;
							public v: number;
							public static CREATOR: android.os.Parcelable.Creator<com.tencent.bugly.crashreport.common.strategy.StrategyBean>;
							public constructor();
							public describeContents(): number;
							public writeToParcel(param0: android.os.Parcel, param1: number): void;
							public constructor(param0: android.os.Parcel);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module common {
					export module strategy {
						export class a extends java.lang.Object {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.common.strategy.a>;
							public a(param0: number): void;
							public static a(param0: string): void;
							public a(param0: com.tencent.bugly.crashreport.common.strategy.StrategyBean, param1: boolean): void;
							public static a(): com.tencent.bugly.crashreport.common.strategy.a;
							public a(param0: com.tencent.bugly.proguard.aq): void;
							public static d(): com.tencent.bugly.crashreport.common.strategy.StrategyBean;
							public static a(param0: android.content.Context, param1: java.util.List<com.tencent.bugly.a>): com.tencent.bugly.crashreport.common.strategy.a;
							public b(): boolean;
							public c(): com.tencent.bugly.crashreport.common.strategy.StrategyBean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module crash {
					export class BuglyBroadcastReceiver extends android.content.BroadcastReceiver {
						public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.BuglyBroadcastReceiver>;
						public constructor();
						public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
						public addFilter(param0: string): void;
						public register(param0: android.content.Context): void;
						public unregister(param0: android.content.Context): void;
						public static getInstance(): com.tencent.bugly.crashreport.crash.BuglyBroadcastReceiver;
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module crash {
					export class CrashDetailBean extends java.lang.Object {
						public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.CrashDetailBean>;
						public a: number;
						public b: number;
						public c: string;
						public d: boolean;
						public e: string;
						public f: string;
						public g: string;
						public h: java.util.Map<string,com.tencent.bugly.crashreport.common.info.PlugInBean>;
						public i: java.util.Map<string,com.tencent.bugly.crashreport.common.info.PlugInBean>;
						public j: boolean;
						public k: boolean;
						public l: number;
						public m: string;
						public n: string;
						public o: string;
						public p: string;
						public q: string;
						public r: number;
						public s: string;
						public t: number;
						public u: string;
						public v: string;
						public w: string;
						public x: string;
						public y: number[];
						public z: java.util.Map<string,string>;
						public A: string;
						public B: string;
						public C: number;
						public D: number;
						public E: number;
						public F: number;
						public G: number;
						public H: number;
						public I: number;
						public J: number;
						public K: number;
						public L: string;
						public M: string;
						public N: string;
						public O: string;
						public P: number;
						public Q: boolean;
						public R: java.util.Map<string,string>;
						public S: java.util.Map<string,string>;
						public T: number;
						public U: number;
						public V: java.util.Map<string,string>;
						public W: java.util.Map<string,string>;
						public X: number[];
						public Y: string;
						public Z: string;
						public static CREATOR: android.os.Parcelable.Creator<com.tencent.bugly.crashreport.crash.CrashDetailBean>;
						public constructor();
						public describeContents(): number;
						public constructor(param0: android.os.Parcel);
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module crash {
					export class a extends java.lang.Comparable<com.tencent.bugly.crashreport.crash.a> {
						public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.a>;
						public a: number;
						public b: number;
						public c: string;
						public d: boolean;
						public e: boolean;
						public f: number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module crash {
					export module anr {
						export class TraceFileHelper extends java.lang.Object {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.anr.TraceFileHelper>;
							public constructor();
							public static readTargetDumpInfo(param0: string, param1: string, param2: boolean): com.tencent.bugly.crashreport.crash.anr.TraceFileHelper.a;
							public static readTraceFile(param0: string, param1: com.tencent.bugly.crashreport.crash.anr.TraceFileHelper.b): void;
							public static readFirstDumpInfo(param0: string, param1: boolean): com.tencent.bugly.crashreport.crash.anr.TraceFileHelper.a;
						}
						export module TraceFileHelper {
							export class a extends java.lang.Object {
								public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.anr.TraceFileHelper.a>;
								public a: number;
								public b: string;
								public c: number;
								public d: java.util.Map<string,string[]>;
								public constructor();
							}
							export class b extends java.lang.Object {
								public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.anr.TraceFileHelper.b>;
								/**
								 * Constructs a new instance of the com.tencent.bugly.crashreport.crash.anr.TraceFileHelper$b interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									a(param0: number, param1: number, param2: string): boolean;
									a(param0: number): boolean;
									a(param0: string, param1: number, param2: string, param3: string): boolean;
								});
								public constructor();
								public a(param0: number, param1: number, param2: string): boolean;
								public a(param0: number): boolean;
								public a(param0: string, param1: number, param2: string, param3: string): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module crash {
					export module anr {
						export class a extends java.lang.Object {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.anr.a>;
							public a: string;
							public b: java.util.Map<string,string>;
							public c: number;
							public d: string;
							public e: string;
							public f: string;
							public g: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module crash {
					export module anr {
						export class b extends java.lang.Object {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.anr.b>;
							public b(): void;
							public static a(param0: android.content.Context, param1: com.tencent.bugly.crashreport.common.strategy.a, param2: com.tencent.bugly.crashreport.common.info.a, param3: com.tencent.bugly.proguard.x, param4: com.tencent.bugly.proguard.o, param5: com.tencent.bugly.crashreport.crash.b, param6: com.tencent.bugly.BuglyStrategy.a): com.tencent.bugly.crashreport.crash.anr.b;
							public a(param0: boolean): void;
							public a(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module crash {
					export module anr {
						export class c extends java.lang.Object {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.anr.c>;
							public c(): number;
							public a(param0: string): void;
							public d(): boolean;
							public constructor(param0: string, param1: number);
							public a(param0: boolean): void;
							public b(): string;
							public a(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module crash {
					export class b extends java.lang.Object {
						public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.b>;
						public a(param0: java.util.List<com.tencent.bugly.crashreport.crash.CrashDetailBean>, param1: number, param2: boolean, param3: boolean, param4: boolean): void;
						public d(param0: com.tencent.bugly.crashreport.crash.CrashDetailBean): void;
						public c(param0: com.tencent.bugly.crashreport.crash.CrashDetailBean): void;
						public a(param0: com.tencent.bugly.crashreport.crash.CrashDetailBean): boolean;
						public static a(param0: string, param1: string, param2: string, param3: string, param4: string, param5: com.tencent.bugly.crashreport.crash.CrashDetailBean): void;
						public static a(param0: boolean, param1: java.util.List<com.tencent.bugly.crashreport.crash.CrashDetailBean>): void;
						public a(param0: com.tencent.bugly.crashreport.crash.CrashDetailBean, param1: number, param2: boolean): void;
						public constructor(param0: number, param1: android.content.Context, param2: com.tencent.bugly.proguard.v, param3: com.tencent.bugly.proguard.o, param4: com.tencent.bugly.crashreport.common.strategy.a, param5: com.tencent.bugly.BuglyStrategy.a, param6: com.tencent.bugly.proguard.n);
						public e(param0: com.tencent.bugly.crashreport.crash.CrashDetailBean): void;
						public b(param0: com.tencent.bugly.crashreport.crash.CrashDetailBean): boolean;
						public a(): java.util.List<com.tencent.bugly.crashreport.crash.CrashDetailBean>;
					}
					export module b {
						export abstract class a extends java.lang.Object {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.b.a>;
						}
						export class b extends com.tencent.bugly.crashreport.crash.b.a {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.b.b>;
						}
						export class c extends com.tencent.bugly.crashreport.crash.b.a {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.b.c>;
						}
						export class d extends com.tencent.bugly.crashreport.crash.b.a {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.b.d>;
						}
						export class e extends com.tencent.bugly.crashreport.crash.b.a {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.b.e>;
						}
						export class f extends com.tencent.bugly.crashreport.crash.b.a {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.b.f>;
						}
						export class g extends com.tencent.bugly.crashreport.crash.b.a {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.b.g>;
						}
						export class h extends com.tencent.bugly.crashreport.crash.b.a {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.b.h>;
						}
						export class i extends com.tencent.bugly.crashreport.crash.b.a {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.b.i>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module crash {
					export class c extends java.lang.Object {
						public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.c>;
						public a(param0: com.tencent.bugly.crashreport.common.strategy.StrategyBean): void;
						public i(): void;
						public l(): void;
						public t(): boolean;
						public a(param0: boolean, param1: boolean, param2: boolean): void;
						public c(): void;
						public a(param0: com.tencent.bugly.crashreport.crash.CrashDetailBean): void;
						public o(): void;
						public static a(): com.tencent.bugly.crashreport.crash.c;
						public u(): boolean;
						public k(): void;
						public n(): void;
						public p(): boolean;
						public r(): boolean;
						public s(): boolean;
						public q(): boolean;
						public b(): boolean;
						public f(): void;
						public a(param0: java.lang.Thread, param1: java.lang.Throwable, param2: boolean, param3: string, param4: number[], param5: boolean, param6: boolean): void;
						public static a(param0: number, param1: android.content.Context, param2: boolean, param3: com.tencent.bugly.BuglyStrategy.a, param4: com.tencent.bugly.proguard.n, param5: string): com.tencent.bugly.crashreport.crash.c;
						public g(): void;
						public h(): void;
						public m(): boolean;
						public d(): void;
						public e(): void;
						public j(): void;
						public a(param0: number): void;
						public a(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module crash {
					export class d extends java.lang.Object {
						public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.d>;
						public static a(param0: java.lang.Thread, param1: number, param2: string, param3: string, param4: string, param5: java.util.Map<string,string>): void;
						public static a(param0: android.content.Context): com.tencent.bugly.crashreport.crash.d;
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module crash {
					export class e extends java.lang.Object implements java.lang.Thread.UncaughtExceptionHandler {
						public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.e>;
						public constructor(param0: android.content.Context, param1: com.tencent.bugly.crashreport.crash.b, param2: com.tencent.bugly.crashreport.common.strategy.a, param3: com.tencent.bugly.crashreport.common.info.a);
						public a(param0: com.tencent.bugly.crashreport.common.strategy.StrategyBean): void;
						public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
						public a(): void;
						public a(param0: java.lang.Thread, param1: java.lang.Throwable, param2: boolean, param3: string, param4: number[], param5: boolean): void;
						public b(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module crash {
					export module h5 {
						export class H5JavaScriptInterface extends java.lang.Object {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.h5.H5JavaScriptInterface>;
							public printLog(param0: string): void;
							public static getInstance(param0: com.tencent.bugly.crashreport.CrashReport.WebViewInterface): com.tencent.bugly.crashreport.crash.h5.H5JavaScriptInterface;
							public reportJSException(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module crash {
					export module h5 {
						export class a extends java.lang.Object {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.h5.a>;
							public a: string;
							public b: string;
							public c: string;
							public d: string;
							public e: string;
							public f: string;
							public g: string;
							public h: string;
							public i: string;
							public j: number;
							public k: number;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module crash {
					export module h5 {
						export class b extends java.lang.Object {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.h5.b>;
							public static b(): string;
							public static a(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module crash {
					export module jni {
						export class NativeCrashHandler extends java.lang.Object implements com.tencent.bugly.crashreport.a {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.jni.NativeCrashHandler>;
							public removeEmptyNativeRecordFiles(): void;
							public isUserOpened(): boolean;
							public getDumpFilePath(): string;
							public static setShouldHandleInJava(param0: boolean): void;
							public unregist(): string;
							public enableCatchAnrTrace(): void;
							public appendNativeLog(param0: string, param1: string, param2: string): boolean;
							public setDumpFilePath(param0: string): void;
							public testNativeCrash(): void;
							public testCrash(): void;
							public testNativeCrash(param0: boolean, param1: boolean, param2: boolean): void;
							public setNativeAppChannel(param0: string): boolean;
							public filterSigabrtSysLog(): boolean;
							public checkUploadRecordCrash(): void;
							public removeNativeKeyValue(param0: string): string;
							public getNativeKeyValueList(): string;
							public dumpAnrNativeStack(): void;
							public setNativeLaunchTime(param0: number): boolean;
							public a(): void;
							public static getInstance(param0: android.content.Context, param1: com.tencent.bugly.crashreport.common.info.a, param2: com.tencent.bugly.crashreport.crash.b, param3: com.tencent.bugly.crashreport.common.strategy.a, param4: com.tencent.bugly.proguard.x, param5: boolean, param6: string): com.tencent.bugly.crashreport.crash.jni.NativeCrashHandler;
							public regist(param0: string, param1: boolean, param2: number): string;
							public isEnableCatchAnrTrace(): boolean;
							public static getInstance(): com.tencent.bugly.crashreport.crash.jni.NativeCrashHandler;
							public setNativeInfo(param0: number, param1: string): void;
							public static isShouldHandleInJava(): boolean;
							public onStrategyChanged(param0: com.tencent.bugly.crashreport.common.strategy.StrategyBean): void;
							public setNativeUserId(param0: string): boolean;
							public getNativeLog(): string;
							public appendLogToNative(param0: string, param1: string, param2: string): boolean;
							public getLogFromNative(): string;
							public putKeyValueToNative(param0: string, param1: string): boolean;
							public getRunningCpuAbi(): string;
							public getNativeExceptionHandler(): com.tencent.bugly.crashreport.crash.jni.NativeExceptionHandler;
							public setUserOpened(param0: boolean): void;
							public setNativeAppPackage(param0: string): boolean;
							public appendWholeNativeLog(param0: string): boolean;
							public setNativeIsAppForeground(param0: boolean): boolean;
							public setNativeAppVersion(param0: string): boolean;
							public putNativeKeyValue(param0: string, param1: string): boolean;
							public startNativeMonitor(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module crash {
					export module jni {
						export class NativeExceptionHandler extends java.lang.Object {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.jni.NativeExceptionHandler>;
							/**
							 * Constructs a new instance of the com.tencent.bugly.crashreport.crash.jni.NativeExceptionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								handleNativeException(param0: number, param1: number, param2: number, param3: number, param4: string, param5: string, param6: string, param7: string, param8: number, param9: string, param10: number, param11: number, param12: number, param13: string, param14: string): void;
								handleNativeException2(param0: number, param1: number, param2: number, param3: number, param4: string, param5: string, param6: string, param7: string, param8: number, param9: string, param10: number, param11: number, param12: number, param13: string, param14: string, param15: string[]): void;
								packageCrashDatas(param0: string, param1: string, param2: number, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: number[], param13: java.util.Map<string,string>, param14: boolean, param15: boolean): com.tencent.bugly.crashreport.crash.CrashDetailBean;
							});
							public constructor();
							public packageCrashDatas(param0: string, param1: string, param2: number, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: number[], param13: java.util.Map<string,string>, param14: boolean, param15: boolean): com.tencent.bugly.crashreport.crash.CrashDetailBean;
							public handleNativeException(param0: number, param1: number, param2: number, param3: number, param4: string, param5: string, param6: string, param7: string, param8: number, param9: string, param10: number, param11: number, param12: number, param13: string, param14: string): void;
							public handleNativeException2(param0: number, param1: number, param2: number, param3: number, param4: string, param5: string, param6: string, param7: string, param8: number, param9: string, param10: number, param11: number, param12: number, param13: string, param14: string, param15: string[]): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module crash {
					export module jni {
						export class a extends java.lang.Object implements com.tencent.bugly.crashreport.crash.jni.NativeExceptionHandler {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.jni.a>;
							public packageCrashDatas(param0: string, param1: string, param2: number, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string, param10: string, param11: string, param12: number[], param13: java.util.Map<string,string>, param14: boolean, param15: boolean): com.tencent.bugly.crashreport.crash.CrashDetailBean;
							public handleNativeException(param0: number, param1: number, param2: number, param3: number, param4: string, param5: string, param6: string, param7: string, param8: number, param9: string, param10: number, param11: number, param12: number, param13: string, param14: string): void;
							public handleNativeException2(param0: number, param1: number, param2: number, param3: number, param4: string, param5: string, param6: string, param7: string, param8: number, param9: string, param10: number, param11: number, param12: number, param13: string, param14: string, param15: string[]): void;
							public constructor(param0: android.content.Context, param1: com.tencent.bugly.crashreport.common.info.a, param2: com.tencent.bugly.crashreport.crash.b, param3: com.tencent.bugly.crashreport.common.strategy.a);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module crash {
					export module jni {
						export class b extends java.lang.Object {
							public static class: java.lang.Class<com.tencent.bugly.crashreport.crash.jni.b>;
							public static a(param0: string, param1: number, param2: string, param3: boolean): string;
							public static a(param0: string, param1: string): string;
							public static c(param0: string): void;
							public static a(param0: boolean, param1: string): void;
							public static a(param0: android.content.Context, param1: string, param2: com.tencent.bugly.crashreport.crash.jni.NativeExceptionHandler): com.tencent.bugly.crashreport.crash.CrashDetailBean;
							public static a(param0: string): string;
							public static b(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module crashreport {
				export module inner {
					export class InnerApi extends java.lang.Object {
						public static class: java.lang.Class<com.tencent.bugly.crashreport.inner.InnerApi>;
						public constructor();
						public static postCocos2dxCrashAsync(param0: number, param1: string, param2: string, param3: string): void;
						public static postU3dCrashAsync(param0: string, param1: string, param2: string): void;
						public static postH5CrashAsync(param0: java.lang.Thread, param1: string, param2: string, param3: string, param4: java.util.Map<string,string>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class a extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.proguard.a>;
					public a(param0: number[]): void;
					public static a(param0: java.util.List<com.tencent.bugly.crashreport.biz.UserInfoBean>, param1: number): com.tencent.bugly.proguard.as;
					public static a(param0: java.net.InetAddress, param1: number): void;
					public static a(param0: string, param1: number): void;
					public static a(param0: android.app.ActivityManager): boolean;
					public a(param0: string, param1: any): void;
					public static b(param0: number[]): com.tencent.bugly.proguard.ao;
					public static a(param0: number[], param1: java.lang.Class<any>): com.tencent.bugly.proguard.j;
					public static a(param0: java.util.ArrayList<string>): string;
					public static b(): java.net.Proxy;
					public static a(param0: com.tencent.bugly.crashreport.biz.UserInfoBean): com.tencent.bugly.proguard.ar;
					public static a(param0: android.app.ActivityManager, param1: number): android.app.ActivityManager.ProcessErrorStateInfo;
					public a(param0: string): void;
					public static a(param0: any): number[];
					public a(): number[];
					public static a(param0: android.content.Context, param1: number, param2: number[]): com.tencent.bugly.proguard.an;
					public static a(param0: com.tencent.bugly.proguard.j): number[];
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class aa extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.proguard.aa>;
					public static a(param0: number): void;
					public static a(param0: string, param1: string, param2: string): void;
					public static a(param0: android.content.Context): void;
					public static a(param0: string, param1: string, param2: java.lang.Throwable): void;
					public static a(): number[];
				}
				export module aa {
					export class a extends java.lang.Object {
						public static class: java.lang.Class<com.tencent.bugly.proguard.aa.a>;
						public constructor(param0: string);
						public a(param0: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class ab extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.proguard.ab>;
					public static a(param0: boolean, param1: number, param2: boolean): java.util.Map<string,string>;
					public static a(param0: java.lang.Runnable, param1: string): java.lang.Thread;
					public static c(param0: string): boolean;
					public static a(param0: java.io.File, param1: string, param2: string): number[];
					public static b(param0: java.lang.Throwable): string;
					public static a(param0: java.lang.Throwable): string;
					public static a(param0: java.io.File, param1: java.io.File, param2: number): boolean;
					public static a(param0: android.os.Parcelable): number[];
					public static b(param0: number): void;
					public static b(param0: number[], param1: number): number[];
					public constructor();
					public static a(param0: string, param1: string, param2: any, param3: java.lang.Class<any>[], param4: any[]): any;
					public static a(param0: java.lang.Class<any>, param1: string, param2: any, param3: any): void;
					public static c(param0: string, param1: string): string;
					public static a(param0: android.content.Context): android.content.Context;
					public static a(param0: java.util.Date): string;
					public static a(param0: number, param1: string): string;
					public static a(param0: string, param1: string): java.io.BufferedReader;
					public static b(param0: string, param1: string): void;
					public static a(param0: android.content.Context, param1: string): string;
					public static a(param0: number[]): string;
					public static a(param0: android.os.Parcel, param1: java.util.Map<string,com.tencent.bugly.crashreport.common.info.PlugInBean>): void;
					public static a(param0: string): boolean;
					public static a(param0: java.lang.Thread): string;
					public static b(param0: string): void;
					public static a(param0: java.io.File, param1: number, param2: boolean): string;
					public static a(param0: string, param1: android.content.Context): android.content.SharedPreferences;
					public static a(param0: number): string;
					public static b(param0: android.os.Parcel): java.util.Map<string,string>;
					public static a(param0: android.os.Parcel): java.util.Map<string,com.tencent.bugly.crashreport.common.info.PlugInBean>;
					public static a(param0: number[], param1: android.os.Parcelable.Creator<any>): any;
					public static a(): string;
					public static c(param0: number): number[];
					public static b(param0: number[]): number;
					public static b(param0: android.os.Parcel, param1: java.util.Map<string,string>): void;
					public static a(param0: java.lang.Runnable): boolean;
					public static a(param0: android.content.Context, param1: string, param2: number): boolean;
					public static b(param0: android.content.Context, param1: string): boolean;
					public static a(param0: number[], param1: number): number[];
					public static b(): number;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class ac extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<com.tencent.bugly.proguard.ac>;
					public b(param0: number): java.util.List<com.tencent.bugly.crashreport.crash.anr.c>;
					public d(): void;
					public run(): void;
					public b(): boolean;
					public c(): number;
					public a(): void;
					public a(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class ad extends java.lang.Thread {
					public static class: java.lang.Class<com.tencent.bugly.proguard.ad>;
					public c(): java.util.List<com.tencent.bugly.crashreport.crash.anr.c>;
					public constructor(target: java.lang.Runnable, name: string);
					public run(): void;
					public constructor(target: java.lang.Runnable);
					public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable);
					public constructor(group: java.lang.ThreadGroup, name: string);
					public b(param0: boolean): void;
					public a(param0: com.tencent.bugly.proguard.ad.a): void;
					public constructor(name: string);
					public d(): void;
					public constructor();
					public a(): boolean;
					public b(): boolean;
					public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable, name: string);
					public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable, name: string, stackSize: number);
					public a(param0: boolean): void;
				}
				export module ad {
					export class a extends java.lang.Object {
						public static class: java.lang.Class<com.tencent.bugly.proguard.ad.a>;
						/**
						 * Constructs a new instance of the com.tencent.bugly.proguard.ad$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							a(param0: boolean, param1: number): void;
						});
						public constructor();
						public a(param0: boolean, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class ae extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.proguard.ae>;
					public static a(param0: number): com.tencent.bugly.proguard.af;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class af extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.proguard.af>;
					/**
					 * Constructs a new instance of the com.tencent.bugly.proguard.af interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						a(param0: number[]): number[];
						b(param0: number[]): number[];
					});
					public constructor();
					public b(param0: number[]): number[];
					public a(param0: number[]): number[];
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class ag extends java.lang.Object implements com.tencent.bugly.proguard.af {
					public static class: java.lang.Class<com.tencent.bugly.proguard.ag>;
					public b(param0: number[]): number[];
					public constructor();
					public a(param0: number[]): number[];
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class ah extends java.lang.Object implements com.tencent.bugly.proguard.af {
					public static class: java.lang.Class<com.tencent.bugly.proguard.ah>;
					public b(param0: number[]): number[];
					public constructor();
					public a(param0: number[]): number[];
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class ai extends com.tencent.bugly.proguard.j implements java.lang.Cloneable {
					public static class: java.lang.Class<com.tencent.bugly.proguard.ai>;
					public b: string;
					public c: string;
					public a(param0: com.tencent.bugly.proguard.h): void;
					public constructor();
					public a(param0: com.tencent.bugly.proguard.i): void;
					public a(param0: java.lang.StringBuilder, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class aj extends com.tencent.bugly.proguard.j implements java.lang.Cloneable {
					public static class: java.lang.Class<com.tencent.bugly.proguard.aj>;
					public a(param0: com.tencent.bugly.proguard.h): void;
					public constructor();
					public a(param0: com.tencent.bugly.proguard.i): void;
					public a(param0: java.lang.StringBuilder, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class ak extends com.tencent.bugly.proguard.j implements java.lang.Cloneable {
					public static class: java.lang.Class<com.tencent.bugly.proguard.ak>;
					public constructor(param0: number, param1: string, param2: number[]);
					public a(param0: com.tencent.bugly.proguard.h): void;
					public constructor();
					public a(param0: com.tencent.bugly.proguard.i): void;
					public a(param0: java.lang.StringBuilder, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class al extends com.tencent.bugly.proguard.j {
					public static class: java.lang.Class<com.tencent.bugly.proguard.al>;
					public b: number;
					public c: string;
					public d: string;
					public e: string;
					public f: string;
					public g: string;
					public h: java.util.Map<string,string>;
					public i: string;
					public j: com.tencent.bugly.proguard.aj;
					public k: number;
					public l: string;
					public m: string;
					public n: com.tencent.bugly.proguard.ai;
					public o: java.util.ArrayList<com.tencent.bugly.proguard.ai>;
					public p: java.util.ArrayList<com.tencent.bugly.proguard.ai>;
					public q: java.util.ArrayList<com.tencent.bugly.proguard.ak>;
					public r: java.util.Map<string,string>;
					public s: java.util.Map<string,string>;
					public a(param0: com.tencent.bugly.proguard.h): void;
					public constructor();
					public a(param0: com.tencent.bugly.proguard.i): void;
					public a(param0: java.lang.StringBuilder, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class am extends com.tencent.bugly.proguard.j implements java.lang.Cloneable {
					public static class: java.lang.Class<com.tencent.bugly.proguard.am>;
					public a(param0: com.tencent.bugly.proguard.h): void;
					public constructor();
					public a(param0: com.tencent.bugly.proguard.i): void;
					public a(param0: java.lang.StringBuilder, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class an extends com.tencent.bugly.proguard.j {
					public static class: java.lang.Class<com.tencent.bugly.proguard.an>;
					public b: string;
					public c: string;
					public d: string;
					public e: string;
					public f: string;
					public g: number;
					public h: number[];
					public i: string;
					public j: string;
					public k: java.util.Map<string,string>;
					public l: string;
					public m: number;
					public n: string;
					public o: string;
					public p: string;
					public q: number;
					public r: string;
					public s: string;
					public t: string;
					public a(param0: com.tencent.bugly.proguard.h): void;
					public constructor();
					public a(param0: com.tencent.bugly.proguard.i): void;
					public a(param0: java.lang.StringBuilder, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class ao extends com.tencent.bugly.proguard.j {
					public static class: java.lang.Class<com.tencent.bugly.proguard.ao>;
					public b: number;
					public c: number[];
					public d: number;
					public e: string;
					public a(param0: com.tencent.bugly.proguard.h): void;
					public constructor();
					public a(param0: com.tencent.bugly.proguard.i): void;
					public a(param0: java.lang.StringBuilder, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class ap extends com.tencent.bugly.proguard.j implements java.lang.Cloneable {
					public static class: java.lang.Class<com.tencent.bugly.proguard.ap>;
					public a(param0: com.tencent.bugly.proguard.h): void;
					public constructor();
					public a(param0: com.tencent.bugly.proguard.i): void;
					public a(param0: java.lang.StringBuilder, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class aq extends com.tencent.bugly.proguard.j implements java.lang.Cloneable {
					public static class: java.lang.Class<com.tencent.bugly.proguard.aq>;
					public b: boolean;
					public c: boolean;
					public d: string;
					public e: string;
					public f: com.tencent.bugly.proguard.ap;
					public g: java.util.Map<string,string>;
					public h: number;
					public i: number;
					public equals(obj: any): boolean;
					public clone(): any;
					public a(param0: com.tencent.bugly.proguard.h): void;
					public constructor();
					public a(param0: com.tencent.bugly.proguard.i): void;
					public equals(o: any): boolean;
					public hashCode(): number;
					public a(param0: java.lang.StringBuilder, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class ar extends com.tencent.bugly.proguard.j {
					public static class: java.lang.Class<com.tencent.bugly.proguard.ar>;
					public b: number;
					public c: string;
					public d: string;
					public e: string;
					public f: java.util.Map<string,string>;
					public g: boolean;
					public a(param0: com.tencent.bugly.proguard.h): void;
					public constructor();
					public a(param0: com.tencent.bugly.proguard.i): void;
					public a(param0: java.lang.StringBuilder, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class as extends com.tencent.bugly.proguard.j implements java.lang.Cloneable {
					public static class: java.lang.Class<com.tencent.bugly.proguard.as>;
					public b: string;
					public c: string;
					public d: java.util.ArrayList<com.tencent.bugly.proguard.ar>;
					public e: java.util.Map<string,string>;
					public a(param0: com.tencent.bugly.proguard.h): void;
					public constructor();
					public a(param0: com.tencent.bugly.proguard.i): void;
					public a(param0: java.lang.StringBuilder, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class b extends java.lang.RuntimeException {
					public static class: java.lang.Class<com.tencent.bugly.proguard.b>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor(param0: string);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(param0: java.lang.Exception);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class c extends com.tencent.bugly.proguard.a {
					public static class: java.lang.Class<com.tencent.bugly.proguard.c>;
					public d: java.util.HashMap<string,number[]>;
					public a(param0: number[]): void;
					public b(param0: string, param1: any): any;
					public static a(param0: java.util.List<com.tencent.bugly.crashreport.biz.UserInfoBean>, param1: number): com.tencent.bugly.proguard.as;
					public static a(param0: java.net.InetAddress, param1: number): void;
					public static a(param0: string, param1: number): void;
					public static a(param0: android.app.ActivityManager): boolean;
					public a(param0: string, param1: any): void;
					public static b(param0: number[]): com.tencent.bugly.proguard.ao;
					public static a(param0: number[], param1: java.lang.Class<any>): com.tencent.bugly.proguard.j;
					public static a(param0: java.util.ArrayList<string>): string;
					public constructor();
					public static b(): java.net.Proxy;
					public static a(param0: com.tencent.bugly.crashreport.biz.UserInfoBean): com.tencent.bugly.proguard.ar;
					public static a(param0: android.app.ActivityManager, param1: number): android.app.ActivityManager.ProcessErrorStateInfo;
					public a(param0: string): void;
					public static a(param0: any): number[];
					public a(): number[];
					public static a(param0: android.content.Context, param1: number, param2: number[]): com.tencent.bugly.proguard.an;
					public c(): void;
					public static a(param0: com.tencent.bugly.proguard.j): number[];
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class d extends com.tencent.bugly.proguard.c {
					public static class: java.lang.Class<com.tencent.bugly.proguard.d>;
					public a(param0: number[]): void;
					public b(param0: string, param1: any): any;
					public b(param0: string): void;
					public c(param0: string): void;
					public static a(param0: java.util.List<com.tencent.bugly.crashreport.biz.UserInfoBean>, param1: number): com.tencent.bugly.proguard.as;
					public static a(param0: java.net.InetAddress, param1: number): void;
					public static a(param0: string, param1: number): void;
					public static a(param0: android.app.ActivityManager): boolean;
					public a(param0: number): void;
					public a(param0: string, param1: any): void;
					public static b(param0: number[]): com.tencent.bugly.proguard.ao;
					public static a(param0: number[], param1: java.lang.Class<any>): com.tencent.bugly.proguard.j;
					public static a(param0: java.util.ArrayList<string>): string;
					public constructor();
					public static b(): java.net.Proxy;
					public static a(param0: com.tencent.bugly.crashreport.biz.UserInfoBean): com.tencent.bugly.proguard.ar;
					public static a(param0: android.app.ActivityManager, param1: number): android.app.ActivityManager.ProcessErrorStateInfo;
					public a(param0: string): void;
					public static a(param0: any): number[];
					public a(): number[];
					public static a(param0: android.content.Context, param1: number, param2: number[]): com.tencent.bugly.proguard.an;
					public static a(param0: com.tencent.bugly.proguard.j): number[];
					public c(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class e extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.proguard.e>;
					public static a(param0: number[]): string;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class f extends com.tencent.bugly.proguard.j {
					public static class: java.lang.Class<com.tencent.bugly.proguard.f>;
					public b: number;
					public c: string;
					public d: string;
					public e: number[];
					public equals(obj: any): boolean;
					public clone(): any;
					public a(param0: com.tencent.bugly.proguard.h): void;
					public constructor();
					public a(param0: com.tencent.bugly.proguard.i): void;
					public equals(o: any): boolean;
					public a(param0: java.lang.StringBuilder, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class g extends java.lang.RuntimeException {
					public static class: java.lang.Class<com.tencent.bugly.proguard.g>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor(param0: string);
					public constructor();
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class h extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.proguard.h>;
					public a(param0: number[]): void;
					public a(param0: string): number;
					public a(param0: number, param1: boolean): boolean;
					public a(param0: java.util.Map<any,any>, param1: number, param2: boolean): java.util.HashMap<any,any>;
					public a(param0: com.tencent.bugly.proguard.j, param1: number, param2: boolean): com.tencent.bugly.proguard.j;
					public constructor(param0: number[]);
					public c(param0: number, param1: boolean): number[];
					public constructor();
					public b(param0: number, param1: boolean): string;
					public a(param0: any, param1: number, param2: boolean): any;
					public constructor(param0: number[], param1: number);
					public a(param0: number, param1: number, param2: boolean): number;
				}
				export module h {
					export class a extends java.lang.Object {
						public static class: java.lang.Class<com.tencent.bugly.proguard.h.a>;
						public a: number;
						public b: number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class i extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.proguard.i>;
					public a(param0: java.util.Map<any,any>, param1: number): void;
					public a(param0: java.util.Collection<any>, param1: number): void;
					public a(param0: com.tencent.bugly.proguard.j, param1: number): void;
					public a(param0: boolean, param1: number): void;
					public a(param0: number, param1: number): void;
					public a(param0: string): number;
					public constructor();
					public a(param0: string, param1: number): void;
					public a(param0: any, param1: number): void;
					public a(): java.nio.ByteBuffer;
					public constructor(param0: number);
					public a(param0: number[], param1: number): void;
					public b(): number[];
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export abstract class j extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<com.tencent.bugly.proguard.j>;
					public toString(): string;
					public a(param0: com.tencent.bugly.proguard.h): void;
					public constructor();
					public a(param0: com.tencent.bugly.proguard.i): void;
					public a(param0: java.lang.StringBuilder, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class k extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.proguard.k>;
					public static a(param0: number, param1: number): boolean;
					public static a(param0: boolean, param1: boolean): boolean;
					public static a(param0: java.nio.ByteBuffer): number[];
					public static a(param0: any, param1: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class l extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.proguard.l>;
					public a: number;
					public b: string;
					public c: number;
					public d: number;
					public e: string;
					public f: string;
					public g: number;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class m extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.proguard.m>;
					public static a(param0: android.content.Context): com.tencent.bugly.proguard.m;
					public static a(): com.tencent.bugly.proguard.m;
					public a(param0: number, param1: number): void;
					public a(param0: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class n extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.proguard.n>;
					/**
					 * Constructs a new instance of the com.tencent.bugly.proguard.n interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						a(): number[];
						b(): string;
						c(): boolean;
					});
					public constructor();
					public b(): string;
					public c(): boolean;
					public a(): number[];
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class o extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.proguard.o>;
					public a(param0: number): java.util.List<com.tencent.bugly.proguard.q>;
					public a(param0: string, param1: android.content.ContentValues, param2: com.tencent.bugly.proguard.n, param3: boolean): number;
					public a(param0: com.tencent.bugly.proguard.q): boolean;
					public a(param0: string, param1: string[], param2: string, param3: string[], param4: com.tencent.bugly.proguard.n, param5: boolean): android.database.Cursor;
					public a(param0: boolean, param1: string, param2: string[], param3: string, param4: string[], param5: string, param6: string, param7: string, param8: string, param9: com.tencent.bugly.proguard.n, param10: boolean): android.database.Cursor;
					public a(param0: number, param1: string, param2: number[], param3: com.tencent.bugly.proguard.n, param4: boolean): boolean;
					public a(param0: java.util.List<com.tencent.bugly.proguard.q>): void;
					public static a(param0: android.content.Context, param1: java.util.List<com.tencent.bugly.a>): com.tencent.bugly.proguard.o;
					public a(param0: string, param1: string, param2: string[], param3: com.tencent.bugly.proguard.n, param4: boolean): number;
					public b(param0: number): void;
					public a(param0: number, param1: com.tencent.bugly.proguard.n, param2: boolean): java.util.Map<string,number[]>;
					public static a(): com.tencent.bugly.proguard.o;
				}
				export module o {
					export class a extends java.lang.Thread {
						public static class: java.lang.Class<com.tencent.bugly.proguard.o.a>;
						public constructor();
						public constructor(group: java.lang.ThreadGroup, name: string);
						public constructor(target: java.lang.Runnable, name: string);
						public run(): void;
						public constructor(name: string);
						public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable, name: string);
						public a(param0: boolean, param1: string, param2: string[], param3: string, param4: string[], param5: string, param6: string, param7: string, param8: string): void;
						public a(param0: number, param1: string, param2: number[]): void;
						public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable);
						public constructor(group: java.lang.ThreadGroup, target: java.lang.Runnable, name: string, stackSize: number);
						public constructor(param0: com.tencent.bugly.proguard.o, param1: number, param2: com.tencent.bugly.proguard.n);
						public constructor(target: java.lang.Runnable);
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class p extends android.database.sqlite.SQLiteOpenHelper {
					public static class: java.lang.Class<com.tencent.bugly.proguard.p>;
					public static a: string;
					public constructor(context: android.content.Context, name: string, factory: android.database.sqlite.SQLiteDatabase.CursorFactory, version: number);
					public constructor(param0: android.content.Context, param1: java.util.List<com.tencent.bugly.a>);
					public getReadableDatabase(): android.database.sqlite.SQLiteDatabase;
					public onDowngrade(db: android.database.sqlite.SQLiteDatabase, oldVersion: number, newVersion: number): void;
					public onDowngrade(param0: android.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
					public getWritableDatabase(): android.database.sqlite.SQLiteDatabase;
					public onCreate(param0: android.database.sqlite.SQLiteDatabase): void;
					public constructor(context: android.content.Context, name: string, factory: android.database.sqlite.SQLiteDatabase.CursorFactory, version: number, errorHandler: android.database.DatabaseErrorHandler);
					public onUpgrade(param0: android.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class q extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.proguard.q>;
					public a: number;
					public b: number;
					public c: string;
					public d: string;
					public e: number;
					public f: string;
					public g: number[];
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class r extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.proguard.r>;
					public constructor();
					public a(param0: java.util.List<string>): android.util.Pair<java.lang.Integer,string>;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class s extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.proguard.s>;
					public a(param0: string, param1: number[], param2: com.tencent.bugly.proguard.w, param3: java.util.Map<string,string>): number[];
					public static a(param0: android.content.Context): com.tencent.bugly.proguard.s;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class t extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.proguard.t>;
					public static a(): com.tencent.bugly.proguard.t;
					public a(param0: com.tencent.bugly.proguard.t.c): void;
					public a(param0: java.util.List<com.tencent.bugly.proguard.t.c>): void;
					public b(): void;
				}
				export module t {
					export class a extends java.lang.Object {
						public static class: java.lang.Class<com.tencent.bugly.proguard.t.a>;
					}
					export class b extends java.lang.Object {
						public static class: java.lang.Class<com.tencent.bugly.proguard.t.b>;
						public constructor();
						public a(): string;
						public a(param0: string): void;
						public c(): string;
						public b(param0: string): void;
						public b(): number;
						public a(param0: number): void;
						public toString(): string;
					}
					export class c extends java.lang.Object {
						public static class: java.lang.Class<com.tencent.bugly.proguard.t.c>;
						public f(): string;
						public constructor();
						public e(): number;
						public c(): number;
						public a(): string;
						public b(): string;
						public d(): boolean;
						public g(): string;
						public constructor(param0: string, param1: string, param2: number, param3: boolean, param4: number, param5: string, param6: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class u extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.proguard.u>;
					/**
					 * Constructs a new instance of the com.tencent.bugly.proguard.u interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						a(param0: boolean, param1: string): void;
					});
					public constructor();
					public a(param0: boolean, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class v extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.proguard.v>;
					public static a(): com.tencent.bugly.proguard.v;
					public a(param0: number, param1: com.tencent.bugly.proguard.an, param2: string, param3: string, param4: com.tencent.bugly.proguard.u, param5: number, param6: boolean): void;
					public a(param0: number): number;
					public a(param0: number, param1: boolean): void;
					public a(param0: boolean): number;
					public static a(param0: android.content.Context): com.tencent.bugly.proguard.v;
					public a(param0: number, param1: number): void;
					public b(param0: number): boolean;
					public a(param0: number, param1: com.tencent.bugly.proguard.an, param2: string, param3: string, param4: com.tencent.bugly.proguard.u, param5: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class w extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<com.tencent.bugly.proguard.w>;
					public run(): void;
					public b(param0: number): void;
					public constructor(param0: android.content.Context, param1: number, param2: number, param3: number[], param4: string, param5: string, param6: com.tencent.bugly.proguard.u, param7: number, param8: number, param9: boolean, param10: java.util.Map<string,string>);
					public constructor(param0: android.content.Context, param1: number, param2: number, param3: number[], param4: string, param5: string, param6: com.tencent.bugly.proguard.u, param7: boolean, param8: boolean);
					public a(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class x extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.proguard.x>;
					public constructor();
					public c(): boolean;
					public static a(): com.tencent.bugly.proguard.x;
					public b(): void;
					public a(param0: java.lang.Runnable, param1: number): boolean;
					public a(param0: java.lang.Runnable): boolean;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class y extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.proguard.y>;
					public static a(param0: java.lang.Throwable): boolean;
					public static e(param0: string, ...param1: any[]): boolean;
					public static a(param0: java.lang.Class<any>, param1: string, ...param2: any[]): boolean;
					public static d(param0: string, ...param1: any[]): boolean;
					public static b(param0: string, ...param1: any[]): boolean;
					public static c(param0: string, ...param1: any[]): boolean;
					public static b(param0: java.lang.Class<any>, param1: string, ...param2: any[]): boolean;
					public static a(param0: string, ...param1: any[]): boolean;
					public static b(param0: java.lang.Throwable): boolean;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module bugly {
			export module proguard {
				export class z extends java.lang.Object {
					public static class: java.lang.Class<com.tencent.bugly.proguard.z>;
					public a(param0: string, param1: string): com.tencent.bugly.proguard.z;
					public static a(param0: string, param1: string, param2: number): boolean;
					public a(param0: number, param1: string): com.tencent.bugly.proguard.z;
					public a(param0: number[], param1: string): com.tencent.bugly.proguard.z;
					public a(param0: any[], param1: string): com.tencent.bugly.proguard.z;
					public a(param0: com.tencent.bugly.proguard.j, param1: string): com.tencent.bugly.proguard.z;
					public a(param0: boolean, param1: string): com.tencent.bugly.proguard.z;
					public a(param0: java.util.Map<any,any>, param1: string): com.tencent.bugly.proguard.z;
					public static a(param0: string, param1: string, param2: string, param3: number): void;
					public a(param0: java.util.Collection<any>, param1: string): com.tencent.bugly.proguard.z;
					public static a(param0: java.io.File, param1: string, param2: number, param3: boolean): boolean;
					public constructor(param0: java.lang.StringBuilder, param1: number);
					public a(param0: any, param1: string): com.tencent.bugly.proguard.z;
					public static a(param0: string, param1: string, param2: string): number;
				}
			}
		}
	}
}

//Generics information:

