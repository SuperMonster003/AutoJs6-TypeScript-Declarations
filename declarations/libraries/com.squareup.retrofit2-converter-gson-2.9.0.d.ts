declare module retrofit2 {
	export module converter {
		export module gson {
			export class GsonConverterFactory extends retrofit2.Converter.Factory {
				public static class: java.lang.Class<retrofit2.converter.gson.GsonConverterFactory>;
				public requestBodyConverter(type: java.lang.reflect.Type, parameterAnnotations: java.lang.annotation.Annotation[], methodAnnotations: java.lang.annotation.Annotation[], retrofit: retrofit2.Retrofit): retrofit2.Converter<any,okhttp3.RequestBody>;
				public responseBodyConverter(type: java.lang.reflect.Type, annotations: java.lang.annotation.Annotation[], retrofit: retrofit2.Retrofit): retrofit2.Converter<okhttp3.ResponseBody,any>;
				public static create(gson: com.google.gson.Gson): retrofit2.converter.gson.GsonConverterFactory;
				public requestBodyConverter(param0: java.lang.reflect.Type, param1: java.lang.annotation.Annotation[], param2: java.lang.annotation.Annotation[], param3: retrofit2.Retrofit): retrofit2.Converter<any,okhttp3.RequestBody>;
				public static create(): retrofit2.converter.gson.GsonConverterFactory;
				public responseBodyConverter(param0: java.lang.reflect.Type, param1: java.lang.annotation.Annotation[], param2: retrofit2.Retrofit): retrofit2.Converter<okhttp3.ResponseBody,any>;
			}
		}
	}
}

declare module retrofit2 {
	export module converter {
		export module gson {
			export class GsonRequestBodyConverter<T>  extends retrofit2.Converter<any,okhttp3.RequestBody> {
				public static class: java.lang.Class<retrofit2.converter.gson.GsonRequestBodyConverter<any>>;
				public convert(param0: any): any;
				public convert(value: any): okhttp3.RequestBody;
			}
		}
	}
}

declare module retrofit2 {
	export module converter {
		export module gson {
			export class GsonResponseBodyConverter<T>  extends retrofit2.Converter<okhttp3.ResponseBody,any> {
				public static class: java.lang.Class<retrofit2.converter.gson.GsonResponseBodyConverter<any>>;
				public convert(param0: any): any;
				public convert(value: okhttp3.ResponseBody): any;
			}
		}
	}
}

//Generics information:
//retrofit2.converter.gson.GsonRequestBodyConverter:1
//retrofit2.converter.gson.GsonResponseBodyConverter:1

