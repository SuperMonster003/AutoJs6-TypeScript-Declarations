declare module androidx {
	export module fragment {
		export module app {
			export class BackStackRecord extends androidx.fragment.app.FragmentTransaction implements androidx.fragment.app.FragmentManager.BackStackEntry, androidx.fragment.app.FragmentManager.OpGenerator {
				public static class: java.lang.Class<androidx.fragment.app.BackStackRecord>;
				public commitAllowingStateLoss(): number;
				public commitNowAllowingStateLoss(): void;
				/** @deprecated */
				public getBreadCrumbTitle(): string;
				public setMaxLifecycle(fragment: androidx.fragment.app.Fragment, state: androidx.lifecycle.Lifecycle.State): androidx.fragment.app.FragmentTransaction;
				public generateOps(param0: java.util.ArrayList<androidx.fragment.app.BackStackRecord>, param1: java.util.ArrayList<java.lang.Boolean>): boolean;
				/** @deprecated */
				public getBreadCrumbShortTitle(): string;
				public hide(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public show(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public remove(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public runOnCommitRunnables(): void;
				/** @deprecated */
				public getBreadCrumbShortTitleRes(): number;
				public dump(prefix: string, writer: java.io.PrintWriter): void;
				public isEmpty(): boolean;
				public setPrimaryNavigationFragment(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public detach(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public commitNow(): void;
				public generateOps(records: java.util.ArrayList<androidx.fragment.app.BackStackRecord>, isRecordPop: java.util.ArrayList<java.lang.Boolean>): boolean;
				public dump(prefix: string, writer: java.io.PrintWriter, full: boolean): void;
				public getId(): number;
				public getName(): string;
				public getBreadCrumbTitle(): string;
				public toString(): string;
				/** @deprecated */
				public getBreadCrumbTitleRes(): number;
				public commit(): number;
				public getBreadCrumbShortTitleRes(): number;
				public getBreadCrumbShortTitle(): string;
				public getBreadCrumbTitleRes(): number;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class BackStackState extends java.lang.Object implements android.os.Parcelable {
				public static class: java.lang.Class<androidx.fragment.app.BackStackState>;
				public static CREATOR: android.os.Parcelable.Creator<androidx.fragment.app.BackStackState>;
				public constructor(bse: androidx.fragment.app.BackStackRecord);
				public constructor(_in_: android.os.Parcel);
				public writeToParcel(dest: android.os.Parcel, flags: number): void;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
				public instantiate(fm: androidx.fragment.app.FragmentManager): androidx.fragment.app.BackStackRecord;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class DefaultSpecialEffectsController extends androidx.fragment.app.SpecialEffectsController {
				public static class: java.lang.Class<androidx.fragment.app.DefaultSpecialEffectsController>;
			}
			export module DefaultSpecialEffectsController {
				export class AnimationInfo extends androidx.fragment.app.DefaultSpecialEffectsController.SpecialEffectsInfo {
					public static class: java.lang.Class<androidx.fragment.app.DefaultSpecialEffectsController.AnimationInfo>;
				}
				export class SpecialEffectsInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.DefaultSpecialEffectsController.SpecialEffectsInfo>;
				}
				export class TransitionInfo extends androidx.fragment.app.DefaultSpecialEffectsController.SpecialEffectsInfo {
					public static class: java.lang.Class<androidx.fragment.app.DefaultSpecialEffectsController.TransitionInfo>;
					public hasSharedElementTransition(): boolean;
					public getSharedElementTransition(): any;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class DialogFragment extends androidx.fragment.app.Fragment implements android.content.DialogInterface.OnCancelListener, android.content.DialogInterface.OnDismissListener {
				public static class: java.lang.Class<androidx.fragment.app.DialogFragment>;
				public static STYLE_NORMAL: number;
				public static STYLE_NO_TITLE: number;
				public static STYLE_NO_FRAME: number;
				public static STYLE_NO_INPUT: number;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public setStyle(style: number, theme: number): void;
				public onCancel(dialog: android.content.DialogInterface): void;
				public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public show(manager: androidx.fragment.app.FragmentManager, tag: string): void;
				public showNow(manager: androidx.fragment.app.FragmentManager, tag: string): void;
				/** @deprecated */
				public onAttach(activity: android.app.Activity): void;
				public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
				public getDialog(): android.app.Dialog;
				public registerForActivityResult(contract: androidx.activity.result.contract.ActivityResultContract, callback: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public dismiss(): void;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public setShowsDialog(showsDialog: boolean): void;
				public onConfigurationChanged(param0: android.content.res.Configuration): void;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public onCreate(savedInstanceState: android.os.Bundle): void;
				public onDismiss(dialog: android.content.DialogInterface): void;
				public onStop(): void;
				public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
				public dismissAllowingStateLoss(): void;
				public getShowsDialog(): boolean;
				public onLowMemory(): void;
				public onConfigurationChanged(newConfig: android.content.res.Configuration): void;
				public requireDialog(): android.app.Dialog;
				public onSaveInstanceState(outState: android.os.Bundle): void;
				public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
				public show(transaction: androidx.fragment.app.FragmentTransaction, tag: string): number;
				public onCreateDialog(savedInstanceState: android.os.Bundle): android.app.Dialog;
				public onGetLayoutInflater(savedInstanceState: android.os.Bundle): android.view.LayoutInflater;
				public setupDialog(dialog: android.app.Dialog, style: number): void;
				public onStart(): void;
				public setCancelable(cancelable: boolean): void;
				public getTheme(): number;
				public registerForActivityResult(contract: androidx.activity.result.contract.ActivityResultContract, registry: androidx.activity.result.ActivityResultRegistry, callback: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public constructor(contentLayoutId: number);
				public onAttach(context: android.content.Context): void;
				public onDismiss(param0: android.content.DialogInterface): void;
				public isCancelable(): boolean;
				public onViewStateRestored(savedInstanceState: android.os.Bundle): void;
				public onDestroyView(): void;
				public onCancel(param0: android.content.DialogInterface): void;
				public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public onDetach(): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class Fragment extends java.lang.Object implements android.content.ComponentCallbacks, android.view.View.OnCreateContextMenuListener, androidx.lifecycle.LifecycleOwner, androidx.lifecycle.ViewModelStoreOwner, androidx.lifecycle.HasDefaultViewModelProviderFactory, androidx.savedstate.SavedStateRegistryOwner, androidx.activity.result.ActivityResultCaller {
				public static class: java.lang.Class<androidx.fragment.app.Fragment>;
				public onInflate(context: android.content.Context, attrs: android.util.AttributeSet, savedInstanceState: android.os.Bundle): void;
				public onDestroyOptionsMenu(): void;
				public startActivity(intent: android.content.Intent, options: android.os.Bundle): void;
				/** @deprecated */
				public getFragmentManager(): androidx.fragment.app.FragmentManager;
				public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
				public isStateSaved(): boolean;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				/** @deprecated */
				public onActivityCreated(savedInstanceState: android.os.Bundle): void;
				/** @deprecated */
				public setTargetFragment(fragment: androidx.fragment.app.Fragment, requestCode: number): void;
				public onPictureInPictureModeChanged(isInPictureInPictureMode: boolean): void;
				public onCreate(savedInstanceState: android.os.Bundle): void;
				public requireArguments(): android.os.Bundle;
				public hasOptionsMenu(): boolean;
				/** @deprecated */
				public static instantiate(context: android.content.Context, fname: string, args: android.os.Bundle): androidx.fragment.app.Fragment;
				public isInLayout(): boolean;
				public getEnterTransition(): any;
				public onOptionsItemSelected(item: android.view.MenuItem): boolean;
				public setHasOptionsMenu(hasMenu: boolean): void;
				public onCreateAnimation(transit: number, enter: boolean, nextAnim: number): android.view.animation.Animation;
				public onGetLayoutInflater(savedInstanceState: android.os.Bundle): android.view.LayoutInflater;
				public onStart(): void;
				public getSharedElementReturnTransition(): any;
				public getLayoutInflater(): android.view.LayoutInflater;
				public getContext(): android.content.Context;
				public startPostponedEnterTransition(): void;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				/** @deprecated */
				public getLoaderManager(): androidx.loader.app.LoaderManager;
				public setSharedElementReturnTransition(transition: any): void;
				public onCreateAnimator(transit: number, enter: boolean, nextAnim: number): android.animation.Animator;
				public isHidden(): boolean;
				/** @deprecated */
				public getRetainInstance(): boolean;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public onCreateOptionsMenu(menu: android.view.Menu, inflater: android.view.MenuInflater): void;
				/** @deprecated */
				public onActivityResult(requestCode: number, resultCode: number, data: android.content.Intent): void;
				public getActivity(): androidx.fragment.app.FragmentActivity;
				/** @deprecated */
				public onInflate(activity: android.app.Activity, attrs: android.util.AttributeSet, savedInstanceState: android.os.Bundle): void;
				public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
				public getString(resId: number): string;
				/** @deprecated */
				public getTargetFragment(): androidx.fragment.app.Fragment;
				public setReturnTransition(transition: any): void;
				public getExitTransition(): any;
				public getReenterTransition(): any;
				public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
				/** @deprecated */
				public getUserVisibleHint(): boolean;
				public equals(obj: any): boolean;
				public requireHost(): any;
				/** @deprecated */
				public requestPermissions(permissions: string[], requestCode: number): void;
				public requireView(): android.view.View;
				public setSharedElementEnterTransition(transition: any): void;
				/** @deprecated */
				public getTargetRequestCode(): number;
				public onViewStateRestored(savedInstanceState: android.os.Bundle): void;
				public setExitTransition(transition: any): void;
				public isRemoving(): boolean;
				public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public setEnterTransition(transition: any): void;
				public onOptionsMenuClosed(menu: android.view.Menu): void;
				public registerForContextMenu(view: android.view.View): void;
				public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public constructor();
				public onConfigurationChanged(param0: android.content.res.Configuration): void;
				public getAllowReturnTransitionOverlap(): boolean;
				public setMenuVisibility(menuVisible: boolean): void;
				public postponeEnterTransition(duration: number, param1: java.util.concurrent.TimeUnit): void;
				public hashCode(): number;
				/** @deprecated */
				public requireFragmentManager(): androidx.fragment.app.FragmentManager;
				public getSharedElementEnterTransition(): any;
				/** @deprecated */
				public startActivityForResult(intent: android.content.Intent, requestCode: number, options: android.os.Bundle): void;
				public requireParentFragment(): androidx.fragment.app.Fragment;
				public getString(resId: number, ...formatArgs: any[]): string;
				public setArguments(args: android.os.Bundle): void;
				public shouldShowRequestPermissionRationale(permission: string): boolean;
				public onResume(): void;
				public getViewLifecycleOwner(): androidx.lifecycle.LifecycleOwner;
				public getTag(): string;
				public onConfigurationChanged(newConfig: android.content.res.Configuration): void;
				public unregisterForContextMenu(view: android.view.View): void;
				/** @deprecated */
				public onRequestPermissionsResult(requestCode: number, permissions: string[], grantResults: number[]): void;
				public onViewCreated(view: android.view.View, savedInstanceState: android.os.Bundle): void;
				public onSaveInstanceState(outState: android.os.Bundle): void;
				public toString(): string;
				/** @deprecated */
				public static instantiate(context: android.content.Context, fname: string): androidx.fragment.app.Fragment;
				/** @deprecated */
				public setUserVisibleHint(isVisibleToUser: boolean): void;
				public getParentFragmentManager(): androidx.fragment.app.FragmentManager;
				public getHost(): any;
				public isResumed(): boolean;
				public getAllowEnterTransitionOverlap(): boolean;
				public getText(resId: number): string;
				public onDestroyView(): void;
				public requireActivity(): androidx.fragment.app.FragmentActivity;
				public onDetach(): void;
				public postponeEnterTransition(): void;
				/** @deprecated */
				public setRetainInstance(retain: boolean): void;
				public isVisible(): boolean;
				public getChildFragmentManager(): androidx.fragment.app.FragmentManager;
				public setExitSharedElementCallback(callback: androidx.core.app.SharedElementCallback): void;
				public setInitialSavedState(state: androidx.fragment.app.Fragment.SavedState): void;
				public startActivity(intent: android.content.Intent): void;
				public setEnterSharedElementCallback(callback: androidx.core.app.SharedElementCallback): void;
				public onPrimaryNavigationFragmentChanged(isPrimaryNavigationFragment: boolean): void;
				public onPause(): void;
				/** @deprecated */
				public onAttach(activity: android.app.Activity): void;
				public registerForActivityResult(contract: androidx.activity.result.contract.ActivityResultContract, callback: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public requireContext(): android.content.Context;
				/** @deprecated */
				public startIntentSenderForResult(intent: android.content.IntentSender, requestCode: number, fillInIntent: android.content.Intent, flagsMask: number, flagsValues: number, extraFlags: number, options: android.os.Bundle): void;
				public onContextItemSelected(item: android.view.MenuItem): boolean;
				public setAllowReturnTransitionOverlap(allow: boolean): void;
				/** @deprecated */
				public startActivityForResult(intent: android.content.Intent, requestCode: number): void;
				public setAllowEnterTransitionOverlap(allow: boolean): void;
				public getArguments(): android.os.Bundle;
				public onHiddenChanged(hidden: boolean): void;
				public equals(o: any): boolean;
				public isMenuVisible(): boolean;
				public onStop(): void;
				public setReenterTransition(transition: any): void;
				public getView(): android.view.View;
				public onCreateView(inflater: android.view.LayoutInflater, container: android.view.ViewGroup, savedInstanceState: android.os.Bundle): android.view.View;
				public onPrepareOptionsMenu(menu: android.view.Menu): void;
				public getViewLifecycleOwnerLiveData(): androidx.lifecycle.LiveData<androidx.lifecycle.LifecycleOwner>;
				public onLowMemory(): void;
				public getId(): number;
				public dump(prefix: string, fd: java.io.FileDescriptor, writer: java.io.PrintWriter, args: string[]): void;
				public onMultiWindowModeChanged(isInMultiWindowMode: boolean): void;
				public getReturnTransition(): any;
				public getResources(): android.content.res.Resources;
				public isAdded(): boolean;
				public getParentFragment(): androidx.fragment.app.Fragment;
				public registerForActivityResult(contract: androidx.activity.result.contract.ActivityResultContract, registry: androidx.activity.result.ActivityResultRegistry, callback: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public constructor(contentLayoutId: number);
				public isDetached(): boolean;
				public onAttach(context: android.content.Context): void;
				public onDestroy(): void;
				/** @deprecated */
				public onAttachFragment(childFragment: androidx.fragment.app.Fragment): void;
				/** @deprecated */
				public getLayoutInflater(savedFragmentState: android.os.Bundle): android.view.LayoutInflater;
			}
			export module Fragment {
				export class AnimationInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.Fragment.AnimationInfo>;
				}
				export class InstantiationException extends java.lang.RuntimeException {
					public static class: java.lang.Class<androidx.fragment.app.Fragment.InstantiationException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
					public constructor();
					public constructor(msg: string, cause: java.lang.Exception);
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export abstract class OnPreAttachedListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.Fragment.OnPreAttachedListener>;
				}
				export class OnStartEnterTransitionListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.Fragment.OnStartEnterTransitionListener>;
					/**
					 * Constructs a new instance of the androidx.fragment.app.Fragment$OnStartEnterTransitionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onStartEnterTransition(): void;
						startListening(): void;
					});
					public constructor();
					public onStartEnterTransition(): void;
					public startListening(): void;
				}
				export class SavedState extends java.lang.Object implements android.os.Parcelable {
					public static class: java.lang.Class<androidx.fragment.app.Fragment.SavedState>;
					public static CREATOR: android.os.Parcelable.Creator<androidx.fragment.app.Fragment.SavedState>;
					public describeContents(): number;
					public writeToParcel(dest: android.os.Parcel, flags: number): void;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentActivity extends androidx.activity.ComponentActivity implements androidx.core.app.ActivityCompat.OnRequestPermissionsResultCallback, androidx.core.app.ActivityCompat.RequestPermissionsRequestCodeValidator {
				public static class: java.lang.Class<androidx.fragment.app.FragmentActivity>;
				public startActivityFromFragment(fragment: android.app.Fragment, intent: android.content.Intent, requestCode: number): void;
				public onActionModeStarted(mode: android.view.ActionMode): void;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onPanelClosed(featureId: number, menu: android.view.Menu): void;
				public onMenuItemSelected(featureId: number, item: android.view.MenuItem): boolean;
				public onCreateView(name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
				public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
				public setExitSharedElementCallback(callback: any): void;
				public getSupportFragmentManager(): androidx.fragment.app.FragmentManager;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: android.view.Menu, deviceId: number): void;
				public onPictureInPictureModeChanged(isInPictureInPictureMode: boolean): void;
				public onCreate(savedInstanceState: android.os.Bundle): void;
				public supportFinishAfterTransition(): void;
				public onTrimMemory(param0: number): void;
				/** @deprecated */
				public startIntentSenderFromFragment(fragment: androidx.fragment.app.Fragment, intent: android.content.IntentSender, requestCode: number, fillInIntent: android.content.Intent, flagsMask: number, flagsValues: number, extraFlags: number, options: android.os.Bundle): void;
				public dispatchGenericMotionEvent(ev: android.view.MotionEvent): boolean;
				public onCreateView(parent: android.view.View, name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
				public onWindowAttributesChanged(params: android.view.WindowManager.LayoutParams): void;
				public onActionModeFinished(mode: android.view.ActionMode): void;
				public addOnContextAvailableListener(param0: androidx.activity.contextaware.OnContextAvailableListener): void;
				public getOnBackPressedDispatcher(): androidx.activity.OnBackPressedDispatcher;
				public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
				public superDispatchKeyEvent(param0: android.view.KeyEvent): boolean;
				public onMenuOpened(featureId: number, menu: android.view.Menu): boolean;
				public onPostResume(): void;
				public onStart(): void;
				public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
				public onNewIntent(intent: android.content.Intent): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public dispatchTouchEvent(ev: android.view.MotionEvent): boolean;
				public constructor(base: android.content.Context, theme: android.content.res.Resources.Theme);
				public onResumeFragments(): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onTrimMemory(level: number): void;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public onCreatePanelView(param0: number): android.view.View;
				public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
				/** @deprecated */
				public onAttachFragment(fragment: androidx.fragment.app.Fragment): void;
				public onActionModeFinished(param0: android.view.ActionMode): void;
				public onRequestPermissionsResult(param0: number, param1: string[], param2: number[]): void;
				public constructor(base: android.content.Context);
				public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
				public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
				public getActivityResultRegistry(): androidx.activity.result.ActivityResultRegistry;
				public constructor(param0: number);
				public onAttachFragment(fragment: android.app.Fragment): void;
				public dispatchTrackballEvent(ev: android.view.MotionEvent): boolean;
				public onAttachedToWindow(): void;
				public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public supportPostponeEnterTransition(): void;
				public onCreate(savedInstanceState: android.os.Bundle, persistentState: any): void;
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
				public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				/** @deprecated */
				public supportInvalidateOptionsMenu(): void;
				public constructor();
				public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
				public onSearchRequested(param0: any): boolean;
				public onWindowFocusChanged(hasFocus: boolean): void;
				public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
				public onPanelClosed(param0: number, param1: android.view.Menu): void;
				/** @deprecated */
				public getSupportLoaderManager(): androidx.loader.app.LoaderManager;
				public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
				public onResume(): void;
				public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
				public setEnterSharedElementCallback(callback: any): void;
				public onConfigurationChanged(newConfig: android.content.res.Configuration): void;
				public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
				public onRequestPermissionsResult(requestCode: number, permissions: string[], grantResults: number[]): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public onContentChanged(): void;
				public validateRequestPermissionsRequestCode(param0: number): void;
				public onDetachedFromWindow(): void;
				public onPreparePanel(featureId: number, view: android.view.View, menu: android.view.Menu): boolean;
				public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
				public onSearchRequested(): boolean;
				public onCreatePanelMenu(featureId: number, menu: android.view.Menu): boolean;
				public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
				public onActivityResult(requestCode: number, resultCode: number, data: android.content.Intent): void;
				public setEnterSharedElementCallback(callback: androidx.core.app.SharedElementCallback): void;
				public onPause(): void;
				public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
				public onCreatePanelView(featureId: number): android.view.View;
				public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
				public setExitSharedElementCallback(listener: androidx.core.app.SharedElementCallback): void;
				public onCreate(param0: android.os.Bundle): void;
				public startActivityFromFragment(fragment: android.app.Fragment, intent: android.content.Intent, requestCode: number, options: android.os.Bundle): void;
				public peekAvailableContext(): android.content.Context;
				public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public onStop(): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onWindowStartingActionMode(callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public removeOnContextAvailableListener(param0: androidx.activity.contextaware.OnContextAvailableListener): void;
				public onActionModeStarted(param0: android.view.ActionMode): void;
				public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;
				public onLowMemory(): void;
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
				public dump(prefix: string, fd: java.io.FileDescriptor, writer: java.io.PrintWriter, args: string[]): void;
				public onMultiWindowModeChanged(isInMultiWindowMode: boolean): void;
				public onStateNotSaved(): void;
				public constructor(base: android.content.Context, themeResId: number);
				/** @deprecated */
				public onPrepareOptionsPanel(view: android.view.View, menu: android.view.Menu): boolean;
				public startActivityFromFragment(fragment: androidx.fragment.app.Fragment, intent: android.content.Intent, requestCode: number, options: android.os.Bundle): void;
				public onSearchRequested(searchEvent: any): boolean;
				public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
				public constructor(contentLayoutId: number);
				public onDestroy(): void;
				public startActivityFromFragment(fragment: androidx.fragment.app.Fragment, intent: android.content.Intent, requestCode: number): void;
				public onWindowFocusChanged(param0: boolean): void;
				/** @deprecated */
				public validateRequestPermissionsRequestCode(requestCode: number): void;
				public supportStartPostponedEnterTransition(): void;
			}
			export module FragmentActivity {
				export class HostCallbacks extends androidx.fragment.app.FragmentHostCallback<androidx.fragment.app.FragmentActivity> {
					public static class: java.lang.Class<androidx.fragment.app.FragmentActivity.HostCallbacks>;
					public onGetLayoutInflater(): android.view.LayoutInflater;
					public onShouldSaveFragmentState(fragment: androidx.fragment.app.Fragment): boolean;
					public getOnBackPressedDispatcher(): androidx.activity.OnBackPressedDispatcher;
					public getViewModelStore(): androidx.lifecycle.ViewModelStore;
					public onGetWindowAnimations(): number;
					public constructor(this$0: androidx.fragment.app.FragmentActivity);
					public getLifecycle(): androidx.lifecycle.Lifecycle;
					public onFindViewById(id: number): android.view.View;
					public onAttachFragment(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment): void;
					public onShouldShowRequestPermissionRationale(permission: string): boolean;
					public constructor(context: android.content.Context, handler: android.os.Handler, windowAnimations: number);
					public onHasWindowAnimations(): boolean;
					public getActivityResultRegistry(): androidx.activity.result.ActivityResultRegistry;
					public onGetHost(): androidx.fragment.app.FragmentActivity;
					public onHasView(): boolean;
					public onGetHost(): any;
					public constructor();
					public onSupportInvalidateOptionsMenu(): void;
					public onDump(prefix: string, fd: java.io.FileDescriptor, writer: java.io.PrintWriter, args: string[]): void;
					public onAttachFragment(fragmentManager: androidx.fragment.app.FragmentManager, fragment: androidx.fragment.app.Fragment): void;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentAnim extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentAnim>;
			}
			export module FragmentAnim {
				export class AnimationOrAnimator extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.FragmentAnim.AnimationOrAnimator>;
					public animation: android.view.animation.Animation;
					public animator: android.animation.Animator;
				}
				export class EndViewTransitionAnimation extends android.view.animation.AnimationSet implements java.lang.Runnable {
					public static class: java.lang.Class<androidx.fragment.app.FragmentAnim.EndViewTransitionAnimation>;
					public getTransformation(currentTime: number, param1: android.view.animation.Transformation): boolean;
					public run(): void;
					public getTransformation(currentTime: number, param1: android.view.animation.Transformation, outTransformation: number): boolean;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export abstract class FragmentContainer extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentContainer>;
				/** @deprecated */
				public instantiate(context: android.content.Context, className: string, arguments: android.os.Bundle): androidx.fragment.app.Fragment;
				public onFindViewById(param0: number): android.view.View;
				public onHasView(): boolean;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentContainerView extends android.widget.FrameLayout {
				public static class: java.lang.Class<androidx.fragment.app.FragmentContainerView>;
				public addView(child: android.view.View, width: number, height: number): void;
				public dispatchApplyWindowInsets(insets: android.view.WindowInsets): android.view.WindowInsets;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public removeViewAt(index: number): void;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public onApplyWindowInsets(insets: android.view.WindowInsets): android.view.WindowInsets;
				public constructor(context: android.content.Context);
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public drawChild(canvas: android.graphics.Canvas, child: android.view.View, drawingTime: number): boolean;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public setLayoutTransition(transition: android.animation.LayoutTransition): void;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public removeViewInLayout(view: android.view.View): void;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public endViewTransition(view: android.view.View): void;
				public removeAllViewsInLayout(): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public dispatchDraw(canvas: android.graphics.Canvas): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public addView(child: android.view.View): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public addView(child: android.view.View, index: number): void;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public removeDetachedView(child: android.view.View, animate: boolean): void;
				public onStopNestedScroll(child: android.view.View): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public clearChildFocus(param0: android.view.View): void;
				public removeViews(start: number, count: number): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public setOnApplyWindowInsetsListener(listener: android.view.View.OnApplyWindowInsetsListener): void;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(eventType: number): void;
				public startViewTransition(view: android.view.View): void;
				public requestFitSystemWindows(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public addViewInLayout(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams, preventRequestLayout: boolean): boolean;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public focusSearch(direction: number): android.view.View;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				public focusableViewAvailable(param0: android.view.View): void;
				public addViewInLayout(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): boolean;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public canResolveTextAlignment(): boolean;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				public removeView(view: android.view.View): void;
				public requestLayout(): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onStopNestedScroll(param0: android.view.View): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				public removeViewsInLayout(start: number, count: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentController extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentController>;
				public dispatchPrepareOptionsMenu(menu: android.view.Menu): boolean;
				public dispatchPictureInPictureModeChanged(isInPictureInPictureMode: boolean): void;
				public getActiveFragments(actives: java.util.List<androidx.fragment.app.Fragment>): java.util.List<androidx.fragment.app.Fragment>;
				public dispatchLowMemory(): void;
				public getActiveFragmentsCount(): number;
				public saveAllState(): android.os.Parcelable;
				public getSupportFragmentManager(): androidx.fragment.app.FragmentManager;
				public dispatchStop(): void;
				/** @deprecated */
				public retainNestedNonConfig(): androidx.fragment.app.FragmentManagerNonConfig;
				public noteStateNotSaved(): void;
				public restoreSaveState(state: android.os.Parcelable): void;
				/** @deprecated */
				public restoreAllState(state: android.os.Parcelable, nonConfigList: java.util.List<androidx.fragment.app.Fragment>): void;
				/** @deprecated */
				public dispatchReallyStop(): void;
				public findFragmentByWho(who: string): androidx.fragment.app.Fragment;
				public dispatchResume(): void;
				/** @deprecated */
				public getSupportLoaderManager(): androidx.loader.app.LoaderManager;
				public dispatchDestroy(): void;
				/** @deprecated */
				public doLoaderStart(): void;
				public attachHost(parent: androidx.fragment.app.Fragment): void;
				public static createController(callbacks: androidx.fragment.app.FragmentHostCallback<any>): androidx.fragment.app.FragmentController;
				/** @deprecated */
				public reportLoaderStart(): void;
				public onCreateView(parent: android.view.View, name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
				public dispatchStart(): void;
				/** @deprecated */
				public restoreAllState(state: android.os.Parcelable, nonConfig: androidx.fragment.app.FragmentManagerNonConfig): void;
				/** @deprecated */
				public doLoaderRetain(): void;
				/** @deprecated */
				public retainLoaderNonConfig(): androidx.collection.SimpleArrayMap<string,androidx.loader.app.LoaderManager>;
				public dispatchOptionsMenuClosed(menu: android.view.Menu): void;
				public dispatchPause(): void;
				public dispatchCreate(): void;
				public dispatchContextItemSelected(item: android.view.MenuItem): boolean;
				/** @deprecated */
				public dumpLoaders(prefix: string, fd: java.io.FileDescriptor, writer: java.io.PrintWriter, args: string[]): void;
				/** @deprecated */
				public restoreLoaderNonConfig(loaderManagers: androidx.collection.SimpleArrayMap<string,androidx.loader.app.LoaderManager>): void;
				/** @deprecated */
				public doLoaderStop(retain: boolean): void;
				/** @deprecated */
				public doLoaderDestroy(): void;
				/** @deprecated */
				public retainNonConfig(): java.util.List<androidx.fragment.app.Fragment>;
				public dispatchActivityCreated(): void;
				public dispatchDestroyView(): void;
				public dispatchCreateOptionsMenu(menu: android.view.Menu, inflater: android.view.MenuInflater): boolean;
				public execPendingActions(): boolean;
				public dispatchConfigurationChanged(newConfig: android.content.res.Configuration): void;
				public dispatchOptionsItemSelected(item: android.view.MenuItem): boolean;
				public dispatchMultiWindowModeChanged(isInMultiWindowMode: boolean): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentFactory extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentFactory>;
				public static loadFragmentClass(classLoader: java.lang.ClassLoader, className: string): java.lang.Class<any>;
				public instantiate(classLoader: java.lang.ClassLoader, className: string): androidx.fragment.app.Fragment;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export abstract class FragmentHostCallback<E>  extends androidx.fragment.app.FragmentContainer {
				public static class: java.lang.Class<androidx.fragment.app.FragmentHostCallback<any>>;
				public onGetLayoutInflater(): android.view.LayoutInflater;
				public onShouldSaveFragmentState(fragment: androidx.fragment.app.Fragment): boolean;
				public onStartActivityFromFragment(fragment: androidx.fragment.app.Fragment, intent: android.content.Intent, requestCode: number, options: android.os.Bundle): void;
				public constructor(context: android.content.Context, handler: android.os.Handler, windowAnimations: number);
				public onSupportInvalidateOptionsMenu(): void;
				/** @deprecated */
				public onStartIntentSenderFromFragment(fragment: androidx.fragment.app.Fragment, intent: android.content.IntentSender, requestCode: number, fillInIntent: android.content.Intent, flagsMask: number, flagsValues: number, extraFlags: number, options: android.os.Bundle): void;
				public onStartActivityFromFragment(fragment: androidx.fragment.app.Fragment, intent: android.content.Intent, requestCode: number): void;
				public onFindViewById(param0: number): android.view.View;
				public onShouldShowRequestPermissionRationale(permission: string): boolean;
				public onHasView(): boolean;
				public onDump(prefix: string, fd: java.io.FileDescriptor, writer: java.io.PrintWriter, args: string[]): void;
				public onHasWindowAnimations(): boolean;
				/** @deprecated */
				public onRequestPermissionsFromFragment(fragment: androidx.fragment.app.Fragment, permissions: string[], requestCode: number): void;
				public constructor();
				public onGetWindowAnimations(): number;
				public onFindViewById(id: number): android.view.View;
				public onGetHost(): any;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentLayoutInflaterFactory extends java.lang.Object implements android.view.LayoutInflater.Factory2 {
				public static class: java.lang.Class<androidx.fragment.app.FragmentLayoutInflaterFactory>;
				public onCreateView(parent: android.view.View, name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
				public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
				public onCreateView(name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
				public onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentLifecycleCallbacksDispatcher extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentLifecycleCallbacksDispatcher>;
				public registerFragmentLifecycleCallbacks(cb: androidx.fragment.app.FragmentManager.FragmentLifecycleCallbacks, recursive: boolean): void;
				public unregisterFragmentLifecycleCallbacks(cb: androidx.fragment.app.FragmentManager.FragmentLifecycleCallbacks): void;
			}
			export module FragmentLifecycleCallbacksDispatcher {
				export class FragmentLifecycleCallbacksHolder extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.FragmentLifecycleCallbacksDispatcher.FragmentLifecycleCallbacksHolder>;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export abstract class FragmentManager extends java.lang.Object implements androidx.fragment.app.FragmentResultOwner {
				public static class: java.lang.Class<androidx.fragment.app.FragmentManager>;
				public static POP_BACK_STACK_INCLUSIVE: number;
				/** @deprecated */
				public openTransaction(): androidx.fragment.app.FragmentTransaction;
				public isDestroyed(): boolean;
				public getFragment(bundle: android.os.Bundle, key: string): androidx.fragment.app.Fragment;
				public popBackStackImmediate(name: string, flags: number): boolean;
				public getFragmentFactory(): androidx.fragment.app.FragmentFactory;
				public executePendingTransactions(): boolean;
				public setFragmentResultListener(requestKey: string, lifecycleOwner: androidx.lifecycle.LifecycleOwner, listener: androidx.fragment.app.FragmentResultListener): void;
				public setFragmentFactory(fragmentFactory: androidx.fragment.app.FragmentFactory): void;
				public isStateSaved(): boolean;
				public popBackStack(id: number, flags: number): void;
				public clearFragmentResultListener(requestKey: string): void;
				public constructor();
				public static findFragment(view: android.view.View): androidx.fragment.app.Fragment;
				public popBackStack(): void;
				public setFragmentResult(param0: string, param1: android.os.Bundle): void;
				public registerFragmentLifecycleCallbacks(cb: androidx.fragment.app.FragmentManager.FragmentLifecycleCallbacks, recursive: boolean): void;
				public unregisterFragmentLifecycleCallbacks(cb: androidx.fragment.app.FragmentManager.FragmentLifecycleCallbacks): void;
				public saveFragmentInstanceState(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.Fragment.SavedState;
				public removeFragmentOnAttachListener(listener: androidx.fragment.app.FragmentOnAttachListener): void;
				public getPrimaryNavigationFragment(): androidx.fragment.app.Fragment;
				public setFragmentResult(requestKey: string, result: android.os.Bundle): void;
				public getBackStackEntryCount(): number;
				public addOnBackStackChangedListener(listener: androidx.fragment.app.FragmentManager.OnBackStackChangedListener): void;
				public setFragmentResultListener(param0: string, param1: androidx.lifecycle.LifecycleOwner, param2: androidx.fragment.app.FragmentResultListener): void;
				public addFragmentOnAttachListener(listener: androidx.fragment.app.FragmentOnAttachListener): void;
				public dump(prefix: string, fd: java.io.FileDescriptor, writer: java.io.PrintWriter, args: string[]): void;
				public popBackStackImmediate(id: number, flags: number): boolean;
				public clearFragmentResult(requestKey: string): void;
				public putFragment(bundle: android.os.Bundle, key: string, fragment: androidx.fragment.app.Fragment): void;
				public toString(): string;
				public popBackStack(name: string, flags: number): void;
				public getBackStackEntryAt(index: number): androidx.fragment.app.FragmentManager.BackStackEntry;
				public beginTransaction(): androidx.fragment.app.FragmentTransaction;
				public getFragments(): java.util.List<androidx.fragment.app.Fragment>;
				public popBackStackImmediate(): boolean;
				/** @deprecated */
				public static enableDebugLogging(enabled: boolean): void;
				public findFragmentByTag(tag: string): androidx.fragment.app.Fragment;
				public static enableNewStateManager(enabled: boolean): void;
				public clearFragmentResult(param0: string): void;
				public clearFragmentResultListener(param0: string): void;
				public removeOnBackStackChangedListener(listener: androidx.fragment.app.FragmentManager.OnBackStackChangedListener): void;
				public findFragmentById(id: number): androidx.fragment.app.Fragment;
			}
			export module FragmentManager {
				export class BackStackEntry extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManager.BackStackEntry>;
					/**
					 * Constructs a new instance of the androidx.fragment.app.FragmentManager$BackStackEntry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getId(): number;
						getName(): string;
						getBreadCrumbTitleRes(): number;
						getBreadCrumbShortTitleRes(): number;
						getBreadCrumbTitle(): string;
						getBreadCrumbShortTitle(): string;
					});
					public constructor();
					/** @deprecated */
					public getBreadCrumbTitle(): string;
					public getName(): string;
					public getId(): number;
					/** @deprecated */
					public getBreadCrumbTitleRes(): number;
					/** @deprecated */
					public getBreadCrumbShortTitleRes(): number;
					/** @deprecated */
					public getBreadCrumbShortTitle(): string;
				}
				export class FragmentIntentSenderContract extends androidx.activity.result.contract.ActivityResultContract<androidx.activity.result.IntentSenderRequest,androidx.activity.result.ActivityResult> {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManager.FragmentIntentSenderContract>;
					public createIntent(param0: android.content.Context, param1: any): android.content.Intent;
					public parseResult(resultCode: number, intent: android.content.Intent): androidx.activity.result.ActivityResult;
					public createIntent(context: android.content.Context, input: androidx.activity.result.IntentSenderRequest): android.content.Intent;
					public parseResult(param0: number, param1: android.content.Intent): any;
				}
				export abstract class FragmentLifecycleCallbacks extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManager.FragmentLifecycleCallbacks>;
					public onFragmentCreated(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment, savedInstanceState: android.os.Bundle): void;
					public onFragmentViewDestroyed(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment): void;
					/** @deprecated */
					public onFragmentActivityCreated(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment, savedInstanceState: android.os.Bundle): void;
					public onFragmentPaused(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment): void;
					public onFragmentResumed(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment): void;
					public onFragmentSaveInstanceState(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment, outState: android.os.Bundle): void;
					public constructor();
					public onFragmentPreCreated(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment, savedInstanceState: android.os.Bundle): void;
					public onFragmentAttached(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment, context: android.content.Context): void;
					public onFragmentViewCreated(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment, v: android.view.View, savedInstanceState: android.os.Bundle): void;
					public onFragmentStarted(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment): void;
					public onFragmentDetached(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment): void;
					public onFragmentPreAttached(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment, context: android.content.Context): void;
					public onFragmentStopped(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment): void;
					public onFragmentDestroyed(fm: androidx.fragment.app.FragmentManager, f: androidx.fragment.app.Fragment): void;
				}
				export class LaunchedFragmentInfo extends java.lang.Object implements android.os.Parcelable {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManager.LaunchedFragmentInfo>;
					public static CREATOR: android.os.Parcelable.Creator<androidx.fragment.app.FragmentManager.LaunchedFragmentInfo>;
					public describeContents(): number;
					public writeToParcel(dest: android.os.Parcel, flags: number): void;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
				export class LifecycleAwareResultListener extends java.lang.Object implements androidx.fragment.app.FragmentResultListener {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManager.LifecycleAwareResultListener>;
					public onFragmentResult(requestKey: string, result: android.os.Bundle): void;
					public onFragmentResult(param0: string, param1: android.os.Bundle): void;
					public removeObserver(): void;
					public isAtLeast(state: androidx.lifecycle.Lifecycle.State): boolean;
				}
				export class OnBackStackChangedListener extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManager.OnBackStackChangedListener>;
					/**
					 * Constructs a new instance of the androidx.fragment.app.FragmentManager$OnBackStackChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onBackStackChanged(): void;
					});
					public constructor();
					public onBackStackChanged(): void;
				}
				export class OpGenerator extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManager.OpGenerator>;
					/**
					 * Constructs a new instance of the androidx.fragment.app.FragmentManager$OpGenerator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						generateOps(param0: java.util.ArrayList<androidx.fragment.app.BackStackRecord>, param1: java.util.ArrayList<java.lang.Boolean>): boolean;
					});
					public constructor();
					public generateOps(param0: java.util.ArrayList<androidx.fragment.app.BackStackRecord>, param1: java.util.ArrayList<java.lang.Boolean>): boolean;
				}
				export class PopBackStackState extends java.lang.Object implements androidx.fragment.app.FragmentManager.OpGenerator {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManager.PopBackStackState>;
					public generateOps(param0: java.util.ArrayList<androidx.fragment.app.BackStackRecord>, param1: java.util.ArrayList<java.lang.Boolean>): boolean;
					public generateOps(records: java.util.ArrayList<androidx.fragment.app.BackStackRecord>, isRecordPop: java.util.ArrayList<java.lang.Boolean>): boolean;
				}
				export class StartEnterTransitionListener extends java.lang.Object implements androidx.fragment.app.Fragment.OnStartEnterTransitionListener {
					public static class: java.lang.Class<androidx.fragment.app.FragmentManager.StartEnterTransitionListener>;
					public isReady(): boolean;
					public onStartEnterTransition(): void;
					public startListening(): void;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentManagerImpl extends androidx.fragment.app.FragmentManager {
				public static class: java.lang.Class<androidx.fragment.app.FragmentManagerImpl>;
				public setFragmentResultListener(param0: string, param1: androidx.lifecycle.LifecycleOwner, param2: androidx.fragment.app.FragmentResultListener): void;
				public setFragmentResult(param0: string, param1: android.os.Bundle): void;
				public clearFragmentResult(param0: string): void;
				public setFragmentResultListener(requestKey: string, lifecycleOwner: androidx.lifecycle.LifecycleOwner, listener: androidx.fragment.app.FragmentResultListener): void;
				public clearFragmentResultListener(param0: string): void;
				public clearFragmentResult(requestKey: string): void;
				public clearFragmentResultListener(requestKey: string): void;
				public setFragmentResult(requestKey: string, result: android.os.Bundle): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentManagerNonConfig extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentManagerNonConfig>;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentManagerState extends java.lang.Object implements android.os.Parcelable {
				public static class: java.lang.Class<androidx.fragment.app.FragmentManagerState>;
				public static CREATOR: android.os.Parcelable.Creator<androidx.fragment.app.FragmentManagerState>;
				public constructor(_in_: android.os.Parcel);
				public writeToParcel(dest: android.os.Parcel, flags: number): void;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
				public constructor();
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentManagerViewModel extends androidx.lifecycle.ViewModel {
				public static class: java.lang.Class<androidx.fragment.app.FragmentManagerViewModel>;
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(o: any): boolean;
				public toString(): string;
				public onCleared(): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentOnAttachListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentOnAttachListener>;
				/**
				 * Constructs a new instance of the androidx.fragment.app.FragmentOnAttachListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onAttachFragment(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment): void;
				});
				public constructor();
				public onAttachFragment(param0: androidx.fragment.app.FragmentManager, param1: androidx.fragment.app.Fragment): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export abstract class FragmentPagerAdapter extends androidx.viewpager.widget.PagerAdapter {
				public static class: java.lang.Class<androidx.fragment.app.FragmentPagerAdapter>;
				public static BEHAVIOR_SET_USER_VISIBLE_HINT: number;
				public static BEHAVIOR_RESUME_ONLY_CURRENT_FRAGMENT: number;
				public isViewFromObject(param0: android.view.View, param1: any): boolean;
				public instantiateItem(param0: android.view.ViewGroup, param1: number): any;
				public restoreState(param0: android.os.Parcelable, param1: java.lang.ClassLoader): void;
				public instantiateItem(container: android.view.ViewGroup, position: number): any;
				public startUpdate(param0: android.view.ViewGroup): void;
				public destroyItem(param0: android.view.ViewGroup, param1: number, param2: any): void;
				public destroyItem(param0: android.view.View, param1: number, param2: any): void;
				public constructor();
				public constructor(fm: androidx.fragment.app.FragmentManager, behavior: number);
				public setPrimaryItem(param0: android.view.View, param1: number, param2: any): void;
				public finishUpdate(container: android.view.ViewGroup): void;
				/** @deprecated */
				public constructor(fm: androidx.fragment.app.FragmentManager);
				public startUpdate(container: android.view.ViewGroup): void;
				public isViewFromObject(view: android.view.View, object: any): boolean;
				public saveState(): android.os.Parcelable;
				public destroyItem(container: android.view.ViewGroup, position: number, object: any): void;
				public setPrimaryItem(param0: android.view.ViewGroup, param1: number, param2: any): void;
				public getItem(param0: number): androidx.fragment.app.Fragment;
				public startUpdate(param0: android.view.View): void;
				public finishUpdate(param0: android.view.ViewGroup): void;
				public finishUpdate(param0: android.view.View): void;
				public setPrimaryItem(container: android.view.ViewGroup, position: number, object: any): void;
				public getItemId(position: number): number;
				public instantiateItem(param0: android.view.View, param1: number): any;
				public restoreState(state: android.os.Parcelable, loader: java.lang.ClassLoader): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentResultListener extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentResultListener>;
				/**
				 * Constructs a new instance of the androidx.fragment.app.FragmentResultListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onFragmentResult(param0: string, param1: android.os.Bundle): void;
				});
				public constructor();
				public onFragmentResult(param0: string, param1: android.os.Bundle): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentResultOwner extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentResultOwner>;
				/**
				 * Constructs a new instance of the androidx.fragment.app.FragmentResultOwner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setFragmentResult(param0: string, param1: android.os.Bundle): void;
					clearFragmentResult(param0: string): void;
					setFragmentResultListener(param0: string, param1: androidx.lifecycle.LifecycleOwner, param2: androidx.fragment.app.FragmentResultListener): void;
					clearFragmentResultListener(param0: string): void;
				});
				public constructor();
				public setFragmentResultListener(param0: string, param1: androidx.lifecycle.LifecycleOwner, param2: androidx.fragment.app.FragmentResultListener): void;
				public setFragmentResult(param0: string, param1: android.os.Bundle): void;
				public clearFragmentResult(param0: string): void;
				public clearFragmentResultListener(param0: string): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentState extends java.lang.Object implements android.os.Parcelable {
				public static class: java.lang.Class<androidx.fragment.app.FragmentState>;
				public static CREATOR: android.os.Parcelable.Creator<androidx.fragment.app.FragmentState>;
				public writeToParcel(dest: android.os.Parcel, flags: number): void;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public describeContents(): number;
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentStateManager extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentStateManager>;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentStateManagerControl extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<androidx.fragment.app.FragmentStateManagerControl>;
				/**
				 * Constructs a new instance of the androidx.fragment.app.FragmentStateManagerControl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class<any>;
				});
				public constructor();
				public equals(obj: any): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export abstract class FragmentStatePagerAdapter extends androidx.viewpager.widget.PagerAdapter {
				public static class: java.lang.Class<androidx.fragment.app.FragmentStatePagerAdapter>;
				public static BEHAVIOR_SET_USER_VISIBLE_HINT: number;
				public static BEHAVIOR_RESUME_ONLY_CURRENT_FRAGMENT: number;
				public isViewFromObject(param0: android.view.View, param1: any): boolean;
				public saveState(): android.os.Parcelable;
				public instantiateItem(param0: android.view.ViewGroup, param1: number): any;
				public restoreState(param0: android.os.Parcelable, param1: java.lang.ClassLoader): void;
				public destroyItem(container: android.view.ViewGroup, position: number, object: any): void;
				public setPrimaryItem(param0: android.view.ViewGroup, param1: number, param2: any): void;
				public instantiateItem(container: android.view.ViewGroup, position: number): any;
				public getItem(param0: number): androidx.fragment.app.Fragment;
				public startUpdate(param0: android.view.View): void;
				public startUpdate(param0: android.view.ViewGroup): void;
				public destroyItem(param0: android.view.ViewGroup, param1: number, param2: any): void;
				public destroyItem(param0: android.view.View, param1: number, param2: any): void;
				public finishUpdate(param0: android.view.ViewGroup): void;
				public constructor();
				public constructor(fm: androidx.fragment.app.FragmentManager, behavior: number);
				public finishUpdate(param0: android.view.View): void;
				public setPrimaryItem(param0: android.view.View, param1: number, param2: any): void;
				public finishUpdate(container: android.view.ViewGroup): void;
				public setPrimaryItem(container: android.view.ViewGroup, position: number, object: any): void;
				/** @deprecated */
				public constructor(fm: androidx.fragment.app.FragmentManager);
				public instantiateItem(param0: android.view.View, param1: number): any;
				public restoreState(state: android.os.Parcelable, loader: java.lang.ClassLoader): void;
				public startUpdate(container: android.view.ViewGroup): void;
				public isViewFromObject(view: android.view.View, object: any): boolean;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentStore extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentStore>;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentTabHost extends android.widget.TabHost implements android.widget.TabHost.OnTabChangeListener {
				public static class: java.lang.Class<androidx.fragment.app.FragmentTabHost>;
				public addView(child: android.view.View, width: number, height: number): void;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
				public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				/** @deprecated */
				public onRestoreInstanceState(state: android.os.Parcelable): void;
				public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				public isLayoutRequested(): boolean;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public setup(): void;
				public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
				public getTextDirection(): number;
				public notifySubtreeAccessibilityStateChanged(child: android.view.View, source: android.view.View, changeType: number): void;
				public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
				public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
				public setup(activityGroup: android.app.LocalActivityManager): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public constructor(context: android.content.Context);
				public showContextMenuForChild(originalView: android.view.View): boolean;
				public requestChildRectangleOnScreen(child: android.view.View, rectangle: android.graphics.Rect, immediate: boolean): boolean;
				public createContextMenu(param0: android.view.ContextMenu): void;
				public removeView(param0: android.view.View): void;
				/** @deprecated */
				public onDetachedFromWindow(): void;
				public isTextDirectionResolved(): boolean;
				public invalidateChild(child: android.view.View, dirty: android.graphics.Rect): void;
				public requestDisallowInterceptTouchEvent(disallowIntercept: boolean): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				/** @deprecated */
				public setup(context: android.content.Context, manager: androidx.fragment.app.FragmentManager): void;
				public bringChildToFront(child: android.view.View): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public isLayoutDirectionResolved(): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateChildInParent(location: number[], dirty: android.graphics.Rect): android.view.ViewParent;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public showContextMenuForChild(param0: android.view.View): boolean;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				/** @deprecated */
				public onTabChanged(tabId: string): void;
				public onNestedScrollAccepted(child: android.view.View, target: android.view.View, axes: number): void;
				public childDrawableStateChanged(child: android.view.View): void;
				public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				/** @deprecated */
				public addTab(tabSpec: android.widget.TabHost.TabSpec, clss: java.lang.Class<any>, args: android.os.Bundle): void;
				public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
				/** @deprecated */
				public requestFitSystemWindows(): void;
				public getParentForAccessibility(): android.view.ViewParent;
				public addView(child: android.view.View): void;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				/** @deprecated */
				public setup(context: android.content.Context, manager: androidx.fragment.app.FragmentManager, containerId: number): void;
				public addView(child: android.view.View, index: number): void;
				public bringChildToFront(param0: android.view.View): void;
				public childHasTransientStateChanged(child: android.view.View, childHasTransientState: boolean): void;
				public onStartNestedScroll(child: android.view.View, target: android.view.View, nestedScrollAxes: number): boolean;
				public onTouchModeChanged(isInTouchMode: boolean): void;
				public onNestedPrePerformAccessibilityAction(target: android.view.View, action: number, args: android.os.Bundle): boolean;
				public onNestedPreFling(target: android.view.View, velocityX: number, velocityY: number): boolean;
				public onStopNestedScroll(child: android.view.View): void;
				public invalidateChildInParent(param0: number[], param1: android.graphics.Rect): android.view.ViewParent;
				public onNestedFling(target: android.view.View, velocityX: number, velocityY: number, consumed: boolean): boolean;
				public requestTransparentRegion(child: android.view.View): void;
				public setOnTabChangedListener(l: android.widget.TabHost.OnTabChangeListener): void;
				public recomputeViewAttributes(param0: android.view.View): void;
				public onAttachedToWindow(): void;
				public clearChildFocus(param0: android.view.View): void;
				public requestDisallowInterceptTouchEvent(param0: boolean): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				/** @deprecated */
				public setup(): void;
				public sendAccessibilityEvent(eventType: number): void;
				public requestFitSystemWindows(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
				public recomputeViewAttributes(child: android.view.View): void;
				public startActionModeForChild(originalView: android.view.View, callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public getParent(): android.view.ViewParent;
				public getTextAlignment(): number;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public focusSearch(direction: number): android.view.View;
				public focusSearch(param0: android.view.View, param1: number): android.view.View;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onTabChanged(param0: string): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public requestTransparentRegion(param0: android.view.View): void;
				/** @deprecated */
				public onSaveInstanceState(): android.os.Parcelable;
				public focusableViewAvailable(param0: android.view.View): void;
				public onDetachedFromWindow(): void;
				public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
				public isTextAlignmentResolved(): boolean;
				public getLayoutDirection(): number;
				public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public focusableViewAvailable(v: android.view.View): void;
				public addView(child: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public clearChildFocus(child: android.view.View): void;
				public canResolveTextDirection(): boolean;
				public onRestoreInstanceState(state: android.os.Parcelable): void;
				public canResolveTextAlignment(): boolean;
				/** @deprecated */
				public setOnTabChangedListener(l: android.widget.TabHost.OnTabChangeListener): void;
				public onTouchModeChanged(param0: boolean): void;
				public focusSearch(focused: android.view.View, direction: number): android.view.View;
				public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
				/** @deprecated */
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public removeView(view: android.view.View): void;
				public requestLayout(): void;
				public childDrawableStateChanged(param0: android.view.View): void;
				public requestSendAccessibilityEvent(child: android.view.View, event: android.view.accessibility.AccessibilityEvent): boolean;
				public showContextMenuForChild(originalView: android.view.View, x: number, y: number): boolean;
				public addTab(tabSpec: android.widget.TabHost.TabSpec): void;
				public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
				public createContextMenu(menu: android.view.ContextMenu): void;
				public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: number[]): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onStopNestedScroll(param0: android.view.View): void;
				public requestChildFocus(child: android.view.View, focused: android.view.View): void;
				public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
				public updateViewLayout(view: android.view.View, params: android.view.ViewGroup.LayoutParams): void;
				public addView(child: android.view.View, index: number, params: android.view.ViewGroup.LayoutParams): void;
				public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
				public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
				public canResolveLayoutDirection(): boolean;
				/** @deprecated */
				public onAttachedToWindow(): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
				/** @deprecated */
				public constructor(context: android.content.Context);
				public onSaveInstanceState(): android.os.Parcelable;
				public onNestedPreScroll(target: android.view.View, dx: number, dy: number, consumed: number[]): void;
				public getChildVisibleRect(child: android.view.View, r: android.graphics.Rect, offset: android.graphics.Point): boolean;
				public onNestedScroll(target: android.view.View, dxConsumed: number, dyConsumed: number, dxUnconsumed: number, dyUnconsumed: number): void;
			}
			export module FragmentTabHost {
				export class DummyTabFactory extends java.lang.Object implements android.widget.TabHost.TabContentFactory {
					public static class: java.lang.Class<androidx.fragment.app.FragmentTabHost.DummyTabFactory>;
					public constructor(context: android.content.Context);
					public createTabContent(param0: string): android.view.View;
					public createTabContent(tag: string): android.view.View;
				}
				export class SavedState extends android.view.View.BaseSavedState {
					public static class: java.lang.Class<androidx.fragment.app.FragmentTabHost.SavedState>;
					public static CREATOR: android.os.Parcelable.Creator<androidx.fragment.app.FragmentTabHost.SavedState>;
					public toString(): string;
					public describeContents(): number;
					public writeToParcel(out: android.os.Parcel, flags: number): void;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
				}
				export class TabInfo extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.FragmentTabHost.TabInfo>;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export abstract class FragmentTransaction extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentTransaction>;
				public static TRANSIT_ENTER_MASK: number;
				public static TRANSIT_EXIT_MASK: number;
				public static TRANSIT_UNSET: number;
				public static TRANSIT_NONE: number;
				public static TRANSIT_FRAGMENT_OPEN: number;
				public static TRANSIT_FRAGMENT_CLOSE: number;
				public static TRANSIT_FRAGMENT_FADE: number;
				public replace(containerViewId: number, fragmentClass: java.lang.Class<any>, args: android.os.Bundle, tag: string): androidx.fragment.app.FragmentTransaction;
				public commitAllowingStateLoss(): number;
				public commitNowAllowingStateLoss(): void;
				public replace(containerViewId: number, fragmentClass: java.lang.Class<any>, args: android.os.Bundle): androidx.fragment.app.FragmentTransaction;
				public setMaxLifecycle(fragment: androidx.fragment.app.Fragment, state: androidx.lifecycle.Lifecycle.State): androidx.fragment.app.FragmentTransaction;
				public isAddToBackStackAllowed(): boolean;
				public add(containerViewId: number, fragmentClass: java.lang.Class<any>, args: android.os.Bundle): androidx.fragment.app.FragmentTransaction;
				/** @deprecated */
				public setBreadCrumbShortTitle(text: string): androidx.fragment.app.FragmentTransaction;
				/** @deprecated */
				public setAllowOptimization(allowOptimization: boolean): androidx.fragment.app.FragmentTransaction;
				public setCustomAnimations(enter: number, exit: number, popEnter: number, popExit: number): androidx.fragment.app.FragmentTransaction;
				public replace(containerViewId: number, fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public attach(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public runOnCommit(runnable: java.lang.Runnable): androidx.fragment.app.FragmentTransaction;
				public addSharedElement(sharedElement: android.view.View, name: string): androidx.fragment.app.FragmentTransaction;
				public hide(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public show(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public remove(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public setReorderingAllowed(reorderingAllowed: boolean): androidx.fragment.app.FragmentTransaction;
				/** @deprecated */
				public setBreadCrumbTitle(res: number): androidx.fragment.app.FragmentTransaction;
				/** @deprecated */
				public setBreadCrumbTitle(text: string): androidx.fragment.app.FragmentTransaction;
				public disallowAddToBackStack(): androidx.fragment.app.FragmentTransaction;
				public isEmpty(): boolean;
				public setPrimaryNavigationFragment(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public add(fragment: androidx.fragment.app.Fragment, tag: string): androidx.fragment.app.FragmentTransaction;
				public detach(fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
				public commitNow(): void;
				public setTransition(transition: number): androidx.fragment.app.FragmentTransaction;
				public add(containerViewId: number, fragmentClass: java.lang.Class<any>, args: android.os.Bundle, tag: string): androidx.fragment.app.FragmentTransaction;
				public setCustomAnimations(enter: number, exit: number): androidx.fragment.app.FragmentTransaction;
				public add(fragmentClass: java.lang.Class<any>, args: android.os.Bundle, tag: string): androidx.fragment.app.FragmentTransaction;
				/** @deprecated */
				public setTransitionStyle(styleRes: number): androidx.fragment.app.FragmentTransaction;
				/** @deprecated */
				public setBreadCrumbShortTitle(res: number): androidx.fragment.app.FragmentTransaction;
				public replace(containerViewId: number, fragment: androidx.fragment.app.Fragment, tag: string): androidx.fragment.app.FragmentTransaction;
				public commit(): number;
				/** @deprecated */
				public constructor();
				public addToBackStack(name: string): androidx.fragment.app.FragmentTransaction;
				public add(containerViewId: number, fragment: androidx.fragment.app.Fragment, tag: string): androidx.fragment.app.FragmentTransaction;
				public add(containerViewId: number, fragment: androidx.fragment.app.Fragment): androidx.fragment.app.FragmentTransaction;
			}
			export module FragmentTransaction {
				export class Op extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.FragmentTransaction.Op>;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentTransition extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentTransition>;
				public static calculateFragments(transaction: androidx.fragment.app.BackStackRecord, transitioningFragments: android.util.SparseArray<androidx.fragment.app.FragmentTransition.FragmentContainerTransition>, isReordered: boolean): void;
				public static calculatePopFragments(transaction: androidx.fragment.app.BackStackRecord, transitioningFragments: android.util.SparseArray<androidx.fragment.app.FragmentTransition.FragmentContainerTransition>, isReordered: boolean): void;
			}
			export module FragmentTransition {
				export class Callback extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.FragmentTransition.Callback>;
					/**
					 * Constructs a new instance of the androidx.fragment.app.FragmentTransition$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onStart(param0: androidx.fragment.app.Fragment, param1: androidx.core.os.CancellationSignal): void;
						onComplete(param0: androidx.fragment.app.Fragment, param1: androidx.core.os.CancellationSignal): void;
					});
					public constructor();
					public onStart(param0: androidx.fragment.app.Fragment, param1: androidx.core.os.CancellationSignal): void;
					public onComplete(param0: androidx.fragment.app.Fragment, param1: androidx.core.os.CancellationSignal): void;
				}
				export class FragmentContainerTransition extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.FragmentTransition.FragmentContainerTransition>;
					public lastIn: androidx.fragment.app.Fragment;
					public lastInIsPop: boolean;
					public lastInTransaction: androidx.fragment.app.BackStackRecord;
					public firstOut: androidx.fragment.app.Fragment;
					public firstOutIsPop: boolean;
					public firstOutTransaction: androidx.fragment.app.BackStackRecord;
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentTransitionCompat21 extends androidx.fragment.app.FragmentTransitionImpl {
				public static class: java.lang.Class<androidx.fragment.app.FragmentTransitionCompat21>;
				public cloneTransition(transition: any): any;
				public setEpicenter(param0: any, param1: android.view.View): void;
				public addTarget(param0: any, param1: android.view.View): void;
				public removeTarget(param0: any, param1: android.view.View): void;
				public mergeTransitionsTogether(param0: any, param1: any, param2: any): any;
				public beginDelayedTransition(param0: android.view.ViewGroup, param1: any): void;
				public wrapTransitionInSet(transition: any): any;
				public swapSharedElementTargets(param0: any, param1: java.util.ArrayList<android.view.View>, param2: java.util.ArrayList<android.view.View>): void;
				public setEpicenter(transitionObj: any, epicenter: android.graphics.Rect): void;
				public setSharedElementTargets(transitionObj: any, nonExistentView: android.view.View, sharedViews: java.util.ArrayList<android.view.View>): void;
				public replaceTargets(param0: any, param1: java.util.ArrayList<android.view.View>, param2: java.util.ArrayList<android.view.View>): void;
				public mergeTransitionsInSequence(exitTransitionObj: any, enterTransitionObj: any, sharedElementTransitionObj: any): any;
				public mergeTransitionsInSequence(param0: any, param1: any, param2: any): any;
				public replaceTargets(transitionObj: any, oldTargets: java.util.ArrayList<android.view.View>, newTargets: java.util.ArrayList<android.view.View>): void;
				public addTarget(transitionObj: any, view: android.view.View): void;
				public beginDelayedTransition(sceneRoot: android.view.ViewGroup, transition: any): void;
				public setEpicenter(transitionObj: any, view: android.view.View): void;
				public addTargets(transitionObj: any, views: java.util.ArrayList<android.view.View>): void;
				public removeTarget(transitionObj: any, view: android.view.View): void;
				public setEpicenter(param0: any, param1: android.graphics.Rect): void;
				public scheduleHideFragmentView(param0: any, param1: android.view.View, param2: java.util.ArrayList<android.view.View>): void;
				public addTargets(param0: any, param1: java.util.ArrayList<android.view.View>): void;
				public wrapTransitionInSet(param0: any): any;
				public cloneTransition(param0: any): any;
				public setSharedElementTargets(param0: any, param1: android.view.View, param2: java.util.ArrayList<android.view.View>): void;
				public canHandle(param0: any): boolean;
				public mergeTransitionsTogether(transition1: any, transition2: any, transition3: any): any;
				public scheduleRemoveTargets(overallTransitionObj: any, enterTransition: any, enteringViews: java.util.ArrayList<android.view.View>, exitTransition: any, exitingViews: java.util.ArrayList<android.view.View>, sharedElementTransition: any, sharedElementsIn: java.util.ArrayList<android.view.View>): void;
				public scheduleHideFragmentView(exitTransitionObj: any, fragmentView: android.view.View, exitingViews: java.util.ArrayList<android.view.View>): void;
				public canHandle(transition: any): boolean;
				public scheduleRemoveTargets(param0: any, param1: any, param2: java.util.ArrayList<android.view.View>, param3: any, param4: java.util.ArrayList<android.view.View>, param5: any, param6: java.util.ArrayList<android.view.View>): void;
				public setListenerForTransitionEnd(outFragment: androidx.fragment.app.Fragment, transition: any, signal: androidx.core.os.CancellationSignal, transitionCompleteRunnable: java.lang.Runnable): void;
				public swapSharedElementTargets(sharedElementTransitionObj: any, sharedElementsOut: java.util.ArrayList<android.view.View>, sharedElementsIn: java.util.ArrayList<android.view.View>): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export abstract class FragmentTransitionImpl extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.FragmentTransitionImpl>;
				public setEpicenter(param0: any, param1: android.view.View): void;
				public addTarget(param0: any, param1: android.view.View): void;
				public removeTarget(param0: any, param1: android.view.View): void;
				public static isNullOrEmpty(list: java.util.List<any>): boolean;
				public getBoundsOnScreen(view: android.view.View, epicenter: android.graphics.Rect): void;
				public scheduleHideFragmentView(param0: any, param1: android.view.View, param2: java.util.ArrayList<android.view.View>): void;
				public setEpicenter(param0: any, param1: android.graphics.Rect): void;
				public mergeTransitionsTogether(param0: any, param1: any, param2: any): any;
				public beginDelayedTransition(param0: android.view.ViewGroup, param1: any): void;
				public addTargets(param0: any, param1: java.util.ArrayList<android.view.View>): void;
				public wrapTransitionInSet(param0: any): any;
				public swapSharedElementTargets(param0: any, param1: java.util.ArrayList<android.view.View>, param2: java.util.ArrayList<android.view.View>): void;
				public cloneTransition(param0: any): any;
				public constructor();
				public replaceTargets(param0: any, param1: java.util.ArrayList<android.view.View>, param2: java.util.ArrayList<android.view.View>): void;
				public setSharedElementTargets(param0: any, param1: android.view.View, param2: java.util.ArrayList<android.view.View>): void;
				public canHandle(param0: any): boolean;
				public static bfsAddViewChildren(views: java.util.List<android.view.View>, startView: android.view.View): void;
				public mergeTransitionsInSequence(param0: any, param1: any, param2: any): any;
				public scheduleRemoveTargets(param0: any, param1: any, param2: java.util.ArrayList<android.view.View>, param3: any, param4: java.util.ArrayList<android.view.View>, param5: any, param6: java.util.ArrayList<android.view.View>): void;
				public setListenerForTransitionEnd(outFragment: androidx.fragment.app.Fragment, transition: any, signal: androidx.core.os.CancellationSignal, transitionCompleteRunnable: java.lang.Runnable): void;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class FragmentViewLifecycleOwner extends java.lang.Object implements androidx.lifecycle.HasDefaultViewModelProviderFactory, androidx.savedstate.SavedStateRegistryOwner, androidx.lifecycle.ViewModelStoreOwner {
				public static class: java.lang.Class<androidx.fragment.app.FragmentViewLifecycleOwner>;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class ListFragment extends androidx.fragment.app.Fragment {
				public static class: java.lang.Class<androidx.fragment.app.ListFragment>;
				public getViewModelStore(): androidx.lifecycle.ViewModelStore;
				public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultRegistry, param2: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
				public setEmptyText(text: string): void;
				public registerForActivityResult(contract: androidx.activity.result.contract.ActivityResultContract, callback: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public getLifecycle(): androidx.lifecycle.Lifecycle;
				public constructor();
				public onConfigurationChanged(param0: android.content.res.Configuration): void;
				public getSavedStateRegistry(): androidx.savedstate.SavedStateRegistry;
				public onListItemClick(l: android.widget.ListView, v: android.view.View, position: number, id: number): void;
				public setSelection(position: number): void;
				public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
				public onCreateView(inflater: android.view.LayoutInflater, container: android.view.ViewGroup, savedInstanceState: android.os.Bundle): android.view.View;
				public onLowMemory(): void;
				public setListShown(shown: boolean): void;
				public onConfigurationChanged(newConfig: android.content.res.Configuration): void;
				public getListView(): android.widget.ListView;
				public onViewCreated(view: android.view.View, savedInstanceState: android.os.Bundle): void;
				public setListShownNoAnimation(shown: boolean): void;
				public getDefaultViewModelProviderFactory(): androidx.lifecycle.ViewModelProvider.Factory;
				public setListAdapter(adapter: android.widget.ListAdapter): void;
				public getListAdapter(): android.widget.ListAdapter;
				public getSelectedItemPosition(): number;
				public registerForActivityResult(contract: androidx.activity.result.contract.ActivityResultContract, registry: androidx.activity.result.ActivityResultRegistry, callback: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
				public constructor(contentLayoutId: number);
				public onDestroyView(): void;
				public getSelectedItemId(): number;
				public requireListAdapter(): android.widget.ListAdapter;
				public registerForActivityResult(param0: androidx.activity.result.contract.ActivityResultContract, param1: androidx.activity.result.ActivityResultCallback): androidx.activity.result.ActivityResultLauncher;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class LogWriter extends java.io.Writer {
				public static class: java.lang.Class<androidx.fragment.app.LogWriter>;
				public append(csq: string): java.io.Writer;
				public close(): void;
				public write(buf: string[], offset: number, count: number): void;
				public write(str: string, off: number, len: number): void;
				public append(csq: string, start: number, end: number): java.io.Writer;
				public flush(): void;
				public write(cbuf: string[]): void;
				public append(c: string): java.io.Writer;
				public write(c: number): void;
				public write(param0: string[], param1: number, param2: number): void;
				public write(str: string): void;
				public append(param0: string): java.lang.Appendable;
				public append(param0: string, param1: number, param2: number): java.lang.Appendable;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export abstract class SpecialEffectsController extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.SpecialEffectsController>;
				public getContainer(): android.view.ViewGroup;
			}
			export module SpecialEffectsController {
				export class FragmentStateManagerOperation extends androidx.fragment.app.SpecialEffectsController.Operation {
					public static class: java.lang.Class<androidx.fragment.app.SpecialEffectsController.FragmentStateManagerOperation>;
					public complete(): void;
				}
				export class Operation extends java.lang.Object {
					public static class: java.lang.Class<androidx.fragment.app.SpecialEffectsController.Operation>;
					public toString(): string;
					public completeSpecialEffect(signal: androidx.core.os.CancellationSignal): void;
					public complete(): void;
					public getFragment(): androidx.fragment.app.Fragment;
					public getFinalState(): androidx.fragment.app.SpecialEffectsController.Operation.State;
					public markStartedSpecialEffect(signal: androidx.core.os.CancellationSignal): void;
				}
				export module Operation {
					export class LifecycleImpact {
						public static class: java.lang.Class<androidx.fragment.app.SpecialEffectsController.Operation.LifecycleImpact>;
						public static NONE: androidx.fragment.app.SpecialEffectsController.Operation.LifecycleImpact;
						public static ADDING: androidx.fragment.app.SpecialEffectsController.Operation.LifecycleImpact;
						public static REMOVING: androidx.fragment.app.SpecialEffectsController.Operation.LifecycleImpact;
						public static valueOf(name: string): androidx.fragment.app.SpecialEffectsController.Operation.LifecycleImpact;
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static values(): androidx.fragment.app.SpecialEffectsController.Operation.LifecycleImpact[];
					}
					export class State {
						public static class: java.lang.Class<androidx.fragment.app.SpecialEffectsController.Operation.State>;
						public static REMOVED: androidx.fragment.app.SpecialEffectsController.Operation.State;
						public static VISIBLE: androidx.fragment.app.SpecialEffectsController.Operation.State;
						public static GONE: androidx.fragment.app.SpecialEffectsController.Operation.State;
						public static INVISIBLE: androidx.fragment.app.SpecialEffectsController.Operation.State;
						public static values(): androidx.fragment.app.SpecialEffectsController.Operation.State[];
						public static valueOf(enumType: java.lang.Class<any>, name: string): java.lang.Enum<any>;
						public static valueOf(name: string): androidx.fragment.app.SpecialEffectsController.Operation.State;
					}
				}
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class SpecialEffectsControllerFactory extends java.lang.Object {
				public static class: java.lang.Class<androidx.fragment.app.SpecialEffectsControllerFactory>;
				/**
				 * Constructs a new instance of the androidx.fragment.app.SpecialEffectsControllerFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createController(param0: android.view.ViewGroup): androidx.fragment.app.SpecialEffectsController;
				});
				public constructor();
				public createController(param0: android.view.ViewGroup): androidx.fragment.app.SpecialEffectsController;
			}
		}
	}
}

declare module androidx {
	export module fragment {
		export module app {
			export class SuperNotCalledException extends android.util.AndroidRuntimeException {
				public static class: java.lang.Class<androidx.fragment.app.SuperNotCalledException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(name: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor(msg: string);
				public constructor(name: string, cause: java.lang.Throwable);
				public constructor();
				public constructor(cause: java.lang.Exception);
			}
		}
	}
}

//Generics information:
//androidx.fragment.app.FragmentHostCallback:1

