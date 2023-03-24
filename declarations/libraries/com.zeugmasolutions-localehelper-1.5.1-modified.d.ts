declare module androidx {
	export module appcompat {
		export module app {
			export class LocaleHelperAppCompatDelegate extends androidx.appcompat.app.AppCompatDelegate {
				public static class: java.lang.Class<androidx.appcompat.app.LocaleHelperAppCompatDelegate>;
				public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public requestWindowFeature(param0: number): boolean;
				public onPostCreate(savedInstanceState: android.os.Bundle): void;
				public startSupportActionMode(callback: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public onSaveInstanceState(param0: android.os.Bundle): void;
				public isHandleNativeActionModesEnabled(): boolean;
				public setTitle(param0: string): void;
				public onConfigurationChanged(param0: android.content.res.Configuration): void;
				public attachBaseContext2(param0: android.content.Context): android.content.Context;
				public onCreate(savedInstanceState: android.os.Bundle): void;
				public setHandleNativeActionModesEnabled(enabled: boolean): void;
				public setSupportActionBar(toolbar: androidx.appcompat.widget.Toolbar): void;
				public findViewById(param0: number): android.view.View;
				public onPostCreate(param0: android.os.Bundle): void;
				public getLocalNightMode(): number;
				public setContentView(v: android.view.View): void;
				public findViewById(id: number): android.view.View;
				public onConfigurationChanged(newConfig: android.content.res.Configuration): void;
				public addContentView(v: android.view.View, lp: android.view.ViewGroup.LayoutParams): void;
				public onSaveInstanceState(outState: android.os.Bundle): void;
				public setLocalNightMode(mode: number): void;
				public constructor(superDelegate: androidx.appcompat.app.AppCompatDelegate);
				public onStart(): void;
				public onPostResume(): void;
				public requestWindowFeature(featureId: number): boolean;
				public setContentView(param0: android.view.View): void;
				public getSupportActionBar(): androidx.appcompat.app.ActionBar;
				public setSupportActionBar(param0: androidx.appcompat.widget.Toolbar): void;
				public invalidateOptionsMenu(): void;
				public setTheme(param0: number): void;
				public createView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
				public setHandleNativeActionModesEnabled(param0: boolean): void;
				public hasWindowFeature(featureId: number): boolean;
				public createView(parent: android.view.View, name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
				public setContentView(v: android.view.View, lp: android.view.ViewGroup.LayoutParams): void;
				public setTheme(themeResId: number): void;
				public onCreate(param0: android.os.Bundle): void;
				public applyDayNight(): boolean;
				public hasWindowFeature(param0: number): boolean;
				public onStop(): void;
				public setTitle(title: string): void;
				public setContentView(resId: number): void;
				public setLocalNightMode(param0: number): void;
				public getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
				public setContentView(param0: number): void;
				public addContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public getMenuInflater(): android.view.MenuInflater;
				public installViewFactory(): void;
				public attachBaseContext2(context: android.content.Context): android.content.Context;
				public onDestroy(): void;
				public startSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
			}
		}
	}
}

declare module com {
	export module zeugmasolutions {
		export module localehelper {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.zeugmasolutions.localehelper.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module zeugmasolutions {
		export module localehelper {
			export class LocaleAwareApplication extends android.app.Application {
				public static class: java.lang.Class<com.zeugmasolutions.localehelper.LocaleAwareApplication>;
				public onTrimMemory(level: number): void;
				public getApplicationContext(): android.content.Context;
				public onConfigurationChanged(newConfig: android.content.res.Configuration): void;
				public attachBaseContext(base: android.content.Context): void;
				public onTrimMemory(param0: number): void;
				public constructor();
				public constructor(base: android.content.Context);
			}
		}
	}
}

declare module com {
	export module zeugmasolutions {
		export module localehelper {
			export class LocaleAwareCompatActivity extends androidx.appcompat.app.AppCompatActivity {
				public static class: java.lang.Class<com.zeugmasolutions.localehelper.LocaleAwareCompatActivity>;
				public _$_findViewCache: java.util.Map<java.lang.Integer,android.view.View>;
				public onCreate(savedInstanceState: android.os.Bundle, persistentState: any): void;
				public createConfigurationContext(overrideConfiguration: android.content.res.Configuration): android.content.Context;
				public getApplicationContext(): android.content.Context;
				public onActionModeStarted(mode: android.view.ActionMode): void;
				public attachBaseContext(newBase: android.content.Context): void;
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public updateLocale(locale: java.util.Locale): void;
				public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
				public onSupportActionModeStarted(param0: androidx.appcompat.view.ActionMode): void;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
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
				public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
				public getSupportParentActivityIntent(): android.content.Intent;
				public onWindowAttributesChanged(params: android.view.WindowManager.LayoutParams): void;
				public onActionModeFinished(mode: android.view.ActionMode): void;
				public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
				public addOnContextAvailableListener(param0: androidx.activity.contextaware.OnContextAvailableListener): void;
				public getOnBackPressedDispatcher(): androidx.activity.OnBackPressedDispatcher;
				public attachBaseContext(param0: android.content.Context): void;
				public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public superDispatchKeyEvent(param0: android.view.KeyEvent): boolean;
				public onContentChanged(): void;
				public validateRequestPermissionsRequestCode(param0: number): void;
				public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
				public onDetachedFromWindow(): void;
				public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
				public onSearchRequested(): boolean;
				public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public dispatchTouchEvent(ev: android.view.MotionEvent): boolean;
				public constructor(base: android.content.Context, theme: android.content.res.Resources.Theme);
				public onPause(): void;
				public _$_clearFindViewByIdCache(): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
				public onTrimMemory(level: number): void;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public getDelegate(): androidx.appcompat.app.AppCompatDelegate;
				public onCreatePanelView(featureId: number): android.view.View;
				public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
				public onCreate(param0: android.os.Bundle): void;
				public peekAvailableContext(): android.content.Context;
				public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onCreatePanelView(param0: number): android.view.View;
				public onWindowStartingActionMode(callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public clearLocaleSelection(): void;
				public removeOnContextAvailableListener(param0: androidx.activity.contextaware.OnContextAvailableListener): void;
				public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
				public onSupportActionModeFinished(param0: androidx.appcompat.view.ActionMode): void;
				public _$_findCachedViewById(id: number): android.view.View;
				public onActionModeStarted(param0: android.view.ActionMode): void;
				public getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
				public onWindowStartingSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public onActionModeFinished(param0: android.view.ActionMode): void;
				public onRequestPermissionsResult(param0: number, param1: string[], param2: number[]): void;
				public onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;
				public constructor(base: android.content.Context);
				public constructor(base: android.content.Context, themeResId: number);
				public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
				public onSearchRequested(searchEvent: any): boolean;
				public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
				public getActivityResultRegistry(): androidx.activity.result.ActivityResultRegistry;
				public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
				public constructor(param0: number);
				public onWindowFocusChanged(param0: boolean): void;
				public dispatchTrackballEvent(ev: android.view.MotionEvent): boolean;
				public onAttachedToWindow(): void;
				public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
			}
		}
	}
}

declare module com {
	export module zeugmasolutions {
		export module localehelper {
			export class LocaleHelper extends java.lang.Object {
				public static class: java.lang.Class<com.zeugmasolutions.localehelper.LocaleHelper>;
				public static INSTANCE: com.zeugmasolutions.localehelper.LocaleHelper;
				public clearLocaleSelection(context: android.content.Context): android.content.Context;
				public onAttach(context: android.content.Context): android.content.Context;
				public hasLocaleSelection(context: android.content.Context): boolean;
				public isRTL(locale: java.util.Locale): boolean;
				public setLocale(context: android.content.Context, locale: java.util.Locale): android.content.Context;
				public getSystemLocale(): java.util.Locale;
				public getLocale(context: android.content.Context): java.util.Locale;
			}
		}
	}
}

declare module com {
	export module zeugmasolutions {
		export module localehelper {
			export class LocaleHelperActivityDelegate extends java.lang.Object {
				public static class: java.lang.Class<com.zeugmasolutions.localehelper.LocaleHelperActivityDelegate>;
				/**
				 * Constructs a new instance of the com.zeugmasolutions.localehelper.LocaleHelperActivityDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setLocale(param0: android.app.Activity, param1: java.util.Locale): void;
					clearLocaleSelection(param0: android.app.Activity): void;
					attachBaseContext(param0: android.content.Context): android.content.Context;
					onPaused(): void;
					onResumed(param0: android.app.Activity): void;
					onCreate(param0: android.app.Activity): void;
					getApplicationContext(param0: android.content.Context): android.content.Context;
					getAppCompatDelegate(param0: androidx.appcompat.app.AppCompatDelegate): androidx.appcompat.app.AppCompatDelegate;
				});
				public constructor();
				public onCreate(param0: android.app.Activity): void;
				public setLocale(param0: android.app.Activity, param1: java.util.Locale): void;
				public onPaused(): void;
				public getApplicationContext(param0: android.content.Context): android.content.Context;
				public attachBaseContext(param0: android.content.Context): android.content.Context;
				public clearLocaleSelection(param0: android.app.Activity): void;
				public getAppCompatDelegate(param0: androidx.appcompat.app.AppCompatDelegate): androidx.appcompat.app.AppCompatDelegate;
				public onResumed(param0: android.app.Activity): void;
			}
		}
	}
}

declare module com {
	export module zeugmasolutions {
		export module localehelper {
			export class LocaleHelperActivityDelegateImpl extends java.lang.Object implements com.zeugmasolutions.localehelper.LocaleHelperActivityDelegate {
				public static class: java.lang.Class<com.zeugmasolutions.localehelper.LocaleHelperActivityDelegateImpl>;
				public setLocale(param0: android.app.Activity, param1: java.util.Locale): void;
				public onCreate(activity: android.app.Activity): void;
				public onPaused(): void;
				public getApplicationContext(param0: android.content.Context): android.content.Context;
				public onResumed(activity: android.app.Activity): void;
				public clearLocaleSelection(activity: android.app.Activity): void;
				public getApplicationContext(applicationContext: android.content.Context): android.content.Context;
				public onResumed(param0: android.app.Activity): void;
				public constructor();
				public getAppCompatDelegate(delegate: androidx.appcompat.app.AppCompatDelegate): androidx.appcompat.app.AppCompatDelegate;
				public onCreate(param0: android.app.Activity): void;
				public setLocale(activity: android.app.Activity, newLocale: java.util.Locale): void;
				public attachBaseContext(newBase: android.content.Context): android.content.Context;
				public attachBaseContext(param0: android.content.Context): android.content.Context;
				public clearLocaleSelection(param0: android.app.Activity): void;
				public getAppCompatDelegate(param0: androidx.appcompat.app.AppCompatDelegate): androidx.appcompat.app.AppCompatDelegate;
			}
		}
	}
}

declare module com {
	export module zeugmasolutions {
		export module localehelper {
			export class LocaleHelperApplicationDelegate extends java.lang.Object {
				public static class: java.lang.Class<com.zeugmasolutions.localehelper.LocaleHelperApplicationDelegate>;
				public onConfigurationChanged(context: android.content.Context): void;
				public getApplicationContext(context: android.content.Context): android.content.Context;
				public attachBaseContext(base: android.content.Context): android.content.Context;
				public constructor();
			}
		}
	}
}

declare module com {
	export module zeugmasolutions {
		export module localehelper {
			export class Locales extends java.lang.Object {
				public static class: java.lang.Class<com.zeugmasolutions.localehelper.Locales>;
				public static INSTANCE: com.zeugmasolutions.localehelper.Locales;
				public getHebrew(): java.util.Locale;
				public getDanish(): java.util.Locale;
				public getRomanian(): java.util.Locale;
				public getItalian(): java.util.Locale;
				public getIcelandic(): java.util.Locale;
				public getUrdu(): java.util.Locale;
				public getHungarian(): java.util.Locale;
				public getPolish(): java.util.Locale;
				public getSpanish(): java.util.Locale;
				public getArmenian(): java.util.Locale;
				public getMacedonian(): java.util.Locale;
				public getGreek(): java.util.Locale;
				public getNorwegianBokmal(): java.util.Locale;
				public getVietnamese(): java.util.Locale;
				public getEnglishUS(): java.util.Locale;
				public getGeorgian(): java.util.Locale;
				public getMalagasy(): java.util.Locale;
				public getSlovak(): java.util.Locale;
				public getSlovenian(): java.util.Locale;
				public getRTL(): java.util.Set<string>;
				public getSwedish(): java.util.Locale;
				public getTurkish(): java.util.Locale;
				public getZulu(): java.util.Locale;
				public getLatvian(): java.util.Locale;
				public getKorean(): java.util.Locale;
				public getPersian(): java.util.Locale;
				public getFrench(): java.util.Locale;
				public getIndonesian(): java.util.Locale;
				public getLuo(): java.util.Locale;
				public getGerman(): java.util.Locale;
				public getHawaiian(): java.util.Locale;
				public getRussian(): java.util.Locale;
				public getBulgarian(): java.util.Locale;
				public getAlbanian(): java.util.Locale;
				public getPortuguese(): java.util.Locale;
				public getJapanese(): java.util.Locale;
				public getLithuanian(): java.util.Locale;
				public getDutch(): java.util.Locale;
				public getIrish(): java.util.Locale;
				public getEnglishUK(): java.util.Locale;
				public getFilipino(): java.util.Locale;
				public getUkrainian(): java.util.Locale;
				public getBelarus(): java.util.Locale;
				public getNepali(): java.util.Locale;
				public getEstonian(): java.util.Locale;
				public getAfrikaans(): java.util.Locale;
				public getFinnish(): java.util.Locale;
				public getArabic(): java.util.Locale;
				public getThai(): java.util.Locale;
				public getMalay(): java.util.Locale;
				public getHindi(): java.util.Locale;
				public getNorwegianNynorsk(): java.util.Locale;
			}
		}
	}
}

//Generics information:

