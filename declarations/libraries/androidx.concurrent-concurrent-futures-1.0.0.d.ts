declare module androidx {
	export module concurrent {
		export module futures {
			export abstract class AbstractResolvableFuture<V>  extends com.google.common.util.concurrent.ListenableFuture<any> {
				public static class: java.lang.Class<androidx.concurrent.futures.AbstractResolvableFuture<any>>;
				public set(value: any): boolean;
				public setException(throwable: java.lang.Throwable): boolean;
				public pendingToString(): string;
				public afterDone(): void;
				public toString(): string;
				public get(timeout: number, param1: java.util.concurrent.TimeUnit): any;
				public addListener(listener: java.lang.Runnable, executor: java.util.concurrent.Executor): void;
				public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
				public constructor();
				public isDone(): boolean;
				public addListener(param0: java.lang.Runnable, param1: java.util.concurrent.Executor): void;
				public cancel(mayInterruptIfRunning: boolean): boolean;
				public get(): any;
				public wasInterrupted(): boolean;
				public cancel(param0: boolean): boolean;
				public interruptTask(): void;
				public isCancelled(): boolean;
				public setFuture(future: com.google.common.util.concurrent.ListenableFuture<any>): boolean;
			}
			export module AbstractResolvableFuture {
				export abstract class AtomicHelper extends java.lang.Object {
					public static class: java.lang.Class<androidx.concurrent.futures.AbstractResolvableFuture.AtomicHelper>;
				}
				export class Cancellation extends java.lang.Object {
					public static class: java.lang.Class<androidx.concurrent.futures.AbstractResolvableFuture.Cancellation>;
				}
				export class Failure extends java.lang.Object {
					public static class: java.lang.Class<androidx.concurrent.futures.AbstractResolvableFuture.Failure>;
				}
				export class Listener extends java.lang.Object {
					public static class: java.lang.Class<androidx.concurrent.futures.AbstractResolvableFuture.Listener>;
				}
				export class SafeAtomicHelper extends androidx.concurrent.futures.AbstractResolvableFuture.AtomicHelper {
					public static class: java.lang.Class<androidx.concurrent.futures.AbstractResolvableFuture.SafeAtomicHelper>;
				}
				export class SetFuture<V>  extends java.lang.Runnable {
					public static class: java.lang.Class<androidx.concurrent.futures.AbstractResolvableFuture.SetFuture<any>>;
					public run(): void;
				}
				export class SynchronizedHelper extends androidx.concurrent.futures.AbstractResolvableFuture.AtomicHelper {
					public static class: java.lang.Class<androidx.concurrent.futures.AbstractResolvableFuture.SynchronizedHelper>;
				}
				export class Waiter extends java.lang.Object {
					public static class: java.lang.Class<androidx.concurrent.futures.AbstractResolvableFuture.Waiter>;
				}
			}
		}
	}
}

declare module androidx {
	export module concurrent {
		export module futures {
			export class CallbackToFutureAdapter extends java.lang.Object {
				public static class: java.lang.Class<androidx.concurrent.futures.CallbackToFutureAdapter>;
				public static getFuture(callback: androidx.concurrent.futures.CallbackToFutureAdapter.Resolver<any>): com.google.common.util.concurrent.ListenableFuture;
			}
			export module CallbackToFutureAdapter {
				export class Completer<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.concurrent.futures.CallbackToFutureAdapter.Completer<any>>;
					public setException(t: java.lang.Throwable): boolean;
					public set(value: T): boolean;
					public setCancelled(): boolean;
					public addCancellationListener(runnable: java.lang.Runnable, executor: java.util.concurrent.Executor): void;
					public finalize(): void;
				}
				export class FutureGarbageCollectedException extends java.lang.Throwable {
					public static class: java.lang.Class<androidx.concurrent.futures.CallbackToFutureAdapter.FutureGarbageCollectedException>;
					public fillInStackTrace(): java.lang.Throwable;
				}
				export class Resolver<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.concurrent.futures.CallbackToFutureAdapter.Resolver<any>>;
					/**
					 * Constructs a new instance of the androidx.concurrent.futures.CallbackToFutureAdapter$Resolver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						attachCompleter(param0: androidx.concurrent.futures.CallbackToFutureAdapter.Completer<T>): any;
					});
					public constructor();
					public attachCompleter(param0: androidx.concurrent.futures.CallbackToFutureAdapter.Completer<T>): any;
				}
				export class SafeFuture<T>  extends com.google.common.util.concurrent.ListenableFuture<any> {
					public static class: java.lang.Class<androidx.concurrent.futures.CallbackToFutureAdapter.SafeFuture<any>>;
					public toString(): string;
					public get(): any;
					public isDone(): boolean;
					public isCancelled(): boolean;
					public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
					public addListener(listener: java.lang.Runnable, executor: java.util.concurrent.Executor): void;
					public cancel(param0: boolean): boolean;
					public get(timeout: number, param1: java.util.concurrent.TimeUnit): any;
					public addListener(param0: java.lang.Runnable, param1: java.util.concurrent.Executor): void;
					public cancel(mayInterruptIfRunning: boolean): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module concurrent {
		export module futures {
			export class DirectExecutor extends java.util.concurrent.Executor {
				public static class: java.lang.Class<androidx.concurrent.futures.DirectExecutor>;
				public static INSTANCE: androidx.concurrent.futures.DirectExecutor;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): androidx.concurrent.futures.DirectExecutor;
				public execute(param0: java.lang.Runnable): void;
				public static values(): androidx.concurrent.futures.DirectExecutor[];
				public execute(command: java.lang.Runnable): void;
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module concurrent {
		export module futures {
			export class ResolvableFuture<V>  extends androidx.concurrent.futures.AbstractResolvableFuture<any> {
				public static class: java.lang.Class<androidx.concurrent.futures.ResolvableFuture<any>>;
				public addListener(param0: java.lang.Runnable, param1: java.util.concurrent.Executor): void;
				public set(value: any): boolean;
				public setException(throwable: java.lang.Throwable): boolean;
				public static create(): androidx.concurrent.futures.ResolvableFuture<any>;
				public addListener(listener: java.lang.Runnable, executor: java.util.concurrent.Executor): void;
				public setFuture(future: com.google.common.util.concurrent.ListenableFuture<any>): boolean;
			}
		}
	}
}

//Generics information:
//androidx.concurrent.futures.AbstractResolvableFuture:1
//androidx.concurrent.futures.AbstractResolvableFuture.SetFuture:1
//androidx.concurrent.futures.CallbackToFutureAdapter.Completer:1
//androidx.concurrent.futures.CallbackToFutureAdapter.Resolver:1
//androidx.concurrent.futures.CallbackToFutureAdapter.SafeFuture:1
//androidx.concurrent.futures.ResolvableFuture:1

