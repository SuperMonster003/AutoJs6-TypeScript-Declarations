/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module androidx {
	export module activity {
		export class Api34Impl extends java.lang.Object {
			public static class: java.lang.Class<androidx.activity.Api34Impl>;
			public static INSTANCE: androidx.activity.Api34Impl;
			public progress(backEvent: android.window.BackEvent): number;
			public swipeEdge(backEvent: android.window.BackEvent): number;
			public createOnBackEvent(touchX: number, touchY: number, progress: number, swipeEdge: number): android.window.BackEvent;
			public touchY(backEvent: android.window.BackEvent): number;
			public touchX(backEvent: android.window.BackEvent): number;
		}
	}
}

declare module androidx {
	export module activity {
		export class BackEventCompat extends java.lang.Object {
			public static class: java.lang.Class<androidx.activity.BackEventCompat>;
			public static EDGE_LEFT: number;
			public static EDGE_RIGHT: number;
			public getProgress(): number;
			public toBackEvent(): android.window.BackEvent;
			public toString(): string;
			public constructor(touchX: number, touchY: number, progress: number, swipeEdge: number);
			public constructor(backEvent: android.window.BackEvent);
			public getTouchX(): number;
			public getSwipeEdge(): number;
			public getTouchY(): number;
		}
		export module BackEventCompat {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<androidx.activity.BackEventCompat.Companion>;
			}
			export class SwipeEdge extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.activity.BackEventCompat.SwipeEdge>;
				/**
				 * Constructs a new instance of the androidx.activity.BackEventCompat$SwipeEdge interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

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
		export class ComponentActivity extends androidx.core.app.ComponentActivity implements androidx.activity.contextaware.ContextAware, androidx.lifecycle.LifecycleOwner, androidx.lifecycle.ViewModelStoreOwner, androidx.lifecycle.HasDefaultViewModelProviderFactory, androidx.savedstate.SavedStateRegistryOwner, androidx.activity.OnBackPressedDispatcherOwner, androidx.activity.result.ActivityResultRegistryOwner, androidx.activity.result.ActivityResultCaller, androidx.core.view.MenuHost, androidx.activity.FullyDrawnReporterOwner {
			public static class: java.lang.Class<androidx.activity.ComponentActivity>;
			public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
			public removeOnTrimMemoryListener(listener: androidx.core.util.Consumer<java.lang.Integer>): void;
			public onPictureInPictureModeChanged(isInPictureInPictureMode: boolean, newConfig: android.content.res.Configuration): void;
			public onCreateView(name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
			public onActivityResult(requestCode: number, resultCode: number, data: android.content.Intent): void;
			public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
			public removeMenuProvider(param0: androidx.core.view.MenuProvider): void;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public removeOnPictureInPictureModeChangedListener(listener: androidx.core.util.Consumer<androidx.core.app.PictureInPictureModeChangedInfo>): void;
			public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
			public onCreate(savedInstanceState: android.os.Bundle, persistentState: any): void;
			public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public onDetachedFromWindow(): void;
			/** @deprecated */
			public onBackPressed(): void;
			/** @deprecated */
			public startActivityForResult(intent: android.content.Intent, requestCode: number): void;
			/** @deprecated */
			public startIntentSenderForResult(intent: android.content.IntentSender, requestCode: number, fillInIntent: android.content.Intent, flagsMask: number, flagsValues: number, extraFlags: number, options: android.os.Bundle): void;
			/** @deprecated */
			public getLastCustomNonConfigurationInstance(): any;
			public invalidateMenu(): void;
			public constructor();
			public setContentView(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
			public addMenuProvider(provider: androidx.core.view.MenuProvider, owner: androidx.lifecycle.LifecycleOwner, state: androidx.lifecycle.Lifecycle.State): void;
			public getViewModelStore(): androidx.lifecycle.ViewModelStore;
			public onMultiWindowModeChanged(isInMultiWindowMode: boolean, newConfig: android.content.res.Configuration): void;
			public peekAvailableContext(): android.content.Context;
			public onTrimMemory(level: number): void;
			public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
			public onCreate(param0: android.os.Bundle): void;
			public onSearchRequested(searchEvent: any): boolean;
			public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
			public onCreate(savedInstanceState: android.os.Bundle): void;
			public removeOnContextAvailableListener(listener: androidx.activity.contextaware.OnContextAvailableListener): void;
			public removeOnNewIntentListener(listener: androidx.core.util.Consumer<android.content.Intent>): void;
			public onActionModeFinished(mode: android.view.ActionMode): void;
			public onCreatePanelView(featureId: number): android.view.View;
			public onRetainNonConfigurationInstance(): any;
			/** @deprecated */
			public startActivityForResult(intent: android.content.Intent, requestCode: number, options: android.os.Bundle): void;
			public reportFullyDrawn(): void;
			public startActivityForResult(intent: android.content.Intent, requestCode: number): void;
			public setContentView(view: android.view.View): void;
			public onTrimMemory(param0: number): void;
			public getDefaultViewModelCreationExtras(): androidx.lifecycle.viewmodel.CreationExtras;
			public onBackPressed(): void;
			public addOnNewIntentListener(listener: androidx.core.util.Consumer<android.content.Intent>): void;
			public onActionModeFinished(param0: android.view.ActionMode): void;
			public dispatchGenericMotionEvent(ev: android.view.MotionEvent): boolean;
			public onWindowFocusChanged(hasFocus: boolean): void;
			public onActionModeStarted(param0: android.view.ActionMode): void;
			public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
			public registerForActivityResult(contract: androidx.activity.result.contract.ActivityResultContract<any,any>, callback: androidx.activity.result.ActivityResultCallback<any>): androidx.activity.result.ActivityResultLauncher<any>;
			public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
			public removeOnMultiWindowModeChangedListener(listener: androidx.core.util.Consumer<androidx.core.app.MultiWindowModeChangedInfo>): void;
			public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
			public onCreateView(parent: android.view.View, name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
			public onSearchRequested(param0: any): boolean;
			public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
			public getLifecycle(): androidx.lifecycle.Lifecycle;
			public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract<any,any>, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback<any>): androidx.activity.result.ActivityResultLauncher<any>;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
			public onRequestPermissionsResult(requestCode: number, permissions: string[], grantResults: number[]): void;
			public addMenuProvider(provider: androidx.core.view.MenuProvider): void;
			public onPictureInPictureModeChanged(isInPictureInPictureMode: boolean): void;
			public getActivityResultRegistry(): androidx.activity.result.ActivityResultRegistry;
			public startIntentSenderForResult(intent: android.content.IntentSender, requestCode: number, fillInIntent: android.content.Intent, flagsMask: number, flagsValues: number, extraFlags: number, options: android.os.Bundle): void;
			public onMultiWindowModeChanged(isInMultiWindowMode: boolean): void;
			public onWindowAttributesChanged(params: android.view.WindowManager.LayoutParams): void;
			public removeOnConfigurationChangedListener(listener: androidx.core.util.Consumer<android.content.res.Configuration>): void;
			public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
			public onConfigurationChanged(newConfig: android.content.res.Configuration): void;
			public onActionModeStarted(mode: android.view.ActionMode): void;
			public onMenuOpened(featureId: number, menu: android.view.Menu): boolean;
			public addOnConfigurationChangedListener(listener: androidx.core.util.Consumer<android.content.res.Configuration>): void;
			public initializeViewTreeOwners(): void;
			public onPreparePanel(featureId: number, view: android.view.View, menu: android.view.Menu): boolean;
			public onMenuItemSelected(featureId: number, item: android.view.MenuItem): boolean;
			public getFullyDrawnReporter(): androidx.activity.FullyDrawnReporter;
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
			public addOnMultiWindowModeChangedListener(listener: androidx.core.util.Consumer<androidx.core.app.MultiWindowModeChangedInfo>): void;
			public onNewIntent(intent: android.content.Intent): void;
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
			public addMenuProvider(param0: androidx.core.view.MenuProvider, param1: androidx.lifecycle.LifecycleOwner, param2: androidx.lifecycle.Lifecycle.State): void;
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
			public addOnTrimMemoryListener(listener: androidx.core.util.Consumer<java.lang.Integer>): void;
			public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
			public onSaveInstanceState(outState: android.os.Bundle, outPersistentState: any): void;
			/** @deprecated */
			public onRequestPermissionsResult(requestCode: number, permissions: string[], grantResults: number[]): void;
			public setContentView(layoutResID: number): void;
			public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
			public dispatchTouchEvent(ev: android.view.MotionEvent): boolean;
			public onSaveInstanceState(param0: android.os.Bundle): void;
			public addMenuProvider(param0: androidx.core.view.MenuProvider): void;
			public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			public removeMenuProvider(provider: androidx.core.view.MenuProvider): void;
			public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
			public onAttachedToWindow(): void;
			public constructor(base: android.content.Context);
			public addOnPictureInPictureModeChangedListener(listener: androidx.core.util.Consumer<androidx.core.app.PictureInPictureModeChangedInfo>): void;
			public addContentView(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
			public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
			public addMenuProvider(provider: androidx.core.view.MenuProvider, owner: androidx.lifecycle.LifecycleOwner): void;
			public addMenuProvider(param0: androidx.core.view.MenuProvider, param1: androidx.lifecycle.LifecycleOwner): void;
		}
		export module ComponentActivity {
			export class Api19Impl extends java.lang.Object {
				public static class: java.lang.Class<androidx.activity.ComponentActivity.Api19Impl>;
			}
			export class Api33Impl extends java.lang.Object {
				public static class: java.lang.Class<androidx.activity.ComponentActivity.Api33Impl>;
			}
			export class NonConfigurationInstances extends java.lang.Object {
				public static class: java.lang.Class<androidx.activity.ComponentActivity.NonConfigurationInstances>;
			}
			export class ReportFullyDrawnExecutor extends java.lang.Object implements java.util.concurrent.Executor {
				public static class: java.lang.Class<androidx.activity.ComponentActivity.ReportFullyDrawnExecutor>;
				/**
				 * Constructs a new instance of the androidx.activity.ComponentActivity$ReportFullyDrawnExecutor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					viewCreated(param0: android.view.View): void;
					activityDestroyed(): void;
					execute(param0: java.lang.Runnable): void;
				});
				public constructor();
				public viewCreated(param0: android.view.View): void;
				public execute(param0: java.lang.Runnable): void;
				public activityDestroyed(): void;
			}
			export class ReportFullyDrawnExecutorApi1 extends java.lang.Object implements androidx.activity.ComponentActivity.ReportFullyDrawnExecutor {
				public static class: java.lang.Class<androidx.activity.ComponentActivity.ReportFullyDrawnExecutorApi1>;
				public viewCreated(view: android.view.View): void;
				public viewCreated(param0: android.view.View): void;
				public execute(param0: java.lang.Runnable): void;
				public execute(runnable: java.lang.Runnable): void;
				public activityDestroyed(): void;
			}
			export class ReportFullyDrawnExecutorApi16Impl extends java.lang.Object implements androidx.activity.ComponentActivity.ReportFullyDrawnExecutor, android.view.ViewTreeObserver.OnDrawListener, java.lang.Runnable {
				public static class: java.lang.Class<androidx.activity.ComponentActivity.ReportFullyDrawnExecutorApi16Impl>;
				public viewCreated(view: android.view.View): void;
				public viewCreated(param0: android.view.View): void;
				public run(): void;
				public execute(param0: java.lang.Runnable): void;
				public onDraw(): void;
				public execute(runnable: java.lang.Runnable): void;
				public activityDestroyed(): void;
			}
		}
	}
}

declare module androidx {
	export module activity {
		export class ComponentDialog extends android.app.Dialog implements androidx.lifecycle.LifecycleOwner, androidx.activity.OnBackPressedDispatcherOwner, androidx.savedstate.SavedStateRegistryOwner {
			public static class: java.lang.Class<androidx.activity.ComponentDialog>;
			public onStart(): void;
			public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
			public onActionModeStarted(mode: android.view.ActionMode): void;
			public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
			public onMenuOpened(featureId: number, menu: android.view.Menu): boolean;
			public cancel(): void;
			public initializeViewTreeOwners(): void;
			public onPreparePanel(featureId: number, view: android.view.View, menu: android.view.Menu): boolean;
			public onMenuItemSelected(featureId: number, item: android.view.MenuItem): boolean;
			public onWindowStartingActionMode(callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
			public onSearchRequested(): boolean;
			public constructor(context: android.content.Context);
			public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
			public onCreatePanelView(param0: number): android.view.View;
			public onSaveInstanceState(): android.os.Bundle;
			public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
			public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public onDetachedFromWindow(): void;
			public dispatchKeyShortcutEvent(event: android.view.KeyEvent): boolean;
			public setContentView(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
			public dispatchKeyEvent(event: android.view.KeyEvent): boolean;
			public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
			public onWindowFocusChanged(param0: boolean): void;
			public onPanelClosed(featureId: number, menu: android.view.Menu): void;
			public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: android.view.Menu, deviceId: number): void;
			public onSearchRequested(searchEvent: any): boolean;
			public onContentChanged(): void;
			public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
			public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
			public onCreate(savedInstanceState: android.os.Bundle): void;
			public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
			public onActionModeFinished(mode: android.view.ActionMode): void;
			public onCreatePanelView(featureId: number): android.view.View;
			public dispatchTrackballEvent(ev: android.view.MotionEvent): boolean;
			public onPanelClosed(param0: number, param1: android.view.Menu): void;
			public getOnBackPressedDispatcher(): androidx.activity.OnBackPressedDispatcher;
			public setContentView(view: android.view.View): void;
			public onBackPressed(): void;
			public constructor(context: android.content.Context, cancelable: boolean, cancelListener: android.content.DialogInterface.OnCancelListener);
			public onActionModeFinished(param0: android.view.ActionMode): void;
			public dispatchGenericMotionEvent(ev: android.view.MotionEvent): boolean;
			public onWindowFocusChanged(hasFocus: boolean): void;
			public onStop(): void;
			public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
			public onActionModeStarted(param0: android.view.ActionMode): void;
			public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
			public onCreatePanelMenu(featureId: number, menu: android.view.Menu): boolean;
			public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
			public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
			public dismiss(): void;
			public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
			public onSearchRequested(param0: any): boolean;
			public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
			public getLifecycle(): androidx.lifecycle.Lifecycle;
			public setContentView(layoutResID: number): void;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
			public constructor(context: android.content.Context, themeResId: number);
			public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
			public dispatchTouchEvent(ev: android.view.MotionEvent): boolean;
			public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
			public onAttachedToWindow(): void;
			public onWindowAttributesChanged(params: android.view.WindowManager.LayoutParams): void;
			public addContentView(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
			public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
		}
	}
}

declare module androidx {
	export module activity {
		export class EdgeToEdge extends java.lang.Object {
			public static class: java.lang.Class<androidx.activity.EdgeToEdge>;
			public static enable($this$enableEdgeToEdge: androidx.activity.ComponentActivity): void;
			public static enable($this$enableEdgeToEdge: androidx.activity.ComponentActivity, statusBarStyle: androidx.activity.SystemBarStyle): void;
			public static getDefaultDarkScrim(): number;
			public static enable($this$enableEdgeToEdge: androidx.activity.ComponentActivity, statusBarStyle: androidx.activity.SystemBarStyle, navigationBarStyle: androidx.activity.SystemBarStyle): void;
			public static getDefaultLightScrim(): number;
		}
	}
}

declare module androidx {
	export module activity {
		export class EdgeToEdgeApi21 extends java.lang.Object implements androidx.activity.EdgeToEdgeImpl {
			public static class: java.lang.Class<androidx.activity.EdgeToEdgeApi21>;
			public setUp(param0: androidx.activity.SystemBarStyle, param1: androidx.activity.SystemBarStyle, param2: android.view.Window, param3: android.view.View, param4: boolean, param5: boolean): void;
			public constructor();
			public setUp(statusBarStyle: androidx.activity.SystemBarStyle, navigationBarStyle: androidx.activity.SystemBarStyle, window: android.view.Window, view: android.view.View, statusBarIsDark: boolean, navigationBarIsDark: boolean): void;
		}
	}
}

declare module androidx {
	export module activity {
		export class EdgeToEdgeApi23 extends java.lang.Object implements androidx.activity.EdgeToEdgeImpl {
			public static class: java.lang.Class<androidx.activity.EdgeToEdgeApi23>;
			public setUp(param0: androidx.activity.SystemBarStyle, param1: androidx.activity.SystemBarStyle, param2: android.view.Window, param3: android.view.View, param4: boolean, param5: boolean): void;
			public constructor();
			public setUp(statusBarStyle: androidx.activity.SystemBarStyle, navigationBarStyle: androidx.activity.SystemBarStyle, window: android.view.Window, view: android.view.View, statusBarIsDark: boolean, navigationBarIsDark: boolean): void;
		}
	}
}

declare module androidx {
	export module activity {
		export class EdgeToEdgeApi26 extends java.lang.Object implements androidx.activity.EdgeToEdgeImpl {
			public static class: java.lang.Class<androidx.activity.EdgeToEdgeApi26>;
			public setUp(param0: androidx.activity.SystemBarStyle, param1: androidx.activity.SystemBarStyle, param2: android.view.Window, param3: android.view.View, param4: boolean, param5: boolean): void;
			public constructor();
			public setUp(statusBarStyle: androidx.activity.SystemBarStyle, navigationBarStyle: androidx.activity.SystemBarStyle, window: android.view.Window, view: android.view.View, statusBarIsDark: boolean, navigationBarIsDark: boolean): void;
		}
	}
}

declare module androidx {
	export module activity {
		export class EdgeToEdgeApi29 extends java.lang.Object implements androidx.activity.EdgeToEdgeImpl {
			public static class: java.lang.Class<androidx.activity.EdgeToEdgeApi29>;
			public setUp(param0: androidx.activity.SystemBarStyle, param1: androidx.activity.SystemBarStyle, param2: android.view.Window, param3: android.view.View, param4: boolean, param5: boolean): void;
			public constructor();
			public setUp(statusBarStyle: androidx.activity.SystemBarStyle, navigationBarStyle: androidx.activity.SystemBarStyle, window: android.view.Window, view: android.view.View, statusBarIsDark: boolean, navigationBarIsDark: boolean): void;
		}
	}
}

declare module androidx {
	export module activity {
		export class EdgeToEdgeBase extends java.lang.Object implements androidx.activity.EdgeToEdgeImpl {
			public static class: java.lang.Class<androidx.activity.EdgeToEdgeBase>;
			public setUp(param0: androidx.activity.SystemBarStyle, param1: androidx.activity.SystemBarStyle, param2: android.view.Window, param3: android.view.View, param4: boolean, param5: boolean): void;
			public constructor();
			public setUp(statusBarStyle: androidx.activity.SystemBarStyle, navigationBarStyle: androidx.activity.SystemBarStyle, window: android.view.Window, view: android.view.View, statusBarIsDark: boolean, navigationBarIsDark: boolean): void;
		}
	}
}

declare module androidx {
	export module activity {
		export class EdgeToEdgeImpl extends java.lang.Object {
			public static class: java.lang.Class<androidx.activity.EdgeToEdgeImpl>;
			/**
			 * Constructs a new instance of the androidx.activity.EdgeToEdgeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				setUp(param0: androidx.activity.SystemBarStyle, param1: androidx.activity.SystemBarStyle, param2: android.view.Window, param3: android.view.View, param4: boolean, param5: boolean): void;
			});
			public constructor();
			public setUp(param0: androidx.activity.SystemBarStyle, param1: androidx.activity.SystemBarStyle, param2: android.view.Window, param3: android.view.View, param4: boolean, param5: boolean): void;
		}
	}
}

declare module androidx {
	export module activity {
		export class FullyDrawnReporter extends java.lang.Object {
			public static class: java.lang.Class<androidx.activity.FullyDrawnReporter>;
			public fullyDrawnReported(): void;
			public isFullyDrawnReported(): boolean;
			public removeReporter(): void;
			public constructor(executor: java.util.concurrent.Executor, reportFullyDrawn: kotlin.jvm.functions.Function0<kotlin.Unit>);
			public addOnReportDrawnListener(callback: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
			public addReporter(): void;
			public removeOnReportDrawnListener(callback: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
		}
	}
}

declare module androidx {
	export module activity {
		export class FullyDrawnReporterOwner extends java.lang.Object {
			public static class: java.lang.Class<androidx.activity.FullyDrawnReporterOwner>;
			/**
			 * Constructs a new instance of the androidx.activity.FullyDrawnReporterOwner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getFullyDrawnReporter(): androidx.activity.FullyDrawnReporter;
			});
			public constructor();
			public getFullyDrawnReporter(): androidx.activity.FullyDrawnReporter;
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
			public addCancellable(cancellable: androidx.activity.Cancellable): void;
			public handleOnBackStarted(backEvent: androidx.activity.BackEventCompat): void;
			public setEnabledChangedCallback$activity_release(_set_: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
			public getEnabledChangedCallback$activity_release(): kotlin.jvm.functions.Function0<kotlin.Unit>;
			public handleOnBackProgressed(backEvent: androidx.activity.BackEventCompat): void;
			public constructor(enabled: boolean);
			public handleOnBackPressed(): void;
			public removeCancellable(cancellable: androidx.activity.Cancellable): void;
			public handleOnBackCancelled(): void;
			public remove(): void;
			public setEnabled(value: boolean): void;
		}
	}
}

declare module androidx {
	export module activity {
		export class OnBackPressedDispatcher extends java.lang.Object {
			public static class: java.lang.Class<androidx.activity.OnBackPressedDispatcher>;
			public addCancellableCallback$activity_release(onBackPressedCallback: androidx.activity.OnBackPressedCallback): androidx.activity.Cancellable;
			public constructor(fallbackOnBackPressed: java.lang.Runnable, onHasEnabledCallbacksChanged: androidx.core.util.Consumer<java.lang.Boolean>);
			public dispatchOnBackProgressed(backEvent: androidx.activity.BackEventCompat): void;
			public constructor(fallbackOnBackPressed: java.lang.Runnable);
			public setOnBackInvokedDispatcher(invoker: android.window.OnBackInvokedDispatcher): void;
			public onBackPressed(): void;
			public dispatchOnBackCancelled(): void;
			public addCallback(onBackPressedCallback: androidx.activity.OnBackPressedCallback): void;
			public dispatchOnBackStarted(backEvent: androidx.activity.BackEventCompat): void;
			public addCallback(owner: androidx.lifecycle.LifecycleOwner, onBackPressedCallback: androidx.activity.OnBackPressedCallback): void;
			public constructor();
			public hasEnabledCallbacks(): boolean;
		}
		export module OnBackPressedDispatcher {
			export class Api33Impl extends java.lang.Object {
				public static class: java.lang.Class<androidx.activity.OnBackPressedDispatcher.Api33Impl>;
				public static INSTANCE: androidx.activity.OnBackPressedDispatcher.Api33Impl;
				public createOnBackInvokedCallback(onBackInvoked: kotlin.jvm.functions.Function0<kotlin.Unit>): android.window.OnBackInvokedCallback;
				public unregisterOnBackInvokedCallback(dispatcher: any, callback: any): void;
				public registerOnBackInvokedCallback(dispatcher: any, priority: number, callback: any): void;
			}
			export class Api34Impl extends java.lang.Object {
				public static class: java.lang.Class<androidx.activity.OnBackPressedDispatcher.Api34Impl>;
				public static INSTANCE: androidx.activity.OnBackPressedDispatcher.Api34Impl;
				public createOnBackAnimationCallback(onBackStarted: kotlin.jvm.functions.Function1<any,kotlin.Unit>, onBackProgressed: kotlin.jvm.functions.Function1<any,kotlin.Unit>, onBackInvoked: kotlin.jvm.functions.Function0<kotlin.Unit>, onBackCancelled: kotlin.jvm.functions.Function0<kotlin.Unit>): android.window.OnBackInvokedCallback;
			}
			export class LifecycleOnBackPressedCancellable extends java.lang.Object implements androidx.lifecycle.LifecycleEventObserver, androidx.activity.Cancellable {
				public static class: java.lang.Class<androidx.activity.OnBackPressedDispatcher.LifecycleOnBackPressedCancellable>;
				public onStateChanged(source: androidx.lifecycle.LifecycleOwner, event: androidx.lifecycle.Lifecycle.Event): void;
				public onStateChanged(param0: androidx.lifecycle.LifecycleOwner, param1: androidx.lifecycle.Lifecycle.Event): void;
				public cancel(): void;
				public constructor(this$0: androidx.lifecycle.Lifecycle, lifecycle: androidx.activity.OnBackPressedCallback);
			}
			export class OnBackPressedCancellable extends java.lang.Object implements androidx.activity.Cancellable {
				public static class: java.lang.Class<androidx.activity.OnBackPressedDispatcher.OnBackPressedCancellable>;
				public constructor(this$0: androidx.activity.OnBackPressedCallback);
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
		export class SystemBarStyle extends java.lang.Object {
			public static class: java.lang.Class<androidx.activity.SystemBarStyle>;
			public getDarkScrim$activity_release(): number;
			public getNightMode$activity_release(): number;
			public getScrim$activity_release(isDark: boolean): number;
			public static light(scrim: number, darkScrim: number): androidx.activity.SystemBarStyle;
			public getDetectDarkMode$activity_release(): kotlin.jvm.functions.Function1<android.content.res.Resources,java.lang.Boolean>;
			public getScrimWithEnforcedContrast$activity_release(isDark: boolean): number;
			public static dark(scrim: number): androidx.activity.SystemBarStyle;
			public static auto(lightScrim: number, darkScrim: number, detectDarkMode: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): androidx.activity.SystemBarStyle;
			public static auto(lightScrim: number, darkScrim: number): androidx.activity.SystemBarStyle;
		}
		export module SystemBarStyle {
			export class Companion extends java.lang.Object {
				public static class: java.lang.Class<androidx.activity.SystemBarStyle.Companion>;
				public dark(scrim: number): androidx.activity.SystemBarStyle;
				public auto(lightScrim: number, darkScrim: number): androidx.activity.SystemBarStyle;
				public auto(lightScrim: number, darkScrim: number, detectDarkMode: kotlin.jvm.functions.Function1<any,java.lang.Boolean>): androidx.activity.SystemBarStyle;
				public light(scrim: number, darkScrim: number): androidx.activity.SystemBarStyle;
			}
		}
	}
}

declare module androidx {
	export module activity {
		export class ViewTreeFullyDrawnReporterOwner extends java.lang.Object {
			public static class: java.lang.Class<androidx.activity.ViewTreeFullyDrawnReporterOwner>;
			public static set($this$setViewTreeFullyDrawnReporterOwner: android.view.View, fullyDrawnReporterOwner: androidx.activity.FullyDrawnReporterOwner): void;
			public static get($this$findViewTreeFullyDrawnReporterOwner: android.view.View): androidx.activity.FullyDrawnReporterOwner;
		}
	}
}

declare module androidx {
	export module activity {
		export class ViewTreeOnBackPressedDispatcherOwner extends java.lang.Object {
			public static class: java.lang.Class<androidx.activity.ViewTreeOnBackPressedDispatcherOwner>;
			public static get($this$findViewTreeOnBackPressedDispatcherOwner: android.view.View): androidx.activity.OnBackPressedDispatcherOwner;
			public static set($this$setViewTreeOnBackPressedDispatcherOwner: android.view.View, onBackPressedDispatcherOwner: androidx.activity.OnBackPressedDispatcherOwner): void;
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
				public constructor(parcel: android.os.Parcel);
				public describeContents(): number;
				public getFlagsValues(): number;
				public constructor(intentSender: android.content.IntentSender, fillInIntent: android.content.Intent, flagsMask: number, flagsValues: number);
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
				export module Builder {
					export class Flag extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.activity.result.IntentSenderRequest.Builder.Flag>;
						/**
						 * Constructs a new instance of the androidx.activity.result.IntentSenderRequest$Builder$Flag interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<androidx.activity.result.IntentSenderRequest.Companion>;
				}
			}
		}
	}
}

declare module androidx {
	export module activity {
		export module result {
			export class PickVisualMediaRequest extends java.lang.Object {
				public static class: java.lang.Class<androidx.activity.result.PickVisualMediaRequest>;
				public setMediaType$activity_release(_set_: androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia.VisualMediaType): void;
				public getMediaType(): androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia.VisualMediaType;
				public constructor();
			}
			export module PickVisualMediaRequest {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.activity.result.PickVisualMediaRequest.Builder>;
					public constructor();
					public setMediaType(mediaType: androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia.VisualMediaType): androidx.activity.result.PickVisualMediaRequest.Builder;
					public build(): androidx.activity.result.PickVisualMediaRequest;
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
					export class CaptureVideo extends androidx.activity.result.contract.ActivityResultContract<android.net.Uri,java.lang.Boolean> {
						public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.CaptureVideo>;
						public parseResult(resultCode: number, intent: android.content.Intent): java.lang.Boolean;
						public constructor();
						public getSynchronousResult(context: android.content.Context, input: android.net.Uri): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<java.lang.Boolean>;
						public createIntent(param0: android.content.Context, param1: any): android.content.Intent;
						public getSynchronousResult(context: android.content.Context, input: any): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<any>;
						public createIntent(context: android.content.Context, input: android.net.Uri): android.content.Intent;
						public parseResult(param0: number, param1: android.content.Intent): any;
					}
					export class CreateDocument extends androidx.activity.result.contract.ActivityResultContract<string,android.net.Uri> {
						public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.CreateDocument>;
						public constructor();
						public createIntent(context: android.content.Context, input: string): android.content.Intent;
						public constructor(mimeType: string);
						/** @deprecated */
						public constructor();
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
					export module GetMultipleContents {
						export class Companion extends java.lang.Object {
							public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.GetMultipleContents.Companion>;
							public getClipDataUris$activity_release($this$getClipDataUris: android.content.Intent): java.util.List<android.net.Uri>;
						}
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
					export class PickMultipleVisualMedia extends androidx.activity.result.contract.ActivityResultContract<androidx.activity.result.PickVisualMediaRequest,java.util.List<android.net.Uri>> {
						public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.PickMultipleVisualMedia>;
						public constructor();
						public getSynchronousResult(context: android.content.Context, input: androidx.activity.result.PickVisualMediaRequest): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<java.util.List<android.net.Uri>>;
						public createIntent(context: android.content.Context, input: androidx.activity.result.PickVisualMediaRequest): android.content.Intent;
						public createIntent(param0: android.content.Context, param1: any): android.content.Intent;
						public getSynchronousResult(context: android.content.Context, input: any): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<any>;
						public constructor(maxItems: number);
						public parseResult(resultCode: number, intent: android.content.Intent): java.util.List<android.net.Uri>;
						public parseResult(param0: number, param1: android.content.Intent): any;
					}
					export module PickMultipleVisualMedia {
						export class Companion extends java.lang.Object {
							public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.PickMultipleVisualMedia.Companion>;
							public getMaxItems$activity_release(): number;
						}
					}
					export class PickVisualMedia extends androidx.activity.result.contract.ActivityResultContract<androidx.activity.result.PickVisualMediaRequest,android.net.Uri> {
						public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia>;
						public static ACTION_SYSTEM_FALLBACK_PICK_IMAGES: string;
						public static EXTRA_SYSTEM_FALLBACK_PICK_IMAGES_MAX: string;
						public static GMS_ACTION_PICK_IMAGES: string;
						public static GMS_EXTRA_PICK_IMAGES_MAX: string;
						public constructor();
						public static getGmsPicker$activity_release(context: android.content.Context): android.content.pm.ResolveInfo;
						public static isSystemFallbackPickerAvailable$activity_release(context: android.content.Context): boolean;
						public static isGmsPickerAvailable$activity_release(context: android.content.Context): boolean;
						/** @deprecated */
						public static isPhotoPickerAvailable(): boolean;
						public static isSystemPickerAvailable$activity_release(): boolean;
						public static getSystemFallbackPicker$activity_release(context: android.content.Context): android.content.pm.ResolveInfo;
						public createIntent(context: android.content.Context, input: androidx.activity.result.PickVisualMediaRequest): android.content.Intent;
						public getSynchronousResult(context: android.content.Context, input: androidx.activity.result.PickVisualMediaRequest): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<android.net.Uri>;
						public static isPhotoPickerAvailable(context: android.content.Context): boolean;
						public parseResult(resultCode: number, intent: android.content.Intent): android.net.Uri;
						public createIntent(param0: android.content.Context, param1: any): android.content.Intent;
						public getSynchronousResult(context: android.content.Context, input: any): androidx.activity.result.contract.ActivityResultContract.SynchronousResult<any>;
						public parseResult(param0: number, param1: android.content.Intent): any;
					}
					export module PickVisualMedia {
						export class Companion extends java.lang.Object {
							public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia.Companion>;
							/** @deprecated */
							public isPhotoPickerAvailable(): boolean;
							public isPhotoPickerAvailable(context: android.content.Context): boolean;
							public getVisualMimeType$activity_release(input: androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia.VisualMediaType): string;
							public isSystemFallbackPickerAvailable$activity_release(context: android.content.Context): boolean;
							public getGmsPicker$activity_release(context: android.content.Context): android.content.pm.ResolveInfo;
							public isGmsPickerAvailable$activity_release(context: android.content.Context): boolean;
							public getSystemFallbackPicker$activity_release(context: android.content.Context): android.content.pm.ResolveInfo;
							public isSystemPickerAvailable$activity_release(): boolean;
						}
						export class ImageAndVideo extends java.lang.Object implements androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia.VisualMediaType {
							public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia.ImageAndVideo>;
							public static INSTANCE: androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia.ImageAndVideo;
						}
						export class ImageOnly extends java.lang.Object implements androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia.VisualMediaType {
							public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia.ImageOnly>;
							public static INSTANCE: androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia.ImageOnly;
						}
						export class SingleMimeType extends java.lang.Object implements androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia.VisualMediaType {
							public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia.SingleMimeType>;
							public getMimeType(): string;
							public constructor(mimeType: string);
						}
						export class VideoOnly extends java.lang.Object implements androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia.VisualMediaType {
							public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia.VideoOnly>;
							public static INSTANCE: androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia.VideoOnly;
						}
						export class VisualMediaType extends java.lang.Object {
							public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia.VisualMediaType>;
							/**
							 * Constructs a new instance of the androidx.activity.result.contract.ActivityResultContracts$PickVisualMedia$VisualMediaType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
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
					export module RequestMultiplePermissions {
						export class Companion extends java.lang.Object {
							public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.RequestMultiplePermissions.Companion>;
							public createIntent$activity_release(input: string[]): android.content.Intent;
						}
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
					export module StartActivityForResult {
						export class Companion extends java.lang.Object {
							public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.StartActivityForResult.Companion>;
						}
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
					export module StartIntentSenderForResult {
						export class Companion extends java.lang.Object {
							public static class: java.lang.Class<androidx.activity.result.contract.ActivityResultContracts.StartIntentSenderForResult.Companion>;
						}
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

