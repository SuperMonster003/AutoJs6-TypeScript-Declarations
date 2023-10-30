declare module android {
	export module support {
		export module v4 {
			export module app {
				export class INotificationSideChannel extends java.lang.Object implements android.os.IInterface {
					public static class: java.lang.Class<android.support.v4.app.INotificationSideChannel>;
					/**
					 * Constructs a new instance of the android.support.v4.app.INotificationSideChannel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						notify(param0: string, param1: number, param2: string, param3: android.app.Notification): void;
						cancel(param0: string, param1: number, param2: string): void;
						cancelAll(param0: string): void;
						asBinder(): android.os.IBinder;
					});
					public constructor();
					public notify(param0: string, param1: number, param2: string, param3: android.app.Notification): void;
					public notify(): void;
					public asBinder(): android.os.IBinder;
					public cancelAll(param0: string): void;
					public cancel(param0: string, param1: number, param2: string): void;
				}
				export module INotificationSideChannel {
					export class Default extends java.lang.Object implements android.support.v4.app.INotificationSideChannel {
						public static class: java.lang.Class<android.support.v4.app.INotificationSideChannel.Default>;
						public notify(packageName: string, id: number, tag: string, notification: android.app.Notification): void;
						public constructor();
						public cancel(packageName: string, id: number, tag: string): void;
						public notify(): void;
						public cancelAll(packageName: string): void;
						public asBinder(): android.os.IBinder;
						public notify(param0: string, param1: number, param2: string, param3: android.app.Notification): void;
						public cancelAll(param0: string): void;
						public cancel(param0: string, param1: number, param2: string): void;
					}
					export abstract class Stub extends android.os.Binder implements android.support.v4.app.INotificationSideChannel {
						public static class: java.lang.Class<android.support.v4.app.INotificationSideChannel.Stub>;
						public linkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): void;
						public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
						public unlinkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): boolean;
						public onTransact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
						public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
						public cancelAll(param0: string): void;
						public static setDefaultImpl(impl: android.support.v4.app.INotificationSideChannel): boolean;
						public getInterfaceDescriptor(): string;
						public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, args: string[]): void;
						public asBinder(): android.os.IBinder;
						public static asInterface(obj: android.os.IBinder): android.support.v4.app.INotificationSideChannel;
						public static getDefaultImpl(): android.support.v4.app.INotificationSideChannel;
						public dumpAsync(param0: java.io.FileDescriptor, param1: string[]): void;
						public constructor();
						public queryLocalInterface(param0: string): android.os.IInterface;
						public notify(param0: string, param1: number, param2: string, param3: android.app.Notification): void;
						public queryLocalInterface(descriptor: string): android.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: string[]): void;
						public transact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
						public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
						public notify(): void;
						public isBinderAlive(): boolean;
						public dump(fd: java.io.FileDescriptor, args: string[]): void;
						public pingBinder(): boolean;
						public cancel(param0: string, param1: number, param2: string): void;
						public dumpAsync(fd: java.io.FileDescriptor, args: string[]): void;
					}
					export module Stub {
						export class Proxy extends java.lang.Object implements android.support.v4.app.INotificationSideChannel {
							public static class: java.lang.Class<android.support.v4.app.INotificationSideChannel.Stub.Proxy>;
							public static sDefaultImpl: android.support.v4.app.INotificationSideChannel;
							public getInterfaceDescriptor(): string;
							public cancel(packageName: string, id: number, tag: string): void;
							public cancelAll(packageName: string): void;
							public asBinder(): android.os.IBinder;
							public cancel(param0: string, param1: number, param2: string): void;
							public notify(packageName: string, id: number, tag: string, notification: android.app.Notification): void;
							public notify(): void;
							public cancelAll(param0: string): void;
							public notify(param0: string, param1: number, param2: string, param3: android.app.Notification): void;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v4 {
			export module app {
				export class RemoteActionCompatParcelizer extends androidx.core.app.RemoteActionCompatParcelizer {
					public static class: java.lang.Class<android.support.v4.app.RemoteActionCompatParcelizer>;
					public constructor();
					public static write(obj: androidx.core.app.RemoteActionCompat, parcel: androidx.versionedparcelable.VersionedParcel): void;
					public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.core.app.RemoteActionCompat;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v4 {
			export module graphics {
				export module drawable {
					export class IconCompatParcelizer extends androidx.core.graphics.drawable.IconCompatParcelizer {
						public static class: java.lang.Class<android.support.v4.graphics.drawable.IconCompatParcelizer>;
						public constructor();
						public static write(obj: androidx.core.graphics.drawable.IconCompat, parcel: androidx.versionedparcelable.VersionedParcel): void;
						public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.core.graphics.drawable.IconCompat;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v4 {
			export module os {
				export class IResultReceiver extends java.lang.Object implements android.os.IInterface {
					public static class: java.lang.Class<android.support.v4.os.IResultReceiver>;
					/**
					 * Constructs a new instance of the android.support.v4.os.IResultReceiver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						send(param0: number, param1: android.os.Bundle): void;
						asBinder(): android.os.IBinder;
					});
					public constructor();
					public send(param0: number, param1: android.os.Bundle): void;
					public asBinder(): android.os.IBinder;
				}
				export module IResultReceiver {
					export class Default extends java.lang.Object implements android.support.v4.os.IResultReceiver {
						public static class: java.lang.Class<android.support.v4.os.IResultReceiver.Default>;
						public constructor();
						public asBinder(): android.os.IBinder;
						public send(resultCode: number, resultData: android.os.Bundle): void;
						public send(param0: number, param1: android.os.Bundle): void;
					}
					export abstract class Stub extends android.os.Binder implements android.support.v4.os.IResultReceiver {
						public static class: java.lang.Class<android.support.v4.os.IResultReceiver.Stub>;
						public constructor();
						public linkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): void;
						public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
						public static setDefaultImpl(impl: android.support.v4.os.IResultReceiver): boolean;
						public unlinkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): boolean;
						public queryLocalInterface(param0: string): android.os.IInterface;
						public onTransact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
						public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
						public queryLocalInterface(descriptor: string): android.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: string[]): void;
						public transact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
						public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
						public getInterfaceDescriptor(): string;
						public static asInterface(obj: android.os.IBinder): android.support.v4.os.IResultReceiver;
						public static getDefaultImpl(): android.support.v4.os.IResultReceiver;
						public isBinderAlive(): boolean;
						public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, args: string[]): void;
						public asBinder(): android.os.IBinder;
						public dump(fd: java.io.FileDescriptor, args: string[]): void;
						public pingBinder(): boolean;
						public send(param0: number, param1: android.os.Bundle): void;
						public dumpAsync(fd: java.io.FileDescriptor, args: string[]): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: string[]): void;
					}
					export module Stub {
						export class Proxy extends java.lang.Object implements android.support.v4.os.IResultReceiver {
							public static class: java.lang.Class<android.support.v4.os.IResultReceiver.Stub.Proxy>;
							public static sDefaultImpl: android.support.v4.os.IResultReceiver;
							public getInterfaceDescriptor(): string;
							public send(resultCode: number, resultData: android.os.Bundle): void;
							public send(param0: number, param1: android.os.Bundle): void;
							public asBinder(): android.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v4 {
			export module os {
				export class ResultReceiver extends java.lang.Object implements android.os.Parcelable {
					public static class: java.lang.Class<android.support.v4.os.ResultReceiver>;
					public static CREATOR: android.os.Parcelable.Creator<android.support.v4.os.ResultReceiver>;
					public send(resultCode: number, resultData: android.os.Bundle): void;
					public describeContents(): number;
					public onReceiveResult(resultCode: number, resultData: android.os.Bundle): void;
					public writeToParcel(out: android.os.Parcel, flags: number): void;
					public constructor(handler: android.os.Handler);
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
				export module ResultReceiver {
					export class MyResultReceiver extends android.support.v4.os.IResultReceiver.Stub {
						public static class: java.lang.Class<android.support.v4.os.ResultReceiver.MyResultReceiver>;
						public linkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): void;
						public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
						public unlinkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): boolean;
						public queryLocalInterface(param0: string): android.os.IInterface;
						public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
						public queryLocalInterface(descriptor: string): android.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: string[]): void;
						public transact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
						public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, args: string[]): void;
						public send(resultCode: number, resultData: android.os.Bundle): void;
						public dump(fd: java.io.FileDescriptor, args: string[]): void;
						public pingBinder(): boolean;
						public send(param0: number, param1: android.os.Bundle): void;
						public dumpAsync(fd: java.io.FileDescriptor, args: string[]): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: string[]): void;
					}
					export class MyRunnable extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<android.support.v4.os.ResultReceiver.MyRunnable>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module accessibilityservice {
			export class AccessibilityServiceInfoCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.accessibilityservice.AccessibilityServiceInfoCompat>;
				public static CAPABILITY_CAN_RETRIEVE_WINDOW_CONTENT: number;
				public static CAPABILITY_CAN_REQUEST_TOUCH_EXPLORATION: number;
				public static CAPABILITY_CAN_REQUEST_ENHANCED_WEB_ACCESSIBILITY: number;
				public static CAPABILITY_CAN_FILTER_KEY_EVENTS: number;
				public static FEEDBACK_BRAILLE: number;
				public static FEEDBACK_ALL_MASK: number;
				public static FLAG_INCLUDE_NOT_IMPORTANT_VIEWS: number;
				public static FLAG_REQUEST_TOUCH_EXPLORATION_MODE: number;
				public static FLAG_REQUEST_ENHANCED_WEB_ACCESSIBILITY: number;
				public static FLAG_REPORT_VIEW_IDS: number;
				public static FLAG_REQUEST_FILTER_KEY_EVENTS: number;
				public static feedbackTypeToString(feedbackType: number): string;
				public static getCapabilities(info: android.accessibilityservice.AccessibilityServiceInfo): number;
				public static loadDescription(info: android.accessibilityservice.AccessibilityServiceInfo, packageManager: android.content.pm.PackageManager): string;
				public static flagToString(flag: number): string;
				public static capabilityToString(capability: number): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class ActivityCompat extends androidx.core.content.ContextCompat {
				public static class: java.lang.Class<androidx.core.app.ActivityCompat>;
				public static startIntentSenderForResult(activity: android.app.Activity, intent: android.content.IntentSender, requestCode: number, fillInIntent: android.content.Intent, flagsMask: number, flagsValues: number, extraFlags: number, options: android.os.Bundle): void;
				public static shouldShowRequestPermissionRationale(activity: android.app.Activity, permission: string): boolean;
				public static setExitSharedElementCallback(activity: android.app.Activity, callback: androidx.core.app.SharedElementCallback): void;
				public static getPermissionCompatDelegate(): androidx.core.app.ActivityCompat.PermissionCompatDelegate;
				public static startPostponedEnterTransition(activity: android.app.Activity): void;
				/** @deprecated */
				public static invalidateOptionsMenu(activity: android.app.Activity): boolean;
				public static isLaunchedFromBubble(activity: android.app.Activity): boolean;
				public static requestPermissions(activity: android.app.Activity, permissions: string[], requestCode: number): void;
				public static getReferrer(activity: android.app.Activity): android.net.Uri;
				public static setEnterSharedElementCallback(activity: android.app.Activity, callback: androidx.core.app.SharedElementCallback): void;
				public constructor();
				public static finishAffinity(activity: android.app.Activity): void;
				public static finishAfterTransition(activity: android.app.Activity): void;
				public static recreate(activity: android.app.Activity): void;
				public static startActivityForResult(activity: android.app.Activity, intent: android.content.Intent, requestCode: number, options: android.os.Bundle): void;
				public static postponeEnterTransition(activity: android.app.Activity): void;
				public static setLocusContext(activity: android.app.Activity, locusId: androidx.core.content.LocusIdCompat, bundle: android.os.Bundle): void;
				public static requestDragAndDropPermissions(activity: android.app.Activity, dragEvent: android.view.DragEvent): androidx.core.view.DragAndDropPermissionsCompat;
				public static setPermissionCompatDelegate(delegate: androidx.core.app.ActivityCompat.PermissionCompatDelegate): void;
				public static requireViewById(activity: android.app.Activity, id: number): android.view.View;
			}
			export module ActivityCompat {
				export class Api30Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.ActivityCompat.Api30Impl>;
				}
				export class Api31Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.ActivityCompat.Api31Impl>;
				}
				export class OnRequestPermissionsResultCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.ActivityCompat.OnRequestPermissionsResultCallback>;
					/**
					 * Constructs a new instance of the androidx.core.app.ActivityCompat$OnRequestPermissionsResultCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onRequestPermissionsResult(param0: number, param1: string[], param2: number[]): void;
					});
					public constructor();
					public onRequestPermissionsResult(param0: number, param1: string[], param2: number[]): void;
				}
				export class PermissionCompatDelegate extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.ActivityCompat.PermissionCompatDelegate>;
					/**
					 * Constructs a new instance of the androidx.core.app.ActivityCompat$PermissionCompatDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						requestPermissions(param0: android.app.Activity, param1: string[], param2: number): boolean;
						onActivityResult(param0: android.app.Activity, param1: number, param2: number, param3: android.content.Intent): boolean;
					});
					public constructor();
					public onActivityResult(param0: android.app.Activity, param1: number, param2: number, param3: android.content.Intent): boolean;
					public requestPermissions(param0: android.app.Activity, param1: string[], param2: number): boolean;
				}
				export class RequestPermissionsRequestCodeValidator extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.ActivityCompat.RequestPermissionsRequestCodeValidator>;
					/**
					 * Constructs a new instance of the androidx.core.app.ActivityCompat$RequestPermissionsRequestCodeValidator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						validateRequestPermissionsRequestCode(param0: number): void;
					});
					public constructor();
					public validateRequestPermissionsRequestCode(param0: number): void;
				}
				export class SharedElementCallback21Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.ActivityCompat.SharedElementCallback21Impl>;
					public onMapSharedElements(names: java.util.List<string>, sharedElements: java.util.Map<string,android.view.View>): void;
					public onSharedElementsArrived(sharedElementNames: java.util.List<string>, sharedElements: java.util.List<android.view.View>, listener: any): void;
					public onCaptureSharedElementSnapshot(sharedElement: android.view.View, viewToGlobalMatrix: android.graphics.Matrix, screenBounds: android.graphics.RectF): android.os.Parcelable;
					public onCreateSnapshotView(context: android.content.Context, snapshot: android.os.Parcelable): android.view.View;
					public onSharedElementStart(sharedElementNames: java.util.List<string>, sharedElements: java.util.List<android.view.View>, sharedElementSnapshots: java.util.List<android.view.View>): void;
					public onSharedElementEnd(sharedElementNames: java.util.List<string>, sharedElements: java.util.List<android.view.View>, sharedElementSnapshots: java.util.List<android.view.View>): void;
					public onRejectSharedElements(rejectedSharedElements: java.util.List<android.view.View>): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class ActivityManagerCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.ActivityManagerCompat>;
				public static isLowRamDevice(activityManager: android.app.ActivityManager): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class ActivityOptionsCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.ActivityOptionsCompat>;
				public static EXTRA_USAGE_TIME_REPORT: string;
				public static EXTRA_USAGE_TIME_REPORT_PACKAGES: string;
				public static makeScaleUpAnimation(source: android.view.View, startX: number, startY: number, startWidth: number, startHeight: number): androidx.core.app.ActivityOptionsCompat;
				public static makeThumbnailScaleUpAnimation(source: android.view.View, thumbnail: android.graphics.Bitmap, startX: number, startY: number): androidx.core.app.ActivityOptionsCompat;
				public update(otherOptions: androidx.core.app.ActivityOptionsCompat): void;
				public static makeClipRevealAnimation(source: android.view.View, startX: number, startY: number, width: number, height: number): androidx.core.app.ActivityOptionsCompat;
				public static makeCustomAnimation(context: android.content.Context, enterResId: number, exitResId: number): androidx.core.app.ActivityOptionsCompat;
				public requestUsageTimeReport(receiver: android.app.PendingIntent): void;
				public constructor();
				public toBundle(): android.os.Bundle;
				public static makeBasic(): androidx.core.app.ActivityOptionsCompat;
				public static makeSceneTransitionAnimation(activity: android.app.Activity, sharedElement: android.view.View, sharedElementName: string): androidx.core.app.ActivityOptionsCompat;
				public static makeTaskLaunchBehind(): androidx.core.app.ActivityOptionsCompat;
				public getLaunchBounds(): android.graphics.Rect;
				public static makeSceneTransitionAnimation(activity: android.app.Activity, ...sharedElements: androidx.core.util.Pair<android.view.View,string>[]): androidx.core.app.ActivityOptionsCompat;
				public setLaunchBounds(screenSpacePixelRect: android.graphics.Rect): androidx.core.app.ActivityOptionsCompat;
			}
			export module ActivityOptionsCompat {
				export class ActivityOptionsCompatImpl extends androidx.core.app.ActivityOptionsCompat {
					public static class: java.lang.Class<androidx.core.app.ActivityOptionsCompat.ActivityOptionsCompatImpl>;
					public getLaunchBounds(): android.graphics.Rect;
					public update(otherOptions: androidx.core.app.ActivityOptionsCompat): void;
					public toBundle(): android.os.Bundle;
					public setLaunchBounds(screenSpacePixelRect: android.graphics.Rect): androidx.core.app.ActivityOptionsCompat;
					public requestUsageTimeReport(receiver: android.app.PendingIntent): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class ActivityRecreator extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.ActivityRecreator>;
				public static activityThreadClass: java.lang.Class<any>;
				public static mainThreadField: java.lang.reflect.Field;
				public static tokenField: java.lang.reflect.Field;
				public static performStopActivity3ParamsMethod: java.lang.reflect.Method;
				public static performStopActivity2ParamsMethod: java.lang.reflect.Method;
				public static requestRelaunchActivityMethod: java.lang.reflect.Method;
				public static queueOnStopIfNecessary(currentlyRecreatingToken: any, currentlyRecreatingHashCode: number, activity: android.app.Activity): boolean;
			}
			export module ActivityRecreator {
				export class LifecycleCheckCallbacks extends java.lang.Object implements android.app.Application.ActivityLifecycleCallbacks {
					public static class: java.lang.Class<androidx.core.app.ActivityRecreator.LifecycleCheckCallbacks>;
					public onActivityCreated(activity: android.app.Activity, savedInstanceState: android.os.Bundle): void;
					public onActivityStopped(activity: android.app.Activity): void;
					public onActivityStarted(activity: android.app.Activity): void;
					public onActivityResumed(activity: android.app.Activity): void;
					public onActivityPaused(activity: android.app.Activity): void;
					public onActivityStopped(param0: android.app.Activity): void;
					public onActivityPaused(param0: android.app.Activity): void;
					public onActivityDestroyed(param0: android.app.Activity): void;
					public onActivitySaveInstanceState(activity: android.app.Activity, outState: android.os.Bundle): void;
					public onActivityDestroyed(activity: android.app.Activity): void;
					public onActivityStarted(param0: android.app.Activity): void;
					public onActivityCreated(param0: android.app.Activity, param1: android.os.Bundle): void;
					public onActivityResumed(param0: android.app.Activity): void;
					public onActivitySaveInstanceState(param0: android.app.Activity, param1: android.os.Bundle): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class AlarmManagerCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.AlarmManagerCompat>;
				public static setAlarmClock(alarmManager: android.app.AlarmManager, triggerTime: number, param2: android.app.PendingIntent, showIntent: android.app.PendingIntent): void;
				public static setExactAndAllowWhileIdle(alarmManager: android.app.AlarmManager, type: number, triggerAtMillis: number, param3: android.app.PendingIntent): void;
				public static setAndAllowWhileIdle(alarmManager: android.app.AlarmManager, type: number, triggerAtMillis: number, param3: android.app.PendingIntent): void;
				public static setExact(alarmManager: android.app.AlarmManager, type: number, triggerAtMillis: number, param3: android.app.PendingIntent): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class AppComponentFactory extends android.app.AppComponentFactory {
				public static class: java.lang.Class<androidx.core.app.AppComponentFactory>;
				public instantiateActivityCompat(cl: java.lang.ClassLoader, className: string, intent: android.content.Intent): android.app.Activity;
				public instantiateReceiver(cl: java.lang.ClassLoader, className: string, intent: android.content.Intent): android.content.BroadcastReceiver;
				public instantiateReceiverCompat(cl: java.lang.ClassLoader, className: string, intent: android.content.Intent): android.content.BroadcastReceiver;
				public instantiateProvider(cl: java.lang.ClassLoader, className: string): android.content.ContentProvider;
				public instantiateProviderCompat(cl: java.lang.ClassLoader, className: string): android.content.ContentProvider;
				public instantiateService(cl: java.lang.ClassLoader, className: string, intent: android.content.Intent): android.app.Service;
				public instantiateActivity(cl: java.lang.ClassLoader, className: string, intent: android.content.Intent): android.app.Activity;
				public instantiateApplication(cl: java.lang.ClassLoader, className: string): android.app.Application;
				public instantiateApplicationCompat(cl: java.lang.ClassLoader, className: string): android.app.Application;
				public constructor();
				public instantiateServiceCompat(cl: java.lang.ClassLoader, className: string, intent: android.content.Intent): android.app.Service;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class AppLaunchChecker extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.AppLaunchChecker>;
				public static hasStartedFromLauncher(context: android.content.Context): boolean;
				/** @deprecated */
				public constructor();
				public static onActivityCreate(activity: android.app.Activity): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class AppOpsManagerCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.AppOpsManagerCompat>;
				public static MODE_ALLOWED: number;
				public static MODE_IGNORED: number;
				public static MODE_ERRORED: number;
				public static MODE_DEFAULT: number;
				public static noteProxyOpNoThrow(context: android.content.Context, op: string, proxiedPackageName: string): number;
				public static permissionToOp(permission: string): string;
				public static noteProxyOp(context: android.content.Context, op: string, proxiedPackageName: string): number;
				public static noteOpNoThrow(context: android.content.Context, op: string, uid: number, packageName: string): number;
				public static checkOrNoteProxyOp(context: android.content.Context, proxyUid: number, op: string, proxiedPackageName: string): number;
				public static noteOp(context: android.content.Context, op: string, uid: number, packageName: string): number;
			}
			export module AppOpsManagerCompat {
				export class Api29Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.AppOpsManagerCompat.Api29Impl>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class BundleCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.BundleCompat>;
				public static getBinder(bundle: android.os.Bundle, key: string): android.os.IBinder;
				public static putBinder(bundle: android.os.Bundle, key: string, binder: android.os.IBinder): void;
			}
			export module BundleCompat {
				export class BundleCompatBaseImpl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.BundleCompat.BundleCompatBaseImpl>;
					public static putBinder(bundle: android.os.Bundle, key: string, binder: android.os.IBinder): void;
					public static getBinder(bundle: android.os.Bundle, key: string): android.os.IBinder;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class ComponentActivity extends android.app.Activity implements androidx.lifecycle.LifecycleOwner, androidx.core.view.KeyEventDispatcher.Component {
				public static class: java.lang.Class<androidx.core.app.ComponentActivity>;
				public onCreate(savedInstanceState: android.os.Bundle, persistentState: any): void;
				public onActionModeStarted(mode: android.view.ActionMode): void;
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public onPanelClosed(featureId: number, menu: android.view.Menu): void;
				public onMenuItemSelected(featureId: number, item: android.view.MenuItem): boolean;
				public onCreateView(name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
				public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
				public dispatchKeyShortcutEvent(event: android.view.KeyEvent): boolean;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
				public onSearchRequested(param0: any): boolean;
				public onWindowFocusChanged(hasFocus: boolean): void;
				public superDispatchKeyEvent(event: android.view.KeyEvent): boolean;
				public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
				public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: android.view.Menu, deviceId: number): void;
				public onCreate(savedInstanceState: android.os.Bundle): void;
				public onPanelClosed(param0: number, param1: android.view.Menu): void;
				public onTrimMemory(param0: number): void;
				public dispatchGenericMotionEvent(ev: android.view.MotionEvent): boolean;
				public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
				public onCreateView(parent: android.view.View, name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
				/** @deprecated */
				public putExtraData(extraData: androidx.core.app.ComponentActivity.ExtraData): void;
				/** @deprecated */
				public getExtraData(extraDataClass: java.lang.Class<any>): androidx.core.app.ComponentActivity.ExtraData;
				public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
				public onWindowAttributesChanged(params: android.view.WindowManager.LayoutParams): void;
				public onActionModeFinished(mode: android.view.ActionMode): void;
				public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
				public onSaveInstanceState(outState: android.os.Bundle): void;
				public onSaveInstanceState(outState: android.os.Bundle, outPersistentState: any): void;
				public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public superDispatchKeyEvent(param0: android.view.KeyEvent): boolean;
				public onContentChanged(): void;
				public onMenuOpened(featureId: number, menu: android.view.Menu): boolean;
				public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
				public onDetachedFromWindow(): void;
				public onPreparePanel(featureId: number, view: android.view.View, menu: android.view.Menu): boolean;
				public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
				public onSearchRequested(): boolean;
				public onCreatePanelMenu(featureId: number, menu: android.view.Menu): boolean;
				public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public dispatchTouchEvent(ev: android.view.MotionEvent): boolean;
				public constructor(base: android.content.Context, theme: android.content.res.Resources.Theme);
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
				public onTrimMemory(level: number): void;
				public onCreatePanelView(featureId: number): android.view.View;
				public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
				public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public dispatchKeyEvent(event: android.view.KeyEvent): boolean;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onCreatePanelView(param0: number): android.view.View;
				public onWindowStartingActionMode(callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
				public onActionModeStarted(param0: android.view.ActionMode): void;
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
				public onActionModeFinished(param0: android.view.ActionMode): void;
				public constructor(base: android.content.Context);
				public constructor(base: android.content.Context, themeResId: number);
				public onSearchRequested(searchEvent: any): boolean;
				public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
				public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
				public onWindowFocusChanged(param0: boolean): void;
				public dispatchTrackballEvent(ev: android.view.MotionEvent): boolean;
				public onAttachedToWindow(): void;
			}
			export module ComponentActivity {
				export class ExtraData extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.ComponentActivity.ExtraData>;
					public constructor();
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class CoreComponentFactory extends android.app.AppComponentFactory {
				public static class: java.lang.Class<androidx.core.app.CoreComponentFactory>;
				public instantiateReceiver(cl: java.lang.ClassLoader, className: string, intent: android.content.Intent): android.content.BroadcastReceiver;
				public instantiateProvider(cl: java.lang.ClassLoader, className: string): android.content.ContentProvider;
				public instantiateService(cl: java.lang.ClassLoader, className: string, intent: android.content.Intent): android.app.Service;
				public instantiateActivity(cl: java.lang.ClassLoader, className: string, intent: android.content.Intent): android.app.Activity;
				public instantiateApplication(cl: java.lang.ClassLoader, className: string): android.app.Application;
				public constructor();
			}
			export module CoreComponentFactory {
				export class CompatWrapped extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.CoreComponentFactory.CompatWrapped>;
					/**
					 * Constructs a new instance of the androidx.core.app.CoreComponentFactory$CompatWrapped interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getWrapper(): any;
					});
					public constructor();
					public getWrapper(): any;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class DialogCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.DialogCompat>;
				public static requireViewById(dialog: android.app.Dialog, id: number): android.view.View;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class FrameMetricsAggregator extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.FrameMetricsAggregator>;
				public static TOTAL_INDEX: number;
				public static INPUT_INDEX: number;
				public static LAYOUT_MEASURE_INDEX: number;
				public static DRAW_INDEX: number;
				public static SYNC_INDEX: number;
				public static COMMAND_INDEX: number;
				public static SWAP_INDEX: number;
				public static DELAY_INDEX: number;
				public static ANIMATION_INDEX: number;
				public static TOTAL_DURATION: number;
				public static INPUT_DURATION: number;
				public static LAYOUT_MEASURE_DURATION: number;
				public static DRAW_DURATION: number;
				public static SYNC_DURATION: number;
				public static COMMAND_DURATION: number;
				public static SWAP_DURATION: number;
				public static DELAY_DURATION: number;
				public static ANIMATION_DURATION: number;
				public static EVERY_DURATION: number;
				public stop(): android.util.SparseIntArray[];
				public reset(): android.util.SparseIntArray[];
				public add(activity: android.app.Activity): void;
				public getMetrics(): android.util.SparseIntArray[];
				public constructor(metricTypeFlags: number);
				public remove(activity: android.app.Activity): android.util.SparseIntArray[];
				public constructor();
			}
			export module FrameMetricsAggregator {
				export class FrameMetricsApi24Impl extends androidx.core.app.FrameMetricsAggregator.FrameMetricsBaseImpl {
					public static class: java.lang.Class<androidx.core.app.FrameMetricsAggregator.FrameMetricsApi24Impl>;
					public stop(): android.util.SparseIntArray[];
					public add(activity: android.app.Activity): void;
					public getMetrics(): android.util.SparseIntArray[];
					public remove(activity: android.app.Activity): android.util.SparseIntArray[];
					public reset(): android.util.SparseIntArray[];
				}
				export class FrameMetricsBaseImpl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.FrameMetricsAggregator.FrameMetricsBaseImpl>;
					public stop(): android.util.SparseIntArray[];
					public add(activity: android.app.Activity): void;
					public getMetrics(): android.util.SparseIntArray[];
					public remove(activity: android.app.Activity): android.util.SparseIntArray[];
					public reset(): android.util.SparseIntArray[];
				}
				export class MetricType extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.app.FrameMetricsAggregator.MetricType>;
					/**
					 * Constructs a new instance of the androidx.core.app.FrameMetricsAggregator$MetricType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
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

declare module androidx {
	export module core {
		export module app {
			export abstract class JobIntentService extends android.app.Service {
				public static class: java.lang.Class<androidx.core.app.JobIntentService>;
				public static enqueueWork(context: android.content.Context, cls: java.lang.Class<any>, jobId: number, work: android.content.Intent): void;
				public onHandleWork(param0: android.content.Intent): void;
				public onStartCommand(intent: android.content.Intent, flags: number, startId: number): number;
				public setInterruptIfStopped(interruptIfStopped: boolean): void;
				public constructor();
				public constructor(base: android.content.Context);
				public onTrimMemory(level: number): void;
				public onBind(param0: android.content.Intent): android.os.IBinder;
				public static enqueueWork(context: android.content.Context, component: android.content.ComponentName, jobId: number, work: android.content.Intent): void;
				public onBind(intent: android.content.Intent): android.os.IBinder;
				public isStopped(): boolean;
				public onCreate(): void;
				public onDestroy(): void;
				public onStopCurrentWork(): boolean;
				public onTrimMemory(param0: number): void;
			}
			export module JobIntentService {
				export class CommandProcessor extends android.os.AsyncTask<java.lang.Void,java.lang.Void,java.lang.Void> {
					public static class: java.lang.Class<androidx.core.app.JobIntentService.CommandProcessor>;
					public onPostExecute(aVoid: java.lang.Void): void;
					public onCancelled(aVoid: java.lang.Void): void;
					public doInBackground(...params: java.lang.Void[]): java.lang.Void;
					public onCancelled(result: any): void;
					public onCancelled(): void;
					public onPostExecute(result: any): void;
					public doInBackground(...param0: any[]): any;
				}
				export class CompatJobEngine extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.JobIntentService.CompatJobEngine>;
					/**
					 * Constructs a new instance of the androidx.core.app.JobIntentService$CompatJobEngine interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						compatGetBinder(): android.os.IBinder;
						dequeueWork(): androidx.core.app.JobIntentService.GenericWorkItem;
					});
					public constructor();
					public compatGetBinder(): android.os.IBinder;
					public dequeueWork(): androidx.core.app.JobIntentService.GenericWorkItem;
				}
				export class CompatWorkEnqueuer extends androidx.core.app.JobIntentService.WorkEnqueuer {
					public static class: java.lang.Class<androidx.core.app.JobIntentService.CompatWorkEnqueuer>;
					public serviceStartReceived(): void;
					public serviceProcessingFinished(): void;
					public serviceProcessingStarted(): void;
				}
				export class CompatWorkItem extends java.lang.Object implements androidx.core.app.JobIntentService.GenericWorkItem {
					public static class: java.lang.Class<androidx.core.app.JobIntentService.CompatWorkItem>;
					public complete(): void;
					public getIntent(): android.content.Intent;
				}
				export class GenericWorkItem extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.JobIntentService.GenericWorkItem>;
					/**
					 * Constructs a new instance of the androidx.core.app.JobIntentService$GenericWorkItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getIntent(): android.content.Intent;
						complete(): void;
					});
					public constructor();
					public complete(): void;
					public getIntent(): android.content.Intent;
				}
				export class JobServiceEngineImpl extends androidx.core.app.JobIntentService.CompatJobEngine {
					public static class: java.lang.Class<androidx.core.app.JobIntentService.JobServiceEngineImpl>;
					public onStartJob(param0: any): boolean;
					public onStartJob(params: any): boolean;
					public compatGetBinder(): android.os.IBinder;
					public onStopJob(params: any): boolean;
					public dequeueWork(): androidx.core.app.JobIntentService.GenericWorkItem;
					public onStopJob(param0: any): boolean;
				}
				export module JobServiceEngineImpl {
					export class WrapperWorkItem extends java.lang.Object implements androidx.core.app.JobIntentService.GenericWorkItem {
						public static class: java.lang.Class<androidx.core.app.JobIntentService.JobServiceEngineImpl.WrapperWorkItem>;
						public complete(): void;
						public getIntent(): android.content.Intent;
					}
				}
				export class JobWorkEnqueuer extends androidx.core.app.JobIntentService.WorkEnqueuer {
					public static class: java.lang.Class<androidx.core.app.JobIntentService.JobWorkEnqueuer>;
				}
				export abstract class WorkEnqueuer extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.JobIntentService.WorkEnqueuer>;
					public serviceStartReceived(): void;
					public serviceProcessingFinished(): void;
					public serviceProcessingStarted(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class NavUtils extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.NavUtils>;
				public static PARENT_ACTIVITY: string;
				public static getParentActivityName(sourceActivity: android.app.Activity): string;
				public static getParentActivityIntent(context: android.content.Context, sourceActivityClass: java.lang.Class<any>): android.content.Intent;
				public static shouldUpRecreateTask(sourceActivity: android.app.Activity, targetIntent: android.content.Intent): boolean;
				public static navigateUpTo(sourceActivity: android.app.Activity, upIntent: android.content.Intent): void;
				public static getParentActivityName(context: android.content.Context, componentName: android.content.ComponentName): string;
				public static navigateUpFromSameTask(sourceActivity: android.app.Activity): void;
				public static getParentActivityIntent(sourceActivity: android.app.Activity): android.content.Intent;
				public static getParentActivityIntent(context: android.content.Context, componentName: android.content.ComponentName): android.content.Intent;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class NotificationBuilderWithBuilderAccessor extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.NotificationBuilderWithBuilderAccessor>;
				/**
				 * Constructs a new instance of the androidx.core.app.NotificationBuilderWithBuilderAccessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getBuilder(): android.app.Notification.Builder;
				});
				public constructor();
				public getBuilder(): android.app.Notification.Builder;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class NotificationChannelCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.NotificationChannelCompat>;
				public static DEFAULT_CHANNEL_ID: string;
				public getId(): string;
				public getParentChannelId(): string;
				public getAudioAttributes(): any;
				public getName(): string;
				public getDescription(): string;
				public canBypassDnd(): boolean;
				public getImportance(): number;
				public shouldVibrate(): boolean;
				public getVibrationPattern(): number[];
				public getLightColor(): number;
				public getLockscreenVisibility(): number;
				public shouldShowLights(): boolean;
				public isImportantConversation(): boolean;
				public canBubble(): boolean;
				public getGroup(): string;
				public getConversationId(): string;
				public canShowBadge(): boolean;
				public getSound(): android.net.Uri;
				public toBuilder(): androidx.core.app.NotificationChannelCompat.Builder;
			}
			export module NotificationChannelCompat {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.NotificationChannelCompat.Builder>;
					public setLightColor(argb: number): androidx.core.app.NotificationChannelCompat.Builder;
					public setVibrationEnabled(vibration: boolean): androidx.core.app.NotificationChannelCompat.Builder;
					public setDescription(description: string): androidx.core.app.NotificationChannelCompat.Builder;
					public constructor(id: string, importance: number);
					public setVibrationPattern(vibrationPattern: number[]): androidx.core.app.NotificationChannelCompat.Builder;
					public setGroup(groupId: string): androidx.core.app.NotificationChannelCompat.Builder;
					public setImportance(importance: number): androidx.core.app.NotificationChannelCompat.Builder;
					public build(): androidx.core.app.NotificationChannelCompat;
					public setSound(sound: android.net.Uri, audioAttributes: any): androidx.core.app.NotificationChannelCompat.Builder;
					public setName(name: string): androidx.core.app.NotificationChannelCompat.Builder;
					public setLightsEnabled(lights: boolean): androidx.core.app.NotificationChannelCompat.Builder;
					public setConversationId(parentChannelId: string, conversationId: string): androidx.core.app.NotificationChannelCompat.Builder;
					public setShowBadge(showBadge: boolean): androidx.core.app.NotificationChannelCompat.Builder;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class NotificationChannelGroupCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.NotificationChannelGroupCompat>;
				public toBuilder(): androidx.core.app.NotificationChannelGroupCompat.Builder;
				public getId(): string;
				public isBlocked(): boolean;
				public getName(): string;
				public getDescription(): string;
				public getChannels(): java.util.List<androidx.core.app.NotificationChannelCompat>;
			}
			export module NotificationChannelGroupCompat {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.NotificationChannelGroupCompat.Builder>;
					public build(): androidx.core.app.NotificationChannelGroupCompat;
					public constructor(id: string);
					public setDescription(description: string): androidx.core.app.NotificationChannelGroupCompat.Builder;
					public setName(name: string): androidx.core.app.NotificationChannelGroupCompat.Builder;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class NotificationCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.NotificationCompat>;
				public static INTENT_CATEGORY_NOTIFICATION_PREFERENCES: string;
				public static EXTRA_CHANNEL_ID: string;
				public static EXTRA_CHANNEL_GROUP_ID: string;
				public static EXTRA_NOTIFICATION_TAG: string;
				public static EXTRA_NOTIFICATION_ID: string;
				public static DEFAULT_ALL: number;
				public static DEFAULT_SOUND: number;
				public static DEFAULT_VIBRATE: number;
				public static DEFAULT_LIGHTS: number;
				public static STREAM_DEFAULT: number;
				public static FLAG_SHOW_LIGHTS: number;
				public static FLAG_ONGOING_EVENT: number;
				public static FLAG_INSISTENT: number;
				public static FLAG_ONLY_ALERT_ONCE: number;
				public static FLAG_AUTO_CANCEL: number;
				public static FLAG_NO_CLEAR: number;
				public static FLAG_FOREGROUND_SERVICE: number;
				public static FLAG_HIGH_PRIORITY: number;
				public static FLAG_LOCAL_ONLY: number;
				public static FLAG_GROUP_SUMMARY: number;
				public static FLAG_BUBBLE: number;
				public static PRIORITY_DEFAULT: number;
				public static PRIORITY_LOW: number;
				public static PRIORITY_MIN: number;
				public static PRIORITY_HIGH: number;
				public static PRIORITY_MAX: number;
				public static EXTRA_TITLE: string;
				public static EXTRA_TITLE_BIG: string;
				public static EXTRA_TEXT: string;
				public static EXTRA_SUB_TEXT: string;
				public static EXTRA_REMOTE_INPUT_HISTORY: string;
				public static EXTRA_INFO_TEXT: string;
				public static EXTRA_SUMMARY_TEXT: string;
				public static EXTRA_BIG_TEXT: string;
				public static EXTRA_SMALL_ICON: string;
				public static EXTRA_LARGE_ICON: string;
				public static EXTRA_LARGE_ICON_BIG: string;
				public static EXTRA_PROGRESS: string;
				public static EXTRA_PROGRESS_MAX: string;
				public static EXTRA_PROGRESS_INDETERMINATE: string;
				public static EXTRA_SHOW_CHRONOMETER: string;
				public static EXTRA_CHRONOMETER_COUNT_DOWN: string;
				public static EXTRA_COLORIZED: string;
				public static EXTRA_SHOW_WHEN: string;
				public static EXTRA_PICTURE: string;
				public static EXTRA_SHOW_BIG_PICTURE_WHEN_COLLAPSED: string;
				public static EXTRA_TEXT_LINES: string;
				public static EXTRA_TEMPLATE: string;
				public static EXTRA_COMPAT_TEMPLATE: string;
				public static EXTRA_PEOPLE: string;
				public static EXTRA_PEOPLE_LIST: string;
				public static EXTRA_BACKGROUND_IMAGE_URI: string;
				public static EXTRA_MEDIA_SESSION: string;
				public static EXTRA_COMPACT_ACTIONS: string;
				public static EXTRA_SELF_DISPLAY_NAME: string;
				public static EXTRA_MESSAGING_STYLE_USER: string;
				public static EXTRA_CONVERSATION_TITLE: string;
				public static EXTRA_MESSAGES: string;
				public static EXTRA_HISTORIC_MESSAGES: string;
				public static EXTRA_IS_GROUP_CONVERSATION: string;
				public static EXTRA_HIDDEN_CONVERSATION_TITLE: string;
				public static EXTRA_AUDIO_CONTENTS_URI: string;
				public static COLOR_DEFAULT: number;
				public static VISIBILITY_PUBLIC: number;
				public static VISIBILITY_PRIVATE: number;
				public static VISIBILITY_SECRET: number;
				public static CATEGORY_CALL: string;
				public static CATEGORY_NAVIGATION: string;
				public static CATEGORY_MESSAGE: string;
				public static CATEGORY_EMAIL: string;
				public static CATEGORY_EVENT: string;
				public static CATEGORY_PROMO: string;
				public static CATEGORY_ALARM: string;
				public static CATEGORY_PROGRESS: string;
				public static CATEGORY_SOCIAL: string;
				public static CATEGORY_ERROR: string;
				public static CATEGORY_TRANSPORT: string;
				public static CATEGORY_SYSTEM: string;
				public static CATEGORY_SERVICE: string;
				public static CATEGORY_REMINDER: string;
				public static CATEGORY_RECOMMENDATION: string;
				public static CATEGORY_STATUS: string;
				public static CATEGORY_WORKOUT: string;
				public static CATEGORY_LOCATION_SHARING: string;
				public static CATEGORY_STOPWATCH: string;
				public static CATEGORY_MISSED_CALL: string;
				public static BADGE_ICON_NONE: number;
				public static BADGE_ICON_SMALL: number;
				public static BADGE_ICON_LARGE: number;
				public static GROUP_ALERT_ALL: number;
				public static GROUP_ALERT_SUMMARY: number;
				public static GROUP_ALERT_CHILDREN: number;
				public static GROUP_KEY_SILENT: string;
				public static FOREGROUND_SERVICE_DEFAULT: number;
				public static FOREGROUND_SERVICE_IMMEDIATE: number;
				public static FOREGROUND_SERVICE_DEFERRED: number;
				public static getContentTitle(notification: android.app.Notification): string;
				public static getSortKey(notification: android.app.Notification): string;
				public static getContentInfo(notification: android.app.Notification): string;
				public static getTimeoutAfter(notification: android.app.Notification): number;
				public static getShortcutId(notification: android.app.Notification): string;
				public static getAutoCancel(notification: android.app.Notification): boolean;
				public static getShowWhen(notification: android.app.Notification): boolean;
				public static getUsesChronometer(notification: android.app.Notification): boolean;
				public static getOnlyAlertOnce(notification: android.app.Notification): boolean;
				public static getPeople(notification: android.app.Notification): java.util.List<androidx.core.app.Person>;
				public static getLocusId(notification: android.app.Notification): androidx.core.content.LocusIdCompat;
				public static getContentText(notification: android.app.Notification): string;
				public static getColor(notification: android.app.Notification): number;
				public static getPublicVersion(notification: android.app.Notification): android.app.Notification;
				public static getGroupAlertBehavior(notification: android.app.Notification): number;
				public static getBubbleMetadata(notification: android.app.Notification): androidx.core.app.NotificationCompat.BubbleMetadata;
				public static getExtras(notification: android.app.Notification): android.os.Bundle;
				public static getAction(notification: android.app.Notification, actionIndex: number): androidx.core.app.NotificationCompat.Action;
				public static getActionCount(notification: android.app.Notification): number;
				public static getVisibility(notification: android.app.Notification): number;
				public static getGroup(notification: android.app.Notification): string;
				public static getSubText(notification: android.app.Notification): string;
				public static getOngoing(notification: android.app.Notification): boolean;
				public static getLocalOnly(notification: android.app.Notification): boolean;
				public static getBadgeIconType(notification: android.app.Notification): number;
				/** @deprecated */
				public constructor();
				public static getCategory(notification: android.app.Notification): string;
				public static getAllowSystemGeneratedContextualActions(notification: android.app.Notification): boolean;
				public static getInvisibleActions(notification: android.app.Notification): java.util.List<androidx.core.app.NotificationCompat.Action>;
				public static getSettingsText(notification: android.app.Notification): string;
				public static getChannelId(notification: android.app.Notification): string;
				public static isGroupSummary(notification: android.app.Notification): boolean;
			}
			export module NotificationCompat {
				export class Action extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.Action>;
					public static SEMANTIC_ACTION_NONE: number;
					public static SEMANTIC_ACTION_REPLY: number;
					public static SEMANTIC_ACTION_MARK_AS_READ: number;
					public static SEMANTIC_ACTION_MARK_AS_UNREAD: number;
					public static SEMANTIC_ACTION_DELETE: number;
					public static SEMANTIC_ACTION_ARCHIVE: number;
					public static SEMANTIC_ACTION_MUTE: number;
					public static SEMANTIC_ACTION_UNMUTE: number;
					public static SEMANTIC_ACTION_THUMBS_UP: number;
					public static SEMANTIC_ACTION_THUMBS_DOWN: number;
					public static SEMANTIC_ACTION_CALL: number;
					public icon: number;
					public title: string;
					public actionIntent: android.app.PendingIntent;
					public getTitle(): string;
					public constructor(icon: number, title: string, intent: android.app.PendingIntent);
					public getShowsUserInterface(): boolean;
					public getAllowGeneratedReplies(): boolean;
					public getRemoteInputs(): androidx.core.app.RemoteInput[];
					public getIconCompat(): androidx.core.graphics.drawable.IconCompat;
					public constructor(icon: androidx.core.graphics.drawable.IconCompat, title: string, intent: android.app.PendingIntent);
					/** @deprecated */
					public getIcon(): number;
					public getActionIntent(): android.app.PendingIntent;
					public getExtras(): android.os.Bundle;
					public isContextual(): boolean;
					public getSemanticAction(): number;
					public getDataOnlyRemoteInputs(): androidx.core.app.RemoteInput[];
				}
				export module Action {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.app.NotificationCompat.Action.Builder>;
						public setSemanticAction(semanticAction: number): androidx.core.app.NotificationCompat.Action.Builder;
						public constructor(icon: androidx.core.graphics.drawable.IconCompat, title: string, intent: android.app.PendingIntent);
						public constructor(icon: number, title: string, intent: android.app.PendingIntent);
						public addExtras(extras: android.os.Bundle): androidx.core.app.NotificationCompat.Action.Builder;
						public static fromAndroidAction(action: android.app.Notification.Action): androidx.core.app.NotificationCompat.Action.Builder;
						public addRemoteInput(remoteInput: androidx.core.app.RemoteInput): androidx.core.app.NotificationCompat.Action.Builder;
						public constructor(action: androidx.core.app.NotificationCompat.Action);
						public setContextual(isContextual: boolean): androidx.core.app.NotificationCompat.Action.Builder;
						public setShowsUserInterface(showsUserInterface: boolean): androidx.core.app.NotificationCompat.Action.Builder;
						public setAllowGeneratedReplies(allowGeneratedReplies: boolean): androidx.core.app.NotificationCompat.Action.Builder;
						public build(): androidx.core.app.NotificationCompat.Action;
						public extend(extender: androidx.core.app.NotificationCompat.Action.Extender): androidx.core.app.NotificationCompat.Action.Builder;
						public getExtras(): android.os.Bundle;
					}
					export class Extender extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.app.NotificationCompat.Action.Extender>;
						/**
						 * Constructs a new instance of the androidx.core.app.NotificationCompat$Action$Extender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							extend(param0: androidx.core.app.NotificationCompat.Action.Builder): androidx.core.app.NotificationCompat.Action.Builder;
						});
						public constructor();
						public extend(param0: androidx.core.app.NotificationCompat.Action.Builder): androidx.core.app.NotificationCompat.Action.Builder;
					}
					export class SemanticAction extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.core.app.NotificationCompat.Action.SemanticAction>;
						/**
						 * Constructs a new instance of the androidx.core.app.NotificationCompat$Action$SemanticAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
					export class WearableExtender extends java.lang.Object implements androidx.core.app.NotificationCompat.Action.Extender {
						public static class: java.lang.Class<androidx.core.app.NotificationCompat.Action.WearableExtender>;
						public setAvailableOffline(availableOffline: boolean): androidx.core.app.NotificationCompat.Action.WearableExtender;
						/** @deprecated */
						public setConfirmLabel(label: string): androidx.core.app.NotificationCompat.Action.WearableExtender;
						public constructor();
						public getHintDisplayActionInline(): boolean;
						public extend(builder: androidx.core.app.NotificationCompat.Action.Builder): androidx.core.app.NotificationCompat.Action.Builder;
						/** @deprecated */
						public getConfirmLabel(): string;
						public clone(): any;
						public setHintDisplayActionInline(hintDisplayInline: boolean): androidx.core.app.NotificationCompat.Action.WearableExtender;
						/** @deprecated */
						public setInProgressLabel(label: string): androidx.core.app.NotificationCompat.Action.WearableExtender;
						public setHintLaunchesActivity(hintLaunchesActivity: boolean): androidx.core.app.NotificationCompat.Action.WearableExtender;
						public extend(param0: androidx.core.app.NotificationCompat.Action.Builder): androidx.core.app.NotificationCompat.Action.Builder;
						/** @deprecated */
						public getInProgressLabel(): string;
						/** @deprecated */
						public getCancelLabel(): string;
						public constructor(action: androidx.core.app.NotificationCompat.Action);
						public getHintLaunchesActivity(): boolean;
						public clone(): androidx.core.app.NotificationCompat.Action.WearableExtender;
						/** @deprecated */
						public setCancelLabel(label: string): androidx.core.app.NotificationCompat.Action.WearableExtender;
						public isAvailableOffline(): boolean;
					}
				}
				export class BadgeIconType extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.BadgeIconType>;
					/**
					 * Constructs a new instance of the androidx.core.app.NotificationCompat$BadgeIconType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class BigPictureStyle extends androidx.core.app.NotificationCompat.Style {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.BigPictureStyle>;
					public clearCompatExtraKeys(extras: android.os.Bundle): void;
					public constructor(builder: androidx.core.app.NotificationCompat.Builder);
					public setBigContentTitle(title: string): androidx.core.app.NotificationCompat.BigPictureStyle;
					public bigPicture(b: android.graphics.Bitmap): androidx.core.app.NotificationCompat.BigPictureStyle;
					public getClassName(): string;
					public constructor();
					public bigLargeIcon(b: android.graphics.Bitmap): androidx.core.app.NotificationCompat.BigPictureStyle;
					public showBigPictureWhenCollapsed(show: boolean): androidx.core.app.NotificationCompat.BigPictureStyle;
					public apply(builder: androidx.core.app.NotificationBuilderWithBuilderAccessor): void;
					public setSummaryText(cs: string): androidx.core.app.NotificationCompat.BigPictureStyle;
					public restoreFromCompatExtras(extras: android.os.Bundle): void;
				}
				export module BigPictureStyle {
					export class Api16Impl extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.app.NotificationCompat.BigPictureStyle.Api16Impl>;
					}
					export class Api23Impl extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.app.NotificationCompat.BigPictureStyle.Api23Impl>;
					}
					export class Api31Impl extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.app.NotificationCompat.BigPictureStyle.Api31Impl>;
					}
				}
				export class BigTextStyle extends androidx.core.app.NotificationCompat.Style {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.BigTextStyle>;
					public clearCompatExtraKeys(extras: android.os.Bundle): void;
					public constructor(builder: androidx.core.app.NotificationCompat.Builder);
					public getClassName(): string;
					public setBigContentTitle(title: string): androidx.core.app.NotificationCompat.BigTextStyle;
					public constructor();
					public addCompatExtras(extras: android.os.Bundle): void;
					public bigText(cs: string): androidx.core.app.NotificationCompat.BigTextStyle;
					public apply(builder: androidx.core.app.NotificationBuilderWithBuilderAccessor): void;
					public restoreFromCompatExtras(extras: android.os.Bundle): void;
					public setSummaryText(cs: string): androidx.core.app.NotificationCompat.BigTextStyle;
				}
				export class BubbleMetadata extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.BubbleMetadata>;
					public getDesiredHeight(): number;
					public setFlags(flags: number): void;
					public static fromPlatform(platformMetadata: android.app.Notification.BubbleMetadata): androidx.core.app.NotificationCompat.BubbleMetadata;
					public getDesiredHeightResId(): number;
					public static toPlatform(compatMetadata: androidx.core.app.NotificationCompat.BubbleMetadata): android.app.Notification.BubbleMetadata;
					public getDeleteIntent(): android.app.PendingIntent;
					public getIntent(): android.app.PendingIntent;
					public getIcon(): androidx.core.graphics.drawable.IconCompat;
					public getAutoExpandBubble(): boolean;
					public getShortcutId(): string;
					public isNotificationSuppressed(): boolean;
				}
				export module BubbleMetadata {
					export class Api29Impl extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.app.NotificationCompat.BubbleMetadata.Api29Impl>;
					}
					export class Api30Impl extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.app.NotificationCompat.BubbleMetadata.Api30Impl>;
					}
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.app.NotificationCompat.BubbleMetadata.Builder>;
						public constructor(intent: android.app.PendingIntent, icon: androidx.core.graphics.drawable.IconCompat);
						public setDesiredHeight(height: number): androidx.core.app.NotificationCompat.BubbleMetadata.Builder;
						public setSuppressNotification(shouldSuppressNotif: boolean): androidx.core.app.NotificationCompat.BubbleMetadata.Builder;
						/** @deprecated */
						public constructor();
						public setDeleteIntent(deleteIntent: android.app.PendingIntent): androidx.core.app.NotificationCompat.BubbleMetadata.Builder;
						public setDesiredHeightResId(heightResId: number): androidx.core.app.NotificationCompat.BubbleMetadata.Builder;
						public build(): androidx.core.app.NotificationCompat.BubbleMetadata;
						public setIcon(icon: androidx.core.graphics.drawable.IconCompat): androidx.core.app.NotificationCompat.BubbleMetadata.Builder;
						public constructor(shortcutId: string);
						public setIntent(intent: android.app.PendingIntent): androidx.core.app.NotificationCompat.BubbleMetadata.Builder;
						public setAutoExpandBubble(shouldExpand: boolean): androidx.core.app.NotificationCompat.BubbleMetadata.Builder;
					}
				}
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.Builder>;
					public mContext: android.content.Context;
					public mActions: java.util.ArrayList<androidx.core.app.NotificationCompat.Action>;
					public mPersonList: java.util.ArrayList<androidx.core.app.Person>;
					public mPeople: java.util.ArrayList<string>;
					/** @deprecated */
					public addPerson(uri: string): androidx.core.app.NotificationCompat.Builder;
					public setContentIntent(intent: android.app.PendingIntent): androidx.core.app.NotificationCompat.Builder;
					public setLargeIcon(icon: android.graphics.Bitmap): androidx.core.app.NotificationCompat.Builder;
					public createHeadsUpContentView(): android.widget.RemoteViews;
					public setSortKey(sortKey: string): androidx.core.app.NotificationCompat.Builder;
					/** @deprecated */
					public getNotification(): android.app.Notification;
					public setCustomHeadsUpContentView(contentView: android.widget.RemoteViews): androidx.core.app.NotificationCompat.Builder;
					public setNumber(number: number): androidx.core.app.NotificationCompat.Builder;
					public setProgress(max: number, progress: number, indeterminate: boolean): androidx.core.app.NotificationCompat.Builder;
					public setDeleteIntent(intent: android.app.PendingIntent): androidx.core.app.NotificationCompat.Builder;
					public setWhen(when: number): androidx.core.app.NotificationCompat.Builder;
					public addAction(action: androidx.core.app.NotificationCompat.Action): androidx.core.app.NotificationCompat.Builder;
					/** @deprecated */
					public setNotificationSilent(): androidx.core.app.NotificationCompat.Builder;
					public build(): android.app.Notification;
					public setColorized(colorize: boolean): androidx.core.app.NotificationCompat.Builder;
					public setOnlyAlertOnce(onlyAlertOnce: boolean): androidx.core.app.NotificationCompat.Builder;
					public setContentText(text: string): androidx.core.app.NotificationCompat.Builder;
					public setCustomBigContentView(contentView: android.widget.RemoteViews): androidx.core.app.NotificationCompat.Builder;
					public setDefaults(defaults: number): androidx.core.app.NotificationCompat.Builder;
					public extend(extender: androidx.core.app.NotificationCompat.Extender): androidx.core.app.NotificationCompat.Builder;
					public setFullScreenIntent(intent: android.app.PendingIntent, highPriority: boolean): androidx.core.app.NotificationCompat.Builder;
					public createContentView(): android.widget.RemoteViews;
					public constructor(context: android.content.Context, notification: android.app.Notification);
					public setOngoing(ongoing: boolean): androidx.core.app.NotificationCompat.Builder;
					public getPriority(): number;
					public setPublicVersion(n: android.app.Notification): androidx.core.app.NotificationCompat.Builder;
					public setShowWhen(show: boolean): androidx.core.app.NotificationCompat.Builder;
					public getBigContentView(): android.widget.RemoteViews;
					public setSmallIcon(icon: number): androidx.core.app.NotificationCompat.Builder;
					public setBubbleMetadata(data: androidx.core.app.NotificationCompat.BubbleMetadata): androidx.core.app.NotificationCompat.Builder;
					public getColor(): number;
					public getBubbleMetadata(): androidx.core.app.NotificationCompat.BubbleMetadata;
					public setColor(argb: number): androidx.core.app.NotificationCompat.Builder;
					public setLocusId(locusId: androidx.core.content.LocusIdCompat): androidx.core.app.NotificationCompat.Builder;
					public setSound(sound: android.net.Uri, streamType: number): androidx.core.app.NotificationCompat.Builder;
					public setAllowSystemGeneratedContextualActions(allowed: boolean): androidx.core.app.NotificationCompat.Builder;
					public setCustomContentView(contentView: android.widget.RemoteViews): androidx.core.app.NotificationCompat.Builder;
					public setShortcutId(shortcutId: string): androidx.core.app.NotificationCompat.Builder;
					/** @deprecated */
					public constructor(context: android.content.Context);
					public setUsesChronometer(b: boolean): androidx.core.app.NotificationCompat.Builder;
					public setSubText(text: string): androidx.core.app.NotificationCompat.Builder;
					public setSettingsText(text: string): androidx.core.app.NotificationCompat.Builder;
					public setVisibility(visibility: number): androidx.core.app.NotificationCompat.Builder;
					public addPerson(person: androidx.core.app.Person): androidx.core.app.NotificationCompat.Builder;
					public setAutoCancel(autoCancel: boolean): androidx.core.app.NotificationCompat.Builder;
					public setSound(sound: android.net.Uri): androidx.core.app.NotificationCompat.Builder;
					public setExtras(extras: android.os.Bundle): androidx.core.app.NotificationCompat.Builder;
					public constructor(context: android.content.Context, channelId: string);
					public setContentTitle(title: string): androidx.core.app.NotificationCompat.Builder;
					public addAction(icon: number, title: string, intent: android.app.PendingIntent): androidx.core.app.NotificationCompat.Builder;
					public setShortcutInfo(shortcutInfo: androidx.core.content.pm.ShortcutInfoCompat): androidx.core.app.NotificationCompat.Builder;
					public getContentView(): android.widget.RemoteViews;
					public setVibrate(pattern: number[]): androidx.core.app.NotificationCompat.Builder;
					public createBigContentView(): android.widget.RemoteViews;
					public setSmallIcon(icon: number, level: number): androidx.core.app.NotificationCompat.Builder;
					public setPriority(pri: number): androidx.core.app.NotificationCompat.Builder;
					public setContent(views: android.widget.RemoteViews): androidx.core.app.NotificationCompat.Builder;
					public clearPeople(): androidx.core.app.NotificationCompat.Builder;
					public setLocalOnly(b: boolean): androidx.core.app.NotificationCompat.Builder;
					public clearInvisibleActions(): androidx.core.app.NotificationCompat.Builder;
					public static limitCharSequenceLength(cs: string): string;
					public getWhenIfShowing(): number;
					public setChannelId(channelId: string): androidx.core.app.NotificationCompat.Builder;
					public setCategory(category: string): androidx.core.app.NotificationCompat.Builder;
					public clearActions(): androidx.core.app.NotificationCompat.Builder;
					public setChronometerCountDown(countsDown: boolean): androidx.core.app.NotificationCompat.Builder;
					public setRemoteInputHistory(text: string[]): androidx.core.app.NotificationCompat.Builder;
					public setSmallIcon(icon: androidx.core.graphics.drawable.IconCompat): androidx.core.app.NotificationCompat.Builder;
					public setForegroundServiceBehavior(behavior: number): androidx.core.app.NotificationCompat.Builder;
					public addInvisibleAction(action: androidx.core.app.NotificationCompat.Action): androidx.core.app.NotificationCompat.Builder;
					public setTimeoutAfter(durationMs: number): androidx.core.app.NotificationCompat.Builder;
					public getHeadsUpContentView(): android.widget.RemoteViews;
					public setGroup(groupKey: string): androidx.core.app.NotificationCompat.Builder;
					public getForegroundServiceBehavior(): number;
					public setLights(argb: number, onMs: number, offMs: number): androidx.core.app.NotificationCompat.Builder;
					public setStyle(style: androidx.core.app.NotificationCompat.Style): androidx.core.app.NotificationCompat.Builder;
					/** @deprecated */
					public setTicker(tickerText: string, views: android.widget.RemoteViews): androidx.core.app.NotificationCompat.Builder;
					public setBadgeIconType(icon: number): androidx.core.app.NotificationCompat.Builder;
					public addInvisibleAction(icon: number, title: string, intent: android.app.PendingIntent): androidx.core.app.NotificationCompat.Builder;
					public setContentInfo(info: string): androidx.core.app.NotificationCompat.Builder;
					public addExtras(extras: android.os.Bundle): androidx.core.app.NotificationCompat.Builder;
					public getExtras(): android.os.Bundle;
					public setGroupAlertBehavior(groupAlertBehavior: number): androidx.core.app.NotificationCompat.Builder;
					public setGroupSummary(isGroupSummary: boolean): androidx.core.app.NotificationCompat.Builder;
					public setSilent(silent: boolean): androidx.core.app.NotificationCompat.Builder;
					public setTicker(tickerText: string): androidx.core.app.NotificationCompat.Builder;
				}
				export class CarExtender extends java.lang.Object implements androidx.core.app.NotificationCompat.Extender {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.CarExtender>;
					/** @deprecated */
					public getUnreadConversation(): androidx.core.app.NotificationCompat.CarExtender.UnreadConversation;
					public getColor(): number;
					public constructor();
					public constructor(notification: android.app.Notification);
					public getLargeIcon(): android.graphics.Bitmap;
					public setLargeIcon(largeIcon: android.graphics.Bitmap): androidx.core.app.NotificationCompat.CarExtender;
					public setColor(color: number): androidx.core.app.NotificationCompat.CarExtender;
					public extend(builder: androidx.core.app.NotificationCompat.Builder): androidx.core.app.NotificationCompat.Builder;
					/** @deprecated */
					public setUnreadConversation(unreadConversation: androidx.core.app.NotificationCompat.CarExtender.UnreadConversation): androidx.core.app.NotificationCompat.CarExtender;
					public extend(param0: androidx.core.app.NotificationCompat.Builder): androidx.core.app.NotificationCompat.Builder;
				}
				export module CarExtender {
					export class UnreadConversation extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.app.NotificationCompat.CarExtender.UnreadConversation>;
						public getReadPendingIntent(): android.app.PendingIntent;
						public getParticipant(): string;
						public getRemoteInput(): androidx.core.app.RemoteInput;
						public getReplyPendingIntent(): android.app.PendingIntent;
						public getParticipants(): string[];
						public getMessages(): string[];
						public getLatestTimestamp(): number;
					}
					export module UnreadConversation {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<androidx.core.app.NotificationCompat.CarExtender.UnreadConversation.Builder>;
							public setLatestTimestamp(timestamp: number): androidx.core.app.NotificationCompat.CarExtender.UnreadConversation.Builder;
							public constructor(name: string);
							public setReplyAction(pendingIntent: android.app.PendingIntent, remoteInput: androidx.core.app.RemoteInput): androidx.core.app.NotificationCompat.CarExtender.UnreadConversation.Builder;
							public setReadPendingIntent(pendingIntent: android.app.PendingIntent): androidx.core.app.NotificationCompat.CarExtender.UnreadConversation.Builder;
							public addMessage(message: string): androidx.core.app.NotificationCompat.CarExtender.UnreadConversation.Builder;
							public build(): androidx.core.app.NotificationCompat.CarExtender.UnreadConversation;
						}
					}
				}
				export class DecoratedCustomViewStyle extends androidx.core.app.NotificationCompat.Style {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.DecoratedCustomViewStyle>;
					public makeContentView(builder: androidx.core.app.NotificationBuilderWithBuilderAccessor): android.widget.RemoteViews;
					public makeHeadsUpContentView(builder: androidx.core.app.NotificationBuilderWithBuilderAccessor): android.widget.RemoteViews;
					public getClassName(): string;
					public constructor();
					public makeBigContentView(builder: androidx.core.app.NotificationBuilderWithBuilderAccessor): android.widget.RemoteViews;
					public apply(builder: androidx.core.app.NotificationBuilderWithBuilderAccessor): void;
					public displayCustomViewInline(): boolean;
				}
				export class Extender extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.Extender>;
					/**
					 * Constructs a new instance of the androidx.core.app.NotificationCompat$Extender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						extend(param0: androidx.core.app.NotificationCompat.Builder): androidx.core.app.NotificationCompat.Builder;
					});
					public constructor();
					public extend(param0: androidx.core.app.NotificationCompat.Builder): androidx.core.app.NotificationCompat.Builder;
				}
				export class GroupAlertBehavior extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.GroupAlertBehavior>;
					/**
					 * Constructs a new instance of the androidx.core.app.NotificationCompat$GroupAlertBehavior interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class InboxStyle extends androidx.core.app.NotificationCompat.Style {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.InboxStyle>;
					public clearCompatExtraKeys(extras: android.os.Bundle): void;
					public constructor(builder: androidx.core.app.NotificationCompat.Builder);
					public getClassName(): string;
					public constructor();
					public setBigContentTitle(title: string): androidx.core.app.NotificationCompat.InboxStyle;
					public addLine(cs: string): androidx.core.app.NotificationCompat.InboxStyle;
					public apply(builder: androidx.core.app.NotificationBuilderWithBuilderAccessor): void;
					public restoreFromCompatExtras(extras: android.os.Bundle): void;
					public setSummaryText(cs: string): androidx.core.app.NotificationCompat.InboxStyle;
				}
				export class MessagingStyle extends androidx.core.app.NotificationCompat.Style {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.MessagingStyle>;
					public static MAXIMUM_RETAINED_MESSAGES: number;
					public setConversationTitle(conversationTitle: string): androidx.core.app.NotificationCompat.MessagingStyle;
					/** @deprecated */
					public addMessage(text: string, timestamp: number, param2: string): androidx.core.app.NotificationCompat.MessagingStyle;
					public setGroupConversation(isGroupConversation: boolean): androidx.core.app.NotificationCompat.MessagingStyle;
					public clearCompatExtraKeys(extras: android.os.Bundle): void;
					public isGroupConversation(): boolean;
					/** @deprecated */
					public constructor(userDisplayName: string);
					public getHistoricMessages(): java.util.List<androidx.core.app.NotificationCompat.MessagingStyle.Message>;
					public constructor(user: androidx.core.app.Person);
					public static extractMessagingStyleFromNotification(notification: android.app.Notification): androidx.core.app.NotificationCompat.MessagingStyle;
					public addMessage(message: androidx.core.app.NotificationCompat.MessagingStyle.Message): androidx.core.app.NotificationCompat.MessagingStyle;
					public getClassName(): string;
					public constructor();
					public addCompatExtras(extras: android.os.Bundle): void;
					public getConversationTitle(): string;
					public addHistoricMessage(message: androidx.core.app.NotificationCompat.MessagingStyle.Message): androidx.core.app.NotificationCompat.MessagingStyle;
					public apply(builder: androidx.core.app.NotificationBuilderWithBuilderAccessor): void;
					public getUser(): androidx.core.app.Person;
					public getMessages(): java.util.List<androidx.core.app.NotificationCompat.MessagingStyle.Message>;
					public restoreFromCompatExtras(extras: android.os.Bundle): void;
					public addMessage(text: string, timestamp: number, param2: androidx.core.app.Person): androidx.core.app.NotificationCompat.MessagingStyle;
					/** @deprecated */
					public getUserDisplayName(): string;
				}
				export module MessagingStyle {
					export class Message extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.app.NotificationCompat.MessagingStyle.Message>;
						/** @deprecated */
						public getSender(): string;
						public getDataUri(): android.net.Uri;
						public getDataMimeType(): string;
						/** @deprecated */
						public constructor(text: string, timestamp: number, param2: string);
						public getTimestamp(): number;
						public getPerson(): androidx.core.app.Person;
						public setData(dataMimeType: string, dataUri: android.net.Uri): androidx.core.app.NotificationCompat.MessagingStyle.Message;
						public constructor(text: string, timestamp: number, param2: androidx.core.app.Person);
						public getText(): string;
						public getExtras(): android.os.Bundle;
					}
				}
				export class NotificationVisibility extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.NotificationVisibility>;
					/**
					 * Constructs a new instance of the androidx.core.app.NotificationCompat$NotificationVisibility interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class ServiceNotificationBehavior extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.ServiceNotificationBehavior>;
					/**
					 * Constructs a new instance of the androidx.core.app.NotificationCompat$ServiceNotificationBehavior interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class StreamType extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.StreamType>;
					/**
					 * Constructs a new instance of the androidx.core.app.NotificationCompat$StreamType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export abstract class Style extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.Style>;
					public mBuilder: androidx.core.app.NotificationCompat.Builder;
					public clearCompatExtraKeys(extras: android.os.Bundle): void;
					public createColoredBitmap(iconId: number, color: number): android.graphics.Bitmap;
					public setBuilder(builder: androidx.core.app.NotificationCompat.Builder): void;
					public applyStandardTemplate(showSmallIcon: boolean, resId: number, fitIn1U: boolean): android.widget.RemoteViews;
					public displayCustomViewInline(): boolean;
					public build(): android.app.Notification;
					public makeContentView(builder: androidx.core.app.NotificationBuilderWithBuilderAccessor): android.widget.RemoteViews;
					public makeHeadsUpContentView(builder: androidx.core.app.NotificationBuilderWithBuilderAccessor): android.widget.RemoteViews;
					public static extractStyleFromNotification(notification: android.app.Notification): androidx.core.app.NotificationCompat.Style;
					public getClassName(): string;
					public constructor();
					public addCompatExtras(extras: android.os.Bundle): void;
					public buildIntoRemoteViews(outerView: android.widget.RemoteViews, innerView: android.widget.RemoteViews): void;
					public makeBigContentView(builder: androidx.core.app.NotificationBuilderWithBuilderAccessor): android.widget.RemoteViews;
					public apply(builder: androidx.core.app.NotificationBuilderWithBuilderAccessor): void;
					public restoreFromCompatExtras(extras: android.os.Bundle): void;
				}
				export class WearableExtender extends java.lang.Object implements androidx.core.app.NotificationCompat.Extender {
					public static class: java.lang.Class<androidx.core.app.NotificationCompat.WearableExtender>;
					public static UNSET_ACTION_INDEX: number;
					public static SIZE_DEFAULT: number;
					public static SIZE_XSMALL: number;
					public static SIZE_SMALL: number;
					public static SIZE_MEDIUM: number;
					public static SIZE_LARGE: number;
					public static SIZE_FULL_SCREEN: number;
					public static SCREEN_TIMEOUT_SHORT: number;
					public static SCREEN_TIMEOUT_LONG: number;
					public clone(): androidx.core.app.NotificationCompat.WearableExtender;
					/** @deprecated */
					public getGravity(): number;
					/** @deprecated */
					public setHintShowBackgroundOnly(hintShowBackgroundOnly: boolean): androidx.core.app.NotificationCompat.WearableExtender;
					/** @deprecated */
					public setContentIconGravity(contentIconGravity: number): androidx.core.app.NotificationCompat.WearableExtender;
					public clearActions(): androidx.core.app.NotificationCompat.WearableExtender;
					public getContentIntentAvailableOffline(): boolean;
					/** @deprecated */
					public getHintScreenTimeout(): number;
					public clone(): any;
					public constructor();
					/** @deprecated */
					public getPages(): java.util.List<android.app.Notification>;
					/** @deprecated */
					public getHintAmbientBigPicture(): boolean;
					/** @deprecated */
					public setGravity(gravity: number): androidx.core.app.NotificationCompat.WearableExtender;
					/** @deprecated */
					public getDisplayIntent(): android.app.PendingIntent;
					/** @deprecated */
					public getContentIconGravity(): number;
					/** @deprecated */
					public setCustomContentHeight(height: number): androidx.core.app.NotificationCompat.WearableExtender;
					/** @deprecated */
					public getHintAvoidBackgroundClipping(): boolean;
					/** @deprecated */
					public setDisplayIntent(intent: android.app.PendingIntent): androidx.core.app.NotificationCompat.WearableExtender;
					/** @deprecated */
					public setHintAmbientBigPicture(hintAmbientBigPicture: boolean): androidx.core.app.NotificationCompat.WearableExtender;
					/** @deprecated */
					public getBackground(): android.graphics.Bitmap;
					/** @deprecated */
					public getHintHideIcon(): boolean;
					/** @deprecated */
					public setHintScreenTimeout(timeout: number): androidx.core.app.NotificationCompat.WearableExtender;
					/** @deprecated */
					public addPages(pages: java.util.List<android.app.Notification>): androidx.core.app.NotificationCompat.WearableExtender;
					public constructor(notification: android.app.Notification);
					public getBridgeTag(): string;
					public getDismissalId(): string;
					public addAction(action: androidx.core.app.NotificationCompat.Action): androidx.core.app.NotificationCompat.WearableExtender;
					public getStartScrollBottom(): boolean;
					/** @deprecated */
					public addPage(page: android.app.Notification): androidx.core.app.NotificationCompat.WearableExtender;
					/** @deprecated */
					public setContentIcon(icon: number): androidx.core.app.NotificationCompat.WearableExtender;
					public setHintContentIntentLaunchesActivity(hintContentIntentLaunchesActivity: boolean): androidx.core.app.NotificationCompat.WearableExtender;
					/** @deprecated */
					public setHintAvoidBackgroundClipping(hintAvoidBackgroundClipping: boolean): androidx.core.app.NotificationCompat.WearableExtender;
					public setBridgeTag(bridgeTag: string): androidx.core.app.NotificationCompat.WearableExtender;
					/** @deprecated */
					public setHintHideIcon(hintHideIcon: boolean): androidx.core.app.NotificationCompat.WearableExtender;
					/** @deprecated */
					public getHintShowBackgroundOnly(): boolean;
					/** @deprecated */
					public clearPages(): androidx.core.app.NotificationCompat.WearableExtender;
					/** @deprecated */
					public getCustomSizePreset(): number;
					/** @deprecated */
					public getCustomContentHeight(): number;
					public setContentIntentAvailableOffline(contentIntentAvailableOffline: boolean): androidx.core.app.NotificationCompat.WearableExtender;
					public setContentAction(actionIndex: number): androidx.core.app.NotificationCompat.WearableExtender;
					public getHintContentIntentLaunchesActivity(): boolean;
					/** @deprecated */
					public getContentIcon(): number;
					public getContentAction(): number;
					public addActions(actions: java.util.List<androidx.core.app.NotificationCompat.Action>): androidx.core.app.NotificationCompat.WearableExtender;
					/** @deprecated */
					public setBackground(background: android.graphics.Bitmap): androidx.core.app.NotificationCompat.WearableExtender;
					public getActions(): java.util.List<androidx.core.app.NotificationCompat.Action>;
					public setDismissalId(dismissalId: string): androidx.core.app.NotificationCompat.WearableExtender;
					/** @deprecated */
					public setCustomSizePreset(sizePreset: number): androidx.core.app.NotificationCompat.WearableExtender;
					public extend(param0: androidx.core.app.NotificationCompat.Builder): androidx.core.app.NotificationCompat.Builder;
					public setStartScrollBottom(startScrollBottom: boolean): androidx.core.app.NotificationCompat.WearableExtender;
					public extend(builder: androidx.core.app.NotificationCompat.Builder): androidx.core.app.NotificationCompat.Builder;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class NotificationCompatBuilder extends java.lang.Object implements androidx.core.app.NotificationBuilderWithBuilderAccessor {
				public static class: java.lang.Class<androidx.core.app.NotificationCompatBuilder>;
				public getBuilder(): android.app.Notification.Builder;
				public buildInternal(): android.app.Notification;
				public build(): android.app.Notification;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class NotificationCompatExtras extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.NotificationCompatExtras>;
				public static EXTRA_LOCAL_ONLY: string;
				public static EXTRA_GROUP_KEY: string;
				public static EXTRA_GROUP_SUMMARY: string;
				public static EXTRA_SORT_KEY: string;
				public static EXTRA_ACTION_EXTRAS: string;
				public static EXTRA_REMOTE_INPUTS: string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class NotificationCompatJellybean extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.NotificationCompatJellybean>;
				public static TAG: string;
				public static readAction(icon: number, title: string, actionIntent: android.app.PendingIntent, extras: android.os.Bundle): androidx.core.app.NotificationCompat.Action;
				public static getExtras(notif: android.app.Notification): android.os.Bundle;
				public static getAction(notif: android.app.Notification, actionIndex: number): androidx.core.app.NotificationCompat.Action;
				public static buildActionExtrasMap(actionExtrasList: java.util.List<android.os.Bundle>): android.util.SparseArray<android.os.Bundle>;
				public static getActionCount(notif: android.app.Notification): number;
				public static writeActionAndGetExtras(builder: android.app.Notification.Builder, action: androidx.core.app.NotificationCompat.Action): android.os.Bundle;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export abstract class NotificationCompatSideChannelService extends android.app.Service {
				public static class: java.lang.Class<androidx.core.app.NotificationCompatSideChannelService>;
				public notify(): void;
				public onTrimMemory(level: number): void;
				public onBind(param0: android.content.Intent): android.os.IBinder;
				public cancelAll(param0: string): void;
				public notify(param0: string, param1: number, param2: string, param3: android.app.Notification): void;
				public onBind(intent: android.content.Intent): android.os.IBinder;
				public cancel(param0: string, param1: number, param2: string): void;
				public onTrimMemory(param0: number): void;
				public constructor();
				public constructor(base: android.content.Context);
			}
			export module NotificationCompatSideChannelService {
				export class NotificationSideChannelStub extends android.support.v4.app.INotificationSideChannel.Stub {
					public static class: java.lang.Class<androidx.core.app.NotificationCompatSideChannelService.NotificationSideChannelStub>;
					public linkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): void;
					public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, args: string[]): void;
					public isBinderAlive(): boolean;
					public dump(fd: java.io.FileDescriptor, args: string[]): void;
					public transact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
					public dumpAsync(fd: java.io.FileDescriptor, args: string[]): void;
					public cancel(packageName: string, id: number, tag: string): void;
					public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
					public cancel(param0: string, param1: number, param2: string): void;
					public notify(param0: string, param1: number, param2: string, param3: android.app.Notification): void;
					public dump(param0: java.io.FileDescriptor, param1: string[]): void;
					public notify(): void;
					public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
					public cancelAll(packageName: string): void;
					public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
					public getInterfaceDescriptor(): string;
					public queryLocalInterface(descriptor: string): android.os.IInterface;
					public unlinkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): boolean;
					public dumpAsync(param0: java.io.FileDescriptor, param1: string[]): void;
					public notify(packageName: string, id: number, tag: string, notification: android.app.Notification): void;
					public pingBinder(): boolean;
					public cancelAll(param0: string): void;
					public queryLocalInterface(param0: string): android.os.IInterface;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class NotificationManagerCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.NotificationManagerCompat>;
				public static EXTRA_USE_SIDE_CHANNEL: string;
				public static ACTION_BIND_SIDE_CHANNEL: string;
				public static IMPORTANCE_UNSPECIFIED: number;
				public static IMPORTANCE_NONE: number;
				public static IMPORTANCE_MIN: number;
				public static IMPORTANCE_LOW: number;
				public static IMPORTANCE_DEFAULT: number;
				public static IMPORTANCE_HIGH: number;
				public static IMPORTANCE_MAX: number;
				public getNotificationChannelsCompat(): java.util.List<androidx.core.app.NotificationChannelCompat>;
				public getNotificationChannel(channelId: string): android.app.NotificationChannel;
				public getNotificationChannelCompat(channelId: string): androidx.core.app.NotificationChannelCompat;
				public getNotificationChannelCompat(channelId: string, conversationId: string): androidx.core.app.NotificationChannelCompat;
				public getNotificationChannelGroup(channelGroupId: string): android.app.NotificationChannelGroup;
				public createNotificationChannel(channel: android.app.NotificationChannel): void;
				public createNotificationChannelGroup(group: androidx.core.app.NotificationChannelGroupCompat): void;
				public createNotificationChannelGroupsCompat(groups: java.util.List<androidx.core.app.NotificationChannelGroupCompat>): void;
				public notify(id: number, notification: android.app.Notification): void;
				public getNotificationChannelGroupsCompat(): java.util.List<androidx.core.app.NotificationChannelGroupCompat>;
				public getNotificationChannels(): java.util.List<android.app.NotificationChannel>;
				public notify(tag: string, id: number, notification: android.app.Notification): void;
				public deleteNotificationChannelGroup(groupId: string): void;
				public createNotificationChannelGroups(groups: java.util.List<android.app.NotificationChannelGroup>): void;
				public static from(context: android.content.Context): androidx.core.app.NotificationManagerCompat;
				public getNotificationChannel(channelId: string, conversationId: string): android.app.NotificationChannel;
				public cancel(id: number): void;
				public createNotificationChannelsCompat(channels: java.util.List<androidx.core.app.NotificationChannelCompat>): void;
				public notify(): void;
				public createNotificationChannel(channel: androidx.core.app.NotificationChannelCompat): void;
				public areNotificationsEnabled(): boolean;
				public deleteNotificationChannel(channelId: string): void;
				public deleteUnlistedNotificationChannels(channelIds: java.util.Collection<string>): void;
				public getImportance(): number;
				public cancelAll(): void;
				public getNotificationChannelGroups(): java.util.List<android.app.NotificationChannelGroup>;
				public createNotificationChannelGroup(group: android.app.NotificationChannelGroup): void;
				public createNotificationChannels(channels: java.util.List<android.app.NotificationChannel>): void;
				public static getEnabledListenerPackages(context: android.content.Context): java.util.Set<string>;
				public cancel(tag: string, id: number): void;
				public getNotificationChannelGroupCompat(channelGroupId: string): androidx.core.app.NotificationChannelGroupCompat;
			}
			export module NotificationManagerCompat {
				export class CancelTask extends java.lang.Object implements androidx.core.app.NotificationManagerCompat.Task {
					public static class: java.lang.Class<androidx.core.app.NotificationManagerCompat.CancelTask>;
					public toString(): string;
					public send(param0: android.support.v4.app.INotificationSideChannel): void;
					public send(service: android.support.v4.app.INotificationSideChannel): void;
				}
				export class NotifyTask extends java.lang.Object implements androidx.core.app.NotificationManagerCompat.Task {
					public static class: java.lang.Class<androidx.core.app.NotificationManagerCompat.NotifyTask>;
					public toString(): string;
					public send(param0: android.support.v4.app.INotificationSideChannel): void;
					public send(service: android.support.v4.app.INotificationSideChannel): void;
				}
				export class ServiceConnectedEvent extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.NotificationManagerCompat.ServiceConnectedEvent>;
				}
				export class SideChannelManager extends java.lang.Object implements android.os.Handler.Callback, android.content.ServiceConnection {
					public static class: java.lang.Class<androidx.core.app.NotificationManagerCompat.SideChannelManager>;
					public handleMessage(param0: android.os.Message): boolean;
					public onServiceConnected(componentName: android.content.ComponentName, iBinder: android.os.IBinder): void;
					public onServiceDisconnected(componentName: android.content.ComponentName): void;
					public onServiceConnected(param0: android.content.ComponentName, param1: android.os.IBinder): void;
					public queueTask(task: androidx.core.app.NotificationManagerCompat.Task): void;
					public handleMessage(msg: android.os.Message): boolean;
					public onServiceDisconnected(param0: android.content.ComponentName): void;
				}
				export module SideChannelManager {
					export class ListenerRecord extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.app.NotificationManagerCompat.SideChannelManager.ListenerRecord>;
					}
				}
				export class Task extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.NotificationManagerCompat.Task>;
					/**
					 * Constructs a new instance of the androidx.core.app.NotificationManagerCompat$Task interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						send(param0: android.support.v4.app.INotificationSideChannel): void;
					});
					public constructor();
					public send(param0: android.support.v4.app.INotificationSideChannel): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class Person extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.Person>;
				public getIcon(): androidx.core.graphics.drawable.IconCompat;
				public getName(): string;
				public toPersistableBundle(): any;
				public getKey(): string;
				public static fromPersistableBundle(bundle: any): androidx.core.app.Person;
				public toBundle(): android.os.Bundle;
				public isBot(): boolean;
				public toAndroidPerson(): any;
				public getUri(): string;
				public resolveToLegacyUri(): string;
				public static fromAndroidPerson(person: any): androidx.core.app.Person;
				public isImportant(): boolean;
				public toBuilder(): androidx.core.app.Person.Builder;
				public static fromBundle(bundle: android.os.Bundle): androidx.core.app.Person;
			}
			export module Person {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.Person.Builder>;
					public setIcon(icon: androidx.core.graphics.drawable.IconCompat): androidx.core.app.Person.Builder;
					public constructor();
					public setUri(uri: string): androidx.core.app.Person.Builder;
					public setBot(bot: boolean): androidx.core.app.Person.Builder;
					public setImportant(important: boolean): androidx.core.app.Person.Builder;
					public setKey(key: string): androidx.core.app.Person.Builder;
					public setName(name: string): androidx.core.app.Person.Builder;
					public build(): androidx.core.app.Person;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class RemoteActionCompat extends java.lang.Object implements androidx.versionedparcelable.VersionedParcelable {
				public static class: java.lang.Class<androidx.core.app.RemoteActionCompat>;
				public mIcon: androidx.core.graphics.drawable.IconCompat;
				public mTitle: string;
				public mContentDescription: string;
				public mActionIntent: android.app.PendingIntent;
				public mEnabled: boolean;
				public mShouldShowIcon: boolean;
				public getIcon(): androidx.core.graphics.drawable.IconCompat;
				public getContentDescription(): string;
				public toRemoteAction(): any;
				public setShouldShowIcon(shouldShowIcon: boolean): void;
				public constructor(other: androidx.core.app.RemoteActionCompat);
				public constructor(icon: androidx.core.graphics.drawable.IconCompat, title: string, contentDescription: string, intent: android.app.PendingIntent);
				public shouldShowIcon(): boolean;
				public getTitle(): string;
				public constructor();
				public getActionIntent(): android.app.PendingIntent;
				public static createFromRemoteAction(remoteAction: any): androidx.core.app.RemoteActionCompat;
				public isEnabled(): boolean;
				public setEnabled(enabled: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class RemoteActionCompatParcelizer extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.RemoteActionCompatParcelizer>;
				public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.core.app.RemoteActionCompat;
				public static write(obj: androidx.core.app.RemoteActionCompat, parcel: androidx.versionedparcelable.VersionedParcel): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class RemoteInput extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.RemoteInput>;
				public static RESULTS_CLIP_LABEL: string;
				public static EXTRA_RESULTS_DATA: string;
				public static SOURCE_FREE_FORM_INPUT: number;
				public static SOURCE_CHOICE: number;
				public static EDIT_CHOICES_BEFORE_SENDING_AUTO: number;
				public static EDIT_CHOICES_BEFORE_SENDING_DISABLED: number;
				public static EDIT_CHOICES_BEFORE_SENDING_ENABLED: number;
				public static addResultsToIntent(remoteInputs: androidx.core.app.RemoteInput[], intent: android.content.Intent, results: android.os.Bundle): void;
				public getAllowFreeFormInput(): boolean;
				public getLabel(): string;
				public static getResultsSource(intent: android.content.Intent): number;
				public getEditChoicesBeforeSending(): number;
				public static getResultsFromIntent(intent: android.content.Intent): android.os.Bundle;
				public getChoices(): string[];
				public isDataOnly(): boolean;
				public static addDataResultToIntent(remoteInput: androidx.core.app.RemoteInput, intent: android.content.Intent, results: java.util.Map<string,android.net.Uri>): void;
				public getResultKey(): string;
				public static setResultsSource(intent: android.content.Intent, source: number): void;
				public getExtras(): android.os.Bundle;
				public getAllowedDataTypes(): java.util.Set<string>;
				public static getDataResultsFromIntent(intent: android.content.Intent, remoteInputResultKey: string): java.util.Map<string,android.net.Uri>;
			}
			export module RemoteInput {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.RemoteInput.Builder>;
					public constructor(resultKey: string);
					public setAllowFreeFormInput(allowFreeFormTextInput: boolean): androidx.core.app.RemoteInput.Builder;
					public setEditChoicesBeforeSending(editChoicesBeforeSending: number): androidx.core.app.RemoteInput.Builder;
					public setAllowDataType(mimeType: string, doAllow: boolean): androidx.core.app.RemoteInput.Builder;
					public addExtras(extras: android.os.Bundle): androidx.core.app.RemoteInput.Builder;
					public setLabel(label: string): androidx.core.app.RemoteInput.Builder;
					public getExtras(): android.os.Bundle;
					public setChoices(choices: string[]): androidx.core.app.RemoteInput.Builder;
					public build(): androidx.core.app.RemoteInput;
				}
				export class EditChoicesBeforeSending extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.app.RemoteInput.EditChoicesBeforeSending>;
					/**
					 * Constructs a new instance of the androidx.core.app.RemoteInput$EditChoicesBeforeSending interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class Source extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.app.RemoteInput.Source>;
					/**
					 * Constructs a new instance of the androidx.core.app.RemoteInput$Source interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
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

declare module androidx {
	export module core {
		export module app {
			export class ServiceCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.ServiceCompat>;
				public static START_STICKY: number;
				public static STOP_FOREGROUND_REMOVE: number;
				public static STOP_FOREGROUND_DETACH: number;
				public static stopForeground(service: android.app.Service, flags: number): void;
			}
			export module ServiceCompat {
				export class StopForegroundFlags extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.app.ServiceCompat.StopForegroundFlags>;
					/**
					 * Constructs a new instance of the androidx.core.app.ServiceCompat$StopForegroundFlags interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
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

declare module androidx {
	export module core {
		export module app {
			export class ShareCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.ShareCompat>;
				public static EXTRA_CALLING_PACKAGE: string;
				public static EXTRA_CALLING_PACKAGE_INTEROP: string;
				public static EXTRA_CALLING_ACTIVITY: string;
				public static EXTRA_CALLING_ACTIVITY_INTEROP: string;
				/** @deprecated */
				public static configureMenuItem(item: android.view.MenuItem, shareIntent: androidx.core.app.ShareCompat.IntentBuilder): void;
				public static getCallingPackage(calledActivity: android.app.Activity): string;
				/** @deprecated */
				public static configureMenuItem(menu: android.view.Menu, menuItemId: number, shareIntent: androidx.core.app.ShareCompat.IntentBuilder): void;
				public static getCallingActivity(calledActivity: android.app.Activity): android.content.ComponentName;
			}
			export module ShareCompat {
				export class Api16Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.ShareCompat.Api16Impl>;
				}
				export class IntentBuilder extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.ShareCompat.IntentBuilder>;
					public setChooserTitle(resId: number): androidx.core.app.ShareCompat.IntentBuilder;
					public setType(mimeType: string): androidx.core.app.ShareCompat.IntentBuilder;
					public setEmailBcc(addresses: string[]): androidx.core.app.ShareCompat.IntentBuilder;
					public setText(text: string): androidx.core.app.ShareCompat.IntentBuilder;
					public startChooser(): void;
					public addEmailTo(address: string): androidx.core.app.ShareCompat.IntentBuilder;
					public createChooserIntent(): android.content.Intent;
					public addEmailBcc(addresses: string[]): androidx.core.app.ShareCompat.IntentBuilder;
					public setSubject(subject: string): androidx.core.app.ShareCompat.IntentBuilder;
					public addEmailBcc(address: string): androidx.core.app.ShareCompat.IntentBuilder;
					public getIntent(): android.content.Intent;
					public addEmailCc(address: string): androidx.core.app.ShareCompat.IntentBuilder;
					public setStream(streamUri: android.net.Uri): androidx.core.app.ShareCompat.IntentBuilder;
					public setChooserTitle(title: string): androidx.core.app.ShareCompat.IntentBuilder;
					public addStream(streamUri: android.net.Uri): androidx.core.app.ShareCompat.IntentBuilder;
					public setHtmlText(htmlText: string): androidx.core.app.ShareCompat.IntentBuilder;
					public constructor(launchingContext: android.content.Context);
					public setEmailTo(addresses: string[]): androidx.core.app.ShareCompat.IntentBuilder;
					public addEmailTo(addresses: string[]): androidx.core.app.ShareCompat.IntentBuilder;
					public setEmailCc(addresses: string[]): androidx.core.app.ShareCompat.IntentBuilder;
					/** @deprecated */
					public static from(launchingActivity: android.app.Activity): androidx.core.app.ShareCompat.IntentBuilder;
					public addEmailCc(addresses: string[]): androidx.core.app.ShareCompat.IntentBuilder;
				}
				export class IntentReader extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.ShareCompat.IntentReader>;
					public getEmailBcc(): string[];
					public getText(): string;
					public getEmailTo(): string[];
					public constructor(context: android.content.Context, intent: android.content.Intent);
					public isShareIntent(): boolean;
					public getCallingPackage(): string;
					public getCallingApplicationIcon(): android.graphics.drawable.Drawable;
					public getCallingActivityIcon(): android.graphics.drawable.Drawable;
					public getSubject(): string;
					public getCallingApplicationLabel(): string;
					public constructor(activity: android.app.Activity);
					public getStream(): android.net.Uri;
					public getStreamCount(): number;
					public isMultipleShare(): boolean;
					public isSingleShare(): boolean;
					public getEmailCc(): string[];
					/** @deprecated */
					public static from(activity: android.app.Activity): androidx.core.app.ShareCompat.IntentReader;
					public getType(): string;
					public getStream(index: number): android.net.Uri;
					public getCallingActivity(): android.content.ComponentName;
					public getHtmlText(): string;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export abstract class SharedElementCallback extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.app.SharedElementCallback>;
				public onSharedElementsArrived(sharedElementNames: java.util.List<string>, sharedElements: java.util.List<android.view.View>, listener: androidx.core.app.SharedElementCallback.OnSharedElementsReadyListener): void;
				public onSharedElementEnd(sharedElementNames: java.util.List<string>, sharedElements: java.util.List<android.view.View>, sharedElementSnapshots: java.util.List<android.view.View>): void;
				public onRejectSharedElements(rejectedSharedElements: java.util.List<android.view.View>): void;
				public onCaptureSharedElementSnapshot(sharedElement: android.view.View, viewToGlobalMatrix: android.graphics.Matrix, screenBounds: android.graphics.RectF): android.os.Parcelable;
				public onCreateSnapshotView(context: android.content.Context, snapshot: android.os.Parcelable): android.view.View;
				public onMapSharedElements(names: java.util.List<string>, sharedElements: java.util.Map<string,android.view.View>): void;
				public constructor();
				public onSharedElementStart(sharedElementNames: java.util.List<string>, sharedElements: java.util.List<android.view.View>, sharedElementSnapshots: java.util.List<android.view.View>): void;
			}
			export module SharedElementCallback {
				export class OnSharedElementsReadyListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.SharedElementCallback.OnSharedElementsReadyListener>;
					/**
					 * Constructs a new instance of the androidx.core.app.SharedElementCallback$OnSharedElementsReadyListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSharedElementsReady(): void;
					});
					public constructor();
					public onSharedElementsReady(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export class TaskStackBuilder extends java.lang.Iterable<android.content.Intent> {
				public static class: java.lang.Class<androidx.core.app.TaskStackBuilder>;
				/** @deprecated */
				public static from(context: android.content.Context): androidx.core.app.TaskStackBuilder;
				public startActivities(): void;
				public spliterator(): java.util.Spliterator<any>;
				public getPendingIntent(requestCode: number, flags: number, options: android.os.Bundle): android.app.PendingIntent;
				public getIntentCount(): number;
				public getPendingIntent(requestCode: number, flags: number): android.app.PendingIntent;
				/** @deprecated */
				public getIntent(index: number): android.content.Intent;
				public iterator(): java.util.Iterator<any>;
				public addNextIntentWithParentStack(nextIntent: android.content.Intent): androidx.core.app.TaskStackBuilder;
				public forEach(action: any /* any*/): void;
				/** @deprecated */
				public iterator(): java.util.Iterator<android.content.Intent>;
				public getIntents(): android.content.Intent[];
				public startActivities(options: android.os.Bundle): void;
				public addParentStack(sourceActivityClass: java.lang.Class<any>): androidx.core.app.TaskStackBuilder;
				public static create(context: android.content.Context): androidx.core.app.TaskStackBuilder;
				public addParentStack(sourceActivity: android.app.Activity): androidx.core.app.TaskStackBuilder;
				public addNextIntent(nextIntent: android.content.Intent): androidx.core.app.TaskStackBuilder;
				public editIntentAt(index: number): android.content.Intent;
				public addParentStack(sourceActivityName: android.content.ComponentName): androidx.core.app.TaskStackBuilder;
			}
			export module TaskStackBuilder {
				export class SupportParentable extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.app.TaskStackBuilder.SupportParentable>;
					/**
					 * Constructs a new instance of the androidx.core.app.TaskStackBuilder$SupportParentable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getSupportParentActivityIntent(): android.content.Intent;
					});
					public constructor();
					public getSupportParentActivityIntent(): android.content.Intent;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export module unusedapprestrictions {
				export class IUnusedAppRestrictionsBackportCallback extends java.lang.Object implements android.os.IInterface {
					public static class: java.lang.Class<androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportCallback>;
					/**
					 * Constructs a new instance of the androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onIsPermissionRevocationEnabledForAppResult(param0: boolean, param1: boolean): void;
						asBinder(): android.os.IBinder;
					});
					public constructor();
					public asBinder(): android.os.IBinder;
					public onIsPermissionRevocationEnabledForAppResult(param0: boolean, param1: boolean): void;
				}
				export module IUnusedAppRestrictionsBackportCallback {
					export class Default extends java.lang.Object implements androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportCallback {
						public static class: java.lang.Class<androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportCallback.Default>;
						public constructor();
						public asBinder(): android.os.IBinder;
						public onIsPermissionRevocationEnabledForAppResult(success: boolean, isEnabled: boolean): void;
						public onIsPermissionRevocationEnabledForAppResult(param0: boolean, param1: boolean): void;
					}
					export abstract class Stub extends android.os.Binder implements androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportCallback {
						public static class: java.lang.Class<androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportCallback.Stub>;
						public constructor();
						public linkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): void;
						public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
						public unlinkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): boolean;
						public queryLocalInterface(param0: string): android.os.IInterface;
						public onTransact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
						public onIsPermissionRevocationEnabledForAppResult(param0: boolean, param1: boolean): void;
						public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
						public static asInterface(obj: android.os.IBinder): androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportCallback;
						public queryLocalInterface(descriptor: string): android.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: string[]): void;
						public transact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
						public static setDefaultImpl(impl: androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportCallback): boolean;
						public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
						public getInterfaceDescriptor(): string;
						public isBinderAlive(): boolean;
						public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, args: string[]): void;
						public asBinder(): android.os.IBinder;
						public dump(fd: java.io.FileDescriptor, args: string[]): void;
						public static getDefaultImpl(): androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportCallback;
						public pingBinder(): boolean;
						public dumpAsync(fd: java.io.FileDescriptor, args: string[]): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: string[]): void;
					}
					export module Stub {
						export class Proxy extends java.lang.Object implements androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportCallback {
							public static class: java.lang.Class<androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportCallback.Stub.Proxy>;
							public static sDefaultImpl: androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportCallback;
							public getInterfaceDescriptor(): string;
							public onIsPermissionRevocationEnabledForAppResult(success: boolean, isEnabled: boolean): void;
							public asBinder(): android.os.IBinder;
							public onIsPermissionRevocationEnabledForAppResult(param0: boolean, param1: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module app {
			export module unusedapprestrictions {
				export class IUnusedAppRestrictionsBackportService extends java.lang.Object implements android.os.IInterface {
					public static class: java.lang.Class<androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportService>;
					/**
					 * Constructs a new instance of the androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isPermissionRevocationEnabledForApp(param0: androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportCallback): void;
						asBinder(): android.os.IBinder;
					});
					public constructor();
					public isPermissionRevocationEnabledForApp(param0: androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportCallback): void;
					public asBinder(): android.os.IBinder;
				}
				export module IUnusedAppRestrictionsBackportService {
					export class Default extends java.lang.Object implements androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportService {
						public static class: java.lang.Class<androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportService.Default>;
						public isPermissionRevocationEnabledForApp(param0: androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportCallback): void;
						public constructor();
						public isPermissionRevocationEnabledForApp(callback: androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportCallback): void;
						public asBinder(): android.os.IBinder;
					}
					export abstract class Stub extends android.os.Binder implements androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportService {
						public static class: java.lang.Class<androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportService.Stub>;
						public constructor();
						public linkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): void;
						public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
						public unlinkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): boolean;
						public queryLocalInterface(param0: string): android.os.IInterface;
						public static asInterface(obj: android.os.IBinder): androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportService;
						public onTransact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
						public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
						public queryLocalInterface(descriptor: string): android.os.IInterface;
						public dump(param0: java.io.FileDescriptor, param1: string[]): void;
						public transact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
						public isPermissionRevocationEnabledForApp(param0: androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportCallback): void;
						public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
						public getInterfaceDescriptor(): string;
						public static setDefaultImpl(impl: androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportService): boolean;
						public isBinderAlive(): boolean;
						public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, args: string[]): void;
						public asBinder(): android.os.IBinder;
						public dump(fd: java.io.FileDescriptor, args: string[]): void;
						public static getDefaultImpl(): androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportService;
						public pingBinder(): boolean;
						public dumpAsync(fd: java.io.FileDescriptor, args: string[]): void;
						public dumpAsync(param0: java.io.FileDescriptor, param1: string[]): void;
					}
					export module Stub {
						export class Proxy extends java.lang.Object implements androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportService {
							public static class: java.lang.Class<androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportService.Stub.Proxy>;
							public static sDefaultImpl: androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportService;
							public getInterfaceDescriptor(): string;
							public isPermissionRevocationEnabledForApp(callback: androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportCallback): void;
							public asBinder(): android.os.IBinder;
							public isPermissionRevocationEnabledForApp(param0: androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportCallback): void;
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export class ContentProviderCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.content.ContentProviderCompat>;
				public static requireContext(provider: android.content.ContentProvider): android.content.Context;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export class ContentResolverCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.content.ContentResolverCompat>;
				public static query(resolver: android.content.ContentResolver, uri: android.net.Uri, projection: string[], selection: string, selectionArgs: string[], sortOrder: string, cancellationSignal: androidx.core.os.CancellationSignal): android.database.Cursor;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export class ContextCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.content.ContextCompat>;
				public static getSystemServiceName(context: android.content.Context, serviceClass: java.lang.Class<any>): string;
				public static startActivities(context: android.content.Context, intents: android.content.Intent[], options: android.os.Bundle): boolean;
				public static getExternalFilesDirs(context: android.content.Context, type: string): java.io.File[];
				public static createDeviceProtectedStorageContext(context: android.content.Context): android.content.Context;
				public static getMainExecutor(context: android.content.Context): java.util.concurrent.Executor;
				public static startForegroundService(context: android.content.Context, intent: android.content.Intent): void;
				public static getColor(context: android.content.Context, id: number): number;
				public static getAttributionTag(context: android.content.Context): string;
				public static getExternalCacheDirs(context: android.content.Context): java.io.File[];
				public static startActivities(context: android.content.Context, intents: android.content.Intent[]): boolean;
				public static getNoBackupFilesDir(context: android.content.Context): java.io.File;
				public constructor();
				public static isDeviceProtectedStorage(context: android.content.Context): boolean;
				public static getSystemService(context: android.content.Context, serviceClass: java.lang.Class<any>): any;
				public static checkSelfPermission(context: android.content.Context, permission: string): number;
				public static getObbDirs(context: android.content.Context): java.io.File[];
				public static getCodeCacheDir(context: android.content.Context): java.io.File;
				public static getDataDir(context: android.content.Context): java.io.File;
				public static getDrawable(context: android.content.Context, id: number): android.graphics.drawable.Drawable;
				public static startActivity(context: android.content.Context, intent: android.content.Intent, options: android.os.Bundle): void;
				public static getColorStateList(context: android.content.Context, id: number): android.content.res.ColorStateList;
			}
			export module ContextCompat {
				export class Api16Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.ContextCompat.Api16Impl>;
				}
				export class Api19Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.ContextCompat.Api19Impl>;
				}
				export class Api21Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.ContextCompat.Api21Impl>;
				}
				export class Api23Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.ContextCompat.Api23Impl>;
				}
				export class Api24Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.ContextCompat.Api24Impl>;
				}
				export class Api26Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.ContextCompat.Api26Impl>;
				}
				export class Api28Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.ContextCompat.Api28Impl>;
				}
				export class Api30Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.ContextCompat.Api30Impl>;
				}
				export class LegacyServiceMapHolder extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.ContextCompat.LegacyServiceMapHolder>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export class FileProvider extends android.content.ContentProvider {
				public static class: java.lang.Class<androidx.core.content.FileProvider>;
				public openFile(uri: android.net.Uri, mode: string, signal: android.os.CancellationSignal): android.os.ParcelFileDescriptor;
				public insert(uri: android.net.Uri, values: android.content.ContentValues): android.net.Uri;
				public insert(param0: android.net.Uri, param1: android.content.ContentValues): android.net.Uri;
				public delete(param0: android.net.Uri, param1: string, param2: string[]): number;
				public update(param0: android.net.Uri, param1: android.content.ContentValues, param2: string, param3: string[]): number;
				public update(uri: android.net.Uri, values: android.content.ContentValues, selection: string, selectionArgs: string[]): number;
				public query(uri: android.net.Uri, projection: string[], selection: string, selectionArgs: string[], sortOrder: string): android.database.Cursor;
				public attachInfo(context: android.content.Context, info: android.content.pm.ProviderInfo): void;
				public query(uri: android.net.Uri, projection: string[], selection: string, selectionArgs: string[], sortOrder: string, cancellationSignal: android.os.CancellationSignal): android.database.Cursor;
				public onCreate(): boolean;
				public static getUriForFile(context: android.content.Context, authority: string, file: java.io.File): android.net.Uri;
				public constructor();
				public getType(uri: android.net.Uri): string;
				public delete(uri: android.net.Uri, selection: string, selectionArgs: string[]): number;
				public query(param0: android.net.Uri, param1: string[], param2: string, param3: string[], param4: string): android.database.Cursor;
				public onTrimMemory(level: number): void;
				public openFile(uri: android.net.Uri, mode: string): android.os.ParcelFileDescriptor;
				public static getUriForFile(context: android.content.Context, authority: string, file: java.io.File, displayName: string): android.net.Uri;
				public getType(param0: android.net.Uri): string;
				public onTrimMemory(param0: number): void;
			}
			export module FileProvider {
				export class PathStrategy extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.FileProvider.PathStrategy>;
					/**
					 * Constructs a new instance of the androidx.core.content.FileProvider$PathStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getUriForFile(param0: java.io.File): android.net.Uri;
						getFileForUri(param0: android.net.Uri): java.io.File;
					});
					public constructor();
					public getUriForFile(param0: java.io.File): android.net.Uri;
					public getFileForUri(param0: android.net.Uri): java.io.File;
				}
				export class SimplePathStrategy extends java.lang.Object implements androidx.core.content.FileProvider.PathStrategy {
					public static class: java.lang.Class<androidx.core.content.FileProvider.SimplePathStrategy>;
					public getUriForFile(param0: java.io.File): android.net.Uri;
					public getFileForUri(param0: android.net.Uri): java.io.File;
					public getFileForUri(uri: android.net.Uri): java.io.File;
					public getUriForFile(file: java.io.File): android.net.Uri;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export class IntentCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.content.IntentCompat>;
				public static ACTION_CREATE_REMINDER: string;
				public static EXTRA_HTML_TEXT: string;
				public static EXTRA_START_PLAYBACK: string;
				public static EXTRA_TIME: string;
				public static CATEGORY_LEANBACK_LAUNCHER: string;
				public static createManageUnusedAppRestrictionsIntent(context: android.content.Context, packageName: string): android.content.Intent;
				public static makeMainSelectorActivity(selectorAction: string, selectorCategory: string): android.content.Intent;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export class LocusIdCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.content.LocusIdCompat>;
				public getId(): string;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public toLocusId(): android.content.LocusId;
				public toString(): string;
				public static toLocusIdCompat(locusId: android.content.LocusId): androidx.core.content.LocusIdCompat;
				public constructor(id: string);
			}
			export module LocusIdCompat {
				export class Api29Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.LocusIdCompat.Api29Impl>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export class MimeTypeFilter extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.content.MimeTypeFilter>;
				public static matches(mimeTypes: string[], filter: string): string;
				public static matchesMany(mimeTypes: string[], filter: string): string[];
				public static matches(mimeType: string, filter: string): boolean;
				public static matches(mimeType: string, filters: string[]): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export class PackageManagerCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.content.PackageManagerCompat>;
				public static LOG_TAG: string;
				public static ACTION_PERMISSION_REVOCATION_SETTINGS: string;
				public static areUnusedAppRestrictionsAvailable(packageManager: android.content.pm.PackageManager): boolean;
				public static getUnusedAppRestrictionsStatus(context: android.content.Context): com.google.common.util.concurrent.ListenableFuture<java.lang.Integer>;
				public static getPermissionRevocationVerifierApp(packageManager: android.content.pm.PackageManager): string;
			}
			export module PackageManagerCompat {
				export class Api30Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.PackageManagerCompat.Api30Impl>;
				}
				export class UnusedAppRestrictionsStatus extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.content.PackageManagerCompat.UnusedAppRestrictionsStatus>;
					/**
					 * Constructs a new instance of the androidx.core.content.PackageManagerCompat$UnusedAppRestrictionsStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
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

declare module androidx {
	export module core {
		export module content {
			export class PermissionChecker extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.content.PermissionChecker>;
				public static PERMISSION_GRANTED: number;
				public static PERMISSION_DENIED: number;
				public static PERMISSION_DENIED_APP_OP: number;
				public static checkPermission(context: android.content.Context, permission: string, pid: number, uid: number, packageName: string): number;
				public static checkSelfPermission(context: android.content.Context, permission: string): number;
				public static checkCallingPermission(context: android.content.Context, permission: string, packageName: string): number;
				public static checkCallingOrSelfPermission(context: android.content.Context, permission: string): number;
			}
			export module PermissionChecker {
				export class PermissionResult extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.content.PermissionChecker.PermissionResult>;
					/**
					 * Constructs a new instance of the androidx.core.content.PermissionChecker$PermissionResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
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

declare module androidx {
	export module core {
		export module content {
			export class SharedPreferencesCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.content.SharedPreferencesCompat>;
			}
			export module SharedPreferencesCompat {
				export class EditorCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.SharedPreferencesCompat.EditorCompat>;
					/** @deprecated */
					public apply(editor: android.content.SharedPreferences.Editor): void;
					/** @deprecated */
					public static getInstance(): androidx.core.content.SharedPreferencesCompat.EditorCompat;
				}
				export module EditorCompat {
					export class Helper extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.content.SharedPreferencesCompat.EditorCompat.Helper>;
						public apply(editor: android.content.SharedPreferences.Editor): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export class UnusedAppRestrictionsBackportCallback extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.content.UnusedAppRestrictionsBackportCallback>;
				public onResult(success: boolean, enabled: boolean): void;
				public constructor(callback: androidx.core.app.unusedapprestrictions.IUnusedAppRestrictionsBackportCallback);
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export abstract class UnusedAppRestrictionsBackportService extends android.app.Service {
				public static class: java.lang.Class<androidx.core.content.UnusedAppRestrictionsBackportService>;
				public static ACTION_UNUSED_APP_RESTRICTIONS_BACKPORT_CONNECTION: string;
				public onTrimMemory(level: number): void;
				public onBind(param0: android.content.Intent): android.os.IBinder;
				public onBind(intent: android.content.Intent): android.os.IBinder;
				public onTrimMemory(param0: number): void;
				public constructor();
				public constructor(base: android.content.Context);
				public isPermissionRevocationEnabled(param0: androidx.core.content.UnusedAppRestrictionsBackportCallback): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export class UnusedAppRestrictionsBackportServiceConnection extends java.lang.Object implements android.content.ServiceConnection {
				public static class: java.lang.Class<androidx.core.content.UnusedAppRestrictionsBackportServiceConnection>;
				public onServiceDisconnected(name: android.content.ComponentName): void;
				public onServiceDisconnected(param0: android.content.ComponentName): void;
				public disconnectFromService(): void;
				public connectAndFetchResult(resultFuture: androidx.concurrent.futures.ResolvableFuture<java.lang.Integer>): void;
				public onServiceConnected(name: android.content.ComponentName, service: android.os.IBinder): void;
				public onServiceConnected(param0: android.content.ComponentName, param1: android.os.IBinder): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export class UnusedAppRestrictionsConstants extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.content.UnusedAppRestrictionsConstants>;
				public static ERROR: number;
				public static FEATURE_NOT_AVAILABLE: number;
				public static DISABLED: number;
				public static API_30_BACKPORT: number;
				public static API_30: number;
				public static API_31: number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module pm {
				export class ActivityInfoCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.pm.ActivityInfoCompat>;
					public static CONFIG_UI_MODE: number;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module pm {
				export class PackageInfoCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.pm.PackageInfoCompat>;
					public static getLongVersionCode(info: android.content.pm.PackageInfo): number;
					public static hasSignatures(packageManager: android.content.pm.PackageManager, packageName: string, certificatesAndType: java.util.Map<number[],java.lang.Integer>, matchExact: boolean): boolean;
					public static getSignatures(packageManager: android.content.pm.PackageManager, packageName: string): java.util.List<android.content.pm.Signature>;
				}
				export module PackageInfoCompat {
					export class Api28Impl extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.content.pm.PackageInfoCompat.Api28Impl>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module pm {
				export class PermissionInfoCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.pm.PermissionInfoCompat>;
					public static getProtection(permissionInfo: android.content.pm.PermissionInfo): number;
					public static getProtectionFlags(permissionInfo: android.content.pm.PermissionInfo): number;
				}
				export module PermissionInfoCompat {
					export class Protection extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.core.content.pm.PermissionInfoCompat.Protection>;
						/**
						 * Constructs a new instance of the androidx.core.content.pm.PermissionInfoCompat$Protection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
					export class ProtectionFlags extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.core.content.pm.PermissionInfoCompat.ProtectionFlags>;
						/**
						 * Constructs a new instance of the androidx.core.content.pm.PermissionInfoCompat$ProtectionFlags interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module pm {
				export abstract class ShortcutInfoChangeListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.pm.ShortcutInfoChangeListener>;
					public onShortcutAdded(shortcuts: java.util.List<androidx.core.content.pm.ShortcutInfoCompat>): void;
					public onAllShortcutsRemoved(): void;
					public onShortcutUsageReported(shortcutIds: java.util.List<string>): void;
					public constructor();
					public onShortcutUpdated(shortcuts: java.util.List<androidx.core.content.pm.ShortcutInfoCompat>): void;
					public onShortcutRemoved(shortcutIds: java.util.List<string>): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module pm {
				export class ShortcutInfoCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.pm.ShortcutInfoCompat>;
					public getActivity(): android.content.ComponentName;
					public getDisabledMessage(): string;
					public getCategories(): java.util.Set<string>;
					public getShortLabel(): string;
					public getUserHandle(): android.os.UserHandle;
					public getId(): string;
					public isDeclaredInManifest(): boolean;
					public isCached(): boolean;
					public toShortcutInfo(): any;
					public getDisabledReason(): number;
					public hasKeyFieldsOnly(): boolean;
					public isImmutable(): boolean;
					public getIntent(): android.content.Intent;
					public isDynamic(): boolean;
					public getLocusId(): androidx.core.content.LocusIdCompat;
					public getExtras(): any;
					public getPackage(): string;
					public getLastChangedTimestamp(): number;
					public getIntents(): android.content.Intent[];
					public getIcon(): androidx.core.graphics.drawable.IconCompat;
					public isPinned(): boolean;
					public isEnabled(): boolean;
					public getRank(): number;
					public getLongLabel(): string;
				}
				export module ShortcutInfoCompat {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.content.pm.ShortcutInfoCompat.Builder>;
						public setAlwaysBadged(): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public setCategories(categories: java.util.Set<string>): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public setLocusId(locusId: androidx.core.content.LocusIdCompat): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public setIsConversation(): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public setActivity(activity: android.content.ComponentName): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public setLongLived(longLived: boolean): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public setIntents(intents: android.content.Intent[]): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public setPerson(person: androidx.core.app.Person): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public setRank(rank: number): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public setExtras(extras: any): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public addCapabilityBinding(capability: string): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public constructor(context: android.content.Context, shortcutInfo: any);
						/** @deprecated */
						public setLongLived(): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public setLongLabel(longLabel: string): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public addCapabilityBinding(capability: string, parameter: string, parameterValues: java.util.List<string>): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public constructor(shortcutInfo: androidx.core.content.pm.ShortcutInfoCompat);
						public setIcon(icon: androidx.core.graphics.drawable.IconCompat): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public setDisabledMessage(disabledMessage: string): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public build(): androidx.core.content.pm.ShortcutInfoCompat;
						public setShortLabel(shortLabel: string): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public constructor(context: android.content.Context, id: string);
						public setIntent(intent: android.content.Intent): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public setSliceUri(sliceUri: android.net.Uri): androidx.core.content.pm.ShortcutInfoCompat.Builder;
						public setPersons(persons: androidx.core.app.Person[]): androidx.core.content.pm.ShortcutInfoCompat.Builder;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module pm {
				export abstract class ShortcutInfoCompatSaver<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.pm.ShortcutInfoCompatSaver<any>>;
					public getShortcuts(): java.util.List<androidx.core.content.pm.ShortcutInfoCompat>;
					public removeAllShortcuts(): T;
					public constructor();
					public removeShortcuts(param0: java.util.List<string>): T;
					public addShortcuts(param0: java.util.List<androidx.core.content.pm.ShortcutInfoCompat>): T;
				}
				export module ShortcutInfoCompatSaver {
					export class NoopImpl extends androidx.core.content.pm.ShortcutInfoCompatSaver<java.lang.Void> {
						public static class: java.lang.Class<androidx.core.content.pm.ShortcutInfoCompatSaver.NoopImpl>;
						public addShortcuts(shortcuts: java.util.List<androidx.core.content.pm.ShortcutInfoCompat>): java.lang.Void;
						public constructor();
						public removeShortcuts(param0: java.util.List<string>): any;
						public removeShortcuts(shortcutIds: java.util.List<string>): java.lang.Void;
						public addShortcuts(param0: java.util.List<androidx.core.content.pm.ShortcutInfoCompat>): any;
						public removeAllShortcuts(): any;
						public removeAllShortcuts(): java.lang.Void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module pm {
				export class ShortcutManagerCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.pm.ShortcutManagerCompat>;
					public static FLAG_MATCH_MANIFEST: number;
					public static FLAG_MATCH_DYNAMIC: number;
					public static FLAG_MATCH_PINNED: number;
					public static FLAG_MATCH_CACHED: number;
					public static EXTRA_SHORTCUT_ID: string;
					public static removeAllDynamicShortcuts(context: android.content.Context): void;
					public static isRateLimitingActive(context: android.content.Context): boolean;
					public static reportShortcutUsed(context: android.content.Context, shortcutId: string): void;
					public static getIconMaxHeight(context: android.content.Context): number;
					public static pushDynamicShortcut(context: android.content.Context, shortcut: androidx.core.content.pm.ShortcutInfoCompat): boolean;
					public static updateShortcuts(context: android.content.Context, shortcutInfoList: java.util.List<androidx.core.content.pm.ShortcutInfoCompat>): boolean;
					public static createShortcutResultIntent(context: android.content.Context, shortcut: androidx.core.content.pm.ShortcutInfoCompat): android.content.Intent;
					public static addDynamicShortcuts(context: android.content.Context, shortcutInfoList: java.util.List<androidx.core.content.pm.ShortcutInfoCompat>): boolean;
					public static enableShortcuts(context: android.content.Context, shortcutInfoList: java.util.List<androidx.core.content.pm.ShortcutInfoCompat>): void;
					public static isRequestPinShortcutSupported(context: android.content.Context): boolean;
					public static requestPinShortcut(context: android.content.Context, shortcut: androidx.core.content.pm.ShortcutInfoCompat, callback: android.content.IntentSender): boolean;
					public static setDynamicShortcuts(context: android.content.Context, shortcutInfoList: java.util.List<androidx.core.content.pm.ShortcutInfoCompat>): boolean;
					public static removeLongLivedShortcuts(context: android.content.Context, shortcutIds: java.util.List<string>): void;
					public static getMaxShortcutCountPerActivity(context: android.content.Context): number;
					public static removeDynamicShortcuts(context: android.content.Context, shortcutIds: java.util.List<string>): void;
					public static getDynamicShortcuts(context: android.content.Context): java.util.List<androidx.core.content.pm.ShortcutInfoCompat>;
					public static getShortcuts(context: android.content.Context, matchFlags: number): java.util.List<androidx.core.content.pm.ShortcutInfoCompat>;
					public static disableShortcuts(context: android.content.Context, shortcutIds: java.util.List<string>, disabledMessage: string): void;
					public static getIconMaxWidth(context: android.content.Context): number;
				}
				export module ShortcutManagerCompat {
					export class Api25Impl extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.content.pm.ShortcutManagerCompat.Api25Impl>;
					}
					export class ShortcutMatchFlags extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.core.content.pm.ShortcutManagerCompat.ShortcutMatchFlags>;
						/**
						 * Constructs a new instance of the androidx.core.content.pm.ShortcutManagerCompat$ShortcutMatchFlags interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module pm {
				export class ShortcutXmlParser extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.pm.ShortcutXmlParser>;
					public static parseShortcutIds(parser: org.xmlpull.v1.XmlPullParser): java.util.List<string>;
					public static getShortcutIds(context: android.content.Context): java.util.List<string>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module res {
				export class CamColor extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.res.CamColor>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module res {
				export class CamUtils extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.res.CamUtils>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module res {
				export class ColorStateListInflaterCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.res.ColorStateListInflaterCompat>;
					public static inflate(resources: android.content.res.Resources, resId: number, theme: android.content.res.Resources.Theme): android.content.res.ColorStateList;
					public static createFromXmlInner(r: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): android.content.res.ColorStateList;
					public static createFromXml(r: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, theme: android.content.res.Resources.Theme): android.content.res.ColorStateList;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module res {
				export class ComplexColorCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.res.ComplexColorCompat>;
					public static inflate(resources: android.content.res.Resources, resId: number, theme: android.content.res.Resources.Theme): androidx.core.content.res.ComplexColorCompat;
					public setColor(color: number): void;
					public isGradient(): boolean;
					public getColor(): number;
					public isStateful(): boolean;
					public onStateChanged(stateSet: number[]): boolean;
					public willDraw(): boolean;
					public getShader(): android.graphics.Shader;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module res {
				export class ConfigurationHelper extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.res.ConfigurationHelper>;
					public static getDensityDpi(resources: android.content.res.Resources): number;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module res {
				export class FontResourcesParserCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.res.FontResourcesParserCompat>;
					public static FETCH_STRATEGY_BLOCKING: number;
					public static FETCH_STRATEGY_ASYNC: number;
					public static INFINITE_TIMEOUT_VALUE: number;
					public static readCerts(resources: android.content.res.Resources, certsId: number): java.util.List<java.util.List<number[]>>;
					public static parse(parser: org.xmlpull.v1.XmlPullParser, resources: android.content.res.Resources): androidx.core.content.res.FontResourcesParserCompat.FamilyResourceEntry;
				}
				export module FontResourcesParserCompat {
					export class FamilyResourceEntry extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.content.res.FontResourcesParserCompat.FamilyResourceEntry>;
						/**
						 * Constructs a new instance of the androidx.core.content.res.FontResourcesParserCompat$FamilyResourceEntry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export class FetchStrategy extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.core.content.res.FontResourcesParserCompat.FetchStrategy>;
						/**
						 * Constructs a new instance of the androidx.core.content.res.FontResourcesParserCompat$FetchStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
					export class FontFamilyFilesResourceEntry extends java.lang.Object implements androidx.core.content.res.FontResourcesParserCompat.FamilyResourceEntry {
						public static class: java.lang.Class<androidx.core.content.res.FontResourcesParserCompat.FontFamilyFilesResourceEntry>;
						public getEntries(): androidx.core.content.res.FontResourcesParserCompat.FontFileResourceEntry[];
						public constructor(entries: androidx.core.content.res.FontResourcesParserCompat.FontFileResourceEntry[]);
					}
					export class FontFileResourceEntry extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.content.res.FontResourcesParserCompat.FontFileResourceEntry>;
						public isItalic(): boolean;
						public getVariationSettings(): string;
						public getWeight(): number;
						public getFileName(): string;
						public getTtcIndex(): number;
						public constructor(fileName: string, weight: number, italic: boolean, variationSettings: string, ttcIndex: number, resourceId: number);
						public getResourceId(): number;
					}
					export class ProviderResourceEntry extends java.lang.Object implements androidx.core.content.res.FontResourcesParserCompat.FamilyResourceEntry {
						public static class: java.lang.Class<androidx.core.content.res.FontResourcesParserCompat.ProviderResourceEntry>;
						public constructor(request: androidx.core.provider.FontRequest, strategy: number, timeoutMs: number);
						public getRequest(): androidx.core.provider.FontRequest;
						public getSystemFontFamilyName(): string;
						public getFetchStrategy(): number;
						public getTimeout(): number;
						public constructor(request: androidx.core.provider.FontRequest, strategy: number, timeoutMs: number, systemFontFamilyName: string);
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module res {
				export class GradientColorInflaterCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.res.GradientColorInflaterCompat>;
				}
				export module GradientColorInflaterCompat {
					export class ColorStops extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.content.res.GradientColorInflaterCompat.ColorStops>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module res {
				export class GrowingArrayUtils extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.res.GrowingArrayUtils>;
					public static growSize(currentSize: number): number;
					public static append(array: boolean[], currentSize: number, element: boolean): boolean[];
					public static insert(array: boolean[], currentSize: number, index: number, element: boolean): boolean[];
					public static insert(array: any[], currentSize: number, index: number, element: any): any[];
					public static append(array: any[], currentSize: number, element: any): any[];
					public static insert(array: number[], currentSize: number, index: number, element: number): number[];
					public static append(array: number[], currentSize: number, element: number): number[];
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module res {
				export class ResourcesCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.res.ResourcesCompat>;
					public static ID_NULL: number;
					public static getFloat(res: android.content.res.Resources, id: number): number;
					public static getColor(res: android.content.res.Resources, id: number, theme: android.content.res.Resources.Theme): number;
					public static getFont(context: android.content.Context, id: number): android.graphics.Typeface;
					public static getDrawable(res: android.content.res.Resources, id: number, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					public static getDrawableForDensity(res: android.content.res.Resources, id: number, density: number, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					public static getFont(context: android.content.Context, id: number, value: android.util.TypedValue, style: number, fontCallback: androidx.core.content.res.ResourcesCompat.FontCallback): android.graphics.Typeface;
					public static getFont(context: android.content.Context, id: number, fontCallback: androidx.core.content.res.ResourcesCompat.FontCallback, handler: android.os.Handler): void;
					public static getCachedFont(context: android.content.Context, id: number): android.graphics.Typeface;
					public static getColorStateList(res: android.content.res.Resources, id: number, theme: android.content.res.Resources.Theme): android.content.res.ColorStateList;
				}
				export module ResourcesCompat {
					export class Api23Impl extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.content.res.ResourcesCompat.Api23Impl>;
					}
					export class ColorStateListCacheEntry extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.content.res.ResourcesCompat.ColorStateListCacheEntry>;
					}
					export class ColorStateListCacheKey extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.content.res.ResourcesCompat.ColorStateListCacheKey>;
						public equals(obj: any): boolean;
						public hashCode(): number;
						public equals(o: any): boolean;
					}
					export abstract class FontCallback extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.content.res.ResourcesCompat.FontCallback>;
						public constructor();
						public onFontRetrieved(param0: android.graphics.Typeface): void;
						public onFontRetrievalFailed(param0: number): void;
						public callbackFailAsync(reason: number, handler: android.os.Handler): void;
						public static getHandler(handler: android.os.Handler): android.os.Handler;
						public callbackSuccessAsync(typeface: android.graphics.Typeface, handler: android.os.Handler): void;
					}
					export class ImplApi29 extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.content.res.ResourcesCompat.ImplApi29>;
					}
					export class ThemeCompat extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.content.res.ResourcesCompat.ThemeCompat>;
						public static rebase(theme: android.content.res.Resources.Theme): void;
					}
					export module ThemeCompat {
						export class ImplApi23 extends java.lang.Object {
							public static class: java.lang.Class<androidx.core.content.res.ResourcesCompat.ThemeCompat.ImplApi23>;
						}
						export class ImplApi29 extends java.lang.Object {
							public static class: java.lang.Class<androidx.core.content.res.ResourcesCompat.ThemeCompat.ImplApi29>;
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module res {
				export class TypedArrayUtils extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.res.TypedArrayUtils>;
					public static getNamedComplexColor(a: android.content.res.TypedArray, parser: org.xmlpull.v1.XmlPullParser, theme: android.content.res.Resources.Theme, attrName: string, resId: number, defaultValue: number): androidx.core.content.res.ComplexColorCompat;
					public static getNamedString(a: android.content.res.TypedArray, parser: org.xmlpull.v1.XmlPullParser, attrName: string, resId: number): string;
					public static getNamedResourceId(a: android.content.res.TypedArray, parser: org.xmlpull.v1.XmlPullParser, attrName: string, resId: number, defaultValue: number): number;
					public static getNamedColor(a: android.content.res.TypedArray, parser: org.xmlpull.v1.XmlPullParser, attrName: string, resId: number, defaultValue: number): number;
					public static getBoolean(a: android.content.res.TypedArray, index: number, fallbackIndex: number, defaultValue: boolean): boolean;
					public static getResourceId(a: android.content.res.TypedArray, index: number, fallbackIndex: number, defaultValue: number): number;
					public static getTextArray(a: android.content.res.TypedArray, index: number, fallbackIndex: number): string[];
					public static getString(a: android.content.res.TypedArray, index: number, fallbackIndex: number): string;
					public static getNamedInt(a: android.content.res.TypedArray, parser: org.xmlpull.v1.XmlPullParser, attrName: string, resId: number, defaultValue: number): number;
					public static peekNamedValue(a: android.content.res.TypedArray, parser: org.xmlpull.v1.XmlPullParser, attrName: string, resId: number): android.util.TypedValue;
					public static obtainAttributes(res: android.content.res.Resources, theme: android.content.res.Resources.Theme, set: android.util.AttributeSet, attrs: number[]): android.content.res.TypedArray;
					public static getAttr(context: android.content.Context, attr: number, fallbackAttr: number): number;
					public static getNamedFloat(a: android.content.res.TypedArray, parser: org.xmlpull.v1.XmlPullParser, attrName: string, resId: number, defaultValue: number): number;
					public static getNamedColorStateList(a: android.content.res.TypedArray, parser: org.xmlpull.v1.XmlPullParser, theme: android.content.res.Resources.Theme, attrName: string, resId: number): android.content.res.ColorStateList;
					public static hasAttribute(parser: org.xmlpull.v1.XmlPullParser, attrName: string): boolean;
					public static getText(a: android.content.res.TypedArray, index: number, fallbackIndex: number): string;
					public static getDrawable(a: android.content.res.TypedArray, index: number, fallbackIndex: number): android.graphics.drawable.Drawable;
					public static getNamedBoolean(a: android.content.res.TypedArray, parser: org.xmlpull.v1.XmlPullParser, attrName: string, resId: number, defaultValue: boolean): boolean;
					public static getInt(a: android.content.res.TypedArray, index: number, fallbackIndex: number, defaultValue: number): number;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module content {
			export module res {
				export class ViewingConditions extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.content.res.ViewingConditions>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module database {
			export class CursorWindowCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.database.CursorWindowCompat>;
				public static create(name: string, windowSizeBytes: number): android.database.CursorWindow;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module database {
			export class DatabaseUtilsCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.database.DatabaseUtilsCompat>;
				/** @deprecated */
				public static appendSelectionArgs(originalValues: string[], newValues: string[]): string[];
				/** @deprecated */
				public static concatenateWhere(a: string, b: string): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module database {
			export module sqlite {
				export class SQLiteCursorCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.database.sqlite.SQLiteCursorCompat>;
					public static setFillWindowForwardOnly(cursor: android.database.sqlite.SQLiteCursor, fillWindowForwardOnly: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class BitmapCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.BitmapCompat>;
				public static getAllocationByteCount(bitmap: android.graphics.Bitmap): number;
				public static hasMipMap(bitmap: android.graphics.Bitmap): boolean;
				public static setHasMipMap(bitmap: android.graphics.Bitmap, hasMipMap: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class BlendModeColorFilterCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.BlendModeColorFilterCompat>;
				public static createBlendModeColorFilterCompat(color: number, blendModeCompat: androidx.core.graphics.BlendModeCompat): android.graphics.ColorFilter;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class BlendModeCompat {
				public static class: java.lang.Class<androidx.core.graphics.BlendModeCompat>;
				public static CLEAR: androidx.core.graphics.BlendModeCompat;
				public static SRC: androidx.core.graphics.BlendModeCompat;
				public static DST: androidx.core.graphics.BlendModeCompat;
				public static SRC_OVER: androidx.core.graphics.BlendModeCompat;
				public static DST_OVER: androidx.core.graphics.BlendModeCompat;
				public static SRC_IN: androidx.core.graphics.BlendModeCompat;
				public static DST_IN: androidx.core.graphics.BlendModeCompat;
				public static SRC_OUT: androidx.core.graphics.BlendModeCompat;
				public static DST_OUT: androidx.core.graphics.BlendModeCompat;
				public static SRC_ATOP: androidx.core.graphics.BlendModeCompat;
				public static DST_ATOP: androidx.core.graphics.BlendModeCompat;
				public static XOR: androidx.core.graphics.BlendModeCompat;
				public static PLUS: androidx.core.graphics.BlendModeCompat;
				public static MODULATE: androidx.core.graphics.BlendModeCompat;
				public static SCREEN: androidx.core.graphics.BlendModeCompat;
				public static OVERLAY: androidx.core.graphics.BlendModeCompat;
				public static DARKEN: androidx.core.graphics.BlendModeCompat;
				public static LIGHTEN: androidx.core.graphics.BlendModeCompat;
				public static COLOR_DODGE: androidx.core.graphics.BlendModeCompat;
				public static COLOR_BURN: androidx.core.graphics.BlendModeCompat;
				public static HARD_LIGHT: androidx.core.graphics.BlendModeCompat;
				public static SOFT_LIGHT: androidx.core.graphics.BlendModeCompat;
				public static DIFFERENCE: androidx.core.graphics.BlendModeCompat;
				public static EXCLUSION: androidx.core.graphics.BlendModeCompat;
				public static MULTIPLY: androidx.core.graphics.BlendModeCompat;
				public static HUE: androidx.core.graphics.BlendModeCompat;
				public static SATURATION: androidx.core.graphics.BlendModeCompat;
				public static COLOR: androidx.core.graphics.BlendModeCompat;
				public static LUMINOSITY: androidx.core.graphics.BlendModeCompat;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): androidx.core.graphics.BlendModeCompat[];
				public static valueOf(name: string): androidx.core.graphics.BlendModeCompat;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class BlendModeUtils extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.BlendModeUtils>;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class ColorUtils extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.ColorUtils>;
				public static HSLToColor(hsl: number[]): number;
				public static calculateMinimumAlpha(foreground: number, background: number, minContrastRatio: number): number;
				public static RGBToLAB(r: number, g: number, b: number, outLab: number[]): void;
				public static LABToXYZ(l: number, param1: number, a: number, param3: number[]): void;
				public static colorToHSL(color: number, outHsl: number[]): void;
				public static RGBToXYZ(r: number, g: number, b: number, outXyz: number[]): void;
				public static RGBToHSL(r: number, g: number, b: number, outHsl: number[]): void;
				public static blendLAB(lab1: number[], lab2: number[], ratio: number, param3: number[]): void;
				public static colorToXYZ(color: number, outXyz: number[]): void;
				public static setAlphaComponent(color: number, alpha: number): number;
				public static colorToLAB(color: number, outLab: number[]): void;
				public static XYZToLAB(x: number, param1: number, y: number, param3: number[]): void;
				public static compositeColors(foreground: android.graphics.Color, background: android.graphics.Color): android.graphics.Color;
				public static LABToColor(l: number, param1: number, a: number): number;
				public static calculateContrast(foreground: number, background: number): number;
				public static blendHSL(hsl1: number[], hsl2: number[], ratio: number, outResult: number[]): void;
				public static XYZToColor(x: number, param1: number, y: number): number;
				public static blendARGB(color1: number, color2: number, ratio: number): number;
				public static compositeColors(foreground: number, background: number): number;
				public static calculateLuminance(color: number): number;
				public static distanceEuclidean(labX: number[], labY: number[]): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class Insets extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.Insets>;
				public static NONE: androidx.core.graphics.Insets;
				public left: number;
				public top: number;
				public right: number;
				public bottom: number;
				/** @deprecated */
				public static wrap(insets: android.graphics.Insets): androidx.core.graphics.Insets;
				public static max(a: androidx.core.graphics.Insets, b: androidx.core.graphics.Insets): androidx.core.graphics.Insets;
				public toPlatformInsets(): android.graphics.Insets;
				public static toCompatInsets(insets: android.graphics.Insets): androidx.core.graphics.Insets;
				public static add(a: androidx.core.graphics.Insets, b: androidx.core.graphics.Insets): androidx.core.graphics.Insets;
				public static of(left: number, top: number, right: number, bottom: number): androidx.core.graphics.Insets;
				public toString(): string;
				public equals(obj: any): boolean;
				public static min(a: androidx.core.graphics.Insets, b: androidx.core.graphics.Insets): androidx.core.graphics.Insets;
				public hashCode(): number;
				public equals(o: any): boolean;
				public static of(r: android.graphics.Rect): androidx.core.graphics.Insets;
				public static subtract(a: androidx.core.graphics.Insets, b: androidx.core.graphics.Insets): androidx.core.graphics.Insets;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class PaintCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.PaintCompat>;
				public static hasGlyph(paint: android.graphics.Paint, string: string): boolean;
				public static setBlendMode(paint: android.graphics.Paint, blendMode: androidx.core.graphics.BlendModeCompat): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class PathParser extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.PathParser>;
				public static canMorph(nodesFrom: androidx.core.graphics.PathParser.PathDataNode[], nodesTo: androidx.core.graphics.PathParser.PathDataNode[]): boolean;
				public static deepCopyNodes(source: androidx.core.graphics.PathParser.PathDataNode[]): androidx.core.graphics.PathParser.PathDataNode[];
				public static interpolatePathDataNodes(target: androidx.core.graphics.PathParser.PathDataNode[], from: androidx.core.graphics.PathParser.PathDataNode[], to: androidx.core.graphics.PathParser.PathDataNode[], fraction: number): boolean;
				public static createNodesFromPathData(pathData: string): androidx.core.graphics.PathParser.PathDataNode[];
				public static createPathFromPathData(pathData: string): android.graphics.Path;
				public static updateNodes(target: androidx.core.graphics.PathParser.PathDataNode[], source: androidx.core.graphics.PathParser.PathDataNode[]): void;
			}
			export module PathParser {
				export class ExtractFloatResult extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.graphics.PathParser.ExtractFloatResult>;
				}
				export class PathDataNode extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.graphics.PathParser.PathDataNode>;
					public mType: string;
					public mParams: number[];
					public static nodesToPath(node: androidx.core.graphics.PathParser.PathDataNode[], path: android.graphics.Path): void;
					public interpolatePathDataNode(nodeFrom: androidx.core.graphics.PathParser.PathDataNode, nodeTo: androidx.core.graphics.PathParser.PathDataNode, fraction: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class PathSegment extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.PathSegment>;
				public getEndFraction(): number;
				public getStart(): android.graphics.PointF;
				public getStartFraction(): number;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public getEnd(): android.graphics.PointF;
				public equals(o: any): boolean;
				public toString(): string;
				public constructor(start: android.graphics.PointF, startFraction: number, end: android.graphics.PointF, endFraction: number);
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class PathUtils extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.PathUtils>;
				public static flatten(path: android.graphics.Path): java.util.Collection<androidx.core.graphics.PathSegment>;
				public static flatten(path: android.graphics.Path, error: number): java.util.Collection<androidx.core.graphics.PathSegment>;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class TypefaceCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.TypefaceCompat>;
				public static createFromResourcesFontFile(context: android.content.Context, resources: android.content.res.Resources, id: number, path: string, style: number): android.graphics.Typeface;
				public static createFromResourcesFamilyXml(context: android.content.Context, entry: androidx.core.content.res.FontResourcesParserCompat.FamilyResourceEntry, resources: android.content.res.Resources, id: number, style: number, fontCallback: androidx.core.content.res.ResourcesCompat.FontCallback, handler: android.os.Handler, isRequestFromLayoutInflator: boolean): android.graphics.Typeface;
				public static findFromCache(resources: android.content.res.Resources, id: number, style: number): android.graphics.Typeface;
				public static clearCache(): void;
				public static createFromFontInfo(context: android.content.Context, cancellationSignal: android.os.CancellationSignal, fonts: androidx.core.provider.FontsContractCompat.FontInfo[], style: number): android.graphics.Typeface;
				public static create(context: android.content.Context, family: android.graphics.Typeface, style: number): android.graphics.Typeface;
			}
			export module TypefaceCompat {
				export class ResourcesCallbackAdapter extends androidx.core.provider.FontsContractCompat.FontRequestCallback {
					public static class: java.lang.Class<androidx.core.graphics.TypefaceCompat.ResourcesCallbackAdapter>;
					public constructor();
					public onTypefaceRequestFailed(reason: number): void;
					public onTypefaceRetrieved(typeface: android.graphics.Typeface): void;
					public constructor(fontCallback: androidx.core.content.res.ResourcesCompat.FontCallback);
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class TypefaceCompatApi21Impl extends androidx.core.graphics.TypefaceCompatBaseImpl {
				public static class: java.lang.Class<androidx.core.graphics.TypefaceCompatApi21Impl>;
				public createFromFontFamilyFilesResourceEntry(context: android.content.Context, entry: androidx.core.content.res.FontResourcesParserCompat.FontFamilyFilesResourceEntry, resources: android.content.res.Resources, style: number): android.graphics.Typeface;
				public createFromFontInfo(context: android.content.Context, cancellationSignal: android.os.CancellationSignal, fonts: androidx.core.provider.FontsContractCompat.FontInfo[], style: number): android.graphics.Typeface;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class TypefaceCompatApi24Impl extends androidx.core.graphics.TypefaceCompatBaseImpl {
				public static class: java.lang.Class<androidx.core.graphics.TypefaceCompatApi24Impl>;
				public createFromFontFamilyFilesResourceEntry(context: android.content.Context, entry: androidx.core.content.res.FontResourcesParserCompat.FontFamilyFilesResourceEntry, resources: android.content.res.Resources, style: number): android.graphics.Typeface;
				public static isUsable(): boolean;
				public createFromFontInfo(context: android.content.Context, cancellationSignal: android.os.CancellationSignal, fonts: androidx.core.provider.FontsContractCompat.FontInfo[], style: number): android.graphics.Typeface;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class TypefaceCompatApi26Impl extends androidx.core.graphics.TypefaceCompatApi21Impl {
				public static class: java.lang.Class<androidx.core.graphics.TypefaceCompatApi26Impl>;
				public mFontFamily: java.lang.Class<any>;
				public mFontFamilyCtor: java.lang.reflect.Constructor<any>;
				public mAddFontFromAssetManager: java.lang.reflect.Method;
				public mAddFontFromBuffer: java.lang.reflect.Method;
				public mFreeze: java.lang.reflect.Method;
				public mAbortCreation: java.lang.reflect.Method;
				public mCreateFromFamiliesWithDefault: java.lang.reflect.Method;
				public createFromResourcesFontFile(context: android.content.Context, resources: android.content.res.Resources, id: number, path: string, style: number): android.graphics.Typeface;
				public obtainFontFamily(): java.lang.Class<any>;
				public createFromFontFamilyFilesResourceEntry(context: android.content.Context, entry: androidx.core.content.res.FontResourcesParserCompat.FontFamilyFilesResourceEntry, resources: android.content.res.Resources, style: number): android.graphics.Typeface;
				public obtainAbortCreationMethod(fontFamily: java.lang.Class<any>): java.lang.reflect.Method;
				public createFromFamiliesWithDefault(family: any): android.graphics.Typeface;
				public obtainFontFamilyCtor(fontFamily: java.lang.Class<any>): java.lang.reflect.Constructor<any>;
				public obtainAddFontFromBufferMethod(fontFamily: java.lang.Class<any>): java.lang.reflect.Method;
				public obtainAddFontFromAssetManagerMethod(fontFamily: java.lang.Class<any>): java.lang.reflect.Method;
				public createFromFontInfo(context: android.content.Context, cancellationSignal: android.os.CancellationSignal, fonts: androidx.core.provider.FontsContractCompat.FontInfo[], style: number): android.graphics.Typeface;
				public obtainFreezeMethod(fontFamily: java.lang.Class<any>): java.lang.reflect.Method;
				public obtainCreateFromFamiliesWithDefaultMethod(fontFamily: java.lang.Class<any>): java.lang.reflect.Method;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class TypefaceCompatApi28Impl extends androidx.core.graphics.TypefaceCompatApi26Impl {
				public static class: java.lang.Class<androidx.core.graphics.TypefaceCompatApi28Impl>;
				public createFromFamiliesWithDefault(family: any): android.graphics.Typeface;
				public obtainCreateFromFamiliesWithDefaultMethod(fontFamily: java.lang.Class<any>): java.lang.reflect.Method;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class TypefaceCompatApi29Impl extends androidx.core.graphics.TypefaceCompatBaseImpl {
				public static class: java.lang.Class<androidx.core.graphics.TypefaceCompatApi29Impl>;
				public createFromResourcesFontFile(context: android.content.Context, resources: android.content.res.Resources, id: number, path: string, style: number): android.graphics.Typeface;
				public createFromFontFamilyFilesResourceEntry(context: android.content.Context, entry: androidx.core.content.res.FontResourcesParserCompat.FontFamilyFilesResourceEntry, resources: android.content.res.Resources, style: number): android.graphics.Typeface;
				public findBestInfo(fonts: androidx.core.provider.FontsContractCompat.FontInfo[], style: number): androidx.core.provider.FontsContractCompat.FontInfo;
				public createFromFontInfo(context: android.content.Context, cancellationSignal: android.os.CancellationSignal, fonts: androidx.core.provider.FontsContractCompat.FontInfo[], style: number): android.graphics.Typeface;
				public createFromFontFamilyFilesResourceEntry(context: android.content.Context, familyEntry: androidx.core.content.res.FontResourcesParserCompat.FontFamilyFilesResourceEntry, resources: android.content.res.Resources, style: number): android.graphics.Typeface;
				public createFromInputStream(context: android.content.Context, is: java.io.InputStream): android.graphics.Typeface;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class TypefaceCompatBaseImpl extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.TypefaceCompatBaseImpl>;
				public createFromResourcesFontFile(context: android.content.Context, resources: android.content.res.Resources, id: number, path: string, style: number): android.graphics.Typeface;
				public createFromFontFamilyFilesResourceEntry(context: android.content.Context, entry: androidx.core.content.res.FontResourcesParserCompat.FontFamilyFilesResourceEntry, resources: android.content.res.Resources, style: number): android.graphics.Typeface;
				public findBestInfo(fonts: androidx.core.provider.FontsContractCompat.FontInfo[], style: number): androidx.core.provider.FontsContractCompat.FontInfo;
				public createFromFontInfo(context: android.content.Context, cancellationSignal: android.os.CancellationSignal, fonts: androidx.core.provider.FontsContractCompat.FontInfo[], style: number): android.graphics.Typeface;
				public createFromInputStream(context: android.content.Context, is: java.io.InputStream): android.graphics.Typeface;
			}
			export module TypefaceCompatBaseImpl {
				export class StyleExtractor<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.graphics.TypefaceCompatBaseImpl.StyleExtractor<any>>;
					/**
					 * Constructs a new instance of the androidx.core.graphics.TypefaceCompatBaseImpl$StyleExtractor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getWeight(param0: T): number;
						isItalic(param0: T): boolean;
					});
					public constructor();
					public getWeight(param0: T): number;
					public isItalic(param0: T): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export class TypefaceCompatUtil extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.graphics.TypefaceCompatUtil>;
				public static copyToFile(file: java.io.File, is: java.io.InputStream): boolean;
				public static closeQuietly(c: java.io.Closeable): void;
				public static mmap(context: android.content.Context, cancellationSignal: android.os.CancellationSignal, uri: android.net.Uri): java.nio.ByteBuffer;
				public static copyToFile(file: java.io.File, res: android.content.res.Resources, id: number): boolean;
				public static readFontInfoIntoByteBuffer(context: android.content.Context, fonts: androidx.core.provider.FontsContractCompat.FontInfo[], cancellationSignal: android.os.CancellationSignal): java.util.Map<android.net.Uri,java.nio.ByteBuffer>;
				public static copyToDirectBuffer(context: android.content.Context, res: android.content.res.Resources, id: number): java.nio.ByteBuffer;
				public static getTempFile(context: android.content.Context): java.io.File;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export class DrawableCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.graphics.drawable.DrawableCompat>;
					public static setHotspotBounds(drawable: android.graphics.drawable.Drawable, left: number, top: number, right: number, bottom: number): void;
					public static getColorFilter(drawable: android.graphics.drawable.Drawable): android.graphics.ColorFilter;
					public static setLayoutDirection(drawable: android.graphics.drawable.Drawable, layoutDirection: number): boolean;
					public static getAlpha(drawable: android.graphics.drawable.Drawable): number;
					public static canApplyTheme(drawable: android.graphics.drawable.Drawable): boolean;
					public static clearColorFilter(drawable: android.graphics.drawable.Drawable): void;
					public static setHotspot(drawable: android.graphics.drawable.Drawable, x: number, y: number): void;
					public static isAutoMirrored(drawable: android.graphics.drawable.Drawable): boolean;
					public static getLayoutDirection(drawable: android.graphics.drawable.Drawable): number;
					public static setAutoMirrored(drawable: android.graphics.drawable.Drawable, mirrored: boolean): void;
					public static setTintList(drawable: android.graphics.drawable.Drawable, tint: android.content.res.ColorStateList): void;
					public static applyTheme(drawable: android.graphics.drawable.Drawable, theme: android.content.res.Resources.Theme): void;
					/** @deprecated */
					public static jumpToCurrentState(drawable: android.graphics.drawable.Drawable): void;
					public static setTint(drawable: android.graphics.drawable.Drawable, tint: number): void;
					public static unwrap(drawable: android.graphics.drawable.Drawable): android.graphics.drawable.Drawable;
					public static inflate(drawable: android.graphics.drawable.Drawable, res: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): void;
					public static setTintMode(drawable: android.graphics.drawable.Drawable, tintMode: android.graphics.PorterDuff.Mode): void;
					public static wrap(drawable: android.graphics.drawable.Drawable): android.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export class IconCompat extends androidx.versionedparcelable.CustomVersionedParcelable {
					public static class: java.lang.Class<androidx.core.graphics.drawable.IconCompat>;
					public static TYPE_UNKNOWN: number;
					public static TYPE_BITMAP: number;
					public static TYPE_RESOURCE: number;
					public static TYPE_DATA: number;
					public static TYPE_URI: number;
					public static TYPE_ADAPTIVE_BITMAP: number;
					public static TYPE_URI_ADAPTIVE_BITMAP: number;
					public mType: number;
					public mData: number[];
					public mParcelable: android.os.Parcelable;
					public mInt1: number;
					public mInt2: number;
					public mTintList: android.content.res.ColorStateList;
					public mTintModeStr: string;
					public mString1: string;
					public getType(): number;
					public static createWithResource(r: android.content.res.Resources, pkg: string, resId: number): androidx.core.graphics.drawable.IconCompat;
					public setTintList(tintList: android.content.res.ColorStateList): androidx.core.graphics.drawable.IconCompat;
					public getUri(): android.net.Uri;
					public getBitmap(): android.graphics.Bitmap;
					public toIcon(context: android.content.Context): any;
					public toBundle(): android.os.Bundle;
					public static createFromIcon(context: android.content.Context, icon: any): androidx.core.graphics.drawable.IconCompat;
					public getResId(): number;
					public static createWithData(data: number[], offset: number, length: number): androidx.core.graphics.drawable.IconCompat;
					public toString(): string;
					public constructor();
					public checkResource(context: android.content.Context): void;
					public onPreParceling(param0: boolean): void;
					public static createWithAdaptiveBitmap(bits: android.graphics.Bitmap): androidx.core.graphics.drawable.IconCompat;
					/** @deprecated */
					public toIcon(): any;
					public getResPackage(): string;
					public static createFromBundle(bundle: android.os.Bundle): androidx.core.graphics.drawable.IconCompat;
					public getUriInputStream(context: android.content.Context): java.io.InputStream;
					public static createWithBitmap(bits: android.graphics.Bitmap): androidx.core.graphics.drawable.IconCompat;
					public static createWithContentUri(uri: string): androidx.core.graphics.drawable.IconCompat;
					public static createWithAdaptiveBitmapContentUri(uri: string): androidx.core.graphics.drawable.IconCompat;
					public static createFromIcon(icon: any): androidx.core.graphics.drawable.IconCompat;
					public loadDrawable(context: android.content.Context): android.graphics.drawable.Drawable;
					public static createWithContentUri(uri: android.net.Uri): androidx.core.graphics.drawable.IconCompat;
					public addToShortcutIntent(outIntent: android.content.Intent, badge: android.graphics.drawable.Drawable, c: android.content.Context): void;
					public onPreParceling(isStream: boolean): void;
					public static createFromIconOrNullIfZeroResId(icon: any): androidx.core.graphics.drawable.IconCompat;
					public static createWithResource(context: android.content.Context, resId: number): androidx.core.graphics.drawable.IconCompat;
					public setTint(tint: number): androidx.core.graphics.drawable.IconCompat;
					public setTintMode(mode: android.graphics.PorterDuff.Mode): androidx.core.graphics.drawable.IconCompat;
					public onPostParceling(): void;
					public static createWithAdaptiveBitmapContentUri(uri: android.net.Uri): androidx.core.graphics.drawable.IconCompat;
				}
				export module IconCompat {
					export class IconType extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.core.graphics.drawable.IconCompat.IconType>;
						/**
						 * Constructs a new instance of the androidx.core.graphics.drawable.IconCompat$IconType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export class IconCompatParcelizer extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.graphics.drawable.IconCompatParcelizer>;
					public static read(parcel: androidx.versionedparcelable.VersionedParcel): androidx.core.graphics.drawable.IconCompat;
					public constructor();
					public static write(obj: androidx.core.graphics.drawable.IconCompat, parcel: androidx.versionedparcelable.VersionedParcel): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export abstract class RoundedBitmapDrawable extends android.graphics.drawable.Drawable {
					public static class: java.lang.Class<androidx.core.graphics.drawable.RoundedBitmapDrawable>;
					public setMipMap(mipMap: boolean): void;
					public getGravity(): number;
					public getPaint(): android.graphics.Paint;
					public hasAntiAlias(): boolean;
					public getBitmap(): android.graphics.Bitmap;
					public getCornerRadius(): number;
					public setDither(dither: boolean): void;
					public getIntrinsicWidth(): number;
					public setColorFilter(param0: android.graphics.ColorFilter): void;
					public setTargetDensity(metrics: android.util.DisplayMetrics): void;
					public onBoundsChange(bounds: android.graphics.Rect): void;
					public setTargetDensity(density: number): void;
					public setAntiAlias(aa: boolean): void;
					public draw(canvas: android.graphics.Canvas): void;
					public setTargetDensity(canvas: android.graphics.Canvas): void;
					public draw(param0: android.graphics.Canvas): void;
					public getOpacity(): number;
					public getAlpha(): number;
					public getColorFilter(): android.graphics.ColorFilter;
					public setColorFilter(color: number, mode: android.graphics.PorterDuff.Mode): void;
					public setFilterBitmap(filter: boolean): void;
					/** @deprecated */
					public setDither(dither: boolean): void;
					public getIntrinsicHeight(): number;
					public setCircular(circular: boolean): void;
					public setAlpha(param0: number): void;
					public setGravity(gravity: number): void;
					public setCornerRadius(cornerRadius: number): void;
					public setColorFilter(cf: android.graphics.ColorFilter): void;
					public setAlpha(alpha: number): void;
					public hasMipMap(): boolean;
					public isCircular(): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export class RoundedBitmapDrawable21 extends androidx.core.graphics.drawable.RoundedBitmapDrawable {
					public static class: java.lang.Class<androidx.core.graphics.drawable.RoundedBitmapDrawable21>;
					public setMipMap(mipMap: boolean): void;
					public constructor();
					public getOutline(outline: any): void;
					public hasMipMap(): boolean;
					public constructor(res: android.content.res.Resources, bitmap: android.graphics.Bitmap);
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export class RoundedBitmapDrawableFactory extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.graphics.drawable.RoundedBitmapDrawableFactory>;
					public static create(res: android.content.res.Resources, bitmap: android.graphics.Bitmap): androidx.core.graphics.drawable.RoundedBitmapDrawable;
					public static create(res: android.content.res.Resources, filepath: string): androidx.core.graphics.drawable.RoundedBitmapDrawable;
					public static create(res: android.content.res.Resources, is: java.io.InputStream): androidx.core.graphics.drawable.RoundedBitmapDrawable;
				}
				export module RoundedBitmapDrawableFactory {
					export class DefaultRoundedBitmapDrawable extends androidx.core.graphics.drawable.RoundedBitmapDrawable {
						public static class: java.lang.Class<androidx.core.graphics.drawable.RoundedBitmapDrawableFactory.DefaultRoundedBitmapDrawable>;
						public hasMipMap(): boolean;
						public setMipMap(mipMap: boolean): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export class TintAwareDrawable extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.graphics.drawable.TintAwareDrawable>;
					/**
					 * Constructs a new instance of the androidx.core.graphics.drawable.TintAwareDrawable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setTint(param0: number): void;
						setTintList(param0: android.content.res.ColorStateList): void;
						setTintMode(param0: android.graphics.PorterDuff.Mode): void;
					});
					public constructor();
					public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public setTintList(param0: android.content.res.ColorStateList): void;
					public setTint(param0: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export class WrappedDrawable extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.graphics.drawable.WrappedDrawable>;
					/**
					 * Constructs a new instance of the androidx.core.graphics.drawable.WrappedDrawable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getWrappedDrawable(): android.graphics.drawable.Drawable;
						setWrappedDrawable(param0: android.graphics.drawable.Drawable): void;
					});
					public constructor();
					public getWrappedDrawable(): android.graphics.drawable.Drawable;
					public setWrappedDrawable(param0: android.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export class WrappedDrawableApi14 extends android.graphics.drawable.Drawable implements android.graphics.drawable.Drawable.Callback, androidx.core.graphics.drawable.WrappedDrawable, androidx.core.graphics.drawable.TintAwareDrawable {
					public static class: java.lang.Class<androidx.core.graphics.drawable.WrappedDrawableApi14>;
					public getMinimumWidth(): number;
					public isCompatTintEnabled(): boolean;
					public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public getIntrinsicWidth(): number;
					public setColorFilter(param0: android.graphics.ColorFilter): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onBoundsChange(bounds: android.graphics.Rect): void;
					public setAutoMirrored(mirrored: boolean): void;
					public getPadding(padding: android.graphics.Rect): boolean;
					public getMinimumHeight(): number;
					public setChangingConfigurations(configs: number): void;
					public setState(stateSet: number[]): boolean;
					public setTint(param0: number): void;
					public getOpacity(): number;
					public getCurrent(): android.graphics.drawable.Drawable;
					public setTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
					public getLayoutDirection(): number;
					/** @deprecated */
					public setDither(dither: boolean): void;
					public setAlpha(param0: number): void;
					public getWrappedDrawable(): android.graphics.drawable.Drawable;
					public isAutoMirrored(): boolean;
					public mutate(): android.graphics.drawable.Drawable;
					public setWrappedDrawable(dr: android.graphics.drawable.Drawable): void;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public getState(): number[];
					public onLevelChange(level: number): boolean;
					public isStateful(): boolean;
					public setDither(dither: boolean): void;
					public setTint(tintColor: number): void;
					public onLayoutDirectionChanged(layoutDirection: number): boolean;
					public setWrappedDrawable(param0: android.graphics.drawable.Drawable): void;
					public getChangingConfigurations(): number;
					public draw(canvas: android.graphics.Canvas): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public draw(param0: android.graphics.Canvas): void;
					public getConstantState(): android.graphics.drawable.Drawable.ConstantState;
					public getTransparentRegion(): android.graphics.Region;
					public setColorFilter(color: number, mode: android.graphics.PorterDuff.Mode): void;
					public jumpToCurrentState(): void;
					public setFilterBitmap(filter: boolean): void;
					public setTint(tint: number): void;
					public getIntrinsicHeight(): number;
					public invalidateDrawable(who: android.graphics.drawable.Drawable): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public setVisible(visible: boolean, restart: boolean): boolean;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public setTintList(tint: android.content.res.ColorStateList): void;
					public setColorFilter(cf: android.graphics.ColorFilter): void;
					public setAlpha(alpha: number): void;
					public setTintList(param0: android.content.res.ColorStateList): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export class WrappedDrawableApi21 extends androidx.core.graphics.drawable.WrappedDrawableApi14 {
					public static class: java.lang.Class<androidx.core.graphics.drawable.WrappedDrawableApi21>;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public setTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
					public isProjected(): boolean;
					public setTint(tint: number): void;
					public isCompatTintEnabled(): boolean;
					public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public invalidateDrawable(who: android.graphics.drawable.Drawable): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public setTint(tintColor: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public getWrappedDrawable(): android.graphics.drawable.Drawable;
					public setWrappedDrawable(param0: android.graphics.drawable.Drawable): void;
					public setHotspotBounds(left: number, top: number, right: number, bottom: number): void;
					public getDirtyBounds(): android.graphics.Rect;
					public setTintList(tint: android.content.res.ColorStateList): void;
					public getOutline(outline: any): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public setHotspot(x: number, y: number): void;
					public setTintList(param0: android.content.res.ColorStateList): void;
					public setWrappedDrawable(dr: android.graphics.drawable.Drawable): void;
					public setState(stateSet: number[]): boolean;
					public setTint(param0: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module graphics {
			export module drawable {
				export class WrappedDrawableState extends android.graphics.drawable.Drawable.ConstantState {
					public static class: java.lang.Class<androidx.core.graphics.drawable.WrappedDrawableState>;
					public getChangingConfigurations(): number;
					public newDrawable(): android.graphics.drawable.Drawable;
					public newDrawable(res: android.content.res.Resources, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					public newDrawable(res: android.content.res.Resources): android.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module hardware {
			export module display {
				export class DisplayManagerCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.hardware.display.DisplayManagerCompat>;
					public static DISPLAY_CATEGORY_PRESENTATION: string;
					public getDisplays(): android.view.Display[];
					public getDisplay(displayId: number): android.view.Display;
					public static getInstance(context: android.content.Context): androidx.core.hardware.display.DisplayManagerCompat;
					public getDisplays(category: string): android.view.Display[];
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module hardware {
			export module fingerprint {
				export class FingerprintManagerCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.hardware.fingerprint.FingerprintManagerCompat>;
					public hasEnrolledFingerprints(): boolean;
					public authenticate(crypto: androidx.core.hardware.fingerprint.FingerprintManagerCompat.CryptoObject, flags: number, cancel: androidx.core.os.CancellationSignal, callback: androidx.core.hardware.fingerprint.FingerprintManagerCompat.AuthenticationCallback, handler: android.os.Handler): void;
					public static from(context: android.content.Context): androidx.core.hardware.fingerprint.FingerprintManagerCompat;
					public isHardwareDetected(): boolean;
				}
				export module FingerprintManagerCompat {
					export abstract class AuthenticationCallback extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.hardware.fingerprint.FingerprintManagerCompat.AuthenticationCallback>;
						public onAuthenticationFailed(): void;
						public constructor();
						public onAuthenticationHelp(helpMsgId: number, helpString: string): void;
						public onAuthenticationSucceeded(result: androidx.core.hardware.fingerprint.FingerprintManagerCompat.AuthenticationResult): void;
						public onAuthenticationError(errMsgId: number, errString: string): void;
					}
					export class AuthenticationResult extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.hardware.fingerprint.FingerprintManagerCompat.AuthenticationResult>;
						public getCryptoObject(): androidx.core.hardware.fingerprint.FingerprintManagerCompat.CryptoObject;
						public constructor(crypto: androidx.core.hardware.fingerprint.FingerprintManagerCompat.CryptoObject);
					}
					export class CryptoObject extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.hardware.fingerprint.FingerprintManagerCompat.CryptoObject>;
						public getMac(): javax.crypto.Mac;
						public constructor(mac: javax.crypto.Mac);
						public getSignature(): java.security.Signature;
						public getCipher(): javax.crypto.Cipher;
						public constructor(signature: java.security.Signature);
						public constructor(cipher: javax.crypto.Cipher);
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module internal {
			export module view {
				export class SupportMenu extends java.lang.Object implements android.view.Menu {
					public static class: java.lang.Class<androidx.core.internal.view.SupportMenu>;
					/**
					 * Constructs a new instance of the androidx.core.internal.view.SupportMenu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setGroupDividerEnabled(param0: boolean): void;
						add(param0: string): android.view.MenuItem;
						add(param0: number): android.view.MenuItem;
						add(param0: number, param1: number, param2: number, param3: string): android.view.MenuItem;
						add(param0: number, param1: number, param2: number, param3: number): android.view.MenuItem;
						addSubMenu(param0: string): android.view.SubMenu;
						addSubMenu(param0: number): android.view.SubMenu;
						addSubMenu(param0: number, param1: number, param2: number, param3: string): android.view.SubMenu;
						addSubMenu(param0: number, param1: number, param2: number, param3: number): android.view.SubMenu;
						addIntentOptions(param0: number, param1: number, param2: number, param3: android.content.ComponentName, param4: android.content.Intent[], param5: android.content.Intent, param6: number, param7: android.view.MenuItem[]): number;
						removeItem(param0: number): void;
						removeGroup(param0: number): void;
						clear(): void;
						setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;
						setGroupVisible(param0: number, param1: boolean): void;
						setGroupEnabled(param0: number, param1: boolean): void;
						hasVisibleItems(): boolean;
						findItem(param0: number): android.view.MenuItem;
						size(): number;
						getItem(param0: number): android.view.MenuItem;
						close(): void;
						performShortcut(param0: number, param1: android.view.KeyEvent, param2: number): boolean;
						isShortcutKey(param0: number, param1: android.view.KeyEvent): boolean;
						performIdentifierAction(param0: number, param1: number): boolean;
						setQwertyMode(param0: boolean): void;
					});
					public constructor();
					public static FLAG_APPEND_TO_GROUP: number;
					public static FLAG_KEEP_OPEN_ON_SUBMENU_OPENED: number;
					public static FIRST: number;
					public static CATEGORY_ALTERNATIVE: number;
					public static FLAG_ALWAYS_PERFORM_CLOSE: number;
					public static CATEGORY_CONTAINER: number;
					public static CATEGORY_SECONDARY: number;
					public static CATEGORY_MASK: number;
					public static USER_SHIFT: number;
					public static SUPPORTED_MODIFIERS_MASK: number;
					public static NONE: number;
					public static USER_MASK: number;
					public static FLAG_PERFORM_NO_CLOSE: number;
					public static CATEGORY_SHIFT: number;
					public static CATEGORY_SYSTEM: number;
					public setGroupVisible(param0: number, param1: boolean): void;
					public add(param0: number, param1: number, param2: number, param3: number): android.view.MenuItem;
					public setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;
					public setQwertyMode(param0: boolean): void;
					public performIdentifierAction(param0: number, param1: number): boolean;
					public size(): number;
					public setGroupDividerEnabled(param0: boolean): void;
					public isShortcutKey(param0: number, param1: android.view.KeyEvent): boolean;
					public addSubMenu(param0: number, param1: number, param2: number, param3: string): android.view.SubMenu;
					public clear(): void;
					public findItem(param0: number): android.view.MenuItem;
					public close(): void;
					public add(param0: string): android.view.MenuItem;
					public performShortcut(param0: number, param1: android.view.KeyEvent, param2: number): boolean;
					public addIntentOptions(param0: number, param1: number, param2: number, param3: android.content.ComponentName, param4: android.content.Intent[], param5: android.content.Intent, param6: number, param7: android.view.MenuItem[]): number;
					public addSubMenu(param0: number, param1: number, param2: number, param3: number): android.view.SubMenu;
					public addSubMenu(param0: string): android.view.SubMenu;
					public removeGroup(param0: number): void;
					public getItem(param0: number): android.view.MenuItem;
					public add(param0: number, param1: number, param2: number, param3: string): android.view.MenuItem;
					public setGroupEnabled(param0: number, param1: boolean): void;
					public add(param0: number): android.view.MenuItem;
					public removeItem(param0: number): void;
					public addSubMenu(param0: number): android.view.SubMenu;
					public hasVisibleItems(): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module internal {
			export module view {
				export class SupportMenuItem extends java.lang.Object implements android.view.MenuItem {
					public static class: java.lang.Class<androidx.core.internal.view.SupportMenuItem>;
					/**
					 * Constructs a new instance of the androidx.core.internal.view.SupportMenuItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setShowAsAction(param0: number): void;
						setShowAsActionFlags(param0: number): android.view.MenuItem;
						setActionView(param0: android.view.View): android.view.MenuItem;
						setActionView(param0: number): android.view.MenuItem;
						getActionView(): android.view.View;
						setSupportActionProvider(param0: androidx.core.view.ActionProvider): androidx.core.internal.view.SupportMenuItem;
						getSupportActionProvider(): androidx.core.view.ActionProvider;
						expandActionView(): boolean;
						collapseActionView(): boolean;
						isActionViewExpanded(): boolean;
						setContentDescription(param0: string): androidx.core.internal.view.SupportMenuItem;
						getContentDescription(): string;
						setTooltipText(param0: string): androidx.core.internal.view.SupportMenuItem;
						getTooltipText(): string;
						setShortcut(param0: string, param1: string, param2: number, param3: number): android.view.MenuItem;
						setNumericShortcut(param0: string, param1: number): android.view.MenuItem;
						getNumericModifiers(): number;
						setAlphabeticShortcut(param0: string, param1: number): android.view.MenuItem;
						getAlphabeticModifiers(): number;
						setIconTintList(param0: android.content.res.ColorStateList): android.view.MenuItem;
						getIconTintList(): android.content.res.ColorStateList;
						setIconTintMode(param0: android.graphics.PorterDuff.Mode): android.view.MenuItem;
						getIconTintMode(): android.graphics.PorterDuff.Mode;
						requiresActionButton(): boolean;
						requiresOverflow(): boolean;
						setTooltipText(param0: string): android.view.MenuItem;
						setContentDescription(param0: string): android.view.MenuItem;
						getItemId(): number;
						getGroupId(): number;
						getOrder(): number;
						setTitle(param0: string): android.view.MenuItem;
						setTitle(param0: number): android.view.MenuItem;
						getTitle(): string;
						setTitleCondensed(param0: string): android.view.MenuItem;
						getTitleCondensed(): string;
						setIcon(param0: android.graphics.drawable.Drawable): android.view.MenuItem;
						setIcon(param0: number): android.view.MenuItem;
						getIcon(): android.graphics.drawable.Drawable;
						setIntent(param0: android.content.Intent): android.view.MenuItem;
						getIntent(): android.content.Intent;
						setShortcut(param0: string, param1: string): android.view.MenuItem;
						setNumericShortcut(param0: string): android.view.MenuItem;
						getNumericShortcut(): string;
						setAlphabeticShortcut(param0: string): android.view.MenuItem;
						getAlphabeticShortcut(): string;
						setCheckable(param0: boolean): android.view.MenuItem;
						isCheckable(): boolean;
						setChecked(param0: boolean): android.view.MenuItem;
						isChecked(): boolean;
						setVisible(param0: boolean): android.view.MenuItem;
						isVisible(): boolean;
						setEnabled(param0: boolean): android.view.MenuItem;
						isEnabled(): boolean;
						hasSubMenu(): boolean;
						getSubMenu(): android.view.SubMenu;
						setOnMenuItemClickListener(param0: android.view.MenuItem.OnMenuItemClickListener): android.view.MenuItem;
						getMenuInfo(): android.view.ContextMenu.ContextMenuInfo;
						setShowAsAction(param0: number): void;
						setShowAsActionFlags(param0: number): android.view.MenuItem;
						setActionView(param0: android.view.View): android.view.MenuItem;
						setActionView(param0: number): android.view.MenuItem;
						getActionView(): android.view.View;
						setActionProvider(param0: android.view.ActionProvider): android.view.MenuItem;
						getActionProvider(): android.view.ActionProvider;
						expandActionView(): boolean;
						collapseActionView(): boolean;
						isActionViewExpanded(): boolean;
						setOnActionExpandListener(param0: android.view.MenuItem.OnActionExpandListener): android.view.MenuItem;
					});
					public constructor();
					public static SHOW_AS_ACTION_WITH_TEXT: number;
					public static SHOW_AS_ACTION_ALWAYS: number;
					public static SHOW_AS_ACTION_NEVER: number;
					public static SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW: number;
					public static SHOW_AS_ACTION_IF_ROOM: number;
					public getTitle(): string;
					public setAlphabeticShortcut(param0: string): android.view.MenuItem;
					public getGroupId(): number;
					public hasSubMenu(): boolean;
					public setChecked(param0: boolean): android.view.MenuItem;
					public getContentDescription(): string;
					public setTitleCondensed(param0: string): android.view.MenuItem;
					public getIntent(): android.content.Intent;
					public setTooltipText(param0: string): androidx.core.internal.view.SupportMenuItem;
					public getTitleCondensed(): string;
					public setShortcut(param0: string, param1: string, param2: number, param3: number): android.view.MenuItem;
					public isEnabled(): boolean;
					public getSupportActionProvider(): androidx.core.view.ActionProvider;
					public setNumericShortcut(param0: string, param1: number): android.view.MenuItem;
					public setIntent(param0: android.content.Intent): android.view.MenuItem;
					public requiresActionButton(): boolean;
					public getIcon(): android.graphics.drawable.Drawable;
					public getIconTintMode(): android.graphics.PorterDuff.Mode;
					public setIcon(param0: android.graphics.drawable.Drawable): android.view.MenuItem;
					public setShowAsActionFlags(param0: number): android.view.MenuItem;
					public setSupportActionProvider(param0: androidx.core.view.ActionProvider): androidx.core.internal.view.SupportMenuItem;
					public getNumericModifiers(): number;
					public isVisible(): boolean;
					public setIcon(param0: number): android.view.MenuItem;
					public getActionProvider(): android.view.ActionProvider;
					public getAlphabeticModifiers(): number;
					public collapseActionView(): boolean;
					public getTooltipText(): string;
					public setActionView(param0: android.view.View): android.view.MenuItem;
					public setIconTintMode(param0: android.graphics.PorterDuff.Mode): android.view.MenuItem;
					public setIconTintList(param0: android.content.res.ColorStateList): android.view.MenuItem;
					public expandActionView(): boolean;
					public getNumericShortcut(): string;
					public isActionViewExpanded(): boolean;
					public requiresOverflow(): boolean;
					public setTitle(param0: string): android.view.MenuItem;
					public setEnabled(param0: boolean): android.view.MenuItem;
					public getAlphabeticShortcut(): string;
					public setAlphabeticShortcut(param0: string, param1: number): android.view.MenuItem;
					public setShowAsAction(param0: number): void;
					public setCheckable(param0: boolean): android.view.MenuItem;
					public getOrder(): number;
					public setOnActionExpandListener(param0: android.view.MenuItem.OnActionExpandListener): android.view.MenuItem;
					public setShortcut(param0: string, param1: string): android.view.MenuItem;
					public setContentDescription(param0: string): androidx.core.internal.view.SupportMenuItem;
					public setNumericShortcut(param0: string): android.view.MenuItem;
					public isCheckable(): boolean;
					public getMenuInfo(): android.view.ContextMenu.ContextMenuInfo;
					public isChecked(): boolean;
					public setVisible(param0: boolean): android.view.MenuItem;
					public getItemId(): number;
					public setOnMenuItemClickListener(param0: android.view.MenuItem.OnMenuItemClickListener): android.view.MenuItem;
					public setActionView(param0: number): android.view.MenuItem;
					public setTitle(param0: number): android.view.MenuItem;
					public getIconTintList(): android.content.res.ColorStateList;
					public getActionView(): android.view.View;
					public getSubMenu(): android.view.SubMenu;
					public setActionProvider(param0: android.view.ActionProvider): android.view.MenuItem;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module internal {
			export module view {
				export class SupportSubMenu extends java.lang.Object implements androidx.core.internal.view.SupportMenu, android.view.SubMenu {
					public static class: java.lang.Class<androidx.core.internal.view.SupportSubMenu>;
					/**
					 * Constructs a new instance of the androidx.core.internal.view.SupportSubMenu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setGroupDividerEnabled(param0: boolean): void;
						setHeaderTitle(param0: number): android.view.SubMenu;
						setHeaderTitle(param0: string): android.view.SubMenu;
						setHeaderIcon(param0: number): android.view.SubMenu;
						setHeaderIcon(param0: android.graphics.drawable.Drawable): android.view.SubMenu;
						setHeaderView(param0: android.view.View): android.view.SubMenu;
						clearHeader(): void;
						setIcon(param0: number): android.view.SubMenu;
						setIcon(param0: android.graphics.drawable.Drawable): android.view.SubMenu;
						getItem(): android.view.MenuItem;
						add(param0: string): android.view.MenuItem;
						add(param0: number): android.view.MenuItem;
						add(param0: number, param1: number, param2: number, param3: string): android.view.MenuItem;
						add(param0: number, param1: number, param2: number, param3: number): android.view.MenuItem;
						addSubMenu(param0: string): android.view.SubMenu;
						addSubMenu(param0: number): android.view.SubMenu;
						addSubMenu(param0: number, param1: number, param2: number, param3: string): android.view.SubMenu;
						addSubMenu(param0: number, param1: number, param2: number, param3: number): android.view.SubMenu;
						addIntentOptions(param0: number, param1: number, param2: number, param3: android.content.ComponentName, param4: android.content.Intent[], param5: android.content.Intent, param6: number, param7: android.view.MenuItem[]): number;
						removeItem(param0: number): void;
						removeGroup(param0: number): void;
						clear(): void;
						setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;
						setGroupVisible(param0: number, param1: boolean): void;
						setGroupEnabled(param0: number, param1: boolean): void;
						hasVisibleItems(): boolean;
						findItem(param0: number): android.view.MenuItem;
						size(): number;
						getItem(param0: number): android.view.MenuItem;
						close(): void;
						performShortcut(param0: number, param1: android.view.KeyEvent, param2: number): boolean;
						isShortcutKey(param0: number, param1: android.view.KeyEvent): boolean;
						performIdentifierAction(param0: number, param1: number): boolean;
						setQwertyMode(param0: boolean): void;
						add(param0: string): android.view.MenuItem;
						add(param0: number): android.view.MenuItem;
						add(param0: number, param1: number, param2: number, param3: string): android.view.MenuItem;
						add(param0: number, param1: number, param2: number, param3: number): android.view.MenuItem;
						addSubMenu(param0: string): android.view.SubMenu;
						addSubMenu(param0: number): android.view.SubMenu;
						addSubMenu(param0: number, param1: number, param2: number, param3: string): android.view.SubMenu;
						addSubMenu(param0: number, param1: number, param2: number, param3: number): android.view.SubMenu;
						addIntentOptions(param0: number, param1: number, param2: number, param3: android.content.ComponentName, param4: android.content.Intent[], param5: android.content.Intent, param6: number, param7: android.view.MenuItem[]): number;
						removeItem(param0: number): void;
						removeGroup(param0: number): void;
						clear(): void;
						setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;
						setGroupVisible(param0: number, param1: boolean): void;
						setGroupEnabled(param0: number, param1: boolean): void;
						hasVisibleItems(): boolean;
						findItem(param0: number): android.view.MenuItem;
						size(): number;
						getItem(param0: number): android.view.MenuItem;
						close(): void;
						performShortcut(param0: number, param1: android.view.KeyEvent, param2: number): boolean;
						isShortcutKey(param0: number, param1: android.view.KeyEvent): boolean;
						performIdentifierAction(param0: number, param1: number): boolean;
						setQwertyMode(param0: boolean): void;
					});
					public constructor();
					public static FLAG_APPEND_TO_GROUP: number;
					public static FLAG_KEEP_OPEN_ON_SUBMENU_OPENED: number;
					public static FIRST: number;
					public static CATEGORY_ALTERNATIVE: number;
					public static FLAG_ALWAYS_PERFORM_CLOSE: number;
					public static CATEGORY_CONTAINER: number;
					public static CATEGORY_SECONDARY: number;
					public static CATEGORY_MASK: number;
					public static USER_SHIFT: number;
					public static SUPPORTED_MODIFIERS_MASK: number;
					public static NONE: number;
					public static USER_MASK: number;
					public static FLAG_PERFORM_NO_CLOSE: number;
					public static CATEGORY_SHIFT: number;
					public static CATEGORY_SYSTEM: number;
					public setGroupVisible(param0: number, param1: boolean): void;
					public add(param0: number, param1: number, param2: number, param3: number): android.view.MenuItem;
					public setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;
					public setQwertyMode(param0: boolean): void;
					public performIdentifierAction(param0: number, param1: number): boolean;
					public setHeaderIcon(param0: android.graphics.drawable.Drawable): android.view.SubMenu;
					public size(): number;
					public setGroupDividerEnabled(param0: boolean): void;
					public isShortcutKey(param0: number, param1: android.view.KeyEvent): boolean;
					public setIcon(param0: android.graphics.drawable.Drawable): android.view.SubMenu;
					public addSubMenu(param0: number, param1: number, param2: number, param3: string): android.view.SubMenu;
					public clear(): void;
					public findItem(param0: number): android.view.MenuItem;
					public close(): void;
					public add(param0: string): android.view.MenuItem;
					public getItem(): android.view.MenuItem;
					public performShortcut(param0: number, param1: android.view.KeyEvent, param2: number): boolean;
					public addIntentOptions(param0: number, param1: number, param2: number, param3: android.content.ComponentName, param4: android.content.Intent[], param5: android.content.Intent, param6: number, param7: android.view.MenuItem[]): number;
					public addSubMenu(param0: number, param1: number, param2: number, param3: number): android.view.SubMenu;
					public setHeaderIcon(param0: number): android.view.SubMenu;
					public setHeaderView(param0: android.view.View): android.view.SubMenu;
					public addSubMenu(param0: string): android.view.SubMenu;
					public clearHeader(): void;
					public setIcon(param0: number): android.view.SubMenu;
					public removeGroup(param0: number): void;
					public getItem(param0: number): android.view.MenuItem;
					public add(param0: number, param1: number, param2: number, param3: string): android.view.MenuItem;
					public setGroupEnabled(param0: number, param1: boolean): void;
					public setHeaderTitle(param0: number): android.view.SubMenu;
					public setHeaderTitle(param0: string): android.view.SubMenu;
					public add(param0: number): android.view.MenuItem;
					public removeItem(param0: number): void;
					public addSubMenu(param0: number): android.view.SubMenu;
					public hasVisibleItems(): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module location {
			export abstract class GnssStatusCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.location.GnssStatusCompat>;
				public static CONSTELLATION_UNKNOWN: number;
				public static CONSTELLATION_GPS: number;
				public static CONSTELLATION_SBAS: number;
				public static CONSTELLATION_GLONASS: number;
				public static CONSTELLATION_QZSS: number;
				public static CONSTELLATION_BEIDOU: number;
				public static CONSTELLATION_GALILEO: number;
				public static CONSTELLATION_IRNSS: number;
				public hasCarrierFrequencyHz(param0: number): boolean;
				public getAzimuthDegrees(param0: number): number;
				public hasBasebandCn0DbHz(param0: number): boolean;
				public hasAlmanacData(param0: number): boolean;
				public getElevationDegrees(param0: number): number;
				public getSatelliteCount(): number;
				public getConstellationType(param0: number): number;
				public getCarrierFrequencyHz(param0: number): number;
				public static wrap(gpsStatus: android.location.GpsStatus): androidx.core.location.GnssStatusCompat;
				public hasEphemerisData(param0: number): boolean;
				public getCn0DbHz(param0: number): number;
				public static wrap(gnssStatus: android.location.GnssStatus): androidx.core.location.GnssStatusCompat;
				public usedInFix(param0: number): boolean;
				public getSvid(param0: number): number;
				public getBasebandCn0DbHz(param0: number): number;
			}
			export module GnssStatusCompat {
				export abstract class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.location.GnssStatusCompat.Callback>;
					public onStopped(): void;
					public onSatelliteStatusChanged(status: androidx.core.location.GnssStatusCompat): void;
					public constructor();
					public onFirstFix(ttffMillis: number): void;
					public onStarted(): void;
				}
				export class ConstellationType extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.location.GnssStatusCompat.ConstellationType>;
					/**
					 * Constructs a new instance of the androidx.core.location.GnssStatusCompat$ConstellationType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
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

declare module androidx {
	export module core {
		export module location {
			export class GnssStatusWrapper extends androidx.core.location.GnssStatusCompat {
				public static class: java.lang.Class<androidx.core.location.GnssStatusWrapper>;
				public hasCarrierFrequencyHz(param0: number): boolean;
				public getAzimuthDegrees(param0: number): number;
				public hasBasebandCn0DbHz(param0: number): boolean;
				public hasBasebandCn0DbHz(satelliteIndex: number): boolean;
				public hasAlmanacData(param0: number): boolean;
				public getElevationDegrees(param0: number): number;
				public getSatelliteCount(): number;
				public getBasebandCn0DbHz(satelliteIndex: number): number;
				public getConstellationType(param0: number): number;
				public getCarrierFrequencyHz(param0: number): number;
				public hasEphemerisData(param0: number): boolean;
				public getCn0DbHz(param0: number): number;
				public getAzimuthDegrees(satelliteIndex: number): number;
				public hashCode(): number;
				public hasAlmanacData(satelliteIndex: number): boolean;
				public usedInFix(param0: number): boolean;
				public equals(o: any): boolean;
				public getSvid(param0: number): number;
				public getCarrierFrequencyHz(satelliteIndex: number): number;
				public hasEphemerisData(satelliteIndex: number): boolean;
				public usedInFix(satelliteIndex: number): boolean;
				public getConstellationType(satelliteIndex: number): number;
				public getCn0DbHz(satelliteIndex: number): number;
				public getSvid(satelliteIndex: number): number;
				public equals(obj: any): boolean;
				public getElevationDegrees(satelliteIndex: number): number;
				public hasCarrierFrequencyHz(satelliteIndex: number): boolean;
				public getBasebandCn0DbHz(param0: number): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module location {
			export class GpsStatusWrapper extends androidx.core.location.GnssStatusCompat {
				public static class: java.lang.Class<androidx.core.location.GpsStatusWrapper>;
				public hasCarrierFrequencyHz(param0: number): boolean;
				public getAzimuthDegrees(param0: number): number;
				public hasBasebandCn0DbHz(param0: number): boolean;
				public hasBasebandCn0DbHz(satelliteIndex: number): boolean;
				public hasAlmanacData(param0: number): boolean;
				public getElevationDegrees(param0: number): number;
				public getSatelliteCount(): number;
				public getBasebandCn0DbHz(satelliteIndex: number): number;
				public getConstellationType(param0: number): number;
				public getCarrierFrequencyHz(param0: number): number;
				public hasEphemerisData(param0: number): boolean;
				public getCn0DbHz(param0: number): number;
				public getAzimuthDegrees(satelliteIndex: number): number;
				public hashCode(): number;
				public hasAlmanacData(satelliteIndex: number): boolean;
				public usedInFix(param0: number): boolean;
				public equals(o: any): boolean;
				public getSvid(param0: number): number;
				public getCarrierFrequencyHz(satelliteIndex: number): number;
				public hasEphemerisData(satelliteIndex: number): boolean;
				public usedInFix(satelliteIndex: number): boolean;
				public getConstellationType(satelliteIndex: number): number;
				public getCn0DbHz(satelliteIndex: number): number;
				public getSvid(satelliteIndex: number): number;
				public equals(obj: any): boolean;
				public getElevationDegrees(satelliteIndex: number): number;
				public hasCarrierFrequencyHz(satelliteIndex: number): boolean;
				public getBasebandCn0DbHz(param0: number): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module location {
			export class LocationCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.location.LocationCompat>;
				public static EXTRA_IS_MOCK: string;
				public static EXTRA_VERTICAL_ACCURACY: string;
				public static EXTRA_SPEED_ACCURACY: string;
				public static EXTRA_BEARING_ACCURACY: string;
				public static hasVerticalAccuracy(location: android.location.Location): boolean;
				public static setSpeedAccuracyMetersPerSecond(location: android.location.Location, speedAccuracyMps: number): void;
				public static getElapsedRealtimeMillis(location: android.location.Location): number;
				public static setBearingAccuracyDegrees(location: android.location.Location, bearingAccuracyD: number): void;
				public static getElapsedRealtimeNanos(location: android.location.Location): number;
				public static hasSpeedAccuracy(location: android.location.Location): boolean;
				public static setVerticalAccuracyMeters(location: android.location.Location, verticalAccuracyM: number): void;
				public static hasBearingAccuracy(location: android.location.Location): boolean;
				public static isMock(location: android.location.Location): boolean;
				public static getSpeedAccuracyMetersPerSecond(location: android.location.Location): number;
				public static getVerticalAccuracyMeters(location: android.location.Location): number;
				public static getBearingAccuracyDegrees(location: android.location.Location): number;
				public static setMock(location: android.location.Location, mock: boolean): void;
			}
			export module LocationCompat {
				export class Api17Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.location.LocationCompat.Api17Impl>;
				}
				export class Api18Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.location.LocationCompat.Api18Impl>;
				}
				export class Api26Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.location.LocationCompat.Api26Impl>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module location {
			export class LocationListenerCompat extends java.lang.Object implements android.location.LocationListener {
				public static class: java.lang.Class<androidx.core.location.LocationListenerCompat>;
				/**
				 * Constructs a new instance of the androidx.core.location.LocationListenerCompat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onStatusChanged(provider: string, status: number, extras: android.os.Bundle): void;
					onProviderEnabled(provider: string): void;
					onProviderDisabled(provider: string): void;
					onLocationChanged(param0: android.location.Location): void;
					onStatusChanged(param0: string, param1: number, param2: android.os.Bundle): void;
					onProviderEnabled(param0: string): void;
					onProviderDisabled(param0: string): void;
				});
				public constructor();
				public onStatusChanged(param0: string, param1: number, param2: android.os.Bundle): void;
				public onProviderEnabled(provider: string): void;
				public onProviderEnabled(param0: string): void;
				public onProviderDisabled(param0: string): void;
				public onLocationChanged(param0: android.location.Location): void;
				public onProviderDisabled(provider: string): void;
				public onStatusChanged(provider: string, status: number, extras: android.os.Bundle): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module location {
			export class LocationManagerCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.location.LocationManagerCompat>;
				public static hasProvider(locationManager: android.location.LocationManager, provider: string): boolean;
				public static requestLocationUpdates(locationManager: android.location.LocationManager, provider: string, locationRequest: androidx.core.location.LocationRequestCompat, executor: java.util.concurrent.Executor, listener: androidx.core.location.LocationListenerCompat): void;
				public static unregisterGnssStatusCallback(locationManager: android.location.LocationManager, callback: androidx.core.location.GnssStatusCompat.Callback): void;
				public static removeUpdates(locationManager: android.location.LocationManager, listener: androidx.core.location.LocationListenerCompat): void;
				public static registerGnssStatusCallback(locationManager: android.location.LocationManager, callback: androidx.core.location.GnssStatusCompat.Callback, handler: android.os.Handler): boolean;
				public static getCurrentLocation(locationManager: android.location.LocationManager, provider: string, cancellationSignal: androidx.core.os.CancellationSignal, executor: java.util.concurrent.Executor, consumer: androidx.core.util.Consumer<android.location.Location>): void;
				public static getGnssYearOfHardware(locationManager: android.location.LocationManager): number;
				public static registerGnssStatusCallback(locationManager: android.location.LocationManager, executor: java.util.concurrent.Executor, callback: androidx.core.location.GnssStatusCompat.Callback): boolean;
				public static getGnssHardwareModelName(locationManager: android.location.LocationManager): string;
				public static isLocationEnabled(locationManager: android.location.LocationManager): boolean;
				public static requestLocationUpdates(locationManager: android.location.LocationManager, provider: string, locationRequest: androidx.core.location.LocationRequestCompat, listener: androidx.core.location.LocationListenerCompat, looper: android.os.Looper): void;
			}
			export module LocationManagerCompat {
				export class Api28Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.location.LocationManagerCompat.Api28Impl>;
				}
				export class Api30Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.location.LocationManagerCompat.Api30Impl>;
				}
				export class Api31Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.location.LocationManagerCompat.Api31Impl>;
				}
				export class CancellableLocationListener extends java.lang.Object implements android.location.LocationListener {
					public static class: java.lang.Class<androidx.core.location.LocationManagerCompat.CancellableLocationListener>;
					public onProviderEnabled(provider: string): void;
					public onStatusChanged(provider: string, status: number, extras: android.os.Bundle): void;
					public onProviderDisabled(param0: string): void;
					public onLocationChanged(location: android.location.Location): void;
					public onProviderEnabled(param0: string): void;
					public cancel(): void;
					public onLocationChanged(param0: android.location.Location): void;
					public onStatusChanged(param0: string, param1: number, param2: android.os.Bundle): void;
					public startTimeout(timeoutMs: number): void;
					public onProviderDisabled(p: string): void;
				}
				export class GnssLazyLoader extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.location.LocationManagerCompat.GnssLazyLoader>;
				}
				export class GnssStatusTransport extends android.location.GnssStatus.Callback {
					public static class: java.lang.Class<androidx.core.location.LocationManagerCompat.GnssStatusTransport>;
					public onStopped(): void;
					public onFirstFix(ttffMillis: number): void;
					public onSatelliteStatusChanged(status: android.location.GnssStatus): void;
					public onStarted(): void;
				}
				export class GpsStatusTransport extends java.lang.Object implements android.location.GpsStatus.Listener {
					public static class: java.lang.Class<androidx.core.location.LocationManagerCompat.GpsStatusTransport>;
					public onGpsStatusChanged(event: number): void;
					public register(executor: java.util.concurrent.Executor): void;
					public unregister(): void;
					public onGpsStatusChanged(param0: number): void;
				}
				export class InlineHandlerExecutor extends java.lang.Object implements java.util.concurrent.Executor {
					public static class: java.lang.Class<androidx.core.location.LocationManagerCompat.InlineHandlerExecutor>;
					public execute(param0: java.lang.Runnable): void;
					public execute(command: java.lang.Runnable): void;
				}
				export class LocationListenerTransport extends java.lang.Object implements android.location.LocationListener {
					public static class: java.lang.Class<androidx.core.location.LocationManagerCompat.LocationListenerTransport>;
					public register(): void;
					public onProviderEnabled(provider: string): void;
					public onStatusChanged(provider: string, status: number, extras: android.os.Bundle): void;
					public onProviderDisabled(param0: string): void;
					public onLocationChanged(location: android.location.Location): void;
					public onFlushComplete(requestCode: number): void;
					public onProviderEnabled(param0: string): void;
					public onProviderDisabled(provider: string): void;
					public onLocationChanged(param0: android.location.Location): void;
					public onStatusChanged(param0: string, param1: number, param2: android.os.Bundle): void;
					public unregister(): boolean;
					public onLocationChanged(locations: java.util.List<android.location.Location>): void;
				}
				export class PreRGnssStatusTransport extends android.location.GnssStatus.Callback {
					public static class: java.lang.Class<androidx.core.location.LocationManagerCompat.PreRGnssStatusTransport>;
					public onStopped(): void;
					public onFirstFix(ttffMillis: number): void;
					public onSatelliteStatusChanged(status: android.location.GnssStatus): void;
					public register(executor: java.util.concurrent.Executor): void;
					public unregister(): void;
					public onStarted(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module location {
			export class LocationRequestCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.location.LocationRequestCompat>;
				public static PASSIVE_INTERVAL: number;
				public static QUALITY_HIGH_ACCURACY: number;
				public static QUALITY_BALANCED_POWER_ACCURACY: number;
				public static QUALITY_LOW_POWER: number;
				public getDurationMillis(): number;
				public getMaxUpdateDelayMillis(): number;
				public getIntervalMillis(): number;
				public getQuality(): number;
				public getMaxUpdates(): number;
				public getMinUpdateDistanceMeters(): number;
				public toString(): string;
				public toLocationRequest(provider: string): android.location.LocationRequest;
				public equals(obj: any): boolean;
				public getMinUpdateIntervalMillis(): number;
				public toLocationRequest(): android.location.LocationRequest;
				public hashCode(): number;
				public equals(o: any): boolean;
			}
			export module LocationRequestCompat {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.location.LocationRequestCompat.Builder>;
					public setDurationMillis(durationMillis: number): androidx.core.location.LocationRequestCompat.Builder;
					public setMaxUpdateDelayMillis(maxUpdateDelayMillis: number): androidx.core.location.LocationRequestCompat.Builder;
					public setIntervalMillis(intervalMillis: number): androidx.core.location.LocationRequestCompat.Builder;
					public setQuality(quality: number): androidx.core.location.LocationRequestCompat.Builder;
					public constructor(locationRequest: androidx.core.location.LocationRequestCompat);
					public clearMinUpdateIntervalMillis(): androidx.core.location.LocationRequestCompat.Builder;
					public constructor(intervalMillis: number);
					public setMaxUpdates(maxUpdates: number): androidx.core.location.LocationRequestCompat.Builder;
					public setMinUpdateIntervalMillis(minUpdateIntervalMillis: number): androidx.core.location.LocationRequestCompat.Builder;
					public setMinUpdateDistanceMeters(minUpdateDistanceMeters: number): androidx.core.location.LocationRequestCompat.Builder;
					public build(): androidx.core.location.LocationRequestCompat;
				}
				export class Quality extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.location.LocationRequestCompat.Quality>;
					/**
					 * Constructs a new instance of the androidx.core.location.LocationRequestCompat$Quality interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
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

declare module androidx {
	export module core {
		export module math {
			export class MathUtils extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.math.MathUtils>;
				public static clamp(value: number, min: number, max: number): number;
				public static clamp(value: number, param1: number, min: number): number;
				public static negateExact(a: number): number;
				public static subtractExact(x: number, param1: number): number;
				public static multiplyExact(x: number, y: number): number;
				public static addExact(x: number, y: number): number;
				public static toIntExact(value: number): number;
				public static incrementExact(a: number): number;
				public static decrementExact(a: number): number;
				public static addExact(x: number, param1: number): number;
				public static multiplyExact(x: number, param1: number): number;
				public static subtractExact(x: number, y: number): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module net {
			export class ConnectivityManagerCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.net.ConnectivityManagerCompat>;
				public static RESTRICT_BACKGROUND_STATUS_DISABLED: number;
				public static RESTRICT_BACKGROUND_STATUS_WHITELISTED: number;
				public static RESTRICT_BACKGROUND_STATUS_ENABLED: number;
				public static getRestrictBackgroundStatus(cm: android.net.ConnectivityManager): number;
				public static getNetworkInfoFromBroadcast(cm: android.net.ConnectivityManager, intent: android.content.Intent): android.net.NetworkInfo;
				public static isActiveNetworkMetered(cm: android.net.ConnectivityManager): boolean;
			}
			export module ConnectivityManagerCompat {
				export class RestrictBackgroundStatus extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.net.ConnectivityManagerCompat.RestrictBackgroundStatus>;
					/**
					 * Constructs a new instance of the androidx.core.net.ConnectivityManagerCompat$RestrictBackgroundStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
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

declare module androidx {
	export module core {
		export module net {
			export class DatagramSocketWrapper extends java.net.Socket {
				public static class: java.lang.Class<androidx.core.net.DatagramSocketWrapper>;
				public close(): void;
			}
			export module DatagramSocketWrapper {
				export class DatagramSocketImplWrapper extends java.net.SocketImpl {
					public static class: java.lang.Class<androidx.core.net.DatagramSocketWrapper.DatagramSocketImplWrapper>;
					public bind(address: java.net.InetAddress, port: number): void;
					public connect(host: string, port: number): void;
					public listen(param0: number): void;
					public getOption(optID: number): any;
					public setOption(optID: number, val: any): void;
					public listen(backlog: number): void;
					public connect(param0: java.net.InetAddress, param1: number): void;
					public bind(param0: java.net.InetAddress, param1: number): void;
					public connect(param0: java.net.SocketAddress, param1: number): void;
					public available(): number;
					public connect(address: java.net.InetAddress, port: number): void;
					public accept(param0: java.net.SocketImpl): void;
					public close(): void;
					public create(isStreaming: boolean): void;
					public getOption(param0: number): any;
					public connect(param0: string, param1: number): void;
					public create(param0: boolean): void;
					public getOutputStream(): java.io.OutputStream;
					public accept(newSocket: java.net.SocketImpl): void;
					public getInputStream(): java.io.InputStream;
					public sendUrgentData(param0: number): void;
					public setOption(param0: number, param1: any): void;
					public connect(remoteAddr: java.net.SocketAddress, timeout: number): void;
					public sendUrgentData(value: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module net {
			export class MailTo extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.net.MailTo>;
				public static MAILTO_SCHEME: string;
				public static isMailTo(uri: android.net.Uri): boolean;
				public getCc(): string;
				public getBody(): string;
				public static parse(uri: string): androidx.core.net.MailTo;
				public static parse(uri: android.net.Uri): androidx.core.net.MailTo;
				public getHeaders(): java.util.Map<string,string>;
				public getBcc(): string;
				public getTo(): string;
				public static isMailTo(uri: string): boolean;
				public getSubject(): string;
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module net {
			export class ParseException extends java.lang.RuntimeException {
				public static class: java.lang.Class<androidx.core.net.ParseException>;
				public response: string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module net {
			export class TrafficStatsCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.net.TrafficStatsCompat>;
				/** @deprecated */
				public static clearThreadStatsTag(): void;
				/** @deprecated */
				public static tagSocket(socket: java.net.Socket): void;
				/** @deprecated */
				public static incrementOperationCount(tag: number, operationCount: number): void;
				/** @deprecated */
				public static setThreadStatsTag(tag: number): void;
				/** @deprecated */
				public static getThreadStatsTag(): number;
				/** @deprecated */
				public static untagSocket(socket: java.net.Socket): void;
				public static tagDatagramSocket(socket: java.net.DatagramSocket): void;
				public static untagDatagramSocket(socket: java.net.DatagramSocket): void;
				/** @deprecated */
				public static incrementOperationCount(operationCount: number): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module net {
			export class UriCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.net.UriCompat>;
				public static toSafeString(uri: android.net.Uri): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class BuildCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.os.BuildCompat>;
				/** @deprecated */
				public static isAtLeastQ(): boolean;
				public static isAtLeastS(): boolean;
				public static isAtLeastT(): boolean;
				/** @deprecated */
				public static isAtLeastO(): boolean;
				/** @deprecated */
				public static isAtLeastNMR1(): boolean;
				/** @deprecated */
				public static isAtLeastR(): boolean;
				/** @deprecated */
				public static isAtLeastOMR1(): boolean;
				/** @deprecated */
				public static isAtLeastN(): boolean;
				public static isAtLeastPreReleaseCodename(codename: string, buildCodename: string): boolean;
				/** @deprecated */
				public static isAtLeastP(): boolean;
			}
			export module BuildCompat {
				export class PrereleaseSdkCheck extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.os.BuildCompat.PrereleaseSdkCheck>;
					/**
					 * Constructs a new instance of the androidx.core.os.BuildCompat$PrereleaseSdkCheck interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
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

declare module androidx {
	export module core {
		export module os {
			export class CancellationSignal extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.os.CancellationSignal>;
				public isCanceled(): boolean;
				public throwIfCanceled(): void;
				public getCancellationSignalObject(): any;
				public cancel(): void;
				public setOnCancelListener(listener: androidx.core.os.CancellationSignal.OnCancelListener): void;
				public constructor();
			}
			export module CancellationSignal {
				export class OnCancelListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.os.CancellationSignal.OnCancelListener>;
					/**
					 * Constructs a new instance of the androidx.core.os.CancellationSignal$OnCancelListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCancel(): void;
					});
					public constructor();
					public onCancel(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class ConfigurationCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.os.ConfigurationCompat>;
				public static getLocales(configuration: android.content.res.Configuration): androidx.core.os.LocaleListCompat;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class EnvironmentCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.os.EnvironmentCompat>;
				public static MEDIA_UNKNOWN: string;
				public static getStorageState(path: java.io.File): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class ExecutorCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.os.ExecutorCompat>;
				public static create(handler: android.os.Handler): java.util.concurrent.Executor;
			}
			export module ExecutorCompat {
				export class HandlerExecutor extends java.lang.Object implements java.util.concurrent.Executor {
					public static class: java.lang.Class<androidx.core.os.ExecutorCompat.HandlerExecutor>;
					public execute(param0: java.lang.Runnable): void;
					public execute(command: java.lang.Runnable): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class HandlerCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.os.HandlerCompat>;
				public static hasCallbacks(handler: android.os.Handler, r: java.lang.Runnable): boolean;
				public static postDelayed(handler: android.os.Handler, r: java.lang.Runnable, token: any, delayMillis: number): boolean;
				public static createAsync(looper: android.os.Looper): android.os.Handler;
				public static createAsync(looper: android.os.Looper, callback: android.os.Handler.Callback): android.os.Handler;
			}
			export module HandlerCompat {
				export class Api28Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.os.HandlerCompat.Api28Impl>;
					public static postDelayed(handler: android.os.Handler, r: java.lang.Runnable, token: any, delayMillis: number): boolean;
					public static createAsync(looper: android.os.Looper): android.os.Handler;
					public static createAsync(looper: android.os.Looper, callback: android.os.Handler.Callback): android.os.Handler;
				}
				export class Api29Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.os.HandlerCompat.Api29Impl>;
					public static hasCallbacks(handler: android.os.Handler, r: java.lang.Runnable): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class LocaleListCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.os.LocaleListCompat>;
				public indexOf(locale: java.util.Locale): number;
				public static forLanguageTags(list: string): androidx.core.os.LocaleListCompat;
				public toString(): string;
				public size(): number;
				public static getDefault(): androidx.core.os.LocaleListCompat;
				public static create(...localeList: java.util.Locale[]): androidx.core.os.LocaleListCompat;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public static wrap(localeList: any): androidx.core.os.LocaleListCompat;
				public get(index: number): java.util.Locale;
				public hashCode(): number;
				public toLanguageTags(): string;
				public static getEmptyLocaleList(): androidx.core.os.LocaleListCompat;
				/** @deprecated */
				public static wrap(localeList: any): androidx.core.os.LocaleListCompat;
				public getFirstMatch(supportedLocales: string[]): java.util.Locale;
				public isEmpty(): boolean;
				public static getAdjustedDefault(): androidx.core.os.LocaleListCompat;
				public unwrap(): any;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class LocaleListCompatWrapper extends java.lang.Object implements androidx.core.os.LocaleListInterface {
				public static class: java.lang.Class<androidx.core.os.LocaleListCompatWrapper>;
				public indexOf(locale: java.util.Locale): number;
				public indexOf(param0: java.util.Locale): number;
				public toString(): string;
				public size(): number;
				public get(param0: number): java.util.Locale;
				public getLocaleList(): any;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public get(index: number): java.util.Locale;
				public hashCode(): number;
				public getFirstMatch(param0: string[]): java.util.Locale;
				public toLanguageTags(): string;
				public getFirstMatch(supportedLocales: string[]): java.util.Locale;
				public isEmpty(): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class LocaleListInterface extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.os.LocaleListInterface>;
				/**
				 * Constructs a new instance of the androidx.core.os.LocaleListInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getLocaleList(): any;
					get(param0: number): java.util.Locale;
					isEmpty(): boolean;
					size(): number;
					indexOf(param0: java.util.Locale): number;
					toLanguageTags(): string;
					getFirstMatch(param0: string[]): java.util.Locale;
				});
				public constructor();
				public get(param0: number): java.util.Locale;
				public getLocaleList(): any;
				public indexOf(param0: java.util.Locale): number;
				public getFirstMatch(param0: string[]): java.util.Locale;
				public toLanguageTags(): string;
				public isEmpty(): boolean;
				public size(): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class LocaleListPlatformWrapper extends java.lang.Object implements androidx.core.os.LocaleListInterface {
				public static class: java.lang.Class<androidx.core.os.LocaleListPlatformWrapper>;
				public indexOf(locale: java.util.Locale): number;
				public indexOf(param0: java.util.Locale): number;
				public toString(): string;
				public size(): number;
				public get(param0: number): java.util.Locale;
				public getLocaleList(): any;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public get(index: number): java.util.Locale;
				public hashCode(): number;
				public getFirstMatch(param0: string[]): java.util.Locale;
				public toLanguageTags(): string;
				public getFirstMatch(supportedLocales: string[]): java.util.Locale;
				public isEmpty(): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class MessageCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.os.MessageCompat>;
				public static setAsynchronous(message: android.os.Message, async: boolean): void;
				public static isAsynchronous(message: android.os.Message): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class OperationCanceledException extends java.lang.RuntimeException {
				public static class: java.lang.Class<androidx.core.os.OperationCanceledException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class ParcelCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.os.ParcelCompat>;
				public static readBoolean(_in_: android.os.Parcel): boolean;
				public static writeBoolean(out: android.os.Parcel, value: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class ParcelableCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.os.ParcelableCompat>;
				/** @deprecated */
				public static newCreator(callbacks: androidx.core.os.ParcelableCompatCreatorCallbacks<any>): android.os.Parcelable.Creator<any>;
			}
			export module ParcelableCompat {
				export class ParcelableCompatCreatorHoneycombMR2<T>  extends android.os.Parcelable.ClassLoaderCreator<any> {
					public static class: java.lang.Class<androidx.core.os.ParcelableCompat.ParcelableCompatCreatorHoneycombMR2<any>>;
					public createFromParcel(_in_: android.os.Parcel): any;
					public createFromParcel(_in_: android.os.Parcel, loader: java.lang.ClassLoader): any;
					public createFromParcel(param0: android.os.Parcel): any;
					public newArray(param0: number): any[];
					public createFromParcel(param0: android.os.Parcel, param1: java.lang.ClassLoader): any;
					public newArray(size: number): any[];
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class ParcelableCompatCreatorCallbacks<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.os.ParcelableCompatCreatorCallbacks<any>>;
				/**
				 * Constructs a new instance of the androidx.core.os.ParcelableCompatCreatorCallbacks<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createFromParcel(param0: android.os.Parcel, param1: java.lang.ClassLoader): T;
					newArray(param0: number): T[];
				});
				public constructor();
				public newArray(param0: number): T[];
				public createFromParcel(param0: android.os.Parcel, param1: java.lang.ClassLoader): T;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class ProcessCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.os.ProcessCompat>;
				public static isApplicationUid(uid: number): boolean;
			}
			export module ProcessCompat {
				export class Api16Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.os.ProcessCompat.Api16Impl>;
				}
				export class Api17Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.os.ProcessCompat.Api17Impl>;
				}
				export class Api24Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.os.ProcessCompat.Api24Impl>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class TraceCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.os.TraceCompat>;
				public static endAsyncSection(methodName: string, cookie: number): void;
				public static isEnabled(): boolean;
				public static endSection(): void;
				public static setCounter(counterName: string, counterValue: number): void;
				public static beginAsyncSection(methodName: string, cookie: number): void;
				public static beginSection(sectionName: string): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class UserHandleCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.os.UserHandleCompat>;
				public static getUserHandleForUid(uid: number): android.os.UserHandle;
			}
			export module UserHandleCompat {
				export class Api24Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.os.UserHandleCompat.Api24Impl>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module os {
			export class UserManagerCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.os.UserManagerCompat>;
				public static isUserUnlocked(context: android.content.Context): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module provider {
			export class CallbackWithHandler extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.provider.CallbackWithHandler>;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module provider {
			export class CalleeHandler extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.provider.CalleeHandler>;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module provider {
			export class DocumentsContractCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.provider.DocumentsContractCompat>;
				public static buildTreeDocumentUri(authority: string, documentId: string): android.net.Uri;
				public static isTreeUri(uri: android.net.Uri): boolean;
				public static buildChildDocumentsUri(authority: string, parentDocumentId: string): android.net.Uri;
				public static createDocument(content: android.content.ContentResolver, parentDocumentUri: android.net.Uri, mimeType: string, displayName: string): android.net.Uri;
				public static buildDocumentUri(authority: string, documentId: string): android.net.Uri;
				public static buildChildDocumentsUriUsingTree(treeUri: android.net.Uri, parentDocumentId: string): android.net.Uri;
				public static isDocumentUri(context: android.content.Context, uri: android.net.Uri): boolean;
				public static getTreeDocumentId(documentUri: android.net.Uri): string;
				public static buildDocumentUriUsingTree(treeUri: android.net.Uri, documentId: string): android.net.Uri;
				public static getDocumentId(documentUri: android.net.Uri): string;
				public static renameDocument(content: android.content.ContentResolver, documentUri: android.net.Uri, displayName: string): android.net.Uri;
				public static removeDocument(content: android.content.ContentResolver, documentUri: android.net.Uri, parentDocumentUri: android.net.Uri): boolean;
			}
			export module DocumentsContractCompat {
				export class DocumentCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.provider.DocumentsContractCompat.DocumentCompat>;
					public static FLAG_VIRTUAL_DOCUMENT: number;
				}
				export class DocumentsContractApi19Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.provider.DocumentsContractCompat.DocumentsContractApi19Impl>;
					public static buildDocumentUri(authority: string, documentId: string): android.net.Uri;
				}
				export class DocumentsContractApi21Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.provider.DocumentsContractCompat.DocumentsContractApi21Impl>;
					public static buildTreeDocumentUri(authority: string, documentId: string): android.net.Uri;
				}
				export class DocumentsContractApi24Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.provider.DocumentsContractCompat.DocumentsContractApi24Impl>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module provider {
			export class FontProvider extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.provider.FontProvider>;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module provider {
			export class FontRequest extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.provider.FontRequest>;
				public constructor(providerAuthority: string, providerPackage: string, query: string, certificates: java.util.List<java.util.List<number[]>>);
				public constructor(providerAuthority: string, providerPackage: string, query: string, certificates: number);
				public getQuery(): string;
				public getCertificates(): java.util.List<java.util.List<number[]>>;
				public getCertificatesArrayResId(): number;
				public getProviderPackage(): string;
				public getProviderAuthority(): string;
				/** @deprecated */
				public getIdentifier(): string;
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module provider {
			export class FontRequestWorker extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.provider.FontRequestWorker>;
			}
			export module FontRequestWorker {
				export class TypefaceResult extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.provider.FontRequestWorker.TypefaceResult>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module provider {
			export class FontsContractCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.provider.FontsContractCompat>;
				public static PARCEL_FONT_RESULTS: string;
				public static resetTypefaceCache(): void;
				/** @deprecated */
				public static getFontSync(context: android.content.Context, request: androidx.core.provider.FontRequest, fontCallback: androidx.core.content.res.ResourcesCompat.FontCallback, handler: android.os.Handler, isBlockingFetch: boolean, timeout: number, style: number): android.graphics.Typeface;
				/** @deprecated */
				public static resetCache(): void;
				/** @deprecated */
				public static prepareFontData(context: android.content.Context, fonts: androidx.core.provider.FontsContractCompat.FontInfo[], cancellationSignal: android.os.CancellationSignal): java.util.Map<android.net.Uri,java.nio.ByteBuffer>;
				/** @deprecated */
				public static getProvider(packageManager: android.content.pm.PackageManager, request: androidx.core.provider.FontRequest, resources: android.content.res.Resources): android.content.pm.ProviderInfo;
				public static buildTypeface(context: android.content.Context, cancellationSignal: android.os.CancellationSignal, fonts: androidx.core.provider.FontsContractCompat.FontInfo[]): android.graphics.Typeface;
				public static fetchFonts(context: android.content.Context, cancellationSignal: android.os.CancellationSignal, request: androidx.core.provider.FontRequest): androidx.core.provider.FontsContractCompat.FontFamilyResult;
				public static requestFont(context: android.content.Context, request: androidx.core.provider.FontRequest, callback: androidx.core.provider.FontsContractCompat.FontRequestCallback, handler: android.os.Handler): void;
				public static requestFont(context: android.content.Context, request: androidx.core.provider.FontRequest, style: number, isBlockingFetch: boolean, timeout: number, handler: android.os.Handler, callback: androidx.core.provider.FontsContractCompat.FontRequestCallback): android.graphics.Typeface;
			}
			export module FontsContractCompat {
				export class Columns extends java.lang.Object implements android.provider.BaseColumns {
					public static class: java.lang.Class<androidx.core.provider.FontsContractCompat.Columns>;
					public static FILE_ID: string;
					public static TTC_INDEX: string;
					public static VARIATION_SETTINGS: string;
					public static WEIGHT: string;
					public static ITALIC: string;
					public static RESULT_CODE: string;
					public static RESULT_CODE_OK: number;
					public static RESULT_CODE_FONT_NOT_FOUND: number;
					public static RESULT_CODE_FONT_UNAVAILABLE: number;
					public static RESULT_CODE_MALFORMED_QUERY: number;
					public constructor();
				}
				export class FontFamilyResult extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.provider.FontsContractCompat.FontFamilyResult>;
					public static STATUS_OK: number;
					public static STATUS_WRONG_CERTIFICATES: number;
					public static STATUS_UNEXPECTED_DATA_PROVIDED: number;
					public getStatusCode(): number;
					/** @deprecated */
					public constructor(statusCode: number, fonts: androidx.core.provider.FontsContractCompat.FontInfo[]);
					public getFonts(): androidx.core.provider.FontsContractCompat.FontInfo[];
				}
				export class FontInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.provider.FontsContractCompat.FontInfo>;
					public getResultCode(): number;
					public getUri(): android.net.Uri;
					public getWeight(): number;
					public isItalic(): boolean;
					/** @deprecated */
					public constructor(uri: android.net.Uri, ttcIndex: number, weight: number, italic: boolean, resultCode: number);
					public getTtcIndex(): number;
				}
				export class FontRequestCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.provider.FontsContractCompat.FontRequestCallback>;
					public static RESULT_OK: number;
					public static FAIL_REASON_PROVIDER_NOT_FOUND: number;
					public static FAIL_REASON_WRONG_CERTIFICATES: number;
					public static FAIL_REASON_FONT_LOAD_ERROR: number;
					public static FAIL_REASON_SECURITY_VIOLATION: number;
					public static FAIL_REASON_FONT_NOT_FOUND: number;
					public static FAIL_REASON_FONT_UNAVAILABLE: number;
					public static FAIL_REASON_MALFORMED_QUERY: number;
					public constructor();
					public onTypefaceRequestFailed(reason: number): void;
					public onTypefaceRetrieved(typeface: android.graphics.Typeface): void;
				}
				export module FontRequestCallback {
					export class FontRequestFailReason extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.core.provider.FontsContractCompat.FontRequestCallback.FontRequestFailReason>;
						/**
						 * Constructs a new instance of the androidx.core.provider.FontsContractCompat$FontRequestCallback$FontRequestFailReason interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module provider {
			export class RequestExecutor extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.provider.RequestExecutor>;
			}
			export module RequestExecutor {
				export class DefaultThreadFactory extends java.lang.Object implements java.util.concurrent.ThreadFactory {
					public static class: java.lang.Class<androidx.core.provider.RequestExecutor.DefaultThreadFactory>;
					public newThread(param0: java.lang.Runnable): java.lang.Thread;
					public newThread(runnable: java.lang.Runnable): java.lang.Thread;
				}
				export module DefaultThreadFactory {
					export class ProcessPriorityThread extends java.lang.Thread {
						public static class: java.lang.Class<androidx.core.provider.RequestExecutor.DefaultThreadFactory.ProcessPriorityThread>;
						public run(): void;
					}
				}
				export class HandlerExecutor extends java.lang.Object implements java.util.concurrent.Executor {
					public static class: java.lang.Class<androidx.core.provider.RequestExecutor.HandlerExecutor>;
					public execute(param0: java.lang.Runnable): void;
					public execute(command: java.lang.Runnable): void;
				}
				export class ReplyRunnable<T>  extends java.lang.Runnable {
					public static class: java.lang.Class<androidx.core.provider.RequestExecutor.ReplyRunnable<any>>;
					public run(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module provider {
			export class SelfDestructiveThread extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.provider.SelfDestructiveThread>;
				public postAndWait(callable: java.util.concurrent.Callable<any>, timeoutMillis: number): any;
				public constructor(threadName: string, priority: number, destructAfterMillisec: number);
				public isRunning(): boolean;
				public getGeneration(): number;
				public postAndReply(callable: java.util.concurrent.Callable<any>, reply: androidx.core.provider.SelfDestructiveThread.ReplyCallback<any>): void;
			}
			export module SelfDestructiveThread {
				export class ReplyCallback<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.provider.SelfDestructiveThread.ReplyCallback<any>>;
					/**
					 * Constructs a new instance of the androidx.core.provider.SelfDestructiveThread$ReplyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onReply(param0: T): void;
					});
					public constructor();
					public onReply(param0: T): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module telephony {
			export class SubscriptionManagerCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.telephony.SubscriptionManagerCompat>;
				public static getSlotIndex(subId: number): number;
			}
			export module SubscriptionManagerCompat {
				export class Api29Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.telephony.SubscriptionManagerCompat.Api29Impl>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module telephony {
			export class TelephonyManagerCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.telephony.TelephonyManagerCompat>;
				public static getImei(telephonyManager: android.telephony.TelephonyManager): string;
				public static getSubscriptionId(telephonyManager: android.telephony.TelephonyManager): number;
			}
			export module TelephonyManagerCompat {
				export class Api23Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.telephony.TelephonyManagerCompat.Api23Impl>;
				}
				export class Api26Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.telephony.TelephonyManagerCompat.Api26Impl>;
				}
				export class Api30Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.telephony.TelephonyManagerCompat.Api30Impl>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module telephony {
			export module mbms {
				export class MbmsHelper extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.telephony.mbms.MbmsHelper>;
					public static getBestNameForService(context: android.content.Context, serviceInfo: any): string;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export class BidiFormatter extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.text.BidiFormatter>;
				public isRtlContext(): boolean;
				public unicodeWrap(str: string, heuristic: androidx.core.text.TextDirectionHeuristicCompat, isolate: boolean): string;
				public isRtl(str: string): boolean;
				public unicodeWrap(str: string, heuristic: androidx.core.text.TextDirectionHeuristicCompat): string;
				public unicodeWrap(str: string, isolate: boolean): string;
				public static getInstance(): androidx.core.text.BidiFormatter;
				public static getInstance(rtlContext: boolean): androidx.core.text.BidiFormatter;
				public unicodeWrap(str: string): string;
				public static getInstance(locale: java.util.Locale): androidx.core.text.BidiFormatter;
				public getStereoReset(): boolean;
			}
			export module BidiFormatter {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.text.BidiFormatter.Builder>;
					public build(): androidx.core.text.BidiFormatter;
					public setTextDirectionHeuristic(heuristic: androidx.core.text.TextDirectionHeuristicCompat): androidx.core.text.BidiFormatter.Builder;
					public constructor();
					public stereoReset(stereoReset: boolean): androidx.core.text.BidiFormatter.Builder;
					public constructor(rtlContext: boolean);
					public constructor(locale: java.util.Locale);
				}
				export class DirectionalityEstimator extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.text.BidiFormatter.DirectionalityEstimator>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export class HtmlCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.text.HtmlCompat>;
				public static TO_HTML_PARAGRAPH_LINES_CONSECUTIVE: number;
				public static TO_HTML_PARAGRAPH_LINES_INDIVIDUAL: number;
				public static FROM_HTML_SEPARATOR_LINE_BREAK_PARAGRAPH: number;
				public static FROM_HTML_SEPARATOR_LINE_BREAK_HEADING: number;
				public static FROM_HTML_SEPARATOR_LINE_BREAK_LIST_ITEM: number;
				public static FROM_HTML_SEPARATOR_LINE_BREAK_LIST: number;
				public static FROM_HTML_SEPARATOR_LINE_BREAK_DIV: number;
				public static FROM_HTML_SEPARATOR_LINE_BREAK_BLOCKQUOTE: number;
				public static FROM_HTML_OPTION_USE_CSS_COLORS: number;
				public static FROM_HTML_MODE_LEGACY: number;
				public static FROM_HTML_MODE_COMPACT: number;
				public static fromHtml(source: string, flags: number): android.text.Spanned;
				public static toHtml(text: android.text.Spanned, options: number): string;
				public static fromHtml(source: string, flags: number, imageGetter: android.text.Html.ImageGetter, tagHandler: android.text.Html.TagHandler): android.text.Spanned;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export class ICUCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.text.ICUCompat>;
				public static maximizeAndGetScript(locale: java.util.Locale): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export class PrecomputedTextCompat extends android.text.Spannable {
				public static class: java.lang.Class<androidx.core.text.PrecomputedTextCompat>;
				public getSpanEnd(param0: any): number;
				public static create(text: string, params: androidx.core.text.PrecomputedTextCompat.Params): androidx.core.text.PrecomputedTextCompat;
				public static getTextFuture(charSequence: string, params: androidx.core.text.PrecomputedTextCompat.Params, executor: java.util.concurrent.Executor): java.util.concurrent.Future<androidx.core.text.PrecomputedTextCompat>;
				public codePoints(): java.util.stream.IntStream;
				public removeSpan(param0: any): void;
				public removeSpan(what: any): void;
				public nextSpanTransition(start: number, limit: number, type: java.lang.Class<any>): number;
				public charAt(param0: number): string;
				public getSpanEnd(tag: any): number;
				public getParams(): androidx.core.text.PrecomputedTextCompat.Params;
				public setSpan(what: any, start: number, end: number, flags: number): void;
				public charAt(index: number): string;
				public getSpanStart(param0: any): number;
				public getSpanStart(tag: any): number;
				public getSpanFlags(param0: any): number;
				public length(): number;
				public subSequence(start: number, end: number): string;
				public setSpan(param0: any, param1: number, param2: number, param3: number): void;
				public getPrecomputedText(): any;
				public getParagraphEnd(paraIndex: number): number;
				public chars(): java.util.stream.IntStream;
				public toString(): string;
				public getParagraphStart(paraIndex: number): number;
				public getSpans(start: number, end: number, type: java.lang.Class<any>): any[];
				public getSpanFlags(tag: any): number;
				public getParagraphCount(): number;
				public subSequence(param0: number, param1: number): string;
				public getSpans(param0: number, param1: number, param2: java.lang.Class<any>): any[];
				public nextSpanTransition(param0: number, param1: number, param2: java.lang.Class<any>): number;
			}
			export module PrecomputedTextCompat {
				export class Params extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.text.PrecomputedTextCompat.Params>;
					public getTextPaint(): android.text.TextPaint;
					public getBreakStrategy(): number;
					public equals(obj: any): boolean;
					public toString(): string;
					public equalsWithoutTextDirection(other: androidx.core.text.PrecomputedTextCompat.Params): boolean;
					public getHyphenationFrequency(): number;
					public equals(o: any): boolean;
					public hashCode(): number;
					public getTextDirection(): any;
					public constructor(wrapped: any);
				}
				export module Params {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.text.PrecomputedTextCompat.Params.Builder>;
						public setTextDirection(textDir: any): androidx.core.text.PrecomputedTextCompat.Params.Builder;
						public build(): androidx.core.text.PrecomputedTextCompat.Params;
						public constructor(paint: android.text.TextPaint);
						public setHyphenationFrequency(frequency: number): androidx.core.text.PrecomputedTextCompat.Params.Builder;
						public setBreakStrategy(strategy: number): androidx.core.text.PrecomputedTextCompat.Params.Builder;
					}
				}
				export class PrecomputedTextFutureTask extends java.util.concurrent.FutureTask<androidx.core.text.PrecomputedTextCompat> {
					public static class: java.lang.Class<androidx.core.text.PrecomputedTextCompat.PrecomputedTextFutureTask>;
					public run(): void;
				}
				export module PrecomputedTextFutureTask {
					export class PrecomputedTextCallback extends java.util.concurrent.Callable<androidx.core.text.PrecomputedTextCompat> {
						public static class: java.lang.Class<androidx.core.text.PrecomputedTextCompat.PrecomputedTextFutureTask.PrecomputedTextCallback>;
						public call(): androidx.core.text.PrecomputedTextCompat;
						public call(): any;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export class TextDirectionHeuristicCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.text.TextDirectionHeuristicCompat>;
				/**
				 * Constructs a new instance of the androidx.core.text.TextDirectionHeuristicCompat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isRtl(param0: string[], param1: number, param2: number): boolean;
					isRtl(param0: string, param1: number, param2: number): boolean;
				});
				public constructor();
				public isRtl(param0: string, param1: number, param2: number): boolean;
				public isRtl(param0: string[], param1: number, param2: number): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export class TextDirectionHeuristicsCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.text.TextDirectionHeuristicsCompat>;
				public static LTR: androidx.core.text.TextDirectionHeuristicCompat;
				public static RTL: androidx.core.text.TextDirectionHeuristicCompat;
				public static FIRSTSTRONG_LTR: androidx.core.text.TextDirectionHeuristicCompat;
				public static FIRSTSTRONG_RTL: androidx.core.text.TextDirectionHeuristicCompat;
				public static ANYRTL_LTR: androidx.core.text.TextDirectionHeuristicCompat;
				public static LOCALE: androidx.core.text.TextDirectionHeuristicCompat;
			}
			export module TextDirectionHeuristicsCompat {
				export class AnyStrong extends java.lang.Object implements androidx.core.text.TextDirectionHeuristicsCompat.TextDirectionAlgorithm {
					public static class: java.lang.Class<androidx.core.text.TextDirectionHeuristicsCompat.AnyStrong>;
					public checkRtl(param0: string, param1: number, param2: number): number;
					public checkRtl(cs: string, start: number, count: number): number;
				}
				export class FirstStrong extends java.lang.Object implements androidx.core.text.TextDirectionHeuristicsCompat.TextDirectionAlgorithm {
					public static class: java.lang.Class<androidx.core.text.TextDirectionHeuristicsCompat.FirstStrong>;
					public checkRtl(param0: string, param1: number, param2: number): number;
					public checkRtl(cs: string, start: number, count: number): number;
				}
				export class TextDirectionAlgorithm extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.text.TextDirectionHeuristicsCompat.TextDirectionAlgorithm>;
					/**
					 * Constructs a new instance of the androidx.core.text.TextDirectionHeuristicsCompat$TextDirectionAlgorithm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						checkRtl(param0: string, param1: number, param2: number): number;
					});
					public constructor();
					public checkRtl(param0: string, param1: number, param2: number): number;
				}
				export abstract class TextDirectionHeuristicImpl extends java.lang.Object implements androidx.core.text.TextDirectionHeuristicCompat {
					public static class: java.lang.Class<androidx.core.text.TextDirectionHeuristicsCompat.TextDirectionHeuristicImpl>;
					public defaultIsRtl(): boolean;
					public isRtl(param0: string[], param1: number, param2: number): boolean;
					public isRtl(array: string[], start: number, count: number): boolean;
					public isRtl(cs: string, start: number, count: number): boolean;
					public isRtl(param0: string, param1: number, param2: number): boolean;
				}
				export class TextDirectionHeuristicInternal extends androidx.core.text.TextDirectionHeuristicsCompat.TextDirectionHeuristicImpl {
					public static class: java.lang.Class<androidx.core.text.TextDirectionHeuristicsCompat.TextDirectionHeuristicInternal>;
					public defaultIsRtl(): boolean;
					public isRtl(param0: string[], param1: number, param2: number): boolean;
					public isRtl(array: string[], start: number, count: number): boolean;
					public isRtl(cs: string, start: number, count: number): boolean;
					public isRtl(param0: string, param1: number, param2: number): boolean;
				}
				export class TextDirectionHeuristicLocale extends androidx.core.text.TextDirectionHeuristicsCompat.TextDirectionHeuristicImpl {
					public static class: java.lang.Class<androidx.core.text.TextDirectionHeuristicsCompat.TextDirectionHeuristicLocale>;
					public defaultIsRtl(): boolean;
					public isRtl(param0: string[], param1: number, param2: number): boolean;
					public isRtl(array: string[], start: number, count: number): boolean;
					public isRtl(cs: string, start: number, count: number): boolean;
					public isRtl(param0: string, param1: number, param2: number): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export class TextUtilsCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.text.TextUtilsCompat>;
				public static getLayoutDirectionFromLocale(locale: java.util.Locale): number;
				public static htmlEncode(s: string): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export module util {
				export class FindAddress extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.text.util.FindAddress>;
					public static matchHouseNumber(content: string, offset: number): java.util.regex.MatchResult;
					public static matchState(content: string, offset: number): java.util.regex.MatchResult;
					public static isValidZipCode(zipCode: string): boolean;
					public static isValidZipCode(zipCode: string, state: string): boolean;
					public static isValidLocationName(location: string): boolean;
				}
				export module FindAddress {
					export class ZipRange extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.text.util.FindAddress.ZipRange>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module text {
			export module util {
				export class LinkifyCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.text.util.LinkifyCompat>;
					public static addLinks(text: android.widget.TextView, pattern: java.util.regex.Pattern, scheme: string, matchFilter: android.text.util.Linkify.MatchFilter, transformFilter: android.text.util.Linkify.TransformFilter): void;
					public static addLinks(text: android.widget.TextView, mask: number): boolean;
					public static addLinks(text: android.widget.TextView, pattern: java.util.regex.Pattern, defaultScheme: string, schemes: string[], matchFilter: android.text.util.Linkify.MatchFilter, transformFilter: android.text.util.Linkify.TransformFilter): void;
					public static addLinks(text: android.text.Spannable, pattern: java.util.regex.Pattern, scheme: string): boolean;
					public static addLinks(spannable: android.text.Spannable, pattern: java.util.regex.Pattern, scheme: string, matchFilter: android.text.util.Linkify.MatchFilter, transformFilter: android.text.util.Linkify.TransformFilter): boolean;
					public static addLinks(text: android.widget.TextView, pattern: java.util.regex.Pattern, scheme: string): void;
					public static addLinks(spannable: android.text.Spannable, pattern: java.util.regex.Pattern, defaultScheme: string, schemes: string[], matchFilter: android.text.util.Linkify.MatchFilter, transformFilter: android.text.util.Linkify.TransformFilter): boolean;
					public static addLinks(text: android.text.Spannable, mask: number): boolean;
				}
				export module LinkifyCompat {
					export class LinkSpec extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.text.util.LinkifyCompat.LinkSpec>;
					}
					export class LinkifyMask extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.core.text.util.LinkifyCompat.LinkifyMask>;
						/**
						 * Constructs a new instance of the androidx.core.text.util.LinkifyCompat$LinkifyMask interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class AtomicFile extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.AtomicFile>;
				public constructor(baseName: java.io.File);
				public finishWrite(str: java.io.FileOutputStream): void;
				public openRead(): java.io.FileInputStream;
				public readFully(): number[];
				public delete(): void;
				public getBaseFile(): java.io.File;
				public failWrite(str: java.io.FileOutputStream): void;
				public startWrite(): java.io.FileOutputStream;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class Consumer<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.Consumer<any>>;
				/**
				 * Constructs a new instance of the androidx.core.util.Consumer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					accept(param0: T): void;
				});
				public constructor();
				public accept(param0: T): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class DebugUtils extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.DebugUtils>;
				public static buildShortClassTag(cls: any, out: java.lang.StringBuilder): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class LogWriter extends java.io.Writer {
				public static class: java.lang.Class<androidx.core.util.LogWriter>;
				public append(csq: string): java.io.Writer;
				public close(): void;
				public write(buf: string[], offset: number, count: number): void;
				public write(str: string, off: number, len: number): void;
				public constructor(tag: string);
				public append(csq: string, start: number, end: number): java.io.Writer;
				public constructor();
				public flush(): void;
				public write(cbuf: string[]): void;
				public append(c: string): java.io.Writer;
				public write(c: number): void;
				public write(param0: string[], param1: number, param2: number): void;
				public constructor(lock: any);
				public write(str: string): void;
				public append(param0: string): java.lang.Appendable;
				public append(param0: string, param1: number, param2: number): java.lang.Appendable;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class ObjectsCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.ObjectsCompat>;
				public static hash(...values: any[]): number;
				public static hashCode(o: any): number;
				public equals(obj: any): boolean;
				public static toString(o: any, nullDefault: string): string;
				public static requireNonNull(obj: any, message: string): any;
				public static requireNonNull(obj: any): any;
				public hashCode(): number;
				public static equals(a: any, b: any): boolean;
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class Pair<F, S>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.Pair<any,any>>;
				public first: F;
				public second: S;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public static create(a: any, b: any): androidx.core.util.Pair<any,any>;
				public constructor(first: F, second: S);
				public equals(o: any): boolean;
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class PatternsCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.PatternsCompat>;
				public static IP_ADDRESS: java.util.regex.Pattern;
				public static DOMAIN_NAME: java.util.regex.Pattern;
				public static WEB_URL: java.util.regex.Pattern;
				public static AUTOLINK_WEB_URL: java.util.regex.Pattern;
				public static AUTOLINK_EMAIL_ADDRESS: java.util.regex.Pattern;
				public static EMAIL_ADDRESS: java.util.regex.Pattern;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class Pools extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.Pools>;
			}
			export module Pools {
				export class Pool<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.util.Pools.Pool<any>>;
					/**
					 * Constructs a new instance of the androidx.core.util.Pools$Pool interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						acquire(): T;
						release(param0: T): boolean;
					});
					public constructor();
					public acquire(): T;
					public release(param0: T): boolean;
				}
				export class SimplePool<T>  extends androidx.core.util.Pools.Pool<any> {
					public static class: java.lang.Class<androidx.core.util.Pools.SimplePool<any>>;
					public acquire(): any;
					public release(instance: any): boolean;
					public release(param0: any): boolean;
					public constructor(maxPoolSize: number);
				}
				export class SynchronizedPool<T>  extends androidx.core.util.Pools.SimplePool<any> {
					public static class: java.lang.Class<androidx.core.util.Pools.SynchronizedPool<any>>;
					public acquire(): any;
					public release(instance: any): boolean;
					public release(param0: any): boolean;
					public constructor(maxPoolSize: number);
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class Preconditions extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.Preconditions>;
				public static checkState(expression: boolean): void;
				public static checkArgument(expression: boolean): void;
				public static checkFlagsArgument(requestedFlags: number, allowedFlags: number): number;
				public static checkArgumentNonnegative(value: number, errorMessage: string): number;
				public static checkArgument(expression: boolean, messageTemplate: string, ...messageArgs: any[]): void;
				public static checkStringNotEmpty(string: string, errorMessage: any): string;
				public static checkArgumentNonnegative(value: number): number;
				public static checkArgument(expression: boolean, errorMessage: any): void;
				public static checkNotNull(reference: any): any;
				public static checkArgumentInRange(value: number, param1: number, lower: number, param3: string): number;
				public static checkNotNull(reference: any, errorMessage: any): any;
				public static checkStringNotEmpty(string: string): string;
				public static checkState(expression: boolean, message: string): void;
				public static checkStringNotEmpty(string: string, messageTemplate: string, ...messageArgs: any[]): string;
				public static checkArgumentInRange(value: number, lower: number, upper: number, valueName: string): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class Predicate<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.Predicate<any>>;
				/**
				 * Constructs a new instance of the androidx.core.util.Predicate<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					test(param0: T): boolean;
				});
				public constructor();
				public test(param0: T): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class Supplier<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.Supplier<any>>;
				/**
				 * Constructs a new instance of the androidx.core.util.Supplier<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					get(): T;
				});
				public constructor();
				public get(): T;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module util {
			export class TimeUtils extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.util.TimeUtils>;
				public static HUNDRED_DAY_FIELD_LEN: number;
				public static formatDuration(duration: number, param1: java.lang.StringBuilder): void;
				public static formatDuration(time: number, param1: number, now: java.io.PrintWriter): void;
				public static formatDuration(duration: number, param1: java.io.PrintWriter, pw: number): void;
				public static formatDuration(duration: number, param1: java.io.PrintWriter): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class AccessibilityDelegateCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.AccessibilityDelegateCompat>;
				public sendAccessibilityEventUnchecked(host: android.view.View, event: android.view.accessibility.AccessibilityEvent): void;
				public constructor(originalDelegate: any);
				public onInitializeAccessibilityEvent(host: android.view.View, event: android.view.accessibility.AccessibilityEvent): void;
				public dispatchPopulateAccessibilityEvent(host: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public performAccessibilityAction(host: android.view.View, action: number, args: android.os.Bundle): boolean;
				public getAccessibilityNodeProvider(host: android.view.View): androidx.core.view.accessibility.AccessibilityNodeProviderCompat;
				public onRequestSendAccessibilityEvent(host: android.view.ViewGroup, child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public onPopulateAccessibilityEvent(host: android.view.View, event: android.view.accessibility.AccessibilityEvent): void;
				public sendAccessibilityEvent(host: android.view.View, eventType: number): void;
				public onInitializeAccessibilityNodeInfo(host: android.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
				public constructor();
			}
			export module AccessibilityDelegateCompat {
				export class AccessibilityDelegateAdapter extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.AccessibilityDelegateCompat.AccessibilityDelegateAdapter>;
					public onInitializeAccessibilityEvent(host: android.view.View, event: android.view.accessibility.AccessibilityEvent): void;
					public sendAccessibilityEvent(host: android.view.View, eventType: number): void;
					public onPopulateAccessibilityEvent(host: android.view.View, event: android.view.accessibility.AccessibilityEvent): void;
					public sendAccessibilityEventUnchecked(host: android.view.View, event: android.view.accessibility.AccessibilityEvent): void;
					public dispatchPopulateAccessibilityEvent(host: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
					public onRequestSendAccessibilityEvent(host: android.view.ViewGroup, child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
					public getAccessibilityNodeProvider(host: android.view.View): android.view.accessibility.AccessibilityNodeProvider;
					public performAccessibilityAction(host: android.view.View, action: number, args: android.os.Bundle): boolean;
					public onInitializeAccessibilityNodeInfo(host: android.view.View, info: android.view.accessibility.AccessibilityNodeInfo): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export abstract class ActionProvider extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.ActionProvider>;
				public isVisible(): boolean;
				public onCreateActionView(): android.view.View;
				public constructor(context: android.content.Context);
				public onPerformDefaultAction(): boolean;
				public overridesItemVisibility(): boolean;
				public subUiVisibilityChanged(isVisible: boolean): void;
				public reset(): void;
				public refreshVisibility(): void;
				public setSubUiVisibilityListener(listener: androidx.core.view.ActionProvider.SubUiVisibilityListener): void;
				public setVisibilityListener(listener: androidx.core.view.ActionProvider.VisibilityListener): void;
				public onPrepareSubMenu(subMenu: android.view.SubMenu): void;
				public hasSubMenu(): boolean;
				public getContext(): android.content.Context;
				public onCreateActionView(forItem: android.view.MenuItem): android.view.View;
			}
			export module ActionProvider {
				export class SubUiVisibilityListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ActionProvider.SubUiVisibilityListener>;
					/**
					 * Constructs a new instance of the androidx.core.view.ActionProvider$SubUiVisibilityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSubUiVisibilityChanged(param0: boolean): void;
					});
					public constructor();
					public onSubUiVisibilityChanged(param0: boolean): void;
				}
				export class VisibilityListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ActionProvider.VisibilityListener>;
					/**
					 * Constructs a new instance of the androidx.core.view.ActionProvider$VisibilityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onActionProviderVisibilityChanged(param0: boolean): void;
					});
					public constructor();
					public onActionProviderVisibilityChanged(param0: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ContentInfoCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.ContentInfoCompat>;
				public static SOURCE_APP: number;
				public static SOURCE_CLIPBOARD: number;
				public static SOURCE_INPUT_METHOD: number;
				public static SOURCE_DRAG_AND_DROP: number;
				public static SOURCE_AUTOFILL: number;
				public static SOURCE_PROCESS_TEXT: number;
				public static FLAG_CONVERT_TO_PLAIN_TEXT: number;
				public partition(itemPredicate: androidx.core.util.Predicate<android.content.ClipData.Item>): android.util.Pair<androidx.core.view.ContentInfoCompat,androidx.core.view.ContentInfoCompat>;
				public static toContentInfoCompat(platContentInfo: android.view.ContentInfo): androidx.core.view.ContentInfoCompat;
				public getLinkUri(): android.net.Uri;
				public getFlags(): number;
				public getExtras(): android.os.Bundle;
				public static partition(payload: android.view.ContentInfo, itemPredicate: any /* any*/): android.util.Pair<android.view.ContentInfo,android.view.ContentInfo>;
				public toContentInfo(): android.view.ContentInfo;
				public toString(): string;
				public getSource(): number;
				public getClip(): android.content.ClipData;
			}
			export module ContentInfoCompat {
				export class Api31Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ContentInfoCompat.Api31Impl>;
					public static partition(payload: android.view.ContentInfo, itemPredicate: any /* any*/): android.util.Pair<android.view.ContentInfo,android.view.ContentInfo>;
				}
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ContentInfoCompat.Builder>;
					public constructor(clip: android.content.ClipData, source: number);
					public setLinkUri(linkUri: android.net.Uri): androidx.core.view.ContentInfoCompat.Builder;
					public constructor(other: androidx.core.view.ContentInfoCompat);
					public setExtras(extras: android.os.Bundle): androidx.core.view.ContentInfoCompat.Builder;
					public build(): androidx.core.view.ContentInfoCompat;
					public setSource(source: number): androidx.core.view.ContentInfoCompat.Builder;
					public setClip(clip: android.content.ClipData): androidx.core.view.ContentInfoCompat.Builder;
					public setFlags(flags: number): androidx.core.view.ContentInfoCompat.Builder;
				}
				export class BuilderCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ContentInfoCompat.BuilderCompat>;
					/**
					 * Constructs a new instance of the androidx.core.view.ContentInfoCompat$BuilderCompat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setClip(param0: android.content.ClipData): void;
						setSource(param0: number): void;
						setFlags(param0: number): void;
						setLinkUri(param0: android.net.Uri): void;
						setExtras(param0: android.os.Bundle): void;
						build(): androidx.core.view.ContentInfoCompat;
					});
					public constructor();
					public setClip(param0: android.content.ClipData): void;
					public setExtras(param0: android.os.Bundle): void;
					public setSource(param0: number): void;
					public setFlags(param0: number): void;
					public setLinkUri(param0: android.net.Uri): void;
					public build(): androidx.core.view.ContentInfoCompat;
				}
				export class BuilderCompat31Impl extends java.lang.Object implements androidx.core.view.ContentInfoCompat.BuilderCompat {
					public static class: java.lang.Class<androidx.core.view.ContentInfoCompat.BuilderCompat31Impl>;
					public setFlags(flags: number): void;
					public setLinkUri(linkUri: android.net.Uri): void;
					public setClip(param0: android.content.ClipData): void;
					public setExtras(extras: android.os.Bundle): void;
					public setExtras(param0: android.os.Bundle): void;
					public setSource(param0: number): void;
					public setFlags(param0: number): void;
					public setLinkUri(param0: android.net.Uri): void;
					public build(): androidx.core.view.ContentInfoCompat;
					public setClip(clip: android.content.ClipData): void;
					public setSource(source: number): void;
				}
				export class BuilderCompatImpl extends java.lang.Object implements androidx.core.view.ContentInfoCompat.BuilderCompat {
					public static class: java.lang.Class<androidx.core.view.ContentInfoCompat.BuilderCompatImpl>;
					public setFlags(flags: number): void;
					public setLinkUri(linkUri: android.net.Uri): void;
					public setClip(param0: android.content.ClipData): void;
					public setExtras(extras: android.os.Bundle): void;
					public setExtras(param0: android.os.Bundle): void;
					public setSource(param0: number): void;
					public setFlags(param0: number): void;
					public setLinkUri(param0: android.net.Uri): void;
					public build(): androidx.core.view.ContentInfoCompat;
					public setClip(clip: android.content.ClipData): void;
					public setSource(source: number): void;
				}
				export class Compat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ContentInfoCompat.Compat>;
					/**
					 * Constructs a new instance of the androidx.core.view.ContentInfoCompat$Compat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getWrapped(): android.view.ContentInfo;
						getClip(): android.content.ClipData;
						getSource(): number;
						getFlags(): number;
						getLinkUri(): android.net.Uri;
						getExtras(): android.os.Bundle;
					});
					public constructor();
					public getFlags(): number;
					public getClip(): android.content.ClipData;
					public getWrapped(): android.view.ContentInfo;
					public getSource(): number;
					public getExtras(): android.os.Bundle;
					public getLinkUri(): android.net.Uri;
				}
				export class Compat31Impl extends java.lang.Object implements androidx.core.view.ContentInfoCompat.Compat {
					public static class: java.lang.Class<androidx.core.view.ContentInfoCompat.Compat31Impl>;
					public toString(): string;
					public getFlags(): number;
					public getClip(): android.content.ClipData;
					public getWrapped(): android.view.ContentInfo;
					public getSource(): number;
					public getExtras(): android.os.Bundle;
					public getLinkUri(): android.net.Uri;
				}
				export class CompatImpl extends java.lang.Object implements androidx.core.view.ContentInfoCompat.Compat {
					public static class: java.lang.Class<androidx.core.view.ContentInfoCompat.CompatImpl>;
					public toString(): string;
					public getFlags(): number;
					public getClip(): android.content.ClipData;
					public getWrapped(): android.view.ContentInfo;
					public getSource(): number;
					public getExtras(): android.os.Bundle;
					public getLinkUri(): android.net.Uri;
				}
				export class Flags extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.view.ContentInfoCompat.Flags>;
					/**
					 * Constructs a new instance of the androidx.core.view.ContentInfoCompat$Flags interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class Source extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.view.ContentInfoCompat.Source>;
					/**
					 * Constructs a new instance of the androidx.core.view.ContentInfoCompat$Source interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
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

declare module androidx {
	export module core {
		export module view {
			export class DisplayCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.DisplayCompat>;
				public static getMode(context: android.content.Context, display: android.view.Display): androidx.core.view.DisplayCompat.ModeCompat;
				public static getSupportedModes(context: android.content.Context, display: android.view.Display): androidx.core.view.DisplayCompat.ModeCompat[];
			}
			export module DisplayCompat {
				export class Api17Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.DisplayCompat.Api17Impl>;
				}
				export class Api23Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.DisplayCompat.Api23Impl>;
					public static getSupportedModes(context: android.content.Context, display: android.view.Display): androidx.core.view.DisplayCompat.ModeCompat[];
				}
				export class ModeCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.DisplayCompat.ModeCompat>;
					public getPhysicalHeight(): number;
					public toMode(): android.view.Display.Mode;
					/** @deprecated */
					public isNative(): boolean;
					public getPhysicalWidth(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class DisplayCutoutCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.DisplayCutoutCompat>;
				public getWaterfallInsets(): androidx.core.graphics.Insets;
				public getSafeInsetBottom(): number;
				public getBoundingRects(): java.util.List<android.graphics.Rect>;
				public equals(obj: any): boolean;
				public getSafeInsetLeft(): number;
				public constructor(safeInsets: android.graphics.Rect, boundingRects: java.util.List<android.graphics.Rect>);
				public constructor(safeInsets: androidx.core.graphics.Insets, boundLeft: android.graphics.Rect, boundTop: android.graphics.Rect, boundRight: android.graphics.Rect, boundBottom: android.graphics.Rect, waterfallInsets: androidx.core.graphics.Insets);
				public hashCode(): number;
				public getSafeInsetTop(): number;
				public getSafeInsetRight(): number;
				public equals(o: any): boolean;
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class DragAndDropPermissionsCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.DragAndDropPermissionsCompat>;
				public static request(activity: android.app.Activity, dragEvent: android.view.DragEvent): androidx.core.view.DragAndDropPermissionsCompat;
				public release(): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class DragStartHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.DragStartHelper>;
				public attach(): void;
				public constructor(view: android.view.View, listener: androidx.core.view.DragStartHelper.OnDragStartListener);
				public onTouch(v: android.view.View, event: android.view.MotionEvent): boolean;
				public onLongClick(v: android.view.View): boolean;
				public getTouchPosition(point: android.graphics.Point): void;
				public detach(): void;
			}
			export module DragStartHelper {
				export class OnDragStartListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.DragStartHelper.OnDragStartListener>;
					/**
					 * Constructs a new instance of the androidx.core.view.DragStartHelper$OnDragStartListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDragStart(param0: android.view.View, param1: androidx.core.view.DragStartHelper): boolean;
					});
					public constructor();
					public onDragStart(param0: android.view.View, param1: androidx.core.view.DragStartHelper): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class GestureDetectorCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.GestureDetectorCompat>;
				public setOnDoubleTapListener(listener: android.view.GestureDetector.OnDoubleTapListener): void;
				public constructor(context: android.content.Context, listener: android.view.GestureDetector.OnGestureListener);
				public isLongpressEnabled(): boolean;
				public setIsLongpressEnabled(enabled: boolean): void;
				public onTouchEvent(event: android.view.MotionEvent): boolean;
				public constructor(context: android.content.Context, listener: android.view.GestureDetector.OnGestureListener, handler: android.os.Handler);
			}
			export module GestureDetectorCompat {
				export class GestureDetectorCompatImpl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.GestureDetectorCompat.GestureDetectorCompatImpl>;
					/**
					 * Constructs a new instance of the androidx.core.view.GestureDetectorCompat$GestureDetectorCompatImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isLongpressEnabled(): boolean;
						onTouchEvent(param0: android.view.MotionEvent): boolean;
						setIsLongpressEnabled(param0: boolean): void;
						setOnDoubleTapListener(param0: android.view.GestureDetector.OnDoubleTapListener): void;
					});
					public constructor();
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public isLongpressEnabled(): boolean;
					public setIsLongpressEnabled(param0: boolean): void;
					public setOnDoubleTapListener(param0: android.view.GestureDetector.OnDoubleTapListener): void;
				}
				export class GestureDetectorCompatImplBase extends java.lang.Object implements androidx.core.view.GestureDetectorCompat.GestureDetectorCompatImpl {
					public static class: java.lang.Class<androidx.core.view.GestureDetectorCompat.GestureDetectorCompatImplBase>;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public isLongpressEnabled(): boolean;
					public setOnDoubleTapListener(onDoubleTapListener: android.view.GestureDetector.OnDoubleTapListener): void;
					public onTouchEvent(ev: android.view.MotionEvent): boolean;
					public setIsLongpressEnabled(isLongpressEnabled: boolean): void;
					public setIsLongpressEnabled(param0: boolean): void;
					public setOnDoubleTapListener(param0: android.view.GestureDetector.OnDoubleTapListener): void;
				}
				export module GestureDetectorCompatImplBase {
					export class GestureHandler extends android.os.Handler {
						public static class: java.lang.Class<androidx.core.view.GestureDetectorCompat.GestureDetectorCompatImplBase.GestureHandler>;
						public handleMessage(msg: android.os.Message): void;
					}
				}
				export class GestureDetectorCompatImplJellybeanMr2 extends java.lang.Object implements androidx.core.view.GestureDetectorCompat.GestureDetectorCompatImpl {
					public static class: java.lang.Class<androidx.core.view.GestureDetectorCompat.GestureDetectorCompatImplJellybeanMr2>;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public isLongpressEnabled(): boolean;
					public setOnDoubleTapListener(listener: android.view.GestureDetector.OnDoubleTapListener): void;
					public setIsLongpressEnabled(enabled: boolean): void;
					public onTouchEvent(ev: android.view.MotionEvent): boolean;
					public setIsLongpressEnabled(param0: boolean): void;
					public setOnDoubleTapListener(param0: android.view.GestureDetector.OnDoubleTapListener): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class GravityCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.GravityCompat>;
				public static RELATIVE_LAYOUT_DIRECTION: number;
				public static START: number;
				public static END: number;
				public static RELATIVE_HORIZONTAL_GRAVITY_MASK: number;
				public static apply(gravity: number, w: number, h: number, container: android.graphics.Rect, outRect: android.graphics.Rect, layoutDirection: number): void;
				public static apply(gravity: number, w: number, h: number, container: android.graphics.Rect, xAdj: number, yAdj: number, outRect: android.graphics.Rect, layoutDirection: number): void;
				public static applyDisplay(gravity: number, display: android.graphics.Rect, inoutObj: android.graphics.Rect, layoutDirection: number): void;
				public static getAbsoluteGravity(gravity: number, layoutDirection: number): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class InputDeviceCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.InputDeviceCompat>;
				public static SOURCE_CLASS_MASK: number;
				public static SOURCE_CLASS_NONE: number;
				public static SOURCE_CLASS_BUTTON: number;
				public static SOURCE_CLASS_POINTER: number;
				public static SOURCE_CLASS_TRACKBALL: number;
				public static SOURCE_CLASS_POSITION: number;
				public static SOURCE_CLASS_JOYSTICK: number;
				public static SOURCE_UNKNOWN: number;
				public static SOURCE_KEYBOARD: number;
				public static SOURCE_DPAD: number;
				public static SOURCE_GAMEPAD: number;
				public static SOURCE_TOUCHSCREEN: number;
				public static SOURCE_MOUSE: number;
				public static SOURCE_STYLUS: number;
				public static SOURCE_TRACKBALL: number;
				public static SOURCE_TOUCHPAD: number;
				public static SOURCE_TOUCH_NAVIGATION: number;
				public static SOURCE_ROTARY_ENCODER: number;
				public static SOURCE_JOYSTICK: number;
				public static SOURCE_HDMI: number;
				public static SOURCE_ANY: number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class KeyEventDispatcher extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.KeyEventDispatcher>;
				public static dispatchBeforeHierarchy(root: android.view.View, event: android.view.KeyEvent): boolean;
				public static dispatchKeyEvent(component: androidx.core.view.KeyEventDispatcher.Component, root: android.view.View, callback: android.view.Window.Callback, event: android.view.KeyEvent): boolean;
			}
			export module KeyEventDispatcher {
				export class Component extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.KeyEventDispatcher.Component>;
					/**
					 * Constructs a new instance of the androidx.core.view.KeyEventDispatcher$Component interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						superDispatchKeyEvent(param0: android.view.KeyEvent): boolean;
					});
					public constructor();
					public superDispatchKeyEvent(param0: android.view.KeyEvent): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class LayoutInflaterCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.LayoutInflaterCompat>;
				/** @deprecated */
				public static setFactory(inflater: android.view.LayoutInflater, factory: androidx.core.view.LayoutInflaterFactory): void;
				public static setFactory2(inflater: android.view.LayoutInflater, factory: android.view.LayoutInflater.Factory2): void;
				/** @deprecated */
				public static getFactory(inflater: android.view.LayoutInflater): androidx.core.view.LayoutInflaterFactory;
			}
			export module LayoutInflaterCompat {
				export class Factory2Wrapper extends java.lang.Object implements android.view.LayoutInflater.Factory2 {
					public static class: java.lang.Class<androidx.core.view.LayoutInflaterCompat.Factory2Wrapper>;
					public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
					public toString(): string;
					public onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;
					public onCreateView(name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
					public onCreateView(parent: android.view.View, name: string, context: android.content.Context, attributeSet: android.util.AttributeSet): android.view.View;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class LayoutInflaterFactory extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.LayoutInflaterFactory>;
				/**
				 * Constructs a new instance of the androidx.core.view.LayoutInflaterFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
				});
				public constructor();
				public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class MarginLayoutParamsCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.MarginLayoutParamsCompat>;
				public static setMarginStart(lp: android.view.ViewGroup.MarginLayoutParams, marginStart: number): void;
				public static setMarginEnd(lp: android.view.ViewGroup.MarginLayoutParams, marginEnd: number): void;
				public static getMarginStart(lp: android.view.ViewGroup.MarginLayoutParams): number;
				public static getLayoutDirection(lp: android.view.ViewGroup.MarginLayoutParams): number;
				public static resolveLayoutDirection(lp: android.view.ViewGroup.MarginLayoutParams, layoutDirection: number): void;
				public static isMarginRelative(lp: android.view.ViewGroup.MarginLayoutParams): boolean;
				public static setLayoutDirection(lp: android.view.ViewGroup.MarginLayoutParams, layoutDirection: number): void;
				public static getMarginEnd(lp: android.view.ViewGroup.MarginLayoutParams): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class MenuCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.MenuCompat>;
				/** @deprecated */
				public static setShowAsAction(item: android.view.MenuItem, actionEnum: number): void;
				public static setGroupDividerEnabled(menu: android.view.Menu, enabled: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class MenuHost extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.MenuHost>;
				/**
				 * Constructs a new instance of the androidx.core.view.MenuHost interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					addMenuProvider(param0: androidx.core.view.MenuProvider): void;
					addMenuProvider(param0: androidx.core.view.MenuProvider, param1: androidx.lifecycle.LifecycleOwner): void;
					addMenuProvider(param0: androidx.core.view.MenuProvider, param1: androidx.lifecycle.LifecycleOwner, param2: androidx.lifecycle.Lifecycle.State): void;
					removeMenuProvider(param0: androidx.core.view.MenuProvider): void;
					invalidateMenu(): void;
				});
				public constructor();
				public addMenuProvider(param0: androidx.core.view.MenuProvider, param1: androidx.lifecycle.LifecycleOwner): void;
				public addMenuProvider(param0: androidx.core.view.MenuProvider): void;
				public addMenuProvider(param0: androidx.core.view.MenuProvider, param1: androidx.lifecycle.LifecycleOwner, param2: androidx.lifecycle.Lifecycle.State): void;
				public removeMenuProvider(param0: androidx.core.view.MenuProvider): void;
				public invalidateMenu(): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class MenuHostHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.MenuHostHelper>;
				public constructor(onInvalidateMenuCallback: java.lang.Runnable);
				public onCreateMenu(menu: android.view.Menu, menuInflater: android.view.MenuInflater): void;
				public removeMenuProvider(provider: androidx.core.view.MenuProvider): void;
				public addMenuProvider(provider: androidx.core.view.MenuProvider, owner: androidx.lifecycle.LifecycleOwner, state: androidx.lifecycle.Lifecycle.State): void;
				public addMenuProvider(provider: androidx.core.view.MenuProvider, owner: androidx.lifecycle.LifecycleOwner): void;
				public onMenuItemSelected(item: android.view.MenuItem): boolean;
				public addMenuProvider(provider: androidx.core.view.MenuProvider): void;
			}
			export module MenuHostHelper {
				export class LifecycleContainer extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.MenuHostHelper.LifecycleContainer>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class MenuItemCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.MenuItemCompat>;
				public static SHOW_AS_ACTION_NEVER: number;
				public static SHOW_AS_ACTION_IF_ROOM: number;
				public static SHOW_AS_ACTION_ALWAYS: number;
				public static SHOW_AS_ACTION_WITH_TEXT: number;
				public static SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW: number;
				/** @deprecated */
				public static setShowAsAction(item: android.view.MenuItem, actionEnum: number): void;
				/** @deprecated */
				public static expandActionView(item: android.view.MenuItem): boolean;
				/** @deprecated */
				public static setActionView(item: android.view.MenuItem, resId: number): android.view.MenuItem;
				public static getAlphabeticModifiers(item: android.view.MenuItem): number;
				public static setTooltipText(item: android.view.MenuItem, tooltipText: string): void;
				public static setContentDescription(item: android.view.MenuItem, contentDescription: string): void;
				public static getActionProvider(item: android.view.MenuItem): androidx.core.view.ActionProvider;
				public static getNumericModifiers(item: android.view.MenuItem): number;
				public static setIconTintList(item: android.view.MenuItem, tint: android.content.res.ColorStateList): void;
				public static getIconTintList(item: android.view.MenuItem): android.content.res.ColorStateList;
				public static getTooltipText(item: android.view.MenuItem): string;
				public static setActionProvider(item: android.view.MenuItem, provider: androidx.core.view.ActionProvider): android.view.MenuItem;
				/** @deprecated */
				public static getActionView(item: android.view.MenuItem): android.view.View;
				public static getContentDescription(item: android.view.MenuItem): string;
				public static setAlphabeticShortcut(item: android.view.MenuItem, alphaChar: string, alphaModifiers: number): void;
				public static setShortcut(item: android.view.MenuItem, numericChar: string, alphaChar: string, numericModifiers: number, alphaModifiers: number): void;
				public static getIconTintMode(item: android.view.MenuItem): android.graphics.PorterDuff.Mode;
				/** @deprecated */
				public static setOnActionExpandListener(item: android.view.MenuItem, listener: androidx.core.view.MenuItemCompat.OnActionExpandListener): android.view.MenuItem;
				/** @deprecated */
				public static setActionView(item: android.view.MenuItem, view: android.view.View): android.view.MenuItem;
				/** @deprecated */
				public static isActionViewExpanded(item: android.view.MenuItem): boolean;
				public static setNumericShortcut(item: android.view.MenuItem, numericChar: string, numericModifiers: number): void;
				/** @deprecated */
				public static collapseActionView(item: android.view.MenuItem): boolean;
				public static setIconTintMode(item: android.view.MenuItem, tintMode: android.graphics.PorterDuff.Mode): void;
			}
			export module MenuItemCompat {
				export class OnActionExpandListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.MenuItemCompat.OnActionExpandListener>;
					/**
					 * Constructs a new instance of the androidx.core.view.MenuItemCompat$OnActionExpandListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMenuItemActionExpand(param0: android.view.MenuItem): boolean;
						onMenuItemActionCollapse(param0: android.view.MenuItem): boolean;
					});
					public constructor();
					public onMenuItemActionCollapse(param0: android.view.MenuItem): boolean;
					public onMenuItemActionExpand(param0: android.view.MenuItem): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class MenuProvider extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.MenuProvider>;
				/**
				 * Constructs a new instance of the androidx.core.view.MenuProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCreateMenu(param0: android.view.Menu, param1: android.view.MenuInflater): void;
					onMenuItemSelected(param0: android.view.MenuItem): boolean;
				});
				public constructor();
				public onCreateMenu(param0: android.view.Menu, param1: android.view.MenuInflater): void;
				public onMenuItemSelected(param0: android.view.MenuItem): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class MotionEventCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.MotionEventCompat>;
				public static ACTION_MASK: number;
				public static ACTION_POINTER_DOWN: number;
				public static ACTION_POINTER_UP: number;
				public static ACTION_HOVER_MOVE: number;
				public static ACTION_SCROLL: number;
				public static ACTION_POINTER_INDEX_MASK: number;
				public static ACTION_POINTER_INDEX_SHIFT: number;
				public static ACTION_HOVER_ENTER: number;
				public static ACTION_HOVER_EXIT: number;
				public static AXIS_X: number;
				public static AXIS_Y: number;
				public static AXIS_PRESSURE: number;
				public static AXIS_SIZE: number;
				public static AXIS_TOUCH_MAJOR: number;
				public static AXIS_TOUCH_MINOR: number;
				public static AXIS_TOOL_MAJOR: number;
				public static AXIS_TOOL_MINOR: number;
				public static AXIS_ORIENTATION: number;
				public static AXIS_VSCROLL: number;
				public static AXIS_HSCROLL: number;
				public static AXIS_Z: number;
				public static AXIS_RX: number;
				public static AXIS_RY: number;
				public static AXIS_RZ: number;
				public static AXIS_HAT_X: number;
				public static AXIS_HAT_Y: number;
				public static AXIS_LTRIGGER: number;
				public static AXIS_RTRIGGER: number;
				public static AXIS_THROTTLE: number;
				public static AXIS_RUDDER: number;
				public static AXIS_WHEEL: number;
				public static AXIS_GAS: number;
				public static AXIS_BRAKE: number;
				public static AXIS_DISTANCE: number;
				public static AXIS_TILT: number;
				public static AXIS_SCROLL: number;
				public static AXIS_RELATIVE_X: number;
				public static AXIS_RELATIVE_Y: number;
				public static AXIS_GENERIC_1: number;
				public static AXIS_GENERIC_2: number;
				public static AXIS_GENERIC_3: number;
				public static AXIS_GENERIC_4: number;
				public static AXIS_GENERIC_5: number;
				public static AXIS_GENERIC_6: number;
				public static AXIS_GENERIC_7: number;
				public static AXIS_GENERIC_8: number;
				public static AXIS_GENERIC_9: number;
				public static AXIS_GENERIC_10: number;
				public static AXIS_GENERIC_11: number;
				public static AXIS_GENERIC_12: number;
				public static AXIS_GENERIC_13: number;
				public static AXIS_GENERIC_14: number;
				public static AXIS_GENERIC_15: number;
				public static AXIS_GENERIC_16: number;
				public static BUTTON_PRIMARY: number;
				/** @deprecated */
				public static getSource(event: android.view.MotionEvent): number;
				public static isFromSource(event: android.view.MotionEvent, source: number): boolean;
				/** @deprecated */
				public static getActionIndex(event: android.view.MotionEvent): number;
				/** @deprecated */
				public static findPointerIndex(event: android.view.MotionEvent, pointerId: number): number;
				/** @deprecated */
				public static getAxisValue(event: android.view.MotionEvent, axis: number): number;
				/** @deprecated */
				public static getAxisValue(event: android.view.MotionEvent, axis: number, pointerIndex: number): number;
				/** @deprecated */
				public static getActionMasked(event: android.view.MotionEvent): number;
				/** @deprecated */
				public static getY(event: android.view.MotionEvent, pointerIndex: number): number;
				/** @deprecated */
				public static getPointerId(event: android.view.MotionEvent, pointerIndex: number): number;
				/** @deprecated */
				public static getX(event: android.view.MotionEvent, pointerIndex: number): number;
				/** @deprecated */
				public static getButtonState(event: android.view.MotionEvent): number;
				/** @deprecated */
				public static getPointerCount(event: android.view.MotionEvent): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class NestedScrollingChild extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.NestedScrollingChild>;
				/**
				 * Constructs a new instance of the androidx.core.view.NestedScrollingChild interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setNestedScrollingEnabled(param0: boolean): void;
					isNestedScrollingEnabled(): boolean;
					startNestedScroll(param0: number): boolean;
					stopNestedScroll(): void;
					hasNestedScrollingParent(): boolean;
					dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[]): boolean;
					dispatchNestedPreScroll(param0: number, param1: number, param2: number[], param3: number[]): boolean;
					dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
					dispatchNestedPreFling(param0: number, param1: number): boolean;
				});
				public constructor();
				public stopNestedScroll(): void;
				public setNestedScrollingEnabled(param0: boolean): void;
				public startNestedScroll(param0: number): boolean;
				public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
				public hasNestedScrollingParent(): boolean;
				public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[]): boolean;
				public dispatchNestedPreFling(param0: number, param1: number): boolean;
				public isNestedScrollingEnabled(): boolean;
				public dispatchNestedPreScroll(param0: number, param1: number, param2: number[], param3: number[]): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class NestedScrollingChild2 extends java.lang.Object implements androidx.core.view.NestedScrollingChild {
				public static class: java.lang.Class<androidx.core.view.NestedScrollingChild2>;
				/**
				 * Constructs a new instance of the androidx.core.view.NestedScrollingChild2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					startNestedScroll(param0: number, param1: number): boolean;
					stopNestedScroll(param0: number): void;
					hasNestedScrollingParent(param0: number): boolean;
					dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[], param5: number): boolean;
					dispatchNestedPreScroll(param0: number, param1: number, param2: number[], param3: number[], param4: number): boolean;
					setNestedScrollingEnabled(param0: boolean): void;
					isNestedScrollingEnabled(): boolean;
					startNestedScroll(param0: number): boolean;
					stopNestedScroll(): void;
					hasNestedScrollingParent(): boolean;
					dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[]): boolean;
					dispatchNestedPreScroll(param0: number, param1: number, param2: number[], param3: number[]): boolean;
					dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
					dispatchNestedPreFling(param0: number, param1: number): boolean;
				});
				public constructor();
				public stopNestedScroll(param0: number): void;
				public startNestedScroll(param0: number, param1: number): boolean;
				public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[], param5: number): boolean;
				public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[]): boolean;
				public stopNestedScroll(): void;
				public setNestedScrollingEnabled(param0: boolean): void;
				public startNestedScroll(param0: number): boolean;
				public hasNestedScrollingParent(param0: number): boolean;
				public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
				public dispatchNestedPreScroll(param0: number, param1: number, param2: number[], param3: number[], param4: number): boolean;
				public hasNestedScrollingParent(): boolean;
				public dispatchNestedPreFling(param0: number, param1: number): boolean;
				public isNestedScrollingEnabled(): boolean;
				public dispatchNestedPreScroll(param0: number, param1: number, param2: number[], param3: number[]): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class NestedScrollingChild3 extends java.lang.Object implements androidx.core.view.NestedScrollingChild2 {
				public static class: java.lang.Class<androidx.core.view.NestedScrollingChild3>;
				/**
				 * Constructs a new instance of the androidx.core.view.NestedScrollingChild3 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[], param5: number, param6: number[]): void;
					startNestedScroll(param0: number, param1: number): boolean;
					stopNestedScroll(param0: number): void;
					hasNestedScrollingParent(param0: number): boolean;
					dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[], param5: number): boolean;
					dispatchNestedPreScroll(param0: number, param1: number, param2: number[], param3: number[], param4: number): boolean;
					setNestedScrollingEnabled(param0: boolean): void;
					isNestedScrollingEnabled(): boolean;
					startNestedScroll(param0: number): boolean;
					stopNestedScroll(): void;
					hasNestedScrollingParent(): boolean;
					dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[]): boolean;
					dispatchNestedPreScroll(param0: number, param1: number, param2: number[], param3: number[]): boolean;
					dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
					dispatchNestedPreFling(param0: number, param1: number): boolean;
				});
				public constructor();
				public stopNestedScroll(param0: number): void;
				public startNestedScroll(param0: number, param1: number): boolean;
				public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[], param5: number): boolean;
				public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[]): boolean;
				public stopNestedScroll(): void;
				public setNestedScrollingEnabled(param0: boolean): void;
				public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[], param5: number, param6: number[]): void;
				public startNestedScroll(param0: number): boolean;
				public hasNestedScrollingParent(param0: number): boolean;
				public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
				public dispatchNestedPreScroll(param0: number, param1: number, param2: number[], param3: number[], param4: number): boolean;
				public hasNestedScrollingParent(): boolean;
				public dispatchNestedPreFling(param0: number, param1: number): boolean;
				public isNestedScrollingEnabled(): boolean;
				public dispatchNestedPreScroll(param0: number, param1: number, param2: number[], param3: number[]): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class NestedScrollingChildHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.NestedScrollingChildHelper>;
				public setNestedScrollingEnabled(enabled: boolean): void;
				public dispatchNestedPreScroll(dx: number, dy: number, consumed: number[], offsetInWindow: number[], type: number): boolean;
				public dispatchNestedPreScroll(dx: number, dy: number, consumed: number[], offsetInWindow: number[]): boolean;
				public hasNestedScrollingParent(type: number): boolean;
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: number[]): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public startNestedScroll(axes: number): boolean;
				public constructor(view: android.view.View);
				public stopNestedScroll(): void;
				public startNestedScroll(axes: number, type: number): boolean;
				public dispatchNestedPreFling(velocityX: number, velocityY: number): boolean;
				public hasNestedScrollingParent(): boolean;
				public stopNestedScroll(type: number): void;
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: number[], type: number): boolean;
				public onDetachedFromWindow(): void;
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: number[], type: number, consumed: number[]): void;
				public isNestedScrollingEnabled(): boolean;
				public dispatchNestedFling(velocityX: number, velocityY: number, consumed: boolean): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class NestedScrollingParent extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.NestedScrollingParent>;
				/**
				 * Constructs a new instance of the androidx.core.view.NestedScrollingParent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					onStopNestedScroll(param0: android.view.View): void;
					onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
					onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					getNestedScrollAxes(): number;
				});
				public constructor();
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public getNestedScrollAxes(): number;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public onStopNestedScroll(param0: android.view.View): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class NestedScrollingParent2 extends java.lang.Object implements androidx.core.view.NestedScrollingParent {
				public static class: java.lang.Class<androidx.core.view.NestedScrollingParent2>;
				/**
				 * Constructs a new instance of the androidx.core.view.NestedScrollingParent2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number, param3: number): boolean;
					onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number, param3: number): void;
					onStopNestedScroll(param0: android.view.View, param1: number): void;
					onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[], param4: number): void;
					onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					onStopNestedScroll(param0: android.view.View): void;
					onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
					onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					getNestedScrollAxes(): number;
				});
				public constructor();
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number, param3: number): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public onStopNestedScroll(param0: android.view.View, param1: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number, param3: number): boolean;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[], param4: number): void;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public getNestedScrollAxes(): number;
				public onStopNestedScroll(param0: android.view.View): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class NestedScrollingParent3 extends java.lang.Object implements androidx.core.view.NestedScrollingParent2 {
				public static class: java.lang.Class<androidx.core.view.NestedScrollingParent3>;
				/**
				 * Constructs a new instance of the androidx.core.view.NestedScrollingParent3 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number[]): void;
					onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number, param3: number): boolean;
					onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number, param3: number): void;
					onStopNestedScroll(param0: android.view.View, param1: number): void;
					onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[], param4: number): void;
					onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					onStopNestedScroll(param0: android.view.View): void;
					onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
					onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					getNestedScrollAxes(): number;
				});
				public constructor();
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number[]): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number, param3: number): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public onStopNestedScroll(param0: android.view.View, param1: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number, param3: number): boolean;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[], param4: number): void;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public getNestedScrollAxes(): number;
				public onStopNestedScroll(param0: android.view.View): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class NestedScrollingParentHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.NestedScrollingParentHelper>;
				public onStopNestedScroll(target: android.view.View, type: number): void;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number, type: number): void;
				public onStopNestedScroll(target: android.view.View): void;
				public constructor(viewGroup: android.view.ViewGroup);
				public getNestedScrollAxes(): number;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class OnApplyWindowInsetsListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.OnApplyWindowInsetsListener>;
				/**
				 * Constructs a new instance of the androidx.core.view.OnApplyWindowInsetsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onApplyWindowInsets(param0: android.view.View, param1: androidx.core.view.WindowInsetsCompat): androidx.core.view.WindowInsetsCompat;
				});
				public constructor();
				public onApplyWindowInsets(param0: android.view.View, param1: androidx.core.view.WindowInsetsCompat): androidx.core.view.WindowInsetsCompat;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class OnReceiveContentListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.OnReceiveContentListener>;
				/**
				 * Constructs a new instance of the androidx.core.view.OnReceiveContentListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onReceiveContent(param0: android.view.View, param1: androidx.core.view.ContentInfoCompat): androidx.core.view.ContentInfoCompat;
				});
				public constructor();
				public onReceiveContent(param0: android.view.View, param1: androidx.core.view.ContentInfoCompat): androidx.core.view.ContentInfoCompat;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class OnReceiveContentViewBehavior extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.OnReceiveContentViewBehavior>;
				/**
				 * Constructs a new instance of the androidx.core.view.OnReceiveContentViewBehavior interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onReceiveContent(param0: androidx.core.view.ContentInfoCompat): androidx.core.view.ContentInfoCompat;
				});
				public constructor();
				public onReceiveContent(param0: androidx.core.view.ContentInfoCompat): androidx.core.view.ContentInfoCompat;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class OneShotPreDrawListener extends java.lang.Object implements android.view.ViewTreeObserver.OnPreDrawListener, android.view.View.OnAttachStateChangeListener {
				public static class: java.lang.Class<androidx.core.view.OneShotPreDrawListener>;
				public static add(view: android.view.View, runnable: java.lang.Runnable): androidx.core.view.OneShotPreDrawListener;
				public onPreDraw(): boolean;
				public onViewDetachedFromWindow(param0: android.view.View): void;
				public onViewDetachedFromWindow(v: android.view.View): void;
				public onViewAttachedToWindow(param0: android.view.View): void;
				public removeListener(): void;
				public onViewAttachedToWindow(v: android.view.View): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class PointerIconCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.PointerIconCompat>;
				public static TYPE_NULL: number;
				public static TYPE_ARROW: number;
				public static TYPE_CONTEXT_MENU: number;
				public static TYPE_HAND: number;
				public static TYPE_HELP: number;
				public static TYPE_WAIT: number;
				public static TYPE_CELL: number;
				public static TYPE_CROSSHAIR: number;
				public static TYPE_TEXT: number;
				public static TYPE_VERTICAL_TEXT: number;
				public static TYPE_ALIAS: number;
				public static TYPE_COPY: number;
				public static TYPE_NO_DROP: number;
				public static TYPE_ALL_SCROLL: number;
				public static TYPE_HORIZONTAL_DOUBLE_ARROW: number;
				public static TYPE_VERTICAL_DOUBLE_ARROW: number;
				public static TYPE_TOP_RIGHT_DIAGONAL_DOUBLE_ARROW: number;
				public static TYPE_TOP_LEFT_DIAGONAL_DOUBLE_ARROW: number;
				public static TYPE_ZOOM_IN: number;
				public static TYPE_ZOOM_OUT: number;
				public static TYPE_GRAB: number;
				public static TYPE_GRABBING: number;
				public static TYPE_DEFAULT: number;
				public static create(bitmap: android.graphics.Bitmap, hotSpotX: number, hotSpotY: number): androidx.core.view.PointerIconCompat;
				public static load(resources: android.content.res.Resources, resourceId: number): androidx.core.view.PointerIconCompat;
				public static getSystemIcon(context: android.content.Context, style: number): androidx.core.view.PointerIconCompat;
				public getPointerIcon(): any;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ScaleGestureDetectorCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.ScaleGestureDetectorCompat>;
				/** @deprecated */
				public static isQuickScaleEnabled(scaleGestureDetector: any): boolean;
				public static setQuickScaleEnabled(scaleGestureDetector: android.view.ScaleGestureDetector, enabled: boolean): void;
				/** @deprecated */
				public static setQuickScaleEnabled(scaleGestureDetector: any, enabled: boolean): void;
				public static isQuickScaleEnabled(scaleGestureDetector: android.view.ScaleGestureDetector): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ScrollingView extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.ScrollingView>;
				/**
				 * Constructs a new instance of the androidx.core.view.ScrollingView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					computeHorizontalScrollRange(): number;
					computeHorizontalScrollOffset(): number;
					computeHorizontalScrollExtent(): number;
					computeVerticalScrollRange(): number;
					computeVerticalScrollOffset(): number;
					computeVerticalScrollExtent(): number;
				});
				public constructor();
				public computeHorizontalScrollExtent(): number;
				public computeHorizontalScrollRange(): number;
				public computeVerticalScrollOffset(): number;
				public computeVerticalScrollExtent(): number;
				public computeVerticalScrollRange(): number;
				public computeHorizontalScrollOffset(): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class TintableBackgroundView extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.TintableBackgroundView>;
				/**
				 * Constructs a new instance of the androidx.core.view.TintableBackgroundView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
					getSupportBackgroundTintList(): android.content.res.ColorStateList;
					setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
					getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
				});
				public constructor();
				public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
				public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public getSupportBackgroundTintList(): android.content.res.ColorStateList;
				public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class VelocityTrackerCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.VelocityTrackerCompat>;
				/** @deprecated */
				public static getYVelocity(tracker: android.view.VelocityTracker, pointerId: number): number;
				/** @deprecated */
				public static getXVelocity(tracker: android.view.VelocityTracker, pointerId: number): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ViewCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.ViewCompat>;
				public static OVER_SCROLL_ALWAYS: number;
				public static OVER_SCROLL_IF_CONTENT_SCROLLS: number;
				public static OVER_SCROLL_NEVER: number;
				public static IMPORTANT_FOR_ACCESSIBILITY_AUTO: number;
				public static IMPORTANT_FOR_ACCESSIBILITY_YES: number;
				public static IMPORTANT_FOR_ACCESSIBILITY_NO: number;
				public static IMPORTANT_FOR_ACCESSIBILITY_NO_HIDE_DESCENDANTS: number;
				public static ACCESSIBILITY_LIVE_REGION_NONE: number;
				public static ACCESSIBILITY_LIVE_REGION_POLITE: number;
				public static ACCESSIBILITY_LIVE_REGION_ASSERTIVE: number;
				public static LAYER_TYPE_NONE: number;
				public static LAYER_TYPE_SOFTWARE: number;
				public static LAYER_TYPE_HARDWARE: number;
				public static LAYOUT_DIRECTION_LTR: number;
				public static LAYOUT_DIRECTION_RTL: number;
				public static LAYOUT_DIRECTION_INHERIT: number;
				public static LAYOUT_DIRECTION_LOCALE: number;
				public static MEASURED_SIZE_MASK: number;
				public static MEASURED_STATE_MASK: number;
				public static MEASURED_HEIGHT_STATE_SHIFT: number;
				public static MEASURED_STATE_TOO_SMALL: number;
				public static SCROLL_AXIS_NONE: number;
				public static SCROLL_AXIS_HORIZONTAL: number;
				public static SCROLL_AXIS_VERTICAL: number;
				public static TYPE_TOUCH: number;
				public static TYPE_NON_TOUCH: number;
				public static SCROLL_INDICATOR_TOP: number;
				public static SCROLL_INDICATOR_BOTTOM: number;
				public static SCROLL_INDICATOR_LEFT: number;
				public static SCROLL_INDICATOR_RIGHT: number;
				public static SCROLL_INDICATOR_START: number;
				public static SCROLL_INDICATOR_END: number;
				public static setAccessibilityDelegate(v: android.view.View, delegate: androidx.core.view.AccessibilityDelegateCompat): void;
				public static isPaddingRelative(view: android.view.View): boolean;
				/** @deprecated */
				public static combineMeasuredStates(curState: number, newState: number): number;
				public static setAutofillHints(v: android.view.View, ...autofillHints: string[]): void;
				/** @deprecated */
				public static getX(view: android.view.View): number;
				public static cancelDragAndDrop(v: android.view.View): void;
				/** @deprecated */
				public static getMeasuredHeightAndState(view: android.view.View): number;
				/** @deprecated */
				public static setFitsSystemWindows(view: android.view.View, fitSystemWindows: boolean): void;
				/** @deprecated */
				public static isOpaque(view: android.view.View): boolean;
				/** @deprecated */
				public static getMatrix(view: android.view.View): android.graphics.Matrix;
				/** @deprecated */
				public static setRotationX(view: android.view.View, value: number): void;
				/** @deprecated */
				public static setPivotY(view: android.view.View, value: number): void;
				public static setWindowInsetsAnimationCallback(view: android.view.View, callback: androidx.core.view.WindowInsetsAnimationCompat.Callback): void;
				public static offsetLeftAndRight(view: android.view.View, offset: number): void;
				public static performAccessibilityAction(view: android.view.View, action: number, arguments: android.os.Bundle): boolean;
				public static setPaddingRelative(view: android.view.View, start: number, top: number, end: number, bottom: number): void;
				public static setImportantForAccessibility(view: android.view.View, mode: number): void;
				public static setLayerPaint(view: android.view.View, paint: android.graphics.Paint): void;
				public static getSystemGestureExclusionRects(view: android.view.View): java.util.List<android.graphics.Rect>;
				public static hasNestedScrollingParent(view: android.view.View): boolean;
				public static enableAccessibleClickableSpanSupport(view: android.view.View): void;
				public static dispatchNestedPreScroll(view: android.view.View, dx: number, dy: number, consumed: number[], offsetInWindow: number[], type: number): boolean;
				public static getElevation(view: android.view.View): number;
				public static getNextClusterForwardId(view: android.view.View): number;
				public static performReceiveContent(view: android.view.View, payload: androidx.core.view.ContentInfoCompat): androidx.core.view.ContentInfoCompat;
				public static isKeyboardNavigationCluster(view: android.view.View): boolean;
				/** @deprecated */
				public static canScrollHorizontally(view: android.view.View, direction: number): boolean;
				public static setZ(view: android.view.View, z: number): void;
				public static isScreenReaderFocusable(view: android.view.View): boolean;
				public static hasTransientState(view: android.view.View): boolean;
				/** @deprecated */
				public static getY(view: android.view.View): number;
				public static setTooltipText(view: android.view.View, tooltipText: string): void;
				public static isLayoutDirectionResolved(view: android.view.View): boolean;
				public static animate(view: android.view.View): androidx.core.view.ViewPropertyAnimatorCompat;
				public static isInLayout(view: android.view.View): boolean;
				public static getMinimumWidth(view: android.view.View): number;
				public static offsetTopAndBottom(view: android.view.View, offset: number): void;
				/** @deprecated */
				public static setTranslationX(view: android.view.View, value: number): void;
				public static setTransitionName(view: android.view.View, transitionName: string): void;
				public static removeOnUnhandledKeyEventListener(v: android.view.View, listener: androidx.core.view.ViewCompat.OnUnhandledKeyEventListenerCompat): void;
				/** @deprecated */
				public constructor();
				/** @deprecated */
				public static getAlpha(view: android.view.View): number;
				public static getLabelFor(view: android.view.View): number;
				public static getImportantForAutofill(v: android.view.View): number;
				public static setScrollIndicators(view: android.view.View, indicators: number, mask: number): void;
				public static getAccessibilityDelegate(view: android.view.View): androidx.core.view.AccessibilityDelegateCompat;
				public static isAttachedToWindow(view: android.view.View): boolean;
				public static hasExplicitFocusable(view: android.view.View): boolean;
				public static setHasTransientState(view: android.view.View, hasTransientState: boolean): void;
				public static generateViewId(): number;
				/** @deprecated */
				public static getRotation(view: android.view.View): number;
				/** @deprecated */
				public static getRotationX(view: android.view.View): number;
				public static getPaddingEnd(view: android.view.View): number;
				public static getDisplay(view: android.view.View): android.view.Display;
				public static saveAttributeDataForStyleable(view: android.view.View, context: android.content.Context, styleable: number[], attrs: android.util.AttributeSet, t: android.content.res.TypedArray, defStyleAttr: number, defStyleRes: number): void;
				public static setKeyboardNavigationCluster(view: android.view.View, isCluster: boolean): void;
				public static getBackgroundTintMode(view: android.view.View): android.graphics.PorterDuff.Mode;
				public static restoreDefaultFocus(view: android.view.View): boolean;
				public static getAccessibilityLiveRegion(view: android.view.View): number;
				public static startNestedScroll(view: android.view.View, axes: number): boolean;
				public static isNestedScrollingEnabled(view: android.view.View): boolean;
				public static setImportantForAutofill(v: android.view.View, mode: number): void;
				public static setAccessibilityPaneTitle(view: android.view.View, accessibilityPaneTitle: string): void;
				public static dispatchNestedPreFling(view: android.view.View, velocityX: number, velocityY: number): boolean;
				public static getMinimumHeight(view: android.view.View): number;
				public static setSystemGestureExclusionRects(view: android.view.View, rects: java.util.List<android.graphics.Rect>): void;
				public static dispatchNestedScroll(view: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: number[], type: number, consumed: number[]): void;
				public static isAccessibilityHeading(view: android.view.View): boolean;
				/** @deprecated */
				public static getLayerType(view: android.view.View): number;
				public static onInitializeAccessibilityNodeInfo(v: android.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
				/** @deprecated */
				public static setTranslationY(view: android.view.View, value: number): void;
				public static keyboardNavigationClusterSearch(view: android.view.View, currentCluster: android.view.View, direction: number): android.view.View;
				public static getAccessibilityPaneTitle(view: android.view.View): string;
				public static getClipBounds(view: android.view.View): android.graphics.Rect;
				public static setOnReceiveContentListener(view: android.view.View, mimeTypes: string[], listener: androidx.core.view.OnReceiveContentListener): void;
				public static postOnAnimationDelayed(view: android.view.View, action: java.lang.Runnable, delayMillis: number): void;
				public static getLayoutDirection(view: android.view.View): number;
				public static postInvalidateOnAnimation(view: android.view.View, left: number, top: number, right: number, bottom: number): void;
				public static getImportantForAccessibility(view: android.view.View): number;
				/** @deprecated */
				public static getMeasuredState(view: android.view.View): number;
				/** @deprecated */
				public static setLayerType(view: android.view.View, layerType: number, paint: android.graphics.Paint): void;
				/** @deprecated */
				public static setX(view: android.view.View, value: number): void;
				public static setLayoutDirection(view: android.view.View, layoutDirection: number): void;
				public static setScreenReaderFocusable(view: android.view.View, screenReaderFocusable: boolean): void;
				public static setNextClusterForwardId(view: android.view.View, nextClusterForwardId: number): void;
				/** @deprecated */
				public static resolveSizeAndState(size: number, measureSpec: number, childMeasuredState: number): number;
				public static dispatchNestedScroll(view: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: number[]): boolean;
				public static dispatchNestedScroll(view: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: number[], type: number): boolean;
				/** @deprecated */
				public static setActivated(view: android.view.View, activated: boolean): void;
				public static isFocusedByDefault(view: android.view.View): boolean;
				public static addOnUnhandledKeyEventListener(v: android.view.View, listener: androidx.core.view.ViewCompat.OnUnhandledKeyEventListenerCompat): void;
				public static getBackgroundTintList(view: android.view.View): android.content.res.ColorStateList;
				public static dispatchNestedPreScroll(view: android.view.View, dx: number, dy: number, consumed: number[], offsetInWindow: number[]): boolean;
				/** @deprecated */
				public static setSaveFromParentEnabled(v: android.view.View, enabled: boolean): void;
				/** @deprecated */
				public static getWindowSystemUiVisibility(view: android.view.View): number;
				public static replaceAccessibilityAction(view: android.view.View, replacedAction: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat, label: string, command: androidx.core.view.accessibility.AccessibilityViewCommand): void;
				/** @deprecated */
				public static getScaleX(view: android.view.View): number;
				public static setBackground(view: android.view.View, background: android.graphics.drawable.Drawable): void;
				public static setClipBounds(view: android.view.View, clipBounds: android.graphics.Rect): void;
				public static getRootWindowInsets(view: android.view.View): androidx.core.view.WindowInsetsCompat;
				public static setScrollIndicators(view: android.view.View, indicators: number): void;
				public static setBackgroundTintMode(view: android.view.View, mode: android.graphics.PorterDuff.Mode): void;
				public static hasOnClickListeners(view: android.view.View): boolean;
				public static setPointerIcon(view: android.view.View, pointerIcon: androidx.core.view.PointerIconCompat): void;
				public static stopNestedScroll(view: android.view.View): void;
				/** @deprecated */
				public static setY(view: android.view.View, value: number): void;
				public static startDragAndDrop(v: android.view.View, data: android.content.ClipData, shadowBuilder: android.view.View.DragShadowBuilder, myLocalState: any, flags: number): boolean;
				public static setOnApplyWindowInsetsListener(v: android.view.View, listener: androidx.core.view.OnApplyWindowInsetsListener): void;
				public static setElevation(view: android.view.View, elevation: number): void;
				/** @deprecated */
				public static jumpDrawablesToCurrentState(v: android.view.View): void;
				/** @deprecated */
				public static onPopulateAccessibilityEvent(v: android.view.View, event: android.view.accessibility.AccessibilityEvent): void;
				public static computeSystemWindowInsets(view: android.view.View, insets: androidx.core.view.WindowInsetsCompat, outLocalInsets: android.graphics.Rect): androidx.core.view.WindowInsetsCompat;
				public static removeAccessibilityAction(view: android.view.View, actionId: number): void;
				/** @deprecated */
				public static setChildrenDrawingOrderEnabled(viewGroup: android.view.ViewGroup, enabled: boolean): void;
				public static dispatchApplyWindowInsets(view: android.view.View, insets: androidx.core.view.WindowInsetsCompat): androidx.core.view.WindowInsetsCompat;
				/** @deprecated */
				public static getScaleY(view: android.view.View): number;
				public static getStateDescription(view: android.view.View): string;
				public static setBackgroundTintList(view: android.view.View, tintList: android.content.res.ColorStateList): void;
				public static postInvalidateOnAnimation(view: android.view.View): void;
				/** @deprecated */
				public static onInitializeAccessibilityEvent(v: android.view.View, event: android.view.accessibility.AccessibilityEvent): void;
				/** @deprecated */
				public static getTranslationY(view: android.view.View): number;
				public static getParentForAccessibility(view: android.view.View): android.view.ViewParent;
				/** @deprecated */
				public static getPivotX(view: android.view.View): number;
				public static getAccessibilityNodeProvider(view: android.view.View): androidx.core.view.accessibility.AccessibilityNodeProviderCompat;
				/** @deprecated */
				public static setScaleX(view: android.view.View, value: number): void;
				/** @deprecated */
				public static canScrollVertically(view: android.view.View, direction: number): boolean;
				/** @deprecated */
				public static getPivotY(view: android.view.View): number;
				public static getScrollIndicators(view: android.view.View): number;
				public static addAccessibilityAction(view: android.view.View, label: string, command: androidx.core.view.accessibility.AccessibilityViewCommand): number;
				public static addKeyboardNavigationClusters(view: android.view.View, views: java.util.Collection<android.view.View>, direction: number): void;
				public static dispatchFinishTemporaryDetach(view: android.view.View): void;
				public static setAccessibilityLiveRegion(view: android.view.View, mode: number): void;
				public static requestApplyInsets(view: android.view.View): void;
				public static getFitsSystemWindows(v: android.view.View): boolean;
				/** @deprecated */
				public static setRotation(view: android.view.View, value: number): void;
				public static dispatchStartTemporaryDetach(view: android.view.View): void;
				public static setNestedScrollingEnabled(view: android.view.View, enabled: boolean): void;
				public static isImportantForAccessibility(view: android.view.View): boolean;
				/** @deprecated */
				public static getTranslationX(view: android.view.View): number;
				public static setTranslationZ(view: android.view.View, translationZ: number): void;
				public static getTransitionName(view: android.view.View): string;
				/** @deprecated */
				public static setScaleY(view: android.view.View, value: number): void;
				/** @deprecated */
				public static getRotationY(view: android.view.View): number;
				/** @deprecated */
				public static getOverScrollMode(v: android.view.View): number;
				public static stopNestedScroll(view: android.view.View, type: number): void;
				public static requireViewById(view: android.view.View, id: number): android.view.View;
				/** @deprecated */
				public static setRotationY(view: android.view.View, value: number): void;
				/** @deprecated */
				public static setPivotX(view: android.view.View, value: number): void;
				public static hasAccessibilityDelegate(view: android.view.View): boolean;
				public static startNestedScroll(view: android.view.View, axes: number, type: number): boolean;
				public static getPaddingStart(view: android.view.View): number;
				/** @deprecated */
				public static setOverScrollMode(v: android.view.View, overScrollMode: number): void;
				public static updateDragShadow(v: android.view.View, shadowBuilder: android.view.View.DragShadowBuilder): void;
				/** @deprecated */
				public static getMeasuredWidthAndState(view: android.view.View): number;
				public static isImportantForAutofill(v: android.view.View): boolean;
				public static getWindowInsetsController(view: android.view.View): androidx.core.view.WindowInsetsControllerCompat;
				public static postOnAnimation(view: android.view.View, action: java.lang.Runnable): void;
				public static onApplyWindowInsets(view: android.view.View, insets: androidx.core.view.WindowInsetsCompat): androidx.core.view.WindowInsetsCompat;
				/** @deprecated */
				public static setAlpha(view: android.view.View, value: number): void;
				public static dispatchNestedFling(view: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public static setLabelFor(view: android.view.View, labeledId: number): void;
				public static hasNestedScrollingParent(view: android.view.View, type: number): boolean;
				public static getZ(view: android.view.View): number;
				public static setAccessibilityHeading(view: android.view.View, isHeading: boolean): void;
				public static hasOverlappingRendering(view: android.view.View): boolean;
				public static setFocusedByDefault(view: android.view.View, isFocusedByDefault: boolean): void;
				public static setStateDescription(view: android.view.View, stateDescription: string): void;
				public static getTranslationZ(view: android.view.View): number;
				public static getOnReceiveContentMimeTypes(view: android.view.View): string[];
				public static isLaidOut(view: android.view.View): boolean;
			}
			export module ViewCompat {
				export class AccessibilityPaneVisibilityManager extends java.lang.Object implements android.view.ViewTreeObserver.OnGlobalLayoutListener, android.view.View.OnAttachStateChangeListener {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.AccessibilityPaneVisibilityManager>;
					public onGlobalLayout(): void;
					public onViewDetachedFromWindow(view: android.view.View): void;
					public onViewDetachedFromWindow(param0: android.view.View): void;
					public onViewAttachedToWindow(view: android.view.View): void;
					public onViewAttachedToWindow(param0: android.view.View): void;
				}
				export abstract class AccessibilityViewProperty<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.AccessibilityViewProperty<any>>;
				}
				export class Api15Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.Api15Impl>;
				}
				export class Api16Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.Api16Impl>;
				}
				export class Api17Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.Api17Impl>;
				}
				export class Api18Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.Api18Impl>;
				}
				export class Api19Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.Api19Impl>;
				}
				export class Api20Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.Api20Impl>;
				}
				export class Api21Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.Api21Impl>;
					public static getRootWindowInsets(v: android.view.View): androidx.core.view.WindowInsetsCompat;
				}
				export class Api23Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.Api23Impl>;
					public static getRootWindowInsets(v: android.view.View): androidx.core.view.WindowInsetsCompat;
				}
				export class Api24Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.Api24Impl>;
				}
				export class Api26Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.Api26Impl>;
				}
				export class Api28Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.Api28Impl>;
				}
				export class Api29Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.Api29Impl>;
				}
				export class Api30Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.Api30Impl>;
					public static getWindowInsetsController(view: android.view.View): androidx.core.view.WindowInsetsControllerCompat;
				}
				export class Api31Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.Api31Impl>;
					public static getReceiveContentMimeTypes(view: android.view.View): string[];
					public static performReceiveContent(view: android.view.View, payload: androidx.core.view.ContentInfoCompat): androidx.core.view.ContentInfoCompat;
					public static setOnReceiveContentListener(view: android.view.View, mimeTypes: string[], listener: androidx.core.view.OnReceiveContentListener): void;
				}
				export class FocusDirection extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.FocusDirection>;
					/**
					 * Constructs a new instance of the androidx.core.view.ViewCompat$FocusDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class FocusRealDirection extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.FocusRealDirection>;
					/**
					 * Constructs a new instance of the androidx.core.view.ViewCompat$FocusRealDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class FocusRelativeDirection extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.FocusRelativeDirection>;
					/**
					 * Constructs a new instance of the androidx.core.view.ViewCompat$FocusRelativeDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class NestedScrollType extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.NestedScrollType>;
					/**
					 * Constructs a new instance of the androidx.core.view.ViewCompat$NestedScrollType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class OnReceiveContentListenerAdapter extends java.lang.Object implements android.view.OnReceiveContentListener {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.OnReceiveContentListenerAdapter>;
					public onReceiveContent(view: android.view.View, platPayload: android.view.ContentInfo): android.view.ContentInfo;
					public onReceiveContent(param0: android.view.View, param1: android.view.ContentInfo): android.view.ContentInfo;
				}
				export class OnUnhandledKeyEventListenerCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.OnUnhandledKeyEventListenerCompat>;
					/**
					 * Constructs a new instance of the androidx.core.view.ViewCompat$OnUnhandledKeyEventListenerCompat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onUnhandledKeyEvent(param0: android.view.View, param1: android.view.KeyEvent): boolean;
					});
					public constructor();
					public onUnhandledKeyEvent(param0: android.view.View, param1: android.view.KeyEvent): boolean;
				}
				export class ScrollAxis extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.ScrollAxis>;
					/**
					 * Constructs a new instance of the androidx.core.view.ViewCompat$ScrollAxis interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class ScrollIndicators extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.ScrollIndicators>;
					/**
					 * Constructs a new instance of the androidx.core.view.ViewCompat$ScrollIndicators interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class UnhandledKeyEventManager extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.ViewCompat.UnhandledKeyEventManager>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ViewConfigurationCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.ViewConfigurationCompat>;
				public static shouldShowMenuShortcutsWhenKeyboardPresent(config: android.view.ViewConfiguration, context: android.content.Context): boolean;
				public static getScaledHorizontalScrollFactor(config: android.view.ViewConfiguration, context: android.content.Context): number;
				/** @deprecated */
				public static hasPermanentMenuKey(config: android.view.ViewConfiguration): boolean;
				public static getScaledHoverSlop(config: android.view.ViewConfiguration): number;
				public static getScaledVerticalScrollFactor(config: android.view.ViewConfiguration, context: android.content.Context): number;
				/** @deprecated */
				public static getScaledPagingTouchSlop(config: android.view.ViewConfiguration): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ViewGroupCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.ViewGroupCompat>;
				public static LAYOUT_MODE_CLIP_BOUNDS: number;
				public static LAYOUT_MODE_OPTICAL_BOUNDS: number;
				/** @deprecated */
				public static setMotionEventSplittingEnabled(group: android.view.ViewGroup, split: boolean): void;
				public static isTransitionGroup(group: android.view.ViewGroup): boolean;
				public static getLayoutMode(group: android.view.ViewGroup): number;
				public static getNestedScrollAxes(group: android.view.ViewGroup): number;
				public static setLayoutMode(group: android.view.ViewGroup, mode: number): void;
				/** @deprecated */
				public static onRequestSendAccessibilityEvent(group: android.view.ViewGroup, child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public static setTransitionGroup(group: android.view.ViewGroup, isTransitionGroup: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ViewParentCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.ViewParentCompat>;
				public static onNestedScroll(parent: android.view.ViewParent, target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number): void;
				public static onNestedPreScroll(parent: android.view.ViewParent, target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public static onNestedPreFling(parent: android.view.ViewParent, target: android.view.View, velocityX: number, velocityY: number): boolean;
				public static onStopNestedScroll(parent: android.view.ViewParent, target: android.view.View, type: number): void;
				public static onStartNestedScroll(parent: android.view.ViewParent, child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public static onStartNestedScroll(parent: android.view.ViewParent, child: android.view.View, target: android.view.View, nestedScrollAxes: number, type: number): boolean;
				public static onNestedScroll(parent: android.view.ViewParent, target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public static onStopNestedScroll(parent: android.view.ViewParent, target: android.view.View): void;
				public static notifySubtreeAccessibilityStateChanged(parent: android.view.ViewParent, child: android.view.View, source: android.view.View, changeType: number): void;
				public static onNestedScrollAccepted(parent: android.view.ViewParent, child: android.view.View, target: android.view.View, nestedScrollAxes: number): void;
				public static onNestedPreScroll(parent: android.view.ViewParent, target: android.view.View, dx: number, dy: number, consumed: number[], type: number): void;
				public static onNestedScroll(parent: android.view.ViewParent, target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number, consumed: number[]): void;
				/** @deprecated */
				public static requestSendAccessibilityEvent(parent: android.view.ViewParent, child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public static onNestedScrollAccepted(parent: android.view.ViewParent, child: android.view.View, target: android.view.View, nestedScrollAxes: number, type: number): void;
				public static onNestedFling(parent: android.view.ViewParent, target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ViewPropertyAnimatorCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.ViewPropertyAnimatorCompat>;
				public rotationX(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public rotationXBy(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public rotationY(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public scaleX(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public setListener(listener: androidx.core.view.ViewPropertyAnimatorListener): androidx.core.view.ViewPropertyAnimatorCompat;
				public getDuration(): number;
				public xBy(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public translationYBy(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public rotation(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public scaleYBy(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public setInterpolator(value: android.view.animation.Interpolator): androidx.core.view.ViewPropertyAnimatorCompat;
				public withLayer(): androidx.core.view.ViewPropertyAnimatorCompat;
				public start(): void;
				public translationXBy(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public cancel(): void;
				public scaleY(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public scaleXBy(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public alphaBy(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public setUpdateListener(listener: androidx.core.view.ViewPropertyAnimatorUpdateListener): androidx.core.view.ViewPropertyAnimatorCompat;
				public setStartDelay(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public zBy(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public withStartAction(runnable: java.lang.Runnable): androidx.core.view.ViewPropertyAnimatorCompat;
				public getInterpolator(): android.view.animation.Interpolator;
				public getStartDelay(): number;
				public rotationBy(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public alpha(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public rotationYBy(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public setDuration(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public yBy(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public withEndAction(runnable: java.lang.Runnable): androidx.core.view.ViewPropertyAnimatorCompat;
				public translationZBy(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public translationY(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public y(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public translationX(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public x(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public translationZ(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public z(value: number): androidx.core.view.ViewPropertyAnimatorCompat;
			}
			export module ViewPropertyAnimatorCompat {
				export class ViewPropertyAnimatorListenerApi14 extends java.lang.Object implements androidx.core.view.ViewPropertyAnimatorListener {
					public static class: java.lang.Class<androidx.core.view.ViewPropertyAnimatorCompat.ViewPropertyAnimatorListenerApi14>;
					public onAnimationCancel(view: android.view.View): void;
					public onAnimationCancel(param0: android.view.View): void;
					public onAnimationStart(param0: android.view.View): void;
					public onAnimationStart(view: android.view.View): void;
					public onAnimationEnd(view: android.view.View): void;
					public onAnimationEnd(param0: android.view.View): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ViewPropertyAnimatorListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.ViewPropertyAnimatorListener>;
				/**
				 * Constructs a new instance of the androidx.core.view.ViewPropertyAnimatorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onAnimationStart(param0: android.view.View): void;
					onAnimationEnd(param0: android.view.View): void;
					onAnimationCancel(param0: android.view.View): void;
				});
				public constructor();
				public onAnimationEnd(param0: android.view.View): void;
				public onAnimationStart(param0: android.view.View): void;
				public onAnimationCancel(param0: android.view.View): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ViewPropertyAnimatorListenerAdapter extends java.lang.Object implements androidx.core.view.ViewPropertyAnimatorListener {
				public static class: java.lang.Class<androidx.core.view.ViewPropertyAnimatorListenerAdapter>;
				public onAnimationEnd(view: android.view.View): void;
				public onAnimationEnd(param0: android.view.View): void;
				public onAnimationStart(param0: android.view.View): void;
				public onAnimationCancel(param0: android.view.View): void;
				public onAnimationStart(view: android.view.View): void;
				public constructor();
				public onAnimationCancel(view: android.view.View): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class ViewPropertyAnimatorUpdateListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.ViewPropertyAnimatorUpdateListener>;
				/**
				 * Constructs a new instance of the androidx.core.view.ViewPropertyAnimatorUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onAnimationUpdate(param0: android.view.View): void;
				});
				public constructor();
				public onAnimationUpdate(param0: android.view.View): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class WindowCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.WindowCompat>;
				public static FEATURE_ACTION_BAR: number;
				public static FEATURE_ACTION_BAR_OVERLAY: number;
				public static FEATURE_ACTION_MODE_OVERLAY: number;
				public static requireViewById(window: android.view.Window, id: number): android.view.View;
				public static setDecorFitsSystemWindows(window: android.view.Window, decorFitsSystemWindows: boolean): void;
				public static getInsetsController(window: android.view.Window, view: android.view.View): androidx.core.view.WindowInsetsControllerCompat;
			}
			export module WindowCompat {
				export class Impl16 extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.WindowCompat.Impl16>;
				}
				export class Impl30 extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.WindowCompat.Impl30>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class WindowInsetsAnimationCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.WindowInsetsAnimationCompat>;
				public getFraction(): number;
				public getDurationMillis(): number;
				public constructor(typeMask: number, interpolator: android.view.animation.Interpolator, durationMillis: number);
				public setFraction(fraction: number): void;
				public getAlpha(): number;
				public getTypeMask(): number;
				public getInterpolatedFraction(): number;
				public getInterpolator(): android.view.animation.Interpolator;
				public setAlpha(alpha: number): void;
			}
			export module WindowInsetsAnimationCompat {
				export class BoundsCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsAnimationCompat.BoundsCompat>;
					public toString(): string;
					public getLowerBound(): androidx.core.graphics.Insets;
					public toBounds(): android.view.WindowInsetsAnimation.Bounds;
					public getUpperBound(): androidx.core.graphics.Insets;
					public inset(insets: androidx.core.graphics.Insets): androidx.core.view.WindowInsetsAnimationCompat.BoundsCompat;
					public constructor(lowerBound: androidx.core.graphics.Insets, upperBound: androidx.core.graphics.Insets);
					public static toBoundsCompat(bounds: android.view.WindowInsetsAnimation.Bounds): androidx.core.view.WindowInsetsAnimationCompat.BoundsCompat;
				}
				export abstract class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsAnimationCompat.Callback>;
					public static DISPATCH_MODE_STOP: number;
					public static DISPATCH_MODE_CONTINUE_ON_SUBTREE: number;
					public constructor(dispatchMode: number);
					public onProgress(param0: androidx.core.view.WindowInsetsCompat, param1: java.util.List<androidx.core.view.WindowInsetsAnimationCompat>): androidx.core.view.WindowInsetsCompat;
					public getDispatchMode(): number;
					public onPrepare(animation: androidx.core.view.WindowInsetsAnimationCompat): void;
					public onEnd(animation: androidx.core.view.WindowInsetsAnimationCompat): void;
					public onStart(animation: androidx.core.view.WindowInsetsAnimationCompat, bounds: androidx.core.view.WindowInsetsAnimationCompat.BoundsCompat): androidx.core.view.WindowInsetsAnimationCompat.BoundsCompat;
				}
				export module Callback {
					export class DispatchMode extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.core.view.WindowInsetsAnimationCompat.Callback.DispatchMode>;
						/**
						 * Constructs a new instance of the androidx.core.view.WindowInsetsAnimationCompat$Callback$DispatchMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
				export class Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsAnimationCompat.Impl>;
					public getAlpha(): number;
					public getInterpolator(): android.view.animation.Interpolator;
					public getTypeMask(): number;
					public getFraction(): number;
					public getDurationMillis(): number;
					public setFraction(fraction: number): void;
					public setAlpha(alpha: number): void;
					public getInterpolatedFraction(): number;
				}
				export class Impl21 extends androidx.core.view.WindowInsetsAnimationCompat.Impl {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsAnimationCompat.Impl21>;
				}
				export module Impl21 {
					export class Impl21OnApplyWindowInsetsListener extends java.lang.Object implements android.view.View.OnApplyWindowInsetsListener {
						public static class: java.lang.Class<androidx.core.view.WindowInsetsAnimationCompat.Impl21.Impl21OnApplyWindowInsetsListener>;
						public onApplyWindowInsets(param0: android.view.View, param1: android.view.WindowInsets): android.view.WindowInsets;
						public onApplyWindowInsets(v: android.view.View, insets: android.view.WindowInsets): android.view.WindowInsets;
					}
				}
				export class Impl30 extends androidx.core.view.WindowInsetsAnimationCompat.Impl {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsAnimationCompat.Impl30>;
					public getInterpolator(): android.view.animation.Interpolator;
					public static getLowerBounds(bounds: android.view.WindowInsetsAnimation.Bounds): androidx.core.graphics.Insets;
					public static createPlatformBounds(bounds: androidx.core.view.WindowInsetsAnimationCompat.BoundsCompat): android.view.WindowInsetsAnimation.Bounds;
					public getTypeMask(): number;
					public static setCallback(view: android.view.View, callback: androidx.core.view.WindowInsetsAnimationCompat.Callback): void;
					public getDurationMillis(): number;
					public getFraction(): number;
					public setFraction(fraction: number): void;
					public static getHigherBounds(bounds: android.view.WindowInsetsAnimation.Bounds): androidx.core.graphics.Insets;
					public getInterpolatedFraction(): number;
				}
				export module Impl30 {
					export class ProxyCallback extends android.view.WindowInsetsAnimation.Callback {
						public static class: java.lang.Class<androidx.core.view.WindowInsetsAnimationCompat.Impl30.ProxyCallback>;
						public onEnd(animation: android.view.WindowInsetsAnimation): void;
						public onProgress(insets: android.view.WindowInsets, runningAnimations: java.util.List<android.view.WindowInsetsAnimation>): android.view.WindowInsets;
						public onPrepare(animation: android.view.WindowInsetsAnimation): void;
						public onStart(animation: android.view.WindowInsetsAnimation, bounds: android.view.WindowInsetsAnimation.Bounds): android.view.WindowInsetsAnimation.Bounds;
						public onProgress(param0: android.view.WindowInsets, param1: java.util.List<android.view.WindowInsetsAnimation>): android.view.WindowInsets;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class WindowInsetsAnimationControlListenerCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.WindowInsetsAnimationControlListenerCompat>;
				/**
				 * Constructs a new instance of the androidx.core.view.WindowInsetsAnimationControlListenerCompat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onReady(param0: androidx.core.view.WindowInsetsAnimationControllerCompat, param1: number): void;
					onFinished(param0: androidx.core.view.WindowInsetsAnimationControllerCompat): void;
					onCancelled(param0: androidx.core.view.WindowInsetsAnimationControllerCompat): void;
				});
				public constructor();
				public onReady(param0: androidx.core.view.WindowInsetsAnimationControllerCompat, param1: number): void;
				public onFinished(param0: androidx.core.view.WindowInsetsAnimationControllerCompat): void;
				public onCancelled(param0: androidx.core.view.WindowInsetsAnimationControllerCompat): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class WindowInsetsAnimationControllerCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.WindowInsetsAnimationControllerCompat>;
				public getTypes(): number;
				public finish(shown: boolean): void;
				public getCurrentFraction(): number;
				public getHiddenStateInsets(): androidx.core.graphics.Insets;
				public getShownStateInsets(): androidx.core.graphics.Insets;
				public getCurrentInsets(): androidx.core.graphics.Insets;
				public getCurrentAlpha(): number;
				public isReady(): boolean;
				public isFinished(): boolean;
				public setInsetsAndAlpha(insets: androidx.core.graphics.Insets, alpha: number, fraction: number): void;
				public isCancelled(): boolean;
			}
			export module WindowInsetsAnimationControllerCompat {
				export class Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsAnimationControllerCompat.Impl>;
					public isReady(): boolean;
					public getCurrentFraction(): number;
					public setInsetsAndAlpha(insets: androidx.core.graphics.Insets, alpha: number, fraction: number): void;
					public getCurrentInsets(): androidx.core.graphics.Insets;
					public getTypes(): number;
					public getCurrentAlpha(): number;
					public getHiddenStateInsets(): androidx.core.graphics.Insets;
					public getShownStateInsets(): androidx.core.graphics.Insets;
				}
				export class Impl30 extends androidx.core.view.WindowInsetsAnimationControllerCompat.Impl {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsAnimationControllerCompat.Impl30>;
					public isReady(): boolean;
					public getCurrentFraction(): number;
					public setInsetsAndAlpha(insets: androidx.core.graphics.Insets, alpha: number, fraction: number): void;
					public getCurrentInsets(): androidx.core.graphics.Insets;
					public getTypes(): number;
					public getCurrentAlpha(): number;
					public getHiddenStateInsets(): androidx.core.graphics.Insets;
					public getShownStateInsets(): androidx.core.graphics.Insets;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class WindowInsetsCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.WindowInsetsCompat>;
				public static CONSUMED: androidx.core.view.WindowInsetsCompat;
				/** @deprecated */
				public getSystemWindowInsetRight(): number;
				/** @deprecated */
				public getStableInsetLeft(): number;
				/** @deprecated */
				public getStableInsetBottom(): number;
				public isConsumed(): boolean;
				/** @deprecated */
				public getStableInsets(): androidx.core.graphics.Insets;
				/** @deprecated */
				public replaceSystemWindowInsets(left: number, top: number, right: number, bottom: number): androidx.core.view.WindowInsetsCompat;
				public getDisplayCutout(): androidx.core.view.DisplayCutoutCompat;
				public constructor(src: androidx.core.view.WindowInsetsCompat);
				/** @deprecated */
				public getSystemWindowInsetLeft(): number;
				/** @deprecated */
				public consumeStableInsets(): androidx.core.view.WindowInsetsCompat;
				public hashCode(): number;
				/** @deprecated */
				public getSystemWindowInsets(): androidx.core.graphics.Insets;
				/** @deprecated */
				public hasSystemWindowInsets(): boolean;
				public equals(o: any): boolean;
				public getInsetsIgnoringVisibility(typeMask: number): androidx.core.graphics.Insets;
				public static toWindowInsetsCompat(insets: android.view.WindowInsets): androidx.core.view.WindowInsetsCompat;
				/** @deprecated */
				public consumeSystemWindowInsets(): androidx.core.view.WindowInsetsCompat;
				public inset(left: number, top: number, right: number, bottom: number): androidx.core.view.WindowInsetsCompat;
				/** @deprecated */
				public getSystemWindowInsetTop(): number;
				public isVisible(typeMask: number): boolean;
				public isRound(): boolean;
				public toWindowInsets(): android.view.WindowInsets;
				public getInsets(typeMask: number): androidx.core.graphics.Insets;
				/** @deprecated */
				public getSystemGestureInsets(): androidx.core.graphics.Insets;
				public equals(obj: any): boolean;
				/** @deprecated */
				public consumeDisplayCutout(): androidx.core.view.WindowInsetsCompat;
				/** @deprecated */
				public replaceSystemWindowInsets(systemWindowInsets: android.graphics.Rect): androidx.core.view.WindowInsetsCompat;
				/** @deprecated */
				public getStableInsetTop(): number;
				/** @deprecated */
				public hasStableInsets(): boolean;
				/** @deprecated */
				public getMandatorySystemGestureInsets(): androidx.core.graphics.Insets;
				/** @deprecated */
				public getStableInsetRight(): number;
				/** @deprecated */
				public getTappableElementInsets(): androidx.core.graphics.Insets;
				/** @deprecated */
				public getSystemWindowInsetBottom(): number;
				public hasInsets(): boolean;
				public static toWindowInsetsCompat(insets: android.view.WindowInsets, view: android.view.View): androidx.core.view.WindowInsetsCompat;
				public inset(insets: androidx.core.graphics.Insets): androidx.core.view.WindowInsetsCompat;
			}
			export module WindowInsetsCompat {
				export class Api21ReflectionHolder extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsCompat.Api21ReflectionHolder>;
					public static getRootWindowInsets(v: android.view.View): androidx.core.view.WindowInsetsCompat;
				}
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsCompat.Builder>;
					public constructor(insets: androidx.core.view.WindowInsetsCompat);
					/** @deprecated */
					public setStableInsets(insets: androidx.core.graphics.Insets): androidx.core.view.WindowInsetsCompat.Builder;
					public constructor();
					/** @deprecated */
					public setSystemGestureInsets(insets: androidx.core.graphics.Insets): androidx.core.view.WindowInsetsCompat.Builder;
					/** @deprecated */
					public setSystemWindowInsets(insets: androidx.core.graphics.Insets): androidx.core.view.WindowInsetsCompat.Builder;
					public setInsetsIgnoringVisibility(typeMask: number, insets: androidx.core.graphics.Insets): androidx.core.view.WindowInsetsCompat.Builder;
					/** @deprecated */
					public setMandatorySystemGestureInsets(insets: androidx.core.graphics.Insets): androidx.core.view.WindowInsetsCompat.Builder;
					public setInsets(typeMask: number, insets: androidx.core.graphics.Insets): androidx.core.view.WindowInsetsCompat.Builder;
					public setDisplayCutout(displayCutout: androidx.core.view.DisplayCutoutCompat): androidx.core.view.WindowInsetsCompat.Builder;
					/** @deprecated */
					public setTappableElementInsets(insets: androidx.core.graphics.Insets): androidx.core.view.WindowInsetsCompat.Builder;
					public setVisible(typeMask: number, visible: boolean): androidx.core.view.WindowInsetsCompat.Builder;
					public build(): androidx.core.view.WindowInsetsCompat;
				}
				export class BuilderImpl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsCompat.BuilderImpl>;
					public applyInsetTypes(): void;
				}
				export class BuilderImpl20 extends androidx.core.view.WindowInsetsCompat.BuilderImpl {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsCompat.BuilderImpl20>;
				}
				export class BuilderImpl29 extends androidx.core.view.WindowInsetsCompat.BuilderImpl {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsCompat.BuilderImpl29>;
				}
				export class BuilderImpl30 extends androidx.core.view.WindowInsetsCompat.BuilderImpl29 {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsCompat.BuilderImpl30>;
				}
				export class Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsCompat.Impl>;
					public equals(obj: any): boolean;
					public setOverriddenInsets(insetsTypeMask: androidx.core.graphics.Insets[]): void;
					public setStableInsets(stableInsets: androidx.core.graphics.Insets): void;
					public equals(o: any): boolean;
					public hashCode(): number;
				}
				export class Impl20 extends androidx.core.view.WindowInsetsCompat.Impl {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsCompat.Impl20>;
					public getInsets(typeMask: number): androidx.core.graphics.Insets;
					public setOverriddenInsets(insetsTypeMask: androidx.core.graphics.Insets[]): void;
					public isTypeVisible(type: number): boolean;
					public getInsetsForType(type: number, ignoreVisibility: boolean): androidx.core.graphics.Insets;
					public equals(o: any): boolean;
					public getInsetsIgnoringVisibility(typeMask: number): androidx.core.graphics.Insets;
				}
				export class Impl21 extends androidx.core.view.WindowInsetsCompat.Impl20 {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsCompat.Impl21>;
					public setStableInsets(stableInsets: androidx.core.graphics.Insets): void;
				}
				export class Impl28 extends androidx.core.view.WindowInsetsCompat.Impl21 {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsCompat.Impl28>;
					public equals(o: any): boolean;
					public hashCode(): number;
				}
				export class Impl29 extends androidx.core.view.WindowInsetsCompat.Impl28 {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsCompat.Impl29>;
					public setStableInsets(stableInsets: androidx.core.graphics.Insets): void;
				}
				export class Impl30 extends androidx.core.view.WindowInsetsCompat.Impl29 {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsCompat.Impl30>;
					public getInsets(typeMask: number): androidx.core.graphics.Insets;
					public getInsetsIgnoringVisibility(typeMask: number): androidx.core.graphics.Insets;
					public isVisible(typeMask: number): boolean;
				}
				export class Type extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsCompat.Type>;
					public static mandatorySystemGestures(): number;
					public static statusBars(): number;
					public static ime(): number;
					public static systemBars(): number;
					public static systemGestures(): number;
					public static navigationBars(): number;
					public static captionBar(): number;
					public static tappableElement(): number;
					public static displayCutout(): number;
				}
				export module Type {
					export class InsetsType extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.core.view.WindowInsetsCompat.Type.InsetsType>;
						/**
						 * Constructs a new instance of the androidx.core.view.WindowInsetsCompat$Type$InsetsType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
				export class TypeImpl30 extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsCompat.TypeImpl30>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export class WindowInsetsControllerCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.view.WindowInsetsControllerCompat>;
				public static BEHAVIOR_SHOW_BARS_BY_TOUCH: number;
				public static BEHAVIOR_SHOW_BARS_BY_SWIPE: number;
				public static BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE: number;
				public setAppearanceLightNavigationBars(isLight: boolean): void;
				public hide(types: number): void;
				public isAppearanceLightNavigationBars(): boolean;
				public setSystemBarsBehavior(behavior: number): void;
				public getSystemBarsBehavior(): number;
				public isAppearanceLightStatusBars(): boolean;
				public removeOnControllableInsetsChangedListener(listener: androidx.core.view.WindowInsetsControllerCompat.OnControllableInsetsChangedListener): void;
				public show(types: number): void;
				public controlWindowInsetsAnimation(types: number, durationMillis: number, param2: android.view.animation.Interpolator, interpolator: android.os.CancellationSignal, cancellationSignal: androidx.core.view.WindowInsetsAnimationControlListenerCompat): void;
				public addOnControllableInsetsChangedListener(listener: androidx.core.view.WindowInsetsControllerCompat.OnControllableInsetsChangedListener): void;
				public setAppearanceLightStatusBars(isLight: boolean): void;
				public constructor(window: android.view.Window, view: android.view.View);
				public static toWindowInsetsControllerCompat(insetsController: android.view.WindowInsetsController): androidx.core.view.WindowInsetsControllerCompat;
			}
			export module WindowInsetsControllerCompat {
				export class Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsControllerCompat.Impl>;
					public setAppearanceLightStatusBars(isLight: boolean): void;
					public isAppearanceLightStatusBars(): boolean;
					public isAppearanceLightNavigationBars(): boolean;
					public setAppearanceLightNavigationBars(isLight: boolean): void;
				}
				export class Impl20 extends androidx.core.view.WindowInsetsControllerCompat.Impl {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsControllerCompat.Impl20>;
					public mWindow: android.view.Window;
					public setWindowFlag(windowFlag: number): void;
					public unsetWindowFlag(windowFlag: number): void;
					public setSystemUiFlag(systemUiFlag: number): void;
					public unsetSystemUiFlag(systemUiFlag: number): void;
				}
				export class Impl23 extends androidx.core.view.WindowInsetsControllerCompat.Impl20 {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsControllerCompat.Impl23>;
					public setAppearanceLightStatusBars(isLight: boolean): void;
					public isAppearanceLightStatusBars(): boolean;
				}
				export class Impl26 extends androidx.core.view.WindowInsetsControllerCompat.Impl23 {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsControllerCompat.Impl26>;
					public isAppearanceLightNavigationBars(): boolean;
					public setAppearanceLightNavigationBars(isLight: boolean): void;
				}
				export class Impl30 extends androidx.core.view.WindowInsetsControllerCompat.Impl {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsControllerCompat.Impl30>;
					public mWindow: android.view.Window;
					public setAppearanceLightStatusBars(isLight: boolean): void;
					public isAppearanceLightStatusBars(): boolean;
					public isAppearanceLightNavigationBars(): boolean;
					public setAppearanceLightNavigationBars(isLight: boolean): void;
					public unsetSystemUiFlag(systemUiFlag: number): void;
				}
				export class OnControllableInsetsChangedListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.WindowInsetsControllerCompat.OnControllableInsetsChangedListener>;
					/**
					 * Constructs a new instance of the androidx.core.view.WindowInsetsControllerCompat$OnControllableInsetsChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onControllableInsetsChanged(param0: androidx.core.view.WindowInsetsControllerCompat, param1: number): void;
					});
					public constructor();
					public onControllableInsetsChanged(param0: androidx.core.view.WindowInsetsControllerCompat, param1: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module accessibility {
				export class AccessibilityClickableSpanCompat extends android.text.style.ClickableSpan {
					public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityClickableSpanCompat>;
					public static SPAN_ID: string;
					public constructor(originalClickableSpanId: number, nodeInfoCompat: androidx.core.view.accessibility.AccessibilityNodeInfoCompat, clickableSpanActionId: number);
					public constructor();
					public onClick(unused: android.view.View): void;
					public onClick(param0: android.view.View): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module accessibility {
				export class AccessibilityEventCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityEventCompat>;
					public static TYPE_VIEW_HOVER_ENTER: number;
					public static TYPE_VIEW_HOVER_EXIT: number;
					public static TYPE_TOUCH_EXPLORATION_GESTURE_START: number;
					public static TYPE_TOUCH_EXPLORATION_GESTURE_END: number;
					public static TYPE_WINDOW_CONTENT_CHANGED: number;
					public static TYPE_VIEW_SCROLLED: number;
					public static TYPE_VIEW_TEXT_SELECTION_CHANGED: number;
					public static TYPE_ANNOUNCEMENT: number;
					public static TYPE_VIEW_ACCESSIBILITY_FOCUSED: number;
					public static TYPE_VIEW_ACCESSIBILITY_FOCUS_CLEARED: number;
					public static TYPE_VIEW_TEXT_TRAVERSED_AT_MOVEMENT_GRANULARITY: number;
					public static TYPE_GESTURE_DETECTION_START: number;
					public static TYPE_GESTURE_DETECTION_END: number;
					public static TYPE_TOUCH_INTERACTION_START: number;
					public static TYPE_TOUCH_INTERACTION_END: number;
					public static TYPE_WINDOWS_CHANGED: number;
					public static TYPE_VIEW_CONTEXT_CLICKED: number;
					public static TYPE_ASSIST_READING_CONTEXT: number;
					public static CONTENT_CHANGE_TYPE_UNDEFINED: number;
					public static CONTENT_CHANGE_TYPE_SUBTREE: number;
					public static CONTENT_CHANGE_TYPE_TEXT: number;
					public static CONTENT_CHANGE_TYPE_CONTENT_DESCRIPTION: number;
					public static CONTENT_CHANGE_TYPE_PANE_TITLE: number;
					public static CONTENT_CHANGE_TYPE_PANE_APPEARED: number;
					public static CONTENT_CHANGE_TYPE_PANE_DISAPPEARED: number;
					public static CONTENT_CHANGE_TYPE_STATE_DESCRIPTION: number;
					public static TYPES_ALL_MASK: number;
					/** @deprecated */
					public static asRecord(event: android.view.accessibility.AccessibilityEvent): androidx.core.view.accessibility.AccessibilityRecordCompat;
					public static setAction(event: android.view.accessibility.AccessibilityEvent, action: number): void;
					public static getMovementGranularity(event: android.view.accessibility.AccessibilityEvent): number;
					public static getContentChangeTypes(event: android.view.accessibility.AccessibilityEvent): number;
					/** @deprecated */
					public static getRecord(event: android.view.accessibility.AccessibilityEvent, index: number): androidx.core.view.accessibility.AccessibilityRecordCompat;
					public static setMovementGranularity(event: android.view.accessibility.AccessibilityEvent, granularity: number): void;
					/** @deprecated */
					public static getRecordCount(event: android.view.accessibility.AccessibilityEvent): number;
					/** @deprecated */
					public static appendRecord(event: android.view.accessibility.AccessibilityEvent, record: androidx.core.view.accessibility.AccessibilityRecordCompat): void;
					public static getAction(event: android.view.accessibility.AccessibilityEvent): number;
					public static setContentChangeTypes(event: android.view.accessibility.AccessibilityEvent, changeTypes: number): void;
				}
				export module AccessibilityEventCompat {
					export class ContentChangeType extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityEventCompat.ContentChangeType>;
						/**
						 * Constructs a new instance of the androidx.core.view.accessibility.AccessibilityEventCompat$ContentChangeType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module accessibility {
				export class AccessibilityManagerCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityManagerCompat>;
					/** @deprecated */
					public static removeAccessibilityStateChangeListener(manager: android.view.accessibility.AccessibilityManager, listener: androidx.core.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListener): boolean;
					/** @deprecated */
					public static getInstalledAccessibilityServiceList(manager: android.view.accessibility.AccessibilityManager): java.util.List<android.accessibilityservice.AccessibilityServiceInfo>;
					/** @deprecated */
					public static addAccessibilityStateChangeListener(manager: android.view.accessibility.AccessibilityManager, listener: androidx.core.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListener): boolean;
					public static addTouchExplorationStateChangeListener(manager: android.view.accessibility.AccessibilityManager, listener: androidx.core.view.accessibility.AccessibilityManagerCompat.TouchExplorationStateChangeListener): boolean;
					/** @deprecated */
					public static isTouchExplorationEnabled(manager: android.view.accessibility.AccessibilityManager): boolean;
					/** @deprecated */
					public static getEnabledAccessibilityServiceList(manager: android.view.accessibility.AccessibilityManager, feedbackTypeFlags: number): java.util.List<android.accessibilityservice.AccessibilityServiceInfo>;
					public static removeTouchExplorationStateChangeListener(manager: android.view.accessibility.AccessibilityManager, listener: androidx.core.view.accessibility.AccessibilityManagerCompat.TouchExplorationStateChangeListener): boolean;
				}
				export module AccessibilityManagerCompat {
					export class AccessibilityStateChangeListener extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListener>;
						/**
						 * Constructs a new instance of the androidx.core.view.accessibility.AccessibilityManagerCompat$AccessibilityStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAccessibilityStateChanged(param0: boolean): void;
						});
						public constructor();
						/** @deprecated */
						public onAccessibilityStateChanged(param0: boolean): void;
					}
					export abstract class AccessibilityStateChangeListenerCompat extends java.lang.Object implements androidx.core.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListener {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListenerCompat>;
						public constructor();
						/** @deprecated */
						public onAccessibilityStateChanged(param0: boolean): void;
					}
					export class AccessibilityStateChangeListenerWrapper extends java.lang.Object implements android.view.accessibility.AccessibilityManager.AccessibilityStateChangeListener {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityManagerCompat.AccessibilityStateChangeListenerWrapper>;
						public equals(obj: any): boolean;
						public onAccessibilityStateChanged(enabled: boolean): void;
						public hashCode(): number;
						public onAccessibilityStateChanged(param0: boolean): void;
						public equals(o: any): boolean;
					}
					export class TouchExplorationStateChangeListener extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityManagerCompat.TouchExplorationStateChangeListener>;
						/**
						 * Constructs a new instance of the androidx.core.view.accessibility.AccessibilityManagerCompat$TouchExplorationStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onTouchExplorationStateChanged(param0: boolean): void;
						});
						public constructor();
						public onTouchExplorationStateChanged(param0: boolean): void;
					}
					export class TouchExplorationStateChangeListenerWrapper extends java.lang.Object implements android.view.accessibility.AccessibilityManager.TouchExplorationStateChangeListener {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityManagerCompat.TouchExplorationStateChangeListenerWrapper>;
						public equals(obj: any): boolean;
						public hashCode(): number;
						public equals(o: any): boolean;
						public onTouchExplorationStateChanged(enabled: boolean): void;
						public onTouchExplorationStateChanged(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module accessibility {
				export class AccessibilityNodeInfoCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityNodeInfoCompat>;
					public mParentVirtualDescendantId: number;
					public static ACTION_FOCUS: number;
					public static ACTION_CLEAR_FOCUS: number;
					public static ACTION_SELECT: number;
					public static ACTION_CLEAR_SELECTION: number;
					public static ACTION_CLICK: number;
					public static ACTION_LONG_CLICK: number;
					public static ACTION_ACCESSIBILITY_FOCUS: number;
					public static ACTION_CLEAR_ACCESSIBILITY_FOCUS: number;
					public static ACTION_NEXT_AT_MOVEMENT_GRANULARITY: number;
					public static ACTION_PREVIOUS_AT_MOVEMENT_GRANULARITY: number;
					public static ACTION_NEXT_HTML_ELEMENT: number;
					public static ACTION_PREVIOUS_HTML_ELEMENT: number;
					public static ACTION_SCROLL_FORWARD: number;
					public static ACTION_SCROLL_BACKWARD: number;
					public static ACTION_COPY: number;
					public static ACTION_PASTE: number;
					public static ACTION_CUT: number;
					public static ACTION_SET_SELECTION: number;
					public static ACTION_EXPAND: number;
					public static ACTION_COLLAPSE: number;
					public static ACTION_DISMISS: number;
					public static ACTION_SET_TEXT: number;
					public static ACTION_ARGUMENT_MOVEMENT_GRANULARITY_INT: string;
					public static ACTION_ARGUMENT_HTML_ELEMENT_STRING: string;
					public static ACTION_ARGUMENT_EXTEND_SELECTION_BOOLEAN: string;
					public static ACTION_ARGUMENT_SELECTION_START_INT: string;
					public static ACTION_ARGUMENT_SELECTION_END_INT: string;
					public static ACTION_ARGUMENT_SET_TEXT_CHARSEQUENCE: string;
					public static ACTION_ARGUMENT_ROW_INT: string;
					public static ACTION_ARGUMENT_COLUMN_INT: string;
					public static ACTION_ARGUMENT_PROGRESS_VALUE: string;
					public static ACTION_ARGUMENT_MOVE_WINDOW_X: string;
					public static ACTION_ARGUMENT_MOVE_WINDOW_Y: string;
					public static ACTION_ARGUMENT_PRESS_AND_HOLD_DURATION_MILLIS_INT: string;
					public static FOCUS_INPUT: number;
					public static FOCUS_ACCESSIBILITY: number;
					public static MOVEMENT_GRANULARITY_CHARACTER: number;
					public static MOVEMENT_GRANULARITY_WORD: number;
					public static MOVEMENT_GRANULARITY_LINE: number;
					public static MOVEMENT_GRANULARITY_PARAGRAPH: number;
					public static MOVEMENT_GRANULARITY_PAGE: number;
					public setDismissable(dismissable: boolean): void;
					public recycle(): void;
					public isFocusable(): boolean;
					public setBoundsInScreen(bounds: android.graphics.Rect): void;
					public setTouchDelegateInfo(delegatedInfo: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.TouchDelegateInfoCompat): void;
					public getParent(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public isClickable(): boolean;
					public setLabeledBy(label: android.view.View): void;
					public getContentDescription(): string;
					public getBoundsInScreen(outBounds: android.graphics.Rect): void;
					public removeChild(root: android.view.View, virtualDescendantId: number): boolean;
					public static obtain(root: android.view.View, virtualDescendantId: number): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public setTraversalBefore(view: android.view.View): void;
					public isVisibleToUser(): boolean;
					public isHeading(): boolean;
					public setTooltipText(tooltipText: string): void;
					public setError(error: string): void;
					public getLabeledBy(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public getLabelFor(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public addAction(action: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat): void;
					public setEnabled(enabled: boolean): void;
					public setLabelFor(root: android.view.View, virtualDescendantId: number): void;
					public unwrap(): android.view.accessibility.AccessibilityNodeInfo;
					public getTextSelectionStart(): number;
					public getChild(index: number): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public getTraversalBefore(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public setText(text: string): void;
					public setTraversalBefore(root: android.view.View, virtualDescendantId: number): void;
					public isSelected(): boolean;
					public setFocusable(focusable: boolean): void;
					public setSelected(selected: boolean): void;
					public setRangeInfo(rangeInfo: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.RangeInfoCompat): void;
					public getPackageName(): string;
					public setPaneTitle(paneTitle: string): void;
					public static obtain(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public setCanOpenPopup(opensPopup: boolean): void;
					public getViewIdResourceName(): string;
					public getDrawingOrder(): number;
					public getWindow(): androidx.core.view.accessibility.AccessibilityWindowInfoCompat;
					public setTraversalAfter(view: android.view.View): void;
					public setScreenReaderFocusable(screenReaderFocusable: boolean): void;
					public addChild(child: android.view.View): void;
					/** @deprecated */
					public getBoundsInParent(outBounds: android.graphics.Rect): void;
					public setParent(parent: android.view.View): void;
					public isCheckable(): boolean;
					public hashCode(): number;
					public isChecked(): boolean;
					public getActionList(): java.util.List<androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat>;
					public setHeading(isHeading: boolean): void;
					public isImportantForAccessibility(): boolean;
					public refresh(): boolean;
					public getMaxTextLength(): number;
					public setHintText(hintText: string): void;
					public setDrawingOrder(drawingOrderInParent: number): void;
					public removeChild(child: android.view.View): boolean;
					public setMaxTextLength(max: number): void;
					public getPaneTitle(): string;
					public isMultiLine(): boolean;
					public getExtras(): android.os.Bundle;
					public setCollectionItemInfo(collectionItemInfo: any): void;
					public canOpenPopup(): boolean;
					public getActions(): number;
					public static obtain(source: android.view.View): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public isScrollable(): boolean;
					public getCollectionItemInfo(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat.CollectionItemInfoCompat;
					public getTraversalAfter(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public getChildCount(): number;
					public getLiveRegion(): number;
					public setCheckable(checkable: boolean): void;
					public setLabeledBy(root: android.view.View, virtualDescendantId: number): void;
					public getMovementGranularities(): number;
					public static wrap(info: android.view.accessibility.AccessibilityNodeInfo): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public setViewIdResourceName(viewId: string): void;
					public setShowingHintText(showingHintText: boolean): void;
					public getCollectionInfo(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat.CollectionInfoCompat;
					public removeAction(action: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat): boolean;
					public isContextClickable(): boolean;
					public setContentDescription(contentDescription: string): void;
					public setParent(root: android.view.View, virtualDescendantId: number): void;
					public isEnabled(): boolean;
					public isScreenReaderFocusable(): boolean;
					public setPassword(password: boolean): void;
					public findAccessibilityNodeInfosByViewId(viewId: string): java.util.List<androidx.core.view.accessibility.AccessibilityNodeInfoCompat>;
					public addAction(action: number): void;
					public getText(): string;
					/** @deprecated */
					public getInfo(): any;
					public getStateDescription(): string;
					public setSource(source: android.view.View): void;
					public isDismissable(): boolean;
					public setLabelFor(labeled: android.view.View): void;
					public setChecked(checked: boolean): void;
					public getError(): string;
					public setTextEntryKey(isTextEntryKey: boolean): void;
					public setMovementGranularities(granularities: number): void;
					public isContentInvalid(): boolean;
					public getTooltipText(): string;
					public isEditable(): boolean;
					public getRoleDescription(): string;
					public isTextEntryKey(): boolean;
					public setSource(root: android.view.View, virtualDescendantId: number): void;
					public setImportantForAccessibility(important: boolean): void;
					public setCollectionInfo(collectionInfo: any): void;
					public addSpansToExtras(text: string, view: android.view.View): void;
					public equals(obj: any): boolean;
					public isFocused(): boolean;
					public setLiveRegion(mode: number): void;
					/** @deprecated */
					public constructor(info: any);
					public isPassword(): boolean;
					public getTextSelectionEnd(): number;
					public setStateDescription(stateDescription: string): void;
					public setInputType(inputType: number): void;
					public setContextClickable(contextClickable: boolean): void;
					public setTextSelection(start: number, end: number): void;
					public static getClickableSpans(text: string): android.text.style.ClickableSpan[];
					public setContentInvalid(contentInvalid: boolean): void;
					public toString(): string;
					public getClassName(): string;
					public performAction(action: number): boolean;
					public getHintText(): string;
					public findFocus(focus: number): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public focusSearch(direction: number): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public setVisibleToUser(visibleToUser: boolean): void;
					public isAccessibilityFocused(): boolean;
					public findAccessibilityNodeInfosByText(text: string): java.util.List<androidx.core.view.accessibility.AccessibilityNodeInfoCompat>;
					public setLongClickable(longClickable: boolean): void;
					public getRangeInfo(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat.RangeInfoCompat;
					public static obtain(info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					/** @deprecated */
					public setBoundsInParent(bounds: android.graphics.Rect): void;
					public getTouchDelegateInfo(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat.TouchDelegateInfoCompat;
					public setClickable(clickable: boolean): void;
					public setScrollable(scrollable: boolean): void;
					public setMultiLine(multiLine: boolean): void;
					public setFocused(focused: boolean): void;
					public isLongClickable(): boolean;
					public addChild(root: android.view.View, virtualDescendantId: number): void;
					public getWindowId(): number;
					public setAccessibilityFocused(focused: boolean): void;
					public setTraversalAfter(root: android.view.View, virtualDescendantId: number): void;
					public isShowingHintText(): boolean;
					public performAction(action: number, arguments: android.os.Bundle): boolean;
					public setPackageName(packageName: string): void;
					public getInputType(): number;
					public setClassName(className: string): void;
					public setEditable(editable: boolean): void;
					public setRoleDescription(roleDescription: string): void;
				}
				export module AccessibilityNodeInfoCompat {
					export class AccessibilityActionCompat extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat>;
						public static ACTION_FOCUS: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_CLEAR_FOCUS: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SELECT: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_CLEAR_SELECTION: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_CLICK: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_LONG_CLICK: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_ACCESSIBILITY_FOCUS: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_CLEAR_ACCESSIBILITY_FOCUS: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_NEXT_AT_MOVEMENT_GRANULARITY: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_PREVIOUS_AT_MOVEMENT_GRANULARITY: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_NEXT_HTML_ELEMENT: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_PREVIOUS_HTML_ELEMENT: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SCROLL_FORWARD: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SCROLL_BACKWARD: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_COPY: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_PASTE: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_CUT: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SET_SELECTION: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_EXPAND: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_COLLAPSE: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_DISMISS: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SET_TEXT: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SHOW_ON_SCREEN: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SCROLL_TO_POSITION: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SCROLL_UP: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SCROLL_LEFT: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SCROLL_DOWN: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SCROLL_RIGHT: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_PAGE_UP: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_PAGE_DOWN: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_PAGE_LEFT: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_PAGE_RIGHT: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_CONTEXT_CLICK: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SET_PROGRESS: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_MOVE_WINDOW: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_SHOW_TOOLTIP: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_HIDE_TOOLTIP: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_PRESS_AND_HOLD: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public static ACTION_IME_ENTER: androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public mCommand: androidx.core.view.accessibility.AccessibilityViewCommand;
						public constructor(actionId: number, label: string);
						public perform(view: android.view.View, arguments: android.os.Bundle): boolean;
						public equals(obj: any): boolean;
						public getLabel(): string;
						public constructor(actionId: number, label: string, command: androidx.core.view.accessibility.AccessibilityViewCommand);
						public hashCode(): number;
						public createReplacementAction(label: string, command: androidx.core.view.accessibility.AccessibilityViewCommand): androidx.core.view.accessibility.AccessibilityNodeInfoCompat.AccessibilityActionCompat;
						public getId(): number;
					}
					export class CollectionInfoCompat extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityNodeInfoCompat.CollectionInfoCompat>;
						public static SELECTION_MODE_NONE: number;
						public static SELECTION_MODE_SINGLE: number;
						public static SELECTION_MODE_MULTIPLE: number;
						public static obtain(rowCount: number, columnCount: number, hierarchical: boolean, selectionMode: number): androidx.core.view.accessibility.AccessibilityNodeInfoCompat.CollectionInfoCompat;
						public getRowCount(): number;
						public isHierarchical(): boolean;
						public getSelectionMode(): number;
						public static obtain(rowCount: number, columnCount: number, hierarchical: boolean): androidx.core.view.accessibility.AccessibilityNodeInfoCompat.CollectionInfoCompat;
						public getColumnCount(): number;
					}
					export class CollectionItemInfoCompat extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityNodeInfoCompat.CollectionItemInfoCompat>;
						public static obtain(rowIndex: number, rowSpan: number, columnIndex: number, columnSpan: number, heading: boolean, selected: boolean): androidx.core.view.accessibility.AccessibilityNodeInfoCompat.CollectionItemInfoCompat;
						public getColumnSpan(): number;
						public isSelected(): boolean;
						public getRowIndex(): number;
						public static obtain(rowIndex: number, rowSpan: number, columnIndex: number, columnSpan: number, heading: boolean): androidx.core.view.accessibility.AccessibilityNodeInfoCompat.CollectionItemInfoCompat;
						public getColumnIndex(): number;
						public getRowSpan(): number;
						/** @deprecated */
						public isHeading(): boolean;
					}
					export class RangeInfoCompat extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityNodeInfoCompat.RangeInfoCompat>;
						public static RANGE_TYPE_INT: number;
						public static RANGE_TYPE_FLOAT: number;
						public static RANGE_TYPE_PERCENT: number;
						public getMin(): number;
						public getCurrent(): number;
						public getType(): number;
						public static obtain(type: number, min: number, max: number, current: number): androidx.core.view.accessibility.AccessibilityNodeInfoCompat.RangeInfoCompat;
						public getMax(): number;
					}
					export class TouchDelegateInfoCompat extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityNodeInfoCompat.TouchDelegateInfoCompat>;
						public constructor(targetMap: java.util.Map<android.graphics.Region,android.view.View>);
						public getTargetForRegion(region: android.graphics.Region): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
						public getRegionCount(): number;
						public getRegionAt(index: number): android.graphics.Region;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module accessibility {
				export class AccessibilityNodeProviderCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityNodeProviderCompat>;
					public static HOST_VIEW_ID: number;
					public constructor(provider: any);
					public constructor();
					public addExtraDataToAccessibilityNodeInfo(virtualViewId: number, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat, extraDataKey: string, arguments: android.os.Bundle): void;
					public getProvider(): any;
					public performAction(virtualViewId: number, action: number, arguments: android.os.Bundle): boolean;
					public findAccessibilityNodeInfosByText(text: string, virtualViewId: number): java.util.List<androidx.core.view.accessibility.AccessibilityNodeInfoCompat>;
					public createAccessibilityNodeInfo(virtualViewId: number): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public findFocus(focus: number): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
				}
				export module AccessibilityNodeProviderCompat {
					export class AccessibilityNodeProviderApi16 extends android.view.accessibility.AccessibilityNodeProvider {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityNodeProviderCompat.AccessibilityNodeProviderApi16>;
						public findAccessibilityNodeInfosByText(text: string, virtualViewId: number): java.util.List<android.view.accessibility.AccessibilityNodeInfo>;
						public performAction(virtualViewId: number, action: number, arguments: android.os.Bundle): boolean;
						public createAccessibilityNodeInfo(virtualViewId: number): android.view.accessibility.AccessibilityNodeInfo;
					}
					export class AccessibilityNodeProviderApi19 extends androidx.core.view.accessibility.AccessibilityNodeProviderCompat.AccessibilityNodeProviderApi16 {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityNodeProviderCompat.AccessibilityNodeProviderApi19>;
						public findFocus(focus: number): android.view.accessibility.AccessibilityNodeInfo;
					}
					export class AccessibilityNodeProviderApi26 extends androidx.core.view.accessibility.AccessibilityNodeProviderCompat.AccessibilityNodeProviderApi19 {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityNodeProviderCompat.AccessibilityNodeProviderApi26>;
						public addExtraDataToAccessibilityNodeInfo(virtualViewId: number, info: android.view.accessibility.AccessibilityNodeInfo, extraDataKey: string, arguments: android.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module accessibility {
				export class AccessibilityRecordCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityRecordCompat>;
					/** @deprecated */
					public setContentDescription(contentDescription: string): void;
					/** @deprecated */
					public constructor(record: any);
					/** @deprecated */
					public getFromIndex(): number;
					/** @deprecated */
					public getText(): java.util.List<string>;
					public static getMaxScrollX(record: android.view.accessibility.AccessibilityRecord): number;
					/** @deprecated */
					public getClassName(): string;
					/** @deprecated */
					public getScrollY(): number;
					/** @deprecated */
					public setAddedCount(addedCount: number): void;
					/** @deprecated */
					public setMaxScrollY(maxScrollY: number): void;
					/** @deprecated */
					public getItemCount(): number;
					/** @deprecated */
					public getAddedCount(): number;
					/** @deprecated */
					public setFromIndex(fromIndex: number): void;
					/** @deprecated */
					public setSource(source: android.view.View): void;
					/** @deprecated */
					public isChecked(): boolean;
					/** @deprecated */
					public static obtain(record: androidx.core.view.accessibility.AccessibilityRecordCompat): androidx.core.view.accessibility.AccessibilityRecordCompat;
					/** @deprecated */
					public isScrollable(): boolean;
					/** @deprecated */
					public setToIndex(toIndex: number): void;
					/** @deprecated */
					public setMaxScrollX(maxScrollX: number): void;
					/** @deprecated */
					public hashCode(): number;
					/** @deprecated */
					public setEnabled(isEnabled: boolean): void;
					/** @deprecated */
					public isPassword(): boolean;
					/** @deprecated */
					public setBeforeText(beforeText: string): void;
					/** @deprecated */
					public isFullScreen(): boolean;
					/** @deprecated */
					public setCurrentItemIndex(currentItemIndex: number): void;
					/** @deprecated */
					public setScrollX(scrollX: number): void;
					/** @deprecated */
					public setSource(root: android.view.View, virtualDescendantId: number): void;
					public equals(obj: any): boolean;
					/** @deprecated */
					public getRemovedCount(): number;
					/** @deprecated */
					public equals(obj: any): boolean;
					/** @deprecated */
					public setChecked(isChecked: boolean): void;
					/** @deprecated */
					public setRemovedCount(removedCount: number): void;
					/** @deprecated */
					public setClassName(className: string): void;
					/** @deprecated */
					public setParcelableData(parcelableData: android.os.Parcelable): void;
					/** @deprecated */
					public getMaxScrollY(): number;
					/** @deprecated */
					public getContentDescription(): string;
					/** @deprecated */
					public setFullScreen(isFullScreen: boolean): void;
					/** @deprecated */
					public getImpl(): any;
					/** @deprecated */
					public static obtain(): androidx.core.view.accessibility.AccessibilityRecordCompat;
					/** @deprecated */
					public getCurrentItemIndex(): number;
					/** @deprecated */
					public setScrollY(scrollY: number): void;
					/** @deprecated */
					public getWindowId(): number;
					/** @deprecated */
					public isEnabled(): boolean;
					public hashCode(): number;
					/** @deprecated */
					public recycle(): void;
					public static setSource(record: android.view.accessibility.AccessibilityRecord, root: android.view.View, virtualDescendantId: number): void;
					/** @deprecated */
					public setPassword(isPassword: boolean): void;
					/** @deprecated */
					public getMaxScrollX(): number;
					/** @deprecated */
					public getParcelableData(): android.os.Parcelable;
					/** @deprecated */
					public getSource(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public static setMaxScrollY(record: android.view.accessibility.AccessibilityRecord, maxScrollY: number): void;
					/** @deprecated */
					public getBeforeText(): string;
					/** @deprecated */
					public getToIndex(): number;
					/** @deprecated */
					public setScrollable(scrollable: boolean): void;
					/** @deprecated */
					public getScrollX(): number;
					public static setMaxScrollX(record: android.view.accessibility.AccessibilityRecord, maxScrollX: number): void;
					public static getMaxScrollY(record: android.view.accessibility.AccessibilityRecord): number;
					/** @deprecated */
					public setItemCount(itemCount: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module accessibility {
				export class AccessibilityViewCommand extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityViewCommand>;
					/**
					 * Constructs a new instance of the androidx.core.view.accessibility.AccessibilityViewCommand interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						perform(param0: android.view.View, param1: androidx.core.view.accessibility.AccessibilityViewCommand.CommandArguments): boolean;
					});
					public constructor();
					public perform(param0: android.view.View, param1: androidx.core.view.accessibility.AccessibilityViewCommand.CommandArguments): boolean;
				}
				export module AccessibilityViewCommand {
					export abstract class CommandArguments extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityViewCommand.CommandArguments>;
						public constructor();
						public setBundle(bundle: android.os.Bundle): void;
					}
					export class MoveAtGranularityArguments extends androidx.core.view.accessibility.AccessibilityViewCommand.CommandArguments {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityViewCommand.MoveAtGranularityArguments>;
						public constructor();
						public getGranularity(): number;
						public getExtendSelection(): boolean;
					}
					export class MoveHtmlArguments extends androidx.core.view.accessibility.AccessibilityViewCommand.CommandArguments {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityViewCommand.MoveHtmlArguments>;
						public constructor();
						public getHTMLElement(): string;
					}
					export class MoveWindowArguments extends androidx.core.view.accessibility.AccessibilityViewCommand.CommandArguments {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityViewCommand.MoveWindowArguments>;
						public constructor();
						public getX(): number;
						public getY(): number;
					}
					export class ScrollToPositionArguments extends androidx.core.view.accessibility.AccessibilityViewCommand.CommandArguments {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityViewCommand.ScrollToPositionArguments>;
						public constructor();
						public getRow(): number;
						public getColumn(): number;
					}
					export class SetProgressArguments extends androidx.core.view.accessibility.AccessibilityViewCommand.CommandArguments {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityViewCommand.SetProgressArguments>;
						public constructor();
						public getProgress(): number;
					}
					export class SetSelectionArguments extends androidx.core.view.accessibility.AccessibilityViewCommand.CommandArguments {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityViewCommand.SetSelectionArguments>;
						public constructor();
						public getStart(): number;
						public getEnd(): number;
					}
					export class SetTextArguments extends androidx.core.view.accessibility.AccessibilityViewCommand.CommandArguments {
						public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityViewCommand.SetTextArguments>;
						public constructor();
						public getText(): string;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module accessibility {
				export class AccessibilityWindowInfoCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.accessibility.AccessibilityWindowInfoCompat>;
					public static TYPE_APPLICATION: number;
					public static TYPE_INPUT_METHOD: number;
					public static TYPE_SYSTEM: number;
					public static TYPE_ACCESSIBILITY_OVERLAY: number;
					public static TYPE_SPLIT_SCREEN_DIVIDER: number;
					public getType(): number;
					public getTitle(): string;
					public equals(obj: any): boolean;
					public getChild(index: number): androidx.core.view.accessibility.AccessibilityWindowInfoCompat;
					public getChildCount(): number;
					public recycle(): void;
					public isFocused(): boolean;
					public static obtain(info: androidx.core.view.accessibility.AccessibilityWindowInfoCompat): androidx.core.view.accessibility.AccessibilityWindowInfoCompat;
					public getId(): number;
					public getRoot(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public getBoundsInScreen(outBounds: android.graphics.Rect): void;
					public getAnchor(): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public isActive(): boolean;
					public toString(): string;
					public getLayer(): number;
					public hashCode(): number;
					public getParent(): androidx.core.view.accessibility.AccessibilityWindowInfoCompat;
					public isAccessibilityFocused(): boolean;
					public static obtain(): androidx.core.view.accessibility.AccessibilityWindowInfoCompat;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module animation {
				export class PathInterpolatorApi14 extends java.lang.Object implements android.view.animation.Interpolator {
					public static class: java.lang.Class<androidx.core.view.animation.PathInterpolatorApi14>;
					public getInterpolation(t: number): number;
					public getInterpolation(param0: number): number;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module animation {
				export class PathInterpolatorCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.animation.PathInterpolatorCompat>;
					public static create(controlX: number, controlY: number): android.view.animation.Interpolator;
					public static create(path: android.graphics.Path): android.view.animation.Interpolator;
					public static create(controlX1: number, controlY1: number, controlX2: number, controlY2: number): android.view.animation.Interpolator;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module inputmethod {
				export class EditorInfoCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.inputmethod.EditorInfoCompat>;
					public static IME_FLAG_NO_PERSONALIZED_LEARNING: number;
					public static IME_FLAG_FORCE_ASCII: number;
					/** @deprecated */
					public constructor();
					public static setInitialSurroundingSubText(editorInfo: android.view.inputmethod.EditorInfo, subText: string, subTextStart: number): void;
					public static getInitialTextAfterCursor(editorInfo: android.view.inputmethod.EditorInfo, length: number, flags: number): string;
					public static getInitialTextBeforeCursor(editorInfo: android.view.inputmethod.EditorInfo, length: number, flags: number): string;
					public static getContentMimeTypes(editorInfo: android.view.inputmethod.EditorInfo): string[];
					public static setInitialSurroundingText(editorInfo: android.view.inputmethod.EditorInfo, sourceText: string): void;
					public static setContentMimeTypes(editorInfo: android.view.inputmethod.EditorInfo, contentMimeTypes: string[]): void;
					public static getInitialSelectedText(editorInfo: android.view.inputmethod.EditorInfo, flags: number): string;
				}
				export module EditorInfoCompat {
					export class Api30Impl extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.view.inputmethod.EditorInfoCompat.Api30Impl>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module inputmethod {
				export class InputConnectionCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.inputmethod.InputConnectionCompat>;
					public static INPUT_CONTENT_GRANT_READ_URI_PERMISSION: number;
					/** @deprecated */
					public static createWrapper(inputConnection: android.view.inputmethod.InputConnection, editorInfo: android.view.inputmethod.EditorInfo, onCommitContentListener: androidx.core.view.inputmethod.InputConnectionCompat.OnCommitContentListener): android.view.inputmethod.InputConnection;
					public static commitContent(inputConnection: android.view.inputmethod.InputConnection, editorInfo: android.view.inputmethod.EditorInfo, inputContentInfo: androidx.core.view.inputmethod.InputContentInfoCompat, flags: number, opts: android.os.Bundle): boolean;
					/** @deprecated */
					public constructor();
					public static createWrapper(view: android.view.View, inputConnection: android.view.inputmethod.InputConnection, editorInfo: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;
				}
				export module InputConnectionCompat {
					export class OnCommitContentListener extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.view.inputmethod.InputConnectionCompat.OnCommitContentListener>;
						/**
						 * Constructs a new instance of the androidx.core.view.inputmethod.InputConnectionCompat$OnCommitContentListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCommitContent(param0: androidx.core.view.inputmethod.InputContentInfoCompat, param1: number, param2: android.os.Bundle): boolean;
						});
						public constructor();
						public onCommitContent(param0: androidx.core.view.inputmethod.InputContentInfoCompat, param1: number, param2: android.os.Bundle): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module view {
			export module inputmethod {
				export class InputContentInfoCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.view.inputmethod.InputContentInfoCompat>;
					public constructor(contentUri: android.net.Uri, description: android.content.ClipDescription, linkUri: android.net.Uri);
					public getDescription(): android.content.ClipDescription;
					public unwrap(): any;
					public getContentUri(): android.net.Uri;
					public static wrap(inputContentInfo: any): androidx.core.view.inputmethod.InputContentInfoCompat;
					public requestPermission(): void;
					public getLinkUri(): android.net.Uri;
					public releasePermission(): void;
				}
				export module InputContentInfoCompat {
					export class InputContentInfoCompatApi25Impl extends java.lang.Object implements androidx.core.view.inputmethod.InputContentInfoCompat.InputContentInfoCompatImpl {
						public static class: java.lang.Class<androidx.core.view.inputmethod.InputContentInfoCompat.InputContentInfoCompatApi25Impl>;
						public getDescription(): android.content.ClipDescription;
						public getLinkUri(): android.net.Uri;
						public getContentUri(): android.net.Uri;
						public requestPermission(): void;
						public getInputContentInfo(): any;
						public releasePermission(): void;
					}
					export class InputContentInfoCompatBaseImpl extends java.lang.Object implements androidx.core.view.inputmethod.InputContentInfoCompat.InputContentInfoCompatImpl {
						public static class: java.lang.Class<androidx.core.view.inputmethod.InputContentInfoCompat.InputContentInfoCompatBaseImpl>;
						public getDescription(): android.content.ClipDescription;
						public getLinkUri(): android.net.Uri;
						public getContentUri(): android.net.Uri;
						public requestPermission(): void;
						public getInputContentInfo(): any;
						public releasePermission(): void;
					}
					export class InputContentInfoCompatImpl extends java.lang.Object {
						public static class: java.lang.Class<androidx.core.view.inputmethod.InputContentInfoCompat.InputContentInfoCompatImpl>;
						/**
						 * Constructs a new instance of the androidx.core.view.inputmethod.InputContentInfoCompat$InputContentInfoCompatImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getContentUri(): android.net.Uri;
							getDescription(): android.content.ClipDescription;
							getLinkUri(): android.net.Uri;
							getInputContentInfo(): any;
							requestPermission(): void;
							releasePermission(): void;
						});
						public constructor();
						public getDescription(): android.content.ClipDescription;
						public getLinkUri(): android.net.Uri;
						public getContentUri(): android.net.Uri;
						public requestPermission(): void;
						public getInputContentInfo(): any;
						public releasePermission(): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export abstract class AutoScrollHelper extends java.lang.Object implements android.view.View.OnTouchListener {
				public static class: java.lang.Class<androidx.core.widget.AutoScrollHelper>;
				public static RELATIVE_UNSPECIFIED: number;
				public static NO_MAX: number;
				public static NO_MIN: number;
				public static EDGE_TYPE_INSIDE: number;
				public static EDGE_TYPE_INSIDE_EXTEND: number;
				public static EDGE_TYPE_OUTSIDE: number;
				public setEdgeType(type: number): androidx.core.widget.AutoScrollHelper;
				public constructor(target: android.view.View);
				public canTargetScrollHorizontally(param0: number): boolean;
				public canTargetScrollVertically(param0: number): boolean;
				public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
				public setMaximumVelocity(horizontalMax: number, verticalMax: number): androidx.core.widget.AutoScrollHelper;
				public setEnabled(enabled: boolean): androidx.core.widget.AutoScrollHelper;
				public scrollTargetBy(param0: number, param1: number): void;
				public setMaximumEdges(horizontalMax: number, verticalMax: number): androidx.core.widget.AutoScrollHelper;
				public setExclusive(exclusive: boolean): androidx.core.widget.AutoScrollHelper;
				public onTouch(v: android.view.View, event: android.view.MotionEvent): boolean;
				public setActivationDelay(delayMillis: number): androidx.core.widget.AutoScrollHelper;
				public setRelativeEdges(horizontal: number, vertical: number): androidx.core.widget.AutoScrollHelper;
				public setMinimumVelocity(horizontalMin: number, verticalMin: number): androidx.core.widget.AutoScrollHelper;
				public setRampDownDuration(durationMillis: number): androidx.core.widget.AutoScrollHelper;
				public isEnabled(): boolean;
				public setRelativeVelocity(horizontal: number, vertical: number): androidx.core.widget.AutoScrollHelper;
				public setRampUpDuration(durationMillis: number): androidx.core.widget.AutoScrollHelper;
				public isExclusive(): boolean;
			}
			export module AutoScrollHelper {
				export class ClampedScroller extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.widget.AutoScrollHelper.ClampedScroller>;
					public setRampDownDuration(durationMillis: number): void;
					public isFinished(): boolean;
					public getHorizontalDirection(): number;
					public getDeltaX(): number;
					public getDeltaY(): number;
					public setRampUpDuration(durationMillis: number): void;
					public requestStop(): void;
					public getVerticalDirection(): number;
					public start(): void;
					public setTargetVelocity(x: number, y: number): void;
					public computeScrollDelta(): void;
				}
				export class ScrollAnimationRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.core.widget.AutoScrollHelper.ScrollAnimationRunnable>;
					public run(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class AutoSizeableTextView extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.widget.AutoSizeableTextView>;
				/**
				 * Constructs a new instance of the androidx.core.widget.AutoSizeableTextView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setAutoSizeTextTypeWithDefaults(param0: number): void;
					setAutoSizeTextTypeUniformWithConfiguration(param0: number, param1: number, param2: number, param3: number): void;
					setAutoSizeTextTypeUniformWithPresetSizes(param0: number[], param1: number): void;
					getAutoSizeTextType(): number;
					getAutoSizeStepGranularity(): number;
					getAutoSizeMinTextSize(): number;
					getAutoSizeMaxTextSize(): number;
					getAutoSizeTextAvailableSizes(): number[];
					"<clinit>"(): void;
				});
				public constructor();
				public static PLATFORM_SUPPORTS_AUTOSIZE: boolean;
				public setAutoSizeTextTypeWithDefaults(param0: number): void;
				public setAutoSizeTextTypeUniformWithConfiguration(param0: number, param1: number, param2: number, param3: number): void;
				public setAutoSizeTextTypeUniformWithPresetSizes(param0: number[], param1: number): void;
				public getAutoSizeTextAvailableSizes(): number[];
				public getAutoSizeMaxTextSize(): number;
				public getAutoSizeStepGranularity(): number;
				public getAutoSizeTextType(): number;
				public getAutoSizeMinTextSize(): number;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class CheckedTextViewCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.widget.CheckedTextViewCompat>;
				public static getCheckMarkTintMode(textView: android.widget.CheckedTextView): android.graphics.PorterDuff.Mode;
				public static getCheckMarkDrawable(textView: android.widget.CheckedTextView): android.graphics.drawable.Drawable;
				public static setCheckMarkTintMode(textView: android.widget.CheckedTextView, tintMode: android.graphics.PorterDuff.Mode): void;
				public static getCheckMarkTintList(textView: android.widget.CheckedTextView): android.content.res.ColorStateList;
				public static setCheckMarkTintList(textView: android.widget.CheckedTextView, tint: android.content.res.ColorStateList): void;
			}
			export module CheckedTextViewCompat {
				export class Api14Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.widget.CheckedTextViewCompat.Api14Impl>;
				}
				export class Api16Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.widget.CheckedTextViewCompat.Api16Impl>;
				}
				export class Api21Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.widget.CheckedTextViewCompat.Api21Impl>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class CompoundButtonCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.widget.CompoundButtonCompat>;
				public static setButtonTintMode(button: android.widget.CompoundButton, tintMode: android.graphics.PorterDuff.Mode): void;
				public static getButtonDrawable(button: android.widget.CompoundButton): android.graphics.drawable.Drawable;
				public static setButtonTintList(button: android.widget.CompoundButton, tint: android.content.res.ColorStateList): void;
				public static getButtonTintMode(button: android.widget.CompoundButton): android.graphics.PorterDuff.Mode;
				public static getButtonTintList(button: android.widget.CompoundButton): android.content.res.ColorStateList;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class ContentLoadingProgressBar extends android.widget.ProgressBar {
				public static class: java.lang.Class<androidx.core.widget.ContentLoadingProgressBar>;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public invalidateDrawable(dr: android.graphics.drawable.Drawable): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public show(): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public constructor(context: android.content.Context);
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public hide(): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public onDetachedFromWindow(): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onAttachedToWindow(): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class EdgeEffectCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.widget.EdgeEffectCompat>;
				public static getDistance(edgeEffect: android.widget.EdgeEffect): number;
				/** @deprecated */
				public onRelease(): boolean;
				/** @deprecated */
				public onPull(deltaDistance: number): boolean;
				/** @deprecated */
				public draw(canvas: android.graphics.Canvas): boolean;
				/** @deprecated */
				public onAbsorb(velocity: number): boolean;
				public static onPullDistance(edgeEffect: android.widget.EdgeEffect, deltaDistance: number, displacement: number): number;
				/** @deprecated */
				public onPull(deltaDistance: number, displacement: number): boolean;
				/** @deprecated */
				public constructor(context: android.content.Context);
				/** @deprecated */
				public isFinished(): boolean;
				/** @deprecated */
				public setSize(width: number, height: number): void;
				public static create(context: android.content.Context, attrs: android.util.AttributeSet): android.widget.EdgeEffect;
				public static onPull(edgeEffect: android.widget.EdgeEffect, deltaDistance: number, displacement: number): void;
				/** @deprecated */
				public finish(): void;
			}
			export module EdgeEffectCompat {
				export class Api31Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.widget.EdgeEffectCompat.Api31Impl>;
					public static getDistance(edgeEffect: android.widget.EdgeEffect): number;
					public static onPullDistance(edgeEffect: android.widget.EdgeEffect, deltaDistance: number, displacement: number): number;
					public static create(context: android.content.Context, attrs: android.util.AttributeSet): android.widget.EdgeEffect;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class ImageViewCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.widget.ImageViewCompat>;
				public static setImageTintList(view: android.widget.ImageView, tintList: android.content.res.ColorStateList): void;
				public static setImageTintMode(view: android.widget.ImageView, mode: android.graphics.PorterDuff.Mode): void;
				public static getImageTintList(view: android.widget.ImageView): android.content.res.ColorStateList;
				public static getImageTintMode(view: android.widget.ImageView): android.graphics.PorterDuff.Mode;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class ListPopupWindowCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.widget.ListPopupWindowCompat>;
				public static createDragToOpenListener(listPopupWindow: android.widget.ListPopupWindow, src: android.view.View): android.view.View.OnTouchListener;
				/** @deprecated */
				public static createDragToOpenListener(listPopupWindow: any, src: android.view.View): android.view.View.OnTouchListener;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class ListViewAutoScrollHelper extends androidx.core.widget.AutoScrollHelper {
				public static class: java.lang.Class<androidx.core.widget.ListViewAutoScrollHelper>;
				public constructor(target: android.view.View);
				public canTargetScrollVertically(direction: number): boolean;
				public onTouch(v: android.view.View, event: android.view.MotionEvent): boolean;
				public canTargetScrollHorizontally(param0: number): boolean;
				public scrollTargetBy(deltaX: number, deltaY: number): void;
				public canTargetScrollVertically(param0: number): boolean;
				public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
				public canTargetScrollHorizontally(direction: number): boolean;
				public scrollTargetBy(param0: number, param1: number): void;
				public constructor(target: android.widget.ListView);
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class ListViewCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.widget.ListViewCompat>;
				public static scrollListBy(listView: android.widget.ListView, y: number): void;
				public static canScrollList(listView: android.widget.ListView, direction: number): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class NestedScrollView extends android.widget.FrameLayout implements androidx.core.view.NestedScrollingParent3, androidx.core.view.NestedScrollingChild3, androidx.core.view.ScrollingView {
				public static class: java.lang.Class<androidx.core.widget.NestedScrollView>;
				public mEdgeGlowTop: android.widget.EdgeEffect;
				public mEdgeGlowBottom: android.widget.EdgeEffect;
				public addView(child: android.view.View, width: number, height: number): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number, param3: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public onStopNestedScroll(param0: android.view.View, param1: number): void;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number, consumed: number[]): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTopFadingEdgeStrength(): number;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public fling(velocityY: number): void;
				public onScrollChanged(l: number, t: number, oldl: number, oldt: number): void;
				public stopNestedScroll(param0: number): void;
				public smoothScrollTo(x: number, y: number): void;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				public constructor(context: android.content.Context);
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: number[]): boolean;
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public dispatchNestedPreScroll(param0: number, param1: number, param2: number[], param3: number[]): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public measureChildWithMargins(child: android.view.View, parentWidthMeasureSpec: number, widthUsed: number, parentHeightMeasureSpec: number, heightUsed: number): void;
				public smoothScrollBy(dx: number, dy: number, scrollDurationMs: number): void;
				public draw(canvas: android.graphics.Canvas): void;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public computeHorizontalScrollOffset(): number;
				public dispatchNestedPreFling(velocityX: number, velocityY: number): boolean;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[], param5: number, param6: number[]): void;
				public stopNestedScroll(type: number): void;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				public smoothScrollBy(dx: number, dy: number): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public dispatchNestedPreFling(param0: number, param1: number): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public addView(child: android.view.View, index: number): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public isFillViewport(): boolean;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[], param4: number): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, axes: number): boolean;
				public recomputeViewAttributes(param0: android.view.View): void;
				public setSmoothScrollingEnabled(smoothScrollingEnabled: boolean): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number, param3: number): boolean;
				public computeHorizontalScrollRange(): number;
				public scrollTo(x: number, y: number): void;
				public requestFitSystemWindows(): void;
				public getNestedScrollAxes(): number;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public getParent(): android.view.ViewParent;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public focusSearch(direction: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public smoothScrollTo(x: number, y: number, scrollDurationMs: number): void;
				public requestTransparentRegion(param0: android.view.View): void;
				public startNestedScroll(param0: number): boolean;
				public computeVerticalScrollExtent(): number;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public onTouchEvent(event: android.view.MotionEvent): boolean;
				public getMaxScrollAmount(): number;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public startNestedScroll(param0: number, param1: number): boolean;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public onRestoreInstanceState(state: android.os.Parcelable): void;
				public canResolveTextAlignment(): boolean;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public setNestedScrollingEnabled(param0: boolean): void;
				public removeView(view: android.view.View): void;
				public requestLayout(): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public isSmoothScrollingEnabled(): boolean;
				public onTouchEvent(ev: android.view.MotionEvent): boolean;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public setOnScrollChangeListener(l: androidx.core.widget.NestedScrollView.OnScrollChangeListener): void;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number, type: number): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public onRequestFocusInDescendants(direction: number, previouslyFocusedRect: android.graphics.Rect): boolean;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public canResolveLayoutDirection(): boolean;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public hasNestedScrollingParent(): boolean;
				public onSaveInstanceState(): android.os.Parcelable;
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: number[], type: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public setNestedScrollingEnabled(enabled: boolean): void;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number[]): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onOverScrolled(scrollX: number, scrollY: number, clampedX: boolean, clampedY: boolean): void;
				public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[]): boolean;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public startNestedScroll(axes: number, type: number): boolean;
				public getTextDirection(): number;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public onInterceptTouchEvent(ev: android.view.MotionEvent): boolean;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[], type: number): void;
				public setOnScrollChangeListener(l: android.view.View.OnScrollChangeListener): void;
				public dispatchNestedPreScroll(dx: number, dy: number, consumed: number[], offsetInWindow: number[], type: number): boolean;
				public dispatchNestedPreScroll(dx: number, dy: number, consumed: number[], offsetInWindow: number[]): boolean;
				public executeKeyEvent(event: android.view.KeyEvent): boolean;
				public getBottomFadingEdgeStrength(): number;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public computeHorizontalScrollExtent(): number;
				public onStopNestedScroll(target: android.view.View, type: number): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: number[], type: number): boolean;
				public onStopNestedScroll(target: android.view.View): void;
				public computeVerticalScrollRange(): number;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public dispatchNestedFling(velocityX: number, velocityY: number, consumed: boolean): boolean;
				public isLayoutDirectionResolved(): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[], param5: number): boolean;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public hasNestedScrollingParent(type: number): boolean;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public childDrawableStateChanged(child: android.view.View): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public dispatchNestedPreScroll(param0: number, param1: number, param2: number[], param3: number[], param4: number): boolean;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public addView(child: android.view.View): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, axes: number, type: number): boolean;
				public bringChildToFront(param0: android.view.View): void;
				public computeScroll(): void;
				public startNestedScroll(axes: number): boolean;
				public fullScroll(direction: number): boolean;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public stopNestedScroll(): void;
				public requestTransparentRegion(child: android.view.View): void;
				public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
				public onAttachedToWindow(): void;
				public isNestedScrollingEnabled(): boolean;
				public clearChildFocus(param0: android.view.View): void;
				public computeVerticalScrollOffset(): number;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getTextAlignment(): number;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
				public focusableViewAvailable(param0: android.view.View): void;
				public arrowScroll(direction: number): boolean;
				public setFillViewport(fillViewport: boolean): void;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public measureChild(child: android.view.View, parentWidthMeasureSpec: number, parentHeightMeasureSpec: number): void;
				public onGenericMotionEvent(event: android.view.MotionEvent): boolean;
				public computeScrollDeltaToGetChildRectOnScreen(rect: android.graphics.Rect): number;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public childDrawableStateChanged(param0: android.view.View): void;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public dispatchKeyEvent(event: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onStopNestedScroll(param0: android.view.View): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public pageScroll(direction: number): boolean;
				public hasNestedScrollingParent(param0: number): boolean;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public shouldDelayChildPressedState(): boolean;
			}
			export module NestedScrollView {
				export class androidxcorewidgetNestedScrollViewAccessibilityDelegate extends androidx.core.view.AccessibilityDelegateCompat {
					public static class: java.lang.Class<androidx.core.widget.NestedScrollView.AccessibilityDelegate>;
					public onInitializeAccessibilityNodeInfo(host: android.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
					public onInitializeAccessibilityEvent(host: android.view.View, event: android.view.accessibility.AccessibilityEvent): void;
					public performAccessibilityAction(host: android.view.View, action: number, arguments: android.os.Bundle): boolean;
					public performAccessibilityAction(host: android.view.View, action: number, args: android.os.Bundle): boolean;
				}
				export type AccessibilityDelegate = androidxcorewidgetNestedScrollViewAccessibilityDelegate
				export class OnScrollChangeListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.widget.NestedScrollView.OnScrollChangeListener>;
					/**
					 * Constructs a new instance of the androidx.core.widget.NestedScrollView$OnScrollChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onScrollChange(param0: androidx.core.widget.NestedScrollView, param1: number, param2: number, param3: number, param4: number): void;
					});
					public constructor();
					public onScrollChange(param0: androidx.core.widget.NestedScrollView, param1: number, param2: number, param3: number, param4: number): void;
				}
				export class SavedState extends android.view.View.BaseSavedState {
					public static class: java.lang.Class<androidx.core.widget.NestedScrollView.SavedState>;
					public scrollPosition: number;
					public static CREATOR: android.os.Parcelable.Creator<androidx.core.widget.NestedScrollView.SavedState>;
					public toString(): string;
					public describeContents(): number;
					public writeToParcel(out: android.os.Parcel, flags: number): void;
					public writeToParcel(dest: android.os.Parcel, flags: number): void;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class PopupMenuCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.widget.PopupMenuCompat>;
				public static getDragToOpenListener(popupMenu: any): android.view.View.OnTouchListener;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class PopupWindowCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.widget.PopupWindowCompat>;
				public static getOverlapAnchor(popupWindow: android.widget.PopupWindow): boolean;
				public static setWindowLayoutType(popupWindow: android.widget.PopupWindow, layoutType: number): void;
				public static setOverlapAnchor(popupWindow: android.widget.PopupWindow, overlapAnchor: boolean): void;
				public static showAsDropDown(popup: android.widget.PopupWindow, anchor: android.view.View, xoff: number, yoff: number, gravity: number): void;
				public static getWindowLayoutType(popupWindow: android.widget.PopupWindow): number;
			}
			export module PopupWindowCompat {
				export class Api19Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.widget.PopupWindowCompat.Api19Impl>;
				}
				export class Api23Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.widget.PopupWindowCompat.Api23Impl>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class ScrollerCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.widget.ScrollerCompat>;
				/** @deprecated */
				public getCurrX(): number;
				/** @deprecated */
				public getFinalX(): number;
				/** @deprecated */
				public fling(startX: number, startY: number, velocityX: number, velocityY: number, minX: number, maxX: number, minY: number, maxY: number): void;
				/** @deprecated */
				public startScroll(startX: number, startY: number, dx: number, dy: number, duration: number): void;
				/** @deprecated */
				public notifyVerticalEdgeReached(startY: number, finalY: number, overY: number): void;
				/** @deprecated */
				public static create(context: android.content.Context, interpolator: android.view.animation.Interpolator): androidx.core.widget.ScrollerCompat;
				/** @deprecated */
				public springBack(startX: number, startY: number, minX: number, maxX: number, minY: number, maxY: number): boolean;
				/** @deprecated */
				public abortAnimation(): void;
				/** @deprecated */
				public startScroll(startX: number, startY: number, dx: number, dy: number): void;
				/** @deprecated */
				public getCurrVelocity(): number;
				/** @deprecated */
				public fling(startX: number, startY: number, velocityX: number, velocityY: number, minX: number, maxX: number, minY: number, maxY: number, overX: number, overY: number): void;
				/** @deprecated */
				public getFinalY(): number;
				/** @deprecated */
				public notifyHorizontalEdgeReached(startX: number, finalX: number, overX: number): void;
				/** @deprecated */
				public isFinished(): boolean;
				/** @deprecated */
				public getCurrY(): number;
				/** @deprecated */
				public isOverScrolled(): boolean;
				/** @deprecated */
				public static create(context: android.content.Context): androidx.core.widget.ScrollerCompat;
				/** @deprecated */
				public computeScrollOffset(): boolean;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class TextViewCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.widget.TextViewCompat>;
				public static AUTO_SIZE_TEXT_TYPE_NONE: number;
				public static AUTO_SIZE_TEXT_TYPE_UNIFORM: number;
				public static setCompoundDrawableTintMode(textView: android.widget.TextView, tintMode: android.graphics.PorterDuff.Mode): void;
				public static setCompoundDrawablesRelativeWithIntrinsicBounds(textView: android.widget.TextView, start: number, top: number, end: number, bottom: number): void;
				public static getMinLines(textView: android.widget.TextView): number;
				public static setAutoSizeTextTypeUniformWithConfiguration(textView: android.widget.TextView, autoSizeMinTextSize: number, autoSizeMaxTextSize: number, autoSizeStepGranularity: number, unit: number): void;
				public static getAutoSizeMaxTextSize(textView: android.widget.TextView): number;
				public static setLastBaselineToBottomHeight(textView: android.widget.TextView, lastBaselineToBottomHeight: number): void;
				public static setTextAppearance(textView: android.widget.TextView, resId: number): void;
				public static getCompoundDrawableTintList(textView: android.widget.TextView): android.content.res.ColorStateList;
				public static getAutoSizeTextAvailableSizes(textView: android.widget.TextView): number[];
				public static unwrapCustomSelectionActionModeCallback(callback: android.view.ActionMode.Callback): android.view.ActionMode.Callback;
				public static setAutoSizeTextTypeWithDefaults(textView: android.widget.TextView, autoSizeTextType: number): void;
				public static getFirstBaselineToTopHeight(textView: android.widget.TextView): number;
				public static getAutoSizeStepGranularity(textView: android.widget.TextView): number;
				public static getAutoSizeTextType(textView: android.widget.TextView): number;
				public static setFirstBaselineToTopHeight(textView: android.widget.TextView, firstBaselineToTopHeight: number): void;
				public static getLastBaselineToBottomHeight(textView: android.widget.TextView): number;
				public static getTextMetricsParams(textView: android.widget.TextView): androidx.core.text.PrecomputedTextCompat.Params;
				public static getCompoundDrawableTintMode(textView: android.widget.TextView): android.graphics.PorterDuff.Mode;
				public static getMaxLines(textView: android.widget.TextView): number;
				public static getAutoSizeMinTextSize(textView: android.widget.TextView): number;
				public static getCompoundDrawablesRelative(textView: android.widget.TextView): android.graphics.drawable.Drawable[];
				public static setCompoundDrawablesRelativeWithIntrinsicBounds(textView: android.widget.TextView, start: android.graphics.drawable.Drawable, top: android.graphics.drawable.Drawable, end: android.graphics.drawable.Drawable, bottom: android.graphics.drawable.Drawable): void;
				public static setCompoundDrawablesRelative(textView: android.widget.TextView, start: android.graphics.drawable.Drawable, top: android.graphics.drawable.Drawable, end: android.graphics.drawable.Drawable, bottom: android.graphics.drawable.Drawable): void;
				public static wrapCustomSelectionActionModeCallback(textView: android.widget.TextView, callback: android.view.ActionMode.Callback): android.view.ActionMode.Callback;
				public static setPrecomputedText(textView: android.widget.TextView, precomputed: androidx.core.text.PrecomputedTextCompat): void;
				public static setCustomSelectionActionModeCallback(textView: android.widget.TextView, callback: android.view.ActionMode.Callback): void;
				public static setCompoundDrawableTintList(textView: android.widget.TextView, tint: android.content.res.ColorStateList): void;
				public static setAutoSizeTextTypeUniformWithPresetSizes(textView: android.widget.TextView, presetSizes: number[], unit: number): void;
				public static setTextMetricsParams(textView: android.widget.TextView, params: androidx.core.text.PrecomputedTextCompat.Params): void;
				public static setLineHeight(textView: android.widget.TextView, lineHeight: number): void;
			}
			export module TextViewCompat {
				export class AutoSizeTextType extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.core.widget.TextViewCompat.AutoSizeTextType>;
					/**
					 * Constructs a new instance of the androidx.core.widget.TextViewCompat$AutoSizeTextType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class OreoCallback extends java.lang.Object implements android.view.ActionMode.Callback {
					public static class: java.lang.Class<androidx.core.widget.TextViewCompat.OreoCallback>;
					public onActionItemClicked(mode: android.view.ActionMode, item: android.view.MenuItem): boolean;
					public onCreateActionMode(mode: android.view.ActionMode, menu: android.view.Menu): boolean;
					public onDestroyActionMode(param0: android.view.ActionMode): void;
					public onActionItemClicked(param0: android.view.ActionMode, param1: android.view.MenuItem): boolean;
					public onCreateActionMode(param0: android.view.ActionMode, param1: android.view.Menu): boolean;
					public onDestroyActionMode(mode: android.view.ActionMode): void;
					public onPrepareActionMode(param0: android.view.ActionMode, param1: android.view.Menu): boolean;
					public onPrepareActionMode(mode: android.view.ActionMode, menu: android.view.Menu): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class TextViewOnReceiveContentListener extends java.lang.Object implements androidx.core.view.OnReceiveContentListener {
				public static class: java.lang.Class<androidx.core.widget.TextViewOnReceiveContentListener>;
				public onReceiveContent(param0: android.view.View, param1: androidx.core.view.ContentInfoCompat): androidx.core.view.ContentInfoCompat;
				public onReceiveContent(view: android.view.View, payload: androidx.core.view.ContentInfoCompat): androidx.core.view.ContentInfoCompat;
				public constructor();
			}
			export module TextViewOnReceiveContentListener {
				export class Api16Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.widget.TextViewOnReceiveContentListener.Api16Impl>;
				}
				export class ApiImpl extends java.lang.Object {
					public static class: java.lang.Class<androidx.core.widget.TextViewOnReceiveContentListener.ApiImpl>;
				}
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class TintableCheckedTextView extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.widget.TintableCheckedTextView>;
				/**
				 * Constructs a new instance of the androidx.core.widget.TintableCheckedTextView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setSupportCheckMarkTintList(param0: android.content.res.ColorStateList): void;
					getSupportCheckMarkTintList(): android.content.res.ColorStateList;
					setSupportCheckMarkTintMode(param0: android.graphics.PorterDuff.Mode): void;
					getSupportCheckMarkTintMode(): android.graphics.PorterDuff.Mode;
				});
				public constructor();
				public getSupportCheckMarkTintList(): android.content.res.ColorStateList;
				public setSupportCheckMarkTintList(param0: android.content.res.ColorStateList): void;
				public getSupportCheckMarkTintMode(): android.graphics.PorterDuff.Mode;
				public setSupportCheckMarkTintMode(param0: android.graphics.PorterDuff.Mode): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class TintableCompoundButton extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.widget.TintableCompoundButton>;
				/**
				 * Constructs a new instance of the androidx.core.widget.TintableCompoundButton interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setSupportButtonTintList(param0: android.content.res.ColorStateList): void;
					getSupportButtonTintList(): android.content.res.ColorStateList;
					setSupportButtonTintMode(param0: android.graphics.PorterDuff.Mode): void;
					getSupportButtonTintMode(): android.graphics.PorterDuff.Mode;
				});
				public constructor();
				public getSupportButtonTintMode(): android.graphics.PorterDuff.Mode;
				public getSupportButtonTintList(): android.content.res.ColorStateList;
				public setSupportButtonTintList(param0: android.content.res.ColorStateList): void;
				public setSupportButtonTintMode(param0: android.graphics.PorterDuff.Mode): void;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class TintableCompoundDrawablesView extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.widget.TintableCompoundDrawablesView>;
				/**
				 * Constructs a new instance of the androidx.core.widget.TintableCompoundDrawablesView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setSupportCompoundDrawablesTintList(param0: android.content.res.ColorStateList): void;
					getSupportCompoundDrawablesTintList(): android.content.res.ColorStateList;
					setSupportCompoundDrawablesTintMode(param0: android.graphics.PorterDuff.Mode): void;
					getSupportCompoundDrawablesTintMode(): android.graphics.PorterDuff.Mode;
				});
				public constructor();
				public getSupportCompoundDrawablesTintList(): android.content.res.ColorStateList;
				public setSupportCompoundDrawablesTintList(param0: android.content.res.ColorStateList): void;
				public setSupportCompoundDrawablesTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public getSupportCompoundDrawablesTintMode(): android.graphics.PorterDuff.Mode;
			}
		}
	}
}

declare module androidx {
	export module core {
		export module widget {
			export class TintableImageSourceView extends java.lang.Object {
				public static class: java.lang.Class<androidx.core.widget.TintableImageSourceView>;
				/**
				 * Constructs a new instance of the androidx.core.widget.TintableImageSourceView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setSupportImageTintList(param0: android.content.res.ColorStateList): void;
					getSupportImageTintList(): android.content.res.ColorStateList;
					setSupportImageTintMode(param0: android.graphics.PorterDuff.Mode): void;
					getSupportImageTintMode(): android.graphics.PorterDuff.Mode;
				});
				public constructor();
				public setSupportImageTintList(param0: android.content.res.ColorStateList): void;
				public getSupportImageTintList(): android.content.res.ColorStateList;
				public setSupportImageTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public getSupportImageTintMode(): android.graphics.PorterDuff.Mode;
			}
		}
	}
}

//Generics information:
//androidx.core.content.pm.ShortcutInfoCompatSaver:1
//androidx.core.graphics.TypefaceCompatBaseImpl.StyleExtractor:1
//androidx.core.os.ParcelableCompat.ParcelableCompatCreatorHoneycombMR2:1
//androidx.core.os.ParcelableCompatCreatorCallbacks:1
//androidx.core.provider.RequestExecutor.ReplyRunnable:1
//androidx.core.provider.SelfDestructiveThread.ReplyCallback:1
//androidx.core.util.Consumer:1
//androidx.core.util.Pair:2
//androidx.core.util.Pools.Pool:1
//androidx.core.util.Pools.SimplePool:1
//androidx.core.util.Pools.SynchronizedPool:1
//androidx.core.util.Predicate:1
//androidx.core.util.Supplier:1
//androidx.core.view.ViewCompat.AccessibilityViewProperty:1

