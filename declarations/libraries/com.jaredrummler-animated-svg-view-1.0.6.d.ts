declare module com {
	export module jaredrummler {
		export module android {
			export module animatedsvgview {
				export class BuildConfig extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.android.animatedsvgview.BuildConfig>;
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
}

declare module com {
	export module jaredrummler {
		export module android {
			export module widget {
				export class AnimatedSvgView extends android.view.View {
					public static class: java.lang.Class<com.jaredrummler.android.widget.AnimatedSvgView>;
					public static STATE_NOT_STARTED: number;
					public static STATE_TRACE_STARTED: number;
					public static STATE_FILL_STARTED: number;
					public static STATE_FINISHED: number;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public setFillTime(fillTime: number): void;
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
					public rebuildGlyphData(): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyle: number);
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					public setFillColor(color: number): void;
					public start(): void;
					public setTraceResidueColors(traceResidueColors: number[]): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public setTraceTimePerGlyph(traceTimePerGlyph: number): void;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public setFillColors(fillColors: number[]): void;
					public setTraceColors(traceColors: number[]): void;
					public sendAccessibilityEvent(param0: number): void;
					public onDraw(canvas: android.graphics.Canvas): void;
					public reset(): void;
					public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
					public constructor(context: android.content.Context);
					public setFillStart(fillStart: number): void;
					public setTraceTime(traceTime: number): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public setViewportSize(viewportWidth: number, viewportHeight: number): void;
					public setTraceColor(color: number): void;
					public setToFinishedFrame(): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public setOnStateChangeListener(onStateChangeListener: com.jaredrummler.android.widget.AnimatedSvgView.OnStateChangeListener): void;
					public setGlyphStrings(...glyphStrings: string[]): void;
					public setTraceResidueColor(color: number): void;
					public getState(): number;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				}
				export module AnimatedSvgView {
					export class GlyphData extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.android.widget.AnimatedSvgView.GlyphData>;
					}
					export class OnStateChangeListener extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.android.widget.AnimatedSvgView.OnStateChangeListener>;
						/**
						 * Constructs a new instance of the com.jaredrummler.android.widget.AnimatedSvgView$OnStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onStateChange(param0: number): void;
						});
						public constructor();
						public onStateChange(param0: number): void;
					}
					export class State extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.jaredrummler.android.widget.AnimatedSvgView.State>;
						/**
						 * Constructs a new instance of the com.jaredrummler.android.widget.AnimatedSvgView$State interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class<any>;
						});
						public constructor();
						public equals(obj: any): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module android {
			export module widget {
				export class PathParser extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.android.widget.PathParser>;
					public static canMorph(nodesFrom: com.jaredrummler.android.widget.PathParser.PathDataNode[], nodesTo: com.jaredrummler.android.widget.PathParser.PathDataNode[]): boolean;
					public static createPathFromPathData(pathData: string): android.graphics.Path;
					public static deepCopyNodes(source: com.jaredrummler.android.widget.PathParser.PathDataNode[]): com.jaredrummler.android.widget.PathParser.PathDataNode[];
					public static updateNodes(target: com.jaredrummler.android.widget.PathParser.PathDataNode[], source: com.jaredrummler.android.widget.PathParser.PathDataNode[]): void;
					public static createNodesFromPathData(pathData: string): com.jaredrummler.android.widget.PathParser.PathDataNode[];
				}
				export module PathParser {
					export class ExtractFloatResult extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.android.widget.PathParser.ExtractFloatResult>;
					}
					export class PathDataNode extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.android.widget.PathParser.PathDataNode>;
						public mType: string;
						public mParams: number[];
						public static nodesToPath(node: com.jaredrummler.android.widget.PathParser.PathDataNode[], path: android.graphics.Path): void;
						public interpolatePathDataNode(nodeFrom: com.jaredrummler.android.widget.PathParser.PathDataNode, nodeTo: com.jaredrummler.android.widget.PathParser.PathDataNode, fraction: number): void;
					}
				}
			}
		}
	}
}

//Generics information:

