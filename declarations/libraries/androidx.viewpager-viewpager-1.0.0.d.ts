declare module androidx {
	export module viewpager {
		export module widget {
			export abstract class PagerAdapter extends java.lang.Object {
				public static class: java.lang.Class<androidx.viewpager.widget.PagerAdapter>;
				public static POSITION_UNCHANGED: number;
				public static POSITION_NONE: number;
				public isViewFromObject(param0: android.view.View, param1: any): boolean;
				public saveState(): android.os.Parcelable;
				public registerDataSetObserver(observer: android.database.DataSetObserver): void;
				public notifyDataSetChanged(): void;
				public getPageWidth(position: number): number;
				public destroyItem(container: android.view.ViewGroup, position: number, object: any): void;
				public instantiateItem(container: android.view.ViewGroup, position: number): any;
				public getCount(): number;
				/** @deprecated */
				public instantiateItem(container: android.view.View, position: number): any;
				/** @deprecated */
				public startUpdate(container: android.view.View): void;
				public getItemPosition(object: any): number;
				public constructor();
				public unregisterDataSetObserver(observer: android.database.DataSetObserver): void;
				public finishUpdate(container: android.view.ViewGroup): void;
				public setPrimaryItem(container: android.view.ViewGroup, position: number, object: any): void;
				/** @deprecated */
				public finishUpdate(container: android.view.View): void;
				/** @deprecated */
				public destroyItem(container: android.view.View, position: number, object: any): void;
				public restoreState(state: android.os.Parcelable, loader: java.lang.ClassLoader): void;
				public getPageTitle(position: number): string;
				public startUpdate(container: android.view.ViewGroup): void;
				/** @deprecated */
				public setPrimaryItem(container: android.view.View, position: number, object: any): void;
			}
		}
	}
}

declare module androidx {
	export module viewpager {
		export module widget {
			export class PagerTabStrip extends androidx.viewpager.widget.PagerTitleStrip {
				public static class: java.lang.Class<androidx.viewpager.widget.PagerTabStrip>;
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
				public getDrawFullUnderline(): boolean;
				public onDraw(canvas: android.graphics.Canvas): void;
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
				public setBackgroundResource(resid: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public setTextSpacing(textSpacing: number): void;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public setBackgroundColor(color: number): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				public setTextSpacing(spacingPixels: number): void;
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
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public clearChildFocus(param0: android.view.View): void;
				public setTabIndicatorColorResource(resId: number): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public getTabIndicatorColor(): number;
				public sendAccessibilityEvent(eventType: number): void;
				public requestFitSystemWindows(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public setBackgroundResource(resId: number): void;
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
				public onTouchEvent(event: android.view.MotionEvent): boolean;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				/** @deprecated */
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public setBackgroundDrawable(d: android.graphics.drawable.Drawable): void;
				public removeView(view: android.view.View): void;
				public requestLayout(): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public setDrawFullUnderline(drawFull: boolean): void;
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
				public setTabIndicatorColor(color: number): void;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
		}
	}
}

declare module androidx {
	export module viewpager {
		export module widget {
			export class PagerTitleStrip extends android.view.ViewGroup {
				public static class: java.lang.Class<androidx.viewpager.widget.PagerTitleStrip>;
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
				public setTextSize(unit: number, size: number): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				public constructor(context: android.content.Context);
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public getTextSpacing(): number;
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
				public setTextSpacing(spacingPixels: number): void;
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
				public onAttachedToWindow(): void;
				public clearChildFocus(param0: android.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public setGravity(gravity: number): void;
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
				public setNonPrimaryAlpha(alpha: number): void;
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
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public setTextColor(color: number): void;
				public canResolveLayoutDirection(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
			export module PagerTitleStrip {
				export class PageListener extends android.database.DataSetObserver implements androidx.viewpager.widget.ViewPager.OnPageChangeListener, androidx.viewpager.widget.ViewPager.OnAdapterChangeListener {
					public static class: java.lang.Class<androidx.viewpager.widget.PagerTitleStrip.PageListener>;
					public onPageScrollStateChanged(state: number): void;
					public onChanged(): void;
					public onPageSelected(param0: number): void;
					public onPageScrolled(param0: number, param1: number, param2: number): void;
					public onAdapterChanged(param0: androidx.viewpager.widget.ViewPager, param1: androidx.viewpager.widget.PagerAdapter, param2: androidx.viewpager.widget.PagerAdapter): void;
					public onAdapterChanged(viewPager: androidx.viewpager.widget.ViewPager, oldAdapter: androidx.viewpager.widget.PagerAdapter, newAdapter: androidx.viewpager.widget.PagerAdapter): void;
					public onPageScrolled(position: number, positionOffset: number, positionOffsetPixels: number): void;
					public onPageScrollStateChanged(param0: number): void;
					public onPageSelected(position: number): void;
				}
				export class SingleLineAllCapsTransform extends android.text.method.SingleLineTransformationMethod {
					public static class: java.lang.Class<androidx.viewpager.widget.PagerTitleStrip.SingleLineAllCapsTransform>;
					public onFocusChanged(param0: android.view.View, param1: string, param2: boolean, param3: number, param4: android.graphics.Rect): void;
					public getTransformation(source: string, view: android.view.View): string;
					public getTransformation(source: string, v: android.view.View): string;
					public getTransformation(param0: string, param1: android.view.View): string;
					public onFocusChanged(view: android.view.View, sourceText: string, focused: boolean, direction: number, previouslyFocusedRect: android.graphics.Rect): void;
				}
			}
		}
	}
}

declare module androidx {
	export module viewpager {
		export module widget {
			export class ViewPager extends android.view.ViewGroup {
				public static class: java.lang.Class<androidx.viewpager.widget.ViewPager>;
				public static SCROLL_STATE_IDLE: number;
				public static SCROLL_STATE_DRAGGING: number;
				public static SCROLL_STATE_SETTLING: number;
				public addView(child: android.view.View, width: number, height: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public setPageMarginDrawable(d: android.graphics.drawable.Drawable): void;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public setCurrentItem(item: number): void;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public onInterceptTouchEvent(ev: android.view.MotionEvent): boolean;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public addOnAdapterChangeListener(listener: androidx.viewpager.widget.ViewPager.OnAdapterChangeListener): void;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				public onDraw(canvas: android.graphics.Canvas): void;
				public generateLayoutParams(attrs: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
				public constructor(context: android.content.Context);
				public executeKeyEvent(event: android.view.KeyEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public addFocusables(views: java.util.ArrayList<android.view.View>, direction: number, focusableMode: number): void;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public getOffscreenPageLimit(): number;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public drawableStateChanged(): void;
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public isFakeDragging(): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public removeOnAdapterChangeListener(listener: androidx.viewpager.widget.ViewPager.OnAdapterChangeListener): void;
				/** @deprecated */
				public setOnPageChangeListener(listener: androidx.viewpager.widget.ViewPager.OnPageChangeListener): void;
				public draw(canvas: android.graphics.Canvas): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public setPageMarginDrawable(resId: number): void;
				public addFocusables(views: java.util.ArrayList<android.view.View>, direction: number): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public setAdapter(adapter: androidx.viewpager.widget.PagerAdapter): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public canScrollHorizontally(direction: number): boolean;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				public setPageTransformer(reverseDrawingOrder: boolean, transformer: androidx.viewpager.widget.ViewPager.PageTransformer): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public addView(child: android.view.View): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public addView(child: android.view.View, index: number): void;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public fakeDragBy(xOffset: number): void;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public computeScroll(): void;
				public onStopNestedScroll(child: android.view.View): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
				public recomputeViewAttributes(param0: android.view.View): void;
				public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
				public onAttachedToWindow(): void;
				public clearChildFocus(param0: android.view.View): void;
				public onPageScrolled(position: number, offset: number, offsetPixels: number): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public setOffscreenPageLimit(limit: number): void;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public canScroll(v: android.view.View, checkV: boolean, dx: number, x: number, y: number): boolean;
				public requestFitSystemWindows(): void;
				public checkLayoutParams(p: android.view.ViewGroup.LayoutParams): boolean;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public addOnPageChangeListener(listener: androidx.viewpager.widget.ViewPager.OnPageChangeListener): void;
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
				public getCurrentItem(): number;
				public onDetachedFromWindow(): void;
				public setCurrentItem(item: number, smoothScroll: boolean): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public onTouchEvent(event: android.view.MotionEvent): boolean;
				public arrowScroll(direction: number): boolean;
				public getPageMargin(): number;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public endFakeDrag(): void;
				public focusableViewAvailable(v: android.view.View): void;
				public setPageMargin(marginPixels: number): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public onRestoreInstanceState(state: android.os.Parcelable): void;
				public canResolveTextAlignment(): boolean;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public beginFakeDrag(): boolean;
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
				public dispatchKeyEvent(event: android.view.KeyEvent): boolean;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public onStopNestedScroll(param0: android.view.View): void;
				public clearOnPageChangeListeners(): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public getChildDrawingOrder(childCount: number, i: number): number;
				public addTouchables(views: java.util.ArrayList<android.view.View>): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public onRequestFocusInDescendants(direction: number, previouslyFocusedRect: android.graphics.Rect): boolean;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public removeOnPageChangeListener(listener: androidx.viewpager.widget.ViewPager.OnPageChangeListener): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public onSaveInstanceState(): android.os.Parcelable;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public setPageTransformer(reverseDrawingOrder: boolean, transformer: androidx.viewpager.widget.ViewPager.PageTransformer, pageLayerType: number): void;
				public getAdapter(): androidx.viewpager.widget.PagerAdapter;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
			export module ViewPager {
				export class DecorView extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.viewpager.widget.ViewPager.DecorView>;
					/**
					 * Constructs a new instance of the androidx.viewpager.widget.ViewPager$DecorView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export class ItemInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.viewpager.widget.ViewPager.ItemInfo>;
				}
				export class LayoutParams extends android.view.ViewGroup.LayoutParams {
					public static class: java.lang.Class<androidx.viewpager.widget.ViewPager.LayoutParams>;
					public isDecor: boolean;
					public gravity: number;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public constructor();
					public constructor(c: android.content.Context, attrs: android.util.AttributeSet);
					public constructor(source: android.view.ViewGroup.LayoutParams);
					public constructor(width: number, height: number);
				}
				export class MyAccessibilityDelegate extends androidx.core.view.AccessibilityDelegateCompat {
					public static class: java.lang.Class<androidx.viewpager.widget.ViewPager.MyAccessibilityDelegate>;
					public onInitializeAccessibilityNodeInfo(host: android.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
					public onInitializeAccessibilityEvent(host: android.view.View, event: android.view.accessibility.AccessibilityEvent): void;
					public performAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
					public onInitializeAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
					public performAccessibilityAction(host: android.view.View, action: number, args: android.os.Bundle): boolean;
				}
				export class OnAdapterChangeListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.viewpager.widget.ViewPager.OnAdapterChangeListener>;
					/**
					 * Constructs a new instance of the androidx.viewpager.widget.ViewPager$OnAdapterChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAdapterChanged(param0: androidx.viewpager.widget.ViewPager, param1: androidx.viewpager.widget.PagerAdapter, param2: androidx.viewpager.widget.PagerAdapter): void;
					});
					public constructor();
					public onAdapterChanged(param0: androidx.viewpager.widget.ViewPager, param1: androidx.viewpager.widget.PagerAdapter, param2: androidx.viewpager.widget.PagerAdapter): void;
				}
				export class OnPageChangeListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.viewpager.widget.ViewPager.OnPageChangeListener>;
					/**
					 * Constructs a new instance of the androidx.viewpager.widget.ViewPager$OnPageChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPageScrolled(param0: number, param1: number, param2: number): void;
						onPageSelected(param0: number): void;
						onPageScrollStateChanged(param0: number): void;
					});
					public constructor();
					public onPageSelected(param0: number): void;
					public onPageScrolled(param0: number, param1: number, param2: number): void;
					public onPageScrollStateChanged(param0: number): void;
				}
				export class PageTransformer extends java.lang.Object {
					public static class: java.lang.Class<androidx.viewpager.widget.ViewPager.PageTransformer>;
					/**
					 * Constructs a new instance of the androidx.viewpager.widget.ViewPager$PageTransformer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						transformPage(param0: android.view.View, param1: number): void;
					});
					public constructor();
					public transformPage(param0: android.view.View, param1: number): void;
				}
				export class PagerObserver extends android.database.DataSetObserver {
					public static class: java.lang.Class<androidx.viewpager.widget.ViewPager.PagerObserver>;
					public onChanged(): void;
					public onInvalidated(): void;
				}
				export class SavedState extends androidx.customview.view.AbsSavedState {
					public static class: java.lang.Class<androidx.viewpager.widget.ViewPager.SavedState>;
					public static CREATOR: android.os.Parcelable.Creator<androidx.viewpager.widget.ViewPager.SavedState>;
					public constructor(param0: android.os.Parcel);
					public constructor(superState: android.os.Parcelable);
					public toString(): string;
					public constructor(param0: android.os.Parcelable);
					public describeContents(): number;
					public writeToParcel(out: android.os.Parcel, flags: number): void;
					public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
				export class SimpleOnPageChangeListener extends java.lang.Object implements androidx.viewpager.widget.ViewPager.OnPageChangeListener {
					public static class: java.lang.Class<androidx.viewpager.widget.ViewPager.SimpleOnPageChangeListener>;
					public onPageScrollStateChanged(state: number): void;
					public onPageSelected(param0: number): void;
					public onPageScrolled(param0: number, param1: number, param2: number): void;
					public constructor();
					public onPageScrolled(position: number, positionOffset: number, positionOffsetPixels: number): void;
					public onPageScrollStateChanged(param0: number): void;
					public onPageSelected(position: number): void;
				}
				export class ViewPositionComparator extends java.util.Comparator<android.view.View> {
					public static class: java.lang.Class<androidx.viewpager.widget.ViewPager.ViewPositionComparator>;
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

//Generics information:

