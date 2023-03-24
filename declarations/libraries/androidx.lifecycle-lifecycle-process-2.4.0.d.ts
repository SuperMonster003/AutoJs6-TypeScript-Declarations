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
		}
		export module LifecycleDispatcher {
			export class DispatcherActivityCallback extends androidx.lifecycle.EmptyActivityLifecycleCallbacks {
				public static class: java.lang.Class<androidx.lifecycle.LifecycleDispatcher.DispatcherActivityCallback>;
				public onActivityCreated(activity: android.app.Activity, savedInstanceState: android.os.Bundle): void;
				public onActivityPaused(param0: android.app.Activity): void;
				public onActivityDestroyed(param0: android.app.Activity): void;
				public onActivityCreated(param0: android.app.Activity, param1: android.os.Bundle): void;
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
			public static get(): androidx.lifecycle.LifecycleOwner;
			public getLifecycle(): androidx.lifecycle.Lifecycle;
		}
	}
}

//Generics information:

