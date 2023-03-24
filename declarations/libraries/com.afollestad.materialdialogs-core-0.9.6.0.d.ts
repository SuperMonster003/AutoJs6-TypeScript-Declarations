declare module com {
	export module afollestad {
		export module materialdialogs {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.afollestad.materialdialogs.BuildConfig>;
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
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export class DefaultRvAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.afollestad.materialdialogs.DefaultRvAdapter.DefaultVH> {
				public static class: java.lang.Class<com.afollestad.materialdialogs.DefaultRvAdapter>;
				public onBindViewHolder(param0: any, param1: number): void;
				public onBindViewHolder(holder: com.afollestad.materialdialogs.DefaultRvAdapter.DefaultVH, index: number): void;
				public onCreateViewHolder(param0: android.view.ViewGroup, param1: number): any;
				public onCreateViewHolder(parent: android.view.ViewGroup, viewType: number): com.afollestad.materialdialogs.DefaultRvAdapter.DefaultVH;
				public onBindViewHolder(param0: any, param1: number, param2: java.util.List<any>): void;
				public getItemCount(): number;
			}
			export module DefaultRvAdapter {
				export class DefaultVH extends androidx.recyclerview.widget.RecyclerView.ViewHolder implements android.view.View.OnClickListener, android.view.View.OnLongClickListener {
					public static class: java.lang.Class<com.afollestad.materialdialogs.DefaultRvAdapter.DefaultVH>;
					public onLongClick(param0: android.view.View): boolean;
					public onClick(view: android.view.View): void;
					public onLongClick(view: android.view.View): boolean;
					public onClick(param0: android.view.View): void;
				}
				export class InternalListCallback extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.DefaultRvAdapter.InternalListCallback>;
					/**
					 * Constructs a new instance of the com.afollestad.materialdialogs.DefaultRvAdapter$InternalListCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onItemSelected(param0: com.afollestad.materialdialogs.MaterialDialog, param1: android.view.View, param2: number, param3: string, param4: boolean): boolean;
					});
					public constructor();
					public onItemSelected(param0: com.afollestad.materialdialogs.MaterialDialog, param1: android.view.View, param2: number, param3: string, param4: boolean): boolean;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export class DialogAction {
				public static class: java.lang.Class<com.afollestad.materialdialogs.DialogAction>;
				public static POSITIVE: com.afollestad.materialdialogs.DialogAction;
				public static NEUTRAL: com.afollestad.materialdialogs.DialogAction;
				public static NEGATIVE: com.afollestad.materialdialogs.DialogAction;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): com.afollestad.materialdialogs.DialogAction;
				public static values(): com.afollestad.materialdialogs.DialogAction[];
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export class DialogBase extends android.app.Dialog implements android.content.DialogInterface.OnShowListener {
				public static class: java.lang.Class<com.afollestad.materialdialogs.DialogBase>;
				public view: com.afollestad.materialdialogs.internal.MDRootLayout;
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
				public dispatchGenericMotionEvent(ev: android.view.MotionEvent): boolean;
				public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
				public setContentView(layoutResID: number): void;
				public setContentView(view: android.view.View): void;
				public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
				public findViewById(id: number): android.view.View;
				public onWindowAttributesChanged(params: android.view.WindowManager.LayoutParams): void;
				public onActionModeFinished(mode: android.view.ActionMode): void;
				public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
				public onShow(dialog: android.content.DialogInterface): void;
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
				/** @deprecated */
				public setContentView(view: android.view.View): void;
				public dismiss(): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
				public onCreatePanelView(featureId: number): android.view.View;
				public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
				/** @deprecated */
				public setContentView(layoutResID: number): void;
				public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public dispatchKeyEvent(event: android.view.KeyEvent): boolean;
				public onCreatePanelView(param0: number): android.view.View;
				public onWindowStartingActionMode(callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
				public setOnShowListener(listener: android.content.DialogInterface.OnShowListener): void;
				/** @deprecated */
				public setContentView(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public onActionModeStarted(param0: android.view.ActionMode): void;
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
				public onActionModeFinished(param0: android.view.ActionMode): void;
				public setContentView(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public onSearchRequested(searchEvent: any): boolean;
				public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
				public onShow(param0: android.content.DialogInterface): void;
				public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
				public onWindowFocusChanged(param0: boolean): void;
				public dispatchTrackballEvent(ev: android.view.MotionEvent): boolean;
				public onAttachedToWindow(): void;
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export class DialogInit extends java.lang.Object {
				public static class: java.lang.Class<com.afollestad.materialdialogs.DialogInit>;
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export class GravityEnum {
				public static class: java.lang.Class<com.afollestad.materialdialogs.GravityEnum>;
				public static START: com.afollestad.materialdialogs.GravityEnum;
				public static CENTER: com.afollestad.materialdialogs.GravityEnum;
				public static END: com.afollestad.materialdialogs.GravityEnum;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public getTextAlignment(): number;
				public static values(): com.afollestad.materialdialogs.GravityEnum[];
				public static valueOf(name: string): com.afollestad.materialdialogs.GravityEnum;
				public getGravityInt(): number;
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export class MaterialDialog extends com.afollestad.materialdialogs.DialogBase implements android.view.View.OnClickListener, com.afollestad.materialdialogs.DefaultRvAdapter.InternalListCallback {
				public static class: java.lang.Class<com.afollestad.materialdialogs.MaterialDialog>;
				public builder: com.afollestad.materialdialogs.MaterialDialog.Builder;
				public icon: android.widget.ImageView;
				public title: android.widget.TextView;
				public content: android.widget.TextView;
				public setActionButton(which: com.afollestad.materialdialogs.DialogAction, titleRes: number): void;
				public notifyItemChanged(index: number): void;
				public onActionModeStarted(mode: android.view.ActionMode): void;
				public getProgressBar(): android.widget.ProgressBar;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onPanelClosed(featureId: number, menu: android.view.Menu): void;
				public onMenuItemSelected(featureId: number, item: android.view.MenuItem): boolean;
				public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
				public dispatchKeyShortcutEvent(event: android.view.KeyEvent): boolean;
				public show(): void;
				public setTitle(newTitleRes: number, ...formatArgs: any[]): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: android.view.Menu, deviceId: number): void;
				public setTypeface(target: android.widget.TextView, t: android.graphics.Typeface): void;
				public getCustomView(): android.view.View;
				public incrementProgress(by: number): void;
				public setProgressPercentFormat(format: java.text.NumberFormat): void;
				public setProgress(progress: number): void;
				public setIcon(d: android.graphics.drawable.Drawable): void;
				public dispatchGenericMotionEvent(ev: android.view.MotionEvent): boolean;
				public onItemSelected(dialog: com.afollestad.materialdialogs.MaterialDialog, view: android.view.View, position: number, text: string, longPress: boolean): boolean;
				public constructor(context: android.content.Context, cancelable: boolean, cancelListener: android.content.DialogInterface.OnCancelListener);
				public constructor(context: android.content.Context);
				public onWindowAttributesChanged(params: android.view.WindowManager.LayoutParams): void;
				public onActionModeFinished(mode: android.view.ActionMode): void;
				public getRecyclerView(): androidx.recyclerview.widget.RecyclerView;
				public constructor(context: android.content.Context, themeResId: number);
				public onShow(dialog: android.content.DialogInterface): void;
				public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
				public onMenuOpened(featureId: number, menu: android.view.Menu): boolean;
				public selectAllIndices(): void;
				public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
				public setItems(...items: string[]): void;
				public setPromptCheckBoxChecked(checked: boolean): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public dispatchTouchEvent(ev: android.view.MotionEvent): boolean;
				public setContent(newContentRes: number, ...formatArgs: any[]): void;
				public getIconView(): android.widget.ImageView;
				public setTitle(newTitleRes: number): void;
				public dismiss(): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public setContent(newContentRes: number): void;
				public getTitleView(): android.widget.TextView;
				public onCreatePanelView(param0: number): android.view.View;
				public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
				public selectAllIndices(sendCallback: boolean): void;
				public setTitle(titleId: number): void;
				public getItems(): java.util.ArrayList<string>;
				public onActionModeFinished(param0: android.view.ActionMode): void;
				public isPromptCheckBoxChecked(): boolean;
				public setSelectedIndex(index: number): void;
				public setProgressNumberFormat(format: string): void;
				public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
				public isCancelled(): boolean;
				public dispatchTrackballEvent(ev: android.view.MotionEvent): boolean;
				public onAttachedToWindow(): void;
				public hasActionButtons(): boolean;
				public getContentView(): android.widget.TextView;
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public setIconAttribute(attrId: number): void;
				public setIcon(resId: number): void;
				public setSelectedIndices(indices: java.lang.Integer[]): void;
				public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
				public onSearchRequested(param0: any): boolean;
				public onWindowFocusChanged(hasFocus: boolean): void;
				public notifyItemsChanged(): void;
				public onPanelClosed(param0: number, param1: android.view.Menu): void;
				public cancel(): void;
				public constructor(builder: com.afollestad.materialdialogs.MaterialDialog.Builder);
				public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
				public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
				public getSelectedIndex(): number;
				public numberOfActionButtons(): number;
				public setTitle(newTitle: string): void;
				public setContent(newContent: string): void;
				public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public onContentChanged(): void;
				public isIndeterminateProgress(): boolean;
				public onDetachedFromWindow(): void;
				public onPreparePanel(featureId: number, view: android.view.View, menu: android.view.Menu): boolean;
				public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
				public onSearchRequested(): boolean;
				public onCreatePanelMenu(featureId: number, menu: android.view.Menu): boolean;
				public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
				public getMaxProgress(): number;
				public clearSelectedIndices(): void;
				public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
				public onClick(v: android.view.View): void;
				public onCreatePanelView(featureId: number): android.view.View;
				public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
				public getTag(): any;
				public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public getView(): android.view.View;
				public setTitle(title: string): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public dispatchKeyEvent(event: android.view.KeyEvent): boolean;
				public onWindowStartingActionMode(callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onItemSelected(param0: com.afollestad.materialdialogs.MaterialDialog, param1: android.view.View, param2: number, param3: string, param4: boolean): boolean;
				public setActionButton(which: com.afollestad.materialdialogs.DialogAction, title: string): void;
				public onClick(param0: android.view.View): void;
				public onActionModeStarted(param0: android.view.ActionMode): void;
				public getCurrentProgress(): number;
				public getSelectedIndices(): java.lang.Integer[];
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
				public setMaxProgress(max: number): void;
				public getBuilder(): com.afollestad.materialdialogs.MaterialDialog.Builder;
				public clearSelectedIndices(sendCallback: boolean): void;
				public getActionButton(which: com.afollestad.materialdialogs.DialogAction): com.afollestad.materialdialogs.internal.MDButton;
				public notifyItemInserted(index: number): void;
				public onSearchRequested(searchEvent: any): boolean;
				public onShow(param0: android.content.DialogInterface): void;
				public getInputEditText(): android.widget.EditText;
				public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
				public onWindowFocusChanged(param0: boolean): void;
			}
			export module MaterialDialog {
				export class Builder extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.MaterialDialog.Builder>;
					public context: android.content.Context;
					public onPositiveCallback: com.afollestad.materialdialogs.MaterialDialog.SingleButtonCallback;
					public onNegativeCallback: com.afollestad.materialdialogs.MaterialDialog.SingleButtonCallback;
					public onNeutralCallback: com.afollestad.materialdialogs.MaterialDialog.SingleButtonCallback;
					public onAnyCallback: com.afollestad.materialdialogs.MaterialDialog.SingleButtonCallback;
					public listCallback: com.afollestad.materialdialogs.MaterialDialog.ListCallback;
					public listLongCallback: com.afollestad.materialdialogs.MaterialDialog.ListLongCallback;
					public listCallbackSingleChoice: com.afollestad.materialdialogs.MaterialDialog.ListCallbackSingleChoice;
					public listCallbackMultiChoice: com.afollestad.materialdialogs.MaterialDialog.ListCallbackMultiChoice;
					public contentLineSpacingMultiplier: number;
					public selectedIndex: number;
					public selectedIndices: java.lang.Integer[];
					public disabledIndices: java.lang.Integer[];
					public regularFont: android.graphics.Typeface;
					public mediumFont: android.graphics.Typeface;
					public layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager;
					public wrapCustomViewInScroll: boolean;
					public itemColor: number;
					public indeterminateProgress: boolean;
					public showMinMax: boolean;
					public progressMax: number;
					public inputPrefill: string;
					public inputHint: string;
					public inputCallback: com.afollestad.materialdialogs.MaterialDialog.InputCallback;
					public inputAllowEmpty: boolean;
					public inputMinLength: number;
					public inputMaxLength: number;
					public inputRangeErrorColor: number;
					public itemIds: number[];
					public checkBoxPromptInitiallyChecked: boolean;
					public checkBoxPromptListener: android.widget.CompoundButton.OnCheckedChangeListener;
					public indeterminateIsHorizontalProgress: boolean;
					public titleColorSet: boolean;
					public contentColorSet: boolean;
					public itemColorSet: boolean;
					public positiveColorSet: boolean;
					public neutralColorSet: boolean;
					public negativeColorSet: boolean;
					public widgetColorSet: boolean;
					public dividerColorSet: boolean;
					public btnSelectorPositive: number;
					public btnSelectorNeutral: number;
					public btnSelectorNegative: number;
					public keyListener(listener: android.content.DialogInterface.OnKeyListener): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public content(contentRes: number, ...formatArgs: any[]): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public alwaysCallSingleChoiceCallback(): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public negativeColorAttr(colorAttr: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public autoDismiss(dismiss: boolean): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public limitIconToDefaultSize(): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public showListener(listener: android.content.DialogInterface.OnShowListener): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public inputRangeRes(minLength: number, maxLength: number, errorColor: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public iconAttr(iconAttr: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public itemsColor(color: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public iconRes(icon: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public cancelable(cancelable: boolean): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public items(...items: string[]): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public contentLineSpacing(multiplier: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public linkColorAttr(colorAttr: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public inputRange(minLength: number, maxLength: number, errorColor: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public positiveFocus(isFocusedDefault: boolean): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public itemsCallbackMultiChoice(selectedIndices: java.lang.Integer[], callback: com.afollestad.materialdialogs.MaterialDialog.ListCallbackMultiChoice): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public onAny(callback: com.afollestad.materialdialogs.MaterialDialog.SingleButtonCallback): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public itemsDisabledIndices(...disabledIndices: java.lang.Integer[]): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public positiveColor(colorStateList: android.content.res.ColorStateList): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public itemsColorRes(colorRes: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public negativeText(negativeRes: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public onNeutral(callback: com.afollestad.materialdialogs.MaterialDialog.SingleButtonCallback): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public title(titleRes: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public titleColorAttr(colorAttr: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public btnSelector(selectorRes: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public itemsGravity(gravity: com.afollestad.materialdialogs.GravityEnum): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public positiveText(message: string): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public positiveColor(color: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public progressIndeterminateStyle(horizontal: boolean): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public maxIconSize(maxIconSize: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public linkColorRes(colorRes: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public input(hint: number, prefill: number, callback: com.afollestad.materialdialogs.MaterialDialog.InputCallback): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public negativeColor(colorStateList: android.content.res.ColorStateList): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public neutralText(neutralRes: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public content(contentRes: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public itemsIds(idsArray: number[]): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public buttonRippleColorRes(colorRes: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public getContext(): android.content.Context;
					public backgroundColorRes(colorRes: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public listSelector(selectorRes: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public negativeColorRes(colorRes: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public title(title: string): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public itemsColorAttr(colorAttr: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public alwaysCallMultiChoiceCallback(): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public widgetColorAttr(colorAttr: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public tag(tag: any): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public btnSelectorStacked(selectorRes: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public negativeColor(color: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public contentColor(color: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public progress(indeterminate: boolean, max: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public getRegularFont(): android.graphics.Typeface;
					public content(contentRes: number, html: boolean): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public linkColor(colorStateList: android.content.res.ColorStateList): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public adapter(adapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>, layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public getItemColor(): number;
					public itemsLongCallback(callback: com.afollestad.materialdialogs.MaterialDialog.ListLongCallback): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public input(hint: number, prefill: number, allowEmptyInput: boolean, callback: com.afollestad.materialdialogs.MaterialDialog.InputCallback): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public neutralColorRes(colorRes: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public dividerColorAttr(colorAttr: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public buttonRippleColorAttr(colorAttr: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public neutralColor(colorStateList: android.content.res.ColorStateList): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public input(hint: string, prefill: string, allowEmptyInput: boolean, callback: com.afollestad.materialdialogs.MaterialDialog.InputCallback): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public itemsIds(idsArrayRes: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public dismissListener(listener: android.content.DialogInterface.OnDismissListener): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public typeface(medium: android.graphics.Typeface, regular: android.graphics.Typeface): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public customView(view: android.view.View, wrapInScrollView: boolean): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public canceledOnTouchOutside(canceledOnTouchOutside: boolean): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public buttonRippleColor(color: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public itemsCallback(callback: com.afollestad.materialdialogs.MaterialDialog.ListCallback): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public choiceWidgetColor(colorStateList: android.content.res.ColorStateList): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public items(itemsRes: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public linkColor(color: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public progress(indeterminate: boolean, max: number, showMinMax: boolean): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public progressPercentFormat(format: java.text.NumberFormat): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public stackingBehavior(behavior: com.afollestad.materialdialogs.StackingBehavior): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public constructor(context: android.content.Context);
					public titleGravity(gravity: com.afollestad.materialdialogs.GravityEnum): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public negativeText(message: string): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public icon(icon: android.graphics.drawable.Drawable): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public build(): com.afollestad.materialdialogs.MaterialDialog;
					public onNegative(callback: com.afollestad.materialdialogs.MaterialDialog.SingleButtonCallback): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public checkBoxPromptRes(prompt: number, initiallyChecked: boolean, checkListener: android.widget.CompoundButton.OnCheckedChangeListener): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public negativeFocus(isFocusedDefault: boolean): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public neutralColorAttr(colorAttr: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public show(): com.afollestad.materialdialogs.MaterialDialog;
					public checkBoxPrompt(prompt: string, initiallyChecked: boolean, checkListener: android.widget.CompoundButton.OnCheckedChangeListener): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public widgetColorRes(colorRes: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public input(hint: string, prefill: string, callback: com.afollestad.materialdialogs.MaterialDialog.InputCallback): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public titleColor(color: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public neutralFocus(isFocusedDefault: boolean): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public backgroundColor(color: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public buttonsGravity(gravity: com.afollestad.materialdialogs.GravityEnum): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public btnStackedGravity(gravity: com.afollestad.materialdialogs.GravityEnum): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public itemsCallbackSingleChoice(selectedIndex: number, callback: com.afollestad.materialdialogs.MaterialDialog.ListCallbackSingleChoice): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public btnSelector(selectorRes: number, which: com.afollestad.materialdialogs.DialogAction): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public positiveText(positiveRes: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public positiveColorRes(colorRes: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public inputType(type: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public positiveColorAttr(colorAttr: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public backgroundColorAttr(colorAttr: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public titleColorRes(colorRes: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public widgetColor(color: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public content(content: string): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public items(collection: java.util.Collection<any>): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public customView(layoutRes: number, wrapInScrollView: boolean): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public callback(callback: com.afollestad.materialdialogs.MaterialDialog.ButtonCallback): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public contentGravity(gravity: com.afollestad.materialdialogs.GravityEnum): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public dividerColor(color: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public alwaysCallInputCallback(): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public neutralText(message: string): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public contentColorRes(colorRes: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public contentColorAttr(colorAttr: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public maxIconSizeRes(maxIconSizeRes: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public inputRange(minLength: number, maxLength: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public theme(theme: com.afollestad.materialdialogs.Theme): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public onPositive(callback: com.afollestad.materialdialogs.MaterialDialog.SingleButtonCallback): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public cancelListener(listener: android.content.DialogInterface.OnCancelListener): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public progressNumberFormat(format: string): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public dividerColorRes(colorRes: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public neutralColor(color: number): com.afollestad.materialdialogs.MaterialDialog.Builder;
					public typeface(medium: string, regular: string): com.afollestad.materialdialogs.MaterialDialog.Builder;
				}
				export abstract class ButtonCallback extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.MaterialDialog.ButtonCallback>;
					/** @deprecated */
					public onAny(dialog: com.afollestad.materialdialogs.MaterialDialog): void;
					public equals(obj: any): boolean;
					public toString(): string;
					public clone(): any;
					public constructor();
					/** @deprecated */
					public onNeutral(dialog: com.afollestad.materialdialogs.MaterialDialog): void;
					/** @deprecated */
					public onPositive(dialog: com.afollestad.materialdialogs.MaterialDialog): void;
					public finalize(): void;
					public equals(o: any): boolean;
					public hashCode(): number;
					/** @deprecated */
					public onNegative(dialog: com.afollestad.materialdialogs.MaterialDialog): void;
				}
				export class DialogException extends android.view.WindowManager.BadTokenException {
					public static class: java.lang.Class<com.afollestad.materialdialogs.MaterialDialog.DialogException>;
				}
				export class InputCallback extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.MaterialDialog.InputCallback>;
					/**
					 * Constructs a new instance of the com.afollestad.materialdialogs.MaterialDialog$InputCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onInput(param0: com.afollestad.materialdialogs.MaterialDialog, param1: string): void;
					});
					public constructor();
					public onInput(param0: com.afollestad.materialdialogs.MaterialDialog, param1: string): void;
				}
				export class ListCallback extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.MaterialDialog.ListCallback>;
					/**
					 * Constructs a new instance of the com.afollestad.materialdialogs.MaterialDialog$ListCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSelection(param0: com.afollestad.materialdialogs.MaterialDialog, param1: android.view.View, param2: number, param3: string): void;
					});
					public constructor();
					public onSelection(param0: com.afollestad.materialdialogs.MaterialDialog, param1: android.view.View, param2: number, param3: string): void;
				}
				export class ListCallbackMultiChoice extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.MaterialDialog.ListCallbackMultiChoice>;
					/**
					 * Constructs a new instance of the com.afollestad.materialdialogs.MaterialDialog$ListCallbackMultiChoice interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSelection(param0: com.afollestad.materialdialogs.MaterialDialog, param1: java.lang.Integer[], param2: string[]): boolean;
					});
					public constructor();
					public onSelection(param0: com.afollestad.materialdialogs.MaterialDialog, param1: java.lang.Integer[], param2: string[]): boolean;
				}
				export class ListCallbackSingleChoice extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.MaterialDialog.ListCallbackSingleChoice>;
					/**
					 * Constructs a new instance of the com.afollestad.materialdialogs.MaterialDialog$ListCallbackSingleChoice interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSelection(param0: com.afollestad.materialdialogs.MaterialDialog, param1: android.view.View, param2: number, param3: string): boolean;
					});
					public constructor();
					public onSelection(param0: com.afollestad.materialdialogs.MaterialDialog, param1: android.view.View, param2: number, param3: string): boolean;
				}
				export class ListLongCallback extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.MaterialDialog.ListLongCallback>;
					/**
					 * Constructs a new instance of the com.afollestad.materialdialogs.MaterialDialog$ListLongCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onLongSelection(param0: com.afollestad.materialdialogs.MaterialDialog, param1: android.view.View, param2: number, param3: string): boolean;
					});
					public constructor();
					public onLongSelection(param0: com.afollestad.materialdialogs.MaterialDialog, param1: android.view.View, param2: number, param3: string): boolean;
				}
				export class ListType {
					public static class: java.lang.Class<com.afollestad.materialdialogs.MaterialDialog.ListType>;
					public static REGULAR: com.afollestad.materialdialogs.MaterialDialog.ListType;
					public static SINGLE: com.afollestad.materialdialogs.MaterialDialog.ListType;
					public static MULTI: com.afollestad.materialdialogs.MaterialDialog.ListType;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): com.afollestad.materialdialogs.MaterialDialog.ListType[];
					public static getLayoutForType(type: com.afollestad.materialdialogs.MaterialDialog.ListType): number;
					public static valueOf(name: string): com.afollestad.materialdialogs.MaterialDialog.ListType;
				}
				export class SingleButtonCallback extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.MaterialDialog.SingleButtonCallback>;
					/**
					 * Constructs a new instance of the com.afollestad.materialdialogs.MaterialDialog$SingleButtonCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onClick(param0: com.afollestad.materialdialogs.MaterialDialog, param1: com.afollestad.materialdialogs.DialogAction): void;
					});
					public constructor();
					public onClick(param0: com.afollestad.materialdialogs.MaterialDialog, param1: com.afollestad.materialdialogs.DialogAction): void;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export class StackingBehavior {
				public static class: java.lang.Class<com.afollestad.materialdialogs.StackingBehavior>;
				public static ALWAYS: com.afollestad.materialdialogs.StackingBehavior;
				public static ADAPTIVE: com.afollestad.materialdialogs.StackingBehavior;
				public static NEVER: com.afollestad.materialdialogs.StackingBehavior;
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): com.afollestad.materialdialogs.StackingBehavior;
				public static values(): com.afollestad.materialdialogs.StackingBehavior[];
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export class Theme {
				public static class: java.lang.Class<com.afollestad.materialdialogs.Theme>;
				public static LIGHT: com.afollestad.materialdialogs.Theme;
				public static DARK: com.afollestad.materialdialogs.Theme;
				public static values(): com.afollestad.materialdialogs.Theme[];
				public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
				public static valueOf(name: string): com.afollestad.materialdialogs.Theme;
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export class AllCapsTransformationMethod extends java.lang.Object implements android.text.method.TransformationMethod {
					public static class: java.lang.Class<com.afollestad.materialdialogs.internal.AllCapsTransformationMethod>;
					public onFocusChanged(param0: android.view.View, param1: string, param2: boolean, param3: number, param4: android.graphics.Rect): void;
					public getTransformation(source: string, view: android.view.View): string;
					public getTransformation(param0: string, param1: android.view.View): string;
					public onFocusChanged(view: android.view.View, sourceText: string, focused: boolean, direction: number, previouslyFocusedRect: android.graphics.Rect): void;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export class MDAdapter extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.internal.MDAdapter>;
					/**
					 * Constructs a new instance of the com.afollestad.materialdialogs.internal.MDAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setDialog(param0: com.afollestad.materialdialogs.MaterialDialog): void;
					});
					public constructor();
					public setDialog(param0: com.afollestad.materialdialogs.MaterialDialog): void;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export class MDButton extends android.widget.TextView {
					public static class: java.lang.Class<com.afollestad.materialdialogs.internal.MDButton>;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public setStackedGravity(gravity: com.afollestad.materialdialogs.GravityEnum): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public sendAccessibilityEvent(param0: number): void;
					public setAllCapsCompat(allCaps: boolean): void;
					public onPreDraw(): boolean;
					public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
					public constructor(context: android.content.Context);
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public setDefaultSelector(d: android.graphics.drawable.Drawable): void;
					public setStackedSelector(d: android.graphics.drawable.Drawable): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export class MDRootLayout extends android.view.ViewGroup {
					public static class: java.lang.Class<com.afollestad.materialdialogs.internal.MDRootLayout>;
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
					public setMaxHeight(maxHeight: number): void;
					public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
					public recomputeViewAttributes(child: android.view.View): void;
					public addView(child: android.view.View, index: number): void;
					public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public getLayoutDirection(): number;
					public getParentForAccessibility(): android.view.ViewParent;
					public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
					public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
					public static canRecyclerViewScroll(view: androidx.recyclerview.widget.RecyclerView): boolean;
					public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
					public createContextMenu(param0: android.view.ContextMenu): void;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public childDrawableStateChanged(param0: android.view.View): void;
					public noTitleNoPadding(): void;
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public isTextAlignmentResolved(): boolean;
					public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public requestChildFocus(child: android.view.View, focused: android.view.View): void;
					public canResolveTextAlignment(): boolean;
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public setStackingBehavior(behavior: com.afollestad.materialdialogs.StackingBehavior): void;
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
					public setButtonGravity(gravity: com.afollestad.materialdialogs.GravityEnum): void;
					public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public getTextAlignment(): number;
					public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
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
					public setButtonStackedGravity(gravity: com.afollestad.materialdialogs.GravityEnum): void;
					public setDividerColor(color: number): void;
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
					public onFinishInflate(): void;
					public onStopNestedScroll(param0: android.view.View): void;
					public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public onDraw(canvas: android.graphics.Canvas): void;
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
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export class MDTintHelper extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.internal.MDTintHelper>;
					public static setTint(box: android.widget.CheckBox, colors: android.content.res.ColorStateList): void;
					public constructor();
					public static setTint(editText: android.widget.EditText, color: number): void;
					public static setTint(radioButton: android.widget.RadioButton, color: number): void;
					public static setTint(box: android.widget.CheckBox, color: number): void;
					public static setTint(radioButton: android.widget.RadioButton, colors: android.content.res.ColorStateList): void;
					public static setTint(seekBar: android.widget.SeekBar, color: number): void;
					public static setTint(progressBar: android.widget.ProgressBar, color: number): void;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export class ThemeSingleton extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.internal.ThemeSingleton>;
					public darkTheme: boolean;
					public titleColor: number;
					public contentColor: number;
					public positiveColor: android.content.res.ColorStateList;
					public neutralColor: android.content.res.ColorStateList;
					public negativeColor: android.content.res.ColorStateList;
					public widgetColor: number;
					public itemColor: number;
					public icon: android.graphics.drawable.Drawable;
					public backgroundColor: number;
					public dividerColor: number;
					public linkColor: android.content.res.ColorStateList;
					public listSelector: number;
					public btnSelectorStacked: number;
					public btnSelectorPositive: number;
					public btnSelectorNeutral: number;
					public btnSelectorNegative: number;
					public titleGravity: com.afollestad.materialdialogs.GravityEnum;
					public contentGravity: com.afollestad.materialdialogs.GravityEnum;
					public btnStackedGravity: com.afollestad.materialdialogs.GravityEnum;
					public itemsGravity: com.afollestad.materialdialogs.GravityEnum;
					public buttonsGravity: com.afollestad.materialdialogs.GravityEnum;
					public static get(): com.afollestad.materialdialogs.internal.ThemeSingleton;
					public static get(createIfNull: boolean): com.afollestad.materialdialogs.internal.ThemeSingleton;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module util {
				export class DialogUtils extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.util.DialogUtils>;
					public static resolveBoolean(context: android.content.Context, attr: number): boolean;
					public static resolveDimension(context: android.content.Context, attr: number): number;
					public static getDisabledColor(context: android.content.Context): number;
					public static getColor(context: android.content.Context, colorId: number): number;
					public static resolveBoolean(context: android.content.Context, attr: number, fallback: boolean): boolean;
					public static hideKeyboard(di: android.content.DialogInterface, builder: com.afollestad.materialdialogs.MaterialDialog.Builder): void;
					public static resolveActionTextColorStateList(context: android.content.Context, colorAttr: number, fallback: android.content.res.ColorStateList): android.content.res.ColorStateList;
					public static showKeyboard(di: android.content.DialogInterface, builder: com.afollestad.materialdialogs.MaterialDialog.Builder): void;
					public static getActionTextStateList(context: android.content.Context, newPrimaryColor: number): android.content.res.ColorStateList;
					public static resolveColor(context: android.content.Context, attr: number): number;
					public static resolveGravityEnum(context: android.content.Context, attr: number, defaultGravity: com.afollestad.materialdialogs.GravityEnum): com.afollestad.materialdialogs.GravityEnum;
					public constructor();
					public static getActionTextColorStateList(context: android.content.Context, colorId: number): android.content.res.ColorStateList;
					public static getColorArray(context: android.content.Context, array: number): number[];
					public static setBackgroundCompat(view: android.view.View, d: android.graphics.drawable.Drawable): void;
					public static resolveColor(context: android.content.Context, attr: number, fallback: number): number;
					public static isIn(find: any, ary: any[]): boolean;
					public static resolveDrawable(context: android.content.Context, attr: number): android.graphics.drawable.Drawable;
					public static adjustAlpha(color: number, factor: number): number;
					public static resolveString(context: android.content.Context, attr: number): string;
					public static isColorDark(color: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module util {
				export class RippleHelper extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.util.RippleHelper>;
					public constructor();
					public static applyColor(d: android.graphics.drawable.Drawable, color: number): void;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module util {
				export class TypefaceHelper extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.util.TypefaceHelper>;
					public constructor();
					public static get(c: android.content.Context, name: string): android.graphics.Typeface;
				}
			}
		}
	}
}

//Generics information:

