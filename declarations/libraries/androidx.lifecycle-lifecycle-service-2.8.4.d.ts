/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module androidx {
	export module lifecycle {
		export class LifecycleService extends android.app.Service implements androidx.lifecycle.LifecycleOwner {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleService>;
			/** @deprecated */
			public onStart(intent: android.content.Intent, startId: number): void;
			public onTrimMemory(param0: number): void;
			public onBind(param0: android.content.Intent): android.os.IBinder;
			public onTrimMemory(level: number): void;
			public onCreate(): void;
			public onStartCommand(intent: android.content.Intent, flags: number, startId: number): number;
			public constructor();
			public onDestroy(): void;
			public constructor(base: android.content.Context);
			public onBind(intent: android.content.Intent): android.os.IBinder;
			public getLifecycle(): androidx.lifecycle.Lifecycle;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ServiceLifecycleDispatcher extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.ServiceLifecycleDispatcher>;
			public constructor(provider: androidx.lifecycle.LifecycleOwner);
			public onServicePreSuperOnStart(): void;
			public onServicePreSuperOnCreate(): void;
			public onServicePreSuperOnBind(): void;
			public getLifecycle(): androidx.lifecycle.Lifecycle;
			public onServicePreSuperOnDestroy(): void;
		}
		export module ServiceLifecycleDispatcher {
			export class DispatchRunnable extends java.lang.Object implements java.lang.Runnable {
				public static class: java.lang.Class<androidx.lifecycle.ServiceLifecycleDispatcher.DispatchRunnable>;
				public constructor(registry: androidx.lifecycle.LifecycleRegistry, event: androidx.lifecycle.Lifecycle.Event);
				public run(): void;
				public getEvent(): androidx.lifecycle.Lifecycle.Event;
			}
		}
	}
}

//Generics information:

