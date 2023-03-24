declare module androidx {
	export module vectordrawable {
		export module graphics {
			export module drawable {
				export class AndroidResources extends java.lang.Object {
					public static class: java.lang.Class<androidx.vectordrawable.graphics.drawable.AndroidResources>;
					public static STYLEABLE_ANIMATOR: number[];
					public static STYLEABLE_ANIMATOR_INTERPOLATOR: number;
					public static STYLEABLE_ANIMATOR_DURATION: number;
					public static STYLEABLE_ANIMATOR_START_OFFSET: number;
					public static STYLEABLE_ANIMATOR_REPEAT_COUNT: number;
					public static STYLEABLE_ANIMATOR_REPEAT_MODE: number;
					public static STYLEABLE_ANIMATOR_VALUE_FROM: number;
					public static STYLEABLE_ANIMATOR_VALUE_TO: number;
					public static STYLEABLE_ANIMATOR_VALUE_TYPE: number;
					public static STYLEABLE_ANIMATOR_SET: number[];
					public static STYLEABLE_ANIMATOR_SET_ORDERING: number;
					public static STYLEABLE_PROPERTY_VALUES_HOLDER: number[];
					public static STYLEABLE_PROPERTY_VALUES_HOLDER_VALUE_FROM: number;
					public static STYLEABLE_PROPERTY_VALUES_HOLDER_VALUE_TO: number;
					public static STYLEABLE_PROPERTY_VALUES_HOLDER_VALUE_TYPE: number;
					public static STYLEABLE_PROPERTY_VALUES_HOLDER_PROPERTY_NAME: number;
					public static STYLEABLE_KEYFRAME: number[];
					public static STYLEABLE_KEYFRAME_VALUE: number;
					public static STYLEABLE_KEYFRAME_INTERPOLATOR: number;
					public static STYLEABLE_KEYFRAME_VALUE_TYPE: number;
					public static STYLEABLE_KEYFRAME_FRACTION: number;
					public static STYLEABLE_PROPERTY_ANIMATOR: number[];
					public static STYLEABLE_PROPERTY_ANIMATOR_PROPERTY_NAME: number;
					public static STYLEABLE_PROPERTY_ANIMATOR_PATH_DATA: number;
					public static STYLEABLE_PROPERTY_ANIMATOR_PROPERTY_X_NAME: number;
					public static STYLEABLE_PROPERTY_ANIMATOR_PROPERTY_Y_NAME: number;
					public static STYLEABLE_PATH_INTERPOLATOR: number[];
					public static STYLEABLE_PATH_INTERPOLATOR_CONTROL_X_1: number;
					public static STYLEABLE_PATH_INTERPOLATOR_CONTROL_Y_1: number;
					public static STYLEABLE_PATH_INTERPOLATOR_CONTROL_X_2: number;
					public static STYLEABLE_PATH_INTERPOLATOR_CONTROL_Y_2: number;
					public static STYLEABLE_PATH_INTERPOLATOR_PATH_DATA: number;
					public static FAST_OUT_LINEAR_IN: number;
					public static FAST_OUT_SLOW_IN: number;
					public static LINEAR_OUT_SLOW_IN: number;
				}
			}
		}
	}
}

declare module androidx {
	export module vectordrawable {
		export module graphics {
			export module drawable {
				export abstract class VectorDrawableCommon extends android.graphics.drawable.Drawable implements androidx.core.graphics.drawable.TintAwareDrawable {
					public static class: java.lang.Class<androidx.vectordrawable.graphics.drawable.VectorDrawableCommon>;
					public getCurrent(): android.graphics.drawable.Drawable;
					public getMinimumWidth(): number;
					public getTransparentRegion(): android.graphics.Region;
					public onLevelChange(level: number): boolean;
					public getState(): number[];
					public setColorFilter(color: number, mode: android.graphics.PorterDuff.Mode): void;
					public setTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
					public setFilterBitmap(filter: boolean): void;
					public jumpToCurrentState(): void;
					public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public setColorFilter(param0: android.graphics.ColorFilter): void;
					public setTint(tintColor: number): void;
					public setHotspotBounds(left: number, top: number, right: number, bottom: number): void;
					public onBoundsChange(bounds: android.graphics.Rect): void;
					public clearColorFilter(): void;
					public getPadding(padding: android.graphics.Rect): boolean;
					public setTintList(tint: android.content.res.ColorStateList): void;
					public getMinimumHeight(): number;
					public applyTheme(t: android.content.res.Resources.Theme): void;
					public setChangingConfigurations(configs: number): void;
					public setHotspot(x: number, y: number): void;
					public setTintList(param0: android.content.res.ColorStateList): void;
					public setState(stateSet: number[]): boolean;
					public setTint(param0: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module vectordrawable {
		export module graphics {
			export module drawable {
				export class VectorDrawableCompat extends androidx.vectordrawable.graphics.drawable.VectorDrawableCommon {
					public static class: java.lang.Class<androidx.vectordrawable.graphics.drawable.VectorDrawableCompat>;
					public invalidateSelf(): void;
					public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public isStateful(): boolean;
					public getIntrinsicWidth(): number;
					public scheduleSelf(what: java.lang.Runnable, when: number): void;
					public setColorFilter(param0: android.graphics.ColorFilter): void;
					public setTint(tintColor: number): void;
					public static createFromXmlInner(r: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): androidx.vectordrawable.graphics.drawable.VectorDrawableCompat;
					public inflate(res: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet): void;
					public static create(res: android.content.res.Resources, resId: number, theme: android.content.res.Resources.Theme): androidx.vectordrawable.graphics.drawable.VectorDrawableCompat;
					public static createFromXmlInner(r: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet): android.graphics.drawable.Drawable;
					public onBoundsChange(bounds: android.graphics.Rect): void;
					public setAutoMirrored(mirrored: boolean): void;
					public inflate(res: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): void;
					public getChangingConfigurations(): number;
					public draw(canvas: android.graphics.Canvas): void;
					public onStateChange(state: number[]): boolean;
					public canApplyTheme(): boolean;
					public onStateChange(stateSet: number[]): boolean;
					public setTint(param0: number): void;
					public getConstantState(): android.graphics.drawable.Drawable.ConstantState;
					public draw(param0: android.graphics.Canvas): void;
					public getOpacity(): number;
					public inflate(r: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): void;
					public getAlpha(): number;
					public getColorFilter(): android.graphics.ColorFilter;
					public setColorFilter(color: number, mode: android.graphics.PorterDuff.Mode): void;
					public setTintMode(tintMode: android.graphics.PorterDuff.Mode): void;
					public setTint(tint: number): void;
					public getIntrinsicHeight(): number;
					public unscheduleSelf(what: java.lang.Runnable): void;
					public static createFromXmlInner(r: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					public setVisible(visible: boolean, restart: boolean): boolean;
					public setAlpha(param0: number): void;
					public setColorFilter(colorFilter: android.graphics.ColorFilter): void;
					public isAutoMirrored(): boolean;
					public setTintList(tint: android.content.res.ColorStateList): void;
					public mutate(): android.graphics.drawable.Drawable;
					public setAlpha(alpha: number): void;
					public setTintList(param0: android.content.res.ColorStateList): void;
					public inflate(r: android.content.res.Resources, parser: org.xmlpull.v1.XmlPullParser, attrs: android.util.AttributeSet): void;
					public getPixelSize(): number;
				}
				export module VectorDrawableCompat {
					export class VClipPath extends androidx.vectordrawable.graphics.drawable.VectorDrawableCompat.VPath {
						public static class: java.lang.Class<androidx.vectordrawable.graphics.drawable.VectorDrawableCompat.VClipPath>;
						public isClipPath(): boolean;
						public inflate(r: android.content.res.Resources, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme, parser: org.xmlpull.v1.XmlPullParser): void;
					}
					export class VFullPath extends androidx.vectordrawable.graphics.drawable.VectorDrawableCompat.VPath {
						public static class: java.lang.Class<androidx.vectordrawable.graphics.drawable.VectorDrawableCompat.VFullPath>;
						public isStateful(): boolean;
						public onStateChanged(stateSet: number[]): boolean;
						public applyTheme(t: android.content.res.Resources.Theme): void;
						public canApplyTheme(): boolean;
						public inflate(r: android.content.res.Resources, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme, parser: org.xmlpull.v1.XmlPullParser): void;
					}
					export class VGroup extends androidx.vectordrawable.graphics.drawable.VectorDrawableCompat.VObject {
						public static class: java.lang.Class<androidx.vectordrawable.graphics.drawable.VectorDrawableCompat.VGroup>;
						public getTranslateY(): number;
						public setTranslateX(translateX: number): void;
						public constructor();
						public inflate(res: android.content.res.Resources, attrs: android.util.AttributeSet, theme: android.content.res.Resources.Theme, parser: org.xmlpull.v1.XmlPullParser): void;
						public getScaleX(): number;
						public setTranslateY(translateY: number): void;
						public getLocalMatrix(): android.graphics.Matrix;
						public setPivotX(pivotX: number): void;
						public getGroupName(): string;
						public getPivotY(): number;
						public setPivotY(pivotY: number): void;
						public setScaleX(scaleX: number): void;
						public constructor(copy: androidx.vectordrawable.graphics.drawable.VectorDrawableCompat.VGroup, targetsMap: androidx.collection.ArrayMap<string,any>);
						public getTranslateX(): number;
						public isStateful(): boolean;
						public onStateChanged(stateSet: number[]): boolean;
						public getScaleY(): number;
						public getPivotX(): number;
						public getRotation(): number;
						public setScaleY(scaleY: number): void;
						public setRotation(rotation: number): void;
					}
					export abstract class VObject extends java.lang.Object {
						public static class: java.lang.Class<androidx.vectordrawable.graphics.drawable.VectorDrawableCompat.VObject>;
						public isStateful(): boolean;
						public onStateChanged(stateSet: number[]): boolean;
					}
					export abstract class VPath extends androidx.vectordrawable.graphics.drawable.VectorDrawableCompat.VObject {
						public static class: java.lang.Class<androidx.vectordrawable.graphics.drawable.VectorDrawableCompat.VPath>;
						public static FILL_TYPE_WINDING: number;
						public mNodes: androidx.core.graphics.PathParser.PathDataNode[];
						public getPathData(): androidx.core.graphics.PathParser.PathDataNode[];
						public constructor();
						public isClipPath(): boolean;
						public printVPath(level: number): void;
						public getPathName(): string;
						public applyTheme(t: android.content.res.Resources.Theme): void;
						public nodesToString(nodes: androidx.core.graphics.PathParser.PathDataNode[]): string;
						public constructor(copy: androidx.vectordrawable.graphics.drawable.VectorDrawableCompat.VPath);
						public canApplyTheme(): boolean;
						public setPathData(nodes: androidx.core.graphics.PathParser.PathDataNode[]): void;
						public toPath(path: android.graphics.Path): void;
					}
					export class VPathRenderer extends java.lang.Object {
						public static class: java.lang.Class<androidx.vectordrawable.graphics.drawable.VectorDrawableCompat.VPathRenderer>;
						public constructor();
						public isStateful(): boolean;
						public onStateChanged(stateSet: number[]): boolean;
						public setRootAlpha(alpha: number): void;
						public constructor(copy: androidx.vectordrawable.graphics.drawable.VectorDrawableCompat.VPathRenderer);
						public setAlpha(alpha: number): void;
						public getAlpha(): number;
						public draw(canvas: android.graphics.Canvas, w: number, h: number, filter: android.graphics.ColorFilter): void;
						public getRootAlpha(): number;
					}
					export class VectorDrawableCompatState extends android.graphics.drawable.Drawable.ConstantState {
						public static class: java.lang.Class<androidx.vectordrawable.graphics.drawable.VectorDrawableCompat.VectorDrawableCompatState>;
						public constructor();
						public getChangingConfigurations(): number;
						public hasTranslucentRoot(): boolean;
						public createCachedBitmapIfNeeded(width: number, height: number): void;
						public canReuseBitmap(width: number, height: number): boolean;
						public constructor(copy: androidx.vectordrawable.graphics.drawable.VectorDrawableCompat.VectorDrawableCompatState);
						public newDrawable(): android.graphics.drawable.Drawable;
						public newDrawable(res: android.content.res.Resources, theme: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
						public updateCacheStates(): void;
						public drawCachedBitmapWithRootAlpha(canvas: android.graphics.Canvas, filter: android.graphics.ColorFilter, originalBounds: android.graphics.Rect): void;
						public newDrawable(res: android.content.res.Resources): android.graphics.drawable.Drawable;
						public getPaint(filter: android.graphics.ColorFilter): android.graphics.Paint;
						public isStateful(): boolean;
						public onStateChanged(stateSet: number[]): boolean;
						public updateCachedBitmap(width: number, height: number): void;
						public canReuseCache(): boolean;
					}
					export class VectorDrawableDelegateState extends android.graphics.drawable.Drawable.ConstantState {
						public static class: java.lang.Class<androidx.vectordrawable.graphics.drawable.VectorDrawableCompat.VectorDrawableDelegateState>;
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

//Generics information:

