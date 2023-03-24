declare module androidx {
	export module lifecycle {
		export class CloseableCoroutineScope extends java.lang.Object implements java.io.Closeable, kotlinx.coroutines.CoroutineScope {
			public static class: java.lang.Class<androidx.lifecycle.CloseableCoroutineScope>;
			public constructor(context: kotlin.coroutines.CoroutineContext);
			public getCoroutineContext(): kotlin.coroutines.CoroutineContext;
			public close(): void;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ViewModelLazy<VM>  extends kotlin.Lazy<any> {
			public static class: java.lang.Class<androidx.lifecycle.ViewModelLazy<any>>;
			public getValue(): any;
			public constructor(viewModelClass: kotlin.reflect.KClass<any>, storeProducer: kotlin.jvm.functions.Function0<any>, factoryProducer: kotlin.jvm.functions.Function0<any>);
			public isInitialized(): boolean;
		}
	}
}

//Generics information:
//androidx.lifecycle.ViewModelLazy:1

