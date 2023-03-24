declare module com {
	export module stardust {
		export module enhancedfloaty {
			export class FloatyService extends android.app.Service {
				public static class: java.lang.Class<com.stardust.enhancedfloaty.FloatyService>;
				public onTrimMemory(level: number): void;
				public onBind(param0: android.content.Intent): android.os.IBinder;
				public onBind(intent: android.content.Intent): android.os.IBinder;
				public onCreate(): void;
				public onDestroy(): void;
				public onTrimMemory(param0: number): void;
				public static addWindow(window: com.stardust.enhancedfloaty.FloatyWindow): void;
				public static removeWindow(window: com.stardust.enhancedfloaty.FloatyWindow): void;
				public constructor();
				public constructor(base: android.content.Context);
			}
		}
	}
}

declare module com {
	export module stardust {
		export module enhancedfloaty {
			export abstract class FloatyWindow extends java.lang.Object {
				public static class: java.lang.Class<com.stardust.enhancedfloaty.FloatyWindow>;
				public close(): void;
				public setWindowBridge(windowBridge: com.stardust.enhancedfloaty.WindowBridge): void;
				public onViewCreated(view: android.view.View): void;
				public getFloatyService(): com.stardust.enhancedfloaty.FloatyService;
				public onCreateWindow(service: com.stardust.enhancedfloaty.FloatyService, manager: android.view.WindowManager): void;
				public onCreateWindowBridge(params: android.view.WindowManager.LayoutParams): com.stardust.enhancedfloaty.WindowBridge;
				public getWindowManager(): android.view.WindowManager;
				public getWindowLayoutParams(): android.view.WindowManager.LayoutParams;
				public onServiceDestroy(service: com.stardust.enhancedfloaty.FloatyService): void;
				public onCreate(service: com.stardust.enhancedfloaty.FloatyService, manager: android.view.WindowManager): void;
				public constructor();
				public setWindowView(windowView: android.view.View): void;
				public getWindowBridge(): com.stardust.enhancedfloaty.WindowBridge;
				public updateWindowLayoutParams(params: android.view.WindowManager.LayoutParams): void;
				public setWindowLayoutParams(windowLayoutParams: android.view.WindowManager.LayoutParams): void;
				public setWindowManager(windowManager: android.view.WindowManager): void;
				public onCreateView(param0: com.stardust.enhancedfloaty.FloatyService): android.view.View;
				public attachToWindow(view: android.view.View, manager: android.view.WindowManager): void;
				public onCreateWindowLayoutParams(): android.view.WindowManager.LayoutParams;
				public getWindowView(): android.view.View;
				public onAttachToWindow(view: android.view.View, manager: android.view.WindowManager): void;
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
					inflateCollapsedView(param0: com.stardust.enhancedfloaty.FloatyService, param1: com.stardust.enhancedfloaty.ResizableExpandableFloatyWindow): android.view.View;
					inflateExpandedView(param0: com.stardust.enhancedfloaty.FloatyService, param1: com.stardust.enhancedfloaty.ResizableExpandableFloatyWindow): android.view.View;
					getResizerView(param0: android.view.View): android.view.View;
					getMoveCursorView(param0: android.view.View): android.view.View;
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
				public getResizerView(param0: android.view.View): android.view.View;
				public getInitialHeight(): number;
				public getCollapsedViewUnpressedAlpha(): number;
				public getMoveCursorView(param0: android.view.View): android.view.View;
				public inflateCollapsedView(param0: com.stardust.enhancedfloaty.FloatyService, param1: com.stardust.enhancedfloaty.ResizableExpandableFloatyWindow): android.view.View;
				public getInitialY(): number;
				public getCollapsedHiddenWidthRadio(): number;
				public shouldRequestFocusWhenExpand(): boolean;
				public inflateExpandedView(param0: com.stardust.enhancedfloaty.FloatyService, param1: com.stardust.enhancedfloaty.ResizableExpandableFloatyWindow): android.view.View;
				public getCollapsedViewPressedAlpha(): number;
				public isInitialExpanded(): boolean;
				public getInitialWidth(): number;
				public getInitialX(): number;
			}
			export module ResizableExpandableFloaty {
				export abstract class AbstractResizableExpandableFloaty extends java.lang.Object implements com.stardust.enhancedfloaty.ResizableExpandableFloaty {
					public static class: java.lang.Class<com.stardust.enhancedfloaty.ResizableExpandableFloaty.AbstractResizableExpandableFloaty>;
					public setCollapsedHiddenWidthRadio(collapsedHiddenWidthRadio: number): void;
					public setInitialX(initialX: number): void;
					public getResizerView(param0: android.view.View): android.view.View;
					public getCollapsedViewUnpressedAlpha(): number;
					public getCollapsedHiddenWidthRadio(): number;
					public constructor();
					public inflateExpandedView(param0: com.stardust.enhancedfloaty.FloatyService, param1: com.stardust.enhancedfloaty.ResizableExpandableFloatyWindow): android.view.View;
					public setInitialY(initialY: number): void;
					public getInitialWidth(): number;
					public setInitialHeight(initialHeight: number): void;
					public getMoveCursorView(param0: android.view.View): android.view.View;
					public getMoveCursorView(expandedView: android.view.View): android.view.View;
					public shouldRequestFocusWhenExpand(): boolean;
					public setShouldRequestFocusWhenExpand(requestFocusWhenExpand: boolean): void;
					public getInitialX(): number;
					public setInitialExpanded(initialExpanded: boolean): void;
					public getInitialHeight(): number;
					public isInitialExpanded(): boolean;
					public getCollapsedViewPressedAlpha(): number;
					public inflateCollapsedView(param0: com.stardust.enhancedfloaty.FloatyService, param1: com.stardust.enhancedfloaty.ResizableExpandableFloatyWindow): android.view.View;
					public setCollapsedViewPressedAlpha(collapsedViewPressedAlpha: number): void;
					public getInitialY(): number;
					public setInitialWidth(initialWidth: number): void;
					public getResizerView(expandedView: android.view.View): android.view.View;
					public setCollapsedViewUnpressedAlpha(collapsedViewUnpressedAlpha: number): void;
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
				public getCollapsedView(): android.view.View;
				public setDragGesture(dragGesture: com.stardust.enhancedfloaty.gesture.DragGesture): void;
				public constructor();
				public constructor(floaty: com.stardust.enhancedfloaty.ResizableExpandableFloaty);
				public getExpandedViewY(): number;
				public getExpandedView(): android.view.View;
				public initGesture(): void;
				public getCollapsedViewX(): number;
				public setKeyListener(): void;
				public getCollapsedViewY(): number;
				public requestWindowFocus(): void;
				public getExpandedViewX(): number;
				public setExpandedViewX(expandedViewX: number): void;
				public getViewSwitcher(): com.stardust.widget.ViewSwitcher;
				public setExpandedViewY(expandedViewY: number): void;
				public onCreateView(service: com.stardust.enhancedfloaty.FloatyService): android.view.View;
				public setInitialState(): void;
				public disableWindowFocus(): void;
				public inflateWindowViews(service: com.stardust.enhancedfloaty.FloatyService): void;
				public collapse(): void;
				public onCreateWindowBridge(params: android.view.WindowManager.LayoutParams): com.stardust.enhancedfloaty.WindowBridge;
				public setWindowLayoutInScreen(): void;
				public getMoveCursor(): android.view.View;
				public getFloaty(): com.stardust.enhancedfloaty.ResizableExpandableFloaty;
				public expand(): void;
				public getDragGesture(): com.stardust.enhancedfloaty.gesture.DragGesture;
				public getResizer(): android.view.View;
				public getViewStack(): com.stardust.enhancedfloaty.ViewStack;
				public onCreateView(param0: com.stardust.enhancedfloaty.FloatyService): android.view.View;
				public setCollapsedViewX(collapsedViewX: number): void;
				public onCreateWindowLayoutParams(): android.view.WindowManager.LayoutParams;
				public setWindowLayoutNoLimit(): void;
				public onAttachToWindow(view: android.view.View, manager: android.view.WindowManager): void;
				public setCollapsedViewY(collapsedViewY: number): void;
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
					inflateView(param0: com.stardust.enhancedfloaty.FloatyService, param1: com.stardust.enhancedfloaty.ResizableFloatyWindow): android.view.View;
					getResizerView(param0: android.view.View): android.view.View;
					getMoveCursorView(param0: android.view.View): android.view.View;
				});
				public constructor();
				public getResizerView(param0: android.view.View): android.view.View;
				public getMoveCursorView(param0: android.view.View): android.view.View;
				public inflateView(param0: com.stardust.enhancedfloaty.FloatyService, param1: com.stardust.enhancedfloaty.ResizableFloatyWindow): android.view.View;
			}
			export module ResizableFloaty {
				export abstract class AbstractResizableFloaty extends java.lang.Object implements com.stardust.enhancedfloaty.ResizableFloaty {
					public static class: java.lang.Class<com.stardust.enhancedfloaty.ResizableFloaty.AbstractResizableFloaty>;
					public getResizerView(view: android.view.View): android.view.View;
					public getMoveCursorView(param0: android.view.View): android.view.View;
					public constructor();
					public getResizerView(param0: android.view.View): android.view.View;
					public getMoveCursorView(view: android.view.View): android.view.View;
					public inflateView(param0: com.stardust.enhancedfloaty.FloatyService, param1: com.stardust.enhancedfloaty.ResizableFloatyWindow): android.view.View;
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
				public onViewCreated(view: android.view.View): void;
				public onCreateView(service: com.stardust.enhancedfloaty.FloatyService): android.view.View;
				public getResizer(): android.view.View;
				public onCreateView(param0: com.stardust.enhancedfloaty.FloatyService): android.view.View;
				public onCreateWindowLayoutParams(): android.view.WindowManager.LayoutParams;
				public onCreate(service: com.stardust.enhancedfloaty.FloatyService, manager: android.view.WindowManager): void;
				public getRootView(): android.view.View;
				public getMoveCursor(): android.view.View;
				public constructor(floaty: com.stardust.enhancedfloaty.ResizableFloaty);
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
				public navigateTo(v: android.view.View): void;
				public constructor(currentViewSetter: com.stardust.enhancedfloaty.ViewStack.CurrentViewSetter);
				public canGoBack(): boolean;
				public goBackToFirst(): void;
				public setRootView(view: android.view.View): void;
			}
			export module ViewStack {
				export class CurrentViewSetter extends java.lang.Object {
					public static class: java.lang.Class<com.stardust.enhancedfloaty.ViewStack.CurrentViewSetter>;
					/**
					 * Constructs a new instance of the com.stardust.enhancedfloaty.ViewStack$CurrentViewSetter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setCurrentView(param0: android.view.View): void;
					});
					public constructor();
					public setCurrentView(param0: android.view.View): void;
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
					public constructor(windowLayoutParams: android.view.WindowManager.LayoutParams, windowManager: android.view.WindowManager, windowView: android.view.View);
					public getX(): number;
					public getHeight(): number;
					public updateMeasure(param0: number, param1: number): void;
					public getWidth(): number;
					public updateMeasure(width: number, height: number): void;
					public getY(): number;
					public updatePosition(x: number, y: number): void;
					public getScreenWidth(): number;
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
				export class DragGesture extends android.view.GestureDetector.SimpleOnGestureListener {
					public static class: java.lang.Class<com.stardust.enhancedfloaty.gesture.DragGesture>;
					public mWindowBridge: com.stardust.enhancedfloaty.WindowBridge;
					public mView: android.view.View;
					public onSingleTapConfirmed(e: android.view.MotionEvent): boolean;
					public onLongPress(e: android.view.MotionEvent): void;
					public onShowPress(param0: android.view.MotionEvent): void;
					public onSingleTapConfirmed(param0: android.view.MotionEvent): boolean;
					public setKeepToSideHiddenWidthRadio(keepToSideHiddenWidthRadio: number): void;
					public onContextClick(e: android.view.MotionEvent): boolean;
					public onDown(event: android.view.MotionEvent): boolean;
					public setKeepToSide(keepToSide: boolean): void;
					public getKeepToSideHiddenWidthRadio(): number;
					public setOnDraggedViewClickListener(onClickListener: android.view.View.OnClickListener): void;
					public constructor();
					public getUnpressedAlpha(): number;
					public onDown(param0: android.view.MotionEvent): boolean;
					public onDoubleTapEvent(param0: android.view.MotionEvent): boolean;
					public onContextClick(param0: android.view.MotionEvent): boolean;
					public onDown(e: android.view.MotionEvent): boolean;
					public getPressedAlpha(): number;
					public onShowPress(e: android.view.MotionEvent): void;
					public constructor(windowBridge: com.stardust.enhancedfloaty.WindowBridge, view: android.view.View);
					public onFling(e1: android.view.MotionEvent, e2: android.view.MotionEvent, velocityX: number, velocityY: number): boolean;
					public onDoubleTap(param0: android.view.MotionEvent): boolean;
					public onFling(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
					public onDoubleTap(e: android.view.MotionEvent): boolean;
					public setUnpressedAlpha(unpressedAlpha: number): void;
					public isKeepToSide(): boolean;
					public onScroll(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
					public keepToSide(): void;
					public onSingleTapUp(e: android.view.MotionEvent): boolean;
					public onSingleTapUp(param0: android.view.MotionEvent): boolean;
					public onLongPress(param0: android.view.MotionEvent): void;
					public onScroll(e1: android.view.MotionEvent, e2: android.view.MotionEvent, distanceX: number, distanceY: number): boolean;
					public setPressedAlpha(pressedAlpha: number): void;
					public onDoubleTapEvent(e: android.view.MotionEvent): boolean;
				}
			}
		}
	}
}

declare module com {
	export module stardust {
		export module enhancedfloaty {
			export module gesture {
				export class ResizeGesture extends android.view.GestureDetector.SimpleOnGestureListener {
					public static class: java.lang.Class<com.stardust.enhancedfloaty.gesture.ResizeGesture>;
					public setMinWidth(minWidth: number): void;
					public onSingleTapConfirmed(e: android.view.MotionEvent): boolean;
					public onLongPress(e: android.view.MotionEvent): void;
					public onShowPress(param0: android.view.MotionEvent): void;
					public onSingleTapConfirmed(param0: android.view.MotionEvent): boolean;
					public onContextClick(e: android.view.MotionEvent): boolean;
					public onDown(event: android.view.MotionEvent): boolean;
					public constructor();
					public setMinHeight(minHeight: number): void;
					public onDown(param0: android.view.MotionEvent): boolean;
					public onDoubleTapEvent(param0: android.view.MotionEvent): boolean;
					public onContextClick(param0: android.view.MotionEvent): boolean;
					public onDown(e: android.view.MotionEvent): boolean;
					public onShowPress(e: android.view.MotionEvent): void;
					public onFling(e1: android.view.MotionEvent, e2: android.view.MotionEvent, velocityX: number, velocityY: number): boolean;
					public static enableResize(resizer: android.view.View, resizableView: android.view.View, windowBridge: com.stardust.enhancedfloaty.WindowBridge): com.stardust.enhancedfloaty.gesture.ResizeGesture;
					public onDoubleTap(param0: android.view.MotionEvent): boolean;
					public onFling(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
					public static enableResize(resizer: android.view.View, windowBridge: com.stardust.enhancedfloaty.WindowBridge): com.stardust.enhancedfloaty.gesture.ResizeGesture;
					public onDoubleTap(e: android.view.MotionEvent): boolean;
					public constructor(windowBridge: com.stardust.enhancedfloaty.WindowBridge, resizerView: android.view.View, resizableView: android.view.View);
					public onScroll(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
					public onSingleTapUp(e: android.view.MotionEvent): boolean;
					public onSingleTapUp(param0: android.view.MotionEvent): boolean;
					public onLongPress(param0: android.view.MotionEvent): void;
					public onScroll(e1: android.view.MotionEvent, e2: android.view.MotionEvent, distanceX: number, distanceY: number): boolean;
					public onDoubleTapEvent(e: android.view.MotionEvent): boolean;
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
					public static goToFloatingWindowPermissionSetting(context: android.content.Context): void;
					public static goToFloatingWindowPermissionSettingIfNeeded(context: android.content.Context): void;
					public static hasFloatingWindowPermission(context: android.content.Context): boolean;
					public static goToAppDetailSettings(context: android.content.Context, packageName: string): boolean;
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
					public constructor();
					public static getPhoneWindowType(): number;
					public static getWindowType(type: number): number;
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
					inflateView(param0: android.content.Context): android.view.View;
				});
				public constructor();
				public inflateView(param0: android.content.Context): android.view.View;
			}
		}
	}
}

declare module com {
	export module stardust {
		export module widget {
			export class ViewSwitcher extends android.widget.ViewSwitcher {
				public static class: java.lang.Class<com.stardust.widget.ViewSwitcher>;
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
				public showFirst(): void;
				public constructor(context: android.content.Context);
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public showSecond(): void;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public getCurrentViewIndex(): number;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public getCurrentView(): android.view.View;
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
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public setSecondView(v: android.view.View): void;
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
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
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
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onStopNestedScroll(param0: android.view.View): void;
				public constructor(context: android.content.Context, first: android.view.View, second: android.view.View);
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
		}
	}
}

//Generics information:

