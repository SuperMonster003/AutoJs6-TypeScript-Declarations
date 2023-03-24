declare module androidx {
	export module vectordrawable {
		export module graphics {
			export module drawable {
				export class Animatable2Compat extends java.lang.Object implements android.graphics.drawable.Animatable {
					public static class: java.lang.Class<androidx.vectordrawable.graphics.drawable.Animatable2Compat>;
					/**
					 * Constructs a new instance of the androidx.vectordrawable.graphics.drawable.Animatable2Compat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						registerAnimationCallback(param0: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): void;
						unregisterAnimationCallback(param0: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): boolean;
						clearAnimationCallbacks(): void;
						start(): void;
						stop(): void;
						isRunning(): boolean;
					});
					public constructor();
					public clearAnimationCallbacks(): void;
					public registerAnimationCallback(param0: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): void;
					public isRunning(): boolean;
					public stop(): void;
					public unregisterAnimationCallback(param0: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): boolean;
					public start(): void;
				}
				export module Animatable2Compat {
					export abstract class AnimationCallback extends java.lang.Object {
						public static class: java.lang.Class<androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback>;
						public constructor();
						public onAnimationEnd(drawable: android.graphics.drawable.Drawable): void;
						public onAnimationStart(drawable: android.graphics.drawable.Drawable): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module vectordrawable {
		export module graphics {
			export module drawable {
				export class AnimatedVectorDrawableCompat extends androidx.vectordrawable.graphics.drawable.VectorDrawableCommon implements androidx.vectordrawable.graphics.drawable.Animatable2Compat {
					public static class: java.lang.Class<androidx.vectordrawable.graphics.drawable.AnimatedVectorDrawableCompat>;
					public clearAnimationCallbacks(): void;
					public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public getIntrinsicWidth(): number;
					public setColorFilter(param0: android.graphics.ColorFilter): void;
					public applyTheme(param0: android.content.res.Resources.Theme): void;
					public static createFromXmlInner(r: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet): android.graphics.drawable.Drawable;
					public onBoundsChange(bounds: android.graphics.Rect): void;
					public setAutoMirrored(mirrored: boolean): void;
					public onStateChange(state: number[]): boolean;
					public setTint(param0: number): void;
					public static create(context: android.content.Context, resId: number): androidx.vectordrawable.graphics.drawable.AnimatedVectorDrawableCompat;
					public getOpacity(): number;
					public inflate(r: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): void;
					public getAlpha(): number;
					public getColorFilter(): android.graphics.ColorFilter;
					public static clearAnimationCallbacks(dr: android.graphics.drawable.Drawable): void;
					public setTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
					public static createFromXmlInner(r: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					public static createFromXmlInner(context: android.content.Context, r: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): androidx.vectordrawable.graphics.drawable.AnimatedVectorDrawableCompat;
					public setAlpha(param0: number): void;
					public unregisterAnimationCallback(callback: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): boolean;
					public setColorFilter(colorFilter: android.graphics.ColorFilter): void;
					public isAutoMirrored(): boolean;
					public stop(): void;
					public mutate(): android.graphics.drawable.Drawable;
					public applyTheme(t: android.content.res.Resources.Theme): void;
					public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
					public inflate(r: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet): void;
					public onLevelChange(level: number): boolean;
					public isStateful(): boolean;
					public onLevelChange(param0: number): boolean;
					public unregisterAnimationCallback(param0: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): boolean;
					public setTint(tintColor: number): void;
					public start(): void;
					public static registerAnimationCallback(dr: android.graphics.drawable.Drawable, callback: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): void;
					public inflate(res: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet): void;
					public registerAnimationCallback(param0: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): void;
					public getChangingConfigurations(): number;
					public inflate(res: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): void;
					public draw(canvas: android.graphics.Canvas): void;
					public canApplyTheme(): boolean;
					public getConstantState(): android.graphics.drawable.Drawable.ConstantState;
					public draw(param0: android.graphics.Canvas): void;
					public static unregisterAnimationCallback(dr: android.graphics.drawable.Drawable, callback: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): boolean;
					public onBoundsChange(param0: android.graphics.Rect): void;
					public setTint(tint: number): void;
					public getIntrinsicHeight(): number;
					public setVisible(visible: boolean, restart: boolean): boolean;
					public setTintList(tint: android.content.res.ColorStateList): void;
					public isRunning(): boolean;
					public setAlpha(alpha: number): void;
					public registerAnimationCallback(callback: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): void;
					public setTintList(param0: android.content.res.ColorStateList): void;
				}
				export module AnimatedVectorDrawableCompat {
					export class AnimatedVectorDrawableCompatState extends android.graphics.drawable.Drawable.ConstantState {
						public static class: java.lang.Class<androidx.vectordrawable.graphics.drawable.AnimatedVectorDrawableCompat.AnimatedVectorDrawableCompatState>;
						public constructor();
						public getChangingConfigurations(): number;
						public setupAnimatorSet(): void;
						public newDrawable(): android.graphics.drawable.Drawable;
						public newDrawable(res: android.content.res.Resources, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
						public constructor(context: android.content.Context, copy: androidx.vectordrawable.graphics.drawable.AnimatedVectorDrawableCompat.AnimatedVectorDrawableCompatState, owner: android.graphics.drawable.Drawable.Callback, res: android.content.res.Resources);
						public newDrawable(res: android.content.res.Resources): android.graphics.drawable.Drawable;
					}
					export class AnimatedVectorDrawableDelegateState extends android.graphics.drawable.Drawable.ConstantState {
						public static class: java.lang.Class<androidx.vectordrawable.graphics.drawable.AnimatedVectorDrawableCompat.AnimatedVectorDrawableDelegateState>;
						public constructor();
						public getChangingConfigurations(): number;
						public newDrawable(): android.graphics.drawable.Drawable;
						public newDrawable(res: android.content.res.Resources, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
						public canApplyTheme(): boolean;
						public newDrawable(res: android.content.res.Resources): android.graphics.drawable.Drawable;
						public constructor(state: android.graphics.drawable.Drawable.ConstantState);
					}
				}
			}
		}
	}
}

declare module androidx {
	export module vectordrawable {
		export module graphics {
			export module drawable {
				export class AnimationUtilsCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.vectordrawable.graphics.drawable.AnimationUtilsCompat>;
					public static loadInterpolator(context: android.content.Context, id: number): android.view.animation.Interpolator;
				}
			}
		}
	}
}

declare module androidx {
	export module vectordrawable {
		export module graphics {
			export module drawable {
				export class AnimatorInflaterCompat extends java.lang.Object {
					public static class: java.lang.Class<androidx.vectordrawable.graphics.drawable.AnimatorInflaterCompat>;
					public static loadAnimator(context: android.content.Context, resources: android.content.res.Resources, theme: android.content.res.Resources.Theme, id: number): android.animation.Animator;
					public static loadAnimator(context: android.content.Context, resources: android.content.res.Resources, theme: android.content.res.Resources.Theme, id: number, pathErrorScale: number): android.animation.Animator;
					public static loadAnimator(context: android.content.Context, id: number): android.animation.Animator;
				}
				export module AnimatorInflaterCompat {
					export class PathDataEvaluator extends android.animation.TypeEvaluator<androidx.core.graphics.PathParser.PathDataNode[]> {
						public static class: java.lang.Class<androidx.vectordrawable.graphics.drawable.AnimatorInflaterCompat.PathDataEvaluator>;
						public evaluate(fraction: number, startPathData: androidx.core.graphics.PathParser.PathDataNode[], endPathData: androidx.core.graphics.PathParser.PathDataNode[]): androidx.core.graphics.PathParser.PathDataNode[];
					}
				}
			}
		}
	}
}

declare module androidx {
	export module vectordrawable {
		export module graphics {
			export module drawable {
				export class ArgbEvaluator extends java.lang.Object {
					public static class: java.lang.Class<androidx.vectordrawable.graphics.drawable.ArgbEvaluator>;
					public static getInstance(): androidx.vectordrawable.graphics.drawable.ArgbEvaluator;
					public constructor();
					public evaluate(fraction: number, startValue: any, endValue: any): any;
				}
			}
		}
	}
}

declare module androidx {
	export module vectordrawable {
		export module graphics {
			export module drawable {
				export class PathInterpolatorCompat extends java.lang.Object implements android.view.animation.Interpolator {
					public static class: java.lang.Class<androidx.vectordrawable.graphics.drawable.PathInterpolatorCompat>;
					public static MAX_NUM_POINTS: number;
					public static EPSILON: number;
					public constructor(res: android.content.res.Resources, theme: android.content.res.Resources.Theme, attrs: android.util.AttributeSet, parser: org.xmlpull.v1.XmlPullParser);
					public getInterpolation(t: number): number;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, parser: org.xmlpull.v1.XmlPullParser);
					public getInterpolation(param0: number): number;
				}
			}
		}
	}
}

//Generics information:

