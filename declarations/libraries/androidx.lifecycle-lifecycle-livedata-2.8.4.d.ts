/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module androidx {
	export module lifecycle {
		export class Api26Impl extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.Api26Impl>;
			public static INSTANCE: androidx.lifecycle.Api26Impl;
			public toMillis(timeout: java.time.Duration): number;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class BlockRunner<T>  extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.BlockRunner<any>>;
			public maybeRun(): void;
			public cancel(): void;
			public constructor(liveData: androidx.lifecycle.CoroutineLiveData<T>, block: kotlin.jvm.functions.Function2<any,any,any>, timeoutInMs: number, param3: kotlinx.coroutines.CoroutineScope, scope: kotlin.jvm.functions.Function0<kotlin.Unit>);
		}
	}
}

declare module androidx {
	export module lifecycle {
		export abstract class ComputableLiveData<T>  extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.ComputableLiveData<any>>;
			public refreshRunnable: java.lang.Runnable;
			public invalidationRunnable: java.lang.Runnable;
			public invalidate(): void;
			public getInvalid$lifecycle_livedata_release(): java.util.concurrent.atomic.AtomicBoolean;
			public constructor(executor: java.util.concurrent.Executor);
			public compute(): T;
			public getLiveData(): androidx.lifecycle.LiveData<T>;
			public constructor();
			public getComputing$lifecycle_livedata_release(): java.util.concurrent.atomic.AtomicBoolean;
			public getExecutor$lifecycle_livedata_release(): java.util.concurrent.Executor;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class CoroutineLiveData<T>  extends androidx.lifecycle.MediatorLiveData<any> {
			public static class: java.lang.Class<androidx.lifecycle.CoroutineLiveData<any>>;
			public onInactive(): void;
			public emitSource$lifecycle_livedata_release(param0: androidx.lifecycle.LiveData<any>, param1: kotlin.coroutines.Continuation<any>): any;
			public onActive(): void;
			public constructor(value: any);
			public constructor();
			public constructor(context: kotlin.coroutines.CoroutineContext, timeoutInMs: number, param2: kotlin.jvm.functions.Function2<any,any,any>);
			public clearSource$lifecycle_livedata_release(param0: kotlin.coroutines.Continuation<any>): any;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class EmittedSource extends java.lang.Object implements kotlinx.coroutines.DisposableHandle {
			public static class: java.lang.Class<androidx.lifecycle.EmittedSource>;
			public constructor(source: androidx.lifecycle.LiveData<any>, mediator: androidx.lifecycle.MediatorLiveData<any>);
			public disposeNow($completion: kotlin.coroutines.Continuation<any>): any;
			public dispose(): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class FlowLiveDataConversions extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.FlowLiveDataConversions>;
			public static asLiveData($this$asLiveData: kotlinx.coroutines.flow.Flow, context: kotlin.coroutines.CoroutineContext): androidx.lifecycle.LiveData;
			public static asLiveData($this$asLiveData: kotlinx.coroutines.flow.Flow): androidx.lifecycle.LiveData;
			public static asLiveData($this$asLiveData: kotlinx.coroutines.flow.Flow, context: kotlin.coroutines.CoroutineContext, timeoutInMs: number): androidx.lifecycle.LiveData;
			public static asLiveData($this$asLiveData: kotlinx.coroutines.flow.Flow, timeout: java.time.Duration, context: kotlin.coroutines.CoroutineContext): androidx.lifecycle.LiveData;
			public static asFlow($this$asFlow: androidx.lifecycle.LiveData): kotlinx.coroutines.flow.Flow;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class LiveDataScope<T>  extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.LiveDataScope<any>>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.LiveDataScope<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				emit(param0: T, param1: kotlin.coroutines.Continuation<any>): any;
				emitSource(param0: androidx.lifecycle.LiveData<T>, param1: kotlin.coroutines.Continuation<any>): any;
				getLatestValue(): T;
			});
			public constructor();
			public emit(param0: T, param1: kotlin.coroutines.Continuation<any>): any;
			public getLatestValue(): T;
			public emitSource(param0: androidx.lifecycle.LiveData<T>, param1: kotlin.coroutines.Continuation<any>): any;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class LiveDataScopeImpl<T>  extends androidx.lifecycle.LiveDataScope<any> {
			public static class: java.lang.Class<androidx.lifecycle.LiveDataScopeImpl<any>>;
			public emit(param0: any, param1: kotlin.coroutines.Continuation<any>): any;
			public getLatestValue(): any;
			public emit(value: any, $completion: kotlin.coroutines.Continuation<any>): any;
			public getTarget$lifecycle_livedata_release(): androidx.lifecycle.CoroutineLiveData<any>;
			public emitSource(source: androidx.lifecycle.LiveData<any>, $completion: kotlin.coroutines.Continuation<any>): any;
			public emitSource(param0: androidx.lifecycle.LiveData<any>, param1: kotlin.coroutines.Continuation<any>): any;
			public constructor(target: androidx.lifecycle.CoroutineLiveData<any>, context: kotlin.coroutines.CoroutineContext);
			public setTarget$lifecycle_livedata_release(_set_: androidx.lifecycle.CoroutineLiveData<any>): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class MediatorLiveData<T>  extends androidx.lifecycle.MutableLiveData<any> {
			public static class: java.lang.Class<androidx.lifecycle.MediatorLiveData<any>>;
			public onInactive(): void;
			public onActive(): void;
			public addSource(source: androidx.lifecycle.LiveData, onChanged: androidx.lifecycle.Observer): void;
			public constructor(value: any);
			public constructor();
			public constructor(param0: any);
			public removeSource(toRemote: androidx.lifecycle.LiveData): void;
		}
		export module MediatorLiveData {
			export class Source<V>  extends androidx.lifecycle.Observer<any> {
				public static class: java.lang.Class<androidx.lifecycle.MediatorLiveData.Source<any>>;
				public onChanged(param0: any): void;
				public onChanged(v: any): void;
			}
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class Transformations extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.Transformations>;
			public static distinctUntilChanged($this$distinctUntilChanged: androidx.lifecycle.LiveData): androidx.lifecycle.LiveData;
			public static map($this$map: androidx.lifecycle.LiveData, transform: kotlin.jvm.functions.Function1): androidx.lifecycle.LiveData;
			public static switchMap($this$switchMap: androidx.lifecycle.LiveData, transform: kotlin.jvm.functions.Function1): androidx.lifecycle.LiveData;
		}
	}
}

//Generics information:
//androidx.lifecycle.BlockRunner:1
//androidx.lifecycle.ComputableLiveData:1
//androidx.lifecycle.CoroutineLiveData:1
//androidx.lifecycle.LiveDataScope:1
//androidx.lifecycle.LiveDataScopeImpl:1
//androidx.lifecycle.MediatorLiveData:1
//androidx.lifecycle.MediatorLiveData.Source:1

