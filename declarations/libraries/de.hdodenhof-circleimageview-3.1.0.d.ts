declare module de {
	export module hdodenhof {
		export module circleimageview {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<de.hdodenhof.circleimageview.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
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

declare module de {
	export module hdodenhof {
		export module circleimageview {
			export class CircleImageView extends android.widget.ImageView {
				public static class: java.lang.Class<de.hdodenhof.circleimageview.CircleImageView>;
				public setColorFilter(color: number): void;
				public setColorFilter(color: number, mode: android.graphics.PorterDuff.Mode): void;
				public setColorFilter(cf: android.graphics.ColorFilter): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setCircleBackgroundColorResource(circleBackgroundRes: number): void;
				public setDisableCircularTransformation(disableCircularTransformation: boolean): void;
				public setImageBitmap(bm: android.graphics.Bitmap): void;
				public isBorderOverlay(): boolean;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public setScaleType(scaleType: android.widget.ImageView.ScaleType): void;
				public onDraw(canvas: android.graphics.Canvas): void;
				public constructor(context: android.content.Context);
				public getCircleBackgroundColor(): number;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public setImageResource(resId: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public getBorderWidth(): number;
				public setImageURI(uri: android.net.Uri): void;
				public setImageDrawable(drawable: android.graphics.drawable.Drawable): void;
				public onTouchEvent(event: android.view.MotionEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public setCircleBackgroundColor(circleBackgroundColor: number): void;
				public getColorFilter(): android.graphics.ColorFilter;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public setPaddingRelative(start: number, top: number, end: number, bottom: number): void;
				public invalidateDrawable(dr: android.graphics.drawable.Drawable): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyle: number);
				public setPadding(left: number, top: number, right: number, bottom: number): void;
				public getBorderColor(): number;
				public setAdjustViewBounds(adjustViewBounds: boolean): void;
				public setBorderOverlay(borderOverlay: boolean): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public getScaleType(): android.widget.ImageView.ScaleType;
				public setBorderColor(borderColor: number): void;
				public isDisableCircularTransformation(): boolean;
				public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
				public setBorderWidth(borderWidth: number): void;
			}
			export module CircleImageView {
				export class OutlineProvider extends android.view.ViewOutlineProvider {
					public static class: java.lang.Class<de.hdodenhof.circleimageview.CircleImageView.OutlineProvider>;
					public getOutline(param0: android.view.View, param1: any): void;
					public getOutline(view: android.view.View, outline: any): void;
				}
			}
		}
	}
}

//Generics information:

