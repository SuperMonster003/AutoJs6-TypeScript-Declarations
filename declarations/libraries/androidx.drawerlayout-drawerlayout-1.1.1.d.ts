declare module androidx {
	export module drawerlayout {
		export module widget {
			export class DrawerLayout extends android.view.ViewGroup implements androidx.customview.widget.Openable {
				public static class: java.lang.Class<androidx.drawerlayout.widget.DrawerLayout>;
				public static STATE_IDLE: number;
				public static STATE_DRAGGING: number;
				public static STATE_SETTLING: number;
				public static LOCK_MODE_UNLOCKED: number;
				public static LOCK_MODE_LOCKED_CLOSED: number;
				public static LOCK_MODE_LOCKED_OPEN: number;
				public static LOCK_MODE_UNDEFINED: number;
				public addView(child: android.view.View, width: number, height: number): void;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public setStatusBarBackground(resId: number): void;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public onInterceptTouchEvent(ev: android.view.MotionEvent): boolean;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				public onDraw(canvas: android.graphics.Canvas): void;
				public generateLayoutParams(attrs: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
				public constructor(context: android.content.Context);
				public getDrawerLockMode(edgeGravity: number): number;
				public closeDrawer(drawerView: android.view.View): void;
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public setDrawerShadow(resId: number, gravity: number): void;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public addFocusables(views: java.util.ArrayList<android.view.View>, direction: number, focusableMode: number): void;
				public drawChild(canvas: android.graphics.Canvas, child: android.view.View, drawingTime: number): boolean;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public setDrawerLockMode(lockMode: number, edgeGravity: number): void;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isDrawerOpen(drawerGravity: number): boolean;
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public onRtlPropertiesChanged(layoutDirection: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public getDrawerElevation(): number;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public setScrimColor(color: number): void;
				public onDraw(c: android.graphics.Canvas): void;
				public removeDrawerListener(listener: androidx.drawerlayout.widget.DrawerLayout.DrawerListener): void;
				public closeDrawer(drawerView: android.view.View, animate: boolean): void;
				public addFocusables(views: java.util.ArrayList<android.view.View>, direction: number): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public closeDrawer(gravity: number, animate: boolean): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public addView(child: android.view.View): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public closeDrawer(gravity: number): void;
				public isDrawerOpen(drawer: android.view.View): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public open(): void;
				public openDrawer(gravity: number): void;
				public addView(child: android.view.View, index: number): void;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public isDrawerVisible(drawer: android.view.View): boolean;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public computeScroll(): void;
				public onStopNestedScroll(child: android.view.View): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public onAttachedToWindow(): void;
				public clearChildFocus(param0: android.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public openDrawer(gravity: number, animate: boolean): void;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public setDrawerLockMode(lockMode: number): void;
				public getStatusBarBackgroundDrawable(): android.graphics.drawable.Drawable;
				/** @deprecated */
				public setDrawerListener(listener: androidx.drawerlayout.widget.DrawerLayout.DrawerListener): void;
				public sendAccessibilityEvent(eventType: number): void;
				public isDrawerVisible(drawerGravity: number): boolean;
				public requestFitSystemWindows(): void;
				public checkLayoutParams(p: android.view.ViewGroup.LayoutParams): boolean;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getDrawerLockMode(drawerView: android.view.View): number;
				public setStatusBarBackgroundColor(color: number): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public close(): void;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public setDrawerElevation(elevation: number): void;
				public focusSearch(direction: number): android.view.View;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public openDrawer(drawerView: android.view.View): void;
				public onDetachedFromWindow(): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public onTouchEvent(event: android.view.MotionEvent): boolean;
				public setChildInsets(insets: any, draw: boolean): void;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public setDrawerLockMode(lockMode: number, drawerView: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public onRestoreInstanceState(state: android.os.Parcelable): void;
				public canResolveTextAlignment(): boolean;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
				public removeView(view: android.view.View): void;
				public addDrawerListener(listener: androidx.drawerlayout.widget.DrawerLayout.DrawerListener): void;
				public requestLayout(): void;
				public generateLayoutParams(p: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
				public setStatusBarBackground(bg: android.graphics.drawable.Drawable): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public setDrawerShadow(shadowDrawable: android.graphics.drawable.Drawable, gravity: number): void;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public dispatchGenericMotionEvent(event: android.view.MotionEvent): boolean;
				public onTouchEvent(ev: android.view.MotionEvent): boolean;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public getDrawerTitle(edgeGravity: number): string;
				public closeDrawers(): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public onStopNestedScroll(param0: android.view.View): void;
				public setDrawerTitle(edgeGravity: number, title: string): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public openDrawer(drawerView: android.view.View, animate: boolean): void;
				public isOpen(): boolean;
				public onSaveInstanceState(): android.os.Parcelable;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
			export module DrawerLayout {
				export class androidxdrawerlayoutwidgetDrawerLayoutAccessibilityDelegate extends androidx.core.view.AccessibilityDelegateCompat {
					public static class: java.lang.Class<androidx.drawerlayout.widget.DrawerLayout.AccessibilityDelegate>;
					public onInitializeAccessibilityNodeInfo(host: android.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
					public dispatchPopulateAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
					public onInitializeAccessibilityEvent(host: android.view.View, event: android.view.accessibility.AccessibilityEvent): void;
					public onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
					public dispatchPopulateAccessibilityEvent(host: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
					public onRequestSendAccessibilityEvent(host: android.view.ViewGroup, child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
					public onInitializeAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
					public onRequestSendAccessibilityEvent(param0: android.view.ViewGroup, param1: android.view.View, param2: android.view.accessibility.AccessibilityEvent): boolean;
				}
				export type AccessibilityDelegate = androidxdrawerlayoutwidgetDrawerLayoutAccessibilityDelegate
				export class ChildAccessibilityDelegate extends androidx.core.view.AccessibilityDelegateCompat {
					public static class: java.lang.Class<androidx.drawerlayout.widget.DrawerLayout.ChildAccessibilityDelegate>;
					public onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
					public onInitializeAccessibilityNodeInfo(child: android.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
				}
				export class DrawerListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.drawerlayout.widget.DrawerLayout.DrawerListener>;
					/**
					 * Constructs a new instance of the androidx.drawerlayout.widget.DrawerLayout$DrawerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDrawerSlide(param0: android.view.View, param1: number): void;
						onDrawerOpened(param0: android.view.View): void;
						onDrawerClosed(param0: android.view.View): void;
						onDrawerStateChanged(param0: number): void;
					});
					public constructor();
					public onDrawerOpened(param0: android.view.View): void;
					public onDrawerClosed(param0: android.view.View): void;
					public onDrawerSlide(param0: android.view.View, param1: number): void;
					public onDrawerStateChanged(param0: number): void;
				}
				export class LayoutParams extends android.view.ViewGroup.MarginLayoutParams {
					public static class: java.lang.Class<androidx.drawerlayout.widget.DrawerLayout.LayoutParams>;
					public gravity: number;
					public constructor(source: android.view.ViewGroup.MarginLayoutParams);
					public constructor(c: android.content.Context, attrs: android.util.AttributeSet);
					public constructor(source: androidx.drawerlayout.widget.DrawerLayout.LayoutParams);
					public constructor(width: number, height: number, gravity: number);
					public constructor(source: android.view.ViewGroup.LayoutParams);
					public constructor(width: number, height: number);
				}
				export class SavedState extends androidx.customview.view.AbsSavedState {
					public static class: java.lang.Class<androidx.drawerlayout.widget.DrawerLayout.SavedState>;
					public static CREATOR: android.os.Parcelable.Creator<androidx.drawerlayout.widget.DrawerLayout.SavedState>;
					public constructor(param0: android.os.Parcel);
					public constructor(superState: android.os.Parcelable);
					public constructor(in: android.os.Parcel, loader: java.lang.ClassLoader);
					public constructor(param0: android.os.Parcelable);
					public describeContents(): number;
					public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
					public writeToParcel(dest: android.os.Parcel, flags: number): void;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
				export abstract class SimpleDrawerListener extends java.lang.Object implements androidx.drawerlayout.widget.DrawerLayout.DrawerListener {
					public static class: java.lang.Class<androidx.drawerlayout.widget.DrawerLayout.SimpleDrawerListener>;
					public onDrawerStateChanged(newState: number): void;
					public onDrawerSlide(drawerView: android.view.View, slideOffset: number): void;
					public constructor();
					public onDrawerClosed(drawerView: android.view.View): void;
					public onDrawerOpened(drawerView: android.view.View): void;
					public onDrawerOpened(param0: android.view.View): void;
					public onDrawerClosed(param0: android.view.View): void;
					public onDrawerSlide(param0: android.view.View, param1: number): void;
					public onDrawerStateChanged(param0: number): void;
				}
				export class ViewDragCallback extends androidx.customview.widget.ViewDragHelper.Callback {
					public static class: java.lang.Class<androidx.drawerlayout.widget.DrawerLayout.ViewDragCallback>;
					public tryCaptureView(child: android.view.View, pointerId: number): boolean;
					public removeCallbacks(): void;
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
					public onEdgeLock(edgeFlags: number): boolean;
					public onEdgeDragStarted(edgeFlags: number, pointerId: number): void;
					public clampViewPositionHorizontal(param0: android.view.View, param1: number, param2: number): number;
					public onViewDragStateChanged(param0: number): void;
					public onEdgeTouched(edgeFlags: number, pointerId: number): void;
					public onEdgeLock(param0: number): boolean;
					public onViewReleased(param0: android.view.View, param1: number, param2: number): void;
					public clampViewPositionHorizontal(child: android.view.View, left: number, dx: number): number;
					public tryCaptureView(param0: android.view.View, param1: number): boolean;
					public onViewCaptured(param0: android.view.View, param1: number): void;
					public onViewDragStateChanged(state: number): void;
					public setDragger(dragger: androidx.customview.widget.ViewDragHelper): void;
				}
			}
		}
	}
}

//Generics information:

