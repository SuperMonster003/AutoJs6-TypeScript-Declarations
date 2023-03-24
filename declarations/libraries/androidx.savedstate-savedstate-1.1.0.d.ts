declare module androidx {
	export module savedstate {
		export class Recreator extends java.lang.Object implements androidx.lifecycle.GenericLifecycleObserver {
			public static class: java.lang.Class<androidx.savedstate.Recreator>;
			public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
			public onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
		}
		export module Recreator {
			export class SavedStateProvider extends java.lang.Object implements androidx.savedstate.SavedStateRegistry.SavedStateProvider {
				public static class: java.lang.Class<androidx.savedstate.Recreator.SavedStateProvider>;
				public saveState(): android.os.Bundle;
			}
		}
	}
}

declare module androidx {
	export module savedstate {
		export class SavedStateRegistry extends java.lang.Object {
			public static class: java.lang.Class<androidx.savedstate.SavedStateRegistry>;
			public registerSavedStateProvider(key: string, provider: androidx.savedstate.SavedStateRegistry.SavedStateProvider): void;
			public unregisterSavedStateProvider(key: string): void;
			public isRestored(): boolean;
			public runOnNextRecreation(clazz: java.lang.Class<any>): void;
			public consumeRestoredStateForKey(key: string): android.os.Bundle;
		}
		export module SavedStateRegistry {
			export class AutoRecreated extends java.lang.Object {
				public static class: java.lang.Class<androidx.savedstate.SavedStateRegistry.AutoRecreated>;
				/**
				 * Constructs a new instance of the androidx.savedstate.SavedStateRegistry$AutoRecreated interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onRecreated(param0: androidx.savedstate.SavedStateRegistryOwner): void;
				});
				public constructor();
				public onRecreated(param0: androidx.savedstate.SavedStateRegistryOwner): void;
			}
			export class SavedStateProvider extends java.lang.Object {
				public static class: java.lang.Class<androidx.savedstate.SavedStateRegistry.SavedStateProvider>;
				/**
				 * Constructs a new instance of the androidx.savedstate.SavedStateRegistry$SavedStateProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					saveState(): android.os.Bundle;
				});
				public constructor();
				public saveState(): android.os.Bundle;
			}
		}
	}
}

declare module androidx {
	export module savedstate {
		export class SavedStateRegistryController extends java.lang.Object {
			public static class: java.lang.Class<androidx.savedstate.SavedStateRegistryController>;
			public performSave(outBundle: android.os.Bundle): void;
			public performRestore(savedState: android.os.Bundle): void;
			public static create(owner: androidx.savedstate.SavedStateRegistryOwner): androidx.savedstate.SavedStateRegistryController;
			public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
		}
	}
}

declare module androidx {
	export module savedstate {
		export class SavedStateRegistryOwner extends java.lang.Object implements androidx.lifecycle.LifecycleOwner {
			public static class: java.lang.Class<androidx.savedstate.SavedStateRegistryOwner>;
			/**
			 * Constructs a new instance of the androidx.savedstate.SavedStateRegistryOwner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				getLifecycle(): androidx.lifecycle.Lifecycle;
			});
			public constructor();
			public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
			public getLifecycle(): androidx.lifecycle.Lifecycle;
		}
	}
}

declare module androidx {
	export module savedstate {
		export class ViewTreeSavedStateRegistryOwner extends java.lang.Object {
			public static class: java.lang.Class<androidx.savedstate.ViewTreeSavedStateRegistryOwner>;
			public static set(view: android.view.View, owner: androidx.savedstate.SavedStateRegistryOwner): void;
			public static get(view: android.view.View): androidx.savedstate.SavedStateRegistryOwner;
		}
	}
}

//Generics information:

