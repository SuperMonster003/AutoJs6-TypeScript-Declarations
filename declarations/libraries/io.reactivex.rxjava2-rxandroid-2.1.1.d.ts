declare module io {
	export module reactivex {
		export module android {
			export abstract class MainThreadDisposable extends java.lang.Object implements io.reactivex.disposables.Disposable {
				public static class: java.lang.Class<io.reactivex.android.MainThreadDisposable>;
				public static verifyMainThread(): void;
				public isDisposed(): boolean;
				public dispose(): void;
				public onDispose(): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module reactivex {
		export module android {
			export module plugins {
				export class RxAndroidPlugins extends java.lang.Object {
					public static class: java.lang.Class<io.reactivex.android.plugins.RxAndroidPlugins>;
					public static reset(): void;
					public static getOnMainThreadSchedulerHandler(): io.reactivex.functions.Function<io.reactivex.Scheduler,io.reactivex.Scheduler>;
					public static onMainThreadScheduler(scheduler: io.reactivex.Scheduler): io.reactivex.Scheduler;
					public static setMainThreadSchedulerHandler(handler: io.reactivex.functions.Function<io.reactivex.Scheduler,io.reactivex.Scheduler>): void;
					public static setInitMainThreadSchedulerHandler(handler: io.reactivex.functions.Function<java.util.concurrent.Callable<io.reactivex.Scheduler>,io.reactivex.Scheduler>): void;
					public static initMainThreadScheduler(scheduler: java.util.concurrent.Callable<io.reactivex.Scheduler>): io.reactivex.Scheduler;
					public static getInitMainThreadSchedulerHandler(): io.reactivex.functions.Function<java.util.concurrent.Callable<io.reactivex.Scheduler>,io.reactivex.Scheduler>;
				}
			}
		}
	}
}

declare module io {
	export module reactivex {
		export module android {
			export module schedulers {
				export class AndroidSchedulers extends java.lang.Object {
					public static class: java.lang.Class<io.reactivex.android.schedulers.AndroidSchedulers>;
					public static from(looper: android.os.Looper): io.reactivex.Scheduler;
					public static mainThread(): io.reactivex.Scheduler;
					public static from(looper: android.os.Looper, async: boolean): io.reactivex.Scheduler;
				}
				export module AndroidSchedulers {
					export class MainHolder extends java.lang.Object {
						public static class: java.lang.Class<io.reactivex.android.schedulers.AndroidSchedulers.MainHolder>;
					}
				}
			}
		}
	}
}

declare module io {
	export module reactivex {
		export module android {
			export module schedulers {
				export class HandlerScheduler extends io.reactivex.Scheduler {
					public static class: java.lang.Class<io.reactivex.android.schedulers.HandlerScheduler>;
					public scheduleDirect(param0: java.lang.Runnable): io.reactivex.disposables.Disposable;
					public createWorker(): io.reactivex.Scheduler.Worker;
					public scheduleDirect(run: java.lang.Runnable, delay: number, param2: java.util.concurrent.TimeUnit): io.reactivex.disposables.Disposable;
					public scheduleDirect(param0: java.lang.Runnable, param1: number, param2: java.util.concurrent.TimeUnit): io.reactivex.disposables.Disposable;
				}
				export module HandlerScheduler {
					export class HandlerWorker extends io.reactivex.Scheduler.Worker {
						public static class: java.lang.Class<io.reactivex.android.schedulers.HandlerScheduler.HandlerWorker>;
						public schedule(run: java.lang.Runnable, delay: number, param2: java.util.concurrent.TimeUnit): io.reactivex.disposables.Disposable;
						public isDisposed(): boolean;
						public schedule(param0: java.lang.Runnable): io.reactivex.disposables.Disposable;
						public schedule(param0: java.lang.Runnable, param1: number, param2: java.util.concurrent.TimeUnit): io.reactivex.disposables.Disposable;
						public dispose(): void;
					}
					export class ScheduledRunnable extends java.lang.Object implements java.lang.Runnable, io.reactivex.disposables.Disposable {
						public static class: java.lang.Class<io.reactivex.android.schedulers.HandlerScheduler.ScheduledRunnable>;
						public run(): void;
						public isDisposed(): boolean;
						public dispose(): void;
					}
				}
			}
		}
	}
}

//Generics information:

