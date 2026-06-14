/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module com {
	export module hjq {
		export module window {
			export class ActivityWindowLifecycle extends java.lang.Object implements android.app.Application.ActivityLifecycleCallbacks {
				public static class: java.lang.Class<com.hjq.window.ActivityWindowLifecycle>;
				public onActivityCreated(activity: android.app.Activity, savedInstanceState: android.os.Bundle): void;
				public onActivityPaused(param0: android.app.Activity): void;
				public onActivityDestroyed(param0: android.app.Activity): void;
				public onActivityCreated(param0: android.app.Activity, param1: android.os.Bundle): void;
				public onActivitySaveInstanceState(activity: android.app.Activity, outState: android.os.Bundle): void;
				public onActivityStopped(param0: android.app.Activity): void;
				public onActivityStopped(activity: android.app.Activity): void;
				public onActivityStarted(param0: android.app.Activity): void;
				public onActivityResumed(param0: android.app.Activity): void;
				public onActivityStarted(activity: android.app.Activity): void;
				public onActivitySaveInstanceState(param0: android.app.Activity, param1: android.os.Bundle): void;
				public onActivityPaused(activity: android.app.Activity): void;
				public onActivityDestroyed(activity: android.app.Activity): void;
				public onActivityResumed(activity: android.app.Activity): void;
			}
		}
	}
}

declare module com {
	export module hjq {
		export module window {
			export class EasyWindow<X>  extends java.lang.Object {
				public static class: java.lang.Class<com.hjq.window.EasyWindow<any>>;
				public recycle(): void;
				public postDelayed(runnable: java.lang.Runnable, delayMillis: number): boolean;
				public setDraggable(draggable: com.hjq.window.draggable.BaseDraggable): X;
				public setTag(tag: string): X;
				public setContentView(id: number): X;
				public setXOffset(px: number): X;
				public getWindowManager(): android.view.WindowManager;
				public setBackground(viewId: number, drawableId: number): X;
				public setVerticalWeight(verticalWeight: number): X;
				public setScreenBrightness(screenBrightness: number): X;
				public show(): void;
				public showAsDropDown(anchorView: android.view.View, showGravity: number): void;
				public setTextSize(id: number, unit: number, size: number): X;
				public setOnTouchListener(listener: com.hjq.window.EasyWindow.OnTouchListener<any>): X;
				public setWindowTitle(title: string): X;
				public setHint(id: number, text: string): X;
				public setYOffset(px: number): X;
				public getDraggable(): com.hjq.window.draggable.BaseDraggable;
				public setWindowParams(params: android.view.WindowManager.LayoutParams): X;
				public setDecorView(viewGroup: android.view.ViewGroup): X;
				public postUpdate(): void;
				public getContentView(): android.view.View;
				public removeWindowFlags(flags: number): X;
				public findViewById(id: number): android.view.View;
				public postAtTime(runnable: java.lang.Runnable, uptimeMillis: number): boolean;
				public setPreferredRefreshRate(preferredRefreshRate: number): X;
				public setScreenOrientation(orientation: number): X;
				public setOutsideTouchable(touchable: boolean): X;
				public setWindowFlags(flags: number): X;
				public setContentView(view: android.view.View): X;
				public setOnClickListener(id: number, listener: com.hjq.window.EasyWindow.OnClickListener<any>): X;
				public setDraggable(): X;
				public getContext(): android.content.Context;
				public static with(application: android.app.Application): com.hjq.window.EasyWindow<any>;
				public getHandler(): android.os.Handler;
				public setWindowAlpha(alpha: number): X;
				public update(): void;
				public static cancelByClass(clazz: java.lang.Class<com.hjq.window.EasyWindow<any>>): void;
				public setAnimStyle(id: number): X;
				public addWindowFlags(flags: number): X;
				public post(runnable: java.lang.Runnable): boolean;
				public run(): void;
				public onScreenOrientationChange(newOrientation: number): void;
				public showAsDropDown(anchorView: android.view.View): void;
				public setVerticalMargin(verticalMargin: number): X;
				public setDuration(duration: number): X;
				public setText(id: number): X;
				public showAsDropDown(anchorView: android.view.View, showGravity: number, xOff: number, yOff: number): void;
				public setOnLongClickListener(id: number, listener: com.hjq.window.EasyWindow.OnLongClickListener<any>): X;
				public setBackgroundDimAmount(amount: number): X;
				public static recycleByTag(tag: string): void;
				public setText(viewId: number, stringId: number): X;
				public setWindowToken(token: android.os.IBinder): X;
				public setLayoutInDisplayCutoutMode(mode: number): X;
				public setText(text: string): X;
				public setWidth(width: number): X;
				public constructor(activity: android.app.Activity);
				public setOnTouchListener(id: number, listener: com.hjq.window.EasyWindow.OnTouchListener<any>): X;
				public removeCallbacks(runnable: java.lang.Runnable): void;
				public setSystemUiVisibility(systemUiVisibility: number): X;
				public isShowing(): boolean;
				public static cancelAll(): void;
				public cancel(): void;
				public getWindowParams(): android.view.WindowManager.LayoutParams;
				public setTextSize(id: number, size: number): X;
				public setHeight(height: number): X;
				public setHorizontalMargin(horizontalMargin: number): X;
				public startActivity(clazz: java.lang.Class<any>): void;
				public getTag(): string;
				public setButtonBrightness(buttonBrightness: number): X;
				public setColorMode(colorMode: number): X;
				public setOnClickListener(listener: com.hjq.window.EasyWindow.OnClickListener<any>): X;
				public setImageDrawable(viewId: number, drawableId: number): X;
				public setBitmapFormat(format: number): X;
				public static recycleAll(): void;
				public getDecorView(): android.view.View;
				public setHintColor(id: number, color: number): X;
				public setPreferredDisplayModeId(id: number): X;
				public setImageDrawable(viewId: number, drawable: android.graphics.drawable.Drawable): X;
				public static with(activity: android.app.Activity): com.hjq.window.EasyWindow<any>;
				public setGravity(gravity: number): X;
				public constructor(application: android.app.Application);
				public setText(id: number, text: string): X;
				public setBackground(id: number, drawable: android.graphics.drawable.Drawable): X;
				public setTextColor(id: number, color: number): X;
				public startActivity(intent: android.content.Intent): void;
				public setWindowType(type: number): X;
				public setOnLongClickListener(listener: com.hjq.window.EasyWindow.OnLongClickListener<any>): X;
				public setHint(viewId: number, stringId: number): X;
				public setOnToastLifecycle(listener: com.hjq.window.EasyWindow.OnWindowLifecycle): X;
				public removeCallbacksAndMessages(): void;
				public setSoftInputMode(mode: number): X;
				public setBlurBehindRadius(blurBehindRadius: number): X;
				public static cancelByTag(tag: string): void;
				public hasWindowFlags(flags: number): boolean;
				public static recycleByClass(clazz: java.lang.Class<com.hjq.window.EasyWindow<any>>): void;
				public setVisibility(id: number, visibility: number): X;
			}
			export module EasyWindow {
				export class OnClickListener<V>  extends java.lang.Object {
					public static class: java.lang.Class<com.hjq.window.EasyWindow.OnClickListener<any>>;
					/**
					 * Constructs a new instance of the com.hjq.window.EasyWindow$OnClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onClick(param0: com.hjq.window.EasyWindow<any>, param1: V): void;
					});
					public constructor();
					public onClick(param0: com.hjq.window.EasyWindow<any>, param1: V): void;
				}
				export class OnLongClickListener<V>  extends java.lang.Object {
					public static class: java.lang.Class<com.hjq.window.EasyWindow.OnLongClickListener<any>>;
					/**
					 * Constructs a new instance of the com.hjq.window.EasyWindow$OnLongClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onLongClick(param0: com.hjq.window.EasyWindow<any>, param1: V): boolean;
					});
					public constructor();
					public onLongClick(param0: com.hjq.window.EasyWindow<any>, param1: V): boolean;
				}
				export class OnTouchListener<V>  extends java.lang.Object {
					public static class: java.lang.Class<com.hjq.window.EasyWindow.OnTouchListener<any>>;
					/**
					 * Constructs a new instance of the com.hjq.window.EasyWindow$OnTouchListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onTouch(param0: com.hjq.window.EasyWindow<any>, param1: V, param2: android.view.MotionEvent): boolean;
					});
					public constructor();
					public onTouch(param0: com.hjq.window.EasyWindow<any>, param1: V, param2: android.view.MotionEvent): boolean;
				}
				export class OnWindowLifecycle extends java.lang.Object {
					public static class: java.lang.Class<com.hjq.window.EasyWindow.OnWindowLifecycle>;
					/**
					 * Constructs a new instance of the com.hjq.window.EasyWindow$OnWindowLifecycle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWindowShow(window: com.hjq.window.EasyWindow<any>): void;
						onWindowCancel(window: com.hjq.window.EasyWindow<any>): void;
						onWindowRecycle(window: com.hjq.window.EasyWindow<any>): void;
					});
					public constructor();
					public onWindowCancel(window: com.hjq.window.EasyWindow<any>): void;
					public onWindowRecycle(window: com.hjq.window.EasyWindow<any>): void;
					public onWindowShow(window: com.hjq.window.EasyWindow<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module hjq {
		export module window {
			export class ScreenOrientationMonitor extends java.lang.Object implements android.content.ComponentCallbacks {
				public static class: java.lang.Class<com.hjq.window.ScreenOrientationMonitor>;
				public onLowMemory(): void;
				public onConfigurationChanged(newConfig: android.content.res.Configuration): void;
				public constructor(configuration: android.content.res.Configuration);
				public onConfigurationChanged(param0: android.content.res.Configuration): void;
			}
			export module ScreenOrientationMonitor {
				export class OnScreenOrientationCallback extends java.lang.Object {
					public static class: java.lang.Class<com.hjq.window.ScreenOrientationMonitor.OnScreenOrientationCallback>;
					/**
					 * Constructs a new instance of the com.hjq.window.ScreenOrientationMonitor$OnScreenOrientationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onScreenOrientationChange(newOrientation: number): void;
					});
					public constructor();
					public onScreenOrientationChange(newOrientation: number): void;
				}
			}
		}
	}
}

declare module com {
	export module hjq {
		export module window {
			export class ViewClickWrapper extends java.lang.Object implements android.view.View.OnClickListener {
				public static class: java.lang.Class<com.hjq.window.ViewClickWrapper>;
				public onClick(param0: android.view.View): void;
				public onClick(view: android.view.View): void;
			}
		}
	}
}

declare module com {
	export module hjq {
		export module window {
			export class ViewLongClickWrapper extends java.lang.Object implements android.view.View.OnLongClickListener {
				public static class: java.lang.Class<com.hjq.window.ViewLongClickWrapper>;
				public onLongClick(view: android.view.View): boolean;
				public onLongClick(param0: android.view.View): boolean;
			}
		}
	}
}

declare module com {
	export module hjq {
		export module window {
			export class ViewTouchWrapper extends java.lang.Object implements android.view.View.OnTouchListener {
				public static class: java.lang.Class<com.hjq.window.ViewTouchWrapper>;
				public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
				public onTouch(view: android.view.View, event: android.view.MotionEvent): boolean;
			}
		}
	}
}

declare module com {
	export module hjq {
		export module window {
			export class WindowLayout extends android.widget.FrameLayout {
				public static class: java.lang.Class<com.hjq.window.WindowLayout>;
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
				public generateDefaultLayoutParams(): android.widget.FrameLayout.LayoutParams;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
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
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public dispatchTouchEvent(ev: android.view.MotionEvent): boolean;
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
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public setOnTouchListener(l: android.view.View.OnTouchListener): void;
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
				public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
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

declare module com {
	export module hjq {
		export module window {
			export module draggable {
				export abstract class BaseDraggable extends java.lang.Object implements android.view.View.OnTouchListener {
					public static class: java.lang.Class<com.hjq.window.draggable.BaseDraggable>;
					public getWindow(): com.hjq.window.EasyWindow<any>;
					public getWindowInvisibleHeight(): number;
					public refreshLocationCoordinate(): void;
					public isFingerMove(downX: number, upX: number, downY: number, upY: number): boolean;
					public onScreenOrientationChange(): void;
					public getDecorView(): android.view.View;
					public updateLocation(x: number, y: number): void;
					public start(window: com.hjq.window.EasyWindow<any>): void;
					public getWindowHeight(): number;
					public getWindowWidth(): number;
					public constructor();
					public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
					public getMinTouchDistance(): number;
					public getWindowInvisibleWidth(): number;
				}
			}
		}
	}
}

declare module com {
	export module hjq {
		export module window {
			export module draggable {
				export class MovingDraggable extends com.hjq.window.draggable.BaseDraggable {
					public static class: java.lang.Class<com.hjq.window.draggable.MovingDraggable>;
					public constructor();
					public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
					public onTouch(v: android.view.View, event: android.view.MotionEvent): boolean;
				}
			}
		}
	}
}

declare module com {
	export module hjq {
		export module window {
			export module draggable {
				export class SpringDraggable extends com.hjq.window.draggable.BaseDraggable {
					public static class: java.lang.Class<com.hjq.window.draggable.SpringDraggable>;
					public static ORIENTATION_HORIZONTAL: number;
					public static ORIENTATION_VERTICAL: number;
					public constructor(orientation: number);
					public startHorizontalAnimation(startX: number, endX: number, y: number): void;
					public constructor();
					public startVerticalAnimation(x: number, startY: number, endY: number): void;
					public startHorizontalAnimation(startX: number, endX: number, y: number, duration: number): void;
					public calculateAnimationDuration(startCoordinate: number, endCoordinate: number): number;
					public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
					public startVerticalAnimation(x: number, startY: number, endY: number, duration: number): void;
					public onTouch(v: android.view.View, event: android.view.MotionEvent): boolean;
				}
			}
		}
	}
}

//Generics information:
//com.hjq.window.EasyWindow:1
//com.hjq.window.EasyWindow.OnClickListener:1
//com.hjq.window.EasyWindow.OnLongClickListener:1
//com.hjq.window.EasyWindow.OnTouchListener:1

