/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module androidx {
	export module lifecycle {
		export class ClassesInfoCache extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.ClassesInfoCache>;
		}
		export module ClassesInfoCache {
			export class CallbackInfo extends java.lang.Object {
				public static class: java.lang.Class<androidx.lifecycle.ClassesInfoCache.CallbackInfo>;
			}
			export class MethodReference extends java.lang.Object {
				public static class: java.lang.Class<androidx.lifecycle.ClassesInfoCache.MethodReference>;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(o: any): boolean;
			}
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class CompositeGeneratedAdaptersObserver extends java.lang.Object implements androidx.lifecycle.LifecycleEventObserver {
			public static class: java.lang.Class<androidx.lifecycle.CompositeGeneratedAdaptersObserver>;
			public constructor(generatedAdapters: androidx.lifecycle.GeneratedAdapter[]);
			public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
			public onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class DefaultLifecycleObserver extends java.lang.Object implements androidx.lifecycle.LifecycleObserver {
			public static class: java.lang.Class<androidx.lifecycle.DefaultLifecycleObserver>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.DefaultLifecycleObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onCreate(owner: androidx.lifecycle.LifecycleOwner): void;
				onStart(owner: androidx.lifecycle.LifecycleOwner): void;
				onResume(owner: androidx.lifecycle.LifecycleOwner): void;
				onPause(owner: androidx.lifecycle.LifecycleOwner): void;
				onStop(owner: androidx.lifecycle.LifecycleOwner): void;
				onDestroy(owner: androidx.lifecycle.LifecycleOwner): void;
			});
			public constructor();
			public onCreate(owner: androidx.lifecycle.LifecycleOwner): void;
			public onPause(owner: androidx.lifecycle.LifecycleOwner): void;
			public onStop(owner: androidx.lifecycle.LifecycleOwner): void;
			public onDestroy(owner: androidx.lifecycle.LifecycleOwner): void;
			public onStart(owner: androidx.lifecycle.LifecycleOwner): void;
			public onResume(owner: androidx.lifecycle.LifecycleOwner): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class DefaultLifecycleObserverAdapter extends java.lang.Object implements androidx.lifecycle.LifecycleEventObserver {
			public static class: java.lang.Class<androidx.lifecycle.DefaultLifecycleObserverAdapter>;
			public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
			public onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
			public constructor(defaultLifecycleObserver: androidx.lifecycle.DefaultLifecycleObserver, lifecycleEventObserver: androidx.lifecycle.LifecycleEventObserver);
		}
		export module DefaultLifecycleObserverAdapter {
			export class WhenMappings extends java.lang.Object {
				public static class: java.lang.Class<androidx.lifecycle.DefaultLifecycleObserverAdapter.WhenMappings>;
			}
		}
	}
}

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
		export class GeneratedAdapter extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.GeneratedAdapter>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.GeneratedAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				callMethods(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event, param2: boolean, param3: androidx.lifecycle.MethodCallsLogger): void;
			});
			public constructor();
			public callMethods(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event, param2: boolean, param3: androidx.lifecycle.MethodCallsLogger): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class GenericLifecycleObserver extends java.lang.Object implements androidx.lifecycle.LifecycleEventObserver {
			public static class: java.lang.Class<androidx.lifecycle.GenericLifecycleObserver>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.GenericLifecycleObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
			});
			public constructor();
			public onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export abstract class Lifecycle extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.Lifecycle>;
			public setInternalScopeRef(_set_: java.util.concurrent.atomic.AtomicReference<any>): void;
			public getInternalScopeRef(): java.util.concurrent.atomic.AtomicReference<any>;
			public addObserver(param0: androidx.lifecycle.LifecycleObserver): void;
			public constructor();
			public getCurrentState(): androidx.lifecycle.Lifecycle.State;
			public removeObserver(param0: androidx.lifecycle.LifecycleObserver): void;
		}
		export module Lifecycle {
			export class Event {
				public static class: java.lang.Class<androidx.lifecycle.Lifecycle.Event>;
				public static ON_CREATE: androidx.lifecycle.Lifecycle.Event;
				public static ON_START: androidx.lifecycle.Lifecycle.Event;
				public static ON_RESUME: androidx.lifecycle.Lifecycle.Event;
				public static ON_PAUSE: androidx.lifecycle.Lifecycle.Event;
				public static ON_STOP: androidx.lifecycle.Lifecycle.Event;
				public static ON_DESTROY: androidx.lifecycle.Lifecycle.Event;
				public static ON_ANY: androidx.lifecycle.Lifecycle.Event;
				public static values(): androidx.lifecycle.Lifecycle.Event[];
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static upFrom(state: androidx.lifecycle.Lifecycle.State): androidx.lifecycle.Lifecycle.Event;
				public getTargetState(): androidx.lifecycle.Lifecycle.State;
				public static upTo(state: androidx.lifecycle.Lifecycle.State): androidx.lifecycle.Lifecycle.Event;
				public static downTo(state: androidx.lifecycle.Lifecycle.State): androidx.lifecycle.Lifecycle.Event;
				public static valueOf(value: string): androidx.lifecycle.Lifecycle.Event;
				public static downFrom(state: androidx.lifecycle.Lifecycle.State): androidx.lifecycle.Lifecycle.Event;
			}
			export module Event {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<androidx.lifecycle.Lifecycle.Event.Companion>;
					public downTo(state: androidx.lifecycle.Lifecycle.State): androidx.lifecycle.Lifecycle.Event;
					public downFrom(state: androidx.lifecycle.Lifecycle.State): androidx.lifecycle.Lifecycle.Event;
					public upFrom(state: androidx.lifecycle.Lifecycle.State): androidx.lifecycle.Lifecycle.Event;
					public upTo(state: androidx.lifecycle.Lifecycle.State): androidx.lifecycle.Lifecycle.Event;
				}
				export module Companion {
					export class WhenMappings extends java.lang.Object {
						public static class: java.lang.Class<androidx.lifecycle.Lifecycle.Event.Companion.WhenMappings>;
					}
				}
				export class WhenMappings extends java.lang.Object {
					public static class: java.lang.Class<androidx.lifecycle.Lifecycle.Event.WhenMappings>;
				}
			}
			export class State {
				public static class: java.lang.Class<androidx.lifecycle.Lifecycle.State>;
				public static DESTROYED: androidx.lifecycle.Lifecycle.State;
				public static INITIALIZED: androidx.lifecycle.Lifecycle.State;
				public static CREATED: androidx.lifecycle.Lifecycle.State;
				public static STARTED: androidx.lifecycle.Lifecycle.State;
				public static RESUMED: androidx.lifecycle.Lifecycle.State;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): androidx.lifecycle.Lifecycle.State[];
				public isAtLeast(state: androidx.lifecycle.Lifecycle.State): boolean;
				public static valueOf(value: string): androidx.lifecycle.Lifecycle.State;
			}
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
			/** @deprecated */
			public launchWhenCreated(block: kotlin.jvm.functions.Function2<any,any,any>): kotlinx.coroutines.Job;
			/** @deprecated */
			public launchWhenResumed(block: kotlin.jvm.functions.Function2<any,any,any>): kotlinx.coroutines.Job;
			public getCoroutineContext(): kotlin.coroutines.CoroutineContext;
			public getLifecycle$lifecycle_common(): androidx.lifecycle.Lifecycle;
			public constructor();
			/** @deprecated */
			public launchWhenStarted(block: kotlin.jvm.functions.Function2<any,any,any>): kotlinx.coroutines.Job;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class LifecycleCoroutineScopeImpl extends androidx.lifecycle.LifecycleCoroutineScope implements androidx.lifecycle.LifecycleEventObserver {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleCoroutineScopeImpl>;
			public constructor(lifecycle: androidx.lifecycle.Lifecycle, coroutineContext: kotlin.coroutines.CoroutineContext);
			public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
			public onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
			public getCoroutineContext(): kotlin.coroutines.CoroutineContext;
			public register(): void;
			public getLifecycle$lifecycle_common(): androidx.lifecycle.Lifecycle;
			public constructor();
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class LifecycleEventObserver extends java.lang.Object implements androidx.lifecycle.LifecycleObserver {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleEventObserver>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.LifecycleEventObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
			});
			public constructor();
			public onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class LifecycleObserver extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleObserver>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.LifecycleObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class LifecycleOwner extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.LifecycleOwner>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.LifecycleOwner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getLifecycle(): androidx.lifecycle.Lifecycle;
			});
			public constructor();
			public getLifecycle(): androidx.lifecycle.Lifecycle;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class Lifecycling extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.Lifecycling>;
			public static INSTANCE: androidx.lifecycle.Lifecycling;
			public static getAdapterName(className: string): string;
			public static lifecycleEventObserver(object: any): androidx.lifecycle.LifecycleEventObserver;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class MethodCallsLogger extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.MethodCallsLogger>;
			public approveCall(name: string, type: number): boolean;
			public constructor();
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class OnLifecycleEvent extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<androidx.lifecycle.OnLifecycleEvent>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.OnLifecycleEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): androidx.lifecycle.Lifecycle.Event;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public value(): androidx.lifecycle.Lifecycle.Event;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
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

declare module androidx {
	export module lifecycle {
		export class ReflectiveGenericLifecycleObserver extends java.lang.Object implements androidx.lifecycle.LifecycleEventObserver {
			public static class: java.lang.Class<androidx.lifecycle.ReflectiveGenericLifecycleObserver>;
			public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
			public onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class SingleGeneratedAdapterObserver extends java.lang.Object implements androidx.lifecycle.LifecycleEventObserver {
			public static class: java.lang.Class<androidx.lifecycle.SingleGeneratedAdapterObserver>;
			public constructor(generatedAdapter: androidx.lifecycle.GeneratedAdapter);
			public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
			public onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
		}
	}
}

//Generics information:

