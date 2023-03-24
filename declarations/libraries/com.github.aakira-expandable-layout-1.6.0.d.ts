declare module com {
	export module github {
		export module aakira {
			export module expandablelayout {
				export class BuildConfig extends java.lang.Object {
					public static class: java.lang.Class<com.github.aakira.expandablelayout.BuildConfig>;
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
	export module github {
		export module aakira {
			export module expandablelayout {
				export class ExpandableLayout extends java.lang.Object {
					public static class: java.lang.Class<com.github.aakira.expandablelayout.ExpandableLayout>;
					/**
					 * Constructs a new instance of the com.github.aakira.expandablelayout.ExpandableLayout interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						toggle(): void;
						toggle(param0: number, param1: android.animation.TimeInterpolator): void;
						expand(): void;
						expand(param0: number, param1: android.animation.TimeInterpolator): void;
						collapse(): void;
						collapse(param0: number, param1: android.animation.TimeInterpolator): void;
						setListener(param0: com.github.aakira.expandablelayout.ExpandableLayoutListener): void;
						setDuration(param0: number): void;
						setExpanded(param0: boolean): void;
						isExpanded(): boolean;
						setInterpolator(param0: android.animation.TimeInterpolator): void;
					});
					public constructor();
					public static DEFAULT_EXPANDED: boolean;
					public static HORIZONTAL: number;
					public static VERTICAL: number;
					public static DEFAULT_DURATION: number;
					public setListener(param0: com.github.aakira.expandablelayout.ExpandableLayoutListener): void;
					public setExpanded(param0: boolean): void;
					public isExpanded(): boolean;
					public setDuration(param0: number): void;
					public toggle(param0: number, param1: android.animation.TimeInterpolator): void;
					public toggle(): void;
					public expand(): void;
					public collapse(param0: number, param1: android.animation.TimeInterpolator): void;
					public expand(param0: number, param1: android.animation.TimeInterpolator): void;
					public collapse(): void;
					public setInterpolator(param0: android.animation.TimeInterpolator): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module aakira {
			export module expandablelayout {
				export class ExpandableLayoutListener extends java.lang.Object {
					public static class: java.lang.Class<com.github.aakira.expandablelayout.ExpandableLayoutListener>;
					/**
					 * Constructs a new instance of the com.github.aakira.expandablelayout.ExpandableLayoutListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAnimationStart(): void;
						onAnimationEnd(): void;
						onPreOpen(): void;
						onPreClose(): void;
						onOpened(): void;
						onClosed(): void;
					});
					public constructor();
					public onOpened(): void;
					public onAnimationEnd(): void;
					public onPreClose(): void;
					public onClosed(): void;
					public onPreOpen(): void;
					public onAnimationStart(): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module aakira {
			export module expandablelayout {
				export abstract class ExpandableLayoutListenerAdapter extends java.lang.Object implements com.github.aakira.expandablelayout.ExpandableLayoutListener {
					public static class: java.lang.Class<com.github.aakira.expandablelayout.ExpandableLayoutListenerAdapter>;
					public onOpened(): void;
					public onAnimationEnd(): void;
					public onPreClose(): void;
					public constructor();
					public onClosed(): void;
					public onPreOpen(): void;
					public onAnimationStart(): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module aakira {
			export module expandablelayout {
				export class ExpandableLinearLayout extends android.widget.LinearLayout implements com.github.aakira.expandablelayout.ExpandableLayout {
					public static class: java.lang.Class<com.github.aakira.expandablelayout.ExpandableLinearLayout>;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public moveChild(index: number): void;
					public isExpanded(): boolean;
					public focusableViewAvailable(v: android.view.View): void;
					public isTextDirectionResolved(): boolean;
					public showContextMenuForChild(param0: android.view.View): boolean;
					public onStopNestedScroll(child: android.view.View): void;
					public setClosePositionIndex(childIndex: number): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
					public expand(param0: number, param1: android.animation.TimeInterpolator): void;
					public recomputeViewAttributes(child: android.view.View): void;
					public addView(child: android.view.View, index: number): void;
					public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public getLayoutDirection(): number;
					public getParentForAccessibility(): android.view.ViewParent;
					public setDuration(param0: number): void;
					public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
					public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
					public setDuration(duration: number): void;
					public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
					public createContextMenu(param0: android.view.ContextMenu): void;
					public collapse(): void;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
					public setListener(param0: com.github.aakira.expandablelayout.ExpandableLayoutListener): void;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public setExpanded(param0: boolean): void;
					public childDrawableStateChanged(param0: android.view.View): void;
					public moveChild(index: number, duration: number, param2: android.animation.TimeInterpolator): void;
					public setClosePosition(position: number): void;
					public toggle(duration: number, param1: android.animation.TimeInterpolator): void;
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
					public setInRecyclerView(inRecyclerView: boolean): void;
					public setInterpolator(param0: android.animation.TimeInterpolator): void;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
					public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
					public showContextMenuForChild(originalView: android.view.View): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
					public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
					public sendAccessibilityEvent(param0: number): void;
					public collapse(param0: number, param1: android.animation.TimeInterpolator): void;
					public requestLayout(): void;
					public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public setInterpolator(interpolator: android.animation.TimeInterpolator): void;
					public getTextAlignment(): number;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
					public toggle(): void;
					public initLayout(): void;
					public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
					public focusSearch(param0: android.view.View, param1: number): android.view.View;
					public bringChildToFront(child: android.view.View): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public move(position: number, duration: number, param2: android.animation.TimeInterpolator): void;
					public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public collapse(duration: number, param1: android.animation.TimeInterpolator): void;
					public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
					public isLayoutRequested(): boolean;
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					public getChildPosition(index: number): number;
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
					public expand(duration: number, param1: android.animation.TimeInterpolator): void;
					public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
					public bringChildToFront(param0: android.view.View): void;
					public constructor(context: android.content.Context);
					public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
					public setListener(listener: com.github.aakira.expandablelayout.ExpandableLayoutListener): void;
					public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
					public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
					public getTextDirection(): number;
					public toggle(param0: number, param1: android.animation.TimeInterpolator): void;
					public move(position: number): void;
					public requestFitSystemWindows(): void;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public onSaveInstanceState(): android.os.Parcelable;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public requestTransparentRegion(param0: android.view.View): void;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
					public canResolveTextDirection(): boolean;
					public expand(): void;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public getParent(): android.view.ViewParent;
					public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
					public getClosePosition(): number;
					public createContextMenu(menu: android.view.ContextMenu): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public getCurrentPosition(): number;
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
					public setExpanded(expanded: boolean): void;
					public focusableViewAvailable(param0: android.view.View): void;
					public focusSearch(direction: number): android.view.View;
					public onRestoreInstanceState(state: android.os.Parcelable): void;
					public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module aakira {
			export module expandablelayout {
				export class ExpandableRelativeLayout extends android.widget.RelativeLayout implements com.github.aakira.expandablelayout.ExpandableLayout {
					public static class: java.lang.Class<com.github.aakira.expandablelayout.ExpandableRelativeLayout>;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public moveChild(index: number): void;
					public isExpanded(): boolean;
					public focusableViewAvailable(v: android.view.View): void;
					public isTextDirectionResolved(): boolean;
					public showContextMenuForChild(param0: android.view.View): boolean;
					public onStopNestedScroll(child: android.view.View): void;
					public setClosePositionIndex(childIndex: number): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
					public expand(param0: number, param1: android.animation.TimeInterpolator): void;
					public recomputeViewAttributes(child: android.view.View): void;
					public addView(child: android.view.View, index: number): void;
					public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public getLayoutDirection(): number;
					public getParentForAccessibility(): android.view.ViewParent;
					public setDuration(param0: number): void;
					public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
					public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
					public setDuration(duration: number): void;
					public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
					public createContextMenu(param0: android.view.ContextMenu): void;
					public collapse(): void;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
					public setListener(param0: com.github.aakira.expandablelayout.ExpandableLayoutListener): void;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public setExpanded(param0: boolean): void;
					public childDrawableStateChanged(param0: android.view.View): void;
					public moveChild(index: number, duration: number, param2: android.animation.TimeInterpolator): void;
					public setClosePosition(position: number): void;
					public toggle(duration: number, param1: android.animation.TimeInterpolator): void;
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
					public setInterpolator(param0: android.animation.TimeInterpolator): void;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
					public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
					public showContextMenuForChild(originalView: android.view.View): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
					public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
					public sendAccessibilityEvent(param0: number): void;
					public collapse(param0: number, param1: android.animation.TimeInterpolator): void;
					public requestLayout(): void;
					public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public setInterpolator(interpolator: android.animation.TimeInterpolator): void;
					public getTextAlignment(): number;
					public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
					public toggle(): void;
					public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
					public focusSearch(param0: android.view.View, param1: number): android.view.View;
					public bringChildToFront(child: android.view.View): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public move(position: number, duration: number, param2: android.animation.TimeInterpolator): void;
					public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public collapse(duration: number, param1: android.animation.TimeInterpolator): void;
					public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
					public isLayoutRequested(): boolean;
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					public getChildPosition(index: number): number;
					public clearChildFocus(param0: android.view.View): void;
					public clearChildFocus(child: android.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public setOrientation(orientation: number): void;
					public isLayoutDirectionResolved(): boolean;
					public focusSearch(focused: android.view.View, direction: number): android.view.View;
					public addView(child: android.view.View): void;
					public addView(child: android.view.View, width: number, height: number): void;
					public removeView(view: android.view.View): void;
					public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
					public expand(duration: number, param1: android.animation.TimeInterpolator): void;
					public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
					public bringChildToFront(param0: android.view.View): void;
					public constructor(context: android.content.Context);
					public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
					public setListener(listener: com.github.aakira.expandablelayout.ExpandableLayoutListener): void;
					public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
					public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
					public getTextDirection(): number;
					public toggle(param0: number, param1: android.animation.TimeInterpolator): void;
					public move(position: number): void;
					public requestFitSystemWindows(): void;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public onSaveInstanceState(): android.os.Parcelable;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public requestTransparentRegion(param0: android.view.View): void;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
					public canResolveTextDirection(): boolean;
					public expand(): void;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public getParent(): android.view.ViewParent;
					public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
					public getClosePosition(): number;
					public createContextMenu(menu: android.view.ContextMenu): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public getCurrentPosition(): number;
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
					public setExpanded(expanded: boolean): void;
					public focusableViewAvailable(param0: android.view.View): void;
					public focusSearch(direction: number): android.view.View;
					public onRestoreInstanceState(state: android.os.Parcelable): void;
					public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module aakira {
			export module expandablelayout {
				export class ExpandableSavedState extends android.view.View.BaseSavedState {
					public static class: java.lang.Class<com.github.aakira.expandablelayout.ExpandableSavedState>;
					public static CREATOR: android.os.Parcelable.Creator<com.github.aakira.expandablelayout.ExpandableSavedState>;
					public setSize(size: number): void;
					public setWeight(weight: number): void;
					public getWeight(): number;
					public describeContents(): number;
					public writeToParcel(out: android.os.Parcel, flags: number): void;
					public getSize(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module aakira {
			export module expandablelayout {
				export class ExpandableWeightLayout extends android.widget.RelativeLayout implements com.github.aakira.expandablelayout.ExpandableLayout {
					public static class: java.lang.Class<com.github.aakira.expandablelayout.ExpandableWeightLayout>;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public isExpanded(): boolean;
					public focusableViewAvailable(v: android.view.View): void;
					public isTextDirectionResolved(): boolean;
					public showContextMenuForChild(param0: android.view.View): boolean;
					public onStopNestedScroll(child: android.view.View): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
					public expand(param0: number, param1: android.animation.TimeInterpolator): void;
					public recomputeViewAttributes(child: android.view.View): void;
					public addView(child: android.view.View, index: number): void;
					public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public getLayoutDirection(): number;
					public getParentForAccessibility(): android.view.ViewParent;
					public setDuration(param0: number): void;
					public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
					public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
					public setDuration(duration: number): void;
					public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
					public createContextMenu(param0: android.view.ContextMenu): void;
					public collapse(): void;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
					public setListener(param0: com.github.aakira.expandablelayout.ExpandableLayoutListener): void;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public setExpanded(param0: boolean): void;
					public childDrawableStateChanged(param0: android.view.View): void;
					public toggle(duration: number, param1: android.animation.TimeInterpolator): void;
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
					public setInterpolator(param0: android.animation.TimeInterpolator): void;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
					public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
					public showContextMenuForChild(originalView: android.view.View): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public setExpandWeight(expandWeight: number): void;
					public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
					public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
					public sendAccessibilityEvent(param0: number): void;
					public collapse(param0: number, param1: android.animation.TimeInterpolator): void;
					public requestLayout(): void;
					public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public setInterpolator(interpolator: android.animation.TimeInterpolator): void;
					public getTextAlignment(): number;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
					public toggle(): void;
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
					public collapse(duration: number, param1: android.animation.TimeInterpolator): void;
					public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
					public isLayoutRequested(): boolean;
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					public onAttachedToWindow(): void;
					public clearChildFocus(param0: android.view.View): void;
					public clearChildFocus(child: android.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public move(weight: number, duration: number, param2: android.animation.TimeInterpolator): void;
					public isLayoutDirectionResolved(): boolean;
					public focusSearch(focused: android.view.View, direction: number): android.view.View;
					public addView(child: android.view.View): void;
					public addView(child: android.view.View, width: number, height: number): void;
					public removeView(view: android.view.View): void;
					public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
					public expand(duration: number, param1: android.animation.TimeInterpolator): void;
					public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
					public bringChildToFront(param0: android.view.View): void;
					public constructor(context: android.content.Context);
					public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
					public setListener(listener: com.github.aakira.expandablelayout.ExpandableLayoutListener): void;
					public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
					public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
					public getTextDirection(): number;
					public toggle(param0: number, param1: android.animation.TimeInterpolator): void;
					public requestFitSystemWindows(): void;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public onSaveInstanceState(): android.os.Parcelable;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public requestTransparentRegion(param0: android.view.View): void;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
					public canResolveTextDirection(): boolean;
					public expand(): void;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public getParent(): android.view.ViewParent;
					public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
					public createContextMenu(menu: android.view.ContextMenu): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public onStopNestedScroll(param0: android.view.View): void;
					public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public getCurrentWeight(): number;
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
					public setExpanded(expanded: boolean): void;
					public focusableViewAvailable(param0: android.view.View): void;
					public focusSearch(direction: number): android.view.View;
					public onRestoreInstanceState(state: android.os.Parcelable): void;
					public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
					public move(weight: number): void;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module aakira {
			export module expandablelayout {
				export class Utils extends java.lang.Object {
					public static class: java.lang.Class<com.github.aakira.expandablelayout.Utils>;
					public static ACCELERATE_DECELERATE_INTERPOLATOR: number;
					public static ACCELERATE_INTERPOLATOR: number;
					public static ANTICIPATE_INTERPOLATOR: number;
					public static ANTICIPATE_OVERSHOOT_INTERPOLATOR: number;
					public static BOUNCE_INTERPOLATOR: number;
					public static DECELERATE_INTERPOLATOR: number;
					public static FAST_OUT_LINEAR_IN_INTERPOLATOR: number;
					public static FAST_OUT_SLOW_IN_INTERPOLATOR: number;
					public static LINEAR_INTERPOLATOR: number;
					public static LINEAR_OUT_SLOW_IN_INTERPOLATOR: number;
					public static OVERSHOOT_INTERPOLATOR: number;
					public constructor();
					public static createInterpolator(interpolatorType: number): android.animation.TimeInterpolator;
				}
			}
		}
	}
}

//Generics information:

