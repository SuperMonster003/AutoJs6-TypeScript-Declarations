declare module org {
	export module opencv {
		export class BuildConfig extends java.lang.Object {
			public static class: java.lang.Class<org.opencv.BuildConfig>;
			public static DEBUG: boolean;
			public static LIBRARY_PACKAGE_NAME: string;
			public static BUILD_TYPE: string;
			public constructor();
		}
	}
}

declare module org {
	export module opencv {
		export module android {
			export class AsyncServiceHelper extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.android.AsyncServiceHelper>;
				public static TAG: string;
				public static MINIMUM_ENGINE_VERSION: number;
				public mEngineService: org.opencv.engine.OpenCVEngineInterface;
				public mUserAppCallback: org.opencv.android.LoaderCallbackInterface;
				public mOpenCVersion: string;
				public mAppContext: android.content.Context;
				public static mServiceInstallationProgress: boolean;
				public static mLibraryInstallationProgress: boolean;
				public static OPEN_CV_SERVICE_URL: string;
				public mServiceConnection: android.content.ServiceConnection;
				public static initOpenCV(Version: string, AppContext: android.content.Context, Callback: org.opencv.android.LoaderCallbackInterface): boolean;
				public static InstallService(AppContext: android.content.Context, Callback: org.opencv.android.LoaderCallbackInterface): void;
				public constructor(Version: string, AppContext: android.content.Context, Callback: org.opencv.android.LoaderCallbackInterface);
				public static InstallServiceQuiet(context: android.content.Context): boolean;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module android {
			export abstract class BaseLoaderCallback extends java.lang.Object implements org.opencv.android.LoaderCallbackInterface {
				public static class: java.lang.Class<org.opencv.android.BaseLoaderCallback>;
				public mAppContext: android.content.Context;
				public onPackageInstall(operation: number, callback: org.opencv.android.InstallCallbackInterface): void;
				public constructor(AppContext: android.content.Context);
				public onManagerConnected(status: number): void;
				public onPackageInstall(param0: number, param1: org.opencv.android.InstallCallbackInterface): void;
				public onManagerConnected(param0: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module android {
			export class Camera2Renderer extends org.opencv.android.CameraGLRendererBase {
				public static class: java.lang.Class<org.opencv.android.Camera2Renderer>;
				public LOGTAG: string;
				public onSurfaceChanged(gl: javax.microedition.khronos.opengles.GL10, surfaceWidth: number, surfaceHeight: number): void;
				public setCameraPreviewSize(param0: number, param1: number): void;
				public onFrameAvailable(surfaceTexture: android.graphics.SurfaceTexture): void;
				public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
				public openCamera(param0: number): void;
				public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
				public closeCamera(): void;
				public onFrameAvailable(param0: android.graphics.SurfaceTexture): void;
				public openCamera(id: number): void;
				public setCameraPreviewSize(width: number, height: number): void;
				public doStart(): void;
				public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
				public onSurfaceCreated(gl: javax.microedition.khronos.opengles.GL10, config: javax.microedition.khronos.egl.EGLConfig): void;
				public onDrawFrame(gl: javax.microedition.khronos.opengles.GL10): void;
				public doStop(): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module android {
			export class CameraActivity extends android.app.Activity {
				public static class: java.lang.Class<org.opencv.android.CameraActivity>;
				public getCameraViewList(): java.util.List<any>;
				public onActionModeStarted(mode: android.view.ActionMode): void;
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public onPanelClosed(featureId: number, menu: android.view.Menu): void;
				public onMenuItemSelected(featureId: number, item: android.view.MenuItem): boolean;
				public onCreateView(name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
				public onCreateContextMenu(menu: android.view.ContextMenu, v: android.view.View, menuInfo: android.view.ContextMenu.ContextMenuInfo): void;
				public dispatchKeyShortcutEvent(event: android.view.KeyEvent): boolean;
				public constructor();
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
				public onSearchRequested(param0: any): boolean;
				public onWindowFocusChanged(hasFocus: boolean): void;
				public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
				public onProvideKeyboardShortcuts(data: java.util.List<any>, menu: android.view.Menu, deviceId: number): void;
				public onPanelClosed(param0: number, param1: android.view.Menu): void;
				public onTrimMemory(param0: number): void;
				public dispatchGenericMotionEvent(ev: android.view.MotionEvent): boolean;
				public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
				public onCreateView(parent: android.view.View, name: string, context: android.content.Context, attrs: android.util.AttributeSet): android.view.View;
				public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
				public onWindowAttributesChanged(params: android.view.WindowManager.LayoutParams): void;
				public onActionModeFinished(mode: android.view.ActionMode): void;
				public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
				public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
				public onCameraPermissionGranted(): void;
				public onRequestPermissionsResult(requestCode: number, permissions: string[], grantResults: number[]): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public onContentChanged(): void;
				public onMenuOpened(featureId: number, menu: android.view.Menu): boolean;
				public onStart(): void;
				public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
				public onDetachedFromWindow(): void;
				public onPreparePanel(featureId: number, view: android.view.View, menu: android.view.Menu): boolean;
				public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
				public onSearchRequested(): boolean;
				public onCreatePanelMenu(featureId: number, menu: android.view.Menu): boolean;
				public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public dispatchTouchEvent(ev: android.view.MotionEvent): boolean;
				public constructor(base: android.content.Context, theme: android.content.res.Resources.Theme);
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
				public onTrimMemory(level: number): void;
				public onCreatePanelView(featureId: number): android.view.View;
				public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
				public onWindowStartingActionMode(callback: android.view.ActionMode.Callback): android.view.ActionMode;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public dispatchKeyEvent(event: android.view.KeyEvent): boolean;
				public onCreatePanelView(param0: number): android.view.View;
				public onWindowStartingActionMode(callback: android.view.ActionMode.Callback, type: number): android.view.ActionMode;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
				public onActionModeStarted(param0: android.view.ActionMode): void;
				public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
				public onActionModeFinished(param0: android.view.ActionMode): void;
				public constructor(base: android.content.Context);
				public constructor(base: android.content.Context, themeResId: number);
				public onSearchRequested(searchEvent: any): boolean;
				public dispatchPopulateAccessibilityEvent(event: android.view.accessibility.AccessibilityEvent): boolean;
				public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
				public onWindowFocusChanged(param0: boolean): void;
				public dispatchTrackballEvent(ev: android.view.MotionEvent): boolean;
				public onAttachedToWindow(): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module android {
			export abstract class CameraBridgeViewBase extends android.view.SurfaceView implements android.view.SurfaceHolder.Callback {
				public static class: java.lang.Class<org.opencv.android.CameraBridgeViewBase>;
				public static MAX_UNSPECIFIED: number;
				public mFrameWidth: number;
				public mFrameHeight: number;
				public mMaxHeight: number;
				public mMaxWidth: number;
				public mScale: number;
				public mPreviewFormat: number;
				public mCameraIndex: number;
				public mEnabled: boolean;
				public mCameraPermissionGranted: boolean;
				public mFpsMeter: org.opencv.android.FpsMeter;
				public static CAMERA_ID_ANY: number;
				public static CAMERA_ID_BACK: number;
				public static CAMERA_ID_FRONT: number;
				public static RGBA: number;
				public static GRAY: number;
				public enableView(): void;
				public setCvCameraViewListener(listener: org.opencv.android.CameraBridgeViewBase.CvCameraViewListener2): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public surfaceChanged(arg0: android.view.SurfaceHolder, arg1: number, arg2: number, arg3: number): void;
				public setCvCameraViewListener(listener: org.opencv.android.CameraBridgeViewBase.CvCameraViewListener): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public surfaceChanged(param0: android.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public calculateCameraFrameSize(supportedSizes: java.util.List<any>, accessor: org.opencv.android.CameraBridgeViewBase.ListItemAccessor, surfaceWidth: number, surfaceHeight: number): org.opencv.core.Size;
				public disableView(): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public surfaceDestroyed(holder: android.view.SurfaceHolder): void;
				public surfaceDestroyed(param0: android.view.SurfaceHolder): void;
				public surfaceCreated(holder: android.view.SurfaceHolder): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public disconnectCamera(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public AllocateCache(): void;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public surfaceCreated(param0: android.view.SurfaceHolder): void;
				public deliverAndDrawFrame(frame: org.opencv.android.CameraBridgeViewBase.CvCameraViewFrame): void;
				public connectCamera(param0: number, param1: number): boolean;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public SetCaptureFormat(format: number): void;
				public constructor(context: android.content.Context);
				public setCameraPermissionGranted(): void;
				public enableFpsMeter(): void;
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public disableFpsMeter(): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public setCameraIndex(cameraIndex: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public constructor(context: android.content.Context, cameraId: number);
				public setMaxFrameSize(maxWidth: number, maxHeight: number): void;
			}
			export module CameraBridgeViewBase {
				export class CvCameraViewFrame extends java.lang.Object {
					public static class: java.lang.Class<org.opencv.android.CameraBridgeViewBase.CvCameraViewFrame>;
					/**
					 * Constructs a new instance of the org.opencv.android.CameraBridgeViewBase$CvCameraViewFrame interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						rgba(): org.opencv.core.Mat;
						gray(): org.opencv.core.Mat;
					});
					public constructor();
					public rgba(): org.opencv.core.Mat;
					public gray(): org.opencv.core.Mat;
				}
				export class CvCameraViewListener extends java.lang.Object {
					public static class: java.lang.Class<org.opencv.android.CameraBridgeViewBase.CvCameraViewListener>;
					/**
					 * Constructs a new instance of the org.opencv.android.CameraBridgeViewBase$CvCameraViewListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCameraViewStarted(param0: number, param1: number): void;
						onCameraViewStopped(): void;
						onCameraFrame(param0: org.opencv.core.Mat): org.opencv.core.Mat;
					});
					public constructor();
					public onCameraViewStopped(): void;
					public onCameraViewStarted(param0: number, param1: number): void;
					public onCameraFrame(param0: org.opencv.core.Mat): org.opencv.core.Mat;
				}
				export class CvCameraViewListener2 extends java.lang.Object {
					public static class: java.lang.Class<org.opencv.android.CameraBridgeViewBase.CvCameraViewListener2>;
					/**
					 * Constructs a new instance of the org.opencv.android.CameraBridgeViewBase$CvCameraViewListener2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCameraViewStarted(param0: number, param1: number): void;
						onCameraViewStopped(): void;
						onCameraFrame(param0: org.opencv.android.CameraBridgeViewBase.CvCameraViewFrame): org.opencv.core.Mat;
					});
					public constructor();
					public onCameraFrame(param0: org.opencv.android.CameraBridgeViewBase.CvCameraViewFrame): org.opencv.core.Mat;
					public onCameraViewStopped(): void;
					public onCameraViewStarted(param0: number, param1: number): void;
				}
				export class CvCameraViewListenerAdapter extends java.lang.Object implements org.opencv.android.CameraBridgeViewBase.CvCameraViewListener2 {
					public static class: java.lang.Class<org.opencv.android.CameraBridgeViewBase.CvCameraViewListenerAdapter>;
					public onCameraFrame(param0: org.opencv.android.CameraBridgeViewBase.CvCameraViewFrame): org.opencv.core.Mat;
					public onCameraViewStopped(): void;
					public constructor(this$0: org.opencv.android.CameraBridgeViewBase, oldStypeListener: org.opencv.android.CameraBridgeViewBase.CvCameraViewListener);
					public onCameraViewStarted(param0: number, param1: number): void;
					public onCameraFrame(inputFrame: org.opencv.android.CameraBridgeViewBase.CvCameraViewFrame): org.opencv.core.Mat;
					public onCameraViewStarted(width: number, height: number): void;
					public setFrameFormat(format: number): void;
				}
				export class ListItemAccessor extends java.lang.Object {
					public static class: java.lang.Class<org.opencv.android.CameraBridgeViewBase.ListItemAccessor>;
					/**
					 * Constructs a new instance of the org.opencv.android.CameraBridgeViewBase$ListItemAccessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getWidth(param0: any): number;
						getHeight(param0: any): number;
					});
					public constructor();
					public getWidth(param0: any): number;
					public getHeight(param0: any): number;
				}
			}
		}
	}
}

declare module org {
	export module opencv {
		export module android {
			export abstract class CameraGLRendererBase extends java.lang.Object implements android.opengl.GLSurfaceView.Renderer, android.graphics.SurfaceTexture.OnFrameAvailableListener {
				public static class: java.lang.Class<org.opencv.android.CameraGLRendererBase>;
				public LOGTAG: string;
				public mCameraWidth: number;
				public mCameraHeight: number;
				public mFBOWidth: number;
				public mFBOHeight: number;
				public mMaxCameraWidth: number;
				public mMaxCameraHeight: number;
				public mCameraIndex: number;
				public mSTexture: android.graphics.SurfaceTexture;
				public mHaveSurface: boolean;
				public mHaveFBO: boolean;
				public mUpdateST: boolean;
				public mEnabled: boolean;
				public mIsStarted: boolean;
				public mView: org.opencv.android.CameraGLSurfaceView;
				public onSurfaceChanged(gl: javax.microedition.khronos.opengles.GL10, surfaceWidth: number, surfaceHeight: number): void;
				public enableView(): void;
				public onResume(): void;
				public setCameraPreviewSize(param0: number, param1: number): void;
				public onFrameAvailable(surfaceTexture: android.graphics.SurfaceTexture): void;
				public onPause(): void;
				public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
				public openCamera(param0: number): void;
				public disableView(): void;
				public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
				public closeCamera(): void;
				public setPreviewSize(width: number, height: number): void;
				public onFrameAvailable(param0: android.graphics.SurfaceTexture): void;
				public doStart(): void;
				public setMaxCameraPreviewSize(maxWidth: number, maxHeight: number): void;
				public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
				public constructor(view: org.opencv.android.CameraGLSurfaceView);
				public onSurfaceCreated(gl: javax.microedition.khronos.opengles.GL10, config: javax.microedition.khronos.egl.EGLConfig): void;
				public updateState(): void;
				public setCameraIndex(cameraIndex: number): void;
				public onDrawFrame(gl: javax.microedition.khronos.opengles.GL10): void;
				public doStop(): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module android {
			export class CameraGLSurfaceView extends android.opengl.GLSurfaceView {
				public static class: java.lang.Class<org.opencv.android.CameraGLSurfaceView>;
				public enableView(): void;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public surfaceRedrawNeeded(holder: android.view.SurfaceHolder): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public onPause(): void;
				public disableView(): void;
				public setCameraTextureListener(texListener: org.opencv.android.CameraGLSurfaceView.CameraTextureListener): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public surfaceDestroyed(holder: android.view.SurfaceHolder): void;
				public surfaceCreated(holder: android.view.SurfaceHolder): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public surfaceChanged(holder: android.view.SurfaceHolder, format: number, w: number, h: number): void;
				public onResume(): void;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public constructor(context: android.content.Context);
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public surfaceRedrawNeeded(param0: android.view.SurfaceHolder): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public setMaxCameraPreviewSize(maxWidth: number, maxHeight: number): void;
				public setCameraIndex(cameraIndex: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
				public getCameraTextureListener(): org.opencv.android.CameraGLSurfaceView.CameraTextureListener;
			}
			export module CameraGLSurfaceView {
				export class CameraTextureListener extends java.lang.Object {
					public static class: java.lang.Class<org.opencv.android.CameraGLSurfaceView.CameraTextureListener>;
					/**
					 * Constructs a new instance of the org.opencv.android.CameraGLSurfaceView$CameraTextureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCameraViewStarted(param0: number, param1: number): void;
						onCameraViewStopped(): void;
						onCameraTexture(param0: number, param1: number, param2: number, param3: number): boolean;
					});
					public constructor();
					public onCameraViewStopped(): void;
					public onCameraViewStarted(param0: number, param1: number): void;
					public onCameraTexture(param0: number, param1: number, param2: number, param3: number): boolean;
				}
			}
		}
	}
}

declare module org {
	export module opencv {
		export module android {
			export class CameraRenderer extends org.opencv.android.CameraGLRendererBase {
				public static class: java.lang.Class<org.opencv.android.CameraRenderer>;
				public static LOGTAG: string;
				public onSurfaceChanged(gl: javax.microedition.khronos.opengles.GL10, surfaceWidth: number, surfaceHeight: number): void;
				public setCameraPreviewSize(param0: number, param1: number): void;
				public onFrameAvailable(surfaceTexture: android.graphics.SurfaceTexture): void;
				public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
				public openCamera(param0: number): void;
				public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
				public closeCamera(): void;
				public onFrameAvailable(param0: android.graphics.SurfaceTexture): void;
				public openCamera(id: number): void;
				public setCameraPreviewSize(width: number, height: number): void;
				public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
				public onSurfaceCreated(gl: javax.microedition.khronos.opengles.GL10, config: javax.microedition.khronos.egl.EGLConfig): void;
				public onDrawFrame(gl: javax.microedition.khronos.opengles.GL10): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module android {
			export class FpsMeter extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.android.FpsMeter>;
				public measure(): void;
				public setResolution(width: number, height: number): void;
				public draw(canvas: android.graphics.Canvas, offsetx: number, offsety: number): void;
				public constructor();
				public init(): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module android {
			export class InstallCallbackInterface extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.android.InstallCallbackInterface>;
				/**
				 * Constructs a new instance of the org.opencv.android.InstallCallbackInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getPackageName(): string;
					install(): void;
					cancel(): void;
					wait_install(): void;
				});
				public constructor();
				public static NEW_INSTALLATION: number;
				public static INSTALLATION_PROGRESS: number;
				public wait_install(): void;
				public install(): void;
				public getPackageName(): string;
				public cancel(): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module android {
			export class JavaCamera2View extends org.opencv.android.CameraBridgeViewBase {
				public static class: java.lang.Class<org.opencv.android.JavaCamera2View>;
				public mImageReader: android.media.ImageReader;
				public mPreviewFormat: number;
				public mCameraDevice: android.hardware.camera2.CameraDevice;
				public mCaptureSession: android.hardware.camera2.CameraCaptureSession;
				public mPreviewRequestBuilder: android.hardware.camera2.CaptureRequest.Builder;
				public mCameraID: string;
				public mPreviewSize: any;
				public mBackgroundHandler: android.os.Handler;
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public surfaceChanged(arg0: android.view.SurfaceHolder, arg1: number, arg2: number, arg3: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public surfaceChanged(param0: android.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
				public initializeCamera(): boolean;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public surfaceDestroyed(holder: android.view.SurfaceHolder): void;
				public surfaceDestroyed(param0: android.view.SurfaceHolder): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public surfaceCreated(holder: android.view.SurfaceHolder): void;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public disconnectCamera(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public surfaceCreated(param0: android.view.SurfaceHolder): void;
				public connectCamera(param0: number, param1: number): boolean;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public constructor(context: android.content.Context);
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public connectCamera(width: number, height: number): boolean;
				public constructor(context: android.content.Context, cameraId: number);
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
			}
			export module JavaCamera2View {
				export class JavaCamera2Frame extends java.lang.Object implements org.opencv.android.CameraBridgeViewBase.CvCameraViewFrame {
					public static class: java.lang.Class<org.opencv.android.JavaCamera2View.JavaCamera2Frame>;
					public constructor(param0: org.opencv.android.JavaCamera2View, image: android.media.Image);
					public rgba(): org.opencv.core.Mat;
					public gray(): org.opencv.core.Mat;
					public release(): void;
				}
				export class JavaCameraSizeAccessor extends java.lang.Object implements org.opencv.android.CameraBridgeViewBase.ListItemAccessor {
					public static class: java.lang.Class<org.opencv.android.JavaCamera2View.JavaCameraSizeAccessor>;
					public constructor();
					public getWidth(obj: any): number;
					public getHeight(obj: any): number;
					public getWidth(param0: any): number;
					public getHeight(param0: any): number;
				}
			}
		}
	}
}

declare module org {
	export module opencv {
		export module android {
			export class JavaCameraView extends org.opencv.android.CameraBridgeViewBase implements android.hardware.Camera.PreviewCallback {
				public static class: java.lang.Class<org.opencv.android.JavaCameraView>;
				public mCamera: android.hardware.Camera;
				public mCameraFrame: org.opencv.android.JavaCameraView.JavaCameraFrame[];
				public onKeyLongPress(keyCode: number, event: android.view.KeyEvent): boolean;
				public surfaceChanged(arg0: android.view.SurfaceHolder, arg1: number, arg2: number, arg3: number): void;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet);
				public surfaceChanged(param0: android.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
				public onKeyUp(keyCode: number, event: android.view.KeyEvent): boolean;
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number);
				public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
				public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
				public surfaceDestroyed(holder: android.view.SurfaceHolder): void;
				public surfaceDestroyed(param0: android.view.SurfaceHolder): void;
				public onKeyMultiple(keyCode: number, repeatCount: number, event: android.view.KeyEvent): boolean;
				public surfaceCreated(holder: android.view.SurfaceHolder): void;
				public sendAccessibilityEvent(param0: number): void;
				public sendAccessibilityEvent(eventType: number): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable): void;
				public disconnectCamera(): void;
				public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(event: android.view.accessibility.AccessibilityEvent): void;
				public onKeyDown(keyCode: number, event: android.view.KeyEvent): boolean;
				public onPreviewFrame(param0: number[], param1: android.hardware.Camera): void;
				public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
				public surfaceCreated(param0: android.view.SurfaceHolder): void;
				public connectCamera(param0: number, param1: number): boolean;
				public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public initializeCamera(width: number, height: number): boolean;
				public constructor(context: android.content.Context);
				public scheduleDrawable(who: android.graphics.drawable.Drawable, what: java.lang.Runnable, when: number): void;
				public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
				public releaseCamera(): void;
				public onPreviewFrame(frame: number[], arg1: android.hardware.Camera): void;
				public unscheduleDrawable(who: android.graphics.drawable.Drawable): void;
				public invalidateDrawable(drawable: android.graphics.drawable.Drawable): void;
				public connectCamera(width: number, height: number): boolean;
				public constructor(context: android.content.Context, cameraId: number);
				public constructor(context: android.content.Context, attrs: android.util.AttributeSet, defStyleAttr: number, defStyleRes: number);
			}
			export module JavaCameraView {
				export class CameraWorker extends java.lang.Object implements java.lang.Runnable {
					public static class: java.lang.Class<org.opencv.android.JavaCameraView.CameraWorker>;
					public run(): void;
				}
				export class JavaCameraFrame extends java.lang.Object implements org.opencv.android.CameraBridgeViewBase.CvCameraViewFrame {
					public static class: java.lang.Class<org.opencv.android.JavaCameraView.JavaCameraFrame>;
					public rgba(): org.opencv.core.Mat;
					public gray(): org.opencv.core.Mat;
					public release(): void;
					public constructor(param0: org.opencv.android.JavaCameraView, Yuv420sp: org.opencv.core.Mat, width: number, height: number);
				}
				export class JavaCameraSizeAccessor extends java.lang.Object implements org.opencv.android.CameraBridgeViewBase.ListItemAccessor {
					public static class: java.lang.Class<org.opencv.android.JavaCameraView.JavaCameraSizeAccessor>;
					public constructor();
					public getWidth(obj: any): number;
					public getHeight(obj: any): number;
					public getWidth(param0: any): number;
					public getHeight(param0: any): number;
				}
			}
		}
	}
}

declare module org {
	export module opencv {
		export module android {
			export class LoaderCallbackInterface extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.android.LoaderCallbackInterface>;
				/**
				 * Constructs a new instance of the org.opencv.android.LoaderCallbackInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onManagerConnected(param0: number): void;
					onPackageInstall(param0: number, param1: org.opencv.android.InstallCallbackInterface): void;
				});
				public constructor();
				public static MARKET_ERROR: number;
				public static INCOMPATIBLE_MANAGER_VERSION: number;
				public static INIT_FAILED: number;
				public static SUCCESS: number;
				public static INSTALL_CANCELED: number;
				public onPackageInstall(param0: number, param1: org.opencv.android.InstallCallbackInterface): void;
				public onManagerConnected(param0: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module android {
			export class OpenCVLoader extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.android.OpenCVLoader>;
				public static OPENCV_VERSION_2_4_2: string;
				public static OPENCV_VERSION_2_4_3: string;
				public static OPENCV_VERSION_2_4_4: string;
				public static OPENCV_VERSION_2_4_5: string;
				public static OPENCV_VERSION_2_4_6: string;
				public static OPENCV_VERSION_2_4_7: string;
				public static OPENCV_VERSION_2_4_8: string;
				public static OPENCV_VERSION_2_4_9: string;
				public static OPENCV_VERSION_2_4_10: string;
				public static OPENCV_VERSION_2_4_11: string;
				public static OPENCV_VERSION_2_4_12: string;
				public static OPENCV_VERSION_2_4_13: string;
				public static OPENCV_VERSION_3_0_0: string;
				public static OPENCV_VERSION_3_1_0: string;
				public static OPENCV_VERSION_3_2_0: string;
				public static OPENCV_VERSION_3_3_0: string;
				public static OPENCV_VERSION_3_4_0: string;
				public static OPENCV_VERSION: string;
				public static initDebug(InitCuda: boolean): boolean;
				public static initDebug(): boolean;
				public static initAsync(Version: string, AppContext: android.content.Context, Callback: org.opencv.android.LoaderCallbackInterface): boolean;
				public constructor();
			}
		}
	}
}

declare module org {
	export module opencv {
		export module android {
			export class StaticHelper extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.android.StaticHelper>;
				public static initOpenCV(InitCuda: boolean): boolean;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module android {
			export class Utils extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.android.Utils>;
				public static loadResource(context: android.content.Context, resourceId: number, flags: number): org.opencv.core.Mat;
				public static bitmapToMat(bmp: android.graphics.Bitmap, mat: org.opencv.core.Mat): void;
				public static matToBitmap(mat: org.opencv.core.Mat, bmp: android.graphics.Bitmap, premultiplyAlpha: boolean): void;
				public static matToBitmap(mat: org.opencv.core.Mat, bmp: android.graphics.Bitmap): void;
				public static exportResource(context: android.content.Context, resourceId: number): string;
				public static exportResource(context: android.content.Context, resourceId: number, dirname: string): string;
				public static bitmapToMat(bmp: android.graphics.Bitmap, mat: org.opencv.core.Mat, unPremultiplyAlpha: boolean): void;
				public static loadResource(context: android.content.Context, resourceId: number): org.opencv.core.Mat;
				public constructor();
			}
		}
	}
}

declare module org {
	export module opencv {
		export module calib3d {
			export class Calib3d extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.calib3d.Calib3d>;
				public static CV_ITERATIVE: number;
				public static CV_EPNP: number;
				public static CV_P3P: number;
				public static CV_DLS: number;
				public static CvLevMarq_DONE: number;
				public static CvLevMarq_STARTED: number;
				public static CvLevMarq_CALC_J: number;
				public static CvLevMarq_CHECK_ERR: number;
				public static LMEDS: number;
				public static RANSAC: number;
				public static RHO: number;
				public static USAC_DEFAULT: number;
				public static USAC_PARALLEL: number;
				public static USAC_FM_8PTS: number;
				public static USAC_FAST: number;
				public static USAC_ACCURATE: number;
				public static USAC_PROSAC: number;
				public static USAC_MAGSAC: number;
				public static CALIB_CB_ADAPTIVE_THRESH: number;
				public static CALIB_CB_NORMALIZE_IMAGE: number;
				public static CALIB_CB_FILTER_QUADS: number;
				public static CALIB_CB_FAST_CHECK: number;
				public static CALIB_CB_EXHAUSTIVE: number;
				public static CALIB_CB_ACCURACY: number;
				public static CALIB_CB_LARGER: number;
				public static CALIB_CB_MARKER: number;
				public static CALIB_CB_SYMMETRIC_GRID: number;
				public static CALIB_CB_ASYMMETRIC_GRID: number;
				public static CALIB_CB_CLUSTERING: number;
				public static CALIB_NINTRINSIC: number;
				public static CALIB_USE_INTRINSIC_GUESS: number;
				public static CALIB_FIX_ASPECT_RATIO: number;
				public static CALIB_FIX_PRINCIPAL_POINT: number;
				public static CALIB_ZERO_TANGENT_DIST: number;
				public static CALIB_FIX_FOCAL_LENGTH: number;
				public static CALIB_FIX_K1: number;
				public static CALIB_FIX_K2: number;
				public static CALIB_FIX_K3: number;
				public static CALIB_FIX_K4: number;
				public static CALIB_FIX_K5: number;
				public static CALIB_FIX_K6: number;
				public static CALIB_RATIONAL_MODEL: number;
				public static CALIB_THIN_PRISM_MODEL: number;
				public static CALIB_FIX_S1_S2_S3_S4: number;
				public static CALIB_TILTED_MODEL: number;
				public static CALIB_FIX_TAUX_TAUY: number;
				public static CALIB_USE_QR: number;
				public static CALIB_FIX_TANGENT_DIST: number;
				public static CALIB_FIX_INTRINSIC: number;
				public static CALIB_SAME_FOCAL_LENGTH: number;
				public static CALIB_ZERO_DISPARITY: number;
				public static CALIB_USE_LU: number;
				public static CALIB_USE_EXTRINSIC_GUESS: number;
				public static FM_7POINT: number;
				public static FM_8POINT: number;
				public static FM_LMEDS: number;
				public static FM_RANSAC: number;
				public static fisheye_CALIB_USE_INTRINSIC_GUESS: number;
				public static fisheye_CALIB_RECOMPUTE_EXTRINSIC: number;
				public static fisheye_CALIB_CHECK_COND: number;
				public static fisheye_CALIB_FIX_SKEW: number;
				public static fisheye_CALIB_FIX_K1: number;
				public static fisheye_CALIB_FIX_K2: number;
				public static fisheye_CALIB_FIX_K3: number;
				public static fisheye_CALIB_FIX_K4: number;
				public static fisheye_CALIB_FIX_INTRINSIC: number;
				public static fisheye_CALIB_FIX_PRINCIPAL_POINT: number;
				public static fisheye_CALIB_ZERO_DISPARITY: number;
				public static fisheye_CALIB_FIX_FOCAL_LENGTH: number;
				public static CirclesGridFinderParameters_SYMMETRIC_GRID: number;
				public static CirclesGridFinderParameters_ASYMMETRIC_GRID: number;
				public static CALIB_HAND_EYE_TSAI: number;
				public static CALIB_HAND_EYE_PARK: number;
				public static CALIB_HAND_EYE_HORAUD: number;
				public static CALIB_HAND_EYE_ANDREFF: number;
				public static CALIB_HAND_EYE_DANIILIDIS: number;
				public static LOCAL_OPTIM_NULL: number;
				public static LOCAL_OPTIM_INNER_LO: number;
				public static LOCAL_OPTIM_INNER_AND_ITER_LO: number;
				public static LOCAL_OPTIM_GC: number;
				public static LOCAL_OPTIM_SIGMA: number;
				public static NEIGH_FLANN_KNN: number;
				public static NEIGH_GRID: number;
				public static NEIGH_FLANN_RADIUS: number;
				public static NONE_POLISHER: number;
				public static LSQ_POLISHER: number;
				public static MAGSAC: number;
				public static COV_POLISHER: number;
				public static CALIB_ROBOT_WORLD_HAND_EYE_SHAH: number;
				public static CALIB_ROBOT_WORLD_HAND_EYE_LI: number;
				public static SAMPLING_UNIFORM: number;
				public static SAMPLING_PROGRESSIVE_NAPSAC: number;
				public static SAMPLING_NAPSAC: number;
				public static SAMPLING_PROSAC: number;
				public static SCORE_METHOD_RANSAC: number;
				public static SCORE_METHOD_MSAC: number;
				public static SCORE_METHOD_MAGSAC: number;
				public static SCORE_METHOD_LMEDS: number;
				public static SOLVEPNP_ITERATIVE: number;
				public static SOLVEPNP_EPNP: number;
				public static SOLVEPNP_P3P: number;
				public static SOLVEPNP_DLS: number;
				public static SOLVEPNP_UPNP: number;
				public static SOLVEPNP_AP3P: number;
				public static SOLVEPNP_IPPE: number;
				public static SOLVEPNP_IPPE_SQUARE: number;
				public static SOLVEPNP_SQPNP: number;
				public static SOLVEPNP_MAX_COUNT: number;
				public static PROJ_SPHERICAL_ORTHO: number;
				public static PROJ_SPHERICAL_EQRECT: number;
				public static findEssentialMat(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, method: number): org.opencv.core.Mat;
				public static estimateAffinePartial2D(from: org.opencv.core.Mat, to: org.opencv.core.Mat, inliers: org.opencv.core.Mat, method: number, ransacReprojThreshold: number): org.opencv.core.Mat;
				public static stereoCalibrate(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints1: java.util.List<org.opencv.core.Mat>, imagePoints2: java.util.List<org.opencv.core.Mat>, cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, T: org.opencv.core.Mat, E: org.opencv.core.Mat, F: org.opencv.core.Mat, perViewErrors: org.opencv.core.Mat, flags: number): number;
				public static composeRT(rvec1: org.opencv.core.Mat, tvec1: org.opencv.core.Mat, rvec2: org.opencv.core.Mat, tvec2: org.opencv.core.Mat, rvec3: org.opencv.core.Mat, tvec3: org.opencv.core.Mat, dr3dr1: org.opencv.core.Mat, dr3dt1: org.opencv.core.Mat, dr3dr2: org.opencv.core.Mat): void;
				public static composeRT(rvec1: org.opencv.core.Mat, tvec1: org.opencv.core.Mat, rvec2: org.opencv.core.Mat, tvec2: org.opencv.core.Mat, rvec3: org.opencv.core.Mat, tvec3: org.opencv.core.Mat): void;
				public static findChessboardCornersSB(image: org.opencv.core.Mat, patternSize: org.opencv.core.Size, corners: org.opencv.core.Mat): boolean;
				public static fisheye_undistortPoints(distorted: org.opencv.core.Mat, undistorted: org.opencv.core.Mat, K: org.opencv.core.Mat, D: org.opencv.core.Mat, R: org.opencv.core.Mat): void;
				public static RQDecomp3x3(src: org.opencv.core.Mat, mtxR: org.opencv.core.Mat, mtxQ: org.opencv.core.Mat, Qx: org.opencv.core.Mat, Qy: org.opencv.core.Mat, Qz: org.opencv.core.Mat): number[];
				public static estimateAffinePartial2D(from: org.opencv.core.Mat, to: org.opencv.core.Mat, inliers: org.opencv.core.Mat): org.opencv.core.Mat;
				public static recoverPose(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, E: org.opencv.core.Mat, R: org.opencv.core.Mat, t: org.opencv.core.Mat, method: number, prob: number, param11: number, threshold: org.opencv.core.Mat): number;
				public static recoverPose(E: org.opencv.core.Mat, points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, R: org.opencv.core.Mat, t: org.opencv.core.Mat, distanceThresh: number, param7: org.opencv.core.Mat, mask: org.opencv.core.Mat): number;
				public static recoverPose(E: org.opencv.core.Mat, points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, R: org.opencv.core.Mat, t: org.opencv.core.Mat): number;
				public static solvePnP(objectPoints: org.opencv.core.MatOfPoint3f, imagePoints: org.opencv.core.MatOfPoint2f, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.MatOfDouble, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat, useExtrinsicGuess: boolean): boolean;
				public static fisheye_undistortPoints(distorted: org.opencv.core.Mat, undistorted: org.opencv.core.Mat, K: org.opencv.core.Mat, D: org.opencv.core.Mat): void;
				public static fisheye_estimateNewCameraMatrixForUndistortRectify(K: org.opencv.core.Mat, D: org.opencv.core.Mat, image_size: org.opencv.core.Size, R: org.opencv.core.Mat, P: org.opencv.core.Mat): void;
				public static solvePnPRefineVVS(objectPoints: org.opencv.core.Mat, imagePoints: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat, criteria: org.opencv.core.TermCriteria): void;
				public static recoverPose(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, E: org.opencv.core.Mat, R: org.opencv.core.Mat, t: org.opencv.core.Mat, method: number, prob: number): number;
				public static filterHomographyDecompByVisibleRefpoints(rotations: java.util.List<org.opencv.core.Mat>, normals: java.util.List<org.opencv.core.Mat>, beforePoints: org.opencv.core.Mat, afterPoints: org.opencv.core.Mat, possibleSolutions: org.opencv.core.Mat): void;
				public static recoverPose(E: org.opencv.core.Mat, points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, R: org.opencv.core.Mat, t: org.opencv.core.Mat, distanceThresh: number): number;
				public static solvePnPRefineVVS(objectPoints: org.opencv.core.Mat, imagePoints: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat, criteria: org.opencv.core.TermCriteria, VVSlambda: number): void;
				public static stereoCalibrate(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints1: java.util.List<org.opencv.core.Mat>, imagePoints2: java.util.List<org.opencv.core.Mat>, cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, T: org.opencv.core.Mat, E: org.opencv.core.Mat, F: org.opencv.core.Mat, perViewErrors: org.opencv.core.Mat): number;
				public static findEssentialMat(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, focal: number, param3: org.opencv.core.Point, pp: number, method: number, prob: number, param7: number): org.opencv.core.Mat;
				public static composeRT(rvec1: org.opencv.core.Mat, tvec1: org.opencv.core.Mat, rvec2: org.opencv.core.Mat, tvec2: org.opencv.core.Mat, rvec3: org.opencv.core.Mat, tvec3: org.opencv.core.Mat, dr3dr1: org.opencv.core.Mat, dr3dt1: org.opencv.core.Mat, dr3dr2: org.opencv.core.Mat, dr3dt2: org.opencv.core.Mat, dt3dr1: org.opencv.core.Mat, dt3dt1: org.opencv.core.Mat, dt3dr2: org.opencv.core.Mat, dt3dt2: org.opencv.core.Mat): void;
				public static estimateAffine2D(from: org.opencv.core.Mat, to: org.opencv.core.Mat, inliers: org.opencv.core.Mat, method: number): org.opencv.core.Mat;
				public static calibrateHandEye(R_gripper2base: java.util.List<org.opencv.core.Mat>, t_gripper2base: java.util.List<org.opencv.core.Mat>, R_target2cam: java.util.List<org.opencv.core.Mat>, t_target2cam: java.util.List<org.opencv.core.Mat>, R_cam2gripper: org.opencv.core.Mat, t_cam2gripper: org.opencv.core.Mat): void;
				public static findEssentialMat(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat): org.opencv.core.Mat;
				public static findHomography(srcPoints: org.opencv.core.MatOfPoint2f, dstPoints: org.opencv.core.MatOfPoint2f, method: number, ransacReprojThreshold: number): org.opencv.core.Mat;
				public static calibrateCameraRO(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints: java.util.List<org.opencv.core.Mat>, imageSize: org.opencv.core.Size, iFixedPoint: number, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, newObjPoints: org.opencv.core.Mat, flags: number, criteria: org.opencv.core.TermCriteria): number;
				public static drawFrameAxes(image: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat, length: number, thickness: number): void;
				public static fisheye_stereoRectify(K1: org.opencv.core.Mat, D1: org.opencv.core.Mat, K2: org.opencv.core.Mat, D2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, tvec: org.opencv.core.Mat, R1: org.opencv.core.Mat, R2: org.opencv.core.Mat, P1: org.opencv.core.Mat, P2: org.opencv.core.Mat, Q: org.opencv.core.Mat, flags: number, newImageSize: org.opencv.core.Size, balance: number): void;
				public static calibrateCamera(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints: java.util.List<org.opencv.core.Mat>, imageSize: org.opencv.core.Size, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, flags: number): number;
				public static undistortImagePoints(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat): void;
				public static findEssentialMat(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, method: number, prob: number): org.opencv.core.Mat;
				public static solvePnP(objectPoints: org.opencv.core.MatOfPoint3f, imagePoints: org.opencv.core.MatOfPoint2f, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.MatOfDouble, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat): boolean;
				public static undistortPoints(src: org.opencv.core.MatOfPoint2f, dst: org.opencv.core.MatOfPoint2f, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat): void;
				public static checkChessboard(img: org.opencv.core.Mat, size: org.opencv.core.Size): boolean;
				public static Rodrigues(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, jacobian: org.opencv.core.Mat): void;
				public static estimateAffinePartial2D(from: org.opencv.core.Mat, to: org.opencv.core.Mat): org.opencv.core.Mat;
				public static solveP3P(objectPoints: org.opencv.core.Mat, imagePoints: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, flags: number): number;
				public static calibrateCameraRO(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints: java.util.List<org.opencv.core.Mat>, imageSize: org.opencv.core.Size, iFixedPoint: number, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, newObjPoints: org.opencv.core.Mat, flags: number): number;
				public static calibrateHandEye(R_gripper2base: java.util.List<org.opencv.core.Mat>, t_gripper2base: java.util.List<org.opencv.core.Mat>, R_target2cam: java.util.List<org.opencv.core.Mat>, t_target2cam: java.util.List<org.opencv.core.Mat>, R_cam2gripper: org.opencv.core.Mat, t_cam2gripper: org.opencv.core.Mat, method: number): void;
				public static fisheye_stereoRectify(K1: org.opencv.core.Mat, D1: org.opencv.core.Mat, K2: org.opencv.core.Mat, D2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, tvec: org.opencv.core.Mat, R1: org.opencv.core.Mat, R2: org.opencv.core.Mat, P1: org.opencv.core.Mat, P2: org.opencv.core.Mat, Q: org.opencv.core.Mat, flags: number, newImageSize: org.opencv.core.Size): void;
				public static fisheye_stereoCalibrate(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints1: java.util.List<org.opencv.core.Mat>, imagePoints2: java.util.List<org.opencv.core.Mat>, K1: org.opencv.core.Mat, D1: org.opencv.core.Mat, K2: org.opencv.core.Mat, D2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, T: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, flags: number): number;
				public static Rodrigues(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static decomposeProjectionMatrix(projMatrix: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, rotMatrix: org.opencv.core.Mat, transVect: org.opencv.core.Mat): void;
				public static fisheye_stereoCalibrate(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints1: java.util.List<org.opencv.core.Mat>, imagePoints2: java.util.List<org.opencv.core.Mat>, K1: org.opencv.core.Mat, D1: org.opencv.core.Mat, K2: org.opencv.core.Mat, D2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, T: org.opencv.core.Mat): number;
				public static findFundamentalMat(points1: org.opencv.core.MatOfPoint2f, points2: org.opencv.core.MatOfPoint2f, mask: org.opencv.core.Mat, params: org.opencv.calib3d.UsacParams): org.opencv.core.Mat;
				public static calibrateRobotWorldHandEye(R_world2cam: java.util.List<org.opencv.core.Mat>, t_world2cam: java.util.List<org.opencv.core.Mat>, R_base2gripper: java.util.List<org.opencv.core.Mat>, t_base2gripper: java.util.List<org.opencv.core.Mat>, R_base2world: org.opencv.core.Mat, t_base2world: org.opencv.core.Mat, R_gripper2cam: org.opencv.core.Mat, t_gripper2cam: org.opencv.core.Mat): void;
				public static RQDecomp3x3(src: org.opencv.core.Mat, mtxR: org.opencv.core.Mat, mtxQ: org.opencv.core.Mat): number[];
				public static findEssentialMat(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, method: number, prob: number, param5: number, threshold: number): org.opencv.core.Mat;
				public static fisheye_estimateNewCameraMatrixForUndistortRectify(K: org.opencv.core.Mat, D: org.opencv.core.Mat, image_size: org.opencv.core.Size, R: org.opencv.core.Mat, P: org.opencv.core.Mat, balance: number, param6: org.opencv.core.Size, new_size: number): void;
				public static recoverPose(E: org.opencv.core.Mat, points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, R: org.opencv.core.Mat, t: org.opencv.core.Mat): number;
				public static findHomography(srcPoints: org.opencv.core.MatOfPoint2f, dstPoints: org.opencv.core.MatOfPoint2f, method: number, ransacReprojThreshold: number, param4: org.opencv.core.Mat): org.opencv.core.Mat;
				public static solvePnPRansac(objectPoints: org.opencv.core.MatOfPoint3f, imagePoints: org.opencv.core.MatOfPoint2f, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.MatOfDouble, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat, useExtrinsicGuess: boolean, iterationsCount: number, reprojectionError: number): boolean;
				public static recoverPose(E: org.opencv.core.Mat, points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, R: org.opencv.core.Mat, t: org.opencv.core.Mat, focal: number, param6: org.opencv.core.Point): number;
				public static estimateChessboardSharpness(image: org.opencv.core.Mat, patternSize: org.opencv.core.Size, corners: org.opencv.core.Mat, rise_distance: number, vertical: boolean): org.opencv.core.Scalar;
				public static fisheye_undistortImage(distorted: org.opencv.core.Mat, undistorted: org.opencv.core.Mat, K: org.opencv.core.Mat, D: org.opencv.core.Mat): void;
				public static findFundamentalMat(points1: org.opencv.core.MatOfPoint2f, points2: org.opencv.core.MatOfPoint2f, method: number, ransacReprojThreshold: number, param4: number, confidence: org.opencv.core.Mat): org.opencv.core.Mat;
				public static stereoCalibrateExtended(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints1: java.util.List<org.opencv.core.Mat>, imagePoints2: java.util.List<org.opencv.core.Mat>, cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, T: org.opencv.core.Mat, E: org.opencv.core.Mat, F: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, perViewErrors: org.opencv.core.Mat, flags: number): number;
				public static stereoRectify(cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, T: org.opencv.core.Mat, R1: org.opencv.core.Mat, R2: org.opencv.core.Mat, P1: org.opencv.core.Mat, P2: org.opencv.core.Mat, Q: org.opencv.core.Mat, flags: number, alpha: number, param14: org.opencv.core.Size, newImageSize: org.opencv.core.Rect, validPixROI1: org.opencv.core.Rect): void;
				public static composeRT(rvec1: org.opencv.core.Mat, tvec1: org.opencv.core.Mat, rvec2: org.opencv.core.Mat, tvec2: org.opencv.core.Mat, rvec3: org.opencv.core.Mat, tvec3: org.opencv.core.Mat, dr3dr1: org.opencv.core.Mat, dr3dt1: org.opencv.core.Mat, dr3dr2: org.opencv.core.Mat, dr3dt2: org.opencv.core.Mat): void;
				public static estimateAffine3D(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, out: org.opencv.core.Mat, inliers: org.opencv.core.Mat): number;
				public static undistort(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, newCameraMatrix: org.opencv.core.Mat): void;
				public static findChessboardCornersSBWithMeta(image: org.opencv.core.Mat, patternSize: org.opencv.core.Size, corners: org.opencv.core.Mat, flags: number, meta: org.opencv.core.Mat): boolean;
				public static solvePnPRansac(objectPoints: org.opencv.core.MatOfPoint3f, imagePoints: org.opencv.core.MatOfPoint2f, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.MatOfDouble, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat, inliers: org.opencv.core.Mat): boolean;
				public static fisheye_calibrate(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints: java.util.List<org.opencv.core.Mat>, image_size: org.opencv.core.Size, K: org.opencv.core.Mat, D: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, flags: number, criteria: org.opencv.core.TermCriteria): number;
				public static findEssentialMat(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, method: number, prob: number, param5: number): org.opencv.core.Mat;
				public static fisheye_projectPoints(objectPoints: org.opencv.core.Mat, imagePoints: org.opencv.core.Mat, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat, K: org.opencv.core.Mat, D: org.opencv.core.Mat): void;
				public static calibrateRobotWorldHandEye(R_world2cam: java.util.List<org.opencv.core.Mat>, t_world2cam: java.util.List<org.opencv.core.Mat>, R_base2gripper: java.util.List<org.opencv.core.Mat>, t_base2gripper: java.util.List<org.opencv.core.Mat>, R_base2world: org.opencv.core.Mat, t_base2world: org.opencv.core.Mat, R_gripper2cam: org.opencv.core.Mat, t_gripper2cam: org.opencv.core.Mat, method: number): void;
				public static findCirclesGrid(image: org.opencv.core.Mat, patternSize: org.opencv.core.Size, centers: org.opencv.core.Mat): boolean;
				public static findFundamentalMat(points1: org.opencv.core.MatOfPoint2f, points2: org.opencv.core.MatOfPoint2f, method: number, ransacReprojThreshold: number, param4: number): org.opencv.core.Mat;
				public static stereoRectifyUncalibrated(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, F: org.opencv.core.Mat, imgSize: org.opencv.core.Size, H1: org.opencv.core.Mat, H2: org.opencv.core.Mat): boolean;
				public static sampsonDistance(pt1: org.opencv.core.Mat, pt2: org.opencv.core.Mat, F: org.opencv.core.Mat): number;
				public static solvePnPGeneric(objectPoints: org.opencv.core.Mat, imagePoints: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, useExtrinsicGuess: boolean, flags: number, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat): number;
				public static validateDisparity(disparity: org.opencv.core.Mat, cost: org.opencv.core.Mat, minDisparity: number, numberOfDisparities: number): void;
				public static findHomography(srcPoints: org.opencv.core.MatOfPoint2f, dstPoints: org.opencv.core.MatOfPoint2f): org.opencv.core.Mat;
				public static find4QuadCornerSubpix(img: org.opencv.core.Mat, corners: org.opencv.core.Mat, region_size: org.opencv.core.Size): boolean;
				public static filterSpeckles(img: org.opencv.core.Mat, newVal: number, param2: number, maxSpeckleSize: number, maxDiff: org.opencv.core.Mat): void;
				public static findEssentialMat(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, focal: number, param3: org.opencv.core.Point, pp: number, method: number, prob: number): org.opencv.core.Mat;
				public static calibrateCameraExtended(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints: java.util.List<org.opencv.core.Mat>, imageSize: org.opencv.core.Size, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, stdDeviationsIntrinsics: org.opencv.core.Mat, stdDeviationsExtrinsics: org.opencv.core.Mat, perViewErrors: org.opencv.core.Mat, flags: number, criteria: org.opencv.core.TermCriteria): number;
				public static stereoRectify(cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, T: org.opencv.core.Mat, R1: org.opencv.core.Mat, R2: org.opencv.core.Mat, P1: org.opencv.core.Mat, P2: org.opencv.core.Mat, Q: org.opencv.core.Mat, flags: number): void;
				public static convertPointsToHomogeneous(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static getOptimalNewCameraMatrix(cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, imageSize: org.opencv.core.Size, alpha: number, param4: org.opencv.core.Size, newImgSize: org.opencv.core.Rect, validPixROI: boolean): org.opencv.core.Mat;
				public static composeRT(rvec1: org.opencv.core.Mat, tvec1: org.opencv.core.Mat, rvec2: org.opencv.core.Mat, tvec2: org.opencv.core.Mat, rvec3: org.opencv.core.Mat, tvec3: org.opencv.core.Mat, dr3dr1: org.opencv.core.Mat): void;
				public static findEssentialMat(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, focal: number, param3: org.opencv.core.Point, pp: number, method: number, prob: number, param7: number, threshold: org.opencv.core.Mat): org.opencv.core.Mat;
				public static stereoCalibrate(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints1: java.util.List<org.opencv.core.Mat>, imagePoints2: java.util.List<org.opencv.core.Mat>, cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, T: org.opencv.core.Mat, E: org.opencv.core.Mat, F: org.opencv.core.Mat, flags: number, criteria: org.opencv.core.TermCriteria): number;
				public static solvePnPRefineLM(objectPoints: org.opencv.core.Mat, imagePoints: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat): void;
				public static getOptimalNewCameraMatrix(cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, imageSize: org.opencv.core.Size, alpha: number): org.opencv.core.Mat;
				public static recoverPose(E: org.opencv.core.Mat, points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, R: org.opencv.core.Mat, t: org.opencv.core.Mat, focal: number): number;
				public static decomposeHomographyMat(H: org.opencv.core.Mat, K: org.opencv.core.Mat, rotations: java.util.List<org.opencv.core.Mat>, translations: java.util.List<org.opencv.core.Mat>, normals: java.util.List<org.opencv.core.Mat>): number;
				public static estimateAffine2D(from: org.opencv.core.Mat, to: org.opencv.core.Mat): org.opencv.core.Mat;
				public static fisheye_estimateNewCameraMatrixForUndistortRectify(K: org.opencv.core.Mat, D: org.opencv.core.Mat, image_size: org.opencv.core.Size, R: org.opencv.core.Mat, P: org.opencv.core.Mat, balance: number): void;
				public static calibrateCameraROExtended(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints: java.util.List<org.opencv.core.Mat>, imageSize: org.opencv.core.Size, iFixedPoint: number, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, newObjPoints: org.opencv.core.Mat, stdDeviationsIntrinsics: org.opencv.core.Mat, stdDeviationsExtrinsics: org.opencv.core.Mat, stdDeviationsObjPoints: org.opencv.core.Mat, perViewErrors: org.opencv.core.Mat): number;
				public static getDefaultNewCameraMatrix(cameraMatrix: org.opencv.core.Mat, imgsize: org.opencv.core.Size): org.opencv.core.Mat;
				public static solvePnPRefineLM(objectPoints: org.opencv.core.Mat, imagePoints: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat, criteria: org.opencv.core.TermCriteria): void;
				public static fisheye_stereoCalibrate(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints1: java.util.List<org.opencv.core.Mat>, imagePoints2: java.util.List<org.opencv.core.Mat>, K1: org.opencv.core.Mat, D1: org.opencv.core.Mat, K2: org.opencv.core.Mat, D2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, T: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, flags: number, criteria: org.opencv.core.TermCriteria): number;
				public static solvePnPRansac(objectPoints: org.opencv.core.MatOfPoint3f, imagePoints: org.opencv.core.MatOfPoint2f, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.MatOfDouble, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat, useExtrinsicGuess: boolean, iterationsCount: number, reprojectionError: number, confidence: number, param10: org.opencv.core.Mat, inliers: number): boolean;
				public static estimateTranslation3D(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, out: org.opencv.core.Mat, inliers: org.opencv.core.Mat, ransacThreshold: number): number;
				public static decomposeProjectionMatrix(projMatrix: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, rotMatrix: org.opencv.core.Mat, transVect: org.opencv.core.Mat, rotMatrixX: org.opencv.core.Mat, rotMatrixY: org.opencv.core.Mat, rotMatrixZ: org.opencv.core.Mat, eulerAngles: org.opencv.core.Mat): void;
				public static initCameraMatrix2D(objectPoints: java.util.List<org.opencv.core.MatOfPoint3f>, imagePoints: java.util.List<org.opencv.core.MatOfPoint2f>, imageSize: org.opencv.core.Size): org.opencv.core.Mat;
				public static findEssentialMat(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, cameraMatrix1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, dist_coeff1: org.opencv.core.Mat, dist_coeff2: org.opencv.core.Mat, mask: org.opencv.core.Mat, params: org.opencv.calib3d.UsacParams): org.opencv.core.Mat;
				public static recoverPose(E: org.opencv.core.Mat, points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, R: org.opencv.core.Mat, t: org.opencv.core.Mat, focal: number, param6: org.opencv.core.Point, pp: org.opencv.core.Mat): number;
				public static findEssentialMat(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, method: number, prob: number, param5: number, threshold: number, param7: org.opencv.core.Mat): org.opencv.core.Mat;
				public static filterSpeckles(img: org.opencv.core.Mat, newVal: number, param2: number, maxSpeckleSize: number): void;
				public static undistortPointsIter(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, R: org.opencv.core.Mat, P: org.opencv.core.Mat, criteria: org.opencv.core.TermCriteria): void;
				public static recoverPose(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, E: org.opencv.core.Mat, R: org.opencv.core.Mat, t: org.opencv.core.Mat): number;
				public static recoverPose(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, E: org.opencv.core.Mat, R: org.opencv.core.Mat, t: org.opencv.core.Mat, method: number): number;
				public static getDefaultNewCameraMatrix(cameraMatrix: org.opencv.core.Mat): org.opencv.core.Mat;
				public static estimateChessboardSharpness(image: org.opencv.core.Mat, patternSize: org.opencv.core.Size, corners: org.opencv.core.Mat): org.opencv.core.Scalar;
				public static estimateAffine3D(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, out: org.opencv.core.Mat, inliers: org.opencv.core.Mat, ransacThreshold: number, param5: number): number;
				public static estimateAffine2D(from: org.opencv.core.Mat, to: org.opencv.core.Mat, inliers: org.opencv.core.Mat, method: number, ransacReprojThreshold: number, param5: number, maxIters: number): org.opencv.core.Mat;
				public static stereoRectify(cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, T: org.opencv.core.Mat, R1: org.opencv.core.Mat, R2: org.opencv.core.Mat, P1: org.opencv.core.Mat, P2: org.opencv.core.Mat, Q: org.opencv.core.Mat, flags: number, alpha: number, param14: org.opencv.core.Size, newImageSize: org.opencv.core.Rect): void;
				public static solvePnPGeneric(objectPoints: org.opencv.core.Mat, imagePoints: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, useExtrinsicGuess: boolean, flags: number): number;
				public static calibrationMatrixValues(cameraMatrix: org.opencv.core.Mat, imageSize: org.opencv.core.Size, apertureWidth: number, param3: number, apertureHeight: number[], param5: number[], fovx: number[], fovy: org.opencv.core.Point, focalLength: number[]): void;
				public static projectPoints(objectPoints: org.opencv.core.MatOfPoint3f, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.MatOfDouble, imagePoints: org.opencv.core.MatOfPoint2f): void;
				public static findHomography(srcPoints: org.opencv.core.MatOfPoint2f, dstPoints: org.opencv.core.MatOfPoint2f, mask: org.opencv.core.Mat, params: org.opencv.calib3d.UsacParams): org.opencv.core.Mat;
				public static matMulDeriv(A: org.opencv.core.Mat, B: org.opencv.core.Mat, dABdA: org.opencv.core.Mat, dABdB: org.opencv.core.Mat): void;
				public static stereoCalibrate(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints1: java.util.List<org.opencv.core.Mat>, imagePoints2: java.util.List<org.opencv.core.Mat>, cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, T: org.opencv.core.Mat, E: org.opencv.core.Mat, F: org.opencv.core.Mat): number;
				public static projectPoints(objectPoints: org.opencv.core.MatOfPoint3f, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.MatOfDouble, imagePoints: org.opencv.core.MatOfPoint2f, jacobian: org.opencv.core.Mat, aspectRatio: number): void;
				public static findFundamentalMat(points1: org.opencv.core.MatOfPoint2f, points2: org.opencv.core.MatOfPoint2f, method: number): org.opencv.core.Mat;
				public static undistort(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat): void;
				public static stereoCalibrateExtended(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints1: java.util.List<org.opencv.core.Mat>, imagePoints2: java.util.List<org.opencv.core.Mat>, cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, T: org.opencv.core.Mat, E: org.opencv.core.Mat, F: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, perViewErrors: org.opencv.core.Mat, flags: number, criteria: org.opencv.core.TermCriteria): number;
				public static calibrateCameraExtended(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints: java.util.List<org.opencv.core.Mat>, imageSize: org.opencv.core.Size, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, stdDeviationsIntrinsics: org.opencv.core.Mat, stdDeviationsExtrinsics: org.opencv.core.Mat, perViewErrors: org.opencv.core.Mat, flags: number): number;
				public static fisheye_undistortImage(distorted: org.opencv.core.Mat, undistorted: org.opencv.core.Mat, K: org.opencv.core.Mat, D: org.opencv.core.Mat, Knew: org.opencv.core.Mat): void;
				public static findHomography(srcPoints: org.opencv.core.MatOfPoint2f, dstPoints: org.opencv.core.MatOfPoint2f, method: number, ransacReprojThreshold: number, param4: org.opencv.core.Mat, mask: number, maxIters: number): org.opencv.core.Mat;
				public static stereoRectify(cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, T: org.opencv.core.Mat, R1: org.opencv.core.Mat, R2: org.opencv.core.Mat, P1: org.opencv.core.Mat, P2: org.opencv.core.Mat, Q: org.opencv.core.Mat, flags: number, alpha: number): void;
				public static initInverseRectificationMap(cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, R: org.opencv.core.Mat, newCameraMatrix: org.opencv.core.Mat, size: org.opencv.core.Size, m1type: number, map1: org.opencv.core.Mat, map2: org.opencv.core.Mat): void;
				public static undistortPoints(src: org.opencv.core.MatOfPoint2f, dst: org.opencv.core.MatOfPoint2f, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, R: org.opencv.core.Mat): void;
				public static estimateAffine2D(from: org.opencv.core.Mat, to: org.opencv.core.Mat, inliers: org.opencv.core.Mat, method: number, ransacReprojThreshold: number): org.opencv.core.Mat;
				public static fisheye_stereoRectify(K1: org.opencv.core.Mat, D1: org.opencv.core.Mat, K2: org.opencv.core.Mat, D2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, tvec: org.opencv.core.Mat, R1: org.opencv.core.Mat, R2: org.opencv.core.Mat, P1: org.opencv.core.Mat, P2: org.opencv.core.Mat, Q: org.opencv.core.Mat, flags: number, newImageSize: org.opencv.core.Size, balance: number, param15: number): void;
				public static solvePnPGeneric(objectPoints: org.opencv.core.Mat, imagePoints: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, useExtrinsicGuess: boolean, flags: number, rvec: org.opencv.core.Mat): number;
				public static estimateTranslation3D(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, out: org.opencv.core.Mat, inliers: org.opencv.core.Mat, ransacThreshold: number, param5: number): number;
				public static initCameraMatrix2D(objectPoints: java.util.List<org.opencv.core.MatOfPoint3f>, imagePoints: java.util.List<org.opencv.core.MatOfPoint2f>, imageSize: org.opencv.core.Size, aspectRatio: number): org.opencv.core.Mat;
				public static findEssentialMat(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, focal: number): org.opencv.core.Mat;
				public static undistortPoints(src: org.opencv.core.MatOfPoint2f, dst: org.opencv.core.MatOfPoint2f, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, R: org.opencv.core.Mat, P: org.opencv.core.Mat): void;
				public static findEssentialMat(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, focal: number, param3: org.opencv.core.Point, pp: number): org.opencv.core.Mat;
				public static decomposeProjectionMatrix(projMatrix: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, rotMatrix: org.opencv.core.Mat, transVect: org.opencv.core.Mat, rotMatrixX: org.opencv.core.Mat, rotMatrixY: org.opencv.core.Mat): void;
				public static projectPoints(objectPoints: org.opencv.core.MatOfPoint3f, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.MatOfDouble, imagePoints: org.opencv.core.MatOfPoint2f, jacobian: org.opencv.core.Mat): void;
				public static recoverPose(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, E: org.opencv.core.Mat, R: org.opencv.core.Mat, t: org.opencv.core.Mat, method: number, prob: number, param11: number): number;
				public static rectify3Collinear(cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, cameraMatrix3: org.opencv.core.Mat, distCoeffs3: org.opencv.core.Mat, imgpt1: java.util.List<org.opencv.core.Mat>, imgpt3: java.util.List<org.opencv.core.Mat>, imageSize: org.opencv.core.Size, R12: org.opencv.core.Mat, T12: org.opencv.core.Mat, R13: org.opencv.core.Mat, T13: org.opencv.core.Mat, R1: org.opencv.core.Mat, R2: org.opencv.core.Mat, R3: org.opencv.core.Mat, P1: org.opencv.core.Mat, P2: org.opencv.core.Mat, P3: org.opencv.core.Mat, Q: org.opencv.core.Mat, alpha: number, param21: org.opencv.core.Size, newImgSize: org.opencv.core.Rect, roi1: org.opencv.core.Rect, roi2: number): number;
				public static findFundamentalMat(points1: org.opencv.core.MatOfPoint2f, points2: org.opencv.core.MatOfPoint2f, method: number, ransacReprojThreshold: number): org.opencv.core.Mat;
				public static fisheye_distortPoints(undistorted: org.opencv.core.Mat, distorted: org.opencv.core.Mat, K: org.opencv.core.Mat, D: org.opencv.core.Mat): void;
				public static reprojectImageTo3D(disparity: org.opencv.core.Mat, _3dImage: org.opencv.core.Mat, Q: org.opencv.core.Mat, handleMissingValues: boolean): void;
				public static findChessboardCornersSB(image: org.opencv.core.Mat, patternSize: org.opencv.core.Size, corners: org.opencv.core.Mat, flags: number): boolean;
				public static estimateAffine3D(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, scale: number[], force_rotation: boolean): org.opencv.core.Mat;
				public static RQDecomp3x3(src: org.opencv.core.Mat, mtxR: org.opencv.core.Mat, mtxQ: org.opencv.core.Mat, Qx: org.opencv.core.Mat): number[];
				public static estimateAffine3D(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): org.opencv.core.Mat;
				public static estimateAffinePartial2D(from: org.opencv.core.Mat, to: org.opencv.core.Mat, inliers: org.opencv.core.Mat, method: number, ransacReprojThreshold: number, param5: number, maxIters: number, param7: number): org.opencv.core.Mat;
				public static solvePnPRansac(objectPoints: org.opencv.core.MatOfPoint3f, imagePoints: org.opencv.core.MatOfPoint2f, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.MatOfDouble, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat, useExtrinsicGuess: boolean): boolean;
				public static estimateAffine2D(from: org.opencv.core.Mat, to: org.opencv.core.Mat, inliers: org.opencv.core.Mat): org.opencv.core.Mat;
				public static findHomography(srcPoints: org.opencv.core.MatOfPoint2f, dstPoints: org.opencv.core.MatOfPoint2f, method: number): org.opencv.core.Mat;
				public static fisheye_stereoCalibrate(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints1: java.util.List<org.opencv.core.Mat>, imagePoints2: java.util.List<org.opencv.core.Mat>, K1: org.opencv.core.Mat, D1: org.opencv.core.Mat, K2: org.opencv.core.Mat, D2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, T: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>): number;
				public static findEssentialMat(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, focal: number, param3: org.opencv.core.Point, pp: number, method: number): org.opencv.core.Mat;
				public static estimateTranslation3D(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, out: org.opencv.core.Mat, inliers: org.opencv.core.Mat): number;
				public static reprojectImageTo3D(disparity: org.opencv.core.Mat, _3dImage: org.opencv.core.Mat, Q: org.opencv.core.Mat): void;
				public static decomposeProjectionMatrix(projMatrix: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, rotMatrix: org.opencv.core.Mat, transVect: org.opencv.core.Mat, rotMatrixX: org.opencv.core.Mat, rotMatrixY: org.opencv.core.Mat, rotMatrixZ: org.opencv.core.Mat): void;
				public static calibrateCameraROExtended(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints: java.util.List<org.opencv.core.Mat>, imageSize: org.opencv.core.Size, iFixedPoint: number, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, newObjPoints: org.opencv.core.Mat, stdDeviationsIntrinsics: org.opencv.core.Mat, stdDeviationsExtrinsics: org.opencv.core.Mat, stdDeviationsObjPoints: org.opencv.core.Mat, perViewErrors: org.opencv.core.Mat, flags: number): number;
				public static solvePnPGeneric(objectPoints: org.opencv.core.Mat, imagePoints: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, useExtrinsicGuess: boolean, flags: number, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat, reprojectionError: org.opencv.core.Mat): number;
				public static stereoRectifyUncalibrated(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, F: org.opencv.core.Mat, imgSize: org.opencv.core.Size, H1: org.opencv.core.Mat, H2: org.opencv.core.Mat, threshold: number): boolean;
				public static findEssentialMat(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, focal: number, param3: org.opencv.core.Point): org.opencv.core.Mat;
				public static fisheye_estimateNewCameraMatrixForUndistortRectify(K: org.opencv.core.Mat, D: org.opencv.core.Mat, image_size: org.opencv.core.Size, R: org.opencv.core.Mat, P: org.opencv.core.Mat, balance: number, param6: org.opencv.core.Size): void;
				public static fisheye_projectPoints(objectPoints: org.opencv.core.Mat, imagePoints: org.opencv.core.Mat, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat, K: org.opencv.core.Mat, D: org.opencv.core.Mat, alpha: number): void;
				public static findEssentialMat(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, method: number, prob: number): org.opencv.core.Mat;
				public static initUndistortRectifyMap(cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, R: org.opencv.core.Mat, newCameraMatrix: org.opencv.core.Mat, size: org.opencv.core.Size, m1type: number, map1: org.opencv.core.Mat, map2: org.opencv.core.Mat): void;
				public static fisheye_projectPoints(objectPoints: org.opencv.core.Mat, imagePoints: org.opencv.core.Mat, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat, K: org.opencv.core.Mat, D: org.opencv.core.Mat, alpha: number, param7: org.opencv.core.Mat): void;
				public static estimateChessboardSharpness(image: org.opencv.core.Mat, patternSize: org.opencv.core.Size, corners: org.opencv.core.Mat, rise_distance: number): org.opencv.core.Scalar;
				public static fisheye_calibrate(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints: java.util.List<org.opencv.core.Mat>, image_size: org.opencv.core.Size, K: org.opencv.core.Mat, D: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, flags: number): number;
				public static calibrateCameraROExtended(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints: java.util.List<org.opencv.core.Mat>, imageSize: org.opencv.core.Size, iFixedPoint: number, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, newObjPoints: org.opencv.core.Mat, stdDeviationsIntrinsics: org.opencv.core.Mat, stdDeviationsExtrinsics: org.opencv.core.Mat, stdDeviationsObjPoints: org.opencv.core.Mat, perViewErrors: org.opencv.core.Mat, flags: number, criteria: org.opencv.core.TermCriteria): number;
				public static estimateAffine2D(from: org.opencv.core.Mat, to: org.opencv.core.Mat, inliers: org.opencv.core.Mat, method: number, ransacReprojThreshold: number, param5: number): org.opencv.core.Mat;
				public static calibrateCamera(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints: java.util.List<org.opencv.core.Mat>, imageSize: org.opencv.core.Size, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>): number;
				public static estimateAffinePartial2D(from: org.opencv.core.Mat, to: org.opencv.core.Mat, inliers: org.opencv.core.Mat, method: number, ransacReprojThreshold: number, param5: number): org.opencv.core.Mat;
				public static findChessboardCorners(image: org.opencv.core.Mat, patternSize: org.opencv.core.Size, corners: org.opencv.core.MatOfPoint2f): boolean;
				public static calibrateCameraRO(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints: java.util.List<org.opencv.core.Mat>, imageSize: org.opencv.core.Size, iFixedPoint: number, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, newObjPoints: org.opencv.core.Mat): number;
				public static solvePnPRefineVVS(objectPoints: org.opencv.core.Mat, imagePoints: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat): void;
				public static drawChessboardCorners(image: org.opencv.core.Mat, patternSize: org.opencv.core.Size, corners: org.opencv.core.MatOfPoint2f, patternWasFound: boolean): void;
				public static fisheye_stereoCalibrate(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints1: java.util.List<org.opencv.core.Mat>, imagePoints2: java.util.List<org.opencv.core.Mat>, K1: org.opencv.core.Mat, D1: org.opencv.core.Mat, K2: org.opencv.core.Mat, D2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, T: org.opencv.core.Mat, flags: number, criteria: org.opencv.core.TermCriteria): number;
				public static undistortImagePoints(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, arg1: org.opencv.core.TermCriteria): void;
				public static solvePnPRansac(objectPoints: org.opencv.core.MatOfPoint3f, imagePoints: org.opencv.core.MatOfPoint2f, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.MatOfDouble, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat, useExtrinsicGuess: boolean, iterationsCount: number, reprojectionError: number, confidence: number, param10: org.opencv.core.Mat): boolean;
				public static reprojectImageTo3D(disparity: org.opencv.core.Mat, _3dImage: org.opencv.core.Mat, Q: org.opencv.core.Mat, handleMissingValues: boolean, ddepth: number): void;
				public static composeRT(rvec1: org.opencv.core.Mat, tvec1: org.opencv.core.Mat, rvec2: org.opencv.core.Mat, tvec2: org.opencv.core.Mat, rvec3: org.opencv.core.Mat, tvec3: org.opencv.core.Mat, dr3dr1: org.opencv.core.Mat, dr3dt1: org.opencv.core.Mat, dr3dr2: org.opencv.core.Mat, dr3dt2: org.opencv.core.Mat, dt3dr1: org.opencv.core.Mat): void;
				public static fisheye_initUndistortRectifyMap(K: org.opencv.core.Mat, D: org.opencv.core.Mat, R: org.opencv.core.Mat, P: org.opencv.core.Mat, size: org.opencv.core.Size, m1type: number, map1: org.opencv.core.Mat, map2: org.opencv.core.Mat): void;
				public static fisheye_calibrate(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints: java.util.List<org.opencv.core.Mat>, image_size: org.opencv.core.Size, K: org.opencv.core.Mat, D: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>): number;
				public static drawFrameAxes(image: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat, length: number): void;
				public static findHomography(srcPoints: org.opencv.core.MatOfPoint2f, dstPoints: org.opencv.core.MatOfPoint2f, method: number, ransacReprojThreshold: number, param4: org.opencv.core.Mat, mask: number): org.opencv.core.Mat;
				public static getOptimalNewCameraMatrix(cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, imageSize: org.opencv.core.Size, alpha: number, param4: org.opencv.core.Size): org.opencv.core.Mat;
				public static findFundamentalMat(points1: org.opencv.core.MatOfPoint2f, points2: org.opencv.core.MatOfPoint2f): org.opencv.core.Mat;
				public static getDefaultNewCameraMatrix(cameraMatrix: org.opencv.core.Mat, imgsize: org.opencv.core.Size, centerPrincipalPoint: boolean): org.opencv.core.Mat;
				public static decomposeEssentialMat(E: org.opencv.core.Mat, R1: org.opencv.core.Mat, R2: org.opencv.core.Mat, t: org.opencv.core.Mat): void;
				public static estimateChessboardSharpness(image: org.opencv.core.Mat, patternSize: org.opencv.core.Size, corners: org.opencv.core.Mat, rise_distance: number, vertical: boolean, sharpness: org.opencv.core.Mat): org.opencv.core.Scalar;
				public static stereoCalibrate(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints1: java.util.List<org.opencv.core.Mat>, imagePoints2: java.util.List<org.opencv.core.Mat>, cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, T: org.opencv.core.Mat, E: org.opencv.core.Mat, F: org.opencv.core.Mat, perViewErrors: org.opencv.core.Mat, flags: number, criteria: org.opencv.core.TermCriteria): number;
				public static stereoCalibrateExtended(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints1: java.util.List<org.opencv.core.Mat>, imagePoints2: java.util.List<org.opencv.core.Mat>, cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, T: org.opencv.core.Mat, E: org.opencv.core.Mat, F: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, perViewErrors: org.opencv.core.Mat): number;
				public constructor();
				public static RQDecomp3x3(src: org.opencv.core.Mat, mtxR: org.opencv.core.Mat, mtxQ: org.opencv.core.Mat, Qx: org.opencv.core.Mat, Qy: org.opencv.core.Mat): number[];
				public static estimateAffine2D(pts1: org.opencv.core.Mat, pts2: org.opencv.core.Mat, inliers: org.opencv.core.Mat, params: org.opencv.calib3d.UsacParams): org.opencv.core.Mat;
				public static findEssentialMat(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, method: number, prob: number, param8: number): org.opencv.core.Mat;
				public static estimateAffine2D(from: org.opencv.core.Mat, to: org.opencv.core.Mat, inliers: org.opencv.core.Mat, method: number, ransacReprojThreshold: number, param5: number, maxIters: number, param7: number): org.opencv.core.Mat;
				public static fisheye_undistortPoints(distorted: org.opencv.core.Mat, undistorted: org.opencv.core.Mat, K: org.opencv.core.Mat, D: org.opencv.core.Mat, R: org.opencv.core.Mat, P: org.opencv.core.Mat): void;
				public static estimateAffinePartial2D(from: org.opencv.core.Mat, to: org.opencv.core.Mat, inliers: org.opencv.core.Mat, method: number): org.opencv.core.Mat;
				public static composeRT(rvec1: org.opencv.core.Mat, tvec1: org.opencv.core.Mat, rvec2: org.opencv.core.Mat, tvec2: org.opencv.core.Mat, rvec3: org.opencv.core.Mat, tvec3: org.opencv.core.Mat, dr3dr1: org.opencv.core.Mat, dr3dt1: org.opencv.core.Mat, dr3dr2: org.opencv.core.Mat, dr3dt2: org.opencv.core.Mat, dt3dr1: org.opencv.core.Mat, dt3dt1: org.opencv.core.Mat, dt3dr2: org.opencv.core.Mat): void;
				public static findCirclesGrid(image: org.opencv.core.Mat, patternSize: org.opencv.core.Size, centers: org.opencv.core.Mat, flags: number): boolean;
				public static computeCorrespondEpilines(points: org.opencv.core.Mat, whichImage: number, F: org.opencv.core.Mat, lines: org.opencv.core.Mat): void;
				public static convertPointsFromHomogeneous(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static solvePnPGeneric(objectPoints: org.opencv.core.Mat, imagePoints: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>): number;
				public static solvePnP(objectPoints: org.opencv.core.MatOfPoint3f, imagePoints: org.opencv.core.MatOfPoint2f, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.MatOfDouble, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat, useExtrinsicGuess: boolean, flags: number): boolean;
				public static solvePnPRansac(objectPoints: org.opencv.core.MatOfPoint3f, imagePoints: org.opencv.core.MatOfPoint2f, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.MatOfDouble, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat, inliers: org.opencv.core.Mat, params: org.opencv.calib3d.UsacParams): boolean;
				public static correctMatches(F: org.opencv.core.Mat, points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, newPoints1: org.opencv.core.Mat, newPoints2: org.opencv.core.Mat): void;
				public static calibrateCamera(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints: java.util.List<org.opencv.core.Mat>, imageSize: org.opencv.core.Size, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, flags: number, criteria: org.opencv.core.TermCriteria): number;
				public static findEssentialMat(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat): org.opencv.core.Mat;
				public static solvePnPRansac(objectPoints: org.opencv.core.MatOfPoint3f, imagePoints: org.opencv.core.MatOfPoint2f, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.MatOfDouble, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat, useExtrinsicGuess: boolean, iterationsCount: number, reprojectionError: number, confidence: number): boolean;
				public static stereoRectify(cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, T: org.opencv.core.Mat, R1: org.opencv.core.Mat, R2: org.opencv.core.Mat, P1: org.opencv.core.Mat, P2: org.opencv.core.Mat, Q: org.opencv.core.Mat, flags: number, alpha: number, param14: org.opencv.core.Size): void;
				public static composeRT(rvec1: org.opencv.core.Mat, tvec1: org.opencv.core.Mat, rvec2: org.opencv.core.Mat, tvec2: org.opencv.core.Mat, rvec3: org.opencv.core.Mat, tvec3: org.opencv.core.Mat, dr3dr1: org.opencv.core.Mat, dr3dt1: org.opencv.core.Mat): void;
				public static solvePnPRansac(objectPoints: org.opencv.core.MatOfPoint3f, imagePoints: org.opencv.core.MatOfPoint2f, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.MatOfDouble, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat, useExtrinsicGuess: boolean, iterationsCount: number): boolean;
				public static getValidDisparityROI(roi1: org.opencv.core.Rect, roi2: org.opencv.core.Rect, minDisparity: number, numberOfDisparities: number, blockSize: number): org.opencv.core.Rect;
				public static fisheye_undistortImage(distorted: org.opencv.core.Mat, undistorted: org.opencv.core.Mat, K: org.opencv.core.Mat, D: org.opencv.core.Mat, Knew: org.opencv.core.Mat, new_size: org.opencv.core.Size): void;
				public static validateDisparity(disparity: org.opencv.core.Mat, cost: org.opencv.core.Mat, minDisparity: number, numberOfDisparities: number, disp12MaxDisp: number): void;
				public static filterHomographyDecompByVisibleRefpoints(rotations: java.util.List<org.opencv.core.Mat>, normals: java.util.List<org.opencv.core.Mat>, beforePoints: org.opencv.core.Mat, afterPoints: org.opencv.core.Mat, possibleSolutions: org.opencv.core.Mat, pointsMask: org.opencv.core.Mat): void;
				public static findEssentialMat(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, method: number, prob: number, param8: number, threshold: org.opencv.core.Mat): org.opencv.core.Mat;
				public static fisheye_undistortPoints(distorted: org.opencv.core.Mat, undistorted: org.opencv.core.Mat, K: org.opencv.core.Mat, D: org.opencv.core.Mat, R: org.opencv.core.Mat, P: org.opencv.core.Mat, criteria: org.opencv.core.TermCriteria): void;
				public static stereoCalibrate(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints1: java.util.List<org.opencv.core.Mat>, imagePoints2: java.util.List<org.opencv.core.Mat>, cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, T: org.opencv.core.Mat, E: org.opencv.core.Mat, F: org.opencv.core.Mat, flags: number): number;
				public static findFundamentalMat(points1: org.opencv.core.MatOfPoint2f, points2: org.opencv.core.MatOfPoint2f, method: number, ransacReprojThreshold: number, param4: number, confidence: number, param6: org.opencv.core.Mat): org.opencv.core.Mat;
				public static findChessboardCorners(image: org.opencv.core.Mat, patternSize: org.opencv.core.Size, corners: org.opencv.core.MatOfPoint2f, flags: number): boolean;
				public static estimateAffine3D(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, out: org.opencv.core.Mat, inliers: org.opencv.core.Mat, ransacThreshold: number): number;
				public static fisheye_distortPoints(undistorted: org.opencv.core.Mat, distorted: org.opencv.core.Mat, K: org.opencv.core.Mat, D: org.opencv.core.Mat, alpha: number): void;
				public static composeRT(rvec1: org.opencv.core.Mat, tvec1: org.opencv.core.Mat, rvec2: org.opencv.core.Mat, tvec2: org.opencv.core.Mat, rvec3: org.opencv.core.Mat, tvec3: org.opencv.core.Mat, dr3dr1: org.opencv.core.Mat, dr3dt1: org.opencv.core.Mat, dr3dr2: org.opencv.core.Mat, dr3dt2: org.opencv.core.Mat, dt3dr1: org.opencv.core.Mat, dt3dt1: org.opencv.core.Mat): void;
				public static getOptimalNewCameraMatrix(cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, imageSize: org.opencv.core.Size, alpha: number, param4: org.opencv.core.Size, newImgSize: org.opencv.core.Rect): org.opencv.core.Mat;
				public static estimateAffinePartial2D(from: org.opencv.core.Mat, to: org.opencv.core.Mat, inliers: org.opencv.core.Mat, method: number, ransacReprojThreshold: number, param5: number, maxIters: number): org.opencv.core.Mat;
				public static findFundamentalMat(points1: org.opencv.core.MatOfPoint2f, points2: org.opencv.core.MatOfPoint2f, method: number, ransacReprojThreshold: number, param4: number, confidence: number): org.opencv.core.Mat;
				public static solvePnPRansac(objectPoints: org.opencv.core.MatOfPoint3f, imagePoints: org.opencv.core.MatOfPoint2f, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.MatOfDouble, rvec: org.opencv.core.Mat, tvec: org.opencv.core.Mat): boolean;
				public static recoverPose(E: org.opencv.core.Mat, points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, R: org.opencv.core.Mat, t: org.opencv.core.Mat, distanceThresh: number, param7: org.opencv.core.Mat): number;
				public static findEssentialMat(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat): org.opencv.core.Mat;
				public static stereoRectify(cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, T: org.opencv.core.Mat, R1: org.opencv.core.Mat, R2: org.opencv.core.Mat, P1: org.opencv.core.Mat, P2: org.opencv.core.Mat, Q: org.opencv.core.Mat): void;
				public static calibrateCameraExtended(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints: java.util.List<org.opencv.core.Mat>, imageSize: org.opencv.core.Size, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, stdDeviationsIntrinsics: org.opencv.core.Mat, stdDeviationsExtrinsics: org.opencv.core.Mat, perViewErrors: org.opencv.core.Mat): number;
				public static solvePnPGeneric(objectPoints: org.opencv.core.Mat, imagePoints: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, rvecs: java.util.List<org.opencv.core.Mat>, tvecs: java.util.List<org.opencv.core.Mat>, useExtrinsicGuess: boolean): number;
				public static fisheye_stereoCalibrate(objectPoints: java.util.List<org.opencv.core.Mat>, imagePoints1: java.util.List<org.opencv.core.Mat>, imagePoints2: java.util.List<org.opencv.core.Mat>, K1: org.opencv.core.Mat, D1: org.opencv.core.Mat, K2: org.opencv.core.Mat, D2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, T: org.opencv.core.Mat, flags: number): number;
				public static decomposeProjectionMatrix(projMatrix: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, rotMatrix: org.opencv.core.Mat, transVect: org.opencv.core.Mat, rotMatrixX: org.opencv.core.Mat): void;
				public static estimateAffine3D(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, scale: number[]): org.opencv.core.Mat;
				public static recoverPose(E: org.opencv.core.Mat, points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, cameraMatrix: org.opencv.core.Mat, R: org.opencv.core.Mat, t: org.opencv.core.Mat, mask: org.opencv.core.Mat): number;
				public static fisheye_stereoRectify(K1: org.opencv.core.Mat, D1: org.opencv.core.Mat, K2: org.opencv.core.Mat, D2: org.opencv.core.Mat, imageSize: org.opencv.core.Size, R: org.opencv.core.Mat, tvec: org.opencv.core.Mat, R1: org.opencv.core.Mat, R2: org.opencv.core.Mat, P1: org.opencv.core.Mat, P2: org.opencv.core.Mat, Q: org.opencv.core.Mat, flags: number): void;
				public static findEssentialMat(points1: org.opencv.core.Mat, points2: org.opencv.core.Mat, cameraMatrix1: org.opencv.core.Mat, distCoeffs1: org.opencv.core.Mat, cameraMatrix2: org.opencv.core.Mat, distCoeffs2: org.opencv.core.Mat, method: number): org.opencv.core.Mat;
				public static triangulatePoints(projMatr1: org.opencv.core.Mat, projMatr2: org.opencv.core.Mat, projPoints1: org.opencv.core.Mat, projPoints2: org.opencv.core.Mat, points4D: org.opencv.core.Mat): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module calib3d {
			export class StereoBM extends org.opencv.calib3d.StereoMatcher {
				public static class: java.lang.Class<org.opencv.calib3d.StereoBM>;
				public static PREFILTER_NORMALIZED_RESPONSE: number;
				public static PREFILTER_XSOBEL: number;
				public getPreFilterCap(): number;
				public setUniquenessRatio(uniquenessRatio: number): void;
				public constructor(addr: number);
				public getTextureThreshold(): number;
				public setROI1(roi1: org.opencv.core.Rect): void;
				public finalize(): void;
				public setTextureThreshold(textureThreshold: number): void;
				public static create(): org.opencv.calib3d.StereoBM;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public static __fromPtr__(addr: number): org.opencv.calib3d.StereoMatcher;
				public setROI2(roi2: org.opencv.core.Rect): void;
				public static create(numDisparities: number): org.opencv.calib3d.StereoBM;
				public static __fromPtr__(addr: number): org.opencv.calib3d.StereoBM;
				public setPreFilterCap(preFilterCap: number): void;
				public setSmallerBlockSize(blockSize: number): void;
				public setPreFilterSize(preFilterSize: number): void;
				public getUniquenessRatio(): number;
				public getSmallerBlockSize(): number;
				public getROI2(): org.opencv.core.Rect;
				public setPreFilterType(preFilterType: number): void;
				public static create(numDisparities: number, blockSize: number): org.opencv.calib3d.StereoBM;
				public getPreFilterType(): number;
				public getPreFilterSize(): number;
				public getROI1(): org.opencv.core.Rect;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module calib3d {
			export class StereoMatcher extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.calib3d.StereoMatcher>;
				public static DISP_SHIFT: number;
				public static DISP_SCALE: number;
				public getSpeckleRange(): number;
				public getNumDisparities(): number;
				public constructor(addr: number);
				public setSpeckleRange(speckleRange: number): void;
				public getDisp12MaxDiff(): number;
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public static __fromPtr__(addr: number): org.opencv.calib3d.StereoMatcher;
				public getBlockSize(): number;
				public setDisp12MaxDiff(disp12MaxDiff: number): void;
				public setMinDisparity(minDisparity: number): void;
				public setSpeckleWindowSize(speckleWindowSize: number): void;
				public getSpeckleWindowSize(): number;
				public getMinDisparity(): number;
				public compute(left: org.opencv.core.Mat, right: org.opencv.core.Mat, disparity: org.opencv.core.Mat): void;
				public setBlockSize(blockSize: number): void;
				public setNumDisparities(numDisparities: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module calib3d {
			export class StereoSGBM extends org.opencv.calib3d.StereoMatcher {
				public static class: java.lang.Class<org.opencv.calib3d.StereoSGBM>;
				public static MODE_SGBM: number;
				public static MODE_HH: number;
				public static MODE_SGBM_3WAY: number;
				public static MODE_HH4: number;
				public getMode(): number;
				public static create(minDisparity: number, numDisparities: number, blockSize: number, P1: number, P2: number, disp12MaxDiff: number, preFilterCap: number, uniquenessRatio: number, speckleWindowSize: number): org.opencv.calib3d.StereoSGBM;
				public static create(minDisparity: number, numDisparities: number): org.opencv.calib3d.StereoSGBM;
				public static create(minDisparity: number): org.opencv.calib3d.StereoSGBM;
				public finalize(): void;
				public getP1(): number;
				public setMode(mode: number): void;
				public setPreFilterCap(preFilterCap: number): void;
				public getP2(): number;
				public static create(minDisparity: number, numDisparities: number, blockSize: number, P1: number): org.opencv.calib3d.StereoSGBM;
				public setP2(P2: number): void;
				public static create(minDisparity: number, numDisparities: number, blockSize: number, P1: number, P2: number, disp12MaxDiff: number): org.opencv.calib3d.StereoSGBM;
				public getPreFilterCap(): number;
				public setUniquenessRatio(uniquenessRatio: number): void;
				public constructor(addr: number);
				public static create(): org.opencv.calib3d.StereoSGBM;
				public setP1(P1: number): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public static create(minDisparity: number, numDisparities: number, blockSize: number, P1: number, P2: number): org.opencv.calib3d.StereoSGBM;
				public static __fromPtr__(addr: number): org.opencv.calib3d.StereoMatcher;
				public static create(minDisparity: number, numDisparities: number, blockSize: number, P1: number, P2: number, disp12MaxDiff: number, preFilterCap: number, uniquenessRatio: number, speckleWindowSize: number, speckleRange: number): org.opencv.calib3d.StereoSGBM;
				public static create(minDisparity: number, numDisparities: number, blockSize: number, P1: number, P2: number, disp12MaxDiff: number, preFilterCap: number): org.opencv.calib3d.StereoSGBM;
				public static create(minDisparity: number, numDisparities: number, blockSize: number): org.opencv.calib3d.StereoSGBM;
				public static create(minDisparity: number, numDisparities: number, blockSize: number, P1: number, P2: number, disp12MaxDiff: number, preFilterCap: number, uniquenessRatio: number): org.opencv.calib3d.StereoSGBM;
				public static __fromPtr__(addr: number): org.opencv.calib3d.StereoSGBM;
				public getUniquenessRatio(): number;
				public static create(minDisparity: number, numDisparities: number, blockSize: number, P1: number, P2: number, disp12MaxDiff: number, preFilterCap: number, uniquenessRatio: number, speckleWindowSize: number, speckleRange: number, mode: number): org.opencv.calib3d.StereoSGBM;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module calib3d {
			export class UsacParams extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.calib3d.UsacParams>;
				public nativeObj: number;
				public set_randomGeneratorState(randomGeneratorState: number): void;
				public set_final_polisher(final_polisher: number): void;
				public get_final_polisher_iterations(): number;
				public set_isParallel(isParallel: boolean): void;
				public set_confidence(confidence: number): void;
				public set_loMethod(loMethod: number): void;
				public get_maxIterations(): number;
				public finalize(): void;
				public get_isParallel(): boolean;
				public get_randomGeneratorState(): number;
				public set_score(score: number): void;
				public constructor();
				public set_loSampleSize(loSampleSize: number): void;
				public set_maxIterations(maxIterations: number): void;
				public get_loSampleSize(): number;
				public set_loIterations(loIterations: number): void;
				public get_loIterations(): number;
				public get_neighborsSearch(): number;
				public set_final_polisher_iterations(final_polisher_iterations: number): void;
				public set_threshold(threshold: number): void;
				public constructor(addr: number);
				public getNativeObjAddr(): number;
				public get_final_polisher(): number;
				public static __fromPtr__(addr: number): org.opencv.calib3d.UsacParams;
				public get_sampler(): number;
				public get_confidence(): number;
				public set_neighborsSearch(neighborsSearch: number): void;
				public set_sampler(sampler: number): void;
				public get_score(): number;
				public get_loMethod(): number;
				public get_threshold(): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class Algorithm extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.core.Algorithm>;
				public nativeObj: number;
				public getDefaultName(): string;
				public constructor(addr: number);
				public clear(): void;
				public finalize(): void;
				public getNativeObjAddr(): number;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public save(filename: string): void;
				public empty(): boolean;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class Core extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.core.Core>;
				public static VERSION: string;
				public static NATIVE_LIBRARY_NAME: string;
				public static VERSION_MAJOR: number;
				public static VERSION_MINOR: number;
				public static VERSION_REVISION: number;
				public static VERSION_STATUS: string;
				public static SVD_MODIFY_A: number;
				public static SVD_NO_UV: number;
				public static SVD_FULL_UV: number;
				public static FILLED: number;
				public static REDUCE_SUM: number;
				public static REDUCE_AVG: number;
				public static REDUCE_MAX: number;
				public static REDUCE_MIN: number;
				public static RNG_UNIFORM: number;
				public static RNG_NORMAL: number;
				public static BORDER_CONSTANT: number;
				public static BORDER_REPLICATE: number;
				public static BORDER_REFLECT: number;
				public static BORDER_WRAP: number;
				public static BORDER_REFLECT_101: number;
				public static BORDER_TRANSPARENT: number;
				public static BORDER_REFLECT101: number;
				public static BORDER_DEFAULT: number;
				public static BORDER_ISOLATED: number;
				public static CMP_EQ: number;
				public static CMP_GT: number;
				public static CMP_GE: number;
				public static CMP_LT: number;
				public static CMP_LE: number;
				public static CMP_NE: number;
				public static COVAR_SCRAMBLED: number;
				public static COVAR_NORMAL: number;
				public static COVAR_USE_AVG: number;
				public static COVAR_SCALE: number;
				public static COVAR_ROWS: number;
				public static COVAR_COLS: number;
				public static DECOMP_LU: number;
				public static DECOMP_SVD: number;
				public static DECOMP_EIG: number;
				public static DECOMP_CHOLESKY: number;
				public static DECOMP_QR: number;
				public static DECOMP_NORMAL: number;
				public static DFT_INVERSE: number;
				public static DFT_SCALE: number;
				public static DFT_ROWS: number;
				public static DFT_COMPLEX_OUTPUT: number;
				public static DFT_REAL_OUTPUT: number;
				public static DFT_COMPLEX_INPUT: number;
				public static DCT_INVERSE: number;
				public static DCT_ROWS: number;
				public static StsOk: number;
				public static StsBackTrace: number;
				public static StsError: number;
				public static StsInternal: number;
				public static StsNoMem: number;
				public static StsBadArg: number;
				public static StsBadFunc: number;
				public static StsNoConv: number;
				public static StsAutoTrace: number;
				public static HeaderIsNull: number;
				public static BadImageSize: number;
				public static BadOffset: number;
				public static BadDataPtr: number;
				public static BadStep: number;
				public static BadModelOrChSeq: number;
				public static BadNumChannels: number;
				public static BadNumChannel1U: number;
				public static BadDepth: number;
				public static BadAlphaChannel: number;
				public static BadOrder: number;
				public static BadOrigin: number;
				public static BadAlign: number;
				public static BadCallBack: number;
				public static BadTileSize: number;
				public static BadCOI: number;
				public static BadROISize: number;
				public static MaskIsTiled: number;
				public static StsNullPtr: number;
				public static StsVecLengthErr: number;
				public static StsFilterStructContentErr: number;
				public static StsKernelStructContentErr: number;
				public static StsFilterOffsetErr: number;
				public static StsBadSize: number;
				public static StsDivByZero: number;
				public static StsInplaceNotSupported: number;
				public static StsObjectNotFound: number;
				public static StsUnmatchedFormats: number;
				public static StsBadFlag: number;
				public static StsBadPoint: number;
				public static StsBadMask: number;
				public static StsUnmatchedSizes: number;
				public static StsUnsupportedFormat: number;
				public static StsOutOfRange: number;
				public static StsParseError: number;
				public static StsNotImplemented: number;
				public static StsBadMemBlock: number;
				public static StsAssert: number;
				public static GpuNotSupported: number;
				public static GpuApiCallError: number;
				public static OpenGlNotSupported: number;
				public static OpenGlApiCallError: number;
				public static OpenCLApiCallError: number;
				public static OpenCLDoubleNotSupported: number;
				public static OpenCLInitError: number;
				public static OpenCLNoAMDBlasFft: number;
				public static Formatter_FMT_DEFAULT: number;
				public static Formatter_FMT_MATLAB: number;
				public static Formatter_FMT_CSV: number;
				public static Formatter_FMT_PYTHON: number;
				public static Formatter_FMT_NUMPY: number;
				public static Formatter_FMT_C: number;
				public static GEMM_1_T: number;
				public static GEMM_2_T: number;
				public static GEMM_3_T: number;
				public static KMEANS_RANDOM_CENTERS: number;
				public static KMEANS_PP_CENTERS: number;
				public static KMEANS_USE_INITIAL_LABELS: number;
				public static NORM_INF: number;
				public static NORM_L1: number;
				public static NORM_L2: number;
				public static NORM_L2SQR: number;
				public static NORM_HAMMING: number;
				public static NORM_HAMMING2: number;
				public static NORM_TYPE_MASK: number;
				public static NORM_RELATIVE: number;
				public static NORM_MINMAX: number;
				public static PCA_DATA_AS_ROW: number;
				public static PCA_DATA_AS_COL: number;
				public static PCA_USE_AVG: number;
				public static Param_INT: number;
				public static Param_BOOLEAN: number;
				public static Param_REAL: number;
				public static Param_STRING: number;
				public static Param_MAT: number;
				public static Param_MAT_VECTOR: number;
				public static Param_ALGORITHM: number;
				public static Param_FLOAT: number;
				public static Param_UNSIGNED_INT: number;
				public static Param_UINT64: number;
				public static Param_UCHAR: number;
				public static Param_SCALAR: number;
				public static REDUCE_SUM2: number;
				public static ROTATE_90_CLOCKWISE: number;
				public static ROTATE_180: number;
				public static ROTATE_90_COUNTERCLOCKWISE: number;
				public static SORT_EVERY_ROW: number;
				public static SORT_EVERY_COLUMN: number;
				public static SORT_ASCENDING: number;
				public static SORT_DESCENDING: number;
				public static dft(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, flags: number): void;
				public static mulTransposed(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, aTa: boolean, delta: org.opencv.core.Mat, scale: number, param5: number): void;
				public static mulTransposed(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, aTa: boolean, delta: org.opencv.core.Mat): void;
				public static cubeRoot(val: number): number;
				public static divide(scale: number, param1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: number): void;
				public static calcCovarMatrix(samples: org.opencv.core.Mat, covar: org.opencv.core.Mat, mean: org.opencv.core.Mat, flags: number, ctype: number): void;
				public static getTickFrequency(): number;
				public static findFile(relative_path: string, required: boolean): string;
				public static findNonZero(src: org.opencv.core.Mat, idx: org.opencv.core.Mat): void;
				public static norm(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat): number;
				public static idct(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, flags: number): void;
				public static add(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat, mask: org.opencv.core.Mat): void;
				public static sumElems(src: org.opencv.core.Mat): org.opencv.core.Scalar;
				public static subtract(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat, mask: org.opencv.core.Mat): void;
				public static polarToCart(magnitude: org.opencv.core.Mat, angle: org.opencv.core.Mat, x: org.opencv.core.Mat, y: org.opencv.core.Mat, angleInDegrees: boolean): void;
				public static divide(src1: org.opencv.core.Mat, src2: org.opencv.core.Scalar, dst: org.opencv.core.Mat, scale: number, param4: number): void;
				public static PCACompute(data: org.opencv.core.Mat, mean: org.opencv.core.Mat, eigenvectors: org.opencv.core.Mat, retainedVariance: number): void;
				public static meanStdDev(src: org.opencv.core.Mat, mean: org.opencv.core.MatOfDouble, stddev: org.opencv.core.MatOfDouble): void;
				public static completeSymm(m: org.opencv.core.Mat, lowerToUpper: boolean): void;
				public static divide(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat, scale: number): void;
				public static mulSpectrums(a: org.opencv.core.Mat, b: org.opencv.core.Mat, c: org.opencv.core.Mat, flags: number): void;
				public static merge(mv: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat): void;
				public static getVersionRevision(): number;
				public static LUT(src: org.opencv.core.Mat, lut: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static gemm(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, alpha: number, param3: org.opencv.core.Mat, src3: number, beta: org.opencv.core.Mat, param6: number): void;
				public static absdiff(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static mulSpectrums(a: org.opencv.core.Mat, b: org.opencv.core.Mat, c: org.opencv.core.Mat, flags: number, conjB: boolean): void;
				public static getVersionMajor(): number;
				public static scaleAdd(src1: org.opencv.core.Mat, alpha: number, param2: org.opencv.core.Mat, src2: org.opencv.core.Mat): void;
				public static gemm(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, alpha: number, param3: org.opencv.core.Mat, src3: number, beta: org.opencv.core.Mat): void;
				public static trace(mtx: org.opencv.core.Mat): org.opencv.core.Scalar;
				public static idft(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, flags: number): void;
				public static multiply(src1: org.opencv.core.Mat, src2: org.opencv.core.Scalar, dst: org.opencv.core.Mat, scale: number, param4: number): void;
				public static pow(src: org.opencv.core.Mat, power: number, param2: org.opencv.core.Mat): void;
				public static solve(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat, flags: number): boolean;
				public static minMaxLoc(src: org.opencv.core.Mat): org.opencv.core.Core.MinMaxLocResult;
				public static solveCubic(coeffs: org.opencv.core.Mat, roots: org.opencv.core.Mat): number;
				public static kmeans(data: org.opencv.core.Mat, K: number, bestLabels: org.opencv.core.Mat, criteria: org.opencv.core.TermCriteria, attempts: number, flags: number): number;
				public static add(src1: org.opencv.core.Mat, src2: org.opencv.core.Scalar, dst: org.opencv.core.Mat): void;
				public static sortIdx(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, flags: number): void;
				public static mean(src: org.opencv.core.Mat, mask: org.opencv.core.Mat): org.opencv.core.Scalar;
				public static reduceArgMax(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, axis: number): void;
				public static randu(dst: org.opencv.core.Mat, low: number, param2: number): void;
				public static norm(src1: org.opencv.core.Mat, normType: number): number;
				/** @deprecated */
				public static getThreadNum(): number;
				public static bitwise_not(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, mask: org.opencv.core.Mat): void;
				public static dct(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, flags: number): void;
				public static copyMakeBorder(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, top: number, bottom: number, left: number, right: number, borderType: number, value: org.opencv.core.Scalar): void;
				public static copyTo(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, mask: org.opencv.core.Mat): void;
				public static countNonZero(src: org.opencv.core.Mat): number;
				public static reduce(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, dim: number, rtype: number, dtype: number): void;
				public static split(m: org.opencv.core.Mat, mv: java.util.List<org.opencv.core.Mat>): void;
				public static getVersionMinor(): number;
				public static reduceArgMax(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, axis: number, lastIndex: boolean): void;
				public static addWeighted(src1: org.opencv.core.Mat, alpha: number, param2: org.opencv.core.Mat, src2: number, beta: number, param5: org.opencv.core.Mat, gamma: number): void;
				public static norm(src1: org.opencv.core.Mat, normType: number, mask: org.opencv.core.Mat): number;
				public static sort(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, flags: number): void;
				public static rotate(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, rotateCode: number): void;
				public static eigen(src: org.opencv.core.Mat, eigenvalues: org.opencv.core.Mat): boolean;
				public static batchDistance(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dist: org.opencv.core.Mat, dtype: number, nidx: org.opencv.core.Mat, normType: number): void;
				public static normalize(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, alpha: number): void;
				public static setIdentity(mtx: org.opencv.core.Mat, s: org.opencv.core.Scalar): void;
				public static norm(src1: org.opencv.core.Mat): number;
				public static patchNaNs(a: org.opencv.core.Mat, val: number): void;
				public static dft(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, flags: number, nonzeroRows: number): void;
				public static eigen(src: org.opencv.core.Mat, eigenvalues: org.opencv.core.Mat, eigenvectors: org.opencv.core.Mat): boolean;
				public static bitwise_xor(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static minMaxLoc(src: org.opencv.core.Mat, mask: org.opencv.core.Mat): org.opencv.core.Core.MinMaxLocResult;
				public static getCPUFeaturesLine(): string;
				public static add(src1: org.opencv.core.Mat, src2: org.opencv.core.Scalar, dst: org.opencv.core.Mat, mask: org.opencv.core.Mat, dtype: number): void;
				public static batchDistance(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dist: org.opencv.core.Mat, dtype: number, nidx: org.opencv.core.Mat): void;
				public static findFileOrKeep(relative_path: string): string;
				public static invert(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, flags: number): number;
				public static getCPUTickCount(): number;
				public static mean(src: org.opencv.core.Mat): org.opencv.core.Scalar;
				public static reduce(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, dim: number, rtype: number): void;
				public static solvePoly(coeffs: org.opencv.core.Mat, roots: org.opencv.core.Mat, maxIters: number): number;
				public static phase(x: org.opencv.core.Mat, y: org.opencv.core.Mat, angle: org.opencv.core.Mat, angleInDegrees: boolean): void;
				public static exp(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static divide(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static norm(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, normType: number, mask: org.opencv.core.Mat): number;
				public static solve(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat): boolean;
				public static inRange(src: org.opencv.core.Mat, lowerb: org.opencv.core.Scalar, upperb: org.opencv.core.Scalar, dst: org.opencv.core.Mat): void;
				public static getBuildInformation(): string;
				public static norm(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, normType: number): number;
				public static PCAProject(data: org.opencv.core.Mat, mean: org.opencv.core.Mat, eigenvectors: org.opencv.core.Mat, result: org.opencv.core.Mat): void;
				public static PCACompute2(data: org.opencv.core.Mat, mean: org.opencv.core.Mat, eigenvectors: org.opencv.core.Mat, eigenvalues: org.opencv.core.Mat): void;
				public static subtract(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat, mask: org.opencv.core.Mat, dtype: number): void;
				public static convertScaleAbs(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, alpha: number, param3: number): void;
				public static checkRange(a: org.opencv.core.Mat): boolean;
				public static flip(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, flipCode: number): void;
				public static findFile(relative_path: string, required: boolean, silentMode: boolean): string;
				public static normalize(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, alpha: number, param3: number): void;
				public static divide(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat, scale: number, param4: number): void;
				public static randShuffle(dst: org.opencv.core.Mat): void;
				public static subtract(src1: org.opencv.core.Mat, src2: org.opencv.core.Scalar, dst: org.opencv.core.Mat, mask: org.opencv.core.Mat): void;
				public static add(src1: org.opencv.core.Mat, src2: org.opencv.core.Scalar, dst: org.opencv.core.Mat, mask: org.opencv.core.Mat): void;
				public static cartToPolar(x: org.opencv.core.Mat, y: org.opencv.core.Mat, magnitude: org.opencv.core.Mat, angle: org.opencv.core.Mat, angleInDegrees: boolean): void;
				public static multiply(src1: org.opencv.core.Mat, src2: org.opencv.core.Scalar, dst: org.opencv.core.Mat): void;
				public static normalize(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, alpha: number, param3: number, beta: number): void;
				public static PSNR(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, R: number): number;
				public static mulTransposed(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, aTa: boolean): void;
				public static add(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static PCABackProject(data: org.opencv.core.Mat, mean: org.opencv.core.Mat, eigenvectors: org.opencv.core.Mat, result: org.opencv.core.Mat): void;
				public static normalize(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, alpha: number, param3: number, beta: number, param5: number): void;
				public static transpose(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static dft(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static getNumThreads(): number;
				public static patchNaNs(a: org.opencv.core.Mat): void;
				public static transposeND(src: org.opencv.core.Mat, order: org.opencv.core.MatOfInt, dst: org.opencv.core.Mat): void;
				public static setUseOptimized(onoff: boolean): void;
				public static repeat(src: org.opencv.core.Mat, ny: number, nx: number, dst: org.opencv.core.Mat): void;
				public static idct(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static magnitude(x: org.opencv.core.Mat, y: org.opencv.core.Mat, magnitude: org.opencv.core.Mat): void;
				public static bitwise_or(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat, mask: org.opencv.core.Mat): void;
				public static getOptimalDFTSize(vecsize: number): number;
				public static bitwise_and(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static meanStdDev(src: org.opencv.core.Mat, mean: org.opencv.core.MatOfDouble, stddev: org.opencv.core.MatOfDouble, mask: org.opencv.core.Mat): void;
				public static normalize(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static multiply(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat, scale: number): void;
				public static randShuffle(dst: org.opencv.core.Mat, iterFactor: number): void;
				public static SVDecomp(src: org.opencv.core.Mat, w: org.opencv.core.Mat, u: org.opencv.core.Mat, vt: org.opencv.core.Mat): void;
				public static Mahalanobis(v1: org.opencv.core.Mat, v2: org.opencv.core.Mat, icovar: org.opencv.core.Mat): number;
				public static compare(src1: org.opencv.core.Mat, src2: org.opencv.core.Scalar, dst: org.opencv.core.Mat, cmpop: number): void;
				public static copyMakeBorder(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, top: number, bottom: number, left: number, right: number, borderType: number): void;
				public static divide(scale: number, param1: org.opencv.core.Mat, src2: org.opencv.core.Mat): void;
				public static getNumberOfCPUs(): number;
				public static SVBackSubst(w: org.opencv.core.Mat, u: org.opencv.core.Mat, vt: org.opencv.core.Mat, rhs: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static max(src1: org.opencv.core.Mat, src2: org.opencv.core.Scalar, dst: org.opencv.core.Mat): void;
				public static setErrorVerbosity(verbose: boolean): void;
				public static divide(src1: org.opencv.core.Mat, src2: org.opencv.core.Scalar, dst: org.opencv.core.Mat): void;
				public static convertScaleAbs(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static cartToPolar(x: org.opencv.core.Mat, y: org.opencv.core.Mat, magnitude: org.opencv.core.Mat, angle: org.opencv.core.Mat): void;
				public static PCACompute(data: org.opencv.core.Mat, mean: org.opencv.core.Mat, eigenvectors: org.opencv.core.Mat): void;
				public static divide(src1: org.opencv.core.Mat, src2: org.opencv.core.Scalar, dst: org.opencv.core.Mat, scale: number): void;
				public static calcCovarMatrix(samples: org.opencv.core.Mat, covar: org.opencv.core.Mat, mean: org.opencv.core.Mat, flags: number): void;
				public static solvePoly(coeffs: org.opencv.core.Mat, roots: org.opencv.core.Mat): number;
				public static setIdentity(mtx: org.opencv.core.Mat): void;
				public static absdiff(src1: org.opencv.core.Mat, src2: org.opencv.core.Scalar, dst: org.opencv.core.Mat): void;
				public static getIppVersion(): string;
				public static batchDistance(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dist: org.opencv.core.Mat, dtype: number, nidx: org.opencv.core.Mat, normType: number, K: number, mask: org.opencv.core.Mat, update: number, crosscheck: boolean): void;
				public static convertFp16(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static batchDistance(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dist: org.opencv.core.Mat, dtype: number, nidx: org.opencv.core.Mat, normType: number, K: number): void;
				public static min(src1: org.opencv.core.Mat, src2: org.opencv.core.Scalar, dst: org.opencv.core.Mat): void;
				public static checkHardwareSupport(feature: number): boolean;
				public static kmeans(data: org.opencv.core.Mat, K: number, bestLabels: org.opencv.core.Mat, criteria: org.opencv.core.TermCriteria, attempts: number, flags: number, centers: org.opencv.core.Mat): number;
				public static transform(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, m: org.opencv.core.Mat): void;
				public static idft(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, flags: number, nonzeroRows: number): void;
				public static findFile(relative_path: string): string;
				public static useIPP(): boolean;
				public static log(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static setNumThreads(nthreads: number): void;
				public static checkRange(a: org.opencv.core.Mat, quiet: boolean, minVal: number, param3: number): boolean;
				public static setUseIPP(flag: boolean): void;
				public static flipND(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, axis: number): void;
				public static hconcat(src: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat): void;
				public static subtract(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static normalize(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, alpha: number, param3: number, beta: number, param5: number, norm_type: org.opencv.core.Mat): void;
				public static PCACompute2(data: org.opencv.core.Mat, mean: org.opencv.core.Mat, eigenvectors: org.opencv.core.Mat, eigenvalues: org.opencv.core.Mat, maxComponents: number): void;
				public static reduceArgMin(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, axis: number): void;
				public static hasNonZero(src: org.opencv.core.Mat): boolean;
				public static extractChannel(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, coi: number): void;
				public static checkRange(a: org.opencv.core.Mat, quiet: boolean, minVal: number): boolean;
				public static mulTransposed(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, aTa: boolean, delta: org.opencv.core.Mat, scale: number): void;
				public static getVersionString(): string;
				public static batchDistance(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dist: org.opencv.core.Mat, dtype: number, nidx: org.opencv.core.Mat, normType: number, K: number, mask: org.opencv.core.Mat): void;
				public static SVDecomp(src: org.opencv.core.Mat, w: org.opencv.core.Mat, u: org.opencv.core.Mat, vt: org.opencv.core.Mat, flags: number): void;
				public constructor();
				public static compare(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat, cmpop: number): void;
				public static determinant(mtx: org.opencv.core.Mat): number;
				public static borderInterpolate(p: number, len: number, borderType: number): number;
				public static addSamplesDataSearchPath(path: string): void;
				public static addWeighted(src1: org.opencv.core.Mat, alpha: number, param2: org.opencv.core.Mat, src2: number, beta: number, param5: org.opencv.core.Mat): void;
				public static multiply(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static eigenNonSymmetric(src: org.opencv.core.Mat, eigenvalues: org.opencv.core.Mat, eigenvectors: org.opencv.core.Mat): void;
				public static subtract(src1: org.opencv.core.Mat, src2: org.opencv.core.Scalar, dst: org.opencv.core.Mat): void;
				public static getTickCount(): number;
				public static PCACompute(data: org.opencv.core.Mat, mean: org.opencv.core.Mat, eigenvectors: org.opencv.core.Mat, maxComponents: number): void;
				public static sqrt(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static multiply(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat, scale: number, param4: number): void;
				public static PSNR(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat): number;
				public static polarToCart(magnitude: org.opencv.core.Mat, angle: org.opencv.core.Mat, x: org.opencv.core.Mat, y: org.opencv.core.Mat): void;
				public static randn(dst: org.opencv.core.Mat, mean: number, param2: number): void;
				public static phase(x: org.opencv.core.Mat, y: org.opencv.core.Mat, angle: org.opencv.core.Mat): void;
				public static useIPP_NotExact(): boolean;
				public static convertScaleAbs(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, alpha: number): void;
				public static dct(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static getHardwareFeatureName(feature: number): string;
				public static batchDistance(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dist: org.opencv.core.Mat, dtype: number, nidx: org.opencv.core.Mat, normType: number, K: number, mask: org.opencv.core.Mat, update: number): void;
				public static insertChannel(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, coi: number): void;
				public static subtract(src1: org.opencv.core.Mat, src2: org.opencv.core.Scalar, dst: org.opencv.core.Mat, mask: org.opencv.core.Mat, dtype: number): void;
				public static invert(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): number;
				public static findFileOrKeep(relative_path: string, silentMode: boolean): string;
				public static PCACompute2(data: org.opencv.core.Mat, mean: org.opencv.core.Mat, eigenvectors: org.opencv.core.Mat, eigenvalues: org.opencv.core.Mat, retainedVariance: number): void;
				public static setUseIPP_NotExact(flag: boolean): void;
				public static setRNGSeed(seed: number): void;
				public static fastAtan2(y: number, x: number): number;
				public static checkRange(a: org.opencv.core.Mat, quiet: boolean): boolean;
				public static idft(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static min(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static max(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static add(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat, mask: org.opencv.core.Mat, dtype: number): void;
				public static vconcat(src: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat): void;
				public static perspectiveTransform(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, m: org.opencv.core.Mat): void;
				public static reduceArgMin(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, axis: number, lastIndex: boolean): void;
				public static multiply(src1: org.opencv.core.Mat, src2: org.opencv.core.Scalar, dst: org.opencv.core.Mat, scale: number): void;
				public static useOptimized(): boolean;
				public static bitwise_and(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat, mask: org.opencv.core.Mat): void;
				public static mixChannels(src: java.util.List<org.opencv.core.Mat>, dst: java.util.List<org.opencv.core.Mat>, fromTo: org.opencv.core.MatOfInt): void;
				public static addSamplesDataSearchSubDirectory(subdir: string): void;
				public static completeSymm(m: org.opencv.core.Mat): void;
				public static bitwise_or(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static bitwise_not(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static bitwise_xor(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat, mask: org.opencv.core.Mat): void;
			}
			export module Core {
				export class MinMaxLocResult extends java.lang.Object {
					public static class: java.lang.Class<org.opencv.core.Core.MinMaxLocResult>;
					public minVal: number;
					public maxVal: number;
					public minLoc: org.opencv.core.Point;
					public maxLoc: org.opencv.core.Point;
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class CvException extends java.lang.RuntimeException {
				public static class: java.lang.Class<org.opencv.core.CvException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable);
				public constructor(message: string);
				public constructor(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean);
				public constructor(msg: string);
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class CvType extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.core.CvType>;
				public static CV_8U: number;
				public static CV_8S: number;
				public static CV_16U: number;
				public static CV_16S: number;
				public static CV_32S: number;
				public static CV_32F: number;
				public static CV_64F: number;
				public static CV_16F: number;
				public static CV_USRTYPE1: number;
				public static CV_8UC1: number;
				public static CV_8UC2: number;
				public static CV_8UC3: number;
				public static CV_8UC4: number;
				public static CV_8SC1: number;
				public static CV_8SC2: number;
				public static CV_8SC3: number;
				public static CV_8SC4: number;
				public static CV_16UC1: number;
				public static CV_16UC2: number;
				public static CV_16UC3: number;
				public static CV_16UC4: number;
				public static CV_16SC1: number;
				public static CV_16SC2: number;
				public static CV_16SC3: number;
				public static CV_16SC4: number;
				public static CV_32SC1: number;
				public static CV_32SC2: number;
				public static CV_32SC3: number;
				public static CV_32SC4: number;
				public static CV_32FC1: number;
				public static CV_32FC2: number;
				public static CV_32FC3: number;
				public static CV_32FC4: number;
				public static CV_64FC1: number;
				public static CV_64FC2: number;
				public static CV_64FC3: number;
				public static CV_64FC4: number;
				public static CV_16FC1: number;
				public static CV_16FC2: number;
				public static CV_16FC3: number;
				public static CV_16FC4: number;
				public static CV_32FC(ch: number): number;
				public static typeToString(type: number): string;
				public static CV_16SC(ch: number): number;
				public static channels(type: number): number;
				public static CV_32SC(ch: number): number;
				public static makeType(depth: number, channels: number): number;
				public static CV_8SC(ch: number): number;
				public static CV_8UC(ch: number): number;
				public constructor();
				public static isInteger(type: number): boolean;
				public static ELEM_SIZE(type: number): number;
				public static CV_64FC(ch: number): number;
				public static CV_16FC(ch: number): number;
				public static CV_16UC(ch: number): number;
				public static depth(type: number): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class DMatch extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.core.DMatch>;
				public queryIdx: number;
				public trainIdx: number;
				public imgIdx: number;
				public distance: number;
				public lessThan(it: org.opencv.core.DMatch): boolean;
				public constructor(_queryIdx: number, _trainIdx: number, _distance: number);
				public constructor(_queryIdx: number, _trainIdx: number, _imgIdx: number, _distance: number);
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class KeyPoint extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.core.KeyPoint>;
				public pt: org.opencv.core.Point;
				public size: number;
				public angle: number;
				public response: number;
				public octave: number;
				public class_id: number;
				public constructor(x: number, y: number, _size: number, _angle: number, _response: number, _octave: number, _class_id: number);
				public constructor(x: number, y: number, _size: number, _angle: number, _response: number);
				public constructor(x: number, y: number, _size: number);
				public toString(): string;
				public constructor(x: number, y: number, _size: number, _angle: number, _response: number, _octave: number);
				public constructor(x: number, y: number, _size: number, _angle: number);
				public constructor();
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class Mat extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.core.Mat>;
				public nativeObj: number;
				public convertTo(m: org.opencv.core.Mat, rtype: number, alpha: number, param3: number): void;
				public submat(rowRange: org.opencv.core.Range, colRange: org.opencv.core.Range): org.opencv.core.Mat;
				public constructor(rows: number, cols: number, type: number);
				public diag(): org.opencv.core.Mat;
				public width(): number;
				public constructor(m: org.opencv.core.Mat, ranges: org.opencv.core.Range[]);
				public create(size: org.opencv.core.Size, type: number): void;
				public static ones(size: org.opencv.core.Size, type: number): org.opencv.core.Mat;
				public isSubmatrix(): boolean;
				public checkVector(elemChannels: number, depth: number): number;
				public dot(m: org.opencv.core.Mat): number;
				public get(idx: number[]): number[];
				public static zeros(sizes: number[], type: number): org.opencv.core.Mat;
				public dataAddr(): number;
				public cols(): number;
				public diag(d: number): org.opencv.core.Mat;
				public colRange(startcol: number, endcol: number): org.opencv.core.Mat;
				public dump(): string;
				public static ones(rows: number, cols: number, type: number): org.opencv.core.Mat;
				public isContinuous(): boolean;
				public inv(method: number): org.opencv.core.Mat;
				public setTo(s: org.opencv.core.Scalar): org.opencv.core.Mat;
				public create(rows: number, cols: number, type: number): void;
				public reshape(cn: number, newshape: number[]): org.opencv.core.Mat;
				public constructor(sizes: number[], type: number);
				public col(x: number): org.opencv.core.Mat;
				public static diag(d: org.opencv.core.Mat): org.opencv.core.Mat;
				public row(y: number): org.opencv.core.Mat;
				public put(idx: number[], data: number[], offset: number, length: number): number;
				public submat(rowStart: number, rowEnd: number, colStart: number, colEnd: number): org.opencv.core.Mat;
				public depth(): number;
				public get(idx: number[], data: number[]): number;
				public elemSize(): number;
				public copySize(m: org.opencv.core.Mat): void;
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range, colRange: org.opencv.core.Range);
				public dims(): number;
				public static ones(sizes: number[], type: number): org.opencv.core.Mat;
				public release(): void;
				public constructor(addr: number);
				public clone(): org.opencv.core.Mat;
				public convertTo(m: org.opencv.core.Mat, rtype: number, alpha: number): void;
				public constructor(size: org.opencv.core.Size, type: number, s: org.opencv.core.Scalar);
				public checkVector(elemChannels: number, depth: number, requireContinuous: boolean): number;
				public size(i: number): number;
				public channels(): number;
				public copyTo(m: org.opencv.core.Mat): void;
				public elemSize1(): number;
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range);
				public get(row: number, col: number): number[];
				public height(): number;
				public constructor(size: org.opencv.core.Size, type: number);
				public create(sizes: number[], type: number): void;
				public mul(m: org.opencv.core.Mat, scale: number): org.opencv.core.Mat;
				public at(clazz: java.lang.Class<any>, idx: number[]): org.opencv.core.Mat.Atable<any>;
				public constructor(sizes: number[], type: number, s: org.opencv.core.Scalar);
				public put(row: number, col: number, ...data: number[]): number;
				public constructor();
				public submat(ranges: org.opencv.core.Range[]): org.opencv.core.Mat;
				public mul(m: org.opencv.core.Mat): org.opencv.core.Mat;
				public constructor(rows: number, cols: number, type: number, s: org.opencv.core.Scalar);
				public clone(): any;
				public cross(m: org.opencv.core.Mat): org.opencv.core.Mat;
				public static eye(size: org.opencv.core.Size, type: number): org.opencv.core.Mat;
				public setTo(value: org.opencv.core.Scalar, mask: org.opencv.core.Mat): org.opencv.core.Mat;
				public rowRange(startrow: number, endrow: number): org.opencv.core.Mat;
				public static zeros(size: org.opencv.core.Size, type: number): org.opencv.core.Mat;
				public assignTo(m: org.opencv.core.Mat, type: number): void;
				public put(idx: number[], data: number[]): number;
				public copyTo(m: org.opencv.core.Mat, mask: org.opencv.core.Mat): void;
				public toString(): string;
				public reshape(cn: number): org.opencv.core.Mat;
				public rowRange(r: org.opencv.core.Range): org.opencv.core.Mat;
				public total(): number;
				public locateROI(wholeSize: org.opencv.core.Size, ofs: org.opencv.core.Point): void;
				public reshape(cn: number, rows: number): org.opencv.core.Mat;
				public t(): org.opencv.core.Mat;
				public put(row: number, col: number, data: number[], offset: number, length: number): number;
				public static eye(rows: number, cols: number, type: number): org.opencv.core.Mat;
				public step1(): number;
				public matMul(m: org.opencv.core.Mat): org.opencv.core.Mat;
				public setTo(value: org.opencv.core.Mat): org.opencv.core.Mat;
				public finalize(): void;
				public inv(): org.opencv.core.Mat;
				public static zeros(rows: number, cols: number, type: number): org.opencv.core.Mat;
				public get(row: number, col: number, data: number[]): number;
				public convertTo(m: org.opencv.core.Mat, rtype: number): void;
				public size(): org.opencv.core.Size;
				public constructor(m: org.opencv.core.Mat, roi: org.opencv.core.Rect);
				public put(row: number, col: number, data: number[]): number;
				public empty(): boolean;
				public push_back(m: org.opencv.core.Mat): void;
				public submat(roi: org.opencv.core.Rect): org.opencv.core.Mat;
				public setTo(value: org.opencv.core.Mat, mask: org.opencv.core.Mat): org.opencv.core.Mat;
				public at(clazz: java.lang.Class<any>, row: number, col: number): org.opencv.core.Mat.Atable<any>;
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer, step: number);
				public getNativeObjAddr(): number;
				public assignTo(m: org.opencv.core.Mat): void;
				public type(): number;
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer);
				public checkVector(elemChannels: number): number;
				public step1(i: number): number;
				public colRange(r: org.opencv.core.Range): org.opencv.core.Mat;
				public put(idx: number[], ...data: number[]): number;
				public adjustROI(dtop: number, dbottom: number, dleft: number, dright: number): org.opencv.core.Mat;
				public rows(): number;
			}
			export module Mat {
				export class Atable<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.opencv.core.Mat.Atable<any>>;
					/**
					 * Constructs a new instance of the org.opencv.core.Mat$Atable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getV(): T;
						setV(param0: T): void;
						getV2c(): org.opencv.core.Mat.Tuple2<T>;
						setV2c(param0: org.opencv.core.Mat.Tuple2<T>): void;
						getV3c(): org.opencv.core.Mat.Tuple3<T>;
						setV3c(param0: org.opencv.core.Mat.Tuple3<T>): void;
						getV4c(): org.opencv.core.Mat.Tuple4<T>;
						setV4c(param0: org.opencv.core.Mat.Tuple4<T>): void;
					});
					public constructor();
					public setV3c(param0: org.opencv.core.Mat.Tuple3<T>): void;
					public setV2c(param0: org.opencv.core.Mat.Tuple2<T>): void;
					public setV(param0: T): void;
					public getV3c(): org.opencv.core.Mat.Tuple3<T>;
					public setV4c(param0: org.opencv.core.Mat.Tuple4<T>): void;
					public getV4c(): org.opencv.core.Mat.Tuple4<T>;
					public getV2c(): org.opencv.core.Mat.Tuple2<T>;
					public getV(): T;
				}
				export class AtableBase extends java.lang.Object {
					public static class: java.lang.Class<org.opencv.core.Mat.AtableBase>;
					public mat: org.opencv.core.Mat;
					public indices: number[];
					public constructor(mat: org.opencv.core.Mat, indices: number[]);
					public constructor(mat: org.opencv.core.Mat, row: number, col: number);
				}
				export class AtableByte extends org.opencv.core.Mat.AtableBase implements org.opencv.core.Mat.Atable<java.lang.Byte>  {
					public static class: java.lang.Class<org.opencv.core.Mat.AtableByte>;
					public constructor(mat: org.opencv.core.Mat, indices: number[]);
					public setV4c(param0: org.opencv.core.Mat.Tuple4<any>): void;
					public getV4c(): org.opencv.core.Mat.Tuple4<any>;
					public getV(): java.lang.Byte;
					public setV2c(v: org.opencv.core.Mat.Tuple2<java.lang.Byte>): void;
					public getV(): any;
					public setV(param0: any): void;
					public getV3c(): org.opencv.core.Mat.Tuple3<any>;
					public getV2c(): org.opencv.core.Mat.Tuple2<java.lang.Byte>;
					public constructor(mat: org.opencv.core.Mat, row: number, col: number);
					public getV3c(): org.opencv.core.Mat.Tuple3<java.lang.Byte>;
					public setV3c(v: org.opencv.core.Mat.Tuple3<java.lang.Byte>): void;
					public getV2c(): org.opencv.core.Mat.Tuple2<any>;
					public setV3c(param0: org.opencv.core.Mat.Tuple3<any>): void;
					public setV(v: java.lang.Byte): void;
					public getV4c(): org.opencv.core.Mat.Tuple4<java.lang.Byte>;
					public setV2c(param0: org.opencv.core.Mat.Tuple2<any>): void;
					public setV4c(v: org.opencv.core.Mat.Tuple4<java.lang.Byte>): void;
				}
				export class AtableDouble extends org.opencv.core.Mat.AtableBase implements org.opencv.core.Mat.Atable<java.lang.Double>  {
					public static class: java.lang.Class<org.opencv.core.Mat.AtableDouble>;
					public constructor(mat: org.opencv.core.Mat, indices: number[]);
					public setV4c(param0: org.opencv.core.Mat.Tuple4<any>): void;
					public getV(): java.lang.Double;
					public getV4c(): org.opencv.core.Mat.Tuple4<any>;
					public setV2c(v: org.opencv.core.Mat.Tuple2<java.lang.Double>): void;
					public setV(v: java.lang.Double): void;
					public getV(): any;
					public getV3c(): org.opencv.core.Mat.Tuple3<java.lang.Double>;
					public setV4c(v: org.opencv.core.Mat.Tuple4<java.lang.Double>): void;
					public setV(param0: any): void;
					public setV3c(v: org.opencv.core.Mat.Tuple3<java.lang.Double>): void;
					public getV3c(): org.opencv.core.Mat.Tuple3<any>;
					public constructor(mat: org.opencv.core.Mat, row: number, col: number);
					public getV2c(): org.opencv.core.Mat.Tuple2<any>;
					public setV3c(param0: org.opencv.core.Mat.Tuple3<any>): void;
					public getV4c(): org.opencv.core.Mat.Tuple4<java.lang.Double>;
					public setV2c(param0: org.opencv.core.Mat.Tuple2<any>): void;
					public getV2c(): org.opencv.core.Mat.Tuple2<java.lang.Double>;
				}
				export class AtableFloat extends org.opencv.core.Mat.AtableBase implements org.opencv.core.Mat.Atable<java.lang.Float>  {
					public static class: java.lang.Class<org.opencv.core.Mat.AtableFloat>;
					public constructor(mat: org.opencv.core.Mat, indices: number[]);
					public setV4c(param0: org.opencv.core.Mat.Tuple4<any>): void;
					public setV(v: java.lang.Float): void;
					public getV3c(): org.opencv.core.Mat.Tuple3<java.lang.Float>;
					public getV4c(): org.opencv.core.Mat.Tuple4<any>;
					public setV4c(v: org.opencv.core.Mat.Tuple4<java.lang.Float>): void;
					public setV2c(v: org.opencv.core.Mat.Tuple2<java.lang.Float>): void;
					public getV(): any;
					public setV(param0: any): void;
					public getV3c(): org.opencv.core.Mat.Tuple3<any>;
					public getV4c(): org.opencv.core.Mat.Tuple4<java.lang.Float>;
					public constructor(mat: org.opencv.core.Mat, row: number, col: number);
					public getV(): java.lang.Float;
					public getV2c(): org.opencv.core.Mat.Tuple2<any>;
					public setV3c(param0: org.opencv.core.Mat.Tuple3<any>): void;
					public getV2c(): org.opencv.core.Mat.Tuple2<java.lang.Float>;
					public setV3c(v: org.opencv.core.Mat.Tuple3<java.lang.Float>): void;
					public setV2c(param0: org.opencv.core.Mat.Tuple2<any>): void;
				}
				export class AtableInteger extends org.opencv.core.Mat.AtableBase implements org.opencv.core.Mat.Atable<java.lang.Integer>  {
					public static class: java.lang.Class<org.opencv.core.Mat.AtableInteger>;
					public constructor(mat: org.opencv.core.Mat, indices: number[]);
					public setV4c(param0: org.opencv.core.Mat.Tuple4<any>): void;
					public getV(): java.lang.Integer;
					public getV4c(): org.opencv.core.Mat.Tuple4<any>;
					public setV2c(v: org.opencv.core.Mat.Tuple2<java.lang.Integer>): void;
					public getV(): any;
					public setV(param0: any): void;
					public getV3c(): org.opencv.core.Mat.Tuple3<any>;
					public getV3c(): org.opencv.core.Mat.Tuple3<java.lang.Integer>;
					public constructor(mat: org.opencv.core.Mat, row: number, col: number);
					public setV3c(v: org.opencv.core.Mat.Tuple3<java.lang.Integer>): void;
					public getV2c(): org.opencv.core.Mat.Tuple2<any>;
					public setV4c(v: org.opencv.core.Mat.Tuple4<java.lang.Integer>): void;
					public setV3c(param0: org.opencv.core.Mat.Tuple3<any>): void;
					public setV(v: java.lang.Integer): void;
					public getV2c(): org.opencv.core.Mat.Tuple2<java.lang.Integer>;
					public getV4c(): org.opencv.core.Mat.Tuple4<java.lang.Integer>;
					public setV2c(param0: org.opencv.core.Mat.Tuple2<any>): void;
				}
				export class AtableShort extends org.opencv.core.Mat.AtableBase implements org.opencv.core.Mat.Atable<java.lang.Short>  {
					public static class: java.lang.Class<org.opencv.core.Mat.AtableShort>;
					public getV3c(): org.opencv.core.Mat.Tuple3<java.lang.Short>;
					public constructor(mat: org.opencv.core.Mat, indices: number[]);
					public setV4c(param0: org.opencv.core.Mat.Tuple4<any>): void;
					public getV4c(): org.opencv.core.Mat.Tuple4<any>;
					public getV(): any;
					public getV4c(): org.opencv.core.Mat.Tuple4<java.lang.Short>;
					public setV(param0: any): void;
					public getV3c(): org.opencv.core.Mat.Tuple3<any>;
					public setV4c(v: org.opencv.core.Mat.Tuple4<java.lang.Short>): void;
					public setV2c(v: org.opencv.core.Mat.Tuple2<java.lang.Short>): void;
					public constructor(mat: org.opencv.core.Mat, row: number, col: number);
					public getV2c(): org.opencv.core.Mat.Tuple2<java.lang.Short>;
					public getV2c(): org.opencv.core.Mat.Tuple2<any>;
					public setV3c(param0: org.opencv.core.Mat.Tuple3<any>): void;
					public setV(v: java.lang.Short): void;
					public setV3c(v: org.opencv.core.Mat.Tuple3<java.lang.Short>): void;
					public getV(): java.lang.Short;
					public setV2c(param0: org.opencv.core.Mat.Tuple2<any>): void;
				}
				export class Tuple2<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.opencv.core.Mat.Tuple2<any>>;
					public constructor(_0: T, _1: T);
					public get_0(): T;
					public get_1(): T;
				}
				export class Tuple3<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.opencv.core.Mat.Tuple3<any>>;
					public get_2(): T;
					public constructor(_0: T, _1: T, _2: T);
					public get_0(): T;
					public get_1(): T;
				}
				export class Tuple4<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.opencv.core.Mat.Tuple4<any>>;
					public get_2(): T;
					public get_0(): T;
					public get_3(): T;
					public get_1(): T;
					public constructor(_0: T, _1: T, _2: T, _3: T);
				}
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfByte extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfByte>;
				public constructor(sizes: number[], type: number);
				public toList(): java.util.List<java.lang.Byte>;
				public fromList(lb: java.util.List<java.lang.Byte>): void;
				public constructor(m: org.opencv.core.Mat);
				public alloc(elemNumber: number): void;
				public constructor(addr: number);
				public constructor(size: org.opencv.core.Size, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer, step: number);
				public constructor(sizes: number[], type: number, s: org.opencv.core.Scalar);
				public static fromNativeAddr(addr: number): org.opencv.core.MatOfByte;
				public fromArray(offset: number, length: number, ...a: number[]): void;
				public constructor(size: org.opencv.core.Size, type: number, s: org.opencv.core.Scalar);
				public constructor();
				public constructor(rows: number, cols: number, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer);
				public constructor(rows: number, cols: number, type: number, s: org.opencv.core.Scalar);
				public constructor(m: org.opencv.core.Mat, ranges: org.opencv.core.Range[]);
				public constructor(...a: number[]);
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range, colRange: org.opencv.core.Range);
				public fromArray(...a: number[]): void;
				public toArray(): number[];
				public constructor(m: org.opencv.core.Mat, roi: org.opencv.core.Rect);
				public constructor(offset: number, length: number, ...a: number[]);
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfDMatch extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfDMatch>;
				public toArray(): org.opencv.core.DMatch[];
				public fromList(ldm: java.util.List<org.opencv.core.DMatch>): void;
				public constructor(sizes: number[], type: number);
				public toList(): java.util.List<org.opencv.core.DMatch>;
				public constructor(m: org.opencv.core.Mat);
				public alloc(elemNumber: number): void;
				public constructor(addr: number);
				public constructor(size: org.opencv.core.Size, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer, step: number);
				public constructor(sizes: number[], type: number, s: org.opencv.core.Scalar);
				public constructor(...ap: org.opencv.core.DMatch[]);
				public constructor(size: org.opencv.core.Size, type: number, s: org.opencv.core.Scalar);
				public constructor();
				public constructor(rows: number, cols: number, type: number);
				public static fromNativeAddr(addr: number): org.opencv.core.MatOfDMatch;
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer);
				public constructor(rows: number, cols: number, type: number, s: org.opencv.core.Scalar);
				public constructor(m: org.opencv.core.Mat, ranges: org.opencv.core.Range[]);
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range, colRange: org.opencv.core.Range);
				public constructor(m: org.opencv.core.Mat, roi: org.opencv.core.Rect);
				public fromArray(...a: org.opencv.core.DMatch[]): void;
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfDouble extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfDouble>;
				public constructor(sizes: number[], type: number);
				public toList(): java.util.List<java.lang.Double>;
				public constructor(m: org.opencv.core.Mat);
				public alloc(elemNumber: number): void;
				public constructor(addr: number);
				public constructor(size: org.opencv.core.Size, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer, step: number);
				public constructor(sizes: number[], type: number, s: org.opencv.core.Scalar);
				public static fromNativeAddr(addr: number): org.opencv.core.MatOfDouble;
				public constructor(size: org.opencv.core.Size, type: number, s: org.opencv.core.Scalar);
				public constructor();
				public constructor(rows: number, cols: number, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer);
				public constructor(rows: number, cols: number, type: number, s: org.opencv.core.Scalar);
				public constructor(m: org.opencv.core.Mat, ranges: org.opencv.core.Range[]);
				public constructor(...a: number[]);
				public fromList(lb: java.util.List<java.lang.Double>): void;
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range, colRange: org.opencv.core.Range);
				public fromArray(...a: number[]): void;
				public toArray(): number[];
				public constructor(m: org.opencv.core.Mat, roi: org.opencv.core.Rect);
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfFloat extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfFloat>;
				public constructor(sizes: number[], type: number);
				public constructor(m: org.opencv.core.Mat);
				public alloc(elemNumber: number): void;
				public constructor(addr: number);
				public constructor(size: org.opencv.core.Size, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer, step: number);
				public constructor(sizes: number[], type: number, s: org.opencv.core.Scalar);
				public constructor(size: org.opencv.core.Size, type: number, s: org.opencv.core.Scalar);
				public constructor();
				public constructor(rows: number, cols: number, type: number);
				public static fromNativeAddr(addr: number): org.opencv.core.MatOfFloat;
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer);
				public constructor(rows: number, cols: number, type: number, s: org.opencv.core.Scalar);
				public constructor(m: org.opencv.core.Mat, ranges: org.opencv.core.Range[]);
				public constructor(...a: number[]);
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range, colRange: org.opencv.core.Range);
				public fromArray(...a: number[]): void;
				public toArray(): number[];
				public constructor(m: org.opencv.core.Mat, roi: org.opencv.core.Rect);
				public fromList(lb: java.util.List<java.lang.Float>): void;
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range);
				public toList(): java.util.List<java.lang.Float>;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfFloat4 extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfFloat4>;
				public constructor(sizes: number[], type: number);
				public constructor(m: org.opencv.core.Mat);
				public alloc(elemNumber: number): void;
				public constructor(addr: number);
				public constructor(size: org.opencv.core.Size, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer, step: number);
				public constructor(sizes: number[], type: number, s: org.opencv.core.Scalar);
				public constructor(size: org.opencv.core.Size, type: number, s: org.opencv.core.Scalar);
				public constructor();
				public constructor(rows: number, cols: number, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer);
				public constructor(rows: number, cols: number, type: number, s: org.opencv.core.Scalar);
				public constructor(m: org.opencv.core.Mat, ranges: org.opencv.core.Range[]);
				public constructor(...a: number[]);
				public static fromNativeAddr(addr: number): org.opencv.core.MatOfFloat4;
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range, colRange: org.opencv.core.Range);
				public fromArray(...a: number[]): void;
				public toArray(): number[];
				public constructor(m: org.opencv.core.Mat, roi: org.opencv.core.Rect);
				public fromList(lb: java.util.List<java.lang.Float>): void;
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range);
				public toList(): java.util.List<java.lang.Float>;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfFloat6 extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfFloat6>;
				public constructor(sizes: number[], type: number);
				public constructor(m: org.opencv.core.Mat);
				public alloc(elemNumber: number): void;
				public constructor(addr: number);
				public constructor(size: org.opencv.core.Size, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer, step: number);
				public constructor(sizes: number[], type: number, s: org.opencv.core.Scalar);
				public constructor(size: org.opencv.core.Size, type: number, s: org.opencv.core.Scalar);
				public constructor();
				public constructor(rows: number, cols: number, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer);
				public constructor(rows: number, cols: number, type: number, s: org.opencv.core.Scalar);
				public constructor(m: org.opencv.core.Mat, ranges: org.opencv.core.Range[]);
				public constructor(...a: number[]);
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range, colRange: org.opencv.core.Range);
				public fromArray(...a: number[]): void;
				public toArray(): number[];
				public constructor(m: org.opencv.core.Mat, roi: org.opencv.core.Rect);
				public static fromNativeAddr(addr: number): org.opencv.core.MatOfFloat6;
				public fromList(lb: java.util.List<java.lang.Float>): void;
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range);
				public toList(): java.util.List<java.lang.Float>;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfInt extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfInt>;
				public toList(): java.util.List<java.lang.Integer>;
				public constructor(sizes: number[], type: number);
				public constructor(m: org.opencv.core.Mat);
				public alloc(elemNumber: number): void;
				public constructor(addr: number);
				public constructor(size: org.opencv.core.Size, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer, step: number);
				public constructor(sizes: number[], type: number, s: org.opencv.core.Scalar);
				public constructor(size: org.opencv.core.Size, type: number, s: org.opencv.core.Scalar);
				public constructor();
				public constructor(rows: number, cols: number, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer);
				public constructor(rows: number, cols: number, type: number, s: org.opencv.core.Scalar);
				public constructor(m: org.opencv.core.Mat, ranges: org.opencv.core.Range[]);
				public static fromNativeAddr(addr: number): org.opencv.core.MatOfInt;
				public constructor(...a: number[]);
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range, colRange: org.opencv.core.Range);
				public fromArray(...a: number[]): void;
				public toArray(): number[];
				public constructor(m: org.opencv.core.Mat, roi: org.opencv.core.Rect);
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range);
				public fromList(lb: java.util.List<java.lang.Integer>): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfInt4 extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfInt4>;
				public toList(): java.util.List<java.lang.Integer>;
				public constructor(sizes: number[], type: number);
				public constructor(m: org.opencv.core.Mat);
				public alloc(elemNumber: number): void;
				public constructor(addr: number);
				public constructor(size: org.opencv.core.Size, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer, step: number);
				public constructor(sizes: number[], type: number, s: org.opencv.core.Scalar);
				public constructor(size: org.opencv.core.Size, type: number, s: org.opencv.core.Scalar);
				public constructor();
				public constructor(rows: number, cols: number, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer);
				public constructor(rows: number, cols: number, type: number, s: org.opencv.core.Scalar);
				public constructor(m: org.opencv.core.Mat, ranges: org.opencv.core.Range[]);
				public constructor(...a: number[]);
				public static fromNativeAddr(addr: number): org.opencv.core.MatOfInt4;
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range, colRange: org.opencv.core.Range);
				public fromArray(...a: number[]): void;
				public toArray(): number[];
				public constructor(m: org.opencv.core.Mat, roi: org.opencv.core.Rect);
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range);
				public fromList(lb: java.util.List<java.lang.Integer>): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfKeyPoint extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfKeyPoint>;
				public static fromNativeAddr(addr: number): org.opencv.core.MatOfKeyPoint;
				public constructor(sizes: number[], type: number);
				public constructor(m: org.opencv.core.Mat);
				public alloc(elemNumber: number): void;
				public constructor(addr: number);
				public constructor(size: org.opencv.core.Size, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer, step: number);
				public constructor(sizes: number[], type: number, s: org.opencv.core.Scalar);
				public constructor(...a: org.opencv.core.KeyPoint[]);
				public constructor(size: org.opencv.core.Size, type: number, s: org.opencv.core.Scalar);
				public constructor();
				public constructor(rows: number, cols: number, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer);
				public constructor(rows: number, cols: number, type: number, s: org.opencv.core.Scalar);
				public constructor(m: org.opencv.core.Mat, ranges: org.opencv.core.Range[]);
				public toArray(): org.opencv.core.KeyPoint[];
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range, colRange: org.opencv.core.Range);
				public fromArray(...a: org.opencv.core.KeyPoint[]): void;
				public toList(): java.util.List<org.opencv.core.KeyPoint>;
				public constructor(m: org.opencv.core.Mat, roi: org.opencv.core.Rect);
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range);
				public fromList(lkp: java.util.List<org.opencv.core.KeyPoint>): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfPoint extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfPoint>;
				public toList(): java.util.List<org.opencv.core.Point>;
				public constructor(sizes: number[], type: number);
				public static fromNativeAddr(addr: number): org.opencv.core.MatOfPoint;
				public constructor(m: org.opencv.core.Mat);
				public alloc(elemNumber: number): void;
				public constructor(addr: number);
				public constructor(size: org.opencv.core.Size, type: number);
				public fromList(lp: java.util.List<org.opencv.core.Point>): void;
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer, step: number);
				public constructor(sizes: number[], type: number, s: org.opencv.core.Scalar);
				public constructor(...a: org.opencv.core.Point[]);
				public constructor(size: org.opencv.core.Size, type: number, s: org.opencv.core.Scalar);
				public constructor();
				public constructor(rows: number, cols: number, type: number);
				public toArray(): org.opencv.core.Point[];
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer);
				public constructor(rows: number, cols: number, type: number, s: org.opencv.core.Scalar);
				public constructor(m: org.opencv.core.Mat, ranges: org.opencv.core.Range[]);
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range, colRange: org.opencv.core.Range);
				public constructor(m: org.opencv.core.Mat, roi: org.opencv.core.Rect);
				public fromArray(...a: org.opencv.core.Point[]): void;
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfPoint2f extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfPoint2f>;
				public static fromNativeAddr(addr: number): org.opencv.core.MatOfPoint2f;
				public toList(): java.util.List<org.opencv.core.Point>;
				public constructor(sizes: number[], type: number);
				public constructor(m: org.opencv.core.Mat);
				public alloc(elemNumber: number): void;
				public constructor(addr: number);
				public constructor(size: org.opencv.core.Size, type: number);
				public fromList(lp: java.util.List<org.opencv.core.Point>): void;
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer, step: number);
				public constructor(sizes: number[], type: number, s: org.opencv.core.Scalar);
				public constructor(...a: org.opencv.core.Point[]);
				public constructor(size: org.opencv.core.Size, type: number, s: org.opencv.core.Scalar);
				public constructor();
				public constructor(rows: number, cols: number, type: number);
				public toArray(): org.opencv.core.Point[];
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer);
				public constructor(rows: number, cols: number, type: number, s: org.opencv.core.Scalar);
				public constructor(m: org.opencv.core.Mat, ranges: org.opencv.core.Range[]);
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range, colRange: org.opencv.core.Range);
				public constructor(m: org.opencv.core.Mat, roi: org.opencv.core.Rect);
				public fromArray(...a: org.opencv.core.Point[]): void;
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfPoint3 extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfPoint3>;
				public constructor(sizes: number[], type: number);
				public constructor(m: org.opencv.core.Mat);
				public alloc(elemNumber: number): void;
				public constructor(addr: number);
				public constructor(size: org.opencv.core.Size, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer, step: number);
				public constructor(sizes: number[], type: number, s: org.opencv.core.Scalar);
				public toList(): java.util.List<org.opencv.core.Point3>;
				public toArray(): org.opencv.core.Point3[];
				public constructor(size: org.opencv.core.Size, type: number, s: org.opencv.core.Scalar);
				public fromArray(...a: org.opencv.core.Point3[]): void;
				public constructor();
				public constructor(rows: number, cols: number, type: number);
				public constructor(...a: org.opencv.core.Point3[]);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer);
				public constructor(rows: number, cols: number, type: number, s: org.opencv.core.Scalar);
				public constructor(m: org.opencv.core.Mat, ranges: org.opencv.core.Range[]);
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range, colRange: org.opencv.core.Range);
				public static fromNativeAddr(addr: number): org.opencv.core.MatOfPoint3;
				public constructor(m: org.opencv.core.Mat, roi: org.opencv.core.Rect);
				public fromList(lp: java.util.List<org.opencv.core.Point3>): void;
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfPoint3f extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfPoint3f>;
				public constructor(sizes: number[], type: number);
				public static fromNativeAddr(addr: number): org.opencv.core.MatOfPoint3f;
				public constructor(m: org.opencv.core.Mat);
				public alloc(elemNumber: number): void;
				public constructor(addr: number);
				public constructor(size: org.opencv.core.Size, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer, step: number);
				public constructor(sizes: number[], type: number, s: org.opencv.core.Scalar);
				public toList(): java.util.List<org.opencv.core.Point3>;
				public toArray(): org.opencv.core.Point3[];
				public constructor(size: org.opencv.core.Size, type: number, s: org.opencv.core.Scalar);
				public fromArray(...a: org.opencv.core.Point3[]): void;
				public constructor();
				public constructor(rows: number, cols: number, type: number);
				public constructor(...a: org.opencv.core.Point3[]);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer);
				public constructor(rows: number, cols: number, type: number, s: org.opencv.core.Scalar);
				public constructor(m: org.opencv.core.Mat, ranges: org.opencv.core.Range[]);
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range, colRange: org.opencv.core.Range);
				public constructor(m: org.opencv.core.Mat, roi: org.opencv.core.Rect);
				public fromList(lp: java.util.List<org.opencv.core.Point3>): void;
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfRect extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfRect>;
				public constructor(sizes: number[], type: number);
				public toList(): java.util.List<org.opencv.core.Rect>;
				public fromList(lr: java.util.List<org.opencv.core.Rect>): void;
				public constructor(m: org.opencv.core.Mat);
				public alloc(elemNumber: number): void;
				public constructor(addr: number);
				public constructor(size: org.opencv.core.Size, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer, step: number);
				public constructor(sizes: number[], type: number, s: org.opencv.core.Scalar);
				public toArray(): org.opencv.core.Rect[];
				public constructor(size: org.opencv.core.Size, type: number, s: org.opencv.core.Scalar);
				public fromArray(...a: org.opencv.core.Rect[]): void;
				public constructor();
				public constructor(rows: number, cols: number, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer);
				public constructor(rows: number, cols: number, type: number, s: org.opencv.core.Scalar);
				public constructor(m: org.opencv.core.Mat, ranges: org.opencv.core.Range[]);
				public constructor(...a: org.opencv.core.Rect[]);
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range, colRange: org.opencv.core.Range);
				public static fromNativeAddr(addr: number): org.opencv.core.MatOfRect;
				public constructor(m: org.opencv.core.Mat, roi: org.opencv.core.Rect);
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfRect2d extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfRect2d>;
				public toList(): java.util.List<org.opencv.core.Rect2d>;
				public constructor(sizes: number[], type: number);
				public fromList(lr: java.util.List<org.opencv.core.Rect2d>): void;
				public constructor(m: org.opencv.core.Mat);
				public alloc(elemNumber: number): void;
				public constructor(addr: number);
				public constructor(size: org.opencv.core.Size, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer, step: number);
				public constructor(sizes: number[], type: number, s: org.opencv.core.Scalar);
				public fromArray(...a: org.opencv.core.Rect2d[]): void;
				public constructor(size: org.opencv.core.Size, type: number, s: org.opencv.core.Scalar);
				public constructor();
				public constructor(rows: number, cols: number, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer);
				public constructor(rows: number, cols: number, type: number, s: org.opencv.core.Scalar);
				public constructor(m: org.opencv.core.Mat, ranges: org.opencv.core.Range[]);
				public constructor(...a: org.opencv.core.Rect2d[]);
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range, colRange: org.opencv.core.Range);
				public constructor(m: org.opencv.core.Mat, roi: org.opencv.core.Rect);
				public toArray(): org.opencv.core.Rect2d[];
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range);
				public static fromNativeAddr(addr: number): org.opencv.core.MatOfRect2d;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfRotatedRect extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfRotatedRect>;
				public constructor(...a: org.opencv.core.RotatedRect[]);
				public toList(): java.util.List<org.opencv.core.RotatedRect>;
				public constructor(sizes: number[], type: number);
				public static fromNativeAddr(addr: number): org.opencv.core.MatOfRotatedRect;
				public constructor(m: org.opencv.core.Mat);
				public alloc(elemNumber: number): void;
				public toArray(): org.opencv.core.RotatedRect[];
				public constructor(addr: number);
				public constructor(size: org.opencv.core.Size, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer, step: number);
				public constructor(sizes: number[], type: number, s: org.opencv.core.Scalar);
				public constructor(size: org.opencv.core.Size, type: number, s: org.opencv.core.Scalar);
				public fromList(lr: java.util.List<org.opencv.core.RotatedRect>): void;
				public constructor();
				public constructor(rows: number, cols: number, type: number);
				public constructor(rows: number, cols: number, type: number, data: java.nio.ByteBuffer);
				public constructor(rows: number, cols: number, type: number, s: org.opencv.core.Scalar);
				public constructor(m: org.opencv.core.Mat, ranges: org.opencv.core.Range[]);
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range, colRange: org.opencv.core.Range);
				public constructor(m: org.opencv.core.Mat, roi: org.opencv.core.Rect);
				public fromArray(...a: org.opencv.core.RotatedRect[]): void;
				public constructor(m: org.opencv.core.Mat, rowRange: org.opencv.core.Range);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class Point extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.core.Point>;
				public x: number;
				public y: number;
				public equals(obj: any): boolean;
				public inside(r: org.opencv.core.Rect): boolean;
				public constructor(x: number, param1: number);
				public set(vals: number[]): void;
				public hashCode(): number;
				public clone(): org.opencv.core.Point;
				public constructor(vals: number[]);
				public clone(): any;
				public dot(p: org.opencv.core.Point): number;
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class Point3 extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.core.Point3>;
				public x: number;
				public y: number;
				public z: number;
				public constructor(x: number, param1: number, y: number);
				public equals(obj: any): boolean;
				public set(vals: number[]): void;
				public hashCode(): number;
				public constructor(p: org.opencv.core.Point);
				public constructor(vals: number[]);
				public clone(): any;
				public dot(p: org.opencv.core.Point3): number;
				public clone(): org.opencv.core.Point3;
				public toString(): string;
				public cross(p: org.opencv.core.Point3): org.opencv.core.Point3;
				public constructor();
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class Range extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.core.Range>;
				public start: number;
				public end: number;
				public intersection(r1: org.opencv.core.Range): org.opencv.core.Range;
				public constructor(vals: number[]);
				public shift(delta: number): org.opencv.core.Range;
				public toString(): string;
				public constructor();
				public size(): number;
				public equals(obj: any): boolean;
				public set(vals: number[]): void;
				public hashCode(): number;
				public clone(): any;
				public constructor(s: number, e: number);
				public static all(): org.opencv.core.Range;
				public clone(): org.opencv.core.Range;
				public empty(): boolean;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class Rect extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.core.Rect>;
				public x: number;
				public y: number;
				public width: number;
				public height: number;
				public clone(): org.opencv.core.Rect;
				public contains(p: org.opencv.core.Point): boolean;
				public constructor(vals: number[]);
				public constructor(x: number, y: number, width: number, height: number);
				public toString(): string;
				public br(): org.opencv.core.Point;
				public constructor();
				public constructor(p: org.opencv.core.Point, s: org.opencv.core.Size);
				public tl(): org.opencv.core.Point;
				public size(): org.opencv.core.Size;
				public area(): number;
				public equals(obj: any): boolean;
				public set(vals: number[]): void;
				public hashCode(): number;
				public clone(): any;
				public constructor(p1: org.opencv.core.Point, p2: org.opencv.core.Point);
				public empty(): boolean;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class Rect2d extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.core.Rect2d>;
				public x: number;
				public y: number;
				public width: number;
				public height: number;
				public contains(p: org.opencv.core.Point): boolean;
				public constructor(vals: number[]);
				public toString(): string;
				public br(): org.opencv.core.Point;
				public constructor();
				public constructor(p: org.opencv.core.Point, s: org.opencv.core.Size);
				public tl(): org.opencv.core.Point;
				public size(): org.opencv.core.Size;
				public area(): number;
				public equals(obj: any): boolean;
				public set(vals: number[]): void;
				public constructor(x: number, param1: number, y: number, param3: number);
				public hashCode(): number;
				public clone(): any;
				public clone(): org.opencv.core.Rect2d;
				public constructor(p1: org.opencv.core.Point, p2: org.opencv.core.Point);
				public empty(): boolean;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class RotatedRect extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.core.RotatedRect>;
				public center: org.opencv.core.Point;
				public size: org.opencv.core.Size;
				public angle: number;
				public boundingRect(): org.opencv.core.Rect;
				public equals(obj: any): boolean;
				public set(vals: number[]): void;
				public hashCode(): number;
				public constructor(vals: number[]);
				public clone(): any;
				public constructor(c: org.opencv.core.Point, s: org.opencv.core.Size, a: number);
				public toString(): string;
				public clone(): org.opencv.core.RotatedRect;
				public constructor();
				public points(pt: org.opencv.core.Point[]): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class Scalar extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.core.Scalar>;
				public val: number[];
				public constructor(v0: number, param1: number);
				public constructor(vals: number[]);
				public toString(): string;
				public isReal(): boolean;
				public equals(obj: any): boolean;
				public set(vals: number[]): void;
				public mul(it: org.opencv.core.Scalar): org.opencv.core.Scalar;
				public constructor(v0: number);
				public hashCode(): number;
				public clone(): any;
				public static all(v: number): org.opencv.core.Scalar;
				public constructor(v0: number, param1: number, v1: number);
				public conj(): org.opencv.core.Scalar;
				public clone(): org.opencv.core.Scalar;
				public constructor(v0: number, param1: number, v1: number, param3: number);
				public mul(it: org.opencv.core.Scalar, scale: number): org.opencv.core.Scalar;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class Size extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.core.Size>;
				public width: number;
				public height: number;
				public area(): number;
				public equals(obj: any): boolean;
				public constructor(width: number, param1: number);
				public set(vals: number[]): void;
				public hashCode(): number;
				public constructor(p: org.opencv.core.Point);
				public clone(): org.opencv.core.Size;
				public constructor(vals: number[]);
				public clone(): any;
				public toString(): string;
				public constructor();
				public empty(): boolean;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class TermCriteria extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.core.TermCriteria>;
				public static COUNT: number;
				public static MAX_ITER: number;
				public static EPS: number;
				public type: number;
				public maxCount: number;
				public epsilon: number;
				public equals(obj: any): boolean;
				public set(vals: number[]): void;
				public hashCode(): number;
				public constructor(vals: number[]);
				public clone(): any;
				public clone(): org.opencv.core.TermCriteria;
				public toString(): string;
				public constructor(type: number, maxCount: number, epsilon: number);
				public constructor();
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class TickMeter extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.core.TickMeter>;
				public nativeObj: number;
				public getTimeSec(): number;
				public constructor(addr: number);
				public getFPS(): number;
				public getAvgTimeSec(): number;
				public finalize(): void;
				public getNativeObjAddr(): number;
				public constructor();
				public getAvgTimeMilli(): number;
				public reset(): void;
				public static __fromPtr__(addr: number): org.opencv.core.TickMeter;
				public stop(): void;
				public getTimeMilli(): number;
				public start(): void;
				public getCounter(): number;
				public getTimeTicks(): number;
				public getTimeMicro(): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module dnn {
			export class ClassificationModel extends org.opencv.dnn.Model {
				public static class: java.lang.Class<org.opencv.dnn.ClassificationModel>;
				public static __fromPtr__(addr: number): org.opencv.dnn.ClassificationModel;
				public constructor(model: string, config: string);
				public getEnableSoftmaxPostProcessing(): boolean;
				public setEnableSoftmaxPostProcessing(enable: boolean): org.opencv.dnn.ClassificationModel;
				public constructor(addr: number);
				public classify(frame: org.opencv.core.Mat, classId: number[], conf: number[]): void;
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.dnn.Model;
				public constructor(model: string);
				public constructor(network: org.opencv.dnn.Net);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module dnn {
			export class DetectionModel extends org.opencv.dnn.Model {
				public static class: java.lang.Class<org.opencv.dnn.DetectionModel>;
				public static __fromPtr__(addr: number): org.opencv.dnn.DetectionModel;
				public constructor(model: string, config: string);
				public detect(frame: org.opencv.core.Mat, classIds: org.opencv.core.MatOfInt, confidences: org.opencv.core.MatOfFloat, boxes: org.opencv.core.MatOfRect): void;
				public constructor(addr: number);
				public setNmsAcrossClasses(value: boolean): org.opencv.dnn.DetectionModel;
				public getNmsAcrossClasses(): boolean;
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.dnn.Model;
				public constructor(model: string);
				public constructor(network: org.opencv.dnn.Net);
				public detect(frame: org.opencv.core.Mat, classIds: org.opencv.core.MatOfInt, confidences: org.opencv.core.MatOfFloat, boxes: org.opencv.core.MatOfRect, confThreshold: number, nmsThreshold: number): void;
				public detect(frame: org.opencv.core.Mat, classIds: org.opencv.core.MatOfInt, confidences: org.opencv.core.MatOfFloat, boxes: org.opencv.core.MatOfRect, confThreshold: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module dnn {
			export class DictValue extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.dnn.DictValue>;
				public nativeObj: number;
				public getIntValue(): number;
				public getStringValue(idx: number): string;
				public constructor(addr: number);
				public constructor(p: number);
				public finalize(): void;
				public getNativeObjAddr(): number;
				public getRealValue(idx: number): number;
				public getRealValue(): number;
				public constructor(i: number);
				public getStringValue(): string;
				public constructor(s: string);
				public isReal(): boolean;
				public getIntValue(idx: number): number;
				public static __fromPtr__(addr: number): org.opencv.dnn.DictValue;
				public isString(): boolean;
				public isInt(): boolean;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module dnn {
			export class Dnn extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.dnn.Dnn>;
				public static DNN_BACKEND_DEFAULT: number;
				public static DNN_BACKEND_HALIDE: number;
				public static DNN_BACKEND_INFERENCE_ENGINE: number;
				public static DNN_BACKEND_OPENCV: number;
				public static DNN_BACKEND_VKCOM: number;
				public static DNN_BACKEND_CUDA: number;
				public static DNN_BACKEND_WEBNN: number;
				public static DNN_BACKEND_TIMVX: number;
				public static DNN_BACKEND_CANN: number;
				public static DNN_LAYOUT_UNKNOWN: number;
				public static DNN_LAYOUT_ND: number;
				public static DNN_LAYOUT_NCHW: number;
				public static DNN_LAYOUT_NCDHW: number;
				public static DNN_LAYOUT_NHWC: number;
				public static DNN_LAYOUT_NDHWC: number;
				public static DNN_LAYOUT_PLANAR: number;
				public static DNN_PMODE_NULL: number;
				public static DNN_PMODE_CROP_CENTER: number;
				public static DNN_PMODE_LETTERBOX: number;
				public static SoftNMSMethod_SOFTNMS_LINEAR: number;
				public static SoftNMSMethod_SOFTNMS_GAUSSIAN: number;
				public static DNN_TARGET_CPU: number;
				public static DNN_TARGET_OPENCL: number;
				public static DNN_TARGET_OPENCL_FP16: number;
				public static DNN_TARGET_MYRIAD: number;
				public static DNN_TARGET_VULKAN: number;
				public static DNN_TARGET_FPGA: number;
				public static DNN_TARGET_CUDA: number;
				public static DNN_TARGET_CUDA_FP16: number;
				public static DNN_TARGET_HDDL: number;
				public static DNN_TARGET_NPU: number;
				public static DNN_TARGET_CPU_FP16: number;
				public static blobFromImage(image: org.opencv.core.Mat, scalefactor: number): org.opencv.core.Mat;
				public static readNetFromCaffe(bufferProto: org.opencv.core.MatOfByte): org.opencv.dnn.Net;
				public static readNet(framework: string, bufferModel: org.opencv.core.MatOfByte, bufferConfig: org.opencv.core.MatOfByte): org.opencv.dnn.Net;
				public static blobFromImages(images: java.util.List<org.opencv.core.Mat>, scalefactor: number, param2: org.opencv.core.Size, size: org.opencv.core.Scalar, mean: boolean, swapRB: boolean, crop: number): org.opencv.core.Mat;
				public static NMSBoxes(bboxes: org.opencv.core.MatOfRect2d, scores: org.opencv.core.MatOfFloat, score_threshold: number, nms_threshold: number, indices: org.opencv.core.MatOfInt, eta: number): void;
				public static blobFromImages(images: java.util.List<org.opencv.core.Mat>): org.opencv.core.Mat;
				public constructor();
				public static readNetFromDarknet(cfgFile: string): org.opencv.dnn.Net;
				public static NMSBoxesBatched(bboxes: org.opencv.core.MatOfRect2d, scores: org.opencv.core.MatOfFloat, class_ids: org.opencv.core.MatOfInt, score_threshold: number, nms_threshold: number, indices: org.opencv.core.MatOfInt, eta: number): void;
				public static blobFromImage(image: org.opencv.core.Mat, scalefactor: number, param2: org.opencv.core.Size, size: org.opencv.core.Scalar, mean: boolean, swapRB: boolean): org.opencv.core.Mat;
				public static readNetFromCaffe(prototxt: string, caffeModel: string): org.opencv.dnn.Net;
				public static readNetFromCaffe(bufferProto: org.opencv.core.MatOfByte, bufferModel: org.opencv.core.MatOfByte): org.opencv.dnn.Net;
				public static readNetFromTFLite(bufferModel: org.opencv.core.MatOfByte): org.opencv.dnn.Net;
				public static blobFromImages(images: java.util.List<org.opencv.core.Mat>, scalefactor: number): org.opencv.core.Mat;
				public static writeTextGraph(model: string, output: string): void;
				public static blobFromImages(images: java.util.List<org.opencv.core.Mat>, scalefactor: number, param2: org.opencv.core.Size): org.opencv.core.Mat;
				public static getInferenceEngineCPUType(): string;
				public static releaseHDDLPlugin(): void;
				public static readTensorFromONNX(path: string): org.opencv.core.Mat;
				public static readNetFromModelOptimizer(xml: string, bin: string): org.opencv.dnn.Net;
				public static NMSBoxesRotated(bboxes: org.opencv.core.MatOfRotatedRect, scores: org.opencv.core.MatOfFloat, score_threshold: number, nms_threshold: number, indices: org.opencv.core.MatOfInt, eta: number): void;
				public static readNetFromModelOptimizer(bufferModelConfig: org.opencv.core.MatOfByte, bufferWeights: org.opencv.core.MatOfByte): org.opencv.dnn.Net;
				public static readNet(model: string): org.opencv.dnn.Net;
				public static readTorchBlob(filename: string): org.opencv.core.Mat;
				public static blobFromImage(image: org.opencv.core.Mat, scalefactor: number, param2: org.opencv.core.Size, size: org.opencv.core.Scalar, mean: boolean, swapRB: boolean, crop: number): org.opencv.core.Mat;
				public static shrinkCaffeModel(src: string, dst: string, layersTypes: java.util.List<string>): void;
				public static NMSBoxesBatched(bboxes: org.opencv.core.MatOfRect2d, scores: org.opencv.core.MatOfFloat, class_ids: org.opencv.core.MatOfInt, score_threshold: number, nms_threshold: number, indices: org.opencv.core.MatOfInt): void;
				public static blobFromImagesWithParams(images: java.util.List<org.opencv.core.Mat>, param: org.opencv.dnn.Image2BlobParams): org.opencv.core.Mat;
				public static readNetFromDarknet(bufferCfg: org.opencv.core.MatOfByte, bufferModel: org.opencv.core.MatOfByte): org.opencv.dnn.Net;
				public static shrinkCaffeModel(src: string, dst: string): void;
				public static readNet(model: string, config: string, framework: string): org.opencv.dnn.Net;
				public static readNetFromTensorflow(model: string): org.opencv.dnn.Net;
				public static blobFromImages(images: java.util.List<org.opencv.core.Mat>, scalefactor: number, param2: org.opencv.core.Size, size: org.opencv.core.Scalar, mean: boolean): org.opencv.core.Mat;
				public static blobFromImages(images: java.util.List<org.opencv.core.Mat>, scalefactor: number, param2: org.opencv.core.Size, size: org.opencv.core.Scalar): org.opencv.core.Mat;
				/** @deprecated */
				public static getInferenceEngineBackendType(): string;
				public static readNetFromDarknet(cfgFile: string, darknetModel: string): org.opencv.dnn.Net;
				public static NMSBoxes(bboxes: org.opencv.core.MatOfRect2d, scores: org.opencv.core.MatOfFloat, score_threshold: number, nms_threshold: number, indices: org.opencv.core.MatOfInt, eta: number, top_k: number): void;
				public static readNetFromTensorflow(model: string, config: string): org.opencv.dnn.Net;
				public static readNetFromTorch(model: string, isBinary: boolean, evaluate: boolean): org.opencv.dnn.Net;
				public static blobFromImageWithParams(image: org.opencv.core.Mat, param: org.opencv.dnn.Image2BlobParams): org.opencv.core.Mat;
				public static blobFromImageWithParams(image: org.opencv.core.Mat): org.opencv.core.Mat;
				public static softNMSBoxes(bboxes: org.opencv.core.MatOfRect, scores: org.opencv.core.MatOfFloat, updated_scores: org.opencv.core.MatOfFloat, score_threshold: number, nms_threshold: number, indices: org.opencv.core.MatOfInt, top_k: number): void;
				public static readNetFromONNX(onnxFile: string): org.opencv.dnn.Net;
				public static blobFromImage(image: org.opencv.core.Mat): org.opencv.core.Mat;
				public static softNMSBoxes(bboxes: org.opencv.core.MatOfRect, scores: org.opencv.core.MatOfFloat, updated_scores: org.opencv.core.MatOfFloat, score_threshold: number, nms_threshold: number, indices: org.opencv.core.MatOfInt, top_k: number, param7: number): void;
				public static readNetFromONNX(buffer: org.opencv.core.MatOfByte): org.opencv.dnn.Net;
				public static getAvailableTargets(be: number): java.util.List<java.lang.Integer>;
				public static readNetFromTFLite(model: string): org.opencv.dnn.Net;
				public static readNet(framework: string, bufferModel: org.opencv.core.MatOfByte): org.opencv.dnn.Net;
				public static NMSBoxesRotated(bboxes: org.opencv.core.MatOfRotatedRect, scores: org.opencv.core.MatOfFloat, score_threshold: number, nms_threshold: number, indices: org.opencv.core.MatOfInt, eta: number, top_k: number): void;
				public static blobFromImage(image: org.opencv.core.Mat, scalefactor: number, param2: org.opencv.core.Size, size: org.opencv.core.Scalar, mean: boolean): org.opencv.core.Mat;
				public static readNetFromDarknet(bufferCfg: org.opencv.core.MatOfByte): org.opencv.dnn.Net;
				public static blobFromImage(image: org.opencv.core.Mat, scalefactor: number, param2: org.opencv.core.Size): org.opencv.core.Mat;
				public static readNetFromCaffe(prototxt: string): org.opencv.dnn.Net;
				public static readNetFromTorch(model: string, isBinary: boolean): org.opencv.dnn.Net;
				public static NMSBoxesRotated(bboxes: org.opencv.core.MatOfRotatedRect, scores: org.opencv.core.MatOfFloat, score_threshold: number, nms_threshold: number, indices: org.opencv.core.MatOfInt): void;
				public static getInferenceEngineVPUType(): string;
				public static readTorchBlob(filename: string, isBinary: boolean): org.opencv.core.Mat;
				/** @deprecated */
				public static setInferenceEngineBackendType(newBackendType: string): string;
				public static blobFromImageWithParams(image: org.opencv.core.Mat, blob: org.opencv.core.Mat, param: org.opencv.dnn.Image2BlobParams): void;
				public static blobFromImageWithParams(image: org.opencv.core.Mat, blob: org.opencv.core.Mat): void;
				public static readNetFromTensorflow(bufferModel: org.opencv.core.MatOfByte, bufferConfig: org.opencv.core.MatOfByte): org.opencv.dnn.Net;
				public static blobFromImagesWithParams(images: java.util.List<org.opencv.core.Mat>): org.opencv.core.Mat;
				public static resetMyriadDevice(): void;
				public static imagesFromBlob(blob_: org.opencv.core.Mat, images_: java.util.List<org.opencv.core.Mat>): void;
				public static blobFromImagesWithParams(images: java.util.List<org.opencv.core.Mat>, blob: org.opencv.core.Mat): void;
				public static softNMSBoxes(bboxes: org.opencv.core.MatOfRect, scores: org.opencv.core.MatOfFloat, updated_scores: org.opencv.core.MatOfFloat, score_threshold: number, nms_threshold: number, indices: org.opencv.core.MatOfInt): void;
				public static blobFromImages(images: java.util.List<org.opencv.core.Mat>, scalefactor: number, param2: org.opencv.core.Size, size: org.opencv.core.Scalar, mean: boolean, swapRB: boolean): org.opencv.core.Mat;
				public static readNetFromTensorflow(bufferModel: org.opencv.core.MatOfByte): org.opencv.dnn.Net;
				public static readNet(model: string, config: string): org.opencv.dnn.Net;
				public static readNetFromTorch(model: string): org.opencv.dnn.Net;
				public static blobFromImage(image: org.opencv.core.Mat, scalefactor: number, param2: org.opencv.core.Size, size: org.opencv.core.Scalar): org.opencv.core.Mat;
				public static NMSBoxes(bboxes: org.opencv.core.MatOfRect2d, scores: org.opencv.core.MatOfFloat, score_threshold: number, nms_threshold: number, indices: org.opencv.core.MatOfInt): void;
				public static blobFromImagesWithParams(images: java.util.List<org.opencv.core.Mat>, blob: org.opencv.core.Mat, param: org.opencv.dnn.Image2BlobParams): void;
				public static NMSBoxesBatched(bboxes: org.opencv.core.MatOfRect2d, scores: org.opencv.core.MatOfFloat, class_ids: org.opencv.core.MatOfInt, score_threshold: number, nms_threshold: number, indices: org.opencv.core.MatOfInt, eta: number, top_k: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module dnn {
			export class Image2BlobParams extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.dnn.Image2BlobParams>;
				public nativeObj: number;
				public set_size(size: org.opencv.core.Size): void;
				public constructor(scalefactor: org.opencv.core.Scalar, size: org.opencv.core.Size, mean: org.opencv.core.Scalar);
				public constructor(scalefactor: org.opencv.core.Scalar, size: org.opencv.core.Size, mean: org.opencv.core.Scalar, swapRB: boolean, ddepth: number);
				public constructor(scalefactor: org.opencv.core.Scalar, size: org.opencv.core.Size);
				public set_ddepth(ddepth: number): void;
				public constructor(addr: number);
				public static __fromPtr__(addr: number): org.opencv.dnn.Image2BlobParams;
				public set_swapRB(swapRB: boolean): void;
				public finalize(): void;
				public getNativeObjAddr(): number;
				public constructor(scalefactor: org.opencv.core.Scalar, size: org.opencv.core.Size, mean: org.opencv.core.Scalar, swapRB: boolean);
				public get_scalefactor(): org.opencv.core.Scalar;
				public constructor();
				public constructor(scalefactor: org.opencv.core.Scalar);
				public get_mean(): org.opencv.core.Scalar;
				public set_mean(mean: org.opencv.core.Scalar): void;
				public get_ddepth(): number;
				public get_swapRB(): boolean;
				public set_scalefactor(scalefactor: org.opencv.core.Scalar): void;
				public get_size(): org.opencv.core.Size;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module dnn {
			export class KeypointsModel extends org.opencv.dnn.Model {
				public static class: java.lang.Class<org.opencv.dnn.KeypointsModel>;
				public static __fromPtr__(addr: number): org.opencv.dnn.KeypointsModel;
				public constructor(model: string, config: string);
				public estimate(frame: org.opencv.core.Mat): org.opencv.core.MatOfPoint2f;
				public constructor(addr: number);
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.dnn.Model;
				public estimate(frame: org.opencv.core.Mat, thresh: number): org.opencv.core.MatOfPoint2f;
				public constructor(model: string);
				public constructor(network: org.opencv.dnn.Net);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module dnn {
			export class Layer extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.dnn.Layer>;
				public outputNameToIndex(outputName: string): number;
				public constructor(addr: number);
				public get_name(): string;
				public finalize(): void;
				public get_blobs(): java.util.List<org.opencv.core.Mat>;
				/** @deprecated */
				public run(inputs: java.util.List<org.opencv.core.Mat>, outputs: java.util.List<org.opencv.core.Mat>, internals: java.util.List<org.opencv.core.Mat>): void;
				public set_blobs(blobs: java.util.List<org.opencv.core.Mat>): void;
				public static __fromPtr__(addr: number): org.opencv.dnn.Layer;
				public get_preferableTarget(): number;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public get_type(): string;
				public finalize(inputs: java.util.List<org.opencv.core.Mat>, outputs: java.util.List<org.opencv.core.Mat>): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module dnn {
			export class Model extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.dnn.Model>;
				public nativeObj: number;
				public setInputParams(scale: number, param1: org.opencv.core.Size): void;
				public setInputParams(): void;
				public setInputSwapRB(swapRB: boolean): org.opencv.dnn.Model;
				public setInputParams(scale: number, param1: org.opencv.core.Size, size: org.opencv.core.Scalar, mean: boolean): void;
				public constructor(addr: number);
				public finalize(): void;
				public getNativeObjAddr(): number;
				public setInputSize(width: number, height: number): org.opencv.dnn.Model;
				public static __fromPtr__(addr: number): org.opencv.dnn.Model;
				public constructor(model: string);
				public constructor(model: string, config: string);
				public setInputScale(scale: org.opencv.core.Scalar): org.opencv.dnn.Model;
				public predict(frame: org.opencv.core.Mat, outs: java.util.List<org.opencv.core.Mat>): void;
				public setInputCrop(crop: boolean): org.opencv.dnn.Model;
				public setInputParams(scale: number, param1: org.opencv.core.Size, size: org.opencv.core.Scalar, mean: boolean, swapRB: boolean): void;
				public setPreferableBackend(backendId: number): org.opencv.dnn.Model;
				public setInputParams(scale: number, param1: org.opencv.core.Size, size: org.opencv.core.Scalar): void;
				public setInputSize(size: org.opencv.core.Size): org.opencv.dnn.Model;
				public setInputMean(mean: org.opencv.core.Scalar): org.opencv.dnn.Model;
				public setInputParams(scale: number): void;
				public setPreferableTarget(targetId: number): org.opencv.dnn.Model;
				public constructor(network: org.opencv.dnn.Net);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module dnn {
			export class Net extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.dnn.Net>;
				public nativeObj: number;
				public getMemoryConsumption(layerId: number, netInputShape: org.opencv.core.MatOfInt, weights: number[], blobs: number[]): void;
				public setInputsNames(inputBlobNames: java.util.List<string>): void;
				public getInputDetails(scales: org.opencv.core.MatOfFloat, zeropoints: org.opencv.core.MatOfInt): void;
				public forward(outputBlobs: java.util.List<org.opencv.core.Mat>, outputName: string): void;
				public constructor();
				public static readFromModelOptimizer(bufferModelConfig: org.opencv.core.MatOfByte, bufferWeights: org.opencv.core.MatOfByte): org.opencv.dnn.Net;
				public forward(outputBlobs: java.util.List<org.opencv.core.Mat>): void;
				public getUnconnectedOutLayers(): org.opencv.core.MatOfInt;
				public getParam(layerName: string): org.opencv.core.Mat;
				public static readFromModelOptimizer(xml: string, bin: string): org.opencv.dnn.Net;
				public connect(outPin: string, inpPin: string): void;
				public getLayerTypes(layersTypes: java.util.List<string>): void;
				/** @deprecated */
				public getLayer(layerId: org.opencv.dnn.DictValue): org.opencv.dnn.Layer;
				public setHalideScheduler(scheduler: string): void;
				public getFLOPS(netInputShapes: java.util.List<org.opencv.core.MatOfInt>): number;
				public getMemoryConsumption(layerId: number, netInputShapes: java.util.List<org.opencv.core.MatOfInt>, weights: number[], blobs: number[]): void;
				public getLayer(layerId: number): org.opencv.dnn.Layer;
				public dump(): string;
				public forward(): org.opencv.core.Mat;
				public getParam(layer: number): org.opencv.core.Mat;
				public getLayerId(layer: string): number;
				public quantize(calibData: java.util.List<org.opencv.core.Mat>, inputsDtype: number, outputsDtype: number, perChannel: boolean): org.opencv.dnn.Net;
				public setPreferableBackend(backendId: number): void;
				public quantize(calibData: java.util.List<org.opencv.core.Mat>, inputsDtype: number, outputsDtype: number): org.opencv.dnn.Net;
				public setParam(layerName: string, numParam: number, blob: org.opencv.core.Mat): void;
				public getLayerNames(): java.util.List<string>;
				public getUnconnectedOutLayersNames(): java.util.List<string>;
				public setInput(blob: org.opencv.core.Mat): void;
				public getFLOPS(layerId: number, netInputShapes: java.util.List<org.opencv.core.MatOfInt>): number;
				public enableFusion(fusion: boolean): void;
				public finalize(): void;
				public forward(outputBlobs: java.util.List<org.opencv.core.Mat>, outBlobNames: java.util.List<string>): void;
				public enableWinograd(useWinograd: boolean): void;
				public forward(outputName: string): org.opencv.core.Mat;
				public getPerfProfile(timings: org.opencv.core.MatOfDouble): number;
				public setInput(blob: org.opencv.core.Mat, name: string): void;
				public getFLOPS(layerId: number, netInputShape: org.opencv.core.MatOfInt): number;
				public empty(): boolean;
				/** @deprecated */
				public getLayer(layerName: string): org.opencv.dnn.Layer;
				public constructor(addr: number);
				public setInput(blob: org.opencv.core.Mat, name: string, scalefactor: number): void;
				public getMemoryConsumption(netInputShape: org.opencv.core.MatOfInt, weights: number[], blobs: number[]): void;
				public getNativeObjAddr(): number;
				public setInputShape(inputName: string, shape: org.opencv.core.MatOfInt): void;
				public getFLOPS(netInputShape: org.opencv.core.MatOfInt): number;
				public getParam(layerName: string, numParam: number): org.opencv.core.Mat;
				public getOutputDetails(scales: org.opencv.core.MatOfFloat, zeropoints: org.opencv.core.MatOfInt): void;
				public setParam(layer: number, numParam: number, blob: org.opencv.core.Mat): void;
				public setPreferableTarget(targetId: number): void;
				public dumpToFile(path: string): void;
				public getParam(layer: number, numParam: number): org.opencv.core.Mat;
				public setInput(blob: org.opencv.core.Mat, name: string, scalefactor: number, param3: org.opencv.core.Scalar): void;
				public getLayersCount(layerType: string): number;
				public static __fromPtr__(addr: number): org.opencv.dnn.Net;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module dnn {
			export class SegmentationModel extends org.opencv.dnn.Model {
				public static class: java.lang.Class<org.opencv.dnn.SegmentationModel>;
				public static __fromPtr__(addr: number): org.opencv.dnn.SegmentationModel;
				public constructor(model: string, config: string);
				public constructor(addr: number);
				public segment(frame: org.opencv.core.Mat, mask: org.opencv.core.Mat): void;
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.dnn.Model;
				public constructor(model: string);
				public constructor(network: org.opencv.dnn.Net);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module dnn {
			export class TextDetectionModel extends org.opencv.dnn.Model {
				public static class: java.lang.Class<org.opencv.dnn.TextDetectionModel>;
				public detectTextRectangles(frame: org.opencv.core.Mat, detections: org.opencv.core.MatOfRotatedRect, confidences: org.opencv.core.MatOfFloat): void;
				public constructor(model: string, config: string);
				public detect(frame: org.opencv.core.Mat, detections: java.util.List<org.opencv.core.MatOfPoint>): void;
				public constructor(addr: number);
				public detect(frame: org.opencv.core.Mat, detections: java.util.List<org.opencv.core.MatOfPoint>, confidences: org.opencv.core.MatOfFloat): void;
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.dnn.Model;
				public static __fromPtr__(addr: number): org.opencv.dnn.TextDetectionModel;
				public constructor(model: string);
				public constructor(network: org.opencv.dnn.Net);
				public detectTextRectangles(frame: org.opencv.core.Mat, detections: org.opencv.core.MatOfRotatedRect): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module dnn {
			export class TextDetectionModel_DB extends org.opencv.dnn.TextDetectionModel {
				public static class: java.lang.Class<org.opencv.dnn.TextDetectionModel_DB>;
				public getBinaryThreshold(): number;
				public setPolygonThreshold(polygonThreshold: number): org.opencv.dnn.TextDetectionModel_DB;
				public setUnclipRatio(unclipRatio: number): org.opencv.dnn.TextDetectionModel_DB;
				public constructor(addr: number);
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.dnn.TextDetectionModel;
				public static __fromPtr__(addr: number): org.opencv.dnn.Model;
				public getPolygonThreshold(): number;
				public getUnclipRatio(): number;
				public getMaxCandidates(): number;
				public constructor(model: string);
				public constructor(model: string, config: string);
				public setBinaryThreshold(binaryThreshold: number): org.opencv.dnn.TextDetectionModel_DB;
				public static __fromPtr__(addr: number): org.opencv.dnn.TextDetectionModel_DB;
				public setMaxCandidates(maxCandidates: number): org.opencv.dnn.TextDetectionModel_DB;
				public constructor(network: org.opencv.dnn.Net);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module dnn {
			export class TextDetectionModel_EAST extends org.opencv.dnn.TextDetectionModel {
				public static class: java.lang.Class<org.opencv.dnn.TextDetectionModel_EAST>;
				public constructor(model: string, config: string);
				public setConfidenceThreshold(confThreshold: number): org.opencv.dnn.TextDetectionModel_EAST;
				public setNMSThreshold(nmsThreshold: number): org.opencv.dnn.TextDetectionModel_EAST;
				public constructor(addr: number);
				public getNMSThreshold(): number;
				public static __fromPtr__(addr: number): org.opencv.dnn.TextDetectionModel_EAST;
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.dnn.TextDetectionModel;
				public static __fromPtr__(addr: number): org.opencv.dnn.Model;
				public getConfidenceThreshold(): number;
				public constructor(model: string);
				public constructor(network: org.opencv.dnn.Net);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module dnn {
			export class TextRecognitionModel extends org.opencv.dnn.Model {
				public static class: java.lang.Class<org.opencv.dnn.TextRecognitionModel>;
				public recognize(frame: org.opencv.core.Mat, roiRects: java.util.List<org.opencv.core.Mat>, results: java.util.List<string>): void;
				public constructor(addr: number);
				public getVocabulary(): java.util.List<string>;
				public recognize(frame: org.opencv.core.Mat): string;
				public finalize(): void;
				public setDecodeOptsCTCPrefixBeamSearch(beamSize: number, vocPruneSize: number): org.opencv.dnn.TextRecognitionModel;
				public static __fromPtr__(addr: number): org.opencv.dnn.Model;
				public setDecodeType(decodeType: string): org.opencv.dnn.TextRecognitionModel;
				public constructor(model: string);
				public constructor(model: string, config: string);
				public static __fromPtr__(addr: number): org.opencv.dnn.TextRecognitionModel;
				public getDecodeType(): string;
				public setDecodeOptsCTCPrefixBeamSearch(beamSize: number): org.opencv.dnn.TextRecognitionModel;
				public constructor(network: org.opencv.dnn.Net);
				public setVocabulary(vocabulary: java.util.List<string>): org.opencv.dnn.TextRecognitionModel;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module engine {
			export class OpenCVEngineInterface extends java.lang.Object implements android.os.IInterface {
				public static class: java.lang.Class<org.opencv.engine.OpenCVEngineInterface>;
				/**
				 * Constructs a new instance of the org.opencv.engine.OpenCVEngineInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getEngineVersion(): number;
					getLibPathByVersion(param0: string): string;
					installVersion(param0: string): boolean;
					getLibraryList(param0: string): string;
					asBinder(): android.os.IBinder;
				});
				public constructor();
				public getEngineVersion(): number;
				public getLibPathByVersion(param0: string): string;
				public getLibraryList(param0: string): string;
				public asBinder(): android.os.IBinder;
				public installVersion(param0: string): boolean;
			}
			export module OpenCVEngineInterface {
				export class Default extends java.lang.Object implements org.opencv.engine.OpenCVEngineInterface {
					public static class: java.lang.Class<org.opencv.engine.OpenCVEngineInterface.Default>;
					public getLibraryList(param0: string): string;
					public getLibPathByVersion(version: string): string;
					public constructor();
					public installVersion(version: string): boolean;
					public getEngineVersion(): number;
					public getLibraryList(version: string): string;
					public getLibPathByVersion(param0: string): string;
					public asBinder(): android.os.IBinder;
					public installVersion(param0: string): boolean;
				}
				export abstract class Stub extends android.os.Binder implements org.opencv.engine.OpenCVEngineInterface {
					public static class: java.lang.Class<org.opencv.engine.OpenCVEngineInterface.Stub>;
					public dump(fd: java.io.FileDescriptor, fout: java.io.PrintWriter, args: string[]): void;
					public isBinderAlive(): boolean;
					public static getDefaultImpl(): org.opencv.engine.OpenCVEngineInterface;
					public static asInterface(obj: android.os.IBinder): org.opencv.engine.OpenCVEngineInterface;
					public installVersion(param0: string): boolean;
					public getLibraryList(param0: string): string;
					public dump(param0: java.io.FileDescriptor, param1: string[]): void;
					public linkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): void;
					public constructor();
					public transact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
					public getEngineVersion(): number;
					public getInterfaceDescriptor(): string;
					public unlinkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): boolean;
					public dumpAsync(param0: java.io.FileDescriptor, param1: string[]): void;
					public pingBinder(): boolean;
					public linkToDeath(param0: android.os.IBinder.DeathRecipient, param1: number): void;
					public dump(fd: java.io.FileDescriptor, args: string[]): void;
					public transact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
					public getLibPathByVersion(param0: string): string;
					public dumpAsync(fd: java.io.FileDescriptor, args: string[]): void;
					public unlinkToDeath(recipient: android.os.IBinder.DeathRecipient, flags: number): boolean;
					public static setDefaultImpl(impl: org.opencv.engine.OpenCVEngineInterface): boolean;
					public queryLocalInterface(descriptor: string): android.os.IInterface;
					public onTransact(code: number, data: android.os.Parcel, reply: android.os.Parcel, flags: number): boolean;
					public asBinder(): android.os.IBinder;
					public queryLocalInterface(param0: string): android.os.IInterface;
				}
				export module Stub {
					export class Proxy extends java.lang.Object implements org.opencv.engine.OpenCVEngineInterface {
						public static class: java.lang.Class<org.opencv.engine.OpenCVEngineInterface.Stub.Proxy>;
						public static sDefaultImpl: org.opencv.engine.OpenCVEngineInterface;
						public getLibPathByVersion(version: string): string;
						public getInterfaceDescriptor(): string;
						public installVersion(param0: string): boolean;
						public asBinder(): android.os.IBinder;
						public getLibraryList(version: string): string;
						public getLibraryList(param0: string): string;
						public installVersion(version: string): boolean;
						public getEngineVersion(): number;
						public getLibPathByVersion(param0: string): string;
					}
				}
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class AKAZE extends org.opencv.features2d.Feature2D {
				public static class: java.lang.Class<org.opencv.features2d.AKAZE>;
				public static DESCRIPTOR_KAZE_UPRIGHT: number;
				public static DESCRIPTOR_KAZE: number;
				public static DESCRIPTOR_MLDB_UPRIGHT: number;
				public static DESCRIPTOR_MLDB: number;
				public setThreshold(threshold: number): void;
				public setDescriptorSize(dsize: number): void;
				public getDescriptorChannels(): number;
				public getNOctaves(): number;
				public finalize(): void;
				public setDescriptorChannels(dch: number): void;
				public static create(descriptor_type: number, descriptor_size: number): org.opencv.features2d.AKAZE;
				public getDiffusivity(): number;
				public static create(descriptor_type: number): org.opencv.features2d.AKAZE;
				public static __fromPtr__(addr: number): org.opencv.features2d.Feature2D;
				public setDescriptorType(dtype: number): void;
				public static create(descriptor_type: number, descriptor_size: number, descriptor_channels: number, threshold: number, nOctaves: number, nOctaveLayers: number): org.opencv.features2d.AKAZE;
				public static create(): org.opencv.features2d.AKAZE;
				public static create(descriptor_type: number, descriptor_size: number, descriptor_channels: number): org.opencv.features2d.AKAZE;
				public static create(descriptor_type: number, descriptor_size: number, descriptor_channels: number, threshold: number, nOctaves: number, nOctaveLayers: number, diffusivity: number): org.opencv.features2d.AKAZE;
				public getDefaultName(): string;
				public setDiffusivity(diff: number): void;
				public constructor(addr: number);
				public getThreshold(): number;
				public setNOctaveLayers(octaveLayers: number): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public static create(descriptor_type: number, descriptor_size: number, descriptor_channels: number, threshold: number): org.opencv.features2d.AKAZE;
				public getDescriptorType(): number;
				public static __fromPtr__(addr: number): org.opencv.features2d.AKAZE;
				public getDescriptorSize(): number;
				public setNOctaves(octaves: number): void;
				public static create(descriptor_type: number, descriptor_size: number, descriptor_channels: number, threshold: number, nOctaves: number): org.opencv.features2d.AKAZE;
				public getNOctaveLayers(): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class AffineFeature extends org.opencv.features2d.Feature2D {
				public static class: java.lang.Class<org.opencv.features2d.AffineFeature>;
				public static create(backend: org.opencv.features2d.Feature2D, maxTilt: number, minTilt: number, tiltStep: number, rotateStepBase: number): org.opencv.features2d.AffineFeature;
				public getDefaultName(): string;
				public static create(backend: org.opencv.features2d.Feature2D): org.opencv.features2d.AffineFeature;
				public static create(backend: org.opencv.features2d.Feature2D, maxTilt: number, minTilt: number, tiltStep: number): org.opencv.features2d.AffineFeature;
				public constructor(addr: number);
				public static create(backend: org.opencv.features2d.Feature2D, maxTilt: number, minTilt: number): org.opencv.features2d.AffineFeature;
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public setViewParams(tilts: org.opencv.core.MatOfFloat, rolls: org.opencv.core.MatOfFloat): void;
				public static __fromPtr__(addr: number): org.opencv.features2d.Feature2D;
				public getViewParams(tilts: org.opencv.core.MatOfFloat, rolls: org.opencv.core.MatOfFloat): void;
				public static __fromPtr__(addr: number): org.opencv.features2d.AffineFeature;
				public static create(backend: org.opencv.features2d.Feature2D, maxTilt: number): org.opencv.features2d.AffineFeature;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class AgastFeatureDetector extends org.opencv.features2d.Feature2D {
				public static class: java.lang.Class<org.opencv.features2d.AgastFeatureDetector>;
				public static THRESHOLD: number;
				public static NONMAX_SUPPRESSION: number;
				public static AGAST_5_8: number;
				public static AGAST_7_12d: number;
				public static AGAST_7_12s: number;
				public static OAST_9_16: number;
				public setThreshold(threshold: number): void;
				public getDefaultName(): string;
				public static create(threshold: number, nonmaxSuppression: boolean, type: number): org.opencv.features2d.AgastFeatureDetector;
				public getNonmaxSuppression(): boolean;
				public static create(): org.opencv.features2d.AgastFeatureDetector;
				public getType(): number;
				public constructor(addr: number);
				public getThreshold(): number;
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public setType(type: number): void;
				public static __fromPtr__(addr: number): org.opencv.features2d.Feature2D;
				public static create(threshold: number): org.opencv.features2d.AgastFeatureDetector;
				public static __fromPtr__(addr: number): org.opencv.features2d.AgastFeatureDetector;
				public static create(threshold: number, nonmaxSuppression: boolean): org.opencv.features2d.AgastFeatureDetector;
				public setNonmaxSuppression(f: boolean): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class BFMatcher extends org.opencv.features2d.DescriptorMatcher {
				public static class: java.lang.Class<org.opencv.features2d.BFMatcher>;
				public constructor(addr: number);
				public finalize(): void;
				public constructor(normType: number);
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public static __fromPtr__(addr: number): org.opencv.features2d.DescriptorMatcher;
				public static create(descriptorMatcherType: string): org.opencv.features2d.DescriptorMatcher;
				public constructor(normType: number, crossCheck: boolean);
				public constructor();
				public static create(matcherType: number): org.opencv.features2d.DescriptorMatcher;
				public static create(normType: number): org.opencv.features2d.BFMatcher;
				public static create(): org.opencv.features2d.BFMatcher;
				public static __fromPtr__(addr: number): org.opencv.features2d.BFMatcher;
				public static create(normType: number, crossCheck: boolean): org.opencv.features2d.BFMatcher;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class BOWImgDescriptorExtractor extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.features2d.BOWImgDescriptorExtractor>;
				public nativeObj: number;
				public compute(image: org.opencv.core.Mat, keypoints: org.opencv.core.MatOfKeyPoint, imgDescriptor: org.opencv.core.Mat): void;
				public constructor(addr: number);
				public setVocabulary(vocabulary: org.opencv.core.Mat): void;
				public finalize(): void;
				public getNativeObjAddr(): number;
				public static __fromPtr__(addr: number): org.opencv.features2d.BOWImgDescriptorExtractor;
				public getVocabulary(): org.opencv.core.Mat;
				public descriptorSize(): number;
				public descriptorType(): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class BOWKMeansTrainer extends org.opencv.features2d.BOWTrainer {
				public static class: java.lang.Class<org.opencv.features2d.BOWKMeansTrainer>;
				public static __fromPtr__(addr: number): org.opencv.features2d.BOWTrainer;
				public cluster(descriptors: org.opencv.core.Mat): org.opencv.core.Mat;
				public constructor(addr: number);
				public constructor(clusterCount: number, termcrit: org.opencv.core.TermCriteria, attempts: number);
				public finalize(): void;
				public constructor(clusterCount: number);
				public constructor(clusterCount: number, termcrit: org.opencv.core.TermCriteria, attempts: number, flags: number);
				public static __fromPtr__(addr: number): org.opencv.features2d.BOWKMeansTrainer;
				public constructor(clusterCount: number, termcrit: org.opencv.core.TermCriteria);
				public cluster(): org.opencv.core.Mat;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class BOWTrainer extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.features2d.BOWTrainer>;
				public nativeObj: number;
				public static __fromPtr__(addr: number): org.opencv.features2d.BOWTrainer;
				public cluster(descriptors: org.opencv.core.Mat): org.opencv.core.Mat;
				public constructor(addr: number);
				public clear(): void;
				public finalize(): void;
				public getNativeObjAddr(): number;
				public add(descriptors: org.opencv.core.Mat): void;
				public getDescriptors(): java.util.List<org.opencv.core.Mat>;
				public descriptorsCount(): number;
				public cluster(): org.opencv.core.Mat;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class BRISK extends org.opencv.features2d.Feature2D {
				public static class: java.lang.Class<org.opencv.features2d.BRISK>;
				public getDefaultName(): string;
				public setThreshold(threshold: number): void;
				public static create(thresh: number, octaves: number, radiusList: org.opencv.core.MatOfFloat, numberList: org.opencv.core.MatOfInt): org.opencv.features2d.BRISK;
				public static create(thresh: number): org.opencv.features2d.BRISK;
				public setPatternScale(patternScale: number): void;
				public constructor(addr: number);
				public static create(thresh: number, octaves: number, patternScale: number): org.opencv.features2d.BRISK;
				public getThreshold(): number;
				public static create(radiusList: org.opencv.core.MatOfFloat, numberList: org.opencv.core.MatOfInt, dMax: number, dMin: number, indexChange: org.opencv.core.MatOfInt): org.opencv.features2d.BRISK;
				public static create(radiusList: org.opencv.core.MatOfFloat, numberList: org.opencv.core.MatOfInt, dMax: number, dMin: number): org.opencv.features2d.BRISK;
				public finalize(): void;
				public static create(thresh: number, octaves: number, radiusList: org.opencv.core.MatOfFloat, numberList: org.opencv.core.MatOfInt, dMax: number, dMin: number): org.opencv.features2d.BRISK;
				public static __fromPtr__(addr: number): org.opencv.features2d.BRISK;
				public static create(thresh: number, octaves: number, radiusList: org.opencv.core.MatOfFloat, numberList: org.opencv.core.MatOfInt, dMax: number): org.opencv.features2d.BRISK;
				public static create(thresh: number, octaves: number, radiusList: org.opencv.core.MatOfFloat, numberList: org.opencv.core.MatOfInt, dMax: number, dMin: number, indexChange: org.opencv.core.MatOfInt): org.opencv.features2d.BRISK;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public getOctaves(): number;
				public static __fromPtr__(addr: number): org.opencv.features2d.Feature2D;
				public static create(): org.opencv.features2d.BRISK;
				public getPatternScale(): number;
				public static create(radiusList: org.opencv.core.MatOfFloat, numberList: org.opencv.core.MatOfInt, dMax: number): org.opencv.features2d.BRISK;
				public setOctaves(octaves: number): void;
				public static create(thresh: number, octaves: number): org.opencv.features2d.BRISK;
				public static create(radiusList: org.opencv.core.MatOfFloat, numberList: org.opencv.core.MatOfInt): org.opencv.features2d.BRISK;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class DescriptorMatcher extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.features2d.DescriptorMatcher>;
				public static FLANNBASED: number;
				public static BRUTEFORCE: number;
				public static BRUTEFORCE_L1: number;
				public static BRUTEFORCE_HAMMING: number;
				public static BRUTEFORCE_HAMMINGLUT: number;
				public static BRUTEFORCE_SL2: number;
				public isMaskSupported(): boolean;
				public knnMatch(queryDescriptors: org.opencv.core.Mat, trainDescriptors: org.opencv.core.Mat, matches: java.util.List<org.opencv.core.MatOfDMatch>, k: number, mask: org.opencv.core.Mat, compactResult: boolean): void;
				public match(queryDescriptors: org.opencv.core.Mat, trainDescriptors: org.opencv.core.Mat, matches: org.opencv.core.MatOfDMatch, mask: org.opencv.core.Mat): void;
				public finalize(): void;
				public static create(descriptorMatcherType: string): org.opencv.features2d.DescriptorMatcher;
				public match(queryDescriptors: org.opencv.core.Mat, trainDescriptors: org.opencv.core.Mat, matches: org.opencv.core.MatOfDMatch): void;
				public clone(emptyTrainData: boolean): org.opencv.features2d.DescriptorMatcher;
				public knnMatch(queryDescriptors: org.opencv.core.Mat, matches: java.util.List<org.opencv.core.MatOfDMatch>, k: number): void;
				public static create(matcherType: number): org.opencv.features2d.DescriptorMatcher;
				public clear(): void;
				public clone(): any;
				public radiusMatch(queryDescriptors: org.opencv.core.Mat, trainDescriptors: org.opencv.core.Mat, matches: java.util.List<org.opencv.core.MatOfDMatch>, maxDistance: number, mask: org.opencv.core.Mat, compactResult: boolean): void;
				public getTrainDescriptors(): java.util.List<org.opencv.core.Mat>;
				public empty(): boolean;
				public knnMatch(queryDescriptors: org.opencv.core.Mat, matches: java.util.List<org.opencv.core.MatOfDMatch>, k: number, masks: java.util.List<org.opencv.core.Mat>): void;
				public match(queryDescriptors: org.opencv.core.Mat, matches: org.opencv.core.MatOfDMatch): void;
				public radiusMatch(queryDescriptors: org.opencv.core.Mat, trainDescriptors: org.opencv.core.Mat, matches: java.util.List<org.opencv.core.MatOfDMatch>, maxDistance: number, mask: org.opencv.core.Mat): void;
				public radiusMatch(queryDescriptors: org.opencv.core.Mat, trainDescriptors: org.opencv.core.Mat, matches: java.util.List<org.opencv.core.MatOfDMatch>, maxDistance: number): void;
				public constructor(addr: number);
				public add(descriptors: java.util.List<org.opencv.core.Mat>): void;
				public read(fileName: string): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public static __fromPtr__(addr: number): org.opencv.features2d.DescriptorMatcher;
				public clone(): org.opencv.features2d.DescriptorMatcher;
				public match(queryDescriptors: org.opencv.core.Mat, matches: org.opencv.core.MatOfDMatch, masks: java.util.List<org.opencv.core.Mat>): void;
				public radiusMatch(queryDescriptors: org.opencv.core.Mat, matches: java.util.List<org.opencv.core.MatOfDMatch>, maxDistance: number, masks: java.util.List<org.opencv.core.Mat>): void;
				public radiusMatch(queryDescriptors: org.opencv.core.Mat, matches: java.util.List<org.opencv.core.MatOfDMatch>, maxDistance: number): void;
				public knnMatch(queryDescriptors: org.opencv.core.Mat, matches: java.util.List<org.opencv.core.MatOfDMatch>, k: number, masks: java.util.List<org.opencv.core.Mat>, compactResult: boolean): void;
				public write(fileName: string): void;
				public train(): void;
				public radiusMatch(queryDescriptors: org.opencv.core.Mat, matches: java.util.List<org.opencv.core.MatOfDMatch>, maxDistance: number, masks: java.util.List<org.opencv.core.Mat>, compactResult: boolean): void;
				public knnMatch(queryDescriptors: org.opencv.core.Mat, trainDescriptors: org.opencv.core.Mat, matches: java.util.List<org.opencv.core.MatOfDMatch>, k: number): void;
				public knnMatch(queryDescriptors: org.opencv.core.Mat, trainDescriptors: org.opencv.core.Mat, matches: java.util.List<org.opencv.core.MatOfDMatch>, k: number, mask: org.opencv.core.Mat): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class FastFeatureDetector extends org.opencv.features2d.Feature2D {
				public static class: java.lang.Class<org.opencv.features2d.FastFeatureDetector>;
				public static THRESHOLD: number;
				public static NONMAX_SUPPRESSION: number;
				public static FAST_N: number;
				public static TYPE_5_8: number;
				public static TYPE_7_12: number;
				public static TYPE_9_16: number;
				public setThreshold(threshold: number): void;
				public getDefaultName(): string;
				public getNonmaxSuppression(): boolean;
				public getType(): number;
				public constructor(addr: number);
				public static create(): org.opencv.features2d.FastFeatureDetector;
				public getThreshold(): number;
				public static create(threshold: number): org.opencv.features2d.FastFeatureDetector;
				public finalize(): void;
				public static create(threshold: number, nonmaxSuppression: boolean): org.opencv.features2d.FastFeatureDetector;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public setType(type: number): void;
				public static __fromPtr__(addr: number): org.opencv.features2d.Feature2D;
				public static __fromPtr__(addr: number): org.opencv.features2d.FastFeatureDetector;
				public static create(threshold: number, nonmaxSuppression: boolean, type: number): org.opencv.features2d.FastFeatureDetector;
				public setNonmaxSuppression(f: boolean): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class Feature2D extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.features2d.Feature2D>;
				public getDefaultName(): string;
				public detect(images: java.util.List<org.opencv.core.Mat>, keypoints: java.util.List<org.opencv.core.MatOfKeyPoint>): void;
				public constructor(addr: number);
				public detect(image: org.opencv.core.Mat, keypoints: org.opencv.core.MatOfKeyPoint): void;
				public finalize(): void;
				public detect(images: java.util.List<org.opencv.core.Mat>, keypoints: java.util.List<org.opencv.core.MatOfKeyPoint>, masks: java.util.List<org.opencv.core.Mat>): void;
				public detectAndCompute(image: org.opencv.core.Mat, mask: org.opencv.core.Mat, keypoints: org.opencv.core.MatOfKeyPoint, descriptors: org.opencv.core.Mat, useProvidedKeypoints: boolean): void;
				public read(fileName: string): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public detect(image: org.opencv.core.Mat, keypoints: org.opencv.core.MatOfKeyPoint, mask: org.opencv.core.Mat): void;
				public static __fromPtr__(addr: number): org.opencv.features2d.Feature2D;
				public compute(images: java.util.List<org.opencv.core.Mat>, keypoints: java.util.List<org.opencv.core.MatOfKeyPoint>, descriptors: java.util.List<org.opencv.core.Mat>): void;
				public defaultNorm(): number;
				public write(fileName: string): void;
				public descriptorSize(): number;
				public compute(image: org.opencv.core.Mat, keypoints: org.opencv.core.MatOfKeyPoint, descriptors: org.opencv.core.Mat): void;
				public detectAndCompute(image: org.opencv.core.Mat, mask: org.opencv.core.Mat, keypoints: org.opencv.core.MatOfKeyPoint, descriptors: org.opencv.core.Mat): void;
				public descriptorType(): number;
				public empty(): boolean;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class Features2d extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.features2d.Features2d>;
				public static DrawMatchesFlags_DEFAULT: number;
				public static DrawMatchesFlags_DRAW_OVER_OUTIMG: number;
				public static DrawMatchesFlags_NOT_DRAW_SINGLE_POINTS: number;
				public static DrawMatchesFlags_DRAW_RICH_KEYPOINTS: number;
				public static drawMatches(img1: org.opencv.core.Mat, keypoints1: org.opencv.core.MatOfKeyPoint, img2: org.opencv.core.Mat, keypoints2: org.opencv.core.MatOfKeyPoint, matches1to2: org.opencv.core.MatOfDMatch, outImg: org.opencv.core.Mat, matchesThickness: number, matchColor: org.opencv.core.Scalar): void;
				public static drawKeypoints(image: org.opencv.core.Mat, keypoints: org.opencv.core.MatOfKeyPoint, outImage: org.opencv.core.Mat, color: org.opencv.core.Scalar, flags: number): void;
				public static drawMatches(img1: org.opencv.core.Mat, keypoints1: org.opencv.core.MatOfKeyPoint, img2: org.opencv.core.Mat, keypoints2: org.opencv.core.MatOfKeyPoint, matches1to2: org.opencv.core.MatOfDMatch, outImg: org.opencv.core.Mat, matchColor: org.opencv.core.Scalar, singlePointColor: org.opencv.core.Scalar, matchesMask: org.opencv.core.MatOfByte, flags: number): void;
				public static drawKeypoints(image: org.opencv.core.Mat, keypoints: org.opencv.core.MatOfKeyPoint, outImage: org.opencv.core.Mat): void;
				public static drawMatches(img1: org.opencv.core.Mat, keypoints1: org.opencv.core.MatOfKeyPoint, img2: org.opencv.core.Mat, keypoints2: org.opencv.core.MatOfKeyPoint, matches1to2: org.opencv.core.MatOfDMatch, outImg: org.opencv.core.Mat, matchColor: org.opencv.core.Scalar, singlePointColor: org.opencv.core.Scalar, matchesMask: org.opencv.core.MatOfByte): void;
				public static drawMatches(img1: org.opencv.core.Mat, keypoints1: org.opencv.core.MatOfKeyPoint, img2: org.opencv.core.Mat, keypoints2: org.opencv.core.MatOfKeyPoint, matches1to2: org.opencv.core.MatOfDMatch, outImg: org.opencv.core.Mat, matchesThickness: number): void;
				public static drawMatches(img1: org.opencv.core.Mat, keypoints1: org.opencv.core.MatOfKeyPoint, img2: org.opencv.core.Mat, keypoints2: org.opencv.core.MatOfKeyPoint, matches1to2: org.opencv.core.MatOfDMatch, outImg: org.opencv.core.Mat): void;
				public static drawMatchesKnn(img1: org.opencv.core.Mat, keypoints1: org.opencv.core.MatOfKeyPoint, img2: org.opencv.core.Mat, keypoints2: org.opencv.core.MatOfKeyPoint, matches1to2: java.util.List<org.opencv.core.MatOfDMatch>, outImg: org.opencv.core.Mat, matchColor: org.opencv.core.Scalar, singlePointColor: org.opencv.core.Scalar, matchesMask: java.util.List<org.opencv.core.MatOfByte>, flags: number): void;
				public static drawMatches(img1: org.opencv.core.Mat, keypoints1: org.opencv.core.MatOfKeyPoint, img2: org.opencv.core.Mat, keypoints2: org.opencv.core.MatOfKeyPoint, matches1to2: org.opencv.core.MatOfDMatch, outImg: org.opencv.core.Mat, matchesThickness: number, matchColor: org.opencv.core.Scalar, singlePointColor: org.opencv.core.Scalar, matchesMask: org.opencv.core.MatOfByte, flags: number): void;
				public static drawMatchesKnn(img1: org.opencv.core.Mat, keypoints1: org.opencv.core.MatOfKeyPoint, img2: org.opencv.core.Mat, keypoints2: org.opencv.core.MatOfKeyPoint, matches1to2: java.util.List<org.opencv.core.MatOfDMatch>, outImg: org.opencv.core.Mat): void;
				public static drawMatchesKnn(img1: org.opencv.core.Mat, keypoints1: org.opencv.core.MatOfKeyPoint, img2: org.opencv.core.Mat, keypoints2: org.opencv.core.MatOfKeyPoint, matches1to2: java.util.List<org.opencv.core.MatOfDMatch>, outImg: org.opencv.core.Mat, matchColor: org.opencv.core.Scalar, singlePointColor: org.opencv.core.Scalar): void;
				public static drawMatches(img1: org.opencv.core.Mat, keypoints1: org.opencv.core.MatOfKeyPoint, img2: org.opencv.core.Mat, keypoints2: org.opencv.core.MatOfKeyPoint, matches1to2: org.opencv.core.MatOfDMatch, outImg: org.opencv.core.Mat, matchColor: org.opencv.core.Scalar): void;
				public static drawMatches(img1: org.opencv.core.Mat, keypoints1: org.opencv.core.MatOfKeyPoint, img2: org.opencv.core.Mat, keypoints2: org.opencv.core.MatOfKeyPoint, matches1to2: org.opencv.core.MatOfDMatch, outImg: org.opencv.core.Mat, matchesThickness: number, matchColor: org.opencv.core.Scalar, singlePointColor: org.opencv.core.Scalar, matchesMask: org.opencv.core.MatOfByte): void;
				public static drawMatchesKnn(img1: org.opencv.core.Mat, keypoints1: org.opencv.core.MatOfKeyPoint, img2: org.opencv.core.Mat, keypoints2: org.opencv.core.MatOfKeyPoint, matches1to2: java.util.List<org.opencv.core.MatOfDMatch>, outImg: org.opencv.core.Mat, matchColor: org.opencv.core.Scalar): void;
				public constructor();
				public static drawMatches(img1: org.opencv.core.Mat, keypoints1: org.opencv.core.MatOfKeyPoint, img2: org.opencv.core.Mat, keypoints2: org.opencv.core.MatOfKeyPoint, matches1to2: org.opencv.core.MatOfDMatch, outImg: org.opencv.core.Mat, matchColor: org.opencv.core.Scalar, singlePointColor: org.opencv.core.Scalar): void;
				public static drawMatches(img1: org.opencv.core.Mat, keypoints1: org.opencv.core.MatOfKeyPoint, img2: org.opencv.core.Mat, keypoints2: org.opencv.core.MatOfKeyPoint, matches1to2: org.opencv.core.MatOfDMatch, outImg: org.opencv.core.Mat, matchesThickness: number, matchColor: org.opencv.core.Scalar, singlePointColor: org.opencv.core.Scalar): void;
				public static drawMatchesKnn(img1: org.opencv.core.Mat, keypoints1: org.opencv.core.MatOfKeyPoint, img2: org.opencv.core.Mat, keypoints2: org.opencv.core.MatOfKeyPoint, matches1to2: java.util.List<org.opencv.core.MatOfDMatch>, outImg: org.opencv.core.Mat, matchColor: org.opencv.core.Scalar, singlePointColor: org.opencv.core.Scalar, matchesMask: java.util.List<org.opencv.core.MatOfByte>): void;
				public static drawKeypoints(image: org.opencv.core.Mat, keypoints: org.opencv.core.MatOfKeyPoint, outImage: org.opencv.core.Mat, color: org.opencv.core.Scalar): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class FlannBasedMatcher extends org.opencv.features2d.DescriptorMatcher {
				public static class: java.lang.Class<org.opencv.features2d.FlannBasedMatcher>;
				public static create(matcherType: number): org.opencv.features2d.DescriptorMatcher;
				public static __fromPtr__(addr: number): org.opencv.features2d.FlannBasedMatcher;
				public static create(): org.opencv.features2d.FlannBasedMatcher;
				public constructor(addr: number);
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public static __fromPtr__(addr: number): org.opencv.features2d.DescriptorMatcher;
				public static create(descriptorMatcherType: string): org.opencv.features2d.DescriptorMatcher;
				public constructor();
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class GFTTDetector extends org.opencv.features2d.Feature2D {
				public static class: java.lang.Class<org.opencv.features2d.GFTTDetector>;
				public getK(): number;
				public static create(maxCorners: number): org.opencv.features2d.GFTTDetector;
				public static create(maxCorners: number, qualityLevel: number, param2: number, minDistance: number, param4: number, blockSize: boolean, gradiantSize: number): org.opencv.features2d.GFTTDetector;
				public static create(maxCorners: number, qualityLevel: number, param2: number, minDistance: number, param4: boolean, blockSize: number): org.opencv.features2d.GFTTDetector;
				public getGradientSize(): number;
				public setK(k: number): void;
				public finalize(): void;
				public setMinDistance(minDistance: number): void;
				public static create(): org.opencv.features2d.GFTTDetector;
				public static __fromPtr__(addr: number): org.opencv.features2d.Feature2D;
				public setGradientSize(gradientSize_: number): void;
				public static create(maxCorners: number, qualityLevel: number, param2: number, minDistance: number): org.opencv.features2d.GFTTDetector;
				public static create(maxCorners: number, qualityLevel: number, param2: number, minDistance: number, param4: number, blockSize: boolean): org.opencv.features2d.GFTTDetector;
				public setMaxFeatures(maxFeatures: number): void;
				public static create(maxCorners: number, qualityLevel: number, param2: number, minDistance: number, param4: boolean): org.opencv.features2d.GFTTDetector;
				public getMaxFeatures(): number;
				public getHarrisDetector(): boolean;
				public getQualityLevel(): number;
				public getDefaultName(): string;
				public static create(maxCorners: number, qualityLevel: number, param2: number, minDistance: number, param4: number): org.opencv.features2d.GFTTDetector;
				public constructor(addr: number);
				public static __fromPtr__(addr: number): org.opencv.features2d.GFTTDetector;
				public static create(maxCorners: number, qualityLevel: number, param2: number): org.opencv.features2d.GFTTDetector;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public setHarrisDetector(val: boolean): void;
				public getBlockSize(): number;
				public getMinDistance(): number;
				public setQualityLevel(qlevel: number): void;
				public static create(maxCorners: number, qualityLevel: number): org.opencv.features2d.GFTTDetector;
				public setBlockSize(blockSize: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class KAZE extends org.opencv.features2d.Feature2D {
				public static class: java.lang.Class<org.opencv.features2d.KAZE>;
				public static DIFF_PM_G1: number;
				public static DIFF_PM_G2: number;
				public static DIFF_WEICKERT: number;
				public static DIFF_CHARBONNIER: number;
				public setThreshold(threshold: number): void;
				public getNOctaves(): number;
				public static create(extended: boolean, upright: boolean, threshold: number, nOctaves: number, nOctaveLayers: number): org.opencv.features2d.KAZE;
				public finalize(): void;
				public getExtended(): boolean;
				public getDiffusivity(): number;
				public static create(extended: boolean): org.opencv.features2d.KAZE;
				public static create(extended: boolean, upright: boolean): org.opencv.features2d.KAZE;
				public static __fromPtr__(addr: number): org.opencv.features2d.Feature2D;
				public setUpright(upright: boolean): void;
				public setExtended(extended: boolean): void;
				public static create(extended: boolean, upright: boolean, threshold: number, nOctaves: number): org.opencv.features2d.KAZE;
				public getDefaultName(): string;
				public static create(extended: boolean, upright: boolean, threshold: number): org.opencv.features2d.KAZE;
				public setDiffusivity(diff: number): void;
				public constructor(addr: number);
				public getUpright(): boolean;
				public getThreshold(): number;
				public setNOctaveLayers(octaveLayers: number): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public static create(extended: boolean, upright: boolean, threshold: number, nOctaves: number, nOctaveLayers: number, diffusivity: number): org.opencv.features2d.KAZE;
				public static create(): org.opencv.features2d.KAZE;
				public setNOctaves(octaves: number): void;
				public getNOctaveLayers(): number;
				public static __fromPtr__(addr: number): org.opencv.features2d.KAZE;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class MSER extends org.opencv.features2d.Feature2D {
				public static class: java.lang.Class<org.opencv.features2d.MSER>;
				public static create(delta: number, min_area: number, max_area: number, max_variation: number, param4: number, min_diversity: number, param6: number): org.opencv.features2d.MSER;
				public getMinMargin(): number;
				public finalize(): void;
				public setMaxEvolution(maxEvolution: number): void;
				public setMaxArea(maxArea: number): void;
				public static __fromPtr__(addr: number): org.opencv.features2d.Feature2D;
				public static __fromPtr__(addr: number): org.opencv.features2d.MSER;
				public getPass2Only(): boolean;
				public setMinDiversity(minDiversity: number): void;
				public detectRegions(image: org.opencv.core.Mat, msers: java.util.List<org.opencv.core.MatOfPoint>, bboxes: org.opencv.core.MatOfRect): void;
				public static create(delta: number, min_area: number, max_area: number, max_variation: number): org.opencv.features2d.MSER;
				public static create(delta: number, min_area: number, max_area: number): org.opencv.features2d.MSER;
				public setMaxVariation(maxVariation: number): void;
				public getDelta(): number;
				public setAreaThreshold(areaThreshold: number): void;
				public static create(delta: number, min_area: number): org.opencv.features2d.MSER;
				public setEdgeBlurSize(edge_blur_size: number): void;
				public setPass2Only(f: boolean): void;
				public getDefaultName(): string;
				public setMinArea(minArea: number): void;
				public static create(delta: number, min_area: number, max_area: number, max_variation: number, param4: number, min_diversity: number, param6: number, max_evolution: number, area_threshold: number): org.opencv.features2d.MSER;
				public static create(): org.opencv.features2d.MSER;
				public constructor(addr: number);
				public setMinMargin(min_margin: number): void;
				public setDelta(delta: number): void;
				public getMinDiversity(): number;
				public getEdgeBlurSize(): number;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public static create(delta: number): org.opencv.features2d.MSER;
				public getMaxArea(): number;
				public static create(delta: number, min_area: number, max_area: number, max_variation: number, param4: number): org.opencv.features2d.MSER;
				public static create(delta: number, min_area: number, max_area: number, max_variation: number, param4: number, min_diversity: number, param6: number, max_evolution: number): org.opencv.features2d.MSER;
				public getAreaThreshold(): number;
				public static create(delta: number, min_area: number, max_area: number, max_variation: number, param4: number, min_diversity: number): org.opencv.features2d.MSER;
				public getMaxVariation(): number;
				public getMaxEvolution(): number;
				public getMinArea(): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class ORB extends org.opencv.features2d.Feature2D {
				public static class: java.lang.Class<org.opencv.features2d.ORB>;
				public static HARRIS_SCORE: number;
				public static FAST_SCORE: number;
				public static create(): org.opencv.features2d.ORB;
				public setScoreType(scoreType: number): void;
				public setNLevels(nlevels: number): void;
				public static create(nfeatures: number, scaleFactor: number, nlevels: number, edgeThreshold: number, firstLevel: number, WTA_K: number, scoreType: number): org.opencv.features2d.ORB;
				public finalize(): void;
				public getScoreType(): number;
				public static create(nfeatures: number, scaleFactor: number, nlevels: number, edgeThreshold: number, firstLevel: number, WTA_K: number): org.opencv.features2d.ORB;
				public getEdgeThreshold(): number;
				public getFastThreshold(): number;
				public static create(nfeatures: number, scaleFactor: number, nlevels: number, edgeThreshold: number, firstLevel: number, WTA_K: number, scoreType: number, patchSize: number): org.opencv.features2d.ORB;
				public setScaleFactor(scaleFactor: number): void;
				public static __fromPtr__(addr: number): org.opencv.features2d.Feature2D;
				public static create(nfeatures: number, scaleFactor: number): org.opencv.features2d.ORB;
				public getFirstLevel(): number;
				public setMaxFeatures(maxFeatures: number): void;
				public getWTA_K(): number;
				public getMaxFeatures(): number;
				public setFirstLevel(firstLevel: number): void;
				public getPatchSize(): number;
				public setPatchSize(patchSize: number): void;
				public setFastThreshold(fastThreshold: number): void;
				public getDefaultName(): string;
				public setWTA_K(wta_k: number): void;
				public static __fromPtr__(addr: number): org.opencv.features2d.ORB;
				public constructor(addr: number);
				public setEdgeThreshold(edgeThreshold: number): void;
				public static create(nfeatures: number, scaleFactor: number, nlevels: number, edgeThreshold: number, firstLevel: number): org.opencv.features2d.ORB;
				public static create(nfeatures: number): org.opencv.features2d.ORB;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public static create(nfeatures: number, scaleFactor: number, nlevels: number, edgeThreshold: number, firstLevel: number, WTA_K: number, scoreType: number, patchSize: number, fastThreshold: number): org.opencv.features2d.ORB;
				public getNLevels(): number;
				public static create(nfeatures: number, scaleFactor: number, nlevels: number): org.opencv.features2d.ORB;
				public getScaleFactor(): number;
				public static create(nfeatures: number, scaleFactor: number, nlevels: number, edgeThreshold: number): org.opencv.features2d.ORB;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class SIFT extends org.opencv.features2d.Feature2D {
				public static class: java.lang.Class<org.opencv.features2d.SIFT>;
				public static create(nfeatures: number, nOctaveLayers: number, contrastThreshold: number): org.opencv.features2d.SIFT;
				public finalize(): void;
				public static create(nfeatures: number, nOctaveLayers: number, contrastThreshold: number, param3: number, edgeThreshold: number, param5: number): org.opencv.features2d.SIFT;
				public getEdgeThreshold(): number;
				public static __fromPtr__(addr: number): org.opencv.features2d.Feature2D;
				public getContrastThreshold(): number;
				public static create(nfeatures: number): org.opencv.features2d.SIFT;
				public getSigma(): number;
				public setSigma(sigma: number): void;
				public static create(nfeatures: number, nOctaveLayers: number, contrastThreshold: number, param3: number, edgeThreshold: number): org.opencv.features2d.SIFT;
				public getNFeatures(): number;
				public getDefaultName(): string;
				public setContrastThreshold(contrastThreshold: number): void;
				public static create(nfeatures: number, nOctaveLayers: number, contrastThreshold: number, param3: number, edgeThreshold: number, param5: boolean): org.opencv.features2d.SIFT;
				public constructor(addr: number);
				public static create(nfeatures: number, nOctaveLayers: number): org.opencv.features2d.SIFT;
				public static create(): org.opencv.features2d.SIFT;
				public setEdgeThreshold(edgeThreshold: number): void;
				public setNFeatures(maxFeatures: number): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public setNOctaveLayers(nOctaveLayers: number): void;
				public static __fromPtr__(addr: number): org.opencv.features2d.SIFT;
				public static create(nfeatures: number, nOctaveLayers: number, contrastThreshold: number, param3: number, edgeThreshold: number, param5: number, sigma: boolean): org.opencv.features2d.SIFT;
				public static create(nfeatures: number, nOctaveLayers: number, contrastThreshold: number, param3: number): org.opencv.features2d.SIFT;
				public getNOctaveLayers(): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class SimpleBlobDetector extends org.opencv.features2d.Feature2D {
				public static class: java.lang.Class<org.opencv.features2d.SimpleBlobDetector>;
				public static __fromPtr__(addr: number): org.opencv.features2d.SimpleBlobDetector;
				public getDefaultName(): string;
				public static __fromPtr__(addr: number): org.opencv.features2d.Feature2D;
				public static create(parameters: org.opencv.features2d.SimpleBlobDetector_Params): org.opencv.features2d.SimpleBlobDetector;
				public getBlobContours(): java.util.List<org.opencv.core.MatOfPoint>;
				public static create(): org.opencv.features2d.SimpleBlobDetector;
				public constructor(addr: number);
				public finalize(): void;
				public getParams(): org.opencv.features2d.SimpleBlobDetector_Params;
				public setParams(params: org.opencv.features2d.SimpleBlobDetector_Params): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class SimpleBlobDetector_Params extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.features2d.SimpleBlobDetector_Params>;
				public nativeObj: number;
				public set_minDistBetweenBlobs(minDistBetweenBlobs: number): void;
				public get_filterByColor(): boolean;
				public set_thresholdStep(thresholdStep: number): void;
				public set_maxThreshold(maxThreshold: number): void;
				public set_filterByCircularity(filterByCircularity: boolean): void;
				public set_maxConvexity(maxConvexity: number): void;
				public set_minArea(minArea: number): void;
				public set_filterByArea(filterByArea: boolean): void;
				public get_maxInertiaRatio(): number;
				public set_maxInertiaRatio(maxInertiaRatio: number): void;
				public finalize(): void;
				public set_minRepeatability(minRepeatability: number): void;
				public get_maxThreshold(): number;
				public set_minConvexity(minConvexity: number): void;
				public set_minThreshold(minThreshold: number): void;
				public static __fromPtr__(addr: number): org.opencv.features2d.SimpleBlobDetector_Params;
				public set_filterByConvexity(filterByConvexity: boolean): void;
				public constructor();
				public get_collectContours(): boolean;
				public get_minConvexity(): number;
				public get_filterByArea(): boolean;
				public set_maxCircularity(maxCircularity: number): void;
				public set_filterByInertia(filterByInertia: boolean): void;
				public get_minRepeatability(): number;
				public get_maxConvexity(): number;
				public set_collectContours(collectContours: boolean): void;
				public constructor(addr: number);
				public get_minArea(): number;
				public get_minCircularity(): number;
				public getNativeObjAddr(): number;
				public get_filterByInertia(): boolean;
				public set_minInertiaRatio(minInertiaRatio: number): void;
				public get_minDistBetweenBlobs(): number;
				public get_thresholdStep(): number;
				public get_maxCircularity(): number;
				public get_filterByConvexity(): boolean;
				public set_minCircularity(minCircularity: number): void;
				public get_minThreshold(): number;
				public get_filterByCircularity(): boolean;
				public get_maxArea(): number;
				public set_maxArea(maxArea: number): void;
				public get_minInertiaRatio(): number;
				public set_filterByColor(filterByColor: boolean): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module imgcodecs {
			export class Imgcodecs extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.imgcodecs.Imgcodecs>;
				public static IMREAD_UNCHANGED: number;
				public static IMREAD_GRAYSCALE: number;
				public static IMREAD_COLOR: number;
				public static IMREAD_ANYDEPTH: number;
				public static IMREAD_ANYCOLOR: number;
				public static IMREAD_LOAD_GDAL: number;
				public static IMREAD_REDUCED_GRAYSCALE_2: number;
				public static IMREAD_REDUCED_COLOR_2: number;
				public static IMREAD_REDUCED_GRAYSCALE_4: number;
				public static IMREAD_REDUCED_COLOR_4: number;
				public static IMREAD_REDUCED_GRAYSCALE_8: number;
				public static IMREAD_REDUCED_COLOR_8: number;
				public static IMREAD_IGNORE_ORIENTATION: number;
				public static IMWRITE_EXR_COMPRESSION_NO: number;
				public static IMWRITE_EXR_COMPRESSION_RLE: number;
				public static IMWRITE_EXR_COMPRESSION_ZIPS: number;
				public static IMWRITE_EXR_COMPRESSION_ZIP: number;
				public static IMWRITE_EXR_COMPRESSION_PIZ: number;
				public static IMWRITE_EXR_COMPRESSION_PXR24: number;
				public static IMWRITE_EXR_COMPRESSION_B44: number;
				public static IMWRITE_EXR_COMPRESSION_B44A: number;
				public static IMWRITE_EXR_COMPRESSION_DWAA: number;
				public static IMWRITE_EXR_COMPRESSION_DWAB: number;
				public static IMWRITE_EXR_TYPE_HALF: number;
				public static IMWRITE_EXR_TYPE_FLOAT: number;
				public static IMWRITE_JPEG_QUALITY: number;
				public static IMWRITE_JPEG_PROGRESSIVE: number;
				public static IMWRITE_JPEG_OPTIMIZE: number;
				public static IMWRITE_JPEG_RST_INTERVAL: number;
				public static IMWRITE_JPEG_LUMA_QUALITY: number;
				public static IMWRITE_JPEG_CHROMA_QUALITY: number;
				public static IMWRITE_JPEG_SAMPLING_FACTOR: number;
				public static IMWRITE_PNG_COMPRESSION: number;
				public static IMWRITE_PNG_STRATEGY: number;
				public static IMWRITE_PNG_BILEVEL: number;
				public static IMWRITE_PXM_BINARY: number;
				public static IMWRITE_EXR_TYPE: number;
				public static IMWRITE_EXR_COMPRESSION: number;
				public static IMWRITE_EXR_DWA_COMPRESSION_LEVEL: number;
				public static IMWRITE_WEBP_QUALITY: number;
				public static IMWRITE_HDR_COMPRESSION: number;
				public static IMWRITE_PAM_TUPLETYPE: number;
				public static IMWRITE_TIFF_RESUNIT: number;
				public static IMWRITE_TIFF_XDPI: number;
				public static IMWRITE_TIFF_YDPI: number;
				public static IMWRITE_TIFF_COMPRESSION: number;
				public static IMWRITE_JPEG2000_COMPRESSION_X1000: number;
				public static IMWRITE_AVIF_QUALITY: number;
				public static IMWRITE_AVIF_DEPTH: number;
				public static IMWRITE_AVIF_SPEED: number;
				public static IMWRITE_HDR_COMPRESSION_NONE: number;
				public static IMWRITE_HDR_COMPRESSION_RLE: number;
				public static IMWRITE_JPEG_SAMPLING_FACTOR_411: number;
				public static IMWRITE_JPEG_SAMPLING_FACTOR_420: number;
				public static IMWRITE_JPEG_SAMPLING_FACTOR_422: number;
				public static IMWRITE_JPEG_SAMPLING_FACTOR_440: number;
				public static IMWRITE_JPEG_SAMPLING_FACTOR_444: number;
				public static IMWRITE_PAM_FORMAT_NULL: number;
				public static IMWRITE_PAM_FORMAT_BLACKANDWHITE: number;
				public static IMWRITE_PAM_FORMAT_GRAYSCALE: number;
				public static IMWRITE_PAM_FORMAT_GRAYSCALE_ALPHA: number;
				public static IMWRITE_PAM_FORMAT_RGB: number;
				public static IMWRITE_PAM_FORMAT_RGB_ALPHA: number;
				public static IMWRITE_PNG_STRATEGY_DEFAULT: number;
				public static IMWRITE_PNG_STRATEGY_FILTERED: number;
				public static IMWRITE_PNG_STRATEGY_HUFFMAN_ONLY: number;
				public static IMWRITE_PNG_STRATEGY_RLE: number;
				public static IMWRITE_PNG_STRATEGY_FIXED: number;
				public static imwrite(filename: string, img: org.opencv.core.Mat, params: org.opencv.core.MatOfInt): boolean;
				public static imdecodemulti(buf: org.opencv.core.Mat, flags: number, mats: java.util.List<org.opencv.core.Mat>): boolean;
				public static imread(filename: string): org.opencv.core.Mat;
				public static imdecode(buf: org.opencv.core.Mat, flags: number): org.opencv.core.Mat;
				public static haveImageWriter(filename: string): boolean;
				public static imreadmulti(filename: string, mats: java.util.List<org.opencv.core.Mat>, start: number, count: number, flags: number): boolean;
				public static imwritemulti(filename: string, img: java.util.List<org.opencv.core.Mat>): boolean;
				public constructor();
				public static imcount(filename: string, flags: number): number;
				public static imreadmulti(filename: string, mats: java.util.List<org.opencv.core.Mat>, flags: number): boolean;
				public static imreadmulti(filename: string, mats: java.util.List<org.opencv.core.Mat>, start: number, count: number): boolean;
				public static imencode(ext: string, img: org.opencv.core.Mat, buf: org.opencv.core.MatOfByte, params: org.opencv.core.MatOfInt): boolean;
				public static imread(filename: string, flags: number): org.opencv.core.Mat;
				public static imreadmulti(filename: string, mats: java.util.List<org.opencv.core.Mat>): boolean;
				public static imwrite(filename: string, img: org.opencv.core.Mat): boolean;
				public static imencode(ext: string, img: org.opencv.core.Mat, buf: org.opencv.core.MatOfByte): boolean;
				public static imwritemulti(filename: string, img: java.util.List<org.opencv.core.Mat>, params: org.opencv.core.MatOfInt): boolean;
				public static haveImageReader(filename: string): boolean;
				public static imcount(filename: string): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module imgproc {
			export class CLAHE extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.imgproc.CLAHE>;
				public static __fromPtr__(addr: number): org.opencv.imgproc.CLAHE;
				public apply(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public collectGarbage(): void;
				public constructor(addr: number);
				public getClipLimit(): number;
				public finalize(): void;
				public getTilesGridSize(): org.opencv.core.Size;
				public setClipLimit(clipLimit: number): void;
				public setTilesGridSize(tileGridSize: org.opencv.core.Size): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module imgproc {
			export class GeneralizedHough extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.imgproc.GeneralizedHough>;
				public getMinDist(): number;
				public setTemplate(templ: org.opencv.core.Mat, templCenter: org.opencv.core.Point): void;
				public getCannyLowThresh(): number;
				public setTemplate(edges: org.opencv.core.Mat, dx: org.opencv.core.Mat, dy: org.opencv.core.Mat, templCenter: org.opencv.core.Point): void;
				public constructor(addr: number);
				public setMinDist(minDist: number): void;
				public detect(edges: org.opencv.core.Mat, dx: org.opencv.core.Mat, dy: org.opencv.core.Mat, positions: org.opencv.core.Mat, votes: org.opencv.core.Mat): void;
				public finalize(): void;
				public setTemplate(edges: org.opencv.core.Mat, dx: org.opencv.core.Mat, dy: org.opencv.core.Mat): void;
				public setCannyLowThresh(cannyLowThresh: number): void;
				public setTemplate(templ: org.opencv.core.Mat): void;
				public static __fromPtr__(addr: number): org.opencv.imgproc.GeneralizedHough;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public getMaxBufferSize(): number;
				public setCannyHighThresh(cannyHighThresh: number): void;
				public setDp(dp: number): void;
				public getCannyHighThresh(): number;
				public detect(image: org.opencv.core.Mat, positions: org.opencv.core.Mat): void;
				public setMaxBufferSize(maxBufferSize: number): void;
				public detect(image: org.opencv.core.Mat, positions: org.opencv.core.Mat, votes: org.opencv.core.Mat): void;
				public detect(edges: org.opencv.core.Mat, dx: org.opencv.core.Mat, dy: org.opencv.core.Mat, positions: org.opencv.core.Mat): void;
				public getDp(): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module imgproc {
			export class GeneralizedHoughBallard extends org.opencv.imgproc.GeneralizedHough {
				public static class: java.lang.Class<org.opencv.imgproc.GeneralizedHoughBallard>;
				public static __fromPtr__(addr: number): org.opencv.imgproc.GeneralizedHoughBallard;
				public setVotesThreshold(votesThreshold: number): void;
				public constructor(addr: number);
				public setLevels(levels: number): void;
				public finalize(): void;
				public getVotesThreshold(): number;
				public static __fromPtr__(addr: number): org.opencv.imgproc.GeneralizedHough;
				public getLevels(): number;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module imgproc {
			export class GeneralizedHoughGuil extends org.opencv.imgproc.GeneralizedHough {
				public static class: java.lang.Class<org.opencv.imgproc.GeneralizedHoughGuil>;
				public getAngleThresh(): number;
				public getMinScale(): number;
				public finalize(): void;
				public getMaxScale(): number;
				public getLevels(): number;
				public setPosThresh(posThresh: number): void;
				public getMinAngle(): number;
				public setAngleStep(angleStep: number): void;
				public getPosThresh(): number;
				public getScaleThresh(): number;
				public setMinScale(minScale: number): void;
				public getAngleStep(): number;
				public constructor(addr: number);
				public getScaleStep(): number;
				public getXi(): number;
				public setLevels(levels: number): void;
				public setAngleEpsilon(angleEpsilon: number): void;
				public static __fromPtr__(addr: number): org.opencv.imgproc.GeneralizedHough;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public setMinAngle(minAngle: number): void;
				public setMaxScale(maxScale: number): void;
				public setMaxAngle(maxAngle: number): void;
				public setAngleThresh(angleThresh: number): void;
				public getMaxAngle(): number;
				public setScaleThresh(scaleThresh: number): void;
				public setXi(xi: number): void;
				public static __fromPtr__(addr: number): org.opencv.imgproc.GeneralizedHoughGuil;
				public getAngleEpsilon(): number;
				public setScaleStep(scaleStep: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module imgproc {
			export class Imgproc extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.imgproc.Imgproc>;
				public static CV_GAUSSIAN_5x5: number;
				public static CV_SCHARR: number;
				public static CV_MAX_SOBEL_KSIZE: number;
				public static CV_RGBA2mRGBA: number;
				public static CV_mRGBA2RGBA: number;
				public static CV_WARP_FILL_OUTLIERS: number;
				public static CV_WARP_INVERSE_MAP: number;
				public static CV_CHAIN_CODE: number;
				public static CV_LINK_RUNS: number;
				public static CV_POLY_APPROX_DP: number;
				public static CV_CONTOURS_MATCH_I1: number;
				public static CV_CONTOURS_MATCH_I2: number;
				public static CV_CONTOURS_MATCH_I3: number;
				public static CV_CLOCKWISE: number;
				public static CV_COUNTER_CLOCKWISE: number;
				public static CV_COMP_CORREL: number;
				public static CV_COMP_CHISQR: number;
				public static CV_COMP_INTERSECT: number;
				public static CV_COMP_BHATTACHARYYA: number;
				public static CV_COMP_HELLINGER: number;
				public static CV_COMP_CHISQR_ALT: number;
				public static CV_COMP_KL_DIV: number;
				public static CV_DIST_MASK_3: number;
				public static CV_DIST_MASK_5: number;
				public static CV_DIST_MASK_PRECISE: number;
				public static CV_DIST_LABEL_CCOMP: number;
				public static CV_DIST_LABEL_PIXEL: number;
				public static CV_DIST_USER: number;
				public static CV_DIST_L1: number;
				public static CV_DIST_L2: number;
				public static CV_DIST_C: number;
				public static CV_DIST_L12: number;
				public static CV_DIST_FAIR: number;
				public static CV_DIST_WELSCH: number;
				public static CV_DIST_HUBER: number;
				public static CV_CANNY_L2_GRADIENT: number;
				public static CV_HOUGH_STANDARD: number;
				public static CV_HOUGH_PROBABILISTIC: number;
				public static CV_HOUGH_MULTI_SCALE: number;
				public static CV_HOUGH_GRADIENT: number;
				public static CV_SHAPE_RECT: number;
				public static CV_SHAPE_CROSS: number;
				public static CV_SHAPE_ELLIPSE: number;
				public static CV_SHAPE_CUSTOM: number;
				public static CV_BLUR_NO_SCALE: number;
				public static CV_BLUR: number;
				public static CV_GAUSSIAN: number;
				public static CV_MEDIAN: number;
				public static CV_BILATERAL: number;
				public static ADAPTIVE_THRESH_MEAN_C: number;
				public static ADAPTIVE_THRESH_GAUSSIAN_C: number;
				public static COLOR_BGR2BGRA: number;
				public static COLOR_RGB2RGBA: number;
				public static COLOR_BGRA2BGR: number;
				public static COLOR_RGBA2RGB: number;
				public static COLOR_BGR2RGBA: number;
				public static COLOR_RGB2BGRA: number;
				public static COLOR_RGBA2BGR: number;
				public static COLOR_BGRA2RGB: number;
				public static COLOR_BGR2RGB: number;
				public static COLOR_RGB2BGR: number;
				public static COLOR_BGRA2RGBA: number;
				public static COLOR_RGBA2BGRA: number;
				public static COLOR_BGR2GRAY: number;
				public static COLOR_RGB2GRAY: number;
				public static COLOR_GRAY2BGR: number;
				public static COLOR_GRAY2RGB: number;
				public static COLOR_GRAY2BGRA: number;
				public static COLOR_GRAY2RGBA: number;
				public static COLOR_BGRA2GRAY: number;
				public static COLOR_RGBA2GRAY: number;
				public static COLOR_BGR2BGR565: number;
				public static COLOR_RGB2BGR565: number;
				public static COLOR_BGR5652BGR: number;
				public static COLOR_BGR5652RGB: number;
				public static COLOR_BGRA2BGR565: number;
				public static COLOR_RGBA2BGR565: number;
				public static COLOR_BGR5652BGRA: number;
				public static COLOR_BGR5652RGBA: number;
				public static COLOR_GRAY2BGR565: number;
				public static COLOR_BGR5652GRAY: number;
				public static COLOR_BGR2BGR555: number;
				public static COLOR_RGB2BGR555: number;
				public static COLOR_BGR5552BGR: number;
				public static COLOR_BGR5552RGB: number;
				public static COLOR_BGRA2BGR555: number;
				public static COLOR_RGBA2BGR555: number;
				public static COLOR_BGR5552BGRA: number;
				public static COLOR_BGR5552RGBA: number;
				public static COLOR_GRAY2BGR555: number;
				public static COLOR_BGR5552GRAY: number;
				public static COLOR_BGR2XYZ: number;
				public static COLOR_RGB2XYZ: number;
				public static COLOR_XYZ2BGR: number;
				public static COLOR_XYZ2RGB: number;
				public static COLOR_BGR2YCrCb: number;
				public static COLOR_RGB2YCrCb: number;
				public static COLOR_YCrCb2BGR: number;
				public static COLOR_YCrCb2RGB: number;
				public static COLOR_BGR2HSV: number;
				public static COLOR_RGB2HSV: number;
				public static COLOR_BGR2Lab: number;
				public static COLOR_RGB2Lab: number;
				public static COLOR_BGR2Luv: number;
				public static COLOR_RGB2Luv: number;
				public static COLOR_BGR2HLS: number;
				public static COLOR_RGB2HLS: number;
				public static COLOR_HSV2BGR: number;
				public static COLOR_HSV2RGB: number;
				public static COLOR_Lab2BGR: number;
				public static COLOR_Lab2RGB: number;
				public static COLOR_Luv2BGR: number;
				public static COLOR_Luv2RGB: number;
				public static COLOR_HLS2BGR: number;
				public static COLOR_HLS2RGB: number;
				public static COLOR_BGR2HSV_FULL: number;
				public static COLOR_RGB2HSV_FULL: number;
				public static COLOR_BGR2HLS_FULL: number;
				public static COLOR_RGB2HLS_FULL: number;
				public static COLOR_HSV2BGR_FULL: number;
				public static COLOR_HSV2RGB_FULL: number;
				public static COLOR_HLS2BGR_FULL: number;
				public static COLOR_HLS2RGB_FULL: number;
				public static COLOR_LBGR2Lab: number;
				public static COLOR_LRGB2Lab: number;
				public static COLOR_LBGR2Luv: number;
				public static COLOR_LRGB2Luv: number;
				public static COLOR_Lab2LBGR: number;
				public static COLOR_Lab2LRGB: number;
				public static COLOR_Luv2LBGR: number;
				public static COLOR_Luv2LRGB: number;
				public static COLOR_BGR2YUV: number;
				public static COLOR_RGB2YUV: number;
				public static COLOR_YUV2BGR: number;
				public static COLOR_YUV2RGB: number;
				public static COLOR_YUV2RGB_NV12: number;
				public static COLOR_YUV2BGR_NV12: number;
				public static COLOR_YUV2RGB_NV21: number;
				public static COLOR_YUV2BGR_NV21: number;
				public static COLOR_YUV420sp2RGB: number;
				public static COLOR_YUV420sp2BGR: number;
				public static COLOR_YUV2RGBA_NV12: number;
				public static COLOR_YUV2BGRA_NV12: number;
				public static COLOR_YUV2RGBA_NV21: number;
				public static COLOR_YUV2BGRA_NV21: number;
				public static COLOR_YUV420sp2RGBA: number;
				public static COLOR_YUV420sp2BGRA: number;
				public static COLOR_YUV2RGB_YV12: number;
				public static COLOR_YUV2BGR_YV12: number;
				public static COLOR_YUV2RGB_IYUV: number;
				public static COLOR_YUV2BGR_IYUV: number;
				public static COLOR_YUV2RGB_I420: number;
				public static COLOR_YUV2BGR_I420: number;
				public static COLOR_YUV420p2RGB: number;
				public static COLOR_YUV420p2BGR: number;
				public static COLOR_YUV2RGBA_YV12: number;
				public static COLOR_YUV2BGRA_YV12: number;
				public static COLOR_YUV2RGBA_IYUV: number;
				public static COLOR_YUV2BGRA_IYUV: number;
				public static COLOR_YUV2RGBA_I420: number;
				public static COLOR_YUV2BGRA_I420: number;
				public static COLOR_YUV420p2RGBA: number;
				public static COLOR_YUV420p2BGRA: number;
				public static COLOR_YUV2GRAY_420: number;
				public static COLOR_YUV2GRAY_NV21: number;
				public static COLOR_YUV2GRAY_NV12: number;
				public static COLOR_YUV2GRAY_YV12: number;
				public static COLOR_YUV2GRAY_IYUV: number;
				public static COLOR_YUV2GRAY_I420: number;
				public static COLOR_YUV420sp2GRAY: number;
				public static COLOR_YUV420p2GRAY: number;
				public static COLOR_YUV2RGB_UYVY: number;
				public static COLOR_YUV2BGR_UYVY: number;
				public static COLOR_YUV2RGB_Y422: number;
				public static COLOR_YUV2BGR_Y422: number;
				public static COLOR_YUV2RGB_UYNV: number;
				public static COLOR_YUV2BGR_UYNV: number;
				public static COLOR_YUV2RGBA_UYVY: number;
				public static COLOR_YUV2BGRA_UYVY: number;
				public static COLOR_YUV2RGBA_Y422: number;
				public static COLOR_YUV2BGRA_Y422: number;
				public static COLOR_YUV2RGBA_UYNV: number;
				public static COLOR_YUV2BGRA_UYNV: number;
				public static COLOR_YUV2RGB_YUY2: number;
				public static COLOR_YUV2BGR_YUY2: number;
				public static COLOR_YUV2RGB_YVYU: number;
				public static COLOR_YUV2BGR_YVYU: number;
				public static COLOR_YUV2RGB_YUYV: number;
				public static COLOR_YUV2BGR_YUYV: number;
				public static COLOR_YUV2RGB_YUNV: number;
				public static COLOR_YUV2BGR_YUNV: number;
				public static COLOR_YUV2RGBA_YUY2: number;
				public static COLOR_YUV2BGRA_YUY2: number;
				public static COLOR_YUV2RGBA_YVYU: number;
				public static COLOR_YUV2BGRA_YVYU: number;
				public static COLOR_YUV2RGBA_YUYV: number;
				public static COLOR_YUV2BGRA_YUYV: number;
				public static COLOR_YUV2RGBA_YUNV: number;
				public static COLOR_YUV2BGRA_YUNV: number;
				public static COLOR_YUV2GRAY_UYVY: number;
				public static COLOR_YUV2GRAY_YUY2: number;
				public static COLOR_YUV2GRAY_Y422: number;
				public static COLOR_YUV2GRAY_UYNV: number;
				public static COLOR_YUV2GRAY_YVYU: number;
				public static COLOR_YUV2GRAY_YUYV: number;
				public static COLOR_YUV2GRAY_YUNV: number;
				public static COLOR_RGBA2mRGBA: number;
				public static COLOR_mRGBA2RGBA: number;
				public static COLOR_RGB2YUV_I420: number;
				public static COLOR_BGR2YUV_I420: number;
				public static COLOR_RGB2YUV_IYUV: number;
				public static COLOR_BGR2YUV_IYUV: number;
				public static COLOR_RGBA2YUV_I420: number;
				public static COLOR_BGRA2YUV_I420: number;
				public static COLOR_RGBA2YUV_IYUV: number;
				public static COLOR_BGRA2YUV_IYUV: number;
				public static COLOR_RGB2YUV_YV12: number;
				public static COLOR_BGR2YUV_YV12: number;
				public static COLOR_RGBA2YUV_YV12: number;
				public static COLOR_BGRA2YUV_YV12: number;
				public static COLOR_BayerBG2BGR: number;
				public static COLOR_BayerGB2BGR: number;
				public static COLOR_BayerRG2BGR: number;
				public static COLOR_BayerGR2BGR: number;
				public static COLOR_BayerRGGB2BGR: number;
				public static COLOR_BayerGRBG2BGR: number;
				public static COLOR_BayerBGGR2BGR: number;
				public static COLOR_BayerGBRG2BGR: number;
				public static COLOR_BayerRGGB2RGB: number;
				public static COLOR_BayerGRBG2RGB: number;
				public static COLOR_BayerBGGR2RGB: number;
				public static COLOR_BayerGBRG2RGB: number;
				public static COLOR_BayerBG2RGB: number;
				public static COLOR_BayerGB2RGB: number;
				public static COLOR_BayerRG2RGB: number;
				public static COLOR_BayerGR2RGB: number;
				public static COLOR_BayerBG2GRAY: number;
				public static COLOR_BayerGB2GRAY: number;
				public static COLOR_BayerRG2GRAY: number;
				public static COLOR_BayerGR2GRAY: number;
				public static COLOR_BayerRGGB2GRAY: number;
				public static COLOR_BayerGRBG2GRAY: number;
				public static COLOR_BayerBGGR2GRAY: number;
				public static COLOR_BayerGBRG2GRAY: number;
				public static COLOR_BayerBG2BGR_VNG: number;
				public static COLOR_BayerGB2BGR_VNG: number;
				public static COLOR_BayerRG2BGR_VNG: number;
				public static COLOR_BayerGR2BGR_VNG: number;
				public static COLOR_BayerRGGB2BGR_VNG: number;
				public static COLOR_BayerGRBG2BGR_VNG: number;
				public static COLOR_BayerBGGR2BGR_VNG: number;
				public static COLOR_BayerGBRG2BGR_VNG: number;
				public static COLOR_BayerRGGB2RGB_VNG: number;
				public static COLOR_BayerGRBG2RGB_VNG: number;
				public static COLOR_BayerBGGR2RGB_VNG: number;
				public static COLOR_BayerGBRG2RGB_VNG: number;
				public static COLOR_BayerBG2RGB_VNG: number;
				public static COLOR_BayerGB2RGB_VNG: number;
				public static COLOR_BayerRG2RGB_VNG: number;
				public static COLOR_BayerGR2RGB_VNG: number;
				public static COLOR_BayerBG2BGR_EA: number;
				public static COLOR_BayerGB2BGR_EA: number;
				public static COLOR_BayerRG2BGR_EA: number;
				public static COLOR_BayerGR2BGR_EA: number;
				public static COLOR_BayerRGGB2BGR_EA: number;
				public static COLOR_BayerGRBG2BGR_EA: number;
				public static COLOR_BayerBGGR2BGR_EA: number;
				public static COLOR_BayerGBRG2BGR_EA: number;
				public static COLOR_BayerRGGB2RGB_EA: number;
				public static COLOR_BayerGRBG2RGB_EA: number;
				public static COLOR_BayerBGGR2RGB_EA: number;
				public static COLOR_BayerGBRG2RGB_EA: number;
				public static COLOR_BayerBG2RGB_EA: number;
				public static COLOR_BayerGB2RGB_EA: number;
				public static COLOR_BayerRG2RGB_EA: number;
				public static COLOR_BayerGR2RGB_EA: number;
				public static COLOR_BayerBG2BGRA: number;
				public static COLOR_BayerGB2BGRA: number;
				public static COLOR_BayerRG2BGRA: number;
				public static COLOR_BayerGR2BGRA: number;
				public static COLOR_BayerRGGB2BGRA: number;
				public static COLOR_BayerGRBG2BGRA: number;
				public static COLOR_BayerBGGR2BGRA: number;
				public static COLOR_BayerGBRG2BGRA: number;
				public static COLOR_BayerRGGB2RGBA: number;
				public static COLOR_BayerGRBG2RGBA: number;
				public static COLOR_BayerBGGR2RGBA: number;
				public static COLOR_BayerGBRG2RGBA: number;
				public static COLOR_BayerBG2RGBA: number;
				public static COLOR_BayerGB2RGBA: number;
				public static COLOR_BayerRG2RGBA: number;
				public static COLOR_BayerGR2RGBA: number;
				public static COLOR_COLORCVT_MAX: number;
				public static COLORMAP_AUTUMN: number;
				public static COLORMAP_BONE: number;
				public static COLORMAP_JET: number;
				public static COLORMAP_WINTER: number;
				public static COLORMAP_RAINBOW: number;
				public static COLORMAP_OCEAN: number;
				public static COLORMAP_SUMMER: number;
				public static COLORMAP_SPRING: number;
				public static COLORMAP_COOL: number;
				public static COLORMAP_HSV: number;
				public static COLORMAP_PINK: number;
				public static COLORMAP_HOT: number;
				public static COLORMAP_PARULA: number;
				public static COLORMAP_MAGMA: number;
				public static COLORMAP_INFERNO: number;
				public static COLORMAP_PLASMA: number;
				public static COLORMAP_VIRIDIS: number;
				public static COLORMAP_CIVIDIS: number;
				public static COLORMAP_TWILIGHT: number;
				public static COLORMAP_TWILIGHT_SHIFTED: number;
				public static COLORMAP_TURBO: number;
				public static COLORMAP_DEEPGREEN: number;
				public static CCL_DEFAULT: number;
				public static CCL_WU: number;
				public static CCL_GRANA: number;
				public static CCL_BOLELLI: number;
				public static CCL_SAUF: number;
				public static CCL_BBDT: number;
				public static CCL_SPAGHETTI: number;
				public static CC_STAT_LEFT: number;
				public static CC_STAT_TOP: number;
				public static CC_STAT_WIDTH: number;
				public static CC_STAT_HEIGHT: number;
				public static CC_STAT_AREA: number;
				public static CC_STAT_MAX: number;
				public static CHAIN_APPROX_NONE: number;
				public static CHAIN_APPROX_SIMPLE: number;
				public static CHAIN_APPROX_TC89_L1: number;
				public static CHAIN_APPROX_TC89_KCOS: number;
				public static DIST_LABEL_CCOMP: number;
				public static DIST_LABEL_PIXEL: number;
				public static DIST_MASK_3: number;
				public static DIST_MASK_5: number;
				public static DIST_MASK_PRECISE: number;
				public static DIST_USER: number;
				public static DIST_L1: number;
				public static DIST_L2: number;
				public static DIST_C: number;
				public static DIST_L12: number;
				public static DIST_FAIR: number;
				public static DIST_WELSCH: number;
				public static DIST_HUBER: number;
				public static FLOODFILL_FIXED_RANGE: number;
				public static FLOODFILL_MASK_ONLY: number;
				public static GC_BGD: number;
				public static GC_FGD: number;
				public static GC_PR_BGD: number;
				public static GC_PR_FGD: number;
				public static GC_INIT_WITH_RECT: number;
				public static GC_INIT_WITH_MASK: number;
				public static GC_EVAL: number;
				public static GC_EVAL_FREEZE_MODEL: number;
				public static FONT_HERSHEY_SIMPLEX: number;
				public static FONT_HERSHEY_PLAIN: number;
				public static FONT_HERSHEY_DUPLEX: number;
				public static FONT_HERSHEY_COMPLEX: number;
				public static FONT_HERSHEY_TRIPLEX: number;
				public static FONT_HERSHEY_COMPLEX_SMALL: number;
				public static FONT_HERSHEY_SCRIPT_SIMPLEX: number;
				public static FONT_HERSHEY_SCRIPT_COMPLEX: number;
				public static FONT_ITALIC: number;
				public static HISTCMP_CORREL: number;
				public static HISTCMP_CHISQR: number;
				public static HISTCMP_INTERSECT: number;
				public static HISTCMP_BHATTACHARYYA: number;
				public static HISTCMP_HELLINGER: number;
				public static HISTCMP_CHISQR_ALT: number;
				public static HISTCMP_KL_DIV: number;
				public static HOUGH_STANDARD: number;
				public static HOUGH_PROBABILISTIC: number;
				public static HOUGH_MULTI_SCALE: number;
				public static HOUGH_GRADIENT: number;
				public static HOUGH_GRADIENT_ALT: number;
				public static INTER_NEAREST: number;
				public static INTER_LINEAR: number;
				public static INTER_CUBIC: number;
				public static INTER_AREA: number;
				public static INTER_LANCZOS4: number;
				public static INTER_LINEAR_EXACT: number;
				public static INTER_NEAREST_EXACT: number;
				public static INTER_MAX: number;
				public static WARP_FILL_OUTLIERS: number;
				public static WARP_INVERSE_MAP: number;
				public static INTER_BITS: number;
				public static INTER_BITS2: number;
				public static INTER_TAB_SIZE: number;
				public static INTER_TAB_SIZE2: number;
				public static LSD_REFINE_NONE: number;
				public static LSD_REFINE_STD: number;
				public static LSD_REFINE_ADV: number;
				public static FILLED: number;
				public static LINE_4: number;
				public static LINE_8: number;
				public static LINE_AA: number;
				public static MARKER_CROSS: number;
				public static MARKER_TILTED_CROSS: number;
				public static MARKER_STAR: number;
				public static MARKER_DIAMOND: number;
				public static MARKER_SQUARE: number;
				public static MARKER_TRIANGLE_UP: number;
				public static MARKER_TRIANGLE_DOWN: number;
				public static MORPH_RECT: number;
				public static MORPH_CROSS: number;
				public static MORPH_ELLIPSE: number;
				public static MORPH_ERODE: number;
				public static MORPH_DILATE: number;
				public static MORPH_OPEN: number;
				public static MORPH_CLOSE: number;
				public static MORPH_GRADIENT: number;
				public static MORPH_TOPHAT: number;
				public static MORPH_BLACKHAT: number;
				public static MORPH_HITMISS: number;
				public static INTERSECT_NONE: number;
				public static INTERSECT_PARTIAL: number;
				public static INTERSECT_FULL: number;
				public static RETR_EXTERNAL: number;
				public static RETR_LIST: number;
				public static RETR_CCOMP: number;
				public static RETR_TREE: number;
				public static RETR_FLOODFILL: number;
				public static CONTOURS_MATCH_I1: number;
				public static CONTOURS_MATCH_I2: number;
				public static CONTOURS_MATCH_I3: number;
				public static FILTER_SCHARR: number;
				public static TM_SQDIFF: number;
				public static TM_SQDIFF_NORMED: number;
				public static TM_CCORR: number;
				public static TM_CCORR_NORMED: number;
				public static TM_CCOEFF: number;
				public static TM_CCOEFF_NORMED: number;
				public static THRESH_BINARY: number;
				public static THRESH_BINARY_INV: number;
				public static THRESH_TRUNC: number;
				public static THRESH_TOZERO: number;
				public static THRESH_TOZERO_INV: number;
				public static THRESH_MASK: number;
				public static THRESH_OTSU: number;
				public static THRESH_TRIANGLE: number;
				public static WARP_POLAR_LINEAR: number;
				public static WARP_POLAR_LOG: number;
				public static sepFilter2D(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, kernelX: org.opencv.core.Mat, kernelY: org.opencv.core.Mat): void;
				public static intersectConvexConvex(p1: org.opencv.core.Mat, p2: org.opencv.core.Mat, p12: org.opencv.core.Mat, handleNested: boolean): number;
				public static floodFill(image: org.opencv.core.Mat, mask: org.opencv.core.Mat, seedPoint: org.opencv.core.Point, newVal: org.opencv.core.Scalar, rect: org.opencv.core.Rect, loDiff: org.opencv.core.Scalar, upDiff: org.opencv.core.Scalar): number;
				public static putText(img: org.opencv.core.Mat, text: string, org: org.opencv.core.Point, fontFace: number, fontScale: number, param5: org.opencv.core.Scalar): void;
				public static sepFilter2D(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, kernelX: org.opencv.core.Mat, kernelY: org.opencv.core.Mat, anchor: org.opencv.core.Point): void;
				public static getRotationMatrix2D(center: org.opencv.core.Point, angle: number, param2: number): org.opencv.core.Mat;
				public static GaussianBlur(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ksize: org.opencv.core.Size, sigmaX: number, param4: number, sigmaY: number): void;
				public static HuMoments(m: org.opencv.imgproc.Moments, hu: org.opencv.core.Mat): void;
				public static sqrBoxFilter(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, ksize: org.opencv.core.Size, anchor: org.opencv.core.Point): void;
				public static integral3(src: org.opencv.core.Mat, sum: org.opencv.core.Mat, sqsum: org.opencv.core.Mat, tilted: org.opencv.core.Mat): void;
				public static filter2D(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, kernel: org.opencv.core.Mat, anchor: org.opencv.core.Point, delta: number, param6: number): void;
				public static ellipse(img: org.opencv.core.Mat, center: org.opencv.core.Point, axes: org.opencv.core.Size, angle: number, param4: number, startAngle: number, param6: org.opencv.core.Scalar, endAngle: number): void;
				public static resize(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, dsize: org.opencv.core.Size, fx: number, param4: number): void;
				public static HoughLinesWithAccumulator(image: org.opencv.core.Mat, lines: org.opencv.core.Mat, rho: number, param3: number, theta: number, param5: number, threshold: number): void;
				public static sqrBoxFilter(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, ksize: org.opencv.core.Size, anchor: org.opencv.core.Point, normalize: boolean, borderType: number): void;
				public static warpPerspective(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, M: org.opencv.core.Mat, dsize: org.opencv.core.Size): void;
				public static createLineSegmentDetector(refine: number, scale: number, param2: number, sigma_scale: number, param4: number): org.opencv.imgproc.LineSegmentDetector;
				public static integral(src: org.opencv.core.Mat, sum: org.opencv.core.Mat): void;
				public static pyrDown(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static fitEllipseAMS(points: org.opencv.core.Mat): org.opencv.core.RotatedRect;
				public static matchShapes(contour1: org.opencv.core.Mat, contour2: org.opencv.core.Mat, method: number, parameter: number): number;
				public static goodFeaturesToTrack(image: org.opencv.core.Mat, corners: org.opencv.core.MatOfPoint, maxCorners: number, qualityLevel: number, param4: number, minDistance: org.opencv.core.Mat, param6: number, mask: boolean): void;
				public static convertMaps(map1: org.opencv.core.Mat, map2: org.opencv.core.Mat, dstmap1: org.opencv.core.Mat, dstmap2: org.opencv.core.Mat, dstmap1type: number, nninterpolation: boolean): void;
				public static pyrUp(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, dstsize: org.opencv.core.Size): void;
				public static HoughLinesP(image: org.opencv.core.Mat, lines: org.opencv.core.Mat, rho: number, param3: number, theta: number, param5: number): void;
				public static remap(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, map1: org.opencv.core.Mat, map2: org.opencv.core.Mat, interpolation: number, borderMode: number): void;
				public static divSpectrums(a: org.opencv.core.Mat, b: org.opencv.core.Mat, c: org.opencv.core.Mat, flags: number): void;
				public static warpAffine(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, M: org.opencv.core.Mat, dsize: org.opencv.core.Size, flags: number, borderMode: number): void;
				public static goodFeaturesToTrack(image: org.opencv.core.Mat, corners: org.opencv.core.MatOfPoint, maxCorners: number, qualityLevel: number, param4: number, minDistance: org.opencv.core.Mat): void;
				public static moments(array: org.opencv.core.Mat, binaryImage: boolean): org.opencv.imgproc.Moments;
				public static warpAffine(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, M: org.opencv.core.Mat, dsize: org.opencv.core.Size, flags: number, borderMode: number, borderValue: org.opencv.core.Scalar): void;
				public static cornerSubPix(image: org.opencv.core.Mat, corners: org.opencv.core.Mat, winSize: org.opencv.core.Size, zeroZone: org.opencv.core.Size, criteria: org.opencv.core.TermCriteria): void;
				public static HoughLines(image: org.opencv.core.Mat, lines: org.opencv.core.Mat, rho: number, param3: number, theta: number, param5: number): void;
				public static integral2(src: org.opencv.core.Mat, sum: org.opencv.core.Mat, sqsum: org.opencv.core.Mat, sdepth: number, sqdepth: number): void;
				public static grabCut(img: org.opencv.core.Mat, mask: org.opencv.core.Mat, rect: org.opencv.core.Rect, bgdModel: org.opencv.core.Mat, fgdModel: org.opencv.core.Mat, iterCount: number): void;
				public static arrowedLine(img: org.opencv.core.Mat, pt1: org.opencv.core.Point, pt2: org.opencv.core.Point, color: org.opencv.core.Scalar, thickness: number, line_type: number, shift: number, tipLength: number): void;
				public static HoughCircles(image: org.opencv.core.Mat, circles: org.opencv.core.Mat, method: number, dp: number, param4: number, minDist: number, param6: number): void;
				public static fitLine(points: org.opencv.core.Mat, line: org.opencv.core.Mat, distType: number, param: number, param4: number, reps: number): void;
				public static warpPolar(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, dsize: org.opencv.core.Size, center: org.opencv.core.Point, maxRadius: number, param5: number): void;
				public static ellipse(img: org.opencv.core.Mat, box: org.opencv.core.RotatedRect, color: org.opencv.core.Scalar, thickness: number, lineType: number): void;
				public static spatialGradient(src: org.opencv.core.Mat, dx: org.opencv.core.Mat, dy: org.opencv.core.Mat, ksize: number): void;
				public static ellipse(img: org.opencv.core.Mat, center: org.opencv.core.Point, axes: org.opencv.core.Size, angle: number, param4: number, startAngle: number, param6: org.opencv.core.Scalar, endAngle: number, param8: number): void;
				public static circle(img: org.opencv.core.Mat, center: org.opencv.core.Point, radius: number, color: org.opencv.core.Scalar, thickness: number, lineType: number): void;
				public static connectedComponentsWithAlgorithm(image: org.opencv.core.Mat, labels: org.opencv.core.Mat, connectivity: number, ltype: number, ccltype: number): number;
				public static putText(img: org.opencv.core.Mat, text: string, org: org.opencv.core.Point, fontFace: number, fontScale: number, param5: org.opencv.core.Scalar, color: number, thickness: number): void;
				public static getGaussianKernel(ksize: number, sigma: number, param2: number): org.opencv.core.Mat;
				public static GaussianBlur(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ksize: org.opencv.core.Size, sigmaX: number): void;
				public static getFontScaleFromHeight(fontFace: number, pixelHeight: number, thickness: number): number;
				public static fillPoly(img: org.opencv.core.Mat, pts: java.util.List<org.opencv.core.MatOfPoint>, color: org.opencv.core.Scalar, lineType: number, shift: number, offset: org.opencv.core.Point): void;
				public static blur(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ksize: org.opencv.core.Size, anchor: org.opencv.core.Point, borderType: number): void;
				public static integral3(src: org.opencv.core.Mat, sum: org.opencv.core.Mat, sqsum: org.opencv.core.Mat, tilted: org.opencv.core.Mat, sdepth: number): void;
				public static fitEllipseDirect(points: org.opencv.core.Mat): org.opencv.core.RotatedRect;
				public static connectedComponentsWithStats(image: org.opencv.core.Mat, labels: org.opencv.core.Mat, stats: org.opencv.core.Mat, centroids: org.opencv.core.Mat, connectivity: number): number;
				public static applyColorMap(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, colormap: number): void;
				public static getStructuringElement(shape: number, ksize: org.opencv.core.Size): org.opencv.core.Mat;
				public static getDerivKernels(kx: org.opencv.core.Mat, ky: org.opencv.core.Mat, dx: number, dy: number, ksize: number, normalize: boolean): void;
				public static fitEllipse(points: org.opencv.core.MatOfPoint2f): org.opencv.core.RotatedRect;
				public static createLineSegmentDetector(refine: number, scale: number): org.opencv.imgproc.LineSegmentDetector;
				public static getDerivKernels(kx: org.opencv.core.Mat, ky: org.opencv.core.Mat, dx: number, dy: number, ksize: number, normalize: boolean, ktype: number): void;
				public static erode(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, kernel: org.opencv.core.Mat, anchor: org.opencv.core.Point, iterations: number): void;
				public static line(img: org.opencv.core.Mat, pt1: org.opencv.core.Point, pt2: org.opencv.core.Point, color: org.opencv.core.Scalar): void;
				public static getRectSubPix(image: org.opencv.core.Mat, patchSize: org.opencv.core.Size, center: org.opencv.core.Point, patch: org.opencv.core.Mat, patchType: number): void;
				public static connectedComponentsWithStats(image: org.opencv.core.Mat, labels: org.opencv.core.Mat, stats: org.opencv.core.Mat, centroids: org.opencv.core.Mat, connectivity: number, ltype: number): number;
				public static drawMarker(img: org.opencv.core.Mat, position: org.opencv.core.Point, color: org.opencv.core.Scalar, markerType: number, markerSize: number, thickness: number): void;
				public static contourArea(contour: org.opencv.core.Mat, oriented: boolean): number;
				public static minEnclosingCircle(points: org.opencv.core.MatOfPoint2f, center: org.opencv.core.Point, radius: number[]): void;
				public static accumulateProduct(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static filter2D(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, kernel: org.opencv.core.Mat, anchor: org.opencv.core.Point): void;
				public static drawMarker(img: org.opencv.core.Mat, position: org.opencv.core.Point, color: org.opencv.core.Scalar): void;
				public static boxFilter(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, ksize: org.opencv.core.Size, anchor: org.opencv.core.Point, normalize: boolean): void;
				public static rectangle(img: org.opencv.core.Mat, rec: org.opencv.core.Rect, color: org.opencv.core.Scalar, thickness: number): void;
				public static dilate(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, kernel: org.opencv.core.Mat, anchor: org.opencv.core.Point, iterations: number): void;
				public static phaseCorrelate(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat): org.opencv.core.Point;
				public static integral2(src: org.opencv.core.Mat, sum: org.opencv.core.Mat, sqsum: org.opencv.core.Mat, sdepth: number): void;
				public static rectangle(img: org.opencv.core.Mat, rec: org.opencv.core.Rect, color: org.opencv.core.Scalar, thickness: number, lineType: number): void;
				public static Canny(dx: org.opencv.core.Mat, dy: org.opencv.core.Mat, edges: org.opencv.core.Mat, threshold1: number, param4: number, threshold2: boolean): void;
				public static sqrBoxFilter(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, ksize: org.opencv.core.Size, anchor: org.opencv.core.Point, normalize: boolean): void;
				public static floodFill(image: org.opencv.core.Mat, mask: org.opencv.core.Mat, seedPoint: org.opencv.core.Point, newVal: org.opencv.core.Scalar, rect: org.opencv.core.Rect, loDiff: org.opencv.core.Scalar): number;
				public static clipLine(imgRect: org.opencv.core.Rect, pt1: org.opencv.core.Point, pt2: org.opencv.core.Point): boolean;
				public static dilate(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, kernel: org.opencv.core.Mat, anchor: org.opencv.core.Point): void;
				/** @deprecated */
				public static logPolar(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, center: org.opencv.core.Point, M: number, param4: number): void;
				public static createCLAHE(clipLimit: number): org.opencv.imgproc.CLAHE;
				public static watershed(image: org.opencv.core.Mat, markers: org.opencv.core.Mat): void;
				public static morphologyEx(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, op: number, kernel: org.opencv.core.Mat, anchor: org.opencv.core.Point, iterations: number, borderType: number): void;
				public static drawMarker(img: org.opencv.core.Mat, position: org.opencv.core.Point, color: org.opencv.core.Scalar, markerType: number, markerSize: number): void;
				public static HoughLines(image: org.opencv.core.Mat, lines: org.opencv.core.Mat, rho: number, param3: number, theta: number, param5: number, threshold: number): void;
				public static arcLength(curve: org.opencv.core.MatOfPoint2f, closed: boolean): number;
				public static drawContours(image: org.opencv.core.Mat, contours: java.util.List<org.opencv.core.MatOfPoint>, contourIdx: number, color: org.opencv.core.Scalar, thickness: number): void;
				public static HoughLinesWithAccumulator(image: org.opencv.core.Mat, lines: org.opencv.core.Mat, rho: number, param3: number, theta: number, param5: number): void;
				public static connectedComponents(image: org.opencv.core.Mat, labels: org.opencv.core.Mat): number;
				public static getGaborKernel(ksize: org.opencv.core.Size, sigma: number, param2: number, theta: number, param4: number, lambd: number): org.opencv.core.Mat;
				public static Canny(image: org.opencv.core.Mat, edges: org.opencv.core.Mat, threshold1: number, param3: number, threshold2: number): void;
				public static erode(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, kernel: org.opencv.core.Mat, anchor: org.opencv.core.Point, iterations: number, borderType: number): void;
				public static createLineSegmentDetector(): org.opencv.imgproc.LineSegmentDetector;
				public static HoughLinesP(image: org.opencv.core.Mat, lines: org.opencv.core.Mat, rho: number, param3: number, theta: number, param5: number, threshold: number): void;
				public static convertMaps(map1: org.opencv.core.Mat, map2: org.opencv.core.Mat, dstmap1: org.opencv.core.Mat, dstmap2: org.opencv.core.Mat, dstmap1type: number): void;
				public static pyrMeanShiftFiltering(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, sp: number, param3: number, sr: number, param5: org.opencv.core.TermCriteria): void;
				public static compareHist(H1: org.opencv.core.Mat, H2: org.opencv.core.Mat, method: number): number;
				public static arrowedLine(img: org.opencv.core.Mat, pt1: org.opencv.core.Point, pt2: org.opencv.core.Point, color: org.opencv.core.Scalar): void;
				public static warpPerspective(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, M: org.opencv.core.Mat, dsize: org.opencv.core.Size, flags: number, borderMode: number): void;
				public static dilate(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, kernel: org.opencv.core.Mat): void;
				public static divSpectrums(a: org.opencv.core.Mat, b: org.opencv.core.Mat, c: org.opencv.core.Mat, flags: number, conjB: boolean): void;
				public static convexHull(points: org.opencv.core.MatOfPoint, hull: org.opencv.core.MatOfInt): void;
				public static connectedComponentsWithStats(image: org.opencv.core.Mat, labels: org.opencv.core.Mat, stats: org.opencv.core.Mat, centroids: org.opencv.core.Mat): number;
				public static fillConvexPoly(img: org.opencv.core.Mat, points: org.opencv.core.MatOfPoint, color: org.opencv.core.Scalar, lineType: number, shift: number): void;
				public static arrowedLine(img: org.opencv.core.Mat, pt1: org.opencv.core.Point, pt2: org.opencv.core.Point, color: org.opencv.core.Scalar, thickness: number): void;
				public static line(img: org.opencv.core.Mat, pt1: org.opencv.core.Point, pt2: org.opencv.core.Point, color: org.opencv.core.Scalar, thickness: number, lineType: number): void;
				public static cvtColor(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, code: number): void;
				public static applyColorMap(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, userColor: org.opencv.core.Mat): void;
				public static fillConvexPoly(img: org.opencv.core.Mat, points: org.opencv.core.MatOfPoint, color: org.opencv.core.Scalar, lineType: number): void;
				public static grabCut(img: org.opencv.core.Mat, mask: org.opencv.core.Mat, rect: org.opencv.core.Rect, bgdModel: org.opencv.core.Mat, fgdModel: org.opencv.core.Mat, iterCount: number, mode: number): void;
				public static createLineSegmentDetector(refine: number, scale: number, param2: number, sigma_scale: number): org.opencv.imgproc.LineSegmentDetector;
				public static cvtColor(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, code: number, dstCn: number): void;
				public static getTextSize(text: string, fontFace: number, fontScale: number, param3: number, thickness: number[]): org.opencv.core.Size;
				public static Sobel(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, dx: number, dy: number): void;
				public static erode(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, kernel: org.opencv.core.Mat, anchor: org.opencv.core.Point, iterations: number, borderType: number, borderValue: org.opencv.core.Scalar): void;
				public static goodFeaturesToTrackWithQuality(image: org.opencv.core.Mat, corners: org.opencv.core.Mat, maxCorners: number, qualityLevel: number, param4: number, minDistance: org.opencv.core.Mat, param6: org.opencv.core.Mat): void;
				public static contourArea(contour: org.opencv.core.Mat): number;
				public static goodFeaturesToTrack(image: org.opencv.core.Mat, corners: org.opencv.core.MatOfPoint, maxCorners: number, qualityLevel: number, param4: number, minDistance: org.opencv.core.Mat, param6: number, mask: number, blockSize: boolean, gradientSize: number): void;
				public static pyrUp(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, dstsize: org.opencv.core.Size, borderType: number): void;
				public static morphologyEx(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, op: number, kernel: org.opencv.core.Mat): void;
				public static Canny(image: org.opencv.core.Mat, edges: org.opencv.core.Mat, threshold1: number, param3: number, threshold2: number, param5: boolean): void;
				public static Scharr(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, dx: number, dy: number, scale: number): void;
				public static EMD(signature1: org.opencv.core.Mat, signature2: org.opencv.core.Mat, distType: number, cost: org.opencv.core.Mat, flow: org.opencv.core.Mat): number;
				public static bilateralFilter(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, d: number, sigmaColor: number, param4: number): void;
				public static Sobel(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, dx: number, dy: number, ksize: number): void;
				public static getPerspectiveTransform(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): org.opencv.core.Mat;
				public static polylines(img: org.opencv.core.Mat, pts: java.util.List<org.opencv.core.MatOfPoint>, isClosed: boolean, color: org.opencv.core.Scalar, thickness: number, lineType: number, shift: number): void;
				public static polylines(img: org.opencv.core.Mat, pts: java.util.List<org.opencv.core.MatOfPoint>, isClosed: boolean, color: org.opencv.core.Scalar): void;
				public static rectangle(img: org.opencv.core.Mat, pt1: org.opencv.core.Point, pt2: org.opencv.core.Point, color: org.opencv.core.Scalar): void;
				public static cornerMinEigenVal(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, blockSize: number, ksize: number): void;
				public static HoughLines(image: org.opencv.core.Mat, lines: org.opencv.core.Mat, rho: number, param3: number, theta: number, param5: number, threshold: number, srn: number, param8: number): void;
				public static createCLAHE(clipLimit: number, param1: org.opencv.core.Size): org.opencv.imgproc.CLAHE;
				public static goodFeaturesToTrack(image: org.opencv.core.Mat, corners: org.opencv.core.MatOfPoint, maxCorners: number, qualityLevel: number, param4: number, minDistance: org.opencv.core.Mat, param6: number): void;
				public static remap(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, map1: org.opencv.core.Mat, map2: org.opencv.core.Mat, interpolation: number, borderMode: number, borderValue: org.opencv.core.Scalar): void;
				public static cornerHarris(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, blockSize: number, ksize: number, k: number): void;
				public static filter2D(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, kernel: org.opencv.core.Mat): void;
				public static Canny(dx: org.opencv.core.Mat, dy: org.opencv.core.Mat, edges: org.opencv.core.Mat, threshold1: number, param4: number): void;
				public static HoughCircles(image: org.opencv.core.Mat, circles: org.opencv.core.Mat, method: number, dp: number, param4: number): void;
				public static accumulate(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, mask: org.opencv.core.Mat): void;
				public static createHanningWindow(dst: org.opencv.core.Mat, winSize: org.opencv.core.Size, type: number): void;
				public static medianBlur(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ksize: number): void;
				public static drawContours(image: org.opencv.core.Mat, contours: java.util.List<org.opencv.core.MatOfPoint>, contourIdx: number, color: org.opencv.core.Scalar, thickness: number, lineType: number, hierarchy: org.opencv.core.Mat): void;
				public static findContours(image: org.opencv.core.Mat, contours: java.util.List<org.opencv.core.MatOfPoint>, hierarchy: org.opencv.core.Mat, mode: number, method: number, offset: org.opencv.core.Point): void;
				public static resize(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, dsize: org.opencv.core.Size, fx: number): void;
				public static pyrDown(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, dstsize: org.opencv.core.Size): void;
				public static cornerEigenValsAndVecs(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, blockSize: number, ksize: number): void;
				public static accumulate(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static pointPolygonTest(contour: org.opencv.core.MatOfPoint2f, pt: org.opencv.core.Point, measureDist: boolean): number;
				public static morphologyEx(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, op: number, kernel: org.opencv.core.Mat, anchor: org.opencv.core.Point, iterations: number): void;
				public static boxFilter(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, ksize: org.opencv.core.Size): void;
				public static Sobel(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, dx: number, dy: number, ksize: number, scale: number, param7: number, delta: number): void;
				public static fillConvexPoly(img: org.opencv.core.Mat, points: org.opencv.core.MatOfPoint, color: org.opencv.core.Scalar): void;
				public static getStructuringElement(shape: number, ksize: org.opencv.core.Size, anchor: org.opencv.core.Point): org.opencv.core.Mat;
				public static goodFeaturesToTrackWithQuality(image: org.opencv.core.Mat, corners: org.opencv.core.Mat, maxCorners: number, qualityLevel: number, param4: number, minDistance: org.opencv.core.Mat, param6: org.opencv.core.Mat, mask: number, cornersQuality: number, blockSize: boolean): void;
				public static rotatedRectangleIntersection(rect1: org.opencv.core.RotatedRect, rect2: org.opencv.core.RotatedRect, intersectingRegion: org.opencv.core.Mat): number;
				public static drawContours(image: org.opencv.core.Mat, contours: java.util.List<org.opencv.core.MatOfPoint>, contourIdx: number, color: org.opencv.core.Scalar): void;
				public static calcHist(images: java.util.List<org.opencv.core.Mat>, channels: org.opencv.core.MatOfInt, mask: org.opencv.core.Mat, hist: org.opencv.core.Mat, histSize: org.opencv.core.MatOfInt, ranges: org.opencv.core.MatOfFloat): void;
				public static line(img: org.opencv.core.Mat, pt1: org.opencv.core.Point, pt2: org.opencv.core.Point, color: org.opencv.core.Scalar, thickness: number, lineType: number, shift: number): void;
				public static accumulateWeighted(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, alpha: number, param3: org.opencv.core.Mat): void;
				public static goodFeaturesToTrack(image: org.opencv.core.Mat, corners: org.opencv.core.MatOfPoint, maxCorners: number, qualityLevel: number, param4: number, minDistance: org.opencv.core.Mat, param6: number, mask: number, blockSize: boolean): void;
				public static ellipse(img: org.opencv.core.Mat, center: org.opencv.core.Point, axes: org.opencv.core.Size, angle: number, param4: number, startAngle: number, param6: org.opencv.core.Scalar, endAngle: number, param8: number, color: number): void;
				public static polylines(img: org.opencv.core.Mat, pts: java.util.List<org.opencv.core.MatOfPoint>, isClosed: boolean, color: org.opencv.core.Scalar, thickness: number): void;
				public static createGeneralizedHoughGuil(): org.opencv.imgproc.GeneralizedHoughGuil;
				public static putText(img: org.opencv.core.Mat, text: string, org: org.opencv.core.Point, fontFace: number, fontScale: number, param5: org.opencv.core.Scalar, color: number, thickness: number, lineType: boolean): void;
				public static accumulateProduct(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat, mask: org.opencv.core.Mat): void;
				public static ellipse2Poly(center: org.opencv.core.Point, axes: org.opencv.core.Size, angle: number, arcStart: number, arcEnd: number, delta: number, pts: org.opencv.core.MatOfPoint): void;
				public static stackBlur(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ksize: org.opencv.core.Size): void;
				public static Laplacian(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, ksize: number, scale: number, param5: number): void;
				public static floodFill(image: org.opencv.core.Mat, mask: org.opencv.core.Mat, seedPoint: org.opencv.core.Point, newVal: org.opencv.core.Scalar, rect: org.opencv.core.Rect): number;
				public static pyrMeanShiftFiltering(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, sp: number, param3: number, sr: number): void;
				public static preCornerDetect(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ksize: number): void;
				public static goodFeaturesToTrackWithQuality(image: org.opencv.core.Mat, corners: org.opencv.core.Mat, maxCorners: number, qualityLevel: number, param4: number, minDistance: org.opencv.core.Mat, param6: org.opencv.core.Mat, mask: number): void;
				public static pyrDown(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, dstsize: org.opencv.core.Size, borderType: number): void;
				public static remap(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, map1: org.opencv.core.Mat, map2: org.opencv.core.Mat, interpolation: number): void;
				public static resize(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, dsize: org.opencv.core.Size): void;
				public static createLineSegmentDetector(refine: number, scale: number, param2: number, sigma_scale: number, param4: number, quant: number, param6: number, ang_th: number): org.opencv.imgproc.LineSegmentDetector;
				public static Canny(image: org.opencv.core.Mat, edges: org.opencv.core.Mat, threshold1: number, param3: number): void;
				public static floodFill(image: org.opencv.core.Mat, mask: org.opencv.core.Mat, seedPoint: org.opencv.core.Point, newVal: org.opencv.core.Scalar): number;
				public static distanceTransform(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, distanceType: number, maskSize: number): void;
				public static fillPoly(img: org.opencv.core.Mat, pts: java.util.List<org.opencv.core.MatOfPoint>, color: org.opencv.core.Scalar): void;
				public static filter2D(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, kernel: org.opencv.core.Mat, anchor: org.opencv.core.Point, delta: number): void;
				public static calcHist(images: java.util.List<org.opencv.core.Mat>, channels: org.opencv.core.MatOfInt, mask: org.opencv.core.Mat, hist: org.opencv.core.Mat, histSize: org.opencv.core.MatOfInt, ranges: org.opencv.core.MatOfFloat, accumulate: boolean): void;
				public static line(img: org.opencv.core.Mat, pt1: org.opencv.core.Point, pt2: org.opencv.core.Point, color: org.opencv.core.Scalar, thickness: number): void;
				public static adaptiveThreshold(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, maxValue: number, param3: number, adaptiveMethod: number, thresholdType: number, blockSize: number): void;
				public static accumulateSquare(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, mask: org.opencv.core.Mat): void;
				public static rectangle(img: org.opencv.core.Mat, rec: org.opencv.core.Rect, color: org.opencv.core.Scalar, thickness: number, lineType: number, shift: number): void;
				public static blur(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ksize: org.opencv.core.Size): void;
				public static Laplacian(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, ksize: number, scale: number, param5: number, delta: number): void;
				public static polylines(img: org.opencv.core.Mat, pts: java.util.List<org.opencv.core.MatOfPoint>, isClosed: boolean, color: org.opencv.core.Scalar, thickness: number, lineType: number): void;
				public static preCornerDetect(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ksize: number, borderType: number): void;
				public static boundingRect(array: org.opencv.core.Mat): org.opencv.core.Rect;
				public static rectangle(img: org.opencv.core.Mat, pt1: org.opencv.core.Point, pt2: org.opencv.core.Point, color: org.opencv.core.Scalar, thickness: number, lineType: number, shift: number): void;
				public static Laplacian(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, ksize: number): void;
				public static distanceTransformWithLabels(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, labels: org.opencv.core.Mat, distanceType: number, maskSize: number): void;
				public static rectangle(img: org.opencv.core.Mat, pt1: org.opencv.core.Point, pt2: org.opencv.core.Point, color: org.opencv.core.Scalar, thickness: number): void;
				public static getPerspectiveTransform(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, solveMethod: number): org.opencv.core.Mat;
				public static minAreaRect(points: org.opencv.core.MatOfPoint2f): org.opencv.core.RotatedRect;
				public static circle(img: org.opencv.core.Mat, center: org.opencv.core.Point, radius: number, color: org.opencv.core.Scalar): void;
				public static HoughLinesWithAccumulator(image: org.opencv.core.Mat, lines: org.opencv.core.Mat, rho: number, param3: number, theta: number): void;
				public static demosaicing(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, code: number, dstCn: number): void;
				public static Scharr(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, dx: number, dy: number): void;
				public static drawMarker(img: org.opencv.core.Mat, position: org.opencv.core.Point, color: org.opencv.core.Scalar, markerType: number): void;
				public static HoughLinesPointSet(point: org.opencv.core.Mat, lines: org.opencv.core.Mat, lines_max: number, threshold: number, min_rho: number, param5: number, max_rho: number, param7: number, rho_step: number, param9: number): void;
				public static demosaicing(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, code: number): void;
				public static boxPoints(box: org.opencv.core.RotatedRect, points: org.opencv.core.Mat): void;
				public static blur(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ksize: org.opencv.core.Size, anchor: org.opencv.core.Point): void;
				public static pyrUp(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static accumulateSquare(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static ellipse(img: org.opencv.core.Mat, box: org.opencv.core.RotatedRect, color: org.opencv.core.Scalar, thickness: number): void;
				public static phaseCorrelate(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, window: org.opencv.core.Mat): org.opencv.core.Point;
				public static pyrMeanShiftFiltering(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, sp: number, param3: number): void;
				public static putText(img: org.opencv.core.Mat, text: string, org: org.opencv.core.Point, fontFace: number, fontScale: number, param5: org.opencv.core.Scalar, color: number): void;
				public static goodFeaturesToTrackWithQuality(image: org.opencv.core.Mat, corners: org.opencv.core.Mat, maxCorners: number, qualityLevel: number, param4: number, minDistance: org.opencv.core.Mat, param6: org.opencv.core.Mat, mask: number, cornersQuality: number): void;
				public static fillPoly(img: org.opencv.core.Mat, pts: java.util.List<org.opencv.core.MatOfPoint>, color: org.opencv.core.Scalar, lineType: number, shift: number): void;
				public static HoughLines(image: org.opencv.core.Mat, lines: org.opencv.core.Mat, rho: number, param3: number, theta: number): void;
				public static distanceTransform(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, distanceType: number, maskSize: number, dstType: number): void;
				public static getGaborKernel(ksize: org.opencv.core.Size, sigma: number, param2: number, theta: number, param4: number, lambd: number, param6: number): org.opencv.core.Mat;
				public static invertAffineTransform(M: org.opencv.core.Mat, iM: org.opencv.core.Mat): void;
				public static getAffineTransform(src: org.opencv.core.MatOfPoint2f, dst: org.opencv.core.MatOfPoint2f): org.opencv.core.Mat;
				public static drawMarker(img: org.opencv.core.Mat, position: org.opencv.core.Point, color: org.opencv.core.Scalar, markerType: number, markerSize: number, thickness: number, line_type: number): void;
				public static cornerMinEigenVal(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, blockSize: number): void;
				public static matchTemplate(image: org.opencv.core.Mat, templ: org.opencv.core.Mat, result: org.opencv.core.Mat, method: number): void;
				public static createCLAHE(): org.opencv.imgproc.CLAHE;
				public static HoughLinesWithAccumulator(image: org.opencv.core.Mat, lines: org.opencv.core.Mat, rho: number, param3: number, theta: number, param5: number, threshold: number, srn: number, param8: number): void;
				public static HoughLinesP(image: org.opencv.core.Mat, lines: org.opencv.core.Mat, rho: number, param3: number, theta: number): void;
				public static getFontScaleFromHeight(fontFace: number, pixelHeight: number): number;
				public static Scharr(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, dx: number, dy: number, scale: number, param6: number, delta: number): void;
				public static cornerHarris(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, blockSize: number, ksize: number, k: number, param5: number): void;
				public static blendLinear(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, weights1: org.opencv.core.Mat, weights2: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static HoughCircles(image: org.opencv.core.Mat, circles: org.opencv.core.Mat, method: number, dp: number, param4: number, minDist: number): void;
				public static rectangle(img: org.opencv.core.Mat, pt1: org.opencv.core.Point, pt2: org.opencv.core.Point, color: org.opencv.core.Scalar, thickness: number, lineType: number): void;
				public static connectedComponents(image: org.opencv.core.Mat, labels: org.opencv.core.Mat, connectivity: number): number;
				public static bilateralFilter(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, d: number, sigmaColor: number, param4: number, sigmaSpace: number): void;
				public static fillPoly(img: org.opencv.core.Mat, pts: java.util.List<org.opencv.core.MatOfPoint>, color: org.opencv.core.Scalar, lineType: number): void;
				public static warpPerspective(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, M: org.opencv.core.Mat, dsize: org.opencv.core.Size, flags: number, borderMode: number, borderValue: org.opencv.core.Scalar): void;
				public static getRectSubPix(image: org.opencv.core.Mat, patchSize: org.opencv.core.Size, center: org.opencv.core.Point, patch: org.opencv.core.Mat): void;
				public static warpAffine(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, M: org.opencv.core.Mat, dsize: org.opencv.core.Size, flags: number): void;
				public constructor();
				public static morphologyEx(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, op: number, kernel: org.opencv.core.Mat, anchor: org.opencv.core.Point, iterations: number, borderType: number, borderValue: org.opencv.core.Scalar): void;
				public static drawContours(image: org.opencv.core.Mat, contours: java.util.List<org.opencv.core.MatOfPoint>, contourIdx: number, color: org.opencv.core.Scalar, thickness: number, lineType: number): void;
				public static spatialGradient(src: org.opencv.core.Mat, dx: org.opencv.core.Mat, dy: org.opencv.core.Mat, ksize: number, borderType: number): void;
				public static threshold(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, thresh: number, param3: number, maxval: number): number;
				public static sqrBoxFilter(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, ksize: org.opencv.core.Size): void;
				public static goodFeaturesToTrack(image: org.opencv.core.Mat, corners: org.opencv.core.MatOfPoint, maxCorners: number, qualityLevel: number, param4: number): void;
				public static sepFilter2D(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, kernelX: org.opencv.core.Mat, kernelY: org.opencv.core.Mat, anchor: org.opencv.core.Point, delta: number): void;
				/** @deprecated */
				public static linearPolar(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, center: org.opencv.core.Point, maxRadius: number, param4: number): void;
				public static minEnclosingTriangle(points: org.opencv.core.Mat, triangle: org.opencv.core.Mat): number;
				public static HoughLinesWithAccumulator(image: org.opencv.core.Mat, lines: org.opencv.core.Mat, rho: number, param3: number, theta: number, param5: number, threshold: number, srn: number): void;
				public static connectedComponentsWithStatsWithAlgorithm(image: org.opencv.core.Mat, labels: org.opencv.core.Mat, stats: org.opencv.core.Mat, centroids: org.opencv.core.Mat, connectivity: number, ltype: number, ccltype: number): number;
				public static ellipse(img: org.opencv.core.Mat, center: org.opencv.core.Point, axes: org.opencv.core.Size, angle: number, param4: number, startAngle: number, param6: org.opencv.core.Scalar): void;
				public static createGeneralizedHoughBallard(): org.opencv.imgproc.GeneralizedHoughBallard;
				public static HoughCircles(image: org.opencv.core.Mat, circles: org.opencv.core.Mat, method: number, dp: number, param4: number, minDist: number, param6: number, param1: number): void;
				public static rectangle(img: org.opencv.core.Mat, rec: org.opencv.core.Rect, color: org.opencv.core.Scalar): void;
				public static EMD(signature1: org.opencv.core.Mat, signature2: org.opencv.core.Mat, distType: number): number;
				public static phaseCorrelate(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, window: org.opencv.core.Mat, response: number[]): org.opencv.core.Point;
				public static goodFeaturesToTrackWithQuality(image: org.opencv.core.Mat, corners: org.opencv.core.Mat, maxCorners: number, qualityLevel: number, param4: number, minDistance: org.opencv.core.Mat, param6: org.opencv.core.Mat, mask: number, cornersQuality: number, blockSize: boolean, gradientSize: number): void;
				public static resize(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, dsize: org.opencv.core.Size, fx: number, param4: number, fy: number): void;
				public static circle(img: org.opencv.core.Mat, center: org.opencv.core.Point, radius: number, color: org.opencv.core.Scalar, thickness: number, lineType: number, shift: number): void;
				public static getGaborKernel(ksize: org.opencv.core.Size, sigma: number, param2: number, theta: number, param4: number): org.opencv.core.Mat;
				public static morphologyEx(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, op: number, kernel: org.opencv.core.Mat, anchor: org.opencv.core.Point): void;
				public static convexHull(points: org.opencv.core.MatOfPoint, hull: org.opencv.core.MatOfInt, clockwise: boolean): void;
				public static HoughCircles(image: org.opencv.core.Mat, circles: org.opencv.core.Mat, method: number, dp: number, param4: number, minDist: number, param6: number, param1: number, param8: number): void;
				public static cvtColorTwoPlane(src1: org.opencv.core.Mat, src2: org.opencv.core.Mat, dst: org.opencv.core.Mat, code: number): void;
				public static Sobel(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, dx: number, dy: number, ksize: number, scale: number, param7: number): void;
				public static dilate(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, kernel: org.opencv.core.Mat, anchor: org.opencv.core.Point, iterations: number, borderType: number, borderValue: org.opencv.core.Scalar): void;
				public static goodFeaturesToTrack(image: org.opencv.core.Mat, corners: org.opencv.core.MatOfPoint, maxCorners: number, qualityLevel: number, param4: number, minDistance: org.opencv.core.Mat, param6: number, mask: number): void;
				public static EMD(signature1: org.opencv.core.Mat, signature2: org.opencv.core.Mat, distType: number, cost: org.opencv.core.Mat): number;
				public static moments(array: org.opencv.core.Mat): org.opencv.imgproc.Moments;
				public static getGaussianKernel(ksize: number, sigma: number): org.opencv.core.Mat;
				public static cornerMinEigenVal(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, blockSize: number, ksize: number, borderType: number): void;
				public static erode(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, kernel: org.opencv.core.Mat): void;
				public static erode(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, kernel: org.opencv.core.Mat, anchor: org.opencv.core.Point): void;
				public static dilate(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, kernel: org.opencv.core.Mat, anchor: org.opencv.core.Point, iterations: number, borderType: number): void;
				public static floodFill(image: org.opencv.core.Mat, mask: org.opencv.core.Mat, seedPoint: org.opencv.core.Point, newVal: org.opencv.core.Scalar, rect: org.opencv.core.Rect, loDiff: org.opencv.core.Scalar, upDiff: org.opencv.core.Scalar, flags: number): number;
				public static circle(img: org.opencv.core.Mat, center: org.opencv.core.Point, radius: number, color: org.opencv.core.Scalar, thickness: number): void;
				public static boxFilter(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, ksize: org.opencv.core.Size, anchor: org.opencv.core.Point): void;
				public static integral3(src: org.opencv.core.Mat, sum: org.opencv.core.Mat, sqsum: org.opencv.core.Mat, tilted: org.opencv.core.Mat, sdepth: number, sqdepth: number): void;
				public static createLineSegmentDetector(refine: number, scale: number, param2: number, sigma_scale: number, param4: number, quant: number): org.opencv.imgproc.LineSegmentDetector;
				public static boxFilter(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, ksize: org.opencv.core.Size, anchor: org.opencv.core.Point, normalize: boolean, borderType: number): void;
				public static drawContours(image: org.opencv.core.Mat, contours: java.util.List<org.opencv.core.MatOfPoint>, contourIdx: number, color: org.opencv.core.Scalar, thickness: number, lineType: number, hierarchy: org.opencv.core.Mat, maxLevel: number, offset: org.opencv.core.Point): void;
				public static HoughLines(image: org.opencv.core.Mat, lines: org.opencv.core.Mat, rho: number, param3: number, theta: number, param5: number, threshold: number, srn: number): void;
				public static approxPolyDP(curve: org.opencv.core.MatOfPoint2f, approxCurve: org.opencv.core.MatOfPoint2f, epsilon: number, param3: boolean): void;
				public static arrowedLine(img: org.opencv.core.Mat, pt1: org.opencv.core.Point, pt2: org.opencv.core.Point, color: org.opencv.core.Scalar, thickness: number, line_type: number, shift: number): void;
				public static arrowedLine(img: org.opencv.core.Mat, pt1: org.opencv.core.Point, pt2: org.opencv.core.Point, color: org.opencv.core.Scalar, thickness: number, line_type: number): void;
				public static createLineSegmentDetector(refine: number): org.opencv.imgproc.LineSegmentDetector;
				public static convexityDefects(contour: org.opencv.core.MatOfPoint, convexhull: org.opencv.core.MatOfInt, convexityDefects: org.opencv.core.MatOfInt4): void;
				public static Laplacian(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number): void;
				public static findContours(image: org.opencv.core.Mat, contours: java.util.List<org.opencv.core.MatOfPoint>, hierarchy: org.opencv.core.Mat, mode: number, method: number): void;
				public static intersectConvexConvex(p1: org.opencv.core.Mat, p2: org.opencv.core.Mat, p12: org.opencv.core.Mat): number;
				public static spatialGradient(src: org.opencv.core.Mat, dx: org.opencv.core.Mat, dy: org.opencv.core.Mat): void;
				public static createLineSegmentDetector(refine: number, scale: number, param2: number): org.opencv.imgproc.LineSegmentDetector;
				public static matchTemplate(image: org.opencv.core.Mat, templ: org.opencv.core.Mat, result: org.opencv.core.Mat, method: number, mask: org.opencv.core.Mat): void;
				public static drawContours(image: org.opencv.core.Mat, contours: java.util.List<org.opencv.core.MatOfPoint>, contourIdx: number, color: org.opencv.core.Scalar, thickness: number, lineType: number, hierarchy: org.opencv.core.Mat, maxLevel: number): void;
				public static Sobel(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, dx: number, dy: number, ksize: number, scale: number): void;
				public static calcBackProject(images: java.util.List<org.opencv.core.Mat>, channels: org.opencv.core.MatOfInt, hist: org.opencv.core.Mat, dst: org.opencv.core.Mat, ranges: org.opencv.core.MatOfFloat, scale: number): void;
				public static isContourConvex(contour: org.opencv.core.MatOfPoint): boolean;
				public static Laplacian(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, ksize: number, scale: number): void;
				public static equalizeHist(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static accumulateWeighted(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, alpha: number): void;
				public static getDerivKernels(kx: org.opencv.core.Mat, ky: org.opencv.core.Mat, dx: number, dy: number, ksize: number): void;
				public static goodFeaturesToTrack(image: org.opencv.core.Mat, corners: org.opencv.core.MatOfPoint, maxCorners: number, qualityLevel: number, param4: number, minDistance: org.opencv.core.Mat, param6: number, mask: boolean, blockSize: number): void;
				public static createLineSegmentDetector(refine: number, scale: number, param2: number, sigma_scale: number, param4: number, quant: number, param6: number): org.opencv.imgproc.LineSegmentDetector;
				public static GaussianBlur(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ksize: org.opencv.core.Size, sigmaX: number, param4: number): void;
				public static warpPerspective(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, M: org.opencv.core.Mat, dsize: org.opencv.core.Size, flags: number): void;
				public static warpAffine(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, M: org.opencv.core.Mat, dsize: org.opencv.core.Size): void;
				public static integral2(src: org.opencv.core.Mat, sum: org.opencv.core.Mat, sqsum: org.opencv.core.Mat): void;
				public static Scharr(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, dx: number, dy: number, scale: number, param6: number): void;
				public static cornerEigenValsAndVecs(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, blockSize: number, ksize: number, borderType: number): void;
				public static distanceTransformWithLabels(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, labels: org.opencv.core.Mat, distanceType: number, maskSize: number, labelType: number): void;
				public static connectedComponents(image: org.opencv.core.Mat, labels: org.opencv.core.Mat, connectivity: number, ltype: number): number;
				public static ellipse(img: org.opencv.core.Mat, box: org.opencv.core.RotatedRect, color: org.opencv.core.Scalar): void;
				public static sepFilter2D(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, ddepth: number, kernelX: org.opencv.core.Mat, kernelY: org.opencv.core.Mat, anchor: org.opencv.core.Point, delta: number, param7: number): void;
				public static integral(src: org.opencv.core.Mat, sum: org.opencv.core.Mat, sdepth: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module imgproc {
			export class IntelligentScissorsMB extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.imgproc.IntelligentScissorsMB>;
				public nativeObj: number;
				public applyImage(image: org.opencv.core.Mat): org.opencv.imgproc.IntelligentScissorsMB;
				public setEdgeFeatureCannyParameters(threshold1: number, param1: number, threshold2: number): org.opencv.imgproc.IntelligentScissorsMB;
				public constructor(addr: number);
				public finalize(): void;
				public getNativeObjAddr(): number;
				public getContour(targetPt: org.opencv.core.Point, contour: org.opencv.core.Mat, backward: boolean): void;
				public setEdgeFeatureCannyParameters(threshold1: number, param1: number): org.opencv.imgproc.IntelligentScissorsMB;
				public constructor();
				public setGradientMagnitudeMaxLimit(): org.opencv.imgproc.IntelligentScissorsMB;
				public buildMap(sourcePt: org.opencv.core.Point): void;
				public setEdgeFeatureZeroCrossingParameters(): org.opencv.imgproc.IntelligentScissorsMB;
				public setEdgeFeatureCannyParameters(threshold1: number, param1: number, threshold2: number, param3: boolean): org.opencv.imgproc.IntelligentScissorsMB;
				public getContour(targetPt: org.opencv.core.Point, contour: org.opencv.core.Mat): void;
				public static __fromPtr__(addr: number): org.opencv.imgproc.IntelligentScissorsMB;
				public setGradientMagnitudeMaxLimit(gradient_magnitude_threshold_max: number): org.opencv.imgproc.IntelligentScissorsMB;
				public setWeights(weight_non_edge: number, weight_gradient_direction: number, weight_gradient_magnitude: number): org.opencv.imgproc.IntelligentScissorsMB;
				public applyImageFeatures(non_edge: org.opencv.core.Mat, gradient_direction: org.opencv.core.Mat, gradient_magnitude: org.opencv.core.Mat, image: org.opencv.core.Mat): org.opencv.imgproc.IntelligentScissorsMB;
				public setEdgeFeatureZeroCrossingParameters(gradient_magnitude_min_value: number): org.opencv.imgproc.IntelligentScissorsMB;
				public applyImageFeatures(non_edge: org.opencv.core.Mat, gradient_direction: org.opencv.core.Mat, gradient_magnitude: org.opencv.core.Mat): org.opencv.imgproc.IntelligentScissorsMB;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module imgproc {
			export class LineSegmentDetector extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.imgproc.LineSegmentDetector>;
				public static __fromPtr__(addr: number): org.opencv.imgproc.LineSegmentDetector;
				public compareSegments(size: org.opencv.core.Size, lines1: org.opencv.core.Mat, lines2: org.opencv.core.Mat, image: org.opencv.core.Mat): number;
				public detect(image: org.opencv.core.Mat, lines: org.opencv.core.Mat, width: org.opencv.core.Mat, prec: org.opencv.core.Mat): void;
				public detect(image: org.opencv.core.Mat, lines: org.opencv.core.Mat, width: org.opencv.core.Mat): void;
				public constructor(addr: number);
				public compareSegments(size: org.opencv.core.Size, lines1: org.opencv.core.Mat, lines2: org.opencv.core.Mat): number;
				public finalize(): void;
				public detect(image: org.opencv.core.Mat, lines: org.opencv.core.Mat, width: org.opencv.core.Mat, prec: org.opencv.core.Mat, nfa: org.opencv.core.Mat): void;
				public drawSegments(image: org.opencv.core.Mat, lines: org.opencv.core.Mat): void;
				public detect(image: org.opencv.core.Mat, lines: org.opencv.core.Mat): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module imgproc {
			export class Moments extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.imgproc.Moments>;
				public m00: number;
				public m10: number;
				public m01: number;
				public m20: number;
				public m11: number;
				public m02: number;
				public m30: number;
				public m21: number;
				public m12: number;
				public m03: number;
				public mu20: number;
				public mu11: number;
				public mu02: number;
				public mu30: number;
				public mu21: number;
				public mu12: number;
				public mu03: number;
				public nu20: number;
				public nu11: number;
				public nu02: number;
				public nu30: number;
				public nu21: number;
				public nu12: number;
				public nu03: number;
				public set_m01(m01: number): void;
				public set_nu12(nu12: number): void;
				public set_mu11(mu11: number): void;
				public set_m03(m03: number): void;
				public get_mu30(): number;
				public get_mu20(): number;
				public constructor();
				public get_m21(): number;
				public set_nu11(nu11: number): void;
				public get_nu03(): number;
				public set(vals: number[]): void;
				public get_m01(): number;
				public get_m11(): number;
				public set_m10(m10: number): void;
				public get_m20(): number;
				public get_nu20(): number;
				public get_m10(): number;
				public set_m12(m12: number): void;
				public get_mu02(): number;
				public get_m00(): number;
				public get_mu12(): number;
				public toString(): string;
				public set_nu02(nu02: number): void;
				public get_nu30(): number;
				public get_nu21(): number;
				public set_mu12(mu12: number): void;
				public set_m30(m30: number): void;
				public set_m21(m21: number): void;
				public set_nu21(nu21: number): void;
				public get_nu11(): number;
				public set_mu20(mu20: number): void;
				public get_mu03(): number;
				public get_m12(): number;
				public get_nu02(): number;
				public set_m02(m02: number): void;
				public set_m00(m00: number): void;
				public set_nu20(nu20: number): void;
				public get_m02(): number;
				public get_nu12(): number;
				public constructor(vals: number[]);
				public set_mu30(mu30: number): void;
				public set_mu03(mu03: number): void;
				public set_nu30(nu30: number): void;
				public get_mu11(): number;
				public set_m11(m11: number): void;
				public set_nu03(nu03: number): void;
				public get_mu21(): number;
				public set_mu02(mu02: number): void;
				public get_m30(): number;
				public completeState(): void;
				public set_mu21(mu21: number): void;
				public constructor(m00: number, param1: number, m10: number, param3: number, m01: number, param5: number, m20: number, param7: number, m11: number, param9: number);
				public get_m03(): number;
				public set_m20(m20: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module imgproc {
			export class Subdiv2D extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.imgproc.Subdiv2D>;
				public nativeObj: number;
				public static PTLOC_ERROR: number;
				public static PTLOC_OUTSIDE_RECT: number;
				public static PTLOC_INSIDE: number;
				public static PTLOC_VERTEX: number;
				public static PTLOC_ON_EDGE: number;
				public static NEXT_AROUND_ORG: number;
				public static NEXT_AROUND_DST: number;
				public static PREV_AROUND_ORG: number;
				public static PREV_AROUND_DST: number;
				public static NEXT_AROUND_LEFT: number;
				public static NEXT_AROUND_RIGHT: number;
				public static PREV_AROUND_LEFT: number;
				public static PREV_AROUND_RIGHT: number;
				public getTriangleList(triangleList: org.opencv.core.MatOfFloat6): void;
				public locate(pt: org.opencv.core.Point, edge: number[], vertex: number[]): number;
				public insert(ptvec: org.opencv.core.MatOfPoint2f): void;
				public getVertex(vertex: number, firstEdge: number[]): org.opencv.core.Point;
				public getLeadingEdgeList(leadingEdgeList: org.opencv.core.MatOfInt): void;
				public finalize(): void;
				public getVoronoiFacetList(idx: org.opencv.core.MatOfInt, facetList: java.util.List<org.opencv.core.MatOfPoint2f>, facetCenters: org.opencv.core.MatOfPoint2f): void;
				public edgeOrg(edge: number, orgpt: org.opencv.core.Point): number;
				public constructor();
				public getVertex(vertex: number): org.opencv.core.Point;
				public nextEdge(edge: number): number;
				public getEdgeList(edgeList: org.opencv.core.MatOfFloat4): void;
				public getEdge(edge: number, nextEdgeType: number): number;
				public constructor(rect: org.opencv.core.Rect);
				public edgeDst(edge: number, dstpt: org.opencv.core.Point): number;
				public symEdge(edge: number): number;
				public edgeDst(edge: number): number;
				public constructor(addr: number);
				public findNearest(pt: org.opencv.core.Point, nearestPt: org.opencv.core.Point): number;
				public getNativeObjAddr(): number;
				public static __fromPtr__(addr: number): org.opencv.imgproc.Subdiv2D;
				public insert(pt: org.opencv.core.Point): number;
				public rotateEdge(edge: number, rotate: number): number;
				public initDelaunay(rect: org.opencv.core.Rect): void;
				public edgeOrg(edge: number): number;
				public findNearest(pt: org.opencv.core.Point): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module ml {
			export class ANN_MLP extends org.opencv.ml.StatModel {
				public static class: java.lang.Class<org.opencv.ml.ANN_MLP>;
				public static IDENTITY: number;
				public static SIGMOID_SYM: number;
				public static GAUSSIAN: number;
				public static RELU: number;
				public static LEAKYRELU: number;
				public static UPDATE_WEIGHTS: number;
				public static NO_INPUT_SCALE: number;
				public static NO_OUTPUT_SCALE: number;
				public static BACKPROP: number;
				public static RPROP: number;
				public static ANNEAL: number;
				public static __fromPtr__(addr: number): org.opencv.ml.ANN_MLP;
				public getAnnealFinalT(): number;
				public setTrainMethod(method: number, param1: number): void;
				public setBackpropWeightScale(val: number): void;
				public setAnnealFinalT(val: number): void;
				public finalize(): void;
				public static load(filepath: string): org.opencv.ml.ANN_MLP;
				public static __fromPtr__(addr: number): org.opencv.ml.StatModel;
				public getRpropDWMin(): number;
				public setTrainMethod(method: number, param1: number, param2: number): void;
				public getBackpropMomentumScale(): number;
				public setBackpropMomentumScale(val: number): void;
				public getRpropDWMax(): number;
				public setAnnealCoolingRatio(val: number): void;
				public setActivationFunction(type: number): void;
				public setActivationFunction(type: number, param1: number): void;
				public static create(): org.opencv.ml.ANN_MLP;
				public setRpropDWMin(val: number): void;
				public getWeights(layerIdx: number): org.opencv.core.Mat;
				public getAnnealInitialT(): number;
				public getRpropDW0(): number;
				public getRpropDWMinus(): number;
				public setAnnealItePerStep(val: number): void;
				public constructor(addr: number);
				public getTrainMethod(): number;
				public getAnnealCoolingRatio(): number;
				public getRpropDWPlus(): number;
				public setRpropDW0(val: number): void;
				public setAnnealInitialT(val: number): void;
				public setRpropDWMinus(val: number): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public setTrainMethod(method: number): void;
				public getAnnealItePerStep(): number;
				public getBackpropWeightScale(): number;
				public setActivationFunction(type: number, param1: number, param2: number): void;
				public getLayerSizes(): org.opencv.core.Mat;
				public getTermCriteria(): org.opencv.core.TermCriteria;
				public setRpropDWPlus(val: number): void;
				public setTermCriteria(val: org.opencv.core.TermCriteria): void;
				public setLayerSizes(_layer_sizes: org.opencv.core.Mat): void;
				public setRpropDWMax(val: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module ml {
			export class Boost extends org.opencv.ml.DTrees {
				public static class: java.lang.Class<org.opencv.ml.Boost>;
				public static DISCRETE: number;
				public static REAL: number;
				public static LOGIT: number;
				public static GENTLE: number;
				public static load(filepath: string): org.opencv.ml.Boost;
				public setWeakCount(val: number): void;
				public constructor(addr: number);
				public getBoostType(): number;
				public setBoostType(val: number): void;
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.ml.Boost;
				public static __fromPtr__(addr: number): org.opencv.ml.StatModel;
				public static __fromPtr__(addr: number): org.opencv.ml.DTrees;
				public static load(filepath: string, nodeName: string): org.opencv.ml.Boost;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public static create(): org.opencv.ml.Boost;
				public static load(filepath: string, nodeName: string): org.opencv.ml.DTrees;
				public getWeightTrimRate(): number;
				public getWeakCount(): number;
				public setWeightTrimRate(val: number): void;
				public static create(): org.opencv.ml.DTrees;
				public static load(filepath: string): org.opencv.ml.DTrees;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module ml {
			export class DTrees extends org.opencv.ml.StatModel {
				public static class: java.lang.Class<org.opencv.ml.DTrees>;
				public static PREDICT_AUTO: number;
				public static PREDICT_SUM: number;
				public static PREDICT_MAX_VOTE: number;
				public static PREDICT_MASK: number;
				public getPriors(): org.opencv.core.Mat;
				public getUse1SERule(): boolean;
				public setMaxCategories(val: number): void;
				public finalize(): void;
				public getMaxCategories(): number;
				public static __fromPtr__(addr: number): org.opencv.ml.StatModel;
				public getMaxDepth(): number;
				public static __fromPtr__(addr: number): org.opencv.ml.DTrees;
				public setRegressionAccuracy(val: number): void;
				public static load(filepath: string, nodeName: string): org.opencv.ml.DTrees;
				public setPriors(val: org.opencv.core.Mat): void;
				public setCVFolds(val: number): void;
				public getTruncatePrunedTree(): boolean;
				public getCVFolds(): number;
				public getRegressionAccuracy(): number;
				public static create(): org.opencv.ml.DTrees;
				public setUseSurrogates(val: boolean): void;
				public setMinSampleCount(val: number): void;
				public setTruncatePrunedTree(val: boolean): void;
				public constructor(addr: number);
				public getUseSurrogates(): boolean;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public getMinSampleCount(): number;
				public setMaxDepth(val: number): void;
				public setUse1SERule(val: boolean): void;
				public static load(filepath: string): org.opencv.ml.DTrees;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module ml {
			export class EM extends org.opencv.ml.StatModel {
				public static class: java.lang.Class<org.opencv.ml.EM>;
				public static DEFAULT_NCLUSTERS: number;
				public static DEFAULT_MAX_ITERS: number;
				public static START_E_STEP: number;
				public static START_M_STEP: number;
				public static START_AUTO_STEP: number;
				public static COV_MAT_SPHERICAL: number;
				public static COV_MAT_DIAGONAL: number;
				public static COV_MAT_GENERIC: number;
				public static COV_MAT_DEFAULT: number;
				public trainE(samples: org.opencv.core.Mat, means0: org.opencv.core.Mat, covs0: org.opencv.core.Mat, weights0: org.opencv.core.Mat): boolean;
				public setClustersNumber(val: number): void;
				public predict(samples: org.opencv.core.Mat, results: org.opencv.core.Mat): number;
				public getCovarianceMatrixType(): number;
				public getWeights(): org.opencv.core.Mat;
				public predict(samples: org.opencv.core.Mat): number;
				public trainE(samples: org.opencv.core.Mat, means0: org.opencv.core.Mat, covs0: org.opencv.core.Mat, weights0: org.opencv.core.Mat, logLikelihoods: org.opencv.core.Mat, labels: org.opencv.core.Mat): boolean;
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.ml.StatModel;
				public setCovarianceMatrixType(val: number): void;
				public getCovs(covs: java.util.List<org.opencv.core.Mat>): void;
				public trainE(samples: org.opencv.core.Mat, means0: org.opencv.core.Mat, covs0: org.opencv.core.Mat): boolean;
				public static load(filepath: string, nodeName: string): org.opencv.ml.EM;
				public predict2(sample: org.opencv.core.Mat, probs: org.opencv.core.Mat): number[];
				public trainEM(samples: org.opencv.core.Mat, logLikelihoods: org.opencv.core.Mat, labels: org.opencv.core.Mat, probs: org.opencv.core.Mat): boolean;
				public trainEM(samples: org.opencv.core.Mat): boolean;
				public trainE(samples: org.opencv.core.Mat, means0: org.opencv.core.Mat): boolean;
				public static load(filepath: string): org.opencv.ml.EM;
				public static create(): org.opencv.ml.EM;
				public trainM(samples: org.opencv.core.Mat, probs0: org.opencv.core.Mat, logLikelihoods: org.opencv.core.Mat): boolean;
				public trainEM(samples: org.opencv.core.Mat, logLikelihoods: org.opencv.core.Mat): boolean;
				public static __fromPtr__(addr: number): org.opencv.ml.EM;
				public constructor(addr: number);
				public trainM(samples: org.opencv.core.Mat, probs0: org.opencv.core.Mat, logLikelihoods: org.opencv.core.Mat, labels: org.opencv.core.Mat): boolean;
				public trainE(samples: org.opencv.core.Mat, means0: org.opencv.core.Mat, covs0: org.opencv.core.Mat, weights0: org.opencv.core.Mat, logLikelihoods: org.opencv.core.Mat): boolean;
				public trainEM(samples: org.opencv.core.Mat, logLikelihoods: org.opencv.core.Mat, labels: org.opencv.core.Mat): boolean;
				public getMeans(): org.opencv.core.Mat;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public trainM(samples: org.opencv.core.Mat, probs0: org.opencv.core.Mat): boolean;
				public trainM(samples: org.opencv.core.Mat, probs0: org.opencv.core.Mat, logLikelihoods: org.opencv.core.Mat, labels: org.opencv.core.Mat, probs: org.opencv.core.Mat): boolean;
				public predict(samples: org.opencv.core.Mat, results: org.opencv.core.Mat, flags: number): number;
				public getTermCriteria(): org.opencv.core.TermCriteria;
				public setTermCriteria(val: org.opencv.core.TermCriteria): void;
				public trainE(samples: org.opencv.core.Mat, means0: org.opencv.core.Mat, covs0: org.opencv.core.Mat, weights0: org.opencv.core.Mat, logLikelihoods: org.opencv.core.Mat, labels: org.opencv.core.Mat, probs: org.opencv.core.Mat): boolean;
				public getClustersNumber(): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module ml {
			export class KNearest extends org.opencv.ml.StatModel {
				public static class: java.lang.Class<org.opencv.ml.KNearest>;
				public static BRUTE_FORCE: number;
				public static KDTREE: number;
				public setAlgorithmType(val: number): void;
				public constructor(addr: number);
				public static __fromPtr__(addr: number): org.opencv.ml.KNearest;
				public getDefaultK(): number;
				public finalize(): void;
				public getAlgorithmType(): number;
				public static __fromPtr__(addr: number): org.opencv.ml.StatModel;
				public findNearest(samples: org.opencv.core.Mat, k: number, results: org.opencv.core.Mat, neighborResponses: org.opencv.core.Mat, dist: org.opencv.core.Mat): number;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public getIsClassifier(): boolean;
				public findNearest(samples: org.opencv.core.Mat, k: number, results: org.opencv.core.Mat): number;
				public getEmax(): number;
				public findNearest(samples: org.opencv.core.Mat, k: number, results: org.opencv.core.Mat, neighborResponses: org.opencv.core.Mat): number;
				public static create(): org.opencv.ml.KNearest;
				public setDefaultK(val: number): void;
				public setEmax(val: number): void;
				public setIsClassifier(val: boolean): void;
				public static load(filepath: string): org.opencv.ml.KNearest;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module ml {
			export class LogisticRegression extends org.opencv.ml.StatModel {
				public static class: java.lang.Class<org.opencv.ml.LogisticRegression>;
				public static BATCH: number;
				public static MINI_BATCH: number;
				public static REG_DISABLE: number;
				public static REG_L1: number;
				public static REG_L2: number;
				public setRegularization(val: number): void;
				public predict(samples: org.opencv.core.Mat, results: org.opencv.core.Mat): number;
				public getRegularization(): number;
				public get_learnt_thetas(): org.opencv.core.Mat;
				public predict(samples: org.opencv.core.Mat): number;
				public constructor(addr: number);
				public getTrainMethod(): number;
				public static load(filepath: string, nodeName: string): org.opencv.ml.LogisticRegression;
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.ml.StatModel;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public getMiniBatchSize(): number;
				public setIterations(val: number): void;
				public setLearningRate(val: number): void;
				public getLearningRate(): number;
				public predict(samples: org.opencv.core.Mat, results: org.opencv.core.Mat, flags: number): number;
				public static load(filepath: string): org.opencv.ml.LogisticRegression;
				public getTermCriteria(): org.opencv.core.TermCriteria;
				public static create(): org.opencv.ml.LogisticRegression;
				public getIterations(): number;
				public static __fromPtr__(addr: number): org.opencv.ml.LogisticRegression;
				public setTrainMethod(val: number): void;
				public setTermCriteria(val: org.opencv.core.TermCriteria): void;
				public setMiniBatchSize(val: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module ml {
			export class Ml extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.ml.Ml>;
				public static TEST_ERROR: number;
				public static TRAIN_ERROR: number;
				public static ROW_SAMPLE: number;
				public static COL_SAMPLE: number;
				public static VAR_NUMERICAL: number;
				public static VAR_ORDERED: number;
				public static VAR_CATEGORICAL: number;
				public constructor();
			}
		}
	}
}

declare module org {
	export module opencv {
		export module ml {
			export class NormalBayesClassifier extends org.opencv.ml.StatModel {
				public static class: java.lang.Class<org.opencv.ml.NormalBayesClassifier>;
				public predictProb(inputs: org.opencv.core.Mat, outputs: org.opencv.core.Mat, outputProbs: org.opencv.core.Mat, flags: number): number;
				public static create(): org.opencv.ml.NormalBayesClassifier;
				public static __fromPtr__(addr: number): org.opencv.ml.NormalBayesClassifier;
				public constructor(addr: number);
				public finalize(): void;
				public predictProb(inputs: org.opencv.core.Mat, outputs: org.opencv.core.Mat, outputProbs: org.opencv.core.Mat): number;
				public static __fromPtr__(addr: number): org.opencv.ml.StatModel;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public static load(filepath: string, nodeName: string): org.opencv.ml.NormalBayesClassifier;
				public static load(filepath: string): org.opencv.ml.NormalBayesClassifier;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module ml {
			export class ParamGrid extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.ml.ParamGrid>;
				public nativeObj: number;
				public static create(): org.opencv.ml.ParamGrid;
				public get_maxVal(): number;
				public constructor(addr: number);
				public static create(minVal: number, param1: number): org.opencv.ml.ParamGrid;
				public finalize(): void;
				public getNativeObjAddr(): number;
				public static __fromPtr__(addr: number): org.opencv.ml.ParamGrid;
				public set_logStep(logStep: number): void;
				public get_logStep(): number;
				public static create(minVal: number, param1: number, maxVal: number): org.opencv.ml.ParamGrid;
				public set_maxVal(maxVal: number): void;
				public get_minVal(): number;
				public static create(minVal: number): org.opencv.ml.ParamGrid;
				public set_minVal(minVal: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module ml {
			export class RTrees extends org.opencv.ml.DTrees {
				public static class: java.lang.Class<org.opencv.ml.RTrees>;
				public static create(): org.opencv.ml.RTrees;
				public setCalculateVarImportance(val: boolean): void;
				public getActiveVarCount(): number;
				public static load(filepath: string): org.opencv.ml.RTrees;
				public constructor(addr: number);
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.ml.StatModel;
				public setActiveVarCount(val: number): void;
				public static load(filepath: string, nodeName: string): org.opencv.ml.RTrees;
				public static __fromPtr__(addr: number): org.opencv.ml.DTrees;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public getCalculateVarImportance(): boolean;
				public getOOBError(): number;
				public static load(filepath: string, nodeName: string): org.opencv.ml.DTrees;
				public static __fromPtr__(addr: number): org.opencv.ml.RTrees;
				public getVarImportance(): org.opencv.core.Mat;
				public getVotes(samples: org.opencv.core.Mat, results: org.opencv.core.Mat, flags: number): void;
				public getTermCriteria(): org.opencv.core.TermCriteria;
				public setTermCriteria(val: org.opencv.core.TermCriteria): void;
				public static create(): org.opencv.ml.DTrees;
				public static load(filepath: string): org.opencv.ml.DTrees;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module ml {
			export class SVM extends org.opencv.ml.StatModel {
				public static class: java.lang.Class<org.opencv.ml.SVM>;
				public static CUSTOM: number;
				public static LINEAR: number;
				public static POLY: number;
				public static RBF: number;
				public static SIGMOID: number;
				public static CHI2: number;
				public static INTER: number;
				public static C: number;
				public static GAMMA: number;
				public static P: number;
				public static NU: number;
				public static COEF: number;
				public static DEGREE: number;
				public static C_SVC: number;
				public static NU_SVC: number;
				public static ONE_CLASS: number;
				public static EPS_SVR: number;
				public static NU_SVR: number;
				public setKernel(kernelType: number): void;
				public trainAuto(samples: org.opencv.core.Mat, layout: number, responses: org.opencv.core.Mat): boolean;
				public setDegree(val: number): void;
				public setC(val: number): void;
				public getDecisionFunction(i: number, alpha: org.opencv.core.Mat, svidx: org.opencv.core.Mat): number;
				public getType(): number;
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.ml.StatModel;
				public trainAuto(samples: org.opencv.core.Mat, layout: number, responses: org.opencv.core.Mat, kFold: number, Cgrid: org.opencv.ml.ParamGrid, gammaGrid: org.opencv.ml.ParamGrid, pGrid: org.opencv.ml.ParamGrid, nuGrid: org.opencv.ml.ParamGrid, coeffGrid: org.opencv.ml.ParamGrid, degreeGrid: org.opencv.ml.ParamGrid, balanced: boolean): boolean;
				public setClassWeights(val: org.opencv.core.Mat): void;
				public getClassWeights(): org.opencv.core.Mat;
				public trainAuto(samples: org.opencv.core.Mat, layout: number, responses: org.opencv.core.Mat, kFold: number, Cgrid: org.opencv.ml.ParamGrid, gammaGrid: org.opencv.ml.ParamGrid, pGrid: org.opencv.ml.ParamGrid, nuGrid: org.opencv.ml.ParamGrid, coeffGrid: org.opencv.ml.ParamGrid): boolean;
				public setCoef0(val: number): void;
				public getGamma(): number;
				public setGamma(val: number): void;
				public trainAuto(samples: org.opencv.core.Mat, layout: number, responses: org.opencv.core.Mat, kFold: number, Cgrid: org.opencv.ml.ParamGrid): boolean;
				public getKernelType(): number;
				public trainAuto(samples: org.opencv.core.Mat, layout: number, responses: org.opencv.core.Mat, kFold: number, Cgrid: org.opencv.ml.ParamGrid, gammaGrid: org.opencv.ml.ParamGrid, pGrid: org.opencv.ml.ParamGrid): boolean;
				public static getDefaultGridPtr(param_id: number): org.opencv.ml.ParamGrid;
				public constructor(addr: number);
				public getUncompressedSupportVectors(): org.opencv.core.Mat;
				public static __fromPtr__(addr: number): org.opencv.ml.SVM;
				public static create(): org.opencv.ml.SVM;
				public getCoef0(): number;
				public setNu(val: number): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public getP(): number;
				public trainAuto(samples: org.opencv.core.Mat, layout: number, responses: org.opencv.core.Mat, kFold: number, Cgrid: org.opencv.ml.ParamGrid, gammaGrid: org.opencv.ml.ParamGrid): boolean;
				public trainAuto(samples: org.opencv.core.Mat, layout: number, responses: org.opencv.core.Mat, kFold: number): boolean;
				public getSupportVectors(): org.opencv.core.Mat;
				public getNu(): number;
				public getC(): number;
				public trainAuto(samples: org.opencv.core.Mat, layout: number, responses: org.opencv.core.Mat, kFold: number, Cgrid: org.opencv.ml.ParamGrid, gammaGrid: org.opencv.ml.ParamGrid, pGrid: org.opencv.ml.ParamGrid, nuGrid: org.opencv.ml.ParamGrid): boolean;
				public setP(val: number): void;
				public getTermCriteria(): org.opencv.core.TermCriteria;
				public setType(val: number): void;
				public setTermCriteria(val: org.opencv.core.TermCriteria): void;
				public getDegree(): number;
				public trainAuto(samples: org.opencv.core.Mat, layout: number, responses: org.opencv.core.Mat, kFold: number, Cgrid: org.opencv.ml.ParamGrid, gammaGrid: org.opencv.ml.ParamGrid, pGrid: org.opencv.ml.ParamGrid, nuGrid: org.opencv.ml.ParamGrid, coeffGrid: org.opencv.ml.ParamGrid, degreeGrid: org.opencv.ml.ParamGrid): boolean;
				public static load(filepath: string): org.opencv.ml.SVM;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module ml {
			export class SVMSGD extends org.opencv.ml.StatModel {
				public static class: java.lang.Class<org.opencv.ml.SVMSGD>;
				public static SOFT_MARGIN: number;
				public static HARD_MARGIN: number;
				public static SGD: number;
				public static ASGD: number;
				public static create(): org.opencv.ml.SVMSGD;
				public getMarginRegularization(): number;
				public getWeights(): org.opencv.core.Mat;
				public static load(filepath: string, nodeName: string): org.opencv.ml.SVMSGD;
				public finalize(): void;
				public getSvmsgdType(): number;
				public static __fromPtr__(addr: number): org.opencv.ml.StatModel;
				public setOptimalParameters(svmsgdType: number): void;
				public getStepDecreasingPower(): number;
				public static __fromPtr__(addr: number): org.opencv.ml.SVMSGD;
				public setOptimalParameters(): void;
				public setSvmsgdType(svmsgdType: number): void;
				public getShift(): number;
				public setInitialStepSize(InitialStepSize: number): void;
				public setStepDecreasingPower(stepDecreasingPower: number): void;
				public constructor(addr: number);
				public getMarginType(): number;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public setMarginType(marginType: number): void;
				public getInitialStepSize(): number;
				public getTermCriteria(): org.opencv.core.TermCriteria;
				public setTermCriteria(val: org.opencv.core.TermCriteria): void;
				public setOptimalParameters(svmsgdType: number, marginType: number): void;
				public setMarginRegularization(marginRegularization: number): void;
				public static load(filepath: string): org.opencv.ml.SVMSGD;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module ml {
			export class StatModel extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.ml.StatModel>;
				public static UPDATE_MODEL: number;
				public static RAW_OUTPUT: number;
				public static COMPRESSED_INPUT: number;
				public static PREPROCESSED_INPUT: number;
				public predict(samples: org.opencv.core.Mat, results: org.opencv.core.Mat): number;
				public isClassifier(): boolean;
				public train(trainData: org.opencv.ml.TrainData): boolean;
				public predict(samples: org.opencv.core.Mat): number;
				public constructor(addr: number);
				public calcError(data: org.opencv.ml.TrainData, test: boolean, resp: org.opencv.core.Mat): number;
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.ml.StatModel;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public train(samples: org.opencv.core.Mat, layout: number, responses: org.opencv.core.Mat): boolean;
				public predict(samples: org.opencv.core.Mat, results: org.opencv.core.Mat, flags: number): number;
				public isTrained(): boolean;
				public getVarCount(): number;
				public empty(): boolean;
				public train(trainData: org.opencv.ml.TrainData, flags: number): boolean;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module ml {
			export class TrainData extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.ml.TrainData>;
				public nativeObj: number;
				public getTestSamples(): org.opencv.core.Mat;
				public static __fromPtr__(addr: number): org.opencv.ml.TrainData;
				public getTrainSamples(layout: number, compressSamples: boolean, compressVars: boolean): org.opencv.core.Mat;
				public getTrainSamples(layout: number, compressSamples: boolean): org.opencv.core.Mat;
				public getNTrainSamples(): number;
				public getCatOfs(): org.opencv.core.Mat;
				public getLayout(): number;
				public getResponseType(): number;
				public getClassLabels(): org.opencv.core.Mat;
				public getSamples(): org.opencv.core.Mat;
				public getDefaultSubstValues(): org.opencv.core.Mat;
				public getTrainSampleIdx(): org.opencv.core.Mat;
				public getNVars(): number;
				public static getSubMatrix(matrix: org.opencv.core.Mat, idx: org.opencv.core.Mat, layout: number): org.opencv.core.Mat;
				public getTrainSampleWeights(): org.opencv.core.Mat;
				public getNAllVars(): number;
				public static getSubVector(vec: org.opencv.core.Mat, idx: org.opencv.core.Mat): org.opencv.core.Mat;
				public getNTestSamples(): number;
				public getNSamples(): number;
				public getTestSampleIdx(): org.opencv.core.Mat;
				public getVarSymbolFlags(): org.opencv.core.Mat;
				public setTrainTestSplit(count: number): void;
				public getTestNormCatResponses(): org.opencv.core.Mat;
				public getCatMap(): org.opencv.core.Mat;
				public getTrainSamples(): org.opencv.core.Mat;
				public static create(samples: org.opencv.core.Mat, layout: number, responses: org.opencv.core.Mat, varIdx: org.opencv.core.Mat, sampleIdx: org.opencv.core.Mat, sampleWeights: org.opencv.core.Mat, varType: org.opencv.core.Mat): org.opencv.ml.TrainData;
				public getResponses(): org.opencv.core.Mat;
				public getNormCatResponses(): org.opencv.core.Mat;
				public getVarType(): org.opencv.core.Mat;
				public getTestSampleWeights(): org.opencv.core.Mat;
				public finalize(): void;
				public setTrainTestSplitRatio(ratio: number): void;
				public getSampleWeights(): org.opencv.core.Mat;
				public static create(samples: org.opencv.core.Mat, layout: number, responses: org.opencv.core.Mat, varIdx: org.opencv.core.Mat, sampleIdx: org.opencv.core.Mat): org.opencv.ml.TrainData;
				public getMissing(): org.opencv.core.Mat;
				public getVarIdx(): org.opencv.core.Mat;
				public static create(samples: org.opencv.core.Mat, layout: number, responses: org.opencv.core.Mat, varIdx: org.opencv.core.Mat, sampleIdx: org.opencv.core.Mat, sampleWeights: org.opencv.core.Mat): org.opencv.ml.TrainData;
				public getTestResponses(): org.opencv.core.Mat;
				public getTrainResponses(): org.opencv.core.Mat;
				public setTrainTestSplitRatio(ratio: number, param1: boolean): void;
				public getValues(vi: number, sidx: org.opencv.core.Mat, values: number): void;
				public getSample(varIdx: org.opencv.core.Mat, sidx: number, buf: number): void;
				public getNames(names: java.util.List<string>): void;
				public constructor(addr: number);
				public getNativeObjAddr(): number;
				public setTrainTestSplit(count: number, shuffle: boolean): void;
				public static create(samples: org.opencv.core.Mat, layout: number, responses: org.opencv.core.Mat): org.opencv.ml.TrainData;
				public getTrainNormCatResponses(): org.opencv.core.Mat;
				public static create(samples: org.opencv.core.Mat, layout: number, responses: org.opencv.core.Mat, varIdx: org.opencv.core.Mat): org.opencv.ml.TrainData;
				public getTrainSamples(layout: number): org.opencv.core.Mat;
				public getCatCount(vi: number): number;
				public shuffleTrainTest(): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class ArucoDetector extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.objdetect.ArucoDetector>;
				public setDetectorParameters(detectorParameters: org.opencv.objdetect.DetectorParameters): void;
				public constructor(addr: number);
				public getDetectorParameters(): org.opencv.objdetect.DetectorParameters;
				public constructor(dictionary: org.opencv.objdetect.Dictionary, detectorParams: org.opencv.objdetect.DetectorParameters, refineParams: org.opencv.objdetect.RefineParameters);
				public detectMarkers(image: org.opencv.core.Mat, corners: java.util.List<org.opencv.core.Mat>, ids: org.opencv.core.Mat, rejectedImgPoints: java.util.List<org.opencv.core.Mat>): void;
				public finalize(): void;
				public constructor(dictionary: org.opencv.objdetect.Dictionary, detectorParams: org.opencv.objdetect.DetectorParameters);
				public detectMarkers(image: org.opencv.core.Mat, corners: java.util.List<org.opencv.core.Mat>, ids: org.opencv.core.Mat): void;
				public refineDetectedMarkers(image: org.opencv.core.Mat, board: org.opencv.objdetect.Board, detectedCorners: java.util.List<org.opencv.core.Mat>, detectedIds: org.opencv.core.Mat, rejectedCorners: java.util.List<org.opencv.core.Mat>): void;
				public refineDetectedMarkers(image: org.opencv.core.Mat, board: org.opencv.objdetect.Board, detectedCorners: java.util.List<org.opencv.core.Mat>, detectedIds: org.opencv.core.Mat, rejectedCorners: java.util.List<org.opencv.core.Mat>, cameraMatrix: org.opencv.core.Mat): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public refineDetectedMarkers(image: org.opencv.core.Mat, board: org.opencv.objdetect.Board, detectedCorners: java.util.List<org.opencv.core.Mat>, detectedIds: org.opencv.core.Mat, rejectedCorners: java.util.List<org.opencv.core.Mat>, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat, recoveredIdxs: org.opencv.core.Mat): void;
				public refineDetectedMarkers(image: org.opencv.core.Mat, board: org.opencv.objdetect.Board, detectedCorners: java.util.List<org.opencv.core.Mat>, detectedIds: org.opencv.core.Mat, rejectedCorners: java.util.List<org.opencv.core.Mat>, cameraMatrix: org.opencv.core.Mat, distCoeffs: org.opencv.core.Mat): void;
				public constructor();
				public getRefineParameters(): org.opencv.objdetect.RefineParameters;
				public constructor(dictionary: org.opencv.objdetect.Dictionary);
				public setRefineParameters(refineParameters: org.opencv.objdetect.RefineParameters): void;
				public setDictionary(dictionary: org.opencv.objdetect.Dictionary): void;
				public getDictionary(): org.opencv.objdetect.Dictionary;
				public static __fromPtr__(addr: number): org.opencv.objdetect.ArucoDetector;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class BarcodeDetector extends org.opencv.objdetect.GraphicalCodeDetector {
				public static class: java.lang.Class<org.opencv.objdetect.BarcodeDetector>;
				public static __fromPtr__(addr: number): org.opencv.objdetect.GraphicalCodeDetector;
				public decodeWithType(img: org.opencv.core.Mat, points: org.opencv.core.Mat, decoded_info: java.util.List<string>, decoded_type: java.util.List<string>): boolean;
				public constructor(addr: number);
				public finalize(): void;
				public detectAndDecodeWithType(img: org.opencv.core.Mat, decoded_info: java.util.List<string>, decoded_type: java.util.List<string>, points: org.opencv.core.Mat): boolean;
				public detectAndDecodeWithType(img: org.opencv.core.Mat, decoded_info: java.util.List<string>, decoded_type: java.util.List<string>): boolean;
				public constructor(prototxt_path: string, model_path: string);
				public static __fromPtr__(addr: number): org.opencv.objdetect.BarcodeDetector;
				public constructor();
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class BaseCascadeClassifier extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.objdetect.BaseCascadeClassifier>;
				public constructor(addr: number);
				public static __fromPtr__(addr: number): org.opencv.objdetect.BaseCascadeClassifier;
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class Board extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.objdetect.Board>;
				public nativeObj: number;
				public generateImage(outSize: org.opencv.core.Size, img: org.opencv.core.Mat, marginSize: number, borderBits: number): void;
				public constructor(addr: number);
				public static __fromPtr__(addr: number): org.opencv.objdetect.Board;
				public constructor(objPoints: java.util.List<org.opencv.core.Mat>, dictionary: org.opencv.objdetect.Dictionary, ids: org.opencv.core.Mat);
				public finalize(): void;
				public getNativeObjAddr(): number;
				public getObjPoints(): java.util.List<org.opencv.core.MatOfPoint3f>;
				public getRightBottomCorner(): org.opencv.core.Point3;
				public generateImage(outSize: org.opencv.core.Size, img: org.opencv.core.Mat): void;
				public generateImage(outSize: org.opencv.core.Size, img: org.opencv.core.Mat, marginSize: number): void;
				public getDictionary(): org.opencv.objdetect.Dictionary;
				public matchImagePoints(detectedCorners: java.util.List<org.opencv.core.Mat>, detectedIds: org.opencv.core.Mat, objPoints: org.opencv.core.Mat, imgPoints: org.opencv.core.Mat): void;
				public getIds(): org.opencv.core.MatOfInt;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class CascadeClassifier extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.objdetect.CascadeClassifier>;
				public nativeObj: number;
				public detectMultiScale3(image: org.opencv.core.Mat, objects: org.opencv.core.MatOfRect, rejectLevels: org.opencv.core.MatOfInt, levelWeights: org.opencv.core.MatOfDouble, scaleFactor: number, param5: number, minNeighbors: number, flags: org.opencv.core.Size): void;
				public detectMultiScale2(image: org.opencv.core.Mat, objects: org.opencv.core.MatOfRect, numDetections: org.opencv.core.MatOfInt, scaleFactor: number, param4: number, minNeighbors: number, flags: org.opencv.core.Size, minSize: org.opencv.core.Size): void;
				public finalize(): void;
				public detectMultiScale(image: org.opencv.core.Mat, objects: org.opencv.core.MatOfRect, scaleFactor: number, param3: number, minNeighbors: number): void;
				public static __fromPtr__(addr: number): org.opencv.objdetect.CascadeClassifier;
				public constructor();
				public detectMultiScale2(image: org.opencv.core.Mat, objects: org.opencv.core.MatOfRect, numDetections: org.opencv.core.MatOfInt): void;
				public detectMultiScale2(image: org.opencv.core.Mat, objects: org.opencv.core.MatOfRect, numDetections: org.opencv.core.MatOfInt, scaleFactor: number, param4: number, minNeighbors: number, flags: org.opencv.core.Size): void;
				public detectMultiScale3(image: org.opencv.core.Mat, objects: org.opencv.core.MatOfRect, rejectLevels: org.opencv.core.MatOfInt, levelWeights: org.opencv.core.MatOfDouble): void;
				public detectMultiScale3(image: org.opencv.core.Mat, objects: org.opencv.core.MatOfRect, rejectLevels: org.opencv.core.MatOfInt, levelWeights: org.opencv.core.MatOfDouble, scaleFactor: number, param5: number, minNeighbors: number): void;
				public empty(): boolean;
				public detectMultiScale2(image: org.opencv.core.Mat, objects: org.opencv.core.MatOfRect, numDetections: org.opencv.core.MatOfInt, scaleFactor: number, param4: number, minNeighbors: number): void;
				public constructor(filename: string);
				public detectMultiScale2(image: org.opencv.core.Mat, objects: org.opencv.core.MatOfRect, numDetections: org.opencv.core.MatOfInt, scaleFactor: number): void;
				public static convert(oldcascade: string, newcascade: string): boolean;
				public constructor(addr: number);
				public getNativeObjAddr(): number;
				public detectMultiScale2(image: org.opencv.core.Mat, objects: org.opencv.core.MatOfRect, numDetections: org.opencv.core.MatOfInt, scaleFactor: number, param4: number): void;
				public detectMultiScale3(image: org.opencv.core.Mat, objects: org.opencv.core.MatOfRect, rejectLevels: org.opencv.core.MatOfInt, levelWeights: org.opencv.core.MatOfDouble, scaleFactor: number, param5: number, minNeighbors: number, flags: org.opencv.core.Size, minSize: org.opencv.core.Size, maxSize: boolean): void;
				public getFeatureType(): number;
				public detectMultiScale(image: org.opencv.core.Mat, objects: org.opencv.core.MatOfRect): void;
				public load(filename: string): boolean;
				public detectMultiScale3(image: org.opencv.core.Mat, objects: org.opencv.core.MatOfRect, rejectLevels: org.opencv.core.MatOfInt, levelWeights: org.opencv.core.MatOfDouble, scaleFactor: number): void;
				public isOldFormatCascade(): boolean;
				public detectMultiScale3(image: org.opencv.core.Mat, objects: org.opencv.core.MatOfRect, rejectLevels: org.opencv.core.MatOfInt, levelWeights: org.opencv.core.MatOfDouble, scaleFactor: number, param5: number, minNeighbors: number, flags: org.opencv.core.Size, minSize: org.opencv.core.Size): void;
				public detectMultiScale(image: org.opencv.core.Mat, objects: org.opencv.core.MatOfRect, scaleFactor: number, param3: number): void;
				public detectMultiScale(image: org.opencv.core.Mat, objects: org.opencv.core.MatOfRect, scaleFactor: number, param3: number, minNeighbors: number, flags: org.opencv.core.Size): void;
				public getOriginalWindowSize(): org.opencv.core.Size;
				public detectMultiScale(image: org.opencv.core.Mat, objects: org.opencv.core.MatOfRect, scaleFactor: number, param3: number, minNeighbors: number, flags: org.opencv.core.Size, minSize: org.opencv.core.Size): void;
				public detectMultiScale3(image: org.opencv.core.Mat, objects: org.opencv.core.MatOfRect, rejectLevels: org.opencv.core.MatOfInt, levelWeights: org.opencv.core.MatOfDouble, scaleFactor: number, param5: number): void;
				public detectMultiScale(image: org.opencv.core.Mat, objects: org.opencv.core.MatOfRect, scaleFactor: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class CharucoBoard extends org.opencv.objdetect.Board {
				public static class: java.lang.Class<org.opencv.objdetect.CharucoBoard>;
				public getChessboardCorners(): org.opencv.core.MatOfPoint3f;
				public constructor(size: org.opencv.core.Size, squareLength: number, markerLength: number, dictionary: org.opencv.objdetect.Dictionary);
				public checkCharucoCornersCollinear(charucoIds: org.opencv.core.Mat): boolean;
				public getMarkerLength(): number;
				public constructor(addr: number);
				public constructor(objPoints: java.util.List<org.opencv.core.Mat>, dictionary: org.opencv.objdetect.Dictionary, ids: org.opencv.core.Mat);
				public static __fromPtr__(addr: number): org.opencv.objdetect.Board;
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.objdetect.CharucoBoard;
				public setLegacyPattern(legacyPattern: boolean): void;
				public getChessboardSize(): org.opencv.core.Size;
				public getSquareLength(): number;
				public constructor(size: org.opencv.core.Size, squareLength: number, markerLength: number, dictionary: org.opencv.objdetect.Dictionary, ids: org.opencv.core.Mat);
				public getLegacyPattern(): boolean;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class CharucoDetector extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.objdetect.CharucoDetector>;
				public static __fromPtr__(addr: number): org.opencv.objdetect.CharucoDetector;
				public setCharucoParameters(charucoParameters: org.opencv.objdetect.CharucoParameters): void;
				public constructor(board: org.opencv.objdetect.CharucoBoard, charucoParams: org.opencv.objdetect.CharucoParameters, detectorParams: org.opencv.objdetect.DetectorParameters);
				public setDetectorParameters(detectorParameters: org.opencv.objdetect.DetectorParameters): void;
				public detectDiamonds(image: org.opencv.core.Mat, diamondCorners: java.util.List<org.opencv.core.Mat>, diamondIds: org.opencv.core.Mat, markerCorners: java.util.List<org.opencv.core.Mat>): void;
				public getCharucoParameters(): org.opencv.objdetect.CharucoParameters;
				public constructor(addr: number);
				public constructor(board: org.opencv.objdetect.CharucoBoard);
				public getDetectorParameters(): org.opencv.objdetect.DetectorParameters;
				public getBoard(): org.opencv.objdetect.CharucoBoard;
				public finalize(): void;
				public detectBoard(image: org.opencv.core.Mat, charucoCorners: org.opencv.core.Mat, charucoIds: org.opencv.core.Mat): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public detectBoard(image: org.opencv.core.Mat, charucoCorners: org.opencv.core.Mat, charucoIds: org.opencv.core.Mat, markerCorners: java.util.List<org.opencv.core.Mat>): void;
				public getRefineParameters(): org.opencv.objdetect.RefineParameters;
				public detectDiamonds(image: org.opencv.core.Mat, diamondCorners: java.util.List<org.opencv.core.Mat>, diamondIds: org.opencv.core.Mat): void;
				public constructor(board: org.opencv.objdetect.CharucoBoard, charucoParams: org.opencv.objdetect.CharucoParameters);
				public setRefineParameters(refineParameters: org.opencv.objdetect.RefineParameters): void;
				public detectDiamonds(image: org.opencv.core.Mat, diamondCorners: java.util.List<org.opencv.core.Mat>, diamondIds: org.opencv.core.Mat, markerCorners: java.util.List<org.opencv.core.Mat>, markerIds: org.opencv.core.Mat): void;
				public constructor(board: org.opencv.objdetect.CharucoBoard, charucoParams: org.opencv.objdetect.CharucoParameters, detectorParams: org.opencv.objdetect.DetectorParameters, refineParams: org.opencv.objdetect.RefineParameters);
				public setBoard(board: org.opencv.objdetect.CharucoBoard): void;
				public detectBoard(image: org.opencv.core.Mat, charucoCorners: org.opencv.core.Mat, charucoIds: org.opencv.core.Mat, markerCorners: java.util.List<org.opencv.core.Mat>, markerIds: org.opencv.core.Mat): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class CharucoParameters extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.objdetect.CharucoParameters>;
				public nativeObj: number;
				public set_cameraMatrix(cameraMatrix: org.opencv.core.Mat): void;
				public set_tryRefineMarkers(tryRefineMarkers: boolean): void;
				public static __fromPtr__(addr: number): org.opencv.objdetect.CharucoParameters;
				public set_distCoeffs(distCoeffs: org.opencv.core.Mat): void;
				public constructor(addr: number);
				public finalize(): void;
				public getNativeObjAddr(): number;
				public get_minMarkers(): number;
				public set_minMarkers(minMarkers: number): void;
				public constructor();
				public get_cameraMatrix(): org.opencv.core.Mat;
				public get_distCoeffs(): org.opencv.core.Mat;
				public get_tryRefineMarkers(): boolean;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class DetectorParameters extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.objdetect.DetectorParameters>;
				public nativeObj: number;
				public set_cornerRefinementMinAccuracy(cornerRefinementMinAccuracy: number): void;
				public set_minOtsuStdDev(minOtsuStdDev: number): void;
				public set_cornerRefinementWinSize(cornerRefinementWinSize: number): void;
				public set_maxErroneousBitsInBorderRate(maxErroneousBitsInBorderRate: number): void;
				public get_adaptiveThreshConstant(): number;
				public get_perspectiveRemoveIgnoredMarginPerCell(): number;
				public get_cornerRefinementMaxIterations(): number;
				public get_maxErroneousBitsInBorderRate(): number;
				public constructor();
				public get_minOtsuStdDev(): number;
				public set_errorCorrectionRate(errorCorrectionRate: number): void;
				public get_aprilTagMaxNmaxima(): number;
				public set_aprilTagMinWhiteBlackDiff(aprilTagMinWhiteBlackDiff: number): void;
				public set_detectInvertedMarker(detectInvertedMarker: boolean): void;
				public set_polygonalApproxAccuracyRate(polygonalApproxAccuracyRate: number): void;
				public get_minSideLengthCanonicalImg(): number;
				public set_minSideLengthCanonicalImg(minSideLengthCanonicalImg: number): void;
				public set_aprilTagMaxNmaxima(aprilTagMaxNmaxima: number): void;
				public get_minMarkerLengthRatioOriginalImg(): number;
				public set_minCornerDistanceRate(minCornerDistanceRate: number): void;
				public set_aprilTagQuadSigma(aprilTagQuadSigma: number): void;
				public get_errorCorrectionRate(): number;
				public set_aprilTagMaxLineFitMse(aprilTagMaxLineFitMse: number): void;
				public get_cornerRefinementMethod(): number;
				public get_polygonalApproxAccuracyRate(): number;
				public get_minMarkerDistanceRate(): number;
				public get_perspectiveRemovePixelPerCell(): number;
				public set_adaptiveThreshWinSizeStep(adaptiveThreshWinSizeStep: number): void;
				public get_aprilTagQuadDecimate(): number;
				public get_aprilTagQuadSigma(): number;
				public get_cornerRefinementWinSize(): number;
				public set_adaptiveThreshWinSizeMax(adaptiveThreshWinSizeMax: number): void;
				public get_adaptiveThreshWinSizeMin(): number;
				public set_markerBorderBits(markerBorderBits: number): void;
				public get_adaptiveThreshWinSizeMax(): number;
				public get_cornerRefinementMinAccuracy(): number;
				public set_adaptiveThreshConstant(adaptiveThreshConstant: number): void;
				public get_markerBorderBits(): number;
				public set_maxMarkerPerimeterRate(maxMarkerPerimeterRate: number): void;
				public set_perspectiveRemovePixelPerCell(perspectiveRemovePixelPerCell: number): void;
				public set_minMarkerLengthRatioOriginalImg(minMarkerLengthRatioOriginalImg: number): void;
				public get_maxMarkerPerimeterRate(): number;
				public static __fromPtr__(addr: number): org.opencv.objdetect.DetectorParameters;
				public set_perspectiveRemoveIgnoredMarginPerCell(perspectiveRemoveIgnoredMarginPerCell: number): void;
				public set_useAruco3Detection(useAruco3Detection: boolean): void;
				public get_minMarkerPerimeterRate(): number;
				public finalize(): void;
				public set_cornerRefinementMaxIterations(cornerRefinementMaxIterations: number): void;
				public set_aprilTagMinClusterPixels(aprilTagMinClusterPixels: number): void;
				public get_adaptiveThreshWinSizeStep(): number;
				public set_aprilTagCriticalRad(aprilTagCriticalRad: number): void;
				public get_detectInvertedMarker(): boolean;
				public get_useAruco3Detection(): boolean;
				public get_minDistanceToBorder(): number;
				public set_minMarkerDistanceRate(minMarkerDistanceRate: number): void;
				public constructor(addr: number);
				public get_aprilTagMaxLineFitMse(): number;
				public getNativeObjAddr(): number;
				public get_aprilTagCriticalRad(): number;
				public get_aprilTagDeglitch(): number;
				public get_minCornerDistanceRate(): number;
				public set_cornerRefinementMethod(cornerRefinementMethod: number): void;
				public set_adaptiveThreshWinSizeMin(adaptiveThreshWinSizeMin: number): void;
				public get_aprilTagMinClusterPixels(): number;
				public set_minDistanceToBorder(minDistanceToBorder: number): void;
				public set_aprilTagQuadDecimate(aprilTagQuadDecimate: number): void;
				public set_aprilTagDeglitch(aprilTagDeglitch: number): void;
				public set_minMarkerPerimeterRate(minMarkerPerimeterRate: number): void;
				public get_aprilTagMinWhiteBlackDiff(): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class Dictionary extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.objdetect.Dictionary>;
				public nativeObj: number;
				public get_bytesList(): org.opencv.core.Mat;
				public constructor(addr: number);
				public constructor(bytesList: org.opencv.core.Mat, _markerSize: number, maxcorr: number);
				public getDistanceToId(bits: org.opencv.core.Mat, id: number): number;
				public static getByteListFromBits(bits: org.opencv.core.Mat): org.opencv.core.Mat;
				public get_maxCorrectionBits(): number;
				public static getBitsFromByteList(byteList: org.opencv.core.Mat, markerSize: number): org.opencv.core.Mat;
				public finalize(): void;
				public getNativeObjAddr(): number;
				public set_markerSize(markerSize: number): void;
				public set_maxCorrectionBits(maxCorrectionBits: number): void;
				public constructor();
				public constructor(bytesList: org.opencv.core.Mat, _markerSize: number);
				public generateImageMarker(id: number, sidePixels: number, _img: org.opencv.core.Mat, borderBits: number): void;
				public generateImageMarker(id: number, sidePixels: number, _img: org.opencv.core.Mat): void;
				public identify(onlyBits: org.opencv.core.Mat, idx: number[], rotation: number[], maxCorrectionRate: number): boolean;
				public getDistanceToId(bits: org.opencv.core.Mat, id: number, allRotations: boolean): number;
				public static __fromPtr__(addr: number): org.opencv.objdetect.Dictionary;
				public set_bytesList(bytesList: org.opencv.core.Mat): void;
				public get_markerSize(): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class FaceDetectorYN extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.objdetect.FaceDetectorYN>;
				public nativeObj: number;
				public static create(model: string, config: string, input_size: org.opencv.core.Size): org.opencv.objdetect.FaceDetectorYN;
				public static create(model: string, config: string, input_size: org.opencv.core.Size, score_threshold: number, nms_threshold: number, top_k: number, backend_id: number, target_id: number): org.opencv.objdetect.FaceDetectorYN;
				public static create(model: string, config: string, input_size: org.opencv.core.Size, score_threshold: number, nms_threshold: number): org.opencv.objdetect.FaceDetectorYN;
				public constructor(addr: number);
				public getNMSThreshold(): number;
				public finalize(): void;
				public getNativeObjAddr(): number;
				public setInputSize(input_size: org.opencv.core.Size): void;
				public static __fromPtr__(addr: number): org.opencv.objdetect.FaceDetectorYN;
				public static create(model: string, config: string, input_size: org.opencv.core.Size, score_threshold: number): org.opencv.objdetect.FaceDetectorYN;
				public static create(model: string, config: string, input_size: org.opencv.core.Size, score_threshold: number, nms_threshold: number, top_k: number): org.opencv.objdetect.FaceDetectorYN;
				public getInputSize(): org.opencv.core.Size;
				public getTopK(): number;
				public getScoreThreshold(): number;
				public detect(image: org.opencv.core.Mat, faces: org.opencv.core.Mat): number;
				public setNMSThreshold(nms_threshold: number): void;
				public setTopK(top_k: number): void;
				public static create(model: string, config: string, input_size: org.opencv.core.Size, score_threshold: number, nms_threshold: number, top_k: number, backend_id: number): org.opencv.objdetect.FaceDetectorYN;
				public setScoreThreshold(score_threshold: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class FaceRecognizerSF extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.objdetect.FaceRecognizerSF>;
				public nativeObj: number;
				public static FR_COSINE: number;
				public static FR_NORM_L2: number;
				public static create(model: string, config: string): org.opencv.objdetect.FaceRecognizerSF;
				public static create(model: string, config: string, backend_id: number, target_id: number): org.opencv.objdetect.FaceRecognizerSF;
				public match(face_feature1: org.opencv.core.Mat, face_feature2: org.opencv.core.Mat): number;
				public match(face_feature1: org.opencv.core.Mat, face_feature2: org.opencv.core.Mat, dis_type: number): number;
				public alignCrop(src_img: org.opencv.core.Mat, face_box: org.opencv.core.Mat, aligned_img: org.opencv.core.Mat): void;
				public constructor(addr: number);
				public finalize(): void;
				public getNativeObjAddr(): number;
				public feature(aligned_img: org.opencv.core.Mat, face_feature: org.opencv.core.Mat): void;
				public static create(model: string, config: string, backend_id: number): org.opencv.objdetect.FaceRecognizerSF;
				public static __fromPtr__(addr: number): org.opencv.objdetect.FaceRecognizerSF;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class GraphicalCodeDetector extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.objdetect.GraphicalCodeDetector>;
				public nativeObj: number;
				public detectAndDecode(img: org.opencv.core.Mat, points: org.opencv.core.Mat, straight_code: org.opencv.core.Mat): string;
				public detectAndDecode(img: org.opencv.core.Mat): string;
				public detectAndDecodeMulti(img: org.opencv.core.Mat, decoded_info: java.util.List<string>, points: org.opencv.core.Mat, straight_code: java.util.List<org.opencv.core.Mat>): boolean;
				public static __fromPtr__(addr: number): org.opencv.objdetect.GraphicalCodeDetector;
				public constructor(addr: number);
				public detectAndDecode(img: org.opencv.core.Mat, points: org.opencv.core.Mat): string;
				public decode(img: org.opencv.core.Mat, points: org.opencv.core.Mat): string;
				public finalize(): void;
				public getNativeObjAddr(): number;
				public detectMulti(img: org.opencv.core.Mat, points: org.opencv.core.Mat): boolean;
				public decode(img: org.opencv.core.Mat, points: org.opencv.core.Mat, straight_code: org.opencv.core.Mat): string;
				public decodeMulti(img: org.opencv.core.Mat, points: org.opencv.core.Mat, decoded_info: java.util.List<string>, straight_code: java.util.List<org.opencv.core.Mat>): boolean;
				public detectAndDecodeMulti(img: org.opencv.core.Mat, decoded_info: java.util.List<string>, points: org.opencv.core.Mat): boolean;
				public detect(img: org.opencv.core.Mat, points: org.opencv.core.Mat): boolean;
				public detectAndDecodeMulti(img: org.opencv.core.Mat, decoded_info: java.util.List<string>): boolean;
				public decodeMulti(img: org.opencv.core.Mat, points: org.opencv.core.Mat, decoded_info: java.util.List<string>): boolean;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class GridBoard extends org.opencv.objdetect.Board {
				public static class: java.lang.Class<org.opencv.objdetect.GridBoard>;
				public static __fromPtr__(addr: number): org.opencv.objdetect.GridBoard;
				public getMarkerLength(): number;
				public constructor(addr: number);
				public constructor(objPoints: java.util.List<org.opencv.core.Mat>, dictionary: org.opencv.objdetect.Dictionary, ids: org.opencv.core.Mat);
				public static __fromPtr__(addr: number): org.opencv.objdetect.Board;
				public finalize(): void;
				public constructor(size: org.opencv.core.Size, markerLength: number, markerSeparation: number, dictionary: org.opencv.objdetect.Dictionary);
				public getGridSize(): org.opencv.core.Size;
				public constructor(size: org.opencv.core.Size, markerLength: number, markerSeparation: number, dictionary: org.opencv.objdetect.Dictionary, ids: org.opencv.core.Mat);
				public getMarkerSeparation(): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class HOGDescriptor extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.objdetect.HOGDescriptor>;
				public nativeObj: number;
				public static DEFAULT_NLEVELS: number;
				public static DESCR_FORMAT_COL_BY_COL: number;
				public static DESCR_FORMAT_ROW_BY_ROW: number;
				public static L2Hys: number;
				public load(filename: string, objname: string): boolean;
				public get_svmDetector(): org.opencv.core.MatOfFloat;
				public constructor(_winSize: org.opencv.core.Size, _blockSize: org.opencv.core.Size, _blockStride: org.opencv.core.Size, _cellSize: org.opencv.core.Size, _nbins: number, _derivAperture: number, _winSigma: number);
				public detectMultiScale(img: org.opencv.core.Mat, foundLocations: org.opencv.core.MatOfRect, foundWeights: org.opencv.core.MatOfDouble, hitThreshold: number, param4: org.opencv.core.Size, winStride: org.opencv.core.Size, padding: number, scale: number): void;
				public constructor();
				public get_signedGradient(): boolean;
				public get_nbins(): number;
				public get_L2HysThreshold(): number;
				public get_winSize(): org.opencv.core.Size;
				public computeGradient(img: org.opencv.core.Mat, grad: org.opencv.core.Mat, angleOfs: org.opencv.core.Mat): void;
				public constructor(filename: string);
				public get_winSigma(): number;
				public constructor(_winSize: org.opencv.core.Size, _blockSize: org.opencv.core.Size, _blockStride: org.opencv.core.Size, _cellSize: org.opencv.core.Size, _nbins: number, _derivAperture: number, _winSigma: number, param7: number, _histogramNormType: number);
				public static getDaimlerPeopleDetector(): org.opencv.core.MatOfFloat;
				public detectMultiScale(img: org.opencv.core.Mat, foundLocations: org.opencv.core.MatOfRect, foundWeights: org.opencv.core.MatOfDouble, hitThreshold: number): void;
				public compute(img: org.opencv.core.Mat, descriptors: org.opencv.core.MatOfFloat, winStride: org.opencv.core.Size, padding: org.opencv.core.Size): void;
				public load(filename: string): boolean;
				public save(filename: string): void;
				public detect(img: org.opencv.core.Mat, foundLocations: org.opencv.core.MatOfPoint, weights: org.opencv.core.MatOfDouble, hitThreshold: number, param4: org.opencv.core.Size, winStride: org.opencv.core.Size, padding: org.opencv.core.MatOfPoint): void;
				public detectMultiScale(img: org.opencv.core.Mat, foundLocations: org.opencv.core.MatOfRect, foundWeights: org.opencv.core.MatOfDouble, hitThreshold: number, param4: org.opencv.core.Size, winStride: org.opencv.core.Size, padding: number, scale: number, param8: boolean): void;
				public getWinSigma(): number;
				public get_nlevels(): number;
				public detect(img: org.opencv.core.Mat, foundLocations: org.opencv.core.MatOfPoint, weights: org.opencv.core.MatOfDouble, hitThreshold: number, param4: org.opencv.core.Size): void;
				public detect(img: org.opencv.core.Mat, foundLocations: org.opencv.core.MatOfPoint, weights: org.opencv.core.MatOfDouble): void;
				public detectMultiScale(img: org.opencv.core.Mat, foundLocations: org.opencv.core.MatOfRect, foundWeights: org.opencv.core.MatOfDouble, hitThreshold: number, param4: org.opencv.core.Size, winStride: org.opencv.core.Size, padding: number): void;
				public compute(img: org.opencv.core.Mat, descriptors: org.opencv.core.MatOfFloat): void;
				public save(filename: string, objname: string): void;
				public finalize(): void;
				public compute(img: org.opencv.core.Mat, descriptors: org.opencv.core.MatOfFloat, winStride: org.opencv.core.Size): void;
				public get_blockStride(): org.opencv.core.Size;
				public get_cellSize(): org.opencv.core.Size;
				public constructor(_winSize: org.opencv.core.Size, _blockSize: org.opencv.core.Size, _blockStride: org.opencv.core.Size, _cellSize: org.opencv.core.Size, _nbins: number, _derivAperture: number, _winSigma: number, param7: number, _histogramNormType: number, _L2HysThreshold: boolean, param10: number, _gammaCorrection: boolean);
				public static __fromPtr__(addr: number): org.opencv.objdetect.HOGDescriptor;
				public constructor(_winSize: org.opencv.core.Size, _blockSize: org.opencv.core.Size, _blockStride: org.opencv.core.Size, _cellSize: org.opencv.core.Size, _nbins: number, _derivAperture: number);
				public detectMultiScale(img: org.opencv.core.Mat, foundLocations: org.opencv.core.MatOfRect, foundWeights: org.opencv.core.MatOfDouble): void;
				public constructor(_winSize: org.opencv.core.Size, _blockSize: org.opencv.core.Size, _blockStride: org.opencv.core.Size, _cellSize: org.opencv.core.Size, _nbins: number, _derivAperture: number, _winSigma: number, param7: number);
				public setSVMDetector(svmdetector: org.opencv.core.Mat): void;
				public computeGradient(img: org.opencv.core.Mat, grad: org.opencv.core.Mat, angleOfs: org.opencv.core.Mat, paddingTL: org.opencv.core.Size, paddingBR: org.opencv.core.Size): void;
				public computeGradient(img: org.opencv.core.Mat, grad: org.opencv.core.Mat, angleOfs: org.opencv.core.Mat, paddingTL: org.opencv.core.Size): void;
				public constructor(_winSize: org.opencv.core.Size, _blockSize: org.opencv.core.Size, _blockStride: org.opencv.core.Size, _cellSize: org.opencv.core.Size, _nbins: number, _derivAperture: number, _winSigma: number, param7: number, _histogramNormType: number, _L2HysThreshold: boolean);
				public detect(img: org.opencv.core.Mat, foundLocations: org.opencv.core.MatOfPoint, weights: org.opencv.core.MatOfDouble, hitThreshold: number, param4: org.opencv.core.Size, winStride: org.opencv.core.Size): void;
				public constructor(addr: number);
				public constructor(_winSize: org.opencv.core.Size, _blockSize: org.opencv.core.Size, _blockStride: org.opencv.core.Size, _cellSize: org.opencv.core.Size, _nbins: number, _derivAperture: number, _winSigma: number, param7: number, _histogramNormType: number, _L2HysThreshold: boolean, param10: number);
				public getNativeObjAddr(): number;
				public get_histogramNormType(): number;
				public compute(img: org.opencv.core.Mat, descriptors: org.opencv.core.MatOfFloat, winStride: org.opencv.core.Size, padding: org.opencv.core.Size, locations: org.opencv.core.MatOfPoint): void;
				public detectMultiScale(img: org.opencv.core.Mat, foundLocations: org.opencv.core.MatOfRect, foundWeights: org.opencv.core.MatOfDouble, hitThreshold: number, param4: org.opencv.core.Size): void;
				public get_derivAperture(): number;
				public static getDefaultPeopleDetector(): org.opencv.core.MatOfFloat;
				public detectMultiScale(img: org.opencv.core.Mat, foundLocations: org.opencv.core.MatOfRect, foundWeights: org.opencv.core.MatOfDouble, hitThreshold: number, param4: org.opencv.core.Size, winStride: org.opencv.core.Size): void;
				public checkDetectorSize(): boolean;
				public detect(img: org.opencv.core.Mat, foundLocations: org.opencv.core.MatOfPoint, weights: org.opencv.core.MatOfDouble, hitThreshold: number): void;
				public constructor(_winSize: org.opencv.core.Size, _blockSize: org.opencv.core.Size, _blockStride: org.opencv.core.Size, _cellSize: org.opencv.core.Size, _nbins: number);
				public getDescriptorSize(): number;
				public get_blockSize(): org.opencv.core.Size;
				public get_gammaCorrection(): boolean;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class Objdetect extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.objdetect.Objdetect>;
				public static CASCADE_DO_CANNY_PRUNING: number;
				public static CASCADE_SCALE_IMAGE: number;
				public static CASCADE_FIND_BIGGEST_OBJECT: number;
				public static CASCADE_DO_ROUGH_SEARCH: number;
				public static DetectionBasedTracker_DETECTED_NOT_SHOWN_YET: number;
				public static DetectionBasedTracker_DETECTED: number;
				public static DetectionBasedTracker_DETECTED_TEMPORARY_LOST: number;
				public static DetectionBasedTracker_WRONG_OBJECT: number;
				public static CORNER_REFINE_NONE: number;
				public static CORNER_REFINE_SUBPIX: number;
				public static CORNER_REFINE_CONTOUR: number;
				public static CORNER_REFINE_APRILTAG: number;
				public static DICT_4X4_50: number;
				public static DICT_4X4_100: number;
				public static DICT_4X4_250: number;
				public static DICT_4X4_1000: number;
				public static DICT_5X5_50: number;
				public static DICT_5X5_100: number;
				public static DICT_5X5_250: number;
				public static DICT_5X5_1000: number;
				public static DICT_6X6_50: number;
				public static DICT_6X6_100: number;
				public static DICT_6X6_250: number;
				public static DICT_6X6_1000: number;
				public static DICT_7X7_50: number;
				public static DICT_7X7_100: number;
				public static DICT_7X7_250: number;
				public static DICT_7X7_1000: number;
				public static DICT_ARUCO_ORIGINAL: number;
				public static DICT_APRILTAG_16h5: number;
				public static DICT_APRILTAG_25h9: number;
				public static DICT_APRILTAG_36h10: number;
				public static DICT_APRILTAG_36h11: number;
				public static DICT_ARUCO_MIP_36h12: number;
				public static drawDetectedDiamonds(image: org.opencv.core.Mat, diamondCorners: java.util.List<org.opencv.core.Mat>): void;
				public static drawDetectedCornersCharuco(image: org.opencv.core.Mat, charucoCorners: org.opencv.core.Mat, charucoIds: org.opencv.core.Mat): void;
				public static generateImageMarker(dictionary: org.opencv.objdetect.Dictionary, id: number, sidePixels: number, img: org.opencv.core.Mat, borderBits: number): void;
				public static groupRectangles(rectList: org.opencv.core.MatOfRect, weights: org.opencv.core.MatOfInt, groupThreshold: number, eps: number): void;
				public static getPredefinedDictionary(dict: number): org.opencv.objdetect.Dictionary;
				public constructor();
				public static drawDetectedMarkers(image: org.opencv.core.Mat, corners: java.util.List<org.opencv.core.Mat>, ids: org.opencv.core.Mat, borderColor: org.opencv.core.Scalar): void;
				public static groupRectangles(rectList: org.opencv.core.MatOfRect, weights: org.opencv.core.MatOfInt, groupThreshold: number): void;
				public static drawDetectedCornersCharuco(image: org.opencv.core.Mat, charucoCorners: org.opencv.core.Mat, charucoIds: org.opencv.core.Mat, cornerColor: org.opencv.core.Scalar): void;
				public static extendDictionary(nMarkers: number, markerSize: number, baseDictionary: org.opencv.objdetect.Dictionary, randomSeed: number): org.opencv.objdetect.Dictionary;
				public static drawDetectedMarkers(image: org.opencv.core.Mat, corners: java.util.List<org.opencv.core.Mat>, ids: org.opencv.core.Mat): void;
				public static generateImageMarker(dictionary: org.opencv.objdetect.Dictionary, id: number, sidePixels: number, img: org.opencv.core.Mat): void;
				public static extendDictionary(nMarkers: number, markerSize: number, baseDictionary: org.opencv.objdetect.Dictionary): org.opencv.objdetect.Dictionary;
				public static drawDetectedCornersCharuco(image: org.opencv.core.Mat, charucoCorners: org.opencv.core.Mat): void;
				public static extendDictionary(nMarkers: number, markerSize: number): org.opencv.objdetect.Dictionary;
				public static drawDetectedDiamonds(image: org.opencv.core.Mat, diamondCorners: java.util.List<org.opencv.core.Mat>, diamondIds: org.opencv.core.Mat): void;
				public static drawDetectedMarkers(image: org.opencv.core.Mat, corners: java.util.List<org.opencv.core.Mat>): void;
				public static drawDetectedDiamonds(image: org.opencv.core.Mat, diamondCorners: java.util.List<org.opencv.core.Mat>, diamondIds: org.opencv.core.Mat, borderColor: org.opencv.core.Scalar): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class QRCodeDetector extends org.opencv.objdetect.GraphicalCodeDetector {
				public static class: java.lang.Class<org.opencv.objdetect.QRCodeDetector>;
				public setEpsX(epsX: number): org.opencv.objdetect.QRCodeDetector;
				public detectAndDecodeCurved(img: org.opencv.core.Mat, points: org.opencv.core.Mat, straight_qrcode: org.opencv.core.Mat): string;
				public decodeCurved(img: org.opencv.core.Mat, points: org.opencv.core.Mat, straight_qrcode: org.opencv.core.Mat): string;
				public static __fromPtr__(addr: number): org.opencv.objdetect.GraphicalCodeDetector;
				public constructor(addr: number);
				public detectAndDecodeCurved(img: org.opencv.core.Mat): string;
				public static __fromPtr__(addr: number): org.opencv.objdetect.QRCodeDetector;
				public finalize(): void;
				public decodeCurved(img: org.opencv.core.Mat, points: org.opencv.core.Mat): string;
				public constructor();
				public setUseAlignmentMarkers(useAlignmentMarkers: boolean): org.opencv.objdetect.QRCodeDetector;
				public setEpsY(epsY: number): org.opencv.objdetect.QRCodeDetector;
				public detectAndDecodeCurved(img: org.opencv.core.Mat, points: org.opencv.core.Mat): string;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class QRCodeDetectorAruco extends org.opencv.objdetect.GraphicalCodeDetector {
				public static class: java.lang.Class<org.opencv.objdetect.QRCodeDetectorAruco>;
				public constructor(params: org.opencv.objdetect.QRCodeDetectorAruco_Params);
				public static __fromPtr__(addr: number): org.opencv.objdetect.GraphicalCodeDetector;
				public constructor(addr: number);
				public finalize(): void;
				public getDetectorParameters(): org.opencv.objdetect.QRCodeDetectorAruco_Params;
				public static __fromPtr__(addr: number): org.opencv.objdetect.QRCodeDetectorAruco;
				public setDetectorParameters(params: org.opencv.objdetect.QRCodeDetectorAruco_Params): org.opencv.objdetect.QRCodeDetectorAruco;
				public constructor();
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class QRCodeDetectorAruco_Params extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.objdetect.QRCodeDetectorAruco_Params>;
				public nativeObj: number;
				public set_maxRotation(maxRotation: number): void;
				public set_maxModuleSizeMismatch(maxModuleSizeMismatch: number): void;
				public get_scaleTimingPatternScore(): number;
				public constructor(addr: number);
				public static __fromPtr__(addr: number): org.opencv.objdetect.QRCodeDetectorAruco_Params;
				public set_minModuleSizeInPyramid(minModuleSizeInPyramid: number): void;
				public finalize(): void;
				public getNativeObjAddr(): number;
				public get_maxModuleSizeMismatch(): number;
				public set_maxTimingPatternMismatch(maxTimingPatternMismatch: number): void;
				public set_maxPenalties(maxPenalties: number): void;
				public get_maxPenalties(): number;
				public set_maxColorsMismatch(maxColorsMismatch: number): void;
				public set_scaleTimingPatternScore(scaleTimingPatternScore: number): void;
				public constructor();
				public get_maxTimingPatternMismatch(): number;
				public get_maxRotation(): number;
				public get_minModuleSizeInPyramid(): number;
				public get_maxColorsMismatch(): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class QRCodeEncoder extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.objdetect.QRCodeEncoder>;
				public nativeObj: number;
				public static CORRECT_LEVEL_L: number;
				public static CORRECT_LEVEL_M: number;
				public static CORRECT_LEVEL_Q: number;
				public static CORRECT_LEVEL_H: number;
				public static ECI_UTF8: number;
				public static MODE_AUTO: number;
				public static MODE_NUMERIC: number;
				public static MODE_ALPHANUMERIC: number;
				public static MODE_BYTE: number;
				public static MODE_ECI: number;
				public static MODE_KANJI: number;
				public static MODE_STRUCTURED_APPEND: number;
				public encode(encoded_info: string, qrcode: org.opencv.core.Mat): void;
				public constructor(addr: number);
				public static create(): org.opencv.objdetect.QRCodeEncoder;
				public encodeStructuredAppend(encoded_info: string, qrcodes: java.util.List<org.opencv.core.Mat>): void;
				public finalize(): void;
				public getNativeObjAddr(): number;
				public static __fromPtr__(addr: number): org.opencv.objdetect.QRCodeEncoder;
				public static create(parameters: org.opencv.objdetect.QRCodeEncoder_Params): org.opencv.objdetect.QRCodeEncoder;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class QRCodeEncoder_Params extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.objdetect.QRCodeEncoder_Params>;
				public nativeObj: number;
				public get_structure_number(): number;
				public static __fromPtr__(addr: number): org.opencv.objdetect.QRCodeEncoder_Params;
				public constructor(addr: number);
				public set_version(version: number): void;
				public finalize(): void;
				public getNativeObjAddr(): number;
				public get_version(): number;
				public constructor();
				public set_structure_number(structure_number: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class RefineParameters extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.objdetect.RefineParameters>;
				public nativeObj: number;
				public constructor(addr: number);
				public finalize(): void;
				public getNativeObjAddr(): number;
				public static __fromPtr__(addr: number): org.opencv.objdetect.RefineParameters;
				public constructor(minRepDistance: number, errorCorrectionRate: number, checkAllOrders: boolean);
				public get_minRepDistance(): number;
				public constructor();
				public set_errorCorrectionRate(errorCorrectionRate: number): void;
				public get_checkAllOrders(): boolean;
				public constructor(minRepDistance: number);
				public constructor(minRepDistance: number, errorCorrectionRate: number);
				public set_minRepDistance(minRepDistance: number): void;
				public set_checkAllOrders(checkAllOrders: boolean): void;
				public get_errorCorrectionRate(): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module osgi {
			export class OpenCVInterface extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.osgi.OpenCVInterface>;
				/**
				 * Constructs a new instance of the org.opencv.osgi.OpenCVInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module org {
	export module opencv {
		export module osgi {
			export class OpenCVNativeLoader extends java.lang.Object implements org.opencv.osgi.OpenCVInterface {
				public static class: java.lang.Class<org.opencv.osgi.OpenCVNativeLoader>;
				public constructor();
				public init(): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class AlignExposures extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.photo.AlignExposures>;
				public process(src: java.util.List<org.opencv.core.Mat>, dst: java.util.List<org.opencv.core.Mat>, times: org.opencv.core.Mat, response: org.opencv.core.Mat): void;
				public static __fromPtr__(addr: number): org.opencv.photo.AlignExposures;
				public constructor(addr: number);
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class AlignMTB extends org.opencv.photo.AlignExposures {
				public static class: java.lang.Class<org.opencv.photo.AlignMTB>;
				public process(src: java.util.List<org.opencv.core.Mat>, dst: java.util.List<org.opencv.core.Mat>, times: org.opencv.core.Mat, response: org.opencv.core.Mat): void;
				public setCut(value: boolean): void;
				public shiftMat(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, shift: org.opencv.core.Point): void;
				public static __fromPtr__(addr: number): org.opencv.photo.AlignExposures;
				public getExcludeRange(): number;
				public constructor(addr: number);
				public setExcludeRange(exclude_range: number): void;
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public calculateShift(img0: org.opencv.core.Mat, img1: org.opencv.core.Mat): org.opencv.core.Point;
				public process(src: java.util.List<org.opencv.core.Mat>, dst: java.util.List<org.opencv.core.Mat>): void;
				public getMaxBits(): number;
				public setMaxBits(max_bits: number): void;
				public static __fromPtr__(addr: number): org.opencv.photo.AlignMTB;
				public computeBitmaps(img: org.opencv.core.Mat, tb: org.opencv.core.Mat, eb: org.opencv.core.Mat): void;
				public getCut(): boolean;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class CalibrateCRF extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.photo.CalibrateCRF>;
				public process(src: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat, times: org.opencv.core.Mat): void;
				public constructor(addr: number);
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.photo.CalibrateCRF;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class CalibrateDebevec extends org.opencv.photo.CalibrateCRF {
				public static class: java.lang.Class<org.opencv.photo.CalibrateDebevec>;
				public getLambda(): number;
				public getSamples(): number;
				public constructor(addr: number);
				public static __fromPtr__(addr: number): org.opencv.photo.CalibrateDebevec;
				public getRandom(): boolean;
				public setSamples(samples: number): void;
				public finalize(): void;
				public setLambda(lambda: number): void;
				public setRandom(random: boolean): void;
				public static __fromPtr__(addr: number): org.opencv.photo.CalibrateCRF;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class CalibrateRobertson extends org.opencv.photo.CalibrateCRF {
				public static class: java.lang.Class<org.opencv.photo.CalibrateRobertson>;
				public setThreshold(threshold: number): void;
				public setMaxIter(max_iter: number): void;
				public getMaxIter(): number;
				public constructor(addr: number);
				public getThreshold(): number;
				public static __fromPtr__(addr: number): org.opencv.photo.CalibrateRobertson;
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.photo.CalibrateCRF;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public getRadiance(): org.opencv.core.Mat;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class MergeDebevec extends org.opencv.photo.MergeExposures {
				public static class: java.lang.Class<org.opencv.photo.MergeDebevec>;
				public process(src: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat, times: org.opencv.core.Mat, response: org.opencv.core.Mat): void;
				public static __fromPtr__(addr: number): org.opencv.photo.MergeDebevec;
				public process(src: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat, times: org.opencv.core.Mat): void;
				public constructor(addr: number);
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public static __fromPtr__(addr: number): org.opencv.photo.MergeExposures;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class MergeExposures extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.photo.MergeExposures>;
				public process(src: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat, times: org.opencv.core.Mat, response: org.opencv.core.Mat): void;
				public constructor(addr: number);
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public static __fromPtr__(addr: number): org.opencv.photo.MergeExposures;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class MergeMertens extends org.opencv.photo.MergeExposures {
				public static class: java.lang.Class<org.opencv.photo.MergeMertens>;
				public getSaturationWeight(): number;
				public process(src: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat, times: org.opencv.core.Mat, response: org.opencv.core.Mat): void;
				public getContrastWeight(): number;
				public constructor(addr: number);
				public setSaturationWeight(saturation_weight: number): void;
				public finalize(): void;
				public process(src: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public setContrastWeight(contrast_weiht: number): void;
				public static __fromPtr__(addr: number): org.opencv.photo.MergeMertens;
				public setExposureWeight(exposure_weight: number): void;
				public static __fromPtr__(addr: number): org.opencv.photo.MergeExposures;
				public getExposureWeight(): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class MergeRobertson extends org.opencv.photo.MergeExposures {
				public static class: java.lang.Class<org.opencv.photo.MergeRobertson>;
				public process(src: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat, times: org.opencv.core.Mat, response: org.opencv.core.Mat): void;
				public process(src: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat, times: org.opencv.core.Mat): void;
				public constructor(addr: number);
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public static __fromPtr__(addr: number): org.opencv.photo.MergeRobertson;
				public static __fromPtr__(addr: number): org.opencv.photo.MergeExposures;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class Photo extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.photo.Photo>;
				public static INPAINT_NS: number;
				public static INPAINT_TELEA: number;
				public static LDR_SIZE: number;
				public static NORMAL_CLONE: number;
				public static MIXED_CLONE: number;
				public static MONOCHROME_TRANSFER: number;
				public static RECURS_FILTER: number;
				public static NORMCONV_FILTER: number;
				public static createTonemap(gamma: number): org.opencv.photo.Tonemap;
				public static createTonemapMantiuk(gamma: number): org.opencv.photo.TonemapMantiuk;
				public static fastNlMeansDenoising(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, h: org.opencv.core.MatOfFloat, templateWindowSize: number, searchWindowSize: number): void;
				public static fastNlMeansDenoisingColored(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, h: number, hColor: number, templateWindowSize: number, searchWindowSize: number): void;
				public static fastNlMeansDenoisingColoredMulti(srcImgs: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat, imgToDenoiseIndex: number, temporalWindowSize: number): void;
				public static denoise_TVL1(observations: java.util.List<org.opencv.core.Mat>, result: org.opencv.core.Mat, lambda: number): void;
				public static createMergeMertens(contrast_weight: number, saturation_weight: number): org.opencv.photo.MergeMertens;
				public static stylization(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, sigma_s: number, sigma_r: number): void;
				public static createMergeMertens(contrast_weight: number, saturation_weight: number, exposure_weight: number): org.opencv.photo.MergeMertens;
				public static fastNlMeansDenoisingMulti(srcImgs: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat, imgToDenoiseIndex: number, temporalWindowSize: number, h: number, templateWindowSize: number, searchWindowSize: number): void;
				public constructor();
				public static createCalibrateRobertson(max_iter: number, threshold: number): org.opencv.photo.CalibrateRobertson;
				public static createMergeRobertson(): org.opencv.photo.MergeRobertson;
				public static createCalibrateDebevec(samples: number): org.opencv.photo.CalibrateDebevec;
				public static createTonemapDrago(gamma: number, saturation: number): org.opencv.photo.TonemapDrago;
				public static createTonemapReinhard(gamma: number, intensity: number, light_adapt: number, color_adapt: number): org.opencv.photo.TonemapReinhard;
				public static edgePreservingFilter(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, flags: number, sigma_s: number): void;
				public static createAlignMTB(max_bits: number): org.opencv.photo.AlignMTB;
				public static createTonemapDrago(gamma: number): org.opencv.photo.TonemapDrago;
				public static fastNlMeansDenoisingColoredMulti(srcImgs: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat, imgToDenoiseIndex: number, temporalWindowSize: number, h: number, hColor: number): void;
				public static fastNlMeansDenoisingColored(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, h: number): void;
				public static createTonemapMantiuk(gamma: number, scale: number, saturation: number): org.opencv.photo.TonemapMantiuk;
				public static createCalibrateRobertson(): org.opencv.photo.CalibrateRobertson;
				public static fastNlMeansDenoisingColoredMulti(srcImgs: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat, imgToDenoiseIndex: number, temporalWindowSize: number, h: number): void;
				public static textureFlattening(src: org.opencv.core.Mat, mask: org.opencv.core.Mat, dst: org.opencv.core.Mat, low_threshold: number): void;
				public static createTonemapDrago(gamma: number, saturation: number, bias: number): org.opencv.photo.TonemapDrago;
				public static pencilSketch(src: org.opencv.core.Mat, dst1: org.opencv.core.Mat, dst2: org.opencv.core.Mat, sigma_s: number): void;
				public static pencilSketch(src: org.opencv.core.Mat, dst1: org.opencv.core.Mat, dst2: org.opencv.core.Mat): void;
				public static createTonemapMantiuk(): org.opencv.photo.TonemapMantiuk;
				public static fastNlMeansDenoising(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, h: org.opencv.core.MatOfFloat, templateWindowSize: number): void;
				public static createTonemapDrago(): org.opencv.photo.TonemapDrago;
				public static createTonemap(): org.opencv.photo.Tonemap;
				public static pencilSketch(src: org.opencv.core.Mat, dst1: org.opencv.core.Mat, dst2: org.opencv.core.Mat, sigma_s: number, sigma_r: number): void;
				public static createMergeMertens(): org.opencv.photo.MergeMertens;
				public static createCalibrateDebevec(samples: number, lambda: number): org.opencv.photo.CalibrateDebevec;
				public static createAlignMTB(): org.opencv.photo.AlignMTB;
				public static createCalibrateDebevec(samples: number, lambda: number, random: boolean): org.opencv.photo.CalibrateDebevec;
				public static fastNlMeansDenoisingColoredMulti(srcImgs: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat, imgToDenoiseIndex: number, temporalWindowSize: number, h: number, hColor: number, templateWindowSize: number, searchWindowSize: number): void;
				public static createTonemapReinhard(): org.opencv.photo.TonemapReinhard;
				public static fastNlMeansDenoisingMulti(srcImgs: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat, imgToDenoiseIndex: number, temporalWindowSize: number): void;
				public static fastNlMeansDenoising(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, h: org.opencv.core.MatOfFloat, templateWindowSize: number, searchWindowSize: number, normType: number): void;
				public static fastNlMeansDenoisingColored(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, h: number, hColor: number, templateWindowSize: number): void;
				public static createTonemapReinhard(gamma: number, intensity: number, light_adapt: number): org.opencv.photo.TonemapReinhard;
				public static seamlessClone(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, mask: org.opencv.core.Mat, p: org.opencv.core.Point, blend: org.opencv.core.Mat, flags: number): void;
				public static createCalibrateDebevec(): org.opencv.photo.CalibrateDebevec;
				public static fastNlMeansDenoisingColored(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static edgePreservingFilter(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, flags: number, sigma_s: number, sigma_r: number): void;
				public static colorChange(src: org.opencv.core.Mat, mask: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static illuminationChange(src: org.opencv.core.Mat, mask: org.opencv.core.Mat, dst: org.opencv.core.Mat, alpha: number): void;
				public static illuminationChange(src: org.opencv.core.Mat, mask: org.opencv.core.Mat, dst: org.opencv.core.Mat, alpha: number, beta: number): void;
				public static stylization(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, sigma_s: number): void;
				public static createTonemapMantiuk(gamma: number, scale: number): org.opencv.photo.TonemapMantiuk;
				public static colorChange(src: org.opencv.core.Mat, mask: org.opencv.core.Mat, dst: org.opencv.core.Mat, red_mul: number, green_mul: number): void;
				public static createCalibrateRobertson(max_iter: number): org.opencv.photo.CalibrateRobertson;
				public static denoise_TVL1(observations: java.util.List<org.opencv.core.Mat>, result: org.opencv.core.Mat): void;
				public static createAlignMTB(max_bits: number, exclude_range: number): org.opencv.photo.AlignMTB;
				public static textureFlattening(src: org.opencv.core.Mat, mask: org.opencv.core.Mat, dst: org.opencv.core.Mat, low_threshold: number, high_threshold: number): void;
				public static edgePreservingFilter(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static fastNlMeansDenoisingMulti(srcImgs: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat, imgToDenoiseIndex: number, temporalWindowSize: number, h: org.opencv.core.MatOfFloat, templateWindowSize: number): void;
				public static stylization(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static inpaint(src: org.opencv.core.Mat, inpaintMask: org.opencv.core.Mat, dst: org.opencv.core.Mat, inpaintRadius: number, param4: number): void;
				public static colorChange(src: org.opencv.core.Mat, mask: org.opencv.core.Mat, dst: org.opencv.core.Mat, red_mul: number, green_mul: number, blue_mul: number): void;
				public static illuminationChange(src: org.opencv.core.Mat, mask: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static fastNlMeansDenoisingMulti(srcImgs: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat, imgToDenoiseIndex: number, temporalWindowSize: number, h: number): void;
				public static createMergeDebevec(): org.opencv.photo.MergeDebevec;
				public static decolor(src: org.opencv.core.Mat, grayscale: org.opencv.core.Mat, color_boost: org.opencv.core.Mat): void;
				public static colorChange(src: org.opencv.core.Mat, mask: org.opencv.core.Mat, dst: org.opencv.core.Mat, red_mul: number): void;
				public static textureFlattening(src: org.opencv.core.Mat, mask: org.opencv.core.Mat, dst: org.opencv.core.Mat, low_threshold: number, high_threshold: number, kernel_size: number): void;
				public static fastNlMeansDenoising(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, h: number, templateWindowSize: number): void;
				public static fastNlMeansDenoisingColored(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, h: number, hColor: number): void;
				public static fastNlMeansDenoisingColoredMulti(srcImgs: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat, imgToDenoiseIndex: number, temporalWindowSize: number, h: number, hColor: number, templateWindowSize: number): void;
				public static edgePreservingFilter(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, flags: number): void;
				public static pencilSketch(src: org.opencv.core.Mat, dst1: org.opencv.core.Mat, dst2: org.opencv.core.Mat, sigma_s: number, sigma_r: number, shade_factor: number): void;
				public static textureFlattening(src: org.opencv.core.Mat, mask: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static fastNlMeansDenoisingMulti(srcImgs: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat, imgToDenoiseIndex: number, temporalWindowSize: number, h: org.opencv.core.MatOfFloat, templateWindowSize: number, searchWindowSize: number, normType: number): void;
				public static detailEnhance(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, sigma_s: number): void;
				public static fastNlMeansDenoisingMulti(srcImgs: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat, imgToDenoiseIndex: number, temporalWindowSize: number, h: number, templateWindowSize: number): void;
				public static detailEnhance(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, sigma_s: number, sigma_r: number): void;
				public static fastNlMeansDenoising(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static denoise_TVL1(observations: java.util.List<org.opencv.core.Mat>, result: org.opencv.core.Mat, lambda: number, param3: number): void;
				public static createTonemapReinhard(gamma: number): org.opencv.photo.TonemapReinhard;
				public static fastNlMeansDenoising(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, h: number, templateWindowSize: number, searchWindowSize: number): void;
				public static createAlignMTB(max_bits: number, exclude_range: number, cut: boolean): org.opencv.photo.AlignMTB;
				public static fastNlMeansDenoisingMulti(srcImgs: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat, imgToDenoiseIndex: number, temporalWindowSize: number, h: org.opencv.core.MatOfFloat, templateWindowSize: number, searchWindowSize: number): void;
				public static fastNlMeansDenoisingMulti(srcImgs: java.util.List<org.opencv.core.Mat>, dst: org.opencv.core.Mat, imgToDenoiseIndex: number, temporalWindowSize: number, h: org.opencv.core.MatOfFloat): void;
				public static fastNlMeansDenoising(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, h: org.opencv.core.MatOfFloat): void;
				public static createMergeMertens(contrast_weight: number): org.opencv.photo.MergeMertens;
				public static createTonemapReinhard(gamma: number, intensity: number): org.opencv.photo.TonemapReinhard;
				public static detailEnhance(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
				public static fastNlMeansDenoising(src: org.opencv.core.Mat, dst: org.opencv.core.Mat, h: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class Tonemap extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.photo.Tonemap>;
				public setGamma(gamma: number): void;
				public static __fromPtr__(addr: number): org.opencv.photo.Tonemap;
				public constructor(addr: number);
				public finalize(): void;
				public getGamma(): number;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public process(src: org.opencv.core.Mat, dst: org.opencv.core.Mat): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class TonemapDrago extends org.opencv.photo.Tonemap {
				public static class: java.lang.Class<org.opencv.photo.TonemapDrago>;
				public setSaturation(saturation: number): void;
				public static __fromPtr__(addr: number): org.opencv.photo.Tonemap;
				public getBias(): number;
				public getSaturation(): number;
				public constructor(addr: number);
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public static __fromPtr__(addr: number): org.opencv.photo.TonemapDrago;
				public setBias(bias: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class TonemapMantiuk extends org.opencv.photo.Tonemap {
				public static class: java.lang.Class<org.opencv.photo.TonemapMantiuk>;
				public setScale(scale: number): void;
				public setSaturation(saturation: number): void;
				public static __fromPtr__(addr: number): org.opencv.photo.Tonemap;
				public getScale(): number;
				public getSaturation(): number;
				public constructor(addr: number);
				public static __fromPtr__(addr: number): org.opencv.photo.TonemapMantiuk;
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class TonemapReinhard extends org.opencv.photo.Tonemap {
				public static class: java.lang.Class<org.opencv.photo.TonemapReinhard>;
				public static __fromPtr__(addr: number): org.opencv.photo.TonemapReinhard;
				public static __fromPtr__(addr: number): org.opencv.photo.Tonemap;
				public getIntensity(): number;
				public setColorAdaptation(color_adapt: number): void;
				public constructor(addr: number);
				public finalize(): void;
				public getLightAdaptation(): number;
				public getColorAdaptation(): number;
				public setLightAdaptation(light_adapt: number): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public setIntensity(intensity: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module utils {
			export class Converters extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.utils.Converters>;
				public static Mat_to_vector_uchar(m: org.opencv.core.Mat, us: java.util.List<java.lang.Byte>): void;
				public static Mat_to_vector_Point2f(m: org.opencv.core.Mat, pts: java.util.List<org.opencv.core.Point>): void;
				public static Mat_to_vector_vector_Point2f(m: org.opencv.core.Mat, pts: java.util.List<org.opencv.core.MatOfPoint2f>): void;
				public static vector_DMatch_to_Mat(matches: java.util.List<org.opencv.core.DMatch>): org.opencv.core.Mat;
				public static Mat_to_vector_DMatch(m: org.opencv.core.Mat, matches: java.util.List<org.opencv.core.DMatch>): void;
				public constructor();
				public static Mat_to_vector_vector_Point(m: org.opencv.core.Mat, pts: java.util.List<org.opencv.core.MatOfPoint>): void;
				public static vector_Point3i_to_Mat(pts: java.util.List<org.opencv.core.Point3>): org.opencv.core.Mat;
				public static vector_float_to_Mat(fs: java.util.List<java.lang.Float>): org.opencv.core.Mat;
				public static vector_vector_KeyPoint_to_Mat(kps: java.util.List<org.opencv.core.MatOfKeyPoint>, mats: java.util.List<org.opencv.core.Mat>): org.opencv.core.Mat;
				public static vector_double_to_Mat(ds: java.util.List<java.lang.Double>): org.opencv.core.Mat;
				public static vector_Rect2d_to_Mat(rs: java.util.List<org.opencv.core.Rect2d>): org.opencv.core.Mat;
				public static vector_Point2d_to_Mat(pts: java.util.List<org.opencv.core.Point>): org.opencv.core.Mat;
				public static Mat_to_vector_vector_char(m: org.opencv.core.Mat, llb: java.util.List<java.util.List<java.lang.Byte>>): void;
				public static Mat_to_vector_Point2d(m: org.opencv.core.Mat, pts: java.util.List<org.opencv.core.Point>): void;
				public static Mat_to_vector_Point3f(m: org.opencv.core.Mat, pts: java.util.List<org.opencv.core.Point3>): void;
				public static vector_uchar_to_Mat(bs: java.util.List<java.lang.Byte>): org.opencv.core.Mat;
				public static vector_int_to_Mat(is: java.util.List<java.lang.Integer>): org.opencv.core.Mat;
				public static Mat_to_vector_char(m: org.opencv.core.Mat, bs: java.util.List<java.lang.Byte>): void;
				public static vector_KeyPoint_to_Mat(kps: java.util.List<org.opencv.core.KeyPoint>): org.opencv.core.Mat;
				public static vector_vector_Point3f_to_Mat(pts: java.util.List<org.opencv.core.MatOfPoint3f>, mats: java.util.List<org.opencv.core.Mat>): org.opencv.core.Mat;
				public static vector_Point3d_to_Mat(pts: java.util.List<org.opencv.core.Point3>): org.opencv.core.Mat;
				public static Mat_to_vector_Point3i(m: org.opencv.core.Mat, pts: java.util.List<org.opencv.core.Point3>): void;
				public static Mat_to_vector_Rect2d(m: org.opencv.core.Mat, rs: java.util.List<org.opencv.core.Rect2d>): void;
				public static Mat_to_vector_double(m: org.opencv.core.Mat, ds: java.util.List<java.lang.Double>): void;
				public static vector_Mat_to_Mat(mats: java.util.List<org.opencv.core.Mat>): org.opencv.core.Mat;
				public static Mat_to_vector_Point3d(m: org.opencv.core.Mat, pts: java.util.List<org.opencv.core.Point3>): void;
				public static vector_Point_to_Mat(pts: java.util.List<org.opencv.core.Point>): org.opencv.core.Mat;
				public static Mat_to_vector_vector_Point3f(m: org.opencv.core.Mat, pts: java.util.List<org.opencv.core.MatOfPoint3f>): void;
				public static vector_vector_Point_to_Mat(pts: java.util.List<org.opencv.core.MatOfPoint>, mats: java.util.List<org.opencv.core.Mat>): org.opencv.core.Mat;
				public static vector_RotatedRect_to_Mat(rs: java.util.List<org.opencv.core.RotatedRect>): org.opencv.core.Mat;
				public static Mat_to_vector_KeyPoint(m: org.opencv.core.Mat, kps: java.util.List<org.opencv.core.KeyPoint>): void;
				public static Mat_to_vector_Rect(m: org.opencv.core.Mat, rs: java.util.List<org.opencv.core.Rect>): void;
				public static vector_Point_to_Mat(pts: java.util.List<org.opencv.core.Point>, typeDepth: number): org.opencv.core.Mat;
				public static Mat_to_vector_vector_DMatch(m: org.opencv.core.Mat, lvdm: java.util.List<org.opencv.core.MatOfDMatch>): void;
				public static Mat_to_vector_vector_KeyPoint(m: org.opencv.core.Mat, kps: java.util.List<org.opencv.core.MatOfKeyPoint>): void;
				public static vector_vector_char_to_Mat(lvb: java.util.List<org.opencv.core.MatOfByte>, mats: java.util.List<org.opencv.core.Mat>): org.opencv.core.Mat;
				public static Mat_to_vector_Mat(m: org.opencv.core.Mat, mats: java.util.List<org.opencv.core.Mat>): void;
				public static Mat_to_vector_float(m: org.opencv.core.Mat, fs: java.util.List<java.lang.Float>): void;
				public static Mat_to_vector_int(m: org.opencv.core.Mat, is: java.util.List<java.lang.Integer>): void;
				public static vector_Point3f_to_Mat(pts: java.util.List<org.opencv.core.Point3>): org.opencv.core.Mat;
				public static vector_Point3_to_Mat(pts: java.util.List<org.opencv.core.Point3>, typeDepth: number): org.opencv.core.Mat;
				public static Mat_to_vector_Point(m: org.opencv.core.Mat, pts: java.util.List<org.opencv.core.Point>): void;
				public static Mat_to_vector_Point3(m: org.opencv.core.Mat, pts: java.util.List<org.opencv.core.Point3>): void;
				public static vector_char_to_Mat(bs: java.util.List<java.lang.Byte>): org.opencv.core.Mat;
				public static vector_Rect_to_Mat(rs: java.util.List<org.opencv.core.Rect>): org.opencv.core.Mat;
				public static vector_vector_DMatch_to_Mat(lvdm: java.util.List<org.opencv.core.MatOfDMatch>, mats: java.util.List<org.opencv.core.Mat>): org.opencv.core.Mat;
				public static vector_vector_Point2f_to_Mat(pts: java.util.List<org.opencv.core.MatOfPoint2f>, mats: java.util.List<org.opencv.core.Mat>): org.opencv.core.Mat;
				public static vector_Point2f_to_Mat(pts: java.util.List<org.opencv.core.Point>): org.opencv.core.Mat;
				public static Mat_to_vector_RotatedRect(m: org.opencv.core.Mat, rs: java.util.List<org.opencv.core.RotatedRect>): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class BackgroundSubtractor extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.video.BackgroundSubtractor>;
				public static __fromPtr__(addr: number): org.opencv.video.BackgroundSubtractor;
				public apply(image: org.opencv.core.Mat, fgmask: org.opencv.core.Mat): void;
				public constructor(addr: number);
				public finalize(): void;
				public getBackgroundImage(backgroundImage: org.opencv.core.Mat): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public apply(image: org.opencv.core.Mat, fgmask: org.opencv.core.Mat, learningRate: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class BackgroundSubtractorKNN extends org.opencv.video.BackgroundSubtractor {
				public static class: java.lang.Class<org.opencv.video.BackgroundSubtractorKNN>;
				public setkNNSamples(_nkNN: number): void;
				public getShadowThreshold(): number;
				public getkNNSamples(): number;
				public constructor(addr: number);
				public setNSamples(_nN: number): void;
				public finalize(): void;
				public getHistory(): number;
				public getNSamples(): number;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public setHistory(history: number): void;
				public getDetectShadows(): boolean;
				public static __fromPtr__(addr: number): org.opencv.video.BackgroundSubtractor;
				public getShadowValue(): number;
				public setShadowValue(value: number): void;
				public static __fromPtr__(addr: number): org.opencv.video.BackgroundSubtractorKNN;
				public setDist2Threshold(_dist2Threshold: number): void;
				public setDetectShadows(detectShadows: boolean): void;
				public setShadowThreshold(threshold: number): void;
				public getDist2Threshold(): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class BackgroundSubtractorMOG2 extends org.opencv.video.BackgroundSubtractor {
				public static class: java.lang.Class<org.opencv.video.BackgroundSubtractorMOG2>;
				public getVarMax(): number;
				public finalize(): void;
				public getHistory(): number;
				public getNMixtures(): number;
				public setComplexityReductionThreshold(ct: number): void;
				public setVarThreshold(varThreshold: number): void;
				public static __fromPtr__(addr: number): org.opencv.video.BackgroundSubtractor;
				public getVarMin(): number;
				public setBackgroundRatio(ratio: number): void;
				public getBackgroundRatio(): number;
				public setVarMin(varMin: number): void;
				public getVarInit(): number;
				public apply(image: org.opencv.core.Mat, fgmask: org.opencv.core.Mat, learningRate: number): void;
				public getVarThresholdGen(): number;
				public getShadowThreshold(): number;
				public constructor(addr: number);
				public setNMixtures(nmixtures: number): void;
				public setVarThresholdGen(varThresholdGen: number): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public setHistory(history: number): void;
				public getDetectShadows(): boolean;
				public getVarThreshold(): number;
				public getShadowValue(): number;
				public setShadowValue(value: number): void;
				public apply(image: org.opencv.core.Mat, fgmask: org.opencv.core.Mat): void;
				public setDetectShadows(detectShadows: boolean): void;
				public setShadowThreshold(threshold: number): void;
				public setVarInit(varInit: number): void;
				public getComplexityReductionThreshold(): number;
				public static __fromPtr__(addr: number): org.opencv.video.BackgroundSubtractorMOG2;
				public setVarMax(varMax: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class DISOpticalFlow extends org.opencv.video.DenseOpticalFlow {
				public static class: java.lang.Class<org.opencv.video.DISOpticalFlow>;
				public static PRESET_ULTRAFAST: number;
				public static PRESET_FAST: number;
				public static PRESET_MEDIUM: number;
				public setPatchSize(val: number): void;
				public setUseMeanNormalization(val: boolean): void;
				public setVariationalRefinementGamma(val: number): void;
				public getGradientDescentIterations(): number;
				public finalize(): void;
				public getPatchStride(): number;
				public getVariationalRefinementIterations(): number;
				public getFinestScale(): number;
				public setFinestScale(val: number): void;
				public static __fromPtr__(addr: number): org.opencv.video.DISOpticalFlow;
				public setUseSpatialPropagation(val: boolean): void;
				public getPatchSize(): number;
				public setGradientDescentIterations(val: number): void;
				public getUseMeanNormalization(): boolean;
				public constructor(addr: number);
				public setPatchStride(val: number): void;
				public static create(): org.opencv.video.DISOpticalFlow;
				public setVariationalRefinementDelta(val: number): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public setVariationalRefinementIterations(val: number): void;
				public getVariationalRefinementAlpha(): number;
				public setVariationalRefinementAlpha(val: number): void;
				public getVariationalRefinementGamma(): number;
				public getVariationalRefinementDelta(): number;
				public getUseSpatialPropagation(): boolean;
				public static __fromPtr__(addr: number): org.opencv.video.DenseOpticalFlow;
				public static create(preset: number): org.opencv.video.DISOpticalFlow;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class DenseOpticalFlow extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.video.DenseOpticalFlow>;
				public collectGarbage(): void;
				public constructor(addr: number);
				public calc(I0: org.opencv.core.Mat, I1: org.opencv.core.Mat, flow: org.opencv.core.Mat): void;
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public static __fromPtr__(addr: number): org.opencv.video.DenseOpticalFlow;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class FarnebackOpticalFlow extends org.opencv.video.DenseOpticalFlow {
				public static class: java.lang.Class<org.opencv.video.FarnebackOpticalFlow>;
				public setFastPyramids(fastPyramids: boolean): void;
				public getWinSize(): number;
				public static create(numLevels: number, pyrScale: number): org.opencv.video.FarnebackOpticalFlow;
				public getNumIters(): number;
				public getPolySigma(): number;
				public setFlags(flags: number): void;
				public finalize(): void;
				public static create(numLevels: number, pyrScale: number, param2: boolean, fastPyramids: number, winSize: number, numIters: number, polyN: number, polySigma: number): org.opencv.video.FarnebackOpticalFlow;
				public setNumIters(numIters: number): void;
				public setPolyN(polyN: number): void;
				public static create(numLevels: number, pyrScale: number, param2: boolean, fastPyramids: number, winSize: number, numIters: number): org.opencv.video.FarnebackOpticalFlow;
				public getPolyN(): number;
				public getFlags(): number;
				public static create(numLevels: number): org.opencv.video.FarnebackOpticalFlow;
				public static create(numLevels: number, pyrScale: number, param2: boolean): org.opencv.video.FarnebackOpticalFlow;
				public static create(numLevels: number, pyrScale: number, param2: boolean, fastPyramids: number, winSize: number, numIters: number, polyN: number): org.opencv.video.FarnebackOpticalFlow;
				public getNumLevels(): number;
				public setPolySigma(polySigma: number): void;
				public static create(): org.opencv.video.FarnebackOpticalFlow;
				public static create(numLevels: number, pyrScale: number, param2: boolean, fastPyramids: number): org.opencv.video.FarnebackOpticalFlow;
				public setWinSize(winSize: number): void;
				public constructor(addr: number);
				public getFastPyramids(): boolean;
				public static create(numLevels: number, pyrScale: number, param2: boolean, fastPyramids: number, winSize: number): org.opencv.video.FarnebackOpticalFlow;
				public getPyrScale(): number;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public setPyrScale(pyrScale: number): void;
				public setNumLevels(numLevels: number): void;
				public static __fromPtr__(addr: number): org.opencv.video.FarnebackOpticalFlow;
				public static __fromPtr__(addr: number): org.opencv.video.DenseOpticalFlow;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class KalmanFilter extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.video.KalmanFilter>;
				public nativeObj: number;
				public set_measurementNoiseCov(measurementNoiseCov: org.opencv.core.Mat): void;
				public get_errorCovPost(): org.opencv.core.Mat;
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.video.KalmanFilter;
				public get_transitionMatrix(): org.opencv.core.Mat;
				public get_measurementNoiseCov(): org.opencv.core.Mat;
				public get_gain(): org.opencv.core.Mat;
				public correct(measurement: org.opencv.core.Mat): org.opencv.core.Mat;
				public constructor();
				public get_statePre(): org.opencv.core.Mat;
				public set_gain(gain: org.opencv.core.Mat): void;
				public get_controlMatrix(): org.opencv.core.Mat;
				public constructor(dynamParams: number, measureParams: number, controlParams: number, type: number);
				public set_errorCovPost(errorCovPost: org.opencv.core.Mat): void;
				public constructor(dynamParams: number, measureParams: number);
				public set_controlMatrix(controlMatrix: org.opencv.core.Mat): void;
				public set_statePost(statePost: org.opencv.core.Mat): void;
				public get_processNoiseCov(): org.opencv.core.Mat;
				public set_transitionMatrix(transitionMatrix: org.opencv.core.Mat): void;
				public constructor(addr: number);
				public set_measurementMatrix(measurementMatrix: org.opencv.core.Mat): void;
				public getNativeObjAddr(): number;
				public set_processNoiseCov(processNoiseCov: org.opencv.core.Mat): void;
				public get_statePost(): org.opencv.core.Mat;
				public set_statePre(statePre: org.opencv.core.Mat): void;
				public get_measurementMatrix(): org.opencv.core.Mat;
				public predict(control: org.opencv.core.Mat): org.opencv.core.Mat;
				public predict(): org.opencv.core.Mat;
				public constructor(dynamParams: number, measureParams: number, controlParams: number);
				public get_errorCovPre(): org.opencv.core.Mat;
				public set_errorCovPre(errorCovPre: org.opencv.core.Mat): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class SparseOpticalFlow extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.video.SparseOpticalFlow>;
				public constructor(addr: number);
				public finalize(): void;
				public calc(prevImg: org.opencv.core.Mat, nextImg: org.opencv.core.Mat, prevPts: org.opencv.core.Mat, nextPts: org.opencv.core.Mat, status: org.opencv.core.Mat): void;
				public calc(prevImg: org.opencv.core.Mat, nextImg: org.opencv.core.Mat, prevPts: org.opencv.core.Mat, nextPts: org.opencv.core.Mat, status: org.opencv.core.Mat, err: org.opencv.core.Mat): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public static __fromPtr__(addr: number): org.opencv.video.SparseOpticalFlow;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class SparsePyrLKOpticalFlow extends org.opencv.video.SparseOpticalFlow {
				public static class: java.lang.Class<org.opencv.video.SparsePyrLKOpticalFlow>;
				public static __fromPtr__(addr: number): org.opencv.video.SparsePyrLKOpticalFlow;
				public setMaxLevel(maxLevel: number): void;
				public getWinSize(): org.opencv.core.Size;
				public static create(winSize: org.opencv.core.Size, maxLevel: number): org.opencv.video.SparsePyrLKOpticalFlow;
				public constructor(addr: number);
				public getMinEigThreshold(): number;
				public setFlags(flags: number): void;
				public finalize(): void;
				public setWinSize(winSize: org.opencv.core.Size): void;
				public static create(winSize: org.opencv.core.Size, maxLevel: number, crit: org.opencv.core.TermCriteria, flags: number): org.opencv.video.SparsePyrLKOpticalFlow;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public getMaxLevel(): number;
				public static __fromPtr__(addr: number): org.opencv.video.SparseOpticalFlow;
				public setTermCriteria(crit: org.opencv.core.TermCriteria): void;
				public static create(winSize: org.opencv.core.Size, maxLevel: number, crit: org.opencv.core.TermCriteria): org.opencv.video.SparsePyrLKOpticalFlow;
				public static create(winSize: org.opencv.core.Size): org.opencv.video.SparsePyrLKOpticalFlow;
				public getFlags(): number;
				public static create(): org.opencv.video.SparsePyrLKOpticalFlow;
				public getTermCriteria(): org.opencv.core.TermCriteria;
				public setMinEigThreshold(minEigThreshold: number): void;
				public static create(winSize: org.opencv.core.Size, maxLevel: number, crit: org.opencv.core.TermCriteria, flags: number, minEigThreshold: number): org.opencv.video.SparsePyrLKOpticalFlow;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class Tracker extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.video.Tracker>;
				public nativeObj: number;
				public update(image: org.opencv.core.Mat, boundingBox: org.opencv.core.Rect): boolean;
				public init(image: org.opencv.core.Mat, boundingBox: org.opencv.core.Rect): void;
				public constructor(addr: number);
				public finalize(): void;
				public getNativeObjAddr(): number;
				public static __fromPtr__(addr: number): org.opencv.video.Tracker;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class TrackerDaSiamRPN extends org.opencv.video.Tracker {
				public static class: java.lang.Class<org.opencv.video.TrackerDaSiamRPN>;
				public static create(parameters: org.opencv.video.TrackerDaSiamRPN_Params): org.opencv.video.TrackerDaSiamRPN;
				public constructor(addr: number);
				public getTrackingScore(): number;
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.video.Tracker;
				public static __fromPtr__(addr: number): org.opencv.video.TrackerDaSiamRPN;
				public static create(): org.opencv.video.TrackerDaSiamRPN;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class TrackerDaSiamRPN_Params extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.video.TrackerDaSiamRPN_Params>;
				public nativeObj: number;
				public set_kernel_r1(kernel_r1: string): void;
				public get_kernel_cls1(): string;
				public set_target(target: number): void;
				public constructor(addr: number);
				public finalize(): void;
				public getNativeObjAddr(): number;
				public get_backend(): number;
				public static __fromPtr__(addr: number): org.opencv.video.TrackerDaSiamRPN_Params;
				public constructor();
				public set_kernel_cls1(kernel_cls1: string): void;
				public set_backend(backend: number): void;
				public get_model(): string;
				public get_target(): number;
				public set_model(model: string): void;
				public get_kernel_r1(): string;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class TrackerGOTURN extends org.opencv.video.Tracker {
				public static class: java.lang.Class<org.opencv.video.TrackerGOTURN>;
				public static create(): org.opencv.video.TrackerGOTURN;
				public constructor(addr: number);
				public static create(parameters: org.opencv.video.TrackerGOTURN_Params): org.opencv.video.TrackerGOTURN;
				public finalize(): void;
				public static __fromPtr__(addr: number): org.opencv.video.Tracker;
				public static __fromPtr__(addr: number): org.opencv.video.TrackerGOTURN;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class TrackerGOTURN_Params extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.video.TrackerGOTURN_Params>;
				public nativeObj: number;
				public get_modelBin(): string;
				public set_modelBin(modelBin: string): void;
				public constructor(addr: number);
				public static __fromPtr__(addr: number): org.opencv.video.TrackerGOTURN_Params;
				public get_modelTxt(): string;
				public finalize(): void;
				public getNativeObjAddr(): number;
				public set_modelTxt(modelTxt: string): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class TrackerMIL extends org.opencv.video.Tracker {
				public static class: java.lang.Class<org.opencv.video.TrackerMIL>;
				public constructor(addr: number);
				public static __fromPtr__(addr: number): org.opencv.video.TrackerMIL;
				public finalize(): void;
				public static create(parameters: org.opencv.video.TrackerMIL_Params): org.opencv.video.TrackerMIL;
				public static create(): org.opencv.video.TrackerMIL;
				public static __fromPtr__(addr: number): org.opencv.video.Tracker;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class TrackerMIL_Params extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.video.TrackerMIL_Params>;
				public nativeObj: number;
				public set_samplerInitMaxNegNum(samplerInitMaxNegNum: number): void;
				public constructor(addr: number);
				public set_samplerTrackMaxPosNum(samplerTrackMaxPosNum: number): void;
				public set_featureSetNumFeatures(featureSetNumFeatures: number): void;
				public get_samplerTrackInRadius(): number;
				public finalize(): void;
				public getNativeObjAddr(): number;
				public get_samplerTrackMaxNegNum(): number;
				public get_samplerSearchWinSize(): number;
				public constructor();
				public get_samplerInitInRadius(): number;
				public set_samplerTrackMaxNegNum(samplerTrackMaxNegNum: number): void;
				public set_samplerInitInRadius(samplerInitInRadius: number): void;
				public static __fromPtr__(addr: number): org.opencv.video.TrackerMIL_Params;
				public set_samplerSearchWinSize(samplerSearchWinSize: number): void;
				public set_samplerTrackInRadius(samplerTrackInRadius: number): void;
				public get_samplerTrackMaxPosNum(): number;
				public get_samplerInitMaxNegNum(): number;
				public get_featureSetNumFeatures(): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class TrackerNano extends org.opencv.video.Tracker {
				public static class: java.lang.Class<org.opencv.video.TrackerNano>;
				public static __fromPtr__(addr: number): org.opencv.video.TrackerNano;
				public static create(parameters: org.opencv.video.TrackerNano_Params): org.opencv.video.TrackerNano;
				public constructor(addr: number);
				public getTrackingScore(): number;
				public finalize(): void;
				public static create(): org.opencv.video.TrackerNano;
				public static __fromPtr__(addr: number): org.opencv.video.Tracker;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class TrackerNano_Params extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.video.TrackerNano_Params>;
				public nativeObj: number;
				public set_target(target: number): void;
				public static __fromPtr__(addr: number): org.opencv.video.TrackerNano_Params;
				public constructor(addr: number);
				public finalize(): void;
				public getNativeObjAddr(): number;
				public get_backend(): number;
				public get_neckhead(): string;
				public constructor();
				public set_backend(backend: number): void;
				public set_backbone(backbone: string): void;
				public get_target(): number;
				public get_backbone(): string;
				public set_neckhead(neckhead: string): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class VariationalRefinement extends org.opencv.video.DenseOpticalFlow {
				public static class: java.lang.Class<org.opencv.video.VariationalRefinement>;
				public getSorIterations(): number;
				public constructor(addr: number);
				public static __fromPtr__(addr: number): org.opencv.video.VariationalRefinement;
				public finalize(): void;
				public getAlpha(): number;
				public calcUV(I0: org.opencv.core.Mat, I1: org.opencv.core.Mat, flow_u: org.opencv.core.Mat, flow_v: org.opencv.core.Mat): void;
				public setFixedPointIterations(val: number): void;
				public static __fromPtr__(addr: number): org.opencv.core.Algorithm;
				public getFixedPointIterations(): number;
				public static create(): org.opencv.video.VariationalRefinement;
				public setSorIterations(val: number): void;
				public getOmega(): number;
				public getDelta(): number;
				public setOmega(val: number): void;
				public getGamma(): number;
				public setGamma(val: number): void;
				public static __fromPtr__(addr: number): org.opencv.video.DenseOpticalFlow;
				public setAlpha(val: number): void;
				public setDelta(val: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class Video extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.video.Video>;
				public static OPTFLOW_USE_INITIAL_FLOW: number;
				public static OPTFLOW_LK_GET_MIN_EIGENVALS: number;
				public static OPTFLOW_FARNEBACK_GAUSSIAN: number;
				public static MOTION_TRANSLATION: number;
				public static MOTION_EUCLIDEAN: number;
				public static MOTION_AFFINE: number;
				public static MOTION_HOMOGRAPHY: number;
				public static TrackerSamplerCSC_MODE_INIT_POS: number;
				public static TrackerSamplerCSC_MODE_INIT_NEG: number;
				public static TrackerSamplerCSC_MODE_TRACK_POS: number;
				public static TrackerSamplerCSC_MODE_TRACK_NEG: number;
				public static TrackerSamplerCSC_MODE_DETECT: number;
				public static buildOpticalFlowPyramid(img: org.opencv.core.Mat, pyramid: java.util.List<org.opencv.core.Mat>, winSize: org.opencv.core.Size, maxLevel: number, withDerivatives: boolean, pyrBorder: number): number;
				public static createBackgroundSubtractorKNN(history: number, dist2Threshold: number, param2: boolean): org.opencv.video.BackgroundSubtractorKNN;
				public static createBackgroundSubtractorMOG2(history: number, varThreshold: number, param2: boolean): org.opencv.video.BackgroundSubtractorMOG2;
				public static buildOpticalFlowPyramid(img: org.opencv.core.Mat, pyramid: java.util.List<org.opencv.core.Mat>, winSize: org.opencv.core.Size, maxLevel: number, withDerivatives: boolean, pyrBorder: number, derivBorder: number, tryReuseInputImage: boolean): number;
				public static findTransformECC(templateImage: org.opencv.core.Mat, inputImage: org.opencv.core.Mat, warpMatrix: org.opencv.core.Mat): number;
				public static writeOpticalFlow(path: string, flow: org.opencv.core.Mat): boolean;
				public static createBackgroundSubtractorKNN(history: number): org.opencv.video.BackgroundSubtractorKNN;
				public static calcOpticalFlowPyrLK(prevImg: org.opencv.core.Mat, nextImg: org.opencv.core.Mat, prevPts: org.opencv.core.MatOfPoint2f, nextPts: org.opencv.core.MatOfPoint2f, status: org.opencv.core.MatOfByte, err: org.opencv.core.MatOfFloat, winSize: org.opencv.core.Size, maxLevel: number, criteria: org.opencv.core.TermCriteria, flags: number, minEigThreshold: number): void;
				public static calcOpticalFlowPyrLK(prevImg: org.opencv.core.Mat, nextImg: org.opencv.core.Mat, prevPts: org.opencv.core.MatOfPoint2f, nextPts: org.opencv.core.MatOfPoint2f, status: org.opencv.core.MatOfByte, err: org.opencv.core.MatOfFloat, winSize: org.opencv.core.Size, maxLevel: number): void;
				public constructor();
				public static createBackgroundSubtractorKNN(): org.opencv.video.BackgroundSubtractorKNN;
				public static createBackgroundSubtractorKNN(history: number, dist2Threshold: number): org.opencv.video.BackgroundSubtractorKNN;
				public static findTransformECC(templateImage: org.opencv.core.Mat, inputImage: org.opencv.core.Mat, warpMatrix: org.opencv.core.Mat, motionType: number, criteria: org.opencv.core.TermCriteria, inputMask: org.opencv.core.Mat, gaussFiltSize: number): number;
				public static createBackgroundSubtractorMOG2(history: number, varThreshold: number): org.opencv.video.BackgroundSubtractorMOG2;
				public static createBackgroundSubtractorMOG2(history: number): org.opencv.video.BackgroundSubtractorMOG2;
				public static buildOpticalFlowPyramid(img: org.opencv.core.Mat, pyramid: java.util.List<org.opencv.core.Mat>, winSize: org.opencv.core.Size, maxLevel: number, withDerivatives: boolean): number;
				public static findTransformECC(templateImage: org.opencv.core.Mat, inputImage: org.opencv.core.Mat, warpMatrix: org.opencv.core.Mat, motionType: number, criteria: org.opencv.core.TermCriteria): number;
				public static readOpticalFlow(path: string): org.opencv.core.Mat;
				public static calcOpticalFlowPyrLK(prevImg: org.opencv.core.Mat, nextImg: org.opencv.core.Mat, prevPts: org.opencv.core.MatOfPoint2f, nextPts: org.opencv.core.MatOfPoint2f, status: org.opencv.core.MatOfByte, err: org.opencv.core.MatOfFloat, winSize: org.opencv.core.Size, maxLevel: number, criteria: org.opencv.core.TermCriteria): void;
				public static calcOpticalFlowPyrLK(prevImg: org.opencv.core.Mat, nextImg: org.opencv.core.Mat, prevPts: org.opencv.core.MatOfPoint2f, nextPts: org.opencv.core.MatOfPoint2f, status: org.opencv.core.MatOfByte, err: org.opencv.core.MatOfFloat, winSize: org.opencv.core.Size): void;
				public static findTransformECC(templateImage: org.opencv.core.Mat, inputImage: org.opencv.core.Mat, warpMatrix: org.opencv.core.Mat, motionType: number): number;
				public static buildOpticalFlowPyramid(img: org.opencv.core.Mat, pyramid: java.util.List<org.opencv.core.Mat>, winSize: org.opencv.core.Size, maxLevel: number, withDerivatives: boolean, pyrBorder: number, derivBorder: number): number;
				public static meanShift(probImage: org.opencv.core.Mat, window: org.opencv.core.Rect, criteria: org.opencv.core.TermCriteria): number;
				public static calcOpticalFlowPyrLK(prevImg: org.opencv.core.Mat, nextImg: org.opencv.core.Mat, prevPts: org.opencv.core.MatOfPoint2f, nextPts: org.opencv.core.MatOfPoint2f, status: org.opencv.core.MatOfByte, err: org.opencv.core.MatOfFloat): void;
				public static buildOpticalFlowPyramid(img: org.opencv.core.Mat, pyramid: java.util.List<org.opencv.core.Mat>, winSize: org.opencv.core.Size, maxLevel: number): number;
				public static CamShift(probImage: org.opencv.core.Mat, window: org.opencv.core.Rect, criteria: org.opencv.core.TermCriteria): org.opencv.core.RotatedRect;
				public static calcOpticalFlowFarneback(prev: org.opencv.core.Mat, next: org.opencv.core.Mat, flow: org.opencv.core.Mat, pyr_scale: number, param4: number, levels: number, winsize: number, iterations: number, poly_n: number, poly_sigma: number): void;
				public static findTransformECC(templateImage: org.opencv.core.Mat, inputImage: org.opencv.core.Mat, warpMatrix: org.opencv.core.Mat, motionType: number, criteria: org.opencv.core.TermCriteria, inputMask: org.opencv.core.Mat): number;
				public static createBackgroundSubtractorMOG2(): org.opencv.video.BackgroundSubtractorMOG2;
				public static calcOpticalFlowPyrLK(prevImg: org.opencv.core.Mat, nextImg: org.opencv.core.Mat, prevPts: org.opencv.core.MatOfPoint2f, nextPts: org.opencv.core.MatOfPoint2f, status: org.opencv.core.MatOfByte, err: org.opencv.core.MatOfFloat, winSize: org.opencv.core.Size, maxLevel: number, criteria: org.opencv.core.TermCriteria, flags: number): void;
				public static computeECC(templateImage: org.opencv.core.Mat, inputImage: org.opencv.core.Mat, inputMask: org.opencv.core.Mat): number;
				public static computeECC(templateImage: org.opencv.core.Mat, inputImage: org.opencv.core.Mat): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module videoio {
			export class VideoCapture extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.videoio.VideoCapture>;
				public nativeObj: number;
				public constructor(filename: string, apiPreference: number);
				public open(index: number, apiPreference: number, params: org.opencv.core.MatOfInt): boolean;
				public getBackendName(): string;
				public finalize(): void;
				public retrieve(image: org.opencv.core.Mat, flag: number): boolean;
				public constructor(index: number, apiPreference: number, params: org.opencv.core.MatOfInt);
				public read(image: org.opencv.core.Mat): boolean;
				public retrieve(image: org.opencv.core.Mat): boolean;
				public constructor();
				public open(filename: string, apiPreference: number, params: org.opencv.core.MatOfInt): boolean;
				public static __fromPtr__(addr: number): org.opencv.videoio.VideoCapture;
				public get(propId: number): number;
				public getExceptionMode(): boolean;
				public constructor(filename: string, apiPreference: number, params: org.opencv.core.MatOfInt);
				public setExceptionMode(enable: boolean): void;
				public constructor(filename: string);
				public release(): void;
				public set(propId: number, value: number): boolean;
				public constructor(index: number, apiPreference: number);
				public constructor(addr: number);
				public getNativeObjAddr(): number;
				public constructor(index: number);
				public open(filename: string, apiPreference: number): boolean;
				public grab(): boolean;
				public isOpened(): boolean;
				public open(index: number, apiPreference: number): boolean;
				public open(filename: string): boolean;
				public open(index: number): boolean;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module videoio {
			export class VideoWriter extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.videoio.VideoWriter>;
				public nativeObj: number;
				public open(filename: string, apiPreference: number, fourcc: number, fps: number, param4: org.opencv.core.Size, frameSize: boolean): boolean;
				public constructor(filename: string, apiPreference: number, fourcc: number, fps: number, param4: org.opencv.core.Size, frameSize: boolean);
				public open(filename: string, apiPreference: number, fourcc: number, fps: number, param4: org.opencv.core.Size, frameSize: org.opencv.core.MatOfInt): boolean;
				public release(): void;
				public set(propId: number, value: number): boolean;
				public getBackendName(): string;
				public constructor(filename: string, fourcc: number, fps: number, param3: org.opencv.core.Size, frameSize: org.opencv.core.MatOfInt);
				public constructor(addr: number);
				public constructor(filename: string, fourcc: number, fps: number, param3: org.opencv.core.Size);
				public constructor(filename: string, apiPreference: number, fourcc: number, fps: number, param4: org.opencv.core.Size);
				public finalize(): void;
				public getNativeObjAddr(): number;
				public open(filename: string, fourcc: number, fps: number, param3: org.opencv.core.Size, frameSize: boolean): boolean;
				public constructor();
				public static fourcc(c1: string, c2: string, c3: string, c4: string): number;
				public open(filename: string, apiPreference: number, fourcc: number, fps: number, param4: org.opencv.core.Size): boolean;
				public isOpened(): boolean;
				public static __fromPtr__(addr: number): org.opencv.videoio.VideoWriter;
				public open(filename: string, fourcc: number, fps: number, param3: org.opencv.core.Size): boolean;
				public get(propId: number): number;
				public constructor(filename: string, apiPreference: number, fourcc: number, fps: number, param4: org.opencv.core.Size, frameSize: org.opencv.core.MatOfInt);
				public write(image: org.opencv.core.Mat): void;
				public open(filename: string, fourcc: number, fps: number, param3: org.opencv.core.Size, frameSize: org.opencv.core.MatOfInt): boolean;
				public constructor(filename: string, fourcc: number, fps: number, param3: org.opencv.core.Size, frameSize: boolean);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module videoio {
			export class Videoio extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.videoio.Videoio>;
				public static CAP_PROP_DC1394_OFF: number;
				public static CAP_PROP_DC1394_MODE_MANUAL: number;
				public static CAP_PROP_DC1394_MODE_AUTO: number;
				public static CAP_PROP_DC1394_MODE_ONE_PUSH_AUTO: number;
				public static CAP_PROP_DC1394_MAX: number;
				public static CAP_OPENNI_DEPTH_GENERATOR: number;
				public static CAP_OPENNI_IMAGE_GENERATOR: number;
				public static CAP_OPENNI_IR_GENERATOR: number;
				public static CAP_OPENNI_GENERATORS_MASK: number;
				public static CAP_PROP_OPENNI_OUTPUT_MODE: number;
				public static CAP_PROP_OPENNI_FRAME_MAX_DEPTH: number;
				public static CAP_PROP_OPENNI_BASELINE: number;
				public static CAP_PROP_OPENNI_FOCAL_LENGTH: number;
				public static CAP_PROP_OPENNI_REGISTRATION: number;
				public static CAP_PROP_OPENNI_REGISTRATION_ON: number;
				public static CAP_PROP_OPENNI_APPROX_FRAME_SYNC: number;
				public static CAP_PROP_OPENNI_MAX_BUFFER_SIZE: number;
				public static CAP_PROP_OPENNI_CIRCLE_BUFFER: number;
				public static CAP_PROP_OPENNI_MAX_TIME_DURATION: number;
				public static CAP_PROP_OPENNI_GENERATOR_PRESENT: number;
				public static CAP_PROP_OPENNI2_SYNC: number;
				public static CAP_PROP_OPENNI2_MIRROR: number;
				public static CAP_OPENNI_IMAGE_GENERATOR_PRESENT: number;
				public static CAP_OPENNI_IMAGE_GENERATOR_OUTPUT_MODE: number;
				public static CAP_OPENNI_DEPTH_GENERATOR_PRESENT: number;
				public static CAP_OPENNI_DEPTH_GENERATOR_BASELINE: number;
				public static CAP_OPENNI_DEPTH_GENERATOR_FOCAL_LENGTH: number;
				public static CAP_OPENNI_DEPTH_GENERATOR_REGISTRATION: number;
				public static CAP_OPENNI_DEPTH_GENERATOR_REGISTRATION_ON: number;
				public static CAP_OPENNI_IR_GENERATOR_PRESENT: number;
				public static CAP_OPENNI_DEPTH_MAP: number;
				public static CAP_OPENNI_POINT_CLOUD_MAP: number;
				public static CAP_OPENNI_DISPARITY_MAP: number;
				public static CAP_OPENNI_DISPARITY_MAP_32F: number;
				public static CAP_OPENNI_VALID_DEPTH_MASK: number;
				public static CAP_OPENNI_BGR_IMAGE: number;
				public static CAP_OPENNI_GRAY_IMAGE: number;
				public static CAP_OPENNI_IR_IMAGE: number;
				public static CAP_OPENNI_VGA_30HZ: number;
				public static CAP_OPENNI_SXGA_15HZ: number;
				public static CAP_OPENNI_SXGA_30HZ: number;
				public static CAP_OPENNI_QVGA_30HZ: number;
				public static CAP_OPENNI_QVGA_60HZ: number;
				public static CAP_PROP_GSTREAMER_QUEUE_LENGTH: number;
				public static CAP_PROP_PVAPI_MULTICASTIP: number;
				public static CAP_PROP_PVAPI_FRAMESTARTTRIGGERMODE: number;
				public static CAP_PROP_PVAPI_DECIMATIONHORIZONTAL: number;
				public static CAP_PROP_PVAPI_DECIMATIONVERTICAL: number;
				public static CAP_PROP_PVAPI_BINNINGX: number;
				public static CAP_PROP_PVAPI_BINNINGY: number;
				public static CAP_PROP_PVAPI_PIXELFORMAT: number;
				public static CAP_PVAPI_FSTRIGMODE_FREERUN: number;
				public static CAP_PVAPI_FSTRIGMODE_SYNCIN1: number;
				public static CAP_PVAPI_FSTRIGMODE_SYNCIN2: number;
				public static CAP_PVAPI_FSTRIGMODE_FIXEDRATE: number;
				public static CAP_PVAPI_FSTRIGMODE_SOFTWARE: number;
				public static CAP_PVAPI_DECIMATION_OFF: number;
				public static CAP_PVAPI_DECIMATION_2OUTOF4: number;
				public static CAP_PVAPI_DECIMATION_2OUTOF8: number;
				public static CAP_PVAPI_DECIMATION_2OUTOF16: number;
				public static CAP_PVAPI_PIXELFORMAT_MONO8: number;
				public static CAP_PVAPI_PIXELFORMAT_MONO16: number;
				public static CAP_PVAPI_PIXELFORMAT_BAYER8: number;
				public static CAP_PVAPI_PIXELFORMAT_BAYER16: number;
				public static CAP_PVAPI_PIXELFORMAT_RGB24: number;
				public static CAP_PVAPI_PIXELFORMAT_BGR24: number;
				public static CAP_PVAPI_PIXELFORMAT_RGBA32: number;
				public static CAP_PVAPI_PIXELFORMAT_BGRA32: number;
				public static CAP_PROP_XI_DOWNSAMPLING: number;
				public static CAP_PROP_XI_DATA_FORMAT: number;
				public static CAP_PROP_XI_OFFSET_X: number;
				public static CAP_PROP_XI_OFFSET_Y: number;
				public static CAP_PROP_XI_TRG_SOURCE: number;
				public static CAP_PROP_XI_TRG_SOFTWARE: number;
				public static CAP_PROP_XI_GPI_SELECTOR: number;
				public static CAP_PROP_XI_GPI_MODE: number;
				public static CAP_PROP_XI_GPI_LEVEL: number;
				public static CAP_PROP_XI_GPO_SELECTOR: number;
				public static CAP_PROP_XI_GPO_MODE: number;
				public static CAP_PROP_XI_LED_SELECTOR: number;
				public static CAP_PROP_XI_LED_MODE: number;
				public static CAP_PROP_XI_MANUAL_WB: number;
				public static CAP_PROP_XI_AUTO_WB: number;
				public static CAP_PROP_XI_AEAG: number;
				public static CAP_PROP_XI_EXP_PRIORITY: number;
				public static CAP_PROP_XI_AE_MAX_LIMIT: number;
				public static CAP_PROP_XI_AG_MAX_LIMIT: number;
				public static CAP_PROP_XI_AEAG_LEVEL: number;
				public static CAP_PROP_XI_TIMEOUT: number;
				public static CAP_PROP_XI_EXPOSURE: number;
				public static CAP_PROP_XI_EXPOSURE_BURST_COUNT: number;
				public static CAP_PROP_XI_GAIN_SELECTOR: number;
				public static CAP_PROP_XI_GAIN: number;
				public static CAP_PROP_XI_DOWNSAMPLING_TYPE: number;
				public static CAP_PROP_XI_BINNING_SELECTOR: number;
				public static CAP_PROP_XI_BINNING_VERTICAL: number;
				public static CAP_PROP_XI_BINNING_HORIZONTAL: number;
				public static CAP_PROP_XI_BINNING_PATTERN: number;
				public static CAP_PROP_XI_DECIMATION_SELECTOR: number;
				public static CAP_PROP_XI_DECIMATION_VERTICAL: number;
				public static CAP_PROP_XI_DECIMATION_HORIZONTAL: number;
				public static CAP_PROP_XI_DECIMATION_PATTERN: number;
				public static CAP_PROP_XI_TEST_PATTERN_GENERATOR_SELECTOR: number;
				public static CAP_PROP_XI_TEST_PATTERN: number;
				public static CAP_PROP_XI_IMAGE_DATA_FORMAT: number;
				public static CAP_PROP_XI_SHUTTER_TYPE: number;
				public static CAP_PROP_XI_SENSOR_TAPS: number;
				public static CAP_PROP_XI_AEAG_ROI_OFFSET_X: number;
				public static CAP_PROP_XI_AEAG_ROI_OFFSET_Y: number;
				public static CAP_PROP_XI_AEAG_ROI_WIDTH: number;
				public static CAP_PROP_XI_AEAG_ROI_HEIGHT: number;
				public static CAP_PROP_XI_BPC: number;
				public static CAP_PROP_XI_WB_KR: number;
				public static CAP_PROP_XI_WB_KG: number;
				public static CAP_PROP_XI_WB_KB: number;
				public static CAP_PROP_XI_WIDTH: number;
				public static CAP_PROP_XI_HEIGHT: number;
				public static CAP_PROP_XI_REGION_SELECTOR: number;
				public static CAP_PROP_XI_REGION_MODE: number;
				public static CAP_PROP_XI_LIMIT_BANDWIDTH: number;
				public static CAP_PROP_XI_SENSOR_DATA_BIT_DEPTH: number;
				public static CAP_PROP_XI_OUTPUT_DATA_BIT_DEPTH: number;
				public static CAP_PROP_XI_IMAGE_DATA_BIT_DEPTH: number;
				public static CAP_PROP_XI_OUTPUT_DATA_PACKING: number;
				public static CAP_PROP_XI_OUTPUT_DATA_PACKING_TYPE: number;
				public static CAP_PROP_XI_IS_COOLED: number;
				public static CAP_PROP_XI_COOLING: number;
				public static CAP_PROP_XI_TARGET_TEMP: number;
				public static CAP_PROP_XI_CHIP_TEMP: number;
				public static CAP_PROP_XI_HOUS_TEMP: number;
				public static CAP_PROP_XI_HOUS_BACK_SIDE_TEMP: number;
				public static CAP_PROP_XI_SENSOR_BOARD_TEMP: number;
				public static CAP_PROP_XI_CMS: number;
				public static CAP_PROP_XI_APPLY_CMS: number;
				public static CAP_PROP_XI_IMAGE_IS_COLOR: number;
				public static CAP_PROP_XI_COLOR_FILTER_ARRAY: number;
				public static CAP_PROP_XI_GAMMAY: number;
				public static CAP_PROP_XI_GAMMAC: number;
				public static CAP_PROP_XI_SHARPNESS: number;
				public static CAP_PROP_XI_CC_MATRIX_00: number;
				public static CAP_PROP_XI_CC_MATRIX_01: number;
				public static CAP_PROP_XI_CC_MATRIX_02: number;
				public static CAP_PROP_XI_CC_MATRIX_03: number;
				public static CAP_PROP_XI_CC_MATRIX_10: number;
				public static CAP_PROP_XI_CC_MATRIX_11: number;
				public static CAP_PROP_XI_CC_MATRIX_12: number;
				public static CAP_PROP_XI_CC_MATRIX_13: number;
				public static CAP_PROP_XI_CC_MATRIX_20: number;
				public static CAP_PROP_XI_CC_MATRIX_21: number;
				public static CAP_PROP_XI_CC_MATRIX_22: number;
				public static CAP_PROP_XI_CC_MATRIX_23: number;
				public static CAP_PROP_XI_CC_MATRIX_30: number;
				public static CAP_PROP_XI_CC_MATRIX_31: number;
				public static CAP_PROP_XI_CC_MATRIX_32: number;
				public static CAP_PROP_XI_CC_MATRIX_33: number;
				public static CAP_PROP_XI_DEFAULT_CC_MATRIX: number;
				public static CAP_PROP_XI_TRG_SELECTOR: number;
				public static CAP_PROP_XI_ACQ_FRAME_BURST_COUNT: number;
				public static CAP_PROP_XI_DEBOUNCE_EN: number;
				public static CAP_PROP_XI_DEBOUNCE_T0: number;
				public static CAP_PROP_XI_DEBOUNCE_T1: number;
				public static CAP_PROP_XI_DEBOUNCE_POL: number;
				public static CAP_PROP_XI_LENS_MODE: number;
				public static CAP_PROP_XI_LENS_APERTURE_VALUE: number;
				public static CAP_PROP_XI_LENS_FOCUS_MOVEMENT_VALUE: number;
				public static CAP_PROP_XI_LENS_FOCUS_MOVE: number;
				public static CAP_PROP_XI_LENS_FOCUS_DISTANCE: number;
				public static CAP_PROP_XI_LENS_FOCAL_LENGTH: number;
				public static CAP_PROP_XI_LENS_FEATURE_SELECTOR: number;
				public static CAP_PROP_XI_LENS_FEATURE: number;
				public static CAP_PROP_XI_DEVICE_MODEL_ID: number;
				public static CAP_PROP_XI_DEVICE_SN: number;
				public static CAP_PROP_XI_IMAGE_DATA_FORMAT_RGB32_ALPHA: number;
				public static CAP_PROP_XI_IMAGE_PAYLOAD_SIZE: number;
				public static CAP_PROP_XI_TRANSPORT_PIXEL_FORMAT: number;
				public static CAP_PROP_XI_SENSOR_CLOCK_FREQ_HZ: number;
				public static CAP_PROP_XI_SENSOR_CLOCK_FREQ_INDEX: number;
				public static CAP_PROP_XI_SENSOR_OUTPUT_CHANNEL_COUNT: number;
				public static CAP_PROP_XI_FRAMERATE: number;
				public static CAP_PROP_XI_COUNTER_SELECTOR: number;
				public static CAP_PROP_XI_COUNTER_VALUE: number;
				public static CAP_PROP_XI_ACQ_TIMING_MODE: number;
				public static CAP_PROP_XI_AVAILABLE_BANDWIDTH: number;
				public static CAP_PROP_XI_BUFFER_POLICY: number;
				public static CAP_PROP_XI_LUT_EN: number;
				public static CAP_PROP_XI_LUT_INDEX: number;
				public static CAP_PROP_XI_LUT_VALUE: number;
				public static CAP_PROP_XI_TRG_DELAY: number;
				public static CAP_PROP_XI_TS_RST_MODE: number;
				public static CAP_PROP_XI_TS_RST_SOURCE: number;
				public static CAP_PROP_XI_IS_DEVICE_EXIST: number;
				public static CAP_PROP_XI_ACQ_BUFFER_SIZE: number;
				public static CAP_PROP_XI_ACQ_BUFFER_SIZE_UNIT: number;
				public static CAP_PROP_XI_ACQ_TRANSPORT_BUFFER_SIZE: number;
				public static CAP_PROP_XI_BUFFERS_QUEUE_SIZE: number;
				public static CAP_PROP_XI_ACQ_TRANSPORT_BUFFER_COMMIT: number;
				public static CAP_PROP_XI_RECENT_FRAME: number;
				public static CAP_PROP_XI_DEVICE_RESET: number;
				public static CAP_PROP_XI_COLUMN_FPN_CORRECTION: number;
				public static CAP_PROP_XI_ROW_FPN_CORRECTION: number;
				public static CAP_PROP_XI_SENSOR_MODE: number;
				public static CAP_PROP_XI_HDR: number;
				public static CAP_PROP_XI_HDR_KNEEPOINT_COUNT: number;
				public static CAP_PROP_XI_HDR_T1: number;
				public static CAP_PROP_XI_HDR_T2: number;
				public static CAP_PROP_XI_KNEEPOINT1: number;
				public static CAP_PROP_XI_KNEEPOINT2: number;
				public static CAP_PROP_XI_IMAGE_BLACK_LEVEL: number;
				public static CAP_PROP_XI_HW_REVISION: number;
				public static CAP_PROP_XI_DEBUG_LEVEL: number;
				public static CAP_PROP_XI_AUTO_BANDWIDTH_CALCULATION: number;
				public static CAP_PROP_XI_FFS_FILE_ID: number;
				public static CAP_PROP_XI_FFS_FILE_SIZE: number;
				public static CAP_PROP_XI_FREE_FFS_SIZE: number;
				public static CAP_PROP_XI_USED_FFS_SIZE: number;
				public static CAP_PROP_XI_FFS_ACCESS_KEY: number;
				public static CAP_PROP_XI_SENSOR_FEATURE_SELECTOR: number;
				public static CAP_PROP_XI_SENSOR_FEATURE_VALUE: number;
				public static CAP_PROP_ARAVIS_AUTOTRIGGER: number;
				public static CAP_PROP_IOS_DEVICE_FOCUS: number;
				public static CAP_PROP_IOS_DEVICE_EXPOSURE: number;
				public static CAP_PROP_IOS_DEVICE_FLASH: number;
				public static CAP_PROP_IOS_DEVICE_WHITEBALANCE: number;
				public static CAP_PROP_IOS_DEVICE_TORCH: number;
				public static CAP_PROP_GIGA_FRAME_OFFSET_X: number;
				public static CAP_PROP_GIGA_FRAME_OFFSET_Y: number;
				public static CAP_PROP_GIGA_FRAME_WIDTH_MAX: number;
				public static CAP_PROP_GIGA_FRAME_HEIGH_MAX: number;
				public static CAP_PROP_GIGA_FRAME_SENS_WIDTH: number;
				public static CAP_PROP_GIGA_FRAME_SENS_HEIGH: number;
				public static CAP_PROP_INTELPERC_PROFILE_COUNT: number;
				public static CAP_PROP_INTELPERC_PROFILE_IDX: number;
				public static CAP_PROP_INTELPERC_DEPTH_LOW_CONFIDENCE_VALUE: number;
				public static CAP_PROP_INTELPERC_DEPTH_SATURATION_VALUE: number;
				public static CAP_PROP_INTELPERC_DEPTH_CONFIDENCE_THRESHOLD: number;
				public static CAP_PROP_INTELPERC_DEPTH_FOCAL_LENGTH_HORZ: number;
				public static CAP_PROP_INTELPERC_DEPTH_FOCAL_LENGTH_VERT: number;
				public static CAP_INTELPERC_DEPTH_GENERATOR: number;
				public static CAP_INTELPERC_IMAGE_GENERATOR: number;
				public static CAP_INTELPERC_IR_GENERATOR: number;
				public static CAP_INTELPERC_GENERATORS_MASK: number;
				public static CAP_INTELPERC_DEPTH_MAP: number;
				public static CAP_INTELPERC_UVDEPTH_MAP: number;
				public static CAP_INTELPERC_IR_MAP: number;
				public static CAP_INTELPERC_IMAGE: number;
				public static CAP_PROP_GPHOTO2_PREVIEW: number;
				public static CAP_PROP_GPHOTO2_WIDGET_ENUMERATE: number;
				public static CAP_PROP_GPHOTO2_RELOAD_CONFIG: number;
				public static CAP_PROP_GPHOTO2_RELOAD_ON_CHANGE: number;
				public static CAP_PROP_GPHOTO2_COLLECT_MSGS: number;
				public static CAP_PROP_GPHOTO2_FLUSH_MSGS: number;
				public static CAP_PROP_SPEED: number;
				public static CAP_PROP_APERTURE: number;
				public static CAP_PROP_EXPOSUREPROGRAM: number;
				public static CAP_PROP_VIEWFINDER: number;
				public static CAP_PROP_IMAGES_BASE: number;
				public static CAP_PROP_IMAGES_LAST: number;
				public static VIDEO_ACCELERATION_NONE: number;
				public static VIDEO_ACCELERATION_ANY: number;
				public static VIDEO_ACCELERATION_D3D11: number;
				public static VIDEO_ACCELERATION_VAAPI: number;
				public static VIDEO_ACCELERATION_MFX: number;
				public static CAP_ANY: number;
				public static CAP_VFW: number;
				public static CAP_V4L: number;
				public static CAP_V4L2: number;
				public static CAP_FIREWIRE: number;
				public static CAP_FIREWARE: number;
				public static CAP_IEEE1394: number;
				public static CAP_DC1394: number;
				public static CAP_CMU1394: number;
				public static CAP_QT: number;
				public static CAP_UNICAP: number;
				public static CAP_DSHOW: number;
				public static CAP_PVAPI: number;
				public static CAP_OPENNI: number;
				public static CAP_OPENNI_ASUS: number;
				public static CAP_ANDROID: number;
				public static CAP_XIAPI: number;
				public static CAP_AVFOUNDATION: number;
				public static CAP_GIGANETIX: number;
				public static CAP_MSMF: number;
				public static CAP_WINRT: number;
				public static CAP_INTELPERC: number;
				public static CAP_REALSENSE: number;
				public static CAP_OPENNI2: number;
				public static CAP_OPENNI2_ASUS: number;
				public static CAP_OPENNI2_ASTRA: number;
				public static CAP_GPHOTO2: number;
				public static CAP_GSTREAMER: number;
				public static CAP_FFMPEG: number;
				public static CAP_IMAGES: number;
				public static CAP_ARAVIS: number;
				public static CAP_OPENCV_MJPEG: number;
				public static CAP_INTEL_MFX: number;
				public static CAP_XINE: number;
				public static CAP_UEYE: number;
				public static CAP_OBSENSOR: number;
				public static CAP_OBSENSOR_DEPTH_MAP: number;
				public static CAP_OBSENSOR_BGR_IMAGE: number;
				public static CAP_OBSENSOR_IR_IMAGE: number;
				public static CAP_OBSENSOR_DEPTH_GENERATOR: number;
				public static CAP_OBSENSOR_IMAGE_GENERATOR: number;
				public static CAP_OBSENSOR_IR_GENERATOR: number;
				public static CAP_OBSENSOR_GENERATORS_MASK: number;
				public static CAP_PROP_OBSENSOR_INTRINSIC_FX: number;
				public static CAP_PROP_OBSENSOR_INTRINSIC_FY: number;
				public static CAP_PROP_OBSENSOR_INTRINSIC_CX: number;
				public static CAP_PROP_OBSENSOR_INTRINSIC_CY: number;
				public static CAP_PROP_POS_MSEC: number;
				public static CAP_PROP_POS_FRAMES: number;
				public static CAP_PROP_POS_AVI_RATIO: number;
				public static CAP_PROP_FRAME_WIDTH: number;
				public static CAP_PROP_FRAME_HEIGHT: number;
				public static CAP_PROP_FPS: number;
				public static CAP_PROP_FOURCC: number;
				public static CAP_PROP_FRAME_COUNT: number;
				public static CAP_PROP_FORMAT: number;
				public static CAP_PROP_MODE: number;
				public static CAP_PROP_BRIGHTNESS: number;
				public static CAP_PROP_CONTRAST: number;
				public static CAP_PROP_SATURATION: number;
				public static CAP_PROP_HUE: number;
				public static CAP_PROP_GAIN: number;
				public static CAP_PROP_EXPOSURE: number;
				public static CAP_PROP_CONVERT_RGB: number;
				public static CAP_PROP_WHITE_BALANCE_BLUE_U: number;
				public static CAP_PROP_RECTIFICATION: number;
				public static CAP_PROP_MONOCHROME: number;
				public static CAP_PROP_SHARPNESS: number;
				public static CAP_PROP_AUTO_EXPOSURE: number;
				public static CAP_PROP_GAMMA: number;
				public static CAP_PROP_TEMPERATURE: number;
				public static CAP_PROP_TRIGGER: number;
				public static CAP_PROP_TRIGGER_DELAY: number;
				public static CAP_PROP_WHITE_BALANCE_RED_V: number;
				public static CAP_PROP_ZOOM: number;
				public static CAP_PROP_FOCUS: number;
				public static CAP_PROP_GUID: number;
				public static CAP_PROP_ISO_SPEED: number;
				public static CAP_PROP_BACKLIGHT: number;
				public static CAP_PROP_PAN: number;
				public static CAP_PROP_TILT: number;
				public static CAP_PROP_ROLL: number;
				public static CAP_PROP_IRIS: number;
				public static CAP_PROP_SETTINGS: number;
				public static CAP_PROP_BUFFERSIZE: number;
				public static CAP_PROP_AUTOFOCUS: number;
				public static CAP_PROP_SAR_NUM: number;
				public static CAP_PROP_SAR_DEN: number;
				public static CAP_PROP_BACKEND: number;
				public static CAP_PROP_CHANNEL: number;
				public static CAP_PROP_AUTO_WB: number;
				public static CAP_PROP_WB_TEMPERATURE: number;
				public static CAP_PROP_CODEC_PIXEL_FORMAT: number;
				public static CAP_PROP_BITRATE: number;
				public static CAP_PROP_ORIENTATION_META: number;
				public static CAP_PROP_ORIENTATION_AUTO: number;
				public static CAP_PROP_HW_ACCELERATION: number;
				public static CAP_PROP_HW_DEVICE: number;
				public static CAP_PROP_HW_ACCELERATION_USE_OPENCL: number;
				public static CAP_PROP_OPEN_TIMEOUT_MSEC: number;
				public static CAP_PROP_READ_TIMEOUT_MSEC: number;
				public static CAP_PROP_STREAM_OPEN_TIME_USEC: number;
				public static CAP_PROP_VIDEO_TOTAL_CHANNELS: number;
				public static CAP_PROP_VIDEO_STREAM: number;
				public static CAP_PROP_AUDIO_STREAM: number;
				public static CAP_PROP_AUDIO_POS: number;
				public static CAP_PROP_AUDIO_SHIFT_NSEC: number;
				public static CAP_PROP_AUDIO_DATA_DEPTH: number;
				public static CAP_PROP_AUDIO_SAMPLES_PER_SECOND: number;
				public static CAP_PROP_AUDIO_BASE_INDEX: number;
				public static CAP_PROP_AUDIO_TOTAL_CHANNELS: number;
				public static CAP_PROP_AUDIO_TOTAL_STREAMS: number;
				public static CAP_PROP_AUDIO_SYNCHRONIZE: number;
				public static CAP_PROP_LRF_HAS_KEY_FRAME: number;
				public static CAP_PROP_CODEC_EXTRADATA_INDEX: number;
				public static CAP_PROP_FRAME_TYPE: number;
				public static CAP_PROP_N_THREADS: number;
				public static VIDEOWRITER_PROP_QUALITY: number;
				public static VIDEOWRITER_PROP_FRAMEBYTES: number;
				public static VIDEOWRITER_PROP_NSTRIPES: number;
				public static VIDEOWRITER_PROP_IS_COLOR: number;
				public static VIDEOWRITER_PROP_DEPTH: number;
				public static VIDEOWRITER_PROP_HW_ACCELERATION: number;
				public static VIDEOWRITER_PROP_HW_DEVICE: number;
				public static VIDEOWRITER_PROP_HW_ACCELERATION_USE_OPENCL: number;
				public static getWriterBackendPluginVersion(api: number, version_ABI: number[], version_API: number[]): string;
				public static isBackendBuiltIn(api: number): boolean;
				public static getBackendName(api: number): string;
				public static getCameraBackendPluginVersion(api: number, version_ABI: number[], version_API: number[]): string;
				public static hasBackend(api: number): boolean;
				public static getStreamBackendPluginVersion(api: number, version_ABI: number[], version_API: number[]): string;
				public constructor();
			}
		}
	}
}

//Generics information:
//org.opencv.core.Mat.Atable:1
//org.opencv.core.Mat.Tuple2:1
//org.opencv.core.Mat.Tuple3:1
//org.opencv.core.Mat.Tuple4:1

