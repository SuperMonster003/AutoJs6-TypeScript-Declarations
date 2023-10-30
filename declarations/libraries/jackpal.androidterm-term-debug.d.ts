declare module jackpal {
	export module androidterm {
		export class BoundSession extends jackpal.androidterm.GenericTermSession {
			public static class: java.lang.Class<jackpal.androidterm.BoundSession>;
			public getTitle(): string;
			public getTitle(defaultTitle: string): string;
			public initializeEmulator(columns: number, rows: number): void;
		}
	}
}

declare module jackpal {
	export module androidterm {
		export class BuildConfig extends java.lang.Object {
			public static class: java.lang.Class<jackpal.androidterm.BuildConfig>;
			public static DEBUG: boolean;
			public static APPLICATION_ID: string;
			public static BUILD_TYPE: string;
			public static FLAVOR: string;
			public static VERSION_CODE: number;
			public static VERSION_NAME: string;
			public constructor();
		}
	}
}

declare module jackpal {
	export module androidterm {
		export class Exec extends java.lang.Object {
			public static class: java.lang.Class<jackpal.androidterm.Exec>;
			public constructor();
		}
	}
}

declare module jackpal {
	export module androidterm {
		export class GenericTermSession extends jackpal.androidterm.emulatorview.TermSession {
			public static class: java.lang.Class<jackpal.androidterm.GenericTermSession>;
			public static PROCESS_EXIT_FINISHES_SESSION: number;
			public static PROCESS_EXIT_DISPLAYS_MESSAGE: number;
			public updatePrefs(settings: jackpal.androidterm.util.TermSettings): void;
			public onProcessExit(): void;
			public getTitle(): string;
			public toString(): string;
			public getHandle(): string;
			public finish(): void;
			public getTitle(defaultTitle: string): string;
			public setHandle(handle: string): void;
			public initializeEmulator(columns: number, rows: number): void;
			public updateSize(columns: number, rows: number): void;
			public setProcessExitMessage(message: string): void;
		}
	}
}

declare module jackpal {
	export module androidterm {
		export class RemoteInterface extends android.app.Activity {
			public static class: java.lang.Class<jackpal.androidterm.RemoteInterface>;
			public static PRIVACT_OPEN_NEW_WINDOW: string;
			public static PRIVACT_SWITCH_WINDOW: string;
			public static PRIVEXTRA_TARGET_WINDOW: string;
			public static PRIVACT_ACTIVITY_ALIAS: string;
			public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
			public onActionModeStarted(mode: android.view.ActionMode): void;
			public finish(): void;
			public onMenuOpened(featureId: number, menu: android.view.Menu): boolean;
			public onCreateView(name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
			public onPreparePanel(featureId: number, view: android.view.View, menu: android.view.Menu): boolean;
			public handleIntent(): void;
			public onMenuItemSelected(featureId: number, item: android.view.MenuItem): boolean;
			public onWindowStartingActionMode(callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
			public onSearchRequested(): boolean;
			public constructor(base: android.content.Context, themeResId: number);
			public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
			public onCreatePanelView(param0: number): android.view.View;
			public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
			public onCreate(savedInstanceState: android.os.Bundle, persistentState: any): void;
			public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
			public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public onDetachedFromWindow(): void;
			public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
			public dispatchKeyShortcutEvent(event: android.view.KeyEvent): boolean;
			public static quoteForBash(s: string): string;
			public constructor();
			public getTermService(): jackpal.androidterm.TermService;
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
			public onTrimMemory(level: number): void;
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
			public appendToWindow(handle: string, iInitialCommand: string): string;
			public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
			public onActionModeFinished(mode: android.view.ActionMode): void;
			public onCreatePanelView(featureId: number): android.view.View;
			public dispatchTrackballEvent(ev: android.view.MotionEvent): boolean;
			public onPanelClosed(param0: number, param1: android.view.Menu): void;
			public onTrimMemory(param0: number): void;
			public onActionModeFinished(param0: android.view.ActionMode): void;
			public constructor(base: android.content.Context, theme: android.content.res.Resources.Theme);
			public dispatchGenericMotionEvent(ev: android.view.MotionEvent): boolean;
			public onWindowFocusChanged(hasFocus: boolean): void;
			public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
			public onActionModeStarted(param0: android.view.ActionMode): void;
			public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
			public onCreatePanelMenu(featureId: number, menu: android.view.Menu): boolean;
			public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
			public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
			public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
			public openNewWindow(iInitialCommand: string): string;
			public onCreateView(parent: android.view.View, name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
			public onSearchRequested(param0: any): boolean;
			public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
			public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
			public dispatchTouchEvent(ev: android.view.MotionEvent): boolean;
			public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
			public onAttachedToWindow(): void;
			public constructor(base: android.content.Context);
			public onWindowAttributesChanged(params: android.view.WindowManager.LayoutParams): void;
			public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
		}
	}
}

declare module jackpal {
	export module androidterm {
		export class RunScript extends jackpal.androidterm.RemoteInterface {
			public static class: java.lang.Class<jackpal.androidterm.RunScript>;
			public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
			public onActionModeStarted(mode: android.view.ActionMode): void;
			public onMenuOpened(featureId: number, menu: android.view.Menu): boolean;
			public onCreateView(name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
			public onPreparePanel(featureId: number, view: android.view.View, menu: android.view.Menu): boolean;
			public handleIntent(): void;
			public onMenuItemSelected(featureId: number, item: android.view.MenuItem): boolean;
			public onWindowStartingActionMode(callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
			public onSearchRequested(): boolean;
			public constructor(base: android.content.Context, themeResId: number);
			public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
			public onCreatePanelView(param0: number): android.view.View;
			public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
			public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public onDetachedFromWindow(): void;
			public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
			public dispatchKeyShortcutEvent(event: android.view.KeyEvent): boolean;
			public constructor();
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
			public onTrimMemory(level: number): void;
			public dispatchKeyEvent(event: android.view.KeyEvent): boolean;
			public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
			public onWindowFocusChanged(param0: boolean): void;
			public onPanelClosed(featureId: number, menu: android.view.Menu): void;
			public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: android.view.Menu, deviceId: number): void;
			public onSearchRequested(searchEvent: any): boolean;
			public onContentChanged(): void;
			public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
			public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
			public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
			public onActionModeFinished(mode: android.view.ActionMode): void;
			public onCreatePanelView(featureId: number): android.view.View;
			public dispatchTrackballEvent(ev: android.view.MotionEvent): boolean;
			public onPanelClosed(param0: number, param1: android.view.Menu): void;
			public onTrimMemory(param0: number): void;
			public onActionModeFinished(param0: android.view.ActionMode): void;
			public constructor(base: android.content.Context, theme: android.content.res.Resources.Theme);
			public dispatchGenericMotionEvent(ev: android.view.MotionEvent): boolean;
			public onWindowFocusChanged(hasFocus: boolean): void;
			public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
			public onActionModeStarted(param0: android.view.ActionMode): void;
			public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
			public onCreatePanelMenu(featureId: number, menu: android.view.Menu): boolean;
			public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
			public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
			public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
			public onCreateView(parent: android.view.View, name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
			public onSearchRequested(param0: any): boolean;
			public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
			public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
			public dispatchTouchEvent(ev: android.view.MotionEvent): boolean;
			public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
			public onAttachedToWindow(): void;
			public constructor(base: android.content.Context);
			public onWindowAttributesChanged(params: android.view.WindowManager.LayoutParams): void;
			public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
		}
	}
}

declare module jackpal {
	export module androidterm {
		export class RunShortcut extends jackpal.androidterm.RemoteInterface {
			public static class: java.lang.Class<jackpal.androidterm.RunShortcut>;
			public static ACTION_RUN_SHORTCUT: string;
			public static EXTRA_WINDOW_HANDLE: string;
			public static EXTRA_SHORTCUT_COMMAND: string;
			public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
			public onActionModeStarted(mode: android.view.ActionMode): void;
			public onMenuOpened(featureId: number, menu: android.view.Menu): boolean;
			public onCreateView(name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
			public onPreparePanel(featureId: number, view: android.view.View, menu: android.view.Menu): boolean;
			public handleIntent(): void;
			public onMenuItemSelected(featureId: number, item: android.view.MenuItem): boolean;
			public onWindowStartingActionMode(callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
			public onSearchRequested(): boolean;
			public constructor(base: android.content.Context, themeResId: number);
			public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
			public onCreatePanelView(param0: number): android.view.View;
			public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
			public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public onDetachedFromWindow(): void;
			public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
			public dispatchKeyShortcutEvent(event: android.view.KeyEvent): boolean;
			public constructor();
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
			public onTrimMemory(level: number): void;
			public dispatchKeyEvent(event: android.view.KeyEvent): boolean;
			public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
			public onWindowFocusChanged(param0: boolean): void;
			public onPanelClosed(featureId: number, menu: android.view.Menu): void;
			public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: android.view.Menu, deviceId: number): void;
			public onSearchRequested(searchEvent: any): boolean;
			public onContentChanged(): void;
			public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
			public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
			public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
			public onActionModeFinished(mode: android.view.ActionMode): void;
			public onCreatePanelView(featureId: number): android.view.View;
			public dispatchTrackballEvent(ev: android.view.MotionEvent): boolean;
			public onPanelClosed(param0: number, param1: android.view.Menu): void;
			public onTrimMemory(param0: number): void;
			public onActionModeFinished(param0: android.view.ActionMode): void;
			public constructor(base: android.content.Context, theme: android.content.res.Resources.Theme);
			public dispatchGenericMotionEvent(ev: android.view.MotionEvent): boolean;
			public onWindowFocusChanged(hasFocus: boolean): void;
			public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
			public onActionModeStarted(param0: android.view.ActionMode): void;
			public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
			public onCreatePanelMenu(featureId: number, menu: android.view.Menu): boolean;
			public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
			public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
			public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
			public onCreateView(parent: android.view.View, name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
			public onSearchRequested(param0: any): boolean;
			public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
			public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
			public dispatchTouchEvent(ev: android.view.MotionEvent): boolean;
			public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
			public onAttachedToWindow(): void;
			public constructor(base: android.content.Context);
			public onWindowAttributesChanged(params: android.view.WindowManager.LayoutParams): void;
			public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
		}
	}
}

declare module jackpal {
	export module androidterm {
		export class ShellTermSession extends jackpal.androidterm.GenericTermSession {
			public static class: java.lang.Class<jackpal.androidterm.ShellTermSession>;
			public finish(): void;
			public initializeEmulator(columns: number, rows: number): void;
			public constructor();
			public constructor(settings: jackpal.androidterm.util.TermSettings, initialCommand: string);
			public constructor(exitOnEOF: boolean);
		}
	}
}

declare module jackpal {
	export module androidterm {
		export class Term extends android.app.Activity implements jackpal.androidterm.emulatorview.UpdateCallback, android.content.SharedPreferences.OnSharedPreferenceChangeListener {
			public static class: java.lang.Class<jackpal.androidterm.Term>;
			public static REQUEST_CHOOSE_WINDOW: number;
			public static EXTRA_WINDOW_ID: string;
			public onStart(): void;
			public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
			public onConfigurationChanged(newConfig: android.content.res.Configuration): void;
			public onActionModeStarted(mode: android.view.ActionMode): void;
			public onActivityResult(request: number, result: number, data: android.content.Intent): void;
			public onMenuOpened(featureId: number, menu: android.view.Menu): boolean;
			public onCreateView(name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
			public onPreparePanel(featureId: number, view: android.view.View, menu: android.view.Menu): boolean;
			public onMenuItemSelected(featureId: number, item: android.view.MenuItem): boolean;
			public onActivityResult(requestCode: number, resultCode: number, data: android.content.Intent): void;
			public onCreate(icicle: android.os.Bundle): void;
			public onWindowStartingActionMode(callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
			public onSearchRequested(): boolean;
			public constructor(base: android.content.Context, themeResId: number);
			public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
			public onCreatePanelView(param0: number): android.view.View;
			public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
			public onCreate(savedInstanceState: android.os.Bundle, persistentState: any): void;
			public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
			public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public onDetachedFromWindow(): void;
			public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
			public dispatchKeyShortcutEvent(event: android.view.KeyEvent): boolean;
			public onNewIntent(intent: android.content.Intent): void;
			public constructor();
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
			public onTrimMemory(level: number): void;
			public dispatchKeyEvent(event: android.view.KeyEvent): boolean;
			public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
			public onWindowFocusChanged(param0: boolean): void;
			public onPanelClosed(featureId: number, menu: android.view.Menu): void;
			public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: android.view.Menu, deviceId: number): void;
			public onSearchRequested(searchEvent: any): boolean;
			public onContentChanged(): void;
			public onSharedPreferenceChanged(sharedPreferences: android.content.SharedPreferences, s: string): void;
			public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
			public static createTermSession(context: android.content.Context, settings: jackpal.androidterm.util.TermSettings, initialCommand: string): jackpal.androidterm.emulatorview.TermSession;
			public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
			public onCreate(savedInstanceState: android.os.Bundle): void;
			public onPrepareOptionsMenu(menu: android.view.Menu): boolean;
			public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
			public onUpdate(): void;
			public onActionModeFinished(mode: android.view.ActionMode): void;
			public onCreatePanelView(featureId: number): android.view.View;
			public dispatchTrackballEvent(ev: android.view.MotionEvent): boolean;
			public onDestroy(): void;
			public onPanelClosed(param0: number, param1: android.view.Menu): void;
			public onTrimMemory(param0: number): void;
			public onActionModeFinished(param0: android.view.ActionMode): void;
			public constructor(base: android.content.Context, theme: android.content.res.Resources.Theme);
			public onPause(): void;
			public dispatchGenericMotionEvent(ev: android.view.MotionEvent): boolean;
			public onWindowFocusChanged(hasFocus: boolean): void;
			public onStop(): void;
			public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
			public onActionModeStarted(param0: android.view.ActionMode): void;
			public onCreateOptionsMenu(menu: android.view.Menu): boolean;
			public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
			public onCreatePanelMenu(featureId: number, menu: android.view.Menu): boolean;
			public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
			public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
			public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
			public onOptionsItemSelected(item: android.view.MenuItem): boolean;
			public onCreateView(parent: android.view.View, name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
			public onSearchRequested(param0: any): boolean;
			public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
			public onContextItemSelected(item: android.view.MenuItem): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
			public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
			public dispatchTouchEvent(ev: android.view.MotionEvent): boolean;
			public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
			public onAttachedToWindow(): void;
			public constructor(base: android.content.Context);
			public onWindowAttributesChanged(params: android.view.WindowManager.LayoutParams): void;
			public onSharedPreferenceChanged(param0: android.content.SharedPreferences, param1: string): void;
			public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
		}
		export module Term {
			export class EmulatorViewGestureListener extends android.view.GestureDetector.SimpleOnGestureListener {
				public static class: java.lang.Class<jackpal.androidterm.Term.EmulatorViewGestureListener>;
				public onLongPress(e: android.view.MotionEvent): void;
				public onSingleTapConfirmed(param0: android.view.MotionEvent): boolean;
				public onSingleTapUp(e: android.view.MotionEvent): boolean;
				public onContextClick(param0: android.view.MotionEvent): boolean;
				public onSingleTapConfirmed(e: android.view.MotionEvent): boolean;
				public onDoubleTapEvent(e: android.view.MotionEvent): boolean;
				public onLongPress(param0: android.view.MotionEvent): void;
				public onDoubleTapEvent(param0: android.view.MotionEvent): boolean;
				public onDown(param0: android.view.MotionEvent): boolean;
				public onSingleTapUp(param0: android.view.MotionEvent): boolean;
				public constructor();
				public onContextClick(e: android.view.MotionEvent): boolean;
				public onShowPress(e: android.view.MotionEvent): void;
				public onFling(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
				public onShowPress(param0: android.view.MotionEvent): void;
				public onScroll(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
				public onDown(e: android.view.MotionEvent): boolean;
				public constructor(param0: jackpal.androidterm.Term, view: jackpal.androidterm.emulatorview.EmulatorView);
				public onFling(e1: android.view.MotionEvent, e2: android.view.MotionEvent, velocityX: number, velocityY: number): boolean;
				public onDoubleTap(param0: android.view.MotionEvent): boolean;
				public onScroll(e1: android.view.MotionEvent, e2: android.view.MotionEvent, distanceX: number, distanceY: number): boolean;
				public onDoubleTap(e: android.view.MotionEvent): boolean;
			}
			export class WindowListActionBarAdapter extends jackpal.androidterm.WindowListAdapter implements jackpal.androidterm.emulatorview.UpdateCallback {
				public static class: java.lang.Class<jackpal.androidterm.Term.WindowListActionBarAdapter>;
				public constructor(sessions: jackpal.androidterm.util.SessionList);
				public onUpdate(): void;
				public isEnabled(param0: number): boolean;
				public getDropDownView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
				public getView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
				public constructor(param0: jackpal.androidterm.Term, sessions: jackpal.androidterm.util.SessionList);
				public isEnabled(position: number): boolean;
				public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
				public areAllItemsEnabled(): boolean;
				public constructor();
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export class TermDebug extends java.lang.Object {
			public static class: java.lang.Class<jackpal.androidterm.TermDebug>;
			public static DEBUG: boolean;
			public static LOG_TAG: string;
			public constructor();
		}
	}
}

declare module jackpal {
	export module androidterm {
		export class TermPreferences extends android.preference.PreferenceActivity {
			public static class: java.lang.Class<jackpal.androidterm.TermPreferences>;
			public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
			public onActionModeStarted(mode: android.view.ActionMode): void;
			public onMenuOpened(featureId: number, menu: android.view.Menu): boolean;
			public onCreateView(name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
			public onPreparePanel(featureId: number, view: android.view.View, menu: android.view.Menu): boolean;
			public onMenuItemSelected(featureId: number, item: android.view.MenuItem): boolean;
			public onWindowStartingActionMode(callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
			public onSearchRequested(): boolean;
			public constructor(base: android.content.Context, themeResId: number);
			public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
			public onCreatePanelView(param0: number): android.view.View;
			public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
			public onCreate(savedInstanceState: android.os.Bundle, persistentState: any): void;
			public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
			public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public onDetachedFromWindow(): void;
			public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
			public dispatchKeyShortcutEvent(event: android.view.KeyEvent): boolean;
			public constructor();
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
			public onTrimMemory(level: number): void;
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
			public onTrimMemory(param0: number): void;
			public onActionModeFinished(param0: android.view.ActionMode): void;
			public constructor(base: android.content.Context, theme: android.content.res.Resources.Theme);
			public dispatchGenericMotionEvent(ev: android.view.MotionEvent): boolean;
			public onWindowFocusChanged(hasFocus: boolean): void;
			public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
			public onActionModeStarted(param0: android.view.ActionMode): void;
			public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
			public onCreatePanelMenu(featureId: number, menu: android.view.Menu): boolean;
			public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
			public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
			public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
			public onOptionsItemSelected(item: android.view.MenuItem): boolean;
			public onPreferenceStartFragment(param0: android.preference.PreferenceFragment, param1: android.preference.Preference): boolean;
			public onCreateView(parent: android.view.View, name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
			public onSearchRequested(param0: any): boolean;
			public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
			public onPreferenceStartFragment(caller: android.preference.PreferenceFragment, pref: android.preference.Preference): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
			public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
			public dispatchTouchEvent(ev: android.view.MotionEvent): boolean;
			public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
			public onAttachedToWindow(): void;
			public constructor(base: android.content.Context);
			public onWindowAttributesChanged(params: android.view.WindowManager.LayoutParams): void;
			public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
		}
	}
}

declare module jackpal {
	export module androidterm {
		export class TermService extends android.app.Service implements jackpal.androidterm.emulatorview.TermSession.FinishCallback {
			public static class: java.lang.Class<jackpal.androidterm.TermService>;
			public onBind(param0: android.content.Intent): android.os.IBinder;
			public onCreate(): void;
			public constructor();
			public onDestroy(): void;
			public onBind(intent: android.content.Intent): android.os.IBinder;
			public getSessions(): jackpal.androidterm.util.SessionList;
			/** @deprecated */
			public onStart(intent: android.content.Intent, startId: number): void;
			public onStart(intent: android.content.Intent, flags: number): void;
			public onSessionFinish(param0: jackpal.androidterm.emulatorview.TermSession): void;
			public onTrimMemory(param0: number): void;
			public onTrimMemory(level: number): void;
			public onSessionFinish(session: jackpal.androidterm.emulatorview.TermSession): void;
			public onStartCommand(intent: android.content.Intent, flags: number, startId: number): number;
			public constructor(base: android.content.Context);
		}
		export module TermService {
			export class RBinder extends jackpal.androidterm.libtermexec.v1.ITerminal.Stub {
				public static class: java.lang.Class<jackpal.androidterm.TermService.RBinder>;
				public startSession(pseudoTerminalMultiplexerFd: android.os.ParcelFileDescriptor, callback: android.os.ResultReceiver): android.content.IntentSender;
				public dump(fd: java.io.FileDescriptor, args: string[]): void;
				public dumpAsync(param0: java.io.FileDescriptor, param1: string[]): void;
				public linkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): void;
				public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
				public isBinderAlive(): boolean;
				public startSession(param0: android.os.ParcelFileDescriptor, param1: android.os.ResultReceiver): android.content.IntentSender;
				public transact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
				public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
				public queryLocalInterface(param0: string): android.os.IInterface;
				public unlinkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): boolean;
				public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
				public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, args: string[]): void;
				public dump(param0: java.io.FileDescriptor, param1: string[]): void;
				public dumpAsync(fd: java.io.FileDescriptor, args: string[]): void;
				public getInterfaceDescriptor(): string;
				public pingBinder(): boolean;
				public queryLocalInterface(descriptor: string): android.os.IInterface;
			}
			export class RBinderCleanupCallback extends java.lang.Object implements jackpal.androidterm.emulatorview.TermSession.FinishCallback {
				public static class: java.lang.Class<jackpal.androidterm.TermService.RBinderCleanupCallback>;
				public onSessionFinish(session: jackpal.androidterm.emulatorview.TermSession): void;
				public constructor(param0: jackpal.androidterm.TermService, result: android.app.PendingIntent, callback: android.os.ResultReceiver);
				public onSessionFinish(param0: jackpal.androidterm.emulatorview.TermSession): void;
			}
			export class TSBinder extends android.os.Binder {
				public static class: java.lang.Class<jackpal.androidterm.TermService.TSBinder>;
				public dump(fd: java.io.FileDescriptor, args: string[]): void;
				public dumpAsync(param0: java.io.FileDescriptor, param1: string[]): void;
				public linkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): void;
				public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
				public isBinderAlive(): boolean;
				public transact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
				public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
				public queryLocalInterface(param0: string): android.os.IInterface;
				public constructor();
				public constructor(this$0: jackpal.androidterm.TermService);
				public unlinkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): boolean;
				public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
				public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, args: string[]): void;
				public dump(param0: java.io.FileDescriptor, param1: string[]): void;
				public dumpAsync(fd: java.io.FileDescriptor, args: string[]): void;
				public getInterfaceDescriptor(): string;
				public pingBinder(): boolean;
				public queryLocalInterface(descriptor: string): android.os.IInterface;
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export class TermView extends jackpal.androidterm.emulatorview.EmulatorView {
			public static class: java.lang.Class<jackpal.androidterm.TermView>;
			public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
			public onScroll(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
			public onDown(e: android.view.MotionEvent): boolean;
			public onScroll(e1: android.view.MotionEvent, e2: android.view.MotionEvent, distanceX: number, distanceY: number): boolean;
			public onSingleTapUp(e: android.view.MotionEvent): boolean;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
			public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
			public constructor(context: android.content.Context);
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
			public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
			public onDown(param0: android.view.MotionEvent): boolean;
			public onShowPress(e: android.view.MotionEvent): void;
			public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
			public onSingleTapUp(param0: android.view.MotionEvent): boolean;
			public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
			public sendAccessibilityEvent(param0: number): void;
			public onLongPress(param0: android.view.MotionEvent): void;
			public onFling(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyle: number);
			public updatePrefs(settings: jackpal.androidterm.util.TermSettings, scheme: jackpal.androidterm.emulatorview.ColorScheme): void;
			public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
			public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
			public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
			public updatePrefs(settings: jackpal.androidterm.util.TermSettings): void;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
			public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
			public onFling(e1: android.view.MotionEvent, e2: android.view.MotionEvent, velocityX: number, velocityY: number): boolean;
			public toString(): string;
			public constructor(context: android.content.Context, session: jackpal.androidterm.emulatorview.TermSession, metrics: android.util.DisplayMetrics);
			public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
			public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
			public onShowPress(param0: android.view.MotionEvent): void;
			public onLongPress(e: android.view.MotionEvent): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
			public sendAccessibilityEvent(eventType: number): void;
			public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
		}
	}
}

declare module jackpal {
	export module androidterm {
		export class TermViewFlipper extends android.widget.ViewFlipper implements java.lang.Iterable<android.view.View>  {
			public static class: java.lang.Class<jackpal.androidterm.TermViewFlipper>;
			public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
			public onStopNestedScroll(param0: android.view.View): void;
			public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
			public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
			public constructor(context: android.content.Context);
			public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
			public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
			public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
			public showContextMenuForChild(param0: android.view.View): boolean;
			public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
			public bringChildToFront(param0: android.view.View): void;
			public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
			public sendAccessibilityEvent(param0: number): void;
			public requestChildFocus(child: android.view.View, focused: android.view.View): void;
			public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
			public requestTransparentRegion(param0: android.view.View): void;
			public addView(child: android.view.View, width: number, height: number): void;
			public canResolveTextAlignment(): boolean;
			public getParent(): android.view.ViewParent;
			public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
			public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
			public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
			public getLayoutDirection(): number;
			public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
			public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
			public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
			public recomputeViewAttributes(param0: android.view.View): void;
			public focusSearch(direction: number): android.view.View;
			public createContextMenu(menu: android.view.ContextMenu): void;
			public showNext(): void;
			public isLayoutRequested(): boolean;
			public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
			public onDraw(canvas: android.graphics.Canvas): void;
			public requestTransparentRegion(child: android.view.View): void;
			public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
			public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
			public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
			public addView(v: android.view.View, index: number): void;
			public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
			public setDisplayedChild(whichChild: number): void;
			public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
			public requestLayout(): void;
			public childDrawableStateChanged(param0: android.view.View): void;
			public removeView(view: android.view.View): void;
			public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
			public canResolveTextDirection(): boolean;
			public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
			public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
			/** @deprecated */
			public requestFitSystemWindows(): void;
			public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
			public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
			public updatePrefs(settings: jackpal.androidterm.util.TermSettings): void;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
			public focusSearch(focused: android.view.View, direction: number): android.view.View;
			public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
			public recomputeViewAttributes(child: android.view.View): void;
			public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
			public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
			public requestFitSystemWindows(): void;
			public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
			public childDrawableStateChanged(child: android.view.View): void;
			public isLayoutDirectionResolved(): boolean;
			public resumeCurrentView(): void;
			public focusableViewAvailable(param0: android.view.View): void;
			public createContextMenu(param0: android.view.ContextMenu): void;
			public focusSearch(param0: android.view.View, param1: number): android.view.View;
			public canResolveLayoutDirection(): boolean;
			public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
			public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
			public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
			public addView(child: android.view.View, index: number): void;
			public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
			public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
			public iterator(): java.util.Iterator<android.view.View>;
			public getParentForAccessibility(): android.view.ViewParent;
			public onResume(): void;
			public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
			public forEach(action: any /* any*/): void;
			public focusableViewAvailable(v: android.view.View): void;
			public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
			public onStopNestedScroll(child: android.view.View): void;
			public getTextAlignment(): number;
			public addCallback(callback: jackpal.androidterm.emulatorview.UpdateCallback): void;
			public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
			public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
			public spliterator(): java.util.Spliterator<any>;
			public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
			public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
			public addView(v: android.view.View): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
			public setDisplayedChild(position: number): void;
			public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
			public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
			public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
			public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
			public showPrevious(): void;
			public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
			public onPause(): void;
			public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
			public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
			public iterator(): java.util.Iterator<any>;
			public isTextAlignmentResolved(): boolean;
			public removeView(param0: android.view.View): void;
			public clearChildFocus(param0: android.view.View): void;
			public showContextMenuForChild(originalView: android.view.View): boolean;
			public removeCallback(callback: jackpal.androidterm.emulatorview.UpdateCallback): void;
			public getTextDirection(): number;
			public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public clearChildFocus(child: android.view.View): void;
			public requestDisallowInterceptTouchEvent(param0: boolean): void;
			public bringChildToFront(child: android.view.View): void;
			public isTextDirectionResolved(): boolean;
			public addView(child: android.view.View): void;
			public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
			public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
			public pauseCurrentView(): void;
			public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
			public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
			public sendAccessibilityEvent(eventType: number): void;
		}
		export module TermViewFlipper {
			export class ViewFlipperIterator extends java.util.Iterator<android.view.View> {
				public static class: java.lang.Class<jackpal.androidterm.TermViewFlipper.ViewFlipperIterator>;
				public remove(): void;
				public next(): android.view.View;
				public hasNext(): boolean;
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export class WindowList extends android.app.ListActivity {
			public static class: java.lang.Class<jackpal.androidterm.WindowList>;
			public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
			public onActionModeStarted(mode: android.view.ActionMode): void;
			public onMenuOpened(featureId: number, menu: android.view.Menu): boolean;
			public onCreateView(name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
			public onPreparePanel(featureId: number, view: android.view.View, menu: android.view.Menu): boolean;
			public onMenuItemSelected(featureId: number, item: android.view.MenuItem): boolean;
			public onCreate(icicle: android.os.Bundle): void;
			public onWindowStartingActionMode(callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
			public onSearchRequested(): boolean;
			public constructor(base: android.content.Context, themeResId: number);
			public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
			public onCreatePanelView(param0: number): android.view.View;
			public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
			public onCreate(savedInstanceState: android.os.Bundle, persistentState: any): void;
			public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
			public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public onListItemClick(l: android.widget.ListView, v: android.view.View, position: number, id: number): void;
			public onDetachedFromWindow(): void;
			public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
			public dispatchKeyShortcutEvent(event: android.view.KeyEvent): boolean;
			public onResume(): void;
			public constructor();
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
			public onTrimMemory(level: number): void;
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
			public onTrimMemory(param0: number): void;
			public onActionModeFinished(param0: android.view.ActionMode): void;
			public constructor(base: android.content.Context, theme: android.content.res.Resources.Theme);
			public onPause(): void;
			public dispatchGenericMotionEvent(ev: android.view.MotionEvent): boolean;
			public onWindowFocusChanged(hasFocus: boolean): void;
			public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
			public onActionModeStarted(param0: android.view.ActionMode): void;
			public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
			public onCreatePanelMenu(featureId: number, menu: android.view.Menu): boolean;
			public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
			public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
			public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
			public onOptionsItemSelected(item: android.view.MenuItem): boolean;
			public onCreateView(parent: android.view.View, name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
			public onSearchRequested(param0: any): boolean;
			public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
			public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
			public dispatchTouchEvent(ev: android.view.MotionEvent): boolean;
			public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
			public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
			public onAttachedToWindow(): void;
			public constructor(base: android.content.Context);
			public onWindowAttributesChanged(params: android.view.WindowManager.LayoutParams): void;
			public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
		}
		export module WindowList {
			export class CloseButton extends android.widget.ImageView {
				public static class: java.lang.Class<jackpal.androidterm.WindowList.CloseButton>;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public invalidateDrawable(dr: android.graphics.drawable.Drawable): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public constructor(context: android.content.Context);
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, style: number);
				public setPressed(pressed: boolean): void;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export class WindowListAdapter extends android.widget.BaseAdapter implements jackpal.androidterm.emulatorview.UpdateCallback {
			public static class: java.lang.Class<jackpal.androidterm.WindowListAdapter>;
			public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
			public onUpdate(): void;
			public getDropDownView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
			public constructor();
			public getView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
			public constructor(sessions: jackpal.androidterm.util.SessionList);
			public isEnabled(position: number): boolean;
			public setSessions(sessions: jackpal.androidterm.util.SessionList): void;
			public getItem(position: number): any;
			public areAllItemsEnabled(): boolean;
			public isEnabled(param0: number): boolean;
			public getSessionTitle(position: number, defaultTitle: string): string;
			public getItemId(position: number): number;
			public getCount(): number;
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module compat {
			export class ActionBarApi11OrLater extends jackpal.androidterm.compat.ActionBarCompat {
				public static class: java.lang.Class<jackpal.androidterm.compat.ActionBarApi11OrLater>;
				public setDisplayOptions(param0: number): void;
				public getHeight(): number;
				public setListNavigationCallbacks(adapter: android.widget.SpinnerAdapter, callback: jackpal.androidterm.compat.ActionBarCompat.OnNavigationListener): void;
				public getNavigationItemCount(): number;
				public setDisplayOptions(options: number): void;
				public setDisplayOptions(options: number, mask: number): void;
				public setTitle(resId: number): void;
				public getNavigationMode(): number;
				public setSelectedNavigationItem(param0: number): void;
				public getTitle(): string;
				public setTitle(param0: string): void;
				public show(): void;
				public hide(): void;
				public setListNavigationCallbacks(param0: android.widget.SpinnerAdapter, param1: jackpal.androidterm.compat.ActionBarCompat.OnNavigationListener): void;
				public getDisplayOptions(): number;
				public isShowing(): boolean;
				public setNavigationMode(param0: number): void;
				public setTitle(param0: number): void;
				public setNavigationMode(mode: number): void;
				public setSelectedNavigationItem(position: number): void;
				public getSelectedNavigationIndex(): number;
				public setDisplayOptions(param0: number, param1: number): void;
				public setTitle(title: string): void;
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module compat {
			export abstract class ActionBarCompat extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.compat.ActionBarCompat>;
				public static NAVIGATION_MODE_STANDARD: number;
				public static NAVIGATION_MODE_LIST: number;
				public static NAVIGATION_MODE_TABS: number;
				public static DISPLAY_USE_LOGO: number;
				public static DISPLAY_SHOW_HOME: number;
				public static DISPLAY_HOME_AS_UP: number;
				public static DISPLAY_SHOW_TITLE: number;
				public static DISPLAY_SHOW_CUSTOM: number;
				public static ID_HOME: number;
				public setDisplayOptions(param0: number): void;
				public getHeight(): number;
				public getNavigationItemCount(): number;
				public static wrap(actionBar: any): jackpal.androidterm.compat.ActionBarCompat;
				public getNavigationMode(): number;
				public setSelectedNavigationItem(param0: number): void;
				public getTitle(): string;
				public setTitle(param0: string): void;
				public constructor();
				public show(): void;
				public hide(): void;
				public setListNavigationCallbacks(param0: android.widget.SpinnerAdapter, param1: jackpal.androidterm.compat.ActionBarCompat.OnNavigationListener): void;
				public getDisplayOptions(): number;
				public isShowing(): boolean;
				public setNavigationMode(param0: number): void;
				public setTitle(param0: number): void;
				public getSelectedNavigationIndex(): number;
				public setDisplayOptions(param0: number, param1: number): void;
			}
			export module ActionBarCompat {
				export class OnNavigationListener extends java.lang.Object {
					public static class: java.lang.Class<jackpal.androidterm.compat.ActionBarCompat.OnNavigationListener>;
					/**
					 * Constructs a new instance of the jackpal.androidterm.compat.ActionBarCompat$OnNavigationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onNavigationItemSelected(param0: number, param1: number): boolean;
					});
					public constructor();
					public onNavigationItemSelected(param0: number, param1: number): boolean;
				}
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module compat {
			export class ActivityCompat extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.compat.ActivityCompat>;
				public static invalidateOptionsMenu(activity: android.app.Activity): void;
				public static getActionBar(activity: android.app.Activity): jackpal.androidterm.compat.ActionBarCompat;
				public constructor();
			}
			export module ActivityCompat {
				export class Api11OrLater extends java.lang.Object {
					public static class: java.lang.Class<jackpal.androidterm.compat.ActivityCompat.Api11OrLater>;
					public static getActionBar(activity: android.app.Activity): any;
					public static invalidateOptionsMenu(activity: android.app.Activity): void;
				}
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module compat {
			export class AlertDialogCompat extends android.app.AlertDialog {
				public static class: java.lang.Class<jackpal.androidterm.compat.AlertDialogCompat>;
				public static THEME_HOLO_TRADITIONAL: number;
				public static THEME_HOLO_DARK: number;
				public static THEME_HOLO_LIGHT: number;
				public static THEME_DEVICE_DEFAULT_DARK: number;
				public static THEME_DEVICE_DEFAULT_LIGHT: number;
				public onActionModeStarted(mode: android.view.ActionMode): void;
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public onPanelClosed(featureId: number, menu: android.view.Menu): void;
				public onMenuItemSelected(featureId: number, item: android.view.MenuItem): boolean;
				public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
				public dispatchKeyShortcutEvent(event: android.view.KeyEvent): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
				public onSearchRequested(param0: any): boolean;
				public onWindowFocusChanged(hasFocus: boolean): void;
				public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: android.view.Menu, deviceId: number): void;
				public onPanelClosed(param0: number, param1: android.view.Menu): void;
				public cancel(): void;
				public static newInstance(context: android.content.Context, cancelable: boolean, cancelListener: android.content.DialogInterface.OnCancelListener): android.app.AlertDialog;
				public dispatchGenericMotionEvent(ev: android.view.MotionEvent): boolean;
				public static newInstanceBuilder(context: android.content.Context, theme: number): android.app.AlertDialog.Builder;
				public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
				public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
				public onWindowAttributesChanged(params: android.view.WindowManager.LayoutParams): void;
				public onActionModeFinished(mode: android.view.ActionMode): void;
				public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
				public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public onContentChanged(): void;
				public onMenuOpened(featureId: number, menu: android.view.Menu): boolean;
				public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
				public onDetachedFromWindow(): void;
				public onPreparePanel(featureId: number, view: android.view.View, menu: android.view.Menu): boolean;
				public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
				public onSearchRequested(): boolean;
				public onCreatePanelMenu(featureId: number, menu: android.view.Menu): boolean;
				public static newInstance(context: android.content.Context): android.app.AlertDialog;
				public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public dispatchTouchEvent(ev: android.view.MotionEvent): boolean;
				public static newInstance(context: android.content.Context, theme: number): android.app.AlertDialog;
				public dismiss(): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
				public onCreatePanelView(featureId: number): android.view.View;
				public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
				public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public dispatchKeyEvent(event: android.view.KeyEvent): boolean;
				public onCreatePanelView(param0: number): android.view.View;
				public onWindowStartingActionMode(callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
				public onActionModeStarted(param0: android.view.ActionMode): void;
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
				public onActionModeFinished(param0: android.view.ActionMode): void;
				public onSearchRequested(searchEvent: any): boolean;
				public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
				public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
				public onWindowFocusChanged(param0: boolean): void;
				public dispatchTrackballEvent(ev: android.view.MotionEvent): boolean;
				public onAttachedToWindow(): void;
			}
			export module AlertDialogCompat {
				export class Api11OrLater extends android.app.AlertDialog {
					public static class: java.lang.Class<jackpal.androidterm.compat.AlertDialogCompat.Api11OrLater>;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public onAttachedToWindow(): void;
					public onSearchRequested(searchEvent: any): boolean;
					public onPanelClosed(featureId: number, menu: android.view.Menu): void;
					public dispatchTrackballEvent(ev: android.view.MotionEvent): boolean;
					public dispatchKeyShortcutEvent(event: android.view.KeyEvent): boolean;
					public onPreparePanel(featureId: number, view: android.view.View, menu: android.view.Menu): boolean;
					public dispatchTouchEvent(ev: android.view.MotionEvent): boolean;
					public onCreatePanelMenu(featureId: number, menu: android.view.Menu): boolean;
					public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
					public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
					public constructor(context: android.content.Context);
					public onActionModeFinished(mode: android.view.ActionMode): void;
					public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
					public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
					public dispatchGenericMotionEvent(ev: android.view.MotionEvent): boolean;
					public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
					public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: android.view.Menu, deviceId: number): void;
					public onPanelClosed(param0: number, param1: android.view.Menu): void;
					public onWindowAttributesChanged(params: android.view.WindowManager.LayoutParams): void;
					public onWindowFocusChanged(param0: boolean): void;
					public dismiss(): void;
					public onContentChanged(): void;
					public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
					public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public onSearchRequested(): boolean;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
					public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
					public onSearchRequested(param0: any): boolean;
					public onCreatePanelView(featureId: number): android.view.View;
					public onActionModeStarted(mode: android.view.ActionMode): void;
					public onMenuItemSelected(featureId: number, item: android.view.MenuItem): boolean;
					public onMenuOpened(featureId: number, menu: android.view.Menu): boolean;
					public constructor(context: android.content.Context, theme: number);
					public onDetachedFromWindow(): void;
					public onCreatePanelView(param0: number): android.view.View;
					public onActionModeFinished(param0: android.view.ActionMode): void;
					public constructor(context: android.content.Context, themeResId: number);
					public dispatchKeyEvent(event: android.view.KeyEvent): boolean;
					public onActionModeStarted(param0: android.view.ActionMode): void;
					public constructor(context: android.content.Context, cancelable: boolean, cancelListener: android.content.DialogInterface.OnCancelListener);
					public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
					public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
					public cancel(): void;
					public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
					public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
					public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
					public onWindowFocusChanged(hasFocus: boolean): void;
					public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
					public onWindowStartingActionMode(callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				}
				export class Api11OrLaterBuilder extends android.app.AlertDialog.Builder {
					public static class: java.lang.Class<jackpal.androidterm.compat.AlertDialogCompat.Api11OrLaterBuilder>;
					public constructor(context: android.content.Context, themeResId: number);
					public constructor(context: android.content.Context);
					public constructor(context: android.content.Context, theme: number);
				}
				export class Api14OrLater extends android.app.AlertDialog {
					public static class: java.lang.Class<jackpal.androidterm.compat.AlertDialogCompat.Api14OrLater>;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public onAttachedToWindow(): void;
					public onSearchRequested(searchEvent: any): boolean;
					public onPanelClosed(featureId: number, menu: android.view.Menu): void;
					public dispatchTrackballEvent(ev: android.view.MotionEvent): boolean;
					public dispatchKeyShortcutEvent(event: android.view.KeyEvent): boolean;
					public onPreparePanel(featureId: number, view: android.view.View, menu: android.view.Menu): boolean;
					public dispatchTouchEvent(ev: android.view.MotionEvent): boolean;
					public onCreatePanelMenu(featureId: number, menu: android.view.Menu): boolean;
					public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
					public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
					public constructor(context: android.content.Context);
					public onActionModeFinished(mode: android.view.ActionMode): void;
					public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
					public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
					public dispatchGenericMotionEvent(ev: android.view.MotionEvent): boolean;
					public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
					public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: android.view.Menu, deviceId: number): void;
					public onPanelClosed(param0: number, param1: android.view.Menu): void;
					public onWindowAttributesChanged(params: android.view.WindowManager.LayoutParams): void;
					public onWindowFocusChanged(param0: boolean): void;
					public dismiss(): void;
					public onContentChanged(): void;
					public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
					public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public onSearchRequested(): boolean;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
					public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
					public onSearchRequested(param0: any): boolean;
					public onCreatePanelView(featureId: number): android.view.View;
					public onActionModeStarted(mode: android.view.ActionMode): void;
					public onMenuItemSelected(featureId: number, item: android.view.MenuItem): boolean;
					public onMenuOpened(featureId: number, menu: android.view.Menu): boolean;
					public constructor(context: android.content.Context, theme: number);
					public onDetachedFromWindow(): void;
					public onCreatePanelView(param0: number): android.view.View;
					public onActionModeFinished(param0: android.view.ActionMode): void;
					public constructor(context: android.content.Context, themeResId: number);
					public dispatchKeyEvent(event: android.view.KeyEvent): boolean;
					public onActionModeStarted(param0: android.view.ActionMode): void;
					public constructor(context: android.content.Context, cancelable: boolean, cancelListener: android.content.DialogInterface.OnCancelListener);
					public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
					public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
					public cancel(): void;
					public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
					public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
					public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
					public onWindowFocusChanged(hasFocus: boolean): void;
					public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
					public onWindowStartingActionMode(callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				}
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module compat {
			export class AndroidCompat extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.compat.AndroidCompat>;
				public static SDK: number;
				public static V11ToV20: boolean;
				public constructor();
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module compat {
			export class AndroidLevel4PlusCompat extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.compat.AndroidLevel4PlusCompat>;
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module compat {
			export class Base64 extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.compat.Base64>;
				public static DEFAULT: number;
				public static NO_PADDING: number;
				public static NO_WRAP: number;
				public static CRLF: number;
				public static URL_SAFE: number;
				public static NO_CLOSE: number;
				public static encode(input: number[], offset: number, len: number, flags: number): number[];
				public static encodeToString(input: number[], flags: number): string;
				public static decode(str: string, flags: number): number[];
				public static encodeToString(input: number[], offset: number, len: number, flags: number): string;
				public static decode(input: number[], offset: number, len: number, flags: number): number[];
				public static encode(input: number[], flags: number): number[];
				public static decode(input: number[], flags: number): number[];
			}
			export module Base64 {
				export abstract class Coder extends java.lang.Object {
					public static class: java.lang.Class<jackpal.androidterm.compat.Base64.Coder>;
					public output: number[];
					public op: number;
					public process(param0: number[], param1: number, param2: number, param3: boolean): boolean;
					public maxOutputSize(param0: number): number;
				}
				export class Decoder extends jackpal.androidterm.compat.Base64.Coder {
					public static class: java.lang.Class<jackpal.androidterm.compat.Base64.Decoder>;
					public constructor(flags: number, output: number[]);
					public process(input: number[], offset: number, len: number, finish: boolean): boolean;
					public process(param0: number[], param1: number, param2: number, param3: boolean): boolean;
					public maxOutputSize(param0: number): number;
					public maxOutputSize(len: number): number;
				}
				export class Encoder extends jackpal.androidterm.compat.Base64.Coder {
					public static class: java.lang.Class<jackpal.androidterm.compat.Base64.Encoder>;
					public static LINE_GROUPS: number;
					public do_padding: boolean;
					public do_newline: boolean;
					public do_cr: boolean;
					public constructor(flags: number, output: number[]);
					public process(input: number[], offset: number, len: number, finish: boolean): boolean;
					public process(param0: number[], param1: number, param2: number, param3: boolean): boolean;
					public maxOutputSize(param0: number): number;
					public maxOutputSize(len: number): number;
				}
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module compat {
			export class FileCompat extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.compat.FileCompat>;
				public static canExecute(file: java.io.File): boolean;
				public constructor();
			}
			export module FileCompat {
				export class Api8OrEarlier extends java.lang.Object {
					public static class: java.lang.Class<jackpal.androidterm.compat.FileCompat.Api8OrEarlier>;
					public static canExecute(file: java.io.File): boolean;
				}
				export class Api9OrLater extends java.lang.Object {
					public static class: java.lang.Class<jackpal.androidterm.compat.FileCompat.Api9OrLater>;
					public static canExecute(file: java.io.File): boolean;
				}
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module compat {
			export class MenuItemCompat extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.compat.MenuItemCompat>;
				public static SHOW_AS_ACTION_NEVER: number;
				public static SHOW_AS_ACTION_IF_ROOM: number;
				public static SHOW_AS_ACTION_ALWAYS: number;
				public static SHOW_AS_ACTION_WITH_TEXT: number;
				public static setShowAsAction(item: android.view.MenuItem, actionEnum: number): void;
				public constructor();
			}
			export module MenuItemCompat {
				export class Api11OrLater extends java.lang.Object {
					public static class: java.lang.Class<jackpal.androidterm.compat.MenuItemCompat.Api11OrLater>;
					public static setShowAsAction(item: android.view.MenuItem, actionEnum: number): void;
				}
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module compat {
			export class PRNGFixes extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.compat.PRNGFixes>;
				public static apply(): void;
			}
			export module PRNGFixes {
				export class LinuxPRNGSecureRandom extends java.security.SecureRandomSpi {
					public static class: java.lang.Class<jackpal.androidterm.compat.PRNGFixes.LinuxPRNGSecureRandom>;
					public engineNextBytes(bytes: number[]): void;
					public constructor();
					public engineGenerateSeed(param0: number): number[];
					public engineNextBytes(param0: number[]): void;
					public engineSetSeed(bytes: number[]): void;
					public engineSetSeed(param0: number[]): void;
					public engineGenerateSeed(size: number): number[];
				}
				export class LinuxPRNGSecureRandomProvider extends java.security.Provider {
					public static class: java.lang.Class<jackpal.androidterm.compat.PRNGFixes.LinuxPRNGSecureRandomProvider>;
					public containsKey(key: any): boolean;
					public get(key: any): any;
					public constructor(initialCapacity: number, loadFactor: number);
					public isEmpty(): boolean;
					public forEach(action: any /* any<any,any>*/): void;
					public size(): number;
					public equals(o: any): boolean;
					public put(param0: any, param1: any): any;
					public remove(key: any, value: any): boolean;
					public putAll(param0: java.util.Map<any,any>): void;
					public containsValue(param0: any): boolean;
					public remove(param0: any): any;
					public putAll(t: java.util.Map<any,any>): void;
					public getOrDefault(key: any, defaultValue: any): any;
					public putIfAbsent(key: any, value: any): any;
					public constructor();
					public constructor(initialCapacity: number);
					public keySet(): java.util.Set<any>;
					public clear(): void;
					public merge(key: any, value: any, remappingFunction: any /* any<any,any,any>*/): any;
					public hashCode(): number;
					public replace(key: any, oldValue: any, newValue: any): boolean;
					public replaceAll(_function_: any /* any<any,any,any>*/): void;
					public remove(key: any): any;
					public constructor(t: java.util.Map<any,any>);
					public values(): java.util.Collection<any>;
					public constructor(name: string, version: number, param2: string);
					public containsValue(value: any): boolean;
					public replace(key: any, value: any): any;
					public equals(param0: any): boolean;
					public constructor(defaults: java.util.Properties);
					public containsKey(param0: any): boolean;
					public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
					public put(key: any, value: any): any;
					public computeIfAbsent(key: any, mappingFunction: any /* any<any,any>*/): any;
					public compute(key: any, remappingFunction: any /* any<any,any,any>*/): any;
					public computeIfPresent(key: any, remappingFunction: any /* any<any,any,any>*/): any;
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module compat {
			export class ServiceForegroundCompat extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.compat.ServiceForegroundCompat>;
				public stopForeground(removeNotify: boolean): void;
				public constructor(service: android.app.Service);
				public startForeground(id: number, notification: android.app.Notification): void;
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module shortcuts {
			export class AddShortcut extends android.app.Activity {
				public static class: java.lang.Class<jackpal.androidterm.shortcuts.AddShortcut>;
				public onCreate(savedInstanceState: android.os.Bundle, persistentState: any): void;
				public onActionModeStarted(mode: android.view.ActionMode): void;
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public onPanelClosed(featureId: number, menu: android.view.Menu): void;
				public onMenuItemSelected(featureId: number, item: android.view.MenuItem): boolean;
				public onCreateView(name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
				public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
				public dispatchKeyShortcutEvent(event: android.view.KeyEvent): boolean;
				public constructor();
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
				public onSearchRequested(param0: any): boolean;
				public onWindowFocusChanged(hasFocus: boolean): void;
				public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
				public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: android.view.Menu, deviceId: number): void;
				public onCreate(savedInstanceState: android.os.Bundle): void;
				public onPanelClosed(param0: number, param1: android.view.Menu): void;
				public onTrimMemory(param0: number): void;
				public dispatchGenericMotionEvent(ev: android.view.MotionEvent): boolean;
				public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
				public onCreateView(parent: android.view.View, name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
				public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
				public onWindowAttributesChanged(params: android.view.WindowManager.LayoutParams): void;
				public onActionModeFinished(mode: android.view.ActionMode): void;
				public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
				public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public onContentChanged(): void;
				public onMenuOpened(featureId: number, menu: android.view.Menu): boolean;
				public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
				public onDetachedFromWindow(): void;
				public onPreparePanel(featureId: number, view: android.view.View, menu: android.view.Menu): boolean;
				public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
				public onSearchRequested(): boolean;
				public onCreatePanelMenu(featureId: number, menu: android.view.Menu): boolean;
				public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public dispatchTouchEvent(ev: android.view.MotionEvent): boolean;
				public onActivityResult(requestCode: number, resultCode: number, data: android.content.Intent): void;
				public constructor(base: android.content.Context, theme: android.content.res.Resources.Theme);
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
				public onTrimMemory(level: number): void;
				public onCreatePanelView(featureId: number): android.view.View;
				public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
				public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public dispatchKeyEvent(event: android.view.KeyEvent): boolean;
				public onCreatePanelView(param0: number): android.view.View;
				public onWindowStartingActionMode(callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
				public onActionModeStarted(param0: android.view.ActionMode): void;
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
				public onActionModeFinished(param0: android.view.ActionMode): void;
				public constructor(base: android.content.Context);
				public constructor(base: android.content.Context, themeResId: number);
				public onSearchRequested(searchEvent: any): boolean;
				public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
				public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
				public onWindowFocusChanged(param0: boolean): void;
				public dispatchTrackballEvent(ev: android.view.MotionEvent): boolean;
				public onAttachedToWindow(): void;
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module shortcuts {
			export class ColorValue extends java.lang.Object implements android.widget.CompoundButton.OnCheckedChangeListener {
				public static class: java.lang.Class<jackpal.androidterm.shortcuts.ColorValue>;
				public toHexWindow(tv: android.widget.TextView, k: number): void;
				public onCheckedChanged(buttonView: android.widget.CompoundButton, isChecked: boolean): void;
				public colorValue(): void;
				public onCheckedChanged(param0: android.widget.CompoundButton, param1: boolean): void;
				public constructor(context: android.content.Context, imgview: android.widget.ImageView, result: string[]);
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module shortcuts {
			export class FSNavigator extends android.app.Activity {
				public static class: java.lang.Class<jackpal.androidterm.shortcuts.FSNavigator>;
				public onCreate(savedInstanceState: android.os.Bundle, persistentState: any): void;
				public onActionModeStarted(mode: android.view.ActionMode): void;
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public onPanelClosed(featureId: number, menu: android.view.Menu): void;
				public onMenuItemSelected(featureId: number, item: android.view.MenuItem): boolean;
				public onCreateView(name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
				public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
				public dispatchKeyShortcutEvent(event: android.view.KeyEvent): boolean;
				public constructor();
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
				public onSearchRequested(param0: any): boolean;
				public onWindowFocusChanged(hasFocus: boolean): void;
				public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
				public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: android.view.Menu, deviceId: number): void;
				public onCreate(savedInstanceState: android.os.Bundle): void;
				public onPanelClosed(param0: number, param1: android.view.Menu): void;
				public onTrimMemory(param0: number): void;
				public dispatchGenericMotionEvent(ev: android.view.MotionEvent): boolean;
				public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
				public onResume(): void;
				public onCreateView(parent: android.view.View, name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
				public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
				public onOptionsItemSelected(item: android.view.MenuItem): boolean;
				public onWindowAttributesChanged(params: android.view.WindowManager.LayoutParams): void;
				public onActionModeFinished(mode: android.view.ActionMode): void;
				public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
				public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public onContentChanged(): void;
				public onMenuOpened(featureId: number, menu: android.view.Menu): boolean;
				public onCreateOptionsMenu(menu: android.view.Menu): boolean;
				public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
				public onDetachedFromWindow(): void;
				public onPreparePanel(featureId: number, view: android.view.View, menu: android.view.Menu): boolean;
				public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
				public onSearchRequested(): boolean;
				public onCreatePanelMenu(featureId: number, menu: android.view.Menu): boolean;
				public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public dispatchTouchEvent(ev: android.view.MotionEvent): boolean;
				public constructor(base: android.content.Context, theme: android.content.res.Resources.Theme);
				public onPause(): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
				public onTrimMemory(level: number): void;
				public onCreatePanelView(featureId: number): android.view.View;
				public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
				public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public dispatchKeyEvent(event: android.view.KeyEvent): boolean;
				public onCreatePanelView(param0: number): android.view.View;
				public onWindowStartingActionMode(callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
				public onActionModeStarted(param0: android.view.ActionMode): void;
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
				public onActionModeFinished(param0: android.view.ActionMode): void;
				public constructor(base: android.content.Context);
				public constructor(base: android.content.Context, themeResId: number);
				public onSearchRequested(searchEvent: any): boolean;
				public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
				public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
				public onWindowFocusChanged(param0: boolean): void;
				public dispatchTrackballEvent(ev: android.view.MotionEvent): boolean;
				public onAttachedToWindow(): void;
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module shortcuts {
			export class TextIcon extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.shortcuts.TextIcon>;
				public static getTextIcon(text: string, color: number, width: number, height: number): android.graphics.Bitmap;
				public constructor();
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module util {
			export class SessionList extends java.util.ArrayList<jackpal.androidterm.emulatorview.TermSession> {
				public static class: java.lang.Class<jackpal.androidterm.util.SessionList>;
				public subList(fromIndex: number, toIndex: number): java.util.List<any>;
				public indexOf(o: any): number;
				public indexOf(param0: any): number;
				public addAll(param0: java.util.Collection<any>): boolean;
				public remove(param0: number): any;
				public toArray(a: any[]): any[];
				public add(param0: number, param1: any): void;
				public constructor();
				public set(param0: number, param1: any): any;
				public addCallback(callback: jackpal.androidterm.emulatorview.UpdateCallback): void;
				public addTitleChangedListener(listener: jackpal.androidterm.emulatorview.UpdateCallback): void;
				public add(param0: any): boolean;
				public hashCode(): number;
				public set(index: number, element: any): any;
				public equals(param0: any): boolean;
				public constructor(c: java.util.Collection<any>);
				public addAll(c: java.util.Collection<any>): boolean;
				public addAll(param0: number, param1: java.util.Collection<any>): boolean;
				public set(index: number, object: jackpal.androidterm.emulatorview.TermSession): jackpal.androidterm.emulatorview.TermSession;
				public isEmpty(): boolean;
				public lastIndexOf(param0: any): number;
				public listIterator(param0: number): java.util.ListIterator<any>;
				public remove(index: number): any;
				public remove(index: number): jackpal.androidterm.emulatorview.TermSession;
				public replaceAll(operator: any /* any*/): void;
				public spliterator(): java.util.Spliterator<any>;
				public contains(param0: any): boolean;
				public constructor(capacity: number);
				public get(index: number): any;
				public stream(): java.util.stream.Stream<any>;
				public addAll(collection: java.util.Collection<any>): boolean;
				public iterator(): java.util.Iterator<any>;
				public toArray(): any[];
				public retainAll(param0: java.util.Collection<any>): boolean;
				public containsAll(c: java.util.Collection<any>): boolean;
				public size(): number;
				public removeIf(filter: any /* any*/): boolean;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public constructor(initialCapacity: number);
				public listIterator(index: number): java.util.ListIterator<any>;
				public retainAll(c: java.util.Collection<any>): boolean;
				public parallelStream(): java.util.stream.Stream<any>;
				public lastIndexOf(o: any): number;
				public listIterator(): java.util.ListIterator<any>;
				public removeAll(c: java.util.Collection<any>): boolean;
				public add(e: any): boolean;
				public containsAll(param0: java.util.Collection<any>): boolean;
				public removeCallback(callback: jackpal.androidterm.emulatorview.UpdateCallback): boolean;
				public add(index: number, object: jackpal.androidterm.emulatorview.TermSession): void;
				public clear(): void;
				public equals(o: any): boolean;
				public remove(param0: any): boolean;
				public contains(o: any): boolean;
				public addAll(index: number, collection: java.util.Collection<any>): boolean;
				public sort(c: java.util.Comparator<any>): void;
				public remove(object: any): boolean;
				public subList(param0: number, param1: number): java.util.List<any>;
				public remove(o: any): boolean;
				public removeTitleChangedListener(listener: jackpal.androidterm.emulatorview.UpdateCallback): boolean;
				public get(param0: number): any;
				public toArray(param0: any[]): any[];
				public add(index: number, element: any): void;
				public add(object: jackpal.androidterm.emulatorview.TermSession): boolean;
				public addAll(index: number, c: java.util.Collection<any>): boolean;
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module util {
			export class ShortcutEncryption extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.util.ShortcutEncryption>;
				public static ENC_ALGORITHM: string;
				public static ENC_SYSTEM: string;
				public static ENC_BLOCKSIZE: number;
				public static MAC_ALGORITHM: string;
				public static KEYLEN: number;
				public static BASE64_DFLAGS: number;
				public static BASE64_EFLAGS: number;
				public static generateKeys(): jackpal.androidterm.util.ShortcutEncryption.Keys;
				public static getKeys(ctx: android.content.Context): jackpal.androidterm.util.ShortcutEncryption.Keys;
				public static saveKeys(ctx: android.content.Context, keys: jackpal.androidterm.util.ShortcutEncryption.Keys): void;
				public static decrypt(encrypted: string, keys: jackpal.androidterm.util.ShortcutEncryption.Keys): string;
				public static encrypt(data: string, keys: jackpal.androidterm.util.ShortcutEncryption.Keys): string;
			}
			export module ShortcutEncryption {
				export class Keys extends java.lang.Object {
					public static class: java.lang.Class<jackpal.androidterm.util.ShortcutEncryption.Keys>;
					public static decode(encodedKeys: string): jackpal.androidterm.util.ShortcutEncryption.Keys;
					public getMacKey(): javax.crypto.SecretKey;
					public constructor(encKey: javax.crypto.SecretKey, macKey: javax.crypto.SecretKey);
					public getEncKey(): javax.crypto.SecretKey;
					public encode(): string;
				}
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module util {
			export class TermSettings extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.util.TermSettings>;
				public static WHITE: number;
				public static BLACK: number;
				public static BLUE: number;
				public static GREEN: number;
				public static AMBER: number;
				public static RED: number;
				public static HOLO_BLUE: number;
				public static SOLARIZED_FG: number;
				public static SOLARIZED_BG: number;
				public static SOLARIZED_DARK_FG: number;
				public static SOLARIZED_DARK_BG: number;
				public static LINUX_CONSOLE_WHITE: number;
				public static COLOR_SCHEMES: number[][];
				public static ACTION_BAR_MODE_NONE: number;
				public static ACTION_BAR_MODE_ALWAYS_VISIBLE: number;
				public static ACTION_BAR_MODE_HIDES: number;
				public static ORIENTATION_UNSPECIFIED: number;
				public static ORIENTATION_LANDSCAPE: number;
				public static ORIENTATION_PORTRAIT: number;
				public static KEYCODE_NONE: number;
				public static CONTROL_KEY_ID_NONE: number;
				public static CONTROL_KEY_SCHEMES: number[];
				public static FN_KEY_ID_NONE: number;
				public static FN_KEY_SCHEMES: number[];
				public static BACK_KEY_STOPS_SERVICE: number;
				public static BACK_KEY_CLOSES_WINDOW: number;
				public static BACK_KEY_CLOSES_ACTIVITY: number;
				public static BACK_KEY_SENDS_ESC: number;
				public static BACK_KEY_SENDS_TAB: number;
				public constructor(res: android.content.res.Resources, prefs: android.content.SharedPreferences);
				public actionBarMode(): number;
				public verifyPath(): boolean;
				public getHomePath(): string;
				public getCursorBlink(): number;
				public getControlKeyId(): number;
				public setHomePath(homePath: string): void;
				public getColorScheme(): number[];
				public backKeySendsCharacter(): boolean;
				public readPrefs(prefs: android.content.SharedPreferences): void;
				public setAppendPath(appendPath: string): void;
				public getUseKeyboardShortcutsFlag(): boolean;
				public useCookedIME(): boolean;
				public doPathExtensions(): boolean;
				public getFailsafeShell(): string;
				public getFnKeyCode(): number;
				public getInitialCommand(): string;
				public setPrependPath(prependPath: string): void;
				public getTermType(): string;
				public getAltSendsEscFlag(): boolean;
				public getPrependPath(): string;
				public getMouseTrackingFlag(): boolean;
				public getShell(): string;
				public defaultToUTF8Mode(): boolean;
				public getAppendPath(): string;
				public getBackKeyAction(): number;
				public getScreenOrientation(): number;
				public getFontSize(): number;
				public showStatusBar(): boolean;
				public getCursorStyle(): number;
				public getFnKeyId(): number;
				public closeWindowOnProcessExit(): boolean;
				public getBackKeyCharacter(): number;
				public getControlKeyCode(): number;
				public allowPathPrepend(): boolean;
			}
		}
	}
}

//Generics information:

