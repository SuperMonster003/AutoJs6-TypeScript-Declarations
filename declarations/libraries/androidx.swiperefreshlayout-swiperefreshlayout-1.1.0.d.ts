declare module androidx {
	export module swiperefreshlayout {
		export module widget {
			export class CircleImageView extends android.widget.ImageView {
				public static class: java.lang.Class<androidx.swiperefreshlayout.widget.CircleImageView>;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public onAnimationEnd(): void;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public setBackgroundColor(color: number): void;
				public invalidateDrawable(dr: android.graphics.drawable.Drawable): void;
				public setAnimationListener(listener: android.view.animation.Animation.AnimationListener): void;
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
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public getBackgroundColor(): number;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public onAnimationStart(): void;
			}
			export module CircleImageView {
				export class OvalShadow extends android.graphics.drawable.shapes.OvalShape {
					public static class: java.lang.Class<androidx.swiperefreshlayout.widget.CircleImageView.OvalShadow>;
					public onResize(width: number, height: number): void;
					public draw(canvas: android.graphics.Canvas, paint: android.graphics.Paint): void;
				}
			}
		}
	}
}

declare module androidx {
	export module swiperefreshlayout {
		export module widget {
			export class CircularProgressDrawable extends android.graphics.drawable.Drawable implements android.graphics.drawable.Animatable {
				public static class: java.lang.Class<androidx.swiperefreshlayout.widget.CircularProgressDrawable>;
				public static LARGE: number;
				public static DEFAULT: number;
				public getArrowWidth(): number;
				public getEndTrim(): number;
				public setStrokeCap(strokeCap: android.graphics.Paint.Cap): void;
				public getArrowEnabled(): boolean;
				public getStrokeWidth(): number;
				public setColorFilter(color: number, mode: android.graphics.PorterDuff.Mode): void;
				public draw(canvas: android.graphics.Canvas): void;
				public getStartTrim(): number;
				public getAlpha(): number;
				public setBackgroundColor(color: number): void;
				public constructor();
				public setStrokeWidth(strokeWidth: number): void;
				public setColorFilter(colorFilter: android.graphics.ColorFilter): void;
				public start(): void;
				public getArrowScale(): number;
				public setArrowScale(scale: number): void;
				public setCenterRadius(centerRadius: number): void;
				public setColorFilter(param0: android.graphics.ColorFilter): void;
				public isRunning(): boolean;
				public getCenterRadius(): number;
				public getStrokeCap(): android.graphics.Paint.Cap;
				public getArrowHeight(): number;
				public setAlpha(alpha: number): void;
				public draw(param0: android.graphics.Canvas): void;
				public setColorSchemeColors(...colors: number[]): void;
				public constructor(context: android.content.Context);
				public setArrowDimensions(width: number, height: number): void;
				public setStyle(size: number): void;
				public setArrowEnabled(show: boolean): void;
				public setAlpha(param0: number): void;
				public getBackgroundColor(): number;
				public getColorSchemeColors(): number[];
				public stop(): void;
				public getProgressRotation(): number;
				public setProgressRotation(rotation: number): void;
				public getOpacity(): number;
				public setStartEndTrim(start: number, end: number): void;
			}
			export module CircularProgressDrawable {
				export class ProgressDrawableSize extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.swiperefreshlayout.widget.CircularProgressDrawable.ProgressDrawableSize>;
					/**
					 * Constructs a new instance of the androidx.swiperefreshlayout.widget.CircularProgressDrawable$ProgressDrawableSize interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export class Ring extends java.lang.Object {
					public static class: java.lang.Class<androidx.swiperefreshlayout.widget.CircularProgressDrawable.Ring>;
				}
			}
		}
	}
}

declare module androidx {
	export module swiperefreshlayout {
		export module widget {
			export class SwipeRefreshLayout extends android.view.ViewGroup implements androidx.core.view.NestedScrollingParent3, androidx.core.view.NestedScrollingParent2, androidx.core.view.NestedScrollingChild3, androidx.core.view.NestedScrollingChild2, androidx.core.view.NestedScrollingParent, androidx.core.view.NestedScrollingChild {
				public static class: java.lang.Class<androidx.swiperefreshlayout.widget.SwipeRefreshLayout>;
				public static LARGE: number;
				public static DEFAULT: number;
				public static DEFAULT_SLINGSHOT_DISTANCE: number;
				public mFrom: number;
				public mOriginalOffsetTop: number;
				public setNestedScrollingEnabled(enabled: boolean): void;
				public addView(child: android.view.View, width: number, height: number): void;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number[]): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number, param3: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				/** @deprecated */
				public setProgressBackgroundColor(colorRes: number): void;
				public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[]): boolean;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public startNestedScroll(axes: number, type: number): boolean;
				public onStopNestedScroll(param0: android.view.View, param1: number): void;
				/** @deprecated */
				public setLegacyRequestDisallowInterceptTouchEventEnabled(enabled: boolean): void;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number, consumed: number[]): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public onInterceptTouchEvent(ev: android.view.MotionEvent): boolean;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[], type: number): void;
				public stopNestedScroll(param0: number): void;
				public setColorSchemeColors(...colors: number[]): void;
				public dispatchNestedPreScroll(dx: number, dy: number, consumed: number[], offsetInWindow: number[], type: number): boolean;
				public constructor(context: android.content.Context);
				public dispatchNestedPreScroll(dx: number, dy: number, consumed: number[], offsetInWindow: number[]): boolean;
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: number[]): boolean;
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public getProgressViewEndOffset(): number;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public onStopNestedScroll(target: android.view.View, type: number): void;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: number[], type: number): boolean;
				public onStopNestedScroll(target: android.view.View): void;
				public setEnabled(enabled: boolean): void;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public dispatchNestedFling(velocityX: number, velocityY: number, consumed: boolean): boolean;
				public dispatchNestedPreScroll(param0: number, param1: number, param2: number[], param3: number[]): boolean;
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public getProgressCircleDiameter(): number;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[], param5: number): boolean;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public hasNestedScrollingParent(type: number): boolean;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public dispatchNestedPreFling(velocityX: number, velocityY: number): boolean;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[], param5: number, param6: number[]): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public stopNestedScroll(type: number): void;
				public dispatchNestedPreScroll(param0: number, param1: number, param2: number[], param3: number[], param4: number): boolean;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public addView(child: android.view.View): void;
				public dispatchNestedPreFling(param0: number, param1: number): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public getProgressViewStartOffset(): number;
				public addView(child: android.view.View, index: number): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, axes: number, type: number): boolean;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public setProgressBackgroundColorSchemeResource(colorRes: number): void;
				public setOnRefreshListener(listener: androidx.swiperefreshlayout.widget.SwipeRefreshLayout.OnRefreshListener): void;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public setOnChildScrollUpCallback(callback: androidx.swiperefreshlayout.widget.SwipeRefreshLayout.OnChildScrollUpCallback): void;
				public onStopNestedScroll(child: android.view.View): void;
				public startNestedScroll(axes: number): boolean;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public stopNestedScroll(): void;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[], param4: number): void;
				/** @deprecated */
				public setColorScheme(...colors: number[]): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public setSize(size: number): void;
				public isNestedScrollingEnabled(): boolean;
				public clearChildFocus(param0: android.view.View): void;
				public setColorSchemeResources(...colorResIds: number[]): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public setDistanceToTriggerSync(distance: number): void;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number, param3: number): boolean;
				public requestFitSystemWindows(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getNestedScrollAxes(): number;
				public isRefreshing(): boolean;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public setSlingshotDistance(slingshotDistance: number): void;
				public focusSearch(direction: number): android.view.View;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public startNestedScroll(param0: number): boolean;
				public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
				public focusableViewAvailable(param0: android.view.View): void;
				public onDetachedFromWindow(): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public onTouchEvent(event: android.view.MotionEvent): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public requestDisallowInterceptTouchEvent(b: boolean): void;
				public startNestedScroll(param0: number, param1: number): boolean;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public onRestoreInstanceState(state: android.os.Parcelable): void;
				public canResolveTextAlignment(): boolean;
				public setProgressViewOffset(scale: boolean, start: number, end: number): void;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public setNestedScrollingEnabled(param0: boolean): void;
				public removeView(view: android.view.View): void;
				public requestLayout(): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public canChildScrollUp(): boolean;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public onTouchEvent(ev: android.view.MotionEvent): boolean;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public onStopNestedScroll(param0: android.view.View): void;
				public setProgressViewEndTarget(scale: boolean, end: number): void;
				public setRefreshing(refreshing: boolean): void;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number, type: number): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public getChildDrawingOrder(childCount: number, i: number): number;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public canResolveLayoutDirection(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public hasNestedScrollingParent(param0: number): boolean;
				public hasNestedScrollingParent(): boolean;
				public setProgressBackgroundColorSchemeColor(color: number): void;
				public onSaveInstanceState(): android.os.Parcelable;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public dispatchNestedScroll(dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, offsetInWindow: number[], type: number, consumed: number[]): void;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
			}
			export module SwipeRefreshLayout {
				export class OnChildScrollUpCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.swiperefreshlayout.widget.SwipeRefreshLayout.OnChildScrollUpCallback>;
					/**
					 * Constructs a new instance of the androidx.swiperefreshlayout.widget.SwipeRefreshLayout$OnChildScrollUpCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						canChildScrollUp(param0: androidx.swiperefreshlayout.widget.SwipeRefreshLayout, param1: android.view.View): boolean;
					});
					public constructor();
					public canChildScrollUp(param0: androidx.swiperefreshlayout.widget.SwipeRefreshLayout, param1: android.view.View): boolean;
				}
				export class OnRefreshListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.swiperefreshlayout.widget.SwipeRefreshLayout.OnRefreshListener>;
					/**
					 * Constructs a new instance of the androidx.swiperefreshlayout.widget.SwipeRefreshLayout$OnRefreshListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onRefresh(): void;
					});
					public constructor();
					public onRefresh(): void;
				}
				export class SavedState extends android.view.View.BaseSavedState {
					public static class: java.lang.Class<androidx.swiperefreshlayout.widget.SwipeRefreshLayout.SavedState>;
					public static CREATOR: android.os.Parcelable.Creator<androidx.swiperefreshlayout.widget.SwipeRefreshLayout.SavedState>;
					public describeContents(): number;
					public writeToParcel(out: android.os.Parcel, flags: number): void;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

//Generics information:

