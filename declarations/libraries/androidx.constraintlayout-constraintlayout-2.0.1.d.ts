declare module androidx {
	export module constraintlayout {
		export module helper {
			export module widget {
				export class Flow extends androidx.constraintlayout.widget.VirtualLayout {
					public static class: java.lang.Class<androidx.constraintlayout.helper.widget.Flow>;
					public static HORIZONTAL: number;
					public static VERTICAL: number;
					public static WRAP_NONE: number;
					public static WRAP_CHAIN: number;
					public static WRAP_ALIGNED: number;
					public static CHAIN_SPREAD: number;
					public static CHAIN_SPREAD_INSIDE: number;
					public static CHAIN_PACKED: number;
					public static HORIZONTAL_ALIGN_START: number;
					public static HORIZONTAL_ALIGN_END: number;
					public static HORIZONTAL_ALIGN_CENTER: number;
					public static VERTICAL_ALIGN_TOP: number;
					public static VERTICAL_ALIGN_BOTTOM: number;
					public static VERTICAL_ALIGN_CENTER: number;
					public static VERTICAL_ALIGN_BASELINE: number;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public setPadding(padding: number): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					public setVerticalBias(bias: number): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public setPaddingTop(paddingTop: number): void;
					public setOrientation(orientation: number): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public setFirstHorizontalStyle(style: number): void;
					public setHorizontalStyle(style: number): void;
					public init(attrs: android.util.AttributeSet): void;
					public setPaddingBottom(paddingBottom: number): void;
					public constructor(context: android.content.Context);
					public setVerticalStyle(style: number): void;
					public setPaddingRight(paddingRight: number): void;
					public setVerticalAlign(align: number): void;
					public setFirstVerticalBias(bias: number): void;
					public resolveRtl(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget, isRtl: boolean): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public setHorizontalAlign(align: number): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public setPaddingLeft(paddingLeft: number): void;
					public sendAccessibilityEvent(eventType: number): void;
					public setWrapMode(mode: number): void;
					public setHorizontalBias(bias: number): void;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public setFirstHorizontalBias(bias: number): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public setVerticalGap(gap: number): void;
					public sendAccessibilityEvent(param0: number): void;
					public setFirstVerticalStyle(style: number): void;
					public setHorizontalGap(gap: number): void;
					public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public setPadding(left: number, top: number, right: number, bottom: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public setMaxElementsWrap(max: number): void;
					public loadParameters(constraint: androidx.constraintlayout.widget.ConstraintSet.Constraint, child: androidx.constraintlayout.solver.widgets.HelperWidget, layoutParams: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams, mapIdToWidget: android.util.SparseArray<androidx.constraintlayout.solver.widgets.ConstraintWidget>): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public onMeasure(layout: androidx.constraintlayout.solver.widgets.VirtualLayout, widthMeasureSpec: number, heightMeasureSpec: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module helper {
			export module widget {
				export class Layer extends androidx.constraintlayout.widget.ConstraintHelper {
					public static class: java.lang.Class<androidx.constraintlayout.helper.widget.Layer>;
					public mComputedCenterX: number;
					public mComputedCenterY: number;
					public mComputedMaxX: number;
					public mComputedMaxY: number;
					public mComputedMinX: number;
					public mComputedMinY: number;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public setTranslationY(translationY: number): void;
					public sendAccessibilityEvent(eventType: number): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public setElevation(elevation: number): void;
					public onAttachedToWindow(): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public setPivotY(pivotY: number): void;
					public setVisibility(visibility: number): void;
					public sendAccessibilityEvent(param0: number): void;
					public init(attrs: android.util.AttributeSet): void;
					public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
					public constructor(context: android.content.Context);
					public setPivotX(pivotX: number): void;
					public updatePostLayout(container: androidx.constraintlayout.widget.ConstraintLayout): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public setRotation(angle: number): void;
					public setTranslationY(dy: number): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public updatePreDraw(container: androidx.constraintlayout.widget.ConstraintLayout): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public calcCenters(): void;
					public setScaleY(scaleY: number): void;
					public setScaleX(scaleX: number): void;
					public setTranslationX(translationX: number): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public setTranslationX(dx: number): void;
					public setRotation(rotation: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module utils {
				export class ArcCurveFit extends androidx.constraintlayout.motion.utils.CurveFit {
					public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ArcCurveFit>;
					public static ARC_START_VERTICAL: number;
					public static ARC_START_HORIZONTAL: number;
					public static ARC_START_FLIP: number;
					public static ARC_START_LINEAR: number;
					public getPos(param0: number, param1: number): number;
					public getSlope(param0: number, param1: number[]): void;
					public getPos(param0: number, param1: number[]): void;
					public getPos(t: number, param1: number[]): void;
					public constructor();
					public getSlope(param0: number, param1: number): number;
					public getSlope(t: number, param1: number[]): void;
					public constructor(arcModes: number[], time: number[], y: number[][]);
					public getTimePoints(): number[];
					public getPos(t: number, param1: number): number;
					public getSlope(t: number, param1: number): number;
				}
				export module ArcCurveFit {
					export class Arc extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.ArcCurveFit.Arc>;
						public getLinearDY(t: number): number;
						public getLinearY(t: number): number;
						public getLinearDX(t: number): number;
						public getLinearX(t: number): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module utils {
				export abstract class CurveFit extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.utils.CurveFit>;
					public static SPLINE: number;
					public static LINEAR: number;
					public static CONSTANT: number;
					public getPos(param0: number, param1: number): number;
					public getSlope(param0: number, param1: number[]): void;
					public static getArc(arcModes: number[], time: number[], y: number[][]): androidx.constraintlayout.motion.utils.CurveFit;
					public getPos(param0: number, param1: number[]): void;
					public constructor();
					public getSlope(param0: number, param1: number): number;
					public getTimePoints(): number[];
					public static get(type: number, time: number[], y: number[][]): androidx.constraintlayout.motion.utils.CurveFit;
				}
				export module CurveFit {
					export class Constant extends androidx.constraintlayout.motion.utils.CurveFit {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.CurveFit.Constant>;
						public getSlope(param0: number, param1: number): number;
						public getSlope(t: number, param1: number[]): void;
						public getPos(param0: number, param1: number): number;
						public getSlope(param0: number, param1: number[]): void;
						public getPos(t: number, param1: number[]): void;
						public getSlope(t: number, param1: number): number;
						public getPos(param0: number, param1: number[]): void;
						public getPos(t: number, param1: number): number;
						public getTimePoints(): number[];
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module utils {
				export class Easing extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.utils.Easing>;
					public static NAMED_EASING: string[];
					public get(x: number): number;
					public toString(): string;
					public static getInterpolator(configString: string): androidx.constraintlayout.motion.utils.Easing;
					public constructor();
					public getDiff(x: number): number;
				}
				export module Easing {
					export class CubicEasing extends androidx.constraintlayout.motion.utils.Easing {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.Easing.CubicEasing>;
						public constructor(x1: number, param1: number, y1: number, param3: number);
						public constructor();
						public get(x: number): number;
						public getDiff(x: number): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module utils {
				export class HyperSpline extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.utils.HyperSpline>;
					public getVelocity(p: number, param1: number[]): void;
					public constructor();
					public approxLength(curve: androidx.constraintlayout.motion.utils.HyperSpline.Cubic[]): number;
					public constructor(points: number[][]);
					public getPos(p: number, param1: number): number;
					public setup(points: number[][]): void;
					public getPos(p: number, param1: number[]): void;
				}
				export module HyperSpline {
					export class Cubic extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.utils.HyperSpline.Cubic>;
						public static THIRD: number;
						public static HALF: number;
						public eval(u: number): number;
						public vel(v: number): number;
						public constructor(a: number, param1: number, b: number, param3: number);
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module utils {
				export class LinearCurveFit extends androidx.constraintlayout.motion.utils.CurveFit {
					public static class: java.lang.Class<androidx.constraintlayout.motion.utils.LinearCurveFit>;
					public getPos(param0: number, param1: number): number;
					public getSlope(param0: number, param1: number[]): void;
					public getPos(param0: number, param1: number[]): void;
					public constructor();
					public getPos(t: number, param1: number[]): void;
					public getSlope(param0: number, param1: number): number;
					public getSlope(t: number, param1: number[]): void;
					public getTimePoints(): number[];
					public getPos(t: number, param1: number): number;
					public getSlope(t: number, param1: number): number;
					public constructor(time: number[], y: number[][]);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module utils {
				export class MonotonicCurveFit extends androidx.constraintlayout.motion.utils.CurveFit {
					public static class: java.lang.Class<androidx.constraintlayout.motion.utils.MonotonicCurveFit>;
					public getPos(param0: number, param1: number): number;
					public getSlope(param0: number, param1: number[]): void;
					public getPos(param0: number, param1: number[]): void;
					public constructor();
					public getPos(t: number, param1: number[]): void;
					public getSlope(param0: number, param1: number): number;
					public getSlope(t: number, param1: number[]): void;
					public getTimePoints(): number[];
					public getPos(t: number, param1: number): number;
					public getSlope(t: number, param1: number): number;
					public constructor(time: number[], y: number[][]);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module utils {
				export class Oscillator extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.utils.Oscillator>;
					public static TAG: string;
					public static SIN_WAVE: number;
					public static SQUARE_WAVE: number;
					public static TRIANGLE_WAVE: number;
					public static SAW_WAVE: number;
					public static REVERSE_SAW_WAVE: number;
					public static COS_WAVE: number;
					public static BOUNCE: number;
					public getValue(time: number): number;
					public toString(): string;
					public setType(type: number): void;
					public addPoint(position: number, param1: number): void;
					public constructor();
					public getSlope(time: number): number;
					public normalize(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module utils {
				export class StopLogic extends androidx.constraintlayout.motion.widget.MotionInterpolator {
					public static class: java.lang.Class<androidx.constraintlayout.motion.utils.StopLogic>;
					public getInterpolation(v: number): number;
					public getVelocity(): number;
					public config(currentPos: number, destination: number, currentVelocity: number, maxTime: number, maxAcceleration: number, maxVelocity: number): void;
					public debug(tag: string, desc: string, time: number): void;
					public constructor();
					public getVelocity(x: number): number;
					public getInterpolation(param0: number): number;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module utils {
				export class VelocityMatrix extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.utils.VelocityMatrix>;
					public setRotationVelocity(osc_r: androidx.constraintlayout.motion.widget.KeyCycleOscillator, position: number): void;
					public setTranslationVelocity(trans_x: androidx.constraintlayout.motion.widget.SplineSet, trans_y: androidx.constraintlayout.motion.widget.SplineSet, position: number): void;
					public setScaleVelocity(osc_sx: androidx.constraintlayout.motion.widget.KeyCycleOscillator, osc_sy: androidx.constraintlayout.motion.widget.KeyCycleOscillator, position: number): void;
					public constructor();
					public applyTransform(locationX: number, locationY: number, width: number, height: number, mAnchorDpDt: number[]): void;
					public setScaleVelocity(scale_x: androidx.constraintlayout.motion.widget.SplineSet, scale_y: androidx.constraintlayout.motion.widget.SplineSet, position: number): void;
					public setTranslationVelocity(osc_x: androidx.constraintlayout.motion.widget.KeyCycleOscillator, osc_y: androidx.constraintlayout.motion.widget.KeyCycleOscillator, position: number): void;
					public clear(): void;
					public setRotationVelocity(rot: androidx.constraintlayout.motion.widget.SplineSet, position: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class Animatable extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.Animatable>;
					/**
					 * Constructs a new instance of the androidx.constraintlayout.motion.widget.Animatable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setProgress(param0: number): void;
						getProgress(): number;
					});
					public constructor();
					public getProgress(): number;
					public setProgress(param0: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class CustomFloatAttributes extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.CustomFloatAttributes>;
					/**
					 * Constructs a new instance of the androidx.constraintlayout.motion.widget.CustomFloatAttributes interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getListOfAttributes(): string[];
						set(param0: string, param1: number): void;
						get(param0: string): number;
					});
					public constructor();
					public set(param0: string, param1: number): void;
					public get(param0: string): number;
					public getListOfAttributes(): string[];
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class Debug extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.Debug>;
					public static getName(context: android.content.Context, id: number[]): string;
					public static dumpPoc(obj: any): void;
					public static printStack(msg: string, n: number): void;
					public static getState(layout: androidx.constraintlayout.motion.widget.MotionLayout, stateId: number): string;
					public static getName(view: android.view.View): string;
					public static dumpLayoutParams(layout: android.view.ViewGroup, str: string): void;
					public static logStack(tag: string, msg: string, n: number): void;
					public static dumpLayoutParams(param: android.view.ViewGroup.LayoutParams, str: string): void;
					public static getLocation2(): string;
					public static getActionType(event: android.view.MotionEvent): string;
					public constructor();
					public static getCallFrom(n: number): string;
					public static getLocation(): string;
					public static getLoc(): string;
					public static getName(context: android.content.Context, id: number): string;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class DesignTool extends java.lang.Object implements androidx.constraintlayout.motion.widget.ProxyInterface {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.DesignTool>;
					public getKeyframeAtLocation(viewObject: any, x: number, y: number): any;
					public getAnimationPath(view: any, path: number[], len: number): number;
					public getAnimationKeyFrames(view: any, key: number[]): number;
					public getKeyframe(type: number, target: number, position: number): any;
					public setAttributes(param0: number, param1: string, param2: any, param3: any): void;
					public getKeyFramePosition(view: any, type: number, x: number, y: number): number;
					public getKeyFrameInfo(view: any, type: number, info: number[]): number;
					public setState(id: string): void;
					public getKeyframeAtLocation(param0: any, param1: number, param2: number): any;
					public setToolPosition(position: number): void;
					public getStartState(): string;
					public setKeyFrame(param0: any, param1: number, param2: string, param3: any): void;
					public getPositionKeyframe(param0: any, param1: any, param2: number, param3: number, param4: string[], param5: number[]): java.lang.Boolean;
					public getTransitionTimeMs(): number;
					public getEndState(): string;
					public dumpConstraintSet(set: string): void;
					public designAccess(param0: number, param1: string, param2: any, param3: number[], param4: number, param5: number[], param6: number): number;
					public setKeyFrame(view: any, position: number, name: string, value: any): void;
					public getKeyFramePosition(param0: any, param1: number, param2: number, param3: number): number;
					public getKeyframe(view: any, type: number, position: number): any;
					public constructor(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout);
					public designAccess(cmd: number, type: string, viewObject: any, in: number[], inLength: number, out: number[], outLength: number): number;
					public setKeyFramePosition(param0: any, param1: number, param2: number, param3: number, param4: number): boolean;
					public isInTransition(): boolean;
					public setTransition(start: string, end: string): void;
					public setKeyFramePosition(view: any, position: number, type: number, x: number, y: number): boolean;
					public getState(): string;
					public getAnimationRectangles(view: any, path: number[]): void;
					public getProgress(): number;
					public setAttributes(dpi: number, constraintSetId: string, opaqueView: any, opaqueAttributes: any): void;
					public setToolPosition(param0: number): void;
					public disableAutoTransition(disable: boolean): void;
					public setViewDebug(view: any, debugMode: number): void;
					public setKeyframe(keyFrame: any, tag: string, value: any): void;
					public getKeyFramePositions(view: any, type: number[], pos: number[]): number;
					public getPositionKeyframe(keyFrame: any, view: any, x: number, y: number, attribute: string[], value: number[]): java.lang.Boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export abstract class Key extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.Key>;
					public static UNSET: number;
					public mType: number;
					public addValues(param0: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>): void;
					public constructor();
					public setInterpolation(interpolation: java.util.HashMap<string,java.lang.Integer>): void;
					public setValue(param0: string, param1: any): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class KeyAttributes extends androidx.constraintlayout.motion.widget.Key {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyAttributes>;
					public static KEY_TYPE: number;
					public addValues(param0: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>): void;
					public constructor();
					public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>): void;
					public setInterpolation(interpolation: java.util.HashMap<string,java.lang.Integer>): void;
					public getAttributeNames(attributes: java.util.HashSet<string>): void;
					public setValue(param0: string, param1: any): void;
					public setValue(tag: string, value: any): void;
					public load(context: android.content.Context, attrs: android.util.AttributeSet): void;
				}
				export module KeyAttributes {
					export class Loader extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyAttributes.Loader>;
						public static read(c: androidx.constraintlayout.motion.widget.KeyAttributes, a: android.content.res.TypedArray): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class KeyCache extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCache>;
					public constructor();
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class KeyCycle extends androidx.constraintlayout.motion.widget.Key {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycle>;
					public static KEY_TYPE: number;
					public addValues(param0: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>): void;
					public constructor();
					public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>): void;
					public getAttributeNames(attributes: java.util.HashSet<string>): void;
					public setValue(param0: string, param1: any): void;
					public setValue(tag: string, value: any): void;
					public load(context: android.content.Context, attrs: android.util.AttributeSet): void;
					public getValue(key: string): number;
					public addCycleValues(oscSet: java.util.HashMap<string,androidx.constraintlayout.motion.widget.KeyCycleOscillator>): void;
				}
				export module KeyCycle {
					export class Loader extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycle.Loader>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export abstract class KeyCycleOscillator extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator>;
					public mCustom: androidx.constraintlayout.widget.ConstraintAttribute;
					public mVariesBy: number;
					public getSlope(position: number): number;
					public setPoint(framePosition: number, shape: number, variesBy: number, period: number, offset: number, value: number): void;
					public toString(): string;
					public getCurveFit(): androidx.constraintlayout.motion.utils.CurveFit;
					public variesByPath(): boolean;
					public setType(type: string): void;
					public constructor();
					public get(t: number): number;
					public setPoint(framePosition: number, shape: number, variesBy: number, period: number, offset: number, value: number, custom: androidx.constraintlayout.widget.ConstraintAttribute): void;
					public setup(pathLength: number): void;
					public setProperty(param0: android.view.View, param1: number): void;
				}
				export module KeyCycleOscillator {
					export class AlphaSet extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.AlphaSet>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class CustomSet extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.CustomSet>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class CycleOscillator extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.CycleOscillator>;
						public mCustomConstraints: java.util.HashMap<string,androidx.constraintlayout.widget.ConstraintAttribute>;
						public getValues(time: number): number;
						public setup(pathLength: number): void;
						public getSlope(time: number): number;
						public setPoint(index: number, framePosition: number, wavePeriod: number, offset: number, values: number): void;
					}
					export class ElevationSet extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.ElevationSet>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class IntDoubleSort extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.IntDoubleSort>;
					}
					export class IntFloatFloatSort extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.IntFloatFloatSort>;
					}
					export class PathRotateSet extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.PathRotateSet>;
						public setPathRotate(view: android.view.View, t: number, dx: number, param3: number): void;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class ProgressSet extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.ProgressSet>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class RotationSet extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.RotationSet>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class RotationXset extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.RotationXset>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class RotationYset extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.RotationYset>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class ScaleXset extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.ScaleXset>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class ScaleYset extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.ScaleYset>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class TranslationXset extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.TranslationXset>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class TranslationYset extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.TranslationYset>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class TranslationZset extends androidx.constraintlayout.motion.widget.KeyCycleOscillator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.TranslationZset>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class WavePoint extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyCycleOscillator.WavePoint>;
						public constructor(position: number, period: number, offset: number, value: number);
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class KeyFrames extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyFrames>;
					public static UNSET: number;
					public getKeyFramesForView(id: number): java.util.ArrayList<androidx.constraintlayout.motion.widget.Key>;
					public addFrames(motionController: androidx.constraintlayout.motion.widget.MotionController): void;
					public getKeys(): java.util.Set<java.lang.Integer>;
					public constructor(context: android.content.Context, parser: org.xmlpull.v1.XmlPullParser);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class KeyPosition extends androidx.constraintlayout.motion.widget.KeyPositionBase {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyPosition>;
					public static TYPE_SCREEN: number;
					public static TYPE_PATH: number;
					public static TYPE_CARTESIAN: number;
					public addValues(param0: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>): void;
					public constructor();
					public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>): void;
					public intersects(param0: number, param1: number, param2: android.graphics.RectF, param3: android.graphics.RectF, param4: number, param5: number): boolean;
					public setValue(param0: string, param1: any): void;
					public intersects(layoutWidth: number, layoutHeight: number, start: android.graphics.RectF, end: android.graphics.RectF, x: number, y: number): boolean;
					public setValue(tag: string, value: any): void;
					public load(context: android.content.Context, attrs: android.util.AttributeSet): void;
					public positionAttributes(view: android.view.View, start: android.graphics.RectF, end: android.graphics.RectF, x: number, y: number, attribute: string[], value: number[]): void;
				}
				export module KeyPosition {
					export class Loader extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyPosition.Loader>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export abstract class KeyPositionBase extends androidx.constraintlayout.motion.widget.Key {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyPositionBase>;
					public static SELECTION_SLOPE: number;
					public intersects(param0: number, param1: number, param2: android.graphics.RectF, param3: android.graphics.RectF, param4: number, param5: number): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class KeyTimeCycle extends androidx.constraintlayout.motion.widget.Key {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyTimeCycle>;
					public static KEY_TYPE: number;
					public addTimeValues(splines: java.util.HashMap<string,androidx.constraintlayout.motion.widget.TimeCycleSplineSet>): void;
					public addValues(param0: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>): void;
					public constructor();
					public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>): void;
					public setInterpolation(interpolation: java.util.HashMap<string,java.lang.Integer>): void;
					public getAttributeNames(attributes: java.util.HashSet<string>): void;
					public setValue(param0: string, param1: any): void;
					public setValue(tag: string, value: any): void;
					public load(context: android.content.Context, attrs: android.util.AttributeSet): void;
				}
				export module KeyTimeCycle {
					export class Loader extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyTimeCycle.Loader>;
						public static read(c: androidx.constraintlayout.motion.widget.KeyTimeCycle, a: android.content.res.TypedArray): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class KeyTrigger extends androidx.constraintlayout.motion.widget.Key {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyTrigger>;
					public static KEY_TYPE: number;
					public addValues(param0: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>): void;
					public constructor();
					public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>): void;
					public conditionallyFire(pos: number, child: android.view.View): void;
					public getAttributeNames(attributes: java.util.HashSet<string>): void;
					public setValue(param0: string, param1: any): void;
					public setValue(tag: string, value: any): void;
					public load(context: android.content.Context, attrs: android.util.AttributeSet): void;
				}
				export module KeyTrigger {
					export class Loader extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.KeyTrigger.Loader>;
						public static read(c: androidx.constraintlayout.motion.widget.KeyTrigger, a: android.content.res.TypedArray, context: android.content.Context): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class MotionConstrainedPoint extends java.lang.Comparable<androidx.constraintlayout.motion.widget.MotionConstrainedPoint> {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionConstrainedPoint>;
					public static TAG: string;
					public static DEBUG: boolean;
					public rotationY: number;
					public constructor();
					public applyParameters(view: android.view.View): void;
					public addValues(splines: java.util.HashMap<string,androidx.constraintlayout.motion.widget.SplineSet>, mFramePosition: number): void;
					public setState(cw: androidx.constraintlayout.solver.widgets.ConstraintWidget, constraintSet: androidx.constraintlayout.widget.ConstraintSet, viewId: number): void;
					public applyParameters(c: androidx.constraintlayout.widget.ConstraintSet.Constraint): void;
					public setState(view: android.view.View): void;
					public compareTo(o: androidx.constraintlayout.motion.widget.MotionConstrainedPoint): number;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class MotionController extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionController>;
					public static PATH_PERCENT: number;
					public static PATH_PERPENDICULAR: number;
					public static HORIZONTAL_PATH_X: number;
					public static HORIZONTAL_PATH_Y: number;
					public static VERTICAL_PATH_X: number;
					public static VERTICAL_PATH_Y: number;
					public static DRAW_PATH_NONE: number;
					public static DRAW_PATH_BASIC: number;
					public static DRAW_PATH_RELATIVE: number;
					public static DRAW_PATH_CARTESIAN: number;
					public static DRAW_PATH_AS_CONFIGURED: number;
					public static DRAW_PATH_RECTANGLE: number;
					public static DRAW_PATH_SCREEN: number;
					public toString(): string;
					public setDrawPath(debugMode: number): void;
					public setup(parentWidth: number, parentHeight: number, transitionDuration: number, currentTime: number): void;
					public setPathMotionArc(arc: number): void;
					public getkeyFramePositions(type: number[], pos: number[]): number;
					public setView(view: android.view.View): void;
					public getDrawPath(): number;
					public getKeyFrameInfo(type: number, info: number[]): number;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class MotionHelper extends androidx.constraintlayout.widget.ConstraintHelper implements androidx.constraintlayout.motion.widget.Animatable, androidx.constraintlayout.motion.widget.MotionLayout.TransitionListener {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionHelper>;
					public views: android.view.View[];
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public onTransitionCompleted(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, currentId: number): void;
					public setProgress(view: android.view.View, progress: number): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public onTransitionStarted(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, startId: number, endId: number): void;
					public onTransitionCompleted(param0: androidx.constraintlayout.motion.widget.MotionLayout, param1: number): void;
					public onTransitionTrigger(param0: androidx.constraintlayout.motion.widget.MotionLayout, param1: number, param2: boolean, param3: number): void;
					public onTransitionChange(param0: androidx.constraintlayout.motion.widget.MotionLayout, param1: number, param2: number, param3: number): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public onTransitionTrigger(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, triggerId: number, positive: boolean, progress: number): void;
					public sendAccessibilityEvent(param0: number): void;
					public init(attrs: android.util.AttributeSet): void;
					public setProgress(progress: number): void;
					public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
					public constructor(context: android.content.Context);
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public setProgress(param0: number): void;
					public getProgress(): number;
					public isUseOnHide(): boolean;
					public onTransitionStarted(param0: androidx.constraintlayout.motion.widget.MotionLayout, param1: number, param2: number): void;
					public isUsedOnShow(): boolean;
					public onTransitionChange(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, startId: number, endId: number, progress: number): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export abstract class MotionInterpolator extends java.lang.Object implements android.view.animation.Interpolator {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionInterpolator>;
					public getVelocity(): number;
					public constructor();
					public getInterpolation(param0: number): number;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class MotionLayout extends androidx.constraintlayout.widget.ConstraintLayout implements androidx.core.view.NestedScrollingParent3 {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionLayout>;
					public static TOUCH_UP_COMPLETE: number;
					public static TOUCH_UP_COMPLETE_TO_START: number;
					public static TOUCH_UP_COMPLETE_TO_END: number;
					public static TOUCH_UP_STOP: number;
					public static TOUCH_UP_DECELERATE: number;
					public static TOUCH_UP_DECELERATE_AND_COMPLETE: number;
					public static IS_IN_EDIT_MODE: boolean;
					public static DEBUG_SHOW_NONE: number;
					public static DEBUG_SHOW_PROGRESS: number;
					public static DEBUG_SHOW_PATH: number;
					public static VELOCITY_POST_LAYOUT: number;
					public static VELOCITY_LAYOUT: number;
					public static VELOCITY_STATIC_POST_LAYOUT: number;
					public static VELOCITY_STATIC_LAYOUT: number;
					public mMeasureDuringTransition: boolean;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public setState(id: number, screenWidth: number, screenHeight: number): void;
					public setTransitionState(bundle: android.os.Bundle): void;
					public focusableViewAvailable(v: android.view.View): void;
					public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[], type: number): void;
					public isTextDirectionResolved(): boolean;
					public showContextMenuForChild(param0: android.view.View): boolean;
					public onStopNestedScroll(child: android.view.View): void;
					public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public setScene(scene: androidx.constraintlayout.motion.widget.MotionScene): void;
					public setInterpolatedProgress(pos: number): void;
					public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
					public setOnShow(progress: number): void;
					public parseLayoutDescription(id: number): void;
					public getTargetPosition(): number;
					public removeTransitionListener(listener: androidx.constraintlayout.motion.widget.MotionLayout.TransitionListener): boolean;
					public recomputeViewAttributes(child: android.view.View): void;
					public addView(child: android.view.View, index: number): void;
					public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					/** @deprecated */
					public rebuildMotion(): void;
					public getLayoutDirection(): number;
					public getParentForAccessibility(): android.view.ViewParent;
					public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
					public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
					public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
					public createContextMenu(param0: android.view.ContextMenu): void;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
					public getVelocity(): number;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public transitionToEnd(): void;
					public getDefinedTransitions(): java.util.ArrayList<androidx.constraintlayout.motion.widget.MotionScene.Transition>;
					public setInteractionEnabled(enabled: boolean): void;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number, param3: number): void;
					public childDrawableStateChanged(param0: android.view.View): void;
					public transitionToState(id: number, screenWidth: number, screenHeight: number): void;
					public getTransitionState(): android.os.Bundle;
					public onViewRemoved(view: android.view.View): void;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[], param4: number): void;
					public onViewAdded(view: android.view.View): void;
					public onStartNestedScroll(child: android.view.View, target: android.view.View, axes: number, type: number): boolean;
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
					public isTextAlignmentResolved(): boolean;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number, param3: number): boolean;
					public transitionToStart(): void;
					public requestChildFocus(child: android.view.View, focused: android.view.View): void;
					public canResolveTextAlignment(): boolean;
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public getEndState(): number;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public obtainVelocityTracker(): androidx.constraintlayout.motion.widget.MotionLayout.MotionTracker;
					public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
					public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
					public getTransitionTimeMs(): number;
					public showContextMenuForChild(originalView: android.view.View): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public getViewVelocity(view: android.view.View, posOnViewX: number, posOnViewY: number, returnVelocity: number[], type: number): void;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
					public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
					public sendAccessibilityEvent(param0: number): void;
					public getNanoTime(): number;
					public requestLayout(): void;
					public getDesignTool(): androidx.constraintlayout.motion.widget.DesignTool;
					public loadLayoutDescription(layoutDescription: number): void;
					public setTransitionDuration(milliseconds: number): void;
					public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public getTextAlignment(): number;
					public dispatchDraw(canvas: android.graphics.Canvas): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public setDebugMode(debugMode: number): void;
					public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
					public updateState(): void;
					public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
					public getProgress(): number;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public setTransition(transitionId: number): void;
					public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
					public focusSearch(param0: android.view.View, param1: number): android.view.View;
					public bringChildToFront(child: android.view.View): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public setProgress(pos: number, velocity: number): void;
					public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
					public isLayoutRequested(): boolean;
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number, type: number, consumed: number[]): void;
					public onAttachedToWindow(): void;
					public addTransitionListener(listener: androidx.constraintlayout.motion.widget.MotionLayout.TransitionListener): void;
					public clearChildFocus(param0: android.view.View): void;
					public clearChildFocus(child: android.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public isLayoutDirectionResolved(): boolean;
					public focusSearch(focused: android.view.View, direction: number): android.view.View;
					public addView(child: android.view.View): void;
					/** @deprecated */
					public getDebugMode(showPaths: boolean): void;
					public touchAnimateTo(touchUpMode: number, position: number, currentVelocity: number): void;
					public setTransition(beginId: number, endId: number): void;
					public addView(child: android.view.View, width: number, height: number): void;
					public removeView(view: android.view.View): void;
					public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
					public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
					public bringChildToFront(param0: android.view.View): void;
					public constructor(context: android.content.Context);
					public onStopNestedScroll(target: android.view.View, type: number): void;
					public onStopNestedScroll(param0: android.view.View, param1: number): void;
					public updateState(stateId: number, set: androidx.constraintlayout.widget.ConstraintSet): void;
					public setTransition(transition: androidx.constraintlayout.motion.widget.MotionScene.Transition): void;
					public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
					public getConstraintSet(id: number): androidx.constraintlayout.widget.ConstraintSet;
					public onInterceptTouchEvent(ev: android.view.MotionEvent): boolean;
					public onInterceptTouchEvent(event: android.view.MotionEvent): boolean;
					public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
					public getCurrentState(): number;
					public getStartState(): number;
					public fireTransitionCompleted(): void;
					public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
					public getTextDirection(): number;
					public requestFitSystemWindows(): void;
					public rebuildScene(): void;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
					public isAttachedToWindow(): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public enableTransition(transitionID: number, enable: boolean): void;
					public transitionToState(id: number): void;
					public requestTransparentRegion(param0: android.view.View): void;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
					public canResolveTextDirection(): boolean;
					public isInteractionEnabled(): boolean;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public toString(): string;
					public getParent(): android.view.ViewParent;
					public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
					public loadLayoutDescription(motionScene: number): void;
					public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number, type: number): void;
					public setOnHide(progress: number): void;
					public createContextMenu(menu: android.view.ContextMenu): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public onTouchEvent(event: android.view.MotionEvent): boolean;
					public getConstraintSetIds(): number[];
					public onStopNestedScroll(param0: android.view.View): void;
					public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public setProgress(pos: number): void;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number[]): void;
					public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
					public canResolveLayoutDirection(): boolean;
					public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
					public requestTransparentRegion(child: android.view.View): void;
					public removeView(param0: android.view.View): void;
					public childDrawableStateChanged(child: android.view.View): void;
					public onRtlPropertiesChanged(layoutDirection: number): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public fireTrigger(triggerId: number, positive: boolean, progress: number): void;
					public recomputeViewAttributes(param0: android.view.View): void;
					public focusableViewAvailable(param0: android.view.View): void;
					public setTransitionListener(listener: androidx.constraintlayout.motion.widget.MotionLayout.TransitionListener): void;
					public getNestedScrollAxes(): number;
					public focusSearch(direction: number): android.view.View;
					public getTransition(id: number): androidx.constraintlayout.motion.widget.MotionScene.Transition;
					public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				}
				export module MotionLayout {
					export class DecelerateInterpolator extends androidx.constraintlayout.motion.widget.MotionInterpolator {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionLayout.DecelerateInterpolator>;
						public getInterpolation(time: number): number;
						public getVelocity(): number;
						public config(velocity: number, position: number, maxAcceleration: number): void;
						public getInterpolation(param0: number): number;
					}
					export class DevModeDraw extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionLayout.DevModeDraw>;
						public draw(canvas: android.graphics.Canvas, frameArrayList: java.util.HashMap<android.view.View,androidx.constraintlayout.motion.widget.MotionController>, duration: number, debugPath: number): void;
						public drawAll(canvas: android.graphics.Canvas, mode: number, keyFrames: number, motionController: androidx.constraintlayout.motion.widget.MotionController): void;
						public constructor(param0: androidx.constraintlayout.motion.widget.MotionLayout);
					}
					export class Model extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionLayout.Model>;
						public measure(widthMeasureSpec: number, heightMeasureSpec: number): void;
						public setMeasuredId(startId: number, endId: number): void;
						public reEvaluateState(): void;
						public build(): void;
						public isNotConfiguredWith(startId: number, endId: number): boolean;
					}
					export class MotionTracker extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionLayout.MotionTracker>;
						/**
						 * Constructs a new instance of the androidx.constraintlayout.motion.widget.MotionLayout$MotionTracker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							recycle(): void;
							clear(): void;
							addMovement(param0: android.view.MotionEvent): void;
							computeCurrentVelocity(param0: number): void;
							computeCurrentVelocity(param0: number, param1: number): void;
							getXVelocity(): number;
							getYVelocity(): number;
							getXVelocity(param0: number): number;
							getYVelocity(param0: number): number;
						});
						public constructor();
						public computeCurrentVelocity(param0: number, param1: number): void;
						public addMovement(param0: android.view.MotionEvent): void;
						public getXVelocity(): number;
						public getYVelocity(): number;
						public recycle(): void;
						public clear(): void;
						public computeCurrentVelocity(param0: number): void;
						public getYVelocity(param0: number): number;
						public getXVelocity(param0: number): number;
					}
					export class MyTracker extends java.lang.Object implements androidx.constraintlayout.motion.widget.MotionLayout.MotionTracker {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionLayout.MyTracker>;
						public computeCurrentVelocity(units: number): void;
						public computeCurrentVelocity(param0: number, param1: number): void;
						public addMovement(event: android.view.MotionEvent): void;
						public addMovement(param0: android.view.MotionEvent): void;
						public static obtain(): androidx.constraintlayout.motion.widget.MotionLayout.MyTracker;
						public recycle(): void;
						public getYVelocity(id: number): number;
						public getYVelocity(param0: number): number;
						public getXVelocity(param0: number): number;
						public getXVelocity(): number;
						public getYVelocity(): number;
						public clear(): void;
						public getXVelocity(id: number): number;
						public computeCurrentVelocity(param0: number): void;
						public computeCurrentVelocity(units: number, maxVelocity: number): void;
					}
					export class StateCache extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionLayout.StateCache>;
						public setVelocity(mVelocity: number): void;
						public getTransitionState(): android.os.Bundle;
						public setEndState(endState: number): void;
						public setProgress(progress: number): void;
						public setStartState(startState: number): void;
						public recordState(): void;
						public setTransitionState(bundle: android.os.Bundle): void;
					}
					export class TransitionListener extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionLayout.TransitionListener>;
						/**
						 * Constructs a new instance of the androidx.constraintlayout.motion.widget.MotionLayout$TransitionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onTransitionStarted(param0: androidx.constraintlayout.motion.widget.MotionLayout, param1: number, param2: number): void;
							onTransitionChange(param0: androidx.constraintlayout.motion.widget.MotionLayout, param1: number, param2: number, param3: number): void;
							onTransitionCompleted(param0: androidx.constraintlayout.motion.widget.MotionLayout, param1: number): void;
							onTransitionTrigger(param0: androidx.constraintlayout.motion.widget.MotionLayout, param1: number, param2: boolean, param3: number): void;
						});
						public constructor();
						public onTransitionChange(param0: androidx.constraintlayout.motion.widget.MotionLayout, param1: number, param2: number, param3: number): void;
						public onTransitionTrigger(param0: androidx.constraintlayout.motion.widget.MotionLayout, param1: number, param2: boolean, param3: number): void;
						public onTransitionCompleted(param0: androidx.constraintlayout.motion.widget.MotionLayout, param1: number): void;
						public onTransitionStarted(param0: androidx.constraintlayout.motion.widget.MotionLayout, param1: number, param2: number): void;
					}
					export class TransitionState {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionLayout.TransitionState>;
						public static UNDEFINED: androidx.constraintlayout.motion.widget.MotionLayout.TransitionState;
						public static SETUP: androidx.constraintlayout.motion.widget.MotionLayout.TransitionState;
						public static MOVING: androidx.constraintlayout.motion.widget.MotionLayout.TransitionState;
						public static FINISHED: androidx.constraintlayout.motion.widget.MotionLayout.TransitionState;
						public static values(): androidx.constraintlayout.motion.widget.MotionLayout.TransitionState[];
						public static valueOf(name: string): androidx.constraintlayout.motion.widget.MotionLayout.TransitionState;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class MotionPaths extends java.lang.Comparable<androidx.constraintlayout.motion.widget.MotionPaths> {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionPaths>;
					public static TAG: string;
					public static DEBUG: boolean;
					public static OLD_WAY: boolean;
					public constructor();
					public compareTo(o: androidx.constraintlayout.motion.widget.MotionPaths): number;
					public applyParameters(c: androidx.constraintlayout.widget.ConstraintSet.Constraint): void;
					public constructor(parentWidth: number, parentHeight: number, c: androidx.constraintlayout.motion.widget.KeyPosition, startTimePoint: androidx.constraintlayout.motion.widget.MotionPaths, endTimePoint: androidx.constraintlayout.motion.widget.MotionPaths);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class MotionScene extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionScene>;
					public static TAG: string;
					public static UNSET: number;
					public static LAYOUT_IGNORE_REQUEST: number;
					public static LAYOUT_HONOR_REQUEST: number;
					public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
					public constructor(layout: androidx.constraintlayout.motion.widget.MotionLayout);
					public getTransitionById(id: number): androidx.constraintlayout.motion.widget.MotionScene.Transition;
					public lookUpConstraintName(id: number): string;
					public setKeyframe(view: android.view.View, position: number, name: string, value: any): void;
					public getKeyFrames(motionController: androidx.constraintlayout.motion.widget.MotionController): void;
					public gatPathMotionArc(): number;
					public getDuration(): number;
					public getStaggered(): number;
					public getTransitionsWithState(stateid: number): java.util.List<androidx.constraintlayout.motion.widget.MotionScene.Transition>;
					public validateLayout(layout: androidx.constraintlayout.motion.widget.MotionLayout): boolean;
					public getConstraintSetIds(): number[];
					public lookUpConstraintId(id: string): number;
					public setRtl(rtl: boolean): void;
					public getConstraintSet(context: android.content.Context, id: string): androidx.constraintlayout.widget.ConstraintSet;
					public getInterpolator(): android.view.animation.Interpolator;
					public static stripID(id: string): string;
					public addTransition(transition: androidx.constraintlayout.motion.widget.MotionScene.Transition): void;
					public setConstraintSet(id: number, set: androidx.constraintlayout.widget.ConstraintSet): void;
					public setTransition(transition: androidx.constraintlayout.motion.widget.MotionScene.Transition): void;
					public setDuration(duration: number): void;
					public removeTransition(transition: androidx.constraintlayout.motion.widget.MotionScene.Transition): void;
					public bestTransitionFor(currentState: number, dx: number, dy: number, mLastTouchDown: android.view.MotionEvent): androidx.constraintlayout.motion.widget.MotionScene.Transition;
					public getDefinedTransitions(): java.util.ArrayList<androidx.constraintlayout.motion.widget.MotionScene.Transition>;
					public disableAutoTransition(disable: boolean): void;
					public getPathPercent(view: android.view.View, position: number): number;
					public addOnClickListeners(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, currentState: number): void;
				}
				export module MotionScene {
					export class Transition extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionScene.Transition>;
						public static AUTO_NONE: number;
						public static AUTO_JUMP_TO_START: number;
						public static AUTO_JUMP_TO_END: number;
						public static AUTO_ANIMATE_TO_START: number;
						public static AUTO_ANIMATE_TO_END: number;
						public getOnClickList(): java.util.List<androidx.constraintlayout.motion.widget.MotionScene.Transition.TransitionOnClick>;
						public getTouchResponse(): androidx.constraintlayout.motion.widget.TouchResponse;
						public setEnable(enable: boolean): void;
						public setDuration(duration: number): void;
						public getDuration(): number;
						public setStagger(stagger: number): void;
						public isEnabled(): boolean;
						public isTransitionFlag(flag: number): boolean;
						public getId(): number;
						public getStagger(): number;
						public getPathMotionArc(): number;
						public getStartConstraintSetId(): number;
						public getKeyFrameList(): java.util.List<androidx.constraintlayout.motion.widget.KeyFrames>;
						public addOnClick(context: android.content.Context, parser: org.xmlpull.v1.XmlPullParser): void;
						public getEndConstraintSetId(): number;
						public debugString(context: android.content.Context): string;
						public setPathMotionArc(arcMode: number): void;
						public getLayoutDuringTransition(): number;
						public constructor(id: number, motionScene: androidx.constraintlayout.motion.widget.MotionScene, constraintSetStartId: number, constraintSetEndId: number);
					}
					export module Transition {
						export class TransitionOnClick extends java.lang.Object implements android.view.View.OnClickListener {
							public static class: java.lang.Class<androidx.constraintlayout.motion.widget.MotionScene.Transition.TransitionOnClick>;
							public static ANIM_TO_END: number;
							public static ANIM_TOGGLE: number;
							public static ANIM_TO_START: number;
							public static JUMP_TO_END: number;
							public static JUMP_TO_START: number;
							public constructor(context: android.content.Context, transition: androidx.constraintlayout.motion.widget.MotionScene.Transition, parser: org.xmlpull.v1.XmlPullParser);
							public onClick(view: android.view.View): void;
							public removeOnClickListeners(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout): void;
							public onClick(param0: android.view.View): void;
							public addOnClickListeners(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, currentState: number, transition: androidx.constraintlayout.motion.widget.MotionScene.Transition): void;
						}
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class ProxyInterface extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.ProxyInterface>;
					/**
					 * Constructs a new instance of the androidx.constraintlayout.motion.widget.ProxyInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setToolPosition(param0: number): void;
						getTransitionTimeMs(): number;
						setKeyFramePosition(param0: any, param1: number, param2: number, param3: number, param4: number): boolean;
						designAccess(param0: number, param1: string, param2: any, param3: number[], param4: number, param5: number[], param6: number): number;
						setAttributes(param0: number, param1: string, param2: any, param3: any): void;
						getKeyFramePosition(param0: any, param1: number, param2: number, param3: number): number;
						setKeyFrame(param0: any, param1: number, param2: string, param3: any): void;
						getPositionKeyframe(param0: any, param1: any, param2: number, param3: number, param4: string[], param5: number[]): java.lang.Boolean;
						getKeyframeAtLocation(param0: any, param1: number, param2: number): any;
					});
					public constructor();
					public getKeyFramePosition(param0: any, param1: number, param2: number, param3: number): number;
					public setToolPosition(param0: number): void;
					public getPositionKeyframe(param0: any, param1: any, param2: number, param3: number, param4: string[], param5: number[]): java.lang.Boolean;
					public getTransitionTimeMs(): number;
					public setKeyFramePosition(param0: any, param1: number, param2: number, param3: number, param4: number): boolean;
					public setAttributes(param0: number, param1: string, param2: any, param3: any): void;
					public designAccess(param0: number, param1: string, param2: any, param3: number[], param4: number, param5: number[], param6: number): number;
					public getKeyframeAtLocation(param0: any, param1: number, param2: number): any;
					public setKeyFrame(param0: any, param1: number, param2: string, param3: any): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export abstract class SplineSet extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet>;
					public mCurveFit: androidx.constraintlayout.motion.utils.CurveFit;
					public mTimePoints: number[];
					public mValues: number[];
					public toString(): string;
					public getCurveFit(): androidx.constraintlayout.motion.utils.CurveFit;
					public setType(type: string): void;
					public constructor();
					public get(t: number): number;
					public setProperty(param0: android.view.View, param1: number): void;
					public getSlope(t: number): number;
					public setPoint(position: number, value: number): void;
					public setup(curveType: number): void;
				}
				export module SplineSet {
					export class AlphaSet extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.AlphaSet>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class CustomSet extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.CustomSet>;
						public constructor();
						public setup(curveType: number): void;
						public setPoint(position: number, value: androidx.constraintlayout.widget.ConstraintAttribute): void;
						public setPoint(position: number, value: number): void;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
						public constructor(attribute: string, attrList: android.util.SparseArray<androidx.constraintlayout.widget.ConstraintAttribute>);
					}
					export class ElevationSet extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.ElevationSet>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class PathRotate extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.PathRotate>;
						public setPathRotate(view: android.view.View, t: number, dx: number, param3: number): void;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class PivotXset extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.PivotXset>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class PivotYset extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.PivotYset>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class ProgressSet extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.ProgressSet>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class RotationSet extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.RotationSet>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class RotationXset extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.RotationXset>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class RotationYset extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.RotationYset>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class ScaleXset extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.ScaleXset>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class ScaleYset extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.ScaleYset>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class Sort extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.Sort>;
					}
					export class TranslationXset extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.TranslationXset>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class TranslationYset extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.TranslationYset>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
					export class TranslationZset extends androidx.constraintlayout.motion.widget.SplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.SplineSet.TranslationZset>;
						public setProperty(view: android.view.View, t: number): void;
						public setProperty(param0: android.view.View, param1: number): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export abstract class TimeCycleSplineSet extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet>;
					public mCurveFit: androidx.constraintlayout.motion.utils.CurveFit;
					public mWaveShape: number;
					public mTimePoints: number[];
					public mValues: number[][];
					public mContinue: boolean;
					public toString(): string;
					public getCurveFit(): androidx.constraintlayout.motion.utils.CurveFit;
					public setType(type: string): void;
					public setPoint(position: number, value: number, period: number, shape: number, offset: number): void;
					public constructor();
					public calcWave(period: number): number;
					public setProperty(param0: android.view.View, param1: number, param2: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					public get(pos: number, time: number, param2: android.view.View, view: androidx.constraintlayout.motion.widget.KeyCache): number;
					public setup(curveType: number): void;
					public setStartTime(currentTime: number): void;
				}
				export module TimeCycleSplineSet {
					export class AlphaSet extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.AlphaSet>;
						public setProperty(param0: android.view.View, param1: number, param2: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: android.view.View, t: number, time: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					}
					export class CustomSet extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.CustomSet>;
						public setPoint(position: number, value: androidx.constraintlayout.widget.ConstraintAttribute, period: number, shape: number, offset: number): void;
						public constructor();
						public setProperty(param0: android.view.View, param1: number, param2: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setup(curveType: number): void;
						public setPoint(position: number, value: number, period: number, shape: number, offset: number): void;
						public setProperty(view: android.view.View, t: number, time: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public constructor(attribute: string, attrList: android.util.SparseArray<androidx.constraintlayout.widget.ConstraintAttribute>);
					}
					export class ElevationSet extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.ElevationSet>;
						public setProperty(param0: android.view.View, param1: number, param2: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: android.view.View, t: number, time: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					}
					export class PathRotate extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.PathRotate>;
						public setProperty(param0: android.view.View, param1: number, param2: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: android.view.View, t: number, time: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setPathRotate(view: android.view.View, cache: androidx.constraintlayout.motion.widget.KeyCache, t: number, time: number, param4: number, dx: number): boolean;
					}
					export class ProgressSet extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.ProgressSet>;
						public setProperty(param0: android.view.View, param1: number, param2: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: android.view.View, t: number, time: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					}
					export class RotationSet extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.RotationSet>;
						public setProperty(param0: android.view.View, param1: number, param2: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: android.view.View, t: number, time: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					}
					export class RotationXset extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.RotationXset>;
						public setProperty(param0: android.view.View, param1: number, param2: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: android.view.View, t: number, time: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					}
					export class RotationYset extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.RotationYset>;
						public setProperty(param0: android.view.View, param1: number, param2: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: android.view.View, t: number, time: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					}
					export class ScaleXset extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.ScaleXset>;
						public setProperty(param0: android.view.View, param1: number, param2: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: android.view.View, t: number, time: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					}
					export class ScaleYset extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.ScaleYset>;
						public setProperty(param0: android.view.View, param1: number, param2: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: android.view.View, t: number, time: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					}
					export class Sort extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.Sort>;
					}
					export class TranslationXset extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.TranslationXset>;
						public setProperty(param0: android.view.View, param1: number, param2: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: android.view.View, t: number, time: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					}
					export class TranslationYset extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.TranslationYset>;
						public setProperty(param0: android.view.View, param1: number, param2: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: android.view.View, t: number, time: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					}
					export class TranslationZset extends androidx.constraintlayout.motion.widget.TimeCycleSplineSet {
						public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TimeCycleSplineSet.TranslationZset>;
						public setProperty(param0: android.view.View, param1: number, param2: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
						public setProperty(view: android.view.View, t: number, time: number, param3: androidx.constraintlayout.motion.widget.KeyCache): boolean;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class TouchResponse extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TouchResponse>;
					public setTouchAnchorLocation(x: number, y: number): void;
					public getMaxVelocity(): number;
					public toString(): string;
					public getFlags(): number;
					public setMaxVelocity(velocity: number): void;
					public getAnchorId(): number;
					public setMaxAcceleration(acceleration: number): void;
					public setRTL(rtl: boolean): void;
					public setAnchorId(id: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export abstract class TransitionAdapter extends java.lang.Object implements androidx.constraintlayout.motion.widget.MotionLayout.TransitionListener {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TransitionAdapter>;
					public onTransitionStarted(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, startId: number, endId: number): void;
					public onTransitionCompleted(param0: androidx.constraintlayout.motion.widget.MotionLayout, param1: number): void;
					public onTransitionTrigger(param0: androidx.constraintlayout.motion.widget.MotionLayout, param1: number, param2: boolean, param3: number): void;
					public constructor();
					public onTransitionChange(param0: androidx.constraintlayout.motion.widget.MotionLayout, param1: number, param2: number, param3: number): void;
					public onTransitionStarted(param0: androidx.constraintlayout.motion.widget.MotionLayout, param1: number, param2: number): void;
					public onTransitionCompleted(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, currentId: number): void;
					public onTransitionChange(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, startId: number, endId: number, progress: number): void;
					public onTransitionTrigger(motionLayout: androidx.constraintlayout.motion.widget.MotionLayout, triggerId: number, positive: boolean, progress: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module motion {
			export module widget {
				export class TransitionBuilder extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.motion.widget.TransitionBuilder>;
					public constructor();
					public static validate(layout: androidx.constraintlayout.motion.widget.MotionLayout): void;
					public static buildTransition(scene: androidx.constraintlayout.motion.widget.MotionScene, transitionId: number, startConstraintSetId: number, startConstraintSet: androidx.constraintlayout.widget.ConstraintSet, endConstraintSetId: number, endConstraintSet: androidx.constraintlayout.widget.ConstraintSet): androidx.constraintlayout.motion.widget.MotionScene.Transition;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module utils {
			export module widget {
				export class ImageFilterButton extends androidx.appcompat.widget.AppCompatImageButton {
					public static class: java.lang.Class<androidx.constraintlayout.utils.widget.ImageFilterButton>;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public setBrightness(brightness: number): void;
					public setContrast(contrast: number): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public setRoundPercent(round: number): void;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public invalidateDrawable(dr: android.graphics.drawable.Drawable): void;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public getSupportImageTintList(): android.content.res.ColorStateList;
					public getWarmth(): number;
					public draw(canvas: android.graphics.Canvas): void;
					public getRound(): number;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public getRoundPercent(): number;
					public setSupportImageTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public setWarmth(warmth: number): void;
					public getSupportBackgroundTintList(): android.content.res.ColorStateList;
					public sendAccessibilityEvent(param0: number): void;
					public setCrossfade(crossfade: number): void;
					public getCrossfade(): number;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setRound(round: number): void;
					public constructor(context: android.content.Context);
					public getContrast(): number;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public setSupportImageTintList(param0: android.content.res.ColorStateList): void;
					public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public getSupportImageTintMode(): android.graphics.PorterDuff.Mode;
					public getSaturation(): number;
					public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public setSaturation(saturation: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module utils {
			export module widget {
				export class ImageFilterView extends androidx.appcompat.widget.AppCompatImageView {
					public static class: java.lang.Class<androidx.constraintlayout.utils.widget.ImageFilterView>;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public setBrightness(brightness: number): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public setRoundPercent(round: number): void;
					public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
					public invalidateDrawable(dr: android.graphics.drawable.Drawable): void;
					public getWarmth(): number;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public getSupportBackgroundTintList(): android.content.res.ColorStateList;
					public setCrossfade(crossfade: number): void;
					public getCrossfade(): number;
					public setRound(round: number): void;
					public constructor(context: android.content.Context);
					public getContrast(): number;
					public setSupportImageTintList(param0: android.content.res.ColorStateList): void;
					public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public setContrast(contrast: number): void;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public getSupportImageTintList(): android.content.res.ColorStateList;
					public draw(canvas: android.graphics.Canvas): void;
					public getRound(): number;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public getRoundPercent(): number;
					public setSupportImageTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public setWarmth(warmth: number): void;
					public sendAccessibilityEvent(param0: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public getSupportImageTintMode(): android.graphics.PorterDuff.Mode;
					public getSaturation(): number;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public getBrightness(): number;
					public setSaturation(saturation: number): void;
				}
				export module ImageFilterView {
					export class ImageMatrix extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.utils.widget.ImageFilterView.ImageMatrix>;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module utils {
			export module widget {
				export class MockView extends android.view.View {
					public static class: java.lang.Class<androidx.constraintlayout.utils.widget.MockView>;
					public mText: string;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public constructor(context: android.content.Context);
					public sendAccessibilityEvent(eventType: number): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public sendAccessibilityEvent(param0: number): void;
					public onDraw(canvas: android.graphics.Canvas): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module utils {
			export module widget {
				export class MotionTelltales extends androidx.constraintlayout.utils.widget.MockView {
					public static class: java.lang.Class<androidx.constraintlayout.utils.widget.MotionTelltales>;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public onAttachedToWindow(): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public sendAccessibilityEvent(param0: number): void;
					public onDraw(canvas: android.graphics.Canvas): void;
					public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
					public constructor(context: android.content.Context);
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public setText(text: string): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class Barrier extends androidx.constraintlayout.widget.ConstraintHelper {
				public static class: java.lang.Class<androidx.constraintlayout.widget.Barrier>;
				public static LEFT: number;
				public static TOP: number;
				public static RIGHT: number;
				public static BOTTOM: number;
				public static START: number;
				public static END: number;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public getType(): number;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public setType(type: number): void;
				public setDpMargin(margin: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public loadParameters(constraint: androidx.constraintlayout.widget.ConstraintSet.Constraint, child: androidx.constraintlayout.solver.widgets.HelperWidget, layoutParams: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams, mapIdToWidget: android.util.SparseArray<androidx.constraintlayout.solver.widgets.ConstraintWidget>): void;
				public sendAccessibilityEvent(eventType: number): void;
				public setMargin(margin: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public constructor(context: android.content.Context);
				public resolveRtl(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget, isRtl: boolean): void;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public setAllowsGoneWidget(supportGone: boolean): void;
				public allowsGoneWidget(): boolean;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public init(attrs: android.util.AttributeSet): void;
				public getMargin(): number;
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class ConstraintAttribute extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintAttribute>;
				public setStringValue(value: string): void;
				public getValueToInterpolate(): number;
				public getType(): androidx.constraintlayout.widget.ConstraintAttribute.AttributeType;
				public constructor(name: string, attributeType: androidx.constraintlayout.widget.ConstraintAttribute.AttributeType);
				public noOfInterpValues(): number;
				public setColorValue(value: number): void;
				public static setAttributes(view: android.view.View, map: java.util.HashMap<string,androidx.constraintlayout.widget.ConstraintAttribute>): void;
				public static extractAttributes(base: java.util.HashMap<string,androidx.constraintlayout.widget.ConstraintAttribute>, view: android.view.View): java.util.HashMap<string,androidx.constraintlayout.widget.ConstraintAttribute>;
				public static parse(context: android.content.Context, parser: org.xmlpull.v1.XmlPullParser, custom: java.util.HashMap<string,androidx.constraintlayout.widget.ConstraintAttribute>): void;
				public setIntValue(value: number): void;
				public constructor(name: string, attributeType: androidx.constraintlayout.widget.ConstraintAttribute.AttributeType, value: any);
				public setValue(value: number[]): void;
				public setFloatValue(value: number): void;
				public getValuesToInterpolate(ret: number[]): void;
				public constructor(source: androidx.constraintlayout.widget.ConstraintAttribute, value: any);
				public setValue(value: any): void;
				public diff(constraintAttribute: androidx.constraintlayout.widget.ConstraintAttribute): boolean;
				public setInterpolatedValue(view: android.view.View, value: number[]): void;
			}
			export module ConstraintAttribute {
				export class AttributeType {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintAttribute.AttributeType>;
					public static INT_TYPE: androidx.constraintlayout.widget.ConstraintAttribute.AttributeType;
					public static FLOAT_TYPE: androidx.constraintlayout.widget.ConstraintAttribute.AttributeType;
					public static COLOR_TYPE: androidx.constraintlayout.widget.ConstraintAttribute.AttributeType;
					public static COLOR_DRAWABLE_TYPE: androidx.constraintlayout.widget.ConstraintAttribute.AttributeType;
					public static STRING_TYPE: androidx.constraintlayout.widget.ConstraintAttribute.AttributeType;
					public static BOOLEAN_TYPE: androidx.constraintlayout.widget.ConstraintAttribute.AttributeType;
					public static DIMENSION_TYPE: androidx.constraintlayout.widget.ConstraintAttribute.AttributeType;
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static values(): androidx.constraintlayout.widget.ConstraintAttribute.AttributeType[];
					public static valueOf(name: string): androidx.constraintlayout.widget.ConstraintAttribute.AttributeType;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export abstract class ConstraintHelper extends android.view.View {
				public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintHelper>;
				public mIds: number[];
				public mCount: number;
				public myContext: android.content.Context;
				public mHelperWidget: androidx.constraintlayout.solver.widgets.Helper;
				public mUseViewMeasure: boolean;
				public mReferenceIds: string;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public updatePostLayout(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public loadParameters(constraint: androidx.constraintlayout.widget.ConstraintSet.Constraint, child: androidx.constraintlayout.solver.widgets.HelperWidget, layoutParams: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams, mapIdToWidget: android.util.SparseArray<androidx.constraintlayout.solver.widgets.ConstraintWidget>): void;
				public sendAccessibilityEvent(eventType: number): void;
				public addView(view: android.view.View): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public removeView(view: android.view.View): void;
				public getViews(layout: androidx.constraintlayout.widget.ConstraintLayout): android.view.View[];
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getReferencedIds(): number[];
				public setIds(idList: string): void;
				public applyLayoutFeatures(): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public updatePostMeasure(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public applyLayoutFeatures(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public updatePreLayout(container: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer, helper: androidx.constraintlayout.solver.widgets.Helper, map: android.util.SparseArray<androidx.constraintlayout.solver.widgets.ConstraintWidget>): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public setReferencedIds(ids: number[]): void;
				public onDraw(canvas: android.graphics.Canvas): void;
				public constructor(context: android.content.Context);
				public resolveRtl(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget, isRtl: boolean): void;
				public updatePreLayout(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public validateParams(): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public updatePreDraw(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public updatePostConstraints(constainer: androidx.constraintlayout.widget.ConstraintLayout): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public init(attrs: android.util.AttributeSet): void;
				public onAttachedToWindow(): void;
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class ConstraintLayout extends android.view.ViewGroup {
				public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintLayout>;
				public static VERSION: string;
				public mLayoutWidget: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer;
				public mDirtyHierarchy: boolean;
				public mConstraintLayoutSpec: androidx.constraintlayout.widget.ConstraintLayoutStates;
				public static DESIGN_INFO_ID: number;
				public addView(child: android.view.View, width: number, height: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public getMaxHeight(): number;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public resolveMeasuredDimension(widthMeasureSpec: number, heightMeasureSpec: number, measuredWidth: number, measuredHeight: number, isWidthMeasuredTooSmall: boolean, isHeightMeasuredTooSmall: boolean): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public resolveSystem(layout: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer, optimizationLevel: number, widthMeasureSpec: number, heightMeasureSpec: number): void;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public generateLayoutParams(attrs: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
				public constructor(context: android.content.Context);
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public onLayout(changed: boolean, left: number, top: number, right: number, bottom: number): void;
				public setId(id: number): void;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public setMinHeight(value: number): void;
				public bringChildToFront(child: android.view.View): void;
				public setState(id: number, screenWidth: number, screenHeight: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public setConstraintSet(set: androidx.constraintlayout.widget.ConstraintSet): void;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public dispatchDraw(canvas: android.graphics.Canvas): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public getViewWidget(view: android.view.View): androidx.constraintlayout.solver.widgets.ConstraintWidget;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public addView(child: android.view.View): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public forceLayout(): void;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public addView(child: android.view.View, index: number): void;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public fillMetrics(metrics: androidx.constraintlayout.solver.Metrics): void;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public onViewAdded(view: android.view.View): void;
				public setMinWidth(value: number): void;
				public onViewRemoved(view: android.view.View): void;
				public clearChildFocus(param0: android.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public generateDefaultLayoutParams(): androidx.constraintlayout.widget.ConstraintLayout.LayoutParams;
				public sendAccessibilityEvent(eventType: number): void;
				public requestFitSystemWindows(): void;
				public checkLayoutParams(p: android.view.ViewGroup.LayoutParams): boolean;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getOptimizationLevel(): number;
				public setMaxWidth(value: number): void;
				public getDesignInformation(type: number, value: any): any;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public isRtl(): boolean;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public setDesignInformation(type: number, value1: any, value2: any): void;
				public focusSearch(direction: number): android.view.View;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public parseLayoutDescription(id: number): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public generateLayoutParams(attrs: android.util.AttributeSet): androidx.constraintlayout.widget.ConstraintLayout.LayoutParams;
				public setSelfDimensionBehaviour(layout: androidx.constraintlayout.solver.widgets.ConstraintWidgetContainer, widthMode: number, widthSize: number, heightMode: number, heightSize: number): void;
				public onViewRemoved(child: android.view.View): void;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public isTextAlignmentResolved(): boolean;
				public getViewById(id: number): android.view.View;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public getMinHeight(): number;
				public focusableViewAvailable(v: android.view.View): void;
				public loadLayoutDescription(layoutDescription: number): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public getMaxWidth(): number;
				public canResolveTextAlignment(): boolean;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public setMaxHeight(value: number): void;
				public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
				public removeView(view: android.view.View): void;
				public generateLayoutParams(p: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
				public requestLayout(): void;
				public getMinWidth(): number;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public applyConstraintsFromLayoutParams(isInEditMode: boolean, child: android.view.View, widget: androidx.constraintlayout.solver.widgets.ConstraintWidget, layoutParams: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams, idToWidget: android.util.SparseArray<androidx.constraintlayout.solver.widgets.ConstraintWidget>): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public onStopNestedScroll(param0: android.view.View): void;
				public onViewAdded(child: android.view.View): void;
				public setOnConstraintsChanged(constraintsChangedListener: androidx.constraintlayout.widget.ConstraintsChangedListener): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public setOptimizationLevel(level: number): void;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
				public shouldDelayChildPressedState(): boolean;
			}
			export module ConstraintLayout {
				export class LayoutParams extends android.view.ViewGroup.MarginLayoutParams {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintLayout.LayoutParams>;
					public static MATCH_CONSTRAINT: number;
					public static PARENT_ID: number;
					public static UNSET: number;
					public static HORIZONTAL: number;
					public static VERTICAL: number;
					public static LEFT: number;
					public static RIGHT: number;
					public static TOP: number;
					public static BOTTOM: number;
					public static BASELINE: number;
					public static START: number;
					public static END: number;
					public static MATCH_CONSTRAINT_WRAP: number;
					public static MATCH_CONSTRAINT_SPREAD: number;
					public static MATCH_CONSTRAINT_PERCENT: number;
					public static CHAIN_SPREAD: number;
					public static CHAIN_SPREAD_INSIDE: number;
					public static CHAIN_PACKED: number;
					public guideBegin: number;
					public guideEnd: number;
					public guidePercent: number;
					public leftToLeft: number;
					public leftToRight: number;
					public rightToLeft: number;
					public rightToRight: number;
					public topToTop: number;
					public topToBottom: number;
					public bottomToTop: number;
					public bottomToBottom: number;
					public baselineToBaseline: number;
					public circleConstraint: number;
					public circleRadius: number;
					public circleAngle: number;
					public startToEnd: number;
					public startToStart: number;
					public endToStart: number;
					public endToEnd: number;
					public goneLeftMargin: number;
					public goneTopMargin: number;
					public goneRightMargin: number;
					public goneBottomMargin: number;
					public goneStartMargin: number;
					public goneEndMargin: number;
					public horizontalBias: number;
					public verticalBias: number;
					public dimensionRatio: string;
					public horizontalWeight: number;
					public verticalWeight: number;
					public horizontalChainStyle: number;
					public verticalChainStyle: number;
					public matchConstraintDefaultWidth: number;
					public matchConstraintDefaultHeight: number;
					public matchConstraintMinWidth: number;
					public matchConstraintMinHeight: number;
					public matchConstraintMaxWidth: number;
					public matchConstraintMaxHeight: number;
					public matchConstraintPercentWidth: number;
					public matchConstraintPercentHeight: number;
					public editorAbsoluteX: number;
					public editorAbsoluteY: number;
					public orientation: number;
					public constrainedWidth: boolean;
					public constrainedHeight: boolean;
					public constraintTag: string;
					public helped: boolean;
					public getConstraintWidget(): androidx.constraintlayout.solver.widgets.ConstraintWidget;
					public constructor(source: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams);
					public reset(): void;
					public constructor(source: android.view.ViewGroup.MarginLayoutParams);
					public constructor(c: android.content.Context, attrs: android.util.AttributeSet);
					public getConstraintTag(): string;
					public validate(): void;
					public setWidgetDebugName(text: string): void;
					public constructor(source: android.view.ViewGroup.LayoutParams);
					public resolveLayoutDirection(layoutDirection: number): void;
					public constructor(width: number, height: number);
				}
				export module LayoutParams {
					export class Table extends java.lang.Object {
						public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintLayout.LayoutParams.Table>;
						public static UNUSED: number;
						public static ANDROID_ORIENTATION: number;
						public static LAYOUT_CONSTRAINT_CIRCLE: number;
						public static LAYOUT_CONSTRAINT_CIRCLE_RADIUS: number;
						public static LAYOUT_CONSTRAINT_CIRCLE_ANGLE: number;
						public static LAYOUT_CONSTRAINT_GUIDE_BEGIN: number;
						public static LAYOUT_CONSTRAINT_GUIDE_END: number;
						public static LAYOUT_CONSTRAINT_GUIDE_PERCENT: number;
						public static LAYOUT_CONSTRAINT_LEFT_TO_LEFT_OF: number;
						public static LAYOUT_CONSTRAINT_LEFT_TO_RIGHT_OF: number;
						public static LAYOUT_CONSTRAINT_RIGHT_TO_LEFT_OF: number;
						public static LAYOUT_CONSTRAINT_RIGHT_TO_RIGHT_OF: number;
						public static LAYOUT_CONSTRAINT_TOP_TO_TOP_OF: number;
						public static LAYOUT_CONSTRAINT_TOP_TO_BOTTOM_OF: number;
						public static LAYOUT_CONSTRAINT_BOTTOM_TO_TOP_OF: number;
						public static LAYOUT_CONSTRAINT_BOTTOM_TO_BOTTOM_OF: number;
						public static LAYOUT_CONSTRAINT_BASELINE_TO_BASELINE_OF: number;
						public static LAYOUT_CONSTRAINT_START_TO_END_OF: number;
						public static LAYOUT_CONSTRAINT_START_TO_START_OF: number;
						public static LAYOUT_CONSTRAINT_END_TO_START_OF: number;
						public static LAYOUT_CONSTRAINT_END_TO_END_OF: number;
						public static LAYOUT_GONE_MARGIN_LEFT: number;
						public static LAYOUT_GONE_MARGIN_TOP: number;
						public static LAYOUT_GONE_MARGIN_RIGHT: number;
						public static LAYOUT_GONE_MARGIN_BOTTOM: number;
						public static LAYOUT_GONE_MARGIN_START: number;
						public static LAYOUT_GONE_MARGIN_END: number;
						public static LAYOUT_CONSTRAINED_WIDTH: number;
						public static LAYOUT_CONSTRAINED_HEIGHT: number;
						public static LAYOUT_CONSTRAINT_HORIZONTAL_BIAS: number;
						public static LAYOUT_CONSTRAINT_VERTICAL_BIAS: number;
						public static LAYOUT_CONSTRAINT_WIDTH_DEFAULT: number;
						public static LAYOUT_CONSTRAINT_HEIGHT_DEFAULT: number;
						public static LAYOUT_CONSTRAINT_WIDTH_MIN: number;
						public static LAYOUT_CONSTRAINT_WIDTH_MAX: number;
						public static LAYOUT_CONSTRAINT_WIDTH_PERCENT: number;
						public static LAYOUT_CONSTRAINT_HEIGHT_MIN: number;
						public static LAYOUT_CONSTRAINT_HEIGHT_MAX: number;
						public static LAYOUT_CONSTRAINT_HEIGHT_PERCENT: number;
						public static LAYOUT_CONSTRAINT_LEFT_CREATOR: number;
						public static LAYOUT_CONSTRAINT_TOP_CREATOR: number;
						public static LAYOUT_CONSTRAINT_RIGHT_CREATOR: number;
						public static LAYOUT_CONSTRAINT_BOTTOM_CREATOR: number;
						public static LAYOUT_CONSTRAINT_BASELINE_CREATOR: number;
						public static LAYOUT_CONSTRAINT_DIMENSION_RATIO: number;
						public static LAYOUT_CONSTRAINT_HORIZONTAL_WEIGHT: number;
						public static LAYOUT_CONSTRAINT_VERTICAL_WEIGHT: number;
						public static LAYOUT_CONSTRAINT_HORIZONTAL_CHAINSTYLE: number;
						public static LAYOUT_CONSTRAINT_VERTICAL_CHAINSTYLE: number;
						public static LAYOUT_EDITOR_ABSOLUTEX: number;
						public static LAYOUT_EDITOR_ABSOLUTEY: number;
						public static LAYOUT_CONSTRAINT_TAG: number;
						public static map: android.util.SparseIntArray;
					}
				}
				export class Measurer extends java.lang.Object implements androidx.constraintlayout.solver.widgets.analyzer.BasicMeasure.Measurer {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintLayout.Measurer>;
					public constructor(this$0: androidx.constraintlayout.widget.ConstraintLayout, l: androidx.constraintlayout.widget.ConstraintLayout);
					public measure(param0: androidx.constraintlayout.solver.widgets.ConstraintWidget, param1: androidx.constraintlayout.solver.widgets.analyzer.BasicMeasure.Measure): void;
					public didMeasures(): void;
					public captureLayoutInfos(widthSpec: number, heightSpec: number, top: number, bottom: number, width: number, height: number): void;
					public measure(widget: androidx.constraintlayout.solver.widgets.ConstraintWidget, measure: androidx.constraintlayout.solver.widgets.analyzer.BasicMeasure.Measure): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class ConstraintLayoutStates extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintLayoutStates>;
				public static TAG: string;
				public setOnConstraintsChanged(constraintsChangedListener: androidx.constraintlayout.widget.ConstraintsChangedListener): void;
				public updateConstraints(id: number, width: number, height: number): void;
				public needsToChange(id: number, width: number, height: number): boolean;
			}
			export module ConstraintLayoutStates {
				export class State extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintLayoutStates.State>;
					public constructor(context: android.content.Context, parser: org.xmlpull.v1.XmlPullParser);
					public findMatch(width: number, height: number): number;
				}
				export class Variant extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintLayoutStates.Variant>;
					public constructor(context: android.content.Context, parser: org.xmlpull.v1.XmlPullParser);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class ConstraintProperties extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintProperties>;
				public static LEFT: number;
				public static RIGHT: number;
				public static TOP: number;
				public static BOTTOM: number;
				public static BASELINE: number;
				public static START: number;
				public static END: number;
				public static UNSET: number;
				public static PARENT_ID: number;
				public static MATCH_CONSTRAINT: number;
				public static WRAP_CONTENT: number;
				public static MATCH_CONSTRAINT_WRAP: number;
				public static MATCH_CONSTRAINT_SPREAD: number;
				public constrainDefaultHeight(height: number): androidx.constraintlayout.widget.ConstraintProperties;
				public horizontalWeight(weight: number): androidx.constraintlayout.widget.ConstraintProperties;
				public transformPivotX(transformPivotX: number): androidx.constraintlayout.widget.ConstraintProperties;
				public constrainMinHeight(height: number): androidx.constraintlayout.widget.ConstraintProperties;
				public visibility(visibility: number): androidx.constraintlayout.widget.ConstraintProperties;
				public removeFromHorizontalChain(): androidx.constraintlayout.widget.ConstraintProperties;
				public centerHorizontallyRtl(toView: number): androidx.constraintlayout.widget.ConstraintProperties;
				public margin(anchor: number, value: number): androidx.constraintlayout.widget.ConstraintProperties;
				public scaleY(scaleY: number): androidx.constraintlayout.widget.ConstraintProperties;
				public removeConstraints(anchor: number): androidx.constraintlayout.widget.ConstraintProperties;
				public scaleX(scaleX: number): androidx.constraintlayout.widget.ConstraintProperties;
				public constrainWidth(width: number): androidx.constraintlayout.widget.ConstraintProperties;
				public constrainMinWidth(width: number): androidx.constraintlayout.widget.ConstraintProperties;
				public removeFromVerticalChain(): androidx.constraintlayout.widget.ConstraintProperties;
				public apply(): void;
				public centerVertically(toView: number): androidx.constraintlayout.widget.ConstraintProperties;
				public translation(translationX: number, translationY: number): androidx.constraintlayout.widget.ConstraintProperties;
				public constrainHeight(height: number): androidx.constraintlayout.widget.ConstraintProperties;
				public constrainMaxHeight(height: number): androidx.constraintlayout.widget.ConstraintProperties;
				public horizontalBias(bias: number): androidx.constraintlayout.widget.ConstraintProperties;
				public transformPivot(transformPivotX: number, transformPivotY: number): androidx.constraintlayout.widget.ConstraintProperties;
				public addToHorizontalChain(leftId: number, rightId: number): androidx.constraintlayout.widget.ConstraintProperties;
				public verticalBias(bias: number): androidx.constraintlayout.widget.ConstraintProperties;
				public centerHorizontally(toView: number): androidx.constraintlayout.widget.ConstraintProperties;
				public constrainDefaultWidth(width: number): androidx.constraintlayout.widget.ConstraintProperties;
				public transformPivotY(transformPivotY: number): androidx.constraintlayout.widget.ConstraintProperties;
				public addToVerticalChain(topId: number, bottomId: number): androidx.constraintlayout.widget.ConstraintProperties;
				public centerVertically(topId: number, topSide: number, topMargin: number, bottomId: number, bottomSide: number, bottomMargin: number, bias: number): androidx.constraintlayout.widget.ConstraintProperties;
				public rotationX(rotationX: number): androidx.constraintlayout.widget.ConstraintProperties;
				public verticalChainStyle(chainStyle: number): androidx.constraintlayout.widget.ConstraintProperties;
				public translationY(translationY: number): androidx.constraintlayout.widget.ConstraintProperties;
				public verticalWeight(weight: number): androidx.constraintlayout.widget.ConstraintProperties;
				public goneMargin(anchor: number, value: number): androidx.constraintlayout.widget.ConstraintProperties;
				public rotation(rotation: number): androidx.constraintlayout.widget.ConstraintProperties;
				public alpha(alpha: number): androidx.constraintlayout.widget.ConstraintProperties;
				public constrainMaxWidth(width: number): androidx.constraintlayout.widget.ConstraintProperties;
				public translationX(translationX: number): androidx.constraintlayout.widget.ConstraintProperties;
				public constructor(view: android.view.View);
				public center(firstID: number, firstSide: number, firstMargin: number, secondId: number, secondSide: number, secondMargin: number, bias: number): androidx.constraintlayout.widget.ConstraintProperties;
				public addToHorizontalChainRTL(leftId: number, rightId: number): androidx.constraintlayout.widget.ConstraintProperties;
				public centerHorizontally(leftId: number, leftSide: number, leftMargin: number, rightId: number, rightSide: number, rightMargin: number, bias: number): androidx.constraintlayout.widget.ConstraintProperties;
				public connect(startSide: number, endID: number, endSide: number, margin: number): androidx.constraintlayout.widget.ConstraintProperties;
				public centerHorizontallyRtl(startId: number, startSide: number, startMargin: number, endId: number, endSide: number, endMargin: number, bias: number): androidx.constraintlayout.widget.ConstraintProperties;
				public horizontalChainStyle(chainStyle: number): androidx.constraintlayout.widget.ConstraintProperties;
				public elevation(elevation: number): androidx.constraintlayout.widget.ConstraintProperties;
				public rotationY(rotationY: number): androidx.constraintlayout.widget.ConstraintProperties;
				public translationZ(translationZ: number): androidx.constraintlayout.widget.ConstraintProperties;
				public dimensionRatio(ratio: string): androidx.constraintlayout.widget.ConstraintProperties;
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class ConstraintSet extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintSet>;
				public static UNSET: number;
				public static MATCH_CONSTRAINT: number;
				public static WRAP_CONTENT: number;
				public static MATCH_CONSTRAINT_WRAP: number;
				public static MATCH_CONSTRAINT_SPREAD: number;
				public static PARENT_ID: number;
				public static HORIZONTAL: number;
				public static VERTICAL: number;
				public static HORIZONTAL_GUIDELINE: number;
				public static VERTICAL_GUIDELINE: number;
				public static VISIBLE: number;
				public static INVISIBLE: number;
				public static GONE: number;
				public static LEFT: number;
				public static RIGHT: number;
				public static TOP: number;
				public static BOTTOM: number;
				public static BASELINE: number;
				public static START: number;
				public static END: number;
				public static CHAIN_SPREAD: number;
				public static CHAIN_SPREAD_INSIDE: number;
				public static VISIBILITY_MODE_NORMAL: number;
				public static VISIBILITY_MODE_IGNORE: number;
				public static CHAIN_PACKED: number;
				public applyToWithoutCustom(constraintLayout: androidx.constraintlayout.widget.ConstraintLayout): void;
				public addColorAttributes(...attributeName: string[]): void;
				public setHorizontalBias(viewId: number, bias: number): void;
				public clear(viewId: number): void;
				public removeAttribute(attributeName: string): void;
				public setAlpha(viewId: number, alpha: number): void;
				public getApplyElevation(viewId: number): boolean;
				public setTransformPivotY(viewId: number, transformPivotY: number): void;
				public centerVertically(viewId: number, toView: number): void;
				public constrainMinWidth(viewId: number, width: number): void;
				public setEditorAbsoluteX(viewId: number, position: number): void;
				public setVerticalChainStyle(viewId: number, chainStyle: number): void;
				public setColorValue(viewId: number, attributeName: string, value: number): void;
				public getCustomAttributeSet(): java.util.HashMap<string,androidx.constraintlayout.widget.ConstraintAttribute>;
				public constrainMinHeight(viewId: number, height: number): void;
				public setVerticalWeight(viewId: number, weight: number): void;
				public load(context: android.content.Context, resourceId: number): void;
				public setHorizontalWeight(viewId: number, weight: number): void;
				public setVisibilityMode(viewId: number, visibilityMode: number): void;
				public dump(scene: androidx.constraintlayout.motion.widget.MotionScene, ...ids: number[]): void;
				public constrainedHeight(viewId: number, constrained: boolean): void;
				public setVisibility(viewId: number, visibility: number): void;
				public clone(context: android.content.Context, constraintLayoutId: number): void;
				public clone(set: androidx.constraintlayout.widget.ConstraintSet): void;
				public isForceId(): boolean;
				public addToHorizontalChainRTL(viewId: number, leftId: number, rightId: number): void;
				public load(context: android.content.Context, parser: org.xmlpull.v1.XmlPullParser): void;
				public constrainWidth(viewId: number, width: number): void;
				public getKnownIds(): number[];
				public setTransformPivotX(viewId: number, transformPivotX: number): void;
				public setTranslationY(viewId: number, translationY: number): void;
				public setRotationY(viewId: number, rotationY: number): void;
				public getWidth(viewId: number): number;
				public setGuidelineBegin(guidelineID: number, margin: number): void;
				public clear(viewId: number, anchor: number): void;
				public setApplyElevation(viewId: number, apply: boolean): void;
				public setElevation(viewId: number, elevation: number): void;
				public setTranslationZ(viewId: number, translationZ: number): void;
				public center(centerID: number, firstID: number, firstSide: number, firstMargin: number, secondId: number, secondSide: number, secondMargin: number, bias: number): void;
				public centerHorizontallyRtl(centerID: number, startId: number, startSide: number, startMargin: number, endId: number, endSide: number, endMargin: number, bias: number): void;
				public clone(constraints: androidx.constraintlayout.widget.Constraints): void;
				public applyToHelper(helper: androidx.constraintlayout.widget.ConstraintHelper, child: androidx.constraintlayout.solver.widgets.ConstraintWidget, layoutParams: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams, mapIdToWidget: android.util.SparseArray<androidx.constraintlayout.solver.widgets.ConstraintWidget>): void;
				public setGoneMargin(viewId: number, anchor: number, value: number): void;
				public getConstraint(id: number): androidx.constraintlayout.widget.ConstraintSet.Constraint;
				public createHorizontalChain(leftId: number, leftSide: number, rightId: number, rightSide: number, chainIds: number[], weights: number[], style: number): void;
				public readFallback(constraintLayout: androidx.constraintlayout.widget.ConstraintLayout): void;
				public setScaleY(viewId: number, scaleY: number): void;
				public centerVertically(centerID: number, topId: number, topSide: number, topMargin: number, bottomId: number, bottomSide: number, bottomMargin: number, bias: number): void;
				public getReferencedIds(id: number): number[];
				public clone(constraintLayout: androidx.constraintlayout.widget.ConstraintLayout): void;
				public connect(startID: number, startSide: number, endID: number, endSide: number): void;
				public centerHorizontally(viewId: number, toView: number): void;
				public setValidateOnParse(validate: boolean): void;
				public setStringValue(viewId: number, attributeName: string, value: string): void;
				public centerHorizontally(centerID: number, leftId: number, leftSide: number, leftMargin: number, rightId: number, rightSide: number, rightMargin: number, bias: number): void;
				public constructor();
				public constrainDefaultWidth(viewId: number, width: number): void;
				public createBarrier(id: number, direction: number, margin: number, ...referenced: number[]): void;
				public parseIntAttributes(set: androidx.constraintlayout.widget.ConstraintSet.Constraint, attributes: string): void;
				public setScaleX(viewId: number, scaleX: number): void;
				public addToVerticalChain(viewId: number, topId: number, bottomId: number): void;
				public setGuidelineEnd(guidelineID: number, margin: number): void;
				public clone(): any;
				public constrainCircle(viewId: number, id: number, radius: number, angle: number): void;
				public constrainPercentWidth(viewId: number, percent: number): void;
				public parseColorAttributes(set: androidx.constraintlayout.widget.ConstraintSet.Constraint, attributes: string): void;
				public getHeight(viewId: number): number;
				public addStringAttributes(...attributeName: string[]): void;
				public constrainMaxHeight(viewId: number, height: number): void;
				public createHorizontalChainRtl(startId: number, startSide: number, endId: number, endSide: number, chainIds: number[], weights: number[], style: number): void;
				public setRotation(viewId: number, rotation: number): void;
				public addToHorizontalChain(viewId: number, leftId: number, rightId: number): void;
				public constrainMaxWidth(viewId: number, width: number): void;
				public addIntAttributes(...attributeName: string[]): void;
				public setMargin(viewId: number, anchor: number, value: number): void;
				public removeFromVerticalChain(viewId: number): void;
				public getVisibilityMode(viewId: number): number;
				public removeFromHorizontalChain(viewId: number): void;
				public setReferencedIds(id: number, ...referenced: number[]): void;
				public setFloatValue(viewId: number, attributeName: string, value: number): void;
				public addFloatAttributes(...attributeName: string[]): void;
				public createVerticalChain(topId: number, topSide: number, bottomId: number, bottomSide: number, chainIds: number[], weights: number[], style: number): void;
				public constrainDefaultHeight(viewId: number, height: number): void;
				public setDimensionRatio(viewId: number, ratio: string): void;
				public centerHorizontallyRtl(viewId: number, toView: number): void;
				public constrainHeight(viewId: number, height: number): void;
				public setHorizontalChainStyle(viewId: number, chainStyle: number): void;
				public setGuidelinePercent(guidelineID: number, ratio: number): void;
				public applyTo(constraintLayout: androidx.constraintlayout.widget.ConstraintLayout): void;
				public parseStringAttributes(set: androidx.constraintlayout.widget.ConstraintSet.Constraint, attributes: string): void;
				public setEditorAbsoluteY(viewId: number, position: number): void;
				public applyCustomAttributes(constraintLayout: androidx.constraintlayout.widget.ConstraintLayout): void;
				public setTranslation(viewId: number, translationX: number, translationY: number): void;
				public applyToLayoutParams(id: number, layoutParams: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams): void;
				public setForceId(forceId: boolean): void;
				public connect(startID: number, startSide: number, endID: number, endSide: number, margin: number): void;
				public setTranslationX(viewId: number, translationX: number): void;
				public setVerticalBias(viewId: number, bias: number): void;
				public getVisibility(viewId: number): number;
				public getParameters(mId: number): androidx.constraintlayout.widget.ConstraintSet.Constraint;
				public create(guidelineID: number, orientation: number): void;
				public setBarrierType(id: number, type: number): void;
				public readFallback(set: androidx.constraintlayout.widget.ConstraintSet): void;
				public setIntValue(viewId: number, attributeName: string, value: number): void;
				public parseFloatAttributes(set: androidx.constraintlayout.widget.ConstraintSet.Constraint, attributes: string): void;
				public constrainedWidth(viewId: number, constrained: boolean): void;
				public setTransformPivot(viewId: number, transformPivotX: number, transformPivotY: number): void;
				public setRotationX(viewId: number, rotationX: number): void;
				public constrainPercentHeight(viewId: number, percent: number): void;
			}
			export module ConstraintSet {
				export class Constraint extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintSet.Constraint>;
					public propertySet: androidx.constraintlayout.widget.ConstraintSet.PropertySet;
					public motion: androidx.constraintlayout.widget.ConstraintSet.Motion;
					public layout: androidx.constraintlayout.widget.ConstraintSet.Layout;
					public transform: androidx.constraintlayout.widget.ConstraintSet.Transform;
					public mCustomConstraints: java.util.HashMap<string,androidx.constraintlayout.widget.ConstraintAttribute>;
					public clone(): any;
					public constructor();
					public applyTo(param: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams): void;
					public clone(): androidx.constraintlayout.widget.ConstraintSet.Constraint;
				}
				export class Layout extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintSet.Layout>;
					public mIsGuideline: boolean;
					public mApply: boolean;
					public mWidth: number;
					public mHeight: number;
					public static UNSET: number;
					public guideBegin: number;
					public guideEnd: number;
					public guidePercent: number;
					public leftToLeft: number;
					public leftToRight: number;
					public rightToLeft: number;
					public rightToRight: number;
					public topToTop: number;
					public topToBottom: number;
					public bottomToTop: number;
					public bottomToBottom: number;
					public baselineToBaseline: number;
					public startToEnd: number;
					public startToStart: number;
					public endToStart: number;
					public endToEnd: number;
					public horizontalBias: number;
					public verticalBias: number;
					public dimensionRatio: string;
					public circleConstraint: number;
					public circleRadius: number;
					public circleAngle: number;
					public editorAbsoluteX: number;
					public editorAbsoluteY: number;
					public orientation: number;
					public leftMargin: number;
					public rightMargin: number;
					public topMargin: number;
					public bottomMargin: number;
					public endMargin: number;
					public startMargin: number;
					public goneLeftMargin: number;
					public goneTopMargin: number;
					public goneRightMargin: number;
					public goneBottomMargin: number;
					public goneEndMargin: number;
					public goneStartMargin: number;
					public verticalWeight: number;
					public horizontalWeight: number;
					public horizontalChainStyle: number;
					public verticalChainStyle: number;
					public widthDefault: number;
					public heightDefault: number;
					public widthMax: number;
					public heightMax: number;
					public widthMin: number;
					public heightMin: number;
					public widthPercent: number;
					public heightPercent: number;
					public mBarrierDirection: number;
					public mBarrierMargin: number;
					public mHelperType: number;
					public mReferenceIds: number[];
					public mReferenceIdString: string;
					public mConstraintTag: string;
					public constrainedWidth: boolean;
					public constrainedHeight: boolean;
					public mBarrierAllowsGoneWidgets: boolean;
					public copyFrom(src: androidx.constraintlayout.widget.ConstraintSet.Layout): void;
					public constructor();
					public dump(scene: androidx.constraintlayout.motion.widget.MotionScene, stringBuilder: java.lang.StringBuilder): void;
				}
				export class Motion extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintSet.Motion>;
					public mApply: boolean;
					public mAnimateRelativeTo: number;
					public mTransitionEasing: string;
					public mPathMotionArc: number;
					public mDrawPath: number;
					public mMotionStagger: number;
					public mPathRotate: number;
					public constructor();
					public copyFrom(src: androidx.constraintlayout.widget.ConstraintSet.Motion): void;
				}
				export class PropertySet extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintSet.PropertySet>;
					public mApply: boolean;
					public visibility: number;
					public mVisibilityMode: number;
					public alpha: number;
					public mProgress: number;
					public constructor();
					public copyFrom(src: androidx.constraintlayout.widget.ConstraintSet.PropertySet): void;
				}
				export class Transform extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintSet.Transform>;
					public mApply: boolean;
					public rotation: number;
					public rotationX: number;
					public rotationY: number;
					public scaleX: number;
					public scaleY: number;
					public transformPivotX: number;
					public transformPivotY: number;
					public translationX: number;
					public translationY: number;
					public translationZ: number;
					public applyElevation: boolean;
					public elevation: number;
					public constructor();
					public copyFrom(src: androidx.constraintlayout.widget.ConstraintSet.Transform): void;
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class Constraints extends android.view.ViewGroup {
				public static class: java.lang.Class<androidx.constraintlayout.widget.Constraints>;
				public static TAG: string;
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
				public generateLayoutParams(attrs: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
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
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public addView(child: android.view.View): void;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public generateLayoutParams(attrs: android.util.AttributeSet): androidx.constraintlayout.widget.Constraints.LayoutParams;
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
				public getConstraintSet(): androidx.constraintlayout.widget.ConstraintSet;
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
				public generateLayoutParams(p: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
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
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public generateDefaultLayoutParams(): androidx.constraintlayout.widget.Constraints.LayoutParams;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
			export module Constraints {
				export class LayoutParams extends androidx.constraintlayout.widget.ConstraintLayout.LayoutParams {
					public static class: java.lang.Class<androidx.constraintlayout.widget.Constraints.LayoutParams>;
					public alpha: number;
					public applyElevation: boolean;
					public elevation: number;
					public rotation: number;
					public rotationX: number;
					public rotationY: number;
					public scaleX: number;
					public scaleY: number;
					public transformPivotX: number;
					public transformPivotY: number;
					public translationX: number;
					public translationY: number;
					public translationZ: number;
					public constructor(source: androidx.constraintlayout.widget.ConstraintLayout.LayoutParams);
					public constructor(source: android.view.ViewGroup.MarginLayoutParams);
					public constructor(c: android.content.Context, attrs: android.util.AttributeSet);
					public constructor(source: androidx.constraintlayout.widget.Constraints.LayoutParams);
					public constructor(source: android.view.ViewGroup.LayoutParams);
					public constructor(width: number, height: number);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export abstract class ConstraintsChangedListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.widget.ConstraintsChangedListener>;
				public preLayoutChange(stateId: number, constraintId: number): void;
				public postLayoutChange(stateId: number, constraintId: number): void;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class Group extends androidx.constraintlayout.widget.ConstraintHelper {
				public static class: java.lang.Class<androidx.constraintlayout.widget.Group>;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public updatePostLayout(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public sendAccessibilityEvent(eventType: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public setElevation(elevation: number): void;
				public constructor(context: android.content.Context);
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public setVisibility(visibility: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public init(attrs: android.util.AttributeSet): void;
				public onAttachedToWindow(): void;
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class Guideline extends android.view.View {
				public static class: java.lang.Class<androidx.constraintlayout.widget.Guideline>;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public draw(canvas: android.graphics.Canvas): void;
				public setGuidelinePercent(ratio: number): void;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public setGuidelineBegin(margin: number): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public setGuidelineEnd(margin: number): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public constructor(context: android.content.Context);
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public setVisibility(visibility: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class Placeholder extends android.view.View {
				public static class: java.lang.Class<androidx.constraintlayout.widget.Placeholder>;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public setContentId(id: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public getContent(): android.view.View;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setEmptyVisibility(visibility: number): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public updatePostMeasure(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public onDraw(canvas: android.graphics.Canvas): void;
				public constructor(context: android.content.Context);
				public getEmptyVisibility(): number;
				public updatePreLayout(container: androidx.constraintlayout.widget.ConstraintLayout): void;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export class StateSet extends java.lang.Object {
				public static class: java.lang.Class<androidx.constraintlayout.widget.StateSet>;
				public static TAG: string;
				public convertToConstraintSet(currentConstrainSettId: number, stateId: number, width: number, height: number): number;
				public constructor(context: android.content.Context, parser: org.xmlpull.v1.XmlPullParser);
				public setOnConstraintsChanged(constraintsChangedListener: androidx.constraintlayout.widget.ConstraintsChangedListener): void;
				public stateGetConstraintID(id: number, width: number, height: number): number;
				public needsToChange(id: number, width: number, height: number): boolean;
				public updateConstraints(currentid: number, id: number, width: number, height: number): number;
			}
			export module StateSet {
				export class State extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.StateSet.State>;
					public constructor(context: android.content.Context, parser: org.xmlpull.v1.XmlPullParser);
					public findMatch(width: number, height: number): number;
				}
				export class Variant extends java.lang.Object {
					public static class: java.lang.Class<androidx.constraintlayout.widget.StateSet.Variant>;
					public constructor(context: android.content.Context, parser: org.xmlpull.v1.XmlPullParser);
				}
			}
		}
	}
}

declare module androidx {
	export module constraintlayout {
		export module widget {
			export abstract class VirtualLayout extends androidx.constraintlayout.widget.ConstraintHelper {
				public static class: java.lang.Class<androidx.constraintlayout.widget.VirtualLayout>;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public setElevation(elevation: number): void;
				public constructor(context: android.content.Context);
				public onMeasure(layout: androidx.constraintlayout.solver.widgets.VirtualLayout, widthMeasureSpec: number, heightMeasureSpec: number): void;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public setVisibility(visibility: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public init(attrs: android.util.AttributeSet): void;
				public onAttachedToWindow(): void;
			}
		}
	}
}

//Generics information:

