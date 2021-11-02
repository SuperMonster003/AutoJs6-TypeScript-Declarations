/// <reference path="../android.d.ts"/>

declare module ezy {
	export module assist {
		export module compat {
			export class RomUtil extends java.lang.Object {
				public static class: java.lang.Class<ezy.assist.compat.RomUtil>;
				public static ROM_MIUI: string;
				public static ROM_EMUI: string;
				public static ROM_FLYME: string;
				public static ROM_OPPO: string;
				public static ROM_SMARTISAN: string;
				public static ROM_VIVO: string;
				public static ROM_QIKU: string;
				public static ROM_LENOVO: string;
				public static ROM_SAMSUNG: string;
				public static getProp(param0: string): string;
				public static isMiui(): boolean;
				public static isOppo(): boolean;
				public static isQiku(): boolean;
				public static isSmartisan(): boolean;
				public static getName(): string;
				public static getVersion(): string;
				public static isVivo(): boolean;
				public static check(param0: string): boolean;
				public static isFlyme(): boolean;
				public constructor();
				public static isEmui(): boolean;
			}
		}
	}
}

declare module ezy {
	export module assist {
		export module compat {
			export class SettingsCompat extends java.lang.Object {
				public static class: java.lang.Class<ezy.assist.compat.SettingsCompat>;
				public static setDrawOverlays(param0: globalAndroid.content.Context, param1: boolean): boolean;
				public static manageDrawOverlays(param0: globalAndroid.content.Context): void;
				public static setWriteSettings(param0: globalAndroid.content.Context, param1: boolean): boolean;
				public static manageWriteSettings(param0: globalAndroid.content.Context): void;
				public static canWriteSettings(param0: globalAndroid.content.Context): boolean;
				public static canDrawOverlays(param0: globalAndroid.content.Context): boolean;
				public constructor();
			}
		}
	}
}

declare module ezy {
	export module assist {
		export module settingscompat {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<ezy.assist.settingscompat.BuildConfig>;
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

//Generics information:

declare module kotlin {
	export class ArrayIntrinsicsKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.ArrayIntrinsicsKt>;
	}
}

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
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class CharCodeJVMKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.CharCodeJVMKt>;
	}
}

declare module kotlin {
	export class CharCodeKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.CharCodeKt>;
	}
}

declare module kotlin {
	export class DeepRecursiveFunction<T, R>  extends java.lang.Object {
		public static class: java.lang.Class<kotlin.DeepRecursiveFunction<any,any>>;
		public constructor(param0: kotlin.jvm.functions.Function3<any,any,any,any>);
		public getBlock$kotlin_stdlib(): kotlin.jvm.functions.Function3<kotlin.DeepRecursiveScope<T,R>,T,kotlin.coroutines.Continuation<any>,any>;
	}
}

declare module kotlin {
	export class DeepRecursiveKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.DeepRecursiveKt>;
		public static invoke(param0: kotlin.DeepRecursiveFunction<any,any>, param1: any): any;
	}
}

declare module kotlin {
	export abstract class DeepRecursiveScope<T, R>  extends java.lang.Object {
		public static class: java.lang.Class<kotlin.DeepRecursiveScope<any,any>>;
		public callRecursive(param0: kotlin.DeepRecursiveFunction<any,any>, param1: any, param2: kotlin.coroutines.Continuation<any>): any;
		/** @deprecated */
		public invoke(param0: kotlin.DeepRecursiveFunction<any,any>, param1: any): java.lang.Void;
		public callRecursive(param0: T, param1: kotlin.coroutines.Continuation<any>): any;
	}
}

declare module kotlin {
	export class DeepRecursiveScopeImpl<T, R>  extends kotlin.DeepRecursiveScope<any,any> implements kotlin.coroutines.Continuation<any>  {
		public static class: java.lang.Class<kotlin.DeepRecursiveScopeImpl<any,any>>;
		public resumeWith(param0: any): void;
		public constructor(param0: kotlin.jvm.functions.Function3<any,any,any,any>, param1: any);
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
		public static values(): kotlin.DeprecationLevel[];
		public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
		public static valueOf(param0: string): kotlin.DeprecationLevel;
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
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class ExceptionsKt extends kotlin.ExceptionsKt__ExceptionsKt {
		public static class: java.lang.Class<kotlin.ExceptionsKt>;
	}
}

declare module kotlin {
	export class ExceptionsKt__ExceptionsKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.ExceptionsKt__ExceptionsKt>;
		public constructor();
		public static stackTraceToString(param0: java.lang.Throwable): string;
		public static addSuppressed(param0: java.lang.Throwable, param1: java.lang.Throwable): void;
		public static getSuppressedExceptions(param0: java.lang.Throwable): java.util.List<java.lang.Throwable>;
		public static getStackTrace(param0: java.lang.Throwable): java.lang.StackTraceElement[];
	}
}

declare module kotlin {
	export class Experimental extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.Experimental>;
		/**
		 * Constructs a new instance of the kotlin.Experimental interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			level(): kotlin.Experimental.Level;
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
		public level(): kotlin.Experimental.Level;
	}
	export module Experimental {
		export class Level {
			public static class: java.lang.Class<kotlin.Experimental.Level>;
			public static WARNING: kotlin.Experimental.Level;
			public static ERROR: kotlin.Experimental.Level;
			public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			public static valueOf(param0: string): kotlin.Experimental.Level;
			public static values(): kotlin.Experimental.Level[];
		}
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
	export class HashCodeKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.HashCodeKt>;
	}
}

declare module kotlin {
	export class InitializedLazyImpl<T>  extends java.lang.Object {
		public static class: java.lang.Class<kotlin.InitializedLazyImpl<any>>;
		public isInitialized(): boolean;
		public toString(): string;
		public getValue(): T;
		public constructor(param0: T);
	}
}

declare module kotlin {
	export class KotlinNothingValueException extends java.lang.RuntimeException {
		public static class: java.lang.Class<kotlin.KotlinNothingValueException>;
		public constructor();
		public constructor(param0: string, param1: java.lang.Throwable);
		public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
		public constructor(param0: java.lang.Throwable);
		public constructor(param0: string);
	}
}

declare module kotlin {
	export class KotlinNullPointerException extends java.lang.NullPointerException {
		public static class: java.lang.Class<kotlin.KotlinNullPointerException>;
		public constructor();
		public constructor(param0: string, param1: java.lang.Throwable);
		public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
		public constructor(param0: java.lang.Throwable);
		public constructor(param0: string);
	}
}

declare module kotlin {
	export class KotlinVersion extends java.lang.Comparable<kotlin.KotlinVersion> {
		public static class: java.lang.Class<kotlin.KotlinVersion>;
		public static MAX_COMPONENT_VALUE: number;
		public static CURRENT: kotlin.KotlinVersion;
		public static Companion: kotlin.KotlinVersion.Companion;
		public constructor(param0: number, param1: number);
		public equals(param0: any): boolean;
		public getPatch(): number;
		public constructor(param0: number, param1: number, param2: number);
		public hashCode(): number;
		public getMinor(): number;
		public getMajor(): number;
		public toString(): string;
		public compareTo(param0: kotlin.KotlinVersion): number;
		public isAtLeast(param0: number, param1: number): boolean;
		public isAtLeast(param0: number, param1: number, param2: number): boolean;
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
	export class LateinitKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.LateinitKt>;
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
	export class LazyKt extends kotlin.LazyKt__LazyKt {
		public static class: java.lang.Class<kotlin.LazyKt>;
	}
	export module LazyKt {
		export class WhenMappings extends java.lang.Object {
			public static class: java.lang.Class<kotlin.LazyKt.WhenMappings>;
		}
	}
}

declare module kotlin {
	export class LazyKt__LazyJVMKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.LazyKt__LazyJVMKt>;
		public constructor();
		public static lazy(param0: kotlin.LazyThreadSafetyMode, param1: kotlin.jvm.functions.Function0<any>): kotlin.Lazy<any>;
		public static lazy(param0: any, param1: kotlin.jvm.functions.Function0<any>): kotlin.Lazy<any>;
		public static lazy(param0: kotlin.jvm.functions.Function0<any>): kotlin.Lazy<any>;
	}
}

declare module kotlin {
	export class LazyKt__LazyKt extends kotlin.LazyKt__LazyJVMKt {
		public static class: java.lang.Class<kotlin.LazyKt__LazyKt>;
		public constructor();
		public static lazyOf(param0: any): kotlin.Lazy<any>;
	}
}

declare module kotlin {
	export class LazyThreadSafetyMode {
		public static class: java.lang.Class<kotlin.LazyThreadSafetyMode>;
		public static SYNCHRONIZED: kotlin.LazyThreadSafetyMode;
		public static PUBLICATION: kotlin.LazyThreadSafetyMode;
		public static NONE: kotlin.LazyThreadSafetyMode;
		public static valueOf(param0: string): kotlin.LazyThreadSafetyMode;
		public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
		public static values(): kotlin.LazyThreadSafetyMode[];
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
		public k(): number;
		public equals(param0: any): boolean;
		public d2(): string[];
		public bv(): number[];
		public hashCode(): number;
		public d1(): string[];
		public xi(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
		public mv(): number[];
		public xs(): string;
	}
}

declare module kotlin {
	export class NoWhenBranchMatchedException extends java.lang.RuntimeException {
		public static class: java.lang.Class<kotlin.NoWhenBranchMatchedException>;
		public constructor();
		public constructor(param0: string, param1: java.lang.Throwable);
		public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
		public constructor(param0: java.lang.Throwable);
		public constructor(param0: string);
	}
}

declare module kotlin {
	export class NotImplementedError extends java.lang.Error {
		public static class: java.lang.Class<kotlin.NotImplementedError>;
		public constructor();
		public constructor(param0: string, param1: java.lang.Throwable);
		public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
		public constructor(param0: java.lang.Throwable);
		public constructor(param0: string);
	}
}

declare module kotlin {
	export class NumbersKt extends kotlin.NumbersKt__NumbersKt {
		public static class: java.lang.Class<kotlin.NumbersKt>;
	}
}

declare module kotlin {
	export class NumbersKt__BigDecimalsKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.NumbersKt__BigDecimalsKt>;
		public constructor();
	}
}

declare module kotlin {
	export class NumbersKt__BigIntegersKt extends kotlin.NumbersKt__BigDecimalsKt {
		public static class: java.lang.Class<kotlin.NumbersKt__BigIntegersKt>;
		public constructor();
	}
}

declare module kotlin {
	export class NumbersKt__FloorDivModKt extends kotlin.NumbersKt__BigIntegersKt {
		public static class: java.lang.Class<kotlin.NumbersKt__FloorDivModKt>;
		public constructor();
	}
}

declare module kotlin {
	export class NumbersKt__NumbersJVMKt extends kotlin.NumbersKt__FloorDivModKt {
		public static class: java.lang.Class<kotlin.NumbersKt__NumbersJVMKt>;
		public constructor();
	}
}

declare module kotlin {
	export class NumbersKt__NumbersKt extends kotlin.NumbersKt__NumbersJVMKt {
		public static class: java.lang.Class<kotlin.NumbersKt__NumbersKt>;
		public constructor();
		public static rotateLeft(param0: number, param1: number): number;
		public static rotateRight(param0: number, param1: number): number;
	}
}

declare module kotlin {
	export class OptIn extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.OptIn>;
		/**
		 * Constructs a new instance of the kotlin.OptIn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			markerClass(): java.lang.Class<any[]>;
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public markerClass(): java.lang.Class<any[]>;
		public equals(param0: any): boolean;
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
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class Pair<A, B>  extends java.io.Serializable {
		public static class: java.lang.Class<kotlin.Pair<any,any>>;
		public copy(param0: any, param1: any): kotlin.Pair<any,any>;
		public equals(param0: any): boolean;
		public constructor(param0: any, param1: any);
		public component1(): any;
		public component2(): any;
		public hashCode(): number;
		public getFirst(): any;
		public getSecond(): any;
		public toString(): string;
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
		public equals(param0: any): boolean;
		public hashCode(): number;
		public name(): string;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class PreconditionsKt extends kotlin.PreconditionsKt__PreconditionsKt {
		public static class: java.lang.Class<kotlin.PreconditionsKt>;
	}
}

declare module kotlin {
	export class PreconditionsKt__AssertionsJVMKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.PreconditionsKt__AssertionsJVMKt>;
		public constructor();
	}
}

declare module kotlin {
	export class PreconditionsKt__PreconditionsKt extends kotlin.PreconditionsKt__AssertionsJVMKt {
		public static class: java.lang.Class<kotlin.PreconditionsKt__PreconditionsKt>;
		public constructor();
	}
}

declare module kotlin {
	export class PropertyReferenceDelegatesKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.PropertyReferenceDelegatesKt>;
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
		public equals(param0: any): boolean;
		public imports(): string[];
		public hashCode(): number;
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
			public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			public static values(): kotlin.RequiresOptIn.Level[];
			public static valueOf(param0: string): kotlin.RequiresOptIn.Level;
		}
	}
}

declare module kotlin {
	export class Result<T>  extends java.io.Serializable {
		public static class: java.lang.Class<kotlin.Result<any>>;
		public static Companion: kotlin.Result.Companion;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
	}
	export module Result {
		export class Companion extends java.lang.Object {
			public static class: java.lang.Class<kotlin.Result.Companion>;
		}
		export class Failure extends java.lang.Object implements java.io.Serializable {
			public static class: java.lang.Class<kotlin.Result.Failure>;
			public exception: java.lang.Throwable;
			public equals(param0: any): boolean;
			public toString(): string;
			public constructor(param0: java.lang.Throwable);
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export class ResultKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.ResultKt>;
		public static createFailure(param0: java.lang.Throwable): any;
		public static throwOnFailure(param0: any): void;
	}
}

declare module kotlin {
	export class SafePublicationLazyImpl<T>  extends java.lang.Object {
		public static class: java.lang.Class<kotlin.SafePublicationLazyImpl<any>>;
		public static Companion: kotlin.SafePublicationLazyImpl.Companion;
		public isInitialized(): boolean;
		public constructor(param0: kotlin.jvm.functions.Function0<any>);
		public toString(): string;
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
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
		public version(): string;
	}
}

declare module kotlin {
	export class StandardKt extends kotlin.StandardKt__SynchronizedKt {
		public static class: java.lang.Class<kotlin.StandardKt>;
	}
}

declare module kotlin {
	export class StandardKt__StandardKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.StandardKt__StandardKt>;
		public constructor();
	}
}

declare module kotlin {
	export class StandardKt__SynchronizedKt extends kotlin.StandardKt__StandardKt {
		public static class: java.lang.Class<kotlin.StandardKt__SynchronizedKt>;
		public constructor();
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
		public equals(param0: any): boolean;
		public hashCode(): number;
		public names(): string[];
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class SuspendKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.SuspendKt>;
	}
}

declare module kotlin {
	export class SynchronizedLazyImpl<T>  extends java.lang.Object {
		public static class: java.lang.Class<kotlin.SynchronizedLazyImpl<any>>;
		public isInitialized(): boolean;
		public constructor(param0: kotlin.jvm.functions.Function0<any>, param1: any);
		public toString(): string;
		public getValue(): T;
	}
}

declare module kotlin {
	export class ThrowsKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.ThrowsKt>;
	}
}

declare module kotlin {
	export class Triple<A, B, C>  extends java.io.Serializable {
		public static class: java.lang.Class<kotlin.Triple<any,any,any>>;
		public equals(param0: any): boolean;
		public getThird(): any;
		public component1(): any;
		public component2(): any;
		public hashCode(): number;
		public getFirst(): any;
		public component3(): any;
		public getSecond(): any;
		public toString(): string;
		public constructor(param0: any, param1: any, param2: any);
		public copy(param0: any, param1: any, param2: any): kotlin.Triple<any,any,any>;
	}
}

declare module kotlin {
	export class TuplesKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.TuplesKt>;
		public static to(param0: any, param1: any): kotlin.Pair<any,any>;
		public static toList(param0: kotlin.Pair<any,any>): java.util.List<any>;
		public static toList(param0: kotlin.Triple<any,any,any>): java.util.List<any>;
	}
}

declare module kotlin {
	export class TypeAliasesKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.TypeAliasesKt>;
	}
}

declare module kotlin {
	export class TypeCastException extends java.lang.ClassCastException {
		public static class: java.lang.Class<kotlin.TypeCastException>;
		public constructor();
		public constructor(param0: string, param1: java.lang.Throwable);
		public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
		public constructor(param0: java.lang.Throwable);
		public constructor(param0: string);
	}
}

declare module kotlin {
	export class UByte extends java.lang.Comparable<kotlin.UByte> {
		public static class: java.lang.Class<kotlin.UByte>;
		public static MIN_VALUE: number;
		public static MAX_VALUE: number;
		public static SIZE_BYTES: number;
		public static SIZE_BITS: number;
		public static Companion: kotlin.UByte.Companion;
		public equals(param0: any): boolean;
		public hashCode(): number;
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
		public toArray(): any[];
		public equals(param0: any): boolean;
		public forEach(param0: any /* any*/): void;
		public iterator(): java.util.Iterator<any>;
		public iterator(): java.util.Iterator<kotlin.UByte>;
		public remove(param0: any): boolean;
		public stream(): java.util.stream.Stream<any>;
		public add(param0: any): boolean;
		public size(): number;
		public hashCode(): number;
		public addAll(param0: java.util.Collection<any>): boolean;
		public isEmpty(): boolean;
		public removeIf(param0: any /* any*/): boolean;
		public getSize(): number;
		public containsAll(param0: java.util.Collection<any>): boolean;
		public toString(): string;
		public toArray(param0: any[]): any[];
		public retainAll(param0: java.util.Collection<any>): boolean;
		public contains(param0: any): boolean;
		public spliterator(): java.util.Spliterator<any>;
		public clear(): void;
		public removeAll(param0: java.util.Collection<any>): boolean;
		public parallelStream(): java.util.stream.Stream<any>;
	}
	export module UByteArray {
		export class Iterator extends kotlin.collections.UByteIterator {
			public static class: java.lang.Class<kotlin.UByteArray.Iterator>;
			public constructor();
			public constructor(param0: number[]);
			public hasNext(): boolean;
		}
	}
}

declare module kotlin {
	export class UByteArrayKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UByteArrayKt>;
	}
}

declare module kotlin {
	export class UByteKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UByteKt>;
	}
}

declare module kotlin {
	export class UInt extends java.lang.Comparable<kotlin.UInt> {
		public static class: java.lang.Class<kotlin.UInt>;
		public static MIN_VALUE: number;
		public static MAX_VALUE: number;
		public static SIZE_BYTES: number;
		public static SIZE_BITS: number;
		public static Companion: kotlin.UInt.Companion;
		public equals(param0: any): boolean;
		public hashCode(): number;
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
		public toArray(): any[];
		public equals(param0: any): boolean;
		public forEach(param0: any /* any*/): void;
		public iterator(): java.util.Iterator<any>;
		public remove(param0: any): boolean;
		public stream(): java.util.stream.Stream<any>;
		public add(param0: any): boolean;
		public size(): number;
		public hashCode(): number;
		public addAll(param0: java.util.Collection<any>): boolean;
		public isEmpty(): boolean;
		public removeIf(param0: any /* any*/): boolean;
		public getSize(): number;
		public containsAll(param0: java.util.Collection<any>): boolean;
		public toString(): string;
		public toArray(param0: any[]): any[];
		public retainAll(param0: java.util.Collection<any>): boolean;
		public contains(param0: any): boolean;
		public spliterator(): java.util.Spliterator<any>;
		public clear(): void;
		public removeAll(param0: java.util.Collection<any>): boolean;
		public iterator(): java.util.Iterator<kotlin.UInt>;
		public parallelStream(): java.util.stream.Stream<any>;
	}
	export module UIntArray {
		export class Iterator extends kotlin.collections.UIntIterator {
			public static class: java.lang.Class<kotlin.UIntArray.Iterator>;
			public constructor();
			public constructor(param0: number[]);
			public hasNext(): boolean;
		}
	}
}

declare module kotlin {
	export class UIntArrayKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UIntArrayKt>;
	}
}

declare module kotlin {
	export class UIntKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UIntKt>;
	}
}

declare module kotlin {
	export class ULong extends java.lang.Comparable<kotlin.ULong> {
		public static class: java.lang.Class<kotlin.ULong>;
		public static MIN_VALUE: number;
		public static MAX_VALUE: number;
		public static SIZE_BYTES: number;
		public static SIZE_BITS: number;
		public static Companion: kotlin.ULong.Companion;
		public equals(param0: any): boolean;
		public hashCode(): number;
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
		public toArray(): any[];
		public equals(param0: any): boolean;
		public iterator(): java.util.Iterator<kotlin.ULong>;
		public forEach(param0: any /* any*/): void;
		public iterator(): java.util.Iterator<any>;
		public remove(param0: any): boolean;
		public stream(): java.util.stream.Stream<any>;
		public add(param0: any): boolean;
		public size(): number;
		public hashCode(): number;
		public addAll(param0: java.util.Collection<any>): boolean;
		public isEmpty(): boolean;
		public removeIf(param0: any /* any*/): boolean;
		public getSize(): number;
		public containsAll(param0: java.util.Collection<any>): boolean;
		public toString(): string;
		public toArray(param0: any[]): any[];
		public retainAll(param0: java.util.Collection<any>): boolean;
		public contains(param0: any): boolean;
		public spliterator(): java.util.Spliterator<any>;
		public clear(): void;
		public removeAll(param0: java.util.Collection<any>): boolean;
		public parallelStream(): java.util.stream.Stream<any>;
	}
	export module ULongArray {
		export class Iterator extends kotlin.collections.ULongIterator {
			public static class: java.lang.Class<kotlin.ULongArray.Iterator>;
			public constructor();
			public constructor(param0: number[]);
			public hasNext(): boolean;
		}
	}
}

declare module kotlin {
	export class ULongArrayKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.ULongArrayKt>;
	}
}

declare module kotlin {
	export class ULongKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.ULongKt>;
	}
}

declare module kotlin {
	export class UNINITIALIZED_VALUE extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UNINITIALIZED_VALUE>;
		public static INSTANCE: kotlin.UNINITIALIZED_VALUE;
	}
}

declare module kotlin {
	export class UNumbersKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UNumbersKt>;
	}
}

declare module kotlin {
	export class UShort extends java.lang.Comparable<kotlin.UShort> {
		public static class: java.lang.Class<kotlin.UShort>;
		public static MIN_VALUE: number;
		public static MAX_VALUE: number;
		public static SIZE_BYTES: number;
		public static SIZE_BITS: number;
		public static Companion: kotlin.UShort.Companion;
		public equals(param0: any): boolean;
		public hashCode(): number;
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
		public toArray(): any[];
		public equals(param0: any): boolean;
		public forEach(param0: any /* any*/): void;
		public iterator(): java.util.Iterator<any>;
		public remove(param0: any): boolean;
		public stream(): java.util.stream.Stream<any>;
		public iterator(): java.util.Iterator<kotlin.UShort>;
		public add(param0: any): boolean;
		public size(): number;
		public hashCode(): number;
		public addAll(param0: java.util.Collection<any>): boolean;
		public isEmpty(): boolean;
		public removeIf(param0: any /* any*/): boolean;
		public getSize(): number;
		public containsAll(param0: java.util.Collection<any>): boolean;
		public toString(): string;
		public toArray(param0: any[]): any[];
		public retainAll(param0: java.util.Collection<any>): boolean;
		public contains(param0: any): boolean;
		public spliterator(): java.util.Spliterator<any>;
		public clear(): void;
		public removeAll(param0: java.util.Collection<any>): boolean;
		public parallelStream(): java.util.stream.Stream<any>;
	}
	export module UShortArray {
		export class Iterator extends kotlin.collections.UShortIterator {
			public static class: java.lang.Class<kotlin.UShortArray.Iterator>;
			public constructor();
			public constructor(param0: number[]);
			public hasNext(): boolean;
		}
	}
}

declare module kotlin {
	export class UShortArrayKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UShortArrayKt>;
	}
}

declare module kotlin {
	export class UShortKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UShortKt>;
	}
}

declare module kotlin {
	export class UninitializedPropertyAccessException extends java.lang.RuntimeException {
		public static class: java.lang.Class<kotlin.UninitializedPropertyAccessException>;
		public constructor();
		public constructor(param0: string, param1: java.lang.Throwable);
		public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
		public constructor(param0: java.lang.Throwable);
		public constructor(param0: string);
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
		public constructor(param0: kotlin.jvm.functions.Function0<any>);
		public toString(): string;
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
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class UnsignedKt extends java.lang.Object {
		public static class: java.lang.Class<kotlin.UnsignedKt>;
		public static doubleToULong(param0: number): number;
		public static uintToDouble(param0: number): number;
		public static ulongToString(param0: number): string;
		public static doubleToUInt(param0: number): number;
		public static ulongToString(param0: number, param1: number): string;
		public static ulongToDouble(param0: number): number;
		public static ulongCompare(param0: number, param1: number): number;
		public static uintCompare(param0: number, param1: number): number;
	}
}

declare module kotlin {
	export class UseExperimental extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<kotlin.UseExperimental>;
		/**
		 * Constructs a new instance of the kotlin.UseExperimental interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			markerClass(): java.lang.Class<any[]>;
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public markerClass(): java.lang.Class<any[]>;
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
			markerClass(): java.lang.Class<any[]>;
			equals(param0: any): boolean;
			hashCode(): number;
			toString(): string;
			annotationType(): java.lang.Class<any>;
		});
		public constructor();
		public markerClass(): java.lang.Class<any[]>;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module kotlin {
	export class _Assertions extends java.lang.Object {
		public static class: java.lang.Class<kotlin._Assertions>;
		public static ENABLED: boolean;
		public static INSTANCE: kotlin._Assertions;
	}
}

declare module kotlin {
	export module annotation {
		export class AnnotationRetention {
			public static class: java.lang.Class<kotlin.annotation.AnnotationRetention>;
			public static SOURCE: kotlin.annotation.AnnotationRetention;
			public static BINARY: kotlin.annotation.AnnotationRetention;
			public static RUNTIME: kotlin.annotation.AnnotationRetention;
			public static valueOf(param0: string): kotlin.annotation.AnnotationRetention;
			public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			public static values(): kotlin.annotation.AnnotationRetention[];
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
			public static valueOf(param0: string): kotlin.annotation.AnnotationTarget;
			public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			public static values(): kotlin.annotation.AnnotationTarget[];
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
			public allowedTargets(): kotlin.annotation.AnnotationTarget[];
			public equals(param0: any): boolean;
			public toString(): string;
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
			public toArray(): any[];
			public iterator(): java.util.Iterator<E>;
			public getSize(): number;
			public spliterator(): java.util.Spliterator<E>;
			public contains(param0: any): boolean;
			public stream(): java.util.stream.Stream<E>;
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public parallelStream(): java.util.stream.Stream<E>;
			public toArray(param0: any[]): any[];
			public add(param0: E): boolean;
			public constructor();
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public forEach(param0: any /* any*/): void;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public toString(): string;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public removeIf(param0: any /* any*/): boolean;
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
			public setNext(param0: T): void;
			public constructor();
			public hasNext(): boolean;
			public remove(): void;
			public computeNext(): void;
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
			public static Companion: kotlin.collections.AbstractList.Companion;
			public equals(param0: any): boolean;
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public toArray(): any[];
			public replaceAll(param0: any /* any*/): void;
			public stream(): java.util.stream.Stream<any>;
			public remove(param0: number): any;
			public getSize(): number;
			public sort(param0: java.util.Comparator<any>): void;
			public contains(param0: any): boolean;
			public get(param0: number): any;
			public add(param0: number, param1: any): void;
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public listIterator(param0: number): java.util.ListIterator<any>;
			public toArray(param0: any[]): any[];
			public constructor();
			public subList(param0: number, param1: number): java.util.List<any>;
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public set(param0: number, param1: any): any;
			public forEach(param0: any /* any*/): void;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public lastIndexOf(param0: any): number;
			public add(param0: any): boolean;
			public listIterator(): java.util.ListIterator<any>;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public indexOf(param0: any): number;
			public spliterator(): java.util.Spliterator<any>;
			public removeIf(param0: any /* any*/): boolean;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
		export module AbstractList {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.AbstractList.Companion>;
				public checkElementIndex$kotlin_stdlib(param0: number, param1: number): void;
				public checkBoundsIndexes$kotlin_stdlib(param0: number, param1: number, param2: number): void;
				public checkPositionIndex$kotlin_stdlib(param0: number, param1: number): void;
				public orderedHashCode$kotlin_stdlib(param0: java.util.Collection<any>): number;
				public checkRangeIndexes$kotlin_stdlib(param0: number, param1: number, param2: number): void;
				public orderedEquals$kotlin_stdlib(param0: java.util.Collection<any>, param1: java.util.Collection<any>): boolean;
			}
			export class IteratorImpl extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.AbstractList.IteratorImpl>;
				public remove(): void;
				public constructor(param0: kotlin.collections.AbstractList<any>);
				public next(): any;
				public hasNext(): boolean;
				public getIndex(): number;
				public setIndex(param0: number): void;
			}
			export class ListIteratorImpl extends kotlin.collections.AbstractList.IteratorImpl {
				public static class: java.lang.Class<kotlin.collections.AbstractList.ListIteratorImpl>;
				public previous(): any;
				public previousIndex(): number;
				public remove(): void;
				public nextIndex(): number;
				public constructor(param0: kotlin.collections.AbstractList<any>);
				public next(): any;
				public set(param0: any): void;
				public hasNext(): boolean;
				public constructor(param0: number);
				public add(param0: any): void;
				public hasPrevious(): boolean;
			}
			export class SubList<E>  extends kotlin.collections.AbstractList<any> implements java.util.RandomAccess  {
				public static class: java.lang.Class<kotlin.collections.AbstractList.SubList<any>>;
				public parallelStream(): java.util.stream.Stream<any>;
				public indexOf(param0: any): number;
				public remove(param0: number): any;
				public addAll(param0: java.util.Collection<any>): boolean;
				public listIterator(): java.util.ListIterator<any>;
				public removeIf(param0: any /* any*/): boolean;
				public add(param0: number, param1: any): void;
				public constructor();
				public toArray(): any[];
				public set(param0: number, param1: any): any;
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public getSize(): number;
				public hashCode(): number;
				public clear(): void;
				public equals(param0: any): boolean;
				public addAll(param0: number, param1: java.util.Collection<any>): boolean;
				public isEmpty(): boolean;
				public sort(param0: java.util.Comparator<any>): void;
				public lastIndexOf(param0: any): number;
				public listIterator(param0: number): java.util.ListIterator<any>;
				public remove(param0: any): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public contains(param0: any): boolean;
				public subList(param0: number, param1: number): java.util.List<any>;
				public constructor(param0: kotlin.collections.AbstractList<any>, param1: number, param2: number);
				public stream(): java.util.stream.Stream<any>;
				public toArray(param0: any[]): any[];
				public iterator(): java.util.Iterator<any>;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public get(param0: number): any;
				public size(): number;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public replaceAll(param0: any /* any*/): void;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractMap<K, V>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.AbstractMap<any,any>>;
			public static Companion: kotlin.collections.AbstractMap.Companion;
			public replaceAll(param0: any /* any<any,any,any>*/): void;
			public equals(param0: any): boolean;
			public put(param0: K, param1: V): V;
			public containsValue(param0: any): boolean;
			public containsEntry$kotlin_stdlib(param0: java.util.Map.Entry<any,any>): boolean;
			public getSize(): number;
			public forEach(param0: any /* any<any,any>*/): void;
			public keySet(): java.util.Set<K>;
			public putAll(param0: java.util.Map<any,any>): void;
			public compute(param0: K, param1: any /* any<any,any,any>*/): V;
			public values(): java.util.Collection<V>;
			public merge(param0: K, param1: V, param2: any /* any<any,any,any>*/): V;
			public clear(): void;
			public putIfAbsent(param0: K, param1: V): V;
			public isEmpty(): boolean;
			public size(): number;
			public computeIfAbsent(param0: K, param1: any /* any<any,any>*/): V;
			public getKeys(): java.util.Set<K>;
			public constructor();
			public get(param0: any): V;
			public getValues(): java.util.Collection<V>;
			public computeIfPresent(param0: K, param1: any /* any<any,any,any>*/): V;
			public getOrDefault(param0: any, param1: V): V;
			public toString(): string;
			public getEntries(): java.util.Set<any>;
			public remove(param0: any, param1: any): boolean;
			public remove(param0: any): V;
			public replace(param0: K, param1: V): V;
			public containsKey(param0: any): boolean;
			public replace(param0: K, param1: V, param2: V): boolean;
			public entrySet(): java.util.Set<java.util.Map.Entry<K,V>>;
			public hashCode(): number;
		}
		export module AbstractMap {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.AbstractMap.Companion>;
				public entryHashCode$kotlin_stdlib(param0: java.util.Map.Entry<any,any>): number;
				public entryEquals$kotlin_stdlib(param0: java.util.Map.Entry<any,any>, param1: any): boolean;
				public entryToString$kotlin_stdlib(param0: java.util.Map.Entry<any,any>): string;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractMutableCollection<E>  extends java.util.AbstractCollection<any> {
			public static class: java.lang.Class<kotlin.collections.AbstractMutableCollection<any>>;
			public clear(): void;
			public equals(param0: any): boolean;
			public toArray(): any[];
			public size(): number;
			public isEmpty(): boolean;
			public stream(): java.util.stream.Stream<any>;
			public toArray(param0: any[]): any[];
			public constructor();
			public getSize(): number;
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public forEach(param0: any /* any*/): void;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public contains(param0: any): boolean;
			public add(param0: any): boolean;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public removeIf(param0: any /* any*/): boolean;
			public parallelStream(): java.util.stream.Stream<any>;
			public iterator(): java.util.Iterator<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractMutableList<E>  extends java.util.AbstractList<any> {
			public static class: java.lang.Class<kotlin.collections.AbstractMutableList<any>>;
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public equals(param0: any): boolean;
			public toArray(): any[];
			public replaceAll(param0: any /* any*/): void;
			public stream(): java.util.stream.Stream<any>;
			public remove(param0: number): any;
			public getSize(): number;
			public sort(param0: java.util.Comparator<any>): void;
			public contains(param0: any): boolean;
			public get(param0: number): any;
			public add(param0: number, param1: any): void;
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public listIterator(param0: number): java.util.ListIterator<any>;
			public toArray(param0: any[]): any[];
			public constructor();
			public removeAt(param0: number): any;
			public subList(param0: number, param1: number): java.util.List<any>;
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public set(param0: number, param1: any): any;
			public forEach(param0: any /* any*/): void;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public lastIndexOf(param0: any): number;
			public add(param0: any): boolean;
			public listIterator(): java.util.ListIterator<any>;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public indexOf(param0: any): number;
			public spliterator(): java.util.Spliterator<any>;
			public removeIf(param0: any /* any*/): boolean;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractMutableMap<K, V>  extends java.util.AbstractMap<any,any> {
			public static class: java.lang.Class<kotlin.collections.AbstractMutableMap<any,any>>;
			public replaceAll(param0: any /* any<any,any,any>*/): void;
			public getKeys(): java.util.Set<any>;
			public equals(param0: any): boolean;
			public replace(param0: any, param1: any): any;
			public compute(param0: any, param1: any /* any<any,any,any>*/): any;
			public containsValue(param0: any): boolean;
			public replace(param0: any, param1: any, param2: any): boolean;
			public get(param0: any): any;
			public getSize(): number;
			public forEach(param0: any /* any<any,any>*/): void;
			public getOrDefault(param0: any, param1: any): any;
			public putIfAbsent(param0: any, param1: any): any;
			public remove(param0: any): any;
			public putAll(param0: java.util.Map<any,any>): void;
			public values(): java.util.Collection<any>;
			public clear(): void;
			public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
			public keySet(): java.util.Set<any>;
			public size(): number;
			public isEmpty(): boolean;
			public getValues(): java.util.Collection<any>;
			public computeIfPresent(param0: any, param1: any /* any<any,any,any>*/): any;
			public constructor();
			public computeIfAbsent(param0: any, param1: any /* any<any,any>*/): any;
			public put(param0: any, param1: any): any;
			public merge(param0: any, param1: any, param2: any /* any<any,any,any>*/): any;
			public getEntries(): java.util.Set<any>;
			public remove(param0: any, param1: any): boolean;
			public containsKey(param0: any): boolean;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractMutableSet<E>  extends java.util.AbstractSet<any> {
			public static class: java.lang.Class<kotlin.collections.AbstractMutableSet<any>>;
			public clear(): void;
			public equals(param0: any): boolean;
			public toArray(): any[];
			public size(): number;
			public isEmpty(): boolean;
			public stream(): java.util.stream.Stream<any>;
			public toArray(param0: any[]): any[];
			public constructor();
			public getSize(): number;
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public forEach(param0: any /* any*/): void;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public contains(param0: any): boolean;
			public add(param0: any): boolean;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public removeIf(param0: any /* any*/): boolean;
			public parallelStream(): java.util.stream.Stream<any>;
			public iterator(): java.util.Iterator<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractSet<E>  extends kotlin.collections.AbstractCollection<any> {
			public static class: java.lang.Class<kotlin.collections.AbstractSet<any>>;
			public static Companion: kotlin.collections.AbstractSet.Companion;
			public equals(param0: any): boolean;
			public clear(): void;
			public toArray(): any[];
			public size(): number;
			public isEmpty(): boolean;
			public stream(): java.util.stream.Stream<any>;
			public toArray(param0: any[]): any[];
			public constructor();
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public forEach(param0: any /* any*/): void;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public contains(param0: any): boolean;
			public add(param0: any): boolean;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public removeIf(param0: any /* any*/): boolean;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
		}
		export module AbstractSet {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.AbstractSet.Companion>;
				public unorderedHashCode$kotlin_stdlib(param0: java.util.Collection<any>): number;
				public setEquals$kotlin_stdlib(param0: java.util.Set<any>, param1: java.util.Set<any>): boolean;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArrayAsCollection<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.ArrayAsCollection<any>>;
			public equals(param0: any): boolean;
			public toArray(): any[];
			public stream(): java.util.stream.Stream<any>;
			public constructor(param0: T[], param1: boolean);
			public getSize(): number;
			public contains(param0: any): boolean;
			public isVarargs(): boolean;
			public spliterator(): java.util.Spliterator<T>;
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public toArray(param0: any[]): any[];
			public getValues(): T[];
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public forEach(param0: any /* any*/): void;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public iterator(): java.util.Iterator<T>;
			public add(param0: T): boolean;
			public add(param0: any): boolean;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public removeIf(param0: any /* any*/): boolean;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArrayDeque<E>  extends kotlin.collections.AbstractMutableList<any> {
			public static class: java.lang.Class<kotlin.collections.ArrayDeque<any>>;
			public static Companion: kotlin.collections.ArrayDeque.Companion;
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public removeLast(): any;
			public constructor(param0: java.util.Collection<any>);
			public first(): any;
			public removeLastOrNull(): any;
			public lastOrNull(): any;
			public clear(): void;
			public listIterator(param0: number): java.util.ListIterator<any>;
			public constructor(param0: number);
			public toArray(param0: any[]): any[];
			public constructor();
			public removeAt(param0: number): any;
			public addAll(param0: java.util.Collection<any>): boolean;
			public set(param0: number, param1: any): any;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public lastIndexOf(param0: any): number;
			public add(param0: any): boolean;
			public removeFirst(): any;
			public spliterator(): java.util.Spliterator<any>;
			public testToArray$kotlin_stdlib(param0: any[]): any[];
			public equals(param0: any): boolean;
			public toArray(): any[];
			public replaceAll(param0: any /* any*/): void;
			public stream(): java.util.stream.Stream<any>;
			public remove(param0: number): any;
			public getSize(): number;
			public internalStructure$kotlin_stdlib(param0: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
			public sort(param0: java.util.Comparator<any>): void;
			public contains(param0: any): boolean;
			public last(): any;
			public get(param0: number): any;
			public addLast(param0: any): void;
			public add(param0: number, param1: any): void;
			public iterator(): java.util.Iterator<any>;
			public isEmpty(): boolean;
			public size(): number;
			public removeFirstOrNull(): any;
			public subList(param0: number, param1: number): java.util.List<any>;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public addFirst(param0: any): void;
			public listIterator(): java.util.ListIterator<any>;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public indexOf(param0: any): number;
			public testToArray$kotlin_stdlib(): any[];
			public removeIf(param0: any /* any*/): boolean;
			public parallelStream(): java.util.stream.Stream<any>;
			public firstOrNull(): any;
			public hashCode(): number;
		}
		export module ArrayDeque {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.ArrayDeque.Companion>;
				public newCapacity$kotlin_stdlib(param0: number, param1: number): number;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArraysKt extends kotlin.collections.ArraysKt___ArraysKt {
			public static class: java.lang.Class<kotlin.collections.ArraysKt>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArraysKt__ArraysJVMKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.ArraysKt__ArraysJVMKt>;
			public static copyOfRangeToIndexCheck(param0: number, param1: number): void;
			public static contentDeepHashCode(param0: any[]): number;
			public static arrayOfNulls(param0: any[], param1: number): any[];
			public constructor();
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArraysKt__ArraysKt extends kotlin.collections.ArraysKt__ArraysJVMKt {
			public static class: java.lang.Class<kotlin.collections.ArraysKt__ArraysKt>;
			public static flatten(param0: any[][]): java.util.List<any>;
			public static unzip(param0: kotlin.Pair<any,any[]>): kotlin.Pair<any,any>;
			public static contentDeepEquals(param0: any[], param1: any[]): boolean;
			public static contentDeepToString(param0: any[]): string;
			public constructor();
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArraysKt___ArraysJvmKt extends kotlin.collections.ArraysKt__ArraysKt {
			public static class: java.lang.Class<kotlin.collections.ArraysKt___ArraysJvmKt>;
			public static fill(param0: any[], param1: any, param2: number, param3: number): void;
			public static toSortedSet(param0: boolean[]): java.util.SortedSet<java.lang.Boolean>;
			public static binarySearch(param0: number[], param1: number, param2: number, param3: number): number;
			public static plus(param0: number[], param1: java.util.Collection<java.lang.Double>): number[];
			public static sort(param0: java.lang.Comparable<any>[], param1: number, param2: number): void;
			public static copyInto(param0: number[], param1: number[], param2: number, param3: number, param4: number): number[];
			public static toTypedArray(param0: number[]): java.lang.Float[];
			public static sort(param0: number[], param1: number, param2: number): void;
			public static asList(param0: number[]): java.util.List<java.lang.Byte>;
			public static asList(param0: number[]): java.util.List<java.lang.Double>;
			public static toSortedSet(param0: java.lang.Comparable<any>[]): java.util.SortedSet<any>;
			public static filterIsInstance(param0: any[], param1: java.lang.Class<any>): java.util.List<any>;
			public static fill(param0: boolean[], param1: boolean, param2: number, param3: number): void;
			public static toTypedArray(param0: string[]): java.lang.Character[];
			public static plus(param0: string[], param1: string): string[];
			public static plus(param0: number[], param1: java.util.Collection<java.lang.Long>): number[];
			public static toSortedSet(param0: string[]): java.util.SortedSet<java.lang.Character>;
			public static asList(param0: number[]): java.util.List<java.lang.Float>;
			public static copyInto(param0: any[], param1: any[], param2: number, param3: number, param4: number): any[];
			public static plus(param0: any[], param1: java.util.Collection<any>): any[];
			public static copyOfRange(param0: boolean[], param1: number, param2: number): boolean[];
			public static asList(param0: boolean[]): java.util.List<java.lang.Boolean>;
			public static binarySearch(param0: any[], param1: any, param2: number, param3: number): number;
			public static copyInto(param0: boolean[], param1: boolean[], param2: number, param3: number, param4: number): boolean[];
			public constructor();
			public static toTypedArray(param0: number[]): java.lang.Integer[];
			public static sort(param0: number[]): void;
			public static sort(param0: any[], param1: number, param2: number): void;
			public static plus(param0: string[], param1: java.util.Collection<java.lang.Character>): string[];
			public static toSortedSet(param0: number[]): java.util.SortedSet<java.lang.Short>;
			public static copyOfRange(param0: number[], param1: number, param2: number): number[];
			public static toSortedSet(param0: number[]): java.util.SortedSet<java.lang.Float>;
			public static plus(param0: number[], param1: java.util.Collection<java.lang.Short>): number[];
			public static toTypedArray(param0: number[]): java.lang.Long[];
			public static binarySearch(param0: string[], param1: string, param2: number, param3: number): number;
			public static copyInto(param0: string[], param1: string[], param2: number, param3: number, param4: number): string[];
			public static plus(param0: number[], param1: number): number[];
			public static toSortedSet(param0: number[]): java.util.SortedSet<java.lang.Long>;
			public static asList(param0: number[]): java.util.List<java.lang.Integer>;
			public static toTypedArray(param0: number[]): java.lang.Byte[];
			public static fill(param0: number[], param1: number, param2: number, param3: number): void;
			public static toTypedArray(param0: number[]): java.lang.Short[];
			public static toTypedArray(param0: number[]): java.lang.Double[];
			public static toSortedSet(param0: any[], param1: java.util.Comparator<any>): java.util.SortedSet<any>;
			public static sort(param0: string[]): void;
			public static sort(param0: string[], param1: number, param2: number): void;
			public static fill(param0: string[], param1: string, param2: number, param3: number): void;
			public static plus(param0: any[], param1: any): any[];
			public static toSortedSet(param0: number[]): java.util.SortedSet<java.lang.Byte>;
			public static toSortedSet(param0: number[]): java.util.SortedSet<java.lang.Integer>;
			public static copyOfRange(param0: string[], param1: number, param2: number): string[];
			public static asList(param0: number[]): java.util.List<java.lang.Short>;
			public static plus(param0: string[], param1: string[]): string[];
			public static toSortedSet(param0: number[]): java.util.SortedSet<java.lang.Double>;
			public static plus(param0: boolean[], param1: boolean): boolean[];
			public static plus(param0: number[], param1: number[]): number[];
			public static plus(param0: boolean[], param1: java.util.Collection<java.lang.Boolean>): boolean[];
			public static sort(param0: any[]): void;
			public static asList(param0: number[]): java.util.List<java.lang.Long>;
			public static copyOfRange(param0: any[], param1: number, param2: number): any[];
			public static sortWith(param0: any[], param1: java.util.Comparator<any>): void;
			public static binarySearch(param0: any[], param1: any, param2: java.util.Comparator<any>, param3: number, param4: number): number;
			public static sortWith(param0: any[], param1: java.util.Comparator<any>, param2: number, param3: number): void;
			public static filterIsInstanceTo(param0: any[], param1: java.util.Collection<any>, param2: java.lang.Class<any>): java.util.Collection<any>;
			public static plus(param0: number[], param1: java.util.Collection<java.lang.Byte>): number[];
			public static asList(param0: string[]): java.util.List<java.lang.Character>;
			public static plus(param0: number[], param1: java.util.Collection<java.lang.Float>): number[];
			public static toTypedArray(param0: boolean[]): java.lang.Boolean[];
			public static asList(param0: any[]): java.util.List<any>;
			public static plus(param0: any[], param1: any[]): any[];
			public static plus(param0: boolean[], param1: boolean[]): boolean[];
			public static plus(param0: number[], param1: java.util.Collection<java.lang.Integer>): number[];
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArraysKt___ArraysKt extends kotlin.collections.ArraysKt___ArraysJvmKt {
			public static class: java.lang.Class<kotlin.collections.ArraysKt___ArraysKt>;
			/** @deprecated */
			public static max(param0: number[]): java.lang.Double;
			public static sliceArray(param0: number[], param1: java.util.Collection<java.lang.Integer>): number[];
			public static takeLastWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Byte>;
			public static zip(param0: string[], param1: string[], param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static sortedWith(param0: boolean[], param1: java.util.Comparator<any>): java.util.List<java.lang.Boolean>;
			public static reduceRight(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Short>): number;
			public static take(param0: number[], param1: number): java.util.List<java.lang.Short>;
			public static takeWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Byte>;
			public static subtract(param0: boolean[], param1: java.lang.Iterable<java.lang.Boolean>): java.util.Set<java.lang.Boolean>;
			public static takeWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Long>;
			public static groupBy(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static intersect(param0: number[], param1: java.lang.Iterable<java.lang.Double>): java.util.Set<java.lang.Double>;
			public static single(param0: number[]): number;
			/** @deprecated */
			public static sumByDouble(param0: string[], param1: kotlin.jvm.functions.Function1<any,java.lang.Double>): number;
			public static sorted(param0: number[]): java.util.List<java.lang.Double>;
			public static toMutableList(param0: string[]): java.util.List<java.lang.Character>;
			/** @deprecated */
			public static max(param0: number[]): java.lang.Byte;
			public static sortedArrayWith(param0: any[], param1: java.util.Comparator<any>): any[];
			public static maxOrNull(param0: java.lang.Float[]): java.lang.Float;
			public static reversed(param0: number[]): java.util.List<java.lang.Double>;
			public static takeLastWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Long>;
			public static take(param0: number[], param1: number): java.util.List<java.lang.Integer>;
			public static toSet(param0: string[]): java.util.Set<java.lang.Character>;
			public static mapTo(param0: string[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static toCollection(param0: any[], param1: java.util.Collection<any>): java.util.Collection<any>;
			public static filterTo(param0: number[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static getOrNull(param0: number[], param1: number): java.lang.Float;
			public static runningFold(param0: any[], param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static first(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static contains(param0: any[], param1: any): boolean;
			public static associateTo(param0: boolean[], param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static count(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static filter(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Boolean>;
			public static maxWithOrNull(param0: number[], param1: java.util.Comparator<any>): java.lang.Byte;
			public static dropWhile(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static sortedDescending(param0: string[]): java.util.List<java.lang.Character>;
			public static flatMapTo(param0: boolean[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static joinToString(param0: string[], param1: string, param2: string, param3: string, param4: number, param5: string, param6: kotlin.jvm.functions.Function1<any,any>): string;
			public static union(param0: number[], param1: java.lang.Iterable<java.lang.Float>): java.util.Set<java.lang.Float>;
			public static singleOrNull(param0: number[]): java.lang.Short;
			public static minByOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Integer;
			public static reduceRightIndexed(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Short>): number;
			public static reduceRightIndexedOrNull(param0: boolean[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Boolean>): java.lang.Boolean;
			public static sortedArrayDescending(param0: string[]): string[];
			public static minOrNull(param0: java.lang.Double[]): java.lang.Double;
			public static last(param0: number[]): number;
			public static firstOrNull(param0: number[]): java.lang.Float;
			public static randomOrNull(param0: number[], param1: kotlin.random.Random): java.lang.Double;
			public static sortedArrayDescending(param0: number[]): number[];
			public static groupingBy(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): kotlin.collections.Grouping<any,any>;
			/** @deprecated */
			public static maxBy(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Integer;
			public static filterNot(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Float>;
			public static single(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static firstOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Short;
			public static dropLastWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Double>;
			public static union(param0: boolean[], param1: java.lang.Iterable<java.lang.Boolean>): java.util.Set<java.lang.Boolean>;
			public static reduceRightIndexedOrNull(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Byte>): java.lang.Byte;
			public static associateByTo(param0: boolean[], param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static getIndices(param0: any[]): kotlin.ranges.IntRange;
			public static withIndex(param0: number[]): java.lang.Iterable<kotlin.collections.IndexedValue<java.lang.Long>>;
			public static lastOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Float;
			public static takeWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Short>;
			public static runningFoldIndexed(param0: any[], param1: any, param2: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.List<any>;
			public static toCharArray(param0: java.lang.Character[]): string[];
			/** @deprecated */
			public static sumByDouble(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Double>): number;
			public static lastOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Integer;
			public static foldRightIndexed(param0: number[], param1: any, param2: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static toHashSet(param0: string[]): java.util.HashSet<java.lang.Character>;
			public static toList(param0: number[]): java.util.List<java.lang.Short>;
			/** @deprecated */
			public static maxWith(param0: number[], param1: java.util.Comparator<any>): java.lang.Float;
			public static subtract(param0: number[], param1: java.lang.Iterable<java.lang.Float>): java.util.Set<java.lang.Float>;
			/** @deprecated */
			public static contains(param0: number[], param1: number): boolean;
			public static indexOfFirst(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static sumOfInt(param0: java.lang.Integer[]): number;
			public static maxByOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Float;
			public static maxWithOrNull(param0: string[], param1: java.util.Comparator<any>): java.lang.Character;
			public static subtract(param0: number[], param1: java.lang.Iterable<java.lang.Double>): java.util.Set<java.lang.Double>;
			/** @deprecated */
			public static sumBy(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Integer>): number;
			/** @deprecated */
			public static maxBy(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Double;
			public static maxWithOrNull(param0: number[], param1: java.util.Comparator<any>): java.lang.Long;
			public static toMutableList(param0: number[]): java.util.List<java.lang.Short>;
			public static zip(param0: number[], param1: number[], param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static toCollection(param0: boolean[], param1: java.util.Collection<any>): java.util.Collection<any>;
			public static associate(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static toList(param0: boolean[]): java.util.List<java.lang.Boolean>;
			public static singleOrNull(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static slice(param0: any[], param1: java.lang.Iterable<any>): java.util.List<any>;
			public static toMutableSet(param0: number[]): java.util.Set<java.lang.Float>;
			public static randomOrNull(param0: number[], param1: kotlin.random.Random): java.lang.Long;
			public static flatMapTo(param0: string[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static reduce(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Double>): number;
			public static partition(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): kotlin.Pair<any,any>;
			public static contains(param0: boolean[], param1: boolean): boolean;
			public static reduceOrNull(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Short>): java.lang.Short;
			/** @deprecated */
			public static max(param0: java.lang.Double[]): java.lang.Double;
			public static filterIndexedTo(param0: any[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static averageOfInt(param0: java.lang.Integer[]): number;
			public static union(param0: number[], param1: java.lang.Iterable<java.lang.Long>): java.util.Set<java.lang.Long>;
			public static asSequence(param0: number[]): kotlin.sequences.Sequence<java.lang.Short>;
			public static groupBy(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			/** @deprecated */
			public static maxBy(param0: string[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Character;
			public static asIterable(param0: any[]): java.lang.Iterable<any>;
			public static toMutableSet(param0: number[]): java.util.Set<java.lang.Byte>;
			public static any(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static associate(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static none(param0: number[]): boolean;
			public static asIterable(param0: boolean[]): java.lang.Iterable<java.lang.Boolean>;
			/** @deprecated */
			public static minBy(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Float;
			public static reversed(param0: any[]): java.util.List<any>;
			public static first(param0: number[]): number;
			public static zip(param0: number[], param1: number[]): java.util.List<kotlin.Pair<java.lang.Integer,java.lang.Integer>>;
			public static filterNot(param0: string[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Character>;
			public static sortedBy(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			/** @deprecated */
			public static minWith(param0: number[], param1: java.util.Comparator<any>): java.lang.Integer;
			public static sorted(param0: number[]): java.util.List<java.lang.Long>;
			public static firstOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Byte;
			public static associateByTo(param0: boolean[], param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>, param3: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static filterIndexed(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): java.util.List<java.lang.Double>;
			public static takeLast(param0: number[], param1: number): java.util.List<java.lang.Integer>;
			public static drop(param0: number[], param1: number): java.util.List<java.lang.Byte>;
			public static minOrNull(param0: number[]): java.lang.Integer;
			public static sorted(param0: number[]): java.util.List<java.lang.Byte>;
			/** @deprecated */
			public static min(param0: number[]): java.lang.Integer;
			public static dropWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Float>;
			public static toHashSet(param0: boolean[]): java.util.HashSet<java.lang.Boolean>;
			public static asIterable(param0: number[]): java.lang.Iterable<java.lang.Float>;
			/** @deprecated */
			public static sumBy(param0: string[], param1: kotlin.jvm.functions.Function1<any,java.lang.Integer>): number;
			public static reduceRight(param0: boolean[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): boolean;
			public static maxWithOrNull(param0: number[], param1: java.util.Comparator<any>): java.lang.Integer;
			public static slice(param0: string[], param1: kotlin.ranges.IntRange): java.util.List<java.lang.Character>;
			public static sortedBy(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static filterNot(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static groupBy(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static toIntArray(param0: java.lang.Integer[]): number[];
			public static zip(param0: number[], param1: any[], param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static reduceIndexed(param0: any[], param1: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static reduceRightIndexedOrNull(param0: any[], param1: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static zip(param0: string[], param1: string[]): java.util.List<kotlin.Pair<java.lang.Character,java.lang.Character>>;
			public static any(param0: any[]): boolean;
			public static filterNotNull(param0: any[]): java.util.List<any>;
			public static reduceRightIndexed(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Double>): number;
			/** @deprecated */
			public static maxBy(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static drop(param0: any[], param1: number): java.util.List<any>;
			public static foldRight(param0: string[], param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static toBooleanArray(param0: java.lang.Boolean[]): boolean[];
			public static subtract(param0: number[], param1: java.lang.Iterable<java.lang.Integer>): java.util.Set<java.lang.Integer>;
			public static dropLast(param0: string[], param1: number): java.util.List<java.lang.Character>;
			public static sliceArray(param0: any[], param1: kotlin.ranges.IntRange): any[];
			public static first(param0: string[]): string;
			public static asSequence(param0: number[]): kotlin.sequences.Sequence<java.lang.Byte>;
			public static withIndex(param0: any[]): java.lang.Iterable<any>;
			public static maxOrNull(param0: number[]): java.lang.Float;
			public static minWithOrNull(param0: number[], param1: java.util.Comparator<any>): java.lang.Short;
			public static takeLast(param0: string[], param1: number): java.util.List<java.lang.Character>;
			public static takeWhile(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Boolean>;
			public static associateTo(param0: number[], param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static associateByTo(param0: string[], param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>, param3: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static reduceIndexedOrNull(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Byte>): java.lang.Byte;
			public static minByOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Short;
			public static takeLast(param0: number[], param1: number): java.util.List<java.lang.Byte>;
			public static reduce(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Integer>): number;
			public static filterNotTo(param0: string[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static flatMap(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static none(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static lastOrNull(param0: number[]): java.lang.Byte;
			public static flatMapSequence(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static reduceRightIndexed(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Long>): number;
			public static lastIndexOf(param0: string[], param1: string): number;
			public static filterNot(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Short>;
			public static indexOfLast(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static dropLast(param0: number[], param1: number): java.util.List<java.lang.Double>;
			public static reduceRightIndexed(param0: string[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Character>): string;
			public static reduceRightIndexed(param0: any[], param1: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static foldIndexed(param0: boolean[], param1: any, param2: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static drop(param0: number[], param1: number): java.util.List<java.lang.Double>;
			public static reduce(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Byte>): number;
			public static minWithOrNull(param0: string[], param1: java.util.Comparator<any>): java.lang.Character;
			public static random(param0: any[], param1: kotlin.random.Random): any;
			public static distinct(param0: number[]): java.util.List<java.lang.Short>;
			public static firstOrNull(param0: string[]): java.lang.Character;
			public static takeLast(param0: number[], param1: number): java.util.List<java.lang.Short>;
			/** @deprecated */
			public static maxWith(param0: string[], param1: java.util.Comparator<any>): java.lang.Character;
			public static takeLast(param0: any[], param1: number): java.util.List<any>;
			public static filterNot(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Double>;
			public static toList(param0: number[]): java.util.List<java.lang.Float>;
			public static reduceIndexedOrNull(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Long>): java.lang.Long;
			public static sliceArray(param0: boolean[], param1: kotlin.ranges.IntRange): boolean[];
			public static mapTo(param0: number[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static groupByTo(param0: boolean[], param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static reversedArray(param0: string[]): string[];
			public static drop(param0: number[], param1: number): java.util.List<java.lang.Float>;
			public static minOrNull(param0: number[]): java.lang.Byte;
			public static filter(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Float>;
			public static sumOfLong(param0: java.lang.Long[]): number;
			public static reduceIndexed(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Float>): number;
			public static asSequence(param0: any[]): kotlin.sequences.Sequence<any>;
			public static singleOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Float;
			public static asIterable(param0: number[]): java.lang.Iterable<java.lang.Short>;
			public static reduce(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Long>): number;
			public static forEachIndexed(param0: any[], param1: kotlin.jvm.functions.Function2<any,any,any>): void;
			public static zip(param0: boolean[], param1: boolean[], param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static sortedWith(param0: number[], param1: java.util.Comparator<any>): java.util.List<java.lang.Byte>;
			public static dropLastWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Integer>;
			public static reduceRightOrNull(param0: string[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Character>): java.lang.Character;
			public static sliceArray(param0: string[], param1: kotlin.ranges.IntRange): string[];
			public static dropLast(param0: number[], param1: number): java.util.List<java.lang.Integer>;
			public static zip(param0: any[], param1: any[]): java.util.List<any>;
			public static asSequence(param0: number[]): kotlin.sequences.Sequence<java.lang.Float>;
			public static single(param0: boolean[]): boolean;
			public static takeWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Float>;
			public static minByOrNull(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Boolean;
			public static groupByTo(param0: string[], param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static filterTo(param0: string[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			/** @deprecated */
			public static min(param0: java.lang.Double[]): java.lang.Double;
			public static reduceOrNull(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Integer>): java.lang.Integer;
			public static slice(param0: number[], param1: kotlin.ranges.IntRange): java.util.List<java.lang.Short>;
			public static takeLastWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Short>;
			public static firstOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Long;
			/** @deprecated */
			public static maxBy(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Byte;
			public static maxOrNull(param0: string[]): java.lang.Character;
			public static minWithOrNull(param0: number[], param1: java.util.Comparator<any>): java.lang.Integer;
			public static take(param0: boolean[], param1: number): java.util.List<java.lang.Boolean>;
			public static sortedBy(param0: string[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static intersect(param0: number[], param1: java.lang.Iterable<java.lang.Byte>): java.util.Set<java.lang.Byte>;
			public static reduceRight(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Float>): number;
			public static zip(param0: any[], param1: java.lang.Iterable<any>): java.util.List<any>;
			public static singleOrNull(param0: number[]): java.lang.Double;
			public static drop(param0: number[], param1: number): java.util.List<java.lang.Integer>;
			public static takeWhile(param0: string[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Character>;
			public static random(param0: string[], param1: kotlin.random.Random): string;
			/** @deprecated */
			public static minWith(param0: boolean[], param1: java.util.Comparator<any>): java.lang.Boolean;
			public static first(param0: string[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static lastOrNull(param0: any[]): any;
			public static joinToString(param0: boolean[], param1: string, param2: string, param3: string, param4: number, param5: string, param6: kotlin.jvm.functions.Function1<any,any>): string;
			public static asIterable(param0: number[]): java.lang.Iterable<java.lang.Byte>;
			/** @deprecated */
			public static maxWith(param0: number[], param1: java.util.Comparator<any>): java.lang.Integer;
			public static slice(param0: number[], param1: java.lang.Iterable<java.lang.Integer>): java.util.List<java.lang.Double>;
			public static random(param0: boolean[], param1: kotlin.random.Random): boolean;
			/** @deprecated */
			public static lastIndexOf(param0: number[], param1: number): number;
			public static toSet(param0: number[]): java.util.Set<java.lang.Short>;
			public static reduceIndexed(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Byte>): number;
			public static lastOrNull(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static firstOrNull(param0: number[]): java.lang.Double;
			public static maxWithOrNull(param0: number[], param1: java.util.Comparator<any>): java.lang.Double;
			public static reduceRightIndexedOrNull(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Long>): java.lang.Long;
			public static partition(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): kotlin.Pair<java.util.List<java.lang.Byte>,java.util.List<java.lang.Byte>>;
			public static random(param0: number[], param1: kotlin.random.Random): number;
			public static distinct(param0: number[]): java.util.List<java.lang.Double>;
			public static getOrNull(param0: number[], param1: number): java.lang.Long;
			public static mapTo(param0: boolean[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			/** @deprecated */
			public static minWith(param0: any[], param1: java.util.Comparator<any>): any;
			public static slice(param0: number[], param1: kotlin.ranges.IntRange): java.util.List<java.lang.Double>;
			public static toSet(param0: number[]): java.util.Set<java.lang.Double>;
			public static mapIndexedNotNull(param0: any[], param1: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static shuffle(param0: boolean[]): void;
			public static indexOf(param0: any[], param1: any): number;
			public static lastOrNull(param0: number[]): java.lang.Integer;
			public static toHashSet(param0: any[]): java.util.HashSet<any>;
			public static mapTo(param0: any[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static groupByTo(param0: number[], param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static reverse(param0: any[], param1: number, param2: number): void;
			public static takeLastWhile(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static toDoubleArray(param0: java.lang.Double[]): number[];
			public static groupByTo(param0: string[], param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>, param3: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static map(param0: string[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static filterNotNullTo(param0: any[], param1: java.util.Collection<any>): java.util.Collection<any>;
			public static none(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static sortByDescending(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): void;
			public static asSequence(param0: number[]): kotlin.sequences.Sequence<java.lang.Long>;
			public static singleOrNull(param0: number[]): java.lang.Byte;
			public static mapIndexed(param0: boolean[], param1: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static distinctBy(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static withIndex(param0: string[]): java.lang.Iterable<kotlin.collections.IndexedValue<java.lang.Character>>;
			public static associateBy(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static sortedDescending(param0: number[]): java.util.List<java.lang.Double>;
			public static mapIndexedTo(param0: number[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static maxOrNull(param0: number[]): java.lang.Integer;
			public static slice(param0: any[], param1: kotlin.ranges.IntRange): java.util.List<any>;
			public static contains(param0: string[], param1: string): boolean;
			public static averageOfDouble(param0: java.lang.Double[]): number;
			public static getIndices(param0: number[]): kotlin.ranges.IntRange;
			public static toMutableList(param0: any[]): java.util.List<any>;
			public static singleOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Short;
			public static slice(param0: number[], param1: java.lang.Iterable<java.lang.Integer>): java.util.List<java.lang.Byte>;
			public static mapIndexed(param0: string[], param1: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static intersect(param0: string[], param1: java.lang.Iterable<java.lang.Character>): java.util.Set<java.lang.Character>;
			public static sortDescending(param0: java.lang.Comparable<any>[], param1: number, param2: number): void;
			public static reverse(param0: boolean[], param1: number, param2: number): void;
			public static dropLast(param0: number[], param1: number): java.util.List<java.lang.Float>;
			public static toHashSet(param0: number[]): java.util.HashSet<java.lang.Byte>;
			public static sortedDescending(param0: java.lang.Comparable<any>[]): java.util.List<any>;
			public static associateBy(param0: string[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static sortDescending(param0: number[], param1: number, param2: number): void;
			/** @deprecated */
			public static maxBy(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Float;
			public static toHashSet(param0: number[]): java.util.HashSet<java.lang.Long>;
			public static forEachIndexed(param0: string[], param1: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
			public static reduceOrNull(param0: string[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Character>): java.lang.Character;
			public static reduceRight(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Integer>): number;
			public static sumOfFloat(param0: java.lang.Float[]): number;
			public static toMutableSet(param0: number[]): java.util.Set<java.lang.Double>;
			public static zip(param0: number[], param1: number[]): java.util.List<kotlin.Pair<java.lang.Short,java.lang.Short>>;
			public static dropLast(param0: boolean[], param1: number): java.util.List<java.lang.Boolean>;
			/** @deprecated */
			public static minWith(param0: number[], param1: java.util.Comparator<any>): java.lang.Byte;
			public static reduceOrNull(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Long>): java.lang.Long;
			public static slice(param0: number[], param1: java.lang.Iterable<java.lang.Integer>): java.util.List<java.lang.Long>;
			public static reduceOrNull(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Double>): java.lang.Double;
			public static filterIndexed(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): java.util.List<java.lang.Short>;
			public static map(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static dropWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Double>;
			public static lastIndexOf(param0: any[], param1: any): number;
			/** @deprecated */
			public static maxBy(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Short;
			public static take(param0: number[], param1: number): java.util.List<java.lang.Float>;
			public static mapIndexedTo(param0: any[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static scan(param0: any[], param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static reduce(param0: string[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Character>): string;
			public static minOrNull(param0: java.lang.Float[]): java.lang.Float;
			public static fold(param0: string[], param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static forEach(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
			public static maxOrNull(param0: number[]): java.lang.Double;
			public static minWithOrNull(param0: number[], param1: java.util.Comparator<any>): java.lang.Byte;
			public static any(param0: string[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static zip(param0: boolean[], param1: java.lang.Iterable<any>): java.util.List<any>;
			public static reverse(param0: boolean[]): void;
			public static lastOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Short;
			public static associateBy(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static lastIndexOf(param0: number[], param1: number): number;
			public static mapIndexed(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			/** @deprecated */
			public static minBy(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Byte;
			public static distinctBy(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static foldIndexed(param0: any[], param1: any, param2: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static associateWithTo(param0: any[], param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static associate(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static reduceRightOrNull(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Double>): java.lang.Double;
			public static joinTo(param0: boolean[], param1: java.lang.Appendable, param2: string, param3: string, param4: string, param5: number, param6: string, param7: kotlin.jvm.functions.Function1<any,any>): java.lang.Appendable;
			/** @deprecated */
			public static indexOf(param0: number[], param1: number): number;
			public static none(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static reversed(param0: string[]): java.util.List<java.lang.Character>;
			public static toHashSet(param0: number[]): java.util.HashSet<java.lang.Short>;
			public static minOrNull(param0: number[]): java.lang.Long;
			public static lastOrNull(param0: number[]): java.lang.Double;
			public static randomOrNull(param0: number[], param1: kotlin.random.Random): java.lang.Byte;
			public static reduceRightIndexed(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Byte>): number;
			public static lastOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Double;
			public static asSequence(param0: number[]): kotlin.sequences.Sequence<java.lang.Double>;
			public static asIterable(param0: number[]): java.lang.Iterable<java.lang.Long>;
			public static distinctBy(param0: string[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static all(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static reduceRightOrNull(param0: any[], param1: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static reduceIndexed(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Integer>): number;
			public static average(param0: number[]): number;
			public static sortedDescending(param0: number[]): java.util.List<java.lang.Integer>;
			public static count(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static last(param0: string[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static withIndex(param0: number[]): java.lang.Iterable<kotlin.collections.IndexedValue<java.lang.Short>>;
			public static filterNot(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Boolean>;
			public static takeLast(param0: number[], param1: number): java.util.List<java.lang.Double>;
			public static filter(param0: string[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Character>;
			public static union(param0: any[], param1: java.lang.Iterable<any>): java.util.Set<any>;
			public static zip(param0: any[], param1: any[], param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static partition(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): kotlin.Pair<java.util.List<java.lang.Double>,java.util.List<java.lang.Double>>;
			public static sorted(param0: number[]): java.util.List<java.lang.Short>;
			public static joinTo(param0: string[], param1: java.lang.Appendable, param2: string, param3: string, param4: string, param5: number, param6: string, param7: kotlin.jvm.functions.Function1<any,any>): java.lang.Appendable;
			/** @deprecated */
			public static maxBy(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Long;
			public static getLastIndex(param0: number[]): number;
			public static associateWith(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static toList(param0: string[]): java.util.List<java.lang.Character>;
			public static toHashSet(param0: number[]): java.util.HashSet<java.lang.Double>;
			public static reduceIndexedOrNull(param0: boolean[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Boolean>): java.lang.Boolean;
			public static sorted(param0: java.lang.Comparable<any>[]): java.util.List<any>;
			/** @deprecated */
			public static max(param0: number[]): java.lang.Long;
			public static last(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static take(param0: string[], param1: number): java.util.List<java.lang.Character>;
			public static randomOrNull(param0: number[], param1: kotlin.random.Random): java.lang.Integer;
			public static all(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static reduceOrNull(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Byte>): java.lang.Byte;
			/** @deprecated */
			public static minWith(param0: number[], param1: java.util.Comparator<any>): java.lang.Double;
			public static sortedWith(param0: number[], param1: java.util.Comparator<any>): java.util.List<java.lang.Float>;
			public static toCollection(param0: string[], param1: java.util.Collection<any>): java.util.Collection<any>;
			public static toMutableSet(param0: number[]): java.util.Set<java.lang.Short>;
			public static toMutableList(param0: number[]): java.util.List<java.lang.Float>;
			/** @deprecated */
			public static max(param0: java.lang.Float[]): java.lang.Float;
			/** @deprecated */
			public static minBy(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Boolean;
			public static distinctBy(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static first(param0: boolean[]): boolean;
			public static filterNotTo(param0: boolean[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static indexOf(param0: string[], param1: string): number;
			public static take(param0: number[], param1: number): java.util.List<java.lang.Byte>;
			public static sorted(param0: number[]): java.util.List<java.lang.Integer>;
			public static maxWithOrNull(param0: any[], param1: java.util.Comparator<any>): any;
			public static getIndices(param0: string[]): kotlin.ranges.IntRange;
			public static reduceIndexed(param0: string[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Character>): string;
			public static intersect(param0: number[], param1: java.lang.Iterable<java.lang.Short>): java.util.Set<java.lang.Short>;
			public static minOrNull(param0: number[]): java.lang.Double;
			public static reduceRightIndexed(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Integer>): number;
			public static zip(param0: number[], param1: java.lang.Iterable<any>): java.util.List<any>;
			public static associateByTo(param0: number[], param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>, param3: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static requireNoNulls(param0: any[]): any[];
			public static withIndex(param0: number[]): java.lang.Iterable<kotlin.collections.IndexedValue<java.lang.Integer>>;
			public static zip(param0: number[], param1: number[]): java.util.List<kotlin.Pair<java.lang.Long,java.lang.Long>>;
			public static take(param0: number[], param1: number): java.util.List<java.lang.Long>;
			public static minByOrNull(param0: string[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Character;
			public static minByOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Byte;
			public static reduceIndexed(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Short>): number;
			public static slice(param0: number[], param1: kotlin.ranges.IntRange): java.util.List<java.lang.Integer>;
			public static getIndices(param0: boolean[]): kotlin.ranges.IntRange;
			public static foldRightIndexed(param0: string[], param1: any, param2: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static sortedArrayDescending(param0: java.lang.Comparable<any>[]): java.lang.Comparable<any>[];
			public static minOrNull(param0: string[]): java.lang.Character;
			public static dropLast(param0: number[], param1: number): java.util.List<java.lang.Long>;
			public static associateBy(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static fold(param0: number[], param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static zip(param0: string[], param1: any[], param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static singleOrNull(param0: number[]): java.lang.Float;
			public static none(param0: any[]): boolean;
			public static toSet(param0: number[]): java.util.Set<java.lang.Byte>;
			public static sortedArray(param0: number[]): number[];
			public static reduceRight(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Long>): number;
			public static dropLast(param0: number[], param1: number): java.util.List<java.lang.Byte>;
			public static toSet(param0: number[]): java.util.Set<java.lang.Long>;
			public static reduceRightIndexedOrNull(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Double>): java.lang.Double;
			/** @deprecated */
			public static maxWith(param0: number[], param1: java.util.Comparator<any>): java.lang.Short;
			public static groupByTo(param0: boolean[], param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>, param3: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static reduceRightOrNull(param0: boolean[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): java.lang.Boolean;
			public static first(param0: any[]): any;
			public static maxByOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Long;
			public static sortedArray(param0: string[]): string[];
			public static zip(param0: number[], param1: number[]): java.util.List<kotlin.Pair<java.lang.Double,java.lang.Double>>;
			public static filterTo(param0: boolean[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static none(param0: boolean[]): boolean;
			public static zip(param0: string[], param1: java.lang.Iterable<any>): java.util.List<any>;
			public static any(param0: number[]): boolean;
			public static last(param0: any[]): any;
			/** @deprecated */
			public static min(param0: string[]): java.lang.Character;
			public static singleOrNull(param0: number[]): java.lang.Integer;
			public static getOrNull(param0: number[], param1: number): java.lang.Integer;
			public static union(param0: number[], param1: java.lang.Iterable<java.lang.Byte>): java.util.Set<java.lang.Byte>;
			public static indexOfFirst(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static associateByTo(param0: string[], param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static reduceRightIndexedOrNull(param0: string[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Character>): java.lang.Character;
			/** @deprecated */
			public static min(param0: number[]): java.lang.Long;
			public static lastOrNull(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Boolean;
			public static sortedWith(param0: string[], param1: java.util.Comparator<any>): java.util.List<java.lang.Character>;
			public static shuffle(param0: number[], param1: kotlin.random.Random): void;
			public static maxOrNull(param0: number[]): java.lang.Long;
			public static dropWhile(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Boolean>;
			public static any(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static zip(param0: boolean[], param1: boolean[]): java.util.List<kotlin.Pair<java.lang.Boolean,java.lang.Boolean>>;
			public static foldRightIndexed(param0: any[], param1: any, param2: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static contains(param0: number[], param1: number): boolean;
			/** @deprecated */
			public static maxWith(param0: any[], param1: java.util.Comparator<any>): any;
			/** @deprecated */
			public static minWith(param0: number[], param1: java.util.Comparator<any>): java.lang.Long;
			public static firstOrNull(param0: number[]): java.lang.Short;
			public static reversed(param0: number[]): java.util.List<java.lang.Float>;
			public static sortDescending(param0: java.lang.Comparable<any>[]): void;
			public static toList(param0: number[]): java.util.List<java.lang.Integer>;
			public static singleOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Double;
			public static indexOfFirst(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): number;
			public static withIndex(param0: number[]): java.lang.Iterable<kotlin.collections.IndexedValue<java.lang.Double>>;
			public static maxByOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Short;
			public static reduceIndexed(param0: boolean[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Boolean>): boolean;
			public static dropLast(param0: any[], param1: number): java.util.List<any>;
			public static firstOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Double;
			public static filterIndexed(param0: any[], param1: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static reduceRightOrNull(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Long>): java.lang.Long;
			public static single(param0: any[]): any;
			public static toList(param0: number[]): java.util.List<java.lang.Double>;
			public static reverse(param0: string[]): void;
			public static intersect(param0: boolean[], param1: java.lang.Iterable<java.lang.Boolean>): java.util.Set<java.lang.Boolean>;
			public static union(param0: string[], param1: java.lang.Iterable<java.lang.Character>): java.util.Set<java.lang.Character>;
			public static filter(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Double>;
			public static sortedBy(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static indexOfLast(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): number;
			public static indexOf(param0: number[], param1: number): number;
			public static groupByTo(param0: number[], param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>, param3: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static slice(param0: number[], param1: java.lang.Iterable<java.lang.Integer>): java.util.List<java.lang.Short>;
			public static subtract(param0: number[], param1: java.lang.Iterable<java.lang.Short>): java.util.Set<java.lang.Short>;
			public static dropLastWhile(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Boolean>;
			public static filterNot(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Long>;
			public static indexOfLast(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static foldRight(param0: boolean[], param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static associateBy(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static map(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static maxOrNull(param0: number[]): java.lang.Byte;
			public static maxByOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Byte;
			public static groupBy(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static lastOrNull(param0: boolean[]): java.lang.Boolean;
			public static averageOfShort(param0: java.lang.Short[]): number;
			public static getOrNull(param0: number[], param1: number): java.lang.Short;
			public static sortDescending(param0: string[], param1: number, param2: number): void;
			public static sorted(param0: string[]): java.util.List<java.lang.Character>;
			/** @deprecated */
			public static minBy(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Double;
			public static sumOfShort(param0: java.lang.Short[]): number;
			public static filterTo(param0: any[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static dropLastWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Long>;
			public static flatMapSequenceTo(param0: any[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			/** @deprecated */
			public static minBy(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Long;
			public static asSequence(param0: string[]): kotlin.sequences.Sequence<java.lang.Character>;
			public static firstOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Integer;
			public static minWithOrNull(param0: number[], param1: java.util.Comparator<any>): java.lang.Double;
			public static toList(param0: number[]): java.util.List<java.lang.Long>;
			public static sortedWith(param0: number[], param1: java.util.Comparator<any>): java.util.List<java.lang.Short>;
			public static union(param0: number[], param1: java.lang.Iterable<java.lang.Short>): java.util.Set<java.lang.Short>;
			public static zip(param0: boolean[], param1: java.lang.Iterable<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static toMutableSet(param0: any[]): java.util.Set<any>;
			public static toFloatArray(param0: java.lang.Float[]): number[];
			public static zip(param0: number[], param1: java.lang.Iterable<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static slice(param0: boolean[], param1: java.lang.Iterable<java.lang.Integer>): java.util.List<java.lang.Boolean>;
			public static foldRight(param0: any[], param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static groupBy(param0: string[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static takeLastWhile(param0: string[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Character>;
			public static firstOrNull(param0: number[]): java.lang.Byte;
			public static fold(param0: boolean[], param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static reduceRightOrNull(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Short>): java.lang.Short;
			public static reversedArray(param0: any[]): any[];
			public static dropLastWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Byte>;
			public static shuffle(param0: any[], param1: kotlin.random.Random): void;
			public static sortedDescending(param0: number[]): java.util.List<java.lang.Float>;
			public static takeLastWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Float>;
			public static shuffle(param0: number[]): void;
			public static mapIndexedTo(param0: boolean[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static reverse(param0: number[], param1: number, param2: number): void;
			public static reduceIndexedOrNull(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Double>): java.lang.Double;
			public static filterNotTo(param0: any[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			/** @deprecated */
			public static min(param0: number[]): java.lang.Double;
			public static toMutableSet(param0: boolean[]): java.util.Set<java.lang.Boolean>;
			public static reduce(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Float>): number;
			public static lastOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Long;
			public static takeLastWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Integer>;
			public static intersect(param0: any[], param1: java.lang.Iterable<any>): java.util.Set<any>;
			public static forEach(param0: string[], param1: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
			public static take(param0: number[], param1: number): java.util.List<java.lang.Double>;
			public static single(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			/** @deprecated */
			public static min(param0: java.lang.Comparable<any>[]): java.lang.Comparable<any>;
			public static runningReduceIndexed(param0: any[], param1: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.List<any>;
			public static toSet(param0: number[]): java.util.Set<java.lang.Integer>;
			public static sumOfByte(param0: java.lang.Byte[]): number;
			public static slice(param0: string[], param1: java.lang.Iterable<java.lang.Integer>): java.util.List<java.lang.Character>;
			public static takeLast(param0: boolean[], param1: number): java.util.List<java.lang.Boolean>;
			public static all(param0: string[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static dropLastWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Float>;
			public static filterIndexed(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): java.util.List<java.lang.Long>;
			public static dropLastWhile(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static sortedByDescending(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static flatMapTo(param0: any[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static partition(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): kotlin.Pair<java.util.List<java.lang.Boolean>,java.util.List<java.lang.Boolean>>;
			public static minWithOrNull(param0: boolean[], param1: java.util.Comparator<any>): java.lang.Boolean;
			public static minByOrNull(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static zip(param0: any[], param1: java.lang.Iterable<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static reduceRightIndexedOrNull(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Integer>): java.lang.Integer;
			public static slice(param0: boolean[], param1: kotlin.ranges.IntRange): java.util.List<java.lang.Boolean>;
			public static firstOrNull(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static toMutableList(param0: number[]): java.util.List<java.lang.Double>;
			public static firstOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Float;
			/** @deprecated */
			public static maxBy(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Boolean;
			public static partition(param0: string[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): kotlin.Pair<java.util.List<java.lang.Character>,java.util.List<java.lang.Character>>;
			public static flatMapTo(param0: number[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			/** @deprecated */
			public static min(param0: number[]): java.lang.Short;
			public static sortedArray(param0: java.lang.Comparable<any>[]): java.lang.Comparable<any>[];
			public static foldIndexed(param0: number[], param1: any, param2: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static partition(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): kotlin.Pair<java.util.List<java.lang.Long>,java.util.List<java.lang.Long>>;
			public static shuffle(param0: string[], param1: kotlin.random.Random): void;
			public static maxOrNull(param0: number[]): java.lang.Short;
			public static minWithOrNull(param0: number[], param1: java.util.Comparator<any>): java.lang.Float;
			/** @deprecated */
			public static sumBy(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): number;
			public static reduceIndexedOrNull(param0: any[], param1: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static zip(param0: boolean[], param1: any[], param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static zip(param0: number[], param1: number[]): java.util.List<kotlin.Pair<java.lang.Float,java.lang.Float>>;
			public static minByOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Long;
			public static withIndex(param0: number[]): java.lang.Iterable<kotlin.collections.IndexedValue<java.lang.Float>>;
			public static filterNot(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Integer>;
			public static foldIndexed(param0: string[], param1: any, param2: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static zip(param0: string[], param1: java.lang.Iterable<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			/** @deprecated */
			public static minWith(param0: string[], param1: java.util.Comparator<any>): java.lang.Character;
			public static sortedWith(param0: number[], param1: java.util.Comparator<any>): java.util.List<java.lang.Double>;
			public static intersect(param0: number[], param1: java.lang.Iterable<java.lang.Integer>): java.util.Set<java.lang.Integer>;
			public static foldRight(param0: number[], param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static minWithOrNull(param0: number[], param1: java.util.Comparator<any>): java.lang.Long;
			public static reduceIndexed(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Long>): number;
			public static toList(param0: any[]): java.util.List<any>;
			public static reversed(param0: number[]): java.util.List<java.lang.Long>;
			public static sortedByDescending(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static filterIndexed(param0: string[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): java.util.List<java.lang.Character>;
			public static toSet(param0: number[]): java.util.Set<java.lang.Float>;
			public static slice(param0: number[], param1: java.lang.Iterable<java.lang.Integer>): java.util.List<java.lang.Integer>;
			public static filter(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static filterNot(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Byte>;
			/** @deprecated */
			public static minBy(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static last(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static count(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): number;
			public static asIterable(param0: number[]): java.lang.Iterable<java.lang.Double>;
			public static minByOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Float;
			public static filterIndexedTo(param0: boolean[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static mapNotNullTo(param0: any[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static partition(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): kotlin.Pair<java.util.List<java.lang.Float>,java.util.List<java.lang.Float>>;
			public static takeWhile(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static reversed(param0: number[]): java.util.List<java.lang.Short>;
			/** @deprecated */
			public static minBy(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Short;
			public static reduceRightOrNull(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Float>): java.lang.Float;
			public static filterIndexedTo(param0: string[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static maxByOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Integer;
			public static runningReduce(param0: any[], param1: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static reduceIndexedOrNull(param0: string[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Character>): java.lang.Character;
			public static toMutableSet(param0: string[]): java.util.Set<java.lang.Character>;
			public static any(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static minByOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Double;
			public static toLongArray(param0: java.lang.Long[]): number[];
			public static sortDescending(param0: string[]): void;
			public static count(param0: string[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			/** @deprecated */
			public static min(param0: number[]): java.lang.Byte;
			public static reduceRight(param0: any[], param1: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static singleOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Byte;
			public static associateByTo(param0: number[], param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			/** @deprecated */
			public static maxWith(param0: boolean[], param1: java.util.Comparator<any>): java.lang.Boolean;
			public static getOrNull(param0: number[], param1: number): java.lang.Byte;
			public static dropLastWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Short>;
			public static maxWithOrNull(param0: boolean[], param1: java.util.Comparator<any>): java.lang.Boolean;
			public static getOrNull(param0: string[], param1: number): java.lang.Character;
			public static averageOfLong(param0: java.lang.Long[]): number;
			public static first(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static reduceIndexed(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Double>): number;
			public static none(param0: string[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static firstOrNull(param0: boolean[]): java.lang.Boolean;
			public static toShortArray(param0: java.lang.Short[]): number[];
			public static sortedDescending(param0: number[]): java.util.List<java.lang.Long>;
			public static minWithOrNull(param0: any[], param1: java.util.Comparator<any>): any;
			public static sortedWith(param0: number[], param1: java.util.Comparator<any>): java.util.List<java.lang.Long>;
			public static flatMap(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static partition(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): kotlin.Pair<java.util.List<java.lang.Integer>,java.util.List<java.lang.Integer>>;
			public static toMutableList(param0: number[]): java.util.List<java.lang.Integer>;
			public static distinct(param0: number[]): java.util.List<java.lang.Integer>;
			public static slice(param0: number[], param1: kotlin.ranges.IntRange): java.util.List<java.lang.Long>;
			public static slice(param0: number[], param1: kotlin.ranges.IntRange): java.util.List<java.lang.Byte>;
			public static getOrNull(param0: boolean[], param1: number): java.lang.Boolean;
			public static singleOrNull(param0: string[]): java.lang.Character;
			public static sortedDescending(param0: number[]): java.util.List<java.lang.Byte>;
			public static toMutableList(param0: boolean[]): java.util.List<java.lang.Boolean>;
			public static zip(param0: number[], param1: number[]): java.util.List<kotlin.Pair<java.lang.Byte,java.lang.Byte>>;
			public static firstOrNull(param0: number[]): java.lang.Integer;
			public static filterIndexed(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): java.util.List<java.lang.Float>;
			public static last(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static randomOrNull(param0: string[], param1: kotlin.random.Random): java.lang.Character;
			public static indexOf(param0: boolean[], param1: boolean): number;
			public static joinTo(param0: number[], param1: java.lang.Appendable, param2: string, param3: string, param4: string, param5: number, param6: string, param7: kotlin.jvm.functions.Function1<any,any>): java.lang.Appendable;
			public static toSet(param0: boolean[]): java.util.Set<java.lang.Boolean>;
			public static last(param0: string[]): string;
			public static dropLast(param0: number[], param1: number): java.util.List<java.lang.Short>;
			public static reduceOrNull(param0: any[], param1: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static sortedByDescending(param0: string[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static reverse(param0: string[], param1: number, param2: number): void;
			public static zip(param0: number[], param1: any[]): java.util.List<any>;
			/** @deprecated */
			public static maxWith(param0: number[], param1: java.util.Comparator<any>): java.lang.Byte;
			public static reduceIndexedOrNull(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Short>): java.lang.Short;
			public static distinct(param0: string[]): java.util.List<java.lang.Character>;
			public static reversedArray(param0: number[]): number[];
			public static toMutableList(param0: number[]): java.util.List<java.lang.Long>;
			public static reduceRight(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Byte>): number;
			public static sortedDescending(param0: number[]): java.util.List<java.lang.Short>;
			public static takeLastWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Double>;
			public static groupBy(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static dropWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Short>;
			public static toHashSet(param0: number[]): java.util.HashSet<java.lang.Integer>;
			public static dropWhile(param0: string[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Character>;
			public static toMutableList(param0: number[]): java.util.List<java.lang.Byte>;
			public static mapNotNull(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static forEachIndexed(param0: boolean[], param1: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
			public static getLastIndex(param0: any[]): number;
			public static foldRightIndexed(param0: boolean[], param1: any, param2: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static first(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): any;
			/** @deprecated */
			public static max(param0: string[]): java.lang.Character;
			public static take(param0: any[], param1: number): java.util.List<any>;
			public static subtract(param0: number[], param1: java.lang.Iterable<java.lang.Byte>): java.util.Set<java.lang.Byte>;
			public static sliceArray(param0: number[], param1: kotlin.ranges.IntRange): number[];
			public static reduceRightOrNull(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Byte>): java.lang.Byte;
			/** @deprecated */
			public static min(param0: java.lang.Float[]): java.lang.Float;
			public static shuffle(param0: string[]): void;
			public static takeWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Integer>;
			public static groupByTo(param0: any[], param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static mapIndexed(param0: any[], param1: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static takeLastWhile(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Boolean>;
			public static associateTo(param0: any[], param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static singleOrNull(param0: any[]): any;
			public static reduceOrNull(param0: boolean[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): java.lang.Boolean;
			public static firstOrNull(param0: string[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Character;
			public static lastOrNull(param0: number[]): java.lang.Float;
			public static single(param0: string[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static filterIndexed(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): java.util.List<java.lang.Integer>;
			public static groupBy(param0: string[], param1: kotlin.jvm.functions.Function1<any,any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static reduceRightOrNull(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Integer>): java.lang.Integer;
			public static filterNotTo(param0: number[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static sliceArray(param0: string[], param1: java.util.Collection<java.lang.Integer>): string[];
			public static associateBy(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static filterIndexedTo(param0: number[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			/** @deprecated */
			public static min(param0: number[]): java.lang.Float;
			public static distinct(param0: number[]): java.util.List<java.lang.Long>;
			/** @deprecated */
			public static sumByDouble(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): number;
			public static none(param0: string[]): boolean;
			public static associateTo(param0: string[], param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static lastIndexOf(param0: boolean[], param1: boolean): number;
			public static reversed(param0: number[]): java.util.List<java.lang.Byte>;
			public static indexOfLast(param0: string[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static singleOrNull(param0: number[]): java.lang.Long;
			public static takeWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Double>;
			public static sumOfDouble(param0: java.lang.Double[]): number;
			public static fold(param0: any[], param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static maxByOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Double;
			public static sorted(param0: number[]): java.util.List<java.lang.Float>;
			/** @deprecated */
			public static sumBy(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,java.lang.Integer>): number;
			public static firstOrNull(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Boolean;
			public static drop(param0: string[], param1: number): java.util.List<java.lang.Character>;
			public static reverse(param0: any[]): void;
			public static reversedArray(param0: boolean[]): boolean[];
			public static sortDescending(param0: number[]): void;
			public static map(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static reduceRightIndexed(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Float>): number;
			public static groupBy(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static intersect(param0: number[], param1: java.lang.Iterable<java.lang.Long>): java.util.Set<java.lang.Long>;
			/** @deprecated */
			public static maxWith(param0: number[], param1: java.util.Comparator<any>): java.lang.Long;
			public static takeLast(param0: number[], param1: number): java.util.List<java.lang.Long>;
			public static reversed(param0: boolean[]): java.util.List<java.lang.Boolean>;
			public static reversed(param0: number[]): java.util.List<java.lang.Integer>;
			public static asSequence(param0: number[]): kotlin.sequences.Sequence<java.lang.Integer>;
			public static any(param0: boolean[]): boolean;
			public static singleOrNull(param0: string[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Character;
			/** @deprecated */
			public static minWith(param0: number[], param1: java.util.Comparator<any>): java.lang.Float;
			public static takeLast(param0: number[], param1: number): java.util.List<java.lang.Float>;
			public static reduceOrNull(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Float>): java.lang.Float;
			public static reduceIndexedOrNull(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Float>): java.lang.Float;
			public static joinToString(param0: any[], param1: string, param2: string, param3: string, param4: number, param5: string, param6: kotlin.jvm.functions.Function1<any,any>): string;
			public static withIndex(param0: number[]): java.lang.Iterable<kotlin.collections.IndexedValue<java.lang.Byte>>;
			public static singleOrNull(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Boolean;
			public static randomOrNull(param0: any[], param1: kotlin.random.Random): any;
			public static distinct(param0: number[]): java.util.List<java.lang.Float>;
			public static partition(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): kotlin.Pair<java.util.List<java.lang.Short>,java.util.List<java.lang.Short>>;
			public static reduceRight(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Double>): number;
			public static subtract(param0: number[], param1: java.lang.Iterable<java.lang.Long>): java.util.Set<java.lang.Long>;
			public static reduceIndexedOrNull(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Integer>): java.lang.Integer;
			public static filter(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Byte>;
			public static associateBy(param0: string[], param1: kotlin.jvm.functions.Function1<any,any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static randomOrNull(param0: boolean[], param1: kotlin.random.Random): java.lang.Boolean;
			public static reduceRightIndexedOrNull(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Float>): java.lang.Float;
			public static any(param0: string[]): boolean;
			public static getLastIndex(param0: boolean[]): number;
			public static getOrNull(param0: number[], param1: number): java.lang.Double;
			public static filter(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Long>;
			public static sliceArray(param0: boolean[], param1: java.util.Collection<java.lang.Integer>): boolean[];
			/** @deprecated */
			public static max(param0: number[]): java.lang.Integer;
			public static mapIndexedTo(param0: string[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static all(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static drop(param0: number[], param1: number): java.util.List<java.lang.Long>;
			public static reduce(param0: boolean[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): boolean;
			public static single(param0: string[]): string;
			public static lastOrNull(param0: string[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Character;
			public static dropWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Long>;
			public static joinTo(param0: any[], param1: java.lang.Appendable, param2: string, param3: string, param4: string, param5: number, param6: string, param7: kotlin.jvm.functions.Function1<any,any>): java.lang.Appendable;
			public static filter(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Integer>;
			public static asIterable(param0: number[]): java.lang.Iterable<java.lang.Integer>;
			public constructor();
			/** @deprecated */
			public static maxWith(param0: number[], param1: java.util.Comparator<any>): java.lang.Double;
			public static flatMap(param0: string[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static getOrNull(param0: any[], param1: number): any;
			public static forEach(param0: number[], param1: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
			public static forEach(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): void;
			public static slice(param0: number[], param1: java.lang.Iterable<java.lang.Integer>): java.util.List<java.lang.Float>;
			public static withIndex(param0: boolean[]): java.lang.Iterable<kotlin.collections.IndexedValue<java.lang.Boolean>>;
			public static reduceRight(param0: string[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Character>): string;
			public static sliceArray(param0: any[], param1: java.util.Collection<any>): any[];
			public static dropWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Byte>;
			public static toMutableSet(param0: number[]): java.util.Set<java.lang.Long>;
			public static toByteArray(param0: java.lang.Byte[]): number[];
			/** @deprecated */
			public static minWith(param0: number[], param1: java.util.Comparator<any>): java.lang.Short;
			public static shuffle(param0: boolean[], param1: kotlin.random.Random): void;
			public static reduce(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Short>): number;
			public static averageOfFloat(param0: java.lang.Float[]): number;
			public static reduceRightIndexed(param0: boolean[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Boolean>): boolean;
			public static maxByOrNull(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static associate(param0: string[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static sortedWith(param0: any[], param1: java.util.Comparator<any>): java.util.List<any>;
			public static singleOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Long;
			public static toCollection(param0: number[], param1: java.util.Collection<any>): java.util.Collection<any>;
			public static lastOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Byte;
			/** @deprecated */
			public static minBy(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Integer;
			public static reduce(param0: any[], param1: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static union(param0: number[], param1: java.lang.Iterable<java.lang.Integer>): java.util.Set<java.lang.Integer>;
			public static single(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static dropWhile(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Integer>;
			public static toSet(param0: any[]): java.util.Set<any>;
			public static filterIndexed(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): java.util.List<java.lang.Byte>;
			public static averageOfByte(param0: java.lang.Byte[]): number;
			public static subtract(param0: any[], param1: java.lang.Iterable<any>): java.util.Set<any>;
			public static singleOrNull(param0: boolean[]): java.lang.Boolean;
			public static distinct(param0: boolean[]): java.util.List<java.lang.Boolean>;
			public static minOrNull(param0: number[]): java.lang.Float;
			public static distinct(param0: any[]): java.util.List<any>;
			public static lastOrNull(param0: number[]): java.lang.Short;
			public static toHashSet(param0: number[]): java.util.HashSet<java.lang.Float>;
			public static slice(param0: number[], param1: kotlin.ranges.IntRange): java.util.List<java.lang.Float>;
			public static maxOrNull(param0: java.lang.Double[]): java.lang.Double;
			public static lastOrNull(param0: number[]): java.lang.Long;
			public static firstOrNull(param0: number[]): java.lang.Long;
			public static sum(param0: number[]): number;
			/** @deprecated */
			public static max(param0: number[]): java.lang.Short;
			public static indexOfFirst(param0: string[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static toMutableSet(param0: number[]): java.util.Set<java.lang.Integer>;
			public static sortedWith(param0: number[], param1: java.util.Comparator<any>): java.util.List<java.lang.Integer>;
			public static last(param0: boolean[]): boolean;
			public static intersect(param0: number[], param1: java.lang.Iterable<java.lang.Float>): java.util.Set<java.lang.Float>;
			public static randomOrNull(param0: number[], param1: kotlin.random.Random): java.lang.Float;
			public static minOrNull(param0: number[]): java.lang.Short;
			public static maxByOrNull(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Boolean;
			public static maxByOrNull(param0: string[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Character;
			public static associateByTo(param0: any[], param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static getLastIndex(param0: string[]): number;
			public static shuffle(param0: any[]): void;
			/** @deprecated */
			public static max(param0: number[]): java.lang.Float;
			public static joinToString(param0: number[], param1: string, param2: string, param3: string, param4: number, param5: string, param6: kotlin.jvm.functions.Function1<any,any>): string;
			public static singleOrNull(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Integer;
			public static flatMap(param0: number[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static distinct(param0: number[]): java.util.List<java.lang.Byte>;
			public static maxWithOrNull(param0: number[], param1: java.util.Comparator<any>): java.lang.Short;
			public static lastOrNull(param0: string[]): java.lang.Character;
			public static filter(param0: number[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Short>;
			/** @deprecated */
			public static minBy(param0: string[], param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Character;
			public static firstOrNull(param0: any[]): any;
			public static reduceRightIndexedOrNull(param0: number[], param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Short>): java.lang.Short;
			public static sortedByDescending(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static dropLastWhile(param0: string[], param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.util.List<java.lang.Character>;
			public static asSequence(param0: boolean[]): kotlin.sequences.Sequence<java.lang.Boolean>;
			public static associateBy(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static sortBy(param0: any[], param1: kotlin.jvm.functions.Function1<any,any>): void;
			public static maxOrNull(param0: java.lang.Comparable<any>[]): java.lang.Comparable<any>;
			public static subtract(param0: string[], param1: java.lang.Iterable<java.lang.Character>): java.util.Set<java.lang.Character>;
			public static zip(param0: boolean[], param1: any[]): java.util.List<any>;
			/** @deprecated */
			public static max(param0: java.lang.Comparable<any>[]): java.lang.Comparable<any>;
			public static reverse(param0: number[]): void;
			public static groupByTo(param0: any[], param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>, param3: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static randomOrNull(param0: number[], param1: kotlin.random.Random): java.lang.Short;
			public static filterIndexed(param0: boolean[], param1: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): java.util.List<java.lang.Boolean>;
			public static drop(param0: boolean[], param1: number): java.util.List<java.lang.Boolean>;
			/** @deprecated */
			public static sumByDouble(param0: boolean[], param1: kotlin.jvm.functions.Function1<any,java.lang.Double>): number;
			public static mapIndexedNotNullTo(param0: any[], param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static forEachIndexed(param0: number[], param1: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
			public static maxWithOrNull(param0: number[], param1: java.util.Comparator<any>): java.lang.Float;
			public static toList(param0: number[]): java.util.List<java.lang.Byte>;
			public static associateByTo(param0: any[], param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>, param3: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static union(param0: number[], param1: java.lang.Iterable<java.lang.Double>): java.util.Set<java.lang.Double>;
			public static zip(param0: string[], param1: any[]): java.util.List<any>;
			public static asIterable(param0: string[]): java.lang.Iterable<java.lang.Character>;
			public static drop(param0: number[], param1: number): java.util.List<java.lang.Short>;
			public static scanIndexed(param0: any[], param1: any, param2: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.List<any>;
			public static minOrNull(param0: java.lang.Comparable<any>[]): java.lang.Comparable<any>;
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
		export class CollectionsKt extends kotlin.collections.CollectionsKt___CollectionsKt {
			public static class: java.lang.Class<kotlin.collections.CollectionsKt>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt__CollectionsJVMKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.CollectionsKt__CollectionsJVMKt>;
			public static build(param0: java.util.List<any>): java.util.List<any>;
			public static createListBuilder(param0: number): java.util.List<any>;
			public static createListBuilder(): java.util.List<any>;
			public static shuffled(param0: java.lang.Iterable<any>): java.util.List<any>;
			public static copyToArrayOfAny(param0: any[], param1: boolean): any[];
			public static listOf(param0: any): java.util.List<any>;
			public constructor();
			public static shuffled(param0: java.lang.Iterable<any>, param1: java.util.Random): java.util.List<any>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt__CollectionsKt extends kotlin.collections.CollectionsKt__CollectionsJVMKt {
			public static class: java.lang.Class<kotlin.collections.CollectionsKt__CollectionsKt>;
			public static asCollection(param0: any[]): java.util.Collection<any>;
			public static mutableListOf(param0: any[]): java.util.List<any>;
			public static getIndices(param0: java.util.Collection<any>): kotlin.ranges.IntRange;
			public static binarySearch(param0: java.util.List<any>, param1: number, param2: number, param3: kotlin.jvm.functions.Function1<any,any>): number;
			public static emptyList(): java.util.List<any>;
			public static shuffled(param0: java.lang.Iterable<any>): java.util.List<any>;
			public constructor();
			public static shuffled(param0: java.lang.Iterable<any>, param1: java.util.Random): java.util.List<any>;
			public static throwIndexOverflow(): void;
			public static listOfNotNull(param0: any[]): java.util.List<any>;
			public static binarySearch(param0: java.util.List<any>, param1: any, param2: java.util.Comparator<any>, param3: number, param4: number): number;
			public static binarySearchBy(param0: java.util.List<any>, param1: java.lang.Comparable<any>, param2: number, param3: number, param4: kotlin.jvm.functions.Function1<any,any>): number;
			public static shuffled(param0: java.lang.Iterable<any>, param1: kotlin.random.Random): java.util.List<any>;
			public static arrayListOf(param0: any[]): java.util.ArrayList<any>;
			public static optimizeReadOnlyList(param0: java.util.List<any>): java.util.List<any>;
			public static listOfNotNull(param0: any): java.util.List<any>;
			public static listOf(param0: any): java.util.List<any>;
			public static listOf(param0: any[]): java.util.List<any>;
			public static binarySearch(param0: java.util.List<any>, param1: java.lang.Comparable<any>, param2: number, param3: number): number;
			public static throwCountOverflow(): void;
			public static getLastIndex(param0: java.util.List<any>): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt__IterablesKt extends kotlin.collections.CollectionsKt__CollectionsKt {
			public static class: java.lang.Class<kotlin.collections.CollectionsKt__IterablesKt>;
			public static unzip(param0: java.lang.Iterable<any>): kotlin.Pair<any,any>;
			public static collectionSizeOrDefault(param0: java.lang.Iterable<any>, param1: number): number;
			public static convertToSetForSetOperation(param0: java.lang.Iterable<any>): java.util.Collection<any>;
			public static collectionSizeOrNull(param0: java.lang.Iterable<any>): java.lang.Integer;
			public constructor();
			public static convertToSetForSetOperationWith(param0: java.lang.Iterable<any>, param1: java.lang.Iterable<any>): java.util.Collection<any>;
			public static flatten(param0: java.lang.Iterable<any>): java.util.List<any>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt__IteratorsJVMKt extends kotlin.collections.CollectionsKt__IterablesKt {
			public static class: java.lang.Class<kotlin.collections.CollectionsKt__IteratorsJVMKt>;
			public static iterator(param0: java.util.Enumeration<any>): java.util.Iterator<any>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt__IteratorsKt extends kotlin.collections.CollectionsKt__IteratorsJVMKt {
			public static class: java.lang.Class<kotlin.collections.CollectionsKt__IteratorsKt>;
			public static withIndex(param0: java.util.Iterator<any>): java.util.Iterator<any>;
			public constructor();
			public static forEach(param0: java.util.Iterator<any>, param1: kotlin.jvm.functions.Function1<any,any>): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt__MutableCollectionsJVMKt extends kotlin.collections.CollectionsKt__IteratorsKt {
			public static class: java.lang.Class<kotlin.collections.CollectionsKt__MutableCollectionsJVMKt>;
			public static sort(param0: java.util.List<any>): void;
			public constructor();
			public static sortWith(param0: java.util.List<any>, param1: java.util.Comparator<any>): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt__MutableCollectionsKt extends kotlin.collections.CollectionsKt__MutableCollectionsJVMKt {
			public static class: java.lang.Class<kotlin.collections.CollectionsKt__MutableCollectionsKt>;
			public static retainAll(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static removeFirst(param0: java.util.List<any>): any;
			public static removeFirstOrNull(param0: java.util.List<any>): any;
			public static addAll(param0: java.util.Collection<any>, param1: java.lang.Iterable<any>): boolean;
			public static removeLastOrNull(param0: java.util.List<any>): any;
			public constructor();
			public static addAll(param0: java.util.Collection<any>, param1: any[]): boolean;
			public static retainAll(param0: java.util.Collection<any>, param1: any[]): boolean;
			public static addAll(param0: java.util.Collection<any>, param1: kotlin.sequences.Sequence<any>): boolean;
			public static retainAll(param0: java.util.List<any>, param1: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static removeAll(param0: java.util.Collection<any>, param1: any[]): boolean;
			public static retainAll(param0: java.util.Collection<any>, param1: kotlin.sequences.Sequence<any>): boolean;
			public static removeAll(param0: java.util.List<any>, param1: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static removeAll(param0: java.util.Collection<any>, param1: java.lang.Iterable<any>): boolean;
			public static removeLast(param0: java.util.List<any>): any;
			public static removeAll(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static removeAll(param0: java.util.Collection<any>, param1: kotlin.sequences.Sequence<any>): boolean;
			public static retainAll(param0: java.util.Collection<any>, param1: java.lang.Iterable<any>): boolean;
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt__ReversedViewsKt extends kotlin.collections.CollectionsKt__MutableCollectionsKt {
			public static class: java.lang.Class<kotlin.collections.CollectionsKt__ReversedViewsKt>;
			public constructor();
			public static asReversed(param0: java.util.List<any>): java.util.List<any>;
			public static asReversedMutable(param0: java.util.List<any>): java.util.List<any>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt___CollectionsJvmKt extends kotlin.collections.CollectionsKt__ReversedViewsKt {
			public static class: java.lang.Class<kotlin.collections.CollectionsKt___CollectionsJvmKt>;
			public static filterIsInstanceTo(param0: java.lang.Iterable<any>, param1: java.util.Collection<any>, param2: java.lang.Class<any>): java.util.Collection<any>;
			public static reverse(param0: java.util.List<any>): void;
			public static toSortedSet(param0: java.lang.Iterable<any>, param1: java.util.Comparator<any>): java.util.SortedSet<any>;
			public static toSortedSet(param0: java.lang.Iterable<any>): java.util.SortedSet<any>;
			public constructor();
			public static filterIsInstance(param0: java.lang.Iterable<any>, param1: java.lang.Class<any>): java.util.List<any>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt___CollectionsKt extends kotlin.collections.CollectionsKt___CollectionsJvmKt {
			public static class: java.lang.Class<kotlin.collections.CollectionsKt___CollectionsKt>;
			public static first(param0: java.util.List<any>): any;
			public static runningFold(param0: java.lang.Iterable<any>, param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static toLongArray(param0: java.util.Collection<java.lang.Long>): number[];
			public static plus(param0: java.lang.Iterable<any>, param1: kotlin.sequences.Sequence<any>): java.util.List<any>;
			/** @deprecated */
			public static min(param0: java.lang.Iterable<java.lang.Float>): java.lang.Float;
			public static toCharArray(param0: java.util.Collection<java.lang.Character>): string[];
			/** @deprecated */
			public static maxBy(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static fold(param0: java.lang.Iterable<any>, param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static windowed(param0: java.lang.Iterable<any>, param1: number, param2: number, param3: boolean): java.util.List<any>;
			public static averageOfFloat(param0: java.lang.Iterable<java.lang.Float>): number;
			public static mapIndexedNotNullTo(param0: java.lang.Iterable<any>, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static zip(param0: java.lang.Iterable<any>, param1: any[]): java.util.List<any>;
			public static reduce(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function2<any,any,any>): any;
			/** @deprecated */
			public static minBy(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static filterNotNull(param0: java.lang.Iterable<any>): java.util.List<any>;
			public static toByteArray(param0: java.util.Collection<java.lang.Byte>): number[];
			public static take(param0: java.lang.Iterable<any>, param1: number): java.util.List<any>;
			public static toBooleanArray(param0: java.util.Collection<java.lang.Boolean>): boolean[];
			public static forEachIndexed(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function2<any,any,any>): void;
			public static filter(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static minOrNull(param0: java.lang.Iterable<java.lang.Float>): java.lang.Float;
			public static takeWhile(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static lastOrNull(param0: java.util.List<any>, param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static takeLastWhile(param0: java.util.List<any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static associateBy(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static toList(param0: java.lang.Iterable<any>): java.util.List<any>;
			public static count(param0: java.lang.Iterable<any>): number;
			public static takeLast(param0: java.util.List<any>, param1: number): java.util.List<any>;
			public static lastIndexOf(param0: java.util.List<any>, param1: any): number;
			public static single(param0: java.lang.Iterable<any>): any;
			public static last(param0: java.util.List<any>, param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static plus(param0: java.util.Collection<any>, param1: any): java.util.List<any>;
			public static sortedByDescending(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static randomOrNull(param0: java.util.Collection<any>, param1: kotlin.random.Random): any;
			public static forEach(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): void;
			public static foldRight(param0: java.util.List<any>, param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): any;
			/** @deprecated */
			public static sumBy(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): number;
			public static zipWithNext(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static groupByTo(param0: java.lang.Iterable<any>, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static toDoubleArray(param0: java.util.Collection<java.lang.Double>): number[];
			public static asSequence(param0: java.lang.Iterable<any>): kotlin.sequences.Sequence<any>;
			public static plus(param0: java.lang.Iterable<any>, param1: any[]): java.util.List<any>;
			public static reduceRight(param0: java.util.List<any>, param1: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static sortedBy(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static scan(param0: java.lang.Iterable<any>, param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static requireNoNulls(param0: java.lang.Iterable<any>): java.lang.Iterable<any>;
			public static plus(param0: java.util.Collection<any>, param1: kotlin.sequences.Sequence<any>): java.util.List<any>;
			public static toCollection(param0: java.lang.Iterable<any>, param1: java.util.Collection<any>): java.util.Collection<any>;
			public static singleOrNull(param0: java.util.List<any>): any;
			public static none(param0: java.lang.Iterable<any>): boolean;
			public static associateWithTo(param0: java.lang.Iterable<any>, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static subtract(param0: java.lang.Iterable<any>, param1: java.lang.Iterable<any>): java.util.Set<any>;
			public static filterTo(param0: java.lang.Iterable<any>, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static last(param0: java.lang.Iterable<any>): any;
			public static indexOf(param0: java.util.List<any>, param1: any): number;
			public static groupByTo(param0: java.lang.Iterable<any>, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>, param3: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static toHashSet(param0: java.lang.Iterable<any>): java.util.HashSet<any>;
			public static reduceOrNull(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static joinToString(param0: java.lang.Iterable<any>, param1: string, param2: string, param3: string, param4: number, param5: string, param6: kotlin.jvm.functions.Function1<any,any>): string;
			public static maxByOrNull(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static flatMap(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static minus(param0: java.lang.Iterable<any>, param1: java.lang.Iterable<any>): java.util.List<any>;
			public static sumOfShort(param0: java.lang.Iterable<java.lang.Short>): number;
			public static mapNotNull(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static foldIndexed(param0: java.lang.Iterable<any>, param1: any, param2: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static zip(param0: java.lang.Iterable<any>, param1: any[], param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static contains(param0: java.lang.Iterable<any>, param1: any): boolean;
			public static averageOfLong(param0: java.lang.Iterable<java.lang.Long>): number;
			public static lastIndexOf(param0: java.lang.Iterable<any>, param1: any): number;
			public static associateTo(param0: java.lang.Iterable<any>, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static sortBy(param0: java.util.List<any>, param1: kotlin.jvm.functions.Function1<any,any>): void;
			public static minWithOrNull(param0: java.lang.Iterable<any>, param1: java.util.Comparator<any>): any;
			public static runningReduce(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static indexOfLast(param0: java.util.List<any>, param1: kotlin.jvm.functions.Function1<any,any>): number;
			public static maxOrNull(param0: java.lang.Iterable<java.lang.Float>): java.lang.Float;
			public static plus(param0: java.lang.Iterable<any>, param1: any): java.util.List<any>;
			public static minOrNull(param0: java.lang.Iterable<java.lang.Double>): java.lang.Double;
			public static onEach(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Iterable<any>;
			public static union(param0: java.lang.Iterable<any>, param1: java.lang.Iterable<any>): java.util.Set<any>;
			public static reduceIndexed(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static elementAtOrNull(param0: java.lang.Iterable<any>, param1: number): any;
			public static groupBy(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static sumOfLong(param0: java.lang.Iterable<java.lang.Long>): number;
			public static maxOrNull(param0: java.lang.Iterable<any>): java.lang.Comparable<any>;
			public static sortedDescending(param0: java.lang.Iterable<any>): java.util.List<any>;
			public static plus(param0: java.util.Collection<any>, param1: java.lang.Iterable<any>): java.util.List<any>;
			public static partition(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): kotlin.Pair<any,any>;
			public static lastOrNull(param0: java.util.List<any>): any;
			/** @deprecated */
			public static min(param0: java.lang.Iterable<any>): java.lang.Comparable<any>;
			public static onEachIndexed(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function2<any,any,any>): java.lang.Iterable<any>;
			public static firstOrNull(param0: java.util.List<any>): any;
			public static filterNotNullTo(param0: java.lang.Iterable<any>, param1: java.util.Collection<any>): java.util.Collection<any>;
			public static averageOfShort(param0: java.lang.Iterable<java.lang.Short>): number;
			/** @deprecated */
			public static max(param0: java.lang.Iterable<any>): java.lang.Comparable<any>;
			/** @deprecated */
			public static max(param0: java.lang.Iterable<java.lang.Float>): java.lang.Float;
			public static sumOfFloat(param0: java.lang.Iterable<java.lang.Float>): number;
			public static flatMapSequence(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static filterNotTo(param0: java.lang.Iterable<any>, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static associateWith(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static zip(param0: java.lang.Iterable<any>, param1: java.lang.Iterable<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static lastOrNull(param0: java.lang.Iterable<any>): any;
			public static firstOrNull(param0: java.lang.Iterable<any>): any;
			public static forEach(param0: java.util.Iterator<any>, param1: kotlin.jvm.functions.Function1<any,any>): void;
			/** @deprecated */
			public static sumByDouble(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): number;
			public static dropLast(param0: java.util.List<any>, param1: number): java.util.List<any>;
			public static runningFoldIndexed(param0: java.lang.Iterable<any>, param1: any, param2: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.List<any>;
			public static flatMapSequenceTo(param0: java.lang.Iterable<any>, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static associateByTo(param0: java.lang.Iterable<any>, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static chunked(param0: java.lang.Iterable<any>, param1: number, param2: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static mapNotNullTo(param0: java.lang.Iterable<any>, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static shuffle(param0: java.util.List<any>, param1: kotlin.random.Random): void;
			public static sorted(param0: java.lang.Iterable<any>): java.util.List<any>;
			public static associateByTo(param0: java.lang.Iterable<any>, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>, param3: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static windowed(param0: java.lang.Iterable<any>, param1: number, param2: number, param3: boolean, param4: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static indexOf(param0: java.lang.Iterable<any>, param1: any): number;
			public static toMutableList(param0: java.util.Collection<any>): java.util.List<any>;
			public static drop(param0: java.lang.Iterable<any>, param1: number): java.util.List<any>;
			public static withIndex(param0: java.util.Iterator<any>): java.util.Iterator<any>;
			public static flatMapTo(param0: java.lang.Iterable<any>, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static none(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static slice(param0: java.util.List<any>, param1: kotlin.ranges.IntRange): java.util.List<any>;
			public static requireNoNulls(param0: java.util.List<any>): java.util.List<any>;
			public static toMutableSet(param0: java.lang.Iterable<any>): java.util.Set<any>;
			public static reduceRightIndexed(param0: java.util.List<any>, param1: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static intersect(param0: java.lang.Iterable<any>, param1: java.lang.Iterable<any>): java.util.Set<any>;
			public static mapIndexed(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static associateBy(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public constructor();
			public static plus(param0: java.lang.Iterable<any>, param1: java.lang.Iterable<any>): java.util.List<any>;
			public static zipWithNext(param0: java.lang.Iterable<any>): java.util.List<any>;
			public static first(param0: java.lang.Iterable<any>): any;
			public static slice(param0: java.util.List<any>, param1: java.lang.Iterable<any>): java.util.List<any>;
			public static any(param0: java.lang.Iterable<any>): boolean;
			/** @deprecated */
			public static min(param0: java.lang.Iterable<java.lang.Double>): java.lang.Double;
			/** @deprecated */
			public static minWith(param0: java.lang.Iterable<any>, param1: java.util.Comparator<any>): any;
			public static elementAtOrElse(param0: java.lang.Iterable<any>, param1: number, param2: kotlin.jvm.functions.Function1<any,any>): any;
			public static foldRightIndexed(param0: java.util.List<any>, param1: any, param2: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static indexOfLast(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): number;
			public static all(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static sortByDescending(param0: java.util.List<any>, param1: kotlin.jvm.functions.Function1<any,any>): void;
			public static plus(param0: java.util.Collection<any>, param1: any[]): java.util.List<any>;
			public static single(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static zip(param0: java.lang.Iterable<any>, param1: java.lang.Iterable<any>): java.util.List<any>;
			public static filterNot(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static getOrNull(param0: java.util.List<any>, param1: number): any;
			public static any(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static elementAt(param0: java.lang.Iterable<any>, param1: number): any;
			public static distinct(param0: java.lang.Iterable<any>): java.util.List<any>;
			public static filterIndexed(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			/** @deprecated */
			public static maxWith(param0: java.lang.Iterable<any>, param1: java.util.Comparator<any>): any;
			public static toIntArray(param0: java.util.Collection<java.lang.Integer>): number[];
			public static minus(param0: java.lang.Iterable<any>, param1: kotlin.sequences.Sequence<any>): java.util.List<any>;
			public static mapIndexedNotNull(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static random(param0: java.util.Collection<any>, param1: kotlin.random.Random): any;
			public static averageOfDouble(param0: java.lang.Iterable<java.lang.Double>): number;
			public static minus(param0: java.lang.Iterable<any>, param1: any[]): java.util.List<any>;
			public static minByOrNull(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static dropLastWhile(param0: java.util.List<any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			/** @deprecated */
			public static max(param0: java.lang.Iterable<java.lang.Double>): java.lang.Double;
			public static maxOrNull(param0: java.lang.Iterable<java.lang.Double>): java.lang.Double;
			public static toSet(param0: java.lang.Iterable<any>): java.util.Set<any>;
			public static reversed(param0: java.lang.Iterable<any>): java.util.List<any>;
			public static sortedWith(param0: java.lang.Iterable<any>, param1: java.util.Comparator<any>): java.util.List<any>;
			public static dropWhile(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static indexOfFirst(param0: java.util.List<any>, param1: kotlin.jvm.functions.Function1<any,any>): number;
			public static groupBy(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static toShortArray(param0: java.util.Collection<java.lang.Short>): number[];
			public static singleOrNull(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static sortDescending(param0: java.util.List<any>): void;
			public static mapTo(param0: java.lang.Iterable<any>, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static last(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static groupingBy(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): kotlin.collections.Grouping<any,any>;
			public static runningReduceIndexed(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.List<any>;
			public static averageOfInt(param0: java.lang.Iterable<java.lang.Integer>): number;
			public static minus(param0: java.lang.Iterable<any>, param1: any): java.util.List<any>;
			public static reduceIndexedOrNull(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static single(param0: java.util.List<any>): any;
			public static associate(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static toMutableList(param0: java.lang.Iterable<any>): java.util.List<any>;
			public static lastOrNull(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static withIndex(param0: java.lang.Iterable<any>): java.lang.Iterable<any>;
			public static sumOfByte(param0: java.lang.Iterable<java.lang.Byte>): number;
			public static joinTo(param0: java.lang.Iterable<any>, param1: java.lang.Appendable, param2: string, param3: string, param4: string, param5: number, param6: string, param7: kotlin.jvm.functions.Function1<any,any>): java.lang.Appendable;
			public static singleOrNull(param0: java.lang.Iterable<any>): any;
			public static toFloatArray(param0: java.util.Collection<java.lang.Float>): number[];
			public static sumOfDouble(param0: java.lang.Iterable<java.lang.Double>): number;
			public static indexOfFirst(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): number;
			public static first(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static filterIndexedTo(param0: java.lang.Iterable<any>, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static reduceRightOrNull(param0: java.util.List<any>, param1: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static minOrNull(param0: java.lang.Iterable<any>): java.lang.Comparable<any>;
			public static last(param0: java.util.List<any>): any;
			public static maxWithOrNull(param0: java.lang.Iterable<any>, param1: java.util.Comparator<any>): any;
			public static averageOfByte(param0: java.lang.Iterable<java.lang.Byte>): number;
			public static chunked(param0: java.lang.Iterable<any>, param1: number): java.util.List<any>;
			public static count(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): number;
			public static map(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static reduceRightIndexedOrNull(param0: java.util.List<any>, param1: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static sumOfInt(param0: java.lang.Iterable<java.lang.Integer>): number;
			public static mapIndexedTo(param0: java.lang.Iterable<any>, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static firstOrNull(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static distinctBy(param0: java.lang.Iterable<any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static scanIndexed(param0: java.lang.Iterable<any>, param1: any, param2: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.List<any>;
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
			public add(param0: java.lang.Void): void;
			public hasNext(): boolean;
			public nextIndex(): number;
			public remove(): void;
			public set(param0: java.lang.Void): void;
			public add(param0: any): void;
			public next(): java.lang.Void;
			public next(): any;
			public previous(): any;
			public previous(): java.lang.Void;
			public hasPrevious(): boolean;
			public previousIndex(): number;
			public set(param0: any): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export class EmptyList extends java.lang.Object implements java.util.List<any>, java.io.Serializable, java.util.RandomAccess, kotlin.jvm.internal.markers.KMappedMarker {
			public static class: java.lang.Class<kotlin.collections.EmptyList>;
			public static INSTANCE: kotlin.collections.EmptyList;
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public addAll(param0: java.util.Collection<any>): boolean;
			public get(param0: number): java.lang.Void;
			public add(param0: java.lang.Void): boolean;
			public clear(): void;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public listIterator(param0: number): java.util.ListIterator<any>;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public toArray(param0: any[]): any[];
			public contains(param0: java.lang.Void): boolean;
			public addAll(param0: java.util.Collection<any>): boolean;
			public set(param0: number, param1: any): any;
			public forEach(param0: any /* any*/): void;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public lastIndexOf(param0: any): number;
			public add(param0: number, param1: java.lang.Void): void;
			public listIterator(param0: number): java.util.ListIterator<any>;
			public add(param0: any): boolean;
			public lastIndexOf(param0: java.lang.Void): number;
			public spliterator(): java.util.Spliterator<any>;
			public iterator(): java.util.Iterator<any>;
			public equals(param0: any): boolean;
			public toArray(): any[];
			public subList(param0: number, param1: number): java.util.List<any>;
			public replaceAll(param0: any /* any*/): void;
			public stream(): java.util.stream.Stream<any>;
			public remove(param0: number): any;
			public listIterator(): java.util.ListIterator<any>;
			public getSize(): number;
			public remove(param0: number): java.lang.Void;
			public sort(param0: java.util.Comparator<any>): void;
			public contains(param0: any): boolean;
			public get(param0: number): any;
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public indexOf(param0: java.lang.Void): number;
			public add(param0: number, param1: any): void;
			public iterator(): java.util.Iterator<any>;
			public size(): number;
			public isEmpty(): boolean;
			public subList(param0: number, param1: number): java.util.List<any>;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public remove(param0: any): boolean;
			public toString(): string;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public set(param0: number, param1: java.lang.Void): java.lang.Void;
			public listIterator(): java.util.ListIterator<any>;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public indexOf(param0: any): number;
			public removeIf(param0: any /* any*/): boolean;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class EmptyMap extends java.lang.Object implements java.util.Map<any, any>, java.io.Serializable, kotlin.jvm.internal.markers.KMappedMarker {
			public static class: java.lang.Class<kotlin.collections.EmptyMap>;
			public static INSTANCE: kotlin.collections.EmptyMap;
			public replaceAll(param0: any /* any<any,any,any>*/): void;
			public equals(param0: any): boolean;
			public replace(param0: any, param1: any): any;
			public compute(param0: any, param1: any /* any<any,any,any>*/): any;
			public containsValue(param0: any): boolean;
			public getEntries(): java.util.Set<java.util.Map.Entry<any, any>>;
			public replace(param0: any, param1: any, param2: any): boolean;
			public get(param0: any): any;
			public put(param0: any, param1: java.lang.Void): java.lang.Void;
			public getSize(): number;
			public get(param0: any): java.lang.Void;
			public values(): java.util.Collection<any>;
			public forEach(param0: any /* any<any,any>*/): void;
			public getOrDefault(param0: any, param1: any): any;
			public putIfAbsent(param0: any, param1: any): any;
			public remove(param0: any): any;
			public putAll(param0: java.util.Map<any,any>): void;
			public values(): java.util.Collection<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public keySet(): java.util.Set<any>;
			public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
			public getValues(): java.util.Collection<any>;
			public computeIfPresent(param0: any, param1: any /* any<any,any,any>*/): any;
			public containsValue(param0: java.lang.Void): boolean;
			public computeIfAbsent(param0: any, param1: any /* any<any,any>*/): any;
			public put(param0: any, param1: any): any;
			public merge(param0: any, param1: any, param2: any /* any<any,any,any>*/): any;
			public entrySet(): java.util.Set<java.util.Map.Entry<any, any>>;
			public toString(): string;
			public remove(param0: any, param1: any): boolean;
			public containsKey(param0: any): boolean;
			public getKeys(): java.util.Set<any>;
			public hashCode(): number;
			public putAll(param0: java.util.Map<any, any>): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export class EmptySet extends java.lang.Object implements java.util.Set<any>, java.io.Serializable, kotlin.jvm.internal.markers.KMappedMarker {
			public static class: java.lang.Class<kotlin.collections.EmptySet>;
			public static INSTANCE: kotlin.collections.EmptySet;
			public equals(param0: any): boolean;
			public toArray(): any[];
			public stream(): java.util.stream.Stream<any>;
			public addAll(param0: java.util.Collection<any>): boolean;
			public getSize(): number;
			public contains(param0: any): boolean;
			public add(param0: java.lang.Void): boolean;
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public size(): number;
			public isEmpty(): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public toArray(param0: any[]): any[];
			public contains(param0: java.lang.Void): boolean;
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public forEach(param0: any /* any*/): void;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public toString(): string;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public add(param0: any): boolean;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public iterator(): java.util.Iterator<any>;
			public removeIf(param0: any /* any*/): boolean;
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
		export class GroupingKt extends kotlin.collections.GroupingKt__GroupingKt {
			public static class: java.lang.Class<kotlin.collections.GroupingKt>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class GroupingKt__GroupingJVMKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.GroupingKt__GroupingJVMKt>;
			public static eachCount(param0: kotlin.collections.Grouping<any,any>): java.util.Map<any, any>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module collections {
		export class GroupingKt__GroupingKt extends kotlin.collections.GroupingKt__GroupingJVMKt {
			public static class: java.lang.Class<kotlin.collections.GroupingKt__GroupingKt>;
			public static fold(param0: kotlin.collections.Grouping<any,any>, param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.Map<any, any>;
			public static foldTo(param0: kotlin.collections.Grouping<any,any>, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function2<any,any,any>, param3: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.Map<any, any>;
			public static aggregateTo(param0: kotlin.collections.Grouping<any,any>, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function4<any,any,any,any,any>): java.util.Map<any, any>;
			public constructor();
			public static fold(param0: kotlin.collections.Grouping<any,any>, param1: kotlin.jvm.functions.Function2<any,any,any>, param2: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.Map<any, any>;
			public static reduce(param0: kotlin.collections.Grouping<any,any>, param1: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.Map<any, any>;
			public static foldTo(param0: kotlin.collections.Grouping<any,any>, param1: java.util.Map<any, any>, param2: any, param3: kotlin.jvm.functions.Function2<any,any,any>): java.util.Map<any, any>;
			public static aggregate(param0: kotlin.collections.Grouping<any,any>, param1: kotlin.jvm.functions.Function4<any,any,any,any,any>): java.util.Map<any, any>;
			public static reduceTo(param0: kotlin.collections.Grouping<any,any>, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.Map<any, any>;
			public static eachCountTo(param0: kotlin.collections.Grouping<any,any>, param1: java.util.Map<any, any>): java.util.Map<any, any>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class IndexedValue<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.IndexedValue<any>>;
			public getIndex(): number;
			public equals(param0: any): boolean;
			public copy(param0: number, param1: T): kotlin.collections.IndexedValue<T>;
			public constructor(param0: number, param1: T);
			public toString(): string;
			public component2(): T;
			public getValue(): T;
			public component1(): number;
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
			public constructor(param0: kotlin.jvm.functions.Function0<any>);
			public spliterator(): java.util.Spliterator<T>;
			public forEach(param0: any /* any*/): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export class IndexingIterator<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.IndexingIterator<any>>;
			public constructor(param0: java.util.Iterator<any>);
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
		export class MapAccessorsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.MapAccessorsKt>;
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
				getOrDefault(param0: any, param1: V): V;
				forEach(param0: any /* any<any,any>*/): void;
				replaceAll(param0: any /* any<any,any,any>*/): void;
				putIfAbsent(param0: K, param1: V): V;
				remove(param0: any, param1: any): boolean;
				replace(param0: K, param1: V, param2: V): boolean;
				replace(param0: K, param1: V): V;
				computeIfAbsent(param0: K, param1: any /* any<any,any>*/): V;
				computeIfPresent(param0: K, param1: any /* any<any,any,any>*/): V;
				compute(param0: K, param1: any /* any<any,any,any>*/): V;
				merge(param0: K, param1: V, param2: any /* any<any,any,any>*/): V;
			});
			public constructor();
			public replaceAll(param0: any /* any<any,any,any>*/): void;
			public equals(param0: any): boolean;
			public put(param0: K, param1: V): V;
			public containsValue(param0: any): boolean;
			public forEach(param0: any /* any<any,any>*/): void;
			public getOrImplicitDefault(param0: K): V;
			public putAll(param0: java.util.Map<any,any>): void;
			public keySet(): java.util.Set<K>;
			public compute(param0: K, param1: any /* any<any,any,any>*/): V;
			public values(): java.util.Collection<V>;
			public merge(param0: K, param1: V, param2: any /* any<any,any,any>*/): V;
			public clear(): void;
			public putIfAbsent(param0: K, param1: V): V;
			public size(): number;
			public isEmpty(): boolean;
			public computeIfAbsent(param0: K, param1: any /* any<any,any>*/): V;
			public getMap(): java.util.Map<K,V>;
			public get(param0: any): V;
			public computeIfPresent(param0: K, param1: any /* any<any,any,any>*/): V;
			public getOrDefault(param0: any, param1: V): V;
			public remove(param0: any, param1: any): boolean;
			public remove(param0: any): V;
			public replace(param0: K, param1: V): V;
			public containsKey(param0: any): boolean;
			public replace(param0: K, param1: V, param2: V): boolean;
			public entrySet(): java.util.Set<java.util.Map.Entry<K,V>>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MapWithDefaultImpl<K, V>  extends kotlin.collections.MapWithDefault<any,any> {
			public static class: java.lang.Class<kotlin.collections.MapWithDefaultImpl<any,any>>;
			public replaceAll(param0: any /* any<any,any,any>*/): void;
			public equals(param0: any): boolean;
			public replace(param0: any, param1: any): any;
			public compute(param0: any, param1: any /* any<any,any,any>*/): any;
			public containsValue(param0: any): boolean;
			public replace(param0: any, param1: any, param2: any): boolean;
			public get(param0: any): any;
			public getSize(): number;
			public forEach(param0: any /* any<any,any>*/): void;
			public getEntries(): java.util.Set<java.util.Map.Entry<any,any>>;
			public getOrDefault(param0: any, param1: any): any;
			public putIfAbsent(param0: any, param1: any): any;
			public remove(param0: any): any;
			public putAll(param0: java.util.Map<any,any>): void;
			public values(): java.util.Collection<any>;
			public getValues(): java.util.Collection<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public keySet(): java.util.Set<any>;
			public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
			public getMap(): java.util.Map<any,any>;
			public computeIfPresent(param0: any, param1: any /* any<any,any,any>*/): any;
			public computeIfAbsent(param0: any, param1: any /* any<any,any>*/): any;
			public put(param0: any, param1: any): any;
			public merge(param0: any, param1: any, param2: any /* any<any,any,any>*/): any;
			public toString(): string;
			public constructor(param0: java.util.Map<any,any>, param1: kotlin.jvm.functions.Function1<any,any>);
			public remove(param0: any, param1: any): boolean;
			public containsKey(param0: any): boolean;
			public getKeys(): java.util.Set<any>;
			public getOrImplicitDefault(param0: any): any;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MapsKt extends kotlin.collections.MapsKt___MapsKt {
			public static class: java.lang.Class<kotlin.collections.MapsKt>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MapsKt__MapWithDefaultKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.MapsKt__MapWithDefaultKt>;
			public static withDefaultMutable(param0: java.util.Map<any, any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public constructor();
			public static getOrImplicitDefaultNullable(param0: java.util.Map<any, any>, param1: any): any;
			public static withDefault(param0: java.util.Map<any, any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MapsKt__MapsJVMKt extends kotlin.collections.MapsKt__MapWithDefaultKt {
			public static class: java.lang.Class<kotlin.collections.MapsKt__MapsJVMKt>;
			public static toSortedMap(param0: java.util.Map<any, any>): java.util.SortedMap<any, any>;
			public static mapCapacity(param0: number): number;
			public static sortedMapOf(param0: kotlin.Pair<any,any[]>): java.util.SortedMap<any, any>;
			public static toSingletonMap(param0: java.util.Map<any, any>): java.util.Map<any, any>;
			public static getOrPut(param0: java.util.concurrent.ConcurrentMap<any, any>, param1: any, param2: kotlin.jvm.functions.Function0<any>): any;
			public static createMapBuilder(): java.util.Map<any, any>;
			public static sortedMapOf(param0: java.util.Comparator<any>, param1: kotlin.Pair<any,any[]>): java.util.SortedMap<any, any>;
			public static toSortedMap(param0: java.util.Map<any, any>, param1: java.util.Comparator<any>): java.util.SortedMap<any, any>;
			public constructor();
			public static build(param0: java.util.Map<any, any>): java.util.Map<any, any>;
			public static createMapBuilder(param0: number): java.util.Map<any, any>;
			public static mapOf(param0: kotlin.Pair<any,any>): java.util.Map<any, any>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MapsKt__MapsKt extends kotlin.collections.MapsKt__MapsJVMKt {
			public static class: java.lang.Class<kotlin.collections.MapsKt__MapsKt>;
			public static filterTo(param0: java.util.Map<any, any>, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static mapKeys(param0: java.util.Map<any, any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static filterNot(param0: java.util.Map<any, any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static putAll(param0: java.util.Map<any, any>, param1: kotlin.Pair<any,any[]>): void;
			public static toMutableMap(param0: java.util.Map<any, any>): java.util.Map<any, any>;
			public static plus(param0: java.util.Map<any, any>, param1: kotlin.Pair<any,any>): java.util.Map<any, any>;
			public static plus(param0: java.util.Map<any, any>, param1: java.lang.Iterable<any>): java.util.Map<any, any>;
			public static filter(param0: java.util.Map<any, any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static putAll(param0: java.util.Map<any, any>, param1: kotlin.sequences.Sequence<any>): void;
			public static minus(param0: java.util.Map<any, any>, param1: kotlin.sequences.Sequence<any>): java.util.Map<any, any>;
			public static toMap(param0: java.util.Map<any, any>, param1: java.util.Map<any, any>): java.util.Map<any, any>;
			public static toMap(param0: java.lang.Iterable<any>): java.util.Map<any, any>;
			public static filterNotTo(param0: java.util.Map<any, any>, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static toMap(param0: kotlin.Pair<any,any[]>, param1: java.util.Map<any, any>): java.util.Map<any, any>;
			public static linkedMapOf(param0: kotlin.Pair<any,any[]>): java.util.LinkedHashMap<any, any>;
			public static getOrElseNullable(param0: java.util.Map<any, any>, param1: any, param2: kotlin.jvm.functions.Function0<any>): any;
			public static hashMapOf(param0: kotlin.Pair<any,any[]>): java.util.HashMap<any, any>;
			public static mapOf(param0: kotlin.Pair<any,any[]>): java.util.Map<any, any>;
			public static filterValues(param0: java.util.Map<any, any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static getOrPut(param0: java.util.concurrent.ConcurrentMap<any, any>, param1: any, param2: kotlin.jvm.functions.Function0<any>): any;
			public static putAll(param0: java.util.Map<any, any>, param1: java.lang.Iterable<any>): void;
			public static getOrPut(param0: java.util.Map<any, any>, param1: any, param2: kotlin.jvm.functions.Function0<any>): any;
			public static getValue(param0: java.util.Map<any, any>, param1: any): any;
			public static toMap(param0: java.util.Map<any, any>): java.util.Map<any, any>;
			public static emptyMap(): java.util.Map<any, any>;
			public constructor();
			public static minus(param0: java.util.Map<any, any>, param1: any): java.util.Map<any, any>;
			public static plus(param0: java.util.Map<any, any>, param1: kotlin.sequences.Sequence<any>): java.util.Map<any, any>;
			public static mapKeysTo(param0: java.util.Map<any, any>, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static mapValues(param0: java.util.Map<any, any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static toMap(param0: java.lang.Iterable<any>, param1: java.util.Map<any, any>): java.util.Map<any, any>;
			public static mutableMapOf(param0: kotlin.Pair<any,any[]>): java.util.Map<any, any>;
			public static minus(param0: java.util.Map<any, any>, param1: any[]): java.util.Map<any, any>;
			public static filterKeys(param0: java.util.Map<any, any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static minus(param0: java.util.Map<any, any>, param1: java.lang.Iterable<any>): java.util.Map<any, any>;
			public static plus(param0: java.util.Map<any, any>, param1: java.util.Map<any, any>): java.util.Map<any, any>;
			public static mapValuesTo(param0: java.util.Map<any, any>, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static toMap(param0: kotlin.sequences.Sequence<any>): java.util.Map<any, any>;
			public static toMap(param0: kotlin.sequences.Sequence<any>, param1: java.util.Map<any, any>): java.util.Map<any, any>;
			public static toMap(param0: kotlin.Pair<any,any[]>): java.util.Map<any, any>;
			public static optimizeReadOnlyMap(param0: java.util.Map<any, any>): java.util.Map<any, any>;
			public static plus(param0: java.util.Map<any, any>, param1: kotlin.Pair<any,any[]>): java.util.Map<any, any>;
			public static mapOf(param0: kotlin.Pair<any,any>): java.util.Map<any, any>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MapsKt___MapsKt extends kotlin.collections.MapsKt__MapsKt {
			public static class: java.lang.Class<kotlin.collections.MapsKt___MapsKt>;
			public static flatMap(param0: java.util.Map<any, any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static all(param0: java.util.Map<any, any>, param1: kotlin.jvm.functions.Function1<any,any>): boolean;
			/** @deprecated */
			public static minWith(param0: java.util.Map<any, any>, param1: java.util.Comparator<any>): java.util.Map.Entry<any, any>;
			public static onEachIndexed(param0: java.util.Map<any, any>, param1: kotlin.jvm.functions.Function2<any,any,any>): java.util.Map<any, any>;
			public static none(param0: java.util.Map<any, any>, param1: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static forEach(param0: java.util.Map<any, any>, param1: kotlin.jvm.functions.Function1<any,any>): void;
			public static flatMapSequenceTo(param0: java.util.Map<any, any>, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static mapNotNull(param0: java.util.Map<any, any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static mapNotNullTo(param0: java.util.Map<any, any>, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public constructor();
			public static flatMapSequence(param0: java.util.Map<any, any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static mapTo(param0: java.util.Map<any, any>, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static any(param0: java.util.Map<any, any>, param1: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static map(param0: java.util.Map<any, any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			/** @deprecated */
			public static minBy(param0: java.util.Map<any, any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map.Entry<any, any>;
			public static count(param0: java.util.Map<any, any>, param1: kotlin.jvm.functions.Function1<any,any>): number;
			public static onEach(param0: java.util.Map<any, any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static flatMapTo(param0: java.util.Map<any, any>, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static none(param0: java.util.Map<any, any>): boolean;
			public static asSequence(param0: java.util.Map<any, any>): kotlin.sequences.Sequence<any>;
			public static toList(param0: java.util.Map<any, any>): java.util.List<any>;
			public static any(param0: java.util.Map<any, any>): boolean;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MovingSubList<E>  extends kotlin.collections.AbstractList<any> implements java.util.RandomAccess  {
			public static class: java.lang.Class<kotlin.collections.MovingSubList<any>>;
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public equals(param0: any): boolean;
			public toArray(): any[];
			public replaceAll(param0: any /* any*/): void;
			public stream(): java.util.stream.Stream<any>;
			public remove(param0: number): any;
			public getSize(): number;
			public sort(param0: java.util.Comparator<any>): void;
			public contains(param0: any): boolean;
			public get(param0: number): any;
			public add(param0: number, param1: any): void;
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public listIterator(param0: number): java.util.ListIterator<any>;
			public toArray(param0: any[]): any[];
			public constructor();
			public move(param0: number, param1: number): void;
			public subList(param0: number, param1: number): java.util.List<any>;
			public constructor(param0: java.util.List<any>);
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public set(param0: number, param1: any): any;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public lastIndexOf(param0: any): number;
			public add(param0: any): boolean;
			public listIterator(): java.util.ListIterator<any>;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public indexOf(param0: any): number;
			public spliterator(): java.util.Spliterator<any>;
			public removeIf(param0: any /* any*/): boolean;
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
				getOrDefault(param0: any, param1: V): V;
				forEach(param0: any /* any<any,any>*/): void;
				replaceAll(param0: any /* any<any,any,any>*/): void;
				putIfAbsent(param0: K, param1: V): V;
				remove(param0: any, param1: any): boolean;
				replace(param0: K, param1: V, param2: V): boolean;
				replace(param0: K, param1: V): V;
				computeIfAbsent(param0: K, param1: any /* any<any,any>*/): V;
				computeIfPresent(param0: K, param1: any /* any<any,any,any>*/): V;
				compute(param0: K, param1: any /* any<any,any,any>*/): V;
				merge(param0: K, param1: V, param2: any /* any<any,any,any>*/): V;
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
				getOrDefault(param0: any, param1: V): V;
				forEach(param0: any /* any<any,any>*/): void;
				replaceAll(param0: any /* any<any,any,any>*/): void;
				putIfAbsent(param0: K, param1: V): V;
				remove(param0: any, param1: any): boolean;
				replace(param0: K, param1: V, param2: V): boolean;
				replace(param0: K, param1: V): V;
				computeIfAbsent(param0: K, param1: any /* any<any,any>*/): V;
				computeIfPresent(param0: K, param1: any /* any<any,any,any>*/): V;
				compute(param0: K, param1: any /* any<any,any,any>*/): V;
				merge(param0: K, param1: V, param2: any /* any<any,any,any>*/): V;
			});
			public constructor();
			public replaceAll(param0: any /* any<any,any,any>*/): void;
			public equals(param0: any): boolean;
			public put(param0: K, param1: V): V;
			public containsValue(param0: any): boolean;
			public forEach(param0: any /* any<any,any>*/): void;
			public getOrImplicitDefault(param0: K): V;
			public putAll(param0: java.util.Map<any,any>): void;
			public keySet(): java.util.Set<K>;
			public compute(param0: K, param1: any /* any<any,any,any>*/): V;
			public values(): java.util.Collection<V>;
			public merge(param0: K, param1: V, param2: any /* any<any,any,any>*/): V;
			public clear(): void;
			public putIfAbsent(param0: K, param1: V): V;
			public size(): number;
			public isEmpty(): boolean;
			public computeIfAbsent(param0: K, param1: any /* any<any,any>*/): V;
			public getMap(): java.util.Map<K,V>;
			public get(param0: any): V;
			public computeIfPresent(param0: K, param1: any /* any<any,any,any>*/): V;
			public getOrDefault(param0: any, param1: V): V;
			public remove(param0: any, param1: any): boolean;
			public remove(param0: any): V;
			public replace(param0: K, param1: V): V;
			public containsKey(param0: any): boolean;
			public replace(param0: K, param1: V, param2: V): boolean;
			public entrySet(): java.util.Set<java.util.Map.Entry<K,V>>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MutableMapWithDefaultImpl<K, V>  extends kotlin.collections.MutableMapWithDefault<any,any> {
			public static class: java.lang.Class<kotlin.collections.MutableMapWithDefaultImpl<any,any>>;
			public replaceAll(param0: any /* any<any,any,any>*/): void;
			public equals(param0: any): boolean;
			public replace(param0: any, param1: any): any;
			public compute(param0: any, param1: any /* any<any,any,any>*/): any;
			public containsValue(param0: any): boolean;
			public replace(param0: any, param1: any, param2: any): boolean;
			public get(param0: any): any;
			public getSize(): number;
			public forEach(param0: any /* any<any,any>*/): void;
			public getEntries(): java.util.Set<java.util.Map.Entry<any,any>>;
			public getOrDefault(param0: any, param1: any): any;
			public putIfAbsent(param0: any, param1: any): any;
			public remove(param0: any): any;
			public putAll(param0: java.util.Map<any,any>): void;
			public values(): java.util.Collection<any>;
			public getValues(): java.util.Collection<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public keySet(): java.util.Set<any>;
			public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
			public getMap(): java.util.Map<any,any>;
			public computeIfPresent(param0: any, param1: any /* any<any,any,any>*/): any;
			public computeIfAbsent(param0: any, param1: any /* any<any,any>*/): any;
			public put(param0: any, param1: any): any;
			public merge(param0: any, param1: any, param2: any /* any<any,any,any>*/): any;
			public toString(): string;
			public constructor(param0: java.util.Map<any,any>, param1: kotlin.jvm.functions.Function1<any,any>);
			public remove(param0: any, param1: any): boolean;
			public containsKey(param0: any): boolean;
			public getKeys(): java.util.Set<any>;
			public getOrImplicitDefault(param0: any): any;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class ReversedList<T>  extends kotlin.collections.AbstractMutableList<any> {
			public static class: java.lang.Class<kotlin.collections.ReversedList<any>>;
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public equals(param0: any): boolean;
			public toArray(): any[];
			public replaceAll(param0: any /* any*/): void;
			public stream(): java.util.stream.Stream<any>;
			public remove(param0: number): any;
			public getSize(): number;
			public sort(param0: java.util.Comparator<any>): void;
			public contains(param0: any): boolean;
			public get(param0: number): any;
			public add(param0: number, param1: any): void;
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public listIterator(param0: number): java.util.ListIterator<any>;
			public toArray(param0: any[]): any[];
			public constructor();
			public removeAt(param0: number): any;
			public subList(param0: number, param1: number): java.util.List<any>;
			public constructor(param0: java.util.List<any>);
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public set(param0: number, param1: any): any;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public lastIndexOf(param0: any): number;
			public add(param0: any): boolean;
			public listIterator(): java.util.ListIterator<any>;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public indexOf(param0: any): number;
			public spliterator(): java.util.Spliterator<any>;
			public removeIf(param0: any /* any*/): boolean;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class ReversedListReadOnly<T>  extends kotlin.collections.AbstractList<any> {
			public static class: java.lang.Class<kotlin.collections.ReversedListReadOnly<any>>;
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public equals(param0: any): boolean;
			public toArray(): any[];
			public replaceAll(param0: any /* any*/): void;
			public stream(): java.util.stream.Stream<any>;
			public remove(param0: number): any;
			public getSize(): number;
			public sort(param0: java.util.Comparator<any>): void;
			public contains(param0: any): boolean;
			public get(param0: number): any;
			public add(param0: number, param1: any): void;
			public iterator(): java.util.Iterator<any>;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public listIterator(param0: number): java.util.ListIterator<any>;
			public toArray(param0: any[]): any[];
			public constructor();
			public subList(param0: number, param1: number): java.util.List<any>;
			public constructor(param0: java.util.List<any>);
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public set(param0: number, param1: any): any;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public lastIndexOf(param0: any): number;
			public add(param0: any): boolean;
			public listIterator(): java.util.ListIterator<any>;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public indexOf(param0: any): number;
			public spliterator(): java.util.Spliterator<any>;
			public removeIf(param0: any /* any*/): boolean;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class RingBuffer<T>  extends kotlin.collections.AbstractList<any> implements java.util.RandomAccess  {
			public static class: java.lang.Class<kotlin.collections.RingBuffer<any>>;
			public addAll(param0: number, param1: java.util.Collection<any>): boolean;
			public equals(param0: any): boolean;
			public toArray(): any[];
			public removeFirst(param0: number): void;
			public replaceAll(param0: any /* any*/): void;
			public stream(): java.util.stream.Stream<any>;
			public remove(param0: number): any;
			public getSize(): number;
			public add(param0: any): void;
			public sort(param0: java.util.Comparator<any>): void;
			public contains(param0: any): boolean;
			public get(param0: number): any;
			public constructor(param0: any[], param1: number);
			public add(param0: number, param1: any): void;
			public iterator(): java.util.Iterator<any>;
			public isFull(): boolean;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public listIterator(param0: number): java.util.ListIterator<any>;
			public constructor(param0: number);
			public toArray(param0: any[]): any[];
			public constructor();
			public subList(param0: number, param1: number): java.util.List<any>;
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public expanded(param0: number): kotlin.collections.RingBuffer<any>;
			public set(param0: number, param1: any): any;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public lastIndexOf(param0: any): number;
			public add(param0: any): boolean;
			public listIterator(): java.util.ListIterator<any>;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public indexOf(param0: any): number;
			public spliterator(): java.util.Spliterator<any>;
			public removeIf(param0: any /* any*/): boolean;
			public parallelStream(): java.util.stream.Stream<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class SetsKt extends kotlin.collections.SetsKt___SetsKt {
			public static class: java.lang.Class<kotlin.collections.SetsKt>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class SetsKt__SetsJVMKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.SetsKt__SetsJVMKt>;
			public static createSetBuilder(param0: number): java.util.Set<any>;
			public static build(param0: java.util.Set<any>): java.util.Set<any>;
			public static sortedSetOf(param0: any[]): java.util.TreeSet<any>;
			public static createSetBuilder(): java.util.Set<any>;
			public constructor();
			public static sortedSetOf(param0: java.util.Comparator<any>, param1: any[]): java.util.TreeSet<any>;
			public static setOf(param0: any): java.util.Set<any>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class SetsKt__SetsKt extends kotlin.collections.SetsKt__SetsJVMKt {
			public static class: java.lang.Class<kotlin.collections.SetsKt__SetsKt>;
			public static optimizeReadOnlySet(param0: java.util.Set<any>): java.util.Set<any>;
			public static hashSetOf(param0: any[]): java.util.HashSet<any>;
			public static emptySet(): java.util.Set<any>;
			public static setOf(param0: any[]): java.util.Set<any>;
			public static setOfNotNull(param0: any): java.util.Set<any>;
			public static setOfNotNull(param0: any[]): java.util.Set<any>;
			public static mutableSetOf(param0: any[]): java.util.Set<any>;
			public static linkedSetOf(param0: any[]): java.util.LinkedHashSet<any>;
			public constructor();
			public static setOf(param0: any): java.util.Set<any>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class SetsKt___SetsKt extends kotlin.collections.SetsKt__SetsKt {
			public static class: java.lang.Class<kotlin.collections.SetsKt___SetsKt>;
			public static minus(param0: java.util.Set<any>, param1: any[]): java.util.Set<any>;
			public static plus(param0: java.util.Set<any>, param1: any): java.util.Set<any>;
			public static plus(param0: java.util.Set<any>, param1: java.lang.Iterable<any>): java.util.Set<any>;
			public static minus(param0: java.util.Set<any>, param1: any): java.util.Set<any>;
			public static plus(param0: java.util.Set<any>, param1: kotlin.sequences.Sequence<any>): java.util.Set<any>;
			public constructor();
			public static plus(param0: java.util.Set<any>, param1: any[]): java.util.Set<any>;
			public static minus(param0: java.util.Set<any>, param1: java.lang.Iterable<any>): java.util.Set<any>;
			public static minus(param0: java.util.Set<any>, param1: kotlin.sequences.Sequence<any>): java.util.Set<any>;
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
		export class SlidingWindowKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.SlidingWindowKt>;
			public static checkWindowSizeStep(param0: number, param1: number): void;
			public static windowedIterator(param0: java.util.Iterator<any>, param1: number, param2: number, param3: boolean, param4: boolean): java.util.Iterator<any>;
			public static windowedSequence(param0: kotlin.sequences.Sequence<any>, param1: number, param2: number, param3: boolean, param4: boolean): kotlin.sequences.Sequence<any>;
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
			public static valueOf(param0: string): kotlin.collections.State;
			public static values(): kotlin.collections.State[];
			public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class TypeAliasesKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.TypeAliasesKt>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class UArraySortingKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.UArraySortingKt>;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class UByteIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.UByteIterator>;
			public constructor();
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export class UCollectionsKt extends kotlin.collections.UCollectionsKt___UCollectionsKt {
			public static class: java.lang.Class<kotlin.collections.UCollectionsKt>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class UCollectionsKt___UCollectionsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.UCollectionsKt___UCollectionsKt>;
			public static sumOfUInt(param0: java.lang.Iterable<kotlin.UInt>): number;
			public static toUShortArray(param0: java.util.Collection<kotlin.UShort>): number[];
			public static toUByteArray(param0: java.util.Collection<kotlin.UByte>): number[];
			public static sumOfUByte(param0: java.lang.Iterable<kotlin.UByte>): number;
			public constructor();
			public static toULongArray(param0: java.util.Collection<kotlin.ULong>): number[];
			public static sumOfULong(param0: java.lang.Iterable<kotlin.ULong>): number;
			public static sumOfUShort(param0: java.lang.Iterable<kotlin.UShort>): number;
			public static toUIntArray(param0: java.util.Collection<kotlin.UInt>): number[];
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class UIntIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.UIntIterator>;
			public constructor();
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class ULongIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.ULongIterator>;
			public constructor();
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class UShortIterator extends java.lang.Object {
			public static class: java.lang.Class<kotlin.collections.UShortIterator>;
			public constructor();
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export abstract class AbstractMapBuilderEntrySet<E, K, V>  extends kotlin.collections.AbstractMutableSet<any> {
				public static class: java.lang.Class<kotlin.collections.builders.AbstractMapBuilderEntrySet<any,any,any>>;
				public parallelStream(): java.util.stream.Stream<any>;
				public spliterator(): java.util.Spliterator<any>;
				public remove(param0: java.util.Map.Entry<any, any>): boolean;
				public contains(param0: any): boolean;
				public addAll(param0: java.util.Collection<any>): boolean;
				public stream(): java.util.stream.Stream<any>;
				public toArray(param0: any[]): any[];
				public iterator(): java.util.Iterator<any>;
				public containsEntry(param0: java.util.Map.Entry<any,any>): boolean;
				public removeIf(param0: any /* any*/): boolean;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public constructor();
				public size(): number;
				public toArray(): any[];
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public hashCode(): number;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public clear(): void;
				public equals(param0: any): boolean;
				public isEmpty(): boolean;
				public remove(param0: any): boolean;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export class ListBuilder<E>  extends kotlin.collections.AbstractMutableList<any> {
				public static class: java.lang.Class<kotlin.collections.builders.ListBuilder<any>>;
				public parallelStream(): java.util.stream.Stream<any>;
				public build(): java.util.List<any>;
				public indexOf(param0: any): number;
				public addAll(param0: java.util.Collection<any>): boolean;
				public remove(param0: number): any;
				public listIterator(): java.util.ListIterator<any>;
				public removeIf(param0: any /* any*/): boolean;
				public add(param0: number, param1: any): void;
				public toArray(): any[];
				public constructor();
				public set(param0: number, param1: any): any;
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public removeAt(param0: number): any;
				public getSize(): number;
				public hashCode(): number;
				public clear(): void;
				public equals(param0: any): boolean;
				public addAll(param0: number, param1: java.util.Collection<any>): boolean;
				public isEmpty(): boolean;
				public lastIndexOf(param0: any): number;
				public sort(param0: java.util.Comparator<any>): void;
				public listIterator(param0: number): java.util.ListIterator<any>;
				public remove(param0: any): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public subList(param0: number, param1: number): java.util.List<any>;
				public contains(param0: any): boolean;
				public stream(): java.util.stream.Stream<any>;
				public toArray(param0: any[]): any[];
				public iterator(): java.util.Iterator<any>;
				public toString(): string;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public get(param0: number): any;
				public size(): number;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public forEach(param0: any /* any*/): void;
				public replaceAll(param0: any /* any*/): void;
				public constructor(param0: number);
			}
			export module ListBuilder {
				export class Itr<E>  extends java.lang.Object {
					public static class: java.lang.Class<kotlin.collections.builders.ListBuilder.Itr<any>>;
					public add(param0: E): void;
					public previousIndex(): number;
					public nextIndex(): number;
					public previous(): E;
					public constructor(param0: kotlin.collections.builders.ListBuilder<E>, param1: number);
					public hasPrevious(): boolean;
					public set(param0: E): void;
					public next(): E;
					public hasNext(): boolean;
					public remove(): void;
				}
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export class ListBuilderKt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.builders.ListBuilderKt>;
				public static arrayOfUninitializedElements(param0: number): any[];
				public static copyOfUninitializedElements(param0: any[], param1: number): any[];
				public static resetRange(param0: any[], param1: number, param2: number): void;
				public static resetAt(param0: any[], param1: number): void;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export class MapBuilder<K, V>  extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.builders.MapBuilder<any,any>>;
				public computeIfPresent(param0: K, param1: any /* any<any,any,any>*/): V;
				public entrySet(): java.util.Set<java.util.Map.Entry<K,V>>;
				public putAll(param0: java.util.Map<any,any>): void;
				public replace(param0: K, param1: V): V;
				public keySet(): java.util.Set<K>;
				public containsKey(param0: any): boolean;
				public replaceAll(param0: any /* any<any,any,any>*/): void;
				public put(param0: K, param1: V): V;
				public compute(param0: K, param1: any /* any<any,any,any>*/): V;
				public removeValue$kotlin_stdlib(param0: V): boolean;
				public constructor();
				public remove(param0: any, param1: any): boolean;
				public replace(param0: K, param1: V, param2: V): boolean;
				public remove(param0: any): V;
				public getOrDefault(param0: any, param1: V): V;
				public build(): java.util.Map<K,V>;
				public checkIsMutable$kotlin_stdlib(): void;
				public getEntries(): java.util.Set<java.util.Map.Entry<K,V>>;
				public getSize(): number;
				public hashCode(): number;
				public valuesIterator$kotlin_stdlib(): kotlin.collections.builders.MapBuilder.ValuesItr<K,V>;
				public entriesIterator$kotlin_stdlib(): kotlin.collections.builders.MapBuilder.EntriesItr<K,V>;
				public getValues(): java.util.Collection<V>;
				public clear(): void;
				public equals(param0: any): boolean;
				public isEmpty(): boolean;
				public containsAllEntries$kotlin_stdlib(param0: java.util.Collection<any>): boolean;
				public containsValue(param0: any): boolean;
				public removeEntry$kotlin_stdlib(param0: java.util.Map.Entry<any,any>): boolean;
				public putIfAbsent(param0: K, param1: V): V;
				public toString(): string;
				public removeKey$kotlin_stdlib(param0: K): number;
				public computeIfAbsent(param0: K, param1: any /* any<any,any>*/): V;
				public values(): java.util.Collection<V>;
				public size(): number;
				public containsEntry$kotlin_stdlib(param0: java.util.Map.Entry<any,any>): boolean;
				public get(param0: any): V;
				public keysIterator$kotlin_stdlib(): kotlin.collections.builders.MapBuilder.KeysItr<K,V>;
				public constructor(param0: number);
				public forEach(param0: any /* any<any,any>*/): void;
				public addKey$kotlin_stdlib(param0: K): number;
				public getKeys(): java.util.Set<K>;
				public merge(param0: K, param1: V, param2: any /* any<any,any,any>*/): V;
			}
			export module MapBuilder {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kotlin.collections.builders.MapBuilder.Companion>;
				}
				export class EntriesItr<K, V>  extends kotlin.collections.builders.MapBuilder.Itr<any,any> {
					public static class: java.lang.Class<kotlin.collections.builders.MapBuilder.EntriesItr<any,any>>;
					public next(): kotlin.collections.builders.MapBuilder.EntryRef<any,any>;
					public nextAppendString(param0: java.lang.StringBuilder): void;
					public constructor(param0: kotlin.collections.builders.MapBuilder<any,any>);
					public nextHashCode$kotlin_stdlib(): number;
				}
				export class EntryRef<K, V>  extends java.lang.Object {
					public static class: java.lang.Class<kotlin.collections.builders.MapBuilder.EntryRef<any,any>>;
					public equals(param0: any): boolean;
					public getKey(): K;
					public toString(): string;
					public getValue(): V;
					public constructor(param0: kotlin.collections.builders.MapBuilder<K,V>, param1: number);
					public static comparingByKey(): java.util.Comparator<any>;
					public setValue(param0: V): V;
					public static comparingByValue(): java.util.Comparator<any>;
					public static comparingByValue(param0: java.util.Comparator<any>): java.util.Comparator<any>;
					public hashCode(): number;
					public static comparingByKey(param0: java.util.Comparator<any>): java.util.Comparator<any>;
				}
				export class Itr<K, V>  extends java.lang.Object {
					public static class: java.lang.Class<kotlin.collections.builders.MapBuilder.Itr<any,any>>;
					public getMap$kotlin_stdlib(): kotlin.collections.builders.MapBuilder<K,V>;
					public constructor(param0: kotlin.collections.builders.MapBuilder<K,V>);
					public setLastIndex$kotlin_stdlib(param0: number): void;
					public getIndex$kotlin_stdlib(): number;
					public initNext$kotlin_stdlib(): void;
					public setIndex$kotlin_stdlib(param0: number): void;
					public getLastIndex$kotlin_stdlib(): number;
					public hasNext(): boolean;
					public remove(): void;
				}
				export class KeysItr<K, V>  extends kotlin.collections.builders.MapBuilder.Itr<any,any> {
					public static class: java.lang.Class<kotlin.collections.builders.MapBuilder.KeysItr<any,any>>;
					public next(): any;
					public constructor(param0: kotlin.collections.builders.MapBuilder<any,any>);
				}
				export class ValuesItr<K, V>  extends kotlin.collections.builders.MapBuilder.Itr<any,any> {
					public static class: java.lang.Class<kotlin.collections.builders.MapBuilder.ValuesItr<any,any>>;
					public next(): any;
					public constructor(param0: kotlin.collections.builders.MapBuilder<any,any>);
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
				public parallelStream(): java.util.stream.Stream<any>;
				public remove(param0: java.util.Map.Entry<any, any>): boolean;
				public addAll(param0: java.util.Collection<any>): boolean;
				public containsEntry(param0: java.util.Map.Entry<any,any>): boolean;
				public removeIf(param0: any /* any*/): boolean;
				public constructor();
				public toArray(): any[];
				public constructor(param0: kotlin.collections.builders.MapBuilder<any,any>);
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public getSize(): number;
				public hashCode(): number;
				public clear(): void;
				public equals(param0: any): boolean;
				public isEmpty(): boolean;
				public remove(param0: any): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public add(param0: java.util.Map.Entry<any,any>): boolean;
				public contains(param0: any): boolean;
				public stream(): java.util.stream.Stream<any>;
				public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
				public toArray(param0: any[]): any[];
				public iterator(): java.util.Iterator<any>;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public size(): number;
				public getBacking(): kotlin.collections.builders.MapBuilder<any,any>;
				public removeAll(param0: java.util.Collection<any>): boolean;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export class MapBuilderKeys<E>  extends kotlin.collections.AbstractMutableSet<any> {
				public static class: java.lang.Class<kotlin.collections.builders.MapBuilderKeys<any>>;
				public parallelStream(): java.util.stream.Stream<any>;
				public spliterator(): java.util.Spliterator<any>;
				public contains(param0: any): boolean;
				public addAll(param0: java.util.Collection<any>): boolean;
				public stream(): java.util.stream.Stream<any>;
				public toArray(param0: any[]): any[];
				public iterator(): java.util.Iterator<any>;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public removeIf(param0: any /* any*/): boolean;
				public constructor();
				public size(): number;
				public toArray(): any[];
				public constructor(param0: kotlin.collections.builders.MapBuilder<any,any>);
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public getSize(): number;
				public hashCode(): number;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public forEach(param0: any /* any*/): void;
				public clear(): void;
				public equals(param0: any): boolean;
				public isEmpty(): boolean;
				public remove(param0: any): boolean;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export class MapBuilderValues<V>  extends kotlin.collections.AbstractMutableCollection<any> {
				public static class: java.lang.Class<kotlin.collections.builders.MapBuilderValues<any>>;
				public parallelStream(): java.util.stream.Stream<any>;
				public spliterator(): java.util.Spliterator<any>;
				public contains(param0: any): boolean;
				public addAll(param0: java.util.Collection<any>): boolean;
				public stream(): java.util.stream.Stream<any>;
				public toArray(param0: any[]): any[];
				public iterator(): java.util.Iterator<any>;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public removeIf(param0: any /* any*/): boolean;
				public constructor();
				public size(): number;
				public toArray(): any[];
				public constructor(param0: kotlin.collections.builders.MapBuilder<any,any>);
				public getBacking(): kotlin.collections.builders.MapBuilder<any,any>;
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public getSize(): number;
				public hashCode(): number;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public forEach(param0: any /* any*/): void;
				public clear(): void;
				public equals(param0: any): boolean;
				public isEmpty(): boolean;
				public remove(param0: any): boolean;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module builders {
			export class SetBuilder<E>  extends kotlin.collections.AbstractMutableSet<any> {
				public static class: java.lang.Class<kotlin.collections.builders.SetBuilder<any>>;
				public parallelStream(): java.util.stream.Stream<any>;
				public build(): java.util.Set<any>;
				public addAll(param0: java.util.Collection<any>): boolean;
				public removeIf(param0: any /* any*/): boolean;
				public constructor();
				public toArray(): any[];
				public constructor(param0: kotlin.collections.builders.MapBuilder<any,any>);
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public getSize(): number;
				public hashCode(): number;
				public clear(): void;
				public equals(param0: any): boolean;
				public isEmpty(): boolean;
				public remove(param0: any): boolean;
				public spliterator(): java.util.Spliterator<any>;
				public contains(param0: any): boolean;
				public stream(): java.util.stream.Stream<any>;
				public toArray(param0: any[]): any[];
				public iterator(): java.util.Iterator<any>;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public size(): number;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public forEach(param0: any /* any*/): void;
				public constructor(param0: number);
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module jdk8 {
			export class CollectionsJDK8Kt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.jdk8.CollectionsJDK8Kt>;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module unsigned {
			export class UArraysKt extends kotlin.collections.unsigned.UArraysKt___UArraysKt {
				public static class: java.lang.Class<kotlin.collections.unsigned.UArraysKt>;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module unsigned {
			export class UArraysKt___UArraysJvmKt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.collections.unsigned.UArraysKt___UArraysJvmKt>;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export module unsigned {
			export class UArraysKt___UArraysKt extends kotlin.collections.unsigned.UArraysKt___UArraysJvmKt {
				public static class: java.lang.Class<kotlin.collections.unsigned.UArraysKt___UArraysKt>;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class ComparisonsKt extends kotlin.comparisons.ComparisonsKt___ComparisonsKt {
			public static class: java.lang.Class<kotlin.comparisons.ComparisonsKt>;
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class ComparisonsKt__ComparisonsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.comparisons.ComparisonsKt__ComparisonsKt>;
			public static then(param0: java.util.Comparator<any>, param1: java.util.Comparator<any>): java.util.Comparator<any>;
			public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
			public static compareBy(param0: kotlin.jvm.functions.Function1<any,any[]>): java.util.Comparator<any>;
			public static thenDescending(param0: java.util.Comparator<any>, param1: java.util.Comparator<any>): java.util.Comparator<any>;
			public static reverseOrder(): java.util.Comparator<any>;
			public static reversed(param0: java.util.Comparator<any>): java.util.Comparator<any>;
			public static naturalOrder(): java.util.Comparator<any>;
			public constructor();
			public static compareValuesBy(param0: any, param1: any, param2: kotlin.jvm.functions.Function1<any,any[]>): number;
			public static compareValues(param0: java.lang.Comparable<any>, param1: java.lang.Comparable<any>): number;
			public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class ComparisonsKt___ComparisonsJvmKt extends kotlin.comparisons.ComparisonsKt__ComparisonsKt {
			public static class: java.lang.Class<kotlin.comparisons.ComparisonsKt___ComparisonsJvmKt>;
			public static minOf(param0: number, param1: number[]): number;
			public static maxOf(param0: java.lang.Comparable<any>, param1: java.lang.Comparable<any>, param2: java.lang.Comparable<any>): java.lang.Comparable<any>;
			public static maxOf(param0: java.lang.Comparable<any>, param1: java.lang.Comparable<any>): java.lang.Comparable<any>;
			public static maxOf(param0: number, param1: number[]): number;
			public static minOf(param0: java.lang.Comparable<any>, param1: java.lang.Comparable<any>): java.lang.Comparable<any>;
			public constructor();
			public static maxOf(param0: java.lang.Comparable<any>, param1: java.lang.Comparable<any>[]): java.lang.Comparable<any>;
			public static minOf(param0: java.lang.Comparable<any>, param1: java.lang.Comparable<any>, param2: java.lang.Comparable<any>): java.lang.Comparable<any>;
			public static minOf(param0: java.lang.Comparable<any>, param1: java.lang.Comparable<any>[]): java.lang.Comparable<any>;
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class ComparisonsKt___ComparisonsKt extends kotlin.comparisons.ComparisonsKt___ComparisonsJvmKt {
			public static class: java.lang.Class<kotlin.comparisons.ComparisonsKt___ComparisonsKt>;
			public static maxOf(param0: any, param1: any, param2: any, param3: java.util.Comparator<any>): any;
			public static minOf(param0: number, param1: number[]): number;
			public static maxOf(param0: java.lang.Comparable<any>, param1: java.lang.Comparable<any>, param2: java.lang.Comparable<any>): java.lang.Comparable<any>;
			public static maxOf(param0: java.lang.Comparable<any>, param1: java.lang.Comparable<any>): java.lang.Comparable<any>;
			public static minOf(param0: any, param1: any, param2: any, param3: java.util.Comparator<any>): any;
			public constructor();
			public static minOf(param0: any, param1: any, param2: java.util.Comparator<any>): any;
			public static minOf(param0: any, param1: any[], param2: java.util.Comparator<any>): any;
			public static maxOf(param0: java.lang.Comparable<any>, param1: java.lang.Comparable<any>[]): java.lang.Comparable<any>;
			public static maxOf(param0: number, param1: number[]): number;
			public static maxOf(param0: any, param1: any[], param2: java.util.Comparator<any>): any;
			public static maxOf(param0: any, param1: any, param2: java.util.Comparator<any>): any;
			public static minOf(param0: java.lang.Comparable<any>, param1: java.lang.Comparable<any>): java.lang.Comparable<any>;
			public static minOf(param0: java.lang.Comparable<any>, param1: java.lang.Comparable<any>, param2: java.lang.Comparable<any>): java.lang.Comparable<any>;
			public static minOf(param0: java.lang.Comparable<any>, param1: java.lang.Comparable<any>[]): java.lang.Comparable<any>;
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class NaturalOrderComparator extends java.util.Comparator<java.lang.Comparable<any>> {
			public static class: java.lang.Class<kotlin.comparisons.NaturalOrderComparator>;
			public static INSTANCE: kotlin.comparisons.NaturalOrderComparator;
			public equals(param0: any): boolean;
			public reversed(): java.util.Comparator<java.lang.Comparable<any>>;
			public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
			public compare(param0: java.lang.Comparable<any>, param1: java.lang.Comparable<any>): number;
			public compare(param0: any, param1: any): number;
			public static reverseOrder(): java.util.Comparator<any>;
			public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
			public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
			public static comparing(param0: any /* any*/): java.util.Comparator<any>;
			public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
			public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
			public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
			public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
			public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
			public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
			public reversed(): java.util.Comparator<any>;
			public static naturalOrder(): java.util.Comparator<any>;
			public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
			public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
			public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class ReverseOrderComparator extends java.util.Comparator<java.lang.Comparable<any>> {
			public static class: java.lang.Class<kotlin.comparisons.ReverseOrderComparator>;
			public static INSTANCE: kotlin.comparisons.ReverseOrderComparator;
			public equals(param0: any): boolean;
			public reversed(): java.util.Comparator<java.lang.Comparable<any>>;
			public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
			public compare(param0: java.lang.Comparable<any>, param1: java.lang.Comparable<any>): number;
			public compare(param0: any, param1: any): number;
			public static reverseOrder(): java.util.Comparator<any>;
			public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
			public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
			public static comparing(param0: any /* any*/): java.util.Comparator<any>;
			public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
			public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
			public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
			public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
			public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
			public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
			public reversed(): java.util.Comparator<any>;
			public static naturalOrder(): java.util.Comparator<any>;
			public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
			public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
			public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class ReversedComparator<T>  extends java.util.Comparator<any> {
			public static class: java.lang.Class<kotlin.comparisons.ReversedComparator<any>>;
			public equals(param0: any): boolean;
			public static nullsFirst(param0: java.util.Comparator<any>): java.util.Comparator<any>;
			public getComparator(): java.util.Comparator<any>;
			public compare(param0: any, param1: any): number;
			public static reverseOrder(): java.util.Comparator<any>;
			public static comparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
			public static comparingLong(param0: any /* any*/): java.util.Comparator<any>;
			public static comparing(param0: any /* any*/): java.util.Comparator<any>;
			public thenComparing(param0: any /* any*/, param1: java.util.Comparator<any>): java.util.Comparator<any>;
			public thenComparing(param0: any /* any*/): java.util.Comparator<any>;
			public thenComparingDouble(param0: any /* any*/): java.util.Comparator<any>;
			public static comparingInt(param0: any /* any*/): java.util.Comparator<any>;
			public constructor(param0: java.util.Comparator<any>);
			public static comparingDouble(param0: any /* any*/): java.util.Comparator<any>;
			public thenComparingLong(param0: any /* any*/): java.util.Comparator<any>;
			public reversed(): java.util.Comparator<any>;
			public static naturalOrder(): java.util.Comparator<any>;
			public thenComparing(param0: java.util.Comparator<any>): java.util.Comparator<any>;
			public thenComparingInt(param0: any /* any*/): java.util.Comparator<any>;
			public static nullsLast(param0: java.util.Comparator<any>): java.util.Comparator<any>;
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class UComparisonsKt extends kotlin.comparisons.UComparisonsKt___UComparisonsKt {
			public static class: java.lang.Class<kotlin.comparisons.UComparisonsKt>;
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class UComparisonsKt___UComparisonsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.comparisons.UComparisonsKt___UComparisonsKt>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module concurrent {
		export class LocksKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.concurrent.LocksKt>;
		}
	}
}

declare module kotlin {
	export module concurrent {
		export class ThreadsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.concurrent.ThreadsKt>;
			public static thread(param0: boolean, param1: boolean, param2: java.lang.ClassLoader, param3: string, param4: number, param5: kotlin.jvm.functions.Function0<kotlin.Unit>): java.lang.Thread;
		}
	}
}

declare module kotlin {
	export module concurrent {
		export class TimersKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.concurrent.TimersKt>;
			public static timer(param0: string, param1: boolean): java.util.Timer;
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
		export class ContractBuilderKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.contracts.ContractBuilderKt>;
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
			public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			public static values(): kotlin.contracts.InvocationKind[];
			public static valueOf(param0: string): kotlin.contracts.InvocationKind;
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
			public fold(param0: any, param1: kotlin.jvm.functions.Function2<any,any,any>): any;
			public constructor(param0: kotlin.coroutines.CoroutineContext.Key<any>);
			public plus(param0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public getKey(): kotlin.coroutines.CoroutineContext.Key<any>;
			public get(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
			public minusKey(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
		}
	}
}

declare module kotlin {
	export module coroutines {
		export abstract class AbstractCoroutineContextKey<B>  extends kotlin.coroutines.CoroutineContext.Key<any> {
			public static class: java.lang.Class<kotlin.coroutines.AbstractCoroutineContextKey<any>>;
			public constructor(param0: kotlin.coroutines.CoroutineContext.Key<any>, param1: kotlin.jvm.functions.Function1<any,any>);
			public tryCast$kotlin_stdlib(param0: kotlin.coroutines.CoroutineContext.Element): any;
			public isSubKey$kotlin_stdlib(param0: kotlin.coroutines.CoroutineContext.Key<any>): boolean;
		}
	}
}

declare module kotlin {
	export module coroutines {
		export class CombinedContext extends java.lang.Object implements kotlin.coroutines.CoroutineContext, java.io.Serializable {
			public static class: java.lang.Class<kotlin.coroutines.CombinedContext>;
			public fold(param0: any, param1: kotlin.jvm.functions.Function2<any,any,any>): any;
			public equals(param0: any): boolean;
			public toString(): string;
			public plus(param0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public constructor(param0: kotlin.coroutines.CoroutineContext, param1: kotlin.coroutines.CoroutineContext.Element);
			public get(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
			public minusKey(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			public hashCode(): number;
		}
		export module CombinedContext {
			export class Serialized extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<kotlin.coroutines.CombinedContext.Serialized>;
				public static Companion: kotlin.coroutines.CombinedContext.Serialized.Companion;
				public constructor(param0: kotlin.coroutines.CoroutineContext[]);
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
				<clinit>(): void;
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
			public static Key: kotlin.coroutines.ContinuationInterceptor.Key;
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
				public static releaseInterceptedContinuation(param0: kotlin.coroutines.ContinuationInterceptor, param1: kotlin.coroutines.Continuation<any>): void;
				public static minusKey(param0: kotlin.coroutines.ContinuationInterceptor, param1: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
				public static plus(param0: kotlin.coroutines.ContinuationInterceptor, param1: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
				public static get(param0: kotlin.coroutines.ContinuationInterceptor, param1: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
				public static fold(param0: kotlin.coroutines.ContinuationInterceptor, param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): any;
			}
			export class Key extends kotlin.coroutines.CoroutineContext.Key<kotlin.coroutines.ContinuationInterceptor> {
				public static class: java.lang.Class<kotlin.coroutines.ContinuationInterceptor.Key>;
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export class ContinuationKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.coroutines.ContinuationKt>;
			public static startCoroutine(param0: kotlin.jvm.functions.Function1<any,any>, param1: kotlin.coroutines.Continuation<any>): void;
			public static createCoroutine(param0: kotlin.jvm.functions.Function1<any,any>, param1: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<any>;
			public static startCoroutine(param0: kotlin.jvm.functions.Function2<any,any,any>, param1: any, param2: kotlin.coroutines.Continuation<any>): void;
			public static createCoroutine(param0: kotlin.jvm.functions.Function2<any,any,any>, param1: any, param2: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<any>;
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
				public static plus(param0: kotlin.coroutines.CoroutineContext, param1: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
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
					public static fold(param0: kotlin.coroutines.CoroutineContext.Element, param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): any;
					public static plus(param0: kotlin.coroutines.CoroutineContext.Element, param1: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
					public static get(param0: kotlin.coroutines.CoroutineContext.Element, param1: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
					public static minusKey(param0: kotlin.coroutines.CoroutineContext.Element, param1: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
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
		export class CoroutineContextImplKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.coroutines.CoroutineContextImplKt>;
			public static minusPolymorphicKey(param0: kotlin.coroutines.CoroutineContext.Element, param1: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext;
			public static getPolymorphicElement(param0: kotlin.coroutines.CoroutineContext.Element, param1: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
		}
	}
}

declare module kotlin {
	export module coroutines {
		export class EmptyCoroutineContext extends java.lang.Object implements kotlin.coroutines.CoroutineContext, java.io.Serializable {
			public static class: java.lang.Class<kotlin.coroutines.EmptyCoroutineContext>;
			public static INSTANCE: kotlin.coroutines.EmptyCoroutineContext;
			public fold(param0: any, param1: kotlin.jvm.functions.Function2<any,any,any>): any;
			public plus(param0: kotlin.coroutines.CoroutineContext): kotlin.coroutines.CoroutineContext;
			public toString(): string;
			public get(param0: kotlin.coroutines.CoroutineContext.Key<any>): kotlin.coroutines.CoroutineContext.Element;
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
			public constructor(param0: kotlin.coroutines.Continuation<any>);
			public toString(): string;
			public constructor(param0: kotlin.coroutines.Continuation<any>, param1: any);
			public resumeWith(param0: any): void;
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
		export module cancellation {
			export class CancellationExceptionKt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.coroutines.cancellation.CancellationExceptionKt>;
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
				public static valueOf(param0: string): kotlin.coroutines.intrinsics.CoroutineSingletons;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				public static values(): kotlin.coroutines.intrinsics.CoroutineSingletons[];
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module intrinsics {
			export class IntrinsicsKt extends kotlin.coroutines.intrinsics.IntrinsicsKt__IntrinsicsKt {
				public static class: java.lang.Class<kotlin.coroutines.intrinsics.IntrinsicsKt>;
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module intrinsics {
			export class IntrinsicsKt__IntrinsicsJvmKt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.coroutines.intrinsics.IntrinsicsKt__IntrinsicsJvmKt>;
				public static createCoroutineUnintercepted(param0: kotlin.jvm.functions.Function2<any,any,any>, param1: any, param2: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<any>;
				public static intercepted(param0: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<any>;
				public static createCoroutineUnintercepted(param0: kotlin.jvm.functions.Function1<any,any>, param1: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<any>;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module intrinsics {
			export class IntrinsicsKt__IntrinsicsKt extends kotlin.coroutines.intrinsics.IntrinsicsKt__IntrinsicsJvmKt {
				public static class: java.lang.Class<kotlin.coroutines.intrinsics.IntrinsicsKt__IntrinsicsKt>;
				public static getCOROUTINE_SUSPENDED(): any;
				public constructor();
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
					public create(param0: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<kotlin.Unit>;
					public create(param0: any, param1: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<kotlin.Unit>;
					public getCallerFrame(): kotlin.coroutines.jvm.internal.CoroutineStackFrame;
					public getContext(): kotlin.coroutines.CoroutineContext;
					public releaseIntercepted(): void;
					public constructor(param0: kotlin.coroutines.Continuation<any>);
					public resumeWith(param0: any): void;
					public getStackTraceElement(): java.lang.StackTraceElement;
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
					public static boxByte(param0: number): java.lang.Byte;
					public static boxInt(param0: number): java.lang.Integer;
					public static boxShort(param0: number): java.lang.Short;
					public static boxLong(param0: number): java.lang.Long;
					public static boxChar(param0: string): java.lang.Character;
					public static boxBoolean(param0: boolean): java.lang.Boolean;
					public static boxDouble(param0: number): java.lang.Double;
					public static boxFloat(param0: number): java.lang.Float;
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
					public getContext(): kotlin.coroutines.CoroutineContext;
					public intercepted(): kotlin.coroutines.Continuation<any>;
					public constructor(param0: kotlin.coroutines.Continuation<any>, param1: kotlin.coroutines.CoroutineContext);
					public getCallerFrame(): kotlin.coroutines.jvm.internal.CoroutineStackFrame;
					public releaseIntercepted(): void;
					public constructor(param0: kotlin.coroutines.Continuation<any>);
					public resumeWith(param0: any): void;
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
					public l(): number[];
					public equals(param0: any): boolean;
					public i(): number[];
					public c(): string;
					public toString(): string;
					public v(): number;
					public annotationType(): java.lang.Class<any>;
					public s(): string[];
					public m(): string;
					public f(): string;
					public hashCode(): number;
					public n(): string[];
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export class DebugMetadataKt extends java.lang.Object {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.DebugMetadataKt>;
					public static getStackTraceElement(param0: kotlin.coroutines.jvm.internal.BaseContinuationImpl): java.lang.StackTraceElement;
					public static getSpilledVariableFieldMapping(param0: kotlin.coroutines.jvm.internal.BaseContinuationImpl): string[];
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export class DebugProbesKt extends java.lang.Object {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.DebugProbesKt>;
					public static probeCoroutineResumed(param0: kotlin.coroutines.Continuation<any>): void;
					public static probeCoroutineCreated(param0: kotlin.coroutines.Continuation<any>): kotlin.coroutines.Continuation<any>;
					public static probeCoroutineSuspended(param0: kotlin.coroutines.Continuation<any>): void;
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
					public static cache: kotlin.coroutines.jvm.internal.ModuleNameRetriever.Cache;
					public static INSTANCE: kotlin.coroutines.jvm.internal.ModuleNameRetriever;
					public getModuleName(param0: kotlin.coroutines.jvm.internal.BaseContinuationImpl): string;
				}
				export module ModuleNameRetriever {
					export class Cache extends java.lang.Object {
						public static class: java.lang.Class<kotlin.coroutines.jvm.internal.ModuleNameRetriever.Cache>;
						public getModuleMethod: java.lang.reflect.Method;
						public getDescriptorMethod: java.lang.reflect.Method;
						public nameMethod: java.lang.reflect.Method;
						public constructor(param0: java.lang.reflect.Method, param1: java.lang.reflect.Method, param2: java.lang.reflect.Method);
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
					public constructor(param0: kotlin.coroutines.Continuation<any>);
					public resumeWith(param0: any): void;
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
				export abstract class RestrictedSuspendLambda extends kotlin.coroutines.jvm.internal.RestrictedContinuationImpl {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.RestrictedSuspendLambda>;
					public toString(): string;
					public getArity(): number;
					public constructor(param0: number, param1: kotlin.coroutines.Continuation<any>);
					public getContext(): kotlin.coroutines.CoroutineContext;
					public getCallerFrame(): kotlin.coroutines.jvm.internal.CoroutineStackFrame;
					public constructor(param0: kotlin.coroutines.Continuation<any>);
					public resumeWith(param0: any): void;
					public getStackTraceElement(): java.lang.StackTraceElement;
					public constructor(param0: number);
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
					public getContext(): kotlin.coroutines.CoroutineContext;
					public constructor();
					public await(): void;
					public resumeWith(param0: any): void;
					public setResult(param0: kotlin.Result<kotlin.Unit>): void;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module jvm {
			export module internal {
				export class RunSuspendKt extends java.lang.Object {
					public static class: java.lang.Class<kotlin.coroutines.jvm.internal.RunSuspendKt>;
					public static runSuspend(param0: kotlin.jvm.functions.Function1<any,any>): void;
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
					public toString(): string;
					public getArity(): number;
					public constructor(param0: number, param1: kotlin.coroutines.Continuation<any>);
					public constructor(param0: kotlin.coroutines.Continuation<any>, param1: kotlin.coroutines.CoroutineContext);
					public getContext(): kotlin.coroutines.CoroutineContext;
					public getCallerFrame(): kotlin.coroutines.jvm.internal.CoroutineStackFrame;
					public constructor(param0: kotlin.coroutines.Continuation<any>);
					public resumeWith(param0: any): void;
					public getStackTraceElement(): java.lang.StackTraceElement;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module kotlin {
	export module experimental {
		export class BitwiseOperationsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.experimental.BitwiseOperationsKt>;
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
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class PlatformImplementations extends java.lang.Object {
			public static class: java.lang.Class<kotlin.internal.PlatformImplementations>;
			public getMatchResultNamedGroup(param0: java.util.regex.MatchResult, param1: string): kotlin.text.MatchGroup;
			public defaultPlatformRandom(): kotlin.random.Random;
			public addSuppressed(param0: java.lang.Throwable, param1: java.lang.Throwable): void;
			public constructor();
			public getSuppressed(param0: java.lang.Throwable): java.util.List<java.lang.Throwable>;
		}
		export module PlatformImplementations {
			export class ReflectThrowable extends java.lang.Object {
				public static class: java.lang.Class<kotlin.internal.PlatformImplementations.ReflectThrowable>;
				public static addSuppressed: java.lang.reflect.Method;
				public static getSuppressed: java.lang.reflect.Method;
				public static INSTANCE: kotlin.internal.PlatformImplementations.ReflectThrowable;
			}
		}
	}
}

declare module kotlin {
	export module internal {
		export class PlatformImplementationsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.internal.PlatformImplementationsKt>;
			public static IMPLEMENTATIONS: kotlin.internal.PlatformImplementations;
			public static apiVersionIsAtLeast(param0: number, param1: number, param2: number): boolean;
		}
	}
}

declare module kotlin {
	export module internal {
		export class ProgressionUtilKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.internal.ProgressionUtilKt>;
			public static getProgressionLastElement(param0: number, param1: number, param2: number): number;
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
			public versionKind(): kotlin.internal.RequireKotlinVersionKind;
			public message(): string;
			public errorCode(): number;
			public level(): kotlin.DeprecationLevel;
			public annotationType(): java.lang.Class<any>;
			public version(): string;
			public hashCode(): number;
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
			public static valueOf(param0: string): kotlin.internal.RequireKotlinVersionKind;
			public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			public static values(): kotlin.internal.RequireKotlinVersionKind[];
		}
	}
}

declare module kotlin {
	export module internal {
		export class UProgressionUtilKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.internal.UProgressionUtilKt>;
		}
	}
}

declare module kotlin {
	export module internal {
		export module jdk7 {
			export class JDK7PlatformImplementations extends kotlin.internal.PlatformImplementations {
				public static class: java.lang.Class<kotlin.internal.jdk7.JDK7PlatformImplementations>;
				public getSuppressed(param0: java.lang.Throwable): java.util.List<java.lang.Throwable>;
				public addSuppressed(param0: java.lang.Throwable, param1: java.lang.Throwable): void;
				public constructor();
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
				public getMatchResultNamedGroup(param0: java.util.regex.MatchResult, param1: string): kotlin.text.MatchGroup;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module io {
		export class AccessDeniedException extends kotlin.io.FileSystemException {
			public static class: java.lang.Class<kotlin.io.AccessDeniedException>;
			public constructor(param0: java.io.File, param1: java.io.File, param2: string);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public constructor();
			public constructor(param0: string);
		}
	}
}

declare module kotlin {
	export module io {
		export class ByteStreamsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.io.ByteStreamsKt>;
			/** @deprecated */
			public static readBytes(param0: java.io.InputStream, param1: number): number[];
			public static copyTo(param0: java.io.InputStream, param1: java.io.OutputStream, param2: number): number;
			public static iterator(param0: java.io.BufferedInputStream): kotlin.collections.ByteIterator;
			public static readBytes(param0: java.io.InputStream): number[];
		}
	}
}

declare module kotlin {
	export module io {
		export class CloseableKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.io.CloseableKt>;
			public static closeFinally(param0: java.io.Closeable, param1: java.lang.Throwable): void;
		}
	}
}

declare module kotlin {
	export module io {
		export class ConsoleKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.io.ConsoleKt>;
			public static readLine(): string;
		}
	}
}

declare module kotlin {
	export module io {
		export class ConstantsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.io.ConstantsKt>;
			public static DEFAULT_BUFFER_SIZE: number;
			public static DEFAULT_BLOCK_SIZE: number;
			public static MINIMUM_BLOCK_SIZE: number;
		}
	}
}

declare module kotlin {
	export module io {
		export class ExceptionsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.io.ExceptionsKt>;
		}
	}
}

declare module kotlin {
	export module io {
		export class ExposingBufferByteArrayOutputStream extends java.io.ByteArrayOutputStream {
			public static class: java.lang.Class<kotlin.io.ExposingBufferByteArrayOutputStream>;
			public flush(): void;
			public constructor(param0: number);
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
			public constructor(param0: java.io.File, param1: java.io.File, param2: string);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public constructor();
			public constructor(param0: string);
		}
	}
}

declare module kotlin {
	export module io {
		export class FilePathComponents extends java.lang.Object {
			public static class: java.lang.Class<kotlin.io.FilePathComponents>;
			public equals(param0: any): boolean;
			public constructor(param0: java.io.File, param1: java.util.List<any>);
			public getSegments(): java.util.List<java.io.File>;
			public component1(): java.io.File;
			public copy(param0: java.io.File, param1: java.util.List<any>): kotlin.io.FilePathComponents;
			public getRoot(): java.io.File;
			public getSize(): number;
			public component2(): java.util.List<java.io.File>;
			public toString(): string;
			public isRooted(): boolean;
			public getRootName(): string;
			public subPath(param0: number, param1: number): java.io.File;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module io {
		export class FileSystemException extends java.io.IOException {
			public static class: java.lang.Class<kotlin.io.FileSystemException>;
			public getFile(): java.io.File;
			public getReason(): string;
			public getOther(): java.io.File;
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: java.io.File, param1: java.io.File, param2: string);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public constructor();
			public constructor(param0: string);
		}
	}
}

declare module kotlin {
	export module io {
		export class FileTreeWalk extends kotlin.sequences.Sequence<java.io.File> {
			public static class: java.lang.Class<kotlin.io.FileTreeWalk>;
			public onFail(param0: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): kotlin.io.FileTreeWalk;
			public maxDepth(param0: number): kotlin.io.FileTreeWalk;
			public onLeave(param0: kotlin.jvm.functions.Function1<any,kotlin.Unit>): kotlin.io.FileTreeWalk;
			public iterator(): java.util.Iterator<java.io.File>;
			public onEnter(param0: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): kotlin.io.FileTreeWalk;
			public constructor(param0: java.io.File, param1: kotlin.io.FileWalkDirection);
			public iterator(): java.util.Iterator<any>;
		}
		export module FileTreeWalk {
			export abstract class DirectoryState extends kotlin.io.FileTreeWalk.WalkState {
				public static class: java.lang.Class<kotlin.io.FileTreeWalk.DirectoryState>;
				public constructor(param0: java.io.File);
			}
			export class FileTreeWalkIterator extends kotlin.collections.AbstractIterator<java.io.File> {
				public static class: java.lang.Class<kotlin.io.FileTreeWalk.FileTreeWalkIterator>;
				public computeNext(): void;
				public constructor(param0: kotlin.io.FileTreeWalk);
				public constructor();
			}
			export module FileTreeWalkIterator {
				export class BottomUpDirectoryState extends kotlin.io.FileTreeWalk.DirectoryState {
					public static class: java.lang.Class<kotlin.io.FileTreeWalk.FileTreeWalkIterator.BottomUpDirectoryState>;
					public step(): java.io.File;
					public constructor(param0: java.io.File);
				}
				export class SingleFileState extends kotlin.io.FileTreeWalk.WalkState {
					public static class: java.lang.Class<kotlin.io.FileTreeWalk.FileTreeWalkIterator.SingleFileState>;
					public step(): java.io.File;
					public constructor(param0: java.io.File);
				}
				export class TopDownDirectoryState extends kotlin.io.FileTreeWalk.DirectoryState {
					public static class: java.lang.Class<kotlin.io.FileTreeWalk.FileTreeWalkIterator.TopDownDirectoryState>;
					public step(): java.io.File;
					public constructor(param0: java.io.File);
				}
				export class WhenMappings extends java.lang.Object {
					public static class: java.lang.Class<kotlin.io.FileTreeWalk.FileTreeWalkIterator.WhenMappings>;
				}
			}
			export abstract class WalkState extends java.lang.Object {
				public static class: java.lang.Class<kotlin.io.FileTreeWalk.WalkState>;
				public getRoot(): java.io.File;
				public constructor(param0: java.io.File);
				public step(): java.io.File;
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
			public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			public static valueOf(param0: string): kotlin.io.FileWalkDirection;
			public static values(): kotlin.io.FileWalkDirection[];
		}
	}
}

declare module kotlin {
	export module io {
		export class FilesKt extends kotlin.io.FilesKt__UtilsKt {
			public static class: java.lang.Class<kotlin.io.FilesKt>;
		}
	}
}

declare module kotlin {
	export module io {
		export class FilesKt__FilePathComponentsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.io.FilesKt__FilePathComponentsKt>;
			public static subPath(param0: java.io.File, param1: number, param2: number): java.io.File;
			public static isRooted(param0: java.io.File): boolean;
			public static getRoot(param0: java.io.File): java.io.File;
			public static toComponents(param0: java.io.File): kotlin.io.FilePathComponents;
			public constructor();
			public static getRootName(param0: java.io.File): string;
		}
	}
}

declare module kotlin {
	export module io {
		export class FilesKt__FileReadWriteKt extends kotlin.io.FilesKt__FilePathComponentsKt {
			public static class: java.lang.Class<kotlin.io.FilesKt__FileReadWriteKt>;
			public static writeText(param0: java.io.File, param1: string, param2: java.nio.charset.Charset): void;
			public static useLines(param0: java.io.File, param1: java.nio.charset.Charset, param2: kotlin.jvm.functions.Function1<any,any>): any;
			public static appendBytes(param0: java.io.File, param1: number[]): void;
			public static readText(param0: java.io.File, param1: java.nio.charset.Charset): string;
			public static appendText(param0: java.io.File, param1: string, param2: java.nio.charset.Charset): void;
			public constructor();
			public static readBytes(param0: java.io.File): number[];
			public static forEachBlock(param0: java.io.File, param1: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
			public static forEachBlock(param0: java.io.File, param1: number, param2: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
			public static readLines(param0: java.io.File, param1: java.nio.charset.Charset): java.util.List<string>;
			public static writeBytes(param0: java.io.File, param1: number[]): void;
			public static forEachLine(param0: java.io.File, param1: java.nio.charset.Charset, param2: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
		}
	}
}

declare module kotlin {
	export module io {
		export class FilesKt__FileTreeWalkKt extends kotlin.io.FilesKt__FileReadWriteKt {
			public static class: java.lang.Class<kotlin.io.FilesKt__FileTreeWalkKt>;
			public static walkBottomUp(param0: java.io.File): kotlin.io.FileTreeWalk;
			public static walkTopDown(param0: java.io.File): kotlin.io.FileTreeWalk;
			public static walk(param0: java.io.File, param1: kotlin.io.FileWalkDirection): kotlin.io.FileTreeWalk;
			public constructor();
		}
	}
}

declare module kotlin {
	export module io {
		export class FilesKt__UtilsKt extends kotlin.io.FilesKt__FileTreeWalkKt {
			public static class: java.lang.Class<kotlin.io.FilesKt__UtilsKt>;
			public static copyTo(param0: java.io.File, param1: java.io.File, param2: boolean, param3: number): java.io.File;
			public static getExtension(param0: java.io.File): string;
			public static startsWith(param0: java.io.File, param1: java.io.File): boolean;
			public static relativeToOrSelf(param0: java.io.File, param1: java.io.File): java.io.File;
			public static relativeTo(param0: java.io.File, param1: java.io.File): java.io.File;
			public constructor();
			public static toRelativeString(param0: java.io.File, param1: java.io.File): string;
			public static getNameWithoutExtension(param0: java.io.File): string;
			public static copyRecursively(param0: java.io.File, param1: java.io.File, param2: boolean, param3: kotlin.jvm.functions.Function2<any,any,any>): boolean;
			public static getInvariantSeparatorsPath(param0: java.io.File): string;
			public static relativeToOrNull(param0: java.io.File, param1: java.io.File): java.io.File;
			public static resolve(param0: java.io.File, param1: string): java.io.File;
			/** @deprecated */
			public static createTempDir(param0: string, param1: string, param2: java.io.File): java.io.File;
			public static startsWith(param0: java.io.File, param1: string): boolean;
			public static endsWith(param0: java.io.File, param1: string): boolean;
			public static deleteRecursively(param0: java.io.File): boolean;
			public static normalize(param0: java.io.File): java.io.File;
			public static resolveSibling(param0: java.io.File, param1: java.io.File): java.io.File;
			public static resolve(param0: java.io.File, param1: java.io.File): java.io.File;
			public static resolveSibling(param0: java.io.File, param1: string): java.io.File;
			public static endsWith(param0: java.io.File, param1: java.io.File): boolean;
			/** @deprecated */
			public static createTempFile(param0: string, param1: string, param2: java.io.File): java.io.File;
		}
	}
}

declare module kotlin {
	export module io {
		export class LineReader extends java.lang.Object {
			public static class: java.lang.Class<kotlin.io.LineReader>;
			public static INSTANCE: kotlin.io.LineReader;
			public readLine(param0: java.io.InputStream, param1: java.nio.charset.Charset): string;
		}
	}
}

declare module kotlin {
	export module io {
		export class LinesSequence extends kotlin.sequences.Sequence<string> {
			public static class: java.lang.Class<kotlin.io.LinesSequence>;
			public constructor(param0: java.io.BufferedReader);
			public iterator(): java.util.Iterator<string>;
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module io {
		export class NoSuchFileException extends kotlin.io.FileSystemException {
			public static class: java.lang.Class<kotlin.io.NoSuchFileException>;
			public constructor(param0: java.io.File, param1: java.io.File, param2: string);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public constructor();
			public constructor(param0: string);
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
			public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			public static valueOf(param0: string): kotlin.io.OnErrorAction;
		}
	}
}

declare module kotlin {
	export module io {
		export class SerializableKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.io.SerializableKt>;
		}
	}
}

declare module kotlin {
	export module io {
		export class TerminateException extends kotlin.io.FileSystemException {
			public static class: java.lang.Class<kotlin.io.TerminateException>;
			public constructor(param0: java.io.File, param1: java.io.File, param2: string);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public constructor(param0: java.io.File);
			public constructor();
			public constructor(param0: string);
		}
	}
}

declare module kotlin {
	export module io {
		export class TextStreamsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.io.TextStreamsKt>;
			public static forEachLine(param0: java.io.Reader, param1: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
			public static readBytes(param0: java.net.URL): number[];
			public static readText(param0: java.io.Reader): string;
			public static lineSequence(param0: java.io.BufferedReader): kotlin.sequences.Sequence<string>;
			public static copyTo(param0: java.io.Reader, param1: java.io.Writer, param2: number): number;
			public static readLines(param0: java.io.Reader): java.util.List<string>;
			public static useLines(param0: java.io.Reader, param1: kotlin.jvm.functions.Function1<any,any>): any;
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
			export class PathRelativizer extends java.lang.Object {
				public static class: java.lang.Class<kotlin.io.path.PathRelativizer>;
				public static INSTANCE: kotlin.io.path.PathRelativizer;
				public tryRelativeTo(param0: java.nio.file.Path, param1: java.nio.file.Path): java.nio.file.Path;
			}
		}
	}
}

declare module kotlin {
	export module io {
		export module path {
			export class PathsKt extends kotlin.io.path.PathsKt__PathUtilsKt {
				public static class: java.lang.Class<kotlin.io.path.PathsKt>;
			}
		}
	}
}

declare module kotlin {
	export module io {
		export module path {
			export class PathsKt__PathReadWriteKt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.io.path.PathsKt__PathReadWriteKt>;
				public static appendText(param0: java.nio.file.Path, param1: string, param2: java.nio.charset.Charset): void;
				public static writeText(param0: java.nio.file.Path, param1: string, param2: java.nio.charset.Charset, param3: java.nio.file.OpenOption[]): void;
				public static readText(param0: java.nio.file.Path, param1: java.nio.charset.Charset): string;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module io {
		export module path {
			export class PathsKt__PathUtilsKt extends kotlin.io.path.PathsKt__PathReadWriteKt {
				public static class: java.lang.Class<kotlin.io.path.PathsKt__PathUtilsKt>;
				public static listDirectoryEntries(param0: java.nio.file.Path, param1: string): java.util.List<java.nio.file.Path>;
				public static relativeTo(param0: java.nio.file.Path, param1: java.nio.file.Path): java.nio.file.Path;
				public static relativeToOrSelf(param0: java.nio.file.Path, param1: java.nio.file.Path): java.nio.file.Path;
				public static getExtension(param0: java.nio.file.Path): string;
				public static fileAttributeViewNotAvailable(param0: java.nio.file.Path, param1: java.lang.Class<any>): java.lang.Void;
				public static createTempFile(param0: java.nio.file.Path, param1: string, param2: string, param3: java.nio.file.attribute.FileAttribute<any[]>): java.nio.file.Path;
				public static getInvariantSeparatorsPathString(param0: java.nio.file.Path): string;
				public static relativeToOrNull(param0: java.nio.file.Path, param1: java.nio.file.Path): java.nio.file.Path;
				public static getNameWithoutExtension(param0: java.nio.file.Path): string;
				public static getName(param0: java.nio.file.Path): string;
				public static createTempDirectory(param0: java.nio.file.Path, param1: string, param2: java.nio.file.attribute.FileAttribute<any[]>): java.nio.file.Path;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jdk7 {
		export class AutoCloseableKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.jdk7.AutoCloseableKt>;
			public static closeFinally(param0: java.lang.AutoCloseable, param1: java.lang.Throwable): void;
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
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmClassMappingKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.jvm.JvmClassMappingKt>;
			public static getJavaPrimitiveType(param0: kotlin.reflect.KClass<any>): java.lang.Class<any>;
			public static getJavaClass(param0: any): java.lang.Class<any>;
			public static getJavaObjectType(param0: kotlin.reflect.KClass<any>): java.lang.Class<any>;
			public static getKotlinClass(param0: java.lang.Class<any>): kotlin.reflect.KClass<any>;
			/** @deprecated */
			public static getRuntimeClassOfKClassInstance(param0: kotlin.reflect.KClass<any>): java.lang.Class<any>;
			public static getJavaClass(param0: kotlin.reflect.KClass<any>): java.lang.Class<any>;
			public static getAnnotationClass(param0: java.lang.annotation.Annotation): kotlin.reflect.KClass<any>;
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
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class KotlinReflectionNotSupportedError extends java.lang.Error {
			public static class: java.lang.Class<kotlin.jvm.KotlinReflectionNotSupportedError>;
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			public constructor();
			public constructor(param0: string);
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
				exceptionClasses(): java.lang.Class<any[]>;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public exceptionClasses(): java.lang.Class<any[]>;
			public toString(): string;
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
					invoke(param0: any[]): R;
					getArity(): number;
					getArity(): number;
				});
				public constructor();
				public getArity(): number;
				public invoke(param0: any[]): R;
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
				public constructor(param0: number, param1: java.lang.Class<any>, param2: string, param3: string, param4: number);
				public constructor(param0: number, param1: any, param2: java.lang.Class<any>, param3: string, param4: string, param5: number);
				public hashCode(): number;
				public getArity(): number;
				public equals(param0: any): boolean;
				public getOwner(): kotlin.reflect.KDeclarationContainer;
				public toString(): string;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayBooleanIterator extends kotlin.collections.BooleanIterator {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayBooleanIterator>;
				public constructor(param0: boolean[]);
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
				public constructor(param0: number[]);
				public nextByte(): number;
				public hasNext(): boolean;
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
				public hasNext(): boolean;
				public constructor(param0: string[]);
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
				public constructor(param0: number[]);
				public hasNext(): boolean;
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
				public constructor(param0: number[]);
				public nextFloat(): number;
				public hasNext(): boolean;
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
				public constructor(param0: number[]);
				public hasNext(): boolean;
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
				public getArray(): T[];
				public remove(): void;
				public next(): T;
				public constructor(param0: T[]);
				public hasNext(): boolean;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayIteratorKt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayIteratorKt>;
				public static iterator(param0: any[]): java.util.Iterator<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayIteratorsKt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.ArrayIteratorsKt>;
				public static iterator(param0: string[]): kotlin.collections.CharIterator;
				public static iterator(param0: number[]): kotlin.collections.ShortIterator;
				public static iterator(param0: number[]): kotlin.collections.IntIterator;
				public static iterator(param0: boolean[]): kotlin.collections.BooleanIterator;
				public static iterator(param0: number[]): kotlin.collections.FloatIterator;
				public static iterator(param0: number[]): kotlin.collections.ByteIterator;
				public static iterator(param0: number[]): kotlin.collections.LongIterator;
				public static iterator(param0: number[]): kotlin.collections.DoubleIterator;
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
				public constructor(param0: number[]);
				public hasNext(): boolean;
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
				public constructor(param0: number[]);
				public nextShort(): number;
				public hasNext(): boolean;
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
				public toArray(param0: any, param1: any): any;
				public getSize(param0: boolean[]): number;
				public toArray(): boolean[];
				public constructor(param0: number);
				public getSize(param0: any): number;
				public add(param0: boolean): void;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ByteCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.ByteCompanionObject>;
				public static MIN_VALUE: number;
				public static MAX_VALUE: number;
				public static SIZE_BYTES: number;
				public static SIZE_BITS: number;
				public static INSTANCE: kotlin.jvm.internal.ByteCompanionObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ByteSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder<number[]> {
				public static class: java.lang.Class<kotlin.jvm.internal.ByteSpreadBuilder>;
				public toArray(param0: any, param1: any): any;
				public add(param0: number): void;
				public constructor(param0: number);
				public getSize(param0: number[]): number;
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
				public compute(): kotlin.reflect.KCallable<any>;
				public call(param0: any[]): any;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: boolean);
				public isOpen(): boolean;
				public getOwner(): kotlin.reflect.KDeclarationContainer;
				public getReflected(): kotlin.reflect.KCallable<any>;
				public isSuspend(): boolean;
				public constructor(param0: any);
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
				public callBy(param0: java.util.Map<any, any>): any;
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
				public static INSTANCE: kotlin.jvm.internal.CharCompanionObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class CharSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder<string[]> {
				public static class: java.lang.Class<kotlin.jvm.internal.CharSpreadBuilder>;
				public toArray(param0: any, param1: any): any;
				public getSize(param0: string[]): number;
				public toArray(): string[];
				public constructor(param0: number);
				public getSize(param0: any): number;
				public add(param0: string): void;
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
				public static Companion: kotlin.jvm.internal.ClassReference.Companion;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getJClass(): java.lang.Class<any>;
				public constructor(param0: java.lang.Class<any>);
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public isFinal(): boolean;
				public isInner(): boolean;
				public isCompanion(): boolean;
				public getQualifiedName(): string;
				public getObjectInstance(): any;
				public getSupertypes(): java.util.List<kotlin.reflect.KType>;
				public getConstructors(): java.util.Collection<kotlin.reflect.KFunction<any>>;
				public getSimpleName(): string;
				public isData(): boolean;
				public getMembers(): java.util.Collection<kotlin.reflect.KCallable<any>>;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public isSealed(): boolean;
				public isInstance(param0: any): boolean;
				public isAbstract(): boolean;
				public isFun(): boolean;
				public getNestedClasses(): java.util.Collection<kotlin.reflect.KClass<any>>;
				public isValue(): boolean;
				public toString(): string;
				public getSealedSubclasses(): java.util.List<kotlin.reflect.KClass<any>>;
				public isOpen(): boolean;
			}
			export module ClassReference {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kotlin.jvm.internal.ClassReference.Companion>;
					public getClassSimpleName(param0: java.lang.Class<any>): string;
					public getClassQualifiedName(param0: java.lang.Class<any>): string;
					public isInstance(param0: any, param1: java.lang.Class<any>): boolean;
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
				public static toArray(param0: java.util.Collection<any>, param1: any[]): any[];
				public static toArray(param0: java.util.Collection<any>): any[];
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
				public static MIN_VALUE: number;
				public static MAX_VALUE: number;
				public static POSITIVE_INFINITY: number;
				public static NEGATIVE_INFINITY: number;
				public static NaN: number;
				public static SIZE_BYTES: number;
				public static SIZE_BITS: number;
				public static INSTANCE: kotlin.jvm.internal.DoubleCompanionObject;
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
				public toArray(param0: any, param1: any): any;
				public add(param0: number): void;
				public constructor(param0: number);
				public getSize(param0: number[]): number;
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
				public static MIN_VALUE: number;
				public static MAX_VALUE: number;
				public static POSITIVE_INFINITY: number;
				public static NEGATIVE_INFINITY: number;
				public static NaN: number;
				public static SIZE_BYTES: number;
				public static SIZE_BITS: number;
				public static INSTANCE: kotlin.jvm.internal.FloatCompanionObject;
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
				public toArray(param0: any, param1: any): any;
				public add(param0: number): void;
				public constructor(param0: number);
				public getSize(param0: number[]): number;
				public toArray(): number[];
				public getSize(param0: any): number;
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
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any, param18: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any): any;
				public getArity(): number;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any): any;
				public invoke(param0: any, param1: any, param2: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any, param18: any, param19: any, param20: any): any;
				public constructor();
				public invoke(param0: any, param1: any, param2: any, param3: any): any;
				public invoke(): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any, param18: any, param19: any, param20: any, param21: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any, param16: any, param17: any, param18: any, param19: any): any;
				public invoke(param0: any, param1: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any, param12: any, param13: any, param14: any, param15: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any): any;
				public invoke(param0: any): any;
				public invoke(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): any;
				public invokeVararg(param0: any[]): any;
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
				public getVisibility(): kotlin.reflect.KVisibility;
				public isInline(): boolean;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getArity(): number;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public constructor();
				public isExternal(): boolean;
				public constructor(param0: number, param1: any, param2: java.lang.Class<any>, param3: string, param4: string, param5: number);
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public hashCode(): number;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: boolean);
				public equals(param0: any): boolean;
				public getReflected(): kotlin.reflect.KCallable<any>;
				public getReflected(): kotlin.reflect.KFunction<any>;
				public callBy(param0: java.util.Map<any, any>): any;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public getName(): string;
				public toString(): string;
				public isInfix(): boolean;
				public constructor(param0: number, param1: any);
				public call(param0: any[]): any;
				public isOpen(): boolean;
				public constructor(param0: number);
				public isSuspend(): boolean;
				public constructor(param0: any);
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
				public constructor(param0: number, param1: java.lang.Class<any>, param2: string, param3: string, param4: number);
				public getVisibility(): kotlin.reflect.KVisibility;
				public isInline(): boolean;
				public isFinal(): boolean;
				public getArity(): number;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public constructor();
				public isExternal(): boolean;
				public constructor(param0: number, param1: any, param2: java.lang.Class<any>, param3: string, param4: string, param5: number);
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public constructor(param0: number, param1: kotlin.reflect.KDeclarationContainer, param2: string, param3: string);
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: boolean);
				public callBy(param0: java.util.Map<any, any>): any;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public getName(): string;
				public isInfix(): boolean;
				public constructor(param0: number, param1: any);
				public call(param0: any[]): any;
				public isOpen(): boolean;
				public constructor(param0: number);
				public isSuspend(): boolean;
				public constructor(param0: any);
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
				public static mark(param0: string): void;
				public static beforeInlineCall(): void;
				public static finallyEnd(param0: number): void;
				public static afterInlineCall(): void;
				public constructor();
				public static mark(param0: number): void;
				public static finallyStart(param0: number): void;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class IntCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.IntCompanionObject>;
				public static MIN_VALUE: number;
				public static MAX_VALUE: number;
				public static SIZE_BYTES: number;
				public static SIZE_BITS: number;
				public static INSTANCE: kotlin.jvm.internal.IntCompanionObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class IntSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder<number[]> {
				public static class: java.lang.Class<kotlin.jvm.internal.IntSpreadBuilder>;
				public toArray(param0: any, param1: any): any;
				public add(param0: number): void;
				public constructor(param0: number);
				public getSize(param0: number[]): number;
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
				public static throwIllegalState(param0: string): void;
				public static checkParameterIsNotNull(param0: any, param1: string): void;
				public static checkReturnedValueIsNotNull(param0: any, param1: string, param2: string): void;
				public static checkHasClass(param0: string, param1: string): void;
				public static checkNotNull(param0: any, param1: string): void;
				public static throwUndefinedForReified(): void;
				public static throwIllegalArgument(): void;
				public static checkExpressionValueIsNotNull(param0: any, param1: string): void;
				public static areEqual(param0: java.lang.Float, param1: java.lang.Float): boolean;
				public static needClassReification(): void;
				public static checkNotNull(param0: any): void;
				public static throwNpe(param0: string): void;
				public static areEqual(param0: java.lang.Float, param1: number): boolean;
				public static checkNotNullExpressionValue(param0: any, param1: string): void;
				public static throwAssert(): void;
				public static throwIllegalArgument(param0: string): void;
				public static checkReturnedValueIsNotNull(param0: any, param1: string): void;
				public static checkHasClass(param0: string): void;
				public static throwAssert(param0: string): void;
				public static throwUninitializedProperty(param0: string): void;
				public static areEqual(param0: any, param1: any): boolean;
				public static checkNotNullParameter(param0: any, param1: string): void;
				public static areEqual(param0: java.lang.Double, param1: number): boolean;
				public static reifiedOperationMarker(param0: number, param1: string, param2: string): void;
				public static needClassReification(param0: string): void;
				public static throwNpe(): void;
				public static stringPlus(param0: string, param1: any): string;
				public static throwJavaNpe(param0: string): void;
				public static checkFieldIsNotNull(param0: any, param1: string, param2: string): void;
				public static areEqual(param0: number, param1: java.lang.Float): boolean;
				public static reifiedOperationMarker(param0: number, param1: string): void;
				public static throwIllegalState(): void;
				public static checkFieldIsNotNull(param0: any, param1: string): void;
				public static throwUndefinedForReified(param0: string): void;
				public static areEqual(param0: number, param1: java.lang.Double): boolean;
				public static areEqual(param0: java.lang.Double, param1: java.lang.Double): boolean;
				public static throwJavaNpe(): void;
				public static compare(param0: number, param1: number): number;
				public static throwUninitializedPropertyAccessException(param0: string): void;
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
				public getArity(): number;
				public constructor(param0: number);
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
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isFinal(): boolean;
				public isLateinit(): boolean;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public constructor();
				public call(param0: any[]): any;
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: boolean);
				public isOpen(): boolean;
				public getOwner(): kotlin.reflect.KDeclarationContainer;
				public getDelegate(): any;
				public get(): any;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: number);
				public isSuspend(): boolean;
				public constructor(param0: any);
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
				public callBy(param0: java.util.Map<any, any>): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class LocalVariableReferencesKt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.LocalVariableReferencesKt>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class LongCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.LongCompanionObject>;
				public static MIN_VALUE: number;
				public static MAX_VALUE: number;
				public static SIZE_BYTES: number;
				public static SIZE_BITS: number;
				public static INSTANCE: kotlin.jvm.internal.LongCompanionObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class LongSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder<number[]> {
				public static class: java.lang.Class<kotlin.jvm.internal.LongSpreadBuilder>;
				public toArray(param0: any, param1: any): any;
				public add(param0: number): void;
				public constructor(param0: number);
				public getSize(param0: number[]): number;
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
				public static voidMagicApiCall(param0: number): void;
				public static voidMagicApiCall(param0: any): void;
				public static anyMagicApiCall(param0: number, param1: number, param2: number, param3: any): any;
				public static anyMagicApiCall(param0: number, param1: any, param2: any): any;
				public static anyMagicApiCall(param0: any): any;
				public constructor();
				public static anyMagicApiCall(param0: number): any;
				public static intMagicApiCall(param0: number, param1: number, param2: number, param3: any): number;
				public static intMagicApiCall(param0: number, param1: any, param2: any, param3: any, param4: any): number;
				public static intMagicApiCall(param0: any): number;
				public static intMagicApiCall(param0: number, param1: number, param2: any): number;
				public static anyMagicApiCall(param0: number, param1: any, param2: any, param3: any, param4: any): any;
				public static intMagicApiCall(param0: number): number;
				public static intMagicApiCall(param0: number, param1: any, param2: any): number;
				public static anyMagicApiCall(param0: number, param1: number, param2: any): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class MutableLocalVariableReference extends kotlin.jvm.internal.MutablePropertyReference0 {
				public static class: java.lang.Class<kotlin.jvm.internal.MutableLocalVariableReference>;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor();
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: boolean);
				public callBy(param0: java.util.Map<any, any>): any;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public set(param0: any): void;
				public isLateinit(): boolean;
				public getName(): string;
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public getSetter(): kotlin.reflect.KMutableProperty0.Setter<any>;
				public call(param0: any[]): any;
				public isOpen(): boolean;
				public getOwner(): kotlin.reflect.KDeclarationContainer;
				public getSetter(): kotlin.reflect.KMutableProperty0.Setter<any>;
				public get(): any;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: number);
				public isSuspend(): boolean;
				public constructor(param0: any);
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
				public constructor();
				public call(param0: any[]): any;
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: boolean);
				public isOpen(): boolean;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: number);
				public isSuspend(): boolean;
				public constructor(param0: any);
				public getParameters(): java.util.List<kotlin.reflect.KParameter>;
				public callBy(param0: java.util.Map<any, any>): any;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class MutablePropertyReference0 extends kotlin.jvm.internal.MutablePropertyReference implements kotlin.reflect.KMutableProperty0<any> {
				public static class: java.lang.Class<kotlin.jvm.internal.MutablePropertyReference0>;
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor();
				public invoke(): any;
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: boolean);
				public callBy(param0: java.util.Map<any, any>): any;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public set(param0: any): void;
				public isLateinit(): boolean;
				public getName(): string;
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public getSetter(): kotlin.reflect.KMutableProperty0.Setter<any>;
				public call(param0: any[]): any;
				public isOpen(): boolean;
				public getDelegate(): any;
				public getSetter(): kotlin.reflect.KMutableProperty0.Setter<any>;
				public get(): any;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: number);
				public isSuspend(): boolean;
				public constructor(param0: any);
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
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public constructor(param0: java.lang.Class<any>, param1: string, param2: string, param3: number);
				public getReturnType(): kotlin.reflect.KType;
				public constructor();
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: boolean);
				public callBy(param0: java.util.Map<any, any>): any;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public set(param0: any): void;
				public isLateinit(): boolean;
				public getName(): string;
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public getSetter(): kotlin.reflect.KMutableProperty0.Setter<any>;
				public call(param0: any[]): any;
				public constructor(param0: kotlin.reflect.KDeclarationContainer, param1: string, param2: string);
				public isOpen(): boolean;
				public getSetter(): kotlin.reflect.KMutableProperty0.Setter<any>;
				public get(): any;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: number);
				public isSuspend(): boolean;
				public constructor(param0: any);
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
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public get(param0: any): any;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor();
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public getGetter(): kotlin.reflect.KProperty1.Getter<any,any>;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: boolean);
				public getSetter(): kotlin.reflect.KMutableProperty1.Setter<any,any>;
				public callBy(param0: java.util.Map<any, any>): any;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public set(param0: any, param1: any): void;
				public isLateinit(): boolean;
				public getName(): string;
				public getGetter(): kotlin.reflect.KProperty1.Getter<any,any>;
				public invoke(param0: any): any;
				public call(param0: any[]): any;
				public isOpen(): boolean;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: number);
				public isSuspend(): boolean;
				public constructor(param0: any);
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
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public get(param0: any): any;
				public isFinal(): boolean;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public constructor(param0: java.lang.Class<any>, param1: string, param2: string, param3: number);
				public getReturnType(): kotlin.reflect.KType;
				public constructor();
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public getGetter(): kotlin.reflect.KProperty1.Getter<any,any>;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: boolean);
				public getSetter(): kotlin.reflect.KMutableProperty1.Setter<any,any>;
				public callBy(param0: java.util.Map<any, any>): any;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public set(param0: any, param1: any): void;
				public isLateinit(): boolean;
				public getName(): string;
				public call(param0: any[]): any;
				public constructor(param0: kotlin.reflect.KDeclarationContainer, param1: string, param2: string);
				public isOpen(): boolean;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: number);
				public isSuspend(): boolean;
				public constructor(param0: any);
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
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public getDelegate(param0: any, param1: any): any;
				public constructor(param0: java.lang.Class<any>, param1: string, param2: string, param3: number);
				public getSetter(): kotlin.reflect.KMutableProperty2.Setter<any,any,any>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor();
				public get(param0: any, param1: any): any;
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: boolean);
				public getGetter(): kotlin.reflect.KProperty2.Getter<any,any,any>;
				public callBy(param0: java.util.Map<any, any>): any;
				public isAbstract(): boolean;
				public invoke(param0: any, param1: any): any;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public getGetter(): kotlin.reflect.KProperty2.Getter<any,any,any>;
				public isLateinit(): boolean;
				public getName(): string;
				public call(param0: any[]): any;
				public isOpen(): boolean;
				public getSetter(): kotlin.reflect.KMutableProperty2.Setter<any,any,any>;
				public set(param0: any, param1: any, param2: any): void;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: number);
				public isSuspend(): boolean;
				public constructor(param0: any);
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
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
				public constructor(param0: java.lang.Class<any>, param1: string, param2: string, param3: number);
				public getSetter(): kotlin.reflect.KMutableProperty2.Setter<any,any,any>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor();
				public get(param0: any, param1: any): any;
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: boolean);
				public getGetter(): kotlin.reflect.KProperty2.Getter<any,any,any>;
				public callBy(param0: java.util.Map<any, any>): any;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isLateinit(): boolean;
				public getName(): string;
				public call(param0: any[]): any;
				public constructor(param0: kotlin.reflect.KDeclarationContainer, param1: string, param2: string);
				public isOpen(): boolean;
				public getSetter(): kotlin.reflect.KMutableProperty2.Setter<any,any,any>;
				public set(param0: any, param1: any, param2: any): void;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: number);
				public isSuspend(): boolean;
				public constructor(param0: any);
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
				public hashCode(): number;
				public constructor(param0: java.lang.Class<any>, param1: string);
				public equals(param0: any): boolean;
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
				public toArray(param0: T, param1: T): T;
				public constructor(param0: number);
				public getPosition(): number;
				public addSpread(param0: T): void;
				public setPosition(param0: number): void;
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
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor();
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public hashCode(): number;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: boolean);
				public equals(param0: any): boolean;
				public getReflected(): kotlin.reflect.KCallable<any>;
				public callBy(param0: java.util.Map<any, any>): any;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public getReflected(): kotlin.reflect.KProperty<any>;
				public isLateinit(): boolean;
				public getName(): string;
				public toString(): string;
				public call(param0: any[]): any;
				public isOpen(): boolean;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: number);
				public isSuspend(): boolean;
				public constructor(param0: any);
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
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor();
				public invoke(): any;
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: boolean);
				public callBy(param0: java.util.Map<any, any>): any;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isLateinit(): boolean;
				public getName(): string;
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public call(param0: any[]): any;
				public isOpen(): boolean;
				public getDelegate(): any;
				public get(): any;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: number);
				public isSuspend(): boolean;
				public constructor(param0: any);
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
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public constructor(param0: java.lang.Class<any>, param1: string, param2: string, param3: number);
				public getReturnType(): kotlin.reflect.KType;
				public constructor();
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: boolean);
				public callBy(param0: java.util.Map<any, any>): any;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isLateinit(): boolean;
				public getName(): string;
				public getGetter(): kotlin.reflect.KProperty0.Getter<any>;
				public call(param0: any[]): any;
				public constructor(param0: kotlin.reflect.KDeclarationContainer, param1: string, param2: string);
				public isOpen(): boolean;
				public getDelegate(): any;
				public get(): any;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: number);
				public isSuspend(): boolean;
				public constructor(param0: any);
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
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public get(param0: any): any;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getReturnType(): kotlin.reflect.KType;
				public constructor();
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public getGetter(): kotlin.reflect.KProperty1.Getter<any,any>;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: boolean);
				public callBy(param0: java.util.Map<any, any>): any;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isLateinit(): boolean;
				public getName(): string;
				public getGetter(): kotlin.reflect.KProperty1.Getter<any,any>;
				public invoke(param0: any): any;
				public call(param0: any[]): any;
				public isOpen(): boolean;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: number);
				public isSuspend(): boolean;
				public constructor(param0: any);
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
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public get(param0: any): any;
				public isFinal(): boolean;
				public constructor(param0: java.lang.Class<any>, param1: string, param2: string, param3: number);
				public getReturnType(): kotlin.reflect.KType;
				public constructor();
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public getGetter(): kotlin.reflect.KProperty1.Getter<any,any>;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: boolean);
				public callBy(param0: java.util.Map<any, any>): any;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public isLateinit(): boolean;
				public getName(): string;
				public getGetter(): kotlin.reflect.KProperty1.Getter<any,any>;
				public call(param0: any[]): any;
				public constructor(param0: kotlin.reflect.KDeclarationContainer, param1: string, param2: string);
				public isOpen(): boolean;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: number);
				public isSuspend(): boolean;
				public constructor(param0: any);
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
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getDelegate(param0: any, param1: any): any;
				public constructor(param0: java.lang.Class<any>, param1: string, param2: string, param3: number);
				public getReturnType(): kotlin.reflect.KType;
				public constructor();
				public get(param0: any, param1: any): any;
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: boolean);
				public getGetter(): kotlin.reflect.KProperty2.Getter<any,any,any>;
				public callBy(param0: java.util.Map<any, any>): any;
				public isAbstract(): boolean;
				public invoke(param0: any, param1: any): any;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public getGetter(): kotlin.reflect.KProperty2.Getter<any,any,any>;
				public isLateinit(): boolean;
				public getName(): string;
				public call(param0: any[]): any;
				public isOpen(): boolean;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: number);
				public isSuspend(): boolean;
				public constructor(param0: any);
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
				public getVisibility(): kotlin.reflect.KVisibility;
				public getGetter(): kotlin.reflect.KProperty.Getter<any>;
				public isFinal(): boolean;
				public getDelegate(param0: any, param1: any): any;
				public constructor(param0: java.lang.Class<any>, param1: string, param2: string, param3: number);
				public getReturnType(): kotlin.reflect.KType;
				public constructor();
				public get(param0: any, param1: any): any;
				public isConst(): boolean;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: boolean);
				public getGetter(): kotlin.reflect.KProperty2.Getter<any,any,any>;
				public callBy(param0: java.util.Map<any, any>): any;
				public isAbstract(): boolean;
				public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
				public getGetter(): kotlin.reflect.KProperty2.Getter<any,any,any>;
				public isLateinit(): boolean;
				public getName(): string;
				public call(param0: any[]): any;
				public constructor(param0: kotlin.reflect.KDeclarationContainer, param1: string, param2: string);
				public isOpen(): boolean;
				public constructor(param0: any, param1: java.lang.Class<any>, param2: string, param3: string, param4: number);
				public isSuspend(): boolean;
				public constructor(param0: any);
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
				public static typeOf(param0: java.lang.Class<any>): kotlin.reflect.KType;
				public static nullableTypeOf(param0: java.lang.Class<any>, param1: kotlin.reflect.KTypeProjection): kotlin.reflect.KType;
				public static getOrCreateKotlinClass(param0: java.lang.Class<any>): kotlin.reflect.KClass<any>;
				public static typeOf(param0: kotlin.reflect.KClassifier): kotlin.reflect.KType;
				public static getOrCreateKotlinClasses(param0: java.lang.Class<any>[]): kotlin.reflect.KClass<any[]>;
				public static mutableProperty0(param0: kotlin.jvm.internal.MutablePropertyReference0): kotlin.reflect.KMutableProperty0<any>;
				public static nullableTypeOf(param0: java.lang.Class<any>, param1: kotlin.reflect.KTypeProjection, param2: kotlin.reflect.KTypeProjection): kotlin.reflect.KType;
				public static nullableTypeOf(param0: java.lang.Class<any>, param1: kotlin.reflect.KTypeProjection[]): kotlin.reflect.KType;
				public constructor();
				public static getOrCreateKotlinPackage(param0: java.lang.Class<any>): kotlin.reflect.KDeclarationContainer;
				public static getOrCreateKotlinPackage(param0: java.lang.Class<any>, param1: string): kotlin.reflect.KDeclarationContainer;
				public static mutableProperty1(param0: kotlin.jvm.internal.MutablePropertyReference1): kotlin.reflect.KMutableProperty1<any,any>;
				public static typeParameter(param0: any, param1: string, param2: kotlin.reflect.KVariance, param3: boolean): kotlin.reflect.KTypeParameter;
				public static typeOf(param0: java.lang.Class<any>, param1: kotlin.reflect.KTypeProjection): kotlin.reflect.KType;
				public static getOrCreateKotlinClass(param0: java.lang.Class<any>, param1: string): kotlin.reflect.KClass<any>;
				public static nullableTypeOf(param0: kotlin.reflect.KClassifier): kotlin.reflect.KType;
				public static createKotlinClass(param0: java.lang.Class<any>, param1: string): kotlin.reflect.KClass<any>;
				public static setUpperBounds(param0: kotlin.reflect.KTypeParameter, param1: kotlin.reflect.KType[]): void;
				public static mutableProperty2(param0: kotlin.jvm.internal.MutablePropertyReference2): kotlin.reflect.KMutableProperty2<any,any,any>;
				public static setUpperBounds(param0: kotlin.reflect.KTypeParameter, param1: kotlin.reflect.KType): void;
				public static renderLambdaToString(param0: kotlin.jvm.internal.FunctionBase<any>): string;
				public static typeOf(param0: java.lang.Class<any>, param1: kotlin.reflect.KTypeProjection, param2: kotlin.reflect.KTypeProjection): kotlin.reflect.KType;
				public static typeOf(param0: java.lang.Class<any>, param1: kotlin.reflect.KTypeProjection[]): kotlin.reflect.KType;
				public static nullableTypeOf(param0: java.lang.Class<any>): kotlin.reflect.KType;
				public static property0(param0: kotlin.jvm.internal.PropertyReference0): kotlin.reflect.KProperty0<any>;
				public static renderLambdaToString(param0: kotlin.jvm.internal.Lambda<any>): string;
				public static createKotlinClass(param0: java.lang.Class<any>): kotlin.reflect.KClass<any>;
				public static property2(param0: kotlin.jvm.internal.PropertyReference2): kotlin.reflect.KProperty2<any,any,any>;
				public static function(param0: kotlin.jvm.internal.FunctionReference): kotlin.reflect.KFunction<any>;
				public static property1(param0: kotlin.jvm.internal.PropertyReference1): kotlin.reflect.KProperty1<any,any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ReflectionFactory extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.ReflectionFactory>;
				public createKotlinClass(param0: java.lang.Class<any>, param1: string): kotlin.reflect.KClass<any>;
				public property0(param0: kotlin.jvm.internal.PropertyReference0): kotlin.reflect.KProperty0<any>;
				public setUpperBounds(param0: kotlin.reflect.KTypeParameter, param1: java.util.List<kotlin.reflect.KType>): void;
				public renderLambdaToString(param0: kotlin.jvm.internal.Lambda<any>): string;
				public mutableProperty0(param0: kotlin.jvm.internal.MutablePropertyReference0): kotlin.reflect.KMutableProperty0<any>;
				public typeOf(param0: kotlin.reflect.KClassifier, param1: java.util.List<kotlin.reflect.KTypeProjection>, param2: boolean): kotlin.reflect.KType;
				public property1(param0: kotlin.jvm.internal.PropertyReference1): kotlin.reflect.KProperty1<any,any>;
				public property2(param0: kotlin.jvm.internal.PropertyReference2): kotlin.reflect.KProperty2<any,any,any>;
				public constructor();
				public renderLambdaToString(param0: kotlin.jvm.internal.FunctionBase<any>): string;
				public getOrCreateKotlinPackage(param0: java.lang.Class<any>, param1: string): kotlin.reflect.KDeclarationContainer;
				public getOrCreateKotlinClass(param0: java.lang.Class<any>, param1: string): kotlin.reflect.KClass<any>;
				public mutableProperty1(param0: kotlin.jvm.internal.MutablePropertyReference1): kotlin.reflect.KMutableProperty1<any,any>;
				public function(param0: kotlin.jvm.internal.FunctionReference): kotlin.reflect.KFunction<any>;
				public typeParameter(param0: any, param1: string, param2: kotlin.reflect.KVariance, param3: boolean): kotlin.reflect.KTypeParameter;
				public mutableProperty2(param0: kotlin.jvm.internal.MutablePropertyReference2): kotlin.reflect.KMutableProperty2<any,any,any>;
				public createKotlinClass(param0: java.lang.Class<any>): kotlin.reflect.KClass<any>;
				public getOrCreateKotlinClass(param0: java.lang.Class<any>): kotlin.reflect.KClass<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ShortCompanionObject extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.ShortCompanionObject>;
				public static MIN_VALUE: number;
				public static MAX_VALUE: number;
				public static SIZE_BYTES: number;
				public static SIZE_BITS: number;
				public static INSTANCE: kotlin.jvm.internal.ShortCompanionObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ShortSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder<number[]> {
				public static class: java.lang.Class<kotlin.jvm.internal.ShortSpreadBuilder>;
				public toArray(param0: any, param1: any): any;
				public add(param0: number): void;
				public constructor(param0: number);
				public getSize(param0: number[]): number;
				public toArray(): number[];
				public getSize(param0: any): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class SpreadBuilder extends java.lang.Object {
				public static class: java.lang.Class<kotlin.jvm.internal.SpreadBuilder>;
				public toArray(param0: any[]): any[];
				public constructor(param0: number);
				public add(param0: any): void;
				public addSpread(param0: any): void;
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
				public static isMutableIterator(param0: any): boolean;
				public static asMutableMap(param0: any): java.util.Map<any, any>;
				public static asMutableMap(param0: any, param1: string): java.util.Map<any, any>;
				public static isMutableMapEntry(param0: any): boolean;
				public static isMutableSet(param0: any): boolean;
				public static isFunctionOfArity(param0: any, param1: number): boolean;
				public constructor();
				public static castToMap(param0: any): java.util.Map<any, any>;
				public static isMutableCollection(param0: any): boolean;
				public static asMutableSet(param0: any): java.util.Set<any>;
				public static asMutableListIterator(param0: any): java.util.ListIterator<any>;
				public static castToIterable(param0: any): java.lang.Iterable<any>;
				public static castToSet(param0: any): java.util.Set<any>;
				public static isMutableList(param0: any): boolean;
				public static asMutableListIterator(param0: any, param1: string): java.util.ListIterator<any>;
				public static castToMapEntry(param0: any): java.util.Map.Entry<any, any>;
				public static asMutableMapEntry(param0: any, param1: string): java.util.Map.Entry<any, any>;
				public static asMutableIterator(param0: any, param1: string): java.util.Iterator<any>;
				public static asMutableList(param0: any, param1: string): java.util.List<any>;
				public static isMutableMap(param0: any): boolean;
				public static asMutableSet(param0: any, param1: string): java.util.Set<any>;
				public static castToList(param0: any): java.util.List<any>;
				public static getFunctionArity(param0: any): number;
				public static throwCce(param0: string): void;
				public static asMutableMapEntry(param0: any): java.util.Map.Entry<any, any>;
				public static asMutableCollection(param0: any): java.util.Collection<any>;
				public static beforeCheckcastToFunctionOfArity(param0: any, param1: number, param2: string): any;
				public static asMutableIterator(param0: any): java.util.Iterator<any>;
				public static castToListIterator(param0: any): java.util.ListIterator<any>;
				public static asMutableIterable(param0: any, param1: string): java.lang.Iterable<any>;
				public static throwCce(param0: java.lang.ClassCastException): java.lang.ClassCastException;
				public static asMutableCollection(param0: any, param1: string): java.util.Collection<any>;
				public static castToCollection(param0: any): java.util.Collection<any>;
				public static beforeCheckcastToFunctionOfArity(param0: any, param1: number): any;
				public static castToIterator(param0: any): java.util.Iterator<any>;
				public static isMutableIterable(param0: any): boolean;
				public static throwCce(param0: any, param1: string): void;
				public static asMutableIterable(param0: any): java.lang.Iterable<any>;
				public static isMutableListIterator(param0: any): boolean;
				public static asMutableList(param0: any): java.util.List<any>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class TypeParameterReference extends java.lang.Object implements kotlin.reflect.KTypeParameter {
				public static class: java.lang.Class<kotlin.jvm.internal.TypeParameterReference>;
				public static Companion: kotlin.jvm.internal.TypeParameterReference.Companion;
				public constructor(param0: any, param1: string, param2: kotlin.reflect.KVariance, param3: boolean);
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getName(): string;
				public getUpperBounds(): java.util.List<kotlin.reflect.KType>;
				public toString(): string;
				public isReified(): boolean;
				public getVariance(): kotlin.reflect.KVariance;
				public setUpperBounds(param0: java.util.List<any>): void;
			}
			export module TypeParameterReference {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<kotlin.jvm.internal.TypeParameterReference.Companion>;
					public toString(): string;
					public toString(param0: kotlin.reflect.KTypeParameter): string;
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
				public constructor(param0: kotlin.reflect.KClassifier, param1: java.util.List<kotlin.reflect.KTypeProjection>, param2: boolean);
				public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
				public getClassifier(): kotlin.reflect.KClassifier;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getArguments(): java.util.List<kotlin.reflect.KTypeProjection>;
				public toString(): string;
				public isMarkedNullable(): boolean;
			}
			export module TypeReference {
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
	export module jvm {
		export module internal {
			export module unsafe {
				export class MonitorKt extends java.lang.Object {
					public static class: java.lang.Class<kotlin.jvm.internal.unsafe.MonitorKt>;
				}
			}
		}
	}
}

declare module kotlin {
	export module math {
		export class Constants extends java.lang.Object {
			public static class: java.lang.Class<kotlin.math.Constants>;
			public static LN2: number;
			public static epsilon: number;
			public static taylor_2_bound: number;
			public static taylor_n_bound: number;
			public static upper_taylor_2_bound: number;
			public static upper_taylor_n_bound: number;
			public static INSTANCE: kotlin.math.Constants;
		}
	}
}

declare module kotlin {
	export module math {
		export class MathKt extends kotlin.math.MathKt__MathJVMKt {
			public static class: java.lang.Class<kotlin.math.MathKt>;
			public static E: number;
			public static PI: number;
		}
	}
}

declare module kotlin {
	export module math {
		export class MathKt__MathHKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.math.MathKt__MathHKt>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module math {
		export class MathKt__MathJVMKt extends kotlin.math.MathKt__MathHKt {
			public static class: java.lang.Class<kotlin.math.MathKt__MathJVMKt>;
			public static atanh(param0: number): number;
			public static asinh(param0: number): number;
			public static acosh(param0: number): number;
			public static log(param0: number, param1: number): number;
			public static truncate(param0: number): number;
			public static getSign(param0: number): number;
			public constructor();
			public static log2(param0: number): number;
			public static roundToInt(param0: number): number;
			public static roundToLong(param0: number): number;
		}
	}
}

declare module kotlin {
	export module math {
		export class UMathKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.math.UMathKt>;
		}
	}
}

declare module kotlin {
	export module properties {
		export class Delegates extends java.lang.Object {
			public static class: java.lang.Class<kotlin.properties.Delegates>;
			public static INSTANCE: kotlin.properties.Delegates;
			public observable(param0: any, param1: kotlin.jvm.functions.Function3<any,any,any,any>): kotlin.properties.ReadWriteProperty<any,any>;
			public vetoable(param0: any, param1: kotlin.jvm.functions.Function3<any,any,any,any>): kotlin.properties.ReadWriteProperty<any,any>;
			public notNull(): kotlin.properties.ReadWriteProperty<any,any>;
		}
	}
}

declare module kotlin {
	export module properties {
		export class NotNullVar<T>  extends kotlin.properties.ReadWriteProperty<any,any> {
			public static class: java.lang.Class<kotlin.properties.NotNullVar<any>>;
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
			public beforeChange(param0: kotlin.reflect.KProperty<any>, param1: any, param2: any): boolean;
			public getValue(param0: any, param1: kotlin.reflect.KProperty<any>): any;
			public afterChange(param0: kotlin.reflect.KProperty<any>, param1: any, param2: any): void;
			public constructor(param0: any);
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
			public nextInt(param0: number): number;
			public nextLong(param0: number, param1: number): number;
			public getImpl(): java.util.Random;
			public nextBoolean(): boolean;
			public nextInt(param0: number, param1: number): number;
			public constructor();
			public nextLong(): number;
			public nextDouble(param0: number, param1: number): number;
			public nextDouble(): number;
			public nextFloat(): number;
			public nextBits(param0: number): number;
			public nextLong(param0: number): number;
			public nextDouble(param0: number): number;
			public nextBytes(param0: number[], param1: number, param2: number): number[];
			public nextInt(): number;
			public nextBytes(param0: number): number[];
			public nextBytes(param0: number[]): number[];
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
			public nextInt(param0: number): number;
			public nextBoolean(): boolean;
			public nextBytes(param0: number[]): void;
			public setSeed(param0: number): void;
			public constructor(param0: kotlin.random.Random);
			public constructor(param0: number);
			public next(param0: number): number;
			public constructor();
			public nextLong(): number;
			public nextFloat(): number;
			public nextDouble(): number;
			public getImpl(): kotlin.random.Random;
			public nextInt(): number;
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
			public constructor(param0: java.util.Random);
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
		export class PlatformRandomKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.random.PlatformRandomKt>;
			public static asKotlinRandom(param0: java.util.Random): kotlin.random.Random;
			public static asJavaRandom(param0: kotlin.random.Random): java.util.Random;
			public static doubleFromParts(param0: number, param1: number): number;
		}
	}
}

declare module kotlin {
	export module random {
		export abstract class Random extends java.lang.Object {
			public static class: java.lang.Class<kotlin.random.Random>;
			public static Default: kotlin.random.Random.Default;
			public nextInt(param0: number): number;
			public nextLong(param0: number, param1: number): number;
			public nextBoolean(): boolean;
			public nextInt(param0: number, param1: number): number;
			public constructor();
			public nextLong(): number;
			public nextDouble(param0: number, param1: number): number;
			public nextDouble(): number;
			public nextFloat(): number;
			public nextBits(param0: number): number;
			public nextLong(param0: number): number;
			public nextDouble(param0: number): number;
			public nextBytes(param0: number[], param1: number, param2: number): number[];
			public nextInt(): number;
			public nextBytes(param0: number): number[];
			public nextBytes(param0: number[]): number[];
		}
		export module Random {
			export class Default extends kotlin.random.Random implements java.io.Serializable {
				public static class: java.lang.Class<kotlin.random.Random.Default>;
				public nextInt(param0: number): number;
				public nextDouble(param0: number): number;
				public nextBytes(param0: number[]): number[];
				public nextDouble(): number;
				public nextInt(): number;
				public nextLong(): number;
				public nextLong(param0: number): number;
				public nextBytes(param0: number[], param1: number, param2: number): number[];
				public nextBytes(param0: number): number[];
				public nextFloat(): number;
				public nextLong(param0: number, param1: number): number;
				public nextDouble(param0: number, param1: number): number;
				public nextBits(param0: number): number;
				public nextInt(param0: number, param1: number): number;
				public nextBoolean(): boolean;
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
		export class RandomKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.random.RandomKt>;
			public static nextInt(param0: kotlin.random.Random, param1: kotlin.ranges.IntRange): number;
			public static checkRangeBounds(param0: number, param1: number): void;
			public static nextLong(param0: kotlin.random.Random, param1: kotlin.ranges.LongRange): number;
			public static takeUpperBits(param0: number, param1: number): number;
			public static fastLog2(param0: number): number;
			public static Random(param0: number): kotlin.random.Random;
			public static boundsErrorMessage(param0: any, param1: any): string;
		}
	}
}

declare module kotlin {
	export module random {
		export class URandomKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.random.URandomKt>;
			public static nextUInt(param0: kotlin.random.Random, param1: kotlin.ranges.UIntRange): number;
			public static nextULong(param0: kotlin.random.Random, param1: kotlin.ranges.ULongRange): number;
		}
	}
}

declare module kotlin {
	export module random {
		export class XorWowRandom extends kotlin.random.Random implements java.io.Serializable {
			public static class: java.lang.Class<kotlin.random.XorWowRandom>;
			public nextInt(param0: number): number;
			public nextBits(param0: number): number;
			public nextInt(param0: number, param1: number): number;
			public nextInt(): number;
			public constructor();
			public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
			public constructor(param0: number, param1: number);
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
				public nextLong(param0: number): number;
				public nextInt(param0: number): number;
				public nextDouble(param0: number): number;
				public getImpl(): java.util.Random;
				public nextLong(param0: number, param1: number): number;
				public nextDouble(param0: number, param1: number): number;
				public nextDouble(): number;
				public nextInt(param0: number, param1: number): number;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class CharProgression extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ranges.CharProgression>;
			public static Companion: kotlin.ranges.CharProgression.Companion;
			public getFirst(): string;
			public iterator(): kotlin.collections.CharIterator;
			public equals(param0: any): boolean;
			public toString(): string;
			public isEmpty(): boolean;
			public getLast(): string;
			public spliterator(): java.util.Spliterator<any>;
			public getStep(): number;
			public constructor(param0: string, param1: string, param2: number);
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
			public forEach(param0: any /* any*/): void;
		}
		export module CharProgression {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.CharProgression.Companion>;
				public fromClosedRange(param0: string, param1: string, param2: number): kotlin.ranges.CharProgression;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class CharProgressionIterator extends kotlin.collections.CharIterator {
			public static class: java.lang.Class<kotlin.ranges.CharProgressionIterator>;
			public nextChar(): string;
			public constructor();
			public hasNext(): boolean;
			public getStep(): number;
			public constructor(param0: string, param1: string, param2: number);
		}
	}
}

declare module kotlin {
	export module ranges {
		export class CharRange extends kotlin.ranges.CharProgression implements kotlin.ranges.ClosedRange<java.lang.Character>  {
			public static class: java.lang.Class<kotlin.ranges.CharRange>;
			public static Companion: kotlin.ranges.CharRange.Companion;
			public getEndInclusive(): any;
			public equals(param0: any): boolean;
			public iterator(): kotlin.collections.CharIterator;
			public isEmpty(): boolean;
			public forEach(param0: any /* any*/): void;
			public constructor(param0: string, param1: string);
			public getEndInclusive(): java.lang.Character;
			public contains(param0: any): boolean;
			public toString(): string;
			public getStart(): any;
			public contains(param0: string): boolean;
			public getStart(): java.lang.Character;
			public spliterator(): java.util.Spliterator<any>;
			public constructor(param0: string, param1: string, param2: number);
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
			public equals(param0: any): boolean;
			public isEmpty(): boolean;
			public lessThanOrEquals(param0: any, param1: any): boolean;
			public lessThanOrEquals(param0: number, param1: number): boolean;
			public contains(param0: any): boolean;
			public toString(): string;
			public getStart(): any;
			public getEndInclusive(): java.lang.Double;
			public getStart(): java.lang.Double;
			public contains(param0: number): boolean;
			public constructor(param0: number, param1: number);
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ClosedFloatRange extends kotlin.ranges.ClosedFloatingPointRange<java.lang.Float> {
			public static class: java.lang.Class<kotlin.ranges.ClosedFloatRange>;
			public getEndInclusive(): any;
			public equals(param0: any): boolean;
			public isEmpty(): boolean;
			public lessThanOrEquals(param0: any, param1: any): boolean;
			public lessThanOrEquals(param0: number, param1: number): boolean;
			public getStart(): java.lang.Float;
			public getEndInclusive(): java.lang.Float;
			public contains(param0: any): boolean;
			public toString(): string;
			public getStart(): any;
			public contains(param0: number): boolean;
			public constructor(param0: number, param1: number);
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
				public static contains(param0: kotlin.ranges.ClosedFloatingPointRange<any>, param1: java.lang.Comparable<any>): boolean;
				public static isEmpty(param0: kotlin.ranges.ClosedFloatingPointRange<any>): boolean;
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
				public static contains(param0: kotlin.ranges.ClosedRange<any>, param1: java.lang.Comparable<any>): boolean;
				public static isEmpty(param0: kotlin.ranges.ClosedRange<any>): boolean;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ComparableRange<T>  extends kotlin.ranges.ClosedRange<any> {
			public static class: java.lang.Class<kotlin.ranges.ComparableRange<any>>;
			public getEndInclusive(): any;
			public equals(param0: any): boolean;
			public contains(param0: any): boolean;
			public toString(): string;
			public getStart(): any;
			public isEmpty(): boolean;
			public constructor(param0: any, param1: any);
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class IntProgression extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ranges.IntProgression>;
			public static Companion: kotlin.ranges.IntProgression.Companion;
			public constructor(param0: number, param1: number, param2: number);
			public equals(param0: any): boolean;
			public toString(): string;
			public isEmpty(): boolean;
			public getFirst(): number;
			public iterator(): kotlin.collections.IntIterator;
			public getLast(): number;
			public spliterator(): java.util.Spliterator<any>;
			public getStep(): number;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
			public forEach(param0: any /* any*/): void;
		}
		export module IntProgression {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.IntProgression.Companion>;
				public fromClosedRange(param0: number, param1: number, param2: number): kotlin.ranges.IntProgression;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class IntProgressionIterator extends kotlin.collections.IntIterator {
			public static class: java.lang.Class<kotlin.ranges.IntProgressionIterator>;
			public constructor(param0: number, param1: number, param2: number);
			public nextInt(): number;
			public constructor();
			public hasNext(): boolean;
			public getStep(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class IntRange extends kotlin.ranges.IntProgression implements kotlin.ranges.ClosedRange<java.lang.Integer>  {
			public static class: java.lang.Class<kotlin.ranges.IntRange>;
			public static Companion: kotlin.ranges.IntRange.Companion;
			public constructor(param0: number, param1: number, param2: number);
			public getEndInclusive(): any;
			public equals(param0: any): boolean;
			public isEmpty(): boolean;
			public iterator(): kotlin.collections.IntIterator;
			public getStart(): java.lang.Integer;
			public forEach(param0: any /* any*/): void;
			public getEndInclusive(): java.lang.Integer;
			public contains(param0: any): boolean;
			public toString(): string;
			public getStart(): any;
			public contains(param0: number): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public constructor(param0: number, param1: number);
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
			public static Companion: kotlin.ranges.LongProgression.Companion;
			public constructor(param0: number, param1: number, param2: number);
			public equals(param0: any): boolean;
			public toString(): string;
			public isEmpty(): boolean;
			public getFirst(): number;
			public getLast(): number;
			public spliterator(): java.util.Spliterator<any>;
			public getStep(): number;
			public iterator(): kotlin.collections.LongIterator;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
			public forEach(param0: any /* any*/): void;
		}
		export module LongProgression {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.LongProgression.Companion>;
				public fromClosedRange(param0: number, param1: number, param2: number): kotlin.ranges.LongProgression;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class LongProgressionIterator extends kotlin.collections.LongIterator {
			public static class: java.lang.Class<kotlin.ranges.LongProgressionIterator>;
			public constructor(param0: number, param1: number, param2: number);
			public constructor();
			public hasNext(): boolean;
			public nextLong(): number;
			public getStep(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class LongRange extends kotlin.ranges.LongProgression implements kotlin.ranges.ClosedRange<java.lang.Long>  {
			public static class: java.lang.Class<kotlin.ranges.LongRange>;
			public static Companion: kotlin.ranges.LongRange.Companion;
			public constructor(param0: number, param1: number, param2: number);
			public getEndInclusive(): any;
			public equals(param0: any): boolean;
			public getEndInclusive(): java.lang.Long;
			public isEmpty(): boolean;
			public getStart(): java.lang.Long;
			public iterator(): kotlin.collections.LongIterator;
			public forEach(param0: any /* any*/): void;
			public contains(param0: any): boolean;
			public toString(): string;
			public getStart(): any;
			public contains(param0: number): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public constructor(param0: number, param1: number);
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
		export class RangesKt extends kotlin.ranges.RangesKt___RangesKt {
			public static class: java.lang.Class<kotlin.ranges.RangesKt>;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class RangesKt__RangesKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ranges.RangesKt__RangesKt>;
			public static rangeTo(param0: number, param1: number): kotlin.ranges.ClosedFloatingPointRange<java.lang.Float>;
			public static rangeTo(param0: java.lang.Comparable<any>, param1: java.lang.Comparable<any>): kotlin.ranges.ClosedRange<any>;
			public static checkStepIsPositive(param0: boolean, param1: java.lang.Number): void;
			public static rangeTo(param0: number, param1: number): kotlin.ranges.ClosedFloatingPointRange<java.lang.Double>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module ranges {
		export class RangesKt___RangesKt extends kotlin.ranges.RangesKt__RangesKt {
			public static class: java.lang.Class<kotlin.ranges.RangesKt___RangesKt>;
			public static intRangeContains(param0: kotlin.ranges.ClosedRange<java.lang.Integer>, param1: number): boolean;
			public static shortRangeContains(param0: kotlin.ranges.ClosedRange<java.lang.Short>, param1: number): boolean;
			public static coerceAtMost(param0: java.lang.Comparable<any>, param1: java.lang.Comparable<any>): java.lang.Comparable<any>;
			public static coerceIn(param0: java.lang.Comparable<any>, param1: kotlin.ranges.ClosedFloatingPointRange<any>): java.lang.Comparable<any>;
			public static toIntExactOrNull(param0: number): java.lang.Integer;
			public static toShortExactOrNull(param0: number): java.lang.Short;
			public static downTo(param0: number, param1: number): kotlin.ranges.LongProgression;
			public static until(param0: number, param1: number): kotlin.ranges.LongRange;
			public static downTo(param0: number, param1: number): kotlin.ranges.IntProgression;
			public static reversed(param0: kotlin.ranges.LongProgression): kotlin.ranges.LongProgression;
			public static coerceIn(param0: number, param1: kotlin.ranges.ClosedRange<java.lang.Long>): number;
			public static longRangeContains(param0: kotlin.ranges.ClosedRange<java.lang.Long>, param1: number): boolean;
			public static randomOrNull(param0: kotlin.ranges.LongRange, param1: kotlin.random.Random): java.lang.Long;
			public static coerceAtMost(param0: number, param1: number): number;
			public static randomOrNull(param0: kotlin.ranges.IntRange, param1: kotlin.random.Random): java.lang.Integer;
			public static step(param0: kotlin.ranges.IntProgression, param1: number): kotlin.ranges.IntProgression;
			public static coerceAtLeast(param0: number, param1: number): number;
			public static byteRangeContains(param0: kotlin.ranges.ClosedRange<java.lang.Byte>, param1: number): boolean;
			public static toByteExactOrNull(param0: number): java.lang.Byte;
			public static downTo(param0: string, param1: string): kotlin.ranges.CharProgression;
			public static coerceAtLeast(param0: java.lang.Comparable<any>, param1: java.lang.Comparable<any>): java.lang.Comparable<any>;
			public static reversed(param0: kotlin.ranges.IntProgression): kotlin.ranges.IntProgression;
			public static doubleRangeContains(param0: kotlin.ranges.ClosedRange<java.lang.Double>, param1: number): boolean;
			public static step(param0: kotlin.ranges.CharProgression, param1: number): kotlin.ranges.CharProgression;
			public static coerceIn(param0: java.lang.Comparable<any>, param1: java.lang.Comparable<any>, param2: java.lang.Comparable<any>): java.lang.Comparable<any>;
			public constructor();
			public static until(param0: number, param1: number): kotlin.ranges.IntRange;
			public static random(param0: kotlin.ranges.IntRange, param1: kotlin.random.Random): number;
			public static toLongExactOrNull(param0: number): java.lang.Long;
			public static step(param0: kotlin.ranges.LongProgression, param1: number): kotlin.ranges.LongProgression;
			public static coerceIn(param0: java.lang.Comparable<any>, param1: kotlin.ranges.ClosedRange<any>): java.lang.Comparable<any>;
			public static floatRangeContains(param0: kotlin.ranges.ClosedRange<java.lang.Float>, param1: number): boolean;
			public static random(param0: kotlin.ranges.CharRange, param1: kotlin.random.Random): string;
			public static reversed(param0: kotlin.ranges.CharProgression): kotlin.ranges.CharProgression;
			public static until(param0: string, param1: string): kotlin.ranges.CharRange;
			public static coerceIn(param0: number, param1: number, param2: number): number;
			public static coerceIn(param0: number, param1: kotlin.ranges.ClosedRange<java.lang.Integer>): number;
			public static random(param0: kotlin.ranges.LongRange, param1: kotlin.random.Random): number;
			public static randomOrNull(param0: kotlin.ranges.CharRange, param1: kotlin.random.Random): java.lang.Character;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class UIntProgression extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ranges.UIntProgression>;
			public static Companion: kotlin.ranges.UIntProgression.Companion;
			public equals(param0: any): boolean;
			public toString(): string;
			public isEmpty(): boolean;
			public iterator(): java.util.Iterator<kotlin.UInt>;
			public spliterator(): java.util.Spliterator<any>;
			public getStep(): number;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
			public forEach(param0: any /* any*/): void;
		}
		export module UIntProgression {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.UIntProgression.Companion>;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class UIntProgressionIterator extends kotlin.collections.UIntIterator {
			public static class: java.lang.Class<kotlin.ranges.UIntProgressionIterator>;
			public hasNext(): boolean;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class UIntRange extends kotlin.ranges.UIntProgression implements kotlin.ranges.ClosedRange<kotlin.UInt>  {
			public static class: java.lang.Class<kotlin.ranges.UIntRange>;
			public static Companion: kotlin.ranges.UIntRange.Companion;
			public getEndInclusive(): any;
			public equals(param0: any): boolean;
			public isEmpty(): boolean;
			public iterator(): java.util.Iterator<kotlin.UInt>;
			public forEach(param0: any /* any*/): void;
			public contains(param0: any): boolean;
			public toString(): string;
			public getStart(): any;
			public spliterator(): java.util.Spliterator<any>;
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
			public static Companion: kotlin.ranges.ULongProgression.Companion;
			public equals(param0: any): boolean;
			public toString(): string;
			public isEmpty(): boolean;
			public iterator(): java.util.Iterator<kotlin.ULong>;
			public spliterator(): java.util.Spliterator<any>;
			public getStep(): number;
			public hashCode(): number;
			public iterator(): java.util.Iterator<any>;
			public forEach(param0: any /* any*/): void;
		}
		export module ULongProgression {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.ranges.ULongProgression.Companion>;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ULongProgressionIterator extends kotlin.collections.ULongIterator {
			public static class: java.lang.Class<kotlin.ranges.ULongProgressionIterator>;
			public hasNext(): boolean;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ULongRange extends kotlin.ranges.ULongProgression implements kotlin.ranges.ClosedRange<kotlin.ULong>  {
			public static class: java.lang.Class<kotlin.ranges.ULongRange>;
			public static Companion: kotlin.ranges.ULongRange.Companion;
			public getEndInclusive(): any;
			public equals(param0: any): boolean;
			public isEmpty(): boolean;
			public forEach(param0: any /* any*/): void;
			public contains(param0: any): boolean;
			public toString(): string;
			public getStart(): any;
			public iterator(): java.util.Iterator<kotlin.ULong>;
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
	export module ranges {
		export class URangesKt extends kotlin.ranges.URangesKt___URangesKt {
			public static class: java.lang.Class<kotlin.ranges.URangesKt>;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class URangesKt___URangesKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.ranges.URangesKt___URangesKt>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module reflect {
		export class GenericArrayTypeImpl extends java.lang.Object implements java.lang.reflect.GenericArrayType, kotlin.reflect.TypeImpl {
			public static class: java.lang.Class<kotlin.reflect.GenericArrayTypeImpl>;
			public equals(param0: any): boolean;
			public toString(): string;
			public getGenericComponentType(): java.lang.reflect.Type;
			public getTypeName(): string;
			public hashCode(): number;
			public constructor(param0: java.lang.reflect.Type);
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
				call(param0: any[]): any;
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
			public isOpen(): boolean;
			public getAnnotations(): java.util.List<java.lang.annotation.Annotation>;
			public getName(): string;
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getVisibility(): kotlin.reflect.KVisibility;
			public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			public isSuspend(): boolean;
			public call(param0: any[]): any;
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
			public static safeCast(param0: kotlin.reflect.KClass<any>, param1: any): any;
			public static cast(param0: kotlin.reflect.KClass<any>, param1: any): any;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KClassesImplKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.KClassesImplKt>;
			public static getQualifiedOrSimpleName(param0: kotlin.reflect.KClass<any>): string;
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
				call(param0: any[]): R;
				callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): R;
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
			public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
			public getParameters(): java.util.List<kotlin.reflect.KParameter>;
			public isSuspend(): boolean;
			public isOperator(): boolean;
			public isInline(): boolean;
			public call(param0: any[]): R;
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
				call(param0: any[]): any;
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
			public call(param0: any[]): any;
			public getSetter(): kotlin.reflect.KMutableProperty.Setter<any>;
			public isLateinit(): boolean;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public isAbstract(): boolean;
			public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
		}
		export module KMutableProperty {
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
					call(param0: any[]): any;
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
				public call(param0: any[]): any;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
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
				call(param0: any[]): any;
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
				call(param0: any[]): any;
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
			public call(param0: any[]): any;
			public isLateinit(): boolean;
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
					call(param0: any[]): any;
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
				public call(param0: any[]): any;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
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
				call(param0: any[]): any;
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
				call(param0: any[]): any;
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
			public call(param0: any[]): any;
			public isLateinit(): boolean;
			public getSetter(): kotlin.reflect.KMutableProperty1.Setter<T,V>;
			public getGetter(): kotlin.reflect.KProperty1.Getter<T,V>;
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
					call(param0: any[]): any;
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
				public call(param0: any[]): any;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
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
				call(param0: any[]): any;
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
				call(param0: any[]): any;
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
			public call(param0: any[]): any;
			public getGetter(): kotlin.reflect.KProperty2.Getter<D,E,V>;
			public isLateinit(): boolean;
			public getDelegate(param0: D, param1: E): any;
			public invoke(param0: any, param1: any): any;
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
					call(param0: any[]): any;
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
				public call(param0: any[]): any;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
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
				public static valueOf(param0: string): kotlin.reflect.KParameter.Kind;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
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
				call(param0: any[]): any;
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
			public call(param0: any[]): any;
			public isLateinit(): boolean;
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
					call(param0: any[]): any;
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
				public call(param0: any[]): any;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
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
				call(param0: any[]): any;
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
			public call(param0: any[]): any;
			public isLateinit(): boolean;
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
					call(param0: any[]): any;
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
				public call(param0: any[]): any;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
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
				call(param0: any[]): any;
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
			public call(param0: any[]): any;
			public isLateinit(): boolean;
			public getGetter(): kotlin.reflect.KProperty1.Getter<T,V>;
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
					call(param0: any[]): any;
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
				public call(param0: any[]): any;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
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
				call(param0: any[]): any;
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
			public call(param0: any[]): any;
			public getGetter(): kotlin.reflect.KProperty2.Getter<D,E,V>;
			public isLateinit(): boolean;
			public getDelegate(param0: D, param1: E): any;
			public invoke(param0: any, param1: any): any;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public isAbstract(): boolean;
			public callBy(param0: java.util.Map<kotlin.reflect.KParameter,any>): any;
		}
		export module KProperty2 {
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
					call(param0: any[]): any;
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
				public call(param0: any[]): any;
				public getTypeParameters(): java.util.List<kotlin.reflect.KTypeParameter>;
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
			public static Companion: kotlin.reflect.KTypeProjection.Companion;
			public equals(param0: any): boolean;
			public getType(): kotlin.reflect.KType;
			public static contravariant(param0: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
			public toString(): string;
			public copy(param0: kotlin.reflect.KVariance, param1: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
			public static invariant(param0: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
			public constructor(param0: kotlin.reflect.KVariance, param1: kotlin.reflect.KType);
			public getVariance(): kotlin.reflect.KVariance;
			public static covariant(param0: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
			public component1(): kotlin.reflect.KVariance;
			public component2(): kotlin.reflect.KType;
			public hashCode(): number;
		}
		export module KTypeProjection {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.reflect.KTypeProjection.Companion>;
				public contravariant(param0: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
				public covariant(param0: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
				public getSTAR(): kotlin.reflect.KTypeProjection;
				public invariant(param0: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
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
			public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			public static values(): kotlin.reflect.KVariance[];
			public static valueOf(param0: string): kotlin.reflect.KVariance;
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
			public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			public static valueOf(param0: string): kotlin.reflect.KVisibility;
			public static values(): kotlin.reflect.KVisibility[];
		}
	}
}

declare module kotlin {
	export module reflect {
		export class ParameterizedTypeImpl extends java.lang.Object implements java.lang.reflect.ParameterizedType, kotlin.reflect.TypeImpl {
			public static class: java.lang.Class<kotlin.reflect.ParameterizedTypeImpl>;
			public getRawType(): java.lang.reflect.Type;
			public equals(param0: any): boolean;
			public toString(): string;
			public constructor(param0: java.lang.Class<any>, param1: java.lang.reflect.Type, param2: java.util.List<any>);
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
				getTypeName(): string;
			});
			public constructor();
			public getTypeName(): string;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class TypeOfKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.TypeOfKt>;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class TypeVariableImpl extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.TypeVariableImpl>;
			public equals(param0: any): boolean;
			public getGenericDeclaration(): any;
			public getDeclaredAnnotations(): java.lang.annotation.Annotation[];
			public getBounds(): java.lang.reflect.Type[];
			public getTypeName(): string;
			public getAnnotatedBounds(): java.lang.annotation.Annotation[];
			public constructor(param0: kotlin.reflect.KTypeParameter);
			public toString(): string;
			public getName(): string;
			public getAnnotation(param0: java.lang.Class<any>): java.lang.annotation.Annotation;
			public getGenericDeclaration(): java.lang.reflect.GenericDeclaration;
			public getAnnotations(): java.lang.annotation.Annotation[];
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class TypesJVMKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.reflect.TypesJVMKt>;
			public static getJavaType(param0: kotlin.reflect.KType): java.lang.reflect.Type;
		}
		export module TypesJVMKt {
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
			public static Companion: kotlin.reflect.WildcardTypeImpl.Companion;
			public equals(param0: any): boolean;
			public getUpperBounds(): java.lang.reflect.Type[];
			public toString(): string;
			public constructor(param0: java.lang.reflect.Type, param1: java.lang.reflect.Type);
			public getTypeName(): string;
			public getLowerBounds(): java.lang.reflect.Type[];
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
			public constructor(param0: kotlin.sequences.Sequence<any>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class DistinctIterator<T, K>  extends kotlin.collections.AbstractIterator<any> {
			public static class: java.lang.Class<kotlin.sequences.DistinctIterator<any,any>>;
			public constructor(param0: java.util.Iterator<any>, param1: kotlin.jvm.functions.Function1<any,any>);
			public constructor();
			public computeNext(): void;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class DistinctSequence<T, K>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.DistinctSequence<any,any>>;
			public constructor(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class DropSequence<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.sequences.DropSequence<any>>;
			public iterator(): java.util.Iterator<T>;
			public constructor(param0: kotlin.sequences.Sequence<any>, param1: number);
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
			public constructor(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class EmptySequence extends java.lang.Object implements kotlin.sequences.Sequence<any>, kotlin.sequences.DropTakeSequence<any> {
			public static class: java.lang.Class<kotlin.sequences.EmptySequence>;
			public static INSTANCE: kotlin.sequences.EmptySequence;
			public drop(param0: number): kotlin.sequences.Sequence<any>;
			public drop(param0: number): kotlin.sequences.EmptySequence;
			public take(param0: number): kotlin.sequences.EmptySequence;
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
			public constructor(param0: kotlin.sequences.Sequence<any>, param1: boolean, param2: kotlin.jvm.functions.Function1<any,java.lang.Boolean>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class FlatteningSequence<T, R, E>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.FlatteningSequence<any,any,any>>;
			public constructor(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>, param2: kotlin.jvm.functions.Function1<any,any>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class GeneratorSequence<T>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.GeneratorSequence<any>>;
			public constructor(param0: kotlin.jvm.functions.Function0<any>, param1: kotlin.jvm.functions.Function1<any,any>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class IndexingSequence<T>  extends kotlin.sequences.Sequence<kotlin.collections.IndexedValue<any>> {
			public static class: java.lang.Class<kotlin.sequences.IndexingSequence<any>>;
			public constructor(param0: kotlin.sequences.Sequence<any>);
			public iterator(): java.util.Iterator<kotlin.collections.IndexedValue<any>>;
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class MergingSequence<T1, T2, V>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.MergingSequence<any,any,any>>;
			public constructor(param0: kotlin.sequences.Sequence<any>, param1: kotlin.sequences.Sequence<any>, param2: kotlin.jvm.functions.Function2<any,any,any>);
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
			public setNextStep(param0: kotlin.coroutines.Continuation<any>): void;
			public next(): any;
			public getContext(): kotlin.coroutines.CoroutineContext;
			public yield(param0: any, param1: kotlin.coroutines.Continuation<any>): any;
			public yieldAll(param0: java.util.Iterator<any>, param1: kotlin.coroutines.Continuation<any>): any;
			public yieldAll(param0: kotlin.sequences.Sequence<any>, param1: kotlin.coroutines.Continuation<any>): any;
			public getNextStep(): kotlin.coroutines.Continuation<kotlin.Unit>;
			public yieldAll(param0: java.lang.Iterable<any>, param1: kotlin.coroutines.Continuation<any>): any;
			public resumeWith(param0: any): void;
			public constructor();
			public hasNext(): boolean;
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module sequences {
		export abstract class SequenceScope<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.sequences.SequenceScope<any>>;
			public yieldAll(param0: java.util.Iterator<any>, param1: kotlin.coroutines.Continuation<any>): any;
			public yieldAll(param0: kotlin.sequences.Sequence<any>, param1: kotlin.coroutines.Continuation<any>): any;
			public yieldAll(param0: java.lang.Iterable<any>, param1: kotlin.coroutines.Continuation<any>): any;
			public constructor();
			public yield(param0: T, param1: kotlin.coroutines.Continuation<any>): any;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class SequencesKt extends kotlin.sequences.SequencesKt___SequencesKt {
			public static class: java.lang.Class<kotlin.sequences.SequencesKt>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class SequencesKt__SequenceBuilderKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.sequences.SequencesKt__SequenceBuilderKt>;
			public static sequence(param0: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static iterator(param0: kotlin.jvm.functions.Function2<any,any,any>): java.util.Iterator<any>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module sequences {
		export class SequencesKt__SequencesJVMKt extends kotlin.sequences.SequencesKt__SequenceBuilderKt {
			public static class: java.lang.Class<kotlin.sequences.SequencesKt__SequencesJVMKt>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module sequences {
		export class SequencesKt__SequencesKt extends kotlin.sequences.SequencesKt__SequencesJVMKt {
			public static class: java.lang.Class<kotlin.sequences.SequencesKt__SequencesKt>;
			public static generateSequence(param0: any, param1: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static shuffled(param0: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static generateSequence(param0: kotlin.jvm.functions.Function0<any>): kotlin.sequences.Sequence<any>;
			public static flatMapIndexed(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function2<any,any,any>, param2: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static emptySequence(): kotlin.sequences.Sequence<any>;
			public static shuffled(param0: kotlin.sequences.Sequence<any>, param1: kotlin.random.Random): kotlin.sequences.Sequence<any>;
			public static generateSequence(param0: kotlin.jvm.functions.Function0<any>, param1: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static constrainOnce(param0: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static unzip(param0: kotlin.sequences.Sequence<any>): kotlin.Pair<any,any>;
			public constructor();
			public static ifEmpty(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function0<any>): kotlin.sequences.Sequence<any>;
			public static sequenceOf(param0: any[]): kotlin.sequences.Sequence<any>;
			public static flatten(param0: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static flattenSequenceOfIterable(param0: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static asSequence(param0: java.util.Iterator<any>): kotlin.sequences.Sequence<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class SequencesKt___SequencesJvmKt extends kotlin.sequences.SequencesKt__SequencesKt {
			public static class: java.lang.Class<kotlin.sequences.SequencesKt___SequencesJvmKt>;
			public static toSortedSet(param0: kotlin.sequences.Sequence<any>, param1: java.util.Comparator<any>): java.util.SortedSet<any>;
			public static filterIsInstance(param0: kotlin.sequences.Sequence<any>, param1: java.lang.Class<any>): kotlin.sequences.Sequence<any>;
			public static toSortedSet(param0: kotlin.sequences.Sequence<any>): java.util.SortedSet<any>;
			public static filterIsInstanceTo(param0: kotlin.sequences.Sequence<any>, param1: java.util.Collection<any>, param2: java.lang.Class<any>): java.util.Collection<any>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module sequences {
		export class SequencesKt___SequencesKt extends kotlin.sequences.SequencesKt___SequencesJvmKt {
			public static class: java.lang.Class<kotlin.sequences.SequencesKt___SequencesKt>;
			public static any(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static reduceOrNull(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static joinTo(param0: kotlin.sequences.Sequence<any>, param1: java.lang.Appendable, param2: string, param3: string, param4: string, param5: number, param6: string, param7: kotlin.jvm.functions.Function1<any,any>): java.lang.Appendable;
			public static zipWithNext(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static single(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static filterNotTo(param0: kotlin.sequences.Sequence<any>, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static flatMapIndexedSequence(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static groupByTo(param0: kotlin.sequences.Sequence<any>, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static foldIndexed(param0: kotlin.sequences.Sequence<any>, param1: any, param2: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static averageOfFloat(param0: kotlin.sequences.Sequence<java.lang.Float>): number;
			/** @deprecated */
			public static maxWith(param0: kotlin.sequences.Sequence<any>, param1: java.util.Comparator<any>): any;
			public static averageOfShort(param0: kotlin.sequences.Sequence<java.lang.Short>): number;
			public static lastIndexOf(param0: kotlin.sequences.Sequence<any>, param1: any): number;
			public static associateByTo(param0: kotlin.sequences.Sequence<any>, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static requireNoNulls(param0: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static indexOfLast(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): number;
			public static filterIndexed(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static maxOrNull(param0: kotlin.sequences.Sequence<java.lang.Float>): java.lang.Float;
			public static zip(param0: kotlin.sequences.Sequence<any>, param1: kotlin.sequences.Sequence<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static sumOfByte(param0: kotlin.sequences.Sequence<java.lang.Byte>): number;
			public static filter(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static associateByTo(param0: kotlin.sequences.Sequence<any>, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>, param3: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static minOrNull(param0: kotlin.sequences.Sequence<java.lang.Double>): java.lang.Double;
			public static sumOfFloat(param0: kotlin.sequences.Sequence<java.lang.Float>): number;
			public static firstOrNull(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static averageOfByte(param0: kotlin.sequences.Sequence<java.lang.Byte>): number;
			public static distinctBy(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static runningReduceIndexed(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function3<any,any,any,any>): kotlin.sequences.Sequence<any>;
			/** @deprecated */
			public static max(param0: kotlin.sequences.Sequence<java.lang.Double>): java.lang.Double;
			public static zipWithNext(param0: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static sortedBy(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public constructor();
			public static elementAt(param0: kotlin.sequences.Sequence<any>, param1: number): any;
			public static singleOrNull(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static filterNotNullTo(param0: kotlin.sequences.Sequence<any>, param1: java.util.Collection<any>): java.util.Collection<any>;
			public static map(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static minus(param0: kotlin.sequences.Sequence<any>, param1: any): kotlin.sequences.Sequence<any>;
			public static lastOrNull(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static minus(param0: kotlin.sequences.Sequence<any>, param1: java.lang.Iterable<any>): kotlin.sequences.Sequence<any>;
			public static scan(param0: kotlin.sequences.Sequence<any>, param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static sumOfShort(param0: kotlin.sequences.Sequence<java.lang.Short>): number;
			public static scanIndexed(param0: kotlin.sequences.Sequence<any>, param1: any, param2: kotlin.jvm.functions.Function3<any,any,any,any>): kotlin.sequences.Sequence<any>;
			public static averageOfInt(param0: kotlin.sequences.Sequence<java.lang.Integer>): number;
			public static single(param0: kotlin.sequences.Sequence<any>): any;
			public static groupBy(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static none(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): boolean;
			/** @deprecated */
			public static min(param0: kotlin.sequences.Sequence<any>): java.lang.Comparable<any>;
			public static mapTo(param0: kotlin.sequences.Sequence<any>, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static flatMapTo(param0: kotlin.sequences.Sequence<any>, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			/** @deprecated */
			public static max(param0: kotlin.sequences.Sequence<java.lang.Float>): java.lang.Float;
			public static windowed(param0: kotlin.sequences.Sequence<any>, param1: number, param2: number, param3: boolean): kotlin.sequences.Sequence<any>;
			public static last(param0: kotlin.sequences.Sequence<any>): any;
			public static maxWithOrNull(param0: kotlin.sequences.Sequence<any>, param1: java.util.Comparator<any>): any;
			public static filterNotNull(param0: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static toHashSet(param0: kotlin.sequences.Sequence<any>): java.util.HashSet<any>;
			public static take(param0: kotlin.sequences.Sequence<any>, param1: number): kotlin.sequences.Sequence<any>;
			public static plus(param0: kotlin.sequences.Sequence<any>, param1: any): kotlin.sequences.Sequence<any>;
			public static all(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): boolean;
			public static sumOfDouble(param0: kotlin.sequences.Sequence<java.lang.Double>): number;
			public static distinct(param0: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static reduceIndexedOrNull(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static sortedDescending(param0: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static first(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static toMutableSet(param0: kotlin.sequences.Sequence<any>): java.util.Set<any>;
			public static reduceIndexed(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static none(param0: kotlin.sequences.Sequence<any>): boolean;
			public static minus(param0: kotlin.sequences.Sequence<any>, param1: any[]): kotlin.sequences.Sequence<any>;
			public static associateBy(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static partition(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): kotlin.Pair<any,any>;
			public static onEachIndexed(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static associate(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static first(param0: kotlin.sequences.Sequence<any>): any;
			public static filterIndexedTo(param0: kotlin.sequences.Sequence<any>, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static singleOrNull(param0: kotlin.sequences.Sequence<any>): any;
			/** @deprecated */
			public static minBy(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static withIndex(param0: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static maxByOrNull(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): any;
			/** @deprecated */
			public static sumByDouble(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): number;
			public static flatMapIndexedIterable(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static toMutableList(param0: kotlin.sequences.Sequence<any>): java.util.List<any>;
			public static elementAtOrElse(param0: kotlin.sequences.Sequence<any>, param1: number, param2: kotlin.jvm.functions.Function1<any,any>): any;
			public static groupBy(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static indexOfFirst(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): number;
			public static plus(param0: kotlin.sequences.Sequence<any>, param1: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static indexOf(param0: kotlin.sequences.Sequence<any>, param1: any): number;
			public static drop(param0: kotlin.sequences.Sequence<any>, param1: number): kotlin.sequences.Sequence<any>;
			public static associateBy(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static flatMapIterableTo(param0: kotlin.sequences.Sequence<any>, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static filterTo(param0: kotlin.sequences.Sequence<any>, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			/** @deprecated */
			public static sumBy(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): number;
			public static filterNot(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static firstOrNull(param0: kotlin.sequences.Sequence<any>): any;
			public static plus(param0: kotlin.sequences.Sequence<any>, param1: java.lang.Iterable<any>): kotlin.sequences.Sequence<any>;
			public static dropWhile(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static zip(param0: kotlin.sequences.Sequence<any>, param1: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static sortedWith(param0: kotlin.sequences.Sequence<any>, param1: java.util.Comparator<any>): kotlin.sequences.Sequence<any>;
			public static groupByTo(param0: kotlin.sequences.Sequence<any>, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>, param3: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static chunked(param0: kotlin.sequences.Sequence<any>, param1: number): kotlin.sequences.Sequence<any>;
			public static contains(param0: kotlin.sequences.Sequence<any>, param1: any): boolean;
			public static plus(param0: kotlin.sequences.Sequence<any>, param1: any[]): kotlin.sequences.Sequence<any>;
			/** @deprecated */
			public static min(param0: kotlin.sequences.Sequence<java.lang.Float>): java.lang.Float;
			public static runningFold(param0: kotlin.sequences.Sequence<any>, param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static runningFoldIndexed(param0: kotlin.sequences.Sequence<any>, param1: any, param2: kotlin.jvm.functions.Function3<any,any,any,any>): kotlin.sequences.Sequence<any>;
			public static sortedByDescending(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static count(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): number;
			public static windowed(param0: kotlin.sequences.Sequence<any>, param1: number, param2: number, param3: boolean, param4: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static forEachIndexed(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function2<any,any,any>): void;
			public static minByOrNull(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static sumOfLong(param0: kotlin.sequences.Sequence<java.lang.Long>): number;
			public static minWithOrNull(param0: kotlin.sequences.Sequence<any>, param1: java.util.Comparator<any>): any;
			public static lastOrNull(param0: kotlin.sequences.Sequence<any>): any;
			public static chunked(param0: kotlin.sequences.Sequence<any>, param1: number, param2: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static averageOfDouble(param0: kotlin.sequences.Sequence<java.lang.Double>): number;
			public static averageOfLong(param0: kotlin.sequences.Sequence<java.lang.Long>): number;
			public static sorted(param0: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static toList(param0: kotlin.sequences.Sequence<any>): java.util.List<any>;
			public static associateWith(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static last(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static maxOrNull(param0: kotlin.sequences.Sequence<any>): java.lang.Comparable<any>;
			/** @deprecated */
			public static maxBy(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): any;
			public static associateTo(param0: kotlin.sequences.Sequence<any>, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			/** @deprecated */
			public static min(param0: kotlin.sequences.Sequence<java.lang.Double>): java.lang.Double;
			public static minus(param0: kotlin.sequences.Sequence<any>, param1: kotlin.sequences.Sequence<any>): kotlin.sequences.Sequence<any>;
			public static flatMap(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static mapIndexedTo(param0: kotlin.sequences.Sequence<any>, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static mapNotNullTo(param0: kotlin.sequences.Sequence<any>, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static takeWhile(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static flatMapIterable(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static mapIndexed(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static fold(param0: kotlin.sequences.Sequence<any>, param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static toCollection(param0: kotlin.sequences.Sequence<any>, param1: java.util.Collection<any>): java.util.Collection<any>;
			public static asIterable(param0: kotlin.sequences.Sequence<any>): java.lang.Iterable<any>;
			public static associateWithTo(param0: kotlin.sequences.Sequence<any>, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static maxOrNull(param0: kotlin.sequences.Sequence<java.lang.Double>): java.lang.Double;
			public static mapIndexedNotNull(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static sumOfInt(param0: kotlin.sequences.Sequence<java.lang.Integer>): number;
			/** @deprecated */
			public static max(param0: kotlin.sequences.Sequence<any>): java.lang.Comparable<any>;
			public static runningReduce(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function2<any,any,any>): kotlin.sequences.Sequence<any>;
			public static reduce(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static minOrNull(param0: kotlin.sequences.Sequence<any>): java.lang.Comparable<any>;
			public static toSet(param0: kotlin.sequences.Sequence<any>): java.util.Set<any>;
			public static joinToString(param0: kotlin.sequences.Sequence<any>, param1: string, param2: string, param3: string, param4: number, param5: string, param6: kotlin.jvm.functions.Function1<any,any>): string;
			public static any(param0: kotlin.sequences.Sequence<any>): boolean;
			public static mapIndexedNotNullTo(param0: kotlin.sequences.Sequence<any>, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			/** @deprecated */
			public static minWith(param0: kotlin.sequences.Sequence<any>, param1: java.util.Comparator<any>): any;
			public static onEach(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static elementAtOrNull(param0: kotlin.sequences.Sequence<any>, param1: number): any;
			public static mapNotNull(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static count(param0: kotlin.sequences.Sequence<any>): number;
			public static forEach(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): void;
			public static groupingBy(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>): kotlin.collections.Grouping<any,any>;
			public static minOrNull(param0: kotlin.sequences.Sequence<java.lang.Float>): java.lang.Float;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class SubSequence<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.sequences.SubSequence<any>>;
			public iterator(): java.util.Iterator<T>;
			public drop(param0: number): kotlin.sequences.Sequence<T>;
			public take(param0: number): kotlin.sequences.Sequence<T>;
			public constructor(param0: kotlin.sequences.Sequence<any>, param1: number, param2: number);
		}
	}
}

declare module kotlin {
	export module sequences {
		export class TakeSequence<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.sequences.TakeSequence<any>>;
			public iterator(): java.util.Iterator<T>;
			public constructor(param0: kotlin.sequences.Sequence<any>, param1: number);
			public drop(param0: number): kotlin.sequences.Sequence<T>;
			public take(param0: number): kotlin.sequences.Sequence<T>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class TakeWhileSequence<T>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.TakeWhileSequence<any>>;
			public constructor(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class TransformingIndexedSequence<T, R>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.TransformingIndexedSequence<any,any>>;
			public constructor(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function2<any,any,any>);
			public iterator(): java.util.Iterator<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class TransformingSequence<T, R>  extends kotlin.sequences.Sequence<any> {
			public static class: java.lang.Class<kotlin.sequences.TransformingSequence<any,any>>;
			public constructor(param0: kotlin.sequences.Sequence<any>, param1: kotlin.jvm.functions.Function1<any,any>);
			public iterator(): java.util.Iterator<any>;
			public flatten$kotlin_stdlib(param0: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class USequencesKt extends kotlin.sequences.USequencesKt___USequencesKt {
			public static class: java.lang.Class<kotlin.sequences.USequencesKt>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class USequencesKt___USequencesKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.sequences.USequencesKt___USequencesKt>;
			public static sumOfULong(param0: kotlin.sequences.Sequence<kotlin.ULong>): number;
			public static sumOfUInt(param0: kotlin.sequences.Sequence<kotlin.UInt>): number;
			public static sumOfUByte(param0: kotlin.sequences.Sequence<kotlin.UByte>): number;
			public constructor();
			public static sumOfUShort(param0: kotlin.sequences.Sequence<kotlin.UShort>): number;
		}
	}
}

declare module kotlin {
	export module streams {
		export module jdk8 {
			export class StreamsKt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.streams.jdk8.StreamsKt>;
				public static toList(param0: java.util.stream.DoubleStream): java.util.List<java.lang.Double>;
				public static asSequence(param0: java.util.stream.Stream<any>): kotlin.sequences.Sequence<any>;
				public static toList(param0: java.util.stream.IntStream): java.util.List<java.lang.Integer>;
				public static asSequence(param0: java.util.stream.LongStream): kotlin.sequences.Sequence<java.lang.Long>;
				public static asSequence(param0: java.util.stream.DoubleStream): kotlin.sequences.Sequence<java.lang.Double>;
				public static asStream(param0: kotlin.sequences.Sequence<any>): java.util.stream.Stream<any>;
				public static toList(param0: java.util.stream.LongStream): java.util.List<java.lang.Long>;
				public static toList(param0: java.util.stream.Stream<any>): java.util.List<any>;
				public static asSequence(param0: java.util.stream.IntStream): kotlin.sequences.Sequence<java.lang.Integer>;
			}
		}
	}
}

declare module kotlin {
	export module system {
		export class ProcessKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.system.ProcessKt>;
		}
	}
}

declare module kotlin {
	export module system {
		export class TimingKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.system.TimingKt>;
			public static measureNanoTime(param0: kotlin.jvm.functions.Function0<kotlin.Unit>): number;
			public static measureTimeMillis(param0: kotlin.jvm.functions.Function0<kotlin.Unit>): number;
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
			public static Companion: kotlin.text.CharCategory.Companion;
			public getValue(): number;
			public getCode(): string;
			public static valueOf(param0: string): kotlin.text.CharCategory;
			public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			public contains(param0: string): boolean;
			public static values(): kotlin.text.CharCategory[];
		}
		export module CharCategory {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.text.CharCategory.Companion>;
				public valueOf(param0: number): kotlin.text.CharCategory;
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
			public static Companion: kotlin.text.CharDirectionality.Companion;
			public getValue(): number;
			public static valueOf(param0: string): kotlin.text.CharDirectionality;
			public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			public static values(): kotlin.text.CharDirectionality[];
		}
		export module CharDirectionality {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.text.CharDirectionality.Companion>;
				public valueOf(param0: number): kotlin.text.CharDirectionality;
			}
		}
	}
}

declare module kotlin {
	export module text {
		export class CharsKt extends kotlin.text.CharsKt__CharKt {
			public static class: java.lang.Class<kotlin.text.CharsKt>;
		}
	}
}

declare module kotlin {
	export module text {
		export class CharsKt__CharJVMKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.CharsKt__CharJVMKt>;
			public static getCategory(param0: string): kotlin.text.CharCategory;
			public static titlecase(param0: string, param1: java.util.Locale): string;
			public static checkRadix(param0: number): number;
			public static uppercase(param0: string, param1: java.util.Locale): string;
			public static digitOf(param0: string, param1: number): number;
			public static getDirectionality(param0: string): kotlin.text.CharDirectionality;
			public static lowercase(param0: string, param1: java.util.Locale): string;
			public constructor();
			public static isWhitespace(param0: string): boolean;
		}
	}
}

declare module kotlin {
	export module text {
		export class CharsKt__CharKt extends kotlin.text.CharsKt__CharJVMKt {
			public static class: java.lang.Class<kotlin.text.CharsKt__CharKt>;
			public equals(param0: any): boolean;
			public static titlecase(param0: string): string;
			public static titlecase(param0: string, param1: java.util.Locale): string;
			public static digitToInt(param0: string, param1: number): number;
			public static digitToChar(param0: number): string;
			public static digitToChar(param0: number, param1: number): string;
			public static digitToIntOrNull(param0: string, param1: number): java.lang.Integer;
			public constructor();
			public static digitToInt(param0: string): number;
			public static equals(param0: string, param1: string, param2: boolean): boolean;
			public static isSurrogate(param0: string): boolean;
			public static digitToIntOrNull(param0: string): java.lang.Integer;
		}
	}
}

declare module kotlin {
	export module text {
		export class Charsets extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.Charsets>;
			public static UTF_8: java.nio.charset.Charset;
			public static UTF_16: java.nio.charset.Charset;
			public static UTF_16BE: java.nio.charset.Charset;
			public static UTF_16LE: java.nio.charset.Charset;
			public static US_ASCII: java.nio.charset.Charset;
			public static ISO_8859_1: java.nio.charset.Charset;
			public static INSTANCE: kotlin.text.Charsets;
			public UTF32_LE(): java.nio.charset.Charset;
			public UTF32_BE(): java.nio.charset.Charset;
			public UTF32(): java.nio.charset.Charset;
		}
	}
}

declare module kotlin {
	export module text {
		export class CharsetsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.CharsetsKt>;
		}
	}
}

declare module kotlin {
	export module text {
		export class DelimitedRangesSequence extends kotlin.sequences.Sequence<kotlin.ranges.IntRange> {
			public static class: java.lang.Class<kotlin.text.DelimitedRangesSequence>;
			public constructor(param0: string, param1: number, param2: number, param3: kotlin.jvm.functions.Function2<any,any,kotlin.Pair<java.lang.Integer,java.lang.Integer>>);
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
		export class MatchGroup extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.MatchGroup>;
			public equals(param0: any): boolean;
			public toString(): string;
			public getRange(): kotlin.ranges.IntRange;
			public component2(): kotlin.ranges.IntRange;
			public constructor(param0: string, param1: kotlin.ranges.IntRange);
			public component1(): string;
			public copy(param0: string, param1: kotlin.ranges.IntRange): kotlin.text.MatchGroup;
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
				removeIf(param0: any /* any*/): boolean;
				retainAll(param0: java.util.Collection<any>): boolean;
				clear(): void;
				equals(param0: any): boolean;
				hashCode(): number;
				spliterator(): java.util.Spliterator<any>;
				stream(): java.util.stream.Stream<any>;
				parallelStream(): java.util.stream.Stream<any>;
				iterator(): java.util.Iterator<any>;
				forEach(param0: any /* any*/): void;
				spliterator(): java.util.Spliterator<any>;
			});
			public constructor();
			public clear(): void;
			public equals(param0: any): boolean;
			public toArray(): any[];
			public size(): number;
			public isEmpty(): boolean;
			public stream(): java.util.stream.Stream<any>;
			public toArray(param0: any[]): any[];
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public forEach(param0: any /* any*/): void;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public contains(param0: any): boolean;
			public add(param0: any): boolean;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public spliterator(): java.util.Spliterator<any>;
			public get(param0: number): kotlin.text.MatchGroup;
			public removeIf(param0: any /* any*/): boolean;
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
				removeIf(param0: any /* any*/): boolean;
				retainAll(param0: java.util.Collection<any>): boolean;
				clear(): void;
				equals(param0: any): boolean;
				hashCode(): number;
				spliterator(): java.util.Spliterator<any>;
				stream(): java.util.stream.Stream<any>;
				parallelStream(): java.util.stream.Stream<any>;
				iterator(): java.util.Iterator<any>;
				forEach(param0: any /* any*/): void;
				spliterator(): java.util.Spliterator<any>;
			});
			public constructor();
			public clear(): void;
			public equals(param0: any): boolean;
			public toArray(): any[];
			public size(): number;
			public isEmpty(): boolean;
			public stream(): java.util.stream.Stream<any>;
			public toArray(param0: any[]): any[];
			public addAll(param0: java.util.Collection<any>): boolean;
			public retainAll(param0: java.util.Collection<any>): boolean;
			public forEach(param0: any /* any*/): void;
			public remove(param0: any): boolean;
			public containsAll(param0: java.util.Collection<any>): boolean;
			public contains(param0: any): boolean;
			public add(param0: any): boolean;
			public removeAll(param0: java.util.Collection<any>): boolean;
			public get(param0: string): kotlin.text.MatchGroup;
			public spliterator(): java.util.Spliterator<any>;
			public get(param0: number): kotlin.text.MatchGroup;
			public removeIf(param0: any /* any*/): boolean;
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
				public static getDestructured(param0: kotlin.text.MatchResult): kotlin.text.MatchResult.Destructured;
			}
			export class Destructured extends java.lang.Object {
				public static class: java.lang.Class<kotlin.text.MatchResult.Destructured>;
				public toList(): java.util.List<string>;
				public constructor(param0: kotlin.text.MatchResult);
				public getMatch(): kotlin.text.MatchResult;
			}
		}
	}
}

declare module kotlin {
	export module text {
		export class MatcherMatchResult extends java.lang.Object implements kotlin.text.MatchResult {
			public static class: java.lang.Class<kotlin.text.MatcherMatchResult>;
			public constructor(param0: java.util.regex.Matcher, param1: string);
			public next(): kotlin.text.MatchResult;
			public getRange(): kotlin.ranges.IntRange;
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
			public static Companion: kotlin.text.Regex.Companion;
			public getOptions(): java.util.Set<kotlin.text.RegexOption>;
			public matches(param0: string): boolean;
			public split(param0: string, param1: number): java.util.List<string>;
			public replace(param0: string, param1: string): string;
			public matchEntire(param0: string): kotlin.text.MatchResult;
			public containsMatchIn(param0: string): boolean;
			public find(param0: string, param1: number): kotlin.text.MatchResult;
			public toString(): string;
			public constructor(param0: java.util.regex.Pattern);
			public toPattern(): java.util.regex.Pattern;
			public findAll(param0: string, param1: number): kotlin.sequences.Sequence<kotlin.text.MatchResult>;
			public replace(param0: string, param1: kotlin.jvm.functions.Function1<any,any>): string;
			public constructor(param0: string, param1: java.util.Set<any>);
			public getPattern(): string;
			public constructor(param0: string, param1: kotlin.text.RegexOption);
			public constructor(param0: string);
			public replaceFirst(param0: string, param1: string): string;
		}
		export module Regex {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.text.Regex.Companion>;
				public escapeReplacement(param0: string): string;
				public escape(param0: string): string;
				public fromLiteral(param0: string): kotlin.text.Regex;
			}
			export class Serialized extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<kotlin.text.Regex.Serialized>;
				public static Companion: kotlin.text.Regex.Serialized.Companion;
				public constructor(param0: string, param1: number);
				public getFlags(): number;
				public getPattern(): string;
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
		export class RegexKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.RegexKt>;
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
			public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			public getMask(): number;
			public static values(): kotlin.text.RegexOption[];
			public static valueOf(param0: string): kotlin.text.RegexOption;
		}
	}
}

declare module kotlin {
	export module text {
		export class ScreenFloatValueRegEx extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.ScreenFloatValueRegEx>;
			public static value: kotlin.text.Regex;
			public static INSTANCE: kotlin.text.ScreenFloatValueRegEx;
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt extends kotlin.text.StringsKt___StringsKt {
			public static class: java.lang.Class<kotlin.text.StringsKt>;
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__AppendableKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.StringsKt__AppendableKt>;
			public static append(param0: java.lang.Appendable, param1: string[]): java.lang.Appendable;
			public static appendRange(param0: java.lang.Appendable, param1: string, param2: number, param3: number): java.lang.Appendable;
			public constructor();
			public static appendElement(param0: java.lang.Appendable, param1: any, param2: kotlin.jvm.functions.Function1<any,any>): void;
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__IndentKt extends kotlin.text.StringsKt__AppendableKt {
			public static class: java.lang.Class<kotlin.text.StringsKt__IndentKt>;
			public static trimMargin(param0: string, param1: string): string;
			public static replaceIndentByMargin(param0: string, param1: string, param2: string): string;
			public static prependIndent(param0: string, param1: string): string;
			public static trimIndent(param0: string): string;
			public static replaceIndent(param0: string, param1: string): string;
			public constructor();
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__RegexExtensionsJVMKt extends kotlin.text.StringsKt__IndentKt {
			public static class: java.lang.Class<kotlin.text.StringsKt__RegexExtensionsJVMKt>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__RegexExtensionsKt extends kotlin.text.StringsKt__RegexExtensionsJVMKt {
			public static class: java.lang.Class<kotlin.text.StringsKt__RegexExtensionsKt>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__StringBuilderJVMKt extends kotlin.text.StringsKt__RegexExtensionsKt {
			public static class: java.lang.Class<kotlin.text.StringsKt__StringBuilderJVMKt>;
			public static clear(param0: java.lang.StringBuilder): java.lang.StringBuilder;
			/** @deprecated */
			public static appendln(param0: java.lang.StringBuilder): java.lang.StringBuilder;
			public constructor();
			/** @deprecated */
			public static appendln(param0: java.lang.Appendable): java.lang.Appendable;
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__StringBuilderKt extends kotlin.text.StringsKt__StringBuilderJVMKt {
			public static class: java.lang.Class<kotlin.text.StringsKt__StringBuilderKt>;
			public static append(param0: java.lang.Appendable, param1: string[]): java.lang.Appendable;
			public static append(param0: java.lang.StringBuilder, param1: any[]): java.lang.StringBuilder;
			public constructor();
			public static append(param0: java.lang.StringBuilder, param1: string[]): java.lang.StringBuilder;
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__StringNumberConversionsJVMKt extends kotlin.text.StringsKt__StringBuilderKt {
			public static class: java.lang.Class<kotlin.text.StringsKt__StringNumberConversionsJVMKt>;
			public static toBigIntegerOrNull(param0: string): java.math.BigInteger;
			public static toBigDecimalOrNull(param0: string, param1: java.math.MathContext): java.math.BigDecimal;
			public static toBigIntegerOrNull(param0: string, param1: number): java.math.BigInteger;
			public static toFloatOrNull(param0: string): java.lang.Float;
			public constructor();
			public static toDoubleOrNull(param0: string): java.lang.Double;
			public static toBigDecimalOrNull(param0: string): java.math.BigDecimal;
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__StringNumberConversionsKt extends kotlin.text.StringsKt__StringNumberConversionsJVMKt {
			public static class: java.lang.Class<kotlin.text.StringsKt__StringNumberConversionsKt>;
			public static toLongOrNull(param0: string, param1: number): java.lang.Long;
			public static toByteOrNull(param0: string, param1: number): java.lang.Byte;
			public static toLongOrNull(param0: string): java.lang.Long;
			public static toShortOrNull(param0: string, param1: number): java.lang.Short;
			public static numberFormatError(param0: string): java.lang.Void;
			public constructor();
			public static toIntOrNull(param0: string, param1: number): java.lang.Integer;
			public static toByteOrNull(param0: string): java.lang.Byte;
			public static toShortOrNull(param0: string): java.lang.Short;
			public static toIntOrNull(param0: string): java.lang.Integer;
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__StringsJVMKt extends kotlin.text.StringsKt__StringNumberConversionsKt {
			public static class: java.lang.Class<kotlin.text.StringsKt__StringsJVMKt>;
			public equals(param0: any): boolean;
			public static decodeToString(param0: number[], param1: number, param2: number, param3: boolean): string;
			public static contentEquals(param0: string, param1: string, param2: boolean): boolean;
			/** @deprecated */
			public static capitalize(param0: string, param1: java.util.Locale): string;
			public static toCharArray(param0: string, param1: number, param2: number): string[];
			public static concatToString(param0: string[], param1: number, param2: number): string;
			public static startsWith(param0: string, param1: string, param2: boolean): boolean;
			public static concatToString(param0: string[]): string;
			public static split(param0: string, param1: java.util.regex.Pattern, param2: number): java.util.List<string>;
			/** @deprecated */
			public static decapitalize(param0: string): string;
			public static isBlank(param0: string): boolean;
			public static regionMatches(param0: string, param1: number, param2: string, param3: number, param4: number, param5: boolean): boolean;
			public static startsWith(param0: string, param1: string, param2: number, param3: boolean): boolean;
			public static encodeToByteArray(param0: string): number[];
			public static compareTo(param0: string, param1: string, param2: boolean): number;
			public static getCASE_INSENSITIVE_ORDER(param0: kotlin.jvm.internal.StringCompanionObject): java.util.Comparator<string>;
			public constructor();
			public static equals(param0: string, param1: string, param2: boolean): boolean;
			public static replaceFirst(param0: string, param1: string, param2: string, param3: boolean): string;
			public static replace(param0: string, param1: string, param2: string, param3: boolean): string;
			public static endsWith(param0: string, param1: string, param2: boolean): boolean;
			/** @deprecated */
			public static decapitalize(param0: string, param1: java.util.Locale): string;
			public static contentEquals(param0: string, param1: string): boolean;
			public static encodeToByteArray(param0: string, param1: number, param2: number, param3: boolean): number[];
			/** @deprecated */
			public static capitalize(param0: string): string;
			public static decodeToString(param0: number[]): string;
			public static repeat(param0: string, param1: number): string;
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__StringsKt extends kotlin.text.StringsKt__StringsJVMKt {
			public static class: java.lang.Class<kotlin.text.StringsKt__StringsKt>;
			public static indexOf(param0: string, param1: string, param2: number, param3: boolean): number;
			public static indexOfAny(param0: string, param1: java.util.Collection<string>, param2: number, param3: boolean): number;
			public static lastIndexOfAny(param0: string, param1: java.util.Collection<string>, param2: number, param3: boolean): number;
			public static toBooleanStrict(param0: string): boolean;
			public static replaceRange(param0: string, param1: kotlin.ranges.IntRange, param2: string): string;
			public static startsWith(param0: string, param1: string, param2: boolean): boolean;
			public static commonSuffixWith(param0: string, param1: string, param2: boolean): string;
			public static trimEnd(param0: string): string;
			public static lines(param0: string): java.util.List<string>;
			public static trimStart(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static removeRange(param0: string, param1: kotlin.ranges.IntRange): string;
			public static removeSurrounding(param0: string, param1: string): string;
			public static padEnd(param0: string, param1: number, param2: string): string;
			public static replaceBefore(param0: string, param1: string, param2: string, param3: string): string;
			public static substringBeforeLast(param0: string, param1: string, param2: string): string;
			public static substringAfterLast(param0: string, param1: string, param2: string): string;
			public static removeSuffix(param0: string, param1: string): string;
			public static padStart(param0: string, param1: number, param2: string): string;
			public constructor();
			public static substringBefore(param0: string, param1: string, param2: string): string;
			public static lastIndexOfAny(param0: string, param1: string[], param2: number, param3: boolean): number;
			public static removeRange(param0: string, param1: number, param2: number): string;
			public static substringAfter(param0: string, param1: string, param2: string): string;
			public static replaceAfter(param0: string, param1: string, param2: string, param3: string): string;
			public static trimStart(param0: string, param1: string[]): string;
			public static endsWith(param0: string, param1: string, param2: boolean): boolean;
			public static removePrefix(param0: string, param1: string): string;
			public static split(param0: string, param1: string[], param2: boolean, param3: number): java.util.List<string>;
			public static removeSurrounding(param0: string, param1: string, param2: string): string;
			public static splitToSequence(param0: string, param1: string[], param2: boolean, param3: number): kotlin.sequences.Sequence<string>;
			public static lastIndexOf(param0: string, param1: string, param2: number, param3: boolean): number;
			public static hasSurrogatePairAt(param0: string, param1: number): boolean;
			public static replaceBeforeLast(param0: string, param1: string, param2: string, param3: string): string;
			public static trimEnd(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static trim(param0: string): string;
			public static trim(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static getIndices(param0: string): kotlin.ranges.IntRange;
			public static commonPrefixWith(param0: string, param1: string, param2: boolean): string;
			public static split(param0: string, param1: java.util.regex.Pattern, param2: number): java.util.List<string>;
			public static lineSequence(param0: string): kotlin.sequences.Sequence<string>;
			public static findLastAnyOf(param0: string, param1: java.util.Collection<string>, param2: number, param3: boolean): kotlin.Pair<java.lang.Integer,string>;
			public static replaceRange(param0: string, param1: number, param2: number, param3: string): string;
			public static iterator(param0: string): kotlin.collections.CharIterator;
			public static startsWith(param0: string, param1: string, param2: number, param3: boolean): boolean;
			public static contains(param0: string, param1: string, param2: boolean): boolean;
			public static contentEqualsImpl(param0: string, param1: string): boolean;
			public static toBooleanStrictOrNull(param0: string): java.lang.Boolean;
			public static getLastIndex(param0: string): number;
			public static substring(param0: string, param1: kotlin.ranges.IntRange): string;
			public static trim(param0: string, param1: string[]): string;
			public static indexOfAny(param0: string, param1: string[], param2: number, param3: boolean): number;
			public static trimStart(param0: string): string;
			public static replaceAfterLast(param0: string, param1: string, param2: string, param3: string): string;
			public static contentEqualsIgnoreCaseImpl(param0: string, param1: string): boolean;
			public static subSequence(param0: string, param1: kotlin.ranges.IntRange): string;
			public static trimEnd(param0: string, param1: string[]): string;
			public static findAnyOf(param0: string, param1: java.util.Collection<string>, param2: number, param3: boolean): kotlin.Pair<java.lang.Integer,string>;
			public static regionMatchesImpl(param0: string, param1: number, param2: string, param3: number, param4: number, param5: boolean): boolean;
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt___StringsJvmKt extends kotlin.text.StringsKt__StringsKt {
			public static class: java.lang.Class<kotlin.text.StringsKt___StringsJvmKt>;
			public static toSortedSet(param0: string): java.util.SortedSet<java.lang.Character>;
			public constructor();
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt___StringsKt extends kotlin.text.StringsKt___StringsJvmKt {
			public static class: java.lang.Class<kotlin.text.StringsKt___StringsKt>;
			public static associateTo(param0: string, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static runningFoldIndexed(param0: string, param1: any, param2: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.List<any>;
			public static maxByOrNull(param0: string, param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Character;
			/** @deprecated */
			public static maxBy(param0: string, param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Character;
			public static associateBy(param0: string, param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			/** @deprecated */
			public static minWith(param0: string, param1: java.util.Comparator<any>): java.lang.Character;
			public static maxOrNull(param0: string): java.lang.Character;
			public static windowedSequence(param0: string, param1: number, param2: number, param3: boolean): kotlin.sequences.Sequence<string>;
			public static mapNotNullTo(param0: string, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static takeWhile(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static toSet(param0: string): java.util.Set<java.lang.Character>;
			public static flatMap(param0: string, param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static windowed(param0: string, param1: number, param2: number, param3: boolean): java.util.List<string>;
			public static filterTo(param0: string, param1: java.lang.Appendable, param2: kotlin.jvm.functions.Function1<any,any>): java.lang.Appendable;
			public static groupBy(param0: string, param1: kotlin.jvm.functions.Function1<any,any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static slice(param0: string, param1: kotlin.ranges.IntRange): string;
			public static single(param0: string): string;
			public static filterNot(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static indexOfLast(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static dropWhile(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static partition(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): kotlin.Pair<string,string>;
			public static none(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static reduceRightIndexedOrNull(param0: string, param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Character>): java.lang.Character;
			public static windowedSequence(param0: string, param1: number, param2: number, param3: boolean, param4: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public constructor();
			public static foldIndexed(param0: string, param1: any, param2: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static mapIndexedTo(param0: string, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static chunked(param0: string, param1: number, param2: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static random(param0: string, param1: kotlin.random.Random): string;
			public static randomOrNull(param0: string, param1: kotlin.random.Random): java.lang.Character;
			public static firstOrNull(param0: string): java.lang.Character;
			public static first(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static foldRightIndexed(param0: string, param1: any, param2: kotlin.jvm.functions.Function3<any,any,any,any>): any;
			public static dropLastWhile(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static mapNotNull(param0: string, param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static forEachIndexed(param0: string, param1: kotlin.jvm.functions.Function2<any,any,kotlin.Unit>): void;
			public static takeLastWhile(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static scanIndexed(param0: string, param1: any, param2: kotlin.jvm.functions.Function3<any,any,any,any>): java.util.List<any>;
			/** @deprecated */
			public static min(param0: string): java.lang.Character;
			public static drop(param0: string, param1: number): string;
			public static mapTo(param0: string, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static scan(param0: string, param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			/** @deprecated */
			public static sumByDouble(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Double>): number;
			public static mapIndexed(param0: string, param1: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static minByOrNull(param0: string, param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Character;
			public static chunked(param0: string, param1: number): java.util.List<string>;
			public static singleOrNull(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Character;
			public static reduceRightOrNull(param0: string, param1: kotlin.jvm.functions.Function2<any,any,java.lang.Character>): java.lang.Character;
			public static all(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static last(param0: string): string;
			public static associateWithTo(param0: string, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static groupBy(param0: string, param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static groupByTo(param0: string, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>, param3: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static onEachIndexed(param0: string, param1: kotlin.jvm.functions.Function2<any,any,any>): string;
			public static runningReduceIndexed(param0: string, param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Character>): java.util.List<java.lang.Character>;
			public static reduceRight(param0: string, param1: kotlin.jvm.functions.Function2<any,any,java.lang.Character>): string;
			public static dropLast(param0: string, param1: number): string;
			public static associate(param0: string, param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			/** @deprecated */
			public static sumBy(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Integer>): number;
			public static groupByTo(param0: string, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static chunkedSequence(param0: string, param1: number): kotlin.sequences.Sequence<string>;
			public static filterNotTo(param0: string, param1: java.lang.Appendable, param2: kotlin.jvm.functions.Function1<any,any>): java.lang.Appendable;
			public static getOrNull(param0: string, param1: number): java.lang.Character;
			public static lastOrNull(param0: string): java.lang.Character;
			public static minOrNull(param0: string): java.lang.Character;
			public static mapIndexedNotNull(param0: string, param1: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static reduceOrNull(param0: string, param1: kotlin.jvm.functions.Function2<any,any,java.lang.Character>): java.lang.Character;
			public static slice(param0: string, param1: java.lang.Iterable<java.lang.Integer>): string;
			public static foldRight(param0: string, param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static toHashSet(param0: string): java.util.HashSet<java.lang.Character>;
			public static associateByTo(param0: string, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>, param3: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static indexOfFirst(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static runningReduce(param0: string, param1: kotlin.jvm.functions.Function2<any,any,java.lang.Character>): java.util.List<java.lang.Character>;
			public static mapIndexedNotNullTo(param0: string, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.Collection<any>;
			public static filterIndexedTo(param0: string, param1: java.lang.Appendable, param2: kotlin.jvm.functions.Function2<any,any,any>): java.lang.Appendable;
			public static reduceIndexed(param0: string, param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Character>): string;
			public static flatMapTo(param0: string, param1: java.util.Collection<any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Collection<any>;
			public static maxWithOrNull(param0: string, param1: java.util.Comparator<any>): java.lang.Character;
			public static chunkedSequence(param0: string, param1: number, param2: kotlin.jvm.functions.Function1<any,any>): kotlin.sequences.Sequence<any>;
			public static zip(param0: string, param1: string): java.util.List<kotlin.Pair<java.lang.Character,java.lang.Character>>;
			public static onEach(param0: string, param1: kotlin.jvm.functions.Function1<any,any>): string;
			public static associateBy(param0: string, param1: kotlin.jvm.functions.Function1<any,any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static fold(param0: string, param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): any;
			public static toMutableList(param0: string): java.util.List<java.lang.Character>;
			public static reversed(param0: string): string;
			public static zip(param0: string, param1: string, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static firstOrNull(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Character;
			public static filterIndexed(param0: string, param1: kotlin.jvm.functions.Function2<any,any,java.lang.Boolean>): string;
			public static map(param0: string, param1: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
			public static takeLast(param0: string, param1: number): string;
			public static asIterable(param0: string): java.lang.Iterable<java.lang.Character>;
			public static any(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): boolean;
			public static zipWithNext(param0: string): java.util.List<kotlin.Pair<java.lang.Character,java.lang.Character>>;
			public static associateByTo(param0: string, param1: java.util.Map<any, any>, param2: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static any(param0: string): boolean;
			public static reduceIndexedOrNull(param0: string, param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Character>): java.lang.Character;
			public static lastOrNull(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): java.lang.Character;
			public static minWithOrNull(param0: string, param1: java.util.Comparator<any>): java.lang.Character;
			public static last(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static withIndex(param0: string): java.lang.Iterable<kotlin.collections.IndexedValue<java.lang.Character>>;
			public static zipWithNext(param0: string, param1: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static toList(param0: string): java.util.List<java.lang.Character>;
			/** @deprecated */
			public static max(param0: string): java.lang.Character;
			public static runningFold(param0: string, param1: any, param2: kotlin.jvm.functions.Function2<any,any,any>): java.util.List<any>;
			public static first(param0: string): string;
			/** @deprecated */
			public static minBy(param0: string, param1: kotlin.jvm.functions.Function1<any,any>): java.lang.Character;
			public static none(param0: string): boolean;
			public static reduce(param0: string, param1: kotlin.jvm.functions.Function2<any,any,java.lang.Character>): string;
			public static associateWith(param0: string, param1: kotlin.jvm.functions.Function1<any,any>): java.util.Map<any, any>;
			public static filter(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static take(param0: string, param1: number): string;
			public static groupingBy(param0: string, param1: kotlin.jvm.functions.Function1<any,any>): kotlin.collections.Grouping<any,any>;
			public static singleOrNull(param0: string): java.lang.Character;
			public static forEach(param0: string, param1: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
			public static single(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): string;
			public static reduceRightIndexed(param0: string, param1: kotlin.jvm.functions.Function3<any,any,any,java.lang.Character>): string;
			public static toCollection(param0: string, param1: java.util.Collection<any>): java.util.Collection<any>;
			public static count(param0: string, param1: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): number;
			public static asSequence(param0: string): kotlin.sequences.Sequence<java.lang.Character>;
			/** @deprecated */
			public static maxWith(param0: string, param1: java.util.Comparator<any>): java.lang.Character;
			public static windowed(param0: string, param1: number, param2: number, param3: boolean, param4: kotlin.jvm.functions.Function1<any,any>): java.util.List<any>;
		}
	}
}

declare module kotlin {
	export module text {
		export class SystemProperties extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.SystemProperties>;
			public static LINE_SEPARATOR: string;
			public static INSTANCE: kotlin.text.SystemProperties;
		}
	}
}

declare module kotlin {
	export module text {
		export class TypeAliasesKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.TypeAliasesKt>;
		}
	}
}

declare module kotlin {
	export module text {
		export class Typography extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.Typography>;
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
			public static leftGuillemete: string;
			public static rightGuillemete: string;
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
			public static INSTANCE: kotlin.text.Typography;
		}
	}
}

declare module kotlin {
	export module text {
		export class UStringsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text.UStringsKt>;
			public static toUShort(param0: string): number;
			public static toUShortOrNull(param0: string): kotlin.UShort;
			public static toUShort(param0: string, param1: number): number;
			public static toUByteOrNull(param0: string): kotlin.UByte;
			public static toULongOrNull(param0: string, param1: number): kotlin.ULong;
			public static toUIntOrNull(param0: string): kotlin.UInt;
			public static toUInt(param0: string): number;
			public static toULong(param0: string): number;
			public static toUByteOrNull(param0: string, param1: number): kotlin.UByte;
			public static toUIntOrNull(param0: string, param1: number): kotlin.UInt;
			public static toUShortOrNull(param0: string, param1: number): kotlin.UShort;
			public static toULong(param0: string, param1: number): number;
			public static toUInt(param0: string, param1: number): number;
			public static toUByte(param0: string): number;
			public static toUByte(param0: string, param1: number): number;
			public static toULongOrNull(param0: string): kotlin.ULong;
		}
	}
}

declare module kotlin {
	export module text {
		export class _OneToManyTitlecaseMappingsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.text._OneToManyTitlecaseMappingsKt>;
			public static titlecaseImpl(param0: string): string;
		}
	}
}

declare module kotlin {
	export module text {
		export module jdk8 {
			export class RegexExtensionsJDK8Kt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.text.jdk8.RegexExtensionsJDK8Kt>;
				public static get(param0: kotlin.text.MatchGroupCollection, param1: string): kotlin.text.MatchGroup;
			}
		}
	}
}

declare module kotlin {
	export module time {
		export abstract class AbstractDoubleTimeSource extends java.lang.Object implements kotlin.time.TimeSource {
			public static class: java.lang.Class<kotlin.time.AbstractDoubleTimeSource>;
			public constructor(param0: java.util.concurrent.TimeUnit);
			public markNow(): kotlin.time.TimeMark;
			public getUnit(): java.util.concurrent.TimeUnit;
			public read(): number;
		}
		export module AbstractDoubleTimeSource {
			export class DoubleTimeMark extends kotlin.time.TimeMark {
				public static class: java.lang.Class<kotlin.time.AbstractDoubleTimeSource.DoubleTimeMark>;
			}
		}
	}
}

declare module kotlin {
	export module time {
		export abstract class AbstractLongTimeSource extends java.lang.Object implements kotlin.time.TimeSource {
			public static class: java.lang.Class<kotlin.time.AbstractLongTimeSource>;
			public constructor(param0: java.util.concurrent.TimeUnit);
			public markNow(): kotlin.time.TimeMark;
			public getUnit(): java.util.concurrent.TimeUnit;
			public read(): number;
		}
		export module AbstractLongTimeSource {
			export class LongTimeMark extends kotlin.time.TimeMark {
				public static class: java.lang.Class<kotlin.time.AbstractLongTimeSource.LongTimeMark>;
			}
		}
	}
}

declare module kotlin {
	export module time {
		export class AdjustedTimeMark extends kotlin.time.TimeMark {
			public static class: java.lang.Class<kotlin.time.AdjustedTimeMark>;
			public getMark(): kotlin.time.TimeMark;
		}
	}
}

declare module kotlin {
	export module time {
		export class Duration extends java.lang.Comparable<kotlin.time.Duration> {
			public static class: java.lang.Class<kotlin.time.Duration>;
			public static Companion: kotlin.time.Duration.Companion;
			public hashCode(): number;
		}
		export module Duration {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.time.Duration.Companion>;
			}
		}
	}
}

declare module kotlin {
	export module time {
		export class DurationKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.time.DurationKt>;
			public static NANOS_IN_MILLIS: number;
			public static MAX_NANOS: number;
			public static MAX_MILLIS: number;
			/** @deprecated */
			public static getSeconds(param0: number): number;
			/** @deprecated */
			public static getNanoseconds(param0: number): number;
			/** @deprecated */
			public static getMilliseconds(param0: number): number;
			/** @deprecated */
			public static getDays(param0: number): number;
			/** @deprecated */
			public static getMicroseconds(param0: number): number;
			/** @deprecated */
			public static getHours(param0: number): number;
			/** @deprecated */
			public static getMinutes(param0: number): number;
			public static toDuration(param0: number, param1: java.util.concurrent.TimeUnit): number;
		}
	}
}

declare module kotlin {
	export module time {
		export class DurationUnitKt extends kotlin.time.DurationUnitKt__DurationUnitKt {
			public static class: java.lang.Class<kotlin.time.DurationUnitKt>;
		}
		export module DurationUnitKt {
			export class WhenMappings extends java.lang.Object {
				public static class: java.lang.Class<kotlin.time.DurationUnitKt.WhenMappings>;
			}
		}
	}
}

declare module kotlin {
	export module time {
		export class DurationUnitKt__DurationUnitJvmKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.time.DurationUnitKt__DurationUnitJvmKt>;
			public static convertDurationUnit(param0: number, param1: java.util.concurrent.TimeUnit, param2: java.util.concurrent.TimeUnit): number;
			public static convertDurationUnitOverflow(param0: number, param1: java.util.concurrent.TimeUnit, param2: java.util.concurrent.TimeUnit): number;
			public constructor();
		}
	}
}

declare module kotlin {
	export module time {
		export class DurationUnitKt__DurationUnitKt extends kotlin.time.DurationUnitKt__DurationUnitJvmKt {
			public static class: java.lang.Class<kotlin.time.DurationUnitKt__DurationUnitKt>;
			public constructor();
			public static shortName(param0: java.util.concurrent.TimeUnit): string;
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
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module time {
		export class FormatToDecimalsKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.time.FormatToDecimalsKt>;
			public static formatToExactDecimals(param0: number, param1: number): string;
			public static formatUpToDecimals(param0: number, param1: number): string;
			public static formatScientific(param0: number): string;
		}
	}
}

declare module kotlin {
	export module time {
		export class MeasureTimeKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.time.MeasureTimeKt>;
			public static measureTime(param0: kotlin.time.TimeSource, param1: kotlin.jvm.functions.Function0<kotlin.Unit>): number;
			public static measureTime(param0: kotlin.jvm.functions.Function0<kotlin.Unit>): number;
			public static measureTimedValue(param0: kotlin.time.TimeSource, param1: kotlin.jvm.functions.Function0<any>): kotlin.time.TimedValue<any>;
			public static measureTimedValue(param0: kotlin.jvm.functions.Function0<any>): kotlin.time.TimedValue<any>;
		}
	}
}

declare module kotlin {
	export module time {
		export class MonotonicTimeSource extends kotlin.time.AbstractLongTimeSource implements kotlin.time.TimeSource {
			public static class: java.lang.Class<kotlin.time.MonotonicTimeSource>;
			public static INSTANCE: kotlin.time.MonotonicTimeSource;
			public markNow(): kotlin.time.TimeMark;
			public toString(): string;
			public read(): number;
		}
	}
}

declare module kotlin {
	export module time {
		export class TestTimeSource extends kotlin.time.AbstractLongTimeSource {
			public static class: java.lang.Class<kotlin.time.TestTimeSource>;
			public constructor(param0: java.util.concurrent.TimeUnit);
			public markNow(): kotlin.time.TimeMark;
			public constructor();
			public read(): number;
		}
	}
}

declare module kotlin {
	export module time {
		export abstract class TimeMark extends java.lang.Object {
			public static class: java.lang.Class<kotlin.time.TimeMark>;
			public hasPassedNow(): boolean;
			public hasNotPassedNow(): boolean;
			public constructor();
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
				<clinit>(): void;
			});
			public constructor();
			public static Companion: kotlin.time.TimeSource.Companion;
			public markNow(): kotlin.time.TimeMark;
		}
		export module TimeSource {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<kotlin.time.TimeSource.Companion>;
			}
			export class Monotonic extends java.lang.Object implements kotlin.time.TimeSource {
				public static class: java.lang.Class<kotlin.time.TimeSource.Monotonic>;
				public static INSTANCE: kotlin.time.TimeSource.Monotonic;
				public markNow(): kotlin.time.TimeMark;
				public toString(): string;
			}
		}
	}
}

declare module kotlin {
	export module time {
		export class TimeSourceKt extends java.lang.Object {
			public static class: java.lang.Class<kotlin.time.TimeSourceKt>;
		}
	}
}

declare module kotlin {
	export module time {
		export class TimedValue<T>  extends java.lang.Object {
			public static class: java.lang.Class<kotlin.time.TimedValue<any>>;
			public equals(param0: any): boolean;
			public toString(): string;
			public component1(): T;
			public getValue(): T;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module time {
		export module jdk8 {
			export class DurationConversionsJDK8Kt extends java.lang.Object {
				public static class: java.lang.Class<kotlin.time.jdk8.DurationConversionsJDK8Kt>;
			}
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
//kotlin.ranges.ComparableRange:1
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

