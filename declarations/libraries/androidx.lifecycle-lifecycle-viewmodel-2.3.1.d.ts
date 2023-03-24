declare module androidx {
	export module lifecycle {
		export class AndroidViewModel extends androidx.lifecycle.ViewModel {
			public static class: java.lang.Class<androidx.lifecycle.AndroidViewModel>;
			public constructor(application: android.app.Application);
			public constructor();
			public getApplication(): android.app.Application;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class HasDefaultViewModelProviderFactory extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.HasDefaultViewModelProviderFactory>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.HasDefaultViewModelProviderFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
			});
			public constructor();
			public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export abstract class ViewModel extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.ViewModel>;
			public onCleared(): void;
			public constructor();
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ViewModelProvider extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.ViewModelProvider>;
			public get(modelClass: java.lang.Class<any>): androidx.lifecycle.ViewModel;
			public get(key: string, modelClass: java.lang.Class<any>): androidx.lifecycle.ViewModel;
			public constructor(owner: androidx.lifecycle.ViewModelStoreOwner);
			public constructor(store: androidx.lifecycle.ViewModelStore, factory: androidx.lifecycle.ViewModelProvider.Factory);
			public constructor(owner: androidx.lifecycle.ViewModelStoreOwner, factory: androidx.lifecycle.ViewModelProvider.Factory);
		}
		export module ViewModelProvider {
			export class AndroidViewModelFactory extends androidx.lifecycle.ViewModelProvider.NewInstanceFactory {
				public static class: java.lang.Class<androidx.lifecycle.ViewModelProvider.AndroidViewModelFactory>;
				public static getInstance(application: android.app.Application): androidx.lifecycle.ViewModelProvider.AndroidViewModelFactory;
				public constructor(application: android.app.Application);
				public create(modelClass: java.lang.Class<any>): androidx.lifecycle.ViewModel;
				public create(param0: java.lang.Class<any>): androidx.lifecycle.ViewModel;
				public constructor();
			}
			export class Factory extends java.lang.Object {
				public static class: java.lang.Class<androidx.lifecycle.ViewModelProvider.Factory>;
				/**
				 * Constructs a new instance of the androidx.lifecycle.ViewModelProvider$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					create(param0: java.lang.Class<any>): androidx.lifecycle.ViewModel;
				});
				public constructor();
				public create(param0: java.lang.Class<any>): androidx.lifecycle.ViewModel;
			}
			export abstract class KeyedFactory extends androidx.lifecycle.ViewModelProvider.OnRequeryFactory implements androidx.lifecycle.ViewModelProvider.Factory {
				public static class: java.lang.Class<androidx.lifecycle.ViewModelProvider.KeyedFactory>;
				public create(param0: string, param1: java.lang.Class<any>): androidx.lifecycle.ViewModel;
				public create(modelClass: java.lang.Class<any>): androidx.lifecycle.ViewModel;
				public create(param0: java.lang.Class<any>): androidx.lifecycle.ViewModel;
			}
			export class NewInstanceFactory extends java.lang.Object implements androidx.lifecycle.ViewModelProvider.Factory {
				public static class: java.lang.Class<androidx.lifecycle.ViewModelProvider.NewInstanceFactory>;
				public create(modelClass: java.lang.Class<any>): androidx.lifecycle.ViewModel;
				public create(param0: java.lang.Class<any>): androidx.lifecycle.ViewModel;
				public constructor();
			}
			export class OnRequeryFactory extends java.lang.Object {
				public static class: java.lang.Class<androidx.lifecycle.ViewModelProvider.OnRequeryFactory>;
			}
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ViewModelStore extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.ViewModelStore>;
			public clear(): void;
			public constructor();
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ViewModelStoreOwner extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.ViewModelStoreOwner>;
			/**
			 * Constructs a new instance of the androidx.lifecycle.ViewModelStoreOwner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getViewModelStore(): androidx.lifecycle.ViewModelStore;
			});
			public constructor();
			public getViewModelStore(): androidx.lifecycle.ViewModelStore;
		}
	}
}

declare module androidx {
	export module lifecycle {
		export class ViewTreeViewModelStoreOwner extends java.lang.Object {
			public static class: java.lang.Class<androidx.lifecycle.ViewTreeViewModelStoreOwner>;
			public static set(view: android.view.View, viewModelStoreOwner: androidx.lifecycle.ViewModelStoreOwner): void;
			public static get(view: android.view.View): androidx.lifecycle.ViewModelStoreOwner;
		}
	}
}

//Generics information:

