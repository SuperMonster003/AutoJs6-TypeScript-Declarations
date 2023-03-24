declare module com {
	export module jakewharton {
		export module retrofit2 {
			export module adapter {
				export module kotlin {
					export module coroutines {
						export class CoroutineCallAdapterFactory extends retrofit2.CallAdapter.Factory {
							public static class: java.lang.Class<com.jakewharton.retrofit2.adapter.kotlin.coroutines.CoroutineCallAdapterFactory>;
							public static create(): com.jakewharton.retrofit2.adapter.kotlin.coroutines.CoroutineCallAdapterFactory;
							public get(returnType: java.lang.reflect.Type, annotations: java.lang.annotation.Annotation[], retrofit: retrofit2.Retrofit): retrofit2.CallAdapter<any,any>;
							public get(param0: java.lang.reflect.Type, param1: java.lang.annotation.Annotation[], param2: retrofit2.Retrofit): retrofit2.CallAdapter<any,any>;
						}
						export module CoroutineCallAdapterFactory {
							export class BodyCallAdapter<T>  extends retrofit2.CallAdapter<any,kotlinx.coroutines.Deferred<any>> {
								public static class: java.lang.Class<com.jakewharton.retrofit2.adapter.kotlin.coroutines.CoroutineCallAdapterFactory.BodyCallAdapter<any>>;
								public adapt(param0: retrofit2.Call<any>): any;
								public constructor(responseType: java.lang.reflect.Type);
								public responseType(): java.lang.reflect.Type;
								public adapt(call: retrofit2.Call<any>): kotlinx.coroutines.Deferred<any>;
							}
							export class Companion extends java.lang.Object {
								public static class: java.lang.Class<com.jakewharton.retrofit2.adapter.kotlin.coroutines.CoroutineCallAdapterFactory.Companion>;
								public create(): com.jakewharton.retrofit2.adapter.kotlin.coroutines.CoroutineCallAdapterFactory;
							}
							export class ResponseCallAdapter<T>  extends retrofit2.CallAdapter<any,kotlinx.coroutines.Deferred<any>> {
								public static class: java.lang.Class<com.jakewharton.retrofit2.adapter.kotlin.coroutines.CoroutineCallAdapterFactory.ResponseCallAdapter<any>>;
								public adapt(param0: retrofit2.Call<any>): any;
								public constructor(responseType: java.lang.reflect.Type);
								public adapt(call: retrofit2.Call<any>): kotlinx.coroutines.Deferred<retrofit2.Response<any>>;
								public responseType(): java.lang.reflect.Type;
							}
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.jakewharton.retrofit2.adapter.kotlin.coroutines.CoroutineCallAdapterFactory.BodyCallAdapter:1
//com.jakewharton.retrofit2.adapter.kotlin.coroutines.CoroutineCallAdapterFactory.ResponseCallAdapter:1

