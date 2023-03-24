declare module com {
	export module makeramen {
		export module roundedimageview {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.makeramen.roundedimageview.BuildConfig>;
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
	export module makeramen {
		export module roundedimageview {
			export class Corner extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<com.makeramen.roundedimageview.Corner>;
				/**
				 * Constructs a new instance of the com.makeramen.roundedimageview.Corner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public static BOTTOM_LEFT: number;
				public static TOP_LEFT: number;
				public static BOTTOM_RIGHT: number;
				public static TOP_RIGHT: number;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module makeramen {
		export module roundedimageview {
			export class RoundedDrawable extends android.graphics.drawable.Drawable {
				public static class: java.lang.Class<com.makeramen.roundedimageview.RoundedDrawable>;
				public static TAG: string;
				public static DEFAULT_BORDER_COLOR: number;
				public static fromDrawable(drawable: android.graphics.drawable.Drawable): android.graphics.drawable.Drawable;
				public setFilterBitmap(filter: boolean): void;
				public setColorFilter(color: number, mode: android.graphics.PorterDuff.Mode): void;
				public setColorFilter(cf: android.graphics.ColorFilter): void;
				public getTileModeX(): android.graphics.Shader.TileMode;
				public draw(canvas: android.graphics.Canvas): void;
				public getColorFilter(): android.graphics.ColorFilter;
				public constructor(bitmap: android.graphics.Bitmap);
				public setCornerRadius(radius: number): com.makeramen.roundedimageview.RoundedDrawable;
				public getAlpha(): number;
				public onBoundsChange(bounds: android.graphics.Rect): void;
				public onStateChange(state: number[]): boolean;
				public constructor();
				public getIntrinsicWidth(): number;
				public getTileModeY(): android.graphics.Shader.TileMode;
				public static fromBitmap(bitmap: android.graphics.Bitmap): com.makeramen.roundedimageview.RoundedDrawable;
				public setDither(dither: boolean): void;
				public setBorderColor(colors: android.content.res.ColorStateList): com.makeramen.roundedimageview.RoundedDrawable;
				public setColorFilter(param0: android.graphics.ColorFilter): void;
				/** @deprecated */
				public setDither(dither: boolean): void;
				public setScaleType(scaleType: android.widget.ImageView.ScaleType): com.makeramen.roundedimageview.RoundedDrawable;
				public getCornerRadius(corner: number): number;
				public setCornerRadius(topLeft: number, topRight: number, bottomRight: number, bottomLeft: number): com.makeramen.roundedimageview.RoundedDrawable;
				public setAlpha(alpha: number): void;
				public draw(param0: android.graphics.Canvas): void;
				public getBorderColor(): number;
				public setOval(oval: boolean): com.makeramen.roundedimageview.RoundedDrawable;
				public toBitmap(): android.graphics.Bitmap;
				public static drawableToBitmap(drawable: android.graphics.drawable.Drawable): android.graphics.Bitmap;
				public isOval(): boolean;
				public setTileModeX(tileModeX: android.graphics.Shader.TileMode): com.makeramen.roundedimageview.RoundedDrawable;
				public setAlpha(param0: number): void;
				public setCornerRadius(corner: number, radius: number): com.makeramen.roundedimageview.RoundedDrawable;
				public getBorderColors(): android.content.res.ColorStateList;
				public setBorderWidth(width: number): com.makeramen.roundedimageview.RoundedDrawable;
				public getIntrinsicHeight(): number;
				public getBorderWidth(): number;
				public getScaleType(): android.widget.ImageView.ScaleType;
				public getCornerRadius(): number;
				public setTileModeY(tileModeY: android.graphics.Shader.TileMode): com.makeramen.roundedimageview.RoundedDrawable;
				public getSourceBitmap(): android.graphics.Bitmap;
				public setBorderColor(color: number): com.makeramen.roundedimageview.RoundedDrawable;
				public getOpacity(): number;
				public isStateful(): boolean;
			}
		}
	}
}

declare module com {
	export module makeramen {
		export module roundedimageview {
			export class RoundedImageView extends android.widget.ImageView {
				public static class: java.lang.Class<com.makeramen.roundedimageview.RoundedImageView>;
				public static TAG: string;
				public static DEFAULT_RADIUS: number;
				public static DEFAULT_BORDER_WIDTH: number;
				public static DEFAULT_TILE_MODE: android.graphics.Shader.TileMode;
				public setColorFilter(color: number): void;
				public setColorFilter(color: number, mode: android.graphics.PorterDuff.Mode): void;
				public setColorFilter(cf: android.graphics.ColorFilter): void;
				public getTileModeX(): android.graphics.Shader.TileMode;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public setCornerRadius(corner: number, radius: number): void;
				public setCornerRadiusDimen(resId: number): void;
				public setCornerRadius(radius: number): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setImageBitmap(bm: android.graphics.Bitmap): void;
				public setTileModeX(tileModeX: android.graphics.Shader.TileMode): void;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public setBackgroundResource(resId: number): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public setScaleType(scaleType: android.widget.ImageView.ScaleType): void;
				public constructor(context: android.content.Context);
				public setBorderWidth(width: number): void;
				public setBorderWidth(resId: number): void;
				public isOval(): boolean;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public setImageResource(resId: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public getBorderWidth(): number;
				public setImageURI(uri: android.net.Uri): void;
				public getCornerRadius(): number;
				public setOval(oval: boolean): void;
				public setImageDrawable(drawable: android.graphics.drawable.Drawable): void;
				public setBackgroundResource(resid: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public drawableStateChanged(): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public setBackgroundColor(color: number): void;
				public invalidateDrawable(dr: android.graphics.drawable.Drawable): void;
				/** @deprecated */
				public setBackgroundDrawable(background: android.graphics.drawable.Drawable): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public setCornerRadiusDimen(corner: number, resId: number): void;
				public getTileModeY(): android.graphics.Shader.TileMode;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public setCornerRadius(topLeft: number, topRight: number, bottomLeft: number, bottomRight: number): void;
				public setBorderColor(colors: android.content.res.ColorStateList): void;
				public getCornerRadius(corner: number): number;
				public setTileModeY(tileModeY: android.graphics.Shader.TileMode): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public setBorderColor(color: number): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public mutateBackground(mutate: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyle: number);
				public getBorderColor(): number;
				public setBackground(background: android.graphics.drawable.Drawable): void;
				public getBorderColors(): android.content.res.ColorStateList;
				public mutatesBackground(): boolean;
				public getMaxCornerRadius(): number;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public getScaleType(): android.widget.ImageView.ScaleType;
			}
		}
	}
}

declare module com {
	export module makeramen {
		export module roundedimageview {
			export class RoundedTransformationBuilder extends java.lang.Object {
				public static class: java.lang.Class<com.makeramen.roundedimageview.RoundedTransformationBuilder>;
				public cornerRadiusDp(corner: number, radius: number): com.makeramen.roundedimageview.RoundedTransformationBuilder;
				public oval(oval: boolean): com.makeramen.roundedimageview.RoundedTransformationBuilder;
				public scaleType(scaleType: android.widget.ImageView.ScaleType): com.makeramen.roundedimageview.RoundedTransformationBuilder;
				public cornerRadius(radius: number): com.makeramen.roundedimageview.RoundedTransformationBuilder;
				public cornerRadius(corner: number, radius: number): com.makeramen.roundedimageview.RoundedTransformationBuilder;
				public borderWidth(width: number): com.makeramen.roundedimageview.RoundedTransformationBuilder;
				public build(): com.squareup.picasso.Transformation;
				public borderColor(colors: android.content.res.ColorStateList): com.makeramen.roundedimageview.RoundedTransformationBuilder;
				public borderColor(color: number): com.makeramen.roundedimageview.RoundedTransformationBuilder;
				public borderWidthDp(width: number): com.makeramen.roundedimageview.RoundedTransformationBuilder;
				public cornerRadiusDp(radius: number): com.makeramen.roundedimageview.RoundedTransformationBuilder;
				public constructor();
			}
		}
	}
}

//Generics information:

