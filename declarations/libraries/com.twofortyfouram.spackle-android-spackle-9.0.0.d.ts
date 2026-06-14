/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module com {
	export module twofortyfouram {
		export module log {
			export class Lumberjack extends java.lang.Object {
				public static class: java.lang.Class<com.twofortyfouram.log.Lumberjack>;
				public static i(msg: string, ...args: any[]): void;
				public static w(msg: string, ...args: any[]): void;
				public static e(msg: string, ...args: any[]): void;
				public static always(msg: string, ...args: any[]): void;
				public static formatMessage(msg: string, ...args: any[]): string;
				public static v(msg: string, ...args: any[]): void;
				public static d(msg: string, ...args: any[]): void;
				public static init(context: android.content.Context): void;
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export class AbstractProcessNameContentProvider extends android.content.ContentProvider {
				public static class: java.lang.Class<com.twofortyfouram.spackle.AbstractProcessNameContentProvider>;
				public insert(uri: android.net.Uri, values: android.content.ContentValues): android.net.Uri;
				public insert(param0: android.net.Uri, param1: android.content.ContentValues): android.net.Uri;
				public delete(param0: android.net.Uri, param1: string, param2: string[]): number;
				public update(param0: android.net.Uri, param1: android.content.ContentValues, param2: string, param3: string[]): number;
				public update(uri: android.net.Uri, values: android.content.ContentValues, selection: string, selectionArgs: string[]): number;
				public query(uri: android.net.Uri, projection: string[], selection: string, selectionArgs: string[], sortOrder: string): android.database.Cursor;
				public attachInfo(context: android.content.Context, info: android.content.pm.ProviderInfo): void;
				public query(uri: android.net.Uri, projection: string[], selection: string, selectionArgs: string[], sortOrder: string, cancellationSignal: android.os.CancellationSignal): android.database.Cursor;
				public onCreate(): boolean;
				public query(uri: android.net.Uri, projection: string[], queryArgs: android.os.Bundle, cancellationSignal: android.os.CancellationSignal): android.database.Cursor;
				public constructor();
				public getType(uri: android.net.Uri): string;
				public delete(uri: android.net.Uri, selection: string, selectionArgs: string[]): number;
				public query(param0: android.net.Uri, param1: string[], param2: string, param3: string[], param4: string): android.database.Cursor;
				public onTrimMemory(level: number): void;
				public getType(param0: android.net.Uri): string;
				public onTrimMemory(param0: number): void;
				public applyBatch(operations: java.util.ArrayList<android.content.ContentProviderOperation>): android.content.ContentProviderResult[];
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export class AndroidResourcesMonitor extends java.lang.Object {
				public static class: java.lang.Class<com.twofortyfouram.spackle.AndroidResourcesMonitor>;
				public constructor(context: android.content.Context, isDensityImportant: boolean, interestingConfigFlags: number);
				public removeObserver(callback: com.twofortyfouram.spackle.AndroidResourcesMonitor.ResConfigurationChangeCallback): void;
				public addObserver(callback: com.twofortyfouram.spackle.AndroidResourcesMonitor.ResConfigurationChangeCallback): void;
			}
			export module AndroidResourcesMonitor {
				export class ConfigurationChangeReceiver extends android.content.BroadcastReceiver {
					public static class: java.lang.Class<com.twofortyfouram.spackle.AndroidResourcesMonitor.ConfigurationChangeReceiver>;
					public onReceive(context: android.content.Context, intent: android.content.Intent): void;
					public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
				}
				export class InterestingConfigChanges extends java.lang.Object {
					public static class: java.lang.Class<com.twofortyfouram.spackle.AndroidResourcesMonitor.InterestingConfigChanges>;
					public applyNewConfig(res: android.content.res.Resources): boolean;
					public constructor(isDensityImportant: boolean, configFlags: number);
				}
				export class ResConfigurationChangeCallback extends java.lang.Object {
					public static class: java.lang.Class<com.twofortyfouram.spackle.AndroidResourcesMonitor.ResConfigurationChangeCallback>;
					/**
					 * Constructs a new instance of the com.twofortyfouram.spackle.AndroidResourcesMonitor$ResConfigurationChangeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResChanged(): void;
					});
					public constructor();
					public onResChanged(): void;
				}
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export class AndroidSdkVersion extends java.lang.Object {
				public static class: java.lang.Class<com.twofortyfouram.spackle.AndroidSdkVersion>;
				public static isAtLeastSdk(sdkInt: number): boolean;
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export class AppBuildInfo extends java.lang.Object {
				public static class: java.lang.Class<com.twofortyfouram.spackle.AppBuildInfo>;
				public static getVersionCode(context: android.content.Context): number;
				public static isDebuggable(context: android.content.Context): boolean;
				public static isDebugPackageNameSuffix(context: android.content.Context): boolean;
				public static getTargetSdkVersion(context: android.content.Context): number;
				public static getVersionName(context: android.content.Context): string;
				public static getApplicationName(context: android.content.Context): string;
				public static getInstallWallTimeMillis(context: android.content.Context): number;
				public static getLastUpdateWallTimeMillis(context: android.content.Context): number;
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export class Booleans extends java.lang.Object {
				public static class: java.lang.Class<com.twofortyfouram.spackle.Booleans>;
				public static TRUE: number;
				public static FALSE: number;
				public static toInt(toConvert: boolean): number;
				public static fromInt(toConvert: number): boolean;
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.twofortyfouram.spackle.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export class Clock extends java.lang.Object {
				public static class: java.lang.Class<com.twofortyfouram.spackle.Clock>;
				/**
				 * Constructs a new instance of the com.twofortyfouram.spackle.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getInstance(): com.twofortyfouram.spackle.Clock;
					getWallTimeMillis(): number;
					getRealTimeMillis(): number;
				});
				public constructor();
				public getWallTimeMillis(): number;
				public getRealTimeMillis(): number;
				public static getInstance(): com.twofortyfouram.spackle.Clock;
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export class ContextUtil extends java.lang.Object {
				public static class: java.lang.Class<com.twofortyfouram.spackle.ContextUtil>;
				public static isTestContext(context: android.content.Context): boolean;
				public static cleanContext(context: android.content.Context): android.content.Context;
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export class FileUtil extends java.lang.Object {
				public static class: java.lang.Class<com.twofortyfouram.spackle.FileUtil>;
				public static deleteRecursively(file: java.io.File): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export class FirebaseTestLabUtil extends java.lang.Object {
				public static class: java.lang.Class<com.twofortyfouram.spackle.FirebaseTestLabUtil>;
				public static isFirebaseTestLab(context: android.content.Context): boolean;
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export class HandlerThreadFactory extends java.lang.Object {
				public static class: java.lang.Class<com.twofortyfouram.spackle.HandlerThreadFactory>;
				public static newHandlerThread(threadName: string, threadPriority: com.twofortyfouram.spackle.HandlerThreadFactory.ThreadPriority): android.os.HandlerThread;
			}
			export module HandlerThreadFactory {
				export class ThreadPriority {
					public static class: java.lang.Class<com.twofortyfouram.spackle.HandlerThreadFactory.ThreadPriority>;
					public static AUDIO: com.twofortyfouram.spackle.HandlerThreadFactory.ThreadPriority;
					public static BACKGROUND: com.twofortyfouram.spackle.HandlerThreadFactory.ThreadPriority;
					public static DEFAULT: com.twofortyfouram.spackle.HandlerThreadFactory.ThreadPriority;
					public static DISPLAY: com.twofortyfouram.spackle.HandlerThreadFactory.ThreadPriority;
					public static FOREGROUND: com.twofortyfouram.spackle.HandlerThreadFactory.ThreadPriority;
					public static LESS_FAVORABLE: com.twofortyfouram.spackle.HandlerThreadFactory.ThreadPriority;
					public static LOWEST: com.twofortyfouram.spackle.HandlerThreadFactory.ThreadPriority;
					public static MORE_FAVORABLE: com.twofortyfouram.spackle.HandlerThreadFactory.ThreadPriority;
					public static URGENT_AUDIO: com.twofortyfouram.spackle.HandlerThreadFactory.ThreadPriority;
					public static URGENT_DISPLAY: com.twofortyfouram.spackle.HandlerThreadFactory.ThreadPriority;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): com.twofortyfouram.spackle.HandlerThreadFactory.ThreadPriority[];
					public static valueOf(name: string): com.twofortyfouram.spackle.HandlerThreadFactory.ThreadPriority;
				}
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export class LoggingIdleHandler extends java.lang.Object implements android.os.MessageQueue.IdleHandler {
				public static class: java.lang.Class<com.twofortyfouram.spackle.LoggingIdleHandler>;
				public queueIdle(): boolean;
				public static dumpIdleCounts(): java.util.Map<string,java.lang.Long>;
				public static dumpCpuUsageInNanos(): java.util.Map<string,java.lang.Long>;
				public static getInitRunnable(): java.lang.Runnable;
				public constructor();
			}
			export module LoggingIdleHandler {
				export class InitRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<com.twofortyfouram.spackle.LoggingIdleHandler.InitRunnable>;
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export class MapCompat extends java.lang.Object {
				public static class: java.lang.Class<com.twofortyfouram.spackle.MapCompat>;
				public static newMap(capacity: number): java.util.Map<any,any>;
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export class PermissionCompat extends java.lang.Object {
				public static class: java.lang.Class<com.twofortyfouram.spackle.PermissionCompat>;
				public static getPermissionStatus(context: android.content.Context, permissionName: string): com.twofortyfouram.spackle.PermissionCompat.PermissionStatus;
			}
			export module PermissionCompat {
				export class PermissionStatus {
					public static class: java.lang.Class<com.twofortyfouram.spackle.PermissionCompat.PermissionStatus>;
					public static NOT_GRANTED_BY_MANIFEST: com.twofortyfouram.spackle.PermissionCompat.PermissionStatus;
					public static NOT_GRANTED_BY_USER: com.twofortyfouram.spackle.PermissionCompat.PermissionStatus;
					public static GRANTED: com.twofortyfouram.spackle.PermissionCompat.PermissionStatus;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): com.twofortyfouram.spackle.PermissionCompat.PermissionStatus[];
					public static valueOf(name: string): com.twofortyfouram.spackle.PermissionCompat.PermissionStatus;
				}
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export class ProcessUtil extends java.lang.Object {
				public static class: java.lang.Class<com.twofortyfouram.spackle.ProcessUtil>;
				public static getProcessName(context: android.content.Context): string;
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export class ResourceUtil extends java.lang.Object {
				public static class: java.lang.Class<com.twofortyfouram.spackle.ResourceUtil>;
				public static getPositionForIdInArray(context: android.content.Context, arrayId: number, elementId: number): number;
				public static getString(context: android.content.Context, resourceName: string): string;
				public static getResourceIdForPositionInArray(context: android.content.Context, arrayId: number, position: number): number;
				public static getBoolean(context: android.content.Context, resourceName: string): boolean;
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export class SetCompat extends java.lang.Object {
				public static class: java.lang.Class<com.twofortyfouram.spackle.SetCompat>;
				public static newSet(capacity: number): java.util.Set<any>;
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export class TimeFormatter extends java.lang.Object {
				public static class: java.lang.Class<com.twofortyfouram.spackle.TimeFormatter>;
				public static formatTime(timeFormat: string, wallTimeMillis: number): string;
				public static formatTime(timeFormat: string, clock: com.twofortyfouram.spackle.Clock): string;
				public static formatMilliseconds(elapsedMilliseconds: number): string;
				public static parseTime(timeFormat: string, source: string): java.util.Date;
			}
			export module TimeFormatter {
				export class TimeFormat extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<com.twofortyfouram.spackle.TimeFormatter.TimeFormat>;
					/**
					 * Constructs a new instance of the com.twofortyfouram.spackle.TimeFormatter$TimeFormat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public static ISO_8601: string;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export module bundle {
				export class BundleComparer extends java.lang.Object {
					public static class: java.lang.Class<com.twofortyfouram.spackle.bundle.BundleComparer>;
					public static areBundlesEqual(bundle1: android.os.Bundle, bundle2: android.os.Bundle): boolean;
				}
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export module bundle {
				export class BundleKeyComparator extends java.lang.Object {
					public static class: java.lang.Class<com.twofortyfouram.spackle.bundle.BundleKeyComparator>;
					public compare(param0: any, param1: any): number;
					public equals(obj: any): boolean;
					public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
					public static reverseOrder(): java.util.Comparator<any>;
					public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public compare(object1: string, object2: string): number;
					public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public equals(param0: any): boolean;
					public constructor();
					public reversed(): java.util.Comparator<any>;
					public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static naturalOrder(): java.util.Comparator<any>;
				}
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export module bundle {
				export class BundlePrinter extends java.lang.Object {
					public static class: java.lang.Class<com.twofortyfouram.spackle.bundle.BundlePrinter>;
					public toString(): string;
					public static toString(bundle: android.os.Bundle): string;
				}
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export module bundle {
				export class BundleScrubber extends java.lang.Object {
					public static class: java.lang.Class<com.twofortyfouram.spackle.bundle.BundleScrubber>;
					public static scrub(intent: android.content.Intent): boolean;
					public static scrub(bundle: android.os.Bundle): boolean;
					public static scrub(bundle: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export module internal {
				export class ClockImpl extends java.lang.Object implements com.twofortyfouram.spackle.Clock {
					public static class: java.lang.Class<com.twofortyfouram.spackle.internal.ClockImpl>;
					public getWallTimeMillis(): number;
					public static getInstance(): com.twofortyfouram.spackle.Clock;
					public getRealTimeMillis(): number;
				}
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export module internal {
				export class Constants extends java.lang.Object {
					public static class: java.lang.Class<com.twofortyfouram.spackle.internal.Constants>;
					public static IS_LOGGING_ENABLED: boolean;
				}
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export module internal {
				export class DefaultProcessNameContentProvider extends com.twofortyfouram.spackle.AbstractProcessNameContentProvider {
					public static class: java.lang.Class<com.twofortyfouram.spackle.internal.DefaultProcessNameContentProvider>;
					public onTrimMemory(level: number): void;
					public onTrimMemory(param0: number): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export module internal {
				export class Reflector extends java.lang.Object {
					public static class: java.lang.Class<com.twofortyfouram.spackle.internal.Reflector>;
					public static tryInvokeInstance(target: any, methodName: string, types: java.lang.Class<any>[], args: any[]): any;
					public static tryInvokeStatic(classObject: java.lang.Class<any>, methodName: string, types: java.lang.Class<any>[], args: any[]): any;
					public static tryInvokeStatic(className: string, methodName: string, types: java.lang.Class<any>[], args: any[]): any;
				}
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export module power {
				export class PartialWakeLock extends java.lang.Object {
					public static class: java.lang.Class<com.twofortyfouram.spackle.power.PartialWakeLock>;
					public isHeld(): boolean;
					public toString(): string;
					public static dumpGarbageCollectedLeakedWakeLocks(): java.util.Set<string>;
					public static newInstance(context: android.content.Context, lockName: string, isReferenceCounted: boolean): com.twofortyfouram.spackle.power.PartialWakeLock;
					public acquireLock(): void;
					public acquireLockIfNotHeld(): void;
					public static dumpActivelyLeakedWakelocks(): java.util.Map<string,java.lang.Long>;
					public finalize(): void;
					public releaseLockIfHeld(): void;
					public static dumpWakeLockCounts(): java.util.Map<string,java.lang.Long>;
					public static dumpWakeLockUsageInMillis(): java.util.Map<string,java.lang.Long>;
					public releaseLock(): void;
				}
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export module power {
				export class PartialWakeLockForService extends java.lang.Object {
					public static class: java.lang.Class<com.twofortyfouram.spackle.power.PartialWakeLockForService>;
					public toString(): string;
					public constructor(name: string);
					public beforeDoingWork(context: android.content.Context): void;
					public beforeStartingService(context: android.content.Context): void;
					public afterDoingWork(context: android.content.Context): void;
				}
			}
		}
	}
}

declare module com {
	export module twofortyfouram {
		export module spackle {
			export module test {
				export class MockClock extends java.lang.Object implements com.twofortyfouram.spackle.Clock {
					public static class: java.lang.Class<com.twofortyfouram.spackle.test.MockClock>;
					public static MOCK_CLOCK_DEFAULT_REAL_TIME_MILLIS: number;
					public static MOCK_CLOCK_DEFAULT_WALL_TIME_MILLIS: number;
					public getWallTimeMillis(): number;
					public setRealTimeMillis(realTimeMillis: number): void;
					public constructor(wallTimeMillis: number, param1: number);
					public static getInstance(): com.twofortyfouram.spackle.Clock;
					public constructor();
					public getRealTimeMillis(): number;
					public setWallTimeMillis(wallTimeMillis: number): void;
				}
			}
		}
	}
}

//Generics information:

