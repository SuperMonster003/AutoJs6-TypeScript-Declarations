declare module com {
	export module jaredrummler {
		export module android {
			export module colorpicker {
				export class AlphaPatternDrawable extends android.graphics.drawable.Drawable {
					public static class: java.lang.Class<com.jaredrummler.android.colorpicker.AlphaPatternDrawable>;
					public onBoundsChange(bounds: android.graphics.Rect): void;
					public draw(canvas: android.graphics.Canvas): void;
					public setColorFilter(color: number, mode: android.graphics.PorterDuff.Mode): void;
					public setColorFilter(cf: android.graphics.ColorFilter): void;
					public setAlpha(alpha: number): void;
					public setAlpha(param0: number): void;
					public setColorFilter(param0: android.graphics.ColorFilter): void;
					public draw(param0: android.graphics.Canvas): void;
					public getOpacity(): number;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module android {
			export module colorpicker {
				export class BuildConfig extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.android.colorpicker.BuildConfig>;
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
			export module colorpicker {
				export class ColorPaletteAdapter extends android.widget.BaseAdapter {
					public static class: java.lang.Class<com.jaredrummler.android.colorpicker.ColorPaletteAdapter>;
					public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
					public getItem(position: number): any;
					public getCount(): number;
					public areAllItemsEnabled(): boolean;
					public isEnabled(position: number): boolean;
					public getDropDownView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
					public getView(position: number, convertView: android.view.View, parent: android.view.ViewGroup): android.view.View;
					public isEnabled(param0: number): boolean;
					public getItemId(position: number): number;
				}
				export module ColorPaletteAdapter {
					export class OnColorSelectedListener extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.android.colorpicker.ColorPaletteAdapter.OnColorSelectedListener>;
						/**
						 * Constructs a new instance of the com.jaredrummler.android.colorpicker.ColorPaletteAdapter$OnColorSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onColorSelected(param0: number): void;
						});
						public constructor();
						public onColorSelected(param0: number): void;
					}
					export class ViewHolder extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.android.colorpicker.ColorPaletteAdapter.ViewHolder>;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module android {
			export module colorpicker {
				export class ColorPanelView extends android.view.View {
					public static class: java.lang.Class<com.jaredrummler.android.colorpicker.ColorPanelView>;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public setOriginalColor(color: number): void;
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public getBorderColor(): number;
					public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyle: number);
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public setBorderColor(color: number): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public getShape(): number;
					public sendAccessibilityEvent(param0: number): void;
					public onDraw(canvas: android.graphics.Canvas): void;
					public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
					public setColor(color: number): void;
					public constructor(context: android.content.Context);
					public getColor(): number;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public setShape(shape: number): void;
					public onRestoreInstanceState(state: android.os.Parcelable): void;
					public showHint(): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public onSaveInstanceState(): android.os.Parcelable;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module android {
			export module colorpicker {
				export class ColorPickerDialog extends androidx.fragment.app.DialogFragment implements com.jaredrummler.android.colorpicker.ColorPickerView.OnColorChangedListener, android.text.TextWatcher {
					public static class: java.lang.Class<com.jaredrummler.android.colorpicker.ColorPickerDialog>;
					public static TYPE_CUSTOM: number;
					public static TYPE_PRESETS: number;
					public static MATERIAL_COLORS: number[];
					public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
					public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					public static newBuilder(): com.jaredrummler.android.colorpicker.ColorPickerDialog.Builder;
					public getViewModelStore(): androidx.lifecycle.ViewModelStore;
					public onLowMemory(): void;
					public onStart(): void;
					public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
					public onColorChanged(newColor: number): void;
					public constructor();
					public afterTextChanged(s: android.text.Editable): void;
					public onCreateDialog(param0: android.os.Bundle): android.app.Dialog;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public constructor(param0: number);
					public setColorPickerDialogListener(colorPickerDialogListener: com.jaredrummler.android.colorpicker.ColorPickerDialogListener): void;
					public onTextChanged(s: string, start: number, before: number, count: number): void;
					public onDismiss(param0: android.content.DialogInterface): void;
					public onSaveInstanceState(outState: android.os.Bundle): void;
					public beforeTextChanged(s: string, start: number, count: number, after: number): void;
					public onCreateDialog(savedInstanceState: android.os.Bundle): android.app.Dialog;
					public afterTextChanged(param0: android.text.Editable): void;
					public getLifecycle(): androidx.lifecycle.Lifecycle;
					public onCancel(param0: android.content.DialogInterface): void;
					public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
					public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
					public onSaveInstanceState(param0: android.os.Bundle): void;
					public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
					public onColorChanged(param0: number): void;
					public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					public onDismiss(dialog: android.content.DialogInterface): void;
				}
				export module ColorPickerDialog {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.android.colorpicker.ColorPickerDialog.Builder>;
						public setDialogId(dialogId: number): com.jaredrummler.android.colorpicker.ColorPickerDialog.Builder;
						public setCustomButtonText(customButtonText: number): com.jaredrummler.android.colorpicker.ColorPickerDialog.Builder;
						public setSelectedButtonText(selectedButtonText: number): com.jaredrummler.android.colorpicker.ColorPickerDialog.Builder;
						public setDialogType(dialogType: number): com.jaredrummler.android.colorpicker.ColorPickerDialog.Builder;
						public setPresetsButtonText(presetsButtonText: number): com.jaredrummler.android.colorpicker.ColorPickerDialog.Builder;
						public setColorShape(colorShape: number): com.jaredrummler.android.colorpicker.ColorPickerDialog.Builder;
						public setColor(color: number): com.jaredrummler.android.colorpicker.ColorPickerDialog.Builder;
						public create(): com.jaredrummler.android.colorpicker.ColorPickerDialog;
						public show(activity: androidx.fragment.app.FragmentActivity): void;
						public setPresets(presets: number[]): com.jaredrummler.android.colorpicker.ColorPickerDialog.Builder;
						public setAllowPresets(allowPresets: boolean): com.jaredrummler.android.colorpicker.ColorPickerDialog.Builder;
						public setAllowCustom(allowCustom: boolean): com.jaredrummler.android.colorpicker.ColorPickerDialog.Builder;
						public setShowColorShades(showColorShades: boolean): com.jaredrummler.android.colorpicker.ColorPickerDialog.Builder;
						public setDialogTitle(dialogTitle: number): com.jaredrummler.android.colorpicker.ColorPickerDialog.Builder;
						public setShowAlphaSlider(showAlphaSlider: boolean): com.jaredrummler.android.colorpicker.ColorPickerDialog.Builder;
					}
					export class DialogType extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.jaredrummler.android.colorpicker.ColorPickerDialog.DialogType>;
						/**
						 * Constructs a new instance of the com.jaredrummler.android.colorpicker.ColorPickerDialog$DialogType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module colorpicker {
				export class ColorPickerDialogListener extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.android.colorpicker.ColorPickerDialogListener>;
					/**
					 * Constructs a new instance of the com.jaredrummler.android.colorpicker.ColorPickerDialogListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onColorSelected(param0: number, param1: number): void;
						onDialogDismissed(param0: number): void;
					});
					public constructor();
					public onColorSelected(param0: number, param1: number): void;
					public onDialogDismissed(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module android {
			export module colorpicker {
				export class ColorPickerView extends android.view.View {
					public static class: java.lang.Class<com.jaredrummler.android.colorpicker.ColorPickerView>;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public getBorderColor(): number;
					public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyle: number);
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					public getAlphaSliderText(): string;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public getPaddingLeft(): number;
					public setBorderColor(color: number): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public onTouchEvent(event: android.view.MotionEvent): boolean;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public getPaddingTop(): number;
					public sendAccessibilityEvent(param0: number): void;
					public onDraw(canvas: android.graphics.Canvas): void;
					public setSliderTrackerColor(color: number): void;
					public setAlphaSliderText(text: string): void;
					public getPaddingRight(): number;
					public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
					public setColor(color: number): void;
					public constructor(context: android.content.Context);
					public getColor(): number;
					public getPaddingBottom(): number;
					public setColor(color: number, callback: boolean): void;
					public getSliderTrackerColor(): number;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public setOnColorChangedListener(listener: com.jaredrummler.android.colorpicker.ColorPickerView.OnColorChangedListener): void;
					public onRestoreInstanceState(state: android.os.Parcelable): void;
					public setAlphaSliderVisible(visible: boolean): void;
					public setAlphaSliderText(res: number): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public onSaveInstanceState(): android.os.Parcelable;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				}
				export module ColorPickerView {
					export class BitmapCache extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.android.colorpicker.ColorPickerView.BitmapCache>;
						public canvas: android.graphics.Canvas;
						public bitmap: android.graphics.Bitmap;
						public value: number;
					}
					export class OnColorChangedListener extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.android.colorpicker.ColorPickerView.OnColorChangedListener>;
						/**
						 * Constructs a new instance of the com.jaredrummler.android.colorpicker.ColorPickerView$OnColorChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onColorChanged(param0: number): void;
						});
						public constructor();
						public onColorChanged(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module android {
			export module colorpicker {
				export class ColorPreference extends android.preference.Preference implements com.jaredrummler.android.colorpicker.ColorPickerDialogListener {
					public static class: java.lang.Class<com.jaredrummler.android.colorpicker.ColorPreference>;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onColorSelected(dialogId: number, color: number): void;
					public constructor(context: android.content.Context);
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public onDialogDismissed(dialogId: number): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyle: number);
					public onAttachedToActivity(): void;
					public saveValue(color: number): void;
					public getFragmentTag(): string;
					public getPresets(): number[];
					public setPresets(presets: number[]): void;
					public setOnShowDialogListener(listener: com.jaredrummler.android.colorpicker.ColorPreference.OnShowDialogListener): void;
					public onGetDefaultValue(a: android.content.res.TypedArray, index: number): any;
					public onBindView(view: android.view.View): void;
					public onClick(): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public onColorSelected(param0: number, param1: number): void;
					public onDialogDismissed(param0: number): void;
					public onSetInitialValue(restorePersistedValue: boolean, defaultValue: any): void;
				}
				export module ColorPreference {
					export class OnShowDialogListener extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.android.colorpicker.ColorPreference.OnShowDialogListener>;
						/**
						 * Constructs a new instance of the com.jaredrummler.android.colorpicker.ColorPreference$OnShowDialogListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onShowColorPickerDialog(param0: string, param1: number): void;
						});
						public constructor();
						public onShowColorPickerDialog(param0: string, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module android {
			export module colorpicker {
				export class ColorPreferenceCompat extends androidx.preference.Preference implements com.jaredrummler.android.colorpicker.ColorPickerDialogListener {
					public static class: java.lang.Class<com.jaredrummler.android.colorpicker.ColorPreferenceCompat>;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onColorSelected(dialogId: number, color: number): void;
					public setOnShowDialogListener(listener: com.jaredrummler.android.colorpicker.ColorPreferenceCompat.OnShowDialogListener): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyle: number);
					public onAttached(): void;
					public saveValue(color: number): void;
					public getFragmentTag(): string;
					public onSetInitialValue(defaultValue: any): void;
					public getPresets(): number[];
					public setPresets(presets: number[]): void;
					public onSetInitialValue(param0: any): void;
					public onGetDefaultValue(a: android.content.res.TypedArray, index: number): any;
					public getActivity(): androidx.fragment.app.FragmentActivity;
					public onClick(): void;
					public onColorSelected(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public onDialogDismissed(dialogId: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public onSetInitialValue(param0: boolean, param1: any): void;
					public onBindViewHolder(holder: androidx.preference.PreferenceViewHolder): void;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public onGetDefaultValue(param0: android.content.res.TypedArray, param1: number): any;
					public onBindViewHolder(param0: androidx.preference.PreferenceViewHolder): void;
					public onDialogDismissed(param0: number): void;
				}
				export module ColorPreferenceCompat {
					export class OnShowDialogListener extends java.lang.Object {
						public static class: java.lang.Class<com.jaredrummler.android.colorpicker.ColorPreferenceCompat.OnShowDialogListener>;
						/**
						 * Constructs a new instance of the com.jaredrummler.android.colorpicker.ColorPreferenceCompat$OnShowDialogListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onShowColorPickerDialog(param0: string, param1: number): void;
						});
						public constructor();
						public onShowColorPickerDialog(param0: string, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module android {
			export module colorpicker {
				export class ColorShape extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<com.jaredrummler.android.colorpicker.ColorShape>;
					/**
					 * Constructs a new instance of the com.jaredrummler.android.colorpicker.ColorShape interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public static CIRCLE: number;
					public static SQUARE: number;
					public equals(param0: any): boolean;
					public equals(obj: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module android {
			export module colorpicker {
				export class DrawingUtils extends java.lang.Object {
					public static class: java.lang.Class<com.jaredrummler.android.colorpicker.DrawingUtils>;
				}
			}
		}
	}
}

declare module com {
	export module jaredrummler {
		export module android {
			export module colorpicker {
				export class NestedGridView extends android.widget.GridView {
					public static class: java.lang.Class<com.jaredrummler.android.colorpicker.NestedGridView>;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
					public focusableViewAvailable(v: android.view.View): void;
					public removeView(child: android.view.View): void;
					public isTextDirectionResolved(): boolean;
					public showContextMenuForChild(param0: android.view.View): boolean;
					public onStopNestedScroll(child: android.view.View): void;
					public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
					public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
					public recomputeViewAttributes(child: android.view.View): void;
					public addView(child: android.view.View, index: number): void;
					public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public getLayoutDirection(): number;
					public getParentForAccessibility(): android.view.ViewParent;
					public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
					public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
					public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
					public createContextMenu(param0: android.view.ContextMenu): void;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public childDrawableStateChanged(param0: android.view.View): void;
					public onFilterComplete(param0: number): void;
					public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
					public isTextAlignmentResolved(): boolean;
					public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public sendAccessibilityEvent(eventType: number): void;
					public requestChildFocus(child: android.view.View, focused: android.view.View): void;
					public canResolveTextAlignment(): boolean;
					/** @deprecated */
					public requestFitSystemWindows(): void;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
					public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
					public showContextMenuForChild(originalView: android.view.View): boolean;
					public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
					public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
					public sendAccessibilityEvent(param0: number): void;
					public requestLayout(): void;
					public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public onTextChanged(s: string, start: number, before: number, count: number): void;
					public getTextAlignment(): number;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
					public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
					public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
					public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
					public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
					public focusSearch(param0: android.view.View, param1: number): android.view.View;
					public bringChildToFront(child: android.view.View): void;
					public onTouchModeChanged(param0: boolean): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
					public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
					public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
					public onFilterComplete(count: number): void;
					public isLayoutRequested(): boolean;
					public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyle: number);
					public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
					public clearChildFocus(param0: android.view.View): void;
					public clearChildFocus(child: android.view.View): void;
					public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
					public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public isLayoutDirectionResolved(): boolean;
					public focusSearch(focused: android.view.View, direction: number): android.view.View;
					public addView(child: android.view.View): void;
					public onTouchModeChanged(isInTouchMode: boolean): void;
					public afterTextChanged(s: android.text.Editable): void;
					public addView(child: android.view.View, width: number, height: number): void;
					public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
					public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
					public bringChildToFront(param0: android.view.View): void;
					public constructor(context: android.content.Context);
					public beforeTextChanged(s: string, start: number, count: number, after: number): void;
					public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
					public onGlobalLayout(): void;
					public afterTextChanged(param0: android.text.Editable): void;
					public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
					public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
					public getTextDirection(): number;
					public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					public requestFitSystemWindows(): void;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public requestTransparentRegion(param0: android.view.View): void;
					public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
					public canResolveTextDirection(): boolean;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public getParent(): android.view.ViewParent;
					public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
					public createContextMenu(menu: android.view.ContextMenu): void;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public onStopNestedScroll(param0: android.view.View): void;
					public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
					public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
					public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
					public canResolveLayoutDirection(): boolean;
					public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
					public requestTransparentRegion(child: android.view.View): void;
					public removeView(param0: android.view.View): void;
					public childDrawableStateChanged(child: android.view.View): void;
					public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public recomputeViewAttributes(param0: android.view.View): void;
					public focusableViewAvailable(param0: android.view.View): void;
					public focusSearch(direction: number): android.view.View;
					public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
					public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				}
			}
		}
	}
}

//Generics information:

