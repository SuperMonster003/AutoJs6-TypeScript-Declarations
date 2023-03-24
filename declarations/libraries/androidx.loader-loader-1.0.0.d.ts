declare module androidx {
	export module loader {
		export module app {
			export abstract class LoaderManager extends java.lang.Object {
				public static class: java.lang.Class<androidx.loader.app.LoaderManager>;
				public static getInstance(owner: androidx.lifecycle.LifecycleOwner): androidx.loader.app.LoaderManager;
				public markForRedelivery(): void;
				/** @deprecated */
				public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: string[]): void;
				public getLoader(param0: number): androidx.loader.content.Loader<any>;
				public destroyLoader(param0: number): void;
				public initLoader(param0: number, param1: android.os.Bundle, param2: androidx.loader.app.LoaderManager.LoaderCallbacks<any>): androidx.loader.content.Loader<any>;
				public restartLoader(param0: number, param1: android.os.Bundle, param2: androidx.loader.app.LoaderManager.LoaderCallbacks<any>): androidx.loader.content.Loader<any>;
				public hasRunningLoaders(): boolean;
				public constructor();
				public static enableDebugLogging(enabled: boolean): void;
			}
			export module LoaderManager {
				export class LoaderCallbacks<D>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.loader.app.LoaderManager.LoaderCallbacks<any>>;
					/**
					 * Constructs a new instance of the androidx.loader.app.LoaderManager$LoaderCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCreateLoader(param0: number, param1: android.os.Bundle): androidx.loader.content.Loader<D>;
						onLoadFinished(param0: androidx.loader.content.Loader<D>, param1: D): void;
						onLoaderReset(param0: androidx.loader.content.Loader<D>): void;
					});
					public constructor();
					public onLoadFinished(param0: androidx.loader.content.Loader<D>, param1: D): void;
					public onCreateLoader(param0: number, param1: android.os.Bundle): androidx.loader.content.Loader<D>;
					public onLoaderReset(param0: androidx.loader.content.Loader<D>): void;
				}
			}
		}
	}
}

declare module androidx {
	export module loader {
		export module app {
			export class LoaderManagerImpl extends androidx.loader.app.LoaderManager {
				public static class: java.lang.Class<androidx.loader.app.LoaderManagerImpl>;
				public getLoader(id: number): androidx.loader.content.Loader<any>;
				public getLoader(param0: number): androidx.loader.content.Loader<any>;
				public destroyLoader(param0: number): void;
				/** @deprecated */
				public dump(prefix: string, fd: java.io.FileDescriptor, writer: java.io.PrintWriter, args: string[]): void;
				public toString(): string;
				public restartLoader(param0: number, param1: android.os.Bundle, param2: androidx.loader.app.LoaderManager.LoaderCallbacks<any>): androidx.loader.content.Loader<any>;
				public initLoader(id: number, args: android.os.Bundle, callback: androidx.loader.app.LoaderManager.LoaderCallbacks<any>): androidx.loader.content.Loader<any>;
				public markForRedelivery(): void;
				/** @deprecated */
				public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: string[]): void;
				public restartLoader(id: number, args: android.os.Bundle, callback: androidx.loader.app.LoaderManager.LoaderCallbacks<any>): androidx.loader.content.Loader<any>;
				public initLoader(param0: number, param1: android.os.Bundle, param2: androidx.loader.app.LoaderManager.LoaderCallbacks<any>): androidx.loader.content.Loader<any>;
				public hasRunningLoaders(): boolean;
				public destroyLoader(id: number): void;
			}
			export module LoaderManagerImpl {
				export class LoaderInfo<D>  extends androidx.lifecycle.MutableLiveData<any> implements androidx.loader.content.Loader.OnLoadCompleteListener<any>  {
					public static class: java.lang.Class<androidx.loader.app.LoaderManagerImpl.LoaderInfo<any>>;
					public onInactive(): void;
					public removeObserver(param0: androidx.lifecycle.Observer<any>): void;
					public toString(): string;
					public setValue(param0: any): void;
					public onLoadComplete(loader: androidx.loader.content.Loader<any>, data: any): void;
					public dump(prefix: string, fd: java.io.FileDescriptor, writer: java.io.PrintWriter, args: string[]): void;
					public onActive(): void;
					public setValue(value: any): void;
					public removeObserver(observer: androidx.lifecycle.Observer<any>): void;
					public onLoadComplete(param0: androidx.loader.content.Loader<any>, param1: any): void;
				}
				export class LoaderObserver<D>  extends androidx.lifecycle.Observer<any> {
					public static class: java.lang.Class<androidx.loader.app.LoaderManagerImpl.LoaderObserver<any>>;
					public toString(): string;
					public onChanged(data: any): void;
					public onChanged(param0: any): void;
					public dump(prefix: string, writer: java.io.PrintWriter): void;
				}
				export class LoaderViewModel extends androidx.lifecycle.ViewModel {
					public static class: java.lang.Class<androidx.loader.app.LoaderManagerImpl.LoaderViewModel>;
					public onCleared(): void;
					public dump(prefix: string, fd: java.io.FileDescriptor, writer: java.io.PrintWriter, args: string[]): void;
				}
			}
		}
	}
}

declare module androidx {
	export module loader {
		export module content {
			export abstract class AsyncTaskLoader<D>  extends androidx.loader.content.Loader<any> {
				public static class: java.lang.Class<androidx.loader.content.AsyncTaskLoader<any>>;
				public setUpdateThrottle(delayMS: number): void;
				public onLoadInBackground(): any;
				public onForceLoad(): void;
				public constructor(context: android.content.Context);
				public onCancelLoad(): boolean;
				public cancelLoadInBackground(): void;
				public onCanceled(data: any): void;
				public loadInBackground(): any;
				/** @deprecated */
				public dump(prefix: string, fd: java.io.FileDescriptor, writer: java.io.PrintWriter, args: string[]): void;
				public isLoadInBackgroundCanceled(): boolean;
				public waitForLoader(): void;
			}
			export module AsyncTaskLoader {
				export class LoadTask extends androidx.loader.content.ModernAsyncTask<java.lang.Void,java.lang.Void,any> implements java.lang.Runnable  {
					public static class: java.lang.Class<androidx.loader.content.AsyncTaskLoader.LoadTask>;
					public onPostExecute(data: any): void;
					public run(): void;
					public onCancelled(result: any): void;
					public onCancelled(): void;
					public onCancelled(data: any): void;
					public doInBackground(...params: java.lang.Void[]): any;
					public onPostExecute(result: any): void;
					public waitForLoader(): void;
					public doInBackground(...param0: any[]): any;
				}
			}
		}
	}
}

declare module androidx {
	export module loader {
		export module content {
			export class CursorLoader extends androidx.loader.content.AsyncTaskLoader<android.database.Cursor> {
				public static class: java.lang.Class<androidx.loader.content.CursorLoader>;
				public onStartLoading(): void;
				public onStopLoading(): void;
				public getSortOrder(): string;
				public onCanceled(cursor: android.database.Cursor): void;
				public setProjection(projection: string[]): void;
				public constructor(context: android.content.Context, uri: android.net.Uri, projection: string[], selection: string, selectionArgs: string[], sortOrder: string);
				public getSelection(): string;
				public setSortOrder(sortOrder: string): void;
				public constructor(context: android.content.Context);
				public getProjection(): string[];
				public cancelLoadInBackground(): void;
				public deliverResult(data: any): void;
				public loadInBackground(): any;
				public getSelectionArgs(): string[];
				/** @deprecated */
				public dump(prefix: string, fd: java.io.FileDescriptor, writer: java.io.PrintWriter, args: string[]): void;
				public setSelection(selection: string): void;
				public deliverResult(cursor: android.database.Cursor): void;
				public onReset(): void;
				public getUri(): android.net.Uri;
				public setSelectionArgs(selectionArgs: string[]): void;
				public loadInBackground(): android.database.Cursor;
				public onCanceled(data: any): void;
				public setUri(uri: android.net.Uri): void;
			}
		}
	}
}

declare module androidx {
	export module loader {
		export module content {
			export class Loader<D>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.loader.content.Loader<any>>;
				public onStartLoading(): void;
				public rollbackContentChanged(): void;
				public onStopLoading(): void;
				public isStarted(): boolean;
				public takeContentChanged(): boolean;
				public isAbandoned(): boolean;
				public registerOnLoadCanceledListener(listener: androidx.loader.content.Loader.OnLoadCanceledListener<D>): void;
				public stopLoading(): void;
				public reset(): void;
				public unregisterListener(listener: androidx.loader.content.Loader.OnLoadCompleteListener<D>): void;
				public onCancelLoad(): boolean;
				public onAbandon(): void;
				public startLoading(): void;
				public dataToString(data: D): string;
				public onForceLoad(): void;
				public unregisterOnLoadCanceledListener(listener: androidx.loader.content.Loader.OnLoadCanceledListener<D>): void;
				public constructor(context: android.content.Context);
				public getId(): number;
				/** @deprecated */
				public dump(prefix: string, fd: java.io.FileDescriptor, writer: java.io.PrintWriter, args: string[]): void;
				public cancelLoad(): boolean;
				public toString(): string;
				public onReset(): void;
				public onContentChanged(): void;
				public deliverCancellation(): void;
				public registerListener(id: number, listener: androidx.loader.content.Loader.OnLoadCompleteListener<D>): void;
				public deliverResult(data: D): void;
				public commitContentChanged(): void;
				public abandon(): void;
				public isReset(): boolean;
				public getContext(): android.content.Context;
				public forceLoad(): void;
			}
			export module Loader {
				export class ForceLoadContentObserver extends android.database.ContentObserver {
					public static class: java.lang.Class<androidx.loader.content.Loader.ForceLoadContentObserver>;
					public onChange(selfChange: boolean): void;
					public deliverSelfNotifications(): boolean;
					public constructor(this$0: androidx.loader.content.Loader<any>);
					public onChange(selfChange: boolean, uri: android.net.Uri): void;
					public constructor(handler: android.os.Handler);
				}
				export class OnLoadCanceledListener<D>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.loader.content.Loader.OnLoadCanceledListener<any>>;
					/**
					 * Constructs a new instance of the androidx.loader.content.Loader$OnLoadCanceledListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onLoadCanceled(param0: androidx.loader.content.Loader<D>): void;
					});
					public constructor();
					public onLoadCanceled(param0: androidx.loader.content.Loader<D>): void;
				}
				export class OnLoadCompleteListener<D>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.loader.content.Loader.OnLoadCompleteListener<any>>;
					/**
					 * Constructs a new instance of the androidx.loader.content.Loader$OnLoadCompleteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onLoadComplete(param0: androidx.loader.content.Loader<D>, param1: D): void;
					});
					public constructor();
					public onLoadComplete(param0: androidx.loader.content.Loader<D>, param1: D): void;
				}
			}
		}
	}
}

declare module androidx {
	export module loader {
		export module content {
			export abstract class ModernAsyncTask<Params, Progress, Result>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.loader.content.ModernAsyncTask<any,any,any>>;
				public static THREAD_POOL_EXECUTOR: java.util.concurrent.Executor;
				public onCancelled(result: Result): void;
				public getStatus(): androidx.loader.content.ModernAsyncTask.Status;
				public publishProgress(...values: Progress[]): void;
				public get(): Result;
				public doInBackground(...param0: Params[]): Result;
				public executeOnExecutor(exec: java.util.concurrent.Executor, ...params: Params[]): androidx.loader.content.ModernAsyncTask<Params,Progress,Result>;
				public static setDefaultExecutor(exec: java.util.concurrent.Executor): void;
				public onPostExecute(result: Result): void;
				public onProgressUpdate(...values: Progress[]): void;
				public static execute(runnable: java.lang.Runnable): void;
				public cancel(mayInterruptIfRunning: boolean): boolean;
				public onPreExecute(): void;
				public get(timeout: number, param1: java.util.concurrent.TimeUnit): Result;
				public execute(...params: Params[]): androidx.loader.content.ModernAsyncTask<Params,Progress,Result>;
				public onCancelled(): void;
				public isCancelled(): boolean;
			}
			export module ModernAsyncTask {
				export class AsyncTaskResult<Data>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.loader.content.ModernAsyncTask.AsyncTaskResult<any>>;
				}
				export class InternalHandler extends android.os.Handler {
					public static class: java.lang.Class<androidx.loader.content.ModernAsyncTask.InternalHandler>;
					public handleMessage(msg: android.os.Message): void;
				}
				export class Status {
					public static class: java.lang.Class<androidx.loader.content.ModernAsyncTask.Status>;
					public static PENDING: androidx.loader.content.ModernAsyncTask.Status;
					public static RUNNING: androidx.loader.content.ModernAsyncTask.Status;
					public static FINISHED: androidx.loader.content.ModernAsyncTask.Status;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): androidx.loader.content.ModernAsyncTask.Status[];
					public static valueOf(name: string): androidx.loader.content.ModernAsyncTask.Status;
				}
				export abstract class WorkerRunnable<Params, Result>  extends java.util.concurrent.Callable<any> {
					public static class: java.lang.Class<androidx.loader.content.ModernAsyncTask.WorkerRunnable<any,any>>;
					public call(): any;
				}
			}
		}
	}
}

//Generics information:
//androidx.loader.app.LoaderManager.LoaderCallbacks:1
//androidx.loader.app.LoaderManagerImpl.LoaderInfo:1
//androidx.loader.app.LoaderManagerImpl.LoaderObserver:1
//androidx.loader.content.AsyncTaskLoader:1
//androidx.loader.content.Loader:1
//androidx.loader.content.Loader.OnLoadCanceledListener:1
//androidx.loader.content.Loader.OnLoadCompleteListener:1
//androidx.loader.content.ModernAsyncTask:3
//androidx.loader.content.ModernAsyncTask.AsyncTaskResult:1
//androidx.loader.content.ModernAsyncTask.WorkerRunnable:2

