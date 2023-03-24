declare module retrofit2 {
	export class BuiltInConverters extends retrofit2.Converter.Factory {
		public static class: java.lang.Class<retrofit2.BuiltInConverters>;
		public requestBodyConverter(type: java.lang.reflect.Type, parameterAnnotations: java.lang.annotation.Annotation[], methodAnnotations: java.lang.annotation.Annotation[], retrofit: retrofit2.Retrofit): retrofit2.Converter<any,okhttp3.RequestBody>;
		public responseBodyConverter(type: java.lang.reflect.Type, annotations: java.lang.annotation.Annotation[], retrofit: retrofit2.Retrofit): retrofit2.Converter<okhttp3.ResponseBody,any>;
	}
	export module BuiltInConverters {
		export class BufferingResponseBodyConverter extends retrofit2.Converter<okhttp3.ResponseBody,okhttp3.ResponseBody> {
			public static class: java.lang.Class<retrofit2.BuiltInConverters.BufferingResponseBodyConverter>;
			public convert(value: okhttp3.ResponseBody): okhttp3.ResponseBody;
			public convert(param0: any): any;
		}
		export class RequestBodyConverter extends retrofit2.Converter<okhttp3.RequestBody,okhttp3.RequestBody> {
			public static class: java.lang.Class<retrofit2.BuiltInConverters.RequestBodyConverter>;
			public convert(value: okhttp3.RequestBody): okhttp3.RequestBody;
			public convert(param0: any): any;
		}
		export class StreamingResponseBodyConverter extends retrofit2.Converter<okhttp3.ResponseBody,okhttp3.ResponseBody> {
			public static class: java.lang.Class<retrofit2.BuiltInConverters.StreamingResponseBodyConverter>;
			public convert(value: okhttp3.ResponseBody): okhttp3.ResponseBody;
			public convert(param0: any): any;
		}
		export class ToStringConverter extends retrofit2.Converter<any,string> {
			public static class: java.lang.Class<retrofit2.BuiltInConverters.ToStringConverter>;
			public convert(value: any): string;
			public convert(param0: any): any;
		}
		export class UnitResponseBodyConverter extends retrofit2.Converter<okhttp3.ResponseBody,kotlin.Unit> {
			public static class: java.lang.Class<retrofit2.BuiltInConverters.UnitResponseBodyConverter>;
			public convert(value: okhttp3.ResponseBody): kotlin.Unit;
			public convert(param0: any): any;
		}
		export class VoidResponseBodyConverter extends retrofit2.Converter<okhttp3.ResponseBody,java.lang.Void> {
			public static class: java.lang.Class<retrofit2.BuiltInConverters.VoidResponseBodyConverter>;
			public convert(value: okhttp3.ResponseBody): java.lang.Void;
			public convert(param0: any): any;
		}
	}
}

declare module retrofit2 {
	export class Call<T>  extends java.lang.Cloneable {
		public static class: java.lang.Class<retrofit2.Call<any>>;
		/**
		 * Constructs a new instance of the retrofit2.Call<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			execute(): retrofit2.Response<any>;
			enqueue(param0: retrofit2.Callback<any>): void;
			isExecuted(): boolean;
			cancel(): void;
			isCanceled(): boolean;
			clone(): retrofit2.Call<any>;
			request(): okhttp3.Request;
			timeout(): okio.Timeout;
		});
		public constructor();
		public clone(): retrofit2.Call<any>;
		public isExecuted(): boolean;
		public execute(): retrofit2.Response<any>;
		public request(): okhttp3.Request;
		public isCanceled(): boolean;
		public clone(): any;
		public enqueue(param0: retrofit2.Callback<any>): void;
		public cancel(): void;
		public timeout(): okio.Timeout;
	}
}

declare module retrofit2 {
	export class CallAdapter<R, T>  extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.CallAdapter<any,any>>;
		/**
		 * Constructs a new instance of the retrofit2.CallAdapter<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			responseType(): java.lang.reflect.Type;
			adapt(param0: retrofit2.Call<R>): T;
		});
		public constructor();
		public responseType(): java.lang.reflect.Type;
		public adapt(param0: retrofit2.Call<R>): T;
	}
	export module CallAdapter {
		export abstract class Factory extends java.lang.Object {
			public static class: java.lang.Class<retrofit2.CallAdapter.Factory>;
			public static getRawType(type: java.lang.reflect.Type): java.lang.Class<any>;
			public static getParameterUpperBound(index: number, type: java.lang.reflect.ParameterizedType): java.lang.reflect.Type;
			public constructor();
			public get(param0: java.lang.reflect.Type, param1: java.lang.annotation.Annotation[], param2: retrofit2.Retrofit): retrofit2.CallAdapter<any,any>;
		}
	}
}

declare module retrofit2 {
	export class Callback<T>  extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.Callback<any>>;
		/**
		 * Constructs a new instance of the retrofit2.Callback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			onResponse(param0: retrofit2.Call<T>, param1: retrofit2.Response<T>): void;
			onFailure(param0: retrofit2.Call<T>, param1: java.lang.Throwable): void;
		});
		public constructor();
		public onResponse(param0: retrofit2.Call<T>, param1: retrofit2.Response<T>): void;
		public onFailure(param0: retrofit2.Call<T>, param1: java.lang.Throwable): void;
	}
}

declare module retrofit2 {
	export class CompletableFutureCallAdapterFactory extends retrofit2.CallAdapter.Factory {
		public static class: java.lang.Class<retrofit2.CompletableFutureCallAdapterFactory>;
		public get(returnType: java.lang.reflect.Type, annotations: java.lang.annotation.Annotation[], retrofit: retrofit2.Retrofit): retrofit2.CallAdapter<any,any>;
		public get(param0: java.lang.reflect.Type, param1: java.lang.annotation.Annotation[], param2: retrofit2.Retrofit): retrofit2.CallAdapter<any,any>;
	}
	export module CompletableFutureCallAdapterFactory {
		export class BodyCallAdapter<R>  extends retrofit2.CallAdapter<any,java.util.concurrent.CompletableFuture<any>> {
			public static class: java.lang.Class<retrofit2.CompletableFutureCallAdapterFactory.BodyCallAdapter<any>>;
			public adapt(call: retrofit2.Call<any>): java.util.concurrent.CompletableFuture<any>;
			public responseType(): java.lang.reflect.Type;
			public adapt(param0: retrofit2.Call<any>): any;
		}
		export module BodyCallAdapter {
			export class BodyCallback extends retrofit2.Callback<any> {
				public static class: java.lang.Class<retrofit2.CompletableFutureCallAdapterFactory.BodyCallAdapter.BodyCallback>;
				public onFailure(param0: retrofit2.Call<any>, param1: java.lang.Throwable): void;
				public constructor(param0: java.util.concurrent.CompletableFuture<any>);
				public onFailure(call: retrofit2.Call<any>, t: java.lang.Throwable): void;
				public onResponse(call: retrofit2.Call<any>, response: retrofit2.Response<any>): void;
				public onResponse(param0: retrofit2.Call<any>, param1: retrofit2.Response<any>): void;
			}
		}
		export class CallCancelCompletableFuture<T>  extends java.util.concurrent.CompletableFuture<any> {
			public static class: java.lang.Class<retrofit2.CompletableFutureCallAdapterFactory.CallCancelCompletableFuture<any>>;
			public thenAcceptBothAsync(other: java.util.concurrent.CompletionStage, action: any /* any*/, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture;
			public handleAsync(fn: any /* any*/, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture;
			public thenApplyAsync(fn: any /* any*/): java.util.concurrent.CompletableFuture;
			public thenComposeAsync(param0: any /* any*/, param1: java.util.concurrent.Executor): java.util.concurrent.CompletionStage;
			public thenAcceptBoth(param0: java.util.concurrent.CompletionStage, param1: any /* any*/): java.util.concurrent.CompletionStage;
			public whenCompleteAsync(action: any /* any<any,any>*/, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<any>;
			public thenRunAsync(param0: java.lang.Runnable): java.util.concurrent.CompletionStage<java.lang.Void>;
			public runAfterBoth(param0: java.util.concurrent.CompletionStage<any>, param1: java.lang.Runnable): java.util.concurrent.CompletionStage<java.lang.Void>;
			public handle(param0: any /* any*/): java.util.concurrent.CompletionStage;
			public handleAsync(param0: any /* any*/, param1: java.util.concurrent.Executor): java.util.concurrent.CompletionStage;
			public thenRunAsync(action: java.lang.Runnable): java.util.concurrent.CompletableFuture<java.lang.Void>;
			public applyToEither(param0: java.util.concurrent.CompletionStage, param1: any /* any*/): java.util.concurrent.CompletionStage;
			public runAfterBothAsync(other: java.util.concurrent.CompletionStage<any>, action: java.lang.Runnable, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<java.lang.Void>;
			public handleAsync(param0: any /* any*/): java.util.concurrent.CompletionStage;
			public exceptionally(param0: any /* any<java.lang.Throwable,any>*/): java.util.concurrent.CompletionStage<any>;
			public applyToEitherAsync(param0: java.util.concurrent.CompletionStage, param1: any /* any*/): java.util.concurrent.CompletionStage;
			public runAfterBothAsync(param0: java.util.concurrent.CompletionStage<any>, param1: java.lang.Runnable): java.util.concurrent.CompletionStage<java.lang.Void>;
			public acceptEither(param0: java.util.concurrent.CompletionStage<any>, param1: any /* any*/): java.util.concurrent.CompletionStage<java.lang.Void>;
			public thenCompose(param0: any /* any*/): java.util.concurrent.CompletionStage;
			public whenComplete(param0: any /* any<any,any>*/): java.util.concurrent.CompletionStage<any>;
			public thenAcceptAsync(action: any /* any*/, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<java.lang.Void>;
			public runAfterEither(param0: java.util.concurrent.CompletionStage<any>, param1: java.lang.Runnable): java.util.concurrent.CompletionStage<java.lang.Void>;
			public thenComposeAsync(param0: any /* any*/): java.util.concurrent.CompletionStage;
			public acceptEitherAsync(param0: java.util.concurrent.CompletionStage<any>, param1: any /* any*/, param2: java.util.concurrent.Executor): java.util.concurrent.CompletionStage<java.lang.Void>;
			public thenAcceptBothAsync(param0: java.util.concurrent.CompletionStage, param1: any /* any*/, param2: java.util.concurrent.Executor): java.util.concurrent.CompletionStage;
			public thenComposeAsync(fn: any /* any*/, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture;
			public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
			public thenApplyAsync(param0: any /* any*/): java.util.concurrent.CompletionStage;
			public isCancelled(): boolean;
			public exceptionally(fn: any /* any<java.lang.Throwable,any>*/): java.util.concurrent.CompletableFuture<any>;
			public thenAcceptAsync(action: any /* any*/): java.util.concurrent.CompletableFuture<java.lang.Void>;
			public thenRunAsync(action: java.lang.Runnable, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<java.lang.Void>;
			public cancel(mayInterruptIfRunning: boolean): boolean;
			public applyToEitherAsync(param0: java.util.concurrent.CompletionStage, param1: any /* any*/, param2: java.util.concurrent.Executor): java.util.concurrent.CompletionStage;
			public thenCombineAsync(other: java.util.concurrent.CompletionStage, fn: any /* any*/, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture;
			public thenApplyAsync(param0: any /* any*/, param1: java.util.concurrent.Executor): java.util.concurrent.CompletionStage;
			public whenComplete(action: any /* any<any,any>*/): java.util.concurrent.CompletableFuture<any>;
			public thenRun(param0: java.lang.Runnable): java.util.concurrent.CompletionStage<java.lang.Void>;
			public applyToEitherAsync(other: java.util.concurrent.CompletionStage, fn: any /* any*/, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture;
			public thenCompose(fn: any /* any*/): java.util.concurrent.CompletableFuture;
			public thenCombineAsync(param0: java.util.concurrent.CompletionStage, param1: any /* any*/): java.util.concurrent.CompletionStage;
			public whenCompleteAsync(param0: any /* any<any,any>*/, param1: java.util.concurrent.Executor): java.util.concurrent.CompletionStage<any>;
			public get(timeout: number, param1: java.util.concurrent.TimeUnit): any;
			public thenApply(fn: any /* any*/): java.util.concurrent.CompletableFuture;
			public runAfterEitherAsync(other: java.util.concurrent.CompletionStage<any>, action: java.lang.Runnable, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<java.lang.Void>;
			public get(): any;
			public thenRunAsync(param0: java.lang.Runnable, param1: java.util.concurrent.Executor): java.util.concurrent.CompletionStage<java.lang.Void>;
			public isDone(): boolean;
			public acceptEitherAsync(other: java.util.concurrent.CompletionStage<any>, action: any /* any*/, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<java.lang.Void>;
			public thenComposeAsync(fn: any /* any*/): java.util.concurrent.CompletableFuture;
			public thenApplyAsync(fn: any /* any*/, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture;
			public acceptEitherAsync(other: java.util.concurrent.CompletionStage<any>, action: any /* any*/): java.util.concurrent.CompletableFuture<java.lang.Void>;
			public acceptEither(other: java.util.concurrent.CompletionStage<any>, action: any /* any*/): java.util.concurrent.CompletableFuture<java.lang.Void>;
			public handle(fn: any /* any*/): java.util.concurrent.CompletableFuture;
			public thenApply(param0: any /* any*/): java.util.concurrent.CompletionStage;
			public thenAcceptAsync(param0: any /* any*/, param1: java.util.concurrent.Executor): java.util.concurrent.CompletionStage<java.lang.Void>;
			public handleAsync(fn: any /* any*/): java.util.concurrent.CompletableFuture;
			public toCompletableFuture(): java.util.concurrent.CompletableFuture<any>;
			public whenCompleteAsync(param0: any /* any<any,any>*/): java.util.concurrent.CompletionStage<any>;
			public thenAcceptBoth(other: java.util.concurrent.CompletionStage, action: any /* any*/): java.util.concurrent.CompletableFuture;
			public runAfterEitherAsync(param0: java.util.concurrent.CompletionStage<any>, param1: java.lang.Runnable): java.util.concurrent.CompletionStage<java.lang.Void>;
			public thenAcceptBothAsync(param0: java.util.concurrent.CompletionStage, param1: any /* any*/): java.util.concurrent.CompletionStage;
			public runAfterEitherAsync(other: java.util.concurrent.CompletionStage<any>, action: java.lang.Runnable): java.util.concurrent.CompletableFuture<java.lang.Void>;
			public runAfterEitherAsync(param0: java.util.concurrent.CompletionStage<any>, param1: java.lang.Runnable, param2: java.util.concurrent.Executor): java.util.concurrent.CompletionStage<java.lang.Void>;
			public thenCombine(other: java.util.concurrent.CompletionStage, fn: any /* any*/): java.util.concurrent.CompletableFuture;
			public applyToEither(other: java.util.concurrent.CompletionStage, fn: any /* any*/): java.util.concurrent.CompletableFuture;
			public acceptEitherAsync(param0: java.util.concurrent.CompletionStage<any>, param1: any /* any*/): java.util.concurrent.CompletionStage<java.lang.Void>;
			public thenCombine(param0: java.util.concurrent.CompletionStage, param1: any /* any*/): java.util.concurrent.CompletionStage;
			public runAfterBoth(other: java.util.concurrent.CompletionStage<any>, action: java.lang.Runnable): java.util.concurrent.CompletableFuture<java.lang.Void>;
			public runAfterBothAsync(param0: java.util.concurrent.CompletionStage<any>, param1: java.lang.Runnable, param2: java.util.concurrent.Executor): java.util.concurrent.CompletionStage<java.lang.Void>;
			public thenAcceptAsync(param0: any /* any*/): java.util.concurrent.CompletionStage<java.lang.Void>;
			public thenAccept(param0: any /* any*/): java.util.concurrent.CompletionStage<java.lang.Void>;
			public thenRun(action: java.lang.Runnable): java.util.concurrent.CompletableFuture<java.lang.Void>;
			public thenCombineAsync(other: java.util.concurrent.CompletionStage, fn: any /* any*/): java.util.concurrent.CompletableFuture;
			public whenCompleteAsync(action: any /* any<any,any>*/): java.util.concurrent.CompletableFuture<any>;
			public cancel(param0: boolean): boolean;
			public thenAccept(action: any /* any*/): java.util.concurrent.CompletableFuture<java.lang.Void>;
			public runAfterEither(other: java.util.concurrent.CompletionStage<any>, action: java.lang.Runnable): java.util.concurrent.CompletableFuture<java.lang.Void>;
			public applyToEitherAsync(other: java.util.concurrent.CompletionStage, fn: any /* any*/): java.util.concurrent.CompletableFuture;
			public thenCombineAsync(param0: java.util.concurrent.CompletionStage, param1: any /* any*/, param2: java.util.concurrent.Executor): java.util.concurrent.CompletionStage;
			public thenAcceptBothAsync(other: java.util.concurrent.CompletionStage, action: any /* any*/): java.util.concurrent.CompletableFuture;
			public runAfterBothAsync(other: java.util.concurrent.CompletionStage<any>, action: java.lang.Runnable): java.util.concurrent.CompletableFuture<java.lang.Void>;
		}
		export class ResponseCallAdapter<R>  extends retrofit2.CallAdapter<any,java.util.concurrent.CompletableFuture<retrofit2.Response<any>>> {
			public static class: java.lang.Class<retrofit2.CompletableFutureCallAdapterFactory.ResponseCallAdapter<any>>;
			public responseType(): java.lang.reflect.Type;
			public adapt(call: retrofit2.Call<any>): java.util.concurrent.CompletableFuture<retrofit2.Response<any>>;
			public adapt(param0: retrofit2.Call<any>): any;
		}
		export module ResponseCallAdapter {
			export class ResponseCallback extends retrofit2.Callback<any> {
				public static class: java.lang.Class<retrofit2.CompletableFutureCallAdapterFactory.ResponseCallAdapter.ResponseCallback>;
				public constructor(param0: java.util.concurrent.CompletableFuture<retrofit2.Response<any>>);
				public onFailure(param0: retrofit2.Call<any>, param1: java.lang.Throwable): void;
				public onFailure(call: retrofit2.Call<any>, t: java.lang.Throwable): void;
				public onResponse(call: retrofit2.Call<any>, response: retrofit2.Response<any>): void;
				public onResponse(param0: retrofit2.Call<any>, param1: retrofit2.Response<any>): void;
			}
		}
	}
}

declare module retrofit2 {
	export class Converter<F, T>  extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.Converter<any,any>>;
		/**
		 * Constructs a new instance of the retrofit2.Converter<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			convert(param0: F): T;
		});
		public constructor();
		public convert(param0: F): T;
	}
	export module Converter {
		export abstract class Factory extends java.lang.Object {
			public static class: java.lang.Class<retrofit2.Converter.Factory>;
			public static getRawType(type: java.lang.reflect.Type): java.lang.Class<any>;
			public responseBodyConverter(type: java.lang.reflect.Type, annotations: java.lang.annotation.Annotation[], retrofit: retrofit2.Retrofit): retrofit2.Converter<okhttp3.ResponseBody,any>;
			public stringConverter(type: java.lang.reflect.Type, annotations: java.lang.annotation.Annotation[], retrofit: retrofit2.Retrofit): retrofit2.Converter<any,string>;
			public static getParameterUpperBound(index: number, type: java.lang.reflect.ParameterizedType): java.lang.reflect.Type;
			public constructor();
			public requestBodyConverter(type: java.lang.reflect.Type, parameterAnnotations: java.lang.annotation.Annotation[], methodAnnotations: java.lang.annotation.Annotation[], retrofit: retrofit2.Retrofit): retrofit2.Converter<any,okhttp3.RequestBody>;
		}
	}
}

declare module retrofit2 {
	export class DefaultCallAdapterFactory extends retrofit2.CallAdapter.Factory {
		public static class: java.lang.Class<retrofit2.DefaultCallAdapterFactory>;
		public get(returnType: java.lang.reflect.Type, annotations: java.lang.annotation.Annotation[], retrofit: retrofit2.Retrofit): retrofit2.CallAdapter<any,any>;
		public get(param0: java.lang.reflect.Type, param1: java.lang.annotation.Annotation[], param2: retrofit2.Retrofit): retrofit2.CallAdapter<any,any>;
	}
	export module DefaultCallAdapterFactory {
		export class ExecutorCallbackCall<T>  extends retrofit2.Call<any> {
			public static class: java.lang.Class<retrofit2.DefaultCallAdapterFactory.ExecutorCallbackCall<any>>;
			public enqueue(callback: retrofit2.Callback<any>): void;
			public clone(): retrofit2.Call<any>;
			public request(): okhttp3.Request;
			public clone(): any;
			public timeout(): okio.Timeout;
			public execute(): retrofit2.Response<any>;
			public isExecuted(): boolean;
			public cancel(): void;
			public isCanceled(): boolean;
			public enqueue(param0: retrofit2.Callback<any>): void;
		}
	}
}

declare module retrofit2 {
	export class HttpException extends java.lang.RuntimeException {
		public static class: java.lang.Class<retrofit2.HttpException>;
		public constructor();
		public constructor(response: retrofit2.Response<any>);
		public constructor(message: string, cause: java.lang.Throwable);
		public constructor(message: string);
		public code(): number;
		public response(): retrofit2.Response<any>;
		public message(): string;
		public constructor(cause: java.lang.Throwable);
		public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
	}
}

declare module retrofit2 {
	export abstract class HttpServiceMethod<ResponseT, ReturnT>  extends retrofit2.ServiceMethod<any> {
		public static class: java.lang.Class<retrofit2.HttpServiceMethod<any,any>>;
		public adapt(param0: retrofit2.Call<any>, param1: any[]): any;
	}
	export module HttpServiceMethod {
		export class CallAdapted<ResponseT, ReturnT>  extends retrofit2.HttpServiceMethod<any,any> {
			public static class: java.lang.Class<retrofit2.HttpServiceMethod.CallAdapted<any,any>>;
			public adapt(call: retrofit2.Call<any>, args: any[]): any;
			public adapt(param0: retrofit2.Call<any>, param1: any[]): any;
		}
		export class SuspendForBody<ResponseT>  extends retrofit2.HttpServiceMethod<any,any> {
			public static class: java.lang.Class<retrofit2.HttpServiceMethod.SuspendForBody<any>>;
			public adapt(call: retrofit2.Call<any>, args: any[]): any;
			public adapt(param0: retrofit2.Call<any>, param1: any[]): any;
		}
		export class SuspendForResponse<ResponseT>  extends retrofit2.HttpServiceMethod<any,any> {
			public static class: java.lang.Class<retrofit2.HttpServiceMethod.SuspendForResponse<any>>;
			public adapt(call: retrofit2.Call<any>, args: any[]): any;
			public adapt(param0: retrofit2.Call<any>, param1: any[]): any;
		}
	}
}

declare module retrofit2 {
	export class Invocation extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.Invocation>;
		public method(): java.lang.reflect.Method;
		public static of(method: java.lang.reflect.Method, arguments: java.util.List<any>): retrofit2.Invocation;
		public toString(): string;
		public arguments(): java.util.List<any>;
	}
}

declare module retrofit2 {
	export class KotlinExtensions extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.KotlinExtensions>;
		public static awaitResponse($this$awaitResponse: retrofit2.Call<any>, $completion: kotlin.coroutines.Continuation): any;
		public static suspendAndThrow($this$suspendAndThrow: java.lang.Exception, $completion: kotlin.coroutines.Continuation<any>): any;
		public static awaitNullable($this$await: retrofit2.Call<any>, $completion: kotlin.coroutines.Continuation): any;
		public static await($this$await: retrofit2.Call<any>, $completion: kotlin.coroutines.Continuation): any;
	}
}

declare module retrofit2 {
	export class OkHttpCall<T>  extends retrofit2.Call<any> {
		public static class: java.lang.Class<retrofit2.OkHttpCall<any>>;
		public clone(): retrofit2.Call<any>;
		public isExecuted(): boolean;
		public enqueue(callback: retrofit2.Callback<any>): void;
		public execute(): retrofit2.Response<any>;
		public request(): okhttp3.Request;
		public clone(): retrofit2.OkHttpCall<any>;
		public isCanceled(): boolean;
		public clone(): any;
		public enqueue(param0: retrofit2.Callback<any>): void;
		public timeout(): okio.Timeout;
		public cancel(): void;
	}
	export module OkHttpCall {
		export class ExceptionCatchingResponseBody extends okhttp3.ResponseBody {
			public static class: java.lang.Class<retrofit2.OkHttpCall.ExceptionCatchingResponseBody>;
			public contentLength(): number;
			public source(): okio.BufferedSource;
			public contentType(): okhttp3.MediaType;
			public close(): void;
		}
		export class NoContentResponseBody extends okhttp3.ResponseBody {
			public static class: java.lang.Class<retrofit2.OkHttpCall.NoContentResponseBody>;
			public contentLength(): number;
			public source(): okio.BufferedSource;
			public contentType(): okhttp3.MediaType;
			public close(): void;
		}
	}
}

declare module retrofit2 {
	export class OptionalConverterFactory extends retrofit2.Converter.Factory {
		public static class: java.lang.Class<retrofit2.OptionalConverterFactory>;
		public responseBodyConverter(type: java.lang.reflect.Type, annotations: java.lang.annotation.Annotation[], retrofit: retrofit2.Retrofit): retrofit2.Converter<okhttp3.ResponseBody,any>;
	}
	export module OptionalConverterFactory {
		export class OptionalConverter<T>  extends retrofit2.Converter<okhttp3.ResponseBody,java.util.Optional<any>> {
			public static class: java.lang.Class<retrofit2.OptionalConverterFactory.OptionalConverter<any>>;
			public convert(value: okhttp3.ResponseBody): java.util.Optional<any>;
			public convert(param0: any): any;
		}
	}
}

declare module retrofit2 {
	export abstract class ParameterHandler<T>  extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.ParameterHandler<any>>;
	}
	export module ParameterHandler {
		export class Body<T>  extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.Body<any>>;
		}
		export class Field<T>  extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.Field<any>>;
		}
		export class FieldMap<T>  extends retrofit2.ParameterHandler<java.util.Map<string,any>> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.FieldMap<any>>;
		}
		export class Header<T>  extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.Header<any>>;
		}
		export class HeaderMap<T>  extends retrofit2.ParameterHandler<java.util.Map<string,any>> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.HeaderMap<any>>;
		}
		export class Headers extends retrofit2.ParameterHandler<okhttp3.Headers> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.Headers>;
		}
		export class Part<T>  extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.Part<any>>;
		}
		export class PartMap<T>  extends retrofit2.ParameterHandler<java.util.Map<string,any>> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.PartMap<any>>;
		}
		export class Path<T>  extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.Path<any>>;
		}
		export class Query<T>  extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.Query<any>>;
		}
		export class QueryMap<T>  extends retrofit2.ParameterHandler<java.util.Map<string,any>> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.QueryMap<any>>;
		}
		export class QueryName<T>  extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.QueryName<any>>;
		}
		export class RawPart extends retrofit2.ParameterHandler<okhttp3.MultipartBody.Part> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.RawPart>;
		}
		export class RelativeUrl extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.RelativeUrl>;
		}
		export class Tag<T>  extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.Tag<any>>;
		}
	}
}

declare module retrofit2 {
	export class Platform extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.Platform>;
	}
	export module Platform {
		export class Android extends retrofit2.Platform {
			public static class: java.lang.Class<retrofit2.Platform.Android>;
			public defaultCallbackExecutor(): java.util.concurrent.Executor;
		}
		export module Android {
			export class MainThreadExecutor extends java.lang.Object implements java.util.concurrent.Executor {
				public static class: java.lang.Class<retrofit2.Platform.Android.MainThreadExecutor>;
				public execute(param0: java.lang.Runnable): void;
				public execute(r: java.lang.Runnable): void;
			}
		}
	}
}

declare module retrofit2 {
	export class RequestBuilder extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.RequestBuilder>;
	}
	export module RequestBuilder {
		export class ContentTypeOverridingRequestBody extends okhttp3.RequestBody {
			public static class: java.lang.Class<retrofit2.RequestBuilder.ContentTypeOverridingRequestBody>;
			public contentLength(): number;
			public writeTo(param0: okio.BufferedSink): void;
			public writeTo(sink: okio.BufferedSink): void;
			public contentType(): okhttp3.MediaType;
		}
	}
}

declare module retrofit2 {
	export class RequestFactory extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.RequestFactory>;
	}
	export module RequestFactory {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<retrofit2.RequestFactory.Builder>;
		}
	}
}

declare module retrofit2 {
	export class Response<T>  extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.Response<any>>;
		public static success(body: any, headers: okhttp3.Headers): retrofit2.Response<any>;
		public headers(): okhttp3.Headers;
		public body(): T;
		public errorBody(): okhttp3.ResponseBody;
		public raw(): okhttp3.Response;
		public toString(): string;
		public static success(code: number, body: any): retrofit2.Response<any>;
		public static success(body: any): retrofit2.Response<any>;
		public isSuccessful(): boolean;
		public static error(body: okhttp3.ResponseBody, rawResponse: okhttp3.Response): retrofit2.Response<any>;
		public static error(code: number, body: okhttp3.ResponseBody): retrofit2.Response<any>;
		public code(): number;
		public static success(body: any, rawResponse: okhttp3.Response): retrofit2.Response<any>;
		public message(): string;
	}
}

declare module retrofit2 {
	export class Retrofit extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.Retrofit>;
		public requestBodyConverter(type: java.lang.reflect.Type, parameterAnnotations: java.lang.annotation.Annotation[], methodAnnotations: java.lang.annotation.Annotation[]): retrofit2.Converter<any,any>;
		public nextRequestBodyConverter(skipPast: retrofit2.Converter.Factory, type: java.lang.reflect.Type, parameterAnnotations: java.lang.annotation.Annotation[], methodAnnotations: java.lang.annotation.Annotation[]): retrofit2.Converter<any,any>;
		public create(service: java.lang.Class<any>): any;
		public stringConverter(type: java.lang.reflect.Type, annotations: java.lang.annotation.Annotation[]): retrofit2.Converter<any,any>;
		public callFactory(): okhttp3.Call.Factory;
		public callAdapter(returnType: java.lang.reflect.Type, annotations: java.lang.annotation.Annotation[]): retrofit2.CallAdapter<any,any>;
		public baseUrl(): okhttp3.HttpUrl;
		public newBuilder(): retrofit2.Retrofit.Builder;
		public nextCallAdapter(skipPast: retrofit2.CallAdapter.Factory, returnType: java.lang.reflect.Type, annotations: java.lang.annotation.Annotation[]): retrofit2.CallAdapter<any,any>;
		public responseBodyConverter(type: java.lang.reflect.Type, annotations: java.lang.annotation.Annotation[]): retrofit2.Converter<any,any>;
		public callbackExecutor(): java.util.concurrent.Executor;
		public callAdapterFactories(): java.util.List<retrofit2.CallAdapter.Factory>;
		public converterFactories(): java.util.List<retrofit2.Converter.Factory>;
		public nextResponseBodyConverter(skipPast: retrofit2.Converter.Factory, type: java.lang.reflect.Type, annotations: java.lang.annotation.Annotation[]): retrofit2.Converter<any,any>;
	}
	export module Retrofit {
		export class Builder extends java.lang.Object {
			public static class: java.lang.Class<retrofit2.Retrofit.Builder>;
			public callFactory(factory: okhttp3.Call.Factory): retrofit2.Retrofit.Builder;
			public baseUrl(baseUrl: string): retrofit2.Retrofit.Builder;
			public constructor();
			public baseUrl(baseUrl: java.net.URL): retrofit2.Retrofit.Builder;
			public baseUrl(baseUrl: okhttp3.HttpUrl): retrofit2.Retrofit.Builder;
			public validateEagerly(validateEagerly: boolean): retrofit2.Retrofit.Builder;
			public callAdapterFactories(): java.util.List<retrofit2.CallAdapter.Factory>;
			public callbackExecutor(executor: java.util.concurrent.Executor): retrofit2.Retrofit.Builder;
			public converterFactories(): java.util.List<retrofit2.Converter.Factory>;
			public client(client: okhttp3.OkHttpClient): retrofit2.Retrofit.Builder;
			public addCallAdapterFactory(factory: retrofit2.CallAdapter.Factory): retrofit2.Retrofit.Builder;
			public build(): retrofit2.Retrofit;
			public addConverterFactory(factory: retrofit2.Converter.Factory): retrofit2.Retrofit.Builder;
		}
	}
}

declare module retrofit2 {
	export abstract class ServiceMethod<T>  extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.ServiceMethod<any>>;
	}
}

declare module retrofit2 {
	export class SkipCallbackExecutor extends java.lang.Object implements java.lang.annotation.Annotation {
		public static class: java.lang.Class<retrofit2.SkipCallbackExecutor>;
		/**
		 * Constructs a new instance of the retrofit2.SkipCallbackExecutor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module retrofit2 {
	export class SkipCallbackExecutorImpl extends java.lang.Object implements retrofit2.SkipCallbackExecutor {
		public static class: java.lang.Class<retrofit2.SkipCallbackExecutorImpl>;
		public equals(obj: any): boolean;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public annotationType(): java.lang.Class<any>;
	}
}

declare module retrofit2 {
	export class Utils extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.Utils>;
	}
	export module Utils {
		export class GenericArrayTypeImpl extends java.lang.Object implements java.lang.reflect.GenericArrayType {
			public static class: java.lang.Class<retrofit2.Utils.GenericArrayTypeImpl>;
			public toString(): string;
			public equals(obj: any): boolean;
			public equals(o: any): boolean;
			public getGenericComponentType(): java.lang.reflect.Type;
			public hashCode(): number;
		}
		export class ParameterizedTypeImpl extends java.lang.Object implements java.lang.reflect.ParameterizedType {
			public static class: java.lang.Class<retrofit2.Utils.ParameterizedTypeImpl>;
			public getRawType(): java.lang.reflect.Type;
			public equals(other: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public getOwnerType(): java.lang.reflect.Type;
			public getActualTypeArguments(): java.lang.reflect.Type[];
			public hashCode(): number;
		}
		export class WildcardTypeImpl extends java.lang.Object implements java.lang.reflect.WildcardType {
			public static class: java.lang.Class<retrofit2.Utils.WildcardTypeImpl>;
			public equals(other: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public getLowerBounds(): java.lang.reflect.Type[];
			public getUpperBounds(): java.lang.reflect.Type[];
			public hashCode(): number;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Body extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.Body>;
			/**
			 * Constructs a new instance of the retrofit2.http.Body interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module retrofit2 {
	export module http {
		export class DELETE extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.DELETE>;
			/**
			 * Constructs a new instance of the retrofit2.http.DELETE interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module retrofit2 {
	export module http {
		export class Field extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.Field>;
			/**
			 * Constructs a new instance of the retrofit2.http.Field interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
				encoded(): boolean;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public encoded(): boolean;
			public value(): string;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class FieldMap extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.FieldMap>;
			/**
			 * Constructs a new instance of the retrofit2.http.FieldMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				encoded(): boolean;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public encoded(): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class FormUrlEncoded extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.FormUrlEncoded>;
			/**
			 * Constructs a new instance of the retrofit2.http.FormUrlEncoded interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module retrofit2 {
	export module http {
		export class GET extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.GET>;
			/**
			 * Constructs a new instance of the retrofit2.http.GET interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module retrofit2 {
	export module http {
		export class HEAD extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.HEAD>;
			/**
			 * Constructs a new instance of the retrofit2.http.HEAD interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module retrofit2 {
	export module http {
		export class HTTP extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.HTTP>;
			/**
			 * Constructs a new instance of the retrofit2.http.HTTP interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				method(): string;
				path(): string;
				hasBody(): boolean;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public hasBody(): boolean;
			public equals(obj: any): boolean;
			public method(): string;
			public annotationType(): java.lang.Class<any>;
			public path(): string;
			public hashCode(): number;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Header extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.Header>;
			/**
			 * Constructs a new instance of the retrofit2.http.Header interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module retrofit2 {
	export module http {
		export class HeaderMap extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.HeaderMap>;
			/**
			 * Constructs a new instance of the retrofit2.http.HeaderMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module retrofit2 {
	export module http {
		export class Headers extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.Headers>;
			/**
			 * Constructs a new instance of the retrofit2.http.Headers interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string[];
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public value(): string[];
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Multipart extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.Multipart>;
			/**
			 * Constructs a new instance of the retrofit2.http.Multipart interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module retrofit2 {
	export module http {
		export class OPTIONS extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.OPTIONS>;
			/**
			 * Constructs a new instance of the retrofit2.http.OPTIONS interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module retrofit2 {
	export module http {
		export class PATCH extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.PATCH>;
			/**
			 * Constructs a new instance of the retrofit2.http.PATCH interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module retrofit2 {
	export module http {
		export class POST extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.POST>;
			/**
			 * Constructs a new instance of the retrofit2.http.POST interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module retrofit2 {
	export module http {
		export class PUT extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.PUT>;
			/**
			 * Constructs a new instance of the retrofit2.http.PUT interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module retrofit2 {
	export module http {
		export class Part extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.Part>;
			/**
			 * Constructs a new instance of the retrofit2.http.Part interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
				encoding(): string;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public encoding(): string;
			public toString(): string;
			public equals(obj: any): boolean;
			public value(): string;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class PartMap extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.PartMap>;
			/**
			 * Constructs a new instance of the retrofit2.http.PartMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				encoding(): string;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public encoding(): string;
			public toString(): string;
			public equals(obj: any): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Path extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.Path>;
			/**
			 * Constructs a new instance of the retrofit2.http.Path interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
				encoded(): boolean;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public encoded(): boolean;
			public value(): string;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Query extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.Query>;
			/**
			 * Constructs a new instance of the retrofit2.http.Query interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
				encoded(): boolean;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public encoded(): boolean;
			public value(): string;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class QueryMap extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.QueryMap>;
			/**
			 * Constructs a new instance of the retrofit2.http.QueryMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				encoded(): boolean;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public encoded(): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class QueryName extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.QueryName>;
			/**
			 * Constructs a new instance of the retrofit2.http.QueryName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				encoded(): boolean;
				equals(param0: any): boolean;
				hashCode(): number;
				toString(): string;
				annotationType(): java.lang.Class<any>;
			});
			public constructor();
			public equals(param0: any): boolean;
			public toString(): string;
			public equals(obj: any): boolean;
			public encoded(): boolean;
			public annotationType(): java.lang.Class<any>;
			public hashCode(): number;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Streaming extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.Streaming>;
			/**
			 * Constructs a new instance of the retrofit2.http.Streaming interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module retrofit2 {
	export module http {
		export class Tag extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.Tag>;
			/**
			 * Constructs a new instance of the retrofit2.http.Tag interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module retrofit2 {
	export module http {
		export class Url extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.http.Url>;
			/**
			 * Constructs a new instance of the retrofit2.http.Url interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module retrofit2 {
	export module internal {
		export class EverythingIsNonNull extends java.lang.Object implements java.lang.annotation.Annotation {
			public static class: java.lang.Class<retrofit2.internal.EverythingIsNonNull>;
			/**
			 * Constructs a new instance of the retrofit2.internal.EverythingIsNonNull interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

//Generics information:
//retrofit2.Call:1
//retrofit2.CallAdapter:2
//retrofit2.Callback:1
//retrofit2.CompletableFutureCallAdapterFactory.BodyCallAdapter:1
//retrofit2.CompletableFutureCallAdapterFactory.CallCancelCompletableFuture:1
//retrofit2.CompletableFutureCallAdapterFactory.ResponseCallAdapter:1
//retrofit2.Converter:2
//retrofit2.DefaultCallAdapterFactory.ExecutorCallbackCall:1
//retrofit2.HttpServiceMethod:2
//retrofit2.HttpServiceMethod.CallAdapted:2
//retrofit2.HttpServiceMethod.SuspendForBody:1
//retrofit2.HttpServiceMethod.SuspendForResponse:1
//retrofit2.OkHttpCall:1
//retrofit2.OptionalConverterFactory.OptionalConverter:1
//retrofit2.ParameterHandler:1
//retrofit2.ParameterHandler.Body:1
//retrofit2.ParameterHandler.Field:1
//retrofit2.ParameterHandler.FieldMap:1
//retrofit2.ParameterHandler.Header:1
//retrofit2.ParameterHandler.HeaderMap:1
//retrofit2.ParameterHandler.Part:1
//retrofit2.ParameterHandler.PartMap:1
//retrofit2.ParameterHandler.Path:1
//retrofit2.ParameterHandler.Query:1
//retrofit2.ParameterHandler.QueryMap:1
//retrofit2.ParameterHandler.QueryName:1
//retrofit2.ParameterHandler.Tag:1
//retrofit2.Response:1
//retrofit2.ServiceMethod:1

