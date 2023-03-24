declare module retrofit2 {
	export module adapter {
		export module rxjava2 {
			export class BodyObservable<T>  extends io.reactivex.Observable<any> {
				public static class: java.lang.Class<retrofit2.adapter.rxjava2.BodyObservable<any>>;
				public subscribe(param0: io.reactivex.Observer<any>): void;
				public subscribeActual(param0: io.reactivex.Observer<any>): void;
				public subscribe(param0: io.reactivex.functions.Consumer<any>, param1: io.reactivex.functions.Consumer<any>): io.reactivex.disposables.Disposable;
				public subscribe(param0: io.reactivex.functions.Consumer<any>, param1: io.reactivex.functions.Consumer<any>, param2: io.reactivex.functions.Action, param3: io.reactivex.functions.Consumer<any>): io.reactivex.disposables.Disposable;
				public subscribeActual(observer: io.reactivex.Observer<any>): void;
				public subscribe(param0: io.reactivex.functions.Consumer<any>, param1: io.reactivex.functions.Consumer<any>, param2: io.reactivex.functions.Action): io.reactivex.disposables.Disposable;
				public subscribe(param0: io.reactivex.functions.Consumer<any>): io.reactivex.disposables.Disposable;
				public subscribe(): io.reactivex.disposables.Disposable;
			}
			export module BodyObservable {
				export class BodyObserver<R>  extends io.reactivex.Observer<retrofit2.Response<any>> {
					public static class: java.lang.Class<retrofit2.adapter.rxjava2.BodyObservable.BodyObserver<any>>;
					public onNext(response: retrofit2.Response<any>): void;
					public onSubscribe(param0: io.reactivex.disposables.Disposable): void;
					public onComplete(): void;
					public onError(throwable: java.lang.Throwable): void;
					public onError(param0: java.lang.Throwable): void;
					public onSubscribe(disposable: io.reactivex.disposables.Disposable): void;
					public onNext(param0: any): void;
				}
			}
		}
	}
}

declare module retrofit2 {
	export module adapter {
		export module rxjava2 {
			export class CallEnqueueObservable<T>  extends io.reactivex.Observable<retrofit2.Response<any>> {
				public static class: java.lang.Class<retrofit2.adapter.rxjava2.CallEnqueueObservable<any>>;
				public subscribe(param0: io.reactivex.Observer<any>): void;
				public subscribeActual(param0: io.reactivex.Observer<any>): void;
				public subscribe(param0: io.reactivex.functions.Consumer<any>, param1: io.reactivex.functions.Consumer<any>): io.reactivex.disposables.Disposable;
				public subscribe(param0: io.reactivex.functions.Consumer<any>, param1: io.reactivex.functions.Consumer<any>, param2: io.reactivex.functions.Action, param3: io.reactivex.functions.Consumer<any>): io.reactivex.disposables.Disposable;
				public subscribeActual(observer: io.reactivex.Observer<any>): void;
				public subscribe(param0: io.reactivex.functions.Consumer<any>, param1: io.reactivex.functions.Consumer<any>, param2: io.reactivex.functions.Action): io.reactivex.disposables.Disposable;
				public subscribe(param0: io.reactivex.functions.Consumer<any>): io.reactivex.disposables.Disposable;
				public subscribe(): io.reactivex.disposables.Disposable;
			}
			export module CallEnqueueObservable {
				export class CallCallback<T>  extends java.lang.Object {
					public static class: java.lang.Class<retrofit2.adapter.rxjava2.CallEnqueueObservable.CallCallback<any>>;
					public isDisposed(): boolean;
					public onResponse(param0: retrofit2.Call<T>, param1: retrofit2.Response<T>): void;
					public onFailure(param0: retrofit2.Call<T>, param1: java.lang.Throwable): void;
					public dispose(): void;
					public onResponse(call: retrofit2.Call<T>, response: retrofit2.Response<T>): void;
					public onFailure(call: retrofit2.Call<T>, t: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module retrofit2 {
	export module adapter {
		export module rxjava2 {
			export class CallExecuteObservable<T>  extends io.reactivex.Observable<retrofit2.Response<any>> {
				public static class: java.lang.Class<retrofit2.adapter.rxjava2.CallExecuteObservable<any>>;
				public subscribe(param0: io.reactivex.Observer<any>): void;
				public subscribeActual(param0: io.reactivex.Observer<any>): void;
				public subscribe(param0: io.reactivex.functions.Consumer<any>, param1: io.reactivex.functions.Consumer<any>): io.reactivex.disposables.Disposable;
				public subscribe(param0: io.reactivex.functions.Consumer<any>, param1: io.reactivex.functions.Consumer<any>, param2: io.reactivex.functions.Action, param3: io.reactivex.functions.Consumer<any>): io.reactivex.disposables.Disposable;
				public subscribeActual(observer: io.reactivex.Observer<any>): void;
				public subscribe(param0: io.reactivex.functions.Consumer<any>, param1: io.reactivex.functions.Consumer<any>, param2: io.reactivex.functions.Action): io.reactivex.disposables.Disposable;
				public subscribe(param0: io.reactivex.functions.Consumer<any>): io.reactivex.disposables.Disposable;
				public subscribe(): io.reactivex.disposables.Disposable;
			}
			export module CallExecuteObservable {
				export class CallDisposable extends java.lang.Object implements io.reactivex.disposables.Disposable {
					public static class: java.lang.Class<retrofit2.adapter.rxjava2.CallExecuteObservable.CallDisposable>;
					public isDisposed(): boolean;
					public dispose(): void;
				}
			}
		}
	}
}

declare module retrofit2 {
	export module adapter {
		export module rxjava2 {
			export class HttpException extends retrofit2.HttpException {
				public static class: java.lang.Class<retrofit2.adapter.rxjava2.HttpException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(param0: retrofit2.Response<any>);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor(response: retrofit2.Response<any>);
				public constructor();
			}
		}
	}
}

declare module retrofit2 {
	export module adapter {
		export module rxjava2 {
			export class Result<T>  extends java.lang.Object {
				public static class: java.lang.Class<retrofit2.adapter.rxjava2.Result<any>>;
				public isError(): boolean;
				public static error(error: java.lang.Throwable): retrofit2.adapter.rxjava2.Result<any>;
				public response(): retrofit2.Response<T>;
				public error(): java.lang.Throwable;
				public static response(response: retrofit2.Response): retrofit2.adapter.rxjava2.Result<any>;
			}
		}
	}
}

declare module retrofit2 {
	export module adapter {
		export module rxjava2 {
			export class ResultObservable<T>  extends io.reactivex.Observable<retrofit2.adapter.rxjava2.Result<any>> {
				public static class: java.lang.Class<retrofit2.adapter.rxjava2.ResultObservable<any>>;
				public subscribe(param0: io.reactivex.Observer<any>): void;
				public subscribeActual(param0: io.reactivex.Observer<any>): void;
				public subscribe(param0: io.reactivex.functions.Consumer<any>, param1: io.reactivex.functions.Consumer<any>): io.reactivex.disposables.Disposable;
				public subscribe(param0: io.reactivex.functions.Consumer<any>, param1: io.reactivex.functions.Consumer<any>, param2: io.reactivex.functions.Action, param3: io.reactivex.functions.Consumer<any>): io.reactivex.disposables.Disposable;
				public subscribeActual(observer: io.reactivex.Observer<any>): void;
				public subscribe(param0: io.reactivex.functions.Consumer<any>, param1: io.reactivex.functions.Consumer<any>, param2: io.reactivex.functions.Action): io.reactivex.disposables.Disposable;
				public subscribe(param0: io.reactivex.functions.Consumer<any>): io.reactivex.disposables.Disposable;
				public subscribe(): io.reactivex.disposables.Disposable;
			}
			export module ResultObservable {
				export class ResultObserver<R>  extends io.reactivex.Observer<retrofit2.Response<any>> {
					public static class: java.lang.Class<retrofit2.adapter.rxjava2.ResultObservable.ResultObserver<any>>;
					public onNext(response: retrofit2.Response<any>): void;
					public onSubscribe(param0: io.reactivex.disposables.Disposable): void;
					public onError(throwable: java.lang.Throwable): void;
					public onComplete(): void;
					public onError(param0: java.lang.Throwable): void;
					public onSubscribe(disposable: io.reactivex.disposables.Disposable): void;
					public onNext(param0: any): void;
				}
			}
		}
	}
}

declare module retrofit2 {
	export module adapter {
		export module rxjava2 {
			export class RxJava2CallAdapter<R>  extends retrofit2.CallAdapter<any,any> {
				public static class: java.lang.Class<retrofit2.adapter.rxjava2.RxJava2CallAdapter<any>>;
				public adapt(param0: retrofit2.Call<any>): any;
				public responseType(): java.lang.reflect.Type;
				public adapt(call: retrofit2.Call<any>): any;
			}
		}
	}
}

declare module retrofit2 {
	export module adapter {
		export module rxjava2 {
			export class RxJava2CallAdapterFactory extends retrofit2.CallAdapter.Factory {
				public static class: java.lang.Class<retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory>;
				public get(param0: java.lang.reflect.Type, param1: java.lang.annotation.Annotation[], param2: retrofit2.Retrofit): retrofit2.CallAdapter<any,any>;
				public static createWithScheduler(scheduler: io.reactivex.Scheduler): retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory;
				public static create(): retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory;
				public get(returnType: java.lang.reflect.Type, annotations: java.lang.annotation.Annotation[], retrofit: retrofit2.Retrofit): retrofit2.CallAdapter<any,any>;
				public static createAsync(): retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory;
			}
		}
	}
}

//Generics information:
//retrofit2.adapter.rxjava2.BodyObservable:1
//retrofit2.adapter.rxjava2.BodyObservable.BodyObserver:1
//retrofit2.adapter.rxjava2.CallEnqueueObservable:1
//retrofit2.adapter.rxjava2.CallEnqueueObservable.CallCallback:1
//retrofit2.adapter.rxjava2.CallExecuteObservable:1
//retrofit2.adapter.rxjava2.Result:1
//retrofit2.adapter.rxjava2.ResultObservable:1
//retrofit2.adapter.rxjava2.ResultObservable.ResultObserver:1
//retrofit2.adapter.rxjava2.RxJava2CallAdapter:1

