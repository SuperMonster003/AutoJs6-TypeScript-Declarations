declare module androidx {
	export module slidingpanelayout {
		export module widget {
			export class FoldingFeatureObserver extends java.lang.Object {
				public static class: java.lang.Class<androidx.slidingpanelayout.widget.FoldingFeatureObserver>;
				public constructor(windowInfoTracker: androidx.window.layout.WindowInfoTracker, executor: java.util.concurrent.Executor);
				public unregisterLayoutStateChangeCallback(): void;
				public registerLayoutStateChangeCallback(activity: android.app.Activity): void;
				public setOnFoldingFeatureChangeListener(onFoldingFeatureChangeListener: androidx.slidingpanelayout.widget.FoldingFeatureObserver.OnFoldingFeatureChangeListener): void;
			}
			export module FoldingFeatureObserver {
				export class OnFoldingFeatureChangeListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.slidingpanelayout.widget.FoldingFeatureObserver.OnFoldingFeatureChangeListener>;
					/**
					 * Constructs a new instance of the androidx.slidingpanelayout.widget.FoldingFeatureObserver$OnFoldingFeatureChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFoldingFeatureChange(param0: androidx.window.layout.FoldingFeature): void;
					});
					public constructor();
					public onFoldingFeatureChange(param0: androidx.window.layout.FoldingFeature): void;
				}
			}
		}
	}
}

declare module androidx {
	export module slidingpanelayout {
		export module widget {
			export class SlidingPaneLayout extends android.view.ViewGroup implements androidx.customview.widget.Openable {
				public static class: java.lang.Class<androidx.slidingpanelayout.widget.SlidingPaneLayout>;
				public static LOCK_MODE_UNLOCKED: number;
				public static LOCK_MODE_LOCKED_OPEN: number;
				public static LOCK_MODE_LOCKED_CLOSED: number;
				public static LOCK_MODE_LOCKED: number;
				public addView(child: android.view.View, width: number, height: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				/** @deprecated */
				public setCoveredFadeColor(color: number): void;
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
				public setParallaxDistance(parallaxBy: number): void;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				public generateLayoutParams(attrs: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
				public constructor(context: android.content.Context);
				public draw(c: android.graphics.Canvas): void;
				/** @deprecated */
				public setPanelSlideListener(listener: androidx.slidingpanelayout.widget.SlidingPaneLayout.PanelSlideListener): void;
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public setShadowDrawableRight(d: android.graphics.drawable.Drawable): void;
				public isSlideable(): boolean;
				public drawChild(canvas: android.graphics.Canvas, child: android.view.View, drawingTime: number): boolean;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				/** @deprecated */
				public smoothSlideOpen(): void;
				public bringChildToFront(child: android.view.View): void;
				/** @deprecated */
				public setShadowResource(resId: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public setShadowResourceRight(resId: number): void;
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public removePanelSlideListener(listener: androidx.slidingpanelayout.widget.SlidingPaneLayout.PanelSlideListener): void;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public openPane(): boolean;
				public draw(canvas: android.graphics.Canvas): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				/** @deprecated */
				public canSlide(): boolean;
				public showContextMenuForChild(param0: android.view.View): boolean;
				/** @deprecated */
				public getCoveredFadeColor(): number;
				public addPanelSlideListener(listener: androidx.slidingpanelayout.widget.SlidingPaneLayout.PanelSlideListener): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public setShadowDrawableLeft(d: android.graphics.drawable.Drawable): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public closePane(): boolean;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public addView(child: android.view.View): void;
				public getParentForAccessibility(): android.view.ViewParent;
				/** @deprecated */
				public getSliderFadeColor(): number;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyle: number);
				public open(): void;
				public addView(child: android.view.View, index: number): void;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				/** @deprecated */
				public smoothSlideClosed(): void;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public computeScroll(): void;
				public onStopNestedScroll(child: android.view.View): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
				public onAttachedToWindow(): void;
				public clearChildFocus(param0: android.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public getParallaxDistance(): number;
				public sendAccessibilityEvent(eventType: number): void;
				public canScroll(v: android.view.View, checkV: boolean, dx: number, x: number, y: number): boolean;
				public getLockMode(): number;
				public requestFitSystemWindows(): void;
				public checkLayoutParams(p: android.view.ViewGroup.LayoutParams): boolean;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public close(): void;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public focusSearch(direction: number): android.view.View;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				/** @deprecated */
				public setShadowDrawable(d: android.graphics.drawable.Drawable): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public onDetachedFromWindow(): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public onTouchEvent(event: android.view.MotionEvent): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public setLockMode(lockMode: number): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public onRestoreInstanceState(state: android.os.Parcelable): void;
				public canResolveTextAlignment(): boolean;
				public setShadowResourceLeft(resId: number): void;
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
				public onTouchEvent(ev: android.view.MotionEvent): boolean;
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
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				/** @deprecated */
				public setSliderFadeColor(color: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public isOpen(): boolean;
				public onSaveInstanceState(): android.os.Parcelable;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
			export module SlidingPaneLayout {
				export class androidxslidingpanelayoutwidgetSlidingPaneLayoutAccessibilityDelegate extends androidx.core.view.AccessibilityDelegateCompat {
					public static class: java.lang.Class<androidx.slidingpanelayout.widget.SlidingPaneLayout.AccessibilityDelegate>;
					public onInitializeAccessibilityNodeInfo(host: android.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
					public onInitializeAccessibilityEvent(host: android.view.View, event: android.view.accessibility.AccessibilityEvent): void;
					public onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
					public filter(child: android.view.View): boolean;
					public onRequestSendAccessibilityEvent(host: android.view.ViewGroup, child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
					public onInitializeAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
					public onRequestSendAccessibilityEvent(param0: android.view.ViewGroup, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
				}
				export type AccessibilityDelegate = androidxslidingpanelayoutwidgetSlidingPaneLayoutAccessibilityDelegate
				export class DisableLayerRunnable extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.slidingpanelayout.widget.SlidingPaneLayout.DisableLayerRunnable>;
					public run(): void;
				}
				export class DragHelperCallback extends androidx.customview.widget.ViewDragHelper.Callback {
					public static class: java.lang.Class<androidx.slidingpanelayout.widget.SlidingPaneLayout.DragHelperCallback>;
					public tryCaptureView(child: android.view.View, pointerId: number): boolean;
					public onViewReleased(releasedChild: android.view.View, xvel: number, yvel: number): void;
					public onViewPositionChanged(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public clampViewPositionVertical(param0: android.view.View, param1: number, param2: number): number;
					public clampViewPositionVertical(child: android.view.View, top: number, dy: number): number;
					public onViewCaptured(capturedChild: android.view.View, activePointerId: number): void;
					public getViewHorizontalDragRange(child: android.view.View): number;
					public onEdgeTouched(param0: number, param1: number): void;
					public onViewPositionChanged(changedView: android.view.View, left: number, top: number, dx: number, dy: number): void;
					public getViewHorizontalDragRange(param0: android.view.View): number;
					public onEdgeDragStarted(param0: number, param1: number): void;
					public onEdgeDragStarted(edgeFlags: number, pointerId: number): void;
					public clampViewPositionHorizontal(param0: android.view.View, param1: number, param2: number): number;
					public onViewDragStateChanged(param0: number): void;
					public onEdgeTouched(edgeFlags: number, pointerId: number): void;
					public onViewReleased(param0: android.view.View, param1: number, param2: number): void;
					public clampViewPositionHorizontal(child: android.view.View, left: number, dx: number): number;
					public tryCaptureView(param0: android.view.View, param1: number): boolean;
					public onViewCaptured(param0: android.view.View, param1: number): void;
					public onViewDragStateChanged(state: number): void;
				}
				export class LayoutParams extends android.view.ViewGroup.MarginLayoutParams {
					public static class: java.lang.Class<androidx.slidingpanelayout.widget.SlidingPaneLayout.LayoutParams>;
					public weight: number;
					public constructor(source: android.view.ViewGroup.MarginLayoutParams);
					public constructor();
					public constructor(c: android.content.Context, attrs: android.util.AttributeSet);
					public constructor(source: androidx.slidingpanelayout.widget.SlidingPaneLayout.LayoutParams);
					public constructor(source: android.view.ViewGroup.LayoutParams);
					public constructor(width: number, height: number);
				}
				export class PanelSlideListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.slidingpanelayout.widget.SlidingPaneLayout.PanelSlideListener>;
					/**
					 * Constructs a new instance of the androidx.slidingpanelayout.widget.SlidingPaneLayout$PanelSlideListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPanelSlide(param0: android.view.View, param1: number): void;
						onPanelOpened(param0: android.view.View): void;
						onPanelClosed(param0: android.view.View): void;
					});
					public constructor();
					public onPanelOpened(param0: android.view.View): void;
					public onPanelClosed(param0: android.view.View): void;
					public onPanelSlide(param0: android.view.View, param1: number): void;
				}
				export class SavedState extends androidx.customview.view.AbsSavedState {
					public static class: java.lang.Class<androidx.slidingpanelayout.widget.SlidingPaneLayout.SavedState>;
					public static CREATOR: android.os.Parcelable.Creator<androidx.slidingpanelayout.widget.SlidingPaneLayout.SavedState>;
					public describeContents(): number;
					public writeToParcel(out: android.os.Parcel, flags: number): void;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
				export class SimplePanelSlideListener extends java.lang.Object implements androidx.slidingpanelayout.widget.SlidingPaneLayout.PanelSlideListener {
					public static class: java.lang.Class<androidx.slidingpanelayout.widget.SlidingPaneLayout.SimplePanelSlideListener>;
					public onPanelOpened(param0: android.view.View): void;
					public onPanelOpened(panel: android.view.View): void;
					public constructor();
					public onPanelClosed(param0: android.view.View): void;
					public onPanelSlide(param0: android.view.View, param1: number): void;
					public onPanelSlide(panel: android.view.View, slideOffset: number): void;
					public onPanelClosed(panel: android.view.View): void;
				}
				export class TouchBlocker extends android.widget.FrameLayout {
					public static class: java.lang.Class<androidx.slidingpanelayout.widget.SlidingPaneLayout.TouchBlocker>;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
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
					public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
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
					public onTouchEvent(event: android.view.MotionEvent): boolean;
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
					public onGenericMotionEvent(event: android.view.MotionEvent): boolean;
					public focusableViewAvailable(param0: android.view.View): void;
					public focusSearch(direction: number): android.view.View;
					public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				}
			}
		}
	}
}

//Generics information:

