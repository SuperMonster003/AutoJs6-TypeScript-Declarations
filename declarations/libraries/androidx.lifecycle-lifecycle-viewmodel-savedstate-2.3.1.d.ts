declare module androidx {
	export module lifecycle {
		export abstract class AbstractSavedStateViewModelFactory extends androidx.lifecycle.ViewModelProvider.KeyedFactory {
			public static class: java.lang.Class<androidx.lifecycle.AbstractSavedStateViewModelFactory>;
			public create(key: string, modelClass: java.lang.Class<any>): androidx.lifecycle.ViewModel;
			public constructor(owner: androidx.savedstate.SavedStateRegistryOwner, defaultArgs: android.os.Bundle);
			public create(param0: string, param1: java.lang.Class<any>, param2: androidx.lifecycle.SavedStateHandle): androidx.lifecycle.ViewModel;
			public create(param0: string, param1: java.lang.Class<any>): androidx.lifecycle.ViewModel;
			public create(modelClass: java.lang.Class<any>): androidx.lifecycle.ViewModel;
			public create(param0: java.lang.Class<any>): androidx.lifecycle.ViewModel;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class SavedStateHandle extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.SavedStateHandle>;
			public remove(key: string): any;
			public get(key: string): any;
			public getLiveData(key: string): androidx.lifecycle.MutableLiveData;
			public contains(key: string): boolean;
			public constructor();
			public setSavedStateProvider(key: string, provider: androidx.savedstate.SavedStateRegistry.SavedStateProvider): void;
			public constructor(initialState: java.util.Map<string,any>);
			public set(key: string, value: any): void;
			public clearSavedStateProvider(key: string): void;
			public getLiveData(key: string, initialValue: any): androidx.lifecycle.MutableLiveData;
			public keys(): java.util.Set<string>;
		}
		export module SavedStateHandle {
			export class SavingStateLiveData<T>  extends androidx.lifecycle.MutableLiveData<any> {
				public static class: java.lang.Class<androidx.lifecycle.SavedStateHandle.SavingStateLiveData<any>>;
				public setValue(value: any): void;
				public setValue(param0: any): void;
			}
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class SavedStateHandleController extends java.lang.Object implements androidx.lifecycle.LifecycleEventObserver {
			public static class: java.lang.Class<androidx.lifecycle.SavedStateHandleController>;
			public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
			public onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
		}
		export module SavedStateHandleController {
			export class OnRecreation extends java.lang.Object implements androidx.savedstate.SavedStateRegistry.AutoRecreated {
				public static class: java.lang.Class<androidx.lifecycle.SavedStateHandleController.OnRecreation>;
				public onRecreated(param0: androidx.savedstate.SavedStateRegistryOwner): void;
				public onRecreated(owner: androidx.savedstate.SavedStateRegistryOwner): void;
			}
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class SavedStateViewModelFactory extends androidx.lifecycle.ViewModelProvider.KeyedFactory {
			public static class: java.lang.Class<androidx.lifecycle.SavedStateViewModelFactory>;
			public constructor(application: android.app.Application, owner: androidx.savedstate.SavedStateRegistryOwner);
			public create(key: string, modelClass: java.lang.Class<any>): androidx.lifecycle.ViewModel;
			public create(param0: string, param1: java.lang.Class<any>): androidx.lifecycle.ViewModel;
			public create(modelClass: java.lang.Class<any>): androidx.lifecycle.ViewModel;
			public constructor(application: android.app.Application, owner: androidx.savedstate.SavedStateRegistryOwner, defaultArgs: android.os.Bundle);
			public create(param0: java.lang.Class<any>): androidx.lifecycle.ViewModel;
		}
	}
}

//Generics information:
//androidx.lifecycle.SavedStateHandle.SavingStateLiveData:1

