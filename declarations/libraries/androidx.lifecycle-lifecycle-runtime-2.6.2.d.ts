/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module androidx {
	export module lifecycle {
		export class LifecycleRegistry extends androidx.lifecycle.Lifecycle {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleRegistry>;
			public constructor(provider: androidx.lifecycle.LifecycleOwner);
			public removeObserver(observer: androidx.lifecycle.LifecycleObserver): void;
			public addObserver(param0: androidx.lifecycle.LifecycleObserver): void;
			public handleLifecycleEvent(event: androidx.lifecycle.Lifecycle.Event): void;
			public getObserverCount(): number;
			public constructor();
			public addObserver(observer: androidx.lifecycle.LifecycleObserver): void;
			public removeObserver(param0: androidx.lifecycle.LifecycleObserver): void;
			public static createUnsafe(owner: androidx.lifecycle.LifecycleOwner): androidx.lifecycle.LifecycleRegistry;
			public static min$lifecycle_runtime_release(state1: androidx.lifecycle.Lifecycle.State, state2: androidx.lifecycle.Lifecycle.State): androidx.lifecycle.Lifecycle.State;
			public setCurrentState(state: androidx.lifecycle.Lifecycle.State): void;
			public getCurrentState(): androidx.lifecycle.Lifecycle.State;
			/** @deprecated */
			public markState(state: androidx.lifecycle.Lifecycle.State): void;
		}
		export module LifecycleRegistry {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<androidx.lifecycle.LifecycleRegistry.Companion>;
				public min$lifecycle_runtime_release(state1: androidx.lifecycle.Lifecycle.State, state2: androidx.lifecycle.Lifecycle.State): androidx.lifecycle.Lifecycle.State;
				public createUnsafe(owner: androidx.lifecycle.LifecycleOwner): androidx.lifecycle.LifecycleRegistry;
			}
			export class ObserverWithState extends java.lang.Object {
				public static class: java.lang.Class<androidx.lifecycle.LifecycleRegistry.ObserverWithState>;
				public getState(): androidx.lifecycle.Lifecycle.State;
				public setState(_set_: androidx.lifecycle.Lifecycle.State): void;
				public getLifecycleObserver(): androidx.lifecycle.LifecycleEventObserver;
				public constructor(observer: androidx.lifecycle.LifecycleObserver, initialState: androidx.lifecycle.Lifecycle.State);
				public setLifecycleObserver(_set_: androidx.lifecycle.LifecycleEventObserver): void;
				public dispatchEvent(owner: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
			}
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class LifecycleRegistryOwner extends java.lang.Object implements androidx.lifecycle.LifecycleOwner {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleRegistryOwner>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.LifecycleRegistryOwner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getLifecycle(): androidx.lifecycle.LifecycleRegistry;
				getLifecycle(): androidx.lifecycle.Lifecycle;
				getLifecycle(): androidx.lifecycle.Lifecycle;
			});
			public constructor();
			public getLifecycle(): androidx.lifecycle.LifecycleRegistry;
			public getLifecycle(): androidx.lifecycle.Lifecycle;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ReportFragment extends android.app.Fragment {
			public static class: java.lang.Class<androidx.lifecycle.ReportFragment>;
			public setProcessListener(processListener: androidx.lifecycle.ReportFragment.ActivityInitializationListener): void;
			public onStart(): void;
			public onResume(): void;
			public constructor();
			public onDestroy(): void;
			public static injectIfNeededIn(activity: android.app.Activity): void;
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			public onTrimMemory(param0: number): void;
			public onTrimMemory(level: number): void;
			public onActivityCreated(savedInstanceState: android.os.Bundle): void;
			public onPause(): void;
			public static get($this$get: android.app.Activity): androidx.lifecycle.ReportFragment;
			public static dispatch$lifecycle_runtime_release(activity: android.app.Activity, event: androidx.lifecycle.Lifecycle.Event): void;
			public onStop(): void;
			public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
		}
		export module ReportFragment {
			export class ActivityInitializationListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.lifecycle.ReportFragment.ActivityInitializationListener>;
				/**
				 * Constructs a new instance of the androidx.lifecycle.ReportFragment$ActivityInitializationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCreate(): void;
					onStart(): void;
					onResume(): void;
				});
				public constructor();
				public onResume(): void;
				public onStart(): void;
				public onCreate(): void;
			}
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<androidx.lifecycle.ReportFragment.Companion>;
				public dispatch$lifecycle_runtime_release(activity: android.app.Activity, event: androidx.lifecycle.Lifecycle.Event): void;
				public injectIfNeededIn(activity: android.app.Activity): void;
				public get($this$reportFragment: android.app.Activity): androidx.lifecycle.ReportFragment;
			}
			export class LifecycleCallbacks extends java.lang.Object implements android.app.Application.ActivityLifecycleCallbacks {
				public static class: java.lang.Class<androidx.lifecycle.ReportFragment.LifecycleCallbacks>;
				public onActivityPaused(param0: android.app.Activity): void;
				public onActivityPrePaused(activity: android.app.Activity): void;
				public onActivityPostCreated(activity: android.app.Activity, savedInstanceState: android.os.Bundle): void;
				public onActivityCreated(activity: android.app.Activity, bundle: android.os.Bundle): void;
				public onActivityDestroyed(param0: android.app.Activity): void;
				public onActivitySaveInstanceState(activity: android.app.Activity, bundle: android.os.Bundle): void;
				public onActivityCreated(param0: android.app.Activity, param1: android.os.Bundle): void;
				public onActivityPreDestroyed(activity: android.app.Activity): void;
				public constructor();
				public onActivityStopped(param0: android.app.Activity): void;
				public onActivityStopped(activity: android.app.Activity): void;
				public onActivityStarted(param0: android.app.Activity): void;
				public onActivityResumed(param0: android.app.Activity): void;
				public static registerIn(activity: android.app.Activity): void;
				public onActivityStarted(activity: android.app.Activity): void;
				public onActivityPreStopped(activity: android.app.Activity): void;
				public onActivityPostResumed(activity: android.app.Activity): void;
				public onActivityPostStarted(activity: android.app.Activity): void;
				public onActivitySaveInstanceState(param0: android.app.Activity, param1: android.os.Bundle): void;
				public onActivityPaused(activity: android.app.Activity): void;
				public onActivityDestroyed(activity: android.app.Activity): void;
				public onActivityResumed(activity: android.app.Activity): void;
			}
			export module LifecycleCallbacks {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<androidx.lifecycle.ReportFragment.LifecycleCallbacks.Companion>;
					public registerIn(activity: android.app.Activity): void;
				}
			}
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ViewTreeLifecycleOwner extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.ViewTreeLifecycleOwner>;
			public static get($this$findViewTreeLifecycleOwner: android.view.View): androidx.lifecycle.LifecycleOwner;
			public static set($this$setViewTreeLifecycleOwner: android.view.View, lifecycleOwner: androidx.lifecycle.LifecycleOwner): void;
		}
	}
}

//Generics information:

