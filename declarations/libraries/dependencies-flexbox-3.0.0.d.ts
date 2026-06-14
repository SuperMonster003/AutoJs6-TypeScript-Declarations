/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module com {
	export module google {
		export module android {
			export module flexbox {
				export class AlignContent extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<com.google.android.flexbox.AlignContent>;
					/**
					 * Constructs a new instance of the com.google.android.flexbox.AlignContent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public static FLEX_END: number;
					public static FLEX_START: number;
					public static CENTER: number;
					public static SPACE_BETWEEN: number;
					public static SPACE_AROUND: number;
					public static STRETCH: number;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module flexbox {
				export class AlignItems extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<com.google.android.flexbox.AlignItems>;
					/**
					 * Constructs a new instance of the com.google.android.flexbox.AlignItems interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public static FLEX_END: number;
					public static FLEX_START: number;
					public static BASELINE: number;
					public static CENTER: number;
					public static STRETCH: number;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module flexbox {
				export class AlignSelf extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<com.google.android.flexbox.AlignSelf>;
					/**
					 * Constructs a new instance of the com.google.android.flexbox.AlignSelf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public static FLEX_END: number;
					public static FLEX_START: number;
					public static AUTO: number;
					public static BASELINE: number;
					public static CENTER: number;
					public static STRETCH: number;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module flexbox {
				export class FlexContainer extends java.lang.Object {
					public static class: java.lang.Class<com.google.android.flexbox.FlexContainer>;
					/**
					 * Constructs a new instance of the com.google.android.flexbox.FlexContainer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getFlexItemCount(): number;
						getFlexItemAt(param0: number): android.view.View;
						getReorderedFlexItemAt(param0: number): android.view.View;
						addView(param0: android.view.View): void;
						addView(param0: android.view.View, param1: number): void;
						removeAllViews(): void;
						removeViewAt(param0: number): void;
						getFlexDirection(): number;
						setFlexDirection(param0: number): void;
						getFlexWrap(): number;
						setFlexWrap(param0: number): void;
						getJustifyContent(): number;
						setJustifyContent(param0: number): void;
						getAlignContent(): number;
						setAlignContent(param0: number): void;
						getAlignItems(): number;
						setAlignItems(param0: number): void;
						getFlexLines(): java.util.List<com.google.android.flexbox.FlexLine>;
						isMainAxisDirectionHorizontal(): boolean;
						getDecorationLengthMainAxis(param0: android.view.View, param1: number, param2: number): number;
						getDecorationLengthCrossAxis(param0: android.view.View): number;
						getPaddingTop(): number;
						getPaddingLeft(): number;
						getPaddingRight(): number;
						getPaddingBottom(): number;
						getPaddingStart(): number;
						getPaddingEnd(): number;
						getChildWidthMeasureSpec(param0: number, param1: number, param2: number): number;
						getChildHeightMeasureSpec(param0: number, param1: number, param2: number): number;
						getLargestMainSize(): number;
						getSumOfCrossSize(): number;
						onNewFlexItemAdded(param0: android.view.View, param1: number, param2: number, param3: com.google.android.flexbox.FlexLine): void;
						onNewFlexLineAdded(param0: com.google.android.flexbox.FlexLine): void;
						setFlexLines(param0: java.util.List<com.google.android.flexbox.FlexLine>): void;
						getMaxLine(): number;
						setMaxLine(param0: number): void;
						getFlexLinesInternal(): java.util.List<com.google.android.flexbox.FlexLine>;
						updateViewCache(param0: number, param1: android.view.View): void;
					});
					public constructor();
					public static NOT_SET: number;
					public getAlignContent(): number;
					public onNewFlexItemAdded(param0: android.view.View, param1: number, param2: number, param3: com.google.android.flexbox.FlexLine): void;
					public getDecorationLengthMainAxis(param0: android.view.View, param1: number, param2: number): number;
					public getMaxLine(): number;
					public setAlignItems(param0: number): void;
					public addView(param0: android.view.View, param1: number): void;
					public getDecorationLengthCrossAxis(param0: android.view.View): number;
					public getFlexWrap(): number;
					public getChildWidthMeasureSpec(param0: number, param1: number, param2: number): number;
					public getPaddingLeft(): number;
					public getFlexLines(): java.util.List<com.google.android.flexbox.FlexLine>;
					public updateViewCache(param0: number, param1: android.view.View): void;
					public getFlexItemAt(param0: number): android.view.View;
					public getPaddingTop(): number;
					public setMaxLine(param0: number): void;
					public onNewFlexLineAdded(param0: com.google.android.flexbox.FlexLine): void;
					public getPaddingRight(): number;
					public getLargestMainSize(): number;
					public getReorderedFlexItemAt(param0: number): android.view.View;
					public getSumOfCrossSize(): number;
					public getPaddingBottom(): number;
					public getFlexLinesInternal(): java.util.List<com.google.android.flexbox.FlexLine>;
					public setFlexDirection(param0: number): void;
					public setFlexWrap(param0: number): void;
					public getFlexItemCount(): number;
					public setAlignContent(param0: number): void;
					public removeAllViews(): void;
					public removeViewAt(param0: number): void;
					public setFlexLines(param0: java.util.List<com.google.android.flexbox.FlexLine>): void;
					public addView(param0: android.view.View): void;
					public isMainAxisDirectionHorizontal(): boolean;
					public getPaddingStart(): number;
					public getPaddingEnd(): number;
					public getChildHeightMeasureSpec(param0: number, param1: number, param2: number): number;
					public getFlexDirection(): number;
					public getJustifyContent(): number;
					public setJustifyContent(param0: number): void;
					public getAlignItems(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module flexbox {
				export class FlexDirection extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<com.google.android.flexbox.FlexDirection>;
					/**
					 * Constructs a new instance of the com.google.android.flexbox.FlexDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public static COLUMN_REVERSE: number;
					public static ROW: number;
					public static ROW_REVERSE: number;
					public static COLUMN: number;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module flexbox {
				export class FlexItem extends java.lang.Object implements android.os.Parcelable {
					public static class: java.lang.Class<com.google.android.flexbox.FlexItem>;
					/**
					 * Constructs a new instance of the com.google.android.flexbox.FlexItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getWidth(): number;
						setWidth(param0: number): void;
						getHeight(): number;
						setHeight(param0: number): void;
						getOrder(): number;
						setOrder(param0: number): void;
						getFlexGrow(): number;
						setFlexGrow(param0: number): void;
						getFlexShrink(): number;
						setFlexShrink(param0: number): void;
						getAlignSelf(): number;
						setAlignSelf(param0: number): void;
						getMinWidth(): number;
						setMinWidth(param0: number): void;
						getMinHeight(): number;
						setMinHeight(param0: number): void;
						getMaxWidth(): number;
						setMaxWidth(param0: number): void;
						getMaxHeight(): number;
						setMaxHeight(param0: number): void;
						isWrapBefore(): boolean;
						setWrapBefore(param0: boolean): void;
						getFlexBasisPercent(): number;
						setFlexBasisPercent(param0: number): void;
						getMarginLeft(): number;
						getMarginTop(): number;
						getMarginRight(): number;
						getMarginBottom(): number;
						getMarginStart(): number;
						getMarginEnd(): number;
						describeContents(): number;
						writeToParcel(param0: android.os.Parcel, param1: number): void;
					});
					public constructor();
					public static PARCELABLE_WRITE_RETURN_VALUE: number;
					public static ORDER_DEFAULT: number;
					public static FLEX_BASIS_PERCENT_DEFAULT: number;
					public static CONTENTS_FILE_DESCRIPTOR: number;
					public static FLEX_GROW_DEFAULT: number;
					public static FLEX_SHRINK_DEFAULT: number;
					public static FLEX_SHRINK_NOT_SET: number;
					public static MAX_SIZE: number;
					public getMaxWidth(): number;
					public setAlignSelf(param0: number): void;
					public getMinWidth(): number;
					public setHeight(param0: number): void;
					public setOrder(param0: number): void;
					public setWrapBefore(param0: boolean): void;
					public getMarginTop(): number;
					public getOrder(): number;
					public setMinHeight(param0: number): void;
					public setFlexBasisPercent(param0: number): void;
					public getMaxHeight(): number;
					public getMarginStart(): number;
					public setFlexShrink(param0: number): void;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
					public setMaxWidth(param0: number): void;
					public setWidth(param0: number): void;
					public getHeight(): number;
					public getMarginBottom(): number;
					public describeContents(): number;
					public getWidth(): number;
					public getFlexBasisPercent(): number;
					public getMinHeight(): number;
					public setMaxHeight(param0: number): void;
					public getMarginLeft(): number;
					public getMarginEnd(): number;
					public getFlexShrink(): number;
					public getAlignSelf(): number;
					public getFlexGrow(): number;
					public setMinWidth(param0: number): void;
					public isWrapBefore(): boolean;
					public setFlexGrow(param0: number): void;
					public getMarginRight(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module flexbox {
				export class FlexLine extends java.lang.Object {
					public static class: java.lang.Class<com.google.android.flexbox.FlexLine>;
					public getTotalFlexShrink(): number;
					public getMainSize(): number;
					public getItemCount(): number;
					public getTotalFlexGrow(): number;
					public getFirstIndex(): number;
					public getCrossSize(): number;
					public getItemCountNotGone(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module flexbox {
				export class FlexWrap extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<com.google.android.flexbox.FlexWrap>;
					/**
					 * Constructs a new instance of the com.google.android.flexbox.FlexWrap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public static WRAP_REVERSE: number;
					public static WRAP: number;
					public static NOWRAP: number;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module flexbox {
				export class FlexboxHelper extends java.lang.Object {
					public static class: java.lang.Class<com.google.android.flexbox.FlexboxHelper>;
				}
				export module FlexboxHelper {
					export class FlexLinesResult extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.flexbox.FlexboxHelper.FlexLinesResult>;
					}
					export class Order extends java.lang.Comparable<com.google.android.flexbox.FlexboxHelper.Order> {
						public static class: java.lang.Class<com.google.android.flexbox.FlexboxHelper.Order>;
						public compareTo(another: com.google.android.flexbox.FlexboxHelper.Order): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module flexbox {
				export class FlexboxItemDecoration extends androidx.recyclerview.widget.RecyclerView.ItemDecoration {
					public static class: java.lang.Class<com.google.android.flexbox.FlexboxItemDecoration>;
					public static HORIZONTAL: number;
					public static VERTICAL: number;
					public static BOTH: number;
					public setOrientation(orientation: number): void;
					public onDraw(param0: android.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView): void;
					public getItemOffsets(param0: android.graphics.Rect, param1: android.view.View, param2: androidx.recyclerview.widget.RecyclerView, param3: androidx.recyclerview.widget.RecyclerView.State): void;
					public setDrawable(drawable: android.graphics.drawable.Drawable): void;
					public getItemOffsets(outRect: android.graphics.Rect, view: android.view.View, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
					public constructor(context: android.content.Context);
					public onDraw(canvas: android.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
					public constructor();
					public getItemOffsets(param0: android.graphics.Rect, param1: number, param2: androidx.recyclerview.widget.RecyclerView): void;
					public onDraw(param0: android.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: androidx.recyclerview.widget.RecyclerView.State): void;
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module flexbox {
				export class FlexboxLayout extends android.view.ViewGroup implements com.google.android.flexbox.FlexContainer {
					public static class: java.lang.Class<com.google.android.flexbox.FlexboxLayout>;
					public static SHOW_DIVIDER_NONE: number;
					public static SHOW_DIVIDER_BEGINNING: number;
					public static SHOW_DIVIDER_MIDDLE: number;
					public static SHOW_DIVIDER_END: number;
					public setJustifyContent(justifyContent: number): void;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public getAlignContent(): number;
					public onNewFlexItemAdded(param0: android.view.View, param1: number, param2: number, param3: com.google.android.flexbox.FlexLine): void;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public focusableViewAvailable(v: android.view.View): void;
					public getMaxLine(): number;
					public setAlignItems(param0: number): void;
					public isTextDirectionResolved(): boolean;
					public showContextMenuForChild(param0: android.view.View): boolean;
					public onStopNestedScroll(child: android.view.View): void;
					public addView(param0: android.view.View, param1: number): void;
					public getChildWidthMeasureSpec(param0: number, param1: number, param2: number): number;
					public getFlexLines(): java.util.List<com.google.android.flexbox.FlexLine>;
					public updateViewCache(param0: number, param1: android.view.View): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public getPaddingTop(): number;
					public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
					public generateLayoutParams(attrs: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
					public generateLayoutParams(lp: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
					public recomputeViewAttributes(child: android.view.View): void;
					public addView(child: android.view.View, index: number): void;
					public updateViewCache(position: number, view: android.view.View): void;
					public getLargestMainSize(): number;
					public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public getPaddingBottom(): number;
					public getLayoutDirection(): number;
					public getParentForAccessibility(): android.view.ViewParent;
					public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
					public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
					public setFlexDirection(param0: number): void;
					public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
					public createContextMenu(param0: android.view.ContextMenu): void;
					public getShowDividerHorizontal(): number;
					public getFlexItemCount(): number;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
					public setAlignContent(param0: number): void;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public childDrawableStateChanged(param0: android.view.View): void;
					public setAlignContent(alignContent: number): void;
					public getChildWidthMeasureSpec(widthSpec: number, padding: number, childDimension: number): number;
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
					public isTextAlignmentResolved(): boolean;
					public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public requestChildFocus(child: android.view.View, focused: android.view.View): void;
					public canResolveTextAlignment(): boolean;
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public getDecorationLengthMainAxis(param0: android.view.View, param1: number, param2: number): number;
					public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
					public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
					public setShowDividerHorizontal(dividerMode: number): void;
					public showContextMenuForChild(originalView: android.view.View): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public setDividerDrawable(divider: android.graphics.drawable.Drawable): void;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
					public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
					public getFlexItemAt(param0: number): android.view.View;
					public sendAccessibilityEvent(param0: number): void;
					public requestLayout(): void;
					public onNewFlexLineAdded(param0: com.google.android.flexbox.FlexLine): void;
					public setShowDivider(dividerMode: number): void;
					public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public setFlexDirection(flexDirection: number): void;
					public getTextAlignment(): number;
					public getReorderedFlexItemAt(param0: number): android.view.View;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public getFlexItemAt(index: number): android.view.View;
					public getDecorationLengthMainAxis(view: android.view.View, index: number, indexInFlexLine: number): number;
					public getFlexLinesInternal(): java.util.List<com.google.android.flexbox.FlexLine>;
					public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
					public getDecorationLengthCrossAxis(view: android.view.View): number;
					public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
					public removeViewAt(param0: number): void;
					public setDividerDrawableVertical(divider: android.graphics.drawable.Drawable): void;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public setFlexLines(param0: java.util.List<com.google.android.flexbox.FlexLine>): void;
					public isMainAxisDirectionHorizontal(): boolean;
					public setFlexLines(flexLines: java.util.List<com.google.android.flexbox.FlexLine>): void;
					public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
					public focusSearch(param0: android.view.View, param1: number): android.view.View;
					public getReorderedChildAt(index: number): android.view.View;
					public getChildHeightMeasureSpec(param0: number, param1: number, param2: number): number;
					public bringChildToFront(child: android.view.View): void;
					public getAlignItems(): number;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public setShowDividerVertical(dividerMode: number): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public setAlignItems(alignItems: number): void;
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
					public generateLayoutParams(p: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public onNewFlexLineAdded(flexLine: com.google.android.flexbox.FlexLine): void;
					public setFlexWrap(flexWrap: number): void;
					public isLayoutDirectionResolved(): boolean;
					public focusSearch(focused: android.view.View, direction: number): android.view.View;
					public addView(child: android.view.View): void;
					public getPaddingLeft(): number;
					public addView(child: android.view.View, width: number, height: number): void;
					public removeView(view: android.view.View): void;
					public generateLayoutParams(attrs: android.util.AttributeSet): com.google.android.flexbox.FlexboxLayout.LayoutParams;
					public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
					public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
					public getPaddingRight(): number;
					public bringChildToFront(param0: android.view.View): void;
					public getShowDividerVertical(): number;
					public constructor(context: android.content.Context);
					public removeViewAt(index: number): void;
					public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
					public setMaxLine(maxLine: number): void;
					public setFlexWrap(param0: number): void;
					public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
					public getPaddingStart(): number;
					public getPaddingEnd(): number;
					public getFlexDirection(): number;
					public getJustifyContent(): number;
					public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
					public getTextDirection(): number;
					public setJustifyContent(param0: number): void;
					public requestFitSystemWindows(): void;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public requestTransparentRegion(param0: android.view.View): void;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public checkLayoutParams(p: android.view.ViewGroup.LayoutParams): boolean;
					public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
					public canResolveTextDirection(): boolean;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public getParent(): android.view.ViewParent;
					public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
					public getDecorationLengthCrossAxis(param0: android.view.View): number;
					public getFlexWrap(): number;
					public createContextMenu(menu: android.view.ContextMenu): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public getDividerDrawableVertical(): android.graphics.drawable.Drawable;
					public setMaxLine(param0: number): void;
					public onStopNestedScroll(param0: android.view.View): void;
					public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public onDraw(canvas: android.graphics.Canvas): void;
					public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
					public canResolveLayoutDirection(): boolean;
					public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
					public requestTransparentRegion(child: android.view.View): void;
					public removeView(param0: android.view.View): void;
					public getDividerDrawableHorizontal(): android.graphics.drawable.Drawable;
					public childDrawableStateChanged(child: android.view.View): void;
					public getSumOfCrossSize(): number;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public getReorderedFlexItemAt(index: number): android.view.View;
					public recomputeViewAttributes(param0: android.view.View): void;
					public removeAllViews(): void;
					public focusableViewAvailable(param0: android.view.View): void;
					public getChildHeightMeasureSpec(heightSpec: number, padding: number, childDimension: number): number;
					public addView(param0: android.view.View): void;
					public focusSearch(direction: number): android.view.View;
					public onNewFlexItemAdded(view: android.view.View, index: number, indexInFlexLine: number, flexLine: com.google.android.flexbox.FlexLine): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
					public setDividerDrawableHorizontal(divider: android.graphics.drawable.Drawable): void;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				}
				export module FlexboxLayout {
					export class DividerMode extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.google.android.flexbox.FlexboxLayout.DividerMode>;
						/**
						 * Constructs a new instance of the com.google.android.flexbox.FlexboxLayout$DividerMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export class LayoutParams extends android.view.ViewGroup.MarginLayoutParams implements com.google.android.flexbox.FlexItem {
						public static class: java.lang.Class<com.google.android.flexbox.FlexboxLayout.LayoutParams>;
						public static CREATOR: android.os.Parcelable.Creator<com.google.android.flexbox.FlexboxLayout.LayoutParams>;
						public setHeight(height: number): void;
						public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
						public setFlexGrow(flexGrow: number): void;
						public constructor(_in_: android.os.Parcel);
						public setMinHeight(minHeight: number): void;
						public writeToParcel(dest: android.os.Parcel, flags: number): void;
						public setMinHeight(param0: number): void;
						public getMaxWidth(): number;
						public setHeight(param0: number): void;
						public getMinHeight(): number;
						public setAlignSelf(param0: number): void;
						public setWrapBefore(param0: boolean): void;
						public getFlexShrink(): number;
						public constructor(c: android.content.Context, attrs: android.util.AttributeSet);
						public setOrder(order: number): void;
						public setMaxHeight(param0: number): void;
						public getFlexGrow(): number;
						public setFlexBasisPercent(param0: number): void;
						public setMaxHeight(maxHeight: number): void;
						public setFlexBasisPercent(flexBasisPercent: number): void;
						public getMarginEnd(): number;
						public setWidth(width: number): void;
						public setFlexShrink(flexShrink: number): void;
						public constructor(width: number, height: number);
						public setOrder(param0: number): void;
						public setMaxWidth(maxWidth: number): void;
						public setWrapBefore(wrapBefore: boolean): void;
						public setMinWidth(minWidth: number): void;
						public getMaxHeight(): number;
						public getMarginTop(): number;
						public setMinWidth(param0: number): void;
						public getMarginStart(): number;
						public constructor(source: android.view.ViewGroup.MarginLayoutParams);
						public getOrder(): number;
						public getMarginLeft(): number;
						public describeContents(): number;
						public setWidth(param0: number): void;
						public setFlexGrow(param0: number): void;
						public getMarginBottom(): number;
						public setMaxWidth(param0: number): void;
						public getHeight(): number;
						public constructor(source: com.google.android.flexbox.FlexboxLayout.LayoutParams);
						public isWrapBefore(): boolean;
						public getAlignSelf(): number;
						public setFlexShrink(param0: number): void;
						public getWidth(): number;
						public getMinWidth(): number;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public setAlignSelf(alignSelf: number): void;
						public constructor(source: android.view.ViewGroup.LayoutParams);
						public getFlexBasisPercent(): number;
						public getMarginRight(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module flexbox {
				export class FlexboxLayoutManager extends androidx.recyclerview.widget.RecyclerView.LayoutManager implements com.google.android.flexbox.FlexContainer, androidx.recyclerview.widget.RecyclerView.SmoothScroller.ScrollVectorProvider {
					public static class: java.lang.Class<com.google.android.flexbox.FlexboxLayoutManager>;
					public isAutoMeasureEnabled(): boolean;
					public setJustifyContent(justifyContent: number): void;
					public onDetachedFromWindow(view: androidx.recyclerview.widget.RecyclerView, recycler: androidx.recyclerview.widget.RecyclerView.Recycler): void;
					public getAlignContent(): number;
					public onNewFlexItemAdded(param0: android.view.View, param1: number, param2: number, param3: com.google.android.flexbox.FlexLine): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public computeScrollVectorForPosition(param0: number): android.graphics.PointF;
					public onItemsAdded(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number): void;
					public onItemsMoved(recyclerView: androidx.recyclerview.widget.RecyclerView, from: number, to: number, itemCount: number): void;
					public getMaxLine(): number;
					public scrollToPosition(param0: number): void;
					public setAlignItems(param0: number): void;
					public addView(param0: android.view.View, param1: number): void;
					public constructor();
					public getChildWidthMeasureSpec(param0: number, param1: number, param2: number): number;
					public getFlexLines(): java.util.List<com.google.android.flexbox.FlexLine>;
					public getRecycleChildrenOnDetach(): boolean;
					public updateViewCache(param0: number, param1: android.view.View): void;
					public getPaddingTop(): number;
					public canScrollVertically(): boolean;
					public updateViewCache(position: number, view: android.view.View): void;
					public getLargestMainSize(): number;
					public computeScrollVectorForPosition(targetPosition: number): android.graphics.PointF;
					public getPaddingBottom(): number;
					public computeHorizontalScrollExtent(state: androidx.recyclerview.widget.RecyclerView.State): number;
					public setFlexDirection(param0: number): void;
					public getFlexItemCount(): number;
					public setAlignContent(param0: number): void;
					public computeHorizontalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
					public scrollHorizontallyBy(dx: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
					public computeHorizontalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
					public scrollVerticallyBy(param0: number, param1: androidx.recyclerview.widget.RecyclerView.Recycler, param2: androidx.recyclerview.widget.RecyclerView.State): number;
					public setAlignContent(alignContent: number): void;
					public computeVerticalScrollRange(state: androidx.recyclerview.widget.RecyclerView.State): number;
					public getChildWidthMeasureSpec(widthSpec: number, padding: number, childDimension: number): number;
					public onItemsRemoved(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
					public onItemsUpdated(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number, param3: any): void;
					public computeHorizontalScrollOffset(param0: androidx.recyclerview.widget.RecyclerView.State): number;
					public getDecorationLengthMainAxis(param0: android.view.View, param1: number, param2: number): number;
					public computeVerticalScrollExtent(param0: androidx.recyclerview.widget.RecyclerView.State): number;
					public computeVerticalScrollRange(param0: androidx.recyclerview.widget.RecyclerView.State): number;
					public checkLayoutParams(lp: androidx.recyclerview.widget.RecyclerView.LayoutParams): boolean;
					public getFlexItemAt(param0: number): android.view.View;
					public smoothScrollToPosition(recyclerView: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State, position: number): void;
					public onNewFlexLineAdded(param0: com.google.android.flexbox.FlexLine): void;
					public setFlexDirection(flexDirection: number): void;
					public getReorderedFlexItemAt(param0: number): android.view.View;
					public getDecorationLengthMainAxis(view: android.view.View, index: number, indexInFlexLine: number): number;
					public getFlexItemAt(index: number): android.view.View;
					public getFlexLinesInternal(): java.util.List<com.google.android.flexbox.FlexLine>;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public setRecycleChildrenOnDetach(recycleChildrenOnDetach: boolean): void;
					public computeVerticalScrollOffset(state: androidx.recyclerview.widget.RecyclerView.State): number;
					public getDecorationLengthCrossAxis(view: android.view.View): number;
					public removeViewAt(param0: number): void;
					public setFlexLines(param0: java.util.List<com.google.android.flexbox.FlexLine>): void;
					public setFlexLines(flexLines: java.util.List<com.google.android.flexbox.FlexLine>): void;
					public isMainAxisDirectionHorizontal(): boolean;
					public computeHorizontalScrollRange(param0: androidx.recyclerview.widget.RecyclerView.State): number;
					public getChildHeightMeasureSpec(param0: number, param1: number, param2: number): number;
					public onDetachedFromWindow(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.Recycler): void;
					public generateLayoutParams(c: android.content.Context, attrs: android.util.AttributeSet): androidx.recyclerview.widget.RecyclerView.LayoutParams;
					public getAlignItems(): number;
					public setAlignItems(alignItems: number): void;
					public findLastCompletelyVisibleItemPosition(): number;
					public scrollVerticallyBy(dy: number, recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): number;
					public onNewFlexLineAdded(flexLine: com.google.android.flexbox.FlexLine): void;
					public onItemsRemoved(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number): void;
					public onDetachedFromWindow(param0: androidx.recyclerview.widget.RecyclerView): void;
					public setFlexWrap(flexWrap: number): void;
					public getPaddingLeft(): number;
					public generateDefaultLayoutParams(): androidx.recyclerview.widget.RecyclerView.LayoutParams;
					public onAttachedToWindow(param0: androidx.recyclerview.widget.RecyclerView): void;
					public onAttachedToWindow(recyclerView: androidx.recyclerview.widget.RecyclerView): void;
					public getPaddingRight(): number;
					public constructor(context: android.content.Context);
					public onAdapterChanged(param0: androidx.recyclerview.widget.RecyclerView.Adapter, param1: androidx.recyclerview.widget.RecyclerView.Adapter): void;
					public checkLayoutParams(param0: androidx.recyclerview.widget.RecyclerView.LayoutParams): boolean;
					public setMaxLine(maxLine: number): void;
					public setFlexWrap(param0: number): void;
					public onItemsMoved(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number, param3: number): void;
					public onItemsUpdated(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
					public findFirstVisibleItemPosition(): number;
					public canScrollHorizontally(): boolean;
					public scrollHorizontallyBy(param0: number, param1: androidx.recyclerview.widget.RecyclerView.Recycler, param2: androidx.recyclerview.widget.RecyclerView.State): number;
					public getPaddingStart(): number;
					public getPaddingEnd(): number;
					public getFlexDirection(): number;
					public getJustifyContent(): number;
					public setJustifyContent(param0: number): void;
					public onSaveInstanceState(): android.os.Parcelable;
					public scrollToPosition(position: number): void;
					public onLayoutCompleted(state: androidx.recyclerview.widget.RecyclerView.State): void;
					public onLayoutCompleted(param0: androidx.recyclerview.widget.RecyclerView.State): void;
					public findLastVisibleItemPosition(): number;
					public onLayoutChildren(recycler: androidx.recyclerview.widget.RecyclerView.Recycler, state: androidx.recyclerview.widget.RecyclerView.State): void;
					public getDecorationLengthCrossAxis(param0: android.view.View): number;
					public getFlexWrap(): number;
					public findFirstCompletelyVisibleItemPosition(): number;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): androidx.recyclerview.widget.RecyclerView.LayoutParams;
					public setMaxLine(param0: number): void;
					public onItemsUpdated(param0: androidx.recyclerview.widget.RecyclerView, param1: number, param2: number): void;
					public constructor(context: android.content.Context, flexDirection: number);
					public getSumOfCrossSize(): number;
					public onItemsUpdated(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number, payload: any): void;
					public getReorderedFlexItemAt(index: number): android.view.View;
					public onLayoutChildren(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State): void;
					public removeAllViews(): void;
					public constructor(context: android.content.Context, flexDirection: number, flexWrap: number);
					public generateLayoutParams(param0: android.content.Context, param1: android.util.AttributeSet): androidx.recyclerview.widget.RecyclerView.LayoutParams;
					public getChildHeightMeasureSpec(heightSpec: number, padding: number, childDimension: number): number;
					public computeVerticalScrollExtent(state: androidx.recyclerview.widget.RecyclerView.State): number;
					public addView(param0: android.view.View): void;
					public onNewFlexItemAdded(view: android.view.View, index: number, indexInFlexLine: number, flexLine: com.google.android.flexbox.FlexLine): void;
					public onRestoreInstanceState(state: android.os.Parcelable): void;
					public onItemsAdded(recyclerView: androidx.recyclerview.widget.RecyclerView, positionStart: number, itemCount: number): void;
					public smoothScrollToPosition(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.State, param2: number): void;
					public computeHorizontalScrollExtent(param0: androidx.recyclerview.widget.RecyclerView.State): number;
					public onAdapterChanged(oldAdapter: androidx.recyclerview.widget.RecyclerView.Adapter, newAdapter: androidx.recyclerview.widget.RecyclerView.Adapter): void;
					public computeVerticalScrollOffset(param0: androidx.recyclerview.widget.RecyclerView.State): number;
				}
				export module FlexboxLayoutManager {
					export class AnchorInfo extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.flexbox.FlexboxLayoutManager.AnchorInfo>;
						public toString(): string;
					}
					export class LayoutParams extends androidx.recyclerview.widget.RecyclerView.LayoutParams implements com.google.android.flexbox.FlexItem {
						public static class: java.lang.Class<com.google.android.flexbox.FlexboxLayoutManager.LayoutParams>;
						public static CREATOR: android.os.Parcelable.Creator<com.google.android.flexbox.FlexboxLayoutManager.LayoutParams>;
						public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
						public setHeight(height: number): void;
						public setFlexGrow(flexGrow: number): void;
						public constructor(_in_: android.os.Parcel);
						public setMinHeight(minHeight: number): void;
						public constructor(source: com.google.android.flexbox.FlexboxLayoutManager.LayoutParams);
						public writeToParcel(dest: android.os.Parcel, flags: number): void;
						public setMinHeight(param0: number): void;
						public getMaxWidth(): number;
						public setHeight(param0: number): void;
						public getMinHeight(): number;
						public setAlignSelf(param0: number): void;
						public setWrapBefore(param0: boolean): void;
						public getFlexShrink(): number;
						public constructor(c: android.content.Context, attrs: android.util.AttributeSet);
						public setOrder(order: number): void;
						public setMaxHeight(param0: number): void;
						public getFlexGrow(): number;
						public setFlexBasisPercent(param0: number): void;
						public setMaxHeight(maxHeight: number): void;
						public setFlexBasisPercent(flexBasisPercent: number): void;
						public getMarginEnd(): number;
						public constructor(source: androidx.recyclerview.widget.RecyclerView.LayoutParams);
						public setWidth(width: number): void;
						public setFlexShrink(flexShrink: number): void;
						public constructor(param0: androidx.recyclerview.widget.RecyclerView.LayoutParams);
						public constructor(width: number, height: number);
						public setOrder(param0: number): void;
						public setMaxWidth(maxWidth: number): void;
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public setWrapBefore(wrapBefore: boolean): void;
						public setMinWidth(minWidth: number): void;
						public getMaxHeight(): number;
						public getMarginTop(): number;
						public setMinWidth(param0: number): void;
						public getMarginStart(): number;
						public constructor(param0: number, param1: number);
						public constructor(source: android.view.ViewGroup.MarginLayoutParams);
						public getOrder(): number;
						public getMarginLeft(): number;
						public describeContents(): number;
						public setWidth(param0: number): void;
						public setFlexGrow(param0: number): void;
						public getMarginBottom(): number;
						public setMaxWidth(param0: number): void;
						public getHeight(): number;
						public isWrapBefore(): boolean;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public getAlignSelf(): number;
						public setFlexShrink(param0: number): void;
						public getWidth(): number;
						public getMinWidth(): number;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public setAlignSelf(alignSelf: number): void;
						public getFlexBasisPercent(): number;
						public constructor(source: android.view.ViewGroup.LayoutParams);
						public getMarginRight(): number;
					}
					export class LayoutState extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.flexbox.FlexboxLayoutManager.LayoutState>;
						public toString(): string;
					}
					export class SavedState extends java.lang.Object implements android.os.Parcelable {
						public static class: java.lang.Class<com.google.android.flexbox.FlexboxLayoutManager.SavedState>;
						public static CREATOR: android.os.Parcelable.Creator<com.google.android.flexbox.FlexboxLayoutManager.SavedState>;
						public writeToParcel(dest: android.os.Parcel, flags: number): void;
						public describeContents(): number;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module flexbox {
				export class JustifyContent extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<com.google.android.flexbox.JustifyContent>;
					/**
					 * Constructs a new instance of the com.google.android.flexbox.JustifyContent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public static FLEX_END: number;
					public static SPACE_EVENLY: number;
					public static FLEX_START: number;
					public static CENTER: number;
					public static SPACE_BETWEEN: number;
					public static SPACE_AROUND: number;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

//Generics information:

