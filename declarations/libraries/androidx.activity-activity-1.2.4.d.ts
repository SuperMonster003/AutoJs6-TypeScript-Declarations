declare module androidx {
	export module activity {
		export class Cancellable extends java.lang.Object {
			public static class: java.lang.Class<androidx.activity.Cancellable>;
			/**
			 * Constructs a new instance of the androidx.activity.Cancellable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				cancel(): void;
			});
			public constructor();
			public cancel(): void;
		}
	}
}

declare module androidx {
	export module activity {
		export class ComponentActivity extends androidx.core.app.ComponentActivity implements androidx.activity.contextaware.ContextAware, androidx.lifecycle.LifecycleOwner, androidx.lifecycle.ViewModelStoreOwner, androidx.lifecycle.HasDefaultViewModelProviderFactory, androidx.savedstate.SavedStateRegistryOwner, androidx.activity.OnBackPressedDispatcherOwner, androidx.activity.result.ActivityResultRegistryOwner, androidx.activity.result.ActivityResultCaller {
			public static class: java.lang.Class<androidx.activity.ComponentActivity>;
			public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
			public onCreateView(name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
			public onActivityResult(requestCode: number, resultCode: number, data: android.content.Intent): void;
			public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
			public onCreate(savedInstanceState: android.os.Bundle, persistentState: any): void;
			public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public onDetachedFromWindow(): void;
			/** @deprecated */
			public startActivityForResult(intent: android.content.Intent, requestCode: number): void;
			/** @deprecated */
			public startIntentSenderForResult(intent: android.content.IntentSender, requestCode: number, fillInIntent: android.content.Intent, flagsMask: number, flagsValues: number, extraFlags: number, options: android.os.Bundle): void;
			/** @deprecated */
			public getLastCustomNonConfigurationInstance(): any;
			public constructor();
			public setContentView(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
			public getViewModelStore(): androidx.lifecycle.ViewModelStore;
			public peekAvailableContext(): android.content.Context;
			public onTrimMemory(level: number): void;
			public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
			public onCreate(param0: android.os.Bundle): void;
			public onSearchRequested(searchEvent: any): boolean;
			public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
			public onCreate(savedInstanceState: android.os.Bundle): void;
			public removeOnContextAvailableListener(listener: androidx.activity.contextaware.OnContextAvailableListener): void;
			public onActionModeFinished(mode: android.view.ActionMode): void;
			public onCreatePanelView(featureId: number): android.view.View;
			public onRetainNonConfigurationInstance(): any;
			/** @deprecated */
			public startActivityForResult(intent: android.content.Intent, requestCode: number, options: android.os.Bundle): void;
			public reportFullyDrawn(): void;
			public startActivityForResult(intent: android.content.Intent, requestCode: number): void;
			public setContentView(view: android.view.View): void;
			public onTrimMemory(param0: number): void;
			public onBackPressed(): void;
			public onActionModeFinished(param0: android.view.ActionMode): void;
			public dispatchGenericMotionEvent(ev: android.view.MotionEvent): boolean;
			public onWindowFocusChanged(hasFocus: boolean): void;
			public onActionModeStarted(param0: android.view.ActionMode): void;
			public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
			public registerForActivityResult(contract: androidx.activity.result.contract.ActivityResultContract<any,any>, callback: androidx.activity.result.ActivityResultCallback<any>): androidx.activity.result.ActivityResultLauncher<any>;
			public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
			public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
			public onCreateView(parent: android.view.View, name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
			public onSearchRequested(param0: any): boolean;
			public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
			public getLifecycle(): androidx.lifecycle.Lifecycle;
			public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract<any,any>, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback<any>): androidx.activity.result.ActivityResultLauncher<any>;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
			public onRequestPermissionsResult(requestCode: number, permissions: string[], grantResults: number[]): void;
			public getActivityResultRegistry(): androidx.activity.result.ActivityResultRegistry;
			public startIntentSenderForResult(intent: android.content.IntentSender, requestCode: number, fillInIntent: android.content.Intent, flagsMask: number, flagsValues: number, extraFlags: number, options: android.os.Bundle): void;
			public onWindowAttributesChanged(params: android.view.WindowManager.LayoutParams): void;
			public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
			public onActionModeStarted(mode: android.view.ActionMode): void;
			public onMenuOpened(featureId: number, menu: android.view.Menu): boolean;
			public onPreparePanel(featureId: number, view: android.view.View, menu: android.view.Menu): boolean;
			public onMenuItemSelected(featureId: number, item: android.view.MenuItem): boolean;
			/** @deprecated */
			public onRetainCustomNonConfigurationInstance(): any;
			public onWindowStartingActionMode(callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
			public onSearchRequested(): boolean;
			public constructor(base: android.content.Context, themeResId: number);
			public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
			public onCreatePanelView(param0: number): android.view.View;
			public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
			public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
			public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
			/** @deprecated */
			public onActivityResult(requestCode: number, resultCode: number, data: android.content.Intent): void;
			public startActivityForResult(intent: android.content.Intent, requestCode: number, options: android.os.Bundle): void;
			public addOnContextAvailableListener(param0: androidx.activity.contextaware.OnContextAvailableListener): void;
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
			public superDispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			/** @deprecated */
			public startIntentSenderForResult(intent: android.content.IntentSender, requestCode: number, fillInIntent: android.content.Intent, flagsMask: number, flagsValues: number, extraFlags: number): void;
			public onWindowFocusChanged(param0: boolean): void;
			public onPanelClosed(featureId: number, menu: android.view.Menu): void;
			public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: android.view.Menu, deviceId: number): void;
			public onContentChanged(): void;
			public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract<any,any>, param1: androidx.activity.result.ActivityResultCallback<any>): androidx.activity.result.ActivityResultLauncher<any>;
			public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
			public constructor(contentLayoutId: number);
			public removeOnContextAvailableListener(param0: androidx.activity.contextaware.OnContextAvailableListener): void;
			public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
			public registerForActivityResult(contract: androidx.activity.result.contract.ActivityResultContract<any,any>, registry: androidx.activity.result.ActivityResultRegistry, callback: androidx.activity.result.ActivityResultCallback<any>): androidx.activity.result.ActivityResultLauncher<any>;
			public dispatchTrackballEvent(ev: android.view.MotionEvent): boolean;
			public onSaveInstanceState(outState: android.os.Bundle): void;
			public addOnContextAvailableListener(listener: androidx.activity.contextaware.OnContextAvailableListener): void;
			public startIntentSenderForResult(intent: android.content.IntentSender, requestCode: number, fillInIntent: android.content.Intent, flagsMask: number, flagsValues: number, extraFlags: number): void;
			public onPanelClosed(param0: number, param1: android.view.Menu): void;
			public getOnBackPressedDispatcher(): androidx.activity.OnBackPressedDispatcher;
			public constructor(base: android.content.Context, theme: android.content.res.Resources.Theme);
			public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
			public onCreatePanelMenu(featureId: number, menu: android.view.Menu): boolean;
			public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
			public onSaveInstanceState(outState: android.os.Bundle, outPersistentState: any): void;
			/** @deprecated */
			public onRequestPermissionsResult(requestCode: number, permissions: string[], grantResults: number[]): void;
			public setContentView(layoutResID: number): void;
			public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
			public dispatchTouchEvent(ev: android.view.MotionEvent): boolean;
			public onSaveInstanceState(param0: android.os.Bundle): void;
			public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
			public onAttachedToWindow(): void;
			public constructor(base: android.content.Context);
			public addContentView(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
			public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
		}
		export module ComponentActivity {
			export class NonConfigurationInstances extends java.lang.Object {
				public static class: java.lang.Class<androidx.activity.ComponentActivity.NonConfigurationInstances>;
			}
		}
	}
}

declare module androidx {
	export module activity {
		export class ImmLeaksCleaner extends java.lang.Object implements androidx.lifecycle.LifecycleEventObserver {
			public static class: java.lang.Class<androidx.activity.ImmLeaksCleaner>;
			public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
			public onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
		}
	}
}

declare module androidx {
	export module activity {
		export abstract class OnBackPressedCallback extends java.lang.Object {
			public static class: java.lang.Class<androidx.activity.OnBackPressedCallback>;
			public isEnabled(): boolean;
			public setEnabled(enabled: boolean): void;
			public constructor(enabled: boolean);
			public handleOnBackPressed(): void;
			public remove(): void;
		}
	}
}

declare module androidx {
	export module activity {
		export class OnBackPressedDispatcher extends java.lang.Object {
			public static class: java.lang.Class<androidx.activity.OnBackPressedDispatcher>;
			public constructor(fallbackOnBackPressed: java.lang.Runnable);
			public onBackPressed(): void;
			public addCallback(onBackPressedCallback: androidx.activity.OnBackPressedCallback): void;
			public addCallback(owner: androidx.lifecycle.LifecycleOwner, onBackPressedCallback: androidx.activity.OnBackPressedCallback): void;
			public constructor();
			public hasEnabledCallbacks(): boolean;
		}
		export module OnBackPressedDispatcher {
			export class LifecycleOnBackPressedCancellable extends java.lang.Object implements androidx.lifecycle.LifecycleEventObserver, androidx.activity.Cancellable {
				public static class: java.lang.Class<androidx.activity.OnBackPressedDispatcher.LifecycleOnBackPressedCancellable>;
				public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
				public onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
				public cancel(): void;
			}
			export class OnBackPressedCancellable extends java.lang.Object implements androidx.activity.Cancellable {
				public static class: java.lang.Class<androidx.activity.OnBackPressedDispatcher.OnBackPressedCancellable>;
				public cancel(): void;
			}
		}
	}
}

declare module androidx {
	export module activity {
		export class OnBackPressedDispatcherOwner extends java.lang.Object implements androidx.lifecycle.LifecycleOwner {
			public static class: java.lang.Class<androidx.activity.OnBackPressedDispatcherOwner>;
			/**
			 * Constructs a new instance of the androidx.activity.OnBackPressedDispatcherOwner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getOnBackPressedDispatcher(): androidx.activity.OnBackPressedDispatcher;
				getLifecycle(): androidx.lifecycle.Lifecycle;
			});
			public constructor();
			public getLifecycle(): androidx.lifecycle.Lifecycle;
			public getOnBackPressedDispatcher(): androidx.activity.OnBackPressedDispatcher;
		}
	}
}

declare module androidx {
	export module activity {
		export module contextaware {
			export class ContextAware extends java.lang.Object {
				public static class: java.lang.Class<androidx.activity.contextaware.ContextAware>;
				/**
				 * Constructs a new instance of the androidx.activity.contextaware.ContextAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					peekAvailableContext(): android.content.Context;
					addOnContextAvailableListener(param0: androidx.activity.contextaware.OnContextAvailableListener): void;
					removeOnContextAvailableListener(param0: androidx.activity.contextaware.OnContextAvailableListener): void;
				});
				public constructor();
				public peekAvailableContext(): android.content.Context;
				public addOnContextAvailableListener(param0: androidx.activity.contextaware.OnContextAvailableListener): void;
				public removeOnContextAvailableListener(param0: androidx.activity.contextaware.OnContextAvailableListener): void;
			}
		}
	}
}

declare module androidx {
	export module activity {
		export module contextaware {
			export class ContextAwareHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.activity.contextaware.ContextAwareHelper>;
				public addOnContextAvailableListener(listener: androidx.activity.contextaware.OnContextAvailableListener): void;
				public peekAvailableContext(): android.content.Context;
				public dispatchOnContextAvailable(context: android.content.Context): void;
				public removeOnContextAvailableListener(listener: androidx.activity.contextaware.OnContextAvailableListener): void;
				public clearAvailableContext(): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module activity {
		export module contextaware {
			export class OnContextAvailableListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.activity.contextaware.OnContextAvailableListener>;
				/**
				 * Constructs a new instance of the androidx.activity.contextaware.OnContextAvailableListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onContextAvailable(param0: android.content.Context): void;
				});
				public constructor();
				public onContextAvailable(param0: android.content.Context): void;
			}
		}
	}
}

declare module androidx {
	export module activity {
		export module result {
			export class ActivityResult extends java.lang.Object implements android.os.Parcelable {
				public static class: java.lang.Class<androidx.activity.result.ActivityResult>;
				public static CREATOR: android.os.Parcelable.Creator<androidx.activity.result.ActivityResult>;
				public writeToParcel(dest: android.os.Parcel, flags: number): void;
				public getData(): android.content.Intent;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
				public constructor(resultCode: number, data: android.content.Intent);
				public toString(): string;
				public static resultCodeToString(resultCode: number): string;
				public getResultCode(): number;
			}
		}
	}
}

declare module androidx {
	export module activity {
		export module result {
			export class ActivityResultCallback<O>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.activity.result.ActivityResultCallback<any>>;
				/**
				 * Constructs a new instance of the androidx.activity.result.ActivityResultCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onActivityResult(param0: O): void;
				});
				public constructor();
				public onActivityResult(param0: O): void;
			}
		}
	}
}

declare module androidx {
	export module activity {
		export module result {
			export class ActivityResultCaller extends java.lang.Object {
				public static class: java.lang.Class<androidx.activity.result.ActivityResultCaller>;
				/**
				 * Constructs a new instance of the androidx.activity.result.ActivityResultCaller interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract<any,any>, param1: androidx.activity.result.ActivityResultCallback<any>): androidx.activity.result.ActivityResultLauncher<any>;
					registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract<any,any>, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback<any>): androidx.activity.result.ActivityResultLauncher<any>;
				});
				public constructor();
				public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract<any,any>, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback<any>): androidx.activity.result.ActivityResultLauncher<any>;
				public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract<any,any>, param1: androidx.activity.result.ActivityResultCallback<any>): androidx.activity.result.ActivityResultLauncher<any>;
			}
		}
	}
}

declare module androidx {
	export module activity {
		export module result {
			export abstract class ActivityResultLauncher<I>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.activity.result.ActivityResultLauncher<any>>;
				public unregister(): void;
				public launch(param0: I, param1: androidx.core.app.ActivityOptionsCompat): void;
				public getContract(): androidx.activity.result.contract.ActivityResultContract<I,any>;
				public launch(input: I): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module activity {
		export module result {
			export abstract class ActivityResultRegistry extends java.lang.Object {
				public static class: java.lang.Class<androidx.activity.result.ActivityResultRegistry>;
				public register(key: string, contract: androidx.activity.result.contract.ActivityResultContract<any,any>, callback: androidx.activity.result.ActivityResultCallback<any>): androidx.activity.result.ActivityResultLauncher<any>;
				public onRestoreInstanceState(savedInstanceState: android.os.Bundle): void;
				public register(key: string, lifecycleOwner: androidx.lifecycle.LifecycleOwner, contract: androidx.activity.result.contract.ActivityResultContract<any,any>, callback: androidx.activity.result.ActivityResultCallback<any>): androidx.activity.result.ActivityResultLauncher<any>;
				public onLaunch(param0: number, param1: androidx.activity.result.contract.ActivityResultContract<any,any>, param2: any, param3: androidx.core.app.ActivityOptionsCompat): void;
				public onSaveInstanceState(outState: android.os.Bundle): void;
				public dispatchResult(requestCode: number, result: any): boolean;
				public dispatchResult(requestCode: number, resultCode: number, data: android.content.Intent): boolean;
				public constructor();
			}
			export module ActivityResultRegistry {
				export class CallbackAndContract<O>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.activity.result.ActivityResultRegistry.CallbackAndContract<any>>;
				}
				export class LifecycleContainer extends java.lang.Object {
					public static class: java.lang.Class<androidx.activity.result.ActivityResultRegistry.LifecycleContainer>;
				}
			}
		}
	}
}

declare module androidx {
	export module activity {
		export module result {
			export class ActivityResultRegistryOwner extends java.lang.Object {
				public static class: java.lang.Class<androidx.activity.result.ActivityResultRegistryOwner>;
				/**
				 * Constructs a new instance of the androidx.activity.result.ActivityResultRegistryOwner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getActivityResultRegistry(): androidx.activity.result.ActivityResultRegistry;
				});
				public constructor();
				public getActivityResultRegistry(): androidx.activity.result.ActivityResultRegistry;
			}
		}
	}
}

declare module androidx {
	export module activity {
		export module result {
			export class IntentSenderRequest extends java.lang.Object implements android.os.Parcelable {
				public static class: java.lang.Class<androidx.activity.result.IntentSenderRequest>;
				public static CREATOR: android.os.Parcelable.Creator<androidx.activity.result.IntentSenderRequest>;
				public writeToParcel(dest: android.os.Parcel, flags: number): void;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public getIntentSender(): android.content.IntentSender;
				public describeContents(): number;
				public getFlagsValues(): number;
				public getFillInIntent(): android.content.Intent;
				public getFlagsMask(): number;
			}
			export module IntentSenderRequest {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.activity.result.IntentSenderRequest.Builder>;
					public build(): androidx.activity.result.IntentSenderRequest;
					public setFillInIntent(fillInIntent: android.content.Intent): androidx.activity.result.IntentSenderRequest.Builder;
					public constructor(pendingIntent: android.app.PendingIntent);
					public setFlags(values: number, mask: number): androidx.activity.result.IntentSenderRequest.Builder;
					public constructor(intentSender: android.content.IntentSender);
				}
			}
		}
	}
}

declare module androidx {
	export module activity {
		export module result {
			export module contract {
				export abstract class ActivityResultContract<I, O>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContract<any,any>>;
					public parseResult(param0: number, param1: android.content.Intent): O;
					public constructor();
					public getSynchronousResult(context: android.content.Context, input: I): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<O>;
					public createIntent(param0: android.content.Context, param1: I): android.content.Intent;
				}
				export module ActivityResultContract {
					export class SynchronousResult<T>  extends java.lang.Object {
						public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContract.SynchronousResult<any>>;
						public getValue(): T;
						public constructor(value: T);
					}
				}
			}
		}
	}
}

declare module androidx {
	export module activity {
		export module result {
			export module contract {
				export class ActivityResultContracts extends java.lang.Object {
					public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts>;
				}
				export module ActivityResultContracts {
					export class CreateDocument extends androidx.activity.result.contract.ActivityResultContract<string,android.net.Uri> {
						public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.CreateDocument>;
						public constructor();
						public createIntent(context: android.content.Context, input: string): android.content.Intent;
						public parseResult(resultCode: number, intent: android.content.Intent): android.net.Uri;
						public createIntent(param0: android.content.Context, param1: any): android.content.Intent;
						public getSynchronousResult(context: android.content.Context, input: any): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<any>;
						public getSynchronousResult(context: android.content.Context, input: string): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<android.net.Uri>;
						public parseResult(param0: number, param1: android.content.Intent): any;
					}
					export class GetContent extends androidx.activity.result.contract.ActivityResultContract<string,android.net.Uri> {
						public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.GetContent>;
						public constructor();
						public createIntent(context: android.content.Context, input: string): android.content.Intent;
						public parseResult(resultCode: number, intent: android.content.Intent): android.net.Uri;
						public createIntent(param0: android.content.Context, param1: any): android.content.Intent;
						public getSynchronousResult(context: android.content.Context, input: any): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<any>;
						public getSynchronousResult(context: android.content.Context, input: string): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<android.net.Uri>;
						public parseResult(param0: number, param1: android.content.Intent): any;
					}
					export class GetMultipleContents extends androidx.activity.result.contract.ActivityResultContract<string,java.util.List<android.net.Uri>> {
						public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.GetMultipleContents>;
						public constructor();
						public createIntent(context: android.content.Context, input: string): android.content.Intent;
						public getSynchronousResult(context: android.content.Context, input: string): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<java.util.List<android.net.Uri>>;
						public createIntent(param0: android.content.Context, param1: any): android.content.Intent;
						public getSynchronousResult(context: android.content.Context, input: any): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<any>;
						public parseResult(resultCode: number, intent: android.content.Intent): java.util.List<android.net.Uri>;
						public parseResult(param0: number, param1: android.content.Intent): any;
					}
					export class OpenDocument extends androidx.activity.result.contract.ActivityResultContract<string[],android.net.Uri> {
						public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.OpenDocument>;
						public constructor();
						public parseResult(resultCode: number, intent: android.content.Intent): android.net.Uri;
						public createIntent(param0: android.content.Context, param1: any): android.content.Intent;
						public getSynchronousResult(context: android.content.Context, input: any): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<any>;
						public getSynchronousResult(context: android.content.Context, input: string[]): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<android.net.Uri>;
						public parseResult(param0: number, param1: android.content.Intent): any;
						public createIntent(context: android.content.Context, input: string[]): android.content.Intent;
					}
					export class OpenDocumentTree extends androidx.activity.result.contract.ActivityResultContract<android.net.Uri,android.net.Uri> {
						public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.OpenDocumentTree>;
						public constructor();
						public parseResult(resultCode: number, intent: android.content.Intent): android.net.Uri;
						public createIntent(param0: android.content.Context, param1: any): android.content.Intent;
						public getSynchronousResult(context: android.content.Context, input: any): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<any>;
						public createIntent(context: android.content.Context, input: android.net.Uri): android.content.Intent;
						public getSynchronousResult(context: android.content.Context, input: android.net.Uri): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<android.net.Uri>;
						public parseResult(param0: number, param1: android.content.Intent): any;
					}
					export class OpenMultipleDocuments extends androidx.activity.result.contract.ActivityResultContract<string[],java.util.List<android.net.Uri>> {
						public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.OpenMultipleDocuments>;
						public constructor();
						public createIntent(param0: android.content.Context, param1: any): android.content.Intent;
						public getSynchronousResult(context: android.content.Context, input: any): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<any>;
						public getSynchronousResult(context: android.content.Context, input: string[]): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<java.util.List<android.net.Uri>>;
						public parseResult(resultCode: number, intent: android.content.Intent): java.util.List<android.net.Uri>;
						public parseResult(param0: number, param1: android.content.Intent): any;
						public createIntent(context: android.content.Context, input: string[]): android.content.Intent;
					}
					export class PickContact extends androidx.activity.result.contract.ActivityResultContract<java.lang.Void,android.net.Uri> {
						public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.PickContact>;
						public createIntent(context: android.content.Context, input: java.lang.Void): android.content.Intent;
						public constructor();
						public parseResult(resultCode: number, intent: android.content.Intent): android.net.Uri;
						public createIntent(param0: android.content.Context, param1: any): android.content.Intent;
						public parseResult(param0: number, param1: android.content.Intent): any;
					}
					export class RequestMultiplePermissions extends androidx.activity.result.contract.ActivityResultContract<string[],java.util.Map<string,java.lang.Boolean>> {
						public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.RequestMultiplePermissions>;
						public static ACTION_REQUEST_PERMISSIONS: string;
						public static EXTRA_PERMISSIONS: string;
						public static EXTRA_PERMISSION_GRANT_RESULTS: string;
						public constructor();
						public parseResult(resultCode: number, intent: android.content.Intent): java.util.Map<string,java.lang.Boolean>;
						public createIntent(param0: android.content.Context, param1: any): android.content.Intent;
						public getSynchronousResult(context: android.content.Context, input: any): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<any>;
						public getSynchronousResult(context: android.content.Context, input: string[]): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<java.util.Map<string,java.lang.Boolean>>;
						public parseResult(param0: number, param1: android.content.Intent): any;
						public createIntent(context: android.content.Context, input: string[]): android.content.Intent;
					}
					export class RequestPermission extends androidx.activity.result.contract.ActivityResultContract<string,java.lang.Boolean> {
						public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.RequestPermission>;
						public parseResult(resultCode: number, intent: android.content.Intent): java.lang.Boolean;
						public constructor();
						public createIntent(context: android.content.Context, input: string): android.content.Intent;
						public getSynchronousResult(context: android.content.Context, input: string): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<java.lang.Boolean>;
						public createIntent(param0: android.content.Context, param1: any): android.content.Intent;
						public getSynchronousResult(context: android.content.Context, input: any): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<any>;
						public parseResult(param0: number, param1: android.content.Intent): any;
					}
					export class StartActivityForResult extends androidx.activity.result.contract.ActivityResultContract<android.content.Intent,androidx.activity.result.ActivityResult> {
						public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.StartActivityForResult>;
						public static EXTRA_ACTIVITY_OPTIONS_BUNDLE: string;
						public createIntent(context: android.content.Context, input: android.content.Intent): android.content.Intent;
						public constructor();
						public parseResult(resultCode: number, intent: android.content.Intent): androidx.activity.result.ActivityResult;
						public createIntent(param0: android.content.Context, param1: any): android.content.Intent;
						public parseResult(param0: number, param1: android.content.Intent): any;
					}
					export class StartIntentSenderForResult extends androidx.activity.result.contract.ActivityResultContract<androidx.activity.result.IntentSenderRequest,androidx.activity.result.ActivityResult> {
						public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.StartIntentSenderForResult>;
						public static ACTION_INTENT_SENDER_REQUEST: string;
						public static EXTRA_INTENT_SENDER_REQUEST: string;
						public static EXTRA_SEND_INTENT_EXCEPTION: string;
						public constructor();
						public parseResult(resultCode: number, intent: android.content.Intent): androidx.activity.result.ActivityResult;
						public createIntent(param0: android.content.Context, param1: any): android.content.Intent;
						public createIntent(context: android.content.Context, input: androidx.activity.result.IntentSenderRequest): android.content.Intent;
						public parseResult(param0: number, param1: android.content.Intent): any;
					}
					export class TakePicture extends androidx.activity.result.contract.ActivityResultContract<android.net.Uri,java.lang.Boolean> {
						public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.TakePicture>;
						public parseResult(resultCode: number, intent: android.content.Intent): java.lang.Boolean;
						public constructor();
						public getSynchronousResult(context: android.content.Context, input: android.net.Uri): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<java.lang.Boolean>;
						public createIntent(param0: android.content.Context, param1: any): android.content.Intent;
						public getSynchronousResult(context: android.content.Context, input: any): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<any>;
						public createIntent(context: android.content.Context, input: android.net.Uri): android.content.Intent;
						public parseResult(param0: number, param1: android.content.Intent): any;
					}
					export class TakePicturePreview extends androidx.activity.result.contract.ActivityResultContract<java.lang.Void,android.graphics.Bitmap> {
						public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.TakePicturePreview>;
						public createIntent(context: android.content.Context, input: java.lang.Void): android.content.Intent;
						public constructor();
						public parseResult(resultCode: number, intent: android.content.Intent): android.graphics.Bitmap;
						public createIntent(param0: android.content.Context, param1: any): android.content.Intent;
						public getSynchronousResult(context: android.content.Context, input: any): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<any>;
						public getSynchronousResult(context: android.content.Context, input: java.lang.Void): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<android.graphics.Bitmap>;
						public parseResult(param0: number, param1: android.content.Intent): any;
					}
					export class TakeVideo extends androidx.activity.result.contract.ActivityResultContract<android.net.Uri,android.graphics.Bitmap> {
						public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.TakeVideo>;
						public getSynchronousResult(context: android.content.Context, input: android.net.Uri): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<android.graphics.Bitmap>;
						public constructor();
						public parseResult(resultCode: number, intent: android.content.Intent): android.graphics.Bitmap;
						public createIntent(param0: android.content.Context, param1: any): android.content.Intent;
						public getSynchronousResult(context: android.content.Context, input: any): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<any>;
						public createIntent(context: android.content.Context, input: android.net.Uri): android.content.Intent;
						public parseResult(param0: number, param1: android.content.Intent): any;
					}
				}
			}
		}
	}
}

//Generics information:
//androidx.activity.result.ActivityResultCallback:1
//androidx.activity.result.ActivityResultLauncher:1
//androidx.activity.result.ActivityResultRegistry.CallbackAndContract:1
//androidx.activity.result.contract.ActivityResultContract:2
//androidx.activity.result.contract.ActivityResultContract.SynchronousResult:1

