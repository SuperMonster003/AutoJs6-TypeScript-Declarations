declare module androidx {
	export module appcompat {
		export module content {
			export module res {
				export class AppCompatResources extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.content.res.AppCompatResources>;
					public static getColorStateList(context: android.content.Context, resId: number): android.content.res.ColorStateList;
					public static getDrawable(context: android.content.Context, resId: number): android.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module graphics {
			export module drawable {
				export class AnimatedStateListDrawableCompat extends androidx.appcompat.graphics.drawable.StateListDrawable implements androidx.core.graphics.drawable.TintAwareDrawable {
					public static class: java.lang.Class<androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat>;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public addTransition(fromId: number, toId: number, transition: android.graphics.drawable.Drawable, reversible: boolean): void;
					public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public isStateful(): boolean;
					public addState(stateSet: number[], drawable: android.graphics.drawable.Drawable): void;
					public setTint(tintColor: number): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public static createFromXmlInner(r: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet): android.graphics.drawable.Drawable;
					public constructor();
					public addState(stateSet: number[], drawable: android.graphics.drawable.Drawable, id: number): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public static create(context: android.content.Context, resId: number, theme: android.content.res.Resources.Theme): androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat;
					public onStateChange(stateSet: number[]): boolean;
					public setTint(param0: number): void;
					public inflate(r: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): void;
					public inflate(context: android.content.Context, r: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): void;
					public setTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
					public inflate(context: android.content.Context, resources: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): void;
					public jumpToCurrentState(): void;
					public invalidateDrawable(who: android.graphics.drawable.Drawable): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public static createFromXmlInner(r: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					public setVisible(visible: boolean, restart: boolean): boolean;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public setTintList(tint: android.content.res.ColorStateList): void;
					public mutate(): android.graphics.drawable.Drawable;
					public setTintList(param0: android.content.res.ColorStateList): void;
					public inflate(r: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet): void;
					public static createFromXmlInner(context: android.content.Context, resources: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat;
				}
				export module AnimatedStateListDrawableCompat {
					export class AnimatableTransition extends androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.Transition {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.AnimatableTransition>;
						public start(): void;
						public stop(): void;
					}
					export class AnimatedStateListState extends androidx.appcompat.graphics.drawable.StateListDrawable.StateListState {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.AnimatedStateListState>;
						public newDrawable(): android.graphics.drawable.Drawable;
						public newDrawable(res: android.content.res.Resources, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
						public newDrawable(res: android.content.res.Resources): android.graphics.drawable.Drawable;
					}
					export class AnimatedVectorDrawableTransition extends androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.Transition {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.AnimatedVectorDrawableTransition>;
						public start(): void;
						public stop(): void;
					}
					export class AnimationDrawableTransition extends androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.Transition {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.AnimationDrawableTransition>;
						public start(): void;
						public reverse(): void;
						public canReverse(): boolean;
						public stop(): void;
					}
					export class FrameInterpolator extends java.lang.Object implements android.animation.TimeInterpolator {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.FrameInterpolator>;
						public getInterpolation(input: number): number;
						public getInterpolation(param0: number): number;
					}
					export abstract class Transition extends java.lang.Object {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat.Transition>;
						public start(): void;
						public reverse(): void;
						public canReverse(): boolean;
						public stop(): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module graphics {
			export module drawable {
				export class DrawableContainer extends android.graphics.drawable.Drawable implements android.graphics.drawable.Drawable.Callback {
					public static class: java.lang.Class<androidx.appcompat.graphics.drawable.DrawableContainer>;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public getMinimumWidth(): number;
					public onLevelChange(level: number): boolean;
					public isStateful(): boolean;
					public setDither(dither: boolean): void;
					public getIntrinsicWidth(): number;
					public setColorFilter(param0: android.graphics.ColorFilter): void;
					public onLayoutDirectionChanged(layoutDirection: number): boolean;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public setEnterFadeDuration(ms: number): void;
					public onBoundsChange(bounds: android.graphics.Rect): void;
					public getChangingConfigurations(): number;
					public setAutoMirrored(mirrored: boolean): void;
					public draw(canvas: android.graphics.Canvas): void;
					public getPadding(padding: android.graphics.Rect): boolean;
					public applyTheme(theme: android.content.res.Resources.Theme): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public getMinimumHeight(): number;
					public onStateChange(state: number[]): boolean;
					public canApplyTheme(): boolean;
					public setHotspot(x: number, y: number): void;
					public draw(param0: android.graphics.Canvas): void;
					public getOpacity(): number;
					public getConstantState(): android.graphics.drawable.Drawable.ConstantState;
					public getHotspotBounds(outRect: android.graphics.Rect): void;
					public getAlpha(): number;
					public getCurrent(): android.graphics.drawable.Drawable;
					public setColorFilter(color: number, mode: android.graphics.PorterDuff.Mode): void;
					public setTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
					public setExitFadeDuration(ms: number): void;
					public jumpToCurrentState(): void;
					/** @deprecated */
					public setDither(dither: boolean): void;
					public getIntrinsicHeight(): number;
					public invalidateDrawable(who: android.graphics.drawable.Drawable): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public setVisible(visible: boolean, restart: boolean): boolean;
					public setAlpha(param0: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public setHotspotBounds(left: number, top: number, right: number, bottom: number): void;
					public setColorFilter(colorFilter: android.graphics.ColorFilter): void;
					public isAutoMirrored(): boolean;
					public setTintList(tint: android.content.res.ColorStateList): void;
					public getOutline(outline: any): void;
					public mutate(): android.graphics.drawable.Drawable;
					public setAlpha(alpha: number): void;
					public applyTheme(t: android.content.res.Resources.Theme): void;
				}
				export module DrawableContainer {
					export class Api21Impl extends java.lang.Object {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.DrawableContainer.Api21Impl>;
						public static getResources(theme: android.content.res.Resources.Theme): android.content.res.Resources;
						public static getOutline(drawable: android.graphics.drawable.Drawable, outline: any): void;
						public static canApplyTheme(constantState: android.graphics.drawable.Drawable.ConstantState): boolean;
					}
					export class BlockInvalidateCallback extends java.lang.Object implements android.graphics.drawable.Drawable.Callback {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.DrawableContainer.BlockInvalidateCallback>;
						public invalidateDrawable(who: android.graphics.drawable.Drawable): void;
						public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
						public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
						public unwrap(): android.graphics.drawable.Drawable.Callback;
						public wrap(callback: android.graphics.drawable.Drawable.Callback): androidx.appcompat.graphics.drawable.DrawableContainer.BlockInvalidateCallback;
					}
					export abstract class DrawableContainerState extends android.graphics.drawable.Drawable.ConstantState {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.DrawableContainer.DrawableContainerState>;
						public getConstantMinimumHeight(): number;
						public getChangingConfigurations(): number;
						public getChildCount(): number;
						public getChild(index: number): android.graphics.drawable.Drawable;
						public getExitFadeDuration(): number;
						public computeConstantSize(): void;
						public getConstantHeight(): number;
						public getOpacity(): number;
						public getConstantWidth(): number;
						public growArray(oldSize: number, newSize: number): void;
						public setVariablePadding(variable: boolean): void;
						public canConstantState(): boolean;
						public addChild(dr: android.graphics.drawable.Drawable): number;
						public isStateful(): boolean;
						public getConstantPadding(): android.graphics.Rect;
						public setConstantSize(constant: boolean): void;
						public isConstantSize(): boolean;
						public setEnterFadeDuration(duration: number): void;
						public canApplyTheme(): boolean;
						public setExitFadeDuration(duration: number): void;
						public getConstantMinimumWidth(): number;
						public getEnterFadeDuration(): number;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module graphics {
			export module drawable {
				export class DrawableWrapper extends android.graphics.drawable.Drawable implements android.graphics.drawable.Drawable.Callback {
					public static class: java.lang.Class<androidx.appcompat.graphics.drawable.DrawableWrapper>;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public getMinimumWidth(): number;
					public getState(): number[];
					public onLevelChange(level: number): boolean;
					public isStateful(): boolean;
					public setDither(dither: boolean): void;
					public getIntrinsicWidth(): number;
					public setColorFilter(param0: android.graphics.ColorFilter): void;
					public setTint(tintColor: number): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onBoundsChange(bounds: android.graphics.Rect): void;
					public getChangingConfigurations(): number;
					public setAutoMirrored(mirrored: boolean): void;
					public constructor();
					public draw(canvas: android.graphics.Canvas): void;
					public getPadding(padding: android.graphics.Rect): boolean;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public getMinimumHeight(): number;
					public setChangingConfigurations(configs: number): void;
					public setHotspot(x: number, y: number): void;
					public setState(stateSet: number[]): boolean;
					public draw(param0: android.graphics.Canvas): void;
					public getOpacity(): number;
					public getCurrent(): android.graphics.drawable.Drawable;
					public getTransparentRegion(): android.graphics.Region;
					public constructor(drawable: android.graphics.drawable.Drawable);
					public setColorFilter(color: number, mode: android.graphics.PorterDuff.Mode): void;
					public setTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
					public setFilterBitmap(filter: boolean): void;
					public jumpToCurrentState(): void;
					public setTint(tint: number): void;
					/** @deprecated */
					public setDither(dither: boolean): void;
					public getIntrinsicHeight(): number;
					public invalidateDrawable(who: android.graphics.drawable.Drawable): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public setWrappedDrawable(drawable: android.graphics.drawable.Drawable): void;
					public setVisible(visible: boolean, restart: boolean): boolean;
					public setAlpha(param0: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public getWrappedDrawable(): android.graphics.drawable.Drawable;
					public setHotspotBounds(left: number, top: number, right: number, bottom: number): void;
					public isAutoMirrored(): boolean;
					public setTintList(tint: android.content.res.ColorStateList): void;
					public setColorFilter(cf: android.graphics.ColorFilter): void;
					public setAlpha(alpha: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module graphics {
			export module drawable {
				export class StateListDrawable extends androidx.appcompat.graphics.drawable.DrawableContainer {
					public static class: java.lang.Class<androidx.appcompat.graphics.drawable.StateListDrawable>;
					public inflate(context: android.content.Context, r: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): void;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public isStateful(): boolean;
					public addState(stateSet: number[], drawable: android.graphics.drawable.Drawable): void;
					public invalidateDrawable(who: android.graphics.drawable.Drawable): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public applyTheme(theme: android.content.res.Resources.Theme): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public mutate(): android.graphics.drawable.Drawable;
					public onStateChange(state: number[]): boolean;
					public onStateChange(stateSet: number[]): boolean;
					public inflate(r: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet): void;
					public inflate(r: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): void;
				}
				export module StateListDrawable {
					export class StateListState extends androidx.appcompat.graphics.drawable.DrawableContainer.DrawableContainerState {
						public static class: java.lang.Class<androidx.appcompat.graphics.drawable.StateListDrawable.StateListState>;
						public newDrawable(): android.graphics.drawable.Drawable;
						public newDrawable(res: android.content.res.Resources, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
						public newDrawable(res: android.content.res.Resources): android.graphics.drawable.Drawable;
						public growArray(oldSize: number, newSize: number): void;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module resources {
			export class Compatibility extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.resources.Compatibility>;
			}
			export module Compatibility {
				export class Api15Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.resources.Compatibility.Api15Impl>;
					public static getValueForDensity(resources: android.content.res.Resources, id: number, density: number, outValue: android.util.TypedValue, resolveRefs: boolean): void;
				}
				export class Api18Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.resources.Compatibility.Api18Impl>;
					public static setAutoCancel(objectAnimator: android.animation.ObjectAnimator, cancel: boolean): void;
				}
				export class Api21Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.resources.Compatibility.Api21Impl>;
					public static createFromXmlInner(r: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					public static inflate(drawable: android.graphics.drawable.Drawable, r: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): void;
					public static getChangingConfigurations(typedArray: android.content.res.TypedArray): number;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class DrawableUtils extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.DrawableUtils>;
				public static INSETS_NONE: android.graphics.Rect;
				public static getOpticalBounds(drawable: android.graphics.drawable.Drawable): android.graphics.Rect;
				public static canSafelyMutateDrawable(drawable: android.graphics.drawable.Drawable): boolean;
				public static parseTintMode(value: number, defaultMode: android.graphics.PorterDuff.Mode): android.graphics.PorterDuff.Mode;
			}
			export module DrawableUtils {
				export class Api18Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.DrawableUtils.Api18Impl>;
				}
				export class Api29Impl extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.DrawableUtils.Api29Impl>;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ResourceManagerInternal extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.ResourceManagerInternal>;
				public getDrawable(context: android.content.Context, resId: number): android.graphics.drawable.Drawable;
				public setHooks(hooks: androidx.appcompat.widget.ResourceManagerInternal.ResourceManagerHooks): void;
				public onConfigurationChanged(context: android.content.Context): void;
				public static get(): androidx.appcompat.widget.ResourceManagerInternal;
				public static getPorterDuffColorFilter(color: number, mode: android.graphics.PorterDuff.Mode): android.graphics.PorterDuffColorFilter;
				public constructor();
			}
			export module ResourceManagerInternal {
				export class AsldcInflateDelegate extends java.lang.Object implements androidx.appcompat.widget.ResourceManagerInternal.InflateDelegate {
					public static class: java.lang.Class<androidx.appcompat.widget.ResourceManagerInternal.AsldcInflateDelegate>;
					public createFromXmlInner(context: android.content.Context, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					public createFromXmlInner(param0: android.content.Context, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
				}
				export class AvdcInflateDelegate extends java.lang.Object implements androidx.appcompat.widget.ResourceManagerInternal.InflateDelegate {
					public static class: java.lang.Class<androidx.appcompat.widget.ResourceManagerInternal.AvdcInflateDelegate>;
					public createFromXmlInner(context: android.content.Context, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					public createFromXmlInner(param0: android.content.Context, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
				}
				export class ColorFilterLruCache extends androidx.collection.LruCache<java.lang.Integer,android.graphics.PorterDuffColorFilter> {
					public static class: java.lang.Class<androidx.appcompat.widget.ResourceManagerInternal.ColorFilterLruCache>;
					public constructor(param0: number);
					public constructor(maxSize: number);
				}
				export class DrawableDelegate extends java.lang.Object implements androidx.appcompat.widget.ResourceManagerInternal.InflateDelegate {
					public static class: java.lang.Class<androidx.appcompat.widget.ResourceManagerInternal.DrawableDelegate>;
					public createFromXmlInner(context: android.content.Context, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					public createFromXmlInner(param0: android.content.Context, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
				}
				export class InflateDelegate extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ResourceManagerInternal.InflateDelegate>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ResourceManagerInternal$InflateDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createFromXmlInner(param0: android.content.Context, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					});
					public constructor();
					public createFromXmlInner(param0: android.content.Context, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
				}
				export class ResourceManagerHooks extends java.lang.Object {
					public static class: java.lang.Class<androidx.appcompat.widget.ResourceManagerInternal.ResourceManagerHooks>;
					/**
					 * Constructs a new instance of the androidx.appcompat.widget.ResourceManagerInternal$ResourceManagerHooks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createDrawableFor(param0: androidx.appcompat.widget.ResourceManagerInternal, param1: android.content.Context, param2: number): android.graphics.drawable.Drawable;
						tintDrawable(param0: android.content.Context, param1: number, param2: android.graphics.drawable.Drawable): boolean;
						getTintListForDrawableRes(param0: android.content.Context, param1: number): android.content.res.ColorStateList;
						tintDrawableUsingColorFilter(param0: android.content.Context, param1: number, param2: android.graphics.drawable.Drawable): boolean;
						getTintModeForDrawableRes(param0: number): android.graphics.PorterDuff.Mode;
					});
					public constructor();
					public tintDrawable(param0: android.content.Context, param1: number, param2: android.graphics.drawable.Drawable): boolean;
					public getTintModeForDrawableRes(param0: number): android.graphics.PorterDuff.Mode;
					public createDrawableFor(param0: androidx.appcompat.widget.ResourceManagerInternal, param1: android.content.Context, param2: number): android.graphics.drawable.Drawable;
					public getTintListForDrawableRes(param0: android.content.Context, param1: number): android.content.res.ColorStateList;
					public tintDrawableUsingColorFilter(param0: android.content.Context, param1: number, param2: android.graphics.drawable.Drawable): boolean;
				}
				export class VdcInflateDelegate extends java.lang.Object implements androidx.appcompat.widget.ResourceManagerInternal.InflateDelegate {
					public static class: java.lang.Class<androidx.appcompat.widget.ResourceManagerInternal.VdcInflateDelegate>;
					public createFromXmlInner(context: android.content.Context, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					public createFromXmlInner(param0: android.content.Context, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class ResourcesWrapper extends android.content.res.Resources {
				public static class: java.lang.Class<androidx.appcompat.widget.ResourcesWrapper>;
				public getDrawableForDensity(id: number, density: number, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
				/** @deprecated */
				public updateConfiguration(config: android.content.res.Configuration, metrics: android.util.DisplayMetrics): void;
				public getLayout(id: number): android.content.res.XmlResourceParser;
				public getValueForDensity(id: number, density: number, outValue: android.util.TypedValue, resolveRefs: boolean): void;
				public getValue(name: string, outValue: android.util.TypedValue, resolveRefs: boolean): void;
				public getDrawableForDensity(id: number, density: number): android.graphics.drawable.Drawable;
				public getDimension(id: number): number;
				public getQuantityString(id: number, quantity: number, ...formatArgs: any[]): string;
				public getString(id: number, ...formatArgs: any[]): string;
				public getBoolean(id: number): boolean;
				public getQuantityString(id: number, quantity: number): string;
				public parseBundleExtras(parser: android.content.res.XmlResourceParser, outBundle: android.os.Bundle): void;
				public getString(id: number): string;
				public getColorStateList(id: number): android.content.res.ColorStateList;
				public getQuantityText(id: number, quantity: number): string;
				/** @deprecated */
				public getDrawable(id: number): android.graphics.drawable.Drawable;
				public openRawResource(id: number): java.io.InputStream;
				public constructor(resources: android.content.res.Resources);
				/** @deprecated */
				public getColor(id: number): number;
				public getFraction(id: number, base: number, pbase: number): number;
				public getColor(id: number, theme: android.content.res.Resources.Theme): number;
				public getText(id: number): string;
				public getXml(id: number): android.content.res.XmlResourceParser;
				public getResourceName(resid: number): string;
				public getTextArray(id: number): string[];
				public updateConfiguration(config: android.content.res.Configuration, metrics: android.util.DisplayMetrics): void;
				public getDisplayMetrics(): android.util.DisplayMetrics;
				public getColor(id: number): number;
				public getResourceTypeName(resid: number): string;
				public getValue(id: number, outValue: android.util.TypedValue, resolveRefs: boolean): void;
				public getMovie(id: number): android.graphics.Movie;
				public getIdentifier(name: string, defType: string, defPackage: string): number;
				/** @deprecated */
				public constructor(assets: android.content.res.AssetManager, metrics: android.util.DisplayMetrics, config: android.content.res.Configuration);
				public getConfiguration(): android.content.res.Configuration;
				public getStringArray(id: number): string[];
				public getDrawable(id: number, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
				public obtainAttributes(set: android.util.AttributeSet, attrs: number[]): android.content.res.TypedArray;
				public openRawResourceFd(id: number): android.content.res.AssetFileDescriptor;
				public getResourceEntryName(resid: number): string;
				/** @deprecated */
				public getColorStateList(id: number): android.content.res.ColorStateList;
				public parseBundleExtra(tagName: string, attrs: android.util.AttributeSet, outBundle: android.os.Bundle): void;
				public getDimensionPixelOffset(id: number): number;
				public getColorStateList(id: number, theme: android.content.res.Resources.Theme): android.content.res.ColorStateList;
				public getDrawable(id: number): android.graphics.drawable.Drawable;
				public getAnimation(id: number): android.content.res.XmlResourceParser;
				public getInteger(id: number): number;
				public openRawResource(id: number, value: android.util.TypedValue): java.io.InputStream;
				public getDimensionPixelSize(id: number): number;
				public getText(id: number, def: string): string;
				public getResourcePackageName(resid: number): string;
				public getIntArray(id: number): number[];
				public obtainTypedArray(id: number): android.content.res.TypedArray;
				/** @deprecated */
				public getDrawableForDensity(id: number, density: number): android.graphics.drawable.Drawable;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TintContextWrapper extends android.content.ContextWrapper {
				public static class: java.lang.Class<androidx.appcompat.widget.TintContextWrapper>;
				public getResources(): android.content.res.Resources;
				public getAssets(): android.content.res.AssetManager;
				public static wrap(context: android.content.Context): android.content.Context;
				public setTheme(resid: number): void;
				public getTheme(): android.content.res.Resources.Theme;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TintInfo extends java.lang.Object {
				public static class: java.lang.Class<androidx.appcompat.widget.TintInfo>;
				public mTintList: android.content.res.ColorStateList;
				public mTintMode: android.graphics.PorterDuff.Mode;
				public mHasTintMode: boolean;
				public mHasTintList: boolean;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class TintResources extends androidx.appcompat.widget.ResourcesWrapper {
				public static class: java.lang.Class<androidx.appcompat.widget.TintResources>;
				public getDrawable(id: number, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
				public constructor(context: android.content.Context, res: android.content.res.Resources);
				public constructor(resources: android.content.res.Resources);
				/** @deprecated */
				public constructor(assets: android.content.res.AssetManager, metrics: android.util.DisplayMetrics, config: android.content.res.Configuration);
				public getDrawable(id: number): android.graphics.drawable.Drawable;
			}
		}
	}
}

declare module androidx {
	export module appcompat {
		export module widget {
			export class VectorEnabledTintResources extends androidx.appcompat.widget.ResourcesWrapper {
				public static class: java.lang.Class<androidx.appcompat.widget.VectorEnabledTintResources>;
				public static MAX_SDK_WHERE_REQUIRED: number;
				public static shouldBeUsed(): boolean;
				public getDrawable(id: number, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
				public static setCompatVectorFromResourcesEnabled(enabled: boolean): void;
				public constructor(context: android.content.Context, res: android.content.res.Resources);
				public constructor(resources: android.content.res.Resources);
				public static isCompatVectorFromResourcesEnabled(): boolean;
				/** @deprecated */
				public constructor(assets: android.content.res.AssetManager, metrics: android.util.DisplayMetrics, config: android.content.res.Configuration);
				public getDrawable(id: number): android.graphics.drawable.Drawable;
			}
		}
	}
}

//Generics information:

