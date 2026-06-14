/// <reference path="../android.d.ts"/>
/// <reference path="../libraries.d.ts"/>

declare module com {
	export module yqritc {
		export module recyclerviewflexibledivider {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.yqritc.recyclerviewflexibledivider.BuildConfig>;
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
	export module yqritc {
		export module recyclerviewflexibledivider {
			export abstract class FlexibleDividerDecoration {
				public static class: java.lang.Class<com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration>;
				public mDividerType: com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.DividerType;
				public mVisibilityProvider: com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.VisibilityProvider;
				public mPaintProvider: com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.PaintProvider;
				public mColorProvider: com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.ColorProvider;
				public mDrawableProvider: com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.DrawableProvider;
				public mSizeProvider: com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.SizeProvider;
				public mShowLastDivider: boolean;
				public mPositionInsideItem: boolean;
				public constructor(builder: com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.Builder<any>);
				public setItemOffsets(param0: android.graphics.Rect, param1: number, param2: android.support.v7.widget.RecyclerView): void;
				public onDraw(c: android.graphics.Canvas, parent: android.support.v7.widget.RecyclerView, state: android.support.v7.widget.RecyclerView.State): void;
				public isReverseLayout(parent: android.support.v7.widget.RecyclerView): boolean;
				public getItemOffsets(rect: android.graphics.Rect, v: android.view.View, parent: android.support.v7.widget.RecyclerView, state: android.support.v7.widget.RecyclerView.State): void;
				public getDividerBound(param0: number, param1: android.support.v7.widget.RecyclerView, param2: android.view.View): android.graphics.Rect;
			}
			export module FlexibleDividerDecoration {
				export class Builder<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.Builder<any>>;
					public mResources: android.content.res.Resources;
					public showLastDivider(): T;
					public constructor(context: android.content.Context);
					public drawableProvider(provider: com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.DrawableProvider): T;
					public size(size: number): T;
					public colorResId(colorId: number): T;
					public colorProvider(provider: com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.ColorProvider): T;
					public sizeProvider(provider: com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.SizeProvider): T;
					public paint(paint: android.graphics.Paint): T;
					public drawable(id: number): T;
					public visibilityProvider(provider: com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.VisibilityProvider): T;
					public positionInsideItem(positionInsideItem: boolean): T;
					public checkBuilderParams(): void;
					public color(color: number): T;
					public sizeResId(sizeId: number): T;
					public paintProvider(provider: com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.PaintProvider): T;
					public drawable(drawable: android.graphics.drawable.Drawable): T;
				}
				export class ColorProvider extends java.lang.Object {
					public static class: java.lang.Class<com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.ColorProvider>;
					/**
					 * Constructs a new instance of the com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration$ColorProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						dividerColor(param0: number, param1: android.support.v7.widget.RecyclerView): number;
					});
					public constructor();
					public dividerColor(param0: number, param1: android.support.v7.widget.RecyclerView): number;
				}
				export class DividerType {
					public static class: java.lang.Class<com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.DividerType>;
					public static DRAWABLE: com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.DividerType;
					public static PAINT: com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.DividerType;
					public static COLOR: com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.DividerType;
					public static values(): com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.DividerType[];
					public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
					public static valueOf(name: string): com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.DividerType;
				}
				export class DrawableProvider extends java.lang.Object {
					public static class: java.lang.Class<com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.DrawableProvider>;
					/**
					 * Constructs a new instance of the com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration$DrawableProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						drawableProvider(param0: number, param1: android.support.v7.widget.RecyclerView): android.graphics.drawable.Drawable;
					});
					public constructor();
					public drawableProvider(param0: number, param1: android.support.v7.widget.RecyclerView): android.graphics.drawable.Drawable;
				}
				export class PaintProvider extends java.lang.Object {
					public static class: java.lang.Class<com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.PaintProvider>;
					/**
					 * Constructs a new instance of the com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration$PaintProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						dividerPaint(param0: number, param1: android.support.v7.widget.RecyclerView): android.graphics.Paint;
					});
					public constructor();
					public dividerPaint(param0: number, param1: android.support.v7.widget.RecyclerView): android.graphics.Paint;
				}
				export class SizeProvider extends java.lang.Object {
					public static class: java.lang.Class<com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.SizeProvider>;
					/**
					 * Constructs a new instance of the com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration$SizeProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						dividerSize(param0: number, param1: android.support.v7.widget.RecyclerView): number;
					});
					public constructor();
					public dividerSize(param0: number, param1: android.support.v7.widget.RecyclerView): number;
				}
				export class VisibilityProvider extends java.lang.Object {
					public static class: java.lang.Class<com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.VisibilityProvider>;
					/**
					 * Constructs a new instance of the com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration$VisibilityProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						shouldHideDivider(param0: number, param1: android.support.v7.widget.RecyclerView): boolean;
					});
					public constructor();
					public shouldHideDivider(param0: number, param1: android.support.v7.widget.RecyclerView): boolean;
				}
			}
		}
	}
}

declare module com {
	export module yqritc {
		export module recyclerviewflexibledivider {
			export class HorizontalDividerItemDecoration extends com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration {
				public static class: java.lang.Class<com.yqritc.recyclerviewflexibledivider.HorizontalDividerItemDecoration>;
				public constructor(builder: com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.Builder<any>);
				public getDividerBound(position: number, parent: android.support.v7.widget.RecyclerView, child: android.view.View): android.graphics.Rect;
				public setItemOffsets(param0: android.graphics.Rect, param1: number, param2: android.support.v7.widget.RecyclerView): void;
				public getDividerBound(param0: number, param1: android.support.v7.widget.RecyclerView, param2: android.view.View): android.graphics.Rect;
				public constructor(builder: com.yqritc.recyclerviewflexibledivider.HorizontalDividerItemDecoration.Builder);
				public setItemOffsets(outRect: android.graphics.Rect, position: number, parent: android.support.v7.widget.RecyclerView): void;
			}
			export module HorizontalDividerItemDecoration {
				export class Builder extends com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.Builder<com.yqritc.recyclerviewflexibledivider.HorizontalDividerItemDecoration.Builder> {
					public static class: java.lang.Class<com.yqritc.recyclerviewflexibledivider.HorizontalDividerItemDecoration.Builder>;
					public margin(leftMargin: number, rightMargin: number): com.yqritc.recyclerviewflexibledivider.HorizontalDividerItemDecoration.Builder;
					public margin(horizontalMargin: number): com.yqritc.recyclerviewflexibledivider.HorizontalDividerItemDecoration.Builder;
					public marginProvider(provider: com.yqritc.recyclerviewflexibledivider.HorizontalDividerItemDecoration.MarginProvider): com.yqritc.recyclerviewflexibledivider.HorizontalDividerItemDecoration.Builder;
					public constructor(context: android.content.Context);
					public marginResId(leftMarginId: number, rightMarginId: number): com.yqritc.recyclerviewflexibledivider.HorizontalDividerItemDecoration.Builder;
					public build(): com.yqritc.recyclerviewflexibledivider.HorizontalDividerItemDecoration;
					public marginResId(horizontalMarginId: number): com.yqritc.recyclerviewflexibledivider.HorizontalDividerItemDecoration.Builder;
				}
				export class MarginProvider extends java.lang.Object {
					public static class: java.lang.Class<com.yqritc.recyclerviewflexibledivider.HorizontalDividerItemDecoration.MarginProvider>;
					/**
					 * Constructs a new instance of the com.yqritc.recyclerviewflexibledivider.HorizontalDividerItemDecoration$MarginProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						dividerLeftMargin(param0: number, param1: android.support.v7.widget.RecyclerView): number;
						dividerRightMargin(param0: number, param1: android.support.v7.widget.RecyclerView): number;
					});
					public constructor();
					public dividerLeftMargin(param0: number, param1: android.support.v7.widget.RecyclerView): number;
					public dividerRightMargin(param0: number, param1: android.support.v7.widget.RecyclerView): number;
				}
			}
		}
	}
}

declare module com {
	export module yqritc {
		export module recyclerviewflexibledivider {
			export class VerticalDividerItemDecoration extends com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration {
				public static class: java.lang.Class<com.yqritc.recyclerviewflexibledivider.VerticalDividerItemDecoration>;
				public constructor(builder: com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.Builder<any>);
				public getDividerBound(position: number, parent: android.support.v7.widget.RecyclerView, child: android.view.View): android.graphics.Rect;
				public setItemOffsets(param0: android.graphics.Rect, param1: number, param2: android.support.v7.widget.RecyclerView): void;
				public constructor(builder: com.yqritc.recyclerviewflexibledivider.VerticalDividerItemDecoration.Builder);
				public getDividerBound(param0: number, param1: android.support.v7.widget.RecyclerView, param2: android.view.View): android.graphics.Rect;
				public setItemOffsets(outRect: android.graphics.Rect, position: number, parent: android.support.v7.widget.RecyclerView): void;
			}
			export module VerticalDividerItemDecoration {
				export class Builder extends com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.Builder<com.yqritc.recyclerviewflexibledivider.VerticalDividerItemDecoration.Builder> {
					public static class: java.lang.Class<com.yqritc.recyclerviewflexibledivider.VerticalDividerItemDecoration.Builder>;
					public constructor(context: android.content.Context);
					public marginResId(topMarginId: number, bottomMarginId: number): com.yqritc.recyclerviewflexibledivider.VerticalDividerItemDecoration.Builder;
					public marginProvider(provider: com.yqritc.recyclerviewflexibledivider.VerticalDividerItemDecoration.MarginProvider): com.yqritc.recyclerviewflexibledivider.VerticalDividerItemDecoration.Builder;
					public margin(verticalMargin: number): com.yqritc.recyclerviewflexibledivider.VerticalDividerItemDecoration.Builder;
					public marginResId(verticalMarginId: number): com.yqritc.recyclerviewflexibledivider.VerticalDividerItemDecoration.Builder;
					public margin(topMargin: number, bottomMargin: number): com.yqritc.recyclerviewflexibledivider.VerticalDividerItemDecoration.Builder;
					public build(): com.yqritc.recyclerviewflexibledivider.VerticalDividerItemDecoration;
				}
				export class MarginProvider extends java.lang.Object {
					public static class: java.lang.Class<com.yqritc.recyclerviewflexibledivider.VerticalDividerItemDecoration.MarginProvider>;
					/**
					 * Constructs a new instance of the com.yqritc.recyclerviewflexibledivider.VerticalDividerItemDecoration$MarginProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						dividerTopMargin(param0: number, param1: android.support.v7.widget.RecyclerView): number;
						dividerBottomMargin(param0: number, param1: android.support.v7.widget.RecyclerView): number;
					});
					public constructor();
					public dividerTopMargin(param0: number, param1: android.support.v7.widget.RecyclerView): number;
					public dividerBottomMargin(param0: number, param1: android.support.v7.widget.RecyclerView): number;
				}
			}
		}
	}
}

//Generics information:
//com.yqritc.recyclerviewflexibledivider.FlexibleDividerDecoration.Builder:1

