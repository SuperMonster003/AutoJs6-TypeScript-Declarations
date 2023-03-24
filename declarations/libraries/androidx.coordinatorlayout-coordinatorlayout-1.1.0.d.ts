declare module androidx {
	export module coordinatorlayout {
		export module widget {
			export class CoordinatorLayout extends android.view.ViewGroup implements androidx.core.view.NestedScrollingParent2, androidx.core.view.NestedScrollingParent3 {
				public static class: java.lang.Class<androidx.coordinatorlayout.widget.CoordinatorLayout>;
				public addView(child: android.view.View, width: number, height: number): void;
				public generateLayoutParams(p: android.view.ViewGroup.LayoutParams): androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number, param3: number): void;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number[]): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public onStopNestedScroll(param0: android.view.View, param1: number): void;
				public getSuggestedMinimumHeight(): number;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public getDependents(child: android.view.View): java.util.List<android.view.View>;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number, consumed: number[]): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public onInterceptTouchEvent(ev: android.view.MotionEvent): boolean;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public setOnHierarchyChangeListener(onHierarchyChangeListener: android.view.ViewGroup.OnHierarchyChangeListener): void;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[], type: number): void;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				public onDraw(canvas: android.graphics.Canvas): void;
				public generateLayoutParams(attrs: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
				public constructor(context: android.content.Context);
				public getDependencies(child: android.view.View): java.util.List<android.view.View>;
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public setVisibility(visibility: number): void;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public drawChild(canvas: android.graphics.Canvas, child: android.view.View, drawingTime: number): boolean;
				public onStopNestedScroll(target: android.view.View, type: number): void;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public dispatchDependentViewsChanged(view: android.view.View): void;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public onStopNestedScroll(target: android.view.View): void;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isPointInChildBounds(child: android.view.View, x: number, y: number): boolean;
				public drawableStateChanged(): void;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, nestedScrollAxes: number): void;
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public onDraw(c: android.graphics.Canvas): void;
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
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, axes: number, type: number): boolean;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public getSuggestedMinimumWidth(): number;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[], param4: number): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public setOnHierarchyChangeListener(listener: android.view.ViewGroup.OnHierarchyChangeListener): void;
				public onAttachedToWindow(): void;
				public clearChildFocus(param0: android.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number, param3: number): boolean;
				public requestFitSystemWindows(): void;
				public checkLayoutParams(p: android.view.ViewGroup.LayoutParams): boolean;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setStatusBarBackgroundColor(color: number): void;
				public getNestedScrollAxes(): number;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public verifyDrawable(who: android.graphics.drawable.Drawable): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public doViewsOverlap(first: android.view.View, second: android.view.View): boolean;
				public focusSearch(direction: number): android.view.View;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public onDetachedFromWindow(): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public onTouchEvent(event: android.view.MotionEvent): boolean;
				public getLastWindowInsets(): androidx.core.view.WindowInsetsCompat;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public generateDefaultLayoutParams(): androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams;
				public onRestoreInstanceState(state: android.os.Parcelable): void;
				public canResolveTextAlignment(): boolean;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public generateLayoutParams(attrs: android.util.AttributeSet): androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams;
				public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
				public removeView(view: android.view.View): void;
				public setFitsSystemWindows(fitSystemWindows: boolean): void;
				public generateLayoutParams(p: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
				public requestLayout(): void;
				public setStatusBarBackground(bg: android.graphics.drawable.Drawable): void;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, nestedScrollAxes: number, type: number): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public onTouchEvent(ev: android.view.MotionEvent): boolean;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public setStatusBarBackgroundResource(resId: number): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public onStopNestedScroll(param0: android.view.View): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public canResolveLayoutDirection(): boolean;
				public onLayoutChild(child: android.view.View, layoutDirection: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public onMeasureChild(child: android.view.View, parentWidthMeasureSpec: number, widthUsed: number, parentHeightMeasureSpec: number, heightUsed: number): void;
				public getStatusBarBackground(): android.graphics.drawable.Drawable;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public onSaveInstanceState(): android.os.Parcelable;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
			}
			export module CoordinatorLayout {
				export class AttachedBehavior extends java.lang.Object {
					public static class: java.lang.Class<androidx.coordinatorlayout.widget.CoordinatorLayout.AttachedBehavior>;
					/**
					 * Constructs a new instance of the androidx.coordinatorlayout.widget.CoordinatorLayout$AttachedBehavior interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getBehavior(): androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any>;
					});
					public constructor();
					public getBehavior(): androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any>;
				}
				export abstract class Behavior<V>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any>>;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public static getTag(child: android.view.View): any;
					public onNestedScrollAccepted(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, directTargetChild: android.view.View, target: android.view.View, axes: number, type: number): void;
					public onNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number, consumed: number[]): void;
					public static setTag(child: android.view.View, tag: any): void;
					public getScrimColor(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V): number;
					public onStartNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, directTargetChild: android.view.View, target: android.view.View, axes: number, type: number): boolean;
					/** @deprecated */
					public onNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public layoutDependsOn(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, dependency: android.view.View): boolean;
					public onRestoreInstanceState(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, state: android.os.Parcelable): void;
					public constructor();
					public getScrimOpacity(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V): number;
					public onStopNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, target: android.view.View, type: number): void;
					/** @deprecated */
					public onStartNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, directTargetChild: android.view.View, target: android.view.View, axes: number): boolean;
					/** @deprecated */
					public onNestedPreScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, target: android.view.View, dx: number, dy: number, consumed: number[]): void;
					public onApplyWindowInsets(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, insets: androidx.core.view.WindowInsetsCompat): androidx.core.view.WindowInsetsCompat;
					public onNestedPreScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, target: android.view.View, dx: number, dy: number, consumed: number[], type: number): void;
					/** @deprecated */
					public onNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number): void;
					public onAttachedToLayoutParams(params: androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams): void;
					public blocksInteractionBelow(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V): boolean;
					public onTouchEvent(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, ev: android.view.MotionEvent): boolean;
					public onSaveInstanceState(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V): android.os.Parcelable;
					public onDependentViewChanged(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, dependency: android.view.View): boolean;
					public onDetachedFromLayoutParams(): void;
					public onInterceptTouchEvent(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, ev: android.view.MotionEvent): boolean;
					public onMeasureChild(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, parentWidthMeasureSpec: number, widthUsed: number, parentHeightMeasureSpec: number, heightUsed: number): boolean;
					public onNestedPreFling(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, target: android.view.View, velocityX: number, velocityY: number): boolean;
					/** @deprecated */
					public onStopNestedScroll(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, target: android.view.View): void;
					public onNestedFling(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public onLayoutChild(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, layoutDirection: number): boolean;
					/** @deprecated */
					public onNestedScrollAccepted(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, directTargetChild: android.view.View, target: android.view.View, axes: number): void;
					public getInsetDodgeRect(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, rect: android.graphics.Rect): boolean;
					public onRequestChildRectangleOnScreen(coordinatorLayout: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, rectangle: android.graphics.Rect, immediate: boolean): boolean;
					public onDependentViewRemoved(parent: androidx.coordinatorlayout.widget.CoordinatorLayout, child: V, dependency: android.view.View): void;
				}
				export class DefaultBehavior extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.coordinatorlayout.widget.CoordinatorLayout.DefaultBehavior>;
					/**
					 * Constructs a new instance of the androidx.coordinatorlayout.widget.CoordinatorLayout$DefaultBehavior interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): java.lang.Class<any>;
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public value(): java.lang.Class<any>;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
				export class DispatchChangeEvent extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.coordinatorlayout.widget.CoordinatorLayout.DispatchChangeEvent>;
					/**
					 * Constructs a new instance of the androidx.coordinatorlayout.widget.CoordinatorLayout$DispatchChangeEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export class HierarchyChangeListener extends java.lang.Object implements android.view.ViewGroup.OnHierarchyChangeListener {
					public static class: java.lang.Class<androidx.coordinatorlayout.widget.CoordinatorLayout.HierarchyChangeListener>;
					public onChildViewAdded(parent: android.view.View, child: android.view.View): void;
					public onChildViewRemoved(parent: android.view.View, child: android.view.View): void;
					public onChildViewAdded(param0: android.view.View, param1: android.view.View): void;
					public onChildViewRemoved(param0: android.view.View, param1: android.view.View): void;
				}
				export class LayoutParams extends android.view.ViewGroup.MarginLayoutParams {
					public static class: java.lang.Class<androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams>;
					public gravity: number;
					public anchorGravity: number;
					public keyline: number;
					public insetEdge: number;
					public dodgeInsetEdges: number;
					public constructor(p: androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams);
					public setBehavior(behavior: androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any>): void;
					public constructor(source: android.view.ViewGroup.MarginLayoutParams);
					public constructor(p: android.view.ViewGroup.MarginLayoutParams);
					public constructor(c: android.content.Context, attrs: android.util.AttributeSet);
					public getAnchorId(): number;
					public constructor(source: android.view.ViewGroup.LayoutParams);
					public getBehavior(): androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<any>;
					public constructor(width: number, height: number);
					public constructor(p: android.view.ViewGroup.LayoutParams);
					public setAnchorId(id: number): void;
				}
				export class OnPreDrawListener extends java.lang.Object implements android.view.ViewTreeObserver.OnPreDrawListener {
					public static class: java.lang.Class<androidx.coordinatorlayout.widget.CoordinatorLayout.OnPreDrawListener>;
					public onPreDraw(): boolean;
				}
				export class SavedState extends androidx.customview.view.AbsSavedState {
					public static class: java.lang.Class<androidx.coordinatorlayout.widget.CoordinatorLayout.SavedState>;
					public static CREATOR: android.os.Parcelable.Creator<androidx.coordinatorlayout.widget.CoordinatorLayout.SavedState>;
					public constructor(param0: android.os.Parcel);
					public constructor(superState: android.os.Parcelable);
					public constructor(param0: android.os.Parcelable);
					public describeContents(): number;
					public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
					public writeToParcel(dest: android.os.Parcel, flags: number): void;
					public constructor(source: android.os.Parcel, loader: java.lang.ClassLoader);
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
				export class ViewElevationComparator extends java.util.Comparator<android.view.View> {
					public static class: java.lang.Class<androidx.coordinatorlayout.widget.CoordinatorLayout.ViewElevationComparator>;
					public compare(param0: any, param1: any): number;
					public equals(obj: any): boolean;
					public static nullsFirst(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public thenComparing(other: java.util.Comparator<any>): java.util.Comparator<any>;
					public static reverseOrder(): java.util.Comparator<any>;
					public static comparingDouble(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static nullsLast(comparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public static comparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public thenComparing(keyExtractor: any /* any*/, keyComparator: java.util.Comparator<any>): java.util.Comparator<any>;
					public equals(param0: any): boolean;
					public compare(lhs: android.view.View, rhs: android.view.View): number;
					public reversed(): java.util.Comparator<any>;
					public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static naturalOrder(): java.util.Comparator<any>;
				}
			}
		}
	}
}

declare module androidx {
	export module coordinatorlayout {
		export module widget {
			export class DirectedAcyclicGraph<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.coordinatorlayout.widget.DirectedAcyclicGraph<any>>;
				public hasOutgoingEdges(node: T): boolean;
				public clear(): void;
				public getSortedList(): java.util.ArrayList<T>;
				public addNode(node: T): void;
				public getOutgoingEdges(node: T): java.util.List<T>;
				public addEdge(node: T, incomingEdge: T): void;
				public getIncomingEdges(node: T): java.util.List<any>;
				public contains(node: T): boolean;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module coordinatorlayout {
		export module widget {
			export class ViewGroupUtils extends java.lang.Object {
				public static class: java.lang.Class<androidx.coordinatorlayout.widget.ViewGroupUtils>;
				public static getDescendantRect(parent: android.view.ViewGroup, descendant: android.view.View, out: android.graphics.Rect): void;
			}
		}
	}
}

//Generics information:
//androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior:1
//androidx.coordinatorlayout.widget.DirectedAcyclicGraph:1

