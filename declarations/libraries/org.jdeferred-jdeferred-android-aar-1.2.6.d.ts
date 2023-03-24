declare module org {
	export module jdeferred {
		export module android {
			export class AndroidAlwaysCallback<D, R>  extends java.lang.Object {
				public static class: java.lang.Class<org.jdeferred.android.AndroidAlwaysCallback<any,any>>;
				/**
				 * Constructs a new instance of the org.jdeferred.android.AndroidAlwaysCallback<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onAlways(param0: org.jdeferred.Promise.State, param1: D, param2: R): void;
					getExecutionScope(): org.jdeferred.android.AndroidExecutionScope;
				});
				public constructor();
				public getExecutionScope(): org.jdeferred.android.AndroidExecutionScope;
				public onAlways(param0: org.jdeferred.Promise.State, param1: D, param2: R): void;
			}
		}
	}
}

declare module org {
	export module jdeferred {
		export module android {
			export class AndroidDeferredManager extends org.jdeferred.impl.DefaultDeferredManager {
				public static class: java.lang.Class<org.jdeferred.android.AndroidDeferredManager>;
				public when(param0: org.jdeferred.DeferredFutureTask): org.jdeferred.Promise;
				public when(...tasks: org.jdeferred.android.DeferredAsyncTask<java.lang.Void,any,any>[]): org.jdeferred.Promise<org.jdeferred.multiple.MultipleResults,org.jdeferred.multiple.OneReject,org.jdeferred.multiple.MasterProgress>;
				public when(scope: org.jdeferred.android.AndroidExecutionScope, ...tasks: org.jdeferred.android.DeferredAsyncTask<java.lang.Void,any,any>[]): org.jdeferred.Promise<org.jdeferred.multiple.MultipleResults,org.jdeferred.multiple.OneReject,org.jdeferred.multiple.MasterProgress>;
				public when(...param0: java.lang.Runnable[]): org.jdeferred.Promise<org.jdeferred.multiple.MultipleResults,org.jdeferred.multiple.OneReject,org.jdeferred.multiple.MasterProgress>;
				public when(...param0: org.jdeferred.DeferredFutureTask<any,any>[]): org.jdeferred.Promise<org.jdeferred.multiple.MultipleResults,org.jdeferred.multiple.OneReject,org.jdeferred.multiple.MasterProgress>;
				public when(...promises: org.jdeferred.Promise[]): org.jdeferred.Promise<org.jdeferred.multiple.MultipleResults,org.jdeferred.multiple.OneReject,org.jdeferred.multiple.MasterProgress>;
				public when(param0: java.util.concurrent.Callable<any>): org.jdeferred.Promise;
				public when(...param0: org.jdeferred.Promise[]): org.jdeferred.Promise<org.jdeferred.multiple.MultipleResults,org.jdeferred.multiple.OneReject,org.jdeferred.multiple.MasterProgress>;
				public when(param0: java.lang.Runnable): org.jdeferred.Promise<java.lang.Void,java.lang.Throwable,java.lang.Void>;
				public constructor();
				public when(promise: org.jdeferred.Promise, scope: org.jdeferred.android.AndroidExecutionScope): org.jdeferred.Promise;
				public when(task: org.jdeferred.DeferredFutureTask): org.jdeferred.Promise;
				public when(...param0: java.util.concurrent.Callable<any>[]): org.jdeferred.Promise<org.jdeferred.multiple.MultipleResults,org.jdeferred.multiple.OneReject,org.jdeferred.multiple.MasterProgress>;
				public when(param0: org.jdeferred.DeferredCallable): org.jdeferred.Promise;
				public when(...param0: java.util.concurrent.Future<any>[]): org.jdeferred.Promise<org.jdeferred.multiple.MultipleResults,org.jdeferred.multiple.OneReject,org.jdeferred.multiple.MasterProgress>;
				public when(param0: org.jdeferred.Promise): org.jdeferred.Promise;
				public constructor(param0: java.util.concurrent.ExecutorService);
				public when(param0: java.util.concurrent.Future<any>): org.jdeferred.Promise;
				public when(...param0: org.jdeferred.DeferredCallable<any,any>[]): org.jdeferred.Promise<org.jdeferred.multiple.MultipleResults,org.jdeferred.multiple.OneReject,org.jdeferred.multiple.MasterProgress>;
				public when(...param0: org.jdeferred.DeferredRunnable<any>[]): org.jdeferred.Promise<org.jdeferred.multiple.MultipleResults,org.jdeferred.multiple.OneReject,org.jdeferred.multiple.MasterProgress>;
				public when(promise: org.jdeferred.Promise): org.jdeferred.Promise;
				public when(param0: org.jdeferred.DeferredRunnable): org.jdeferred.Promise;
				public constructor(executorService: java.util.concurrent.ExecutorService);
				public when(task: org.jdeferred.android.DeferredAsyncTask<any,any,any>): org.jdeferred.Promise;
				public when(scope: org.jdeferred.android.AndroidExecutionScope, ...promises: org.jdeferred.Promise[]): org.jdeferred.Promise<org.jdeferred.multiple.MultipleResults,org.jdeferred.multiple.OneReject,org.jdeferred.multiple.MasterProgress>;
			}
		}
	}
}

declare module org {
	export module jdeferred {
		export module android {
			export class AndroidDeferredObject<D, F, P>  extends org.jdeferred.impl.DeferredObject<any,any,any> {
				public static class: java.lang.Class<org.jdeferred.android.AndroidDeferredObject<any,any,any>>;
				public log: org.slf4j.Logger;
				public triggerDone(param0: any): void;
				public triggerProgress(param0: any): void;
				public triggerProgress(param0: org.jdeferred.ProgressCallback<any>, param1: any): void;
				public then(param0: org.jdeferred.DonePipe): org.jdeferred.Promise;
				public triggerFail(param0: any): void;
				public then(param0: org.jdeferred.DoneCallback<any>, param1: org.jdeferred.FailCallback<any>, param2: org.jdeferred.ProgressCallback<any>): org.jdeferred.Promise<any,any,any>;
				public waitSafely(): void;
				public state(): org.jdeferred.Promise.State;
				public constructor();
				public then(param0: org.jdeferred.DoneFilter, param1: org.jdeferred.FailFilter, param2: org.jdeferred.ProgressFilter): org.jdeferred.Promise;
				public triggerDone(callback: org.jdeferred.DoneCallback<any>, resolved: any): void;
				public constructor(promise: org.jdeferred.Promise<any,any,any>, defaultAndroidExecutionScope: org.jdeferred.android.AndroidExecutionScope);
				public isRejected(): boolean;
				public reject(param0: any): org.jdeferred.Deferred<any,any,any>;
				public triggerAlways(callback: org.jdeferred.AlwaysCallback<any,any>, state: org.jdeferred.Promise.State, resolve: any, reject: any): void;
				public triggerAlways(param0: org.jdeferred.AlwaysCallback<any,any>, param1: org.jdeferred.Promise.State, param2: any, param3: any): void;
				public triggerFail(param0: org.jdeferred.FailCallback<any>, param1: any): void;
				public determineAndroidExecutionScope(callback: any): org.jdeferred.android.AndroidExecutionScope;
				public triggerFail(callback: org.jdeferred.FailCallback<any>, rejected: any): void;
				public then(param0: org.jdeferred.DoneFilter, param1: org.jdeferred.FailFilter): org.jdeferred.Promise;
				public determineAndroidExecutionScope(clazz: java.lang.Class<any>, methodName: string, ...arguments: java.lang.Class<any>[]): org.jdeferred.android.AndroidExecutionScope;
				public notify(): void;
				public triggerDone(param0: org.jdeferred.DoneCallback<any>, param1: any): void;
				public then(param0: org.jdeferred.DonePipe, param1: org.jdeferred.FailPipe, param2: org.jdeferred.ProgressPipe): org.jdeferred.Promise;
				public waitSafely(param0: number): void;
				public triggerProgress(callback: org.jdeferred.ProgressCallback<any>, progress: any): void;
				public promise(): org.jdeferred.Promise<any,any,any>;
				public always(param0: org.jdeferred.AlwaysCallback<any,any>): org.jdeferred.Promise<any,any,any>;
				public then(param0: org.jdeferred.DoneCallback<any>): org.jdeferred.Promise<any,any,any>;
				public constructor(promise: org.jdeferred.Promise<any,any,any>);
				public isPending(): boolean;
				public notify(param0: any): org.jdeferred.Deferred<any,any,any>;
				public then(param0: org.jdeferred.DoneFilter): org.jdeferred.Promise;
				public done(param0: org.jdeferred.DoneCallback<any>): org.jdeferred.Promise<any,any,any>;
				public resolve(param0: any): org.jdeferred.Deferred<any,any,any>;
				public then(param0: org.jdeferred.DonePipe, param1: org.jdeferred.FailPipe): org.jdeferred.Promise;
				public progress(param0: org.jdeferred.ProgressCallback<any>): org.jdeferred.Promise<any,any,any>;
				public then(param0: org.jdeferred.DoneCallback<any>, param1: org.jdeferred.FailCallback<any>): org.jdeferred.Promise<any,any,any>;
				public isResolved(): boolean;
				public fail(param0: org.jdeferred.FailCallback<any>): org.jdeferred.Promise<any,any,any>;
				public executeInUiThread(what: number, callback: any, state: org.jdeferred.Promise.State, resolve: any, reject: any, progress: any): void;
				public triggerAlways(param0: org.jdeferred.Promise.State, param1: any, param2: any): void;
			}
			export module AndroidDeferredObject {
				export class CallbackMessage<Callback, D, F, P>  extends java.lang.Object {
					public static class: java.lang.Class<org.jdeferred.android.AndroidDeferredObject.CallbackMessage<any,any,any,any>>;
				}
				export class InternalHandler extends android.os.Handler {
					public static class: java.lang.Class<org.jdeferred.android.AndroidDeferredObject.InternalHandler>;
					public constructor(callback: android.os.Handler.Callback);
					public constructor();
					public constructor(looper: android.os.Looper);
					public handleMessage(msg: android.os.Message): void;
					public constructor(looper: android.os.Looper, callback: android.os.Handler.Callback);
				}
			}
		}
	}
}

declare module org {
	export module jdeferred {
		export module android {
			export class AndroidDoneCallback<D>  extends java.lang.Object {
				public static class: java.lang.Class<org.jdeferred.android.AndroidDoneCallback<any>>;
				/**
				 * Constructs a new instance of the org.jdeferred.android.AndroidDoneCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onDone(param0: D): void;
					getExecutionScope(): org.jdeferred.android.AndroidExecutionScope;
				});
				public constructor();
				public onDone(param0: D): void;
				public getExecutionScope(): org.jdeferred.android.AndroidExecutionScope;
			}
		}
	}
}

declare module org {
	export module jdeferred {
		export module android {
			export class AndroidExecutionScope {
				public static class: java.lang.Class<org.jdeferred.android.AndroidExecutionScope>;
				public static BACKGROUND: org.jdeferred.android.AndroidExecutionScope;
				public static UI: org.jdeferred.android.AndroidExecutionScope;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): org.jdeferred.android.AndroidExecutionScope;
				public static values(): org.jdeferred.android.AndroidExecutionScope[];
			}
		}
	}
}

declare module org {
	export module jdeferred {
		export module android {
			export class AndroidExecutionScopeable extends java.lang.Object {
				public static class: java.lang.Class<org.jdeferred.android.AndroidExecutionScopeable>;
				/**
				 * Constructs a new instance of the org.jdeferred.android.AndroidExecutionScopeable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getExecutionScope(): org.jdeferred.android.AndroidExecutionScope;
				});
				public constructor();
				public getExecutionScope(): org.jdeferred.android.AndroidExecutionScope;
			}
		}
	}
}

declare module org {
	export module jdeferred {
		export module android {
			export class AndroidFailCallback<F>  extends java.lang.Object {
				public static class: java.lang.Class<org.jdeferred.android.AndroidFailCallback<any>>;
				/**
				 * Constructs a new instance of the org.jdeferred.android.AndroidFailCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onFail(param0: F): void;
					getExecutionScope(): org.jdeferred.android.AndroidExecutionScope;
				});
				public constructor();
				public getExecutionScope(): org.jdeferred.android.AndroidExecutionScope;
				public onFail(param0: F): void;
			}
		}
	}
}

declare module org {
	export module jdeferred {
		export module android {
			export class AndroidProgressCallback<P>  extends java.lang.Object {
				public static class: java.lang.Class<org.jdeferred.android.AndroidProgressCallback<any>>;
				/**
				 * Constructs a new instance of the org.jdeferred.android.AndroidProgressCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onProgress(param0: P): void;
					getExecutionScope(): org.jdeferred.android.AndroidExecutionScope;
				});
				public constructor();
				public getExecutionScope(): org.jdeferred.android.AndroidExecutionScope;
				public onProgress(param0: P): void;
			}
		}
	}
}

declare module org {
	export module jdeferred {
		export module android {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<org.jdeferred.android.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module jdeferred {
		export module android {
			export abstract class DeferredAsyncTask<Params, Progress, Result>  extends android.os.AsyncTask<any,any,any> {
				public static class: java.lang.Class<org.jdeferred.android.DeferredAsyncTask<any,any,any>>;
				public log: org.slf4j.Logger;
				public notify(): void;
				public doInBackground(...param0: any[]): any;
				public onCancelled(result: any): void;
				public onPostExecute(result: any): void;
				public constructor();
				public notify(progress: any): void;
				public doInBackgroundSafe(...param0: any[]): any;
				public constructor(startPolicy: org.jdeferred.DeferredManager.StartPolicy);
				public onProgressUpdate(...values: any[]): void;
				public getStartPolicy(): org.jdeferred.DeferredManager.StartPolicy;
				public promise(): org.jdeferred.Promise<any,java.lang.Throwable,any>;
				public onCancelled(): void;
				public doInBackground(...params: any[]): any;
			}
		}
	}
}

declare module org {
	export module jdeferred {
		export module android {
			export module annotation {
				export class ExecutionScope extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.jdeferred.android.annotation.ExecutionScope>;
					/**
					 * Constructs a new instance of the org.jdeferred.android.annotation.ExecutionScope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): org.jdeferred.android.AndroidExecutionScope;
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
					public value(): org.jdeferred.android.AndroidExecutionScope;
				}
			}
		}
	}
}

//Generics information:
//org.jdeferred.android.AndroidAlwaysCallback:2
//org.jdeferred.android.AndroidDeferredObject:3
//org.jdeferred.android.AndroidDeferredObject.CallbackMessage:4
//org.jdeferred.android.AndroidDoneCallback:1
//org.jdeferred.android.AndroidFailCallback:1
//org.jdeferred.android.AndroidProgressCallback:1
//org.jdeferred.android.DeferredAsyncTask:3

