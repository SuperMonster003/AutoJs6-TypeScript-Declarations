/// <reference path="../android.d.ts" />

declare module org {
	export module opencv {
		export class BuildConfig extends java.lang.Object {
			public static class: java.lang.Class<org.opencv.BuildConfig>;
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

declare module org {
	export module opencv {
		export class R extends java.lang.Object {
			public static class: java.lang.Class<org.opencv.R>;
		}
		export module R {
			export class attr extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.R.attr>;
				public static camera_id: number;
				public static show_fps: number;
			}
			export class id extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.R.id>;
				public static any: number;
				public static back: number;
				public static front: number;
			}
			export class styleable extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.R.styleable>;
				public static CameraBridgeViewBase: number[];
				public static CameraBridgeViewBase_camera_id: number;
				public static CameraBridgeViewBase_show_fps: number;
			}
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
				public mAppContext: globalAndroid.content.Context;
				public static mServiceInstallationProgress: boolean;
				public static mLibraryInstallationProgress: boolean;
				public static OPEN_CV_SERVICE_URL: string;
				public mServiceConnection: globalAndroid.content.ServiceConnection;
				public static InstallService(param0: globalAndroid.content.Context, param1: org.opencv.android.LoaderCallbackInterface): void;
				public static InstallServiceQuiet(param0: globalAndroid.content.Context): boolean;
				public static initOpenCV(param0: string, param1: globalAndroid.content.Context, param2: org.opencv.android.LoaderCallbackInterface): boolean;
				public constructor(param0: string, param1: globalAndroid.content.Context, param2: org.opencv.android.LoaderCallbackInterface);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module android {
			export abstract class BaseLoaderCallback extends java.lang.Object implements org.opencv.android.LoaderCallbackInterface {
				public static class: java.lang.Class<org.opencv.android.BaseLoaderCallback>;
				public mAppContext: globalAndroid.content.Context;
				public constructor(param0: globalAndroid.content.Context);
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
				public setCameraPreviewSize(param0: number, param1: number): void;
				public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
				public doStart(): void;
				public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
				public openCamera(param0: number): void;
				public onFrameAvailable(param0: globalAndroid.graphics.SurfaceTexture): void;
				public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
				public doStop(): void;
				public closeCamera(): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module android {
			export abstract class CameraBridgeViewBase extends globalAndroid.view.SurfaceView implements globalAndroid.view.SurfaceHolder.Callback {
				public static class: java.lang.Class<org.opencv.android.CameraBridgeViewBase>;
				public mFrameWidth: number;
				public mFrameHeight: number;
				public mMaxHeight: number;
				public mMaxWidth: number;
				public mScale: number;
				public mPreviewFormat: number;
				public mCameraIndex: number;
				public mEnabled: boolean;
				public mFpsMeter: org.opencv.android.FpsMeter;
				public static CAMERA_ID_ANY: number;
				public static CAMERA_ID_BACK: number;
				public static CAMERA_ID_FRONT: number;
				public static RGBA: number;
				public static GRAY: number;
				public enableView(): void;
				public setCvCameraViewListener(param0: org.opencv.android.CameraBridgeViewBase.CvCameraViewListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
				public disableView(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public sendAccessibilityEvent(param0: number): void;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public disconnectCamera(): void;
				public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public setCameraIndex(param0: number): void;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setMaxFrameSize(param0: number, param1: number): void;
				public AllocateCache(): void;
				public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public connectCamera(param0: number, param1: number): boolean;
				public enableFpsMeter(): void;
				public setCvCameraViewListener(param0: org.opencv.android.CameraBridgeViewBase.CvCameraViewListener2): void;
				public SetCaptureFormat(param0: number): void;
				public disableFpsMeter(): void;
				public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public windowStopped(param0: boolean): void;
				public deliverAndDrawFrame(param0: org.opencv.android.CameraBridgeViewBase.CvCameraViewFrame): void;
				public calculateCameraFrameSize(param0: java.util.List<any>, param1: org.opencv.android.CameraBridgeViewBase.ListItemAccessor, param2: number, param3: number): org.opencv.core.Size;
				public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
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
					public constructor(param0: org.opencv.android.CameraBridgeViewBase, param1: org.opencv.android.CameraBridgeViewBase.CvCameraViewListener);
					public onCameraViewStarted(param0: number, param1: number): void;
					public setFrameFormat(param0: number): void;
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
			export abstract class CameraGLRendererBase extends java.lang.Object implements globalAndroid.opengl.GLSurfaceView.Renderer, globalAndroid.graphics.SurfaceTexture.OnFrameAvailableListener {
				public static class: java.lang.Class<org.opencv.android.CameraGLRendererBase>;
				public LOGTAG: string;
				public mCameraWidth: number;
				public mCameraHeight: number;
				public mFBOWidth: number;
				public mFBOHeight: number;
				public mMaxCameraWidth: number;
				public mMaxCameraHeight: number;
				public mCameraIndex: number;
				public mSTexture: globalAndroid.graphics.SurfaceTexture;
				public mHaveSurface: boolean;
				public mHaveFBO: boolean;
				public mUpdateST: boolean;
				public mEnabled: boolean;
				public mIsStarted: boolean;
				public mView: org.opencv.android.CameraGLSurfaceView;
				public enableView(): void;
				public onResume(): void;
				public setPreviewSize(param0: number, param1: number): void;
				public setCameraPreviewSize(param0: number, param1: number): void;
				public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
				public onPause(): void;
				public openCamera(param0: number): void;
				public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
				public disableView(): void;
				public closeCamera(): void;
				public setMaxCameraPreviewSize(param0: number, param1: number): void;
				public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
				public doStart(): void;
				public constructor(param0: org.opencv.android.CameraGLSurfaceView);
				public onFrameAvailable(param0: globalAndroid.graphics.SurfaceTexture): void;
				public updateState(): void;
				public setCameraIndex(param0: number): void;
				public doStop(): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module android {
			export class CameraGLSurfaceView extends globalAndroid.opengl.GLSurfaceView {
				public static class: java.lang.Class<org.opencv.android.CameraGLSurfaceView>;
				public enableView(): void;
				public surfaceRedrawNeededAsync(param0: globalAndroid.view.SurfaceHolder, param1: java.lang.Runnable): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public onPause(): void;
				public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
				public disableView(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public sendAccessibilityEvent(param0: number): void;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public setCameraIndex(param0: number): void;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
				public setCameraTextureListener(param0: org.opencv.android.CameraGLSurfaceView.CameraTextureListener): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onResume(): void;
				public setMaxCameraPreviewSize(param0: number, param1: number): void;
				public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public windowStopped(param0: boolean): void;
				public surfaceRedrawNeeded(param0: globalAndroid.view.SurfaceHolder): void;
				public getCameraTextureListener(): org.opencv.android.CameraGLSurfaceView.CameraTextureListener;
				public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
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
				public setCameraPreviewSize(param0: number, param1: number): void;
				public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
				public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
				public openCamera(param0: number): void;
				public onFrameAvailable(param0: globalAndroid.graphics.SurfaceTexture): void;
				public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
				public closeCamera(): void;
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
				public draw(param0: globalAndroid.graphics.Canvas, param1: number, param2: number): void;
				public setResolution(param0: number, param1: number): void;
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
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public connectCamera(param0: number, param1: number): boolean;
				public initializeCamera(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(param0: number): void;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public disconnectCamera(): void;
				public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public windowStopped(param0: boolean): void;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
				public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
			}
			export module JavaCamera2View {
				export class JavaCamera2Frame extends java.lang.Object implements org.opencv.android.CameraBridgeViewBase.CvCameraViewFrame {
					public static class: java.lang.Class<org.opencv.android.JavaCamera2View.JavaCamera2Frame>;
					public constructor(param0: org.opencv.android.JavaCamera2View, param1: org.opencv.core.Mat, param2: number, param3: number);
					public rgba(): org.opencv.core.Mat;
					public gray(): org.opencv.core.Mat;
					public release(): void;
					public constructor(param0: org.opencv.android.JavaCamera2View, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number);
				}
			}
		}
	}
}

declare module org {
	export module opencv {
		export module android {
			export class JavaCameraView extends org.opencv.android.CameraBridgeViewBase implements globalAndroid.hardware.Camera.PreviewCallback {
				public static class: java.lang.Class<org.opencv.android.JavaCameraView>;
				public mCamera: globalAndroid.hardware.Camera;
				public mCameraFrame: Array<org.opencv.android.JavaCameraView.JavaCameraFrame>;
				public initializeCamera(param0: number, param1: number): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public connectCamera(param0: number, param1: number): boolean;
				public onPreviewFrame(param0: number[], param1: globalAndroid.hardware.Camera): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public releaseCamera(): void;
				public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public sendAccessibilityEvent(param0: number): void;
				public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
				public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public disconnectCamera(): void;
				public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
				public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				public windowStopped(param0: boolean): void;
				public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
				public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
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
					public constructor(param0: org.opencv.android.JavaCameraView, param1: org.opencv.core.Mat, param2: number, param3: number);
				}
				export class JavaCameraSizeAccessor extends java.lang.Object implements org.opencv.android.CameraBridgeViewBase.ListItemAccessor {
					public static class: java.lang.Class<org.opencv.android.JavaCameraView.JavaCameraSizeAccessor>;
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
				public static initDebug(): boolean;
				public static initDebug(param0: boolean): boolean;
				public static initAsync(param0: string, param1: globalAndroid.content.Context, param2: org.opencv.android.LoaderCallbackInterface): boolean;
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
				public static initOpenCV(param0: boolean): boolean;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module android {
			export class Utils extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.android.Utils>;
				public static loadResource(param0: globalAndroid.content.Context, param1: number, param2: number): org.opencv.core.Mat;
				public static bitmapToMat(param0: globalAndroid.graphics.Bitmap, param1: org.opencv.core.Mat, param2: boolean): void;
				public static bitmapToMat(param0: globalAndroid.graphics.Bitmap, param1: org.opencv.core.Mat): void;
				public static exportResource(param0: globalAndroid.content.Context, param1: number, param2: string): string;
				public static matToBitmap(param0: org.opencv.core.Mat, param1: globalAndroid.graphics.Bitmap, param2: boolean): void;
				public static exportResource(param0: globalAndroid.content.Context, param1: number): string;
				public constructor();
				public static loadResource(param0: globalAndroid.content.Context, param1: number): org.opencv.core.Mat;
				public static matToBitmap(param0: org.opencv.core.Mat, param1: globalAndroid.graphics.Bitmap): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module calib3d {
			export class Calib3d extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.calib3d.Calib3d>;
				public static CALIB_USE_INTRINSIC_GUESS: number;
				public static CALIB_RECOMPUTE_EXTRINSIC: number;
				public static CALIB_CHECK_COND: number;
				public static CALIB_FIX_SKEW: number;
				public static CALIB_FIX_K1: number;
				public static CALIB_FIX_K2: number;
				public static CALIB_FIX_K3: number;
				public static CALIB_FIX_K4: number;
				public static CALIB_FIX_INTRINSIC: number;
				public static CV_ITERATIVE: number;
				public static CV_EPNP: number;
				public static CV_P3P: number;
				public static CV_DLS: number;
				public static LMEDS: number;
				public static RANSAC: number;
				public static RHO: number;
				public static SOLVEPNP_ITERATIVE: number;
				public static SOLVEPNP_EPNP: number;
				public static SOLVEPNP_P3P: number;
				public static SOLVEPNP_DLS: number;
				public static SOLVEPNP_UPNP: number;
				public static SOLVEPNP_AP3P: number;
				public static SOLVEPNP_MAX_COUNT: number;
				public static CALIB_CB_ADAPTIVE_THRESH: number;
				public static CALIB_CB_NORMALIZE_IMAGE: number;
				public static CALIB_CB_FILTER_QUADS: number;
				public static CALIB_CB_FAST_CHECK: number;
				public static CALIB_CB_SYMMETRIC_GRID: number;
				public static CALIB_CB_ASYMMETRIC_GRID: number;
				public static CALIB_CB_CLUSTERING: number;
				public static CALIB_FIX_ASPECT_RATIO: number;
				public static CALIB_FIX_PRINCIPAL_POINT: number;
				public static CALIB_ZERO_TANGENT_DIST: number;
				public static CALIB_FIX_FOCAL_LENGTH: number;
				public static CALIB_FIX_K5: number;
				public static CALIB_FIX_K6: number;
				public static CALIB_RATIONAL_MODEL: number;
				public static CALIB_THIN_PRISM_MODEL: number;
				public static CALIB_FIX_S1_S2_S3_S4: number;
				public static CALIB_TILTED_MODEL: number;
				public static CALIB_FIX_TAUX_TAUY: number;
				public static CALIB_USE_QR: number;
				public static CALIB_FIX_TANGENT_DIST: number;
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
				public static RQDecomp3x3(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat): number[];
				public static validateDisparity(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public static findHomography(param0: org.opencv.core.MatOfPoint2f, param1: org.opencv.core.MatOfPoint2f, param2: number, param3: number, param4: org.opencv.core.Mat): org.opencv.core.Mat;
				public static decomposeProjectionMatrix(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Mat): void;
				public static fisheye_projectPoints(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: number): void;
				public static findFundamentalMat(param0: org.opencv.core.MatOfPoint2f, param1: org.opencv.core.MatOfPoint2f, param2: number, param3: number): org.opencv.core.Mat;
				public static findChessboardCorners(param0: org.opencv.core.Mat, param1: org.opencv.core.Size, param2: org.opencv.core.MatOfPoint2f, param3: number): boolean;
				public static recoverPose(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: number): number;
				public static fisheye_undistortImage(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat): void;
				public static stereoRectify(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Size, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Mat, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: org.opencv.core.Mat, param11: org.opencv.core.Mat, param12: number, param13: number, param14: org.opencv.core.Size, param15: org.opencv.core.Rect): void;
				public static estimateAffinePartial2D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number): org.opencv.core.Mat;
				public static fisheye_stereoCalibrate(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: java.util.List<org.opencv.core.Mat>, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Size, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: number): number;
				public static fisheye_initUndistortRectifyMap(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Size, param5: number, param6: org.opencv.core.Mat, param7: org.opencv.core.Mat): void;
				public static fisheye_undistortImage(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Size): void;
				public static recoverPose(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat): number;
				public static stereoCalibrate(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: java.util.List<org.opencv.core.Mat>, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Size, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: org.opencv.core.Mat, param11: org.opencv.core.Mat): number;
				public static projectPoints(param0: org.opencv.core.MatOfPoint3f, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.MatOfDouble, param5: org.opencv.core.MatOfPoint2f): void;
				public static findCirclesGrid(param0: org.opencv.core.Mat, param1: org.opencv.core.Size, param2: org.opencv.core.Mat, param3: number): boolean;
				public static estimateAffine2D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): org.opencv.core.Mat;
				public static recoverPose(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: number, param6: org.opencv.core.Point, param7: org.opencv.core.Mat): number;
				public static estimateAffine2D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number): org.opencv.core.Mat;
				public static findHomography(param0: org.opencv.core.MatOfPoint2f, param1: org.opencv.core.MatOfPoint2f, param2: number): org.opencv.core.Mat;
				public static solvePnPRansac(param0: org.opencv.core.MatOfPoint3f, param1: org.opencv.core.MatOfPoint2f, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfDouble, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: boolean, param7: number, param8: number, param9: number): boolean;
				public static composeRT(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Mat, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: org.opencv.core.Mat): void;
				public static triangulatePoints(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat): void;
				public static fisheye_stereoCalibrate(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: java.util.List<org.opencv.core.Mat>, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Size, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat): number;
				public static fisheye_distortPoints(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static estimateAffinePartial2D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): org.opencv.core.Mat;
				public static fisheye_stereoCalibrate(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: java.util.List<org.opencv.core.Mat>, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Size, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: number, param11: org.opencv.core.TermCriteria): number;
				public static rectify3Collinear(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: java.util.List<org.opencv.core.Mat>, param7: java.util.List<org.opencv.core.Mat>, param8: org.opencv.core.Size, param9: org.opencv.core.Mat, param10: org.opencv.core.Mat, param11: org.opencv.core.Mat, param12: org.opencv.core.Mat, param13: org.opencv.core.Mat, param14: org.opencv.core.Mat, param15: org.opencv.core.Mat, param16: org.opencv.core.Mat, param17: org.opencv.core.Mat, param18: org.opencv.core.Mat, param19: org.opencv.core.Mat, param20: number, param21: org.opencv.core.Size, param22: org.opencv.core.Rect, param23: org.opencv.core.Rect, param24: number): number;
				public static findCirclesGrid(param0: org.opencv.core.Mat, param1: org.opencv.core.Size, param2: org.opencv.core.Mat): boolean;
				public static composeRT(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Mat, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: org.opencv.core.Mat, param11: org.opencv.core.Mat, param12: org.opencv.core.Mat): void;
				public static findEssentialMat(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Point): org.opencv.core.Mat;
				public static decomposeProjectionMatrix(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat): void;
				public static fisheye_undistortPoints(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static getOptimalNewCameraMatrix(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: number, param4: org.opencv.core.Size, param5: org.opencv.core.Rect): org.opencv.core.Mat;
				public static findHomography(param0: org.opencv.core.MatOfPoint2f, param1: org.opencv.core.MatOfPoint2f, param2: number, param3: number, param4: org.opencv.core.Mat, param5: number, param6: number): org.opencv.core.Mat;
				public static calibrateCamera(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: org.opencv.core.Size, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: java.util.List<org.opencv.core.Mat>, param6: java.util.List<org.opencv.core.Mat>): number;
				public static filterSpeckles(param0: org.opencv.core.Mat, param1: number, param2: number, param3: number): void;
				public static findFundamentalMat(param0: org.opencv.core.MatOfPoint2f, param1: org.opencv.core.MatOfPoint2f, param2: number, param3: number, param4: number, param5: org.opencv.core.Mat): org.opencv.core.Mat;
				public static recoverPose(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: number, param7: org.opencv.core.Mat, param8: org.opencv.core.Mat): number;
				public static estimateAffine3D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: number): number;
				public static findEssentialMat(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): org.opencv.core.Mat;
				public static composeRT(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Mat, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: org.opencv.core.Mat, param11: org.opencv.core.Mat): void;
				public static convertPointsFromHomogeneous(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static estimateAffine2D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number): org.opencv.core.Mat;
				public static RQDecomp3x3(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): number[];
				public static initCameraMatrix2D(param0: java.util.List<org.opencv.core.MatOfPoint3f>, param1: java.util.List<org.opencv.core.MatOfPoint2f>, param2: org.opencv.core.Size, param3: number): org.opencv.core.Mat;
				public static findEssentialMat(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Point, param4: number, param5: number, param6: number, param7: org.opencv.core.Mat): org.opencv.core.Mat;
				public static solvePnPRansac(param0: org.opencv.core.MatOfPoint3f, param1: org.opencv.core.MatOfPoint2f, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfDouble, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: boolean): boolean;
				public static computeCorrespondEpilines(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static composeRT(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat): void;
				public static fisheye_estimateNewCameraMatrixForUndistortRectify(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: number): void;
				public static validateDisparity(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): void;
				public static findEssentialMat(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number, param5: number, param6: org.opencv.core.Mat): org.opencv.core.Mat;
				public static estimateAffine2D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number, param5: number, param6: number): org.opencv.core.Mat;
				public static stereoCalibrate(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: java.util.List<org.opencv.core.Mat>, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Size, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: org.opencv.core.Mat, param11: org.opencv.core.Mat, param12: number, param13: org.opencv.core.TermCriteria): number;
				public static fisheye_projectPoints(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: number, param7: org.opencv.core.Mat): void;
				public static stereoRectifyUncalibrated(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Size, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: number): boolean;
				public static stereoRectify(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Size, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Mat, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: org.opencv.core.Mat, param11: org.opencv.core.Mat, param12: number): void;
				public static RQDecomp3x3(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat): number[];
				public static correctMatches(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat): void;
				public static initCameraMatrix2D(param0: java.util.List<org.opencv.core.MatOfPoint3f>, param1: java.util.List<org.opencv.core.MatOfPoint2f>, param2: org.opencv.core.Size): org.opencv.core.Mat;
				public static calibrateCameraExtended(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: org.opencv.core.Size, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: java.util.List<org.opencv.core.Mat>, param6: java.util.List<org.opencv.core.Mat>, param7: org.opencv.core.Mat, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: number): number;
				public static composeRT(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Mat, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: org.opencv.core.Mat, param11: org.opencv.core.Mat, param12: org.opencv.core.Mat, param13: org.opencv.core.Mat): void;
				public static fisheye_calibrate(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: org.opencv.core.Size, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: java.util.List<org.opencv.core.Mat>, param6: java.util.List<org.opencv.core.Mat>, param7: number, param8: org.opencv.core.TermCriteria): number;
				public static composeRT(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Mat): void;
				public static findEssentialMat(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Point, param4: number): org.opencv.core.Mat;
				public static fisheye_stereoRectify(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Size, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Mat, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: org.opencv.core.Mat, param11: org.opencv.core.Mat, param12: number, param13: org.opencv.core.Size, param14: number): void;
				public static estimateAffine3D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: number, param5: number): number;
				public static stereoRectify(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Size, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Mat, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: org.opencv.core.Mat, param11: org.opencv.core.Mat): void;
				public static filterHomographyDecompByVisibleRefpoints(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat): void;
				public static findEssentialMat(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): org.opencv.core.Mat;
				public static stereoRectify(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Size, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Mat, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: org.opencv.core.Mat, param11: org.opencv.core.Mat, param12: number, param13: number, param14: org.opencv.core.Size, param15: org.opencv.core.Rect, param16: org.opencv.core.Rect): void;
				public static stereoCalibrate(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: java.util.List<org.opencv.core.Mat>, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Size, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: org.opencv.core.Mat, param11: org.opencv.core.Mat, param12: number): number;
				public static stereoRectifyUncalibrated(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Size, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat): boolean;
				public static estimateAffinePartial2D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): org.opencv.core.Mat;
				public static filterSpeckles(param0: org.opencv.core.Mat, param1: number, param2: number, param3: number, param4: org.opencv.core.Mat): void;
				public static getOptimalNewCameraMatrix(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: number): org.opencv.core.Mat;
				public static stereoCalibrateExtended(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: java.util.List<org.opencv.core.Mat>, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Size, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: org.opencv.core.Mat, param11: org.opencv.core.Mat, param12: org.opencv.core.Mat, param13: number, param14: org.opencv.core.TermCriteria): number;
				public static reprojectImageTo3D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: boolean, param4: number): void;
				public static fisheye_stereoRectify(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Size, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Mat, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: org.opencv.core.Mat, param11: org.opencv.core.Mat, param12: number, param13: org.opencv.core.Size, param14: number, param15: number): void;
				public static composeRT(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Mat, param8: org.opencv.core.Mat): void;
				public static estimateAffinePartial2D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number, param5: number): org.opencv.core.Mat;
				public static reprojectImageTo3D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static recoverPose(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: number, param6: org.opencv.core.Point): number;
				public constructor();
				public static findChessboardCorners(param0: org.opencv.core.Mat, param1: org.opencv.core.Size, param2: org.opencv.core.MatOfPoint2f): boolean;
				public static filterHomographyDecompByVisibleRefpoints(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat): void;
				public static reprojectImageTo3D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: boolean): void;
				public static findFundamentalMat(param0: org.opencv.core.MatOfPoint2f, param1: org.opencv.core.MatOfPoint2f): org.opencv.core.Mat;
				public static estimateAffine3D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): number;
				public static estimateAffine2D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number, param5: number): org.opencv.core.Mat;
				public static findEssentialMat(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number): org.opencv.core.Mat;
				public static calibrateCameraExtended(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: org.opencv.core.Size, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: java.util.List<org.opencv.core.Mat>, param6: java.util.List<org.opencv.core.Mat>, param7: org.opencv.core.Mat, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat): number;
				public static fisheye_estimateNewCameraMatrixForUndistortRectify(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: number, param6: org.opencv.core.Size, param7: number): void;
				public static decomposeProjectionMatrix(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static fisheye_undistortImage(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static recoverPose(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat): number;
				public static calibrateCamera(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: org.opencv.core.Size, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: java.util.List<org.opencv.core.Mat>, param6: java.util.List<org.opencv.core.Mat>, param7: number, param8: org.opencv.core.TermCriteria): number;
				public static projectPoints(param0: org.opencv.core.MatOfPoint3f, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.MatOfDouble, param5: org.opencv.core.MatOfPoint2f, param6: org.opencv.core.Mat): void;
				public static decomposeHomographyMat(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: java.util.List<org.opencv.core.Mat>, param3: java.util.List<org.opencv.core.Mat>, param4: java.util.List<org.opencv.core.Mat>): number;
				public static estimateAffinePartial2D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number, param5: number, param6: number): org.opencv.core.Mat;
				public static findHomography(param0: org.opencv.core.MatOfPoint2f, param1: org.opencv.core.MatOfPoint2f, param2: number, param3: number): org.opencv.core.Mat;
				public static composeRT(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat): void;
				public static recoverPose(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat): number;
				public static stereoRectify(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Size, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Mat, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: org.opencv.core.Mat, param11: org.opencv.core.Mat, param12: number, param13: number, param14: org.opencv.core.Size): void;
				public static solveP3P(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: java.util.List<org.opencv.core.Mat>, param5: java.util.List<org.opencv.core.Mat>, param6: number): number;
				public static fisheye_stereoRectify(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Size, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Mat, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: org.opencv.core.Mat, param11: org.opencv.core.Mat, param12: number): void;
				public static findFundamentalMat(param0: org.opencv.core.MatOfPoint2f, param1: org.opencv.core.MatOfPoint2f, param2: number): org.opencv.core.Mat;
				public static solvePnPRansac(param0: org.opencv.core.MatOfPoint3f, param1: org.opencv.core.MatOfPoint2f, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfDouble, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: boolean, param7: number, param8: number, param9: number, param10: org.opencv.core.Mat): boolean;
				public static stereoCalibrateExtended(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: java.util.List<org.opencv.core.Mat>, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Size, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: org.opencv.core.Mat, param11: org.opencv.core.Mat, param12: org.opencv.core.Mat, param13: number): number;
				public static Rodrigues(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static composeRT(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Mat, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat): void;
				public static fisheye_calibrate(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: org.opencv.core.Size, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: java.util.List<org.opencv.core.Mat>, param6: java.util.List<org.opencv.core.Mat>, param7: number): number;
				public static drawChessboardCorners(param0: org.opencv.core.Mat, param1: org.opencv.core.Size, param2: org.opencv.core.MatOfPoint2f, param3: boolean): void;
				public static matMulDeriv(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static findEssentialMat(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number, param5: number): org.opencv.core.Mat;
				public static getValidDisparityROI(param0: org.opencv.core.Rect, param1: org.opencv.core.Rect, param2: number, param3: number, param4: number): org.opencv.core.Rect;
				public static findEssentialMat(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Point, param4: number, param5: number, param6: number): org.opencv.core.Mat;
				public static fisheye_projectPoints(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat): void;
				public static convertPointsToHomogeneous(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static fisheye_calibrate(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: org.opencv.core.Size, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: java.util.List<org.opencv.core.Mat>, param6: java.util.List<org.opencv.core.Mat>): number;
				public static RQDecomp3x3(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): number[];
				public static estimateAffinePartial2D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number): org.opencv.core.Mat;
				public static solvePnP(param0: org.opencv.core.MatOfPoint3f, param1: org.opencv.core.MatOfPoint2f, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfDouble, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: boolean, param7: number): boolean;
				public static fisheye_undistortPoints(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat): void;
				public static solvePnPRansac(param0: org.opencv.core.MatOfPoint3f, param1: org.opencv.core.MatOfPoint2f, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfDouble, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: boolean, param7: number, param8: number, param9: number, param10: org.opencv.core.Mat, param11: number): boolean;
				public static recoverPose(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: number): number;
				public static findEssentialMat(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): org.opencv.core.Mat;
				public static solvePnPRansac(param0: org.opencv.core.MatOfPoint3f, param1: org.opencv.core.MatOfPoint2f, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfDouble, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat): boolean;
				public static calibrationMatrixValues(param0: org.opencv.core.Mat, param1: org.opencv.core.Size, param2: number, param3: number, param4: number[], param5: number[], param6: number[], param7: org.opencv.core.Point, param8: number[]): void;
				public static decomposeProjectionMatrix(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat): void;
				public static stereoCalibrateExtended(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: java.util.List<org.opencv.core.Mat>, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Size, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: org.opencv.core.Mat, param11: org.opencv.core.Mat, param12: org.opencv.core.Mat): number;
				public static fisheye_undistortPoints(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat): void;
				public static findFundamentalMat(param0: org.opencv.core.MatOfPoint2f, param1: org.opencv.core.MatOfPoint2f, param2: number, param3: number, param4: number): org.opencv.core.Mat;
				public static getOptimalNewCameraMatrix(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: number, param4: org.opencv.core.Size, param5: org.opencv.core.Rect, param6: boolean): org.opencv.core.Mat;
				public static solvePnPRansac(param0: org.opencv.core.MatOfPoint3f, param1: org.opencv.core.MatOfPoint2f, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfDouble, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: boolean, param7: number): boolean;
				public static fisheye_stereoRectify(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Size, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Mat, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: org.opencv.core.Mat, param11: org.opencv.core.Mat, param12: number, param13: org.opencv.core.Size): void;
				public static findHomography(param0: org.opencv.core.MatOfPoint2f, param1: org.opencv.core.MatOfPoint2f, param2: number, param3: number, param4: org.opencv.core.Mat, param5: number): org.opencv.core.Mat;
				public static projectPoints(param0: org.opencv.core.MatOfPoint3f, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.MatOfDouble, param5: org.opencv.core.MatOfPoint2f, param6: org.opencv.core.Mat, param7: number): void;
				public static solvePnP(param0: org.opencv.core.MatOfPoint3f, param1: org.opencv.core.MatOfPoint2f, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfDouble, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: boolean): boolean;
				public static decomposeProjectionMatrix(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat): void;
				public static recoverPose(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: number, param7: org.opencv.core.Mat): number;
				public static fisheye_distortPoints(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: number): void;
				public static decomposeEssentialMat(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static calibrateCamera(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: org.opencv.core.Size, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: java.util.List<org.opencv.core.Mat>, param6: java.util.List<org.opencv.core.Mat>, param7: number): number;
				public static stereoRectify(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Size, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: org.opencv.core.Mat, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: org.opencv.core.Mat, param11: org.opencv.core.Mat, param12: number, param13: number): void;
				public static solvePnP(param0: org.opencv.core.MatOfPoint3f, param1: org.opencv.core.MatOfPoint2f, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfDouble, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat): boolean;
				public static Rodrigues(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static fisheye_estimateNewCameraMatrixForUndistortRectify(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: number, param6: org.opencv.core.Size): void;
				public static findEssentialMat(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Point, param4: number, param5: number): org.opencv.core.Mat;
				public static solvePnPRansac(param0: org.opencv.core.MatOfPoint3f, param1: org.opencv.core.MatOfPoint2f, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfDouble, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: boolean, param7: number, param8: number): boolean;
				public static estimateAffine2D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number, param5: number, param6: number, param7: number): org.opencv.core.Mat;
				public static estimateAffine2D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): org.opencv.core.Mat;
				public static fisheye_estimateNewCameraMatrixForUndistortRectify(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat): void;
				public static estimateAffinePartial2D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number, param5: number, param6: number, param7: number): org.opencv.core.Mat;
				public static findHomography(param0: org.opencv.core.MatOfPoint2f, param1: org.opencv.core.MatOfPoint2f): org.opencv.core.Mat;
				public static findEssentialMat(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number): org.opencv.core.Mat;
				public static calibrateCameraExtended(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: org.opencv.core.Size, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: java.util.List<org.opencv.core.Mat>, param6: java.util.List<org.opencv.core.Mat>, param7: org.opencv.core.Mat, param8: org.opencv.core.Mat, param9: org.opencv.core.Mat, param10: number, param11: org.opencv.core.TermCriteria): number;
				public static sampsonDistance(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): number;
				public static getOptimalNewCameraMatrix(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: number, param4: org.opencv.core.Size): org.opencv.core.Mat;
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
				public setSmallerBlockSize(param0: number): void;
				public setTextureThreshold(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public getPreFilterCap(): number;
				public getTextureThreshold(): number;
				public setPreFilterCap(param0: number): void;
				public finalize(): void;
				public static create(): org.opencv.calib3d.StereoBM;
				public setROI2(param0: org.opencv.core.Rect): void;
				public setPreFilterSize(param0: number): void;
				public static create(param0: number, param1: number): org.opencv.calib3d.StereoBM;
				public setUniquenessRatio(param0: number): void;
				public getUniquenessRatio(): number;
				public getROI2(): org.opencv.core.Rect;
				public getSmallerBlockSize(): number;
				public constructor(param0: number);
				public static __fromPtr__(param0: number): org.opencv.calib3d.StereoMatcher;
				public static create(param0: number): org.opencv.calib3d.StereoBM;
				public setPreFilterType(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.calib3d.StereoBM;
				public getPreFilterType(): number;
				public setROI1(param0: org.opencv.core.Rect): void;
				public getROI1(): org.opencv.core.Rect;
				public getPreFilterSize(): number;
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
				public setMinDisparity(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public getSpeckleRange(): number;
				public getNumDisparities(): number;
				public getDisp12MaxDiff(): number;
				public finalize(): void;
				public compute(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public getBlockSize(): number;
				public setBlockSize(param0: number): void;
				public setDisp12MaxDiff(param0: number): void;
				public constructor(param0: number);
				public static __fromPtr__(param0: number): org.opencv.calib3d.StereoMatcher;
				public getSpeckleWindowSize(): number;
				public setNumDisparities(param0: number): void;
				public getMinDisparity(): number;
				public setSpeckleRange(param0: number): void;
				public setSpeckleWindowSize(param0: number): void;
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
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number): org.opencv.calib3d.StereoSGBM;
				public setPreFilterCap(param0: number): void;
				public finalize(): void;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number): org.opencv.calib3d.StereoSGBM;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): org.opencv.calib3d.StereoSGBM;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.opencv.calib3d.StereoSGBM;
				public getP1(): number;
				public static create(param0: number, param1: number): org.opencv.calib3d.StereoSGBM;
				public getP2(): number;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number): org.opencv.calib3d.StereoSGBM;
				public setP2(param0: number): void;
				public static create(param0: number): org.opencv.calib3d.StereoSGBM;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public getPreFilterCap(): number;
				public static create(): org.opencv.calib3d.StereoSGBM;
				public static create(param0: number, param1: number, param2: number, param3: number): org.opencv.calib3d.StereoSGBM;
				public static create(param0: number, param1: number, param2: number): org.opencv.calib3d.StereoSGBM;
				public setP1(param0: number): void;
				public setMode(param0: number): void;
				public setUniquenessRatio(param0: number): void;
				public getUniquenessRatio(): number;
				public static __fromPtr__(param0: number): org.opencv.calib3d.StereoSGBM;
				public constructor(param0: number);
				public static __fromPtr__(param0: number): org.opencv.calib3d.StereoMatcher;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): org.opencv.calib3d.StereoSGBM;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): org.opencv.calib3d.StereoSGBM;
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
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public clear(): void;
				public finalize(): void;
				public constructor(param0: number);
				public getNativeObjAddr(): number;
				public save(param0: string): void;
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
				public static DECOMP_LU: number;
				public static DECOMP_SVD: number;
				public static DECOMP_EIG: number;
				public static DECOMP_CHOLESKY: number;
				public static DECOMP_QR: number;
				public static DECOMP_NORMAL: number;
				public static NORM_INF: number;
				public static NORM_L1: number;
				public static NORM_L2: number;
				public static NORM_L2SQR: number;
				public static NORM_HAMMING: number;
				public static NORM_HAMMING2: number;
				public static NORM_TYPE_MASK: number;
				public static NORM_RELATIVE: number;
				public static NORM_MINMAX: number;
				public static CMP_EQ: number;
				public static CMP_GT: number;
				public static CMP_GE: number;
				public static CMP_LT: number;
				public static CMP_LE: number;
				public static CMP_NE: number;
				public static GEMM_1_T: number;
				public static GEMM_2_T: number;
				public static GEMM_3_T: number;
				public static DFT_INVERSE: number;
				public static DFT_SCALE: number;
				public static DFT_ROWS: number;
				public static DFT_COMPLEX_OUTPUT: number;
				public static DFT_REAL_OUTPUT: number;
				public static DFT_COMPLEX_INPUT: number;
				public static DCT_INVERSE: number;
				public static DCT_ROWS: number;
				public static BORDER_CONSTANT: number;
				public static BORDER_REPLICATE: number;
				public static BORDER_REFLECT: number;
				public static BORDER_WRAP: number;
				public static BORDER_REFLECT_101: number;
				public static BORDER_TRANSPARENT: number;
				public static BORDER_REFLECT101: number;
				public static BORDER_DEFAULT: number;
				public static BORDER_ISOLATED: number;
				public static SORT_EVERY_ROW: number;
				public static SORT_EVERY_COLUMN: number;
				public static SORT_ASCENDING: number;
				public static SORT_DESCENDING: number;
				public static COVAR_SCRAMBLED: number;
				public static COVAR_NORMAL: number;
				public static COVAR_USE_AVG: number;
				public static COVAR_SCALE: number;
				public static COVAR_ROWS: number;
				public static COVAR_COLS: number;
				public static KMEANS_RANDOM_CENTERS: number;
				public static KMEANS_PP_CENTERS: number;
				public static KMEANS_USE_INITIAL_LABELS: number;
				public static LINE_4: number;
				public static LINE_8: number;
				public static LINE_AA: number;
				public static FONT_HERSHEY_SIMPLEX: number;
				public static FONT_HERSHEY_PLAIN: number;
				public static FONT_HERSHEY_DUPLEX: number;
				public static FONT_HERSHEY_COMPLEX: number;
				public static FONT_HERSHEY_TRIPLEX: number;
				public static FONT_HERSHEY_COMPLEX_SMALL: number;
				public static FONT_HERSHEY_SCRIPT_SIMPLEX: number;
				public static FONT_HERSHEY_SCRIPT_COMPLEX: number;
				public static FONT_ITALIC: number;
				public static ROTATE_90_CLOCKWISE: number;
				public static ROTATE_180: number;
				public static ROTATE_90_COUNTERCLOCKWISE: number;
				public static TYPE_GENERAL: number;
				public static TYPE_MARKER: number;
				public static TYPE_WRAPPER: number;
				public static TYPE_FUN: number;
				public static IMPL_PLAIN: number;
				public static IMPL_IPP: number;
				public static IMPL_OPENCL: number;
				public static FLAGS_NONE: number;
				public static FLAGS_MAPPING: number;
				public static FLAGS_EXPAND_SAME_NAMES: number;
				public static LUT(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static solveCubic(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): number;
				public static SVDecomp(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: number): void;
				public static batchDistance(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: org.opencv.core.Mat): void;
				public static normalize(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public static rotate(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static cartToPolar(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static normalize(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static subtract(param0: org.opencv.core.Mat, param1: org.opencv.core.Scalar, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: number): void;
				public static norm(param0: org.opencv.core.Mat, param1: number): number;
				public static dct(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static getTickFrequency(): number;
				public static mixChannels(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: org.opencv.core.MatOfInt): void;
				public static phase(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: boolean): void;
				public static SVDecomp(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static batchDistance(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: org.opencv.core.Mat, param5: number, param6: number, param7: org.opencv.core.Mat): void;
				public static borderInterpolate(param0: number, param1: number, param2: number): number;
				public static convertScaleAbs(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public static sumElems(param0: org.opencv.core.Mat): org.opencv.core.Scalar;
				public static sort(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static bitwise_or(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static calcCovarMatrix(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number): void;
				public static subtract(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static bitwise_xor(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static eigen(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): boolean;
				public static extractChannel(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static mulTransposed(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: boolean): void;
				public static getNumberOfCPUs(): number;
				public static absdiff(param0: org.opencv.core.Mat, param1: org.opencv.core.Scalar, param2: org.opencv.core.Mat): void;
				public static max(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static dft(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static subtract(param0: org.opencv.core.Mat, param1: org.opencv.core.Scalar, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static gemm(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Mat, param4: number, param5: org.opencv.core.Mat): void;
				public static setNumThreads(param0: number): void;
				public static getVersionRevision(): number;
				public static absdiff(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static transpose(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static convertFp16(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static calcCovarMatrix(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number): void;
				public static minMaxLoc(param0: org.opencv.core.Mat): org.opencv.core.Core.MinMaxLocResult;
				public static PSNR(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): number;
				public static idct(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static PCABackProject(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static minMaxLoc(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): org.opencv.core.Core.MinMaxLocResult;
				public static insertChannel(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static compare(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number): void;
				public static getIppVersion(): string;
				public static dct(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static checkRange(param0: org.opencv.core.Mat, param1: boolean, param2: number, param3: number): boolean;
				public static getVersionMajor(): number;
				public static normalize(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): void;
				public static convertScaleAbs(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static findNonZero(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static add(param0: org.opencv.core.Mat, param1: org.opencv.core.Scalar, param2: org.opencv.core.Mat): void;
				public static flip(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static min(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static divide(param0: number, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number): void;
				public static add(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static multiply(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number): void;
				public static countNonZero(param0: org.opencv.core.Mat): number;
				public static compare(param0: org.opencv.core.Mat, param1: org.opencv.core.Scalar, param2: org.opencv.core.Mat, param3: number): void;
				public static useIPP(): boolean;
				public static batchDistance(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: org.opencv.core.Mat, param5: number, param6: number, param7: org.opencv.core.Mat, param8: number): void;
				public static norm(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): number;
				public static reduce(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public static useIPP_NE(): boolean;
				public static PCAProject(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static scaleAdd(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				/** @deprecated */
				public static getThreadNum(): number;
				public static solve(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number): boolean;
				public static batchDistance(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: org.opencv.core.Mat, param5: number, param6: number): void;
				public static idft(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public static checkRange(param0: org.opencv.core.Mat, param1: boolean): boolean;
				public static getOptimalDFTSize(param0: number): number;
				public static PCACompute2(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static SVBackSubst(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat): void;
				public static subtract(param0: org.opencv.core.Mat, param1: org.opencv.core.Scalar, param2: org.opencv.core.Mat): void;
				public static addWeighted(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat, param3: number, param4: number, param5: org.opencv.core.Mat): void;
				public static split(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.Mat>): void;
				public static idft(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static kmeans(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat, param3: org.opencv.core.TermCriteria, param4: number, param5: number, param6: org.opencv.core.Mat): number;
				public static polarToCart(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: boolean): void;
				public static reduce(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): void;
				public static getVersionMinor(): number;
				public static perspectiveTransform(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static getHardwareFeatureName(param0: number): string;
				public static PCACompute(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number): void;
				public static multiply(param0: org.opencv.core.Mat, param1: org.opencv.core.Scalar, param2: org.opencv.core.Mat): void;
				public static divide(param0: number, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static randShuffle(param0: org.opencv.core.Mat, param1: number): void;
				public static randShuffle(param0: org.opencv.core.Mat): void;
				public static phase(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static PCACompute2(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: number): void;
				public static patchNaNs(param0: org.opencv.core.Mat, param1: number): void;
				public static mulTransposed(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: boolean, param3: org.opencv.core.Mat): void;
				public static getVersionString(): string;
				public static cartToPolar(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: boolean): void;
				public static multiply(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number): void;
				public static setRNGSeed(param0: number): void;
				public static log(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static kmeans(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat, param3: org.opencv.core.TermCriteria, param4: number, param5: number): number;
				public static divide(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number): void;
				public static cubeRoot(param0: number): number;
				public static sortIdx(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static invert(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): number;
				public constructor();
				public static idct(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static pow(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat): void;
				public static copyMakeBorder(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number): void;
				public static gemm(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Mat, param4: number, param5: org.opencv.core.Mat, param6: number): void;
				public static patchNaNs(param0: org.opencv.core.Mat): void;
				public static fastAtan2(param0: number, param1: number): number;
				public static divide(param0: org.opencv.core.Mat, param1: org.opencv.core.Scalar, param2: org.opencv.core.Mat): void;
				public static randu(param0: org.opencv.core.Mat, param1: number, param2: number): void;
				public static idft(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static sqrt(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static setErrorVerbosity(param0: boolean): void;
				public static getCPUTickCount(): number;
				public static bitwise_or(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static transform(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static mean(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): org.opencv.core.Scalar;
				public static completeSymm(param0: org.opencv.core.Mat, param1: boolean): void;
				public static normalize(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number): void;
				public static repeat(param0: org.opencv.core.Mat, param1: number, param2: number, param3: org.opencv.core.Mat): void;
				public static invert(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): number;
				public static bitwise_and(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static mulTransposed(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: boolean, param3: org.opencv.core.Mat, param4: number): void;
				public static norm(param0: org.opencv.core.Mat): number;
				public static Mahalanobis(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): number;
				public static getTickCount(): number;
				public static batchDistance(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: org.opencv.core.Mat, param5: number, param6: number, param7: org.opencv.core.Mat, param8: number, param9: boolean): void;
				public static mulSpectrums(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: boolean): void;
				public static bitwise_and(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static solvePoly(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): number;
				public static multiply(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static norm(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Mat): number;
				public static getBuildInformation(): string;
				public static divide(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static inRange(param0: org.opencv.core.Mat, param1: org.opencv.core.Scalar, param2: org.opencv.core.Scalar, param3: org.opencv.core.Mat): void;
				public static eigenNonSymmetric(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static meanStdDev(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfDouble, param2: org.opencv.core.MatOfDouble): void;
				public static checkRange(param0: org.opencv.core.Mat, param1: boolean, param2: number): boolean;
				public static PCACompute(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static mulTransposed(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: boolean, param3: org.opencv.core.Mat, param4: number, param5: number): void;
				public static divide(param0: org.opencv.core.Mat, param1: org.opencv.core.Scalar, param2: org.opencv.core.Mat, param3: number): void;
				public static add(param0: org.opencv.core.Mat, param1: org.opencv.core.Scalar, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: number): void;
				public static subtract(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: number): void;
				public static mean(param0: org.opencv.core.Mat): org.opencv.core.Scalar;
				public static bitwise_not(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static setUseIPP(param0: boolean): void;
				public static vconcat(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat): void;
				public static eigen(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): boolean;
				public static convertScaleAbs(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static polarToCart(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static solve(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): boolean;
				public static mulSpectrums(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number): void;
				public static dft(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static norm(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): number;
				public static norm(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat): number;
				public static meanStdDev(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfDouble, param2: org.opencv.core.MatOfDouble, param3: org.opencv.core.Mat): void;
				public static setIdentity(param0: org.opencv.core.Mat, param1: org.opencv.core.Scalar): void;
				public static trace(param0: org.opencv.core.Mat): org.opencv.core.Scalar;
				public static completeSymm(param0: org.opencv.core.Mat): void;
				public static max(param0: org.opencv.core.Mat, param1: org.opencv.core.Scalar, param2: org.opencv.core.Mat): void;
				public static multiply(param0: org.opencv.core.Mat, param1: org.opencv.core.Scalar, param2: org.opencv.core.Mat, param3: number, param4: number): void;
				public static determinant(param0: org.opencv.core.Mat): number;
				public static solvePoly(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): number;
				public static add(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: number): void;
				public static multiply(param0: org.opencv.core.Mat, param1: org.opencv.core.Scalar, param2: org.opencv.core.Mat, param3: number): void;
				public static normalize(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number, param6: org.opencv.core.Mat): void;
				public static add(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static randn(param0: org.opencv.core.Mat, param1: number, param2: number): void;
				public static subtract(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static magnitude(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static setUseIPP_NE(param0: boolean): void;
				public static bitwise_not(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static divide(param0: org.opencv.core.Mat, param1: org.opencv.core.Scalar, param2: org.opencv.core.Mat, param3: number, param4: number): void;
				public static batchDistance(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: org.opencv.core.Mat, param5: number): void;
				public static merge(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat): void;
				public static min(param0: org.opencv.core.Mat, param1: org.opencv.core.Scalar, param2: org.opencv.core.Mat): void;
				public static setIdentity(param0: org.opencv.core.Mat): void;
				public static copyMakeBorder(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number, param7: org.opencv.core.Scalar): void;
				public static bitwise_xor(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static dft(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public static getNumThreads(): number;
				public static normalize(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static add(param0: org.opencv.core.Mat, param1: org.opencv.core.Scalar, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static exp(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static addWeighted(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat, param3: number, param4: number, param5: org.opencv.core.Mat, param6: number): void;
				public static checkRange(param0: org.opencv.core.Mat): boolean;
				public static divide(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number): void;
				public static hconcat(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat): void;
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
				public constructor(param0: string, param1: java.lang.Throwable);
				public toString(): string;
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
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
				public static CV_32FC(param0: number): number;
				public static depth(param0: number): number;
				public static CV_16SC(param0: number): number;
				public static makeType(param0: number, param1: number): number;
				public static CV_16UC(param0: number): number;
				public static channels(param0: number): number;
				public constructor();
				public static CV_64FC(param0: number): number;
				public static CV_32SC(param0: number): number;
				public static CV_8SC(param0: number): number;
				public static CV_8UC(param0: number): number;
				public static isInteger(param0: number): boolean;
				public static ELEM_SIZE(param0: number): number;
				public static typeToString(param0: number): string;
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
				public constructor(param0: number, param1: number, param2: number);
				public lessThan(param0: org.opencv.core.DMatch): boolean;
				public constructor(param0: number, param1: number, param2: number, param3: number);
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
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
				public toString(): string;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
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
				public checkVector(param0: number, param1: number, param2: boolean): number;
				public dot(param0: org.opencv.core.Mat): number;
				public static zeros(param0: number, param1: number, param2: number): org.opencv.core.Mat;
				public height(): number;
				public copyTo(param0: org.opencv.core.Mat): void;
				public convertTo(param0: org.opencv.core.Mat, param1: number, param2: number): void;
				public setTo(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): org.opencv.core.Mat;
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range, param2: org.opencv.core.Range);
				public constructor();
				public diag(): org.opencv.core.Mat;
				public mul(param0: org.opencv.core.Mat): org.opencv.core.Mat;
				public width(): number;
				public convertTo(param0: org.opencv.core.Mat, param1: number): void;
				public static ones(param0: number, param1: number, param2: number): org.opencv.core.Mat;
				public constructor(param0: org.opencv.core.Size, param1: number);
				public clone(): any;
				public isSubmatrix(): boolean;
				public submat(param0: org.opencv.core.Rect): org.opencv.core.Mat;
				public dataAddr(): number;
				public checkVector(param0: number, param1: number): number;
				public step1(param0: number): number;
				public cols(): number;
				public col(param0: number): org.opencv.core.Mat;
				public setTo(param0: org.opencv.core.Scalar, param1: org.opencv.core.Mat): org.opencv.core.Mat;
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Rect);
				public rowRange(param0: number, param1: number): org.opencv.core.Mat;
				public rowRange(param0: org.opencv.core.Range): org.opencv.core.Mat;
				public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
				public toString(): string;
				public dump(): string;
				public put(param0: number, param1: number, param2: number[], param3: number, param4: number): number;
				public isContinuous(): boolean;
				public static zeros(param0: org.opencv.core.Size, param1: number): org.opencv.core.Mat;
				public diag(param0: number): org.opencv.core.Mat;
				public static eye(param0: org.opencv.core.Size, param1: number): org.opencv.core.Mat;
				public total(): number;
				public get(param0: number, param1: number, param2: number[]): number;
				public locateROI(param0: org.opencv.core.Size, param1: org.opencv.core.Point): void;
				public t(): org.opencv.core.Mat;
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: org.opencv.core.Size, param1: number, param2: org.opencv.core.Scalar);
				public cross(param0: org.opencv.core.Mat): org.opencv.core.Mat;
				public reshape(param0: number, param1: number): org.opencv.core.Mat;
				public colRange(param0: org.opencv.core.Range): org.opencv.core.Mat;
				public assignTo(param0: org.opencv.core.Mat): void;
				public step1(): number;
				public finalize(): void;
				public inv(): org.opencv.core.Mat;
				public row(param0: number): org.opencv.core.Mat;
				public setTo(param0: org.opencv.core.Mat): org.opencv.core.Mat;
				public convertTo(param0: org.opencv.core.Mat, param1: number, param2: number, param3: number): void;
				public depth(): number;
				public elemSize(): number;
				public get(param0: number, param1: number): number[];
				public size(): org.opencv.core.Size;
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range);
				public adjustROI(param0: number, param1: number, param2: number, param3: number): org.opencv.core.Mat;
				public dims(): number;
				public reshape(param0: number): org.opencv.core.Mat;
				public create(param0: number, param1: number, param2: number): void;
				public put(param0: number, param1: number, param2: number[]): number;
				public submat(param0: org.opencv.core.Range, param1: org.opencv.core.Range): org.opencv.core.Mat;
				public copyTo(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static eye(param0: number, param1: number, param2: number): org.opencv.core.Mat;
				public static ones(param0: org.opencv.core.Size, param1: number): org.opencv.core.Mat;
				public empty(): boolean;
				public mul(param0: org.opencv.core.Mat, param1: number): org.opencv.core.Mat;
				public inv(param0: number): org.opencv.core.Mat;
				public release(): void;
				public static diag(param0: org.opencv.core.Mat): org.opencv.core.Mat;
				public checkVector(param0: number): number;
				public clone(): org.opencv.core.Mat;
				public submat(param0: number, param1: number, param2: number, param3: number): org.opencv.core.Mat;
				public getNativeObjAddr(): number;
				public push_back(param0: org.opencv.core.Mat): void;
				public assignTo(param0: org.opencv.core.Mat, param1: number): void;
				public type(): number;
				public setTo(param0: org.opencv.core.Scalar): org.opencv.core.Mat;
				public create(param0: org.opencv.core.Size, param1: number): void;
				public channels(): number;
				public elemSize1(): number;
				public constructor(param0: number);
				public rows(): number;
				public constructor(param0: number, param1: number, param2: number, param3: org.opencv.core.Scalar);
				public colRange(param0: number, param1: number): org.opencv.core.Mat;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfByte extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfByte>;
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: org.opencv.core.Mat);
				public fromArray(param0: number[]): void;
				public constructor(param0: org.opencv.core.Size, param1: number, param2: org.opencv.core.Scalar);
				public toList(): java.util.List<java.lang.Byte>;
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Rect);
				public constructor(param0: number, param1: number, param2: number[]);
				public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
				public fromArray(param0: number, param1: number, param2: number[]): void;
				public alloc(param0: number): void;
				public toArray(): number[];
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range, param2: org.opencv.core.Range);
				public constructor();
				public constructor(param0: number[]);
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range);
				public constructor(param0: org.opencv.core.Size, param1: number);
				public fromList(param0: java.util.List<java.lang.Byte>): void;
				public constructor(param0: number);
				public static fromNativeAddr(param0: number): org.opencv.core.MatOfByte;
				public constructor(param0: number, param1: number, param2: number, param3: org.opencv.core.Scalar);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfDMatch extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfDMatch>;
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: org.opencv.core.Mat);
				public fromArray(param0: Array<org.opencv.core.DMatch>): void;
				public constructor(param0: org.opencv.core.Size, param1: number, param2: org.opencv.core.Scalar);
				public toList(): java.util.List<org.opencv.core.DMatch>;
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Rect);
				public fromList(param0: java.util.List<org.opencv.core.DMatch>): void;
				public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
				public alloc(param0: number): void;
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range, param2: org.opencv.core.Range);
				public constructor();
				public static fromNativeAddr(param0: number): org.opencv.core.MatOfDMatch;
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range);
				public constructor(param0: org.opencv.core.Size, param1: number);
				public constructor(param0: number);
				public constructor(param0: Array<org.opencv.core.DMatch>);
				public toArray(): Array<org.opencv.core.DMatch>;
				public constructor(param0: number, param1: number, param2: number, param3: org.opencv.core.Scalar);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfDouble extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfDouble>;
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: org.opencv.core.Mat);
				public fromArray(param0: number[]): void;
				public constructor(param0: org.opencv.core.Size, param1: number, param2: org.opencv.core.Scalar);
				public toList(): java.util.List<java.lang.Double>;
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Rect);
				public fromList(param0: java.util.List<java.lang.Double>): void;
				public static fromNativeAddr(param0: number): org.opencv.core.MatOfDouble;
				public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
				public alloc(param0: number): void;
				public toArray(): number[];
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range, param2: org.opencv.core.Range);
				public constructor();
				public constructor(param0: number[]);
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range);
				public constructor(param0: org.opencv.core.Size, param1: number);
				public constructor(param0: number);
				public constructor(param0: number, param1: number, param2: number, param3: org.opencv.core.Scalar);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfFloat extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfFloat>;
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: org.opencv.core.Mat);
				public fromArray(param0: number[]): void;
				public constructor(param0: org.opencv.core.Size, param1: number, param2: org.opencv.core.Scalar);
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Rect);
				public fromList(param0: java.util.List<java.lang.Float>): void;
				public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
				public alloc(param0: number): void;
				public toArray(): number[];
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range, param2: org.opencv.core.Range);
				public constructor();
				public static fromNativeAddr(param0: number): org.opencv.core.MatOfFloat;
				public constructor(param0: number[]);
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range);
				public constructor(param0: org.opencv.core.Size, param1: number);
				public constructor(param0: number);
				public toList(): java.util.List<java.lang.Float>;
				public constructor(param0: number, param1: number, param2: number, param3: org.opencv.core.Scalar);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfFloat4 extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfFloat4>;
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: org.opencv.core.Mat);
				public fromArray(param0: number[]): void;
				public constructor(param0: org.opencv.core.Size, param1: number, param2: org.opencv.core.Scalar);
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Rect);
				public fromList(param0: java.util.List<java.lang.Float>): void;
				public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
				public alloc(param0: number): void;
				public toArray(): number[];
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range, param2: org.opencv.core.Range);
				public constructor();
				public constructor(param0: number[]);
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range);
				public constructor(param0: org.opencv.core.Size, param1: number);
				public static fromNativeAddr(param0: number): org.opencv.core.MatOfFloat4;
				public constructor(param0: number);
				public toList(): java.util.List<java.lang.Float>;
				public constructor(param0: number, param1: number, param2: number, param3: org.opencv.core.Scalar);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfFloat6 extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfFloat6>;
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: org.opencv.core.Mat);
				public fromArray(param0: number[]): void;
				public constructor(param0: org.opencv.core.Size, param1: number, param2: org.opencv.core.Scalar);
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Rect);
				public fromList(param0: java.util.List<java.lang.Float>): void;
				public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
				public alloc(param0: number): void;
				public toArray(): number[];
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range, param2: org.opencv.core.Range);
				public constructor();
				public constructor(param0: number[]);
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range);
				public constructor(param0: org.opencv.core.Size, param1: number);
				public constructor(param0: number);
				public static fromNativeAddr(param0: number): org.opencv.core.MatOfFloat6;
				public toList(): java.util.List<java.lang.Float>;
				public constructor(param0: number, param1: number, param2: number, param3: org.opencv.core.Scalar);
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
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: org.opencv.core.Mat);
				public fromArray(param0: number[]): void;
				public constructor(param0: org.opencv.core.Size, param1: number, param2: org.opencv.core.Scalar);
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Rect);
				public fromList(param0: java.util.List<java.lang.Integer>): void;
				public static fromNativeAddr(param0: number): org.opencv.core.MatOfInt;
				public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
				public alloc(param0: number): void;
				public toArray(): number[];
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range, param2: org.opencv.core.Range);
				public constructor();
				public constructor(param0: number[]);
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range);
				public constructor(param0: org.opencv.core.Size, param1: number);
				public constructor(param0: number);
				public constructor(param0: number, param1: number, param2: number, param3: org.opencv.core.Scalar);
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
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: org.opencv.core.Mat);
				public fromArray(param0: number[]): void;
				public constructor(param0: org.opencv.core.Size, param1: number, param2: org.opencv.core.Scalar);
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Rect);
				public fromList(param0: java.util.List<java.lang.Integer>): void;
				public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
				public alloc(param0: number): void;
				public toArray(): number[];
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range, param2: org.opencv.core.Range);
				public constructor();
				public constructor(param0: number[]);
				public static fromNativeAddr(param0: number): org.opencv.core.MatOfInt4;
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range);
				public constructor(param0: org.opencv.core.Size, param1: number);
				public constructor(param0: number);
				public constructor(param0: number, param1: number, param2: number, param3: org.opencv.core.Scalar);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfKeyPoint extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfKeyPoint>;
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: org.opencv.core.Mat);
				public constructor(param0: org.opencv.core.Size, param1: number, param2: org.opencv.core.Scalar);
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Rect);
				public static fromNativeAddr(param0: number): org.opencv.core.MatOfKeyPoint;
				public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
				public alloc(param0: number): void;
				public fromList(param0: java.util.List<org.opencv.core.KeyPoint>): void;
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range, param2: org.opencv.core.Range);
				public constructor();
				public constructor(param0: Array<org.opencv.core.KeyPoint>);
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range);
				public constructor(param0: org.opencv.core.Size, param1: number);
				public fromArray(param0: Array<org.opencv.core.KeyPoint>): void;
				public toArray(): Array<org.opencv.core.KeyPoint>;
				public toList(): java.util.List<org.opencv.core.KeyPoint>;
				public constructor(param0: number);
				public constructor(param0: number, param1: number, param2: number, param3: org.opencv.core.Scalar);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfPoint extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfPoint>;
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: org.opencv.core.Mat);
				public toArray(): Array<org.opencv.core.Point>;
				public toList(): java.util.List<org.opencv.core.Point>;
				public constructor(param0: org.opencv.core.Size, param1: number, param2: org.opencv.core.Scalar);
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Rect);
				public constructor(param0: Array<org.opencv.core.Point>);
				public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
				public fromList(param0: java.util.List<org.opencv.core.Point>): void;
				public alloc(param0: number): void;
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range, param2: org.opencv.core.Range);
				public static fromNativeAddr(param0: number): org.opencv.core.MatOfPoint;
				public constructor();
				public fromArray(param0: Array<org.opencv.core.Point>): void;
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range);
				public constructor(param0: org.opencv.core.Size, param1: number);
				public constructor(param0: number);
				public constructor(param0: number, param1: number, param2: number, param3: org.opencv.core.Scalar);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfPoint2f extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfPoint2f>;
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: org.opencv.core.Mat);
				public toArray(): Array<org.opencv.core.Point>;
				public toList(): java.util.List<org.opencv.core.Point>;
				public constructor(param0: org.opencv.core.Size, param1: number, param2: org.opencv.core.Scalar);
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Rect);
				public constructor(param0: Array<org.opencv.core.Point>);
				public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
				public static fromNativeAddr(param0: number): org.opencv.core.MatOfPoint2f;
				public fromList(param0: java.util.List<org.opencv.core.Point>): void;
				public alloc(param0: number): void;
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range, param2: org.opencv.core.Range);
				public constructor();
				public fromArray(param0: Array<org.opencv.core.Point>): void;
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range);
				public constructor(param0: org.opencv.core.Size, param1: number);
				public constructor(param0: number);
				public constructor(param0: number, param1: number, param2: number, param3: org.opencv.core.Scalar);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfPoint3 extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfPoint3>;
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: org.opencv.core.Mat);
				public constructor(param0: org.opencv.core.Size, param1: number, param2: org.opencv.core.Scalar);
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Rect);
				public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
				public toList(): java.util.List<org.opencv.core.Point3>;
				public alloc(param0: number): void;
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range, param2: org.opencv.core.Range);
				public constructor();
				public fromList(param0: java.util.List<org.opencv.core.Point3>): void;
				public constructor(param0: Array<org.opencv.core.Point3>);
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range);
				public constructor(param0: org.opencv.core.Size, param1: number);
				public static fromNativeAddr(param0: number): org.opencv.core.MatOfPoint3;
				public constructor(param0: number);
				public fromArray(param0: Array<org.opencv.core.Point3>): void;
				public constructor(param0: number, param1: number, param2: number, param3: org.opencv.core.Scalar);
				public toArray(): Array<org.opencv.core.Point3>;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfPoint3f extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfPoint3f>;
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: org.opencv.core.Mat);
				public constructor(param0: org.opencv.core.Size, param1: number, param2: org.opencv.core.Scalar);
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Rect);
				public static fromNativeAddr(param0: number): org.opencv.core.MatOfPoint3f;
				public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
				public toList(): java.util.List<org.opencv.core.Point3>;
				public alloc(param0: number): void;
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range, param2: org.opencv.core.Range);
				public constructor();
				public fromList(param0: java.util.List<org.opencv.core.Point3>): void;
				public constructor(param0: Array<org.opencv.core.Point3>);
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range);
				public constructor(param0: org.opencv.core.Size, param1: number);
				public constructor(param0: number);
				public fromArray(param0: Array<org.opencv.core.Point3>): void;
				public constructor(param0: number, param1: number, param2: number, param3: org.opencv.core.Scalar);
				public toArray(): Array<org.opencv.core.Point3>;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfRect extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfRect>;
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: org.opencv.core.Mat);
				public constructor(param0: org.opencv.core.Size, param1: number, param2: org.opencv.core.Scalar);
				public toList(): java.util.List<org.opencv.core.Rect>;
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Rect);
				public fromArray(param0: Array<org.opencv.core.Rect>): void;
				public constructor(param0: Array<org.opencv.core.Rect>);
				public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
				public alloc(param0: number): void;
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range, param2: org.opencv.core.Range);
				public constructor();
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range);
				public constructor(param0: org.opencv.core.Size, param1: number);
				public toArray(): Array<org.opencv.core.Rect>;
				public constructor(param0: number);
				public constructor(param0: number, param1: number, param2: number, param3: org.opencv.core.Scalar);
				public static fromNativeAddr(param0: number): org.opencv.core.MatOfRect;
				public fromList(param0: java.util.List<org.opencv.core.Rect>): void;
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
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: org.opencv.core.Mat);
				public constructor(param0: org.opencv.core.Size, param1: number, param2: org.opencv.core.Scalar);
				public fromArray(param0: Array<org.opencv.core.Rect2d>): void;
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Rect);
				public fromList(param0: java.util.List<org.opencv.core.Rect2d>): void;
				public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
				public alloc(param0: number): void;
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range, param2: org.opencv.core.Range);
				public constructor();
				public toArray(): Array<org.opencv.core.Rect2d>;
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range);
				public constructor(param0: Array<org.opencv.core.Rect2d>);
				public constructor(param0: org.opencv.core.Size, param1: number);
				public constructor(param0: number);
				public static fromNativeAddr(param0: number): org.opencv.core.MatOfRect2d;
				public constructor(param0: number, param1: number, param2: number, param3: org.opencv.core.Scalar);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module core {
			export class MatOfRotatedRect extends org.opencv.core.Mat {
				public static class: java.lang.Class<org.opencv.core.MatOfRotatedRect>;
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: org.opencv.core.Mat);
				public toList(): java.util.List<org.opencv.core.RotatedRect>;
				public constructor(param0: org.opencv.core.Size, param1: number, param2: org.opencv.core.Scalar);
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Rect);
				public toArray(): Array<org.opencv.core.RotatedRect>;
				public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
				public alloc(param0: number): void;
				public fromArray(param0: Array<org.opencv.core.RotatedRect>): void;
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range, param2: org.opencv.core.Range);
				public fromList(param0: java.util.List<org.opencv.core.RotatedRect>): void;
				public constructor();
				public constructor(param0: Array<org.opencv.core.RotatedRect>);
				public constructor(param0: org.opencv.core.Mat, param1: org.opencv.core.Range);
				public constructor(param0: org.opencv.core.Size, param1: number);
				public constructor(param0: number);
				public static fromNativeAddr(param0: number): org.opencv.core.MatOfRotatedRect;
				public constructor(param0: number, param1: number, param2: number, param3: org.opencv.core.Scalar);
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
				public constructor(param0: number, param1: number);
				public constructor(param0: number[]);
				public hashCode(): number;
				public clone(): org.opencv.core.Point;
				public clone(): any;
				public equals(param0: any): boolean;
				public set(param0: number[]): void;
				public inside(param0: org.opencv.core.Rect): boolean;
				public toString(): string;
				public dot(param0: org.opencv.core.Point): number;
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
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: number[]);
				public cross(param0: org.opencv.core.Point3): org.opencv.core.Point3;
				public hashCode(): number;
				public constructor(param0: org.opencv.core.Point);
				public clone(): any;
				public equals(param0: any): boolean;
				public set(param0: number[]): void;
				public clone(): org.opencv.core.Point3;
				public toString(): string;
				public dot(param0: org.opencv.core.Point3): number;
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
				public constructor(param0: number, param1: number);
				public shift(param0: number): org.opencv.core.Range;
				public toString(): string;
				public constructor();
				public size(): number;
				public constructor(param0: number[]);
				public hashCode(): number;
				public clone(): any;
				public equals(param0: any): boolean;
				public set(param0: number[]): void;
				public static all(): org.opencv.core.Range;
				public intersection(param0: org.opencv.core.Range): org.opencv.core.Range;
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
				public contains(param0: org.opencv.core.Point): boolean;
				public constructor(param0: org.opencv.core.Point, param1: org.opencv.core.Point);
				public toString(): string;
				public br(): org.opencv.core.Point;
				public constructor();
				public constructor(param0: number[]);
				public tl(): org.opencv.core.Point;
				public size(): org.opencv.core.Size;
				public area(): number;
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public hashCode(): number;
				public clone(): any;
				public equals(param0: any): boolean;
				public set(param0: number[]): void;
				public constructor(param0: org.opencv.core.Point, param1: org.opencv.core.Size);
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
				public contains(param0: org.opencv.core.Point): boolean;
				public constructor(param0: org.opencv.core.Point, param1: org.opencv.core.Point);
				public toString(): string;
				public br(): org.opencv.core.Point;
				public constructor();
				public constructor(param0: number[]);
				public tl(): org.opencv.core.Point;
				public size(): org.opencv.core.Size;
				public area(): number;
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public hashCode(): number;
				public clone(): any;
				public equals(param0: any): boolean;
				public clone(): org.opencv.core.Rect2d;
				public set(param0: number[]): void;
				public constructor(param0: org.opencv.core.Point, param1: org.opencv.core.Size);
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
				public constructor(param0: number[]);
				public boundingRect(): org.opencv.core.Rect;
				public constructor(param0: org.opencv.core.Point, param1: org.opencv.core.Size, param2: number);
				public hashCode(): number;
				public clone(): any;
				public equals(param0: any): boolean;
				public points(param0: Array<org.opencv.core.Point>): void;
				public set(param0: number[]): void;
				public toString(): string;
				public clone(): org.opencv.core.RotatedRect;
				public constructor();
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
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: number, param2: number);
				public toString(): string;
				public mul(param0: org.opencv.core.Scalar): org.opencv.core.Scalar;
				public mul(param0: org.opencv.core.Scalar, param1: number): org.opencv.core.Scalar;
				public constructor(param0: number[]);
				public isReal(): boolean;
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public hashCode(): number;
				public clone(): any;
				public equals(param0: any): boolean;
				public constructor(param0: number);
				public static all(param0: number): org.opencv.core.Scalar;
				public conj(): org.opencv.core.Scalar;
				public set(param0: number[]): void;
				public clone(): org.opencv.core.Scalar;
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
				public constructor(param0: number, param1: number);
				public constructor(param0: number[]);
				public area(): number;
				public hashCode(): number;
				public clone(): org.opencv.core.Size;
				public constructor(param0: org.opencv.core.Point);
				public clone(): any;
				public equals(param0: any): boolean;
				public set(param0: number[]): void;
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
				public constructor(param0: number, param1: number, param2: number);
				public constructor(param0: number[]);
				public hashCode(): number;
				public clone(): any;
				public equals(param0: any): boolean;
				public clone(): org.opencv.core.TermCriteria;
				public set(param0: number[]): void;
				public toString(): string;
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
				public static __fromPtr__(param0: number): org.opencv.core.TickMeter;
				public finalize(): void;
				public getNativeObjAddr(): number;
				public constructor();
				public reset(): void;
				public stop(): void;
				public getTimeMilli(): number;
				public start(): void;
				public constructor(param0: number);
				public getCounter(): number;
				public getTimeMicro(): number;
				public getTimeTicks(): number;
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
				public getStringValue(param0: number): string;
				public getIntValue(): number;
				public getRealValue(param0: number): number;
				public finalize(): void;
				public getNativeObjAddr(): number;
				public constructor(param0: string);
				public getRealValue(): number;
				public getStringValue(): string;
				public isReal(): boolean;
				public isString(): boolean;
				public constructor(param0: number);
				public isInt(): boolean;
				public static __fromPtr__(param0: number): org.opencv.dnn.DictValue;
				public getIntValue(param0: number): number;
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
				public static DNN_TARGET_CPU: number;
				public static DNN_TARGET_OPENCL: number;
				public static DNN_TARGET_OPENCL_FP16: number;
				public static DNN_TARGET_MYRIAD: number;
				public static blobFromImage(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Size, param3: org.opencv.core.Scalar, param4: boolean, param5: boolean): org.opencv.core.Mat;
				public static blobFromImages(param0: java.util.List<org.opencv.core.Mat>, param1: number, param2: org.opencv.core.Size, param3: org.opencv.core.Scalar, param4: boolean, param5: boolean, param6: number): org.opencv.core.Mat;
				public static readNetFromDarknet(param0: string): org.opencv.dnn.Net;
				public static readNetFromTorch(param0: string, param1: boolean): org.opencv.dnn.Net;
				public static blobFromImages(param0: java.util.List<org.opencv.core.Mat>, param1: number): org.opencv.core.Mat;
				public static readNet(param0: string, param1: org.opencv.core.MatOfByte, param2: org.opencv.core.MatOfByte): org.opencv.dnn.Net;
				public static blobFromImages(param0: java.util.List<org.opencv.core.Mat>): org.opencv.core.Mat;
				public static readNetFromCaffe(param0: org.opencv.core.MatOfByte, param1: org.opencv.core.MatOfByte): org.opencv.dnn.Net;
				public static blobFromImage(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Size, param3: org.opencv.core.Scalar, param4: boolean, param5: boolean, param6: number): org.opencv.core.Mat;
				public static readTorchBlob(param0: string): org.opencv.core.Mat;
				public static imagesFromBlob(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.Mat>): void;
				public constructor();
				public static readNetFromDarknet(param0: org.opencv.core.MatOfByte): org.opencv.dnn.Net;
				public static shrinkCaffeModel(param0: string, param1: string): void;
				public static readNetFromDarknet(param0: org.opencv.core.MatOfByte, param1: org.opencv.core.MatOfByte): org.opencv.dnn.Net;
				public static blobFromImage(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Size, param3: org.opencv.core.Scalar): org.opencv.core.Mat;
				public static blobFromImages(param0: java.util.List<org.opencv.core.Mat>, param1: number, param2: org.opencv.core.Size, param3: org.opencv.core.Scalar): org.opencv.core.Mat;
				public static blobFromImage(param0: org.opencv.core.Mat, param1: number): org.opencv.core.Mat;
				public static blobFromImages(param0: java.util.List<org.opencv.core.Mat>, param1: number, param2: org.opencv.core.Size, param3: org.opencv.core.Scalar, param4: boolean, param5: boolean): org.opencv.core.Mat;
				public static readNetFromTensorflow(param0: org.opencv.core.MatOfByte): org.opencv.dnn.Net;
				public static readNetFromTensorflow(param0: org.opencv.core.MatOfByte, param1: org.opencv.core.MatOfByte): org.opencv.dnn.Net;
				public static NMSBoxes(param0: org.opencv.core.MatOfRect, param1: org.opencv.core.MatOfFloat, param2: number, param3: number, param4: org.opencv.core.MatOfInt, param5: number): void;
				public static shrinkCaffeModel(param0: string, param1: string, param2: java.util.List<string>): void;
				public static readNetFromCaffe(param0: org.opencv.core.MatOfByte): org.opencv.dnn.Net;
				public static NMSBoxes(param0: org.opencv.core.MatOfRect, param1: org.opencv.core.MatOfFloat, param2: number, param3: number, param4: org.opencv.core.MatOfInt, param5: number, param6: number): void;
				public static readTorchBlob(param0: string, param1: boolean): org.opencv.core.Mat;
				public static readNetFromCaffe(param0: string, param1: string): org.opencv.dnn.Net;
				public static blobFromImage(param0: org.opencv.core.Mat): org.opencv.core.Mat;
				public static readNetFromTorch(param0: string): org.opencv.dnn.Net;
				public static readNet(param0: string, param1: org.opencv.core.MatOfByte): org.opencv.dnn.Net;
				public static readNetFromCaffe(param0: string): org.opencv.dnn.Net;
				public static blobFromImages(param0: java.util.List<org.opencv.core.Mat>, param1: number, param2: org.opencv.core.Size, param3: org.opencv.core.Scalar, param4: boolean): org.opencv.core.Mat;
				public static readNet(param0: string): org.opencv.dnn.Net;
				public static readNet(param0: string, param1: string): org.opencv.dnn.Net;
				public static readNetFromTensorflow(param0: string, param1: string): org.opencv.dnn.Net;
				public static readNetFromModelOptimizer(param0: string, param1: string): org.opencv.dnn.Net;
				public static readNetFromTensorflow(param0: string): org.opencv.dnn.Net;
				public static blobFromImage(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Size, param3: org.opencv.core.Scalar, param4: boolean): org.opencv.core.Mat;
				public static blobFromImage(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Size): org.opencv.core.Mat;
				public static NMSBoxes(param0: org.opencv.core.MatOfRect, param1: org.opencv.core.MatOfFloat, param2: number, param3: number, param4: org.opencv.core.MatOfInt): void;
				public static readNet(param0: string, param1: string, param2: string): org.opencv.dnn.Net;
				public static readNetFromDarknet(param0: string, param1: string): org.opencv.dnn.Net;
				public static blobFromImages(param0: java.util.List<org.opencv.core.Mat>, param1: number, param2: org.opencv.core.Size): org.opencv.core.Mat;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module dnn {
			export class Layer extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.dnn.Layer>;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public outputNameToIndex(param0: string): number;
				public get_name(): string;
				public finalize(): void;
				public get_blobs(): java.util.List<org.opencv.core.Mat>;
				public finalize(param0: java.util.List<org.opencv.core.Mat>): java.util.List<org.opencv.core.Mat>;
				public get_preferableTarget(): number;
				public run(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: java.util.List<org.opencv.core.Mat>): void;
				public static __fromPtr__(param0: number): org.opencv.dnn.Layer;
				public constructor(param0: number);
				public set_blobs(param0: java.util.List<org.opencv.core.Mat>): void;
				public finalize(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>): void;
				public get_type(): string;
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
				public connect(param0: string, param1: string): void;
				public getFLOPS(param0: org.opencv.core.MatOfInt): number;
				public forward(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<string>): void;
				public getParam(param0: org.opencv.dnn.DictValue): org.opencv.core.Mat;
				public getMemoryConsumption(param0: number, param1: org.opencv.core.MatOfInt, param2: number[], param3: number[]): void;
				public getPerfProfile(param0: org.opencv.core.MatOfDouble): number;
				public setInputsNames(param0: java.util.List<string>): void;
				public getLayerNames(): java.util.List<string>;
				public finalize(): void;
				public static readFromModelOptimizer(param0: string, param1: string): org.opencv.dnn.Net;
				public forward(param0: java.util.List<org.opencv.core.Mat>): void;
				public setInput(param0: org.opencv.core.Mat): void;
				public getParam(param0: org.opencv.dnn.DictValue, param1: number): org.opencv.core.Mat;
				public constructor();
				public getLayersCount(param0: string): number;
				public setHalideScheduler(param0: string): void;
				public getFLOPS(param0: java.util.List<org.opencv.core.MatOfInt>): number;
				public getLayerTypes(param0: java.util.List<string>): void;
				public getUnconnectedOutLayers(): org.opencv.core.MatOfInt;
				public getFLOPS(param0: number, param1: org.opencv.core.MatOfInt): number;
				public getMemoryConsumption(param0: number, param1: java.util.List<org.opencv.core.MatOfInt>, param2: number[], param3: number[]): void;
				public static __fromPtr__(param0: number): org.opencv.dnn.Net;
				public getLayerId(param0: string): number;
				public enableFusion(param0: boolean): void;
				public empty(): boolean;
				public setInput(param0: org.opencv.core.Mat, param1: string): void;
				public getLayer(param0: org.opencv.dnn.DictValue): org.opencv.dnn.Layer;
				public setInput(param0: org.opencv.core.Mat, param1: string, param2: number, param3: org.opencv.core.Scalar): void;
				public forward(param0: string): org.opencv.core.Mat;
				public getMemoryConsumption(param0: org.opencv.core.MatOfInt, param1: number[], param2: number[]): void;
				public getNativeObjAddr(): number;
				public getFLOPS(param0: number, param1: java.util.List<org.opencv.core.MatOfInt>): number;
				public forward(): org.opencv.core.Mat;
				public deleteLayer(param0: org.opencv.dnn.DictValue): void;
				public forward(param0: java.util.List<org.opencv.core.Mat>, param1: string): void;
				public setInput(param0: org.opencv.core.Mat, param1: string, param2: number): void;
				public setParam(param0: org.opencv.dnn.DictValue, param1: number, param2: org.opencv.core.Mat): void;
				public setPreferableBackend(param0: number): void;
				public constructor(param0: number);
				public setPreferableTarget(param0: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module engine {
			export class OpenCVEngineInterface extends java.lang.Object implements globalAndroid.os.IInterface {
				public static class: java.lang.Class<org.opencv.engine.OpenCVEngineInterface>;
				/**
				 * Constructs a new instance of the org.opencv.engine.OpenCVEngineInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getEngineVersion(): number;
					getLibPathByVersion(param0: string): string;
					installVersion(param0: string): boolean;
					getLibraryList(param0: string): string;
					asBinder(): globalAndroid.os.IBinder;
				});
				public constructor();
				public getEngineVersion(): number;
				public getLibPathByVersion(param0: string): string;
				public getLibraryList(param0: string): string;
				public asBinder(): globalAndroid.os.IBinder;
				public installVersion(param0: string): boolean;
			}
			export module OpenCVEngineInterface {
				export abstract class Stub extends globalAndroid.os.Binder implements org.opencv.engine.OpenCVEngineInterface {
					public static class: java.lang.Class<org.opencv.engine.OpenCVEngineInterface.Stub>;
					public static asInterface(param0: globalAndroid.os.IBinder): org.opencv.engine.OpenCVEngineInterface;
					public isBinderAlive(): boolean;
					public shellCommand(param0: java.io.FileDescriptor, param1: java.io.FileDescriptor, param2: java.io.FileDescriptor, param3: string[], param4: globalAndroid.os.ShellCallback, param5: globalAndroid.os.ResultReceiver): void;
					public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
					public dumpAsync(param0: java.io.FileDescriptor, param1: string[]): void;
					public getLibPathByVersion(param0: string): string;
					public asBinder(): globalAndroid.os.IBinder;
					public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
					public installVersion(param0: string): boolean;
					public getLibraryList(param0: string): string;
					public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
					public dump(param0: java.io.FileDescriptor, param1: string[]): void;
					public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
					public constructor();
					public getEngineVersion(): number;
					public getInterfaceDescriptor(): string;
					public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
					public pingBinder(): boolean;
					public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: string[]): void;
				}
				export module Stub {
					export class Proxy extends java.lang.Object implements org.opencv.engine.OpenCVEngineInterface {
						public static class: java.lang.Class<org.opencv.engine.OpenCVEngineInterface.Stub.Proxy>;
						public getInterfaceDescriptor(): string;
						public installVersion(param0: string): boolean;
						public getLibraryList(param0: string): string;
						public asBinder(): globalAndroid.os.IBinder;
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
				public getDescriptorChannels(): number;
				public getNOctaves(): number;
				public finalize(): void;
				public setDescriptorType(param0: number): void;
				public getDiffusivity(): number;
				public static __fromPtr__(param0: number): org.opencv.features2d.Feature2D;
				public static create(param0: number, param1: number, param2: number, param3: number): org.opencv.features2d.AKAZE;
				public static create(): org.opencv.features2d.AKAZE;
				public setNOctaves(param0: number): void;
				public setDiffusivity(param0: number): void;
				public static create(param0: number): org.opencv.features2d.AKAZE;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.opencv.features2d.AKAZE;
				public static create(param0: number, param1: number, param2: number): org.opencv.features2d.AKAZE;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): org.opencv.features2d.AKAZE;
				public getDefaultName(): string;
				public static create(param0: number, param1: number): org.opencv.features2d.AKAZE;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public setDescriptorSize(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.features2d.AKAZE;
				public getThreshold(): number;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number): org.opencv.features2d.AKAZE;
				public setNOctaveLayers(param0: number): void;
				public setThreshold(param0: number): void;
				public setDescriptorChannels(param0: number): void;
				public constructor(param0: number);
				public getDescriptorType(): number;
				public getDescriptorSize(): number;
				public getNOctaveLayers(): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class AgastFeatureDetector extends org.opencv.features2d.Feature2D {
				public static class: java.lang.Class<org.opencv.features2d.AgastFeatureDetector>;
				public static AGAST_5_8: number;
				public static AGAST_7_12d: number;
				public static AGAST_7_12s: number;
				public static OAST_9_16: number;
				public static THRESHOLD: number;
				public static NONMAX_SUPPRESSION: number;
				public getDefaultName(): string;
				public setType(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public getNonmaxSuppression(): boolean;
				public static create(): org.opencv.features2d.AgastFeatureDetector;
				public getType(): number;
				public getThreshold(): number;
				public static create(param0: number): org.opencv.features2d.AgastFeatureDetector;
				public finalize(): void;
				public static __fromPtr__(param0: number): org.opencv.features2d.Feature2D;
				public static create(param0: number, param1: boolean, param2: number): org.opencv.features2d.AgastFeatureDetector;
				public setThreshold(param0: number): void;
				public constructor(param0: number);
				public static create(param0: number, param1: boolean): org.opencv.features2d.AgastFeatureDetector;
				public static __fromPtr__(param0: number): org.opencv.features2d.AgastFeatureDetector;
				public setNonmaxSuppression(param0: boolean): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class BFMatcher extends org.opencv.features2d.DescriptorMatcher {
				public static class: java.lang.Class<org.opencv.features2d.BFMatcher>;
				public static create(param0: number, param1: boolean): org.opencv.features2d.BFMatcher;
				public static create(): org.opencv.features2d.BFMatcher;
				public static __fromPtr__(param0: number): org.opencv.features2d.BFMatcher;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public finalize(): void;
				public constructor(param0: number);
				public constructor(param0: number, param1: boolean);
				public static create(param0: string): org.opencv.features2d.DescriptorMatcher;
				public static __fromPtr__(param0: number): org.opencv.features2d.DescriptorMatcher;
				public static create(param0: number): org.opencv.features2d.DescriptorMatcher;
				public constructor();
				public static create(param0: number): org.opencv.features2d.BFMatcher;
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
				public static __fromPtr__(param0: number): org.opencv.features2d.BOWImgDescriptorExtractor;
				public setVocabulary(param0: org.opencv.core.Mat): void;
				public finalize(): void;
				public constructor(param0: number);
				public getNativeObjAddr(): number;
				public getVocabulary(): org.opencv.core.Mat;
				public descriptorSize(): number;
				public descriptorType(): number;
				public compute(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class BOWKMeansTrainer extends org.opencv.features2d.BOWTrainer {
				public static class: java.lang.Class<org.opencv.features2d.BOWKMeansTrainer>;
				public constructor(param0: number, param1: org.opencv.core.TermCriteria, param2: number, param3: number);
				public static __fromPtr__(param0: number): org.opencv.features2d.BOWTrainer;
				public cluster(param0: org.opencv.core.Mat): org.opencv.core.Mat;
				public finalize(): void;
				public constructor(param0: number);
				public constructor(param0: number, param1: org.opencv.core.TermCriteria);
				public static __fromPtr__(param0: number): org.opencv.features2d.BOWKMeansTrainer;
				public constructor(param0: number, param1: org.opencv.core.TermCriteria, param2: number);
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
				public static __fromPtr__(param0: number): org.opencv.features2d.BOWTrainer;
				public cluster(param0: org.opencv.core.Mat): org.opencv.core.Mat;
				public clear(): void;
				public finalize(): void;
				public constructor(param0: number);
				public getNativeObjAddr(): number;
				public add(param0: org.opencv.core.Mat): void;
				public getDescriptors(): java.util.List<org.opencv.core.Mat>;
				public cluster(): org.opencv.core.Mat;
				public descriptorsCount(): number;
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
				public static create(param0: number, param1: number, param2: org.opencv.core.MatOfFloat, param3: org.opencv.core.MatOfInt, param4: number): org.opencv.features2d.BRISK;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public static __fromPtr__(param0: number): org.opencv.features2d.BRISK;
				public static create(param0: org.opencv.core.MatOfFloat, param1: org.opencv.core.MatOfInt, param2: number, param3: number): org.opencv.features2d.BRISK;
				public finalize(): void;
				public static create(param0: org.opencv.core.MatOfFloat, param1: org.opencv.core.MatOfInt, param2: number): org.opencv.features2d.BRISK;
				public static __fromPtr__(param0: number): org.opencv.features2d.Feature2D;
				public static create(param0: number, param1: number, param2: org.opencv.core.MatOfFloat, param3: org.opencv.core.MatOfInt): org.opencv.features2d.BRISK;
				public static create(param0: number, param1: number, param2: number): org.opencv.features2d.BRISK;
				public static create(): org.opencv.features2d.BRISK;
				public static create(param0: number, param1: number, param2: org.opencv.core.MatOfFloat, param3: org.opencv.core.MatOfInt, param4: number, param5: number, param6: org.opencv.core.MatOfInt): org.opencv.features2d.BRISK;
				public static create(param0: number, param1: number): org.opencv.features2d.BRISK;
				public static create(param0: number): org.opencv.features2d.BRISK;
				public static create(param0: org.opencv.core.MatOfFloat, param1: org.opencv.core.MatOfInt, param2: number, param3: number, param4: org.opencv.core.MatOfInt): org.opencv.features2d.BRISK;
				public static create(param0: number, param1: number, param2: org.opencv.core.MatOfFloat, param3: org.opencv.core.MatOfInt, param4: number, param5: number): org.opencv.features2d.BRISK;
				public constructor(param0: number);
				public static create(param0: org.opencv.core.MatOfFloat, param1: org.opencv.core.MatOfInt): org.opencv.features2d.BRISK;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class DescriptorExtractor extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.features2d.DescriptorExtractor>;
				public nativeObj: number;
				public static SIFT: number;
				public static SURF: number;
				public static ORB: number;
				public static BRIEF: number;
				public static BRISK: number;
				public static FREAK: number;
				public static AKAZE: number;
				public static OPPONENT_SIFT: number;
				public static OPPONENT_SURF: number;
				public static OPPONENT_ORB: number;
				public static OPPONENT_BRIEF: number;
				public static OPPONENT_BRISK: number;
				public static OPPONENT_FREAK: number;
				public static OPPONENT_AKAZE: number;
				public compute(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.MatOfKeyPoint>, param2: java.util.List<org.opencv.core.Mat>): void;
				public static __fromPtr__(param0: number): org.opencv.features2d.DescriptorExtractor;
				public read(param0: string): void;
				public finalize(): void;
				public constructor(param0: number);
				public getNativeObjAddr(): number;
				public descriptorSize(): number;
				public descriptorType(): number;
				public static create(param0: number): org.opencv.features2d.DescriptorExtractor;
				public compute(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat): void;
				public empty(): boolean;
				public write(param0: string): void;
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
				public radiusMatch(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfDMatch>, param2: number, param3: java.util.List<org.opencv.core.Mat>, param4: boolean): void;
				public knnMatch(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: java.util.List<org.opencv.core.MatOfDMatch>, param3: number): void;
				public isMaskSupported(): boolean;
				public match(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfDMatch): void;
				public finalize(): void;
				public knnMatch(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfDMatch>, param2: number, param3: java.util.List<org.opencv.core.Mat>): void;
				public knnMatch(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: java.util.List<org.opencv.core.MatOfDMatch>, param3: number, param4: org.opencv.core.Mat, param5: boolean): void;
				public knnMatch(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfDMatch>, param2: number, param3: java.util.List<org.opencv.core.Mat>, param4: boolean): void;
				public knnMatch(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: java.util.List<org.opencv.core.MatOfDMatch>, param3: number, param4: org.opencv.core.Mat): void;
				public clone(): any;
				public clear(): void;
				public radiusMatch(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: java.util.List<org.opencv.core.MatOfDMatch>, param3: number, param4: org.opencv.core.Mat, param5: boolean): void;
				public static __fromPtr__(param0: number): org.opencv.features2d.DescriptorMatcher;
				public getTrainDescriptors(): java.util.List<org.opencv.core.Mat>;
				public empty(): boolean;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public match(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfDMatch, param2: java.util.List<org.opencv.core.Mat>): void;
				public static create(param0: string): org.opencv.features2d.DescriptorMatcher;
				public clone(param0: boolean): org.opencv.features2d.DescriptorMatcher;
				public clone(): org.opencv.features2d.DescriptorMatcher;
				public static create(param0: number): org.opencv.features2d.DescriptorMatcher;
				public radiusMatch(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfDMatch>, param2: number, param3: java.util.List<org.opencv.core.Mat>): void;
				public match(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.MatOfDMatch, param3: org.opencv.core.Mat): void;
				public radiusMatch(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfDMatch>, param2: number): void;
				public radiusMatch(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: java.util.List<org.opencv.core.MatOfDMatch>, param3: number, param4: org.opencv.core.Mat): void;
				public knnMatch(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfDMatch>, param2: number): void;
				public read(param0: string): void;
				public train(): void;
				public add(param0: java.util.List<org.opencv.core.Mat>): void;
				public constructor(param0: number);
				public radiusMatch(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: java.util.List<org.opencv.core.MatOfDMatch>, param3: number): void;
				public match(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.MatOfDMatch): void;
				public write(param0: string): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class FastFeatureDetector extends org.opencv.features2d.Feature2D {
				public static class: java.lang.Class<org.opencv.features2d.FastFeatureDetector>;
				public static TYPE_5_8: number;
				public static TYPE_7_12: number;
				public static TYPE_9_16: number;
				public static THRESHOLD: number;
				public static NONMAX_SUPPRESSION: number;
				public static FAST_N: number;
				public getDefaultName(): string;
				public setType(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public getNonmaxSuppression(): boolean;
				public getType(): number;
				public static create(): org.opencv.features2d.FastFeatureDetector;
				public getThreshold(): number;
				public finalize(): void;
				public static create(param0: number, param1: boolean): org.opencv.features2d.FastFeatureDetector;
				public static __fromPtr__(param0: number): org.opencv.features2d.Feature2D;
				public static __fromPtr__(param0: number): org.opencv.features2d.FastFeatureDetector;
				public static create(param0: number, param1: boolean, param2: number): org.opencv.features2d.FastFeatureDetector;
				public setThreshold(param0: number): void;
				public static create(param0: number): org.opencv.features2d.FastFeatureDetector;
				public constructor(param0: number);
				public setNonmaxSuppression(param0: boolean): void;
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
				public detect(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint): void;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public finalize(): void;
				public static __fromPtr__(param0: number): org.opencv.features2d.Feature2D;
				public compute(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.MatOfKeyPoint>, param2: java.util.List<org.opencv.core.Mat>): void;
				public detect(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.MatOfKeyPoint>): void;
				public defaultNorm(): number;
				public detect(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat): void;
				public detectAndCompute(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.MatOfKeyPoint, param3: org.opencv.core.Mat): void;
				public detect(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.MatOfKeyPoint>, param2: java.util.List<org.opencv.core.Mat>): void;
				public read(param0: string): void;
				public constructor(param0: number);
				public descriptorSize(): number;
				public detectAndCompute(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.MatOfKeyPoint, param3: org.opencv.core.Mat, param4: boolean): void;
				public descriptorType(): number;
				public compute(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat): void;
				public empty(): boolean;
				public write(param0: string): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class FeatureDetector extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.features2d.FeatureDetector>;
				public nativeObj: number;
				public static FAST: number;
				public static STAR: number;
				public static SIFT: number;
				public static SURF: number;
				public static ORB: number;
				public static MSER: number;
				public static GFTT: number;
				public static HARRIS: number;
				public static SIMPLEBLOB: number;
				public static DENSE: number;
				public static BRISK: number;
				public static AKAZE: number;
				public static GRID_FAST: number;
				public static GRID_STAR: number;
				public static GRID_SIFT: number;
				public static GRID_SURF: number;
				public static GRID_ORB: number;
				public static GRID_MSER: number;
				public static GRID_GFTT: number;
				public static GRID_HARRIS: number;
				public static GRID_SIMPLEBLOB: number;
				public static GRID_DENSE: number;
				public static GRID_BRISK: number;
				public static GRID_AKAZE: number;
				public static PYRAMID_FAST: number;
				public static PYRAMID_STAR: number;
				public static PYRAMID_SIFT: number;
				public static PYRAMID_SURF: number;
				public static PYRAMID_ORB: number;
				public static PYRAMID_MSER: number;
				public static PYRAMID_GFTT: number;
				public static PYRAMID_HARRIS: number;
				public static PYRAMID_SIMPLEBLOB: number;
				public static PYRAMID_DENSE: number;
				public static PYRAMID_BRISK: number;
				public static PYRAMID_AKAZE: number;
				public static DYNAMIC_FAST: number;
				public static DYNAMIC_STAR: number;
				public static DYNAMIC_SIFT: number;
				public static DYNAMIC_SURF: number;
				public static DYNAMIC_ORB: number;
				public static DYNAMIC_MSER: number;
				public static DYNAMIC_GFTT: number;
				public static DYNAMIC_HARRIS: number;
				public static DYNAMIC_SIMPLEBLOB: number;
				public static DYNAMIC_DENSE: number;
				public static DYNAMIC_BRISK: number;
				public static DYNAMIC_AKAZE: number;
				/** @deprecated */
				public static create(param0: number): org.opencv.features2d.FeatureDetector;
				public detect(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.MatOfKeyPoint>): void;
				public static __fromPtr__(param0: number): org.opencv.features2d.FeatureDetector;
				public detect(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint): void;
				public detect(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat): void;
				public detect(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.MatOfKeyPoint>, param2: java.util.List<org.opencv.core.Mat>): void;
				public read(param0: string): void;
				public finalize(): void;
				public constructor(param0: number);
				public getNativeObjAddr(): number;
				public empty(): boolean;
				public write(param0: string): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class Features2d extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.features2d.Features2d>;
				public static DRAW_OVER_OUTIMG: number;
				public static NOT_DRAW_SINGLE_POINTS: number;
				public static DRAW_RICH_KEYPOINTS: number;
				public static drawKeypoints(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat): void;
				public static drawMatches(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfKeyPoint, param4: org.opencv.core.MatOfDMatch, param5: org.opencv.core.Mat, param6: org.opencv.core.Scalar, param7: org.opencv.core.Scalar, param8: org.opencv.core.MatOfByte): void;
				public static drawMatches2(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfKeyPoint, param4: java.util.List<org.opencv.core.MatOfDMatch>, param5: org.opencv.core.Mat, param6: org.opencv.core.Scalar): void;
				public static drawKeypoints(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat, param3: org.opencv.core.Scalar, param4: number): void;
				public static drawMatches(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfKeyPoint, param4: org.opencv.core.MatOfDMatch, param5: org.opencv.core.Mat, param6: org.opencv.core.Scalar, param7: org.opencv.core.Scalar): void;
				public static drawMatches(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfKeyPoint, param4: org.opencv.core.MatOfDMatch, param5: org.opencv.core.Mat, param6: org.opencv.core.Scalar): void;
				public static drawMatchesKnn(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfKeyPoint, param4: java.util.List<org.opencv.core.MatOfDMatch>, param5: org.opencv.core.Mat, param6: org.opencv.core.Scalar, param7: org.opencv.core.Scalar, param8: java.util.List<org.opencv.core.MatOfByte>, param9: number): void;
				public static drawMatchesKnn(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfKeyPoint, param4: java.util.List<org.opencv.core.MatOfDMatch>, param5: org.opencv.core.Mat, param6: org.opencv.core.Scalar, param7: org.opencv.core.Scalar, param8: java.util.List<org.opencv.core.MatOfByte>): void;
				public constructor();
				public static drawMatchesKnn(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfKeyPoint, param4: java.util.List<org.opencv.core.MatOfDMatch>, param5: org.opencv.core.Mat, param6: org.opencv.core.Scalar): void;
				public static drawMatchesKnn(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfKeyPoint, param4: java.util.List<org.opencv.core.MatOfDMatch>, param5: org.opencv.core.Mat, param6: org.opencv.core.Scalar, param7: org.opencv.core.Scalar): void;
				public static drawMatchesKnn(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfKeyPoint, param4: java.util.List<org.opencv.core.MatOfDMatch>, param5: org.opencv.core.Mat): void;
				public static drawMatches2(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfKeyPoint, param4: java.util.List<org.opencv.core.MatOfDMatch>, param5: org.opencv.core.Mat, param6: org.opencv.core.Scalar, param7: org.opencv.core.Scalar, param8: java.util.List<org.opencv.core.MatOfByte>): void;
				public static drawMatches2(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfKeyPoint, param4: java.util.List<org.opencv.core.MatOfDMatch>, param5: org.opencv.core.Mat, param6: org.opencv.core.Scalar, param7: org.opencv.core.Scalar, param8: java.util.List<org.opencv.core.MatOfByte>, param9: number): void;
				public static drawMatches2(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfKeyPoint, param4: java.util.List<org.opencv.core.MatOfDMatch>, param5: org.opencv.core.Mat): void;
				public static drawKeypoints(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat, param3: org.opencv.core.Scalar): void;
				public static drawMatches(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfKeyPoint, param4: org.opencv.core.MatOfDMatch, param5: org.opencv.core.Mat, param6: org.opencv.core.Scalar, param7: org.opencv.core.Scalar, param8: org.opencv.core.MatOfByte, param9: number): void;
				public static drawMatches2(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfKeyPoint, param4: java.util.List<org.opencv.core.MatOfDMatch>, param5: org.opencv.core.Mat, param6: org.opencv.core.Scalar, param7: org.opencv.core.Scalar): void;
				public static drawMatches(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfKeyPoint, param2: org.opencv.core.Mat, param3: org.opencv.core.MatOfKeyPoint, param4: org.opencv.core.MatOfDMatch, param5: org.opencv.core.Mat): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class FlannBasedMatcher extends org.opencv.features2d.DescriptorMatcher {
				public static class: java.lang.Class<org.opencv.features2d.FlannBasedMatcher>;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public static __fromPtr__(param0: number): org.opencv.features2d.FlannBasedMatcher;
				public static create(): org.opencv.features2d.FlannBasedMatcher;
				public finalize(): void;
				public constructor(param0: number);
				public static create(param0: string): org.opencv.features2d.DescriptorMatcher;
				public static __fromPtr__(param0: number): org.opencv.features2d.DescriptorMatcher;
				public static create(param0: number): org.opencv.features2d.DescriptorMatcher;
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
				public static create(param0: number, param1: number): org.opencv.features2d.GFTTDetector;
				public static __fromPtr__(param0: number): org.opencv.features2d.GFTTDetector;
				public finalize(): void;
				public static __fromPtr__(param0: number): org.opencv.features2d.Feature2D;
				public static create(): org.opencv.features2d.GFTTDetector;
				public static create(param0: number, param1: number, param2: number, param3: number): org.opencv.features2d.GFTTDetector;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean): org.opencv.features2d.GFTTDetector;
				public setMinDistance(param0: number): void;
				public setK(param0: number): void;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number): org.opencv.features2d.GFTTDetector;
				public static create(param0: number): org.opencv.features2d.GFTTDetector;
				public getHarrisDetector(): boolean;
				public getMaxFeatures(): number;
				public getDefaultName(): string;
				public getQualityLevel(): number;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number): org.opencv.features2d.GFTTDetector;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: number): org.opencv.features2d.GFTTDetector;
				public setMaxFeatures(param0: number): void;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: boolean): org.opencv.features2d.GFTTDetector;
				public getBlockSize(): number;
				public setQualityLevel(param0: number): void;
				public setBlockSize(param0: number): void;
				public getMinDistance(): number;
				public setHarrisDetector(param0: boolean): void;
				public constructor(param0: number);
				public static create(param0: number, param1: number, param2: number): org.opencv.features2d.GFTTDetector;
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
				public getNOctaves(): number;
				public setExtended(param0: boolean): void;
				public finalize(): void;
				public getExtended(): boolean;
				public setUpright(param0: boolean): void;
				public getDiffusivity(): number;
				public static __fromPtr__(param0: number): org.opencv.features2d.Feature2D;
				public static create(param0: boolean, param1: boolean, param2: number, param3: number, param4: number): org.opencv.features2d.KAZE;
				public setNOctaves(param0: number): void;
				public setDiffusivity(param0: number): void;
				public static create(param0: boolean, param1: boolean, param2: number, param3: number): org.opencv.features2d.KAZE;
				public getDefaultName(): string;
				public static __fromPtr__(param0: number): org.opencv.features2d.KAZE;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public static create(param0: boolean, param1: boolean, param2: number, param3: number, param4: number, param5: number): org.opencv.features2d.KAZE;
				public getUpright(): boolean;
				public getThreshold(): number;
				public setNOctaveLayers(param0: number): void;
				public static create(): org.opencv.features2d.KAZE;
				public static create(param0: boolean, param1: boolean): org.opencv.features2d.KAZE;
				public setThreshold(param0: number): void;
				public constructor(param0: number);
				public static create(param0: boolean, param1: boolean, param2: number): org.opencv.features2d.KAZE;
				public static create(param0: boolean): org.opencv.features2d.KAZE;
				public getNOctaveLayers(): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class MSER extends org.opencv.features2d.Feature2D {
				public static class: java.lang.Class<org.opencv.features2d.MSER>;
				public finalize(): void;
				public static __fromPtr__(param0: number): org.opencv.features2d.Feature2D;
				public getPass2Only(): boolean;
				public setMaxArea(param0: number): void;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number): org.opencv.features2d.MSER;
				public static create(param0: number, param1: number, param2: number, param3: number): org.opencv.features2d.MSER;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): org.opencv.features2d.MSER;
				public setDelta(param0: number): void;
				public setPass2Only(param0: boolean): void;
				public getDelta(): number;
				public detectRegions(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfPoint>, param2: org.opencv.core.MatOfRect): void;
				public getDefaultName(): string;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): org.opencv.features2d.MSER;
				public static create(): org.opencv.features2d.MSER;
				public static create(param0: number, param1: number): org.opencv.features2d.MSER;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.opencv.features2d.MSER;
				public setMinArea(param0: number): void;
				public getMaxArea(): number;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): org.opencv.features2d.MSER;
				public constructor(param0: number);
				public static __fromPtr__(param0: number): org.opencv.features2d.MSER;
				public static create(param0: number, param1: number, param2: number): org.opencv.features2d.MSER;
				public static create(param0: number): org.opencv.features2d.MSER;
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
				public static kBytes: number;
				public static HARRIS_SCORE: number;
				public static FAST_SCORE: number;
				public static create(): org.opencv.features2d.ORB;
				public setFastThreshold(param0: number): void;
				public setNLevels(param0: number): void;
				public finalize(): void;
				public getScoreType(): number;
				public getEdgeThreshold(): number;
				public getFastThreshold(): number;
				public static __fromPtr__(param0: number): org.opencv.features2d.Feature2D;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.opencv.features2d.ORB;
				public setWTA_K(param0: number): void;
				public setEdgeThreshold(param0: number): void;
				public static create(param0: number, param1: number): org.opencv.features2d.ORB;
				public getFirstLevel(): number;
				public static create(param0: number, param1: number, param2: number, param3: number): org.opencv.features2d.ORB;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): org.opencv.features2d.ORB;
				public getWTA_K(): number;
				public setFirstLevel(param0: number): void;
				public getMaxFeatures(): number;
				public getPatchSize(): number;
				public setScoreType(param0: number): void;
				public getDefaultName(): string;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public static create(param0: number): org.opencv.features2d.ORB;
				public setScaleFactor(param0: number): void;
				public static create(param0: number, param1: number, param2: number): org.opencv.features2d.ORB;
				public setMaxFeatures(param0: number): void;
				public getNLevels(): number;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): org.opencv.features2d.ORB;
				public getScaleFactor(): number;
				public setPatchSize(param0: number): void;
				public constructor(param0: number);
				public static __fromPtr__(param0: number): org.opencv.features2d.ORB;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number): org.opencv.features2d.ORB;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): org.opencv.features2d.ORB;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module features2d {
			export class Params extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.features2d.Params>;
				public nativeObj: number;
				public set_filterByCircularity(param0: boolean): void;
				public set_maxArea(param0: number): void;
				public get_filterByColor(): boolean;
				public get_maxInertiaRatio(): number;
				public finalize(): void;
				public get_maxThreshold(): number;
				public set_minArea(param0: number): void;
				public set_maxConvexity(param0: number): void;
				public constructor();
				public get_minConvexity(): number;
				public get_filterByArea(): boolean;
				public set_filterByInertia(param0: boolean): void;
				public set_minInertiaRatio(param0: number): void;
				public set_filterByConvexity(param0: boolean): void;
				public set_filterByColor(param0: boolean): void;
				public get_minRepeatability(): number;
				public set_minDistBetweenBlobs(param0: number): void;
				public set_maxInertiaRatio(param0: number): void;
				public get_maxConvexity(): number;
				public set_filterByArea(param0: boolean): void;
				public get_minArea(): number;
				public get_minCircularity(): number;
				public set_minCircularity(param0: number): void;
				public getNativeObjAddr(): number;
				public get_filterByInertia(): boolean;
				public set_thresholdStep(param0: number): void;
				public set_minRepeatability(param0: number): void;
				public get_minDistBetweenBlobs(): number;
				public get_thresholdStep(): number;
				public get_maxCircularity(): number;
				public set_minConvexity(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.features2d.Params;
				public get_filterByConvexity(): boolean;
				public set_minThreshold(param0: number): void;
				public get_minThreshold(): number;
				public set_maxThreshold(param0: number): void;
				public get_filterByCircularity(): boolean;
				public set_maxCircularity(param0: number): void;
				public get_maxArea(): number;
				public constructor(param0: number);
				public get_minInertiaRatio(): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module imgcodecs {
			export class Imgcodecs extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.imgcodecs.Imgcodecs>;
				public static CV_LOAD_IMAGE_UNCHANGED: number;
				public static CV_LOAD_IMAGE_GRAYSCALE: number;
				public static CV_LOAD_IMAGE_COLOR: number;
				public static CV_LOAD_IMAGE_ANYDEPTH: number;
				public static CV_LOAD_IMAGE_ANYCOLOR: number;
				public static CV_LOAD_IMAGE_IGNORE_ORIENTATION: number;
				public static CV_IMWRITE_JPEG_QUALITY: number;
				public static CV_IMWRITE_JPEG_PROGRESSIVE: number;
				public static CV_IMWRITE_JPEG_OPTIMIZE: number;
				public static CV_IMWRITE_JPEG_RST_INTERVAL: number;
				public static CV_IMWRITE_JPEG_LUMA_QUALITY: number;
				public static CV_IMWRITE_JPEG_CHROMA_QUALITY: number;
				public static CV_IMWRITE_PNG_COMPRESSION: number;
				public static CV_IMWRITE_PNG_STRATEGY: number;
				public static CV_IMWRITE_PNG_BILEVEL: number;
				public static CV_IMWRITE_PNG_STRATEGY_DEFAULT: number;
				public static CV_IMWRITE_PNG_STRATEGY_FILTERED: number;
				public static CV_IMWRITE_PNG_STRATEGY_HUFFMAN_ONLY: number;
				public static CV_IMWRITE_PNG_STRATEGY_RLE: number;
				public static CV_IMWRITE_PNG_STRATEGY_FIXED: number;
				public static CV_IMWRITE_PXM_BINARY: number;
				public static CV_IMWRITE_EXR_TYPE: number;
				public static CV_IMWRITE_WEBP_QUALITY: number;
				public static CV_IMWRITE_PAM_TUPLETYPE: number;
				public static CV_IMWRITE_PAM_FORMAT_NULL: number;
				public static CV_IMWRITE_PAM_FORMAT_BLACKANDWHITE: number;
				public static CV_IMWRITE_PAM_FORMAT_GRAYSCALE: number;
				public static CV_IMWRITE_PAM_FORMAT_GRAYSCALE_ALPHA: number;
				public static CV_IMWRITE_PAM_FORMAT_RGB: number;
				public static CV_IMWRITE_PAM_FORMAT_RGB_ALPHA: number;
				public static CV_CVTIMG_FLIP: number;
				public static CV_CVTIMG_SWAP_RB: number;
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
				public static IMWRITE_JPEG_QUALITY: number;
				public static IMWRITE_JPEG_PROGRESSIVE: number;
				public static IMWRITE_JPEG_OPTIMIZE: number;
				public static IMWRITE_JPEG_RST_INTERVAL: number;
				public static IMWRITE_JPEG_LUMA_QUALITY: number;
				public static IMWRITE_JPEG_CHROMA_QUALITY: number;
				public static IMWRITE_PNG_COMPRESSION: number;
				public static IMWRITE_PNG_STRATEGY: number;
				public static IMWRITE_PNG_BILEVEL: number;
				public static IMWRITE_PXM_BINARY: number;
				public static IMWRITE_EXR_TYPE: number;
				public static IMWRITE_WEBP_QUALITY: number;
				public static IMWRITE_PAM_TUPLETYPE: number;
				public static IMWRITE_TIFF_RESUNIT: number;
				public static IMWRITE_TIFF_XDPI: number;
				public static IMWRITE_TIFF_YDPI: number;
				public static IMWRITE_EXR_TYPE_HALF: number;
				public static IMWRITE_EXR_TYPE_FLOAT: number;
				public static IMWRITE_PNG_STRATEGY_DEFAULT: number;
				public static IMWRITE_PNG_STRATEGY_FILTERED: number;
				public static IMWRITE_PNG_STRATEGY_HUFFMAN_ONLY: number;
				public static IMWRITE_PNG_STRATEGY_RLE: number;
				public static IMWRITE_PNG_STRATEGY_FIXED: number;
				public static IMWRITE_PAM_FORMAT_NULL: number;
				public static IMWRITE_PAM_FORMAT_BLACKANDWHITE: number;
				public static IMWRITE_PAM_FORMAT_GRAYSCALE: number;
				public static IMWRITE_PAM_FORMAT_GRAYSCALE_ALPHA: number;
				public static IMWRITE_PAM_FORMAT_RGB: number;
				public static IMWRITE_PAM_FORMAT_RGB_ALPHA: number;
				public static imwrite(param0: string, param1: org.opencv.core.Mat, param2: org.opencv.core.MatOfInt): boolean;
				public static imdecode(param0: org.opencv.core.Mat, param1: number): org.opencv.core.Mat;
				public static imread(param0: string): org.opencv.core.Mat;
				public static imreadmulti(param0: string, param1: java.util.List<org.opencv.core.Mat>, param2: number): boolean;
				public static imread(param0: string, param1: number): org.opencv.core.Mat;
				public static imencode(param0: string, param1: org.opencv.core.Mat, param2: org.opencv.core.MatOfByte, param3: org.opencv.core.MatOfInt): boolean;
				public static imreadmulti(param0: string, param1: java.util.List<org.opencv.core.Mat>): boolean;
				public static imwrite(param0: string, param1: org.opencv.core.Mat): boolean;
				public static imencode(param0: string, param1: org.opencv.core.Mat, param2: org.opencv.core.MatOfByte): boolean;
				public constructor();
			}
		}
	}
}

declare module org {
	export module opencv {
		export module imgproc {
			export class CLAHE extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.imgproc.CLAHE>;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public collectGarbage(): void;
				public getClipLimit(): number;
				public finalize(): void;
				public constructor(param0: number);
				public getTilesGridSize(): org.opencv.core.Size;
				public setTilesGridSize(param0: org.opencv.core.Size): void;
				public setClipLimit(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.imgproc.CLAHE;
				public apply(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module imgproc {
			export class Imgproc extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.imgproc.Imgproc>;
				public static LINE_AA: number;
				public static LINE_8: number;
				public static LINE_4: number;
				public static CV_BLUR_NO_SCALE: number;
				public static CV_BLUR: number;
				public static CV_GAUSSIAN: number;
				public static CV_MEDIAN: number;
				public static CV_BILATERAL: number;
				public static CV_GAUSSIAN_5x5: number;
				public static CV_SCHARR: number;
				public static CV_MAX_SOBEL_KSIZE: number;
				public static CV_RGBA2mRGBA: number;
				public static CV_mRGBA2RGBA: number;
				public static CV_WARP_FILL_OUTLIERS: number;
				public static CV_WARP_INVERSE_MAP: number;
				public static CV_SHAPE_RECT: number;
				public static CV_SHAPE_CROSS: number;
				public static CV_SHAPE_ELLIPSE: number;
				public static CV_SHAPE_CUSTOM: number;
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
				public static MORPH_ERODE: number;
				public static MORPH_DILATE: number;
				public static MORPH_OPEN: number;
				public static MORPH_CLOSE: number;
				public static MORPH_GRADIENT: number;
				public static MORPH_TOPHAT: number;
				public static MORPH_BLACKHAT: number;
				public static MORPH_HITMISS: number;
				public static MORPH_RECT: number;
				public static MORPH_CROSS: number;
				public static MORPH_ELLIPSE: number;
				public static INTER_NEAREST: number;
				public static INTER_LINEAR: number;
				public static INTER_CUBIC: number;
				public static INTER_AREA: number;
				public static INTER_LANCZOS4: number;
				public static INTER_LINEAR_EXACT: number;
				public static INTER_MAX: number;
				public static WARP_FILL_OUTLIERS: number;
				public static WARP_INVERSE_MAP: number;
				public static WARP_POLAR_LINEAR: number;
				public static WARP_POLAR_LOG: number;
				public static INTER_BITS: number;
				public static INTER_BITS2: number;
				public static INTER_TAB_SIZE: number;
				public static INTER_TAB_SIZE2: number;
				public static DIST_USER: number;
				public static DIST_L1: number;
				public static DIST_L2: number;
				public static DIST_C: number;
				public static DIST_L12: number;
				public static DIST_FAIR: number;
				public static DIST_WELSCH: number;
				public static DIST_HUBER: number;
				public static DIST_MASK_3: number;
				public static DIST_MASK_5: number;
				public static DIST_MASK_PRECISE: number;
				public static THRESH_BINARY: number;
				public static THRESH_BINARY_INV: number;
				public static THRESH_TRUNC: number;
				public static THRESH_TOZERO: number;
				public static THRESH_TOZERO_INV: number;
				public static THRESH_MASK: number;
				public static THRESH_OTSU: number;
				public static THRESH_TRIANGLE: number;
				public static ADAPTIVE_THRESH_MEAN_C: number;
				public static ADAPTIVE_THRESH_GAUSSIAN_C: number;
				public static PROJ_SPHERICAL_ORTHO: number;
				public static PROJ_SPHERICAL_EQRECT: number;
				public static GC_BGD: number;
				public static GC_FGD: number;
				public static GC_PR_BGD: number;
				public static GC_PR_FGD: number;
				public static GC_INIT_WITH_RECT: number;
				public static GC_INIT_WITH_MASK: number;
				public static GC_EVAL: number;
				public static GC_EVAL_FREEZE_MODEL: number;
				public static DIST_LABEL_CCOMP: number;
				public static DIST_LABEL_PIXEL: number;
				public static FLOODFILL_FIXED_RANGE: number;
				public static FLOODFILL_MASK_ONLY: number;
				public static CC_STAT_LEFT: number;
				public static CC_STAT_TOP: number;
				public static CC_STAT_WIDTH: number;
				public static CC_STAT_HEIGHT: number;
				public static CC_STAT_AREA: number;
				public static CC_STAT_MAX: number;
				public static CCL_WU: number;
				public static CCL_DEFAULT: number;
				public static CCL_GRANA: number;
				public static RETR_EXTERNAL: number;
				public static RETR_LIST: number;
				public static RETR_CCOMP: number;
				public static RETR_TREE: number;
				public static RETR_FLOODFILL: number;
				public static CHAIN_APPROX_NONE: number;
				public static CHAIN_APPROX_SIMPLE: number;
				public static CHAIN_APPROX_TC89_L1: number;
				public static CHAIN_APPROX_TC89_KCOS: number;
				public static CONTOURS_MATCH_I1: number;
				public static CONTOURS_MATCH_I2: number;
				public static CONTOURS_MATCH_I3: number;
				public static HOUGH_STANDARD: number;
				public static HOUGH_PROBABILISTIC: number;
				public static HOUGH_MULTI_SCALE: number;
				public static HOUGH_GRADIENT: number;
				public static LSD_REFINE_NONE: number;
				public static LSD_REFINE_STD: number;
				public static LSD_REFINE_ADV: number;
				public static HISTCMP_CORREL: number;
				public static HISTCMP_CHISQR: number;
				public static HISTCMP_INTERSECT: number;
				public static HISTCMP_BHATTACHARYYA: number;
				public static HISTCMP_HELLINGER: number;
				public static HISTCMP_CHISQR_ALT: number;
				public static HISTCMP_KL_DIV: number;
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
				public static COLOR_BayerBG2RGB: number;
				public static COLOR_BayerGB2RGB: number;
				public static COLOR_BayerRG2RGB: number;
				public static COLOR_BayerGR2RGB: number;
				public static COLOR_BayerBG2GRAY: number;
				public static COLOR_BayerGB2GRAY: number;
				public static COLOR_BayerRG2GRAY: number;
				public static COLOR_BayerGR2GRAY: number;
				public static COLOR_BayerBG2BGR_VNG: number;
				public static COLOR_BayerGB2BGR_VNG: number;
				public static COLOR_BayerRG2BGR_VNG: number;
				public static COLOR_BayerGR2BGR_VNG: number;
				public static COLOR_BayerBG2RGB_VNG: number;
				public static COLOR_BayerGB2RGB_VNG: number;
				public static COLOR_BayerRG2RGB_VNG: number;
				public static COLOR_BayerGR2RGB_VNG: number;
				public static COLOR_BayerBG2BGR_EA: number;
				public static COLOR_BayerGB2BGR_EA: number;
				public static COLOR_BayerRG2BGR_EA: number;
				public static COLOR_BayerGR2BGR_EA: number;
				public static COLOR_BayerBG2RGB_EA: number;
				public static COLOR_BayerGB2RGB_EA: number;
				public static COLOR_BayerRG2RGB_EA: number;
				public static COLOR_BayerGR2RGB_EA: number;
				public static COLOR_BayerBG2BGRA: number;
				public static COLOR_BayerGB2BGRA: number;
				public static COLOR_BayerRG2BGRA: number;
				public static COLOR_BayerGR2BGRA: number;
				public static COLOR_BayerBG2RGBA: number;
				public static COLOR_BayerGB2RGBA: number;
				public static COLOR_BayerRG2RGBA: number;
				public static COLOR_BayerGR2RGBA: number;
				public static COLOR_COLORCVT_MAX: number;
				public static INTERSECT_NONE: number;
				public static INTERSECT_PARTIAL: number;
				public static INTERSECT_FULL: number;
				public static TM_SQDIFF: number;
				public static TM_SQDIFF_NORMED: number;
				public static TM_CCORR: number;
				public static TM_CCORR_NORMED: number;
				public static TM_CCOEFF: number;
				public static TM_CCOEFF_NORMED: number;
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
				public static MARKER_CROSS: number;
				public static MARKER_TILTED_CROSS: number;
				public static MARKER_STAR: number;
				public static MARKER_DIAMOND: number;
				public static MARKER_SQUARE: number;
				public static MARKER_TRIANGLE_UP: number;
				public static MARKER_TRIANGLE_DOWN: number;
				public static HoughLinesPointSet(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number): void;
				public static circle(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: number, param3: org.opencv.core.Scalar, param4: number, param5: number, param6: number): void;
				public static goodFeaturesToTrack(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfPoint, param2: number, param3: number, param4: number, param5: org.opencv.core.Mat, param6: number, param7: number, param8: boolean, param9: number): void;
				public static floodFill(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Point, param3: org.opencv.core.Scalar, param4: org.opencv.core.Rect): number;
				public static getGaborKernel(param0: org.opencv.core.Size, param1: number, param2: number, param3: number, param4: number, param5: number): org.opencv.core.Mat;
				public static intersectConvexConvex(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: boolean): number;
				public static GaussianBlur(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: number, param4: number): void;
				public static accumulateProduct(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static integral(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static Scharr(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): void;
				public static sqrBoxFilter(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Size, param4: org.opencv.core.Point, param5: boolean): void;
				public static minAreaRect(param0: org.opencv.core.MatOfPoint2f): org.opencv.core.RotatedRect;
				public static goodFeaturesToTrack(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfPoint, param2: number, param3: number, param4: number, param5: org.opencv.core.Mat, param6: number, param7: number): void;
				public static drawMarker(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: org.opencv.core.Scalar): void;
				public static Scharr(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
				public static circle(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: number, param3: org.opencv.core.Scalar, param4: number, param5: number): void;
				public static createHanningWindow(param0: org.opencv.core.Mat, param1: org.opencv.core.Size, param2: number): void;
				public static connectedComponentsWithStats(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): number;
				public static ellipse(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: org.opencv.core.Size, param3: number, param4: number, param5: number, param6: org.opencv.core.Scalar, param7: number, param8: number, param9: number): void;
				public static distanceTransformWithLabels(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number, param5: number): void;
				public static applyColorMap(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static grabCut(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Rect, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: number, param6: number): void;
				public static polylines(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfPoint>, param2: boolean, param3: org.opencv.core.Scalar, param4: number, param5: number, param6: number): void;
				public static connectedComponents(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number): number;
				public static HoughLines(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number): void;
				public static morphologyEx(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Mat): void;
				public static ellipse(param0: org.opencv.core.Mat, param1: org.opencv.core.RotatedRect, param2: org.opencv.core.Scalar): void;
				public static initUndistortRectifyMap(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Size, param5: number, param6: org.opencv.core.Mat, param7: org.opencv.core.Mat): void;
				public static cornerSubPix(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: org.opencv.core.Size, param4: org.opencv.core.TermCriteria): void;
				public static arrowedLine(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: org.opencv.core.Point, param3: org.opencv.core.Scalar, param4: number): void;
				public static cornerMinEigenVal(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): void;
				public static createLineSegmentDetector(param0: number, param1: number, param2: number, param3: number): org.opencv.imgproc.LineSegmentDetector;
				public static goodFeaturesToTrack(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfPoint, param2: number, param3: number, param4: number, param5: org.opencv.core.Mat, param6: number, param7: boolean): void;
				public static goodFeaturesToTrack(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfPoint, param2: number, param3: number, param4: number, param5: org.opencv.core.Mat): void;
				public static moments(param0: org.opencv.core.Mat): org.opencv.imgproc.Moments;
				public static getRectSubPix(param0: org.opencv.core.Mat, param1: org.opencv.core.Size, param2: org.opencv.core.Point, param3: org.opencv.core.Mat, param4: number): void;
				public static filter2D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Mat, param4: org.opencv.core.Point): void;
				public static putText(param0: org.opencv.core.Mat, param1: string, param2: org.opencv.core.Point, param3: number, param4: number, param5: org.opencv.core.Scalar, param6: number, param7: number, param8: boolean): void;
				public static connectedComponentsWithStats(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: number): number;
				public static accumulateSquare(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static watershed(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static createLineSegmentDetector(param0: number, param1: number, param2: number): org.opencv.imgproc.LineSegmentDetector;
				public static createLineSegmentDetector(param0: number, param1: number): org.opencv.imgproc.LineSegmentDetector;
				public static pointPolygonTest(param0: org.opencv.core.MatOfPoint2f, param1: org.opencv.core.Point, param2: boolean): number;
				public static filter2D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Mat, param4: org.opencv.core.Point, param5: number): void;
				public static resize(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size): void;
				public static boundingRect(param0: org.opencv.core.MatOfPoint): org.opencv.core.Rect;
				public static integral3(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: number): void;
				public static warpPerspective(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Size): void;
				public static Canny(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number): void;
				public static drawContours(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfPoint>, param2: number, param3: org.opencv.core.Scalar, param4: number): void;
				public static ellipse(param0: org.opencv.core.Mat, param1: org.opencv.core.RotatedRect, param2: org.opencv.core.Scalar, param3: number): void;
				public static polylines(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfPoint>, param2: boolean, param3: org.opencv.core.Scalar, param4: number): void;
				public static blur(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size): void;
				public static drawMarker(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: org.opencv.core.Scalar, param3: number, param4: number, param5: number): void;
				public static ellipse(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: org.opencv.core.Size, param3: number, param4: number, param5: number, param6: org.opencv.core.Scalar, param7: number): void;
				public static blur(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: org.opencv.core.Point, param4: number): void;
				public static getGaussianKernel(param0: number, param1: number, param2: number): org.opencv.core.Mat;
				public static fitEllipseAMS(param0: org.opencv.core.Mat): org.opencv.core.RotatedRect;
				public static arrowedLine(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: org.opencv.core.Point, param3: org.opencv.core.Scalar, param4: number, param5: number, param6: number, param7: number): void;
				public static cornerHarris(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): void;
				public static polylines(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfPoint>, param2: boolean, param3: org.opencv.core.Scalar, param4: number, param5: number): void;
				public static fillConvexPoly(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfPoint, param2: org.opencv.core.Scalar): void;
				public static ellipse(param0: org.opencv.core.Mat, param1: org.opencv.core.RotatedRect, param2: org.opencv.core.Scalar, param3: number, param4: number): void;
				public static pyrMeanShiftFiltering(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: org.opencv.core.TermCriteria): void;
				public static erode(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Point, param4: number, param5: number, param6: org.opencv.core.Scalar): void;
				public static approxPolyDP(param0: org.opencv.core.MatOfPoint2f, param1: org.opencv.core.MatOfPoint2f, param2: number, param3: boolean): void;
				public static convexityDefects(param0: org.opencv.core.MatOfPoint, param1: org.opencv.core.MatOfInt, param2: org.opencv.core.MatOfInt4): void;
				public static ellipse2Poly(param0: org.opencv.core.Point, param1: org.opencv.core.Size, param2: number, param3: number, param4: number, param5: number, param6: org.opencv.core.MatOfPoint): void;
				public static circle(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: number, param3: org.opencv.core.Scalar, param4: number): void;
				public static invertAffineTransform(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static fitEllipseDirect(param0: org.opencv.core.Mat): org.opencv.core.RotatedRect;
				public static floodFill(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Point, param3: org.opencv.core.Scalar, param4: org.opencv.core.Rect, param5: org.opencv.core.Scalar, param6: org.opencv.core.Scalar): number;
				public static arrowedLine(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: org.opencv.core.Point, param3: org.opencv.core.Scalar, param4: number, param5: number): void;
				public static integral2(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number): void;
				public static sqrBoxFilter(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Size, param4: org.opencv.core.Point, param5: boolean, param6: number): void;
				public static drawMarker(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: org.opencv.core.Scalar, param3: number, param4: number, param5: number, param6: number): void;
				public static accumulate(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static calcHist(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.MatOfInt, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.MatOfInt, param5: org.opencv.core.MatOfFloat): void;
				public static convexHull(param0: org.opencv.core.MatOfPoint, param1: org.opencv.core.MatOfInt, param2: boolean): void;
				public static rectangle(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: org.opencv.core.Point, param3: org.opencv.core.Scalar): void;
				public static ellipse(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: org.opencv.core.Size, param3: number, param4: number, param5: number, param6: org.opencv.core.Scalar, param7: number, param8: number): void;
				public static Canny(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public static contourArea(param0: org.opencv.core.Mat): number;
				public static createLineSegmentDetector(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): org.opencv.imgproc.LineSegmentDetector;
				public static boxFilter(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Size, param4: org.opencv.core.Point, param5: boolean, param6: number): void;
				public static drawMarker(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: org.opencv.core.Scalar, param3: number): void;
				public static accumulateSquare(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static createLineSegmentDetector(param0: number, param1: number, param2: number, param3: number, param4: number): org.opencv.imgproc.LineSegmentDetector;
				public static cornerMinEigenVal(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public static dilate(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static Canny(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number, param5: boolean): void;
				public static rotatedRectangleIntersection(param0: org.opencv.core.RotatedRect, param1: org.opencv.core.RotatedRect, param2: org.opencv.core.Mat): number;
				public static initWideAngleProjMap(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: number, param4: number, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: number): number;
				public static goodFeaturesToTrack(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfPoint, param2: number, param3: number, param4: number): void;
				public static getRectSubPix(param0: org.opencv.core.Mat, param1: org.opencv.core.Size, param2: org.opencv.core.Point, param3: org.opencv.core.Mat): void;
				public static createLineSegmentDetector(): org.opencv.imgproc.LineSegmentDetector;
				public static drawContours(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfPoint>, param2: number, param3: org.opencv.core.Scalar, param4: number, param5: number): void;
				public static HoughCircles(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
				public static isContourConvex(param0: org.opencv.core.MatOfPoint): boolean;
				public static Scharr(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number): void;
				public static findContours(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfPoint>, param2: org.opencv.core.Mat, param3: number, param4: number, param5: org.opencv.core.Point): void;
				public static Sobel(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number): void;
				public static getGaussianKernel(param0: number, param1: number): org.opencv.core.Mat;
				public static warpPerspective(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Size, param4: number, param5: number, param6: org.opencv.core.Scalar): void;
				public static boxFilter(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Size, param4: org.opencv.core.Point): void;
				/** @deprecated */
				public static logPolar(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Point, param3: number, param4: number): void;
				public static integral3(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: number, param5: number): void;
				public static undistortPoints(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat): void;
				public static convertMaps(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: number, param5: boolean): void;
				public static cvtColorTwoPlane(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number): void;
				public static arrowedLine(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: org.opencv.core.Point, param3: org.opencv.core.Scalar): void;
				public static applyColorMap(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static findContours(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfPoint>, param2: org.opencv.core.Mat, param3: number, param4: number): void;
				public static convexHull(param0: org.opencv.core.MatOfPoint, param1: org.opencv.core.MatOfInt): void;
				public static fillConvexPoly(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfPoint, param2: org.opencv.core.Scalar, param3: number, param4: number): void;
				public static fillPoly(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfPoint>, param2: org.opencv.core.Scalar, param3: number): void;
				public static pyrUp(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: number): void;
				public static HoughLinesP(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number): void;
				public static sqrBoxFilter(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Size, param4: org.opencv.core.Point): void;
				public static goodFeaturesToTrack(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfPoint, param2: number, param3: number, param4: number, param5: org.opencv.core.Mat, param6: number): void;
				public static convertMaps(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: number): void;
				public static equalizeHist(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static getFontScaleFromHeight(param0: number, param1: number): number;
				public static Scharr(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number): void;
				public static moments(param0: org.opencv.core.Mat, param1: boolean): org.opencv.imgproc.Moments;
				public static integral3(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static dilate(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Point): void;
				public static medianBlur(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static polylines(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfPoint>, param2: boolean, param3: org.opencv.core.Scalar): void;
				public static preCornerDetect(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public static putText(param0: org.opencv.core.Mat, param1: string, param2: org.opencv.core.Point, param3: number, param4: number, param5: org.opencv.core.Scalar, param6: number): void;
				public static getAffineTransform(param0: org.opencv.core.MatOfPoint2f, param1: org.opencv.core.MatOfPoint2f): org.opencv.core.Mat;
				public static accumulateWeighted(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Mat): void;
				public static preCornerDetect(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static drawContours(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfPoint>, param2: number, param3: org.opencv.core.Scalar, param4: number, param5: number, param6: org.opencv.core.Mat): void;
				public static line(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: org.opencv.core.Point, param3: org.opencv.core.Scalar, param4: number, param5: number, param6: number): void;
				public static rectangle(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: org.opencv.core.Point, param3: org.opencv.core.Scalar, param4: number, param5: number): void;
				public static matchTemplate(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number): void;
				public static sepFilter2D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Point): void;
				public static connectedComponents(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): number;
				public static putText(param0: org.opencv.core.Mat, param1: string, param2: org.opencv.core.Point, param3: number, param4: number, param5: org.opencv.core.Scalar, param6: number, param7: number): void;
				public static HoughCircles(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number): void;
				public static warpAffine(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Size, param4: number): void;
				public static contourArea(param0: org.opencv.core.Mat, param1: boolean): number;
				public static cvtColor(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public static getStructuringElement(param0: number, param1: org.opencv.core.Size, param2: org.opencv.core.Point): org.opencv.core.Mat;
				public static initWideAngleProjMap(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: number, param4: number, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat, param7: number, param8: number): number;
				public static HoughCircles(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): void;
				public static distanceTransform(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): void;
				public static spatialGradient(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number): void;
				public static getDerivKernels(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): void;
				public static getRotationMatrix2D(param0: org.opencv.core.Point, param1: number, param2: number): org.opencv.core.Mat;
				public static warpPolar(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: org.opencv.core.Point, param4: number, param5: number): void;
				public static calcBackProject(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.MatOfInt, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.MatOfFloat, param5: number): void;
				public static dilate(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Point, param4: number, param5: number, param6: org.opencv.core.Scalar): void;
				public static morphologyEx(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Mat, param4: org.opencv.core.Point, param5: number, param6: number): void;
				public static minEnclosingTriangle(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): number;
				public static floodFill(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Point, param3: org.opencv.core.Scalar, param4: org.opencv.core.Rect, param5: org.opencv.core.Scalar, param6: org.opencv.core.Scalar, param7: number): number;
				public static calcHist(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.MatOfInt, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.MatOfInt, param5: org.opencv.core.MatOfFloat, param6: boolean): void;
				public static fillPoly(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfPoint>, param2: org.opencv.core.Scalar, param3: number, param4: number): void;
				public static undistortPoints(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static HoughLines(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number): void;
				public static fillPoly(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfPoint>, param2: org.opencv.core.Scalar, param3: number, param4: number, param5: org.opencv.core.Point): void;
				public static arrowedLine(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: org.opencv.core.Point, param3: org.opencv.core.Scalar, param4: number, param5: number, param6: number): void;
				public static createLineSegmentDetector(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): org.opencv.imgproc.LineSegmentDetector;
				public static ellipse(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: org.opencv.core.Size, param3: number, param4: number, param5: number, param6: org.opencv.core.Scalar): void;
				public static pyrDown(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: number): void;
				public static getGaborKernel(param0: org.opencv.core.Size, param1: number, param2: number, param3: number, param4: number): org.opencv.core.Mat;
				public static getDefaultNewCameraMatrix(param0: org.opencv.core.Mat, param1: org.opencv.core.Size): org.opencv.core.Mat;
				public static phaseCorrelate(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): org.opencv.core.Point;
				public static HoughLinesP(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): void;
				public static Sobel(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): void;
				public static floodFill(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Point, param3: org.opencv.core.Scalar, param4: org.opencv.core.Rect, param5: org.opencv.core.Scalar): number;
				public static morphologyEx(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Mat, param4: org.opencv.core.Point, param5: number, param6: number, param7: org.opencv.core.Scalar): void;
				public static Canny(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): void;
				public static sepFilter2D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Point, param6: number, param7: number): void;
				public static connectedComponentsWithStats(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: number, param5: number): number;
				public static line(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: org.opencv.core.Point, param3: org.opencv.core.Scalar): void;
				public static warpAffine(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Size): void;
				public static remap(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: number, param5: number): void;
				public static fillPoly(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfPoint>, param2: org.opencv.core.Scalar): void;
				public static EMD(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Mat): number;
				public static erode(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static distanceTransform(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public static erode(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Point): void;
				public static threshold(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): number;
				public static warpPerspective(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Size, param4: number, param5: number): void;
				public static drawContours(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfPoint>, param2: number, param3: org.opencv.core.Scalar): void;
				public static erode(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Point, param4: number): void;
				public static HoughCircles(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number): void;
				public static accumulate(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static blur(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: org.opencv.core.Point): void;
				public static boxPoints(param0: org.opencv.core.RotatedRect, param1: org.opencv.core.Mat): void;
				public static matchShapes(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number): number;
				public static drawContours(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfPoint>, param2: number, param3: org.opencv.core.Scalar, param4: number, param5: number, param6: org.opencv.core.Mat, param7: number): void;
				public static fitLine(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number): void;
				public static boxFilter(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Size): void;
				public static createCLAHE(param0: number): org.opencv.imgproc.CLAHE;
				public static connectedComponents(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): number;
				public static filter2D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Mat, param4: org.opencv.core.Point, param5: number, param6: number): void;
				public static bilateralFilter(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): void;
				public static initWideAngleProjMap(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: number, param4: number, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat): number;
				public static minEnclosingCircle(param0: org.opencv.core.MatOfPoint2f, param1: org.opencv.core.Point, param2: number[]): void;
				public static pyrDown(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size): void;
				public static Laplacian(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number): void;
				public static fillConvexPoly(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfPoint, param2: org.opencv.core.Scalar, param3: number): void;
				public static pyrDown(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static getDefaultNewCameraMatrix(param0: org.opencv.core.Mat): org.opencv.core.Mat;
				public static warpPerspective(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Size, param4: number): void;
				public static spatialGradient(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number): void;
				public static connectedComponentsWithAlgorithm(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): number;
				public static HoughLines(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
				public static GaussianBlur(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: number, param4: number, param5: number): void;
				public static dilate(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Point, param4: number): void;
				public static resize(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: number, param4: number): void;
				public static cvtColor(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static cornerMinEigenVal(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static circle(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: number, param3: org.opencv.core.Scalar): void;
				public static pyrMeanShiftFiltering(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): void;
				public static rectangle(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: org.opencv.core.Point, param3: org.opencv.core.Scalar, param4: number): void;
				public static getFontScaleFromHeight(param0: number, param1: number, param2: number): number;
				public static grabCut(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Rect, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: number): void;
				public static putText(param0: org.opencv.core.Mat, param1: string, param2: org.opencv.core.Point, param3: number, param4: number, param5: org.opencv.core.Scalar): void;
				public static HoughCircles(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
				public static cornerEigenValsAndVecs(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): void;
				public static EMD(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat): number;
				public static demosaicing(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static createCLAHE(): org.opencv.imgproc.CLAHE;
				public static cornerEigenValsAndVecs(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public static erode(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Point, param4: number, param5: number): void;
				public static intersectConvexConvex(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): number;
				public static createCLAHE(param0: number, param1: org.opencv.core.Size): org.opencv.imgproc.CLAHE;
				public static GaussianBlur(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: number): void;
				public static morphologyEx(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Mat, param4: org.opencv.core.Point, param5: number): void;
				public static arcLength(param0: org.opencv.core.MatOfPoint2f, param1: boolean): number;
				public static createLineSegmentDetector(param0: number): org.opencv.imgproc.LineSegmentDetector;
				public static connectedComponentsWithStatsWithAlgorithm(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: number, param5: number, param6: number): number;
				public static createLineSegmentDetector(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.opencv.imgproc.LineSegmentDetector;
				/** @deprecated */
				public static linearPolar(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Point, param3: number, param4: number): void;
				public static sqrBoxFilter(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Size): void;
				public static morphologyEx(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Mat, param4: org.opencv.core.Point): void;
				public static phaseCorrelate(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): org.opencv.core.Point;
				public static EMD(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): number;
				public static pyrUp(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size): void;
				public constructor();
				public static getDerivKernels(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: boolean, param6: number): void;
				public static goodFeaturesToTrack(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfPoint, param2: number, param3: number, param4: number, param5: org.opencv.core.Mat, param6: number, param7: boolean, param8: number): void;
				public static Laplacian(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public static HoughLines(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): void;
				public static cornerHarris(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number): void;
				public static Canny(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: boolean): void;
				public static HoughLines(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
				public static clipLine(param0: org.opencv.core.Rect, param1: org.opencv.core.Point, param2: org.opencv.core.Point): boolean;
				public static floodFill(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Point, param3: org.opencv.core.Scalar): number;
				public static adaptiveThreshold(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number): void;
				public static pyrUp(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static Sobel(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
				public static sepFilter2D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Point, param6: number): void;
				public static spatialGradient(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static undistort(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static bilateralFilter(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number): void;
				public static compareHist(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): number;
				public static undistort(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat): void;
				public static boxFilter(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Size, param4: org.opencv.core.Point, param5: boolean): void;
				public static matchTemplate(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: org.opencv.core.Mat): void;
				public static goodFeaturesToTrack(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfPoint, param2: number, param3: number, param4: number, param5: org.opencv.core.Mat, param6: number, param7: number, param8: boolean): void;
				public static undistortPoints(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat): void;
				public static getDefaultNewCameraMatrix(param0: org.opencv.core.Mat, param1: org.opencv.core.Size, param2: boolean): org.opencv.core.Mat;
				public static remap(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: number): void;
				public static line(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: org.opencv.core.Point, param3: org.opencv.core.Scalar, param4: number, param5: number): void;
				public static integral2(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static Sobel(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
				public static dilate(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Point, param4: number, param5: number): void;
				public static integral(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static integral2(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number): void;
				public static Laplacian(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): void;
				public static sepFilter2D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat): void;
				public static accumulateWeighted(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static drawContours(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfPoint>, param2: number, param3: org.opencv.core.Scalar, param4: number, param5: number, param6: org.opencv.core.Mat, param7: number, param8: org.opencv.core.Point): void;
				public static rectangle(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: org.opencv.core.Point, param3: org.opencv.core.Scalar, param4: number, param5: number, param6: number): void;
				public static pyrMeanShiftFiltering(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public static getDerivKernels(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: boolean): void;
				public static resize(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: number): void;
				public static Sobel(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number): void;
				public static warpAffine(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Size, param4: number, param5: number, param6: org.opencv.core.Scalar): void;
				public static undistortPointsIter(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.TermCriteria): void;
				public static line(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: org.opencv.core.Point, param3: org.opencv.core.Scalar, param4: number): void;
				public static resize(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Size, param3: number, param4: number, param5: number): void;
				public static filter2D(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: org.opencv.core.Mat): void;
				public static Laplacian(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number): void;
				public static getPerspectiveTransform(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): org.opencv.core.Mat;
				public static HuMoments(param0: org.opencv.imgproc.Moments, param1: org.opencv.core.Mat): void;
				public static getStructuringElement(param0: number, param1: org.opencv.core.Size): org.opencv.core.Mat;
				public static getTextSize(param0: string, param1: number, param2: number, param3: number, param4: number[]): org.opencv.core.Size;
				public static getGaborKernel(param0: org.opencv.core.Size, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): org.opencv.core.Mat;
				public static drawMarker(param0: org.opencv.core.Mat, param1: org.opencv.core.Point, param2: org.opencv.core.Scalar, param3: number, param4: number): void;
				public static fitEllipse(param0: org.opencv.core.MatOfPoint2f): org.opencv.core.RotatedRect;
				public static Laplacian(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static remap(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: number, param5: number, param6: org.opencv.core.Scalar): void;
				public static demosaicing(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public static phaseCorrelate(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number[]): org.opencv.core.Point;
				public static HoughLinesP(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number): void;
				public static accumulateProduct(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static distanceTransformWithLabels(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number): void;
				public static warpAffine(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Size, param4: number, param5: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module imgproc {
			export class LineSegmentDetector extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.imgproc.LineSegmentDetector>;
				public compareSegments(param0: org.opencv.core.Size, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): number;
				public detect(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat): void;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public detect(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public drawSegments(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public compareSegments(param0: org.opencv.core.Size, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): number;
				public finalize(): void;
				public constructor(param0: number);
				public detect(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static __fromPtr__(param0: number): org.opencv.imgproc.LineSegmentDetector;
				public detect(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
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
				public set_nu02(param0: number): void;
				public get_mu30(): number;
				public get_mu20(): number;
				public set_mu11(param0: number): void;
				public set_m03(param0: number): void;
				public constructor();
				public set_m20(param0: number): void;
				public get_m21(): number;
				public get_nu03(): number;
				public get_m01(): number;
				public get_m11(): number;
				public set_m11(param0: number): void;
				public get_m20(): number;
				public set_mu02(param0: number): void;
				public set_nu20(param0: number): void;
				public get_nu20(): number;
				public get_m10(): number;
				public get_mu02(): number;
				public get_m00(): number;
				public set_m00(param0: number): void;
				public get_mu12(): number;
				public toString(): string;
				public set_mu12(param0: number): void;
				public get_nu30(): number;
				public set_mu20(param0: number): void;
				public get_nu21(): number;
				public get_nu11(): number;
				public get_mu03(): number;
				public set_m12(param0: number): void;
				public get_m12(): number;
				public get_nu02(): number;
				public set_mu30(param0: number): void;
				public set_nu21(param0: number): void;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number);
				public get_m02(): number;
				public get_nu12(): number;
				public set_m01(param0: number): void;
				public constructor(param0: number[]);
				public set_m30(param0: number): void;
				public set_nu12(param0: number): void;
				public get_mu11(): number;
				public set_mu21(param0: number): void;
				public get_mu21(): number;
				public get_m30(): number;
				public set_m02(param0: number): void;
				public completeState(): void;
				public set_nu03(param0: number): void;
				public set_m21(param0: number): void;
				public get_m03(): number;
				public set_nu30(param0: number): void;
				public set_m10(param0: number): void;
				public set(param0: number[]): void;
				public set_nu11(param0: number): void;
				public set_mu03(param0: number): void;
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
				public getEdgeList(param0: org.opencv.core.MatOfFloat4): void;
				public getVertex(param0: number, param1: number[]): org.opencv.core.Point;
				public rotateEdge(param0: number, param1: number): number;
				public getLeadingEdgeList(param0: org.opencv.core.MatOfInt): void;
				public insert(param0: org.opencv.core.Point): number;
				public edgeDst(param0: number, param1: org.opencv.core.Point): number;
				public nextEdge(param0: number): number;
				public finalize(): void;
				public static __fromPtr__(param0: number): org.opencv.imgproc.Subdiv2D;
				public getTriangleList(param0: org.opencv.core.MatOfFloat6): void;
				public insert(param0: org.opencv.core.MatOfPoint2f): void;
				public constructor();
				public edgeOrg(param0: number): number;
				public locate(param0: org.opencv.core.Point, param1: number[], param2: number[]): number;
				public getVertex(param0: number): org.opencv.core.Point;
				public findNearest(param0: org.opencv.core.Point): number;
				public getEdge(param0: number, param1: number): number;
				public getNativeObjAddr(): number;
				public getVoronoiFacetList(param0: org.opencv.core.MatOfInt, param1: java.util.List<org.opencv.core.MatOfPoint2f>, param2: org.opencv.core.MatOfPoint2f): void;
				public symEdge(param0: number): number;
				public constructor(param0: org.opencv.core.Rect);
				public initDelaunay(param0: org.opencv.core.Rect): void;
				public edgeDst(param0: number): number;
				public constructor(param0: number);
				public edgeOrg(param0: number, param1: org.opencv.core.Point): number;
				public findNearest(param0: org.opencv.core.Point, param1: org.opencv.core.Point): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module ml {
			export class ANN_MLP extends org.opencv.ml.StatModel {
				public static class: java.lang.Class<org.opencv.ml.ANN_MLP>;
				public static BACKPROP: number;
				public static RPROP: number;
				public static ANNEAL: number;
				public static IDENTITY: number;
				public static SIGMOID_SYM: number;
				public static GAUSSIAN: number;
				public static RELU: number;
				public static LEAKYRELU: number;
				public static UPDATE_WEIGHTS: number;
				public static NO_INPUT_SCALE: number;
				public static NO_OUTPUT_SCALE: number;
				public getAnnealFinalT(): number;
				public finalize(): void;
				public getRpropDWMin(): number;
				public setBackpropWeightScale(param0: number): void;
				public setTrainMethod(param0: number, param1: number): void;
				public getBackpropMomentumScale(): number;
				public getRpropDWMax(): number;
				public setActivationFunction(param0: number, param1: number): void;
				public setTrainMethod(param0: number, param1: number, param2: number): void;
				public setAnnealFinalT(param0: number): void;
				public static create(): org.opencv.ml.ANN_MLP;
				public setRpropDW0(param0: number): void;
				public setRpropDWPlus(param0: number): void;
				public setTermCriteria(param0: org.opencv.core.TermCriteria): void;
				public getAnnealInitialT(): number;
				public setAnnealItePerStep(param0: number): void;
				public getWeights(param0: number): org.opencv.core.Mat;
				public getRpropDW0(): number;
				public getRpropDWMinus(): number;
				public static __fromPtr__(param0: number): org.opencv.ml.StatModel;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public getAnnealCoolingRatio(): number;
				public getTrainMethod(): number;
				public getRpropDWPlus(): number;
				public setLayerSizes(param0: org.opencv.core.Mat): void;
				public setActivationFunction(param0: number, param1: number, param2: number): void;
				public setActivationFunction(param0: number): void;
				public setBackpropMomentumScale(param0: number): void;
				public setTrainMethod(param0: number): void;
				public setAnnealInitialT(param0: number): void;
				public getAnnealItePerStep(): number;
				public static __fromPtr__(param0: number): org.opencv.ml.ANN_MLP;
				public getBackpropWeightScale(): number;
				public getLayerSizes(): org.opencv.core.Mat;
				public setRpropDWMin(param0: number): void;
				public constructor(param0: number);
				public setAnnealCoolingRatio(param0: number): void;
				public setRpropDWMinus(param0: number): void;
				public getTermCriteria(): org.opencv.core.TermCriteria;
				public setRpropDWMax(param0: number): void;
				public static load(param0: string): org.opencv.ml.ANN_MLP;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module ml {
			export class ANN_MLP_ANNEAL extends org.opencv.ml.ANN_MLP {
				public static class: java.lang.Class<org.opencv.ml.ANN_MLP_ANNEAL>;
				public getAnnealInitialT(): number;
				public setAnnealItePerStep(param0: number): void;
				public getAnnealFinalT(): number;
				public static __fromPtr__(param0: number): org.opencv.ml.StatModel;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public static __fromPtr__(param0: number): org.opencv.ml.ANN_MLP_ANNEAL;
				public getAnnealCoolingRatio(): number;
				public finalize(): void;
				public setAnnealInitialT(param0: number): void;
				public getAnnealItePerStep(): number;
				public static __fromPtr__(param0: number): org.opencv.ml.ANN_MLP;
				public setAnnealFinalT(param0: number): void;
				public constructor(param0: number);
				public setAnnealCoolingRatio(param0: number): void;
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
				public static __fromPtr__(param0: number): org.opencv.ml.Boost;
				public static __fromPtr__(param0: number): org.opencv.ml.DTrees;
				public static __fromPtr__(param0: number): org.opencv.ml.StatModel;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public getBoostType(): number;
				public finalize(): void;
				public static load(param0: string): org.opencv.ml.DTrees;
				public static create(): org.opencv.ml.Boost;
				public static load(param0: string, param1: string): org.opencv.ml.Boost;
				public getWeightTrimRate(): number;
				public setBoostType(param0: number): void;
				public getWeakCount(): number;
				public static load(param0: string): org.opencv.ml.Boost;
				public setWeightTrimRate(param0: number): void;
				public constructor(param0: number);
				public static load(param0: string, param1: string): org.opencv.ml.DTrees;
				public static create(): org.opencv.ml.DTrees;
				public setWeakCount(param0: number): void;
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
				public setMaxDepth(param0: number): void;
				public finalize(): void;
				public getMaxCategories(): number;
				public getMaxDepth(): number;
				public setTruncatePrunedTree(param0: boolean): void;
				public setRegressionAccuracy(param0: number): void;
				public setUseSurrogates(param0: boolean): void;
				public setMaxCategories(param0: number): void;
				public getTruncatePrunedTree(): boolean;
				public getCVFolds(): number;
				public getRegressionAccuracy(): number;
				public static create(): org.opencv.ml.DTrees;
				public setCVFolds(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.ml.DTrees;
				public static __fromPtr__(param0: number): org.opencv.ml.StatModel;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public setPriors(param0: org.opencv.core.Mat): void;
				public setUse1SERule(param0: boolean): void;
				public getUseSurrogates(): boolean;
				public static load(param0: string): org.opencv.ml.DTrees;
				public getMinSampleCount(): number;
				public constructor(param0: number);
				public static load(param0: string, param1: string): org.opencv.ml.DTrees;
				public setMinSampleCount(param0: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module ml {
			export class EM extends org.opencv.ml.StatModel {
				public static class: java.lang.Class<org.opencv.ml.EM>;
				public static COV_MAT_SPHERICAL: number;
				public static COV_MAT_DIAGONAL: number;
				public static COV_MAT_GENERIC: number;
				public static COV_MAT_DEFAULT: number;
				public static DEFAULT_NCLUSTERS: number;
				public static DEFAULT_MAX_ITERS: number;
				public static START_E_STEP: number;
				public static START_M_STEP: number;
				public static START_AUTO_STEP: number;
				public trainE(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat): boolean;
				public getCovarianceMatrixType(): number;
				public getWeights(): org.opencv.core.Mat;
				public trainM(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): boolean;
				public trainEM(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): boolean;
				public finalize(): void;
				public trainEM(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): boolean;
				public static load(param0: string, param1: string): org.opencv.ml.EM;
				public trainE(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): boolean;
				public getCovs(param0: java.util.List<org.opencv.core.Mat>): void;
				public setClustersNumber(param0: number): void;
				public predict(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): number;
				public trainM(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): boolean;
				public static create(): org.opencv.ml.EM;
				public trainM(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat): boolean;
				public setTermCriteria(param0: org.opencv.core.TermCriteria): void;
				public static __fromPtr__(param0: number): org.opencv.ml.StatModel;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public trainE(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): boolean;
				public trainE(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): boolean;
				public trainEM(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): boolean;
				public trainM(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): boolean;
				public static __fromPtr__(param0: number): org.opencv.ml.EM;
				public predict2(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): number[];
				public predict(param0: org.opencv.core.Mat): number;
				public getMeans(): org.opencv.core.Mat;
				public predict(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): number;
				public static load(param0: string): org.opencv.ml.EM;
				public trainEM(param0: org.opencv.core.Mat): boolean;
				public trainE(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat): boolean;
				public constructor(param0: number);
				public getTermCriteria(): org.opencv.core.TermCriteria;
				public setCovarianceMatrixType(param0: number): void;
				public trainE(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat): boolean;
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
				public findNearest(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): number;
				public static __fromPtr__(param0: number): org.opencv.ml.StatModel;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public setDefaultK(param0: number): void;
				public getDefaultK(): number;
				public setIsClassifier(param0: boolean): void;
				public findNearest(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat): number;
				public finalize(): void;
				public getAlgorithmType(): number;
				public setEmax(param0: number): void;
				public getIsClassifier(): boolean;
				public getEmax(): number;
				public static create(): org.opencv.ml.KNearest;
				public constructor(param0: number);
				public findNearest(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat): number;
				public setAlgorithmType(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.ml.KNearest;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module ml {
			export class LogisticRegression extends org.opencv.ml.StatModel {
				public static class: java.lang.Class<org.opencv.ml.LogisticRegression>;
				public static REG_DISABLE: number;
				public static REG_L1: number;
				public static REG_L2: number;
				public static BATCH: number;
				public static MINI_BATCH: number;
				public static __fromPtr__(param0: number): org.opencv.ml.LogisticRegression;
				public static __fromPtr__(param0: number): org.opencv.ml.StatModel;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public getRegularization(): number;
				public get_learnt_thetas(): org.opencv.core.Mat;
				public setIterations(param0: number): void;
				public getTrainMethod(): number;
				public static load(param0: string): org.opencv.ml.LogisticRegression;
				public finalize(): void;
				public predict(param0: org.opencv.core.Mat): number;
				public setLearningRate(param0: number): void;
				public setTrainMethod(param0: number): void;
				public getMiniBatchSize(): number;
				public predict(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): number;
				public predict(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): number;
				public getLearningRate(): number;
				public setMiniBatchSize(param0: number): void;
				public constructor(param0: number);
				public setRegularization(param0: number): void;
				public static create(): org.opencv.ml.LogisticRegression;
				public static load(param0: string, param1: string): org.opencv.ml.LogisticRegression;
				public getTermCriteria(): org.opencv.core.TermCriteria;
				public getIterations(): number;
				public setTermCriteria(param0: org.opencv.core.TermCriteria): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module ml {
			export class Ml extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.ml.Ml>;
				public static VAR_NUMERICAL: number;
				public static VAR_ORDERED: number;
				public static VAR_CATEGORICAL: number;
				public static TEST_ERROR: number;
				public static TRAIN_ERROR: number;
				public static ROW_SAMPLE: number;
				public static COL_SAMPLE: number;
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
				public static create(): org.opencv.ml.NormalBayesClassifier;
				public static __fromPtr__(param0: number): org.opencv.ml.StatModel;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public static load(param0: string, param1: string): org.opencv.ml.NormalBayesClassifier;
				public finalize(): void;
				public constructor(param0: number);
				public static load(param0: string): org.opencv.ml.NormalBayesClassifier;
				public static __fromPtr__(param0: number): org.opencv.ml.NormalBayesClassifier;
				public predictProb(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number): number;
				public predictProb(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): number;
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
				public static create(param0: number, param1: number): org.opencv.ml.ParamGrid;
				public static create(): org.opencv.ml.ParamGrid;
				public get_maxVal(): number;
				public static __fromPtr__(param0: number): org.opencv.ml.ParamGrid;
				public set_minVal(param0: number): void;
				public finalize(): void;
				public getNativeObjAddr(): number;
				public static create(param0: number): org.opencv.ml.ParamGrid;
				public set_maxVal(param0: number): void;
				public static create(param0: number, param1: number, param2: number): org.opencv.ml.ParamGrid;
				public get_logStep(): number;
				public set_logStep(param0: number): void;
				public get_minVal(): number;
				public constructor(param0: number);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module ml {
			export class RTrees extends org.opencv.ml.DTrees {
				public static class: java.lang.Class<org.opencv.ml.RTrees>;
				public static load(param0: string, param1: string): org.opencv.ml.RTrees;
				public static __fromPtr__(param0: number): org.opencv.ml.DTrees;
				public static create(): org.opencv.ml.RTrees;
				public static __fromPtr__(param0: number): org.opencv.ml.StatModel;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public getActiveVarCount(): number;
				public setCalculateVarImportance(param0: boolean): void;
				public finalize(): void;
				public static load(param0: string): org.opencv.ml.DTrees;
				public static __fromPtr__(param0: number): org.opencv.ml.RTrees;
				public getCalculateVarImportance(): boolean;
				public getVotes(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static load(param0: string): org.opencv.ml.RTrees;
				public getVarImportance(): org.opencv.core.Mat;
				public setActiveVarCount(param0: number): void;
				public constructor(param0: number);
				public static load(param0: string, param1: string): org.opencv.ml.DTrees;
				public getTermCriteria(): org.opencv.core.TermCriteria;
				public static create(): org.opencv.ml.DTrees;
				public setTermCriteria(param0: org.opencv.core.TermCriteria): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module ml {
			export class SVM extends org.opencv.ml.StatModel {
				public static class: java.lang.Class<org.opencv.ml.SVM>;
				public static C_SVC: number;
				public static NU_SVC: number;
				public static ONE_CLASS: number;
				public static EPS_SVR: number;
				public static NU_SVR: number;
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
				public setNu(param0: number): void;
				public setClassWeights(param0: org.opencv.core.Mat): void;
				public getType(): number;
				public finalize(): void;
				public trainAuto(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat): boolean;
				public trainAuto(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat, param3: number, param4: org.opencv.ml.ParamGrid, param5: org.opencv.ml.ParamGrid, param6: org.opencv.ml.ParamGrid, param7: org.opencv.ml.ParamGrid): boolean;
				public getClassWeights(): org.opencv.core.Mat;
				public trainAuto(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat, param3: number): boolean;
				public setCoef0(param0: number): void;
				public trainAuto(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat, param3: number, param4: org.opencv.ml.ParamGrid, param5: org.opencv.ml.ParamGrid, param6: org.opencv.ml.ParamGrid): boolean;
				public static getDefaultGridPtr(param0: number): org.opencv.ml.ParamGrid;
				public getGamma(): number;
				public trainAuto(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat, param3: number, param4: org.opencv.ml.ParamGrid, param5: org.opencv.ml.ParamGrid, param6: org.opencv.ml.ParamGrid, param7: org.opencv.ml.ParamGrid, param8: org.opencv.ml.ParamGrid): boolean;
				public setTermCriteria(param0: org.opencv.core.TermCriteria): void;
				public getKernelType(): number;
				public setType(param0: number): void;
				public trainAuto(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat, param3: number, param4: org.opencv.ml.ParamGrid, param5: org.opencv.ml.ParamGrid, param6: org.opencv.ml.ParamGrid, param7: org.opencv.ml.ParamGrid, param8: org.opencv.ml.ParamGrid, param9: org.opencv.ml.ParamGrid, param10: boolean): boolean;
				public static __fromPtr__(param0: number): org.opencv.ml.StatModel;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public setC(param0: number): void;
				public getUncompressedSupportVectors(): org.opencv.core.Mat;
				public static create(): org.opencv.ml.SVM;
				public getCoef0(): number;
				public getDecisionFunction(param0: number, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): number;
				public trainAuto(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat, param3: number, param4: org.opencv.ml.ParamGrid): boolean;
				public getP(): number;
				public static __fromPtr__(param0: number): org.opencv.ml.SVM;
				public setGamma(param0: number): void;
				public getSupportVectors(): org.opencv.core.Mat;
				public trainAuto(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat, param3: number, param4: org.opencv.ml.ParamGrid, param5: org.opencv.ml.ParamGrid, param6: org.opencv.ml.ParamGrid, param7: org.opencv.ml.ParamGrid, param8: org.opencv.ml.ParamGrid, param9: org.opencv.ml.ParamGrid): boolean;
				public getNu(): number;
				public setKernel(param0: number): void;
				public getC(): number;
				public setDegree(param0: number): void;
				public static load(param0: string): org.opencv.ml.SVM;
				public constructor(param0: number);
				public getTermCriteria(): org.opencv.core.TermCriteria;
				public trainAuto(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat, param3: number, param4: org.opencv.ml.ParamGrid, param5: org.opencv.ml.ParamGrid): boolean;
				public getDegree(): number;
				public setP(param0: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module ml {
			export class SVMSGD extends org.opencv.ml.StatModel {
				public static class: java.lang.Class<org.opencv.ml.SVMSGD>;
				public static SGD: number;
				public static ASGD: number;
				public static SOFT_MARGIN: number;
				public static HARD_MARGIN: number;
				public static create(): org.opencv.ml.SVMSGD;
				public getMarginRegularization(): number;
				public getWeights(): org.opencv.core.Mat;
				public finalize(): void;
				public getSvmsgdType(): number;
				public getStepDecreasingPower(): number;
				public setOptimalParameters(param0: number): void;
				public setOptimalParameters(): void;
				public setStepDecreasingPower(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.ml.SVMSGD;
				public setOptimalParameters(param0: number, param1: number): void;
				public getShift(): number;
				public setMarginType(param0: number): void;
				public setTermCriteria(param0: org.opencv.core.TermCriteria): void;
				public static load(param0: string, param1: string): org.opencv.ml.SVMSGD;
				public setInitialStepSize(param0: number): void;
				public setSvmsgdType(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.ml.StatModel;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public getMarginType(): number;
				public static load(param0: string): org.opencv.ml.SVMSGD;
				public setMarginRegularization(param0: number): void;
				public getInitialStepSize(): number;
				public constructor(param0: number);
				public getTermCriteria(): org.opencv.core.TermCriteria;
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
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public static __fromPtr__(param0: number): org.opencv.ml.StatModel;
				public isClassifier(): boolean;
				public calcError(param0: org.opencv.ml.TrainData, param1: boolean, param2: org.opencv.core.Mat): number;
				public finalize(): void;
				public train(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat): boolean;
				public predict(param0: org.opencv.core.Mat): number;
				public predict(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): number;
				public predict(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): number;
				public train(param0: org.opencv.ml.TrainData): boolean;
				public constructor(param0: number);
				public isTrained(): boolean;
				public getVarCount(): number;
				public train(param0: org.opencv.ml.TrainData, param1: number): boolean;
				public empty(): boolean;
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
				public getCatOfs(): org.opencv.core.Mat;
				public static create(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat): org.opencv.ml.TrainData;
				public getNTrainSamples(): number;
				public setTrainTestSplit(param0: number, param1: boolean): void;
				public getCatCount(param0: number): number;
				public setTrainTestSplitRatio(param0: number): void;
				public getLayout(): number;
				public static getSubVector(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): org.opencv.core.Mat;
				public getTrainSamples(param0: number): org.opencv.core.Mat;
				public getClassLabels(): org.opencv.core.Mat;
				public getResponseType(): number;
				public getDefaultSubstValues(): org.opencv.core.Mat;
				public getSamples(): org.opencv.core.Mat;
				public static create(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): org.opencv.ml.TrainData;
				public getTrainSampleIdx(): org.opencv.core.Mat;
				public getSample(param0: org.opencv.core.Mat, param1: number, param2: number): void;
				public getTrainSamples(param0: number, param1: boolean, param2: boolean): org.opencv.core.Mat;
				public getNVars(): number;
				public setTrainTestSplit(param0: number): void;
				public getTrainSampleWeights(): org.opencv.core.Mat;
				public getNAllVars(): number;
				public getNTestSamples(): number;
				public getNSamples(): number;
				public getTestSampleIdx(): org.opencv.core.Mat;
				public getVarSymbolFlags(): org.opencv.core.Mat;
				public getTestNormCatResponses(): org.opencv.core.Mat;
				public getNames(param0: java.util.List<string>): void;
				public getTrainSamples(param0: number, param1: boolean): org.opencv.core.Mat;
				public getCatMap(): org.opencv.core.Mat;
				public getTrainSamples(): org.opencv.core.Mat;
				public getNormCatResponses(): org.opencv.core.Mat;
				public getResponses(): org.opencv.core.Mat;
				public getVarType(): org.opencv.core.Mat;
				public static create(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat): org.opencv.ml.TrainData;
				public getTestSampleWeights(): org.opencv.core.Mat;
				public static create(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat, param6: org.opencv.core.Mat): org.opencv.ml.TrainData;
				public finalize(): void;
				public getSampleWeights(): org.opencv.core.Mat;
				public getMissing(): org.opencv.core.Mat;
				public getValues(param0: number, param1: org.opencv.core.Mat, param2: number): void;
				public getVarIdx(): org.opencv.core.Mat;
				public static getSubMatrix(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): org.opencv.core.Mat;
				public getTestResponses(): org.opencv.core.Mat;
				public getTrainResponses(): org.opencv.core.Mat;
				public static create(param0: org.opencv.core.Mat, param1: number, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat): org.opencv.ml.TrainData;
				public getNativeObjAddr(): number;
				public getTrainNormCatResponses(): org.opencv.core.Mat;
				public static __fromPtr__(param0: number): org.opencv.ml.TrainData;
				public constructor(param0: number);
				public setTrainTestSplitRatio(param0: number, param1: boolean): void;
				public shuffleTrainTest(): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module objdetect {
			export class BaseCascadeClassifier extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.objdetect.BaseCascadeClassifier>;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public static __fromPtr__(param0: number): org.opencv.objdetect.BaseCascadeClassifier;
				public finalize(): void;
				public constructor(param0: number);
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
				public detectMultiScale(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: number, param3: number, param4: number, param5: org.opencv.core.Size, param6: org.opencv.core.Size): void;
				public detectMultiScale2(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: org.opencv.core.MatOfInt, param3: number, param4: number): void;
				public finalize(): void;
				public detectMultiScale(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: number, param3: number, param4: number, param5: org.opencv.core.Size): void;
				public detectMultiScale(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: number, param3: number, param4: number): void;
				public constructor(param0: string);
				public constructor();
				public detectMultiScale3(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: org.opencv.core.MatOfInt, param3: org.opencv.core.MatOfDouble, param4: number, param5: number): void;
				public detectMultiScale3(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: org.opencv.core.MatOfInt, param3: org.opencv.core.MatOfDouble, param4: number, param5: number, param6: number, param7: org.opencv.core.Size, param8: org.opencv.core.Size): void;
				public load(param0: string): boolean;
				public detectMultiScale(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: number, param3: number): void;
				public detectMultiScale2(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: org.opencv.core.MatOfInt, param3: number, param4: number, param5: number): void;
				public empty(): boolean;
				public detectMultiScale2(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: org.opencv.core.MatOfInt): void;
				public detectMultiScale3(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: org.opencv.core.MatOfInt, param3: org.opencv.core.MatOfDouble, param4: number, param5: number, param6: number): void;
				public detectMultiScale3(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: org.opencv.core.MatOfInt, param3: org.opencv.core.MatOfDouble, param4: number, param5: number, param6: number, param7: org.opencv.core.Size, param8: org.opencv.core.Size, param9: boolean): void;
				public detectMultiScale2(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: org.opencv.core.MatOfInt, param3: number, param4: number, param5: number, param6: org.opencv.core.Size, param7: org.opencv.core.Size): void;
				public detectMultiScale3(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: org.opencv.core.MatOfInt, param3: org.opencv.core.MatOfDouble, param4: number): void;
				public getNativeObjAddr(): number;
				public static convert(param0: string, param1: string): boolean;
				public detectMultiScale(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: number): void;
				public getFeatureType(): number;
				public detectMultiScale3(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: org.opencv.core.MatOfInt, param3: org.opencv.core.MatOfDouble): void;
				public static __fromPtr__(param0: number): org.opencv.objdetect.CascadeClassifier;
				public detectMultiScale3(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: org.opencv.core.MatOfInt, param3: org.opencv.core.MatOfDouble, param4: number, param5: number, param6: number, param7: org.opencv.core.Size): void;
				public isOldFormatCascade(): boolean;
				public constructor(param0: number);
				public detectMultiScale(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect): void;
				public getOriginalWindowSize(): org.opencv.core.Size;
				public detectMultiScale2(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: org.opencv.core.MatOfInt, param3: number): void;
				public detectMultiScale2(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: org.opencv.core.MatOfInt, param3: number, param4: number, param5: number, param6: org.opencv.core.Size): void;
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
				public static L2Hys: number;
				public static DEFAULT_NLEVELS: number;
				public compute(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfFloat): void;
				public detectMultiScale(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: org.opencv.core.MatOfDouble, param3: number, param4: org.opencv.core.Size, param5: org.opencv.core.Size, param6: number, param7: number): void;
				public get_svmDetector(): org.opencv.core.MatOfFloat;
				public detect(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfPoint, param2: org.opencv.core.MatOfDouble, param3: number): void;
				public constructor();
				public computeGradient(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Size, param4: org.opencv.core.Size): void;
				public detectMultiScale(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: org.opencv.core.MatOfDouble, param3: number, param4: org.opencv.core.Size, param5: org.opencv.core.Size, param6: number, param7: number, param8: boolean): void;
				public setSVMDetector(param0: org.opencv.core.Mat): void;
				public get_signedGradient(): boolean;
				public computeGradient(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public constructor(param0: org.opencv.core.Size, param1: org.opencv.core.Size, param2: org.opencv.core.Size, param3: org.opencv.core.Size, param4: number, param5: number, param6: number, param7: number, param8: number, param9: boolean, param10: number, param11: boolean);
				public detectMultiScale(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: org.opencv.core.MatOfDouble): void;
				public get_nbins(): number;
				public constructor(param0: org.opencv.core.Size, param1: org.opencv.core.Size, param2: org.opencv.core.Size, param3: org.opencv.core.Size, param4: number, param5: number, param6: number, param7: number, param8: number);
				public get_L2HysThreshold(): number;
				public load(param0: string): boolean;
				public save(param0: string): void;
				public load(param0: string, param1: string): boolean;
				public get_winSize(): org.opencv.core.Size;
				public detectMultiScale(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: org.opencv.core.MatOfDouble, param3: number, param4: org.opencv.core.Size, param5: org.opencv.core.Size): void;
				public get_winSigma(): number;
				public static __fromPtr__(param0: number): org.opencv.objdetect.HOGDescriptor;
				public static getDaimlerPeopleDetector(): org.opencv.core.MatOfFloat;
				public detect(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfPoint, param2: org.opencv.core.MatOfDouble, param3: number, param4: org.opencv.core.Size, param5: org.opencv.core.Size): void;
				public constructor(param0: org.opencv.core.Size, param1: org.opencv.core.Size, param2: org.opencv.core.Size, param3: org.opencv.core.Size, param4: number, param5: number, param6: number, param7: number, param8: number, param9: boolean);
				public getWinSigma(): number;
				public detect(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfPoint, param2: org.opencv.core.MatOfDouble, param3: number, param4: org.opencv.core.Size, param5: org.opencv.core.Size, param6: org.opencv.core.MatOfPoint): void;
				public get_nlevels(): number;
				public detect(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfPoint, param2: org.opencv.core.MatOfDouble, param3: number, param4: org.opencv.core.Size): void;
				public detectMultiScale(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: org.opencv.core.MatOfDouble, param3: number): void;
				public finalize(): void;
				public constructor(param0: string);
				public get_blockStride(): org.opencv.core.Size;
				public get_cellSize(): org.opencv.core.Size;
				public compute(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfFloat, param2: org.opencv.core.Size, param3: org.opencv.core.Size, param4: org.opencv.core.MatOfPoint): void;
				public detect(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfPoint, param2: org.opencv.core.MatOfDouble): void;
				public detectMultiScale(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: org.opencv.core.MatOfDouble, param3: number, param4: org.opencv.core.Size): void;
				public save(param0: string, param1: string): void;
				public constructor(param0: org.opencv.core.Size, param1: org.opencv.core.Size, param2: org.opencv.core.Size, param3: org.opencv.core.Size, param4: number);
				public constructor(param0: org.opencv.core.Size, param1: org.opencv.core.Size, param2: org.opencv.core.Size, param3: org.opencv.core.Size, param4: number, param5: number, param6: number);
				public constructor(param0: org.opencv.core.Size, param1: org.opencv.core.Size, param2: org.opencv.core.Size, param3: org.opencv.core.Size, param4: number, param5: number, param6: number, param7: number);
				public compute(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfFloat, param2: org.opencv.core.Size, param3: org.opencv.core.Size): void;
				public getNativeObjAddr(): number;
				public get_histogramNormType(): number;
				public detectMultiScale(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfRect, param2: org.opencv.core.MatOfDouble, param3: number, param4: org.opencv.core.Size, param5: org.opencv.core.Size, param6: number): void;
				public constructor(param0: org.opencv.core.Size, param1: org.opencv.core.Size, param2: org.opencv.core.Size, param3: org.opencv.core.Size, param4: number, param5: number);
				public computeGradient(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Size): void;
				public get_derivAperture(): number;
				public static getDefaultPeopleDetector(): org.opencv.core.MatOfFloat;
				public constructor(param0: org.opencv.core.Size, param1: org.opencv.core.Size, param2: org.opencv.core.Size, param3: org.opencv.core.Size, param4: number, param5: number, param6: number, param7: number, param8: number, param9: boolean, param10: number);
				public compute(param0: org.opencv.core.Mat, param1: org.opencv.core.MatOfFloat, param2: org.opencv.core.Size): void;
				public checkDetectorSize(): boolean;
				public constructor(param0: number);
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
				public static groupRectangles(param0: org.opencv.core.MatOfRect, param1: org.opencv.core.MatOfInt, param2: number, param3: number): void;
				public static groupRectangles(param0: org.opencv.core.MatOfRect, param1: org.opencv.core.MatOfInt, param2: number): void;
				public constructor();
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
				public process(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public static __fromPtr__(param0: number): org.opencv.photo.AlignExposures;
				public finalize(): void;
				public constructor(param0: number);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class AlignMTB extends org.opencv.photo.AlignExposures {
				public static class: java.lang.Class<org.opencv.photo.AlignMTB>;
				public process(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public getExcludeRange(): number;
				public shiftMat(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Point): void;
				public setExcludeRange(param0: number): void;
				public setMaxBits(param0: number): void;
				public finalize(): void;
				public computeBitmaps(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public getMaxBits(): number;
				public static __fromPtr__(param0: number): org.opencv.photo.AlignMTB;
				public static __fromPtr__(param0: number): org.opencv.photo.AlignExposures;
				public calculateShift(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): org.opencv.core.Point;
				public constructor(param0: number);
				public setCut(param0: boolean): void;
				public process(param0: java.util.List<org.opencv.core.Mat>, param1: java.util.List<org.opencv.core.Mat>): void;
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
				public static __fromPtr__(param0: number): org.opencv.photo.CalibrateCRF;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public finalize(): void;
				public constructor(param0: number);
				public process(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class CalibrateDebevec extends org.opencv.photo.CalibrateCRF {
				public static class: java.lang.Class<org.opencv.photo.CalibrateDebevec>;
				public setSamples(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.photo.CalibrateDebevec;
				public getLambda(): number;
				public static __fromPtr__(param0: number): org.opencv.photo.CalibrateCRF;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public getSamples(): number;
				public setLambda(param0: number): void;
				public setRandom(param0: boolean): void;
				public getRandom(): boolean;
				public finalize(): void;
				public constructor(param0: number);
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class CalibrateRobertson extends org.opencv.photo.CalibrateCRF {
				public static class: java.lang.Class<org.opencv.photo.CalibrateRobertson>;
				public static __fromPtr__(param0: number): org.opencv.photo.CalibrateCRF;
				public setMaxIter(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public getMaxIter(): number;
				public getThreshold(): number;
				public static __fromPtr__(param0: number): org.opencv.photo.CalibrateRobertson;
				public setThreshold(param0: number): void;
				public finalize(): void;
				public constructor(param0: number);
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
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public static __fromPtr__(param0: number): org.opencv.photo.MergeExposures;
				public finalize(): void;
				public constructor(param0: number);
				public static __fromPtr__(param0: number): org.opencv.photo.MergeDebevec;
				public process(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public process(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class MergeExposures extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.photo.MergeExposures>;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public static __fromPtr__(param0: number): org.opencv.photo.MergeExposures;
				public finalize(): void;
				public constructor(param0: number);
				public process(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
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
				public setExposureWeight(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public getContrastWeight(): number;
				public setSaturationWeight(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.photo.MergeExposures;
				public static __fromPtr__(param0: number): org.opencv.photo.MergeMertens;
				public finalize(): void;
				public setContrastWeight(param0: number): void;
				public process(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat): void;
				public constructor(param0: number);
				public process(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
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
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public static __fromPtr__(param0: number): org.opencv.photo.MergeExposures;
				public static __fromPtr__(param0: number): org.opencv.photo.MergeRobertson;
				public finalize(): void;
				public constructor(param0: number);
				public process(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat): void;
				public process(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
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
				public static NORMAL_CLONE: number;
				public static MIXED_CLONE: number;
				public static MONOCHROME_TRANSFER: number;
				public static RECURS_FILTER: number;
				public static NORMCONV_FILTER: number;
				public static LDR_SIZE: number;
				public static fastNlMeansDenoisingMulti(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number): void;
				public static stylization(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static createCalibrateDebevec(param0: number, param1: number): org.opencv.photo.CalibrateDebevec;
				public static fastNlMeansDenoising(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.MatOfFloat, param3: number): void;
				public static createTonemapDrago(param0: number, param1: number): org.opencv.photo.TonemapDrago;
				public static seamlessClone(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Point, param4: org.opencv.core.Mat, param5: number): void;
				public static denoise_TVL1(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat, param2: number): void;
				public static createTonemapDurand(param0: number, param1: number, param2: number, param3: number): org.opencv.photo.TonemapDurand;
				public static detailEnhance(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public constructor();
				public static createMergeMertens(param0: number): org.opencv.photo.MergeMertens;
				public static createMergeRobertson(): org.opencv.photo.MergeRobertson;
				public static edgePreservingFilter(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public static edgePreservingFilter(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static fastNlMeansDenoisingColoredMulti(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number): void;
				public static fastNlMeansDenoisingColoredMulti(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public static createTonemapDurand(param0: number, param1: number, param2: number, param3: number, param4: number): org.opencv.photo.TonemapDurand;
				public static createTonemapDurand(param0: number): org.opencv.photo.TonemapDurand;
				public static detailEnhance(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static createTonemapDurand(): org.opencv.photo.TonemapDurand;
				public static textureFlattening(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number): void;
				public static createTonemapDrago(param0: number, param1: number, param2: number): org.opencv.photo.TonemapDrago;
				public static denoise_TVL1(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public static createAlignMTB(param0: number, param1: number): org.opencv.photo.AlignMTB;
				public static fastNlMeansDenoising(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static fastNlMeansDenoisingColored(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number): void;
				public static fastNlMeansDenoisingMulti(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public static createMergeMertens(param0: number, param1: number, param2: number): org.opencv.photo.MergeMertens;
				public static colorChange(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static inpaint(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number): void;
				public static fastNlMeansDenoisingColoredMulti(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): void;
				public static createCalibrateRobertson(): org.opencv.photo.CalibrateRobertson;
				public static createAlignMTB(param0: number, param1: number, param2: boolean): org.opencv.photo.AlignMTB;
				public static createTonemapDrago(param0: number): org.opencv.photo.TonemapDrago;
				public static createTonemapMantiuk(param0: number, param1: number): org.opencv.photo.TonemapMantiuk;
				public static fastNlMeansDenoisingMulti(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat, param2: number, param3: number, param4: org.opencv.core.MatOfFloat, param5: number, param6: number): void;
				public static createTonemapMantiuk(): org.opencv.photo.TonemapMantiuk;
				public static fastNlMeansDenoisingMulti(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number): void;
				public static createTonemapDrago(): org.opencv.photo.TonemapDrago;
				public static fastNlMeansDenoising(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.MatOfFloat, param3: number, param4: number, param5: number): void;
				public static createTonemap(): org.opencv.photo.Tonemap;
				public static createTonemapReinhard(param0: number, param1: number, param2: number, param3: number): org.opencv.photo.TonemapReinhard;
				public static createMergeMertens(): org.opencv.photo.MergeMertens;
				public static createTonemapDurand(param0: number, param1: number, param2: number): org.opencv.photo.TonemapDurand;
				public static fastNlMeansDenoisingMulti(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat, param2: number, param3: number, param4: org.opencv.core.MatOfFloat, param5: number): void;
				public static fastNlMeansDenoisingColored(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static illuminationChange(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static createAlignMTB(): org.opencv.photo.AlignMTB;
				public static createTonemapReinhard(param0: number, param1: number, param2: number): org.opencv.photo.TonemapReinhard;
				public static createTonemapMantiuk(param0: number, param1: number, param2: number): org.opencv.photo.TonemapMantiuk;
				public static createTonemapReinhard(): org.opencv.photo.TonemapReinhard;
				public static fastNlMeansDenoising(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.MatOfFloat): void;
				public static colorChange(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number): void;
				public static createCalibrateDebevec(param0: number, param1: number, param2: boolean): org.opencv.photo.CalibrateDebevec;
				public static fastNlMeansDenoising(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public static createCalibrateRobertson(param0: number, param1: number): org.opencv.photo.CalibrateRobertson;
				public static pencilSketch(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number): void;
				public static colorChange(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number): void;
				public static fastNlMeansDenoisingMulti(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat, param2: number, param3: number, param4: org.opencv.core.MatOfFloat, param5: number, param6: number, param7: number): void;
				public static createCalibrateDebevec(): org.opencv.photo.CalibrateDebevec;
				public static decolor(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static createTonemap(param0: number): org.opencv.photo.Tonemap;
				public static illuminationChange(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number): void;
				public static fastNlMeansDenoisingColoredMulti(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number): void;
				public static createTonemapDurand(param0: number, param1: number): org.opencv.photo.TonemapDurand;
				public static createTonemapMantiuk(param0: number): org.opencv.photo.TonemapMantiuk;
				public static createAlignMTB(param0: number): org.opencv.photo.AlignMTB;
				public static textureFlattening(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number): void;
				public static stylization(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public static colorChange(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number, param5: number): void;
				public static edgePreservingFilter(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static pencilSketch(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number): void;
				public static fastNlMeansDenoisingColoredMulti(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
				public static createMergeDebevec(): org.opencv.photo.MergeDebevec;
				public static detailEnhance(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static createCalibrateRobertson(param0: number): org.opencv.photo.CalibrateRobertson;
				public static createTonemapReinhard(param0: number, param1: number): org.opencv.photo.TonemapReinhard;
				public static edgePreservingFilter(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): void;
				public static fastNlMeansDenoising(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static fastNlMeansDenoisingColored(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): void;
				public static pencilSketch(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static createTonemapReinhard(param0: number): org.opencv.photo.TonemapReinhard;
				public static fastNlMeansDenoisingMulti(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat, param2: number, param3: number, param4: org.opencv.core.MatOfFloat): void;
				public static illuminationChange(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number): void;
				public static stylization(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static createCalibrateDebevec(param0: number): org.opencv.photo.CalibrateDebevec;
				public static pencilSketch(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number, param5: number): void;
				public static fastNlMeansDenoisingMulti(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): void;
				public static createMergeMertens(param0: number, param1: number): org.opencv.photo.MergeMertens;
				public static fastNlMeansDenoising(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number, param4: number): void;
				public static fastNlMeansDenoisingColored(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number, param3: number): void;
				public static fastNlMeansDenoisingColored(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static textureFlattening(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
				public static fastNlMeansDenoising(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.MatOfFloat, param3: number, param4: number): void;
				public static denoise_TVL1(param0: java.util.List<org.opencv.core.Mat>, param1: org.opencv.core.Mat): void;
				public static textureFlattening(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number, param5: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class Tonemap extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.photo.Tonemap>;
				public setGamma(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public finalize(): void;
				public constructor(param0: number);
				public getGamma(): number;
				public process(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public static __fromPtr__(param0: number): org.opencv.photo.Tonemap;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class TonemapDrago extends org.opencv.photo.Tonemap {
				public static class: java.lang.Class<org.opencv.photo.TonemapDrago>;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public getBias(): number;
				public getSaturation(): number;
				public setBias(param0: number): void;
				public setSaturation(param0: number): void;
				public finalize(): void;
				public constructor(param0: number);
				public static __fromPtr__(param0: number): org.opencv.photo.TonemapDrago;
				public static __fromPtr__(param0: number): org.opencv.photo.Tonemap;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class TonemapDurand extends org.opencv.photo.Tonemap {
				public static class: java.lang.Class<org.opencv.photo.TonemapDurand>;
				public setSigmaColor(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public finalize(): void;
				public getContrast(): number;
				public getSigmaSpace(): number;
				public static __fromPtr__(param0: number): org.opencv.photo.TonemapDurand;
				public getSigmaColor(): number;
				public getSaturation(): number;
				public setSaturation(param0: number): void;
				public constructor(param0: number);
				public setContrast(param0: number): void;
				public setSigmaSpace(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.photo.Tonemap;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class TonemapMantiuk extends org.opencv.photo.Tonemap {
				public static class: java.lang.Class<org.opencv.photo.TonemapMantiuk>;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public static __fromPtr__(param0: number): org.opencv.photo.TonemapMantiuk;
				public getScale(): number;
				public getSaturation(): number;
				public setSaturation(param0: number): void;
				public setScale(param0: number): void;
				public finalize(): void;
				public constructor(param0: number);
				public static __fromPtr__(param0: number): org.opencv.photo.Tonemap;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module photo {
			export class TonemapReinhard extends org.opencv.photo.Tonemap {
				public static class: java.lang.Class<org.opencv.photo.TonemapReinhard>;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public getIntensity(): number;
				public setColorAdaptation(param0: number): void;
				public setIntensity(param0: number): void;
				public finalize(): void;
				public constructor(param0: number);
				public getLightAdaptation(): number;
				public static __fromPtr__(param0: number): org.opencv.photo.TonemapReinhard;
				public getColorAdaptation(): number;
				public setLightAdaptation(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.photo.Tonemap;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module utils {
			export class Converters extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.utils.Converters>;
				public static Mat_to_vector_Point3d(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.Point3>): void;
				public static vector_Rect2d_to_Mat(param0: java.util.List<org.opencv.core.Rect2d>): org.opencv.core.Mat;
				public static Mat_to_vector_Point3(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.Point3>): void;
				public static Mat_to_vector_vector_DMatch(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfDMatch>): void;
				public static vector_uchar_to_Mat(param0: java.util.List<java.lang.Byte>): org.opencv.core.Mat;
				public static Mat_to_vector_vector_Point3f(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfPoint3f>): void;
				public static Mat_to_vector_int(param0: org.opencv.core.Mat, param1: java.util.List<java.lang.Integer>): void;
				public static vector_vector_char_to_Mat(param0: java.util.List<org.opencv.core.MatOfByte>, param1: java.util.List<org.opencv.core.Mat>): org.opencv.core.Mat;
				public constructor();
				public static vector_Point2f_to_Mat(param0: java.util.List<org.opencv.core.Point>): org.opencv.core.Mat;
				public static vector_Rect_to_Mat(param0: java.util.List<org.opencv.core.Rect>): org.opencv.core.Mat;
				public static Mat_to_vector_KeyPoint(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.KeyPoint>): void;
				public static Mat_to_vector_vector_KeyPoint(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfKeyPoint>): void;
				public static Mat_to_vector_uchar(param0: org.opencv.core.Mat, param1: java.util.List<java.lang.Byte>): void;
				public static vector_KeyPoint_to_Mat(param0: java.util.List<org.opencv.core.KeyPoint>): org.opencv.core.Mat;
				public static vector_float_to_Mat(param0: java.util.List<java.lang.Float>): org.opencv.core.Mat;
				public static Mat_to_vector_Point3f(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.Point3>): void;
				public static Mat_to_vector_Point(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.Point>): void;
				public static Mat_to_vector_DMatch(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.DMatch>): void;
				public static vector_Point3i_to_Mat(param0: java.util.List<org.opencv.core.Point3>): org.opencv.core.Mat;
				public static Mat_to_vector_vector_Point2f(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfPoint2f>): void;
				public static Mat_to_vector_char(param0: org.opencv.core.Mat, param1: java.util.List<java.lang.Byte>): void;
				public static vector_vector_DMatch_to_Mat(param0: java.util.List<org.opencv.core.MatOfDMatch>, param1: java.util.List<org.opencv.core.Mat>): org.opencv.core.Mat;
				public static vector_char_to_Mat(param0: java.util.List<java.lang.Byte>): org.opencv.core.Mat;
				public static vector_int_to_Mat(param0: java.util.List<java.lang.Integer>): org.opencv.core.Mat;
				public static Mat_to_vector_Point3i(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.Point3>): void;
				public static vector_vector_Point_to_Mat(param0: java.util.List<org.opencv.core.MatOfPoint>, param1: java.util.List<org.opencv.core.Mat>): org.opencv.core.Mat;
				public static Mat_to_vector_vector_Point(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.MatOfPoint>): void;
				public static vector_DMatch_to_Mat(param0: java.util.List<org.opencv.core.DMatch>): org.opencv.core.Mat;
				public static vector_Point_to_Mat(param0: java.util.List<org.opencv.core.Point>, param1: number): org.opencv.core.Mat;
				public static vector_Point3_to_Mat(param0: java.util.List<org.opencv.core.Point3>, param1: number): org.opencv.core.Mat;
				public static Mat_to_vector_Point2d(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.Point>): void;
				public static Mat_to_vector_Rect2d(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.Rect2d>): void;
				public static vector_vector_Point2f_to_Mat(param0: java.util.List<org.opencv.core.MatOfPoint2f>, param1: java.util.List<org.opencv.core.Mat>): org.opencv.core.Mat;
				public static vector_vector_KeyPoint_to_Mat(param0: java.util.List<org.opencv.core.MatOfKeyPoint>, param1: java.util.List<org.opencv.core.Mat>): org.opencv.core.Mat;
				public static Mat_to_vector_Point2f(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.Point>): void;
				public static vector_Point_to_Mat(param0: java.util.List<org.opencv.core.Point>): org.opencv.core.Mat;
				public static vector_Point3d_to_Mat(param0: java.util.List<org.opencv.core.Point3>): org.opencv.core.Mat;
				public static Mat_to_vector_vector_char(param0: org.opencv.core.Mat, param1: java.util.List<java.util.List<java.lang.Byte>>): void;
				public static Mat_to_vector_Mat(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.Mat>): void;
				public static Mat_to_vector_float(param0: org.opencv.core.Mat, param1: java.util.List<java.lang.Float>): void;
				public static vector_vector_Point3f_to_Mat(param0: java.util.List<org.opencv.core.MatOfPoint3f>, param1: java.util.List<org.opencv.core.Mat>): org.opencv.core.Mat;
				public static vector_double_to_Mat(param0: java.util.List<java.lang.Double>): org.opencv.core.Mat;
				public static Mat_to_vector_double(param0: org.opencv.core.Mat, param1: java.util.List<java.lang.Double>): void;
				public static Mat_to_vector_Rect(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.Rect>): void;
				public static vector_Point3f_to_Mat(param0: java.util.List<org.opencv.core.Point3>): org.opencv.core.Mat;
				public static vector_Point2d_to_Mat(param0: java.util.List<org.opencv.core.Point>): org.opencv.core.Mat;
				public static vector_Mat_to_Mat(param0: java.util.List<org.opencv.core.Mat>): org.opencv.core.Mat;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class BackgroundSubtractor extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.video.BackgroundSubtractor>;
				public getBackgroundImage(param0: org.opencv.core.Mat): void;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public apply(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static __fromPtr__(param0: number): org.opencv.video.BackgroundSubtractor;
				public finalize(): void;
				public constructor(param0: number);
				public apply(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class BackgroundSubtractorKNN extends org.opencv.video.BackgroundSubtractor {
				public static class: java.lang.Class<org.opencv.video.BackgroundSubtractorKNN>;
				public setShadowValue(param0: number): void;
				public getShadowThreshold(): number;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public static __fromPtr__(param0: number): org.opencv.video.BackgroundSubtractorKNN;
				public getkNNSamples(): number;
				public finalize(): void;
				public getHistory(): number;
				public setkNNSamples(param0: number): void;
				public getNSamples(): number;
				public getDetectShadows(): boolean;
				public setShadowThreshold(param0: number): void;
				public setDetectShadows(param0: boolean): void;
				public setNSamples(param0: number): void;
				public getShadowValue(): number;
				public static __fromPtr__(param0: number): org.opencv.video.BackgroundSubtractor;
				public setHistory(param0: number): void;
				public constructor(param0: number);
				public setDist2Threshold(param0: number): void;
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
				public static __fromPtr__(param0: number): org.opencv.video.BackgroundSubtractorMOG2;
				public setShadowValue(param0: number): void;
				public getVarMax(): number;
				public setVarThresholdGen(param0: number): void;
				public finalize(): void;
				public getHistory(): number;
				public getNMixtures(): number;
				public setShadowThreshold(param0: number): void;
				public setVarInit(param0: number): void;
				public setDetectShadows(param0: boolean): void;
				public getVarMin(): number;
				public getBackgroundRatio(): number;
				public getVarInit(): number;
				public setNMixtures(param0: number): void;
				public getVarThresholdGen(): number;
				public getShadowThreshold(): number;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public getDetectShadows(): boolean;
				public setComplexityReductionThreshold(param0: number): void;
				public getVarThreshold(): number;
				public getShadowValue(): number;
				public apply(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: number): void;
				public static __fromPtr__(param0: number): org.opencv.video.BackgroundSubtractor;
				public setHistory(param0: number): void;
				public setVarMin(param0: number): void;
				public constructor(param0: number);
				public setVarThreshold(param0: number): void;
				public getComplexityReductionThreshold(): number;
				public setVarMax(param0: number): void;
				public apply(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat): void;
				public setBackgroundRatio(param0: number): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class DenseOpticalFlow extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.video.DenseOpticalFlow>;
				public static __fromPtr__(param0: number): org.opencv.video.DenseOpticalFlow;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public collectGarbage(): void;
				public finalize(): void;
				public constructor(param0: number);
				public calc(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class DualTVL1OpticalFlow extends org.opencv.video.DenseOpticalFlow {
				public static class: java.lang.Class<org.opencv.video.DualTVL1OpticalFlow>;
				public static __fromPtr__(param0: number): org.opencv.video.DualTVL1OpticalFlow;
				public static create(param0: number, param1: number, param2: number): org.opencv.video.DualTVL1OpticalFlow;
				public setLambda(param0: number): void;
				public setOuterIterations(param0: number): void;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number): org.opencv.video.DualTVL1OpticalFlow;
				public setEpsilon(param0: number): void;
				public finalize(): void;
				public getTheta(): number;
				public setMedianFiltering(param0: number): void;
				public setTau(param0: number): void;
				public setUseInitialFlow(param0: boolean): void;
				public getTau(): number;
				public getMedianFiltering(): number;
				public getInnerIterations(): number;
				public static create(param0: number, param1: number, param2: number, param3: number): org.opencv.video.DualTVL1OpticalFlow;
				public setInnerIterations(param0: number): void;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): org.opencv.video.DualTVL1OpticalFlow;
				public getOuterIterations(): number;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): org.opencv.video.DualTVL1OpticalFlow;
				public setWarpingsNumber(param0: number): void;
				public getGamma(): number;
				public getEpsilon(): number;
				public static create(): org.opencv.video.DualTVL1OpticalFlow;
				public static create(param0: number): org.opencv.video.DualTVL1OpticalFlow;
				public getLambda(): number;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: boolean): org.opencv.video.DualTVL1OpticalFlow;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): org.opencv.video.DualTVL1OpticalFlow;
				public getScaleStep(): number;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): org.opencv.video.DualTVL1OpticalFlow;
				public static create(param0: number, param1: number): org.opencv.video.DualTVL1OpticalFlow;
				public setScaleStep(param0: number): void;
				public setScalesNumber(param0: number): void;
				public getUseInitialFlow(): boolean;
				public setGamma(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.video.DenseOpticalFlow;
				public getScalesNumber(): number;
				public constructor(param0: number);
				public getWarpingsNumber(): number;
				public setTheta(param0: number): void;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number): org.opencv.video.DualTVL1OpticalFlow;
				public static create(param0: number, param1: number, param2: number, param3: number, param4: number): org.opencv.video.DualTVL1OpticalFlow;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class FarnebackOpticalFlow extends org.opencv.video.DenseOpticalFlow {
				public static class: java.lang.Class<org.opencv.video.FarnebackOpticalFlow>;
				public setPolySigma(param0: number): void;
				public getWinSize(): number;
				public getPolySigma(): number;
				public getNumIters(): number;
				public static __fromPtr__(param0: number): org.opencv.video.FarnebackOpticalFlow;
				public static create(param0: number): org.opencv.video.FarnebackOpticalFlow;
				public finalize(): void;
				public static create(param0: number, param1: number, param2: boolean, param3: number, param4: number, param5: number, param6: number, param7: number): org.opencv.video.FarnebackOpticalFlow;
				public static create(param0: number, param1: number, param2: boolean, param3: number, param4: number, param5: number, param6: number): org.opencv.video.FarnebackOpticalFlow;
				public getPolyN(): number;
				public getFlags(): number;
				public static create(param0: number, param1: number, param2: boolean): org.opencv.video.FarnebackOpticalFlow;
				public setWinSize(param0: number): void;
				public static create(param0: number, param1: number): org.opencv.video.FarnebackOpticalFlow;
				public getNumLevels(): number;
				public setPolyN(param0: number): void;
				public static create(): org.opencv.video.FarnebackOpticalFlow;
				public setNumIters(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public setFastPyramids(param0: boolean): void;
				public getFastPyramids(): boolean;
				public getPyrScale(): number;
				public setNumLevels(param0: number): void;
				public setFlags(param0: number): void;
				public static create(param0: number, param1: number, param2: boolean, param3: number, param4: number): org.opencv.video.FarnebackOpticalFlow;
				public static __fromPtr__(param0: number): org.opencv.video.DenseOpticalFlow;
				public static create(param0: number, param1: number, param2: boolean, param3: number, param4: number, param5: number): org.opencv.video.FarnebackOpticalFlow;
				public static create(param0: number, param1: number, param2: boolean, param3: number): org.opencv.video.FarnebackOpticalFlow;
				public setPyrScale(param0: number): void;
				public constructor(param0: number);
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
				public constructor(param0: number, param1: number);
				public constructor(param0: number, param1: number, param2: number);
				public get_errorCovPost(): org.opencv.core.Mat;
				public finalize(): void;
				public get_transitionMatrix(): org.opencv.core.Mat;
				public get_measurementNoiseCov(): org.opencv.core.Mat;
				public get_gain(): org.opencv.core.Mat;
				public constructor();
				public get_statePre(): org.opencv.core.Mat;
				public get_controlMatrix(): org.opencv.core.Mat;
				public set_statePost(param0: org.opencv.core.Mat): void;
				public set_measurementNoiseCov(param0: org.opencv.core.Mat): void;
				public set_transitionMatrix(param0: org.opencv.core.Mat): void;
				public set_processNoiseCov(param0: org.opencv.core.Mat): void;
				public get_processNoiseCov(): org.opencv.core.Mat;
				public set_errorCovPre(param0: org.opencv.core.Mat): void;
				public set_errorCovPost(param0: org.opencv.core.Mat): void;
				public getNativeObjAddr(): number;
				public get_statePost(): org.opencv.core.Mat;
				public static __fromPtr__(param0: number): org.opencv.video.KalmanFilter;
				public set_statePre(param0: org.opencv.core.Mat): void;
				public predict(param0: org.opencv.core.Mat): org.opencv.core.Mat;
				public constructor(param0: number, param1: number, param2: number, param3: number);
				public get_measurementMatrix(): org.opencv.core.Mat;
				public set_measurementMatrix(param0: org.opencv.core.Mat): void;
				public constructor(param0: number);
				public predict(): org.opencv.core.Mat;
				public set_gain(param0: org.opencv.core.Mat): void;
				public get_errorCovPre(): org.opencv.core.Mat;
				public correct(param0: org.opencv.core.Mat): org.opencv.core.Mat;
				public set_controlMatrix(param0: org.opencv.core.Mat): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class SparseOpticalFlow extends org.opencv.core.Algorithm {
				public static class: java.lang.Class<org.opencv.video.SparseOpticalFlow>;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public calc(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat, param5: org.opencv.core.Mat): void;
				public finalize(): void;
				public constructor(param0: number);
				public static __fromPtr__(param0: number): org.opencv.video.SparseOpticalFlow;
				public calc(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: org.opencv.core.Mat, param4: org.opencv.core.Mat): void;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module video {
			export class SparsePyrLKOpticalFlow extends org.opencv.video.SparseOpticalFlow {
				public static class: java.lang.Class<org.opencv.video.SparsePyrLKOpticalFlow>;
				public static create(param0: org.opencv.core.Size, param1: number): org.opencv.video.SparsePyrLKOpticalFlow;
				public static __fromPtr__(param0: number): org.opencv.core.Algorithm;
				public getWinSize(): org.opencv.core.Size;
				public static create(param0: org.opencv.core.Size): org.opencv.video.SparsePyrLKOpticalFlow;
				public getMinEigThreshold(): number;
				public finalize(): void;
				public static create(param0: org.opencv.core.Size, param1: number, param2: org.opencv.core.TermCriteria, param3: number): org.opencv.video.SparsePyrLKOpticalFlow;
				public setWinSize(param0: org.opencv.core.Size): void;
				public getMaxLevel(): number;
				public setFlags(param0: number): void;
				public static create(param0: org.opencv.core.Size, param1: number, param2: org.opencv.core.TermCriteria, param3: number, param4: number): org.opencv.video.SparsePyrLKOpticalFlow;
				public static create(param0: org.opencv.core.Size, param1: number, param2: org.opencv.core.TermCriteria): org.opencv.video.SparsePyrLKOpticalFlow;
				public setMinEigThreshold(param0: number): void;
				public static __fromPtr__(param0: number): org.opencv.video.SparsePyrLKOpticalFlow;
				public constructor(param0: number);
				public static create(): org.opencv.video.SparsePyrLKOpticalFlow;
				public getFlags(): number;
				public setMaxLevel(param0: number): void;
				public getTermCriteria(): org.opencv.core.TermCriteria;
				public static __fromPtr__(param0: number): org.opencv.video.SparseOpticalFlow;
				public setTermCriteria(param0: org.opencv.core.TermCriteria): void;
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
				public static buildOpticalFlowPyramid(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.Mat>, param2: org.opencv.core.Size, param3: number, param4: boolean, param5: number): number;
				public static buildOpticalFlowPyramid(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.Mat>, param2: org.opencv.core.Size, param3: number, param4: boolean, param5: number, param6: number): number;
				public static calcOpticalFlowPyrLK(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.MatOfPoint2f, param3: org.opencv.core.MatOfPoint2f, param4: org.opencv.core.MatOfByte, param5: org.opencv.core.MatOfFloat, param6: org.opencv.core.Size): void;
				public static CamShift(param0: org.opencv.core.Mat, param1: org.opencv.core.Rect, param2: org.opencv.core.TermCriteria): org.opencv.core.RotatedRect;
				public static findTransformECC(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number): number;
				public static estimateRigidTransform(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: boolean, param3: number, param4: number, param5: number): org.opencv.core.Mat;
				public static calcOpticalFlowPyrLK(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.MatOfPoint2f, param3: org.opencv.core.MatOfPoint2f, param4: org.opencv.core.MatOfByte, param5: org.opencv.core.MatOfFloat, param6: org.opencv.core.Size, param7: number, param8: org.opencv.core.TermCriteria, param9: number, param10: number): void;
				public static calcOpticalFlowPyrLK(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.MatOfPoint2f, param3: org.opencv.core.MatOfPoint2f, param4: org.opencv.core.MatOfByte, param5: org.opencv.core.MatOfFloat, param6: org.opencv.core.Size, param7: number, param8: org.opencv.core.TermCriteria): void;
				public static calcOpticalFlowPyrLK(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.MatOfPoint2f, param3: org.opencv.core.MatOfPoint2f, param4: org.opencv.core.MatOfByte, param5: org.opencv.core.MatOfFloat, param6: org.opencv.core.Size, param7: number): void;
				public static calcOpticalFlowFarneback(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number): void;
				public constructor();
				public static createBackgroundSubtractorKNN(): org.opencv.video.BackgroundSubtractorKNN;
				public static createBackgroundSubtractorKNN(param0: number, param1: number): org.opencv.video.BackgroundSubtractorKNN;
				public static buildOpticalFlowPyramid(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.Mat>, param2: org.opencv.core.Size, param3: number, param4: boolean): number;
				public static createBackgroundSubtractorMOG2(param0: number): org.opencv.video.BackgroundSubtractorMOG2;
				public static createBackgroundSubtractorMOG2(param0: number, param1: number): org.opencv.video.BackgroundSubtractorMOG2;
				public static calcOpticalFlowPyrLK(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.MatOfPoint2f, param3: org.opencv.core.MatOfPoint2f, param4: org.opencv.core.MatOfByte, param5: org.opencv.core.MatOfFloat, param6: org.opencv.core.Size, param7: number, param8: org.opencv.core.TermCriteria, param9: number): void;
				public static createBackgroundSubtractorKNN(param0: number): org.opencv.video.BackgroundSubtractorKNN;
				public static findTransformECC(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat): number;
				public static findTransformECC(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: org.opencv.core.TermCriteria, param5: org.opencv.core.Mat): number;
				public static createOptFlow_DualTVL1(): org.opencv.video.DualTVL1OpticalFlow;
				public static estimateRigidTransform(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: boolean): org.opencv.core.Mat;
				public static meanShift(param0: org.opencv.core.Mat, param1: org.opencv.core.Rect, param2: org.opencv.core.TermCriteria): number;
				public static buildOpticalFlowPyramid(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.Mat>, param2: org.opencv.core.Size, param3: number): number;
				public static createBackgroundSubtractorMOG2(param0: number, param1: number, param2: boolean): org.opencv.video.BackgroundSubtractorMOG2;
				public static calcOpticalFlowPyrLK(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.MatOfPoint2f, param3: org.opencv.core.MatOfPoint2f, param4: org.opencv.core.MatOfByte, param5: org.opencv.core.MatOfFloat): void;
				public static buildOpticalFlowPyramid(param0: org.opencv.core.Mat, param1: java.util.List<org.opencv.core.Mat>, param2: org.opencv.core.Size, param3: number, param4: boolean, param5: number, param6: number, param7: boolean): number;
				public static createBackgroundSubtractorMOG2(): org.opencv.video.BackgroundSubtractorMOG2;
				public static createBackgroundSubtractorKNN(param0: number, param1: number, param2: boolean): org.opencv.video.BackgroundSubtractorKNN;
				public static findTransformECC(param0: org.opencv.core.Mat, param1: org.opencv.core.Mat, param2: org.opencv.core.Mat, param3: number, param4: org.opencv.core.TermCriteria): number;
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
				public release(): void;
				public set(param0: number, param1: number): boolean;
				public finalize(): void;
				public getNativeObjAddr(): number;
				public static __fromPtr__(param0: number): org.opencv.videoio.VideoCapture;
				public get(param0: number): number;
				public open(param0: string): boolean;
				public open(param0: number, param1: number): boolean;
				public constructor(param0: string);
				public constructor();
				public open(param0: number): boolean;
				public retrieve(param0: org.opencv.core.Mat, param1: number): boolean;
				public retrieve(param0: org.opencv.core.Mat): boolean;
				public grab(): boolean;
				public isOpened(): boolean;
				public constructor(param0: string, param1: number);
				public constructor(param0: number);
				public read(param0: org.opencv.core.Mat): boolean;
				public open(param0: string, param1: number): boolean;
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
				public release(): void;
				public constructor(param0: string, param1: number, param2: number, param3: number, param4: org.opencv.core.Size, param5: boolean);
				public set(param0: number, param1: number): boolean;
				public finalize(): void;
				public getNativeObjAddr(): number;
				public constructor(param0: string, param1: number, param2: number, param3: org.opencv.core.Size);
				public get(param0: number): number;
				public static __fromPtr__(param0: number): org.opencv.videoio.VideoWriter;
				public open(param0: string, param1: number, param2: number, param3: org.opencv.core.Size): boolean;
				public constructor();
				public constructor(param0: string, param1: number, param2: number, param3: number, param4: org.opencv.core.Size);
				public write(param0: org.opencv.core.Mat): void;
				public open(param0: string, param1: number, param2: number, param3: number, param4: org.opencv.core.Size): boolean;
				public isOpened(): boolean;
				public open(param0: string, param1: number, param2: number, param3: number, param4: org.opencv.core.Size, param5: boolean): boolean;
				public constructor(param0: number);
				public open(param0: string, param1: number, param2: number, param3: org.opencv.core.Size, param4: boolean): boolean;
				public constructor(param0: string, param1: number, param2: number, param3: org.opencv.core.Size, param4: boolean);
				public static fourcc(param0: string, param1: string, param2: string, param3: string): number;
			}
		}
	}
}

declare module org {
	export module opencv {
		export module videoio {
			export class Videoio extends java.lang.Object {
				public static class: java.lang.Class<org.opencv.videoio.Videoio>;
				public static CV_CAP_ANY: number;
				public static CV_CAP_MIL: number;
				public static CV_CAP_VFW: number;
				public static CV_CAP_V4L: number;
				public static CV_CAP_V4L2: number;
				public static CV_CAP_FIREWARE: number;
				public static CV_CAP_FIREWIRE: number;
				public static CV_CAP_IEEE1394: number;
				public static CV_CAP_DC1394: number;
				public static CV_CAP_CMU1394: number;
				public static CV_CAP_STEREO: number;
				public static CV_CAP_TYZX: number;
				public static CV_TYZX_LEFT: number;
				public static CV_TYZX_RIGHT: number;
				public static CV_TYZX_COLOR: number;
				public static CV_TYZX_Z: number;
				public static CV_CAP_QT: number;
				public static CV_CAP_UNICAP: number;
				public static CV_CAP_DSHOW: number;
				public static CV_CAP_MSMF: number;
				public static CV_CAP_PVAPI: number;
				public static CV_CAP_OPENNI: number;
				public static CV_CAP_OPENNI_ASUS: number;
				public static CV_CAP_ANDROID: number;
				public static CV_CAP_ANDROID_BACK: number;
				public static CV_CAP_ANDROID_FRONT: number;
				public static CV_CAP_XIAPI: number;
				public static CV_CAP_AVFOUNDATION: number;
				public static CV_CAP_GIGANETIX: number;
				public static CV_CAP_INTELPERC: number;
				public static CV_CAP_OPENNI2: number;
				public static CV_CAP_GPHOTO2: number;
				public static CV_CAP_GSTREAMER: number;
				public static CV_CAP_FFMPEG: number;
				public static CV_CAP_IMAGES: number;
				public static CV_CAP_ARAVIS: number;
				public static CV_CAP_PROP_DC1394_OFF: number;
				public static CV_CAP_PROP_DC1394_MODE_MANUAL: number;
				public static CV_CAP_PROP_DC1394_MODE_AUTO: number;
				public static CV_CAP_PROP_DC1394_MODE_ONE_PUSH_AUTO: number;
				public static CV_CAP_PROP_POS_MSEC: number;
				public static CV_CAP_PROP_POS_FRAMES: number;
				public static CV_CAP_PROP_POS_AVI_RATIO: number;
				public static CV_CAP_PROP_FRAME_WIDTH: number;
				public static CV_CAP_PROP_FRAME_HEIGHT: number;
				public static CV_CAP_PROP_FPS: number;
				public static CV_CAP_PROP_FOURCC: number;
				public static CV_CAP_PROP_FRAME_COUNT: number;
				public static CV_CAP_PROP_FORMAT: number;
				public static CV_CAP_PROP_MODE: number;
				public static CV_CAP_PROP_BRIGHTNESS: number;
				public static CV_CAP_PROP_CONTRAST: number;
				public static CV_CAP_PROP_SATURATION: number;
				public static CV_CAP_PROP_HUE: number;
				public static CV_CAP_PROP_GAIN: number;
				public static CV_CAP_PROP_EXPOSURE: number;
				public static CV_CAP_PROP_CONVERT_RGB: number;
				public static CV_CAP_PROP_WHITE_BALANCE_BLUE_U: number;
				public static CV_CAP_PROP_RECTIFICATION: number;
				public static CV_CAP_PROP_MONOCHROME: number;
				public static CV_CAP_PROP_SHARPNESS: number;
				public static CV_CAP_PROP_AUTO_EXPOSURE: number;
				public static CV_CAP_PROP_GAMMA: number;
				public static CV_CAP_PROP_TEMPERATURE: number;
				public static CV_CAP_PROP_TRIGGER: number;
				public static CV_CAP_PROP_TRIGGER_DELAY: number;
				public static CV_CAP_PROP_WHITE_BALANCE_RED_V: number;
				public static CV_CAP_PROP_ZOOM: number;
				public static CV_CAP_PROP_FOCUS: number;
				public static CV_CAP_PROP_GUID: number;
				public static CV_CAP_PROP_ISO_SPEED: number;
				public static CV_CAP_PROP_MAX_DC1394: number;
				public static CV_CAP_PROP_BACKLIGHT: number;
				public static CV_CAP_PROP_PAN: number;
				public static CV_CAP_PROP_TILT: number;
				public static CV_CAP_PROP_ROLL: number;
				public static CV_CAP_PROP_IRIS: number;
				public static CV_CAP_PROP_SETTINGS: number;
				public static CV_CAP_PROP_BUFFERSIZE: number;
				public static CV_CAP_PROP_AUTOFOCUS: number;
				public static CV_CAP_PROP_SAR_NUM: number;
				public static CV_CAP_PROP_SAR_DEN: number;
				public static CV_CAP_PROP_AUTOGRAB: number;
				public static CV_CAP_PROP_SUPPORTED_PREVIEW_SIZES_STRING: number;
				public static CV_CAP_PROP_PREVIEW_FORMAT: number;
				public static CV_CAP_OPENNI_DEPTH_GENERATOR: number;
				public static CV_CAP_OPENNI_IMAGE_GENERATOR: number;
				public static CV_CAP_OPENNI_IR_GENERATOR: number;
				public static CV_CAP_OPENNI_GENERATORS_MASK: number;
				public static CV_CAP_PROP_OPENNI_OUTPUT_MODE: number;
				public static CV_CAP_PROP_OPENNI_FRAME_MAX_DEPTH: number;
				public static CV_CAP_PROP_OPENNI_BASELINE: number;
				public static CV_CAP_PROP_OPENNI_FOCAL_LENGTH: number;
				public static CV_CAP_PROP_OPENNI_REGISTRATION: number;
				public static CV_CAP_PROP_OPENNI_REGISTRATION_ON: number;
				public static CV_CAP_PROP_OPENNI_APPROX_FRAME_SYNC: number;
				public static CV_CAP_PROP_OPENNI_MAX_BUFFER_SIZE: number;
				public static CV_CAP_PROP_OPENNI_CIRCLE_BUFFER: number;
				public static CV_CAP_PROP_OPENNI_MAX_TIME_DURATION: number;
				public static CV_CAP_PROP_OPENNI_GENERATOR_PRESENT: number;
				public static CV_CAP_PROP_OPENNI2_SYNC: number;
				public static CV_CAP_PROP_OPENNI2_MIRROR: number;
				public static CV_CAP_OPENNI_IMAGE_GENERATOR_PRESENT: number;
				public static CV_CAP_OPENNI_IMAGE_GENERATOR_OUTPUT_MODE: number;
				public static CV_CAP_OPENNI_DEPTH_GENERATOR_PRESENT: number;
				public static CV_CAP_OPENNI_DEPTH_GENERATOR_BASELINE: number;
				public static CV_CAP_OPENNI_DEPTH_GENERATOR_FOCAL_LENGTH: number;
				public static CV_CAP_OPENNI_DEPTH_GENERATOR_REGISTRATION: number;
				public static CV_CAP_OPENNI_DEPTH_GENERATOR_REGISTRATION_ON: number;
				public static CV_CAP_OPENNI_IR_GENERATOR_PRESENT: number;
				public static CV_CAP_GSTREAMER_QUEUE_LENGTH: number;
				public static CV_CAP_PROP_PVAPI_MULTICASTIP: number;
				public static CV_CAP_PROP_PVAPI_FRAMESTARTTRIGGERMODE: number;
				public static CV_CAP_PROP_PVAPI_DECIMATIONHORIZONTAL: number;
				public static CV_CAP_PROP_PVAPI_DECIMATIONVERTICAL: number;
				public static CV_CAP_PROP_PVAPI_BINNINGX: number;
				public static CV_CAP_PROP_PVAPI_BINNINGY: number;
				public static CV_CAP_PROP_PVAPI_PIXELFORMAT: number;
				public static CV_CAP_PROP_XI_DOWNSAMPLING: number;
				public static CV_CAP_PROP_XI_DATA_FORMAT: number;
				public static CV_CAP_PROP_XI_OFFSET_X: number;
				public static CV_CAP_PROP_XI_OFFSET_Y: number;
				public static CV_CAP_PROP_XI_TRG_SOURCE: number;
				public static CV_CAP_PROP_XI_TRG_SOFTWARE: number;
				public static CV_CAP_PROP_XI_GPI_SELECTOR: number;
				public static CV_CAP_PROP_XI_GPI_MODE: number;
				public static CV_CAP_PROP_XI_GPI_LEVEL: number;
				public static CV_CAP_PROP_XI_GPO_SELECTOR: number;
				public static CV_CAP_PROP_XI_GPO_MODE: number;
				public static CV_CAP_PROP_XI_LED_SELECTOR: number;
				public static CV_CAP_PROP_XI_LED_MODE: number;
				public static CV_CAP_PROP_XI_MANUAL_WB: number;
				public static CV_CAP_PROP_XI_AUTO_WB: number;
				public static CV_CAP_PROP_XI_AEAG: number;
				public static CV_CAP_PROP_XI_EXP_PRIORITY: number;
				public static CV_CAP_PROP_XI_AE_MAX_LIMIT: number;
				public static CV_CAP_PROP_XI_AG_MAX_LIMIT: number;
				public static CV_CAP_PROP_XI_AEAG_LEVEL: number;
				public static CV_CAP_PROP_XI_TIMEOUT: number;
				public static CV_CAP_PROP_XI_EXPOSURE: number;
				public static CV_CAP_PROP_XI_EXPOSURE_BURST_COUNT: number;
				public static CV_CAP_PROP_XI_GAIN_SELECTOR: number;
				public static CV_CAP_PROP_XI_GAIN: number;
				public static CV_CAP_PROP_XI_DOWNSAMPLING_TYPE: number;
				public static CV_CAP_PROP_XI_BINNING_SELECTOR: number;
				public static CV_CAP_PROP_XI_BINNING_VERTICAL: number;
				public static CV_CAP_PROP_XI_BINNING_HORIZONTAL: number;
				public static CV_CAP_PROP_XI_BINNING_PATTERN: number;
				public static CV_CAP_PROP_XI_DECIMATION_SELECTOR: number;
				public static CV_CAP_PROP_XI_DECIMATION_VERTICAL: number;
				public static CV_CAP_PROP_XI_DECIMATION_HORIZONTAL: number;
				public static CV_CAP_PROP_XI_DECIMATION_PATTERN: number;
				public static CV_CAP_PROP_XI_TEST_PATTERN_GENERATOR_SELECTOR: number;
				public static CV_CAP_PROP_XI_TEST_PATTERN: number;
				public static CV_CAP_PROP_XI_IMAGE_DATA_FORMAT: number;
				public static CV_CAP_PROP_XI_SHUTTER_TYPE: number;
				public static CV_CAP_PROP_XI_SENSOR_TAPS: number;
				public static CV_CAP_PROP_XI_AEAG_ROI_OFFSET_X: number;
				public static CV_CAP_PROP_XI_AEAG_ROI_OFFSET_Y: number;
				public static CV_CAP_PROP_XI_AEAG_ROI_WIDTH: number;
				public static CV_CAP_PROP_XI_AEAG_ROI_HEIGHT: number;
				public static CV_CAP_PROP_XI_BPC: number;
				public static CV_CAP_PROP_XI_WB_KR: number;
				public static CV_CAP_PROP_XI_WB_KG: number;
				public static CV_CAP_PROP_XI_WB_KB: number;
				public static CV_CAP_PROP_XI_WIDTH: number;
				public static CV_CAP_PROP_XI_HEIGHT: number;
				public static CV_CAP_PROP_XI_REGION_SELECTOR: number;
				public static CV_CAP_PROP_XI_REGION_MODE: number;
				public static CV_CAP_PROP_XI_LIMIT_BANDWIDTH: number;
				public static CV_CAP_PROP_XI_SENSOR_DATA_BIT_DEPTH: number;
				public static CV_CAP_PROP_XI_OUTPUT_DATA_BIT_DEPTH: number;
				public static CV_CAP_PROP_XI_IMAGE_DATA_BIT_DEPTH: number;
				public static CV_CAP_PROP_XI_OUTPUT_DATA_PACKING: number;
				public static CV_CAP_PROP_XI_OUTPUT_DATA_PACKING_TYPE: number;
				public static CV_CAP_PROP_XI_IS_COOLED: number;
				public static CV_CAP_PROP_XI_COOLING: number;
				public static CV_CAP_PROP_XI_TARGET_TEMP: number;
				public static CV_CAP_PROP_XI_CHIP_TEMP: number;
				public static CV_CAP_PROP_XI_HOUS_TEMP: number;
				public static CV_CAP_PROP_XI_HOUS_BACK_SIDE_TEMP: number;
				public static CV_CAP_PROP_XI_SENSOR_BOARD_TEMP: number;
				public static CV_CAP_PROP_XI_CMS: number;
				public static CV_CAP_PROP_XI_APPLY_CMS: number;
				public static CV_CAP_PROP_XI_IMAGE_IS_COLOR: number;
				public static CV_CAP_PROP_XI_COLOR_FILTER_ARRAY: number;
				public static CV_CAP_PROP_XI_GAMMAY: number;
				public static CV_CAP_PROP_XI_GAMMAC: number;
				public static CV_CAP_PROP_XI_SHARPNESS: number;
				public static CV_CAP_PROP_XI_CC_MATRIX_00: number;
				public static CV_CAP_PROP_XI_CC_MATRIX_01: number;
				public static CV_CAP_PROP_XI_CC_MATRIX_02: number;
				public static CV_CAP_PROP_XI_CC_MATRIX_03: number;
				public static CV_CAP_PROP_XI_CC_MATRIX_10: number;
				public static CV_CAP_PROP_XI_CC_MATRIX_11: number;
				public static CV_CAP_PROP_XI_CC_MATRIX_12: number;
				public static CV_CAP_PROP_XI_CC_MATRIX_13: number;
				public static CV_CAP_PROP_XI_CC_MATRIX_20: number;
				public static CV_CAP_PROP_XI_CC_MATRIX_21: number;
				public static CV_CAP_PROP_XI_CC_MATRIX_22: number;
				public static CV_CAP_PROP_XI_CC_MATRIX_23: number;
				public static CV_CAP_PROP_XI_CC_MATRIX_30: number;
				public static CV_CAP_PROP_XI_CC_MATRIX_31: number;
				public static CV_CAP_PROP_XI_CC_MATRIX_32: number;
				public static CV_CAP_PROP_XI_CC_MATRIX_33: number;
				public static CV_CAP_PROP_XI_DEFAULT_CC_MATRIX: number;
				public static CV_CAP_PROP_XI_TRG_SELECTOR: number;
				public static CV_CAP_PROP_XI_ACQ_FRAME_BURST_COUNT: number;
				public static CV_CAP_PROP_XI_DEBOUNCE_EN: number;
				public static CV_CAP_PROP_XI_DEBOUNCE_T0: number;
				public static CV_CAP_PROP_XI_DEBOUNCE_T1: number;
				public static CV_CAP_PROP_XI_DEBOUNCE_POL: number;
				public static CV_CAP_PROP_XI_LENS_MODE: number;
				public static CV_CAP_PROP_XI_LENS_APERTURE_VALUE: number;
				public static CV_CAP_PROP_XI_LENS_FOCUS_MOVEMENT_VALUE: number;
				public static CV_CAP_PROP_XI_LENS_FOCUS_MOVE: number;
				public static CV_CAP_PROP_XI_LENS_FOCUS_DISTANCE: number;
				public static CV_CAP_PROP_XI_LENS_FOCAL_LENGTH: number;
				public static CV_CAP_PROP_XI_LENS_FEATURE_SELECTOR: number;
				public static CV_CAP_PROP_XI_LENS_FEATURE: number;
				public static CV_CAP_PROP_XI_DEVICE_MODEL_ID: number;
				public static CV_CAP_PROP_XI_DEVICE_SN: number;
				public static CV_CAP_PROP_XI_IMAGE_DATA_FORMAT_RGB32_ALPHA: number;
				public static CV_CAP_PROP_XI_IMAGE_PAYLOAD_SIZE: number;
				public static CV_CAP_PROP_XI_TRANSPORT_PIXEL_FORMAT: number;
				public static CV_CAP_PROP_XI_SENSOR_CLOCK_FREQ_HZ: number;
				public static CV_CAP_PROP_XI_SENSOR_CLOCK_FREQ_INDEX: number;
				public static CV_CAP_PROP_XI_SENSOR_OUTPUT_CHANNEL_COUNT: number;
				public static CV_CAP_PROP_XI_FRAMERATE: number;
				public static CV_CAP_PROP_XI_COUNTER_SELECTOR: number;
				public static CV_CAP_PROP_XI_COUNTER_VALUE: number;
				public static CV_CAP_PROP_XI_ACQ_TIMING_MODE: number;
				public static CV_CAP_PROP_XI_AVAILABLE_BANDWIDTH: number;
				public static CV_CAP_PROP_XI_BUFFER_POLICY: number;
				public static CV_CAP_PROP_XI_LUT_EN: number;
				public static CV_CAP_PROP_XI_LUT_INDEX: number;
				public static CV_CAP_PROP_XI_LUT_VALUE: number;
				public static CV_CAP_PROP_XI_TRG_DELAY: number;
				public static CV_CAP_PROP_XI_TS_RST_MODE: number;
				public static CV_CAP_PROP_XI_TS_RST_SOURCE: number;
				public static CV_CAP_PROP_XI_IS_DEVICE_EXIST: number;
				public static CV_CAP_PROP_XI_ACQ_BUFFER_SIZE: number;
				public static CV_CAP_PROP_XI_ACQ_BUFFER_SIZE_UNIT: number;
				public static CV_CAP_PROP_XI_ACQ_TRANSPORT_BUFFER_SIZE: number;
				public static CV_CAP_PROP_XI_BUFFERS_QUEUE_SIZE: number;
				public static CV_CAP_PROP_XI_ACQ_TRANSPORT_BUFFER_COMMIT: number;
				public static CV_CAP_PROP_XI_RECENT_FRAME: number;
				public static CV_CAP_PROP_XI_DEVICE_RESET: number;
				public static CV_CAP_PROP_XI_COLUMN_FPN_CORRECTION: number;
				public static CV_CAP_PROP_XI_ROW_FPN_CORRECTION: number;
				public static CV_CAP_PROP_XI_SENSOR_MODE: number;
				public static CV_CAP_PROP_XI_HDR: number;
				public static CV_CAP_PROP_XI_HDR_KNEEPOINT_COUNT: number;
				public static CV_CAP_PROP_XI_HDR_T1: number;
				public static CV_CAP_PROP_XI_HDR_T2: number;
				public static CV_CAP_PROP_XI_KNEEPOINT1: number;
				public static CV_CAP_PROP_XI_KNEEPOINT2: number;
				public static CV_CAP_PROP_XI_IMAGE_BLACK_LEVEL: number;
				public static CV_CAP_PROP_XI_HW_REVISION: number;
				public static CV_CAP_PROP_XI_DEBUG_LEVEL: number;
				public static CV_CAP_PROP_XI_AUTO_BANDWIDTH_CALCULATION: number;
				public static CV_CAP_PROP_XI_FFS_FILE_ID: number;
				public static CV_CAP_PROP_XI_FFS_FILE_SIZE: number;
				public static CV_CAP_PROP_XI_FREE_FFS_SIZE: number;
				public static CV_CAP_PROP_XI_USED_FFS_SIZE: number;
				public static CV_CAP_PROP_XI_FFS_ACCESS_KEY: number;
				public static CV_CAP_PROP_XI_SENSOR_FEATURE_SELECTOR: number;
				public static CV_CAP_PROP_XI_SENSOR_FEATURE_VALUE: number;
				public static CV_CAP_PROP_ANDROID_FLASH_MODE: number;
				public static CV_CAP_PROP_ANDROID_FOCUS_MODE: number;
				public static CV_CAP_PROP_ANDROID_WHITE_BALANCE: number;
				public static CV_CAP_PROP_ANDROID_ANTIBANDING: number;
				public static CV_CAP_PROP_ANDROID_FOCAL_LENGTH: number;
				public static CV_CAP_PROP_ANDROID_FOCUS_DISTANCE_NEAR: number;
				public static CV_CAP_PROP_ANDROID_FOCUS_DISTANCE_OPTIMAL: number;
				public static CV_CAP_PROP_ANDROID_FOCUS_DISTANCE_FAR: number;
				public static CV_CAP_PROP_ANDROID_EXPOSE_LOCK: number;
				public static CV_CAP_PROP_ANDROID_WHITEBALANCE_LOCK: number;
				public static CV_CAP_PROP_IOS_DEVICE_FOCUS: number;
				public static CV_CAP_PROP_IOS_DEVICE_EXPOSURE: number;
				public static CV_CAP_PROP_IOS_DEVICE_FLASH: number;
				public static CV_CAP_PROP_IOS_DEVICE_WHITEBALANCE: number;
				public static CV_CAP_PROP_IOS_DEVICE_TORCH: number;
				public static CV_CAP_PROP_GIGA_FRAME_OFFSET_X: number;
				public static CV_CAP_PROP_GIGA_FRAME_OFFSET_Y: number;
				public static CV_CAP_PROP_GIGA_FRAME_WIDTH_MAX: number;
				public static CV_CAP_PROP_GIGA_FRAME_HEIGH_MAX: number;
				public static CV_CAP_PROP_GIGA_FRAME_SENS_WIDTH: number;
				public static CV_CAP_PROP_GIGA_FRAME_SENS_HEIGH: number;
				public static CV_CAP_PROP_INTELPERC_PROFILE_COUNT: number;
				public static CV_CAP_PROP_INTELPERC_PROFILE_IDX: number;
				public static CV_CAP_PROP_INTELPERC_DEPTH_LOW_CONFIDENCE_VALUE: number;
				public static CV_CAP_PROP_INTELPERC_DEPTH_SATURATION_VALUE: number;
				public static CV_CAP_PROP_INTELPERC_DEPTH_CONFIDENCE_THRESHOLD: number;
				public static CV_CAP_PROP_INTELPERC_DEPTH_FOCAL_LENGTH_HORZ: number;
				public static CV_CAP_PROP_INTELPERC_DEPTH_FOCAL_LENGTH_VERT: number;
				public static CV_CAP_INTELPERC_DEPTH_GENERATOR: number;
				public static CV_CAP_INTELPERC_IMAGE_GENERATOR: number;
				public static CV_CAP_INTELPERC_GENERATORS_MASK: number;
				public static CV_CAP_MODE_BGR: number;
				public static CV_CAP_MODE_RGB: number;
				public static CV_CAP_MODE_GRAY: number;
				public static CV_CAP_MODE_YUYV: number;
				public static CV_CAP_OPENNI_DEPTH_MAP: number;
				public static CV_CAP_OPENNI_POINT_CLOUD_MAP: number;
				public static CV_CAP_OPENNI_DISPARITY_MAP: number;
				public static CV_CAP_OPENNI_DISPARITY_MAP_32F: number;
				public static CV_CAP_OPENNI_VALID_DEPTH_MASK: number;
				public static CV_CAP_OPENNI_BGR_IMAGE: number;
				public static CV_CAP_OPENNI_GRAY_IMAGE: number;
				public static CV_CAP_OPENNI_IR_IMAGE: number;
				public static CV_CAP_OPENNI_VGA_30HZ: number;
				public static CV_CAP_OPENNI_SXGA_15HZ: number;
				public static CV_CAP_OPENNI_SXGA_30HZ: number;
				public static CV_CAP_OPENNI_QVGA_30HZ: number;
				public static CV_CAP_OPENNI_QVGA_60HZ: number;
				public static CV_CAP_INTELPERC_DEPTH_MAP: number;
				public static CV_CAP_INTELPERC_UVDEPTH_MAP: number;
				public static CV_CAP_INTELPERC_IR_MAP: number;
				public static CV_CAP_INTELPERC_IMAGE: number;
				public static CV_CAP_PROP_GPHOTO2_PREVIEW: number;
				public static CV_CAP_PROP_GPHOTO2_WIDGET_ENUMERATE: number;
				public static CV_CAP_PROP_GPHOTO2_RELOAD_CONFIG: number;
				public static CV_CAP_PROP_GPHOTO2_RELOAD_ON_CHANGE: number;
				public static CV_CAP_PROP_GPHOTO2_COLLECT_MSGS: number;
				public static CV_CAP_PROP_GPHOTO2_FLUSH_MSGS: number;
				public static CV_CAP_PROP_SPEED: number;
				public static CV_CAP_PROP_APERTURE: number;
				public static CV_CAP_PROP_EXPOSUREPROGRAM: number;
				public static CV_CAP_PROP_VIEWFINDER: number;
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
				public static CAP_OPENNI2: number;
				public static CAP_OPENNI2_ASUS: number;
				public static CAP_GPHOTO2: number;
				public static CAP_GSTREAMER: number;
				public static CAP_FFMPEG: number;
				public static CAP_IMAGES: number;
				public static CAP_ARAVIS: number;
				public static CAP_OPENCV_MJPEG: number;
				public static CAP_INTEL_MFX: number;
				public static CAP_XINE: number;
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
				public static CAP_MODE_BGR: number;
				public static CAP_MODE_RGB: number;
				public static CAP_MODE_GRAY: number;
				public static CAP_MODE_YUYV: number;
				public static VIDEOWRITER_PROP_QUALITY: number;
				public static VIDEOWRITER_PROP_FRAMEBYTES: number;
				public static VIDEOWRITER_PROP_NSTRIPES: number;
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
				public constructor();
			}
		}
	}
}