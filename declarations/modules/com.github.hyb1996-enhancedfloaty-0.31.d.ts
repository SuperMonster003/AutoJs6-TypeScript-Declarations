/// <reference path="../android.d.ts" />

declare module com {
	export module stardust {
		export module enhancedfloaty {
			export class FloatyService extends globalAndroid.app.Service {
				public static class: java.lang.Class<com.stardust.enhancedfloaty.FloatyService>;
				public static addWindow(param0: com.stardust.enhancedfloaty.FloatyWindow): void;
				public static removeWindow(param0: com.stardust.enhancedfloaty.FloatyWindow): void;
				public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
				public constructor(param0: globalAndroid.content.Context);
				public onCreate(): void;
				public onDestroy(): void;
				public onTrimMemory(param0: number): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module stardust {
		export module enhancedfloaty {
			export abstract class FloatyWindow extends java.lang.Object {
				public static class: java.lang.Class<com.stardust.enhancedfloaty.FloatyWindow>;
				public onCreateWindow(param0: com.stardust.enhancedfloaty.FloatyService, param1: globalAndroid.view.WindowManager): void;
				public close(): void;
				public onViewCreated(param0: globalAndroid.view.View): void;
				public getFloatyService(): com.stardust.enhancedfloaty.FloatyService;
				public onCreateView(param0: com.stardust.enhancedfloaty.FloatyService): globalAndroid.view.View;
				public setWindowLayoutParams(param0: globalAndroid.view.WindowManager.LayoutParams): void;
				public onCreateWindowLayoutParams(): globalAndroid.view.WindowManager.LayoutParams;
				public setWindowBridge(param0: com.stardust.enhancedfloaty.WindowBridge): void;
				public getWindowLayoutParams(): globalAndroid.view.WindowManager.LayoutParams;
				public getWindowView(): globalAndroid.view.View;
				public onServiceDestroy(param0: com.stardust.enhancedfloaty.FloatyService): void;
				public onAttachToWindow(param0: globalAndroid.view.View, param1: globalAndroid.view.WindowManager): void;
				public constructor();
				public getWindowBridge(): com.stardust.enhancedfloaty.WindowBridge;
				public getWindowManager(): globalAndroid.view.WindowManager;
				public setWindowManager(param0: globalAndroid.view.WindowManager): void;
				public onCreate(param0: com.stardust.enhancedfloaty.FloatyService, param1: globalAndroid.view.WindowManager): void;
				public onCreateWindowBridge(param0: globalAndroid.view.WindowManager.LayoutParams): com.stardust.enhancedfloaty.WindowBridge;
				public setWindowView(param0: globalAndroid.view.View): void;
				public attachToWindow(param0: globalAndroid.view.View, param1: globalAndroid.view.WindowManager): void;
				public updateWindowLayoutParams(param0: globalAndroid.view.WindowManager.LayoutParams): void;
			}
		}
	}
}

declare module com {
	export module stardust {
		export module enhancedfloaty {
			export class ResizableExpandableFloaty extends java.lang.Object {
				public static class: java.lang.Class<com.stardust.enhancedfloaty.ResizableExpandableFloaty>;
				/**
				 * Constructs a new instance of the com.stardust.enhancedfloaty.ResizableExpandableFloaty interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					inflateCollapsedView(param0: com.stardust.enhancedfloaty.FloatyService, param1: com.stardust.enhancedfloaty.ResizableExpandableFloatyWindow): globalAndroid.view.View;
					inflateExpandedView(param0: com.stardust.enhancedfloaty.FloatyService, param1: com.stardust.enhancedfloaty.ResizableExpandableFloatyWindow): globalAndroid.view.View;
					getResizerView(param0: globalAndroid.view.View): globalAndroid.view.View;
					getMoveCursorView(param0: globalAndroid.view.View): globalAndroid.view.View;
					getCollapsedHiddenWidthRadio(): number;
					getCollapsedViewUnpressedAlpha(): number;
					getCollapsedViewPressedAlpha(): number;
					shouldRequestFocusWhenExpand(): boolean;
					getInitialX(): number;
					getInitialY(): number;
					getInitialHeight(): number;
					getInitialWidth(): number;
					isInitialExpanded(): boolean;
				});
				public constructor();
				public getResizerView(param0: globalAndroid.view.View): globalAndroid.view.View;
				public getInitialHeight(): number;
				public getCollapsedViewUnpressedAlpha(): number;
				public inflateExpandedView(param0: com.stardust.enhancedfloaty.FloatyService, param1: com.stardust.enhancedfloaty.ResizableExpandableFloatyWindow): globalAndroid.view.View;
				public inflateCollapsedView(param0: com.stardust.enhancedfloaty.FloatyService, param1: com.stardust.enhancedfloaty.ResizableExpandableFloatyWindow): globalAndroid.view.View;
				public getInitialY(): number;
				public getMoveCursorView(param0: globalAndroid.view.View): globalAndroid.view.View;
				public getCollapsedHiddenWidthRadio(): number;
				public shouldRequestFocusWhenExpand(): boolean;
				public getCollapsedViewPressedAlpha(): number;
				public isInitialExpanded(): boolean;
				public getInitialWidth(): number;
				public getInitialX(): number;
			}
			export module ResizableExpandableFloaty {
				export abstract class AbstractResizableExpandableFloaty extends java.lang.Object implements com.stardust.enhancedfloaty.ResizableExpandableFloaty {
					public static class: java.lang.Class<com.stardust.enhancedfloaty.ResizableExpandableFloaty.AbstractResizableExpandableFloaty>;
					public getResizerView(param0: globalAndroid.view.View): globalAndroid.view.View;
					public shouldRequestFocusWhenExpand(): boolean;
					public getInitialX(): number;
					public setInitialExpanded(param0: boolean): void;
					public inflateCollapsedView(param0: com.stardust.enhancedfloaty.FloatyService, param1: com.stardust.enhancedfloaty.ResizableExpandableFloatyWindow): globalAndroid.view.View;
					public getCollapsedViewUnpressedAlpha(): number;
					public getInitialHeight(): number;
					public isInitialExpanded(): boolean;
					public getMoveCursorView(param0: globalAndroid.view.View): globalAndroid.view.View;
					public setCollapsedViewPressedAlpha(param0: number): void;
					public getCollapsedHiddenWidthRadio(): number;
					public constructor();
					public setCollapsedHiddenWidthRadio(param0: number): void;
					public getCollapsedViewPressedAlpha(): number;
					public inflateExpandedView(param0: com.stardust.enhancedfloaty.FloatyService, param1: com.stardust.enhancedfloaty.ResizableExpandableFloatyWindow): globalAndroid.view.View;
					public setInitialX(param0: number): void;
					public getInitialY(): number;
					public setCollapsedViewUnpressedAlpha(param0: number): void;
					public setInitialY(param0: number): void;
					public setInitialWidth(param0: number): void;
					public setShouldRequestFocusWhenExpand(param0: boolean): void;
					public setInitialHeight(param0: number): void;
					public getInitialWidth(): number;
				}
			}
		}
	}
}

declare module com {
	export module stardust {
		export module enhancedfloaty {
			export class ResizableExpandableFloatyWindow extends com.stardust.enhancedfloaty.FloatyWindow {
				public static class: java.lang.Class<com.stardust.enhancedfloaty.ResizableExpandableFloatyWindow>;
				public enableMove(): void;
				public inflateWindowViews(param0: com.stardust.enhancedfloaty.FloatyService): void;
				public onCreateWindowLayoutParams(): globalAndroid.view.WindowManager.LayoutParams;
				public constructor();
				public getResizer(): globalAndroid.view.View;
				public getExpandedViewY(): number;
				public initGesture(): void;
				public getCollapsedViewX(): number;
				public setKeyListener(): void;
				public setExpandedViewY(param0: number): void;
				public getCollapsedViewY(): number;
				public setCollapsedViewX(param0: number): void;
				public requestWindowFocus(): void;
				public getExpandedViewX(): number;
				public getViewSwitcher(): com.stardust.widget.ViewSwitcher;
				public getExpandedView(): globalAndroid.view.View;
				public constructor(param0: com.stardust.enhancedfloaty.ResizableExpandableFloaty);
				public getCollapsedView(): globalAndroid.view.View;
				public onCreateView(param0: com.stardust.enhancedfloaty.FloatyService): globalAndroid.view.View;
				public setInitialState(): void;
				public disableWindowFocus(): void;
				public collapse(): void;
				public setWindowLayoutInScreen(): void;
				public onAttachToWindow(param0: globalAndroid.view.View, param1: globalAndroid.view.WindowManager): void;
				public getMoveCursor(): globalAndroid.view.View;
				public setDragGesture(param0: com.stardust.enhancedfloaty.gesture.DragGesture): void;
				public getFloaty(): com.stardust.enhancedfloaty.ResizableExpandableFloaty;
				public expand(): void;
				public getDragGesture(): com.stardust.enhancedfloaty.gesture.DragGesture;
				public getViewStack(): com.stardust.enhancedfloaty.ViewStack;
				public onCreateWindowBridge(param0: globalAndroid.view.WindowManager.LayoutParams): com.stardust.enhancedfloaty.WindowBridge;
				public setCollapsedViewY(param0: number): void;
				public setWindowLayoutNoLimit(): void;
				public setExpandedViewX(param0: number): void;
				public enableResize(): void;
			}
		}
	}
}

declare module com {
	export module stardust {
		export module enhancedfloaty {
			export class ResizableFloaty extends java.lang.Object {
				public static class: java.lang.Class<com.stardust.enhancedfloaty.ResizableFloaty>;
				/**
				 * Constructs a new instance of the com.stardust.enhancedfloaty.ResizableFloaty interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					inflateView(param0: com.stardust.enhancedfloaty.FloatyService, param1: com.stardust.enhancedfloaty.ResizableFloatyWindow): globalAndroid.view.View;
					getResizerView(param0: globalAndroid.view.View): globalAndroid.view.View;
					getMoveCursorView(param0: globalAndroid.view.View): globalAndroid.view.View;
				});
				public constructor();
				public getResizerView(param0: globalAndroid.view.View): globalAndroid.view.View;
				public getMoveCursorView(param0: globalAndroid.view.View): globalAndroid.view.View;
				public inflateView(param0: com.stardust.enhancedfloaty.FloatyService, param1: com.stardust.enhancedfloaty.ResizableFloatyWindow): globalAndroid.view.View;
			}
			export module ResizableFloaty {
				export abstract class AbstractResizableFloaty extends java.lang.Object implements com.stardust.enhancedfloaty.ResizableFloaty {
					public static class: java.lang.Class<com.stardust.enhancedfloaty.ResizableFloaty.AbstractResizableFloaty>;
					public getMoveCursorView(param0: globalAndroid.view.View): globalAndroid.view.View;
					public constructor();
					public getResizerView(param0: globalAndroid.view.View): globalAndroid.view.View;
					public inflateView(param0: com.stardust.enhancedfloaty.FloatyService, param1: com.stardust.enhancedfloaty.ResizableFloatyWindow): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module com {
	export module stardust {
		export module enhancedfloaty {
			export class ResizableFloatyWindow extends com.stardust.enhancedfloaty.FloatyWindow {
				public static class: java.lang.Class<com.stardust.enhancedfloaty.ResizableFloatyWindow>;
				public getResizer(): globalAndroid.view.View;
				public constructor(param0: com.stardust.enhancedfloaty.ResizableFloaty);
				public getRootView(): globalAndroid.view.View;
				public onViewCreated(param0: globalAndroid.view.View): void;
				public onCreateView(param0: com.stardust.enhancedfloaty.FloatyService): globalAndroid.view.View;
				public onCreate(param0: com.stardust.enhancedfloaty.FloatyService, param1: globalAndroid.view.WindowManager): void;
				public onCreateWindowLayoutParams(): globalAndroid.view.WindowManager.LayoutParams;
				public getMoveCursor(): globalAndroid.view.View;
				public constructor();
			}
		}
	}
}

declare module com {
	export module stardust {
		export module enhancedfloaty {
			export class ViewStack extends java.lang.Object {
				public static class: java.lang.Class<com.stardust.enhancedfloaty.ViewStack>;
				public goBack(): void;
				public setRootView(param0: globalAndroid.view.View): void;
				public canGoBack(): boolean;
				public goBackToFirst(): void;
				public constructor(param0: com.stardust.enhancedfloaty.ViewStack.CurrentViewSetter);
				public navigateTo(param0: globalAndroid.view.View): void;
			}
			export module ViewStack {
				export class CurrentViewSetter extends java.lang.Object {
					public static class: java.lang.Class<com.stardust.enhancedfloaty.ViewStack.CurrentViewSetter>;
					/**
					 * Constructs a new instance of the com.stardust.enhancedfloaty.ViewStack$CurrentViewSetter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setCurrentView(param0: globalAndroid.view.View): void;
					});
					public constructor();
					public setCurrentView(param0: globalAndroid.view.View): void;
				}
				export class NavigableView extends java.lang.Object {
					public static class: java.lang.Class<com.stardust.enhancedfloaty.ViewStack.NavigableView>;
					/**
					 * Constructs a new instance of the com.stardust.enhancedfloaty.ViewStack$NavigableView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						goBack(): void;
					});
					public constructor();
					public goBack(): void;
				}
			}
		}
	}
}

declare module com {
	export module stardust {
		export module enhancedfloaty {
			export class WindowBridge extends java.lang.Object {
				public static class: java.lang.Class<com.stardust.enhancedfloaty.WindowBridge>;
				/**
				 * Constructs a new instance of the com.stardust.enhancedfloaty.WindowBridge interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getX(): number;
					getY(): number;
					updatePosition(param0: number, param1: number): void;
					getWidth(): number;
					getHeight(): number;
					updateMeasure(param0: number, param1: number): void;
					getScreenWidth(): number;
					getScreenHeight(): number;
				});
				public constructor();
				public getWidth(): number;
				public getHeight(): number;
				public getScreenHeight(): number;
				public updateMeasure(param0: number, param1: number): void;
				public getX(): number;
				public getY(): number;
				public updatePosition(param0: number, param1: number): void;
				public getScreenWidth(): number;
			}
			export module WindowBridge {
				export class DefaultImpl extends java.lang.Object implements com.stardust.enhancedfloaty.WindowBridge {
					public static class: java.lang.Class<com.stardust.enhancedfloaty.WindowBridge.DefaultImpl>;
					public getScreenHeight(): number;
					public getX(): number;
					public getHeight(): number;
					public updateMeasure(param0: number, param1: number): void;
					public getWidth(): number;
					public getY(): number;
					public getScreenWidth(): number;
					public constructor(param0: globalAndroid.view.WindowManager.LayoutParams, param1: globalAndroid.view.WindowManager, param2: globalAndroid.view.View);
					public updatePosition(param0: number, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module stardust {
		export module enhancedfloaty {
			export module gesture {
				export class DragGesture extends globalAndroid.view.GestureDetector.SimpleOnGestureListener {
					public static class: java.lang.Class<com.stardust.enhancedfloaty.gesture.DragGesture>;
					public mWindowBridge: com.stardust.enhancedfloaty.WindowBridge;
					public mView: globalAndroid.view.View;
					public setUnpressedAlpha(param0: number): void;
					public onDoubleTap(param0: globalAndroid.view.MotionEvent): boolean;
					public onContextClick(param0: globalAndroid.view.MotionEvent): boolean;
					public setPressedAlpha(param0: number): void;
					public onLongPress(param0: globalAndroid.view.MotionEvent): void;
					public onSingleTapUp(param0: globalAndroid.view.MotionEvent): boolean;
					public getKeepToSideHiddenWidthRadio(): number;
					public isKeepToSide(): boolean;
					public onScroll(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
					public onDown(param0: globalAndroid.view.MotionEvent): boolean;
					public keepToSide(): void;
					public constructor();
					public getUnpressedAlpha(): number;
					public setKeepToSideHiddenWidthRadio(param0: number): void;
					public setKeepToSide(param0: boolean): void;
					public onSingleTapConfirmed(param0: globalAndroid.view.MotionEvent): boolean;
					public onShowPress(param0: globalAndroid.view.MotionEvent): void;
					public onDoubleTapEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public setOnDraggedViewClickListener(param0: globalAndroid.view.View.OnClickListener): void;
					public getPressedAlpha(): number;
					public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
					public constructor(param0: com.stardust.enhancedfloaty.WindowBridge, param1: globalAndroid.view.View);
				}
			}
		}
	}
}

declare module com {
	export module stardust {
		export module enhancedfloaty {
			export module gesture {
				export class ResizeGesture extends globalAndroid.view.GestureDetector.SimpleOnGestureListener {
					public static class: java.lang.Class<com.stardust.enhancedfloaty.gesture.ResizeGesture>;
					public onDoubleTap(param0: globalAndroid.view.MotionEvent): boolean;
					public onContextClick(param0: globalAndroid.view.MotionEvent): boolean;
					public onLongPress(param0: globalAndroid.view.MotionEvent): void;
					public static enableResize(param0: globalAndroid.view.View, param1: com.stardust.enhancedfloaty.WindowBridge): com.stardust.enhancedfloaty.gesture.ResizeGesture;
					public onSingleTapUp(param0: globalAndroid.view.MotionEvent): boolean;
					public onScroll(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
					public static enableResize(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: com.stardust.enhancedfloaty.WindowBridge): com.stardust.enhancedfloaty.gesture.ResizeGesture;
					public onDown(param0: globalAndroid.view.MotionEvent): boolean;
					public setMinWidth(param0: number): void;
					public constructor();
					public setMinHeight(param0: number): void;
					public constructor(param0: com.stardust.enhancedfloaty.WindowBridge, param1: globalAndroid.view.View, param2: globalAndroid.view.View);
					public onSingleTapConfirmed(param0: globalAndroid.view.MotionEvent): boolean;
					public onShowPress(param0: globalAndroid.view.MotionEvent): void;
					public onDoubleTapEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module stardust {
		export module enhancedfloaty {
			export module util {
				export class FloatingWindowPermissionUtil extends java.lang.Object {
					public static class: java.lang.Class<com.stardust.enhancedfloaty.util.FloatingWindowPermissionUtil>;
					public constructor();
					public static goToFloatingWindowPermissionSettingIfNeeded(param0: globalAndroid.content.Context): void;
					public static goToFloatingWindowPermissionSetting(param0: globalAndroid.content.Context): void;
					public static goToAppDetailSettings(param0: globalAndroid.content.Context, param1: string): boolean;
					public static hasFloatingWindowPermission(param0: globalAndroid.content.Context): boolean;
				}
			}
		}
	}
}

declare module com {
	export module stardust {
		export module enhancedfloaty {
			export module util {
				export class WindowTypeCompat extends java.lang.Object {
					public static class: java.lang.Class<com.stardust.enhancedfloaty.util.WindowTypeCompat>;
					public static getWindowType(param0: number): number;
					public constructor();
					public static getPhoneWindowType(): number;
					public static getWindowType(): number;
				}
			}
		}
	}
}

declare module com {
	export module stardust {
		export module lib {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.stardust.lib.BuildConfig>;
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

declare module com {
	export module stardust {
		export module widget {
			export class ViewSupplier extends java.lang.Object implements java.io.Serializable {
				public static class: java.lang.Class<com.stardust.widget.ViewSupplier>;
				/**
				 * Constructs a new instance of the com.stardust.widget.ViewSupplier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					inflateView(param0: globalAndroid.content.Context): globalAndroid.view.View;
				});
				public constructor();
				public inflateView(param0: globalAndroid.content.Context): globalAndroid.view.View;
			}
		}
	}
}

declare module com {
	export module stardust {
		export module widget {
			export class ViewSwitcher extends globalAndroid.widget.ViewSwitcher {
				public static class: java.lang.Class<com.stardust.widget.ViewSwitcher>;
				public childDrawableStateChanged(param0: globalAndroid.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				/** @deprecated */
				public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
				public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
				public clearChildFocus(param0: globalAndroid.view.View): void;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public isLayoutRequested(): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
				public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public requestFitSystemWindows(): void;
				public getTextDirection(): number;
				public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public requestTransparentRegion(param0: globalAndroid.view.View): void;
				public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
				public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
				public showFirst(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getTextAlignment(): number;
				public getParentForAccessibility(): globalAndroid.view.ViewParent;
				public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
				public addView(param0: globalAndroid.view.View, param1: number): void;
				/** @deprecated */
				public invalidateChildInParent(param0: number[], param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
				public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
				public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
				public isTextDirectionResolved(): boolean;
				public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
				public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number[]): void;
				public showSecond(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.View, param2: globalAndroid.view.View);
				public recomputeViewAttributes(param0: globalAndroid.view.View): void;
				public isLayoutDirectionResolved(): boolean;
				public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
				public isTextAlignmentResolved(): boolean;
				public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
				public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
				public getLayoutDirection(): number;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public removeView(param0: globalAndroid.view.View): void;
				public getCurrentViewIndex(): number;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
				public focusSearch(param0: number): globalAndroid.view.View;
				public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
				public requestLayout(): void;
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public bringChildToFront(param0: globalAndroid.view.View): void;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
				public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public focusableViewAvailable(param0: globalAndroid.view.View): void;
				public getCurrentView(): globalAndroid.view.View;
				public canResolveLayoutDirection(): boolean;
				public addView(param0: globalAndroid.view.View): void;
				public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
				public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setSecondView(param0: globalAndroid.view.View): void;
				public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public onStopNestedScroll(param0: globalAndroid.view.View): void;
				public getParent(): globalAndroid.view.ViewParent;
				public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
			}
		}
	}
}