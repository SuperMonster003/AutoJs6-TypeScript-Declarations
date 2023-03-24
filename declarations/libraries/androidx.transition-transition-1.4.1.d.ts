declare module androidx {
	export module transition {
		export class AnimatorUtils extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.AnimatorUtils>;
		}
		export module AnimatorUtils {
			export class AnimatorPauseListenerCompat extends java.lang.Object {
				public static class: java.lang.Class<androidx.transition.AnimatorUtils.AnimatorPauseListenerCompat>;
				/**
				 * Constructs a new instance of the androidx.transition.AnimatorUtils$AnimatorPauseListenerCompat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onAnimationPause(param0: android.animation.Animator): void;
					onAnimationResume(param0: android.animation.Animator): void;
				});
				public constructor();
				public onAnimationPause(param0: android.animation.Animator): void;
				public onAnimationResume(param0: android.animation.Animator): void;
			}
		}
	}
}

declare module androidx {
	export module transition {
		export class ArcMotion extends androidx.transition.PathMotion {
			public static class: java.lang.Class<androidx.transition.ArcMotion>;
			public getMaximumAngle(): number;
			public setMinimumVerticalAngle(angleInDegrees: number): void;
			public getMinimumVerticalAngle(): number;
			public setMaximumAngle(angleInDegrees: number): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public getMinimumHorizontalAngle(): number;
			public getPath(startX: number, startY: number, endX: number, endY: number): android.graphics.Path;
			public constructor();
			public getPath(param0: number, param1: number, param2: number, param3: number): android.graphics.Path;
			public setMinimumHorizontalAngle(angleInDegrees: number): void;
		}
	}
}

declare module androidx {
	export module transition {
		export class AutoTransition extends androidx.transition.TransitionSet {
			public static class: java.lang.Class<androidx.transition.AutoTransition>;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public constructor();
		}
	}
}

declare module androidx {
	export module transition {
		export class CanvasUtils extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.CanvasUtils>;
		}
	}
}

declare module androidx {
	export module transition {
		export class ChangeBounds extends androidx.transition.Transition {
			public static class: java.lang.Class<androidx.transition.ChangeBounds>;
			public setResizeClip(resizeClip: boolean): void;
			public captureEndValues(transitionValues: androidx.transition.TransitionValues): void;
			public getResizeClip(): boolean;
			public captureEndValues(param0: androidx.transition.TransitionValues): void;
			public captureStartValues(param0: androidx.transition.TransitionValues): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public constructor();
			public captureStartValues(transitionValues: androidx.transition.TransitionValues): void;
			public createAnimator(sceneRoot: android.view.ViewGroup, startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): android.animation.Animator;
			public getTransitionProperties(): string[];
		}
		export module ChangeBounds {
			export class ViewBounds extends java.lang.Object {
				public static class: java.lang.Class<androidx.transition.ChangeBounds.ViewBounds>;
			}
		}
	}
}

declare module androidx {
	export module transition {
		export class ChangeClipBounds extends androidx.transition.Transition {
			public static class: java.lang.Class<androidx.transition.ChangeClipBounds>;
			public captureEndValues(transitionValues: androidx.transition.TransitionValues): void;
			public captureEndValues(param0: androidx.transition.TransitionValues): void;
			public captureStartValues(param0: androidx.transition.TransitionValues): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public constructor();
			public captureStartValues(transitionValues: androidx.transition.TransitionValues): void;
			public createAnimator(sceneRoot: android.view.ViewGroup, startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): android.animation.Animator;
			public getTransitionProperties(): string[];
		}
	}
}

declare module androidx {
	export module transition {
		export class ChangeImageTransform extends androidx.transition.Transition {
			public static class: java.lang.Class<androidx.transition.ChangeImageTransform>;
			public captureEndValues(transitionValues: androidx.transition.TransitionValues): void;
			public captureEndValues(param0: androidx.transition.TransitionValues): void;
			public captureStartValues(param0: androidx.transition.TransitionValues): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public constructor();
			public captureStartValues(transitionValues: androidx.transition.TransitionValues): void;
			public createAnimator(sceneRoot: android.view.ViewGroup, startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): android.animation.Animator;
			public getTransitionProperties(): string[];
		}
	}
}

declare module androidx {
	export module transition {
		export class ChangeScroll extends androidx.transition.Transition {
			public static class: java.lang.Class<androidx.transition.ChangeScroll>;
			public captureEndValues(transitionValues: androidx.transition.TransitionValues): void;
			public captureEndValues(param0: androidx.transition.TransitionValues): void;
			public captureStartValues(param0: androidx.transition.TransitionValues): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public constructor();
			public captureStartValues(transitionValues: androidx.transition.TransitionValues): void;
			public createAnimator(sceneRoot: android.view.ViewGroup, startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): android.animation.Animator;
			public getTransitionProperties(): string[];
		}
	}
}

declare module androidx {
	export module transition {
		export class ChangeTransform extends androidx.transition.Transition {
			public static class: java.lang.Class<androidx.transition.ChangeTransform>;
			public getReparent(): boolean;
			public captureEndValues(transitionValues: androidx.transition.TransitionValues): void;
			public getReparentWithOverlay(): boolean;
			public setReparentWithOverlay(reparentWithOverlay: boolean): void;
			public setReparent(reparent: boolean): void;
			public captureEndValues(param0: androidx.transition.TransitionValues): void;
			public captureStartValues(param0: androidx.transition.TransitionValues): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public constructor();
			public captureStartValues(transitionValues: androidx.transition.TransitionValues): void;
			public createAnimator(sceneRoot: android.view.ViewGroup, startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): android.animation.Animator;
			public getTransitionProperties(): string[];
		}
		export module ChangeTransform {
			export class GhostListener extends androidx.transition.TransitionListenerAdapter {
				public static class: java.lang.Class<androidx.transition.ChangeTransform.GhostListener>;
				public onTransitionEnd(param0: androidx.transition.Transition): void;
				public onTransitionPause(transition: androidx.transition.Transition): void;
				public onTransitionCancel(transition: androidx.transition.Transition): void;
				public onTransitionPause(param0: androidx.transition.Transition): void;
				public onTransitionEnd(transition: androidx.transition.Transition): void;
				public onTransitionResume(param0: androidx.transition.Transition): void;
				public onTransitionCancel(param0: androidx.transition.Transition): void;
				public onTransitionResume(transition: androidx.transition.Transition): void;
				public onTransitionStart(transition: androidx.transition.Transition): void;
				public onTransitionStart(param0: androidx.transition.Transition): void;
			}
			export class PathAnimatorMatrix extends java.lang.Object {
				public static class: java.lang.Class<androidx.transition.ChangeTransform.PathAnimatorMatrix>;
			}
			export class Transforms extends java.lang.Object {
				public static class: java.lang.Class<androidx.transition.ChangeTransform.Transforms>;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public restore(view: android.view.View): void;
				public equals(that: any): boolean;
			}
		}
	}
}

declare module androidx {
	export module transition {
		export class CircularPropagation extends androidx.transition.VisibilityPropagation {
			public static class: java.lang.Class<androidx.transition.CircularPropagation>;
			public setPropagationSpeed(propagationSpeed: number): void;
			public getStartDelay(sceneRoot: android.view.ViewGroup, transition: androidx.transition.Transition, startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): number;
			public constructor();
			public getStartDelay(param0: android.view.ViewGroup, param1: androidx.transition.Transition, param2: androidx.transition.TransitionValues, param3: androidx.transition.TransitionValues): number;
		}
	}
}

declare module androidx {
	export module transition {
		export class Explode extends androidx.transition.Visibility {
			public static class: java.lang.Class<androidx.transition.Explode>;
			public onDisappear(sceneRoot: android.view.ViewGroup, startValues: androidx.transition.TransitionValues, startVisibility: number, endValues: androidx.transition.TransitionValues, endVisibility: number): android.animation.Animator;
			public captureEndValues(transitionValues: androidx.transition.TransitionValues): void;
			public onAppear(sceneRoot: android.view.ViewGroup, view: android.view.View, startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): android.animation.Animator;
			public onDisappear(sceneRoot: android.view.ViewGroup, view: android.view.View, startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): android.animation.Animator;
			public onAppear(sceneRoot: android.view.ViewGroup, startValues: androidx.transition.TransitionValues, startVisibility: number, endValues: androidx.transition.TransitionValues, endVisibility: number): android.animation.Animator;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public constructor();
			public captureStartValues(transitionValues: androidx.transition.TransitionValues): void;
		}
	}
}

declare module androidx {
	export module transition {
		export class Fade extends androidx.transition.Visibility {
			public static class: java.lang.Class<androidx.transition.Fade>;
			public static IN: number;
			public static OUT: number;
			public onDisappear(sceneRoot: android.view.ViewGroup, startValues: androidx.transition.TransitionValues, startVisibility: number, endValues: androidx.transition.TransitionValues, endVisibility: number): android.animation.Animator;
			public onAppear(sceneRoot: android.view.ViewGroup, view: android.view.View, startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): android.animation.Animator;
			public onDisappear(sceneRoot: android.view.ViewGroup, view: android.view.View, startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): android.animation.Animator;
			public onAppear(sceneRoot: android.view.ViewGroup, startValues: androidx.transition.TransitionValues, startVisibility: number, endValues: androidx.transition.TransitionValues, endVisibility: number): android.animation.Animator;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public constructor();
			public constructor(fadingMode: number);
			public captureStartValues(transitionValues: androidx.transition.TransitionValues): void;
		}
		export module Fade {
			export class FadeAnimatorListener extends android.animation.AnimatorListenerAdapter {
				public static class: java.lang.Class<androidx.transition.Fade.FadeAnimatorListener>;
				public onAnimationPause(animation: android.animation.Animator): void;
				public onAnimationEnd(param0: android.animation.Animator): void;
				public onAnimationStart(animation: android.animation.Animator): void;
				public onAnimationRepeat(animation: android.animation.Animator): void;
				public onAnimationPause(param0: android.animation.Animator): void;
				public onAnimationStart(param0: android.animation.Animator): void;
				public onAnimationRepeat(param0: android.animation.Animator): void;
				public onAnimationCancel(param0: android.animation.Animator): void;
				public onAnimationResume(animation: android.animation.Animator): void;
				public onAnimationCancel(animation: android.animation.Animator): void;
				public onAnimationEnd(animation: android.animation.Animator): void;
				public onAnimationResume(param0: android.animation.Animator): void;
			}
		}
	}
}

declare module androidx {
	export module transition {
		export class FloatArrayEvaluator extends android.animation.TypeEvaluator<number[]> {
			public static class: java.lang.Class<androidx.transition.FloatArrayEvaluator>;
			public evaluate(fraction: number, startValue: number[], endValue: number[]): number[];
		}
	}
}

declare module androidx {
	export module transition {
		export class FragmentTransitionSupport extends androidx.fragment.app.FragmentTransitionImpl {
			public static class: java.lang.Class<androidx.transition.FragmentTransitionSupport>;
			public cloneTransition(param0: any): any;
			public mergeTransitionsTogether(param0: any, param1: any, param2: any): any;
			public mergeTransitionsTogether(transition1: any, transition2: any, transition3: any): any;
			public setSharedElementTargets(param0: any, param1: android.view.View, param2: java.util.ArrayList<android.view.View>): void;
			public swapSharedElementTargets(param0: any, param1: java.util.ArrayList<android.view.View>, param2: java.util.ArrayList<android.view.View>): void;
			public addTarget(param0: any, param1: android.view.View): void;
			public swapSharedElementTargets(sharedElementTransitionObj: any, sharedElementsOut: java.util.ArrayList<android.view.View>, sharedElementsIn: java.util.ArrayList<android.view.View>): void;
			public setEpicenter(param0: any, param1: android.graphics.Rect): void;
			public wrapTransitionInSet(param0: any): any;
			public addTargets(transitionObj: any, views: java.util.ArrayList<android.view.View>): void;
			public scheduleRemoveTargets(param0: any, param1: any, param2: java.util.ArrayList<android.view.View>, param3: any, param4: java.util.ArrayList<android.view.View>, param5: any, param6: java.util.ArrayList<android.view.View>): void;
			public removeTarget(param0: any, param1: android.view.View): void;
			public setEpicenter(transitionObj: any, epicenter: android.graphics.Rect): void;
			public canHandle(param0: any): boolean;
			public setListenerForTransitionEnd(outFragment: androidx.fragment.app.Fragment, transition: any, signal: androidx.core.os.CancellationSignal, transitionCompleteRunnable: java.lang.Runnable): void;
			public setListenerForTransitionEnd(param0: androidx.fragment.app.Fragment, param1: any, param2: androidx.core.os.CancellationSignal, param3: java.lang.Runnable): void;
			public cloneTransition(transition: any): any;
			public mergeTransitionsInSequence(exitTransitionObj: any, enterTransitionObj: any, sharedElementTransitionObj: any): any;
			public scheduleHideFragmentView(param0: any, param1: android.view.View, param2: java.util.ArrayList<android.view.View>): void;
			public beginDelayedTransition(sceneRoot: android.view.ViewGroup, transition: any): void;
			public scheduleRemoveTargets(overallTransitionObj: any, enterTransition: any, enteringViews: java.util.ArrayList<android.view.View>, exitTransition: any, exitingViews: java.util.ArrayList<android.view.View>, sharedElementTransition: any, sharedElementsIn: java.util.ArrayList<android.view.View>): void;
			public scheduleHideFragmentView(exitTransitionObj: any, fragmentView: android.view.View, exitingViews: java.util.ArrayList<android.view.View>): void;
			public replaceTargets(transitionObj: any, oldTargets: java.util.ArrayList<android.view.View>, newTargets: java.util.ArrayList<android.view.View>): void;
			public addTarget(transitionObj: any, view: android.view.View): void;
			public constructor();
			public canHandle(transition: any): boolean;
			public setEpicenter(param0: any, param1: android.view.View): void;
			public wrapTransitionInSet(transition: any): any;
			public removeTarget(transitionObj: any, view: android.view.View): void;
			public setSharedElementTargets(transitionObj: any, nonExistentView: android.view.View, sharedViews: java.util.ArrayList<android.view.View>): void;
			public mergeTransitionsInSequence(param0: any, param1: any, param2: any): any;
			public beginDelayedTransition(param0: android.view.ViewGroup, param1: any): void;
			public replaceTargets(param0: any, param1: java.util.ArrayList<android.view.View>, param2: java.util.ArrayList<android.view.View>): void;
			public addTargets(param0: any, param1: java.util.ArrayList<android.view.View>): void;
			public setEpicenter(transitionObj: any, view: android.view.View): void;
		}
	}
}

declare module androidx {
	export module transition {
		export class GhostView extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.GhostView>;
			/**
			 * Constructs a new instance of the androidx.transition.GhostView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				setVisibility(param0: number): void;
				reserveEndViewTransition(param0: android.view.ViewGroup, param1: android.view.View): void;
			});
			public constructor();
			public setVisibility(param0: number): void;
			public reserveEndViewTransition(param0: android.view.ViewGroup, param1: android.view.View): void;
		}
	}
}

declare module androidx {
	export module transition {
		export class GhostViewHolder extends android.widget.FrameLayout {
			public static class: java.lang.Class<androidx.transition.GhostViewHolder>;
			public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
			public onStopNestedScroll(param0: android.view.View): void;
			public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
			public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
			public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
			public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
			public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
			public showContextMenuForChild(param0: android.view.View): boolean;
			public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
			public bringChildToFront(param0: android.view.View): void;
			public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
			public sendAccessibilityEvent(param0: number): void;
			public requestChildFocus(child: android.view.View, focused: android.view.View): void;
			public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
			public requestTransparentRegion(param0: android.view.View): void;
			public addView(child: android.view.View, width: number, height: number): void;
			public canResolveTextAlignment(): boolean;
			public getParent(): android.view.ViewParent;
			public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
			public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
			public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
			public getLayoutDirection(): number;
			public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
			public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
			public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
			public recomputeViewAttributes(param0: android.view.View): void;
			public focusSearch(direction: number): android.view.View;
			public createContextMenu(menu: android.view.ContextMenu): void;
			public isLayoutRequested(): boolean;
			public requestTransparentRegion(child: android.view.View): void;
			public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
			public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
			public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
			public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
			public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
			public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
			public requestLayout(): void;
			public childDrawableStateChanged(param0: android.view.View): void;
			public removeView(view: android.view.View): void;
			public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
			public canResolveTextDirection(): boolean;
			public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
			public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
			public onViewRemoved(child: android.view.View): void;
			/** @deprecated */
			public requestFitSystemWindows(): void;
			public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
			public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
			public focusSearch(focused: android.view.View, direction: number): android.view.View;
			public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
			public recomputeViewAttributes(child: android.view.View): void;
			public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
			public requestFitSystemWindows(): void;
			public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
			public childDrawableStateChanged(child: android.view.View): void;
			public isLayoutDirectionResolved(): boolean;
			public focusableViewAvailable(param0: android.view.View): void;
			public createContextMenu(param0: android.view.ContextMenu): void;
			public focusSearch(param0: android.view.View, param1: number): android.view.View;
			public canResolveLayoutDirection(): boolean;
			public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
			public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
			public addView(child: android.view.View, index: number): void;
			public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
			public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
			public getParentForAccessibility(): android.view.ViewParent;
			public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
			public focusableViewAvailable(v: android.view.View): void;
			public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
			public onStopNestedScroll(child: android.view.View): void;
			public getTextAlignment(): number;
			public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
			public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
			public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
			public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
			public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
			public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
			public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
			public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
			public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
			public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
			public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
			public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
			public onViewAdded(child: android.view.View): void;
			public isTextAlignmentResolved(): boolean;
			public removeView(param0: android.view.View): void;
			public clearChildFocus(param0: android.view.View): void;
			public showContextMenuForChild(originalView: android.view.View): boolean;
			public getTextDirection(): number;
			public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public clearChildFocus(child: android.view.View): void;
			public requestDisallowInterceptTouchEvent(param0: boolean): void;
			public bringChildToFront(child: android.view.View): void;
			public isTextDirectionResolved(): boolean;
			public addView(child: android.view.View): void;
			public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
			public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
			public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
			public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
			public sendAccessibilityEvent(eventType: number): void;
		}
	}
}

declare module androidx {
	export module transition {
		export class GhostViewPlatform extends java.lang.Object implements androidx.transition.GhostView {
			public static class: java.lang.Class<androidx.transition.GhostViewPlatform>;
			public setVisibility(param0: number): void;
			public reserveEndViewTransition(param0: android.view.ViewGroup, param1: android.view.View): void;
			public reserveEndViewTransition(viewGroup: android.view.ViewGroup, view: android.view.View): void;
			public setVisibility(visibility: number): void;
		}
	}
}

declare module androidx {
	export module transition {
		export class GhostViewPort extends android.view.ViewGroup implements androidx.transition.GhostView {
			public static class: java.lang.Class<androidx.transition.GhostViewPort>;
			public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
			public onStopNestedScroll(param0: android.view.View): void;
			public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
			public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
			public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
			public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
			public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
			public showContextMenuForChild(param0: android.view.View): boolean;
			public reserveEndViewTransition(viewGroup: android.view.ViewGroup, view: android.view.View): void;
			public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
			public bringChildToFront(param0: android.view.View): void;
			public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
			public onDetachedFromWindow(): void;
			public sendAccessibilityEvent(param0: number): void;
			public requestChildFocus(child: android.view.View, focused: android.view.View): void;
			public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
			public setVisibility(param0: number): void;
			public requestTransparentRegion(param0: android.view.View): void;
			public addView(child: android.view.View, width: number, height: number): void;
			public canResolveTextAlignment(): boolean;
			public getParent(): android.view.ViewParent;
			public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
			public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
			public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
			public getLayoutDirection(): number;
			public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
			public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
			public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
			public recomputeViewAttributes(param0: android.view.View): void;
			public focusSearch(direction: number): android.view.View;
			public createContextMenu(menu: android.view.ContextMenu): void;
			public isLayoutRequested(): boolean;
			public onDraw(canvas: android.graphics.Canvas): void;
			public requestTransparentRegion(child: android.view.View): void;
			public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
			public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
			public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
			public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
			public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
			public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
			public requestLayout(): void;
			public childDrawableStateChanged(param0: android.view.View): void;
			public removeView(view: android.view.View): void;
			public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
			public canResolveTextDirection(): boolean;
			public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
			public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
			/** @deprecated */
			public requestFitSystemWindows(): void;
			public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
			public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
			public focusSearch(focused: android.view.View, direction: number): android.view.View;
			public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
			public recomputeViewAttributes(child: android.view.View): void;
			public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public setVisibility(visibility: number): void;
			public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
			public requestFitSystemWindows(): void;
			public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
			public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public childDrawableStateChanged(child: android.view.View): void;
			public isLayoutDirectionResolved(): boolean;
			public focusableViewAvailable(param0: android.view.View): void;
			public createContextMenu(param0: android.view.ContextMenu): void;
			public focusSearch(param0: android.view.View, param1: number): android.view.View;
			public canResolveLayoutDirection(): boolean;
			public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
			public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
			public addView(child: android.view.View, index: number): void;
			public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
			public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
			public getParentForAccessibility(): android.view.ViewParent;
			public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
			public focusableViewAvailable(v: android.view.View): void;
			public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
			public onStopNestedScroll(child: android.view.View): void;
			public getTextAlignment(): number;
			public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
			public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
			public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
			public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
			public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
			public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
			public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
			public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
			public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
			public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
			public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
			public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
			public isTextAlignmentResolved(): boolean;
			public removeView(param0: android.view.View): void;
			public clearChildFocus(param0: android.view.View): void;
			public showContextMenuForChild(originalView: android.view.View): boolean;
			public reserveEndViewTransition(param0: android.view.ViewGroup, param1: android.view.View): void;
			public getTextDirection(): number;
			public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public clearChildFocus(child: android.view.View): void;
			public requestDisallowInterceptTouchEvent(param0: boolean): void;
			public bringChildToFront(child: android.view.View): void;
			public isTextDirectionResolved(): boolean;
			public addView(child: android.view.View): void;
			public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
			public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
			public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
			public onAttachedToWindow(): void;
			public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
			public sendAccessibilityEvent(eventType: number): void;
		}
	}
}

declare module androidx {
	export module transition {
		export class GhostViewUtils extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.GhostViewUtils>;
		}
	}
}

declare module androidx {
	export module transition {
		export class ImageViewUtils extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.ImageViewUtils>;
		}
	}
}

declare module androidx {
	export module transition {
		export class MatrixUtils extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.MatrixUtils>;
		}
	}
}

declare module androidx {
	export module transition {
		export class ObjectAnimatorUtils extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.ObjectAnimatorUtils>;
		}
	}
}

declare module androidx {
	export module transition {
		export abstract class PathMotion extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.PathMotion>;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public constructor();
			public getPath(param0: number, param1: number, param2: number, param3: number): android.graphics.Path;
		}
	}
}

declare module androidx {
	export module transition {
		export class PathProperty<T>  extends android.util.Property<any,java.lang.Float> {
			public static class: java.lang.Class<androidx.transition.PathProperty<any>>;
			public set(target: any, fraction: java.lang.Float): void;
			public get(object: any): java.lang.Float;
			public set(object: any, value: any): void;
			public get(param0: any): any;
		}
	}
}

declare module androidx {
	export module transition {
		export class PatternPathMotion extends androidx.transition.PathMotion {
			public static class: java.lang.Class<androidx.transition.PatternPathMotion>;
			public getPatternPath(): android.graphics.Path;
			public constructor(patternPath: android.graphics.Path);
			public setPatternPath(patternPath: android.graphics.Path): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public getPath(startX: number, startY: number, endX: number, endY: number): android.graphics.Path;
			public constructor();
			public getPath(param0: number, param1: number, param2: number, param3: number): android.graphics.Path;
		}
	}
}

declare module androidx {
	export module transition {
		export class PropertyValuesHolderUtils extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.PropertyValuesHolderUtils>;
		}
	}
}

declare module androidx {
	export module transition {
		export class RectEvaluator extends android.animation.TypeEvaluator<android.graphics.Rect> {
			public static class: java.lang.Class<androidx.transition.RectEvaluator>;
			public evaluate(fraction: number, startValue: android.graphics.Rect, endValue: android.graphics.Rect): android.graphics.Rect;
		}
	}
}

declare module androidx {
	export module transition {
		export class Scene extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.Scene>;
			public constructor(sceneRoot: android.view.ViewGroup, layout: android.view.View);
			public static getSceneForLayout(sceneRoot: android.view.ViewGroup, layoutId: number, context: android.content.Context): androidx.transition.Scene;
			public getSceneRoot(): android.view.ViewGroup;
			public setEnterAction(action: java.lang.Runnable): void;
			public setExitAction(action: java.lang.Runnable): void;
			public exit(): void;
			public enter(): void;
			public static getCurrentScene(sceneRoot: android.view.ViewGroup): androidx.transition.Scene;
			public constructor(sceneRoot: android.view.ViewGroup);
		}
	}
}

declare module androidx {
	export module transition {
		export class SidePropagation extends androidx.transition.VisibilityPropagation {
			public static class: java.lang.Class<androidx.transition.SidePropagation>;
			public setPropagationSpeed(propagationSpeed: number): void;
			public getStartDelay(sceneRoot: android.view.ViewGroup, transition: androidx.transition.Transition, startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): number;
			public constructor();
			public setSide(side: number): void;
			public getStartDelay(param0: android.view.ViewGroup, param1: androidx.transition.Transition, param2: androidx.transition.TransitionValues, param3: androidx.transition.TransitionValues): number;
		}
	}
}

declare module androidx {
	export module transition {
		export class Slide extends androidx.transition.Visibility {
			public static class: java.lang.Class<androidx.transition.Slide>;
			public constructor(slideEdge: number);
			public onDisappear(sceneRoot: android.view.ViewGroup, startValues: androidx.transition.TransitionValues, startVisibility: number, endValues: androidx.transition.TransitionValues, endVisibility: number): android.animation.Animator;
			public captureEndValues(transitionValues: androidx.transition.TransitionValues): void;
			public onAppear(sceneRoot: android.view.ViewGroup, view: android.view.View, startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): android.animation.Animator;
			public onDisappear(sceneRoot: android.view.ViewGroup, view: android.view.View, startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): android.animation.Animator;
			public onAppear(sceneRoot: android.view.ViewGroup, startValues: androidx.transition.TransitionValues, startVisibility: number, endValues: androidx.transition.TransitionValues, endVisibility: number): android.animation.Animator;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public setSlideEdge(slideEdge: number): void;
			public constructor();
			public captureStartValues(transitionValues: androidx.transition.TransitionValues): void;
			public getSlideEdge(): number;
		}
		export module Slide {
			export class CalculateSlide extends java.lang.Object {
				public static class: java.lang.Class<androidx.transition.Slide.CalculateSlide>;
				/**
				 * Constructs a new instance of the androidx.transition.Slide$CalculateSlide interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getGoneX(param0: android.view.ViewGroup, param1: android.view.View): number;
					getGoneY(param0: android.view.ViewGroup, param1: android.view.View): number;
				});
				public constructor();
				public getGoneX(param0: android.view.ViewGroup, param1: android.view.View): number;
				public getGoneY(param0: android.view.ViewGroup, param1: android.view.View): number;
			}
			export abstract class CalculateSlideHorizontal extends java.lang.Object implements androidx.transition.Slide.CalculateSlide {
				public static class: java.lang.Class<androidx.transition.Slide.CalculateSlideHorizontal>;
				public getGoneX(param0: android.view.ViewGroup, param1: android.view.View): number;
				public getGoneY(param0: android.view.ViewGroup, param1: android.view.View): number;
				public getGoneY(sceneRoot: android.view.ViewGroup, view: android.view.View): number;
			}
			export abstract class CalculateSlideVertical extends java.lang.Object implements androidx.transition.Slide.CalculateSlide {
				public static class: java.lang.Class<androidx.transition.Slide.CalculateSlideVertical>;
				public getGoneX(sceneRoot: android.view.ViewGroup, view: android.view.View): number;
				public getGoneX(param0: android.view.ViewGroup, param1: android.view.View): number;
				public getGoneY(param0: android.view.ViewGroup, param1: android.view.View): number;
			}
			export class GravityFlag extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.transition.Slide.GravityFlag>;
				/**
				 * Constructs a new instance of the androidx.transition.Slide$GravityFlag interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module transition {
		export class Styleable extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.Styleable>;
		}
		export module Styleable {
			export class ArcMotion extends java.lang.Object {
				public static class: java.lang.Class<androidx.transition.Styleable.ArcMotion>;
				/**
				 * Constructs a new instance of the androidx.transition.Styleable$ArcMotion interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static MINIMUM_VERTICAL_ANGLE: number;
				public static MAXIMUM_ANGLE: number;
				public static MINIMUM_HORIZONTAL_ANGLE: number;
			}
			export class ChangeBounds extends java.lang.Object {
				public static class: java.lang.Class<androidx.transition.Styleable.ChangeBounds>;
				/**
				 * Constructs a new instance of the androidx.transition.Styleable$ChangeBounds interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static RESIZE_CLIP: number;
			}
			export class ChangeTransform extends java.lang.Object {
				public static class: java.lang.Class<androidx.transition.Styleable.ChangeTransform>;
				/**
				 * Constructs a new instance of the androidx.transition.Styleable$ChangeTransform interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static REPARENT: number;
				public static REPARENT_WITH_OVERLAY: number;
			}
			export class Fade extends java.lang.Object {
				public static class: java.lang.Class<androidx.transition.Styleable.Fade>;
				/**
				 * Constructs a new instance of the androidx.transition.Styleable$Fade interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static FADING_MODE: number;
			}
			export class PatternPathMotion extends java.lang.Object {
				public static class: java.lang.Class<androidx.transition.Styleable.PatternPathMotion>;
				/**
				 * Constructs a new instance of the androidx.transition.Styleable$PatternPathMotion interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static PATTERN_PATH_DATA: number;
			}
			export class Slide extends java.lang.Object {
				public static class: java.lang.Class<androidx.transition.Styleable.Slide>;
				/**
				 * Constructs a new instance of the androidx.transition.Styleable$Slide interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static SLIDE_EDGE: number;
			}
			export class Transition extends java.lang.Object {
				public static class: java.lang.Class<androidx.transition.Styleable.Transition>;
				/**
				 * Constructs a new instance of the androidx.transition.Styleable$Transition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static MATCH_ORDER: number;
				public static DURATION: number;
				public static START_DELAY: number;
				public static INTERPOLATOR: number;
			}
			export class TransitionManager extends java.lang.Object {
				public static class: java.lang.Class<androidx.transition.Styleable.TransitionManager>;
				/**
				 * Constructs a new instance of the androidx.transition.Styleable$TransitionManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static FROM_SCENE: number;
				public static TRANSITION: number;
				public static TO_SCENE: number;
			}
			export class TransitionSet extends java.lang.Object {
				public static class: java.lang.Class<androidx.transition.Styleable.TransitionSet>;
				/**
				 * Constructs a new instance of the androidx.transition.Styleable$TransitionSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static TRANSITION_ORDERING: number;
			}
			export class TransitionTarget extends java.lang.Object {
				public static class: java.lang.Class<androidx.transition.Styleable.TransitionTarget>;
				/**
				 * Constructs a new instance of the androidx.transition.Styleable$TransitionTarget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static TARGET_NAME: number;
				public static EXCLUDE_NAME: number;
				public static TARGET_CLASS: number;
				public static EXCLUDE_CLASS: number;
				public static TARGET_ID: number;
				public static EXCLUDE_ID: number;
			}
			export class VisibilityTransition extends java.lang.Object {
				public static class: java.lang.Class<androidx.transition.Styleable.VisibilityTransition>;
				/**
				 * Constructs a new instance of the androidx.transition.Styleable$VisibilityTransition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static TRANSITION_VISIBILITY_MODE: number;
			}
		}
	}
}

declare module androidx {
	export module transition {
		export abstract class Transition extends java.lang.Object implements java.lang.Cloneable {
			public static class: java.lang.Class<androidx.transition.Transition>;
			public static MATCH_INSTANCE: number;
			public static MATCH_NAME: number;
			public static MATCH_ID: number;
			public static MATCH_ITEM_ID: number;
			public excludeTarget(type: java.lang.Class<any>, exclude: boolean): androidx.transition.Transition;
			public setPropagation(transitionPropagation: androidx.transition.TransitionPropagation): void;
			public end(): void;
			public captureEndValues(param0: androidx.transition.TransitionValues): void;
			public cancel(): void;
			public pause(sceneRoot: android.view.View): void;
			public getInterpolator(): android.animation.TimeInterpolator;
			public isTransitionRequired(startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): boolean;
			public excludeChildren(type: java.lang.Class<any>, exclude: boolean): androidx.transition.Transition;
			public animate(animator: android.animation.Animator): void;
			public excludeTarget(targetName: string, exclude: boolean): androidx.transition.Transition;
			public removeTarget(targetName: string): androidx.transition.Transition;
			public excludeChildren(targetId: number, exclude: boolean): androidx.transition.Transition;
			public setStartDelay(startDelay: number): androidx.transition.Transition;
			public createAnimators(sceneRoot: android.view.ViewGroup, startValues: androidx.transition.TransitionValuesMaps, endValues: androidx.transition.TransitionValuesMaps, startValuesList: java.util.ArrayList<androidx.transition.TransitionValues>, endValuesList: java.util.ArrayList<androidx.transition.TransitionValues>): void;
			public start(): void;
			public getEpicenterCallback(): androidx.transition.Transition.EpicenterCallback;
			public setPathMotion(pathMotion: androidx.transition.PathMotion): void;
			public runAnimators(): void;
			public constructor();
			public createAnimator(sceneRoot: android.view.ViewGroup, startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): android.animation.Animator;
			public getPropagation(): androidx.transition.TransitionPropagation;
			public clone(): any;
			public removeTarget(target: android.view.View): androidx.transition.Transition;
			public getTargetNames(): java.util.List<string>;
			public setMatchOrder(...matches: number[]): void;
			public addTarget(targetId: number): androidx.transition.Transition;
			public excludeChildren(target: android.view.View, exclude: boolean): androidx.transition.Transition;
			public excludeTarget(targetId: number, exclude: boolean): androidx.transition.Transition;
			public getTargetTypes(): java.util.List<java.lang.Class<any>>;
			public resume(sceneRoot: android.view.View): void;
			public getDuration(): number;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public getTargetIds(): java.util.List<java.lang.Integer>;
			public getPathMotion(): androidx.transition.PathMotion;
			public addTarget(targetName: string): androidx.transition.Transition;
			public addTarget(targetType: java.lang.Class<any>): androidx.transition.Transition;
			public addListener(listener: androidx.transition.Transition.TransitionListener): androidx.transition.Transition;
			public removeListener(listener: androidx.transition.Transition.TransitionListener): androidx.transition.Transition;
			public removeTarget(target: java.lang.Class<any>): androidx.transition.Transition;
			public excludeTarget(target: android.view.View, exclude: boolean): androidx.transition.Transition;
			public setDuration(duration: number): androidx.transition.Transition;
			public getTransitionValues(view: android.view.View, start: boolean): androidx.transition.TransitionValues;
			public getStartDelay(): number;
			public removeTarget(targetId: number): androidx.transition.Transition;
			public captureStartValues(param0: androidx.transition.TransitionValues): void;
			public addTarget(target: android.view.View): androidx.transition.Transition;
			public toString(): string;
			public getTargets(): java.util.List<android.view.View>;
			public getName(): string;
			public setInterpolator(interpolator: android.animation.TimeInterpolator): androidx.transition.Transition;
			public clone(): androidx.transition.Transition;
			public getEpicenter(): android.graphics.Rect;
			public setEpicenterCallback(epicenterCallback: androidx.transition.Transition.EpicenterCallback): void;
			public getTransitionProperties(): string[];
		}
		export module Transition {
			export class AnimationInfo extends java.lang.Object {
				public static class: java.lang.Class<androidx.transition.Transition.AnimationInfo>;
			}
			export class ArrayListManager extends java.lang.Object {
				public static class: java.lang.Class<androidx.transition.Transition.ArrayListManager>;
			}
			export abstract class EpicenterCallback extends java.lang.Object {
				public static class: java.lang.Class<androidx.transition.Transition.EpicenterCallback>;
				public onGetEpicenter(param0: androidx.transition.Transition): android.graphics.Rect;
				public constructor();
			}
			export class MatchOrder extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.transition.Transition.MatchOrder>;
				/**
				 * Constructs a new instance of the androidx.transition.Transition$MatchOrder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
			export class TransitionListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.transition.Transition.TransitionListener>;
				/**
				 * Constructs a new instance of the androidx.transition.Transition$TransitionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onTransitionStart(param0: androidx.transition.Transition): void;
					onTransitionEnd(param0: androidx.transition.Transition): void;
					onTransitionCancel(param0: androidx.transition.Transition): void;
					onTransitionPause(param0: androidx.transition.Transition): void;
					onTransitionResume(param0: androidx.transition.Transition): void;
				});
				public constructor();
				public onTransitionEnd(param0: androidx.transition.Transition): void;
				public onTransitionPause(param0: androidx.transition.Transition): void;
				public onTransitionResume(param0: androidx.transition.Transition): void;
				public onTransitionCancel(param0: androidx.transition.Transition): void;
				public onTransitionStart(param0: androidx.transition.Transition): void;
			}
		}
	}
}

declare module androidx {
	export module transition {
		export class TransitionInflater extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.TransitionInflater>;
			public static from(context: android.content.Context): androidx.transition.TransitionInflater;
			public inflateTransitionManager(resource: number, sceneRoot: android.view.ViewGroup): androidx.transition.TransitionManager;
			public inflateTransition(resource: number): androidx.transition.Transition;
		}
	}
}

declare module androidx {
	export module transition {
		export class TransitionListenerAdapter extends java.lang.Object implements androidx.transition.Transition.TransitionListener {
			public static class: java.lang.Class<androidx.transition.TransitionListenerAdapter>;
			public onTransitionEnd(param0: androidx.transition.Transition): void;
			public onTransitionCancel(param0: androidx.transition.Transition): void;
			public onTransitionStart(transition: androidx.transition.Transition): void;
			public onTransitionEnd(transition: androidx.transition.Transition): void;
			public onTransitionStart(param0: androidx.transition.Transition): void;
			public onTransitionCancel(transition: androidx.transition.Transition): void;
			public onTransitionResume(transition: androidx.transition.Transition): void;
			public constructor();
			public onTransitionPause(transition: androidx.transition.Transition): void;
			public onTransitionPause(param0: androidx.transition.Transition): void;
			public onTransitionResume(param0: androidx.transition.Transition): void;
		}
	}
}

declare module androidx {
	export module transition {
		export class TransitionManager extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.TransitionManager>;
			public static go(scene: androidx.transition.Scene): void;
			public transitionTo(scene: androidx.transition.Scene): void;
			public static beginDelayedTransition(sceneRoot: android.view.ViewGroup, transition: androidx.transition.Transition): void;
			public static go(scene: androidx.transition.Scene, transition: androidx.transition.Transition): void;
			public setTransition(scene: androidx.transition.Scene, transition: androidx.transition.Transition): void;
			public constructor();
			public setTransition(fromScene: androidx.transition.Scene, toScene: androidx.transition.Scene, transition: androidx.transition.Transition): void;
			public static beginDelayedTransition(sceneRoot: android.view.ViewGroup): void;
			public static endTransitions(sceneRoot: android.view.ViewGroup): void;
		}
		export module TransitionManager {
			export class MultiListener extends java.lang.Object implements android.view.ViewTreeObserver.OnPreDrawListener, android.view.View.OnAttachStateChangeListener {
				public static class: java.lang.Class<androidx.transition.TransitionManager.MultiListener>;
				public onPreDraw(): boolean;
				public onViewDetachedFromWindow(param0: android.view.View): void;
				public onViewDetachedFromWindow(v: android.view.View): void;
				public onViewAttachedToWindow(param0: android.view.View): void;
				public onViewAttachedToWindow(v: android.view.View): void;
			}
		}
	}
}

declare module androidx {
	export module transition {
		export abstract class TransitionPropagation extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.TransitionPropagation>;
			public captureValues(param0: androidx.transition.TransitionValues): void;
			public constructor();
			public getPropagationProperties(): string[];
			public getStartDelay(param0: android.view.ViewGroup, param1: androidx.transition.Transition, param2: androidx.transition.TransitionValues, param3: androidx.transition.TransitionValues): number;
		}
	}
}

declare module androidx {
	export module transition {
		export class TransitionSet extends androidx.transition.Transition {
			public static class: java.lang.Class<androidx.transition.TransitionSet>;
			public static ORDERING_TOGETHER: number;
			public static ORDERING_SEQUENTIAL: number;
			public excludeTarget(type: java.lang.Class<any>, exclude: boolean): androidx.transition.Transition;
			public getOrdering(): number;
			public setPropagation(transitionPropagation: androidx.transition.TransitionPropagation): void;
			public setOrdering(ordering: number): androidx.transition.TransitionSet;
			public captureEndValues(param0: androidx.transition.TransitionValues): void;
			public cancel(): void;
			public pause(sceneRoot: android.view.View): void;
			public excludeTarget(targetName: string, exclude: boolean): androidx.transition.Transition;
			public setPropagation(propagation: androidx.transition.TransitionPropagation): void;
			public removeTarget(targetName: string): androidx.transition.Transition;
			public removeTarget(target: string): androidx.transition.TransitionSet;
			public removeListener(listener: androidx.transition.Transition.TransitionListener): androidx.transition.TransitionSet;
			public removeTarget(target: android.view.View): androidx.transition.TransitionSet;
			public setStartDelay(startDelay: number): androidx.transition.Transition;
			public setInterpolator(interpolator: android.animation.TimeInterpolator): androidx.transition.TransitionSet;
			public createAnimators(sceneRoot: android.view.ViewGroup, startValues: androidx.transition.TransitionValuesMaps, endValues: androidx.transition.TransitionValuesMaps, startValuesList: java.util.ArrayList<androidx.transition.TransitionValues>, endValuesList: java.util.ArrayList<androidx.transition.TransitionValues>): void;
			public addTarget(target: android.view.View): androidx.transition.TransitionSet;
			public setPathMotion(pathMotion: androidx.transition.PathMotion): void;
			public runAnimators(): void;
			public constructor();
			public clone(): any;
			public removeTarget(target: android.view.View): androidx.transition.Transition;
			public addTarget(targetId: number): androidx.transition.Transition;
			public excludeTarget(targetId: number, exclude: boolean): androidx.transition.Transition;
			public addListener(listener: androidx.transition.Transition.TransitionListener): androidx.transition.TransitionSet;
			public resume(sceneRoot: android.view.View): void;
			public getTransitionAt(index: number): androidx.transition.Transition;
			public removeTransition(transition: androidx.transition.Transition): androidx.transition.TransitionSet;
			public addTarget(targetId: number): androidx.transition.TransitionSet;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public setDuration(duration: number): androidx.transition.TransitionSet;
			public addTarget(targetName: string): androidx.transition.Transition;
			public addTarget(targetType: java.lang.Class<any>): androidx.transition.Transition;
			public addListener(listener: androidx.transition.Transition.TransitionListener): androidx.transition.Transition;
			public removeListener(listener: androidx.transition.Transition.TransitionListener): androidx.transition.Transition;
			public removeTarget(target: java.lang.Class<any>): androidx.transition.Transition;
			public excludeTarget(target: android.view.View, exclude: boolean): androidx.transition.Transition;
			public removeTarget(target: java.lang.Class<any>): androidx.transition.TransitionSet;
			public setDuration(duration: number): androidx.transition.Transition;
			public captureStartValues(transitionValues: androidx.transition.TransitionValues): void;
			public removeTarget(targetId: number): androidx.transition.Transition;
			public removeTarget(targetId: number): androidx.transition.TransitionSet;
			public addTransition(transition: androidx.transition.Transition): androidx.transition.TransitionSet;
			public addTarget(target: android.view.View): androidx.transition.Transition;
			public captureStartValues(param0: androidx.transition.TransitionValues): void;
			public addTarget(targetName: string): androidx.transition.TransitionSet;
			public getTransitionCount(): number;
			public captureEndValues(transitionValues: androidx.transition.TransitionValues): void;
			public addTarget(targetType: java.lang.Class<any>): androidx.transition.TransitionSet;
			public setStartDelay(startDelay: number): androidx.transition.TransitionSet;
			public setInterpolator(interpolator: android.animation.TimeInterpolator): androidx.transition.Transition;
			public clone(): androidx.transition.Transition;
			public setEpicenterCallback(epicenterCallback: androidx.transition.Transition.EpicenterCallback): void;
		}
		export module TransitionSet {
			export class TransitionSetListener extends androidx.transition.TransitionListenerAdapter {
				public static class: java.lang.Class<androidx.transition.TransitionSet.TransitionSetListener>;
				public onTransitionEnd(param0: androidx.transition.Transition): void;
				public onTransitionCancel(transition: androidx.transition.Transition): void;
				public onTransitionPause(transition: androidx.transition.Transition): void;
				public onTransitionPause(param0: androidx.transition.Transition): void;
				public onTransitionEnd(transition: androidx.transition.Transition): void;
				public onTransitionResume(param0: androidx.transition.Transition): void;
				public onTransitionCancel(param0: androidx.transition.Transition): void;
				public onTransitionStart(transition: androidx.transition.Transition): void;
				public onTransitionResume(transition: androidx.transition.Transition): void;
				public onTransitionStart(param0: androidx.transition.Transition): void;
			}
		}
	}
}

declare module androidx {
	export module transition {
		export class TransitionUtils extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.TransitionUtils>;
		}
		export module TransitionUtils {
			export class MatrixEvaluator extends android.animation.TypeEvaluator<android.graphics.Matrix> {
				public static class: java.lang.Class<androidx.transition.TransitionUtils.MatrixEvaluator>;
				public evaluate(fraction: number, startValue: android.graphics.Matrix, endValue: android.graphics.Matrix): android.graphics.Matrix;
			}
		}
	}
}

declare module androidx {
	export module transition {
		export class TransitionValues extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.TransitionValues>;
			public values: java.util.Map<string,any>;
			public view: android.view.View;
			public equals(other: any): boolean;
			/** @deprecated */
			public constructor();
			public toString(): string;
			public constructor(view: android.view.View);
			public equals(obj: any): boolean;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module transition {
		export class TransitionValuesMaps extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.TransitionValuesMaps>;
		}
	}
}

declare module androidx {
	export module transition {
		export class TranslationAnimationCreator extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.TranslationAnimationCreator>;
		}
		export module TranslationAnimationCreator {
			export class TransitionPositionListener extends android.animation.AnimatorListenerAdapter implements androidx.transition.Transition.TransitionListener {
				public static class: java.lang.Class<androidx.transition.TranslationAnimationCreator.TransitionPositionListener>;
				public onAnimationPause(animation: android.animation.Animator): void;
				public onAnimationEnd(param0: android.animation.Animator): void;
				public onAnimationPause(animator: android.animation.Animator): void;
				public onTransitionResume(param0: androidx.transition.Transition): void;
				public onTransitionCancel(param0: androidx.transition.Transition): void;
				public onAnimationPause(param0: android.animation.Animator): void;
				public onAnimationStart(param0: android.animation.Animator): void;
				public onTransitionStart(transition: androidx.transition.Transition): void;
				public onAnimationCancel(animation: android.animation.Animator): void;
				public onTransitionEnd(param0: androidx.transition.Transition): void;
				public onTransitionCancel(transition: androidx.transition.Transition): void;
				public onTransitionPause(transition: androidx.transition.Transition): void;
				public onTransitionPause(param0: androidx.transition.Transition): void;
				public onAnimationResume(animator: android.animation.Animator): void;
				public onTransitionEnd(transition: androidx.transition.Transition): void;
				public onAnimationStart(animation: android.animation.Animator): void;
				public onAnimationRepeat(animation: android.animation.Animator): void;
				public onAnimationRepeat(param0: android.animation.Animator): void;
				public onTransitionResume(transition: androidx.transition.Transition): void;
				public onAnimationCancel(param0: android.animation.Animator): void;
				public onAnimationResume(animation: android.animation.Animator): void;
				public onTransitionStart(param0: androidx.transition.Transition): void;
				public onAnimationResume(param0: android.animation.Animator): void;
				public onAnimationEnd(animation: android.animation.Animator): void;
			}
		}
	}
}

declare module androidx {
	export module transition {
		export class ViewGroupOverlayApi14 extends androidx.transition.ViewOverlayApi14 implements androidx.transition.ViewGroupOverlayImpl {
			public static class: java.lang.Class<androidx.transition.ViewGroupOverlayApi14>;
			public add(drawable: android.graphics.drawable.Drawable): void;
			public remove(param0: android.view.View): void;
			public add(param0: android.view.View): void;
			public add(param0: android.graphics.drawable.Drawable): void;
			public remove(drawable: android.graphics.drawable.Drawable): void;
			public remove(view: android.view.View): void;
			public add(view: android.view.View): void;
			public remove(param0: android.graphics.drawable.Drawable): void;
		}
	}
}

declare module androidx {
	export module transition {
		export class ViewGroupOverlayApi18 extends java.lang.Object implements androidx.transition.ViewGroupOverlayImpl {
			public static class: java.lang.Class<androidx.transition.ViewGroupOverlayApi18>;
			public add(drawable: android.graphics.drawable.Drawable): void;
			public remove(param0: android.view.View): void;
			public add(param0: android.view.View): void;
			public add(param0: android.graphics.drawable.Drawable): void;
			public remove(drawable: android.graphics.drawable.Drawable): void;
			public remove(view: android.view.View): void;
			public add(view: android.view.View): void;
			public remove(param0: android.graphics.drawable.Drawable): void;
		}
	}
}

declare module androidx {
	export module transition {
		export class ViewGroupOverlayImpl extends java.lang.Object implements androidx.transition.ViewOverlayImpl {
			public static class: java.lang.Class<androidx.transition.ViewGroupOverlayImpl>;
			/**
			 * Constructs a new instance of the androidx.transition.ViewGroupOverlayImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				add(param0: android.view.View): void;
				remove(param0: android.view.View): void;
				add(param0: android.graphics.drawable.Drawable): void;
				remove(param0: android.graphics.drawable.Drawable): void;
			});
			public constructor();
			public remove(param0: android.view.View): void;
			public add(param0: android.view.View): void;
			public add(param0: android.graphics.drawable.Drawable): void;
			public remove(param0: android.graphics.drawable.Drawable): void;
		}
	}
}

declare module androidx {
	export module transition {
		export class ViewGroupUtils extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.ViewGroupUtils>;
		}
	}
}

declare module androidx {
	export module transition {
		export class ViewGroupUtilsApi14 extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.ViewGroupUtilsApi14>;
		}
	}
}

declare module androidx {
	export module transition {
		export class ViewOverlayApi14 extends java.lang.Object implements androidx.transition.ViewOverlayImpl {
			public static class: java.lang.Class<androidx.transition.ViewOverlayApi14>;
			public mOverlayViewGroup: androidx.transition.ViewOverlayApi14.OverlayViewGroup;
			public add(drawable: android.graphics.drawable.Drawable): void;
			public add(param0: android.graphics.drawable.Drawable): void;
			public remove(drawable: android.graphics.drawable.Drawable): void;
			public remove(param0: android.graphics.drawable.Drawable): void;
		}
		export module ViewOverlayApi14 {
			export class OverlayViewGroup extends android.view.ViewGroup {
				public static class: java.lang.Class<androidx.transition.ViewOverlayApi14.OverlayViewGroup>;
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
				public add(child: android.view.View): void;
				public onLayout(changed: boolean, l: number, t: number, r: number, b: number): void;
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public bringChildToFront(child: android.view.View): void;
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public dispatchTouchEvent(ev: android.view.MotionEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public dispatchDraw(canvas: android.graphics.Canvas): void;
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
				public add(drawable: android.graphics.drawable.Drawable): void;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public clearChildFocus(param0: android.view.View): void;
				public invalidateChildInParentFast(left: number, top: number, dirty: android.graphics.Rect): android.view.ViewParent;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public requestFitSystemWindows(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
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
				public remove(view: android.view.View): void;
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
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public onStopNestedScroll(param0: android.view.View): void;
				public remove(drawable: android.graphics.drawable.Drawable): void;
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

declare module androidx {
	export module transition {
		export class ViewOverlayApi18 extends java.lang.Object implements androidx.transition.ViewOverlayImpl {
			public static class: java.lang.Class<androidx.transition.ViewOverlayApi18>;
			public add(drawable: android.graphics.drawable.Drawable): void;
			public add(param0: android.graphics.drawable.Drawable): void;
			public remove(drawable: android.graphics.drawable.Drawable): void;
			public remove(param0: android.graphics.drawable.Drawable): void;
		}
	}
}

declare module androidx {
	export module transition {
		export class ViewOverlayImpl extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.ViewOverlayImpl>;
			/**
			 * Constructs a new instance of the androidx.transition.ViewOverlayImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				add(param0: android.graphics.drawable.Drawable): void;
				remove(param0: android.graphics.drawable.Drawable): void;
			});
			public constructor();
			public add(param0: android.graphics.drawable.Drawable): void;
			public remove(param0: android.graphics.drawable.Drawable): void;
		}
	}
}

declare module androidx {
	export module transition {
		export class ViewUtils extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.ViewUtils>;
		}
	}
}

declare module androidx {
	export module transition {
		export class ViewUtilsApi19 extends androidx.transition.ViewUtilsBase {
			public static class: java.lang.Class<androidx.transition.ViewUtilsApi19>;
			public setTransitionAlpha(view: android.view.View, alpha: number): void;
			public saveNonTransitionAlpha(view: android.view.View): void;
			public clearNonTransitionAlpha(view: android.view.View): void;
			public getTransitionAlpha(view: android.view.View): number;
		}
	}
}

declare module androidx {
	export module transition {
		export class ViewUtilsApi21 extends androidx.transition.ViewUtilsApi19 {
			public static class: java.lang.Class<androidx.transition.ViewUtilsApi21>;
			public transformMatrixToLocal(view: android.view.View, matrix: android.graphics.Matrix): void;
			public setAnimationMatrix(view: android.view.View, matrix: android.graphics.Matrix): void;
			public transformMatrixToGlobal(view: android.view.View, matrix: android.graphics.Matrix): void;
		}
	}
}

declare module androidx {
	export module transition {
		export class ViewUtilsApi22 extends androidx.transition.ViewUtilsApi21 {
			public static class: java.lang.Class<androidx.transition.ViewUtilsApi22>;
			public setLeftTopRightBottom(v: android.view.View, left: number, top: number, right: number, bottom: number): void;
		}
	}
}

declare module androidx {
	export module transition {
		export class ViewUtilsApi23 extends androidx.transition.ViewUtilsApi22 {
			public static class: java.lang.Class<androidx.transition.ViewUtilsApi23>;
			public setTransitionVisibility(view: android.view.View, visibility: number): void;
		}
	}
}

declare module androidx {
	export module transition {
		export class ViewUtilsApi29 extends androidx.transition.ViewUtilsApi23 {
			public static class: java.lang.Class<androidx.transition.ViewUtilsApi29>;
			public setLeftTopRightBottom(v: android.view.View, left: number, top: number, right: number, bottom: number): void;
			public setTransitionVisibility(view: android.view.View, visibility: number): void;
			public setTransitionAlpha(view: android.view.View, alpha: number): void;
			public transformMatrixToLocal(view: android.view.View, matrix: android.graphics.Matrix): void;
			public setAnimationMatrix(view: android.view.View, matrix: android.graphics.Matrix): void;
			public getTransitionAlpha(view: android.view.View): number;
			public transformMatrixToGlobal(view: android.view.View, matrix: android.graphics.Matrix): void;
		}
	}
}

declare module androidx {
	export module transition {
		export class ViewUtilsBase extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.ViewUtilsBase>;
			public setLeftTopRightBottom(v: android.view.View, left: number, top: number, right: number, bottom: number): void;
			public setTransitionVisibility(view: android.view.View, visibility: number): void;
			public setTransitionAlpha(view: android.view.View, alpha: number): void;
			public transformMatrixToLocal(view: android.view.View, matrix: android.graphics.Matrix): void;
			public saveNonTransitionAlpha(view: android.view.View): void;
			public setAnimationMatrix(view: android.view.View, matrix: android.graphics.Matrix): void;
			public clearNonTransitionAlpha(view: android.view.View): void;
			public getTransitionAlpha(view: android.view.View): number;
			public transformMatrixToGlobal(view: android.view.View, matrix: android.graphics.Matrix): void;
		}
	}
}

declare module androidx {
	export module transition {
		export abstract class Visibility extends androidx.transition.Transition {
			public static class: java.lang.Class<androidx.transition.Visibility>;
			public static MODE_IN: number;
			public static MODE_OUT: number;
			public onDisappear(sceneRoot: android.view.ViewGroup, startValues: androidx.transition.TransitionValues, startVisibility: number, endValues: androidx.transition.TransitionValues, endVisibility: number): android.animation.Animator;
			public onAppear(sceneRoot: android.view.ViewGroup, view: android.view.View, startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): android.animation.Animator;
			public captureEndValues(param0: androidx.transition.TransitionValues): void;
			public captureStartValues(param0: androidx.transition.TransitionValues): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public isTransitionRequired(startValues: androidx.transition.TransitionValues, newValues: androidx.transition.TransitionValues): boolean;
			public constructor();
			public createAnimator(sceneRoot: android.view.ViewGroup, startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): android.animation.Animator;
			public isTransitionRequired(startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): boolean;
			public captureEndValues(transitionValues: androidx.transition.TransitionValues): void;
			public isVisible(values: androidx.transition.TransitionValues): boolean;
			public onDisappear(sceneRoot: android.view.ViewGroup, view: android.view.View, startValues: androidx.transition.TransitionValues, endValues: androidx.transition.TransitionValues): android.animation.Animator;
			public onAppear(sceneRoot: android.view.ViewGroup, startValues: androidx.transition.TransitionValues, startVisibility: number, endValues: androidx.transition.TransitionValues, endVisibility: number): android.animation.Animator;
			public setMode(mode: number): void;
			public getMode(): number;
			public captureStartValues(transitionValues: androidx.transition.TransitionValues): void;
			public getTransitionProperties(): string[];
		}
		export module Visibility {
			export class DisappearListener extends android.animation.AnimatorListenerAdapter implements androidx.transition.Transition.TransitionListener, androidx.transition.AnimatorUtils.AnimatorPauseListenerCompat {
				public static class: java.lang.Class<androidx.transition.Visibility.DisappearListener>;
				public onAnimationPause(animation: android.animation.Animator): void;
				public onAnimationEnd(param0: android.animation.Animator): void;
				public onTransitionResume(param0: androidx.transition.Transition): void;
				public onTransitionCancel(param0: androidx.transition.Transition): void;
				public onAnimationPause(param0: android.animation.Animator): void;
				public onAnimationStart(param0: android.animation.Animator): void;
				public onTransitionStart(transition: androidx.transition.Transition): void;
				public onAnimationCancel(animation: android.animation.Animator): void;
				public onTransitionEnd(param0: androidx.transition.Transition): void;
				public onTransitionCancel(transition: androidx.transition.Transition): void;
				public onTransitionPause(transition: androidx.transition.Transition): void;
				public onTransitionPause(param0: androidx.transition.Transition): void;
				public onTransitionEnd(transition: androidx.transition.Transition): void;
				public onAnimationStart(animation: android.animation.Animator): void;
				public onAnimationRepeat(animation: android.animation.Animator): void;
				public onAnimationRepeat(param0: android.animation.Animator): void;
				public onTransitionResume(transition: androidx.transition.Transition): void;
				public onAnimationCancel(param0: android.animation.Animator): void;
				public onAnimationResume(animation: android.animation.Animator): void;
				public onTransitionStart(param0: androidx.transition.Transition): void;
				public onAnimationEnd(animation: android.animation.Animator): void;
				public onAnimationResume(param0: android.animation.Animator): void;
			}
			export class Mode extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.transition.Visibility.Mode>;
				/**
				 * Constructs a new instance of the androidx.transition.Visibility$Mode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
			export class VisibilityInfo extends java.lang.Object {
				public static class: java.lang.Class<androidx.transition.Visibility.VisibilityInfo>;
			}
		}
	}
}

declare module androidx {
	export module transition {
		export abstract class VisibilityPropagation extends androidx.transition.TransitionPropagation {
			public static class: java.lang.Class<androidx.transition.VisibilityPropagation>;
			public getViewX(values: androidx.transition.TransitionValues): number;
			public captureValues(values: androidx.transition.TransitionValues): void;
			public getViewVisibility(values: androidx.transition.TransitionValues): number;
			public captureValues(param0: androidx.transition.TransitionValues): void;
			public getViewY(values: androidx.transition.TransitionValues): number;
			public constructor();
			public getPropagationProperties(): string[];
		}
	}
}

declare module androidx {
	export module transition {
		export class WindowIdApi14 extends java.lang.Object implements androidx.transition.WindowIdImpl {
			public static class: java.lang.Class<androidx.transition.WindowIdApi14>;
			public equals(obj: any): boolean;
			public equals(o: any): boolean;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module transition {
		export class WindowIdApi18 extends java.lang.Object implements androidx.transition.WindowIdImpl {
			public static class: java.lang.Class<androidx.transition.WindowIdApi18>;
			public equals(obj: any): boolean;
			public equals(o: any): boolean;
			public hashCode(): number;
		}
	}
}

declare module androidx {
	export module transition {
		export class WindowIdImpl extends java.lang.Object {
			public static class: java.lang.Class<androidx.transition.WindowIdImpl>;
			/**
			 * Constructs a new instance of the androidx.transition.WindowIdImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

//Generics information:
//androidx.transition.PathProperty:1

