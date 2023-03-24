declare module androidx {
	export module viewpager2 {
		export module adapter {
			export abstract class FragmentStateAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.viewpager2.adapter.FragmentViewHolder> implements androidx.viewpager2.adapter.StatefulAdapter  {
				public static class: java.lang.Class<androidx.viewpager2.adapter.FragmentStateAdapter>;
				public onBindViewHolder(param0: any, param1: number): void;
				public onViewAttachedToWindow(param0: any): void;
				public createFragment(param0: number): androidx.fragment.app.Fragment;
				public constructor(fragmentManager: androidx.fragment.app.FragmentManager, lifecycle: androidx.lifecycle.Lifecycle);
				public onViewRecycled(param0: any): void;
				public onFailedToRecycleView(param0: any): boolean;
				public constructor(fragmentActivity: androidx.fragment.app.FragmentActivity);
				public constructor();
				public onFailedToRecycleView(holder: androidx.viewpager2.adapter.FragmentViewHolder): boolean;
				public restoreState(savedState: android.os.Parcelable): void;
				public onViewAttachedToWindow(holder: androidx.viewpager2.adapter.FragmentViewHolder): void;
				public onAttachedToRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public onAttachedToRecyclerView(param0: androidx.recyclerview.widget.RecyclerView): void;
				public onViewRecycled(holder: androidx.viewpager2.adapter.FragmentViewHolder): void;
				public setHasStableIds(param0: boolean): void;
				public onDetachedFromRecyclerView(param0: androidx.recyclerview.widget.RecyclerView): void;
				public saveState(): android.os.Parcelable;
				public containsItem(itemId: number): boolean;
				public onDetachedFromRecyclerView(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
				public constructor(fragment: androidx.fragment.app.Fragment);
				public setHasStableIds(hasStableIds: boolean): void;
				public onCreateViewHolder(param0: android.view.ViewGroup, param1: number): any;
				public onCreateViewHolder(parent: android.view.ViewGroup, viewType: number): androidx.viewpager2.adapter.FragmentViewHolder;
				public onBindViewHolder(param0: any, param1: number, param2: java.util.List<any>): void;
				public getItemId(position: number): number;
				public getItemId(param0: number): number;
				public onBindViewHolder(holder: androidx.viewpager2.adapter.FragmentViewHolder, position: number): void;
				public restoreState(param0: android.os.Parcelable): void;
			}
			export module FragmentStateAdapter {
				export abstract class DataSetChangeObserver extends androidx.recyclerview.widget.RecyclerView.AdapterDataObserver {
					public static class: java.lang.Class<androidx.viewpager2.adapter.FragmentStateAdapter.DataSetChangeObserver>;
					public onChanged(): void;
					public onItemRangeMoved(param0: number, param1: number, param2: number): void;
					public onItemRangeChanged(positionStart: number, itemCount: number, payload: any): void;
					public onItemRangeRemoved(positionStart: number, itemCount: number): void;
					public onItemRangeChanged(param0: number, param1: number, param2: any): void;
					public onItemRangeInserted(positionStart: number, itemCount: number): void;
					public onItemRangeChanged(positionStart: number, itemCount: number): void;
					public onItemRangeChanged(param0: number, param1: number): void;
					public onItemRangeRemoved(param0: number, param1: number): void;
					public onItemRangeInserted(param0: number, param1: number): void;
					public onItemRangeMoved(fromPosition: number, toPosition: number, itemCount: number): void;
				}
				export class FragmentMaxLifecycleEnforcer extends java.lang.Object {
					public static class: java.lang.Class<androidx.viewpager2.adapter.FragmentStateAdapter.FragmentMaxLifecycleEnforcer>;
				}
			}
		}
	}
}

declare module androidx {
	export module viewpager2 {
		export module adapter {
			export class FragmentViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
				public static class: java.lang.Class<androidx.viewpager2.adapter.FragmentViewHolder>;
			}
		}
	}
}

declare module androidx {
	export module viewpager2 {
		export module adapter {
			export class StatefulAdapter extends java.lang.Object {
				public static class: java.lang.Class<androidx.viewpager2.adapter.StatefulAdapter>;
				/**
				 * Constructs a new instance of the androidx.viewpager2.adapter.StatefulAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					saveState(): android.os.Parcelable;
					restoreState(param0: android.os.Parcelable): void;
				});
				public constructor();
				public saveState(): android.os.Parcelable;
				public restoreState(param0: android.os.Parcelable): void;
			}
		}
	}
}

declare module androidx {
	export module viewpager2 {
		export module widget {
			export class AnimateLayoutChangeDetector extends java.lang.Object {
				public static class: java.lang.Class<androidx.viewpager2.widget.AnimateLayoutChangeDetector>;
			}
		}
	}
}

declare module androidx {
	export module viewpager2 {
		export module widget {
			export class CompositeOnPageChangeCallback extends androidx.viewpager2.widget.ViewPager2.OnPageChangeCallback {
				public static class: java.lang.Class<androidx.viewpager2.widget.CompositeOnPageChangeCallback>;
				public onPageSelected(position: number): void;
				public onPageScrollStateChanged(state: number): void;
				public onPageScrolled(position: number, positionOffset: number, positionOffsetPixels: number): void;
			}
		}
	}
}

declare module androidx {
	export module viewpager2 {
		export module widget {
			export class CompositePageTransformer extends java.lang.Object implements androidx.viewpager2.widget.ViewPager2.PageTransformer {
				public static class: java.lang.Class<androidx.viewpager2.widget.CompositePageTransformer>;
				public removeTransformer(transformer: androidx.viewpager2.widget.ViewPager2.PageTransformer): void;
				public transformPage(page: android.view.View, position: number): void;
				public addTransformer(transformer: androidx.viewpager2.widget.ViewPager2.PageTransformer): void;
				public transformPage(param0: android.view.View, param1: number): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module viewpager2 {
		export module widget {
			export class FakeDrag extends java.lang.Object {
				public static class: java.lang.Class<androidx.viewpager2.widget.FakeDrag>;
			}
		}
	}
}

declare module androidx {
	export module viewpager2 {
		export module widget {
			export class MarginPageTransformer extends java.lang.Object implements androidx.viewpager2.widget.ViewPager2.PageTransformer {
				public static class: java.lang.Class<androidx.viewpager2.widget.MarginPageTransformer>;
				public transformPage(page: android.view.View, position: number): void;
				public constructor(marginPx: number);
				public transformPage(param0: android.view.View, param1: number): void;
			}
		}
	}
}

declare module androidx {
	export module viewpager2 {
		export module widget {
			export class PageTransformerAdapter extends androidx.viewpager2.widget.ViewPager2.OnPageChangeCallback {
				public static class: java.lang.Class<androidx.viewpager2.widget.PageTransformerAdapter>;
				public onPageSelected(position: number): void;
				public onPageScrollStateChanged(state: number): void;
				public onPageScrolled(position: number, positionOffset: number, positionOffsetPixels: number): void;
			}
		}
	}
}

declare module androidx {
	export module viewpager2 {
		export module widget {
			export class ScrollEventAdapter extends androidx.recyclerview.widget.RecyclerView.OnScrollListener {
				public static class: java.lang.Class<androidx.viewpager2.widget.ScrollEventAdapter>;
				public onScrollStateChanged(param0: androidx.recyclerview.widget.RecyclerView, param1: number): void;
				public onScrolled(recyclerView: androidx.recyclerview.widget.RecyclerView, dx: number, dy: number): void;
				public onScrollStateChanged(recyclerView: androidx.recyclerview.widget.RecyclerView, newState: number): void;
				public onScrolled(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number): void;
			}
			export module ScrollEventAdapter {
				export class ScrollEventValues extends java.lang.Object {
					public static class: java.lang.Class<androidx.viewpager2.widget.ScrollEventAdapter.ScrollEventValues>;
				}
			}
		}
	}
}

declare module androidx {
	export module viewpager2 {
		export module widget {
			export class ViewPager2 extends android.view.ViewGroup {
				public static class: java.lang.Class<androidx.viewpager2.widget.ViewPager2>;
				public static ORIENTATION_HORIZONTAL: number;
				public static ORIENTATION_VERTICAL: number;
				public static SCROLL_STATE_IDLE: number;
				public static SCROLL_STATE_DRAGGING: number;
				public static SCROLL_STATE_SETTLING: number;
				public static OFFSCREEN_PAGE_LIMIT_DEFAULT: number;
				public addView(child: android.view.View, width: number, height: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public isUserInputEnabled(): boolean;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public setUserInputEnabled(enabled: boolean): void;
				public removeItemDecorationAt(index: number): void;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public setCurrentItem(item: number): void;
				public dispatchRestoreInstanceState(container: android.util.SparseArray<android.os.Parcelable>): void;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public getScrollState(): number;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				public constructor(context: android.content.Context);
				public getAdapter(): androidx.recyclerview.widget.RecyclerView.Adapter;
				public addItemDecoration(decor: androidx.recyclerview.widget.RecyclerView.ItemDecoration): void;
				public getItemDecorationCount(): number;
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public getOffscreenPageLimit(): number;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public isFakeDragging(): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public getOrientation(): number;
				public setPageTransformer(transformer: androidx.viewpager2.widget.ViewPager2.PageTransformer): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public setLayoutDirection(layoutDirection: number): void;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public requestTransform(): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public canScrollHorizontally(direction: number): boolean;
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
				public endFakeDrag(): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public onInitializeAccessibilityNodeInfo(info: android.view.accessibility.AccessibilityNodeInfo): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public unregisterOnPageChangeCallback(callback: androidx.viewpager2.widget.ViewPager2.OnPageChangeCallback): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public clearChildFocus(param0: android.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public setOffscreenPageLimit(limit: number): void;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public requestFitSystemWindows(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public removeItemDecoration(decor: androidx.recyclerview.widget.RecyclerView.ItemDecoration): void;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public focusSearch(direction: number): android.view.View;
				public canScrollVertically(direction: number): boolean;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public setAdapter(adapter: androidx.recyclerview.widget.RecyclerView.Adapter): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public getCurrentItem(): number;
				public setCurrentItem(item: number, smoothScroll: boolean): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public getItemDecorationAt(index: number): androidx.recyclerview.widget.RecyclerView.ItemDecoration;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public onRestoreInstanceState(state: android.os.Parcelable): void;
				public canResolveTextAlignment(): boolean;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public beginFakeDrag(): boolean;
				public removeView(view: android.view.View): void;
				public requestLayout(): void;
				public setOrientation(orientation: number): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public registerOnPageChangeCallback(callback: androidx.viewpager2.widget.ViewPager2.OnPageChangeCallback): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public getAccessibilityClassName(): string;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public onStopNestedScroll(param0: android.view.View): void;
				public onViewAdded(child: android.view.View): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public invalidateItemDecorations(): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public addItemDecoration(decor: androidx.recyclerview.widget.RecyclerView.ItemDecoration, index: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public onSaveInstanceState(): android.os.Parcelable;
				public fakeDragBy(offsetPxFloat: number): boolean;
				public performAccessibilityAction(action: number, arguments: android.os.Bundle): boolean;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
			export module ViewPager2 {
				export abstract class AccessibilityProvider extends java.lang.Object {
					public static class: java.lang.Class<androidx.viewpager2.widget.ViewPager2.AccessibilityProvider>;
				}
				export class BasicAccessibilityProvider extends androidx.viewpager2.widget.ViewPager2.AccessibilityProvider {
					public static class: java.lang.Class<androidx.viewpager2.widget.ViewPager2.BasicAccessibilityProvider>;
					public onLmInitializeAccessibilityNodeInfo(info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
					public handlesLmPerformAccessibilityAction(action: number): boolean;
					public onLmPerformAccessibilityAction(action: number): boolean;
					public onRvGetAccessibilityClassName(): string;
					public handlesRvGetAccessibilityClassName(): boolean;
				}
				export abstract class DataSetChangeObserver extends androidx.recyclerview.widget.RecyclerView.AdapterDataObserver {
					public static class: java.lang.Class<androidx.viewpager2.widget.ViewPager2.DataSetChangeObserver>;
					public onChanged(): void;
					public onItemRangeMoved(param0: number, param1: number, param2: number): void;
					public onItemRangeChanged(positionStart: number, itemCount: number, payload: any): void;
					public onItemRangeRemoved(positionStart: number, itemCount: number): void;
					public onItemRangeChanged(param0: number, param1: number, param2: any): void;
					public onItemRangeInserted(positionStart: number, itemCount: number): void;
					public onItemRangeChanged(positionStart: number, itemCount: number): void;
					public onItemRangeChanged(param0: number, param1: number): void;
					public onItemRangeRemoved(param0: number, param1: number): void;
					public onItemRangeInserted(param0: number, param1: number): void;
					public onItemRangeMoved(fromPosition: number, toPosition: number, itemCount: number): void;
				}
				export class LinearLayoutManagerImpl extends androidx.recyclerview.widget.LinearLayoutManager {
					public static class: java.lang.Class<androidx.viewpager2.widget.ViewPager2.LinearLayoutManagerImpl>;
					public requestChildRectangleOnScreen(parent: androidx.recyclerview.widget.RecyclerView, child: android.view.View, rect: android.graphics.Rect, immediate: boolean, focusedChildVisible: boolean): boolean;
					public prepareForDrop(param0: android.view.View, param1: android.view.View, param2: number, param3: number): void;
					public requestChildRectangleOnScreen(param0: androidx.recyclerview.widget.RecyclerView, param1: android.view.View, param2: android.graphics.Rect, param3: boolean): boolean;
					public computeScrollVectorForPosition(param0: number): android.graphics.PointF;
					public calculateExtraLayoutSpace(state: androidx.recyclerview.widget.RecyclerView.State, extraLayoutSpace: number[]): void;
					public onInitializeAccessibilityNodeInfo(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State, param2: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
					public onInitializeAccessibilityNodeInfo(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
					public performAccessibilityAction(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State, action: number, args: android.os.Bundle): boolean;
					public calculateExtraLayoutSpace(param0: androidx.recyclerview.widget.RecyclerView.State, param1: number[]): void;
					public requestChildRectangleOnScreen(param0: androidx.recyclerview.widget.RecyclerView, param1: android.view.View, param2: android.graphics.Rect, param3: boolean, param4: boolean): boolean;
					public performAccessibilityAction(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State, param2: number, param3: android.os.Bundle): boolean;
				}
				export class OffscreenPageLimit extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.viewpager2.widget.ViewPager2.OffscreenPageLimit>;
					/**
					 * Constructs a new instance of the androidx.viewpager2.widget.ViewPager2$OffscreenPageLimit interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export abstract class OnPageChangeCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.viewpager2.widget.ViewPager2.OnPageChangeCallback>;
					public onPageScrollStateChanged(state: number): void;
					public constructor();
					public onPageScrolled(position: number, positionOffset: number, positionOffsetPixels: number): void;
					public onPageSelected(position: number): void;
				}
				export class Orientation extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.viewpager2.widget.ViewPager2.Orientation>;
					/**
					 * Constructs a new instance of the androidx.viewpager2.widget.ViewPager2$Orientation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export class PageAwareAccessibilityProvider extends androidx.viewpager2.widget.ViewPager2.AccessibilityProvider {
					public static class: java.lang.Class<androidx.viewpager2.widget.ViewPager2.PageAwareAccessibilityProvider>;
					public onInitialize(pageChangeEventDispatcher: androidx.viewpager2.widget.CompositeOnPageChangeCallback, recyclerView: androidx.recyclerview.widget.RecyclerView): void;
					public onRvInitializeAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): void;
					public onAttachAdapter(newAdapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): void;
					public onSetLayoutDirection(): void;
					public onInitializeAccessibilityNodeInfo(info: android.view.accessibility.AccessibilityNodeInfo): void;
					public onRestorePendingState(): void;
					public onGetAccessibilityClassName(): string;
					public onSetUserInputEnabled(): void;
					public onSetNewCurrentItem(): void;
					public onSetOrientation(): void;
					public handlesPerformAccessibilityAction(action: number, arguments: android.os.Bundle): boolean;
					public onPerformAccessibilityAction(action: number, arguments: android.os.Bundle): boolean;
					public onDetachAdapter(oldAdapter: androidx.recyclerview.widget.RecyclerView.Adapter<any>): void;
					public handlesGetAccessibilityClassName(): boolean;
				}
				export class PageTransformer extends java.lang.Object {
					public static class: java.lang.Class<androidx.viewpager2.widget.ViewPager2.PageTransformer>;
					/**
					 * Constructs a new instance of the androidx.viewpager2.widget.ViewPager2$PageTransformer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						transformPage(param0: android.view.View, param1: number): void;
					});
					public constructor();
					public transformPage(param0: android.view.View, param1: number): void;
				}
				export class PagerSnapHelperImpl extends androidx.recyclerview.widget.PagerSnapHelper {
					public static class: java.lang.Class<androidx.viewpager2.widget.ViewPager2.PagerSnapHelperImpl>;
					public findSnapView(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager): android.view.View;
					public findSnapView(layoutManager: androidx.recyclerview.widget.RecyclerView.LayoutManager): android.view.View;
				}
				export class RecyclerViewImpl extends androidx.recyclerview.widget.RecyclerView {
					public static class: java.lang.Class<androidx.viewpager2.widget.ViewPager2.RecyclerViewImpl>;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
					public focusableViewAvailable(v: android.view.View): void;
					public isTextDirectionResolved(): boolean;
					public showContextMenuForChild(param0: android.view.View): boolean;
					public onStopNestedScroll(child: android.view.View): void;
					public stopNestedScroll(): void;
					public computeHorizontalScrollExtent(): number;
					public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
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
					public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public isTextAlignmentResolved(): boolean;
					public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public canResolveTextAlignment(): boolean;
					public stopNestedScroll(param0: number): void;
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
					public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[], param5: number, param6: number[]): void;
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
					public computeVerticalScrollRange(): number;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
					public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
					public focusSearch(param0: android.view.View, param1: number): android.view.View;
					public bringChildToFront(child: android.view.View): void;
					public computeHorizontalScrollOffset(): number;
					public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
					public dispatchNestedPreScroll(param0: number, param1: number, param2: number[], param3: number[], param4: number): boolean;
					public computeHorizontalScrollRange(): number;
					public isLayoutRequested(): boolean;
					public clearChildFocus(param0: android.view.View): void;
					public clearChildFocus(child: android.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
					public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[], param5: number): boolean;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public isLayoutDirectionResolved(): boolean;
					public addView(child: android.view.View): void;
					public computeVerticalScrollExtent(): number;
					public getAccessibilityClassName(): string;
					public addView(child: android.view.View, width: number, height: number): void;
					public removeView(view: android.view.View): void;
					public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
					public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
					public bringChildToFront(param0: android.view.View): void;
					public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
					public computeVerticalScrollOffset(): number;
					public onInterceptTouchEvent(ev: android.view.MotionEvent): boolean;
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
					public hasNestedScrollingParent(param0: number): boolean;
					public getParent(): android.view.ViewParent;
					public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
					public createContextMenu(menu: android.view.ContextMenu): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public onInitializeAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): void;
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
					public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[]): boolean;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public recomputeViewAttributes(param0: android.view.View): void;
					public focusableViewAvailable(param0: android.view.View): void;
					public dispatchNestedPreScroll(param0: number, param1: number, param2: number[], param3: number[]): boolean;
					public focusSearch(direction: number): android.view.View;
					public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
					public startNestedScroll(param0: number, param1: number): boolean;
					public startNestedScroll(param0: number): boolean;
					public hasNestedScrollingParent(): boolean;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				}
				export class SavedState extends android.view.View.BaseSavedState {
					public static class: java.lang.Class<androidx.viewpager2.widget.ViewPager2.SavedState>;
					public static CREATOR: android.os.Parcelable.Creator<androidx.viewpager2.widget.ViewPager2.SavedState>;
					public describeContents(): number;
					public writeToParcel(out: android.os.Parcel, flags: number): void;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
				export class ScrollState extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<androidx.viewpager2.widget.ViewPager2.ScrollState>;
					/**
					 * Constructs a new instance of the androidx.viewpager2.widget.ViewPager2$ScrollState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
				export class SmoothScrollToPosition extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.viewpager2.widget.ViewPager2.SmoothScrollToPosition>;
					public run(): void;
				}
			}
		}
	}
}

//Generics information:

