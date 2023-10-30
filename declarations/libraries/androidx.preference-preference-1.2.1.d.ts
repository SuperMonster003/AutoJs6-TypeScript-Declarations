declare module androidx {
	export module preference {
		export class AndroidResources extends java.lang.Object {
			public static class: java.lang.Class<androidx.preference.AndroidResources>;
			public static ANDROID_R_ICON_FRAME: number;
		}
	}
}

declare module androidx {
	export module preference {
		export class CheckBoxPreference extends androidx.preference.TwoStatePreference {
			public static class: java.lang.Class<androidx.preference.CheckBoxPreference>;
			public constructor(context: android.content.Context);
			public performClick(view: android.view.View): void;
			public onBindViewHolder(holder: androidx.preference.PreferenceViewHolder): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
			public performClick(): void;
		}
		export module CheckBoxPreference {
			export class Listener extends java.lang.Object implements android.widget.CompoundButton.OnCheckedChangeListener {
				public static class: java.lang.Class<androidx.preference.CheckBoxPreference.Listener>;
				public onCheckedChanged(buttonView: android.widget.CompoundButton, isChecked: boolean): void;
				public onCheckedChanged(param0: android.widget.CompoundButton, param1: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module preference {
		export abstract class DialogPreference extends androidx.preference.Preference {
			public static class: java.lang.Class<androidx.preference.DialogPreference>;
			public setDialogTitle(dialogTitleResId: number): void;
			public onClick(): void;
			public setDialogIcon(dialogIconRes: number): void;
			public setNegativeButtonText(negativeButtonTextResId: number): void;
			public setDialogMessage(dialogMessage: string): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
			public getDialogIcon(): android.graphics.drawable.Drawable;
			public setDialogIcon(dialogIcon: android.graphics.drawable.Drawable): void;
			public setDialogMessage(dialogMessageResId: number): void;
			public getNegativeButtonText(): string;
			public constructor(context: android.content.Context);
			public setPositiveButtonText(positiveButtonText: string): void;
			public getDialogTitle(): string;
			public getDialogMessage(): string;
			public setDialogLayoutResource(dialogLayoutResId: number): void;
			public setDialogTitle(dialogTitle: string): void;
			public getDialogLayoutResource(): number;
			public getPositiveButtonText(): string;
			public setPositiveButtonText(positiveButtonTextResId: number): void;
			public setNegativeButtonText(negativeButtonText: string): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
		}
		export module DialogPreference {
			export class TargetFragment extends java.lang.Object {
				public static class: java.lang.Class<androidx.preference.DialogPreference.TargetFragment>;
				/**
				 * Constructs a new instance of the androidx.preference.DialogPreference$TargetFragment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					findPreference(param0: string): androidx.preference.Preference;
				});
				public constructor();
				public findPreference(param0: string): androidx.preference.Preference;
			}
		}
	}
}

declare module androidx {
	export module preference {
		export class DropDownPreference extends androidx.preference.ListPreference {
			public static class: java.lang.Class<androidx.preference.DropDownPreference>;
			public onClick(): void;
			public setValueIndex(index: number): void;
			public constructor(context: android.content.Context);
			public notifyChanged(): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyle: number);
			public setEntries(entries: string[]): void;
			public onBindViewHolder(holder: androidx.preference.PreferenceViewHolder): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
			public setEntries(entriesResId: number): void;
			public createAdapter(): android.widget.ArrayAdapter<any>;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
		}
	}
}

declare module androidx {
	export module preference {
		export class EditTextPreference extends androidx.preference.DialogPreference {
			public static class: java.lang.Class<androidx.preference.EditTextPreference>;
			public onSetInitialValue(defaultValue: any): void;
			public getText(): string;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
			public setText(text: string): void;
			public onRestoreInstanceState(state: android.os.Parcelable): void;
			public onGetDefaultValue(a: android.content.res.TypedArray, index: number): any;
			public shouldDisableDependents(): boolean;
			public constructor(context: android.content.Context);
			/** @deprecated */
			public onSetInitialValue(restorePersistedValue: boolean, defaultValue: any): void;
			public setOnBindEditTextListener(onBindEditTextListener: androidx.preference.EditTextPreference.OnBindEditTextListener): void;
			public onSaveInstanceState(): android.os.Parcelable;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
		}
		export module EditTextPreference {
			export class OnBindEditTextListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.preference.EditTextPreference.OnBindEditTextListener>;
				/**
				 * Constructs a new instance of the androidx.preference.EditTextPreference$OnBindEditTextListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onBindEditText(param0: android.widget.EditText): void;
				});
				public constructor();
				public onBindEditText(param0: android.widget.EditText): void;
			}
			export class SavedState extends androidx.preference.Preference.BaseSavedState {
				public static class: java.lang.Class<androidx.preference.EditTextPreference.SavedState>;
				public static CREATOR: android.os.Parcelable.Creator<androidx.preference.EditTextPreference.SavedState>;
				public writeToParcel(dest: android.os.Parcel, flags: number): void;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
			}
			export class SimpleSummaryProvider extends androidx.preference.Preference.SummaryProvider<androidx.preference.EditTextPreference> {
				public static class: java.lang.Class<androidx.preference.EditTextPreference.SimpleSummaryProvider>;
				public provideSummary(preference: androidx.preference.EditTextPreference): string;
				public provideSummary(param0: any): string;
				public static getInstance(): androidx.preference.EditTextPreference.SimpleSummaryProvider;
			}
		}
	}
}

declare module androidx {
	export module preference {
		export class EditTextPreferenceDialogFragment extends androidx.preference.PreferenceDialogFragment {
			public static class: java.lang.Class<androidx.preference.EditTextPreferenceDialogFragment>;
			/** @deprecated */
			public static newInstance(key: string): androidx.preference.EditTextPreferenceDialogFragment;
			public onClick(param0: android.content.DialogInterface, param1: number): void;
			public onCreate(savedInstanceState: android.os.Bundle): void;
			/** @deprecated */
			public onBindDialogView(view: android.view.View): void;
			public onDismiss(param0: android.content.DialogInterface): void;
			public onSaveInstanceState(outState: android.os.Bundle): void;
			public needInputMethod(): boolean;
			/** @deprecated */
			public onDialogClosed(positiveResult: boolean): void;
			/** @deprecated */
			public onClick(dialog: android.content.DialogInterface, which: number): void;
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			/** @deprecated */
			public constructor();
			public onTrimMemory(param0: number): void;
			public onBindDialogView(view: android.view.View): void;
			public onTrimMemory(level: number): void;
			public onCancel(param0: android.content.DialogInterface): void;
			/** @deprecated */
			public onDialogClosed(param0: boolean): void;
			public onDismiss(dialog: android.content.DialogInterface): void;
			public onCancel(dialog: android.content.DialogInterface): void;
			public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
		}
	}
}

declare module androidx {
	export module preference {
		export class EditTextPreferenceDialogFragmentCompat extends androidx.preference.PreferenceDialogFragmentCompat {
			public static class: java.lang.Class<androidx.preference.EditTextPreferenceDialogFragmentCompat>;
			public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
			public onConfigurationChanged(param0: android.content.res.Configuration): void;
			public onClick(param0: android.content.DialogInterface, param1: number): void;
			public onCreate(savedInstanceState: android.os.Bundle): void;
			public scheduleShowSoftInput(): void;
			public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
			public onDismiss(param0: android.content.DialogInterface): void;
			public constructor(param0: number);
			public onClick(dialog: android.content.DialogInterface, which: number): void;
			public constructor();
			public onSaveInstanceState(outState: android.os.Bundle): void;
			public getLifecycle(): androidx.lifecycle.Lifecycle;
			public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
			public onLowMemory(): void;
			public getViewModelStore(): androidx.lifecycle.ViewModelStore;
			public needInputMethod(): boolean;
			public onDialogClosed(positiveResult: boolean): void;
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			public onBindDialogView(view: android.view.View): void;
			public onDialogClosed(param0: boolean): void;
			public onCancel(param0: android.content.DialogInterface): void;
			public static newInstance(key: string): androidx.preference.EditTextPreferenceDialogFragmentCompat;
			public onDismiss(dialog: android.content.DialogInterface): void;
			public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
		}
	}
}

declare module androidx {
	export module preference {
		export class ExpandButton extends androidx.preference.Preference {
			public static class: java.lang.Class<androidx.preference.ExpandButton>;
			public onBindViewHolder(holder: androidx.preference.PreferenceViewHolder): void;
		}
	}
}

declare module androidx {
	export module preference {
		export class ListPreference extends androidx.preference.DialogPreference {
			public static class: java.lang.Class<androidx.preference.ListPreference>;
			public setSummary(summary: string): void;
			public setValueIndex(index: number): void;
			public onSetInitialValue(defaultValue: any): void;
			public setEntries(entries: string[]): void;
			public findIndexOfValue(value: string): number;
			public setEntryValues(entryValues: string[]): void;
			public getEntryValues(): string[];
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
			public setSummary(summaryResId: number): void;
			public onRestoreInstanceState(state: android.os.Parcelable): void;
			public setEntries(entriesResId: number): void;
			public onGetDefaultValue(a: android.content.res.TypedArray, index: number): any;
			public constructor(context: android.content.Context);
			/** @deprecated */
			public onSetInitialValue(restorePersistedValue: boolean, defaultValue: any): void;
			public getSummary(): string;
			public setValue(value: string): void;
			public setEntryValues(entryValuesResId: number): void;
			public getEntry(): string;
			public getEntries(): string[];
			public getValue(): string;
			public onSaveInstanceState(): android.os.Parcelable;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
		}
		export module ListPreference {
			export class SavedState extends androidx.preference.Preference.BaseSavedState {
				public static class: java.lang.Class<androidx.preference.ListPreference.SavedState>;
				public static CREATOR: android.os.Parcelable.Creator<androidx.preference.ListPreference.SavedState>;
				public writeToParcel(dest: android.os.Parcel, flags: number): void;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
			}
			export class SimpleSummaryProvider extends androidx.preference.Preference.SummaryProvider<androidx.preference.ListPreference> {
				public static class: java.lang.Class<androidx.preference.ListPreference.SimpleSummaryProvider>;
				public static getInstance(): androidx.preference.ListPreference.SimpleSummaryProvider;
				public provideSummary(preference: androidx.preference.ListPreference): string;
				public provideSummary(param0: any): string;
			}
		}
	}
}

declare module androidx {
	export module preference {
		export class ListPreferenceDialogFragment extends androidx.preference.PreferenceDialogFragment {
			public static class: java.lang.Class<androidx.preference.ListPreferenceDialogFragment>;
			public onClick(param0: android.content.DialogInterface, param1: number): void;
			public onCreate(savedInstanceState: android.os.Bundle): void;
			public onDismiss(param0: android.content.DialogInterface): void;
			/** @deprecated */
			public static newInstance(key: string): androidx.preference.ListPreferenceDialogFragment;
			public onSaveInstanceState(outState: android.os.Bundle): void;
			/** @deprecated */
			public onPrepareDialogBuilder(builder: android.app.AlertDialog.Builder): void;
			/** @deprecated */
			public onDialogClosed(positiveResult: boolean): void;
			/** @deprecated */
			public onClick(dialog: android.content.DialogInterface, which: number): void;
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			/** @deprecated */
			public constructor();
			public onTrimMemory(param0: number): void;
			public onPrepareDialogBuilder(builder: android.app.AlertDialog.Builder): void;
			public onTrimMemory(level: number): void;
			public onCancel(param0: android.content.DialogInterface): void;
			/** @deprecated */
			public onDialogClosed(param0: boolean): void;
			public onDismiss(dialog: android.content.DialogInterface): void;
			public onCancel(dialog: android.content.DialogInterface): void;
			public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
		}
	}
}

declare module androidx {
	export module preference {
		export class ListPreferenceDialogFragmentCompat extends androidx.preference.PreferenceDialogFragmentCompat {
			public static class: java.lang.Class<androidx.preference.ListPreferenceDialogFragmentCompat>;
			public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
			public onConfigurationChanged(param0: android.content.res.Configuration): void;
			public onClick(param0: android.content.DialogInterface, param1: number): void;
			public onCreate(savedInstanceState: android.os.Bundle): void;
			public static newInstance(key: string): androidx.preference.ListPreferenceDialogFragmentCompat;
			public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
			public onDismiss(param0: android.content.DialogInterface): void;
			public constructor(param0: number);
			public onClick(dialog: android.content.DialogInterface, which: number): void;
			public constructor();
			public onSaveInstanceState(outState: android.os.Bundle): void;
			public getLifecycle(): androidx.lifecycle.Lifecycle;
			public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
			public onLowMemory(): void;
			public getViewModelStore(): androidx.lifecycle.ViewModelStore;
			public onDialogClosed(positiveResult: boolean): void;
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			public onDialogClosed(param0: boolean): void;
			public onCancel(param0: android.content.DialogInterface): void;
			public onPrepareDialogBuilder(builder: androidx.appcompat.app.AlertDialog.Builder): void;
			public onDismiss(dialog: android.content.DialogInterface): void;
			public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
		}
	}
}

declare module androidx {
	export module preference {
		export class MultiSelectListPreference extends androidx.preference.DialogPreference {
			public static class: java.lang.Class<androidx.preference.MultiSelectListPreference>;
			public onSetInitialValue(defaultValue: any): void;
			public setEntries(entries: string[]): void;
			public getValues(): java.util.Set<string>;
			public findIndexOfValue(value: string): number;
			public setEntryValues(entryValues: string[]): void;
			public getEntryValues(): string[];
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
			public onRestoreInstanceState(state: android.os.Parcelable): void;
			public setEntries(entriesResId: number): void;
			public onGetDefaultValue(a: android.content.res.TypedArray, index: number): any;
			public constructor(context: android.content.Context);
			/** @deprecated */
			public onSetInitialValue(restorePersistedValue: boolean, defaultValue: any): void;
			public setEntryValues(entryValuesResId: number): void;
			public setValues(values: java.util.Set<string>): void;
			public getSelectedItems(): boolean[];
			public getEntries(): string[];
			public onSaveInstanceState(): android.os.Parcelable;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
		}
		export module MultiSelectListPreference {
			export class SavedState extends androidx.preference.Preference.BaseSavedState {
				public static class: java.lang.Class<androidx.preference.MultiSelectListPreference.SavedState>;
				public static CREATOR: android.os.Parcelable.Creator<androidx.preference.MultiSelectListPreference.SavedState>;
				public writeToParcel(dest: android.os.Parcel, flags: number): void;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
			}
		}
	}
}

declare module androidx {
	export module preference {
		export class MultiSelectListPreferenceDialogFragment extends androidx.preference.PreferenceDialogFragment {
			public static class: java.lang.Class<androidx.preference.MultiSelectListPreferenceDialogFragment>;
			public onClick(param0: android.content.DialogInterface, param1: number): void;
			public onCreate(savedInstanceState: android.os.Bundle): void;
			public onDismiss(param0: android.content.DialogInterface): void;
			public onSaveInstanceState(outState: android.os.Bundle): void;
			/** @deprecated */
			public onPrepareDialogBuilder(builder: android.app.AlertDialog.Builder): void;
			/** @deprecated */
			public onDialogClosed(positiveResult: boolean): void;
			/** @deprecated */
			public onClick(dialog: android.content.DialogInterface, which: number): void;
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			/** @deprecated */
			public constructor();
			public onTrimMemory(param0: number): void;
			public onPrepareDialogBuilder(builder: android.app.AlertDialog.Builder): void;
			public onTrimMemory(level: number): void;
			public onCancel(param0: android.content.DialogInterface): void;
			/** @deprecated */
			public onDialogClosed(param0: boolean): void;
			public onDismiss(dialog: android.content.DialogInterface): void;
			public onCancel(dialog: android.content.DialogInterface): void;
			/** @deprecated */
			public static newInstance(key: string): androidx.preference.MultiSelectListPreferenceDialogFragment;
			public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
		}
	}
}

declare module androidx {
	export module preference {
		export class MultiSelectListPreferenceDialogFragmentCompat extends androidx.preference.PreferenceDialogFragmentCompat {
			public static class: java.lang.Class<androidx.preference.MultiSelectListPreferenceDialogFragmentCompat>;
			public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
			public onConfigurationChanged(param0: android.content.res.Configuration): void;
			public onClick(param0: android.content.DialogInterface, param1: number): void;
			public onCreate(savedInstanceState: android.os.Bundle): void;
			public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
			public onDismiss(param0: android.content.DialogInterface): void;
			public constructor(param0: number);
			public onClick(dialog: android.content.DialogInterface, which: number): void;
			public constructor();
			public onSaveInstanceState(outState: android.os.Bundle): void;
			public getLifecycle(): androidx.lifecycle.Lifecycle;
			public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
			public onLowMemory(): void;
			public getViewModelStore(): androidx.lifecycle.ViewModelStore;
			public static newInstance(key: string): androidx.preference.MultiSelectListPreferenceDialogFragmentCompat;
			public onDialogClosed(positiveResult: boolean): void;
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			public onDialogClosed(param0: boolean): void;
			public onCancel(param0: android.content.DialogInterface): void;
			public onPrepareDialogBuilder(builder: androidx.appcompat.app.AlertDialog.Builder): void;
			public onDismiss(dialog: android.content.DialogInterface): void;
			public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
		}
	}
}

declare module androidx {
	export module preference {
		export class Preference extends java.lang.Comparable<androidx.preference.Preference> {
			public static class: java.lang.Class<androidx.preference.Preference>;
			public static DEFAULT_ORDER: number;
			public onClick(): void;
			public restoreHierarchyState(container: android.os.Bundle): void;
			public onSetInitialValue(defaultValue: any): void;
			public notifyDependencyChange(disableDependents: boolean): void;
			/** @deprecated */
			public onInitializeAccessibilityNodeInfo(info: androidx.core.view.accessibility.AccessibilityNodeInfoCompat): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
			public setSummary(summaryResId: number): void;
			public setSummaryProvider(summaryProvider: androidx.preference.Preference.SummaryProvider<any>): void;
			public getPersistedInt(defaultReturnValue: number): number;
			public setOnPreferenceChangeListener(onPreferenceChangeListener: androidx.preference.Preference.OnPreferenceChangeListener): void;
			public getLayoutResource(): number;
			public constructor(context: android.content.Context);
			public setOrder(order: number): void;
			public getSummary(): string;
			public getKey(): string;
			public getContext(): android.content.Context;
			public persistStringSet(values: java.util.Set<string>): boolean;
			public getPersistedBoolean(defaultReturnValue: boolean): boolean;
			public getPreferenceManager(): androidx.preference.PreferenceManager;
			public setSummary(summary: string): void;
			public setWidgetLayoutResource(widgetLayoutResId: number): void;
			public isPersistent(): boolean;
			public getOrder(): number;
			public setVisible(visible: boolean): void;
			public setSelectable(selectable: boolean): void;
			public setFragment(fragment: string): void;
			public persistBoolean(value: boolean): boolean;
			public setViewId(viewId: number): void;
			public setSingleLineTitle(singleLineTitle: boolean): void;
			public getExtras(): android.os.Bundle;
			public getPersistedFloat(defaultReturnValue: number): number;
			public setCopyingEnabled(enabled: boolean): void;
			public setEnabled(enabled: boolean): void;
			public persistLong(value: number): boolean;
			public getPreferenceDataStore(): androidx.preference.PreferenceDataStore;
			public isCopyingEnabled(): boolean;
			public shouldDisableDependents(): boolean;
			public notifyChanged(): void;
			public onDetached(): void;
			public findPreferenceInHierarchy(key: string): androidx.preference.Preference;
			public setOnPreferenceClickListener(onPreferenceClickListener: androidx.preference.Preference.OnPreferenceClickListener): void;
			public getDependency(): string;
			public persistFloat(value: number): boolean;
			public persistString(value: string): boolean;
			public getPersistedStringSet(defaultReturnValue: java.util.Set<string>): java.util.Set<string>;
			public isVisible(): boolean;
			public setIcon(icon: android.graphics.drawable.Drawable): void;
			public getIcon(): android.graphics.drawable.Drawable;
			public isEnabled(): boolean;
			public onDependencyChanged(dependency: androidx.preference.Preference, disableDependent: boolean): void;
			/** @deprecated */
			public onSetInitialValue(restorePersistedValue: boolean, defaultValue: any): void;
			public setShouldDisableView(shouldDisableView: boolean): void;
			public notifyHierarchyChanged(): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
			public isSingleLineTitle(): boolean;
			public isSelectable(): boolean;
			public onPrepareForRemoval(): void;
			public onRestoreInstanceState(state: android.os.Parcelable): void;
			public persistInt(value: number): boolean;
			public setDependency(dependencyKey: string): void;
			public setPreferenceDataStore(dataStore: androidx.preference.PreferenceDataStore): void;
			public hasKey(): boolean;
			public getSummaryProvider(): androidx.preference.Preference.SummaryProvider<any>;
			public onParentChanged(parent: androidx.preference.Preference, disableChild: boolean): void;
			public saveHierarchyState(container: android.os.Bundle): void;
			public setTitle(titleResId: number): void;
			public getTitle(): string;
			public getShouldDisableView(): boolean;
			public onBindViewHolder(holder: androidx.preference.PreferenceViewHolder): void;
			public compareTo(another: androidx.preference.Preference): number;
			public isIconSpaceReserved(): boolean;
			public isShown(): boolean;
			public setTitle(title: string): void;
			public callChangeListener(newValue: any): boolean;
			public onAttachedToHierarchy(preferenceManager: androidx.preference.PreferenceManager): void;
			public getParent(): androidx.preference.PreferenceGroup;
			public setKey(key: string): void;
			public getSharedPreferences(): android.content.SharedPreferences;
			public shouldPersist(): boolean;
			public onSaveInstanceState(): android.os.Parcelable;
			public getIntent(): android.content.Intent;
			public getFragment(): string;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public setLayoutResource(layoutResId: number): void;
			public onGetDefaultValue(a: android.content.res.TypedArray, index: number): any;
			public setIconSpaceReserved(iconSpaceReserved: boolean): void;
			public performClick(): void;
			public setDefaultValue(defaultValue: any): void;
			public getOnPreferenceClickListener(): androidx.preference.Preference.OnPreferenceClickListener;
			public getPersistedString(defaultReturnValue: string): string;
			public getWidgetLayoutResource(): number;
			public peekExtras(): android.os.Bundle;
			public performClick(view: android.view.View): void;
			public getPersistedLong(defaultReturnValue: number): number;
			public setPersistent(persistent: boolean): void;
			public setIntent(intent: android.content.Intent): void;
			public onAttached(): void;
			public getOnPreferenceChangeListener(): androidx.preference.Preference.OnPreferenceChangeListener;
			public toString(): string;
			public onAttachedToHierarchy(preferenceManager: androidx.preference.PreferenceManager, id: number): void;
			public setIcon(iconResId: number): void;
		}
		export module Preference {
			export class BaseSavedState extends android.view.AbsSavedState {
				public static class: java.lang.Class<androidx.preference.Preference.BaseSavedState>;
				public static CREATOR: android.os.Parcelable.Creator<androidx.preference.Preference.BaseSavedState>;
				public constructor(source: android.os.Parcel, loader: java.lang.ClassLoader);
				public writeToParcel(dest: android.os.Parcel, flags: number): void;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
				public constructor(superState: android.os.Parcelable);
				public constructor(source: android.os.Parcel);
			}
			export class OnPreferenceChangeInternalListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.preference.Preference.OnPreferenceChangeInternalListener>;
				/**
				 * Constructs a new instance of the androidx.preference.Preference$OnPreferenceChangeInternalListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPreferenceChange(param0: androidx.preference.Preference): void;
					onPreferenceHierarchyChange(param0: androidx.preference.Preference): void;
					onPreferenceVisibilityChange(param0: androidx.preference.Preference): void;
				});
				public constructor();
				public onPreferenceVisibilityChange(param0: androidx.preference.Preference): void;
				public onPreferenceHierarchyChange(param0: androidx.preference.Preference): void;
				public onPreferenceChange(param0: androidx.preference.Preference): void;
			}
			export class OnPreferenceChangeListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.preference.Preference.OnPreferenceChangeListener>;
				/**
				 * Constructs a new instance of the androidx.preference.Preference$OnPreferenceChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPreferenceChange(param0: androidx.preference.Preference, param1: any): boolean;
				});
				public constructor();
				public onPreferenceChange(param0: androidx.preference.Preference, param1: any): boolean;
			}
			export class OnPreferenceClickListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.preference.Preference.OnPreferenceClickListener>;
				/**
				 * Constructs a new instance of the androidx.preference.Preference$OnPreferenceClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPreferenceClick(param0: androidx.preference.Preference): boolean;
				});
				public constructor();
				public onPreferenceClick(param0: androidx.preference.Preference): boolean;
			}
			export class OnPreferenceCopyListener extends java.lang.Object implements android.view.View.OnCreateContextMenuListener, android.view.MenuItem.OnMenuItemClickListener {
				public static class: java.lang.Class<androidx.preference.Preference.OnPreferenceCopyListener>;
				public onMenuItemClick(item: android.view.MenuItem): boolean;
				public onMenuItemClick(param0: android.view.MenuItem): boolean;
				public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
				public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			}
			export class SummaryProvider<T>  extends java.lang.Object {
				public static class: java.lang.Class<androidx.preference.Preference.SummaryProvider<any>>;
				/**
				 * Constructs a new instance of the androidx.preference.Preference$SummaryProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					provideSummary(param0: T): string;
				});
				public constructor();
				public provideSummary(param0: T): string;
			}
		}
	}
}

declare module androidx {
	export module preference {
		export class PreferenceCategory extends androidx.preference.PreferenceGroup {
			public static class: java.lang.Class<androidx.preference.PreferenceCategory>;
			public shouldDisableDependents(): boolean;
			public constructor(context: android.content.Context);
			public isEnabled(): boolean;
			public onBindViewHolder(holder: androidx.preference.PreferenceViewHolder): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
		}
	}
}

declare module androidx {
	export module preference {
		export abstract class PreferenceDataStore extends java.lang.Object {
			public static class: java.lang.Class<androidx.preference.PreferenceDataStore>;
			public getInt(key: string, defValue: number): number;
			public putStringSet(key: string, values: java.util.Set<string>): void;
			public getFloat(key: string, defValue: number): number;
			public getString(key: string, defValue: string): string;
			public putInt(key: string, value: number): void;
			public constructor();
			public putFloat(key: string, value: number): void;
			public putBoolean(key: string, value: boolean): void;
			public getLong(key: string, defValue: number): number;
			public getBoolean(key: string, defValue: boolean): boolean;
			public putLong(key: string, value: number): void;
			public getStringSet(key: string, defValues: java.util.Set<string>): java.util.Set<string>;
			public putString(key: string, value: string): void;
		}
	}
}

declare module androidx {
	export module preference {
		export abstract class PreferenceDialogFragment extends android.app.DialogFragment implements android.content.DialogInterface.OnClickListener {
			public static class: java.lang.Class<androidx.preference.PreferenceDialogFragment>;
			public static ARG_KEY: string;
			public onClick(param0: android.content.DialogInterface, param1: number): void;
			public onCreate(savedInstanceState: android.os.Bundle): void;
			/** @deprecated */
			public onBindDialogView(view: android.view.View): void;
			public onDismiss(param0: android.content.DialogInterface): void;
			public constructor();
			public onSaveInstanceState(outState: android.os.Bundle): void;
			public onCreateDialog(savedInstanceState: android.os.Bundle): android.app.Dialog;
			/** @deprecated */
			public onPrepareDialogBuilder(builder: android.app.AlertDialog.Builder): void;
			public needInputMethod(): boolean;
			/** @deprecated */
			public onClick(dialog: android.content.DialogInterface, which: number): void;
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			/** @deprecated */
			public constructor();
			public onTrimMemory(param0: number): void;
			/** @deprecated */
			public getPreference(): androidx.preference.DialogPreference;
			public onTrimMemory(level: number): void;
			public onCancel(param0: android.content.DialogInterface): void;
			/** @deprecated */
			public onCreateDialogView(context: android.content.Context): android.view.View;
			public onDismiss(dialog: android.content.DialogInterface): void;
			/** @deprecated */
			public onDialogClosed(param0: boolean): void;
			public onCancel(dialog: android.content.DialogInterface): void;
			public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
		}
		export module PreferenceDialogFragment {
			export class Api30Impl extends java.lang.Object {
				public static class: java.lang.Class<androidx.preference.PreferenceDialogFragment.Api30Impl>;
			}
		}
	}
}

declare module androidx {
	export module preference {
		export abstract class PreferenceDialogFragmentCompat extends androidx.fragment.app.DialogFragment implements android.content.DialogInterface.OnClickListener {
			public static class: java.lang.Class<androidx.preference.PreferenceDialogFragmentCompat>;
			public static ARG_KEY: string;
			public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
			public onClick(param0: android.content.DialogInterface, param1: number): void;
			public onCreate(savedInstanceState: android.os.Bundle): void;
			public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
			public onDismiss(param0: android.content.DialogInterface): void;
			public onClick(dialog: android.content.DialogInterface, which: number): void;
			public onSaveInstanceState(outState: android.os.Bundle): void;
			public onCreateDialog(savedInstanceState: android.os.Bundle): android.app.Dialog;
			public onLowMemory(): void;
			public needInputMethod(): boolean;
			public onBindDialogView(view: android.view.View): void;
			public onDialogClosed(param0: boolean): void;
			public onCancel(param0: android.content.DialogInterface): void;
			public onPrepareDialogBuilder(builder: androidx.appcompat.app.AlertDialog.Builder): void;
			public onDismiss(dialog: android.content.DialogInterface): void;
			public onCreateDialog(param0: android.os.Bundle): android.app.Dialog;
			public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
			public onCreateDialogView(context: android.content.Context): android.view.View;
			public onConfigurationChanged(param0: android.content.res.Configuration): void;
			public getPreference(): androidx.preference.DialogPreference;
			public scheduleShowSoftInput(): void;
			public constructor(param0: number);
			public constructor();
			public getLifecycle(): androidx.lifecycle.Lifecycle;
			public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
			public getViewModelStore(): androidx.lifecycle.ViewModelStore;
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			public onSaveInstanceState(param0: android.os.Bundle): void;
			public onCreate(param0: android.os.Bundle): void;
		}
		export module PreferenceDialogFragmentCompat {
			export class Api30Impl extends java.lang.Object {
				public static class: java.lang.Class<androidx.preference.PreferenceDialogFragmentCompat.Api30Impl>;
			}
		}
	}
}

declare module androidx {
	export module preference {
		export abstract class PreferenceFragment extends android.app.Fragment implements androidx.preference.PreferenceManager.OnPreferenceTreeClickListener, androidx.preference.PreferenceManager.OnDisplayPreferenceDialogListener, androidx.preference.PreferenceManager.OnNavigateToScreenListener, androidx.preference.DialogPreference.TargetFragment {
			public static class: java.lang.Class<androidx.preference.PreferenceFragment>;
			public static ARG_PREFERENCE_ROOT: string;
			public onCreate(savedInstanceState: android.os.Bundle): void;
			public onStart(): void;
			public onSaveInstanceState(outState: android.os.Bundle): void;
			/** @deprecated */
			public findPreference(key: string): androidx.preference.Preference;
			public onTrimMemory(param0: number): void;
			public onDestroyView(): void;
			public onUnbindPreferences(): void;
			/** @deprecated */
			public getPreferenceScreen(): androidx.preference.PreferenceScreen;
			public onPreferenceTreeClick(param0: androidx.preference.Preference): boolean;
			public onStop(): void;
			/** @deprecated */
			public setPreferencesFromResource(preferencesResId: number, key: string): void;
			public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
			public onNavigateToScreen(param0: androidx.preference.PreferenceScreen): void;
			/** @deprecated */
			public getPreferenceManager(): androidx.preference.PreferenceManager;
			/** @deprecated */
			public onPreferenceTreeClick(preference: androidx.preference.Preference): boolean;
			public findPreference(param0: string): androidx.preference.Preference;
			public onCreateView(inflater: android.view.LayoutInflater, container: android.view.ViewGroup, savedInstanceState: android.os.Bundle): android.view.View;
			/** @deprecated */
			public onNavigateToScreen(preferenceScreen: androidx.preference.PreferenceScreen): void;
			public onViewCreated(view: android.view.View, savedInstanceState: android.os.Bundle): void;
			public constructor();
			/** @deprecated */
			public setDividerHeight(height: number): void;
			/** @deprecated */
			public getListView(): androidx.recyclerview.widget.RecyclerView;
			public onDisplayPreferenceDialog(param0: androidx.preference.Preference): void;
			/** @deprecated */
			public scrollToPreference(preference: androidx.preference.Preference): void;
			public getCallbackFragment(): android.app.Fragment;
			/** @deprecated */
			public onCreateRecyclerView(inflater: android.view.LayoutInflater, parent: android.view.ViewGroup, savedInstanceState: android.os.Bundle): androidx.recyclerview.widget.RecyclerView;
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			/** @deprecated */
			public setDivider(divider: android.graphics.drawable.Drawable): void;
			/** @deprecated */
			public onCreatePreferences(param0: android.os.Bundle, param1: string): void;
			/** @deprecated */
			public onCreateAdapter(preferenceScreen: androidx.preference.PreferenceScreen): androidx.recyclerview.widget.RecyclerView.Adapter;
			public onTrimMemory(level: number): void;
			public onBindPreferences(): void;
			/** @deprecated */
			public onCreateLayoutManager(): androidx.recyclerview.widget.RecyclerView.LayoutManager;
			/** @deprecated */
			public setPreferenceScreen(preferenceScreen: androidx.preference.PreferenceScreen): void;
			/** @deprecated */
			public addPreferencesFromResource(preferencesResId: number): void;
			/** @deprecated */
			public onDisplayPreferenceDialog(preference: androidx.preference.Preference): void;
			/** @deprecated */
			public scrollToPreference(key: string): void;
		}
		export module PreferenceFragment {
			export class DividerDecoration extends androidx.recyclerview.widget.RecyclerView.ItemDecoration {
				public static class: java.lang.Class<androidx.preference.PreferenceFragment.DividerDecoration>;
				public onDrawOver(param0: android.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView): void;
				public setDividerHeight(dividerHeight: number): void;
				public getItemOffsets(param0: android.graphics.Rect, param1: android.view.View, param2: androidx.recyclerview.widget.RecyclerView, param3: androidx.recyclerview.widget.RecyclerView.State): void;
				public setDivider(divider: android.graphics.drawable.Drawable): void;
				public onDrawOver(param0: android.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: androidx.recyclerview.widget.RecyclerView.State): void;
				public onDrawOver(c: android.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
				public getItemOffsets(param0: android.graphics.Rect, param1: number, param2: androidx.recyclerview.widget.RecyclerView): void;
				public setAllowDividerAfterLastItem(allowDividerAfterLastItem: boolean): void;
				public getItemOffsets(outRect: android.graphics.Rect, view: android.view.View, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
			}
			export class OnPreferenceDisplayDialogCallback extends java.lang.Object {
				public static class: java.lang.Class<androidx.preference.PreferenceFragment.OnPreferenceDisplayDialogCallback>;
				/**
				 * Constructs a new instance of the androidx.preference.PreferenceFragment$OnPreferenceDisplayDialogCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPreferenceDisplayDialog(param0: androidx.preference.PreferenceFragment, param1: androidx.preference.Preference): boolean;
				});
				public constructor();
				public onPreferenceDisplayDialog(param0: androidx.preference.PreferenceFragment, param1: androidx.preference.Preference): boolean;
			}
			export class OnPreferenceStartFragmentCallback extends java.lang.Object {
				public static class: java.lang.Class<androidx.preference.PreferenceFragment.OnPreferenceStartFragmentCallback>;
				/**
				 * Constructs a new instance of the androidx.preference.PreferenceFragment$OnPreferenceStartFragmentCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPreferenceStartFragment(param0: androidx.preference.PreferenceFragment, param1: androidx.preference.Preference): boolean;
				});
				public constructor();
				public onPreferenceStartFragment(param0: androidx.preference.PreferenceFragment, param1: androidx.preference.Preference): boolean;
			}
			export class OnPreferenceStartScreenCallback extends java.lang.Object {
				public static class: java.lang.Class<androidx.preference.PreferenceFragment.OnPreferenceStartScreenCallback>;
				/**
				 * Constructs a new instance of the androidx.preference.PreferenceFragment$OnPreferenceStartScreenCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPreferenceStartScreen(param0: androidx.preference.PreferenceFragment, param1: androidx.preference.PreferenceScreen): boolean;
				});
				public constructor();
				public onPreferenceStartScreen(param0: androidx.preference.PreferenceFragment, param1: androidx.preference.PreferenceScreen): boolean;
			}
			export class ScrollToPreferenceObserver extends androidx.recyclerview.widget.RecyclerView.AdapterDataObserver {
				public static class: java.lang.Class<androidx.preference.PreferenceFragment.ScrollToPreferenceObserver>;
				public onChanged(): void;
				public onItemRangeChanged(param0: number, param1: number): void;
				public onItemRangeChanged(param0: number, param1: number, param2: any): void;
				public onItemRangeMoved(fromPosition: number, toPosition: number, itemCount: number): void;
				public onItemRangeChanged(positionStart: number, itemCount: number, payload: any): void;
				public onItemRangeInserted(param0: number, param1: number): void;
				public onItemRangeRemoved(positionStart: number, itemCount: number): void;
				public onItemRangeRemoved(param0: number, param1: number): void;
				public onItemRangeInserted(positionStart: number, itemCount: number): void;
				public onItemRangeMoved(param0: number, param1: number, param2: number): void;
				public onItemRangeChanged(positionStart: number, itemCount: number): void;
			}
		}
	}
}

declare module androidx {
	export module preference {
		export abstract class PreferenceFragmentCompat extends androidx.fragment.app.Fragment implements androidx.preference.PreferenceManager.OnPreferenceTreeClickListener, androidx.preference.PreferenceManager.OnDisplayPreferenceDialogListener, androidx.preference.PreferenceManager.OnNavigateToScreenListener, androidx.preference.DialogPreference.TargetFragment {
			public static class: java.lang.Class<androidx.preference.PreferenceFragmentCompat>;
			public static ARG_PREFERENCE_ROOT: string;
			public addPreferencesFromResource(preferencesResId: number): void;
			public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
			public onNavigateToScreen(preferenceScreen: androidx.preference.PreferenceScreen): void;
			public onCreate(savedInstanceState: android.os.Bundle): void;
			public onStart(): void;
			public setDivider(divider: android.graphics.drawable.Drawable): void;
			public onPreferenceTreeClick(preference: androidx.preference.Preference): boolean;
			public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
			public onViewCreated(param0: android.view.View, param1: android.os.Bundle): void;
			public scrollToPreference(key: string): void;
			public onSaveInstanceState(outState: android.os.Bundle): void;
			public getPreferenceScreen(): androidx.preference.PreferenceScreen;
			public onLowMemory(): void;
			public getCallbackFragment(): androidx.fragment.app.Fragment;
			public findPreference(key: string): androidx.preference.Preference;
			public onDisplayPreferenceDialog(preference: androidx.preference.Preference): void;
			public onDestroyView(): void;
			public onUnbindPreferences(): void;
			public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
			public getPreferenceManager(): androidx.preference.PreferenceManager;
			public onPreferenceTreeClick(param0: androidx.preference.Preference): boolean;
			public onStop(): void;
			public onConfigurationChanged(param0: android.content.res.Configuration): void;
			public onCreateLayoutManager(): androidx.recyclerview.widget.RecyclerView.LayoutManager;
			public onCreateAdapter(preferenceScreen: androidx.preference.PreferenceScreen): androidx.recyclerview.widget.RecyclerView.Adapter;
			public onNavigateToScreen(param0: androidx.preference.PreferenceScreen): void;
			public onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;
			public getListView(): androidx.recyclerview.widget.RecyclerView;
			public setDividerHeight(height: number): void;
			public setPreferenceScreen(preferenceScreen: androidx.preference.PreferenceScreen): void;
			public findPreference(param0: string): androidx.preference.Preference;
			public constructor(param0: number);
			public onCreateView(inflater: android.view.LayoutInflater, container: android.view.ViewGroup, savedInstanceState: android.os.Bundle): android.view.View;
			public onViewCreated(view: android.view.View, savedInstanceState: android.os.Bundle): void;
			public scrollToPreference(preference: androidx.preference.Preference): void;
			public constructor();
			public getLifecycle(): androidx.lifecycle.Lifecycle;
			public onDisplayPreferenceDialog(param0: androidx.preference.Preference): void;
			public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
			public getViewModelStore(): androidx.lifecycle.ViewModelStore;
			public onCreateRecyclerView(inflater: android.view.LayoutInflater, parent: android.view.ViewGroup, savedInstanceState: android.os.Bundle): androidx.recyclerview.widget.RecyclerView;
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			public onSaveInstanceState(param0: android.os.Bundle): void;
			public setPreferencesFromResource(preferencesResId: number, key: string): void;
			public onCreatePreferences(param0: android.os.Bundle, param1: string): void;
			public onBindPreferences(): void;
			public onCreate(param0: android.os.Bundle): void;
		}
		export module PreferenceFragmentCompat {
			export class DividerDecoration extends androidx.recyclerview.widget.RecyclerView.ItemDecoration {
				public static class: java.lang.Class<androidx.preference.PreferenceFragmentCompat.DividerDecoration>;
				public onDrawOver(param0: android.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView): void;
				public setDividerHeight(dividerHeight: number): void;
				public getItemOffsets(param0: android.graphics.Rect, param1: android.view.View, param2: androidx.recyclerview.widget.RecyclerView, param3: androidx.recyclerview.widget.RecyclerView.State): void;
				public setDivider(divider: android.graphics.drawable.Drawable): void;
				public onDrawOver(param0: android.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: androidx.recyclerview.widget.RecyclerView.State): void;
				public onDrawOver(c: android.graphics.Canvas, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
				public getItemOffsets(param0: android.graphics.Rect, param1: number, param2: androidx.recyclerview.widget.RecyclerView): void;
				public setAllowDividerAfterLastItem(allowDividerAfterLastItem: boolean): void;
				public getItemOffsets(outRect: android.graphics.Rect, view: android.view.View, parent: androidx.recyclerview.widget.RecyclerView, state: androidx.recyclerview.widget.RecyclerView.State): void;
			}
			export class OnPreferenceDisplayDialogCallback extends java.lang.Object {
				public static class: java.lang.Class<androidx.preference.PreferenceFragmentCompat.OnPreferenceDisplayDialogCallback>;
				/**
				 * Constructs a new instance of the androidx.preference.PreferenceFragmentCompat$OnPreferenceDisplayDialogCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPreferenceDisplayDialog(param0: androidx.preference.PreferenceFragmentCompat, param1: androidx.preference.Preference): boolean;
				});
				public constructor();
				public onPreferenceDisplayDialog(param0: androidx.preference.PreferenceFragmentCompat, param1: androidx.preference.Preference): boolean;
			}
			export class OnPreferenceStartFragmentCallback extends java.lang.Object {
				public static class: java.lang.Class<androidx.preference.PreferenceFragmentCompat.OnPreferenceStartFragmentCallback>;
				/**
				 * Constructs a new instance of the androidx.preference.PreferenceFragmentCompat$OnPreferenceStartFragmentCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPreferenceStartFragment(param0: androidx.preference.PreferenceFragmentCompat, param1: androidx.preference.Preference): boolean;
				});
				public constructor();
				public onPreferenceStartFragment(param0: androidx.preference.PreferenceFragmentCompat, param1: androidx.preference.Preference): boolean;
			}
			export class OnPreferenceStartScreenCallback extends java.lang.Object {
				public static class: java.lang.Class<androidx.preference.PreferenceFragmentCompat.OnPreferenceStartScreenCallback>;
				/**
				 * Constructs a new instance of the androidx.preference.PreferenceFragmentCompat$OnPreferenceStartScreenCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPreferenceStartScreen(param0: androidx.preference.PreferenceFragmentCompat, param1: androidx.preference.PreferenceScreen): boolean;
				});
				public constructor();
				public onPreferenceStartScreen(param0: androidx.preference.PreferenceFragmentCompat, param1: androidx.preference.PreferenceScreen): boolean;
			}
			export class ScrollToPreferenceObserver extends androidx.recyclerview.widget.RecyclerView.AdapterDataObserver {
				public static class: java.lang.Class<androidx.preference.PreferenceFragmentCompat.ScrollToPreferenceObserver>;
				public onChanged(): void;
				public onItemRangeChanged(param0: number, param1: number): void;
				public onItemRangeChanged(param0: number, param1: number, param2: any): void;
				public onItemRangeMoved(fromPosition: number, toPosition: number, itemCount: number): void;
				public onItemRangeChanged(positionStart: number, itemCount: number, payload: any): void;
				public onItemRangeInserted(param0: number, param1: number): void;
				public onItemRangeRemoved(positionStart: number, itemCount: number): void;
				public onItemRangeRemoved(param0: number, param1: number): void;
				public onItemRangeInserted(positionStart: number, itemCount: number): void;
				public onItemRangeMoved(param0: number, param1: number, param2: number): void;
				public onItemRangeChanged(positionStart: number, itemCount: number): void;
			}
		}
	}
}

declare module androidx {
	export module preference {
		export abstract class PreferenceGroup extends androidx.preference.Preference {
			public static class: java.lang.Class<androidx.preference.PreferenceGroup>;
			public notifyDependencyChange(disableDependents: boolean): void;
			public onPrepareAddPreference(preference: androidx.preference.Preference): boolean;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
			public onRestoreInstanceState(state: android.os.Parcelable): void;
			public isAttached(): boolean;
			public getOnExpandButtonClickListener(): androidx.preference.PreferenceGroup.OnExpandButtonClickListener;
			public constructor(context: android.content.Context);
			public getPreference(index: number): androidx.preference.Preference;
			public addPreference(preference: androidx.preference.Preference): boolean;
			public onDetached(): void;
			public isOrderingAsAdded(): boolean;
			public removePreference(preference: androidx.preference.Preference): boolean;
			public findPreference(key: string): androidx.preference.Preference;
			public addItemFromInflater(preference: androidx.preference.Preference): void;
			public setInitialExpandedChildrenCount(expandedCount: number): void;
			public dispatchSaveInstanceState(container: android.os.Bundle): void;
			public dispatchRestoreInstanceState(container: android.os.Bundle): void;
			public onAttached(): void;
			public isOnSameScreenAsChildren(): boolean;
			public setOnExpandButtonClickListener(onExpandButtonClickListener: androidx.preference.PreferenceGroup.OnExpandButtonClickListener): void;
			public removeAll(): void;
			public getPreferenceCount(): number;
			public onSaveInstanceState(): android.os.Parcelable;
			public getInitialExpandedChildrenCount(): number;
			public removePreferenceRecursively(key: string): boolean;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
			public setOrderingAsAdded(orderingAsAdded: boolean): void;
		}
		export module PreferenceGroup {
			export class OnExpandButtonClickListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.preference.PreferenceGroup.OnExpandButtonClickListener>;
				/**
				 * Constructs a new instance of the androidx.preference.PreferenceGroup$OnExpandButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onExpandButtonClick(): void;
				});
				public constructor();
				public onExpandButtonClick(): void;
			}
			export class PreferencePositionCallback extends java.lang.Object {
				public static class: java.lang.Class<androidx.preference.PreferenceGroup.PreferencePositionCallback>;
				/**
				 * Constructs a new instance of the androidx.preference.PreferenceGroup$PreferencePositionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getPreferenceAdapterPosition(param0: string): number;
					getPreferenceAdapterPosition(param0: androidx.preference.Preference): number;
				});
				public constructor();
				public getPreferenceAdapterPosition(param0: androidx.preference.Preference): number;
				public getPreferenceAdapterPosition(param0: string): number;
			}
			export class SavedState extends androidx.preference.Preference.BaseSavedState {
				public static class: java.lang.Class<androidx.preference.PreferenceGroup.SavedState>;
				public static CREATOR: android.os.Parcelable.Creator<androidx.preference.PreferenceGroup.SavedState>;
				public writeToParcel(dest: android.os.Parcel, flags: number): void;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
			}
		}
	}
}

declare module androidx {
	export module preference {
		export class PreferenceGroupAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.preference.PreferenceViewHolder> {
			public static class: java.lang.Class<androidx.preference.PreferenceGroupAdapter>;
			public getPreferenceAdapterPosition(param0: androidx.preference.Preference): number;
			public onPreferenceChange(preference: androidx.preference.Preference): void;
			public getPreferenceAdapterPosition(key: string): number;
			public onPreferenceHierarchyChange(preference: androidx.preference.Preference): void;
			public onBindViewHolder(param0: any, param1: number): void;
			public onBindViewHolder(holder: androidx.preference.PreferenceViewHolder, position: number): void;
			public getItemId(param0: number): number;
			public onCreateViewHolder(param0: android.view.ViewGroup, param1: number): any;
			public onPreferenceVisibilityChange(param0: androidx.preference.Preference): void;
			public constructor();
			public getItemViewType(position: number): number;
			public getPreferenceAdapterPosition(preference: androidx.preference.Preference): number;
			public onPreferenceHierarchyChange(param0: androidx.preference.Preference): void;
			public onPreferenceChange(param0: androidx.preference.Preference): void;
			public getItem(position: number): androidx.preference.Preference;
			public onPreferenceVisibilityChange(preference: androidx.preference.Preference): void;
			public onCreateViewHolder(parent: android.view.ViewGroup, viewType: number): androidx.preference.PreferenceViewHolder;
			public getPreferenceAdapterPosition(param0: string): number;
			public getItemCount(): number;
			public getItemViewType(param0: number): number;
			public constructor(preferenceGroup: androidx.preference.PreferenceGroup);
			public getItemId(position: number): number;
			public onBindViewHolder(param0: any, param1: number, param2: java.util.List<any>): void;
		}
		export module PreferenceGroupAdapter {
			export class PreferenceResourceDescriptor extends java.lang.Object {
				public static class: java.lang.Class<androidx.preference.PreferenceGroupAdapter.PreferenceResourceDescriptor>;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(o: any): boolean;
			}
		}
	}
}

declare module androidx {
	export module preference {
		export abstract class PreferenceHeaderFragmentCompat extends androidx.fragment.app.Fragment implements androidx.preference.PreferenceFragmentCompat.OnPreferenceStartFragmentCallback {
			public static class: java.lang.Class<androidx.preference.PreferenceHeaderFragmentCompat>;
			public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
			public onCreateInitialDetailFragment(): androidx.fragment.app.Fragment;
			public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
			public onViewCreated(param0: android.view.View, param1: android.os.Bundle): void;
			public onLowMemory(): void;
			public onViewStateRestored(savedInstanceState: android.os.Bundle): void;
			public onPreferenceStartFragment(caller: androidx.preference.PreferenceFragmentCompat, pref: androidx.preference.Preference): boolean;
			public onViewStateRestored(param0: android.os.Bundle): void;
			public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
			public onConfigurationChanged(param0: android.content.res.Configuration): void;
			public onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;
			public constructor(param0: number);
			public onCreateView(inflater: android.view.LayoutInflater, container: android.view.ViewGroup, savedInstanceState: android.os.Bundle): android.view.View;
			public onViewCreated(view: android.view.View, savedInstanceState: android.os.Bundle): void;
			public constructor();
			public getLifecycle(): androidx.lifecycle.Lifecycle;
			public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
			public onCreatePreferenceHeader(): androidx.preference.PreferenceFragmentCompat;
			public getViewModelStore(): androidx.lifecycle.ViewModelStore;
			public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
			public onPreferenceStartFragment(param0: androidx.preference.PreferenceFragmentCompat, param1: androidx.preference.Preference): boolean;
			public onAttach(param0: android.app.Activity): void;
			public onAttach(param0: android.content.Context): void;
			public getSlidingPaneLayout(): androidx.slidingpanelayout.widget.SlidingPaneLayout;
			public onAttach(context: android.content.Context): void;
		}
		export module PreferenceHeaderFragmentCompat {
			export class InnerOnBackPressedCallback extends androidx.activity.OnBackPressedCallback implements androidx.slidingpanelayout.widget.SlidingPaneLayout.PanelSlideListener {
				public static class: java.lang.Class<androidx.preference.PreferenceHeaderFragmentCompat.InnerOnBackPressedCallback>;
				public onPanelSlide(panel: android.view.View, slideOffset: number): void;
				public onPanelSlide(param0: android.view.View, param1: number): void;
				public constructor(caller: androidx.preference.PreferenceHeaderFragmentCompat);
				public onPanelClosed(param0: android.view.View): void;
				public constructor(param0: boolean);
				public handleOnBackPressed(): void;
				public onPanelOpened(param0: android.view.View): void;
				public onPanelClosed(panel: android.view.View): void;
				public onPanelOpened(panel: android.view.View): void;
			}
		}
	}
}

declare module androidx {
	export module preference {
		export class PreferenceInflater extends java.lang.Object {
			public static class: java.lang.Class<androidx.preference.PreferenceInflater>;
			public onCreateItem(name: string, attrs: android.util.AttributeSet): androidx.preference.Preference;
			public inflate(parser: org.xmlpull.v1.XmlPullParser, root: androidx.preference.PreferenceGroup): androidx.preference.Preference;
			public constructor(context: android.content.Context, preferenceManager: androidx.preference.PreferenceManager);
			public getDefaultPackages(): string[];
			public setDefaultPackages(defaultPackage: string[]): void;
			public getContext(): android.content.Context;
			public inflate(resource: number, root: androidx.preference.PreferenceGroup): androidx.preference.Preference;
		}
	}
}

declare module androidx {
	export module preference {
		export class PreferenceManager extends java.lang.Object {
			public static class: java.lang.Class<androidx.preference.PreferenceManager>;
			public static KEY_HAS_SET_DEFAULT_VALUES: string;
			public createPreferenceScreen(context: android.content.Context): androidx.preference.PreferenceScreen;
			public setStorageDeviceProtected(): void;
			public setPreferences(preferenceScreen: androidx.preference.PreferenceScreen): boolean;
			public setOnPreferenceTreeClickListener(listener: androidx.preference.PreferenceManager.OnPreferenceTreeClickListener): void;
			public getOnNavigateToScreenListener(): androidx.preference.PreferenceManager.OnNavigateToScreenListener;
			public setOnDisplayPreferenceDialogListener(onDisplayPreferenceDialogListener: androidx.preference.PreferenceManager.OnDisplayPreferenceDialogListener): void;
			public setPreferenceComparisonCallback(preferenceComparisonCallback: androidx.preference.PreferenceManager.PreferenceComparisonCallback): void;
			public getPreferenceDataStore(): androidx.preference.PreferenceDataStore;
			public getPreferenceScreen(): androidx.preference.PreferenceScreen;
			public setOnNavigateToScreenListener(listener: androidx.preference.PreferenceManager.OnNavigateToScreenListener): void;
			public constructor(context: android.content.Context);
			public setPreferenceDataStore(dataStore: androidx.preference.PreferenceDataStore): void;
			public setSharedPreferencesMode(sharedPreferencesMode: number): void;
			public isStorageDefault(): boolean;
			public findPreference(key: string): androidx.preference.Preference;
			public getContext(): android.content.Context;
			public static getDefaultSharedPreferences(context: android.content.Context): android.content.SharedPreferences;
			public getOnPreferenceTreeClickListener(): androidx.preference.PreferenceManager.OnPreferenceTreeClickListener;
			public isStorageDeviceProtected(): boolean;
			public static setDefaultValues(context: android.content.Context, sharedPreferencesName: string, sharedPreferencesMode: number, resId: number, readAgain: boolean): void;
			public getPreferenceComparisonCallback(): androidx.preference.PreferenceManager.PreferenceComparisonCallback;
			public setSharedPreferencesName(sharedPreferencesName: string): void;
			public getSharedPreferencesMode(): number;
			public getOnDisplayPreferenceDialogListener(): androidx.preference.PreferenceManager.OnDisplayPreferenceDialogListener;
			public setStorageDefault(): void;
			public static setDefaultValues(context: android.content.Context, resId: number, readAgain: boolean): void;
			public getSharedPreferencesName(): string;
			public inflateFromResource(context: android.content.Context, resId: number, rootPreferences: androidx.preference.PreferenceScreen): androidx.preference.PreferenceScreen;
			public getSharedPreferences(): android.content.SharedPreferences;
			public showDialog(preference: androidx.preference.Preference): void;
		}
		export module PreferenceManager {
			export class OnDisplayPreferenceDialogListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.preference.PreferenceManager.OnDisplayPreferenceDialogListener>;
				/**
				 * Constructs a new instance of the androidx.preference.PreferenceManager$OnDisplayPreferenceDialogListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onDisplayPreferenceDialog(param0: androidx.preference.Preference): void;
				});
				public constructor();
				public onDisplayPreferenceDialog(param0: androidx.preference.Preference): void;
			}
			export class OnNavigateToScreenListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.preference.PreferenceManager.OnNavigateToScreenListener>;
				/**
				 * Constructs a new instance of the androidx.preference.PreferenceManager$OnNavigateToScreenListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onNavigateToScreen(param0: androidx.preference.PreferenceScreen): void;
				});
				public constructor();
				public onNavigateToScreen(param0: androidx.preference.PreferenceScreen): void;
			}
			export class OnPreferenceTreeClickListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.preference.PreferenceManager.OnPreferenceTreeClickListener>;
				/**
				 * Constructs a new instance of the androidx.preference.PreferenceManager$OnPreferenceTreeClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPreferenceTreeClick(param0: androidx.preference.Preference): boolean;
				});
				public constructor();
				public onPreferenceTreeClick(param0: androidx.preference.Preference): boolean;
			}
			export abstract class PreferenceComparisonCallback extends java.lang.Object {
				public static class: java.lang.Class<androidx.preference.PreferenceManager.PreferenceComparisonCallback>;
				public arePreferenceContentsTheSame(param0: androidx.preference.Preference, param1: androidx.preference.Preference): boolean;
				public arePreferenceItemsTheSame(param0: androidx.preference.Preference, param1: androidx.preference.Preference): boolean;
				public constructor();
			}
			export class SimplePreferenceComparisonCallback extends androidx.preference.PreferenceManager.PreferenceComparisonCallback {
				public static class: java.lang.Class<androidx.preference.PreferenceManager.SimplePreferenceComparisonCallback>;
				public arePreferenceItemsTheSame(p1: androidx.preference.Preference, p2: androidx.preference.Preference): boolean;
				public arePreferenceContentsTheSame(param0: androidx.preference.Preference, param1: androidx.preference.Preference): boolean;
				public arePreferenceContentsTheSame(p1: androidx.preference.Preference, p2: androidx.preference.Preference): boolean;
				public arePreferenceItemsTheSame(param0: androidx.preference.Preference, param1: androidx.preference.Preference): boolean;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module preference {
		export class PreferenceRecyclerViewAccessibilityDelegate extends androidx.recyclerview.widget.RecyclerViewAccessibilityDelegate {
			public static class: java.lang.Class<androidx.preference.PreferenceRecyclerViewAccessibilityDelegate>;
			public constructor(param0: androidx.recyclerview.widget.RecyclerView);
			public constructor(recyclerView: androidx.recyclerview.widget.RecyclerView);
			public constructor();
			public constructor(param0: any);
			public getItemDelegate(): androidx.core.view.AccessibilityDelegateCompat;
		}
	}
}

declare module androidx {
	export module preference {
		export class PreferenceScreen extends androidx.preference.PreferenceGroup {
			public static class: java.lang.Class<androidx.preference.PreferenceScreen>;
			public onClick(): void;
			public constructor(context: android.content.Context);
			public isOnSameScreenAsChildren(): boolean;
			public shouldUseGeneratedIds(): boolean;
			public setShouldUseGeneratedIds(shouldUseGeneratedIds: boolean): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
		}
	}
}

declare module androidx {
	export module preference {
		export class PreferenceViewHolder extends androidx.recyclerview.widget.RecyclerView.ViewHolder {
			public static class: java.lang.Class<androidx.preference.PreferenceViewHolder>;
			public isDividerAllowedBelow(): boolean;
			public isDividerAllowedAbove(): boolean;
			public findViewById(id: number): android.view.View;
			public setDividerAllowedBelow(allowed: boolean): void;
			public setDividerAllowedAbove(allowed: boolean): void;
			public static createInstanceForTests(itemView: android.view.View): androidx.preference.PreferenceViewHolder;
		}
	}
}

declare module androidx {
	export module preference {
		export class SeekBarPreference extends androidx.preference.Preference {
			public static class: java.lang.Class<androidx.preference.SeekBarPreference>;
			public setMax(max: number): void;
			public onSetInitialValue(defaultValue: any): void;
			public getMin(): number;
			public setAdjustable(adjustable: boolean): void;
			public onBindViewHolder(holder: androidx.preference.PreferenceViewHolder): void;
			public getSeekBarIncrement(): number;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
			public onRestoreInstanceState(state: android.os.Parcelable): void;
			public onGetDefaultValue(a: android.content.res.TypedArray, index: number): any;
			public setShowSeekBarValue(showSeekBarValue: boolean): void;
			public setUpdatesContinuously(updatesContinuously: boolean): void;
			public getValue(): number;
			public constructor(context: android.content.Context);
			public getMax(): number;
			public setSeekBarIncrement(seekBarIncrement: number): void;
			/** @deprecated */
			public onSetInitialValue(restorePersistedValue: boolean, defaultValue: any): void;
			public isAdjustable(): boolean;
			public getUpdatesContinuously(): boolean;
			public setValue(seekBarValue: number): void;
			public getShowSeekBarValue(): boolean;
			public setMin(min: number): void;
			public onSaveInstanceState(): android.os.Parcelable;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
		}
		export module SeekBarPreference {
			export class SavedState extends androidx.preference.Preference.BaseSavedState {
				public static class: java.lang.Class<androidx.preference.SeekBarPreference.SavedState>;
				public static CREATOR: android.os.Parcelable.Creator<androidx.preference.SeekBarPreference.SavedState>;
				public writeToParcel(dest: android.os.Parcel, flags: number): void;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
			}
		}
	}
}

declare module androidx {
	export module preference {
		export class SwitchPreference extends androidx.preference.TwoStatePreference {
			public static class: java.lang.Class<androidx.preference.SwitchPreference>;
			public getSwitchTextOff(): string;
			public setSwitchTextOn(onText: string): void;
			public performClick(view: android.view.View): void;
			public onBindViewHolder(holder: androidx.preference.PreferenceViewHolder): void;
			public setSwitchTextOff(offText: string): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
			public performClick(): void;
			public constructor(context: android.content.Context);
			public setSwitchTextOn(resId: number): void;
			public setSwitchTextOff(resId: number): void;
			public getSwitchTextOn(): string;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
		}
		export module SwitchPreference {
			export class Listener extends java.lang.Object implements android.widget.CompoundButton.OnCheckedChangeListener {
				public static class: java.lang.Class<androidx.preference.SwitchPreference.Listener>;
				public onCheckedChanged(buttonView: android.widget.CompoundButton, isChecked: boolean): void;
				public onCheckedChanged(param0: android.widget.CompoundButton, param1: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module preference {
		export class SwitchPreferenceCompat extends androidx.preference.TwoStatePreference {
			public static class: java.lang.Class<androidx.preference.SwitchPreferenceCompat>;
			public getSwitchTextOff(): string;
			public setSwitchTextOn(onText: string): void;
			public performClick(view: android.view.View): void;
			public onBindViewHolder(holder: androidx.preference.PreferenceViewHolder): void;
			public setSwitchTextOff(offText: string): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
			public performClick(): void;
			public constructor(context: android.content.Context);
			public setSwitchTextOn(resId: number): void;
			public setSwitchTextOff(resId: number): void;
			public getSwitchTextOn(): string;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
		}
		export module SwitchPreferenceCompat {
			export class Listener extends java.lang.Object implements android.widget.CompoundButton.OnCheckedChangeListener {
				public static class: java.lang.Class<androidx.preference.SwitchPreferenceCompat.Listener>;
				public onCheckedChanged(buttonView: android.widget.CompoundButton, isChecked: boolean): void;
				public onCheckedChanged(param0: android.widget.CompoundButton, param1: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module preference {
		export abstract class TwoStatePreference extends androidx.preference.Preference {
			public static class: java.lang.Class<androidx.preference.TwoStatePreference>;
			public mChecked: boolean;
			public onClick(): void;
			public onSetInitialValue(defaultValue: any): void;
			public setSummaryOn(summary: string): void;
			public setSummaryOn(summaryResId: number): void;
			public getSummaryOff(): string;
			public isChecked(): boolean;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
			public onRestoreInstanceState(state: android.os.Parcelable): void;
			public setSummaryOff(summary: string): void;
			public onGetDefaultValue(a: android.content.res.TypedArray, index: number): any;
			public shouldDisableDependents(): boolean;
			public setChecked(checked: boolean): void;
			public syncSummaryView(holder: androidx.preference.PreferenceViewHolder): void;
			public constructor(context: android.content.Context);
			/** @deprecated */
			public onSetInitialValue(restorePersistedValue: boolean, defaultValue: any): void;
			public syncSummaryView(view: android.view.View): void;
			public setSummaryOff(summaryResId: number): void;
			public getDisableDependentsState(): boolean;
			public setDisableDependentsState(disableDependentsState: boolean): void;
			public getSummaryOn(): string;
			public onSaveInstanceState(): android.os.Parcelable;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
		}
		export module TwoStatePreference {
			export class SavedState extends androidx.preference.Preference.BaseSavedState {
				public static class: java.lang.Class<androidx.preference.TwoStatePreference.SavedState>;
				public static CREATOR: android.os.Parcelable.Creator<androidx.preference.TwoStatePreference.SavedState>;
				public writeToParcel(dest: android.os.Parcel, flags: number): void;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
			}
		}
	}
}

declare module androidx {
	export module preference {
		export class UnPressableLinearLayout extends android.widget.LinearLayout {
			public static class: java.lang.Class<androidx.preference.UnPressableLinearLayout>;
			public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
			public onStopNestedScroll(param0: android.view.View): void;
			public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
			public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
			public constructor(context: android.content.Context);
			public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
			public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
			public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
			public showContextMenuForChild(param0: android.view.View): boolean;
			public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
			public bringChildToFront(param0: android.view.View): void;
			public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
			public sendAccessibilityEvent(param0: number): void;
			public requestChildFocus(child: android.view.View, focused: android.view.View): void;
			public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
			public requestTransparentRegion(param0: android.view.View): void;
			public addView(child: android.view.View, width: number, height: number): void;
			public canResolveTextAlignment(): boolean;
			public getParent(): android.view.ViewParent;
			public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
			public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
			public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
			public getLayoutDirection(): number;
			public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
			public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
			public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
			public recomputeViewAttributes(param0: android.view.View): void;
			public focusSearch(direction: number): android.view.View;
			public createContextMenu(menu: android.view.ContextMenu): void;
			public isLayoutRequested(): boolean;
			public requestTransparentRegion(child: android.view.View): void;
			public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
			public dispatchSetPressed(pressed: boolean): void;
			public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
			public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
			public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
			public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
			public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
			public requestLayout(): void;
			public childDrawableStateChanged(param0: android.view.View): void;
			public removeView(view: android.view.View): void;
			public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
			public canResolveTextDirection(): boolean;
			public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
			public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
			/** @deprecated */
			public requestFitSystemWindows(): void;
			public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
			public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
			public focusSearch(focused: android.view.View, direction: number): android.view.View;
			public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
			public recomputeViewAttributes(child: android.view.View): void;
			public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
			public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
			public requestFitSystemWindows(): void;
			public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
			public childDrawableStateChanged(child: android.view.View): void;
			public isLayoutDirectionResolved(): boolean;
			public focusableViewAvailable(param0: android.view.View): void;
			public createContextMenu(param0: android.view.ContextMenu): void;
			public focusSearch(param0: android.view.View, param1: number): android.view.View;
			public canResolveLayoutDirection(): boolean;
			public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
			public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
			public addView(child: android.view.View, index: number): void;
			public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
			public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
			public getParentForAccessibility(): android.view.ViewParent;
			public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
			public focusableViewAvailable(v: android.view.View): void;
			public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
			public onStopNestedScroll(child: android.view.View): void;
			public getTextAlignment(): number;
			public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
			public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
			public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
			public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
			public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
			public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
			public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
			public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
			public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
			public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
			public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
			public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
			public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
			public isTextAlignmentResolved(): boolean;
			public removeView(param0: android.view.View): void;
			public clearChildFocus(param0: android.view.View): void;
			public showContextMenuForChild(originalView: android.view.View): boolean;
			public getTextDirection(): number;
			public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
			public clearChildFocus(child: android.view.View): void;
			public requestDisallowInterceptTouchEvent(param0: boolean): void;
			public bringChildToFront(child: android.view.View): void;
			public isTextDirectionResolved(): boolean;
			public addView(child: android.view.View): void;
			public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
			public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
			public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
			public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
			public sendAccessibilityEvent(eventType: number): void;
		}
	}
}

declare module androidx {
	export module preference {
		export module internal {
			export class PreferenceImageView extends android.widget.ImageView {
				public static class: java.lang.Class<androidx.preference.internal.PreferenceImageView>;
				public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public getMaxWidth(): number;
				public setMaxHeight(maxHeight: number): void;
				public getMaxHeight(): number;
				public invalidateDrawable(dr: android.graphics.drawable.Drawable): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public constructor(context: android.content.Context);
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public setMaxWidth(maxWidth: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
			}
		}
	}
}

//Generics information:
//androidx.preference.Preference.SummaryProvider:1

