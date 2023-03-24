declare module androidx {
	export module dynamicanimation {
		export module animation {
			export class AnimationHandler extends java.lang.Object {
				public static class: java.lang.Class<androidx.dynamicanimation.animation.AnimationHandler>;
				public static sAnimatorHandler: java.lang.ThreadLocal<androidx.dynamicanimation.animation.AnimationHandler>;
				public setProvider(provider: androidx.dynamicanimation.animation.AnimationHandler.AnimationFrameCallbackProvider): void;
				public static getInstance(): androidx.dynamicanimation.animation.AnimationHandler;
				public addAnimationFrameCallback(callback: androidx.dynamicanimation.animation.AnimationHandler.AnimationFrameCallback, delay: number): void;
				public static getFrameTime(): number;
				public removeCallback(callback: androidx.dynamicanimation.animation.AnimationHandler.AnimationFrameCallback): void;
			}
			export module AnimationHandler {
				export class AnimationCallbackDispatcher extends java.lang.Object {
					public static class: java.lang.Class<androidx.dynamicanimation.animation.AnimationHandler.AnimationCallbackDispatcher>;
				}
				export class AnimationFrameCallback extends java.lang.Object {
					public static class: java.lang.Class<androidx.dynamicanimation.animation.AnimationHandler.AnimationFrameCallback>;
					/**
					 * Constructs a new instance of the androidx.dynamicanimation.animation.AnimationHandler$AnimationFrameCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						doAnimationFrame(param0: number): boolean;
					});
					public constructor();
					public doAnimationFrame(param0: number): boolean;
				}
				export abstract class AnimationFrameCallbackProvider extends java.lang.Object {
					public static class: java.lang.Class<androidx.dynamicanimation.animation.AnimationHandler.AnimationFrameCallbackProvider>;
				}
				export class FrameCallbackProvider14 extends androidx.dynamicanimation.animation.AnimationHandler.AnimationFrameCallbackProvider {
					public static class: java.lang.Class<androidx.dynamicanimation.animation.AnimationHandler.FrameCallbackProvider14>;
				}
				export class FrameCallbackProvider16 extends androidx.dynamicanimation.animation.AnimationHandler.AnimationFrameCallbackProvider {
					public static class: java.lang.Class<androidx.dynamicanimation.animation.AnimationHandler.FrameCallbackProvider16>;
				}
			}
		}
	}
}

declare module androidx {
	export module dynamicanimation {
		export module animation {
			export abstract class DynamicAnimation<T>  extends androidx.dynamicanimation.animation.AnimationHandler.AnimationFrameCallback {
				public static class: java.lang.Class<androidx.dynamicanimation.animation.DynamicAnimation<any>>;
				public static TRANSLATION_X: androidx.dynamicanimation.animation.DynamicAnimation.ViewProperty;
				public static TRANSLATION_Y: androidx.dynamicanimation.animation.DynamicAnimation.ViewProperty;
				public static TRANSLATION_Z: androidx.dynamicanimation.animation.DynamicAnimation.ViewProperty;
				public static SCALE_X: androidx.dynamicanimation.animation.DynamicAnimation.ViewProperty;
				public static SCALE_Y: androidx.dynamicanimation.animation.DynamicAnimation.ViewProperty;
				public static ROTATION: androidx.dynamicanimation.animation.DynamicAnimation.ViewProperty;
				public static ROTATION_X: androidx.dynamicanimation.animation.DynamicAnimation.ViewProperty;
				public static ROTATION_Y: androidx.dynamicanimation.animation.DynamicAnimation.ViewProperty;
				public static X: androidx.dynamicanimation.animation.DynamicAnimation.ViewProperty;
				public static Y: androidx.dynamicanimation.animation.DynamicAnimation.ViewProperty;
				public static Z: androidx.dynamicanimation.animation.DynamicAnimation.ViewProperty;
				public static ALPHA: androidx.dynamicanimation.animation.DynamicAnimation.ViewProperty;
				public static SCROLL_X: androidx.dynamicanimation.animation.DynamicAnimation.ViewProperty;
				public static SCROLL_Y: androidx.dynamicanimation.animation.DynamicAnimation.ViewProperty;
				public static MIN_VISIBLE_CHANGE_PIXELS: number;
				public static MIN_VISIBLE_CHANGE_ROTATION_DEGREES: number;
				public static MIN_VISIBLE_CHANGE_ALPHA: number;
				public static MIN_VISIBLE_CHANGE_SCALE: number;
				public removeEndListener(listener: androidx.dynamicanimation.animation.DynamicAnimation.OnAnimationEndListener): void;
				public addUpdateListener(listener: androidx.dynamicanimation.animation.DynamicAnimation.OnAnimationUpdateListener): any;
				public removeUpdateListener(listener: androidx.dynamicanimation.animation.DynamicAnimation.OnAnimationUpdateListener): void;
				public setStartVelocity(startVelocity: number): any;
				public addEndListener(listener: androidx.dynamicanimation.animation.DynamicAnimation.OnAnimationEndListener): any;
				public doAnimationFrame(frameTime: number): boolean;
				public doAnimationFrame(param0: number): boolean;
				public setMaxValue(max: number): any;
				public getMinimumVisibleChange(): number;
				public setMinValue(min: number): any;
				public start(): void;
				public cancel(): void;
				public isRunning(): boolean;
				public setMinimumVisibleChange(minimumVisibleChange: number): any;
				public setStartValue(startValue: number): any;
			}
			export module DynamicAnimation {
				export class MassState extends java.lang.Object {
					public static class: java.lang.Class<androidx.dynamicanimation.animation.DynamicAnimation.MassState>;
				}
				export class OnAnimationEndListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.dynamicanimation.animation.DynamicAnimation.OnAnimationEndListener>;
					/**
					 * Constructs a new instance of the androidx.dynamicanimation.animation.DynamicAnimation$OnAnimationEndListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAnimationEnd(param0: androidx.dynamicanimation.animation.DynamicAnimation<any>, param1: boolean, param2: number, param3: number): void;
					});
					public constructor();
					public onAnimationEnd(param0: androidx.dynamicanimation.animation.DynamicAnimation<any>, param1: boolean, param2: number, param3: number): void;
				}
				export class OnAnimationUpdateListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.dynamicanimation.animation.DynamicAnimation.OnAnimationUpdateListener>;
					/**
					 * Constructs a new instance of the androidx.dynamicanimation.animation.DynamicAnimation$OnAnimationUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAnimationUpdate(param0: androidx.dynamicanimation.animation.DynamicAnimation<any>, param1: number, param2: number): void;
					});
					public constructor();
					public onAnimationUpdate(param0: androidx.dynamicanimation.animation.DynamicAnimation<any>, param1: number, param2: number): void;
				}
				export abstract class ViewProperty extends androidx.dynamicanimation.animation.FloatPropertyCompat<android.view.View> {
					public static class: java.lang.Class<androidx.dynamicanimation.animation.DynamicAnimation.ViewProperty>;
				}
			}
		}
	}
}

declare module androidx {
	export module dynamicanimation {
		export module animation {
			export class FlingAnimation extends androidx.dynamicanimation.animation.DynamicAnimation<androidx.dynamicanimation.animation.FlingAnimation> {
				public static class: java.lang.Class<androidx.dynamicanimation.animation.FlingAnimation>;
				public setMaxValue(max: number): any;
				public setMaxValue(maxValue: number): androidx.dynamicanimation.animation.FlingAnimation;
				public constructor(floatValueHolder: androidx.dynamicanimation.animation.FloatValueHolder);
				public setMinValue(min: number): any;
				public setStartVelocity(startVelocity: number): androidx.dynamicanimation.animation.FlingAnimation;
				public setFriction(friction: number): androidx.dynamicanimation.animation.FlingAnimation;
				public constructor(object: any, property: androidx.dynamicanimation.animation.FloatPropertyCompat<any>);
				public getFriction(): number;
				public setStartVelocity(startVelocity: number): any;
				public doAnimationFrame(frameTime: number): boolean;
				public setMinValue(minValue: number): androidx.dynamicanimation.animation.FlingAnimation;
				public doAnimationFrame(param0: number): boolean;
			}
			export module FlingAnimation {
				export class DragForce extends java.lang.Object implements androidx.dynamicanimation.animation.Force {
					public static class: java.lang.Class<androidx.dynamicanimation.animation.FlingAnimation.DragForce>;
					public getAcceleration(param0: number, param1: number): number;
					public isAtEquilibrium(param0: number, param1: number): boolean;
					public isAtEquilibrium(value: number, velocity: number): boolean;
					public getAcceleration(position: number, velocity: number): number;
				}
			}
		}
	}
}

declare module androidx {
	export module dynamicanimation {
		export module animation {
			export abstract class FloatPropertyCompat<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.dynamicanimation.animation.FloatPropertyCompat<any>>;
				public constructor(name: string);
				public getValue(param0: T): number;
				public setValue(param0: T, param1: number): void;
				public static createFloatPropertyCompat(property: android.util.FloatProperty): androidx.dynamicanimation.animation.FloatPropertyCompat<any>;
			}
		}
	}
}

declare module androidx {
	export module dynamicanimation {
		export module animation {
			export class FloatValueHolder extends java.lang.Object {
				public static class: java.lang.Class<androidx.dynamicanimation.animation.FloatValueHolder>;
				public setValue(value: number): void;
				public constructor(value: number);
				public getValue(): number;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module dynamicanimation {
		export module animation {
			export class Force extends java.lang.Object {
				public static class: java.lang.Class<androidx.dynamicanimation.animation.Force>;
				/**
				 * Constructs a new instance of the androidx.dynamicanimation.animation.Force interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getAcceleration(param0: number, param1: number): number;
					isAtEquilibrium(param0: number, param1: number): boolean;
				});
				public constructor();
				public isAtEquilibrium(param0: number, param1: number): boolean;
				public getAcceleration(param0: number, param1: number): number;
			}
		}
	}
}

declare module androidx {
	export module dynamicanimation {
		export module animation {
			export class SpringAnimation extends androidx.dynamicanimation.animation.DynamicAnimation<androidx.dynamicanimation.animation.SpringAnimation> {
				public static class: java.lang.Class<androidx.dynamicanimation.animation.SpringAnimation>;
				public skipToEnd(): void;
				public constructor(floatValueHolder: androidx.dynamicanimation.animation.FloatValueHolder);
				public setSpring(force: androidx.dynamicanimation.animation.SpringForce): androidx.dynamicanimation.animation.SpringAnimation;
				public start(): void;
				public animateToFinalPosition(finalPosition: number): void;
				public getSpring(): androidx.dynamicanimation.animation.SpringForce;
				public constructor(object: any, property: androidx.dynamicanimation.animation.FloatPropertyCompat<any>, finalPosition: number);
				public constructor(object: any, property: androidx.dynamicanimation.animation.FloatPropertyCompat<any>);
				public doAnimationFrame(frameTime: number): boolean;
				public canSkipToEnd(): boolean;
				public doAnimationFrame(param0: number): boolean;
			}
		}
	}
}

declare module androidx {
	export module dynamicanimation {
		export module animation {
			export class SpringForce extends java.lang.Object implements androidx.dynamicanimation.animation.Force {
				public static class: java.lang.Class<androidx.dynamicanimation.animation.SpringForce>;
				public static STIFFNESS_HIGH: number;
				public static STIFFNESS_MEDIUM: number;
				public static STIFFNESS_LOW: number;
				public static STIFFNESS_VERY_LOW: number;
				public static DAMPING_RATIO_HIGH_BOUNCY: number;
				public static DAMPING_RATIO_MEDIUM_BOUNCY: number;
				public static DAMPING_RATIO_LOW_BOUNCY: number;
				public static DAMPING_RATIO_NO_BOUNCY: number;
				public setDampingRatio(dampingRatio: number): androidx.dynamicanimation.animation.SpringForce;
				public setFinalPosition(finalPosition: number): androidx.dynamicanimation.animation.SpringForce;
				public isAtEquilibrium(param0: number, param1: number): boolean;
				public constructor(finalPosition: number);
				public getStiffness(): number;
				public getAcceleration(param0: number, param1: number): number;
				public setStiffness(stiffness: number): androidx.dynamicanimation.animation.SpringForce;
				public getFinalPosition(): number;
				public getDampingRatio(): number;
				public isAtEquilibrium(value: number, velocity: number): boolean;
				public constructor();
				public getAcceleration(lastDisplacement: number, lastVelocity: number): number;
			}
		}
	}
}

//Generics information:
//androidx.dynamicanimation.animation.DynamicAnimation:1
//androidx.dynamicanimation.animation.FloatPropertyCompat:1

