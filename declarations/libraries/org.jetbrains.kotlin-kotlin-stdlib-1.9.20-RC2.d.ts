declare module kotlin {
	export class BuilderInference extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.BuilderInference>;
		/**
		 * Constructs a new instance of the kotlin.BuilderInference interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class ContextFunctionTypeParams extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.ContextFunctionTypeParams>;
		/**
		 * Constructs a new instance of the kotlin.ContextFunctionTypeParams interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			count(): number;
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public count(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class DeepRecursiveFunction<T, R>  extends java.lang.Object {
		public static class: java.lang.Class<kotlin.DeepRecursiveFunction<any,any>>;
		public constructor(block: kotlin.jvm.functions.Function3<any,any,any,any>);
		public getBlock$kotlin_stdlib(): kotlin.jvm.functions.Function3<kotlin.DeepRecursiveScope<T,R>,T,kotlin.coroutines.Continuation<any>,any>;
	}
}

declare module kotlin {
	export abstract class DeepRecursiveScope<T, R>  extends java.lang.Object {
		public static class: java.lang.Class<kotlin.DeepRecursiveScope<any,any>>;
		/** @deprecated */
		public invoke($this$invoke: kotlin.DeepRecursiveFunction<any,any>, value: any): java.lang.Void;
		public callRecursive(param0: kotlin.DeepRecursiveFunction<any,any>, param1: any, param2: kotlin.coroutines.Continuation<any>): any;
		public callRecursive(param0: T, param1: kotlin.coroutines.Continuation<any>): any;
	}
}

declare module kotlin {
	export class DeepRecursiveScopeImpl<T, R>  extends kotlin.DeepRecursiveScope<any,any> implements kotlin.coroutines.Continuation<any>  {
		public static class: java.lang.Class<kotlin.DeepRecursiveScopeImpl<any,any>>;
		public resumeWith(param0: any): void;
		public callRecursive(value: any, $completion: kotlin.coroutines.Continuation<any>): any;
		public constructor(block: kotlin.jvm.functions.Function3<any,any,any,any>, value: any);
		public callRecursive($this$callRecursive: kotlin.DeepRecursiveFunction<any,any>, value: any, $completion: kotlin.coroutines.Continuation<any>): any;
		public resumeWith(result: any): void;
		public callRecursive(param0: any, param1: kotlin.coroutines.Continuation<any>): any;
		public getContext(): kotlin.coroutines.CoroutineContext;
		public callRecursive(param0: kotlin.DeepRecursiveFunction<any,any>, param1: any, param2: kotlin.coroutines.Continuation<any>): any;
		public runCallLoop(): any;
	}
}

declare module kotlin {
	export class Deprecated extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.Deprecated>;
		/**
		 * Constructs a new instance of the kotlin.Deprecated interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			message(): string;
			replaceWith(): kotlin.ReplaceWith;
			level(): kotlin.DeprecationLevel;
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public level(): kotlin.DeprecationLevel;
		public message(): string;
		public toString(): string;
		public replaceWith(): kotlin.ReplaceWith;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class DeprecatedSinceKotlin extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.DeprecatedSinceKotlin>;
		/**
		 * Constructs a new instance of the kotlin.DeprecatedSinceKotlin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			warningSince(): string;
			errorSince(): string;
			hiddenSince(): string;
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public hiddenSince(): string;
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public warningSince(): string;
		public hashCode(): number;
		public errorSince(): string;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class DeprecationLevel {
		public static class: java.lang.Class<kotlin.DeprecationLevel>;
		public static WARNING: kotlin.DeprecationLevel;
		public static ERROR: kotlin.DeprecationLevel;
		public static HIDDEN: kotlin.DeprecationLevel;
		public static getEntries(): kotlin.enums.EnumEntries<kotlin.DeprecationLevel>;
		public static valueOf(value: string): kotlin.DeprecationLevel;
		public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
		public static values(): kotlin.DeprecationLevel[];
	}
}

declare module kotlin {
	export class DslMarker extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.DslMarker>;
		/**
		 * Constructs a new instance of the kotlin.DslMarker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class ExperimentalMultiplatform extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.ExperimentalMultiplatform>;
		/**
		 * Constructs a new instance of the kotlin.ExperimentalMultiplatform interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class ExperimentalStdlibApi extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.ExperimentalStdlibApi>;
		/**
		 * Constructs a new instance of the kotlin.ExperimentalStdlibApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class ExperimentalSubclassOptIn extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.ExperimentalSubclassOptIn>;
		/**
		 * Constructs a new instance of the kotlin.ExperimentalSubclassOptIn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class ExperimentalUnsignedTypes extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.ExperimentalUnsignedTypes>;
		/**
		 * Constructs a new instance of the kotlin.ExperimentalUnsignedTypes interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class ExtensionFunctionType extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.ExtensionFunctionType>;
		/**
		 * Constructs a new instance of the kotlin.ExtensionFunctionType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class Function<R>  extends java.lang.Object {
		public static class: java.lang.Class<kotlin.Function<any>>;
		/**
		 * Constructs a new instance of the kotlin.Function<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
		});
		public constructor();
	}
}

declare module kotlin {
	export class InitializedLazyImpl<T>  extends java.lang.Object {
		public static class: java.lang.Class<kotlin.InitializedLazyImpl<any>>;
		public constructor(value: T);
		public isInitialized(): boolean;
		public toString(): string;
		public getValue(): T;
	}
}

declare module kotlin {
	export class KotlinNothingValueException extends java.lang.RuntimeException {
		public static class: java.lang.Class<kotlin.KotlinNothingValueException>;
		public constructor();
		public constructor(message: string, cause: java.lang.Throwable);
		public constructor(message: string);
		public constructor(cause: java.lang.Throwable);
		public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
	}
}

declare module kotlin {
	export class KotlinNullPointerException extends java.lang.NullPointerException {
		public static class: java.lang.Class<kotlin.KotlinNullPointerException>;
		public constructor();
		public constructor(message: string, cause: java.lang.Throwable);
		public constructor(s: string);
		public constructor(message: string);
		public constructor(cause: java.lang.Throwable);
		public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
	}
}

declare module kotlin {
	export class KotlinVersion extends java.lang.Comparable<kotlin.KotlinVersion> {
		public static class: java.lang.Class<kotlin.KotlinVersion>;
		public static MAX_COMPONENT_VALUE: number;
		public static CURRENT: kotlin.KotlinVersion;
		public constructor(major: number, minor: number);
		public equals(obj: any): boolean;
		public equals(other: any): boolean;
		public getPatch(): number;
		public isAtLeast(major: number, minor: number, patch: number): boolean;
		public compareTo(other: kotlin.KotlinVersion): number;
		public constructor(major: number, minor: number, patch: number);
		public hashCode(): number;
		public getMinor(): number;
		public isAtLeast(major: number, minor: number): boolean;
		public getMajor(): number;
		public toString(): string;
	}
	export module KotlinVersion {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<kotlin.KotlinVersion.Companion>;
		}
	}
}

declare module kotlin {
	export class KotlinVersionCurrentValue extends java.lang.Object {
		public static class: java.lang.Class<kotlin.KotlinVersionCurrentValue>;
		public static INSTANCE: kotlin.KotlinVersionCurrentValue;
		public static get(): kotlin.KotlinVersion;
	}
}

declare module kotlin {
	export class Lazy<T>  extends java.lang.Object {
		public static class: java.lang.Class<kotlin.Lazy<any>>;
		/**
		 * Constructs a new instance of the kotlin.Lazy<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			getValue(): T;
			isInitialized(): boolean;
		});
		public constructor();
		public isInitialized(): boolean;
		public getValue(): T;
	}
}

declare module kotlin {
	export module LazyKt__LazyJVMKt {
export module  {
		export class WhenMappings extends java.lang.Object {
			public static class: java.lang.Class<kotlin.LazyKt__LazyJVMKt.WhenMappings>;
		}
	}
}

declare module kotlin {
	export class LazyThreadSafetyMode {
		public static class: java.lang.Class<kotlin.LazyThreadSafetyMode>;
		public static SYNCHRONIZED: kotlin.LazyThreadSafetyMode;
		public static PUBLICATION: kotlin.LazyThreadSafetyMode;
		public static NONE: kotlin.LazyThreadSafetyMode;
		public static values(): kotlin.LazyThreadSafetyMode[];
		public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
		public static valueOf(value: string): kotlin.LazyThreadSafetyMode;
		public static getEntries(): kotlin.enums.EnumEntries<kotlin.LazyThreadSafetyMode>;
	}
}

declare module kotlin {
	export class Metadata extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.Metadata>;
		/**
		 * Constructs a new instance of the kotlin.Metadata interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			k(): number;
			mv(): number[];
			bv(): number[];
			d1(): string[];
			d2(): string[];
			xs(): string;
			pn(): string;
			xi(): number;
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public pn(): string;
		public equals(param0: any): boolean;
		public d1(): string[];
		public d2(): string[];
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
		public xs(): string;
		public mv(): number[];
		public k(): number;
		public equals(obj: any): boolean;
		/** @deprecated */
		public bv(): number[];
		public hashCode(): number;
		public xi(): number;
	}
	export module Metadata {
		export class DefaultImpls extends java.lang.Object {
			public static class: java.lang.Class<kotlin.Metadata.DefaultImpls>;
		}
	}
}

declare module kotlin {
	export class NoWhenBranchMatchedException extends java.lang.RuntimeException {
		public static class: java.lang.Class<kotlin.NoWhenBranchMatchedException>;
		public constructor();
		public constructor(message: string, cause: java.lang.Throwable);
		public constructor(message: string);
		public constructor(cause: java.lang.Throwable);
		public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
	}
}

declare module kotlin {
	export class NotImplementedError extends java.lang.Error {
		public static class: java.lang.Class<kotlin.NotImplementedError>;
		public constructor();
		public constructor(message: string, cause: java.lang.Throwable);
		public constructor(message: string);
		public constructor(cause: java.lang.Throwable);
		public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
	}
}

declare module kotlin {
	export class OptIn extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.OptIn>;
		/**
		 * Constructs a new instance of the kotlin.OptIn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			markerClass(): java.lang.Class<any>[];
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public markerClass(): java.lang.Class<any>[];
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class OptionalExpectation extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.OptionalExpectation>;
		/**
		 * Constructs a new instance of the kotlin.OptionalExpectation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class OverloadResolutionByLambdaReturnType extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.OverloadResolutionByLambdaReturnType>;
		/**
		 * Constructs a new instance of the kotlin.OverloadResolutionByLambdaReturnType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class Pair<A, B>  extends java.io.Serializable {
		public static class: java.lang.Class<kotlin.Pair<any,any>>;
		public equals(obj: any): boolean;
		public component1(): any;
		public equals(other: any): boolean;
		public component2(): any;
		public hashCode(): number;
		public getFirst(): any;
		public getSecond(): any;
		public constructor(first: any, second: any);
		public toString(): string;
		public copy(first: any, second: any): kotlin.Pair<any,any>;
	}
}

declare module kotlin {
	export class ParameterName extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.ParameterName>;
		/**
		 * Constructs a new instance of the kotlin.ParameterName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			name(): string;
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public name(): string;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class PublishedApi extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.PublishedApi>;
		/**
		 * Constructs a new instance of the kotlin.PublishedApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class ReplaceWith extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.ReplaceWith>;
		/**
		 * Constructs a new instance of the kotlin.ReplaceWith interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			expression(): string;
			imports(): string[];
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public imports(): string[];
		public toString(): string;
		public expression(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class RequiresOptIn extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.RequiresOptIn>;
		/**
		 * Constructs a new instance of the kotlin.RequiresOptIn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			message(): string;
			level(): kotlin.RequiresOptIn.Level;
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public message(): string;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
		public level(): kotlin.RequiresOptIn.Level;
	}
	export module RequiresOptIn {
		export class Level {
			public static class: java.lang.Class<kotlin.RequiresOptIn.Level>;
			public static WARNING: kotlin.RequiresOptIn.Level;
			public static ERROR: kotlin.RequiresOptIn.Level;
			public static values(): kotlin.RequiresOptIn.Level[];
			public static valueOf(value: string): kotlin.RequiresOptIn.Level;
			public static getEntries(): kotlin.enums.EnumEntries<kotlin.RequiresOptIn.Level>;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
		}
	}
}

declare module kotlin {
	export class Result<T>  extends java.io.Serializable {
		public static class: java.lang.Class<kotlin.Result<any>>;
		public equals(obj: any): boolean;
		public static "exceptionOrNull-impl"(arg0: any): java.lang.Throwable;
		public equals(other: any): boolean;
		public static "isFailure-impl"(arg0: any): boolean;
		public static "isSuccess-impl"(arg0: any): boolean;
		public static "hashCode-impl"(arg0: any): number;
		public hashCode(): number;
		public static "equals-impl0"(p1: any, p2: any): boolean;
		public toString(): string;
		public static "constructor-impl"(value: any): any;
		public static "toString-impl"(arg0: any): string;
		public static "equals-impl"(arg0: any, other: any): boolean;
	}
	export module Result {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<kotlin.Result.Companion>;
		}
		export class Failure extends java.lang.Object implements java.io.Serializable {
			public static class: java.lang.Class<kotlin.Result.Failure>;
			public exception: java.lang.Throwable;
			public equals(other: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public constructor(exception: java.lang.Throwable);
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export class SafePublicationLazyImpl<T>  extends java.lang.Object {
		public static class: java.lang.Class<kotlin.SafePublicationLazyImpl<any>>;
		public isInitialized(): boolean;
		public toString(): string;
		public constructor(initializer: kotlin.jvm.functions.Function0<any>);
		public getValue(): T;
	}
	export module SafePublicationLazyImpl {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<kotlin.SafePublicationLazyImpl.Companion>;
		}
	}
}

declare module kotlin {
	export class SinceKotlin extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.SinceKotlin>;
		/**
		 * Constructs a new instance of the kotlin.SinceKotlin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			version(): string;
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
		public version(): string;
	}
}

declare module kotlin {
	export class SubclassOptInRequired extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.SubclassOptInRequired>;
		/**
		 * Constructs a new instance of the kotlin.SubclassOptInRequired interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			markerClass(): java.lang.Class<any>;
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public markerClass(): java.lang.Class<any>;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class Suppress extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.Suppress>;
		/**
		 * Constructs a new instance of the kotlin.Suppress interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			names(): string[];
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public names(): string[];
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class SynchronizedLazyImpl<T>  extends java.lang.Object {
		public static class: java.lang.Class<kotlin.SynchronizedLazyImpl<any>>;
		public isInitialized(): boolean;
		public constructor(initializer: kotlin.jvm.functions.Function0<any>, lock: any);
		public toString(): string;
		public getValue(): T;
	}
}

declare module kotlin {
	export class Triple<A, B, C>  extends java.io.Serializable {
		public static class: java.lang.Class<kotlin.Triple<any,any,any>>;
		public equals(obj: any): boolean;
		public constructor(first: any, second: any, third: any);
		public getThird(): any;
		public component1(): any;
		public copy(first: any, second: any, third: any): kotlin.Triple<any,any,any>;
		public equals(other: any): boolean;
		public component2(): any;
		public hashCode(): number;
		public getFirst(): any;
		public component3(): any;
		public getSecond(): any;
		public toString(): string;
	}
}

declare module kotlin {
	export class TypeCastException extends java.lang.ClassCastException {
		public static class: java.lang.Class<kotlin.TypeCastException>;
		public constructor();
		public constructor(message: string, cause: java.lang.Throwable);
		public constructor(s: string);
		public constructor(message: string);
		public constructor(cause: java.lang.Throwable);
		public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
	}
}

declare module kotlin {
	export class UByte extends java.lang.Comparable<kotlin.UByte> {
		public static class: java.lang.Class<kotlin.UByte>;
		public static MIN_VALUE: number;
		public static MAX_VALUE: number;
		public static SIZE_BYTES: number;
		public static SIZE_BITS: number;
		public static "equals-impl"(arg0: number, other: any): boolean;
		public static "equals-impl0"(p1: number, p2: number): boolean;
		public equals(obj: any): boolean;
		public equals(other: any): boolean;
		public static "toString-impl"(arg0: number): string;
		public static "hashCode-impl"(arg0: number): number;
		public hashCode(): number;
		public static "constructor-impl"(data: number): number;
		public toString(): string;
	}
	export module UByte {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<kotlin.UByte.Companion>;
		}
	}
}

declare module kotlin {
	export class UByteArray extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UByteArray>;
		public toArray(param0: any[]): any[];
		public equals(param0: any): boolean;
		public static "constructor-impl"(size: number): number[];
		public static "getSize-impl"(arg0: number[]): number;
		public static "equals-impl"(arg0: number[], other: any): boolean;
		public iterator(): java.util.Iterator<any>;
		public iterator(): java.util.Iterator<kotlin.UByte>;
		public remove(param0: any): boolean;
		public stream(): java.util.stream.Stream<any>;
		public add(param0: any): boolean;
		public size(): number;
		public static "toString-impl"(arg0: number[]): string;
		public hashCode(): number;
		public addAll(param0: java.util.Collection<any>): boolean;
		public isEmpty(): boolean;
		public remove(element: any): boolean;
		public static "get-w2LRezQ"(arg0: number[], index: number): number;
		public getSize(): number;
		public static "iterator-impl"(arg0: number[]): java.util.Iterator<kotlin.UByte>;
		public static "isEmpty-impl"(arg0: number[]): boolean;
		public containsAll(elements: java.util.Collection<any>): boolean;
		public equals(other: any): boolean;
		public removeAll(elements: java.util.Collection<any>): boolean;
		public static "hashCode-impl"(arg0: number[]): number;
		public containsAll(param0: java.util.Collection<any>): boolean;
		public toString(): string;
		public static "contains-7apg3OU"(arg0: number[], element: number): boolean;
		public retainAll(param0: java.util.Collection<any>): boolean;
		public equals(obj: any): boolean;
		public toArray(array: any[]): any[];
		public retainAll(elements: java.util.Collection<any>): boolean;
		public "add-7apg3OU"(element: number): boolean;
		public addAll(elements: java.util.Collection<any>): boolean;
		public static "constructor-impl"(storage: number[]): number[];
		public contains(param0: any): boolean;
		public spliterator(): java.util.Spliterator<any>;
		public static "set-VurrAj0"(arg0: number[], index: number, value: number): void;
		public static "containsAll-impl"(arg0: number[], elements: java.util.Collection<kotlin.UByte>): boolean;
		public clear(): void;
		public removeAll(param0: java.util.Collection<any>): boolean;
		public static "equals-impl0"(p1: number[], p2: number[]): boolean;
		public parallelStream(): java.util.stream.Stream<any>;
		public forEach(action: any /* any*/): void;
		public contains(element: any): boolean;
		public removeIf(filter: any /* any*/): boolean;
		public "contains-7apg3OU"(element: number): boolean;
		public toArray(): any[];
	}
	export module UByteArray {
		export class Iterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.UByteArray.Iterator>;
			public constructor(array: number[]);
			public "next-w2LRezQ"(): number;
			public hasNext(): boolean;
			public remove(): void;
		}
	}
}

declare module kotlin {
	export class UInt extends java.lang.Comparable<kotlin.UInt> {
		public static class: java.lang.Class<kotlin.UInt>;
		public static MIN_VALUE: number;
		public static MAX_VALUE: number;
		public static SIZE_BYTES: number;
		public static SIZE_BITS: number;
		public static "equals-impl"(arg0: number, other: any): boolean;
		public static "equals-impl0"(p1: number, p2: number): boolean;
		public equals(obj: any): boolean;
		public equals(other: any): boolean;
		public static "toString-impl"(arg0: number): string;
		public static "hashCode-impl"(arg0: number): number;
		public hashCode(): number;
		public static "constructor-impl"(data: number): number;
		public toString(): string;
	}
	export module UInt {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<kotlin.UInt.Companion>;
		}
	}
}

declare module kotlin {
	export class UIntArray extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UIntArray>;
		public "contains-WZ4Q5Ns"(element: number): boolean;
		public toArray(param0: any[]): any[];
		public equals(param0: any): boolean;
		public static "constructor-impl"(size: number): number[];
		public static "getSize-impl"(arg0: number[]): number;
		public static "iterator-impl"(arg0: number[]): java.util.Iterator<kotlin.UInt>;
		public static "equals-impl"(arg0: number[], other: any): boolean;
		public iterator(): java.util.Iterator<any>;
		public remove(param0: any): boolean;
		public stream(): java.util.stream.Stream<any>;
		public add(param0: any): boolean;
		public size(): number;
		public static "toString-impl"(arg0: number[]): string;
		public hashCode(): number;
		public addAll(param0: java.util.Collection<any>): boolean;
		public isEmpty(): boolean;
		public remove(element: any): boolean;
		public getSize(): number;
		public static "isEmpty-impl"(arg0: number[]): boolean;
		public containsAll(elements: java.util.Collection<any>): boolean;
		public static "contains-WZ4Q5Ns"(arg0: number[], element: number): boolean;
		public equals(other: any): boolean;
		public removeAll(elements: java.util.Collection<any>): boolean;
		public static "hashCode-impl"(arg0: number[]): number;
		public containsAll(param0: java.util.Collection<any>): boolean;
		public static "get-pVg5ArA"(arg0: number[], index: number): number;
		public toString(): string;
		public "add-WZ4Q5Ns"(element: number): boolean;
		public static "set-VXSXFK8"(arg0: number[], index: number, value: number): void;
		public retainAll(param0: java.util.Collection<any>): boolean;
		public equals(obj: any): boolean;
		public toArray(array: any[]): any[];
		public retainAll(elements: java.util.Collection<any>): boolean;
		public addAll(elements: java.util.Collection<any>): boolean;
		public static "constructor-impl"(storage: number[]): number[];
		public contains(param0: any): boolean;
		public spliterator(): java.util.Spliterator<any>;
		public static "containsAll-impl"(arg0: number[], elements: java.util.Collection<kotlin.UInt>): boolean;
		public clear(): void;
		public removeAll(param0: java.util.Collection<any>): boolean;
		public static "equals-impl0"(p1: number[], p2: number[]): boolean;
		public iterator(): java.util.Iterator<kotlin.UInt>;
		public parallelStream(): java.util.stream.Stream<any>;
		public forEach(action: any /* any*/): void;
		public contains(element: any): boolean;
		public removeIf(filter: any /* any*/): boolean;
		public toArray(): any[];
	}
	export module UIntArray {
		export class Iterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.UIntArray.Iterator>;
			public constructor(array: number[]);
			public "next-pVg5ArA"(): number;
			public hasNext(): boolean;
			public remove(): void;
		}
	}
}

declare module kotlin {
	export class ULong extends java.lang.Comparable<kotlin.ULong> {
		public static class: java.lang.Class<kotlin.ULong>;
		public static MIN_VALUE: number;
		public static MAX_VALUE: number;
		public static SIZE_BYTES: number;
		public static SIZE_BITS: number;
		public equals(obj: any): boolean;
		public equals(other: any): boolean;
		public static "equals-impl"(arg0: number, param1: any): boolean;
		public static "toString-impl"(arg0: number): string;
		public static "hashCode-impl"(arg0: number): number;
		public hashCode(): number;
		public static "constructor-impl"(data: number): number;
		public static "equals-impl0"(p1: number, param1: number): boolean;
		public toString(): string;
	}
	export module ULong {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ULong.Companion>;
		}
	}
}

declare module kotlin {
	export class ULongArray extends java.lang.Object {
		public static class: java.lang.Class<kotlin.ULongArray>;
		public "contains-VKZWuLQ"(element: number): boolean;
		public toArray(param0: any[]): any[];
		public equals(param0: any): boolean;
		public static "iterator-impl"(arg0: number[]): java.util.Iterator<kotlin.ULong>;
		public static "constructor-impl"(size: number): number[];
		public static "getSize-impl"(arg0: number[]): number;
		public iterator(): java.util.Iterator<kotlin.ULong>;
		public static "containsAll-impl"(arg0: number[], elements: java.util.Collection<kotlin.ULong>): boolean;
		public static "equals-impl"(arg0: number[], other: any): boolean;
		public iterator(): java.util.Iterator<any>;
		public remove(param0: any): boolean;
		public stream(): java.util.stream.Stream<any>;
		public add(param0: any): boolean;
		public size(): number;
		public static "toString-impl"(arg0: number[]): string;
		public hashCode(): number;
		public addAll(param0: java.util.Collection<any>): boolean;
		public isEmpty(): boolean;
		public remove(element: any): boolean;
		public getSize(): number;
		public static "get-s-VKNKU"(arg0: number[], index: number): number;
		public static "isEmpty-impl"(arg0: number[]): boolean;
		public static "contains-VKZWuLQ"(arg0: number[], element: number): boolean;
		public containsAll(elements: java.util.Collection<any>): boolean;
		public equals(other: any): boolean;
		public static "set-k8EXiF4"(arg0: number[], index: number, value: number): void;
		public removeAll(elements: java.util.Collection<any>): boolean;
		public static "hashCode-impl"(arg0: number[]): number;
		public containsAll(param0: java.util.Collection<any>): boolean;
		public toString(): string;
		public "add-VKZWuLQ"(element: number): boolean;
		public retainAll(param0: java.util.Collection<any>): boolean;
		public equals(obj: any): boolean;
		public toArray(array: any[]): any[];
		public retainAll(elements: java.util.Collection<any>): boolean;
		public addAll(elements: java.util.Collection<any>): boolean;
		public static "constructor-impl"(storage: number[]): number[];
		public contains(param0: any): boolean;
		public spliterator(): java.util.Spliterator<any>;
		public clear(): void;
		public removeAll(param0: java.util.Collection<any>): boolean;
		public static "equals-impl0"(p1: number[], p2: number[]): boolean;
		public parallelStream(): java.util.stream.Stream<any>;
		public forEach(action: any /* any*/): void;
		public contains(element: any): boolean;
		public removeIf(filter: any /* any*/): boolean;
		public toArray(): any[];
	}
	export module ULongArray {
		export class Iterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ULongArray.Iterator>;
			public constructor(array: number[]);
			public "next-s-VKNKU"(): number;
			public hasNext(): boolean;
			public remove(): void;
		}
	}
}

declare module kotlin {
	export class UNINITIALIZED_VALUE extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UNINITIALIZED_VALUE>;
		public static INSTANCE: kotlin.UNINITIALIZED_VALUE;
	}
}

declare module kotlin {
	export class UShort extends java.lang.Comparable<kotlin.UShort> {
		public static class: java.lang.Class<kotlin.UShort>;
		public static MIN_VALUE: number;
		public static MAX_VALUE: number;
		public static SIZE_BYTES: number;
		public static SIZE_BITS: number;
		public static "equals-impl"(arg0: number, other: any): boolean;
		public static "equals-impl0"(p1: number, p2: number): boolean;
		public equals(obj: any): boolean;
		public equals(other: any): boolean;
		public static "toString-impl"(arg0: number): string;
		public static "hashCode-impl"(arg0: number): number;
		public hashCode(): number;
		public static "constructor-impl"(data: number): number;
		public toString(): string;
	}
	export module UShort {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<kotlin.UShort.Companion>;
		}
	}
}

declare module kotlin {
	export class UShortArray extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UShortArray>;
		public static "set-01HTLdE"(arg0: number[], index: number, value: number): void;
		public toArray(param0: any[]): any[];
		public equals(param0: any): boolean;
		public "add-xj2QHRw"(element: number): boolean;
		public static "constructor-impl"(size: number): number[];
		public static "getSize-impl"(arg0: number[]): number;
		public static "equals-impl"(arg0: number[], other: any): boolean;
		public iterator(): java.util.Iterator<any>;
		public static "iterator-impl"(arg0: number[]): java.util.Iterator<kotlin.UShort>;
		public remove(param0: any): boolean;
		public stream(): java.util.stream.Stream<any>;
		public iterator(): java.util.Iterator<kotlin.UShort>;
		public add(param0: any): boolean;
		public size(): number;
		public static "toString-impl"(arg0: number[]): string;
		public hashCode(): number;
		public addAll(param0: java.util.Collection<any>): boolean;
		public isEmpty(): boolean;
		public remove(element: any): boolean;
		public static "get-Mh2AYeg"(arg0: number[], index: number): number;
		public getSize(): number;
		public static "containsAll-impl"(arg0: number[], elements: java.util.Collection<kotlin.UShort>): boolean;
		public static "isEmpty-impl"(arg0: number[]): boolean;
		public containsAll(elements: java.util.Collection<any>): boolean;
		public equals(other: any): boolean;
		public static "contains-xj2QHRw"(arg0: number[], element: number): boolean;
		public removeAll(elements: java.util.Collection<any>): boolean;
		public static "hashCode-impl"(arg0: number[]): number;
		public containsAll(param0: java.util.Collection<any>): boolean;
		public toString(): string;
		public retainAll(param0: java.util.Collection<any>): boolean;
		public equals(obj: any): boolean;
		public toArray(array: any[]): any[];
		public retainAll(elements: java.util.Collection<any>): boolean;
		public addAll(elements: java.util.Collection<any>): boolean;
		public static "constructor-impl"(storage: number[]): number[];
		public contains(param0: any): boolean;
		public spliterator(): java.util.Spliterator<any>;
		public clear(): void;
		public removeAll(param0: java.util.Collection<any>): boolean;
		public static "equals-impl0"(p1: number[], p2: number[]): boolean;
		public parallelStream(): java.util.stream.Stream<any>;
		public forEach(action: any /* any*/): void;
		public contains(element: any): boolean;
		public removeIf(filter: any /* any*/): boolean;
		public "contains-xj2QHRw"(element: number): boolean;
		public toArray(): any[];
	}
	export module UShortArray {
		export class Iterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.UShortArray.Iterator>;
			public constructor(array: number[]);
			public "next-Mh2AYeg"(): number;
			public hasNext(): boolean;
			public remove(): void;
		}
	}
}

declare module kotlin {
	export class UninitializedPropertyAccessException extends java.lang.RuntimeException {
		public static class: java.lang.Class<kotlin.UninitializedPropertyAccessException>;
		public constructor();
		public constructor(message: string, cause: java.lang.Throwable);
		public constructor(message: string);
		public constructor(cause: java.lang.Throwable);
		public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
	}
}

declare module kotlin {
	export class Unit extends java.lang.Object {
		public static class: java.lang.Class<kotlin.Unit>;
		public static INSTANCE: kotlin.Unit;
		public toString(): string;
	}
}

declare module kotlin {
	export class UnsafeLazyImpl<T>  extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UnsafeLazyImpl<any>>;
		public isInitialized(): boolean;
		public toString(): string;
		public constructor(initializer: kotlin.jvm.functions.Function0<any>);
		public getValue(): T;
	}
}

declare module kotlin {
	export class UnsafeVariance extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.UnsafeVariance>;
		/**
		 * Constructs a new instance of the kotlin.UnsafeVariance interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class WasExperimental extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.WasExperimental>;
		/**
		 * Constructs a new instance of the kotlin.WasExperimental interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			markerClass(): java.lang.Class<any>[];
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public markerClass(): java.lang.Class<any>[];
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class _Assertions extends java.lang.Object {
		public static class: java.lang.Class<kotlin._Assertions>;
		public static INSTANCE: kotlin._Assertions;
		public static ENABLED: boolean;
	}
}

declare module kotlin {
	export module annotation {
		export class AnnotationRetention {
			public static class: java.lang.Class<kotlin.annotation.AnnotationRetention>;
			public static SOURCE: kotlin.annotation.AnnotationRetention;
			public static BINARY: kotlin.annotation.AnnotationRetention;
			public static RUNTIME: kotlin.annotation.AnnotationRetention;
			public static getEntries(): kotlin.enums.EnumEntries<kotlin.annotation.AnnotationRetention>;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public static values(): kotlin.annotation.AnnotationRetention[];
			public static valueOf(value: string): kotlin.annotation.AnnotationRetention;
		}
	}
}

declare module kotlin {
	export module annotation {
		export class AnnotationTarget {
			public static class: java.lang.Class<kotlin.annotation.AnnotationTarget>;
			public static CLASS: kotlin.annotation.AnnotationTarget;
			public static ANNOTATION_CLASS: kotlin.annotation.AnnotationTarget;
			public static TYPE_PARAMETER: kotlin.annotation.AnnotationTarget;
			public static PROPERTY: kotlin.annotation.AnnotationTarget;
			public static FIELD: kotlin.annotation.AnnotationTarget;
			public static LOCAL_VARIABLE: kotlin.annotation.AnnotationTarget;
			public static VALUE_PARAMETER: kotlin.annotation.AnnotationTarget;
			public static CONSTRUCTOR: kotlin.annotation.AnnotationTarget;
			public static FUNCTION: kotlin.annotation.AnnotationTarget;
			public static PROPERTY_GETTER: kotlin.annotation.AnnotationTarget;
			public static PROPERTY_SETTER: kotlin.annotation.AnnotationTarget;
			public static TYPE: kotlin.annotation.AnnotationTarget;
			public static EXPRESSION: kotlin.annotation.AnnotationTarget;
			public static FILE: kotlin.annotation.AnnotationTarget;
			public static TYPEALIAS: kotlin.annotation.AnnotationTarget;
			public static getEntries(): kotlin.enums.EnumEntries<kotlin.annotation.AnnotationTarget>;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public static values(): kotlin.annotation.AnnotationTarget[];
			public static valueOf(value: string): kotlin.annotation.AnnotationTarget;
		}
	}
}

declare module kotlin {
	export module annotation {
		export class MustBeDocumented extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.annotation.MustBeDocumented>;
			/**
			 * Constructs a new instance of the kotlin.annotation.MustBeDocumented interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module annotation {
		export class Repeatable extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.annotation.Repeatable>;
			/**
			 * Constructs a new instance of the kotlin.annotation.Repeatable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module annotation {
		export class Retention extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.annotation.Retention>;
			/**
			 * Constructs a new instance of the kotlin.annotation.Retention interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): kotlin.annotation.AnnotationRetention;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public value(): kotlin.annotation.AnnotationRetention;
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module annotation {
		export class Target extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.annotation.Target>;
			/**
			 * Constructs a new instance of the kotlin.annotation.Target interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				allowedTargets(): kotlin.annotation.AnnotationTarget[];
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public allowedTargets(): kotlin.annotation.AnnotationTarget[];
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractCollection<E>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.AbstractCollection<any>>;
			public equals(param0: any): boolean;
			public iterator(): java.util.Iterator<E>;
			public toArray(param0: any[]): any[];
			public addAll(elements: java.util.Collection<any>): boolean;
			public removeAll(elements: java.util.Collection<any>): boolean;
			public getSize(): number;
			public add(element: E): boolean;
			public spliterator(): java.util.Spliterator<E>;
			public toArray(array: any[]): any[];
			public contains(param0: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public stream(): java.util.stream.Stream<E>;
			public toArray(): any[];
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public isEmpty(): boolean;
			public size(): number;
			public parallelStream(): java.util.stream.Stream<E>;
			public containsAll(elements: java.util.Collection<any>): boolean;
			public add(param0: E): boolean;
			public constructor();
			public forEach(action: any /* any*/): void;
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public contains(element: E): boolean;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public retainAll(elements: java.util.Collection<any>): boolean;
			public remove(element: any): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractIterator<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.AbstractIterator<any>>;
			public next(): T;
			public done(): void;
			public constructor();
			public hasNext(): boolean;
			public remove(): void;
			public computeNext(): void;
			public setNext(value: T): void;
		}
		export module AbstractIterator {
			export class WhenMappings extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.AbstractIterator.WhenMappings>;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractList<E>  extends kotlin.collections.AbstractCollection<any> {
			public static class: java.lang.Class<kotlin.collections.AbstractList<any>>;
			public add(element: any): boolean;
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public toArray(param0: any[]): any[];
			public subList(fromIndex: number, toIndex: number): java.util.List<any>;
			public addAll(elements: java.util.Collection<any>): boolean;
			public removeAll(elements: java.util.Collection<any>): boolean;
			public replaceAll(operator: any /* any*/): void;
			public equals(other: any): boolean;
			public contains(element: any): boolean;
			public sort(c: java.util.Comparator<any>): void;
			public clear(): void;
			public listIterator(param0: number): java.util.ListIterator<any>;
			public constructor();
			public forEach(action: any /* any*/): void;
			public addAll(param0: java.util.Collection<any>): boolean;
			public set(param0: number, param1: any): any;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public lastIndexOf(param0: any): number;
			public add(param0: any): boolean;
			public remove(element: any): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public set(index: number, element: any): any;
			public equals(param0: any): boolean;
			public stream(): java.util.stream.Stream<any>;
			public remove(param0: number): any;
			public getSize(): number;
			public contains(param0: any): boolean;
			public toArray(array: any[]): any[];
			public addAll(index: number, elements: java.util.Collection<any>): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public get(param0: number): any;
			public toArray(): any[];
			public remove(index: number): any;
			public lastIndexOf(element: any): number;
			public add(param0: number, param1: any): void;
			public iterator(): java.util.Iterator<any>;
			public size(): number;
			public isEmpty(): boolean;
			public listIterator(index: number): java.util.ListIterator<any>;
			public indexOf(element: any): number;
			public containsAll(elements: java.util.Collection<any>): boolean;
			public subList(param0: number, param1: number): java.util.List<any>;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public equals(obj: any): boolean;
			public listIterator(): java.util.ListIterator<any>;
			public add(index: number, element: any): void;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public retainAll(elements: java.util.Collection<any>): boolean;
			public indexOf(param0: any): number;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
		export module AbstractList {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.AbstractList.Companion>;
				public checkElementIndex$kotlin_stdlib(index: number, size: number): void;
				public newCapacity$kotlin_stdlib(oldCapacity: number, minCapacity: number): number;
				public orderedHashCode$kotlin_stdlib(c: java.util.Collection<any>): number;
				public checkRangeIndexes$kotlin_stdlib(fromIndex: number, toIndex: number, size: number): void;
				public orderedEquals$kotlin_stdlib(c: java.util.Collection<any>, other: java.util.Collection<any>): boolean;
				public checkPositionIndex$kotlin_stdlib(index: number, size: number): void;
				public checkBoundsIndexes$kotlin_stdlib(startIndex: number, endIndex: number, size: number): void;
			}
			export class IteratorImpl extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.AbstractList.IteratorImpl>;
				public remove(): void;
				public next(): any;
				public hasNext(): boolean;
				public getIndex(): number;
				public setIndex(_set_: number): void;
				public constructor(this$0: kotlin.collections.AbstractList<any>);
			}
			export class ListIteratorImpl extends kotlin.collections.AbstractList.IteratorImpl {
				public static class: java.lang.Class<kotlin.collections.AbstractList.ListIteratorImpl>;
				public previous(): any;
				public previousIndex(): number;
				public remove(): void;
				public add(element: any): void;
				public nextIndex(): number;
				public next(): any;
				public set(param0: any): void;
				public constructor(this$0: number);
				public set(element: any): void;
				public hasNext(): boolean;
				public add(param0: any): void;
				public hasPrevious(): boolean;
				public constructor(this$0: kotlin.collections.AbstractList<any>);
			}
			export class SubList<E>  extends kotlin.collections.AbstractList<any> implements java.util.RandomAccess  {
				public static class: java.lang.Class<kotlin.collections.AbstractList.SubList<any>>;
				public removeAll(elements: java.util.Collection<any>): boolean;
				public subList(fromIndex: number, toIndex: number): java.util.List<any>;
				public indexOf(param0: any): number;
				public addAll(param0: java.util.Collection<any>): boolean;
				public remove(param0: number): any;
				public addAll(elements: java.util.Collection<any>): boolean;
				public add(param0: number, param1: any): void;
				public constructor();
				public set(param0: number, param1: any): any;
				public add(param0: any): boolean;
				public getSize(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public set(index: number, element: any): any;
				public addAll(param0: number, param1: java.util.Collection<any>): boolean;
				public isEmpty(): boolean;
				public lastIndexOf(param0: any): number;
				public listIterator(param0: number): java.util.ListIterator<any>;
				public addAll(index: number, elements: java.util.Collection<any>): boolean;
				public remove(index: number): any;
				public replaceAll(operator: any /* any*/): void;
				public spliterator(): java.util.Spliterator<any>;
				public contains(param0: any): boolean;
				public get(index: number): any;
				public stream(): java.util.stream.Stream<any>;
				public iterator(): java.util.Iterator<any>;
				public toArray(): any[];
				public lastIndexOf(element: any): number;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public size(): number;
				public contains(element: any): boolean;
				public removeIf(filter: any /* any*/): boolean;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public toArray(array: any[]): any[];
				public indexOf(element: any): number;
				public listIterator(index: number): java.util.ListIterator<any>;
				public parallelStream(): java.util.stream.Stream<any>;
				public containsAll(elements: java.util.Collection<any>): boolean;
				public listIterator(): java.util.ListIterator<any>;
				public constructor(list: kotlin.collections.AbstractList<any>, fromIndex: number, toIndex: number);
				public containsAll(param0: java.util.Collection<any>): boolean;
				public equals(other: any): boolean;
				public clear(): void;
				public remove(param0: any): boolean;
				public sort(c: java.util.Comparator<any>): void;
				public subList(param0: number, param1: number): java.util.List<any>;
				public remove(element: any): boolean;
				public retainAll(elements: java.util.Collection<any>): boolean;
				public get(param0: number): any;
				public toArray(param0: any[]): any[];
				public add(element: any): boolean;
				public add(index: number, element: any): void;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractMap<K, V>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.AbstractMap<any,any>>;
			public equals(param0: any): boolean;
			public putAll(from: java.util.Map<any,any>): void;
			public put(param0: K, param1: V): V;
			public containsValue(param0: any): boolean;
			public computeIfAbsent(key: K, mappingFunction: any /* any<any,any>*/): V;
			public replace(key: K, value: V): V;
			public merge(key: K, value: V, remappingFunction: any /* any<any,any,any>*/): V;
			public containsKey(key: any): boolean;
			public getSize(): number;
			public containsValue(value: any): boolean;
			public containsEntry$kotlin_stdlib(entry: java.util.Map.Entry<any,any>): boolean;
			public forEach(action: any /* any<any,any>*/): void;
			public equals(other: any): boolean;
			public keySet(): java.util.Set<K>;
			public putAll(param0: java.util.Map<any,any>): void;
			public values(): java.util.Collection<V>;
			public get(key: any): V;
			public replaceAll(_function_: any /* any<any,any,any>*/): void;
			public compute(key: K, remappingFunction: any /* any<any,any,any>*/): V;
			public clear(): void;
			public remove(key: any): V;
			public replace(key: K, oldValue: V, newValue: V): boolean;
			public getOrDefault(key: any, defaultValue: V): V;
			public isEmpty(): boolean;
			public size(): number;
			public putIfAbsent(key: K, value: V): V;
			public getKeys(): java.util.Set<K>;
			public computeIfPresent(key: K, remappingFunction: any /* any<any,any,any>*/): V;
			public constructor();
			public get(param0: any): V;
			public getValues(): java.util.Collection<V>;
			public put(key: K, value: V): V;
			public toString(): string;
			public equals(obj: any): boolean;
			public getEntries(): java.util.Set<any>;
			public remove(param0: any): V;
			public containsKey(param0: any): boolean;
			public remove(key: any, value: any): boolean;
			public entrySet(): java.util.Set<java.util.Map.Entry<K,V>>;
			public hashCode(): number;
		}
		export module AbstractMap {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.AbstractMap.Companion>;
				public entryEquals$kotlin_stdlib(e: java.util.Map.Entry<any,any>, other: any): boolean;
				public entryToString$kotlin_stdlib(e: java.util.Map.Entry<any,any>): string;
				public entryHashCode$kotlin_stdlib(e: java.util.Map.Entry<any,any>): number;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractMutableCollection<E>  extends java.util.AbstractCollection<any> {
			public static class: java.lang.Class<kotlin.collections.AbstractMutableCollection<any>>;
			public equals(param0: any): boolean;
			public contains(o: any): boolean;
			public remove(o: any): boolean;
			public retainAll(c: java.util.Collection<any>): boolean;
			public stream(): java.util.stream.Stream<any>;
			public toArray(param0: any[]): any[];
			public getSize(): number;
			public add(e: any): boolean;
			public contains(param0: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public toArray(): any[];
			public addAll(c: java.util.Collection<any>): boolean;
			public toArray(a: any[]): any[];
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public constructor();
			public forEach(action: any /* any*/): void;
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public removeAll(c: java.util.Collection<any>): boolean;
			public equals(obj: any): boolean;
			public add(param0: any): boolean;
			public containsAll(c: java.util.Collection<any>): boolean;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractMutableList<E>  extends java.util.AbstractList<any> {
			public static class: java.lang.Class<kotlin.collections.AbstractMutableList<any>>;
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public contains(o: any): boolean;
			public retainAll(c: java.util.Collection<any>): boolean;
			public toArray(param0: any[]): any[];
			public subList(fromIndex: number, toIndex: number): java.util.List<any>;
			public lastIndexOf(o: any): number;
			public addAll(index: number, c: java.util.Collection<any>): boolean;
			public replaceAll(operator: any /* any*/): void;
			public add(e: any): boolean;
			public sort(c: java.util.Comparator<any>): void;
			public clear(): void;
			public listIterator(param0: number): java.util.ListIterator<any>;
			public constructor();
			public removeAt(param0: number): any;
			public forEach(action: any /* any*/): void;
			public addAll(param0: java.util.Collection<any>): boolean;
			public set(param0: number, param1: any): any;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public lastIndexOf(param0: any): number;
			public equals(o: any): boolean;
			public add(param0: any): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public set(index: number, element: any): any;
			public equals(param0: any): boolean;
			public remove(o: any): boolean;
			public stream(): java.util.stream.Stream<any>;
			public remove(param0: number): any;
			public getSize(): number;
			public contains(param0: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public get(param0: number): any;
			public toArray(): any[];
			public remove(index: number): any;
			public addAll(c: java.util.Collection<any>): boolean;
			public add(param0: number, param1: any): void;
			public toArray(a: any[]): any[];
			public iterator(): java.util.Iterator<any>;
			public size(): number;
			public isEmpty(): boolean;
			public listIterator(index: number): java.util.ListIterator<any>;
			public subList(param0: number, param1: number): java.util.List<any>;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public removeAll(c: java.util.Collection<any>): boolean;
			public indexOf(o: any): number;
			public listIterator(): java.util.ListIterator<any>;
			public containsAll(c: java.util.Collection<any>): boolean;
			public add(index: number, element: any): void;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public indexOf(param0: any): number;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractMutableMap<K, V>  extends java.util.AbstractMap<any,any> {
			public static class: java.lang.Class<kotlin.collections.AbstractMutableMap<any,any>>;
			public replace(key: any, oldValue: any, newValue: any): boolean;
			public equals(param0: any): boolean;
			public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
			public containsValue(param0: any): boolean;
			public replace(key: any, value: any): any;
			public get(param0: any): any;
			public getSize(): number;
			public containsKey(key: any): boolean;
			public remove(key: any): any;
			public containsValue(value: any): boolean;
			public forEach(action: any /* any<any,any>*/): void;
			public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
			public putAll(m: java.util.Map<any,any>): void;
			public putIfAbsent(key: any, value: any): any;
			public remove(param0: any): any;
			public putAll(param0: java.util.Map<any,any>): void;
			public replaceAll(_function_: any /* any<any,any,any>*/): void;
			public values(): java.util.Collection<any>;
			public getValues(): java.util.Collection<any>;
			public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
			public clear(): void;
			public get(key: any): any;
			public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
			public keySet(): java.util.Set<any>;
			public size(): number;
			public isEmpty(): boolean;
			public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
			public constructor();
			public put(param0: any, param1: any): any;
			public getOrDefault(key: any, defaultValue: any): any;
			public put(key: any, value: any): any;
			public getEntries(): java.util.Set<any>;
			public equals(o: any): boolean;
			public getKeys(): java.util.Set<any>;
			public containsKey(param0: any): boolean;
			public remove(key: any, value: any): boolean;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractMutableSet<E>  extends java.util.AbstractSet<any> {
			public static class: java.lang.Class<kotlin.collections.AbstractMutableSet<any>>;
			public equals(param0: any): boolean;
			public contains(o: any): boolean;
			public remove(o: any): boolean;
			public retainAll(c: java.util.Collection<any>): boolean;
			public stream(): java.util.stream.Stream<any>;
			public toArray(param0: any[]): any[];
			public getSize(): number;
			public add(e: any): boolean;
			public contains(param0: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public toArray(): any[];
			public addAll(c: java.util.Collection<any>): boolean;
			public toArray(a: any[]): any[];
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public constructor();
			public forEach(action: any /* any*/): void;
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public removeAll(c: java.util.Collection<any>): boolean;
			public equals(o: any): boolean;
			public add(param0: any): boolean;
			public containsAll(c: java.util.Collection<any>): boolean;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractSet<E>  extends kotlin.collections.AbstractCollection<any> {
			public static class: java.lang.Class<kotlin.collections.AbstractSet<any>>;
			public add(element: any): boolean;
			public equals(param0: any): boolean;
			public stream(): java.util.stream.Stream<any>;
			public toArray(param0: any[]): any[];
			public addAll(elements: java.util.Collection<any>): boolean;
			public removeAll(elements: java.util.Collection<any>): boolean;
			public equals(other: any): boolean;
			public contains(param0: any): boolean;
			public toArray(array: any[]): any[];
			public contains(element: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public toArray(): any[];
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public containsAll(elements: java.util.Collection<any>): boolean;
			public constructor();
			public forEach(action: any /* any*/): void;
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public equals(obj: any): boolean;
			public add(param0: any): boolean;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public retainAll(elements: java.util.Collection<any>): boolean;
			public remove(element: any): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
		export module AbstractSet {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.AbstractSet.Companion>;
				public unorderedHashCode$kotlin_stdlib(c: java.util.Collection<any>): number;
				public setEquals$kotlin_stdlib(c: java.util.Set<any>, other: java.util.Set<any>): boolean;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArrayAsCollection<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.ArrayAsCollection<any>>;
			public equals(param0: any): boolean;
			public stream(): java.util.stream.Stream<any>;
			public toArray(param0: any[]): any[];
			public addAll(elements: java.util.Collection<any>): boolean;
			public removeAll(elements: java.util.Collection<any>): boolean;
			public getSize(): number;
			public toArray(array: any[]): any[];
			public contains(param0: any): boolean;
			public contains(element: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public toArray(): any[];
			public isVarargs(): boolean;
			public spliterator(): java.util.Spliterator<T>;
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public isEmpty(): boolean;
			public size(): number;
			public containsAll(elements: java.util.Collection<any>): boolean;
			public constructor(values: T[], isVarargs: boolean);
			public getValues(): T[];
			public forEach(action: any /* any*/): void;
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public add(element: T): boolean;
			public equals(obj: any): boolean;
			public iterator(): java.util.Iterator<T>;
			public add(param0: any): boolean;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public retainAll(elements: java.util.Collection<any>): boolean;
			public remove(element: any): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArrayDeque<E>  extends kotlin.collections.AbstractMutableList<any> {
			public static class: java.lang.Class<kotlin.collections.ArrayDeque<any>>;
			public add(element: any): boolean;
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public contains(o: any): boolean;
			public retainAll(c: java.util.Collection<any>): boolean;
			public removeLast(): any;
			public toArray(param0: any[]): any[];
			public addAll(elements: java.util.Collection<any>): boolean;
			public subList(fromIndex: number, toIndex: number): java.util.List<any>;
			public lastIndexOf(o: any): number;
			public addAll(index: number, c: java.util.Collection<any>): boolean;
			public removeAll(elements: java.util.Collection<any>): boolean;
			public replaceAll(operator: any /* any*/): void;
			public add(e: any): boolean;
			public first(): any;
			public removeLastOrNull(): any;
			public contains(element: any): boolean;
			public constructor(elements: java.util.Collection<any>);
			public lastOrNull(): any;
			public sort(c: java.util.Comparator<any>): void;
			public clear(): void;
			public listIterator(param0: number): java.util.ListIterator<any>;
			public constructor();
			public removeAt(param0: number): any;
			public addAll(param0: java.util.Collection<any>): boolean;
			public set(param0: number, param1: any): any;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public lastIndexOf(param0: any): number;
			public equals(o: any): boolean;
			public add(param0: any): boolean;
			public removeFirst(): any;
			public addFirst(element: any): void;
			public remove(element: any): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public set(index: number, element: any): any;
			public get(index: number): any;
			public equals(param0: any): boolean;
			public constructor(initialCapacity: number);
			public remove(o: any): boolean;
			public stream(): java.util.stream.Stream<any>;
			public remove(param0: number): any;
			public getSize(): number;
			public toArray(array: any[]): any[];
			public contains(param0: any): boolean;
			public addAll(index: number, elements: java.util.Collection<any>): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public internalStructure$kotlin_stdlib(structure: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
			public last(): any;
			public get(param0: number): any;
			public toArray(): any[];
			public addAll(c: java.util.Collection<any>): boolean;
			public remove(index: number): any;
			public add(param0: number, param1: any): void;
			public lastIndexOf(element: any): number;
			public toArray(a: any[]): any[];
			public iterator(): java.util.Iterator<any>;
			public isEmpty(): boolean;
			public size(): number;
			public removeFirstOrNull(): any;
			public listIterator(index: number): java.util.ListIterator<any>;
			public indexOf(element: any): number;
			public subList(param0: number, param1: number): java.util.List<any>;
			public testToArray$kotlin_stdlib(): any[];
			public retainAll(param0: java.util.Collection<any>): boolean;
			public addLast(element: any): void;
			public testToArray$kotlin_stdlib(array: any[]): any[];
			public remove(param0: any): boolean;
			public removeAt(index: number): any;
			public removeAll(c: java.util.Collection<any>): boolean;
			public indexOf(o: any): number;
			public listIterator(): java.util.ListIterator<any>;
			public containsAll(c: java.util.Collection<any>): boolean;
			public add(index: number, element: any): void;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public retainAll(elements: java.util.Collection<any>): boolean;
			public indexOf(param0: any): number;
			public parallelStream(): java.util.stream.Stream<any>;
			public firstOrNull(): any;
			public hashCode(): number;
		}
		export module ArrayDeque {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.ArrayDeque.Companion>;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArraysUtilJVM extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.ArraysUtilJVM>;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class BooleanIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.BooleanIterator>;
			public nextBoolean(): boolean;
			public next(): java.lang.Boolean;
			public constructor();
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class ByteIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.ByteIterator>;
			public next(): java.lang.Byte;
			public nextByte(): number;
			public constructor();
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class CharIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.CharIterator>;
			public nextChar(): string;
			public constructor();
			public remove(): void;
			public next(): java.lang.Character;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class DoubleIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.DoubleIterator>;
			public nextDouble(): number;
			public next(): java.lang.Double;
			public constructor();
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export class EmptyIterator extends java.lang.Object implements java.util.ListIterator<any>, kotlin.jvm.internal.markers.KMappedMarker {
			public static class: java.lang.Class<kotlin.collections.EmptyIterator>;
			public static INSTANCE: kotlin.collections.EmptyIterator;
			public set(element: java.lang.Void): void;
			public hasNext(): boolean;
			public nextIndex(): number;
			public remove(): void;
			public add(param0: any): void;
			public next(): java.lang.Void;
			public next(): any;
			public previous(): any;
			public previous(): java.lang.Void;
			public hasPrevious(): boolean;
			public previousIndex(): number;
			public add(element: java.lang.Void): void;
			public set(param0: any): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export class EmptyList extends java.lang.Object implements java.util.List<any>, java.io.Serializable, java.util.RandomAccess, kotlin.jvm.internal.markers.KMappedMarker {
			public static class: java.lang.Class<kotlin.collections.EmptyList>;
			public static INSTANCE: kotlin.collections.EmptyList;
			public get(index: number): java.lang.Void;
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public subList(fromIndex: number, toIndex: number): java.util.List<any>;
			public add(element: java.lang.Void): boolean;
			public toArray(param0: any[]): any[];
			public remove(index: number): java.lang.Void;
			public replaceAll(operator: any /* any*/): void;
			public lastIndexOf(element: java.lang.Void): number;
			public equals(other: any): boolean;
			public contains(element: any): boolean;
			public sort(c: java.util.Comparator<any>): void;
			public removeAll(elements: java.util.Collection<any>): boolean;
			public set(index: number, element: java.lang.Void): java.lang.Void;
			public addAll(index: number, elements: java.util.Collection<any>): boolean;
			public listIterator(index: number): java.util.ListIterator<any>;
			public clear(): void;
			public listIterator(param0: number): java.util.ListIterator<any>;
			public forEach(action: any /* any*/): void;
			public addAll(param0: java.util.Collection<any>): boolean;
			public set(param0: number, param1: any): any;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public lastIndexOf(param0: any): number;
			public add(param0: any): boolean;
			public add(index: number, element: java.lang.Void): void;
			public remove(element: any): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public iterator(): java.util.Iterator<any>;
			public equals(param0: any): boolean;
			public stream(): java.util.stream.Stream<any>;
			public remove(param0: number): any;
			public listIterator(): java.util.ListIterator<any>;
			public contains(element: java.lang.Void): boolean;
			public getSize(): number;
			public addAll(elements: java.util.Collection<any>): boolean;
			public toArray(array: any[]): any[];
			public contains(param0: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public get(param0: number): any;
			public toArray(): any[];
			public lastIndexOf(element: any): number;
			public add(param0: number, param1: any): void;
			public iterator(): java.util.Iterator<any>;
			public isEmpty(): boolean;
			public size(): number;
			public indexOf(element: any): number;
			public subList(param0: number, param1: number): java.util.List<any>;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public retainAll(elements: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public toString(): string;
			public indexOf(element: java.lang.Void): number;
			public equals(obj: any): boolean;
			public listIterator(): java.util.ListIterator<any>;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public containsAll(elements: java.util.Collection<any>): boolean;
			public indexOf(param0: any): number;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class EmptyMap extends java.lang.Object implements java.util.Map<any,any>, java.io.Serializable, kotlin.jvm.internal.markers.KMappedMarker {
			public static class: java.lang.Class<kotlin.collections.EmptyMap>;
			public static INSTANCE: kotlin.collections.EmptyMap;
			public replace(key: any, oldValue: any, newValue: any): boolean;
			public equals(param0: any): boolean;
			public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
			public getEntries(): java.util.Set<java.util.Map.Entry<any,any>>;
			public containsValue(param0: any): boolean;
			public replace(key: any, value: any): any;
			public get(param0: any): any;
			public getSize(): number;
			public containsKey(key: any): boolean;
			public values(): java.util.Collection<any>;
			public containsValue(value: any): boolean;
			public forEach(action: any /* any<any,any>*/): void;
			public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
			public equals(other: any): boolean;
			public putIfAbsent(key: any, value: any): any;
			public remove(param0: any): any;
			public putAll(from: java.util.Map<any,any>): void;
			public remove(key: any): java.lang.Void;
			public putAll(param0: java.util.Map<any,any>): void;
			public replaceAll(_function_: any /* any<any,any,any>*/): void;
			public values(): java.util.Collection<any>;
			public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
			public get(key: any): java.lang.Void;
			public clear(): void;
			public isEmpty(): boolean;
			public size(): number;
			public keySet(): java.util.Set<any>;
			public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
			public getValues(): java.util.Collection<any>;
			public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
			public put(key: any, value: java.lang.Void): java.lang.Void;
			public put(param0: any, param1: any): any;
			public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
			public getOrDefault(key: any, defaultValue: any): any;
			public toString(): string;
			public equals(obj: any): boolean;
			public getKeys(): java.util.Set<any>;
			public containsKey(param0: any): boolean;
			public containsValue(value: java.lang.Void): boolean;
			public remove(key: any, value: any): boolean;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class EmptySet extends java.lang.Object implements java.util.Set<any>, java.io.Serializable, kotlin.jvm.internal.markers.KMappedMarker {
			public static class: java.lang.Class<kotlin.collections.EmptySet>;
			public static INSTANCE: kotlin.collections.EmptySet;
			public equals(param0: any): boolean;
			public stream(): java.util.stream.Stream<any>;
			public add(element: java.lang.Void): boolean;
			public toArray(param0: any[]): any[];
			public contains(element: java.lang.Void): boolean;
			public getSize(): number;
			public addAll(elements: java.util.Collection<any>): boolean;
			public equals(other: any): boolean;
			public toArray(array: any[]): any[];
			public contains(param0: any): boolean;
			public contains(element: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public toArray(): any[];
			public removeAll(elements: java.util.Collection<any>): boolean;
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public isEmpty(): boolean;
			public size(): number;
			public forEach(action: any /* any*/): void;
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public retainAll(elements: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public add(param0: any): boolean;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public containsAll(elements: java.util.Collection<any>): boolean;
			public remove(element: any): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public iterator(): java.util.Iterator<any>;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class FloatIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.FloatIterator>;
			public nextFloat(): number;
			public constructor();
			public remove(): void;
			public next(): java.lang.Float;
		}
	}
}

declare module kotlin {
	export module collections {
		export class Grouping<T, K>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.Grouping<any,any>>;
			/**
			 * Constructs a new instance of the kotlin.collections.Grouping<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				sourceIterator(): java.util.Iterator<T>;
				keyOf(param0: T): K;
			});
			public constructor();
			public keyOf(param0: T): K;
			public sourceIterator(): java.util.Iterator<T>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class IndexedValue<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.IndexedValue<any>>;
			public getIndex(): number;
			public equals(other: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public constructor(index: number, value: T);
			public component2(): T;
			public getValue(): T;
			public component1(): number;
			public copy(index: number, value: T): kotlin.collections.IndexedValue<T>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class IndexingIterable<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.IndexingIterable<any>>;
			public iterator(): java.util.Iterator<T>;
			public iterator(): java.util.Iterator<kotlin.collections.IndexedValue<T>>;
			public forEach(action: any /* any*/): void;
			public spliterator(): java.util.Spliterator<T>;
			public constructor(iteratorFactory: kotlin.jvm.functions.Function0<any>);
		}
	}
}

declare module kotlin {
	export module collections {
		export class IndexingIterator<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.IndexingIterator<any>>;
			public constructor(iterator: java.util.Iterator<any>);
			public hasNext(): boolean;
			public next(): kotlin.collections.IndexedValue<T>;
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class IntIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.IntIterator>;
			public next(): java.lang.Integer;
			public nextInt(): number;
			public constructor();
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class LongIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.LongIterator>;
			public constructor();
			public next(): java.lang.Long;
			public nextLong(): number;
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MapWithDefault<K, V>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.MapWithDefault<any,any>>;
			/**
			 * Constructs a new instance of the kotlin.collections.MapWithDefault<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getMap(): java.util.Map<K,V>;
				getOrImplicitDefault(param0: K): V;
				size(): number;
				isEmpty(): boolean;
				containsKey(param0: any): boolean;
				containsValue(param0: any): boolean;
				get(param0: any): V;
				put(param0: K, param1: V): V;
				remove(param0: any): V;
				putAll(param0: java.util.Map<any,any>): void;
				clear(): void;
				keySet(): java.util.Set<K>;
				values(): java.util.Collection<V>;
				entrySet(): java.util.Set<java.util.Map.Entry<K,V>>;
				equals(param0: any): boolean;
				hashCode(): number;
				getOrDefault(key: any, defaultValue: V): V;
				forEach(action: any /* any<any,any>*/): void;
				replaceAll(_function_: any /* any<any,any,any>*/): void;
				putIfAbsent(key: K, value: V): V;
				remove(key: any, value: any): boolean;
				replace(key: K, oldValue: V, newValue: V): boolean;
				replace(key: K, value: V): V;
				computeIfAbsent(key: K, mappingFunction: any /* any<any,any>*/): V;
				computeIfPresent(key: K, remappingFunction: any /* any<any,any,any>*/): V;
				compute(key: K, remappingFunction: any /* any<any,any,any>*/): V;
				merge(key: K, value: V, remappingFunction: any /* any<any,any,any>*/): V;
			});
			public constructor();
			public equals(param0: any): boolean;
			public put(param0: K, param1: V): V;
			public containsValue(param0: any): boolean;
			public computeIfAbsent(key: K, mappingFunction: any /* any<any,any>*/): V;
			public replace(key: K, value: V): V;
			public merge(key: K, value: V, remappingFunction: any /* any<any,any,any>*/): V;
			public forEach(action: any /* any<any,any>*/): void;
			public getOrImplicitDefault(param0: K): V;
			public putAll(param0: java.util.Map<any,any>): void;
			public keySet(): java.util.Set<K>;
			public values(): java.util.Collection<V>;
			public replaceAll(_function_: any /* any<any,any,any>*/): void;
			public compute(key: K, remappingFunction: any /* any<any,any,any>*/): V;
			public clear(): void;
			public replace(key: K, oldValue: V, newValue: V): boolean;
			public getOrDefault(key: any, defaultValue: V): V;
			public size(): number;
			public isEmpty(): boolean;
			public getMap(): java.util.Map<K,V>;
			public putIfAbsent(key: K, value: V): V;
			public computeIfPresent(key: K, remappingFunction: any /* any<any,any,any>*/): V;
			public get(param0: any): V;
			public equals(obj: any): boolean;
			public remove(param0: any): V;
			public containsKey(param0: any): boolean;
			public remove(key: any, value: any): boolean;
			public entrySet(): java.util.Set<java.util.Map.Entry<K,V>>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MapWithDefaultImpl<K, V>  extends kotlin.collections.MapWithDefault<any,any> {
			public static class: java.lang.Class<kotlin.collections.MapWithDefaultImpl<any,any>>;
			public replace(key: any, oldValue: any, newValue: any): boolean;
			public equals(param0: any): boolean;
			public putAll(from: java.util.Map<any,any>): void;
			public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
			public containsValue(param0: any): boolean;
			public replace(key: any, value: any): any;
			public get(param0: any): any;
			public getSize(): number;
			public containsKey(key: any): boolean;
			public remove(key: any): any;
			public containsValue(value: any): boolean;
			public getEntries(): java.util.Set<java.util.Map.Entry<any,any>>;
			public forEach(action: any /* any<any,any>*/): void;
			public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
			public equals(other: any): boolean;
			public putIfAbsent(key: any, value: any): any;
			public remove(param0: any): any;
			public putAll(param0: java.util.Map<any,any>): void;
			public replaceAll(_function_: any /* any<any,any,any>*/): void;
			public values(): java.util.Collection<any>;
			public getValues(): java.util.Collection<any>;
			public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
			public clear(): void;
			public get(key: any): any;
			public isEmpty(): boolean;
			public size(): number;
			public keySet(): java.util.Set<any>;
			public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
			public getMap(): java.util.Map<any,any>;
			public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
			public constructor(map: java.util.Map<any,any>, default: kotlin.jvm.functions.Function1<any,any>);
			public put(param0: any, param1: any): any;
			public getOrDefault(key: any, defaultValue: any): any;
			public toString(): string;
			public put(key: any, value: any): any;
			public equals(obj: any): boolean;
			public getKeys(): java.util.Set<any>;
			public containsKey(param0: any): boolean;
			public getOrImplicitDefault(param0: any): any;
			public remove(key: any, value: any): boolean;
			public getOrImplicitDefault(key: any): any;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MovingSubList<E>  extends kotlin.collections.AbstractList<any> implements java.util.RandomAccess  {
			public static class: java.lang.Class<kotlin.collections.MovingSubList<any>>;
			public add(element: any): boolean;
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public toArray(param0: any[]): any[];
			public addAll(elements: java.util.Collection<any>): boolean;
			public subList(fromIndex: number, toIndex: number): java.util.List<any>;
			public removeAll(elements: java.util.Collection<any>): boolean;
			public replaceAll(operator: any /* any*/): void;
			public equals(other: any): boolean;
			public contains(element: any): boolean;
			public sort(c: java.util.Comparator<any>): void;
			public constructor(list: java.util.List<any>);
			public clear(): void;
			public listIterator(param0: number): java.util.ListIterator<any>;
			public constructor();
			public addAll(param0: java.util.Collection<any>): boolean;
			public set(param0: number, param1: any): any;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public lastIndexOf(param0: any): number;
			public add(param0: any): boolean;
			public remove(element: any): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public set(index: number, element: any): any;
			public get(index: number): any;
			public equals(param0: any): boolean;
			public stream(): java.util.stream.Stream<any>;
			public remove(param0: number): any;
			public getSize(): number;
			public contains(param0: any): boolean;
			public toArray(array: any[]): any[];
			public addAll(index: number, elements: java.util.Collection<any>): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public get(param0: number): any;
			public toArray(): any[];
			public remove(index: number): any;
			public add(param0: number, param1: any): void;
			public lastIndexOf(element: any): number;
			public iterator(): java.util.Iterator<any>;
			public move(fromIndex: number, toIndex: number): void;
			public size(): number;
			public isEmpty(): boolean;
			public listIterator(index: number): java.util.ListIterator<any>;
			public indexOf(element: any): number;
			public containsAll(elements: java.util.Collection<any>): boolean;
			public subList(param0: number, param1: number): java.util.List<any>;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public listIterator(): java.util.ListIterator<any>;
			public add(index: number, element: any): void;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public retainAll(elements: java.util.Collection<any>): boolean;
			public indexOf(param0: any): number;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MutableMapWithDefault<K, V>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.MutableMapWithDefault<any,any>>;
			/**
			 * Constructs a new instance of the kotlin.collections.MutableMapWithDefault<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getMap(): java.util.Map<K,V>;
				size(): number;
				isEmpty(): boolean;
				containsKey(param0: any): boolean;
				containsValue(param0: any): boolean;
				get(param0: any): V;
				put(param0: K, param1: V): V;
				remove(param0: any): V;
				putAll(param0: java.util.Map<any,any>): void;
				clear(): void;
				keySet(): java.util.Set<K>;
				values(): java.util.Collection<V>;
				entrySet(): java.util.Set<java.util.Map.Entry<K,V>>;
				equals(param0: any): boolean;
				hashCode(): number;
				getOrDefault(key: any, defaultValue: V): V;
				forEach(action: any /* any<any,any>*/): void;
				replaceAll(_function_: any /* any<any,any,any>*/): void;
				putIfAbsent(key: K, value: V): V;
				remove(key: any, value: any): boolean;
				replace(key: K, oldValue: V, newValue: V): boolean;
				replace(key: K, value: V): V;
				computeIfAbsent(key: K, mappingFunction: any /* any<any,any>*/): V;
				computeIfPresent(key: K, remappingFunction: any /* any<any,any,any>*/): V;
				compute(key: K, remappingFunction: any /* any<any,any,any>*/): V;
				merge(key: K, value: V, remappingFunction: any /* any<any,any,any>*/): V;
				getMap(): java.util.Map<K,V>;
				getOrImplicitDefault(param0: K): V;
				size(): number;
				isEmpty(): boolean;
				containsKey(param0: any): boolean;
				containsValue(param0: any): boolean;
				get(param0: any): V;
				put(param0: K, param1: V): V;
				remove(param0: any): V;
				putAll(param0: java.util.Map<any,any>): void;
				clear(): void;
				keySet(): java.util.Set<K>;
				values(): java.util.Collection<V>;
				entrySet(): java.util.Set<java.util.Map.Entry<K,V>>;
				equals(param0: any): boolean;
				hashCode(): number;
				getOrDefault(key: any, defaultValue: V): V;
				forEach(action: any /* any<any,any>*/): void;
				replaceAll(_function_: any /* any<any,any,any>*/): void;
				putIfAbsent(key: K, value: V): V;
				remove(key: any, value: any): boolean;
				replace(key: K, oldValue: V, newValue: V): boolean;
				replace(key: K, value: V): V;
				computeIfAbsent(key: K, mappingFunction: any /* any<any,any>*/): V;
				computeIfPresent(key: K, remappingFunction: any /* any<any,any,any>*/): V;
				compute(key: K, remappingFunction: any /* any<any,any,any>*/): V;
				merge(key: K, value: V, remappingFunction: any /* any<any,any,any>*/): V;
			});
			public constructor();
			public equals(param0: any): boolean;
			public put(param0: K, param1: V): V;
			public containsValue(param0: any): boolean;
			public computeIfAbsent(key: K, mappingFunction: any /* any<any,any>*/): V;
			public replace(key: K, value: V): V;
			public merge(key: K, value: V, remappingFunction: any /* any<any,any,any>*/): V;
			public forEach(action: any /* any<any,any>*/): void;
			public getOrImplicitDefault(param0: K): V;
			public putAll(param0: java.util.Map<any,any>): void;
			public keySet(): java.util.Set<K>;
			public values(): java.util.Collection<V>;
			public replaceAll(_function_: any /* any<any,any,any>*/): void;
			public compute(key: K, remappingFunction: any /* any<any,any,any>*/): V;
			public clear(): void;
			public replace(key: K, oldValue: V, newValue: V): boolean;
			public getOrDefault(key: any, defaultValue: V): V;
			public size(): number;
			public isEmpty(): boolean;
			public getMap(): java.util.Map<K,V>;
			public putIfAbsent(key: K, value: V): V;
			public computeIfPresent(key: K, remappingFunction: any /* any<any,any,any>*/): V;
			public get(param0: any): V;
			public equals(obj: any): boolean;
			public remove(param0: any): V;
			public containsKey(param0: any): boolean;
			public remove(key: any, value: any): boolean;
			public entrySet(): java.util.Set<java.util.Map.Entry<K,V>>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MutableMapWithDefaultImpl<K, V>  extends kotlin.collections.MutableMapWithDefault<any,any> {
			public static class: java.lang.Class<kotlin.collections.MutableMapWithDefaultImpl<any,any>>;
			public replace(key: any, oldValue: any, newValue: any): boolean;
			public equals(param0: any): boolean;
			public putAll(from: java.util.Map<any,any>): void;
			public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
			public containsValue(param0: any): boolean;
			public replace(key: any, value: any): any;
			public get(param0: any): any;
			public getSize(): number;
			public containsKey(key: any): boolean;
			public remove(key: any): any;
			public containsValue(value: any): boolean;
			public getEntries(): java.util.Set<java.util.Map.Entry<any,any>>;
			public forEach(action: any /* any<any,any>*/): void;
			public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
			public equals(other: any): boolean;
			public putIfAbsent(key: any, value: any): any;
			public remove(param0: any): any;
			public putAll(param0: java.util.Map<any,any>): void;
			public replaceAll(_function_: any /* any<any,any,any>*/): void;
			public values(): java.util.Collection<any>;
			public getValues(): java.util.Collection<any>;
			public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
			public clear(): void;
			public get(key: any): any;
			public isEmpty(): boolean;
			public size(): number;
			public keySet(): java.util.Set<any>;
			public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
			public getMap(): java.util.Map<any,any>;
			public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
			public constructor(map: java.util.Map<any,any>, default: kotlin.jvm.functions.Function1<any,any>);
			public put(param0: any, param1: any): any;
			public getOrDefault(key: any, defaultValue: any): any;
			public toString(): string;
			public put(key: any, value: any): any;
			public equals(obj: any): boolean;
			public getKeys(): java.util.Set<any>;
			public containsKey(param0: any): boolean;
			public getOrImplicitDefault(param0: any): any;
			public remove(key: any, value: any): boolean;
			public getOrImplicitDefault(key: any): any;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class ReversedList<T>  extends kotlin.collections.AbstractMutableList<any> {
			public static class: java.lang.Class<kotlin.collections.ReversedList<any>>;
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public contains(o: any): boolean;
			public retainAll(c: java.util.Collection<any>): boolean;
			public toArray(param0: any[]): any[];
			public subList(fromIndex: number, toIndex: number): java.util.List<any>;
			public lastIndexOf(o: any): number;
			public addAll(index: number, c: java.util.Collection<any>): boolean;
			public replaceAll(operator: any /* any*/): void;
			public add(e: any): boolean;
			public sort(c: java.util.Comparator<any>): void;
			public clear(): void;
			public listIterator(param0: number): java.util.ListIterator<any>;
			public constructor();
			public removeAt(param0: number): any;
			public addAll(param0: java.util.Collection<any>): boolean;
			public set(param0: number, param1: any): any;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public lastIndexOf(param0: any): number;
			public equals(o: any): boolean;
			public add(param0: any): boolean;
			public constructor(delegate: java.util.List<any>);
			public spliterator(): java.util.Spliterator<any>;
			public set(index: number, element: any): any;
			public get(index: number): any;
			public equals(param0: any): boolean;
			public remove(o: any): boolean;
			public stream(): java.util.stream.Stream<any>;
			public remove(param0: number): any;
			public getSize(): number;
			public contains(param0: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public get(param0: number): any;
			public toArray(): any[];
			public remove(index: number): any;
			public addAll(c: java.util.Collection<any>): boolean;
			public add(param0: number, param1: any): void;
			public toArray(a: any[]): any[];
			public iterator(): java.util.Iterator<any>;
			public size(): number;
			public isEmpty(): boolean;
			public listIterator(index: number): java.util.ListIterator<any>;
			public subList(param0: number, param1: number): java.util.List<any>;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public removeAt(index: number): any;
			public removeAll(c: java.util.Collection<any>): boolean;
			public indexOf(o: any): number;
			public listIterator(): java.util.ListIterator<any>;
			public containsAll(c: java.util.Collection<any>): boolean;
			public add(index: number, element: any): void;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public indexOf(param0: any): number;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class ReversedListReadOnly<T>  extends kotlin.collections.AbstractList<any> {
			public static class: java.lang.Class<kotlin.collections.ReversedListReadOnly<any>>;
			public add(element: any): boolean;
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public toArray(param0: any[]): any[];
			public addAll(elements: java.util.Collection<any>): boolean;
			public subList(fromIndex: number, toIndex: number): java.util.List<any>;
			public removeAll(elements: java.util.Collection<any>): boolean;
			public replaceAll(operator: any /* any*/): void;
			public equals(other: any): boolean;
			public contains(element: any): boolean;
			public sort(c: java.util.Comparator<any>): void;
			public clear(): void;
			public listIterator(param0: number): java.util.ListIterator<any>;
			public constructor();
			public addAll(param0: java.util.Collection<any>): boolean;
			public set(param0: number, param1: any): any;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public lastIndexOf(param0: any): number;
			public add(param0: any): boolean;
			public constructor(delegate: java.util.List<any>);
			public remove(element: any): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public set(index: number, element: any): any;
			public get(index: number): any;
			public equals(param0: any): boolean;
			public stream(): java.util.stream.Stream<any>;
			public remove(param0: number): any;
			public getSize(): number;
			public contains(param0: any): boolean;
			public toArray(array: any[]): any[];
			public addAll(index: number, elements: java.util.Collection<any>): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public get(param0: number): any;
			public toArray(): any[];
			public remove(index: number): any;
			public add(param0: number, param1: any): void;
			public lastIndexOf(element: any): number;
			public iterator(): java.util.Iterator<any>;
			public size(): number;
			public isEmpty(): boolean;
			public listIterator(index: number): java.util.ListIterator<any>;
			public indexOf(element: any): number;
			public containsAll(elements: java.util.Collection<any>): boolean;
			public subList(param0: number, param1: number): java.util.List<any>;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public listIterator(): java.util.ListIterator<any>;
			public add(index: number, element: any): void;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public retainAll(elements: java.util.Collection<any>): boolean;
			public indexOf(param0: any): number;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class RingBuffer<T>  extends kotlin.collections.AbstractList<any> implements java.util.RandomAccess  {
			public static class: java.lang.Class<kotlin.collections.RingBuffer<any>>;
			public add(element: any): boolean;
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public toArray(param0: any[]): any[];
			public addAll(elements: java.util.Collection<any>): boolean;
			public subList(fromIndex: number, toIndex: number): java.util.List<any>;
			public removeAll(elements: java.util.Collection<any>): boolean;
			public replaceAll(operator: any /* any*/): void;
			public equals(other: any): boolean;
			public contains(element: any): boolean;
			public sort(c: java.util.Comparator<any>): void;
			public isFull(): boolean;
			public clear(): void;
			public listIterator(param0: number): java.util.ListIterator<any>;
			public constructor();
			public addAll(param0: java.util.Collection<any>): boolean;
			public set(param0: number, param1: any): any;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public add(element: any): void;
			public lastIndexOf(param0: any): number;
			public add(param0: any): boolean;
			public constructor(buffer: any[], filledSize: number);
			public remove(element: any): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public set(index: number, element: any): any;
			public get(index: number): any;
			public equals(param0: any): boolean;
			public stream(): java.util.stream.Stream<any>;
			public remove(param0: number): any;
			public getSize(): number;
			public toArray(array: any[]): any[];
			public contains(param0: any): boolean;
			public addAll(index: number, elements: java.util.Collection<any>): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public get(param0: number): any;
			public toArray(): any[];
			public expanded(maxCapacity: number): kotlin.collections.RingBuffer<any>;
			public remove(index: number): any;
			public add(param0: number, param1: any): void;
			public lastIndexOf(element: any): number;
			public iterator(): java.util.Iterator<any>;
			public size(): number;
			public isEmpty(): boolean;
			public listIterator(index: number): java.util.ListIterator<any>;
			public indexOf(element: any): number;
			public containsAll(elements: java.util.Collection<any>): boolean;
			public subList(param0: number, param1: number): java.util.List<any>;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public constructor(capacity: number);
			public listIterator(): java.util.ListIterator<any>;
			public add(index: number, element: any): void;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public retainAll(elements: java.util.Collection<any>): boolean;
			public indexOf(param0: any): number;
			public removeFirst(n: number): void;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class ShortIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.ShortIterator>;
			public next(): java.lang.Short;
			public constructor();
			public remove(): void;
			public nextShort(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class State {
			public static class: java.lang.Class<kotlin.collections.State>;
			public static Ready: kotlin.collections.State;
			public static NotReady: kotlin.collections.State;
			public static Done: kotlin.collections.State;
			public static Failed: kotlin.collections.State;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public static valueOf(value: string): kotlin.collections.State;
			public static values(): kotlin.collections.State[];
			public static getEntries(): kotlin.enums.EnumEntries<kotlin.collections.State>;
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export abstract class AbstractMapBuilderEntrySet<E, K, V>  extends kotlin.collections.AbstractMutableSet<any> {
				public static class: java.lang.Class<kotlin.collections.builders.AbstractMapBuilderEntrySet<any,any,any>>;
				public parallelStream(): java.util.stream.Stream<any>;
				public addAll(param0: java.util.Collection<any>): boolean;
				public toArray(a: any[]): any[];
				public removeAll(c: java.util.Collection<any>): boolean;
				public containsEntry(param0: java.util.Map.Entry<any,any>): boolean;
				public constructor();
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public hashCode(): number;
				public clear(): void;
				public equals(param0: any): boolean;
				public addAll(c: java.util.Collection<any>): boolean;
				public equals(o: any): boolean;
				public isEmpty(): boolean;
				public remove(param0: any): boolean;
				public contains(o: any): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public contains(param0: any): boolean;
				public stream(): java.util.stream.Stream<any>;
				public remove(o: any): boolean;
				public iterator(): java.util.Iterator<any>;
				public remove(element: any): boolean;
				public toArray(): any[];
				public retainAll(param0: java.util.Collection<any>): boolean;
				public containsAll(c: java.util.Collection<any>): boolean;
				public size(): number;
				public contains(element: any): boolean;
				public remove(element: java.util.Map.Entry<any,any>): boolean;
				public toArray(param0: any[]): any[];
				public removeIf(filter: any /* any*/): boolean;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public retainAll(c: java.util.Collection<any>): boolean;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export class ListBuilder<E>  extends kotlin.collections.AbstractMutableList<any> {
				public static class: java.lang.Class<kotlin.collections.builders.ListBuilder<any>>;
				public removeAll(elements: java.util.Collection<any>): boolean;
				public subList(fromIndex: number, toIndex: number): java.util.List<any>;
				public build(): java.util.List<any>;
				public indexOf(o: any): number;
				public indexOf(param0: any): number;
				public addAll(param0: java.util.Collection<any>): boolean;
				public remove(param0: number): any;
				public toArray(a: any[]): any[];
				public addAll(elements: java.util.Collection<any>): boolean;
				public add(param0: number, param1: any): void;
				public constructor();
				public set(param0: number, param1: any): any;
				public removeAt(param0: number): any;
				public add(param0: any): boolean;
				public getSize(): number;
				public removeAt(index: number): any;
				public hashCode(): number;
				public set(index: number, element: any): any;
				public equals(param0: any): boolean;
				public addAll(c: java.util.Collection<any>): boolean;
				public addAll(param0: number, param1: java.util.Collection<any>): boolean;
				public isEmpty(): boolean;
				public lastIndexOf(param0: any): number;
				public listIterator(param0: number): java.util.ListIterator<any>;
				public addAll(index: number, elements: java.util.Collection<any>): boolean;
				public remove(index: number): any;
				public replaceAll(operator: any /* any*/): void;
				public spliterator(): java.util.Spliterator<any>;
				public contains(param0: any): boolean;
				public get(index: number): any;
				public stream(): java.util.stream.Stream<any>;
				public iterator(): java.util.Iterator<any>;
				public forEach(action: any /* any*/): void;
				public lastIndexOf(element: any): number;
				public toArray(): any[];
				public toString(): string;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public containsAll(c: java.util.Collection<any>): boolean;
				public size(): number;
				public removeIf(filter: any /* any*/): boolean;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public constructor(initialCapacity: number);
				public toArray(destination: any[]): any[];
				public indexOf(element: any): number;
				public listIterator(index: number): java.util.ListIterator<any>;
				public retainAll(c: java.util.Collection<any>): boolean;
				public parallelStream(): java.util.stream.Stream<any>;
				public lastIndexOf(o: any): number;
				public listIterator(): java.util.ListIterator<any>;
				public removeAll(c: java.util.Collection<any>): boolean;
				public add(e: any): boolean;
				public equals(other: any): boolean;
				public containsAll(param0: java.util.Collection<any>): boolean;
				public clear(): void;
				public equals(o: any): boolean;
				public remove(param0: any): boolean;
				public contains(o: any): boolean;
				public sort(c: java.util.Comparator<any>): void;
				public subList(param0: number, param1: number): java.util.List<any>;
				public remove(o: any): boolean;
				public remove(element: any): boolean;
				public retainAll(elements: java.util.Collection<any>): boolean;
				public get(param0: number): any;
				public add(element: any): boolean;
				public toArray(param0: any[]): any[];
				public add(index: number, element: any): void;
				public addAll(index: number, c: java.util.Collection<any>): boolean;
			}
			export module ListBuilder {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kotlin.collections.builders.ListBuilder.Companion>;
				}
				export class Itr<E>  extends java.lang.Object {
					public static class: java.lang.Class<kotlin.collections.builders.ListBuilder.Itr<any>>;
					public add(param0: E): void;
					public previousIndex(): number;
					public nextIndex(): number;
					public previous(): E;
					public set(element: E): void;
					public constructor(list: kotlin.collections.builders.ListBuilder<E>, index: number);
					public hasPrevious(): boolean;
					public set(param0: E): void;
					public next(): E;
					public hasNext(): boolean;
					public add(element: E): void;
					public remove(): void;
				}
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export class MapBuilder<K, V>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.builders.MapBuilder<any,any>>;
				public containsAllEntries$kotlin_stdlib(m: java.util.Collection<any>): boolean;
				public entrySet(): java.util.Set<java.util.Map.Entry<K,V>>;
				public remove(key: any): V;
				public putAll(param0: java.util.Map<any,any>): void;
				public merge(key: K, value: V, remappingFunction: any /* any<any,any,any>*/): V;
				public keySet(): java.util.Set<K>;
				public get(key: any): V;
				public constructor();
				public containsEntry$kotlin_stdlib(entry: java.util.Map.Entry<any,any>): boolean;
				public remove(param0: any): V;
				public build(): java.util.Map<K,V>;
				public checkIsMutable$kotlin_stdlib(): void;
				public forEach(action: any /* any<any,any>*/): void;
				public getEntries(): java.util.Set<java.util.Map.Entry<K,V>>;
				public getSize(): number;
				public hashCode(): number;
				public entriesIterator$kotlin_stdlib(): kotlin.collections.builders.MapBuilder.EntriesItr<K,V>;
				public equals(param0: any): boolean;
				public isEmpty(): boolean;
				public containsValue(param0: any): boolean;
				public replaceAll(_function_: any /* any<any,any,any>*/): void;
				public putAll(from: java.util.Map<any,any>): void;
				public toString(): string;
				public removeKey$kotlin_stdlib(key: K): number;
				public values(): java.util.Collection<V>;
				public size(): number;
				public isReadOnly$kotlin_stdlib(): boolean;
				public put(key: K, value: V): V;
				public keysIterator$kotlin_stdlib(): kotlin.collections.builders.MapBuilder.KeysItr<K,V>;
				public constructor(initialCapacity: number);
				public compute(key: K, remappingFunction: any /* any<any,any,any>*/): V;
				public removeValue$kotlin_stdlib(element: V): boolean;
				public addKey$kotlin_stdlib(key: K): number;
				public getKeys(): java.util.Set<K>;
				public getOrDefault(key: any, defaultValue: V): V;
				public containsKey(key: any): boolean;
				public computeIfPresent(key: K, remappingFunction: any /* any<any,any,any>*/): V;
				public containsKey(param0: any): boolean;
				public replace(key: K, oldValue: V, newValue: V): boolean;
				public put(param0: K, param1: V): V;
				public computeIfAbsent(key: K, mappingFunction: any /* any<any,any>*/): V;
				public equals(other: any): boolean;
				public removeEntry$kotlin_stdlib(entry: java.util.Map.Entry<any,any>): boolean;
				public valuesIterator$kotlin_stdlib(): kotlin.collections.builders.MapBuilder.ValuesItr<K,V>;
				public getValues(): java.util.Collection<V>;
				public clear(): void;
				public remove(key: any, value: any): boolean;
				public putIfAbsent(key: K, value: V): V;
				public containsValue(value: any): boolean;
				public replace(key: K, value: V): V;
				public equals(obj: any): boolean;
				public get(param0: any): V;
				public getCapacity$kotlin_stdlib(): number;
			}
			export module MapBuilder {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kotlin.collections.builders.MapBuilder.Companion>;
					public getEmpty$kotlin_stdlib(): kotlin.collections.builders.MapBuilder<any,any>;
				}
				export class EntriesItr<K, V>  extends kotlin.collections.builders.MapBuilder.Itr<any,any> {
					public static class: java.lang.Class<kotlin.collections.builders.MapBuilder.EntriesItr<any,any>>;
					public nextAppendString(sb: java.lang.StringBuilder): void;
					public constructor(map: kotlin.collections.builders.MapBuilder<any,any>);
					public next(): kotlin.collections.builders.MapBuilder.EntryRef<any,any>;
					public nextHashCode$kotlin_stdlib(): number;
				}
				export class EntryRef<K, V>  extends java.lang.Object {
					public static class: java.lang.Class<kotlin.collections.builders.MapBuilder.EntryRef<any,any>>;
					public getKey(): K;
					public equals(obj: any): boolean;
					public getValue(): V;
					public setValue(newValue: V): V;
					public equals(other: any): boolean;
					public setValue(param0: V): V;
					public static comparingByValue(): java.util.Comparator<any>;
					public static comparingByKey(cmp: java.util.Comparator<any>): java.util.Comparator<any>;
					public equals(param0: any): boolean;
					public static comparingByValue(cmp: java.util.Comparator<any>): java.util.Comparator<any>;
					public toString(): string;
					public static comparingByKey(): java.util.Comparator<any>;
					public constructor(map: kotlin.collections.builders.MapBuilder<K,V>, index: number);
					public hashCode(): number;
				}
				export class Itr<K, V>  extends java.lang.Object {
					public static class: java.lang.Class<kotlin.collections.builders.MapBuilder.Itr<any,any>>;
					public setLastIndex$kotlin_stdlib(_set_: number): void;
					public getMap$kotlin_stdlib(): kotlin.collections.builders.MapBuilder<K,V>;
					public checkForComodification$kotlin_stdlib(): void;
					public constructor(map: kotlin.collections.builders.MapBuilder<K,V>);
					public getIndex$kotlin_stdlib(): number;
					public initNext$kotlin_stdlib(): void;
					public setIndex$kotlin_stdlib(_set_: number): void;
					public getLastIndex$kotlin_stdlib(): number;
					public hasNext(): boolean;
					public remove(): void;
				}
				export class KeysItr<K, V>  extends kotlin.collections.builders.MapBuilder.Itr<any,any> {
					public static class: java.lang.Class<kotlin.collections.builders.MapBuilder.KeysItr<any,any>>;
					public constructor(map: kotlin.collections.builders.MapBuilder<any,any>);
					public next(): any;
				}
				export class ValuesItr<K, V>  extends kotlin.collections.builders.MapBuilder.Itr<any,any> {
					public static class: java.lang.Class<kotlin.collections.builders.MapBuilder.ValuesItr<any,any>>;
					public constructor(map: kotlin.collections.builders.MapBuilder<any,any>);
					public next(): any;
				}
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export class MapBuilderEntries<K, V>  extends kotlin.collections.builders.AbstractMapBuilderEntrySet<java.util.Map.Entry<any,any>,any,any> {
				public static class: java.lang.Class<kotlin.collections.builders.MapBuilderEntries<any,any>>;
				public removeAll(elements: java.util.Collection<any>): boolean;
				public parallelStream(): java.util.stream.Stream<any>;
				public containsAll(elements: java.util.Collection<any>): boolean;
				public addAll(param0: java.util.Collection<any>): boolean;
				public toArray(a: any[]): any[];
				public addAll(elements: java.util.Collection<any>): boolean;
				public removeAll(c: java.util.Collection<any>): boolean;
				public containsEntry(param0: java.util.Map.Entry<any,any>): boolean;
				public constructor();
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public getSize(): number;
				public hashCode(): number;
				public clear(): void;
				public equals(param0: any): boolean;
				public addAll(c: java.util.Collection<any>): boolean;
				public remove(element: java.util.Map.Entry<any,any>): boolean;
				public equals(o: any): boolean;
				public isEmpty(): boolean;
				public constructor(backing: kotlin.collections.builders.MapBuilder<any,any>);
				public remove(param0: any): boolean;
				public add(element: java.util.Map.Entry<any,any>): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public contains(param0: any): boolean;
				public stream(): java.util.stream.Stream<any>;
				public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
				public containsEntry(element: java.util.Map.Entry<any,any>): boolean;
				public iterator(): java.util.Iterator<any>;
				public remove(element: any): boolean;
				public toArray(): any[];
				public retainAll(elements: java.util.Collection<any>): boolean;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public containsAll(c: java.util.Collection<any>): boolean;
				public size(): number;
				public contains(element: any): boolean;
				public remove(element: java.util.Map.Entry<any,any>): boolean;
				public toArray(param0: any[]): any[];
				public removeIf(filter: any /* any*/): boolean;
				public getBacking(): kotlin.collections.builders.MapBuilder<any,any>;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public retainAll(c: java.util.Collection<any>): boolean;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export class MapBuilderKeys<E>  extends kotlin.collections.AbstractMutableSet<any> {
				public static class: java.lang.Class<kotlin.collections.builders.MapBuilderKeys<any>>;
				public removeAll(elements: java.util.Collection<any>): boolean;
				public parallelStream(): java.util.stream.Stream<any>;
				public addAll(param0: java.util.Collection<any>): boolean;
				public toArray(a: any[]): any[];
				public addAll(elements: java.util.Collection<any>): boolean;
				public removeAll(c: java.util.Collection<any>): boolean;
				public constructor();
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public getSize(): number;
				public hashCode(): number;
				public clear(): void;
				public equals(param0: any): boolean;
				public addAll(c: java.util.Collection<any>): boolean;
				public equals(o: any): boolean;
				public isEmpty(): boolean;
				public constructor(backing: kotlin.collections.builders.MapBuilder<any,any>);
				public remove(param0: any): boolean;
				public contains(o: any): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public contains(param0: any): boolean;
				public stream(): java.util.stream.Stream<any>;
				public remove(o: any): boolean;
				public iterator(): java.util.Iterator<any>;
				public remove(element: any): boolean;
				public forEach(action: any /* any*/): void;
				public toArray(): any[];
				public retainAll(elements: java.util.Collection<any>): boolean;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public containsAll(c: java.util.Collection<any>): boolean;
				public size(): number;
				public contains(element: any): boolean;
				public add(element: any): boolean;
				public toArray(param0: any[]): any[];
				public removeIf(filter: any /* any*/): boolean;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public retainAll(c: java.util.Collection<any>): boolean;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export class MapBuilderValues<V>  extends kotlin.collections.AbstractMutableCollection<any> {
				public static class: java.lang.Class<kotlin.collections.builders.MapBuilderValues<any>>;
				public removeAll(elements: java.util.Collection<any>): boolean;
				public parallelStream(): java.util.stream.Stream<any>;
				public addAll(param0: java.util.Collection<any>): boolean;
				public toArray(a: any[]): any[];
				public addAll(elements: java.util.Collection<any>): boolean;
				public removeAll(c: java.util.Collection<any>): boolean;
				public constructor();
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public getSize(): number;
				public hashCode(): number;
				public clear(): void;
				public equals(param0: any): boolean;
				public addAll(c: java.util.Collection<any>): boolean;
				public isEmpty(): boolean;
				public constructor(backing: kotlin.collections.builders.MapBuilder<any,any>);
				public remove(param0: any): boolean;
				public contains(o: any): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public contains(param0: any): boolean;
				public stream(): java.util.stream.Stream<any>;
				public iterator(): java.util.Iterator<any>;
				public remove(o: any): boolean;
				public remove(element: any): boolean;
				public forEach(action: any /* any*/): void;
				public toArray(): any[];
				public retainAll(elements: java.util.Collection<any>): boolean;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public containsAll(c: java.util.Collection<any>): boolean;
				public size(): number;
				public contains(element: any): boolean;
				public add(element: any): boolean;
				public toArray(param0: any[]): any[];
				public removeIf(filter: any /* any*/): boolean;
				public getBacking(): kotlin.collections.builders.MapBuilder<any,any>;
				public equals(obj: any): boolean;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public retainAll(c: java.util.Collection<any>): boolean;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export class SerializedCollection extends java.lang.Object implements java.io.Externalizable {
				public static class: java.lang.Class<kotlin.collections.builders.SerializedCollection>;
				public static tagList: number;
				public static tagSet: number;
				public writeExternal(output: java.io.ObjectOutput): void;
				public constructor(collection: java.util.Collection<any>, tag: number);
				public writeExternal(param0: java.io.ObjectOutput): void;
				public readExternal(param0: java.io.ObjectInput): void;
				public readExternal(input: java.io.ObjectInput): void;
				public constructor();
			}
			export module SerializedCollection {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kotlin.collections.builders.SerializedCollection.Companion>;
				}
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export class SerializedMap extends java.lang.Object implements java.io.Externalizable {
				public static class: java.lang.Class<kotlin.collections.builders.SerializedMap>;
				public writeExternal(output: java.io.ObjectOutput): void;
				public writeExternal(param0: java.io.ObjectOutput): void;
				public readExternal(param0: java.io.ObjectInput): void;
				public readExternal(input: java.io.ObjectInput): void;
				public constructor(map: java.util.Map<any,any>);
				public constructor();
			}
			export module SerializedMap {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kotlin.collections.builders.SerializedMap.Companion>;
				}
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export class SetBuilder<E>  extends kotlin.collections.AbstractMutableSet<any> {
				public static class: java.lang.Class<kotlin.collections.builders.SetBuilder<any>>;
				public removeAll(elements: java.util.Collection<any>): boolean;
				public parallelStream(): java.util.stream.Stream<any>;
				public build(): java.util.Set<any>;
				public addAll(param0: java.util.Collection<any>): boolean;
				public toArray(a: any[]): any[];
				public addAll(elements: java.util.Collection<any>): boolean;
				public removeAll(c: java.util.Collection<any>): boolean;
				public constructor();
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public getSize(): number;
				public hashCode(): number;
				public clear(): void;
				public equals(param0: any): boolean;
				public addAll(c: java.util.Collection<any>): boolean;
				public equals(o: any): boolean;
				public isEmpty(): boolean;
				public constructor(backing: kotlin.collections.builders.MapBuilder<any,any>);
				public remove(param0: any): boolean;
				public contains(o: any): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public contains(param0: any): boolean;
				public stream(): java.util.stream.Stream<any>;
				public remove(o: any): boolean;
				public iterator(): java.util.Iterator<any>;
				public remove(element: any): boolean;
				public forEach(action: any /* any*/): void;
				public toArray(): any[];
				public retainAll(elements: java.util.Collection<any>): boolean;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public containsAll(c: java.util.Collection<any>): boolean;
				public size(): number;
				public contains(element: any): boolean;
				public add(element: any): boolean;
				public toArray(param0: any[]): any[];
				public removeIf(filter: any /* any*/): boolean;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public constructor(initialCapacity: number);
				public retainAll(c: java.util.Collection<any>): boolean;
			}
			export module SetBuilder {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kotlin.collections.builders.SetBuilder.Companion>;
				}
			}
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class NaturalOrderComparator extends java.util.Comparator<java.lang.Comparable<any>> {
			public static class: java.lang.Class<kotlin.comparisons.NaturalOrderComparator>;
			public static INSTANCE: kotlin.comparisons.NaturalOrderComparator;
			public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public equals(param0: any): boolean;
			public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public reversed(): java.util.Comparator<java.lang.Comparable<any>>;
			public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public compare(param0: any, param1: any): number;
			public static reverseOrder(): java.util.Comparator<any>;
			public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
			public equals(obj: any): boolean;
			public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public compare(a: java.lang.Comparable<any>, b: java.lang.Comparable<any>): number;
			public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public reversed(): java.util.Comparator<any>;
			public static naturalOrder(): java.util.Comparator<any>;
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class ReverseOrderComparator extends java.util.Comparator<java.lang.Comparable<any>> {
			public static class: java.lang.Class<kotlin.comparisons.ReverseOrderComparator>;
			public static INSTANCE: kotlin.comparisons.ReverseOrderComparator;
			public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public equals(param0: any): boolean;
			public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public reversed(): java.util.Comparator<java.lang.Comparable<any>>;
			public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public compare(param0: any, param1: any): number;
			public static reverseOrder(): java.util.Comparator<any>;
			public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
			public equals(obj: any): boolean;
			public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public compare(a: java.lang.Comparable<any>, b: java.lang.Comparable<any>): number;
			public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public reversed(): java.util.Comparator<any>;
			public static naturalOrder(): java.util.Comparator<any>;
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class ReversedComparator<T>  extends java.util.Comparator<any> {
			public static class: java.lang.Class<kotlin.comparisons.ReversedComparator<any>>;
			public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public equals(param0: any): boolean;
			public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public getComparator(): java.util.Comparator<any>;
			public compare(param0: any, param1: any): number;
			public static reverseOrder(): java.util.Comparator<any>;
			public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public constructor(comparator: java.util.Comparator<any>);
			public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
			public equals(obj: any): boolean;
			public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
			public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
			public compare(a: any, b: any): number;
			public reversed(): java.util.Comparator<any>;
			public static naturalOrder(): java.util.Comparator<any>;
		}
	}
}

declare module kotlin {
	export module contracts {
		export class CallsInPlace extends java.lang.Object implements kotlin.contracts.Effect {
			public static class: java.lang.Class<kotlin.contracts.CallsInPlace>;
			/**
			 * Constructs a new instance of the kotlin.contracts.CallsInPlace interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module kotlin {
	export module contracts {
		export class ConditionalEffect extends java.lang.Object implements kotlin.contracts.Effect {
			public static class: java.lang.Class<kotlin.contracts.ConditionalEffect>;
			/**
			 * Constructs a new instance of the kotlin.contracts.ConditionalEffect interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module kotlin {
	export module contracts {
		export class ContractBuilder extends java.lang.Object {
			public static class: java.lang.Class<kotlin.contracts.ContractBuilder>;
			/**
			 * Constructs a new instance of the kotlin.contracts.ContractBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				returns(): kotlin.contracts.Returns;
				returns(param0: any): kotlin.contracts.Returns;
				returnsNotNull(): kotlin.contracts.ReturnsNotNull;
				callsInPlace(param0: kotlin.Function<any>, param1: kotlin.contracts.InvocationKind): kotlin.contracts.CallsInPlace;
			});
			public constructor();
			public returns(param0: any): kotlin.contracts.Returns;
			public returns(): kotlin.contracts.Returns;
			public returnsNotNull(): kotlin.contracts.ReturnsNotNull;
			public callsInPlace(param0: kotlin.Function<any>, param1: kotlin.contracts.InvocationKind): kotlin.contracts.CallsInPlace;
		}
		export module ContractBuilder {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.contracts.ContractBuilder.DefaultImpls>;
			}
		}
	}
}

declare module kotlin {
	export module contracts {
		export class Effect extends java.lang.Object {
			public static class: java.lang.Class<kotlin.contracts.Effect>;
			/**
			 * Constructs a new instance of the kotlin.contracts.Effect interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module kotlin {
	export module contracts {
		export class ExperimentalContracts extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.contracts.ExperimentalContracts>;
			/**
			 * Constructs a new instance of the kotlin.contracts.ExperimentalContracts interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module contracts {
		export class InvocationKind {
			public static class: java.lang.Class<kotlin.contracts.InvocationKind>;
			public static AT_MOST_ONCE: kotlin.contracts.InvocationKind;
			public static AT_LEAST_ONCE: kotlin.contracts.InvocationKind;
			public static EXACTLY_ONCE: kotlin.contracts.InvocationKind;
			public static UNKNOWN: kotlin.contracts.InvocationKind;
			public static getEntries(): kotlin.enums.EnumEntries<kotlin.contracts.InvocationKind>;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public static valueOf(value: string): kotlin.contracts.InvocationKind;
			public static values(): kotlin.contracts.InvocationKind[];
		}
	}
}

declare module kotlin {
	export module contracts {
		export class Returns extends java.lang.Object implements kotlin.contracts.SimpleEffect {
			public static class: java.lang.Class<kotlin.contracts.Returns>;
			/**
			 * Constructs a new instance of the kotlin.contracts.Returns interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				implies(param0: boolean): kotlin.contracts.ConditionalEffect;
			});
			public constructor();
			public implies(param0: boolean): kotlin.contracts.ConditionalEffect;
		}
	}
}

declare module kotlin {
	export module contracts {
		export class ReturnsNotNull extends java.lang.Object implements kotlin.contracts.SimpleEffect {
			public static class: java.lang.Class<kotlin.contracts.ReturnsNotNull>;
			/**
			 * Constructs a new instance of the kotlin.contracts.ReturnsNotNull interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				implies(param0: boolean): kotlin.contracts.ConditionalEffect;
			});
			public constructor();
			public implies(param0: boolean): kotlin.contracts.ConditionalEffect;
		}
	}
}

declare module kotlin {
	export module contracts {
		export class SimpleEffect extends java.lang.Object implements kotlin.contracts.Effect {
			public static class: java.lang.Class<kotlin.contracts.SimpleEffect>;
			/**
			 * Constructs a new instance of the kotlin.contracts.SimpleEffect interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				implies(param0: boolean): kotlin.contracts.ConditionalEffect;
			});
			public constructor();
			public implies(param0: boolean): kotlin.contracts.ConditionalEffect;
		}
	}
}

declare module kotlin {
	export module coroutines {
		export abstract class AbstractCoroutineContextElement extends java.lang.Object implements kotlin.coroutines.CoroutineContext.Element {
			public static class: java.lang.Class<kotlin.coroutines.AbstractCoroutineContextElement>;
			public fold(initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public minusKey(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			public fold(param0: any, param1: kotlin.jvm.functions.Function2<any,any,any>): any;
			public get(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
			public plus(param0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
			public constructor(key: kotlin.coroutines.CoroutineContext.Key<any>);
			public get(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
			public plus(context: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public minusKey(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
		}
	}
}

declare module kotlin {
	export module coroutines {
		export abstract class AbstractCoroutineContextKey<B>  extends kotlin.coroutines.CoroutineContext.Key<any> {
			public static class: java.lang.Class<kotlin.coroutines.AbstractCoroutineContextKey<any>>;
			public constructor(baseKey: kotlin.coroutines.CoroutineContext.Key<any>, safeCast: kotlin.jvm.functions.Function1<any,any>);
			public tryCast$kotlin_stdlib(element: kotlin.coroutines.CoroutineContext.Element): any;
			public isSubKey$kotlin_stdlib(key: kotlin.coroutines.CoroutineContext.Key<any>): boolean;
		}
	}
}

declare module kotlin {
	export module coroutines {
		export class CombinedContext extends java.lang.Object implements kotlin.coroutines.CoroutineContext, java.io.Serializable {
			public static class: java.lang.Class<kotlin.coroutines.CombinedContext>;
			public minusKey(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			public fold(param0: any, param1: kotlin.jvm.functions.Function2<any,any,any>): any;
			public get(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
			public get(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
			public plus(context: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public constructor(left: kotlin.coroutines.CoroutineContext, element: kotlin.coroutines.CoroutineContext.Element);
			public fold(initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public equals(other: any): boolean;
			public toString(): string;
			public plus(param0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public equals(obj: any): boolean;
			public minusKey(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			public hashCode(): number;
		}
		export module CombinedContext {
			export class Serialized extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<kotlin.coroutines.CombinedContext.Serialized>;
				public constructor(elements: kotlin.coroutines.CoroutineContext[]);
				public getElements(): kotlin.coroutines.CoroutineContext[];
			}
			export module Serialized {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kotlin.coroutines.CombinedContext.Serialized.Companion>;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export class Continuation<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.coroutines.Continuation<any>>;
			/**
			 * Constructs a new instance of the kotlin.coroutines.Continuation<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getContext(): kotlin.coroutines.CoroutineContext;
				resumeWith(param0: any): void;
			});
			public constructor();
			public getContext(): kotlin.coroutines.CoroutineContext;
			public resumeWith(param0: any): void;
		}
	}
}

declare module kotlin {
	export module coroutines {
		export class ContinuationInterceptor extends java.lang.Object implements kotlin.coroutines.CoroutineContext.Element {
			public static class: java.lang.Class<kotlin.coroutines.ContinuationInterceptor>;
			/**
			 * Constructs a new instance of the kotlin.coroutines.ContinuationInterceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				interceptContinuation(param0: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<any>;
				releaseInterceptedContinuation(param0: kotlin.coroutines.Continuation<any>): void;
				get(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
				minusKey(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
				"<clinit>"(): void;
				getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
				get(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
				fold(param0: any, param1: kotlin.jvm.functions.Function2<any,any,any>): any;
				minusKey(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
				get(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
				fold(param0: any, param1: kotlin.jvm.functions.Function2<any,any,any>): any;
				plus(param0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
				minusKey(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			});
			public constructor();
			public fold(param0: any, param1: kotlin.jvm.functions.Function2<any,any,any>): any;
			public plus(param0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public releaseInterceptedContinuation(param0: kotlin.coroutines.Continuation<any>): void;
			public getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
			public get(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
			public interceptContinuation(param0: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<any>;
			public minusKey(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
		}
		export module ContinuationInterceptor {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.coroutines.ContinuationInterceptor.DefaultImpls>;
				public static plus($this: kotlin.coroutines.ContinuationInterceptor, context: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
				public static fold($this: kotlin.coroutines.ContinuationInterceptor, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
				public static minusKey($this: kotlin.coroutines.ContinuationInterceptor, key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
				public static get($this: kotlin.coroutines.ContinuationInterceptor, key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
				public static releaseInterceptedContinuation($this: kotlin.coroutines.ContinuationInterceptor, continuation: kotlin.coroutines.Continuation<any>): void;
			}
			export class Key extends kotlin.coroutines.CoroutineContext.Key<kotlin.coroutines.ContinuationInterceptor> {
				public static class: java.lang.Class<kotlin.coroutines.ContinuationInterceptor.Key>;
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export class CoroutineContext extends java.lang.Object {
			public static class: java.lang.Class<kotlin.coroutines.CoroutineContext>;
			/**
			 * Constructs a new instance of the kotlin.coroutines.CoroutineContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				get(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
				fold(param0: any, param1: kotlin.jvm.functions.Function2<any,any,any>): any;
				plus(param0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
				minusKey(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			});
			public constructor();
			public fold(param0: any, param1: kotlin.jvm.functions.Function2<any,any,any>): any;
			public plus(param0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public get(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
			public minusKey(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
		}
		export module CoroutineContext {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.coroutines.CoroutineContext.DefaultImpls>;
				public static plus($this: kotlin.coroutines.CoroutineContext, context: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			}
			export class Element extends java.lang.Object implements kotlin.coroutines.CoroutineContext {
				public static class: java.lang.Class<kotlin.coroutines.CoroutineContext.Element>;
				/**
				 * Constructs a new instance of the kotlin.coroutines.CoroutineContext$Element interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
					get(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
					fold(param0: any, param1: kotlin.jvm.functions.Function2<any,any,any>): any;
					minusKey(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
					get(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
					fold(param0: any, param1: kotlin.jvm.functions.Function2<any,any,any>): any;
					plus(param0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
					minusKey(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
				});
				public constructor();
				public get(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
				public fold(param0: any, param1: kotlin.jvm.functions.Function2<any,any,any>): any;
				public minusKey(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
				public getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
				public plus(param0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			}
			export module Element {
				export class DefaultImpls extends java.lang.Object {
					public static class: java.lang.Class<kotlin.coroutines.CoroutineContext.Element.DefaultImpls>;
					public static get($this: kotlin.coroutines.CoroutineContext.Element, key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
					public static minusKey($this: kotlin.coroutines.CoroutineContext.Element, key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
					public static fold($this: kotlin.coroutines.CoroutineContext.Element, initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
					public static plus($this: kotlin.coroutines.CoroutineContext.Element, context: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
				}
			}
			export class Key<E>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.coroutines.CoroutineContext.Key<any>>;
				/**
				 * Constructs a new instance of the kotlin.coroutines.CoroutineContext$Key interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export class EmptyCoroutineContext extends java.lang.Object implements kotlin.coroutines.CoroutineContext, java.io.Serializable {
			public static class: java.lang.Class<kotlin.coroutines.EmptyCoroutineContext>;
			public static INSTANCE: kotlin.coroutines.EmptyCoroutineContext;
			public fold(initial: any, operation: kotlin.jvm.functions.Function2<any,any,any>): any;
			public minusKey(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			public fold(param0: any, param1: kotlin.jvm.functions.Function2<any,any,any>): any;
			public get(key: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
			public toString(): string;
			public plus(param0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public get(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
			public plus(context: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public minusKey(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module coroutines {
		export class RestrictsSuspension extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.coroutines.RestrictsSuspension>;
			/**
			 * Constructs a new instance of the kotlin.coroutines.RestrictsSuspension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module coroutines {
		export class SafeContinuation<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.coroutines.SafeContinuation<any>>;
			public getContext(): kotlin.coroutines.CoroutineContext;
			public getCallerFrame(): kotlin.coroutines.jvm.internal.CoroutineStackFrame;
			public constructor(delegate: kotlin.coroutines.Continuation<any>);
			public toString(): string;
			public resumeWith(param0: any): void;
			public constructor(delegate: kotlin.coroutines.Continuation<any>, initialResult: any);
			public resumeWith(result: any): void;
			public getStackTraceElement(): java.lang.StackTraceElement;
			public getOrThrow(): any;
		}
		export module SafeContinuation {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.coroutines.SafeContinuation.Companion>;
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module intrinsics {
			export class CoroutineSingletons {
				public static class: java.lang.Class<kotlin.coroutines.intrinsics.CoroutineSingletons>;
				public static COROUTINE_SUSPENDED: kotlin.coroutines.intrinsics.CoroutineSingletons;
				public static UNDECIDED: kotlin.coroutines.intrinsics.CoroutineSingletons;
				public static RESUMED: kotlin.coroutines.intrinsics.CoroutineSingletons;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static getEntries(): kotlin.enums.EnumEntries<kotlin.coroutines.intrinsics.CoroutineSingletons>;
				public static values(): kotlin.coroutines.intrinsics.CoroutineSingletons[];
				public static valueOf(value: string): kotlin.coroutines.intrinsics.CoroutineSingletons;
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export abstract class BaseContinuationImpl extends java.lang.Object {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.BaseContinuationImpl>;
					public toString(): string;
					public getCompletion(): kotlin.coroutines.Continuation<any>;
					public create(completion: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<kotlin.Unit>;
					public create(value: any, completion: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<kotlin.Unit>;
					public getCallerFrame(): kotlin.coroutines.jvm.internal.CoroutineStackFrame;
					public getContext(): kotlin.coroutines.CoroutineContext;
					public releaseIntercepted(): void;
					public resumeWith(param0: any): void;
					public constructor(completion: kotlin.coroutines.Continuation<any>);
					public getStackTraceElement(): java.lang.StackTraceElement;
					public resumeWith(result: any): void;
					public invokeSuspend(param0: any): any;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export class Boxing extends java.lang.Object {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.Boxing>;
					public static boxFloat(primitive: number): java.lang.Float;
					public static boxByte(primitive: number): java.lang.Byte;
					public static boxLong(primitive: number): java.lang.Long;
					public static boxShort(primitive: number): java.lang.Short;
					public static boxBoolean(primitive: boolean): java.lang.Boolean;
					public static boxChar(primitive: string): java.lang.Character;
					public static boxInt(primitive: number): java.lang.Integer;
					public static boxDouble(primitive: number): java.lang.Double;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export class CompletedContinuation extends kotlin.coroutines.Continuation<any> {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.CompletedContinuation>;
					public static INSTANCE: kotlin.coroutines.jvm.internal.CompletedContinuation;
					public toString(): string;
					public getContext(): kotlin.coroutines.CoroutineContext;
					public resumeWith(param0: any): void;
					public resumeWith(result: any): void;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export abstract class ContinuationImpl extends kotlin.coroutines.jvm.internal.BaseContinuationImpl {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.ContinuationImpl>;
					public constructor(completion: kotlin.coroutines.Continuation<any>, _context: kotlin.coroutines.CoroutineContext);
					public getContext(): kotlin.coroutines.CoroutineContext;
					public intercepted(): kotlin.coroutines.Continuation<any>;
					public getCallerFrame(): kotlin.coroutines.jvm.internal.CoroutineStackFrame;
					public releaseIntercepted(): void;
					public resumeWith(param0: any): void;
					public constructor(completion: kotlin.coroutines.Continuation<any>);
					public getStackTraceElement(): java.lang.StackTraceElement;
					public resumeWith(result: any): void;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export class CoroutineStackFrame extends java.lang.Object {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.CoroutineStackFrame>;
					/**
					 * Constructs a new instance of the kotlin.coroutines.jvm.internal.CoroutineStackFrame interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getCallerFrame(): kotlin.coroutines.jvm.internal.CoroutineStackFrame;
						getStackTraceElement(): java.lang.StackTraceElement;
					});
					public constructor();
					public getCallerFrame(): kotlin.coroutines.jvm.internal.CoroutineStackFrame;
					public getStackTraceElement(): java.lang.StackTraceElement;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export class DebugMetadata extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.DebugMetadata>;
					/**
					 * Constructs a new instance of the kotlin.coroutines.jvm.internal.DebugMetadata interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						v(): number;
						f(): string;
						l(): number[];
						n(): string[];
						s(): string[];
						i(): number[];
						m(): string;
						c(): string;
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public c(): string;
					public equals(obj: any): boolean;
					public v(): number;
					public annotationType(): java.lang.Class<any>;
					public f(): string;
					public n(): string[];
					public equals(param0: any): boolean;
					public toString(): string;
					public i(): number[];
					public l(): number[];
					public s(): string[];
					public m(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export class ModuleNameRetriever extends java.lang.Object {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.ModuleNameRetriever>;
					public static INSTANCE: kotlin.coroutines.jvm.internal.ModuleNameRetriever;
					public getModuleName(continuation: kotlin.coroutines.jvm.internal.BaseContinuationImpl): string;
				}
				export module ModuleNameRetriever {
					export class Cache extends java.lang.Object {
						public static class: java.lang.Class<kotlin.coroutines.jvm.internal.ModuleNameRetriever.Cache>;
						public getModuleMethod: java.lang.reflect.Method;
						public getDescriptorMethod: java.lang.reflect.Method;
						public nameMethod: java.lang.reflect.Method;
						public constructor(getModuleMethod: java.lang.reflect.Method, getDescriptorMethod: java.lang.reflect.Method, nameMethod: java.lang.reflect.Method);
					}
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export abstract class RestrictedContinuationImpl extends kotlin.coroutines.jvm.internal.BaseContinuationImpl {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.RestrictedContinuationImpl>;
					public getContext(): kotlin.coroutines.CoroutineContext;
					public getCallerFrame(): kotlin.coroutines.jvm.internal.CoroutineStackFrame;
					public resumeWith(param0: any): void;
					public constructor(completion: kotlin.coroutines.Continuation<any>);
					public getStackTraceElement(): java.lang.StackTraceElement;
					public resumeWith(result: any): void;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export abstract class RestrictedSuspendLambda extends kotlin.coroutines.jvm.internal.RestrictedContinuationImpl {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.RestrictedSuspendLambda>;
					public getArity(): number;
					public toString(): string;
					public constructor(arity: number);
					public getContext(): kotlin.coroutines.CoroutineContext;
					public getCallerFrame(): kotlin.coroutines.jvm.internal.CoroutineStackFrame;
					public resumeWith(param0: any): void;
					public constructor(completion: kotlin.coroutines.Continuation<any>);
					public constructor(arity: number, completion: kotlin.coroutines.Continuation<any>);
					public getStackTraceElement(): java.lang.StackTraceElement;
					public resumeWith(result: any): void;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export class RunSuspend extends kotlin.coroutines.Continuation<kotlin.Unit> {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.RunSuspend>;
					public constructor();
					public getContext(): kotlin.coroutines.CoroutineContext;
					public "getResult-xLWZpok"(): kotlin.Result<kotlin.Unit>;
					public await(): void;
					public resumeWith(param0: any): void;
					public setResult(_set_: kotlin.Result<kotlin.Unit>): void;
					public resumeWith(result: any): void;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export class SuspendFunction extends java.lang.Object {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.SuspendFunction>;
					/**
					 * Constructs a new instance of the kotlin.coroutines.jvm.internal.SuspendFunction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export abstract class SuspendLambda extends kotlin.coroutines.jvm.internal.ContinuationImpl {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.SuspendLambda>;
					public constructor(completion: kotlin.coroutines.Continuation<any>, _context: kotlin.coroutines.CoroutineContext);
					public getArity(): number;
					public toString(): string;
					public constructor(arity: number);
					public getContext(): kotlin.coroutines.CoroutineContext;
					public getCallerFrame(): kotlin.coroutines.jvm.internal.CoroutineStackFrame;
					public resumeWith(param0: any): void;
					public constructor(completion: kotlin.coroutines.Continuation<any>);
					public constructor(arity: number, completion: kotlin.coroutines.Continuation<any>);
					public getStackTraceElement(): java.lang.StackTraceElement;
					public resumeWith(result: any): void;
				}
			}
		}
	}
}

declare module kotlin {
	export module enums {
		export class EnumEntries<E>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.enums.EnumEntries<any>>;
			/**
			 * Constructs a new instance of the kotlin.enums.EnumEntries<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				size(): number;
				isEmpty(): boolean;
				contains(param0: any): boolean;
				iterator(): java.util.Iterator<E>;
				toArray(): any[];
				toArray(param0: any[]): any[];
				add(param0: E): boolean;
				remove(param0: any): boolean;
				containsAll(param0: java.util.Collection<any>): boolean;
				addAll(param0: java.util.Collection<any>): boolean;
				addAll(param0: number, param1: java.util.Collection<any>): boolean;
				removeAll(param0: java.util.Collection<any>): boolean;
				retainAll(param0: java.util.Collection<any>): boolean;
				clear(): void;
				equals(param0: any): boolean;
				hashCode(): number;
				get(param0: number): E;
				set(param0: number, param1: E): E;
				add(param0: number, param1: E): void;
				remove(param0: number): E;
				indexOf(param0: any): number;
				lastIndexOf(param0: any): number;
				listIterator(): java.util.ListIterator<E>;
				listIterator(param0: number): java.util.ListIterator<E>;
				subList(param0: number, param1: number): java.util.List<E>;
				spliterator(): java.util.Spliterator<E>;
				replaceAll(operator: any /* any*/): void;
				sort(c: java.util.Comparator<any>): void;
				size(): number;
				isEmpty(): boolean;
				contains(param0: any): boolean;
				iterator(): java.util.Iterator<E>;
				toArray(): any[];
				toArray(param0: any[]): any[];
				add(param0: E): boolean;
				remove(param0: any): boolean;
				containsAll(param0: java.util.Collection<any>): boolean;
				addAll(param0: java.util.Collection<any>): boolean;
				removeAll(param0: java.util.Collection<any>): boolean;
				removeIf(filter: any /* any*/): boolean;
				retainAll(param0: java.util.Collection<any>): boolean;
				clear(): void;
				equals(param0: any): boolean;
				hashCode(): number;
				spliterator(): java.util.Spliterator<E>;
				stream(): java.util.stream.Stream<E>;
				parallelStream(): java.util.stream.Stream<E>;
				iterator(): java.util.Iterator<any>;
				forEach(action: any /* any*/): void;
				spliterator(): java.util.Spliterator<any>;
			});
			public constructor();
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public equals(param0: any): boolean;
			public iterator(): java.util.Iterator<E>;
			public toArray(param0: any[]): any[];
			public get(param0: number): E;
			public spliterator(): java.util.Spliterator<E>;
			public contains(param0: any): boolean;
			public listIterator(param0: number): java.util.ListIterator<E>;
			public subList(param0: number, param1: number): java.util.List<E>;
			public removeIf(filter: any /* any*/): boolean;
			public stream(): java.util.stream.Stream<E>;
			public sort(c: java.util.Comparator<any>): void;
			public toArray(): any[];
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public add(param0: number, param1: E): void;
			public parallelStream(): java.util.stream.Stream<E>;
			public add(param0: E): boolean;
			public set(param0: number, param1: E): E;
			public listIterator(): java.util.ListIterator<E>;
			public forEach(action: any /* any*/): void;
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public lastIndexOf(param0: any): number;
			public equals(obj: any): boolean;
			public remove(param0: number): E;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public indexOf(param0: any): number;
			public replaceAll(operator: any /* any*/): void;
			public spliterator(): java.util.Spliterator<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module enums {
		export class EnumEntriesList<T>  extends kotlin.collections.AbstractList<any> {
			public static class: java.lang.Class<kotlin.enums.EnumEntriesList<any>>;
			public add(element: any): boolean;
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public toArray(param0: any[]): any[];
			public addAll(elements: java.util.Collection<any>): boolean;
			public subList(fromIndex: number, toIndex: number): java.util.List<any>;
			public removeAll(elements: java.util.Collection<any>): boolean;
			public replaceAll(operator: any /* any*/): void;
			public equals(other: any): boolean;
			public contains(element: any): boolean;
			public sort(c: java.util.Comparator<any>): void;
			public clear(): void;
			public listIterator(param0: number): java.util.ListIterator<any>;
			public constructor();
			public forEach(action: any /* any*/): void;
			public addAll(param0: java.util.Collection<any>): boolean;
			public set(param0: number, param1: any): any;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public lastIndexOf(param0: any): number;
			public add(param0: any): boolean;
			public remove(element: any): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public set(index: number, element: any): any;
			public get(index: number): any;
			public equals(param0: any): boolean;
			public stream(): java.util.stream.Stream<any>;
			public remove(param0: number): any;
			public getSize(): number;
			public contains(param0: any): boolean;
			public toArray(array: any[]): any[];
			public constructor(entries: any[]);
			public addAll(index: number, elements: java.util.Collection<any>): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public get(param0: number): any;
			public toArray(): any[];
			public remove(index: number): any;
			public lastIndexOf(element: any): number;
			public add(param0: number, param1: any): void;
			public iterator(): java.util.Iterator<any>;
			public size(): number;
			public isEmpty(): boolean;
			public listIterator(index: number): java.util.ListIterator<any>;
			public indexOf(element: any): number;
			public containsAll(elements: java.util.Collection<any>): boolean;
			public subList(param0: number, param1: number): java.util.List<any>;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public listIterator(): java.util.ListIterator<any>;
			public add(index: number, element: any): void;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public retainAll(elements: java.util.Collection<any>): boolean;
			public indexOf(param0: any): number;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module enums {
		export class EnumEntriesSerializationProxy<E>  extends java.io.Serializable {
			public static class: java.lang.Class<kotlin.enums.EnumEntriesSerializationProxy<any>>;
			public constructor(entries: any[]);
		}
		export module EnumEntriesSerializationProxy {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.enums.EnumEntriesSerializationProxy.Companion>;
			}
		}
	}
}

declare module kotlin {
	export module experimental {
		export class ExperimentalNativeApi extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.experimental.ExperimentalNativeApi>;
			/**
			 * Constructs a new instance of the kotlin.experimental.ExperimentalNativeApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module experimental {
		export class ExperimentalObjCName extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.experimental.ExperimentalObjCName>;
			/**
			 * Constructs a new instance of the kotlin.experimental.ExperimentalObjCName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module experimental {
		export class ExperimentalObjCRefinement extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.experimental.ExperimentalObjCRefinement>;
			/**
			 * Constructs a new instance of the kotlin.experimental.ExperimentalObjCRefinement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module experimental {
		export class ExperimentalTypeInference extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.experimental.ExperimentalTypeInference>;
			/**
			 * Constructs a new instance of the kotlin.experimental.ExperimentalTypeInference interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class AccessibleLateinitPropertyLiteral extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.AccessibleLateinitPropertyLiteral>;
			/**
			 * Constructs a new instance of the kotlin.internal.AccessibleLateinitPropertyLiteral interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class ContractsDsl extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.ContractsDsl>;
			/**
			 * Constructs a new instance of the kotlin.internal.ContractsDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class DynamicExtension extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.DynamicExtension>;
			/**
			 * Constructs a new instance of the kotlin.internal.DynamicExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class Exact extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.Exact>;
			/**
			 * Constructs a new instance of the kotlin.internal.Exact interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class HidesMembers extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.HidesMembers>;
			/**
			 * Constructs a new instance of the kotlin.internal.HidesMembers interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class InlineOnly extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.InlineOnly>;
			/**
			 * Constructs a new instance of the kotlin.internal.InlineOnly interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class IntrinsicConstEvaluation extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.IntrinsicConstEvaluation>;
			/**
			 * Constructs a new instance of the kotlin.internal.IntrinsicConstEvaluation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class LowPriorityInOverloadResolution extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.LowPriorityInOverloadResolution>;
			/**
			 * Constructs a new instance of the kotlin.internal.LowPriorityInOverloadResolution interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class NoInfer extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.NoInfer>;
			/**
			 * Constructs a new instance of the kotlin.internal.NoInfer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class OnlyInputTypes extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.OnlyInputTypes>;
			/**
			 * Constructs a new instance of the kotlin.internal.OnlyInputTypes interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class PlatformDependent extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.PlatformDependent>;
			/**
			 * Constructs a new instance of the kotlin.internal.PlatformDependent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class PlatformImplementations extends java.lang.Object {
			public static class: java.lang.Class<kotlin.internal.PlatformImplementations>;
			public getSuppressed(exception: java.lang.Throwable): java.util.List<java.lang.Throwable>;
			public getMatchResultNamedGroup(matchResult: java.util.regex.MatchResult, name: string): kotlin.text.MatchGroup;
			public defaultPlatformRandom(): kotlin.random.Random;
			public constructor();
			public addSuppressed(cause: java.lang.Throwable, exception: java.lang.Throwable): void;
		}
		export module PlatformImplementations {
			export class ReflectThrowable extends java.lang.Object {
				public static class: java.lang.Class<kotlin.internal.PlatformImplementations.ReflectThrowable>;
				public static INSTANCE: kotlin.internal.PlatformImplementations.ReflectThrowable;
				public static addSuppressed: java.lang.reflect.Method;
				public static getSuppressed: java.lang.reflect.Method;
			}
		}
	}
}

declare module kotlin {
	export module internal {
		export class PureReifiable extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.PureReifiable>;
			/**
			 * Constructs a new instance of the kotlin.internal.PureReifiable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class RequireKotlin extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.internal.RequireKotlin>;
			/**
			 * Constructs a new instance of the kotlin.internal.RequireKotlin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				version(): string;
				message(): string;
				level(): kotlin.DeprecationLevel;
				versionKind(): kotlin.internal.RequireKotlinVersionKind;
				errorCode(): number;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public versionKind(): kotlin.internal.RequireKotlinVersionKind;
			public message(): string;
			public errorCode(): number;
			public level(): kotlin.DeprecationLevel;
			public annotationType(): java.lang.Class<any>;
			public version(): string;
			public hashCode(): number;
		}
		export module RequireKotlin {
			export class Container extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<kotlin.internal.RequireKotlin.Container>;
				/**
				 * Constructs a new instance of the kotlin.internal.RequireKotlin$Container interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					value(): kotlin.internal.RequireKotlin[];
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public value(): kotlin.internal.RequireKotlin[];
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module kotlin {
	export module internal {
		export class RequireKotlinVersionKind {
			public static class: java.lang.Class<kotlin.internal.RequireKotlinVersionKind>;
			public static LANGUAGE_VERSION: kotlin.internal.RequireKotlinVersionKind;
			public static COMPILER_VERSION: kotlin.internal.RequireKotlinVersionKind;
			public static API_VERSION: kotlin.internal.RequireKotlinVersionKind;
			public static getEntries(): kotlin.enums.EnumEntries<kotlin.internal.RequireKotlinVersionKind>;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public static valueOf(value: string): kotlin.internal.RequireKotlinVersionKind;
			public static values(): kotlin.internal.RequireKotlinVersionKind[];
		}
	}
}

declare module kotlin {
	export module internal {
		export module jdk7 {
			export class JDK7PlatformImplementations extends kotlin.internal.PlatformImplementations {
				public static class: java.lang.Class<kotlin.internal.jdk7.JDK7PlatformImplementations>;
				public addSuppressed(cause: java.lang.Throwable, exception: java.lang.Throwable): void;
				public getSuppressed(exception: java.lang.Throwable): java.util.List<java.lang.Throwable>;
				public constructor();
			}
			export module JDK7PlatformImplementations {
				export class ReflectSdkVersion extends java.lang.Object {
					public static class: java.lang.Class<kotlin.internal.jdk7.JDK7PlatformImplementations.ReflectSdkVersion>;
					public static INSTANCE: kotlin.internal.jdk7.JDK7PlatformImplementations.ReflectSdkVersion;
					public static sdkVersion: java.lang.Integer;
				}
			}
		}
	}
}

declare module kotlin {
	export module internal {
		export module jdk8 {
			export class JDK8PlatformImplementations extends kotlin.internal.jdk7.JDK7PlatformImplementations {
				public static class: java.lang.Class<kotlin.internal.jdk8.JDK8PlatformImplementations>;
				public defaultPlatformRandom(): kotlin.random.Random;
				public getMatchResultNamedGroup(matchResult: java.util.regex.MatchResult, name: string): kotlin.text.MatchGroup;
				public constructor();
			}
			export module JDK8PlatformImplementations {
				export class ReflectSdkVersion extends java.lang.Object {
					public static class: java.lang.Class<kotlin.internal.jdk8.JDK8PlatformImplementations.ReflectSdkVersion>;
					public static INSTANCE: kotlin.internal.jdk8.JDK8PlatformImplementations.ReflectSdkVersion;
					public static sdkVersion: java.lang.Integer;
				}
			}
		}
	}
}

declare module kotlin {
	export module io {
		export class AccessDeniedException extends kotlin.io.FileSystemException {
			public static class: java.lang.Class<kotlin.io.AccessDeniedException>;
			public constructor(message: string);
			public constructor(file: java.io.File, other: java.io.File, reason: string);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
		}
	}
}

declare module kotlin {
	export module io {
		export class ExposingBufferByteArrayOutputStream extends java.io.ByteArrayOutputStream {
			public static class: java.lang.Class<kotlin.io.ExposingBufferByteArrayOutputStream>;
			public flush(): void;
			public constructor(size: number);
			public constructor();
			public close(): void;
			public getBuffer(): number[];
		}
	}
}

declare module kotlin {
	export module io {
		export class FileAlreadyExistsException extends kotlin.io.FileSystemException {
			public static class: java.lang.Class<kotlin.io.FileAlreadyExistsException>;
			public constructor(message: string);
			public constructor(file: java.io.File, other: java.io.File, reason: string);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
		}
	}
}

declare module kotlin {
	export module io {
		export class FilePathComponents extends java.lang.Object {
			public static class: java.lang.Class<kotlin.io.FilePathComponents>;
			public getSegments(): java.util.List<java.io.File>;
			public component1(): java.io.File;
			public subPath(beginIndex: number, endIndex: number): java.io.File;
			public getRoot(): java.io.File;
			public getSize(): number;
			public component2(): java.util.List<java.io.File>;
			public equals(other: any): boolean;
			public constructor(root: java.io.File, segments: java.util.List<any>);
			public toString(): string;
			public equals(obj: any): boolean;
			public copy(root: java.io.File, segments: java.util.List<any>): kotlin.io.FilePathComponents;
			public isRooted(): boolean;
			public getRootName(): string;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module io {
		export class FileSystemException extends java.io.IOException {
			public static class: java.lang.Class<kotlin.io.FileSystemException>;
			public constructor(message: string);
			public getFile(): java.io.File;
			public getReason(): string;
			public constructor(file: java.io.File, other: java.io.File, reason: string);
			public getOther(): java.io.File;
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
		}
	}
}

declare module kotlin {
	export module io {
		export class FileTreeWalk extends kotlin.sequences.Sequence<java.io.File> {
			public static class: java.lang.Class<kotlin.io.FileTreeWalk>;
			public constructor(start: java.io.File, direction: kotlin.io.FileWalkDirection);
			public onFail(_function_: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): kotlin.io.FileTreeWalk;
			public onEnter(_function_: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): kotlin.io.FileTreeWalk;
			public iterator(): java.util.Iterator<java.io.File>;
			public onLeave(_function_: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kotlin.io.FileTreeWalk;
			public maxDepth(depth: number): kotlin.io.FileTreeWalk;
			public iterator(): java.util.Iterator<any>;
		}
		export module FileTreeWalk {
			export abstract class DirectoryState extends kotlin.io.FileTreeWalk.WalkState {
				public static class: java.lang.Class<kotlin.io.FileTreeWalk.DirectoryState>;
				public constructor(root: java.io.File);
				public constructor(rootDir: java.io.File);
			}
			export class FileTreeWalkIterator extends kotlin.collections.AbstractIterator<java.io.File> {
				public static class: java.lang.Class<kotlin.io.FileTreeWalk.FileTreeWalkIterator>;
				public constructor(this$0: kotlin.io.FileTreeWalk);
				public computeNext(): void;
				public constructor();
			}
			export module FileTreeWalkIterator {
				export class BottomUpDirectoryState extends kotlin.io.FileTreeWalk.DirectoryState {
					public static class: java.lang.Class<kotlin.io.FileTreeWalk.FileTreeWalkIterator.BottomUpDirectoryState>;
					public constructor(this$0: java.io.File);
					public constructor(rootDir: java.io.File);
					public step(): java.io.File;
				}
				export class SingleFileState extends kotlin.io.FileTreeWalk.WalkState {
					public static class: java.lang.Class<kotlin.io.FileTreeWalk.FileTreeWalkIterator.SingleFileState>;
					public constructor(root: java.io.File);
					public constructor(this$0: java.io.File);
					public step(): java.io.File;
				}
				export class TopDownDirectoryState extends kotlin.io.FileTreeWalk.DirectoryState {
					public static class: java.lang.Class<kotlin.io.FileTreeWalk.FileTreeWalkIterator.TopDownDirectoryState>;
					public constructor(this$0: java.io.File);
					public constructor(rootDir: java.io.File);
					public step(): java.io.File;
				}
				export class WhenMappings extends java.lang.Object {
					public static class: java.lang.Class<kotlin.io.FileTreeWalk.FileTreeWalkIterator.WhenMappings>;
				}
			}
			export abstract class WalkState extends java.lang.Object {
				public static class: java.lang.Class<kotlin.io.FileTreeWalk.WalkState>;
				public getRoot(): java.io.File;
				public step(): java.io.File;
				public constructor(root: java.io.File);
			}
		}
	}
}

declare module kotlin {
	export module io {
		export class FileWalkDirection {
			public static class: java.lang.Class<kotlin.io.FileWalkDirection>;
			public static TOP_DOWN: kotlin.io.FileWalkDirection;
			public static BOTTOM_UP: kotlin.io.FileWalkDirection;
			public static valueOf(value: string): kotlin.io.FileWalkDirection;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public static getEntries(): kotlin.enums.EnumEntries<kotlin.io.FileWalkDirection>;
			public static values(): kotlin.io.FileWalkDirection[];
		}
	}
}

declare module kotlin {
	export module io {
		export class LineReader extends java.lang.Object {
			public static class: java.lang.Class<kotlin.io.LineReader>;
			public static INSTANCE: kotlin.io.LineReader;
			public readLine(inputStream: java.io.InputStream, charset: java.nio.charset.Charset): string;
		}
	}
}

declare module kotlin {
	export module io {
		export class LinesSequence extends kotlin.sequences.Sequence<string> {
			public static class: java.lang.Class<kotlin.io.LinesSequence>;
			public iterator(): java.util.Iterator<string>;
			public constructor(reader: java.io.BufferedReader);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module io {
		export class NoSuchFileException extends kotlin.io.FileSystemException {
			public static class: java.lang.Class<kotlin.io.NoSuchFileException>;
			public constructor(message: string);
			public constructor(file: java.io.File, other: java.io.File, reason: string);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
		}
	}
}

declare module kotlin {
	export module io {
		export class OnErrorAction {
			public static class: java.lang.Class<kotlin.io.OnErrorAction>;
			public static SKIP: kotlin.io.OnErrorAction;
			public static TERMINATE: kotlin.io.OnErrorAction;
			public static values(): kotlin.io.OnErrorAction[];
			public static valueOf(value: string): kotlin.io.OnErrorAction;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public static getEntries(): kotlin.enums.EnumEntries<kotlin.io.OnErrorAction>;
		}
	}
}

declare module kotlin {
	export module io {
		export class ReadAfterEOFException extends java.lang.RuntimeException {
			public static class: java.lang.Class<kotlin.io.ReadAfterEOFException>;
			public constructor(message: string);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
		}
	}
}

declare module kotlin {
	export module io {
		export class TerminateException extends kotlin.io.FileSystemException {
			public static class: java.lang.Class<kotlin.io.TerminateException>;
			public constructor(message: string);
			public constructor(file: java.io.File, other: java.io.File, reason: string);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
			public constructor(file: java.io.File);
		}
	}
}

declare module kotlin {
	export module io {
		export module encoding {
			export class Base64 extends java.lang.Object {
				public static class: java.lang.Class<kotlin.io.encoding.Base64>;
				public static bytesPerGroup: number;
				public static symbolsPerGroup: number;
				public static padSymbol: number;
				public static mimeLineLength: number;
				public decode(source: number[], startIndex: number, endIndex: number): number[];
				public encodeToByteArray(source: number[], startIndex: number, endIndex: number): number[];
				public checkSourceBounds$kotlin_stdlib(sourceSize: number, startIndex: number, endIndex: number): void;
				public decode(source: string, startIndex: number, endIndex: number): number[];
				public decodeIntoByteArray(source: string, destination: number[], destinationOffset: number, startIndex: number, endIndex: number): number;
				public encodeIntoByteArray(source: number[], destination: number[], destinationOffset: number, startIndex: number, endIndex: number): number;
				public encode(source: number[], startIndex: number, endIndex: number): string;
				public isMimeScheme$kotlin_stdlib(): boolean;
				public bytesToStringImpl$kotlin_stdlib(source: number[]): string;
				public charsToBytesImpl$kotlin_stdlib(source: string, startIndex: number, endIndex: number): number[];
				public isUrlSafe$kotlin_stdlib(): boolean;
				public decodeIntoByteArray(source: number[], destination: number[], destinationOffset: number, startIndex: number, endIndex: number): number;
				public encodeToByteArrayImpl$kotlin_stdlib(source: number[], startIndex: number, endIndex: number): number[];
				public encodeIntoByteArrayImpl$kotlin_stdlib(source: number[], destination: number[], destinationOffset: number, startIndex: number, endIndex: number): number;
				public encodeToAppendable(source: number[], destination: java.lang.Appendable, startIndex: number, endIndex: number): java.lang.Appendable;
			}
			export module Base64 {
				export class Default extends kotlin.io.encoding.Base64 {
					public static class: java.lang.Class<kotlin.io.encoding.Base64.Default>;
					public getUrlSafe(): kotlin.io.encoding.Base64;
					public getMime(): kotlin.io.encoding.Base64;
					public getMimeLineSeparatorSymbols$kotlin_stdlib(): number[];
				}
			}
		}
	}
}

declare module kotlin {
	export module io {
		export module encoding {
			export class DecodeInputStream extends java.io.InputStream {
				public static class: java.lang.Class<kotlin.io.encoding.DecodeInputStream>;
				public constructor(input: java.io.InputStream, base64: kotlin.io.encoding.Base64);
				public read(): number;
				public read(b: number[], off: number, len: number): number;
				public close(): void;
				public read(b: number[]): number;
				public read(destination: number[], offset: number, length: number): number;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module io {
		export module encoding {
			export class EncodeOutputStream extends java.io.OutputStream {
				public static class: java.lang.Class<kotlin.io.encoding.EncodeOutputStream>;
				public write(b: number): void;
				public close(): void;
				public write(param0: number): void;
				public write(b: number[], off: number, len: number): void;
				public write(b: number[]): void;
				public constructor(output: java.io.OutputStream, base64: kotlin.io.encoding.Base64);
				public constructor();
				public write(source: number[], offset: number, length: number): void;
				public flush(): void;
			}
		}
	}
}

declare module kotlin {
	export module io {
		export module encoding {
			export class ExperimentalEncodingApi extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<kotlin.io.encoding.ExperimentalEncodingApi>;
				/**
				 * Constructs a new instance of the kotlin.io.encoding.ExperimentalEncodingApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module kotlin {
	export module io {
		export module path {
			export class CopyActionContext extends java.lang.Object {
				public static class: java.lang.Class<kotlin.io.path.CopyActionContext>;
				/**
				 * Constructs a new instance of the kotlin.io.path.CopyActionContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					copyToIgnoringExistingDirectory(param0: java.nio.file.Path, param1: java.nio.file.Path, param2: boolean): kotlin.io.path.CopyActionResult;
				});
				public constructor();
				public copyToIgnoringExistingDirectory(param0: java.nio.file.Path, param1: java.nio.file.Path, param2: boolean): kotlin.io.path.CopyActionResult;
			}
		}
	}
}

declare module kotlin {
	export module io {
		export module path {
			export class CopyActionResult {
				public static class: java.lang.Class<kotlin.io.path.CopyActionResult>;
				public static CONTINUE: kotlin.io.path.CopyActionResult;
				public static SKIP_SUBTREE: kotlin.io.path.CopyActionResult;
				public static TERMINATE: kotlin.io.path.CopyActionResult;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(value: string): kotlin.io.path.CopyActionResult;
				public static values(): kotlin.io.path.CopyActionResult[];
				public static getEntries(): kotlin.enums.EnumEntries<kotlin.io.path.CopyActionResult>;
			}
		}
	}
}

declare module kotlin {
	export module io {
		export module path {
			export class DefaultCopyActionContext extends java.lang.Object implements kotlin.io.path.CopyActionContext {
				public static class: java.lang.Class<kotlin.io.path.DefaultCopyActionContext>;
				public static INSTANCE: kotlin.io.path.DefaultCopyActionContext;
				public copyToIgnoringExistingDirectory(param0: java.nio.file.Path, param1: java.nio.file.Path, param2: boolean): kotlin.io.path.CopyActionResult;
				public copyToIgnoringExistingDirectory($this$copyToIgnoringExistingDirectory: java.nio.file.Path, target: java.nio.file.Path, followLinks: boolean): kotlin.io.path.CopyActionResult;
			}
		}
	}
}

declare module kotlin {
	export module io {
		export module path {
			export class DirectoryEntriesReader extends java.nio.file.SimpleFileVisitor<java.nio.file.Path> {
				public static class: java.lang.Class<kotlin.io.path.DirectoryEntriesReader>;
				public constructor(followLinks: boolean);
				public visitFile(file: java.nio.file.Path, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
				public preVisitDirectory(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
				public postVisitDirectory(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
				public constructor();
				public visitFileFailed(file: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
				public preVisitDirectory(dir: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
				public visitFileFailed(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
				public postVisitDirectory(dir: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
				public visitFile(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
				public visitFile(file: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
				public getFollowLinks(): boolean;
				public preVisitDirectory(dir: java.nio.file.Path, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
				public readEntries(directoryNode: kotlin.io.path.PathNode): java.util.List<kotlin.io.path.PathNode>;
			}
		}
	}
}

declare module kotlin {
	export module io {
		export module path {
			export class ExceptionsCollector extends java.lang.Object {
				public static class: java.lang.Class<kotlin.io.path.ExceptionsCollector>;
				public exitEntry(name: java.nio.file.Path): void;
				public getPath(): java.nio.file.Path;
				public getCollectedExceptions(): java.util.List<java.lang.Exception>;
				public collect(exception: java.lang.Exception): void;
				public enterEntry(name: java.nio.file.Path): void;
				public constructor(limit: number);
				public setPath(_set_: java.nio.file.Path): void;
				public getTotalExceptions(): number;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module io {
		export module path {
			export class ExperimentalPathApi extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<kotlin.io.path.ExperimentalPathApi>;
				/**
				 * Constructs a new instance of the kotlin.io.path.ExperimentalPathApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module kotlin {
	export module io {
		export module path {
			export class FileVisitorBuilder extends java.lang.Object {
				public static class: java.lang.Class<kotlin.io.path.FileVisitorBuilder>;
				/**
				 * Constructs a new instance of the kotlin.io.path.FileVisitorBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPreVisitDirectory(param0: kotlin.jvm.functions.Function2<any,any,any>): void;
					onVisitFile(param0: kotlin.jvm.functions.Function2<any,any,any>): void;
					onVisitFileFailed(param0: kotlin.jvm.functions.Function2<any,any,any>): void;
					onPostVisitDirectory(param0: kotlin.jvm.functions.Function2<any,any,any>): void;
				});
				public constructor();
				public onVisitFileFailed(param0: kotlin.jvm.functions.Function2<any,any,any>): void;
				public onVisitFile(param0: kotlin.jvm.functions.Function2<any,any,any>): void;
				public onPostVisitDirectory(param0: kotlin.jvm.functions.Function2<any,any,any>): void;
				public onPreVisitDirectory(param0: kotlin.jvm.functions.Function2<any,any,any>): void;
			}
		}
	}
}

declare module kotlin {
	export module io {
		export module path {
			export class FileVisitorBuilderImpl extends java.lang.Object implements kotlin.io.path.FileVisitorBuilder {
				public static class: java.lang.Class<kotlin.io.path.FileVisitorBuilderImpl>;
				public onVisitFile(_function_: kotlin.jvm.functions.Function2<any,any,any>): void;
				public build(): java.nio.file.FileVisitor<java.nio.file.Path>;
				public onPreVisitDirectory(_function_: kotlin.jvm.functions.Function2<any,any,any>): void;
				public onPostVisitDirectory(_function_: kotlin.jvm.functions.Function2<any,any,any>): void;
				public onVisitFileFailed(param0: kotlin.jvm.functions.Function2<any,any,any>): void;
				public onVisitFile(param0: kotlin.jvm.functions.Function2<any,any,any>): void;
				public onVisitFileFailed(_function_: kotlin.jvm.functions.Function2<any,any,any>): void;
				public onPostVisitDirectory(param0: kotlin.jvm.functions.Function2<any,any,any>): void;
				public constructor();
				public onPreVisitDirectory(param0: kotlin.jvm.functions.Function2<any,any,any>): void;
			}
		}
	}
}

declare module kotlin {
	export module io {
		export module path {
			export class FileVisitorImpl extends java.nio.file.SimpleFileVisitor<java.nio.file.Path> {
				public static class: java.lang.Class<kotlin.io.path.FileVisitorImpl>;
				public visitFile(file: java.nio.file.Path, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
				public postVisitDirectory(dir: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
				public preVisitDirectory(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
				public postVisitDirectory(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
				public constructor();
				public visitFileFailed(file: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
				public visitFileFailed(file: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
				public preVisitDirectory(dir: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
				public visitFileFailed(param0: any, param1: java.io.IOException): java.nio.file.FileVisitResult;
				public postVisitDirectory(dir: any, exc: java.io.IOException): java.nio.file.FileVisitResult;
				public visitFile(param0: any, param1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
				public visitFile(file: any, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
				public preVisitDirectory(dir: java.nio.file.Path, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
				public constructor(onPreVisitDirectory: kotlin.jvm.functions.Function2<any,any,any>, onVisitFile: kotlin.jvm.functions.Function2<any,any,any>, onVisitFileFailed: kotlin.jvm.functions.Function2<any,any,any>, onPostVisitDirectory: kotlin.jvm.functions.Function2<any,any,any>);
			}
		}
	}
}

declare module kotlin {
	export module io {
		export module path {
			export class LinkFollowing extends java.lang.Object {
				public static class: java.lang.Class<kotlin.io.path.LinkFollowing>;
				public static INSTANCE: kotlin.io.path.LinkFollowing;
				public toLinkOptions(followLinks: boolean): java.nio.file.LinkOption[];
				public toVisitOptions(followLinks: boolean): java.util.Set<java.nio.file.FileVisitOption>;
			}
		}
	}
}

declare module kotlin {
	export module io {
		export module path {
			export class OnErrorResult {
				public static class: java.lang.Class<kotlin.io.path.OnErrorResult>;
				public static SKIP_SUBTREE: kotlin.io.path.OnErrorResult;
				public static TERMINATE: kotlin.io.path.OnErrorResult;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): kotlin.io.path.OnErrorResult[];
				public static valueOf(value: string): kotlin.io.path.OnErrorResult;
				public static getEntries(): kotlin.enums.EnumEntries<kotlin.io.path.OnErrorResult>;
			}
		}
	}
}

declare module kotlin {
	export module io {
		export module path {
			export class PathNode extends java.lang.Object {
				public static class: java.lang.Class<kotlin.io.path.PathNode>;
				public getContentIterator(): java.util.Iterator<kotlin.io.path.PathNode>;
				public getPath(): java.nio.file.Path;
				public setContentIterator(_set_: java.util.Iterator<kotlin.io.path.PathNode>): void;
				public getKey(): any;
				public constructor(path: java.nio.file.Path, key: any, parent: kotlin.io.path.PathNode);
				public getParent(): kotlin.io.path.PathNode;
			}
		}
	}
}

declare module kotlin {
	export module io {
		export module path {
			export class PathRelativizer extends java.lang.Object {
				public static class: java.lang.Class<kotlin.io.path.PathRelativizer>;
				public static INSTANCE: kotlin.io.path.PathRelativizer;
				public tryRelativeTo(path: java.nio.file.Path, base: java.nio.file.Path): java.nio.file.Path;
			}
		}
	}
}

declare module kotlin {
	export module io {
		export module path {
			export class PathTreeWalk extends kotlin.sequences.Sequence<java.nio.file.Path> {
				public static class: java.lang.Class<kotlin.io.path.PathTreeWalk>;
				public iterator(): java.util.Iterator<java.nio.file.Path>;
				public iterator(): java.util.Iterator<any>;
				public constructor(start: java.nio.file.Path, options: kotlin.io.path.PathWalkOption[]);
			}
		}
	}
}

declare module kotlin {
	export module io {
		export module path {
			export class PathWalkOption {
				public static class: java.lang.Class<kotlin.io.path.PathWalkOption>;
				public static INCLUDE_DIRECTORIES: kotlin.io.path.PathWalkOption;
				public static BREADTH_FIRST: kotlin.io.path.PathWalkOption;
				public static FOLLOW_LINKS: kotlin.io.path.PathWalkOption;
				public static valueOf(value: string): kotlin.io.path.PathWalkOption;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static values(): kotlin.io.path.PathWalkOption[];
				public static getEntries(): kotlin.enums.EnumEntries<kotlin.io.path.PathWalkOption>;
			}
		}
	}
}

declare module kotlin {
	export module io {
		export module path {
			export module PathsKt__PathRecursiveFunctionsKt {
export module  {
				export class WhenMappings extends java.lang.Object {
					public static class: java.lang.Class<kotlin.io.path.PathsKt__PathRecursiveFunctionsKt.WhenMappings>;
				}
			}
		}
	}
}

declare module kotlin {
	export module js {
		export class ExperimentalJsExport extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.js.ExperimentalJsExport>;
			/**
			 * Constructs a new instance of the kotlin.js.ExperimentalJsExport interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module js {
		export class ExperimentalJsFileName extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.js.ExperimentalJsFileName>;
			/**
			 * Constructs a new instance of the kotlin.js.ExperimentalJsFileName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module js {
		export class ExperimentalJsReflectionCreateInstance extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.js.ExperimentalJsReflectionCreateInstance>;
			/**
			 * Constructs a new instance of the kotlin.js.ExperimentalJsReflectionCreateInstance interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class ImplicitlyActualizedByJvmDeclaration extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.ImplicitlyActualizedByJvmDeclaration>;
			/**
			 * Constructs a new instance of the kotlin.jvm.ImplicitlyActualizedByJvmDeclaration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmDefault extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmDefault>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmDefault interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmDefaultWithCompatibility extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmDefaultWithCompatibility>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmDefaultWithCompatibility interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmDefaultWithoutCompatibility extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmDefaultWithoutCompatibility>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmDefaultWithoutCompatibility interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmField extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmField>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmField interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmInline extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmInline>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmInline interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmMultifileClass extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmMultifileClass>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmMultifileClass interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmName extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmName>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				name(): string;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public name(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmOverloads extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmOverloads>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmOverloads interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmPackageName extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmPackageName>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmPackageName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				name(): string;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public name(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmRecord extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmRecord>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmRecord interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmSerializableLambda extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmSerializableLambda>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmSerializableLambda interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmStatic extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmStatic>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmStatic interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmSuppressWildcards extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmSuppressWildcards>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmSuppressWildcards interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				suppress(): boolean;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public suppress(): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmSynthetic extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmSynthetic>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmSynthetic interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmWildcard extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.JvmWildcard>;
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmWildcard interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class KotlinReflectionNotSupportedError extends java.lang.Error {
			public static class: java.lang.Class<kotlin.jvm.KotlinReflectionNotSupportedError>;
			public constructor(message: string);
			public constructor(message: string, cause: java.lang.Throwable);
			public constructor(cause: java.lang.Throwable);
			public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
			public constructor();
		}
	}
}

declare module kotlin {
	export module jvm {
		export class PurelyImplements extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.PurelyImplements>;
			/**
			 * Constructs a new instance of the kotlin.jvm.PurelyImplements interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public value(): string;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class Strictfp extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.Strictfp>;
			/**
			 * Constructs a new instance of the kotlin.jvm.Strictfp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class Synchronized extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.Synchronized>;
			/**
			 * Constructs a new instance of the kotlin.jvm.Synchronized interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class Throws extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.Throws>;
			/**
			 * Constructs a new instance of the kotlin.jvm.Throws interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				exceptionClasses(): java.lang.Class<any>[];
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public exceptionClasses(): java.lang.Class<any>[];
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class Transient extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.Transient>;
			/**
			 * Constructs a new instance of the kotlin.jvm.Transient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class Volatile extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.jvm.Volatile>;
			/**
			 * Constructs a new instance of the kotlin.jvm.Volatile interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function0<R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function0<any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function0<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(): any;
				});
				public constructor();
				public invoke(): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function1<P1, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function1<any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function1<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any): any;
				});
				public constructor();
				public invoke(param0: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function10<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function10<any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function10<any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any): any;
				});
				public constructor();
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function11<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function11<any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function11<any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any): any;
				});
				public constructor();
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function12<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function12<any,any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function12<any,any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any): any;
				});
				public constructor();
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function13<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function13<any,any,any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function13<any,any,any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any): any;
				});
				public constructor();
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function14<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function14<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function14<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any): any;
				});
				public constructor();
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function15<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function15<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function15<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any): any;
				});
				public constructor();
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function16<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function16<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function16<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any): any;
				});
				public constructor();
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function17<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function17<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function17<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any): any;
				});
				public constructor();
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function18<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function18<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function18<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any): any;
				});
				public constructor();
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function19<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function19<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function19<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any, param18: any): any;
				});
				public constructor();
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any, param18: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function2<P1, P2, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function2<any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function2<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any): any;
				});
				public constructor();
				public invoke(param0: any, param1: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function20<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function20<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function20<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any, param18: any, param19: any): any;
				});
				public constructor();
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any, param18: any, param19: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function21<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function21<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function21<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any, param18: any, param19: any, param20: any): any;
				});
				public constructor();
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any, param18: any, param19: any, param20: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function22<P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function22<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function22<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any, param18: any, param19: any, param20: any, param21: any): any;
				});
				public constructor();
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any, param18: any, param19: any, param20: any, param21: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function3<P1, P2, P3, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function3<any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function3<any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any, param2: any): any;
				});
				public constructor();
				public invoke(param0: any, param1: any, param2: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function4<P1, P2, P3, P4, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function4<any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function4<any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any, param2: any, param3: any): any;
				});
				public constructor();
				public invoke(param0: any, param1: any, param2: any, param3: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function5<P1, P2, P3, P4, P5, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function5<any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function5<any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any, param2: any, param3: any, param4: any): any;
				});
				public constructor();
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function6<P1, P2, P3, P4, P5, P6, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function6<any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function6<any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): any;
				});
				public constructor();
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function7<P1, P2, P3, P4, P5, P6, P7, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function7<any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function7<any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any): any;
				});
				public constructor();
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function8<P1, P2, P3, P4, P5, P6, P7, P8, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function8<any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function8<any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any): any;
				});
				public constructor();
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function9<P1, P2, P3, P4, P5, P6, P7, P8, P9, R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.functions.Function9<any,any,any,any,any,any,any,any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function9<any,any,any,any,any,any,any,any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any): any;
				});
				public constructor();
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class FunctionN<R>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.functions.FunctionN<any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.FunctionN<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(...param0: any[]): R;
					getArity(): number;
					getArity(): number;
				});
				public constructor();
				public invoke(...param0: any[]): R;
				public getArity(): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class AdaptedFunctionReference extends java.lang.Object implements kotlin.jvm.internal.FunctionBase<any>, java.io.Serializable {
				public static class: java.lang.Class<kotlin.jvm.internal.AdaptedFunctionReference>;
				public receiver: any;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public constructor(arity: number, receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public getArity(): number;
				public getOwner(): kotlin.reflect.KDeclarationContainer;
				public equals(o: any): boolean;
				public toString(): string;
				public constructor(arity: number, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayBooleanIterator extends kotlin.collections.BooleanIterator {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayBooleanIterator>;
				public constructor(array: boolean[]);
				public hasNext(): boolean;
				public nextBoolean(): boolean;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayByteIterator extends kotlin.collections.ByteIterator {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayByteIterator>;
				public nextByte(): number;
				public hasNext(): boolean;
				public constructor(array: number[]);
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayCharIterator extends kotlin.collections.CharIterator {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayCharIterator>;
				public constructor(array: string[]);
				public hasNext(): boolean;
				public nextChar(): string;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayDoubleIterator extends kotlin.collections.DoubleIterator {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayDoubleIterator>;
				public hasNext(): boolean;
				public constructor(array: number[]);
				public nextDouble(): number;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayFloatIterator extends kotlin.collections.FloatIterator {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayFloatIterator>;
				public nextFloat(): number;
				public hasNext(): boolean;
				public constructor(array: number[]);
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayIntIterator extends kotlin.collections.IntIterator {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayIntIterator>;
				public nextInt(): number;
				public hasNext(): boolean;
				public constructor(array: number[]);
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayIterator<T>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayIterator<any>>;
				public remove(): void;
				public getArray(): T[];
				public next(): T;
				public constructor(array: T[]);
				public hasNext(): boolean;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayLongIterator extends kotlin.collections.LongIterator {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayLongIterator>;
				public nextLong(): number;
				public hasNext(): boolean;
				public constructor(array: number[]);
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayShortIterator extends kotlin.collections.ShortIterator {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayShortIterator>;
				public nextShort(): number;
				public hasNext(): boolean;
				public constructor(array: number[]);
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class BooleanCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.BooleanCompanionObject>;
				public static INSTANCE: kotlin.jvm.internal.BooleanCompanionObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class BooleanSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder<boolean[]> {
				public static class: java.lang.Class<kotlin.jvm.internal.BooleanSpreadBuilder>;
				public toArray(): boolean[];
				public constructor(size: number);
				public toArray(values: any, result: any): any;
				public getSize($this$getSize: boolean[]): number;
				public add(value: boolean): void;
				public getSize(param0: any): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ByteCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.ByteCompanionObject>;
				public static INSTANCE: kotlin.jvm.internal.ByteCompanionObject;
				public static MIN_VALUE: number;
				public static MAX_VALUE: number;
				public static SIZE_BYTES: number;
				public static SIZE_BITS: number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ByteSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder<number[]> {
				public static class: java.lang.Class<kotlin.jvm.internal.ByteSpreadBuilder>;
				public add(value: number): void;
				public getSize($this$getSize: number[]): number;
				public constructor(size: number);
				public toArray(values: any, result: any): any;
				public toArray(): number[];
				public getSize(param0: any): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class CallableReference extends java.lang.Object implements kotlin.reflect.KCallable<any>, java.io.Serializable {
				public static class: java.lang.Class<kotlin.jvm.internal.CallableReference>;
				public receiver: any;
				public static NO_RECEIVER: any;
				public callBy(args: java.util.Map<any,any>): any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getSignature(): string;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public isFinal(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public getBoundReceiver(): any;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public constructor();
				public call(...args: any[]): any;
				public compute(): kotlin.reflect.KCallable<any>;
				public constructor(receiver: any);
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(...param0: any[]): any;
				public isOpen(): boolean;
				public getOwner(): kotlin.reflect.KDeclarationContainer;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public getReflected(): kotlin.reflect.KCallable<any>;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
				public computeReflected(): kotlin.reflect.KCallable<any>;
			}
			export module CallableReference {
				export class NoReceiver extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<kotlin.jvm.internal.CallableReference.NoReceiver>;
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class CharCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.CharCompanionObject>;
				public static INSTANCE: kotlin.jvm.internal.CharCompanionObject;
				public static MIN_VALUE: string;
				public static MAX_VALUE: string;
				public static MIN_HIGH_SURROGATE: string;
				public static MAX_HIGH_SURROGATE: string;
				public static MIN_LOW_SURROGATE: string;
				public static MAX_LOW_SURROGATE: string;
				public static MIN_SURROGATE: string;
				public static MAX_SURROGATE: string;
				public static SIZE_BYTES: number;
				public static SIZE_BITS: number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class CharSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder<string[]> {
				public static class: java.lang.Class<kotlin.jvm.internal.CharSpreadBuilder>;
				public getSize($this$getSize: string[]): number;
				public toArray(): string[];
				public constructor(size: number);
				public toArray(values: any, result: any): any;
				public add(value: string): void;
				public getSize(param0: any): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ClassBasedDeclarationContainer extends java.lang.Object implements kotlin.reflect.KDeclarationContainer {
				public static class: java.lang.Class<kotlin.jvm.internal.ClassBasedDeclarationContainer>;
				/**
				 * Constructs a new instance of the kotlin.jvm.internal.ClassBasedDeclarationContainer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getJClass(): java.lang.Class<any>;
					getMembers(): java.util.Collection<kotlin.reflect.KCallable<any>>;
				});
				public constructor();
				public getJClass(): java.lang.Class<any>;
				public getMembers(): java.util.Collection<kotlin.reflect.KCallable<any>>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ClassReference extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.ClassReference>;
				public getJClass(): java.lang.Class<any>;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public isFinal(): boolean;
				public isInner(): boolean;
				public isCompanion(): boolean;
				public getQualifiedName(): string;
				public getObjectInstance(): any;
				public constructor(jClass: java.lang.Class<any>);
				public getSupertypes(): java.util.List<kotlin.reflect.KType>;
				public getConstructors(): java.util.Collection<kotlin.reflect.KFunction<any>>;
				public isInstance(value: any): boolean;
				public getSimpleName(): string;
				public isData(): boolean;
				public getMembers(): java.util.Collection<kotlin.reflect.KCallable<any>>;
				public equals(other: any): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public isSealed(): boolean;
				public isAbstract(): boolean;
				public isInstance(param0: any): boolean;
				public isFun(): boolean;
				public getNestedClasses(): java.util.Collection<kotlin.reflect.KClass<any>>;
				public isValue(): boolean;
				public toString(): string;
				public equals(obj: any): boolean;
				public getSealedSubclasses(): java.util.List<kotlin.reflect.KClass<any>>;
				public isOpen(): boolean;
			}
			export module ClassReference {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kotlin.jvm.internal.ClassReference.Companion>;
					public getClassSimpleName(jClass: java.lang.Class<any>): string;
					public isInstance(value: any, jClass: java.lang.Class<any>): boolean;
					public getClassQualifiedName(jClass: java.lang.Class<any>): string;
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class CollectionToArray extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.CollectionToArray>;
				/** @deprecated */
				public static toArray(collection: java.util.Collection<any>): any[];
				/** @deprecated */
				public static toArray(collection: java.util.Collection<any>, a: any[]): any[];
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class DefaultConstructorMarker extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.DefaultConstructorMarker>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class DoubleCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.DoubleCompanionObject>;
				public static INSTANCE: kotlin.jvm.internal.DoubleCompanionObject;
				public static MIN_VALUE: number;
				public static MAX_VALUE: number;
				public static POSITIVE_INFINITY: number;
				public static NEGATIVE_INFINITY: number;
				public static NaN: number;
				public static SIZE_BYTES: number;
				public static SIZE_BITS: number;
				public getNaN(): number;
				public getMAX_VALUE(): number;
				public getNEGATIVE_INFINITY(): number;
				public getMIN_VALUE(): number;
				public getPOSITIVE_INFINITY(): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class DoubleSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder<number[]> {
				public static class: java.lang.Class<kotlin.jvm.internal.DoubleSpreadBuilder>;
				public add(value: number): void;
				public getSize($this$getSize: number[]): number;
				public constructor(size: number);
				public toArray(values: any, result: any): any;
				public toArray(): number[];
				public getSize(param0: any): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class EnumCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.EnumCompanionObject>;
				public static INSTANCE: kotlin.jvm.internal.EnumCompanionObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class FloatCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.FloatCompanionObject>;
				public static INSTANCE: kotlin.jvm.internal.FloatCompanionObject;
				public static MIN_VALUE: number;
				public static MAX_VALUE: number;
				public static POSITIVE_INFINITY: number;
				public static NEGATIVE_INFINITY: number;
				public static NaN: number;
				public static SIZE_BYTES: number;
				public static SIZE_BITS: number;
				public getNaN(): number;
				public getMAX_VALUE(): number;
				public getNEGATIVE_INFINITY(): number;
				public getMIN_VALUE(): number;
				public getPOSITIVE_INFINITY(): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class FloatSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder<number[]> {
				public static class: java.lang.Class<kotlin.jvm.internal.FloatSpreadBuilder>;
				public add(value: number): void;
				public getSize($this$getSize: number[]): number;
				public constructor(size: number);
				public toArray(values: any, result: any): any;
				public toArray(): number[];
				public getSize(param0: any): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class FunInterfaceConstructorReference extends kotlin.jvm.internal.FunctionReference implements java.io.Serializable {
				public static class: java.lang.Class<kotlin.jvm.internal.FunInterfaceConstructorReference>;
				public constructor(arity: number);
				public callBy(args: java.util.Map<any,any>): any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public isInline(): boolean;
				public isFinal(): boolean;
				public getArity(): number;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public constructor();
				public isExternal(): boolean;
				public constructor(receiver: any);
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public hashCode(): number;
				public call(...param0: any[]): any;
				public equals(o: any): boolean;
				public getReflected(): kotlin.reflect.KCallable<any>;
				public getReflected(): kotlin.reflect.KFunction<any>;
				public isAbstract(): boolean;
				public constructor(funInterface: java.lang.Class<any>);
				public constructor(arity: number, receiver: any);
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public constructor(arity: number, receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public getName(): string;
				public toString(): string;
				public isInfix(): boolean;
				public call(...args: any[]): any;
				public equals(obj: any): boolean;
				public isOpen(): boolean;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class FunctionAdapter extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.FunctionAdapter>;
				/**
				 * Constructs a new instance of the kotlin.jvm.internal.FunctionAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getFunctionDelegate(): kotlin.Function<any>;
				});
				public constructor();
				public getFunctionDelegate(): kotlin.Function<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class FunctionBase<R>  extends kotlin.Function<any> {
				public static class: java.lang.Class<kotlin.jvm.internal.FunctionBase<any>>;
				/**
				 * Constructs a new instance of the kotlin.jvm.internal.FunctionBase<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getArity(): number;
				});
				public constructor();
				public getArity(): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class FunctionImpl extends java.lang.Object implements kotlin.Function<any>, java.io.Serializable, kotlin.jvm.functions.Function0<any>, kotlin.jvm.functions.Function1<any,any>, kotlin.jvm.functions.Function2<any,any,any>, kotlin.jvm.functions.Function3<any,any,any,any>, kotlin.jvm.functions.Function4<any,any,any,any,any>, kotlin.jvm.functions.Function5<any,any,any,any,any,any>, kotlin.jvm.functions.Function6<any,any,any,any,any,any,any>, kotlin.jvm.functions.Function7<any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function8<any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function9<any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function10<any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function11<any,any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function12<any,any,any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function13<any,any,any,any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function14<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function15<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function16<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function17<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function18<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function19<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function20<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function21<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any>, kotlin.jvm.functions.Function22<any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any> {
				public static class: java.lang.Class<kotlin.jvm.internal.FunctionImpl>;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any, param18: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any, p15: any, p16: any, p17: any, p18: any, p19: any, p20: any, p21: any, p22: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any): any;
				public getArity(): number;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any): any;
				public invoke(param0: any, param1: any, param2: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any, p15: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any, param18: any, param19: any, param20: any): any;
				public constructor();
				public invoke(param0: any, param1: any, param2: any, param3: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any): any;
				public invoke(): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any, param18: any, param19: any, param20: any, param21: any): any;
				public invokeVararg(...p: any[]): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any, p15: any, p16: any, p17: any, p18: any, p19: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any, p15: any, p16: any, p17: any, p18: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any, p15: any, p16: any, p17: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any, param18: any, param19: any): any;
				public invoke(param0: any, param1: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any, p15: any, p16: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any): any;
				public invoke(p1: any, p2: any, p3: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any, p15: any, p16: any, p17: any, p18: any, p19: any, p20: any, p21: any): any;
				public invoke(p1: any, p2: any): any;
				public invoke(param0: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any, p13: any, p14: any, p15: any, p16: any, p17: any, p18: any, p19: any, p20: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any): any;
				public invoke(p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): any;
				public invoke(p1: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class FunctionReference extends kotlin.jvm.internal.CallableReference implements kotlin.jvm.internal.FunctionBase<any>, kotlin.reflect.KFunction<any> {
				public static class: java.lang.Class<kotlin.jvm.internal.FunctionReference>;
				public constructor(arity: number);
				public callBy(args: java.util.Map<any,any>): any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public isInline(): boolean;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getArity(): number;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public constructor();
				public isExternal(): boolean;
				public constructor(receiver: any);
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public hashCode(): number;
				public call(...param0: any[]): any;
				public getReflected(): kotlin.reflect.KCallable<any>;
				public getReflected(): kotlin.reflect.KFunction<any>;
				public isAbstract(): boolean;
				public constructor(arity: number, receiver: any);
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public constructor(arity: number, receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public getName(): string;
				public toString(): string;
				public isInfix(): boolean;
				public call(...args: any[]): any;
				public equals(obj: any): boolean;
				public isOpen(): boolean;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
				public computeReflected(): kotlin.reflect.KCallable<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class FunctionReferenceImpl extends kotlin.jvm.internal.FunctionReference {
				public static class: java.lang.Class<kotlin.jvm.internal.FunctionReferenceImpl>;
				public constructor(arity: number);
				public callBy(args: java.util.Map<any,any>): any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public isInline(): boolean;
				public isFinal(): boolean;
				public getArity(): number;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public constructor();
				public isExternal(): boolean;
				public constructor(receiver: any);
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(...param0: any[]): any;
				public constructor(arity: number, owner: kotlin.reflect.KDeclarationContainer, name: string, signature: string);
				public isAbstract(): boolean;
				public constructor(arity: number, receiver: any);
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public constructor(arity: number, receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public getName(): string;
				public constructor(arity: number, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public isInfix(): boolean;
				public call(...args: any[]): any;
				public isOpen(): boolean;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class InlineMarker extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.InlineMarker>;
				public static mark(name: string): void;
				public static finallyStart(finallyDepth: number): void;
				public static beforeInlineCall(): void;
				public static finallyEnd(finallyDepth: number): void;
				public static afterInlineCall(): void;
				public static mark(i: number): void;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class IntCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.IntCompanionObject>;
				public static INSTANCE: kotlin.jvm.internal.IntCompanionObject;
				public static MIN_VALUE: number;
				public static MAX_VALUE: number;
				public static SIZE_BYTES: number;
				public static SIZE_BITS: number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class IntSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder<number[]> {
				public static class: java.lang.Class<kotlin.jvm.internal.IntSpreadBuilder>;
				public add(value: number): void;
				public getSize($this$getSize: number[]): number;
				public constructor(size: number);
				public toArray(values: any, result: any): any;
				public toArray(): number[];
				public getSize(param0: any): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class Intrinsics extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.Intrinsics>;
				public static throwAssert(message: string): void;
				public static reifiedOperationMarker(id: number, typeParameterIdentifier: string, message: string): void;
				public static areEqual(first: java.lang.Float, second: java.lang.Float): boolean;
				public static checkNotNullParameter(value: any, paramName: string): void;
				public static checkFieldIsNotNull(value: any, message: string): void;
				public static throwUndefinedForReified(): void;
				public static checkHasClass(internalName: string): void;
				public static checkNotNull(object: any): void;
				public static throwUndefinedForReified(message: string): void;
				public static checkNotNull(object: any, message: string): void;
				public static throwIllegalArgument(): void;
				public static needClassReification(): void;
				public static throwUninitializedProperty(message: string): void;
				public static reifiedOperationMarker(id: number, typeParameterIdentifier: string): void;
				public static throwAssert(): void;
				public static throwUninitializedPropertyAccessException(propertyName: string): void;
				public static checkFieldIsNotNull(value: any, className: string, fieldName: string): void;
				public static areEqual(first: java.lang.Float, second: number): boolean;
				public static stringPlus(self: string, other: any): string;
				public static checkExpressionValueIsNotNull(value: any, expression: string): void;
				public static areEqual(first: any, second: any): boolean;
				public static throwIllegalState(message: string): void;
				public static throwNpe(): void;
				public static areEqual(first: java.lang.Double, second: number): boolean;
				public static areEqual(first: number, second: java.lang.Float): boolean;
				public static checkReturnedValueIsNotNull(value: any, className: string, methodName: string): void;
				public static checkParameterIsNotNull(value: any, paramName: string): void;
				public static needClassReification(message: string): void;
				public static throwJavaNpe(message: string): void;
				public static throwIllegalState(): void;
				public static compare(thisVal: number, param1: number): number;
				public static checkHasClass(internalName: string, requiredVersion: string): void;
				public static checkNotNullExpressionValue(value: any, expression: string): void;
				public static throwNpe(message: string): void;
				public static throwIllegalArgument(message: string): void;
				public static areEqual(first: java.lang.Double, second: java.lang.Double): boolean;
				public static compare(thisVal: number, anotherVal: number): number;
				public static throwJavaNpe(): void;
				public static areEqual(first: number, param1: java.lang.Double): boolean;
				public static checkReturnedValueIsNotNull(value: any, message: string): void;
			}
			export module Intrinsics {
				export class Kotlin extends java.lang.Object {
					public static class: java.lang.Class<kotlin.jvm.internal.Intrinsics.Kotlin>;
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class KTypeBase extends java.lang.Object implements kotlin.reflect.KType {
				public static class: java.lang.Class<kotlin.jvm.internal.KTypeBase>;
				/**
				 * Constructs a new instance of the kotlin.jvm.internal.KTypeBase interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getJavaType(): java.lang.reflect.Type;
					getClassifier(): kotlin.reflect.KClassifier;
					getArguments(): java.util.List<kotlin.reflect.KTypeProjection>;
					isMarkedNullable(): boolean;
					getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				});
				public constructor();
				public getJavaType(): java.lang.reflect.Type;
				public getClassifier(): kotlin.reflect.KClassifier;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getArguments(): java.util.List<kotlin.reflect.KTypeProjection>;
				public isMarkedNullable(): boolean;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class Lambda<R>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.Lambda<any>>;
				public constructor(arity: number);
				public getArity(): number;
				public toString(): string;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class LocalVariableReference extends kotlin.jvm.internal.PropertyReference0 {
				public static class: java.lang.Class<kotlin.jvm.internal.LocalVariableReference>;
				public callBy(args: java.util.Map<any,any>): any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public constructor(receiver: any);
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(...param0: any[]): any;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isLateinit(): boolean;
				public getName(): string;
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public call(...args: any[]): any;
				public isOpen(): boolean;
				public getOwner(): kotlin.reflect.KDeclarationContainer;
				public getDelegate(): any;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public get(): any;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class LongCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.LongCompanionObject>;
				public static INSTANCE: kotlin.jvm.internal.LongCompanionObject;
				public static MIN_VALUE: number;
				public static MAX_VALUE: number;
				public static SIZE_BYTES: number;
				public static SIZE_BITS: number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class LongSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder<number[]> {
				public static class: java.lang.Class<kotlin.jvm.internal.LongSpreadBuilder>;
				public add(value: number): void;
				public getSize($this$getSize: number[]): number;
				public constructor(size: number);
				public toArray(values: any, result: any): any;
				public toArray(): number[];
				public getSize(param0: any): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class MagicApiIntrinsics extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.MagicApiIntrinsics>;
				public static anyMagicApiCall(id: number, longData1: number, param2: number, longData2: any): any;
				public static voidMagicApiCall(id: number): void;
				public static intMagicApiCall(id: number, longData: number, param2: any): number;
				public static anyMagicApiCall(id: number): any;
				public static intMagicApiCall(id: number, anyData1: any, anyData2: any): number;
				public static anyMagicApiCall(id: number, longData: number, param2: any): any;
				public static intMagicApiCall(id: number, longData1: number, param2: number, longData2: any): number;
				public static intMagicApiCall(id: number): number;
				public constructor();
				public static intMagicApiCall(data: any): number;
				public static intMagicApiCall(id: number, anyData1: any, anyData2: any, anyData3: any, anyData4: any): number;
				public static anyMagicApiCall(id: number, anyData1: any, anyData2: any): any;
				public static voidMagicApiCall(data: any): void;
				public static anyMagicApiCall(id: number, anyData1: any, anyData2: any, anyData3: any, anyData4: any): any;
				public static anyMagicApiCall(data: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class MutableLocalVariableReference extends kotlin.jvm.internal.MutablePropertyReference0 {
				public static class: java.lang.Class<kotlin.jvm.internal.MutableLocalVariableReference>;
				public callBy(args: java.util.Map<any,any>): any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public constructor(receiver: any);
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(...param0: any[]): any;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public set(param0: any): void;
				public isLateinit(): boolean;
				public getName(): string;
				public set(value: any): void;
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public getSetter(): kotlin.reflect.KMutableProperty0.Setter<any>;
				public call(...args: any[]): any;
				public isOpen(): boolean;
				public getOwner(): kotlin.reflect.KDeclarationContainer;
				public getSetter(): kotlin.reflect.KMutableProperty0.Setter<any>;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public get(): any;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class MutablePropertyReference extends kotlin.jvm.internal.PropertyReference implements kotlin.reflect.KMutableProperty<any> {
				public static class: java.lang.Class<kotlin.jvm.internal.MutablePropertyReference>;
				public callBy(args: java.util.Map<any,any>): any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public isLateinit(): boolean;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public call(...args: any[]): any;
				public constructor(receiver: any);
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(...param0: any[]): any;
				public isOpen(): boolean;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class MutablePropertyReference0 extends kotlin.jvm.internal.MutablePropertyReference implements kotlin.reflect.KMutableProperty0<any> {
				public static class: java.lang.Class<kotlin.jvm.internal.MutablePropertyReference0>;
				public callBy(args: java.util.Map<any,any>): any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public invoke(): any;
				public constructor(receiver: any);
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(...param0: any[]): any;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public set(param0: any): void;
				public isLateinit(): boolean;
				public getName(): string;
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public getSetter(): kotlin.reflect.KMutableProperty0.Setter<any>;
				public call(...args: any[]): any;
				public isOpen(): boolean;
				public getDelegate(): any;
				public getSetter(): kotlin.reflect.KMutableProperty0.Setter<any>;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public get(): any;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
				public computeReflected(): kotlin.reflect.KCallable<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class MutablePropertyReference0Impl extends kotlin.jvm.internal.MutablePropertyReference0 {
				public static class: java.lang.Class<kotlin.jvm.internal.MutablePropertyReference0Impl>;
				public callBy(args: java.util.Map<any,any>): any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public constructor(owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor(receiver: any);
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(...param0: any[]): any;
				public constructor(owner: kotlin.reflect.KDeclarationContainer, name: string, signature: string);
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public set(param0: any): void;
				public isLateinit(): boolean;
				public getName(): string;
				public set(value: any): void;
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public getSetter(): kotlin.reflect.KMutableProperty0.Setter<any>;
				public call(...args: any[]): any;
				public isOpen(): boolean;
				public getSetter(): kotlin.reflect.KMutableProperty0.Setter<any>;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public get(): any;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class MutablePropertyReference1 extends kotlin.jvm.internal.MutablePropertyReference implements kotlin.reflect.KMutableProperty1<any,any> {
				public static class: java.lang.Class<kotlin.jvm.internal.MutablePropertyReference1>;
				public callBy(args: java.util.Map<any,any>): any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public get(param0: any): any;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public getDelegate(receiver: any): any;
				public constructor();
				public constructor(receiver: any);
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public getGetter(): kotlin.reflect.KProperty1.Getter<any,any>;
				public call(...param0: any[]): any;
				public getSetter(): kotlin.reflect.KMutableProperty1.Setter<any,any>;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public set(param0: any, param1: any): void;
				public isLateinit(): boolean;
				public getName(): string;
				public getGetter(): kotlin.reflect.KProperty1.Getter<any,any>;
				public invoke(param0: any): any;
				public call(...args: any[]): any;
				public invoke(receiver: any): any;
				public isOpen(): boolean;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
				public getSetter(): kotlin.reflect.KMutableProperty1.Setter<any,any>;
				public getDelegate(param0: any): any;
				public computeReflected(): kotlin.reflect.KCallable<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class MutablePropertyReference1Impl extends kotlin.jvm.internal.MutablePropertyReference1 {
				public static class: java.lang.Class<kotlin.jvm.internal.MutablePropertyReference1Impl>;
				public callBy(args: java.util.Map<any,any>): any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public constructor(owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public get(receiver: any): any;
				public constructor(receiver: any);
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public getGetter(): kotlin.reflect.KProperty1.Getter<any,any>;
				public call(...param0: any[]): any;
				public constructor(owner: kotlin.reflect.KDeclarationContainer, name: string, signature: string);
				public getSetter(): kotlin.reflect.KMutableProperty1.Setter<any,any>;
				public isAbstract(): boolean;
				public set(receiver: any, value: any): void;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isLateinit(): boolean;
				public set(param0: any, param1: any): void;
				public getName(): string;
				public call(...args: any[]): any;
				public isOpen(): boolean;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
				public getSetter(): kotlin.reflect.KMutableProperty1.Setter<any,any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class MutablePropertyReference2 extends kotlin.jvm.internal.MutablePropertyReference implements kotlin.reflect.KMutableProperty2<any,any,any> {
				public static class: java.lang.Class<kotlin.jvm.internal.MutablePropertyReference2>;
				public callBy(args: java.util.Map<any,any>): any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public getDelegate(param0: any, param1: any): any;
				public getSetter(): kotlin.reflect.KMutableProperty2.Setter<any,any,any>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public constructor(owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public get(param0: any, param1: any): any;
				public constructor(receiver: any);
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(...param0: any[]): any;
				public getGetter(): kotlin.reflect.KProperty2.Getter<any,any,any>;
				public isAbstract(): boolean;
				public invoke(param0: any, param1: any): any;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public getGetter(): kotlin.reflect.KProperty2.Getter<any,any,any>;
				public isLateinit(): boolean;
				public getName(): string;
				public call(...args: any[]): any;
				public getDelegate(receiver1: any, receiver2: any): any;
				public isOpen(): boolean;
				public invoke(receiver1: any, receiver2: any): any;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public getSetter(): kotlin.reflect.KMutableProperty2.Setter<any,any,any>;
				public set(param0: any, param1: any, param2: any): void;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
				public computeReflected(): kotlin.reflect.KCallable<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class MutablePropertyReference2Impl extends kotlin.jvm.internal.MutablePropertyReference2 {
				public static class: java.lang.Class<kotlin.jvm.internal.MutablePropertyReference2Impl>;
				public callBy(args: java.util.Map<any,any>): any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public getSetter(): kotlin.reflect.KMutableProperty2.Setter<any,any,any>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public constructor(owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor(receiver: any);
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(...param0: any[]): any;
				public getGetter(): kotlin.reflect.KProperty2.Getter<any,any,any>;
				public constructor(owner: kotlin.reflect.KDeclarationContainer, name: string, signature: string);
				public get(receiver1: any, receiver2: any): any;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isLateinit(): boolean;
				public getName(): string;
				public set(receiver1: any, receiver2: any, value: any): void;
				public call(...args: any[]): any;
				public isOpen(): boolean;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public getSetter(): kotlin.reflect.KMutableProperty2.Setter<any,any,any>;
				public set(param0: any, param1: any, param2: any): void;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class PackageReference extends java.lang.Object implements kotlin.jvm.internal.ClassBasedDeclarationContainer {
				public static class: java.lang.Class<kotlin.jvm.internal.PackageReference>;
				public getJClass(): java.lang.Class<any>;
				public getMembers(): java.util.Collection<kotlin.reflect.KCallable<any>>;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public constructor(jClass: java.lang.Class<any>, moduleName: string);
				public hashCode(): number;
				public toString(): string;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class PrimitiveSpreadBuilder<T>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.PrimitiveSpreadBuilder<any>>;
				public getSize(param0: T): number;
				public toArray(values: T, result: T): T;
				public addSpread(spreadArgument: T): void;
				public constructor(size: number);
				public getPosition(): number;
				public setPosition(_set_: number): void;
				public size(): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class PropertyReference extends kotlin.jvm.internal.CallableReference implements kotlin.reflect.KProperty<any> {
				public static class: java.lang.Class<kotlin.jvm.internal.PropertyReference>;
				public callBy(args: java.util.Map<any,any>): any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public compute(): kotlin.reflect.KCallable<any>;
				public constructor(receiver: any);
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public hashCode(): number;
				public call(...param0: any[]): any;
				public getReflected(): kotlin.reflect.KCallable<any>;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public getReflected(): kotlin.reflect.KProperty<any>;
				public isLateinit(): boolean;
				public getName(): string;
				public toString(): string;
				public call(...args: any[]): any;
				public equals(obj: any): boolean;
				public isOpen(): boolean;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class PropertyReference0 extends kotlin.jvm.internal.PropertyReference implements kotlin.reflect.KProperty0<any> {
				public static class: java.lang.Class<kotlin.jvm.internal.PropertyReference0>;
				public callBy(args: java.util.Map<any,any>): any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public invoke(): any;
				public constructor(receiver: any);
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(...param0: any[]): any;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isLateinit(): boolean;
				public getName(): string;
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public call(...args: any[]): any;
				public isOpen(): boolean;
				public getDelegate(): any;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public get(): any;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
				public computeReflected(): kotlin.reflect.KCallable<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class PropertyReference0Impl extends kotlin.jvm.internal.PropertyReference0 {
				public static class: java.lang.Class<kotlin.jvm.internal.PropertyReference0Impl>;
				public callBy(args: java.util.Map<any,any>): any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public constructor(owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor(receiver: any);
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(...param0: any[]): any;
				public constructor(owner: kotlin.reflect.KDeclarationContainer, name: string, signature: string);
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isLateinit(): boolean;
				public getName(): string;
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public call(...args: any[]): any;
				public isOpen(): boolean;
				public getDelegate(): any;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public get(): any;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class PropertyReference1 extends kotlin.jvm.internal.PropertyReference implements kotlin.reflect.KProperty1<any,any> {
				public static class: java.lang.Class<kotlin.jvm.internal.PropertyReference1>;
				public callBy(args: java.util.Map<any,any>): any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public get(param0: any): any;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public getDelegate(receiver: any): any;
				public constructor();
				public constructor(receiver: any);
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public getGetter(): kotlin.reflect.KProperty1.Getter<any,any>;
				public call(...param0: any[]): any;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isLateinit(): boolean;
				public getName(): string;
				public getGetter(): kotlin.reflect.KProperty1.Getter<any,any>;
				public invoke(param0: any): any;
				public call(...args: any[]): any;
				public invoke(receiver: any): any;
				public isOpen(): boolean;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
				public getDelegate(param0: any): any;
				public computeReflected(): kotlin.reflect.KCallable<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class PropertyReference1Impl extends kotlin.jvm.internal.PropertyReference1 {
				public static class: java.lang.Class<kotlin.jvm.internal.PropertyReference1Impl>;
				public callBy(args: java.util.Map<any,any>): any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public get(param0: any): any;
				public isFinal(): boolean;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public getDelegate(receiver: any): any;
				public constructor();
				public constructor(owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public get(receiver: any): any;
				public constructor(receiver: any);
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public getGetter(): kotlin.reflect.KProperty1.Getter<any,any>;
				public call(...param0: any[]): any;
				public constructor(owner: kotlin.reflect.KDeclarationContainer, name: string, signature: string);
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isLateinit(): boolean;
				public getName(): string;
				public getGetter(): kotlin.reflect.KProperty1.Getter<any,any>;
				public call(...args: any[]): any;
				public isOpen(): boolean;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
				public getDelegate(param0: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class PropertyReference2 extends kotlin.jvm.internal.PropertyReference implements kotlin.reflect.KProperty2<any,any,any> {
				public static class: java.lang.Class<kotlin.jvm.internal.PropertyReference2>;
				public callBy(args: java.util.Map<any,any>): any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getDelegate(param0: any, param1: any): any;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public constructor(owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public get(param0: any, param1: any): any;
				public constructor(receiver: any);
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(...param0: any[]): any;
				public getGetter(): kotlin.reflect.KProperty2.Getter<any,any,any>;
				public isAbstract(): boolean;
				public invoke(param0: any, param1: any): any;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public getGetter(): kotlin.reflect.KProperty2.Getter<any,any,any>;
				public isLateinit(): boolean;
				public getName(): string;
				public call(...args: any[]): any;
				public getDelegate(receiver1: any, receiver2: any): any;
				public isOpen(): boolean;
				public invoke(receiver1: any, receiver2: any): any;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
				public computeReflected(): kotlin.reflect.KCallable<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class PropertyReference2Impl extends kotlin.jvm.internal.PropertyReference2 {
				public static class: java.lang.Class<kotlin.jvm.internal.PropertyReference2Impl>;
				public callBy(args: java.util.Map<any,any>): any;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getDelegate(param0: any, param1: any): any;
				public getReturnType(): kotlin.reflect.KType;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public constructor();
				public constructor(owner: java.lang.Class<any>, name: string, signature: string, flags: number);
				public get(param0: any, param1: any): any;
				public constructor(receiver: any);
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(...param0: any[]): any;
				public getGetter(): kotlin.reflect.KProperty2.Getter<any,any,any>;
				public constructor(owner: kotlin.reflect.KDeclarationContainer, name: string, signature: string);
				public get(receiver1: any, receiver2: any): any;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public getGetter(): kotlin.reflect.KProperty2.Getter<any,any,any>;
				public isLateinit(): boolean;
				public getName(): string;
				public call(...args: any[]): any;
				public getDelegate(receiver1: any, receiver2: any): any;
				public isOpen(): boolean;
				public constructor(receiver: any, owner: java.lang.Class<any>, name: string, signature: string, isTopLevel: boolean);
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class Ref extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.Ref>;
			}
			export module Ref {
				export class BooleanRef extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<kotlin.jvm.internal.Ref.BooleanRef>;
					public element: boolean;
					public toString(): string;
					public constructor();
				}
				export class ByteRef extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<kotlin.jvm.internal.Ref.ByteRef>;
					public element: number;
					public toString(): string;
					public constructor();
				}
				export class CharRef extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<kotlin.jvm.internal.Ref.CharRef>;
					public element: string;
					public toString(): string;
					public constructor();
				}
				export class DoubleRef extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<kotlin.jvm.internal.Ref.DoubleRef>;
					public element: number;
					public toString(): string;
					public constructor();
				}
				export class FloatRef extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<kotlin.jvm.internal.Ref.FloatRef>;
					public element: number;
					public toString(): string;
					public constructor();
				}
				export class IntRef extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<kotlin.jvm.internal.Ref.IntRef>;
					public element: number;
					public toString(): string;
					public constructor();
				}
				export class LongRef extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<kotlin.jvm.internal.Ref.LongRef>;
					public element: number;
					public toString(): string;
					public constructor();
				}
				export class ObjectRef<T>  extends java.io.Serializable {
					public static class: java.lang.Class<kotlin.jvm.internal.Ref.ObjectRef<any>>;
					public element: any;
					public toString(): string;
					public constructor();
				}
				export class ShortRef extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<kotlin.jvm.internal.Ref.ShortRef>;
					public element: number;
					public toString(): string;
					public constructor();
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class Reflection extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.Reflection>;
				public static renderLambdaToString(lambda: kotlin.jvm.internal.Lambda<any>): string;
				public static nullableTypeOf(klass: java.lang.Class<any>, arg1: kotlin.reflect.KTypeProjection, arg2: kotlin.reflect.KTypeProjection): kotlin.reflect.KType;
				public static typeParameter(container: any, name: string, variance: kotlin.reflect.KVariance, isReified: boolean): kotlin.reflect.KTypeParameter;
				public static function(f: kotlin.jvm.internal.FunctionReference): kotlin.reflect.KFunction<any>;
				public static nullableTypeOf(klass: java.lang.Class<any>): kotlin.reflect.KType;
				public constructor();
				public static property2(p: kotlin.jvm.internal.PropertyReference2): kotlin.reflect.KProperty2<any,any,any>;
				public static nullableTypeOf(klass: java.lang.Class<any>, arg1: kotlin.reflect.KTypeProjection): kotlin.reflect.KType;
				public static typeOf(klass: java.lang.Class<any>, ...arguments: kotlin.reflect.KTypeProjection[]): kotlin.reflect.KType;
				public static nullableTypeOf(klass: java.lang.Class<any>, ...arguments: kotlin.reflect.KTypeProjection[]): kotlin.reflect.KType;
				public static typeOf(klass: java.lang.Class<any>, arg1: kotlin.reflect.KTypeProjection, arg2: kotlin.reflect.KTypeProjection): kotlin.reflect.KType;
				public static property1(p: kotlin.jvm.internal.PropertyReference1): kotlin.reflect.KProperty1<any,any>;
				public static getOrCreateKotlinClass(javaClass: java.lang.Class<any>): kotlin.reflect.KClass<any>;
				public static createKotlinClass(javaClass: java.lang.Class<any>, internalName: string): kotlin.reflect.KClass<any>;
				public static mutableCollectionType(type: kotlin.reflect.KType): kotlin.reflect.KType;
				public static typeOf(klass: java.lang.Class<any>): kotlin.reflect.KType;
				public static renderLambdaToString(lambda: kotlin.jvm.internal.FunctionBase<any>): string;
				public static mutableProperty1(p: kotlin.jvm.internal.MutablePropertyReference1): kotlin.reflect.KMutableProperty1<any,any>;
				public static mutableProperty2(p: kotlin.jvm.internal.MutablePropertyReference2): kotlin.reflect.KMutableProperty2<any,any,any>;
				public static createKotlinClass(javaClass: java.lang.Class<any>): kotlin.reflect.KClass<any>;
				public static typeOf(klass: java.lang.Class<any>, arg1: kotlin.reflect.KTypeProjection): kotlin.reflect.KType;
				public static typeOf(classifier: kotlin.reflect.KClassifier): kotlin.reflect.KType;
				public static setUpperBounds(typeParameter: kotlin.reflect.KTypeParameter, ...bounds: kotlin.reflect.KType[]): void;
				public static platformType(lowerBound: kotlin.reflect.KType, upperBound: kotlin.reflect.KType): kotlin.reflect.KType;
				public static getOrCreateKotlinClasses(javaClasses: java.lang.Class<any>[]): kotlin.reflect.KClass<any>[];
				public static nullableTypeOf(classifier: kotlin.reflect.KClassifier): kotlin.reflect.KType;
				public static property0(p: kotlin.jvm.internal.PropertyReference0): kotlin.reflect.KProperty0<any>;
				public static setUpperBounds(typeParameter: kotlin.reflect.KTypeParameter, bound: kotlin.reflect.KType): void;
				public static getOrCreateKotlinPackage(javaClass: java.lang.Class<any>): kotlin.reflect.KDeclarationContainer;
				public static getOrCreateKotlinClass(javaClass: java.lang.Class<any>, internalName: string): kotlin.reflect.KClass<any>;
				public static mutableProperty0(p: kotlin.jvm.internal.MutablePropertyReference0): kotlin.reflect.KMutableProperty0<any>;
				public static getOrCreateKotlinPackage(javaClass: java.lang.Class<any>, moduleName: string): kotlin.reflect.KDeclarationContainer;
				public static nothingType(type: kotlin.reflect.KType): kotlin.reflect.KType;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ReflectionFactory extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.ReflectionFactory>;
				public mutableProperty2(p: kotlin.jvm.internal.MutablePropertyReference2): kotlin.reflect.KMutableProperty2<any,any,any>;
				public createKotlinClass(javaClass: java.lang.Class<any>, internalName: string): kotlin.reflect.KClass<any>;
				public mutableCollectionType(type: kotlin.reflect.KType): kotlin.reflect.KType;
				public function(f: kotlin.jvm.internal.FunctionReference): kotlin.reflect.KFunction<any>;
				public createKotlinClass(javaClass: java.lang.Class<any>): kotlin.reflect.KClass<any>;
				public getOrCreateKotlinClass(javaClass: java.lang.Class<any>): kotlin.reflect.KClass<any>;
				public property2(p: kotlin.jvm.internal.PropertyReference2): kotlin.reflect.KProperty2<any,any,any>;
				public setUpperBounds(typeParameter: kotlin.reflect.KTypeParameter, bounds: java.util.List<kotlin.reflect.KType>): void;
				public nothingType(type: kotlin.reflect.KType): kotlin.reflect.KType;
				public renderLambdaToString(lambda: kotlin.jvm.internal.Lambda<any>): string;
				public typeParameter(container: any, name: string, variance: kotlin.reflect.KVariance, isReified: boolean): kotlin.reflect.KTypeParameter;
				public constructor();
				public getOrCreateKotlinPackage(javaClass: java.lang.Class<any>, moduleName: string): kotlin.reflect.KDeclarationContainer;
				public property0(p: kotlin.jvm.internal.PropertyReference0): kotlin.reflect.KProperty0<any>;
				public property1(p: kotlin.jvm.internal.PropertyReference1): kotlin.reflect.KProperty1<any,any>;
				public mutableProperty1(p: kotlin.jvm.internal.MutablePropertyReference1): kotlin.reflect.KMutableProperty1<any,any>;
				public getOrCreateKotlinClass(javaClass: java.lang.Class<any>, internalName: string): kotlin.reflect.KClass<any>;
				public typeOf(klass: kotlin.reflect.KClassifier, arguments: java.util.List<kotlin.reflect.KTypeProjection>, isMarkedNullable: boolean): kotlin.reflect.KType;
				public renderLambdaToString(lambda: kotlin.jvm.internal.FunctionBase<any>): string;
				public platformType(lowerBound: kotlin.reflect.KType, upperBound: kotlin.reflect.KType): kotlin.reflect.KType;
				public mutableProperty0(p: kotlin.jvm.internal.MutablePropertyReference0): kotlin.reflect.KMutableProperty0<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class RepeatableContainer extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<kotlin.jvm.internal.RepeatableContainer>;
				/**
				 * Constructs a new instance of the kotlin.jvm.internal.RepeatableContainer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class SerializedIr extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<kotlin.jvm.internal.SerializedIr>;
				/**
				 * Constructs a new instance of the kotlin.jvm.internal.SerializedIr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					b(): string[];
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public b(): string[];
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ShortCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.ShortCompanionObject>;
				public static INSTANCE: kotlin.jvm.internal.ShortCompanionObject;
				public static MIN_VALUE: number;
				public static MAX_VALUE: number;
				public static SIZE_BYTES: number;
				public static SIZE_BITS: number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ShortSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder<number[]> {
				public static class: java.lang.Class<kotlin.jvm.internal.ShortSpreadBuilder>;
				public add(value: number): void;
				public getSize($this$getSize: number[]): number;
				public constructor(size: number);
				public toArray(values: any, result: any): any;
				public toArray(): number[];
				public getSize(param0: any): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class SourceDebugExtension extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<kotlin.jvm.internal.SourceDebugExtension>;
				/**
				 * Constructs a new instance of the kotlin.jvm.internal.SourceDebugExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					value(): string[];
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public equals(obj: any): boolean;
				public value(): string[];
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class SpreadBuilder extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.SpreadBuilder>;
				public add(element: any): void;
				public constructor(size: number);
				public toArray(a: any[]): any[];
				public addSpread(container: any): void;
				public size(): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class StringCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.StringCompanionObject>;
				public static INSTANCE: kotlin.jvm.internal.StringCompanionObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class TypeIntrinsics extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.TypeIntrinsics>;
				public static isMutableListIterator(obj: any): boolean;
				public static isMutableMapEntry(obj: any): boolean;
				public static getFunctionArity(obj: any): number;
				public static throwCce(e: java.lang.ClassCastException): java.lang.ClassCastException;
				public static asMutableCollection(obj: any, message: string): java.util.Collection<any>;
				public static isMutableMap(obj: any): boolean;
				public static throwCce(message: string): void;
				public static asMutableMap(obj: any): java.util.Map<any,any>;
				public static asMutableMapEntry(obj: any): java.util.Map.Entry<any,any>;
				public static castToMap(obj: any): java.util.Map<any,any>;
				public static asMutableList(obj: any): java.util.List<any>;
				public static asMutableListIterator(obj: any): java.util.ListIterator<any>;
				public static isMutableCollection(obj: any): boolean;
				public constructor();
				public static asMutableSet(obj: any): java.util.Set<any>;
				public static asMutableIterable(obj: any): java.lang.Iterable<any>;
				public static beforeCheckcastToFunctionOfArity(obj: any, arity: number, message: string): any;
				public static isFunctionOfArity(obj: any, arity: number): boolean;
				public static castToIterator(obj: any): java.util.Iterator<any>;
				public static asMutableIterator(obj: any, message: string): java.util.Iterator<any>;
				public static asMutableCollection(obj: any): java.util.Collection<any>;
				public static asMutableList(obj: any, message: string): java.util.List<any>;
				public static castToSet(obj: any): java.util.Set<any>;
				public static throwCce(argument: any, requestedClassName: string): void;
				public static asMutableMap(obj: any, message: string): java.util.Map<any,any>;
				public static isMutableSet(obj: any): boolean;
				public static castToMapEntry(obj: any): java.util.Map.Entry<any,any>;
				public static asMutableIterator(obj: any): java.util.Iterator<any>;
				public static castToCollection(obj: any): java.util.Collection<any>;
				public static isMutableIterator(obj: any): boolean;
				public static asMutableIterable(obj: any, message: string): java.lang.Iterable<any>;
				public static castToIterable(obj: any): java.lang.Iterable<any>;
				public static isMutableList(obj: any): boolean;
				public static asMutableMapEntry(obj: any, message: string): java.util.Map.Entry<any,any>;
				public static beforeCheckcastToFunctionOfArity(obj: any, arity: number): any;
				public static castToListIterator(obj: any): java.util.ListIterator<any>;
				public static asMutableListIterator(obj: any, message: string): java.util.ListIterator<any>;
				public static asMutableSet(obj: any, message: string): java.util.Set<any>;
				public static castToList(obj: any): java.util.List<any>;
				public static isMutableIterable(obj: any): boolean;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class TypeParameterReference extends java.lang.Object implements kotlin.reflect.KTypeParameter {
				public static class: java.lang.Class<kotlin.jvm.internal.TypeParameterReference>;
				public constructor(container: any, name: string, variance: kotlin.reflect.KVariance, isReified: boolean);
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public hashCode(): number;
				public getName(): string;
				public isReified(): boolean;
				public getUpperBounds(): java.util.List<kotlin.reflect.KType>;
				public setUpperBounds(upperBounds: java.util.List<any>): void;
				public toString(): string;
				public getVariance(): kotlin.reflect.KVariance;
			}
			export module TypeParameterReference {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kotlin.jvm.internal.TypeParameterReference.Companion>;
					public toString(): string;
					public toString(typeParameter: kotlin.reflect.KTypeParameter): string;
				}
				export module Companion {
					export class WhenMappings extends java.lang.Object {
						public static class: java.lang.Class<kotlin.jvm.internal.TypeParameterReference.Companion.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class TypeReference extends java.lang.Object implements kotlin.reflect.KType {
				public static class: java.lang.Class<kotlin.jvm.internal.TypeReference>;
				public static IS_MARKED_NULLABLE: number;
				public static IS_MUTABLE_COLLECTION_TYPE: number;
				public static IS_NOTHING_TYPE: number;
				public constructor(classifier: kotlin.reflect.KClassifier, arguments: java.util.List<kotlin.reflect.KTypeProjection>, platformTypeUpperBound: kotlin.reflect.KType, flags: number);
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public getClassifier(): kotlin.reflect.KClassifier;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public constructor(classifier: kotlin.reflect.KClassifier, arguments: java.util.List<kotlin.reflect.KTypeProjection>, isMarkedNullable: boolean);
				public hashCode(): number;
				public getFlags$kotlin_stdlib(): number;
				public getArguments(): java.util.List<kotlin.reflect.KTypeProjection>;
				public toString(): string;
				public getPlatformTypeUpperBound$kotlin_stdlib(): kotlin.reflect.KType;
				public isMarkedNullable(): boolean;
			}
			export module TypeReference {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kotlin.jvm.internal.TypeReference.Companion>;
				}
				export class WhenMappings extends java.lang.Object {
					public static class: java.lang.Class<kotlin.jvm.internal.TypeReference.WhenMappings>;
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMappedMarker extends java.lang.Object {
					public static class: java.lang.Class<kotlin.jvm.internal.markers.KMappedMarker>;
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMappedMarker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMutableCollection extends java.lang.Object implements kotlin.jvm.internal.markers.KMutableIterable {
					public static class: java.lang.Class<kotlin.jvm.internal.markers.KMutableCollection>;
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableCollection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMutableIterable extends java.lang.Object implements kotlin.jvm.internal.markers.KMappedMarker {
					public static class: java.lang.Class<kotlin.jvm.internal.markers.KMutableIterable>;
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableIterable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMutableIterator extends java.lang.Object implements kotlin.jvm.internal.markers.KMappedMarker {
					public static class: java.lang.Class<kotlin.jvm.internal.markers.KMutableIterator>;
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableIterator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMutableList extends java.lang.Object implements kotlin.jvm.internal.markers.KMutableCollection {
					public static class: java.lang.Class<kotlin.jvm.internal.markers.KMutableList>;
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableList interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMutableListIterator extends java.lang.Object implements kotlin.jvm.internal.markers.KMutableIterator {
					public static class: java.lang.Class<kotlin.jvm.internal.markers.KMutableListIterator>;
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableListIterator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMutableMap extends java.lang.Object implements kotlin.jvm.internal.markers.KMappedMarker {
					public static class: java.lang.Class<kotlin.jvm.internal.markers.KMutableMap>;
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export module KMutableMap {
					export class Entry extends java.lang.Object implements kotlin.jvm.internal.markers.KMappedMarker {
						public static class: java.lang.Class<kotlin.jvm.internal.markers.KMutableMap.Entry>;
						/**
						 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableMap$Entry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMutableSet extends java.lang.Object implements kotlin.jvm.internal.markers.KMutableCollection {
					public static class: java.lang.Class<kotlin.jvm.internal.markers.KMutableSet>;
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module kotlin {
	export module math {
		export class Constants extends java.lang.Object {
			public static class: java.lang.Class<kotlin.math.Constants>;
			public static INSTANCE: kotlin.math.Constants;
			public static LN2: number;
			public static epsilon: number;
			public static taylor_2_bound: number;
			public static taylor_n_bound: number;
			public static upper_taylor_2_bound: number;
			public static upper_taylor_n_bound: number;
		}
	}
}

declare module kotlin {
	export module properties {
		export class Delegates extends java.lang.Object {
			public static class: java.lang.Class<kotlin.properties.Delegates>;
			public static INSTANCE: kotlin.properties.Delegates;
			public observable(initialValue: any, onChange: kotlin.jvm.functions.Function3<any,any,any,any>): kotlin.properties.ReadWriteProperty<any,any>;
			public vetoable(initialValue: any, onChange: kotlin.jvm.functions.Function3<any,any,any,any>): kotlin.properties.ReadWriteProperty<any,any>;
			public notNull(): kotlin.properties.ReadWriteProperty<any,any>;
		}
	}
}

declare module kotlin {
	export module properties {
		export class NotNullVar<T>  extends kotlin.properties.ReadWriteProperty<any,any> {
			public static class: java.lang.Class<kotlin.properties.NotNullVar<any>>;
			public setValue(thisRef: any, property: kotlin.reflect.KProperty<any>, value: any): void;
			public toString(): string;
			public getValue(thisRef: any, property: kotlin.reflect.KProperty<any>): any;
			public constructor();
			public getValue(param0: any, param1: kotlin.reflect.KProperty<any>): any;
			public setValue(param0: any, param1: kotlin.reflect.KProperty<any>, param2: any): void;
		}
	}
}

declare module kotlin {
	export module properties {
		export abstract class ObservableProperty<V>  extends kotlin.properties.ReadWriteProperty<any,any> {
			public static class: java.lang.Class<kotlin.properties.ObservableProperty<any>>;
			public constructor(initialValue: any);
			public afterChange(property: kotlin.reflect.KProperty<any>, oldValue: any, newValue: any): void;
			public setValue(thisRef: any, property: kotlin.reflect.KProperty<any>, value: any): void;
			public toString(): string;
			public getValue(thisRef: any, property: kotlin.reflect.KProperty<any>): any;
			public beforeChange(property: kotlin.reflect.KProperty<any>, oldValue: any, newValue: any): boolean;
			public getValue(param0: any, param1: kotlin.reflect.KProperty<any>): any;
			public setValue(param0: any, param1: kotlin.reflect.KProperty<any>, param2: any): void;
		}
	}
}

declare module kotlin {
	export module properties {
		export class PropertyDelegateProvider<T, D>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.properties.PropertyDelegateProvider<any,any>>;
			/**
			 * Constructs a new instance of the kotlin.properties.PropertyDelegateProvider<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				provideDelegate(param0: T, param1: kotlin.reflect.KProperty<any>): D;
			});
			public constructor();
			public provideDelegate(param0: T, param1: kotlin.reflect.KProperty<any>): D;
		}
	}
}

declare module kotlin {
	export module properties {
		export class ReadOnlyProperty<T, V>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.properties.ReadOnlyProperty<any,any>>;
			/**
			 * Constructs a new instance of the kotlin.properties.ReadOnlyProperty<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getValue(param0: T, param1: kotlin.reflect.KProperty<any>): V;
			});
			public constructor();
			public getValue(param0: T, param1: kotlin.reflect.KProperty<any>): V;
		}
	}
}

declare module kotlin {
	export module properties {
		export class ReadWriteProperty<T, V>  extends kotlin.properties.ReadOnlyProperty<any,any> {
			public static class: java.lang.Class<kotlin.properties.ReadWriteProperty<any,any>>;
			/**
			 * Constructs a new instance of the kotlin.properties.ReadWriteProperty<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getValue(param0: any, param1: kotlin.reflect.KProperty<any>): any;
				setValue(param0: any, param1: kotlin.reflect.KProperty<any>, param2: any): void;
				getValue(param0: any, param1: kotlin.reflect.KProperty<any>): any;
			});
			public constructor();
			public getValue(param0: any, param1: kotlin.reflect.KProperty<any>): any;
			public setValue(param0: any, param1: kotlin.reflect.KProperty<any>, param2: any): void;
		}
	}
}

declare module kotlin {
	export module random {
		export abstract class AbstractPlatformRandom extends kotlin.random.Random {
			public static class: java.lang.Class<kotlin.random.AbstractPlatformRandom>;
			public nextBytes(size: number): number[];
			public getImpl(): java.util.Random;
			public nextBoolean(): boolean;
			public nextBits(bitCount: number): number;
			public nextBytes(array: number[]): number[];
			public nextDouble(until: number): number;
			public constructor();
			public nextLong(): number;
			public nextLong(from: number, param1: number): number;
			public nextBytes(array: number[], fromIndex: number, toIndex: number): number[];
			public nextDouble(): number;
			public nextFloat(): number;
			public nextBits(param0: number): number;
			public nextInt(until: number): number;
			public nextInt(from: number, until: number): number;
			public nextInt(): number;
			public nextLong(until: number): number;
			public nextDouble(from: number, param1: number): number;
		}
	}
}

declare module kotlin {
	export module random {
		export class FallbackThreadLocalRandom extends kotlin.random.AbstractPlatformRandom {
			public static class: java.lang.Class<kotlin.random.FallbackThreadLocalRandom>;
			public getImpl(): java.util.Random;
			public constructor();
		}
	}
}

declare module kotlin {
	export module random {
		export class KotlinRandom extends java.util.Random {
			public static class: java.lang.Class<kotlin.random.KotlinRandom>;
			public nextInt(n: number): number;
			public nextBoolean(): boolean;
			public constructor();
			public constructor(impl: kotlin.random.Random);
			public nextLong(): number;
			public nextBytes(bytes: number[]): void;
			public nextFloat(): number;
			public nextDouble(): number;
			public setSeed(seed: number): void;
			public next(bits: number): number;
			public constructor(seed: number);
			public getImpl(): kotlin.random.Random;
			public nextInt(): number;
			public nextInt(bound: number): number;
		}
		export module KotlinRandom {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.random.KotlinRandom.Companion>;
			}
		}
	}
}

declare module kotlin {
	export module random {
		export class PlatformRandom extends kotlin.random.AbstractPlatformRandom implements java.io.Serializable {
			public static class: java.lang.Class<kotlin.random.PlatformRandom>;
			public getImpl(): java.util.Random;
			public constructor(impl: java.util.Random);
			public constructor();
		}
		export module PlatformRandom {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.random.PlatformRandom.Companion>;
			}
		}
	}
}

declare module kotlin {
	export module random {
		export abstract class Random extends java.lang.Object {
			public static class: java.lang.Class<kotlin.random.Random>;
			public nextBytes(size: number): number[];
			public nextBoolean(): boolean;
			public nextBytes(array: number[]): number[];
			public nextDouble(until: number): number;
			public constructor();
			public nextLong(): number;
			public nextLong(from: number, param1: number): number;
			public nextBytes(array: number[], fromIndex: number, toIndex: number): number[];
			public nextDouble(): number;
			public nextFloat(): number;
			public nextBits(param0: number): number;
			public nextInt(until: number): number;
			public nextInt(from: number, until: number): number;
			public nextInt(): number;
			public nextLong(until: number): number;
			public nextDouble(from: number, param1: number): number;
		}
		export module Random {
			export class Default extends kotlin.random.Random implements java.io.Serializable {
				public static class: java.lang.Class<kotlin.random.Random.Default>;
				public nextBytes(array: number[]): number[];
				public nextLong(until: number): number;
				public nextBits(bitCount: number): number;
				public nextDouble(): number;
				public nextBytes(size: number): number[];
				public nextInt(): number;
				public nextLong(): number;
				public nextFloat(): number;
				public nextDouble(from: number, param1: number): number;
				public nextInt(from: number, until: number): number;
				public nextBits(param0: number): number;
				public nextDouble(until: number): number;
				public nextBoolean(): boolean;
				public nextLong(from: number, param1: number): number;
				public nextInt(until: number): number;
				public nextBytes(array: number[], fromIndex: number, toIndex: number): number[];
			}
			export module Default {
				export class Serialized extends java.lang.Object implements java.io.Serializable {
					public static class: java.lang.Class<kotlin.random.Random.Default.Serialized>;
					public static INSTANCE: kotlin.random.Random.Default.Serialized;
				}
			}
		}
	}
}

declare module kotlin {
	export module random {
		export class XorWowRandom extends kotlin.random.Random implements java.io.Serializable {
			public static class: java.lang.Class<kotlin.random.XorWowRandom>;
			public nextBits(param0: number): number;
			public nextInt(until: number): number;
			public constructor(x: number, y: number, z: number, w: number, v: number, addend: number);
			public constructor(seed1: number, seed2: number);
			public nextBits(bitCount: number): number;
			public nextInt(from: number, until: number): number;
			public nextInt(): number;
			public constructor();
		}
		export module XorWowRandom {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.random.XorWowRandom.Companion>;
			}
		}
	}
}

declare module kotlin {
	export module random {
		export module jdk8 {
			export class PlatformThreadLocalRandom extends kotlin.random.AbstractPlatformRandom {
				public static class: java.lang.Class<kotlin.random.jdk8.PlatformThreadLocalRandom>;
				public nextInt(): number;
				public nextLong(): number;
				public getImpl(): java.util.Random;
				public nextLong(until: number): number;
				public nextDouble(from: number, param1: number): number;
				public nextInt(from: number, until: number): number;
				public nextDouble(until: number): number;
				public nextDouble(): number;
				public nextLong(from: number, param1: number): number;
				public nextInt(until: number): number;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class CharProgression extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ranges.CharProgression>;
			public getFirst(): string;
			public iterator(): kotlin.collections.CharIterator;
			public constructor(start: string, endInclusive: string, step: number);
			public isEmpty(): boolean;
			public forEach(action: any /* any*/): void;
			public getLast(): string;
			public getStep(): number;
			public equals(other: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
		}
		export module CharProgression {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.CharProgression.Companion>;
				public fromClosedRange(rangeStart: string, rangeEnd: string, step: number): kotlin.ranges.CharProgression;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class CharProgressionIterator extends kotlin.collections.CharIterator {
			public static class: java.lang.Class<kotlin.ranges.CharProgressionIterator>;
			public constructor(first: string, last: string, step: number);
			public nextChar(): string;
			public constructor();
			public hasNext(): boolean;
			public getStep(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class CharRange extends kotlin.ranges.CharProgression {
			public static class: java.lang.Class<kotlin.ranges.CharRange>;
			public getEndInclusive(): any;
			public iterator(): kotlin.collections.CharIterator;
			public constructor(start: string, endInclusive: string, step: number);
			public isEmpty(): boolean;
			public contains(value: string): boolean;
			/** @deprecated */
			public getEndExclusive(): java.lang.Character;
			public forEach(action: any /* any*/): void;
			public getEndInclusive(): java.lang.Character;
			public equals(other: any): boolean;
			public contains(param0: any): boolean;
			public toString(): string;
			public getStart(): any;
			public constructor(start: string, endInclusive: string);
			public getStart(): java.lang.Character;
			public getEndExclusive(): any;
			public spliterator(): java.util.Spliterator<any>;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
		}
		export module CharRange {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.CharRange.Companion>;
				public getEMPTY(): kotlin.ranges.CharRange;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ClosedDoubleRange extends kotlin.ranges.ClosedFloatingPointRange<java.lang.Double> {
			public static class: java.lang.Class<kotlin.ranges.ClosedDoubleRange>;
			public getEndInclusive(): any;
			public isEmpty(): boolean;
			public lessThanOrEquals(param0: any, param1: any): boolean;
			public constructor(start: number, param1: number);
			public equals(other: any): boolean;
			public contains(param0: any): boolean;
			public toString(): string;
			public getStart(): any;
			public lessThanOrEquals(a: number, param1: number): boolean;
			public equals(obj: any): boolean;
			public getEndInclusive(): java.lang.Double;
			public getStart(): java.lang.Double;
			public contains(value: number): boolean;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ClosedFloatRange extends kotlin.ranges.ClosedFloatingPointRange<java.lang.Float> {
			public static class: java.lang.Class<kotlin.ranges.ClosedFloatRange>;
			public getEndInclusive(): any;
			public constructor(start: number, endInclusive: number);
			public isEmpty(): boolean;
			public lessThanOrEquals(param0: any, param1: any): boolean;
			public getStart(): java.lang.Float;
			public getEndInclusive(): java.lang.Float;
			public equals(other: any): boolean;
			public contains(param0: any): boolean;
			public toString(): string;
			public getStart(): any;
			public equals(obj: any): boolean;
			public contains(value: number): boolean;
			public lessThanOrEquals(a: number, b: number): boolean;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ClosedFloatingPointRange<T>  extends kotlin.ranges.ClosedRange<any> {
			public static class: java.lang.Class<kotlin.ranges.ClosedFloatingPointRange<any>>;
			/**
			 * Constructs a new instance of the kotlin.ranges.ClosedFloatingPointRange<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				contains(param0: any): boolean;
				isEmpty(): boolean;
				lessThanOrEquals(param0: any, param1: any): boolean;
				getStart(): any;
				getEndInclusive(): any;
				contains(param0: any): boolean;
				isEmpty(): boolean;
			});
			public constructor();
			public getEndInclusive(): any;
			public contains(param0: any): boolean;
			public getStart(): any;
			public isEmpty(): boolean;
			public lessThanOrEquals(param0: any, param1: any): boolean;
		}
		export module ClosedFloatingPointRange {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.ClosedFloatingPointRange.DefaultImpls>;
				public static isEmpty($this: kotlin.ranges.ClosedFloatingPointRange<any>): boolean;
				public static contains($this: kotlin.ranges.ClosedFloatingPointRange<any>, value: java.lang.Comparable<any>): boolean;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ClosedRange<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ranges.ClosedRange<any>>;
			/**
			 * Constructs a new instance of the kotlin.ranges.ClosedRange<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getStart(): T;
				getEndInclusive(): T;
				contains(param0: T): boolean;
				isEmpty(): boolean;
			});
			public constructor();
			public getStart(): T;
			public isEmpty(): boolean;
			public getEndInclusive(): T;
			public contains(param0: T): boolean;
		}
		export module ClosedRange {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.ClosedRange.DefaultImpls>;
				public static isEmpty($this: kotlin.ranges.ClosedRange<any>): boolean;
				public static contains($this: kotlin.ranges.ClosedRange<any>, value: java.lang.Comparable<any>): boolean;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ComparableOpenEndRange<T>  extends kotlin.ranges.OpenEndRange<any> {
			public static class: java.lang.Class<kotlin.ranges.ComparableOpenEndRange<any>>;
			public equals(other: any): boolean;
			public contains(param0: any): boolean;
			public getStart(): any;
			public toString(): string;
			public equals(obj: any): boolean;
			public isEmpty(): boolean;
			public contains(value: any): boolean;
			public constructor(start: any, endExclusive: any);
			public getEndExclusive(): any;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ComparableRange<T>  extends kotlin.ranges.ClosedRange<any> {
			public static class: java.lang.Class<kotlin.ranges.ComparableRange<any>>;
			public getEndInclusive(): any;
			public equals(other: any): boolean;
			public constructor(start: any, endInclusive: any);
			public contains(param0: any): boolean;
			public getStart(): any;
			public toString(): string;
			public equals(obj: any): boolean;
			public isEmpty(): boolean;
			public contains(value: any): boolean;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class IntProgression extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ranges.IntProgression>;
			public isEmpty(): boolean;
			public getFirst(): number;
			public iterator(): kotlin.collections.IntIterator;
			public forEach(action: any /* any*/): void;
			public getStep(): number;
			public equals(other: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public constructor(start: number, endInclusive: number, step: number);
			public getLast(): number;
			public spliterator(): java.util.Spliterator<any>;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
		}
		export module IntProgression {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.IntProgression.Companion>;
				public fromClosedRange(rangeStart: number, rangeEnd: number, step: number): kotlin.ranges.IntProgression;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class IntProgressionIterator extends kotlin.collections.IntIterator {
			public static class: java.lang.Class<kotlin.ranges.IntProgressionIterator>;
			public constructor(first: number, last: number, step: number);
			public nextInt(): number;
			public constructor();
			public hasNext(): boolean;
			public getStep(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class IntRange extends kotlin.ranges.IntProgression {
			public static class: java.lang.Class<kotlin.ranges.IntRange>;
			public getEndInclusive(): any;
			public constructor(start: number, endInclusive: number);
			public isEmpty(): boolean;
			public iterator(): kotlin.collections.IntIterator;
			/** @deprecated */
			public getEndExclusive(): java.lang.Integer;
			public forEach(action: any /* any*/): void;
			public getStart(): java.lang.Integer;
			public getEndInclusive(): java.lang.Integer;
			public equals(other: any): boolean;
			public contains(param0: any): boolean;
			public toString(): string;
			public getStart(): any;
			public constructor(start: number, endInclusive: number, step: number);
			public getEndExclusive(): any;
			public contains(value: number): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
		}
		export module IntRange {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.IntRange.Companion>;
				public getEMPTY(): kotlin.ranges.IntRange;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class LongProgression extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ranges.LongProgression>;
			public isEmpty(): boolean;
			public getFirst(): number;
			public forEach(action: any /* any*/): void;
			public getStep(): number;
			public iterator(): kotlin.collections.LongIterator;
			public equals(other: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public constructor(start: number, param1: number, endInclusive: number);
			public getLast(): number;
			public spliterator(): java.util.Spliterator<any>;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
		}
		export module LongProgression {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.LongProgression.Companion>;
				public fromClosedRange(rangeStart: number, param1: number, rangeEnd: number): kotlin.ranges.LongProgression;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class LongProgressionIterator extends kotlin.collections.LongIterator {
			public static class: java.lang.Class<kotlin.ranges.LongProgressionIterator>;
			public constructor(first: number, param1: number, last: number);
			public constructor();
			public hasNext(): boolean;
			public nextLong(): number;
			public getStep(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class LongRange extends kotlin.ranges.LongProgression {
			public static class: java.lang.Class<kotlin.ranges.LongRange>;
			public getEndInclusive(): any;
			public getEndInclusive(): java.lang.Long;
			public isEmpty(): boolean;
			public constructor(start: number, param1: number);
			public getStart(): java.lang.Long;
			/** @deprecated */
			public getEndExclusive(): java.lang.Long;
			public forEach(action: any /* any*/): void;
			public iterator(): kotlin.collections.LongIterator;
			public equals(other: any): boolean;
			public contains(param0: any): boolean;
			public toString(): string;
			public getStart(): any;
			public constructor(start: number, param1: number, endInclusive: number);
			public getEndExclusive(): any;
			public contains(value: number): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
		}
		export module LongRange {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.LongRange.Companion>;
				public getEMPTY(): kotlin.ranges.LongRange;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class OpenEndDoubleRange extends kotlin.ranges.OpenEndRange<java.lang.Double> {
			public static class: java.lang.Class<kotlin.ranges.OpenEndDoubleRange>;
			public equals(other: any): boolean;
			public contains(param0: any): boolean;
			public toString(): string;
			public getStart(): any;
			public isEmpty(): boolean;
			public equals(obj: any): boolean;
			public constructor(start: number, param1: number);
			public getEndExclusive(): any;
			public getStart(): java.lang.Double;
			public getEndExclusive(): java.lang.Double;
			public contains(value: number): boolean;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class OpenEndFloatRange extends kotlin.ranges.OpenEndRange<java.lang.Float> {
			public static class: java.lang.Class<kotlin.ranges.OpenEndFloatRange>;
			public equals(other: any): boolean;
			public contains(param0: any): boolean;
			public getEndExclusive(): java.lang.Float;
			public toString(): string;
			public getStart(): any;
			public isEmpty(): boolean;
			public equals(obj: any): boolean;
			public getEndExclusive(): any;
			public constructor(start: number, endExclusive: number);
			public contains(value: number): boolean;
			public getStart(): java.lang.Float;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class OpenEndRange<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ranges.OpenEndRange<any>>;
			/**
			 * Constructs a new instance of the kotlin.ranges.OpenEndRange<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getStart(): T;
				getEndExclusive(): T;
				contains(param0: T): boolean;
				isEmpty(): boolean;
			});
			public constructor();
			public getStart(): T;
			public getEndExclusive(): T;
			public isEmpty(): boolean;
			public contains(param0: T): boolean;
		}
		export module OpenEndRange {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.OpenEndRange.DefaultImpls>;
				public static contains($this: kotlin.ranges.OpenEndRange<any>, value: java.lang.Comparable<any>): boolean;
				public static isEmpty($this: kotlin.ranges.OpenEndRange<any>): boolean;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class UIntProgression extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ranges.UIntProgression>;
			public "getFirst-pVg5ArA"(): number;
			public equals(other: any): boolean;
			public toString(): string;
			public isEmpty(): boolean;
			public equals(obj: any): boolean;
			public iterator(): java.util.Iterator<kotlin.UInt>;
			public "getLast-pVg5ArA"(): number;
			public forEach(action: any /* any*/): void;
			public spliterator(): java.util.Spliterator<any>;
			public getStep(): number;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
		}
		export module UIntProgression {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.UIntProgression.Companion>;
				public "fromClosedRange-Nkh28Cs"(rangeStart: number, rangeEnd: number, step: number): kotlin.ranges.UIntProgression;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class UIntProgressionIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ranges.UIntProgressionIterator>;
			public "next-pVg5ArA"(): number;
			public hasNext(): boolean;
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class UIntRange extends kotlin.ranges.UIntProgression {
			public static class: java.lang.Class<kotlin.ranges.UIntRange>;
			public getEndInclusive(): any;
			public "getStart-pVg5ArA"(): number;
			public isEmpty(): boolean;
			public iterator(): java.util.Iterator<kotlin.UInt>;
			public forEach(action: any /* any*/): void;
			public equals(other: any): boolean;
			public contains(param0: any): boolean;
			public toString(): string;
			public getStart(): any;
			/** @deprecated */
			public "getEndExclusive-pVg5ArA"(): number;
			public "contains-WZ4Q5Ns"(value: number): boolean;
			public getEndExclusive(): any;
			public spliterator(): java.util.Spliterator<any>;
			public "getEndInclusive-pVg5ArA"(): number;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
		}
		export module UIntRange {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.UIntRange.Companion>;
				public getEMPTY(): kotlin.ranges.UIntRange;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ULongProgression extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ranges.ULongProgression>;
			public equals(other: any): boolean;
			public "getFirst-s-VKNKU"(): number;
			public toString(): string;
			public isEmpty(): boolean;
			public equals(obj: any): boolean;
			public iterator(): java.util.Iterator<kotlin.ULong>;
			public "getLast-s-VKNKU"(): number;
			public forEach(action: any /* any*/): void;
			public spliterator(): java.util.Spliterator<any>;
			public getStep(): number;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
		}
		export module ULongProgression {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.ULongProgression.Companion>;
				public "fromClosedRange-7ftBX0g"(rangeStart: number, param1: number, rangeEnd: number): kotlin.ranges.ULongProgression;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ULongProgressionIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ranges.ULongProgressionIterator>;
			public "next-s-VKNKU"(): number;
			public hasNext(): boolean;
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ULongRange extends kotlin.ranges.ULongProgression {
			public static class: java.lang.Class<kotlin.ranges.ULongRange>;
			public getEndInclusive(): any;
			public "contains-VKZWuLQ"(value: number): boolean;
			public isEmpty(): boolean;
			public "getEndInclusive-s-VKNKU"(): number;
			public forEach(action: any /* any*/): void;
			public "getStart-s-VKNKU"(): number;
			public equals(other: any): boolean;
			public contains(param0: any): boolean;
			public toString(): string;
			public getStart(): any;
			/** @deprecated */
			public "getEndExclusive-s-VKNKU"(): number;
			public iterator(): java.util.Iterator<kotlin.ULong>;
			public getEndExclusive(): any;
			public spliterator(): java.util.Spliterator<any>;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
		}
		export module ULongRange {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.ULongRange.Companion>;
				public getEMPTY(): kotlin.ranges.ULongRange;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class GenericArrayTypeImpl extends java.lang.Object implements java.lang.reflect.GenericArrayType, kotlin.reflect.TypeImpl {
			public static class: java.lang.Class<kotlin.reflect.GenericArrayTypeImpl>;
			public equals(other: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public constructor(elementType: java.lang.reflect.Type);
			public getGenericComponentType(): java.lang.reflect.Type;
			public getTypeName(): string;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KAnnotatedElement extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KAnnotatedElement>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KAnnotatedElement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KCallable<R>  extends kotlin.reflect.KAnnotatedElement {
			public static class: java.lang.Class<kotlin.reflect.KCallable<any>>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KCallable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(...param0: any[]): any;
				callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public call(...param0: any[]): any;
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public isOpen(): boolean;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public getName(): string;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getVisibility(): kotlin.reflect.KVisibility;
			public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			public isSuspend(): boolean;
			public isAbstract(): boolean;
			public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
		}
		export module KCallable {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KCallable.DefaultImpls>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KClass<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KClass<any>>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KClass<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getSimpleName(): string;
				getQualifiedName(): string;
				getMembers(): java.util.Collection<kotlin.reflect.KCallable<any>>;
				getConstructors(): java.util.Collection<kotlin.reflect.KFunction<T>>;
				getNestedClasses(): java.util.Collection<kotlin.reflect.KClass<any>>;
				getObjectInstance(): T;
				isInstance(param0: any): boolean;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				getSupertypes(): java.util.List<kotlin.reflect.KType>;
				getSealedSubclasses(): java.util.List<kotlin.reflect.KClass<any>>;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSealed(): boolean;
				isData(): boolean;
				isInner(): boolean;
				isCompanion(): boolean;
				isFun(): boolean;
				isValue(): boolean;
				equals(param0: any): boolean;
				hashCode(): number;
				getMembers(): java.util.Collection<kotlin.reflect.KCallable<any>>;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public isFinal(): boolean;
			public isInner(): boolean;
			public equals(param0: any): boolean;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public isFun(): boolean;
			public getObjectInstance(): T;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getSimpleName(): string;
			public getSupertypes(): java.util.List<kotlin.reflect.KType>;
			public isCompanion(): boolean;
			public isSealed(): boolean;
			public getNestedClasses(): java.util.Collection<kotlin.reflect.KClass<any>>;
			public getQualifiedName(): string;
			public isOpen(): boolean;
			public getSealedSubclasses(): java.util.List<kotlin.reflect.KClass<any>>;
			public equals(obj: any): boolean;
			public getVisibility(): kotlin.reflect.KVisibility;
			public getMembers(): java.util.Collection<kotlin.reflect.KCallable<any>>;
			public isData(): boolean;
			public isInstance(param0: any): boolean;
			public isAbstract(): boolean;
			public isValue(): boolean;
			public getConstructors(): java.util.Collection<kotlin.reflect.KFunction<T>>;
			public hashCode(): number;
		}
		export module KClass {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KClass.DefaultImpls>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KClasses extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KClasses>;
			public static safeCast($this$safeCast: kotlin.reflect.KClass<any>, value: any): any;
			public static cast($this$cast: kotlin.reflect.KClass<any>, value: any): any;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KClassifier extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KClassifier>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KClassifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KDeclarationContainer extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KDeclarationContainer>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KDeclarationContainer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getMembers(): java.util.Collection<kotlin.reflect.KCallable<any>>;
			});
			public constructor();
			public getMembers(): java.util.Collection<kotlin.reflect.KCallable<any>>;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KFunction<R>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KFunction<any>>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KFunction<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				isInline(): boolean;
				isExternal(): boolean;
				isOperator(): boolean;
				isInfix(): boolean;
				isSuspend(): boolean;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(...param0: any[]): R;
				callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): R;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public call(...param0: any[]): R;
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			public isSuspend(): boolean;
			public isOperator(): boolean;
			public isInline(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public isInfix(): boolean;
			public getVisibility(): kotlin.reflect.KVisibility;
			public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): R;
			public isAbstract(): boolean;
			public isExternal(): boolean;
		}
		export module KFunction {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KFunction.DefaultImpls>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KMutableProperty<V>  extends kotlin.reflect.KProperty<any> {
			public static class: java.lang.Class<kotlin.reflect.KMutableProperty<any>>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KMutableProperty<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter<any>;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(...param0: any[]): any;
				callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public getGetter(): kotlin.reflect.KProperty.Getter<any>;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			public isSuspend(): boolean;
			public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
			public isLateinit(): boolean;
			public call(...param0: any[]): any;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public isAbstract(): boolean;
			public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
		}
		export module KMutableProperty {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KMutableProperty.DefaultImpls>;
			}
			export class Setter<V>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KMutableProperty.Setter<any>>;
				/**
				 * Constructs a new instance of the kotlin.reflect.KMutableProperty$Setter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getProperty(): kotlin.reflect.KProperty<V>;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): java.util.List<kotlin.reflect.KParameter>;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
					call(...param0: any[]): any;
					callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					isSuspend(): boolean;
					getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				});
				public constructor();
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(...param0: any[]): any;
				public getProperty(): kotlin.reflect.KProperty<V>;
				public isOpen(): boolean;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KMutableProperty0<V>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KMutableProperty0<any>>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KMutableProperty0<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				set(param0: V): void;
				getSetter(): kotlin.reflect.KMutableProperty0.Setter<V>;
				get(): V;
				getDelegate(): any;
				getGetter(): kotlin.reflect.KProperty0.Getter<V>;
				getSetter(): kotlin.reflect.KMutableProperty.Setter<V>;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter<V>;
				invoke(): any;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter<V>;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(...param0: any[]): any;
				callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(...param0: any[]): any;
				callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public getGetter(): kotlin.reflect.KProperty.Getter<V>;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			public isSuspend(): boolean;
			public isLateinit(): boolean;
			public call(...param0: any[]): any;
			public getSetter(): kotlin.reflect.KMutableProperty0.Setter<V>;
			public getDelegate(): any;
			public getSetter(): kotlin.reflect.KMutableProperty.Setter<V>;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public isAbstract(): boolean;
			public set(param0: V): void;
			public get(): V;
			public getGetter(): kotlin.reflect.KProperty0.Getter<V>;
			public invoke(): any;
			public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
		}
		export module KMutableProperty0 {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KMutableProperty0.DefaultImpls>;
			}
			export class Setter<V>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KMutableProperty0.Setter<any>>;
				/**
				 * Constructs a new instance of the kotlin.reflect.KMutableProperty0$Setter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any): any;
					getProperty(): kotlin.reflect.KProperty<V>;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): java.util.List<kotlin.reflect.KParameter>;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
					call(...param0: any[]): any;
					callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					isSuspend(): boolean;
					getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				});
				public constructor();
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public invoke(param0: any): any;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(...param0: any[]): any;
				public getProperty(): kotlin.reflect.KProperty<V>;
				public isOpen(): boolean;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KMutableProperty1<T, V>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KMutableProperty1<any,any>>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KMutableProperty1<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				set(param0: T, param1: V): void;
				getSetter(): kotlin.reflect.KMutableProperty1.Setter<T,V>;
				get(param0: T): V;
				getDelegate(param0: T): any;
				getGetter(): kotlin.reflect.KProperty1.Getter<T,V>;
				getSetter(): kotlin.reflect.KMutableProperty.Setter<V>;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter<V>;
				invoke(param0: any): any;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter<V>;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(...param0: any[]): any;
				callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(...param0: any[]): any;
				callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public set(param0: T, param1: V): void;
			public getGetter(): kotlin.reflect.KProperty.Getter<V>;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			public getDelegate(param0: T): any;
			public isSuspend(): boolean;
			public isLateinit(): boolean;
			public getSetter(): kotlin.reflect.KMutableProperty1.Setter<T,V>;
			public getGetter(): kotlin.reflect.KProperty1.Getter<T,V>;
			public call(...param0: any[]): any;
			public getSetter(): kotlin.reflect.KMutableProperty.Setter<V>;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public invoke(param0: any): any;
			public getVisibility(): kotlin.reflect.KVisibility;
			public isAbstract(): boolean;
			public get(param0: T): V;
			public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
		}
		export module KMutableProperty1 {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KMutableProperty1.DefaultImpls>;
			}
			export class Setter<T, V>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KMutableProperty1.Setter<any,any>>;
				/**
				 * Constructs a new instance of the kotlin.reflect.KMutableProperty1$Setter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any): any;
					getProperty(): kotlin.reflect.KProperty<V>;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): java.util.List<kotlin.reflect.KParameter>;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
					call(...param0: any[]): any;
					callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					isSuspend(): boolean;
					getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				});
				public constructor();
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public invoke(param0: any, param1: any): any;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(...param0: any[]): any;
				public getProperty(): kotlin.reflect.KProperty<V>;
				public isOpen(): boolean;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KMutableProperty2<D, E, V>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KMutableProperty2<any,any,any>>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KMutableProperty2<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				set(param0: D, param1: E, param2: V): void;
				getSetter(): kotlin.reflect.KMutableProperty2.Setter<D,E,V>;
				get(param0: D, param1: E): V;
				getDelegate(param0: D, param1: E): any;
				getGetter(): kotlin.reflect.KProperty2.Getter<D,E,V>;
				getSetter(): kotlin.reflect.KMutableProperty.Setter<V>;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter<V>;
				invoke(param0: any, param1: any): any;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter<V>;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(...param0: any[]): any;
				callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(...param0: any[]): any;
				callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public get(param0: D, param1: E): V;
			public getGetter(): kotlin.reflect.KProperty.Getter<V>;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			public isSuspend(): boolean;
			public getGetter(): kotlin.reflect.KProperty2.Getter<D,E,V>;
			public isLateinit(): boolean;
			public getDelegate(param0: D, param1: E): any;
			public invoke(param0: any, param1: any): any;
			public call(...param0: any[]): any;
			public getSetter(): kotlin.reflect.KMutableProperty.Setter<V>;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public set(param0: D, param1: E, param2: V): void;
			public isAbstract(): boolean;
			public getSetter(): kotlin.reflect.KMutableProperty2.Setter<D,E,V>;
			public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
		}
		export module KMutableProperty2 {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KMutableProperty2.DefaultImpls>;
			}
			export class Setter<D, E, V>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KMutableProperty2.Setter<any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.reflect.KMutableProperty2$Setter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any, param2: any): any;
					getProperty(): kotlin.reflect.KProperty<V>;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): java.util.List<kotlin.reflect.KParameter>;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
					call(...param0: any[]): any;
					callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					isSuspend(): boolean;
					getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				});
				public constructor();
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getName(): string;
				public invoke(param0: any, param1: any, param2: any): any;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(...param0: any[]): any;
				public getProperty(): kotlin.reflect.KProperty<V>;
				public isOpen(): boolean;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KParameter extends java.lang.Object implements kotlin.reflect.KAnnotatedElement {
			public static class: java.lang.Class<kotlin.reflect.KParameter>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KParameter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getIndex(): number;
				getName(): string;
				getType(): kotlin.reflect.KType;
				getKind(): kotlin.reflect.KParameter.Kind;
				isOptional(): boolean;
				isVararg(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public getIndex(): number;
			public isOptional(): boolean;
			public getType(): kotlin.reflect.KType;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public getName(): string;
			public getKind(): kotlin.reflect.KParameter.Kind;
			public isVararg(): boolean;
		}
		export module KParameter {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KParameter.DefaultImpls>;
			}
			export class Kind {
				public static class: java.lang.Class<kotlin.reflect.KParameter.Kind>;
				public static INSTANCE: kotlin.reflect.KParameter.Kind;
				public static EXTENSION_RECEIVER: kotlin.reflect.KParameter.Kind;
				public static VALUE: kotlin.reflect.KParameter.Kind;
				public static values(): kotlin.reflect.KParameter.Kind[];
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(value: string): kotlin.reflect.KParameter.Kind;
				public static getEntries(): kotlin.enums.EnumEntries<kotlin.reflect.KParameter.Kind>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KProperty<V>  extends kotlin.reflect.KCallable<any> {
			public static class: java.lang.Class<kotlin.reflect.KProperty<any>>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KProperty<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter<any>;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(...param0: any[]): any;
				callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public getGetter(): kotlin.reflect.KProperty.Getter<any>;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			public isSuspend(): boolean;
			public isLateinit(): boolean;
			public call(...param0: any[]): any;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public isAbstract(): boolean;
			public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
		}
		export module KProperty {
			export class Accessor<V>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KProperty.Accessor<any>>;
				/**
				 * Constructs a new instance of the kotlin.reflect.KProperty$Accessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getProperty(): kotlin.reflect.KProperty<V>;
				});
				public constructor();
				public getProperty(): kotlin.reflect.KProperty<V>;
			}
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KProperty.DefaultImpls>;
			}
			export class Getter<V>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KProperty.Getter<any>>;
				/**
				 * Constructs a new instance of the kotlin.reflect.KProperty$Getter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getProperty(): kotlin.reflect.KProperty<V>;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): java.util.List<kotlin.reflect.KParameter>;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
					call(...param0: any[]): any;
					callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					isSuspend(): boolean;
					getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				});
				public constructor();
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(...param0: any[]): any;
				public getProperty(): kotlin.reflect.KProperty<V>;
				public isOpen(): boolean;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KProperty0<V>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KProperty0<any>>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KProperty0<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				get(): V;
				getDelegate(): any;
				getGetter(): kotlin.reflect.KProperty0.Getter<V>;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter<V>;
				invoke(): any;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(...param0: any[]): any;
				callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public getGetter(): kotlin.reflect.KProperty.Getter<V>;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			public isSuspend(): boolean;
			public isLateinit(): boolean;
			public call(...param0: any[]): any;
			public getDelegate(): any;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public isAbstract(): boolean;
			public get(): V;
			public getGetter(): kotlin.reflect.KProperty0.Getter<V>;
			public invoke(): any;
			public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
		}
		export module KProperty0 {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KProperty0.DefaultImpls>;
			}
			export class Getter<V>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KProperty0.Getter<any>>;
				/**
				 * Constructs a new instance of the kotlin.reflect.KProperty0$Getter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(): any;
					getProperty(): kotlin.reflect.KProperty<V>;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): java.util.List<kotlin.reflect.KParameter>;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
					call(...param0: any[]): any;
					callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					isSuspend(): boolean;
					getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				});
				public constructor();
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public invoke(): any;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(...param0: any[]): any;
				public getProperty(): kotlin.reflect.KProperty<V>;
				public isOpen(): boolean;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KProperty1<T, V>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KProperty1<any,any>>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KProperty1<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				get(param0: T): V;
				getDelegate(param0: T): any;
				getGetter(): kotlin.reflect.KProperty1.Getter<T,V>;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter<V>;
				invoke(param0: any): any;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(...param0: any[]): any;
				callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public getGetter(): kotlin.reflect.KProperty.Getter<V>;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			public getDelegate(param0: T): any;
			public isSuspend(): boolean;
			public isLateinit(): boolean;
			public getGetter(): kotlin.reflect.KProperty1.Getter<T,V>;
			public call(...param0: any[]): any;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public invoke(param0: any): any;
			public getVisibility(): kotlin.reflect.KVisibility;
			public isAbstract(): boolean;
			public get(param0: T): V;
			public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
		}
		export module KProperty1 {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KProperty1.DefaultImpls>;
			}
			export class Getter<T, V>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KProperty1.Getter<any,any>>;
				/**
				 * Constructs a new instance of the kotlin.reflect.KProperty1$Getter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any): any;
					getProperty(): kotlin.reflect.KProperty<V>;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): java.util.List<kotlin.reflect.KParameter>;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
					call(...param0: any[]): any;
					callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					isSuspend(): boolean;
					getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				});
				public constructor();
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public invoke(param0: any): any;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(...param0: any[]): any;
				public getProperty(): kotlin.reflect.KProperty<V>;
				public isOpen(): boolean;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KProperty2<D, E, V>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KProperty2<any,any,any>>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KProperty2<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				get(param0: D, param1: E): V;
				getDelegate(param0: D, param1: E): any;
				getGetter(): kotlin.reflect.KProperty2.Getter<D,E,V>;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter<V>;
				invoke(param0: any, param1: any): any;
				getName(): string;
				getParameters(): java.util.List<kotlin.reflect.KParameter>;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				call(...param0: any[]): any;
				callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSuspend(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public get(param0: D, param1: E): V;
			public getGetter(): kotlin.reflect.KProperty.Getter<V>;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			public isSuspend(): boolean;
			public getGetter(): kotlin.reflect.KProperty2.Getter<D,E,V>;
			public isLateinit(): boolean;
			public getDelegate(param0: D, param1: E): any;
			public invoke(param0: any, param1: any): any;
			public call(...param0: any[]): any;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public isAbstract(): boolean;
			public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
		}
		export module KProperty2 {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KProperty2.DefaultImpls>;
			}
			export class Getter<D, E, V>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KProperty2.Getter<any,any,any>>;
				/**
				 * Constructs a new instance of the kotlin.reflect.KProperty2$Getter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					invoke(param0: any, param1: any): any;
					getProperty(): kotlin.reflect.KProperty<V>;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): java.util.List<kotlin.reflect.KParameter>;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
					call(...param0: any[]): any;
					callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					isSuspend(): boolean;
					getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				});
				public constructor();
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public invoke(param0: any, param1: any): any;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public call(...param0: any[]): any;
				public getProperty(): kotlin.reflect.KProperty<V>;
				public isOpen(): boolean;
				public isSuspend(): boolean;
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KType extends java.lang.Object implements kotlin.reflect.KAnnotatedElement {
			public static class: java.lang.Class<kotlin.reflect.KType>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getClassifier(): kotlin.reflect.KClassifier;
				getArguments(): java.util.List<kotlin.reflect.KTypeProjection>;
				isMarkedNullable(): boolean;
				getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			});
			public constructor();
			public isMarkedNullable(): boolean;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public getArguments(): java.util.List<kotlin.reflect.KTypeProjection>;
			public getClassifier(): kotlin.reflect.KClassifier;
		}
		export module KType {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KType.DefaultImpls>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KTypeParameter extends java.lang.Object implements kotlin.reflect.KClassifier {
			public static class: java.lang.Class<kotlin.reflect.KTypeParameter>;
			/**
			 * Constructs a new instance of the kotlin.reflect.KTypeParameter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getName(): string;
				getUpperBounds(): java.util.List<kotlin.reflect.KType>;
				getVariance(): kotlin.reflect.KVariance;
				isReified(): boolean;
			});
			public constructor();
			public isReified(): boolean;
			public getName(): string;
			public getUpperBounds(): java.util.List<kotlin.reflect.KType>;
			public getVariance(): kotlin.reflect.KVariance;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KTypeProjection extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KTypeProjection>;
			public static star: kotlin.reflect.KTypeProjection;
			public static covariant(type: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
			public constructor(variance: kotlin.reflect.KVariance, type: kotlin.reflect.KType);
			public static contravariant(type: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
			public component2(): kotlin.reflect.KType;
			public static invariant(type: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
			public equals(other: any): boolean;
			public getType(): kotlin.reflect.KType;
			public toString(): string;
			public copy(variance: kotlin.reflect.KVariance, type: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
			public equals(obj: any): boolean;
			public getVariance(): kotlin.reflect.KVariance;
			public component1(): kotlin.reflect.KVariance;
			public hashCode(): number;
		}
		export module KTypeProjection {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KTypeProjection.Companion>;
				public invariant(type: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
				public getSTAR(): kotlin.reflect.KTypeProjection;
				public covariant(type: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
				public contravariant(type: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
			}
			export class WhenMappings extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KTypeProjection.WhenMappings>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KVariance {
			public static class: java.lang.Class<kotlin.reflect.KVariance>;
			public static INVARIANT: kotlin.reflect.KVariance;
			public static IN: kotlin.reflect.KVariance;
			public static OUT: kotlin.reflect.KVariance;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public static valueOf(value: string): kotlin.reflect.KVariance;
			public static values(): kotlin.reflect.KVariance[];
			public static getEntries(): kotlin.enums.EnumEntries<kotlin.reflect.KVariance>;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KVisibility {
			public static class: java.lang.Class<kotlin.reflect.KVisibility>;
			public static PUBLIC: kotlin.reflect.KVisibility;
			public static PROTECTED: kotlin.reflect.KVisibility;
			public static INTERNAL: kotlin.reflect.KVisibility;
			public static PRIVATE: kotlin.reflect.KVisibility;
			public static values(): kotlin.reflect.KVisibility[];
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public static valueOf(value: string): kotlin.reflect.KVisibility;
			public static getEntries(): kotlin.enums.EnumEntries<kotlin.reflect.KVisibility>;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class ParameterizedTypeImpl extends java.lang.Object implements java.lang.reflect.ParameterizedType, kotlin.reflect.TypeImpl {
			public static class: java.lang.Class<kotlin.reflect.ParameterizedTypeImpl>;
			public getRawType(): java.lang.reflect.Type;
			public equals(other: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public constructor(rawType: java.lang.Class<any>, ownerType: java.lang.reflect.Type, typeArguments: java.util.List<any>);
			public getOwnerType(): java.lang.reflect.Type;
			public getTypeName(): string;
			public getActualTypeArguments(): java.lang.reflect.Type[];
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class TypeImpl extends java.lang.Object implements java.lang.reflect.Type {
			public static class: java.lang.Class<kotlin.reflect.TypeImpl>;
			/**
			 * Constructs a new instance of the kotlin.reflect.TypeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getTypeName(): string;
			});
			public constructor();
			public getTypeName(): string;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class TypeVariableImpl extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.TypeVariableImpl>;
			public getGenericDeclaration(): any;
			public getTypeName(): string;
			public constructor(typeParameter: kotlin.reflect.KTypeParameter);
			public getBounds(): java.lang.reflect.Type[];
			public equals(other: any): boolean;
			public getDeclaredAnnotations(): java.lang.annotation.Annotation[];
			public toString(): string;
			public getName(): string;
			public equals(obj: any): boolean;
			public getGenericDeclaration(): java.lang.reflect.GenericDeclaration;
			public getAnnotations(): java.lang.annotation.Annotation[];
			public getAnnotation(annotationClass: java.lang.Class<any>): java.lang.annotation.Annotation;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module reflect {
		export module TypesJVMKt {
export module  {
			export class WhenMappings extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.TypesJVMKt.WhenMappings>;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class WildcardTypeImpl extends java.lang.Object implements java.lang.reflect.WildcardType, kotlin.reflect.TypeImpl {
			public static class: java.lang.Class<kotlin.reflect.WildcardTypeImpl>;
			public equals(other: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public getLowerBounds(): java.lang.reflect.Type[];
			public constructor(upperBound: java.lang.reflect.Type, lowerBound: java.lang.reflect.Type);
			public getTypeName(): string;
			public getUpperBounds(): java.lang.reflect.Type[];
			public hashCode(): number;
		}
		export module WildcardTypeImpl {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.WildcardTypeImpl.Companion>;
				public getSTAR(): kotlin.reflect.WildcardTypeImpl;
			}
		}
	}
}

declare module kotlin {
	export module sequences {
		export class ConstrainedOnceSequence<T>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.ConstrainedOnceSequence<any>>;
			public constructor(sequence: kotlin.sequences.Sequence<any>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class DistinctIterator<T, K>  extends kotlin.collections.AbstractIterator<any> {
			public static class: java.lang.Class<kotlin.sequences.DistinctIterator<any,any>>;
			public constructor(source: java.util.Iterator<any>, keySelector: kotlin.jvm.functions.Function1<any,any>);
			public constructor();
			public computeNext(): void;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class DistinctSequence<T, K>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.DistinctSequence<any,any>>;
			public constructor(source: kotlin.sequences.Sequence<any>, keySelector: kotlin.jvm.functions.Function1<any,any>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class DropSequence<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.sequences.DropSequence<any>>;
			public drop(n: number): kotlin.sequences.Sequence<T>;
			public take(n: number): kotlin.sequences.Sequence<T>;
			public iterator(): java.util.Iterator<T>;
			public constructor(sequence: kotlin.sequences.Sequence<any>, count: number);
			public drop(param0: number): kotlin.sequences.Sequence<T>;
			public take(param0: number): kotlin.sequences.Sequence<T>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class DropTakeSequence<T>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.DropTakeSequence<any>>;
			/**
			 * Constructs a new instance of the kotlin.sequences.DropTakeSequence<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				drop(param0: number): kotlin.sequences.Sequence<any>;
				take(param0: number): kotlin.sequences.Sequence<any>;
				iterator(): java.util.Iterator<any>;
			});
			public constructor();
			public drop(param0: number): kotlin.sequences.Sequence<any>;
			public take(param0: number): kotlin.sequences.Sequence<any>;
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class DropWhileSequence<T>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.DropWhileSequence<any>>;
			public constructor(sequence: kotlin.sequences.Sequence<any>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class EmptySequence extends java.lang.Object implements kotlin.sequences.Sequence<any>, kotlin.sequences.DropTakeSequence<any> {
			public static class: java.lang.Class<kotlin.sequences.EmptySequence>;
			public static INSTANCE: kotlin.sequences.EmptySequence;
			public drop(n: number): kotlin.sequences.EmptySequence;
			public take(n: number): kotlin.sequences.EmptySequence;
			public drop(param0: number): kotlin.sequences.Sequence<any>;
			public take(param0: number): kotlin.sequences.Sequence<any>;
			public iterator(): java.util.Iterator<any>;
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class FilteringSequence<T>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.FilteringSequence<any>>;
			public constructor(sequence: kotlin.sequences.Sequence<any>, sendWhen: boolean, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class FlatteningSequence<T, R, E>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.FlatteningSequence<any,any,any>>;
			public constructor(sequence: kotlin.sequences.Sequence<any>, transformer: kotlin.jvm.functions.Function1<any,any>, iterator: kotlin.jvm.functions.Function1<any,any>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class GeneratorSequence<T>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.GeneratorSequence<any>>;
			public constructor(getInitialValue: kotlin.jvm.functions.Function0<any>, getNextValue: kotlin.jvm.functions.Function1<any,any>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class IndexingSequence<T>  extends kotlin.sequences.Sequence<kotlin.collections.IndexedValue<any>> {
			public static class: java.lang.Class<kotlin.sequences.IndexingSequence<any>>;
			public constructor(sequence: kotlin.sequences.Sequence<any>);
			public iterator(): java.util.Iterator<kotlin.collections.IndexedValue<any>>;
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class MergingSequence<T1, T2, V>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.MergingSequence<any,any,any>>;
			public constructor(sequence1: kotlin.sequences.Sequence<any>, sequence2: kotlin.sequences.Sequence<any>, transform: kotlin.jvm.functions.Function2<any,any,any>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class Sequence<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.sequences.Sequence<any>>;
			/**
			 * Constructs a new instance of the kotlin.sequences.Sequence<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				iterator(): java.util.Iterator<T>;
			});
			public constructor();
			public iterator(): java.util.Iterator<T>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class SequenceBuilderIterator<T>  extends kotlin.sequences.SequenceScope<any> {
			public static class: java.lang.Class<kotlin.sequences.SequenceBuilderIterator<any>>;
			public yieldAll(elements: java.lang.Iterable<any>, $completion: kotlin.coroutines.Continuation<any>): any;
			public getContext(): kotlin.coroutines.CoroutineContext;
			public yield(param0: any, param1: kotlin.coroutines.Continuation<any>): any;
			public getNextStep(): kotlin.coroutines.Continuation<kotlin.Unit>;
			public resumeWith(param0: any): void;
			public constructor();
			public hasNext(): boolean;
			public resumeWith(result: any): void;
			public remove(): void;
			public yieldAll(sequence: kotlin.sequences.Sequence<any>, $completion: kotlin.coroutines.Continuation<any>): any;
			public next(): any;
			public yieldAll(param0: java.util.Iterator<any>, param1: kotlin.coroutines.Continuation<any>): any;
			public yieldAll(iterator: java.util.Iterator<any>, $completion: kotlin.coroutines.Continuation<any>): any;
			public setNextStep(_set_: kotlin.coroutines.Continuation<any>): void;
			public yield(value: any, $completion: kotlin.coroutines.Continuation<any>): any;
		}
	}
}

declare module kotlin {
	export module sequences {
		export abstract class SequenceScope<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.sequences.SequenceScope<any>>;
			public yieldAll(elements: java.lang.Iterable<any>, $completion: kotlin.coroutines.Continuation<any>): any;
			public yieldAll(param0: java.util.Iterator<any>, param1: kotlin.coroutines.Continuation<any>): any;
			public constructor();
			public yield(param0: T, param1: kotlin.coroutines.Continuation<any>): any;
			public yieldAll(sequence: kotlin.sequences.Sequence<any>, $completion: kotlin.coroutines.Continuation<any>): any;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class SubSequence<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.sequences.SubSequence<any>>;
			public drop(n: number): kotlin.sequences.Sequence<T>;
			public take(n: number): kotlin.sequences.Sequence<T>;
			public iterator(): java.util.Iterator<T>;
			public constructor(sequence: kotlin.sequences.Sequence<any>, startIndex: number, endIndex: number);
			public drop(param0: number): kotlin.sequences.Sequence<T>;
			public take(param0: number): kotlin.sequences.Sequence<T>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class TakeSequence<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.sequences.TakeSequence<any>>;
			public drop(n: number): kotlin.sequences.Sequence<T>;
			public take(n: number): kotlin.sequences.Sequence<T>;
			public iterator(): java.util.Iterator<T>;
			public constructor(sequence: kotlin.sequences.Sequence<any>, count: number);
			public drop(param0: number): kotlin.sequences.Sequence<T>;
			public take(param0: number): kotlin.sequences.Sequence<T>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class TakeWhileSequence<T>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.TakeWhileSequence<any>>;
			public constructor(sequence: kotlin.sequences.Sequence<any>, predicate: kotlin.jvm.functions.Function1<any,java.lang.Boolean>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class TransformingIndexedSequence<T, R>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.TransformingIndexedSequence<any,any>>;
			public constructor(sequence: kotlin.sequences.Sequence<any>, transformer: kotlin.jvm.functions.Function2<any,any,any>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class TransformingSequence<T, R>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.TransformingSequence<any,any>>;
			public constructor(sequence: kotlin.sequences.Sequence<any>, transformer: kotlin.jvm.functions.Function1<any,any>);
			public flatten$kotlin_stdlib(iterator: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module text {
		export class CharCategory {
			public static class: java.lang.Class<kotlin.text.CharCategory>;
			public static UNASSIGNED: kotlin.text.CharCategory;
			public static UPPERCASE_LETTER: kotlin.text.CharCategory;
			public static LOWERCASE_LETTER: kotlin.text.CharCategory;
			public static TITLECASE_LETTER: kotlin.text.CharCategory;
			public static MODIFIER_LETTER: kotlin.text.CharCategory;
			public static OTHER_LETTER: kotlin.text.CharCategory;
			public static NON_SPACING_MARK: kotlin.text.CharCategory;
			public static ENCLOSING_MARK: kotlin.text.CharCategory;
			public static COMBINING_SPACING_MARK: kotlin.text.CharCategory;
			public static DECIMAL_DIGIT_NUMBER: kotlin.text.CharCategory;
			public static LETTER_NUMBER: kotlin.text.CharCategory;
			public static OTHER_NUMBER: kotlin.text.CharCategory;
			public static SPACE_SEPARATOR: kotlin.text.CharCategory;
			public static LINE_SEPARATOR: kotlin.text.CharCategory;
			public static PARAGRAPH_SEPARATOR: kotlin.text.CharCategory;
			public static CONTROL: kotlin.text.CharCategory;
			public static FORMAT: kotlin.text.CharCategory;
			public static PRIVATE_USE: kotlin.text.CharCategory;
			public static SURROGATE: kotlin.text.CharCategory;
			public static DASH_PUNCTUATION: kotlin.text.CharCategory;
			public static START_PUNCTUATION: kotlin.text.CharCategory;
			public static END_PUNCTUATION: kotlin.text.CharCategory;
			public static CONNECTOR_PUNCTUATION: kotlin.text.CharCategory;
			public static OTHER_PUNCTUATION: kotlin.text.CharCategory;
			public static MATH_SYMBOL: kotlin.text.CharCategory;
			public static CURRENCY_SYMBOL: kotlin.text.CharCategory;
			public static MODIFIER_SYMBOL: kotlin.text.CharCategory;
			public static OTHER_SYMBOL: kotlin.text.CharCategory;
			public static INITIAL_QUOTE_PUNCTUATION: kotlin.text.CharCategory;
			public static FINAL_QUOTE_PUNCTUATION: kotlin.text.CharCategory;
			public getValue(): number;
			public getCode(): string;
			public contains(char: string): boolean;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public static values(): kotlin.text.CharCategory[];
			public static getEntries(): kotlin.enums.EnumEntries<kotlin.text.CharCategory>;
			public static valueOf(value: string): kotlin.text.CharCategory;
		}
		export module CharCategory {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.text.CharCategory.Companion>;
				public valueOf(category: number): kotlin.text.CharCategory;
			}
		}
	}
}

declare module kotlin {
	export module text {
		export class CharDirectionality {
			public static class: java.lang.Class<kotlin.text.CharDirectionality>;
			public static UNDEFINED: kotlin.text.CharDirectionality;
			public static LEFT_TO_RIGHT: kotlin.text.CharDirectionality;
			public static RIGHT_TO_LEFT: kotlin.text.CharDirectionality;
			public static RIGHT_TO_LEFT_ARABIC: kotlin.text.CharDirectionality;
			public static EUROPEAN_NUMBER: kotlin.text.CharDirectionality;
			public static EUROPEAN_NUMBER_SEPARATOR: kotlin.text.CharDirectionality;
			public static EUROPEAN_NUMBER_TERMINATOR: kotlin.text.CharDirectionality;
			public static ARABIC_NUMBER: kotlin.text.CharDirectionality;
			public static COMMON_NUMBER_SEPARATOR: kotlin.text.CharDirectionality;
			public static NONSPACING_MARK: kotlin.text.CharDirectionality;
			public static BOUNDARY_NEUTRAL: kotlin.text.CharDirectionality;
			public static PARAGRAPH_SEPARATOR: kotlin.text.CharDirectionality;
			public static SEGMENT_SEPARATOR: kotlin.text.CharDirectionality;
			public static WHITESPACE: kotlin.text.CharDirectionality;
			public static OTHER_NEUTRALS: kotlin.text.CharDirectionality;
			public static LEFT_TO_RIGHT_EMBEDDING: kotlin.text.CharDirectionality;
			public static LEFT_TO_RIGHT_OVERRIDE: kotlin.text.CharDirectionality;
			public static RIGHT_TO_LEFT_EMBEDDING: kotlin.text.CharDirectionality;
			public static RIGHT_TO_LEFT_OVERRIDE: kotlin.text.CharDirectionality;
			public static POP_DIRECTIONAL_FORMAT: kotlin.text.CharDirectionality;
			public static getEntries(): kotlin.enums.EnumEntries<kotlin.text.CharDirectionality>;
			public getValue(): number;
			public static values(): kotlin.text.CharDirectionality[];
			public static valueOf(value: string): kotlin.text.CharDirectionality;
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
		}
		export module CharDirectionality {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.text.CharDirectionality.Companion>;
				public valueOf(directionality: number): kotlin.text.CharDirectionality;
			}
		}
	}
}

declare module kotlin {
	export module text {
		export class Charsets extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.Charsets>;
			public static INSTANCE: kotlin.text.Charsets;
			public static UTF_8: java.nio.charset.Charset;
			public static UTF_16: java.nio.charset.Charset;
			public static UTF_16BE: java.nio.charset.Charset;
			public static UTF_16LE: java.nio.charset.Charset;
			public static US_ASCII: java.nio.charset.Charset;
			public static ISO_8859_1: java.nio.charset.Charset;
			public UTF32_LE(): java.nio.charset.Charset;
			public UTF32_BE(): java.nio.charset.Charset;
			public UTF32(): java.nio.charset.Charset;
		}
	}
}

declare module kotlin {
	export module text {
		export class DelimitedRangesSequence extends kotlin.sequences.Sequence<kotlin.ranges.IntRange> {
			public static class: java.lang.Class<kotlin.text.DelimitedRangesSequence>;
			public constructor(input: string, startIndex: number, limit: number, getNextMatch: kotlin.jvm.functions.Function2<any,any,kotlin.Pair<java.lang.Integer,java.lang.Integer>>);
			public iterator(): java.util.Iterator<kotlin.ranges.IntRange>;
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module text {
		export class FlagEnum extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.FlagEnum>;
			/**
			 * Constructs a new instance of the kotlin.text.FlagEnum interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getValue(): number;
				getMask(): number;
			});
			public constructor();
			public getValue(): number;
			public getMask(): number;
		}
	}
}

declare module kotlin {
	export module text {
		export class HexFormat extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.HexFormat>;
			public constructor(upperCase: boolean, bytes: kotlin.text.HexFormat.BytesHexFormat, number: kotlin.text.HexFormat.NumberHexFormat);
			public toString(): string;
			public getBytes(): kotlin.text.HexFormat.BytesHexFormat;
			public getUpperCase(): boolean;
			public getNumber(): kotlin.text.HexFormat.NumberHexFormat;
		}
		export module HexFormat {
			export class Builder extends java.lang.Object {
				public static class: java.lang.Class<kotlin.text.HexFormat.Builder>;
				public getBytes(): kotlin.text.HexFormat.BytesHexFormat.Builder;
				public setUpperCase(_set_: boolean): void;
				public getUpperCase(): boolean;
				public getNumber(): kotlin.text.HexFormat.NumberHexFormat.Builder;
				public build(): kotlin.text.HexFormat;
				public constructor();
			}
			export class BytesHexFormat extends java.lang.Object {
				public static class: java.lang.Class<kotlin.text.HexFormat.BytesHexFormat>;
				public getBytesPerGroup(): number;
				public constructor(bytesPerLine: number, bytesPerGroup: number, groupSeparator: string, byteSeparator: string, bytePrefix: string, byteSuffix: string);
				public appendOptionsTo$kotlin_stdlib(sb: java.lang.StringBuilder, indent: string): java.lang.StringBuilder;
				public getByteSeparator(): string;
				public getGroupSeparator(): string;
				public getBytePrefix(): string;
				public getByteSuffix(): string;
				public toString(): string;
				public getBytesPerLine(): number;
			}
			export module BytesHexFormat {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<kotlin.text.HexFormat.BytesHexFormat.Builder>;
					public getGroupSeparator(): string;
					public setBytePrefix(value: string): void;
					public setByteSuffix(value: string): void;
					public setBytesPerLine(value: number): void;
					public build$kotlin_stdlib(): kotlin.text.HexFormat.BytesHexFormat;
					public getBytePrefix(): string;
					public getBytesPerGroup(): number;
					public constructor();
					public getByteSeparator(): string;
					public setGroupSeparator(_set_: string): void;
					public getByteSuffix(): string;
					public setBytesPerGroup(value: number): void;
					public setByteSeparator(value: string): void;
					public getBytesPerLine(): number;
				}
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kotlin.text.HexFormat.BytesHexFormat.Companion>;
					public getDefault$kotlin_stdlib(): kotlin.text.HexFormat.BytesHexFormat;
				}
			}
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.text.HexFormat.Companion>;
				public getDefault(): kotlin.text.HexFormat;
				public getUpperCase(): kotlin.text.HexFormat;
			}
			export class NumberHexFormat extends java.lang.Object {
				public static class: java.lang.Class<kotlin.text.HexFormat.NumberHexFormat>;
				public constructor(prefix: string, suffix: string, removeLeadingZeros: boolean);
				public getPrefix(): string;
				public appendOptionsTo$kotlin_stdlib(sb: java.lang.StringBuilder, indent: string): java.lang.StringBuilder;
				public getRemoveLeadingZeros(): boolean;
				public getSuffix(): string;
				public toString(): string;
			}
			export module NumberHexFormat {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<kotlin.text.HexFormat.NumberHexFormat.Builder>;
					public setPrefix(value: string): void;
					public constructor();
					public setRemoveLeadingZeros(_set_: boolean): void;
					public setSuffix(value: string): void;
					public getRemoveLeadingZeros(): boolean;
					public getPrefix(): string;
					public getSuffix(): string;
					public build$kotlin_stdlib(): kotlin.text.HexFormat.NumberHexFormat;
				}
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kotlin.text.HexFormat.NumberHexFormat.Companion>;
					public getDefault$kotlin_stdlib(): kotlin.text.HexFormat.NumberHexFormat;
				}
			}
		}
	}
}

declare module kotlin {
	export module text {
		export class MatchGroup extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.MatchGroup>;
			public equals(other: any): boolean;
			public toString(): string;
			public copy(value: string, range: kotlin.ranges.IntRange): kotlin.text.MatchGroup;
			public equals(obj: any): boolean;
			public getRange(): kotlin.ranges.IntRange;
			public component2(): kotlin.ranges.IntRange;
			public component1(): string;
			public constructor(value: string, range: kotlin.ranges.IntRange);
			public getValue(): string;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module text {
		export class MatchGroupCollection extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.MatchGroupCollection>;
			/**
			 * Constructs a new instance of the kotlin.text.MatchGroupCollection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				get(param0: number): kotlin.text.MatchGroup;
				size(): number;
				isEmpty(): boolean;
				contains(param0: any): boolean;
				iterator(): java.util.Iterator<any>;
				toArray(): any[];
				toArray(param0: any[]): any[];
				add(param0: any): boolean;
				remove(param0: any): boolean;
				containsAll(param0: java.util.Collection<any>): boolean;
				addAll(param0: java.util.Collection<any>): boolean;
				removeAll(param0: java.util.Collection<any>): boolean;
				removeIf(filter: any /* any*/): boolean;
				retainAll(param0: java.util.Collection<any>): boolean;
				clear(): void;
				equals(param0: any): boolean;
				hashCode(): number;
				spliterator(): java.util.Spliterator<any>;
				stream(): java.util.stream.Stream<any>;
				parallelStream(): java.util.stream.Stream<any>;
				iterator(): java.util.Iterator<any>;
				forEach(action: any /* any*/): void;
				spliterator(): java.util.Spliterator<any>;
			});
			public constructor();
			public clear(): void;
			public equals(param0: any): boolean;
			public size(): number;
			public isEmpty(): boolean;
			public stream(): java.util.stream.Stream<any>;
			public toArray(param0: any[]): any[];
			public forEach(action: any /* any*/): void;
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public contains(param0: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public equals(obj: any): boolean;
			public add(param0: any): boolean;
			public toArray(): any[];
			public removeAll(param0: java.util.Collection<any>): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public get(param0: number): kotlin.text.MatchGroup;
			public parallelStream(): java.util.stream.Stream<any>;
			public iterator(): java.util.Iterator<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module text {
		export class MatchNamedGroupCollection extends java.lang.Object implements kotlin.text.MatchGroupCollection {
			public static class: java.lang.Class<kotlin.text.MatchNamedGroupCollection>;
			/**
			 * Constructs a new instance of the kotlin.text.MatchNamedGroupCollection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				get(param0: string): kotlin.text.MatchGroup;
				get(param0: number): kotlin.text.MatchGroup;
				size(): number;
				isEmpty(): boolean;
				contains(param0: any): boolean;
				iterator(): java.util.Iterator<any>;
				toArray(): any[];
				toArray(param0: any[]): any[];
				add(param0: any): boolean;
				remove(param0: any): boolean;
				containsAll(param0: java.util.Collection<any>): boolean;
				addAll(param0: java.util.Collection<any>): boolean;
				removeAll(param0: java.util.Collection<any>): boolean;
				removeIf(filter: any /* any*/): boolean;
				retainAll(param0: java.util.Collection<any>): boolean;
				clear(): void;
				equals(param0: any): boolean;
				hashCode(): number;
				spliterator(): java.util.Spliterator<any>;
				stream(): java.util.stream.Stream<any>;
				parallelStream(): java.util.stream.Stream<any>;
				iterator(): java.util.Iterator<any>;
				forEach(action: any /* any*/): void;
				spliterator(): java.util.Spliterator<any>;
			});
			public constructor();
			public clear(): void;
			public equals(param0: any): boolean;
			public size(): number;
			public isEmpty(): boolean;
			public stream(): java.util.stream.Stream<any>;
			public toArray(param0: any[]): any[];
			public forEach(action: any /* any*/): void;
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public contains(param0: any): boolean;
			public removeIf(filter: any /* any*/): boolean;
			public equals(obj: any): boolean;
			public add(param0: any): boolean;
			public toArray(): any[];
			public removeAll(param0: java.util.Collection<any>): boolean;
			public get(param0: string): kotlin.text.MatchGroup;
			public spliterator(): java.util.Spliterator<any>;
			public get(param0: number): kotlin.text.MatchGroup;
			public parallelStream(): java.util.stream.Stream<any>;
			public iterator(): java.util.Iterator<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module text {
		export class MatchResult extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.MatchResult>;
			/**
			 * Constructs a new instance of the kotlin.text.MatchResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getRange(): kotlin.ranges.IntRange;
				getValue(): string;
				getGroups(): kotlin.text.MatchGroupCollection;
				getGroupValues(): java.util.List<string>;
				getDestructured(): kotlin.text.MatchResult.Destructured;
				next(): kotlin.text.MatchResult;
			});
			public constructor();
			public next(): kotlin.text.MatchResult;
			public getRange(): kotlin.ranges.IntRange;
			public getDestructured(): kotlin.text.MatchResult.Destructured;
			public getGroups(): kotlin.text.MatchGroupCollection;
			public getValue(): string;
			public getGroupValues(): java.util.List<string>;
		}
		export module MatchResult {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.text.MatchResult.DefaultImpls>;
				public static getDestructured($this: kotlin.text.MatchResult): kotlin.text.MatchResult.Destructured;
			}
			export class Destructured extends java.lang.Object {
				public static class: java.lang.Class<kotlin.text.MatchResult.Destructured>;
				public toList(): java.util.List<string>;
				public constructor(match: kotlin.text.MatchResult);
				public getMatch(): kotlin.text.MatchResult;
			}
		}
	}
}

declare module kotlin {
	export module text {
		export class MatcherMatchResult extends java.lang.Object implements kotlin.text.MatchResult {
			public static class: java.lang.Class<kotlin.text.MatcherMatchResult>;
			public next(): kotlin.text.MatchResult;
			public getRange(): kotlin.ranges.IntRange;
			public constructor(matcher: java.util.regex.Matcher, input: string);
			public getDestructured(): kotlin.text.MatchResult.Destructured;
			public getGroups(): kotlin.text.MatchGroupCollection;
			public getValue(): string;
			public getGroupValues(): java.util.List<string>;
		}
	}
}

declare module kotlin {
	export module text {
		export class Regex extends java.lang.Object implements java.io.Serializable {
			public static class: java.lang.Class<kotlin.text.Regex>;
			public constructor(pattern: string);
			public getOptions(): java.util.Set<kotlin.text.RegexOption>;
			public find(input: string, startIndex: number): kotlin.text.MatchResult;
			public matchesAt(input: string, index: number): boolean;
			public constructor(pattern: string, option: kotlin.text.RegexOption);
			public constructor(pattern: string, options: java.util.Set<any>);
			public matchEntire(input: string): kotlin.text.MatchResult;
			public replace(input: string, transform: kotlin.jvm.functions.Function1<any,any>): string;
			public split(input: string, limit: number): java.util.List<string>;
			public splitToSequence(input: string, limit: number): kotlin.sequences.Sequence<string>;
			public matchAt(input: string, index: number): kotlin.text.MatchResult;
			public toString(): string;
			public toPattern(): java.util.regex.Pattern;
			public replaceFirst(input: string, replacement: string): string;
			public containsMatchIn(input: string): boolean;
			public constructor(nativePattern: java.util.regex.Pattern);
			public getPattern(): string;
			public findAll(input: string, startIndex: number): kotlin.sequences.Sequence<kotlin.text.MatchResult>;
			public replace(input: string, replacement: string): string;
			public matches(input: string): boolean;
		}
		export module Regex {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.text.Regex.Companion>;
				public fromLiteral(literal: string): kotlin.text.Regex;
				public escapeReplacement(literal: string): string;
				public escape(literal: string): string;
			}
			export class Serialized extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<kotlin.text.Regex.Serialized>;
				public getFlags(): number;
				public getPattern(): string;
				public constructor(pattern: string, flags: number);
			}
			export module Serialized {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kotlin.text.Regex.Serialized.Companion>;
				}
			}
		}
	}
}

declare module kotlin {
	export module text {
		export class RegexOption extends kotlin.text.FlagEnum {
			public static class: java.lang.Class<kotlin.text.RegexOption>;
			public static IGNORE_CASE: kotlin.text.RegexOption;
			public static MULTILINE: kotlin.text.RegexOption;
			public static LITERAL: kotlin.text.RegexOption;
			public static UNIX_LINES: kotlin.text.RegexOption;
			public static COMMENTS: kotlin.text.RegexOption;
			public static DOT_MATCHES_ALL: kotlin.text.RegexOption;
			public static CANON_EQ: kotlin.text.RegexOption;
			public getValue(): number;
			public static valueOf(value: string): kotlin.text.RegexOption;
			public static values(): kotlin.text.RegexOption[];
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public getMask(): number;
			public static getEntries(): kotlin.enums.EnumEntries<kotlin.text.RegexOption>;
		}
	}
}

declare module kotlin {
	export module text {
		export class ScreenFloatValueRegEx extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.ScreenFloatValueRegEx>;
			public static INSTANCE: kotlin.text.ScreenFloatValueRegEx;
			public static value: kotlin.text.Regex;
		}
	}
}

declare module kotlin {
	export module text {
		export class SystemProperties extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.SystemProperties>;
			public static INSTANCE: kotlin.text.SystemProperties;
			public static LINE_SEPARATOR: string;
		}
	}
}

declare module kotlin {
	export module text {
		export class Typography extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.Typography>;
			public static INSTANCE: kotlin.text.Typography;
			public static quote: string;
			public static dollar: string;
			public static amp: string;
			public static less: string;
			public static greater: string;
			public static nbsp: string;
			public static times: string;
			public static cent: string;
			public static pound: string;
			public static section: string;
			public static copyright: string;
			public static leftGuillemet: string;
			public static rightGuillemet: string;
			public static registered: string;
			public static degree: string;
			public static plusMinus: string;
			public static paragraph: string;
			public static middleDot: string;
			public static half: string;
			public static ndash: string;
			public static mdash: string;
			public static leftSingleQuote: string;
			public static rightSingleQuote: string;
			public static lowSingleQuote: string;
			public static leftDoubleQuote: string;
			public static rightDoubleQuote: string;
			public static lowDoubleQuote: string;
			public static dagger: string;
			public static doubleDagger: string;
			public static bullet: string;
			public static ellipsis: string;
			public static prime: string;
			public static doublePrime: string;
			public static euro: string;
			public static tm: string;
			public static almostEqual: string;
			public static notEqual: string;
			public static lessOrEqual: string;
			public static greaterOrEqual: string;
			public static leftGuillemete: string;
			public static rightGuillemete: string;
		}
	}
}

declare module kotlin {
	export module time {
		export abstract class AbstractDoubleTimeSource extends java.lang.Object implements kotlin.time.TimeSource.WithComparableMarks {
			public static class: java.lang.Class<kotlin.time.AbstractDoubleTimeSource>;
			public markNow(): kotlin.time.TimeMark;
			public constructor(unit: kotlin.time.DurationUnit);
			public markNow(): kotlin.time.ComparableTimeMark;
			public getUnit(): kotlin.time.DurationUnit;
			public read(): number;
		}
		export module AbstractDoubleTimeSource {
			export class DoubleTimeMark extends java.lang.Object implements kotlin.time.ComparableTimeMark {
				public static class: java.lang.Class<kotlin.time.AbstractDoubleTimeSource.DoubleTimeMark>;
				public "minus-LRDsOJo"(param0: number): kotlin.time.TimeMark;
				public "elapsedNow-UwyO8pc"(): number;
				public hasNotPassedNow(): boolean;
				public "plus-LRDsOJo"(param0: number): kotlin.time.TimeMark;
				public toString(): string;
				public compareTo(other: kotlin.time.ComparableTimeMark): number;
				public "minus-LRDsOJo"(duration: number): kotlin.time.ComparableTimeMark;
				public "minus-UwyO8pc"(param0: kotlin.time.ComparableTimeMark): number;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public hashCode(): number;
				public "minus-UwyO8pc"(other: kotlin.time.ComparableTimeMark): number;
				public equals(param0: any): boolean;
				public "plus-LRDsOJo"(duration: number): kotlin.time.ComparableTimeMark;
				public "minus-LRDsOJo"(param0: number): kotlin.time.ComparableTimeMark;
				public "plus-LRDsOJo"(param0: number): kotlin.time.ComparableTimeMark;
				public hasPassedNow(): boolean;
				public compareTo(param0: kotlin.time.ComparableTimeMark): number;
			}
		}
	}
}

declare module kotlin {
	export module time {
		export abstract class AbstractLongTimeSource extends java.lang.Object implements kotlin.time.TimeSource.WithComparableMarks {
			public static class: java.lang.Class<kotlin.time.AbstractLongTimeSource>;
			public markNow(): kotlin.time.TimeMark;
			public constructor(unit: kotlin.time.DurationUnit);
			public markNow(): kotlin.time.ComparableTimeMark;
			public getUnit(): kotlin.time.DurationUnit;
			public read(): number;
		}
		export module AbstractLongTimeSource {
			export class LongTimeMark extends java.lang.Object implements kotlin.time.ComparableTimeMark {
				public static class: java.lang.Class<kotlin.time.AbstractLongTimeSource.LongTimeMark>;
				public "minus-LRDsOJo"(param0: number): kotlin.time.TimeMark;
				public "elapsedNow-UwyO8pc"(): number;
				public hasNotPassedNow(): boolean;
				public "plus-LRDsOJo"(param0: number): kotlin.time.TimeMark;
				public toString(): string;
				public compareTo(other: kotlin.time.ComparableTimeMark): number;
				public "minus-LRDsOJo"(duration: number): kotlin.time.ComparableTimeMark;
				public "minus-UwyO8pc"(param0: kotlin.time.ComparableTimeMark): number;
				public equals(obj: any): boolean;
				public equals(other: any): boolean;
				public hashCode(): number;
				public "minus-UwyO8pc"(other: kotlin.time.ComparableTimeMark): number;
				public equals(param0: any): boolean;
				public "plus-LRDsOJo"(duration: number): kotlin.time.ComparableTimeMark;
				public "minus-LRDsOJo"(param0: number): kotlin.time.ComparableTimeMark;
				public "plus-LRDsOJo"(param0: number): kotlin.time.ComparableTimeMark;
				public hasPassedNow(): boolean;
				public compareTo(param0: kotlin.time.ComparableTimeMark): number;
			}
		}
	}
}

declare module kotlin {
	export module time {
		export class AdjustedTimeMark extends java.lang.Object implements kotlin.time.TimeMark {
			public static class: java.lang.Class<kotlin.time.AdjustedTimeMark>;
			public hasPassedNow(): boolean;
			public "getAdjustment-UwyO8pc"(): number;
			public "elapsedNow-UwyO8pc"(): number;
			public "minus-LRDsOJo"(duration: number): kotlin.time.TimeMark;
			public "minus-LRDsOJo"(param0: number): kotlin.time.TimeMark;
			public hasNotPassedNow(): boolean;
			public "plus-LRDsOJo"(param0: number): kotlin.time.TimeMark;
			public "plus-LRDsOJo"(duration: number): kotlin.time.TimeMark;
			public getMark(): kotlin.time.TimeMark;
		}
	}
}

declare module kotlin {
	export module time {
		export class ComparableTimeMark extends java.lang.Object {
			public static class: java.lang.Class<kotlin.time.ComparableTimeMark>;
			/**
			 * Constructs a new instance of the kotlin.time.ComparableTimeMark interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				"plus-LRDsOJo"(param0: number): kotlin.time.ComparableTimeMark;
				"minus-LRDsOJo"(param0: number): kotlin.time.ComparableTimeMark;
				"minus-UwyO8pc"(param0: kotlin.time.ComparableTimeMark): number;
				compareTo(param0: kotlin.time.ComparableTimeMark): number;
				equals(param0: any): boolean;
				hashCode(): number;
				"elapsedNow-UwyO8pc"(): number;
				"plus-LRDsOJo"(param0: number): kotlin.time.TimeMark;
				"minus-LRDsOJo"(param0: number): kotlin.time.TimeMark;
				hasPassedNow(): boolean;
				hasNotPassedNow(): boolean;
			});
			public constructor();
			public hasPassedNow(): boolean;
			public equals(param0: any): boolean;
			public "minus-LRDsOJo"(param0: number): kotlin.time.ComparableTimeMark;
			public "elapsedNow-UwyO8pc"(): number;
			public equals(obj: any): boolean;
			public "minus-LRDsOJo"(param0: number): kotlin.time.TimeMark;
			public "minus-UwyO8pc"(param0: kotlin.time.ComparableTimeMark): number;
			public compareTo(param0: kotlin.time.ComparableTimeMark): number;
			public "plus-LRDsOJo"(param0: number): kotlin.time.ComparableTimeMark;
			public hasNotPassedNow(): boolean;
			public "plus-LRDsOJo"(param0: number): kotlin.time.TimeMark;
			public hashCode(): number;
		}
		export module ComparableTimeMark {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.time.ComparableTimeMark.DefaultImpls>;
				public static compareTo($this: kotlin.time.ComparableTimeMark, other: kotlin.time.ComparableTimeMark): number;
				public static hasNotPassedNow($this: kotlin.time.ComparableTimeMark): boolean;
				public static "minus-LRDsOJo"($this: kotlin.time.ComparableTimeMark, duration: number): kotlin.time.ComparableTimeMark;
				public static hasPassedNow($this: kotlin.time.ComparableTimeMark): boolean;
			}
		}
	}
}

declare module kotlin {
	export module time {
		export class Duration extends java.lang.Comparable<kotlin.time.Duration> {
			public static class: java.lang.Class<kotlin.time.Duration>;
			public static "constructor-impl"(rawValue: number): number;
			public static "div-UwyO8pc"(arg0: number, param1: number): number;
			public static "getInWholeHours-impl"(arg0: number): number;
			public static "toString-impl"(arg0: number): string;
			public static "getInWholeNanoseconds-impl"(arg0: number): number;
			public static "isFinite-impl"(arg0: number): boolean;
			public static "getInWholeSeconds-impl"(arg0: number): number;
			public static "unaryMinus-UwyO8pc"(arg0: number): number;
			public static "getInWholeMilliseconds-impl"(arg0: number): number;
			public static "getSecondsComponent-impl"(arg0: number): number;
			public equals(other: any): boolean;
			public static "getInWholeMinutes-impl"(arg0: number): number;
			public static "toInt-impl"(arg0: number, param1: kotlin.time.DurationUnit): number;
			public static "isPositive-impl"(arg0: number): boolean;
			public static "getNanosecondsComponent-impl"(arg0: number): number;
			public static "hashCode-impl"(arg0: number): number;
			public static "plus-LRDsOJo"(arg0: number, param1: number): number;
			public static "times-UwyO8pc"(arg0: number, param1: number): number;
			public static "truncateTo-UwyO8pc$kotlin_stdlib"(arg0: number, param1: kotlin.time.DurationUnit): number;
			public static "toLong-impl"(arg0: number, param1: kotlin.time.DurationUnit): number;
			public static "toIsoString-impl"(arg0: number): string;
			public static "isNegative-impl"(arg0: number): boolean;
			public static "getAbsoluteValue-UwyO8pc"(arg0: number): number;
			public static "div-LRDsOJo"(arg0: number, param1: number): number;
			public static "isInfinite-impl"(arg0: number): boolean;
			public static "toComponents-impl"(arg0: number, param1: kotlin.jvm.functions.Function4<any,any,any,any,any>): any;
			public toString(): string;
			public static "toComponents-impl"(arg0: number, param1: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static "toDouble-impl"(arg0: number, param1: kotlin.time.DurationUnit): number;
			public equals(obj: any): boolean;
			public static "minus-LRDsOJo"(arg0: number, param1: number): number;
			public static "toComponents-impl"(arg0: number, param1: kotlin.jvm.functions.Function5<any,any,any,any,any,any>): any;
			public static "toComponents-impl"(arg0: number, param1: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static "getHoursComponent-impl"(arg0: number): number;
			public "compareTo-LRDsOJo"(other: number): number;
			public static "getInWholeMicroseconds-impl"(arg0: number): number;
			public static "equals-impl"(arg0: number, param1: any): boolean;
			public static "getMinutesComponent-impl"(arg0: number): number;
			public static "getInWholeDays-impl"(arg0: number): number;
			public static "compareTo-LRDsOJo"(arg0: number, param1: number): number;
			public static "equals-impl0"(p1: number, param1: number): boolean;
			public static "toString-impl"(arg0: number, param1: kotlin.time.DurationUnit, unit: number): string;
			public hashCode(): number;
		}
		export module Duration {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.time.Duration.Companion>;
				public "parse-UwyO8pc"(value: string): number;
				public "getINFINITE-UwyO8pc"(): number;
				public "getNEG_INFINITE-UwyO8pc$kotlin_stdlib"(): number;
				public "parseIsoStringOrNull-FghU774"(value: string): kotlin.time.Duration;
				public "getZERO-UwyO8pc"(): number;
				public convert(value: number, param1: kotlin.time.DurationUnit, sourceUnit: kotlin.time.DurationUnit): number;
				public "parseIsoString-UwyO8pc"(value: string): number;
				public "parseOrNull-FghU774"(value: string): kotlin.time.Duration;
			}
		}
	}
}

declare module kotlin {
	export module time {
		export class DurationUnit {
			public static class: java.lang.Class<kotlin.time.DurationUnit>;
			public static NANOSECONDS: kotlin.time.DurationUnit;
			public static MICROSECONDS: kotlin.time.DurationUnit;
			public static MILLISECONDS: kotlin.time.DurationUnit;
			public static SECONDS: kotlin.time.DurationUnit;
			public static MINUTES: kotlin.time.DurationUnit;
			public static HOURS: kotlin.time.DurationUnit;
			public static DAYS: kotlin.time.DurationUnit;
			public static valueOf(value: string): kotlin.time.DurationUnit;
			public static values(): kotlin.time.DurationUnit[];
			public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
			public getTimeUnit$kotlin_stdlib(): java.util.concurrent.TimeUnit;
			public static getEntries(): kotlin.enums.EnumEntries<kotlin.time.DurationUnit>;
		}
	}
}

declare module kotlin {
	export module time {
		export module DurationUnitKt__DurationUnitJvmKt {
export module  {
			export class WhenMappings extends java.lang.Object {
				public static class: java.lang.Class<kotlin.time.DurationUnitKt__DurationUnitJvmKt.WhenMappings>;
			}
		}
	}
}

declare module kotlin {
	export module time {
		export module DurationUnitKt__DurationUnitKt {
export module  {
			export class WhenMappings extends java.lang.Object {
				public static class: java.lang.Class<kotlin.time.DurationUnitKt__DurationUnitKt.WhenMappings>;
			}
		}
	}
}

declare module kotlin {
	export module time {
		export class ExperimentalTime extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<kotlin.time.ExperimentalTime>;
			/**
			 * Constructs a new instance of the kotlin.time.ExperimentalTime interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module time {
		export class MonotonicTimeSource extends java.lang.Object implements kotlin.time.TimeSource.WithComparableMarks {
			public static class: java.lang.Class<kotlin.time.MonotonicTimeSource>;
			public static INSTANCE: kotlin.time.MonotonicTimeSource;
			public "markNow-z9LOYto"(): number;
			public markNow(): kotlin.time.TimeMark;
			public toString(): string;
			public "differenceBetween-fRLX17w"(one: number, param1: number): number;
			public "elapsedFrom-6eNON_k"(timeMark: number): number;
			public "adjustReading-6QKq23U"(timeMark: number, param1: number): number;
			public markNow(): kotlin.time.ComparableTimeMark;
		}
	}
}

declare module kotlin {
	export module time {
		export class TestTimeSource extends kotlin.time.AbstractLongTimeSource {
			public static class: java.lang.Class<kotlin.time.TestTimeSource>;
			public "plusAssign-LRDsOJo"(duration: number): void;
			public constructor(unit: kotlin.time.DurationUnit);
			public markNow(): kotlin.time.ComparableTimeMark;
			public constructor();
			public read(): number;
		}
	}
}

declare module kotlin {
	export module time {
		export class TimeMark extends java.lang.Object {
			public static class: java.lang.Class<kotlin.time.TimeMark>;
			/**
			 * Constructs a new instance of the kotlin.time.TimeMark interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				"elapsedNow-UwyO8pc"(): number;
				"plus-LRDsOJo"(param0: number): kotlin.time.TimeMark;
				"minus-LRDsOJo"(param0: number): kotlin.time.TimeMark;
				hasPassedNow(): boolean;
				hasNotPassedNow(): boolean;
			});
			public constructor();
			public hasPassedNow(): boolean;
			public "elapsedNow-UwyO8pc"(): number;
			public "minus-LRDsOJo"(param0: number): kotlin.time.TimeMark;
			public hasNotPassedNow(): boolean;
			public "plus-LRDsOJo"(param0: number): kotlin.time.TimeMark;
		}
		export module TimeMark {
			export class DefaultImpls extends java.lang.Object {
				public static class: java.lang.Class<kotlin.time.TimeMark.DefaultImpls>;
				public static "minus-LRDsOJo"($this: kotlin.time.TimeMark, duration: number): kotlin.time.TimeMark;
				public static hasPassedNow($this: kotlin.time.TimeMark): boolean;
				public static hasNotPassedNow($this: kotlin.time.TimeMark): boolean;
				public static "plus-LRDsOJo"($this: kotlin.time.TimeMark, duration: number): kotlin.time.TimeMark;
			}
		}
	}
}

declare module kotlin {
	export module time {
		export class TimeSource extends java.lang.Object {
			public static class: java.lang.Class<kotlin.time.TimeSource>;
			/**
			 * Constructs a new instance of the kotlin.time.TimeSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				markNow(): kotlin.time.TimeMark;
				"<clinit>"(): void;
			});
			public constructor();
			public markNow(): kotlin.time.TimeMark;
		}
		export module TimeSource {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.time.TimeSource.Companion>;
			}
			export class Monotonic extends java.lang.Object implements kotlin.time.TimeSource.WithComparableMarks {
				public static class: java.lang.Class<kotlin.time.TimeSource.Monotonic>;
				public static INSTANCE: kotlin.time.TimeSource.Monotonic;
				public markNow(): kotlin.time.ComparableTimeMark;
				public markNow(): kotlin.time.TimeMark;
				public "markNow-z9LOYto"(): number;
				public toString(): string;
			}
			export module Monotonic {
				export class ValueTimeMark extends java.lang.Object implements kotlin.time.ComparableTimeMark {
					public static class: java.lang.Class<kotlin.time.TimeSource.Monotonic.ValueTimeMark>;
					public static "minus-6eNON_k"(arg0: number, param1: number): number;
					public static "elapsedNow-UwyO8pc"(arg0: number): number;
					public equals(obj: any): boolean;
					public static "hasNotPassedNow-impl"(arg0: number): boolean;
					public static "equals-impl0"(p1: number, param1: number): boolean;
					public static "constructor-impl"(reading: number): number;
					public static "toString-impl"(arg0: number): string;
					public static "hashCode-impl"(arg0: number): number;
					public static "minus-UwyO8pc"(arg0: number, param1: kotlin.time.ComparableTimeMark): number;
					public static "minus-LRDsOJo"(arg0: number, param1: number): number;
					public static "hasPassedNow-impl"(arg0: number): boolean;
					public toString(): string;
					public static "equals-impl"(arg0: number, param1: any): boolean;
					public hashCode(): number;
					public "plus-LRDsOJo"(duration: number): number;
					public "minus-UwyO8pc"(other: kotlin.time.ComparableTimeMark): number;
					public static "compareTo-6eNON_k"(arg0: number, param1: number): number;
					public "minus-UwyO8pc"(param0: kotlin.time.ComparableTimeMark): number;
					public static "plus-LRDsOJo"(arg0: number, param1: number): number;
					public compareTo(other: kotlin.time.ComparableTimeMark): number;
					public equals(other: any): boolean;
					public hasPassedNow(): boolean;
					public "minus-LRDsOJo"(duration: number): number;
					public static "compareTo-impl"(arg0: number, param1: kotlin.time.ComparableTimeMark): number;
					public equals(param0: any): boolean;
					public "plus-LRDsOJo"(param0: number): kotlin.time.ComparableTimeMark;
					public "minus-LRDsOJo"(param0: number): kotlin.time.ComparableTimeMark;
					public "minus-LRDsOJo"(param0: number): kotlin.time.TimeMark;
					public "plus-LRDsOJo"(param0: number): kotlin.time.TimeMark;
					public "elapsedNow-UwyO8pc"(): number;
					public hasNotPassedNow(): boolean;
					public compareTo(param0: kotlin.time.ComparableTimeMark): number;
				}
			}
			export class WithComparableMarks extends java.lang.Object implements kotlin.time.TimeSource {
				public static class: java.lang.Class<kotlin.time.TimeSource.WithComparableMarks>;
				/**
				 * Constructs a new instance of the kotlin.time.TimeSource$WithComparableMarks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					markNow(): kotlin.time.ComparableTimeMark;
					markNow(): kotlin.time.TimeMark;
					"<clinit>"(): void;
				});
				public constructor();
				public static Companion: kotlin.time.TimeSource.Companion;
				public markNow(): kotlin.time.ComparableTimeMark;
				public markNow(): kotlin.time.TimeMark;
			}
		}
	}
}

declare module kotlin {
	export module time {
		export class TimedValue<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.time.TimedValue<any>>;
			public "copy-RFiDyg4"(value: T, duration: number): kotlin.time.TimedValue<T>;
			public equals(other: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public "getDuration-UwyO8pc"(): number;
			public component1(): T;
			public getValue(): T;
			public "component2-UwyO8pc"(): number;
			public hashCode(): number;
		}
	}
}

//Generics information:
//kotlin.DeepRecursiveFunction:2
//kotlin.DeepRecursiveScope:2
//kotlin.DeepRecursiveScopeImpl:2
//kotlin.Function:1
//kotlin.InitializedLazyImpl:1
//kotlin.Lazy:1
//kotlin.Pair:2
//kotlin.Result:1
//kotlin.SafePublicationLazyImpl:1
//kotlin.SynchronizedLazyImpl:1
//kotlin.Triple:3
//kotlin.UnsafeLazyImpl:1
//kotlin.collections.AbstractCollection:1
//kotlin.collections.AbstractIterator:1
//kotlin.collections.AbstractList:1
//kotlin.collections.AbstractList.SubList:1
//kotlin.collections.AbstractMap:2
//kotlin.collections.AbstractMutableCollection:1
//kotlin.collections.AbstractMutableList:1
//kotlin.collections.AbstractMutableMap:2
//kotlin.collections.AbstractMutableSet:1
//kotlin.collections.AbstractSet:1
//kotlin.collections.ArrayAsCollection:1
//kotlin.collections.ArrayDeque:1
//kotlin.collections.Grouping:2
//kotlin.collections.IndexedValue:1
//kotlin.collections.IndexingIterable:1
//kotlin.collections.IndexingIterator:1
//kotlin.collections.MapWithDefault:2
//kotlin.collections.MapWithDefaultImpl:2
//kotlin.collections.MovingSubList:1
//kotlin.collections.MutableMapWithDefault:2
//kotlin.collections.MutableMapWithDefaultImpl:2
//kotlin.collections.ReversedList:1
//kotlin.collections.ReversedListReadOnly:1
//kotlin.collections.RingBuffer:1
//kotlin.collections.builders.AbstractMapBuilderEntrySet:3
//kotlin.collections.builders.ListBuilder:1
//kotlin.collections.builders.ListBuilder.Itr:1
//kotlin.collections.builders.MapBuilder:2
//kotlin.collections.builders.MapBuilder.EntriesItr:2
//kotlin.collections.builders.MapBuilder.EntryRef:2
//kotlin.collections.builders.MapBuilder.Itr:2
//kotlin.collections.builders.MapBuilder.KeysItr:2
//kotlin.collections.builders.MapBuilder.ValuesItr:2
//kotlin.collections.builders.MapBuilderEntries:2
//kotlin.collections.builders.MapBuilderKeys:1
//kotlin.collections.builders.MapBuilderValues:1
//kotlin.collections.builders.SetBuilder:1
//kotlin.comparisons.ReversedComparator:1
//kotlin.coroutines.AbstractCoroutineContextKey:1
//kotlin.coroutines.Continuation:1
//kotlin.coroutines.CoroutineContext.Key:1
//kotlin.coroutines.SafeContinuation:1
//kotlin.enums.EnumEntries:1
//kotlin.enums.EnumEntriesList:1
//kotlin.enums.EnumEntriesSerializationProxy:1
//kotlin.jvm.functions.Function0:1
//kotlin.jvm.functions.Function1:2
//kotlin.jvm.functions.Function10:11
//kotlin.jvm.functions.Function11:12
//kotlin.jvm.functions.Function12:13
//kotlin.jvm.functions.Function13:14
//kotlin.jvm.functions.Function14:15
//kotlin.jvm.functions.Function15:16
//kotlin.jvm.functions.Function16:17
//kotlin.jvm.functions.Function17:18
//kotlin.jvm.functions.Function18:19
//kotlin.jvm.functions.Function19:20
//kotlin.jvm.functions.Function2:3
//kotlin.jvm.functions.Function20:21
//kotlin.jvm.functions.Function21:22
//kotlin.jvm.functions.Function22:23
//kotlin.jvm.functions.Function3:4
//kotlin.jvm.functions.Function4:5
//kotlin.jvm.functions.Function5:6
//kotlin.jvm.functions.Function6:7
//kotlin.jvm.functions.Function7:8
//kotlin.jvm.functions.Function8:9
//kotlin.jvm.functions.Function9:10
//kotlin.jvm.functions.FunctionN:1
//kotlin.jvm.internal.ArrayIterator:1
//kotlin.jvm.internal.FunctionBase:1
//kotlin.jvm.internal.Lambda:1
//kotlin.jvm.internal.PrimitiveSpreadBuilder:1
//kotlin.jvm.internal.Ref.ObjectRef:1
//kotlin.properties.NotNullVar:1
//kotlin.properties.ObservableProperty:1
//kotlin.properties.PropertyDelegateProvider:2
//kotlin.properties.ReadOnlyProperty:2
//kotlin.properties.ReadWriteProperty:2
//kotlin.ranges.ClosedFloatingPointRange:1
//kotlin.ranges.ClosedRange:1
//kotlin.ranges.ComparableOpenEndRange:1
//kotlin.ranges.ComparableRange:1
//kotlin.ranges.OpenEndRange:1
//kotlin.reflect.KCallable:1
//kotlin.reflect.KClass:1
//kotlin.reflect.KFunction:1
//kotlin.reflect.KMutableProperty:1
//kotlin.reflect.KMutableProperty.Setter:1
//kotlin.reflect.KMutableProperty0:1
//kotlin.reflect.KMutableProperty0.Setter:1
//kotlin.reflect.KMutableProperty1:2
//kotlin.reflect.KMutableProperty1.Setter:2
//kotlin.reflect.KMutableProperty2:3
//kotlin.reflect.KMutableProperty2.Setter:3
//kotlin.reflect.KProperty:1
//kotlin.reflect.KProperty.Accessor:1
//kotlin.reflect.KProperty.Getter:1
//kotlin.reflect.KProperty0:1
//kotlin.reflect.KProperty0.Getter:1
//kotlin.reflect.KProperty1:2
//kotlin.reflect.KProperty1.Getter:2
//kotlin.reflect.KProperty2:3
//kotlin.reflect.KProperty2.Getter:3
//kotlin.sequences.ConstrainedOnceSequence:1
//kotlin.sequences.DistinctIterator:2
//kotlin.sequences.DistinctSequence:2
//kotlin.sequences.DropSequence:1
//kotlin.sequences.DropTakeSequence:1
//kotlin.sequences.DropWhileSequence:1
//kotlin.sequences.FilteringSequence:1
//kotlin.sequences.FlatteningSequence:3
//kotlin.sequences.GeneratorSequence:1
//kotlin.sequences.IndexingSequence:1
//kotlin.sequences.MergingSequence:3
//kotlin.sequences.Sequence:1
//kotlin.sequences.SequenceBuilderIterator:1
//kotlin.sequences.SequenceScope:1
//kotlin.sequences.SubSequence:1
//kotlin.sequences.TakeSequence:1
//kotlin.sequences.TakeWhileSequence:1
//kotlin.sequences.TransformingIndexedSequence:2
//kotlin.sequences.TransformingSequence:2
//kotlin.time.TimedValue:1

