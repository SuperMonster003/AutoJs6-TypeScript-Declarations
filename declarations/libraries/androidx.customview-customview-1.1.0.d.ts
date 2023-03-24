declare module androidx {
	export module customview {
		export module view {
			export abstract class AbsSavedState extends java.lang.Object implements android.os.Parcelable {
				public static class: java.lang.Class<androidx.customview.view.AbsSavedState>;
				public static EMPTY_STATE: androidx.customview.view.AbsSavedState;
				public static CREATOR: android.os.Parcelable.Creator<androidx.customview.view.AbsSavedState>;
				public constructor(source: android.os.Parcel, loader: java.lang.ClassLoader);
				public writeToParcel(dest: android.os.Parcel, flags: number): void;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public getSuperState(): android.os.Parcelable;
				public describeContents(): number;
				public constructor(superState: android.os.Parcelable);
				public constructor(source: android.os.Parcel);
			}
		}
	}
}

declare module androidx {
	export module customview {
		export module widget {
			export abstract class ExploreByTouchHelper extends androidx.core.view.AccessibilityDelegateCompat {
				public static class: java.lang.Class<androidx.customview.widget.ExploreByTouchHelper>;
				public static INVALID_ID: number;
				public static HOST_ID: number;
				public onInitializeAccessibilityEvent(host: android.view.View, event: android.view.accessibility.AccessibilityEvent): void;
				public onPerformActionForVirtualView(param0: number, param1: number, param2: android.os.Bundle): boolean;
				public constructor();
				public getAccessibilityFocusedVirtualViewId(): number;
				public requestKeyboardFocusForVirtualView(virtualViewId: number): boolean;
				public getKeyboardFocusedVirtualViewId(): number;
				public invalidateVirtualView(virtualViewId: number): void;
				public clearKeyboardFocusForVirtualView(virtualViewId: number): boolean;
				public getAccessibilityNodeProvider(host: android.view.View): androidx.core.view.accessibility.AccessibilityNodeProviderCompat;
				public onFocusChanged(gainFocus: boolean, direction: number, previouslyFocusedRect: android.graphics.Rect): void;
				public onPopulateNodeForVirtualView(param0: number, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
				public dispatchKeyEvent(event: android.view.KeyEvent): boolean;
				public onPopulateEventForHost(event: android.view.accessibility.AccessibilityEvent): void;
				public sendEventForVirtualView(virtualViewId: number, eventType: number): boolean;
				public constructor(host: android.view.View);
				public invalidateRoot(): void;
				public onInitializeAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
				public onVirtualViewKeyboardFocusChanged(virtualViewId: number, hasFocus: boolean): void;
				public invalidateVirtualView(virtualViewId: number, changeTypes: number): void;
				public onPopulateNodeForHost(node: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
				public getAccessibilityNodeProvider(param0: android.view.View): androidx.core.view.accessibility.AccessibilityNodeProviderCompat;
				public dispatchHoverEvent(event: android.view.MotionEvent): boolean;
				public onPopulateEventForVirtualView(virtualViewId: number, event: android.view.accessibility.AccessibilityEvent): void;
				public getVisibleVirtualViews(param0: java.util.List<java.lang.Integer>): void;
				/** @deprecated */
				public getFocusedVirtualView(): number;
				public onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
				public constructor(param0: any);
				public onInitializeAccessibilityNodeInfo(host: android.view.View, info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
				public getVirtualViewAt(param0: number, param1: number): number;
			}
			export module ExploreByTouchHelper {
				export class MyNodeProvider extends androidx.core.view.accessibility.AccessibilityNodeProviderCompat {
					public static class: java.lang.Class<androidx.customview.widget.ExploreByTouchHelper.MyNodeProvider>;
					public findFocus(param0: number): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public performAction(param0: number, param1: number, param2: android.os.Bundle): boolean;
					public performAction(virtualViewId: number, action: number, arguments: android.os.Bundle): boolean;
					public findFocus(focusType: number): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public createAccessibilityNodeInfo(virtualViewId: number): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
					public createAccessibilityNodeInfo(param0: number): androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
				}
			}
		}
	}
}

declare module androidx {
	export module customview {
		export module widget {
			export class FocusStrategy extends java.lang.Object {
				public static class: java.lang.Class<androidx.customview.widget.FocusStrategy>;
				public static findNextFocusInRelativeDirection(focusables: any, collectionAdapter: androidx.customview.widget.FocusStrategy.CollectionAdapter<any,any>, adapter: androidx.customview.widget.FocusStrategy.BoundsAdapter<any>, focused: any, direction: number, isLayoutRtl: boolean, wrap: boolean): any;
				public static findNextFocusInAbsoluteDirection(focusables: any, collectionAdapter: androidx.customview.widget.FocusStrategy.CollectionAdapter<any,any>, adapter: androidx.customview.widget.FocusStrategy.BoundsAdapter<any>, focused: any, focusedRect: android.graphics.Rect, direction: number): any;
			}
			export module FocusStrategy {
				export class BoundsAdapter<T>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.customview.widget.FocusStrategy.BoundsAdapter<any>>;
					/**
					 * Constructs a new instance of the androidx.customview.widget.FocusStrategy$BoundsAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						obtainBounds(param0: T, param1: android.graphics.Rect): void;
					});
					public constructor();
					public obtainBounds(param0: T, param1: android.graphics.Rect): void;
				}
				export class CollectionAdapter<T, V>  extends java.lang.Object {
					public static class: java.lang.Class<androidx.customview.widget.FocusStrategy.CollectionAdapter<any,any>>;
					/**
					 * Constructs a new instance of the androidx.customview.widget.FocusStrategy$CollectionAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(param0: T, param1: number): V;
						size(param0: T): number;
					});
					public constructor();
					public get(param0: T, param1: number): V;
					public size(param0: T): number;
				}
				export class SequentialComparator<T>  extends java.util.Comparator<any> {
					public static class: java.lang.Class<androidx.customview.widget.FocusStrategy.SequentialComparator<any>>;
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
					public reversed(): java.util.Comparator<any>;
					public thenComparingLong(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparing(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static comparingInt(keyExtractor: any /* any*/): java.util.Comparator<any>;
					public static naturalOrder(): java.util.Comparator<any>;
					public compare(first: any, second: any): number;
				}
			}
		}
	}
}

declare module androidx {
	export module customview {
		export module widget {
			export class Openable extends java.lang.Object {
				public static class: java.lang.Class<androidx.customview.widget.Openable>;
				/**
				 * Constructs a new instance of the androidx.customview.widget.Openable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isOpen(): boolean;
					open(): void;
					close(): void;
				});
				public constructor();
				public close(): void;
				public isOpen(): boolean;
				public open(): void;
			}
		}
	}
}

declare module androidx {
	export module customview {
		export module widget {
			export class ViewDragHelper extends java.lang.Object {
				public static class: java.lang.Class<androidx.customview.widget.ViewDragHelper>;
				public static INVALID_POINTER: number;
				public static STATE_IDLE: number;
				public static STATE_DRAGGING: number;
				public static STATE_SETTLING: number;
				public static EDGE_LEFT: number;
				public static EDGE_RIGHT: number;
				public static EDGE_TOP: number;
				public static EDGE_BOTTOM: number;
				public static EDGE_ALL: number;
				public static DIRECTION_HORIZONTAL: number;
				public static DIRECTION_VERTICAL: number;
				public static DIRECTION_ALL: number;
				public checkTouchSlop(directions: number, pointerId: number): boolean;
				public setEdgeTrackingEnabled(edgeFlags: number): void;
				public isCapturedViewUnder(x: number, y: number): boolean;
				public getViewDragState(): number;
				public checkTouchSlop(directions: number): boolean;
				public processTouchEvent(ev: android.view.MotionEvent): void;
				public isEdgeTouched(edges: number, pointerId: number): boolean;
				public cancel(): void;
				public isEdgeTouched(edges: number): boolean;
				public getEdgeSize(): number;
				public settleCapturedViewAt(finalLeft: number, finalTop: number): boolean;
				public isPointerDown(pointerId: number): boolean;
				public isViewUnder(view: android.view.View, x: number, y: number): boolean;
				public setEdgeSize(size: number): void;
				public getDefaultEdgeSize(): number;
				public static create(forParent: android.view.ViewGroup, sensitivity: number, cb: androidx.customview.widget.ViewDragHelper.Callback): androidx.customview.widget.ViewDragHelper;
				public captureChildView(childView: android.view.View, activePointerId: number): void;
				public setMinVelocity(minVel: number): void;
				public abort(): void;
				public shouldInterceptTouchEvent(ev: android.view.MotionEvent): boolean;
				public getActivePointerId(): number;
				public getTouchSlop(): number;
				public getCapturedView(): android.view.View;
				public smoothSlideViewTo(child: android.view.View, finalLeft: number, finalTop: number): boolean;
				public canScroll(v: android.view.View, checkV: boolean, dx: number, dy: number, x: number, y: number): boolean;
				public continueSettling(deferCallbacks: boolean): boolean;
				public findTopChildUnder(x: number, y: number): android.view.View;
				public getMinVelocity(): number;
				public flingCapturedView(minLeft: number, minTop: number, maxLeft: number, maxTop: number): void;
				public static create(forParent: android.view.ViewGroup, cb: androidx.customview.widget.ViewDragHelper.Callback): androidx.customview.widget.ViewDragHelper;
			}
			export module ViewDragHelper {
				export abstract class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.customview.widget.ViewDragHelper.Callback>;
					public onViewReleased(releasedChild: android.view.View, xvel: number, yvel: number): void;
					public clampViewPositionVertical(child: android.view.View, top: number, dy: number): number;
					public getOrderedChildIndex(index: number): number;
					public onViewCaptured(capturedChild: android.view.View, activePointerId: number): void;
					public getViewHorizontalDragRange(child: android.view.View): number;
					public onViewPositionChanged(changedView: android.view.View, left: number, top: number, dx: number, dy: number): void;
					public onEdgeLock(edgeFlags: number): boolean;
					public onEdgeDragStarted(edgeFlags: number, pointerId: number): void;
					public onEdgeTouched(edgeFlags: number, pointerId: number): void;
					public constructor();
					public clampViewPositionHorizontal(child: android.view.View, left: number, dx: number): number;
					public tryCaptureView(param0: android.view.View, param1: number): boolean;
					public getViewVerticalDragRange(child: android.view.View): number;
					public onViewDragStateChanged(state: number): void;
				}
			}
		}
	}
}

//Generics information:
//androidx.customview.widget.FocusStrategy.BoundsAdapter:1
//androidx.customview.widget.FocusStrategy.CollectionAdapter:2
//androidx.customview.widget.FocusStrategy.SequentialComparator:1

