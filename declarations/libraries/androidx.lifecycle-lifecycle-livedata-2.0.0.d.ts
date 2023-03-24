declare module androidx {
	export module lifecycle {
		export abstract class ComputableLiveData<T>  extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.ComputableLiveData<any>>;
			public invalidate(): void;
			public constructor(executor: java.util.concurrent.Executor);
			public compute(): T;
			public getLiveData(): androidx.lifecycle.LiveData<T>;
			public constructor();
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
			public static map(source: androidx.lifecycle.LiveData, mapFunction: androidx.arch.core.util.Function): androidx.lifecycle.LiveData;
			public static switchMap(source: androidx.lifecycle.LiveData, switchMapFunction: androidx.arch.core.util.Function): androidx.lifecycle.LiveData;
		}
	}
}

//Generics information:
//androidx.lifecycle.ComputableLiveData:1
//androidx.lifecycle.MediatorLiveData:1
//androidx.lifecycle.MediatorLiveData.Source:1

