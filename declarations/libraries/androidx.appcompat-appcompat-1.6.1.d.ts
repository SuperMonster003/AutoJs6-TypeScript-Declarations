declare module androidx {
	export module appcompat {
		export module app {
			export abstract class ActionBar extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.app.ActionBar>;
				public static NAVIGATION_MODE_STANDARD: number;
				public static NAVIGATION_MODE_LIST: number;
				public static NAVIGATION_MODE_TABS: number;
				public static DISPLAY_USE_LOGO: number;
				public static DISPLAY_SHOW_HOME: number;
				public static DISPLAY_HOME_AS_UP: number;
				public static DISPLAY_SHOW_TITLE: number;
				public static DISPLAY_SHOW_CUSTOM: number;
				/** @deprecated */
				public setNavigationMode(param0: number): void;
				public getHeight(): number;
				public setCustomView(param0: android.view.View, param1: androidx.appcompat.app.ActionBar.LayoutParams): void;
				/** @deprecated */
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: number, param2: boolean): void;
				public setIcon(param0: number): void;
				public setTitle(param0: string): void;
				public constructor();
				/** @deprecated */
				public removeTabAt(param0: number): void;
				public show(): void;
				public setHomeButtonEnabled(enabled: boolean): void;
				public setDisplayShowHomeEnabled(param0: boolean): void;
				/** @deprecated */
				public getNavigationItemCount(): number;
				public isShowing(): boolean;
				public setTitle(param0: number): void;
				public onKeyShortcut(keyCode: number, ev: android.view.KeyEvent): boolean;
				public setCustomView(param0: number): void;
				/** @deprecated */
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				/** @deprecated */
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: number): void;
				public getCustomView(): android.view.View;
				public setHomeAsUpIndicator(indicator: android.graphics.drawable.Drawable): void;
				public setDisplayOptions(param0: number): void;
				public invalidateOptionsMenu(): boolean;
				public setDisplayUseLogoEnabled(param0: boolean): void;
				public onMenuKeyEvent(event: android.view.KeyEvent): boolean;
				public setElevation(elevation: number): void;
				public setShowHideAnimationEnabled(enabled: boolean): void;
				public addOnMenuVisibilityListener(param0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				/** @deprecated */
				public getTabAt(param0: number): androidx.appcompat.app.ActionBar.Tab;
				public setHomeAsUpIndicator(resId: number): void;
				public setSubtitle(param0: string): void;
				public setDefaultDisplayHomeAsUpEnabled(enabled: boolean): void;
				/** @deprecated */
				public getSelectedTab(): androidx.appcompat.app.ActionBar.Tab;
				public openOptionsMenu(): boolean;
				public getThemedContext(): android.content.Context;
				public setSplitBackgroundDrawable(d: android.graphics.drawable.Drawable): void;
				public setLogo(param0: number): void;
				public getElevation(): number;
				/** @deprecated */
				public getSelectedNavigationIndex(): number;
				public getSubtitle(): string;
				/** @deprecated */
				public removeTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public setSubtitle(param0: number): void;
				public setLogo(param0: android.graphics.drawable.Drawable): void;
				public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
				public removeOnMenuVisibilityListener(param0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public isHideOnContentScrollEnabled(): boolean;
				public getHideOffset(): number;
				public startActionMode(callback: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				/** @deprecated */
				public getNavigationMode(): number;
				/** @deprecated */
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: boolean): void;
				public getDisplayOptions(): number;
				/** @deprecated */
				public getTabCount(): number;
				public setHomeActionContentDescription(resId: number): void;
				public setIcon(param0: android.graphics.drawable.Drawable): void;
				public setStackedBackgroundDrawable(d: android.graphics.drawable.Drawable): void;
				public closeOptionsMenu(): boolean;
				public setDisplayHomeAsUpEnabled(param0: boolean): void;
				public setDisplayShowCustomEnabled(param0: boolean): void;
				public setDisplayShowTitleEnabled(param0: boolean): void;
				public collapseActionView(): boolean;
				public setCustomView(param0: android.view.View): void;
				/** @deprecated */
				public setListNavigationCallbacks(param0: android.widget.SpinnerAdapter, param1: androidx.appcompat.app.ActionBar.OnNavigationListener): void;
				/** @deprecated */
				public removeAllTabs(): void;
				public isTitleTruncated(): boolean;
				public dispatchMenuVisibilityChanged(visible: boolean): void;
				public setHideOnContentScrollEnabled(hideOnContentScroll: boolean): void;
				/** @deprecated */
				public selectTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public getTitle(): string;
				/** @deprecated */
				public setSelectedNavigationItem(param0: number): void;
				public hide(): void;
				public setHomeActionContentDescription(description: string): void;
				/** @deprecated */
				public newTab(): androidx.appcompat.app.ActionBar.Tab;
				public setDisplayOptions(param0: number, param1: number): void;
				public onConfigurationChanged(config: android.content.res.Configuration): void;
				public setHideOffset(offset: number): void;
				public setWindowTitle(title: string): void;
			}
			export module ActionBar {
				export class DisplayOptions extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.DisplayOptions>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBar$DisplayOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class LayoutParams extends android.view.ViewGroup.MarginLayoutParams {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.LayoutParams>;
					public gravity: number;
					public constructor(source: android.view.ViewGroup.MarginLayoutParams);
					public constructor(c: android.content.Context, attrs: android.util.AttributeSet);
					public constructor(width: number, height: number, gravity: number);
					public constructor(gravity: number);
					public constructor(source: androidx.appcompat.app.ActionBar.LayoutParams);
					public constructor(source: android.view.ViewGroup.LayoutParams);
					public constructor(width: number, height: number);
				}
				export class NavigationMode extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.NavigationMode>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBar$NavigationMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class OnMenuVisibilityListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.OnMenuVisibilityListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBar$OnMenuVisibilityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMenuVisibilityChanged(param0: boolean): void;
					});
					public constructor();
					public onMenuVisibilityChanged(param0: boolean): void;
				}
				export class OnNavigationListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.OnNavigationListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBar$OnNavigationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onNavigationItemSelected(param0: number, param1: number): boolean;
					});
					public constructor();
					public onNavigationItemSelected(param0: number, param1: number): boolean;
				}
				export abstract class Tab extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.Tab>;
					public static INVALID_POSITION: number;
					public setTabListener(param0: androidx.appcompat.app.ActionBar.TabListener): androidx.appcompat.app.ActionBar.Tab;
					public setText(param0: string): androidx.appcompat.app.ActionBar.Tab;
					public getText(): string;
					public setText(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public getTag(): any;
					public setIcon(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public setCustomView(param0: android.view.View): androidx.appcompat.app.ActionBar.Tab;
					public setTag(param0: any): androidx.appcompat.app.ActionBar.Tab;
					public select(): void;
					public getIcon(): android.graphics.drawable.Drawable;
					public getContentDescription(): string;
					public setCustomView(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public getCustomView(): android.view.View;
					public constructor();
					public setContentDescription(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public setContentDescription(param0: string): androidx.appcompat.app.ActionBar.Tab;
					public setIcon(param0: android.graphics.drawable.Drawable): androidx.appcompat.app.ActionBar.Tab;
					public getPosition(): number;
				}
				export class TabListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBar.TabListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBar$TabListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onTabSelected(param0: androidx.appcompat.app.ActionBar.Tab, param1: androidx.fragment.app.FragmentTransaction): void;
						onTabUnselected(param0: androidx.appcompat.app.ActionBar.Tab, param1: androidx.fragment.app.FragmentTransaction): void;
						onTabReselected(param0: androidx.appcompat.app.ActionBar.Tab, param1: androidx.fragment.app.FragmentTransaction): void;
					});
					public constructor();
					public onTabReselected(param0: androidx.appcompat.app.ActionBar.Tab, param1: androidx.fragment.app.FragmentTransaction): void;
					public onTabUnselected(param0: androidx.appcompat.app.ActionBar.Tab, param1: androidx.fragment.app.FragmentTransaction): void;
					public onTabSelected(param0: androidx.appcompat.app.ActionBar.Tab, param1: androidx.fragment.app.FragmentTransaction): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class ActionBarDrawerToggle extends java.lang.Object implements androidx.drawerlayout.widget.DrawerLayout.DrawerListener {
				public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggle>;
				public isDrawerSlideAnimationEnabled(): boolean;
				public onDrawerOpened(param0: android.view.View): void;
				public setDrawerSlideAnimationEnabled(enabled: boolean): void;
				public onOptionsItemSelected(item: android.view.MenuItem): boolean;
				public onConfigurationChanged(newConfig: android.content.res.Configuration): void;
				public isDrawerIndicatorEnabled(): boolean;
				public onDrawerClosed(drawerView: android.view.View): void;
				public syncState(): void;
				public onDrawerSlide(param0: android.view.View, param1: number): void;
				public setHomeAsUpIndicator(resId: number): void;
				public onDrawerStateChanged(param0: number): void;
				public onDrawerClosed(param0: android.view.View): void;
				public getToolbarNavigationClickListener(): android.view.View.OnClickListener;
				public constructor(activity: android.app.Activity, drawerLayout: androidx.drawerlayout.widget.DrawerLayout, openDrawerContentDescRes: number, closeDrawerContentDescRes: number);
				public setDrawerIndicatorEnabled(enable: boolean): void;
				public getDrawerArrowDrawable(): androidx.appcompat.graphics.drawable.DrawerArrowDrawable;
				public onDrawerOpened(drawerView: android.view.View): void;
				public constructor(activity: android.app.Activity, drawerLayout: androidx.drawerlayout.widget.DrawerLayout, toolbar: androidx.appcompat.widget.Toolbar, openDrawerContentDescRes: number, closeDrawerContentDescRes: number);
				public setDrawerArrowDrawable(drawable: androidx.appcompat.graphics.drawable.DrawerArrowDrawable): void;
				public setToolbarNavigationClickListener(onToolbarNavigationClickListener: android.view.View.OnClickListener): void;
				public setHomeAsUpIndicator(indicator: android.graphics.drawable.Drawable): void;
				public onDrawerSlide(drawerView: android.view.View, slideOffset: number): void;
				public onDrawerStateChanged(newState: number): void;
			}
			export module ActionBarDrawerToggle {
				export class Delegate extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggle.Delegate>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBarDrawerToggle$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setActionBarUpIndicator(param0: android.graphics.drawable.Drawable, param1: number): void;
						setActionBarDescription(param0: number): void;
						getThemeUpIndicator(): android.graphics.drawable.Drawable;
						getActionBarThemedContext(): android.content.Context;
						isNavigationVisible(): boolean;
					});
					public constructor();
					public setActionBarUpIndicator(param0: android.graphics.drawable.Drawable, param1: number): void;
					public isNavigationVisible(): boolean;
					public getActionBarThemedContext(): android.content.Context;
					public getThemeUpIndicator(): android.graphics.drawable.Drawable;
					public setActionBarDescription(param0: number): void;
				}
				export class DelegateProvider extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggle.DelegateProvider>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.ActionBarDrawerToggle$DelegateProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
					});
					public constructor();
					public getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
				}
				export class FrameworkActionBarDelegate extends java.lang.Object implements androidx.appcompat.app.ActionBarDrawerToggle.Delegate {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggle.FrameworkActionBarDelegate>;
					public setActionBarUpIndicator(param0: android.graphics.drawable.Drawable, param1: number): void;
					public setActionBarDescription(contentDescRes: number): void;
					public isNavigationVisible(): boolean;
					public getActionBarThemedContext(): android.content.Context;
					public setActionBarUpIndicator(themeImage: android.graphics.drawable.Drawable, contentDescRes: number): void;
					public getThemeUpIndicator(): android.graphics.drawable.Drawable;
					public setActionBarDescription(param0: number): void;
				}
				export module FrameworkActionBarDelegate {
					export class Api18Impl extends java.lang.Object {
						public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggle.FrameworkActionBarDelegate.Api18Impl>;
					}
				}
				export class ToolbarCompatDelegate extends java.lang.Object implements androidx.appcompat.app.ActionBarDrawerToggle.Delegate {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggle.ToolbarCompatDelegate>;
					public setActionBarUpIndicator(upDrawable: android.graphics.drawable.Drawable, contentDescRes: number): void;
					public setActionBarUpIndicator(param0: android.graphics.drawable.Drawable, param1: number): void;
					public setActionBarDescription(contentDescRes: number): void;
					public isNavigationVisible(): boolean;
					public getActionBarThemedContext(): android.content.Context;
					public getThemeUpIndicator(): android.graphics.drawable.Drawable;
					public setActionBarDescription(param0: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class ActionBarDrawerToggleHoneycomb extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggleHoneycomb>;
				public static setActionBarUpIndicator(activity: android.app.Activity, drawable: android.graphics.drawable.Drawable, contentDescRes: number): androidx.appcompat.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo;
				public static setActionBarDescription(info: androidx.appcompat.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo, activity: android.app.Activity, contentDescRes: number): androidx.appcompat.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo;
				public static getThemeUpIndicator(activity: android.app.Activity): android.graphics.drawable.Drawable;
			}
			export module ActionBarDrawerToggleHoneycomb {
				export class SetIndicatorInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo>;
					public setHomeAsUpIndicator: java.lang.reflect.Method;
					public setHomeActionContentDescription: java.lang.reflect.Method;
					public upIndicatorView: android.widget.ImageView;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AlertController extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.app.AlertController>;
				public getIconAttributeResId(attrId: number): number;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public setButtonPanelLayoutHint(layoutHint: number): void;
				public setButton(whichButton: number, text: string, listener: android.content.DialogInterface.OnClickListener, msg: android.os.Message, icon: android.graphics.drawable.Drawable): void;
				public setView(view: android.view.View, viewSpacingLeft: number, viewSpacingTop: number, viewSpacingRight: number, viewSpacingBottom: number): void;
				public setMessage(message: string): void;
				public getListView(): android.widget.ListView;
				public setIcon(resId: number): void;
				public setCustomTitle(customTitleView: android.view.View): void;
				public setView(view: android.view.View): void;
				public getButton(whichButton: number): android.widget.Button;
				public constructor(context: android.content.Context, di: androidx.appcompat.app.AppCompatDialog, window: android.view.Window);
				public installContent(): void;
				public setIcon(icon: android.graphics.drawable.Drawable): void;
				public setTitle(title: string): void;
				public setView(layoutResId: number): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
			}
			export module AlertController {
				export class AlertParams extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.AlertController.AlertParams>;
					public mContext: android.content.Context;
					public mInflater: android.view.LayoutInflater;
					public mIconId: number;
					public mIcon: android.graphics.drawable.Drawable;
					public mIconAttrId: number;
					public mTitle: string;
					public mCustomTitleView: android.view.View;
					public mMessage: string;
					public mPositiveButtonText: string;
					public mPositiveButtonIcon: android.graphics.drawable.Drawable;
					public mPositiveButtonListener: android.content.DialogInterface.OnClickListener;
					public mNegativeButtonText: string;
					public mNegativeButtonIcon: android.graphics.drawable.Drawable;
					public mNegativeButtonListener: android.content.DialogInterface.OnClickListener;
					public mNeutralButtonText: string;
					public mNeutralButtonIcon: android.graphics.drawable.Drawable;
					public mNeutralButtonListener: android.content.DialogInterface.OnClickListener;
					public mCancelable: boolean;
					public mOnCancelListener: android.content.DialogInterface.OnCancelListener;
					public mOnDismissListener: android.content.DialogInterface.OnDismissListener;
					public mOnKeyListener: android.content.DialogInterface.OnKeyListener;
					public mItems: string[];
					public mAdapter: android.widget.ListAdapter;
					public mOnClickListener: android.content.DialogInterface.OnClickListener;
					public mViewLayoutResId: number;
					public mView: android.view.View;
					public mViewSpacingLeft: number;
					public mViewSpacingTop: number;
					public mViewSpacingRight: number;
					public mViewSpacingBottom: number;
					public mViewSpacingSpecified: boolean;
					public mCheckedItems: boolean[];
					public mIsMultiChoice: boolean;
					public mIsSingleChoice: boolean;
					public mCheckedItem: number;
					public mOnCheckboxClickListener: android.content.DialogInterface.OnMultiChoiceClickListener;
					public mCursor: android.database.Cursor;
					public mLabelColumn: string;
					public mIsCheckedColumn: string;
					public mForceInverseBackground: boolean;
					public mOnItemSelectedListener: android.widget.AdapterView.OnItemSelectedListener;
					public mOnPrepareListViewListener: androidx.appcompat.app.AlertController.AlertParams.OnPrepareListViewListener;
					public mRecycleOnMeasure: boolean;
					public constructor(context: android.content.Context);
					public apply(dialog: androidx.appcompat.app.AlertController): void;
				}
				export module AlertParams {
					export class OnPrepareListViewListener extends java.lang.Object {
						public static class: java.lang.Class<androidx.appcompat.app.AlertController.AlertParams.OnPrepareListViewListener>;
						/**
						 * Constructs a new instance of the androidx.appcompat.app.AlertController$AlertParams$OnPrepareListViewListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onPrepareListView(param0: android.widget.ListView): void;
						});
						public constructor();
						public onPrepareListView(param0: android.widget.ListView): void;
					}
				}
				export class ButtonHandler extends android.os.Handler {
					public static class: java.lang.Class<androidx.appcompat.app.AlertController.ButtonHandler>;
					public constructor(callback: android.os.Handler.Callback);
					public constructor();
					public constructor(looper: android.os.Looper);
					public constructor(dialog: android.content.DialogInterface);
					public handleMessage(msg: android.os.Message): void;
					public constructor(looper: android.os.Looper, callback: android.os.Handler.Callback);
				}
				export class CheckedItemAdapter extends android.widget.ArrayAdapter<string> {
					public static class: java.lang.Class<androidx.appcompat.app.AlertController.CheckedItemAdapter>;
					public getFilter(): android.widget.Filter;
					public areAllItemsEnabled(): boolean;
					public isEnabled(position: number): boolean;
					public constructor(context: android.content.Context, resource: number, objects: any[]);
					public constructor(context: android.content.Context, resource: number, textViewResourceId: number, objects: string[]);
					public getDropDownViewTheme(): android.content.res.Resources.Theme;
					public getDropDownView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
					public constructor(context: android.content.Context, resource: number, textViewResourceId: number);
					public constructor(context: android.content.Context, resource: number, textViewResourceId: number, objects: any[]);
					public getItemId(position: number): number;
					public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
					public hasStableIds(): boolean;
					public constructor(context: android.content.Context, resource: number, textViewResourceId: number, objects: java.util.List<any>);
					public constructor();
					public setDropDownViewTheme(param0: android.content.res.Resources.Theme): void;
					public constructor(context: android.content.Context, resource: number, objects: java.util.List<any>);
					public isEnabled(param0: number): boolean;
					public setDropDownViewTheme(theme: android.content.res.Resources.Theme): void;
					public constructor(context: android.content.Context, resource: number);
				}
				export class RecycleListView extends android.widget.ListView {
					public static class: java.lang.Class<androidx.appcompat.app.AlertController.RecycleListView>;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public focusableViewAvailable(v: android.view.View): void;
					public removeView(child: android.view.View): void;
					public isTextDirectionResolved(): boolean;
					public showContextMenuForChild(param0: android.view.View): boolean;
					public onStopNestedScroll(child: android.view.View): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
					public recomputeViewAttributes(child: android.view.View): void;
					public addView(child: android.view.View, index: number): void;
					public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public getLayoutDirection(): number;
					public getParentForAccessibility(): android.view.ViewParent;
					public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
					public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
					public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
					public createContextMenu(param0: android.view.ContextMenu): void;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public childDrawableStateChanged(param0: android.view.View): void;
					public onFilterComplete(param0: number): void;
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public isTextAlignmentResolved(): boolean;
					public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public requestChildFocus(child: android.view.View, focused: android.view.View): void;
					public canResolveTextAlignment(): boolean;
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public requestChildRectangleOnScreen(child: android.view.View, rect: android.graphics.Rect, immediate: boolean): boolean;
					public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
					public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
					public showContextMenuForChild(originalView: android.view.View): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
					public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
					public sendAccessibilityEvent(param0: number): void;
					public requestLayout(): void;
					public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public onTextChanged(s: string, start: number, before: number, count: number): void;
					public getTextAlignment(): number;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
					public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public focusSearch(param0: android.view.View, param1: number): android.view.View;
					public bringChildToFront(child: android.view.View): void;
					public onTouchModeChanged(param0: boolean): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
					public onFilterComplete(count: number): void;
					public isLayoutRequested(): boolean;
					public clearChildFocus(param0: android.view.View): void;
					public clearChildFocus(child: android.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public isLayoutDirectionResolved(): boolean;
					public focusSearch(focused: android.view.View, direction: number): android.view.View;
					public addView(child: android.view.View): void;
					public onTouchModeChanged(isInTouchMode: boolean): void;
					public afterTextChanged(s: android.text.Editable): void;
					public addView(child: android.view.View, width: number, height: number): void;
					public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
					public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
					public bringChildToFront(param0: android.view.View): void;
					public constructor(context: android.content.Context);
					public beforeTextChanged(s: string, start: number, count: number, after: number): void;
					public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
					public onGlobalLayout(): void;
					public afterTextChanged(param0: android.text.Editable): void;
					public setHasDecor(hasTitle: boolean, hasButtons: boolean): void;
					public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
					public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
					public getTextDirection(): number;
					public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					public requestFitSystemWindows(): void;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public requestTransparentRegion(param0: android.view.View): void;
					public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
					public canResolveTextDirection(): boolean;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public getParent(): android.view.ViewParent;
					public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
					public createContextMenu(menu: android.view.ContextMenu): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public onStopNestedScroll(param0: android.view.View): void;
					public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
					public canResolveLayoutDirection(): boolean;
					public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
					public requestTransparentRegion(child: android.view.View): void;
					public removeView(param0: android.view.View): void;
					public childDrawableStateChanged(child: android.view.View): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public recomputeViewAttributes(param0: android.view.View): void;
					public focusableViewAvailable(param0: android.view.View): void;
					public focusSearch(direction: number): android.view.View;
					public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AlertDialog extends androidx.appcompat.app.AppCompatDialog implements android.content.DialogInterface {
				public static class: java.lang.Class<androidx.appcompat.app.AlertDialog>;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public setIconAttribute(attrId: number): void;
				public setMessage(message: string): void;
				public setIcon(resId: number): void;
				public onSupportActionModeStarted(param0: androidx.appcompat.view.ActionMode): void;
				public dismiss(): void;
				public setButton(whichButton: number, text: string, msg: android.os.Message): void;
				public onWindowStartingSupportActionMode(callback: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public constructor(context: android.content.Context, theme: number);
				public onCreate(savedInstanceState: android.os.Bundle): void;
				public cancel(): void;
				public setIcon(icon: android.graphics.drawable.Drawable): void;
				public setTitle(title: string): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onSupportActionModeFinished(param0: androidx.appcompat.view.ActionMode): void;
				public setTitle(titleId: number): void;
				public setButton(whichButton: number, text: string, icon: android.graphics.drawable.Drawable, listener: android.content.DialogInterface.OnClickListener): void;
				public constructor(context: android.content.Context, cancelable: boolean, cancelListener: android.content.DialogInterface.OnCancelListener);
				public constructor(context: android.content.Context);
				public onWindowStartingSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public setView(view: android.view.View, viewSpacingLeft: number, viewSpacingTop: number, viewSpacingRight: number, viewSpacingBottom: number): void;
				public getListView(): android.widget.ListView;
				public constructor(context: android.content.Context, themeResId: number);
				public setButton(whichButton: number, text: string, listener: android.content.DialogInterface.OnClickListener): void;
				public setCustomTitle(customTitleView: android.view.View): void;
				public setView(view: android.view.View): void;
				public getButton(whichButton: number): android.widget.Button;
				public onSupportActionModeStarted(mode: androidx.appcompat.view.ActionMode): void;
				public onSupportActionModeFinished(mode: androidx.appcompat.view.ActionMode): void;
			}
			export module AlertDialog {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.AlertDialog.Builder>;
					public setNeutralButton(text: string, listener: android.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setCursor(cursor: android.database.Cursor, listener: android.content.DialogInterface.OnClickListener, labelColumn: string): androidx.appcompat.app.AlertDialog.Builder;
					public setCancelable(cancelable: boolean): androidx.appcompat.app.AlertDialog.Builder;
					public setTitle(title: string): androidx.appcompat.app.AlertDialog.Builder;
					public setSingleChoiceItems(cursor: android.database.Cursor, checkedItem: number, labelColumn: string, listener: android.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setOnItemSelectedListener(listener: android.widget.AdapterView.OnItemSelectedListener): androidx.appcompat.app.AlertDialog.Builder;
					public setNegativeButton(text: string, listener: android.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setMessage(messageId: number): androidx.appcompat.app.AlertDialog.Builder;
					public setNegativeButton(textId: number, listener: android.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setSingleChoiceItems(items: string[], checkedItem: number, listener: android.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setSingleChoiceItems(adapter: android.widget.ListAdapter, checkedItem: number, listener: android.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public getContext(): android.content.Context;
					public setNeutralButtonIcon(icon: android.graphics.drawable.Drawable): androidx.appcompat.app.AlertDialog.Builder;
					/** @deprecated */
					public setInverseBackgroundForced(useInverseBackground: boolean): androidx.appcompat.app.AlertDialog.Builder;
					public setItems(items: string[], listener: android.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setRecycleOnMeasureEnabled(enabled: boolean): androidx.appcompat.app.AlertDialog.Builder;
					public setNeutralButton(textId: number, listener: android.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setMultiChoiceItems(items: string[], checkedItems: boolean[], listener: android.content.DialogInterface.OnMultiChoiceClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setPositiveButton(text: string, listener: android.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setOnKeyListener(onKeyListener: android.content.DialogInterface.OnKeyListener): androidx.appcompat.app.AlertDialog.Builder;
					public setNegativeButtonIcon(icon: android.graphics.drawable.Drawable): androidx.appcompat.app.AlertDialog.Builder;
					public setMultiChoiceItems(cursor: android.database.Cursor, isCheckedColumn: string, labelColumn: string, listener: android.content.DialogInterface.OnMultiChoiceClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public constructor(context: android.content.Context, themeResId: number);
					public constructor(context: android.content.Context);
					public setItems(itemsId: number, listener: android.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setSingleChoiceItems(itemsId: number, checkedItem: number, listener: android.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setIconAttribute(attrId: number): androidx.appcompat.app.AlertDialog.Builder;
					public setIcon(icon: android.graphics.drawable.Drawable): androidx.appcompat.app.AlertDialog.Builder;
					public setMultiChoiceItems(itemsId: number, checkedItems: boolean[], listener: android.content.DialogInterface.OnMultiChoiceClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public show(): androidx.appcompat.app.AlertDialog;
					public setAdapter(adapter: android.widget.ListAdapter, listener: android.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public create(): androidx.appcompat.app.AlertDialog;
					public setOnDismissListener(onDismissListener: android.content.DialogInterface.OnDismissListener): androidx.appcompat.app.AlertDialog.Builder;
					public setIcon(iconId: number): androidx.appcompat.app.AlertDialog.Builder;
					public setPositiveButtonIcon(icon: android.graphics.drawable.Drawable): androidx.appcompat.app.AlertDialog.Builder;
					public setOnCancelListener(onCancelListener: android.content.DialogInterface.OnCancelListener): androidx.appcompat.app.AlertDialog.Builder;
					public setTitle(titleId: number): androidx.appcompat.app.AlertDialog.Builder;
					/** @deprecated */
					public setView(view: android.view.View, viewSpacingLeft: number, viewSpacingTop: number, viewSpacingRight: number, viewSpacingBottom: number): androidx.appcompat.app.AlertDialog.Builder;
					public setView(layoutResId: number): androidx.appcompat.app.AlertDialog.Builder;
					public setView(view: android.view.View): androidx.appcompat.app.AlertDialog.Builder;
					public setPositiveButton(textId: number, listener: android.content.DialogInterface.OnClickListener): androidx.appcompat.app.AlertDialog.Builder;
					public setCustomTitle(customTitleView: android.view.View): androidx.appcompat.app.AlertDialog.Builder;
					public setMessage(message: string): androidx.appcompat.app.AlertDialog.Builder;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatActivity extends androidx.fragment.app.FragmentActivity implements androidx.appcompat.app.AppCompatCallback, androidx.core.app.TaskStackBuilder.SupportParentable, androidx.appcompat.app.ActionBarDrawerToggle.DelegateProvider {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatActivity>;
				public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public startSupportActionMode(callback: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public onSupportNavigateUp(): boolean;
				public onActionModeStarted(mode: android.view.ActionMode): void;
				public attachBaseContext(newBase: android.content.Context): void;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onPanelClosed(featureId: number, menu: android.view.Menu): void;
				public onMenuItemSelected(featureId: number, item: android.view.MenuItem): boolean;
				public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
				public onSupportActionModeStarted(param0: androidx.appcompat.view.ActionMode): void;
				public setTheme(resId: number): void;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public onWindowStartingSupportActionMode(callback: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public supportNavigateUpTo(upIntent: android.content.Intent): void;
				public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: android.view.Menu, deviceId: number): void;
				public onTrimMemory(param0: number): void;
				public dispatchGenericMotionEvent(ev: android.view.MotionEvent): boolean;
				public setContentView(layoutResID: number): void;
				public getSupportParentActivityIntent(): android.content.Intent;
				public findViewById(id: number): android.view.View;
				public onWindowAttributesChanged(params: android.view.WindowManager.LayoutParams): void;
				public onActionModeFinished(mode: android.view.ActionMode): void;
				public addOnContextAvailableListener(param0: androidx.activity.contextaware.OnContextAvailableListener): void;
				public getOnBackPressedDispatcher(): androidx.activity.OnBackPressedDispatcher;
				public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
				public superDispatchKeyEvent(param0: android.view.KeyEvent): boolean;
				public onMenuOpened(featureId: number, menu: android.view.Menu): boolean;
				public onLocalesChanged(locales: androidx.core.os.LocaleListCompat): void;
				public onPostResume(): void;
				public onStart(): void;
				public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
				public onPostCreate(savedInstanceState: android.os.Bundle, persistentState: any): void;
				public getSupportActionBar(): androidx.appcompat.app.ActionBar;
				public onSupportActionModeStarted(mode: androidx.appcompat.view.ActionMode): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public dispatchTouchEvent(ev: android.view.MotionEvent): boolean;
				public constructor(base: android.content.Context, theme: android.content.res.Resources.Theme);
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onTrimMemory(level: number): void;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public getDelegate(): androidx.appcompat.app.AppCompatDelegate;
				public onCreatePanelView(param0: number): android.view.View;
				public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
				public onNightModeChanged(mode: number): void;
				/** @deprecated */
				public setSupportProgressBarIndeterminateVisibility(visible: boolean): void;
				public onActionModeFinished(param0: android.view.ActionMode): void;
				public setContentView(param0: number): void;
				public onRequestPermissionsResult(param0: number, param1: string[], param2: number[]): void;
				public setTheme(resid: number): void;
				public addContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public constructor(base: android.content.Context);
				public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
				public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
				public supportRequestWindowFeature(featureId: number): boolean;
				public getActivityResultRegistry(): androidx.activity.result.ActivityResultRegistry;
				public constructor(param0: number);
				public dispatchTrackballEvent(ev: android.view.MotionEvent): boolean;
				public onAttachedToWindow(): void;
				public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public onPostCreate(savedInstanceState: android.os.Bundle): void;
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
				public supportShouldUpRecreateTask(targetIntent: android.content.Intent): boolean;
				public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public constructor();
				public onConfigurationChanged(param0: android.content.res.Configuration): void;
				public openOptionsMenu(): void;
				public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
				public onSearchRequested(param0: any): boolean;
				public onWindowFocusChanged(hasFocus: boolean): void;
				public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
				public onPrepareSupportNavigateUpTaskStack(builder: androidx.core.app.TaskStackBuilder): void;
				public onPanelClosed(param0: number, param1: android.view.Menu): void;
				public setSupportActionBar(toolbar: androidx.appcompat.widget.Toolbar): void;
				/** @deprecated */
				public setSupportProgressBarVisibility(visible: boolean): void;
				public onCreateSupportNavigateUpTaskStack(builder: androidx.core.app.TaskStackBuilder): void;
				public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
				public setContentView(view: android.view.View): void;
				public onTitleChanged(title: string, color: number): void;
				/** @deprecated */
				public setSupportProgressBarIndeterminate(indeterminate: boolean): void;
				public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
				public onConfigurationChanged(newConfig: android.content.res.Configuration): void;
				public supportInvalidateOptionsMenu(): void;
				public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public onContentChanged(): void;
				public validateRequestPermissionsRequestCode(param0: number): void;
				public setContentView(param0: android.view.View): void;
				public onDetachedFromWindow(): void;
				public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
				public onSearchRequested(): boolean;
				public invalidateOptionsMenu(): void;
				public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
				public addContentView(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
				public closeOptionsMenu(): void;
				public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
				public onCreatePanelView(featureId: number): android.view.View;
				/** @deprecated */
				public setSupportProgress(progress: number): void;
				public peekAvailableContext(): android.content.Context;
				public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public onStop(): void;
				public dispatchKeyEvent(event: android.view.KeyEvent): boolean;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onWindowStartingActionMode(callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				/** @deprecated */
				public onSupportContentChanged(): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public removeOnContextAvailableListener(param0: androidx.activity.contextaware.OnContextAvailableListener): void;
				public onSupportActionModeFinished(param0: androidx.appcompat.view.ActionMode): void;
				public onActionModeStarted(param0: android.view.ActionMode): void;
				public getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
				public onWindowStartingSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;
				public setContentView(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public getMenuInflater(): android.view.MenuInflater;
				public constructor(base: android.content.Context, themeResId: number);
				public getResources(): android.content.res.Resources;
				public onSearchRequested(searchEvent: any): boolean;
				public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
				public constructor(contentLayoutId: number);
				public onDestroy(): void;
				public onWindowFocusChanged(param0: boolean): void;
				public onSupportActionModeFinished(mode: androidx.appcompat.view.ActionMode): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatCallback extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatCallback>;
				/**
				 * Constructs a new instance of the androidx.appcompat.app.AppCompatCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSupportActionModeStarted(param0: androidx.appcompat.view.ActionMode): void;
					onSupportActionModeFinished(param0: androidx.appcompat.view.ActionMode): void;
					onWindowStartingSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				});
				public constructor();
				public onWindowStartingSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public onSupportActionModeStarted(param0: androidx.appcompat.view.ActionMode): void;
				public onSupportActionModeFinished(param0: androidx.appcompat.view.ActionMode): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export abstract class AppCompatDelegate extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegate>;
				public static MODE_NIGHT_FOLLOW_SYSTEM: number;
				public static MODE_NIGHT_AUTO_TIME: number;
				public static MODE_NIGHT_AUTO: number;
				public static MODE_NIGHT_NO: number;
				public static MODE_NIGHT_YES: number;
				public static MODE_NIGHT_AUTO_BATTERY: number;
				public static MODE_NIGHT_UNSPECIFIED: number;
				public static FEATURE_SUPPORT_ACTION_BAR: number;
				public static FEATURE_SUPPORT_ACTION_BAR_OVERLAY: number;
				public static FEATURE_ACTION_MODE_OVERLAY: number;
				public setSupportActionBar(param0: androidx.appcompat.widget.Toolbar): void;
				public invalidateOptionsMenu(): void;
				public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public requestWindowFeature(param0: number): boolean;
				public createView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
				public onSaveInstanceState(param0: android.os.Bundle): void;
				public static create(context: android.content.Context, activity: android.app.Activity, callback: androidx.appcompat.app.AppCompatCallback): androidx.appcompat.app.AppCompatDelegate;
				public setHandleNativeActionModesEnabled(param0: boolean): void;
				public static isCompatVectorFromResourcesEnabled(): boolean;
				public static getDefaultNightMode(): number;
				public static create(activity: android.app.Activity, callback: androidx.appcompat.app.AppCompatCallback): androidx.appcompat.app.AppCompatDelegate;
				public isHandleNativeActionModesEnabled(): boolean;
				public getContextForDelegate(): android.content.Context;
				public setTitle(param0: string): void;
				public onConfigurationChanged(param0: android.content.res.Configuration): void;
				public setTheme(themeResId: number): void;
				public onCreate(param0: android.os.Bundle): void;
				/** @deprecated */
				public attachBaseContext(context: android.content.Context): void;
				public applyDayNight(): boolean;
				public static getApplicationLocales(): androidx.core.os.LocaleListCompat;
				public static create(dialog: android.app.Dialog, callback: androidx.appcompat.app.AppCompatCallback): androidx.appcompat.app.AppCompatDelegate;
				public hasWindowFeature(param0: number): boolean;
				public onStop(): void;
				public findViewById(param0: number): android.view.View;
				public static setApplicationLocales(locales: androidx.core.os.LocaleListCompat): void;
				public onPostCreate(param0: android.os.Bundle): void;
				public setOnBackInvokedDispatcher(dispatcher: android.window.OnBackInvokedDispatcher): void;
				public setLocalNightMode(param0: number): void;
				public getLocalNightMode(): number;
				public getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
				public setContentView(param0: number): void;
				public static create(context: android.content.Context, window: android.view.Window, callback: androidx.appcompat.app.AppCompatCallback): androidx.appcompat.app.AppCompatDelegate;
				public addContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public getMenuInflater(): android.view.MenuInflater;
				public static setCompatVectorFromResourcesEnabled(enabled: boolean): void;
				public installViewFactory(): void;
				public onStart(): void;
				public onPostResume(): void;
				public attachBaseContext2(context: android.content.Context): android.content.Context;
				public setContentView(param0: android.view.View): void;
				public getSupportActionBar(): androidx.appcompat.app.ActionBar;
				public onDestroy(): void;
				public startSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public static setDefaultNightMode(mode: number): void;
			}
			export module AppCompatDelegate {
				export class Api24Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegate.Api24Impl>;
				}
				export class Api33Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegate.Api33Impl>;
				}
				export class NightMode extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegate.NightMode>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.AppCompatDelegate$NightMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatDelegateImpl extends androidx.appcompat.app.AppCompatDelegate implements androidx.appcompat.view.menu.MenuBuilder.Callback, android.view.LayoutInflater.Factory2 {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl>;
				public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public requestWindowFeature(param0: number): boolean;
				public onPostCreate(savedInstanceState: android.os.Bundle): void;
				public startSupportActionMode(callback: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public onSaveInstanceState(param0: android.os.Bundle): void;
				public onCreateView(name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
				public isHandleNativeActionModesEnabled(): boolean;
				public getContextForDelegate(): android.content.Context;
				public setTitle(param0: string): void;
				public onMenuItemSelected(menu: androidx.appcompat.view.menu.MenuBuilder, item: android.view.MenuItem): boolean;
				public onConfigurationChanged(param0: android.content.res.Configuration): void;
				public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
				public getPanelState(featureId: number, required: boolean): androidx.appcompat.app.AppCompatDelegateImpl.PanelFeatureState;
				public onCreate(savedInstanceState: android.os.Bundle): void;
				public setHandleNativeActionModesEnabled(enabled: boolean): void;
				public setSupportActionBar(toolbar: androidx.appcompat.widget.Toolbar): void;
				public findViewById(param0: number): android.view.View;
				public onPostCreate(param0: android.os.Bundle): void;
				public getLocalNightMode(): number;
				public onCreateView(parent: android.view.View, name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
				public setContentView(v: android.view.View): void;
				public findViewById(id: number): android.view.View;
				public onConfigurationChanged(newConfig: android.content.res.Configuration): void;
				public addContentView(v: android.view.View, lp: android.view.ViewGroup.LayoutParams): void;
				public onSaveInstanceState(outState: android.os.Bundle): void;
				public setLocalNightMode(mode: number): void;
				public onStart(): void;
				public onPostResume(): void;
				public requestWindowFeature(featureId: number): boolean;
				public setContentView(param0: android.view.View): void;
				public getSupportActionBar(): androidx.appcompat.app.ActionBar;
				public onMenuModeChange(menu: androidx.appcompat.view.menu.MenuBuilder): void;
				public setSupportActionBar(param0: androidx.appcompat.widget.Toolbar): void;
				public invalidateOptionsMenu(): void;
				public createView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
				public setHandleNativeActionModesEnabled(param0: boolean): void;
				public hasWindowFeature(featureId: number): boolean;
				public createView(parent: android.view.View, name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
				public attachBaseContext2(baseContext: android.content.Context): android.content.Context;
				public setContentView(v: android.view.View, lp: android.view.ViewGroup.LayoutParams): void;
				public setTheme(themeResId: number): void;
				public onCreate(param0: android.os.Bundle): void;
				public applyDayNight(): boolean;
				public hasWindowFeature(param0: number): boolean;
				public onStop(): void;
				public setTitle(title: string): void;
				public setOnBackInvokedDispatcher(dispatcher: android.window.OnBackInvokedDispatcher): void;
				public setContentView(resId: number): void;
				public setLocalNightMode(param0: number): void;
				public getDrawerToggleDelegate(): androidx.appcompat.app.ActionBarDrawerToggle.Delegate;
				public setContentView(param0: number): void;
				public onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;
				public addContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public getMenuInflater(): android.view.MenuInflater;
				public installViewFactory(): void;
				public onMenuModeChange(param0: androidx.appcompat.view.menu.MenuBuilder): void;
				public attachBaseContext2(context: android.content.Context): android.content.Context;
				public onMenuItemSelected(param0: androidx.appcompat.view.menu.MenuBuilder, param1: android.view.MenuItem): boolean;
				public onDestroy(): void;
				public startSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
			}
			export module AppCompatDelegateImpl {
				export class ActionBarDrawableToggleImpl extends java.lang.Object implements androidx.appcompat.app.ActionBarDrawerToggle.Delegate {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.ActionBarDrawableToggleImpl>;
					public setActionBarUpIndicator(upDrawable: android.graphics.drawable.Drawable, contentDescRes: number): void;
					public setActionBarUpIndicator(param0: android.graphics.drawable.Drawable, param1: number): void;
					public setActionBarDescription(contentDescRes: number): void;
					public isNavigationVisible(): boolean;
					public getActionBarThemedContext(): android.content.Context;
					public getThemeUpIndicator(): android.graphics.drawable.Drawable;
					public setActionBarDescription(param0: number): void;
				}
				export class ActionBarMenuCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.ActionBarMenuCallback>;
					/**
					 * Constructs a new instance of the androidx.appcompat.app.AppCompatDelegateImpl$ActionBarMenuCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPreparePanel(param0: number): boolean;
						onCreatePanelView(param0: number): android.view.View;
					});
					public constructor();
					public onCreatePanelView(param0: number): android.view.View;
					public onPreparePanel(param0: number): boolean;
				}
				export class ActionMenuPresenterCallback extends java.lang.Object implements androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.ActionMenuPresenterCallback>;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public onOpenSubMenu(subMenu: androidx.appcompat.view.menu.MenuBuilder): boolean;
				}
				export class ActionModeCallbackWrapperV9 extends java.lang.Object implements androidx.appcompat.view.ActionMode.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.ActionModeCallbackWrapperV9>;
					public onDestroyActionMode(param0: androidx.appcompat.view.ActionMode): void;
					public constructor(this$0: androidx.appcompat.app.AppCompatDelegateImpl, wrapped: androidx.appcompat.view.ActionMode.Callback);
					public onActionItemClicked(mode: androidx.appcompat.view.ActionMode, item: android.view.MenuItem): boolean;
					public onDestroyActionMode(mode: androidx.appcompat.view.ActionMode): void;
					public onCreateActionMode(param0: androidx.appcompat.view.ActionMode, param1: android.view.Menu): boolean;
					public onPrepareActionMode(mode: androidx.appcompat.view.ActionMode, menu: android.view.Menu): boolean;
					public onPrepareActionMode(param0: androidx.appcompat.view.ActionMode, param1: android.view.Menu): boolean;
					public onCreateActionMode(mode: androidx.appcompat.view.ActionMode, menu: android.view.Menu): boolean;
					public onActionItemClicked(param0: androidx.appcompat.view.ActionMode, param1: android.view.MenuItem): boolean;
				}
				export class Api17Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.Api17Impl>;
				}
				export class Api21Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.Api21Impl>;
				}
				export class Api24Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.Api24Impl>;
					public static setDefaultLocales(locales: androidx.core.os.LocaleListCompat): void;
				}
				export class Api26Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.Api26Impl>;
				}
				export class Api33Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.Api33Impl>;
				}
				export class AppCompatWindowCallback extends androidx.appcompat.view.WindowCallbackWrapper {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.AppCompatWindowCallback>;
					public dispatchTrackballEvent(event: android.view.MotionEvent): boolean;
					public onSearchRequested(): boolean;
					public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
					public onAttachedToWindow(): void;
					public onSearchRequested(searchEvent: any): boolean;
					public onPanelClosed(featureId: number, menu: android.view.Menu): void;
					public bypassOnPanelClosed(c: android.view.Window.Callback, featureId: number, menu: android.view.Menu): void;
					public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
					public dispatchKeyShortcutEvent(event: android.view.KeyEvent): boolean;
					public onPreparePanel(featureId: number, view: android.view.View, menu: android.view.Menu): boolean;
					public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
					public onSearchRequested(param0: any): boolean;
					public onCreatePanelView(featureId: number): android.view.View;
					public dispatchTouchEvent(event: android.view.MotionEvent): boolean;
					public dispatchGenericMotionEvent(event: android.view.MotionEvent): boolean;
					public onActionModeStarted(mode: android.view.ActionMode): void;
					public onMenuItemSelected(featureId: number, item: android.view.MenuItem): boolean;
					public onMenuOpened(featureId: number, menu: android.view.Menu): boolean;
					public onCreatePanelMenu(featureId: number, menu: android.view.Menu): boolean;
					public onDetachedFromWindow(): void;
					public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
					public onCreatePanelView(param0: number): android.view.View;
					public onActionModeFinished(param0: android.view.ActionMode): void;
					public dispatchKeyEvent(event: android.view.KeyEvent): boolean;
					public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
					public onActionModeStarted(param0: android.view.ActionMode): void;
					public onActionModeFinished(mode: android.view.ActionMode): void;
					public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
					public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
					public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
					public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
					public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
					public bypassDispatchKeyEvent(c: android.view.Window.Callback, e: android.view.KeyEvent): boolean;
					public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: android.view.Menu, deviceId: number): void;
					public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
					public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
					public onWindowFocusChanged(hasFocus: boolean): void;
					public onPanelClosed(param0: number, param1: android.view.Menu): void;
					public bypassOnContentChanged(c: android.view.Window.Callback): void;
					public onWindowAttributesChanged(attrs: android.view.WindowManager.LayoutParams): void;
					public onWindowFocusChanged(param0: boolean): void;
					public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
					public onContentChanged(): void;
					public onWindowStartingActionMode(callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
					public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
					public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
				}
				export class AutoBatteryNightModeManager extends androidx.appcompat.app.AppCompatDelegateImpl.AutoNightModeManager {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.AutoBatteryNightModeManager>;
					public getApplyableNightMode(): number;
					public onChange(): void;
				}
				export abstract class AutoNightModeManager extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.AutoNightModeManager>;
				}
				export class AutoTimeNightModeManager extends androidx.appcompat.app.AppCompatDelegateImpl.AutoNightModeManager {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.AutoTimeNightModeManager>;
					public getApplyableNightMode(): number;
					public onChange(): void;
				}
				export class ContextThemeWrapperCompatApi17Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.ContextThemeWrapperCompatApi17Impl>;
				}
				export class ListMenuDecorView extends androidx.appcompat.widget.ContentFrameLayout {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.ListMenuDecorView>;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public constructor(param0: androidx.appcompat.app.AppCompatDelegateImpl, context: android.content.Context);
					public focusableViewAvailable(v: android.view.View): void;
					public isTextDirectionResolved(): boolean;
					public showContextMenuForChild(param0: android.view.View): boolean;
					public onStopNestedScroll(child: android.view.View): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
					public recomputeViewAttributes(child: android.view.View): void;
					public addView(child: android.view.View, index: number): void;
					public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public getLayoutDirection(): number;
					public getParentForAccessibility(): android.view.ViewParent;
					public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
					public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
					public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
					public createContextMenu(param0: android.view.ContextMenu): void;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public childDrawableStateChanged(param0: android.view.View): void;
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public isTextAlignmentResolved(): boolean;
					public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public requestChildFocus(child: android.view.View, focused: android.view.View): void;
					public canResolveTextAlignment(): boolean;
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
					public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
					public showContextMenuForChild(originalView: android.view.View): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
					public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
					public sendAccessibilityEvent(param0: number): void;
					public requestLayout(): void;
					public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public getTextAlignment(): number;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
					public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
					public focusSearch(param0: android.view.View, param1: number): android.view.View;
					public bringChildToFront(child: android.view.View): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
					public isLayoutRequested(): boolean;
					public clearChildFocus(param0: android.view.View): void;
					public clearChildFocus(child: android.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public isLayoutDirectionResolved(): boolean;
					public focusSearch(focused: android.view.View, direction: number): android.view.View;
					public addView(child: android.view.View): void;
					public addView(child: android.view.View, width: number, height: number): void;
					public removeView(view: android.view.View): void;
					public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
					public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
					public bringChildToFront(param0: android.view.View): void;
					public constructor(context: android.content.Context);
					public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
					public onInterceptTouchEvent(ev: android.view.MotionEvent): boolean;
					public onInterceptTouchEvent(event: android.view.MotionEvent): boolean;
					public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
					public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
					public getTextDirection(): number;
					public requestFitSystemWindows(): void;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public requestTransparentRegion(param0: android.view.View): void;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
					public canResolveTextDirection(): boolean;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public getParent(): android.view.ViewParent;
					public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
					public createContextMenu(menu: android.view.ContextMenu): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public onStopNestedScroll(param0: android.view.View): void;
					public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public dispatchKeyEvent(event: android.view.KeyEvent): boolean;
					public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
					public canResolveLayoutDirection(): boolean;
					public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
					public requestTransparentRegion(child: android.view.View): void;
					public removeView(param0: android.view.View): void;
					public childDrawableStateChanged(child: android.view.View): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public recomputeViewAttributes(param0: android.view.View): void;
					public focusableViewAvailable(param0: android.view.View): void;
					public focusSearch(direction: number): android.view.View;
					public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
					public setBackgroundResource(resid: number): void;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				}
				export class PanelFeatureState extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.PanelFeatureState>;
					public qwertyMode: boolean;
					public hasPanelItems(): boolean;
					public clearMenuPresenters(): void;
				}
				export module PanelFeatureState {
					export class SavedState extends java.lang.Object implements android.os.Parcelable {
						public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.PanelFeatureState.SavedState>;
						public static CREATOR: android.os.Parcelable.Creator<androidx.appcompat.app.AppCompatDelegateImpl.PanelFeatureState.SavedState>;
						public writeToParcel(dest: android.os.Parcel, flags: number): void;
						public describeContents(): number;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
					}
				}
				export class PanelMenuPresenterCallback extends java.lang.Object implements androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatDelegateImpl.PanelMenuPresenterCallback>;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public onOpenSubMenu(subMenu: androidx.appcompat.view.menu.MenuBuilder): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatDialog implements androidx.appcompat.app.AppCompatCallback {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatDialog>;
				public invalidateOptionsMenu(): void;
				public setTitle(titleId: number): void;
				public constructor(context: android.content.Context, cancelable: boolean, cancelListener: android.content.DialogInterface.OnCancelListener);
				public setContentView(layoutResID: number): void;
				public setContentView(view: android.view.View): void;
				public constructor(context: android.content.Context);
				public addContentView(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public findViewById(id: number): android.view.View;
				public onWindowStartingSupportActionMode(param0: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public onSupportActionModeStarted(param0: androidx.appcompat.view.ActionMode): void;
				public setContentView(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public dismiss(): void;
				public onWindowStartingSupportActionMode(callback: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public getDelegate(): androidx.appcompat.app.AppCompatDelegate;
				public constructor(context: android.content.Context, theme: number);
				public supportRequestWindowFeature(featureId: number): boolean;
				public onCreate(savedInstanceState: android.os.Bundle): void;
				public getSupportActionBar(): androidx.appcompat.app.ActionBar;
				public onStop(): void;
				public onSupportActionModeStarted(mode: androidx.appcompat.view.ActionMode): void;
				public setTitle(title: string): void;
				public dispatchKeyEvent(event: android.view.KeyEvent): boolean;
				public onSupportActionModeFinished(mode: androidx.appcompat.view.ActionMode): void;
				public onSupportActionModeFinished(param0: androidx.appcompat.view.ActionMode): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatDialogFragment extends androidx.fragment.app.DialogFragment {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatDialogFragment>;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public setupDialog(param0: android.app.Dialog, param1: number): void;
				public onLowMemory(): void;
				public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public onCreateDialog(param0: android.os.Bundle): android.app.Dialog;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public onConfigurationChanged(param0: android.content.res.Configuration): void;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
				public onCreateDialog(savedInstanceState: android.os.Bundle): android.app.Dialog;
				public setupDialog(dialog: android.app.Dialog, style: number): void;
				public constructor(param0: number);
				public constructor(contentLayoutId: number);
				public onDismiss(param0: android.content.DialogInterface): void;
				public onCancel(param0: android.content.DialogInterface): void;
				public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
				public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppCompatViewInflater extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.app.AppCompatViewInflater>;
				public createCheckedTextView(context: android.content.Context, attrs: android.util.AttributeSet): androidx.appcompat.widget.AppCompatCheckedTextView;
				public createSeekBar(context: android.content.Context, attrs: android.util.AttributeSet): androidx.appcompat.widget.AppCompatSeekBar;
				public createImageView(context: android.content.Context, attrs: android.util.AttributeSet): androidx.appcompat.widget.AppCompatImageView;
				public createButton(context: android.content.Context, attrs: android.util.AttributeSet): androidx.appcompat.widget.AppCompatButton;
				public createSpinner(context: android.content.Context, attrs: android.util.AttributeSet): androidx.appcompat.widget.AppCompatSpinner;
				public createView(parent: android.view.View, name: string, context: android.content.Context, attrs: android.util.AttributeSet, inheritContext: boolean, readAndroidTheme: boolean, readAppTheme: boolean, wrapContext: boolean): android.view.View;
				public createMultiAutoCompleteTextView(context: android.content.Context, attrs: android.util.AttributeSet): androidx.appcompat.widget.AppCompatMultiAutoCompleteTextView;
				public constructor();
				public createView(context: android.content.Context, name: string, attrs: android.util.AttributeSet): android.view.View;
				public createImageButton(context: android.content.Context, attrs: android.util.AttributeSet): androidx.appcompat.widget.AppCompatImageButton;
				public createTextView(context: android.content.Context, attrs: android.util.AttributeSet): androidx.appcompat.widget.AppCompatTextView;
				public createToggleButton(context: android.content.Context, attrs: android.util.AttributeSet): androidx.appcompat.widget.AppCompatToggleButton;
				public createEditText(context: android.content.Context, attrs: android.util.AttributeSet): androidx.appcompat.widget.AppCompatEditText;
				public createCheckBox(context: android.content.Context, attrs: android.util.AttributeSet): androidx.appcompat.widget.AppCompatCheckBox;
				public createRadioButton(context: android.content.Context, attrs: android.util.AttributeSet): androidx.appcompat.widget.AppCompatRadioButton;
				public createAutoCompleteTextView(context: android.content.Context, attrs: android.util.AttributeSet): androidx.appcompat.widget.AppCompatAutoCompleteTextView;
				public createRatingBar(context: android.content.Context, attrs: android.util.AttributeSet): androidx.appcompat.widget.AppCompatRatingBar;
			}
			export module AppCompatViewInflater {
				export class DeclaredOnClickListener extends java.lang.Object implements android.view.View.OnClickListener {
					public static class: java.lang.Class<androidx.appcompat.app.AppCompatViewInflater.DeclaredOnClickListener>;
					public constructor(hostView: android.view.View, methodName: string);
					public onClick(v: android.view.View): void;
					public onClick(param0: android.view.View): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppLocalesMetadataHolderService extends android.app.Service {
				public static class: java.lang.Class<androidx.appcompat.app.AppLocalesMetadataHolderService>;
				public onTrimMemory(level: number): void;
				public onBind(param0: android.content.Intent): android.os.IBinder;
				public onBind(intent: android.content.Intent): android.os.IBinder;
				public onTrimMemory(param0: number): void;
				public static getServiceInfo(context: android.content.Context): android.content.pm.ServiceInfo;
				public constructor();
				public constructor(base: android.content.Context);
			}
			export module AppLocalesMetadataHolderService {
				export class Api24Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.AppLocalesMetadataHolderService.Api24Impl>;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class AppLocalesStorageHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.app.AppLocalesStorageHelper>;
			}
			export module AppLocalesStorageHelper {
				export class SerialExecutor extends java.lang.Object implements java.util.concurrent.Executor {
					public static class: java.lang.Class<androidx.appcompat.app.AppLocalesStorageHelper.SerialExecutor>;
					public execute(r: java.lang.Runnable): void;
					public execute(param0: java.lang.Runnable): void;
					public scheduleNext(): void;
				}
				export class ThreadPerTaskExecutor extends java.lang.Object implements java.util.concurrent.Executor {
					public static class: java.lang.Class<androidx.appcompat.app.AppLocalesStorageHelper.ThreadPerTaskExecutor>;
					public execute(r: java.lang.Runnable): void;
					public execute(param0: java.lang.Runnable): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class LayoutIncludeDetector extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.app.LayoutIncludeDetector>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class LocaleOverlayHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.app.LocaleOverlayHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class NavItemSelectedListener extends java.lang.Object implements android.widget.AdapterView.OnItemSelectedListener {
				public static class: java.lang.Class<androidx.appcompat.app.NavItemSelectedListener>;
				public onItemSelected(param0: android.widget.AdapterView<any>, param1: android.view.View, param2: number, param3: number): void;
				public onNothingSelected(param0: android.widget.AdapterView<any>): void;
				public constructor(listener: androidx.appcompat.app.ActionBar.OnNavigationListener);
				public onNothingSelected(parent: android.widget.AdapterView<any>): void;
				public onItemSelected(parent: android.widget.AdapterView<any>, view: android.view.View, position: number, id: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class ResourcesFlusher extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.app.ResourcesFlusher>;
			}
			export module ResourcesFlusher {
				export class Api16Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.ResourcesFlusher.Api16Impl>;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class ToolbarActionBar extends androidx.appcompat.app.ActionBar {
				public static class: java.lang.Class<androidx.appcompat.app.ToolbarActionBar>;
				public setLogo(logo: android.graphics.drawable.Drawable): void;
				/** @deprecated */
				public setNavigationMode(param0: number): void;
				public getHeight(): number;
				public setDisplayOptions(options: number): void;
				public setDisplayOptions(options: number, mask: number): void;
				/** @deprecated */
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: number, param2: boolean): void;
				public setIcon(param0: number): void;
				public setTitle(param0: string): void;
				/** @deprecated */
				public removeTabAt(param0: number): void;
				public show(): void;
				public removeTab(tab: androidx.appcompat.app.ActionBar.Tab): void;
				public setDisplayShowHomeEnabled(param0: boolean): void;
				/** @deprecated */
				public getNavigationItemCount(): number;
				public onKeyShortcut(keyCode: number, ev: android.view.KeyEvent): boolean;
				/** @deprecated */
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public setCustomView(resId: number): void;
				public setIcon(icon: android.graphics.drawable.Drawable): void;
				/** @deprecated */
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: number): void;
				public getCustomView(): android.view.View;
				public setDisplayShowTitleEnabled(showTitle: boolean): void;
				public setDisplayOptions(param0: number): void;
				public setDisplayUseLogoEnabled(param0: boolean): void;
				public onMenuKeyEvent(event: android.view.KeyEvent): boolean;
				public addOnMenuVisibilityListener(param0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				/** @deprecated */
				public getTabAt(param0: number): androidx.appcompat.app.ActionBar.Tab;
				public setDefaultDisplayHomeAsUpEnabled(enabled: boolean): void;
				public setSubtitle(param0: string): void;
				public openOptionsMenu(): boolean;
				public getThemedContext(): android.content.Context;
				public setSplitBackgroundDrawable(d: android.graphics.drawable.Drawable): void;
				public setLogo(param0: number): void;
				public getElevation(): number;
				public getSubtitle(): string;
				public removeAllTabs(): void;
				public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
				public dispatchMenuVisibilityChanged(isVisible: boolean): void;
				public removeOnMenuVisibilityListener(param0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				/** @deprecated */
				public getNavigationMode(): number;
				public addOnMenuVisibilityListener(listener: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public setDisplayShowCustomEnabled(showCustom: boolean): void;
				public setHomeActionContentDescription(resId: number): void;
				public setIcon(param0: android.graphics.drawable.Drawable): void;
				public setStackedBackgroundDrawable(d: android.graphics.drawable.Drawable): void;
				public setLogo(resId: number): void;
				public getSelectedNavigationIndex(): number;
				public setDisplayHomeAsUpEnabled(param0: boolean): void;
				public setDisplayShowTitleEnabled(param0: boolean): void;
				public setDisplayHomeAsUpEnabled(showHomeAsUp: boolean): void;
				/** @deprecated */
				public setListNavigationCallbacks(param0: android.widget.SpinnerAdapter, param1: androidx.appcompat.app.ActionBar.OnNavigationListener): void;
				public setTitle(resId: number): void;
				public setDisplayShowHomeEnabled(showHome: boolean): void;
				public isTitleTruncated(): boolean;
				/** @deprecated */
				public selectTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public getTitle(): string;
				/** @deprecated */
				public setSelectedNavigationItem(param0: number): void;
				public setSubtitle(subtitle: string): void;
				public hide(): void;
				public addTab(tab: androidx.appcompat.app.ActionBar.Tab): void;
				/** @deprecated */
				public newTab(): androidx.appcompat.app.ActionBar.Tab;
				public setDisplayOptions(param0: number, param1: number): void;
				public setDisplayUseLogoEnabled(useLogo: boolean): void;
				public setCustomView(param0: android.view.View, param1: androidx.appcompat.app.ActionBar.LayoutParams): void;
				public removeTabAt(position: number): void;
				public setIcon(resId: number): void;
				public setCustomView(view: android.view.View): void;
				public setHomeButtonEnabled(enabled: boolean): void;
				public isShowing(): boolean;
				public setTitle(param0: number): void;
				public setCustomView(param0: number): void;
				public setHomeAsUpIndicator(indicator: android.graphics.drawable.Drawable): void;
				public newTab(): androidx.appcompat.app.ActionBar.Tab;
				public invalidateOptionsMenu(): boolean;
				public setElevation(elevation: number): void;
				public setShowHideAnimationEnabled(enabled: boolean): void;
				public getSelectedTab(): androidx.appcompat.app.ActionBar.Tab;
				public setHomeAsUpIndicator(resId: number): void;
				public setListNavigationCallbacks(adapter: android.widget.SpinnerAdapter, callback: androidx.appcompat.app.ActionBar.OnNavigationListener): void;
				/** @deprecated */
				public getSelectedTab(): androidx.appcompat.app.ActionBar.Tab;
				/** @deprecated */
				public getSelectedNavigationIndex(): number;
				/** @deprecated */
				public removeTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public setSubtitle(param0: number): void;
				public setLogo(param0: android.graphics.drawable.Drawable): void;
				public getNavigationMode(): number;
				/** @deprecated */
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: boolean): void;
				public setBackgroundDrawable(d: android.graphics.drawable.Drawable): void;
				public getDisplayOptions(): number;
				/** @deprecated */
				public getTabCount(): number;
				public setSelectedNavigationItem(position: number): void;
				public addTab(tab: androidx.appcompat.app.ActionBar.Tab, position: number, setSelected: boolean): void;
				public getTabAt(index: number): androidx.appcompat.app.ActionBar.Tab;
				public closeOptionsMenu(): boolean;
				public setTitle(title: string): void;
				public getTabCount(): number;
				public setDisplayShowCustomEnabled(param0: boolean): void;
				public requestFocus(): boolean;
				public collapseActionView(): boolean;
				public setCustomView(param0: android.view.View): void;
				public getNavigationItemCount(): number;
				/** @deprecated */
				public removeAllTabs(): void;
				public dispatchMenuVisibilityChanged(visible: boolean): void;
				public addTab(tab: androidx.appcompat.app.ActionBar.Tab, position: number): void;
				public setSubtitle(resId: number): void;
				public selectTab(tab: androidx.appcompat.app.ActionBar.Tab): void;
				public removeOnMenuVisibilityListener(listener: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public setCustomView(view: android.view.View, layoutParams: androidx.appcompat.app.ActionBar.LayoutParams): void;
				public setHomeActionContentDescription(description: string): void;
				public setNavigationMode(mode: number): void;
				public addTab(tab: androidx.appcompat.app.ActionBar.Tab, setSelected: boolean): void;
				public onConfigurationChanged(config: android.content.res.Configuration): void;
				public setWindowTitle(title: string): void;
			}
			export module ToolbarActionBar {
				export class ActionMenuPresenterCallback extends java.lang.Object implements androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.ToolbarActionBar.ActionMenuPresenterCallback>;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public onOpenSubMenu(subMenu: androidx.appcompat.view.menu.MenuBuilder): boolean;
				}
				export class MenuBuilderCallback extends java.lang.Object implements androidx.appcompat.view.menu.MenuBuilder.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.ToolbarActionBar.MenuBuilderCallback>;
					public onMenuItemSelected(menu: androidx.appcompat.view.menu.MenuBuilder, item: android.view.MenuItem): boolean;
					public onMenuItemSelected(param0: androidx.appcompat.view.menu.MenuBuilder, param1: android.view.MenuItem): boolean;
					public onMenuModeChange(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public onMenuModeChange(menu: androidx.appcompat.view.menu.MenuBuilder): void;
				}
				export class ToolbarMenuCallback extends java.lang.Object implements androidx.appcompat.app.AppCompatDelegateImpl.ActionBarMenuCallback {
					public static class: java.lang.Class<androidx.appcompat.app.ToolbarActionBar.ToolbarMenuCallback>;
					public onCreatePanelView(param0: number): android.view.View;
					public onCreatePanelView(featureId: number): android.view.View;
					public onPreparePanel(featureId: number): boolean;
					public onPreparePanel(param0: number): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class TwilightCalculator extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.app.TwilightCalculator>;
				public static DAY: number;
				public static NIGHT: number;
				public sunset: number;
				public sunrise: number;
				public state: number;
				public calculateTwilight(time: number, param1: number, latitude: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class TwilightManager extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.app.TwilightManager>;
			}
			export module TwilightManager {
				export class TwilightState extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.app.TwilightManager.TwilightState>;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module app {
			export class WindowDecorActionBar extends androidx.appcompat.app.ActionBar implements androidx.appcompat.widget.ActionBarOverlayLayout.ActionBarVisibilityCallback {
				public static class: java.lang.Class<androidx.appcompat.app.WindowDecorActionBar>;
				public constructor(activity: android.app.Activity, overlayMode: boolean);
				public setLogo(logo: android.graphics.drawable.Drawable): void;
				/** @deprecated */
				public setNavigationMode(param0: number): void;
				public getHeight(): number;
				public setDisplayOptions(options: number): void;
				public setDisplayOptions(options: number, mask: number): void;
				public onContentScrollStopped(): void;
				public showForSystem(): void;
				/** @deprecated */
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: number, param2: boolean): void;
				public setIcon(param0: number): void;
				public setTitle(param0: string): void;
				/** @deprecated */
				public removeTabAt(param0: number): void;
				public show(): void;
				public removeTab(tab: androidx.appcompat.app.ActionBar.Tab): void;
				public setDisplayShowHomeEnabled(param0: boolean): void;
				public enableContentAnimations(param0: boolean): void;
				/** @deprecated */
				public getNavigationItemCount(): number;
				public onKeyShortcut(keyCode: number, ev: android.view.KeyEvent): boolean;
				public constructor(dialog: android.app.Dialog);
				/** @deprecated */
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public setCustomView(resId: number): void;
				/** @deprecated */
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: number): void;
				public setIcon(icon: android.graphics.drawable.Drawable): void;
				public getCustomView(): android.view.View;
				public setDisplayShowTitleEnabled(showTitle: boolean): void;
				public setDisplayOptions(param0: number): void;
				public onWindowVisibilityChanged(visibility: number): void;
				public setDisplayUseLogoEnabled(param0: boolean): void;
				public setDefaultDisplayHomeAsUpEnabled(enable: boolean): void;
				public addOnMenuVisibilityListener(param0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				/** @deprecated */
				public getTabAt(param0: number): androidx.appcompat.app.ActionBar.Tab;
				public enableContentAnimations(enabled: boolean): void;
				public setSubtitle(param0: string): void;
				public setDefaultDisplayHomeAsUpEnabled(enabled: boolean): void;
				public doHide(fromSystem: boolean): void;
				public getThemedContext(): android.content.Context;
				public setSplitBackgroundDrawable(d: android.graphics.drawable.Drawable): void;
				public getElevation(): number;
				public setLogo(param0: number): void;
				public getSubtitle(): string;
				public removeAllTabs(): void;
				public onContentScrollStarted(): void;
				public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
				public dispatchMenuVisibilityChanged(isVisible: boolean): void;
				public removeOnMenuVisibilityListener(param0: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public startActionMode(callback: androidx.appcompat.view.ActionMode.Callback): androidx.appcompat.view.ActionMode;
				public getHideOffset(): number;
				/** @deprecated */
				public getNavigationMode(): number;
				public addOnMenuVisibilityListener(listener: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public setDisplayShowCustomEnabled(showCustom: boolean): void;
				public setHomeActionContentDescription(resId: number): void;
				public setIcon(param0: android.graphics.drawable.Drawable): void;
				public setStackedBackgroundDrawable(d: android.graphics.drawable.Drawable): void;
				public setLogo(resId: number): void;
				public getSelectedNavigationIndex(): number;
				public setDisplayHomeAsUpEnabled(param0: boolean): void;
				public setDisplayShowTitleEnabled(param0: boolean): void;
				public onKeyShortcut(keyCode: number, event: android.view.KeyEvent): boolean;
				public setDisplayHomeAsUpEnabled(showHomeAsUp: boolean): void;
				public setTitle(resId: number): void;
				/** @deprecated */
				public setListNavigationCallbacks(param0: android.widget.SpinnerAdapter, param1: androidx.appcompat.app.ActionBar.OnNavigationListener): void;
				public setDisplayShowHomeEnabled(showHome: boolean): void;
				public isTitleTruncated(): boolean;
				public setHideOnContentScrollEnabled(hideOnContentScroll: boolean): void;
				/** @deprecated */
				public selectTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				public getTitle(): string;
				public hasIcon(): boolean;
				/** @deprecated */
				public setSelectedNavigationItem(param0: number): void;
				public setSubtitle(subtitle: string): void;
				public hide(): void;
				public addTab(tab: androidx.appcompat.app.ActionBar.Tab): void;
				/** @deprecated */
				public newTab(): androidx.appcompat.app.ActionBar.Tab;
				public setDisplayOptions(param0: number, param1: number): void;
				public setHomeButtonEnabled(enable: boolean): void;
				public hasLogo(): boolean;
				public setDisplayUseLogoEnabled(useLogo: boolean): void;
				public setCustomView(param0: android.view.View, param1: androidx.appcompat.app.ActionBar.LayoutParams): void;
				public removeTabAt(position: number): void;
				public setIcon(resId: number): void;
				public constructor();
				public setHomeButtonEnabled(enabled: boolean): void;
				public setCustomView(view: android.view.View): void;
				public isShowing(): boolean;
				public setTitle(param0: number): void;
				public setCustomView(param0: number): void;
				public newTab(): androidx.appcompat.app.ActionBar.Tab;
				public setHomeAsUpIndicator(indicator: android.graphics.drawable.Drawable): void;
				public animateToMode(toActionMode: boolean): void;
				public setElevation(elevation: number): void;
				public setShowHideAnimationEnabled(enabled: boolean): void;
				public onConfigurationChanged(newConfig: android.content.res.Configuration): void;
				public getSelectedTab(): androidx.appcompat.app.ActionBar.Tab;
				public setHomeAsUpIndicator(resId: number): void;
				public onWindowVisibilityChanged(param0: number): void;
				/** @deprecated */
				public getSelectedTab(): androidx.appcompat.app.ActionBar.Tab;
				public setListNavigationCallbacks(adapter: android.widget.SpinnerAdapter, callback: androidx.appcompat.app.ActionBar.OnNavigationListener): void;
				/** @deprecated */
				public removeTab(param0: androidx.appcompat.app.ActionBar.Tab): void;
				/** @deprecated */
				public getSelectedNavigationIndex(): number;
				public setSubtitle(param0: number): void;
				public setLogo(param0: android.graphics.drawable.Drawable): void;
				public doShow(fromSystem: boolean): void;
				public getNavigationMode(): number;
				public isHideOnContentScrollEnabled(): boolean;
				/** @deprecated */
				public addTab(param0: androidx.appcompat.app.ActionBar.Tab, param1: boolean): void;
				public setBackgroundDrawable(d: android.graphics.drawable.Drawable): void;
				public getDisplayOptions(): number;
				/** @deprecated */
				public getTabCount(): number;
				public constructor(layout: android.view.View);
				public setSelectedNavigationItem(position: number): void;
				public addTab(tab: androidx.appcompat.app.ActionBar.Tab, position: number, setSelected: boolean): void;
				public getTabAt(index: number): androidx.appcompat.app.ActionBar.Tab;
				public setTitle(title: string): void;
				public getTabCount(): number;
				public setDisplayShowCustomEnabled(param0: boolean): void;
				public requestFocus(): boolean;
				public collapseActionView(): boolean;
				public setCustomView(param0: android.view.View): void;
				public hideForSystem(): void;
				public getNavigationItemCount(): number;
				/** @deprecated */
				public removeAllTabs(): void;
				public dispatchMenuVisibilityChanged(visible: boolean): void;
				public addTab(tab: androidx.appcompat.app.ActionBar.Tab, position: number): void;
				public setSubtitle(resId: number): void;
				public selectTab(tab: androidx.appcompat.app.ActionBar.Tab): void;
				public removeOnMenuVisibilityListener(listener: androidx.appcompat.app.ActionBar.OnMenuVisibilityListener): void;
				public setHomeActionContentDescription(description: string): void;
				public setCustomView(view: android.view.View, layoutParams: androidx.appcompat.app.ActionBar.LayoutParams): void;
				public addTab(tab: androidx.appcompat.app.ActionBar.Tab, setSelected: boolean): void;
				public setNavigationMode(mode: number): void;
				public onConfigurationChanged(config: android.content.res.Configuration): void;
				public setWindowTitle(title: string): void;
				public setHideOffset(offset: number): void;
			}
			export module WindowDecorActionBar {
				export class ActionModeImpl extends androidx.appcompat.view.ActionMode implements androidx.appcompat.view.menu.MenuBuilder.Callback {
					public static class: java.lang.Class<androidx.appcompat.app.WindowDecorActionBar.ActionModeImpl>;
					public getTitle(): string;
					public dispatchOnCreate(): boolean;
					public setTitle(param0: string): void;
					public getMenuInflater(): android.view.MenuInflater;
					public onSubMenuSelected(subMenu: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public setSubtitle(param0: number): void;
					public getCustomView(): android.view.View;
					public setCustomView(view: android.view.View): void;
					public setTitleOptionalHint(titleOptional: boolean): void;
					public getMenu(): android.view.Menu;
					public onMenuModeChange(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public constructor();
					public onMenuModeChange(menu: androidx.appcompat.view.menu.MenuBuilder): void;
					public isTitleOptional(): boolean;
					public setSubtitle(subtitle: string): void;
					public onMenuItemSelected(menu: androidx.appcompat.view.menu.MenuBuilder, item: android.view.MenuItem): boolean;
					public finish(): void;
					public setTitle(param0: number): void;
					public setTitle(resId: number): void;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public onMenuItemSelected(param0: androidx.appcompat.view.menu.MenuBuilder, param1: android.view.MenuItem): boolean;
					public setSubtitle(param0: string): void;
					public getSubtitle(): string;
					public setCustomView(param0: android.view.View): void;
					public setSubtitle(resId: number): void;
					public onCloseSubMenu(menu: androidx.appcompat.view.menu.SubMenuBuilder): void;
					public setTitle(title: string): void;
					public constructor(this$0: androidx.appcompat.app.WindowDecorActionBar, context: android.content.Context, callback: androidx.appcompat.view.ActionMode.Callback);
					public invalidate(): void;
				}
				export class TabImpl extends androidx.appcompat.app.ActionBar.Tab {
					public static class: java.lang.Class<androidx.appcompat.app.WindowDecorActionBar.TabImpl>;
					public setTabListener(param0: androidx.appcompat.app.ActionBar.TabListener): androidx.appcompat.app.ActionBar.Tab;
					public setIcon(icon: android.graphics.drawable.Drawable): androidx.appcompat.app.ActionBar.Tab;
					public setContentDescription(resId: number): androidx.appcompat.app.ActionBar.Tab;
					public getTag(): any;
					public setCustomView(layoutResId: number): androidx.appcompat.app.ActionBar.Tab;
					public setContentDescription(contentDesc: string): androidx.appcompat.app.ActionBar.Tab;
					public setIcon(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public setText(resId: number): androidx.appcompat.app.ActionBar.Tab;
					public setTabListener(callback: androidx.appcompat.app.ActionBar.TabListener): androidx.appcompat.app.ActionBar.Tab;
					public setPosition(position: number): void;
					public getContentDescription(): string;
					public getCallback(): androidx.appcompat.app.ActionBar.TabListener;
					public getCustomView(): android.view.View;
					public setIcon(resId: number): androidx.appcompat.app.ActionBar.Tab;
					public constructor();
					public setText(text: string): androidx.appcompat.app.ActionBar.Tab;
					public setTag(tag: any): androidx.appcompat.app.ActionBar.Tab;
					public setContentDescription(param0: string): androidx.appcompat.app.ActionBar.Tab;
					public constructor(this$0: androidx.appcompat.app.WindowDecorActionBar);
					public setCustomView(view: android.view.View): androidx.appcompat.app.ActionBar.Tab;
					public setText(param0: string): androidx.appcompat.app.ActionBar.Tab;
					public getText(): string;
					public setText(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public setCustomView(param0: android.view.View): androidx.appcompat.app.ActionBar.Tab;
					public setTag(param0: any): androidx.appcompat.app.ActionBar.Tab;
					public select(): void;
					public getIcon(): android.graphics.drawable.Drawable;
					public setCustomView(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public setContentDescription(param0: number): androidx.appcompat.app.ActionBar.Tab;
					public setIcon(param0: android.graphics.drawable.Drawable): androidx.appcompat.app.ActionBar.Tab;
					public getPosition(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module graphics {
			export module drawable {
				export class DrawerArrowDrawable extends android.graphics.drawable.Drawable {
					public static class: java.lang.Class<androidx.appcompat.graphics.drawable.DrawerArrowDrawable>;
					public static ARROW_DIRECTION_LEFT: number;
					public static ARROW_DIRECTION_RIGHT: number;
					public static ARROW_DIRECTION_START: number;
					public static ARROW_DIRECTION_END: number;
					public getArrowShaftLength(): number;
					public getDirection(): number;
					public getPaint(): android.graphics.Paint;
					public getGapSize(): number;
					public getIntrinsicWidth(): number;
					public setColorFilter(param0: android.graphics.ColorFilter): void;
					public setVerticalMirror(verticalMirror: boolean): void;
					public setBarLength(length: number): void;
					public constructor();
					public draw(canvas: android.graphics.Canvas): void;
					public setArrowHeadLength(length: number): void;
					public getBarThickness(): number;
					public draw(param0: android.graphics.Canvas): void;
					public getOpacity(): number;
					public setProgress(progress: number): void;
					public setSpinEnabled(enabled: boolean): void;
					public setColor(color: number): void;
					public constructor(context: android.content.Context);
					public getColor(): number;
					public setArrowShaftLength(length: number): void;
					public setColorFilter(color: number, mode: android.graphics.PorterDuff.Mode): void;
					public getBarLength(): number;
					public getIntrinsicHeight(): number;
					public getArrowHeadLength(): number;
					public setAlpha(param0: number): void;
					public setColorFilter(colorFilter: android.graphics.ColorFilter): void;
					public getProgress(): number;
					public setDirection(direction: number): void;
					public isSpinEnabled(): boolean;
					public setGapSize(gap: number): void;
					public setAlpha(alpha: number): void;
					public setBarThickness(width: number): void;
				}
				export module DrawerArrowDrawable {
					export class ArrowDirection extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.DrawerArrowDrawable.ArrowDirection>;
						/**
						 * Constructs a new instance of the androidx.appcompat.graphics.drawable.DrawerArrowDrawable$ArrowDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module text {
			export class AllCapsTransformationMethod extends java.lang.Object implements android.text.method.TransformationMethod {
				public static class: java.lang.Class<androidx.appcompat.text.AllCapsTransformationMethod>;
				public getTransformation(param0: string, param1: android.view.View): string;
				public constructor(context: android.content.Context);
				public onFocusChanged(view: android.view.View, sourceText: string, focused: boolean, direction: number, previouslyFocusedRect: android.graphics.Rect): void;
				public getTransformation(source: string, view: android.view.View): string;
				public onFocusChanged(param0: android.view.View, param1: string, param2: boolean, param3: number, param4: android.graphics.Rect): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class ActionBarPolicy extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.view.ActionBarPolicy>;
				public showsOverflowMenuButton(): boolean;
				public static get(context: android.content.Context): androidx.appcompat.view.ActionBarPolicy;
				public enableHomeButtonByDefault(): boolean;
				public getStackedTabMaxWidth(): number;
				public hasEmbeddedTabs(): boolean;
				public getMaxActionButtons(): number;
				public getEmbeddedMenuWidthLimit(): number;
				public getTabContainerHeight(): number;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export abstract class ActionMode extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.view.ActionMode>;
				public isUiFocusable(): boolean;
				public setCustomView(param0: android.view.View): void;
				public getMenu(): android.view.Menu;
				public finish(): void;
				public setTag(tag: any): void;
				public setTitle(param0: string): void;
				public getTitle(): string;
				public constructor();
				public getMenuInflater(): android.view.MenuInflater;
				public isTitleOptional(): boolean;
				public setSubtitle(param0: string): void;
				public setTitleOptionalHint(titleOptional: boolean): void;
				public setTitle(param0: number): void;
				public invalidate(): void;
				public getTag(): any;
				public getSubtitle(): string;
				public setSubtitle(param0: number): void;
				public getTitleOptionalHint(): boolean;
				public getCustomView(): android.view.View;
			}
			export module ActionMode {
				export class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.view.ActionMode.Callback>;
					/**
					 * Constructs a new instance of the androidx.appcompat.view.ActionMode$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCreateActionMode(param0: androidx.appcompat.view.ActionMode, param1: android.view.Menu): boolean;
						onPrepareActionMode(param0: androidx.appcompat.view.ActionMode, param1: android.view.Menu): boolean;
						onActionItemClicked(param0: androidx.appcompat.view.ActionMode, param1: android.view.MenuItem): boolean;
						onDestroyActionMode(param0: androidx.appcompat.view.ActionMode): void;
					});
					public constructor();
					public onDestroyActionMode(param0: androidx.appcompat.view.ActionMode): void;
					public onCreateActionMode(param0: androidx.appcompat.view.ActionMode, param1: android.view.Menu): boolean;
					public onPrepareActionMode(param0: androidx.appcompat.view.ActionMode, param1: android.view.Menu): boolean;
					public onActionItemClicked(param0: androidx.appcompat.view.ActionMode, param1: android.view.MenuItem): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class CollapsibleActionView extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.view.CollapsibleActionView>;
				/**
				 * Constructs a new instance of the androidx.appcompat.view.CollapsibleActionView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onActionViewExpanded(): void;
					onActionViewCollapsed(): void;
				});
				public constructor();
				public onActionViewExpanded(): void;
				public onActionViewCollapsed(): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class ContextThemeWrapper extends android.content.ContextWrapper {
				public static class: java.lang.Class<androidx.appcompat.view.ContextThemeWrapper>;
				public onApplyThemeResource(theme: android.content.res.Resources.Theme, resid: number, first: boolean): void;
				public attachBaseContext(newBase: android.content.Context): void;
				public constructor(base: android.content.Context, theme: android.content.res.Resources.Theme);
				public applyOverrideConfiguration(overrideConfiguration: android.content.res.Configuration): void;
				public setTheme(resid: number): void;
				public attachBaseContext(base: android.content.Context): void;
				public getTheme(): android.content.res.Resources.Theme;
				public constructor(base: android.content.Context);
				public constructor();
				public constructor(base: android.content.Context, themeResId: number);
				public getResources(): android.content.res.Resources;
				public getAssets(): android.content.res.AssetManager;
				public getThemeResId(): number;
				public getSystemService(name: string): any;
				public getSystemService(serviceClass: java.lang.Class<any>): any;
			}
			export module ContextThemeWrapper {
				export class Api17Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.view.ContextThemeWrapper.Api17Impl>;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class StandaloneActionMode extends androidx.appcompat.view.ActionMode implements androidx.appcompat.view.menu.MenuBuilder.Callback {
				public static class: java.lang.Class<androidx.appcompat.view.StandaloneActionMode>;
				public onSubMenuSelected(subMenu: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
				public isUiFocusable(): boolean;
				public getMenu(): android.view.Menu;
				public finish(): void;
				public setTitle(param0: string): void;
				public onMenuItemSelected(menu: androidx.appcompat.view.menu.MenuBuilder, item: android.view.MenuItem): boolean;
				public constructor();
				public setCustomView(view: android.view.View): void;
				public isTitleOptional(): boolean;
				public setTitleOptionalHint(titleOptional: boolean): void;
				public onCloseSubMenu(menu: androidx.appcompat.view.menu.SubMenuBuilder): void;
				public setTitle(param0: number): void;
				public setTitle(title: string): void;
				public getCustomView(): android.view.View;
				public setCustomView(param0: android.view.View): void;
				public setTitle(resId: number): void;
				public setSubtitle(resId: number): void;
				public getTitle(): string;
				public setSubtitle(subtitle: string): void;
				public getMenuInflater(): android.view.MenuInflater;
				public setSubtitle(param0: string): void;
				public onMenuModeChange(param0: androidx.appcompat.view.menu.MenuBuilder): void;
				public onMenuItemSelected(param0: androidx.appcompat.view.menu.MenuBuilder, param1: android.view.MenuItem): boolean;
				public invalidate(): void;
				public getSubtitle(): string;
				public setSubtitle(param0: number): void;
				public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
				public constructor(context: android.content.Context, view: androidx.appcompat.widget.ActionBarContextView, callback: androidx.appcompat.view.ActionMode.Callback, isFocusable: boolean);
				public onMenuModeChange(menu: androidx.appcompat.view.menu.MenuBuilder): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class SupportActionModeWrapper extends android.view.ActionMode {
				public static class: java.lang.Class<androidx.appcompat.view.SupportActionModeWrapper>;
				public setCustomView(param0: android.view.View): void;
				public setTitle(resId: number): void;
				public getMenu(): android.view.Menu;
				public finish(): void;
				public setSubtitle(resId: number): void;
				public setTag(tag: any): void;
				public setTitle(param0: string): void;
				public getTitle(): string;
				public constructor();
				public setSubtitle(subtitle: string): void;
				public setCustomView(view: android.view.View): void;
				public getMenuInflater(): android.view.MenuInflater;
				public isTitleOptional(): boolean;
				public setSubtitle(param0: string): void;
				public setTitleOptionalHint(titleOptional: boolean): void;
				public setTitle(param0: number): void;
				public invalidate(): void;
				public constructor(context: android.content.Context, supportActionMode: androidx.appcompat.view.ActionMode);
				public getTag(): any;
				public getSubtitle(): string;
				public setSubtitle(param0: number): void;
				public getTitleOptionalHint(): boolean;
				public setTitle(title: string): void;
				public getCustomView(): android.view.View;
			}
			export module SupportActionModeWrapper {
				export class CallbackWrapper extends java.lang.Object implements androidx.appcompat.view.ActionMode.Callback {
					public static class: java.lang.Class<androidx.appcompat.view.SupportActionModeWrapper.CallbackWrapper>;
					public onDestroyActionMode(param0: androidx.appcompat.view.ActionMode): void;
					public onActionItemClicked(mode: androidx.appcompat.view.ActionMode, item: android.view.MenuItem): boolean;
					public getActionModeWrapper(mode: androidx.appcompat.view.ActionMode): android.view.ActionMode;
					public constructor(context: android.content.Context, supportCallback: android.view.ActionMode.Callback);
					public onDestroyActionMode(mode: androidx.appcompat.view.ActionMode): void;
					public onCreateActionMode(param0: androidx.appcompat.view.ActionMode, param1: android.view.Menu): boolean;
					public onPrepareActionMode(mode: androidx.appcompat.view.ActionMode, menu: android.view.Menu): boolean;
					public onPrepareActionMode(param0: androidx.appcompat.view.ActionMode, param1: android.view.Menu): boolean;
					public onCreateActionMode(mode: androidx.appcompat.view.ActionMode, menu: android.view.Menu): boolean;
					public onActionItemClicked(param0: androidx.appcompat.view.ActionMode, param1: android.view.MenuItem): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class SupportMenuInflater extends android.view.MenuInflater {
				public static class: java.lang.Class<androidx.appcompat.view.SupportMenuInflater>;
				public constructor(context: android.content.Context);
				public inflate(menuRes: number, menu: android.view.Menu): void;
			}
			export module SupportMenuInflater {
				export class InflatedOnMenuItemClickListener extends java.lang.Object implements android.view.MenuItem.OnMenuItemClickListener {
					public static class: java.lang.Class<androidx.appcompat.view.SupportMenuInflater.InflatedOnMenuItemClickListener>;
					public onMenuItemClick(param0: android.view.MenuItem): boolean;
					public onMenuItemClick(item: android.view.MenuItem): boolean;
					public constructor(realOwner: any, methodName: string);
				}
				export class MenuState extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.view.SupportMenuInflater.MenuState>;
					public resetGroup(): void;
					public readGroup(attrs: android.util.AttributeSet): void;
					public hasAddedItem(): boolean;
					public readItem(attrs: android.util.AttributeSet): void;
					public addSubMenuItem(): android.view.SubMenu;
					public constructor(param0: androidx.appcompat.view.SupportMenuInflater, menu: android.view.Menu);
					public addItem(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class ViewPropertyAnimatorCompatSet extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.view.ViewPropertyAnimatorCompatSet>;
				public play(animator: androidx.core.view.ViewPropertyAnimatorCompat): androidx.appcompat.view.ViewPropertyAnimatorCompatSet;
				public setInterpolator(interpolator: android.view.animation.Interpolator): androidx.appcompat.view.ViewPropertyAnimatorCompatSet;
				public start(): void;
				public cancel(): void;
				public playSequentially(anim1: androidx.core.view.ViewPropertyAnimatorCompat, anim2: androidx.core.view.ViewPropertyAnimatorCompat): androidx.appcompat.view.ViewPropertyAnimatorCompatSet;
				public setDuration(duration: number): androidx.appcompat.view.ViewPropertyAnimatorCompatSet;
				public constructor();
				public setListener(listener: androidx.core.view.ViewPropertyAnimatorListener): androidx.appcompat.view.ViewPropertyAnimatorCompatSet;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export class WindowCallbackWrapper extends java.lang.Object implements android.view.Window.Callback {
				public static class: java.lang.Class<androidx.appcompat.view.WindowCallbackWrapper>;
				public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
				public onActionModeStarted(mode: android.view.ActionMode): void;
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
				public onPanelClosed(featureId: number, menu: android.view.Menu): void;
				public onMenuItemSelected(featureId: number, item: android.view.MenuItem): boolean;
				public dispatchKeyShortcutEvent(event: android.view.KeyEvent): boolean;
				public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
				public getWrapped(): android.view.Window.Callback;
				public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
				public onSearchRequested(param0: any): boolean;
				public onWindowFocusChanged(hasFocus: boolean): void;
				public onCreatePanelView(featureId: number): android.view.View;
				public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
				public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: android.view.Menu, deviceId: number): void;
				public onPanelClosed(param0: number, param1: android.view.Menu): void;
				public constructor(wrapped: android.view.Window.Callback);
				public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public dispatchTrackballEvent(event: android.view.MotionEvent): boolean;
				public dispatchGenericMotionEvent(event: android.view.MotionEvent): boolean;
				public dispatchKeyEvent(event: android.view.KeyEvent): boolean;
				public onWindowStartingActionMode(callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public onCreatePanelView(param0: number): android.view.View;
				public onActionModeStarted(param0: android.view.ActionMode): void;
				public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
				public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
				public onActionModeFinished(mode: android.view.ActionMode): void;
				public onActionModeFinished(param0: android.view.ActionMode): void;
				public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
				public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
				public onContentChanged(): void;
				public onMenuOpened(featureId: number, menu: android.view.Menu): boolean;
				public onWindowAttributesChanged(attrs: android.view.WindowManager.LayoutParams): void;
				public dispatchTouchEvent(event: android.view.MotionEvent): boolean;
				public onSearchRequested(searchEvent: any): boolean;
				public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
				public onDetachedFromWindow(): void;
				public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
				public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
				public onPreparePanel(featureId: number, view: android.view.View, menu: android.view.Menu): boolean;
				public onPointerCaptureChanged(hasCapture: boolean): void;
				public onSearchRequested(): boolean;
				public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
				public onCreatePanelMenu(featureId: number, menu: android.view.Menu): boolean;
				public onWindowFocusChanged(param0: boolean): void;
				public onAttachedToWindow(): void;
			}
			export module WindowCallbackWrapper {
				export class Api23Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.view.WindowCallbackWrapper.Api23Impl>;
				}
				export class Api24Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.view.WindowCallbackWrapper.Api24Impl>;
				}
				export class Api26Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.view.WindowCallbackWrapper.Api26Impl>;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ActionMenuItem extends java.lang.Object implements androidx.core.internal.view.SupportMenuItem {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ActionMenuItem>;
					public getTitle(): string;
					public setAlphabeticShortcut(param0: string): android.view.MenuItem;
					public getGroupId(): number;
					public setActionView(actionView: android.view.View): androidx.core.internal.view.SupportMenuItem;
					public hasSubMenu(): boolean;
					public setIcon(iconRes: number): android.view.MenuItem;
					public setChecked(param0: boolean): android.view.MenuItem;
					public setIconTintMode(iconTintMode: android.graphics.PorterDuff.Mode): android.view.MenuItem;
					public setOnMenuItemClickListener(menuItemClickListener: android.view.MenuItem.OnMenuItemClickListener): android.view.MenuItem;
					public getContentDescription(): string;
					public setTitleCondensed(param0: string): android.view.MenuItem;
					public getIntent(): android.content.Intent;
					public setNumericShortcut(numericChar: string, numericModifiers: number): android.view.MenuItem;
					public setIcon(icon: android.graphics.drawable.Drawable): android.view.MenuItem;
					public setTooltipText(param0: string): androidx.core.internal.view.SupportMenuItem;
					public setActionProvider(actionProvider: android.view.ActionProvider): android.view.MenuItem;
					public getTitleCondensed(): string;
					public setShortcut(param0: string, param1: string, param2: number, param3: number): android.view.MenuItem;
					public isEnabled(): boolean;
					public getSupportActionProvider(): androidx.core.view.ActionProvider;
					public setNumericShortcut(param0: string, param1: number): android.view.MenuItem;
					public setIntent(param0: android.content.Intent): android.view.MenuItem;
					public setIntent(intent: android.content.Intent): android.view.MenuItem;
					public requiresActionButton(): boolean;
					public setTitle(title: number): android.view.MenuItem;
					public getIcon(): android.graphics.drawable.Drawable;
					public getIconTintMode(): android.graphics.PorterDuff.Mode;
					public setEnabled(enabled: boolean): android.view.MenuItem;
					public setIcon(param0: android.graphics.drawable.Drawable): android.view.MenuItem;
					public invoke(): boolean;
					public getNumericModifiers(): number;
					public isVisible(): boolean;
					public setActionView(resId: number): androidx.core.internal.view.SupportMenuItem;
					public setShowAsActionFlags(param0: number): android.view.MenuItem;
					public setSupportActionProvider(param0: androidx.core.view.ActionProvider): androidx.core.internal.view.SupportMenuItem;
					public getActionProvider(): android.view.ActionProvider;
					public setIcon(param0: number): android.view.MenuItem;
					public getAlphabeticModifiers(): number;
					public collapseActionView(): boolean;
					public setSupportActionProvider(actionProvider: androidx.core.view.ActionProvider): androidx.core.internal.view.SupportMenuItem;
					public getTooltipText(): string;
					public setActionView(param0: android.view.View): android.view.MenuItem;
					public setIconTintMode(param0: android.graphics.PorterDuff.Mode): android.view.MenuItem;
					public setIconTintList(param0: android.content.res.ColorStateList): android.view.MenuItem;
					public expandActionView(): boolean;
					public getNumericShortcut(): string;
					public setShowAsAction(show: number): void;
					public setTooltipText(tooltipText: string): androidx.core.internal.view.SupportMenuItem;
					public setAlphabeticShortcut(alphaChar: string, alphaModifiers: number): android.view.MenuItem;
					public setCheckable(checkable: boolean): android.view.MenuItem;
					public isActionViewExpanded(): boolean;
					public requiresOverflow(): boolean;
					public setTitle(param0: string): android.view.MenuItem;
					public setEnabled(param0: boolean): android.view.MenuItem;
					public getAlphabeticShortcut(): string;
					public setAlphabeticShortcut(param0: string, param1: number): android.view.MenuItem;
					public setAlphabeticShortcut(alphaChar: string): android.view.MenuItem;
					public setTitle(title: string): android.view.MenuItem;
					public setShowAsAction(param0: number): void;
					public setContentDescription(contentDescription: string): androidx.core.internal.view.SupportMenuItem;
					public setCheckable(param0: boolean): android.view.MenuItem;
					public setChecked(checked: boolean): android.view.MenuItem;
					public getOrder(): number;
					public setOnActionExpandListener(param0: android.view.MenuItem.OnActionExpandListener): android.view.MenuItem;
					public setShortcut(param0: string, param1: string): android.view.MenuItem;
					public isCheckable(): boolean;
					public setShortcut(numericChar: string, alphaChar: string): android.view.MenuItem;
					public setContentDescription(param0: string): androidx.core.internal.view.SupportMenuItem;
					public setNumericShortcut(param0: string): android.view.MenuItem;
					public getMenuInfo(): android.view.ContextMenu.ContextMenuInfo;
					public isChecked(): boolean;
					public setIconTintList(iconTintList: android.content.res.ColorStateList): android.view.MenuItem;
					public setVisible(param0: boolean): android.view.MenuItem;
					public constructor(context: android.content.Context, group: number, id: number, categoryOrder: number, ordering: number, title: string);
					public getItemId(): number;
					public setOnActionExpandListener(listener: android.view.MenuItem.OnActionExpandListener): android.view.MenuItem;
					public setOnMenuItemClickListener(param0: android.view.MenuItem.OnMenuItemClickListener): android.view.MenuItem;
					public setNumericShortcut(numericChar: string): android.view.MenuItem;
					public setActionView(param0: number): android.view.MenuItem;
					public setTitle(param0: number): android.view.MenuItem;
					public getIconTintList(): android.content.res.ColorStateList;
					public setExclusiveCheckable(exclusive: boolean): androidx.appcompat.view.menu.ActionMenuItem;
					public setVisible(visible: boolean): android.view.MenuItem;
					public setShortcut(numericChar: string, alphaChar: string, numericModifiers: number, alphaModifiers: number): android.view.MenuItem;
					public getSubMenu(): android.view.SubMenu;
					public getActionView(): android.view.View;
					public setTitleCondensed(title: string): android.view.MenuItem;
					public setShowAsActionFlags(actionEnum: number): androidx.core.internal.view.SupportMenuItem;
					public setActionProvider(param0: android.view.ActionProvider): android.view.MenuItem;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ActionMenuItemView extends androidx.appcompat.widget.AppCompatTextView implements androidx.appcompat.view.menu.MenuView.ItemView, android.view.View.OnClickListener, androidx.appcompat.widget.ActionMenuView.ActionMenuChildView {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ActionMenuItemView>;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public setSupportBackgroundTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public setSupportCompoundDrawablesTintList(param0: android.content.res.ColorStateList): void;
					public setTitle(param0: string): void;
					public setCheckable(checkable: boolean): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyle: number);
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					public showsIcon(): boolean;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public setAutoSizeTextTypeUniformWithPresetSizes(presetSizes: number[], unit: number): void;
					public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
					public onConfigurationChanged(newConfig: android.content.res.Configuration): void;
					public initialize(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: number): void;
					public setCheckable(param0: boolean): void;
					public getAccessibilityClassName(): string;
					public setPopupCallback(popupCallback: androidx.appcompat.view.menu.ActionMenuItemView.PopupCallback): void;
					public setSupportBackgroundTintList(tint: android.content.res.ColorStateList): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					public setChecked(param0: boolean): void;
					public getSupportBackgroundTintList(): android.content.res.ColorStateList;
					public initialize(itemData: androidx.appcompat.view.menu.MenuItemImpl, menuType: number): void;
					public setEnabled(param0: boolean): void;
					public isEmojiCompatEnabled(): boolean;
					public setIcon(icon: android.graphics.drawable.Drawable): void;
					public setAutoSizeTextTypeWithDefaults(autoSizeTextType: number): void;
					public setShortcut(showShortcut: boolean, shortcutKey: string): void;
					public constructor(context: android.content.Context);
					public onClick(v: android.view.View): void;
					public setAutoSizeTextTypeUniformWithConfiguration(autoSizeMinTextSize: number, autoSizeMaxTextSize: number, autoSizeStepGranularity: number, unit: number): void;
					public needsDividerAfter(): boolean;
					public setEnabled(enabled: boolean): void;
					public setChecked(checked: boolean): void;
					public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
					public setSupportCompoundDrawablesTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
					public setAutoSizeTextTypeUniformWithConfiguration(param0: number, param1: number, param2: number, param3: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
					public getAutoSizeMinTextSize(): number;
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public getItemData(): androidx.appcompat.view.menu.MenuItemImpl;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public setAutoSizeTextTypeUniformWithPresetSizes(param0: number[], param1: number): void;
					public sendAccessibilityEvent(eventType: number): void;
					public getAutoSizeStepGranularity(): number;
					public getAutoSizeTextAvailableSizes(): number[];
					public onTouchEvent(e: android.view.MotionEvent): boolean;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public prefersCondensedTitle(): boolean;
					public hasText(): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public setEmojiCompatEnabled(enabled: boolean): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public onTouchEvent(event: android.view.MotionEvent): boolean;
					public sendAccessibilityEvent(param0: number): void;
					public setItemInvoker(invoker: androidx.appcompat.view.menu.MenuBuilder.ItemInvoker): void;
					public onPreDraw(): boolean;
					public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
					public setSupportCompoundDrawablesTintList(tintList: android.content.res.ColorStateList): void;
					public setEmojiCompatEnabled(param0: boolean): void;
					public getAutoSizeTextType(): number;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public setShortcut(param0: boolean, param1: string): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public setPadding(left: number, top: number, right: number, bottom: number): void;
					public onClick(param0: android.view.View): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public setAutoSizeTextTypeWithDefaults(param0: number): void;
					public setSupportCompoundDrawablesTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public setPadding(l: number, t: number, r: number, b: number): void;
					public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public getSupportCompoundDrawablesTintMode(): android.graphics.PorterDuff.Mode;
					public getAutoSizeMaxTextSize(): number;
					public onRestoreInstanceState(state: android.os.Parcelable): void;
					public getSupportCompoundDrawablesTintList(): android.content.res.ColorStateList;
					public setExpandedFormat(expandedFormat: boolean): void;
					public setTitle(title: string): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public needsDividerBefore(): boolean;
				}
				export module ActionMenuItemView {
					export class ActionMenuItemForwardingListener extends androidx.appcompat.widget.ForwardingListener {
						public static class: java.lang.Class<androidx.appcompat.view.menu.ActionMenuItemView.ActionMenuItemForwardingListener>;
						public onViewDetachedFromWindow(v: android.view.View): void;
						public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
						public constructor(src: android.view.View);
						public onViewAttachedToWindow(param0: android.view.View): void;
						public onForwardingStarted(): boolean;
						public onTouch(v: android.view.View, event: android.view.MotionEvent): boolean;
						public getPopup(): androidx.appcompat.view.menu.ShowableListMenu;
						public constructor(param0: androidx.appcompat.view.menu.ActionMenuItemView);
						public onViewAttachedToWindow(v: android.view.View): void;
						public onViewDetachedFromWindow(param0: android.view.View): void;
					}
					export abstract class PopupCallback extends java.lang.Object {
						public static class: java.lang.Class<androidx.appcompat.view.menu.ActionMenuItemView.PopupCallback>;
						public constructor();
						public getPopup(): androidx.appcompat.view.menu.ShowableListMenu;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export abstract class BaseMenuPresenter extends java.lang.Object implements androidx.appcompat.view.menu.MenuPresenter {
					public static class: java.lang.Class<androidx.appcompat.view.menu.BaseMenuPresenter>;
					public mSystemContext: android.content.Context;
					public mContext: android.content.Context;
					public mMenu: androidx.appcompat.view.menu.MenuBuilder;
					public mSystemInflater: android.view.LayoutInflater;
					public mInflater: android.view.LayoutInflater;
					public mMenuView: androidx.appcompat.view.menu.MenuView;
					public shouldIncludeItem(childIndex: number, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public collapseItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public getMenuView(param0: android.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public expandItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public getItemView(item: androidx.appcompat.view.menu.MenuItemImpl, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
					public initForMenu(context: android.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder): void;
					public initForMenu(param0: android.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
					public constructor(context: android.content.Context, menuLayoutRes: number, itemLayoutRes: number);
					public flagActionItems(): boolean;
					public filterLeftoverView(parent: android.view.ViewGroup, childIndex: number): boolean;
					public createItemView(parent: android.view.ViewGroup): androidx.appcompat.view.menu.MenuView.ItemView;
					public getId(): number;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public updateMenuView(param0: boolean): void;
					public bindItemView(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: androidx.appcompat.view.menu.MenuView.ItemView): void;
					public onSubMenuSelected(menu: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public setCallback(cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public updateMenuView(cleared: boolean): void;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public setId(id: number): void;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public getCallback(): androidx.appcompat.view.menu.MenuPresenter.Callback;
					public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public getMenuView(root: android.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public addItemView(itemView: android.view.View, childIndex: number): void;
					public onSaveInstanceState(): android.os.Parcelable;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export abstract class BaseMenuWrapper extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.view.menu.BaseMenuWrapper>;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class CascadingMenuPopup extends androidx.appcompat.view.menu.MenuPopup implements androidx.appcompat.view.menu.MenuPresenter, android.view.View.OnKeyListener, android.widget.PopupWindow.OnDismissListener {
					public static class: java.lang.Class<androidx.appcompat.view.menu.CascadingMenuPopup>;
					public setAnchorView(param0: android.view.View): void;
					public isShowing(): boolean;
					public getMenuView(param0: android.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public collapseItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public setGravity(dropDownGravity: number): void;
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public constructor(context: android.content.Context, anchor: android.view.View, popupStyleAttr: number, popupStyleRes: number, overflowOnly: boolean);
					public onSubMenuSelected(subMenu: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public onDismiss(): void;
					public setVerticalOffset(param0: number): void;
					public closeMenuOnSubMenuOpened(): boolean;
					public onKey(v: android.view.View, keyCode: number, event: android.view.KeyEvent): boolean;
					public addMenu(menu: androidx.appcompat.view.menu.MenuBuilder): void;
					public expandItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public setHorizontalOffset(x: number): void;
					public onItemClick(param0: android.widget.AdapterView<any>, param1: android.view.View, param2: number, param3: number): void;
					public initForMenu(context: android.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder): void;
					public initForMenu(param0: android.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
					public flagActionItems(): boolean;
					public show(): void;
					public setGravity(param0: number): void;
					public getId(): number;
					public setOnDismissListener(listener: android.widget.PopupWindow.OnDismissListener): void;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public updateMenuView(param0: boolean): void;
					public setVerticalOffset(y: number): void;
					public onItemClick(parent: android.widget.AdapterView<any>, view: android.view.View, position: number, id: number): void;
					public setCallback(cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public updateMenuView(cleared: boolean): void;
					public setHorizontalOffset(param0: number): void;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public setForceShowIcon(forceShow: boolean): void;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onRestoreInstanceState(state: android.os.Parcelable): void;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public addMenu(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public setForceShowIcon(param0: boolean): void;
					public getMenuView(root: android.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public dismiss(): void;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public setOnDismissListener(param0: android.widget.PopupWindow.OnDismissListener): void;
					public setShowTitle(param0: boolean): void;
					public onSaveInstanceState(): android.os.Parcelable;
					public setAnchorView(anchor: android.view.View): void;
					public getListView(): android.widget.ListView;
					public setShowTitle(showTitle: boolean): void;
					public onKey(param0: android.view.View, param1: number, param2: android.view.KeyEvent): boolean;
				}
				export module CascadingMenuPopup {
					export class CascadingMenuInfo extends java.lang.Object {
						public static class: java.lang.Class<androidx.appcompat.view.menu.CascadingMenuPopup.CascadingMenuInfo>;
						public window: androidx.appcompat.widget.MenuPopupWindow;
						public menu: androidx.appcompat.view.menu.MenuBuilder;
						public position: number;
						public constructor(window: androidx.appcompat.widget.MenuPopupWindow, menu: androidx.appcompat.view.menu.MenuBuilder, position: number);
						public getListView(): android.widget.ListView;
					}
					export class HorizPosition extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<androidx.appcompat.view.menu.CascadingMenuPopup.HorizPosition>;
						/**
						 * Constructs a new instance of the androidx.appcompat.view.menu.CascadingMenuPopup$HorizPosition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ExpandedMenuView extends android.widget.ListView implements androidx.appcompat.view.menu.MenuBuilder.ItemInvoker, androidx.appcompat.view.menu.MenuView, android.widget.AdapterView.OnItemClickListener {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ExpandedMenuView>;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public focusableViewAvailable(v: android.view.View): void;
					public removeView(child: android.view.View): void;
					public isTextDirectionResolved(): boolean;
					public showContextMenuForChild(param0: android.view.View): boolean;
					public onStopNestedScroll(child: android.view.View): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
					public recomputeViewAttributes(child: android.view.View): void;
					public addView(child: android.view.View, index: number): void;
					public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public getLayoutDirection(): number;
					public getParentForAccessibility(): android.view.ViewParent;
					public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
					public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
					public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
					public createContextMenu(param0: android.view.ContextMenu): void;
					public getWindowAnimations(): number;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public childDrawableStateChanged(param0: android.view.View): void;
					public onFilterComplete(param0: number): void;
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public isTextAlignmentResolved(): boolean;
					public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public requestChildFocus(child: android.view.View, focused: android.view.View): void;
					public canResolveTextAlignment(): boolean;
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public requestChildRectangleOnScreen(child: android.view.View, rect: android.graphics.Rect, immediate: boolean): boolean;
					public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
					public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
					public showContextMenuForChild(originalView: android.view.View): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
					public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
					public sendAccessibilityEvent(param0: number): void;
					public requestLayout(): void;
					public onDetachedFromWindow(): void;
					public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public onTextChanged(s: string, start: number, before: number, count: number): void;
					public getTextAlignment(): number;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
					public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public focusSearch(param0: android.view.View, param1: number): android.view.View;
					public bringChildToFront(child: android.view.View): void;
					public onTouchModeChanged(param0: boolean): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
					public onFilterComplete(count: number): void;
					public isLayoutRequested(): boolean;
					public clearChildFocus(param0: android.view.View): void;
					public clearChildFocus(child: android.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public isLayoutDirectionResolved(): boolean;
					public onItemClick(parent: android.widget.AdapterView<any>, v: android.view.View, position: number, id: number): void;
					public focusSearch(focused: android.view.View, direction: number): android.view.View;
					public addView(child: android.view.View): void;
					public onTouchModeChanged(isInTouchMode: boolean): void;
					public afterTextChanged(s: android.text.Editable): void;
					public addView(child: android.view.View, width: number, height: number): void;
					public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
					public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
					public bringChildToFront(param0: android.view.View): void;
					public constructor(context: android.content.Context);
					public beforeTextChanged(s: string, start: number, count: number, after: number): void;
					public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
					public onGlobalLayout(): void;
					public afterTextChanged(param0: android.text.Editable): void;
					public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
					public invokeItem(item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
					public getTextDirection(): number;
					public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					public requestFitSystemWindows(): void;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public requestTransparentRegion(param0: android.view.View): void;
					public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
					public canResolveTextDirection(): boolean;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public getParent(): android.view.ViewParent;
					public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
					public onItemClick(param0: android.widget.AdapterView<any>, param1: android.view.View, param2: number, param3: number): void;
					public createContextMenu(menu: android.view.ContextMenu): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public onStopNestedScroll(param0: android.view.View): void;
					public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public invokeItem(param0: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
					public canResolveLayoutDirection(): boolean;
					public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
					public requestTransparentRegion(child: android.view.View): void;
					public removeView(param0: android.view.View): void;
					public childDrawableStateChanged(child: android.view.View): void;
					public initialize(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public recomputeViewAttributes(param0: android.view.View): void;
					public focusableViewAvailable(param0: android.view.View): void;
					public initialize(menu: androidx.appcompat.view.menu.MenuBuilder): void;
					public focusSearch(direction: number): android.view.View;
					public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ListMenuItemView extends android.widget.LinearLayout implements androidx.appcompat.view.menu.MenuView.ItemView, android.widget.AbsListView.SelectionBoundsAdjuster {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ListMenuItemView>;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public adjustListItemSelectionBounds(rect: android.graphics.Rect): void;
					public focusableViewAvailable(v: android.view.View): void;
					public isTextDirectionResolved(): boolean;
					public initialize(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: number): void;
					public showContextMenuForChild(param0: android.view.View): boolean;
					public onStopNestedScroll(child: android.view.View): void;
					public setCheckable(param0: boolean): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					public setChecked(param0: boolean): void;
					public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
					public initialize(itemData: androidx.appcompat.view.menu.MenuItemImpl, menuType: number): void;
					public recomputeViewAttributes(child: android.view.View): void;
					public addView(child: android.view.View, index: number): void;
					public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public getLayoutDirection(): number;
					public getParentForAccessibility(): android.view.ViewParent;
					public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
					public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
					public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
					public createContextMenu(param0: android.view.ContextMenu): void;
					public setEnabled(enabled: boolean): void;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public childDrawableStateChanged(param0: android.view.View): void;
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public isTextAlignmentResolved(): boolean;
					public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public requestChildFocus(child: android.view.View, focused: android.view.View): void;
					public canResolveTextAlignment(): boolean;
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
					public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
					public showContextMenuForChild(originalView: android.view.View): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
					public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
					public sendAccessibilityEvent(param0: number): void;
					public requestLayout(): void;
					public adjustListItemSelectionBounds(param0: android.graphics.Rect): void;
					public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public getTextAlignment(): number;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
					public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
					public setGroupDividerEnabled(groupDividerEnabled: boolean): void;
					public focusSearch(param0: android.view.View, param1: number): android.view.View;
					public bringChildToFront(child: android.view.View): void;
					public setTitle(title: string): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
					public setTitle(param0: string): void;
					public setCheckable(checkable: boolean): void;
					public isLayoutRequested(): boolean;
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					public clearChildFocus(param0: android.view.View): void;
					public showsIcon(): boolean;
					public clearChildFocus(child: android.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public isLayoutDirectionResolved(): boolean;
					public focusSearch(focused: android.view.View, direction: number): android.view.View;
					public addView(child: android.view.View): void;
					public addView(child: android.view.View, width: number, height: number): void;
					public removeView(view: android.view.View): void;
					public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
					public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
					public setEnabled(param0: boolean): void;
					public setIcon(icon: android.graphics.drawable.Drawable): void;
					public bringChildToFront(param0: android.view.View): void;
					public setShortcut(showShortcut: boolean, shortcutKey: string): void;
					public constructor(context: android.content.Context);
					public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
					public setChecked(checked: boolean): void;
					public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
					public setForceShowIcon(forceShow: boolean): void;
					public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
					public getTextDirection(): number;
					public requestFitSystemWindows(): void;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
					public getItemData(): androidx.appcompat.view.menu.MenuItemImpl;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public requestTransparentRegion(param0: android.view.View): void;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
					public canResolveTextDirection(): boolean;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public prefersCondensedTitle(): boolean;
					public getParent(): android.view.ViewParent;
					public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
					public createContextMenu(menu: android.view.ContextMenu): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public onFinishInflate(): void;
					public onStopNestedScroll(param0: android.view.View): void;
					public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
					public canResolveLayoutDirection(): boolean;
					public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
					public requestTransparentRegion(child: android.view.View): void;
					public removeView(param0: android.view.View): void;
					public childDrawableStateChanged(child: android.view.View): void;
					public setShortcut(param0: boolean, param1: string): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public recomputeViewAttributes(param0: android.view.View): void;
					public focusableViewAvailable(param0: android.view.View): void;
					public focusSearch(direction: number): android.view.View;
					public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ListMenuPresenter extends java.lang.Object implements androidx.appcompat.view.menu.MenuPresenter, android.widget.AdapterView.OnItemClickListener {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ListMenuPresenter>;
					public static VIEWS_TAG: string;
					public constructor(context: android.content.Context, itemLayoutRes: number);
					public collapseItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public getMenuView(param0: android.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public onSubMenuSelected(subMenu: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public expandItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onItemClick(param0: android.widget.AdapterView<any>, param1: android.view.View, param2: number, param3: number): void;
					public getAdapter(): android.widget.ListAdapter;
					public initForMenu(context: android.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder): void;
					public initForMenu(param0: android.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
					public flagActionItems(): boolean;
					public getId(): number;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public updateMenuView(param0: boolean): void;
					public restoreHierarchyState(inState: android.os.Bundle): void;
					public onItemClick(parent: android.widget.AdapterView<any>, view: android.view.View, position: number, id: number): void;
					public constructor(itemLayoutRes: number, themeRes: number);
					public setCallback(cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public updateMenuView(cleared: boolean): void;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public setId(id: number): void;
					public setItemIndexOffset(offset: number): void;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onRestoreInstanceState(state: android.os.Parcelable): void;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public getMenuView(root: android.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public saveHierarchyState(outState: android.os.Bundle): void;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public onSaveInstanceState(): android.os.Parcelable;
				}
				export module ListMenuPresenter {
					export class MenuAdapter extends android.widget.BaseAdapter {
						public static class: java.lang.Class<androidx.appcompat.view.menu.ListMenuPresenter.MenuAdapter>;
						public isEnabled(param0: number): boolean;
						public constructor(param0: androidx.appcompat.view.menu.ListMenuPresenter);
						public areAllItemsEnabled(): boolean;
						public constructor();
						public notifyDataSetChanged(): void;
						public isEnabled(position: number): boolean;
						public getItem(position: number): androidx.appcompat.view.menu.MenuItemImpl;
						public getView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
						public getCount(): number;
						public getDropDownView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
						public getItemId(position: number): number;
						public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuAdapter extends android.widget.BaseAdapter {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuAdapter>;
					public getForceShowIcon(): boolean;
					public getCount(): number;
					public areAllItemsEnabled(): boolean;
					public isEnabled(position: number): boolean;
					public getDropDownView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
					public getItem(position: number): androidx.appcompat.view.menu.MenuItemImpl;
					public notifyDataSetChanged(): void;
					public getItemId(position: number): number;
					public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
					public constructor();
					public setForceShowIcon(forceShow: boolean): void;
					public getView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
					public isEnabled(param0: number): boolean;
					public constructor(menu: androidx.appcompat.view.menu.MenuBuilder, inflater: android.view.LayoutInflater, overflowOnly: boolean, itemLayoutRes: number);
					public getAdapterMenu(): androidx.appcompat.view.menu.MenuBuilder;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuBuilder extends java.lang.Object implements androidx.core.internal.view.SupportMenu {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuBuilder>;
					public setGroupVisible(param0: number, param1: boolean): void;
					public findGroupIndex(group: number, start: number): number;
					public getHeaderIcon(): android.graphics.drawable.Drawable;
					public setCurrentMenuInfo(menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
					public setQwertyMode(param0: boolean): void;
					public performIdentifierAction(param0: number, param1: number): boolean;
					public saveActionViewStates(outStates: android.os.Bundle): void;
					public setGroupEnabled(group: number, enabled: boolean): void;
					public size(): number;
					public findItem(id: number): android.view.MenuItem;
					public startDispatchingItemsChanged(): void;
					public add(titleRes: number): android.view.MenuItem;
					public isShortcutsVisible(): boolean;
					public getNonActionItems(): java.util.ArrayList<androidx.appcompat.view.menu.MenuItemImpl>;
					public restoreActionViewStates(states: android.os.Bundle): void;
					public close(): void;
					public findItem(param0: number): android.view.MenuItem;
					public addSubMenu(group: number, id: number, categoryOrder: number, title: string): android.view.SubMenu;
					public add(param0: string): android.view.MenuItem;
					public changeMenuMode(): void;
					public stopDispatchingItemsChanged(): void;
					public onItemsChanged(structureChanged: boolean): void;
					public constructor(context: android.content.Context);
					public collapseItemActionView(item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public addSubMenu(param0: string): android.view.SubMenu;
					public setHeaderTitleInt(title: string): androidx.appcompat.view.menu.MenuBuilder;
					public setShortcutsVisible(shortcutsVisible: boolean): void;
					public add(group: number, id: number, categoryOrder: number, title: string): android.view.MenuItem;
					public add(group: number, id: number, categoryOrder: number, title: number): android.view.MenuItem;
					public removeItemAt(index: number): void;
					public getItem(param0: number): android.view.MenuItem;
					public add(param0: number, param1: number, param2: number, param3: string): android.view.MenuItem;
					public removeMenuPresenter(presenter: androidx.appcompat.view.menu.MenuPresenter): void;
					public setGroupEnabled(param0: number, param1: boolean): void;
					public close(closeAllMenus: boolean): void;
					public setCallback(cb: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
					public getVisibleItems(): java.util.ArrayList<androidx.appcompat.view.menu.MenuItemImpl>;
					public setHeaderIconInt(icon: android.graphics.drawable.Drawable): androidx.appcompat.view.menu.MenuBuilder;
					public addMenuPresenter(presenter: androidx.appcompat.view.menu.MenuPresenter): void;
					public restorePresenterStates(state: android.os.Bundle): void;
					public clearAll(): void;
					public setHeaderViewInt(view: android.view.View): androidx.appcompat.view.menu.MenuBuilder;
					public hasVisibleItems(): boolean;
					public getActionViewStatesKey(): string;
					public expandItemActionView(item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public add(param0: number, param1: number, param2: number, param3: number): android.view.MenuItem;
					public setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;
					public performIdentifierAction(id: number, flags: number): boolean;
					public setHeaderIconInt(iconRes: number): androidx.appcompat.view.menu.MenuBuilder;
					public performItemAction(item: android.view.MenuItem, preferredPresenter: androidx.appcompat.view.menu.MenuPresenter, flags: number): boolean;
					public addSubMenu(title: string): android.view.SubMenu;
					public findItemIndex(id: number): number;
					public setGroupDividerEnabled(param0: boolean): void;
					public isShortcutKey(param0: number, param1: android.view.KeyEvent): boolean;
					public isShortcutKey(keyCode: number, event: android.view.KeyEvent): boolean;
					public addSubMenu(param0: number, param1: number, param2: number, param3: string): android.view.SubMenu;
					public getActionItems(): java.util.ArrayList<androidx.appcompat.view.menu.MenuItemImpl>;
					public getExpandedItem(): androidx.appcompat.view.menu.MenuItemImpl;
					public getContext(): android.content.Context;
					public savePresenterStates(outState: android.os.Bundle): void;
					public isGroupDividerEnabled(): boolean;
					public getRootMenu(): androidx.appcompat.view.menu.MenuBuilder;
					public clear(): void;
					public addMenuPresenter(presenter: androidx.appcompat.view.menu.MenuPresenter, menuContext: android.content.Context): void;
					public flagActionItems(): void;
					public performShortcut(param0: number, param1: android.view.KeyEvent, param2: number): boolean;
					public addIntentOptions(param0: number, param1: number, param2: number, param3: android.content.ComponentName, param4: android.content.Intent[], param5: android.content.Intent, param6: number, param7: android.view.MenuItem[]): number;
					public setQwertyMode(isQwerty: boolean): void;
					public getHeaderTitle(): string;
					public getHeaderView(): android.view.View;
					public addIntentOptions(group: number, id: number, categoryOrder: number, caller: android.content.ComponentName, specifics: android.content.Intent[], intent: android.content.Intent, flags: number, outSpecificItems: android.view.MenuItem[]): number;
					public getItem(index: number): android.view.MenuItem;
					public addSubMenu(param0: number, param1: number, param2: number, param3: number): android.view.SubMenu;
					public performItemAction(item: android.view.MenuItem, flags: number): boolean;
					public findGroupIndex(group: number): number;
					public setOverrideVisibleItems(override: boolean): void;
					public setDefaultShowAsAction(defaultShowAsAction: number): androidx.appcompat.view.menu.MenuBuilder;
					public setGroupDividerEnabled(enabled: boolean): void;
					public setGroupVisible(group: number, visible: boolean): void;
					public performShortcut(keyCode: number, event: android.view.KeyEvent, flags: number): boolean;
					public addSubMenu(group: number, id: number, categoryOrder: number, title: number): android.view.SubMenu;
					public clearHeader(): void;
					public setOptionalIconsVisible(visible: boolean): void;
					public removeGroup(param0: number): void;
					public addSubMenu(titleRes: number): android.view.SubMenu;
					public add(title: string): android.view.MenuItem;
					public addInternal(group: number, id: number, categoryOrder: number, title: string): android.view.MenuItem;
					public add(param0: number): android.view.MenuItem;
					public removeItem(param0: number): void;
					public addSubMenu(param0: number): android.view.SubMenu;
					public removeItem(id: number): void;
					public removeGroup(group: number): void;
					public setGroupCheckable(group: number, checkable: boolean, exclusive: boolean): void;
					public setHeaderTitleInt(titleRes: number): androidx.appcompat.view.menu.MenuBuilder;
				}
				export module MenuBuilder {
					export class Callback extends java.lang.Object {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuBuilder.Callback>;
						/**
						 * Constructs a new instance of the androidx.appcompat.view.menu.MenuBuilder$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onMenuItemSelected(param0: androidx.appcompat.view.menu.MenuBuilder, param1: android.view.MenuItem): boolean;
							onMenuModeChange(param0: androidx.appcompat.view.menu.MenuBuilder): void;
						});
						public constructor();
						public onMenuItemSelected(param0: androidx.appcompat.view.menu.MenuBuilder, param1: android.view.MenuItem): boolean;
						public onMenuModeChange(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					}
					export class ItemInvoker extends java.lang.Object {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuBuilder.ItemInvoker>;
						/**
						 * Constructs a new instance of the androidx.appcompat.view.menu.MenuBuilder$ItemInvoker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							invokeItem(param0: androidx.appcompat.view.menu.MenuItemImpl): boolean;
						});
						public constructor();
						public invokeItem(param0: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuDialogHelper extends java.lang.Object implements android.content.DialogInterface.OnKeyListener, android.content.DialogInterface.OnClickListener, android.content.DialogInterface.OnDismissListener, androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuDialogHelper>;
					public setPresenterCallback(cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public onDismiss(param0: android.content.DialogInterface): void;
					public onClick(dialog: android.content.DialogInterface, which: number): void;
					public constructor(menu: androidx.appcompat.view.menu.MenuBuilder);
					public onOpenSubMenu(subMenu: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public show(windowToken: android.os.IBinder): void;
					public onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public onClick(param0: android.content.DialogInterface, param1: number): void;
					public onKey(param0: android.content.DialogInterface, param1: number, param2: android.view.KeyEvent): boolean;
					public onKey(dialog: android.content.DialogInterface, keyCode: number, event: android.view.KeyEvent): boolean;
					public dismiss(): void;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public onDismiss(dialog: android.content.DialogInterface): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuHelper extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuHelper>;
					/**
					 * Constructs a new instance of the androidx.appcompat.view.menu.MenuHelper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setPresenterCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
						dismiss(): void;
					});
					public constructor();
					public setPresenterCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public dismiss(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuItemImpl extends java.lang.Object implements androidx.core.internal.view.SupportMenuItem {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemImpl>;
					public getTitle(): string;
					public setIcon(iconResId: number): android.view.MenuItem;
					public getGroupId(): number;
					public setIconTintMode(iconTintMode: android.graphics.PorterDuff.Mode): android.view.MenuItem;
					public getContentDescription(): string;
					public setIcon(icon: android.graphics.drawable.Drawable): android.view.MenuItem;
					public setActionProvider(actionProvider: android.view.ActionProvider): android.view.MenuItem;
					public getTitleCondensed(): string;
					public getSupportActionProvider(): androidx.core.view.ActionProvider;
					public setActionViewExpanded(isExpanded: boolean): void;
					public setNumericShortcut(param0: string, param1: number): android.view.MenuItem;
					public setIntent(param0: android.content.Intent): android.view.MenuItem;
					public setTitle(title: number): android.view.MenuItem;
					public getIcon(): android.graphics.drawable.Drawable;
					public getIconTintMode(): android.graphics.PorterDuff.Mode;
					public setEnabled(enabled: boolean): android.view.MenuItem;
					public setIsActionButton(isActionButton: boolean): void;
					public getNumericModifiers(): number;
					public setActionView(resId: number): androidx.core.internal.view.SupportMenuItem;
					public setShowAsActionFlags(param0: number): android.view.MenuItem;
					public setSupportActionProvider(param0: androidx.core.view.ActionProvider): androidx.core.internal.view.SupportMenuItem;
					public getActionProvider(): android.view.ActionProvider;
					public setIcon(param0: number): android.view.MenuItem;
					public requestsActionButton(): boolean;
					public collapseActionView(): boolean;
					public setActionView(param0: android.view.View): android.view.MenuItem;
					public setIconTintList(param0: android.content.res.ColorStateList): android.view.MenuItem;
					public expandActionView(): boolean;
					public actionFormatChanged(): void;
					public setAlphabeticShortcut(alphaChar: string, alphaModifiers: number): android.view.MenuItem;
					public isActionViewExpanded(): boolean;
					public setEnabled(param0: boolean): android.view.MenuItem;
					public getAlphabeticShortcut(): string;
					public setAlphabeticShortcut(param0: string, param1: number): android.view.MenuItem;
					public setAlphabeticShortcut(alphaChar: string): android.view.MenuItem;
					public shouldShowIcon(): boolean;
					public setShowAsAction(param0: number): void;
					public getOrder(): number;
					public setShortcut(param0: string, param1: string): android.view.MenuItem;
					public setShortcut(numericChar: string, alphaChar: string): android.view.MenuItem;
					public isCheckable(): boolean;
					public isChecked(): boolean;
					public setExclusiveCheckable(exclusive: boolean): void;
					public setNumericShortcut(numericChar: string): android.view.MenuItem;
					public setActionView(param0: number): android.view.MenuItem;
					public getIconTintList(): android.content.res.ColorStateList;
					public showsTextAsAction(): boolean;
					public setShortcut(numericChar: string, alphaChar: string, numericModifiers: number, alphaModifiers: number): android.view.MenuItem;
					public getSubMenu(): android.view.SubMenu;
					public getActionView(): android.view.View;
					public setShowAsActionFlags(actionEnum: number): androidx.core.internal.view.SupportMenuItem;
					public setActionProvider(param0: android.view.ActionProvider): android.view.MenuItem;
					public setAlphabeticShortcut(param0: string): android.view.MenuItem;
					public hasSubMenu(): boolean;
					public setChecked(param0: boolean): android.view.MenuItem;
					public setTitleCondensed(param0: string): android.view.MenuItem;
					public getIntent(): android.content.Intent;
					public setSubMenu(subMenu: androidx.appcompat.view.menu.SubMenuBuilder): void;
					public setNumericShortcut(numericChar: string, numericModifiers: number): android.view.MenuItem;
					public setTooltipText(param0: string): androidx.core.internal.view.SupportMenuItem;
					public setCallback(callback: java.lang.Runnable): android.view.MenuItem;
					public setShortcut(param0: string, param1: string, param2: number, param3: number): android.view.MenuItem;
					public isEnabled(): boolean;
					public setIntent(intent: android.content.Intent): android.view.MenuItem;
					public requiresActionButton(): boolean;
					public setShowAsAction(actionEnum: number): void;
					public setActionView(view: android.view.View): androidx.core.internal.view.SupportMenuItem;
					public setIcon(param0: android.graphics.drawable.Drawable): android.view.MenuItem;
					public invoke(): boolean;
					public isVisible(): boolean;
					public getAlphabeticModifiers(): number;
					public setSupportActionProvider(actionProvider: androidx.core.view.ActionProvider): androidx.core.internal.view.SupportMenuItem;
					public getTooltipText(): string;
					public setIconTintMode(param0: android.graphics.PorterDuff.Mode): android.view.MenuItem;
					public setOnMenuItemClickListener(clickListener: android.view.MenuItem.OnMenuItemClickListener): android.view.MenuItem;
					public getNumericShortcut(): string;
					public setTooltipText(tooltipText: string): androidx.core.internal.view.SupportMenuItem;
					public setCheckable(checkable: boolean): android.view.MenuItem;
					public requiresOverflow(): boolean;
					public setTitle(param0: string): android.view.MenuItem;
					public hasCollapsibleActionView(): boolean;
					public setVisible(shown: boolean): android.view.MenuItem;
					public isExclusiveCheckable(): boolean;
					public setTitle(title: string): android.view.MenuItem;
					public setContentDescription(contentDescription: string): androidx.core.internal.view.SupportMenuItem;
					public toString(): string;
					public setCheckable(param0: boolean): android.view.MenuItem;
					public setChecked(checked: boolean): android.view.MenuItem;
					public setOnActionExpandListener(param0: android.view.MenuItem.OnActionExpandListener): android.view.MenuItem;
					public setContentDescription(param0: string): androidx.core.internal.view.SupportMenuItem;
					public setNumericShortcut(param0: string): android.view.MenuItem;
					public getMenuInfo(): android.view.ContextMenu.ContextMenuInfo;
					public isActionButton(): boolean;
					public setIconTintList(iconTintList: android.content.res.ColorStateList): android.view.MenuItem;
					public setVisible(param0: boolean): android.view.MenuItem;
					public getItemId(): number;
					public getOrdering(): number;
					public setOnActionExpandListener(listener: android.view.MenuItem.OnActionExpandListener): android.view.MenuItem;
					public setOnMenuItemClickListener(param0: android.view.MenuItem.OnMenuItemClickListener): android.view.MenuItem;
					public setTitle(param0: number): android.view.MenuItem;
					public setTitleCondensed(title: string): android.view.MenuItem;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuItemWrapperICS extends androidx.appcompat.view.menu.BaseMenuWrapper implements android.view.MenuItem {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS>;
					public getTitle(): string;
					public setAlphabeticShortcut(param0: string): android.view.MenuItem;
					public getGroupId(): number;
					public hasSubMenu(): boolean;
					public setIcon(iconRes: number): android.view.MenuItem;
					public setChecked(param0: boolean): android.view.MenuItem;
					public constructor(context: android.content.Context, object: androidx.core.internal.view.SupportMenuItem);
					public setOnMenuItemClickListener(menuItemClickListener: android.view.MenuItem.OnMenuItemClickListener): android.view.MenuItem;
					public getContentDescription(): string;
					public setTitleCondensed(param0: string): android.view.MenuItem;
					public getIntent(): android.content.Intent;
					public setActionView(view: android.view.View): android.view.MenuItem;
					public setContentDescription(contentDescription: string): android.view.MenuItem;
					public setNumericShortcut(numericChar: string, numericModifiers: number): android.view.MenuItem;
					public setIcon(icon: android.graphics.drawable.Drawable): android.view.MenuItem;
					public getTitleCondensed(): string;
					public setIconTintList(tint: android.content.res.ColorStateList): android.view.MenuItem;
					public isEnabled(): boolean;
					public setIntent(param0: android.content.Intent): android.view.MenuItem;
					public setIntent(intent: android.content.Intent): android.view.MenuItem;
					public setTitle(title: number): android.view.MenuItem;
					public setShowAsAction(actionEnum: number): void;
					public getIcon(): android.graphics.drawable.Drawable;
					public getIconTintMode(): android.graphics.PorterDuff.Mode;
					public setEnabled(enabled: boolean): android.view.MenuItem;
					public setExclusiveCheckable(checkable: boolean): void;
					public setIcon(param0: android.graphics.drawable.Drawable): android.view.MenuItem;
					public getNumericModifiers(): number;
					public isVisible(): boolean;
					public setShowAsActionFlags(param0: number): android.view.MenuItem;
					public setActionView(resId: number): android.view.MenuItem;
					public getActionProvider(): android.view.ActionProvider;
					public setIcon(param0: number): android.view.MenuItem;
					public getAlphabeticModifiers(): number;
					public collapseActionView(): boolean;
					public getTooltipText(): string;
					public setActionView(param0: android.view.View): android.view.MenuItem;
					public expandActionView(): boolean;
					public getNumericShortcut(): string;
					public setAlphabeticShortcut(alphaChar: string, alphaModifiers: number): android.view.MenuItem;
					public setCheckable(checkable: boolean): android.view.MenuItem;
					public isActionViewExpanded(): boolean;
					public setTooltipText(tooltipText: string): android.view.MenuItem;
					public setTitle(param0: string): android.view.MenuItem;
					public setEnabled(param0: boolean): android.view.MenuItem;
					public getAlphabeticShortcut(): string;
					public setAlphabeticShortcut(alphaChar: string): android.view.MenuItem;
					public setTitle(title: string): android.view.MenuItem;
					public setShowAsAction(param0: number): void;
					public setCheckable(param0: boolean): android.view.MenuItem;
					public setChecked(checked: boolean): android.view.MenuItem;
					public getOrder(): number;
					public setOnActionExpandListener(param0: android.view.MenuItem.OnActionExpandListener): android.view.MenuItem;
					public setShortcut(param0: string, param1: string): android.view.MenuItem;
					public setShortcut(numericChar: string, alphaChar: string): android.view.MenuItem;
					public isCheckable(): boolean;
					public setNumericShortcut(param0: string): android.view.MenuItem;
					public setIconTintMode(tintMode: android.graphics.PorterDuff.Mode): android.view.MenuItem;
					public getMenuInfo(): android.view.ContextMenu.ContextMenuInfo;
					public isChecked(): boolean;
					public setVisible(param0: boolean): android.view.MenuItem;
					public getItemId(): number;
					public setOnActionExpandListener(listener: android.view.MenuItem.OnActionExpandListener): android.view.MenuItem;
					public setActionProvider(provider: android.view.ActionProvider): android.view.MenuItem;
					public setOnMenuItemClickListener(param0: android.view.MenuItem.OnMenuItemClickListener): android.view.MenuItem;
					public setNumericShortcut(numericChar: string): android.view.MenuItem;
					public setActionView(param0: number): android.view.MenuItem;
					public setTitle(param0: number): android.view.MenuItem;
					public getIconTintList(): android.content.res.ColorStateList;
					public setVisible(visible: boolean): android.view.MenuItem;
					public setShortcut(numericChar: string, alphaChar: string, numericModifiers: number, alphaModifiers: number): android.view.MenuItem;
					public getSubMenu(): android.view.SubMenu;
					public getActionView(): android.view.View;
					public setTitleCondensed(title: string): android.view.MenuItem;
					public setActionProvider(param0: android.view.ActionProvider): android.view.MenuItem;
					public setShowAsActionFlags(actionEnum: number): android.view.MenuItem;
				}
				export module MenuItemWrapperICS {
					export class ActionProviderWrapper extends androidx.core.view.ActionProvider {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS.ActionProviderWrapper>;
						public onPrepareSubMenu(param0: android.view.SubMenu): void;
						public onCreateActionView(): android.view.View;
						public onPrepareSubMenu(subMenu: android.view.SubMenu): void;
						public onCreateActionView(param0: android.view.MenuItem): android.view.View;
						public onPerformDefaultAction(): boolean;
						public hasSubMenu(): boolean;
					}
					export class ActionProviderWrapperJB extends androidx.appcompat.view.menu.MenuItemWrapperICS.ActionProviderWrapper implements android.view.ActionProvider.VisibilityListener {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS.ActionProviderWrapperJB>;
						public setVisibilityListener(listener: androidx.core.view.ActionProvider.VisibilityListener): void;
						public overridesItemVisibility(): boolean;
						public onCreateActionView(): android.view.View;
						public setVisibilityListener(param0: androidx.core.view.ActionProvider.VisibilityListener): void;
						public onCreateActionView(param0: android.view.MenuItem): android.view.View;
						public refreshVisibility(): void;
						public isVisible(): boolean;
						public onActionProviderVisibilityChanged(isVisible: boolean): void;
						public onCreateActionView(forItem: android.view.MenuItem): android.view.View;
						public onActionProviderVisibilityChanged(param0: boolean): void;
					}
					export class CollapsibleActionViewWrapper extends android.widget.FrameLayout implements androidx.appcompat.view.CollapsibleActionView {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS.CollapsibleActionViewWrapper>;
						public isLayoutRequested(): boolean;
						public onStopNestedScroll(param0: android.view.View): void;
						public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
						public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
						public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
						public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public requestTransparentRegion(param0: android.view.View): void;
						public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
						public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
						public addView(child: android.view.View): void;
						public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
						public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
						public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
						public onActionViewExpanded(): void;
						public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
						public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
						public getTextDirection(): number;
						public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
						public sendAccessibilityEvent(eventType: number): void;
						public canResolveTextDirection(): boolean;
						public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public getParent(): android.view.ViewParent;
						public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
						public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
						public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
						public requestLayout(): void;
						public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
						public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
						public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
						public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
						public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
						public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
						public isTextDirectionResolved(): boolean;
						public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public focusSearch(focused: android.view.View, direction: number): android.view.View;
						public focusSearch(direction: number): android.view.View;
						public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
						public addView(child: android.view.View, index: number): void;
						public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
						public clearChildFocus(child: android.view.View): void;
						public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
						public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
						public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
						public requestFitSystemWindows(): void;
						public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
						public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public getTextAlignment(): number;
						public onActionViewCollapsed(): void;
						public focusSearch(param0: android.view.View, param1: number): android.view.View;
						public createContextMenu(param0: android.view.ContextMenu): void;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public createContextMenu(menu: android.view.ContextMenu): void;
						public onStopNestedScroll(child: android.view.View): void;
						public canResolveLayoutDirection(): boolean;
						public getParentForAccessibility(): android.view.ViewParent;
						public sendAccessibilityEvent(param0: number): void;
						public showContextMenuForChild(originalView: android.view.View): boolean;
						public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public requestChildFocus(child: android.view.View, focused: android.view.View): void;
						public requestTransparentRegion(child: android.view.View): void;
						public recomputeViewAttributes(param0: android.view.View): void;
						public isTextAlignmentResolved(): boolean;
						public bringChildToFront(child: android.view.View): void;
						public focusableViewAvailable(param0: android.view.View): void;
						public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
						public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
						public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
						public showContextMenuForChild(param0: android.view.View): boolean;
						public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
						public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
						public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
						public focusableViewAvailable(v: android.view.View): void;
						public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
						public isLayoutDirectionResolved(): boolean;
						public recomputeViewAttributes(child: android.view.View): void;
						public removeView(param0: android.view.View): void;
						public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
						public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
						public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
						public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
						public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
						public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
						public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
						public childDrawableStateChanged(param0: android.view.View): void;
						public addView(child: android.view.View, width: number, height: number): void;
						public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
						public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
						public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
						public removeView(view: android.view.View): void;
						public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
						public clearChildFocus(param0: android.view.View): void;
						public childDrawableStateChanged(child: android.view.View): void;
						public bringChildToFront(param0: android.view.View): void;
						public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					}
					export class OnActionExpandListenerWrapper extends java.lang.Object implements android.view.MenuItem.OnActionExpandListener {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS.OnActionExpandListenerWrapper>;
						public onMenuItemActionExpand(item: android.view.MenuItem): boolean;
						public onMenuItemActionExpand(param0: android.view.MenuItem): boolean;
						public onMenuItemActionCollapse(item: android.view.MenuItem): boolean;
						public onMenuItemActionCollapse(param0: android.view.MenuItem): boolean;
					}
					export class OnMenuItemClickListenerWrapper extends java.lang.Object implements android.view.MenuItem.OnMenuItemClickListener {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuItemWrapperICS.OnMenuItemClickListenerWrapper>;
						public onMenuItemClick(param0: android.view.MenuItem): boolean;
						public onMenuItemClick(item: android.view.MenuItem): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export abstract class MenuPopup extends java.lang.Object implements androidx.appcompat.view.menu.ShowableListMenu, androidx.appcompat.view.menu.MenuPresenter, android.widget.AdapterView.OnItemClickListener {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuPopup>;
					public setAnchorView(param0: android.view.View): void;
					public static shouldPreserveIconSpacing(menu: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public isShowing(): boolean;
					public collapseItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public getMenuView(param0: android.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public setVerticalOffset(param0: number): void;
					public closeMenuOnSubMenuOpened(): boolean;
					public expandItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public static toMenuAdapter(adapter: android.widget.ListAdapter): androidx.appcompat.view.menu.MenuAdapter;
					public onItemClick(param0: android.widget.AdapterView<any>, param1: android.view.View, param2: number, param3: number): void;
					public initForMenu(context: android.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder): void;
					public initForMenu(param0: android.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
					public setEpicenterBounds(bounds: android.graphics.Rect): void;
					public flagActionItems(): boolean;
					public show(): void;
					public setGravity(param0: number): void;
					public getId(): number;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public updateMenuView(param0: boolean): void;
					public onItemClick(parent: android.widget.AdapterView<any>, view: android.view.View, position: number, id: number): void;
					public setHorizontalOffset(param0: number): void;
					public getEpicenterBounds(): android.graphics.Rect;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public static measureIndividualMenuWidth(adapter: android.widget.ListAdapter, parent: android.view.ViewGroup, context: android.content.Context, maxAllowedWidth: number): number;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public addMenu(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public setForceShowIcon(param0: boolean): void;
					public getMenuView(root: android.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public dismiss(): void;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public setShowTitle(param0: boolean): void;
					public setOnDismissListener(param0: android.widget.PopupWindow.OnDismissListener): void;
					public getListView(): android.widget.ListView;
					public onSaveInstanceState(): android.os.Parcelable;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuPopupHelper extends java.lang.Object implements androidx.appcompat.view.menu.MenuHelper {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuPopupHelper>;
					public getGravity(): number;
					public tryShow(): boolean;
					public show(): void;
					public setPresenterCallback(cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public getPopup(): androidx.appcompat.view.menu.MenuPopup;
					public isShowing(): boolean;
					public setOnDismissListener(listener: android.widget.PopupWindow.OnDismissListener): void;
					public constructor(context: android.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder, anchorView: android.view.View);
					public setForceShowIcon(forceShowIcon: boolean): void;
					public setPresenterCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public show(x: number, y: number): void;
					public onDismiss(): void;
					public setGravity(gravity: number): void;
					public constructor(context: android.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder);
					public tryShow(x: number, y: number): boolean;
					public constructor(context: android.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder, anchorView: android.view.View, overflowOnly: boolean, popupStyleAttr: number, popupStyleRes: number);
					public constructor(context: android.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder, anchorView: android.view.View, overflowOnly: boolean, popupStyleAttr: number);
					public dismiss(): void;
					public setAnchorView(anchor: android.view.View): void;
					public getListView(): android.widget.ListView;
				}
				export module MenuPopupHelper {
					export class Api17Impl extends java.lang.Object {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuPopupHelper.Api17Impl>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuPresenter extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuPresenter>;
					/**
					 * Constructs a new instance of the androidx.appcompat.view.menu.MenuPresenter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						initForMenu(param0: android.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
						getMenuView(param0: android.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
						updateMenuView(param0: boolean): void;
						setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
						onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
						onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
						flagActionItems(): boolean;
						expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
						collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
						getId(): number;
						onSaveInstanceState(): android.os.Parcelable;
						onRestoreInstanceState(param0: android.os.Parcelable): void;
					});
					public constructor();
					public getMenuView(param0: android.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public getId(): number;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public initForMenu(param0: android.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public updateMenuView(param0: boolean): void;
					public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public flagActionItems(): boolean;
					public onSaveInstanceState(): android.os.Parcelable;
				}
				export module MenuPresenter {
					export class Callback extends java.lang.Object {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuPresenter.Callback>;
						/**
						 * Constructs a new instance of the androidx.appcompat.view.menu.MenuPresenter$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
							onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
						});
						public constructor();
						public onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
						public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuView extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuView>;
					/**
					 * Constructs a new instance of the androidx.appcompat.view.menu.MenuView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						initialize(param0: androidx.appcompat.view.menu.MenuBuilder): void;
						getWindowAnimations(): number;
					});
					public constructor();
					public initialize(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public getWindowAnimations(): number;
				}
				export module MenuView {
					export class ItemView extends java.lang.Object {
						public static class: java.lang.Class<androidx.appcompat.view.menu.MenuView.ItemView>;
						/**
						 * Constructs a new instance of the androidx.appcompat.view.menu.MenuView$ItemView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							initialize(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: number): void;
							getItemData(): androidx.appcompat.view.menu.MenuItemImpl;
							setTitle(param0: string): void;
							setEnabled(param0: boolean): void;
							setCheckable(param0: boolean): void;
							setChecked(param0: boolean): void;
							setShortcut(param0: boolean, param1: string): void;
							setIcon(param0: android.graphics.drawable.Drawable): void;
							prefersCondensedTitle(): boolean;
							showsIcon(): boolean;
						});
						public constructor();
						public setChecked(param0: boolean): void;
						public prefersCondensedTitle(): boolean;
						public setTitle(param0: string): void;
						public setShortcut(param0: boolean, param1: string): void;
						public getItemData(): androidx.appcompat.view.menu.MenuItemImpl;
						public showsIcon(): boolean;
						public setCheckable(param0: boolean): void;
						public setIcon(param0: android.graphics.drawable.Drawable): void;
						public initialize(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: number): void;
						public setEnabled(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class MenuWrapperICS extends androidx.appcompat.view.menu.BaseMenuWrapper implements android.view.Menu {
					public static class: java.lang.Class<androidx.appcompat.view.menu.MenuWrapperICS>;
					public setGroupVisible(param0: number, param1: boolean): void;
					public add(param0: number, param1: number, param2: number, param3: number): android.view.MenuItem;
					public setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;
					public setQwertyMode(param0: boolean): void;
					public performIdentifierAction(id: number, flags: number): boolean;
					public performIdentifierAction(param0: number, param1: number): boolean;
					public setGroupEnabled(group: number, enabled: boolean): void;
					public addSubMenu(title: string): android.view.SubMenu;
					public size(): number;
					public findItem(id: number): android.view.MenuItem;
					public isShortcutKey(param0: number, param1: android.view.KeyEvent): boolean;
					public isShortcutKey(keyCode: number, event: android.view.KeyEvent): boolean;
					public addSubMenu(param0: number, param1: number, param2: number, param3: string): android.view.SubMenu;
					public add(groupId: number, itemId: number, order: number, title: string): android.view.MenuItem;
					public addSubMenu(groupId: number, itemId: number, order: number, title: string): android.view.SubMenu;
					public addIntentOptions(groupId: number, itemId: number, order: number, caller: android.content.ComponentName, specifics: android.content.Intent[], intent: android.content.Intent, flags: number, outSpecificItems: android.view.MenuItem[]): number;
					public constructor(context: android.content.Context, object: androidx.core.internal.view.SupportMenu);
					public add(titleRes: number): android.view.MenuItem;
					public clear(): void;
					public close(): void;
					public findItem(param0: number): android.view.MenuItem;
					public add(param0: string): android.view.MenuItem;
					public performShortcut(param0: number, param1: android.view.KeyEvent, param2: number): boolean;
					public addIntentOptions(param0: number, param1: number, param2: number, param3: android.content.ComponentName, param4: android.content.Intent[], param5: android.content.Intent, param6: number, param7: android.view.MenuItem[]): number;
					public setQwertyMode(isQwerty: boolean): void;
					public getItem(index: number): android.view.MenuItem;
					public removeGroup(groupId: number): void;
					public addSubMenu(param0: number, param1: number, param2: number, param3: number): android.view.SubMenu;
					public setGroupVisible(group: number, visible: boolean): void;
					public performShortcut(keyCode: number, event: android.view.KeyEvent, flags: number): boolean;
					public addSubMenu(param0: string): android.view.SubMenu;
					public add(groupId: number, itemId: number, order: number, titleRes: number): android.view.MenuItem;
					public addSubMenu(groupId: number, itemId: number, order: number, titleRes: number): android.view.SubMenu;
					public removeGroup(param0: number): void;
					public addSubMenu(titleRes: number): android.view.SubMenu;
					public getItem(param0: number): android.view.MenuItem;
					public add(param0: number, param1: number, param2: number, param3: string): android.view.MenuItem;
					public add(title: string): android.view.MenuItem;
					public setGroupEnabled(param0: number, param1: boolean): void;
					public add(param0: number): android.view.MenuItem;
					public removeItem(param0: number): void;
					public hasVisibleItems(): boolean;
					public addSubMenu(param0: number): android.view.SubMenu;
					public removeItem(id: number): void;
					public setGroupCheckable(group: number, checkable: boolean, exclusive: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class ShowableListMenu extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.view.menu.ShowableListMenu>;
					/**
					 * Constructs a new instance of the androidx.appcompat.view.menu.ShowableListMenu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						show(): void;
						dismiss(): void;
						isShowing(): boolean;
						getListView(): android.widget.ListView;
					});
					public constructor();
					public show(): void;
					public isShowing(): boolean;
					public dismiss(): void;
					public getListView(): android.widget.ListView;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class StandardMenuPopup extends androidx.appcompat.view.menu.MenuPopup implements android.widget.PopupWindow.OnDismissListener, android.widget.AdapterView.OnItemClickListener, androidx.appcompat.view.menu.MenuPresenter, android.view.View.OnKeyListener {
					public static class: java.lang.Class<androidx.appcompat.view.menu.StandardMenuPopup>;
					public setAnchorView(param0: android.view.View): void;
					public isShowing(): boolean;
					public getMenuView(param0: android.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public collapseItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public constructor(context: android.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder, anchorView: android.view.View, popupStyleAttr: number, popupStyleRes: number, overflowOnly: boolean);
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public onSubMenuSelected(subMenu: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public onDismiss(): void;
					public setVerticalOffset(param0: number): void;
					public addMenu(menu: androidx.appcompat.view.menu.MenuBuilder): void;
					public onKey(v: android.view.View, keyCode: number, event: android.view.KeyEvent): boolean;
					public expandItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public setHorizontalOffset(x: number): void;
					public onItemClick(param0: android.widget.AdapterView<any>, param1: android.view.View, param2: number, param3: number): void;
					public initForMenu(context: android.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder): void;
					public initForMenu(param0: android.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
					public flagActionItems(): boolean;
					public show(): void;
					public setGravity(param0: number): void;
					public getId(): number;
					public setOnDismissListener(listener: android.widget.PopupWindow.OnDismissListener): void;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public updateMenuView(param0: boolean): void;
					public setVerticalOffset(y: number): void;
					public onItemClick(parent: android.widget.AdapterView<any>, view: android.view.View, position: number, id: number): void;
					public setGravity(gravity: number): void;
					public setCallback(cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public updateMenuView(cleared: boolean): void;
					public setHorizontalOffset(param0: number): void;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public setForceShowIcon(forceShow: boolean): void;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onRestoreInstanceState(state: android.os.Parcelable): void;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public addMenu(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public setForceShowIcon(param0: boolean): void;
					public getMenuView(root: android.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public dismiss(): void;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public setOnDismissListener(param0: android.widget.PopupWindow.OnDismissListener): void;
					public setShowTitle(param0: boolean): void;
					public onSaveInstanceState(): android.os.Parcelable;
					public setAnchorView(anchor: android.view.View): void;
					public getListView(): android.widget.ListView;
					public setShowTitle(showTitle: boolean): void;
					public onKey(param0: android.view.View, param1: number, param2: android.view.KeyEvent): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class SubMenuBuilder extends androidx.appcompat.view.menu.MenuBuilder implements android.view.SubMenu {
					public static class: java.lang.Class<androidx.appcompat.view.menu.SubMenuBuilder>;
					public setGroupVisible(param0: number, param1: boolean): void;
					public setQwertyMode(param0: boolean): void;
					public isQwertyMode(): boolean;
					public performIdentifierAction(param0: number, param1: number): boolean;
					public setHeaderIcon(param0: android.graphics.drawable.Drawable): android.view.SubMenu;
					public setGroupEnabled(group: number, enabled: boolean): void;
					public size(): number;
					public findItem(id: number): android.view.MenuItem;
					public setHeaderIcon(icon: android.graphics.drawable.Drawable): android.view.SubMenu;
					public isShortcutsVisible(): boolean;
					public add(titleRes: number): android.view.MenuItem;
					public findItem(param0: number): android.view.MenuItem;
					public close(): void;
					public add(param0: string): android.view.MenuItem;
					public addSubMenu(group: number, id: number, categoryOrder: number, title: string): android.view.SubMenu;
					public setHeaderIcon(iconRes: number): android.view.SubMenu;
					public setCallback(callback: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
					public constructor(context: android.content.Context);
					public collapseItemActionView(item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public setHeaderView(param0: android.view.View): android.view.SubMenu;
					public addSubMenu(param0: string): android.view.SubMenu;
					public setShortcutsVisible(shortcutsVisible: boolean): void;
					public setIcon(param0: number): android.view.SubMenu;
					public setIcon(iconRes: number): android.view.SubMenu;
					public add(group: number, id: number, categoryOrder: number, title: string): android.view.MenuItem;
					public setIcon(icon: android.graphics.drawable.Drawable): android.view.SubMenu;
					public add(group: number, id: number, categoryOrder: number, title: number): android.view.MenuItem;
					public getItem(param0: number): android.view.MenuItem;
					public add(param0: number, param1: number, param2: number, param3: string): android.view.MenuItem;
					public setGroupEnabled(param0: number, param1: boolean): void;
					public close(closeAllMenus: boolean): void;
					public setCallback(cb: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
					public setHeaderTitle(param0: string): android.view.SubMenu;
					public constructor(context: android.content.Context, parentMenu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl);
					public hasVisibleItems(): boolean;
					public setHeaderTitle(titleRes: number): android.view.SubMenu;
					public getActionViewStatesKey(): string;
					public expandItemActionView(item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public add(param0: number, param1: number, param2: number, param3: number): android.view.MenuItem;
					public setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;
					public setHeaderView(view: android.view.View): android.view.SubMenu;
					public performIdentifierAction(id: number, flags: number): boolean;
					public addSubMenu(title: string): android.view.SubMenu;
					public setGroupDividerEnabled(param0: boolean): void;
					public isShortcutKey(param0: number, param1: android.view.KeyEvent): boolean;
					public setIcon(param0: android.graphics.drawable.Drawable): android.view.SubMenu;
					public addSubMenu(param0: number, param1: number, param2: number, param3: string): android.view.SubMenu;
					public isShortcutKey(keyCode: number, event: android.view.KeyEvent): boolean;
					public getRootMenu(): androidx.appcompat.view.menu.MenuBuilder;
					public isGroupDividerEnabled(): boolean;
					public clear(): void;
					public setHeaderTitle(title: string): android.view.SubMenu;
					public getItem(): android.view.MenuItem;
					public performShortcut(param0: number, param1: android.view.KeyEvent, param2: number): boolean;
					public addIntentOptions(param0: number, param1: number, param2: number, param3: android.content.ComponentName, param4: android.content.Intent[], param5: android.content.Intent, param6: number, param7: android.view.MenuItem[]): number;
					public setQwertyMode(isQwerty: boolean): void;
					public getItem(index: number): android.view.MenuItem;
					public addIntentOptions(group: number, id: number, categoryOrder: number, caller: android.content.ComponentName, specifics: android.content.Intent[], intent: android.content.Intent, flags: number, outSpecificItems: android.view.MenuItem[]): number;
					public addSubMenu(param0: number, param1: number, param2: number, param3: number): android.view.SubMenu;
					public setHeaderIcon(param0: number): android.view.SubMenu;
					public setGroupDividerEnabled(enabled: boolean): void;
					public setGroupVisible(group: number, visible: boolean): void;
					public performShortcut(keyCode: number, event: android.view.KeyEvent, flags: number): boolean;
					public clearHeader(): void;
					public addSubMenu(group: number, id: number, categoryOrder: number, title: number): android.view.SubMenu;
					public removeGroup(param0: number): void;
					public addSubMenu(titleRes: number): android.view.SubMenu;
					public add(title: string): android.view.MenuItem;
					public setGroupDividerEnabled(groupDividerEnabled: boolean): void;
					public setHeaderTitle(param0: number): android.view.SubMenu;
					public getParentMenu(): android.view.Menu;
					public add(param0: number): android.view.MenuItem;
					public removeItem(param0: number): void;
					public addSubMenu(param0: number): android.view.SubMenu;
					public removeItem(id: number): void;
					public removeGroup(group: number): void;
					public setGroupCheckable(group: number, checkable: boolean, exclusive: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module view {
			export module menu {
				export class SubMenuWrapperICS extends androidx.appcompat.view.menu.MenuWrapperICS implements android.view.SubMenu {
					public static class: java.lang.Class<androidx.appcompat.view.menu.SubMenuWrapperICS>;
					public setGroupVisible(param0: number, param1: boolean): void;
					public setQwertyMode(param0: boolean): void;
					public performIdentifierAction(param0: number, param1: number): boolean;
					public setHeaderIcon(param0: android.graphics.drawable.Drawable): android.view.SubMenu;
					public setGroupEnabled(group: number, enabled: boolean): void;
					public size(): number;
					public findItem(id: number): android.view.MenuItem;
					public add(groupId: number, itemId: number, order: number, title: string): android.view.MenuItem;
					public setHeaderIcon(icon: android.graphics.drawable.Drawable): android.view.SubMenu;
					public add(titleRes: number): android.view.MenuItem;
					public findItem(param0: number): android.view.MenuItem;
					public close(): void;
					public add(param0: string): android.view.MenuItem;
					public setHeaderIcon(iconRes: number): android.view.SubMenu;
					public removeGroup(groupId: number): void;
					public setHeaderView(param0: android.view.View): android.view.SubMenu;
					public addSubMenu(param0: string): android.view.SubMenu;
					public add(groupId: number, itemId: number, order: number, titleRes: number): android.view.MenuItem;
					public setIcon(param0: number): android.view.SubMenu;
					public setIcon(iconRes: number): android.view.SubMenu;
					public setIcon(icon: android.graphics.drawable.Drawable): android.view.SubMenu;
					public getItem(param0: number): android.view.MenuItem;
					public add(param0: number, param1: number, param2: number, param3: string): android.view.MenuItem;
					public setGroupEnabled(param0: number, param1: boolean): void;
					public setHeaderTitle(param0: string): android.view.SubMenu;
					public hasVisibleItems(): boolean;
					public setHeaderTitle(titleRes: number): android.view.SubMenu;
					public add(param0: number, param1: number, param2: number, param3: number): android.view.MenuItem;
					public setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;
					public setHeaderView(view: android.view.View): android.view.SubMenu;
					public performIdentifierAction(id: number, flags: number): boolean;
					public addSubMenu(title: string): android.view.SubMenu;
					public isShortcutKey(param0: number, param1: android.view.KeyEvent): boolean;
					public setIcon(param0: android.graphics.drawable.Drawable): android.view.SubMenu;
					public addSubMenu(param0: number, param1: number, param2: number, param3: string): android.view.SubMenu;
					public isShortcutKey(keyCode: number, event: android.view.KeyEvent): boolean;
					public addSubMenu(groupId: number, itemId: number, order: number, title: string): android.view.SubMenu;
					public addIntentOptions(groupId: number, itemId: number, order: number, caller: android.content.ComponentName, specifics: android.content.Intent[], intent: android.content.Intent, flags: number, outSpecificItems: android.view.MenuItem[]): number;
					public clear(): void;
					public setHeaderTitle(title: string): android.view.SubMenu;
					public getItem(): android.view.MenuItem;
					public performShortcut(param0: number, param1: android.view.KeyEvent, param2: number): boolean;
					public addIntentOptions(param0: number, param1: number, param2: number, param3: android.content.ComponentName, param4: android.content.Intent[], param5: android.content.Intent, param6: number, param7: android.view.MenuItem[]): number;
					public setQwertyMode(isQwerty: boolean): void;
					public getItem(index: number): android.view.MenuItem;
					public addSubMenu(param0: number, param1: number, param2: number, param3: number): android.view.SubMenu;
					public setHeaderIcon(param0: number): android.view.SubMenu;
					public setGroupVisible(group: number, visible: boolean): void;
					public performShortcut(keyCode: number, event: android.view.KeyEvent, flags: number): boolean;
					public clearHeader(): void;
					public addSubMenu(groupId: number, itemId: number, order: number, titleRes: number): android.view.SubMenu;
					public removeGroup(param0: number): void;
					public addSubMenu(titleRes: number): android.view.SubMenu;
					public add(title: string): android.view.MenuItem;
					public setHeaderTitle(param0: number): android.view.SubMenu;
					public add(param0: number): android.view.MenuItem;
					public removeItem(param0: number): void;
					public addSubMenu(param0: number): android.view.SubMenu;
					public removeItem(id: number): void;
					public setGroupCheckable(group: number, checkable: boolean, exclusive: boolean): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export abstract class AbsActionBarView extends android.view.ViewGroup {
				public static class: java.lang.Class<androidx.appcompat.widget.AbsActionBarView>;
				public mVisAnimListener: androidx.appcompat.widget.AbsActionBarView.VisibilityAnimListener;
				public mPopupContext: android.content.Context;
				public mMenuView: androidx.appcompat.widget.ActionMenuView;
				public mActionMenuPresenter: androidx.appcompat.widget.ActionMenuPresenter;
				public mContentHeight: number;
				public mVisibilityAnim: androidx.core.view.ViewPropertyAnimatorCompat;
				public animateToVisibility(visibility: number): void;
				public addView(child: android.view.View, width: number, height: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public setVisibility(visibility: number): void;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public hideOverflowMenu(): boolean;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public getAnimatedVisibility(): number;
				public setContentHeight(height: number): void;
				public getContentHeight(): number;
				public bringChildToFront(child: android.view.View): void;
				public onHoverEvent(event: android.view.MotionEvent): boolean;
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public measureChildView(child: android.view.View, availableWidth: number, childSpecHeight: number, spacing: number): number;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public addView(child: android.view.View): void;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public dismissPopupMenus(): void;
				public addView(child: android.view.View, index: number): void;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public isOverflowReserved(): boolean;
				public canShowOverflowMenu(): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public isOverflowMenuShowing(): boolean;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public isOverflowMenuShowPending(): boolean;
				public recomputeViewAttributes(param0: android.view.View): void;
				public clearChildFocus(param0: android.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public onHoverEvent(ev: android.view.MotionEvent): boolean;
				public showOverflowMenu(): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public setupAnimatorToVisibility(visibility: number, duration: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public sendAccessibilityEvent(eventType: number): void;
				public requestFitSystemWindows(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public onConfigurationChanged(newConfig: android.content.res.Configuration): void;
				public focusSearch(direction: number): android.view.View;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public onTouchEvent(event: android.view.MotionEvent): boolean;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public postShowOverflowMenu(): void;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public static next(x: number, val: number, isRtl: boolean): number;
				public removeView(view: android.view.View): void;
				public requestLayout(): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public onTouchEvent(ev: android.view.MotionEvent): boolean;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onStopNestedScroll(param0: android.view.View): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public positionChild(child: android.view.View, x: number, y: number, contentHeight: number, reverse: boolean): number;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
			export module AbsActionBarView {
				export class VisibilityAnimListener extends java.lang.Object implements androidx.core.view.ViewPropertyAnimatorListener {
					public static class: java.lang.Class<androidx.appcompat.widget.AbsActionBarView.VisibilityAnimListener>;
					public withFinalVisibility(animation: androidx.core.view.ViewPropertyAnimatorCompat, visibility: number): androidx.appcompat.widget.AbsActionBarView.VisibilityAnimListener;
					public onAnimationCancel(view: android.view.View): void;
					public onAnimationCancel(param0: android.view.View): void;
					public onAnimationStart(param0: android.view.View): void;
					public onAnimationStart(view: android.view.View): void;
					public onAnimationEnd(view: android.view.View): void;
					public constructor(this$0: androidx.appcompat.widget.AbsActionBarView);
					public onAnimationEnd(param0: android.view.View): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionBarBackgroundDrawable extends android.graphics.drawable.Drawable {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionBarBackgroundDrawable>;
				public constructor(container: androidx.appcompat.widget.ActionBarContainer);
				public setColorFilter(color: number, mode: android.graphics.PorterDuff.Mode): void;
				public setColorFilter(cf: android.graphics.ColorFilter): void;
				public draw(canvas: android.graphics.Canvas): void;
				public getOutline(outline: any): void;
				public setAlpha(param0: number): void;
				public setColorFilter(param0: android.graphics.ColorFilter): void;
				public setAlpha(alpha: number): void;
				public getOpacity(): number;
				public constructor();
				public draw(param0: android.graphics.Canvas): void;
			}
			export module ActionBarBackgroundDrawable {
				export class Api21Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionBarBackgroundDrawable.Api21Impl>;
					public static getOutline(drawable: android.graphics.drawable.Drawable, outline: any): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionBarContainer extends android.widget.FrameLayout {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionBarContainer>;
				public addView(child: android.view.View, width: number, height: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public onInterceptTouchEvent(ev: android.view.MotionEvent): boolean;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				public constructor(context: android.content.Context);
				public setTransitioning(isTransitioning: boolean): void;
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public setVisibility(visibility: number): void;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public setStackedBackground(bg: android.graphics.drawable.Drawable): void;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onHoverEvent(event: android.view.MotionEvent): boolean;
				public drawableStateChanged(): void;
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public jumpDrawablesToCurrentState(): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public onFinishInflate(): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				public startActionModeForChild(child: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public addView(child: android.view.View): void;
				public startActionModeForChild(child: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public addView(child: android.view.View, index: number): void;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public clearChildFocus(param0: android.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onHoverEvent(ev: android.view.MotionEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public requestFitSystemWindows(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setPrimaryBackground(bg: android.graphics.drawable.Drawable): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public verifyDrawable(who: android.graphics.drawable.Drawable): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public focusSearch(direction: number): android.view.View;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public setSplitBackground(bg: android.graphics.drawable.Drawable): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public onTouchEvent(event: android.view.MotionEvent): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public removeView(view: android.view.View): void;
				public requestLayout(): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public onTouchEvent(ev: android.view.MotionEvent): boolean;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onStopNestedScroll(param0: android.view.View): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public setTabContainer(tabView: androidx.appcompat.widget.ScrollingTabContainerView): void;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getTabContainer(): android.view.View;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
			export module ActionBarContainer {
				export class Api21Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionBarContainer.Api21Impl>;
					public static invalidateOutline(drawable: androidx.appcompat.widget.ActionBarContainer): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionBarContextView extends androidx.appcompat.widget.AbsActionBarView {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionBarContextView>;
				public addView(child: android.view.View, width: number, height: number): void;
				public setTitleOptional(titleOptional: boolean): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public generateLayoutParams(attrs: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				public constructor(context: android.content.Context);
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public hideOverflowMenu(): boolean;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public setContentHeight(height: number): void;
				public getSubtitle(): string;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public isTitleOptional(): boolean;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public addView(child: android.view.View): void;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyle: number);
				public addView(child: android.view.View, index: number): void;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public getTitle(): string;
				public setSubtitle(subtitle: string): void;
				public isOverflowMenuShowing(): boolean;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public clearChildFocus(param0: android.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public showOverflowMenu(): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public setCustomView(view: android.view.View): void;
				public sendAccessibilityEvent(eventType: number): void;
				public requestFitSystemWindows(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public focusSearch(direction: number): android.view.View;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public onDetachedFromWindow(): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
				public removeView(view: android.view.View): void;
				public generateLayoutParams(p: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
				public requestLayout(): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public setTitle(title: string): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public onStopNestedScroll(param0: android.view.View): void;
				public killMode(): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public initForMode(mode: androidx.appcompat.view.ActionMode): void;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public closeMode(): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public shouldDelayChildPressedState(): boolean;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionBarOverlayLayout extends android.view.ViewGroup implements androidx.appcompat.widget.DecorContentParent, androidx.core.view.NestedScrollingParent, androidx.core.view.NestedScrollingParent2, androidx.core.view.NestedScrollingParent3 {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionBarOverlayLayout>;
				public generateDefaultLayoutParams(): androidx.appcompat.widget.ActionBarOverlayLayout.LayoutParams;
				public addView(child: android.view.View, width: number, height: number): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number, param3: number): void;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number[]): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public setIcon(param0: number): void;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public onStopNestedScroll(param0: android.view.View, param1: number): void;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number, consumed: number[]): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[], type: number): void;
				public setIcon(d: android.graphics.drawable.Drawable): void;
				public onWindowVisibilityChanged(visibility: number): void;
				public onApplyWindowInsets(insets: android.view.WindowInsets): android.view.WindowInsets;
				public generateLayoutParams(attrs: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
				public constructor(context: android.content.Context);
				public draw(c: android.graphics.Canvas): void;
				public setWindowCallback(cb: android.view.Window.Callback): void;
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public hideOverflowMenu(): boolean;
				public setShowingForActionMode(showing: boolean): void;
				public onStopNestedScroll(target: android.view.View, type: number): void;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public saveToolbarHierarchyState(toolbarStates: android.util.SparseArray<android.os.Parcelable>): void;
				public setLogo(param0: number): void;
				public onStopNestedScroll(target: android.view.View): void;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public draw(canvas: android.graphics.Canvas): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				/** @deprecated */
				public fitSystemWindows(insets: android.graphics.Rect): boolean;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public setIcon(param0: android.graphics.drawable.Drawable): void;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				public setLogo(resId: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public addView(child: android.view.View): void;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public fitSystemWindows(insets: android.graphics.Rect): boolean;
				public saveToolbarHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
				public addView(child: android.view.View, index: number): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, axes: number, type: number): boolean;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public dismissPopups(): void;
				public onWindowSystemUiVisibilityChanged(visible: number): void;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public setHideOnContentScrollEnabled(hideOnContentScroll: boolean): void;
				public canShowOverflowMenu(): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public getTitle(): string;
				public hasIcon(): boolean;
				public isOverflowMenuShowing(): boolean;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[], param4: number): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, axes: number): boolean;
				public isOverflowMenuShowPending(): boolean;
				public recomputeViewAttributes(param0: android.view.View): void;
				public setMenu(menu: android.view.Menu, cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public clearChildFocus(param0: android.view.View): void;
				public setHasNonEmbeddedTabs(hasNonEmbeddedTabs: boolean): void;
				public setMenu(param0: android.view.Menu, param1: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public setUiOptions(uiOptions: number): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public hasLogo(): boolean;
				public showOverflowMenu(): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public getActionBarHideOffset(): number;
				public setIcon(resId: number): void;
				public setWindowCallback(param0: android.view.Window.Callback): void;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number): void;
				public onApplyWindowInsets(_in_: android.view.WindowInsets): android.view.WindowInsets;
				public sendAccessibilityEvent(eventType: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number, param3: number): boolean;
				public restoreToolbarHierarchyState(toolbarStates: android.util.SparseArray<android.os.Parcelable>): void;
				public requestFitSystemWindows(): void;
				public checkLayoutParams(p: android.view.ViewGroup.LayoutParams): boolean;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				/** @deprecated */
				public onWindowSystemUiVisibilityChanged(visible: number): void;
				public getNestedScrollAxes(): number;
				public setWindowTitle(param0: string): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public setUiOptions(param0: number): void;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public setActionBarHideOffset(offset: number): void;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public setActionBarVisibilityCallback(cb: androidx.appcompat.widget.ActionBarOverlayLayout.ActionBarVisibilityCallback): void;
				public onConfigurationChanged(newConfig: android.content.res.Configuration): void;
				public focusSearch(direction: number): android.view.View;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public onDetachedFromWindow(): void;
				public setMenuPrepared(): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public initFeature(param0: number): void;
				public canResolveTextAlignment(): boolean;
				public isHideOnContentScrollEnabled(): boolean;
				public initFeature(windowFeature: number): void;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
				public removeView(view: android.view.View): void;
				public generateLayoutParams(p: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
				public requestLayout(): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public onStopNestedScroll(param0: android.view.View): void;
				public isInOverlayMode(): boolean;
				public restoreToolbarHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
				public setOverlayMode(overlayMode: boolean): void;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number, type: number): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public canResolveLayoutDirection(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public generateLayoutParams(attrs: android.util.AttributeSet): androidx.appcompat.widget.ActionBarOverlayLayout.LayoutParams;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public setWindowTitle(title: string): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public shouldDelayChildPressedState(): boolean;
			}
			export module ActionBarOverlayLayout {
				export class ActionBarVisibilityCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionBarOverlayLayout.ActionBarVisibilityCallback>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActionBarOverlayLayout$ActionBarVisibilityCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWindowVisibilityChanged(param0: number): void;
						showForSystem(): void;
						hideForSystem(): void;
						enableContentAnimations(param0: boolean): void;
						onContentScrollStarted(): void;
						onContentScrollStopped(): void;
					});
					public constructor();
					public enableContentAnimations(param0: boolean): void;
					public onWindowVisibilityChanged(param0: number): void;
					public onContentScrollStarted(): void;
					public onContentScrollStopped(): void;
					public showForSystem(): void;
					public hideForSystem(): void;
				}
				export class LayoutParams extends android.view.ViewGroup.MarginLayoutParams {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionBarOverlayLayout.LayoutParams>;
					public constructor(source: android.view.ViewGroup.MarginLayoutParams);
					public constructor(c: android.content.Context, attrs: android.util.AttributeSet);
					public constructor(source: android.view.ViewGroup.LayoutParams);
					public constructor(width: number, height: number);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionMenuPresenter extends androidx.appcompat.view.menu.BaseMenuPresenter implements androidx.core.view.ActionProvider.SubUiVisibilityListener {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter>;
				public onSubMenuSelected(subMenu: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
				public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
				public setExpandedActionViewsExclusive(isExclusive: boolean): void;
				public showOverflowMenu(): boolean;
				public onRestoreInstanceState(state: android.os.Parcelable): void;
				public getMenuView(root: android.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
				public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public flagActionItems(): boolean;
				public initForMenu(param0: android.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
				public setCallback(cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
				public constructor(context: android.content.Context, menuLayoutRes: number, itemLayoutRes: number);
				public onSubUiVisibilityChanged(isVisible: boolean): void;
				public updateMenuView(cleared: boolean): void;
				public onSubUiVisibilityChanged(param0: boolean): void;
				public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
				public dismissPopupMenus(): boolean;
				public bindItemView(item: androidx.appcompat.view.menu.MenuItemImpl, itemView: androidx.appcompat.view.menu.MenuView.ItemView): void;
				public shouldIncludeItem(childIndex: number, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
				public expandItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
				public initForMenu(context: android.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder): void;
				public updateMenuView(param0: boolean): void;
				public bindItemView(param0: androidx.appcompat.view.menu.MenuItemImpl, param1: androidx.appcompat.view.menu.MenuView.ItemView): void;
				public onRestoreInstanceState(param0: android.os.Parcelable): void;
				public collapseItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
				public constructor(context: android.content.Context);
				public getId(): number;
				public onConfigurationChanged(newConfig: android.content.res.Configuration): void;
				public getOverflowIcon(): android.graphics.drawable.Drawable;
				public isOverflowReserved(): boolean;
				public hideSubMenus(): boolean;
				public isOverflowMenuShowing(): boolean;
				public hideOverflowMenu(): boolean;
				public getMenuView(param0: android.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
				public setWidthLimit(width: number, strict: boolean): void;
				public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
				public getItemView(item: androidx.appcompat.view.menu.MenuItemImpl, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
				public isOverflowMenuShowPending(): boolean;
				public setMenuView(menuView: androidx.appcompat.widget.ActionMenuView): void;
				public setItemLimit(itemCount: number): void;
				public setOverflowIcon(icon: android.graphics.drawable.Drawable): void;
				public onSaveInstanceState(): android.os.Parcelable;
				public filterLeftoverView(parent: android.view.ViewGroup, childIndex: number): boolean;
				public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
				public onSubMenuSelected(menu: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
				public setReserveOverflow(reserveOverflow: boolean): void;
			}
			export module ActionMenuPresenter {
				export class ActionButtonSubmenu extends androidx.appcompat.view.menu.MenuPopupHelper {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.ActionButtonSubmenu>;
					public constructor(context: android.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder);
					public setPresenterCallback(cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public constructor(context: android.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder, anchorView: android.view.View);
					public constructor(context: android.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder, anchorView: android.view.View, overflowOnly: boolean, popupStyleAttr: number, popupStyleRes: number);
					public constructor(context: android.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder, anchorView: android.view.View, overflowOnly: boolean, popupStyleAttr: number);
					public setPresenterCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public dismiss(): void;
					public constructor(param0: androidx.appcompat.widget.ActionMenuPresenter, context: android.content.Context, subMenu: androidx.appcompat.view.menu.SubMenuBuilder, anchorView: android.view.View);
					public onDismiss(): void;
				}
				export class ActionMenuPopupCallback extends androidx.appcompat.view.menu.ActionMenuItemView.PopupCallback {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.ActionMenuPopupCallback>;
					public getPopup(): androidx.appcompat.view.menu.ShowableListMenu;
				}
				export class OpenOverflowRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.OpenOverflowRunnable>;
					public run(): void;
					public constructor(param0: androidx.appcompat.widget.ActionMenuPresenter, popup: androidx.appcompat.widget.ActionMenuPresenter.OverflowPopup);
				}
				export class OverflowMenuButton extends androidx.appcompat.widget.AppCompatImageView implements androidx.appcompat.widget.ActionMenuView.ActionMenuChildView {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.OverflowMenuButton>;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public setSupportBackgroundTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public setFrame(l: number, t: number, r: number, b: number): boolean;
					public setSupportImageTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public invalidateDrawable(dr: android.graphics.drawable.Drawable): void;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public getSupportImageTintList(): android.content.res.ColorStateList;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public setSupportBackgroundTintList(tint: android.content.res.ColorStateList): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public setSupportImageTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public getSupportBackgroundTintList(): android.content.res.ColorStateList;
					public sendAccessibilityEvent(param0: number): void;
					public performClick(): boolean;
					public setSupportImageTintList(tint: android.content.res.ColorStateList): void;
					public constructor(context: android.content.Context);
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public setSupportImageTintList(param0: android.content.res.ColorStateList): void;
					public needsDividerAfter(): boolean;
					public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public constructor(param0: androidx.appcompat.widget.ActionMenuPresenter, context: android.content.Context);
					public getSupportImageTintMode(): android.graphics.PorterDuff.Mode;
					public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public needsDividerBefore(): boolean;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				}
				export class OverflowPopup extends androidx.appcompat.view.menu.MenuPopupHelper {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.OverflowPopup>;
					public constructor(context: android.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder);
					public constructor(param0: androidx.appcompat.widget.ActionMenuPresenter, context: android.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder, anchorView: android.view.View, overflowOnly: boolean);
					public setPresenterCallback(cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public constructor(context: android.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder, anchorView: android.view.View);
					public constructor(context: android.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder, anchorView: android.view.View, overflowOnly: boolean, popupStyleAttr: number, popupStyleRes: number);
					public constructor(context: android.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder, anchorView: android.view.View, overflowOnly: boolean, popupStyleAttr: number);
					public setPresenterCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public dismiss(): void;
					public onDismiss(): void;
				}
				export class PopupPresenterCallback extends java.lang.Object implements androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.PopupPresenterCallback>;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public onOpenSubMenu(subMenu: androidx.appcompat.view.menu.MenuBuilder): boolean;
				}
				export class SavedState extends java.lang.Object implements android.os.Parcelable {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuPresenter.SavedState>;
					public openSubMenuId: number;
					public static CREATOR: android.os.Parcelable.Creator<androidx.appcompat.widget.ActionMenuPresenter.SavedState>;
					public describeContents(): number;
					public writeToParcel(dest: android.os.Parcel, flags: number): void;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActionMenuView extends androidx.appcompat.widget.LinearLayoutCompat implements androidx.appcompat.view.menu.MenuBuilder.ItemInvoker, androidx.appcompat.view.menu.MenuView {
				public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView>;
				public initialize(param0: androidx.appcompat.view.menu.MenuBuilder): void;
				public addView(child: android.view.View, width: number, height: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public peekMenu(): androidx.appcompat.view.menu.MenuBuilder;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				public generateLayoutParams(attrs: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
				public setMenuCallbacks(pcb: androidx.appcompat.view.menu.MenuPresenter.Callback, mcb: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
				public constructor(context: android.content.Context);
				public getOverflowIcon(): android.graphics.drawable.Drawable;
				public setOverflowReserved(reserveOverflow: boolean): void;
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public hideOverflowMenu(): boolean;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public initialize(menu: androidx.appcompat.view.menu.MenuBuilder): void;
				public invokeItem(param0: androidx.appcompat.view.menu.MenuItemImpl): boolean;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public generateDefaultLayoutParams(): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public getMenu(): android.view.Menu;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public invokeItem(item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public addView(child: android.view.View): void;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public dismissPopupMenus(): void;
				public addView(child: android.view.View, index: number): void;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public setPopupTheme(resId: number): void;
				public generateDefaultLayoutParams(): androidx.appcompat.widget.ActionMenuView.LayoutParams;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public isOverflowReserved(): boolean;
				public hasSupportDividerBeforeChildAt(childIndex: number): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public isOverflowMenuShowing(): boolean;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public getWindowAnimations(): number;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
				public isOverflowMenuShowPending(): boolean;
				public recomputeViewAttributes(param0: android.view.View): void;
				public setExpandedActionViewsExclusive(exclusive: boolean): void;
				public clearChildFocus(param0: android.view.View): void;
				public setPresenter(presenter: androidx.appcompat.widget.ActionMenuPresenter): void;
				public generateOverflowButtonLayoutParams(): androidx.appcompat.widget.ActionMenuView.LayoutParams;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public showOverflowMenu(): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public requestFitSystemWindows(): void;
				public checkLayoutParams(p: android.view.ViewGroup.LayoutParams): boolean;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public onConfigurationChanged(newConfig: android.content.res.Configuration): void;
				public focusSearch(direction: number): android.view.View;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public onDetachedFromWindow(): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public generateLayoutParams(attrs: android.util.AttributeSet): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
				public removeView(view: android.view.View): void;
				public generateLayoutParams(p: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
				public requestLayout(): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onStopNestedScroll(param0: android.view.View): void;
				public generateLayoutParams(p: android.view.ViewGroup.LayoutParams): androidx.appcompat.widget.ActionMenuView.LayoutParams;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public generateLayoutParams(p: android.view.ViewGroup.LayoutParams): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
				public setOverflowIcon(icon: android.graphics.drawable.Drawable): void;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public generateLayoutParams(attrs: android.util.AttributeSet): androidx.appcompat.widget.ActionMenuView.LayoutParams;
				public getPopupTheme(): number;
				public setOnMenuItemClickListener(listener: androidx.appcompat.widget.ActionMenuView.OnMenuItemClickListener): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
			export module ActionMenuView {
				export class ActionMenuChildView extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView.ActionMenuChildView>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActionMenuView$ActionMenuChildView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						needsDividerBefore(): boolean;
						needsDividerAfter(): boolean;
					});
					public constructor();
					public needsDividerBefore(): boolean;
					public needsDividerAfter(): boolean;
				}
				export class ActionMenuPresenterCallback extends java.lang.Object implements androidx.appcompat.view.menu.MenuPresenter.Callback {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView.ActionMenuPresenterCallback>;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public onOpenSubMenu(param0: androidx.appcompat.view.menu.MenuBuilder): boolean;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public onOpenSubMenu(subMenu: androidx.appcompat.view.menu.MenuBuilder): boolean;
				}
				export class LayoutParams extends androidx.appcompat.widget.LinearLayoutCompat.LayoutParams {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView.LayoutParams>;
					public isOverflowButton: boolean;
					public cellsUsed: number;
					public extraPixels: number;
					public expandable: boolean;
					public preventEdgeOffset: boolean;
					public constructor(source: android.view.ViewGroup.MarginLayoutParams);
					public constructor(other: androidx.appcompat.widget.ActionMenuView.LayoutParams);
					public constructor(c: android.content.Context, attrs: android.util.AttributeSet);
					public constructor(width: number, height: number, weight: number);
					public constructor(other: android.view.ViewGroup.LayoutParams);
					public constructor(source: android.widget.LinearLayout.LayoutParams);
					public constructor(width: number, height: number);
					public constructor(p: android.view.ViewGroup.LayoutParams);
				}
				export class MenuBuilderCallback extends java.lang.Object implements androidx.appcompat.view.menu.MenuBuilder.Callback {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView.MenuBuilderCallback>;
					public onMenuItemSelected(menu: androidx.appcompat.view.menu.MenuBuilder, item: android.view.MenuItem): boolean;
					public onMenuItemSelected(param0: androidx.appcompat.view.menu.MenuBuilder, param1: android.view.MenuItem): boolean;
					public onMenuModeChange(param0: androidx.appcompat.view.menu.MenuBuilder): void;
					public onMenuModeChange(menu: androidx.appcompat.view.menu.MenuBuilder): void;
				}
				export class OnMenuItemClickListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ActionMenuView.OnMenuItemClickListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActionMenuView$OnMenuItemClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMenuItemClick(param0: android.view.MenuItem): boolean;
					});
					public constructor();
					public onMenuItemClick(param0: android.view.MenuItem): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActivityChooserModel extends android.database.DataSetObservable {
				public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel>;
				public static DEFAULT_HISTORY_FILE_NAME: string;
				public static DEFAULT_HISTORY_MAX_LENGTH: number;
				public getActivityIndex(activity: android.content.pm.ResolveInfo): number;
				public setActivitySorter(activitySorter: androidx.appcompat.widget.ActivityChooserModel.ActivitySorter): void;
				public getIntent(): android.content.Intent;
				public getDefaultActivity(): android.content.pm.ResolveInfo;
				public setDefaultActivity(index: number): void;
				public setOnChooseActivityListener(listener: androidx.appcompat.widget.ActivityChooserModel.OnChooseActivityListener): void;
				public getHistoryMaxSize(): number;
				public chooseActivity(index: number): android.content.Intent;
				public getHistorySize(): number;
				public getActivity(index: number): android.content.pm.ResolveInfo;
				public setHistoryMaxSize(historyMaxSize: number): void;
				public static get(context: android.content.Context, historyFileName: string): androidx.appcompat.widget.ActivityChooserModel;
				public setIntent(intent: android.content.Intent): void;
				public getActivityCount(): number;
			}
			export module ActivityChooserModel {
				export class ActivityChooserModelClient extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.ActivityChooserModelClient>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActivityChooserModel$ActivityChooserModelClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setActivityChooserModel(param0: androidx.appcompat.widget.ActivityChooserModel): void;
					});
					public constructor();
					public setActivityChooserModel(param0: androidx.appcompat.widget.ActivityChooserModel): void;
				}
				export class ActivityResolveInfo extends java.lang.Comparable<androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo> {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo>;
					public resolveInfo: android.content.pm.ResolveInfo;
					public weight: number;
					public constructor(resolveInfo: android.content.pm.ResolveInfo);
					public equals(obj: any): boolean;
					public toString(): string;
					public compareTo(another: androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo): number;
					public hashCode(): number;
				}
				export class ActivitySorter extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.ActivitySorter>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActivityChooserModel$ActivitySorter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						sort(param0: android.content.Intent, param1: java.util.List<androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo>, param2: java.util.List<androidx.appcompat.widget.ActivityChooserModel.HistoricalRecord>): void;
					});
					public constructor();
					public sort(param0: android.content.Intent, param1: java.util.List<androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo>, param2: java.util.List<androidx.appcompat.widget.ActivityChooserModel.HistoricalRecord>): void;
				}
				export class DefaultSorter extends java.lang.Object implements androidx.appcompat.widget.ActivityChooserModel.ActivitySorter {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.DefaultSorter>;
					public sort(intent: android.content.Intent, activities: java.util.List<androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo>, historicalRecords: java.util.List<androidx.appcompat.widget.ActivityChooserModel.HistoricalRecord>): void;
					public sort(param0: android.content.Intent, param1: java.util.List<androidx.appcompat.widget.ActivityChooserModel.ActivityResolveInfo>, param2: java.util.List<androidx.appcompat.widget.ActivityChooserModel.HistoricalRecord>): void;
				}
				export class HistoricalRecord extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.HistoricalRecord>;
					public activity: android.content.ComponentName;
					public time: number;
					public weight: number;
					public equals(obj: any): boolean;
					public toString(): string;
					public constructor(activityName: android.content.ComponentName, time: number, param2: number);
					public hashCode(): number;
					public constructor(activityName: string, time: number, param2: number);
				}
				export class OnChooseActivityListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.OnChooseActivityListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ActivityChooserModel$OnChooseActivityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onChooseActivity(param0: androidx.appcompat.widget.ActivityChooserModel, param1: android.content.Intent): boolean;
					});
					public constructor();
					public onChooseActivity(param0: androidx.appcompat.widget.ActivityChooserModel, param1: android.content.Intent): boolean;
				}
				export class PersistHistoryAsyncTask extends android.os.AsyncTask<any,java.lang.Void,java.lang.Void> {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserModel.PersistHistoryAsyncTask>;
					public doInBackground(...args: any[]): java.lang.Void;
					public doInBackground(...param0: any[]): any;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ActivityChooserView extends android.view.ViewGroup implements androidx.appcompat.widget.ActivityChooserModel.ActivityChooserModelClient {
				public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserView>;
				public addView(child: android.view.View, width: number, height: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public getDataModel(): androidx.appcompat.widget.ActivityChooserModel;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public constructor(context: android.content.Context);
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public setOnDismissListener(listener: android.widget.PopupWindow.OnDismissListener): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public setActivityChooserModel(dataModel: androidx.appcompat.widget.ActivityChooserModel): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public addView(child: android.view.View): void;
				public setDefaultActionButtonContentDescription(resourceId: number): void;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public showPopup(): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyle: number);
				public addView(child: android.view.View, index: number): void;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public setExpandActivityOverflowButtonDrawable(drawable: android.graphics.drawable.Drawable): void;
				public onStopNestedScroll(child: android.view.View): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public dismissPopup(): boolean;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public onAttachedToWindow(): void;
				public clearChildFocus(param0: android.view.View): void;
				public isShowingPopup(): boolean;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public requestFitSystemWindows(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public focusSearch(direction: number): android.view.View;
				public setProvider(provider: androidx.core.view.ActionProvider): void;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public onDetachedFromWindow(): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public removeView(view: android.view.View): void;
				public requestLayout(): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public onStopNestedScroll(param0: android.view.View): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public setInitialActivityCount(itemCount: number): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public setExpandActivityOverflowButtonContentDescription(resourceId: number): void;
				public setActivityChooserModel(param0: androidx.appcompat.widget.ActivityChooserModel): void;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
			export module ActivityChooserView {
				export class ActivityChooserViewAdapter extends android.widget.BaseAdapter {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserView.ActivityChooserViewAdapter>;
					public static MAX_ACTIVITY_COUNT_UNLIMITED: number;
					public static MAX_ACTIVITY_COUNT_DEFAULT: number;
					public getItemViewType(position: number): number;
					public getViewTypeCount(): number;
					public getCount(): number;
					public getShowDefaultActivity(): boolean;
					public areAllItemsEnabled(): boolean;
					public isEnabled(position: number): boolean;
					public getDropDownView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
					public getActivityCount(): number;
					public measureContentWidth(): number;
					public setShowDefaultActivity(showDefaultActivity: boolean, highlightDefaultActivity: boolean): void;
					public getItemId(position: number): number;
					public getDataModel(): androidx.appcompat.widget.ActivityChooserModel;
					public setShowFooterView(showFooterView: boolean): void;
					public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
					public getItem(position: number): any;
					public getDefaultActivity(): android.content.pm.ResolveInfo;
					public getHistorySize(): number;
					public getView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
					public isEnabled(param0: number): boolean;
					public setMaxActivityCount(maxActivityCount: number): void;
					public setDataModel(dataModel: androidx.appcompat.widget.ActivityChooserModel): void;
				}
				export class Callbacks extends java.lang.Object implements android.widget.AdapterView.OnItemClickListener, android.view.View.OnClickListener, android.view.View.OnLongClickListener, android.widget.PopupWindow.OnDismissListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserView.Callbacks>;
					public onLongClick(param0: android.view.View): boolean;
					public onClick(view: android.view.View): void;
					public onItemClick(param0: android.widget.AdapterView<any>, param1: android.view.View, param2: number, param3: number): void;
					public onLongClick(view: android.view.View): boolean;
					public onClick(param0: android.view.View): void;
					public onItemClick(parent: android.widget.AdapterView<any>, view: android.view.View, position: number, id: number): void;
					public onDismiss(): void;
				}
				export class InnerLayout extends android.widget.LinearLayout {
					public static class: java.lang.Class<androidx.appcompat.widget.ActivityChooserView.InnerLayout>;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public focusableViewAvailable(v: android.view.View): void;
					public isTextDirectionResolved(): boolean;
					public showContextMenuForChild(param0: android.view.View): boolean;
					public onStopNestedScroll(child: android.view.View): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
					public recomputeViewAttributes(child: android.view.View): void;
					public addView(child: android.view.View, index: number): void;
					public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public getLayoutDirection(): number;
					public getParentForAccessibility(): android.view.ViewParent;
					public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
					public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
					public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
					public createContextMenu(param0: android.view.ContextMenu): void;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public childDrawableStateChanged(param0: android.view.View): void;
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public isTextAlignmentResolved(): boolean;
					public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public requestChildFocus(child: android.view.View, focused: android.view.View): void;
					public canResolveTextAlignment(): boolean;
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
					public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
					public showContextMenuForChild(originalView: android.view.View): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
					public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
					public sendAccessibilityEvent(param0: number): void;
					public requestLayout(): void;
					public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public getTextAlignment(): number;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
					public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
					public focusSearch(param0: android.view.View, param1: number): android.view.View;
					public bringChildToFront(child: android.view.View): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
					public isLayoutRequested(): boolean;
					public clearChildFocus(param0: android.view.View): void;
					public clearChildFocus(child: android.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public isLayoutDirectionResolved(): boolean;
					public focusSearch(focused: android.view.View, direction: number): android.view.View;
					public addView(child: android.view.View): void;
					public addView(child: android.view.View, width: number, height: number): void;
					public removeView(view: android.view.View): void;
					public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
					public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
					public bringChildToFront(param0: android.view.View): void;
					public constructor(context: android.content.Context);
					public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
					public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
					public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
					public getTextDirection(): number;
					public requestFitSystemWindows(): void;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public requestTransparentRegion(param0: android.view.View): void;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
					public canResolveTextDirection(): boolean;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public getParent(): android.view.ViewParent;
					public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
					public createContextMenu(menu: android.view.ContextMenu): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public onStopNestedScroll(param0: android.view.View): void;
					public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
					public canResolveLayoutDirection(): boolean;
					public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
					public requestTransparentRegion(child: android.view.View): void;
					public removeView(param0: android.view.View): void;
					public childDrawableStateChanged(child: android.view.View): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public recomputeViewAttributes(param0: android.view.View): void;
					public focusableViewAvailable(param0: android.view.View): void;
					public focusSearch(direction: number): android.view.View;
					public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AlertDialogLayout extends androidx.appcompat.widget.LinearLayoutCompat {
				public static class: java.lang.Class<androidx.appcompat.widget.AlertDialogLayout>;
				public addView(child: android.view.View, width: number, height: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				public constructor(context: android.content.Context);
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public addView(child: android.view.View): void;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public addView(child: android.view.View, index: number): void;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public clearChildFocus(param0: android.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public requestFitSystemWindows(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public focusSearch(direction: number): android.view.View;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public removeView(view: android.view.View): void;
				public requestLayout(): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onStopNestedScroll(param0: android.view.View): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatAutoCompleteTextView extends android.widget.AutoCompleteTextView implements androidx.core.view.TintableBackgroundView, androidx.appcompat.widget.EmojiCompatConfigurationView, androidx.core.widget.TintableCompoundDrawablesView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatAutoCompleteTextView>;
				public onFilterComplete(param0: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public setKeyListener(keyListener: android.text.method.KeyListener): void;
				public setKeyListener(input: android.text.method.KeyListener): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public setDropDownBackgroundResource(id: number): void;
				public onPreDraw(): boolean;
				public setEmojiCompatEnabled(param0: boolean): void;
				public setEmojiCompatEnabled(enabled: boolean): void;
				public setSupportCompoundDrawablesTintList(param0: android.content.res.ColorStateList): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setSupportCompoundDrawablesTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setCompoundDrawables(left: android.graphics.drawable.Drawable, top: android.graphics.drawable.Drawable, right: android.graphics.drawable.Drawable, bottom: android.graphics.drawable.Drawable): void;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public setBackgroundResource(resId: number): void;
				public setCompoundDrawablesRelative(start: android.graphics.drawable.Drawable, top: android.graphics.drawable.Drawable, end: android.graphics.drawable.Drawable, bottom: android.graphics.drawable.Drawable): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public constructor(context: android.content.Context);
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public getSupportCompoundDrawablesTintList(): android.content.res.ColorStateList;
				public setBackgroundResource(resid: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public getCustomSelectionActionModeCallback(): android.view.ActionMode.Callback;
				public drawableStateChanged(): void;
				public setSupportCompoundDrawablesTintList(tintList: android.content.res.ColorStateList): void;
				public setTextAppearance(context: android.content.Context, resId: number): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public onCreateInputConnection(outAttrs: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;
				public setDropDownBackgroundResource(resId: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number, popupTheme: android.content.res.Resources.Theme);
				public setSupportBackgroundTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public setSupportBackgroundTintList(tint: android.content.res.ColorStateList): void;
				public setCustomSelectionActionModeCallback(actionModeCallback: android.view.ActionMode.Callback): void;
				/** @deprecated */
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
				public getSupportBackgroundTintList(): android.content.res.ColorStateList;
				public getSupportCompoundDrawablesTintMode(): android.graphics.PorterDuff.Mode;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public setSupportCompoundDrawablesTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public onFilterComplete(count: number): void;
				public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
				public isEmojiCompatEnabled(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				/** @deprecated */
				public setTextAppearance(context: android.content.Context, resId: number): void;
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public setTextAppearance(resId: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatBackgroundHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatBackgroundHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatButton extends android.widget.Button implements androidx.core.view.TintableBackgroundView, androidx.core.widget.AutoSizeableTextView, androidx.core.widget.TintableCompoundDrawablesView, androidx.appcompat.widget.EmojiCompatConfigurationView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatButton>;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public getAutoSizeStepGranularity(): number;
				public setAutoSizeTextTypeUniformWithConfiguration(param0: number, param1: number, param2: number, param3: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public setAutoSizeTextTypeUniformWithPresetSizes(param0: number[], param1: number): void;
				public onPreDraw(): boolean;
				public setEmojiCompatEnabled(param0: boolean): void;
				public setEmojiCompatEnabled(enabled: boolean): void;
				public setSupportCompoundDrawablesTintList(param0: android.content.res.ColorStateList): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setSupportCompoundDrawablesTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setAllCaps(allCaps: boolean): void;
				public setTextSize(unit: number, size: number): void;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public setBackgroundResource(resId: number): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public constructor(context: android.content.Context);
				public getAutoSizeTextType(): number;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public setAutoSizeTextTypeUniformWithPresetSizes(presetSizes: number[], unit: number): void;
				public getAutoSizeMaxTextSize(): number;
				public getSupportCompoundDrawablesTintList(): android.content.res.ColorStateList;
				public setBackgroundResource(resid: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public getCustomSelectionActionModeCallback(): android.view.ActionMode.Callback;
				public drawableStateChanged(): void;
				public setAutoSizeTextTypeWithDefaults(param0: number): void;
				public setTextAppearance(context: android.content.Context, resId: number): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public setSupportAllCaps(allCaps: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public setSupportBackgroundTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public setSupportBackgroundTintList(tint: android.content.res.ColorStateList): void;
				public setCustomSelectionActionModeCallback(actionModeCallback: android.view.ActionMode.Callback): void;
				/** @deprecated */
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public setFilters(filters: android.text.InputFilter[]): void;
				public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
				public getSupportBackgroundTintList(): android.content.res.ColorStateList;
				public getSupportCompoundDrawablesTintMode(): android.graphics.PorterDuff.Mode;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public setSupportCompoundDrawablesTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public getAutoSizeTextAvailableSizes(): number[];
				public setTextSize(size: number): void;
				public setSupportCompoundDrawablesTintList(tint: android.content.res.ColorStateList): void;
				public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
				public onInitializeAccessibilityNodeInfo(info: android.view.accessibility.AccessibilityNodeInfo): void;
				public getAutoSizeMinTextSize(): number;
				public isEmojiCompatEnabled(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public onTextChanged(text: string, start: number, lengthBefore: number, lengthAfter: number): void;
				/** @deprecated */
				public setTextAppearance(context: android.content.Context, resId: number): void;
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public setTextAppearance(resId: number): void;
				public setAutoSizeTextTypeUniformWithConfiguration(autoSizeMinTextSize: number, autoSizeMaxTextSize: number, autoSizeStepGranularity: number, unit: number): void;
				public setAutoSizeTextTypeWithDefaults(autoSizeTextType: number): void;
				public onInitializeAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatCheckBox extends android.widget.CheckBox implements androidx.core.widget.TintableCompoundButton, androidx.core.view.TintableBackgroundView, androidx.appcompat.widget.EmojiCompatConfigurationView, androidx.core.widget.TintableCompoundDrawablesView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatCheckBox>;
				public setChecked(param0: boolean): void;
				public getSupportButtonTintMode(): android.graphics.PorterDuff.Mode;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public setChecked(checked: boolean): void;
				public onPreDraw(): boolean;
				public setEmojiCompatEnabled(param0: boolean): void;
				public setEmojiCompatEnabled(enabled: boolean): void;
				public setSupportCompoundDrawablesTintList(param0: android.content.res.ColorStateList): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setSupportCompoundDrawablesTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setAllCaps(allCaps: boolean): void;
				public setSupportButtonTintList(tint: android.content.res.ColorStateList): void;
				public setCompoundDrawables(left: android.graphics.drawable.Drawable, top: android.graphics.drawable.Drawable, right: android.graphics.drawable.Drawable, bottom: android.graphics.drawable.Drawable): void;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public setBackgroundResource(resId: number): void;
				public setCompoundDrawablesRelative(start: android.graphics.drawable.Drawable, top: android.graphics.drawable.Drawable, end: android.graphics.drawable.Drawable, bottom: android.graphics.drawable.Drawable): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public constructor(context: android.content.Context);
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public setButtonDrawable(drawable: android.graphics.drawable.Drawable): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public getSupportCompoundDrawablesTintList(): android.content.res.ColorStateList;
				public setBackgroundResource(resid: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public drawableStateChanged(): void;
				public setSupportCompoundDrawablesTintList(tintList: android.content.res.ColorStateList): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public isChecked(): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public getSupportButtonTintList(): android.content.res.ColorStateList;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public setSupportBackgroundTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public setSupportBackgroundTintList(tint: android.content.res.ColorStateList): void;
				/** @deprecated */
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public toggle(): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public setFilters(filters: android.text.InputFilter[]): void;
				public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
				public getSupportBackgroundTintList(): android.content.res.ColorStateList;
				public getSupportCompoundDrawablesTintMode(): android.graphics.PorterDuff.Mode;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public setSupportButtonTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public getCompoundPaddingLeft(): number;
				public setSupportCompoundDrawablesTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public setSupportButtonTintList(param0: android.content.res.ColorStateList): void;
				public setSupportButtonTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setButtonDrawable(buttonDrawable: android.graphics.drawable.Drawable): void;
				public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
				public isEmojiCompatEnabled(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public setButtonDrawable(resId: number): void;
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatCheckedTextView extends android.widget.CheckedTextView implements androidx.core.widget.TintableCheckedTextView, androidx.core.view.TintableBackgroundView, androidx.appcompat.widget.EmojiCompatConfigurationView, androidx.core.widget.TintableCompoundDrawablesView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatCheckedTextView>;
				public setChecked(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public setSupportCheckMarkTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public setChecked(checked: boolean): void;
				public onPreDraw(): boolean;
				public setEmojiCompatEnabled(param0: boolean): void;
				public getSupportCheckMarkTintList(): android.content.res.ColorStateList;
				public setEmojiCompatEnabled(enabled: boolean): void;
				public setSupportCompoundDrawablesTintList(param0: android.content.res.ColorStateList): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setSupportCompoundDrawablesTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setAllCaps(allCaps: boolean): void;
				public setCompoundDrawables(left: android.graphics.drawable.Drawable, top: android.graphics.drawable.Drawable, right: android.graphics.drawable.Drawable, bottom: android.graphics.drawable.Drawable): void;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public setBackgroundResource(resId: number): void;
				public setCompoundDrawablesRelative(start: android.graphics.drawable.Drawable, top: android.graphics.drawable.Drawable, end: android.graphics.drawable.Drawable, bottom: android.graphics.drawable.Drawable): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public setCheckMarkDrawable(d: android.graphics.drawable.Drawable): void;
				public constructor(context: android.content.Context);
				public setCheckMarkDrawable(resId: number): void;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public setSupportCheckMarkTintList(tint: android.content.res.ColorStateList): void;
				public setSupportCheckMarkTintList(param0: android.content.res.ColorStateList): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public getSupportCompoundDrawablesTintList(): android.content.res.ColorStateList;
				public setBackgroundResource(resid: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public getSupportCheckMarkTintMode(): android.graphics.PorterDuff.Mode;
				public getCustomSelectionActionModeCallback(): android.view.ActionMode.Callback;
				public setSupportCheckMarkTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public drawableStateChanged(): void;
				public setSupportCompoundDrawablesTintList(tintList: android.content.res.ColorStateList): void;
				public setTextAppearance(context: android.content.Context, resId: number): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public isChecked(): boolean;
				public onCreateInputConnection(outAttrs: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public setSupportBackgroundTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public setSupportBackgroundTintList(tint: android.content.res.ColorStateList): void;
				public setCustomSelectionActionModeCallback(actionModeCallback: android.view.ActionMode.Callback): void;
				/** @deprecated */
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public toggle(): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
				public getSupportBackgroundTintList(): android.content.res.ColorStateList;
				public getSupportCompoundDrawablesTintMode(): android.graphics.PorterDuff.Mode;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public setSupportCompoundDrawablesTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
				public isEmojiCompatEnabled(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				/** @deprecated */
				public setTextAppearance(context: android.content.Context, resId: number): void;
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public setTextAppearance(resId: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatCheckedTextViewHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatCheckedTextViewHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatCompoundButtonHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatCompoundButtonHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatDrawableManager extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatDrawableManager>;
				public getDrawable(context: android.content.Context, resId: number): android.graphics.drawable.Drawable;
				public onConfigurationChanged(context: android.content.Context): void;
				public static preload(): void;
				public static get(): androidx.appcompat.widget.AppCompatDrawableManager;
				public static getPorterDuffColorFilter(color: number, mode: android.graphics.PorterDuff.Mode): android.graphics.PorterDuffColorFilter;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatEditText extends android.widget.EditText implements androidx.core.view.TintableBackgroundView, androidx.core.view.OnReceiveContentViewBehavior, androidx.appcompat.widget.EmojiCompatConfigurationView, androidx.core.widget.TintableCompoundDrawablesView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatEditText>;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public setKeyListener(keyListener: android.text.method.KeyListener): void;
				public setKeyListener(input: android.text.method.KeyListener): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public onPreDraw(): boolean;
				public setEmojiCompatEnabled(param0: boolean): void;
				public setEmojiCompatEnabled(enabled: boolean): void;
				public setSupportCompoundDrawablesTintList(param0: android.content.res.ColorStateList): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setSupportCompoundDrawablesTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setCompoundDrawables(left: android.graphics.drawable.Drawable, top: android.graphics.drawable.Drawable, right: android.graphics.drawable.Drawable, bottom: android.graphics.drawable.Drawable): void;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public setBackgroundResource(resId: number): void;
				public setCompoundDrawablesRelative(start: android.graphics.drawable.Drawable, top: android.graphics.drawable.Drawable, end: android.graphics.drawable.Drawable, bottom: android.graphics.drawable.Drawable): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public constructor(context: android.content.Context);
				public setTextClassifier(textClassifier: any): void;
				public onReceiveContent(param0: androidx.core.view.ContentInfoCompat): androidx.core.view.ContentInfoCompat;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public getText(): android.text.Editable;
				public onDragEvent(event: android.view.DragEvent): boolean;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public getSupportCompoundDrawablesTintList(): android.content.res.ColorStateList;
				public setBackgroundResource(resid: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public getCustomSelectionActionModeCallback(): android.view.ActionMode.Callback;
				public drawableStateChanged(): void;
				public setSupportCompoundDrawablesTintList(tintList: android.content.res.ColorStateList): void;
				public setTextAppearance(context: android.content.Context, resId: number): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public onCreateInputConnection(outAttrs: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public setSupportBackgroundTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public setSupportBackgroundTintList(tint: android.content.res.ColorStateList): void;
				public setCustomSelectionActionModeCallback(actionModeCallback: android.view.ActionMode.Callback): void;
				/** @deprecated */
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
				public getSupportBackgroundTintList(): android.content.res.ColorStateList;
				public getSupportCompoundDrawablesTintMode(): android.graphics.PorterDuff.Mode;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public setSupportCompoundDrawablesTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public getTextClassifier(): any;
				public getText(): string;
				public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
				public isEmojiCompatEnabled(): boolean;
				public onReceiveContent(payload: androidx.core.view.ContentInfoCompat): androidx.core.view.ContentInfoCompat;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				/** @deprecated */
				public setTextAppearance(context: android.content.Context, resId: number): void;
				public onTextContextMenuItem(id: number): boolean;
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public setTextAppearance(resId: number): void;
			}
			export module AppCompatEditText {
				export class SuperCaller extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatEditText.SuperCaller>;
					public getTextClassifier(): any;
					public setTextClassifier(textClassifier: any): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatEmojiEditTextHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatEmojiEditTextHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatEmojiTextHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatEmojiTextHelper>;
				public isEnabled(): boolean;
				public wrapTransformationMethod(transformationMethod: android.text.method.TransformationMethod): android.text.method.TransformationMethod;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatHintHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatHintHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatImageButton extends android.widget.ImageButton implements androidx.core.view.TintableBackgroundView, androidx.core.widget.TintableImageSourceView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatImageButton>;
				public drawableStateChanged(): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public setSupportImageTintList(param0: android.content.res.ColorStateList): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public setSupportImageTintList(tint: android.content.res.ColorStateList): void;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public setSupportBackgroundTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public setSupportImageTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public setSupportBackgroundTintList(tint: android.content.res.ColorStateList): void;
				public setSupportImageTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public invalidateDrawable(dr: android.graphics.drawable.Drawable): void;
				/** @deprecated */
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public getSupportImageTintList(): android.content.res.ColorStateList;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public getSupportBackgroundTintList(): android.content.res.ColorStateList;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public setImageBitmap(bm: android.graphics.Bitmap): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public setBackgroundResource(resId: number): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public constructor(context: android.content.Context);
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public setImageResource(resId: number): void;
				public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public setImageURI(uri: android.net.Uri): void;
				public setImageDrawable(drawable: android.graphics.drawable.Drawable): void;
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public setBackgroundResource(resid: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public getSupportImageTintMode(): android.graphics.PorterDuff.Mode;
				public hasOverlappingRendering(): boolean;
				public setImageLevel(level: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatImageHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatImageHelper>;
				public constructor(view: android.widget.ImageView);
				public setImageResource(resId: number): void;
				public loadFromAttributes(attrs: android.util.AttributeSet, defStyleAttr: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatImageView extends android.widget.ImageView implements androidx.core.view.TintableBackgroundView, androidx.core.widget.TintableImageSourceView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatImageView>;
				public drawableStateChanged(): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public setSupportImageTintList(param0: android.content.res.ColorStateList): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public setSupportImageTintList(tint: android.content.res.ColorStateList): void;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public setSupportBackgroundTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public setSupportImageTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public setSupportBackgroundTintList(tint: android.content.res.ColorStateList): void;
				public setSupportImageTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public invalidateDrawable(dr: android.graphics.drawable.Drawable): void;
				/** @deprecated */
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public getSupportImageTintList(): android.content.res.ColorStateList;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public getSupportBackgroundTintList(): android.content.res.ColorStateList;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public setImageBitmap(bm: android.graphics.Bitmap): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public setBackgroundResource(resId: number): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public constructor(context: android.content.Context);
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public setImageResource(resId: number): void;
				public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public setImageURI(uri: android.net.Uri): void;
				public setImageDrawable(drawable: android.graphics.drawable.Drawable): void;
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public setBackgroundResource(resid: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public getSupportImageTintMode(): android.graphics.PorterDuff.Mode;
				public hasOverlappingRendering(): boolean;
				public setImageLevel(level: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatMultiAutoCompleteTextView extends android.widget.MultiAutoCompleteTextView implements androidx.core.view.TintableBackgroundView, androidx.appcompat.widget.EmojiCompatConfigurationView, androidx.core.widget.TintableCompoundDrawablesView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatMultiAutoCompleteTextView>;
				public onFilterComplete(param0: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public setKeyListener(keyListener: android.text.method.KeyListener): void;
				public setKeyListener(input: android.text.method.KeyListener): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public setDropDownBackgroundResource(id: number): void;
				public onPreDraw(): boolean;
				public setEmojiCompatEnabled(param0: boolean): void;
				public setEmojiCompatEnabled(enabled: boolean): void;
				public setSupportCompoundDrawablesTintList(param0: android.content.res.ColorStateList): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setSupportCompoundDrawablesTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setCompoundDrawables(left: android.graphics.drawable.Drawable, top: android.graphics.drawable.Drawable, right: android.graphics.drawable.Drawable, bottom: android.graphics.drawable.Drawable): void;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public setBackgroundResource(resId: number): void;
				public setCompoundDrawablesRelative(start: android.graphics.drawable.Drawable, top: android.graphics.drawable.Drawable, end: android.graphics.drawable.Drawable, bottom: android.graphics.drawable.Drawable): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public constructor(context: android.content.Context);
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public getSupportCompoundDrawablesTintList(): android.content.res.ColorStateList;
				public setBackgroundResource(resid: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public drawableStateChanged(): void;
				public setSupportCompoundDrawablesTintList(tintList: android.content.res.ColorStateList): void;
				public setTextAppearance(context: android.content.Context, resId: number): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public onCreateInputConnection(outAttrs: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;
				public setDropDownBackgroundResource(resId: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number, popupTheme: android.content.res.Resources.Theme);
				public setSupportBackgroundTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public setSupportBackgroundTintList(tint: android.content.res.ColorStateList): void;
				/** @deprecated */
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
				public getSupportBackgroundTintList(): android.content.res.ColorStateList;
				public getSupportCompoundDrawablesTintMode(): android.graphics.PorterDuff.Mode;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public setSupportCompoundDrawablesTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public onFilterComplete(count: number): void;
				public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
				public isEmojiCompatEnabled(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				/** @deprecated */
				public setTextAppearance(context: android.content.Context, resId: number): void;
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public setTextAppearance(resId: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatPopupWindow extends android.widget.PopupWindow {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatPopupWindow>;
				public showAsDropDown(anchor: android.view.View): void;
				public update(anchor: android.view.View, width: number, height: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public constructor(context: android.content.Context);
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public update(): void;
				public constructor(contentView: android.view.View);
				public constructor(width: number, height: number);
				public update(width: number, height: number): void;
				public showAsDropDown(anchor: android.view.View, xoff: number, yoff: number, gravity: number): void;
				public constructor();
				public showAsDropDown(anchor: android.view.View, xoff: number, yoff: number): void;
				public constructor(contentView: android.view.View, width: number, height: number);
				public constructor(contentView: android.view.View, width: number, height: number, focusable: boolean);
				public update(x: number, y: number, width: number, height: number): void;
				public update(anchor: android.view.View, xoff: number, yoff: number, width: number, height: number): void;
				public update(x: number, y: number, width: number, height: number, force: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatProgressBarHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatProgressBarHelper>;
			}
			export module AppCompatProgressBarHelper {
				export class Api23Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatProgressBarHelper.Api23Impl>;
					public static transferLayerProperties(src: android.graphics.drawable.LayerDrawable, dst: android.graphics.drawable.LayerDrawable, i: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatRadioButton extends android.widget.RadioButton implements androidx.core.widget.TintableCompoundButton, androidx.core.view.TintableBackgroundView, androidx.appcompat.widget.EmojiCompatConfigurationView, androidx.core.widget.TintableCompoundDrawablesView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatRadioButton>;
				public setChecked(param0: boolean): void;
				public getSupportButtonTintMode(): android.graphics.PorterDuff.Mode;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public setChecked(checked: boolean): void;
				public onPreDraw(): boolean;
				public setEmojiCompatEnabled(param0: boolean): void;
				public setEmojiCompatEnabled(enabled: boolean): void;
				public setSupportCompoundDrawablesTintList(param0: android.content.res.ColorStateList): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setSupportCompoundDrawablesTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setAllCaps(allCaps: boolean): void;
				public setSupportButtonTintList(tint: android.content.res.ColorStateList): void;
				public setCompoundDrawables(left: android.graphics.drawable.Drawable, top: android.graphics.drawable.Drawable, right: android.graphics.drawable.Drawable, bottom: android.graphics.drawable.Drawable): void;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public setBackgroundResource(resId: number): void;
				public setCompoundDrawablesRelative(start: android.graphics.drawable.Drawable, top: android.graphics.drawable.Drawable, end: android.graphics.drawable.Drawable, bottom: android.graphics.drawable.Drawable): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public constructor(context: android.content.Context);
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public setButtonDrawable(drawable: android.graphics.drawable.Drawable): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public getSupportCompoundDrawablesTintList(): android.content.res.ColorStateList;
				public setBackgroundResource(resid: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public drawableStateChanged(): void;
				public setSupportCompoundDrawablesTintList(tintList: android.content.res.ColorStateList): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public isChecked(): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public getSupportButtonTintList(): android.content.res.ColorStateList;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public setSupportBackgroundTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public setSupportBackgroundTintList(tint: android.content.res.ColorStateList): void;
				/** @deprecated */
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public toggle(): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public setFilters(filters: android.text.InputFilter[]): void;
				public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
				public getSupportBackgroundTintList(): android.content.res.ColorStateList;
				public getSupportCompoundDrawablesTintMode(): android.graphics.PorterDuff.Mode;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public setSupportButtonTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public getCompoundPaddingLeft(): number;
				public setSupportCompoundDrawablesTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public setSupportButtonTintList(param0: android.content.res.ColorStateList): void;
				public setSupportButtonTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setButtonDrawable(buttonDrawable: android.graphics.drawable.Drawable): void;
				public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
				public isEmojiCompatEnabled(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public setButtonDrawable(resId: number): void;
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatRatingBar extends android.widget.RatingBar {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatRatingBar>;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public constructor(context: android.content.Context);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public invalidateDrawable(dr: android.graphics.drawable.Drawable): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatReceiveContentHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatReceiveContentHelper>;
			}
			export module AppCompatReceiveContentHelper {
				export class OnDropApi24Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatReceiveContentHelper.OnDropApi24Impl>;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatSeekBar extends android.widget.SeekBar {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSeekBar>;
				public drawableStateChanged(): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public jumpDrawablesToCurrentState(): void;
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
				public onDraw(canvas: android.graphics.Canvas): void;
				public constructor(context: android.content.Context);
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatSeekBarHelper extends androidx.appcompat.widget.AppCompatProgressBarHelper {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSeekBarHelper>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatSpinner extends android.widget.Spinner implements androidx.core.view.TintableBackgroundView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner>;
				public addView(child: android.view.View, width: number, height: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, mode: number);
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public setDropDownHorizontalOffset(pixels: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public onClick(dialog: android.content.DialogInterface, which: number): void;
				public constructor(context: android.content.Context);
				public setPrompt(prompt: string): void;
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public setDropDownWidth(pixels: number): void;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public getDropDownWidth(): number;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public bringChildToFront(child: android.view.View): void;
				public setBackgroundResource(resid: number): void;
				public drawableStateChanged(): void;
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, mode: number, popupTheme: android.content.res.Resources.Theme);
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public setDropDownVerticalOffset(pixels: number): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				public onClick(param0: android.content.DialogInterface, param1: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public addView(child: android.view.View): void;
				public getSupportBackgroundTintList(): android.content.res.ColorStateList;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public addView(child: android.view.View, index: number): void;
				public getPrompt(): string;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, mode: number);
				public recomputeViewAttributes(param0: android.view.View): void;
				public setAdapter(param0: any): void;
				public clearChildFocus(param0: android.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public getDropDownHorizontalOffset(): number;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public requestFitSystemWindows(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public getPopupBackground(): android.graphics.drawable.Drawable;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public setBackgroundResource(resId: number): void;
				public getParent(): android.view.ViewParent;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public focusSearch(direction: number): android.view.View;
				public removeView(child: android.view.View): void;
				public setPopupBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public onDetachedFromWindow(): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public onTouchEvent(event: android.view.MotionEvent): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public setPopupBackgroundResource(resId: number): void;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public setAdapter(adapter: android.widget.SpinnerAdapter): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public setSupportBackgroundTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public onRestoreInstanceState(state: android.os.Parcelable): void;
				public canResolveTextAlignment(): boolean;
				public performClick(): boolean;
				public setSupportBackgroundTintList(tint: android.content.res.ColorStateList): void;
				/** @deprecated */
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public requestLayout(): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public getPopupContext(): android.content.Context;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onStopNestedScroll(param0: android.view.View): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number, mode: number);
				public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public getDropDownVerticalOffset(): number;
				public onSaveInstanceState(): android.os.Parcelable;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number, mode: number, popupTheme: android.content.res.Resources.Theme);
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
			export module AppCompatSpinner {
				export class Api16Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner.Api16Impl>;
				}
				export class Api17Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner.Api17Impl>;
				}
				export class Api23Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner.Api23Impl>;
				}
				export class DialogPopup extends java.lang.Object implements androidx.appcompat.widget.AppCompatSpinner.SpinnerPopup, android.content.DialogInterface.OnClickListener {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner.DialogPopup>;
					public isShowing(): boolean;
					public setPromptText(param0: string): void;
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setAdapter(param0: android.widget.ListAdapter): void;
					public onClick(dialog: android.content.DialogInterface, which: number): void;
					public getHorizontalOriginalOffset(): number;
					public setAdapter(adapter: android.widget.ListAdapter): void;
					public getBackground(): android.graphics.drawable.Drawable;
					public getVerticalOffset(): number;
					public setHorizontalOriginalOffset(px: number): void;
					public show(param0: number, param1: number): void;
					public setVerticalOffset(param0: number): void;
					public show(textDirection: number, textAlignment: number): void;
					public setHorizontalOffset(param0: number): void;
					public setHorizontalOriginalOffset(param0: number): void;
					public setBackgroundDrawable(bg: android.graphics.drawable.Drawable): void;
					public getHorizontalOffset(): number;
					public getHintText(): string;
					public onClick(param0: android.content.DialogInterface, param1: number): void;
					public setHorizontalOffset(px: number): void;
					public dismiss(): void;
					public setPromptText(hintText: string): void;
					public setVerticalOffset(px: number): void;
				}
				export class DropDownAdapter extends java.lang.Object implements android.widget.ListAdapter, android.widget.SpinnerAdapter {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner.DropDownAdapter>;
					public isEmpty(): boolean;
					public getCount(): number;
					public areAllItemsEnabled(): boolean;
					public isEnabled(position: number): boolean;
					public getItemViewType(position: number): number;
					public getViewTypeCount(): number;
					public getDropDownView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
					public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
					public unregisterDataSetObserver(observer: android.database.DataSetObserver): void;
					public getItemId(position: number): number;
					public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
					public getItem(param0: number): any;
					public hasStableIds(): boolean;
					public getItem(position: number): any;
					public constructor(adapter: android.widget.SpinnerAdapter, dropDownTheme: android.content.res.Resources.Theme);
					public registerDataSetObserver(observer: android.database.DataSetObserver): void;
					public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
					public getView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
					public isEnabled(param0: number): boolean;
					public getItemViewType(param0: number): number;
					public registerDataSetObserver(param0: android.database.DataSetObserver): void;
					public getItemId(param0: number): number;
				}
				export class DropdownPopup extends androidx.appcompat.widget.ListPopupWindow implements androidx.appcompat.widget.AppCompatSpinner.SpinnerPopup {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner.DropdownPopup>;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public isShowing(): boolean;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public setAdapter(param0: android.widget.ListAdapter): void;
					public getHorizontalOriginalOffset(): number;
					public constructor(this$0: androidx.appcompat.widget.AppCompatSpinner, context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public setVerticalOffset(param0: number): void;
					public show(textDirection: number, textAlignment: number): void;
					public getHintText(): string;
					public setPromptText(hintText: string): void;
					public setBackgroundDrawable(d: android.graphics.drawable.Drawable): void;
					public setVerticalOffset(offset: number): void;
					public show(): void;
					public constructor(context: android.content.Context);
					public setPromptText(param0: string): void;
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setAdapter(adapter: android.widget.ListAdapter): void;
					public getBackground(): android.graphics.drawable.Drawable;
					public setHorizontalOriginalOffset(px: number): void;
					public getVerticalOffset(): number;
					public show(param0: number, param1: number): void;
					public setHorizontalOffset(param0: number): void;
					public setHorizontalOriginalOffset(param0: number): void;
					public getHorizontalOffset(): number;
					public setHorizontalOffset(offset: number): void;
					public dismiss(): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public getListView(): android.widget.ListView;
				}
				export class SavedState extends android.view.View.BaseSavedState {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner.SavedState>;
					public static CREATOR: android.os.Parcelable.Creator<androidx.appcompat.widget.AppCompatSpinner.SavedState>;
					public describeContents(): number;
					public writeToParcel(out: android.os.Parcel, flags: number): void;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
				export class SpinnerPopup extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatSpinner.SpinnerPopup>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.AppCompatSpinner$SpinnerPopup interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setAdapter(param0: android.widget.ListAdapter): void;
						show(param0: number, param1: number): void;
						dismiss(): void;
						isShowing(): boolean;
						setPromptText(param0: string): void;
						getHintText(): string;
						setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
						setVerticalOffset(param0: number): void;
						setHorizontalOffset(param0: number): void;
						setHorizontalOriginalOffset(param0: number): void;
						getHorizontalOriginalOffset(): number;
						getBackground(): android.graphics.drawable.Drawable;
						getVerticalOffset(): number;
						getHorizontalOffset(): number;
					});
					public constructor();
					public isShowing(): boolean;
					public setPromptText(param0: string): void;
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setAdapter(param0: android.widget.ListAdapter): void;
					public getHorizontalOriginalOffset(): number;
					public getBackground(): android.graphics.drawable.Drawable;
					public getVerticalOffset(): number;
					public show(param0: number, param1: number): void;
					public setVerticalOffset(param0: number): void;
					public setHorizontalOffset(param0: number): void;
					public setHorizontalOriginalOffset(param0: number): void;
					public getHorizontalOffset(): number;
					public getHintText(): string;
					public dismiss(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatTextClassifierHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextClassifierHelper>;
				public getTextClassifier(): any;
				public setTextClassifier(textClassifier: any): void;
			}
			export module AppCompatTextClassifierHelper {
				export class Api26Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextClassifierHelper.Api26Impl>;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatTextHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextHelper>;
			}
			export module AppCompatTextHelper {
				export class Api17Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextHelper.Api17Impl>;
				}
				export class Api21Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextHelper.Api21Impl>;
				}
				export class Api24Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextHelper.Api24Impl>;
				}
				export class Api26Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextHelper.Api26Impl>;
				}
				export class Api28Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextHelper.Api28Impl>;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatTextView extends android.widget.TextView implements androidx.core.view.TintableBackgroundView, androidx.core.widget.TintableCompoundDrawablesView, androidx.core.widget.AutoSizeableTextView, androidx.appcompat.widget.EmojiCompatConfigurationView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextView>;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public getAutoSizeStepGranularity(): number;
				public setLineHeight(lineHeight: number): void;
				public getFirstBaselineToTopHeight(): number;
				public setAutoSizeTextTypeUniformWithConfiguration(param0: number, param1: number, param2: number, param3: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public setAutoSizeTextTypeUniformWithPresetSizes(param0: number[], param1: number): void;
				public onPreDraw(): boolean;
				public setEmojiCompatEnabled(param0: boolean): void;
				public setEmojiCompatEnabled(enabled: boolean): void;
				public setSupportCompoundDrawablesTintList(param0: android.content.res.ColorStateList): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setSupportCompoundDrawablesTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setAllCaps(allCaps: boolean): void;
				public setTextSize(unit: number, size: number): void;
				public setCompoundDrawables(left: android.graphics.drawable.Drawable, top: android.graphics.drawable.Drawable, right: android.graphics.drawable.Drawable, bottom: android.graphics.drawable.Drawable): void;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public setBackgroundResource(resId: number): void;
				public setCompoundDrawablesRelative(start: android.graphics.drawable.Drawable, top: android.graphics.drawable.Drawable, end: android.graphics.drawable.Drawable, bottom: android.graphics.drawable.Drawable): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public constructor(context: android.content.Context);
				public setTextClassifier(textClassifier: any): void;
				public getAutoSizeTextType(): number;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public setLastBaselineToBottomHeight(lastBaselineToBottomHeight: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public setAutoSizeTextTypeUniformWithPresetSizes(presetSizes: number[], unit: number): void;
				public setCompoundDrawablesRelativeWithIntrinsicBounds(start: number, top: number, end: number, bottom: number): void;
				public getAutoSizeMaxTextSize(): number;
				public getSupportCompoundDrawablesTintList(): android.content.res.ColorStateList;
				public setCompoundDrawablesRelativeWithIntrinsicBounds(start: android.graphics.drawable.Drawable, top: android.graphics.drawable.Drawable, end: android.graphics.drawable.Drawable, bottom: android.graphics.drawable.Drawable): void;
				public setBackgroundResource(resid: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public getCustomSelectionActionModeCallback(): android.view.ActionMode.Callback;
				public setCompoundDrawablesWithIntrinsicBounds(left: android.graphics.drawable.Drawable, top: android.graphics.drawable.Drawable, right: android.graphics.drawable.Drawable, bottom: android.graphics.drawable.Drawable): void;
				public drawableStateChanged(): void;
				public setTextMetricsParamsCompat(params: androidx.core.text.PrecomputedTextCompat.Params): void;
				public setSupportCompoundDrawablesTintList(tintList: android.content.res.ColorStateList): void;
				public setAutoSizeTextTypeWithDefaults(param0: number): void;
				public setTextAppearance(context: android.content.Context, resId: number): void;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public onCreateInputConnection(outAttrs: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;
				public setTypeface(tf: android.graphics.Typeface, style: number): void;
				public getTextMetricsParamsCompat(): androidx.core.text.PrecomputedTextCompat.Params;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public setSupportBackgroundTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public setSupportBackgroundTintList(tint: android.content.res.ColorStateList): void;
				public setCustomSelectionActionModeCallback(actionModeCallback: android.view.ActionMode.Callback): void;
				public setCompoundDrawablesWithIntrinsicBounds(left: number, top: number, right: number, bottom: number): void;
				/** @deprecated */
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public getLastBaselineToBottomHeight(): number;
				public setTextFuture(future: java.util.concurrent.Future<androidx.core.text.PrecomputedTextCompat>): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public setFilters(filters: android.text.InputFilter[]): void;
				public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
				public getSupportBackgroundTintList(): android.content.res.ColorStateList;
				public getSupportCompoundDrawablesTintMode(): android.graphics.PorterDuff.Mode;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public setTypeface(tf: android.graphics.Typeface): void;
				public setSupportCompoundDrawablesTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public getTextClassifier(): any;
				public getAutoSizeTextAvailableSizes(): number[];
				public setTextSize(size: number): void;
				public setFirstBaselineToTopHeight(firstBaselineToTopHeight: number): void;
				public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
				public isEmojiCompatEnabled(): boolean;
				public getAutoSizeMinTextSize(): number;
				public getText(): string;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public onTextChanged(text: string, start: number, lengthBefore: number, lengthAfter: number): void;
				/** @deprecated */
				public setTextAppearance(context: android.content.Context, resId: number): void;
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public setTextAppearance(resId: number): void;
				public setAutoSizeTextTypeUniformWithConfiguration(autoSizeMinTextSize: number, autoSizeMaxTextSize: number, autoSizeStepGranularity: number, unit: number): void;
				public setPrecomputedText(precomputed: androidx.core.text.PrecomputedTextCompat): void;
				public setAutoSizeTextTypeWithDefaults(autoSizeTextType: number): void;
			}
			export module AppCompatTextView {
				export class SuperCaller extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextView.SuperCaller>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.AppCompatTextView$SuperCaller interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getAutoSizeMaxTextSize(): number;
						getAutoSizeMinTextSize(): number;
						getAutoSizeStepGranularity(): number;
						getAutoSizeTextAvailableSizes(): number[];
						getAutoSizeTextType(): number;
						getTextClassifier(): any;
						setAutoSizeTextTypeUniformWithConfiguration(param0: number, param1: number, param2: number, param3: number): void;
						setAutoSizeTextTypeUniformWithPresetSizes(param0: number[], param1: number): void;
						setAutoSizeTextTypeWithDefaults(param0: number): void;
						setTextClassifier(param0: any): void;
						setFirstBaselineToTopHeight(param0: number): void;
						setLastBaselineToBottomHeight(param0: number): void;
					});
					public constructor();
					public setTextClassifier(param0: any): void;
					public setAutoSizeTextTypeUniformWithPresetSizes(param0: number[], param1: number): void;
					public setLastBaselineToBottomHeight(param0: number): void;
					public getAutoSizeMaxTextSize(): number;
					public getAutoSizeStepGranularity(): number;
					public getAutoSizeTextType(): number;
					public getTextClassifier(): any;
					public setFirstBaselineToTopHeight(param0: number): void;
					public getAutoSizeTextAvailableSizes(): number[];
					public setAutoSizeTextTypeWithDefaults(param0: number): void;
					public setAutoSizeTextTypeUniformWithConfiguration(param0: number, param1: number, param2: number, param3: number): void;
					public getAutoSizeMinTextSize(): number;
				}
				export class SuperCallerApi26 extends java.lang.Object implements androidx.appcompat.widget.AppCompatTextView.SuperCaller {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextView.SuperCallerApi26>;
					public setAutoSizeTextTypeWithDefaults(autoSizeTextType: number): void;
					public setFirstBaselineToTopHeight(firstBaselineToTopHeight: number): void;
					public setAutoSizeTextTypeUniformWithPresetSizes(param0: number[], param1: number): void;
					public setLastBaselineToBottomHeight(param0: number): void;
					public getAutoSizeStepGranularity(): number;
					public getAutoSizeTextType(): number;
					public getTextClassifier(): any;
					public getAutoSizeTextAvailableSizes(): number[];
					public setAutoSizeTextTypeWithDefaults(param0: number): void;
					public setAutoSizeTextTypeUniformWithConfiguration(autoSizeMinTextSize: number, autoSizeMaxTextSize: number, autoSizeStepGranularity: number, unit: number): void;
					public setAutoSizeTextTypeUniformWithPresetSizes(presetSizes: number[], unit: number): void;
					public setTextClassifier(param0: any): void;
					public getAutoSizeMaxTextSize(): number;
					public setLastBaselineToBottomHeight(lastBaselineToBottomHeight: number): void;
					public setFirstBaselineToTopHeight(param0: number): void;
					public setAutoSizeTextTypeUniformWithConfiguration(param0: number, param1: number, param2: number, param3: number): void;
					public getAutoSizeMinTextSize(): number;
					public setTextClassifier(textClassifier: any): void;
				}
				export class SuperCallerApi28 extends androidx.appcompat.widget.AppCompatTextView.SuperCallerApi26 {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextView.SuperCallerApi28>;
					public setFirstBaselineToTopHeight(firstBaselineToTopHeight: number): void;
					public setAutoSizeTextTypeWithDefaults(autoSizeTextType: number): void;
					public setAutoSizeTextTypeUniformWithPresetSizes(param0: number[], param1: number): void;
					public setLastBaselineToBottomHeight(param0: number): void;
					public getAutoSizeStepGranularity(): number;
					public getAutoSizeTextType(): number;
					public getTextClassifier(): any;
					public getAutoSizeTextAvailableSizes(): number[];
					public setAutoSizeTextTypeWithDefaults(param0: number): void;
					public setAutoSizeTextTypeUniformWithConfiguration(autoSizeMinTextSize: number, autoSizeMaxTextSize: number, autoSizeStepGranularity: number, unit: number): void;
					public setAutoSizeTextTypeUniformWithPresetSizes(presetSizes: number[], unit: number): void;
					public setTextClassifier(param0: any): void;
					public getAutoSizeMaxTextSize(): number;
					public setLastBaselineToBottomHeight(lastBaselineToBottomHeight: number): void;
					public setFirstBaselineToTopHeight(param0: number): void;
					public setAutoSizeTextTypeUniformWithConfiguration(param0: number, param1: number, param2: number, param3: number): void;
					public getAutoSizeMinTextSize(): number;
					public setTextClassifier(textClassifier: any): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatTextViewAutoSizeHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextViewAutoSizeHelper>;
			}
			export module AppCompatTextViewAutoSizeHelper {
				export class Api16Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextViewAutoSizeHelper.Api16Impl>;
				}
				export class Api18Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextViewAutoSizeHelper.Api18Impl>;
				}
				export class Api23Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextViewAutoSizeHelper.Api23Impl>;
				}
				export class Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextViewAutoSizeHelper.Impl>;
				}
				export class Impl23 extends androidx.appcompat.widget.AppCompatTextViewAutoSizeHelper.Impl {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextViewAutoSizeHelper.Impl23>;
				}
				export class Impl29 extends androidx.appcompat.widget.AppCompatTextViewAutoSizeHelper.Impl23 {
					public static class: java.lang.Class<androidx.appcompat.widget.AppCompatTextViewAutoSizeHelper.Impl29>;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class AppCompatToggleButton extends android.widget.ToggleButton implements androidx.core.view.TintableBackgroundView, androidx.appcompat.widget.EmojiCompatConfigurationView, androidx.core.widget.TintableCompoundDrawablesView {
				public static class: java.lang.Class<androidx.appcompat.widget.AppCompatToggleButton>;
				public setChecked(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public setChecked(checked: boolean): void;
				public onPreDraw(): boolean;
				public setEmojiCompatEnabled(param0: boolean): void;
				public setEmojiCompatEnabled(enabled: boolean): void;
				public setSupportCompoundDrawablesTintList(param0: android.content.res.ColorStateList): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setSupportCompoundDrawablesTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setAllCaps(allCaps: boolean): void;
				public setCompoundDrawables(left: android.graphics.drawable.Drawable, top: android.graphics.drawable.Drawable, right: android.graphics.drawable.Drawable, bottom: android.graphics.drawable.Drawable): void;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public setBackgroundResource(resId: number): void;
				public setCompoundDrawablesRelative(start: android.graphics.drawable.Drawable, top: android.graphics.drawable.Drawable, end: android.graphics.drawable.Drawable, bottom: android.graphics.drawable.Drawable): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public constructor(context: android.content.Context);
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public getSupportCompoundDrawablesTintList(): android.content.res.ColorStateList;
				public setBackgroundResource(resid: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public drawableStateChanged(): void;
				public setSupportCompoundDrawablesTintList(tintList: android.content.res.ColorStateList): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public isChecked(): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public setSupportBackgroundTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public setSupportBackgroundTintList(tint: android.content.res.ColorStateList): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public toggle(): void;
				public setBackgroundDrawable(d: android.graphics.drawable.Drawable): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public setFilters(filters: android.text.InputFilter[]): void;
				public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
				public getSupportBackgroundTintList(): android.content.res.ColorStateList;
				public getSupportCompoundDrawablesTintMode(): android.graphics.PorterDuff.Mode;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public setSupportCompoundDrawablesTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
				public isEmojiCompatEnabled(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ButtonBarLayout extends android.widget.LinearLayout {
				public static class: java.lang.Class<androidx.appcompat.widget.ButtonBarLayout>;
				public addView(child: android.view.View, width: number, height: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public constructor(context: android.content.Context);
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public addView(child: android.view.View): void;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public addView(child: android.view.View, index: number): void;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public clearChildFocus(param0: android.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public requestFitSystemWindows(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public focusSearch(direction: number): android.view.View;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public setAllowStacking(allowStacking: boolean): void;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public removeView(view: android.view.View): void;
				public requestLayout(): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onStopNestedScroll(param0: android.view.View): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ContentFrameLayout extends android.widget.FrameLayout {
				public static class: java.lang.Class<androidx.appcompat.widget.ContentFrameLayout>;
				public addView(child: android.view.View, width: number, height: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public dispatchFitSystemWindows(insets: android.graphics.Rect): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public constructor(context: android.content.Context);
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public getMinWidthMinor(): android.util.TypedValue;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public getFixedHeightMinor(): android.util.TypedValue;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public addView(child: android.view.View): void;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public getFixedWidthMajor(): android.util.TypedValue;
				public addView(child: android.view.View, index: number): void;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public getFixedHeightMajor(): android.util.TypedValue;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public getMinWidthMajor(): android.util.TypedValue;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public onAttachedToWindow(): void;
				public clearChildFocus(param0: android.view.View): void;
				public setDecorPadding(left: number, top: number, right: number, bottom: number): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public setAttachListener(attachListener: androidx.appcompat.widget.ContentFrameLayout.OnAttachListener): void;
				public sendAccessibilityEvent(eventType: number): void;
				public requestFitSystemWindows(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public focusSearch(direction: number): android.view.View;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public onDetachedFromWindow(): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public getFixedWidthMinor(): android.util.TypedValue;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public removeView(view: android.view.View): void;
				public requestLayout(): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onStopNestedScroll(param0: android.view.View): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
			export module ContentFrameLayout {
				export class OnAttachListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ContentFrameLayout.OnAttachListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ContentFrameLayout$OnAttachListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDetachedFromWindow(): void;
						onAttachedFromWindow(): void;
					});
					public constructor();
					public onDetachedFromWindow(): void;
					public onAttachedFromWindow(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class DecorContentParent extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.DecorContentParent>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.DecorContentParent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setWindowCallback(param0: android.view.Window.Callback): void;
					setWindowTitle(param0: string): void;
					getTitle(): string;
					initFeature(param0: number): void;
					setUiOptions(param0: number): void;
					hasIcon(): boolean;
					hasLogo(): boolean;
					setIcon(param0: number): void;
					setIcon(param0: android.graphics.drawable.Drawable): void;
					setLogo(param0: number): void;
					canShowOverflowMenu(): boolean;
					isOverflowMenuShowing(): boolean;
					isOverflowMenuShowPending(): boolean;
					showOverflowMenu(): boolean;
					hideOverflowMenu(): boolean;
					setMenuPrepared(): void;
					setMenu(param0: android.view.Menu, param1: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					saveToolbarHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
					restoreToolbarHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
					dismissPopups(): void;
				});
				public constructor();
				public saveToolbarHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
				public restoreToolbarHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
				public setMenu(param0: android.view.Menu, param1: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public hasLogo(): boolean;
				public showOverflowMenu(): boolean;
				public dismissPopups(): void;
				public initFeature(param0: number): void;
				public setWindowCallback(param0: android.view.Window.Callback): void;
				public canShowOverflowMenu(): boolean;
				public setIcon(param0: number): void;
				public getTitle(): string;
				public hasIcon(): boolean;
				public isOverflowMenuShowing(): boolean;
				public hideOverflowMenu(): boolean;
				public setIcon(param0: android.graphics.drawable.Drawable): void;
				public isOverflowMenuShowPending(): boolean;
				public setLogo(param0: number): void;
				public setMenuPrepared(): void;
				public setWindowTitle(param0: string): void;
				public setUiOptions(param0: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class DecorToolbar extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.DecorToolbar>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.DecorToolbar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getViewGroup(): android.view.ViewGroup;
					getContext(): android.content.Context;
					hasExpandedActionView(): boolean;
					collapseActionView(): void;
					setWindowCallback(param0: android.view.Window.Callback): void;
					setWindowTitle(param0: string): void;
					getTitle(): string;
					setTitle(param0: string): void;
					getSubtitle(): string;
					setSubtitle(param0: string): void;
					initProgress(): void;
					initIndeterminateProgress(): void;
					hasIcon(): boolean;
					hasLogo(): boolean;
					setIcon(param0: number): void;
					setIcon(param0: android.graphics.drawable.Drawable): void;
					setLogo(param0: number): void;
					setLogo(param0: android.graphics.drawable.Drawable): void;
					canShowOverflowMenu(): boolean;
					isOverflowMenuShowing(): boolean;
					isOverflowMenuShowPending(): boolean;
					showOverflowMenu(): boolean;
					hideOverflowMenu(): boolean;
					setMenuPrepared(): void;
					setMenu(param0: android.view.Menu, param1: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					dismissPopupMenus(): void;
					getDisplayOptions(): number;
					setDisplayOptions(param0: number): void;
					setEmbeddedTabView(param0: androidx.appcompat.widget.ScrollingTabContainerView): void;
					hasEmbeddedTabs(): boolean;
					isTitleTruncated(): boolean;
					setCollapsible(param0: boolean): void;
					setHomeButtonEnabled(param0: boolean): void;
					getNavigationMode(): number;
					setNavigationMode(param0: number): void;
					setDropdownParams(param0: android.widget.SpinnerAdapter, param1: android.widget.AdapterView.OnItemSelectedListener): void;
					setDropdownSelectedPosition(param0: number): void;
					getDropdownSelectedPosition(): number;
					getDropdownItemCount(): number;
					setCustomView(param0: android.view.View): void;
					getCustomView(): android.view.View;
					animateToVisibility(param0: number): void;
					setupAnimatorToVisibility(param0: number, param1: number): androidx.core.view.ViewPropertyAnimatorCompat;
					setNavigationIcon(param0: android.graphics.drawable.Drawable): void;
					setNavigationIcon(param0: number): void;
					setNavigationContentDescription(param0: string): void;
					setNavigationContentDescription(param0: number): void;
					setDefaultNavigationContentDescription(param0: number): void;
					setDefaultNavigationIcon(param0: android.graphics.drawable.Drawable): void;
					saveHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
					restoreHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
					setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					getHeight(): number;
					setVisibility(param0: number): void;
					getVisibility(): number;
					setMenuCallbacks(param0: androidx.appcompat.view.menu.MenuPresenter.Callback, param1: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
					getMenu(): android.view.Menu;
				});
				public constructor();
				public setMenu(param0: android.view.Menu, param1: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public getHeight(): number;
				public hasLogo(): boolean;
				public showOverflowMenu(): boolean;
				public setDropdownParams(param0: android.widget.SpinnerAdapter, param1: android.widget.AdapterView.OnItemSelectedListener): void;
				public setWindowCallback(param0: android.view.Window.Callback): void;
				public setIcon(param0: number): void;
				public setTitle(param0: string): void;
				public setDefaultNavigationContentDescription(param0: number): void;
				public getDropdownSelectedPosition(): number;
				public getViewGroup(): android.view.ViewGroup;
				public getCustomView(): android.view.View;
				public setWindowTitle(param0: string): void;
				public setDisplayOptions(param0: number): void;
				public setDefaultNavigationIcon(param0: android.graphics.drawable.Drawable): void;
				public collapseActionView(): void;
				public setNavigationIcon(param0: android.graphics.drawable.Drawable): void;
				public setupAnimatorToVisibility(param0: number, param1: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public setNavigationContentDescription(param0: number): void;
				public setVisibility(param0: number): void;
				public hideOverflowMenu(): boolean;
				public setEmbeddedTabView(param0: androidx.appcompat.widget.ScrollingTabContainerView): void;
				public setSubtitle(param0: string): void;
				public initIndeterminateProgress(): void;
				public hasEmbeddedTabs(): boolean;
				public getVisibility(): number;
				public setNavigationContentDescription(param0: string): void;
				public setLogo(param0: number): void;
				public getSubtitle(): string;
				public setMenuPrepared(): void;
				public setHomeButtonEnabled(param0: boolean): void;
				public getContext(): android.content.Context;
				public setLogo(param0: android.graphics.drawable.Drawable): void;
				public initProgress(): void;
				public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
				public restoreHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
				public setCollapsible(param0: boolean): void;
				public getMenu(): android.view.Menu;
				public getNavigationMode(): number;
				public animateToVisibility(param0: number): void;
				public getDisplayOptions(): number;
				public setIcon(param0: android.graphics.drawable.Drawable): void;
				public dismissPopupMenus(): void;
				public setCustomView(param0: android.view.View): void;
				public isTitleTruncated(): boolean;
				public getDropdownItemCount(): number;
				public setNavigationIcon(param0: number): void;
				public canShowOverflowMenu(): boolean;
				public hasExpandedActionView(): boolean;
				public getTitle(): string;
				public hasIcon(): boolean;
				public isOverflowMenuShowing(): boolean;
				public saveHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
				public setMenuCallbacks(param0: androidx.appcompat.view.menu.MenuPresenter.Callback, param1: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
				public setNavigationMode(param0: number): void;
				public setDropdownSelectedPosition(param0: number): void;
				public isOverflowMenuShowPending(): boolean;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class DialogTitle extends androidx.appcompat.widget.AppCompatTextView {
				public static class: java.lang.Class<androidx.appcompat.widget.DialogTitle>;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public getAutoSizeStepGranularity(): number;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public setAutoSizeTextTypeUniformWithConfiguration(param0: number, param1: number, param2: number, param3: number): void;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public setAutoSizeTextTypeUniformWithPresetSizes(param0: number[], param1: number): void;
				public onPreDraw(): boolean;
				public setEmojiCompatEnabled(param0: boolean): void;
				public setEmojiCompatEnabled(enabled: boolean): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setSupportCompoundDrawablesTintList(param0: android.content.res.ColorStateList): void;
				public setSupportCompoundDrawablesTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public constructor(context: android.content.Context);
				public getAutoSizeTextType(): number;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public setAutoSizeTextTypeUniformWithPresetSizes(presetSizes: number[], unit: number): void;
				public getAutoSizeMaxTextSize(): number;
				public getSupportCompoundDrawablesTintList(): android.content.res.ColorStateList;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public setAutoSizeTextTypeWithDefaults(param0: number): void;
				public setSupportCompoundDrawablesTintList(tintList: android.content.res.ColorStateList): void;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public setSupportBackgroundTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public setSupportBackgroundTintList(tint: android.content.res.ColorStateList): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
				public getSupportBackgroundTintList(): android.content.res.ColorStateList;
				public getSupportCompoundDrawablesTintMode(): android.graphics.PorterDuff.Mode;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public setSupportCompoundDrawablesTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public getAutoSizeTextAvailableSizes(): number[];
				public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
				public getAutoSizeMinTextSize(): number;
				public isEmojiCompatEnabled(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public setAutoSizeTextTypeUniformWithConfiguration(autoSizeMinTextSize: number, autoSizeMaxTextSize: number, autoSizeStepGranularity: number, unit: number): void;
				public setAutoSizeTextTypeWithDefaults(autoSizeTextType: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class DropDownListView extends android.widget.ListView {
				public static class: java.lang.Class<androidx.appcompat.widget.DropDownListView>;
				public static INVALID_POSITION: number;
				public static NO_POSITION: number;
				public onFilterComplete(param0: number): void;
				public addView(child: android.view.View, width: number, height: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public hasWindowFocus(): boolean;
				public getTextDirection(): number;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public onTextChanged(s: string, start: number, before: number, count: number): void;
				public hasFocus(): boolean;
				public afterTextChanged(s: android.text.Editable): void;
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public onGlobalLayout(): void;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public bringChildToFront(child: android.view.View): void;
				public onHoverEvent(event: android.view.MotionEvent): boolean;
				public drawableStateChanged(): void;
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public isInTouchMode(): boolean;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public dispatchDraw(canvas: android.graphics.Canvas): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public isFocused(): boolean;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public addView(child: android.view.View): void;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public addView(child: android.view.View, index: number): void;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public onTouchModeChanged(isInTouchMode: boolean): void;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public clearChildFocus(param0: android.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public onHoverEvent(ev: android.view.MotionEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public requestFitSystemWindows(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public focusSearch(direction: number): android.view.View;
				public removeView(child: android.view.View): void;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public onDetachedFromWindow(): void;
				public setSelector(sel: android.graphics.drawable.Drawable): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public onTouchModeChanged(param0: boolean): void;
				public onForwardedEvent(event: android.view.MotionEvent, activePointerId: number): boolean;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public requestLayout(): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public onTouchEvent(ev: android.view.MotionEvent): boolean;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public setSelector(resID: number): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public measureHeightOfChildrenCompat(widthMeasureSpec: number, startPosition: number, endPosition: number, maxHeight: number, disallowPartialChildPosition: number): number;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onStopNestedScroll(param0: android.view.View): void;
				public onFilterComplete(count: number): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public beforeTextChanged(s: string, start: number, count: number, after: number): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public afterTextChanged(param0: android.text.Editable): void;
				public requestChildRectangleOnScreen(child: android.view.View, rect: android.graphics.Rect, immediate: boolean): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public lookForSelectablePosition(position: number, lookDown: boolean): number;
			}
			export module DropDownListView {
				export class Api21Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.DropDownListView.Api21Impl>;
				}
				export class Api30Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.DropDownListView.Api30Impl>;
				}
				export class Api33Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.DropDownListView.Api33Impl>;
				}
				export class GateKeeperDrawable {
					public static class: java.lang.Class<androidx.appcompat.widget.DropDownListView.GateKeeperDrawable>;
					public draw(canvas: android.graphics.Canvas): void;
					public setVisible(visible: boolean, restart: boolean): boolean;
					public setHotspot(x: number, y: number): void;
					public setState(stateSet: number[]): boolean;
					public setHotspotBounds(left: number, top: number, right: number, bottom: number): void;
				}
				export class PreApi33Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.DropDownListView.PreApi33Impl>;
				}
				export class ResolveHoverRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.appcompat.widget.DropDownListView.ResolveHoverRunnable>;
					public run(): void;
					public cancel(): void;
					public post(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class EmojiCompatConfigurationView extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.EmojiCompatConfigurationView>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.EmojiCompatConfigurationView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setEmojiCompatEnabled(param0: boolean): void;
					isEmojiCompatEnabled(): boolean;
				});
				public constructor();
				public setEmojiCompatEnabled(param0: boolean): void;
				public isEmojiCompatEnabled(): boolean;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class FitWindowsFrameLayout extends android.widget.FrameLayout implements androidx.appcompat.widget.FitWindowsViewGroup {
				public static class: java.lang.Class<androidx.appcompat.widget.FitWindowsFrameLayout>;
				public addView(child: android.view.View, width: number, height: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public constructor(context: android.content.Context);
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				/** @deprecated */
				public fitSystemWindows(insets: android.graphics.Rect): boolean;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public addView(child: android.view.View): void;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public fitSystemWindows(insets: android.graphics.Rect): boolean;
				public addView(child: android.view.View, index: number): void;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public clearChildFocus(param0: android.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public requestFitSystemWindows(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public setOnFitSystemWindowsListener(param0: androidx.appcompat.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public focusSearch(direction: number): android.view.View;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public removeView(view: android.view.View): void;
				public requestLayout(): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public setOnFitSystemWindowsListener(listener: androidx.appcompat.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onStopNestedScroll(param0: android.view.View): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class FitWindowsLinearLayout extends android.widget.LinearLayout implements androidx.appcompat.widget.FitWindowsViewGroup {
				public static class: java.lang.Class<androidx.appcompat.widget.FitWindowsLinearLayout>;
				public addView(child: android.view.View, width: number, height: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public constructor(context: android.content.Context);
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				/** @deprecated */
				public fitSystemWindows(insets: android.graphics.Rect): boolean;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public addView(child: android.view.View): void;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public fitSystemWindows(insets: android.graphics.Rect): boolean;
				public addView(child: android.view.View, index: number): void;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public clearChildFocus(param0: android.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public requestFitSystemWindows(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public setOnFitSystemWindowsListener(param0: androidx.appcompat.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public focusSearch(direction: number): android.view.View;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public removeView(view: android.view.View): void;
				public requestLayout(): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public setOnFitSystemWindowsListener(listener: androidx.appcompat.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onStopNestedScroll(param0: android.view.View): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class FitWindowsViewGroup extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.FitWindowsViewGroup>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.FitWindowsViewGroup interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setOnFitSystemWindowsListener(param0: androidx.appcompat.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
				});
				public constructor();
				public setOnFitSystemWindowsListener(param0: androidx.appcompat.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
			}
			export module FitWindowsViewGroup {
				export class OnFitSystemWindowsListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.FitWindowsViewGroup.OnFitSystemWindowsListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.FitWindowsViewGroup$OnFitSystemWindowsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFitSystemWindows(param0: android.graphics.Rect): void;
					});
					public constructor();
					public onFitSystemWindows(param0: android.graphics.Rect): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export abstract class ForwardingListener extends java.lang.Object implements android.view.View.OnTouchListener, android.view.View.OnAttachStateChangeListener {
				public static class: java.lang.Class<androidx.appcompat.widget.ForwardingListener>;
				public onTouch(v: android.view.View, event: android.view.MotionEvent): boolean;
				public getPopup(): androidx.appcompat.view.menu.ShowableListMenu;
				public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
				public onViewDetachedFromWindow(param0: android.view.View): void;
				public onViewDetachedFromWindow(v: android.view.View): void;
				public onForwardingStopped(): boolean;
				public onViewAttachedToWindow(param0: android.view.View): void;
				public onViewAttachedToWindow(v: android.view.View): void;
				public onForwardingStarted(): boolean;
				public constructor(src: android.view.View);
			}
			export module ForwardingListener {
				export class DisallowIntercept extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.appcompat.widget.ForwardingListener.DisallowIntercept>;
					public run(): void;
				}
				export class TriggerLongPress extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.appcompat.widget.ForwardingListener.TriggerLongPress>;
					public run(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class LinearLayoutCompat extends android.view.ViewGroup {
				public static class: java.lang.Class<androidx.appcompat.widget.LinearLayoutCompat>;
				public static HORIZONTAL: number;
				public static VERTICAL: number;
				public static SHOW_DIVIDER_NONE: number;
				public static SHOW_DIVIDER_BEGINNING: number;
				public static SHOW_DIVIDER_MIDDLE: number;
				public static SHOW_DIVIDER_END: number;
				public addView(child: android.view.View, width: number, height: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isBaselineAligned(): boolean;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public isMeasureWithLargestChildEnabled(): boolean;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public getDividerWidth(): number;
				public onDraw(canvas: android.graphics.Canvas): void;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				public generateLayoutParams(attrs: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
				public constructor(context: android.content.Context);
				public setBaselineAligned(baselineAligned: boolean): void;
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public generateDefaultLayoutParams(): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public getOrientation(): number;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public getGravity(): number;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public getShowDividers(): number;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public addView(child: android.view.View): void;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public addView(child: android.view.View, index: number): void;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public setHorizontalGravity(horizontalGravity: number): void;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public onInitializeAccessibilityNodeInfo(info: android.view.accessibility.AccessibilityNodeInfo): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public clearChildFocus(param0: android.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public setGravity(gravity: number): void;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public requestFitSystemWindows(): void;
				public setDividerDrawable(divider: android.graphics.drawable.Drawable): void;
				public checkLayoutParams(p: android.view.ViewGroup.LayoutParams): boolean;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public getBaselineAlignedChildIndex(): number;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public focusSearch(direction: number): android.view.View;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public getDividerDrawable(): android.graphics.drawable.Drawable;
				public setMeasureWithLargestChildEnabled(enabled: boolean): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public getBaseline(): number;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public setShowDividers(showDividers: number): void;
				public generateLayoutParams(attrs: android.util.AttributeSet): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public setBaselineAlignedChildIndex(i: number): void;
				public hasDividerBeforeChildAt(childIndex: number): boolean;
				public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
				public removeView(view: android.view.View): void;
				public generateLayoutParams(p: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
				public requestLayout(): void;
				public setOrientation(orientation: number): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public onStopNestedScroll(param0: android.view.View): void;
				public getDividerPadding(): number;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public setDividerPadding(padding: number): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public generateLayoutParams(p: android.view.ViewGroup.LayoutParams): androidx.appcompat.widget.LinearLayoutCompat.LayoutParams;
				public getWeightSum(): number;
				public setVerticalGravity(verticalGravity: number): void;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public setWeightSum(weightSum: number): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public shouldDelayChildPressedState(): boolean;
				public onInitializeAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): void;
			}
			export module LinearLayoutCompat {
				export class DividerMode extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.appcompat.widget.LinearLayoutCompat.DividerMode>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.LinearLayoutCompat$DividerMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class LayoutParams extends android.widget.LinearLayout.LayoutParams {
					public static class: java.lang.Class<androidx.appcompat.widget.LinearLayoutCompat.LayoutParams>;
					public constructor(source: android.view.ViewGroup.MarginLayoutParams);
					public constructor(c: android.content.Context, attrs: android.util.AttributeSet);
					public constructor(width: number, height: number, weight: number);
					public constructor(source: android.widget.LinearLayout.LayoutParams);
					public constructor(width: number, height: number);
					public constructor(p: android.view.ViewGroup.LayoutParams);
				}
				export class OrientationMode extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.appcompat.widget.LinearLayoutCompat.OrientationMode>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.LinearLayoutCompat$OrientationMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ListPopupWindow extends java.lang.Object implements androidx.appcompat.view.menu.ShowableListMenu {
				public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow>;
				public static POSITION_PROMPT_ABOVE: number;
				public static POSITION_PROMPT_BELOW: number;
				public static MATCH_PARENT: number;
				public static WRAP_CONTENT: number;
				public static INPUT_METHOD_FROM_FOCUSABLE: number;
				public static INPUT_METHOD_NEEDED: number;
				public static INPUT_METHOD_NOT_NEEDED: number;
				public setAnchorView(anchor: android.view.View): void;
				public getSelectedView(): android.view.View;
				public getHeight(): number;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public getSelectedItem(): any;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public setEpicenterBounds(bounds: android.graphics.Rect): void;
				public show(): void;
				public setOverlapAnchor(overlapAnchor: boolean): void;
				public setPromptPosition(position: number): void;
				public isShowing(): boolean;
				public getSoftInputMode(): number;
				public setVerticalOffset(offset: number): void;
				public postShow(): void;
				public constructor(context: android.content.Context);
				public getBackground(): android.graphics.drawable.Drawable;
				public setContentWidth(width: number): void;
				public getVerticalOffset(): number;
				public clearListSelection(): void;
				public setOnItemClickListener(clickListener: android.widget.AdapterView.OnItemClickListener): void;
				public getAnchorView(): android.view.View;
				public setAdapter(adapter: android.widget.ListAdapter): void;
				public isDropDownAlwaysVisible(): boolean;
				public getSelectedItemPosition(): number;
				public setSoftInputMode(mode: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public setForceIgnoreOutsideTouch(forceIgnoreOutsideTouch: boolean): void;
				public setDropDownAlwaysVisible(dropDownAlwaysVisible: boolean): void;
				public setWidth(width: number): void;
				public setOnItemSelectedListener(selectedListener: android.widget.AdapterView.OnItemSelectedListener): void;
				public getInputMethodMode(): number;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public setOnDismissListener(listener: android.widget.PopupWindow.OnDismissListener): void;
				public dismiss(): void;
				public isModal(): boolean;
				public setBackgroundDrawable(d: android.graphics.drawable.Drawable): void;
				public setDropDownGravity(gravity: number): void;
				public setSelection(position: number): void;
				public setListSelector(selector: android.graphics.drawable.Drawable): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public getHorizontalOffset(): number;
				public setPromptView(prompt: android.view.View): void;
				public isInputMethodNotNeeded(): boolean;
				public setAnimationStyle(animationStyle: number): void;
				public setInputMethodMode(mode: number): void;
				public getAnimationStyle(): number;
				public setWindowLayoutType(layoutType: number): void;
				public setModal(modal: boolean): void;
				public setHorizontalOffset(offset: number): void;
				public getListView(): android.widget.ListView;
				public getPromptPosition(): number;
				public onKeyPreIme(keyCode: number, event: android.view.KeyEvent): boolean;
				public setHeight(height: number): void;
				public getWidth(): number;
				public performItemClick(position: number): boolean;
				public getEpicenterBounds(): android.graphics.Rect;
				public getSelectedItemId(): number;
				public createDragToOpenListener(src: android.view.View): android.view.View.OnTouchListener;
			}
			export module ListPopupWindow {
				export class Api24Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow.Api24Impl>;
				}
				export class Api29Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow.Api29Impl>;
				}
				export class ListSelectorHider extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow.ListSelectorHider>;
					public run(): void;
				}
				export class PopupDataSetObserver extends android.database.DataSetObserver {
					public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow.PopupDataSetObserver>;
					public onChanged(): void;
					public onInvalidated(): void;
				}
				export class PopupScrollListener extends java.lang.Object implements android.widget.AbsListView.OnScrollListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow.PopupScrollListener>;
					public onScrollStateChanged(view: android.widget.AbsListView, scrollState: number): void;
					public onScroll(view: android.widget.AbsListView, firstVisibleItem: number, visibleItemCount: number, totalItemCount: number): void;
					public onScrollStateChanged(param0: android.widget.AbsListView, param1: number): void;
					public onScroll(param0: android.widget.AbsListView, param1: number, param2: number, param3: number): void;
				}
				export class PopupTouchInterceptor extends java.lang.Object implements android.view.View.OnTouchListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow.PopupTouchInterceptor>;
					public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
					public onTouch(v: android.view.View, event: android.view.MotionEvent): boolean;
				}
				export class ResizePopupRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.appcompat.widget.ListPopupWindow.ResizePopupRunnable>;
					public run(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class MenuItemHoverListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.MenuItemHoverListener>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.MenuItemHoverListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onItemHoverExit(param0: androidx.appcompat.view.menu.MenuBuilder, param1: android.view.MenuItem): void;
					onItemHoverEnter(param0: androidx.appcompat.view.menu.MenuBuilder, param1: android.view.MenuItem): void;
				});
				public constructor();
				public onItemHoverEnter(param0: androidx.appcompat.view.menu.MenuBuilder, param1: android.view.MenuItem): void;
				public onItemHoverExit(param0: androidx.appcompat.view.menu.MenuBuilder, param1: android.view.MenuItem): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class MenuPopupWindow extends androidx.appcompat.widget.ListPopupWindow implements androidx.appcompat.widget.MenuItemHoverListener {
				public static class: java.lang.Class<androidx.appcompat.widget.MenuPopupWindow>;
				public setHoverListener(hoverListener: androidx.appcompat.widget.MenuItemHoverListener): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public setEnterTransition(enterTransition: any): void;
				public constructor(context: android.content.Context);
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public onItemHoverEnter(menu: androidx.appcompat.view.menu.MenuBuilder, item: android.view.MenuItem): void;
				public setExitTransition(exitTransition: any): void;
				public getListView(): android.widget.ListView;
				public dismiss(): void;
				public show(): void;
				public setTouchModal(touchModal: boolean): void;
				public onItemHoverExit(menu: androidx.appcompat.view.menu.MenuBuilder, item: android.view.MenuItem): void;
				public isShowing(): boolean;
				public onItemHoverEnter(param0: androidx.appcompat.view.menu.MenuBuilder, param1: android.view.MenuItem): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onItemHoverExit(param0: androidx.appcompat.view.menu.MenuBuilder, param1: android.view.MenuItem): void;
			}
			export module MenuPopupWindow {
				export class Api23Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.MenuPopupWindow.Api23Impl>;
				}
				export class Api29Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.MenuPopupWindow.Api29Impl>;
				}
				export class MenuDropDownListView extends androidx.appcompat.widget.DropDownListView {
					public static class: java.lang.Class<androidx.appcompat.widget.MenuPopupWindow.MenuDropDownListView>;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public focusableViewAvailable(v: android.view.View): void;
					public removeView(child: android.view.View): void;
					public isTextDirectionResolved(): boolean;
					public showContextMenuForChild(param0: android.view.View): boolean;
					public onStopNestedScroll(child: android.view.View): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
					public constructor(context: android.content.Context, hijackFocus: boolean);
					public recomputeViewAttributes(child: android.view.View): void;
					public addView(child: android.view.View, index: number): void;
					public setHoverListener(hoverListener: androidx.appcompat.widget.MenuItemHoverListener): void;
					public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public getLayoutDirection(): number;
					public getParentForAccessibility(): android.view.ViewParent;
					public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
					public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
					public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
					public createContextMenu(param0: android.view.ContextMenu): void;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public childDrawableStateChanged(param0: android.view.View): void;
					public onFilterComplete(param0: number): void;
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public isTextAlignmentResolved(): boolean;
					public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public requestChildFocus(child: android.view.View, focused: android.view.View): void;
					public canResolveTextAlignment(): boolean;
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public requestChildRectangleOnScreen(child: android.view.View, rect: android.graphics.Rect, immediate: boolean): boolean;
					public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
					public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
					public showContextMenuForChild(originalView: android.view.View): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
					public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
					public sendAccessibilityEvent(param0: number): void;
					public requestLayout(): void;
					public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public onTextChanged(s: string, start: number, before: number, count: number): void;
					public getTextAlignment(): number;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
					public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public focusSearch(param0: android.view.View, param1: number): android.view.View;
					public bringChildToFront(child: android.view.View): void;
					public onTouchModeChanged(param0: boolean): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
					public onFilterComplete(count: number): void;
					public isLayoutRequested(): boolean;
					public clearChildFocus(param0: android.view.View): void;
					public clearChildFocus(child: android.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public isLayoutDirectionResolved(): boolean;
					public focusSearch(focused: android.view.View, direction: number): android.view.View;
					public addView(child: android.view.View): void;
					public onTouchModeChanged(isInTouchMode: boolean): void;
					public afterTextChanged(s: android.text.Editable): void;
					public addView(child: android.view.View, width: number, height: number): void;
					public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
					public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
					public bringChildToFront(param0: android.view.View): void;
					public constructor(context: android.content.Context);
					public beforeTextChanged(s: string, start: number, count: number, after: number): void;
					public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
					public onGlobalLayout(): void;
					public afterTextChanged(param0: android.text.Editable): void;
					public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
					public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
					public getTextDirection(): number;
					public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					public requestFitSystemWindows(): void;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public requestTransparentRegion(param0: android.view.View): void;
					public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
					public canResolveTextDirection(): boolean;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public getParent(): android.view.ViewParent;
					public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
					public createContextMenu(menu: android.view.ContextMenu): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public onStopNestedScroll(param0: android.view.View): void;
					public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
					public canResolveLayoutDirection(): boolean;
					public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
					public requestTransparentRegion(child: android.view.View): void;
					public removeView(param0: android.view.View): void;
					public childDrawableStateChanged(child: android.view.View): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public clearSelection(): void;
					public recomputeViewAttributes(param0: android.view.View): void;
					public focusableViewAvailable(param0: android.view.View): void;
					public onHoverEvent(ev: android.view.MotionEvent): boolean;
					public focusSearch(direction: number): android.view.View;
					public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				}
				export module MenuDropDownListView {
					export class Api17Impl extends java.lang.Object {
						public static class: java.lang.Class<androidx.appcompat.widget.MenuPopupWindow.MenuDropDownListView.Api17Impl>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class PopupMenu extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.PopupMenu>;
				public setGravity(gravity: number): void;
				public setOnMenuItemClickListener(listener: androidx.appcompat.widget.PopupMenu.OnMenuItemClickListener): void;
				public getDragToOpenListener(): android.view.View.OnTouchListener;
				public setOnDismissListener(listener: androidx.appcompat.widget.PopupMenu.OnDismissListener): void;
				public getMenu(): android.view.Menu;
				public constructor(context: android.content.Context, anchor: android.view.View, gravity: number, popupStyleAttr: number, popupStyleRes: number);
				public dismiss(): void;
				public getMenuInflater(): android.view.MenuInflater;
				public show(): void;
				public inflate(menuRes: number): void;
				public getGravity(): number;
				public constructor(context: android.content.Context, anchor: android.view.View);
				public constructor(context: android.content.Context, anchor: android.view.View, gravity: number);
				public setForceShowIcon(forceShowIcon: boolean): void;
			}
			export module PopupMenu {
				export class OnDismissListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.PopupMenu.OnDismissListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.PopupMenu$OnDismissListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDismiss(param0: androidx.appcompat.widget.PopupMenu): void;
					});
					public constructor();
					public onDismiss(param0: androidx.appcompat.widget.PopupMenu): void;
				}
				export class OnMenuItemClickListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.PopupMenu.OnMenuItemClickListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.PopupMenu$OnMenuItemClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMenuItemClick(param0: android.view.MenuItem): boolean;
					});
					public constructor();
					public onMenuItemClick(param0: android.view.MenuItem): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class RtlSpacingHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.RtlSpacingHelper>;
				public static UNDEFINED: number;
				public getEnd(): number;
				public setAbsolute(left: number, right: number): void;
				public getLeft(): number;
				public getStart(): number;
				public getRight(): number;
				public setDirection(isRtl: boolean): void;
				public setRelative(start: number, end: number): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ScrollingTabContainerView extends android.widget.HorizontalScrollView implements android.widget.AdapterView.OnItemSelectedListener {
				public static class: java.lang.Class<androidx.appcompat.widget.ScrollingTabContainerView>;
				public mVisibilityAnim: android.view.ViewPropertyAnimator;
				public mVisAnimListener: androidx.appcompat.widget.ScrollingTabContainerView.VisibilityAnimListener;
				public animateToVisibility(visibility: number): void;
				public addView(child: android.view.View, width: number, height: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public onNothingSelected(adapterView: android.widget.AdapterView<any>): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public constructor(context: android.content.Context);
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public updateTab(position: number): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public removeAllTabs(): void;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public addView(child: android.view.View): void;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public addView(child: android.view.View, index: number): void;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onItemSelected(param0: android.widget.AdapterView<any>, param1: android.view.View, param2: number, param3: number): void;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public setTabSelected(position: number): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public onAttachedToWindow(): void;
				public clearChildFocus(param0: android.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public removeTabAt(position: number): void;
				public setContentHeight(contentHeight: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public requestFitSystemWindows(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public onConfigurationChanged(newConfig: android.content.res.Configuration): void;
				public focusSearch(direction: number): android.view.View;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public onDetachedFromWindow(): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public animateToTab(position: number): void;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public removeView(view: android.view.View): void;
				public requestLayout(): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public setAllowCollapse(allowCollapse: boolean): void;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public addTab(tab: androidx.appcompat.app.ActionBar.Tab, position: number, setSelected: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onItemSelected(adapterView: android.widget.AdapterView<any>, view: android.view.View, position: number, id: number): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onStopNestedScroll(param0: android.view.View): void;
				public onNothingSelected(param0: android.widget.AdapterView<any>): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public addTab(tab: androidx.appcompat.app.ActionBar.Tab, setSelected: boolean): void;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
			export module ScrollingTabContainerView {
				export class TabAdapter extends android.widget.BaseAdapter {
					public static class: java.lang.Class<androidx.appcompat.widget.ScrollingTabContainerView.TabAdapter>;
					public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
					public getItem(position: number): any;
					public getCount(): number;
					public areAllItemsEnabled(): boolean;
					public isEnabled(position: number): boolean;
					public getDropDownView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
					public getView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
					public isEnabled(param0: number): boolean;
					public getItemId(position: number): number;
				}
				export class TabClickListener extends java.lang.Object implements android.view.View.OnClickListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ScrollingTabContainerView.TabClickListener>;
					public onClick(view: android.view.View): void;
					public onClick(param0: android.view.View): void;
				}
				export class TabView extends android.widget.LinearLayout {
					public static class: java.lang.Class<androidx.appcompat.widget.ScrollingTabContainerView.TabView>;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public focusableViewAvailable(v: android.view.View): void;
					public isTextDirectionResolved(): boolean;
					public showContextMenuForChild(param0: android.view.View): boolean;
					public onStopNestedScroll(child: android.view.View): void;
					public constructor(param0: androidx.appcompat.widget.ScrollingTabContainerView, context: android.content.Context, tab: androidx.appcompat.app.ActionBar.Tab, forList: boolean);
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
					public recomputeViewAttributes(child: android.view.View): void;
					public addView(child: android.view.View, index: number): void;
					public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public getLayoutDirection(): number;
					public getParentForAccessibility(): android.view.ViewParent;
					public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
					public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
					public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
					public createContextMenu(param0: android.view.ContextMenu): void;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public childDrawableStateChanged(param0: android.view.View): void;
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public setSelected(selected: boolean): void;
					public isTextAlignmentResolved(): boolean;
					public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public requestChildFocus(child: android.view.View, focused: android.view.View): void;
					public canResolveTextAlignment(): boolean;
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
					public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
					public showContextMenuForChild(originalView: android.view.View): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
					public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
					public sendAccessibilityEvent(param0: number): void;
					public requestLayout(): void;
					public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public getTextAlignment(): number;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
					public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
					public focusSearch(param0: android.view.View, param1: number): android.view.View;
					public bringChildToFront(child: android.view.View): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
					public isLayoutRequested(): boolean;
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					public clearChildFocus(param0: android.view.View): void;
					public clearChildFocus(child: android.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public isLayoutDirectionResolved(): boolean;
					public focusSearch(focused: android.view.View, direction: number): android.view.View;
					public addView(child: android.view.View): void;
					public addView(child: android.view.View, width: number, height: number): void;
					public removeView(view: android.view.View): void;
					public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
					public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
					public bringChildToFront(param0: android.view.View): void;
					public constructor(context: android.content.Context);
					public onInitializeAccessibilityNodeInfo(info: android.view.accessibility.AccessibilityNodeInfo): void;
					public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
					public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
					public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
					public getTextDirection(): number;
					public requestFitSystemWindows(): void;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public requestTransparentRegion(param0: android.view.View): void;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
					public getTab(): androidx.appcompat.app.ActionBar.Tab;
					public canResolveTextDirection(): boolean;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public getParent(): android.view.ViewParent;
					public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
					public update(): void;
					public createContextMenu(menu: android.view.ContextMenu): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public onInitializeAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): void;
					public onStopNestedScroll(param0: android.view.View): void;
					public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
					public canResolveLayoutDirection(): boolean;
					public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
					public requestTransparentRegion(child: android.view.View): void;
					public removeView(param0: android.view.View): void;
					public childDrawableStateChanged(child: android.view.View): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public recomputeViewAttributes(param0: android.view.View): void;
					public focusableViewAvailable(param0: android.view.View): void;
					public focusSearch(direction: number): android.view.View;
					public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
					public bindTab(tab: androidx.appcompat.app.ActionBar.Tab): void;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				}
				export class VisibilityAnimListener extends android.animation.AnimatorListenerAdapter {
					public static class: java.lang.Class<androidx.appcompat.widget.ScrollingTabContainerView.VisibilityAnimListener>;
					public onAnimationPause(animation: android.animation.Animator): void;
					public onAnimationCancel(animation: android.animation.Animator): void;
					public onAnimationCancel(param0: android.animation.Animator): void;
					public onAnimationEnd(animation: android.animation.Animator): void;
					public onAnimationCancel(animator: android.animation.Animator): void;
					public onAnimationRepeat(param0: android.animation.Animator): void;
					public constructor(this$0: androidx.appcompat.widget.ScrollingTabContainerView);
					public withFinalVisibility(animation: android.view.ViewPropertyAnimator, visibility: number): androidx.appcompat.widget.ScrollingTabContainerView.VisibilityAnimListener;
					public onAnimationEnd(animator: android.animation.Animator): void;
					public onAnimationStart(animator: android.animation.Animator): void;
					public onAnimationEnd(param0: android.animation.Animator): void;
					public onAnimationStart(animation: android.animation.Animator): void;
					public constructor();
					public onAnimationRepeat(animation: android.animation.Animator): void;
					public onAnimationResume(param0: android.animation.Animator): void;
					public onAnimationResume(animation: android.animation.Animator): void;
					public onAnimationStart(param0: android.animation.Animator): void;
					public onAnimationPause(param0: android.animation.Animator): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class SearchView extends androidx.appcompat.widget.LinearLayoutCompat implements androidx.appcompat.view.CollapsibleActionView {
				public static class: java.lang.Class<androidx.appcompat.widget.SearchView>;
				public addView(child: android.view.View, width: number, height: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public setQueryRefinementEnabled(enable: boolean): void;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public setInputType(inputType: number): void;
				public isSubmitButtonEnabled(): boolean;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public getQueryHint(): string;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				public onActionViewExpanded(): void;
				public constructor(context: android.content.Context);
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public requestFocus(direction: number): boolean;
				public clearFocus(): void;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public bringChildToFront(child: android.view.View): void;
				public onActionViewCollapsed(): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public setImeOptions(imeOptions: number): void;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public setIconifiedByDefault(iconified: boolean): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public getInputType(): number;
				public setSuggestionsAdapter(adapter: androidx.cursoradapter.widget.CursorAdapter): void;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public addView(child: android.view.View): void;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public setSubmitButtonEnabled(enabled: boolean): void;
				public addView(child: android.view.View, index: number): void;
				public setOnQueryTextListener(listener: androidx.appcompat.widget.SearchView.OnQueryTextListener): void;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public setOnCloseListener(listener: androidx.appcompat.widget.SearchView.OnCloseListener): void;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public setQuery(query: string, submit: boolean): void;
				public getImeOptions(): number;
				public onStopNestedScroll(child: android.view.View): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public getQuery(): string;
				public recomputeViewAttributes(param0: android.view.View): void;
				public setAppSearchData(appSearchData: android.os.Bundle): void;
				public clearChildFocus(param0: android.view.View): void;
				public isIconified(): boolean;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public isQueryRefinementEnabled(): boolean;
				public onQueryRefine(queryText: string): void;
				public setOnSearchClickListener(listener: android.view.View.OnClickListener): void;
				public sendAccessibilityEvent(eventType: number): void;
				public requestFitSystemWindows(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setOnQueryTextFocusChangeListener(listener: android.view.View.OnFocusChangeListener): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public setIconified(iconify: boolean): void;
				public focusSearch(direction: number): android.view.View;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public setQueryHint(hint: string): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public onDetachedFromWindow(): void;
				public isIconfiedByDefault(): boolean;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public setSearchableInfo(searchable: android.app.SearchableInfo): void;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public getMaxWidth(): number;
				public onRestoreInstanceState(state: android.os.Parcelable): void;
				public canResolveTextAlignment(): boolean;
				public requestFocus(direction: number, previouslyFocusedRect: android.graphics.Rect): boolean;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public removeView(view: android.view.View): void;
				public requestLayout(): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public setMaxWidth(maxpixels: number): void;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public setOnSuggestionListener(listener: androidx.appcompat.widget.SearchView.OnSuggestionListener): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onStopNestedScroll(param0: android.view.View): void;
				public requestFocus(): boolean;
				public onWindowFocusChanged(hasWindowFocus: boolean): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public getSuggestionsAdapter(): androidx.cursoradapter.widget.CursorAdapter;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public onSaveInstanceState(): android.os.Parcelable;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
			export module SearchView {
				export class Api29Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.Api29Impl>;
				}
				export class OnCloseListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.OnCloseListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.SearchView$OnCloseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onClose(): boolean;
					});
					public constructor();
					public onClose(): boolean;
				}
				export class OnQueryTextListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.OnQueryTextListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.SearchView$OnQueryTextListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onQueryTextSubmit(param0: string): boolean;
						onQueryTextChange(param0: string): boolean;
					});
					public constructor();
					public onQueryTextSubmit(param0: string): boolean;
					public onQueryTextChange(param0: string): boolean;
				}
				export class OnSuggestionListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.OnSuggestionListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.SearchView$OnSuggestionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSuggestionSelect(param0: number): boolean;
						onSuggestionClick(param0: number): boolean;
					});
					public constructor();
					public onSuggestionClick(param0: number): boolean;
					public onSuggestionSelect(param0: number): boolean;
				}
				export class PreQAutoCompleteTextViewReflector extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.PreQAutoCompleteTextViewReflector>;
				}
				export class SavedState extends androidx.customview.view.AbsSavedState {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.SavedState>;
					public static CREATOR: android.os.Parcelable.Creator<androidx.appcompat.widget.SearchView.SavedState>;
					public constructor(param0: android.os.Parcel);
					public toString(): string;
					public constructor(param0: android.os.Parcelable);
					public describeContents(): number;
					public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
					public writeToParcel(dest: android.os.Parcel, flags: number): void;
					public constructor(source: android.os.Parcel, loader: java.lang.ClassLoader);
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
				export class SearchAutoComplete extends androidx.appcompat.widget.AppCompatAutoCompleteTextView {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.SearchAutoComplete>;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public setSupportBackgroundTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public setSupportCompoundDrawablesTintList(param0: android.content.res.ColorStateList): void;
					public replaceText(text: string): void;
					public onFilterComplete(count: number): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyle: number);
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
					public onKeyPreIme(keyCode: number, event: android.view.KeyEvent): boolean;
					public setSupportBackgroundTintList(tint: android.content.res.ColorStateList): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public getSupportBackgroundTintList(): android.content.res.ColorStateList;
					public setThreshold(threshold: number): void;
					public isEmojiCompatEnabled(): boolean;
					public constructor(context: android.content.Context);
					public performCompletion(): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number, popupTheme: android.content.res.Resources.Theme);
					public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
					public onFilterComplete(param0: number): void;
					public setSupportCompoundDrawablesTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public onCreateInputConnection(editorInfo: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public onWindowFocusChanged(hasWindowFocus: boolean): void;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public setEmojiCompatEnabled(enabled: boolean): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public onFinishInflate(): void;
					public sendAccessibilityEvent(param0: number): void;
					public onCreateInputConnection(outAttrs: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;
					public onPreDraw(): boolean;
					public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
					public setSupportCompoundDrawablesTintList(tintList: android.content.res.ColorStateList): void;
					public enoughToFilter(): boolean;
					public setEmojiCompatEnabled(param0: boolean): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public onFocusChanged(focused: boolean, direction: number, previouslyFocusedRect: android.graphics.Rect): void;
					public setSupportCompoundDrawablesTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public getSupportCompoundDrawablesTintMode(): android.graphics.PorterDuff.Mode;
					public getSupportCompoundDrawablesTintList(): android.content.res.ColorStateList;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				}
				export class UpdatableTouchDelegate extends android.view.TouchDelegate {
					public static class: java.lang.Class<androidx.appcompat.widget.SearchView.UpdatableTouchDelegate>;
					public constructor(targetBounds: android.graphics.Rect, actualBounds: android.graphics.Rect, delegateView: android.view.View);
					public constructor(bounds: android.graphics.Rect, delegateView: android.view.View);
					public setBounds(desiredBounds: android.graphics.Rect, actualBounds: android.graphics.Rect): void;
					public onTouchEvent(event: android.view.MotionEvent): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ShareActionProvider extends androidx.core.view.ActionProvider {
				public static class: java.lang.Class<androidx.appcompat.widget.ShareActionProvider>;
				public static DEFAULT_SHARE_HISTORY_FILE_NAME: string;
				public setOnShareTargetSelectedListener(listener: androidx.appcompat.widget.ShareActionProvider.OnShareTargetSelectedListener): void;
				public onCreateActionView(): android.view.View;
				public constructor(context: android.content.Context);
				public onCreateActionView(param0: android.view.MenuItem): android.view.View;
				public constructor(param0: android.content.Context);
				public setShareHistoryFileName(shareHistoryFile: string): void;
				public setShareIntent(shareIntent: android.content.Intent): void;
				public onPrepareSubMenu(subMenu: android.view.SubMenu): void;
				public hasSubMenu(): boolean;
				public onPrepareSubMenu(param0: android.view.SubMenu): void;
			}
			export module ShareActionProvider {
				export class OnShareTargetSelectedListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ShareActionProvider.OnShareTargetSelectedListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ShareActionProvider$OnShareTargetSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onShareTargetSelected(param0: androidx.appcompat.widget.ShareActionProvider, param1: android.content.Intent): boolean;
					});
					public constructor();
					public onShareTargetSelected(param0: androidx.appcompat.widget.ShareActionProvider, param1: android.content.Intent): boolean;
				}
				export class ShareActivityChooserModelPolicy extends java.lang.Object implements androidx.appcompat.widget.ActivityChooserModel.OnChooseActivityListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ShareActionProvider.ShareActivityChooserModelPolicy>;
					public onChooseActivity(host: androidx.appcompat.widget.ActivityChooserModel, intent: android.content.Intent): boolean;
					public onChooseActivity(param0: androidx.appcompat.widget.ActivityChooserModel, param1: android.content.Intent): boolean;
				}
				export class ShareMenuItemOnMenuItemClickListener extends java.lang.Object implements android.view.MenuItem.OnMenuItemClickListener {
					public static class: java.lang.Class<androidx.appcompat.widget.ShareActionProvider.ShareMenuItemOnMenuItemClickListener>;
					public onMenuItemClick(param0: android.view.MenuItem): boolean;
					public onMenuItemClick(item: android.view.MenuItem): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class SuggestionsAdapter extends androidx.cursoradapter.widget.ResourceCursorAdapter implements android.view.View.OnClickListener {
				public static class: java.lang.Class<androidx.appcompat.widget.SuggestionsAdapter>;
				public convertToString(param0: android.database.Cursor): string;
				public static getColumnString(cursor: android.database.Cursor, columnName: string): string;
				public setQueryRefinement(refineWhat: number): void;
				public changeCursor(param0: android.database.Cursor): void;
				public changeCursor(c: android.database.Cursor): void;
				public getView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
				public constructor();
				public bindView(param0: android.view.View, param1: android.content.Context, param2: android.database.Cursor): void;
				public onClick(v: android.view.View): void;
				public convertToString(cursor: android.database.Cursor): string;
				public isEnabled(param0: number): boolean;
				public constructor(param0: android.content.Context, param1: number, param2: android.database.Cursor, param3: number);
				public notifyDataSetInvalidated(): void;
				public runQueryOnBackgroundThread(constraint: string): android.database.Cursor;
				public areAllItemsEnabled(): boolean;
				public constructor(param0: android.content.Context, param1: android.database.Cursor);
				public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: number);
				public close(): void;
				public onClick(param0: android.view.View): void;
				public notifyDataSetChanged(): void;
				public getFilter(): android.widget.Filter;
				public constructor(param0: android.content.Context, param1: number, param2: android.database.Cursor, param3: boolean);
				public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
				public getCursor(): android.database.Cursor;
				public bindView(view: android.view.View, context: android.content.Context, cursor: android.database.Cursor): void;
				public constructor(param0: android.content.Context, param1: number, param2: android.database.Cursor);
				public runQueryOnBackgroundThread(param0: string): android.database.Cursor;
				public hasStableIds(): boolean;
				public getQueryRefinement(): number;
				public constructor(context: android.content.Context, searchView: androidx.appcompat.widget.SearchView, searchable: android.app.SearchableInfo, outsideDrawablesCache: java.util.WeakHashMap<string,android.graphics.drawable.Drawable.ConstantState>);
				public getDropDownView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
				public newView(context: android.content.Context, cursor: android.database.Cursor, parent: android.view.ViewGroup): android.view.View;
				public newView(param0: android.content.Context, param1: android.database.Cursor, param2: android.view.ViewGroup): android.view.View;
				public isEnabled(position: number): boolean;
				public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
				public constructor(param0: android.content.Context, param1: android.database.Cursor, param2: boolean);
			}
			export module SuggestionsAdapter {
				export class ChildViewCache extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.SuggestionsAdapter.ChildViewCache>;
					public mText1: android.widget.TextView;
					public mText2: android.widget.TextView;
					public mIcon1: android.widget.ImageView;
					public mIcon2: android.widget.ImageView;
					public mIconRefine: android.widget.ImageView;
					public constructor(v: android.view.View);
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class SwitchCompat extends android.widget.CompoundButton implements androidx.appcompat.widget.EmojiCompatConfigurationView {
				public static class: java.lang.Class<androidx.appcompat.widget.SwitchCompat>;
				public setChecked(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public setSwitchMinWidth(pixels: number): void;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public setSwitchTextAppearance(context: android.content.Context, resid: number): void;
				public setSwitchTypeface(tf: android.graphics.Typeface, style: number): void;
				public getThumbDrawable(): android.graphics.drawable.Drawable;
				public getTrackDrawable(): android.graphics.drawable.Drawable;
				public setThumbTintList(tint: android.content.res.ColorStateList): void;
				public getTextOff(): string;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public setChecked(checked: boolean): void;
				public onPreDraw(): boolean;
				public setEmojiCompatEnabled(param0: boolean): void;
				public setEmojiCompatEnabled(enabled: boolean): void;
				public setSwitchPadding(pixels: number): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setThumbTextPadding(pixels: number): void;
				public setAllCaps(allCaps: boolean): void;
				public setShowText(showText: boolean): void;
				public getThumbPosition(): number;
				public setTrackResource(resId: number): void;
				public verifyDrawable(who: android.graphics.drawable.Drawable): boolean;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public setTextOn(textOn: string): void;
				public getTextOn(): string;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public onDraw(canvas: android.graphics.Canvas): void;
				public constructor(context: android.content.Context);
				public setTrackTintList(tint: android.content.res.ColorStateList): void;
				public getSplitTrack(): boolean;
				public draw(c: android.graphics.Canvas): void;
				public getThumbTintList(): android.content.res.ColorStateList;
				public onPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): void;
				public getTrackTintList(): android.content.res.ColorStateList;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public getThumbTintMode(): android.graphics.PorterDuff.Mode;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public setThumbTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public onTouchEvent(event: android.view.MotionEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public setSplitTrack(splitTrack: boolean): void;
				public getCustomSelectionActionModeCallback(): android.view.ActionMode.Callback;
				public drawableStateChanged(): void;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public isChecked(): boolean;
				public setTrackDrawable(track: android.graphics.drawable.Drawable): void;
				public setTrackTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public jumpDrawablesToCurrentState(): void;
				public getTrackTintMode(): android.graphics.PorterDuff.Mode;
				public draw(canvas: android.graphics.Canvas): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public getThumbTextPadding(): number;
				public setCustomSelectionActionModeCallback(actionModeCallback: android.view.ActionMode.Callback): void;
				public onCreateDrawableState(extraSpace: number): number[];
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public toggle(): void;
				public getSwitchMinWidth(): number;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public setFilters(filters: android.text.InputFilter[]): void;
				public getSwitchPadding(): number;
				public onTouchEvent(ev: android.view.MotionEvent): boolean;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public getCompoundPaddingLeft(): number;
				public setSwitchTypeface(typeface: android.graphics.Typeface): void;
				public drawableHotspotChanged(x: number, y: number): void;
				public setThumbDrawable(thumb: android.graphics.drawable.Drawable): void;
				public onInitializeAccessibilityNodeInfo(info: android.view.accessibility.AccessibilityNodeInfo): void;
				public setEnforceSwitchWidth(enforceSwitchWidth: boolean): void;
				public isEmojiCompatEnabled(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public getShowText(): boolean;
				public setTextOff(textOff: string): void;
				public setThumbResource(resId: number): void;
				public getCompoundPaddingRight(): number;
				public onInitializeAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): void;
			}
			export module SwitchCompat {
				export class Api18Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.SwitchCompat.Api18Impl>;
				}
				export class EmojiCompatInitCallback extends androidx.emoji2.text.EmojiCompat.InitCallback {
					public static class: java.lang.Class<androidx.appcompat.widget.SwitchCompat.EmojiCompatInitCallback>;
					public onInitialized(): void;
					public onFailed(throwable: java.lang.Throwable): void;
					public onFailed(param0: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ThemeUtils extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.ThemeUtils>;
				public static createDisabledStateList(textColor: number, disabledTextColor: number): android.content.res.ColorStateList;
				public static getThemeAttrColor(context: android.content.Context, attr: number): number;
				public static getDisabledThemeAttrColor(context: android.content.Context, attr: number): number;
				public static getThemeAttrColorStateList(context: android.content.Context, attr: number): android.content.res.ColorStateList;
				public static checkAppCompatTheme(view: android.view.View, context: android.content.Context): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ThemedSpinnerAdapter extends java.lang.Object implements android.widget.SpinnerAdapter {
				public static class: java.lang.Class<androidx.appcompat.widget.ThemedSpinnerAdapter>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.ThemedSpinnerAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setDropDownViewTheme(param0: android.content.res.Resources.Theme): void;
					getDropDownViewTheme(): android.content.res.Resources.Theme;
					getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
					registerDataSetObserver(param0: android.database.DataSetObserver): void;
					unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
					getCount(): number;
					getItem(param0: number): any;
					getItemId(param0: number): number;
					hasStableIds(): boolean;
					getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
					getItemViewType(param0: number): number;
					getViewTypeCount(): number;
					isEmpty(): boolean;
				});
				public constructor();
				public static NO_SELECTION: number;
				public static IGNORE_ITEM_VIEW_TYPE: number;
				public getViewTypeCount(): number;
				public getCount(): number;
				public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
				public registerDataSetObserver(param0: android.database.DataSetObserver): void;
				public getDropDownViewTheme(): android.content.res.Resources.Theme;
				public hasStableIds(): boolean;
				public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
				public getItemId(param0: number): number;
				public getItemViewType(param0: number): number;
				public setDropDownViewTheme(param0: android.content.res.Resources.Theme): void;
				public getItem(param0: number): any;
				public isEmpty(): boolean;
				public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
			}
			export module ThemedSpinnerAdapter {
				export class Helper extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ThemedSpinnerAdapter.Helper>;
					public constructor(context: android.content.Context);
					public getDropDownViewTheme(): android.content.res.Resources.Theme;
					public getDropDownViewInflater(): android.view.LayoutInflater;
					public setDropDownViewTheme(theme: android.content.res.Resources.Theme): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TintTypedArray extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.TintTypedArray>;
				public recycle(): void;
				public getDrawableIfKnown(index: number): android.graphics.drawable.Drawable;
				public getDimensionPixelOffset(index: number, defValue: number): number;
				public getWrappedTypeArray(): android.content.res.TypedArray;
				public getColorStateList(index: number): android.content.res.ColorStateList;
				public getType(index: number): number;
				public getPositionDescription(): string;
				public getDrawable(index: number): android.graphics.drawable.Drawable;
				public static obtainStyledAttributes(context: android.content.Context, resid: number, attrs: number[]): androidx.appcompat.widget.TintTypedArray;
				public getFont(index: number, style: number, fontCallback: androidx.core.content.res.ResourcesCompat.FontCallback): android.graphics.Typeface;
				public getNonResourceString(index: number): string;
				public getDimension(index: number, defValue: number): number;
				public getIndexCount(): number;
				public static obtainStyledAttributes(context: android.content.Context, set: android.util.AttributeSet, attrs: number[], defStyleAttr: number, defStyleRes: number): androidx.appcompat.widget.TintTypedArray;
				public getIndex(at: number): number;
				public static obtainStyledAttributes(context: android.content.Context, set: android.util.AttributeSet, attrs: number[]): androidx.appcompat.widget.TintTypedArray;
				public getTextArray(index: number): string[];
				public length(): number;
				public getBoolean(index: number, defValue: boolean): boolean;
				public getChangingConfigurations(): number;
				public hasValue(index: number): boolean;
				public getString(index: number): string;
				public getInteger(index: number, defValue: number): number;
				public getLayoutDimension(index: number, defValue: number): number;
				public getResources(): android.content.res.Resources;
				public getFloat(index: number, defValue: number): number;
				public peekValue(index: number): android.util.TypedValue;
				public getDimensionPixelSize(index: number, defValue: number): number;
				public getColor(index: number, defValue: number): number;
				public getFraction(index: number, base: number, pbase: number, defValue: number): number;
				public getText(index: number): string;
				public getLayoutDimension(index: number, name: string): number;
				public getValue(index: number, outValue: android.util.TypedValue): boolean;
				public getInt(index: number, defValue: number): number;
				public getResourceId(index: number, defValue: number): number;
			}
			export module TintTypedArray {
				export class Api21Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.TintTypedArray.Api21Impl>;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class Toolbar extends android.view.ViewGroup implements androidx.core.view.MenuHost {
				public static class: java.lang.Class<androidx.appcompat.widget.Toolbar>;
				public addView(child: android.view.View, width: number, height: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public getNavigationContentDescription(): string;
				public setTitleTextColor(color: android.content.res.ColorStateList): void;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				public generateLayoutParams(attrs: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
				public constructor(context: android.content.Context);
				public getOverflowIcon(): android.graphics.drawable.Drawable;
				public getTitleMarginStart(): number;
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public hideOverflowMenu(): boolean;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public setTitleMarginTop(margin: number): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public setMenu(menu: androidx.appcompat.view.menu.MenuBuilder, outerPresenter: androidx.appcompat.widget.ActionMenuPresenter): void;
				public getCurrentContentInsetEnd(): number;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public getMenu(): android.view.Menu;
				public setTitleMarginEnd(margin: number): void;
				public setCollapseContentDescription(resId: number): void;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				public addMenuProvider(provider: androidx.core.view.MenuProvider, owner: androidx.lifecycle.LifecycleOwner): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public addView(child: android.view.View, index: number): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public generateDefaultLayoutParams(): androidx.appcompat.widget.Toolbar.LayoutParams;
				public isTitleTruncated(): boolean;
				public setNavigationIcon(icon: android.graphics.drawable.Drawable): void;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public setNavigationContentDescription(description: string): void;
				public onStopNestedScroll(child: android.view.View): void;
				public getTitle(): string;
				public setSubtitle(subtitle: string): void;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public isOverflowMenuShowPending(): boolean;
				public recomputeViewAttributes(param0: android.view.View): void;
				public generateLayoutParams(p: android.view.ViewGroup.LayoutParams): androidx.appcompat.widget.Toolbar.LayoutParams;
				public getWrapper(): androidx.appcompat.widget.DecorToolbar;
				public invalidateMenu(): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public showOverflowMenu(): boolean;
				public setLogo(drawable: android.graphics.drawable.Drawable): void;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public getTitleMarginBottom(): number;
				public sendAccessibilityEvent(eventType: number): void;
				public setTitleMarginBottom(margin: number): void;
				public requestFitSystemWindows(): void;
				public getContentInsetStartWithNavigation(): number;
				public getContentInsetEndWithActions(): number;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public getParent(): android.view.ViewParent;
				public collapseActionView(): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public focusSearch(direction: number): android.view.View;
				public setSubtitleTextAppearance(context: android.content.Context, resId: number): void;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public getContentInsetEnd(): number;
				public setContentInsetEndWithActions(insetEndWithActions: number): void;
				public requestTransparentRegion(param0: android.view.View): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public onTouchEvent(event: android.view.MotionEvent): boolean;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public onRestoreInstanceState(state: android.os.Parcelable): void;
				public canResolveTextAlignment(): boolean;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
				public removeView(view: android.view.View): void;
				public generateLayoutParams(p: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
				public requestLayout(): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public setContentInsetsAbsolute(contentInsetLeft: number, contentInsetRight: number): void;
				public onTouchEvent(ev: android.view.MotionEvent): boolean;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public getLogoDescription(): string;
				public setBackInvokedCallbackEnabled(enabled: boolean): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public setSubtitle(resId: number): void;
				public setOnMenuItemClickListener(listener: androidx.appcompat.widget.Toolbar.OnMenuItemClickListener): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public getCurrentContentInsetLeft(): number;
				public setOverflowIcon(icon: android.graphics.drawable.Drawable): void;
				public onSaveInstanceState(): android.os.Parcelable;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public isBackInvokedCallbackEnabled(): boolean;
				public setContentInsetStartWithNavigation(insetStartWithNavigation: number): void;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public getNavigationIcon(): android.graphics.drawable.Drawable;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public getTextDirection(): number;
				public addMenuProvider(param0: androidx.core.view.MenuProvider): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public setLogoDescription(description: string): void;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public setMenuCallbacks(pcb: androidx.appcompat.view.menu.MenuPresenter.Callback, mcb: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
				public getCollapseContentDescription(): string;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public getSubtitle(): string;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public setTitleTextAppearance(context: android.content.Context, resId: number): void;
				public onHoverEvent(event: android.view.MotionEvent): boolean;
				public getTitleMarginTop(): number;
				public addMenuProvider(param0: androidx.core.view.MenuProvider, param1: androidx.lifecycle.LifecycleOwner): void;
				public isLayoutDirectionResolved(): boolean;
				public getContentInsetRight(): number;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public onRtlPropertiesChanged(layoutDirection: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public showContextMenuForChild(param0: android.view.View): boolean;
				public setTitleMargin(start: number, top: number, end: number, bottom: number): void;
				public addMenuProvider(param0: androidx.core.view.MenuProvider, param1: androidx.lifecycle.LifecycleOwner, param2: androidx.lifecycle.Lifecycle.State): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public getTitleMarginEnd(): number;
				public childDrawableStateChanged(child: android.view.View): void;
				public setContentInsetsRelative(contentInsetStart: number, contentInsetEnd: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public setLogo(resId: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public addView(child: android.view.View): void;
				public getCurrentContentInsetStart(): number;
				public dismissPopupMenus(): void;
				public bringChildToFront(param0: android.view.View): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public setTitleTextColor(color: number): void;
				public setPopupTheme(resId: number): void;
				public setTitle(resId: number): void;
				public canShowOverflowMenu(): boolean;
				public hasExpandedActionView(): boolean;
				public isOverflowMenuShowing(): boolean;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public requestTransparentRegion(child: android.view.View): void;
				public generateLayoutParams(attrs: android.util.AttributeSet): androidx.appcompat.widget.Toolbar.LayoutParams;
				public getContentInsetStart(): number;
				public onAttachedToWindow(): void;
				public clearChildFocus(param0: android.view.View): void;
				public getContentInsetLeft(): number;
				public onHoverEvent(ev: android.view.MotionEvent): boolean;
				public setCollapseContentDescription(description: string): void;
				public setLogoDescription(resId: number): void;
				public setCollapsible(collapsible: boolean): void;
				public checkLayoutParams(p: android.view.ViewGroup.LayoutParams): boolean;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setSubtitleTextColor(color: number): void;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getTextAlignment(): number;
				public setCollapseIcon(icon: android.graphics.drawable.Drawable): void;
				public addMenuProvider(provider: androidx.core.view.MenuProvider): void;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public removeMenuProvider(param0: androidx.core.view.MenuProvider): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public removeMenuProvider(provider: androidx.core.view.MenuProvider): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public setTitleMarginStart(margin: number): void;
				public onDetachedFromWindow(): void;
				public setSubtitleTextColor(color: android.content.res.ColorStateList): void;
				public setNavigationContentDescription(resId: number): void;
				public getCurrentContentInsetRight(): number;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public addMenuProvider(provider: androidx.core.view.MenuProvider, owner: androidx.lifecycle.LifecycleOwner, state: androidx.lifecycle.Lifecycle.State): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public setNavigationIcon(resId: number): void;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public setCollapseIcon(resId: number): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public setTitle(title: string): void;
				public inflateMenu(resId: number): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public onStopNestedScroll(param0: android.view.View): void;
				public setNavigationOnClickListener(listener: android.view.View.OnClickListener): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public getLogo(): android.graphics.drawable.Drawable;
				public getCollapseIcon(): android.graphics.drawable.Drawable;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getPopupTheme(): number;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
			export module Toolbar {
				export class Api33Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.Toolbar.Api33Impl>;
				}
				export class ExpandedActionViewMenuPresenter extends java.lang.Object implements androidx.appcompat.view.menu.MenuPresenter {
					public static class: java.lang.Class<androidx.appcompat.widget.Toolbar.ExpandedActionViewMenuPresenter>;
					public collapseItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public getId(): number;
					public getMenuView(param0: android.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public updateMenuView(param0: boolean): void;
					public onSubMenuSelected(param0: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public onSubMenuSelected(subMenu: androidx.appcompat.view.menu.SubMenuBuilder): boolean;
					public setCallback(cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public updateMenuView(cleared: boolean): void;
					public expandItemActionView(menu: androidx.appcompat.view.menu.MenuBuilder, item: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onCloseMenu(menu: androidx.appcompat.view.menu.MenuBuilder, allMenusAreClosing: boolean): void;
					public initForMenu(context: android.content.Context, menu: androidx.appcompat.view.menu.MenuBuilder): void;
					public expandItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public onRestoreInstanceState(state: android.os.Parcelable): void;
					public collapseItemActionView(param0: androidx.appcompat.view.menu.MenuBuilder, param1: androidx.appcompat.view.menu.MenuItemImpl): boolean;
					public initForMenu(param0: android.content.Context, param1: androidx.appcompat.view.menu.MenuBuilder): void;
					public setCallback(param0: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
					public getMenuView(root: android.view.ViewGroup): androidx.appcompat.view.menu.MenuView;
					public onCloseMenu(param0: androidx.appcompat.view.menu.MenuBuilder, param1: boolean): void;
					public flagActionItems(): boolean;
					public onSaveInstanceState(): android.os.Parcelable;
				}
				export class LayoutParams extends androidx.appcompat.app.ActionBar.LayoutParams {
					public static class: java.lang.Class<androidx.appcompat.widget.Toolbar.LayoutParams>;
					public constructor(source: android.view.ViewGroup.MarginLayoutParams);
					public constructor(c: android.content.Context, attrs: android.util.AttributeSet);
					public constructor(width: number, height: number, gravity: number);
					public constructor(gravity: number);
					public constructor(source: androidx.appcompat.app.ActionBar.LayoutParams);
					public constructor(source: android.view.ViewGroup.LayoutParams);
					public constructor(source: androidx.appcompat.widget.Toolbar.LayoutParams);
					public constructor(width: number, height: number);
				}
				export class OnMenuItemClickListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.Toolbar.OnMenuItemClickListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.Toolbar$OnMenuItemClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMenuItemClick(param0: android.view.MenuItem): boolean;
					});
					public constructor();
					public onMenuItemClick(param0: android.view.MenuItem): boolean;
				}
				export class SavedState extends androidx.customview.view.AbsSavedState {
					public static class: java.lang.Class<androidx.appcompat.widget.Toolbar.SavedState>;
					public static CREATOR: android.os.Parcelable.Creator<androidx.appcompat.widget.Toolbar.SavedState>;
					public constructor(param0: android.os.Parcel);
					public constructor(superState: android.os.Parcelable);
					public constructor(param0: android.os.Parcelable);
					public describeContents(): number;
					public constructor(source: android.os.Parcel);
					public writeToParcel(out: android.os.Parcel, flags: number): void;
					public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
					public constructor(source: android.os.Parcel, loader: java.lang.ClassLoader);
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ToolbarWidgetWrapper extends java.lang.Object implements androidx.appcompat.widget.DecorToolbar {
				public static class: java.lang.Class<androidx.appcompat.widget.ToolbarWidgetWrapper>;
				public setHomeButtonEnabled(enable: boolean): void;
				public setMenuCallbacks(actionMenuPresenterCallback: androidx.appcompat.view.menu.MenuPresenter.Callback, menuBuilderCallback: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
				public animateToVisibility(visibility: number): void;
				public setMenu(param0: android.view.Menu, param1: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public getHeight(): number;
				public setDropdownSelectedPosition(position: number): void;
				public hasLogo(): boolean;
				public showOverflowMenu(): boolean;
				public setDefaultNavigationContentDescription(defaultNavigationContentDescription: number): void;
				public restoreHierarchyState(toolbarStates: android.util.SparseArray<android.os.Parcelable>): void;
				public setupAnimatorToVisibility(visibility: number, duration: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public setDropdownParams(param0: android.widget.SpinnerAdapter, param1: android.widget.AdapterView.OnItemSelectedListener): void;
				public setIcon(resId: number): void;
				public setVisibility(visible: number): void;
				public setWindowCallback(param0: android.view.Window.Callback): void;
				public setIcon(param0: number): void;
				public setTitle(param0: string): void;
				public setCustomView(view: android.view.View): void;
				public setDefaultNavigationContentDescription(param0: number): void;
				public setDropdownParams(adapter: android.widget.SpinnerAdapter, listener: android.widget.AdapterView.OnItemSelectedListener): void;
				public setCollapsible(collapsible: boolean): void;
				public getDropdownSelectedPosition(): number;
				public getViewGroup(): android.view.ViewGroup;
				public getCustomView(): android.view.View;
				public setWindowTitle(param0: string): void;
				public setIcon(d: android.graphics.drawable.Drawable): void;
				public setDisplayOptions(param0: number): void;
				public setDefaultNavigationIcon(param0: android.graphics.drawable.Drawable): void;
				public collapseActionView(): void;
				public setWindowCallback(cb: android.view.Window.Callback): void;
				public setNavigationIcon(param0: android.graphics.drawable.Drawable): void;
				public setupAnimatorToVisibility(param0: number, param1: number): androidx.core.view.ViewPropertyAnimatorCompat;
				public setNavigationContentDescription(param0: number): void;
				public setVisibility(param0: number): void;
				public hideOverflowMenu(): boolean;
				public setEmbeddedTabView(param0: androidx.appcompat.widget.ScrollingTabContainerView): void;
				public setSubtitle(param0: string): void;
				public initIndeterminateProgress(): void;
				public hasEmbeddedTabs(): boolean;
				public getVisibility(): number;
				public setNavigationContentDescription(param0: string): void;
				public setLogo(param0: number): void;
				public getSubtitle(): string;
				public setMenuPrepared(): void;
				public setHomeButtonEnabled(param0: boolean): void;
				public getContext(): android.content.Context;
				public setNavigationContentDescription(resId: number): void;
				public setLogo(param0: android.graphics.drawable.Drawable): void;
				public setEmbeddedTabView(tabView: androidx.appcompat.widget.ScrollingTabContainerView): void;
				public initProgress(): void;
				public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
				public setLogo(d: android.graphics.drawable.Drawable): void;
				public restoreHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
				public setDisplayOptions(newOpts: number): void;
				public setCollapsible(param0: boolean): void;
				public getMenu(): android.view.Menu;
				public saveHierarchyState(toolbarStates: android.util.SparseArray<android.os.Parcelable>): void;
				public getNavigationMode(): number;
				public animateToVisibility(param0: number): void;
				public setBackgroundDrawable(d: android.graphics.drawable.Drawable): void;
				public getDisplayOptions(): number;
				public setDefaultNavigationIcon(defaultNavigationIcon: android.graphics.drawable.Drawable): void;
				public setIcon(param0: android.graphics.drawable.Drawable): void;
				public setNavigationIcon(resId: number): void;
				public setLogo(resId: number): void;
				public setTitle(title: string): void;
				public dismissPopupMenus(): void;
				public setCustomView(param0: android.view.View): void;
				public isTitleTruncated(): boolean;
				public setNavigationIcon(icon: android.graphics.drawable.Drawable): void;
				public getDropdownItemCount(): number;
				public setNavigationIcon(param0: number): void;
				public setNavigationContentDescription(description: string): void;
				public canShowOverflowMenu(): boolean;
				public constructor(toolbar: androidx.appcompat.widget.Toolbar, style: boolean);
				public hasExpandedActionView(): boolean;
				public getTitle(): string;
				public hasIcon(): boolean;
				public setSubtitle(subtitle: string): void;
				public isOverflowMenuShowing(): boolean;
				public constructor(toolbar: androidx.appcompat.widget.Toolbar, style: boolean, defaultNavigationContentDescription: number, defaultNavigationIcon: number);
				public saveHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
				public setMenuCallbacks(param0: androidx.appcompat.view.menu.MenuPresenter.Callback, param1: androidx.appcompat.view.menu.MenuBuilder.Callback): void;
				public setNavigationMode(param0: number): void;
				public setDropdownSelectedPosition(param0: number): void;
				public isOverflowMenuShowPending(): boolean;
				public setNavigationMode(mode: number): void;
				public setMenu(menu: android.view.Menu, cb: androidx.appcompat.view.menu.MenuPresenter.Callback): void;
				public setWindowTitle(title: string): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TooltipCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.TooltipCompat>;
				public static setTooltipText(view: android.view.View, tooltipText: string): void;
			}
			export module TooltipCompat {
				export class Api26Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.TooltipCompat.Api26Impl>;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TooltipCompatHandler extends java.lang.Object implements android.view.View.OnLongClickListener, android.view.View.OnHoverListener, android.view.View.OnAttachStateChangeListener {
				public static class: java.lang.Class<androidx.appcompat.widget.TooltipCompatHandler>;
				public onHover(v: android.view.View, event: android.view.MotionEvent): boolean;
				public onLongClick(v: android.view.View): boolean;
				public onViewDetachedFromWindow(param0: android.view.View): void;
				public onViewDetachedFromWindow(v: android.view.View): void;
				public onViewAttachedToWindow(param0: android.view.View): void;
				public onViewAttachedToWindow(v: android.view.View): void;
				public static setTooltipText(view: android.view.View, tooltipText: string): void;
				public onLongClick(param0: android.view.View): boolean;
				public onHover(param0: android.view.View, param1: android.view.MotionEvent): boolean;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TooltipPopup extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.TooltipPopup>;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ViewStubCompat extends android.view.View {
				public static class: java.lang.Class<androidx.appcompat.widget.ViewStubCompat>;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public draw(canvas: android.graphics.Canvas): void;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public setOnInflateListener(inflateListener: androidx.appcompat.widget.ViewStubCompat.OnInflateListener): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public dispatchDraw(canvas: android.graphics.Canvas): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public inflate(): android.view.View;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyle: number);
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public constructor(context: android.content.Context);
				public getInflatedId(): number;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public static inflate(context: android.content.Context, resource: number, root: android.view.ViewGroup): android.view.View;
				public setVisibility(visibility: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public setLayoutInflater(inflater: android.view.LayoutInflater): void;
				public setInflatedId(inflatedId: number): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public getLayoutResource(): number;
				public setLayoutResource(layoutResource: number): void;
				public getLayoutInflater(): android.view.LayoutInflater;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
			}
			export module ViewStubCompat {
				export class OnInflateListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ViewStubCompat.OnInflateListener>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ViewStubCompat$OnInflateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onInflate(param0: androidx.appcompat.widget.ViewStubCompat, param1: android.view.View): void;
					});
					public constructor();
					public onInflate(param0: androidx.appcompat.widget.ViewStubCompat, param1: android.view.View): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ViewUtils extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.ViewUtils>;
				public static makeOptionalFitsSystemWindows(view: android.view.View): void;
				public static isLayoutRtl(view: android.view.View): boolean;
				public static computeFitSystemWindows(view: android.view.View, inoutInsets: android.graphics.Rect, outLocalInsets: android.graphics.Rect): void;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class WithHint extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.WithHint>;
				/**
				 * Constructs a new instance of the androidx.appcompat.widget.WithHint interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getHint(): string;
				});
				public constructor();
				public getHint(): string;
			}
		}
	}
}

//Generics information:

