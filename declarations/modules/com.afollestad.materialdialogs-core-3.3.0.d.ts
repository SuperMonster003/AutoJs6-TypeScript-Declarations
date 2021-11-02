/// <reference path="../android.d.ts" />
/// <reference path="./kotlin-stdlib-jdk8.d.ts" />

declare module com {
	export module afollestad {
		export module materialdialogs {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.afollestad.materialdialogs.BuildConfig>;
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

declare module com {
	export module afollestad {
		export module materialdialogs {
			export class DialogBehavior extends java.lang.Object {
				public static class: java.lang.Class<com.afollestad.materialdialogs.DialogBehavior>;
				/**
				 * Constructs a new instance of the com.afollestad.materialdialogs.DialogBehavior interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getThemeRes(param0: boolean): number;
					createView(param0: globalAndroid.content.Context, param1: globalAndroid.view.Window, param2: globalAndroid.view.LayoutInflater, param3: com.afollestad.materialdialogs.MaterialDialog): globalAndroid.view.ViewGroup;
					getDialogLayout(param0: globalAndroid.view.ViewGroup): com.afollestad.materialdialogs.internal.main.DialogLayout;
					setWindowConstraints(param0: globalAndroid.content.Context, param1: globalAndroid.view.Window, param2: com.afollestad.materialdialogs.internal.main.DialogLayout, param3: java.lang.Integer): void;
					setBackgroundColor(param0: com.afollestad.materialdialogs.internal.main.DialogLayout, param1: number, param2: number): void;
					onPreShow(param0: com.afollestad.materialdialogs.MaterialDialog): void;
					onPostShow(param0: com.afollestad.materialdialogs.MaterialDialog): void;
					onDismiss(): boolean;
				});
				public constructor();
				public getDialogLayout(param0: globalAndroid.view.ViewGroup): com.afollestad.materialdialogs.internal.main.DialogLayout;
				public onPreShow(param0: com.afollestad.materialdialogs.MaterialDialog): void;
				public onDismiss(): boolean;
				public getThemeRes(param0: boolean): number;
				public onPostShow(param0: com.afollestad.materialdialogs.MaterialDialog): void;
				public setWindowConstraints(param0: globalAndroid.content.Context, param1: globalAndroid.view.Window, param2: com.afollestad.materialdialogs.internal.main.DialogLayout, param3: java.lang.Integer): void;
				public createView(param0: globalAndroid.content.Context, param1: globalAndroid.view.Window, param2: globalAndroid.view.LayoutInflater, param3: com.afollestad.materialdialogs.MaterialDialog): globalAndroid.view.ViewGroup;
				public setBackgroundColor(param0: com.afollestad.materialdialogs.internal.main.DialogLayout, param1: number, param2: number): void;
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export class LayoutMode {
				public static class: java.lang.Class<com.afollestad.materialdialogs.LayoutMode>;
				public static MATCH_PARENT: com.afollestad.materialdialogs.LayoutMode;
				public static WRAP_CONTENT: com.afollestad.materialdialogs.LayoutMode;
				public static valueOf(param0: string): com.afollestad.materialdialogs.LayoutMode;
				public static values(): Array<com.afollestad.materialdialogs.LayoutMode>;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export class MaterialDialog extends globalAndroid.app.Dialog {
				public static class: java.lang.Class<com.afollestad.materialdialogs.MaterialDialog>;
				public static Companion: com.afollestad.materialdialogs.MaterialDialog.Companion;
				public cancelable(param0: boolean): com.afollestad.materialdialogs.MaterialDialog;
				public getBodyFont(): globalAndroid.graphics.Typeface;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public message(param0: java.lang.Integer, param1: string, param2: kotlin.jvm.functions.Function1<any,kotlin.Unit>): com.afollestad.materialdialogs.MaterialDialog;
				public dispatchTrackballEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public onActionModeFinished(param0: globalAndroid.view.ActionMode): void;
				public show(): void;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public maxWidth(param0: java.lang.Integer, param1: java.lang.Integer): com.afollestad.materialdialogs.MaterialDialog;
				public static setDEFAULT_BEHAVIOR(param0: com.afollestad.materialdialogs.DialogBehavior): void;
				public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public config(param0: string): any;
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public cancel(): void;
				public constructor(param0: globalAndroid.content.Context, param1: com.afollestad.materialdialogs.DialogBehavior);
				public onPreparePanel(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.Menu): boolean;
				public cornerRadius(param0: java.lang.Float, param1: java.lang.Integer): com.afollestad.materialdialogs.MaterialDialog;
				public clearPositiveListeners(): com.afollestad.materialdialogs.MaterialDialog;
				/** @deprecated */
				public neutralButton(param0: java.lang.Integer, param1: string, param2: kotlin.jvm.functions.Function1<any,kotlin.Unit>): com.afollestad.materialdialogs.MaterialDialog;
				public onPointerCaptureChanged(param0: boolean): void;
				public getDismissListeners$core(): java.util.List<kotlin.jvm.functions.Function1<com.afollestad.materialdialogs.MaterialDialog,kotlin.Unit>>;
				public getView(): com.afollestad.materialdialogs.internal.main.DialogLayout;
				public dispatchKeyShortcutEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public negativeButton(param0: java.lang.Integer, param1: string, param2: kotlin.jvm.functions.Function1<any,kotlin.Unit>): com.afollestad.materialdialogs.MaterialDialog;
				public onProvideKeyboardShortcuts(param0: java.util.List<any>, param1: globalAndroid.view.Menu, param2: number): void;
				public onWindowAttributesChanged(param0: globalAndroid.view.WindowManager.LayoutParams): void;
				public onContentChanged(): void;
				public setCancelable$core(param0: boolean): void;
				public icon(param0: java.lang.Integer, param1: globalAndroid.graphics.drawable.Drawable): com.afollestad.materialdialogs.MaterialDialog;
				public onPanelClosed(param0: number, param1: globalAndroid.view.Menu): void;
				public onDetachedFromWindow(): void;
				public getButtonFont(): globalAndroid.graphics.Typeface;
				/** @deprecated */
				public clearNeutralListeners(): com.afollestad.materialdialogs.MaterialDialog;
				public onSearchRequested(): boolean;
				public getPreShowListeners$core(): java.util.List<kotlin.jvm.functions.Function1<com.afollestad.materialdialogs.MaterialDialog,kotlin.Unit>>;
				public setCanceledOnTouchOutside(param0: boolean): void;
				public show(param0: kotlin.jvm.functions.Function1<any,kotlin.Unit>): com.afollestad.materialdialogs.MaterialDialog;
				public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: globalAndroid.content.DialogInterface.OnCancelListener);
				public getTitleFont(): globalAndroid.graphics.Typeface;
				public setCancelOnTouchOutside$core(param0: boolean): void;
				public getWindowContext(): globalAndroid.content.Context;
				public getAutoDismissEnabled(): boolean;
				public onMenuItemSelected(param0: number, param1: globalAndroid.view.MenuItem): boolean;
				public onCreatePanelMenu(param0: number, param1: globalAndroid.view.Menu): boolean;
				public getShowListeners$core(): java.util.List<kotlin.jvm.functions.Function1<com.afollestad.materialdialogs.MaterialDialog,kotlin.Unit>>;
				public clearNegativeListeners(): com.afollestad.materialdialogs.MaterialDialog;
				public setButtonFont$core(param0: globalAndroid.graphics.Typeface): void;
				public debugMode(param0: boolean): com.afollestad.materialdialogs.MaterialDialog;
				public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback, param1: number): globalAndroid.view.ActionMode;
				public dismiss(): void;
				public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
				public cancelOnTouchOutside(param0: boolean): com.afollestad.materialdialogs.MaterialDialog;
				public dispatchGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public getCancelOnTouchOutside(): boolean;
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public onMenuOpened(param0: number, param1: globalAndroid.view.Menu): boolean;
				public static getDEFAULT_BEHAVIOR(): com.afollestad.materialdialogs.DialogBehavior;
				public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
				public setCornerRadius$core(param0: java.lang.Float): void;
				/** @deprecated */
				public setCanceledOnTouchOutside(param0: boolean): void;
				public title(param0: java.lang.Integer, param1: string): com.afollestad.materialdialogs.MaterialDialog;
				public onActionButtonClicked$core(param0: com.afollestad.materialdialogs.WhichButton): void;
				public onActionModeStarted(param0: globalAndroid.view.ActionMode): void;
				public getDialogBehavior(): com.afollestad.materialdialogs.DialogBehavior;
				public getCornerRadius(): java.lang.Float;
				public getCancelable(): boolean;
				public onSearchRequested(param0: any): boolean;
				public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
				public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public setCancelable(param0: boolean): void;
				/** @deprecated */
				public setCancelable(param0: boolean): void;
				public onCreateContextMenu(param0: globalAndroid.view.ContextMenu, param1: globalAndroid.view.View, param2: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
				public onCreatePanelView(param0: number): globalAndroid.view.View;
				public setAutoDismissEnabled$core(param0: boolean): void;
				public setBodyFont$core(param0: globalAndroid.graphics.Typeface): void;
				public positiveButton(param0: java.lang.Integer, param1: string, param2: kotlin.jvm.functions.Function1<any,kotlin.Unit>): com.afollestad.materialdialogs.MaterialDialog;
				public onWindowFocusChanged(param0: boolean): void;
				public getCancelListeners$core(): java.util.List<kotlin.jvm.functions.Function1<com.afollestad.materialdialogs.MaterialDialog,kotlin.Unit>>;
				public noAutoDismiss(): com.afollestad.materialdialogs.MaterialDialog;
				public onAttachedToWindow(): void;
				public getConfig(): java.util.Map<string,any>;
				public setTitleFont$core(param0: globalAndroid.graphics.Typeface): void;
			}
			export module MaterialDialog {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.MaterialDialog.Companion>;
					public getDEFAULT_BEHAVIOR(): com.afollestad.materialdialogs.DialogBehavior;
					public setDEFAULT_BEHAVIOR(param0: com.afollestad.materialdialogs.DialogBehavior): void;
				}
				export class WhenMappings extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.MaterialDialog.WhenMappings>;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export class MaterialDialogKt extends java.lang.Object {
				public static class: java.lang.Class<com.afollestad.materialdialogs.MaterialDialogKt>;
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export class ModalDialog extends java.lang.Object implements com.afollestad.materialdialogs.DialogBehavior {
				public static class: java.lang.Class<com.afollestad.materialdialogs.ModalDialog>;
				public static INSTANCE: com.afollestad.materialdialogs.ModalDialog;
				public getDialogLayout(param0: globalAndroid.view.ViewGroup): com.afollestad.materialdialogs.internal.main.DialogLayout;
				public onPreShow(param0: com.afollestad.materialdialogs.MaterialDialog): void;
				public onDismiss(): boolean;
				public getThemeRes(param0: boolean): number;
				public onPostShow(param0: com.afollestad.materialdialogs.MaterialDialog): void;
				public setWindowConstraints(param0: globalAndroid.content.Context, param1: globalAndroid.view.Window, param2: com.afollestad.materialdialogs.internal.main.DialogLayout, param3: java.lang.Integer): void;
				public createView(param0: globalAndroid.content.Context, param1: globalAndroid.view.Window, param2: globalAndroid.view.LayoutInflater, param3: com.afollestad.materialdialogs.MaterialDialog): globalAndroid.view.ViewGroup;
				public setBackgroundColor(param0: com.afollestad.materialdialogs.internal.main.DialogLayout, param1: number, param2: number): void;
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export class ThemeKt extends java.lang.Object {
				public static class: java.lang.Class<com.afollestad.materialdialogs.ThemeKt>;
				public static inferTheme(param0: globalAndroid.content.Context, param1: com.afollestad.materialdialogs.DialogBehavior): number;
				public static inferThemeIsLight(param0: globalAndroid.content.Context): boolean;
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export class WhichButton {
				public static class: java.lang.Class<com.afollestad.materialdialogs.WhichButton>;
				public static POSITIVE: com.afollestad.materialdialogs.WhichButton;
				public static NEGATIVE: com.afollestad.materialdialogs.WhichButton;
				public static NEUTRAL: com.afollestad.materialdialogs.WhichButton;
				public static Companion: com.afollestad.materialdialogs.WhichButton.Companion;
				public static valueOf(param0: string): com.afollestad.materialdialogs.WhichButton;
				public getIndex(): number;
				public static values(): Array<com.afollestad.materialdialogs.WhichButton>;
				public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
			}
			export module WhichButton {
				export class Companion extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.WhichButton.Companion>;
					public fromIndex(param0: number): com.afollestad.materialdialogs.WhichButton;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module actions {
				export class DialogActionExtKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.actions.DialogActionExtKt>;
					public static hasActionButton(param0: com.afollestad.materialdialogs.MaterialDialog, param1: com.afollestad.materialdialogs.WhichButton): boolean;
					public static getActionButton(param0: com.afollestad.materialdialogs.MaterialDialog, param1: com.afollestad.materialdialogs.WhichButton): com.afollestad.materialdialogs.internal.button.DialogActionButton;
					public static setActionButtonEnabled(param0: com.afollestad.materialdialogs.MaterialDialog, param1: com.afollestad.materialdialogs.WhichButton, param2: boolean): void;
					public static hasActionButtons(param0: com.afollestad.materialdialogs.MaterialDialog): boolean;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module callbacks {
				export class DialogCallbackExtKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.callbacks.DialogCallbackExtKt>;
					public static onPreShow(param0: com.afollestad.materialdialogs.MaterialDialog, param1: kotlin.jvm.functions.Function1<any,kotlin.Unit>): com.afollestad.materialdialogs.MaterialDialog;
					public static invokeAll(param0: java.util.List<kotlin.jvm.functions.Function1<com.afollestad.materialdialogs.MaterialDialog,kotlin.Unit>>, param1: com.afollestad.materialdialogs.MaterialDialog): void;
					public static onCancel(param0: com.afollestad.materialdialogs.MaterialDialog, param1: kotlin.jvm.functions.Function1<any,kotlin.Unit>): com.afollestad.materialdialogs.MaterialDialog;
					public static onShow(param0: com.afollestad.materialdialogs.MaterialDialog, param1: kotlin.jvm.functions.Function1<any,kotlin.Unit>): com.afollestad.materialdialogs.MaterialDialog;
					public static onDismiss(param0: com.afollestad.materialdialogs.MaterialDialog, param1: kotlin.jvm.functions.Function1<any,kotlin.Unit>): com.afollestad.materialdialogs.MaterialDialog;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module checkbox {
				export class DialogCheckboxExtKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.checkbox.DialogCheckboxExtKt>;
					public static checkBoxPrompt(param0: com.afollestad.materialdialogs.MaterialDialog, param1: number, param2: string, param3: boolean, param4: kotlin.jvm.functions.Function1<any,kotlin.Unit>): com.afollestad.materialdialogs.MaterialDialog;
					public static isCheckPromptChecked(param0: com.afollestad.materialdialogs.MaterialDialog): boolean;
					public static getCheckBoxPrompt(param0: com.afollestad.materialdialogs.MaterialDialog): globalAndroid.widget.CheckBox;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module customview {
				export class DialogCustomViewExtKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.customview.DialogCustomViewExtKt>;
					public static CUSTOM_VIEW_NO_VERTICAL_PADDING: string;
					public static customView(param0: com.afollestad.materialdialogs.MaterialDialog, param1: java.lang.Integer, param2: globalAndroid.view.View, param3: boolean, param4: boolean, param5: boolean, param6: boolean): com.afollestad.materialdialogs.MaterialDialog;
					public static getCustomView(param0: com.afollestad.materialdialogs.MaterialDialog): globalAndroid.view.View;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module button {
					export class DialogActionButton extends androidx.appcompat.widget.AppCompatButton {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.button.DialogActionButton>;
						public static Companion: com.afollestad.materialdialogs.internal.button.DialogActionButton.Companion;
						public constructor(param0: globalAndroid.content.Context);
						public sendAccessibilityEvent(param0: number): void;
						public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public getAutoSizeTextAvailableSizes(): number[];
						public updateTextColor(param0: number): void;
						public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setAutoSizeTextTypeUniformWithPresetSizes(param0: number[], param1: number): void;
						public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
						public update$core(param0: globalAndroid.content.Context, param1: globalAndroid.content.Context, param2: boolean): void;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public getAutoSizeStepGranularity(): number;
						public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public setAutoSizeTextTypeWithDefaults(param0: number): void;
						public getAutoSizeMinTextSize(): number;
						public setEnabled(param0: boolean): void;
						public getAutoSizeTextType(): number;
						public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getAutoSizeMaxTextSize(): number;
						public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public onPreDraw(): boolean;
						public setAutoSizeTextTypeUniformWithConfiguration(param0: number, param1: number, param2: number, param3: number): void;
					}
					export module DialogActionButton {
						export class Companion extends java.lang.Object {
							public static class: java.lang.Class<com.afollestad.materialdialogs.internal.button.DialogActionButton.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module button {
					export class DialogActionButtonLayout extends com.afollestad.materialdialogs.internal.main.BaseSubLayout {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.button.DialogActionButtonLayout>;
						public actionButtons: Array<com.afollestad.materialdialogs.internal.button.DialogActionButton>;
						public checkBoxPrompt: androidx.appcompat.widget.AppCompatCheckBox;
						public static INDEX_POSITIVE: number;
						public static INDEX_NEGATIVE: number;
						public static INDEX_NEUTRAL: number;
						public static Companion: com.afollestad.materialdialogs.internal.button.DialogActionButtonLayout.Companion;
						public isLayoutRequested(): boolean;
						public canResolveLayoutDirection(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public sendAccessibilityEvent(param0: number): void;
						public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
						public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public getCheckBoxPrompt(): androidx.appcompat.widget.AppCompatCheckBox;
						public onFinishInflate(): void;
						public clearChildFocus(param0: globalAndroid.view.View): void;
						public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						public setCheckBoxPrompt(param0: androidx.appcompat.widget.AppCompatCheckBox): void;
						/** @deprecated */
						public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
						public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
						public isTextAlignmentResolved(): boolean;
						public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
						public onMeasure(param0: number, param1: number): void;
						public getTextDirection(): number;
						public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
						public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						public removeView(param0: globalAndroid.view.View): void;
						public getVisibleButtons(): Array<com.afollestad.materialdialogs.internal.button.DialogActionButton>;
						public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
						public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number[]): void;
						public recomputeViewAttributes(param0: globalAndroid.view.View): void;
						public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
						public canResolveTextDirection(): boolean;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public isLayoutDirectionResolved(): boolean;
						public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public requestLayout(): void;
						public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
						public setActionButtons(param0: Array<com.afollestad.materialdialogs.internal.button.DialogActionButton>): void;
						public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
						public bringChildToFront(param0: globalAndroid.view.View): void;
						public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public addView(param0: globalAndroid.view.View, param1: number): void;
						public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
						public isTextDirectionResolved(): boolean;
						public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
						public onStopNestedScroll(param0: globalAndroid.view.View): void;
						public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public requestTransparentRegion(param0: globalAndroid.view.View): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View): void;
						public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setStackButtons$core(param0: boolean): void;
						public getActionButtons(): Array<com.afollestad.materialdialogs.internal.button.DialogActionButton>;
						public childDrawableStateChanged(param0: globalAndroid.view.View): void;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public requestFitSystemWindows(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public focusableViewAvailable(param0: globalAndroid.view.View): void;
						public focusSearch(param0: number): globalAndroid.view.View;
						public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public getTextAlignment(): number;
						public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						/** @deprecated */
						public invalidateChildInParent(param0: number[], param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public getStackButtons$core(): boolean;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
					}
					export module DialogActionButtonLayout {
						export class Companion extends java.lang.Object {
							public static class: java.lang.Class<com.afollestad.materialdialogs.internal.button.DialogActionButtonLayout.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module button {
					export class DialogActionButtonLayoutKt extends java.lang.Object {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.button.DialogActionButtonLayoutKt>;
						public static shouldBeVisible(param0: com.afollestad.materialdialogs.internal.button.DialogActionButtonLayout): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module list {
					export class CheckPayload extends java.lang.Object {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.list.CheckPayload>;
						public static INSTANCE: com.afollestad.materialdialogs.internal.list.CheckPayload;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module list {
					export class DialogAdapter<IT, SL>  extends java.lang.Object {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.list.DialogAdapter<any,any>>;
						/**
						 * Constructs a new instance of the com.afollestad.materialdialogs.internal.list.DialogAdapter<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							replaceItems(param0: java.util.List<any>, param1: SL): void;
							disableItems(param0: number[]): void;
							checkItems(param0: number[]): void;
							uncheckItems(param0: number[]): void;
							toggleItems(param0: number[]): void;
							checkAllItems(): void;
							uncheckAllItems(): void;
							toggleAllChecked(): void;
							isItemChecked(param0: number): boolean;
							getItemCount(): number;
							positiveButtonClicked(): void;
						});
						public constructor();
						public replaceItems(param0: java.util.List<any>, param1: SL): void;
						public isItemChecked(param0: number): boolean;
						public disableItems(param0: number[]): void;
						public uncheckAllItems(): void;
						public checkItems(param0: number[]): void;
						public getItemCount(): number;
						public positiveButtonClicked(): void;
						public uncheckItems(param0: number[]): void;
						public toggleAllChecked(): void;
						public toggleItems(param0: number[]): void;
						public checkAllItems(): void;
					}
					export module DialogAdapter {
						export class DefaultImpls extends java.lang.Object {
							public static class: java.lang.Class<com.afollestad.materialdialogs.internal.list.DialogAdapter.DefaultImpls>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module list {
					export class DialogRecyclerView extends androidx.recyclerview.widget.RecyclerView {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.list.DialogRecyclerView>;
						public isLayoutRequested(): boolean;
						public dispatchNestedPreScroll(param0: number, param1: number, param2: number[], param3: number[]): boolean;
						public canResolveLayoutDirection(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public stopNestedScroll(param0: number): void;
						public sendAccessibilityEvent(param0: number): void;
						public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
						public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public clearChildFocus(param0: globalAndroid.view.View): void;
						public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						/** @deprecated */
						public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
						public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
						public computeHorizontalScrollOffset(): number;
						public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
						public isTextAlignmentResolved(): boolean;
						public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[]): boolean;
						public hasNestedScrollingParent(param0: number): boolean;
						public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
						public getTextDirection(): number;
						public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public computeVerticalScrollOffset(): number;
						public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
						public hasNestedScrollingParent(): boolean;
						public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: number[], param5: number): boolean;
						public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						public removeView(param0: globalAndroid.view.View): void;
						public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
						public invalidateDividers(): void;
						public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public dispatchNestedPreScroll(param0: number, param1: number, param2: number[], param3: number[], param4: number): boolean;
						public onScrollChanged(param0: number, param1: number, param2: number, param3: number): void;
						public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number[]): void;
						public recomputeViewAttributes(param0: globalAndroid.view.View): void;
						public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
						public canResolveTextDirection(): boolean;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public isLayoutDirectionResolved(): boolean;
						public startNestedScroll(param0: number): boolean;
						public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public requestLayout(): void;
						public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
						public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
						public bringChildToFront(param0: globalAndroid.view.View): void;
						public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public addView(param0: globalAndroid.view.View, param1: number): void;
						public computeHorizontalScrollExtent(): number;
						public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
						public isTextDirectionResolved(): boolean;
						public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
						public computeVerticalScrollRange(): number;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public onAttachedToWindow(): void;
						public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
						public onStopNestedScroll(param0: globalAndroid.view.View): void;
						public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public requestTransparentRegion(param0: globalAndroid.view.View): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View): void;
						public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public childDrawableStateChanged(param0: globalAndroid.view.View): void;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public requestFitSystemWindows(): void;
						public stopNestedScroll(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public onDetachedFromWindow(): void;
						public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public focusableViewAvailable(param0: globalAndroid.view.View): void;
						public focusSearch(param0: number): globalAndroid.view.View;
						public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public startNestedScroll(param0: number, param1: number): boolean;
						public getTextAlignment(): number;
						public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
						public computeHorizontalScrollRange(): number;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						/** @deprecated */
						public invalidateChildInParent(param0: number[], param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public attach(param0: com.afollestad.materialdialogs.MaterialDialog): void;
						public computeVerticalScrollExtent(): number;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module list {
					export class DialogRecyclerViewKt extends java.lang.Object {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.list.DialogRecyclerViewKt>;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module list {
					export class MultiChoiceDialogAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.afollestad.materialdialogs.internal.list.MultiChoiceViewHolder> implements com.afollestad.materialdialogs.internal.list.DialogAdapter<string,kotlin.jvm.functions.Function3<any,any,any,any>>  {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.list.MultiChoiceDialogAdapter>;
						public isItemChecked(param0: number): boolean;
						public onBindViewHolder(param0: com.afollestad.materialdialogs.internal.list.MultiChoiceViewHolder, param1: number, param2: java.util.List<any>): void;
						public getSelection$core(): kotlin.jvm.functions.Function3<com.afollestad.materialdialogs.MaterialDialog,number[],java.util.List<any>,kotlin.Unit>;
						public constructor(param0: com.afollestad.materialdialogs.MaterialDialog, param1: java.util.List<any>, param2: number[], param3: number[], param4: boolean, param5: boolean, param6: kotlin.jvm.functions.Function3<any,any,any,kotlin.Unit>);
						public onBindViewHolder(param0: com.afollestad.materialdialogs.internal.list.MultiChoiceViewHolder, param1: number): void;
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): any;
						public setSelection$core(param0: kotlin.jvm.functions.Function3<any,any,any,kotlin.Unit>): void;
						public itemClicked$core(param0: number): void;
						public uncheckAllItems(): void;
						public getItems$core(): java.util.List<string>;
						public onBindViewHolder(param0: any, param1: number, param2: java.util.List<any>): void;
						public replaceItems(param0: java.util.List<any>, param1: any): void;
						public checkAllItems(): void;
						public constructor();
						public disableItems(param0: number[]): void;
						public toggleItems(param0: number[]): void;
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.afollestad.materialdialogs.internal.list.MultiChoiceViewHolder;
						public setItems$core(param0: java.util.List<any>): void;
						public getItemCount(): number;
						public checkItems(param0: number[]): void;
						public replaceItems(param0: java.util.List<any>, param1: kotlin.jvm.functions.Function3<any,any,any,kotlin.Unit>): void;
						public positiveButtonClicked(): void;
						public uncheckItems(param0: number[]): void;
						public toggleAllChecked(): void;
						public onBindViewHolder(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module list {
					export class MultiChoiceViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder implements globalAndroid.view.View.OnClickListener {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.list.MultiChoiceViewHolder>;
						public getControlView(): androidx.appcompat.widget.AppCompatCheckBox;
						public constructor(param0: globalAndroid.view.View, param1: com.afollestad.materialdialogs.internal.list.MultiChoiceDialogAdapter);
						public constructor(param0: globalAndroid.view.View);
						public getTitleView(): globalAndroid.widget.TextView;
						public isEnabled(): boolean;
						public setEnabled(param0: boolean): void;
						public onClick(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module list {
					export class PlainListDialogAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.afollestad.materialdialogs.internal.list.PlainListViewHolder> implements com.afollestad.materialdialogs.internal.list.DialogAdapter<string,kotlin.jvm.functions.Function3<any,any,any,any>>  {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.list.PlainListDialogAdapter>;
						public isItemChecked(param0: number): boolean;
						public itemClicked(param0: number): void;
						public constructor();
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.afollestad.materialdialogs.internal.list.PlainListViewHolder;
						public disableItems(param0: number[]): void;
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): any;
						public setSelection$core(param0: kotlin.jvm.functions.Function3<any,any,any,kotlin.Unit>): void;
						public toggleItems(param0: number[]): void;
						public getSelection$core(): kotlin.jvm.functions.Function3<com.afollestad.materialdialogs.MaterialDialog,java.lang.Integer,string,kotlin.Unit>;
						public onBindViewHolder(param0: com.afollestad.materialdialogs.internal.list.PlainListViewHolder, param1: number): void;
						public uncheckAllItems(): void;
						public getItems$core(): java.util.List<string>;
						public onBindViewHolder(param0: any, param1: number, param2: java.util.List<any>): void;
						public setItems$core(param0: java.util.List<any>): void;
						public getItemCount(): number;
						public checkItems(param0: number[]): void;
						public replaceItems(param0: java.util.List<any>, param1: any): void;
						public replaceItems(param0: java.util.List<any>, param1: kotlin.jvm.functions.Function3<any,any,any,kotlin.Unit>): void;
						public positiveButtonClicked(): void;
						public uncheckItems(param0: number[]): void;
						public constructor(param0: com.afollestad.materialdialogs.MaterialDialog, param1: java.util.List<any>, param2: number[], param3: boolean, param4: kotlin.jvm.functions.Function3<any,any,any,kotlin.Unit>);
						public toggleAllChecked(): void;
						public checkAllItems(): void;
						public onBindViewHolder(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module list {
					export class PlainListDialogAdapterKt extends java.lang.Object {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.list.PlainListDialogAdapterKt>;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module list {
					export class PlainListViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder implements globalAndroid.view.View.OnClickListener {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.list.PlainListViewHolder>;
						public constructor(param0: globalAndroid.view.View, param1: com.afollestad.materialdialogs.internal.list.PlainListDialogAdapter);
						public constructor(param0: globalAndroid.view.View);
						public getTitleView(): globalAndroid.widget.TextView;
						public onClick(param0: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module list {
					export class SingleChoiceDialogAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.afollestad.materialdialogs.internal.list.SingleChoiceViewHolder> implements com.afollestad.materialdialogs.internal.list.DialogAdapter<string,kotlin.jvm.functions.Function3<any,any,any,any>>  {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.list.SingleChoiceDialogAdapter>;
						public isItemChecked(param0: number): boolean;
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): any;
						public setSelection$core(param0: kotlin.jvm.functions.Function3<any,any,any,kotlin.Unit>): void;
						public itemClicked$core(param0: number): void;
						public onBindViewHolder(param0: com.afollestad.materialdialogs.internal.list.SingleChoiceViewHolder, param1: number): void;
						public uncheckAllItems(): void;
						public getItems$core(): java.util.List<string>;
						public onBindViewHolder(param0: any, param1: number, param2: java.util.List<any>): void;
						public replaceItems(param0: java.util.List<any>, param1: any): void;
						public checkAllItems(): void;
						public constructor(param0: com.afollestad.materialdialogs.MaterialDialog, param1: java.util.List<any>, param2: number[], param3: number, param4: boolean, param5: kotlin.jvm.functions.Function3<any,any,any,kotlin.Unit>);
						public constructor();
						public disableItems(param0: number[]): void;
						public toggleItems(param0: number[]): void;
						public getSelection$core(): kotlin.jvm.functions.Function3<com.afollestad.materialdialogs.MaterialDialog,java.lang.Integer,string,kotlin.Unit>;
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.afollestad.materialdialogs.internal.list.SingleChoiceViewHolder;
						public setItems$core(param0: java.util.List<any>): void;
						public getItemCount(): number;
						public checkItems(param0: number[]): void;
						public replaceItems(param0: java.util.List<any>, param1: kotlin.jvm.functions.Function3<any,any,any,kotlin.Unit>): void;
						public onBindViewHolder(param0: com.afollestad.materialdialogs.internal.list.SingleChoiceViewHolder, param1: number, param2: java.util.List<any>): void;
						public positiveButtonClicked(): void;
						public uncheckItems(param0: number[]): void;
						public toggleAllChecked(): void;
						public onBindViewHolder(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module list {
					export class SingleChoiceViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder implements globalAndroid.view.View.OnClickListener {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.list.SingleChoiceViewHolder>;
						public constructor(param0: globalAndroid.view.View);
						public getControlView(): androidx.appcompat.widget.AppCompatRadioButton;
						public getTitleView(): globalAndroid.widget.TextView;
						public isEnabled(): boolean;
						public setEnabled(param0: boolean): void;
						public onClick(param0: globalAndroid.view.View): void;
						public constructor(param0: globalAndroid.view.View, param1: com.afollestad.materialdialogs.internal.list.SingleChoiceDialogAdapter);
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module list {
					export class UncheckPayload extends java.lang.Object {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.list.UncheckPayload>;
						public static INSTANCE: com.afollestad.materialdialogs.internal.list.UncheckPayload;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module main {
					export abstract class BaseSubLayout extends globalAndroid.view.ViewGroup {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.main.BaseSubLayout>;
						public dialog: com.afollestad.materialdialogs.MaterialDialog;
						public isLayoutRequested(): boolean;
						public canResolveLayoutDirection(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public sendAccessibilityEvent(param0: number): void;
						public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
						public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public clearChildFocus(param0: globalAndroid.view.View): void;
						public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						/** @deprecated */
						public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
						public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
						public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
						public isTextAlignmentResolved(): boolean;
						public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
						public getTextDirection(): number;
						public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
						public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						public removeView(param0: globalAndroid.view.View): void;
						public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
						public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public dividerPaint(): globalAndroid.graphics.Paint;
						public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number[]): void;
						public recomputeViewAttributes(param0: globalAndroid.view.View): void;
						public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
						public canResolveTextDirection(): boolean;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public setDialog(param0: com.afollestad.materialdialogs.MaterialDialog): void;
						public isLayoutDirectionResolved(): boolean;
						public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public requestLayout(): void;
						public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
						public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
						public bringChildToFront(param0: globalAndroid.view.View): void;
						public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public addView(param0: globalAndroid.view.View, param1: number): void;
						public setDrawDivider(param0: boolean): void;
						public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
						public isTextDirectionResolved(): boolean;
						public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public getDrawDivider(): boolean;
						public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
						public onStopNestedScroll(param0: globalAndroid.view.View): void;
						public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public requestTransparentRegion(param0: globalAndroid.view.View): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View): void;
						public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public childDrawableStateChanged(param0: globalAndroid.view.View): void;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public requestFitSystemWindows(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public focusableViewAvailable(param0: globalAndroid.view.View): void;
						public focusSearch(param0: number): globalAndroid.view.View;
						public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public getDialog(): com.afollestad.materialdialogs.MaterialDialog;
						public getTextAlignment(): number;
						public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						/** @deprecated */
						public invalidateChildInParent(param0: number[], param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public getDividerHeight(): number;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module main {
					export class DialogLayout extends globalAndroid.widget.FrameLayout {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.main.DialogLayout>;
						public dialog: com.afollestad.materialdialogs.MaterialDialog;
						public titleLayout: com.afollestad.materialdialogs.internal.main.DialogTitleLayout;
						public contentLayout: com.afollestad.materialdialogs.internal.message.DialogContentLayout;
						public isLayoutRequested(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
						public setDebugMode(param0: boolean): void;
						public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
						public setTitleLayout(param0: com.afollestad.materialdialogs.internal.main.DialogTitleLayout): void;
						public onMeasure(param0: number, param1: number): void;
						public getTextDirection(): number;
						public setButtonsLayout(param0: com.afollestad.materialdialogs.internal.button.DialogActionButtonLayout): void;
						public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
						public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
						public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number[]): void;
						public recomputeViewAttributes(param0: globalAndroid.view.View): void;
						public canResolveTextDirection(): boolean;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public requestLayout(): void;
						public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
						public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
						public bringChildToFront(param0: globalAndroid.view.View): void;
						public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public addView(param0: globalAndroid.view.View, param1: number): void;
						public attachButtonsLayout(param0: com.afollestad.materialdialogs.internal.button.DialogActionButtonLayout): void;
						public getTitleLayout(): com.afollestad.materialdialogs.internal.main.DialogTitleLayout;
						public isTextDirectionResolved(): boolean;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public onAttachedToWindow(): void;
						public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
						public getLayoutMode(): com.afollestad.materialdialogs.LayoutMode;
						public requestTransparentRegion(param0: globalAndroid.view.View): void;
						public getMaxHeight(): number;
						public setContentLayout(param0: com.afollestad.materialdialogs.internal.message.DialogContentLayout): void;
						public addView(param0: globalAndroid.view.View): void;
						public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
						public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
						public childDrawableStateChanged(param0: globalAndroid.view.View): void;
						public requestFitSystemWindows(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public getTextAlignment(): number;
						public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
						public getFrameMarginVerticalLess$core(): number;
						/** @deprecated */
						public invalidateChildInParent(param0: number[], param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public setLayoutMode(param0: com.afollestad.materialdialogs.LayoutMode): void;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public canResolveLayoutDirection(): boolean;
						public getContentLayout(): com.afollestad.materialdialogs.internal.message.DialogContentLayout;
						public sendAccessibilityEvent(param0: number): void;
						public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public onFinishInflate(): void;
						public clearChildFocus(param0: globalAndroid.view.View): void;
						public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						/** @deprecated */
						public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
						public isTextAlignmentResolved(): boolean;
						public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
						public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public getLayoutMode(): number;
						public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						public removeView(param0: globalAndroid.view.View): void;
						public setMaxHeight(param0: number): void;
						public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public getDebugMode(): boolean;
						public getButtonsLayout(): com.afollestad.materialdialogs.internal.button.DialogActionButtonLayout;
						public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setDialog(param0: com.afollestad.materialdialogs.MaterialDialog): void;
						public isLayoutDirectionResolved(): boolean;
						public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
						public getCornerRadii(): number[];
						public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
						public setCornerRadii(param0: number[]): void;
						public onStopNestedScroll(param0: globalAndroid.view.View): void;
						public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public focusableViewAvailable(param0: globalAndroid.view.View): void;
						public focusSearch(param0: number): globalAndroid.view.View;
						public attachDialog(param0: com.afollestad.materialdialogs.MaterialDialog): void;
						public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public invalidateDividers(param0: boolean, param1: boolean): void;
						public getDialog(): com.afollestad.materialdialogs.MaterialDialog;
						public setLayoutMode(param0: number): void;
						public getFrameMarginVertical$core(): number;
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module main {
					export class DialogScrollView extends globalAndroid.widget.ScrollView {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.main.DialogScrollView>;
						public getRootView(): com.afollestad.materialdialogs.internal.main.DialogLayout;
						public isLayoutRequested(): boolean;
						public canResolveLayoutDirection(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public sendAccessibilityEvent(param0: number): void;
						public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
						public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public clearChildFocus(param0: globalAndroid.view.View): void;
						public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						/** @deprecated */
						public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
						public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
						public getRootView(): globalAndroid.view.View;
						public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
						public isTextAlignmentResolved(): boolean;
						public setRootView(param0: com.afollestad.materialdialogs.internal.main.DialogLayout): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
						public getTextDirection(): number;
						public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
						public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						public removeView(param0: globalAndroid.view.View): void;
						public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
						public invalidateDividers(): void;
						public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public onScrollChanged(param0: number, param1: number, param2: number, param3: number): void;
						public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number[]): void;
						public recomputeViewAttributes(param0: globalAndroid.view.View): void;
						public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
						public canResolveTextDirection(): boolean;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public isLayoutDirectionResolved(): boolean;
						public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public requestLayout(): void;
						public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
						public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
						public bringChildToFront(param0: globalAndroid.view.View): void;
						public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public addView(param0: globalAndroid.view.View, param1: number): void;
						public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
						public isTextDirectionResolved(): boolean;
						public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public onAttachedToWindow(): void;
						public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
						public onStopNestedScroll(param0: globalAndroid.view.View): void;
						public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public requestTransparentRegion(param0: globalAndroid.view.View): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View): void;
						public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public childDrawableStateChanged(param0: globalAndroid.view.View): void;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public requestFitSystemWindows(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public focusableViewAvailable(param0: globalAndroid.view.View): void;
						public focusSearch(param0: number): globalAndroid.view.View;
						public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public getTextAlignment(): number;
						public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						/** @deprecated */
						public invalidateChildInParent(param0: number[], param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module main {
					export class DialogTitleLayout extends com.afollestad.materialdialogs.internal.main.BaseSubLayout {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.main.DialogTitleLayout>;
						public iconView: globalAndroid.widget.ImageView;
						public titleView: globalAndroid.widget.TextView;
						public isLayoutRequested(): boolean;
						public canResolveLayoutDirection(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public shouldNotBeVisible(): boolean;
						public sendAccessibilityEvent(param0: number): void;
						public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
						public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public onFinishInflate(): void;
						public clearChildFocus(param0: globalAndroid.view.View): void;
						public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						/** @deprecated */
						public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
						public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
						public getTitleView$core(): globalAndroid.widget.TextView;
						public isTextAlignmentResolved(): boolean;
						public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
						public onMeasure(param0: number, param1: number): void;
						public getTextDirection(): number;
						public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
						public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						public removeView(param0: globalAndroid.view.View): void;
						public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
						public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number[]): void;
						public setTitleView$core(param0: globalAndroid.widget.TextView): void;
						public recomputeViewAttributes(param0: globalAndroid.view.View): void;
						public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
						public canResolveTextDirection(): boolean;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public isLayoutDirectionResolved(): boolean;
						public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public setIconView$core(param0: globalAndroid.widget.ImageView): void;
						public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public requestLayout(): void;
						public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
						public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
						public bringChildToFront(param0: globalAndroid.view.View): void;
						public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public addView(param0: globalAndroid.view.View, param1: number): void;
						public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
						public isTextDirectionResolved(): boolean;
						public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
						public onStopNestedScroll(param0: globalAndroid.view.View): void;
						public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public requestTransparentRegion(param0: globalAndroid.view.View): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View): void;
						public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public childDrawableStateChanged(param0: globalAndroid.view.View): void;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public requestFitSystemWindows(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public getIconView$core(): globalAndroid.widget.ImageView;
						public focusableViewAvailable(param0: globalAndroid.view.View): void;
						public focusSearch(param0: number): globalAndroid.view.View;
						public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public getTextAlignment(): number;
						public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						/** @deprecated */
						public invalidateChildInParent(param0: number[], param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module message {
					export class CustomUrlSpan extends globalAndroid.text.style.URLSpan {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.message.CustomUrlSpan>;
						public constructor(param0: globalAndroid.os.Parcel);
						public constructor();
						public constructor(param0: string, param1: kotlin.jvm.functions.Function1<any,kotlin.Unit>);
						public getSpanTypeId(): number;
						public onClick(param0: globalAndroid.view.View): void;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module message {
					export class DialogContentLayout extends globalAndroid.widget.FrameLayout {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.message.DialogContentLayout>;
						public isLayoutRequested(): boolean;
						public canResolveLayoutDirection(): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public sendAccessibilityEvent(param0: number): void;
						public onStartNestedScroll(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
						public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public clearChildFocus(param0: globalAndroid.view.View): void;
						public requestChildFocus(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						/** @deprecated */
						public invalidateChild(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect): void;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public onNestedFling(param0: globalAndroid.view.View, param1: number, param2: number, param3: boolean): boolean;
						public childHasTransientStateChanged(param0: globalAndroid.view.View, param1: boolean): void;
						public isTextAlignmentResolved(): boolean;
						public addCustomView(param0: java.lang.Integer, param1: globalAndroid.view.View, param2: boolean, param3: boolean, param4: boolean): globalAndroid.view.View;
						public modifyScrollViewPadding(param0: number, param1: number): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: number): void;
						public onMeasure(param0: number, param1: number): void;
						public getTextDirection(): number;
						public showContextMenuForChild(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
						public onDescendantInvalidated(param0: globalAndroid.view.View, param1: globalAndroid.view.View): void;
						public removeView(param0: globalAndroid.view.View): void;
						public setRecyclerView(param0: com.afollestad.materialdialogs.internal.list.DialogRecyclerView): void;
						public getChildVisibleRect(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.Point): boolean;
						public getScrollView(): com.afollestad.materialdialogs.internal.main.DialogScrollView;
						public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public onNestedPreScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number[]): void;
						public recomputeViewAttributes(param0: globalAndroid.view.View): void;
						public showContextMenuForChild(param0: globalAndroid.view.View): boolean;
						public canResolveTextDirection(): boolean;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public isLayoutDirectionResolved(): boolean;
						public onNestedScroll(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public addView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public requestLayout(): void;
						public notifySubtreeAccessibilityStateChanged(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
						public keyboardNavigationClusterSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
						public bringChildToFront(param0: globalAndroid.view.View): void;
						public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
						public addView(param0: globalAndroid.view.View, param1: number): void;
						public requestChildRectangleOnScreen(param0: globalAndroid.view.View, param1: globalAndroid.graphics.Rect, param2: boolean): boolean;
						public isTextDirectionResolved(): boolean;
						public startActionModeForChild(param0: globalAndroid.view.View, param1: globalAndroid.view.ActionMode.Callback, param2: number): globalAndroid.view.ActionMode;
						/** @deprecated */
						public requestFitSystemWindows(): void;
						public setCustomView(param0: globalAndroid.view.View): void;
						public setMessage(param0: com.afollestad.materialdialogs.MaterialDialog, param1: java.lang.Integer, param2: string, param3: globalAndroid.graphics.Typeface, param4: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
						public focusSearch(param0: globalAndroid.view.View, param1: number): globalAndroid.view.View;
						public onStopNestedScroll(param0: globalAndroid.view.View): void;
						public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public requestTransparentRegion(param0: globalAndroid.view.View): void;
						public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
						public addView(param0: globalAndroid.view.View): void;
						public addRecyclerView(param0: com.afollestad.materialdialogs.MaterialDialog, param1: androidx.recyclerview.widget.RecyclerView.Adapter<any>, param2: androidx.recyclerview.widget.RecyclerView.LayoutManager): void;
						public onNestedPreFling(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
						public createContextMenu(param0: globalAndroid.view.ContextMenu): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getRecyclerView(): com.afollestad.materialdialogs.internal.list.DialogRecyclerView;
						public childDrawableStateChanged(param0: globalAndroid.view.View): void;
						public haveMoreThanOneChild(): boolean;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public requestFitSystemWindows(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public setScrollView(param0: com.afollestad.materialdialogs.internal.main.DialogScrollView): void;
						public updateViewLayout(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
						public getCustomView(): globalAndroid.view.View;
						public getParentForAccessibility(): globalAndroid.view.ViewParent;
						public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public focusableViewAvailable(param0: globalAndroid.view.View): void;
						public focusSearch(param0: number): globalAndroid.view.View;
						public requestSendAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
						public getTextAlignment(): number;
						public onNestedScrollAccepted(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						/** @deprecated */
						public invalidateChildInParent(param0: number[], param1: globalAndroid.graphics.Rect): globalAndroid.view.ViewParent;
						public modifyFirstAndLastPadding(param0: number, param1: number): void;
						public getParent(): globalAndroid.view.ViewParent;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module message {
					export class LinkTransformationMethod extends java.lang.Object implements globalAndroid.text.method.TransformationMethod {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.message.LinkTransformationMethod>;
						public getTransformation(param0: string, param1: globalAndroid.view.View): string;
						public constructor(param0: kotlin.jvm.functions.Function1<any,kotlin.Unit>);
						public onFocusChanged(param0: globalAndroid.view.View, param1: string, param2: boolean, param3: number, param4: globalAndroid.graphics.Rect): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module internal {
				export module rtl {
					export class RtlTextView extends androidx.appcompat.widget.AppCompatTextView {
						public static class: java.lang.Class<com.afollestad.materialdialogs.internal.rtl.RtlTextView>;
						public constructor(param0: globalAndroid.content.Context);
						public sendAccessibilityEvent(param0: number): void;
						public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
						public getAutoSizeTextAvailableSizes(): number[];
						public setSupportBackgroundTintList(param0: globalAndroid.content.res.ColorStateList): void;
						public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getSupportBackgroundTintMode(): globalAndroid.graphics.PorterDuff.Mode;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setAutoSizeTextTypeUniformWithPresetSizes(param0: number[], param1: number): void;
						public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
						public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public getAutoSizeStepGranularity(): number;
						public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public setAutoSizeTextTypeWithDefaults(param0: number): void;
						public getAutoSizeMinTextSize(): number;
						public getAutoSizeTextType(): number;
						public getSupportBackgroundTintList(): globalAndroid.content.res.ColorStateList;
						public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getAutoSizeMaxTextSize(): number;
						public setSupportBackgroundTintMode(param0: globalAndroid.graphics.PorterDuff.Mode): void;
						public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
						public onPreDraw(): boolean;
						public setAutoSizeTextTypeUniformWithConfiguration(param0: number, param1: number, param2: number, param3: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module list {
				export class DialogListExtKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.list.DialogListExtKt>;
					public static getItemSelector(param0: com.afollestad.materialdialogs.MaterialDialog): globalAndroid.graphics.drawable.Drawable;
					public static getListAdapter(param0: com.afollestad.materialdialogs.MaterialDialog): androidx.recyclerview.widget.RecyclerView.Adapter<any>;
					public static getRecyclerView(param0: com.afollestad.materialdialogs.MaterialDialog): androidx.recyclerview.widget.RecyclerView;
					public static customListAdapter(param0: com.afollestad.materialdialogs.MaterialDialog, param1: androidx.recyclerview.widget.RecyclerView.Adapter<any>, param2: androidx.recyclerview.widget.RecyclerView.LayoutManager): com.afollestad.materialdialogs.MaterialDialog;
					public static listItems(param0: com.afollestad.materialdialogs.MaterialDialog, param1: java.lang.Integer, param2: java.util.List<any>, param3: number[], param4: boolean, param5: kotlin.jvm.functions.Function3<any,any,any,kotlin.Unit>): com.afollestad.materialdialogs.MaterialDialog;
					public static updateListItems(param0: com.afollestad.materialdialogs.MaterialDialog, param1: java.lang.Integer, param2: java.util.List<any>, param3: number[], param4: kotlin.jvm.functions.Function3<any,any,any,kotlin.Unit>): com.afollestad.materialdialogs.MaterialDialog;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module list {
				export class DialogMultiChoiceExtKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.list.DialogMultiChoiceExtKt>;
					public static uncheckItems(param0: com.afollestad.materialdialogs.MaterialDialog, param1: number[]): void;
					public static checkAllItems(param0: com.afollestad.materialdialogs.MaterialDialog): void;
					public static listItemsMultiChoice(param0: com.afollestad.materialdialogs.MaterialDialog, param1: java.lang.Integer, param2: java.util.List<any>, param3: number[], param4: number[], param5: boolean, param6: boolean, param7: kotlin.jvm.functions.Function3<any,any,any,kotlin.Unit>): com.afollestad.materialdialogs.MaterialDialog;
					public static uncheckAllItems(param0: com.afollestad.materialdialogs.MaterialDialog): void;
					public static toggleAllItemsChecked(param0: com.afollestad.materialdialogs.MaterialDialog): void;
					public static toggleItemsChecked(param0: com.afollestad.materialdialogs.MaterialDialog, param1: number[]): void;
					public static updateListItemsMultiChoice(param0: com.afollestad.materialdialogs.MaterialDialog, param1: java.lang.Integer, param2: java.util.List<any>, param3: number[], param4: kotlin.jvm.functions.Function3<any,any,any,kotlin.Unit>): com.afollestad.materialdialogs.MaterialDialog;
					public static checkItems(param0: com.afollestad.materialdialogs.MaterialDialog, param1: number[]): void;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module list {
				export class DialogSingleChoiceExtKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.list.DialogSingleChoiceExtKt>;
					public static isItemChecked(param0: com.afollestad.materialdialogs.MaterialDialog, param1: number): boolean;
					public static toggleItemChecked(param0: com.afollestad.materialdialogs.MaterialDialog, param1: number): void;
					public static uncheckItem(param0: com.afollestad.materialdialogs.MaterialDialog, param1: number): void;
					public static checkItem(param0: com.afollestad.materialdialogs.MaterialDialog, param1: number): void;
					public static updateListItemsSingleChoice(param0: com.afollestad.materialdialogs.MaterialDialog, param1: java.lang.Integer, param2: java.util.List<any>, param3: number[], param4: kotlin.jvm.functions.Function3<any,any,any,kotlin.Unit>): com.afollestad.materialdialogs.MaterialDialog;
					public static listItemsSingleChoice(param0: com.afollestad.materialdialogs.MaterialDialog, param1: java.lang.Integer, param2: java.util.List<any>, param3: number[], param4: number, param5: boolean, param6: kotlin.jvm.functions.Function3<any,any,any,kotlin.Unit>): com.afollestad.materialdialogs.MaterialDialog;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module list {
				export class ListCallbacksKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.list.ListCallbacksKt>;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module message {
				export class DialogMessageSettings extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.message.DialogMessageSettings>;
					public constructor(param0: com.afollestad.materialdialogs.MaterialDialog, param1: globalAndroid.widget.TextView);
					public lineSpacing(param0: number): com.afollestad.materialdialogs.message.DialogMessageSettings;
					public setText$core(param0: java.lang.Integer, param1: string): void;
					public getMessageTextView(): globalAndroid.widget.TextView;
					public html(param0: kotlin.jvm.functions.Function1<any,kotlin.Unit>): com.afollestad.materialdialogs.message.DialogMessageSettings;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module utils {
				export class ArraysKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.utils.ArraysKt>;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module utils {
				export class ColorsKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.utils.ColorsKt>;
					public static resolveColors(param0: com.afollestad.materialdialogs.MaterialDialog, param1: number[], param2: kotlin.jvm.functions.Function1<any,java.lang.Integer>): number[];
					public static adjustAlpha(param0: number, param1: number): number;
					public static resolveColor(param0: com.afollestad.materialdialogs.MaterialDialog, param1: java.lang.Integer, param2: java.lang.Integer, param3: kotlin.jvm.functions.Function0<java.lang.Integer>): number;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module utils {
				export class DialogsKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.utils.DialogsKt>;
					public static hideKeyboard(param0: com.afollestad.materialdialogs.MaterialDialog): void;
					public static populateText(param0: com.afollestad.materialdialogs.MaterialDialog, param1: globalAndroid.widget.TextView, param2: java.lang.Integer, param3: string, param4: number, param5: globalAndroid.graphics.Typeface, param6: java.lang.Integer): void;
					public static invalidateDividers(param0: com.afollestad.materialdialogs.MaterialDialog, param1: boolean, param2: boolean): void;
					public static preShow(param0: com.afollestad.materialdialogs.MaterialDialog): void;
					public static populateIcon(param0: com.afollestad.materialdialogs.MaterialDialog, param1: globalAndroid.widget.ImageView, param2: java.lang.Integer, param3: globalAndroid.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module utils {
				export class DimensKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.utils.DimensKt>;
					public static dimen(param0: com.afollestad.materialdialogs.MaterialDialog, param1: java.lang.Integer, param2: java.lang.Integer, param3: number): number;
					public static dp(param0: globalAndroid.view.View, param1: number): number;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module utils {
				export class FontsKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.utils.FontsKt>;
					public static font(param0: com.afollestad.materialdialogs.MaterialDialog, param1: java.lang.Integer, param2: java.lang.Integer): globalAndroid.graphics.Typeface;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module utils {
				export class IntArraysKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.utils.IntArraysKt>;
					public static removeAll(param0: number[], param1: java.util.Collection<java.lang.Integer>): number[];
					public static appendAll(param0: number[], param1: java.util.Collection<java.lang.Integer>): number[];
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module utils {
				export class MDUtil extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.utils.MDUtil>;
					public static INSTANCE: com.afollestad.materialdialogs.utils.MDUtil;
					public resolveString(param0: globalAndroid.content.Context, param1: java.lang.Integer, param2: java.lang.Integer, param3: boolean): string;
					public createColorSelector(param0: globalAndroid.content.Context, param1: number, param2: number): globalAndroid.content.res.ColorStateList;
					public waitForHeight(param0: globalAndroid.view.View, param1: kotlin.jvm.functions.Function1): void;
					public additionalPaddingForFont(param0: globalAndroid.widget.TextView): number;
					public updatePadding(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public resolveDimen(param0: globalAndroid.content.Context, param1: number, param2: kotlin.jvm.functions.Function0<java.lang.Float>): number;
					public getWidthAndHeight(param0: globalAndroid.view.WindowManager): kotlin.Pair<java.lang.Integer,java.lang.Integer>;
					public getStringArray(param0: globalAndroid.content.Context, param1: java.lang.Integer): string[];
					public resolveColors(param0: globalAndroid.content.Context, param1: number[], param2: kotlin.jvm.functions.Function1<any,java.lang.Integer>): number[];
					public resolveInt(param0: globalAndroid.content.Context, param1: number, param2: number): number;
					public resolveDrawable(param0: globalAndroid.content.Context, param1: java.lang.Integer, param2: java.lang.Integer, param3: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public resolveFloat(param0: globalAndroid.content.Context, param1: number, param2: number): number;
					public dimenPx(param0: globalAndroid.view.View, param1: number): number;
					public assertOneSet(param0: string, param1: any, param2: java.lang.Integer): void;
					public isLandscape(param0: globalAndroid.content.Context): boolean;
					public textChanged(param0: globalAndroid.widget.EditText, param1: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
					public ifNotZero(param0: java.lang.Integer, param1: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
					public inflate(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.content.Context, param2: number): globalAndroid.view.View;
					public resolveString(param0: com.afollestad.materialdialogs.MaterialDialog, param1: java.lang.Integer, param2: java.lang.Integer, param3: boolean): string;
					public waitForWidth(param0: globalAndroid.view.View, param1: kotlin.jvm.functions.Function1): void;
					public resolveColor(param0: globalAndroid.content.Context, param1: java.lang.Integer, param2: java.lang.Integer, param3: kotlin.jvm.functions.Function0<java.lang.Integer>): number;
					public isColorDark(param0: number, param1: number): boolean;
					public maybeSetTextColor(param0: globalAndroid.widget.TextView, param1: globalAndroid.content.Context, param2: java.lang.Integer, param3: java.lang.Integer): void;
				}
			}
		}
	}
}

declare module com {
	export module afollestad {
		export module materialdialogs {
			export module utils {
				export class ViewsKt extends java.lang.Object {
					public static class: java.lang.Class<com.afollestad.materialdialogs.utils.ViewsKt>;
					public static isVisible(param0: globalAndroid.view.View): boolean;
					public static inflate(param0: com.afollestad.materialdialogs.MaterialDialog, param1: number, param2: globalAndroid.view.ViewGroup): any;
					public static isRtl(param0: globalAndroid.view.View): boolean;
					public static setGravityStartCompat(param0: globalAndroid.widget.TextView): void;
					public static setGravityEndCompat(param0: globalAndroid.widget.TextView): void;
					public static inflate(param0: globalAndroid.view.ViewGroup, param1: number, param2: globalAndroid.view.ViewGroup): any;
					public static isNotVisible(param0: globalAndroid.view.View): boolean;
				}
			}
		}
	}
}

//Generics information:
//com.afollestad.materialdialogs.internal.list.DialogAdapter:2

