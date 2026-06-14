/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module androidx {
	export module lifecycle {
		export class EmptyActivityLifecycleCallbacks extends java.lang.Object implements android.app.Application.ActivityLifecycleCallbacks {
			public static class: java.lang.Class<androidx.lifecycle.EmptyActivityLifecycleCallbacks>;
			public onActivitySaveInstanceState(activity: android.app.Activity, outState: android.os.Bundle): void;
			public onActivityResumed(param0: android.app.Activity): void;
			public onActivityStopped(param0: android.app.Activity): void;
			public onActivitySaveInstanceState(param0: android.app.Activity, param1: android.os.Bundle): void;
			public onActivityCreated(activity: android.app.Activity, savedInstanceState: android.os.Bundle): void;
			public onActivityResumed(activity: android.app.Activity): void;
			public constructor();
			public onActivityDestroyed(param0: android.app.Activity): void;
			public onActivityDestroyed(activity: android.app.Activity): void;
			public onActivityPaused(activity: android.app.Activity): void;
			public onActivityStopped(activity: android.app.Activity): void;
			public onActivityCreated(param0: android.app.Activity, param1: android.os.Bundle): void;
			public onActivityStarted(activity: android.app.Activity): void;
			public onActivityPaused(param0: android.app.Activity): void;
			public onActivityStarted(param0: android.app.Activity): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class LifecycleDispatcher extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleDispatcher>;
			public static INSTANCE: androidx.lifecycle.LifecycleDispatcher;
			public static init(context: android.content.Context): void;
		}
		export module LifecycleDispatcher {
			export class DispatcherActivityCallback extends androidx.lifecycle.EmptyActivityLifecycleCallbacks {
				public static class: java.lang.Class<androidx.lifecycle.LifecycleDispatcher.DispatcherActivityCallback>;
				public onActivityCreated(activity: android.app.Activity, savedInstanceState: android.os.Bundle): void;
				public onActivityPaused(param0: android.app.Activity): void;
				public onActivityDestroyed(param0: android.app.Activity): void;
				public onActivityCreated(param0: android.app.Activity, param1: android.os.Bundle): void;
				public constructor();
				public onActivitySaveInstanceState(activity: android.app.Activity, outState: android.os.Bundle): void;
				public onActivityStopped(param0: android.app.Activity): void;
				public onActivityStopped(activity: android.app.Activity): void;
				public onActivityStarted(param0: android.app.Activity): void;
				public onActivityResumed(param0: android.app.Activity): void;
				public onActivityStarted(activity: android.app.Activity): void;
				public onActivitySaveInstanceState(param0: android.app.Activity, param1: android.os.Bundle): void;
				public onActivityPaused(activity: android.app.Activity): void;
				public onActivityDestroyed(activity: android.app.Activity): void;
				public onActivityResumed(activity: android.app.Activity): void;
			}
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ProcessLifecycleInitializer extends androidx.startup.Initializer<androidx.lifecycle.LifecycleOwner> {
			public static class: java.lang.Class<androidx.lifecycle.ProcessLifecycleInitializer>;
			public create(context: android.content.Context): androidx.lifecycle.LifecycleOwner;
			public dependencies(): java.util.List<java.lang.Class<any>>;
			public constructor();
			public create(param0: android.content.Context): any;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ProcessLifecycleOwner extends java.lang.Object implements androidx.lifecycle.LifecycleOwner {
			public static class: java.lang.Class<androidx.lifecycle.ProcessLifecycleOwner>;
			public static TIMEOUT_MS: number;
			public static init$lifecycle_process_release(context: android.content.Context): void;
			public attach$lifecycle_process_release(context: android.content.Context): void;
			public static get(): androidx.lifecycle.LifecycleOwner;
			public activityStopped$lifecycle_process_release(): void;
			public activityStarted$lifecycle_process_release(): void;
			public getLifecycle(): androidx.lifecycle.Lifecycle;
			public activityResumed$lifecycle_process_release(): void;
			public activityPaused$lifecycle_process_release(): void;
			public dispatchPauseIfNeeded$lifecycle_process_release(): void;
			public dispatchStopIfNeeded$lifecycle_process_release(): void;
		}
		export module ProcessLifecycleOwner {
			export class Api29Impl extends java.lang.Object {
				public static class: java.lang.Class<androidx.lifecycle.ProcessLifecycleOwner.Api29Impl>;
				public static INSTANCE: androidx.lifecycle.ProcessLifecycleOwner.Api29Impl;
				public static registerActivityLifecycleCallbacks(activity: android.app.Activity, callback: android.app.Application.ActivityLifecycleCallbacks): void;
			}
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<androidx.lifecycle.ProcessLifecycleOwner.Companion>;
				public get(): androidx.lifecycle.LifecycleOwner;
				public init$lifecycle_process_release(context: android.content.Context): void;
			}
		}
	}
}

//Generics information:

