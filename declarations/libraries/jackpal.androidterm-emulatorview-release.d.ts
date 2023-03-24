declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export abstract class BaseTextRenderer extends java.lang.Object implements jackpal.androidterm.emulatorview.TextRenderer {
				public static class: java.lang.Class<jackpal.androidterm.emulatorview.BaseTextRenderer>;
				public mReverseVideo: boolean;
				public mPalette: number[];
				public static sXterm256Paint: number[];
				public getCharacterHeight(): number;
				public setReverseVideo(reverseVideo: boolean): void;
				public setReverseVideo(param0: boolean): void;
				public drawCursorImp(canvas: android.graphics.Canvas, x: number, y: number, charWidth: number, charHeight: number, cursorMode: number): void;
				public getCharacterWidth(): number;
				public drawTextRun(param0: android.graphics.Canvas, param1: number, param2: number, param3: number, param4: number, param5: string[], param6: number, param7: number, param8: boolean, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number): void;
				public constructor(scheme: jackpal.androidterm.emulatorview.ColorScheme);
				public getTopMargin(): number;
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export class Bitmap4x8FontRenderer extends jackpal.androidterm.emulatorview.BaseTextRenderer {
				public static class: java.lang.Class<jackpal.androidterm.emulatorview.Bitmap4x8FontRenderer>;
				public getCharacterHeight(): number;
				public setReverseVideo(reverseVideo: boolean): void;
				public setReverseVideo(param0: boolean): void;
				public getCharacterWidth(): number;
				public drawTextRun(canvas: android.graphics.Canvas, x: number, y: number, lineOffset: number, runWidth: number, text: string[], index: number, count: number, selectionStyle: boolean, textStyle: number, cursorOffset: number, cursorIndex: number, cursorIncr: number, cursorWidth: number, cursorMode: number): void;
				public constructor(resources: android.content.res.Resources, scheme: jackpal.androidterm.emulatorview.ColorScheme);
				public drawTextRun(param0: android.graphics.Canvas, param1: number, param2: number, param3: number, param4: number, param5: string[], param6: number, param7: number, param8: boolean, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number): void;
				public constructor(scheme: jackpal.androidterm.emulatorview.ColorScheme);
				public getTopMargin(): number;
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.emulatorview.BuildConfig>;
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

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export class ByteQueue extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.emulatorview.ByteQueue>;
				public constructor(size: number);
				public getBytesAvailable(): number;
				public write(buffer: number[], offset: number, length: number): number;
				public read(buffer: number[], offset: number, length: number): number;
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export class ColorScheme extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.emulatorview.ColorScheme>;
				public constructor(foreColor: number, backColor: number);
				public getCursorBackColor(): number;
				public constructor(foreColor: number, backColor: number, cursorForeColor: number, cursorBackColor: number);
				public getBackColor(): number;
				public getForeColor(): number;
				public getCursorForeColor(): number;
				public constructor(scheme: number[]);
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export class EmulatorDebug extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.emulatorview.EmulatorDebug>;
				public static DEBUG: boolean;
				public static LOG_IME: boolean;
				public static LOG_CHARACTERS_FLAG: boolean;
				public static LOG_UNKNOWN_ESCAPE_SEQUENCES: boolean;
				public static LOG_TAG: string;
				public static bytesToString(data: number[], base: number, length: number): string;
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export class EmulatorView extends android.view.View implements android.view.GestureDetector.OnGestureListener {
				public static class: java.lang.Class<jackpal.androidterm.emulatorview.EmulatorView>;
				public setTextSize(fontSize: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public computeVerticalScrollOffset(): number;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public setAltSendsEsc(flag: boolean): void;
				public getVisibleColumns(): number;
				public setUseCookedIME(useCookedIME: boolean): void;
				public setControlKeyCode(keyCode: number): void;
				public onDown(param0: android.view.MotionEvent): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public sendFnKey(): void;
				public onFling(e1: android.view.MotionEvent, e2: android.view.MotionEvent, velocityX: number, velocityY: number): boolean;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public setFnKeyCode(keyCode: number): void;
				public toggleSelectingText(): void;
				public setExtGestureListener(listener: android.view.GestureDetector.OnGestureListener): void;
				public getURLat(x: number, y: number): string;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public onLongPress(e: android.view.MotionEvent): void;
				public setMouseTracking(flag: boolean): void;
				public onResume(): void;
				public setColorScheme(scheme: jackpal.androidterm.emulatorview.ColorScheme): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public onDraw(canvas: android.graphics.Canvas): void;
				public constructor(context: android.content.Context);
				public page(delta: number): void;
				public onLongPress(param0: android.view.MotionEvent): void;
				public pageHorizontal(deltaColumns: number): void;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public setDensity(metrics: android.util.DisplayMetrics): void;
				public onSingleTapUp(param0: android.view.MotionEvent): boolean;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public attachSession(session: jackpal.androidterm.emulatorview.TermSession): void;
				public updateSize(force: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public computeVerticalScrollExtent(): number;
				public constructor(context: android.content.Context, session: jackpal.androidterm.emulatorview.TermSession, metrics: android.util.DisplayMetrics);
				public computeVerticalScrollRange(): number;
				public onScroll(e1: android.view.MotionEvent, e2: android.view.MotionEvent, distanceX: number, distanceY: number): boolean;
				public onTouchEvent(event: android.view.MotionEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public setBackKeyCharacter(keyCode: number): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public onCreateInputConnection(outAttrs: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;
				public getVisibleWidth(): number;
				public onSingleTapConfirmed(e: android.view.MotionEvent): void;
				public getVisibleRows(): number;
				public onSingleTapUp(e: android.view.MotionEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public onPause(): void;
				public getTermSession(): jackpal.androidterm.emulatorview.TermSession;
				public setTermType(termType: string): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onShowPress(e: android.view.MotionEvent): void;
				public onFling(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
				public onShowPress(param0: android.view.MotionEvent): void;
				public onScroll(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public onDown(e: android.view.MotionEvent): boolean;
				public onCheckIsTextEditor(): boolean;
				public getVisibleHeight(): number;
				public onTouchEvent(ev: android.view.MotionEvent): boolean;
				public sendControlKey(): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onJumpTapDown(e1: android.view.MotionEvent, e2: android.view.MotionEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyle: number);
				public getKeypadApplicationMode(): boolean;
				public getSelectingText(): boolean;
				public onKeyPreIme(keyCode: number, event: android.view.KeyEvent): boolean;
				public getSelectedText(): string;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public isMouseTrackingActive(): boolean;
				public onJumpTapUp(e1: android.view.MotionEvent, e2: android.view.MotionEvent): boolean;
				public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
			}
			export module EmulatorView {
				export class HttpMatchFilter extends java.lang.Object implements android.text.util.Linkify.MatchFilter {
					public static class: java.lang.Class<jackpal.androidterm.emulatorview.EmulatorView.HttpMatchFilter>;
					public acceptMatch(param0: string, param1: number, param2: number): boolean;
					public acceptMatch(s: string, start: number, end: number): boolean;
				}
				export class MouseTrackingFlingRunner extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<jackpal.androidterm.emulatorview.EmulatorView.MouseTrackingFlingRunner>;
					public run(): void;
					public fling(e: android.view.MotionEvent, velocityX: number, velocityY: number): void;
				}
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export class FullUnicodeLine extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.emulatorview.FullUnicodeLine>;
				public getSpaceUsed(): number;
				public constructor(basicLine: string[]);
				public constructor(columns: number);
				public setChar(column: number, codePoint: number): void;
				public getLine(): string[];
				public getChar(column: number, charIndex: number, out: string[], offset: number): boolean;
				public findStartOfColumn(column: number): number;
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export class GrowableIntArray extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.emulatorview.GrowableIntArray>;
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export class PaintRenderer extends jackpal.androidterm.emulatorview.BaseTextRenderer {
				public static class: java.lang.Class<jackpal.androidterm.emulatorview.PaintRenderer>;
				public getCharacterHeight(): number;
				public setReverseVideo(reverseVideo: boolean): void;
				public setReverseVideo(param0: boolean): void;
				public getCharacterWidth(): number;
				public drawTextRun(canvas: android.graphics.Canvas, x: number, y: number, lineOffset: number, runWidth: number, text: string[], index: number, count: number, selectionStyle: boolean, textStyle: number, cursorOffset: number, cursorIndex: number, cursorIncr: number, cursorWidth: number, cursorMode: number): void;
				public drawTextRun(param0: android.graphics.Canvas, param1: number, param2: number, param3: number, param4: number, param5: string[], param6: number, param7: number, param8: boolean, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number): void;
				public constructor(scheme: jackpal.androidterm.emulatorview.ColorScheme);
				public getTopMargin(): number;
				public constructor(fontSize: number, scheme: jackpal.androidterm.emulatorview.ColorScheme);
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export class Screen extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.emulatorview.Screen>;
				/**
				 * Constructs a new instance of the jackpal.androidterm.emulatorview.Screen interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setLineWrap(param0: number): void;
					set(param0: number, param1: number, param2: number, param3: number): void;
					set(param0: number, param1: number, param2: number, param3: number): void;
					scroll(param0: number, param1: number, param2: number): void;
					blockCopy(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					blockSet(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					getTranscriptText(): string;
					getTranscriptText(param0: jackpal.androidterm.emulatorview.GrowableIntArray): string;
					getSelectedText(param0: number, param1: number, param2: number, param3: number): string;
					getSelectedText(param0: jackpal.androidterm.emulatorview.GrowableIntArray, param1: number, param2: number, param3: number, param4: number): string;
					getActiveRows(): number;
					fastResize(param0: number, param1: number, param2: number[]): boolean;
					resize(param0: number, param1: number, param2: number): void;
				});
				public constructor();
				public set(param0: number, param1: number, param2: number, param3: number): void;
				public getTranscriptText(): string;
				public getSelectedText(param0: number, param1: number, param2: number, param3: number): string;
				public getActiveRows(): number;
				public blockCopy(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public getTranscriptText(param0: jackpal.androidterm.emulatorview.GrowableIntArray): string;
				public getSelectedText(param0: jackpal.androidterm.emulatorview.GrowableIntArray, param1: number, param2: number, param3: number, param4: number): string;
				public scroll(param0: number, param1: number, param2: number): void;
				public blockSet(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public fastResize(param0: number, param1: number, param2: number[]): boolean;
				public setLineWrap(param0: number): void;
				public resize(param0: number, param1: number, param2: number): void;
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export class StyleRow extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.emulatorview.StyleRow>;
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export class TermKeyListener extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.emulatorview.TermKeyListener>;
				public static KEYCODE_OFFSET: number;
				public setBackKeyCharacter(code: number): void;
				public setCursorKeysApplicationMode(val: boolean): void;
				public onResume(): void;
				public keyDown(keyCode: number, event: android.view.KeyEvent, appMode: boolean, allowToggle: boolean): void;
				public constructor(termSession: jackpal.androidterm.emulatorview.TermSession);
				public mapControlChar(ch: number): number;
				public setAltSendsEsc(flag: boolean): void;
				public onPause(): void;
				public handleHardwareControlKey(down: boolean): void;
				public handleFnKey(down: boolean): void;
				public setTermType(termType: string): void;
				public handleControlKey(down: boolean): void;
				public handleKeyCode(keyCode: number, event: android.view.KeyEvent, appMode: boolean): boolean;
				public getAltSendsEsc(): boolean;
				public isAltActive(): boolean;
				public getCombiningAccent(): number;
				public getCursorMode(): number;
				public mapControlChar(control: boolean, fn: boolean, ch: number): number;
				public keyUp(keyCode: number, event: android.view.KeyEvent): void;
				public isCtrlActive(): boolean;
			}
			export module TermKeyListener {
				export class ModifierKey extends java.lang.Object {
					public static class: java.lang.Class<jackpal.androidterm.emulatorview.TermKeyListener.ModifierKey>;
					public isActive(): boolean;
					public getUIMode(): number;
					public adjustAfterKeypress(): void;
					public onPress(): void;
					public onRelease(): void;
					public constructor(param0: jackpal.androidterm.emulatorview.TermKeyListener);
				}
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export class TermSession extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.emulatorview.TermSession>;
				public getTranscriptText(): string;
				public constructor(exitOnEOF: boolean);
				public finish(): void;
				public initializeEmulator(columns: number, rows: number): void;
				public constructor();
				public reset(): void;
				public setKeyListener(l: jackpal.androidterm.emulatorview.TermKeyListener): void;
				public write(data: string): void;
				public write(codePoint: number): void;
				public processInput(data: number[], offset: number, count: number): void;
				public notifyUpdate(): void;
				public appendToEmulator(data: number[], offset: number, count: number): void;
				public updateSize(columns: number, rows: number): void;
				public isRunning(): boolean;
				public setFinishCallback(callback: jackpal.androidterm.emulatorview.TermSession.FinishCallback): void;
				public setTitle(title: string): void;
				public setTermIn(termIn: java.io.InputStream): void;
				public setDefaultUTF8Mode(utf8ByDefault: boolean): void;
				public write(data: number[], offset: number, count: number): void;
				public setColorScheme(scheme: jackpal.androidterm.emulatorview.ColorScheme): void;
				public setTermOut(termOut: java.io.OutputStream): void;
				public getTitle(): string;
				public getTermIn(): java.io.InputStream;
				public setUpdateCallback(notify: jackpal.androidterm.emulatorview.UpdateCallback): void;
				public notifyTitleChanged(): void;
				public setUTF8ModeUpdateCallback(utf8ModeNotify: jackpal.androidterm.emulatorview.UpdateCallback): void;
				public getTermOut(): java.io.OutputStream;
				public onProcessExit(): void;
				public setTitleChangedListener(listener: jackpal.androidterm.emulatorview.UpdateCallback): void;
				public getUTF8Mode(): boolean;
			}
			export module TermSession {
				export class FinishCallback extends java.lang.Object {
					public static class: java.lang.Class<jackpal.androidterm.emulatorview.TermSession.FinishCallback>;
					/**
					 * Constructs a new instance of the jackpal.androidterm.emulatorview.TermSession$FinishCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSessionFinish(param0: jackpal.androidterm.emulatorview.TermSession): void;
					});
					public constructor();
					public onSessionFinish(param0: jackpal.androidterm.emulatorview.TermSession): void;
				}
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export class TerminalEmulator extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.emulatorview.TerminalEmulator>;
				public getKeypadApplicationMode(): boolean;
				public getScrollCounter(): number;
				public getReverseVideo(): boolean;
				public setDefaultUTF8Mode(defaultToUTF8Mode: boolean): void;
				public setColorScheme(scheme: jackpal.androidterm.emulatorview.ColorScheme): void;
				public getCursorRow(): number;
				public finish(): void;
				public getScreen(): jackpal.androidterm.emulatorview.TranscriptScreen;
				public getCursorCol(): number;
				public getShowCursor(): boolean;
				public reset(): void;
				public setKeyListener(l: jackpal.androidterm.emulatorview.TermKeyListener): void;
				public updateSize(columns: number, rows: number): void;
				public getMouseTrackingMode(): number;
				public setUTF8ModeUpdateCallback(utf8ModeNotify: jackpal.androidterm.emulatorview.UpdateCallback): void;
				public append(buffer: number[], base: number, length: number): void;
				public setUTF8Mode(utf8Mode: boolean): void;
				public getSelectedText(x1: number, y1: number, x2: number, y2: number): string;
				public constructor(session: jackpal.androidterm.emulatorview.TermSession, screen: jackpal.androidterm.emulatorview.TranscriptScreen, columns: number, rows: number, scheme: jackpal.androidterm.emulatorview.ColorScheme);
				public clearScrollCounter(): void;
				public getUTF8Mode(): boolean;
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export class TextRenderer extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.emulatorview.TextRenderer>;
				/**
				 * Constructs a new instance of the jackpal.androidterm.emulatorview.TextRenderer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setReverseVideo(param0: boolean): void;
					getCharacterWidth(): number;
					getCharacterHeight(): number;
					getTopMargin(): number;
					drawTextRun(param0: android.graphics.Canvas, param1: number, param2: number, param3: number, param4: number, param5: string[], param6: number, param7: number, param8: boolean, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number): void;
				});
				public constructor();
				public static MODE_OFF: number;
				public static MODE_LOCKED: number;
				public static MODE_MASK: number;
				public static MODE_ALT_SHIFT: number;
				public static MODE_CTRL_SHIFT: number;
				public static MODE_SHIFT_SHIFT: number;
				public static MODE_FN_SHIFT: number;
				public static MODE_ON: number;
				public getCharacterHeight(): number;
				public setReverseVideo(param0: boolean): void;
				public getCharacterWidth(): number;
				public drawTextRun(param0: android.graphics.Canvas, param1: number, param2: number, param3: number, param4: number, param5: string[], param6: number, param7: number, param8: boolean, param9: number, param10: number, param11: number, param12: number, param13: number, param14: number): void;
				public getTopMargin(): number;
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export class TextStyle extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.emulatorview.TextStyle>;
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export class TranscriptScreen extends java.lang.Object implements jackpal.androidterm.emulatorview.Screen {
				public static class: java.lang.Class<jackpal.androidterm.emulatorview.TranscriptScreen>;
				public getSelectedText(selX1: number, selY1: number, selX2: number, selY2: number): string;
				public fastResize(columns: number, rows: number, cursor: number[]): boolean;
				public getTranscriptText(): string;
				public getActiveRows(): number;
				public constructor(columns: number, totalRows: number, screenRows: number, scheme: jackpal.androidterm.emulatorview.ColorScheme);
				public setLineWrap(row: number): void;
				public finish(): void;
				public resize(param0: number, param1: number, param2: number): void;
				public blockCopy(sx: number, sy: number, w: number, h: number, dx: number, dy: number): void;
				public getActiveTranscriptRows(): number;
				public getSelectedText(param0: number, param1: number, param2: number, param3: number): string;
				public set(x: number, y: number, b: number, style: number): void;
				public getSelectedText(param0: jackpal.androidterm.emulatorview.GrowableIntArray, param1: number, param2: number, param3: number, param4: number): string;
				public resize(columns: number, rows: number, style: number): void;
				public scroll(param0: number, param1: number, param2: number): void;
				public setLineWrap(param0: number): void;
				public set(x: number, y: number, codePoint: number, style: number): void;
				public blockSet(sx: number, sy: number, w: number, h: number, val: number, style: number): void;
				public setColorScheme(scheme: jackpal.androidterm.emulatorview.ColorScheme): void;
				public getTranscriptText(colors: jackpal.androidterm.emulatorview.GrowableIntArray): string;
				public blockSet(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public fastResize(param0: number, param1: number, param2: number[]): boolean;
				public getSelectedText(colors: jackpal.androidterm.emulatorview.GrowableIntArray, selX1: number, selY1: number, selX2: number, selY2: number): string;
				public set(param0: number, param1: number, param2: number, param3: number): void;
				public scroll(topMargin: number, bottomMargin: number, style: number): void;
				public drawText(row: number, canvas: android.graphics.Canvas, x: number, y: number, renderer: jackpal.androidterm.emulatorview.TextRenderer, cx: number, selx1: number, selx2: number, imeText: string, cursorMode: number): void;
				public blockCopy(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
				public getTranscriptText(param0: jackpal.androidterm.emulatorview.GrowableIntArray): string;
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export class UnicodeTranscript extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.emulatorview.UnicodeTranscript>;
				public resize(newColumns: number, newRows: number, cursor: number[]): boolean;
				public blockSet(sx: number, sy: number, w: number, h: number, val: number, style: number): void;
				public setChar(column: number, row: number, codePoint: number, style: number): boolean;
				public getChar(row: number, column: number): boolean;
				public setDefaultStyle(defaultStyle: number): void;
				public getActiveRows(): number;
				public getChar(row: number, column: number, charIndex: number, out: string[], offset: number): boolean;
				public static charWidth(chars: string[], index: number): number;
				public getLine(row: number): string[];
				public setLineWrap(row: number): void;
				public getChar(row: number, column: number, charIndex: number): boolean;
				public getDefaultStyle(): number;
				public getLineColor(row: number, x1: number, x2: number): jackpal.androidterm.emulatorview.StyleRow;
				public setChar(column: number, row: number, codePoint: number): boolean;
				public scroll(topMargin: number, bottomMargin: number, style: number): void;
				public blockCopy(sx: number, sy: number, w: number, h: number, dx: number, dy: number): void;
				public getLineWrap(row: number): boolean;
				public constructor(columns: number, totalRows: number, screenRows: number, defaultStyle: number);
				public static charWidth(codePoint: number): number;
				public getLineColor(row: number): jackpal.androidterm.emulatorview.StyleRow;
				public getActiveTranscriptRows(): number;
				public static charWidth(cHigh: string, cLow: string): number;
				public getLine(row: number, x1: number, x2: number): string[];
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export class UpdateCallback extends java.lang.Object {
				public static class: java.lang.Class<jackpal.androidterm.emulatorview.UpdateCallback>;
				/**
				 * Constructs a new instance of the jackpal.androidterm.emulatorview.UpdateCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onUpdate(): void;
				});
				public constructor();
				public onUpdate(): void;
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export module compat {
				export class AndroidCharacterCompat extends java.lang.Object {
					public static class: java.lang.Class<jackpal.androidterm.emulatorview.compat.AndroidCharacterCompat>;
					public static EAST_ASIAN_WIDTH_NEUTRAL: number;
					public static EAST_ASIAN_WIDTH_AMBIGUOUS: number;
					public static EAST_ASIAN_WIDTH_HALF_WIDTH: number;
					public static EAST_ASIAN_WIDTH_FULL_WIDTH: number;
					public static EAST_ASIAN_WIDTH_NARROW: number;
					public static EAST_ASIAN_WIDTH_WIDE: number;
					public constructor();
					public static getEastAsianWidth(c: string): number;
				}
				export module AndroidCharacterCompat {
					export class Api8OrLater extends java.lang.Object {
						public static class: java.lang.Class<jackpal.androidterm.emulatorview.compat.AndroidCharacterCompat.Api8OrLater>;
						public static getEastAsianWidth(c: string): number;
					}
				}
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export module compat {
				export class AndroidCompat extends java.lang.Object {
					public static class: java.lang.Class<jackpal.androidterm.emulatorview.compat.AndroidCompat>;
					public static SDK: number;
					public constructor();
				}
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export module compat {
				export class AndroidLevel4PlusCompat extends java.lang.Object {
					public static class: java.lang.Class<jackpal.androidterm.emulatorview.compat.AndroidLevel4PlusCompat>;
				}
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export module compat {
				export class ClipboardManagerCompat extends java.lang.Object {
					public static class: java.lang.Class<jackpal.androidterm.emulatorview.compat.ClipboardManagerCompat>;
					/**
					 * Constructs a new instance of the jackpal.androidterm.emulatorview.compat.ClipboardManagerCompat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getText(): string;
						hasText(): boolean;
						setText(param0: string): void;
					});
					public constructor();
					public hasText(): boolean;
					public setText(param0: string): void;
					public getText(): string;
				}
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export module compat {
				export class ClipboardManagerCompatFactory extends java.lang.Object {
					public static class: java.lang.Class<jackpal.androidterm.emulatorview.compat.ClipboardManagerCompatFactory>;
					public static getManager(context: android.content.Context): jackpal.androidterm.emulatorview.compat.ClipboardManagerCompat;
				}
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export module compat {
				export class ClipboardManagerCompatV1 extends java.lang.Object implements jackpal.androidterm.emulatorview.compat.ClipboardManagerCompat {
					public static class: java.lang.Class<jackpal.androidterm.emulatorview.compat.ClipboardManagerCompatV1>;
					public hasText(): boolean;
					public setText(param0: string): void;
					public constructor(context: android.content.Context);
					public getText(): string;
					public setText(text: string): void;
				}
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export module compat {
				export class ClipboardManagerCompatV11 extends java.lang.Object implements jackpal.androidterm.emulatorview.compat.ClipboardManagerCompat {
					public static class: java.lang.Class<jackpal.androidterm.emulatorview.compat.ClipboardManagerCompatV11>;
					public hasText(): boolean;
					public setText(param0: string): void;
					public constructor(context: android.content.Context);
					public getText(): string;
					public setText(text: string): void;
				}
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export module compat {
				export abstract class KeyCharacterMapCompat extends java.lang.Object {
					public static class: java.lang.Class<jackpal.androidterm.emulatorview.compat.KeyCharacterMapCompat>;
					public static MODIFIER_BEHAVIOR_CHORDED: number;
					public static MODIFIER_BEHAVIOR_CHORDED_OR_TOGGLED: number;
					public constructor();
					public getModifierBehaviour(): number;
					public static wrap(map: any): jackpal.androidterm.emulatorview.compat.KeyCharacterMapCompat;
				}
				export module KeyCharacterMapCompat {
					export class KeyCharacterMapApi11OrLater extends jackpal.androidterm.emulatorview.compat.KeyCharacterMapCompat {
						public static class: java.lang.Class<jackpal.androidterm.emulatorview.compat.KeyCharacterMapCompat.KeyCharacterMapApi11OrLater>;
						public constructor();
						public getModifierBehaviour(): number;
						public constructor(map: any);
					}
				}
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export module compat {
				export class KeycodeConstants extends java.lang.Object {
					public static class: java.lang.Class<jackpal.androidterm.emulatorview.compat.KeycodeConstants>;
					public static KEYCODE_UNKNOWN: number;
					public static KEYCODE_SOFT_LEFT: number;
					public static KEYCODE_SOFT_RIGHT: number;
					public static KEYCODE_HOME: number;
					public static KEYCODE_BACK: number;
					public static KEYCODE_CALL: number;
					public static KEYCODE_ENDCALL: number;
					public static KEYCODE_0: number;
					public static KEYCODE_1: number;
					public static KEYCODE_2: number;
					public static KEYCODE_3: number;
					public static KEYCODE_4: number;
					public static KEYCODE_5: number;
					public static KEYCODE_6: number;
					public static KEYCODE_7: number;
					public static KEYCODE_8: number;
					public static KEYCODE_9: number;
					public static KEYCODE_STAR: number;
					public static KEYCODE_POUND: number;
					public static KEYCODE_DPAD_UP: number;
					public static KEYCODE_DPAD_DOWN: number;
					public static KEYCODE_DPAD_LEFT: number;
					public static KEYCODE_DPAD_RIGHT: number;
					public static KEYCODE_DPAD_CENTER: number;
					public static KEYCODE_VOLUME_UP: number;
					public static KEYCODE_VOLUME_DOWN: number;
					public static KEYCODE_POWER: number;
					public static KEYCODE_CAMERA: number;
					public static KEYCODE_CLEAR: number;
					public static KEYCODE_A: number;
					public static KEYCODE_B: number;
					public static KEYCODE_C: number;
					public static KEYCODE_D: number;
					public static KEYCODE_E: number;
					public static KEYCODE_F: number;
					public static KEYCODE_G: number;
					public static KEYCODE_H: number;
					public static KEYCODE_I: number;
					public static KEYCODE_J: number;
					public static KEYCODE_K: number;
					public static KEYCODE_L: number;
					public static KEYCODE_M: number;
					public static KEYCODE_N: number;
					public static KEYCODE_O: number;
					public static KEYCODE_P: number;
					public static KEYCODE_Q: number;
					public static KEYCODE_R: number;
					public static KEYCODE_S: number;
					public static KEYCODE_T: number;
					public static KEYCODE_U: number;
					public static KEYCODE_V: number;
					public static KEYCODE_W: number;
					public static KEYCODE_X: number;
					public static KEYCODE_Y: number;
					public static KEYCODE_Z: number;
					public static KEYCODE_COMMA: number;
					public static KEYCODE_PERIOD: number;
					public static KEYCODE_ALT_LEFT: number;
					public static KEYCODE_ALT_RIGHT: number;
					public static KEYCODE_SHIFT_LEFT: number;
					public static KEYCODE_SHIFT_RIGHT: number;
					public static KEYCODE_TAB: number;
					public static KEYCODE_SPACE: number;
					public static KEYCODE_SYM: number;
					public static KEYCODE_EXPLORER: number;
					public static KEYCODE_ENVELOPE: number;
					public static KEYCODE_ENTER: number;
					public static KEYCODE_DEL: number;
					public static KEYCODE_GRAVE: number;
					public static KEYCODE_MINUS: number;
					public static KEYCODE_EQUALS: number;
					public static KEYCODE_LEFT_BRACKET: number;
					public static KEYCODE_RIGHT_BRACKET: number;
					public static KEYCODE_BACKSLASH: number;
					public static KEYCODE_SEMICOLON: number;
					public static KEYCODE_APOSTROPHE: number;
					public static KEYCODE_SLASH: number;
					public static KEYCODE_AT: number;
					public static KEYCODE_NUM: number;
					public static KEYCODE_HEADSETHOOK: number;
					public static KEYCODE_FOCUS: number;
					public static KEYCODE_PLUS: number;
					public static KEYCODE_MENU: number;
					public static KEYCODE_NOTIFICATION: number;
					public static KEYCODE_SEARCH: number;
					public static KEYCODE_MEDIA_PLAY_PAUSE: number;
					public static KEYCODE_MEDIA_STOP: number;
					public static KEYCODE_MEDIA_NEXT: number;
					public static KEYCODE_MEDIA_PREVIOUS: number;
					public static KEYCODE_MEDIA_REWIND: number;
					public static KEYCODE_MEDIA_FAST_FORWARD: number;
					public static KEYCODE_MUTE: number;
					public static KEYCODE_PAGE_UP: number;
					public static KEYCODE_PAGE_DOWN: number;
					public static KEYCODE_PICTSYMBOLS: number;
					public static KEYCODE_SWITCH_CHARSET: number;
					public static KEYCODE_BUTTON_A: number;
					public static KEYCODE_BUTTON_B: number;
					public static KEYCODE_BUTTON_C: number;
					public static KEYCODE_BUTTON_X: number;
					public static KEYCODE_BUTTON_Y: number;
					public static KEYCODE_BUTTON_Z: number;
					public static KEYCODE_BUTTON_L1: number;
					public static KEYCODE_BUTTON_R1: number;
					public static KEYCODE_BUTTON_L2: number;
					public static KEYCODE_BUTTON_R2: number;
					public static KEYCODE_BUTTON_THUMBL: number;
					public static KEYCODE_BUTTON_THUMBR: number;
					public static KEYCODE_BUTTON_START: number;
					public static KEYCODE_BUTTON_SELECT: number;
					public static KEYCODE_BUTTON_MODE: number;
					public static KEYCODE_ESCAPE: number;
					public static KEYCODE_FORWARD_DEL: number;
					public static KEYCODE_CTRL_LEFT: number;
					public static KEYCODE_CTRL_RIGHT: number;
					public static KEYCODE_CAPS_LOCK: number;
					public static KEYCODE_SCROLL_LOCK: number;
					public static KEYCODE_META_LEFT: number;
					public static KEYCODE_META_RIGHT: number;
					public static KEYCODE_FUNCTION: number;
					public static KEYCODE_SYSRQ: number;
					public static KEYCODE_BREAK: number;
					public static KEYCODE_MOVE_HOME: number;
					public static KEYCODE_MOVE_END: number;
					public static KEYCODE_INSERT: number;
					public static KEYCODE_FORWARD: number;
					public static KEYCODE_MEDIA_PLAY: number;
					public static KEYCODE_MEDIA_PAUSE: number;
					public static KEYCODE_MEDIA_CLOSE: number;
					public static KEYCODE_MEDIA_EJECT: number;
					public static KEYCODE_MEDIA_RECORD: number;
					public static KEYCODE_F1: number;
					public static KEYCODE_F2: number;
					public static KEYCODE_F3: number;
					public static KEYCODE_F4: number;
					public static KEYCODE_F5: number;
					public static KEYCODE_F6: number;
					public static KEYCODE_F7: number;
					public static KEYCODE_F8: number;
					public static KEYCODE_F9: number;
					public static KEYCODE_F10: number;
					public static KEYCODE_F11: number;
					public static KEYCODE_F12: number;
					public static KEYCODE_NUM_LOCK: number;
					public static KEYCODE_NUMPAD_0: number;
					public static KEYCODE_NUMPAD_1: number;
					public static KEYCODE_NUMPAD_2: number;
					public static KEYCODE_NUMPAD_3: number;
					public static KEYCODE_NUMPAD_4: number;
					public static KEYCODE_NUMPAD_5: number;
					public static KEYCODE_NUMPAD_6: number;
					public static KEYCODE_NUMPAD_7: number;
					public static KEYCODE_NUMPAD_8: number;
					public static KEYCODE_NUMPAD_9: number;
					public static KEYCODE_NUMPAD_DIVIDE: number;
					public static KEYCODE_NUMPAD_MULTIPLY: number;
					public static KEYCODE_NUMPAD_SUBTRACT: number;
					public static KEYCODE_NUMPAD_ADD: number;
					public static KEYCODE_NUMPAD_DOT: number;
					public static KEYCODE_NUMPAD_COMMA: number;
					public static KEYCODE_NUMPAD_ENTER: number;
					public static KEYCODE_NUMPAD_EQUALS: number;
					public static KEYCODE_NUMPAD_LEFT_PAREN: number;
					public static KEYCODE_NUMPAD_RIGHT_PAREN: number;
					public static KEYCODE_VOLUME_MUTE: number;
					public static KEYCODE_INFO: number;
					public static KEYCODE_CHANNEL_UP: number;
					public static KEYCODE_CHANNEL_DOWN: number;
					public static KEYCODE_ZOOM_IN: number;
					public static KEYCODE_ZOOM_OUT: number;
					public static KEYCODE_TV: number;
					public static KEYCODE_WINDOW: number;
					public static KEYCODE_GUIDE: number;
					public static KEYCODE_DVR: number;
					public static KEYCODE_BOOKMARK: number;
					public static KEYCODE_CAPTIONS: number;
					public static KEYCODE_SETTINGS: number;
					public static KEYCODE_TV_POWER: number;
					public static KEYCODE_TV_INPUT: number;
					public static KEYCODE_STB_POWER: number;
					public static KEYCODE_STB_INPUT: number;
					public static KEYCODE_AVR_POWER: number;
					public static KEYCODE_AVR_INPUT: number;
					public static KEYCODE_PROG_RED: number;
					public static KEYCODE_PROG_GREEN: number;
					public static KEYCODE_PROG_YELLOW: number;
					public static KEYCODE_PROG_BLUE: number;
					public static LAST_KEYCODE: number;
					public static META_ALT_ON: number;
					public static META_CAPS_LOCK_ON: number;
					public static META_CTRL_ON: number;
					public static META_SHIFT_ON: number;
					public static META_CTRL_MASK: number;
					public static META_META_ON: number;
					public static META_META_MASK: number;
					public constructor();
				}
			}
		}
	}
}

declare module jackpal {
	export module androidterm {
		export module emulatorview {
			export module compat {
				export class Patterns extends java.lang.Object {
					public static class: java.lang.Class<jackpal.androidterm.emulatorview.compat.Patterns>;
					public static TOP_LEVEL_DOMAIN_STR_FOR_WEB_URL: string;
					public static GOOD_IRI_CHAR: string;
					public static WEB_URL: java.util.regex.Pattern;
					public constructor();
				}
			}
		}
	}
}

//Generics information:

