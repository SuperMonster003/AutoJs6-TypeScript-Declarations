declare module androidx {
	export module cardview {
		export module widget {
			export class CardView extends android.widget.FrameLayout {
				public static class: java.lang.Class<androidx.cardview.widget.CardView>;
				public addView(child: android.view.View, width: number, height: number): void;
				public setMaxCardElevation(maxElevation: number): void;
				public getCardElevation(): number;
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
				public setCardBackgroundColor(color: number): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public setMinimumWidth(minWidth: number): void;
				public constructor(context: android.content.Context);
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public getContentPaddingTop(): number;
				public getPreventCornerOverlap(): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public getRadius(): number;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public setUseCompatPadding(useCompatPadding: boolean): void;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public setContentPadding(left: number, top: number, right: number, bottom: number): void;
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
				public setPadding(left: number, top: number, right: number, bottom: number): void;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public getContentPaddingRight(): number;
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
				public getContentPaddingBottom(): number;
				public getMaxCardElevation(): number;
				public sendAccessibilityEvent(eventType: number): void;
				public requestFitSystemWindows(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public setMinimumHeight(minHeight: number): void;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public focusSearch(direction: number): android.view.View;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public setRadius(radius: number): void;
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
				public setPaddingRelative(start: number, top: number, end: number, bottom: number): void;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public getContentPaddingLeft(): number;
				public removeView(view: android.view.View): void;
				public requestLayout(): void;
				public setPreventCornerOverlap(preventCornerOverlap: boolean): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public setCardElevation(elevation: number): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onStopNestedScroll(param0: android.view.View): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public setCardBackgroundColor(color: android.content.res.ColorStateList): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public getUseCompatPadding(): boolean;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public getCardBackgroundColor(): android.content.res.ColorStateList;
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
	export module cardview {
		export module widget {
			export class CardViewApi17Impl extends androidx.cardview.widget.CardViewBaseImpl {
				public static class: java.lang.Class<androidx.cardview.widget.CardViewApi17Impl>;
				public setRadius(cardView: androidx.cardview.widget.CardViewDelegate, radius: number): void;
				public setMaxElevation(cardView: androidx.cardview.widget.CardViewDelegate, maxElevation: number): void;
				public onCompatPaddingChanged(cardView: androidx.cardview.widget.CardViewDelegate): void;
				public initStatic(): void;
				public getMinHeight(param0: androidx.cardview.widget.CardViewDelegate): number;
				public getMaxElevation(cardView: androidx.cardview.widget.CardViewDelegate): number;
				public getBackgroundColor(cardView: androidx.cardview.widget.CardViewDelegate): android.content.res.ColorStateList;
				public setElevation(cardView: androidx.cardview.widget.CardViewDelegate, elevation: number): void;
				public onPreventCornerOverlapChanged(cardView: androidx.cardview.widget.CardViewDelegate): void;
				public onPreventCornerOverlapChanged(param0: androidx.cardview.widget.CardViewDelegate): void;
				public onCompatPaddingChanged(param0: androidx.cardview.widget.CardViewDelegate): void;
				public updatePadding(param0: androidx.cardview.widget.CardViewDelegate): void;
				public getBackgroundColor(param0: androidx.cardview.widget.CardViewDelegate): android.content.res.ColorStateList;
				public initialize(param0: androidx.cardview.widget.CardViewDelegate, param1: android.content.Context, param2: android.content.res.ColorStateList, param3: number, param4: number, param5: number): void;
				public getRadius(cardView: androidx.cardview.widget.CardViewDelegate): number;
				public setRadius(param0: androidx.cardview.widget.CardViewDelegate, param1: number): void;
				public updatePadding(cardView: androidx.cardview.widget.CardViewDelegate): void;
				public getElevation(cardView: androidx.cardview.widget.CardViewDelegate): number;
				public setBackgroundColor(param0: androidx.cardview.widget.CardViewDelegate, param1: android.content.res.ColorStateList): void;
				public getElevation(param0: androidx.cardview.widget.CardViewDelegate): number;
				public getMinWidth(param0: androidx.cardview.widget.CardViewDelegate): number;
				public setElevation(param0: androidx.cardview.widget.CardViewDelegate, param1: number): void;
				public getMaxElevation(param0: androidx.cardview.widget.CardViewDelegate): number;
				public initialize(cardView: androidx.cardview.widget.CardViewDelegate, context: android.content.Context, backgroundColor: android.content.res.ColorStateList, radius: number, elevation: number, maxElevation: number): void;
				public setMaxElevation(param0: androidx.cardview.widget.CardViewDelegate, param1: number): void;
				public getMinWidth(cardView: androidx.cardview.widget.CardViewDelegate): number;
				public setBackgroundColor(cardView: androidx.cardview.widget.CardViewDelegate, color: android.content.res.ColorStateList): void;
				public getRadius(param0: androidx.cardview.widget.CardViewDelegate): number;
				public getMinHeight(cardView: androidx.cardview.widget.CardViewDelegate): number;
			}
		}
	}
}

declare module androidx {
	export module cardview {
		export module widget {
			export class CardViewApi21Impl extends java.lang.Object implements androidx.cardview.widget.CardViewImpl {
				public static class: java.lang.Class<androidx.cardview.widget.CardViewApi21Impl>;
				public setRadius(cardView: androidx.cardview.widget.CardViewDelegate, radius: number): void;
				public setMaxElevation(cardView: androidx.cardview.widget.CardViewDelegate, maxElevation: number): void;
				public onCompatPaddingChanged(cardView: androidx.cardview.widget.CardViewDelegate): void;
				public initStatic(): void;
				public getMinHeight(param0: androidx.cardview.widget.CardViewDelegate): number;
				public getMaxElevation(cardView: androidx.cardview.widget.CardViewDelegate): number;
				public getBackgroundColor(cardView: androidx.cardview.widget.CardViewDelegate): android.content.res.ColorStateList;
				public setElevation(cardView: androidx.cardview.widget.CardViewDelegate, elevation: number): void;
				public onPreventCornerOverlapChanged(cardView: androidx.cardview.widget.CardViewDelegate): void;
				public onPreventCornerOverlapChanged(param0: androidx.cardview.widget.CardViewDelegate): void;
				public onCompatPaddingChanged(param0: androidx.cardview.widget.CardViewDelegate): void;
				public updatePadding(param0: androidx.cardview.widget.CardViewDelegate): void;
				public getBackgroundColor(param0: androidx.cardview.widget.CardViewDelegate): android.content.res.ColorStateList;
				public initialize(param0: androidx.cardview.widget.CardViewDelegate, param1: android.content.Context, param2: android.content.res.ColorStateList, param3: number, param4: number, param5: number): void;
				public getRadius(cardView: androidx.cardview.widget.CardViewDelegate): number;
				public setRadius(param0: androidx.cardview.widget.CardViewDelegate, param1: number): void;
				public updatePadding(cardView: androidx.cardview.widget.CardViewDelegate): void;
				public getElevation(cardView: androidx.cardview.widget.CardViewDelegate): number;
				public setBackgroundColor(param0: androidx.cardview.widget.CardViewDelegate, param1: android.content.res.ColorStateList): void;
				public getElevation(param0: androidx.cardview.widget.CardViewDelegate): number;
				public getMinWidth(param0: androidx.cardview.widget.CardViewDelegate): number;
				public setElevation(param0: androidx.cardview.widget.CardViewDelegate, param1: number): void;
				public getMaxElevation(param0: androidx.cardview.widget.CardViewDelegate): number;
				public initialize(cardView: androidx.cardview.widget.CardViewDelegate, context: android.content.Context, backgroundColor: android.content.res.ColorStateList, radius: number, elevation: number, maxElevation: number): void;
				public setMaxElevation(param0: androidx.cardview.widget.CardViewDelegate, param1: number): void;
				public getMinWidth(cardView: androidx.cardview.widget.CardViewDelegate): number;
				public setBackgroundColor(cardView: androidx.cardview.widget.CardViewDelegate, color: android.content.res.ColorStateList): void;
				public getRadius(param0: androidx.cardview.widget.CardViewDelegate): number;
				public getMinHeight(cardView: androidx.cardview.widget.CardViewDelegate): number;
			}
		}
	}
}

declare module androidx {
	export module cardview {
		export module widget {
			export class CardViewBaseImpl extends java.lang.Object implements androidx.cardview.widget.CardViewImpl {
				public static class: java.lang.Class<androidx.cardview.widget.CardViewBaseImpl>;
				public setRadius(cardView: androidx.cardview.widget.CardViewDelegate, radius: number): void;
				public onCompatPaddingChanged(cardView: androidx.cardview.widget.CardViewDelegate): void;
				public setMaxElevation(cardView: androidx.cardview.widget.CardViewDelegate, maxElevation: number): void;
				public initStatic(): void;
				public getMinHeight(param0: androidx.cardview.widget.CardViewDelegate): number;
				public getBackgroundColor(cardView: androidx.cardview.widget.CardViewDelegate): android.content.res.ColorStateList;
				public getMaxElevation(cardView: androidx.cardview.widget.CardViewDelegate): number;
				public setElevation(cardView: androidx.cardview.widget.CardViewDelegate, elevation: number): void;
				public onPreventCornerOverlapChanged(cardView: androidx.cardview.widget.CardViewDelegate): void;
				public onPreventCornerOverlapChanged(param0: androidx.cardview.widget.CardViewDelegate): void;
				public onCompatPaddingChanged(param0: androidx.cardview.widget.CardViewDelegate): void;
				public updatePadding(param0: androidx.cardview.widget.CardViewDelegate): void;
				public getBackgroundColor(param0: androidx.cardview.widget.CardViewDelegate): android.content.res.ColorStateList;
				public initialize(param0: androidx.cardview.widget.CardViewDelegate, param1: android.content.Context, param2: android.content.res.ColorStateList, param3: number, param4: number, param5: number): void;
				public getRadius(cardView: androidx.cardview.widget.CardViewDelegate): number;
				public setRadius(param0: androidx.cardview.widget.CardViewDelegate, param1: number): void;
				public updatePadding(cardView: androidx.cardview.widget.CardViewDelegate): void;
				public getElevation(cardView: androidx.cardview.widget.CardViewDelegate): number;
				public setBackgroundColor(param0: androidx.cardview.widget.CardViewDelegate, param1: android.content.res.ColorStateList): void;
				public getElevation(param0: androidx.cardview.widget.CardViewDelegate): number;
				public getMinWidth(param0: androidx.cardview.widget.CardViewDelegate): number;
				public setElevation(param0: androidx.cardview.widget.CardViewDelegate, param1: number): void;
				public getMaxElevation(param0: androidx.cardview.widget.CardViewDelegate): number;
				public initialize(cardView: androidx.cardview.widget.CardViewDelegate, context: android.content.Context, backgroundColor: android.content.res.ColorStateList, radius: number, elevation: number, maxElevation: number): void;
				public setMaxElevation(param0: androidx.cardview.widget.CardViewDelegate, param1: number): void;
				public setBackgroundColor(cardView: androidx.cardview.widget.CardViewDelegate, color: android.content.res.ColorStateList): void;
				public getMinWidth(cardView: androidx.cardview.widget.CardViewDelegate): number;
				public getRadius(param0: androidx.cardview.widget.CardViewDelegate): number;
				public getMinHeight(cardView: androidx.cardview.widget.CardViewDelegate): number;
			}
		}
	}
}

declare module androidx {
	export module cardview {
		export module widget {
			export class CardViewDelegate extends java.lang.Object {
				public static class: java.lang.Class<androidx.cardview.widget.CardViewDelegate>;
				/**
				 * Constructs a new instance of the androidx.cardview.widget.CardViewDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setCardBackground(param0: android.graphics.drawable.Drawable): void;
					getCardBackground(): android.graphics.drawable.Drawable;
					getUseCompatPadding(): boolean;
					getPreventCornerOverlap(): boolean;
					setShadowPadding(param0: number, param1: number, param2: number, param3: number): void;
					setMinWidthHeightInternal(param0: number, param1: number): void;
					getCardView(): android.view.View;
				});
				public constructor();
				public getUseCompatPadding(): boolean;
				public setCardBackground(param0: android.graphics.drawable.Drawable): void;
				public getCardBackground(): android.graphics.drawable.Drawable;
				public setMinWidthHeightInternal(param0: number, param1: number): void;
				public getPreventCornerOverlap(): boolean;
				public getCardView(): android.view.View;
				public setShadowPadding(param0: number, param1: number, param2: number, param3: number): void;
			}
		}
	}
}

declare module androidx {
	export module cardview {
		export module widget {
			export class CardViewImpl extends java.lang.Object {
				public static class: java.lang.Class<androidx.cardview.widget.CardViewImpl>;
				/**
				 * Constructs a new instance of the androidx.cardview.widget.CardViewImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					initialize(param0: androidx.cardview.widget.CardViewDelegate, param1: android.content.Context, param2: android.content.res.ColorStateList, param3: number, param4: number, param5: number): void;
					setRadius(param0: androidx.cardview.widget.CardViewDelegate, param1: number): void;
					getRadius(param0: androidx.cardview.widget.CardViewDelegate): number;
					setElevation(param0: androidx.cardview.widget.CardViewDelegate, param1: number): void;
					getElevation(param0: androidx.cardview.widget.CardViewDelegate): number;
					initStatic(): void;
					setMaxElevation(param0: androidx.cardview.widget.CardViewDelegate, param1: number): void;
					getMaxElevation(param0: androidx.cardview.widget.CardViewDelegate): number;
					getMinWidth(param0: androidx.cardview.widget.CardViewDelegate): number;
					getMinHeight(param0: androidx.cardview.widget.CardViewDelegate): number;
					updatePadding(param0: androidx.cardview.widget.CardViewDelegate): void;
					onCompatPaddingChanged(param0: androidx.cardview.widget.CardViewDelegate): void;
					onPreventCornerOverlapChanged(param0: androidx.cardview.widget.CardViewDelegate): void;
					setBackgroundColor(param0: androidx.cardview.widget.CardViewDelegate, param1: android.content.res.ColorStateList): void;
					getBackgroundColor(param0: androidx.cardview.widget.CardViewDelegate): android.content.res.ColorStateList;
				});
				public constructor();
				public setRadius(param0: androidx.cardview.widget.CardViewDelegate, param1: number): void;
				public setBackgroundColor(param0: androidx.cardview.widget.CardViewDelegate, param1: android.content.res.ColorStateList): void;
				public getElevation(param0: androidx.cardview.widget.CardViewDelegate): number;
				public getMinWidth(param0: androidx.cardview.widget.CardViewDelegate): number;
				public initStatic(): void;
				public getMinHeight(param0: androidx.cardview.widget.CardViewDelegate): number;
				public setElevation(param0: androidx.cardview.widget.CardViewDelegate, param1: number): void;
				public getMaxElevation(param0: androidx.cardview.widget.CardViewDelegate): number;
				public setMaxElevation(param0: androidx.cardview.widget.CardViewDelegate, param1: number): void;
				public onPreventCornerOverlapChanged(param0: androidx.cardview.widget.CardViewDelegate): void;
				public onCompatPaddingChanged(param0: androidx.cardview.widget.CardViewDelegate): void;
				public updatePadding(param0: androidx.cardview.widget.CardViewDelegate): void;
				public getBackgroundColor(param0: androidx.cardview.widget.CardViewDelegate): android.content.res.ColorStateList;
				public initialize(param0: androidx.cardview.widget.CardViewDelegate, param1: android.content.Context, param2: android.content.res.ColorStateList, param3: number, param4: number, param5: number): void;
				public getRadius(param0: androidx.cardview.widget.CardViewDelegate): number;
			}
		}
	}
}

declare module androidx {
	export module cardview {
		export module widget {
			export class RoundRectDrawable extends android.graphics.drawable.Drawable {
				public static class: java.lang.Class<androidx.cardview.widget.RoundRectDrawable>;
				public setColorFilter(color: number, mode: android.graphics.PorterDuff.Mode): void;
				public setColorFilter(cf: android.graphics.ColorFilter): void;
				public draw(canvas: android.graphics.Canvas): void;
				public getOutline(outline: any): void;
				public setTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
				public setAlpha(param0: number): void;
				public onBoundsChange(bounds: android.graphics.Rect): void;
				public onStateChange(state: number[]): boolean;
				public getRadius(): number;
				public getColor(): android.content.res.ColorStateList;
				public setColorFilter(param0: android.graphics.ColorFilter): void;
				public setColor(color: android.content.res.ColorStateList): void;
				public onStateChange(stateSet: number[]): boolean;
				public setAlpha(alpha: number): void;
				public getOpacity(): number;
				public draw(param0: android.graphics.Canvas): void;
				public setTintList(tint: android.content.res.ColorStateList): void;
				public isStateful(): boolean;
			}
		}
	}
}

declare module androidx {
	export module cardview {
		export module widget {
			export class RoundRectDrawableWithShadow extends android.graphics.drawable.Drawable {
				public static class: java.lang.Class<androidx.cardview.widget.RoundRectDrawableWithShadow>;
				public setColorFilter(color: number, mode: android.graphics.PorterDuff.Mode): void;
				public setColorFilter(cf: android.graphics.ColorFilter): void;
				public getPadding(padding: android.graphics.Rect): boolean;
				public draw(canvas: android.graphics.Canvas): void;
				public setAlpha(param0: number): void;
				public onBoundsChange(bounds: android.graphics.Rect): void;
				public onStateChange(state: number[]): boolean;
				public onStateChange(stateSet: number[]): boolean;
				public setColorFilter(param0: android.graphics.ColorFilter): void;
				public setAlpha(alpha: number): void;
				public getOpacity(): number;
				public isStateful(): boolean;
				public draw(param0: android.graphics.Canvas): void;
			}
			export module RoundRectDrawableWithShadow {
				export class RoundRectHelper extends java.lang.Object {
					public static class: java.lang.Class<androidx.cardview.widget.RoundRectDrawableWithShadow.RoundRectHelper>;
					/**
					 * Constructs a new instance of the androidx.cardview.widget.RoundRectDrawableWithShadow$RoundRectHelper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						drawRoundRect(param0: android.graphics.Canvas, param1: android.graphics.RectF, param2: number, param3: android.graphics.Paint): void;
					});
					public constructor();
					public drawRoundRect(param0: android.graphics.Canvas, param1: android.graphics.RectF, param2: number, param3: android.graphics.Paint): void;
				}
			}
		}
	}
}

//Generics information:

