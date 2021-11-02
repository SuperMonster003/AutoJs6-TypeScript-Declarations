/// <reference path="../android.d.ts" />

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
			export class RoundedDrawable extends globalAndroid.graphics.drawable.Drawable {
				public static class: java.lang.Class<com.makeramen.roundedimageview.RoundedDrawable>;
				public static TAG: string;
				public static DEFAULT_BORDER_COLOR: number;
				public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
				public getScaleType(): globalAndroid.widget.ImageView.ScaleType;
				public getSourceBitmap(): globalAndroid.graphics.Bitmap;
				public getTileModeY(): globalAndroid.graphics.Shader.TileMode;
				public toBitmap(): globalAndroid.graphics.Bitmap;
				public draw(param0: globalAndroid.graphics.Canvas): void;
				public getAlpha(): number;
				public setTileModeY(param0: globalAndroid.graphics.Shader.TileMode): com.makeramen.roundedimageview.RoundedDrawable;
				public getBorderColors(): globalAndroid.content.res.ColorStateList;
				public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
				public setBorderColor(param0: number): com.makeramen.roundedimageview.RoundedDrawable;
				public constructor();
				public static fromDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
				public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
				public getIntrinsicWidth(): number;
				public onStateChange(param0: number[]): boolean;
				public static drawableToBitmap(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.Bitmap;
				public static fromBitmap(param0: globalAndroid.graphics.Bitmap): com.makeramen.roundedimageview.RoundedDrawable;
				public setBorderColor(param0: globalAndroid.content.res.ColorStateList): com.makeramen.roundedimageview.RoundedDrawable;
				/** @deprecated */
				public setDither(param0: boolean): void;
				public getTileModeX(): globalAndroid.graphics.Shader.TileMode;
				public getBorderColor(): number;
				public setCornerRadius(param0: number): com.makeramen.roundedimageview.RoundedDrawable;
				public setBorderWidth(param0: number): com.makeramen.roundedimageview.RoundedDrawable;
				public setDither(param0: boolean): void;
				public getCornerRadius(param0: number): number;
				public isOval(): boolean;
				public setAlpha(param0: number): void;
				public getColorFilter(): globalAndroid.graphics.ColorFilter;
				public setCornerRadius(param0: number, param1: number, param2: number, param3: number): com.makeramen.roundedimageview.RoundedDrawable;
				public setCornerRadius(param0: number, param1: number): com.makeramen.roundedimageview.RoundedDrawable;
				public getIntrinsicHeight(): number;
				public getBorderWidth(): number;
				public setOval(param0: boolean): com.makeramen.roundedimageview.RoundedDrawable;
				public getCornerRadius(): number;
				public setTileModeX(param0: globalAndroid.graphics.Shader.TileMode): com.makeramen.roundedimageview.RoundedDrawable;
				public constructor(param0: globalAndroid.graphics.Bitmap);
				public setFilterBitmap(param0: boolean): void;
				public getOpacity(): number;
				public setScaleType(param0: globalAndroid.widget.ImageView.ScaleType): com.makeramen.roundedimageview.RoundedDrawable;
				public isStateful(): boolean;
			}
		}
	}
}

declare module com {
	export module makeramen {
		export module roundedimageview {
			export class RoundedImageView extends globalAndroid.widget.ImageView {
				public static class: java.lang.Class<com.makeramen.roundedimageview.RoundedImageView>;
				public static TAG: string;
				public static DEFAULT_RADIUS: number;
				public static DEFAULT_BORDER_WIDTH: number;
				public static DEFAULT_TILE_MODE: globalAndroid.graphics.Shader.TileMode;
				public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
				public getScaleType(): globalAndroid.widget.ImageView.ScaleType;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public setImageURI(param0: globalAndroid.net.Uri): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public setTileModeX(param0: globalAndroid.graphics.Shader.TileMode): void;
				public sendAccessibilityEvent(param0: number): void;
				public setBorderColor(param0: globalAndroid.content.res.ColorStateList): void;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public setColorFilter(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public mutateBackground(param0: boolean): void;
				public isOval(): boolean;
				public setImageBitmap(param0: globalAndroid.graphics.Bitmap): void;
				public setTileModeY(param0: globalAndroid.graphics.Shader.TileMode): void;
				public setCornerRadius(param0: number, param1: number, param2: number, param3: number): void;
				public getBorderWidth(): number;
				public getCornerRadius(): number;
				public setCornerRadius(param0: number, param1: number): void;
				public setImageResource(param0: number): void;
				public setCornerRadius(param0: number): void;
				public setBorderColor(param0: number): void;
				public drawableStateChanged(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				/** @deprecated */
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setImageDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getTileModeY(): globalAndroid.graphics.Shader.TileMode;
				public setCornerRadiusDimen(param0: number): void;
				public getBorderColors(): globalAndroid.content.res.ColorStateList;
				public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
				public setScaleType(param0: globalAndroid.widget.ImageView.ScaleType): void;
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public setOval(param0: boolean): void;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getTileModeX(): globalAndroid.graphics.Shader.TileMode;
				public getBorderColor(): number;
				public setBackgroundColor(param0: number): void;
				public getCornerRadius(param0: number): number;
				public setCornerRadiusDimen(param0: number, param1: number): void;
				public mutatesBackground(): boolean;
				public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
				public getMaxCornerRadius(): number;
				public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public setBackgroundResource(param0: number): void;
				public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setBorderWidth(param0: number): void;
			}
		}
	}
}

declare module com {
	export module makeramen {
		export module roundedimageview {
			export class RoundedTransformationBuilder extends java.lang.Object {
				public static class: java.lang.Class<com.makeramen.roundedimageview.RoundedTransformationBuilder>;
				public scaleType(param0: globalAndroid.widget.ImageView.ScaleType): com.makeramen.roundedimageview.RoundedTransformationBuilder;
				public cornerRadiusDp(param0: number, param1: number): com.makeramen.roundedimageview.RoundedTransformationBuilder;
				public borderWidth(param0: number): com.makeramen.roundedimageview.RoundedTransformationBuilder;
				public cornerRadius(param0: number, param1: number): com.makeramen.roundedimageview.RoundedTransformationBuilder;
				public cornerRadiusDp(param0: number): com.makeramen.roundedimageview.RoundedTransformationBuilder;
				public borderWidthDp(param0: number): com.makeramen.roundedimageview.RoundedTransformationBuilder;
				public oval(param0: boolean): com.makeramen.roundedimageview.RoundedTransformationBuilder;
				public borderColor(param0: number): com.makeramen.roundedimageview.RoundedTransformationBuilder;
				public cornerRadius(param0: number): com.makeramen.roundedimageview.RoundedTransformationBuilder;
				public build(): com.squareup.picasso.Transformation;
				public borderColor(param0: globalAndroid.content.res.ColorStateList): com.makeramen.roundedimageview.RoundedTransformationBuilder;
				public constructor();
			}
		}
	}
}

declare module com {
	export module makeramen {
		export module roundedimageview {
			export class R extends java.lang.Object {
				public static class: java.lang.Class<com.makeramen.roundedimageview.R>;
			}
			export module R {
				export class attr extends java.lang.Object {
					public static class: java.lang.Class<com.makeramen.roundedimageview.R.attr>;
					public static riv_border_color: number;
					public static riv_border_width: number;
					public static riv_corner_radius: number;
					public static riv_corner_radius_bottom_left: number;
					public static riv_corner_radius_bottom_right: number;
					public static riv_corner_radius_top_left: number;
					public static riv_corner_radius_top_right: number;
					public static riv_mutate_background: number;
					public static riv_oval: number;
					public static riv_tile_mode: number;
					public static riv_tile_mode_x: number;
					public static riv_tile_mode_y: number;
				}
				export class id extends java.lang.Object {
					public static class: java.lang.Class<com.makeramen.roundedimageview.R.id>;
					public static clamp: number;
					public static mirror: number;
					public static repeat: number;
				}
				export class styleable extends java.lang.Object {
					public static class: java.lang.Class<com.makeramen.roundedimageview.R.styleable>;
					public static RoundedImageView: number[];
					public static RoundedImageView_android_scaleType: number;
					public static RoundedImageView_riv_border_color: number;
					public static RoundedImageView_riv_border_width: number;
					public static RoundedImageView_riv_corner_radius: number;
					public static RoundedImageView_riv_corner_radius_bottom_left: number;
					public static RoundedImageView_riv_corner_radius_bottom_right: number;
					public static RoundedImageView_riv_corner_radius_top_left: number;
					public static RoundedImageView_riv_corner_radius_top_right: number;
					public static RoundedImageView_riv_mutate_background: number;
					public static RoundedImageView_riv_oval: number;
					public static RoundedImageView_riv_tile_mode: number;
					public static RoundedImageView_riv_tile_mode_x: number;
					public static RoundedImageView_riv_tile_mode_y: number;
				}
			}
		}
	}
}