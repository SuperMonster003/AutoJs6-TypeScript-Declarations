declare module androidx {
	export module lifecycle {
		export class DispatchQueue extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.DispatchQueue>;
			public resume(): void;
			public canRun(): boolean;
			public dispatchAndEnqueue(context: kotlin.coroutines.CoroutineContext, runnable: java.lang.Runnable): void;
			public finish(): void;
			public constructor();
			public drainQueue(): void;
			public pause(): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class LifecycleController extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleController>;
			public finish(): void;
			public constructor(lifecycle: androidx.lifecycle.Lifecycle, minState: androidx.lifecycle.Lifecycle.State, dispatchQueue: androidx.lifecycle.DispatchQueue, parentJob: kotlinx.coroutines.Job);
		}
	}
}

declare module androidx {
	export module lifecycle {
		export abstract class LifecycleCoroutineScope extends java.lang.Object implements kotlinx.coroutines.CoroutineScope {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleCoroutineScope>;
			public getLifecycle$lifecycle_runtime_ktx_release(): androidx.lifecycle.Lifecycle;
			public launchWhenResumed(block: kotlin.jvm.functions.Function2<any,any,any>): kotlinx.coroutines.Job;
			public getCoroutineContext(): kotlin.coroutines.CoroutineContext;
			public launchWhenCreated(block: kotlin.jvm.functions.Function2<any,any,any>): kotlinx.coroutines.Job;
			public constructor();
			public launchWhenStarted(block: kotlin.jvm.functions.Function2<any,any,any>): kotlinx.coroutines.Job;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class LifecycleCoroutineScopeImpl extends androidx.lifecycle.LifecycleCoroutineScope implements androidx.lifecycle.LifecycleEventObserver {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleCoroutineScopeImpl>;
			public getLifecycle$lifecycle_runtime_ktx_release(): androidx.lifecycle.Lifecycle;
			public constructor(lifecycle: androidx.lifecycle.Lifecycle, coroutineContext: kotlin.coroutines.CoroutineContext);
			public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
			public onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
			public getCoroutineContext(): kotlin.coroutines.CoroutineContext;
			public register(): void;
			public constructor();
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class LifecycleDestroyedException extends java.util.concurrent.CancellationException {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleDestroyedException>;
			public constructor(message: string);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class PausingDispatcher extends kotlinx.coroutines.CoroutineDispatcher {
			public static class: java.lang.Class<androidx.lifecycle.PausingDispatcher>;
			public dispatchQueue: androidx.lifecycle.DispatchQueue;
			public isDispatchNeeded(context: kotlin.coroutines.CoroutineContext): boolean;
			public fold(param0: any, param1: kotlin.jvm.functions.Function2): any;
			public constructor(param0: kotlin.coroutines.CoroutineContext.Key<any>);
			public releaseInterceptedContinuation(param0: kotlin.coroutines.Continuation<any>): void;
			public getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
			public get(param0: kotlin.coroutines.CoroutineContext.Key): kotlin.coroutines.CoroutineContext.Element;
			public interceptContinuation(param0: kotlin.coroutines.Continuation): kotlin.coroutines.Continuation;
			public minusKey(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			public dispatch(param0: kotlin.coroutines.CoroutineContext, param1: java.lang.Runnable): void;
			public constructor();
			public dispatch(context: kotlin.coroutines.CoroutineContext, block: java.lang.Runnable): void;
			public isDispatchNeeded(param0: kotlin.coroutines.CoroutineContext): boolean;
		}
	}
}

//Generics information:

