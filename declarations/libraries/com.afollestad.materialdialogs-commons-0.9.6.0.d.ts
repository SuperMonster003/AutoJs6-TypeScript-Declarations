declare module com {
	export module afollestad {
		export module materialdialogs {
			export module color {
				export class CircleView extends android.widget.FrameLayout {
					public static class: java.lang.Class<com.afollestad.materialdialogs.color.CircleView>;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public static shiftColorUp(color: number): number;
					public focusableViewAvailable(v: android.view.View): void;
					/** @deprecated */
					public setBackground(background: android.graphics.drawable.Drawable): void;
					public isTextDirectionResolved(): boolean;
					public showContextMenuForChild(param0: android.view.View): boolean;
					public onStopNestedScroll(child: android.view.View): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
					public recomputeViewAttributes(child: android.view.View): void;
					/** @deprecated */
					public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
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
					public static shiftColor(color: number, by: number): number;
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
					public static shiftColorDown(color: number): number;
					public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
					public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
					public sendAccessibilityEvent(param0: number): void;
					public requestLayout(): void;
					public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public getTextAlignment(): number;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
					public showHint(color: number): void;
					public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
					public focusSearch(param0: android.view.View, param1: number): android.view.View;
					/** @deprecated */
					public setActivated(activated: boolean): void;
					public bringChildToFront(child: android.view.View): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
					public setBackgroundColor(color: number): void;
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
					public setBackground(background: android.graphics.drawable.Drawable): void;
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
					public setActivated(activated: boolean): void;
					public canResolveTextDirection(): boolean;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public getParent(): android.view.ViewParent;
					public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
					public createContextMenu(menu: android.view.ContextMenu): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
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
					public setBackgroundResource(color: number): void;
					public recomputeViewAttributes(param0: android.view.View): void;
					public focusableViewAvailable(param0: android.view.View): void;
					public focusSearch(direction: number): android.view.View;
					public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
					public setBackgroundResource(resid: number): void;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module color {
				export class ColorChooserDialog extends androidx.fragment.app.DialogFragment implements android.view.View.OnClickListener, android.view.View.OnLongClickListener {
					public static class: java.lang.Class<com.afollestad.materialdialogs.color.ColorChooserDialog>;
					public static TAG_PRIMARY: string;
					public static TAG_ACCENT: string;
					public static TAG_CUSTOM: string;
					public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
					public getViewModelStore(): androidx.lifecycle.ViewModelStore;
					public onAttach(param0: android.content.Context): void;
					public onAttach(context: android.content.Context): void;
					public onLongClick(v: android.view.View): boolean;
					public tag(): string;
					public onLowMemory(): void;
					public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
					public show(param0: androidx.fragment.app.FragmentTransaction, param1: string): number;
					public constructor();
					public onCreateDialog(param0: android.os.Bundle): android.app.Dialog;
					public show(param0: androidx.fragment.app.FragmentManager, param1: string): void;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public constructor(param0: number);
					public onLongClick(param0: android.view.View): boolean;
					public onDismiss(param0: android.content.DialogInterface): void;
					public getTitle(): number;
					public onSaveInstanceState(outState: android.os.Bundle): void;
					public show(fragmentManager: androidx.fragment.app.FragmentManager): com.afollestad.materialdialogs.color.ColorChooserDialog;
					public static findVisible(fragmentManager: androidx.fragment.app.FragmentManager, tag: string): com.afollestad.materialdialogs.color.ColorChooserDialog;
					public onCreateDialog(savedInstanceState: android.os.Bundle): android.app.Dialog;
					public onClick(v: android.view.View): void;
					public onClick(param0: android.view.View): void;
					public getLifecycle(): androidx.lifecycle.Lifecycle;
					public show(fragmentActivity: androidx.fragment.app.FragmentActivity): com.afollestad.materialdialogs.color.ColorChooserDialog;
					public onCancel(param0: android.content.DialogInterface): void;
					public isAccentMode(): boolean;
					public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
					public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
					public onSaveInstanceState(param0: android.os.Bundle): void;
					public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
					public onAttach(param0: android.app.Activity): void;
					public onDismiss(dialog: android.content.DialogInterface): void;
				}
				export module ColorChooserDialog {
					export class Builder extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<com.afollestad.materialdialogs.color.ColorChooserDialog.Builder>;
						public cancelButton(text: number): com.afollestad.materialdialogs.color.ColorChooserDialog.Builder;
						public typeface(medium: string, regular: string): com.afollestad.materialdialogs.color.ColorChooserDialog.Builder;
						public doneButton(text: number): com.afollestad.materialdialogs.color.ColorChooserDialog.Builder;
						public preselect(preselect: number): com.afollestad.materialdialogs.color.ColorChooserDialog.Builder;
						public dynamicButtonColor(enabled: boolean): com.afollestad.materialdialogs.color.ColorChooserDialog.Builder;
						public customColors(topLevel: number, subLevel: number[][]): com.afollestad.materialdialogs.color.ColorChooserDialog.Builder;
						public allowUserColorInputAlpha(allow: boolean): com.afollestad.materialdialogs.color.ColorChooserDialog.Builder;
						public build(): com.afollestad.materialdialogs.color.ColorChooserDialog;
						public constructor(context: android.content.Context, title: number);
						public show(fragmentActivity: androidx.fragment.app.FragmentActivity): com.afollestad.materialdialogs.color.ColorChooserDialog;
						public theme(theme: com.afollestad.materialdialogs.Theme): com.afollestad.materialdialogs.color.ColorChooserDialog.Builder;
						public tag(tag: string): com.afollestad.materialdialogs.color.ColorChooserDialog.Builder;
						public show(fragmentManager: androidx.fragment.app.FragmentManager): com.afollestad.materialdialogs.color.ColorChooserDialog;
						public backButton(text: number): com.afollestad.materialdialogs.color.ColorChooserDialog.Builder;
						public customColors(topLevel: number[], subLevel: number[][]): com.afollestad.materialdialogs.color.ColorChooserDialog.Builder;
						public allowUserColorInput(allow: boolean): com.afollestad.materialdialogs.color.ColorChooserDialog.Builder;
						public accentMode(accentMode: boolean): com.afollestad.materialdialogs.color.ColorChooserDialog.Builder;
						public titleSub(titleSub: number): com.afollestad.materialdialogs.color.ColorChooserDialog.Builder;
						public customButton(text: number): com.afollestad.materialdialogs.color.ColorChooserDialog.Builder;
						public presetsButton(text: number): com.afollestad.materialdialogs.color.ColorChooserDialog.Builder;
					}
					export class ColorCallback extends java.lang.Object {
						public static class: java.lang.Class<com.afollestad.materialdialogs.color.ColorChooserDialog.ColorCallback>;
						/**
						 * Constructs a new instance of the com.afollestad.materialdialogs.color.ColorChooserDialog$ColorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onColorSelection(param0: com.afollestad.materialdialogs.color.ColorChooserDialog, param1: number): void;
							onColorChooserDismissed(param0: com.afollestad.materialdialogs.color.ColorChooserDialog): void;
						});
						public constructor();
						public onColorSelection(param0: com.afollestad.materialdialogs.color.ColorChooserDialog, param1: number): void;
						public onColorChooserDismissed(param0: com.afollestad.materialdialogs.color.ColorChooserDialog): void;
					}
					export class ColorChooserTag extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.afollestad.materialdialogs.color.ColorChooserDialog.ColorChooserTag>;
						/**
						 * Constructs a new instance of the com.afollestad.materialdialogs.color.ColorChooserDialog$ColorChooserTag interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export class ColorGridAdapter extends android.widget.BaseAdapter {
						public static class: java.lang.Class<com.afollestad.materialdialogs.color.ColorChooserDialog.ColorGridAdapter>;
						public isEnabled(param0: number): boolean;
						public areAllItemsEnabled(): boolean;
						public isEnabled(position: number): boolean;
						public getView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
						public getCount(): number;
						public getItem(position: number): any;
						public getDropDownView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
						public getItemId(position: number): number;
						public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module color {
				export class ColorPalette extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.color.ColorPalette>;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module color {
				export class FillGridView extends android.widget.GridView {
					public static class: java.lang.Class<com.afollestad.materialdialogs.color.FillGridView>;
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
					public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
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
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyle: number);
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

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module commons {
				export class BuildConfig extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.commons.BuildConfig>;
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
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module folderselector {
				export class FileChooserDialog extends androidx.fragment.app.DialogFragment implements com.afollestad.materialdialogs.MaterialDialog.ListCallback {
					public static class: java.lang.Class<com.afollestad.materialdialogs.folderselector.FileChooserDialog>;
					public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
					public getViewModelStore(): androidx.lifecycle.ViewModelStore;
					public onAttach(param0: android.content.Context): void;
					public onAttach(context: android.content.Context): void;
					public onLowMemory(): void;
					public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
					public show(param0: androidx.fragment.app.FragmentTransaction, param1: string): number;
					public constructor();
					public onCreateDialog(param0: android.os.Bundle): android.app.Dialog;
					public show(param0: androidx.fragment.app.FragmentManager, param1: string): void;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public constructor(param0: number);
					public onDismiss(param0: android.content.DialogInterface): void;
					public onCreateDialog(savedInstanceState: android.os.Bundle): android.app.Dialog;
					public getLifecycle(): androidx.lifecycle.Lifecycle;
					public onSelection(materialDialog: com.afollestad.materialdialogs.MaterialDialog, view: android.view.View, i: number, s: string): void;
					public onCancel(param0: android.content.DialogInterface): void;
					public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
					public show(fragmentActivity: androidx.fragment.app.FragmentActivity): void;
					public getInitialPath(): string;
					public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
					public onSelection(param0: com.afollestad.materialdialogs.MaterialDialog, param1: android.view.View, param2: number, param3: string): void;
					public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
					public onAttach(param0: android.app.Activity): void;
					public show(fragmentManager: androidx.fragment.app.FragmentManager): void;
					public onDismiss(dialog: android.content.DialogInterface): void;
				}
				export module FileChooserDialog {
					export class Builder extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<com.afollestad.materialdialogs.folderselector.FileChooserDialog.Builder>;
						public build(): com.afollestad.materialdialogs.folderselector.FileChooserDialog;
						public cancelButton(text: number): com.afollestad.materialdialogs.folderselector.FileChooserDialog.Builder;
						public mimeType(type: string): com.afollestad.materialdialogs.folderselector.FileChooserDialog.Builder;
						public extensionsFilter(...extensions: string[]): com.afollestad.materialdialogs.folderselector.FileChooserDialog.Builder;
						public show(fragmentActivity: androidx.fragment.app.FragmentActivity): com.afollestad.materialdialogs.folderselector.FileChooserDialog;
						public constructor(context: android.content.Context);
						public initialPath(initialPath: string): com.afollestad.materialdialogs.folderselector.FileChooserDialog.Builder;
						public typeface(medium: string, regular: string): com.afollestad.materialdialogs.folderselector.FileChooserDialog.Builder;
						public goUpLabel(text: string): com.afollestad.materialdialogs.folderselector.FileChooserDialog.Builder;
						public show(fragmentManager: androidx.fragment.app.FragmentManager): com.afollestad.materialdialogs.folderselector.FileChooserDialog;
						public tag(tag: string): com.afollestad.materialdialogs.folderselector.FileChooserDialog.Builder;
					}
					export class FileCallback extends java.lang.Object {
						public static class: java.lang.Class<com.afollestad.materialdialogs.folderselector.FileChooserDialog.FileCallback>;
						/**
						 * Constructs a new instance of the com.afollestad.materialdialogs.folderselector.FileChooserDialog$FileCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFileSelection(param0: com.afollestad.materialdialogs.folderselector.FileChooserDialog, param1: java.io.File): void;
							onFileChooserDismissed(param0: com.afollestad.materialdialogs.folderselector.FileChooserDialog): void;
						});
						public constructor();
						public onFileSelection(param0: com.afollestad.materialdialogs.folderselector.FileChooserDialog, param1: java.io.File): void;
						public onFileChooserDismissed(param0: com.afollestad.materialdialogs.folderselector.FileChooserDialog): void;
					}
					export class FileSorter extends java.util.Comparator<java.io.File> {
						public static class: java.lang.Class<com.afollestad.materialdialogs.folderselector.FileChooserDialog.FileSorter>;
						public compare(lhs: java.io.File, rhs: java.io.File): number;
						public equals(obj: any): boolean;
						public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public equals(param0: any): boolean;
						public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static reverseOrder(): java.util.Comparator<any>;
						public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public reversed(): java.util.Comparator<any>;
						public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public static naturalOrder(): java.util.Comparator<any>;
						public compare(param0: any, param1: any): number;
						public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
						public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module folderselector {
				export class FolderChooserDialog extends androidx.fragment.app.DialogFragment implements com.afollestad.materialdialogs.MaterialDialog.ListCallback {
					public static class: java.lang.Class<com.afollestad.materialdialogs.folderselector.FolderChooserDialog>;
					public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
					public getViewModelStore(): androidx.lifecycle.ViewModelStore;
					public onAttach(param0: android.content.Context): void;
					public onAttach(context: android.content.Context): void;
					public onLowMemory(): void;
					public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
					public show(param0: androidx.fragment.app.FragmentTransaction, param1: string): number;
					public constructor();
					public onCreateDialog(param0: android.os.Bundle): android.app.Dialog;
					public show(param0: androidx.fragment.app.FragmentManager, param1: string): void;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public constructor(param0: number);
					public onDismiss(param0: android.content.DialogInterface): void;
					public onCreateDialog(savedInstanceState: android.os.Bundle): android.app.Dialog;
					public getLifecycle(): androidx.lifecycle.Lifecycle;
					public onSelection(materialDialog: com.afollestad.materialdialogs.MaterialDialog, view: android.view.View, i: number, s: string): void;
					public onCancel(param0: android.content.DialogInterface): void;
					public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
					public show(fragmentActivity: androidx.fragment.app.FragmentActivity): void;
					public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
					public onSelection(param0: com.afollestad.materialdialogs.MaterialDialog, param1: android.view.View, param2: number, param3: string): void;
					public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
					public onAttach(param0: android.app.Activity): void;
					public show(fragmentManager: androidx.fragment.app.FragmentManager): void;
					public onDismiss(dialog: android.content.DialogInterface): void;
				}
				export module FolderChooserDialog {
					export class Builder extends java.lang.Object implements java.io.Serializable {
						public static class: java.lang.Class<com.afollestad.materialdialogs.folderselector.FolderChooserDialog.Builder>;
						public tag(tag: string): com.afollestad.materialdialogs.folderselector.FolderChooserDialog.Builder;
						public chooseButton(text: number): com.afollestad.materialdialogs.folderselector.FolderChooserDialog.Builder;
						public initialPath(initialPath: string): com.afollestad.materialdialogs.folderselector.FolderChooserDialog.Builder;
						public show(fragmentManager: androidx.fragment.app.FragmentManager): com.afollestad.materialdialogs.folderselector.FolderChooserDialog;
						public build(): com.afollestad.materialdialogs.folderselector.FolderChooserDialog;
						public constructor(context: android.content.Context);
						public allowNewFolder(allow: boolean, buttonLabel: number): com.afollestad.materialdialogs.folderselector.FolderChooserDialog.Builder;
						public cancelButton(text: number): com.afollestad.materialdialogs.folderselector.FolderChooserDialog.Builder;
						public typeface(medium: string, regular: string): com.afollestad.materialdialogs.folderselector.FolderChooserDialog.Builder;
						public goUpLabel(text: string): com.afollestad.materialdialogs.folderselector.FolderChooserDialog.Builder;
						public show(fragmentActivity: androidx.fragment.app.FragmentActivity): com.afollestad.materialdialogs.folderselector.FolderChooserDialog;
					}
					export class FolderCallback extends java.lang.Object {
						public static class: java.lang.Class<com.afollestad.materialdialogs.folderselector.FolderChooserDialog.FolderCallback>;
						/**
						 * Constructs a new instance of the com.afollestad.materialdialogs.folderselector.FolderChooserDialog$FolderCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFolderSelection(param0: com.afollestad.materialdialogs.folderselector.FolderChooserDialog, param1: java.io.File): void;
							onFolderChooserDismissed(param0: com.afollestad.materialdialogs.folderselector.FolderChooserDialog): void;
						});
						public constructor();
						public onFolderSelection(param0: com.afollestad.materialdialogs.folderselector.FolderChooserDialog, param1: java.io.File): void;
						public onFolderChooserDismissed(param0: com.afollestad.materialdialogs.folderselector.FolderChooserDialog): void;
					}
					export class FolderSorter extends java.util.Comparator<java.io.File> {
						public static class: java.lang.Class<com.afollestad.materialdialogs.folderselector.FolderChooserDialog.FolderSorter>;
						public compare(lhs: java.io.File, rhs: java.io.File): number;
						public equals(obj: any): boolean;
						public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public equals(param0: any): boolean;
						public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static reverseOrder(): java.util.Comparator<any>;
						public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public reversed(): java.util.Comparator<any>;
						public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
						public static naturalOrder(): java.util.Comparator<any>;
						public compare(param0: any, param1: any): number;
						public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
						public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
						public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module prefs {
				export class MaterialDialogPreference extends android.preference.DialogPreference {
					public static class: java.lang.Class<com.afollestad.materialdialogs.prefs.MaterialDialogPreference>;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onDismiss(param0: android.content.DialogInterface): void;
					public constructor(context: android.content.Context);
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public onClick(dialog: android.content.DialogInterface, which: number): void;
					public onActivityDestroy(): void;
					public getDialog(): android.app.Dialog;
					public showDialog(state: android.os.Bundle): void;
					public onRestoreInstanceState(state: android.os.Parcelable): void;
					public onClick(param0: android.content.DialogInterface, param1: number): void;
					public onClick(): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public onDismiss(dialog: android.content.DialogInterface): void;
					public onSaveInstanceState(): android.os.Parcelable;
				}
				export module MaterialDialogPreference {
					export class SavedState extends android.preference.Preference.BaseSavedState {
						public static class: java.lang.Class<com.afollestad.materialdialogs.prefs.MaterialDialogPreference.SavedState>;
						public static CREATOR: android.os.Parcelable.Creator<com.afollestad.materialdialogs.prefs.MaterialDialogPreference.SavedState>;
						public writeToParcel(dest: android.os.Parcel, flags: number): void;
						public describeContents(): number;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module prefs {
				export class MaterialEditTextPreference extends android.preference.EditTextPreference {
					public static class: java.lang.Class<com.afollestad.materialdialogs.prefs.MaterialEditTextPreference>;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onAddEditTextToDialogView(dialogView: android.view.View, editText: android.widget.EditText): void;
					public onDismiss(param0: android.content.DialogInterface): void;
					public constructor(context: android.content.Context);
					public onDialogClosed(positiveResult: boolean): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public onClick(dialog: android.content.DialogInterface, which: number): void;
					public onBindDialogView(view: android.view.View): void;
					public onActivityDestroy(): void;
					public getDialog(): android.app.Dialog;
					public getEditText(): android.widget.EditText;
					public showDialog(state: android.os.Bundle): void;
					public onRestoreInstanceState(state: android.os.Parcelable): void;
					public onClick(param0: android.content.DialogInterface, param1: number): void;
					public onClick(): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public onDismiss(dialog: android.content.DialogInterface): void;
					public onSaveInstanceState(): android.os.Parcelable;
				}
				export module MaterialEditTextPreference {
					export class SavedState extends android.preference.Preference.BaseSavedState {
						public static class: java.lang.Class<com.afollestad.materialdialogs.prefs.MaterialEditTextPreference.SavedState>;
						public static CREATOR: android.os.Parcelable.Creator<com.afollestad.materialdialogs.prefs.MaterialEditTextPreference.SavedState>;
						public writeToParcel(dest: android.os.Parcel, flags: number): void;
						public describeContents(): number;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module prefs {
				export class MaterialListPreference extends android.preference.ListPreference {
					public static class: java.lang.Class<com.afollestad.materialdialogs.prefs.MaterialListPreference>;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onDismiss(param0: android.content.DialogInterface): void;
					public constructor(context: android.content.Context);
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public getRecyclerView(): androidx.recyclerview.widget.RecyclerView;
					public setEntries(entries: string[]): void;
					public onClick(dialog: android.content.DialogInterface, which: number): void;
					public onActivityDestroy(): void;
					public setEntries(entriesResId: number): void;
					public getDialog(): android.app.Dialog;
					public showDialog(state: android.os.Bundle): void;
					public onRestoreInstanceState(state: android.os.Parcelable): void;
					public onClick(param0: android.content.DialogInterface, param1: number): void;
					public onClick(): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public onDismiss(dialog: android.content.DialogInterface): void;
					public onSaveInstanceState(): android.os.Parcelable;
				}
				export module MaterialListPreference {
					export class SavedState extends android.preference.Preference.BaseSavedState {
						public static class: java.lang.Class<com.afollestad.materialdialogs.prefs.MaterialListPreference.SavedState>;
						public static CREATOR: android.os.Parcelable.Creator<com.afollestad.materialdialogs.prefs.MaterialListPreference.SavedState>;
						public writeToParcel(dest: android.os.Parcel, flags: number): void;
						public describeContents(): number;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module prefs {
				export class MaterialMultiSelectListPreference extends android.preference.MultiSelectListPreference {
					public static class: java.lang.Class<com.afollestad.materialdialogs.prefs.MaterialMultiSelectListPreference>;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onDismiss(param0: android.content.DialogInterface): void;
					public constructor(context: android.content.Context);
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public setEntries(entries: string[]): void;
					public onClick(dialog: android.content.DialogInterface, which: number): void;
					public onActivityDestroy(): void;
					public setEntries(entriesResId: number): void;
					public getDialog(): android.app.Dialog;
					public showDialog(state: android.os.Bundle): void;
					public onRestoreInstanceState(state: android.os.Parcelable): void;
					public onClick(param0: android.content.DialogInterface, param1: number): void;
					public onClick(): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public onDismiss(dialog: android.content.DialogInterface): void;
					public onSaveInstanceState(): android.os.Parcelable;
				}
				export module MaterialMultiSelectListPreference {
					export class SavedState extends android.preference.Preference.BaseSavedState {
						public static class: java.lang.Class<com.afollestad.materialdialogs.prefs.MaterialMultiSelectListPreference.SavedState>;
						public static CREATOR: android.os.Parcelable.Creator<com.afollestad.materialdialogs.prefs.MaterialMultiSelectListPreference.SavedState>;
						public writeToParcel(dest: android.os.Parcel, flags: number): void;
						public describeContents(): number;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module prefs {
				export class PrefUtil extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.prefs.PrefUtil>;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module simplelist {
				export class MaterialSimpleListAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.afollestad.materialdialogs.simplelist.MaterialSimpleListAdapter.SimpleListVH> implements com.afollestad.materialdialogs.internal.MDAdapter  {
					public static class: java.lang.Class<com.afollestad.materialdialogs.simplelist.MaterialSimpleListAdapter>;
					public setDialog(dialog: com.afollestad.materialdialogs.MaterialDialog): void;
					public add(item: com.afollestad.materialdialogs.simplelist.MaterialSimpleListItem): void;
					public onBindViewHolder(holder: com.afollestad.materialdialogs.simplelist.MaterialSimpleListAdapter.SimpleListVH, position: number): void;
					public getItem(index: number): com.afollestad.materialdialogs.simplelist.MaterialSimpleListItem;
					public constructor(callback: com.afollestad.materialdialogs.simplelist.MaterialSimpleListAdapter.Callback);
					public setDialog(param0: com.afollestad.materialdialogs.MaterialDialog): void;
					public onCreateViewHolder(parent: android.view.ViewGroup, viewType: number): com.afollestad.materialdialogs.simplelist.MaterialSimpleListAdapter.SimpleListVH;
					public onBindViewHolder(param0: any, param1: number): void;
					public constructor();
					public clear(): void;
					public getItemCount(): number;
					public onBindViewHolder(param0: any, param1: number, param2: java.util.List<any>): void;
					public onCreateViewHolder(param0: android.view.ViewGroup, param1: number): any;
				}
				export module MaterialSimpleListAdapter {
					export class Callback extends java.lang.Object {
						public static class: java.lang.Class<com.afollestad.materialdialogs.simplelist.MaterialSimpleListAdapter.Callback>;
						/**
						 * Constructs a new instance of the com.afollestad.materialdialogs.simplelist.MaterialSimpleListAdapter$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onMaterialListItemSelected(param0: com.afollestad.materialdialogs.MaterialDialog, param1: number, param2: com.afollestad.materialdialogs.simplelist.MaterialSimpleListItem): void;
						});
						public constructor();
						public onMaterialListItemSelected(param0: com.afollestad.materialdialogs.MaterialDialog, param1: number, param2: com.afollestad.materialdialogs.simplelist.MaterialSimpleListItem): void;
					}
					export class SimpleListVH extends androidx.recyclerview.widget.RecyclerView.ViewHolder implements android.view.View.OnClickListener {
						public static class: java.lang.Class<com.afollestad.materialdialogs.simplelist.MaterialSimpleListAdapter.SimpleListVH>;
						public onClick(param0: android.view.View): void;
						public onClick(view: android.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module simplelist {
				export class MaterialSimpleListItem extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.simplelist.MaterialSimpleListItem>;
					public getContent(): string;
					public getIconPadding(): number;
					public toString(): string;
					public getTag(): any;
					public getId(): number;
					public getBackgroundColor(): number;
					public getIcon(): android.graphics.drawable.Drawable;
				}
				export module MaterialSimpleListItem {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.afollestad.materialdialogs.simplelist.MaterialSimpleListItem.Builder>;
						public icon(iconRes: number): com.afollestad.materialdialogs.simplelist.MaterialSimpleListItem.Builder;
						public iconPaddingRes(paddingRes: number): com.afollestad.materialdialogs.simplelist.MaterialSimpleListItem.Builder;
						public icon(icon: android.graphics.drawable.Drawable): com.afollestad.materialdialogs.simplelist.MaterialSimpleListItem.Builder;
						public constructor(context: android.content.Context);
						public backgroundColorRes(colorRes: number): com.afollestad.materialdialogs.simplelist.MaterialSimpleListItem.Builder;
						public content(contentRes: number): com.afollestad.materialdialogs.simplelist.MaterialSimpleListItem.Builder;
						public iconPadding(padding: number): com.afollestad.materialdialogs.simplelist.MaterialSimpleListItem.Builder;
						public backgroundColor(color: number): com.afollestad.materialdialogs.simplelist.MaterialSimpleListItem.Builder;
						public id(id: number): com.afollestad.materialdialogs.simplelist.MaterialSimpleListItem.Builder;
						public backgroundColorAttr(colorAttr: number): com.afollestad.materialdialogs.simplelist.MaterialSimpleListItem.Builder;
						public content(content: string): com.afollestad.materialdialogs.simplelist.MaterialSimpleListItem.Builder;
						public build(): com.afollestad.materialdialogs.simplelist.MaterialSimpleListItem;
						public iconPaddingDp(paddingDp: number): com.afollestad.materialdialogs.simplelist.MaterialSimpleListItem.Builder;
						public tag(tag: any): com.afollestad.materialdialogs.simplelist.MaterialSimpleListItem.Builder;
					}
				}
			}
		}
	}
}

//Generics information:

